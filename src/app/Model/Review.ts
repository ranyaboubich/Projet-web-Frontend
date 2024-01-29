import { Book } from './Book';
import { User } from './User';

export interface Review {
  id: number;
  content: string;
  rating: number;
  user: User;
  book: Book;
}
