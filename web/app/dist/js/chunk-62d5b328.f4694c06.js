(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62d5b328"],{"08d5":function(t,e,r){},"0a49":function(t,e,r){var n=r("9b43"),s=r("626a"),i=r("4bf8"),a=r("9def"),c=r("cd1c");t.exports=function(t,e){var r=1==t,o=2==t,u=3==t,f=4==t,d=6==t,p=5==t||d,v=e||c;return function(e,c,l){for(var b,h,g=i(e),k=s(g),_=n(c,l,3),y=a(k.length),w=0,A=r?v(e,y):o?v(e,0):void 0;y>w;w++)if((p||w in k)&&(b=k[w],h=_(b,w,g),t))if(r)A[w]=h;else if(h)switch(t){case 3:return!0;case 5:return b;case 6:return w;case 2:A.push(b)}else if(f)return!1;return d?-1:u||f?f:A}}},1169:function(t,e,r){var n=r("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"1af6":function(t,e,r){var n=r("63b6");n(n.S,"Array",{isArray:r("9003")})},"20fd":function(t,e,r){"use strict";var n=r("d9f6"),s=r("aebd");t.exports=function(t,e,r){e in t?n.f(t,e,s(0,r)):t[e]=r}},"549b":function(t,e,r){"use strict";var n=r("d864"),s=r("63b6"),i=r("241e"),a=r("b0dc"),c=r("3702"),o=r("b447"),u=r("20fd"),f=r("7cd6");s(s.S+s.F*!r("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,s,d,p=i(t),v="function"==typeof this?this:Array,l=arguments.length,b=l>1?arguments[1]:void 0,h=void 0!==b,g=0,k=f(p);if(h&&(b=n(b,l>2?arguments[2]:void 0,2)),void 0==k||v==Array&&c(k))for(e=o(p.length),r=new v(e);e>g;g++)u(r,g,h?b(p[g],g):p[g]);else for(d=k.call(p),r=new v;!(s=d.next()).done;g++)u(r,g,h?a(d,b,[s.value,g],!0):s.value);return r.length=g,r}})},"54a1":function(t,e,r){r("6c1c"),r("1654"),t.exports=r("95d5")},7514:function(t,e,r){"use strict";var n=r("5ca1"),s=r("0a49")(5),i="find",a=!0;i in[]&&Array(1)[i](function(){a=!1}),n(n.P+n.F*a,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(i)},"75fc":function(t,e,r){"use strict";var n=r("a745"),s=r.n(n);function i(t){if(s()(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}var a=r("774e"),c=r.n(a),o=r("c8bb"),u=r.n(o);function f(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return c()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){return i(t)||f(t)||d()}r.d(e,"a",function(){return p})},"774e":function(t,e,r){t.exports=r("d2d5")},"95d5":function(t,e,r){var n=r("40c3"),s=r("5168")("iterator"),i=r("481b");t.exports=r("584a").isIterable=function(t){var e=Object(t);return void 0!==e[s]||"@@iterator"in e||i.hasOwnProperty(n(e))}},a745:function(t,e,r){t.exports=r("f410")},b19a:function(t,e,r){"use strict";var n=r("08d5"),s=r.n(n);s.a},c8bb:function(t,e,r){t.exports=r("54a1")},ccfe:function(t,e,r){t.exports=r.p+"img/back.c7710d1f.svg"},cd1c:function(t,e,r){var n=r("e853");t.exports=function(t,e){return new(n(t))(e)}},d2d5:function(t,e,r){r("1654"),r("549b"),t.exports=r("584a").Array.from},d795:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page page-session"},[n("div",{staticClass:"back-button-wrapper"},[n("a",{staticClass:"back",on:{click:function(e){return t.$router.go(-1)}}},[n("img",{attrs:{src:r("ccfe"),alt:""}}),t._v(" Back\n    ")])]),n("div",{staticClass:"page-content"},[t._v(t._s(t.speaker))]),t.speaker?n("div",{staticClass:"page-content"},[n("div",{staticClass:"session-title"},[t._v(t._s(t.speaker.fullName))]),t.speakers?n("div",{staticClass:"speakers-wrapper"},[n("div",{staticClass:"speaker-wrapper"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.speaker.profilePicture,alt:""}})])])]):t._e(),n("div",{staticClass:"descriptions-row"},[t.speaker.tagLine?n("div",{staticClass:"des-wrap"},[n("p",[t._v(t._s(t.speaker.tagLine))])]):t._e()]),n("div",{staticClass:"description-text"},[n("p",[t._v(t._s(t.speaker.bio))])]),t._m(0),t._m(1)]):n("div",{staticClass:"page-content"},[t._v("finding speaker details..")])])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"descriptions-row"},[r("div",{staticClass:"des-wrap"},[r("p",[t._v("Speaking about :")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"session-title"},[r("a",{attrs:{href:"#"}},[t._v("To be revealed soon... !")])])}],i=r("75fc"),a=(r("7514"),r("cebc")),c=(r("cadf"),r("551c"),r("f751"),r("097d"),r("2f62")),o=r("c0d6"),u={methods:Object(a["a"])({},Object(c["b"])([o["a"],o["b"]])),computed:Object(a["a"])({},Object(c["c"])({sessions:"getSessions",speakers:"getSpeakers"}),{id:function(){return this.$route.params.id},speaker:function(){var t=this;0===this.speakers.length&&this.FETCH_SPEAKERS();var e=this.speakers.find(function(e){return e.id===t.id});return e},session:function(){var t=this,e=this.sessions.map(function(t){return t.sessions}).reduce(function(t,e){return[].concat(Object(i["a"])(t),Object(i["a"])(e))},[]),r=e.find(function(e){return e.id=t.id});return r}}),beforeMount:function(){0===this.$store.state.sessions.length&&(this.FETCH_SPEAKERS(),this.FETCH_SESSIONS())}},f=u,d=(r("b19a"),r("2877")),p=Object(d["a"])(f,n,s,!1,null,"f41b09b2",null);e["default"]=p.exports},e853:function(t,e,r){var n=r("d3f4"),s=r("1169"),i=r("2b4c")("species");t.exports=function(t){var e;return s(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)||(e=void 0),n(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},f410:function(t,e,r){r("1af6"),t.exports=r("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-62d5b328.f4694c06.js.map