import { Router } from "express";
import { getPacientes, createPacientes } from "../controllers/paciente.controller.ts";
import { validarPaciente } from "../middlewares/validar-paciente.ts";
import { validarCampos } from "../middlewares/validar-campos.ts";

const router = Router();

router.get("/", getPacientes);
router.post("/", validarPaciente, validarCampos, createPacientes);

export default router;