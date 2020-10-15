import { ReadSerializer } from 'src/app/shared/interface/serializer';
import { PokemonDetailResponse } from './pokemon-detail-response.model';

export class PokemonDetailSerialize implements ReadSerializer {

  fromJsonToResponseModel(json: any): PokemonDetailResponse {
    return new PokemonDetailResponse(
      json.id,
      json.num,
      json.name,
      json.img,
      json.type,
      json.prev_evolution,
      json.next_evolution
    )
  }

}