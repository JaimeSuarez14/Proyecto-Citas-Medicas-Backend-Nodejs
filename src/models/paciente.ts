import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../database/config.ts";

export interface IPaciente {
  id: number;
  nombres: string;
  apellidos: string;
  edad: number;
  cedula: string;
  telefono: string;
  direccion: string;
}

interface PacienteCreationAttributes extends Optional<IPaciente, "id"> {}

interface PacienteInstance
  extends Model<IPaciente, PacienteCreationAttributes>, IPaciente {}

export const Pacientes = sequelize.define<PacienteInstance>("Pacientes", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  cedula: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
