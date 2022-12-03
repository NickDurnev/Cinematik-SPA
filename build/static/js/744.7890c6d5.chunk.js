"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[744],{6048:function(e,t,n){n.d(t,{Z:function(){return w}});var r,a,o,i,u,c=n(168),s=n(9958),p=n(5970),l=n(7608),f=s.Z.div(r||(r=(0,c.Z)(["\n  position: relative;\n"]))),d=s.Z.div(a||(a=(0,c.Z)(["\n  width: 85vw;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & > img {\n    width: 100%;\n    min-height: 100%;\n    background: linear-gradient(\n      180deg,\n      rgba(29, 29, 29, 0) 0%,\n      rgba(29, 29, 29, 0.8) 80.79%\n    );\n  }\n\n  & > p {\n    width: 100%;\n    margin-top: 10px;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 32px;\n    color: ",";\n\n    @media "," {\n      font-weight: 400;\n      font-size: 18px;\n    }\n  }\n\n  @media "," {\n    width: 28vw;\n  }\n\n  @media "," {\n    width: 17vw;\n  }\n"])),(function(e){return e.theme.textColor}),l.U.tablet,l.U.tablet,l.U.laptop),g=s.Z.span(o||(o=(0,c.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 5px;\n  background: rgba(29, 29, 29, 0.5);\n  border-radius: 0px 8px;\n  color: ",";\n"])),(function(e){return e.theme.bgElementColor})),h=s.Z.div(i||(i=(0,c.Z)(["\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n"]))),v=(0,s.Z)(p.Z)(u||(u=(0,c.Z)(["\n  color: ",";\n"])),(function(e){return e.theme.bgElementColor})),y=n(9436),m=n(184),w=function(e){var t=e.movie,n=t.poster_path,r=t.title,a=t.vote_average,o=t.genre_ids,i=null;return o&&(i=function(e){var t=window.localStorage.getItem("moviesGenres"),n=JSON.parse(t),r=null;return n&&e.length>0&&(r=n.find((function(t){return t.id===e[0]})).name),r}(o)),(0,m.jsxs)(d,{children:[(0,m.jsxs)(f,{children:[i&&(0,m.jsx)(g,{children:i}),(0,m.jsx)("img",{src:null!==n?"https://image.tmdb.org/t/p/w400".concat(n):y,alt:r}),(0,m.jsx)(h,{children:a>0&&(0,m.jsx)(v,{name:"read-only",value:a.toFixed(1)/2,readOnly:!0,precision:.5})})]}),(0,m.jsx)("p",{children:r})]})}},1786:function(e,t,n){n.d(t,{Z:function(){return E}});var r,a,o,i,u=n(1413),c=n(2791),s=n(3504),p=n(7152),l=n(7092),f=n(4805),d=(n(4676),n(4432),n(435),n(6048)),g=n(168),h=n(9958),v=n(7608),y=(0,h.Z)(l.tq)(r||(r=(0,g.Z)(["\n  position: relative;\n  width: 95%;\n  height: auto;\n\n  @media "," {\n    padding: 10px 0;\n  }\n"])),v.U.tablet),m=h.Z.div(a||(a=(0,g.Z)(["\n  position: absolute;\n  top: 40%;\n  left: 0;\n  transform: translateY(-50%);\n  z-index: 2;\n  cursor: pointer;\n\n  @media "," {\n    top: 45%;\n  }\n"])),v.U.laptopL),w=h.Z.div(o||(o=(0,g.Z)(["\n  position: absolute;\n  top: 40%;\n  right: 0;\n  transform: translateY(-50%);\n  z-index: 2;\n  cursor: pointer;\n\n  @media "," {\n    top: 45%;\n    right: 15px;\n  }\n"])),v.U.laptopL),x=["title","titleId"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function k(e,t){var n=e.title,r=e.titleId,a=Z(e,x);return c.createElement("svg",b({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,i||(i=c.createElement("path",{d:"M10.1767 12.2373L13.9393 16L13.586 16.3533L8.93966 11.707L13.586 7.06066L13.9393 7.414L10.1767 11.1767L9.64634 11.707L10.1767 12.2373Z",fill:"white",stroke:"white",strokeWidth:1.5})))}var _,j=c.forwardRef(k),O=(n.p,["title","titleId"]);function P(){return P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function U(e,t){var n=e.title,r=e.titleId,a=L(e,O);return c.createElement("svg",P({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,_||(_=c.createElement("path",{d:"M12.8233 10.7627L9.06066 7L9.414 6.64666L14.0603 11.293L9.414 15.9393L9.06066 15.586L12.8233 11.8233L13.3537 11.293L12.8233 10.7627Z",fill:"white",stroke:"white",strokeWidth:1.5})))}var S=c.forwardRef(U),q=(n.p,n(184)),E=function(e){var t=e.movies,n=e.location,r=e.onAutoPlay,a=null;a=void 0!==r&&r?{delay:5e3}:{delay:2e6};var o=1;return(0,f.useMediaQuery)({query:"(min-width: 768px)"})&&(o=3),(0,f.useMediaQuery)({query:"(min-width: 1024px)"})&&(o=5),(0,q.jsxs)(y,{modules:[p.W_,p.s5,p.pt],spaceBetween:10,slidesPerView:o,navigation:{prevEl:".prev",nextEl:".next"},autoplay:(0,u.Z)({},a),onSwiper:function(e){return console.log(e)},onSlideChange:function(){return console.log("slide change")},children:[(0,q.jsx)(m,{className:"prev",children:(0,q.jsx)(j,{width:60,height:60})}),t.map((function(e){return(0,q.jsx)(l.o5,{children:(0,q.jsx)(s.rU,{to:"/movies/".concat(e.id),state:{from:{location:n}},children:(0,q.jsx)(d.Z,{movie:e})})},e.id)})),(0,q.jsx)(w,{className:"next",children:(0,q.jsx)(S,{width:60,height:60})})]})}},7477:function(e,t,n){n.d(t,{CO:function(){return h},Cm:function(){return q},TW:function(){return U},_0:function(){return P},f8:function(){return j},gY:function(){return l},hG:function(){return k},lJ:function(){return y},np:function(){return I},qF:function(){return b},r9:function(){return d},sU:function(){return w}});var r=n(885),a=n(5861),o=n(4687),i=n.n(o),u=n(4569),c=n.n(u),s=n(6960);c().defaults.baseURL="https://api.themoviedb.org/3/";var p="105ba628fde77462ee84526f3393a31c";function l(){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("trending/movie/day?api_key=".concat(p));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("genre/movie/list?api_key=".concat(p,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.genres);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)(i().mark((function e(t){var n,a,o,u,s,l,f,d,g;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pageParam,a=void 0===n?1:n,o=t.queryKey,u=(0,r.Z)(o,2),s=u[0],l=u[1].genreId,console.log(s),e.next=5,c().get("discover/movie?api_key=".concat(p,"&with_genres=").concat(l,"&page=").concat(a));case 5:return f=e.sent,d=f.data.results,g=f.data.total_pages,e.abrupt("return",{results:d,nextPage:a+1,totalPages:g});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(i().mark((function e(){var t,n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(500*Math.random())+1,e.next=3,c().get("movie/725201/similar?api_key=".concat(p,"&language=en-US&page=").concat(t));case 3:return n=e.sent,r=n.data.results,e.abrupt("return",{results:r});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(i().mark((function e(t){var n,a,o,u,s,l,f,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pageParam,a=void 0===n?1:n,o=t.queryKey,u=(0,r.Z)(o,2),u[0],s=u[1].category,e.next=4,c().get("movie/".concat(s,"?api_key=").concat(p,"&language=en-US&page=").concat(a));case 4:return l=e.sent,f=l.data.results,d=l.data.total_pages,e.abrupt("return",{results:f,nextPage:a+1,totalPages:d});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)(i().mark((function e(t){var n,a,o,u,l,f,d,g,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.pageParam,a=void 0===n?1:n,o=t.queryKey,u=(0,r.Z)(o,2),l=u[0],f=u[1].query,console.log("".concat(l)),f){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,c().get("search/movie?api_key=".concat(p,"&language=en-US&query=").concat(f,"&page=").concat(a,"&include_adult=false"));case 7:return d=e.sent,g=d.data.results,h=d.data.total_pages,g.length||s.Am.info("Movies were not found"),e.abrupt("return",{results:g,nextPage:a+1,totalPages:h});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)(i().mark((function e(t){var n,a,o,u,s,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.queryKey,a=(0,r.Z)(n,2),o=a[0],u=a[1].movieId,console.log("".concat(o)),e.prev=3,e.next=6,c().get("movie/".concat(u,"?api_key=").concat(p,"&language=en-US"));case 6:return s=e.sent,e.next=9,s.data;case 9:return l=e.sent,e.abrupt("return",l);case 13:return e.prev=13,e.t0=e.catch(3),e.abrupt("return",e.t0.response.status);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))).apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return(O=(0,a.Z)(i().mark((function e(t){var n,a,o,u,s,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.queryKey,a=(0,r.Z)(n,2),o=a[0],u=a[1].actorId,console.log("".concat(o)),e.prev=3,e.next=6,c().get("person/".concat(u,"?api_key=").concat(p,"&language=en-US"));case 6:return s=e.sent,e.next=9,s.data;case 9:return l=e.sent,e.abrupt("return",l);case 13:return e.prev=13,e.t0=e.catch(3),e.abrupt("return",e.t0.response.status);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})))).apply(this,arguments)}function P(e){return L.apply(this,arguments)}function L(){return(L=(0,a.Z)(i().mark((function e(t){var n,a,o,u,s,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.queryKey,a=(0,r.Z)(n,2),o=a[0],u=a[1].actorId,console.log("".concat(o)),e.next=5,c().get("person/".concat(u,"/movie_credits?api_key=").concat(p,"&language=en-US"));case 5:return s=e.sent,l=s.data,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return S.apply(this,arguments)}function S(){return(S=(0,a.Z)(i().mark((function e(t){var n,a,o,u,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.queryKey,a=(0,r.Z)(n,2),o=a[0],u=a[1].movieId,console.log("".concat(o)),e.next=5,c().get("movie/".concat(u,"/credits?api_key=").concat(p,"&language=en-US"));case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return E.apply(this,arguments)}function E(){return(E=(0,a.Z)(i().mark((function e(t){var n,a,o,u,s,l,f,d,g;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pageParam,a=void 0===n?1:n,o=t.queryKey,u=(0,r.Z)(o,2),s=u[0],l=u[1].movieId,console.log("".concat(s)),e.next=5,c().get("movie/".concat(l,"/reviews?api_key=").concat(p,"&language=en-US&page=1"));case 5:return f=e.sent,d=f.data.results,g=f.data.total_pages,e.abrupt("return",{results:d,nextPage:a+1,totalPages:g});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return C.apply(this,arguments)}function C(){return(C=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("movie/".concat(t,"/videos?api_key=").concat(p,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},9436:function(e,t,n){e.exports=n.p+"static/media/Error 404 Wallpaper.8abd10198d38772bf2c0.jpg"}}]);
//# sourceMappingURL=744.7890c6d5.chunk.js.map