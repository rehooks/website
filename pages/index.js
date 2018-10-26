import Page from '../components/page'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Notification from '../components/notification'
import { MediaQueryConsumer } from '../components/media-query'

import Intro from '../components/home/intro'
import Demo from '../components/home/demo'
import Features from '../components/home/features'
import SocialMeta from '../components/social-meta'

export default () => (
  <Page title="Rehooks · React Hooks for Everything">
    <SocialMeta
      title="Rehooks"
      url="https://rehooks.com"
      image={'/static/images/og/home.png'}
      description="Rehooks is a set of packages to enable using React Hooks for everything"
    />
    <MediaQueryConsumer>
      {({ isMobile }) => (
        <Header
          height={32}
          offset={-32}
          distance={32}
          shadow
          active={isMobile ? 32 : 320}
        >
          <Notification
            href="https://reactjs.org/docs/hooks-intro.html"
            title="React Hooks was announced!"
            titleMobile="React Hooks was announced!"
          >
            React Hooks was just announced at ReactConf! Go to React docs to
            learn more &rarr;
          </Notification>
          <Navbar />
        </Header>
      )}
    </MediaQueryConsumer>
    <Intro />
    <Demo />
    <Features />
    {/* <Learn /> */}
    <Footer />
  </Page>
)
