import { z } from 'zod';

export const createCatSchema = z
  .object({
    name: z.string(),
    age: z.number(),
    gender: z.enum(['MALE', 'FEMALE']),
  })
  .required();

export type CreateCatDto = z.infer<typeof createCatSchema>;
