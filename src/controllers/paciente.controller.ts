import type { Request, Response } from "express";
import { Pacientes } from "../models/paciente.ts";

export const getPacientes = async (req: Request, res: Response) => {
  const pacientes = await Pacientes.findAll();
  res.json(pacientes);
};