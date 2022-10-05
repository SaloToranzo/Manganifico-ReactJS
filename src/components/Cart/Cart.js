import './Cart.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore';
import moment from 'moment';

const Cart = () => {
    const { cart, removeItem, clearCart } = useContext(CartContext);
    console.log('cart', cart)

    const db = getFirestore();

    const createOrder = () =>{
        const order = {
            buyer: {
                name: 'Salo',
                phone: '351123456',
                email: 'test@test.com',
            },
            items: cart,
            total: cart.reduce((pastValue, currentValue) => pastValue + (currentValue.price * currentValue.quantity), 0),
            date: moment().format(),
        };
        const query = collection(db, 'orders');
        addDoc(query, order)
        .then(({id}) => {
            console.log(id)
            alert('Compra finalizada')
        })
        .catch(() => alert('Fallo la compra'))
    };

    const updateOrder = () =>{
        const idOrder = 'YFoNO9ZqGFN2alAUKWqY'
        const order = {
            buyer: {
                name: 'Salo',
                phone: '351123456',
                email: 'test@test.com',
            },
            items: cart.pop(),
            total: cart.reduce((pastValue, currentValue) => pastValue + (currentValue.price * currentValue.quantity), 0),
            date: moment().format(),
        };
        const queryUpdate = doc(db, 'orders', idOrder);
        updateDoc(queryUpdate, order)
        .then((response) =>{
            console.log(response)
        })
        .catch((error) =>{
            console.log(error)
        })
    }



    return (
        <div>
            <h1>Carrito</h1>
            {cart.length > 0 ?
                <button onClick={() => clearCart()}>Vaciar carrito</button>
                : ''}
            {cart.length === 0 ? (
                <>
                    <h2>No hay productos en el carrito</h2>
                    <Link to={'/'}>Volver a comprar</Link>
                </>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <img src={item.image} className="cartImg" alt={item.title} />
                            <p>{item.price}</p>
                            <p>{item.quantity}</p>
                            <button onClick={() => removeItem(item.id)}>
                                Eliminar producto del carrito
                            </button>
                        </div>
                    ))}
                </>
            )}
            <div>
                <button onClick={createOrder}>
                    Finalizar compra
                </button>
            </div>
            <div>
                <button onClick={updateOrder}>Actualizar compra</button>
            </div>
        </div>
    )
}

export default Cart;