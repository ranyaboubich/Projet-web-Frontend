import { Book } from './Book';
import { User } from './User';

export interface WaitingList {
  id: number;
  joinedAt: Date;
  user: User;
  book: Book;
}
