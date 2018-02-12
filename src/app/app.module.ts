import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ThisDayPage } from '../pages/this-day/this-day';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ThisDayPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ThisDayPage
  ],
  providers: []
})
export class AppModule {}
