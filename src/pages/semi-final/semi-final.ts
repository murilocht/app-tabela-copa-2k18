import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThirdLugarPage } from '../third-lugar/third-lugar';

@IonicPage()
@Component({
  selector: 'page-semi-final',
  templateUrl: 'semi-final.html',
})
export class SemiFinalPage {

  fieldsets: Array<{titulo: string, dia: string, data: string, local: string, hora: string, time1: string, time2: string}>;

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fieldsets = [
      {titulo: 'Semifinal 1', dia: 'Ter', data: '10/07/2018', local: 'São Petersburgo', hora: '15:00', time1: 'Venc. Quartas 1', time2: 'Venc. Quartas 2'},
      {titulo: 'Semifinal 2', dia: 'Qua', data: '11/07/2018', local: 'Olímpico Lujniki', hora: '15:00', time1: 'Venc. Quartas 3', time2: 'Venc. Quartas 4'}
    ]
  }

  proximaPagina(){
    this.navCtrl.push(ThirdLugarPage)
  }



}