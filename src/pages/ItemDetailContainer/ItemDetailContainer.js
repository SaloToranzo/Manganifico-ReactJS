import data from "../../components/mockData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () =>{
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState([]);

    useEffect(() =>{
        getProduct.then((response) =>{
            const filteredData = response.filter((product)=> product.id === id);
            setProductDetail(...filteredData);
        });
    });

    const getProduct = new Promise((resolve) =>{
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    return (
        <div>
            <ItemDetail product={productDetail} />
        </div>
    )
};

export default ItemDetailContainer;