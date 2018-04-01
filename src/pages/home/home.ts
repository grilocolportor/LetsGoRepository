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

  lstMembro : Array<any>;

  userPostData = { "nome": "", "numeroCelular": "" };


  constructor(public navCtrl: NavController, public authService: AuthServiceProvider) {

    this.lstMembro = JSON.parse(localStorage.getItem('membro'));

   console.log( this.lstMembro);
   this.lstMembro.forEach(m=>{
    this.userDetails = m;
    this.userPostData.nome = m.nome;
    this.userPostData.numeroCelular = m.numeroCelular;
   });

    

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
