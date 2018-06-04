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

  selectedSegment: string;

  slideGrupos: Array<{titulo: string, selecao1: string, selecao2: string, selecao3: string, selecao4: string,

    dia1: string, data1:string, local1:string, horas1:string, time11:string, time12:string,
    dia12: string, data12:string, local12:string, horas12:string, time121:string, time122:string,
    
    dia2: string, data2:string, local2:string, horas2:string, time21:string, time22:string,
    dia22: string, data22:string, local22:string, horas22:string, time221:string, time222:string,
    
    dia3: string, data3:string, local3:string, horas3:string, time31:string, time32:string,
    dia32: string, data32:string, local32:string, horas32:string, time321:string, time322:String}>;
  //slideRodadas: Array<{id:string, titulo: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedSegment = "1";
    this.slideGrupos = [
      { titulo: 'Grupo A', selecao1: 'ARA', selecao2: 'EGI', selecao3: 'RUS', selecao4: 'URU',
        dia1: 'Qui', data1:'14/06/2018', local1:'Olímpico Lujniki', horas1:'12:00', time11:'RUS', time12:'ARA',
        dia12: 'Sex', data12:'15/06/2018', local12:'Ecaterimburgo', horas12:'09:00', time121:'EGI', time122:'URU',
        
        dia2:  'Ter', data2: '19/06/2018', local2: 'São Petersburgo', horas2: '15:00', time21: 'RUS', time22: 'EGI',
        dia22:  'Qua', data22: '20/06/2018', local22: 'Rostov', horas22: '12:00', time221: 'URU', time222: 'ARA',
        
        dia3:  'Seg', data3: '25/06/2018', local3: 'Samarra', horas3: '11:00', time31: 'URU', time32: 'RUS',
        dia32:  'Seg', data32: '25/06/2018', local32: 'Volgogrado', horas32: '11:00', time321: 'ARA', time322: 'EGI'},
      
      { titulo: 'Grupo B', selecao1: 'ESP', selecao2: 'IRA', selecao3: 'MAR', selecao4: 'POR',
        dia1: '', data1:'', local1:'', horas1:'', time11:'', time12:'',
        dia12: '', data12:'', local12:'', horas12:'', time121:'', time122:'',
        
        dia2:  '', data2: '', local2: '', horas2: '', time21: '', time22: '',
        dia22:  '', data22: '', local22: '', horas22: '', time221: '', time222: '',
        
        dia3:  '', data3: '', local3: '', horas3: '', time31: '', time32: '',
        dia32:  '', data32: '', local32: '', horas32: '', time321: '', time322: ''},

      { titulo: 'Grupo C', selecao1: 'AUS', selecao2: 'DIN', selecao3: 'FRA', selecao4: 'PER',
        dia1: '', data1:'', local1:'', horas1:'', time11:'', time12:'',
        dia12: '', data12:'', local12:'', horas12:'', time121:'', time122:'',
        
        dia2:  '', data2: '', local2: '', horas2: '', time21: '', time22: '',
        dia22:  '', data22: '', local22: '', horas22: '', time221: '', time222: '',
        
        dia3:  '', data3: '', local3: '', horas3: '', time31: '', time32: '',
        dia32:  '', data32: '', local32: '', horas32: '', time321: '', time322: ''},

      { titulo: 'Grupo D', selecao1: 'ARG', selecao2: 'CRO', selecao3: 'ISL', selecao4: 'NIG',
        dia1: '', data1:'', local1:'', horas1:'', time11:'', time12:'',
        dia12: '', data12:'', local12:'', horas12:'', time121:'', time122:'',
        
        dia2:  '', data2: '', local2: '', horas2: '', time21: '', time22: '',
        dia22:  '', data22: '', local22: '', horas22: '', time221: '', time222: '',
        
        dia3:  '', data3: '', local3: '', horas3: '', time31: '', time32: '',
        dia32:  '', data32: '', local32: '', horas32: '', time321: '', time322: ''},

      { titulo: 'Grupo E', selecao1: 'BRA', selecao2: 'COS', selecao3: 'SER', selecao4: 'SUI',
      dia1: '', data1:'', local1:'', horas1:'', time11:'', time12:'',
        dia12: '', data12:'', local12:'', horas12:'', time121:'', time122:'',
        
        dia2:  '', data2: '', local2: '', horas2: '', time21: '', time22: '',
        dia22:  '', data22: '', local22: '', horas22: '', time221: '', time222: '',
        
        dia3:  '', data3: '', local3: '', horas3: '', time31: '', time32: '',
        dia32:  '', data32: '', local32: '', horas32: '', time321: '', time322: ''},

      { titulo: 'Grupo F', selecao1: 'ALE', selecao2: 'COR', selecao3: 'MEX', selecao4: 'SUE',
      dia1: '', data1:'', local1:'', horas1:'', time11:'', time12:'',
        dia12: '', data12:'', local12:'', horas12:'', time121:'', time122:'',
        
        dia2:  '', data2: '', local2: '', horas2: '', time21: '', time22: '',
        dia22:  '', data22: '', local22: '', horas22: '', time221: '', time222: '',
        
        dia3:  '', data3: '', local3: '', horas3: '', time31: '', time32: '',
        dia32:  '', data32: '', local32: '', horas32: '', time321: '', time322: ''},

      { titulo: 'Grupo G', selecao1: 'BEL', selecao2: 'ING', selecao3: 'PAN', selecao4: 'TUN',
      dia1: '', data1:'', local1:'', horas1:'', time11:'', time12:'',
        dia12: '', data12:'', local12:'', horas12:'', time121:'', time122:'',
        
        dia2:  '', data2: '', local2: '', horas2: '', time21: '', time22: '',
        dia22:  '', data22: '', local22: '', horas22: '', time221: '', time222: '',
        
        dia3:  '', data3: '', local3: '', horas3: '', time31: '', time32: '',
        dia32:  '', data32: '', local32: '', horas32: '', time321: '', time322: ''},

      { titulo: 'Grupo H', selecao1: 'COL', selecao2: 'JAP', selecao3: 'POL', selecao4: 'SEN',
        dia1: '', data1:'', local1:'', horas1:'', time11:'', time12:'',
        dia12: '', data12:'', local12:'', horas12:'', time121:'', time122:'',
        
        dia2:  '', data2: '', local2: '', horas2: '', time21: '', time22: '',
        dia22:  '', data22: '', local22: '', horas22: '', time221: '', time222: '',
        
        dia3:  '', data3: '', local3: '', horas3: '', time31: '', time32: '',
        dia32:  '', data32: '', local32: '', horas32: '', time321: '', time322: ''},
    ];
  }

  proximaPagina(){
    this.navCtrl.push(OitavasPage)
  }
}