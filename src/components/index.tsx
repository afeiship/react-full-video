import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import filterProps from '@jswork/filter-react-props';

const CLASS_NAME = 'react-full-video';

export type ReactFullVideoProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * Default value.
   */
  value?: object;
  /**
   * The change handler.
   */
  onChange?: Function;
};

export default class ReactFullVideo extends Component<ReactFullVideoProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: null,
    onChange: noop
  };

  handleClick = () => {
    console.log('click me!');
  };

  render() {
    const { className, value, onChange, ...props } = this.props;
    const theProps = filterProps(props);

    return (
      <div data-component={CLASS_NAME} className={classNames(CLASS_NAME, className)} {...theProps}>
        <video
          autoPlay
          preload="auto"
          muted
          playsInline
          src="https://lofter.lf127.net/1611821341381/jwhaideyanjing~1.mp4"
          loop
        />
      </div>
    );
  }
}
