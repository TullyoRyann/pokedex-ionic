import { ListSerializer } from 'src/app/shared/interface/serializer';
import { HomeResponse } from './home-response.model';

export class HomeSerialize implements ListSerializer {

  fromJsonToResponseListModel(json: any): HomeResponse {
    return new HomeResponse(
      json.id,
      json.num,
      json.name,
      json.img,
      json.type
    )
  }

}