import { Role } from 'src/modules/role/role.enum';

export interface User {
  userId: number;
  username: string;
  password: string;
  roles: Role[];
}
