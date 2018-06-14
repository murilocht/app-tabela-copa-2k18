import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SuicaPage } from './suica';

@NgModule({
  declarations: [
    SuicaPage,
  ],
  imports: [
    IonicPageModule.forChild(SuicaPage),
  ],
})
export class SuicaPageModule {}
