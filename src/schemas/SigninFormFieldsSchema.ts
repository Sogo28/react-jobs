import z from "zod";

export const SigninFormFieldsSchemaBase = z.object({
  name: z.string(),
  password: z.string(),
  email: z.string().email(),
  retypePassword: z.string(),
})

export const SigninFormFieldsSchema = SigninFormFieldsSchemaBase.refine((data) => data.password === data.retypePassword, {
  message: "Passwords dont match",
  path: ["retypePassword"]
})



export type SigninFormFieldType = z.infer<typeof SigninFormFieldsSchema>