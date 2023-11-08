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
          <div className='text-right '> 
          <button  className="font-normal w-56 border-2 rounded-md px-5 border-[#0066b2] text-[#0066b2] hover:text-[#007FFF] hover:border-[#007FFF] hover:bg-[#007FFF] hover:bg-opacity-20 transition-all ease-in-out focus:ring focus:ring-[#00bfff] focus:[#0066b2]" onClick={()=> {setAbierto(true)}} >
         Agregar Medicamentos
        </button>
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

      
      {/*Final modal*/}


      <Agregar abierto={abierto} setAbierto={setAbierto}/>
    </>
    
  )
}

export default Tabla;
