import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class ErrorOutput {
  @Field((type) => String, { nullable: true })
  code?: string;

  @Field((type) => String, { nullable: true })
  message?: string;
}

@ObjectType()
export class BaseDto {
  @Field((type) => ErrorOutput, { nullable: true })
  message?: ErrorOutput;
}
