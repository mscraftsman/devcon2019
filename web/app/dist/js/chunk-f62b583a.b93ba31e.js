(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f62b583a"],{"0a49":function(t,s,e){var n=e("9b43"),i=e("626a"),o=e("4bf8"),a=e("9def"),r=e("cd1c");t.exports=function(t,s){var e=1==t,c=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d,h=s||r;return function(s,r,p){for(var v,m,g=o(s),k=i(g),w=n(r,p,3),_=a(k.length),b=0,y=e?h(s,_):c?h(s,0):void 0;_>b;b++)if((f||b in k)&&(v=k[b],m=w(v,b,g),t))if(e)y[b]=m;else if(m)switch(t){case 3:return!0;case 5:return v;case 6:return b;case 2:y.push(v)}else if(l)return!1;return d?-1:u||l?l:y}}},"102b":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"page page-session"},[n("div",{staticClass:"back-button-wrapper"},[n("a",{staticClass:"back",on:{click:function(s){t.$router.go(-1)}}},[n("img",{attrs:{src:e("ccfe"),alt:""}}),t._v(" Back ")])]),t.session?n("div",{staticClass:"page-content"},[n("div",{staticClass:"session-title"},[t._v(t._s(t.session.title))]),t.session.speakers?n("div",{staticClass:"speakers-wrapper"},t._l(t.session.speakers,function(s){return n("router-link",{key:s.id,staticClass:"speaker-wrapper",attrs:{to:{name:"speaker",params:{id:s.id}}}},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.getSpeakerPhoto(s.id),alt:""}})]),n("p",{staticClass:"name"},[t._v(t._s(s.name))])])}),1):t._e(),t.session.isServiceSession?t._e():n("div",{staticClass:"actions-wrapper"},[n("div",{staticClass:"des-wrap rate "},[t.bookmarked?n("a",{staticClass:"done",on:{click:function(s){t.USER_BOOKMARK_REMOVE(t.session.id)}}},[n("span",{staticClass:"svgicon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"bevel"}},[n("path",{attrs:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}}),n("polyline",{attrs:{points:"22 4 12 14.01 9 11.01"}})])]),t._v("\n          Bookmarked\n        ")]):n("a",{staticClass:"rate bookmark",class:{notallowed:!t.allowBookmark},on:{click:function(s){t.addBookmark()}}},[n("span",{staticClass:"svgicon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff","stroke-width":"3","stroke-linecap":"square","stroke-linejoin":"arcs"}},[n("path",{attrs:{d:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"}})])]),t._v("\n          Add to bookmark\n        ")])]),t.user?n("div",{staticClass:"des-wrap rate"},[t.checkSessionStatus?[t.voted?n("router-link",{staticClass:"done",attrs:{to:{name:"feedback",params:{id:t.id}}}},[n("span",{staticClass:"svgicon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"bevel"}},[n("path",{attrs:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}}),n("polyline",{attrs:{points:"22 4 12 14.01 9 11.01"}})])]),t._v("\n            Rated. Thanks!\n          ")]):n("router-link",{staticClass:"rate ",attrs:{to:{name:"feedback",params:{id:t.id}}}},[n("span",{staticClass:"svgicon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"bevel"}},[n("path",{attrs:{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"}})])]),t._v("\n            Rate this session\n          ")])]:n("a",{staticClass:"rate notallowed countdown"},[n("VueCountdown",{attrs:{time:new Date(t.session.startsAt).getTime()-(new Date).getTime()},scopedSlots:t._u([{key:"default",fn:function(s){return[t._v("\n              "+t._s(s.days)+"d "+t._s(s.hours)+"hr "+t._s(s.minutes)+"min "+t._s(s.seconds)+"s until votes open\n            ")]}}])})],1)],2):n("div",{staticClass:"des-wrap rate meetup"},[n("a",{staticClass:"rate",on:{click:function(s){t.USER_LOGIN()}}},[n("span",{staticClass:"svgicon"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff","stroke-width":"3","stroke-linecap":"square","stroke-linejoin":"arcs"}},[n("path",{attrs:{d:"M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3"}})])]),t._v("\n          Login with meetup to rate\n        ")])])]),n("div",{staticClass:"descriptions-row"},[t.session.format?n("div",{staticClass:"des-wrap"},[t._m(0),n("p",[t._v(t._s(t.session.format))])]):t._e(),t.session.language?n("div",{staticClass:"des-wrap"},[t._m(1),n("p",[t._v(t._s(t.session.language))])]):t._e(),n("div",{staticClass:"des-wrap"},[t._m(2),n("p",[t._v(t._s(t.session.room))])]),n("div",{staticClass:"des-wrap"},[t._m(3),n("p",[t._v("\n          "+t._s(t.getDay(t.session.startsAt))+" "+t._s(t.time(t.session.startsAt))+" -\n          "+t._s(t.time(t.session.endsAt))+"\n        ")])]),t.session.level?n("div",{staticClass:"des-wrap"},[t._m(4),n("p",[t._v(t._s(t.session.level))])]):t._e()]),n("div",{staticClass:"description-text"},[n("p",{domProps:{innerHTML:t._s(t.session.description)}},[t._v(t._s(t.session.description))])])]):n("div",{staticClass:"page-content"},[n("p",[t._v("loading session...")]),n("a",{attrs:{href:"javascript:location.reload()",title:"i'm not proud of this code. please send PR"}},[t._v("is this taking too long? click here")])])])},i=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("label",[n("img",{attrs:{src:e("a25c"),alt:""}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("label",[n("img",{attrs:{src:e("a25c"),alt:""}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("label",[n("img",{attrs:{src:e("d2eb"),alt:""}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("label",[n("img",{attrs:{src:e("79aa"),alt:""}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("label",[n("img",{attrs:{src:e("ef05"),alt:""}})])}],o=(e("6762"),e("2fdb"),e("20d6"),e("e814")),a=e.n(o),r=e("a4bb"),c=e.n(r),u=e("5176"),l=e.n(u),d=(e("7514"),e("cebc")),f=e("2f62"),h=e("ce96"),p=1e3,v=60*p,m=60*v,g=24*m,k={name:"countdown",data:function(){return{count:0,counting:!1,endTime:0}},props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3},leadingZero:{type:Boolean,default:!0},now:{type:Function,default:function(){return Date.now()}},time:{type:Number,default:0,validator:function(t){return t>=0}},tag:{type:String,default:"span"}},computed:{days:function(){return Math.floor(this.count/g)},hours:function(){return Math.floor(this.count%g/m)},minutes:function(){return Math.floor(this.count%m/v)},seconds:function(){var t=this.interval,s=this.count%v/p;return t<10?parseFloat(s.toFixed(3)):t>=10&&t<100?parseFloat(s.toFixed(2)):t>=100&&t<1e3?parseFloat(s.toFixed(1)):Math.floor(s)},totalDays:function(){return this.days},totalHours:function(){return Math.floor(this.count/m)},totalMinutes:function(){return Math.floor(this.count/v)},totalSeconds:function(){var t=this.interval,s=this.count/p;return t<10?parseFloat(s.toFixed(3)):t>=10&&t<100?parseFloat(s.toFixed(2)):t>=100&&t<1e3?parseFloat(s.toFixed(1)):Math.floor(s)}},render:function(t){var s=this,e=function(t){return s.leadingZero&&t<10?"0".concat(t):t};return t(this.tag,this.$scopedSlots.default?[this.$scopedSlots.default({days:e(this.days),hours:e(this.hours),minutes:e(this.minutes),seconds:e(this.seconds),totalDays:e(this.totalDays),totalHours:e(this.totalHours),totalMinutes:e(this.totalMinutes),totalSeconds:e(this.totalSeconds)})]:this.$slots.default)},methods:{init:function(){var t=this,s=this.time;s>0&&(this.count=s,this.endTime=this.now()+s,this.autoStart&&this.$nextTick(function(){t.start()}))},start:function(){this.counting||(this.emitEvents&&this.$emit("countdownstart"),this.counting=!0,this.next())},pause:function(){this.counting&&(this.emitEvents&&this.$emit("countdownpause"),this.counting=!1,clearTimeout(this.timeout))},next:function(){this.timeout=setTimeout(this.step.bind(this),this.interval)},step:function(){this.counting&&(this.count>this.interval?(this.count-=this.interval,this.emitEvents&&this.count>0&&this.$emit("countdownprogress",{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds}),this.next()):(this.count=0,this.stop()))},stop:function(){this.counting=!1,clearTimeout(this.timeout),this.timeout=void 0,this.emitEvents&&this.$emit("countdownend")},update:function(){this.counting&&(this.count=Math.max(0,this.endTime-this.now()))}},watch:{time:function(){this.init()}},created:function(){this.init()},mounted:function(){window.addEventListener("focus",this.onFocus=this.update.bind(this))},beforeDestroy:function(){window.removeEventListener("focus",this.onFocus),clearTimeout(this.timeout)}},w=k,_={data:function(){return{allowBookmark:!0}},components:{VueCountdown:w},props:["id"],mounted:function(){},methods:Object(d["a"])({},Object(f["b"])(["FETCH_SESSIONS","FETCH_SPEAKERS","USER_LOGIN","USER_BOOKMARK_ADD","USER_BOOKMARK_REMOVE"]),{getSpeakerPhoto:function(t){if(0!==this.speakers.length){var s=this.speakers.find(function(s){return s.id===t});return"undefined"===typeof s?"":s.profilePicture}this.FETCH_SPEAKERS()},addBookmark:function(){this.allowBookmark&&(this.allowBookmark=!1,this.USER_BOOKMARK_ADD(this.session.id))},time:h["c"],getDay:h["b"]}),computed:Object(d["a"])({},Object(f["c"])({sessions:"getSessions",speakers:"getSpeakers",user:"getUser",getBookmarks:"getBookmarks",getMyFeedbacks:"getMyFeedbacks"}),{session:function(){var t=this;"undefined"==typeof this.sessions&&this.FETCH_SESSIONS();var s=l()({},this.sessions);return c()(s).map(function(t){return s[t].sessions}).flat().find(function(s){return a()(s.id)===a()(t.id)})},voted:function(){var t=this;return this.getMyFeedbacks instanceof Array&&-1!==this.getMyFeedbacks.findIndex(function(s){return s.session_id===t.id})},bookmarked:function(){return!!this.getBookmarks&&this.getBookmarks.includes(this.id)},checkSessionStatus:function(){var t=9e5,s=new Date("2019-04-13T17:30:00"),e=new Date("2019-04-12T12:20:00");if(e>s)return!1;var n=new Date(this.session.startsAt);return n.setTime(n.getTime()+t),e>n}}),watch:{},beforeMount:function(){this.$store.state.sessions.length}},b=_,y=(e("59ff"),e("2877")),S=Object(y["a"])(b,n,i,!1,null,"0504f8f2",null);s["default"]=S.exports},1169:function(t,s,e){var n=e("2d95");t.exports=Array.isArray||function(t){return"Array"==n(t)}},"20d6":function(t,s,e){"use strict";var n=e("5ca1"),i=e("0a49")(6),o="findIndex",a=!0;o in[]&&Array(1)[o](function(){a=!1}),n(n.P+n.F*a,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")(o)},"59ff":function(t,s,e){"use strict";var n=e("d99a"),i=e.n(n);i.a},7514:function(t,s,e){"use strict";var n=e("5ca1"),i=e("0a49")(5),o="find",a=!0;o in[]&&Array(1)[o](function(){a=!1}),n(n.P+n.F*a,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e("9c6c")(o)},"79aa":function(t,s,e){t.exports=e.p+"img/time.14e3060f.svg"},a25c:function(t,s,e){t.exports=e.p+"img/language.8d2ba006.svg"},cd1c:function(t,s,e){var n=e("e853");t.exports=function(t,s){return new(n(t))(s)}},d2eb:function(t,s,e){t.exports=e.p+"img/location.c4e425ed.svg"},d99a:function(t,s,e){},e853:function(t,s,e){var n=e("d3f4"),i=e("1169"),o=e("2b4c")("species");t.exports=function(t){var s;return i(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!i(s.prototype)||(s=void 0),n(s)&&(s=s[o],null===s&&(s=void 0))),void 0===s?Array:s}},ef05:function(t,s,e){t.exports=e.p+"img/level.895cd7e8.svg"}}]);
//# sourceMappingURL=chunk-f62b583a.b93ba31e.js.map