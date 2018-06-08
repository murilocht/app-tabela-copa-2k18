import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FasesPage } from '../fases/fases';
import { DadosTabelaProvider } from '../../providers/dados-tabela/dados-tabela';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public tabelaService: DadosTabelaProvider) {

  }
  
  proximaPagina(){
    this.navCtrl.push(FasesPage)
  } 
  
  //ionViewLoad(){
   // this.tabelaService.getRemoteData();
  //}
}