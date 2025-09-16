import { Injectable } from '@nestjs/common';
import { ResponseBuilder } from './interface/response.builder.interface';

export interface ErrorResponse {
  success: false;
  message: string;
  data: null;
  timestamp: string;
  statusCode: number;
  error?: string;
}

@Injectable()
export class ResponseBuilderService {
  public success<T>(data: T, message = 'OK'): ResponseBuilder<T> {
    return {
      success: true,
      message,
      data,
      timestamp: new Date().toISOString(),
    };
  }

  public error(
    message: string,
    statusCode = 400,
    error?: string,
  ): ErrorResponse {
    return {
      success: false,
      message,
      data: null,
      timestamp: new Date().toISOString(),
      statusCode,
      error,
    };
  }
}
