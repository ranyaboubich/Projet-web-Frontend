import { Component } from '@angular/core';
import {AdminService} from "../../Services/admin.service";
import {Reservation} from "../../Model/reservation";
import {User} from "../../Model/User";
import {Book} from "../../Model/Book";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  reservations: Reservation[] = [];
  users: User[] = [];
  books: Book[] = [];
  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService.getReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
    this.adminService.getUsers().subscribe(users => {
      this.users = users;
    });
    this.adminService.getBooks().subscribe(books => {
      this.books = books;
    });
  }

  updateUser(form: NgForm) {
    const user = {
      id: form.value.id,
      email: form.value.email,
      username: form.value.username,
      password: form.value.password
    };

    this.adminService.updateUser(user.id, user).subscribe(user => {
      console.log('User updated');
    });
  }

  deleteUser(id: number) {
    this.adminService.deleteUser(id).subscribe(user => {
      console.log('User deleted');
    });
  }
}
