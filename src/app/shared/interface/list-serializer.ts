export interface ListSerializer {
  fromJsonToResponseListModel(json: any): any;
}