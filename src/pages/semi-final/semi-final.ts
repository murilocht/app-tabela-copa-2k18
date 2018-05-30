import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThirdLugarPage } from '../third-lugar/third-lugar';

@IonicPage()
@Component({
  selector: 'page-semi-final',
  templateUrl: 'semi-final.html',
})
export class SemiFinalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  proximaPagina(){
    this.navCtrl.push(ThirdLugarPage)
  }

}