(function(e){function t(t){for(var n,a,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a13ccd83","chunk-787fe920":"4b523bd7"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={about:1,"chunk-787fe920":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"48257f1f","chunk-787fe920":"196e73aa"}[e]+".css",s=i.p+n,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===s))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],d=u.getAttribute("data-href");if(d===n||d===s)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],l.parentNode.removeChild(l),r(o)},l.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){a[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e);var f=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(l);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}s[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var l=d;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"2d8d":function(e,t,r){"use strict";var n=r("5a25"),a=r.n(n);a.a},4678:function(e,t,r){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("a026"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-layout",{staticClass:"app"},[r("Login",{attrs:{show:e.afterChecked&&(!e.$root.user||0===Object.keys(e.$root.user).length)}}),r("div",{staticClass:"layout pc-layout"},[r("Header"),r("hr",{staticClass:"divider pc-divider",staticStyle:{height:"1px",width:"calc(100% - 40px)"}}),r("a-layout-content",{staticClass:"content",staticStyle:{padding:"0 24px","flex-grow":"2"}},[r("router-view")],1),r("a-layout-footer",{staticStyle:{"text-align":"center"}},[e._v("Marx ©2019 Created by Zato")])],1)],1)},s=[],o=(r("96cf"),r("3b8d")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"header",staticStyle:{background:"transparent",height:"auto",padding:"6px 18px 0 18px"}},[e.$route.matched instanceof Array&&e.$route.matched.length>0&&""!==e.$route.matched[0].path?r("p",{staticStyle:{padding:"0",margin:"0",cursor:"pointer"},on:{click:e.goBack}},[r("a-icon",{attrs:{type:"caret-left",theme:"filled"}}),e._v("返回上一步\n    ")],1):r("p",{staticStyle:{padding:"0",margin:"0",height:"18px"}})]),r("a-layout-header",{staticClass:"header",staticStyle:{background:"transparent",height:"auto",padding:"0px 18px 12px 18px"}},[r("router-link",{attrs:{to:"/"}},[r("h1",{staticClass:"title",staticStyle:{padding:"0",margin:"0"}},[e._v("Marx 考试系统")])]),r("router-link",{attrs:{to:"/info"}},[r("a-avatar",{staticStyle:{cursor:"pointer"},attrs:{size:"large"},on:{click:e.goUserInfo}},[e._v("\n        "+e._s(e.$root.user.name?e.$root.user.name[0]:"U")+"\n      ")])],1)],1)],1)},i=[],u={name:"Header",methods:{handler:function(){this.$router.push("/")},goBack:function(){this.$router.go(-1)},goUserInfo:function(){"/info"!==this.$router.history.current.path&&this.$router.push("/info")}}},d=u,f=(r("2d8d"),r("2877")),l=Object(f["a"])(d,c,i,!1,null,"2835f996",null),b=l.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-breadcrumb",{staticClass:"path",staticStyle:{margin:"16px 0"}},[r("a-breadcrumb-item",[r("router-link",{attrs:{to:"/"}},[e._v("开始")])],1),"/"!==e.$route.path?r("a-breadcrumb-item",[r("router-link",{attrs:{to:e.$route.path}},[e._v(e._s(e.$route.name))])],1):e._e()],1)},h=[],m={name:"BreadCrumb",data:function(){return{}},components:{},methods:{},model:{},watch:{}},j=m,g=Object(f["a"])(j,p,h,!1,null,"51e0a5f2",null),v=g.exports,y=r("ead3"),k=r("56cd"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{visible:e.show,okText:"登录",closable:!1,cancelText:"清空"},on:{ok:e.handleLogin,cancel:e.handleCancel}},[r("h1",{staticStyle:{"text-align":"center"}},[e._v("用户登录")]),r("customized-form",{attrs:{password:e.fields.password,id:e.fields.id},on:{change:e.handleFormChange}})],1)},x=[],O=(r("8e6e"),r("ac6a"),r("456d"),r("bd86"));function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(r,!0).forEach((function(t){Object(O["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z={props:["id","password"],template:'\n    <a-form\n      layout="vertical"\n      :form="form"\n    >\n      <a-form-item label="学号">\n        <a-input v-decorator="[\'id\', {\n          rules: [{ required: true, message: \'请填写id\' }],\n        }]">\n          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />\n        </a-input>\n      </a-form-item>\n      <a-form-item label="密码">\n        <a-input type="password" v-decorator="[\'password\']">\n          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />\n        </a-input>\n      </a-form-item>\n    </a-form>\n  ',created:function(){var e=this;this.form=this.$form.createForm(this,{name:"global_state",onFieldsChange:function(t,r){e.$emit("change",r)},mapPropsToFields:function(){return{id:e.$form.createFormField(C({},e.id,{value:e.id.value})),password:e.$form.createFormField(C({},e.password,{value:e.password.value}))}}})},watch:{username:function(){this.form.updateFields({username:this.$form.createFormField(C({},this.username,{value:this.username.value}))})}}},S={props:["show"],components:{CustomizedForm:z},data:function(){return{fields:{id:{value:""},password:{value:""}}}},methods:{handleFormChange:function(e){this.fields=C({},this.fields,{},e)},handleLogin:function(){var e=this;Object(y["b"])("/user/login",{uuid:this.fields.id.value,password:this.fields.password.value}).then((function(t){t.success?(e.$root.user=t.data,k["a"].success({message:"登录成功",duration:2})):k["a"].error({message:"登录失败，请检查学号密码",duration:2})}))},handleCancel:function(){this.fields={id:{value:""},password:{value:""}}}}},$=S,P=Object(f["a"])($,w,x,!1,null,null,null),E=P.exports,T={name:"Index",components:{Header:b,BreadCrumb:v,Login:E},created:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(y["b"])("/user/info");case 2:t=e.sent,r=t.success,n=t.data,r?this.$root.$data.user=n:k["a"].error({message:"未登录"}),this.afterChecked=!0;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),data:function(){return{afterChecked:!1}}},F=T,L=(r("034f"),r("6d04"),Object(f["a"])(F,a,s,!1,null,"12dd6200",null)),D=L.exports,M=r("8c4f");n["a"].use(M["a"]);var N=new M["a"]({routes:[{path:"/",name:"首页",component:function(){return r.e("chunk-787fe920").then(r.bind(null,"d701"))}},{path:"/exams",name:"考试与测验",component:function(){return r.e("about").then(r.bind(null,"0dbe"))}},{path:"/info",name:"信息维护",component:function(){return r.e("about").then(r.bind(null,"ee96"))}},{path:"/history",name:"考试历史",component:function(){return r.e("about").then(r.bind(null,"e4bb"))}},{path:"/paper",name:"作答",component:function(){return r.e("about").then(r.bind(null,"112a"))}},{path:"/review",name:"作答回顾",component:function(){return r.e("about").then(r.bind(null,"bb44"))}}]}),A=(r("499a"),r("f23d"));r("3aed");n["a"].use(A["a"]),n["a"].config.productionTip=!1,new n["a"]({el:"#app",router:N,render:function(e){return e(D)},data:{user:{}}})},"5a25":function(e,t,r){},"64a9":function(e,t,r){},"6d04":function(e,t,r){"use strict";var n=r("8dd3"),a=r.n(n);a.a},"8dd3":function(e,t,r){},ead3:function(e,t,r){"use strict";var n=r("56cd"),a=r("b383"),s={suffix:"http://129.204.218.96:4000"};r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}));var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(s.suffix+e,{body:JSON.stringify(t),cache:"no-cache",credentials:"include",headers:{"content-type":"application/json"},method:"POST",mode:"cors",redirect:"follow",referrer:"no-referrer"}).then((function(t){return t.ok||n["a"].error({message:"请求接口 ".concat(e," 失败"),description:"".concat(t.status,": ").concat(t.statusText),duration:2}),t.json()}))},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(s.suffix+e+"?"+Object(a["encode"])(t),{cache:"no-cache",credentials:"include",headers:{"user-agent":"Mozilla/4.0 MDN Example","content-type":"application/x-www-form-urlencoded"},method:"GET",mode:"cors",redirect:"follow",referrer:"no-referrer"}).then((function(t){return t.ok||n["a"].error({message:"请求接口 ".concat(e," 失败"),description:"".concat(t.status,": ").concat(t.statusText),duration:2}),t.json()}))}}});
//# sourceMappingURL=app.12c8110e.js.map