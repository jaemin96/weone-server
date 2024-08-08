import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BaseOutput } from 'src/common';

@InputType()
export class DeleteUserInput {
  @Field((type) => Number)
  id: number;
}

@ObjectType()
export class DeleteUserOutput extends BaseOutput {
  @Field((type) => Number, { nullable: true })
  id?: number;
}
