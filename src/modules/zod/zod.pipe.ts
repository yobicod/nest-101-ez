import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      const parsedValue = this.schema.parse(value); // Validates our incoming argument against the provided schema.
      return parsedValue;
    } catch (error) {
      console.log('🚀 ~ ZodValidationPipe ~ transform ~ error:', error.issues);
      if (error instanceof ZodError) {
        throw new BadRequestException(
          error.issues.map((issue) => ({
            field: issue.path.join('.'),

            message: issue.message,
          })),
        );
      }
    }
  }
}
