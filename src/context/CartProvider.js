import { useState } from "react";
import { CartContext } from './CartContext';

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    const addToCart = (item, quantity) => {
        const itemFound = isInCart(item.id);
        setTotalItems(totalItems + quantity);
        if(itemFound){
            itemFound.quantity = itemFound.quantity += quantity;
        } else{
            setCart([...cart, {...item, quantity}]);
        };
        console.log(totalItems)
    };

    const isInCart = (id) => {
        return cart.find((item) => item.id === id);
    };

    const clearCart = () =>{
        setCart([]);
    };

    const removeItem = (productId) =>{
        let newCart = [];
        cart.forEach((product) =>{
            if(product.id !== productId){
                newCart.push(product);
            }
        });
        setCart(newCart);
    }

    const TotalInCart = () => {
        return cart.reduce(
          (acc, current) => acc + current.price * current.quantity,
          0
        )};

    return (
        <CartContext.Provider value={{cart, addToCart, removeItem, clearCart, TotalInCart}}>
            {children}
        </CartContext.Provider>
    );
};