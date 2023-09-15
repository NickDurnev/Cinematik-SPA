import{G as w,H as N,j as e,n as m,m as x,e as V,r as s,u as b,E as q,W as B,D as C,P as $,J as k}from"./vendor-373470ad.js";import{u as z,Q as G}from"./QueryTrigger-cd97c1b5.js";import{f as H,d as Q}from"./moviesAPI-680262f9.js";import{u as U,G as O}from"./index-31646e86.js";import{M as F}from"./MovieList-9c1d5fdf.js";import{M as J}from"./MovieCard-8d3e2844.js";import{N as W}from"./Notify-f3b59ba3.js";import{p as A,i as K}from"./animations-5f4924b3.js";import"./index-e2daedf6.js";import"./DefaultMovieImage-d6b5fbbf.js";var a={},X=N;Object.defineProperty(a,"__esModule",{value:!0});var h=a.default=void 0,Y=X(w()),Z=e,ee=(0,Y.default)((0,Z.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");h=a.default=ee;const te=m(x.li)`
  position: relative;
`,se=m(V)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  color: ${({theme:o})=>o.bgElementColor};
  width: 50px;
  height: 50px;

  & > svg {
    width: 30px;
    height: 30px;
  }
`,g=({category:o})=>{const[r,n]=s.useState([]),[c,v]=s.useState(0),[l]=U("userID"),j=s.useRef(10).current,M=b(),{ref:y,inView:u}=z({threshold:.1}),{data:f,isError:d,isSuccess:p,isLoading:I,error:D,fetchNextPage:E}=q(["getMovies",{userID:l,limit:j,category:o}],H,{enabled:!0,staleTime:6e4,cacheTime:0,getNextPageParam:({movies:t,nextPage:i})=>{if(t&&!(t.length<10))return i}}),T=()=>k(t=>Q(t)),{mutate:P}=T();s.useEffect(()=>{window.scrollTo({top:0})},[]),s.useEffect(()=>{r.length!==0&&u&&E()},[u]),s.useEffect(()=>{p&&(n([...r,...f.pages[c].movies]),v(c+1)),d&&B.error(`Error: ${D.response.data.message}`)},[f,d,p]);const R=(t,i)=>{t.currentTarget.nodeName==="BUTTON"&&P([l,i],{onSuccess:({data:S})=>{const _=r.filter(({_id:L})=>L!==S.id);n([..._])}})};return I?e.jsx(O,{}):e.jsxs(e.Fragment,{children:[e.jsx(x.div,{initial:"closed",animate:"open",exit:"exit",variants:A,children:r.length>0?e.jsx(F,{children:r.map(t=>e.jsxs(te,{initial:"closed",animate:"open",exit:"exit",variants:K(),children:[e.jsx(se,{onClick:i=>R(i,t._id),children:e.jsx(h,{})}),e.jsx(C,{to:`/movies/${t.idbID}`,state:{from:{location:M.pathname}},children:e.jsx(J,{movie:t})})]},t._id))}):e.jsx(W,{children:e.jsx("h2",{style:{textTransform:"uppercase"},children:"List is empty"})})}),e.jsx(G,{ref:y})]})};g.propTypes={category:$.string.isRequired};const me=g;export{me as default};
