import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database/config.ts";

export interface IPaciente {
  id: number;
  nombres: string;
  apellidos: string;
  edad: number;
  cedula: string;
  telefono: string
  direccion: string;
}