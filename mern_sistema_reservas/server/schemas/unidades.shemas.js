import { z } from "zod";
import { horarioShema } from "./horario.shema.js";

export const unidadShema = z.object({
  nombre: z.string({
    required_error: "El nombre es requerido",
    invalid_type_error: "El nombre debe ser una cadena",
  }),
  tiempo_min: z
    .number({
      required_error: "El tiempo mínimo es requerido",
      invalid_type_error: "El tiempo mínimo debe ser un número",
    })
    .min(30, { message: "El tiempo mínimo es de 30 minutos" })
    .int({ message: "El tiempo mínimo debe ser un número entero" })
    .multipleOf(30, { message: "El tiempo mínimo debe ser multiplo de 30" }),
  horario: horarioShema,
});
