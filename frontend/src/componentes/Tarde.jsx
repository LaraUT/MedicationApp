import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tarde() {
  const [medicamentos, setMedicamentos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/medicamentosTarde')
      .then((respuesta) => {
        setMedicamentos(respuesta.data.medicamentos);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <th className='bg-[#5DC1B9] w-40 h-24 border-r-2  text-teal-700  font-semibold'>Tarde
      <img className='w-10 h-10 mb-auto mx-auto' src='https://cdn-icons-png.flaticon.com/128/10179/10179410.png'></img></th>
      <td className='bg-[#8BDFD8]  w-40 h-fit text-teal-700 border-r-2'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 style={{ backgroundColor: index % 2 === 0 ? '#5DC1B9' : '#8BDFD8' }}>
              {medicamento.nombre}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
      <td className='bg-[#8BDFD8]  w-40 h-fit border-r-2 text-teal-700 text-center'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 style={{ backgroundColor: index % 2 === 0 ? '#5DC1B9' : '#8BDFD8' }}>
              {medicamento.dosis}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
      <td className='bg-[#8BDFD8] w-40 h-fit border-r-2'>
        <td className='bg-[#8BDFD8] text-teal-700 w-40 h-fit text-center'>
          {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 style={{ backgroundColor: index % 2 === 0 ? '#5DC1B9' : '#8BDFD8' }}>
                {medicamento.hora_programada}
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </td>
      </td>
      <td className='bg-[#8BDFD8] w-40 h-fit border-r-2'>
      <h2 className='h-30'>{medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 className='w-30'style={{ backgroundColor: index % 2 === 0 ? '#5DC1B9' : '#8BDFD8' }}>
                {medicamento.ultima_toma}
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
          </h2>
        </td>
      

      <td className='bg-[#8BDFD8] text-teal-700 font-semibold font-size  w-80'>
            <h2 className='h-30'>{medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 className="w-30" style={{ backgroundColor: index % 2 === 0 ? '#5DC1B9' : '#8BDFD8' }}>
              {medicamento.comentarios}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
</h2>      
      </td>


      
    </>
  );
}
export default Tarde;