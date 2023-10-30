import React,{useState, useEffect} from 'react'
import axios from 'axios'

 function MedioDia() {
    const [medicamentos, setMedicamentos] = useState([]);
        
        const handleCheckboxClick = (id) => {
      // Realizar la solicitud PUT aquí
      axios.put(`http://localhost:8082/api/hora/${id}`)
        .then((response) => {
          // Manejar la respuesta si es necesario
          
          toast.success('Ha tomado su dosis!!!   Hora actualizada');
        })
        .catch((error) => console.error('Error al realizar la solicitud PUT', error));
    };

    useEffect(() => {
      axios.get('http://localhost:8082/medicamentosMedio')
        .then((respuesta) => {
          setMedicamentos(respuesta.data.medicamentos);
        })
        .catch((error) => console.log(error));
    }, []);
  return (
    <> 
                                              {/*Tiempo - hora programada*/}
      <th className='bg-[#FFDBAF] w-40 h-24 border-r-2  text-orange-400 font-semibold'>Mediodia
      <img className='items-center justify-center mx-auto mb-auto w-10 h-10 ' src='https://cdn-icons-png.flaticon.com/128/4224/4224494.png'></img></th>
      <td className='bg-[#FFDBAF]  w-40 h-fit text-orange-400 border-r-2'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2   style={{ backgroundColor: index % 2 === 0 ? '#FFDBAF' : '#FFF9CE' }}>
              {medicamento.nombre}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
                                                {/*Dosis*/}
      <td className='bg-[#FFDBAF]  w-40 h-fit border-r-2 text-orange-400 text-center'>
        {medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 key={index}  style={{ backgroundColor: index % 2 === 0 ? '#FFDBAF' : '#FFF9CE' }}>
              {medicamento.dosis}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </td>
                                        {/*Tiempo - hora programada*/}
      <td className='bg-[#FFDBAF] w-40 h-fit border-r-2'>
        <td className='bg-[#FFDBAF] text-orange-400 w-40 h-fit text-center'>
          {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 key={index} style={{ backgroundColor: index % 2 === 0 ? '#FFDBAF' : '#FFF9CE' }}>
                {medicamento.hora_programada}
                <input className='ml-2' type="checkbox"></input>
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}

        </td>
      </td>
      <td className='bg-[#FFDBAF] w-40 h-fit border-r-2 text-center'>
        <td className='bg-[#FFDBAF] text-orange-400  w-40 h-fit'>
          {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <h2 key={index}  style={{ backgroundColor: index % 2 === 0 ? '#FFDBAF' : '#FFF9CE' }}>
                {medicamento.fecha_programada}
              </h2>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </td>
      </td>

      <td className='bg-[#FFDBAF] text-orange-400 font-size  w-80 '>
            <h2 className='h-30'>{medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 key={index}  className="w-30" style={{ backgroundColor: index % 2 === 0 ? '#FFDBAF' : '#FFF9CE' }}>
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

export default MedioDia