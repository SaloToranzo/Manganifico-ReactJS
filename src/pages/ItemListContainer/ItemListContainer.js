import './ItemListContainer.css'
// import ItemCount from '../ItemCount/ItemCount';
import data from '../../components/mockData';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () =>{
    const {categoryId} = useParams();
    console.log(categoryId);
    const [productList, setProductList] = useState([]);

    useEffect (() => {
        if(categoryId){
            const response = data.filter((response) => response.categoryId === categoryId)
            setProductList(response);
        }else{
            getProducts.then((response) => {
                setProductList(response);
            })
        }        
    },[categoryId])

    const getProducts = new Promise((resolve, reject) => { 
            setTimeout(() => {
                resolve(data);
            }, 2000);
            
        });

    return(
        <div className='itemListContainer'>
            <ItemList list={productList}
            />
        </div>
    )
};

export default ItemListContainer;