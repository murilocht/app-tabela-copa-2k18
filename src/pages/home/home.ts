import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FasesPage } from '../fases/fases';
import { SelecoesPage } from '../selecoes/selecoes';
import { HistoriaPage } from '../historia/historia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  PaginaFases(){
    this.navCtrl.push(FasesPage)
  }
  
  PaginaSelecoes = function(){
    this.navCtrl.push(SelecoesPage)
  }

  PaginaHistoria = function(){
    this.navCtrl.push(HistoriaPage)
  }
}