import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BaseOutput } from 'src/common';
import { Post } from '../entities/post.entity';

@InputType()
export class GetPostListInput {
  @Field((type) => String, { nullable: true })
  email: string;
}

@ObjectType()
export class GetPostListOutput extends BaseOutput {
  @Field((type) => [Post])
  posts: Post[];
}
