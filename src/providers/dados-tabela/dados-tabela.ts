import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'

@Injectable()
export class DadosTabelaProvider {

  constructor(public http: HttpClient) {
    console.log("Pegando dados da API externa")
  }

  load() {
    return this.http.get("https://cdn.rawgit.com/lsv/fifa-worldcup-2018/master/data.json").map(res => res)
  }
}
