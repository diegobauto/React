import { z } from "zod";
import { horarioShema } from "./horario.shema.js";

const recursoShema = z.object({
  tipo: z.enum(["Auditorio", "Laboratorio", "Salón"]),
  nombre: z.string({
    required_error: "El nombre es requerido",
    invalid_type_error: "El nombre debe ser una cadena",
  }),
  descripcion: z.string({
    required_error: "La descripción es requerida",
    invalid_type_error: "La descripción debe ser una cadena",
  }),
  capacidad: z
    .number({
      required_error: "La capacidad es requerida",
      invalid_type_error: "La capacidad debe ser un número",
    })
    .int({ message: "La capacidad debe ser un número entero" })
    .min(2, { message: "La capacidad mínima es de 2 personas" }),
  horario: horarioShema,
});

export const auditorioSchema = recursoShema.extend({
  tipo_sillas: z.enum(["Madera", "Plástico", "Metal"]),
});

export const laboratorioSchema = recursoShema.extend({
  tipo_mesas: z.enum(["Metal", "Acrílico"]),
});

export const salonSchema = recursoShema;
