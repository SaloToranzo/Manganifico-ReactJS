import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({product}) =>{
    const [count, setCount] = useState(1);
    const { addToCart } = useContext(CartContext);

    const handleClick = () =>{
        console.log(count)
    };


    function onAdd (product, count) {
        addToCart(product, count)
    };

    return (
        <div className="itemDetail">
            <div className='leftContainer'>
                <img src={product.image} alt={product.title} className="itemImg" />
            </div>

            <div className='rightContainer'>
                <div>
                    <h2 className="itemTitle">{product.title}</h2>
                </div>
                <h3 className="itemPrice">${product.price}</h3>
                <div className='countContainer'>
                    <ItemCount
                        setCount={setCount}
                        count={count}
                        stock={product.stock}
                    />
                    <div className='cartBtn'>
                        <button className='addToCart' onClick={() => onAdd(product, count)}>Agregar al carrito</button>
                    </div>
                    <Link to={'/cart'} onClick={handleClick}>
                        <button className='goToCart'>Ir al carrito</button>
                    </Link>
                </div>
                <div className='itemDescriptionContainer'>
                    <p className="itemDescription">{product.description}</p>
                </div>
            </div>

        </div>
    )
};

export default ItemDetail;