//const { Schema, model } = require("mongoose");
import mongoose from "mongoose";
const { Schema, model } = mongoose;
import {Iresidencia } from "../interfaces/Iresidencia"

const ResidenciasSchema: mongoose.Schema = new Schema <Iresidencia>( 
  
    {
        id_propietario: {
          type: String,
        },
        nombre_res: {
          type: String,
          required: [true, `El nombre del producto es obligatorio`],
          unique: true,
        },
        cantidad: {
          type: Number,
          default: 0,
        },
        direccion: {
          type: String,
        },
      },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  
  const residencia = model <Iresidencia> ("Residencias", ResidenciasSchema);
  export {residencia}
  