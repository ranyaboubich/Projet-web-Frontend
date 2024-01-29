import { Component } from '@angular/core';
import {AdminService} from "../../Services/admin.service";
import {Reservation} from "../../Model/reservation";
import {User} from "../../Model/User";
import {Book} from "../../Model/Book";

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
}
