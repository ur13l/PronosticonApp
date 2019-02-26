import { Injectable } from '@angular/core';
import { User } from '~/app/models/user';


@Injectable()
export class UserService {
  public users : User[] = [
    new User("Uriel"),
    new User("Hotakuxx"),
    new User("Daniel"),
    new User("Chema")
  ];

  constructor() { 
  }

  getUsers() : User[] {
    return this.users;
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
