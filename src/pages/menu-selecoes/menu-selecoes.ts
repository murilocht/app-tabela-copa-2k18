import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelecoesPage } from '../selecoes/selecoes';

@IonicPage()
@Component({
  selector: 'page-menu-selecoes',
  templateUrl: 'menu-selecoes.html',
  providers: [SelecoesPage]
})
export class MenuSelecoesPage {

  valorCard:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public selecao: SelecoesPage) {
  }

  menuSelecoes1(){
    this.selecao//.subirCard1
    //this.navCtrl.push(SelecoesPage)
   // this.valorCard = 1
   // return this.valorCard
  }
  // faz o resto ta?
  
}