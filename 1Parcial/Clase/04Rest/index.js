const express=require('express');
const cors= require('cors');

const app = express();
const PUERTO=2500;

//para los middleware se usa use
app.use(cors()).use(express.json());

//res todo lo que llega del servidor
//res al cliente, devolver algo y next el siguiente proceso, solicitud (otro callback)
app.get('/prueba',(req,res,next)=>{
    next();
}, (req,res, next)=>{
    
    res.status(200).send({mensaje:"Hola prueba"}); //200 para devolver información (JSON)
})

app.use('/prueba',(req,res,next)=>{
    req.body.nombre = req.body.nombre.toUpperCase();
    next();
})
app.post('/prueba',(req,res,next)=>{
    res.status(201).send(req.body);
    next();
})
app.use('/prueba',(req,res,next)=>{
    console.log(`Despues del Middleware`);

})
app.listen(PUERTO,()=>{
    console.log(`Servidor ejecutandose en el puerto ${PUERTO}`)
})