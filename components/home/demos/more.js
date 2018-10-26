import Link from 'next/link'
import withPure from '../../hoc/pure'

import ArrowRightLong from '../../icons/arrow-right-long'

const EXAMPLES = []

const ExampleCard = withPure(({ name, href, description }) => (
  <Link href={href}>
    <a target="_blank">
      <span className="example-container">
        <span className="example-name fw6 f5">{name}</span>
        <span className="example-desc f6">{description}</span>
        <span className="example-link fw6 f6">
          See this example{' '}
          <span className="icon">
            <ArrowRightLong size="14" color="#2195ff" />
          </span>
        </span>
        <style jsx>{`
          .example-container {
            display: block;
            height: 100%;
            margin: 0 0.5rem;
            padding: 0.5rem 0.8rem;
            border-radius: 7px;
            background-color: rgba(255, 255, 255, 0.05);
            border: 1px solid;
            border-color: #484848;
            transition: border-color 0.1s ease;
          }
          .example-name {
            display: block;
            margin-bottom: 0.5rem;
            color: #f3f3f3;
          }
          .example-desc {
            display: block;
            margin-bottom: 0.2rem;
            color: #ccc;
          }
          .example-container:hover {
            border-color: #2195ff;
          }
          .example-link {
            color: #2195ff;
            opacity: 0;
            transition: opacity 0.1s ease;
          }
          .icon {
            vertical-align: text-top;
          }
          .example-container:hover .example-link {
            opacity: 1;
          }
          // CSS only media query for mobile
          @media screen and (max-width: 640px) {
            .example-link {
              opacity: 1;
            }
          }
        `}</style>
      </span>
    </a>
  </Link>
))

export default {
  type: [],
  tabs: [],
  getBody: ({ isTablet, isMobile }) => (
    <div className="example-row">
      {(isMobile
        ? EXAMPLES.slice(0, 5)
        : isTablet
          ? EXAMPLES.slice(0, 8)
          : EXAMPLES
      ).map((example, index) => (
        <div className="example-col" key={index}>
          <ExampleCard {...example} />
        </div>
      ))}
      <div className="example-col">
        <Link href="https://github.com/rehooks/examples/tree/master/examples">
          <a target="_blank">
            <span className="more">
              <span
                className="f5 fw6"
                style={{ color: '#f3f3f3', marginBottom: '.2rem' }}
              >
                github.com/rehooks/examples
              </span>
              <span className="f5">150+ examples</span>
            </span>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .example-row {
          display: flex;
          margin: 0 1rem;
          width: 100%;
          flex-wrap: wrap;
        }
        .example-col {
          flex: 1 0 25%;
          min-width: 200px;
          margin-bottom: 1rem;
          align-content: stretch;
          text-align: left;
        }
        .more {
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: center;
          align-items: center;
          margin: 0 0.5rem;
          padding: 0.5rem 0.8rem;
        }
      `}</style>
    </div>
  )
}
