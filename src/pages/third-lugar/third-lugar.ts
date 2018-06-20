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
  
  fieldsets: Array<{titulo: string, dia: string, data: string, local: string, hora: string, 
    time1: any, time2: any, resul1:any, resul2:any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DadosTabela: DadosTabelaProvider) {
    this.pegarDados()
    this.fieldsets = [
      {titulo: 'Disputa do 3º Lugar', dia: 'Sab', data: '14/07/2018', local: 'São Petersburgo', hora: '11:00', 
      time1: '', time2: '', 
      resul1: '', resul2:''}
    ]
  }

  proximaPagina(){
    this.navCtrl.push(FinalPage)
  }
  pegarDados(){
    this.DadosTabela.load().subscribe(data =>{
      this.dado = data["knockout"]
      if(this.dado.round_4.matches[0].home_result > this.dado.round_4.matches[0].away_result){
        this.fieldsets[0].time1 = this.dado.round_4.matches[0].away_result

      }else if(this.dado.round_4.matches[0].home_result < this.dado.round_4.matches[0].away_result){
        this.fieldsets[0].time1 = this.dado.round_4.matches[0].home_result
      }

      if(this.dado.round_4.matches[1].home_result > this.dado.round_4.matches[1].away_result){
        this.fieldsets[0].time2 = this.dado.round_4.matches[1].away_result

      }else if(this.dado.round_4.matches[0].home_result < this.dado.round_4.matches[0].away_result){
        this.fieldsets[0].time2 = this.dado.round_4.matches[1].home_result
      }

      this.fieldsets[0].resul1 = this.dado.round_2_loser.matches[0].home_result
      this.fieldsets[0].resul2 = this.dado.round_2_loser.matches[0].away_result
      console.log(this.fieldsets)
    })
  }

}
