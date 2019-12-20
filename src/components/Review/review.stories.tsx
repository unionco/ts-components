import React from "react";
import { storiesOf } from "@storybook/react";
import { number } from "@storybook/addon-knobs";
import { ThemeProvider } from '../../index';
import { BaseStyles } from '../BaseStyles';
import { Review, ReviewStars } from './index';
import { Avatar } from "../Avatar"

storiesOf("Review", module)
  .add("Default", () => {
    let rating = number('Rating', 3);

    if (rating > 5) {
      rating = rating / 20;
    }

    return (
      <ThemeProvider>
        <BaseStyles />
        <Review>
          <Avatar image="https://source.unsplash.com/random/?avatar" />
          <div className="Review-content">
            <div className="Review-info">
              <div className="Review-info-left">
                <h4>Review Title</h4>
                <p>3 Reviews</p>
              </div>
              <div className="Review-info-right">
                <strong>{rating.toFixed(1)}</strong> <ReviewStars rating={rating} /> <span>a week ago</span>
              </div>
            </div>
            <p>Ut mollit nulla veniam minim non consectetur reprehenderit in. Exercitation ut aliquip sit velit in fugiat ipsum velit pariatur ipsum consequat. Et adipisicing enim ad cupidatat qui dolore sunt.</p>
          </div>
        </Review>
      </ThemeProvider>
    )
  });
