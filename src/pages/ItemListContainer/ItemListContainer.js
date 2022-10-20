import './ItemListContainer.css'
// import data from '../../components/mockData';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [productList, setProductList] = useState([]);

    console.log(categoryId)

    useEffect(() => {
        getProducts()    
    }, [categoryId])

    const getProducts = () => {
        const db = getFirestore();
        const querySnapshot = collection(db, 'items');
        if(categoryId){
            const queryFilter = query(
                querySnapshot, 
                where('categoryId', "array-contains", categoryId
            ));
            getDocs(queryFilter).then((response) =>{
                const data = response.docs.map((product) =>{
                    console.log(product.data())
                    return { id: product.id, ...product.data() }
                });
                setProductList(data)
            });
        } else{
            getDocs(querySnapshot).then((response) =>{
                const data = response.docs.map((product) =>{
                    console.log(product.data())
                    return { id: product.id, ...product.data() }
                });
                setProductList(data)
            });
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