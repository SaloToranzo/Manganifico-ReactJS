import './Cart.css';
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { collection, addDoc, getFirestore, updateDoc, doc } from 'firebase/firestore';
import moment from 'moment';
import Swal from 'sweetalert2'

const Cart = () => {
    const { cart, removeItem, clearCart, TotalInCart } = useContext(CartContext);
    const [order, setOrder] = useState({
        buyer: {
          name: "",
          phone: "",
          email: "",
        },
        items: cart,
        total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        date: moment().format("DD/MM/YYYY, h:mm:ss a")
      });

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
            Swal.fire({
                icon: 'success',
                title: `'Gracias por tu compra'`,
                text: `'Tu número de orden es: ${id}'`,
            })
        })
        .catch(() => Swal.fire({
            icon: 'error',
            title: '¡Algo salió mal!',
            text: 'Hubo un error al completar la compra. Por favor intenta de nuevo.',
           
          })
        )
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

    const handleInputChange = (e) => {

        setOrder({
            ...order,
            buyer: {
                ...order.buyer,
                [e.target.name]: e.target.value,
            }
        });
    };


    return (
        <div className='cartContainer'>
            {cart.length === 0 ? (
                <div className='emptyContainer'>
                    <h1 className='emptyText'>No tienes productos en tu carrito</h1>
                    <Link to={'/'}>
                        <button className='backButton'>Ver productos</button>
                    </Link>
                </div>
            ) :
            
            (
                <div className='cartGrid'>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <div className='cartLeft'>
                                <div className='itemInCart'>
                                    <p className='cartTitle'>{item.title}</p>
                                    
                                        <div className='cartImgContainer'>
                                            <img src={item.image} className="cartImg" alt={item.title} />
                                        </div>
                                        <div className='cartDetail'>
                                            <p className='cartPrice'>${item.price}</p>
                                            <p className='cartQuantity'>Cantidad: {item.quantity}</p>
                                            <p className='subtotal'>Subtotal: ${item.quantity * item.price}</p>
                                        </div>
                                    <button onClick={() => removeItem(item.id)} className='deleteItem'>
                                        Eliminar producto del carrito
                                    </button>
                                </div>
                            </div>
                            {/* <div>
                                <button onClick={updateOrder}>Actualizar compra</button>
                            </div> */}
                        </div>
                    ))}
                    <div className='cartRight'>
                            <div className='total'>
                                <p>Precio final: ${TotalInCart()}</p>
                            </div>
                            <div className='form'>
                                <div className='formText'>
                                    Para finalizar, completa tus datos
                                </div>
                                <input className="input" name="name" type="text" placeholder="Nombre" value={order.buyer.name} onChange={handleInputChange} />

                                <input className="input" name="phone" type="phone" placeholder="Phone" value={order.buyer.phone} onChange={handleInputChange} />

                                <input className="input" name="email" type="email" placeholder="Email" value={order.buyer.email} onChange={handleInputChange} />
                            </div>
                            <div>
                                <button onClick={createOrder}>
                                    Finalizar compra
                                </button>
                            </div>
                            <div>
                                <button onClick={clearCart}>
                                    Vaciar carrito
                                </button>
                            </div>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default Cart;