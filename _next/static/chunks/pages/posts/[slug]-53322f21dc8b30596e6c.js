_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/a9y":function(e,t,r){"use strict";var n=r("lwsE"),a=r("W8MJ"),o=r("7W2i"),i=r("a1gu"),u=r("Nsbk");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var a=u(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return i(this,r)}}var l=r("TqRt");t.__esModule=!0,t.default=void 0;var s=l(r("q1tI")),f=l(r("8Kt/")),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function p(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var m=function(e){o(r,e);var t=c(r);function r(){return n(this,r),t.apply(this,arguments)}return a(r,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||d[e]||"An unexpected error has occurred";return s.default.createElement("div",{style:h.error},s.default.createElement(f.default,null,s.default.createElement("title",null,e,": ",t)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?s.default.createElement("h1",{style:h.h1},e):null,s.default.createElement("div",{style:h.desc},s.default.createElement("h2",{style:h.h2},t,"."))))}}]),r}(s.default.Component);t.default=m,m.displayName="ErrorPage",m.getInitialProps=p,m.origGetInitialProps=p;var h={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"20a2":function(e,t,r){e.exports=r("nOHt")},GlJ9:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return L}));var n=r("q1tI"),a=r.n(n),o=r("20a2"),i=r("eomm"),u=r.n(i),c=r("pJr+"),l=r("qtBi"),s=r.n(l),f=a.a.createElement,d=function(e){var t=e.content;return f("div",{className:"max-w-2xl mx-auto"},f("div",{className:s.a.markdown,dangerouslySetInnerHTML:{__html:t}}))},p=r("dRp5"),m=r("fdcT"),h=r("hJcT"),v=a.a.createElement,g=function(e){var t=e.children;return v("h1",{className:"text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left"},t)},y=a.a.createElement,w=function(e){var t=e.title,r=(e.coverImage,e.date),n=e.author;return y(a.a.Fragment,null,y(g,null,t),y("div",{className:"hidden md:flex md:mb-12 items-center"},y(m.a,{name:n.name,picture:n.picture}),y(h.a,{dateString:r})),y("div",{className:"max-w-2xl mx-auto"},y("div",{className:"flex md:hidden mb-6 items-center"},y(m.a,{name:n.name,picture:n.picture}),y(h.a,{dateString:r}))))},b=r("5M6V"),x=r("g4pe"),E=r.n(x),k=r("o0o1"),_=r.n(k),N=r("g6dt"),j=r.n(N);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var P="twttr",I=P,R=!("undefined"===typeof window||!window.document||!window.document.createElement);function T(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function O(e){var t=Object(n.useRef)();return function(e,t){if(T(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var a=0;a<r.length;a++)if(!Object.prototype.hasOwnProperty.call(t,r[a])||!T(e[r[a]],t[r[a]]))return!1;return!0}(e,t.current)||(t.current=e),t.current}function C(e){return"object"===typeof e?S({},e):e}function A(e,t,r,n,a,o,i){try{var u=e[o](i),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,a)}R&&j()("https://platform.twitter.com/widgets.js",I);var F="twdiv";function J(e,t,r,a){var o=Object(n.useState)(null),i=o[0],u=o[1],c=Object(n.useRef)(null);if(!R)return{ref:c,error:i};var l=[e,O(t),O(r)];return Object(n.useEffect)((function(){u(null);var n,o,i=!1;if(c.current){var l=function(){var n,o=(n=_.a.mark((function n(){var o,l;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c&&c.current){n.next=2;break}return n.abrupt("return");case 2:return(o=document.createElement("div")).setAttribute(F,"yes"),c.current.appendChild(o),n.prev=5,n.next=8,new Promise((function(e,t){var r=function(){return t(new Error("Could not load remote twitter widgets js"))};j.a.ready(I,{success:function(){var t=window.twttr;t&&t.widgets||r(),e(t.widgets)},error:r})}));case 8:return l=n.sent,n.next=11,l[e](C(t),o,C(r));case 11:if(n.sent||i){n.next=14;break}throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");case 14:n.next=21;break;case 16:return n.prev=16,n.t0=n.catch(5),console.error(n.t0),u(n.t0),n.abrupt("return");case 21:if(c&&c.current){n.next=23;break}return n.abrupt("return");case 23:if(!i){n.next=26;break}return o&&o.remove(),n.abrupt("return");case 26:a&&a();case 27:case"end":return n.stop()}}),n,null,[[5,16]])})),function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function i(e){A(o,r,a,i,u,"next",e)}function u(e){A(o,r,a,i,u,"throw",e)}i(void 0)}))});return function(){return o.apply(this,arguments)}}();n=c.current,o=F,n&&n.querySelectorAll("*").forEach((function(e){e.hasAttribute(o)&&e.remove()})),l()}return function(){i=!0}}),l),{ref:c,error:i}}var M=function(e){var t=e.url,r=e.options,n=e.onLoad,o=e.renderError,i=J("createShareButton",t,r,n),u=i.ref,c=i.error;return a.a.createElement("div",{ref:u},c&&o&&o(c))},q=a.a.createElement,L=!0;t.default=function(e){var t=e.post,r=(e.morePosts,e.preview),n=Object(o.useRouter)();return n.isFallback||null!==t&&void 0!==t&&t.slug?q(b.a,{preview:r},q(c.a,null,q(p.a,null),n.isFallback?q(g,null,"Loading\u2026"):q(a.a.Fragment,null,q("article",{className:"mb-32 lg:w-3/5 mx-auto text-center"},q(E.a,null,q("title",null,t.title," | \u308d\u3044\u308d\u3050"),q("meta",{property:"og:image",content:t.ogImage.url})),q("div",{className:"text-left"},q(w,{title:t.title,coverImage:t.coverImage,date:t.date,author:t.author}),q(d,{content:t.content}),q("div",null,q(M,{url:"https://blog.roiroi.dev".concat(n.asPath)}),q("a",{href:"https://github.com/rrih/blog.roiroi.dev/issues/new",style:{textDecoration:"underline"}},"\u5f53\u8a18\u4e8b\u3078\u306e\u30b3\u30e1\u30f3\u30c8\u3001\u610f\u898b\u3001\u6587\u53e5\u3001\u4fee\u6b63\u4f9d\u983c\u306f\u3053\u3061\u3089\u304b\u3089\u3069\u3046\u305e"))))))):q(u.a,{statusCode:404})}},ZW3T:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r("GlJ9")}])},eomm:function(e,t,r){e.exports=r("/a9y")},g6dt:function(e,t,r){var n,a,o;a=[],void 0===(o="function"===typeof(n=function(){var e=function(){},t={},r={},n={};function a(e,t){e=e.push?e:[e];var a,o,i,u=[],c=e.length,l=c;for(a=function(e,r){r.length&&u.push(e),--l||t(u)};c--;)o=e[c],(i=r[o])?a(o,i):(n[o]=n[o]||[]).push(a)}function o(e,t){if(e){var a=n[e];if(r[e]=t,a)for(;a.length;)a[0](e,t),a.splice(0,1)}}function i(t,r){t.call&&(t={success:t}),r.length?(t.error||e)(r):(t.success||e)(t)}function u(t,r,n,a){var o,i,c=document,l=n.async,s=(n.numRetries||0)+1,f=n.before||e,d=t.replace(/[\?|#].*$/,""),p=t.replace(/^(css|img)!/,"");a=a||0,/(^css!|\.css$)/.test(d)?((i=c.createElement("link")).rel="stylesheet",i.href=p,(o="hideFocus"in i)&&i.relList&&(o=0,i.rel="preload",i.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)?(i=c.createElement("img")).src=p:((i=c.createElement("script")).src=t,i.async=void 0===l||l),i.onload=i.onerror=i.onbeforeload=function(e){var c=e.type[0];if(o)try{i.sheet.cssText.length||(c="e")}catch(l){18!=l.code&&(c="e")}if("e"==c){if((a+=1)<s)return u(t,r,n,a)}else if("preload"==i.rel&&"style"==i.as)return i.rel="stylesheet";r(t,c,e.defaultPrevented)},!1!==f(t,i)&&c.head.appendChild(i)}function c(e,t,r){var n,a,o=(e=e.push?e:[e]).length,i=o,c=[];for(n=function(e,r,n){if("e"==r&&c.push(e),"b"==r){if(!n)return;c.push(e)}--o||t(c)},a=0;a<i;a++)u(e[a],n,r)}function l(e,r,n){var a,u;if(r&&r.trim&&(a=r),u=(a?n:r)||{},a){if(a in t)throw"LoadJS";t[a]=!0}function l(t,r){c(e,(function(e){i(u,e),t&&i({success:t,error:r},e),o(a,e)}),u)}if(u.returnPromise)return new Promise(l);l()}return l.ready=function(e,t){return a(e,(function(e){i(t,e)})),l},l.done=function(e){o(e,[])},l.reset=function(){t={},r={},n={}},l.isDefined=function(e){return e in t},l})?n.apply(t,a):n)||(e.exports=o)},qtBi:function(e,t,r){e.exports={markdown:"markdown-styles_markdown__1x9gM"}}},[["ZW3T",0,2,1,3]]]);