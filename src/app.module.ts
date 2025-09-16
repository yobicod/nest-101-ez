import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { customModules } from './custom.module';
import { logger } from './middleware/logger.middleware';

@Module({
  imports: [...customModules],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  // register with module scope
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes('*');
  }
}
