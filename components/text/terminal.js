import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { GenericLink } from './link';
import { FONT_FAMILY_MONO, COLOR_CODE_LIGHT } from '../css-config';

export const TerminalInput = (
  { children, prefix },
  { disabled, darkBg } = {}
) => (
  <div className={cn({ darkBg, disabled, prefix })}>
    {children}
    <style jsx>{`
      div {
        -webkit-overflow-scrolling: touch;
        border: 1px solid #eaeaea;
        color: ${COLOR_CODE_LIGHT};
        font-family: ${FONT_FAMILY_MONO};
        font-size: 13px;
        line-height: 20px;
        margin: 40px 0;
        overflow: auto;
        padding: 20px;
        white-space: pre;
      }

      div.disabled {
        color: #ccc;
        border-color: #eee;
      }

      div.dark {
        border-color: #333;
        color: #5ce6cd;
      }

      div.prefix::before {
        content: '$ ';
      }
    `}</style>
  </div>
);

TerminalInput.contextTypes = {
  darkBg: PropTypes.bool,
  disabled: PropTypes.bool
};

export class TerminalOutput extends React.Component {
  static childContextTypes = {
    darkBg: PropTypes.bool
  };

  getChildContext() {
    return { darkBg: true };
  }

  render() {
    const { children, className, showPrompt } = this.props;
    return (
      <div className={cn('output', { prompt: showPrompt }, className)}>
        {children}
        <style jsx>{`
          .output {
            background: #000;
            color: #fff;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
              serif;
            font-size: 13px;
            line-height: 20px;
            margin: 40px 0;
            padding: 20px;
          }

          .output.prompt::before {
            color: #ccc;
            content: '$ ';
          }

          .output :global(pre) {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
            white-space: pre-wrap;
          }
        `}</style>
      </div>
    );
  }
}

export const TerminalLink = props => (
  <span>
    <GenericLink {...props} />
    <style jsx>{`
      span :global(a) {
        text-decoration: underline;
      }
    `}</style>
  </span>
);
