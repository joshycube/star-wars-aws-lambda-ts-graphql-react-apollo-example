import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CharacterArgs {
  @Field()
  name: string;
}
