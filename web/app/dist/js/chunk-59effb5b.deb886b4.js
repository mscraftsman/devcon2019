(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59effb5b"],{"0a49":function(s,t,a){var e=a("9b43"),i=a("626a"),n=a("4bf8"),r=a("9def"),o=a("cd1c");s.exports=function(s,t){var a=1==s,c=2==s,v=3==s,l=4==s,u=6==s,d=5==s||u,p=t||o;return function(t,o,m){for(var _,f,C=n(t),g=i(C),M=e(o,m,3),P=r(g.length),b=0,S=a?p(t,P):c?p(t,0):void 0;P>b;b++)if((d||b in g)&&(_=g[b],f=M(_,b,C),s))if(a)S[b]=f;else if(f)switch(s){case 3:return!0;case 5:return _;case 6:return b;case 2:S.push(_)}else if(l)return!1;return u?-1:v||l?l:S}}},1169:function(s,t,a){var e=a("2d95");s.exports=Array.isArray||function(s){return"Array"==e(s)}},1954:function(s,t,a){"use strict";var e=a("334e"),i=a.n(e);i.a},"334e":function(s,t,a){},3492:function(s,t,a){},"3cd0":function(s,t,a){},"4ed2":function(s,t,a){"use strict";var e=a("3cd0"),i=a.n(e);i.a},7514:function(s,t,a){"use strict";var e=a("5ca1"),i=a("0a49")(5),n="find",r=!0;n in[]&&Array(1)[n](function(){r=!1}),e(e.P+e.F*r,"Array",{find:function(s){return i(this,s,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(n)},a54e:function(s,t,a){"use strict";var e=a("3492"),i=a.n(e);i.a},ac5d:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h1",{staticClass:"mega-rainbow"},[s._v("Sessions")]),""==s.sessions?a("div",{staticClass:"loader"},[a("svg",{attrs:{width:"135",height:"135",viewBox:"0 0 135 135",xmlns:"http://www.w3.org/2000/svg",fill:"#fff"}},[a("path",{attrs:{d:"M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 67 67",to:"-360 67 67",dur:"2.5s",repeatCount:"indefinite"}})],1),a("path",{attrs:{d:"M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z"}},[a("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 67 67",to:"360 67 67",dur:"8s",repeatCount:"indefinite"}})],1)])]):s._e(),a("div",{staticClass:"page-all-sessions"},[a("div",{staticClass:"tabs-wrapper"},[a("div",{staticClass:"tabs-container"},[a("div",{staticClass:"right-wrapper"},s._l(s.sessions,function(t){return a("div",{key:t.groupId,staticClass:"tab-items",class:{active:s.getDay(t.groupName)===s.active},attrs:{label:s.getDay(t.groupName)},on:{click:function(a){s.setActive(t.groupName)}}},[a("div",{staticClass:"tab-label"},[s._v(s._s(s.getDay(t.groupName)))])])}),0)])]),a("div",{staticClass:"scroll-wrapper"},[a("div",{staticClass:"tabs-content"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},s._l(s.sessions,function(t,e,i){return s.getDay(t.groupName)===s.active?a("div",{key:t.groupId,ref:"content",refInFor:!0,staticClass:"tabs-panel-content"},[a("div",{staticClass:"room-container no-responsive"},[a("div",{staticClass:"time-bar"},[a("div",{staticClass:"time-value"},[s._v(" ")]),a("div",{staticClass:"time-value"},[s._v("\n                  8:00\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  8:30\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  9:00\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  9:30\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  10:00\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  10:30\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  11:00\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  11:30\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  12:00\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  12:30\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  1:00\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  1:30\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  2:00\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  2:30\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  3:00\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  3:30\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  4:00\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  4:30\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  5:00\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  5:30\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  6:00\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"})]),s._l(s.rooms,function(t){return a("div",{key:"room_"+t.className,class:"session-panes room-wrapper  "+t.className},[a("div",{class:"room-wrapper "+t.className},[a("div",{staticClass:"room-title"},[s._v(s._s(t.label))]),s._l(s.getSessionsFor(e,t.label),function(e){return a("router-link",{key:t+e.id,staticClass:"session-card-wrapper",style:{gridRow:s.timeToText(e.startsAt)+" / span 2"},attrs:{to:{name:"session",params:{id:e.id}}},nativeOn:{click:function(t){s.setScrollPosition()}}},[a("session-card",{attrs:{session:e}})],1)})],2)])})],2),a("div",{staticClass:"slider-responsive"},[a("div",{staticClass:"time-bar"},[a("div",{staticClass:"time-value"},[s._v(" ")]),a("div",{staticClass:"time-value"},[s._v("\n                  8:00\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  8:30\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  9:00\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  9:30\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  10:00\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  10:30\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  11:00\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  11:30\n                  "),a("span",[s._v("AM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  12:00\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  12:30\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  1:00\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  1:30\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  2:00\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  2:30\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  3:00\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  3:30\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  4:00\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  4:30\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  5:00\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  5:30\n                  "),a("span",[s._v("PM")])]),a("div",{staticClass:"time-value"},[s._v("\n                  6:00\n                  "),a("span",[s._v("PM")])])]),a("carousel",{attrs:{"per-page":1,loop:!0,autoplayTimeout:3e3,paginationActiveColor:"#ff4932",autoplayHoverPause:!0,"mouse-drag":!1,navigationEnabled:!0,paginationColor:"#fff",paginationPadding:5,paginationSize:20,centerMode:!0,navigationNextLabel:"›",navigationPrevLabel:"‹"}},s._l(s.rooms,function(t){return a("slide",{key:"room_"+t.className,class:"session-panes room-wrapper  "+t.className},[a("div",{class:"room-wrapper "+t.className},[a("div",{staticClass:"room-title"},[s._v(s._s(t.label))]),s._l(s.getSessionsFor(e,t.label),function(e){return a("router-link",{key:t+e.id,staticClass:"session-card-wrapper",style:{gridRow:s.timeToText(e.startsAt)+" / span 2"},attrs:{to:{name:"session",params:{id:e.id}}},nativeOn:{click:function(t){s.setScrollPosition()}}},[a("session-card",{attrs:{session:e}})],1)})],2)])}),1)],1)]):s._e()}),0)],1)])])])},i=[],n=(a("28a5"),a("cebc")),r=a("2f62"),o=a("ce96"),c=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"session-card",class:s.isWorkshop?"workshop":""},[a("div",{staticClass:"session-title"},[s._v(s._s(s._f("truncate")(s.session.title,80,"...")))]),a("div",{staticClass:"session-description"},[s._v(s._s(s._f("truncate")(s.session.description,120,"...")))]),s.session.speakers.length>0?a("div",{staticClass:"session-author"},[a("div",{staticClass:"name-wrapper"},[a("span",{staticClass:"name"},[s._v(s._s(s.session.speakers[0].name))]),a("br")]),a("div",{staticClass:"speaker-photo-wrapper"},[a("div",{staticClass:"skewer"},[a("img",{attrs:{src:s.getSpeakerPhoto(s.session.speakers[0].id),alt:""}})])])]):s._e()])},v=[],l=(a("7514"),{props:["session"],mounted:function(){},computed:Object(n["a"])({},Object(r["c"])({sessions:"getSessions",speakers:"getSpeakers",speakersById:"getSpeakersById"}),{isWorkshop:function(){if("Flying Dodo"==this.session.room)return!0}}),methods:{getSpeakerPhoto:function(s){if("undefined"===typeof s)return"";var t=this.speakers.find(function(t){return t.id===s});return"undefined"===typeof t?"":t.profilePicture}},filters:{truncate:function(s,t,a){if(null!==s)return s.substring(0,t)}}}),u=l,d=(a("a54e"),a("2877")),p=Object(d["a"])(u,c,v,!1,null,"97080366",null),m=p.exports,_=a("0a63"),f={mounted:function(){0!==this.sessions.length&&(this.$refs["content"][0].scrollTop=this.scrollPosition),this.FETCH_SPEAKERS()},data:function(){return{rooms:[{label:"Educator 1",className:"educatorone"},{label:"Educator 2",className:"educatortwo"},{label:"Accelerator",className:"accelerator"},{label:"Flying Dodo",className:"flyingdodo"}]}},filters:{truncate:function(s,t,a){return s.substring(0,t)}},methods:Object(n["a"])({},Object(r["b"])(["FETCH_SESSIONS","FETCH_SPEAKERS"]),{time:o["c"],timeToText:o["d"],sampleTime:function(){return"900AM"},getDay:function(s){return s.split(",")[0]},setActive:function(s){this.$store.commit("SET_PAGESESSIONS_ACTIVE",s.split(",")[0])},setScrollPosition:function(){this.$store.commit("SET_PAGESESSIONS_SCROLL_POSITION",this.$refs["content"][0].scrollTop)},getSessionsFor:function(s,t){return this.sessions[s].sessions.filter(function(s){if(s.room===t)return s})}}),computed:Object(n["a"])({},Object(r["c"])({sessions:"getSessionsByRoom",active:"getPageSessionsActive",scrollPosition:"getPageSessionsScrollPosition"})),components:{SessionCard:m,Carousel:_["Carousel"],Slide:_["Slide"]}},C=f,g=(a("4ed2"),a("1954"),Object(d["a"])(C,e,i,!1,null,"526cee54",null));t["default"]=g.exports},cd1c:function(s,t,a){var e=a("e853");s.exports=function(s,t){return new(e(s))(t)}},e853:function(s,t,a){var e=a("d3f4"),i=a("1169"),n=a("2b4c")("species");s.exports=function(s){var t;return i(s)&&(t=s.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),e(t)&&(t=t[n],null===t&&(t=void 0))),void 0===t?Array:t}}}]);
//# sourceMappingURL=chunk-59effb5b.deb886b4.js.map