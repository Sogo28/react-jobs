import { z } from "zod";

export const CompanyFormFieldsSchema = z.object({
  name: z.string(),
  description: z.string(),
  contactEmail: z.string().email(),
  contactPhone: z.string(),
  location: z.string(),
})

export type CompanyFormFieldsType = z.infer<typeof CompanyFormFieldsSchema>;

// id           String @id @default(auto()) @map("_id") @db.ObjectId
//   name         String
//   description  String
//   contactEmail String @unique
//   contactPhone String
//   location     String
//   user         User   @relation(fields: [userId], references: [id])
//   userId       String @unique @db.ObjectId