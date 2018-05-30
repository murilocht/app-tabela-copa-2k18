import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FasesPage } from '../fases/fases';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  proximaPagina(){
    this.navCtrl.push(FasesPage)
  }  
}