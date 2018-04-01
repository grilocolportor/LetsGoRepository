import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiLetsGoProvider } from '../../providers/api-lets-go/api-lets-go';

/**
 * Generated class for the AgendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agenda',
  templateUrl: 'agenda.html',
})
export class AgendaPage {

  listAgendas: any = [];

  user = JSON.parse(localStorage.getItem("membro"));

  agendaMembro = {
    membro: this.user.id,
    tipo: "ADMINISTRADOR"
  }

  agenda = {
    
    nome:"",
    sobre: "",
    imagePath: "",
    agendaMembro: [this.agendaMembro],
   
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,  private agendaProvider: ApiLetsGoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendaPage');
  }

  newAgenda(){
    let localData = this.agendaProvider.postRequestAddAgenda(this.agenda).subscribe(data=>{
      console.log(data);
      this.listAgendas = data;
    });
  }

}
