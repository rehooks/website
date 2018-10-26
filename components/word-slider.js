/* global window */
import React, { PureComponent } from 'react';
import { Transition, animated } from 'react-spring';

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.children = React.Children.toArray(props.children);
    this.state = {
      count: React.Children.count(props.children),
      currentIndex: 0
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentWillUnmount() {
    clearInterval(this.animation);
  }

  startAnimation() {
    this.animation = setInterval(() => {
      if (window.document.visibilityState === 'hidden') {
        // tab invisible; pause for one round to avoid flickering
        this.pauseAnimation = true;
        return;
      }
      if (!this.pauseAnimation) {
        this.setState({
          currentIndex: (this.state.currentIndex + 1) % this.state.count
        });
      } else {
        this.pauseAnimation = false;
      }
    }, this.props.duration || 1500);
  }

  render() {
    const currentIndex = this.state.currentIndex;
    return (
      <div>
        <Transition
          native
          keys={currentIndex}
          initial={null}
          from={{ opacity: 0, y: -50 }}
          enter={{ opacity: 1, y: 0 }}
          leave={{ opacity: 0, y: 60 }}
        >
          {({ opacity, y }) => (
            <animated.div
              style={{
                position: 'absolute',
                transform: y.interpolate(y => `translate3d(0, ${y}%, 0)`),
                opacity
              }}
            >
              {this.props.children[currentIndex]}
            </animated.div>
          )}
        </Transition>
        <style jsx>
          {`
             {
              width: 100%;
              height: 3.4em;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 1rem;
              margin-bottom: 2rem;
            }
          `}
        </style>
      </div>
    );
  }
}
