import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, } from 'ionic-angular';
import { OitavasPage } from '../oitavas/oitavas';
import { DadosTabelaProvider } from '../../providers/dados-tabela/dados-tabela'

@IonicPage()
@Component({
  selector: 'page-fases',
  templateUrl: 'fases.html',
  providers: [DadosTabelaProvider]
})
export class FasesPage {
  @ViewChild('mySlider') slider: Slides;

  guia:string
  dado:any

  //esse são os dados de cada grupo, é um array beeem grande...
  slideGrupos: Array<{
    //as seleções
    titulo: string, selecao1: string, selecao2: string, selecao3: string, selecao4: string,

    //rodada 1
    dia1: string, data1:string, local1:string, horas1:string, time11:string, time12:string,
    dia12: string, data12:string, local12:string, horas12:string, time121:string, time122:string,
    //rodada 2
    dia2: string, data2:string, local2:string, horas2:string, time21:string, time22:string,
    dia22: string, data22:string, local22:string, horas22:string, time221:string, time222:string,
    //rodada 3
    dia3: string, data3:string, local3:string, horas3:string, time31:string, time32:string,
    dia32: string, data32:string, local32:string, horas32:string, time321:string, time322:String}>;
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public DadosTabela: DadosTabelaProvider) {
    this.guia = "1"
    this.pegarDados()
    this.slideGrupos = [
      //esse é o grupo A, essas são as seleções 
      { titulo: 'Grupo A', selecao1: 'ARA', selecao2: 'EGI', selecao3: 'RUS', selecao4: 'URU',

       //dados da 1ª rodada, incluindo dia, quem vs quem, hora e tal...
       dia1: 'Qui', data1:'14/06/2018', local1:'Olím. Lujniki', horas1:'12:00', time11:'RUS', time12:'ARA',
       dia12: 'Sex', data12:'15/06/2018', local12:'Ecaterimburgo', horas12:'09:00', time121:'EGI', time122:'URU',
       
       //dados da 2ª rodada

       dia2:  'Ter', data2: '19/06/2018', local2: 'S.Petersburgo', horas2: '15:00', time21: 'RUS', time222: 'ARA',
       dia22:  'Qua', data22: '20/06/2018', local22: 'Rostov', horas22: '12:00',time22: 'EGI' , time221: 'URU',
       
       //dados da 3ª rodada
       dia3:  'Seg', data3: '25/06/2018', local3: 'Samarra', horas3: '11:00', time31: 'URU', time32: 'RUS',
       dia32:  'Seg', data32: '25/06/2018', local32: 'Volgogrado', horas32: '11:00', time321: 'ARA', time322: 'EGI'},
        //grupo B
      { titulo: 'Grupo B', selecao1: 'IRA', selecao2: 'POR', selecao3: 'MAR', selecao4: 'ESP',

        dia1: 'Sex', data1:'15/06/2018', local1:'S.Petersburgo', horas1:'12:00', time11:'MAR', time12:'IRA',
        dia12: 'Sex', data12:'15/06/2018', local12:'Olím.Sochi ', horas12:'15:00', time121:'POR', time122:'ESP',

        dia2:  'Qua', data2: '20/06/2018', local2: 'Olím.Lujniki', horas2: '09:00', time22: 'POR', time21: 'MAR',
        dia22:  'Qua', data22: '20/06/2018', local22: 'Ar.Kazan', horas22: '15:00',time222: 'IRA' , time221: 'ESP',
        
        dia3:  'Seg', data3: '25/06/2018', local3: 'Saransk', horas3: '15:00', time31: 'ESP', time32: 'MAR',
        dia32:  'Seg', data32: '25/06/2018', local32: 'Kaliningrado', horas32: '15:00', time321: 'IRA', time322: 'POR'},
        
        //grupo C 
        { titulo: 'Grupo C', selecao1: 'AUS', selecao2: 'PER', selecao3: 'FRA', selecao4: 'DIN',
        dia1: 'Sab', data1:'16/06/2018', local1:'Ar.Kazan', horas1:'07:00', time11:'FRA', time12:'AUS',
        dia12: 'Sab', data12:'16/06/2018', local12:'Saransk', horas12:'13:00', time121:'PER', time122:'DIN',
        
        dia2:  'Qui', data2: '21/06/2018', local2: 'Samara', horas2: '09:00', time21: 'FRA', time22: 'PER',
        dia22:  'Qui', data22: '21/06/2018', local22: 'Ecaterimburgo', horas22: '12:00', time221: 'DIN', time222: 'AUS',
        
        dia3:  'Ter', data3: '26/06/2018', local3: 'Olím.Lujniki', horas3: '11:00', time31: 'DIN', time32: 'FRA',
        dia32:  'Ter', data32: '26/06/2018', local32: 'Olím.Sochi', horas32: '11:00', time321: 'AUS', time322: 'PER'},
        //grupo D 
      { titulo: 'Grupo D', selecao1: 'ISL', selecao2: 'CRO', selecao3: 'ARG', selecao4: 'NIG',
        dia1: 'Sab', data1:'16/06/2018', local1:'Spartak', horas1:'10:00', time11:'ARG', time12:'ISL',
        dia12: 'Sab', data12:'16/06/2018', local12:'Kaliningrado', horas12:'16:00', time121:'CRO', time122:'NIG',
        
        dia2:  'Qui', data2: '21/06/2018', local2: 'N.Novgorod', horas2: '15:00',time222: 'ISL', time22: 'CRO',
        dia22:  'Qui', data22: '21/06/2018', local22: 'Volgogrado', horas22: '12:00', time221: 'NIG', time21: 'ARG' ,
        
        dia3:  'Ter', data3: '26/06/2018', local3: 'S.Petersburgo', horas3: '15:00', time31: 'NIG',  time321: 'ISL',
        dia32:  'Ter', data32: '26/06/2018', local32: 'Rostov', horas32: '15:00',time32: 'ARG', time322: 'CRO'},

        //grupo E
      { titulo: 'Grupo E', selecao1: 'SER', selecao2: 'BRA', selecao3: 'COS', selecao4: 'SUI' ,
        dia1: 'Dom', data1:'17/06/2018', local1:'Samara', horas1:'9:00',time11:'COS' , time12:'SER',
        dia12: 'Dom', data12:'17/06/2018', local12:'Rostov',  horas12:'15:00', time121:'BRA' , time122:'SUI' ,
        
        dia2:  'Sex', data2: '22/06/2018', local2: 'S.Petersburgo', horas2: '09:00',time21: 'COS',time22:'BRA',
        dia22:  'Ser', data22: '22/06/2018', local22: 'Kaliningrado', horas22: '15:00',  time221: 'SUI' ,time222: 'SER',
        
        dia3:  'Qua', data3: '27/06/2018', local3: 'Spartak', horas3: '15:00', time31: 'SUI', time32: 'COS' ,
        dia32:  'Qua', data32: '27/06/2018', local32: 'N.Novgorod', horas32: '15:00', time321: 'SER',time322: 'BRA' },

        //grupo F
      { titulo: 'Grupo F', selecao1: 'MEX', selecao2: 'SUE', selecao3: 'ALE', selecao4: 'COR',
        dia1: 'Dom', data1:'17/06/2018', local1:'Olím.Lujniki', horas1:'12:00', time11:'ALE', time12:'MEX',
        dia12: 'Seg', data12:'18/06/2018', local12:'N.Novgorod', horas12:'09:00', time121:'SUE', time122:'COR',

        dia2:  'Sab', data2: '23/06/2018', local2: 'Olím.Sochi', horas2: '15:00',time21:'ALE', time22:'SUE',
        dia22:  'Sab', data22: '23/06/2018', local22: 'Rostov', horas22: '12:00',time221: 'COR' , time222: 'MEX',

        dia3:  'Qua', data3: '27/06/2018', local3: 'Rostov', horas3: '11:00', time31: 'COR', time32: 'ALE',
        dia32:  'Qua', data32: '27/06/2018', local32: 'Ecaterimburgo', horas32: '11:00', time321: 'MEX', time322: 'SUI'},
        
        //grupo G
      { titulo: 'Grupo G', selecao1: 'PAN', selecao2: 'TUN', selecao3: 'BEL', selecao4: 'ING',
        dia1: 'Seg', data1:'18/06/2018', local1:'Olím.Sochi', horas1:'12:00', time11:'BEL', time12:'PAN',
        dia12: 'Seg', data12:'18/06/2018', local12:'Volgograd', horas12:'15:00', time121:'TUN', time122:'ING',
        
        dia2:  'Sab', data2: '23/06/2018', local2: 'Spartak', horas2: '09:00', time21: 'BEL', time22: 'TUN',
        dia22:  'Dom', data22: '23/06/2018', local22: 'N.Novgorod', horas22: '09:00', time221: 'ING', time222: 'PAN',
        
        dia3:  'Qui', data3: '28/06/2018', local3: 'Kaliningrado', horas3: '15:00', time31: 'ING', time32: 'BEL',
        dia32:  'Qui', data32: '28/06/2018', local32: 'Saransk', horas32: '15:00', time321: 'PAN', time322: 'TUN'},
        
      ///oia a poi

        //grupo H
      { titulo: 'Grupo H', selecao1: 'JAP', selecao2: 'POL', selecao3: 'COL', selecao4: 'SEN',
        dia1: 'Ter', data1:'19/06/2018', local1:'Saransk', horas1:'09:00', time11:'COL', time12:'JAP',
        dia12: 'Ter', data12:'19/06/2018', local12:'Spartak', horas12:'12:00', time121:'POL', time122:'SEN',
        
        dia2:  'Dom', data2: '24/06/2018', local2: 'Ecaterimburgo', horas2: '12:00', time21: 'COL', time22: 'POL',
        dia22:  'Dom', data22: '24/06/2018', local22: 'Ar.Kazan', horas22: '15:00', time221: 'SEN', time222: 'JAP',
        
        dia3:  'Qui', data3: '28/06/2018', local3: 'Volgogrado', horas3: '11:00', time31: 'SEN', time32: 'COL',
        dia32:  'Qui', data32: '28/06/2018', local32: 'Samara', horas32: '11:00', time321: 'JAP', time322: 'POL'},
    ];
  }

  proximaPagina(){
    this.navCtrl.push(OitavasPage)
  }

  pegarDados(){
    this.DadosTabela.load()
    .then(data => {
      this.dado = data;
      console.log("Ok")
    })
  }
}