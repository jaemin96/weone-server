import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BaseOutput } from 'src/common';

@InputType()
export class DeletePostInput {
  @Field((type) => Number)
  id: number;
}

@ObjectType()
export class DeletePostOutput extends BaseOutput {
  @Field((type) => Number, { nullable: true })
  id?: number;
}
