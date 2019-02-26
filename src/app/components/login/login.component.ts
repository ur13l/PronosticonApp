import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { UserService } from '~/app/services/user.service';
import { User } from '~/app/models/user';

@Component({
	selector: 'login',
	moduleId: module.id,	
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	

	constructor(
		private router : Router
	) { }

	ngOnInit() {
		if(false){
			this.router.navigate(["index"]);
		}
	}

	public checkLg(){
		this.router.navigate(["index"]);
	}
	public contact(){
		console.log("quiere cambiar algo");
	}
}