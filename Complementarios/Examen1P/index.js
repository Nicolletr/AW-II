//librerias
const express = require('express');
const cors = require('cors');

//variable para express
const evaluacion = express();

evaluacion.use(cors());
evaluacion.use(express.json());

//Pregunta1
const parametro = async(req,res)=>{
    const {valor}=req.body;
    if(valor==="v1"){
        return res.send({message:'Ruta1'})
    }
    if(valor==="v2"){
        return res.send({message:'Ruta2'})
    }else{
        return res.send({message:'Ruta no encontrada'})
    }
}
evaluacion.get('/prueba',parametro)



evaluacion.listen(4000,()=>console.log('Servidor funcionando correctamete'))
