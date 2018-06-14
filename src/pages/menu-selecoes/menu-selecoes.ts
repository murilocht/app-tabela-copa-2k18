import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlemanhaPage } from '../alemanha/alemanha';
import { ArabiaSauditaPage } from '../arabia-saudita/arabia-saudita';
import { ArgentinaPage } from '../argentina/argentina';
import { AustraliaPage } from '../australia/australia';
import { BelgicaPage } from '../belgica/belgica';
import { BrasilPage } from '../brasil/brasil';
import { ColombiaPage } from '../colombia/colombia';
import { CoreiaPage } from '../coreia/coreia';
import { CostaPage } from '../costa/costa';
import { CroaciaPage } from '../croacia/croacia';
import { DinamarcaPage } from '../dinamarca/dinamarca';
import { EgitoPage } from '../egito/egito';
import { EspanhaPage } from '../espanha/espanha';
import { FrancaPage } from '../franca/franca';
import { InglaterraPage } from '../inglaterra/inglaterra';
import { IraPage } from '../ira/ira';
import { IslandiaPage } from '../islandia/islandia';
import { JapaoPage } from '../japao/japao';
import { MarrocosPage } from '../marrocos/marrocos';
import { MexicoPage } from '../mexico/mexico';
import { NigeriaPage } from '../nigeria/nigeria';
import { PanamaPage } from '../panama/panama';
import { PeruPage } from '../peru/peru';
import { PoloniaPage } from '../polonia/polonia';
import { PortugalPage } from '../portugal/portugal';
import { RussiaPage } from '../russia/russia';
import { SenegalPage } from '../senegal/senegal';
import { ServiaPage } from '../servia/servia';

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
    this.navCtrl.push(BrasilPage)
  }
  menuSelecoes7(){
    this.navCtrl.push(ColombiaPage)
  }
  menuSelecoes8(){
    this.navCtrl.push(CoreiaPage)
  }
  menuSelecoes9(){
    this.navCtrl.push(CostaPage)
  }
  menuSelecoes10(){
    this.navCtrl.push(CroaciaPage)
  }
  menuSelecoes11(){
    this.navCtrl.push(DinamarcaPage)
  }
  menuSelecoes12(){
    this.navCtrl.push(EgitoPage)
  }
  menuSelecoes13(){
    this.navCtrl.push(EspanhaPage)
  }
  menuSelecoes14(){
    this.navCtrl.push(FrancaPage)
  }
  menuSelecoes15(){
    this.navCtrl.push(InglaterraPage)
  }
  menuSelecoes16(){
    this.navCtrl.push(IraPage)
  }
  menuSelecoes17(){
    this.navCtrl.push(IslandiaPage)
  }
  menuSelecoes18(){
    this.navCtrl.push(JapaoPage)
  }
  menuSelecoes19(){
    this.navCtrl.push(MarrocosPage)
  }
  menuSelecoes20(){
    this.navCtrl.push(MexicoPage)
  }
  menuSelecoes21(){
    this.navCtrl.push(NigeriaPage)
  }
  menuSelecoes22(){
    this.navCtrl.push(PanamaPage)
  }
  menuSelecoes23(){
    this.navCtrl.push(PeruPage)
  }
  menuSelecoes24(){
    this.navCtrl.push(PoloniaPage)
  }
  menuSelecoes25(){
    this.navCtrl.push(PortugalPage)
  }
  menuSelecoes26(){
    this.navCtrl.push(RussiaPage)
  }
  menuSelecoes27(){
    this.navCtrl.push(SenegalPage)
  }
  menuSelecoes28(){
    this.navCtrl.push(ServiaPage)
  }
  menuSelecoes29(){
    this.navCtrl.push(JapaoPage)
  }
  menuSelecoes30(){
    this.navCtrl.push(JapaoPage)
  }
  menuSelecoes31(){
    this.navCtrl.push(JapaoPage)
  }
  menuSelecoes32(){
    this.navCtrl.push(JapaoPage)
  }
  
}