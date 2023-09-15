import{n as r,j as o,m as i}from"./vendor-373470ad.js";import{d as n}from"./index-22f69c02.js";import{p as t}from"./animations-5f4924b3.js";import{M as a}from"./Modal-07478869.js";const s="/assets/loginpage_wallpaper_desktop-3dabb466.jpg",d="/assets/loginpage_wallpaper_mobile-faed5669.jpg",p=r.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 100%
    ),
    url(${d});
  width: 100vw;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media ${n.tablet} {
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.9) 100%
      ),
      url(${s});

    width: 100vw;
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  & > div {
    padding-bottom: 100px;
  }
`,l=r.div`
  min-width: 280px;
  & > p {
    font-family: 'Technovier';
    font-size: 18px;
    color: ${({theme:e})=>e.textColor};
    margin-bottom: 20px;
  }
  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-family: 'Muller';
    font-size: 16px;
    line-height: 16px;
    text-transform: uppercase;
    width: 150px;
    padding: 20px;
    color: ${({theme:e})=>e.textColor};
    background-color: transparent;
    border: 1px solid ${({theme:e})=>e.textColor};
    border-radius: 10px;
    transition: all ${({theme:e})=>e.hoverTransition} ${({theme:e})=>e.hoverTimeFunction};

    &:hover,
    &:focus {
      background-color: #4847473c;
    }
  }
`,c="https://cinematik.vercel.app/",g=()=>o.jsxs(l,{children:[o.jsx("p",{children:"Please, follow this link and verify "}),o.jsx("a",{href:c,children:"Click me"})]}),m=()=>o.jsx(o.Fragment,{children:o.jsx(i.div,{initial:"closed",animate:"open",exit:"exit",variants:t,children:o.jsx(p,{children:o.jsx(a,{padding:"30px",positiony:"30%",positionx:"50%",bcgcolor:"true",children:o.jsx(g,{})})})})}),f=m;export{f as default};
