import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CinemasProvider } from '../../providers/cinemas/cinemas';
import { CinemasEditPage } from '../cinemas-edit/cinemas-edit';

@IonicPage()
@Component({
  selector: 'page-cinemas',
  templateUrl: 'cinemas.html',
})
export class CinemasPage {

  cinemas: any;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public cinemasProvider: CinemasProvider
    , private toast: ToastController) {
      this.getCinemas();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CinemasPage');
  }

  ionViewWillEnter() {
    this.getCinemas();
  }

  getCinemas() {
    this.cinemasProvider.findAll()
    .then(data => {
      this.cinemas = data;
      console.log(this.cinemas);
    });
  }
  removeCinema(id: number) {
    this.cinemasProvider.deleteById(id)
      .then( () => {
        this.getCinemas();
        this.toast.create({ message: 'Cinema removido.', duration: 3000, position: 'botton' }).present();
      }
      )
  }
  editCinema(id: number) {
    this.navCtrl.push(CinemasEditPage, {id: id});
  }

  addCinema() {
    this.navCtrl.push(CinemasEditPage);
  }


}