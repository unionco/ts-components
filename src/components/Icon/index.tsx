import React, { Component } from 'react';
import { Icon as StyledIcon, IStyledIconProps } from './styles';
import { Icons } from './icons';

export interface IIconProps
  extends IStyledIconProps {
    icon: string;
    src?: string;
  }

export interface IIconState {
  SVGElement?: string
}

class Icon extends Component<IIconProps, IIconState> {
  constructor(props: IIconProps) {
    super(props);
    this.state = {
      SVGElement: undefined
    }
  }

  componentDidMount() {
    const { icon } = this.props;
    if (icon) {
      fetch(Icons[icon])
        .then(res => res.text())
        .then((text) => {
          this.setState({
            SVGElement: text
          })
        });
    }
  }

  render() {
    const { size, color } = this.props;
    const { SVGElement } = this.state;

    return (
      <StyledIcon size={size} color={color}>
        {SVGElement && <div dangerouslySetInnerHTML={{ __html: SVGElement }}></div>}
      </StyledIcon>
    );
  }
}

export { Icon, StyledIcon };
