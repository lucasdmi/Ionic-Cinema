import { Component } from '@angular/core';

import { FilmesPage } from '../filmes/filmes';

import { HomePage } from '../home/home';
import { CinemasPage } from '../cinemas/cinemas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FilmesPage;
  tab3Root = CinemasPage;
  constructor() {

  }
}
