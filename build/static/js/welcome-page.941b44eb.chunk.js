"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[94],{8491:function(e,n,r){r.d(n,{Z:function(){return d}});var t,a=r(168),i=r(9958),s=r(6188),o=(0,i.Z)(s.E.div)(t||(t=(0,a.Z)(["\n  width: 100%;\n  border-radius: 5px;\n"]))),c=r(5905),u=r(184),d=function(e){var n=e.children,r=e.delay,t=void 0===r?0:r;return(0,u.jsx)(o,{initial:"closed",animate:"open",variants:(0,c.yr)(t),children:n})}},8403:function(e,n,r){r.r(n),r.d(n,{default:function(){return _}});var t=r(885),a=r(2791),i=r(1933),s=r(6871),o=r(6960),c=r(6188),u=r(5861),d=r(4687),l=r.n(d),p=r(4569),h=r.n(p);function f(e){return v.apply(this,arguments)}function v(){return(v=(0,u.Z)(l().mark((function e(n){var r,a,i,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.queryKey,a=(0,t.Z)(r,2),a[0],i=a[1].userID,e.next=4,h().get("users/".concat(i));case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}h().defaults.baseURL="https://nodejs-cinematik-rest-api.onrender.com/";var g,m=r(354),w=r(5905),x=r(8491),b=r(168),y=r(9958),Z=r(5618),k=y.Z.div(g||(g=(0,b.Z)(["\n  background: linear-gradient(\n      180deg,\n      rgba(0, 0, 0, 0) 0%,\n      rgba(0, 0, 0, 0.9) 100%\n    ),\n    url(",");\n  width: 100vw;\n  height: auto;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n\n  & > div {\n    width: 97vw;\n    height: 100vh;\n    padding: 30vh 20vw;\n  }\n\n  & div {\n    text-transform: capitalize;\n    font-size: 80px;\n    font-weight: 700;\n  }\n"])),Z),j=r(184),_=function(){var e=(0,a.useState)("User"),n=(0,t.Z)(e,2),r=n[0],u=n[1],d=(0,m.Z)("userID",null),l=(0,t.Z)(d,2)[1],p=(0,s.s0)(),h=(0,s.UO)().userID,v=(0,i.useQuery)(["getUser",{userID:h}],f,{refetchInterval:1e4}),g=v.data,b=v.isError,y=v.isSuccess,Z=v.error;return(0,a.useEffect)((function(){y&&(l(g.data.user._id),u(g.data.user.name),setTimeout((function(){p("/")}),4e3)),b&&o.Am.error("Error: ".concat(Z.response.data.message))}),[g,b,y]),(0,j.jsx)(c.E.div,{initial:"closed",animate:"open",exit:"exit",variants:w.wz,children:(0,j.jsx)(k,{children:(0,j.jsxs)("div",{children:[(0,j.jsxs)(x.Z,{children:["Welcome, ",r]}),(0,j.jsx)(x.Z,{delay:1,children:"You look lonely"}),(0,j.jsx)(x.Z,{delay:2,children:"Enjoy your cinema journey"})]})})})}},5618:function(e,n,r){e.exports=r.p+"static/media/welcomepage_wallpaper_desktop.f1f89a43feb4cb7b14c6.jpg"}}]);
//# sourceMappingURL=welcome-page.941b44eb.chunk.js.map