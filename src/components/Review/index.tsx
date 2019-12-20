import React from 'react';
import { Review as StyledReview, ReviewStars as StyledReviewStars } from './styles';

interface IReview {
}

interface IReviewStars {
  rating: number;
}

const ReviewStars: React.FC<IReviewStars> = ({rating, ...rest}) => {
  return (
    <StyledReviewStars rating={rating} {...rest}>
      <div className="ReviewStars-outline">
        <div className="ReviewStars-full">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
    </StyledReviewStars>
  );
}

const Review: React.FC<IReview> = ({children}, {...rest}) => {
  return (
    <StyledReview {...rest}>
      {children}
    </StyledReview>
  );
}

export { Review, StyledReview, ReviewStars, StyledReviewStars, IReview };
