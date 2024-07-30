import { Resolver, Query } from '@nestjs/graphql';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Resolver(() => UserDto)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserDto])
  async getAllUsers(): Promise<UserDto[]> {
    return this.userService.getAllUsers();
  }
}
