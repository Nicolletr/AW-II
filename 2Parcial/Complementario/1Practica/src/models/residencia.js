"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.residencia = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const ResidenciasSchema = new Schema({
    idPropietario: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'propietario'
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
});
const residencia = mongoose_1.default.model("Residencias", ResidenciasSchema);
exports.residencia = residencia;
