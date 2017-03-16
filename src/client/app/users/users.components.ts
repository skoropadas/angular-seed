import {Component, OnInit} from '@angular/core';
import {User} from "../shared/users/user.model";
import {UserService} from "../shared/users/user.service";

@Component({
  moduleId: module.id,
  selector: 'sd-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
})
export class UsersComponent implements OnInit {
  users: Array<User>;

  constructor(public userService: UserService) {
    this.users = [];
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.userService.getAll().subscribe(
      result => this.users = result,
      error => console.error('Произошла ошибка', error)
    )
  }
}
