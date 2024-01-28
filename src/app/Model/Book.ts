export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  keywords: string[];
  cover: string;
  waitingList: number[];
}
