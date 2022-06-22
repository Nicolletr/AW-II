"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.residencia = void 0;
//const { Schema, model } = require("mongoose");
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const ResidenciasSchema = new Schema({
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
}, {
    timestamps: true,
    versionKey: false,
});
const residencia = model("Residencias", ResidenciasSchema);
exports.residencia = residencia;
