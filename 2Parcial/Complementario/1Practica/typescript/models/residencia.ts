import mongoose from "mongoose";
const { Schema, model } = mongoose;
import {Iresidencia } from "../interfaces/Iresidencia"

const ResidenciasSchema: mongoose.Schema = new Schema <Iresidencia>( 
    {
        idPropietario: {
          type:mongoose.Schema.Types.ObjectId, ref:'propietario'
        },
        nombre: {
          type: String,
          required: [true, `El nombre es obligatorio`],
          unique: true,
        },
        CantidadHabitaciones: {
          type: Number,
          default: 0,
        },
        direccion: {
          type: String,
        },
    },
  );
  const residencia = mongoose.model <Iresidencia> ("Residencias", ResidenciasSchema);
  export {residencia}
  