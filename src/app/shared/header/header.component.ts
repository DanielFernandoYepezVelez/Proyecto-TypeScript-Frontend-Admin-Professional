import { Component } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  public imgUrl = '';
  public user: User;

  constructor(private userService: UserService) {
    this.imgUrl = this.userService.user.imageUrl;
    this.user = userService.user;
  }

  logout() {
    this.userService.logout();
  }
}
