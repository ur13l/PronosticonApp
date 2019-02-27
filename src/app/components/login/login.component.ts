import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { UserService } from '~/app/services/user.service';
import { User } from '~/app/models/user';
require('nativescript-localstorage');

@Component({
	selector: 'login',
	moduleId: module.id,	
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	public codigo : string;

	constructor(
		private router : Router,
		private userService : UserService
	) { }

	ngOnInit() {
		if(false){
			this.router.navigate(["index"]);
		}
	}

	public login() {
		this.userService.login(this.codigo)
			.subscribe(res => {
				let user = res['data'];
				localStorage.user = user;
				localStorage.authorization_token = user.token;
				this.router.navigate(["index"]);
			})
	}

	public checkLg(){
		this.router.navigate(["index"]);
	}
	public contact(){
		console.log("quiere cambiar algo");
	}
}