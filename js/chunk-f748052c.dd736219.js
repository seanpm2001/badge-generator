(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f748052c"],{7737:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v(e._s(e.label)+": ")]),n("input",{attrs:{type:"checkbox"},domProps:{checked:e.checked},on:{change:function(t){return e.$emit("input",t.target.checked)}}}),e.note?n("small",{staticClass:"note"},[n("vue-markdown",[e._v(e._s(e.note))])],1):e._e()])},i=[],l=n("9ce6"),s=n.n(l),o={name:"Checkbox",components:{VueMarkdown:s.a},props:{label:{type:String,required:!0},checked:{type:Boolean,required:!1,default:!1},note:{type:String,required:!1}}},r=o,c=n("2877"),u=Object(c["a"])(r,a,i,!1,null,null,null);t["a"]=u.exports},ab31:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"images container-lg row"},[e._m(0),n("div",{staticClass:"col-6"},[n("div",{staticClass:"app-input"},[n("h2",[e._v("Input values")]),n("form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.submit(t))}}},[n("fieldset",{attrs:{name:"links"}},[n("legend",[e._v("Links")]),n("TextInput",{attrs:{label:"Source (required)",placeholder:"e.g. /sample.png",note:"Local path or URL."},model:{value:e.imgSrc,callback:function(t){e.imgSrc=t},expression:"imgSrc"}}),n("TextInput",{attrs:{label:"Click target",placeholder:"e.g. https://example.com",note:"Local path or external URL. Such as docs/ or link to project site."},model:{value:e.linkTarget,callback:function(t){e.linkTarget=t},expression:"linkTarget"}})],1),n("br"),n("fieldset",{attrs:{name:"text"}},[n("legend",[e._v("Text")]),n("TextInput",{attrs:{label:"Alt text",placeholder:"e.g. Sample screenshot",note:"Fallback image text on broken link. If not set, the image path will be used"},model:{value:e.altText,callback:function(t){e.altText=t},expression:"altText"}}),n("br"),n("TextInput",{attrs:{label:"Title",note:"Text to show on hover."},model:{value:e.imgTitle,callback:function(t){e.imgTitle=t},expression:"imgTitle"}})],1),n("br"),n("fieldset",{attrs:{id:"appearance"}},[n("legend",[e._v("Appearance")]),n("TextInput",{attrs:{label:"Width",placeholder:"e.g. 400",note:"Measured in pixels. No px is needed."},model:{value:e.width,callback:function(t){e.width=t},expression:"width"}}),n("br"),n("TextInput",{attrs:{label:"Height",placeholder:"e.g. 400",note:"Recommended: Set height only if width is set too, as just height can cause distortion on mobile view"},model:{value:e.height,callback:function(t){e.height=t},expression:"height"}}),n("br"),n("Checkbox",{attrs:{label:"Align center",checked:e.alignCenter},model:{value:e.alignCenter,callback:function(t){e.alignCenter=t},expression:"alignCenter"}})],1),n("br"),n("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})]),n("Help",{attrs:{message:"<p>\n          Tip: Pressing the <kbd>Enter</kbd> key after updating a text field\n          will also submit.\n        </p>\n        <p>\n          Setting <i>width</i> and <i>height</i> is optional, but this can\n          help in certain cases. For example, a screenshot or logo will be set\n          by GitHub to <i>100%</i> of the page width making it look large and\n          take up vertical space, so reduce height or width manually.\n        </p>\n        <p>\n          Setting height can also make sure the height of the tag is set\n          before the image loads, so it reserves the space - if the height is\n          larger than the original image though then the image will looked\n          stretched.\n        </p>\n        <p>\n          Warning: If you set height only to say 400, then the image in the\n          README.md will look fine on desktop but ends up looking distorted on\n          mobile.\n        </p>"}})],1)]),n("div",{staticClass:"col-6"},[n("Results",{attrs:{result:e.result}})],1)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"col-12"},[n("h1",[e._v("Images")]),n("p",[e._v("Prepare a logo or sample screenshot image for your README.md file.")])])}],l=(n("99af"),n("7737")),s=n("ca2c"),o=n("8169"),r=n("446e"),c=n("80b5");function u(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,s=arguments.length>6?arguments[6]:void 0,o=n?' title="'.concat(n,'"'):"",r=t?' alt="'.concat(t,'"'):"",c=i?' width="'.concat(i,'"'):"",u=l?' height="'.concat(l,'"'):"",h='<img src="'.concat(e,'"').concat(r).concat(o).concat(c).concat(u," />");return a&&(h='<a href="'.concat(a,'">\n    ').concat(h,"\n</a>")),s&&(h='<div align="'.concat(s,'">\n').concat(h,"\n</div>")),h}n("ac1f"),n("5319");function h(e){return e.replace(/^\/+/,"")}var p={name:"Images",components:{Checkbox:l["a"],Help:s["a"],Results:o["a"],TextInput:r["a"]},data:function(){return{imgSrc:"/sample.png",linkTarget:"",altText:"Sample screenshot",imgTitle:"",width:"400",height:"",alignCenter:!0,result:"_Your output will appear here_"}},computed:{altTextOut:function(){return h(this.altText||this.imgSrc)},imgTitleOut:function(){return h(this.imgTitle||this.altText)}},methods:{submit:function(){console.debug("Process inputs and render results");var e=u(this.imgSrc,this.altTextOut,this.imgTitleOut,this.linkTarget,this.width,this.height,this.alignCenter?"center":""),t=Object(c["d"])(this.altTextOut,this.imgSrc,this.linkTarget,this.imgTitleOut);this.result="_HTML image_\n\n".concat(e,"\n\n_Markdown image_\n\n").concat(t,"\n      ")}}},d=p,g=n("2877"),m=Object(g["a"])(d,a,i,!1,null,null,null);t["default"]=m.exports},ca2c:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-notes"},[n("h2",[e._v("Help")]),n("details",[n("summary",[e._v("Click to show/hide notes")]),n("p",[n("vue-markdown",[e._v(" "+e._s(e.message)+" ")])],1)])])},i=[],l=n("9ce6"),s=n.n(l),o={name:"Checkbox",components:{VueMarkdown:s.a},props:{message:{type:String,required:!0}}},r=o,c=n("2877"),u=Object(c["a"])(r,a,i,!1,null,null,null);t["a"]=u.exports}}]);
//# sourceMappingURL=chunk-f748052c.dd736219.js.map