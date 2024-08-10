import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
})

export type UserType = z.infer<typeof UserSchema>;