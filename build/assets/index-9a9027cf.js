import{n as o,m as x,j as t,F as u,u as g,z as f,W as b,D as w}from"./vendor-373470ad.js";import{d as j}from"./SentimentVeryDissatisfied-567dc3d3.js";import{h as $}from"./moviesIDBService-2b8b2360.js";import{d as s,T as k}from"./index-22f69c02.js";import{D as v}from"./DefaultActorImage-9491d488.js";import{N as C}from"./Notify-f3b59ba3.js";import"./index-e2daedf6.js";import"./animations-5f4924b3.js";const y=o(x.div)`
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
`,D=o.div`
  width: 100%;
  height: 70px;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({theme:e})=>e.navBarBgColor};
  backdrop-filter: blur(12px);
  text-align: start;
`,L=o.p`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: ${({theme:e})=>e.textColor};
  word-break: break-all;
  white-space: normal;
`,z=o.p`
  font-size: 16px;
  line-height: 16px;
  color: ${({theme:e})=>e.linkColor};
  word-break: break-all;
  white-space: normal;
`,I=({data:e})=>{const{character:a,name:i,profile_path:r}=e;return t.jsxs(y,{profile_path:r,initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},viewport:{once:!0},children:[r?t.jsx("img",{src:`https://image.tmdb.org/t/p/w300${r}`,alt:i}):t.jsx(v,{}),t.jsxs(D,{children:[t.jsx(L,{children:i}),t.jsx(z,{children:a})]})]})},N=o.ul`
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
`,T=()=>{const{movieID:e}=u(),a=g(),{pathname:i}=a,{data:r,error:l,isLoading:p,isError:c,isSuccess:m}=f(["movieCast",{movieID:e}],$,{staleTime:6e4,cacheTime:6e4});if(p)return t.jsx(k,{});if(c)return b.error(`Error: ${l.message}`);if(m)return r.cast.length===0?t.jsxs(C,{children:[t.jsx("h2",{children:"We don't have info about cast for this movie"}),t.jsx(j,{sx:{fontSize:70,mt:1}})]}):t.jsx(N,{children:r.cast.map(n=>{const{id:d,cast_id:h}=n;return t.jsx("li",{children:t.jsx(w,{to:`${i}/actor/${d}`,state:{from:{location:a,label:"Go back to movie"}},children:t.jsx(I,{data:n})})},h)})})},G=T;export{G as default};
