import useInputValue from '@rehooks/input-value'
import withFrame from './frame'
import Code from './code'

const IndexFile = () => (
  <Code>{`import useInputValue from '@rehooks/input-value'

function Example() {
  let name = useInputValue('Jamie')
  // name = { value: 'Jamie', onChange: [Function] }

  return (
    <div>
      <input {...name} />
      <p>Hi {name.value}!</p>
    </div>
  )
}`}</Code>
)

const IndexPage = withFrame(() => {
  let name = useInputValue('Jamie')

  return (
    <>
      <input {...name} />
      <p>Hi {name.value}!</p>
    </>
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
        You can return an object from your Hook to simplify connecting your
        components to state without introducing classes. That's what Stateful
        Hooks are for!
      </p>
    </>
  )
}
