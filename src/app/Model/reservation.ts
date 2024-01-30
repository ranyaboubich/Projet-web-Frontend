import { Book } from './Book';
import { User } from './User';

export interface Reservation {
  id: number;
  reservedAt: Date;
  returnedAt: Date;
  user: User;
  book: Book;
}
