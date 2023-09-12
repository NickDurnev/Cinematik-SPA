import{n as p,d as l,j as e,W as m,L as d,b as T,a as j,m as w}from"./vendor-446e3497.js";import"./axios-d95ca511.js";import{e as i,T as x,h as $,M,b,c as y,p as E,j as L}from"./common-c2210d67.js";import{S}from"./shared/home-page/similarMovies-3576ce15.js";import{r as C}from"./react-responsive-ef441892.js";import"./swiper-82c7b89e.js";const z=p.p`
  margin-bottom: 20px;
  padding-left: 10px;
  text-align: start;
  font-family: 'Technovier';
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
  color: ${({theme:t})=>t.textColor};

  @media ${i.tablet} {
    padding: 0;
  }

  @media ${i.laptopM} {
    margin-bottom: 40px;
    font-size: 25px;
    line-height: 60px;
  }
`,F=()=>{const{data:t,isError:r,isLoading:o,isSuccess:s,error:n}=l("trendingMoviesSwiper",$,{staleTime:6e4,cacheTime:6e4});return o?e.jsx(x,{}):r?(m.error(`Error: ${n.message}`),null):s&&t?e.jsxs(e.Fragment,{children:[e.jsx(z,{children:"Trending movies"}),e.jsx(S,{movies:t,onAutoPlay:!0})]}):null},P=p.div`
  width: 310px;
  margin: 0 auto;
  padding-bottom: 40px;
  overflow: hidden;

  @media ${i.tablet} {
    width: 640px;
    flex-wrap: nowrap;
  }

  @media ${i.laptopM} {
    width: 1300px;
    padding-bottom: 60px;
  }

  @media ${i.laptopL} {
    width: 1650px;
    padding-bottom: 80px;
  }
`,R=p(d)`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-align: start;
  font-family: 'Technovier';
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
  cursor: pointer;
  color: ${({theme:t})=>t.textColor};
  transition: all ${({theme:t})=>t.hoverTransition} ${({theme:t})=>t.hoverTimeFunction};

  &:hover,
  &:focus {
    color: ${({theme:t})=>t.linkColor};
  }

  @media ${i.laptopM} {
    margin-bottom: 40px;
    font-size: 25px;
    line-height: 60px;
  }

  &::after {
    content: '>';
    margin-left: 8px;
  }
`,c=({category:t,title:r})=>{const o=T(),s=C.useMediaQuery({query:"(min-width: 1920px)"}),{data:n,isError:h,isLoading:g,isSuccess:f,error:u}=l(["topRatedMoviesSwiper",{category:t}],y,{staleTime:6e4,cacheTime:6e4});return g?e.jsx(x,{}):h?(m.error(`Error: ${u.message}`),null):f?e.jsx(e.Fragment,{children:e.jsxs(P,{children:[e.jsx(R,{to:{pathname:`/movies/${t}`},children:r}),e.jsx(M,{children:n.results.map((a,v)=>{if(!(v>(s?4:3)))return e.jsx("li",{children:e.jsx(d,{to:`/movies/${a.id}`,state:{from:{location:o}},children:e.jsx(b,{movie:a})})},a.id)})})]})}):null},k=({setGenres:t})=>{j.useEffect(()=>{window.scrollTo({top:0})},[]);const{data:r,isError:o,isSuccess:s,error:n}=l("moviesGenres",L,{staleTime:864*Math.pow(10,5),cacheTime:864*Math.pow(10,5)});return o?m.error(`Error: ${n.message}`):(s&&t([...r]),e.jsxs(w.div,{initial:"closed",animate:"open",exit:"exit",variants:E,children:[e.jsx(F,{}),e.jsx(c,{category:"top_rated",title:"Top rated movies"}),e.jsx(c,{category:"upcoming",title:"Upcoming rated movies"})]}))},D=k;export{D as default};
