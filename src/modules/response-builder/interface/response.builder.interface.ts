export interface ResponseBuilder<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}
