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
            <button className="text-white bg-red-600  m-3 px-2 border border-red-600 rounded-md w-32">
              Cerrar Sesion
            </button>
          </div>
        </div>
        </div>
      )
      }
     
      {/*Final modal*/}




      <Agregar abierto={abierto} setAbierto={setAbierto}/>
    </>
    
  )
}

export default Tabla;
