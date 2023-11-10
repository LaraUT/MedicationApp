import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContexto } from '../context/MainContext';

function Tarde() {
  
  const [medicamentos, setMedicamentos] = useState([]);
  const {handleDelete, handleTime, triggerEffect} = useContexto()
      
  useEffect(() => {
  const fetchData = async () => {
    try {
      const user = localStorage.getItem('user');
      const response = await axios.get('http://localhost:8082/medicamentosTarde', {
        params: { user },
      });
      setMedicamentos(response.data.medicamentos);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
  return () => {
  };
  }, [triggerEffect]);



  return (
    <>
                                              {/*Nombre*/}
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

                                        {/*Dosis*/}
      <td className='bg-[#8BDFD8]  w-40 h-fit border-r-2 text-teal-700 text-center'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 key={index} style={{ backgroundColor: index % 2 === 0 ? '#5DC1B9' : '#8BDFD8' }}>
              {medicamento.dosis}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
                                    {/*Tiempo - hora programada*/}
      <td className='bg-[#8BDFD8] w-40 h-fit border-r-2'>
        <td className='bg-[#8BDFD8] text-teal-700 w-40 h-fit text-center'>
          {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 key={index} style={{ backgroundColor: index % 2 === 0 ? '#5DC1B9' : '#8BDFD8' }}>
                {medicamento.hora_programada}
                <button className='ml-2' onClick={() => handleTime(medicamento.id)}>✔</button>
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </td>
      </td>
                                {/*Tiempo - ultima_hora*/}
        <td className='bg-[#8BDFD8] w-40 h-24 border-r-2  text-teal-700 text-center'>
        <td className='bg-[#8BDFD8]  w-40 h-fit '>
          {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 key={index} style={{ backgroundColor: index % 2 === 0 ? '#5DC1B9' : '#8BDFD8' }}>
                {medicamento.fecha_programada}
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </td>
      </td>
                                        {/*Comentarios*/}
          <td className='bg-[#8BDFD8]  w-80 h-fit border-r-2'>
            <h2 className='h-30 text-teal-700'>{medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 key={index} className='w-30'style={{ backgroundColor: index % 2 === 0 ? '#5DC1B9' : '#8BDFD8' }}>
              {medicamento.comentarios}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
          </h2>      
      </td>
      <td className=' bg-[#8BDFD8] text-teal-700 w-8 h-fit border-r-2'>
      {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <button className='w-full' style={{ backgroundColor: index % 2 === 0 ? '#5DC1B9' : '#8BDFD8' }} onClick={() => handleDelete(medicamento.id)}>x</button>
            ))
          ) : (
            <p>Loading...</p>
          )}
      </td>

      
    </>
  );
}
export default Tarde;
