import{r as s,u as v,E as P,W as y,j as e,m as c,D as M,P as E}from"./vendor-373470ad.js";import{u as T,Q as L}from"./QueryTrigger-cd97c1b5.js";import{a as w}from"./moviesIDBService-2b8b2360.js";import{p as C,i as G}from"./animations-5f4924b3.js";import{M as I}from"./MovieList-20030c82.js";import{M as R}from"./MovieCard-079a6a29.js";import{G as S}from"./GoBackButton-1a33da40.js";import{G as V}from"./index-22f69c02.js";import"./index-e2daedf6.js";import"./DefaultMovieImage-d6b5fbbf.js";const f=({category:p})=>{const[r,l]=s.useState([]),[i,x]=s.useState(0),u=v(),{ref:d,inView:o}=T({threshold:.1}),{data:a,error:g,fetchNextPage:h,isLoading:j,isError:n,isSuccess:m}=P(["topRatedMovies",{category:p}],w,{staleTime:6e4,cacheTime:6e4,getNextPageParam:t=>{if(!(typeof t=="object"&&t.nextPage>t.totalPages))return t.nextPage}});return s.useEffect(()=>{window.scrollTo({top:0})},[]),s.useEffect(()=>{r.length!==0&&o&&h()},[o]),s.useEffect(()=>{m&&(l([...r,...a.pages[i].results]),x(i+1)),n&&y.error(`Error: ${g.response.data.message}`)},[a,n,m]),j?e.jsx(V,{}):e.jsxs(e.Fragment,{children:[e.jsxs(c.div,{initial:"closed",animate:"open",exit:"exit",variants:C,children:[e.jsx(S,{path:"/"}),r.length>0&&e.jsx(I,{children:r.map(t=>e.jsx(c.li,{initial:"closed",animate:"open",exit:"exit",variants:G(),children:e.jsx(M,{to:`/movies/${t.id}`,state:{from:{location:u}},children:e.jsx(R,{movie:t})})},t.id))})]}),e.jsx(L,{ref:d})]})};f.propTypes={category:E.string.isRequired};const z=f;export{z as default};