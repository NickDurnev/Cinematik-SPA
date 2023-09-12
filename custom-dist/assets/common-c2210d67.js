import{a as x,n as l,S as w,j as t,C as $,W as b,r as j,i as k,R as S,P as u,A as _,I as M,L,m as P}from"./vendor-446e3497.js";import{a as c}from"./axios-d95ca511.js";function oe(e,a){const[s,i]=x.useState(()=>JSON.parse(window.localStorage.getItem(e))??a);return x.useEffect(()=>{window.localStorage.setItem(e,JSON.stringify(s))},[e,s]),[s,i]}const h={mobileS:"320px",mobileM:"375px",mobileL:"425px",tablet:"768px",laptop:"1024px",laptopM:"1366px",laptopL:"1920px",desktop:"2560px"},p={mobileS:`(min-width: ${h.mobileS})`,mobileM:`(min-width: ${h.mobileM})`,mobileL:`(min-width: ${h.mobileL})`,tablet:`(min-width: ${h.tablet})`,laptop:`(min-width: ${h.laptop})`,laptopM:`(min-width: ${h.laptopM})`,laptopL:`(min-width: ${h.laptopL})`,desktopL:`(min-width: ${h.desktop})`},C=l.div`
  width: 100%;

  & + & {
    margin-top: 20px;
  }

  @media ${p.mobileM} {
    & + & {
      margin-top: 0;
    }
  }
`,I=l(w)`
  width: 310px;
  height: 465px;
`,D=l(w)`
  width: 310px;
  height: 30px;
`,q=l.div`
  width: 100%;
  display: block;

  @media ${p.tablet} {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    white-space: nowrap;
    gap: 20px;
    justify-items: center;
    align-items: stretch;
  }

  @media ${p.laptop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${p.laptopM} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${p.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`,o=()=>t.jsxs(C,{children:[t.jsx(I,{variant:"rectangular",animation:"wave"}),t.jsx(D,{variant:"text",animation:"wave"})]}),ie=()=>t.jsxs(q,{children:[t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{}),t.jsx(o,{})]}),R=l($)`
  display: block;
  margin: 0 auto;
  text-align: center;
`,T=()=>t.jsxs(R,{viewBox:"0 0 400 160",height:160,width:400,backgroundColor:"transparent",children:[t.jsx("circle",{cx:"150",cy:"86",r:"8"}),t.jsx("circle",{cx:"194",cy:"86",r:"8"}),t.jsx("circle",{cx:"238",cy:"86",r:"8"})]});T.metadata={name:"RioF",github:"clariokids",description:"Three Dots",filename:"ThreeDots"};const d="https://api.themoviedb.org/3/",g="105ba628fde77462ee84526f3393a31c",ne=async()=>(await c.get(`${d}trending/movie/day?api_key=${g}`)).data.results,re=async()=>(await c.get(`${d}genre/movie/list?api_key=${g}&language=en-US`)).data.genres,le=async e=>{const{pageParam:a=1,queryKey:s}=e,[,{genreID:i}]=s,n=await c.get(`${d}discover/movie?api_key=${g}&with_genres=${i}&page=${a}`),r=n.data.results,m=n.data.total_pages;return{results:r,nextPage:a+1,totalPages:m}},pe=async()=>{const e=Math.floor(Math.random()*404)+1;return{results:(await c.get(`${d}movie/725201/similar?api_key=${g}&language=en-US&page=${e}`)).data.results}},ce=async e=>{const{pageParam:a=1,queryKey:s}=e,[,{category:i}]=s,n=await c.get(`${d}movie/${i}?api_key=${g}&language=en-US&page=${a}`),r=n.data.results,m=n.data.total_pages;return{results:r,nextPage:a+1,totalPages:m}},de=async e=>{const{pageParam:a=1,queryKey:s}=e,[,{query:i}]=s;if(!i)return;console.log("params:",e);const n=await c.get(`${d}search/movie?api_key=${g}&language=en-US&query=${i}&page=${a}&include_adult=false`),r=n.data.results,m=n.data.total_pages;return r.length||b.info("Movies were not found"),{results:r,nextPage:a+1,totalPages:m}},ge=async e=>{const[a,{movieID:s}]=e.queryKey;return await(await c.get(`${d}movie/${s}?api_key=${g}&language=en-US`)).data},xe=async e=>{const[,{actorID:a}]=e.queryKey;return await(await c.get(`${d}person/${a}?api_key=${g}&language=en-US`)).data},he=async e=>{const[,{actorID:a}]=e.queryKey,{data:s}=await c.get(`${d}person/${a}/movie_credits?api_key=${g}&language=en-US`);return s},me=async e=>{const[,{movieID:a}]=e.queryKey;return(await c.get(`${d}movie/${a}/credits?api_key=${g}&language=en-US`)).data},ue=async e=>{const{pageParam:a=1,queryKey:s}=e,[i,{movieID:n}]=s;console.log(`${i}`);const r=await c.get(`${d}movie/${n}/reviews?api_key=${g}&language=en-US&page=1`),m=r.data.results,f=r.data.total_pages;return{results:m,nextPage:a+1,totalPages:f}},ye=async e=>(await c.get(`${d}movie/${e}/videos?api_key=${g}&language=en-US`)).data.results;var v={},B=k;Object.defineProperty(v,"__esModule",{value:!0});var y=v.default=void 0,E=B(j()),U=t,F=(0,E.default)((0,U.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");y=v.default=F;const G=e=>{const a=window.localStorage.getItem("moviesGenres");if(!a)return;const s=JSON.parse(a);let i=null,n=null;return s&&e.length>0&&(i=s.find(({id:r})=>r===e[0]),n=i.name),n},z=e=>x.createElement("svg",{width:160,height:160,viewBox:"0 0 160 160",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},x.createElement("circle",{cx:80,cy:80,r:76.5,strokeWidth:7}),x.createElement("path",{opacity:.3,d:"M117.689 82.1665L58.6445 119.667V44.6665L117.689 82.1665Z",fill:"black"}),x.createElement("path",{d:"M115.189 79.6665L56.1445 117.167V42.1665L115.189 79.6665Z",fill:"white"})),K=l.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`,N=()=>t.jsx(K,{children:t.jsx(z,{})}),W=l.div`
  position: relative;
`,V=l.div`
  width: 310px;
  height: 465px;
  overflow: hidden;
  background-color: ${({poster_path:e})=>!e&&"#666666"};
  color: ${({theme:e})=>e.linkColor};

  & > div {
    height: 100%;
  }

  & img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: linear-gradient(
      180deg,
      rgba(29, 29, 29, 0) 0%,
      rgba(29, 29, 29, 0.8) 80.79%
    );
  }

  & svg {
    width: 150px;
    height: auto;
    stroke: currentColor;
  }

  & p {
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: ${({theme:e})=>e.textColor};
    word-break: break-all;
    white-space: normal;

    @media ${p.tablet} {
      font-weight: 400;
      font-size: 18px;
    }
  }
`,O=l.span`
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px;
  font-size: 16px;
  line-height: 16px;
  background: rgba(29, 29, 29, 0.5);
  backdrop-filter: blur(2px);
  border-radius: 0px 10px;
  color: ${({theme:e})=>e.linkColor};
`,A=l.div`
  width: 100%;
  height: 90px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  padding: 15px 10px;
  text-align: start;
  background: ${({theme:e})=>e.navBarBgColor};
  backdrop-filter: blur(12px);
`,ve=({movie:e})=>{const{poster_path:a,title:s,vote_average:i,genre_ids:n}=e;let r=null;return n&&(r=G(n)),t.jsx(V,{poster_path:a,children:t.jsxs(W,{children:[r&&t.jsx(O,{children:r}),a?t.jsx("img",{src:`https://image.tmdb.org/t/p/w400${a}`,alt:s}):t.jsx(N,{}),t.jsxs(A,{children:[t.jsx("p",{children:s}),i>0&&t.jsx(S,{name:"read-only",value:+i.toFixed(1)/2,readOnly:!0,precision:.5,icon:t.jsx(y,{fontSize:"inherit",style:{width:"18px",height:"18px",stroke:"#FFDF37"}}),emptyIcon:t.jsx(y,{fontSize:"inherit",style:{width:"18px",height:"18px",stroke:"#FFDF37"}})})]})]})})},J=l.ul`
  width: 310px;
  display: block;
  margin: 0 auto;

  & > li + li {
    margin-top: 20px;

    @media ${p.tablet} {
      margin: 0;
    }
  }

  @media ${p.tablet} {
    width: 640px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    white-space: nowrap;
    gap: 20px;
    justify-items: center;
    align-items: stretch;
  }

  @media ${p.laptopM} {
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${p.laptopL} {
    grid-template-columns: repeat(5, 1fr);
  }
`,Q=({children:e})=>t.jsx(J,{children:t.jsx(_,{children:e})});Q.propTypes={children:u.node.isRequired};const Z=(e=0)=>({open:{opacity:1,y:0,transition:{delay:e+.5}},closed:{opacity:0,y:"50%"},exit:{opacity:0,y:0,transition:{duration:.3,delay:e+.3}}}),we={open:{opacity:1,scale:1,x:"-50%",y:"-50%"},closed:{opacity:0,scale:.7,x:"-50%",y:"-50%"}},fe={open:{opacity:1,height:"100%"},closed:{opacity:0,height:0},exit:{y:window.innerHeight,opacity:0,transition:{duration:.3,delay:.5}}},$e={open:{opacity:1},closed:{opacity:0}},H=l.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 5px;
  height: 10vh;
`,be=x.forwardRef((e,a)=>t.jsx(H,{ref:a})),X=e=>x.createElement("svg",{width:45,height:14,viewBox:"0 0 45 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},x.createElement("path",{d:"M7 13L1 7L7 1"}),x.createElement("path",{d:"M45 7L1 7"})),Y=l(M)`
  position: absolute;
  top: 55px;
  left: 50px;
  z-index: 2;
  color: ${({theme:e})=>e.textColor};
  width: 60px;
  height: 60px;
  transition: all ${({theme:e})=>e.hoverTransition} ${({theme:e})=>e.hoverTimeFunction};

  & > svg {
    stroke: currentColor;
    width: 40px;
    height: 40px;
  }

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.linkColor};
  }

  @media ${p.tablet} {
    top: 15px;
    left: 85px;
  }

  @media ${p.laptopM} {
    left: 100px;
  }

  @media ${p.laptopL} {
    top: 85px;
    left: 200px;
  }
`,je=({path:e,state:a})=>t.jsx(L,{to:e,state:{state:a},children:t.jsx(Y,{children:t.jsx(X,{})})}),ee=l(P.div)`
  width: 100%;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
`,te=({children:e,delay:a=0})=>t.jsx(ee,{initial:"closed",animate:"open",variants:Z(a),children:e});te.propTypes={children:u.node.isRequired,padding:u.string};export{N as D,je as G,Q as M,te as N,be as Q,T,ie as a,ve as b,ce as c,le as d,p as e,he as f,xe as g,ne as h,Z as i,re as j,$e as k,ye as l,me as m,ge as n,ue as o,fe as p,we as q,pe as r,de as s,oe as u};
