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

  fieldsets: Array<{titulo: string, dia: string, data: string, local: string, hora: string, time1: string, time2: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public DadosTabela: DadosTabelaProvider) {

    this.pegarDados()

    this.fieldsets = [
      {titulo: 'Oitavas 1', dia: 'Sab', data: '30/06/2018', local: 'Olímpico de Sochi', hora: '15:00', time1: '1º A', time2: '2º B'},
      {titulo: 'Oitavas 2', dia: 'Sab', data: '30/06/2018', local: 'Arena Kazan', hora: '11:00', time1: '1º C', time2: '2º D'},
      {titulo: 'Oitavas 3', dia: 'Seg', data: '02/07/2018', local: 'Samarra', hora: '11:00', time1: '1º E', time2: '2º F'},
      {titulo: 'Oitavas 4', dia: 'Seg', data: '02/07/2018', local: 'Rostov', hora: '15:00', time1: '1º G', time2: '2º H'},
      {titulo: 'Oitavas 1', dia: 'Dom', data: '01/07/2018', local: 'Olímpico Lujniki', hora: '11:00', time1: '1º B', time2: '2º A'},
      {titulo: 'Oitavas 2', dia: 'Dom', data: '01/07/2018', local: 'Nizhny Novgorod', hora: '15:00', time1: '1º D', time2: '2º C'},
      {titulo: 'Oitavas 3', dia: 'Ter', data: '03/07/2018', local: 'São Petersburgo', hora: '11:00', time1: '1º F', time2: '2º E'},
      {titulo: 'Oitavas 4', dia: 'Ter', data: '03/07/2018', local: 'Spartak', hora: '15:00', time1: '1º H', time2: '2º G'}
    ]
  }

  proximaPagina(){
    this.navCtrl.push(QuartasPage)
  }
  pegarDados(){
    this.DadosTabela.load().subscribe(data =>{
      this.dado = data["knockout"]
      console.log(this.dado["round_16"])
    })
  }

}