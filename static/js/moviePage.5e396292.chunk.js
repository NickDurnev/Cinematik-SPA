"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[681],{8329:function(n,e,t){t.d(e,{Z:function(){return u}});var r,a=t(168),i=t(9958).Z.ul(r||(r=(0,a.Z)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 20px;\n  justify-items: center;\n  align-items: stretch;\n"]))),o=t(184),u=function(n){var e=n.children;return(0,o.jsx)(i,{children:e})}},7519:function(n,e,t){t.d(e,{Z:function(){return x}});t(2791);var r,a,i,o,u=t(168),c=t(9958),s=t(7047),p=c.Z.div(r||(r=(0,u.Z)(["\n  width: 100%;\n"]))),l=(0,c.Z)(s.Z)(a||(a=(0,u.Z)(["\n  width: 100%;\n  height: 300px;\n"]))),d=(0,c.Z)(s.Z)(i||(i=(0,u.Z)(["\n  width: 100%;\n  height: 30px;\n"]))),f=c.Z.div(o||(o=(0,u.Z)(["\n  width: 100%;\n  padding: 40px 15px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  column-gap: 20px;\n  row-gap: 40px;\n  justify-items: center;\n  align-items: stretch;\n"]))),g=t(184),h=function(){return(0,g.jsxs)(p,{children:[(0,g.jsx)(l,{variant:"rectangular",animation:"wave"}),(0,g.jsx)(d,{variant:"text",animation:"wave"})]})},x=function(){return(0,g.jsxs)(f,{children:[(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{})]})}},4744:function(n,e,t){t.d(e,{Z:function(){return m}});var r,a,i,o,u,c=t(168),s=t(9958),p=t(5970),l=s.Z.div(r||(r=(0,c.Z)(["\n  position: relative;\n"]))),d=s.Z.div(a||(a=(0,c.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n\n  & > img {\n    min-height: 485px;\n    background: linear-gradient(\n      180deg,\n      rgba(29, 29, 29, 0) 0%,\n      rgba(29, 29, 29, 0.8) 80.79%\n    );\n  }\n\n  & > p {\n    margin-top: 10px;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 32px;\n    color: ",";\n  }\n"])),(function(n){return n.theme.textColor})),f=s.Z.span(i||(i=(0,c.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 5px;\n  background: rgba(29, 29, 29, 0.5);\n  border-radius: 0px 8px;\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),g=s.Z.div(o||(o=(0,c.Z)(["\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n"]))),h=(0,s.Z)(p.Z)(u||(u=(0,c.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),x=t(9436),v=t(184),m=function(n){var e=n.movie,t=e.poster_path,r=e.title,a=e.vote_average,i=e.genre_ids,o=window.localStorage.getItem("moviesGenres"),u=JSON.parse(o),c=null,s=null;return u&&i.length>0&&(c=u.find((function(n){return n.id===i[0]})),console.log(i),console.log(c),s=c.name),(0,v.jsxs)(d,{children:[(0,v.jsxs)(l,{children:[(0,v.jsx)(f,{children:s}),(0,v.jsx)("img",{src:null!==t?"https://image.tmdb.org/t/p/w400".concat(t):x,alt:r}),(0,v.jsx)(g,{children:a>0&&(0,v.jsx)(h,{name:"read-only",value:a.toFixed(1)/2,readOnly:!0,precision:.5})})]}),(0,v.jsx)("p",{children:r})]})}},7886:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,i,o,u=t(5861),c=t(4687),s=t.n(c),p=t(2791),l=t(3504),d=t(6871),f=t(1933),g=t(9348),h=t(6960),x=t(1508),v=t(885),m=t(168),y=t(9958),b=y.Z.header(r||(r=(0,m.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 10;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: ",";\n"])),(function(n){return n.theme.bgSearchBar})),w=y.Z.form(a||(a=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  & > input {\n    display: inline-block;\n    width: 100%;\n    height: 30px;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n  & > input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n  & > button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n  & > button:hover,\n  button:focus {\n    opacity: 1;\n  }\n  & span {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  & svg {\n    width: 30px;\n    height: 30px;\n  }\n"]))),Z=t(5403),j=t(184),k=function(n){var e=n.onSubmit,t=n.onChange,r=(0,p.useState)(""),a=(0,v.Z)(r,2),i=a[0],o=a[1];return(0,j.jsx)(b,{children:(0,j.jsxs)(w,{onSubmit:function(n){n.preventDefault(),e()},children:[(0,j.jsxs)("button",{type:"submit",children:[(0,j.jsx)(Z.Z,{}),(0,j.jsx)("span",{children:"Search"})]}),(0,j.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:i,onChange:function(n){var e=n.target.value.trim();o(e),t(e)}})]})})},_=t(8329),S=t(4744),P=y.Z.div(i||(i=(0,m.Z)(["\n  width: 95vw;\n  margin: 0 auto;\n"]))),q=y.Z.div(o||(o=(0,m.Z)(["\n  width: 5px;\n  height: 5px;\n"]))),C=t(7519),U=function(n){var e=n.onChange,t=n.query,r=(0,d.TH)(),a=(0,d.s0)(),i=(0,g.YD)({threshold:.1}),o=i.ref,c=i.inView,v=(0,f.useInfiniteQuery)(["searchMovie",{query:t}],x.qF,{enabled:!1,staleTime:6e4,cacheTime:6e4,getNextPageParam:function(n){if(n&&!(n.nextPage>n.totalPages))return n.nextPage}}),m=v.data,y=v.error,b=v.fetchNextPage,w=v.isLoading,Z=v.isError,U=v.isSuccess,z=v.refetch;(0,p.useEffect)((function(){if(r.state){var n=r.search.slice(7,r.search.length);e(n),z()}}),[]),(0,p.useEffect)((function(){c&&b()}),[b,c]);var I=function(){var n=(0,u.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,z();case 3:0!==n.sent.data.pages[0].results.length&&a("?query=".concat(t));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return w&&m?(0,j.jsx)(C.Z,{}):Z?h.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(y.message)):(console.log(m),(0,j.jsxs)(P,{children:[(0,j.jsx)(k,{onSubmit:I,onChange:e}),U&&m.pages[0]&&(0,j.jsx)(j.Fragment,{children:m.pages.map((function(n){var e=n.results,t=n.nextPage;return(0,j.jsx)(_.Z,{children:e.map((function(n){return(0,j.jsx)("li",{children:(0,j.jsx)(l.rU,{to:"/movies/".concat(n.id),state:{from:{location:r}},children:(0,j.jsx)(S.Z,{movie:n})})},n.id)}))},"id".concat(t))}))}),(0,j.jsx)(q,{ref:o})]}))}},1508:function(n,e,t){t.d(e,{AW:function(){return v},Cm:function(){return z},TW:function(){return C},_0:function(){return P},f8:function(){return _},gY:function(){return l},hG:function(){return j},lJ:function(){return h},np:function(){return E},qF:function(){return w},r9:function(){return f},y:function(){return y}});var r=t(885),a=t(5861),i=t(4687),o=t.n(i),u=t(4569),c=t.n(u),s=t(6960);c().defaults.baseURL="https://api.themoviedb.org/3/";var p="105ba628fde77462ee84526f3393a31c";function l(){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("trending/movie/day?api_key=".concat(p));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("genre/movie/list?api_key=".concat(p,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.genres);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(o().mark((function n(){var e,t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Math.floor(500*Math.random())+1,n.next=3,c().get("movie/725201/similar?api_key=".concat(p,"&language=en-US&page=").concat(e));case 3:return t=n.sent,r=t.data.results,n.abrupt("return",{results:r});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(o().mark((function n(e){var t,r,a,i,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,r=void 0===t?1:t,n.next=3,c().get("movie/top_rated?api_key=".concat(p,"&language=en-US&page=").concat(r));case 3:return a=n.sent,i=a.data.results,u=a.data.total_pages,n.abrupt("return",{results:i,nextPage:r+1,totalPages:u});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(o().mark((function n(e){var t,r,a,i,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,r=void 0===t?1:t,n.next=3,c().get("movie/upcoming?api_key=".concat(p,"&language=en-US&page=").concat(r));case 3:return a=n.sent,i=a.data.results,u=a.data.total_pages,n.abrupt("return",{results:i,nextPage:r+1,totalPages:u});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)(o().mark((function n(e){var t,a,i,u,l,d,f,g,h;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.pageParam,a=void 0===t?1:t,i=e.queryKey,u=(0,r.Z)(i,2),l=u[0],d=u[1].query,console.log("".concat(l)),d){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,c().get("search/movie?api_key=".concat(p,"&language=en-US&query=").concat(d,"&page=").concat(a,"&include_adult=false"));case 7:return f=n.sent,g=f.data.results,h=f.data.total_pages,g.length||s.Am.info("Movies were not found"),n.abrupt("return",{results:g,nextPage:a+1,totalPages:h});case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)(o().mark((function n(e){var t,a,i,u,s,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],u=a[1].movieId,console.log("".concat(i)),n.prev=3,n.next=6,c().get("movie/".concat(u,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function _(n){return S.apply(this,arguments)}function S(){return(S=(0,a.Z)(o().mark((function n(e){var t,a,i,u,s,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],u=a[1].actorId,console.log("".concat(i)),n.prev=3,n.next=6,c().get("person/".concat(u,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function P(n){return q.apply(this,arguments)}function q(){return(q=(0,a.Z)(o().mark((function n(e){var t,a,i,u,s,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],u=a[1].actorId,console.log("".concat(i)),n.prev=3,n.next=6,c().get("person/".concat(u,"/movie_credits?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function C(n){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(o().mark((function n(e){var t,a,i,u,s;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],u=a[1].movieId,console.log("".concat(i)),n.next=5,c().get("movie/".concat(u,"/credits?api_key=").concat(p,"&language=en-US"));case 5:return s=n.sent,n.abrupt("return",s.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function z(n){return I.apply(this,arguments)}function I(){return(I=(0,a.Z)(o().mark((function n(e){var t,a,i,u,s,l,d,f,g;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,a=void 0===t?1:t,i=e.queryKey,u=(0,r.Z)(i,2),s=u[0],l=u[1].movieId,console.log("".concat(s)),n.next=5,c().get("movie/".concat(l,"/reviews?api_key=").concat(p,"&language=en-US&page=1"));case 5:return d=n.sent,f=d.data.results,g=d.data.total_pages,n.abrupt("return",{results:f,nextPage:a+1,totalPages:g});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function E(n){return K.apply(this,arguments)}function K(){return(K=(0,a.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(e,"/videos?api_key=").concat(p,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5403:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");e.Z=o},9436:function(n,e,t){n.exports=t.p+"static/media/Error 404 Wallpaper.8abd10198d38772bf2c0.jpg"}}]);
//# sourceMappingURL=moviePage.5e396292.chunk.js.map