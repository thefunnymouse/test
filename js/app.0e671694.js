(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],f=0,h=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&h.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(h.length)h.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Tracker")],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Date: "+e._s(e.date))]),n("h2",[e._v("Week: "+e._s(e.week))]),n("button",{on:{click:e.clear}},[e._v("Clear all")]),n("table",{attrs:{border:"1",cellspacing:"0",cellpadding:"5"}},[n("thead",[n("tr",[n("th"),e._l(e.accounts,(function(t,r){return n("th",{key:r},[e._v(" "+e._s(t)+" ")])}))],2)]),n("tbody",e._l(e.events,(function(t,r){return n("tr",{key:r},[n("td",[e._v(e._s(t))]),e._l(e.accounts,(function(t,c){return n("th",{key:c},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.isDone(r,t)},on:{change:function(n){return e.toggle(r,t,n)}}})])}))],2)})),0)]),n("h3",[e._v("Weekly events")]),n("table",{attrs:{border:"1",cellspacing:"0",cellpadding:"5"}},[n("thead",[n("tr",[n("th"),e._l(e.accounts,(function(t,r){return n("th",{key:r},[e._v(" "+e._s(t)+" ")])}))],2)]),n("tbody",e._l(e.weekEvents,(function(t,r){return n("tr",{key:r},[n("td",[e._v(e._s(t))]),e._l(e.accounts,(function(t,c){return n("th",{key:c},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.isDoneWeek(r,t)},on:{change:function(n){return e.toggleWeek(r,t,n)}}})])}))],2)})),0)])])},u=[];n("7db0"),n("caad"),n("2532"),n("4de4"),n("ac1f"),n("1276");function i(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=864e5*(e.getDay()-1),n=new Date(e);n.setTime(e.getTime()-t);var r=new Date(n.getTime()+5184e5);return l(n)+"_"+l(r)}function l(e){return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}var f={methods:{load:function(){var e,t,n=localStorage.getItem("accounts");if(n)this.accounts=JSON.parse(n);else{var r=window.prompt("Accounts: ");this.accounts=r.split(","),localStorage.setItem("accounts",JSON.stringify(this.accounts))}this.date=i(),this.week=s(new Date);var c=null!==(e=localStorage.getItem("trackers-"+this.date))&&void 0!==e?e:"[]";this.trackers=JSON.parse(c);var o=null!==(t=localStorage.getItem("w-trackers-"+this.week))&&void 0!==t?t:"[]";this.weekTrackers=JSON.parse(o)},clear:function(){localStorage.removeItem("accounts"),window.location.reload()}},mounted:function(){console.log(this.accounts)},data:function(){return{accounts:[],events:["Điểm danh cầu phúc","Góp quân tư","Thần thú","Thí luyện AH","Full phó bản","Full Q","Gia viên nuôi trồng"],weekEvents:["Hiệp khách","Cầu nguyện","Quà khởi công","Trống chinh chiến","Phong thuỷ gia viên","Ôn tuyền lần 1","Ôn tuyền lần 2","Ôn tuyền lần 3"],date:null,week:null,trackers:[],weekTrackers:[]}},watch:{}},h={mixins:[f],created:function(){this.load(),console.log(this.date)},methods:{toggle:function(e,t,n){var r=this.trackers.find((function(e){return e.acc===t}));console.log(e,r),r?n.target.checked?!r.events.includes(e)&&r.events.push(e):r.events=r.events.filter((function(t){return t!==e})):this.trackers.push({acc:t,events:[e]})},isDone:function(e,t){var n=this.trackers.find((function(e){return e.acc===t}));return n&&n.events.includes(e)},toggleWeek:function(e,t,n){var r=this.weekTrackers.find((function(e){return e.acc===t}));console.log(e,r),r?n.target.checked?!r.events.includes(e)&&r.events.push(e):r.events=r.events.filter((function(t){return t!==e})):this.weekTrackers.push({acc:t,events:[e]})},isDoneWeek:function(e,t){var n=this.weekTrackers.find((function(e){return e.acc===t}));return n&&n.events.includes(e)}},watch:{trackers:{deep:!0,handler:function(e){localStorage.setItem("trackers-"+this.date,JSON.stringify(e))}},weekTrackers:{deep:!0,handler:function(e){localStorage.setItem("w-trackers-"+this.week,JSON.stringify(e))}}}},d=h,p=n("2877"),v=Object(p["a"])(d,a,u,!1,null,null,null),g=v.exports,k={name:"App",components:{Tracker:g}},w=k,y=(n("034f"),Object(p["a"])(w,c,o,!1,null,null,null)),b=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.0e671694.js.map