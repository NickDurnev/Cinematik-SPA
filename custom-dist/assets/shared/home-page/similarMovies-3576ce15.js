import{n as s,a,P as p,j as t,L as x}from"../../vendor-446e3497.js";import{S as v,N as L,A as g,a as u,b as f}from"../../swiper-82c7b89e.js";import{r as l}from"../../react-responsive-ef441892.js";import{e,b as y}from"../../common-c2210d67.js";const b=s.div`
  width: 300px;
  margin: 0 auto;
  padding-bottom: 40px;
  overflow: hidden;

  @media ${e.tablet} {
    width: 640px;
  }

  @media ${e.laptopM} {
    width: 1300px;
    padding-bottom: 60px;
  }

  @media ${e.laptopL} {
    width: 1650px;
    padding-bottom: 80px;
  }
`,j=s(v)`
  position: relative;
`,S=s.div`
  position: absolute;
  top: 40%;
  left: 0;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;

  @media ${e.laptopL} {
    top: 45%;
  }
`,E=s.div`
  position: absolute;
  top: 40%;
  right: 0;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;

  @media ${e.laptopL} {
    top: 45%;
    right: 15px;
  }
`,M=i=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},a.createElement("path",{d:"M10.1767 12.2373L13.9393 16L13.586 16.3533L8.93966 11.707L13.586 7.06066L13.9393 7.414L10.1767 11.1767L9.64634 11.707L10.1767 12.2373Z",fill:"white",stroke:"white",strokeWidth:1.5})),N=i=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},a.createElement("path",{d:"M12.8233 10.7627L9.06066 7L9.414 6.64666L14.0603 11.293L9.414 15.9393L9.06066 15.586L12.8233 11.8233L13.3537 11.293L12.8233 10.7627Z",fill:"white",stroke:"white",strokeWidth:1.5})),$=({movies:i,location:d,onAutoPlay:h=!1})=>{const m=l.useMediaQuery({query:e.tablet}),c=l.useMediaQuery({query:e.laptopM}),w=l.useMediaQuery({query:e.laptopL});let r=null;h?r={delay:5e3}:r={delay:2e6};let o=1;return m&&(o=2),c&&(o=4),w&&(o=5),t.jsx(b,{children:t.jsxs(j,{modules:[L,g,u],spaceBetween:10,slidesPerView:o,navigation:{prevEl:".prev",nextEl:".next"},autoplay:{...r},children:[t.jsx(S,{className:"prev",children:t.jsx(M,{width:60,height:60})}),i.map(n=>t.jsx(f,{children:t.jsx(x,{to:`/movies/${n.id}`,state:{from:{location:d}},children:t.jsx(y,{movie:n})})},n.id)),t.jsx(E,{className:"next",children:t.jsx(N,{width:60,height:60})})]})})};$.propTypes={movies:p.arrayOf(p.object),onAutoPlay:p.bool};export{$ as S};
