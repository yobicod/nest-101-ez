import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Query,
  UsePipes,
} from '@nestjs/common';
import { Cat } from './interface/cat.interface';
import { CatService } from './cat.service';
import { ResponseBuilderService } from '../response-builder/response-builder.service';
import { ResponseBuilder } from '../response-builder/interface/response.builder.interface';
import { ZodValidationPipe } from '../zod/zod.pipe';
import { CreateCatDto, createCatSchema } from './dto/cat.dto';

@Controller('cat')
export class CatController {
  constructor(
    private readonly catService: CatService,
    private readonly responseBuilderService: ResponseBuilderService,
  ) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  getAll(
    @Query('name') name: string,
    @Query('age') age: number,
    @Query('gender') gender: 'MALE' | 'FEMALE',
  ): ResponseBuilder<Cat[]> {
    return this.responseBuilderService.success(
      this.catService.find({ name, age, gender }),
    );
  }

  @Get('male')
  @HttpCode(HttpStatus.OK)
  getMaleCats(): ResponseBuilder<Cat[]> {
    return this.responseBuilderService.success(this.catService.findMale());
  }

  @Get('name/:catName')
  @HttpCode(HttpStatus.OK)
  getCatByName(@Param('catName') catName: string): ResponseBuilder<Cat[]> {
    const cats = this.catService.findByName(catName);
    if (!cats.length) {
      throw new NotFoundException(
        this.responseBuilderService.error(
          `Cat with name [${catName}] not found`,
        ),
      );
    }
    return this.responseBuilderService.success(cats);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ZodValidationPipe(createCatSchema))
  createCat(@Body() body: CreateCatDto): ResponseBuilder<{ cat: unknown }> {
    return this.responseBuilderService.success({
      cat: body,
    });
  }
}
