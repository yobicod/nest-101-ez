import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  public async signIn(
    username: string,
    incomingPassword: string,
  ): Promise<any> {
    const user = await this.userService.findOne(username);

    if (user?.password !== incomingPassword) {
      console.log('🚀 ~ AuthService ~ signIn ~ password:', incomingPassword);
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    const access_token: string = await this.jwtService.signAsync(payload);
    return {
      access_token,
    };
  }
}
