import{a as t,b as M,c as w,e as L,W as T,j as s,m as g,L as b}from"./vendor-446e3497.js";import{u as I}from"./react-intersection-observer-ba847fea.js";import{p as S,a as V,M as $,i as k,b as y,Q as N,s as Q}from"./common-c2210d67.js";import"./axios-d95ca511.js";const R=({query:r})=>{const[i,o]=t.useState([]),[n,c]=t.useState(0),p=M();let h=w();const{ref:v,inView:l}=I({threshold:.1}),{data:a,error:j,fetchNextPage:P,isLoading:f,isError:x,isSuccess:m,refetch:E}=L(["searchMovie",{query:r}],Q,{enabled:!1,staleTime:6e4,cacheTime:6e4,getNextPageParam:e=>{if(e&&!(typeof e=="object"&&e.nextPage>e.totalPages))return e.nextPage}});return t.useEffect(()=>{window.scrollTo({top:0})},[]),t.useEffect(()=>{window.scrollTo({top:0}),o([]),c(0),E(),h(`?query=${r}`)},[r]),t.useEffect(()=>{i.length!==0&&l&&P()},[l]),t.useEffect(()=>{var e,u;if(m){const d=a==null?void 0:a.pages[n];d&&(o([...i,...d.results]),c(n+1))}x&&T.error(`Error: ${((u=(e=j.response)==null?void 0:e.data)==null?void 0:u.message)??"Unknown error"}`)},[a,x,m]),s.jsxs(s.Fragment,{children:[s.jsxs(g.div,{initial:"closed",animate:"open",exit:"exit",variants:S,children:[f&&s.jsx(V,{}),i.length>0&&!f&&s.jsx($,{children:i.map(e=>s.jsx(g.li,{initial:"closed",animate:"open",exit:"exit",variants:k(),children:s.jsx(b,{to:`/movies/${e.id}`,state:{from:{location:p}},children:s.jsx(y,{movie:e})})},e.id))})]}),s.jsx(N,{ref:v})]})},W=R;export{W as default};
