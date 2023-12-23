import { z } from "zod";

export const signupShema = z.object({
  nombre_usuario: z.string({
    required_error: "El nombre de usuario es requerido",
    invalid_type_error: "El nombre de usuario debe ser una cadena",
  }),
  correo: z
    .string({
      required_error: "El correo es requerido",
      invalid_type_error: "El correo debe ser una cadena",
    })
    .email({ message: "Correo invalido" }),
  contrasenia: z
    .string({
      required_error: "La contraseña es requerida",
      invalid_type_error: "La contraseña debe ser una cadena",
    })
    .min(5, { message: "La contraseña debe contener mínimo 5 digitos" }),
  rol: z
    .enum(["usuario", "empleado"])
    .refine((rol) => rol === "usuario" || rol === "empleado", {
      message: 'Rol invalido"',
    })
    .optional(),
});

export const signinShema = z.object({
  correo: z
    .string({
      required_error: "El correo es requerido",
      invalid_type_error: "El correo debe ser una cadena",
    })
    .email({ message: "Correo invalido" }),
  contrasenia: z
    .string({
      required_error: "La contraseña es requerida",
      invalid_type_error: "La contraseña debe ser una cadena",
    })
    .min(5, { message: "La contraseña debe contener mínimo 5 digitos" }),
});
