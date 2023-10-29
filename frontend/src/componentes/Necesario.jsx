import React,{useState, useEffect} from 'react'
import axios from 'axios'

 function Necesario() {
    const [medicamentos, setMedicamentos] = useState([]);
        
    useEffect(() => {
      axios.get('http://localhost:8082/medicamentosNecesario')
        .then((respuesta) => {
          setMedicamentos(respuesta.data.medicamentos);
        })
        .catch((error) => console.log(error));
    }, );
  return (
    <>
                                                   {/*Nombre*/}
    <th className='bg-[#7BDD74] w-40 h-fit border-r-2 text-[#1d7f13] font-semibold'>Solo cuando sea necesario
    <img className='w-8 h-8 mb-auto mx-auto' src='https://cdn-icons-png.flaticon.com/128/4521/4521504.png'></img></th>
    <td className='bg-[#7BDD74]  w-40 h-fit text-[#1d7f13] border-r-2 '>
      {medicamentos ? (
        medicamentos.map((medicamento, index) => (
          <h2  style={{ backgroundColor: index % 2 === 0 ? '#7BDD74' : '#B9FFB3' }}>
            {medicamento.nombre}
          </h2>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </td>
                                      {/*Dosis*/}
    <td className='bg-[#7BDD74]  w-40 h-fit border-r-2 text-[#1d7f13] text-center'>
      {medicamentos ? (
        medicamentos.map((medicamento, index) => (
            <h2  style={{ backgroundColor: index % 2 === 0 ? '#7BDD74' : '#B9FFB3' }}>
            {medicamento.dosis}
          </h2>
        ))
      ) : (
        <p>Loading...</p>
      )}


    </td>
                              {/*Tiempo - hora programada*/}
    <td className='bg-[#7BDD74] w-40 h-24 border-r-2'>
      <td className='bg-[#7BDD74] text-[#1d7f13] w-40 h-fit text-center'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2  style={{ backgroundColor: index % 2 === 0 ? '#7BDD74' : '#B9FFB3' }}>
              {medicamento.hora_programada}
              <input className='ml-2' type="checkbox"></input>
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
    </td>
                                
    <td className='bg-[#7BDD74] w-40 h-24 border-r-2 text-center'>
      <td className='bg-[#7BDD74]  w-40 h-fit text-[#1d7f13]'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2  style={{ backgroundColor: index % 2 === 0 ? '#7BDD74' : '#B9FFB3' }}>
              {medicamento.fecha_programada}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
    </td>   
                                    {/*Comentarios*/}
    <td className='bg-[#7BDD74] text-[#1d7f13] w-80 h-fit'>
            <h2 className='h-30'>{medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2  style={{ backgroundColor: index % 2 === 0 ? '#7BDD74' : '#B9FFB3' }}>
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

export default Necesario
