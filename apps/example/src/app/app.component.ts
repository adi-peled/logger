import { Component, OnInit } from '@angular/core';
import { User, UserService } from './services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'workspace-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'example';
  users$: Observable<User[]>;
  constructor(
    private userService: UserService,
  ) {
    this.users$ = this.userService.getUsers();
  }
  ngOnInit(): void {
  }

  getUsers() {
    this.users$ = this.userService.getUsers();
  }
}
