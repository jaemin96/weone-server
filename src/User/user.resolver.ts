import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  DeleteUserInput,
  DeleteUserOutput,
  GetUserInput,
  GetUserListInput,
  GetUserListOutput,
  GetUserOutput,
  CreateUserInput,
  CreateUserOutput,
  UpdateUserInput,
  UpdateUserOutput,
} from './dto';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  /**
   * Resolver - 회원가입
   * @param CreateUserInput
   * @return CreateUserOutput
   */
  @Mutation((returns) => CreateUserOutput)
  async createUser(
    @Args('input') input: CreateUserInput,
  ): Promise<CreateUserOutput> {
    return this.userService.createUser(input);
  }

  /**
   * Resolver - 회원조회
   * @param GetUserInput
   * @return GetUserOutput
   */
  @Query((returns) => GetUserOutput)
  async getUser(@Args('input') input: GetUserInput): Promise<GetUserOutput> {
    const { id } = input;
    return this.userService.getUser({ id });
  }

  /**
   * Resolver - 회원리스트조회
   * @param GetUserListInput
   * @return GetUserListOutput
   */
  @Query((returns) => GetUserListOutput)
  async getUserList(
    @Args('input', { nullable: true }) input?: GetUserListInput,
  ): Promise<GetUserListOutput> {
    return this.userService.getUserList(input);
  }

  /**
   * Resolver - 회원정보수정
   * @param UpdateUserInput
   * @return UpdateUserOutput
   */
  @Mutation((returns) => UpdateUserOutput)
  async updateUser(
    @Args('input') input: UpdateUserInput,
  ): Promise<UpdateUserOutput> {
    return this.userService.updateUser(input);
  }

  /**
   * Resolver - 회원탈퇴
   * @param DeleteUserInput
   * @return DeleteUserOutput
   */
  @Mutation((returns) => DeleteUserOutput)
  async deleteUser(
    @Args('input') input: DeleteUserInput,
  ): Promise<DeleteUserOutput> {
    return this.userService.deleteUser(input);
  }
}
