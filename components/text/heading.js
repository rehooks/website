import { bool } from 'prop-types';

export const H1 = ({ className, children }, { darkBg }) => (
  <h1 className={`${className}${darkBg ? ' inverted' : ''}`}>
    {children}
    <style jsx>{`
      h1 {
        font-weight: 400;
        font-size: 32px;
        line-height: 42px;
      }

      h1 :global(code) {
        margin-left: 6px;
        margin-right: 6px;
      }

      .inverted {
        color: white;
      }
    `}</style>
  </h1>
);

H1.contextTypes = {
  darkBg: bool
};

const B = ({ children }) => (
  <span>
    {children}
    <style jsx>
      {`
        span {
          font-weight: 400;
        }
      `}
    </style>
  </span>
);

H1.B = B;

export const H2 = ({ children }, { darkBg }) => (
  <h2 className={darkBg ? 'inverted' : ''}>
    {children}
    <style jsx>{`
      h2 {
        font-weight: 400;
        font-size: 24px;
      }

      h2 :global(code) {
        margin-left: 6px;
        margin-right: 6px;
      }

      .inverted {
        color: white;
      }
    `}</style>
  </h2>
);

H2.contextTypes = {
  darkBg: bool
};

export const H3 = ({ children }, { darkBg }) => (
  <h3 className={darkBg ? 'inverted' : ''}>
    {children}
    <style jsx>{`
      h3 {
        font-weight: bold;
        font-size: 18px;
      }

      h3 :global(code) {
        margin-left: 6px;
        margin-right: 6px;
      }

      .inverted {
        color: white;
      }
    `}</style>
  </h3>
);

H3.contextTypes = {
  darkBg: bool
};

export const H4 = ({ children, isCommand }, { darkBg }) => (
  <h4 className={(isCommand ? 'command' : '') + (darkBg ? ' inverted' : '')}>
    {children}
    <style jsx>{`
      h4 {
        font-weight: bold;
        font-size: 16px;
      }

      .command {
        color: #bd10e0;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
          serif;
        font-size: 0.9em;
      }

      h4 :global(code) {
        margin-left: 6px;
        margin-right: 6px;
      }

      .inverted {
        color: white;
      }
    `}</style>
  </h4>
);

H4.contextTypes = {
  darkBg: bool
};

export const H5 = ({ children }, { darkBg }) => (
  <h5 className={darkBg ? 'inverted' : ''}>
    {children}
    <style jsx>{`
      h5 {
        font-weight: bold;
        font-size: 15px;
      }

      h5 :global(code) {
        margin-left: 6px;
        margin-right: 6px;
      }

      .inverted {
        color: white;
      }
    `}</style>
  </h5>
);

H5.contextTypes = {
  darkBg: bool
};
