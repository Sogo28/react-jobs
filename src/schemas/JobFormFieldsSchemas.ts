import { z } from "zod";

export const JobFormFieldSchema = z.object({
  title: z.string().min(4, "The title must contain at least 4 character(s)"),
  type: z.enum(["Full-Time", "Remote", "Part-Time", "Internship"]),
  description: z.string().min(15),
  location: z.string().min(4),
  salary: z.enum(["Under $50K", "$50K - 60K", "$60K - $70K", "$70K - $80K", "$90K - $100K", "$100K - $110K", "$100K - $125K", "$125K - $150K"
    , "$150K - $175K", "$175K - $200K", "Over $200k"]),
  company: z.object({
    name: z.string(),
    description: z.string().min(15, "The company description must contain at least 15 characters."),
    contactEmail: z.string().email("Please enter a valid Email."),
    contactPhone: z.string()
  })
})

export type JobFormFieldType = z.infer<typeof JobFormFieldSchema>;