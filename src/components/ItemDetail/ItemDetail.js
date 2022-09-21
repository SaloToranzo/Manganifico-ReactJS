import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) =>{
    const [counter, setCounter] = useState(0);

    console.log(product);

    const handleClick = () =>{
        console.log(counter)
    };

    return (
        <div className="itemDetailContainer">
            <h2 className="itemTitle">{product.title}</h2>
            <img src={product.pictureUrl} alt={product.title} className="itemImg"/>
            <h3 className="itemPrice">{product.price}</h3>
            <p className="itemDetail">{product.detail}</p>
            <ItemCount
                setCounter={setCounter}
                counter={counter}
                stock={product.stock}
                />
            <Link to={'/cart'} onClick={handleClick}>
                Ir al carrito    
            </Link>    
        </div>
    )
};

export default ItemDetail;