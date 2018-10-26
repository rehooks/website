import Link from 'next/link'

import Container from './container'
import withPure from './hoc/pure'

import { links } from '../site-manifest'

export default withPure(() => (
  <Container wide>
    <Container>
      <footer>
        <style jsx>
          {`
            footer {
              padding: 2rem 0 4rem;
              min-height: 400px;
            }
            a,
            p,
            .copyright {
              color: #8c8c8c;
            }
            h4 a {
              color: inherit;
            }
            a:hover {
              color: #efefef;
            }
            .copyright {
              margin-top: 3rem;
            }
            .copyright div {
              margin-top: 0.5rem;
            }
            .row {
              align-items: flex-start;
            }
            h4 {
              margin-bottom: 0.75rem;
            }
            p {
              margin-top: 0;
              margin-bottom: 0.25rem;
            }
            * + h4 {
              margin-top: 1rem;
            }
            .row {
              justify-content: center;
            }
            .column {
              max-width: 300px;
              text-align: center;
            }
            // CSS only media query for mobile
            @media screen and (max-width: 640px) {
              footer .column {
                flex: 1 1 120px;
              }
              footer .row {
                flex-direction: row;
                flex-wrap: wrap;
              }
            }
          `}
        </style>
        <div className="row f5">
          <div className="column">
            <h4 className="fw5">
              <Link href="/docs">
                <a>Docs</a>
              </Link>
            </h4>
            <p>
              <Link href="/docs#faq">
                <a>FAQ</a>
              </Link>
            </p>
            <p>
              <Link href="/docs#setup">
                <a>Setup</a>
              </Link>
            </p>
            <p>
              <Link href="#examples">
                <a>Examples</a>
              </Link>
            </p>
            <p>
              <Link href="/docs#contributing">
                <a>Contributing</a>
              </Link>
            </p>
          </div>
          <div className="column">
            <h4 className="fw5">More</h4>
            <p>
              <Link href={links.logos}>
                <a rel="noreferrer" target="_blank">
                  Logos
                </a>
              </Link>
            </p>
            <p>
              <Link href="https://github.com/rehooks">
                <a rel="noreferrer" target="_blank">
                  GitHub
                </a>
              </Link>
            </p>
            <p>
              <Link href={links.spectrum}>
                <a rel="noreferrer" target="_blank">
                  Spectrum
                </a>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </Container>
  </Container>
))
