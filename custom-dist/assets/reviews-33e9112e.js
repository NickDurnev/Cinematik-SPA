var E=Object.defineProperty;var S=(s,e,t)=>e in s?E(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var w=(s,e,t)=>(S(s,typeof e!="symbol"?e+"":e,t),t);import{a as j,P as r,k as T,G as M,n as m,m as y,j as o,u as R,e as W,W as $}from"./vendor-446e3497.js";import{d as N}from"./@mui/icons-material-2d86ad94.js";import{e as u,T as O,N as z,o as H}from"./common-c2210d67.js";import"./axios-d95ca511.js";class x extends j.Component{constructor(e){super(e),this.scrollListener=this.scrollListener.bind(this),this.eventListenerOptions=this.eventListenerOptions.bind(this),this.mousewheelListener=this.mousewheelListener.bind(this)}componentDidMount(){this.pageLoaded=this.props.pageStart,this.options=this.eventListenerOptions(),this.attachScrollListener()}componentDidUpdate(){if(this.props.isReverse&&this.loadMore){const e=this.getParentElement(this.scrollComponent);e.scrollTop=e.scrollHeight-this.beforeScrollHeight+this.beforeScrollTop,this.loadMore=!1}this.attachScrollListener()}componentWillUnmount(){this.detachScrollListener(),this.detachMousewheelListener()}isPassiveSupported(){let e=!1;const t={get passive(){e=!0}};try{document.addEventListener("test",null,t),document.removeEventListener("test",null,t)}catch{}return e}eventListenerOptions(){let e=this.props.useCapture;return this.isPassiveSupported()?e={useCapture:this.props.useCapture,passive:!0}:e={passive:!1},e}setDefaultLoader(e){this.defaultLoader=e}detachMousewheelListener(){let e=window;this.props.useWindow===!1&&(e=this.scrollComponent.parentNode),e.removeEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture)}detachScrollListener(){let e=window;this.props.useWindow===!1&&(e=this.getParentElement(this.scrollComponent)),e.removeEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),e.removeEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture)}getParentElement(e){const t=this.props.getScrollParent&&this.props.getScrollParent();return t??(e&&e.parentNode)}filterProps(e){return e}attachScrollListener(){const e=this.getParentElement(this.scrollComponent);if(!this.props.hasMore||!e)return;let t=window;this.props.useWindow===!1&&(t=e),t.addEventListener("mousewheel",this.mousewheelListener,this.options?this.options:this.props.useCapture),t.addEventListener("scroll",this.scrollListener,this.options?this.options:this.props.useCapture),t.addEventListener("resize",this.scrollListener,this.options?this.options:this.props.useCapture),this.props.initialLoad&&this.scrollListener()}mousewheelListener(e){e.deltaY===1&&!this.isPassiveSupported()&&e.preventDefault()}scrollListener(){const e=this.scrollComponent,t=window,i=this.getParentElement(e);let n;if(this.props.useWindow){const c=document.documentElement||document.body.parentNode||document.body,l=t.pageYOffset!==void 0?t.pageYOffset:c.scrollTop;this.props.isReverse?n=l:n=this.calculateOffset(e,l)}else this.props.isReverse?n=i.scrollTop:n=e.scrollHeight-i.scrollTop-i.clientHeight;n<Number(this.props.threshold)&&e&&e.offsetParent!==null&&(this.detachScrollListener(),this.beforeScrollHeight=i.scrollHeight,this.beforeScrollTop=i.scrollTop,typeof this.props.loadMore=="function"&&(this.props.loadMore(this.pageLoaded+=1),this.loadMore=!0))}calculateOffset(e,t){return e?this.calculateTopPosition(e)+(e.offsetHeight-t-window.innerHeight):0}calculateTopPosition(e){return e?e.offsetTop+this.calculateTopPosition(e.offsetParent):0}render(){const e=this.filterProps(this.props),{children:t,element:i,hasMore:n,initialLoad:c,isReverse:l,loader:f,loadMore:p,pageStart:L,ref:v,threshold:P,useCapture:b,useWindow:g,getScrollParent:h,...d}=e;d.ref=C=>{this.scrollComponent=C,v&&v(C)};const a=[t];return n&&(f?l?a.unshift(f):a.push(f):this.defaultLoader&&(l?a.unshift(this.defaultLoader):a.push(this.defaultLoader))),T.createElement(i,d,a)}}w(x,"propTypes",{children:r.node.isRequired,element:r.node,hasMore:r.bool,initialLoad:r.bool,isReverse:r.bool,loader:r.node,loadMore:r.func.isRequired,pageStart:r.number,ref:r.func,getScrollParent:r.func,threshold:r.number,useCapture:r.bool,useWindow:r.bool}),w(x,"defaultProps",{element:"div",hasMore:!1,initialLoad:!0,pageStart:0,ref:null,threshold:250,useWindow:!0,isReverse:!1,useCapture:!1,loader:null,getScrollParent:null});function D(s){return M({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"}}]})(s)}const I=m(y.li)`
  width: 100%;
  padding-bottom: 80px;
  color: ${({theme:s})=>s.textColor};
  background-color: transparent;
  border-bottom: 0.5px solid ${({theme:s})=>s.textColor};
`,U=m.div`
  width: 90px;
  margin-bottom: 50px;

  & > img {
    width: 100%;
    height: auto;
    border-radius: 50%;
  }
`,Y=m.div`
  width: 100%;
  text-align: start;

  & p {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: var(--mainTextColor);
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`,k=m.p`
  margin-bottom: 35px;

  @media ${u.laptopM} {
    width: 540px;
    margin-bottom: 50px;
  }

  @media ${u.laptopL} {
    width: 690px;
    margin-bottom: 65px;
  }
`,q=({data:s})=>{const{id:e,formattedPath:t,avatar_path:i,author:n,content:c,created_at:l}=s;return o.jsxs(I,{initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},viewport:{once:!0},children:[o.jsx(U,{children:i&&(t!=null&&t.includes("www.gravatar.com"))?o.jsx("img",{src:t,alt:"User avatar"}):o.jsx(D,{size:"90"})}),o.jsxs(Y,{children:[o.jsx(k,{children:c}),o.jsxs("div",{children:[o.jsx("p",{children:n}),o.jsx("p",{children:l.substr(0,10)})]})]})]},e)},A=m.ul`
  padding: 40px 0;
  margin: 0 auto;

  & > li + li {
    margin-top: 55px;

    @media ${u.laptop} {
      margin-top: 80px;
    }
  }

  @media ${u.tablet} {
    width: 500px;
  }

  @media ${u.laptopM} {
    width: 685px;
  }

  @media ${u.laptopL} {
    width: 900px;
  }
`,G=()=>{const{movieID:s}=R(),{data:e,error:t,isLoading:i,isError:n,isSuccess:c,fetchNextPage:l,hasNextPage:f}=W(["movieReviews",{movieID:s}],H,{getNextPageParam:p=>{if(!(typeof p=="object"&&p.nextPage>p.totalPages))return p.nextPage},staleTime:6e4,cacheTime:6e4});if(i)return o.jsx(O,{});if(n)return $.error(`Error: ${t.message}`);if(c)return e.pages[0].results.length===0?o.jsxs(z,{children:[o.jsx("h2",{children:"We don't have any reviews for this movie"}),o.jsx(N,{sx:{fontSize:70,mt:1}})]}):o.jsx(x,{hasMore:f,loadMore:()=>l,children:e.pages.map(({results:p,nextPage:L})=>o.jsx(A,{children:p.map(({author:v,content:P,created_at:b,id:g,author_details:h})=>{let d=null,a=null;return h!=null&&h.avatar_path&&(d=h==null?void 0:h.avatar_path,a=d.replace("/","")),o.jsx(q,{data:{id:g,formattedPath:a,avatar_path:d,author:v,content:P,created_at:b}},g)})},`id${L}`))})},K=G;export{K as default};
