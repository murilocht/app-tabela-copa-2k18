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

  slideGrupos: Array<{titulo: string}>;
  slideRodadas: Array<{id:string, titulo: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedSegment = "1";
    this.slideGrupos = [
      { titulo: 'Grupo A' },
      { titulo: 'Grupo B' },
      { titulo: 'Grupo C' },
      { titulo: 'Grupo D' },
      { titulo: 'Grupo E' },
      { titulo: 'Grupo F' },
      { titulo: 'Grupo G' },
      { titulo: 'Grupo H' }
    ];
    this.slideRodadas = [
      { id: "1", titulo: 'dado1' },
      { id: "2", titulo: 'dado2' },
      { id: "3", titulo: 'dado3' }
    ];
  }

  proximaPagina(){
    this.navCtrl.push(OitavasPage)
  }
}