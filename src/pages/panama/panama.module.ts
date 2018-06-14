import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PanamaPage } from './panama';

@NgModule({
  declarations: [
    PanamaPage,
  ],
  imports: [
    IonicPageModule.forChild(PanamaPage),
  ],
})
export class PanamaPageModule {}
