import { createZodDto } from '@anatine/zod-nestjs';
import { z } from 'zod';

export const createCatSchema = z.object({
  name: z.string(),
  age: z.number(),
  gender: z.enum(['MALE', 'FEMALE']),
});

export class CreateCatDto extends createZodDto(createCatSchema) {}
