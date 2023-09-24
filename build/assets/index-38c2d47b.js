import{r as o,u as C,z as M,W as v,j as e,D as W,n as D,F,d as B,m as O,a as R,O as L}from"./vendor-373470ad.js";import{c as _,m as N}from"./moviesIDBService-2b8b2360.js";import{d as P}from"./SentimentVeryDissatisfied-567dc3d3.js";import{u as z,S as A,a as Q,d as I,T as G}from"./index-d3864d42.js";import{G as J}from"./GoBackButton-b31df138.js";import{a as U,b as V,c as q}from"./moviesAPI-680262f9.js";import{D as H}from"./DefaultMovieImage-d6b5fbbf.js";import{C as K,I as X,a as Y,M as Z,b as ee,B as te,c as se,d as k}from"./MovieInfo.styled-136cac0f.js";import{M as re}from"./Modal-07478869.js";import{N as ae}from"./Notify-f3b59ba3.js";import{a as oe}from"./animations-5f4924b3.js";import"./index-e2daedf6.js";let $=!0;const ie=({movieData:t,handleTrailerToggle:n})=>{const[f,x]=o.useState(null),[i]=z("userID",null),j=C(),{id:y,poster_path:m,release_date:u,vote_average:S,title:h,tagline:g,runtime:c,overview:b,budget:p,genres:T}=t,w={idbID:y,poster_path:m,title:h,vote_average:S,genres:T,release_date:u,tagline:g,runtime:c,overview:b,budget:p},l=M(["addFavoriteMovie",{userID:i,dataToFetch:w}],U,{refetchOnWindowFocus:!1,enabled:!1,retry:!1}),d=M(["addWatchedMovie",{userID:i,dataToFetch:w}],V,{refetchOnWindowFocus:!1,enabled:!1,retry:!1}),s=M(["checkCategoryById",{userID:i,id:y}],q,{retry:!1,enabled:$});return o.useEffect(()=>{if((s.isError||s.isSuccess)&&($=!1),s.data){const{category:r}=s.data.data;r&&x(r)}},[s]),o.useEffect(()=>{var r;if(l.isSuccess){const{category:a}=l.data.data.movie;a&&x(a)}if(l.isError){const a=(r=l.error.response)==null?void 0:r.data;a&&v.error(a.message)}},[l.isSuccess,l.isError]),o.useEffect(()=>{var r;if(d.isSuccess&&f!=="watched"){const{category:a}=d.data.data.movie;a&&x(a)}if(d.isError){const a=(r=d.error.response)==null?void 0:r.data;a&&v.error(a.message)}},[d.isSuccess,d.isError]),o.useEffect(()=>()=>{$=!0},[]),e.jsxs(K,{children:[e.jsx(X,{poster_path:m,children:m?e.jsx("img",{src:`https://image.tmdb.org/t/p/w400${m}`,alt:h}):e.jsx(H,{})}),e.jsxs(Y,{children:[e.jsx("h2",{children:h}),g?e.jsxs("h3",{children:['"',g,'"']}):"",e.jsx("p",{children:b}),e.jsxs(Z,{children:[e.jsxs("li",{children:[e.jsx("p",{children:"Release date:"}),c?e.jsx("p",{children:"Runtime:"}):"",p?e.jsx("p",{children:"Budget:"}):""]}),e.jsxs("li",{children:[e.jsxs("p",{children:[" ",u]}),c?e.jsxs("p",{children:[c," minutes "]}):"",p?e.jsxs("p",{children:[p," $"]}):""]})]}),e.jsx(ee,{children:T.map(({id:r,name:a})=>e.jsx("li",{children:e.jsx(W,{to:`/movies/by_genre=${r}`,state:{from:{location:j}},children:a})},r))}),e.jsxs(te,{children:[e.jsx(se,{type:"button",padding:"10px",onClick:n,children:"Watch Trailer"}),f?e.jsxs(k,{onClick:()=>d.refetch(),type:"button",disabled:f==="watched",children:["Add to watched",e.jsx(A,{})]}):e.jsxs(k,{onClick:()=>l.refetch(),type:"button",disabled:f==="watched",children:["Add to favorites",e.jsx(Q,{})]})]})]})]})},ne=o.memo(ie),ce=D.div`
  width: 90%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${I.tablet} {
    width: 90%;
    margin: 100px auto;
  }

  @media ${I.laptopM} {
    width: 950px;
  }
`,E=D(W)`
  padding: 5px;
  font-family: 'Technovier';
  font-size: 15px;
  line-height: 17px;
  text-transform: uppercase;
  color: ${({theme:t})=>t.addBgElementColor};
  border-radius: 5px;
  background-color: inherit;
  transition: all ${({theme:t})=>t.hoverTransition} ${({theme:t})=>t.hoverTimeFunction};

  &:hover,
  &:focus,
  &:visited {
    color: ${({theme:t})=>t.textColor};
  }

  @media ${I.tablet} {
    font-size: 18px;
    line-height: 21px;
  }
`,le=({movieID:t,prevLocationState:n})=>e.jsxs(ce,{children:[e.jsx(E,{to:`/movies/${t}/cast`,state:{...n},children:"Cast"}),e.jsx(E,{to:`/movies/${t}/reviews`,state:{...n},children:"Reviews"}),e.jsx(E,{to:`/movies/${t}/similar_movies`,state:{...n},children:"Similar Movies"})]}),de=D.iframe`
  width: 360px;
  height: 230px;
  border: none;
  border-radius: 5px;

  @media ${I.tablet} {
    width: 600px;
    height: 400px;
  }
`,fe=({youtubeURL:t,movieTrailer:n})=>e.jsx(de,{src:`${t}${n}?autoplay=0&mute=0&controls=1`,title:"video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),me=()=>{var l,d;const{movieID:t}=F();let n=B();const f=C(),x=o.useRef("https://www.youtube.com/embed/"),[i,j]=o.useState(null),[y,m]=o.useState(!1),[u,S]=o.useState(null);o.useEffect(()=>{f.state?j(f.state):j(null)},[]);const h=async s=>{if(!s){m(!1);return}if(m(!0),!u)try{const r=await g();sessionStorage.setItem("trailer",JSON.stringify(r)),r&&(console.log("TRAILER",r),S({key:r.key}))}catch(r){return v.error(`Error: ${r.message}`)}},g=async()=>{if(t)try{const s=await _(t);return console.log(s),s.find(({name:a})=>a.includes("Official"))??s[0]}catch(s){v.error(`Error: ${s.message}`)}},{data:c,error:b,isLoading:p,isError:T,isSuccess:w}=M(["movieDetails",{movieID:t}],N,{refetchOnWindowFocus:!1,staleTime:6e4,cacheTime:6e4});if(o.useEffect(()=>{if(c===404){const s=localStorage.getItem("movieID");n(`/movies/${s}`)}},[c,n]),p)return e.jsx(G,{});if(T)return v.error(`Error: ${b.message}`);if(w&&c!==404)return localStorage.setItem("movieID",JSON.stringify(+t)),e.jsxs(O.div,{initial:"closed",animate:"open",exit:"exit",variants:oe,children:[e.jsx(J,{path:((l=i==null?void 0:i.from)==null?void 0:l.location)??((d=i==null?void 0:i.from)==null?void 0:d.prevLocation)??"/",state:{from:{location:f}}}),typeof c=="object"&&e.jsx(ne,{movieData:c,handleTrailerToggle:s=>h(s)}),e.jsx(le,{movieID:t,prevLocationState:i}),e.jsx(R,{children:y&&e.jsxs(re,{onModal:s=>h(s),children:[u&&e.jsx(fe,{youtubeURL:x.current,movieTrailer:u.key}),!u&&e.jsxs(ae,{children:[e.jsx("h2",{children:"We don't have trailer for this movie"}),e.jsx(P,{sx:{fontSize:70,mt:1}})]})]})}),e.jsx(L,{})]})},Ie=me;export{Ie as default};
