import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FilmesProvider } from '../../providers/filmes/filmes';
import { FilmesEditPage } from '../filmes-edit/filmes-edit';

@IonicPage()
@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
})
export class FilmesPage {

  filmes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public filmesProvider: FilmesProvider
    , private toast: ToastController) {
      this.getFilmes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmesPage');
  }

  ionViewWillEnter() {
    this.getFilmes();
  }

  getFilmes() {
    this.filmesProvider.findAll()
    .then(data => {
      this.filmes = data;
      console.log(this.filmes);
    });
  }
  removeFilme(id: number) {
    this.filmesProvider.deleteById(id)
      .then( () => {
        this.getFilmes();
        this.toast.create({ message: 'Filme removido.', duration: 3000, position: 'botton' }).present();
      }
      )
  }
  editFilme(id: number) {
    this.navCtrl.push(FilmesEditPage, {id: id});
  }

  addFilme() {
    this.navCtrl.push(FilmesEditPage);
  }


}