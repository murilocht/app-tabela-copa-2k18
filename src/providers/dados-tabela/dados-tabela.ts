import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class DadosTabelaProvider {

  data:any

  url = "https://cdn.rawgit.com/lsv/fifa-worldcup-2018/master/data.json";

  constructor(public http: HttpClient) {
    console.log("Pegando dados da API externa")
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this.url)
        .map(res => res)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          console.log(this.data)
        });
    });
  }
}
