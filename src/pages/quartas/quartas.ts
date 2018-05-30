import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SemiFinalPage } from '../semi-final/semi-final';

@IonicPage()
@Component({
  selector: 'page-quartas',
  templateUrl: 'quartas.html',
})
export class QuartasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  proximaPagina(){
    this.navCtrl.push(SemiFinalPage)
  }

}
