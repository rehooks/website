import Container from '../container'
import Button from '../button'
import SectionHeader from '../section-header'

export default () => (
  <Container center padding wide role="region" aria-labelledby="learn">
    <SectionHeader id="learn" title="Learn about Rehooks" />
    <div className="learn-intro">
      <p>
        Check out <strong>awesome-rehooks</strong> to find tutorials and
        packages to use.
      </p>
      <div className="overlay" />
      <style jsx>{`
        .learn-intro {
          position: relative;
          height: 450px;
          max-width: 1024px;
          margin: auto;
          background: url(/static/images/learn.png);
          background-size: 100% auto;
          background-position: 0 2rem;
          background-repeat: no-repeat;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 60%,
            rgba(255, 255, 255, 1) 90%
          );
          pointer-events: none;
        }
        // CSS only media query for tablet
        @media screen and (max-width: 960px) {
          .learn-intro {
            background-position: 0 3.5rem;
            background-size: 160% auto;
          }
        }
      `}</style>
    </div>
    <div>
      <Button href="/learn" invert>
        Get Started
      </Button>
    </div>
  </Container>
)
