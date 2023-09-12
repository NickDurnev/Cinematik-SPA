import{n as u,L as y,b as g,u as f,j as t,a as h,c as I,d as $,W as b,m as D}from"./vendor-446e3497.js";import{C as k,I as w,M}from"./shared/actorDetailsPage/movieDetailsPage-aa64b57f.js";import{D as C}from"./shared/actorDetailsPage/cast-12a29332.js";import{e as m,T as E,p as S,G as T,g as P}from"./common-c2210d67.js";import"./axios-d95ca511.js";const A=u.div`
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
`,L=u(y)`
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
`,_=({data:e})=>{const c=g(),{actorID:d}=f(),{biography:o,profile_path:a,name:r,birthday:i,deathday:n,gender:p,place_of_birth:l,popularity:s}=e;return t.jsxs(k,{children:[t.jsx(A,{profile_path:a,children:a?t.jsx("img",{src:`https://image.tmdb.org/t/p/w400${a}`,alt:r}):t.jsx(C,{})}),t.jsxs(w,{children:[t.jsx("h2",{children:r}),t.jsx("p",{children:o}),t.jsxs(M,{children:[t.jsxs("li",{children:[i?t.jsx("p",{children:"Birthday date:"}):null,n?t.jsx("p",{children:"Deathday:"}):null,p?t.jsx("p",{children:"Gender:"}):null,l?t.jsx("p",{children:"Place of birthday:"}):null,s?t.jsx("p",{children:"Rating:"}):null]}),t.jsxs("li",{children:[i&&t.jsxs("p",{children:[" ",i]}),n&&t.jsx("p",{children:n}),p===1?t.jsx("p",{children:"Female"}):t.jsx("p",{children:"Male"}),l&&t.jsx("p",{children:l}),s?t.jsx("p",{children:s.toFixed(1)}):null]})]}),t.jsx(L,{to:`/moviesbyactor/${d}`,state:{from:{location:c}},children:"Movies"})]})]})},B=()=>{var s,x;const[e,c]=h.useState(null),{actorID:d}=f(),o=g();let a=I();h.useEffect(()=>{o.state?c(o.state):c(null)},[o.state]);const{data:r,error:i,isLoading:n,isError:p,isSuccess:l}=$(["movieDetails",{actorID:d}],P,{staleTime:6e4,cacheTime:6e4});if(h.useEffect(()=>{if(r===404){const j=localStorage.getItem("actorID"),v=localStorage.getItem("movieId");a(`/movies/${v}/cast/actor/${j}`)}},[r,a]),n)return t.jsx(E,{});if(p)return b.error(`Error: ${i.message}`);if(l&&r!==404)return localStorage.setItem("actorID",JSON.stringify(+d)),t.jsxs(D.div,{initial:"closed",animate:"open",exit:"exit",variants:S,children:[t.jsx(T,{path:((s=e==null?void 0:e.from)==null?void 0:s.location)??((x=e==null?void 0:e.from)==null?void 0:x.prevLocation)??"/",state:{from:{location:o}}}),typeof r=="object"&&t.jsx(_,{data:r})]})},z=B;export{z as default};
