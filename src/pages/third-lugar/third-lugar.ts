import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinalPage } from '../final/final';
import { DadosTabelaProvider } from '../../providers/dados-tabela/dados-tabela'

@IonicPage()
@Component({
  selector: 'page-third-lugar',
  templateUrl: 'third-lugar.html',
  providers: [DadosTabelaProvider]
})
export class ThirdLugarPage {
  dado:any
  
  fieldsets: Array<{titulo: string, dia: string, data: string, local: string, hora: string, time1: string, time2: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DadosTabela: DadosTabelaProvider) {
    this.pegarDados()
    this.fieldsets = [
      {titulo: 'Disputa do 3º Lugar', dia: 'Sab', data: '14/07/2018', local: 'São Petersburgo', hora: '11:00', time1: 'Perd. Semifinal 1', time2: 'Perd. Semifinal 2'}
    ]
  }

  proximaPagina(){
    this.navCtrl.push(FinalPage)
  }
  pegarDados(){
    this.DadosTabela.load()
    .then(data => {
      this.dado = data;
      console.log("Ok")
    })
  }

}
