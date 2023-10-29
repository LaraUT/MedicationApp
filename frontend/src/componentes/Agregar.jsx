import React from 'react'

function Agregar({abierto, setAbierto}) {
  return (
    abierto&& (
        <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 h-2/2 w-1/2 relative">
          <p className="w-80 text-center text-2xl ">Nuevo Producto:</p>
          
          <div className='flex flex-col items-center justify-center w-full'>
         <label className='text-md w-[30%] p-0.5'>Nombre:</label>
          <input className='border-[#159D95] border rounded-lg px-2 py-[.5%] w-[30%] '
          type='text'
          placeholder='Nombre del producto'
          />
         </div>

         <div className='flex flex-col items-center justify-center w-full'>
         <label className='text-md w-[30%] p-0.5'>Dosis:</label>
          <input className='border-[#159D95] border rounded-lg px-2 py-[.5%] w-[30%] '
          type='text'
          placeholder='Dosis del producto'
          />
         </div>

         <div className='flex flex-col items-center justify-center w-full'>
         <label className='text-md w-[30%] p-0.5'>Hora del dia:</label>
          <input className='border-[#159D95] border rounded-lg px-2 py-[.5%] w-[30%] '
          type='text'
          placeholder='24:00:00'
          />
         <div className='flex'>
         </div>
         
         <div className="flex w-full justify-center gap-7">
         <div className='flex flex-col items-center justify-center w-[13.5%]'>
         <label className='text-md w-[100%] p-0.5'>Horas entre dosis:</label>
          <input className='border-[#159D95] border rounded-lg px-2 py-[.5%] w-[100%] '
          type='text'
          placeholder='8'
          />
         </div>
         <div className='flex flex-col items-center justify-center w-[13.5%]'>
         <label className='text-md w-[100%] p-0.5'>Numero de dosis:</label>
          <input className='border-[#159D95] border rounded-lg px-2 py-[.5%] w-[100%] '
          type='text'
          placeholder='12'
          />
        </div>
         </div>
         <div className='flex flex-col items-center justify-center w-[30%] '>
         <label className='text-md w-[100%] p-0.5'>Comentarios:</label>
          <textarea className='border-[#159D95] border rounded-lg px-2 py-[.5%] w-[100%]'
          type='text'
          placeholder='Tomarselo antes del desayuno'
          />
         </div>
         </div>
         <h5>¿Solo cuando sea necesario? <input className='ml-2' type="checkbox"></input> </h5>
          <div className="w-3/4 flex justify-center">
            <button className="bg-white m-5 px-2 border border-slate-500 rounded-md w-4/12" onClick={() => {setAbierto(false)}}>
              Cancelar
            </button>
            <button className="text-white bg-cyan-500  m-5 px-2 border border-slate-500 rounded-md w-4/12">
              Agregar
            </button>
          </div>
        </div>
      </div>
     )
  )
}

export default Agregar
