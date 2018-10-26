export default ({ color, size }) =>
  <svg viewBox="-2 0 20 16" width={size || "16"} height={size || "16"}>
    <g strokeWidth="2" fill={color || "#111111"} stroke={color || "#111111"}>
      <line fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="0.5" y1="8.5" x2="15.5" y2="8.5"></line> 
      <polyline fill="none" stroke={color || "#111111"} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="10.5,3.5 15.5,8.5 10.5,13.5 ">
      </polyline>
    </g>
  </svg>
