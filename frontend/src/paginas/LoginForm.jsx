import React from 'react'
import {Link} from 'react-router-dom'

function LoginForm() {
  return (
    <> 
    <h2 className="w-full flex-col text-center font-krona text-[#159D95] text-4xl p-5">INICIAR SESION</h2>
    <main className="h-screen  flex">
   <div className='bg-white rounded-sm p-2 w-[50%] mx-auto h-[90%] border-x-2 border-b-4 border-t flex items-center flex-wrap py-20'>

   <div className='flex flex-col items-center justify-center w-full'>
        <label className='text-md w-[50%] p-1.5'>Correo:</label>
          <input className='border-[#159D95] border rounded-lg px-2 py-[.5%] w-[50%] '
          type='email'
          placeholder='ejemplo@gmail.com'
          />
      </div>

      <div className='flex flex-col items-center justify-center w-full'>
        <label className='text-md w-[50%] p-1.5'>Contraseña:</label>
          <input className='border-[#159D95] border rounded-lg px-2 py-[.5%] w-[50%] '
          type='password'
          placeholder='********'
          />
      </div>


      <div className='text-center justify-center  w-full'>
          <button type='submit ' className='bg-[#5DC1B9] rounded-lg w-[30%] text-white'>INICIAR SESION</button>
      </div>

     <div className='text-center justify-center w-full flex '>
     <h3>¿Aun no tienes cuenta? </h3>
     <Link to="/registros">
      <h3 className='text-[#159D95] '>Registrate</h3>
     </Link>
     </div>

     <div className="w-full flex items-center justify-center"> 
        <h4 >Recordarme</h4>
        <input className="px-2"type="checkbox"></input>
      </div>
   
  

    </div>
   </main> 
   </>
  )
}

export default LoginForm