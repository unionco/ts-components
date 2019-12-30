import React from 'react';
import { Review as StyledReview, ReviewStars as StyledReviewStars } from './styles';
import { Avatar } from '../Avatar'

interface IReview {
  image?: string;
  title?: string;
  subtitle?: string;
  rating?: number;
  review?: string;
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

const Review: React.FC<IReview> = ({image, title, subtitle, rating, review, ...rest}) => {
  return (
    <StyledReview {...rest}>
      <Avatar image={image} />
      <div className="Review-content">
        <div className="Review-info">
          <div className="Review-info-left">
            {title && (<h4>{title}</h4>)}
            {subtitle && (<p>{subtitle}</p>)}
          </div>
          <div className="Review-info-right">
            {rating && (
              <>
                <strong>{rating.toFixed(1)}</strong> <ReviewStars rating={rating} /> <span>a week ago</span>
              </>
            )}
          </div>
        </div>
        {review && (<p>{review}</p>)}
      </div>
    </StyledReview>
  );
}

export { Review, StyledReview, ReviewStars, StyledReviewStars, IReview };
