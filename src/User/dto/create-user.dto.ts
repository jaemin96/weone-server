import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { BaseOutput } from 'src/common';
import { User } from '../entities';

@InputType()
export class CreateUserInput extends OmitType(User, [
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}

@ObjectType()
export class CreateUserOutput extends BaseOutput {
  @Field((type) => Number, { nullable: true })
  id?: number;
}
