import { useState } from "react";
import { CartContext } from './CartContext';

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            alert('El producto ya se encuentra en el carrito');
        } else {
            setCart([...cart, {...item, quantity}]);
        }
        console.log('cart', [...cart, {...item, quantity}]);
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const clear = () =>{
        setCart([]);
    };

    const removeItem = (productId) =>{
        let newCart = [];
        cart.forEach((product) =>{
            if(product.id === productId){
                console.log(product);
            } else{
                newCart.push(product);
            }
        });
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeItem}}>
            {children}
        </CartContext.Provider>
    );
};