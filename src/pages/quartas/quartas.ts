import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SemiFinalPage } from '../semi-final/semi-final';

@IonicPage()
@Component({
  selector: 'page-quartas',
  templateUrl: 'quartas.html',
})
export class QuartasPage {
  
  fieldsets: Array<{titulo: string, dia: string, data: string, local: string, hora: string, time1: string, time2: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fieldsets = [
      {titulo: 'Quartas 1', dia: 'Sex', data: '06/07/2018', local: 'Nizhny Novgorod', hora: '11:00', time1: 'Venc. Oitavas 1', time2: 'Venc. Oitavas 2'},
      {titulo: 'Quartas 2', dia: 'Sex', data: '06/07/2018', local: 'Arena Kazan', hora: '15:00', time1: 'Venc. Oitavas 3', time2: 'Venc. Oitavas 4'},
      {titulo: 'Quartas 3', dia: 'Sab', data: '07/07/2018', local: 'Olímpico de Sochi', hora: '15:00', time1: 'Venc. Oitavas 5', time2: 'Venc. Oitavas 6'},
      {titulo: 'Quartas 4', dia: 'Sab', data: '07/07/2018', local: 'Samarra', hora: '11:00', time1: 'Venc. Oitavas 7', time2: 'Venc. Oitavas 8'}
    ]
  }
 proximaPagina() {
    this.navCtrl.push(SemiFinalPage)
  }

}
