import{M as r}from"./shared/login-page/movieDetailsPage-ebd497f6.js";import{n as i,j as o,m as t}from"./vendor-446e3497.js";import{e as n,p as a}from"./common-c2210d67.js";import"./axios-d95ca511.js";const s="/dist/assets/loginpage_wallpaper_desktop-3dabb466.jpg",d="/dist/assets/loginpage_wallpaper_mobile-faed5669.jpg",p=i.div`
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
`,l=i.div`
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
`,c="https://cinematik.vercel.app/",g=()=>o.jsxs(l,{children:[o.jsx("p",{children:"Please, follow this link and verify "}),o.jsx("a",{href:c,children:"Click me"})]}),m=()=>o.jsx(o.Fragment,{children:o.jsx(t.div,{initial:"closed",animate:"open",exit:"exit",variants:a,children:o.jsx(p,{children:o.jsx(r,{padding:"30px",positiony:"30%",positionx:"50%",bcgcolor:"true",children:o.jsx(g,{})})})})}),f=m;export{f as default};
