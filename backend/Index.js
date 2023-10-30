import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import bodyParser from 'body-parser';

const app=express()


app.use(bodyParser.json());

const conexion=mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'medictabs'
})

conexion.connect((error)=>{
   if(error){
      console.log("Upsss, algo salio mal", error)
   } else {
      console.log("Conexión realizada")
   }
})

app.use(cors())

app.get("/medicamentos",(peticion,respuesta)=>{
    const sql="SELECT * FROM medicamentos WHERE tomas > 0;"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", medicamentos:resultado})
        }
    })
})

app.get("/medicamentosManana",(peticion,respuesta)=>{
    const sql="SELECT * FROM medicamentos WHERE seccion = 'Mañana' AND tomas > 0;"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", medicamentos:resultado})
        }
    })
})

app.get("/medicamentosMedio",(peticion,respuesta)=>{
    const sql="SELECT * FROM medicamentos WHERE seccion = 'Medio dia' AND tomas != 0;"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", medicamentos:resultado})
        }
    })
})

app.get("/medicamentosTarde",(peticion,respuesta)=>{
    const sql="SELECT * FROM medicamentos WHERE seccion = 'Tarde' AND tomas != 0;"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", medicamentos:resultado})
        }
    })
})

app.get("/medicamentosNecesario",(peticion,respuesta)=>{
    const sql="SELECT * FROM medicamentos WHERE seccion = 'Cuando sea necesario';"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", medicamentos:resultado})
        }
    })
})

app.get("/medicamentosNoche",(peticion,respuesta)=>{
    const sql="SELECT * FROM medicamentos WHERE seccion = 'Noche' AND tomas != 0;"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", medicamentos:resultado})
        }
    })
})

app.listen(8082,()=>{
    console.log('Servidor disponible')
})


app.post('/api/agregar', (req, res) => {
    const datos = req.body
    const sql= "INSERT INTO Medicamentos (nombre, dosis, hora_programada, tomas, horaTomas, comentarios, SoloNecesario) VALUES (?,?,?,?,?,?,?)"
    const values = [datos.nombre, datos.dosis, datos.hora, datos.tomas, datos.horasP,datos.comentarios,datos.SoloNecesario]

    conexion.query(sql, values, (error, resultados) =>{
        if(error){
            console.log(error)
            return res.status(500).json({message:'Error de la bd, no?'})
        }
        res.json(resultados)
    })
})

app.delete('/api/eliminar/:id', (req,res) => {
    const id = req.params.id
    const sql = "DELETE FROM medicamentos WHERE id = ?"
    const values = [id]

    conexion.query(sql,values, (error,resultados) => {
        if(error){
            console.log(error)
            return res.status(500).json({message:'Error de la bd, no?'})
        }
        res.json(resultados)
    })
})

app.put('/api/hora/:id', (req, res) => {
    const id = req.params.id;
    const selectSql = "SELECT tomas,horaTomas FROM Medicamentos WHERE id = ?";
    const selectValues = [id];

    conexion.query(selectSql, selectValues, (error, resultados) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error de la bd, no?' });
        }
            
        // Check if resultados is an array and has at least one object
        if (Array.isArray(resultados) && resultados.length > 0) {
            const horasParaToma = parseInt(resultados[0].horaTomas, 10); // Convert to a number
            const tomasRes = (parseInt(resultados[0].tomas, 10) - 1)
            console.log("Horas entre dosis:", horasParaToma);

            // Check if algo is a valid number of hours
            if (!isNaN(horasParaToma) && horasParaToma >= 0 && horasParaToma <= 23) {
                const zona = 'America/Cancun'; // Cancun's time zone
                const horaDes = { timeZone: zona, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }; // Use '2-digit' for 24-hour format
                const formateador = new Intl.DateTimeFormat('en-US', horaDes);
                const currentTimeInCancun = new Date();
                console.log(currentTimeInCancun)
                
                const formattedTime = formateador.format(currentTimeInCancun);
                console.log(formattedTime)
                // Add the value of algo to the current time
                const newTimeInCancun = new Date(currentTimeInCancun);
                console.log(newTimeInCancun)
                newTimeInCancun.setHours(newTimeInCancun.getHours() + horasParaToma);


                const days = new Date(newTimeInCancun.getTime() + horasParaToma * 60 * 60 * 1000);


                const fecha = `${days.getDate()}-${days.getMonth() + 1}-${days.getFullYear()}`;
                console.log(fecha)
                const horaNueva = formateador.format(newTimeInCancun);

                console.log("Current time in Cancun:", formattedTime);
                console.log("Time in Cancun + Algo hours:", horaNueva);

                const upd = 'UPDATE Medicamentos SET hora_programada = ? ,tomas = ?,fecha_programada = ? WHERE id = ?;';
                const updValues = [horaNueva, tomasRes,fecha, id];
                conexion.query(upd, updValues, (error, resultados) => {
                    if (error) {
                        console.log(error);
                        return res.status(500).json({ message: 'Error de la bd, no?' });
                    }
                    res.json(resultados);
                });
                
            } else {
                console.log("Invalid value of algo. Should be a number between 0 and 23.");
            }
        } else {
            console.log("No data found for the given ID.");
        }
    });
});
