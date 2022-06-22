"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutaresidencia = void 0;
//const { Router } = require("express");
const express_1 = require("express");
//const { check } = require("express-validator");
const express_validator_1 = require("express-validator");
const residencia_1 = require("../typescript/controllers/residencia");
const middlewares_1 = require("../typescript/middlewares");
const router = (0, express_1.Router)();
exports.rutaresidencia = router;
router.get("/", residencia_1.ResidenciaTotal);
router.get("/:id", [(0, express_validator_1.check)("id", "El id no es valido o no existe").isMongoId(), middlewares_1.validacion], residencia_1.obtResId);
router.post("/", [
    (0, express_validator_1.check)("nombre_res", "el nombre_res es obligatorio").not().isEmpty(),
    middlewares_1.validacion,
], residencia_1.nuevaRes);
router.put("/:id", [(0, express_validator_1.check)("id", "El id no es valido").isMongoId(), middlewares_1.validacion], residencia_1.actRes);
router.delete("/:id", [(0, express_validator_1.check)("id", "El id es incorrecto").isMongoId(), middlewares_1.validacion], residencia_1.serviciosBorrados);
