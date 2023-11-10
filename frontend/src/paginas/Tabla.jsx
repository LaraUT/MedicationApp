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
          <img className='w-14 h-14 m-[1%] transition-all duration-300 ease-in-out hover:bg-sky-700 hover:rounded-full focus:ring focus:outline-none focus:ring-green-500 absolute' src='https://cdn-icons-png.flaticon.com/128/3177/3177440.png' onClick={() => { setIsopen(true) }}></img>
          
          </div>
          <h2 className="w-full flex-col text-center font-krona text-[#159D95] text-4xl p-5">CUADRO DE MEDICAMENTOS</h2>
        </div>

        <div className='bg-white rounded-sm w-[90%] mx-auto h-[40%] border-x-2 border-b-4 border-t flex items-center justify-center flex-wrap py-8'>
          <main>
          <div className='flex items-center justify-between w-full'> 
            <button>
          <img className='w-6 h-6 ' src='https://cdn-icons-png.flaticon.com/128/1082/1082246.png?track=ais'/>
        </button> 
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
            <button className="text-white px-2 transition-all duration-300 ease-in-out hover:bg-teal-700 focus:ring focus:outline-none focus:ring-green-300  border bg-teal-500 rounded-md w-32" >
              Cambiar Perfil
            </button>
            <button className="text-white bg-red-600 transition-all duration-300 ease-in-out hover:bg-red-700 focus:ring focus:outline-none focus:ring-red-300 m-3 px-2 border border-red-600 rounded-md w-32"
        onClick={() => cerrarSesion()}
>
  Cerrar Sesión
</button>

          </div>
        </div>
        </div>
      )
      }
     
      {/*Final modal*/}

      {/*Inicio modal
      <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 h-2/4 w-2/5 relative">
          <p className="w-80 text-center text-xl ">Bienvenidos a MedicTabs</p>
          <h6 className="text-sm mb-2 text-justify">¡Saludos y bienvenido a MedicTabs, tu compañero confiable para el seguimiento y la gestión de tus medicamentos! Estamos emocionados de tenerte con nosotros.</h6>
          <h6 className='text-sm text-justify' >¡Estamos Aquí para Ayudarte!
          En MedicTabs, nuestra misión facilitarte el seguimiento de tu plan de medicamentos.</h6>

          <h6 className='text-sm'>Atentamente:</h6>

           <h6 className='text-sm'>  El Equipo de MedicTabs</h6>

          <div className="w-3/4 flex justify-center">
            <button className='px-2 border-2 border-sky-500 text-sky-500 rounded-md mb-1.5 transition-all duration-300 ease-in-out hover:bg-sky-500 hover:text-white focus:bg-sky-700 focus:text-white'>Entendido!
            </button>
          </div>
        </div>
      </div>


      
      {/*Final modal*/}


      {/*Inicio modal*
      <div className="absolute h-fit w-[30%] top-[22%] right-[4%] flex justify-end items-start">
        <div className="bg-white py-2 px-5 border-slate-300 border   rounded flex flex-col justify-center items-center ">
        
            <p className="w-[100%] text-xs  py-4">Haz clic en <span className='text-sky-500'>Agregar Medicamentos</span> , con este botón, puedes incluir fácilmente nuevos elementos a tu lista. Asi tu calendario de medicación se mantendra actualizado y organizado</p>

          </div>
        </div>
  
            
      {/*Final modal*/}

       {/*Inicio modal*/}
      <div className="absolute h-fit w-[28%] top-[.2%] left-[.3%] flex justify-end items-start">
        <div className="bg-white py-2 px-5 border-slate-300 border   rounded flex flex-col justify-center items-center ">
        
            <p className="w-[100%] text- font-semibold  py-4">Simbolos:</p>
            <p className='text-sm mb-2'>✔ Indica que se tomo el medicamento y programa su siguiente toma</p>
            <p className='text-sm'><span className='text-red-700 font-bold'>X</span> Elimina los medicamentos del calendario completamente</p>
            <div className='w-full flex justify-end mt-2'>
            <button className='px-2 border-2 border-sky-500 text-sky-500 rounded-md mb-1.5 transition-all duration-300 ease-in-out hover:bg-sky-500 hover:text-white focus:bg-sky-700 focus:text-white '>Entendido!
            </button>


            </div>
          </div>
        </div>
  
            
      {/*Final modal*/}


      <Agregar abierto={abierto} setAbierto={setAbierto}/>
      
    </>
   
    
  )
}

export default Tabla;
