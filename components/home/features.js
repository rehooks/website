import Container from '../container'
import Button from '../button'
import SectionHeader from '../section-header'

import { links } from '../../site-manifest'

export default () => (
  <Container wide role="region" aria-labelledby="features">
    <Container center padding>
      <SectionHeader id="features" title="Why should I try React Hooks?" />
      <div className="row">
        <div className="column">
          <h3 className="f3 fw6">Easy-to-use</h3>
          <p>
            Setting up React Hooks is as simple as upgrading to{' '}
            <strong>React v16.7</strong> and using the new methods like{' '}
            <code>useState</code>.
          </p>
          <Button href="/docs">Try it out &rarr;</Button>
        </div>
        <div className="column">
          <h3 className="f3 fw6">Backwards-compatible</h3>
          <p>
            Hooks enable you to use existing React features like state, context
            and lifecycle. Without requiring classes.
          </p>
          <Button href="https://reactjs.org/docs/hooks-intro.html#no-breaking-changes">
            React Docs &rarr;
          </Button>
        </div>
        <div className="column">
          <h3 className="f3 fw6">Growing Community</h3>
          <p>
            While still relatively new, we believe Hooks will fundamentally
            change how most developers write React.
          </p>
          <Button href={links.spectrum}>Join us on Spectrum &rarr;</Button>
        </div>
      </div>
      <style jsx>{`
        .column {
          text-align: left;
        }
        // CSS only media query for tablet
        @media screen and (max-width: 960px) {
          .row {
            flex-direction: column;
            margin: -1.5rem 0;
          }
          .column {
            width: 100%;
            padding: 1.5rem 0;
            text-align: center;
            max-width: 350px;
          }
        }
      `}</style>
    </Container>
  </Container>
)
