import React, { useState } from 'react';
import './style.css';
import { toast } from 'react-toastify';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    apellido: '',
    email: '',
    asunto: 'sell',
    mensaje: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
        toast.success('Formulario enviado con éxito');
        setFormData({
            name: '',
            apellido: '',
            email: '',
            asunto: 'sell',
            mensaje: '',
          });
    }
    // Validar formulario
  };

  const validateForm = (data) => {
    const errors = {};
    const nameRegExp = /^[A-Z]\D*$/;
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const messageRegExp = /^.{1,70}$/;

    Object.keys(data).forEach((key) => {
      if (!data[key]) {
        errors[key] = 'Este campo es obligatorio';
      }
    });

    // Validar nombre con expresión regular
    if (data.name && !nameRegExp.test(data.name)) {
      errors.name = 'Formato de nombre no válido';
    }

    // Validar apellido con expresión regular
    if (data.apellido && !nameRegExp.test(data.apellido)) {
      errors.apellido = 'Formato de apellido no válido';
    }

    // Validar email con expresión regular
    if (data.email && !emailRegExp.test(data.email)) {
      errors.email = 'Formato de correo electrónico no válido';
    }

    // Validar mensaje con expresión regular
    if (data.mensaje && !messageRegExp.test(data.mensaje)) {
      errors.mensaje = 'El mensaje debe tener entre 1 y 70 caracteres';
    }

    return errors;
  };

  return (
    <div className='contacto-main'>
      <h3>Contacto</h3>
      <form className='form' id='form' onSubmit={handleSubmit}>
        
        <div className='grupo' id='grupo-nom'>
          <input
            className='formFields'
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
          />
          <label className='label' htmlFor='name'>
            Nombre
          </label>
          {formErrors.name && <p className='error-message'>{formErrors.name}</p>}
        </div>
        <div className='grupo' id='grupo-apellido'>
          <input
            className='formFields'
            type='text'
            name='apellido'
            id='apellido'
            value={formData.apellido}
            onChange={handleChange}
          />
          <label className='label' htmlFor='apellido'>
            Apellido
          </label>
          {formErrors.apellido && <p className='error-message'>{formErrors.apellido}</p>}
        </div>
        <div className='grupo' id='grupo-mail'>
          <input
            type='text'
            className='formFields'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
          />
          <label className='label' htmlFor='email'>
            Mail
          </label>
          {formErrors.email && <p className='error-message'>{formErrors.email}</p>}
        </div>
        <div className='grupo' id='grupo-mensaje'>
          <textarea
            className='formFields'
            name='mensaje'
            cols='30'
            rows='10'
            placeholder='Ingrese su mensaje'
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
          {formErrors.mensaje && <p className='error-message'>{formErrors.mensaje}</p>}
        </div>
        <div className="boton">
                <button className="formFields" type="submit">Enviar</button>
            </div>

            
      </form>
    </div>
  );
};

export default Contacto;