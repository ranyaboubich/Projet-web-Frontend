import { Review } from './Review';
import { WaitingList } from './WaitingList';

export interface Book {
  id: number;
  title: string;
  author: string;
  instances: number;
  category: string;
  keywords: string[];
  coverImageUrl: string;
  description: string;
  reviews: Review[];
  waitingLists: WaitingList[];
}
