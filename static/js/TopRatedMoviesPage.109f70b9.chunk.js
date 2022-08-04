"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[330],{8329:function(n,t,e){e.d(t,{Z:function(){return o}});var r,a=e(168),u=e(9958).Z.ul(r||(r=(0,a.Z)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 20px;\n  justify-items: center;\n  align-items: stretch;\n"]))),s=e(184),o=function(n){var t=n.children;return(0,s.jsx)(u,{children:t})}},2441:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a=e(3504),u=e(7317),s=e(168),o=e(9958),c=e(9277),i=(0,o.Z)(c.Z)(r||(r=(0,s.Z)(["\n  display: block;\n  color: ",";\n  width: 60px;\n  height: 60px;\n\n  & > svg {\n    width: 40px;\n    height: 40px;\n  }\n"])),(function(n){return n.theme.bgElementColor})),p=e(184),l=function(n){var t=n.path,e=n.state;return(0,p.jsx)(a.rU,{to:t,state:{state:e},children:(0,p.jsx)(i,{children:(0,p.jsx)(u.Z,{})})})}},7519:function(n,t,e){e.d(t,{Z:function(){return x}});e(2791);var r,a,u,s,o=e(168),c=e(9958),i=e(7047),p=c.Z.div(r||(r=(0,o.Z)(["\n  width: 100%;\n"]))),l=(0,c.Z)(i.Z)(a||(a=(0,o.Z)(["\n  width: 100%;\n  height: 300px;\n"]))),d=(0,c.Z)(i.Z)(u||(u=(0,o.Z)(["\n  width: 100%;\n  height: 30px;\n"]))),f=c.Z.div(s||(s=(0,o.Z)(["\n  width: 100%;\n  padding: 40px 15px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  column-gap: 20px;\n  row-gap: 40px;\n  justify-items: center;\n  align-items: stretch;\n"]))),g=e(184),h=function(){return(0,g.jsxs)(p,{children:[(0,g.jsx)(l,{variant:"rectangular",animation:"wave"}),(0,g.jsx)(d,{variant:"text",animation:"wave"})]})},x=function(){return(0,g.jsxs)(f,{children:[(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{}),(0,g.jsx)(h,{})]})}},4744:function(n,t,e){e.d(t,{Z:function(){return m}});var r,a,u,s,o,c=e(168),i=e(9958),p=e(5970),l=i.Z.div(r||(r=(0,c.Z)(["\n  position: relative;\n"]))),d=i.Z.div(a||(a=(0,c.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n\n  & > img {\n    min-height: 485px;\n    background: linear-gradient(\n      180deg,\n      rgba(29, 29, 29, 0) 0%,\n      rgba(29, 29, 29, 0.8) 80.79%\n    );\n  }\n\n  & > p {\n    margin-top: 10px;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 32px;\n    color: ",";\n  }\n"])),(function(n){return n.theme.textColor})),f=i.Z.span(u||(u=(0,c.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 5px;\n  background: rgba(29, 29, 29, 0.5);\n  border-radius: 0px 8px;\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),g=i.Z.div(s||(s=(0,c.Z)(["\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n"]))),h=(0,i.Z)(p.Z)(o||(o=(0,c.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),x=e(9436),v=e(184),m=function(n){var t=n.movie,e=t.poster_path,r=t.title,a=t.vote_average,u=t.genre_ids,s=window.localStorage.getItem("moviesGenres"),o=JSON.parse(s),c=null,i=null;return o&&u.length>0&&(c=o.find((function(n){return n.id===u[0]})),console.log(u),console.log(c),i=c.name),(0,v.jsxs)(d,{children:[(0,v.jsxs)(l,{children:[(0,v.jsx)(f,{children:i}),(0,v.jsx)("img",{src:null!==e?"https://image.tmdb.org/t/p/w400".concat(e):x,alt:r}),(0,v.jsx)(g,{children:a>0&&(0,v.jsx)(h,{name:"read-only",value:a.toFixed(1)/2,readOnly:!0,precision:.5})})]}),(0,v.jsx)("p",{children:r})]})}},7715:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,u=e(2791),s=e(3504),o=e(6871),c=e(1933),i=e(9348),p=e(6960),l=e(1508),d=e(8329),f=e(4744),g=e(2441),h=e(7519),x=e(168),v=e(9958),m=v.Z.div(r||(r=(0,x.Z)(["\n  width: 95vw;\n  margin: 0 auto;\n"]))),y=v.Z.div(a||(a=(0,x.Z)(["\n  width: 5px;\n  height: 5px;\n"]))),Z=e(184),w=function(){var n=(0,o.TH)(),t=(0,i.YD)({threshold:.1}),e=t.ref,r=t.inView,a=(0,c.useInfiniteQuery)(["topRatedMovies"],l.AW,{staleTime:6e4,cacheTime:6e4,getNextPageParam:function(n){if(!(n.nextPage>n.totalPages))return n.nextPage}}),x=a.data,v=a.error,w=a.fetchNextPage,j=a.isLoading,b=a.isError,k=a.isSuccess;return(0,u.useEffect)((function(){r&&w()}),[w,r]),j&&x?(0,Z.jsx)(h.Z,{}):b?p.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(v.message)):(console.log(x),(0,Z.jsxs)(m,{children:[(0,Z.jsx)(g.Z,{path:"/"}),k&&(0,Z.jsx)(Z.Fragment,{children:x.pages.map((function(t){var e=t.results,r=t.nextPage;return(0,Z.jsx)(d.Z,{children:e.map((function(t){return(0,Z.jsx)("li",{children:(0,Z.jsx)(s.rU,{to:"/movies/".concat(t.id),state:{from:{location:n}},children:(0,Z.jsx)(f.Z,{movie:t})})},t.id)}))},"id".concat(r))}))}),(0,Z.jsx)(y,{ref:e})]}))}},1508:function(n,t,e){e.d(t,{AW:function(){return v},Cm:function(){return I},TW:function(){return q},_0:function(){return S},f8:function(){return _},gY:function(){return l},hG:function(){return b},lJ:function(){return h},np:function(){return E},qF:function(){return w},r9:function(){return f},y:function(){return y}});var r=e(885),a=e(5861),u=e(4687),s=e.n(u),o=e(4569),c=e.n(o),i=e(6960);c().defaults.baseURL="https://api.themoviedb.org/3/";var p="105ba628fde77462ee84526f3393a31c";function l(){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("trending/movie/day?api_key=".concat(p));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("genre/movie/list?api_key=".concat(p,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.genres);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(s().mark((function n(){var t,e,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Math.floor(500*Math.random())+1,n.next=3,c().get("movie/725201/similar?api_key=".concat(p,"&language=en-US&page=").concat(t));case 3:return e=n.sent,r=e.data.results,n.abrupt("return",{results:r});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(s().mark((function n(t){var e,r,a,u,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,r=void 0===e?1:e,n.next=3,c().get("movie/top_rated?api_key=".concat(p,"&language=en-US&page=").concat(r));case 3:return a=n.sent,u=a.data.results,o=a.data.total_pages,n.abrupt("return",{results:u,nextPage:r+1,totalPages:o});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)(s().mark((function n(t){var e,r,a,u,o;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,r=void 0===e?1:e,n.next=3,c().get("movie/upcoming?api_key=".concat(p,"&language=en-US&page=").concat(r));case 3:return a=n.sent,u=a.data.results,o=a.data.total_pages,n.abrupt("return",{results:u,nextPage:r+1,totalPages:o});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return j.apply(this,arguments)}function j(){return(j=(0,a.Z)(s().mark((function n(t){var e,a,u,o,l,d,f,g,h;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.pageParam,a=void 0===e?1:e,u=t.queryKey,o=(0,r.Z)(u,2),l=o[0],d=o[1].query,console.log("".concat(l)),d){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,c().get("search/movie?api_key=".concat(p,"&language=en-US&query=").concat(d,"&page=").concat(a,"&include_adult=false"));case 7:return f=n.sent,g=f.data.results,h=f.data.total_pages,g.length||i.Am.info("Movies were not found"),n.abrupt("return",{results:g,nextPage:a+1,totalPages:h});case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)(s().mark((function n(t){var e,a,u,o,i,l;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),u=a[0],o=a[1].movieId,console.log("".concat(u)),n.prev=3,n.next=6,c().get("movie/".concat(o,"?api_key=").concat(p,"&language=en-US"));case 6:return i=n.sent,n.next=9,i.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function _(n){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)(s().mark((function n(t){var e,a,u,o,i,l;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),u=a[0],o=a[1].actorId,console.log("".concat(u)),n.prev=3,n.next=6,c().get("person/".concat(o,"?api_key=").concat(p,"&language=en-US"));case 6:return i=n.sent,n.next=9,i.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function S(n){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(s().mark((function n(t){var e,a,u,o,i,l;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),u=a[0],o=a[1].actorId,console.log("".concat(u)),n.prev=3,n.next=6,c().get("person/".concat(o,"/movie_credits?api_key=").concat(p,"&language=en-US"));case 6:return i=n.sent,n.next=9,i.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function q(n){return C.apply(this,arguments)}function C(){return(C=(0,a.Z)(s().mark((function n(t){var e,a,u,o,i;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),u=a[0],o=a[1].movieId,console.log("".concat(u)),n.next=5,c().get("movie/".concat(o,"/credits?api_key=").concat(p,"&language=en-US"));case 5:return i=n.sent,n.abrupt("return",i.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function I(n){return K.apply(this,arguments)}function K(){return(K=(0,a.Z)(s().mark((function n(t){var e,a,u,o,i,l,d,f,g;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,a=void 0===e?1:e,u=t.queryKey,o=(0,r.Z)(u,2),i=o[0],l=o[1].movieId,console.log("".concat(i)),n.next=5,c().get("movie/".concat(l,"/reviews?api_key=").concat(p,"&language=en-US&page=1"));case 5:return d=n.sent,f=d.data.results,g=d.data.total_pages,n.abrupt("return",{results:f,nextPage:a+1,totalPages:g});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function E(n){return M.apply(this,arguments)}function M(){return(M=(0,a.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("movie/".concat(t,"/videos?api_key=").concat(p,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7317:function(n,t,e){var r=e(4836);t.Z=void 0;var a=r(e(5649)),u=e(184),s=(0,a.default)((0,u.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");t.Z=s},9436:function(n,t,e){n.exports=e.p+"static/media/Error 404 Wallpaper.8abd10198d38772bf2c0.jpg"}}]);
//# sourceMappingURL=TopRatedMoviesPage.109f70b9.chunk.js.map