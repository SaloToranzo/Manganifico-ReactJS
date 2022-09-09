import Cart from '../../assets/cartSolid.png'

const CartWidget = () =>{
    return (
        <div>
            <img src={Cart} className='cart' alt='cartImg' />
        </div>
    )
}

export default CartWidget;