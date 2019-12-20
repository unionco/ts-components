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
        <ThumbsContainer>
          <Slider buttons onSlidesDidLoad={this.thumbsLoaded} options={{
            spaceBetween: 15,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
          }}>
            {children}
          </Slider>
        </ThumbsContainer>
      </ThumbsSliderContainer>
    )
  }
}

export { ThumbsSlider };