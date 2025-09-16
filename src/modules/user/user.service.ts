import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';
import { Role } from '../role/role.enum';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'user1',
      password: '1234',
      roles: [Role.Admin],
    },
    {
      userId: 2,
      username: 'user2',
      password: '1234',
      roles: [Role.User],
    },
  ];

  public async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
