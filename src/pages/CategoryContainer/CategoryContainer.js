import data from '../../components/mockData';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';

const CategoryContainer = () =>{
    const {categoryId} = useParams();
    console.log(categoryId);

    const [productList, setProductList] = useState([]);

    useEffect(() =>{
        getProduct.then((response) =>{
            const filteredData = response.filter((product) => product.categoryId === categoryId);
            setProductList(...filteredData);
        });
    });

    const getProduct = new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(data);
        }, 2000);
    });

    return (
        <>
            <ItemList list={productList}
            />
        </>
    )
};

export default CategoryContainer;