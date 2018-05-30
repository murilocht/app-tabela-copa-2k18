import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinalPage } from '../final/final';

@IonicPage()
@Component({
  selector: 'page-third-lugar',
  templateUrl: 'third-lugar.html',
})
export class ThirdLugarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  proximaPagina(){
    this.navCtrl.push(FinalPage)
  }

}
