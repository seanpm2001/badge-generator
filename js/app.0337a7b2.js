(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,h=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(h.length)h.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-00772205":"83ad6bcf","chunk-15b4ebd0":"040c8e4d","chunk-65e57e00":"6d64550d","chunk-75ca7a42":"7d98a71f","chunk-ca8e573a":"e6b7dcba"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-00772205":1,"chunk-15b4ebd0":1,"chunk-75ca7a42":1,"chunk-ca8e573a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-00772205":"8f292039","chunk-15b4ebd0":"8f292039","chunk-65e57e00":"31d6cfe0","chunk-75ca7a42":"8f292039","chunk-ca8e573a":"8f292039"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var h=document.getElementsByTagName("style");for(i=0;i<h.length;i++){s=h[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var h=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",h.name="ChunkLoadError",h.type=r,h.request=a,n[1](h)}o[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/badge-generator/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var h=0;h<s.length;h++)t(s[h]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"027d":function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return v}));n("99af"),n("a15b"),n("4fad"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("ddb0"),n("2b3d");var r=n("5530"),a=n("3835"),o=n("6119");function c(e,t){return"[".concat(e,"](").concat(t,")")}function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return n&&(t="".concat(t,' "').concat(n,'"')),"![".concat(e,"](").concat(t,")")}function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=i(e,t,r);return n?c(a,n):a}function s(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e=e.replace(/-/g,"--").replace(/_/g,"__"),t&&(e=e.replace(/ /g,"_"));var n=encodeURI(e);return n.replace(/%3E/g,">").replace(/%3C/g,"<")}function l(e,t){for(var n=new URL(e),r=0,o=Object.entries(t);r<o.length;r++){var c=Object(a["a"])(o[r],2),i=c[0],u=c[1];u&&n.searchParams.append(i,u)}return decodeURI(n.href)}function h(e,t){return e?[e,t].join(" - "):t}function d(e,t,n){e=s(e),t=s(t);var r=[t,n];return e&&r.unshift(e),r.join("-")}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return e&&(r.style="for-the-badge"),t&&(r.logo=t,n&&(r.logoColor=n)),r}function p(e){var t=e.label,n=e.message,a=e.color,c=e.styleParams,i=Object(r["a"])({label:t,message:n,color:a},c);return l(o["k"],i)}function g(e){var t=e.label,n=e.message,r=e.color,a=e.styleParams,c=d(t,n,r),i="".concat(o["i"],"/").concat(c);return l(i,a)}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o["b"],r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",s=arguments.length>7&&void 0!==arguments[7]&&arguments[7];if(!t)return"";var l=h(e,t),d=f(r,c,i),v={label:e,message:t,color:n,styleParams:d},m=s?p(v):g(v);return u(l,m,a)}},"034f":function(e,t,n){"use strict";n("85ec")},"1ea2":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("99af");var r=n("d4ec"),a=n("bee2"),o=n("027d"),c=n("6119"),i=function(){function e(t,n){Object(r["a"])(this,e),this.username=t,this.repoName=n,this.isValid=t&&n}return Object(a["a"])(e,[{key:"ghURL",value:function(){return"".concat(c["d"],"/").concat(this.username,"/").concat(this.repoName)}},{key:"ghPagesURL",value:function(){var e="".concat(this.username,".").concat(c["f"]),t="https://".concat(e.toLowerCase());return this.repoName===e?t:"".concat(t,"/").concat(this.repoName,"/")}},{key:"ghPagesBadge",value:function(){var e="View site",t="GH Pages",n=c["g"],r=!0,a=this.ghPagesURL();return Object(o["b"])(e,t,n,r,a)}},{key:"useThisTemplateBadge",value:function(){if(!this.isValid)return"";var e="",t="Use this template",n=c["e"],r=!0,a="".concat(this.ghURL(),"/generate"),i="github";return Object(o["b"])(e,t,n,r,a,i)}},{key:"_tagBadgeUrl",value:function(e){var t="?include_prereleases&sort=semver";return"".concat(c["j"],"/").concat(e,"/").concat(this.username,"/").concat(this.repoName).concat(t)}},{key:"tagBadge",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.isValid)return"";var t=e?"release":"tag",n="GitHub ".concat(t),r=this._tagBadgeUrl(t),a="".concat(this.ghURL(),"/releases/");return Object(o["d"])(n,r,a)}},{key:"licenseBadge",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e||!this.isValid)return"";var n,r="License",a=e,i=c["b"],u=!1;if(t)n="#license";else{var s=this.ghURL();n="".concat(s,"/blob/").concat(c["a"],"/LICENSE")}return Object(o["b"])(r,a,i,u,n)}},{key:"gh",value:function(){var e=this.username,t=this.repoName,n=c["b"],r=!1,a=this.ghURL(),i="github",u="",s=!0;return Object(o["b"])(e,t,n,r,a,i,u,s)}},{key:"_ghSocialShield",value:function(e){return"".concat(c["j"],"/").concat(e,"/").concat(this.username,"/").concat(this.repoName).concat(c["l"].SOCIAL)}},{key:"ghSocial",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e||!this.isValid)return"";var n=t?"".concat(this.username,"/").concat(this.repoName," "):"",r=this._ghSocialShield(e),a=this.ghURL();return"[".concat(n,"![").concat(e," - ").concat(this.repoName,"](").concat(r,")](").concat(a,")")}}]),e}()},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-lg"},[n("span",{attrs:{id:"logo"}},[e._v("Badge Generator")]),n("div",{attrs:{id:"nav"}},e._l(e.routes,(function(t,r){return n("span",{key:t.path},[n("span",[e._v(" "+e._s(0!==r?" | ":"")+" ")]),n("router-link",{attrs:{to:t.path}},[e._v(" "+e._s(t.name)+" ")])],1)})),0)]),n("router-view")],1)},o=[],c=(n("d3b7"),n("8c4f")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home container-lg"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h1",[e._v("Home")]),n("div",{staticClass:"hero"},[e._m(0),n("br"),e._m(1),n("vue-markdown",[e._v(" "+e._s(e.repoBadge)+" ")]),n("p",[n("i",[e._v(e._s(e.description))])])],1)])]),e._m(2)])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{attrs:{href:"https://unsplash.com/photos/FHTxbpRWEsE"}},[n("img",{attrs:{alt:"Logo",src:"https://source.unsplash.com/FHTxbpRWEsE/1300x250",width:"100%",height:"auto"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("small",{staticClass:"note"},[n("span",[e._v(" Photo by "),n("a",{attrs:{href:"https://unsplash.com/@technobulka?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[e._v("Kevin Luarte")]),e._v(" on "),n("a",{attrs:{href:"https://unsplash.com/s/photos/badges?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"}},[e._v("Unsplash")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("p",[e._v(' This is an online tool which generates badges (or "shield") based on your inputs. You can preview the badges on the tool and then copy the markdown/HTML to your GitHub repo\'s '),n("b",[e._v("README.md")]),e._v(" file. Those badges can help people learn about your repo at a glance and make it look professional. ")]),n("p",[e._v(" This tool adds "),n("b",[e._v("convenience")]),e._v(" and "),n("b",[e._v("productivity")]),e._v(" to your life so you can make badges quickly and easily and get on with the coding. ")]),n("p",[e._v(" The power here is in narrowing the choices and putting less burden on your to figure out rules and syntax or read long URLs. For badges that you need to create regularly, there's no need to look at "),n("i",[e._v("shields.io")]),e._v(" to figure out how it works or to write the markdown by hand (and do all the tedious things like escaping characters and learning the syntax for each badge. ")]),n("p",[e._v(" I use this tool regularly for myself - I hope you will too. If you want to contribute, issues and PRs are welcome. ")]),n("p",[e._v("PS. This site works best on a desktop screen size.")])])])}],s=n("9ce6"),l=n.n(s),h=n("6119"),d=n("1ea2"),f={name:"Home",components:{VueMarkdown:l.a},data:function(){var e=new d["a"]("MichaelCurrin","badge-generator");return{repoBadge:e.gh(),description:h["c"]}}},p=f,g=n("2877"),v=Object(g["a"])(p,i,u,!1,null,null,null),m=v.exports;r["a"].use(c["a"]);var b=[{path:"/",name:"Home",component:m},{path:"/repo",name:"Repo",component:function(){return n.e("chunk-15b4ebd0").then(n.bind(null,"7b65"))}},{path:"/generic",name:"Generic",component:function(){return n.e("chunk-75ca7a42").then(n.bind(null,"f3c2"))}},{path:"/package",name:"Package",component:function(){return n.e("chunk-00772205").then(n.bind(null,"b086"))}},{path:"/image",name:"Image",component:function(){return n.e("chunk-ca8e573a").then(n.bind(null,"feec"))}},{path:"/catalogue",name:"Catalogue",component:function(){return n.e("chunk-65e57e00").then(n.bind(null,"afe0"))}}],y=new c["a"]({routes:b}),_=y,k={data:function(){return{routes:b}}},w=k,j=(n("034f"),Object(g["a"])(w,a,o,!1,null,null,null)),O=j.exports;r["a"].config.productionTip=!1,new r["a"]({router:_,render:function(e){return e(O)}}).$mount("#app")},6119:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"i",(function(){return c})),n.d(t,"k",(function(){return i})),n.d(t,"j",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return h})),n.d(t,"g",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"l",(function(){return g})),n.d(t,"h",(function(){return v}));var r=n("9224"),a=r["a"],o="https://img.shields.io",c="".concat(o,"/badge"),i="".concat(o,"/static/v1"),u="".concat(o,"/github"),s="https://github.com",l="github.io",h="blue",d="green",f="2ea44f",p="master",g={FOR_THE_BADGE:"?style=for-the-badge",SOCIAL:"?style=social"},v={python:{label:"PyPI",url:"https://pypi.org/project"},node:{label:"npm",url:"https://www.npmjs.com/package"},ruby:{label:"rubygems",url:"https://rubygems.org/gems"}}},"85ec":function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"a":"Magically generate custom badges that you can paste in your docs"}')}});
//# sourceMappingURL=app.0337a7b2.js.map