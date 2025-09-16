import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './modules/exception/exception.filter';
import { ResponseBuilderService } from './modules/response-builder/response-builder.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AllExceptionsFilter(new ResponseBuilderService()));

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, config); // ✅ create doc
  SwaggerModule.setup('api', app, document); // ✅ pass doc, not function

  await app.listen(3000);
}
bootstrap();
