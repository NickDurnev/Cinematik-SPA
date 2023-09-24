import{n,z as m,j as t,W as d,D as c,u as w,r as $,m as T}from"./vendor-373470ad.js";import{f as j,a as M,b}from"./moviesIDBService-2b8b2360.js";import{d as i,T as x}from"./index-d3864d42.js";import{S as y,r as E}from"./Swiper-d84da196.js";import{M as L}from"./MovieList-723a4d81.js";import{M as S}from"./MovieCard-d3167d08.js";import{p as C}from"./animations-5f4924b3.js";import"./index-e2daedf6.js";import"./DefaultMovieImage-d6b5fbbf.js";const z=n.div`
  width: 300px;
  margin: 0 auto;
  padding-bottom: 40px;
  overflow: hidden;

  @media ${i.tablet} {
    width: 640px;
  }

  @media ${i.laptopM} {
    width: 1300px;
    padding-bottom: 60px;
  }

  @media ${i.laptopL} {
    width: 1650px;
    padding-bottom: 80px;
  }
`,P=n.p`
  margin-bottom: 20px;
  padding-left: 10px;
  text-align: start;
  font-family: 'Technovier';
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
  color: ${({theme:e})=>e.textColor};

  @media ${i.tablet} {
    padding: 0;
  }

  @media ${i.laptopM} {
    margin-bottom: 40px;
    font-size: 25px;
    line-height: 60px;
  }
`,R=()=>{const{data:e,isError:o,isLoading:r,isSuccess:s,error:a}=m("trendingMoviesSwiper",j,{staleTime:6e4,cacheTime:6e4});return r?t.jsx(x,{}):o?(d.error(`Error: ${a.message}`),null):s&&e?t.jsxs(z,{children:[t.jsx(P,{children:"Trending movies"}),t.jsx(y,{movies:e,onAutoPlay:!0})]}):null},k=n.div`
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
`,D=n(c)`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-align: start;
  font-family: 'Technovier';
  font-weight: 400;
  font-size: 16px;
  line-height: 40px;
  cursor: pointer;
  color: ${({theme:e})=>e.textColor};
  transition: all ${({theme:e})=>e.hoverTransition} ${({theme:e})=>e.hoverTimeFunction};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.linkColor};
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
`,l=({category:e,title:o})=>{const r=w(),s=E.useMediaQuery({query:"(min-width: 1920px)"}),{data:a,isError:h,isLoading:f,isSuccess:g,error:u}=m(["topRatedMoviesSwiper",{category:e}],M,{staleTime:6e4,cacheTime:6e4});return f?t.jsx(x,{}):h?(d.error(`Error: ${u.message}`),null):g?t.jsx(t.Fragment,{children:t.jsxs(k,{children:[t.jsx(D,{to:{pathname:`/movies/${e}`},children:o}),t.jsx(L,{children:a.results.map((p,v)=>{if(!(v>(s?4:3)))return t.jsx("li",{children:t.jsx(c,{to:`/movies/${p.id}`,state:{from:{location:r}},children:t.jsx(S,{movie:p})})},p.id)})})]})}):null},F=({setGenres:e})=>{$.useEffect(()=>{window.scrollTo({top:0})},[]);const{data:o,isError:r,isSuccess:s,error:a}=m("moviesGenres",b,{staleTime:864*Math.pow(10,5),cacheTime:864*Math.pow(10,5)});return r?d.error(`Error: ${a.message}`):(s&&e([...o]),t.jsxs(T.div,{initial:"closed",animate:"open",exit:"exit",variants:C,children:[t.jsx(R,{}),t.jsx(l,{category:"top_rated",title:"Top rated movies"}),t.jsx(l,{category:"upcoming",title:"Upcoming rated movies"})]}))},B=F;export{B as default};
