import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  public async signIn(
    username: string,
    incomingPassword: string,
  ): Promise<any> {
    const user = await this.userService.findOne(username);

    if (user?.password !== incomingPassword) {
      console.log('🚀 ~ AuthService ~ signIn ~ password:', incomingPassword);
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;
    return result;
  }
}
