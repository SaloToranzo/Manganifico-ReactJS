import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);
    console.log('cart', cart)
    return (
        <div>
            <h1>Carrito</h1>
            {cart.lenght > 0 ?
                <button onClick={() => clearCart()}>Vaciar carrito</button>
                : ''}
            {cart.lenght === 0 ? (
                <>
                    <h2>No hay productos en el carrito</h2>
                    <Link to={'/'}>Volver a comprar</Link>
                </>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <img src={item.image} alt={item.title} />
                            <p>{item.price}</p>
                            <p>{item.quatity}</p>
                            <button onClick={() => removeItem(item.id)}>
                                Eliminar producto del carrito
                            </button>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default Cart;