
import { Injectable } from '@angular/core';
import { RequestOptions, Http } from '@angular/http';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  baseApiPath = "http://192.168.42.78:8080/LetsGo/rest/ws";

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  

}
