import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { getToken } from '@angular/router/src/utils/preactivation';
require('nativescript-localstorage');

@Injectable()
export class BaseService {
    //TODO: Cambiar por URL real.
  protected serverUrl = "http://localhost/pronosticon/public/api/";  
  
  constructor(protected http: HttpClient) { 
  }

  protected createRequestHeader() {
    // set headers here e.g.
    let headers = new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer " + this.getToken()
     });

    return headers;
    }


    private getToken() {
        return localStorage.authorization_token;
    }

}
