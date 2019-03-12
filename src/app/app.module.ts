import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FilmesPage } from '../pages/filmes/filmes';

import { HomePage } from '../pages/home/home';
import { CinemasPage } from '../pages/cinemas/cinemas';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FilmesProvider } from '../providers/filmes/filmes';
import { FilmesEditPage } from '../pages/filmes-edit/filmes-edit';
import { CinemasProvider } from '../providers/cinemas/cinemas';
import { CinemasEditPage } from '../pages/cinemas-edit/cinemas-edit';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    CinemasPage,
    HomePage,
    FilmesPage  ,
    
    FilmesEditPage,
    
    CinemasEditPage,
  
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilmesPage,
    CinemasPage,
    HomePage,  
    FilmesEditPage,
    CinemasEditPage,  
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FilmesProvider,
    CinemasProvider
  ]
})
export class AppModule {}
