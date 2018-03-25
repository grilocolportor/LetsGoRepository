import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiLetsGoProvider } from '../../providers/api-lets-go/api-lets-go';
import { LocalPersistenceProvider } from '../../providers/local-persistence/local-persistence';

import { HttpModule } from '@angular/http';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  listAgendas : any[];

   agendaMembro = {
    membro: "",
    agenda: "",
    userId: ""
  }

  constructor(public navCtrl: NavController,
              private agendaProvider: ApiLetsGoProvider,
              private localPersistence: LocalPersistenceProvider, 
              private http: HttpModule) {

               
                this.agendaMembro = JSON.parse(localStorage.getItem("membro"));
      
    let localData = this.agendaProvider.postRequest(this.agendaMembro).subscribe(data=>{
      console.log(data);
      this.listAgendas = data;
    });
    /* this.agendaProvider.postRequest().subscribe(data =>{
       console.log(data);
      this.listAgendas = data;  
     });*/
      
     //console.log(this.listAgendas);
     // this.listAgendas =  this.localPersistence.getLocalAgenda();
     // console.log(localStorage.getItem("agendas").toString());     

      // this.http.get(localPersistence.getLocalAgenda()).map(agendas => agendas);
    //  this.listAgendas = this.http.get(this.agendaProvider.postRequest()).;
     
     
     // this.listAgendas = this.persistence.getLocalAgenda();
  }

  toggleSection(i){
    this.listAgendas[i].open = !this.listAgendas[i].open;
  }

  toogleItem(i, j){
    this.listAgendas[i].agendaMembro[j].open = !this.listAgendas[i].agendaMembro[j].open
  }

 // ionViewDidLoad() {
   // this.agendaProvider.postRequest();
   /* this.agendaProvider.postRequest().subscribe(data => 
    {

      console.log(data);
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      this.lista_agenda = objeto_retorno;
      
       //const  response = (data as any);
     //  console.log(data);
     // const objeto_retorno = JSON.parse(response._body);
     // this.lista_agenda = objeto_retorno.results;
     // console.log(objeto_retorno);
     }, error => {
      console.log(error);// Error getting the data
    });
    //console.log('ionViewDidLoad FeedPage');
    // this.somaDoisNumeros(10, 99);
   /* this.agendaProvider.getAgendasFull().subscribe(
      data => {
      const  response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      this.lista_agenda = objeto_retorno.results;
      console.log(objeto_retorno);
    }, error => {
      console.log(error);
    })*/
  //}

}
