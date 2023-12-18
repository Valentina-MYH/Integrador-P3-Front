import React from 'react'
import './style.css'
import ProductForm from '../../components/ProductForm/ProductForm'

const Alta = () => {
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
    <div className='alta-main'>
      <ProductForm fetchData={fetchProductsData}/>


    </div>
  )
}

export default Alta