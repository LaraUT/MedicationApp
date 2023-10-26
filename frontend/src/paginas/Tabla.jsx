
import Manana from '../componentes/Mañana'
import MedioDia from '../componentes/MedioDia'
import Tarde from '../componentes/Tarde'
import Noche from '../componentes/Noche'


function Tabla(){
  return (
   <>   
   <div>
    <h2 className="w-full flex-col text-center font-krona text-[#159D95] text-4xl p-5">CUADRO DE MEDICAMENTOS</h2>
    <div className='bg-white rounded-sm  w-[60%] mx-auto h-[90%] border-x-2 border-b-4 border-t flex items-center  justify-center flex-wrap py-20'>
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
      
         <table className='my-0.5 font-semibold'>
         <thead>
         <tr className='items-center justify-center '>
         <th className='bg-[#7BDD74] w-40 h-28 border-r-2n font-semibold'>Solo cuando sea necesario
         <img className='w-8 h-8 mb-auto mx-auto' src='https://cdn-icons-png.flaticon.com/128/4521/4521504.png'></img></th> 
         <th className='bg-[#B9FFB3] w-40 h-28 border-r-2 font-semibold'>Segunda columna</th>
         <th className='bg-[#B9FFB3] w-40 h-28 border-r-2 font-semibold'>Tercera columna</th>
         <th className='bg-[#B9FFB3] w-40 h-28 border-r-2 font-semibold'>Cuarta columna</th>
         <th className='bg-[#B9FFB3] w-40 h-28 border-r-2 font-semibold'>Quinta columna</th>
         <th className='bg-[#B9FFB3] w-80 h-28 border-r-2n font-semibold'>Quinta columna</th>
         </tr>
         </thead> 
         </table>

</table>
        
   </main>
   </div>
   </div>
 
        
      
  </>
  )
  }

export default Tabla
