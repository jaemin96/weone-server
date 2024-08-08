import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BaseOutput } from 'src/common';
import { User } from '../entities';
import { IsEmail } from 'class-validator';

@InputType()
export class GetUserListInput {
  @IsEmail()
  @Field((type) => String, { nullable: true })
  email: string;
}

@ObjectType()
export class GetUserListOutput extends BaseOutput {
  @Field((type) => [User])
  users: User[];
}
