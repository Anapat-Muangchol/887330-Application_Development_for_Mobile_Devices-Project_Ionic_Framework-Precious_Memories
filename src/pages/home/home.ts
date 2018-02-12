import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ThisDayPage } from '../this-day/this-day';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}


  ionViewDidLoad() {
    setTimeout(function(){ 
      this.navCtrl.push(ThisDayPage);
    }, 2000);
  }
}
