"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,a,c,u=t(885),s=t(791),o=t(689),i=t(409),p=t(168),l=t(444),f=l.ZP.div(r||(r=(0,p.Z)(["\n  padding: 0 15px;\n  margin-bottom: 30px;\n"]))),h=l.ZP.ul(a||(a=(0,p.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),v=l.ZP.li(c||(c=(0,p.Z)(["\n  padding: 0;\n"]))),d=t(184);function g(){var n=(0,s.useState)([]),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,o.UO)().movieId;return(0,s.useEffect)((function(){(0,i.dv)(a).then((function(n){return r(n)}))}),[a]),(0,d.jsx)(f,{children:(0,d.jsx)(h,{children:t.length>0?t.map((function(n){return(0,d.jsxs)(v,{children:[(0,d.jsxs)("h3",{children:["Author: ",n.author]}),(0,d.jsx)("p",{children:n.content})]},n.id)})):(0,d.jsx)("h3",{children:"We do not have any rewiwews for this movies"})})})}},409:function(n,e,t){t.d(e,{EI:function(){return l},L7:function(){return d},SY:function(){return h},XD:function(){return i},dv:function(){return m}});var r=t(861),a=t(757),c=t.n(a),u=t(44),s="a68afe173cef30a4b341939976fb5342",o="https://api.themoviedb.org/3";function i(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("".concat(o,"/search/movie/"),{params:{api_key:s,language:"en-US",page:1,include_adult:!1,query:e}});case 3:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function l(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("".concat(o,"/trending/movie/day"),{params:{api_key:s}});case 3:return e=n.sent,t=e.data.results,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("".concat(o,"/movie/").concat(e),{params:{api_key:s,language:"en-US"}});case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function d(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("".concat(o,"/movie/").concat(e,"/credits"),{params:{api_key:s,language:"en-US"}});case 3:return t=n.sent,r=t.data.cast,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}function m(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.ZP.get("".concat(o,"/movie/").concat(e,"/reviews"),{params:{api_key:s,language:"en-US",page:1}});case 3:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=387.983f5062.chunk.js.map