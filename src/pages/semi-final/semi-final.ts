import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThirdLugarPage } from '../third-lugar/third-lugar';
import { DadosTabelaProvider } from '../../providers/dados-tabela/dados-tabela'

@IonicPage()
@Component({
  selector: 'page-semi-final',
  templateUrl: 'semi-final.html',
  providers: [DadosTabelaProvider]
})
export class SemiFinalPage {
  dado:any

  fieldsets: Array<{titulo: string, dia: string, data: string, local: string, hora: string, 
    time1: any, time2: any, resul1:any, resul2:any}>;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public DadosTabela: DadosTabelaProvider) {
    this.pegarDados()
    this.fieldsets = [
      {titulo: 'Semifinal 1', dia: 'Ter', data: '10/07/2018', local: 'São Petersburgo', hora: '15:00', 
      time1: '', time2: '',
      resul1: '', resul2:''},

      {titulo: 'Semifinal 2', dia: 'Qua', data: '11/07/2018', local: 'Olímpico Lujniki', hora: '15:00', 
      time1: '', time2: '',
      resul1: '', resul2:''}
    ]
  }

  proximaPagina(){
    this.navCtrl.push(ThirdLugarPage)
  }
  pegarDados(){
    this.DadosTabela.load().subscribe(data =>{
      this.dado = data["knockout"]
      this.fieldsets[0].time1 = this.dado.round_8.matches[0].winner
      this.fieldsets[0].time2 = this.dado.round_8.matches[1].winner
      this.fieldsets[1].time1 = this.dado.round_8.matches[2].winner
      this.fieldsets[1].time2 = this.dado.round_8.matches[3].winner

      this.fieldsets[0].resul1 = this.dado.round_4.matches[0].home_result
      this.fieldsets[0].resul2 = this.dado.round_4.matches[0].away_result
      this.fieldsets[1].resul1 = this.dado.round_4.matches[1].home_result
      this.fieldsets[1].resul2 = this.dado.round_4.matches[1].away_result
      console.log(this.fieldsets)
    })
  }


}