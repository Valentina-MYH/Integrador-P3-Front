import React, { useContext, useEffect, useState } from 'react'
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { FaXmark} from "react-icons/fa6";
import { CartContext } from '../../context/CartContext';
import './style.css'

const CartButton = () => {
    const {cart, removeCart} = useContext(CartContext)
    const [isOpen, setIsOpen] = useState(false)
    const [total, setTotal] = useState(0);
    const toggleCart=()=>{
        setIsOpen(prevState => !prevState)
    } 
    useEffect(() => {
        const newTotal = cart.reduce((acc, productCard) =>{
            return acc + productCard.precio
        },0)
        setTotal(newTotal);
  }, [cart]);

  return (
    <>
        <button className='cart-button' onClick={toggleCart}> 
            <FaShoppingCart/>
        </button>
        {isOpen && (
            <div className="cart-overlay">
                <div className="cart">
                    <button className="close-button" onClick={toggleCart}>
                        <FaXmark />
                    </button>
                    <h2>Carrito de compras</h2>
                    {cart.length > 0 ? 
                        <ul className='cart-list'>
                            {cart.map((product) => (
                            <li key={product.id}>
                    {product.nombre} - ${product.precio} x {product.cantidad || 1} - {' '}
                    <FaTrash
                      style={{ cursor: 'pointer' }}
                      onClick={() => removeCart(product.id)}
                    />
                  </li>
                            
                            ))}
                           

                           
                        </ul>
                        : <p>El carrito está vacío</p>
                        } <h3>Total: ${total}</h3>
                </div>
            </div>
            )}
        
    </>)

}


export default CartButton