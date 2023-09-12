import{n as r,m as x,j as t,u,b as g,d as f,W as b,L as w}from"./vendor-446e3497.js";import{D as j}from"./shared/actorDetailsPage/cast-12a29332.js";import{d as $}from"./@mui/icons-material-2d86ad94.js";import{e as s,T as k,N as v,m as C}from"./common-c2210d67.js";import"./axios-d95ca511.js";const y=r(x.div)`
  width: 310px;
  height: 465px;
  margin: 0 auto;
  position: relative;
  background-color: ${({profile_path:e})=>!e&&"#666666"};
  color: ${({theme:e})=>e.linkColor};

  border-radius: 10px;

  & > img {
    width: 100%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  & svg {
    width: 120px;
    height: auto;
    stroke: currentColor;
  }
`,L=r.div`
  width: 100%;
  height: 70px;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({theme:e})=>e.navBarBgColor};
  backdrop-filter: blur(12px);
  text-align: start;
`,D=r.p`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: ${({theme:e})=>e.textColor};
  word-break: break-all;
  white-space: normal;
`,I=r.p`
  font-size: 16px;
  line-height: 16px;
  color: ${({theme:e})=>e.linkColor};
  word-break: break-all;
  white-space: normal;
`,N=({data:e})=>{const{character:o,name:i,profile_path:a}=e;return t.jsxs(y,{profile_path:a,initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},viewport:{once:!0},children:[a?t.jsx("img",{src:`https://image.tmdb.org/t/p/w300${a}`,alt:i}):t.jsx(j,{}),t.jsxs(L,{children:[t.jsx(D,{children:i}),t.jsx(I,{children:o})]})]})},T=r.ul`
  width: 300px;
  display: block;
  padding: 15px 0;
  margin: 0 auto;

  & > li + li {
    margin-top: 20px;

    @media ${s.tablet} {
      margin: 0;
    }
  }

  @media ${s.tablet} {
    width: 640px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    white-space: nowrap;
    gap: 10px;
    justify-items: center;
    align-items: stretch;
  }

  @media ${s.laptopM} {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${s.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`,W=()=>{const{movieID:e}=u(),o=g(),{pathname:i}=o,{data:a,error:l,isLoading:p,isError:c,isSuccess:d}=f(["movieCast",{movieID:e}],C,{staleTime:6e4,cacheTime:6e4});if(p)return t.jsx(k,{});if(c)return b.error(`Error: ${l.message}`);if(d)return a.cast.length===0?t.jsxs(v,{children:[t.jsx("h2",{children:"We don't have info about cast for this movie"}),t.jsx($,{sx:{fontSize:70,mt:1}})]}):t.jsx(T,{children:a.cast.map(n=>{const{id:m,cast_id:h}=n;return t.jsx("li",{children:t.jsx(w,{to:`${i}/actor/${m}`,state:{from:{location:o,label:"Go back to movie"}},children:t.jsx(N,{data:n})})},h)})})},B=W;export{B as default};
