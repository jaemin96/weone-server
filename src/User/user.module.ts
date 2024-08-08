import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, UserProfile } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserProfile])],
  providers: [UserService, UserResolver, PrismaService],
  exports: [UserService],
})
export class UserModule {}
