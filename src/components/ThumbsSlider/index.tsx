import React from 'react';
import { Slider } from "../Slider";
import { ThumbsSliderContainer, ThumbsContainer } from './styles';

interface IThumbsSliderProps {
  children?: any;
}

interface IThumbsSliderState {
  thumbsSlider?: any,
  isLoaded?: boolean
}

// [TODO] Perhaps make this come from the CMS ... remove this comment if you are a B/E and disagree
export const slidesPerView = 4;

class ThumbsSlider extends React.Component<IThumbsSliderProps, IThumbsSliderState> {
  constructor(props: IThumbsSliderProps) {
    super(props);
    this.state = {
      thumbsSlider: '',
      isLoaded: false
    };

    this.thumbsLoaded = this.thumbsLoaded.bind(this);
  }

  public thumbsLoaded(event: any) {
    this.setState({
      thumbsSlider: event,
      isLoaded: true
    });
  }

  public render() {
    const { children } = this.props;
    const disableNextButton = React.Children.count(children) <= slidesPerView;

    return (
      <ThumbsSliderContainer>
        {this.state.isLoaded && (
          <Slider options={{
            thumbs: {
              swiper: this.state.thumbsSlider,
            }
          }}>
            {children}
          </Slider>
        )}
        <ThumbsContainer disableNextButton={disableNextButton}>
          <Slider buttons onSlidesDidLoad={this.thumbsLoaded} options={{
            spaceBetween: 15,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slidesPerView,
          }}>
            {children}
          </Slider>
        </ThumbsContainer>
      </ThumbsSliderContainer>
    )
  }
}

export { ThumbsSlider };