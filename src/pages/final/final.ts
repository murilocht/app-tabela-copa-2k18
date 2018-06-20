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


  fieldsets: Array<{titulo: string, dia: string, data: string, local: string, hora: string, 
    time1: any, time2: any, resul1:any, resul2:any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DadosTabela: DadosTabelaProvider) {
    this.pegarDados()
    this.fieldsets = [
      {titulo: 'Final', dia: 'Dom', data: '15/07/2018', local: 'Olímpico Lujniki', hora: '12:00', 
      
      time1: '', time2: '', 
      resul1: '', resul2:''}
    ]
  }

  pegarDados(){
    this.DadosTabela.load().subscribe(data =>{
      this.dado = data["knockout"]
      
      this.fieldsets[0].time1 = this.dado.round_4.matches[0].winner
      this.fieldsets[0].time2 = this.dado.round_4.matches[1].winner

      this.fieldsets[0].resul1 = this.dado.round_2.matches[0].home_result
      this.fieldsets[0].resul2 = this.dado.round_2.matches[0].away_result
      console.log(this.fieldsets)
    })
  }

}
