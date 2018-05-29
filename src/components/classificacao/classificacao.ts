import { Component } from '@angular/core';

/**
 * Generated class for the ClassificacaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'classificacao',
  templateUrl: 'classificacao.html'
})
export class ClassificacaoComponent {

  text: string;

  constructor() {
    console.log('Hello ClassificacaoComponent Component');
    this.text = 'Hello World';
  }

}
