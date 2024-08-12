import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql';
import { BaseOutput } from 'src/common';
import { Post } from '../entities/post.entity';

@InputType()
export class CreatePostInput extends OmitType(Post, [
  'id',
  'createdAt',
  'updatedAt',
  'deletedAt',
]) {}

@ObjectType()
export class CreatePostOutput extends BaseOutput {
  @Field((type) => Number, { nullable: true })
  id?: number;
}
