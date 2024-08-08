import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BaseOutput } from 'src/common';
import { User } from '../entities';

@InputType()
export class GetUserInput {
  @Field((type) => Number)
  id: number;
}

@ObjectType()
export class GetUserOutput extends BaseOutput {
  @Field((type) => User, { nullable: true })
  user: User;
}
