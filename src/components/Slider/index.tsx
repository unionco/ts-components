import React, { Children, Component, ReactElement, cloneElement } from 'react';
import Swiper, { SwiperOptions } from 'swiper';
import { SwiperContainer } from './styles';
import { get } from 'lodash';

export interface ISwiperEvent { name: string, swiper: Swiper };
export type SwiperInstance = Swiper | null;
export type ISlideChildren = ReactElement|ReactElement[];
export type GetSwiper = (swiper: Swiper) => void;
export type GetSwiperEvent = (event: ISwiperEvent) => void;

export interface ISliderProps {
  pager?: boolean;
  scrollbar?: boolean;
  buttons?: boolean;
  options?: SwiperOptions;
  children?: ISlideChildren;
  getSwiper?: GetSwiper;
  onSlidesDidLoad?: GetSwiper;
  onSlideChangeTransitionStart?: GetSwiperEvent; // keep
  onSlideChangeTransitionEnd?: GetSwiperEvent; // keep
  onSlideNextTransitionStart?: GetSwiperEvent; // keep
  onSlidePrevTransitionStart?: GetSwiperEvent; // keep
  onSlideNextTransitionEnd?: GetSwiperEvent; // keep
  onSlidePrevTransitionEnd?: GetSwiperEvent; // keep
  onTransitionStart?: GetSwiperEvent; // keep
  onTransitionEnd?: GetSwiperEvent; // keep
}

export interface ISliderState {
  swiperReady: boolean;
}

class Slider extends Component<ISliderProps, ISliderState> {
  private el: any = React.createRef<HTMLDivElement>();
  private paginationEl: any = React.createRef<HTMLDivElement>();
  private scrollbarEl: any = React.createRef<HTMLDivElement>();
  private navPrevEl: any = React.createRef<HTMLDivElement>();
  private navNextEl: any = React.createRef<HTMLDivElement>();
  private swiper: any = React.createRef<SwiperInstance>();

  constructor(props: ISliderProps) {
    super(props);
    this.state = {
      swiperReady: false,
    };
  }

  public componentDidMount() {
    this.initSwiper();
    this.slidesDidLoad();
  }

  public componentWillUnmount() {
    this.destroySwiper();
  }

  // public getSwiperInstance(swiper: SwiperInstance) {
  //   const { getSwiper } = this.props;
  //   if (typeof getSwiper === 'function') {
  //     getSwiper(swiper);
  //   }
  // };

  // events
  public slidesDidLoad() {
    const { onSlidesDidLoad } = this.props;
    if (onSlidesDidLoad) {
      onSlidesDidLoad(this.swiper.current);
    }
  }

  public emitSlideEvent(eventName: string) {
    const eventFunction = get(this.props, eventName);
    if (eventFunction) {
      eventFunction({ name: eventName, swiper: this.swiper.current });
    }
  }

  public slideTo(index?: number) {
    if (this.swiper.current !== null && index !== null) {
      this.swiper.current.slideTo(index);
    }
  }

  public destroySwiper() {
    if (this.swiper.current !== null) {
      this.swiper.current.destroy(true, true);
      this.swiper.current = null;
    }
  };

  public rebuildSwiper() {
    this.destroySwiper();
    this.initSwiper();
  };

  // Update swiper
  public updateSwiper() {
    if (this.swiper.current !== null) {
      this.swiper.current.update();
    }
  };

  public render() {
    const { pager, scrollbar, buttons, children } = this.props;

    if (!children) {
      return '';
    }

    return (
      <SwiperContainer className="swiper-container" ref={this.el}>
        <div className="swiper-wrapper">
          {Children.map(children, this.renderContent.bind(this))}
        </div>
        {pager && <div className="swiper-pagination" ref={this.paginationEl}></div>}
        {scrollbar && <div className="swiper-scrollbar" ref={this.scrollbarEl}></div>}
        {buttons && [
          <div key={0} className="swiper-button-prev" ref={this.navPrevEl}></div>,
          <div key={1} className="swiper-button-next" ref={this.navNextEl}></div>
        ]}
      </SwiperContainer>
    )
  }

  private async initSwiper() {
    const { options, pager, buttons, scrollbar } = this.props;
    const opts = { ...defaultOptions, ...options };

    if (pager) {
      opts.pagination = {
        el: this.paginationEl.current,
        type: 'bullets',
        clickable: false,
        hideOnClick: false,
      };
    }

    if (buttons) {
      opts.navigation = {
        nextEl: this.navNextEl.current,
        prevEl: this.navPrevEl.current
      }
    }
    if (scrollbar) {
      opts.scrollbar = {
        el: this.scrollbarEl.current,
        hide: true,
      };
    }

    const eventOptions: SwiperOptions = {
      on: {
        slideChangeTransitionStart: this.emitSlideEvent.bind(this, 'onSlideChangeTransitionStart'),
        slideChangeTransitionEnd: this.emitSlideEvent.bind(this, 'onSlideChangeTransitionEnd'),
        slideNextTransitionStart: this.emitSlideEvent.bind(this, 'onSlideNextTransitionStart'),
        slidePrevTransitionStart: this.emitSlideEvent.bind(this, 'onSlidePrevTransitionStart'),
        slideNextTransitionEnd: this.emitSlideEvent.bind(this, 'onSlideNextTransitionEnd'),
        slidePrevTransitionEnd: this.emitSlideEvent.bind(this, 'onSlidePrevTransitionEnd'),
        transitionStart: this.emitSlideEvent.bind(this, 'onTransitionStart'),
        transitionEnd: this.emitSlideEvent.bind(this, 'onTransitionEnd'),
      }
    };

    const customEvents = (!!options && !!options.on) ? options.on : {};

    const mergedEventOptions = { on: { ...customEvents, ...eventOptions.on } };

    const finalOptions = { ...opts, ...mergedEventOptions };

    if (this.el.current && this.swiper.current === null) {
      this.swiper.current = new Swiper(this.el.current, finalOptions);
      this.setState({
        swiperReady: true
      });
    }
  }

  private renderContent(e: ReactElement) {
    const slideClassNames = ['swiper-slide', e.props.className];

    return cloneElement(e, {
      ...e.props,
      className: slideClassNames.join(' ').trim()
    });
  };
}

export { Slider, SwiperContainer };

const defaultOptions: SwiperOptions = {
  effect: undefined,
  direction: 'horizontal',
  initialSlide: 0,
  loop: false,
  parallax: false,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 300,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  touchEventsTarget: 'container',
  autoplay: false,
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,
  autoHeight: false,
  setWrapperSize: false,
  zoom: {
    maxRatio: 3,
    minRatio: 1,
    toggle: false,
  },
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  touchStartPreventDefault: false,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  threshold: 0,
  touchMoveStopPropagation: true,
  touchReleaseOnEdges: false,
  iOSEdgeSwipeDetection: false,
  iOSEdgeSwipeThreshold: 20,
  resistance: true,
  resistanceRatio: 0.85,
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  loopAdditionalSlides: 0,
  noSwiping: true,
  runCallbacksOnInit: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  flipEffect: {
    slideShadows: true,
    limitRotation: true
  },
  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  fadeEffect: {
    crossFade: false
  },
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide'
  }
};
