import React, { SyntheticEvent } from 'react';
import { styled } from '../../styles';
import { isBrowser } from '../../utils';

interface IImageProps {
  unsplash?: boolean;
  src: string;
  alt: string;
  onError?: (ev?: SyntheticEvent) => void,
  onLoad?: (ev?: SyntheticEvent) => void,
}

const StyledImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: inherit;
  object-position: inherit;
`

interface IImageState {
  loadSrc?: string;
  io?: IntersectionObserver;
}

class Image extends React.Component<IImageProps, IImageState> {
  private el?: React.RefObject<any>;

  constructor(props: IImageProps) {
    super(props);
    this.el = React.createRef();
    this.state = {
      loadSrc: undefined,
      io: undefined
    }
  }

  public componentDidMount() {
    this.addIO();
  }

  public render() {
    const { loadSrc } = this.state;
    const { alt, unsplash } = this.props;
    return (
      <StyledImage
        decoding="async"
        ref={this.el}
        src={unsplash ? `https://source.unsplash.com/random/${Math.floor(Math.random() * 10)}` : loadSrc}
        alt={alt}
        onLoad={this.onLoad}
        onError={this.onError}
      />
    );
  }

  private addIO() {
    if (this.props.src === undefined || !isBrowser()) {
      return;
    }

    if ('IntersectionObserver' in window) {
      this.removeIO();
      const instance = new IntersectionObserver(data => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.load();
          this.removeIO();
        }
      });

      instance.observe((this.el as any).current);
      this.setState({
        io: instance
      });
    } else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => this.load(), 200);
    }
  }

  private load() {
    this.setState({
      loadSrc: this.props.src
    });
  }

  private onLoad = (ev: SyntheticEvent) => {
    //
    if (this.props.onLoad) {
      this.props.onLoad(ev);
    }
  }

  private onError = (ev: SyntheticEvent) => {
    //
    if (this.props.onError) {
      this.props.onError(ev);
    }
  }

  private removeIO() {
    if (this.state.io) {
      this.state.io.disconnect();
      this.setState({
        io: undefined
      });
    }
  }
}

export { Image, StyledImage, IImageProps };
