import{r as n,u as W,z as S,W as b,j as e,D as F,n as k,F as B,d as R,m as O,a as L,O as _}from"./vendor-373470ad.js";import{c as N,m as P}from"./moviesIDBService-2b8b2360.js";import{d as z}from"./SentimentVeryDissatisfied-567dc3d3.js";import{u as A,S as Q,a as G,d as $,T as J}from"./index-e389a3ba.js";import{G as U}from"./GoBackButton-dab0c1df.js";import{a as V,b as q,c as H}from"./moviesAPI-680262f9.js";import{D as K}from"./DefaultMovieImage-d6b5fbbf.js";import{C as X,I as Y,a as Z,M as ee,b as te,B as se,c as re,d as C}from"./MovieInfo.styled-ae3645ad.js";import{M as ae}from"./Modal-07478869.js";import{N as oe}from"./Notify-f3b59ba3.js";import{a as ie}from"./animations-5f4924b3.js";import"./index-e2daedf6.js";const ne=({movieData:t,handleTrailerToggle:c})=>{const[h,E]=n.useState(!0),[o,f]=n.useState(null),[p]=A("userID",null),T=W(),{id:d,poster_path:m,release_date:x,vote_average:I,title:l,tagline:g,runtime:w,overview:M,budget:u,genres:v}=t,j={idbID:d,poster_path:m,title:l,vote_average:I,genres:v,release_date:x,tagline:g,runtime:w,overview:M,budget:u},s=S(["addFavoriteMovie",{userID:p,dataToFetch:j}],V,{refetchOnWindowFocus:!1,enabled:!1,retry:!1}),r=S(["addWatchedMovie",{userID:p,dataToFetch:j}],q,{refetchOnWindowFocus:!1,enabled:!1,retry:!1}),y=S(["checkCategoryById",{userID:p,id:d}],H,{retry:!1,enabled:h});return n.useEffect(()=>{if(y.isSuccess){const{category:i}=y.data.data;E(!1),i&&f(i)}},[y]),n.useEffect(()=>{var i;if(s.isSuccess){const{category:a}=s.data.data.movie;a&&f(a)}if(s.isError){const a=(i=s.error.response)==null?void 0:i.data;a&&b.error(a.message)}},[s.isSuccess,s.isError]),n.useEffect(()=>{var i;if(r.isSuccess&&o!=="watched"){const{category:a}=r.data.data.movie;a&&f(a)}if(r.isError){const a=(i=r.error.response)==null?void 0:i.data;a&&b.error(a.message)}},[r.isSuccess,r.isError]),e.jsxs(X,{children:[e.jsx(Y,{poster_path:m,children:m?e.jsx("img",{src:`https://image.tmdb.org/t/p/w400${m}`,alt:l}):e.jsx(K,{})}),e.jsxs(Z,{children:[e.jsx("h2",{children:l}),g!==""&&e.jsxs("h3",{children:['"',g,'"']}),e.jsx("p",{children:M}),e.jsxs(ee,{children:[e.jsxs("li",{children:[e.jsx("p",{children:"Release date:"}),e.jsx("p",{children:"Runtime:"}),u!==0&&e.jsx("p",{children:"Budget:"})]}),e.jsxs("li",{children:[e.jsxs("p",{children:[" ",x]}),e.jsxs("p",{children:[w," minutes "]}),u!==0&&e.jsxs("p",{children:[u," $"]})]})]}),e.jsx(te,{children:v.map(({id:i,name:a})=>e.jsx("li",{children:e.jsx(F,{to:`/movies/by_genre=${i}`,state:{from:{location:T}},children:a})},i))}),e.jsxs(se,{children:[e.jsx(re,{type:"button",padding:"10px",onClick:c,children:"Watch Trailer"}),o?e.jsxs(C,{onClick:()=>r.refetch(),type:"button",disabled:o==="watched",children:["Add to watched",e.jsx(Q,{})]}):e.jsxs(C,{onClick:()=>s.refetch(),type:"button",disabled:o==="watched",children:["Add to favorites",e.jsx(G,{})]})]})]})]})},ce=k.div`
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
`,D=k(F)`
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
`,le=({movieID:t,prevLocationState:c})=>e.jsxs(ce,{children:[e.jsx(D,{to:`/movies/${t}/cast`,state:{...c},children:"Cast"}),e.jsx(D,{to:`/movies/${t}/reviews`,state:{...c},children:"Reviews"}),e.jsx(D,{to:`/movies/${t}/similar_movies`,state:{...c},children:"Similar Movies"})]}),de=k.iframe`
  width: 360px;
  height: 230px;
  border: none;
  border-radius: 5px;

  @media ${$.tablet} {
    width: 600px;
    height: 400px;
  }
`,fe=({youtubeURL:t,movieTrailer:c})=>e.jsx(de,{src:`${t}${c}?autoplay=0&mute=0&controls=1`,title:"video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),me=()=>{var v,j;const{movieID:t}=B();let c=R();const h=W(),E=n.useRef("https://www.youtube.com/embed/"),[o,f]=n.useState(null),[p,T]=n.useState(!1),[d,m]=n.useState(null);n.useEffect(()=>{h.state?f(h.state):f(null)},[]);const x=async s=>{if(!s){T(!1);return}if(T(!0),!d)try{const r=await I();sessionStorage.setItem("trailer",JSON.stringify(r)),r&&(console.log("TRAILER",r),m({key:r.key}))}catch(r){return b.error(`Error: ${r.message}`)}},I=async()=>{if(t)try{const s=await N(t);return console.log(s),s.find(({name:y})=>y.includes("Official"))??s[0]}catch(s){b.error(`Error: ${s.message}`)}},{data:l,error:g,isLoading:w,isError:M,isSuccess:u}=S(["movieDetails",{movieID:t}],P,{refetchOnWindowFocus:!1,staleTime:6e4,cacheTime:6e4});if(n.useEffect(()=>{if(l===404){const s=localStorage.getItem("movieID");c(`/movies/${s}`)}},[l,c]),w)return e.jsx(J,{});if(M)return b.error(`Error: ${g.message}`);if(u&&l!==404)return localStorage.setItem("movieID",JSON.stringify(+t)),console.log("RENDER"),e.jsxs(O.div,{initial:"closed",animate:"open",exit:"exit",variants:ie,children:[e.jsx(U,{path:((v=o==null?void 0:o.from)==null?void 0:v.location)??((j=o==null?void 0:o.from)==null?void 0:j.prevLocation)??"/",state:{from:{location:h}}}),typeof l=="object"&&e.jsx(ne,{movieData:l,handleTrailerToggle:s=>x(s)}),e.jsx(le,{movieID:t,prevLocationState:o}),e.jsx(L,{children:p&&e.jsxs(ae,{onModal:s=>x(s),children:[d&&e.jsx(fe,{youtubeURL:E.current,movieTrailer:d.key}),!d&&e.jsxs(oe,{children:[e.jsx("h2",{children:"We don't have trailer for this movie"}),e.jsx(z,{sx:{fontSize:70,mt:1}})]})]})}),e.jsx(_,{})]})},Se=me;export{Se as default};
