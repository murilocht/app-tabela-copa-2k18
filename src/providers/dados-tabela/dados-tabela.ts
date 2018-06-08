import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
/*
  Generated class for the DadosTabelaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DadosTabelaProvider {

  constructor(public http: HttpClient) {
    //this.http.get('https://cdn.rawgit.com/lsv/fifa-worldcup-2018/master/data.json').subscribe(data => {
     // console.log(data);
   // })
  }

  getRemoteData(){
    this.http.get('https://cdn.rawgit.com/lsv/fifa-worldcup-2018/master/data.json').subscribe(data => {
      console.log(data);
    })
  }

}
