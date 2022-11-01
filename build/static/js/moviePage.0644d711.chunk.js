"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{5905:function(n,e,t){t.d(e,{Cu:function(){return a},wz:function(){return i},yr:function(){return r},yv:function(){return o}});var r={open:{opacity:1,y:0,transition:{delay:.5}},closed:{opacity:0,y:"50%"}},a={open:{opacity:1,scale:1,x:"-50%",y:"-50%"},closed:{opacity:0,scale:.7,x:"-50%",y:"-50%"}},i={open:{opacity:1,height:"100%"},closed:{opacity:0,height:0},exit:{y:window.innerHeight,opacity:0,transition:{duration:.3,delay:.3}}},o={open:{opacity:1},closed:{opacity:0}}},8329:function(n,e,t){t.d(e,{Z:function(){return s}});var r,a=t(168),i=t(9958),o=t(7608),c=i.Z.ul(r||(r=(0,a.Z)(["\n  width: 100%;\n  display: block;\n  padding: 15px 0;\n\n  & > li + li {\n    margin-top: 10px;\n\n    @media "," {\n      margin: 0;\n    }\n  }\n\n  @media "," {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n    justify-items: center;\n    align-items: stretch;\n  }\n\n  @media "," {\n    grid-template-columns: repeat(5, 1fr);\n    gap: 20px;\n  }\n"])),o.U.tablet,o.U.tablet,o.U.laptop),u=t(184),s=function(n){var e=n.children;return(0,u.jsx)(c,{children:e})}},6048:function(n,e,t){t.d(e,{Z:function(){return y}});var r,a,i,o,c,u=t(168),s=t(9958),p=t(5970),l=t(7608),d=s.Z.div(r||(r=(0,u.Z)(["\n  position: relative;\n"]))),f=s.Z.div(a||(a=(0,u.Z)(["\n  width: 85vw;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & > img {\n    width: 100%;\n    min-height: 100%;\n    background: linear-gradient(\n      180deg,\n      rgba(29, 29, 29, 0) 0%,\n      rgba(29, 29, 29, 0.8) 80.79%\n    );\n  }\n\n  & > p {\n    width: 100%;\n    margin-top: 10px;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 32px;\n    color: ",";\n\n    @media "," {\n      font-weight: 400;\n      font-size: 18px;\n    }\n  }\n\n  @media "," {\n    width: 28vw;\n  }\n\n  @media "," {\n    width: 17vw;\n  }\n"])),(function(n){return n.theme.textColor}),l.U.tablet,l.U.tablet,l.U.laptop),g=s.Z.span(i||(i=(0,u.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 5px;\n  background: rgba(29, 29, 29, 0.5);\n  border-radius: 0px 8px;\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),h=s.Z.div(o||(o=(0,u.Z)(["\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n"]))),x=(0,s.Z)(p.Z)(c||(c=(0,u.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),v=t(9436),m=t(184),y=function(n){var e=n.movie,t=e.poster_path,r=e.title,a=e.vote_average,i=e.genre_ids,o=null;return i&&(o=function(n){var e=window.localStorage.getItem("moviesGenres"),t=JSON.parse(e),r=null;return t&&n.length>0&&(r=t.find((function(e){return e.id===n[0]})).name),r}(i)),(0,m.jsxs)(f,{children:[(0,m.jsxs)(d,{children:[o&&(0,m.jsx)(g,{children:o}),(0,m.jsx)("img",{src:null!==t?"https://image.tmdb.org/t/p/w400".concat(t):v,alt:r}),(0,m.jsx)(h,{children:a>0&&(0,m.jsx)(x,{name:"read-only",value:a.toFixed(1)/2,readOnly:!0,precision:.5})})]}),(0,m.jsx)("p",{children:r})]})}},7886:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,i,o=t(5861),c=t(4687),u=t.n(c),s=t(2791),p=t(3504),l=t(6871),d=t(1933),f=t(9348),g=t(6960),h=t(6188),x=t(1508),v=t(885),m=t(168),y=t(9958),w=y.Z.header(r||(r=(0,m.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  /* background-color: ","; */\n"])),(function(n){return n.theme.bgSearchBar})),b=y.Z.form(a||(a=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  & > input {\n    display: inline-block;\n    width: 100%;\n    height: 30px;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n  & > input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n  & > button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  & > button:hover,\n  button:focus {\n    opacity: 1;\n  }\n  & span {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  & svg {\n    width: 30px;\n    height: 30px;\n  }\n"]))),Z=t(5403),k=t(184),_=function(n){var e=n.onSubmit,t=n.onChange,r=n.isLoading,a=(0,s.useState)(""),i=(0,v.Z)(a,2),o=i[0],c=i[1];return(0,k.jsx)(w,{children:(0,k.jsxs)(b,{onSubmit:function(n){n.preventDefault(),t(o),e()},children:[(0,k.jsxs)("button",{type:"submit",children:[(0,k.jsx)(Z.Z,{}),(0,k.jsx)("span",{children:"Search"})]}),(0,k.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:o,onChange:function(n){var e=n.target.value.trim();c(e)},disabled:r})]})})},j=t(8329),P=t(6048),S=y.Z.div(i||(i=(0,m.Z)(["\n  width: 5px;\n  height: 5px;\n"]))),U=t(7506),q=t(5905),C=function(n){var e=n.onChange,t=n.query,r=(0,l.TH)(),a=(0,l.s0)(),i=(0,f.YD)({threshold:.1}),c=i.ref,v=i.inView,m=(0,d.useInfiniteQuery)(["searchMovie",{query:t}],x.qF,{enabled:!1,staleTime:6e4,cacheTime:6e4,getNextPageParam:function(n){if(n&&!(n.nextPage>n.totalPages))return n.nextPage}}),y=m.data,w=m.error,b=m.fetchNextPage,Z=m.isLoading,C=m.isError,z=m.isSuccess,I=m.refetch;(0,s.useEffect)((function(){if(window.scrollTo({top:0}),r.state){var n=r.search.slice(7,r.search.length);e(n),I()}}),[]),(0,s.useEffect)((function(){v&&b()}),[b,v]);var E=function(){var n=(0,o.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,I();case 3:0!==n.sent.data.pages[0].results.length&&a("?query=".concat(t));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return C?g.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(w.message)):(console.log(y),(0,k.jsxs)(h.E.div,{initial:"closed",animate:"open",exit:"exit",variants:q.wz,children:[(0,k.jsx)(_,{onSubmit:E,onChange:e,isLoading:Z}),Z&&(0,k.jsx)(U.Z,{}),z&&y.pages[0]&&(0,k.jsx)("div",{children:y.pages.map((function(n){var e=n.results,t=n.nextPage;return(0,k.jsx)(j.Z,{children:e.map((function(n){return(0,k.jsx)("li",{children:(0,k.jsx)(p.rU,{to:"/movies/".concat(n.id),state:{from:{location:r}},children:(0,k.jsx)(P.Z,{movie:n})})},n.id)}))},"id".concat(t))}))}),(0,k.jsx)(S,{ref:c})]}))}},1508:function(n,e,t){t.d(e,{AW:function(){return y},CO:function(){return h},Cm:function(){return E},TW:function(){return z},_0:function(){return q},f8:function(){return S},gY:function(){return l},hG:function(){return j},lJ:function(){return v},np:function(){return T},qF:function(){return k},r9:function(){return f},y:function(){return b}});var r=t(885),a=t(5861),i=t(4687),o=t.n(i),c=t(4569),u=t.n(c),s=t(6960);u().defaults.baseURL="https://api.themoviedb.org/3/";var p="105ba628fde77462ee84526f3393a31c";function l(){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("trending/movie/day?api_key=".concat(p));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("genre/movie/list?api_key=".concat(p,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.genres);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(o().mark((function n(e){var t,a,i,c,s,l,d,f,g;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,a=void 0===t?1:t,i=e.queryKey,c=(0,r.Z)(i,2),s=c[0],l=c[1].genreId,console.log(s),n.next=5,u().get("discover/movie?api_key=".concat(p,"&with_genres=").concat(l,"&page=").concat(a));case 5:return d=n.sent,f=d.data.results,g=d.data.total_pages,n.abrupt("return",{results:f,nextPage:a+1,totalPages:g});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(o().mark((function n(){var e,t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Math.floor(500*Math.random())+1,n.next=3,u().get("movie/725201/similar?api_key=".concat(p,"&language=en-US&page=").concat(e));case 3:return t=n.sent,r=t.data.results,n.abrupt("return",{results:r});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)(o().mark((function n(e){var t,r,a,i,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,r=void 0===t?1:t,n.next=3,u().get("movie/top_rated?api_key=".concat(p,"&language=en-US&page=").concat(r));case 3:return a=n.sent,i=a.data.results,c=a.data.total_pages,n.abrupt("return",{results:i,nextPage:r+1,totalPages:c});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)(o().mark((function n(e){var t,r,a,i,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,r=void 0===t?1:t,n.next=3,u().get("movie/upcoming?api_key=".concat(p,"&language=en-US&page=").concat(r));case 3:return a=n.sent,i=a.data.results,c=a.data.total_pages,n.abrupt("return",{results:i,nextPage:r+1,totalPages:c});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)(o().mark((function n(e){var t,a,i,c,l,d,f,g,h;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.pageParam,a=void 0===t?1:t,i=e.queryKey,c=(0,r.Z)(i,2),l=c[0],d=c[1].query,console.log("".concat(l)),d){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,u().get("search/movie?api_key=".concat(p,"&language=en-US&query=").concat(d,"&page=").concat(a,"&include_adult=false"));case 7:return f=n.sent,g=f.data.results,h=f.data.total_pages,g.length||s.Am.info("Movies were not found"),n.abrupt("return",{results:g,nextPage:a+1,totalPages:h});case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)(o().mark((function n(e){var t,a,i,c,s,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],c=a[1].movieId,console.log("".concat(i)),n.prev=3,n.next=6,u().get("movie/".concat(c,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function S(n){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(o().mark((function n(e){var t,a,i,c,s,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],c=a[1].actorId,console.log("".concat(i)),n.prev=3,n.next=6,u().get("person/".concat(c,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function q(n){return C.apply(this,arguments)}function C(){return(C=(0,a.Z)(o().mark((function n(e){var t,a,i,c,s,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],c=a[1].actorId,console.log("".concat(i)),n.prev=3,n.next=6,u().get("person/".concat(c,"/movie_credits?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function z(n){return I.apply(this,arguments)}function I(){return(I=(0,a.Z)(o().mark((function n(e){var t,a,i,c,s;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],c=a[1].movieId,console.log("".concat(i)),n.next=5,u().get("movie/".concat(c,"/credits?api_key=").concat(p,"&language=en-US"));case 5:return s=n.sent,n.abrupt("return",s.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function E(n){return K.apply(this,arguments)}function K(){return(K=(0,a.Z)(o().mark((function n(e){var t,a,i,c,s,l,d,f,g;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,a=void 0===t?1:t,i=e.queryKey,c=(0,r.Z)(i,2),s=c[0],l=c[1].movieId,console.log("".concat(s)),n.next=5,u().get("movie/".concat(l,"/reviews?api_key=").concat(p,"&language=en-US&page=1"));case 5:return d=n.sent,f=d.data.results,g=d.data.total_pages,n.abrupt("return",{results:f,nextPage:a+1,totalPages:g});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function T(n){return F.apply(this,arguments)}function F(){return(F=(0,a.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(e,"/videos?api_key=").concat(p,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9436:function(n,e,t){n.exports=t.p+"static/media/Error 404 Wallpaper.8abd10198d38772bf2c0.jpg"}}]);
//# sourceMappingURL=moviePage.0644d711.chunk.js.map