import { Injectable } from '@nestjs/common';
import { ResponseBuilder } from './interface/response.builder.interface';

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

  public error(message: string, statusCode = 400) {
    return {
      success: false,
      message,
      data: null,
      timestamp: new Date().toISOString(),
      statusCode,
    };
  }
}
