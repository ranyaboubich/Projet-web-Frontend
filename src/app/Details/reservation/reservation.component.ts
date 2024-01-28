import { Component, Input } from '@angular/core';
import { Book } from '../../Model/Book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css',
})
export class ReservationComponent {
  constructor(private route: Router) {}
  ngOnInit(): void {}
}
