import Container from '../container'
import Tabs from '../tabs'
import Editor from './editor'
import Browser from './browser'
import { MediaQueryConsumer } from '../media-query'

import TabButton from './tab-button'

const DEMO_DATA = {
  'Stateful Counter': require('./demos/stateful-counter').default,
  'Stateful Input': require('./demos/stateful-input').default,
  'Window Resizer': require('./demos/window-size').default
  // 'More...': require('./demos/more').default
}

export default () => {
  return (
    <MediaQueryConsumer>
      {({ isMobile, isTablet }) => (
        <Container id="examples" center dark wide role="region">
          <Container center>
            <Tabs data={Object.keys(DEMO_DATA)} anchor>
              {(onSelect, selectedId, selectedIndex) => (
                <div>
                  <style jsx>{`
                    .demo-header {
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      margin: 2rem 0;
                    }
                    .demo-body {
                    }
                    .demo-footer {
                      display: flex;
                      margin: 2rem 0;
                      align-items: flex-start;
                      justify-content: space-between;
                    }
                    .note {
                      max-width: 620px;
                      text-align: left;
                    }
                    .note :global(p) {
                      margin-top: 0;
                    }
                    .note :global(p):last-of-type {
                      margin-bottom: 0;
                    }
                    // CSS only media query for mobile
                    @media screen and (max-width: 960px) {
                      .demo-header {
                        flex-wrap: wrap;
                      }
                      .demo-footer {
                        flex-direction: column;
                        align-items: center;
                      }
                    }
                  `}</style>
                  <div className="demo-header">
                    {Object.keys(DEMO_DATA).map(id => (
                      <TabButton
                        invert
                        className="tab"
                        key={`tab-${id}`}
                        isMobile={isMobile}
                        selected={selectedId === id}
                        onClick={() => onSelect(id)}
                      >
                        {id}
                      </TabButton>
                    ))}
                    <TabButton
                      invert
                      className="tab"
                      isMobile={isMobile}
                      href="https://github.com/rehooks"
                    >
                      More...
                    </TabButton>
                  </div>
                  <div className="demo-body row">
                    {isTablet &&
                      (() => {
                        let data = DEMO_DATA[selectedId]
                        if (!data.type.length) {
                          return data.getBody({ isTablet, isMobile }) || null
                        }

                        return (
                          <div className="column">
                            <Tabs data={data.tabs}>
                              {(onSelect, _selectedId, selectedIndex) => {
                                let content = null
                                let data = DEMO_DATA[selectedId]
                                if (_selectedId === data.tabs[0]) {
                                  content =
                                    data.type[0] === 'editor' ? (
                                      <Editor data={data.editor1} />
                                    ) : (
                                      <Browser data={data.browser1} />
                                    )
                                } else {
                                  content =
                                    data.type[1] === 'editor' ? (
                                      <Editor data={data.editor2} />
                                    ) : (
                                      <Browser data={data.browser2} />
                                    )
                                }
                                return (
                                  <div>
                                    {content}
                                    <br />
                                    <TabButton
                                      invert
                                      light
                                      isMobile={true}
                                      selected={_selectedId === data.tabs[0]}
                                      onClick={() => onSelect(data.tabs[0])}
                                    >
                                      {data.tabs[0]}
                                    </TabButton>
                                    <TabButton
                                      invert
                                      light
                                      isMobile={true}
                                      selected={_selectedId === data.tabs[1]}
                                      onClick={() => onSelect(data.tabs[1])}
                                    >
                                      {data.tabs[1]}
                                    </TabButton>
                                  </div>
                                )
                              }}
                            </Tabs>
                          </div>
                        )
                      })()}
                    {!isTablet &&
                      (() => {
                        let data = DEMO_DATA[selectedId]
                        if (!data.type.length) {
                          return data.getBody({}) || null
                        }

                        let content1 =
                          data.type[0] === 'editor' ? (
                            <Editor data={data.editor1} />
                          ) : (
                            <Browser data={data.browser1} />
                          )
                        let content2 =
                          data.type[1] === 'editor' ? (
                            <Editor data={data.editor2} />
                          ) : (
                            <Browser data={data.browser2} />
                          )

                        return (
                          <>
                            <div className="column">{content1}</div>
                            <div className="column">{content2}</div>
                          </>
                        )
                      })()}
                  </div>
                  <div className="demo-footer">
                    <div className="note">{DEMO_DATA[selectedId].note}</div>
                  </div>
                </div>
              )}
            </Tabs>
          </Container>
        </Container>
      )}
    </MediaQueryConsumer>
  )
}
