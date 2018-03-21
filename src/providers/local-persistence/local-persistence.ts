import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LocalPersistenceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalPersistenceProvider {

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

}
