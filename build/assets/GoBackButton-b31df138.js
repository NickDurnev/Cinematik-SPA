import{r as e,n as i,e as p,j as o,D as a}from"./vendor-373470ad.js";import{d as n}from"./index-d3864d42.js";const s=t=>e.createElement("svg",{width:45,height:14,viewBox:"0 0 45 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{d:"M7 13L1 7L7 1"}),e.createElement("path",{d:"M45 7L1 7"})),l=i(p)`
  position: absolute;
  top: 55px;
  left: 50px;
  z-index: 2;
  color: ${({theme:t})=>t.textColor};
  width: 60px;
  height: 60px;
  transition: all ${({theme:t})=>t.hoverTransition} ${({theme:t})=>t.hoverTimeFunction};

  & > svg {
    stroke: currentColor;
    width: 40px;
    height: 40px;
  }

  &:hover,
  &:focus {
    color: ${({theme:t})=>t.linkColor};
  }

  @media ${n.tablet} {
    top: 15px;
    left: 85px;
  }

  @media ${n.laptopM} {
    left: 100px;
  }

  @media ${n.laptopL} {
    top: 85px;
    left: 200px;
  }
`,h=({path:t,state:r})=>o.jsx(a,{to:t,state:{state:r},children:o.jsx(l,{children:o.jsx(s,{})})});export{h as G};
