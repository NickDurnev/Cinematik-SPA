import{n as f,D as y,u,F as g,j as t,r as h,d as D,z as I,W as $,m as b}from"./vendor-373470ad.js";import{d as k}from"./moviesIDBService-2b8b2360.js";import{p as w}from"./animations-5f4924b3.js";import{d as m,T as M}from"./index-d3864d42.js";import{G as C}from"./GoBackButton-b31df138.js";import{C as E,a as S,M as T}from"./MovieInfo.styled-136cac0f.js";import{D as P}from"./DefaultActorImage-9491d488.js";import"./index-e2daedf6.js";const A=f.div`
  width: 310px;
  height: 465px;
  background-color: ${({profile_path:e})=>!e&&"#666666"};
  color: ${({theme:e})=>e.linkColor};

  @media ${m.tablet} {
    width: 250px;
    height: 400px;
  }

  @media ${m.laptopM} {
    width: 400px;
    height: 600px;
  }

  & > img {
    width: 100%;
    height: 100%;
  }

  & svg {
    width: 150px;
    height: auto;
    stroke: currentColor;
  }
`,F=f(y)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  font-family: 'Muller';
  font-size: 20px;
  line-height: 20px;
  text-transform: uppercase;
  width: 140px;
  height: 70px;
  padding: ${({padding:e})=>e};
  color: ${({theme:e})=>e.textColor};
  background-color: transparent;
  border: 1px solid ${({theme:e})=>e.textColor};
  border-radius: 10px;
  transition: all ${({theme:e})=>e.hoverTransition} ${({theme:e})=>e.hoverTimeFunction};

  &:hover,
  &:focus {
    background-color: #4847473c;
  }
`,_=({data:e})=>{const c=u(),{actorID:d}=g(),{biography:o,profile_path:a,name:r,birthday:s,deathday:n,gender:p,place_of_birth:l,popularity:i}=e;return t.jsxs(E,{children:[t.jsx(A,{profile_path:a,children:a?t.jsx("img",{src:`https://image.tmdb.org/t/p/w400${a}`,alt:r}):t.jsx(P,{})}),t.jsxs(S,{children:[t.jsx("h2",{children:r}),t.jsx("p",{children:o}),t.jsxs(T,{children:[t.jsxs("li",{children:[s?t.jsx("p",{children:"Birthday date:"}):null,n?t.jsx("p",{children:"Deathday:"}):null,p?t.jsx("p",{children:"Gender:"}):null,l?t.jsx("p",{children:"Place of birthday:"}):null,i?t.jsx("p",{children:"Rating:"}):null]}),t.jsxs("li",{children:[s&&t.jsxs("p",{children:[" ",s]}),n&&t.jsx("p",{children:n}),p===1?t.jsx("p",{children:"Female"}):t.jsx("p",{children:"Male"}),l&&t.jsx("p",{children:l}),i?t.jsx("p",{children:i.toFixed(1)}):null]})]}),t.jsx(F,{to:`/moviesbyactor/${d}`,state:{from:{location:c}},children:"Movies"})]})]})},B=()=>{var i,x;const[e,c]=h.useState(null),{actorID:d}=g(),o=u();let a=D();h.useEffect(()=>{o.state?c(o.state):c(null)},[o.state]);const{data:r,error:s,isLoading:n,isError:p,isSuccess:l}=I(["movieDetails",{actorID:d}],k,{staleTime:6e4,cacheTime:6e4});if(h.useEffect(()=>{if(r===404){const j=localStorage.getItem("actorID"),v=localStorage.getItem("movieId");a(`/movies/${v}/cast/actor/${j}`)}},[r,a]),n)return t.jsx(M,{});if(p)return $.error(`Error: ${s.message}`);if(l&&r!==404)return localStorage.setItem("actorID",JSON.stringify(+d)),t.jsxs(b.div,{initial:"closed",animate:"open",exit:"exit",variants:w,children:[t.jsx(C,{path:((i=e==null?void 0:e.from)==null?void 0:i.location)??((x=e==null?void 0:e.from)==null?void 0:x.prevLocation)??"/",state:{from:{location:o}}}),typeof r=="object"&&t.jsx(_,{data:r})]})},Q=B;export{Q as default};
