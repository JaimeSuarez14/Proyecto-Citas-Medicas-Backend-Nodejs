import { body } from "express-validator";

export const validarPaciente = [
  body("nombres")
    .trim()
    .notEmpty().withMessage("El nombre es obligatorio")
    .isAlpha("es-ES", { ignore: " " }).withMessage("El nombre solo puede contener letras"),

  body("apellidos")
    .trim()
    .notEmpty().withMessage("Los apellidos son obligatorios")
    .isAlpha("es-ES", { ignore: " " }).withMessage("Los apellidos solo pueden contener letras"),

  body("edad")
    .trim()
    .notEmpty().withMessage("La edad es obligatoria")
    .isInt({ min: 0, max: 150 }).withMessage("La edad debe ser un número entre 0 y 150"),

  body("cedula")
    .trim()
    .notEmpty().withMessage("La cédula es obligatoria")
    .isLength({ min: 10, max: 13 }).withMessage("La cédula debe tener entre 10 y 13 dígitos")
    .isNumeric().withMessage("La cédula solo puede contener números"),

  body("telefono")
    .trim()
    .notEmpty().withMessage("El teléfono es obligatorio")
    .isLength({ min: 7, max: 9 }).withMessage("El teléfono debe tener entre 7 y 9 dígitos")
    .isNumeric().withMessage("El teléfono solo puede contener números"),

  body("direccion")
    .trim()
    .notEmpty().withMessage("La dirección es obligatoria"),
];
