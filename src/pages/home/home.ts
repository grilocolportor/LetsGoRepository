import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LocalPersistenceProvider } from '../../providers/local-persistence/local-persistence';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  [x: string]: any;
  userDetails: any;
  responseData: any;

  lstMembro : Array<any>;

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider, localPersistence: LocalPersistenceProvider) {

    this.userDetails = localPersistence.getLocalMembro();

  }

  backToWelcome() {
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout() {
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }


}
