import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Registros() {

  const navigate = useNavigate();

  const [datos, setDatos] = useState({
    correo: '',
    contrasena: '',
    autenticado: false,
    user: '',   
    contrasenaConfirm: ''
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const status = localStorage.getItem('Status');
    const correo = localStorage.getItem('correo');
    const user = localStorage.getItem('user')
    if (status === 'true') {
      setDatos({ ...datos, autenticado: true, correo, });
    }
  }, []);

  useEffect(() => {
    console.log(datos.autenticado); 
    localStorage.setItem('correo', datos.correo);
    localStorage.setItem('Status', datos.autenticado);
    localStorage.setItem('user', datos.user)

  }, [datos.autenticado, datos.correo, datos.user]);

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8082/registro', datos)
      .then((respuesta) => {
        if (respuesta.status === 200) {
          console.log(respuesta.data[0].id)
          setDatos({ ...datos, autenticado: true, user:respuesta.data[0].id });
          
          console.log('Bien del front')
          
        } else {
          setError('Credenciales incorrectas, inténtalo de nuevo');
        }
        
      })
      .catch((error) => {
        console.error('Error al iniciar sesión: ' + error);
        setError('Error al iniciar sesión. Inténtalo de nuevo más tarde.');
      });
  };

  if (datos.autenticado) {
    navigate('/tabla');
    return null;
  }
  
    return (
      <form onSubmit={handleRegister}>
      <h2 className="w-full flex-col text-center font-krona text-[#159D95] text-4xl p-5">Registrarse</h2>
      <main className="h-screen  flex">
      <div className='bg-white rounded-sm p-2 w-[50%] mx-auto h-[90%] border-x-2 border-b-4 border-t flex items-center flex-wrap py-20'>

      <div className='flex flex-col items-center justify-center w-full'>
        <label className='text-md w-[50%] p-1.5'>Nombre: </label>
          <input className='border-[#159D95] border rounded-lg px-2 py-[.5%] w-[50%] '
          type='text'

          value={datos.nombre}
          onChange={(e) => { setDatos({ ...datos, nombre: e.target.value }) }}
          />
      </div>



      <div className='flex flex-col items-center justify-center w-full'>
        <label className='text-md w-[50%] p-1.5'>Contraseña:</label>
          <input className='border-[#159D95] border rounded-lg px-2 py-[.5%] w-[50%] '
          type='password'
          placeholder='********'

          value={datos.contrasena}
          onChange={(e) => { setDatos({ ...datos, contrasena: e.target.value }) }}
          />
      </div>

      <div className='flex flex-col items-center justify-center w-full'>
        <label className='text-md w-[50%] p-1.5'>Confirmar Contraseña:</label>
          <input className='border-[#159D95] border rounded-lg px-2 py-[.5%] w-[50%] '
          type='password'
          placeholder='********'

          value={datos.contrasenaConfirm}
          onChange={(e) => { setDatos({ ...datos, contrasenaConfirm: e.target.value }) }}
          />
      </div>

      <div className='flex flex-col items-center justify-center w-full'>
        <label className='text-md w-[50%] p-1.5'>Correo:</label>
          <input className='border-[#159D95] border rounded-lg px-2 py-[.5%] w-[50%] '
          type='email'
          placeholder='ejemplo@gmail.com'

          value={datos.correo}
          onChange={(e) => { setDatos({ ...datos, correo: e.target.value }) }}
          />
      </div>

      <div className='text-center justify-center m-5 w-full'>
          <button type='submit ' className='bg-[#5DC1B9] rounded-lg w-[30%] transition-all duration-300 ease-in-out hover:bg-teal-700 focus:ring focus:outline-none focus:ring-green-300 text-white'>Registrate</button>
      </div>

      <div className="w-full flex items-center justify-center"> 
        <h4>Recordar sesion?</h4>
        <input className="mx-2" type="checkbox"></input>
      </div>

      </div>


      </main>
      </form>

    
    )
  }

  export default Registros