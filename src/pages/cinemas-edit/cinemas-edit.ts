import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Cinema, CinemasProvider } from '../../providers/cinemas/cinemas';


@IonicPage()
@Component({
  selector: 'page-cinemas-edit',
  templateUrl: 'cinemas-edit.html',
})
export class CinemasEditPage {
  cinema: Cinema;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastController, 
     private cinemasProvider: CinemasProvider) {
      this.cinema = new Cinema();

      if (this.navParams.data.id) {
        this.cinemasProvider.findById(this.navParams.data.id)
          .then((result: any) => {
            this.cinema = result;
          })
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CinemasEditPage');
  }

  save() {
    this.cinemasProvider.save(this.cinema)
      .then(() => {
        this.toast.create({ message: 'Cinema salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar a cinema.', duration: 3000, position: 'botton' }).present();
      });
  }


}
