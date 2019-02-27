import { Component, OnInit } from '@angular/core';
import { UserService } from '~/app/services/user.service';

@Component({
	moduleId: module.id,
	selector: 'index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
	public user;
	constructor(private userService : UserService) { }

	ngOnInit() {
		this.user = this.userService.getUser();
	 }
}