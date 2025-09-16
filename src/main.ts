import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './modules/exception/exception.filter';
import { ResponseBuilderService } from './modules/response-builder/response-builder.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter(new ResponseBuilderService()));
  await app.listen(3000);
}
bootstrap();
