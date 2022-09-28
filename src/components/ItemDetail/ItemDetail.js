import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({product}) =>{
    const [count, setCount] = useState(1);

    const handleClick = () =>{
        console.log(count)
    };

    const { addToCart } = useContext(CartContext);

    function onAdd (product, count) {
        addToCart(product, count)
    };

    return (
        <div className="itemDetailContainer">
            <h2 className="itemTitle">{product.title}</h2>
            <img src={product.image} alt={product.title} className="itemImg"/>
            <h3 className="itemPrice">{product.price}</h3>
            <p className="itemDetail">{product.detail}</p>
            <ItemCount
                setCount={setCount}
                count={count}
                stock={product.stock}
                />
            <div className='cartBtn'>
                <button className='addToCart' onClick={() => onAdd(product, count)}>Agregar al carrito</button>
            </div>
            <Link to={'/cart'} onClick={handleClick}>
                Ir al carrito    
            </Link>    
        </div>
    )
};

export default ItemDetail;