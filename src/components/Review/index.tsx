import React from 'react';
import { Review as StyledReview, ReviewStars as StyledReviewStars } from './styles';
import { Avatar } from '../Avatar';
import { H1, Paragraph } from '../Typography';

interface IReview {
  image?: string;
  title?: string;
  subtitle?: string;
  rating?: number;
  review?: string;
}

interface ReviewStars {
  rating: number;
}

const ReviewStars: React.FC<ReviewStars> = ({ rating, ...rest }) => {
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
};

const Review: React.FC<IReview> = ({ image, title, subtitle, rating, review, ...rest }: IReview) => {
  return (
    <StyledReview {...rest}>
      <Avatar image={image} />
      <section className="Review-content">
        <div className="Review-info">
          <div className="Review-info-left">
            {title && <H1 className="h3">{title}</H1>}
            {subtitle && <Paragraph>{subtitle}</Paragraph>}
          </div>
          <div className="Review-info-right">
            {rating && (
              <>
                <strong>{rating.toFixed(1)}</strong> <ReviewStars rating={rating} /> <Paragraph>a week ago</Paragraph>
              </>
            )}
          </div>
        </div>
        {review && <p>{review}</p>}
      </section>
    </StyledReview>
  );
};

export { Review, StyledReview, ReviewStars, StyledReviewStars, IReview };
