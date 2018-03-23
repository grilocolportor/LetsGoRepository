import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { ApiLetsGoProvider } from '../../providers/api-lets-go/api-lets-go';
import { HomePage } from '../home/home';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  responseData: any;
  membro = { "nome": "", "numeroCelular": "", "email": "", "ativo": "true" };

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: ApiLetsGoProvider) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SignupPage');
  }

  signup() {
  
    let localData = this.authService.postRequestCrendencials(this.membro, 'signup').subscribe((result) => {
      console.log(result);
      this.responseData = result;
      localStorage.setItem('membro', JSON.stringify(this.responseData));
      this.navCtrl.push(TabsPage);
    })
  }

  //volta para a pagina home
  goToOtherPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(WelcomePage);
  }

}
