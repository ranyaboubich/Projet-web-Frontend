import { Component } from '@angular/core';
import { Book } from '../../Model/Book';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.css',
})
export class LibraryComponent {
  books!: Book[];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (books: Book[]) => {
        this.books = books;
      },
      error: (error) => {
        console.error('Error fetching books', error);
      },
    });
  }
}
