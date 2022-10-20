import Cart from '../../assets/cartSolid.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css'

const CartWidget = () =>{
    const {cart} = useContext(CartContext);

    return (       
        <div>
            <img src='https://cdn-icons-png.flaticon.com/512/263/263142.png' className='cartIcon' alt='cartImg' />
            <p className='cartTotal'>{cart.reduce((total, item) => total + item.quantity, 0)}</p>
        </div>
    )
};

export default CartWidget;