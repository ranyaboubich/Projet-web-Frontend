import { Injectable } from '@angular/core';
//import http client
import { HttpClient } from '@angular/common/http';
import { Book } from '../Model/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:3000/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + '/' + id);
  }
}
