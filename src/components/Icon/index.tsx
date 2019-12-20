import React, { Component } from 'react';
import { Icon as StyledIcon, IStyledIconProps } from './styles';
import { getIcon } from './icons';
import { isBrowser } from '../../utils';
import { getSvgContent , iconContent } from './request';

export interface IIconProps
  extends IStyledIconProps {
    icon: string;
    src?: string;
  }

export interface IIconState {
  svg?: string
}

class Icon extends Component<IIconProps, IIconState> {
  constructor(props: IIconProps) {
    super(props);
    this.state = {
      svg: ''
    }
  }

  componentDidMount() {
    const { icon } = this.props;
    if (icon) {
      this.loadSvgContent(icon);
    }
  }

  async loadSvgContent(icon: string) {
    if (!isBrowser) {
      return;
    }

    const url = await getIcon(icon)
    if (url) {
      if (iconContent.has(url)) {
        // sync if it's already loaded
        this.setState({
          svg: iconContent.get(url)
        });
      } else {
        // async if it hasn't been loaded
        getSvgContent(url).then(() => {
          this.setState({
            svg: iconContent.get(url)
          });
        });
      }
    }
  }

  render() {
    const { size, color } = this.props;
    const { svg } = this.state;

    return (
      <StyledIcon size={size} color={color}>
        {svg && <div dangerouslySetInnerHTML={{ __html: svg }} />}
      </StyledIcon>
    );
  }
}

export { Icon, StyledIcon };
