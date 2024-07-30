import { IsEmail, IsString } from 'class-validator';
import { User } from '@prisma/client';

export class CreateUserDto implements Omit<User, 'id'> {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly name: string;
}
