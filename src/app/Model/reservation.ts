import {User} from "./User";
import {Book} from "./Book";

export class Reservation{
    id: number;
    user: User;
    book: Book;
    reservedAt: Date;
    returnedAt: Date;
    constructor(id: number, user: User, book: Book, reservedAt: Date, returnedAt: Date) {
        this.id = id;
        this.user = user;
        this.book = book;
        this.reservedAt = reservedAt;
        this.returnedAt = returnedAt;
    }
}
