import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const Cart = () => {
    const { cart, removeItem } = useContext(CartContext);
    console.log('cart', cart)
    return (
        <div>
            <h1>Cart</h1>
            {cart.lenght === 0 ? (<h2>No hay productos en el carrito</h2>) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <img src={item.image} />
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