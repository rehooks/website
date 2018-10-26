import WordSlider from '../word-slider'

export default () => (
  <div className="slider-container">
    <WordSlider duration={1800}>
      <span>Everything</span>
      <span>Device Orientation</span>
      <span>Online Status</span>
      <span>Component Resizing</span>
      <span>Document Visibility</span>
      <span>Input Values</span>
      <span>Network Status</span>
      <span>Window Resizing</span>
    </WordSlider>
    <style jsx>{`
      .slider-container {
        margin: auto;
        margin-top: 0;
        margin-bottom: -1rem;
        line-height: 1.4em;
        white-space: nowrap;
      }
    `}</style>
  </div>
)
