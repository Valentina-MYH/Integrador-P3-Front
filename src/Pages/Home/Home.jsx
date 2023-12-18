import React, { useState, useEffect } from 'react'
import './style.css'
import ProductList from '../../components/ProductList/ProductList'

const Home = () => {
  const [ products, setProducts ] = useState([])
  const [ error, setError ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(true)
  useEffect(()=> {
    fetchProductsData()
  }, [])
    const fetchProductsData = async () => {
    const url = 'https://653ff79445bedb25bfc18468.mockapi.io/api/products-candles'
    
    try{
      
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setIsLoading(false)
    }catch (error){
      setError(true)

    }
    if ( error ) return <p>Hubo un error al cargar los productos</p>
    if ( isLoading ) return <p>Cargando...</p>
  }
  return (
    <>
      <article className="content">
            <div className="text">
                <h3>Velas Aromaticas</h3>
                <p>Cera de soja 100% Veganas</p>
                
            </div>
            
      </article>
      <div className='cards-conteiner'>
        <aside className='article'>
          
          {  products.length > 0 ? (
        <ProductList products={products} fetchProductsData /> 
          ): ( <p>No hay productos para mostrar</p> )
        }
      
        </aside>
      </div>
    
      
      
    
    </>
    
  )
}

export default Home