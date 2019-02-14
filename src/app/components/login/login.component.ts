import { Component, OnInit } from '@angular/core';
import { UserService } from '~/app/services/user.service';
import { User } from '~/app/models/user';

@Component({
	selector: 'login',
	moduleId: module.id,	
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	public users : User[];

	constructor(
		private us : UserService
	) { }

	ngOnInit() {
		this.users = this.us.getUsers();
		
	 }
}