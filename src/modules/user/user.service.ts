import { Injectable } from '@nestjs/common';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'user1',
      password: '1234',
    },
    {
      userId: 2,
      username: 'user2',
      password: '1234',
    },
    {
      userId: 3,
      username: 'user3',
      password: '1234',
    },
  ];

  public async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
