import { Injectable } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async createUser(data: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
      },
    });
  }
}
