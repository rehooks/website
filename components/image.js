import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IObserver from './intersection-observer';

// This component might look a little complex
// because one could argue that keeping the aspect ratio
// of an image can be solved with `height: auto`,
// but it's actually not that easy if you want to prevent
// element flickering

// Because if you want to do that, you need to set the aspect
// ratio of the image's container BEFORE the image loads

class Image extends Component {
  static defaultProps = {
    lazy: true
  };

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    lazy: PropTypes.bool
  };

  state = {
    src: !this.props.lazy ? this.props.videoSrc || this.props.src : undefined
  };

  handleIntersect = entry => {
    if (entry.isIntersecting) {
      this.setState({ src: this.props.videoSrc || this.props.src });
    }
  };

  render() {
    const {
      caption,
      width,
      height,
      margin = 40,
      video = false,
      videoSrc,
      captionSpacing = null,
      renderImage,
      oversize = true,
      lazy,
      ...rest
    } = this.props;

    const aspectRatio = `${String((height / width) * 100)}%`;
    const classes = width > 650 && oversize ? 'oversize' : '';

    return (
      <IObserver
        once
        onIntersect={this.handleIntersect}
        rootMargin="20%"
        disabled={!lazy}
      >
        <figure className={classes}>
          <main style={{ width }}>
            <div style={{ paddingBottom: aspectRatio }}>
              {this.state.src ? (
                videoSrc || video ? (
                  <video src={this.state.src} muted autoPlay loop playsInline />
                ) : renderImage ? (
                  renderImage(rest)
                ) : (
                  <img src={this.state.src || null} />
                )
              ) : null}
            </div>

            {caption && (
              <p style={captionSpacing ? { marginTop: captionSpacing } : {}}>
                {caption}
              </p>
            )}
          </main>

          <style jsx>
            {`
              figure {
                display: block;
                text-align: center;
                margin: ${margin}px 0;
              }
              main {
                margin: 0 auto;
                max-width: 100%;
              }
              div {
                position: relative;
              }
              figure :global(img),
              figure :global(video) {
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
              }
              p {
                color: #999;
                font-size: 12px;
                margin: 0;
                text-align: center;
              }

              @media (min-width: 1200px) {
                figure.oversize {
                  width: ${width}px;
                  margin: ${margin}px 0 ${margin}px
                    calc(((${width}px - 650px) / 2) * -1);
                }
              }
            `}
          </style>
        </figure>
      </IObserver>
    );
  }
}

export const Video = props => <Image {...props} video />;

export default Image;
