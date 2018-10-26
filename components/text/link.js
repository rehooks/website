// Packages
import NativeLink from 'next/link';
import PropTypes from 'prop-types';

export const GenericLink = props => {
  if (
    props.href.startsWith('/') &&
    !props.href.startsWith('/docs') &&
    !props.href.startsWith('/api')
  ) {
    return <InternalLink {...props} />;
  }

  if (props.href.includes('@') || props.href.startsWith('#')) {
    return <AnchorLink {...props} />;
  }

  return <ExternalLink {...props} />;
};

export const InternalLink = (
  { href, as, children, error = false, underlineOnHover = true },
  { disabled, darkBg = false, inError = false } = {}
) => (
  <NativeLink prefetch href={href} as={as}>
    <a
      className={`
      ${darkBg ? 'dark' : ''}
      ${disabled ? 'disabled' : ''}
      ${underlineOnHover ? '' : 'no-underline'}
      ${inError ? 'in-error' : ''}
    `}
    >
      {children}

      <style jsx>{`
        a {
          text-decoration: ${error ? 'underline' : 'none'};
          color: ${error ? 'red' : '#067df7'};
          font-size: inherit;
        }

        a:not(.no-underline):hover {
          text-decoration: underline;
        }

        a.disabled {
          color: #999;
        }

        a.dark {
          color: ${error ? 'red' : '#fff'};
          border-bottom: 1px solid #fff;
        }

        a.dark:hover {
          text-decoration: none;
        }

        a.in-error {
          color: inherit;
        }

        a.in-error:hover {
          border-bottom: 1px solid currentColor;
          text-decoration: none;
        }
      `}</style>
    </a>
  </NativeLink>
);

InternalLink.contextTypes = {
  darkBg: PropTypes.bool,
  disabled: PropTypes.bool,
  inError: PropTypes.bool
};

export const AnchorLink = ({
  href,
  onClick,
  children,
  underlineOnHover = true
}) => (
  <a href={href} onClick={onClick}>
    {children}

    <style jsx>
      {`
        a {
          text-decoration: none;
          color: #067df7;
          font-size: inherit;
          cursor: pointer;
        }

        ${underlineOnHover
          ? `
          a:hover {
            text-decoration: underline;
          }
        `
          : null};
      `}
    </style>
  </a>
);

export const ExternalLink = ({ href, children }, { disabled, darkBg } = {}) => (
  <a
    className={`
      ${darkBg ? 'dark' : ''}
      ${disabled ? 'disabled' : ''}
    `}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}

    <style jsx>
      {`
        a {
          text-decoration: none;
          color: #067df7;
          font-size: inherit;
        }

        a:hover {
          text-decoration: underline;
        }

        a.disabled {
          color: #999;
        }

        a.dark {
          color: #fff;
          text-decoration: underline;
        }
      `}
    </style>
  </a>
);

ExternalLink.contextTypes = {
  darkBg: PropTypes.bool,
  disabled: PropTypes.bool
};
