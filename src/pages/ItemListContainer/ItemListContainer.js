import './ItemListContainer.css'
// import data from '../../components/mockData';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts()    
    }, [categoryId])

    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'items');
        if (categoryId) {
            const queryFilter = query(querySnapshot, where("category", "==", categoryId))
            getDocs(queryFilter).then((response) => {
                const data = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                setProductList(data);
            });
        } else {
            getDocs(querySnapshot).then((response) => {
                const data = response.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                })
                setProductList(data);
            }).catch((err) => console.log(err));
        };
    };

    return (
        <div className='itemListContainer'>
            <ItemList list={productList}
            />
        </div>
    )
};

export default ItemListContainer;