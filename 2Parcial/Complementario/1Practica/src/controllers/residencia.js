"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviciosBorrados = exports.actRes = exports.nuevaRes = exports.obtResId = exports.ResidenciaTotal = void 0;
//const { Contratos } = require("../models");
const residencia_1 = require("../models/residencia");
////////////////////////////////////////////////////////////////////////////////
//presentacion con postman
const ResidenciaTotal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, residencias] = yield Promise.all([
        residencia_1.residencia.countDocuments(query),
        residencia_1.residencia.find(query),
    ]);
    res.json({
        total,
        residencias,
    });
});
exports.ResidenciaTotal = ResidenciaTotal;
const obtResId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const residencia1 = yield residencia_1.residencia.findById(id);
    if (!residencia1) {
        res.status(400).json({
            message: `Residencia no encontrada con ${id}`,
        });
    }
    res.json(residencia1);
});
exports.obtResId = obtResId;
const nuevaRes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { estado } = _a, body = __rest(_a, ["estado"]);
    const resExistente = yield residencia_1.residencia.findOne({
        nombre_res: body.nombre_res,
    });
    if (resExistente) {
        res.status(400).json({
            message: `La residencia con ese nombre ya existe ${resExistente.nombre_res}`,
        });
    }
    const resid = new residencia_1.residencia(body);
    const resNueva = yield resid.save();
    res.status(201).json(resNueva);
});
exports.nuevaRes = nuevaRes;
const actRes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _b = req.body, { estado } = _b, data = __rest(_b, ["estado"]);
    const serModificado = yield residencia_1.residencia.findByIdAndUpdate(id, data, {
        new: true,
    });
    res.json(serModificado);
});
exports.actRes = actRes;
const serviciosBorrados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const resBorrado = yield residencia_1.residencia.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json(resBorrado);
});
exports.serviciosBorrados = serviciosBorrados;
