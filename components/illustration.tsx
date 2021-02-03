import cn from 'classnames';
import { Component, CSSProperties } from 'react';
import styles from './illustration-container.module.css';

interface Props {
  x?: string;
  y?: string;
  width?: number;
  height?: number;
}

export default class Illustration extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  generateCssVariables(): CSSProperties {
    return {
      '--x-position': this.props.x,
      '--y-position': this.props.y,
      '--custom-width': this.props.width,
      '--custom-height': this.props.height
    } as CSSProperties;
  }
  render() {
    return (
      <div style={this.generateCssVariables()} className={cn(styles['illustration-object'])}>
        {this.props.children}
      </div>
    );
  }
}
