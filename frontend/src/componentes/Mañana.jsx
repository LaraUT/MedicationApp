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
                                                   {/*Nombre*/}
    <th className='bg-[#FF9688] w-40 h-fit border-r-2 text-pink-600 font-semibold'>Mañana
    <img className='w-10 h-10 mb-auto mx-auto'  src='https://cdn-icons-png.flaticon.com/128/3167/3167238.png'></img></th>
    <td className='bg-[#FF9688]  w-40 h-fit text-pink-600 border-r-2 '>
      {medicamentos ? (
        medicamentos.map((medicamento, index) => (
          <h2  style={{ backgroundColor: index % 2 === 0 ? '#FF9688' : '#FFBAC7' }}>
            {medicamento.nombre}
          </h2>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </td>
                                      {/*Dosis*/}
    <td className='bg-[#FF9688]  w-40 h-fit border-r-2 text-pink-600 text-center'>
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
                              {/*Tiempo - hora programada*/}
    <td className='bg-[#FF9688] w-40 h-24 border-r-2'>
      <td className='bg-[#FF9688] text-pink-600 w-40 h-fit text-center'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 style={{ backgroundColor: index % 2 === 0 ? '#FF9688' : '#FFBAC7' }}>
              {medicamento.hora_programada}
              <input className='ml-2' type="checkbox"></input>
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
    </td>
                                
    <th className='bg-[#FF9688] w-40 h-24 border-r-2'>
      <th className='bg-[#FF9688]  w-40 h-fit '>
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
                                    {/*Comentarios*/}
    <td className='bg-[#FF9688] text-pink-600 w-80 h-fit'>
            <h2 className='h-30'>{medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 className="w-30" style={{ backgroundColor: index % 2 === 0 ? '#FF9688' : '#FFBAC7' }}>
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

export default Mañana
