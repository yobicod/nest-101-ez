import { AuthModule } from './modules/auth/auth.module';
import { CatModule } from './modules/cat/cat.module';
import { ResponseBuilderModule } from './modules/response-builder/response-builder.module';
import { RoleModule } from './modules/role/role.module';

export const customModules = [
  AuthModule,
  RoleModule,
  ResponseBuilderModule,
  CatModule,
];
