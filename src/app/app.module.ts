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
import { HistoriaPage } from '../pages/historia/historia';
import { DadosTabelaProvider } from '../providers/dados-tabela/dados-tabela' 
import { MenuSelecoesPage } from '../pages/menu-selecoes/menu-selecoes';
//3 - NÃO PRECISA ESPECIFICAR AKI, O IONIC FAZ AUTOMÁTICO
import { AlemanhaPage } from '../pages/alemanha/alemanha';
import { ArabiaSauditaPage } from '../pages/arabia-saudita/arabia-saudita';
import { ArgentinaPage } from '../pages/argentina/argentina';
import { AustraliaPage } from '../pages/australia/australia';
import { BelgicaPage } from '../pages/belgica/belgica';
import { BrasilPage } from '../pages/brasil/brasil';
import { ColombiaPage } from '../pages/colombia/colombia';
import { CoreiaPage } from '../pages/coreia/coreia';
import { CostaPage } from '../pages/costa/costa';
import { CroaciaPage } from '../pages/croacia/croacia';
import { DinamarcaPage } from '../pages/dinamarca/dinamarca';
import { EgitoPage } from '../pages/egito/egito';
import { EspanhaPage } from '../pages/espanha/espanha';
import { FrancaPage } from '../pages/franca/franca';
import { InglaterraPage } from '../pages/inglaterra/inglaterra';
import { IraPage } from '../pages/ira/ira';
import { IslandiaPage } from '../pages/islandia/islandia';
import { JapaoPage } from '../pages/japao/japao';
import { MarrocosPage } from '../pages/marrocos/marrocos';
import { MexicoPage } from '../pages/mexico/mexico';
import { NigeriaPage } from '../pages/nigeria/nigeria';
import { PanamaPage } from '../pages/panama/panama';
import { PeruPage } from '../pages/peru/peru';
import { PoloniaPage } from '../pages/polonia/polonia';
import { PortugalPage } from '../pages/portugal/portugal';
import { RussiaPage } from '../pages/russia/russia';
import { SenegalPage } from '../pages/senegal/senegal';
import { ServiaPage } from '../pages/servia/servia';

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
    SplashPage,
    HistoriaPage,
    MenuSelecoesPage,
    
    // 1 - DEPOIS Q TU GERAR A PAGE VC IRÁ IMPORTÁ AKI 
    AlemanhaPage,
    ArabiaSauditaPage,
    ArgentinaPage,
    AustraliaPage,
    BelgicaPage,
    BrasilPage,
    ColombiaPage,
    CoreiaPage,
    CostaPage,
    CroaciaPage,
    DinamarcaPage,
    EgitoPage,
    EspanhaPage,
    FrancaPage,
    InglaterraPage,
    IraPage,
    IslandiaPage,
    JapaoPage,
    MarrocosPage,
    MexicoPage,
    NigeriaPage,
    PanamaPage,
    PeruPage,
    PoloniaPage,
    PortugalPage,
    RussiaPage,
    SenegalPage,
    ServiaPage


          
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
    SplashPage,
    HistoriaPage,
    MenuSelecoesPage,
    //2 - E AKI
    AlemanhaPage,
    ArabiaSauditaPage,
    ArgentinaPage,
    AustraliaPage,
    BelgicaPage,
    BrasilPage,
    ColombiaPage,
    CoreiaPage,
    CostaPage,
    CroaciaPage,
    DinamarcaPage,
    EgitoPage,
    EspanhaPage,
    FrancaPage,
    InglaterraPage,
    IraPage,
    IslandiaPage,
    JapaoPage,
    MarrocosPage,
    MexicoPage,
    NigeriaPage,
    PanamaPage,
    PeruPage,
    PoloniaPage,
    PortugalPage,
    RussiaPage,
    SenegalPage,
    ServiaPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DadosTabelaProvider
  ]
})
export class AppModule {}
