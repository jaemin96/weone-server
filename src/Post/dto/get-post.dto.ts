import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BaseOutput } from 'src/common';
import { Post } from '../entities/post.entity';

@InputType()
export class GetPostInput {
  @Field((type) => Number)
  id: number;
}

@ObjectType()
export class GetPostOutput extends BaseOutput {
  @Field((type) => Post, { nullable: true })
  post: Post;
}
