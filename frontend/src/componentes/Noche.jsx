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
      <th className='bg-[#A080A3] w-40 h-fit border-r-2 font-semibold'>Noche</th>
      <td className='bg-[#A080A3]  w-40 h-fit border-r-2'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 className="pl-2" style={{ backgroundColor: index % 2 === 0 ? '#A080A3' : '#C096C4' }}>
              {medicamento.nombre}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
      <td className='bg-[#A080A3]  w-40 h-fit border-r-2 text-center'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2  style={{ backgroundColor: index % 2 === 0 ? '#A080A3' : '#C096C4' }}>
              {medicamento.dosis}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
      <td className='bg-[#A080A3] w-40 h-fit border-r-2'>
        <td className='bg-[#A080A3]  w-40 h-fit border-r-2 text-center'>
          {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 style={{ backgroundColor: index % 2 === 0 ? '#A080A3' : '#C096C4' }}>
                {medicamento.hora_programada}
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </td>
      </td>
      <th className='bg-[#A080A3] w-40 h-fit border-r-2'>
        <th className='bg-[#A080A3]  w-40 h-fit border-r-2'>
          {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 style={{ backgroundColor: index % 2 === 0 ? '#A080A3' : '#C096C4' }}>
                {medicamento.ultima_toma}
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </th>
      </th>
    </>
  )
   
 }

export default Noche