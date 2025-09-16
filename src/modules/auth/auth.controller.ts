import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { LoginDto, loginSchema } from './dto/auth.dto';
import { ZodValidationPipe } from '../zod/zod.pipe';
import { AuthService } from './auth.service';
import { ResponseBuilder } from '../response-builder/interface/response.builder.interface';
import { ResponseBuilderService } from '../response-builder/response-builder.service';
import { AuthGuard } from './auth.guard';
import { Public } from './auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly responseBuilderService: ResponseBuilderService,
  ) {}
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ZodValidationPipe(loginSchema))
  @Public()
  public async signIn(@Body() body: LoginDto) {
    const { username, password } = body;
    return await this.authService.signIn(username, password);
    // return this.responseBuilderService.success();
  }

  @Get('profile')
  @HttpCode(HttpStatus.OK)
  // @UseGuards(AuthGuard)
  public async getProfile(@Request() req: any) {
    return req.user;
  }
}
