import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PageInfo {
  @Field(type => String, { nullable: true, description: `Connection's end cursor` })
  endCursor?: string;

  @Field(type => String, { nullable: true, description: `Connection's start cursor` })
  startCursor?: string;

  @Field(type => Boolean, { nullable: true, description: `Connection's next page exists` })
  hasNextPage?: boolean;

  @Field(type => Boolean, { nullable: true, description: `Connection's previous page exists` })
  hasPreviousPage?: boolean;
}