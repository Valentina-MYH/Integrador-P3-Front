import {createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
export const CartContext = createContext();

const CartProvider = ({children}) => {
  
    const [cart, setCart] = useState ([]);
    useEffect(()=>{
        const cartStorage = localStorage.getItem("cart");
        cartStorage != null && setCart(JSON.parse(cartStorage))
    }, [])
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart));
    },[cart])
    
    const addToCart = (product) => {
        const existingProductIndex = cart.findIndex((p) => p.id === product.id);
      
        if (existingProductIndex !== -1) {
          // El producto ya está en el carrito, actualiza la cantidad
          const updatedCart = [...cart];
          updatedCart[existingProductIndex].cantidad += product.cantidad;
          setCart(updatedCart);
        } else {
          // Agrega el producto al carrito
          setCart((prevState) => [...prevState, { ...product, cantidad: 1 }]);
        }
      
        toast.success("Agregando al carrito");
      };

    localStorage.setItem('cart', JSON.stringify(cart))
    const removeCart = (productId) =>{
        const newCart = cart.filter(productCart => productCart.id !== productId)
        setCart(newCart)
        toast.error('Eliminando producto del carrito')
    }
  return <CartContext.Provider value={{cart, addToCart, removeCart}}>{children}</CartContext.Provider>
}

export default CartProvider