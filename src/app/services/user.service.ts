import { Injectable } from '@angular/core';
import { User } from '~/app/models/user';
import { BaseService } from './base.service';


@Injectable()
export class UserService extends BaseService{

  login(codigo : string) {
      let headers = this.createRequestHeader();
      return this.http.post(this.serverUrl + 'auth/login', { codigo: codigo }, { headers: headers });
  }

  getUser() {
    let user = localStorage.user;
    return user;
  }
  



  checkLg(){
    console.log("entra");
    //nsRoeterLink
  }
  chek(){
    console.log("el otro boton");
  }
  fun2() {

  }

}
