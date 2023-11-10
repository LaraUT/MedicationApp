import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url("https://img.freepik.com/vector-premium/botiquin-medico-accidentes_24640-73833.jpg?w=2000")' }}>
       <div className="absolute top-0 left-0 right-0 h-12 text-pink-900  bg-orange-100">
        <h1 className='text-xs font-bold'>Jesus Octavio Cruz Cruz, Maria Elizabeth Chuc Tun</h1>
        <h1 className='text-center justify-center text-xl font-bold'> Bienvenido a MedicTabs</h1></div>
      <main className="text-orange-100 text-center  ">
      <Link to="/login">
        <button className='bg-pink-500 h-10 rounded-md px-4 py-2 absolute top-0 right-0 m-1 transition-all duration-300 ease-in-out hover:bg-pink-600 focus:ring focus:outline-none focus:ring-pink-300 '>Iniciar Sesión</button>
      </Link>
        <h1 className="text-3xl font-semibold mb-4 text-pink-900">¡Ven a explorar tu calendario de medicamentos!</h1>
        <p className="text-2xl text-pink-900">Todo en MedicTabs.</p>
      </main>
    </div>
  );
}

export default Home;