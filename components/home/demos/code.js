import Highlight from 'react-highlight/lib/optimized'

export default ({ lang, children }) => (
  <div className="f5 editor" style={{ padding: '1rem' }}>
    <style jsx global>{`
      .editor pre {
        margin: 0;
        white-space: pre-wrap;
        color: #c3c3c3;
      }
      .editor .hljs {
        color: #c3c3c3;
      }
      .editor .hljs .hljs-keyword,
      .editor .hljs .hljs-tag,
      .editor .hljs .hljs-attr {
        color: #f1f1f1;
        font-weight: 600;
      }
      .editor .hljs .hljs-comment {
        color: #525252;
      }
      .editor .hljs-string {
        color: #c3c3c3;
        font-weight: 400;
      }
    `}</style>
    {lang === 'none' ? (
      <pre className="hljs">
        <code>{children}</code>
      </pre>
    ) : (
      <Highlight
        className={lang || 'javascript'}
        languages={['json', 'xml', 'javascript']}
      >
        {children}
      </Highlight>
    )}
  </div>
)
