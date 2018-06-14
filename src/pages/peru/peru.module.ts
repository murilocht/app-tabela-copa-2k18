import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeruPage } from './peru';

@NgModule({
  declarations: [
    PeruPage,
  ],
  imports: [
    IonicPageModule.forChild(PeruPage),
  ],
})
export class PeruPageModule {}
