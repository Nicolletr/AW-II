const mongoose = require('mongoose');
const conexion= "mongodb+srv://nicolle:louis241291@cluster0.merdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

(async ()=>{
    const estadoConexion =await mongoose.connect(conexion);
    const Usuario = mongoose.model ("Usuario",{nombre: String});
    const usuario1 =new Usuario({nombre:"Prueba sexto A"});
    const guardado= await usuario1.save();
    const resultado= await usuario1.save()
    console.log(resultado)
})();
