"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[883],{8329:function(n,t,e){e.d(t,{Z:function(){return p}});var r,a=e(2436),i=e(168),o=e(9958),c=e(7608),u=o.Z.ul(r||(r=(0,i.Z)(["\n  width: 100%;\n  display: block;\n  padding: 15px 0;\n\n  & > li + li {\n    margin-top: 10px;\n\n    @media "," {\n      margin: 0;\n    }\n  }\n\n  @media "," {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 10px;\n    justify-items: center;\n    align-items: stretch;\n  }\n\n  @media "," {\n    grid-template-columns: repeat(5, 1fr);\n    gap: 20px;\n  }\n"])),c.U.tablet,c.U.tablet,c.U.laptop),s=e(184),p=function(n){var t=n.children;return(0,s.jsx)(u,{children:(0,s.jsx)(a.M,{children:t})})}},2441:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a=e(3504),i=e(7317),o=e(168),c=e(9958),u=e(9277),s=(0,c.Z)(u.Z)(r||(r=(0,o.Z)(["\n  position: sticky;\n  top: 0;\n  right: 95vw;\n  z-index: 2;\n  color: ",";\n  width: 60px;\n  height: 60px;\n\n  & > svg {\n    width: 40px;\n    height: 40px;\n  }\n"])),(function(n){return n.theme.bgElementColor})),p=e(184),l=function(n){var t=n.path,e=n.state;return(0,p.jsx)(a.rU,{to:t,state:{state:e},children:(0,p.jsx)(s,{children:(0,p.jsx)(i.Z,{})})})}},6048:function(n,t,e){e.d(t,{Z:function(){return y}});var r,a,i,o,c,u=e(168),s=e(9958),p=e(5970),l=e(7608),d=s.Z.div(r||(r=(0,u.Z)(["\n  position: relative;\n"]))),f=s.Z.div(a||(a=(0,u.Z)(["\n  width: 85vw;\n  border-radius: 10px;\n  overflow: hidden;\n\n  & > img {\n    width: 100%;\n    min-height: 100%;\n    background: linear-gradient(\n      180deg,\n      rgba(29, 29, 29, 0) 0%,\n      rgba(29, 29, 29, 0.8) 80.79%\n    );\n  }\n\n  & > p {\n    width: 100%;\n    margin-top: 10px;\n    font-weight: 500;\n    font-size: 24px;\n    line-height: 32px;\n    color: ",";\n\n    @media "," {\n      font-weight: 400;\n      font-size: 18px;\n    }\n  }\n\n  @media "," {\n    width: 28vw;\n  }\n\n  @media "," {\n    width: 17vw;\n  }\n"])),(function(n){return n.theme.textColor}),l.U.tablet,l.U.tablet,l.U.laptop),h=s.Z.span(i||(i=(0,u.Z)(["\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 5px;\n  background: rgba(29, 29, 29, 0.5);\n  border-radius: 0px 8px;\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),g=s.Z.div(o||(o=(0,u.Z)(["\n  width: 100%;\n  height: auto;\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n"]))),v=(0,s.Z)(p.Z)(c||(c=(0,u.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.bgElementColor})),m=e(9436),x=e(184),y=function(n){var t=n.movie,e=t.poster_path,r=t.title,a=t.vote_average,i=t.genre_ids,o=null;return i&&(o=function(n){var t=window.localStorage.getItem("moviesGenres"),e=JSON.parse(t),r=null;return e&&n.length>0&&(r=e.find((function(t){return t.id===n[0]})).name),r}(i)),(0,x.jsxs)(f,{children:[(0,x.jsxs)(d,{children:[o&&(0,x.jsx)(h,{children:o}),(0,x.jsx)("img",{src:null!==e?"https://image.tmdb.org/t/p/w400".concat(e):m,alt:r}),(0,x.jsx)(g,{children:a>0&&(0,x.jsx)(v,{name:"read-only",value:a.toFixed(1)/2,readOnly:!0,precision:.5})})]}),(0,x.jsx)("p",{children:r})]})}},8491:function(n,t,e){e.d(t,{Z:function(){return p}});var r,a=e(168),i=e(9958),o=e(6188),c=(0,i.Z)(o.E.div)(r||(r=(0,a.Z)(["\n  width: 100%;\n  border-radius: 5px;\n"]))),u=e(5905),s=e(184),p=function(n){var t=n.children,e=n.delay,r=void 0===e?0:e;return(0,s.jsx)(c,{initial:"closed",animate:"open",variants:(0,u.yr)(r),children:t})}},5153:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a=e(2982),i=e(885),o=e(2791),c=e(3504),u=e(6871),s=e(1933),p=e(9348),l=e(6960),d=e(6188),f=e(7477),h=e(8329),g=e(6048),v=e(2441),m=e(7506),x=e(168),y=e(9958).Z.div(r||(r=(0,x.Z)(["\n  position: absolute;\n  bottom: 500px;\n  right: 0;\n  width: 5px;\n  height: 5px;\n"]))),w=e(5905),Z=e(184),b=function(n){var t=n.category,e=(0,o.useState)([]),r=(0,i.Z)(e,2),x=r[0],b=r[1],k=(0,o.useState)(0),_=(0,i.Z)(k,2),j=_[0],E=_[1],S=(0,u.TH)(),P=(0,p.YD)({threshold:.1}),I=P.ref,U=P.inView,T=(0,s.useInfiniteQuery)(["topRatedMovies",{category:t}],f.sU,{staleTime:6e4,cacheTime:6e4,getNextPageParam:function(n){if(!(n.nextPage>n.totalPages))return n.nextPage}}),C=T.data,V=T.error,O=T.fetchNextPage,K=T.isLoading,M=T.isError,R=T.isSuccess;return(0,o.useEffect)((function(){window.scrollTo({top:0})}),[]),(0,o.useEffect)((function(){0!==x.length&&U&&O()}),[U]),(0,o.useEffect)((function(){R&&(b([].concat((0,a.Z)(x),(0,a.Z)(C.pages[j].results))),E(j+1)),M&&l.Am.error("Error: ".concat(V.response.data.message))}),[C,M,R]),K?(0,Z.jsx)(m.Z,{}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(d.E.div,{initial:"closed",animate:"open",exit:"exit",variants:w.wz,children:[(0,Z.jsx)(v.Z,{path:"/"}),x.length>0&&(0,Z.jsx)(h.Z,{children:x.map((function(n){return(0,Z.jsx)(d.E.li,{initial:"closed",animate:"open",exit:"exit",variants:w.yr,children:(0,Z.jsx)(c.rU,{to:"/movies/".concat(n.id),state:{from:{location:S}},children:(0,Z.jsx)(g.Z,{movie:n})})},n.id)}))})]}),(0,Z.jsx)(y,{ref:I})]})}},8603:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,a,i,o=e(2982),c=e(885),u=e(2791),s=e(1933),p=e(3504),l=e(6871),d=e(9348),f=e(6188),h=e(6960),g=e(7247),v=e(273),m=e(354),x=e(8329),y=e(6048),w=e(8491),Z=e(7506),b=e(168),k=e(9958),_=e(9277),j=(0,k.Z)(f.E.li)(r||(r=(0,b.Z)(["\n  position: relative;\n"]))),E=k.Z.div(a||(a=(0,b.Z)(["\n  position: absolute;\n  bottom: 500px;\n  right: 0;\n  width: 5px;\n  height: 5px;\n"]))),S=(0,k.Z)(_.Z)(i||(i=(0,b.Z)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  color: ",";\n  width: 50px;\n  height: 50px;\n\n  & > svg {\n    width: 30px;\n    height: 30px;\n  }\n"])),(function(n){return n.theme.bgElementColor})),P=e(5905),I=e(184),U=function(n){var t=n.category,e=(0,u.useState)([]),r=(0,c.Z)(e,2),a=r[0],i=r[1],b=(0,u.useState)(0),k=(0,c.Z)(b,2),_=k[0],U=k[1],T=(0,m.Z)("userID",null),C=(0,c.Z)(T,1)[0],V=(0,u.useRef)(10).current,O={NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_LANDING_PAGE_URL,K=(0,l.s0)(),M=(0,l.TH)();C||K("".concat(O));var R=(0,d.YD)({threshold:.1}),q=R.ref,A=R.inView,N=(0,s.useInfiniteQuery)(["getMovies",{userId:C,limit:V,category:t}],v.vw,{enabled:!0,staleTime:6e4,cacheTime:6e4,getNextPageParam:function(n){var t=n.movies,e=n.nextPage;if(t&&!(t.length<10))return e}}),z=N.data,D=N.isError,L=N.isSuccess,H=N.isLoading,F=N.error,W=N.fetchNextPage,B=(0,s.useMutation)((function(n){return(0,v.fx)(n)})),G=B.mutate;(0,u.useEffect)((function(){window.scrollTo({top:0})}),[]),(0,u.useEffect)((function(){0!==a.length&&A&&W()}),[A]),(0,u.useEffect)((function(){L&&(i([].concat((0,o.Z)(a),(0,o.Z)(z.pages[_].movies))),U(_+1)),D&&h.Am.error("Error: ".concat(F.response.data.message))}),[z,D,L]);return H?(0,I.jsx)(Z.Z,{}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(f.E.div,{initial:"closed",animate:"open",exit:"exit",variants:P.wz,children:a.length>0?(0,I.jsx)(x.Z,{children:a.map((function(n){return(0,I.jsxs)(j,{initial:"closed",animate:"open",exit:"exit",variants:P.yr,children:[(0,I.jsx)(S,{onClick:function(t){return function(n,t){"BUTTON"===n.currentTarget.nodeName&&G([C,t],{onSuccess:function(n){var t=n.data,e=a.filter((function(n){return n._id!==t.id}));i((0,o.Z)(e))}})}(t,n._id)},children:(0,I.jsx)(g.Z,{})}),(0,I.jsx)(p.rU,{to:"/movies/".concat(n.idbId),state:{from:{location:M.pathname}},children:(0,I.jsx)(y.Z,{movie:n})})]},n._id)}))}):(0,I.jsx)(w.Z,{children:(0,I.jsx)("h2",{style:{textTransform:"uppercase"},children:"List is empty"})})}),(0,I.jsx)(E,{ref:q})]})}},273:function(n,t,e){e.d(t,{Ad:function(){return h},EV:function(){return v},J8:function(){return x},fx:function(){return d},vw:function(){return p}});var r=e(885),a=e(5861),i=e(4687),o=e.n(i),c=e(4569),u=e.n(c),s="https://nodejs-cinematik-rest-api.onrender.com/";function p(n){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)(o().mark((function n(t){var e,a,i,c,p,l,d,f,h,g,v;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,a=void 0===e?1:e,i=t.queryKey,c=(0,r.Z)(i,2),c[0],p=c[1],l=p.userId,d=p.limit,f=p.category,n.next=4,u().get("".concat(s,"movies/").concat(l,"?page=").concat(a,"&limit=").concat(d,"&category=").concat(f));case 4:return h=n.sent,g=h.data,v=g.data.movies,n.abrupt("return",{movies:v,nextPage:a+1});case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,a.Z)(o().mark((function n(t){var e,a,i,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=(0,r.Z)(t,2),a=e[0],i=e[1],n.next=3,u().delete("".concat(s,"movies/").concat(a,"/").concat(i));case 3:return c=n.sent,n.abrupt("return",null===c||void 0===c?void 0:c.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(o().mark((function n(t){var e,a,i,c,p,l,d;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),a[0],i=a[1],c=i.userId,p=i.id,n.next=4,u().get("".concat(s,"movies/favorites/").concat(c,"/").concat(p));case 4:return l=n.sent,d=l.data,n.abrupt("return",d);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(o().mark((function n(t){var e,a,i,c,p,l,d;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),a[0],i=a[1],c=i.userId,p=i.dataToFetch,n.next=4,u().post("".concat(s,"movies/").concat(c,"?category=favorites"),p);case 4:return l=n.sent,d=l.data,n.abrupt("return",d);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(o().mark((function n(t){var e,a,i,c,p,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),a[0],i=a[1],c=i.userId,p=i.dataToFetch,n.next=4,u().post("".concat(s,"movies/").concat(c,"?category=watched"),p);case 4:return l=n.sent,n.abrupt("return",l.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7477:function(n,t,e){e.d(t,{CO:function(){return g},Cm:function(){return T},TW:function(){return I},_0:function(){return S},f8:function(){return j},gY:function(){return l},hG:function(){return k},lJ:function(){return m},np:function(){return V},qF:function(){return Z},r9:function(){return f},sU:function(){return y}});var r=e(885),a=e(5861),i=e(4687),o=e.n(i),c=e(4569),u=e.n(c),s=e(6960);u().defaults.baseURL="https://api.themoviedb.org/3/";var p="105ba628fde77462ee84526f3393a31c";function l(){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("trending/movie/day?api_key=".concat(p));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("genre/movie/list?api_key=".concat(p,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.genres);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)(o().mark((function n(t){var e,a,i,c,s,l,d,f,h;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,a=void 0===e?1:e,i=t.queryKey,c=(0,r.Z)(i,2),s=c[0],l=c[1].genreId,console.log(s),n.next=5,u().get("discover/movie?api_key=".concat(p,"&with_genres=").concat(l,"&page=").concat(a));case 5:return d=n.sent,f=d.data.results,h=d.data.total_pages,n.abrupt("return",{results:f,nextPage:a+1,totalPages:h});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)(o().mark((function n(){var t,e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Math.floor(500*Math.random())+1,n.next=3,u().get("movie/725201/similar?api_key=".concat(p,"&language=en-US&page=").concat(t));case 3:return e=n.sent,r=e.data.results,n.abrupt("return",{results:r});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)(o().mark((function n(t){var e,a,i,c,s,l,d,f;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,a=void 0===e?1:e,i=t.queryKey,c=(0,r.Z)(i,2),c[0],s=c[1].category,n.next=4,u().get("movie/".concat(s,"?api_key=").concat(p,"&language=en-US&page=").concat(a));case 4:return l=n.sent,d=l.data.results,f=l.data.total_pages,n.abrupt("return",{results:d,nextPage:a+1,totalPages:f});case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(o().mark((function n(t){var e,a,i,c,l,d,f,h,g;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.pageParam,a=void 0===e?1:e,i=t.queryKey,c=(0,r.Z)(i,2),l=c[0],d=c[1].query,console.log("".concat(l)),d){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,u().get("search/movie?api_key=".concat(p,"&language=en-US&query=").concat(d,"&page=").concat(a,"&include_adult=false"));case 7:return f=n.sent,h=f.data.results,g=f.data.total_pages,h.length||s.Am.info("Movies were not found"),n.abrupt("return",{results:h,nextPage:a+1,totalPages:g});case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)(o().mark((function n(t){var e,a,i,c,s,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),i=a[0],c=a[1].movieId,console.log("".concat(i)),n.prev=3,n.next=6,u().get("movie/".concat(c,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function j(n){return E.apply(this,arguments)}function E(){return(E=(0,a.Z)(o().mark((function n(t){var e,a,i,c,s,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),i=a[0],c=a[1].actorId,console.log("".concat(i)),n.prev=3,n.next=6,u().get("person/".concat(c,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return l=n.sent,n.abrupt("return",l);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function S(n){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)(o().mark((function n(t){var e,a,i,c,s,l;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),i=a[0],c=a[1].actorId,console.log("".concat(i)),n.next=5,u().get("person/".concat(c,"/movie_credits?api_key=").concat(p,"&language=en-US"));case 5:return s=n.sent,l=s.data,n.abrupt("return",l);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function I(n){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(o().mark((function n(t){var e,a,i,c,s;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),i=a[0],c=a[1].movieId,console.log("".concat(i)),n.next=5,u().get("movie/".concat(c,"/credits?api_key=").concat(p,"&language=en-US"));case 5:return s=n.sent,n.abrupt("return",s.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function T(n){return C.apply(this,arguments)}function C(){return(C=(0,a.Z)(o().mark((function n(t){var e,a,i,c,s,l,d,f,h;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,a=void 0===e?1:e,i=t.queryKey,c=(0,r.Z)(i,2),s=c[0],l=c[1].movieId,console.log("".concat(s)),n.next=5,u().get("movie/".concat(l,"/reviews?api_key=").concat(p,"&language=en-US&page=1"));case 5:return d=n.sent,f=d.data.results,h=d.data.total_pages,n.abrupt("return",{results:f,nextPage:a+1,totalPages:h});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function V(n){return O.apply(this,arguments)}function O(){return(O=(0,a.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(t,"/videos?api_key=").concat(p,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},7247:function(n,t,e){var r=e(4836);t.Z=void 0;var a=r(e(5649)),i=e(184),o=(0,a.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=o},7317:function(n,t,e){var r=e(4836);t.Z=void 0;var a=r(e(5649)),i=e(184),o=(0,a.default)((0,i.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");t.Z=o},9436:function(n,t,e){n.exports=e.p+"static/media/Error 404 Wallpaper.8abd10198d38772bf2c0.jpg"},9348:function(n,t,e){e.d(t,{YD:function(){return y}});var r=e(885),a=e(5671),i=e(3144),o=e(136),c=e(9388),u=e(2791);function s(){return s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},s.apply(this,arguments)}var p=new Map,l=new WeakMap,d=0,f=void 0;function h(n){return Object.keys(n).sort().filter((function(t){return void 0!==n[t]})).map((function(t){return"".concat(t,"_").concat("root"===t?(e=n.root)?(l.has(e)||(d+=1,l.set(e,d.toString())),l.get(e)):"0":n[t]);var e})).toString()}function g(n){var t=h(n),e=p.get(t);if(!e){var r,a=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var e,i=t.isIntersecting&&r.some((function(n){return t.intersectionRatio>=n}));n.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=i),null==(e=a.get(t.target))||e.forEach((function(n){n(i,t)}))}))}),n);r=i.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),e={id:t,observer:i,elements:a},p.set(t,e)}return e}function v(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:f;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){var a=n.getBoundingClientRect();return t(r,{isIntersecting:r,target:n,intersectionRatio:"number"===typeof e.threshold?e.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),function(){}}var i=g(e),o=i.id,c=i.observer,u=i.elements,s=u.get(n)||[];return u.has(n)||u.set(n,s),s.push(t),c.observe(n),function(){s.splice(s.indexOf(t),1),0===s.length&&(u.delete(n),c.unobserve(n)),0===u.size&&(c.disconnect(),p.delete(o))}}var m=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function x(n){return"function"!==typeof n.children}u.Component;function y(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.threshold,e=n.delay,a=n.trackVisibility,i=n.rootMargin,o=n.root,c=n.triggerOnce,s=n.skip,p=n.initialInView,l=n.fallbackInView,d=n.onChange,f=u.useRef(),h=u.useRef(),g=u.useState({inView:!!p}),m=(0,r.Z)(g,2),x=m[0],y=m[1];h.current=d;var w=u.useCallback((function(n){void 0!==f.current&&(f.current(),f.current=void 0),s||n&&(f.current=v(n,(function(n,t){y({inView:n,entry:t}),h.current&&h.current(n,t),t.isIntersecting&&c&&f.current&&(f.current(),f.current=void 0)}),{root:o,rootMargin:i,threshold:t,trackVisibility:a,delay:e},l))}),[Array.isArray(t)?t.toString():t,o,i,c,s,a,l,e]);u.useEffect((function(){f.current||!x.entry||c||s||y({inView:!!p})}));var Z=[w,x.inView,x.entry];return Z.ref=Z[0],Z.inView=Z[1],Z.entry=Z[2],Z}}}]);
//# sourceMappingURL=CategoryMoviesPage.93c765ff.chunk.js.map