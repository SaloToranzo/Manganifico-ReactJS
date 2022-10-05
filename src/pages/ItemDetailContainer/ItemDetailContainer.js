import data from "../../components/mockData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () =>{
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState([]);

    useEffect (() =>{
        getProduct();
    }, [id])

    const getProduct = () =>{
        const db = getFirestore();
        const queryDoc = doc(db, 'items', id);
        getDoc(queryDoc).then((res) =>{
            setProductDetail({id: res.id, ...res.data()});
        }).catch((err) => console.log(err));
    };

    return (
        <div>
            <ItemDetail product={productDetail} />
        </div>
    )
};

export default ItemDetailContainer;