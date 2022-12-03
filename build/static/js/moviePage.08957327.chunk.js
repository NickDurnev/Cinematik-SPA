"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{8329:function(n,e,t){t.d(e,{Z:function(){return p}});var r,a=t(2436),o=t(168),i=t(9958),c=t(7608),u=i.Z.ul(r||(r=(0,o.Z)(["\n  width: 100%;\n  display: block;\n  padding: 15px 0;\n\n  & > li + li {\n    margin-top: 10px;\n\n    @media "," {\n      margin: 0;\n    }\n  }\n\n  @media "," {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n    justify-items: center;\n    align-items: stretch;\n  }\n\n  @media "," {\n    grid-template-columns: repeat(5, 1fr);\n    gap: 20px;\n  }\n"])),c.U.tablet,c.U.tablet,c.U.laptop),s=t(184),p=function(n){var e=n.children;return(0,s.jsx)(u,{children:(0,s.jsx)(a.M,{children:e})})}},6048:function(n,e,t){t.d(e,{Z:function(){return y}});var r,a,o,i,c,u=t(168),s=t(9958),p=t(5970),l=t(7608),d=s.Z.div(r||(r=(0,u.Z)(["\n  position: relative;\n"]))),f=s.Z.div(a||(a=(0,u.Z)(["\n  width: 85vw;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & > img {\n    width: 100%;\n    min-height: 100%;\n    background: linear-gradient(\n      180deg,\n      rgba(29, 29, 29, 0) 0%,\n      rgba(29, 29, 29, 0.8) 80.79%\n    );\n  }\n\n  & > p {\n    width: 100%;\n    margin-top: 10px;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 32px;\n    color: ",";\n\n    @media "," {\n      font-weight: 400;\n      font-size: 18px;\n    }\n  }\n\n  @media "," {\n    width: 28vw;\n  }\n\n  @media "," {\n    width: 17vw;\n  }\n"])),(function(n){return n.theme.textColor}),l.U.tablet,l.U.tablet,l.U.laptop),g=s.Z.span(o||(o=(0,u.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 5px;\n  background: rgba(29, 29, 29, 0.5);\n  border-radius: 0px 8px;\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),h=s.Z.div(i||(i=(0,u.Z)(["\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n"]))),x=(0,s.Z)(p.Z)(c||(c=(0,u.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),m=t(9436),v=t(184),y=function(n){var e=n.movie,t=e.poster_path,r=e.title,a=e.vote_average,o=e.genre_ids,i=null;return o&&(i=function(n){var e=window.localStorage.getItem("moviesGenres"),t=JSON.parse(e),r=null;return t&&n.length>0&&(r=t.find((function(e){return e.id===n[0]})).name),r}(o)),(0,v.jsxs)(f,{children:[(0,v.jsxs)(d,{children:[i&&(0,v.jsx)(g,{children:i}),(0,v.jsx)("img",{src:null!==t?"https://image.tmdb.org/t/p/w400".concat(t):m,alt:r}),(0,v.jsx)(h,{children:a>0&&(0,v.jsx)(x,{name:"read-only",value:a.toFixed(1)/2,readOnly:!0,precision:.5})})]}),(0,v.jsx)("p",{children:r})]})}},7886:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,o,i=t(2982),c=t(885),u=t(2791),s=t(3504),p=t(6871),l=t(1933),d=t(9348),f=t(6960),g=t(6188),h=t(7477),x=t(168),m=t(9958),v=m.Z.header(r||(r=(0,x.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  /* background-color: ","; */\n"])),(function(n){return n.theme.bgSearchBar})),y=m.Z.form(a||(a=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  & > input {\n    display: inline-block;\n    width: 100%;\n    height: 30px;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n  & > input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n  & > button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  & > button:hover,\n  button:focus {\n    opacity: 1;\n  }\n  & span {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  & svg {\n    width: 30px;\n    height: 30px;\n  }\n"]))),w=t(5403),b=t(184),Z=function(n){var e=n.onChange,t=n.isLoading,r=(0,u.useState)(""),a=(0,c.Z)(r,2),o=a[0],i=a[1];return(0,b.jsx)(v,{children:(0,b.jsxs)(y,{onSubmit:function(n){n.preventDefault(),e(o)},children:[(0,b.jsxs)("button",{type:"submit",children:[(0,b.jsx)(w.Z,{}),(0,b.jsx)("span",{children:"Search"})]}),(0,b.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:o,onChange:function(n){var e=n.target.value.trim();i(e)},disabled:t})]})})},k=t(8329),_=t(6048),j=m.Z.div(o||(o=(0,x.Z)(["\n  position: absolute;\n  bottom: 1000px;\n  right: 0;\n  width: 5px;\n  height: 5px;\n"]))),S=t(7506),P=t(5905),U=function(n){var e=n.onChange,t=n.query,r=(0,u.useState)([]),a=(0,c.Z)(r,2),o=a[0],x=a[1],m=(0,u.useState)(0),v=(0,c.Z)(m,2),y=v[0],w=v[1],U=(0,p.TH)(),q=(0,p.s0)(),C=(0,d.YD)({threshold:.1}),E=C.ref,I=C.inView,K=(0,l.useInfiniteQuery)(["searchMovie",{query:t}],h.qF,{enabled:!1,staleTime:6e4,cacheTime:6e4,getNextPageParam:function(n){if(n&&!(n.nextPage>n.totalPages))return n.nextPage}}),z=K.data,T=K.error,F=K.fetchNextPage,M=K.isLoading,L=K.isError,N=K.isSuccess,O=K.refetch;return(0,u.useEffect)((function(){window.scrollTo({top:0})}),[]),(0,u.useEffect)((function(){window.scrollTo({top:0}),x([]),w(0),O(),q("?query=".concat(t))}),[t]),(0,u.useEffect)((function(){0!==o.length&&I&&F()}),[I]),(0,u.useEffect)((function(){N&&null!==z&&void 0!==z&&z.pages[y]&&(x([].concat((0,i.Z)(o),(0,i.Z)(z.pages[y].results))),w(y+1)),L&&f.Am.error("Error: ".concat(T.response.data.message))}),[z,L,N]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(g.E.div,{initial:"closed",animate:"open",exit:"exit",variants:P.wz,children:[(0,b.jsx)(Z,{onChange:e,isLoading:M}),M&&(0,b.jsx)(S.Z,{}),o.length>0&&!M&&(0,b.jsx)("div",{children:(0,b.jsx)(k.Z,{children:o.map((function(n){return(0,b.jsx)(g.E.li,{initial:"closed",animate:"open",exit:"exit",variants:P.yr,children:(0,b.jsx)(s.rU,{to:"/movies/".concat(n.id),state:{from:{location:U}},children:(0,b.jsx)(_.Z,{movie:n})})},n.id)}))})})]}),(0,b.jsx)(j,{ref:E})]})}},7477:function(n,e,t){t.d(e,{CO:function(){return x},Cm:function(){return I},TW:function(){return C},_0:function(){return U},f8:function(){return S},gY:function(){return d},hG:function(){return _},lJ:function(){return v},np:function(){return z},qF:function(){return Z},r9:function(){return g},sU:function(){return w}});var r=t(885),a=t(5861),o=t(4687),i=t.n(o),c=t(4569),u=t.n(c),s=t(6960),p="https://api.themoviedb.org/3/",l="105ba628fde77462ee84526f3393a31c";function d(){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(p,"trending/movie/day?api_key=").concat(l));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(p,"genre/movie/list?api_key=").concat(l,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.genres);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(i().mark((function n(e){var t,a,o,c,s,d,f,g,h;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,a=void 0===t?1:t,o=e.queryKey,c=(0,r.Z)(o,2),s=c[0],d=c[1].genreId,console.log(s),n.next=5,u().get("".concat(p,"discover/movie?api_key=").concat(l,"&with_genres=").concat(d,"&page=").concat(a));case 5:return f=n.sent,g=f.data.results,h=f.data.total_pages,n.abrupt("return",{results:g,nextPage:a+1,totalPages:h});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(i().mark((function n(){var e,t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Math.floor(500*Math.random())+1,n.next=3,u().get("".concat(p,"movie/725201/similar?api_key=").concat(l,"&language=en-US&page=").concat(e));case 3:return t=n.sent,r=t.data.results,n.abrupt("return",{results:r});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(i().mark((function n(e){var t,a,o,c,s,d,f,g;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,a=void 0===t?1:t,o=e.queryKey,c=(0,r.Z)(o,2),c[0],s=c[1].category,n.next=4,u().get("".concat(p,"movie/").concat(s,"?api_key=").concat(l,"&language=en-US&page=").concat(a));case 4:return d=n.sent,f=d.data.results,g=d.data.total_pages,n.abrupt("return",{results:f,nextPage:a+1,totalPages:g});case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)(i().mark((function n(e){var t,a,o,c,d,f,g,h,x;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.pageParam,a=void 0===t?1:t,o=e.queryKey,c=(0,r.Z)(o,2),d=c[0],f=c[1].query,console.log("".concat(d)),f){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,u().get("".concat(p,"search/movie?api_key=").concat(l,"&language=en-US&query=").concat(f,"&page=").concat(a,"&include_adult=false"));case 7:return g=n.sent,h=g.data.results,x=g.data.total_pages,h.length||s.Am.info("Movies were not found"),n.abrupt("return",{results:h,nextPage:a+1,totalPages:x});case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(n){return j.apply(this,arguments)}function j(){return(j=(0,a.Z)(i().mark((function n(e){var t,a,o,c,s,d;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),o=a[0],c=a[1].movieId,console.log("".concat(o)),n.prev=3,n.next=6,u().get("".concat(p,"movie/").concat(c,"?api_key=").concat(l,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return d=n.sent,n.abrupt("return",d);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function S(n){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)(i().mark((function n(e){var t,a,o,c,s,d;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),o=a[0],c=a[1].actorId,console.log("".concat(o)),n.prev=3,n.next=6,u().get("".concat(p,"person/").concat(c,"?api_key=").concat(l,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return d=n.sent,n.abrupt("return",d);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function U(n){return q.apply(this,arguments)}function q(){return(q=(0,a.Z)(i().mark((function n(e){var t,a,o,c,s,d;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),o=a[0],c=a[1].actorId,console.log("".concat(o)),n.next=5,u().get("".concat(p,"person/").concat(c,"/movie_credits?api_key=").concat(l,"&language=en-US"));case 5:return s=n.sent,d=s.data,n.abrupt("return",d);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function C(n){return E.apply(this,arguments)}function E(){return(E=(0,a.Z)(i().mark((function n(e){var t,a,o,c,s;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),o=a[0],c=a[1].movieId,console.log("".concat(o)),n.next=5,u().get("".concat(p,"movie/").concat(c,"/credits?api_key=").concat(l,"&language=en-US"));case 5:return s=n.sent,n.abrupt("return",s.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function I(n){return K.apply(this,arguments)}function K(){return(K=(0,a.Z)(i().mark((function n(e){var t,a,o,c,s,d,f,g,h;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,a=void 0===t?1:t,o=e.queryKey,c=(0,r.Z)(o,2),s=c[0],d=c[1].movieId,console.log("".concat(s)),n.next=5,u().get("".concat(p,"movie/").concat(d,"/reviews?api_key=").concat(l,"&language=en-US&page=1"));case 5:return f=n.sent,g=f.data.results,h=f.data.total_pages,n.abrupt("return",{results:g,nextPage:a+1,totalPages:h});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function z(n){return T.apply(this,arguments)}function T(){return(T=(0,a.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("".concat(p,"movie/").concat(e,"/videos?api_key=").concat(l,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9436:function(n,e,t){n.exports=t.p+"static/media/Error 404 Wallpaper.8abd10198d38772bf2c0.jpg"}}]);
//# sourceMappingURL=moviePage.08957327.chunk.js.map