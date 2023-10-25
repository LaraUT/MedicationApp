import React, { useEffect, useState } from 'react';
import axios from 'axios';


function HCategorias() {
    const [categorias, setCategorias] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:8082/categoriasH')
        .then((respuesta) => {
          setCategorias(respuesta.data.categorias);
        })
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <>
      <div className="flex flex-wrap justify-center p-6 gap-2">
      <h2 className='w-[100%]'>Categorias para hombre</h2>
        {categorias ? (
          categorias.map((categoria) => (
            <div key={categoria.id} className='bg-zinc-500 m-2 w-24 h-24 rounded-full text-white text-center'>
                <img className='rounded-full w-[100%] h-[100%] object-cover ' src={categoria.img} alt={categoria.nombre}/>
                <h2 className=" text-black">{categoria.nombre}</h2>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      </>
    );
  } 

export default HCategorias