import { User } from '@prisma/client';

export class CreateUserDto implements Omit<User, 'id'> {
  readonly email: string;
  readonly name: string;
}
