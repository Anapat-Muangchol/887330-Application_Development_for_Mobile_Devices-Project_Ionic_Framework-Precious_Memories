import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ThisDay page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-this-day',
  templateUrl: 'this-day.html'
})
export class ThisDayPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ThisDayPage Page');
  }

}
