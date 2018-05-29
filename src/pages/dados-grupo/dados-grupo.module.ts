import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DadosGrupoPage } from './dados-grupo';

@NgModule({
  declarations: [
    DadosGrupoPage,
  ],
  imports: [
    IonicPageModule.forChild(DadosGrupoPage),
  ],
  exports: [
    DadosGrupoPage
  ]
})
export class DadosGrupoPageModule {}
