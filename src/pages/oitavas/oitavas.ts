import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuartasPage } from '../quartas/quartas';
import { DadosTabelaProvider } from '../../providers/dados-tabela/dados-tabela'


@IonicPage()
@Component({
  selector: 'page-oitavas',
  templateUrl: 'oitavas.html',
  providers: [DadosTabelaProvider]
})
export class OitavasPage {
  dado:any

  fieldsets: Array<{titulo: string, dia: string, data: string, local: string, hora: string, 
    time1: any, time2: any, resul1:any, resul2:any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DadosTabela: DadosTabelaProvider) {

    this.pegarDados()

    this.fieldsets = [
      {titulo: 'Oitavas 1', dia: 'Sab', data: '30/06/2018', local: 'Olímpico de Sochi', hora: '15:00', 
      time1: '', time2: '', resul1: '', resul2:''},
      {titulo: 'Oitavas 2', dia: 'Sab', data: '30/06/2018', local: 'Arena Kazan', hora: '11:00', 
      time1: '', time2: '', resul1: '', resul2:''},
      {titulo: 'Oitavas 3', dia: 'Seg', data: '02/07/2018', local: 'Samarra', hora: '11:00', 
      time1: '', time2: '', resul1: '', resul2:''},
      {titulo: 'Oitavas 4', dia: 'Seg', data: '02/07/2018', local: 'Rostov', hora: '15:00', 
      time1: '', time2: '', resul1: '', resul2:''},
      {titulo: 'Oitavas 1', dia: 'Dom', data: '01/07/2018', local: 'Olímpico Lujniki', hora: '11:00', 
      time1: '', time2: '', resul1: '', resul2:''},
      {titulo: 'Oitavas 2', dia: 'Dom', data: '01/07/2018', local: 'Nizhny Novgorod', hora: '15:00', 
      time1: '', time2: '', resul1: '', resul2:''},
      {titulo: 'Oitavas 3', dia: 'Ter', data: '03/07/2018', local: 'São Petersburgo', hora: '11:00', 
      time1: '', time2: '', resul1: '', resul2:''},
      {titulo: 'Oitavas 4', dia: 'Ter', data: '03/07/2018', local: 'Spartak', hora: '15:00', 
      time1: '', time2: '', resul1: '', resul2:''}
    ]
  }

  proximaPagina(){
    this.navCtrl.push(QuartasPage)
  }
  pegarDados(){
    this.DadosTabela.load().subscribe(data =>{
      this.dado = data

      this.fieldsets[0].time1 = this.dado.groups.a.winner
      this.fieldsets[0].time2 = this.dado.groups.b.runnerup
      this.fieldsets[1].time1 = this.dado.groups.c.winner
      this.fieldsets[1].time2 = this.dado.groups.d.runnerup
      this.fieldsets[2].time1 = this.dado.groups.b.winner
      this.fieldsets[2].time2 = this.dado.groups.a.runnerup
      this.fieldsets[3].time1 = this.dado.groups.d.winner
      this.fieldsets[3].time2 = this.dado.groups.c.runnerup
      this.fieldsets[4].time1 = this.dado.groups.e.winner
      this.fieldsets[4].time2 = this.dado.groups.f.runnerup
      this.fieldsets[5].time1 = this.dado.groups.g.winner
      this.fieldsets[5].time2 = this.dado.groups.h.runnerup
      this.fieldsets[6].time1 = this.dado.groups.f.winner
      this.fieldsets[6].time2 = this.dado.groups.e.runnerup
      this.fieldsets[7].time1 = this.dado.groups.h.winner
      this.fieldsets[7].time2 = this.dado.groups.g.runnerup

      this.fieldsets[0].resul1 = this.dado.knockout.round_16.matches[0].home_result
      this.fieldsets[0].resul2 = this.dado.knockout.round_16.matches[0].away_result
      this.fieldsets[1].resul1 = this.dado.knockout.round_16.matches[1].home_result
      this.fieldsets[1].resul2 = this.dado.knockout.round_16.matches[1].away_result
      this.fieldsets[2].resul1 = this.dado.knockout.round_16.matches[2].home_result
      this.fieldsets[2].resul2 = this.dado.knockout.round_16.matches[2].away_result
      this.fieldsets[3].resul1 = this.dado.knockout.round_16.matches[3].home_result
      this.fieldsets[3].resul2 = this.dado.knockout.round_16.matches[3].away_result
      this.fieldsets[4].resul1 = this.dado.knockout.round_16.matches[4].home_result
      this.fieldsets[4].resul2 = this.dado.knockout.round_16.matches[4].away_result
      this.fieldsets[5].resul1 = this.dado.knockout.round_16.matches[5].home_result
      this.fieldsets[5].resul2 = this.dado.knockout.round_16.matches[5].away_result
      this.fieldsets[6].resul1 = this.dado.knockout.round_16.matches[6].home_result
      this.fieldsets[6].resul2 = this.dado.knockout.round_16.matches[6].away_result
      this.fieldsets[7].resul1 = this.dado.knockout.round_16.matches[7].home_result
      this.fieldsets[7].resul2 = this.dado.knockout.round_16.matches[7].away_result



      console.log(this.fieldsets)
    })
  }

}