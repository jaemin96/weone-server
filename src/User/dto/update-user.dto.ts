import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { BaseOutput } from 'src/common';
import { User } from '../entities';

@InputType()
export class UpdateUserInput extends OmitType(User, [
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}

@ObjectType()
export class UpdateUserOutput extends BaseOutput {
  @Field((type) => Number, { nullable: true })
  id?: number;
}
