import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OitavasPage } from '../oitavas/oitavas';

@IonicPage()
@Component({
  selector: 'page-fases',
  templateUrl: 'fases.html',
})
export class FasesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  proximaPagina(){
    this.navCtrl.push(OitavasPage)
  } 

}