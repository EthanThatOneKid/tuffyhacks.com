import cn from 'classnames';
import { Component, CSSProperties } from 'react';
import styles from './illustration-container.module.css';
import styleUtils from './utils.module.css';

interface Props {
  x?: string;
  y?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
  height?: string;
}

export default class Illustration extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div
        style={
          {
            '--x-position': this.props.x,
            '--y-position': this.props.y,
            '--top-offset': this.props.top,
            '--right-offset': this.props.right,
            '--bottom-offset': this.props.bottom,
            '--left-offset': this.props.left,
            '--custom-width': this.props.width,
            '--custom-height': this.props.height
          } as CSSProperties
        }
        className={cn(styles['illustration-object'], styleUtils['hide-on-mobile'])}
      >
        {this.props.children}
      </div>
    );
  }
}
