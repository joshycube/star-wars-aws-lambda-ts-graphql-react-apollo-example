import { Injectable, HttpService, NotFoundException } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

import { CharacterResponse } from '../types/Character';

@Injectable()
export class CharacterService {
  constructor(private httpService: HttpService) {}

  async findCharactersByName({ name }) {
    try {
      const response: Observable<AxiosResponse<any>> = this.httpService.get(
        `https://swapi.dev/api/people/?search=${name}`,
      );
      const responesPromise = await response.toPromise();

      if (!!responesPromise?.data?.results?.length) {
        const results = responesPromise?.data?.results;

        return results.map((result: Partial<CharacterResponse>) => ({
          id: result.url,
          name: result.name,
          mass: result.mass === 'unknown' ? 0 : result.mass,
          height: result.height,
        }));
      } else {
        throw new NotFoundException(name);
      }
    } catch (error) {
      throw error;
    }
  }
}
