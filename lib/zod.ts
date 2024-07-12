import { object, string } from "zod";

export const loginSchema = object({
    email: string({ required_error: "Email es requerido" })
        .min(1, "Email es requerido")
        .email("Invalido email"),
    password: string({ required_error: "Password es requerido" })
        .min(1, "Password es requerido")
        .min(8, "Password debe tener mas de 8 caracteres")
        .max(32, "Password debe tener menos de 32 caracteres")
});

export const registerSchema = object({
    email: string({ required_error: "Email es requerido" })
        .min(1, "Email es requerido")
        .email("Invalido email"),
    password: string({ required_error: "Password es requerido" })
        .min(1, "Password es requerido")
        .min(8, "Password debe tener mas de 8 caracteres")
        .max(32, "Password debe tener menos de 32 caracteres"),
    name: string({ required_error: "El name es requerido" })
        .min(1, "Name es requerido")
        .max(32, "El name debe tener como maximo 32 caracteres")
});
