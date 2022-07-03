import { Router } from "express"
import { check } from "express-validator";

import {
  ResidenciaTotal,
  obtResId,
  nuevaRes,
  actRes,
  serviciosBorrados,
} from "../controllers/residencia";

import { validacion } from "../middlewares";

const router = Router();

router.get("/", ResidenciaTotal);

router.get(
  "/:id",
  [check("id", "El id no es valido o no existe").isMongoId(), validacion],
  obtResId
);

router.post(
  "/registrar",
  [
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    validacion,
  ],
  nuevaRes
);

router.put(
  "/editar/:id",
  [check("id", "El id no es valido").isMongoId(), validacion],
  actRes
);

router.delete(
  "/eliminar/:id",
  [check("id", "El id es incorrecto").isMongoId(), validacion],
  serviciosBorrados
);

export {
  router as rutaresidencia
};
