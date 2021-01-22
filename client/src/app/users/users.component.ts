import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userLoginService: UserLoginService) { }

  readUsers(): void {
    this.userLoginService.readUsers().subscribe(users => this.users = users);
  }
  ngOnInit() {
    this.readUsers();
  }

}
