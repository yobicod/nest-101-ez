import { Global, Module } from '@nestjs/common';
import { ResponseBuilderService } from './response-builder.service';
// Mark this module as Global so any module can use this without import (but have to register somewhere first, e.g. root)
@Global()
@Module({
  providers: [ResponseBuilderService],
  exports: [ResponseBuilderService],
})
export class ResponseBuilderModule {}
