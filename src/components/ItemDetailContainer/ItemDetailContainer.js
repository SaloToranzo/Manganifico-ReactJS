import data from "../mockData";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{
    const [productDetail, setProductDetail] = useState([]);

    useEffect(() =>{
        getProduct.then((response) =>{
            setProductDetail(response.find((product) => product.id === '03'));
        })
        .catch((err)=> console.log(err));
    },[]);


    const getProduct = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(data);
            reject('Hubo un error');
        }, 2000);
    });

    return (
        <>
            <ItemDetail product={productDetail} />
        </>
    )
};

export default ItemDetailContainer;