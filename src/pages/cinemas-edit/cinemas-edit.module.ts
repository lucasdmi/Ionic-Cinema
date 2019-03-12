import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CinemasEditPage } from './cinemas-edit';

@NgModule({
  declarations: [
    CinemasEditPage,
  ],
  imports: [
    IonicPageModule.forChild(CinemasEditPage),
  ],
})
export class CinemaEditPageModule {}
