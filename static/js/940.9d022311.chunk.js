/*! For license information please see 940.9d022311.chunk.js.LICENSE.txt */
(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[940],{2554:function(e,t,n){"use strict";var r;n.d(t,{F4:function(){return l},iv:function(){return f},xB:function(){return a}});var o=n(2791),u=(n(76),n(7057)),i=(n(2110),n(5438)),c=n(1346),s=(r||(r=n.t(o,2))).useInsertionEffect?(r||(r=n.t(o,2))).useInsertionEffect:o.useLayoutEffect,a=(0,u.w)((function(e,t){var n=e.styles,r=(0,c.O)([n],void 0,(0,o.useContext)(u.T)),a=(0,o.useRef)();return s((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,u=document.querySelector('style[data-emotion="'+e+" "+r.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==u&&(o=!0,u.setAttribute("data-emotion",e),n.hydrate([u])),a.current=[n,o],function(){n.flush()}}),[t]),s((function(){var e=a.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==r.next&&(0,i.My)(t,r.next,!0),n.tags.length){var o=n.tags[n.tags.length-1].nextElementSibling;n.before=o,n.flush()}t.insert("",r,n,!1)}}),[t,r.name]),null}));function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,c.O)(t)}var l=function(){var e=f.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(8242)},8242:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return u},createSvgIcon:function(){return i.Z},debounce:function(){return c},deprecatedPropType:function(){return s},isMuiElement:function(){return f},ownerDocument:function(){return l},ownerWindow:function(){return p},requirePropFactory:function(){return y},setRef:function(){return m},unstable_ClassNameGenerator:function(){return $},unstable_useEnhancedEffect:function(){return d.Z},unstable_useId:function(){return v.Z},unsupportedProp:function(){return b},useControlled:function(){return h.Z},useEventCallback:function(){return g.Z},useForkRef:function(){return S.Z},useIsFocusVisible:function(){return w.Z}});var r=n(5902),o=n(4036);var u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),(function(){}))},i=n(9201),c=n(3981).Z;var s=function(e,t){return function(){return null}},a=n(2791);var f=function(e,t){return a.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)},l=n(9723).Z,p=n(7979).Z;n(7462);var y=function(e,t){return function(){return null}},m=n(2971).Z,d=n(162),v=n(5836);var b=function(e,t,n,r,o){return null},h=n(8744),g=n(6868),S=n(2071),w=n(3031),$={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}},162:function(e,t,n){"use strict";var r=n(5721);t.Z=r.Z},6868:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2791),o=n(5721);var u=function(e){var t=r.useRef(e);return(0,o.Z)((function(){t.current=e})),r.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}},3981:function(e,t,n){"use strict";function r(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=this,o=arguments.length,u=new Array(o),i=0;i<o;i++)u[i]=arguments[i];var c=function(){e.apply(r,u)};clearTimeout(t),t=setTimeout(c,n)}return r.clear=function(){clearTimeout(t)},r}n.d(t,{Z:function(){return r}})},9723:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,{Z:function(){return r}})},7979:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(9723);function o(e){return(0,r.Z)(e).defaultView||window}},5721:function(e,t,n){"use strict";var r=n(2791),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;t.Z=o},2110:function(e,t,n){"use strict";var r=n(8309),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return r.isMemo(e)?i:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=i;var a=Object.defineProperty,f=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,y=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(m){var o=y(n);o&&o!==m&&e(t,o,r)}var i=f(n);l&&(i=i.concat(l(n)));for(var c=s(t),d=s(n),v=0;v<i.length;++v){var b=i[v];if(!u[b]&&(!r||!r[b])&&(!d||!d[b])&&(!c||!c[b])){var h=p(n,b);try{a(t,b,h)}catch(g){}}}}return t}},746:function(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,u=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,a=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,l=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,d=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,b=n?Symbol.for("react.block"):60121,h=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,S=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case f:case l:case u:case c:case i:case y:return e;default:switch(e=e&&e.$$typeof){case a:case p:case v:case d:case s:return e;default:return t}}case o:return t}}}function $(e){return w(e)===l}t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=a,t.ContextProvider=s,t.Element=r,t.ForwardRef=p,t.Fragment=u,t.Lazy=v,t.Memo=d,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=y,t.isAsyncMode=function(e){return $(e)||w(e)===f},t.isConcurrentMode=$,t.isContextConsumer=function(e){return w(e)===a},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===p},t.isFragment=function(e){return w(e)===u},t.isLazy=function(e){return w(e)===v},t.isMemo=function(e){return w(e)===d},t.isPortal=function(e){return w(e)===o},t.isProfiler=function(e){return w(e)===c},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===y},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===u||e===l||e===c||e===i||e===y||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===d||e.$$typeof===s||e.$$typeof===a||e.$$typeof===p||e.$$typeof===h||e.$$typeof===g||e.$$typeof===S||e.$$typeof===b)},t.typeOf=w},8309:function(e,t,n){"use strict";e.exports=n(746)},4836:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=940.9d022311.chunk.js.map