import { Component } from '@angular/core';
import { Book } from '../../Model/Book';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
})
export class LibraryComponent {
  books: Book[];
  constructor(BookService: BookService) {
    this.books = BookService.getBooks();
  }
  ngOnInit(): void {
    console.log('on init');
  }
}
