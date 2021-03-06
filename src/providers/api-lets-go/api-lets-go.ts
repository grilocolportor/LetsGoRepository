

import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, } from '@angular/http';
import 'rxjs/add/operator/map';
import { LocalPersistenceProvider } from '../local-persistence/local-persistence';

/*
  Generated class for the ApiLetsGoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiLetsGoProvider {

   headers = new Headers();
  //  baseApiPath = "http://localhost:8080/LetsGo/rest/ws";
    baseApiPath = "http://192.168.10.103:8080/LetsGo/rest/ws";
  //baseApiPath = "http://192.168.42.214:8080/LetsGo/rest/ws";

  constructor(public http: Http, private localPersistence: LocalPersistenceProvider) {

    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');

  }

  postRequestGetAgenda(postParams){

    

    let options = new RequestOptions({ headers: this.headers });

    return this.http.post(this.baseApiPath + "/getagendaspormembro", postParams).map(res => res.json().agendas);

  }

  postRequestAddAgenda(postParams) {
   
    let options = new RequestOptions({ headers: this.headers });

    return this.http.post(this.baseApiPath + "/addagenda", postParams).map(res => res.json().agendas);

    /*return this.http.post(this.baseApiPath + "/getagendatodos", options,{
      responseType:"json"
    });*/

    // this.localPersistence.setLocalAgenda(this.http.post(this.baseApiPath + "/getagendatodos", options));

    // return 

  }

  postRequestNewAgenda(postParams){
    let options = new RequestOptions({ headers: this.headers });

    return this.http.post(this.baseApiPath + "/agendaPorMembros", postParams).map(res => res.json().agendas);
  }

  postRequestCrendencials(credentials) {
    
    let options = new RequestOptions({ headers: this.headers });

    return this.http.post(this.baseApiPath + "/addmembro", credentials).map(res => res.json().membros);

    /*return this.http.post(this.baseApiPath + "/getagendatodos", options,{
      responseType:"json"
    });*/

    // this.localPersistence.setLocalAgenda(this.http.post(this.baseApiPath + "/getagendatodos", options));

    // return 

  }

}
