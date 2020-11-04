import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => ID, { description: 'User ID' })
  id: string;

  @Field(type => String, { nullable: true, description: `User's first name` })
  firstName?: string;

  @Field(type => String, { nullable: true, description: `User's last name` })
  lastName?: string;

  @Field(type => String, { nullable: true, description: `User's EMail` })
  email?: string;

  @Field(type => String, { nullable: true, description: `User's age` })
  age?: number;
}