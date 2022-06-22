//const { response } = require("express");
import { Response, Request} from "express"

//const { Contratos } = require("../models");
import { residencia} from "../models/residencia";
//const { connection } = require("../database/config");

import {Iresidencia } from "../interfaces/Iresidencia"

////////////////////////////////////////////////////////////////////////////////
//presentacion con postman
const ResidenciaTotal = async (req: Request, res : Response) => {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, residencias] = await Promise.all([
        residencia.countDocuments(query),
        residencia.find(query),
    ]);
    res.json({
      total,
      residencias,
    });
  };
  
  const obtResId = async (req: Request, res : Response) => {
    const { id } = req.params;
    const residencia1 = await residencia.findById(id);
    if (!residencia1) {
      res.status(400).json({
        message: `Residencia no encontrada con ${id}`,
      });
    }
    res.json(residencia1);
  };
  
  const nuevaRes = async (req: Request, res : Response) => {
    const { estado, ...body } = req.body;
    const resExistente = await residencia.findOne({
      nombre_res: body.nombre_res,
    });
    if (resExistente) {
      res.status(400).json({
        message: `La residencia con ese nombre ya existe ${resExistente.nombre_res}`,
      });
    }
    const resid = new residencia(body);
    const resNueva = await resid.save();
    res.status(201).json(resNueva);
  };
  
  const actRes = async (req: Request, res : Response) => {
    const { id } = req.params;
    const { estado, ...data } = req.body;
    const serModificado = await residencia.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.json(serModificado);
  };
  
  const serviciosBorrados = async (req: Request, res : Response) => {
    const { id } = req.params;
    const resBorrado = await residencia.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true }
    );
    res.json(resBorrado);
  };
  
  export {
    //postman
    ResidenciaTotal,
    obtResId,
    nuevaRes,
    actRes,
    serviciosBorrados,
  };