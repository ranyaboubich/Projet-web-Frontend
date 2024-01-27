import { Component, OnInit } from '@angular/core';
import { Review } from './review.model';
import { ReviewService } from '../../Services/review.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css'],
})
export class DiscussionComponent implements OnInit {
  reviews: Review[] = [];
  reviewForm = new FormGroup({
    comment: new FormControl(''),
    rating: new FormControl(''),
  });

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.reviews = this.reviewService.getReviews();
  }
  onSubmit() {
    console.warn(this.reviewForm.value);
  }

  getStars(rating: number) {
    return Array(rating);
  }
}
