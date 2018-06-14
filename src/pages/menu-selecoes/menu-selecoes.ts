import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlemanhaPage } from '../alemanha/alemanha';
import { ArabiaSauditaPage } from '../arabia-saudita/arabia-saudita';
import { ArgentinaPage } from '../argentina/argentina';
import { AustraliaPage } from '../australia/australia';
import { BelgicaPage } from '../belgica/belgica';

@IonicPage()
@Component({
  selector: 'page-menu-selecoes',
  templateUrl: 'menu-selecoes.html'
})
export class MenuSelecoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  menuSelecoes1(){
    this.navCtrl.push(AlemanhaPage)
  }
  menuSelecoes2(){
    this.navCtrl.push(ArabiaSauditaPage)
  }
  menuSelecoes3(){
    this.navCtrl.push(ArgentinaPage)
    //VC IRÁ CHAMAR A PAGE DE ACORDO COM O TIME DO CARD... 
  }
  menuSelecoes4(){
    this.navCtrl.push(AustraliaPage)
  }
  menuSelecoes5(){
    this.navCtrl.push(BelgicaPage)
  }
  menuSelecoes6(){
    
  }
  menuSelecoes7(){
    
  }
  menuSelecoes8(){
    
  }
  menuSelecoes9(){
    
  }
  menuSelecoes10(){
    
  }
  menuSelecoes11(){
    
  }
  menuSelecoes12(){
    
  }
  menuSelecoes13(){
    
  }
  menuSelecoes14(){
    
  }
  menuSelecoes15(){
    
  }
  menuSelecoes16(){
    
  }
  menuSelecoes17(){
    
  }
  menuSelecoes18(){
    
  }
  menuSelecoes19(){
    
  }
  menuSelecoes20(){
    
  }
  menuSelecoes21(){
    
  }
  menuSelecoes22(){
    
  }
  menuSelecoes23(){
    
  }
  menuSelecoes24(){
    
  }
  menuSelecoes25(){
    
  }
  menuSelecoes26(){
    
  }
  menuSelecoes27(){
    
  }
  menuSelecoes28(){
    
  }
  menuSelecoes29(){
    
  }
  menuSelecoes30(){
    
  }
  menuSelecoes31(){
    
  }
  menuSelecoes32(){
    
  }
  
}