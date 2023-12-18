import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Alta from '../../Pages/Alta/Alta'
import Contacto from '../../Pages/Contacto/Contacto'
import Nosotros from '../../Pages/Nosotros/Nosotros'
import Home from '../../Pages/Home/Home'
import log from '../../assets/img/log.jpeg'

import { FaBars } from "react-icons/fa6";
import './Header.css'


import CartButton from '../../components/CartButton/CartButton.jsx'


const Header = () => {



function openMenu(){
  let link = document.getElementById("links");
  if(link.style.display === 'flex'){
      link.style.display = "none";
  }else{
      link.style.display = 'flex';
  }

}
  
  const [openModal, setOpenModal] = useState(false)
  
  return (    
    <div className='Header'>
      <Link to={"/"}>
        <img src={log} id="logo" alt="imagen" style={{ width: '100px' }} />
      </Link>
      <h2>Mila’s CANDLES</h2>
      <Link element={'javascript:void(0);'} onClick={openMenu}>
        <FaBars style={ {color:' #9F968F'} } />
      </Link>
     
        <ul id="nav-menu">
            <li><Link className="Link"to={"/"} element={<Home/>}>  Home  </Link></li>
            <li><Link className="Link"to={"/alta"} element={<Alta/>}>   Update  </Link></li>
            <li><Link className="Link"to={"/contacto"} element={<Contacto/>}>Contacto  </Link></li>
            <li><Link className="Link"to={"/nosotros"} element={<Nosotros/>}>  Sobre Nosotros</Link></li>
        </ul>
      
      <div className="carrito-compras">
        <CartButton onClick={() => setOpenModal(true)}/>
      </div>
   
    </div>
  )
  
}

export default Header