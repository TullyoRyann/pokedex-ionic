

export interface ListSerializer {
  fromJsonToResponseListModel(json: any): any;
}

export interface ReadSerializer {
  fromJsonToResponseModel(json: any): any;
}