import { AuthModule } from './modules/auth/auth.module';
import { CatModule } from './modules/cat/cat.module';
import { ResponseBuilderModule } from './modules/response-builder/response-builder.module';

export const customModules = [AuthModule, ResponseBuilderModule, CatModule];
