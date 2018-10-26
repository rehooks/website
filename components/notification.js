import Link from 'next/link'
import { ellipsis } from 'polished'

import { MediaQueryConsumer } from './media-query'
import Container from './container'
import withPure from './hoc/pure'

export default withPure(({ href, title, titleMobile, children }) => (
  <MediaQueryConsumer>
    {({ isMobile }) => (
      <div className="notification f6" title={title}>
        <style jsx>
          {`
            .notification {
              width: 100%;
              height: 32px;
              text-align: center;
              background: #20232a;
              display: flex;
              align-items: center;
              justify-content: space-around;
            }
            a {
              color: #61dafb;
            }
            a:hover {
              color: #449cb4;
            }
          `}
        </style>
        <Container style={ellipsis()}>
          <Link href={href}>
            <a>{isMobile && titleMobile ? titleMobile : children}</a>
          </Link>
        </Container>
      </div>
    )}
  </MediaQueryConsumer>
))
