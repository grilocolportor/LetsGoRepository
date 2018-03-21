import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  [x: string]: any;
  userDetails: any;
  responseData: any;

  userPostData = { "nome": "", "numeroCelular": "" };


  constructor(public navCtrl: NavController, public authService: AuthServiceProvider) {

    const data = JSON.parse(localStorage.getItem('membro'));

    console.log(data);
   this.userDetails = data;

    this.userPostData.nome = this.userDetails.nome;
    this.userPostData.numeroCelular = this.userDetails.numeroCelular;

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
