import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser(0);
  }

}
