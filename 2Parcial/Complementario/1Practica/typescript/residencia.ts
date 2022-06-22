//const { Router } = require("express");
import { Router} from "express"
//const { check } = require("express-validator");
import { check } from "express-validator"; 

import {
    ResidenciaTotal,
    obtResId,
    nuevaRes,
    actRes,
    serviciosBorrados,
  } from "../typescript/controllers/residencia";
  
  import { validacion } from "../typescript/middlewares";
  
  const router = Router();
  
  router.get("/", ResidenciaTotal);
  
  router.get(
    "/:id",
    [check("id", "El id no es valido o no existe").isMongoId(), validacion],
    obtResId
  );
  
  router.post(
    "/",
    [
      check("nombre_res", "el nombre_res es obligatorio").not().isEmpty(),
      validacion,
    ],
    nuevaRes
  );
  
  router.put(
    "/:id",
    [check("id", "El id no es valido").isMongoId(), validacion],
    actRes
  );
  
  router.delete(
    "/:id",
    [check("id", "El id es incorrecto").isMongoId(), validacion],
    serviciosBorrados
  );
  
  export {
    router as rutaresidencia
  };
