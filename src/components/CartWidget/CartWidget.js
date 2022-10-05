import Cart from '../../assets/cartSolid.png'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () =>{
    const {totalItems} = useContext(CartContext);

    return (       
        <div>
            <img src={Cart} className='cart' alt='cartImg' />
            <p className='cartTotal'>{totalItems}</p>
        </div>
    )
};

export default CartWidget;