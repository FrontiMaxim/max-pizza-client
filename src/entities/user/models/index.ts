import { z } from "zod";

export type DataRegistration = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const SchemaRegistration = z.object({
  firstName: z.string().min(1, "Поля обязательно для заполнения"),
  lastName: z.string().min(1, "Поля обязательно для заполнения"),
  email: z.string().email("Некорректный email"),
  password: z.string().min(6, "Пароль должен быть не менее 6 символов"),
});

export type DataLogin = {
  email: string;
  password: string;
};
