import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useContexto } from '../context/MainContext';

 function Necesario() {
  const [medicamentos, setMedicamentos] = useState([]);
  const {handleDelete, triggerEffect} = useContexto()
      
  useEffect(() => {
  const fetchData = async () => {
    try {
      const user = localStorage.getItem('user');
      const response = await axios.get('http://localhost:8082/medicamentosNecesario', {
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
    <th className='bg-[#7BDD74] w-40 h-fit border-r-2 text-[#1d7f13] font-semibold'>Solo cuando sea necesario
    <img className='w-8 h-8 mb-auto mx-auto' src='https://cdn-icons-png.flaticon.com/128/4521/4521504.png'></img></th>
    <td className='bg-[#7BDD74]  w-40 h-fit text-[#1d7f13] border-r-2 '>
      {medicamentos ? (
        medicamentos.map((medicamento, index) => (
          <h2 key={medicamento.id} style={{ backgroundColor: index % 2 === 0 ? '#7BDD74' : '#B9FFB3' }}>
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
            <h2 key={medicamento.id} style={{ backgroundColor: index % 2 === 0 ? '#7BDD74' : '#B9FFB3' }}>
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
              <h2 key={medicamento.id} style={{ backgroundColor: index % 2 === 0 ? '#7BDD74' : '#B9FFB3' }}>A discreción</h2>
            
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
            <h2 key={medicamento.id} style={{ backgroundColor: index % 2 === 0 ? '#7BDD74' : '#B9FFB3' }}>Usar a discrecion </h2>
          ))
        ) : (
          <p>Loading...</p>
         )}
      </td>
    </td>   
                                    {/*Comentarios*/}
            <td className='bg-[#7BDD74] text-[#1d7f13] w-80 h-fit border-r-2'>
            <h2 className='h-30 '>{medicamentos ? (
          medicamentos.map((medicamento, index) => (
            <h2 key={medicamento.id}  style={{ backgroundColor: index % 2 === 0 ? '#7BDD74' : '#B9FFB3' }}>
              {medicamento.comentarios}
            </h2>
          ))
        ) : (
          <p>Loading...</p>
        )}
</h2>      
      </td>
      <td className=' bg-[#7BDD74] text-[#1d7f13] w-8 h-fit border-r-2'>
      {medicamentos ? (
            medicamentos.map((medicamento, index) => (
              <button className='w-full' style={{ backgroundColor: index % 2 === 0 ? '#7BDD74' : '#B9FFB3' }} onClick={() => handleDelete(medicamento.id)}>x</button>
            ))
          ) : (
            <p>Loading...</p>
          )}
      </td>
  


  </>
  )
   
 }

export default Necesario
