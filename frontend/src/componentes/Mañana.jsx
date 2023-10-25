import React,{useState, useEffect} from 'react'
import axios from 'axios'

 function Mañana() {
    const [medicamentos, setMedicamentos] = useState([]);
        
    useEffect(() => {
      axios.get('http://localhost:8082/medicamentosManana')
        .then((respuesta) => {
          setMedicamentos(respuesta.data.medicamentos);
        })
        .catch((error) => console.log(error));
    }, );
  return (
    <>
    <th className='bg-[#FF9688] w-40 h-fit border-r-2 font-semibold'>Mañana</th>
    <td className='bg-[#FF9688]  w-40 h-fit border-r-2 '>
      {medicamentos ? (
        medicamentos.map((medicamento, index) => (
          <h2 className="px-2" style={{ backgroundColor: index % 2 === 0 ? '#FF9688' : '#FFBAC7' }}>
            {medicamento.nombre}
          </h2>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </td>
    <td className='bg-[#FF9688]  w-40 h-fit border-r-2 text-center'>
      {medicamentos ? (
        medicamentos.map((medicamento, index) => (
            <h2 style={{ backgroundColor: index % 2 === 0 ? '#FF9688' : '#FFBAC7' }}>
            {medicamento.dosis}
          </h2>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </td>
    <td className='bg-[#FF9688] w-40 h-fit border-r-2'>
      <td className='bg-[#FF9688]  w-40 h-fit border-r-2 text-center'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 style={{ backgroundColor: index % 2 === 0 ? '#FF9688' : '#FFBAC7' }}>
              {medicamento.hora_programada}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
    </td>
    <th className='bg-[#FF9688] w-40 h-fit border-r-2'>
      <th className='bg-[#FF9688]  w-40 h-fit border-r-2'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 style={{ backgroundColor: index % 2 === 0 ? '#FF9688' : '#FFBAC7' }}>
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

export default Mañana
