import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { BaseOutput } from 'src/common';
import { Post } from '../entities/post.entity';

@InputType()
export class UpdatePostInput extends OmitType(Post, [
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}

@ObjectType()
export class UpdatePostOutput extends BaseOutput {
  @Field((type) => Number, { nullable: true })
  id?: number;
}
