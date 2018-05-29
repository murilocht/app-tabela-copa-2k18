import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewsPage } from '../pages/news/news';
import { ScoresPage } from '../pages/scores/scores'
import { ClassificacaoPage } from '../pages/classificacao/classificacao';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SuperTabsModule } from 'ionic2-super-tabs';
import { DadosGrupoPage } from '../pages/dados-grupo/dados-grupo';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewsPage,
    ScoresPage,
    ClassificacaoPage,
    DadosGrupoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewsPage,
    ScoresPage,
    ClassificacaoPage,
    DadosGrupoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
