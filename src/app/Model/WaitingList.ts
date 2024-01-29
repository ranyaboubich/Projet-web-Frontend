export class WaitingList {
  id: number;
  user: number;
  book: number;
  joinedAt: Date;

  constructor(id: number, user: number, book: number, joinedAt: Date) {
    this.id = id;
    this.user = user;
    this.book = book;
    this.joinedAt = joinedAt;
  }
}
