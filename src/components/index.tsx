import classNames from 'classnames';
import React, { Component } from 'react';

const CLASS_NAME = 'react-full-video';

export type ReactFullVideoProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * The source url.
   */
  src?: string;
};

export default class ReactFullVideo extends Component<ReactFullVideoProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    src: 'https://lofter.lf127.net/1611821341381/jwhaideyanjing~1.mp4'
  };

  handleClick = () => {
    console.log('click me!');
  };

  render() {
    const { className, ...props } = this.props;

    return (
      <div data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)}>
        <video autoPlay preload="auto" muted playsInline loop {...props} />
      </div>
    );
  }
}
