import './ItemListContainer.css'
// import ItemCount from '../ItemCount/ItemCount';
import data from '../../components/mockData';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';

const ItemListContainer = () =>{
    const [productList, setProductList] = useState([]);
    
    useEffect(() => {
        getProducts.then((response) =>{
            setProductList(response);
        })
        .catch((err)=> console.log(err));
    },[]);

    const getProducts = new Promise((resolve, reject) =>{
            setTimeout(() => {
                resolve(data);
                reject('Hubo un error');
            }, 2000);
        });

    return(
        <>
            <ItemList list={productList}
            />
        </>
    )
};

export default ItemListContainer;