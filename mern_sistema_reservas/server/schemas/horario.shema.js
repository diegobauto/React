import { z } from "zod";

const diasSemanaEnum = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export const horarioShema = z.array(
  z
    .object({
      dia_semana: z.enum(diasSemanaEnum),
      hora_apertura: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/), //Formato de hora HH:MM
      hora_cierre: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/), //Formato de hora HH:MM
    })
    .refine(
      (data) => {
        const horaApertura = data.hora_apertura.split(":");
        const horaCierre = data.hora_cierre.split(":");
        const aperturaEnMinutos =
          parseInt(horaApertura[0]) * 60 + parseInt(horaApertura[1]);
        const cierreEnMinutos =
          parseInt(horaCierre[0]) * 60 + parseInt(horaCierre[1]);
        return (
          aperturaEnMinutos < cierreEnMinutos &&
          cierreEnMinutos - aperturaEnMinutos >= 30
        );
      },
      {
        message:
          "La hora de apertura debe ser anterior a la hora de cierre y con diferencia mínima de 30 minutos",
      }
    )
);
