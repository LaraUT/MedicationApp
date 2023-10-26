import React,{useState, useEffect} from 'react'
import axios from 'axios'

 function MedioDia() {
    const [medicamentos, setMedicamentos] = useState([]);
        
    useEffect(() => {
      axios.get('http://localhost:8082/medicamentosMedio')
        .then((respuesta) => {
          setMedicamentos(respuesta.data.medicamentos);
        })
        .catch((error) => console.log(error));
    }, []);
  return (
    <>
      <th className='bg-[#FFDBAF] w-40 h-24 border-r-2  text-orange-400 font-semibold'>Mediodia</th>
      <td className='bg-[#FFDBAF]  w-40 h-fit text-orange-400 border-r-2'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 className="px-2" style={{ backgroundColor: index % 2 === 0 ? '#FFDBAF' : '#FFF9CE' }}>
              {medicamento.nombre}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
      <td className='bg-[#FFDBAF]  w-40 h-fit border-r-2 text-orange-400 text-center'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 style={{ backgroundColor: index % 2 === 0 ? '#FFDBAF' : '#FFF9CE' }}>
              {medicamento.dosis}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
      <td className='bg-[#FFDBAF] w-40 h-fit border-r-2'>
        <td className='bg-[#FFDBAF] text-orange-400 w-40 h-fit text-center'>
          {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 style={{ backgroundColor: index % 2 === 0 ? '#FFDBAF' : '#FFF9CE' }}>
                {medicamento.hora_programada}
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </td>
      </td>
      <th className='bg-[#FFDBAF] w-40 h-fit border-r-2'>
        <th className='bg-[#FFDBAF] text-orange-400  w-40 h-fit border-r-2'>
          {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 style={{ backgroundColor: index % 2 === 0 ? 'black' : '#8BDFD8' }}>
                {medicamento.ultima_toma}
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </th>
      </th>

      <th className='bg-[#FFDBAF] w-40 h-fit '>
      <th className='bg-[#FFDBAF] font-semibold text-left w-40 h-fit '>
            <h2>{medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 className="px-2" style={{ backgroundColor: index % 2 === 0 ? '#FFDBAF' : '#FFF9CE' }}>
              {medicamento.comentarios}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
</h2>      
      </th>
    </th>
    </>
  )
   
 }

export default MedioDia