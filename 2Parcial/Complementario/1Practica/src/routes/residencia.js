"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutaresidencia = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const residencia_1 = require("../controllers/residencia");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
exports.rutaresidencia = router;
router.get("/", residencia_1.ResidenciaTotal);
router.get("/:id", [(0, express_validator_1.check)("id", "El id no es valido o no existe").isMongoId(), middlewares_1.validacion], residencia_1.obtResId);
router.post("/registrar", [
    (0, express_validator_1.check)("nombre", "el nombre es obligatorio").not().isEmpty(),
    middlewares_1.validacion,
], residencia_1.nuevaRes);
router.put("/editar/:id", [(0, express_validator_1.check)("id", "El id no es valido").isMongoId(), middlewares_1.validacion], residencia_1.actRes);
router.delete("/eliminar/:id", [(0, express_validator_1.check)("id", "El id es incorrecto").isMongoId(), middlewares_1.validacion], residencia_1.serviciosBorrados);
