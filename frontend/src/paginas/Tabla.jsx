import React,{useState} from 'react'
import Manana from '../componentes/Mañana'
import MedioDia from '../componentes/MedioDia'
import Tarde from '../componentes/Tarde'
import Noche from '../componentes/Noche'
import Necesario from '../componentes/Necesario'
import Agregar from '../componentes/Agregar'


function Tabla(){

   const [abierto, setAbierto] = useState(false)

  return (
   <>   
   <div>
    <h2 className="w-full flex-col text-center font-krona text-[#159D95] text-4xl p-5">CUADRO DE MEDICAMENTOS</h2>
    <div className='bg-white rounded-sm  w-[90%] mx-auto h-[90%] border-x-2 border-b-4 border-t flex items-center  justify-center flex-wrap py-20'>
      <main>
      <table className='h-80'>
      <table className='my-0.5 font-semibold'>
         <thead>
         <tr className='items-center justify-center '>
         <th className=' w-40 h-2 '></th> 
         <th className=' w-40 h-2 font-semibold '><h3>Medicina</h3></th>
         <th className=' w-40 h-2 font-semibold '>Dosis</th>
         <th className=' w-40 h-2 font-semibold'>Tiempo</th>
         <th className=' w-40 h-2 font-semibold'>Fecha</th>
         <th className=' w-40 h-2 font-semibold text-center '>Comentarios</th>
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
            <MedioDia/>
         </tr>
         </thead> 
         </table>

         <table className='my-0.5'>
         <thead>
         <tr>
           <Tarde/>
         </tr> 
         </thead> 
         </table>

         <table className='my-0.5'>
         <thead >
         <tr className='items-center justify-center'>
            <Noche/>
         </tr>
         </thead> 
         </table>
      
         <table className='my-0.5 font-semibold '>
         <thead>
         <tr className='items-center justify-center '>
         <Necesario/>
         </tr>
         </thead> 
         </table>

</table>

<div className='text-right my-10'>
   <button className='bg-cyan-500 w-28 h-8 rounded-md  text-white' type='submit' onClick={() => {setAbierto(true)}}>Agregar</button>
</div>


   </main>
   </div>
   </div>
 
        <Agregar abierto={abierto} setAbierto={setAbierto}/>
      
  </>
  )
  }

export default Tabla
