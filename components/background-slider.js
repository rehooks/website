export default ({ duration, children }) => (
  <div className="slider-container">
    <style jsx>{`
      .slider-container {
        overflow: hidden;
        white-space: nowrap;
      }
      .slider-content-wrapper {
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        animation: slide ${duration * 2 || 10}s linear infinite;
      }
      .slider-content-wrapper > div {
        display: inline-block;
      }
      @keyframes slide {
        from {
          transform: translate3d(0, 0, 0);
        }
        to {
          transform: translate3d(-50%, 0, 0);
        }
      }
    `}</style>
    <div className="slider-content-wrapper">
      <div>{children}</div>
      <div>{children}</div>
    </div>
  </div>
);
