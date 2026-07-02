import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/config.ts";
import { type Optional } from "sequelize";
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
  extends Model<IPaciente, PacienteCreationAttributes>, IPaciente {
    createdAt?: Date;
    updatedAt?: Date;
  }

export const Pacientes = sequelize.define<PacienteInstance>("Pacientes", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "El nombre no puede estar vacío" },
      is: { args: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, msg: "El nombre solo puede contener letras" },
    },
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Los apellidos no pueden estar vacíos" },
      is: { args: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, msg: "Los apellidos solo pueden contener letras" },
    },
  },

  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: { msg: "La edad debe ser un número entero" },
      min: { args: [0], msg: "La edad mínima es 0" },
      max: { args: [150], msg: "La edad máxima es 150" },
    },
  },

  cedula: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      
      notEmpty: { msg: "La cédula no puede estar vacía" },
      len: { args: [10, 13], msg: "La cédula debe tener entre 10 y 13 dígitos" },
      is: { args: /^\d+$/, msg: "La cédula solo puede contener números" },
    },
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "El teléfono no puede estar vacío" },
      len: { args: [7, 9], msg: "El teléfono debe tener entre 7 y 9 dígitos" },
      is: { args: /^\d+$/, msg: "El teléfono solo puede contener números" },
    },
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "La dirección no puede estar vacía" },
    },
  },
  
});
