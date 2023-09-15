import{r as o,n as p,A as O,S,j as e,P as $,u as k,a as I,R as M,b as d,N as R,c as A,d as T,I as F,e as V,m as P,B as z,f as Z,g as N,h as U,T as q,M as W,i as G,L as Q,k as J,l as K,C as Y,Q as X,o as ee,p as te,q as oe,s as re,t as ne,v as se,w as ae,x as ie,y as le}from"./vendor-373470ad.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();function j(t,s){const[a,c]=o.useState(()=>JSON.parse(window.localStorage.getItem(t))??s);return o.useEffect(()=>{window.localStorage.setItem(t,JSON.stringify(a))},[t,a]),[a,c]}const H={mainTextFontWeight:"500",listItemBcgColor:"rgba(157, 153, 153, 0.253)",backdropColor:"rgba(0, 0, 0, 0.2)",hoverTransition:"300ms",hoverTimeFunction:"linear",animationDuration:"500ms",animationTimeFunction:"linear"},ce={...H,gradDark:"#ecf881",gradLight:"#e3f8f1",textColor:"#141414",bgIconColor:"#5ebaf030",bgElementColor:"#D89EDB",addBgElementColor:"rgba(55, 55, 54, 0.7)",bgInputColor:"rgba(55, 55, 54, 0.1)",linkColor:"#C588C9",modalBgColor:"#f0f5f3",navBarBgColor:"rgba(233, 231, 231, 0.5)",bgHeader:"#d9e092",bgCastCard:"#bbc4c58d",elementColor:"#fff",bgElementHoverColor:"#50aaa6",boxShadow:" 0px 5px 10px 2px rgba(34, 60, 80, 0.2)"},pe={...H,gradDark:"#013645",gradLight:"#3E3D6B",textColor:"#ffffffd3",bgIconColor:"#5f5e5a40",bgElementColor:"#E616F4",addBgElementColor:"rgba(255, 255, 255, 0.5)",bgInputColor:"rgba(255, 255, 255, 0.2)",linkColor:"#0FEFFD",modalBgColor:"#6c6d6d",navBarBgColor:"rgba(29, 29, 29, 0.5)",bgHeader:"#6d6d6b",bgCastCard:"#8f8f8f",bgSearchBar:"#8c6fcfc3",bgElementHoverColor:"#715ba7"},de=p.div`
  position: relative;
  display: flex;
  margin: auto;
  max-width: 100vw;
  min-height: 100vh;
  box-shadow: ${({theme:t})=>t.boxShadow};
  text-align: center;
  color: ${({theme:t})=>t.textColor};
  background: rgb(31, 24, 17);
  background: linear-gradient(
    180deg,
    ${({theme:t})=>t.gradDark} 0%,
    ${({theme:t})=>t.gradLight} 100%
  );
  & > h1,
  h2 {
    margin-bottom: 10px;
    color: ${({theme:t})=>t.textColor};
  }
`,xe=p(O)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    color: ${({theme:t})=>t.textColor};
    background-color: #fafafa;
    font-family: 'Muller', sans-serif;
    & > button {
      color: ${({theme:t})=>t.textColor};
    }
  }
`,he="modulepreload",me=function(t){return"/"+t},_={},h=function(s,a,c){if(!a||a.length===0)return s();const n=document.getElementsByTagName("link");return Promise.all(a.map(r=>{if(r=me(r),r in _)return;_[r]=!0;const i=r.endsWith(".css"),g=i?'[rel="stylesheet"]':"";if(!!c)for(let f=n.length-1;f>=0;f--){const w=n[f];if(w.href===r&&(!i||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${g}`))return;const m=document.createElement("link");if(m.rel=i?"stylesheet":he,i||(m.as="script",m.crossOrigin=""),m.href=r,document.head.appendChild(m),i)return new Promise((f,w)=>{m.addEventListener("load",f),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>s()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})},u={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopM:"1366px",laptopL:"1920px",desktop:"2560px"},x={mobileS:`(min-width: ${u.mobileS})`,mobileM:`(min-width: ${u.mobileM})`,mobileL:`(min-width: ${u.mobileL})`,tablet:`(min-width: ${u.tablet})`,laptop:`(min-width: ${u.laptop})`,laptopM:`(min-width: ${u.laptopM})`,laptopL:`(min-width: ${u.laptopL})`,desktopL:`(min-width: ${u.desktop})`},ge=p.div`
  width: 100%;

  & + & {
    margin-top: 20px;
  }

  @media ${x.mobileM} {
    & + & {
      margin-top: 0;
    }
  }
`,ue=p(S)`
  width: 310px;
  height: 465px;
`,Ce=p(S)`
  width: 310px;
  height: 30px;
`,fe=p.div`
  width: 100%;
  display: block;

  @media ${x.tablet} {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    white-space: nowrap;
    gap: 20px;
    justify-items: center;
    align-items: stretch;
  }

  @media ${x.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${x.laptopM} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${x.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`,l=()=>e.jsxs(ge,{children:[e.jsx(ue,{variant:"rectangular",animation:"wave"}),e.jsx(Ce,{variant:"text",animation:"wave"})]}),v=()=>e.jsxs(fe,{children:[e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{}),e.jsx(l,{})]}),ve=o.lazy(()=>h(()=>import("./index-62d087cd.js"),["assets/index-62d087cd.js","assets/vendor-373470ad.js","assets/moviesIDBService-2b8b2360.js","assets/index-e2daedf6.js","assets/Swiper-bb97c02c.js","assets/MovieCard-b3ef3283.js","assets/DefaultMovieImage-d6b5fbbf.js","assets/Swiper-9215f4cc.css","assets/MovieList-58811b45.js","assets/animations-5f4924b3.js"])),je=o.lazy(()=>h(()=>import("./index-77cb5f16.js"),["assets/index-77cb5f16.js","assets/vendor-373470ad.js","assets/QueryTrigger-cd97c1b5.js","assets/moviesIDBService-2b8b2360.js","assets/index-e2daedf6.js","assets/MovieList-58811b45.js","assets/MovieCard-b3ef3283.js","assets/DefaultMovieImage-d6b5fbbf.js","assets/animations-5f4924b3.js"])),we=o.lazy(()=>h(()=>import("./index-e8824cab.js"),["assets/index-e8824cab.js","assets/vendor-373470ad.js","assets/moviesIDBService-2b8b2360.js","assets/index-e2daedf6.js","assets/SentimentVeryDissatisfied-567dc3d3.js","assets/GoBackButton-dab0c1df.js","assets/moviesAPI-680262f9.js","assets/DefaultMovieImage-d6b5fbbf.js","assets/MovieInfo.styled-ae3645ad.js","assets/Modal-07478869.js","assets/animations-5f4924b3.js","assets/Notify-f3b59ba3.js"])),be=o.lazy(()=>h(()=>import("./index-4d13a8ea.js"),["assets/index-4d13a8ea.js","assets/vendor-373470ad.js","assets/moviesIDBService-2b8b2360.js","assets/index-e2daedf6.js","assets/animations-5f4924b3.js","assets/GoBackButton-dab0c1df.js","assets/MovieInfo.styled-ae3645ad.js","assets/DefaultActorImage-9491d488.js"])),ye=o.lazy(()=>h(()=>import("./index-cc89cd4c.js"),["assets/index-cc89cd4c.js","assets/vendor-373470ad.js","assets/moviesIDBService-2b8b2360.js","assets/index-e2daedf6.js","assets/MovieList-58811b45.js","assets/MovieCard-b3ef3283.js","assets/DefaultMovieImage-d6b5fbbf.js","assets/GoBackButton-dab0c1df.js","assets/animations-5f4924b3.js"])),E=o.lazy(()=>h(()=>import("./index-de973573.js"),["assets/index-de973573.js","assets/vendor-373470ad.js","assets/QueryTrigger-cd97c1b5.js","assets/moviesIDBService-2b8b2360.js","assets/index-e2daedf6.js","assets/animations-5f4924b3.js","assets/MovieList-58811b45.js","assets/MovieCard-b3ef3283.js","assets/DefaultMovieImage-d6b5fbbf.js","assets/GoBackButton-dab0c1df.js"])),L=o.lazy(()=>h(()=>import("./index-f66b63da.js"),["assets/index-f66b63da.js","assets/vendor-373470ad.js","assets/QueryTrigger-cd97c1b5.js","assets/moviesAPI-680262f9.js","assets/index-e2daedf6.js","assets/MovieList-58811b45.js","assets/MovieCard-b3ef3283.js","assets/DefaultMovieImage-d6b5fbbf.js","assets/Notify-f3b59ba3.js","assets/animations-5f4924b3.js"])),_e=o.lazy(()=>h(()=>import("./index-d12dac6e.js"),["assets/index-d12dac6e.js","assets/vendor-373470ad.js","assets/QueryTrigger-cd97c1b5.js","assets/moviesIDBService-2b8b2360.js","assets/index-e2daedf6.js","assets/MovieList-58811b45.js","assets/MovieCard-b3ef3283.js","assets/DefaultMovieImage-d6b5fbbf.js","assets/GoBackButton-dab0c1df.js","assets/animations-5f4924b3.js"])),Ee=o.lazy(()=>h(()=>import("./index-c2c5db64.js"),["assets/index-c2c5db64.js","assets/vendor-373470ad.js","assets/SentimentVeryDissatisfied-567dc3d3.js","assets/moviesIDBService-2b8b2360.js","assets/index-e2daedf6.js","assets/DefaultActorImage-9491d488.js","assets/Notify-f3b59ba3.js","assets/animations-5f4924b3.js"])),Le=o.lazy(()=>h(()=>import("./index-abdd6b6d.js"),["assets/index-abdd6b6d.js","assets/vendor-373470ad.js","assets/SentimentVeryDissatisfied-567dc3d3.js","assets/moviesIDBService-2b8b2360.js","assets/index-e2daedf6.js","assets/Notify-f3b59ba3.js","assets/animations-5f4924b3.js"])),Se=o.lazy(()=>h(()=>import("./index-2d7183f1.js"),["assets/index-2d7183f1.js","assets/vendor-373470ad.js","assets/SentimentVeryDissatisfied-567dc3d3.js","assets/moviesIDBService-2b8b2360.js","assets/index-e2daedf6.js","assets/Notify-f3b59ba3.js","assets/animations-5f4924b3.js","assets/Swiper-bb97c02c.js","assets/MovieCard-b3ef3283.js","assets/DefaultMovieImage-d6b5fbbf.js","assets/Swiper-9215f4cc.css"])),B=({query:t})=>{const s=k(),[a]=j("userID",null),c=n=>{window.localStorage.setItem("moviesGenres",JSON.stringify(n))};return e.jsx(e.Fragment,{children:e.jsx(I,{children:e.jsxs(M,{location:s,children:[e.jsx(d,{path:"/",caseSensitive:!0,element:e.jsx(ve,{setGenres:n=>c(n)})}),e.jsx(d,{path:"/movies",element:e.jsx(je,{query:t})}),e.jsxs(d,{path:"/movies/:movieID/*",element:e.jsx(we,{}),children:[e.jsx(d,{path:"cast",element:e.jsx(Ee,{})}),e.jsx(d,{path:"reviews",element:e.jsx(Le,{})}),e.jsx(d,{path:"similar_movies",element:e.jsx(Se,{})})]}),e.jsx(d,{path:"/movies/upcoming",element:e.jsx(o.Suspense,{fallback:e.jsx(v,{}),children:e.jsx(E,{category:"upcoming"})})}),e.jsx(d,{path:"/movies/top_rated",element:e.jsx(o.Suspense,{fallback:e.jsx(v,{}),children:e.jsx(E,{category:"top_rated"})})}),e.jsx(d,{path:"/movies/by_genre=:genreId/*",element:e.jsx(o.Suspense,{fallback:e.jsx(v,{}),children:e.jsx(_e,{})})}),e.jsx(d,{path:"/movies/:movieID/cast/actor/:actorID/*",element:e.jsx(be,{})}),e.jsx(d,{path:"/moviesbyactor/:actorID/*",element:e.jsx(ye,{})}),e.jsx(d,{path:"/favorites",element:e.jsx(o.Suspense,{fallback:e.jsx(v,{}),children:a&&e.jsx(L,{category:"favorites"})})}),e.jsx(d,{path:"/watched",element:e.jsx(o.Suspense,{fallback:e.jsx(v,{}),children:a&&e.jsx(L,{category:"watched"})})}),e.jsx(d,{path:"*",element:e.jsx(R,{to:"/",replace:!0})})]},s.pathname)})})};B.propTypes={query:$.string.isRequired};const $e=o.lazy(()=>h(()=>import("./index-99370c96.js"),["assets/index-99370c96.js","assets/vendor-373470ad.js","assets/index-e2daedf6.js","assets/animations-5f4924b3.js","assets/Notify-f3b59ba3.js"])),ke=o.lazy(()=>h(()=>import("./index-dd76e5c5.js"),["assets/index-dd76e5c5.js","assets/vendor-373470ad.js","assets/animations-5f4924b3.js","assets/Modal-07478869.js"])),Ie=()=>{const t=k();return e.jsx(I,{children:e.jsxs(M,{location:t,children:[e.jsx(d,{path:"/",caseSensitive:!0,element:e.jsx(ke,{})}),e.jsx(d,{path:"/:dbUserID",caseSensitive:!0,element:e.jsx($e,{})})]},t.pathname)})},Me=t=>o.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M8.63633 2.5C7.42268 2.5 6.23628 2.85989 5.22717 3.53416C4.21806 4.20843 3.43155 5.16679 2.9671 6.28806C2.50266 7.40932 2.38114 8.64314 2.61791 9.83347C2.85468 11.0238 3.43911 12.1172 4.29729 12.9754C5.15547 13.8335 6.24886 14.418 7.43919 14.6547C8.62952 14.8915 9.86333 14.77 10.9846 14.3056C12.1059 13.8411 13.0642 13.0546 13.7385 12.0455C14.4128 11.0364 14.7727 9.84998 14.7727 8.63633C14.7726 7.00891 14.126 5.44817 12.9753 4.2974C11.8245 3.14664 10.2638 2.5001 8.63633 2.5Z",strokeMiterlimit:10}),o.createElement("path",{d:"M13.2145 13.2144L17.5 17.4999",strokeMiterlimit:10,strokeLinecap:"round"})),Te=p(A)`
  width: ${({width:t})=>`${Number.parseInt(t)-50}px`};
  display: flex;
  align-items: center;
  background-color: ${({theme:t})=>t.bgInputColor};

  border-radius: 10px;

  & input {
    padding: 15px 0;
    padding-left: 20px;
    color: ${({theme:t})=>t.textColor};
    font-family: 'Muller';
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
  }

  & svg {
    stroke: ${({theme:t})=>t.textColor};
  }

  @media ${x.tablet} {
    width: ${({width:t})=>t};
  }
`,Ve=({onChange:t,isLoading:s,width:a="250px"})=>{const[c,n]=o.useState(""),r=T(),i=C=>{C.preventDefault(),c&&(t(c),r(`/movies?query=${c}`))},g=C=>{const m=C.target.value.trim();n(m)};return e.jsxs(Te,{component:"form",onSubmit:i,width:a,children:[e.jsx(F,{sx:{flex:1},placeholder:"Search...",inputProps:{"aria-label":"earch"},onChange:g,disabled:s}),e.jsx(V,{type:"submit",sx:{p:"10px"},"aria-label":"search",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx(Me,{})})})]})},Pe=p(P.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 10px;

  border-radius: 50%;
  border: none;
  background-color: ${({theme:t})=>t.bgIconColor};
  color: ${({theme:t})=>t.textColor};
  transition: all ${({theme:t})=>t.hoverTransition} ${({theme:t})=>t.hoverTimeFunction};

  &:hover {
    color: ${({theme:t})=>t.linkColor};
  }
`,He=({theme:t,setTheme:s})=>{const a=()=>{s(t==="dark"?"light":"dark")};return e.jsx(Pe,{whileTap:{scale:1.3},onClick:()=>a(),children:t==="dark"?e.jsx(z,{size:20}):e.jsx(Z,{size:20})})},Be=p(N)`
  width: 40px;
  height: 40px;
  font-size: 25px;
  line-height: 25px;
  letter-spacing: 0.05em;
  background-color: transparent;
  color: ${({theme:t})=>t.textColor};
  border: 1px solid;
  border-color: ${({theme:t})=>t.textColor};

  @media ${x.tablet} {
    width: 60px;
    height: 60px;
  }
`;function De(t){return{children:`${t.split(" ")[0][0]}${t.split(" ")[1][0]}`}}const Oe=({name:t})=>{const[s,a]=o.useState(null),[,c]=j("userID",null);let n=T();const r=!!s,i=m=>{a(m.currentTarget)},g=()=>{a(null)},C=()=>{c(null),n("/"),window.location.reload()};return e.jsxs(e.Fragment,{children:[e.jsx(U,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:e.jsx(q,{title:"Account settings",children:e.jsx(V,{onClick:i,size:"small","aria-controls":r?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,children:e.jsx(Be,{...De(`${t}`)})})})}),e.jsx(W,{anchorEl:s,id:"account-menu",open:r,onClose:g,onClick:g,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:e.jsxs(G,{onClick:C,children:[e.jsx(Q,{children:e.jsx(J,{fontSize:"small"})}),"Logout"]})})]})},Re=p.div`
  width: 320px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 60px;
  align-items: center;
  justify-content: space-between;

  @media ${x.tablet} {
    width: 450px;
    margin-right: 0;
    margin-bottom: 30px;
    margin-left: auto;
  }
`,Ae=({onChange:t,theme:s,setTheme:a})=>{const[c]=j("userName");return e.jsxs(Re,{children:[e.jsx(Ve,{onChange:t}),e.jsx(He,{theme:s,setTheme:a}),e.jsx(Oe,{name:c})]})},Fe=p.div`
  width: calc(100vw-50);
  padding: 5px;
  flex-grow: 1;
  overflow: hidden;

  @media ${x.tablet} {
    width: calc(100vw-80);
    padding: 15px;
  }

  @media ${x.laptopM} {
    width: calc(100vw-120);
  }

  @media ${x.laptopL} {
    padding: 85px;
    padding-right: 50px;
  }
`,D=({children:t,userID:s})=>e.jsx(Fe,{userID:s??"",children:t});D.propTypes={children:$.node.isRequired};const ze=t=>o.createElement("svg",{width:23,height:21,viewBox:"0 0 23 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M1 12.139L11.5 1.47583L22 12.139",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M3.33325 9.76929V18.0629C3.33325 18.6913 3.57908 19.294 4.01667 19.7384C4.45425 20.1828 5.04775 20.4325 5.66659 20.4325H17.3333C17.9521 20.4325 18.5456 20.1828 18.9832 19.7384C19.4208 19.294 19.6666 18.6913 19.6666 18.0629V9.76929",strokeLinecap:"round",strokeLinejoin:"round"})),Ze=t=>o.createElement("svg",{width:21,height:19,viewBox:"0 0 21 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M19.74 0.216064H1.26C0.925827 0.216064 0.605341 0.351214 0.369045 0.591783C0.13275 0.832352 0 1.15863 0 1.49885V16.8923C0 17.2325 0.13275 17.5588 0.369045 17.7993C0.605341 18.0399 0.925827 18.175 1.26 18.175H19.74C20.0742 18.175 20.3947 18.0399 20.631 17.7993C20.8672 17.5588 21 17.2325 21 16.8923V1.49885C21 1.15863 20.8672 0.832352 20.631 0.591783C20.3947 0.351214 20.0742 0.216064 19.74 0.216064ZM0.84 4.49201H10.08V13.8991H0.84V4.49201ZM10.92 3.63682V1.07125H15.12V3.63682H10.92ZM10.08 3.63682H5.88V1.07125H10.08V3.63682ZM10.08 14.7543V17.3199H5.88V14.7543H10.08ZM10.92 14.7543H15.12V17.3199H10.92V14.7543ZM10.92 13.8991V4.49201H20.16V13.8991H10.92ZM20.16 1.49885V3.63682H15.96V1.07125H19.74C19.8514 1.07125 19.9582 1.1163 20.037 1.19649C20.1157 1.27668 20.16 1.38544 20.16 1.49885ZM1.26 1.07125H5.04V3.63682H0.84V1.49885C0.84 1.38544 0.88425 1.27668 0.963015 1.19649C1.04178 1.1163 1.14861 1.07125 1.26 1.07125ZM0.84 16.8923V14.7543H5.04V17.3199H1.26C1.14861 17.3199 1.04178 17.2748 0.963015 17.1946C0.88425 17.1144 0.84 17.0057 0.84 16.8923ZM19.74 17.3199H15.96V14.7543H20.16V16.8923C20.16 17.0057 20.1157 17.1144 20.037 17.1946C19.9582 17.2748 19.8514 17.3199 19.74 17.3199Z"})),Ne=t=>o.createElement("svg",{width:21,height:18,viewBox:"0 0 21 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M7 17.9198V16.922H8V15.9243H3C2.20435 15.9243 1.44129 15.609 0.87868 15.0476C0.31607 14.4863 0 13.725 0 12.9311V3.95166C0 3.15782 0.31607 2.3965 0.87868 1.83517C1.44129 1.27385 2.20435 0.958496 3 0.958496H18C18.7956 0.958496 19.5587 1.27385 20.1213 1.83517C20.6839 2.3965 21 3.15782 21 3.95166V12.9311C21 13.725 20.6839 14.4863 20.1213 15.0476C19.5587 15.609 18.7956 15.9243 18 15.9243H13V16.922H14V17.9198H7ZM9 15.9243V16.922H12V15.9243H9ZM3 1.95622C2.46957 1.95622 1.96086 2.16645 1.58579 2.54067C1.21071 2.91489 1 3.42243 1 3.95166V12.9311C1 13.4604 1.21071 13.9679 1.58579 14.3421C1.96086 14.7164 2.46957 14.9266 3 14.9266H18C18.5304 14.9266 19.0391 14.7164 19.4142 14.3421C19.7893 13.9679 20 13.4604 20 12.9311V3.95166C20 3.42243 19.7893 2.91489 19.4142 2.54067C19.0391 2.16645 18.5304 1.95622 18 1.95622H3Z"})),Ue=t=>o.createElement("svg",{width:21,height:21,viewBox:"0 0 21 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M16.2645 20.8802C16.0374 20.8808 15.8149 20.8168 15.6229 20.6959L10.7236 17.5923C10.6567 17.5501 10.5792 17.5276 10.5 17.5276C10.4208 17.5276 10.3433 17.5501 10.2764 17.5923L5.72707 20.4728C5.49941 20.6197 5.23223 20.6938 4.96125 20.6851C4.69027 20.6764 4.42839 20.5855 4.21062 20.4243C3.98206 20.2595 3.80872 20.0296 3.71332 19.7649C3.61792 19.5001 3.6049 19.2127 3.67598 18.9404L4.98829 13.7904C5.01147 13.7056 5.01007 13.6159 4.98426 13.5318C4.95846 13.4477 4.9093 13.3726 4.84248 13.3152L0.448661 9.66849C0.257882 9.51137 0.11881 9.3007 0.0494787 9.06378C-0.019853 8.82686 -0.0162476 8.57462 0.0598274 8.33977C0.13305 8.10856 0.274078 7.90458 0.464693 7.75416C0.655307 7.60375 0.88675 7.51381 1.12912 7.49599L6.87413 7.12744C6.95455 7.11969 7.03136 7.09035 7.0964 7.04253C7.16144 6.99471 7.21228 6.93021 7.24352 6.85587L9.3821 1.47311C9.46817 1.2468 9.6212 1.05197 9.82087 0.914484C10.0205 0.777 10.2574 0.703369 10.5 0.703369C10.7426 0.703369 10.9795 0.777 11.1791 0.914484C11.3788 1.05197 11.5318 1.2468 11.6179 1.47311L13.7565 6.85587C13.7877 6.93021 13.8386 6.99471 13.9036 7.04253C13.9686 7.09035 14.0455 7.11969 14.1259 7.12744L19.8709 7.49599C20.1133 7.51381 20.3447 7.60375 20.5353 7.75416C20.7259 7.90458 20.867 8.10856 20.9402 8.33977C21.0162 8.57462 21.0199 8.82686 20.9505 9.06378C20.8812 9.3007 20.7421 9.51137 20.5513 9.66849L16.1575 13.3152C16.0907 13.3726 16.0415 13.4477 16.0157 13.5318C15.9899 13.6159 15.9885 13.7056 16.0117 13.7904L17.431 19.3478C17.4939 19.587 17.482 19.8397 17.3969 20.072C17.3118 20.3044 17.1574 20.5051 16.9546 20.6474C16.7564 20.7984 16.5139 20.8802 16.2645 20.8802ZM10.5 16.7485C10.7279 16.7514 10.9504 16.8186 11.1416 16.9425L16.0409 20.0364C16.1083 20.0831 16.1888 20.1073 16.2709 20.1056C16.353 20.1038 16.4324 20.0762 16.4978 20.0267C16.5736 19.9738 16.6312 19.8988 16.6625 19.812C16.6939 19.7251 16.6974 19.6307 16.6727 19.5417L15.2535 13.9747C15.1984 13.7489 15.2074 13.5122 15.2795 13.2913C15.3516 13.0703 15.484 12.8737 15.6618 12.7236L20.0556 9.07687C20.1273 9.01685 20.1789 8.93628 20.2032 8.84608C20.2275 8.75587 20.2235 8.66039 20.1917 8.57254C20.1694 8.49013 20.1218 8.41678 20.0555 8.36283C19.9892 8.30889 19.9077 8.27707 19.8223 8.27188L14.0773 7.90333C13.8492 7.88623 13.6306 7.80525 13.4466 7.66971C13.2626 7.53417 13.1207 7.34957 13.0371 7.13713L10.8986 1.75437C10.8673 1.67428 10.8125 1.60547 10.7414 1.55696C10.6703 1.50846 10.5861 1.4825 10.5 1.4825C10.4139 1.4825 10.3297 1.50846 10.2586 1.55696C10.1875 1.60547 10.1327 1.67428 10.1014 1.75437L7.96286 7.13713C7.87934 7.34957 7.73742 7.53417 7.55342 7.66971C7.36942 7.80525 7.15081 7.88623 6.92273 7.90333L1.17772 8.27188C1.09188 8.27918 1.0101 8.3116 0.94266 8.36509C0.875215 8.41858 0.825104 8.49074 0.798611 8.57254C0.771843 8.6617 0.771358 8.75666 0.797214 8.84609C0.823069 8.93552 0.874172 9.01563 0.944423 9.07687L5.33824 12.7236C5.51604 12.8737 5.64842 13.0703 5.72053 13.2913C5.79264 13.5122 5.80164 13.7489 5.74651 13.9747L4.4342 19.1344C4.39778 19.2548 4.40077 19.3836 4.44272 19.5022C4.48467 19.6208 4.56341 19.723 4.6675 19.7939C4.75858 19.8646 4.8698 19.9045 4.98512 19.908C5.10043 19.9115 5.21387 19.8783 5.30908 19.8133L9.85843 16.9425C10.0496 16.8186 10.2721 16.7514 10.5 16.7485Z"})),qe=p.nav`
  margin-top: 40px;

  @media ${x.tablet} {
    margin-top: 125px;
  }
`,b=p(P(K))`
  display: block;
  padding: 30px 5px;
  position: relative;
  color: ${({theme:t})=>t.textColor};
  cursor: pointer;

  &:visited {
    color: ${({theme:t})=>t.textColor};
  }

  & > svg {
    stroke: currentColor;
    width: 30px;
    height: auto;
  }

  &.active {
    color: ${({theme:t})=>t.bgElementColor};

    & > svg {
      stroke: currentColor;
    }
  }

  & + & {
    margin-top: 30px;
  }
`,We=()=>e.jsxs(qe,{children:[e.jsx(b,{whileTap:{scale:1.3},to:"/",children:e.jsx(ze,{})}),e.jsx(b,{whileTap:{scale:1.3},to:"/movies",children:e.jsx(Ze,{})}),e.jsx(b,{whileTap:{scale:1.3},to:"/favorites",children:e.jsx(Ue,{})}),e.jsx(b,{whileTap:{scale:1.3},to:"/watched",children:e.jsx(Ne,{})})]}),Ge=t=>o.createElement("svg",{width:74,height:84,viewBox:"0 0 74 84",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("ellipse",{cx:37,cy:41.5528,rx:22.5327,ry:34.9723,transform:"rotate(-30 37 41.5528)",fill:"url(#paint0_linear_83_548)"}),o.createElement("ellipse",{cx:36.2674,cy:41.8277,rx:22.5327,ry:34.9723,transform:"rotate(-90 36.2674 41.8277)",fill:"url(#paint1_linear_83_548)"}),o.createElement("ellipse",{cx:37.0206,cy:41.73,rx:22.5327,ry:34.9723,transform:"rotate(-160 37.0206 41.73)",fill:"url(#paint2_linear_83_548)"}),o.createElement("ellipse",{cx:36.9153,cy:41.3135,rx:22.6672,ry:22.0196,fill:"url(#paint3_linear_83_548)"}),o.createElement("path",{d:"M44.0391 41.313L33.3531 49.1651V33.4608L44.0391 41.313Z",fill:"white"}),o.createElement("defs",null,o.createElement("linearGradient",{id:"paint0_linear_83_548",x1:37,y1:6.58049,x2:37,y2:76.525,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#11EBFC",stopOpacity:.31}),o.createElement("stop",{offset:1,stopColor:"#F706F4",stopOpacity:.3})),o.createElement("linearGradient",{id:"paint1_linear_83_548",x1:36.2674,y1:6.85542,x2:36.2674,y2:76.7999,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#11EBFC",stopOpacity:.31}),o.createElement("stop",{offset:1,stopColor:"#F706F4",stopOpacity:.3})),o.createElement("linearGradient",{id:"paint2_linear_83_548",x1:37.0206,y1:6.75773,x2:37.0206,y2:76.7023,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#11EBFC",stopOpacity:.31}),o.createElement("stop",{offset:1,stopColor:"#F706F4",stopOpacity:.3})),o.createElement("linearGradient",{id:"paint3_linear_83_548",x1:36.9153,y1:19.2939,x2:36.9153,y2:63.3331,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#F706F4"}),o.createElement("stop",{offset:1,stopColor:"#11EBFC"})))),Qe=p.header`
  position: relative;
  width: 50px;
  height: auto;
  background: ${({theme:t})=>t.navBarBgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);

  @media ${x.tablet} {
    width: 80px;
  }

  @media ${x.laptopM} {
    width: 90px;
  }

  @media ${x.laptopL} {
    width: 120px;
  }
`,Je=p.div`
  top: 0;
  left: 0;
  position: sticky;
  padding: 25px 0;
  width: 100%;
`,Ke=p(Ge)`
  width: 40px;
  height: 40px;

  @media ${x.tablet} {
    width: 75px;
    height: 75px;
  }
`,Ye=()=>e.jsx(e.Fragment,{children:e.jsx(Qe,{children:e.jsxs(Je,{children:[e.jsx(Ke,{}),e.jsx(We,{})]})})}),Xe=p(Y)`
  display: block;
  margin: 0 auto;
  text-align: center;
`,y=()=>e.jsxs(Xe,{viewBox:"0 0 400 160",height:160,width:400,backgroundColor:"transparent",children:[e.jsx("circle",{cx:"150",cy:"86",r:"8"}),e.jsx("circle",{cx:"194",cy:"86",r:"8"}),e.jsx("circle",{cx:"238",cy:"86",r:"8"})]});y.metadata={name:"RioF",github:"clariokids",description:"Three Dots",filename:"ThreeDots"};const et={light:ce,dark:pe};function tt(){const t=new X,[s,a]=o.useState(""),[c]=j("userID",null),[n,r]=j("theme","dark"),i=ee({...et[n]});return e.jsx(te,{injectFirst:!0,children:e.jsx(oe,{theme:i,children:e.jsxs(re,{theme:i,children:[e.jsxs(ne,{client:t,children:[c?e.jsxs(de,{children:[e.jsx(Ye,{}),e.jsxs(D,{children:[e.jsx(Ae,{theme:n,setTheme:r,onChange:g=>a(g)}),e.jsx(o.Suspense,{fallback:e.jsx(y,{}),children:e.jsx(B,{query:s})})]})]}):e.jsx(o.Suspense,{fallback:e.jsx(y,{}),children:e.jsx(Ie,{})}),e.jsx(se.ReactQueryDevtools,{initialIsOpen:!1})]}),e.jsx(xe,{autoClose:3e3,position:"top-center",limit:1})]})})})}ae.createRoot(document.getElementById("root")).render(e.jsx(ie.StrictMode,{children:e.jsx(le,{children:e.jsx(tt,{})})}));export{v as G,Ne as S,y as T,Ue as a,x as d,j as u};
