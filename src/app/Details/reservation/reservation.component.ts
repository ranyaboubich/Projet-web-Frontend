import {Component, Input} from '@angular/core';
import {Book} from "../../Model/Book";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

  @Input() book: Book;

  constructor(
    private route: Router,
  ) {
    this.book = new Book(0, '', '', '', '', '',[]);
  }
  ngOnInit(): void {
  }
  getButtonText(): string {
    return this.book.waitingList.length === 0 ? 'Reserve' : 'Join Waitlist';
  }

  CheckLogin(){
    if(localStorage.getItem('user') == null){
      this.route.navigate(['login']);
    }
    //else{
     // return true;
    //}
  }




}
