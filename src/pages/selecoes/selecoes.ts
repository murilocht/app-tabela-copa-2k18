import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuSelecoesPage } from '../menu-selecoes/menu-selecoes';


@IonicPage()
@Component({
  selector: 'page-selecoes',
  templateUrl: 'selecoes.html',
})
export class SelecoesPage {

  valorAtual:any
  valorScroll:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.subirCard1()
    /*this.subirCard2()
    this.subirCard3()
    this.subirCard4()
    this.subirCard5()*/
    //vc tem q chamar o resto...
  }

  subirCard1(){
    //this.navCtrl.setRoot(SelecoesPage)
    //console.log("ok")
   // this.navCtrl.setRoot(SelecoesPage)
    //this.valorAtual = this.menuSelecoes.menuSelecoes1
    //if(this.valorAtual == 1){
      //this.valorScroll = document.getElementById("5")
      //this.navCtrl.setRoot(SelecoesPage)
     // this.valorScroll.scrollToTop
    }

  }
  
  //tem q fazer as outras funções... te liga nos numeros...


