import { Args, Query, Resolver } from '@nestjs/graphql';
import { CharacterArgs } from './dto/character.args';
import { Character } from './models/character.model';
import { CharacterService } from './character.service';

@Resolver(() => Character)
export class CharacterResolver {
  constructor(private readonly characterService: CharacterService) {}

  @Query(() => [Character])
  character(@Args() characterArgs: CharacterArgs): Promise<Character[]> {
    return this.characterService.findCharactersByName(characterArgs);
  }
}
