import Cart from '../../assets/cartSolid.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () =>{
    const {cart} = useContext(CartContext);

    return (       
        <div>
            <img src={Cart} className='cart' alt='cartImg' />
            <p className='cartTotal'>{cart.length}</p>
        </div>
    )
}

export default CartWidget;