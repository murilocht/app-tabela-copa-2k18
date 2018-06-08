import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FasesPage } from '../pages/fases/fases';
import { OitavasPage } from '../pages/oitavas/oitavas';
import { QuartasPage } from '../pages/quartas/quartas';
import { SemiFinalPage } from '../pages/semi-final/semi-final';
import { ThirdLugarPage } from '../pages/third-lugar/third-lugar';
import { FinalPage } from '../pages/final/final';
import { SplashPage } from '../pages/splash/splash';
import { DadosTabelaProvider } from '../providers/dados-tabela/dados-tabela';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FasesPage,
    OitavasPage,
    QuartasPage,
    SemiFinalPage,
    ThirdLugarPage,
    FinalPage,
    SplashPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FasesPage,
    OitavasPage,
    QuartasPage,
    SemiFinalPage,
    ThirdLugarPage,
    FinalPage,
    SplashPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DadosTabelaProvider
  ]
})
export class AppModule {}
