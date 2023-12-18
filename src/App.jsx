import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Alta from "./Pages/Alta/Alta"
import Contacto from "./Pages/Contacto/Contacto"
import Nosotros from "./Pages/Nosotros/Nosotros"
import ErrorPage404 from "./Pages/ErrorPage404"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import './App.css'
import 'typeface-playfair-display';
import 'typeface-quicksand';

import CartProvider from "./context/CartContext"

const App = () => {
 

  
  return (
    <>
    <CartProvider>
   
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/alta' element={<Alta/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/nosotros' element={<Nosotros/>}/>
      <Route path='*' element={<ErrorPage404/>}/>
    </Routes>
    
    <Footer/>
    </CartProvider>
    
    
    </>
  
  )
}

export default App
