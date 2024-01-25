import { Injectable } from '@angular/core';
import {User} from "../Model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];
  constructor() {
    this.users = [
      new User(1, 'user1', 'user1', '123456789'),
      new User(2, 'user2', 'user2', '123456789'),
      new User(3,'user3', 'user3', '123456789'),
    ];
  }
}
