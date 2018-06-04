import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-final',
  templateUrl: 'final.html',
})
export class FinalPage {

  fieldsets: Array<{titulo: string, dia: string, data: string, local: string, hora: string, time1: string, time2: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fieldsets = [
      {titulo: 'Final', dia: 'Dom', data: '15/07/2018', local: 'Olímpico Lujniki', hora: '12:00', time1: 'Venc. Semifinal 1', time2: 'Venc. Semifinal 2'}
    ]
  }

}
