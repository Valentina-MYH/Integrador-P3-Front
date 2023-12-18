import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const expresiones = {
    nombres: /^[A-Z][a-zA-Z]*$/,
    
    stock: /^\d+(\.\d{1,2})?$/,
    marca: /^[a-zA-Z0-9\s\-_.]*$/,
    categoria: /^(Nuevo|Casi nuevo|Usado)$/,
    corta: /^.{1,50}$/,
    larga: /^.{50,100}$/,
    edad: /^(1[8-9]|[2-9]\d|100)$/,
};
const ProductForm = ({fetchData}) => {

    const [productFormValues, setProductFormValues] = useState({
        nombre:'',
        precio:0,
        stock:0,
        marca:'',
        categoria:'',
        descripcion:'',
        envio:'',
        foto:null
    })
    const [formErrors, setFormErrors] = useState({
        nombre: '',
        
        stock: '',
        marca: '',
        categoria: '',
        descripcion: '',
        envio: '',
        foto: '',
    });


    const handleUpdateProductFormValues = (value, inputReference) => {
       
            setProductFormValues((prevState=>({
                ...prevState, [inputReference]: value})))
    }

    const validateForm = () => {
        let valid = true;
        const errors = { ...formErrors };

        for (const key in productFormValues) {
            if (key in expresiones && !expresiones[key].test(productFormValues[key])) {
                errors[key] = `Formato incorrecto en ${key}`;
                valid = false;
            } else {
                errors[key] = '';
            }
        }

        setFormErrors(errors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            if (formErrors.nombre) {
                toast.error("El Nombre debe contener únicamente letras y el primer caracter debe ser en mayúsculas");
            }
           
            if (formErrors.stock) {
                toast.error("El stock debe contener únicamente números");
            }
            if (formErrors.marca) {
                toast.error("La marca puede tener letras, números y signos");
            }
            if (formErrors.categoria) {
                toast.error("La categoría debe ser una de las siguientes opciones: Nuevo, Casi nuevo o Usado");
            }
            if (formErrors.descripcion) {
                toast.error("La descripción corta debe contener de 1 a 50 caracteres");
            }
            if (formErrors.edad) {
                toast.error("La edad debe tener formato fecha: 'XX/XX/XXXX'");
            }
            
            return;
        }
    
        

        try {
            const response = await fetch('https://653ff79445bedb25bfc18468.mockapi.io/api/products-candles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productFormValues),
            });

            if (!response.ok) {
                throw new Error('Error al agregar el producto');
            }

            try {
                await fetchData();
                toast.success('Producto Agregado con éxito');
                setProductFormValues({
                    nombre: '',
                    precio: 0,
                    stock: 0,
                    marca: '',
                    categoria: '',
                    descripcion: '',
                    envio: '',
                    foto: null,
                });
            } catch (error) {
                toast.error('Error al actualizar los datos');
            }
        } catch (error) {
            toast.error('Error al agregar los productos');
        }
    };

  return (
    <div>
        <form id="formulario" onSubmit={handleSubmit}>
            <h1>Alta de Productos</h1>
            <div className="grupo" id="grupo-nombre">
                <label htmlFor="nombre">Nombre:</label>
                <input className="formFields" onChange={(e) => handleUpdateProductFormValues(e.target.value, "nombre" )} type="text" id="nombre" name="nombre" required/>
                
            </div>
            <div className="grupo" id="grupo-precio">
                <label htmlFor="precio">Precio:</label>
                <input className="formFields" onChange={(e) => handleUpdateProductFormValues(e.target.value, "precio")}type="text" id="precio" name="precio" step="0.01" required/>
                
            </div>
            <div className="grupo" id="grupo-stock">a
                <label htmlFor="stock">Stock:</label>
                <input className="formFields" onChange={(e) => handleUpdateProductFormValues(e.target.value, "stock")} type="number" id="stock" name="stock" required/>
                
            </div>
            <div className="grupo" id="grupo-marca">
                <label htmlFor="marca">Marca:</label>
                <input className="formFields" onChange={(e) => handleUpdateProductFormValues(e.target.value, "marca" )} type="text" id="marca" name="marca" required/>
                
            </div>
            <div className="grupo" id="grupo-categoria">
                <label htmlFor="categoria">Categoría:</label>
                <select
                    className="formFields"
                    onChange={(e) => handleUpdateProductFormValues(e.target.value, "categoria")}
                    id="categoria"
                    name="categoria"
                    required
                >
                    <option value="">Selecciona una categoría</option>
                    <option value="Nuevo">Nuevo</option>
                    <option value="Casi nuevo">Casi nuevo</option>
                    <option value="Usado">Usado</option>
                </select>
            </div>
            <div className="grupo" id="grupo-descrip-corta">
                <label htmlFor="descrip">Descripción Corta:</label>
                <textarea className="formFields"  onChange={(e) => handleUpdateProductFormValues(e.target.value, "descripcion" )} id="descripcion" name="descripcion" rows="3" required></textarea>
               
            </div> 
            <div className="grupo" id="grupo-descrip-larga">
                <label htmlFor="descrip-larga">Descripción Larga:</label>
                <textarea className="formFields"  id="descrip-larga" name="descrip-larga" rows="6" required></textarea>
                
            
            </div> 
            <div className="grupo" id="grupo-envio-gratis">
                <label htmlFor="envio-gratis">Envío sin Cargo:</label>
                <input type="checkbox" id="envio-gratis" name="envio-gratis"/>
                
            </div> 
            <div className="grupo" id="grupo-edad-desde">
              <label htmlFor="edad-desde">Edad Desde:</label>
              <input type="text" id="edad-desde" name="edad-desde"/>
              
            </div> 
            <div className="grupo" id="grupo-edad-hasta">
              <label htmlFor="edad-hasta">Edad Hasta:</label>
              <input   type="text" id="edad-hasta" name="edad-hasta"/>
              
            </div>
            <div className="grupo" id="grupo-foto">
              <label htmlFor="foto">Foto:</label>
              <input type="file" id="foto" name="foto" accept="image/*" onChange={(e) => handleUpdateProductFormValues(e.target.value, "foto" )}/>           
              
            </div>  

            <div className="mensaje" id="mensaje">
				<p><b>Error:</b> Por favor rellena el formulario correctamente. </p>
			</div>

            {Object.keys(formErrors).map((key) => (
                <p key={key} className="input-error">
                    {formErrors[key]}
                </p>
            ))}


            <div className="button-enviar">
                <button  className="formFields"  type="submit">Agregar Producto</button>
                <p className="mensaje-exito">Formulario enviado exitosamente!</p>
            </div>
              
        </form>
        
        <ToastContainer/>
        
    </div>
  )
}

export default ProductForm