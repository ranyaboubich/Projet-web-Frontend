import { Component } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css',
})
export class StarsComponent {
  constructor() {}
  ngOnInit(): void {
    console.log('on init stars component');
  }
}
