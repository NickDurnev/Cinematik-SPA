(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[277],{6068:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return j}});var r,a,u,c,o=e(1933),i=e(3504),s=e(6871),p=e(6960),f=e(6580),l=e(2843),d=e(7477),h=e(9436),v=e(168),g=e(9958),m=e(7608),y=g.Z.div(r||(r=(0,v.Z)(["\n  width: calc((85vw) / 2.4);\n  margin: 10px;\n  background-color: ",";\n  border-radius: 5px;\n  & > img {\n    width: 100%;\n    height: auto;\n  }\n  & > div {\n    min-height: 100px;\n    padding: 5px;\n    color: ",";\n  }\n\n  @media "," {\n    width: calc((90vw) / 5);\n  }\n\n  @media "," {\n    width: calc((95vw) / 7);\n  }\n"])),(function(n){return n.theme.bgCastCard}),(function(n){return n.theme.textColor}),m.U.tablet,m.U.laptop),x=g.Z.p(a||(a=(0,v.Z)(["\n  padding-top: 10px;\n  font-style: italic;\n  margin-bottom: 5px;\n"]))),w=g.Z.p(u||(u=(0,v.Z)(["\n  font-size: 18px;\n  font-weight: 500;\n"]))),Z=e(184),b=function(n){var t=n.data,e=t.character,r=t.name,a=t.profile_path;return(0,Z.jsxs)(y,{children:[(0,Z.jsx)("img",{src:null!==a?"https://image.tmdb.org/t/p/w300".concat(a):h,alt:r}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(x,{children:e}),(0,Z.jsx)(w,{children:r})]})]})},_=e(8491),k=g.Z.ul(c||(c=(0,v.Z)(["\n  width: 85vw;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n\n  @media "," {\n    width: 100%;\n  }\n"])),m.U.tablet),j=function(){var n=(0,s.UO)().movieId,t=(0,s.TH)(),e=t.pathname,r=(0,o.useQuery)(["movieCast",{movieId:n}],d.TW,{staleTime:6e4,cacheTime:6e4}),a=r.data,u=r.error,c=r.isLoading,h=r.isError,v=r.isSuccess;return c?(0,Z.jsx)(l.Z,{}):h?p.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(u.message)):v?(console.log(a.cast),0===a.cast.length?(0,Z.jsxs)(_.Z,{children:[(0,Z.jsx)("h2",{children:"We don't have info about cast for this movie"}),(0,Z.jsx)(f.Z,{sx:{fontSize:70,mt:1}})]}):(0,Z.jsx)(k,{children:a.cast.map((function(n){var r=n.id,a=n.cast_id;return(0,Z.jsx)("li",{children:(0,Z.jsx)(i.rU,{to:"".concat(e,"/actor/").concat(r),state:{from:{location:t,label:"Go back to movie"}},children:(0,Z.jsx)(b,{data:n})})},a)}))})):void 0}},8491:function(n,t,e){"use strict";e.d(t,{Z:function(){return p}});var r,a=e(168),u=e(9958),c=e(6188),o=(0,u.Z)(c.E.div)(r||(r=(0,a.Z)(["\n  width: 100%;\n  border-radius: 5px;\n"]))),i=e(5905),s=e(184),p=function(n){var t=n.children,e=n.delay,r=void 0===e?0:e;return(0,s.jsx)(o,{initial:"closed",animate:"open",variants:(0,i.yr)(r),children:t})}},7477:function(n,t,e){"use strict";e.d(t,{CO:function(){return v},Cm:function(){return q},TW:function(){return S},_0:function(){return C},f8:function(){return j},gY:function(){return f},hG:function(){return _},lJ:function(){return m},np:function(){return E},qF:function(){return Z},r9:function(){return d},sU:function(){return x}});var r=e(885),a=e(5861),u=e(4687),c=e.n(u),o=e(4569),i=e.n(o),s=e(6960);i().defaults.baseURL="https://api.themoviedb.org/3/";var p="105ba628fde77462ee84526f3393a31c";function f(){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("trending/movie/day?api_key=".concat(p));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("genre/movie/list?api_key=".concat(p,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.genres);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)(c().mark((function n(t){var e,a,u,o,s,f,l,d,h;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,a=void 0===e?1:e,u=t.queryKey,o=(0,r.Z)(u,2),s=o[0],f=o[1].genreId,console.log(s),n.next=5,i().get("discover/movie?api_key=".concat(p,"&with_genres=").concat(f,"&page=").concat(a));case 5:return l=n.sent,d=l.data.results,h=l.data.total_pages,n.abrupt("return",{results:d,nextPage:a+1,totalPages:h});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(){return y.apply(this,arguments)}function y(){return(y=(0,a.Z)(c().mark((function n(){var t,e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Math.floor(500*Math.random())+1,n.next=3,i().get("movie/725201/similar?api_key=".concat(p,"&language=en-US&page=").concat(t));case 3:return e=n.sent,r=e.data.results,n.abrupt("return",{results:r});case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)(c().mark((function n(t){var e,a,u,o,s,f,l,d;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,a=void 0===e?1:e,u=t.queryKey,o=(0,r.Z)(u,2),o[0],s=o[1].category,n.next=4,i().get("movie/".concat(s,"?api_key=").concat(p,"&language=en-US&page=").concat(a));case 4:return f=n.sent,l=f.data.results,d=f.data.total_pages,n.abrupt("return",{results:l,nextPage:a+1,totalPages:d});case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)(c().mark((function n(t){var e,a,u,o,f,l,d,h,v;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.pageParam,a=void 0===e?1:e,u=t.queryKey,o=(0,r.Z)(u,2),f=o[0],l=o[1].query,console.log("".concat(f)),l){n.next=5;break}return n.abrupt("return");case 5:return n.next=7,i().get("search/movie?api_key=".concat(p,"&language=en-US&query=").concat(l,"&page=").concat(a,"&include_adult=false"));case 7:return d=n.sent,h=d.data.results,v=d.data.total_pages,h.length||s.Am.info("Movies were not found"),n.abrupt("return",{results:h,nextPage:a+1,totalPages:v});case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(n){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)(c().mark((function n(t){var e,a,u,o,s,f;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),u=a[0],o=a[1].movieId,console.log("".concat(u)),n.prev=3,n.next=6,i().get("movie/".concat(o,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return f=n.sent,n.abrupt("return",f);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function j(n){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(c().mark((function n(t){var e,a,u,o,s,f;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),u=a[0],o=a[1].actorId,console.log("".concat(u)),n.prev=3,n.next=6,i().get("person/".concat(o,"?api_key=").concat(p,"&language=en-US"));case 6:return s=n.sent,n.next=9,s.data;case 9:return f=n.sent,n.abrupt("return",f);case 13:return n.prev=13,n.t0=n.catch(3),n.abrupt("return",n.t0.response.status);case 16:case"end":return n.stop()}}),n,null,[[3,13]])})))).apply(this,arguments)}function C(n){return P.apply(this,arguments)}function P(){return(P=(0,a.Z)(c().mark((function n(t){var e,a,u,o,s,f;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),u=a[0],o=a[1].actorId,console.log("".concat(u)),n.next=5,i().get("person/".concat(o,"/movie_credits?api_key=").concat(p,"&language=en-US"));case 5:return s=n.sent,f=s.data,n.abrupt("return",f);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function S(n){return I.apply(this,arguments)}function I(){return(I=(0,a.Z)(c().mark((function n(t){var e,a,u,o,s;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.queryKey,a=(0,r.Z)(e,2),u=a[0],o=a[1].movieId,console.log("".concat(u)),n.next=5,i().get("movie/".concat(o,"/credits?api_key=").concat(p,"&language=en-US"));case 5:return s=n.sent,n.abrupt("return",s.data);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function q(n){return T.apply(this,arguments)}function T(){return(T=(0,a.Z)(c().mark((function n(t){var e,a,u,o,s,f,l,d,h;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.pageParam,a=void 0===e?1:e,u=t.queryKey,o=(0,r.Z)(u,2),s=o[0],f=o[1].movieId,console.log("".concat(s)),n.next=5,i().get("movie/".concat(f,"/reviews?api_key=").concat(p,"&language=en-US&page=1"));case 5:return l=n.sent,d=l.data.results,h=l.data.total_pages,n.abrupt("return",{results:d,nextPage:a+1,totalPages:h});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function E(n){return M.apply(this,arguments)}function M(){return(M=(0,a.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(t,"/videos?api_key=").concat(p,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},6580:function(n,t,e){"use strict";var r=e(4836);t.Z=void 0;var a=r(e(5649)),u=e(184),c=(0,a.default)([(0,u.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,u.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,u.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5z"},"2")],"SentimentVeryDissatisfied");t.Z=c},5649:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=e(8242)},8242:function(n,t,e){"use strict";e.r(t),e.d(t,{capitalize:function(){return a.Z},createChainedFunction:function(){return u},createSvgIcon:function(){return c.Z},debounce:function(){return o},deprecatedPropType:function(){return i},isMuiElement:function(){return p},ownerDocument:function(){return f},ownerWindow:function(){return l},requirePropFactory:function(){return d},setRef:function(){return h},unstable_ClassNameGenerator:function(){return b},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return g.Z},unsupportedProp:function(){return m},useControlled:function(){return y.Z},useEventCallback:function(){return x.Z},useForkRef:function(){return w.Z},useIsFocusVisible:function(){return Z.Z}});var r=e(5902),a=e(4036);var u=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.reduce((function(n,t){return null==t?n:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];n.apply(this,r),t.apply(this,r)}}),(function(){}))},c=e(9201),o=e(3981).Z;var i=function(n,t){return function(){return null}},s=e(2791);var p=function(n,t){return s.isValidElement(n)&&-1!==t.indexOf(n.type.muiName)},f=e(9723).Z,l=e(7979).Z;e(7462);var d=function(n,t){return function(){return null}},h=e(2971).Z,v=e(162),g=e(5836);var m=function(n,t,e,r,a){return null},y=e(8744),x=e(6868),w=e(2071),Z=e(3031),b={configure:function(n){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(n)}}},162:function(n,t,e){"use strict";var r=e(5721);t.Z=r.Z},6868:function(n,t,e){"use strict";e.d(t,{Z:function(){return u}});var r=e(2791),a=e(5721);var u=function(n){var t=r.useRef(n);return(0,a.Z)((function(){t.current=n})),r.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}},3981:function(n,t,e){"use strict";function r(n){var t,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];var o=function(){n.apply(r,u)};clearTimeout(t),t=setTimeout(o,e)}return r.clear=function(){clearTimeout(t)},r}e.d(t,{Z:function(){return r}})},9723:function(n,t,e){"use strict";function r(n){return n&&n.ownerDocument||document}e.d(t,{Z:function(){return r}})},7979:function(n,t,e){"use strict";e.d(t,{Z:function(){return a}});var r=e(9723);function a(n){return(0,r.Z)(n).defaultView||window}},5721:function(n,t,e){"use strict";var r=e(2791),a="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;t.Z=a},9436:function(n,t,e){"use strict";n.exports=e.p+"static/media/Error 404 Wallpaper.8abd10198d38772bf2c0.jpg"},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=cast.47f7bf12.chunk.js.map