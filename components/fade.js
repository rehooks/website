import { PureComponent } from 'react';
import { Transition, animated, config as cfg } from 'react-spring';

const wrap = (child, styles) => {
  styles = { willChange: Object.keys(styles).join(','), ...styles };
  if (!child || !animated[child.type]) {
    // Wrap components into animated divs
    return <animated.div style={{ ...styles }}>{child}</animated.div>;
  }
  // Otherwise inject styles into existing component-props
  const Component = animated[child.type];
  const props = {
    ...child.props,
    style: {
      ...child.props.style,
      ...styles
    }
  };
  return <Component {...props} />;
};

export default class extends PureComponent {
  render() {
    const {
      children,
      show = true,
      config = cfg.fast,
      from = { opacity: 0 },
      enter = { opacity: 1 },
      leave = { opacity: 0 },
      ...rest
    } = this.props;
    const result = styles => wrap(children, styles);
    return (
      <Transition
        config={config}
        native
        keys={show.toString()}
        {...rest}
        from={from}
        enter={enter}
        leave={leave}
        children={show ? result : undefined}
      />
    );
  }
}
