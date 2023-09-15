import{G as d,H as x,j as t,n as l,V as g}from"./vendor-373470ad.js";import{D as h}from"./DefaultMovieImage-d6b5fbbf.js";import{d as c}from"./index-22f69c02.js";var p={},u=x;Object.defineProperty(p,"__esModule",{value:!0});var s=p.default=void 0,f=u(d()),m=t,v=(0,f.default)((0,m.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");s=p.default=v;const b=e=>{const r=window.localStorage.getItem("moviesGenres");if(!r)return;const o=JSON.parse(r);let i=null,a=null;return o&&e.length>0&&(i=o.find(({id:n})=>n===e[0]),a=i.name),a},j=l.div`
  position: relative;
`,w=l.div`
  width: 310px;
  height: 465px;
  overflow: hidden;
  background-color: ${({poster_path:e})=>!e&&"#666666"};
  color: ${({theme:e})=>e.linkColor};

  & > div {
    height: 100%;
  }

  & img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: linear-gradient(
      180deg,
      rgba(29, 29, 29, 0) 0%,
      rgba(29, 29, 29, 0.8) 80.79%
    );
  }

  & svg {
    width: 150px;
    height: auto;
    stroke: currentColor;
  }

  & p {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: ${({theme:e})=>e.textColor};
    word-break: break-all;
    white-space: normal;

    @media ${c.tablet} {
      font-weight: 400;
      font-size: 18px;
    }
  }
`,k=l.span`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  font-size: 16px;
  line-height: 16px;
  background: rgba(29, 29, 29, 0.5);
  backdrop-filter: blur(2px);
  border-radius: 0px 10px;
  color: ${({theme:e})=>e.linkColor};
`,_=l.div`
  width: 100%;
  height: 90px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 15px 10px;
  text-align: start;
  background: ${({theme:e})=>e.navBarBgColor};
  backdrop-filter: blur(12px);
`,F=({movie:e})=>{const{poster_path:r,title:o,vote_average:i,genre_ids:a}=e;let n=null;return a&&(n=b(a)),t.jsx(w,{poster_path:r,children:t.jsxs(j,{children:[n&&t.jsx(k,{children:n}),r?t.jsx("img",{src:`https://image.tmdb.org/t/p/w400${r}`,alt:o}):t.jsx(h,{}),t.jsxs(_,{children:[t.jsx("p",{children:o}),i>0&&t.jsx(g,{name:"read-only",value:+i.toFixed(1)/2,readOnly:!0,precision:.5,icon:t.jsx(s,{fontSize:"inherit",style:{width:"18px",height:"18px",stroke:"#FFDF37"}}),emptyIcon:t.jsx(s,{fontSize:"inherit",style:{width:"18px",height:"18px",stroke:"#FFDF37"}})})]})]})})};export{F as M};
