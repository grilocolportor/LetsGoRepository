import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LocalPersistenceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalPersistenceProvider {

  userPostData = { "nome": "", "numeroCelular": "", "id":"", "email": "" };

  constructor(public http: HttpClient) {
    console.log('Hello LocalPersistenceProvider Provider');
  }

  setLocalAgenda(agendas){
    localStorage.setItem("agendas", agendas);
  }

  getLocalAgenda(){
    console.log(localStorage.getItem("agendas").toString);
    return localStorage.getItem("agendas");
  }

  getLocalMembro(){

    var membro: any  = JSON.parse(localStorage.getItem('membro'));
    membro.forEach(e => {
      this.userPostData.nome = e.nome,
      this.userPostData.numeroCelular = e.numeroCelular,
      this.userPostData.id = e.id,
      this.userPostData.email = e.email
    });
    return this.userPostData;
  }

}
