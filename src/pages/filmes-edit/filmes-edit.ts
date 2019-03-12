import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Filme, FilmesProvider } from '../../providers/filmes/filmes';


@IonicPage()
@Component({
  selector: 'page-filmes-edit',
  templateUrl: 'filmes-edit.html',
})
export class FilmesEditPage {
  filme: Filme;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, 
     private filmesProvider: FilmesProvider) {
      this.filme = new Filme();

      if (this.navParams.data.id) {
        this.filmesProvider.findById(this.navParams.data.id)
          .then((result: any) => {
            this.filme = result;
          })
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmesEditPage');
  }

  save() {
    this.filmesProvider.save(this.filme)
      .then(() => {
        this.toast.create({ message: 'Filme salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar a filme.', duration: 3000, position: 'botton' }).present();
      });
  }


}
