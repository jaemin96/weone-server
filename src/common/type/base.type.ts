import { Field, Int } from '@nestjs/graphql';

export class BaseType {
  @Field(() => Int)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  deletedAt: Date;
}
