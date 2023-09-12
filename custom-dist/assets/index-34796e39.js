import{n as i,o as L,a as o,_ as s,P as b,b as w,j as e,A as y,p as E,q as a,N as D,s as M,c as k,t as P,I,m as S,B,v as H,w as A,x as O,T as R,M as F,y as z,z as U,D as Z,E as N,Q as q,F as G,H as W,J as Q,K as J,U as Y,V as K,X,k as ee,Y as te}from"./vendor-446e3497.js";import{u,a as g,e as c,T as C}from"./common-c2210d67.js";import{S as oe,a as re}from"./movieDetailsPage-46d09838.js";import"./axios-d95ca511.js";import"./shared/actorDetailsPage/movieDetailsPage-aa64b57f.js";import"./@mui/icons-material-2d86ad94.js";import"./shared/CategoryMoviesPage/movieDetailsPage-7b8afc0d.js";import"./shared/login-page/movieDetailsPage-ebd497f6.js";const T={mainTextFontWeight:"500",listItemBcgColor:"rgba(157, 153, 153, 0.253)",backdropColor:"rgba(0, 0, 0, 0.2)",hoverTransition:"300ms",hoverTimeFunction:"linear",animationDuration:"500ms",animationTimeFunction:"linear"},ae={...T,gradDark:"#ecf881",gradLight:"#e3f8f1",textColor:"#141414",bgIconColor:"#5ebaf030",bgElementColor:"#D89EDB",addBgElementColor:"rgba(55, 55, 54, 0.7)",bgInputColor:"rgba(55, 55, 54, 0.1)",linkColor:"#C588C9",modalBgColor:"#f0f5f3",navBarBgColor:"rgba(233, 231, 231, 0.5)",bgHeader:"#d9e092",bgCastCard:"#bbc4c58d",elementColor:"#fff",bgElementHoverColor:"#50aaa6",boxShadow:" 0px 5px 10px 2px rgba(34, 60, 80, 0.2)"},ne={...T,gradDark:"#013645",gradLight:"#3E3D6B",textColor:"#ffffffd3",bgIconColor:"#5f5e5a40",bgElementColor:"#E616F4",addBgElementColor:"rgba(255, 255, 255, 0.5)",bgInputColor:"rgba(255, 255, 255, 0.2)",linkColor:"#0FEFFD",modalBgColor:"#6c6d6d",navBarBgColor:"rgba(29, 29, 29, 0.5)",bgHeader:"#6d6d6b",bgCastCard:"#8f8f8f",bgSearchBar:"#8c6fcfc3",bgElementHoverColor:"#715ba7"},se=i.div`
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
`,ie=i(L)`
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
`,le=o.lazy(()=>s(()=>import("./home-page-c791dab2.js"),["assets/home-page-c791dab2.js","assets/vendor-446e3497.js","assets/axios-d95ca511.js","assets/common-c2210d67.js","assets/shared/home-page/similarMovies-3576ce15.js","assets/swiper-82c7b89e.js","assets/react-responsive-ef441892.js","assets/similarMovies-9215f4cc.css"])),ce=o.lazy(()=>s(()=>import("./moviePage-eb8d43ee.js"),["assets/moviePage-eb8d43ee.js","assets/vendor-446e3497.js","assets/react-intersection-observer-ba847fea.js","assets/common-c2210d67.js","assets/axios-d95ca511.js"])),pe=o.lazy(()=>s(()=>import("./movieDetailsPage-46d09838.js").then(t=>t.i),["assets/movieDetailsPage-46d09838.js","assets/common-c2210d67.js","assets/vendor-446e3497.js","assets/axios-d95ca511.js","assets/shared/actorDetailsPage/movieDetailsPage-aa64b57f.js","assets/@mui/icons-material-2d86ad94.js","assets/shared/CategoryMoviesPage/movieDetailsPage-7b8afc0d.js","assets/shared/login-page/movieDetailsPage-ebd497f6.js"])),de=o.lazy(()=>s(()=>import("./actorDetailsPage-56aba24b.js"),["assets/actorDetailsPage-56aba24b.js","assets/vendor-446e3497.js","assets/shared/actorDetailsPage/movieDetailsPage-aa64b57f.js","assets/common-c2210d67.js","assets/axios-d95ca511.js","assets/shared/actorDetailsPage/cast-12a29332.js"])),xe=o.lazy(()=>s(()=>import("./ActorsMoviesPage-175feb9b.js"),["assets/ActorsMoviesPage-175feb9b.js","assets/vendor-446e3497.js","assets/common-c2210d67.js","assets/axios-d95ca511.js"])),f=o.lazy(()=>s(()=>import("./CategoryMoviesPage-d03e9e46.js").then(t=>t.i),["assets/CategoryMoviesPage-d03e9e46.js","assets/vendor-446e3497.js","assets/react-intersection-observer-ba847fea.js","assets/common-c2210d67.js","assets/axios-d95ca511.js","assets/shared/CategoryMoviesPage/movieDetailsPage-7b8afc0d.js"])),_=o.lazy(()=>s(()=>import("./CategoryMoviesPage-d03e9e46.js").then(t=>t.a),["assets/CategoryMoviesPage-d03e9e46.js","assets/vendor-446e3497.js","assets/react-intersection-observer-ba847fea.js","assets/common-c2210d67.js","assets/axios-d95ca511.js","assets/shared/CategoryMoviesPage/movieDetailsPage-7b8afc0d.js"])),he=o.lazy(()=>s(()=>import("./MoviesByGenre-36275faa.js"),["assets/MoviesByGenre-36275faa.js","assets/vendor-446e3497.js","assets/react-intersection-observer-ba847fea.js","assets/common-c2210d67.js","assets/axios-d95ca511.js"])),me=o.lazy(()=>s(()=>import("./cast-41158d64.js"),["assets/cast-41158d64.js","assets/vendor-446e3497.js","assets/shared/actorDetailsPage/cast-12a29332.js","assets/@mui/icons-material-2d86ad94.js","assets/common-c2210d67.js","assets/axios-d95ca511.js"])),ge=o.lazy(()=>s(()=>import("./reviews-33e9112e.js"),["assets/reviews-33e9112e.js","assets/vendor-446e3497.js","assets/@mui/icons-material-2d86ad94.js","assets/common-c2210d67.js","assets/axios-d95ca511.js"])),ue=o.lazy(()=>s(()=>import("./similarMovies-3e0f92d4.js"),["assets/similarMovies-3e0f92d4.js","assets/vendor-446e3497.js","assets/@mui/icons-material-2d86ad94.js","assets/common-c2210d67.js","assets/axios-d95ca511.js","assets/shared/home-page/similarMovies-3576ce15.js","assets/swiper-82c7b89e.js","assets/react-responsive-ef441892.js","assets/similarMovies-9215f4cc.css"])),$=({query:t})=>{const r=w(),[n]=u("userID",null),l=p=>{window.localStorage.setItem("moviesGenres",JSON.stringify(p))};return e.jsx(e.Fragment,{children:e.jsx(y,{children:e.jsxs(E,{location:r,children:[e.jsx(a,{path:"/",caseSensitive:!0,element:e.jsx(le,{setGenres:p=>l(p)})}),e.jsx(a,{path:"/movies",element:e.jsx(ce,{query:t})}),e.jsxs(a,{path:"/movies/:movieID/*",element:e.jsx(pe,{}),children:[e.jsx(a,{path:"cast",element:e.jsx(me,{})}),e.jsx(a,{path:"reviews",element:e.jsx(ge,{})}),e.jsx(a,{path:"similar_movies",element:e.jsx(ue,{})})]}),e.jsx(a,{path:"/movies/upcoming",element:e.jsx(o.Suspense,{fallback:e.jsx(g,{}),children:e.jsx(f,{category:"upcoming"})})}),e.jsx(a,{path:"/movies/top_rated",element:e.jsx(o.Suspense,{fallback:e.jsx(g,{}),children:e.jsx(f,{category:"top_rated"})})}),e.jsx(a,{path:"/movies/by_genre=:genreId/*",element:e.jsx(o.Suspense,{fallback:e.jsx(g,{}),children:e.jsx(he,{})})}),e.jsx(a,{path:"/movies/:movieID/cast/actor/:actorID/*",element:e.jsx(de,{})}),e.jsx(a,{path:"/moviesbyactor/:actorID/*",element:e.jsx(xe,{})}),e.jsx(a,{path:"/favorites",element:e.jsx(o.Suspense,{fallback:e.jsx(g,{}),children:n&&e.jsx(_,{category:"favorites"})})}),e.jsx(a,{path:"/watched",element:e.jsx(o.Suspense,{fallback:e.jsx(g,{}),children:n&&e.jsx(_,{category:"watched"})})}),e.jsx(a,{path:"*",element:e.jsx(D,{to:"/",replace:!0})})]},r.pathname)})})};$.propTypes={query:b.string.isRequired};const ve=o.lazy(()=>s(()=>import("./welcome-page-684d52ef.js"),["assets/welcome-page-684d52ef.js","assets/vendor-446e3497.js","assets/axios-d95ca511.js","assets/common-c2210d67.js"])),je=o.lazy(()=>s(()=>import("./login-page-e956361d.js"),["assets/login-page-e956361d.js","assets/shared/login-page/movieDetailsPage-ebd497f6.js","assets/vendor-446e3497.js","assets/common-c2210d67.js","assets/axios-d95ca511.js"])),Ce=()=>{const t=w();return e.jsx(y,{children:e.jsxs(E,{location:t,children:[e.jsx(a,{path:"/",caseSensitive:!0,element:e.jsx(je,{})}),e.jsx(a,{path:"/:dbUserID",caseSensitive:!0,element:e.jsx(ve,{})})]},t.pathname)})},fe=t=>o.createElement("svg",{width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M8.63633 2.5C7.42268 2.5 6.23628 2.85989 5.22717 3.53416C4.21806 4.20843 3.43155 5.16679 2.9671 6.28806C2.50266 7.40932 2.38114 8.64314 2.61791 9.83347C2.85468 11.0238 3.43911 12.1172 4.29729 12.9754C5.15547 13.8335 6.24886 14.418 7.43919 14.6547C8.62952 14.8915 9.86333 14.77 10.9846 14.3056C12.1059 13.8411 13.0642 13.0546 13.7385 12.0455C14.4128 11.0364 14.7727 9.84998 14.7727 8.63633C14.7726 7.00891 14.126 5.44817 12.9753 4.2974C11.8245 3.14664 10.2638 2.5001 8.63633 2.5Z",strokeMiterlimit:10}),o.createElement("path",{d:"M13.2145 13.2144L17.5 17.4999",strokeMiterlimit:10,strokeLinecap:"round"})),_e=i(M)`
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

  @media ${c.tablet} {
    width: ${({width:t})=>t};
  }
`,be=({onChange:t,isLoading:r,width:n="250px"})=>{const[l,p]=o.useState(""),d=k(),x=m=>{m.preventDefault(),l&&(t(l),d(`/movies?query=${l}`))},h=m=>{const j=m.target.value.trim();p(j)};return e.jsxs(_e,{component:"form",onSubmit:x,width:n,children:[e.jsx(P,{sx:{flex:1},placeholder:"Search...",inputProps:{"aria-label":"earch"},onChange:h,disabled:r}),e.jsx(I,{type:"submit",sx:{p:"10px"},"aria-label":"search",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx(fe,{})})})]})},we=i(S.button)`
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
`,ye=({theme:t,setTheme:r})=>{const n=()=>{r(t==="dark"?"light":"dark")};return e.jsx(we,{whileTap:{scale:1.3},onClick:()=>n(),children:t==="dark"?e.jsx(B,{size:20}):e.jsx(H,{size:20})})},Ee=i(A)`
  width: 40px;
  height: 40px;
  font-size: 25px;
  line-height: 25px;
  letter-spacing: 0.05em;
  background-color: transparent;
  color: ${({theme:t})=>t.textColor};
  border: 1px solid;
  border-color: ${({theme:t})=>t.textColor};

  @media ${c.tablet} {
    width: 60px;
    height: 60px;
  }
`;function ke(t){return{children:`${t.split(" ")[0][0]}${t.split(" ")[1][0]}`}}const Ie=({name:t})=>{const[r,n]=o.useState(null),[,l]=u("userID",null);let p=k();const d=!!r,x=j=>{n(j.currentTarget)},h=()=>{n(null)},m=()=>{l(null),p("/"),window.location.reload()};return e.jsxs(e.Fragment,{children:[e.jsx(O,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:e.jsx(R,{title:"Account settings",children:e.jsx(I,{onClick:x,size:"small","aria-controls":d?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":d?"true":void 0,children:e.jsx(Ee,{...ke(`${t}`)})})})}),e.jsx(F,{anchorEl:r,id:"account-menu",open:d,onClose:h,onClick:h,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:e.jsxs(z,{onClick:m,children:[e.jsx(U,{children:e.jsx(Z,{fontSize:"small"})}),"Logout"]})})]})},Se=i.div`
  width: 320px;
  display: flex;
  margin: 0 auto;
  margin-bottom: 60px;
  align-items: center;
  justify-content: space-between;

  @media ${c.tablet} {
    width: 450px;
    margin-right: 0;
    margin-bottom: 30px;
    margin-left: auto;
  }
`,Te=({onChange:t,theme:r,setTheme:n})=>{const[l]=u("userName");return e.jsxs(Se,{children:[e.jsx(be,{onChange:t}),e.jsx(ye,{theme:r,setTheme:n}),e.jsx(Ie,{name:l})]})},$e=i.div`
  width: calc(100vw-50);
  padding: 5px;
  flex-grow: 1;
  overflow: hidden;

  @media ${c.tablet} {
    width: calc(100vw-80);
    padding: 15px;
  }

  @media ${c.laptopM} {
    width: calc(100vw-120);
  }

  @media ${c.laptopL} {
    padding: 85px;
    padding-right: 50px;
  }
`,V=({children:t,userID:r})=>e.jsx($e,{userID:r??"",children:t});V.propTypes={children:b.node.isRequired};const Ve=t=>o.createElement("svg",{width:23,height:21,viewBox:"0 0 23 21",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M1 12.139L11.5 1.47583L22 12.139",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M3.33325 9.76929V18.0629C3.33325 18.6913 3.57908 19.294 4.01667 19.7384C4.45425 20.1828 5.04775 20.4325 5.66659 20.4325H17.3333C17.9521 20.4325 18.5456 20.1828 18.9832 19.7384C19.4208 19.294 19.6666 18.6913 19.6666 18.0629V9.76929",strokeLinecap:"round",strokeLinejoin:"round"})),Le=t=>o.createElement("svg",{width:21,height:19,viewBox:"0 0 21 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("path",{d:"M19.74 0.216064H1.26C0.925827 0.216064 0.605341 0.351214 0.369045 0.591783C0.13275 0.832352 0 1.15863 0 1.49885V16.8923C0 17.2325 0.13275 17.5588 0.369045 17.7993C0.605341 18.0399 0.925827 18.175 1.26 18.175H19.74C20.0742 18.175 20.3947 18.0399 20.631 17.7993C20.8672 17.5588 21 17.2325 21 16.8923V1.49885C21 1.15863 20.8672 0.832352 20.631 0.591783C20.3947 0.351214 20.0742 0.216064 19.74 0.216064ZM0.84 4.49201H10.08V13.8991H0.84V4.49201ZM10.92 3.63682V1.07125H15.12V3.63682H10.92ZM10.08 3.63682H5.88V1.07125H10.08V3.63682ZM10.08 14.7543V17.3199H5.88V14.7543H10.08ZM10.92 14.7543H15.12V17.3199H10.92V14.7543ZM10.92 13.8991V4.49201H20.16V13.8991H10.92ZM20.16 1.49885V3.63682H15.96V1.07125H19.74C19.8514 1.07125 19.9582 1.1163 20.037 1.19649C20.1157 1.27668 20.16 1.38544 20.16 1.49885ZM1.26 1.07125H5.04V3.63682H0.84V1.49885C0.84 1.38544 0.88425 1.27668 0.963015 1.19649C1.04178 1.1163 1.14861 1.07125 1.26 1.07125ZM0.84 16.8923V14.7543H5.04V17.3199H1.26C1.14861 17.3199 1.04178 17.2748 0.963015 17.1946C0.88425 17.1144 0.84 17.0057 0.84 16.8923ZM19.74 17.3199H15.96V14.7543H20.16V16.8923C20.16 17.0057 20.1157 17.1144 20.037 17.1946C19.9582 17.2748 19.8514 17.3199 19.74 17.3199Z"})),De=i.nav`
  margin-top: 40px;

  @media ${c.tablet} {
    margin-top: 125px;
  }
`,v=i(S(N))`
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
`,Me=()=>e.jsxs(De,{children:[e.jsx(v,{whileTap:{scale:1.3},to:"/",children:e.jsx(Ve,{})}),e.jsx(v,{whileTap:{scale:1.3},to:"/movies",children:e.jsx(Le,{})}),e.jsx(v,{whileTap:{scale:1.3},to:"/favorites",children:e.jsx(oe,{})}),e.jsx(v,{whileTap:{scale:1.3},to:"/watched",children:e.jsx(re,{})})]}),Pe=t=>o.createElement("svg",{width:74,height:84,viewBox:"0 0 74 84",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},o.createElement("ellipse",{cx:37,cy:41.5528,rx:22.5327,ry:34.9723,transform:"rotate(-30 37 41.5528)",fill:"url(#paint0_linear_83_548)"}),o.createElement("ellipse",{cx:36.2674,cy:41.8277,rx:22.5327,ry:34.9723,transform:"rotate(-90 36.2674 41.8277)",fill:"url(#paint1_linear_83_548)"}),o.createElement("ellipse",{cx:37.0206,cy:41.73,rx:22.5327,ry:34.9723,transform:"rotate(-160 37.0206 41.73)",fill:"url(#paint2_linear_83_548)"}),o.createElement("ellipse",{cx:36.9153,cy:41.3135,rx:22.6672,ry:22.0196,fill:"url(#paint3_linear_83_548)"}),o.createElement("path",{d:"M44.0391 41.313L33.3531 49.1651V33.4608L44.0391 41.313Z",fill:"white"}),o.createElement("defs",null,o.createElement("linearGradient",{id:"paint0_linear_83_548",x1:37,y1:6.58049,x2:37,y2:76.525,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#11EBFC",stopOpacity:.31}),o.createElement("stop",{offset:1,stopColor:"#F706F4",stopOpacity:.3})),o.createElement("linearGradient",{id:"paint1_linear_83_548",x1:36.2674,y1:6.85542,x2:36.2674,y2:76.7999,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#11EBFC",stopOpacity:.31}),o.createElement("stop",{offset:1,stopColor:"#F706F4",stopOpacity:.3})),o.createElement("linearGradient",{id:"paint2_linear_83_548",x1:37.0206,y1:6.75773,x2:37.0206,y2:76.7023,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#11EBFC",stopOpacity:.31}),o.createElement("stop",{offset:1,stopColor:"#F706F4",stopOpacity:.3})),o.createElement("linearGradient",{id:"paint3_linear_83_548",x1:36.9153,y1:19.2939,x2:36.9153,y2:63.3331,gradientUnits:"userSpaceOnUse"},o.createElement("stop",{stopColor:"#F706F4"}),o.createElement("stop",{offset:1,stopColor:"#11EBFC"})))),Be=i.header`
  position: relative;
  width: 50px;
  height: auto;
  background: ${({theme:t})=>t.navBarBgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);

  @media ${c.tablet} {
    width: 80px;
  }

  @media ${c.laptopM} {
    width: 90px;
  }

  @media ${c.laptopL} {
    width: 120px;
  }
`,He=i.div`
  top: 0;
  left: 0;
  position: sticky;
  padding: 25px 0;
  width: 100%;
`,Ae=i(Pe)`
  width: 40px;
  height: 40px;

  @media ${c.tablet} {
    width: 75px;
    height: 75px;
  }
`,Oe=()=>e.jsx(e.Fragment,{children:e.jsx(Be,{children:e.jsxs(He,{children:[e.jsx(Ae,{}),e.jsx(Me,{})]})})}),Re={light:ae,dark:ne};function Fe(){const t=new q,[r,n]=o.useState(""),[l]=u("userID",null),[p,d]=u("theme","dark"),x=G({...Re[p]});return e.jsx(W,{injectFirst:!0,children:e.jsx(Q,{theme:x,children:e.jsxs(J,{theme:x,children:[e.jsxs(Y,{client:t,children:[l?e.jsxs(se,{children:[e.jsx(Oe,{}),e.jsxs(V,{children:[e.jsx(Te,{theme:p,setTheme:d,onChange:h=>n(h)}),e.jsx(o.Suspense,{fallback:e.jsx(C,{}),children:e.jsx($,{query:r})})]})]}):e.jsx(o.Suspense,{fallback:e.jsx(C,{}),children:e.jsx(Ce,{})}),e.jsx(K.ReactQueryDevtools,{initialIsOpen:!1})]}),e.jsx(ie,{autoClose:3e3,position:"top-center",limit:1})]})})})}X.createRoot(document.getElementById("root")).render(e.jsx(ee.StrictMode,{children:e.jsx(te,{children:e.jsx(Fe,{})})}));
