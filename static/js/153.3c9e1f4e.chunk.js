"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[153],{153:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=n(439),a=n(791),c=n(689),s=n(87),o=n(243),i="MovieDetails_detailsContainer__tjPxh",u="MovieDetails_poster__qocuc",v="MovieDetails_movieInfo__-+mGz",f="MovieDetails_links__SnRgP",l="MovieDetails_goBackButton__59dKq",p=n(184),d=function(){var t,e,n=(0,c.UO)().movieId,d=(0,a.useState)(null),h=(0,r.Z)(d,2),m=h[0],_=h[1],x=(0,c.s0)(),w=(0,c.TH)();if(console.log(w),(0,a.useEffect)((function(){(0,o.TP)(n).then(_).catch(console.error)}),[n]),!m)return(0,p.jsx)("div",{children:"Loading..."});return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{className:l,onClick:function(){var t;x((null===(t=w.state)||void 0===t?void 0:t.from)||"/movies")},children:"Go Back"}),(0,p.jsxs)("div",{className:i,children:[(0,p.jsx)("img",{src:m.poster_path?"https://image.tmdb.org/t/p/w500/".concat(m.poster_path):"https://via.placeholder.com/500x750?text=No+Image",alt:m.title,className:u}),(0,p.jsxs)("div",{className:v,children:[(0,p.jsx)("h1",{children:m.title}),(0,p.jsx)("p",{children:m.overview}),(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)(s.rU,{to:"cast",state:{from:null===(t=w.state)||void 0===t?void 0:t.from},children:"Cast"}),(0,p.jsx)(s.rU,{to:"reviews",state:{from:null===(e=w.state)||void 0===e?void 0:e.from},children:"Reviews"})]})]})]}),(0,p.jsx)(c.j3,{})]})}},243:function(t,e,n){n.d(e,{Df:function(){return u},TP:function(){return f},tx:function(){return p},z1:function(){return v},zv:function(){return l}});var r=n(861),a=n(757),c=n.n(a),s=n(759),o="https://api.themoviedb.org/3",i="686954a6867702e2802dd31dcf4680f7",u=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=153.3c9e1f4e.chunk.js.map