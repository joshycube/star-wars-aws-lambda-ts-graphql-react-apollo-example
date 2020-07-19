import { Module, HttpModule } from '@nestjs/common';
import { CharacterResolver } from './character.resolver';
import { CharacterService } from './character.service';

@Module({
  imports: [HttpModule],
  providers: [CharacterResolver, CharacterService],
})
export class CharacterModule {}
