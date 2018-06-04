import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinalPage } from '../final/final';

@IonicPage()
@Component({
  selector: 'page-third-lugar',
  templateUrl: 'third-lugar.html',
})
export class ThirdLugarPage {
  
  fieldsets: Array<{titulo: string, dia: string, data: string, local: string, hora: string, time1: string, time2: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fieldsets = [
      {titulo: 'Disputa do 3º Lugar', dia: 'Sab', data: '14/07/2018', local: 'São Petersburgo', hora: '11:00', time1: 'Perd. Semifinal 1', time2: 'Perd. Semifinal 2'}
    ]
  }

  proximaPagina(){
    this.navCtrl.push(FinalPage)
  }

}
