import useWindowSize from '@rehooks/window-size'
import withFrame from './frame'
import Code from './code'

const IndexFile = () => (
  <Code>{`import useWindowSize from '@rehooks/window-size'

function Example() {
  let windowSize = useWindowSize()
  // { innerWidth, innerHeight,
  //   outerWidth, outerHeight }

  return (
    <pre>
      {JSON.stringify(windowSize, null, 2)}
    </pre>
  )
}
`}</Code>
)

const IndexPage = withFrame(() => {
  let windowSize = useWindowSize()

  return <pre>{JSON.stringify(windowSize, null, 2)}</pre>
})

export default {
  type: ['editor', 'browser'],
  tabs: ['Code', 'Website'],
  editor1: {
    editorTabs: ['index.js'],
    editorMapping: {
      'index.js': IndexFile
    }
  },
  browser2: {
    browserTabs: ['http://localhost:3000'],
    browserMapping: {
      'http://localhost:3000': IndexPage
    }
  },
  note: (
    <>
      <p>
        Effect Hooks let you tell React that your component needs to do
        something after render. By default, they run on every render but that
        can be customized.
      </p>
    </>
  )
}
