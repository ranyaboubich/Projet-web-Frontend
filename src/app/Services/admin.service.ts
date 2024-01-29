import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Book} from "../Model/Book";
import {User} from "../Model/User";
import {Reservation} from "../Model/reservation";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
    private authService: AuthService) { }

  private getHttpHeaders() {
    // @ts-ignore
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const token = currentUser.access_token;
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }


  getUsers() {
    return this.http.get<User[]>('http://localhost:3000/users', { headers: this.getHttpHeaders()});
  }

  deleteUser(id: number) {
    return this.http.delete<User>('http://localhost:3000/users/' + id, { headers: this.getHttpHeaders() });
  }

  updateUser(id: number, user: any) {
    return this.http.patch<User>('http://localhost:3000/users/' + id, user, { headers: this.getHttpHeaders() });
  }

  getReservations() {
    return this.http.get<Reservation[]>('http://localhost:3000/reservation', { headers: this.getHttpHeaders() });
  }

  deleteReservation(id: number) {
    return this.http.delete<Reservation>('http://localhost:3000/reservation/' + id, { headers: this.getHttpHeaders() });
  }

  getBooks() {
    return this.http.get<Book[]>('http://localhost:3000/books', { headers: this.getHttpHeaders() });
  }

  deleteBook(id: number) {
    return this.http.delete<Book>('http://localhost:3000/books/' + id, { headers: this.getHttpHeaders() });
  }

  updateBook(id: number, book: any) {
    return this.http.put<Book>('http://localhost:3000/books/' + id, book, { headers: this.getHttpHeaders() });
  }

  addBook(book: Book) {
    return this.http.post<Book>('http://localhost:3000/books/', book, { headers: this.getHttpHeaders() });
  }
}
