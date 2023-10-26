import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app=express()

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

app.get("/medicamentosManana",(peticion,respuesta)=>{
    const sql="SELECT * FROM medicamentos WHERE seccion = 'Mañana';"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", medicamentos:resultado})
        }
    })
})

app.get("/medicamentosMedio",(peticion,respuesta)=>{
    const sql="SELECT * FROM medicamentos WHERE seccion = 'Medio dia';"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", medicamentos:resultado})
        }
    })
})

app.get("/medicamentosTarde",(peticion,respuesta)=>{
    const sql="SELECT * FROM medicamentos WHERE seccion = 'Tarde';"
    conexion.query(sql,(error,resultado)=>{
        if(error){
            return respuesta.json({Error:"Upppsie whopsie, alguien configuro mal su back"})
        } else{
            return respuesta.json({Estatus:"Ok", medicamentos:resultado})
        }
    })
})

app.get("/medicamentosNoche",(peticion,respuesta)=>{
    const sql="SELECT * FROM medicamentos WHERE seccion = 'Noche';"
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