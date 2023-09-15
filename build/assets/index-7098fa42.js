import{r as n,u as W,z as S,W as T,j as e,D as F,n as C,F as B,d as O,m as R,a as L,O as _}from"./vendor-373470ad.js";import{c as N,m as P}from"./moviesIDBService-2b8b2360.js";import{d as z}from"./SentimentVeryDissatisfied-567dc3d3.js";import{u as A,S as Q,a as G,d as $,T as J}from"./index-22f69c02.js";import{G as U}from"./GoBackButton-1a33da40.js";import{a as V,b as q,c as H}from"./moviesAPI-680262f9.js";import{D as K}from"./DefaultMovieImage-d6b5fbbf.js";import{C as X,I as Y,a as Z,M as ee,b as te,B as se,c as re,d as D}from"./MovieInfo.styled-d1c12115.js";import{M as ae}from"./Modal-07478869.js";import{N as oe}from"./Notify-f3b59ba3.js";import{a as ie}from"./animations-5f4924b3.js";import"./index-e2daedf6.js";const ne=({movieData:t,handleTrailerToggle:c})=>{const[p,I]=n.useState(!0),[o,f]=n.useState(null),[x]=A("userID",null),w=W(),{id:d,poster_path:m,release_date:g,vote_average:E,title:l,tagline:v,runtime:u,overview:M,budget:h,genres:j}=t,y={idbID:d,poster_path:m,title:l,vote_average:E,genres:j,release_date:g,tagline:v,runtime:u,overview:M,budget:h},s=S(["addFavoriteMovie",{userID:x,dataToFetch:y}],V,{refetchOnWindowFocus:!1,enabled:!1,retry:!1}),r=S(["addWatchedMovie",{userID:x,dataToFetch:y}],q,{refetchOnWindowFocus:!1,enabled:!1,retry:!1}),b=S(["checkCategoryById",{userID:x,id:d}],H,{retry:!1,enabled:p});return n.useEffect(()=>{if(b.isSuccess){const{category:i}=b.data.data;I(!1),i&&f(i)}},[b]),n.useEffect(()=>{var i;if(s.isSuccess){const{category:a}=s.data.data.movie;a&&f(a)}if(s.isError){const a=(i=s.error.response)==null?void 0:i.data;a&&T.error(a.message)}},[s.isSuccess,s.isError]),n.useEffect(()=>{var i;if(r.isSuccess&&o!=="watched"){const{category:a}=r.data.data.movie;a&&f(a)}if(r.isError){const a=(i=r.error.response)==null?void 0:i.data;a&&T.error(a.message)}},[r.isSuccess,r.isError]),e.jsxs(X,{children:[e.jsx(Y,{poster_path:m,children:m?e.jsx("img",{src:`https://image.tmdb.org/t/p/w400${m}`,alt:l}):e.jsx(K,{})}),e.jsxs(Z,{children:[e.jsx("h2",{children:l}),v?e.jsxs("h3",{children:['"',v,'"']}):"",e.jsx("p",{children:M}),e.jsxs(ee,{children:[e.jsxs("li",{children:[e.jsx("p",{children:"Release date:"}),u?e.jsx("p",{children:"Runtime:"}):"",h?e.jsx("p",{children:"Budget:"}):""]}),e.jsxs("li",{children:[e.jsxs("p",{children:[" ",g]}),u?e.jsxs("p",{children:[u," minutes "]}):"",h?e.jsxs("p",{children:[h," $"]}):""]})]}),e.jsx(te,{children:j.map(({id:i,name:a})=>e.jsx("li",{children:e.jsx(F,{to:`/movies/by_genre=${i}`,state:{from:{location:w}},children:a})},i))}),e.jsxs(se,{children:[e.jsx(re,{type:"button",padding:"10px",onClick:c,children:"Watch Trailer"}),o?e.jsxs(D,{onClick:()=>r.refetch(),type:"button",disabled:o==="watched",children:["Add to watched",e.jsx(Q,{})]}):e.jsxs(D,{onClick:()=>s.refetch(),type:"button",disabled:o==="watched",children:["Add to favorites",e.jsx(G,{})]})]})]})]})},ce=C.div`
  width: 90%;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${$.tablet} {
    width: 90%;
    margin: 100px auto;
  }

  @media ${$.laptopM} {
    width: 950px;
  }
`,k=C(F)`
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

  @media ${$.tablet} {
    font-size: 18px;
    line-height: 21px;
  }
`,le=({movieID:t,prevLocationState:c})=>e.jsxs(ce,{children:[e.jsx(k,{to:`/movies/${t}/cast`,state:{...c},children:"Cast"}),e.jsx(k,{to:`/movies/${t}/reviews`,state:{...c},children:"Reviews"}),e.jsx(k,{to:`/movies/${t}/similar_movies`,state:{...c},children:"Similar Movies"})]}),de=C.iframe`
  width: 360px;
  height: 230px;
  border: none;
  border-radius: 5px;

  @media ${$.tablet} {
    width: 600px;
    height: 400px;
  }
`,fe=({youtubeURL:t,movieTrailer:c})=>e.jsx(de,{src:`${t}${c}?autoplay=0&mute=0&controls=1`,title:"video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),me=()=>{var j,y;const{movieID:t}=B();let c=O();const p=W(),I=n.useRef("https://www.youtube.com/embed/"),[o,f]=n.useState(null),[x,w]=n.useState(!1),[d,m]=n.useState(null);n.useEffect(()=>{p.state?f(p.state):f(null)},[]);const g=async s=>{if(!s){w(!1);return}if(w(!0),!d)try{const r=await E();sessionStorage.setItem("trailer",JSON.stringify(r)),r&&(console.log("TRAILER",r),m({key:r.key}))}catch(r){return T.error(`Error: ${r.message}`)}},E=async()=>{if(t)try{const s=await N(t);return console.log(s),s.find(({name:b})=>b.includes("Official"))??s[0]}catch(s){T.error(`Error: ${s.message}`)}},{data:l,error:v,isLoading:u,isError:M,isSuccess:h}=S(["movieDetails",{movieID:t}],P,{refetchOnWindowFocus:!1,staleTime:6e4,cacheTime:6e4});if(n.useEffect(()=>{if(l===404){const s=localStorage.getItem("movieID");c(`/movies/${s}`)}},[l,c]),u)return e.jsx(J,{});if(M)return T.error(`Error: ${v.message}`);if(h&&l!==404)return localStorage.setItem("movieID",JSON.stringify(+t)),e.jsxs(R.div,{initial:"closed",animate:"open",exit:"exit",variants:ie,children:[e.jsx(U,{path:((j=o==null?void 0:o.from)==null?void 0:j.location)??((y=o==null?void 0:o.from)==null?void 0:y.prevLocation)??"/",state:{from:{location:p}}}),typeof l=="object"&&e.jsx(ne,{movieData:l,handleTrailerToggle:s=>g(s)}),e.jsx(le,{movieID:t,prevLocationState:o}),e.jsx(L,{children:x&&e.jsxs(ae,{onModal:s=>g(s),children:[d&&e.jsx(fe,{youtubeURL:I.current,movieTrailer:d.key}),!d&&e.jsxs(oe,{children:[e.jsx("h2",{children:"We don't have trailer for this movie"}),e.jsx(z,{sx:{fontSize:70,mt:1}})]})]})}),e.jsx(_,{})]})},Se=me;export{Se as default};
