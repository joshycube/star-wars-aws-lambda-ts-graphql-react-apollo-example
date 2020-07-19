import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Character {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  mass: number;

  @Field()
  height: number;
}
