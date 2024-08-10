import { z } from "zod";

export const LoginFormFieldsSchema = z.object({

  email: z.string().email(),
  password: z.string().min(1, "This field shouldn't be empty"),

})

export type LoginFormFieldsType = z.infer<typeof LoginFormFieldsSchema>;