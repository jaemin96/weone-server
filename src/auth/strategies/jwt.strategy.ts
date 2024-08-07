import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/User/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.ACCESS_TOKEN_PRIVATE_KEY,
    });
  }

  async validate(payload: any) {
    console.log({ payload });
    return { userId: payload.sub, username: payload.username };

    // const user = await this.userService.getById(payload.sub);
    // if (user) {
    //   return user;
    // } else {
    //   throw new UnauthorizedException('user Not Found');
    // }
  }
}
