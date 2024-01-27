import { Injectable } from '@angular/core';
import { Review } from '../Details/discussion/review.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  getReviews(): Review[] {
    // Replace this with actual logic to fetch reviews from a server
    return [
      new Review('User1', 'Great product!', 5),
      new Review('User2', 'Not as expected.', 2),
    ];
  }
}
