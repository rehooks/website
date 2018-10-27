import classNames from 'classnames'

export default ({
  isMobile,
  href,
  light,
  invert,
  selected,
  onClick,
  children
}) => (
  <a
    className={classNames('fw4 no-drag no-tap-highlight', {
      selected,
      f5: isMobile
    })}
    onClick={onClick}
    href={href}
  >
    <style jsx>{`
      a {
        display: inline-block;
        border-radius: 7px;
        cursor: pointer;
        text-decoration: none;
        padding: 0.25rem 0.5rem;
        margin: ${isMobile ? '.25rem' : '0 1rem'};
        color: ${invert ? '#8D8D8D' : '#999'};
        white-space: nowrap;
        transition: all 0.2s ease;
      }
      a:hover {
        // color;
        ${light
          ? ''
          : invert
            ? 'background-color: rgba(255, 255, 255, .05)'
            : 'background-color: rgba(0, 0, 0, .05)'};
      }
      a.selected {
        color: ${invert ? '#efefef' : 'inherit'};
        ${light
          ? ''
          : invert
            ? 'background-color: rgba(255, 255, 255, .1)'
            : 'background-color: rgba(0, 0, 0, .1)'};
      }
    `}</style>
    {children}
  </a>
)
