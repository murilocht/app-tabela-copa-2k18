import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosTabelaProvider } from '../../providers/dados-tabela/dados-tabela'

@IonicPage()
@Component({
  selector: 'page-final',
  templateUrl: 'final.html',
  providers: [DadosTabelaProvider]
})
export class FinalPage {
  dado:any = []

  winner1:any
  winner2:any

  ponto1:any
  ponto2:any

  fieldsets: Array<{titulo: string, dia: string, data: string, local: string, hora: string, 
    time1: string, time2: string, resul1:string, resul2:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DadosTabela: DadosTabelaProvider) {
    this.pegarDados()
    this.fieldsets = [
      {titulo: 'Final', dia: 'Dom', data: '15/07/2018', local: 'Olímpico Lujniki', hora: '12:00', 
      
      time1: this.winner1, time2: this.winner2, 
      resul1: this.ponto1, resul2:this.ponto2}
    ]
  }

  
  pegarDados(){
    this.DadosTabela.load().subscribe(data =>{
      this.dado = data["knockout"]
      this.winner1 = this.dado.round_4.matches[0].winner
      this.winner2 = this.dado.round_4.matches[1].winner

      this.ponto1 = this.dado.round_2.matches[0].home_result
      this.ponto2 = this.dado.round_2.matches[0].away_result
      console.log(this.dado)
    })
  }

}
