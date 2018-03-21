

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
  //  baseApiPath = "http://192.168.10.106:8080/LetsGo/rest/ws";
  baseApiPath = "http://192.168.42.214:8080/LetsGo/rest/ws";

  constructor(public http: Http, private localPersistence: LocalPersistenceProvider) {

    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');

  }

  postRequest() {
   
    let options = new RequestOptions({ headers: this.headers });

    let postParams = {
      title: 'foo',
      body: 'bar',
      userId: 1
    }

    return this.http.post(this.baseApiPath + "/getagendatodos", postParams).map(res => res.json().agendas);

    /*return this.http.post(this.baseApiPath + "/getagendatodos", options,{
      responseType:"json"
    });*/

    // this.localPersistence.setLocalAgenda(this.http.post(this.baseApiPath + "/getagendatodos", options));

    // return 

  }

  postRequestCrendencials(credentials, type) {
    
    let options = new RequestOptions({ headers: this.headers });

    return this.http.post(this.baseApiPath + "/start", credentials).map(res => res.json().membro);

    /*return this.http.post(this.baseApiPath + "/getagendatodos", options,{
      responseType:"json"
    });*/

    // this.localPersistence.setLocalAgenda(this.http.post(this.baseApiPath + "/getagendatodos", options));

    // return 

  }

}
