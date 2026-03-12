import {Router} from "express";
import { getPacientes } from "../controllers/paciente.controller.ts";

const router = Router();

router.get('/', getPacientes)

export default router;