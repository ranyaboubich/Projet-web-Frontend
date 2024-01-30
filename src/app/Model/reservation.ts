import { Book } from './Book';
import { User } from './User';

export interface reservation {
  id: number;
  reservedAt: Date;
  returnedAt: Date;
  user: User;
  book: Book;
}
