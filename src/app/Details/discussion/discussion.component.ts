import { Component, Input, OnInit } from '@angular/core';
import { ReviewService } from '../../Services/review.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Review } from '../../Model/Review';
import { Book } from '../../Model/Book';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css'],
})
export class DiscussionComponent implements OnInit {
  @Input() book!: Book;
  reviews: Review[] = [];
  reviewForm = new FormGroup({
    comment: new FormControl(''),
    rating: new FormControl(''),
  });

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.reviewService
      .getReviews(this.book.title, this.book.author)
      .subscribe((reviews) => {
        this.reviews = reviews;
      });
  }
  onSubmit() {
    console.warn(this.reviewForm.value);
  }

  getStars(rating: number) {
    return Array(rating);
  }
}
