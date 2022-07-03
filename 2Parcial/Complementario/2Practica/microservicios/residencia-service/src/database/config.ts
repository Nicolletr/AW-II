//const mongoose = require("mongoose");
import mongoose from "mongoose";
const { connection } = mongoose;

const Conexion = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN || "mongodb+srv://ejmpl01:Mariajo1131@ejemplo01.30qzr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");


    console.log(`Base de datos conectada...`);
  } catch (error) {
    console.log(`No se pudo conectar a base de datos`);
    throw new Error(`Error al conectarse a la base de datos`);
  }
};
connection.on('error', err => console.log(err))


export { Conexion, connection }