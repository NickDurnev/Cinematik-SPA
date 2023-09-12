import{n as a,m as s,l as d,j as e}from"../../vendor-446e3497.js";import{q as c}from"../../common-c2210d67.js";const m=a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({theme:o})=>o.backdropColor};
  color: ${({theme:o})=>o.textColor};
  overflow-y: scroll;
`,p=a(s.div)`
  position: absolute;
  top: ${({positiony:o})=>o??"50%"};
  left: ${({positionx:o})=>o??"50%"};
  padding: ${({padding:o})=>o??null};
  background-color: ${({bcgcolor:o})=>o?"#aba7a731":"transparent"};
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  font-weight: ${({theme:o})=>o.mainTextFontWeight};
`,x=document.querySelector("#modal-root"),u=o=>{const{children:r,onModal:t,...n}=o,l=i=>{i.target.nodeName==="DIV"&&t&&t(!1)};return d.createPortal(e.jsx(m,{onClick:l,children:e.jsx(p,{initial:"closed",animate:"open",exit:"closed",variants:c,...n,children:r})}),x)};export{u as M};
