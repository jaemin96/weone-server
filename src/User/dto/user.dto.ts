import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @Field(() => ID)
  id: number;

  @Field()
  email: string;

  @Field()
  name: string;
}
