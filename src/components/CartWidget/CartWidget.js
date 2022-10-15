import Cart from '../../assets/cartSolid.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () =>{
    const {cart} = useContext(CartContext);

    return (       
        <div>
            <img src={Cart} className='cart' alt='cartImg' />
            <p className='cartTotal'>{cart.reduce((total, item) => total + item.quantity, 0)}</p>
        </div>
    )
};

export default CartWidget;