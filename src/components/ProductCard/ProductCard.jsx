import React, {useContext, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FaShoppingCart} from "react-icons/fa";
import { CartContext } from '../../context/CartContext';


const ProductCard = ({ product, fetchProductsData}) => {
  const {addToCart} = useContext(CartContext);
 

  return (
    <div className='product-card'>
      
        <div className='card'>
          <img className="img"src={product.foto}/>
          <h4>{product.nombre}</h4>
          <p>{product.descripcion}</p>
          <h5>Precio: {product.precio}</h5>
          
          <button onClick={() => addToCart(product)}>
            {" "}
            Agregar al carrito 
            <FaShoppingCart />
          </button>
          
        </div>
      
      <ToastContainer/>
    </div>
  )
}

export default ProductCard