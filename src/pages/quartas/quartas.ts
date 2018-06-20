import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SemiFinalPage } from '../semi-final/semi-final';
import { DadosTabelaProvider } from '../../providers/dados-tabela/dados-tabela'

@IonicPage()
@Component({
  selector: 'page-quartas',
  templateUrl: 'quartas.html',
  providers: [DadosTabelaProvider]
})
export class QuartasPage {
  dado:any
  
  fieldsets: Array<{titulo: string, dia: string, data: string, local: string, hora: string, 
    time1: any, time2: any, resul1:any, resul2:any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DadosTabela: DadosTabelaProvider) {
    this.pegarDados()
    this.fieldsets = [
      {titulo: 'Quartas 1', dia: 'Sex', data: '06/07/2018', local: 'Nizhny Novgorod', hora: '11:00', 
      time1: '', time2: '', resul1: '', resul2:''},
      {titulo: 'Quartas 2', dia: 'Sex', data: '06/07/2018', local: 'Arena Kazan', hora: '15:00', 
      time1: '', time2: '', resul1: '', resul2:''},
      {titulo: 'Quartas 3', dia: 'Sab', data: '07/07/2018', local: 'Olímpico de Sochi', hora: '15:00', 
      time1: '', time2: '', resul1: '', resul2:''},
      {titulo: 'Quartas 4', dia: 'Sab', data: '07/07/2018', local: 'Samarra', hora: '11:00', 
      time1: '', time2: '', resul1: '', resul2:''}
    ]
  }
 proximaPagina() {
    this.navCtrl.push(SemiFinalPage)
  }
  pegarDados(){
    this.DadosTabela.load().subscribe(data =>{
      this.dado = data["knockout"]

      this.fieldsets[0].time1 = this.dado.round_16.matches[0].winner
      this.fieldsets[0].time2 = this.dado.round_16.matches[1].winner
      this.fieldsets[1].time1 = this.dado.round_16.matches[2].winner
      this.fieldsets[1].time2 = this.dado.round_16.matches[3].winner
      this.fieldsets[2].time1 = this.dado.round_16.matches[4].winner
      this.fieldsets[2].time2 = this.dado.round_16.matches[5].winner
      this.fieldsets[3].time1 = this.dado.round_16.matches[6].winner
      this.fieldsets[3].time2 = this.dado.round_16.matches[7].winner

      this.fieldsets[0].resul1 = this.dado.round_8.matches[0].home_result
      this.fieldsets[0].resul2 = this.dado.round_8.matches[0].away_result
      this.fieldsets[1].resul1 = this.dado.round_8.matches[1].home_result
      this.fieldsets[1].resul2 = this.dado.round_8.matches[1].away_result
      this.fieldsets[2].resul1 = this.dado.round_8.matches[2].home_result
      this.fieldsets[2].resul2 = this.dado.round_8.matches[2].away_result
      this.fieldsets[3].resul1 = this.dado.round_8.matches[3].home_result
      this.fieldsets[3].resul2 = this.dado.round_8.matches[3].away_result

      console.log(this.fieldsets)
    })
  }

}
