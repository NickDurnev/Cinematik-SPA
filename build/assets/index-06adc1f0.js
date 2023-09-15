import{n as p,z as m,j as e,W as l,D as c,u as T,r as j,m as w}from"./vendor-373470ad.js";import{f as $,a as M,b as y}from"./moviesIDBService-2b8b2360.js";import{d as r,T as x}from"./index-22f69c02.js";import{S as b,r as E}from"./Swiper-93451337.js";import{M as L}from"./MovieList-20030c82.js";import{M as S}from"./MovieCard-079a6a29.js";import{p as C}from"./animations-5f4924b3.js";import"./index-e2daedf6.js";import"./DefaultMovieImage-d6b5fbbf.js";const z=p.p`
  margin-bottom: 20px;
  padding-left: 10px;
  text-align: start;
  font-family: 'Technovier';
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
  color: ${({theme:t})=>t.textColor};

  @media ${r.tablet} {
    padding: 0;
  }

  @media ${r.laptopM} {
    margin-bottom: 40px;
    font-size: 25px;
    line-height: 60px;
  }
`,F=()=>{const{data:t,isError:i,isLoading:o,isSuccess:s,error:n}=m("trendingMoviesSwiper",$,{staleTime:6e4,cacheTime:6e4});return o?e.jsx(x,{}):i?(l.error(`Error: ${n.message}`),null):s&&t?e.jsxs(e.Fragment,{children:[e.jsx(z,{children:"Trending movies"}),e.jsx(b,{movies:t,onAutoPlay:!0})]}):null},P=p.div`
  width: 310px;
  margin: 0 auto;
  padding-bottom: 40px;
  overflow: hidden;

  @media ${r.tablet} {
    width: 640px;
    flex-wrap: nowrap;
  }

  @media ${r.laptopM} {
    width: 1300px;
    padding-bottom: 60px;
  }

  @media ${r.laptopL} {
    width: 1650px;
    padding-bottom: 80px;
  }
`,R=p(c)`
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

  @media ${r.laptopM} {
    margin-bottom: 40px;
    font-size: 25px;
    line-height: 60px;
  }

  &::after {
    content: '>';
    margin-left: 8px;
  }
`,d=({category:t,title:i})=>{const o=T(),s=E.useMediaQuery({query:"(min-width: 1920px)"}),{data:n,isError:f,isLoading:h,isSuccess:g,error:u}=m(["topRatedMoviesSwiper",{category:t}],M,{staleTime:6e4,cacheTime:6e4});return h?e.jsx(x,{}):f?(l.error(`Error: ${u.message}`),null):g?e.jsx(e.Fragment,{children:e.jsxs(P,{children:[e.jsx(R,{to:{pathname:`/movies/${t}`},children:i}),e.jsx(L,{children:n.results.map((a,v)=>{if(!(v>(s?4:3)))return e.jsx("li",{children:e.jsx(c,{to:`/movies/${a.id}`,state:{from:{location:o}},children:e.jsx(S,{movie:a})})},a.id)})})]})}):null},k=({setGenres:t})=>{j.useEffect(()=>{window.scrollTo({top:0})},[]);const{data:i,isError:o,isSuccess:s,error:n}=m("moviesGenres",y,{staleTime:864*Math.pow(10,5),cacheTime:864*Math.pow(10,5)});return o?l.error(`Error: ${n.message}`):(s&&t([...i]),e.jsxs(w.div,{initial:"closed",animate:"open",exit:"exit",variants:C,children:[e.jsx(F,{}),e.jsx(d,{category:"top_rated",title:"Top rated movies"}),e.jsx(d,{category:"upcoming",title:"Upcoming rated movies"})]}))},_=k;export{_ as default};
