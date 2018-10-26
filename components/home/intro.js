import classNames from 'classnames'
import Link from 'next/link'

import Logo from '../logo'
import Container from '../container'
import Button from '../button'
import Popover from '../popover'
import Campaign from './campaign'

import { links } from '../../site-manifest'

export default () => {
  return (
    <Container
      role="main"
      wide
      center
      overflow
      dotBackground
      minHeight={564}
      mobileStyle={'min-height: 460px;'}
      style={{
        display: 'flex',
        alignItems: 'flex-end'
      }}
    >
      <Container>
        <div className="intro-container">
          <style jsx>{`
            .intro-container {
              margin: 0 0 2rem 0;
              overflow: visible;
            }
            h2 {
              margin-top: 1rem;
              margin-bottom: 2rem;
            }
            .main-button {
              margin-bottom: 2rem;
            }
            .links {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .links > * {
              padding: 0 0.5rem;
            }
            .campaign {
              width: 100%;
              letter-spacing: -0.02rem;
              overflow: hidden;
              pointer-events: none;
              cursor: default;
              z-index: -1;
            }
            .f-xs-0 {
              font-size: 2.887rem; /* 2.566rem; /* 2.281rem; */
            }
            .f-xs-1 {
              font-size: 2.027rem; //.566rem;
            }
            .logo-main {
              display: flex;
              justify-content: center;
              color: #0076ff;
            }
            .logo-main .version {
              margin-left: -0.2rem;
              margin-top: 0.4rem;
              cursor: pointer;
            }
            a.version {
              color: #0076ff;
            }
            .version .tip {
              color: #111;
              white-space: nowrap;
            }
            .title-1 {
              font-size: 1.802032470703125em;
            }
            .title-2 {
              font-size: 2.887rem;
              margin-top: -4.2rem;
              margin-bottom: 0;
            }
            .campaign {
              margin: 1rem 0 1.6rem;
            }
            // CSS only media query for mobile
            @media screen and (max-width: 640px) {
              .logo-main {
                display: none;
              }
              .title-1 {
                font-size: 1.423828125em;
              }
              .title-2 {
                font-size: 1.802032470703125em;
                margin-top: -2.4rem;
              }
              .campaign {
                margin: 0 0 2rem;
              }
            }
          `}</style>
          <div className="logo-main f4 fw6">
            <Logo size={80} />
          </div>
          <div className="campaign no-drag no-tap-highlight">
            <h1 className={classNames('title-1', 'fw6')}>React Hooks for</h1>
            <h2 className={classNames('title-2', 'fw7')}>
              <Campaign />
            </h2>
          </div>
          <div>
            <div className="main-button">
              <Button href="https://github.com/rehooks" invert>
                Check out on GitHub
              </Button>
            </div>
            <div className="links">
              <div>
                <Button href="/docs">View Docs</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  )
}
