import { Test, TestingModule } from '@nestjs/testing';
import { ResponseBuilderService } from './response-builder.service';

describe('ResponseBuilderService', () => {
  let service: ResponseBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponseBuilderService],
    }).compile();

    service = module.get<ResponseBuilderService>(ResponseBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
