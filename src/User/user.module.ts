import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [UserService, UserResolver, PrismaService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
