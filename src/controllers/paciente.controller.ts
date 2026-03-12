import type { Request, Response } from "express";
import { Pacientes } from "../models/paciente.ts";

export const createPacientes = async (req: Request, res: Response) => {
  const { nombres, apellidos, edad, cedula, telefono, direccion } = req.body;
  try {
    const paciente = await Pacientes.create({
      nombres,
      apellidos,
      edad,
      cedula,
      telefono,
      direccion,
    });
    res.json(paciente);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error del servidor",
    });
  }
};

export const getPacientes = async (req: Request, res: Response) => {
  const pacientes = await Pacientes.findAll();
  res.json(pacientes);
};
