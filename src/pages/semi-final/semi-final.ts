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

  winner1:any
  winner2:any
  winner3:any
  winner4:any

  ponto1:any
  ponto2:any
  ponto3:any
  ponto4:any

  fieldsets: Array<{titulo: string, dia: string, data: string, local: string, hora: string, 
    time1: string, time2: string, resul1:string, resul2:string}>;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public DadosTabela: DadosTabelaProvider) {
    this.pegarDados()
    this.fieldsets = [
      {titulo: 'Semifinal 1', dia: 'Ter', data: '10/07/2018', local: 'São Petersburgo', hora: '15:00', 
      time1: this.winner1, time2: this.winner2,
      resul1: this.ponto1, resul2:this.ponto2},

      {titulo: 'Semifinal 2', dia: 'Qua', data: '11/07/2018', local: 'Olímpico Lujniki', hora: '15:00', 
      time1: this.winner3, time2: this.winner4,
      resul1: this.ponto3, resul2:this.ponto4}
    ]
  }

  proximaPagina(){
    this.navCtrl.push(ThirdLugarPage)
  }
  pegarDados(){
    this.DadosTabela.load().subscribe(data =>{
      this.dado = data["knockout"]
      this.winner1 = this.dado.round_8.matches[0].winner
      this.winner2 = this.dado.round_8.matches[1].winner
      this.winner3 = this.dado.round_8.matches[2].winner
      this.winner4 = this.dado.round_8.matches[3].winner

      this.ponto1 = this.dado.round_4.matches[0].home_result
      this.ponto2 = this.dado.round_4.matches[0].away_result
      this.ponto3 = this.dado.round_4.matches[1].home_result
      this.ponto4 = this.dado.round_4.matches[1].away_result
      console.log(this.dado["round_4"])
    })
  }


}