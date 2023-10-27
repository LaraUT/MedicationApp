import React,{useState, useEffect} from 'react'
import axios from 'axios'

 function Noche() {
    const [medicamentos, setMedicamentos] = useState([]);
        
    useEffect(() => {
      axios.get('http://localhost:8082/medicamentosNoche')
        .then((respuesta) => {
          setMedicamentos(respuesta.data.medicamentos);
        })
        .catch((error) => console.log(error));
    }, []);
  return (
    <>
      <th className='bg-[#A080A3] w-40 h-fit border-r-2 text-violet-800 font-semibold'>Noche
      <img className="w-8 h-8 mb-auto mx-auto"src='https://cdn-icons-png.flaticon.com/128/3920/3920627.png'></img></th>
      <td className='bg-[#A080A3]  w-40 text-violet-800 border-r-2'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 className="h-15" style={{ backgroundColor: index % 2 === 0 ? '#A080A3' : '#C096C4' }}>
              {medicamento.nombre}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
      <td className='bg-[#A080A3]  w-40  border-r-2 text-violet-800 text-center'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 className='h-15' style={{ backgroundColor: index % 2 === 0 ? '#A080A3' : '#C096C4' }}>
              {medicamento.dosis}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
      <td className='bg-[#A080A3] w-40 h-fit border-r-2'>
        <td className='bg-[#A080A3] text-violet-800  w-40 h-fit text-center'>
          {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 className='h-15' style={{ backgroundColor: index % 2 === 0 ? '#A080A3' : '#C096C4' }}>
                {medicamento.hora_programada}
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </td>
      </td>
      <th className='bg-[#A080A3] w-40 h-24 border-r-2'>
        <th className='bg-[#A080A3] text-violet-800  w-40 h-fit border-r-2'>
          {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 className='h-15' style={{ backgroundColor: index % 2 === 0 ? '#A080A3' : '#C096C4' }}>
                {medicamento.ultima_toma}
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </th>
      </th>
      <td className='bg-[#A080A3] text-violet-800 w-80 h-fit'>
            <h2 className='h-30 '>{medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 className="w-30" style={{ backgroundColor: index % 2 === 0 ? '#A080A3' : '#C096C4' }}>
              {medicamento.comentarios}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
</h2>      
      </td>
  
    </>
  )
   
 }

export default Noche