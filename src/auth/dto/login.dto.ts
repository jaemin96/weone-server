import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
@ObjectType()
export class LoginOutput {
  @Field((type) => String, { nullable: true })
  token?: string;
}

@ObjectType()
export class LogoutOutput {
  @Field((type) => String, { nullable: true })
  token?: string;
}
