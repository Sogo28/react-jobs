import { z } from "zod";

export const CompanySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  contactEmail: z.string(),
  contactPhone: z.string(),
  location: z.string(),
  userId: z.string(),
})

export type CompanyType = z.infer<typeof CompanySchema>;

// id           String @id @default(auto()) @map("_id") @db.ObjectId
//   name         String
//   description  String
//   contactEmail String @unique
//   contactPhone String
//   location     String
//   user         User   @relation(fields: [userId], references: [id])
//   userId       String @unique @db.ObjectId