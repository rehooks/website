import { useState } from 'react'
import withFrame from './frame'
import Code from './code'

const IndexFile = () => (
  <Code>{`import { useState } from 'react'

function Example() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
`}</Code>
)

const IndexPage = withFrame(() => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
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
        A Hook is a special function that lets you “hook into” React features.
        For example, <code>useState</code> is a Hook that lets you add React
        state to function components.
      </p>
    </>
  )
}
