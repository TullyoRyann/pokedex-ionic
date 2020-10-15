export class QueryParamsFactory {

  create(obj: object): string {

    let params = '';
    Object.entries(obj).forEach(([key, referencia], index) => {
      if (index === 0) {
        params = params.concat('?')
      } else {
        params = params.concat('&')
      }

      params = params.concat(`num=${referencia}`)
    })

    return params;
  }

}
