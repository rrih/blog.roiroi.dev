_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/a9y":function(e,t,n){"use strict";var a=n("lwsE"),r=n("W8MJ"),l=n("7W2i"),i=n("a1gu"),o=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=o(e);if(t){var r=o(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}var c=n("TqRt");t.__esModule=!0,t.default=void 0;var s=c(n("q1tI")),d=c(n("8Kt/")),m={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var p=function(e){l(n,e);var t=u(n);function n(){return a(this,n),t.apply(this,arguments)}return r(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||m[e]||"An unexpected error has occurred";return s.default.createElement("div",{style:g.error},s.default.createElement(d.default,null,s.default.createElement("title",null,e,": ",t)),s.default.createElement("div",null,s.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?s.default.createElement("h1",{style:g.h1},e):null,s.default.createElement("div",{style:g.desc},s.default.createElement("h2",{style:g.h2},t,"."))))}}]),n}(s.default.Component);t.default=p,p.displayName="ErrorPage",p.getInitialProps=f,p.origGetInitialProps=f;var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"20a2":function(e,t,n){e.exports=n("nOHt")},GlJ9:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return N}));var a=n("q1tI"),r=n.n(a),l=n("20a2"),i=n("eomm"),o=n.n(i),u=n("pJr+"),c=n("qtBi"),s=n.n(c),d=r.a.createElement,m=function(e){var t=e.content;return d("div",{className:"max-w-2xl mx-auto"},d("div",{className:s.a.markdown,dangerouslySetInnerHTML:{__html:t}}))},f=n("dRp5"),p=n("fdcT"),g=n("hJcT"),h=r.a.createElement,v=function(e){var t=e.children;return h("h1",{className:"text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left"},t)},x=r.a.createElement,y=function(e){var t=e.title,n=(e.coverImage,e.date),a=e.author;return x(r.a.Fragment,null,x(v,null,t),x("div",{className:"hidden md:flex md:mb-12 items-center"},x(p.a,{name:a.name,picture:a.picture}),x(g.a,{dateString:n})),x("div",{className:"max-w-2xl mx-auto"},x("div",{className:"flex md:hidden mb-6 items-center"},x(p.a,{name:a.name,picture:a.picture}),x(g.a,{dateString:n}))))},w=n("5M6V"),_=n("g4pe"),E=n.n(_),b=r.a.createElement,N=!0;t.default=function(e){var t=e.post,n=(e.morePosts,e.preview),a=Object(l.useRouter)();return a.isFallback||null!==t&&void 0!==t&&t.slug?b(w.a,{preview:n},b(u.a,null,b(f.a,null),a.isFallback?b(v,null,"Loading\u2026"):b(r.a.Fragment,null,b("article",{className:"mb-32 lg:w-3/5 mx-auto text-center"},b(E.a,null,b("title",null,t.title," | \u308d\u3044\u308d\u3050"),b("meta",{property:"og:image",content:t.ogImage.url})),b("div",{className:"text-left"},b(y,{title:t.title,coverImage:t.coverImage,date:t.date,author:t.author}),b(m,{content:t.content}),b("div",null,b("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button","data-show-count":"false"},"Tweet"))))))):b(o.a,{statusCode:404})}},ZW3T:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n("GlJ9")}])},eomm:function(e,t,n){e.exports=n("/a9y")},qtBi:function(e,t,n){e.exports={markdown:"markdown-styles_markdown__1x9gM"}}},[["ZW3T",0,2,1,3]]]);