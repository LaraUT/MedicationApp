import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tarde() {
  const [medicamentos, setMedicamentos] = useState([]);
  
  const handleTime = (id) => {
    axios
      .put(`http://localhost:8082/api/hora/${id}`)
      .then((response) => {
        toast.success('Ha tomado su dosis!!! :) Hora actualizada');
        // Actualizar la tabla una vez que la solicitud PUT sea exitosa
        const updatedMedicamentos = medicamentos.map((medicamento) =>
          medicamento.id === id
            ? { ...medicamento, hasTaken: true }
            : medicamento
        );  
        setMedicamentos(updatedMedicamentos);
      })
      .catch((error) =>
        console.error('Error al realizar la solicitud PUT', error)
      );
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8082/api/eliminar/${id}`)
    .then((response) => {
      setMedicamentos(medicamentos.filter((medicamento) => medicamento.id !== id));
      toast.error('Medicamento removido');
    })
    .catch((error) => {
      console.error('Error deleting medication', error);
    });
  }

  useEffect(() => {
    axios
      .get('http://localhost:8082/medicamentosTarde')
      .then((respuesta) => {
        setMedicamentos(respuesta.data.medicamentos);
      })
      .catch((error) => console.log(error));
  }, );

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
