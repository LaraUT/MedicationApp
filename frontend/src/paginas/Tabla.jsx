
import Manana from '../componentes/Mañana'
import MedioDia from '../componentes/MedioDia'
import Tarde from '../componentes/Tarde'
import Noche from '../componentes/Noche'

function Tabla(){
  return (
   <>   
   <div>
    <h2 className="w-full flex-col text-center font-krona text-[#159D95] text-4xl p-5">CUADRO DE MEDICAMENTOS</h2>
    <div className='bg-white rounded-sm p-2 w-[80%] mx-auto h-[90%] border-x-2 border-b-4 border-t flex items-center  justify-center flex-wrap py-20'>
      <main>
         
      <table className='my-0.5'>
         <thead>
            <Manana />
         <tr className='items-center justify-center '>

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
         <th className='bg-[#7BDD74] w-40 h-28 border-r-2'>Primera columna</th> 
         <th className='bg-[#B9FFB3] w-40 h-28 border-r-2'>Segunda columna</th>
         <th className='bg-[#B9FFB3] w-40 h-28 border-r-2'>Tercera columna</th>
         <th className='bg-[#B9FFB3] w-40 h-28 border-r-2'>Cuarta columna</th>
         <th className='bg-[#B9FFB3] w-40 h-28 border-r-2'>Quinta columna</th>
         </tr>
         </thead> 
         </table>
   </main>
   </div>
   </div>
 
        
      
  </>
  )
  }

export default Tabla
