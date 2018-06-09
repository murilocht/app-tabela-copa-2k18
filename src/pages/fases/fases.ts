import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, } from 'ionic-angular';
import { OitavasPage } from '../oitavas/oitavas';

@IonicPage()
@Component({
  selector: 'page-fases',
  templateUrl: 'fases.html',
})
export class FasesPage {
  @ViewChild('mySlider') slider: Slides;

  guia:string

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
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.guia = "1"
    this.slideGrupos = [
      //esse é o grupo A, essas são as seleções 
      { titulo: 'Grupo A', selecao1: 'ARA', selecao2: 'EGI', selecao3: 'RUS', selecao4: 'URU',

        //dados da 1ª rodada, incluindo dia, quem vs quem, hora e tal...
        dia1: 'Qui', data1:'14/06/2018', local1:'Olím. Lujniki', horas1:'12:00', time11:'RUS', time12:'ARA',
        dia12: 'Sex', data12:'15/06/2018', local12:'Ecaterimburgo', horas12:'09:00', time121:'EGI', time122:'URU',
        
        //dados da 2ª rodada
<<<<<<< HEAD
        dia2:  'Ter', data2: '19/06/2018', local2: 'S.Petersburgo', horas2: '15:00', time21: 'RUS', time22: 'EGI',
=======
        dia2:  'Ter', data2: '19/06/2018', local2: 'Petersburgo', horas2: '15:00', time21: 'RUS', time22: 'EGI',
>>>>>>> 7c72346da57c31ca0b562857a4e5d1219895031f
        dia22:  'Qua', data22: '20/06/2018', local22: 'Rostov', horas22: '12:00', time221: 'URU', time222: 'ARA',
        
        //dados da 3ª rodada
        dia3:  'Seg', data3: '25/06/2018', local3: 'Samarra', horas3: '11:00', time31: 'URU', time32: 'RUS',
        dia32:  'Seg', data32: '25/06/2018', local32: 'Volgogrado', horas32: '11:00', time321: 'ARA', time322: 'EGI'},
      
        //grupo B
      { titulo: 'Grupo B', selecao1: 'ESP', selecao2: 'IRA', selecao3: 'MAR', selecao4: 'POR',
<<<<<<< HEAD
        dia1: 'Sex', data1:'15/06/2018', local1:'S.Petersburgo', horas1:'12:00', time11:'MAR', time12:'IRA',
        dia12: 'Sex', data12:'15/06/2018', local12:'Olím.Sochi ', horas12:'15:00', time121:'POR', time122:'ESP',
=======
        dia1: 'Sex', data1:'', local1:'', horas1:'', time11:'', time12:'',
        dia12: '', data12:'', local12:'', horas12:'', time121:'', time122:'',
>>>>>>> 7c72346da57c31ca0b562857a4e5d1219895031f
        
        dia2:  'Qua', data2: '20/06/2018', local2: 'Olím.Lujniki', horas2: '09:00', time21: 'POR', time22: 'MAR',
        dia22:  'Qua', data22: '20/06/2018', local22: 'Ar.Kazan', horas22: '15:00', time221: 'IRA', time222: 'ESP',
        
        dia3:  'Seg', data3: '25/06/2018', local3: 'Saransk', horas3: '15:00', time31: 'IRA', time32: 'POR',
        dia32:  'Seg', data32: '25/06/2018', local32: 'Kaliningrado', horas32: '15:00', time321: 'ESP', time322: 'MAR'},
        
        //grupo C 
        { titulo: 'Grupo C', selecao1: 'AUS', selecao2: 'DIN', selecao3: 'FRA', selecao4: 'PER',
        dia1: 'Sab', data1:'16/06/2018', local1:'Ar.Kazan', horas1:'07:00', time11:'FRA', time12:'AUS',
        dia12: 'Sab', data12:'16/06/2018', local12:'Saransk', horas12:'13:00', time121:'PER', time122:'DIN',
        
        dia2:  'Qui', data2: '21/06/2018', local2: 'Samara', horas2: '09:00', time21: 'DIN', time22: 'AUS',
        dia22:  'Qui', data22: '21/06/2018', local22: 'Ecaterimburgo', horas22: '12:00', time221: 'FRA', time222: '',
        
        dia3:  'Ter', data3: '26/06/2018', local3: 'Olím.Lujniki', horas3: '11:00', time31: 'DIN', time32: 'FRA',
        dia32:  'Ter', data32: '26/06/2018', local32: 'Olím.Sochi', horas32: '11:00', time321: 'AUS', time322: 'PER'},
        //grupo D 
      { titulo: 'Grupo D', selecao1: 'ARG', selecao2: 'CRO', selecao3: 'ISL', selecao4: 'NIG',
        dia1: 'Sab', data1:'16/06/2018', local1:'Spartak', horas1:'10:00', time11:'ARG', time12:'ISL',
        dia12: 'Sab', data12:'16/06/2018', local12:'Kaliningrado', horas12:'16:00', time121:'CRO', time122:'NIG',
        
        dia2:  'Qui', data2: '21/06/2018', local2: 'N.Novgorod', horas2: '15:00', time21: 'ARG', time22: 'CRO',
        dia22:  'Qui', data22: '21/06/2018', local22: 'Volgogrado', horas22: '12:00', time221: 'NIG', time222: 'ISL',
        
        dia3:  'Ter', data3: '26/06/2018', local3: 'S.Petersburgo', horas3: '15:00', time31: 'NIG', time32: 'ARG',
        dia32:  'Ter', data32: '26/06/2018', local32: 'Rostov', horas32: '15:00', time321: 'ISL', time322: 'CRO'},

        //grupo E
      { titulo: 'Grupo E', selecao1: 'BRA', selecao2: 'COS', selecao3: 'SER', selecao4: 'SUI',
        dia1: 'Dom', data1:'17/06/2018', local1:'Samara', horas1:'09:00', time11:'COS', time12:'SER',
        dia12: 'Dom', data12:'17/06/2018', local12:'Rostov', horas12:'15:00', time121:'BRA', time122:'SUI',
        
        dia2:  'Sex', data2: '22/06/2018', local2: 'S.Petersburgo', horas2: '09:00', time21: 'BRA', time22: 'COS',
        dia22:  'Ser', data22: '22/06/2018', local22: 'Kaliningrado', horas22: '15:00', time221: 'SER', time222: 'SUI',
        
        dia3:  'Qua', data3: '27/06/2018', local3: 'Spartak', horas3: '15:00', time31: 'SER', time32: 'BRA',
        dia32:  'Qua', data32: '27/06/2018', local32: 'N.Novgorod', horas32: '15:00', time321: 'SUI', time322: 'COS'},

        //grupo F
      { titulo: 'Grupo F', selecao1: 'ALE', selecao2: 'COR', selecao3: 'MEX', selecao4: 'SUE',
        dia1: 'Dom', data1:'16/06/2018', local1:'Olím.Lujniki', horas1:'12:00', time11:'ALE', time12:'MEX',
        dia12: 'Seg', data12:'16/06/2018', local12:'N.Novgorod', horas12:'09:00', time121:'SUE', time122:'COR',
        
        dia2:  'Sab', data2: '23/06/2018', local2: 'Rostov', horas2: '12:00', time21: 'COR', time22: 'MEX',
        dia22:  'Sab', data22: '23/06/2018', local22: 'Olím.Sochi', horas22: '15:00', time221: 'ALE', time222: 'SUE',
        
        dia3:  'Qua', data3: '27/06/2018', local3: 'Ar.Kazan', horas3: '11:00', time31: 'COR', time32: 'ALE',
        dia32:  'Qua', data32: '27/06/2018', local32: 'Ecaterimburgo', horas32: '11:00', time321: 'MEX', time322: 'SUE'},
        
        //grupo G
      { titulo: 'Grupo G', selecao1: 'BEL', selecao2: 'ING', selecao3: 'PAN', selecao4: 'TUN',
        dia1: 'Seg', data1:'18/06/2018', local1:'Olím.Sochi', horas1:'12:00', time11:'BEL', time12:'PAN',
        dia12: 'Seg', data12:'18/06/2018', local12:'Volgograd', horas12:'15:00', time121:'TUN', time122:'ING',
        
        dia2:  'Sab', data2: '23/06/2018', local2: 'Spartak', horas2: '09:00', time21: 'BEL', time22: 'TUN',
        dia22:  'Dom', data22: '23/06/2018', local22: 'N.Novgorod', horas22: '09:00', time221: 'ING', time222: 'PAN',
        
        dia3:  'Qui', data3: '28/06/2018', local3: 'Kaliningrado', horas3: '15:00', time31: 'ING', time32: 'BEL',
        dia32:  'Qui', data32: '28/06/2018', local32: 'Saransk', horas32: '15:00', time321: 'PAN', time322: 'TUN'},
        
        //grupo H
      { titulo: 'Grupo H', selecao1: 'COL', selecao2: 'JAP', selecao3: 'POL', selecao4: 'SEN',
        dia1: 'Ter', data1:'19/06/2018', local1:'Saransk', horas1:'09:00', time11:'COL', time12:'JAP',
        dia12: 'Ter', data12:'19/06/2018', local12:'Spartak', horas12:'12:00', time121:'POL', time122:'SEN',
        
        dia2:  'Dom', data2: '24/06/2018', local2: 'Ecaterimburgo', horas2: '12:00', time21: 'JAP', time22: 'SEN',
        dia22:  'Dom', data22: '24/06/2018', local22: 'Ar.Kazan', horas22: '15:00', time221: 'POL', time222: 'COL',
        
        dia3:  'Qui', data3: '28/06/2018', local3: 'Volgogrado', horas3: '11:00', time31: 'JAP', time32: 'POL',
        dia32:  'Qui', data32: '28/06/2018', local32: 'Samara', horas32: '11:00', time321: 'SEN', time322: 'COL'},
    ];
  }

  proximaPagina(){
    this.navCtrl.push(OitavasPage)
  }
}