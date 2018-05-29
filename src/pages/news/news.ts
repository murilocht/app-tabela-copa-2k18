import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  noticias: Array<{titulo: string}>;

  constructor(public navCtrl: NavController) {

    this.noticias = [
      { titulo: 'Notícia 1' },
      { titulo: 'Notícia 2' },
      { titulo: 'Notícia n' }
    ];
  }
}