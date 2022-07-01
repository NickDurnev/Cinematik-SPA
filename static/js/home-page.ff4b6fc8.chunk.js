"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[223],{8329:function(n,e,t){t.d(e,{Z:function(){return c}});var r,a=t(168),o=t(6031).ZP.ul(r||(r=(0,a.Z)(["\n  width: 100%;\n  padding: 15px 0;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 20px;\n  justify-items: center;\n  align-items: stretch;\n"]))),i=t(184),c=function(n){var e=n.children;return(0,i.jsx)(o,{children:e})}},1769:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});var r=t(1933),a=t(3504),o=t(4222),i=t(409),c=t(4744),s=t(8329),u=t(7519),p=t(184),d=function(){var n=(0,r.useQuery)("topMovies",i.gY,{staleTime:6e4,cacheTime:6e4}),e=n.data,t=n.isError,d=n.isLoading,l=n.isSuccess,f=n.error;return d?(0,p.jsx)(u.Z,{}):t?o.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(f.message)):l?(0,p.jsx)(s.Z,{children:e.map((function(n){return(0,p.jsx)("li",{children:(0,p.jsx)(a.rU,{to:"/movies/".concat(n.id),children:(0,p.jsx)(c.Z,{movie:n})})},n.id)}))}):void 0}},7519:function(n,e,t){t.d(e,{Z:function(){return p}});var r,a=t(1413),o=(t(2791),t(8175)),i=t(168),c=t(6031).ZP.div(r||(r=(0,i.Z)(["\n  width: 100%;\n  padding: 15px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 20px;\n  justify-items: center;\n  align-items: stretch;\n"]))),s=t(184),u=function(n){return(0,s.jsxs)(o.ZP,(0,a.Z)((0,a.Z)({speed:2,width:400,height:460,viewBox:"0 0 400 460",style:{width:"100%",height:"auto"},backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},n),{},{children:[(0,s.jsx)("rect",{x:"110",y:"466",rx:"2",ry:"2",width:"140",height:"10"}),(0,s.jsx)("rect",{x:"32",y:"-24",rx:"0",ry:"0",width:"384",height:"400"}),(0,s.jsx)("rect",{x:"32",y:"400",rx:"0",ry:"0",width:"392",height:"31"})]}))},p=function(){return(0,s.jsxs)(c,{children:[(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{}),(0,s.jsx)(u,{})]})}},4744:function(n,e,t){t.d(e,{Z:function(){return u}});var r,a=t(168),o=t(6031).ZP.div(r||(r=(0,a.Z)(["\n  position: relative;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & > img {\n    min-height: 485px;\n  }\n\n  & > div {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 60px;\n    display: flex;\n    padding: 5px;\n    justify-content: space-around;\n    align-items: center;\n    background-color: #e2d5d5a6;\n    border-radius: 10px;\n    object-fit: cover;\n  }\n\n  & > div > p {\n    font-weight: 500;\n    color: ",";\n  }\n\n  & > p {\n    margin-top: 10px;\n    font-size: 1.2rem;\n    font-weight: 600;\n    color: ",";\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor})),i=t(9126),c=t(9436),s=t(184),u=function(n){var e=n.movie,t=e.poster_path,r=e.original_title,a=e.vote_average;return(0,s.jsxs)(o,{children:[(0,s.jsx)("img",{src:null!==t?"https://image.tmdb.org/t/p/w500".concat(t):c,alt:r}),(0,s.jsx)("p",{children:r}),(0,s.jsxs)("div",{children:[(0,s.jsx)(i.kum,{size:"20px",color:"gold"}),(0,s.jsx)("p",{children:a.toFixed(1)})]})]})}},409:function(n,e,t){t.d(e,{Cm:function(){return b},TW:function(){return w},_0:function(){return y},f8:function(){return v},gY:function(){return d},hG:function(){return x},np:function(){return _},qF:function(){return f}});var r=t(885),a=t(5861),o=t(7757),i=t.n(o),c=t(4569),s=t.n(c),u=t(4222);s().defaults.baseURL="https://api.themoviedb.org/3/";var p="105ba628fde77462ee84526f3393a31c";function d(){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("trending/movie/day?api_key=".concat(p));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(i().mark((function n(e){var t,a,o,c,d,l,f,g,x;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.pageParam,a=void 0===t?1:t,o=e.queryKey,c=(0,r.Z)(o,2),d=c[0],l=c[1].query,console.log("".concat(d)),""===l){n.next=13;break}return n.next=6,s().get("search/movie?api_key=".concat(p,"&language=en-US&query=").concat(l,"&page=").concat(a,"&include_adult=false"));case 6:if(f=n.sent,g=f.data.results,x=f.data.total_pages,g.length){n.next=12;break}return u.Am.info("Movies were not found"),n.abrupt("return",null);case 12:return n.abrupt("return",{results:g,nextPage:a+1,totalPages:x});case 13:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(i().mark((function n(e){var t,a,o,c,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),o=a[0],c=a[1].movieId,console.log("".concat(o)),n.next=5,s().get("movie/".concat(c,"?api_key=").concat(p,"&language=en-US"));case 5:return u=n.sent,n.abrupt("return",u.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(i().mark((function n(e){var t,a,o,c,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),o=a[0],c=a[1].actorId,console.log("".concat(o)),n.next=5,s().get("person/".concat(c,"?api_key=").concat(p,"&language=en-US"));case 5:return u=n.sent,n.abrupt("return",u.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return j.apply(this,arguments)}function j(){return(j=(0,a.Z)(i().mark((function n(e){var t,a,o,c,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),o=a[0],c=a[1].actorId,console.log(c),console.log("".concat(o)),n.next=6,s().get("person/".concat(c,"/movie_credits?api_key=").concat(p,"&language=en-US"));case 6:return u=n.sent,n.abrupt("return",u.data);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)(i().mark((function n(e){var t,a,o,c,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),o=a[0],c=a[1].movieId,console.log("".concat(o)),n.next=5,s().get("movie/".concat(c,"/credits?api_key=").concat(p,"&language=en-US"));case 5:return u=n.sent,n.abrupt("return",u.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)(i().mark((function n(e){var t,a,o,c,u,d,l,f,g;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,a=void 0===t?1:t,o=e.queryKey,c=(0,r.Z)(o,2),u=c[0],d=c[1].movieId,console.log("".concat(u)),n.next=5,s().get("movie/".concat(d,"/reviews?api_key=").concat(p,"&language=en-US&page=1"));case 5:return l=n.sent,f=l.data.results,g=l.data.total_pages,n.abrupt("return",{results:f,nextPage:a+1,totalPages:g});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(n){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("movie/".concat(e,"/videos?api_key=").concat(p,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9436:function(n,e,t){n.exports=t.p+"static/media/Error 404 Wallpaper.8abd10198d38772bf2c0.jpg"}}]);
//# sourceMappingURL=home-page.ff4b6fc8.chunk.js.map