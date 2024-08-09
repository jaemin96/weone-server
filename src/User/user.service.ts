import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User, UserProfile } from './entities';
import { Repository } from 'typeorm';
import {
  GetUserInput,
  GetUserOutput,
  GetUserListInput,
  GetUserListOutput,
  CreateUserInput,
  CreateUserOutput,
  UpdateUserInput,
  UpdateUserOutput,
  DeleteUserInput,
  DeleteUserOutput,
} from '../User/dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(UserProfile)
    private readonly userProfileRepo: Repository<UserProfile>,
  ) {}

  /**
   * Service - 회원가입
   * @param CreateUserInput
   * @return CreateUserOutput
   */
  async createUser(input: CreateUserInput): Promise<CreateUserOutput> {
    // check exist user
    let user = await this.userRepo.findOne({
      where: { email: input.email },
    });

    // if exist user - throw error message
    if (user) {
      throw new HttpException(
        '동일한 이메일로 가입된 아이디가 존재합니다',
        HttpStatus.CONFLICT,
      );
    }

    user = this.userRepo.create({
      email: input.email,
      name: input.name,
      password: input.password,
      grade: input.grade,
      autoLogin: input.autoLogin,
    });

    // if not exist user - insert
    user = await this.userRepo.save(user);

    const profile = this.userProfileRepo.create({
      userId: user.id,
      nickname: `user_${user.id}`,
    });

    await this.userProfileRepo.save(profile);

    return { id: user.id };
  }

  /**
   * Service - 회원조회
   * @param GetUserInput
   * @return GetUserOutput
   */
  async getUser(input: GetUserInput): Promise<GetUserOutput> {
    const user = await this.userRepo.findOne({
      where: { id: input.id },
      relations: ['profile'],
    });

    if (!user) {
      throw new HttpException(
        '유저 정보가 존재 하지 않습니다.',
        HttpStatus.NOT_FOUND,
      );
    }

    return { user };
  }

  /**
   * Service - 회원리스트조회
   * @param GetUserListInput
   * @return GetUserListOutput
   */
  async getUserList(input?: GetUserListInput): Promise<GetUserListOutput> {
    try {
      let users;

      if (!input) {
        users = await this.userRepo.find({ relations: ['profile'] });
      } else {
        users = await this.userRepo.find({
          where: { ...input },
          relations: ['profile'],
        });
      }

      return { users };
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Service - 회원정보수정
   * @param UpdateUserInput
   * @return UpdateUserOutput
   */
  async updateUser(input: UpdateUserInput): Promise<UpdateUserOutput> {
    let user = await this.userRepo.findOne({ where: { id: input.id } });

    if (!user) {
      throw new HttpException(
        '유저가 존재하지 않습니다.',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.userRepo.save({
      id: user.id,
      ...input,
    });

    return { id: user.id };
  }

  /**
   * 회원탈퇴
   * @param DeleteUserInput
   * @return DeleteUserOutput
   */
  async deleteUser(input: DeleteUserInput): Promise<DeleteUserOutput> {
    const user = await this.userRepo.findOne({ where: { id: input.id } });

    if (!user) {
      throw new HttpException(
        '계정이 존재 하지 않습니다.',
        HttpStatus.NOT_FOUND,
      );
    }

    await this.userRepo.softDelete(input.id);

    return { id: user.id };
  }
}
