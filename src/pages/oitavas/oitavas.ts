import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuartasPage } from '../quartas/quartas';


@IonicPage()
@Component({
  selector: 'page-oitavas',
  templateUrl: 'oitavas.html',
})
export class OitavasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  proximaPagina(){
    this.navCtrl.push(QuartasPage)
  }

}
