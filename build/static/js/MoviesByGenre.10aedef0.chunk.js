"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[763],{8329:function(n,e,t){t.d(e,{Z:function(){return p}});var r,a=t(2436),i=t(168),o=t(9958),c=t(7608),u=o.Z.ul(r||(r=(0,i.Z)(["\n  width: 100%;\n  display: block;\n  padding: 15px 0;\n\n  & > li + li {\n    margin-top: 10px;\n\n    @media "," {\n      margin: 0;\n    }\n  }\n\n  @media "," {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n    justify-items: center;\n    align-items: stretch;\n  }\n\n  @media "," {\n    grid-template-columns: repeat(5, 1fr);\n    gap: 20px;\n  }\n"])),c.U.tablet,c.U.tablet,c.U.laptop),s=t(184),p=function(n){var e=n.children;return(0,s.jsx)(u,{children:(0,s.jsx)(a.M,{children:e})})}},2441:function(n,e,t){t.d(e,{Z:function(){return l}});var r,a=t(3504),i=t(7317),o=t(168),c=t(9958),u=t(9277),s=(0,c.Z)(u.Z)(r||(r=(0,o.Z)(["\n  position: sticky;\n  top: 0;\n  right: 95vw;\n  z-index: 2;\n  color: ",";\n  width: 60px;\n  height: 60px;\n\n  & > svg {\n    width: 40px;\n    height: 40px;\n  }\n"])),(function(n){return n.theme.bgElementColor})),p=t(184),l=function(n){var e=n.path,t=n.state;return(0,p.jsx)(a.rU,{to:e,state:{state:t},children:(0,p.jsx)(s,{children:(0,p.jsx)(i.Z,{})})})}},6048:function(n,e,t){t.d(e,{Z:function(){return x}});var r,a,i,o,c,u=t(168),s=t(9958),p=t(5970),l=t(7608),d=s.Z.div(r||(r=(0,u.Z)(["\n  position: relative;\n"]))),f=s.Z.div(a||(a=(0,u.Z)(["\n  width: 85vw;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & > img {\n    width: 100%;\n    min-height: 100%;\n    background: linear-gradient(\n      180deg,\n      rgba(29, 29, 29, 0) 0%,\n      rgba(29, 29, 29, 0.8) 80.79%\n    );\n  }\n\n  & > p {\n    width: 100%;\n    margin-top: 10px;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 32px;\n    color: ",";\n\n    @media "," {\n      font-weight: 400;\n      font-size: 18px;\n    }\n  }\n\n  @media "," {\n    width: 28vw;\n  }\n\n  @media "," {\n    width: 17vw;\n  }\n"])),(function(n){return n.theme.textColor}),l.U.tablet,l.U.tablet,l.U.laptop),g=s.Z.span(i||(i=(0,u.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 5px;\n  background: rgba(29, 29, 29, 0.5);\n  border-radius: 0px 8px;\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),h=s.Z.div(o||(o=(0,u.Z)(["\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n"]))),v=(0,s.Z)(p.Z)(c||(c=(0,u.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),m=t(9436),y=t(184),x=function(n){var e=n.movie,t=e.poster_path,r=e.title,a=e.vote_average,i=e.genre_ids,o=null;return i&&(o=function(n){var e=window.localStorage.getItem("moviesGenres"),t=JSON.parse(e),r=null;return t&&n.length>0&&(r=t.find((function(e){return e.id===n[0]})).name),r}(i)),(0,y.jsxs)(f,{children:[(0,y.jsxs)(d,{children:[o&&(0,y.jsx)(g,{children:o}),(0,y.jsx)("img",{src:null!==t?"https://image.tmdb.org/t/p/w400".concat(t):m,alt:r}),(0,y.jsx)(h,{children:a>0&&(0,y.jsx)(v,{name:"read-only",value:a.toFixed(1)/2,readOnly:!0,precision:.5})})]}),(0,y.jsx)("p",{children:r})]})}},3812:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a=t(2982),i=t(885),o=t(2791),c=t(3504),u=t(6871),s=t(1933),p=t(9348),l=t(6960),d=t(6188),f=t(7477),g=t(8329),h=t(6048),v=t(2441),m=t(7506),y=t(168),x=t(9958).Z.div(r||(r=(0,y.Z)(["\n  position: absolute;\n  bottom: 500px;\n  right: 0;\n  width: 5px;\n  height: 5px;\n"]))),w=t(5905),b=t(184),Z=function(){var n,e,t,r=(0,o.useState)([]),y=(0,i.Z)(r,2),Z=y[0],k=y[1],_=(0,o.useState)(0),j=(0,i.Z)(_,2),U=j[0],I=j[1],P=(0,u.TH)(),S=(0,u.UO)().genreId,V=(0,p.YD)({threshold:.1}),C=V.ref,O=V.inView,E=(0,s.useInfiniteQuery)(["moviesByGenre",{genreId:S}],f.CO,{staleTime:6e4,cacheTime:6e4,getNextPageParam:function(n){if(!(n.nextPage>n.totalPages))return n.nextPage}}),q=E.data,M=E.error,K=E.fetchNextPage,R=E.isLoading,z=E.isError,A=E.isSuccess;return(0,o.useEffect)((function(){0!==Z.length&&O&&K()}),[O]),(0,o.useEffect)((function(){A&&null!==q&&void 0!==q&&q.pages[U]&&(k([].concat((0,a.Z)(Z),(0,a.Z)(q.pages[U].results))),I(U+1)),z&&l.Am.error("Error: ".concat(M.response.data.message))}),[q,z,A]),R?(0,b.jsx)(m.Z,{}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(d.E.div,{initial:"closed",animate:"open",exit:"exit",variants:w.wz,children:[P.state&&(0,b.jsx)(v.Z,{path:null!==(n=null===P||void 0===P||null===(e=P.state)||void 0===e||null===(t=e.from)||void 0===t?void 0:t.location)&&void 0!==n?n:"/"}),Z.length>0&&!R&&(0,b.jsx)(g.Z,{children:Z.map((function(n){return(0,b.jsx)(d.E.li,{initial:"closed",animate:"open",exit:"exit",variants:w.yr,children:(0,b.jsx)(c.rU,{to:"/movies/".concat(n.id),state:{from:{location:P}},children:(0,b.jsx)(h.Z,{movie:n})})},n.id)}))})]}),(0,b.jsx)(x,{ref:C})]})}},7477:function(n,e,t){t.d(e,{CO:function(){return h},Cm:function(){return C},TW:function(){return S},_0:function(){return I},f8:function(){return j},gY:function(){return l},hG:function(){return k},lJ:function(){return m},np:function(){return E},qF:function(){return b},r9:function(){return f},sU:function(){return x}});var r=t(885),a=t(5861),i=t(4687),o=t.n(i),c=t(4569),u=t.n(c),s=t(6960);u().defaults.baseURL="https://api.themoviedb.org/3/";var p="105ba628fde77462ee84526f3393a31c";function l(){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("trending/movie/day?api_key=".concat(p));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("genre/movie/list?api_key=".concat(p,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.genres);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)(o().mark((function n(e){var t,a,i,c,s,l,d,f,g;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,a=void 0===t?1:t,i=e.queryKey,c=(0,r.Z)(i,2),s=c[0],l=c[1].genreId,console.log(s),n.next=5,u().get("discover/movie?api_key=".concat(p,"&with_genres=").concat(l,"&page=").concat(a));case 5:return d=n.sent,f=d.data.results,g=d.data.total_pages,n.abrupt("return",{results:f,nextPage:a+1,totalPages:g});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(o().mark((function n(){var e,t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Math.floor(500*Math.random())+1,n.next=3,u().get("movie/725201/similar?api_key=".concat(p,"&language=en-US&page=").concat(e));case 3:return t=n.sent,r=t.data.results,n.abrupt("return",{results:r});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)(o().mark((function n(e){var t,a,i,c,s,l,d,f;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,a=void 0===t?1:t,i=e.queryKey,c=(0,r.Z)(i,2),c[0],s=c[1].category,n.next=4,u().get("movie/".concat(s,"?api_key=").concat(p,"&language=en-US&page=").concat(a));case 4:return l=n.sent,d=l.data.results,f=l.data.total_pages,n.abrupt("return",{results:d,nextPage:a+1,totalPages:f});case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,a.Z)(o().mark((function n(e){var t,a,i,c,l,d,f,g,h;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.pageParam,a=void 0===t?1:t,i=e.queryKey,c=(0,r.Z)(i,2),l=c[0],d=c[1].query,console.log("".concat(l)),d){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,u().get("search/movie?api_key=".concat(p,"&language=en-US&query=").concat(d,"&page=").concat(a,"&include_adult=false"));case 7:return f=n.sent,g=f.data.results,h=f.data.total_pages,g.length||s.Am.info("Movies were not found"),n.abrupt("return",{results:g,nextPage:a+1,totalPages:h});case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)(o().mark((function n(e){var t,a,i,c,s,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],c=a[1].movieId,console.log("".concat(i)),n.prev=3,n.next=6,u().get("movie/".concat(c,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function j(n){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(o().mark((function n(e){var t,a,i,c,s,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],c=a[1].actorId,console.log("".concat(i)),n.prev=3,n.next=6,u().get("person/".concat(c,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function I(n){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)(o().mark((function n(e){var t,a,i,c,s,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],c=a[1].actorId,console.log("".concat(i)),n.next=5,u().get("person/".concat(c,"/movie_credits?api_key=").concat(p,"&language=en-US"));case 5:return s=n.sent,l=s.data,n.abrupt("return",l);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function S(n){return V.apply(this,arguments)}function V(){return(V=(0,a.Z)(o().mark((function n(e){var t,a,i,c,s;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.queryKey,a=(0,r.Z)(t,2),i=a[0],c=a[1].movieId,console.log("".concat(i)),n.next=5,u().get("movie/".concat(c,"/credits?api_key=").concat(p,"&language=en-US"));case 5:return s=n.sent,n.abrupt("return",s.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function C(n){return O.apply(this,arguments)}function O(){return(O=(0,a.Z)(o().mark((function n(e){var t,a,i,c,s,l,d,f,g;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.pageParam,a=void 0===t?1:t,i=e.queryKey,c=(0,r.Z)(i,2),s=c[0],l=c[1].movieId,console.log("".concat(s)),n.next=5,u().get("movie/".concat(l,"/reviews?api_key=").concat(p,"&language=en-US&page=1"));case 5:return d=n.sent,f=d.data.results,g=d.data.total_pages,n.abrupt("return",{results:f,nextPage:a+1,totalPages:g});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function E(n){return q.apply(this,arguments)}function q(){return(q=(0,a.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(e,"/videos?api_key=").concat(p,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7317:function(n,e,t){var r=t(4836);e.Z=void 0;var a=r(t(5649)),i=t(184),o=(0,a.default)((0,i.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");e.Z=o},9436:function(n,e,t){n.exports=t.p+"static/media/Error 404 Wallpaper.8abd10198d38772bf2c0.jpg"},9348:function(n,e,t){t.d(e,{YD:function(){return x}});var r=t(885),a=t(5671),i=t(3144),o=t(136),c=t(9388),u=t(2791);function s(){return s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},s.apply(this,arguments)}var p=new Map,l=new WeakMap,d=0,f=void 0;function g(n){return Object.keys(n).sort().filter((function(e){return void 0!==n[e]})).map((function(e){return"".concat(e,"_").concat("root"===e?(t=n.root)?(l.has(t)||(d+=1,l.set(t,d.toString())),l.get(t)):"0":n[e]);var t})).toString()}function h(n){var e=g(n),t=p.get(e);if(!t){var r,a=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t,i=e.isIntersecting&&r.some((function(n){return e.intersectionRatio>=n}));n.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=i),null==(t=a.get(e.target))||t.forEach((function(n){n(i,e)}))}))}),n);r=i.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),t={id:e,observer:i,elements:a},p.set(e,t)}return t}function v(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:f;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){var a=n.getBoundingClientRect();return e(r,{isIntersecting:r,target:n,intersectionRatio:"number"===typeof t.threshold?t.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),function(){}}var i=h(t),o=i.id,c=i.observer,u=i.elements,s=u.get(n)||[];return u.has(n)||u.set(n,s),s.push(e),c.observe(n),function(){s.splice(s.indexOf(e),1),0===s.length&&(u.delete(n),c.unobserve(n)),0===u.size&&(c.disconnect(),p.delete(o))}}var m=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function y(n){return"function"!==typeof n.children}u.Component;function x(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.threshold,t=n.delay,a=n.trackVisibility,i=n.rootMargin,o=n.root,c=n.triggerOnce,s=n.skip,p=n.initialInView,l=n.fallbackInView,d=n.onChange,f=u.useRef(),g=u.useRef(),h=u.useState({inView:!!p}),m=(0,r.Z)(h,2),y=m[0],x=m[1];g.current=d;var w=u.useCallback((function(n){void 0!==f.current&&(f.current(),f.current=void 0),s||n&&(f.current=v(n,(function(n,e){x({inView:n,entry:e}),g.current&&g.current(n,e),e.isIntersecting&&c&&f.current&&(f.current(),f.current=void 0)}),{root:o,rootMargin:i,threshold:e,trackVisibility:a,delay:t},l))}),[Array.isArray(e)?e.toString():e,o,i,c,s,a,l,t]);u.useEffect((function(){f.current||!y.entry||c||s||x({inView:!!p})}));var b=[w,y.inView,y.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}}}]);
//# sourceMappingURL=MoviesByGenre.10aedef0.chunk.js.map