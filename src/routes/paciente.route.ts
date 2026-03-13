import {Router} from "express";
import { getPacientes, createPacientes } from "../controllers/paciente.controller.ts";

const router = Router();

router.get('/', getPacientes)
router.post('/', createPacientes)

export default router;