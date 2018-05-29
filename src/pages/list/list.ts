import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosGrupoPage } from '../dados-grupo/dados-grupo';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  grupos: Array<{titulo: string}>;

  constructor(public navCtrl: NavController) {
    this.grupos = [
      { titulo: 'Grupo A' },
      { titulo: 'Grupo B' },
      { titulo: 'Grupo C' },
      { titulo: 'Grupo D' },
      { titulo: 'Grupo E' },
      { titulo: 'Grupo F' },
      { titulo: 'Grupo G' },
      { titulo: 'Grupo H' }
    ];
  }

  abrePagina(){
    this.navCtrl.push(DadosGrupoPage)
  }

}