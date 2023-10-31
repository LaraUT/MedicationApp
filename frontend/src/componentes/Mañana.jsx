import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Mañana() {
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
    const user = localStorage.getItem('user');
    axios
      .get('http://localhost:8082/medicamentosManana',{
        params: {user}
      })
      .then((respuesta) => {
        setMedicamentos(respuesta.data.medicamentos);
      })
      .catch((error) => console.log(error));
  },);

 
  return (
    <>
      {/*Nombre*/}
      <th className='bg-[#FF9688] w-40 h-fit border-r-2 text-pink-600 font-semibold'>Mañana
        <img className='w-10 h-10 mb-auto mx-auto' src='https://cdn-icons-png.flaticon.com/128/3167/3167238.png'></img></th>
      <td className='bg-[#FF9688] w-40 h-fit text-pink-600 border-r-2 '>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 key={medicamento.id} style={{ backgroundColor: index % 2 === 0 ? '#FF9688' : '#FFBAC7' }}>
              {medicamento.nombre}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
      {/*Dosis*/}
      <td className='bg-[#FF9688] w-40 h-fit border-r-2 text-pink-600 text-center'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 key={medicamento.id} style={{ backgroundColor: index % 2 === 0 ? '#FF9688' : '#FFBAC7' }}>
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
              <h2 key={medicamento.id} style={{ backgroundColor: index % 2 === 0 ? '#FF9688' : '#FFBAC7' }}>
                {medicamento.hora_programada}
                <button className='ml'  onClick={() => handleTime(medicamento.id)}>✔</button>
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </td>
      </td>
      <td className='bg-[#FF9688] w-40 h-24 border-r-2  text-pink-600 text-center'>
        <td className='bg-[#FF9688]  w-40 h-fit '>
          {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 key={medicamento.id} style={{ backgroundColor: index % 2 === 0 ? '#FF9688' : '#FFBAC7' }}>
                {medicamento.fecha_programada}
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </td>
      </td>
      {/*Comentarios*/}
      <td className='bg-[#FF9688] text-pink-600 w-80 h-fit border-r-2'>
        <h2 className='h-30'>
          {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 key={medicamento.id} className="w-30" style={{ backgroundColor: index % 2 === 0 ? '#FF9688' : '#FFBAC7' }}>
                {medicamento.comentarios}
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </h2>
      </td>
      <td className=' bg-[#FF9688] text-pink-600 w-8 h-fit border-r-2'>
      {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <button className='w-full' style={{ backgroundColor: index % 2 === 0 ? '#FF9688' : '#FFBAC7' }} onClick={() => handleDelete(medicamento.id)}>x</button>
            ))
          ) : (
            <p>Loading...</p>
          )}
      </td>
    </>
  );
}

export default Mañana;
