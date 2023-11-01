import React, { useEffect, useState } from 'react';
import Manana from '../componentes/Mañana';
import MedioDia from '../componentes/MedioDia';
import Tarde from '../componentes/Tarde';
import Noche from '../componentes/Noche';
import Necesario from '../componentes/Necesario';
import Agregar from '../componentes/Agregar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Tabla() {

  const [perfiles,setPerfiles] = useState('');

  const cerrarSesion = () => {
    localStorage.clear();
    setIsopen(false)
    navigate('/')
  };

  const [abierto, setAbierto] = useState(false);
  const navigate = useNavigate()

  const isUserAuthenticated = () => {
    const status = localStorage.getItem('Status');
    return status === 'true';
  };
  
  useEffect(()=>{
    if (!isUserAuthenticated()) {
      navigate('/');
    }
  },[])
  const [isopen, setIsopen] = useState(false);

  const perfil = 
  axios.get('http://localhost:8082/api/perfil',{
  })
  .then((respuesta)=>{
    setPerfiles(respuesta.data);
    console.log(respuesta.data)
  })
  .catch((error) => console.log(error));


  return (
    <>
      <div>
        

        
        <div>
          <div className='flex justify-end'>
          <img className='w-14 h-14 m-[1%] absolute' src='https://cdn-icons-png.flaticon.com/128/3177/3177440.png' onClick={() => { setIsopen(true) }}></img>
          
          </div>
          <h2 className="w-full flex-col text-center font-krona text-[#159D95] text-4xl p-5">CUADRO DE MEDICAMENTOS</h2>
        </div>

        <div className='bg-white rounded-sm w-[90%] mx-auto h-[40%] border-x-2 border-b-4 border-t flex items-center justify-center flex-wrap py-8'>
          <main>
          <div className='text-right'>
              <button className='bg-cyan-500 w-44 h-8 rounded-md  text-white' type='submit' onClick={() => { setAbierto(true) }}>Agregar Medicamento</button>
            </div>
            

            <table className='h-80'>
              <table className='my-0.5 font-semibold'>
                <thead>
                  <tr className='items-center justify-center text-center '>
                    <th className=' w-40 h-2 '></th>
                    <th className=' w-40 h-2 font-semibold '><h3>Medicina</h3></th>
                    <th className=' w-40 h-2 font-semibold '>Dosis</th>
                    <th className=' w-40 h-2 font-semibold'>Tiempo</th>
                    <th className=' w-40 h-2 font-semibold'>Fecha</th>
                    <th className=' w-40 h-2 font-semibold text-center'>Comentarios</th>
                  </tr>
                </thead>
              </table>

              <table className='my-0.5'>
                <thead>
                  <tr className='items-center justify-center '>
                    <Manana />
                  </tr>
                </thead>
              </table>

              <table className='my-0.5'>
                <thead>
                  <tr className='items-center justify-center'>
                    <MedioDia />
                  </tr>
                </thead>
              </table>

              <table className='my-0.5'>
                <thead>
                  <tr>
                    <Tarde />
                  </tr>
                </thead>
              </table>

              <table className='my-0.5'>
                <thead >
                  <tr className='items-center justify-center'>
                    <Noche />
                  </tr>
                </thead>
              </table>

              <table className='my-0.5 '>
                <thead>
                  <tr className='items-center justify-center '>
                    <Necesario />
                  </tr>
                </thead>
              </table>

            </table>
          </main>
        </div>
      </div>








      {/*Inicio modal*/}
      
      { isopen &&(
        <div className="absolute top-20 right-3 flex justify-end items-start">
        <div className="bg-white p-5 rounded border border-gray-100  flex flex-col justify-start items-center h-2/2 w-2/2 ">
        <button
            className="font-bold text-sm hover:text-gray-400 text-black absolute top-0 right-0 p-2"
            onClick={() => setIsopen(false)}>
            X
          </button>

          <div className="w-3/4 flex flex-col justify-end items-center">
            <button className="text-white px-2 border bg-teal-500 rounded-md w-32" >
              Cambiar Perfil
            </button>
            <button className="text-white bg-red-600  m-3 px-2 border border-red-600 rounded-md w-32
            "
            onClick={() => cerrarSesion()}
            >
              Cerrar Sesion
            </button>
          </div>
        </div>
        </div>
      )
      }
     
      {/*Final modal*/}

      {/*Inicio modal*/}

      <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 h-[80%] w-[80%] relative">
        
          <p className="w-80 text-center text-2xl mb-8">¿Quien eres? Elige tu perfil</p>
          <div className="w-5/12 overflow-hidden">

          <div className='flex'>
             {perfiles ?(
              perfiles.map((perfil) =>(
                <div key={perfil.id} className='flex flex-col items-center justify-center text-center m-5'>
                  <button><img className=' m-3 w-24 h-24 rounded-lg ' src='https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg?w=740&t=st=1698797122~exp=1698797722~hmac=99f805391691fba4454095beb889488d371493ee82c21f02461d4ef81295eedf'></img></button>
                  <h2 className='flex-col text-center' type='submit'>{perfil.nombre_perfil} <button className='text-red-500 text-center px-1.5' type='submit'>x</button></h2>
                 
                </div>
                
              ))
             ) : (
              <p>Loading..</p>
             )}
             <div className='flex items-center flex-col justify-center text-center m-5'>
              <button type='submit'><img className=' m-3 w-24 h-24' src='https://cdn.icon-icons.com/icons2/495/PNG/512/add-circle-1_icon-icons.com_48714.png'></img></button>
              <h2 className='m-2 text-sm  whitespace-nowrap' >Añadir perfiles</h2>
            </div>
            </div>
          </div>
        </div>
        
      </div>
      {/*Final modal*/}


      <Agregar abierto={abierto} setAbierto={setAbierto}/>
    </>
    
  )
}

export default Tabla;
