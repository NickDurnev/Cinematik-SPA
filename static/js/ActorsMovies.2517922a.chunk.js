"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[411],{6747:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a=e(2791),o=e(3504),u=e(6871),c=e(1933),i=e(6960),s=e(1508),p=e(8329),l=e(6048),d=e(168),f=e(9958),g=e(2441),h=(0,f.Z)(g.Z)(r||(r=(0,d.Z)(["\n  margin-top: 10px;\n"]))),v=e(7506),m=e(184),x=function(){var n,t,e,r=(0,u.UO)().actorId,d=(0,u.TH)(),f=(0,u.s0)(),g=(0,c.useQuery)(["filmsByActor",{actorId:r}],s._0,{staleTime:6e4,cacheTime:6e4}),x=g.data,y=g.error,w=g.isLoading,Z=g.isError,b=g.isSuccess;return(0,a.useEffect)((function(){if(404===x){var n=localStorage.getItem("actorId");f("/moviesbyactor/".concat(n))}}),[x,f]),w?(0,m.jsx)(v.Z,{}):Z?i.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(y.message)):(0,m.jsx)(m.Fragment,{children:b&&404!==x&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(h,{path:null!==(n=null===d||void 0===d||null===(t=d.state)||void 0===t||null===(e=t.from)||void 0===e?void 0:e.location)&&void 0!==n?n:"/"}),(0,m.jsx)(p.Z,{children:x.cast.map((function(n){return(0,m.jsx)("li",{children:(0,m.jsx)(o.rU,{to:"/movies/".concat(n.id),children:(0,m.jsx)(l.Z,{movie:n})})},n.id)}))})]})})}},8329:function(n,t,e){e.d(t,{Z:function(){return s}});var r,a=e(168),o=e(9958),u=e(4507),c=o.Z.ul(r||(r=(0,a.Z)(["\n  width: 100%;\n  display: block;\n  padding: 10px 0;\n\n  @media "," {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n    justify-items: center;\n    align-items: stretch;\n  }\n\n  @media "," {\n    grid-template-columns: repeat(5, 1fr);\n    gap: 20px;\n  }\n"])),u.U.tablet,u.U.laptop),i=e(184),s=function(n){var t=n.children;return(0,i.jsx)(c,{children:t})}},2441:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a=e(3504),o=e(7317),u=e(168),c=e(9958),i=e(9277),s=(0,c.Z)(i.Z)(r||(r=(0,u.Z)(["\n  position: sticky;\n  top: 0;\n  right: 95vw;\n  z-index: 2;\n  color: ",";\n  width: 60px;\n  height: 60px;\n\n  & > svg {\n    width: 40px;\n    height: 40px;\n  }\n"])),(function(n){return n.theme.bgElementColor})),p=e(184),l=function(n){var t=n.path,e=n.state;return(0,p.jsx)(a.rU,{to:t,state:{state:e},children:(0,p.jsx)(s,{children:(0,p.jsx)(o.Z,{})})})}},6048:function(n,t,e){e.d(t,{Z:function(){return y}});var r,a,o,u,c,i=e(168),s=e(9958),p=e(5970),l=e(4507),d=s.Z.div(r||(r=(0,i.Z)(["\n  position: relative;\n"]))),f=s.Z.div(a||(a=(0,i.Z)(["\n  width: 85vw;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & > img {\n    width: 100%;\n    min-height: 100%;\n    background: linear-gradient(\n      180deg,\n      rgba(29, 29, 29, 0) 0%,\n      rgba(29, 29, 29, 0.8) 80.79%\n    );\n  }\n\n  & > p {\n    width: 100%;\n    margin-top: 10px;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 32px;\n    color: ",";\n\n    @media "," {\n      font-weight: 400;\n      font-size: 18px;\n    }\n  }\n\n  @media "," {\n    width: 28vw;\n  }\n\n  @media "," {\n    width: 17vw;\n  }\n"])),(function(n){return n.theme.textColor}),l.U.tablet,l.U.tablet,l.U.laptop),g=s.Z.span(o||(o=(0,i.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 5px;\n  background: rgba(29, 29, 29, 0.5);\n  border-radius: 0px 8px;\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),h=s.Z.div(u||(u=(0,i.Z)(["\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n"]))),v=(0,s.Z)(p.Z)(c||(c=(0,i.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),m=e(9436),x=e(184),y=function(n){var t=n.movie,e=t.poster_path,r=t.title,a=t.vote_average,o=t.genre_ids,u=null;return o&&(u=function(n){var t=window.localStorage.getItem("moviesGenres"),e=JSON.parse(t),r=null;return e&&n.length>0&&(r=e.find((function(t){return t.id===n[0]})).name),r}(o)),(0,x.jsxs)(f,{children:[(0,x.jsxs)(d,{children:[u&&(0,x.jsx)(g,{children:u}),(0,x.jsx)("img",{src:null!==e?"https://image.tmdb.org/t/p/w400".concat(e):m,alt:r}),(0,x.jsx)(h,{children:a>0&&(0,x.jsx)(v,{name:"read-only",value:a.toFixed(1)/2,readOnly:!0,precision:.5})})]}),(0,x.jsx)("p",{children:r})]})}},1508:function(n,t,e){e.d(t,{AW:function(){return y},CO:function(){return h},Cm:function(){return E},TW:function(){return C},_0:function(){return I},f8:function(){return P},gY:function(){return l},hG:function(){return j},lJ:function(){return m},np:function(){return A},qF:function(){return k},r9:function(){return f},y:function(){return Z}});var r=e(885),a=e(5861),o=e(4687),u=e.n(o),c=e(4569),i=e.n(c),s=e(6960);i().defaults.baseURL="https://api.themoviedb.org/3/";var p="105ba628fde77462ee84526f3393a31c";function l(){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("trending/movie/day?api_key=".concat(p));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("genre/movie/list?api_key=".concat(p,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.genres);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)(u().mark((function n(t){var e,a,o,c,s,l,d,f,g;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,a=void 0===e?1:e,o=t.queryKey,c=(0,r.Z)(o,2),s=c[0],l=c[1].genreId,console.log(s),n.next=5,i().get("discover/movie?api_key=".concat(p,"&with_genres=").concat(l,"&page=").concat(a));case 5:return d=n.sent,f=d.data.results,g=d.data.total_pages,n.abrupt("return",{results:f,nextPage:a+1,totalPages:g});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(u().mark((function n(){var t,e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Math.floor(500*Math.random())+1,n.next=3,i().get("movie/725201/similar?api_key=".concat(p,"&language=en-US&page=").concat(t));case 3:return e=n.sent,r=e.data.results,n.abrupt("return",{results:r});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)(u().mark((function n(t){var e,r,a,o,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,r=void 0===e?1:e,n.next=3,i().get("movie/top_rated?api_key=".concat(p,"&language=en-US&page=").concat(r));case 3:return a=n.sent,o=a.data.results,c=a.data.total_pages,n.abrupt("return",{results:o,nextPage:r+1,totalPages:c});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(u().mark((function n(t){var e,r,a,o,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,r=void 0===e?1:e,n.next=3,i().get("movie/upcoming?api_key=".concat(p,"&language=en-US&page=").concat(r));case 3:return a=n.sent,o=a.data.results,c=a.data.total_pages,n.abrupt("return",{results:o,nextPage:r+1,totalPages:c});case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)(u().mark((function n(t){var e,a,o,c,l,d,f,g,h;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.pageParam,a=void 0===e?1:e,o=t.queryKey,c=(0,r.Z)(o,2),l=c[0],d=c[1].query,console.log("".concat(l)),d){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,i().get("search/movie?api_key=".concat(p,"&language=en-US&query=").concat(d,"&page=").concat(a,"&include_adult=false"));case 7:return f=n.sent,g=f.data.results,h=f.data.total_pages,g.length||s.Am.info("Movies were not found"),n.abrupt("return",{results:g,nextPage:a+1,totalPages:h});case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function j(n){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(u().mark((function n(t){var e,a,o,c,s,l;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),o=a[0],c=a[1].movieId,console.log("".concat(o)),n.prev=3,n.next=6,i().get("movie/".concat(c,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function P(n){return S.apply(this,arguments)}function S(){return(S=(0,a.Z)(u().mark((function n(t){var e,a,o,c,s,l;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),o=a[0],c=a[1].actorId,console.log("".concat(o)),n.prev=3,n.next=6,i().get("person/".concat(c,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function I(n){return q.apply(this,arguments)}function q(){return(q=(0,a.Z)(u().mark((function n(t){var e,a,o,c,s,l;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),o=a[0],c=a[1].actorId,console.log("".concat(o)),n.prev=3,n.next=6,i().get("person/".concat(c,"/movie_credits?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function C(n){return K.apply(this,arguments)}function K(){return(K=(0,a.Z)(u().mark((function n(t){var e,a,o,c,s;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),o=a[0],c=a[1].movieId,console.log("".concat(o)),n.next=5,i().get("movie/".concat(c,"/credits?api_key=").concat(p,"&language=en-US"));case 5:return s=n.sent,n.abrupt("return",s.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function E(n){return z.apply(this,arguments)}function z(){return(z=(0,a.Z)(u().mark((function n(t){var e,a,o,c,s,l,d,f,g;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,a=void 0===e?1:e,o=t.queryKey,c=(0,r.Z)(o,2),s=c[0],l=c[1].movieId,console.log("".concat(s)),n.next=5,i().get("movie/".concat(l,"/reviews?api_key=").concat(p,"&language=en-US&page=1"));case 5:return d=n.sent,f=d.data.results,g=d.data.total_pages,n.abrupt("return",{results:f,nextPage:a+1,totalPages:g});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function A(n){return F.apply(this,arguments)}function F(){return(F=(0,a.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"/videos?api_key=").concat(p,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7317:function(n,t,e){var r=e(4836);t.Z=void 0;var a=r(e(5649)),o=e(184),u=(0,a.default)((0,o.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");t.Z=u},9436:function(n,t,e){n.exports=e.p+"static/media/Error 404 Wallpaper.8abd10198d38772bf2c0.jpg"}}]);
//# sourceMappingURL=ActorsMovies.2517922a.chunk.js.map