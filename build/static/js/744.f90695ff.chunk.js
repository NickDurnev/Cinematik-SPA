"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[744],{6048:function(t,n,e){e.d(n,{Z:function(){return w}});var r,a,o,i,c,u=e(168),s=e(9958),p=e(5970),l=e(7608),f=s.Z.div(r||(r=(0,u.Z)(["\n  position: relative;\n"]))),d=s.Z.div(a||(a=(0,u.Z)(["\n  width: 85vw;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & > img {\n    width: 100%;\n    min-height: 100%;\n    background: linear-gradient(\n      180deg,\n      rgba(29, 29, 29, 0) 0%,\n      rgba(29, 29, 29, 0.8) 80.79%\n    );\n  }\n\n  & > p {\n    width: 100%;\n    margin-top: 10px;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 32px;\n    color: ",";\n\n    @media "," {\n      font-weight: 400;\n      font-size: 18px;\n    }\n  }\n\n  @media "," {\n    width: 28vw;\n  }\n\n  @media "," {\n    width: 17vw;\n  }\n"])),(function(t){return t.theme.textColor}),l.U.tablet,l.U.tablet,l.U.laptop),g=s.Z.span(o||(o=(0,u.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 5px;\n  background: rgba(29, 29, 29, 0.5);\n  border-radius: 0px 8px;\n  color: ",";\n"])),(function(t){return t.theme.bgElementColor})),h=s.Z.div(i||(i=(0,u.Z)(["\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n"]))),v=(0,s.Z)(p.Z)(c||(c=(0,u.Z)(["\n  color: ",";\n"])),(function(t){return t.theme.bgElementColor})),y=e(9436),m=e(184),w=function(t){var n=t.movie,e=n.poster_path,r=n.title,a=n.vote_average,o=n.genre_ids,i=null;return o&&(i=function(t){var n=window.localStorage.getItem("moviesGenres"),e=JSON.parse(n),r=null;return e&&t.length>0&&(r=e.find((function(n){return n.id===t[0]})).name),r}(o)),(0,m.jsxs)(d,{children:[(0,m.jsxs)(f,{children:[i&&(0,m.jsx)(g,{children:i}),(0,m.jsx)("img",{src:null!==e?"https://image.tmdb.org/t/p/w400".concat(e):y,alt:r}),(0,m.jsx)(h,{children:a>0&&(0,m.jsx)(v,{name:"read-only",value:a.toFixed(1)/2,readOnly:!0,precision:.5})})]}),(0,m.jsx)("p",{children:r})]})}},1786:function(t,n,e){e.d(n,{Z:function(){return E}});var r,a,o,i,c=e(1413),u=e(2791),s=e(3504),p=e(7152),l=e(7092),f=e(4805),d=(e(4676),e(4432),e(435),e(6048)),g=e(168),h=e(9958),v=e(7608),y=(0,h.Z)(l.tq)(r||(r=(0,g.Z)(["\n  position: relative;\n  width: 95%;\n  height: auto;\n\n  @media "," {\n    padding: 10px 0;\n  }\n"])),v.U.tablet),m=h.Z.div(a||(a=(0,g.Z)(["\n  position: absolute;\n  top: 40%;\n  left: 0;\n  transform: translateY(-50%);\n  z-index: 2;\n  cursor: pointer;\n\n  @media "," {\n    top: 45%;\n  }\n"])),v.U.laptopL),w=h.Z.div(o||(o=(0,g.Z)(["\n  position: absolute;\n  top: 40%;\n  right: 0;\n  transform: translateY(-50%);\n  z-index: 2;\n  cursor: pointer;\n\n  @media "," {\n    top: 45%;\n    right: 15px;\n  }\n"])),v.U.laptopL),x=["title","titleId"];function b(){return b=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},b.apply(this,arguments)}function Z(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function k(t,n){var e=t.title,r=t.titleId,a=Z(t,x);return u.createElement("svg",b({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),e?u.createElement("title",{id:r},e):null,i||(i=u.createElement("path",{d:"M10.1767 12.2373L13.9393 16L13.586 16.3533L8.93966 11.707L13.586 7.06066L13.9393 7.414L10.1767 11.1767L9.64634 11.707L10.1767 12.2373Z",fill:"white",stroke:"white",strokeWidth:1.5})))}var _,j=u.forwardRef(k),O=(e.p,["title","titleId"]);function P(){return P=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},P.apply(this,arguments)}function L(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}function S(t,n){var e=t.title,r=t.titleId,a=L(t,O);return u.createElement("svg",P({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},a),e?u.createElement("title",{id:r},e):null,_||(_=u.createElement("path",{d:"M12.8233 10.7627L9.06066 7L9.414 6.64666L14.0603 11.293L9.414 15.9393L9.06066 15.586L12.8233 11.8233L13.3537 11.293L12.8233 10.7627Z",fill:"white",stroke:"white",strokeWidth:1.5})))}var U=u.forwardRef(S),q=(e.p,e(184)),E=function(t){var n=t.movies,e=t.location,r=t.onAutoPlay,a=null;a=void 0!==r&&r?{delay:5e3}:{delay:2e6};var o=1;return(0,f.useMediaQuery)({query:"(min-width: 768px)"})&&(o=3),(0,f.useMediaQuery)({query:"(min-width: 1024px)"})&&(o=5),(0,q.jsxs)(y,{modules:[p.W_,p.s5,p.pt],spaceBetween:10,slidesPerView:o,navigation:{prevEl:".prev",nextEl:".next"},autoplay:(0,c.Z)({},a),onSwiper:function(t){return console.log(t)},onSlideChange:function(){return console.log("slide change")},children:[(0,q.jsx)(m,{className:"prev",children:(0,q.jsx)(j,{width:60,height:60})}),n.map((function(t){return(0,q.jsx)(l.o5,{children:(0,q.jsx)(s.rU,{to:"/movies/".concat(t.id),state:{from:{location:e}},children:(0,q.jsx)(d.Z,{movie:t})})},t.id)})),(0,q.jsx)(w,{className:"next",children:(0,q.jsx)(U,{width:60,height:60})})]})}},7477:function(t,n,e){e.d(n,{CO:function(){return v},Cm:function(){return E},TW:function(){return U},_0:function(){return L},f8:function(){return O},gY:function(){return f},hG:function(){return _},lJ:function(){return m},np:function(){return C},qF:function(){return Z},r9:function(){return g},sU:function(){return x}});var r=e(885),a=e(5861),o=e(4687),i=e.n(o),c=e(4569),u=e.n(c),s=e(6960),p="https://api.themoviedb.org/3/",l="105ba628fde77462ee84526f3393a31c";function f(){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(p,"trending/movie/day?api_key=").concat(l));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(p,"genre/movie/list?api_key=").concat(l,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.genres);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(i().mark((function t(n){var e,a,o,c,s,f,d,g,h;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.pageParam,a=void 0===e?1:e,o=n.queryKey,c=(0,r.Z)(o,2),s=c[0],f=c[1].genreId,console.log(s),t.next=5,u().get("".concat(p,"discover/movie?api_key=").concat(l,"&with_genres=").concat(f,"&page=").concat(a));case 5:return d=t.sent,g=d.data.results,h=d.data.total_pages,t.abrupt("return",{results:g,nextPage:a+1,totalPages:h});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)(i().mark((function t(){var n,e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Math.floor(500*Math.random())+1,t.next=3,u().get("".concat(p,"movie/725201/similar?api_key=").concat(l,"&language=en-US&page=").concat(n));case 3:return e=t.sent,r=e.data.results,t.abrupt("return",{results:r});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(i().mark((function t(n){var e,a,o,c,s,f,d,g;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.pageParam,a=void 0===e?1:e,o=n.queryKey,c=(0,r.Z)(o,2),c[0],s=c[1].category,t.next=4,u().get("".concat(p,"movie/").concat(s,"?api_key=").concat(l,"&language=en-US&page=").concat(a));case 4:return f=t.sent,d=f.data.results,g=f.data.total_pages,t.abrupt("return",{results:d,nextPage:a+1,totalPages:g});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Z(t){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)(i().mark((function t(n){var e,a,o,c,f,d,g,h,v;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.pageParam,a=void 0===e?1:e,o=n.queryKey,c=(0,r.Z)(o,2),f=c[0],d=c[1].query,console.log("".concat(f)),d){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,u().get("".concat(p,"search/movie?api_key=").concat(l,"&language=en-US&query=").concat(d,"&page=").concat(a,"&include_adult=false"));case 7:return g=t.sent,h=g.data.results,v=g.data.total_pages,h.length||s.Am.info("Movies were not found"),t.abrupt("return",{results:h,nextPage:a+1,totalPages:v});case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return j.apply(this,arguments)}function j(){return(j=(0,a.Z)(i().mark((function t(n){var e,a,o,c,s,f;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.queryKey,a=(0,r.Z)(e,2),o=a[0],c=a[1].movieId,console.log("".concat(o)),t.prev=3,t.next=6,u().get("".concat(p,"movie/").concat(c,"?api_key=").concat(l,"&language=en-US"));case 6:return s=t.sent,t.next=9,s.data;case 9:return f=t.sent,t.abrupt("return",f);case 13:return t.prev=13,t.t0=t.catch(3),t.abrupt("return",t.t0.response.status);case 16:case"end":return t.stop()}}),t,null,[[3,13]])})))).apply(this,arguments)}function O(t){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)(i().mark((function t(n){var e,a,o,c,s,f;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.queryKey,a=(0,r.Z)(e,2),o=a[0],c=a[1].actorId,console.log("".concat(o)),t.prev=3,t.next=6,u().get("".concat(p,"person/").concat(c,"?api_key=").concat(l,"&language=en-US"));case 6:return s=t.sent,t.next=9,s.data;case 9:return f=t.sent,t.abrupt("return",f);case 13:return t.prev=13,t.t0=t.catch(3),t.abrupt("return",t.t0.response.status);case 16:case"end":return t.stop()}}),t,null,[[3,13]])})))).apply(this,arguments)}function L(t){return S.apply(this,arguments)}function S(){return(S=(0,a.Z)(i().mark((function t(n){var e,a,o,c,s,f;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.queryKey,a=(0,r.Z)(e,2),o=a[0],c=a[1].actorId,console.log("".concat(o)),t.next=5,u().get("".concat(p,"person/").concat(c,"/movie_credits?api_key=").concat(l,"&language=en-US"));case 5:return s=t.sent,f=s.data,t.abrupt("return",f);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(t){return q.apply(this,arguments)}function q(){return(q=(0,a.Z)(i().mark((function t(n){var e,a,o,c,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.queryKey,a=(0,r.Z)(e,2),o=a[0],c=a[1].movieId,console.log("".concat(o)),t.next=5,u().get("".concat(p,"movie/").concat(c,"/credits?api_key=").concat(l,"&language=en-US"));case 5:return s=t.sent,t.abrupt("return",s.data);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(t){return I.apply(this,arguments)}function I(){return(I=(0,a.Z)(i().mark((function t(n){var e,a,o,c,s,f,d,g,h;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.pageParam,a=void 0===e?1:e,o=n.queryKey,c=(0,r.Z)(o,2),s=c[0],f=c[1].movieId,console.log("".concat(s)),t.next=5,u().get("".concat(p,"movie/").concat(f,"/reviews?api_key=").concat(l,"&language=en-US&page=1"));case 5:return d=t.sent,g=d.data.results,h=d.data.total_pages,t.abrupt("return",{results:g,nextPage:a+1,totalPages:h});case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){return K.apply(this,arguments)}function K(){return(K=(0,a.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u().get("".concat(p,"movie/").concat(n,"/videos?api_key=").concat(l,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},9436:function(t,n,e){t.exports=e.p+"static/media/Error 404 Wallpaper.8abd10198d38772bf2c0.jpg"}}]);
//# sourceMappingURL=744.f90695ff.chunk.js.map