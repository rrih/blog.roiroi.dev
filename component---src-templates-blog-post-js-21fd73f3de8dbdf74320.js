(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{q4sD:function(e,t,a){},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return p}));a("VRzm"),a("Btvt");var r=a("o0o1"),n=a.n(r),l=(a("ls82"),a("q1tI")),m=a.n(l),s=a("Wbzz"),c=a("vDqi"),o=a.n(c),i=a("vOnD"),d=a("Bl7J"),h=a("vrFN");a("q4sD");function u(e,t,a,r,n,l,m){try{var s=e[l](m),c=s.value}catch(o){return void a(o)}s.done?t(c):Promise.resolve(c).then(r,n)}t.default=function(e){var t=e.data,a=e.pageContext,r=e.location,c=i.a.div.withConfig({displayName:"blog-post__BlogPostSquareCard",componentId:"sc-19x53f7-0"})(["border-radius:40px;box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15);"]),p=Object(l.useState)(),f=p[0],v=p[1],E=t.markdownRemark,b=t.site.siteMetadata.title,w=a.previous,N=a.next,x=function(){var e,t=(e=n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://api.github.com/users/rrih").then((function(e){var t=m.a.createElement("img",{className:"mb-0 rounded-pill",src:e.data.avatar_url,alt:"rrih-avatar-url",width:100});v(t)}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,n){var l=e.apply(t,a);function m(e){u(l,r,n,m,s,"next",e)}function s(e){u(l,r,n,m,s,"throw",e)}m(void 0)}))});return function(){return t.apply(this,arguments)}}();return Object(l.useEffect)((function(){x()}),[]),m.a.createElement(d.a,{location:r,title:b,className:"d-md-block"},m.a.createElement(h.a,{title:E.frontmatter.title,description:E.frontmatter.description||E.excerpt}),m.a.createElement("div",{className:"container px-0"},m.a.createElement(c,{className:"border my-3 m-md-3 p-3 shadow blog-posts"},m.a.createElement("header",{className:""},m.a.createElement("small",null,"> ",m.a.createElement("a",{href:"/posts"},"記事一覧")," >"," ",m.a.createElement("a",{href:r.href},E.frontmatter.title)),m.a.createElement("div",{className:"h2"},E.frontmatter.title),E.frontmatter.date,"公開"),m.a.createElement("hr",null),m.a.createElement("section",{className:"ml-md-2",dangerouslySetInnerHTML:{__html:E.html}}),m.a.createElement("hr",null),m.a.createElement("div",{className:"share-zone shadow rounded"},m.a.createElement("div",{className:"h5 text-center bg-dark text-light m-0 p-2 rounded-top"},"シェアする"),m.a.createElement("div",{className:"border rounded-bottom px-2 px-md-5 py-2 text-center"},m.a.createElement("div",null,m.a.createElement("a",{className:"btn btn-outline-primary rounded-pill w-100 my-2 shadow",href:"http://twitter.com/intent/tweet?url="+("undefined"!==r.href?r.href:null)+"&text="+E.frontmatter.title+"&via=rrih_dev&hashtags=なにもわからない"},"Twitter")),m.a.createElement("div",null,m.a.createElement("a",{className:"btn btn-outline-dark rounded-pill w-100 my-2 shadow",href:"https://www.facebook.com/sharer/sharer.php?u="+("undefined"!==r.href?r.href:null)+"&t="+E.frontmatter.title},"Facebook")))),m.a.createElement("div",{className:"this-article-author my-4 border rounded shadow"},m.a.createElement("div",{className:"h5 text-center bg-dark text-light rounded-top p-2"},"Author"),m.a.createElement("div",{className:"p-3 d-flex justify-content-around align-items-center"},m.a.createElement("div",{className:"py-3 pl-md-3 d-sm-none"},m.a.createElement("a",{href:"https://github.com/rrih",target:"_blank",className:"shadow",rel:"noopener noreferrer"},f)),m.a.createElement("div",{className:"py-3 d-none d-sm-block"},m.a.createElement("a",{href:"https://github.com/rrih",target:"_blank",className:"shadow",rel:"noopener noreferrer"},f)),m.a.createElement("div",{className:"pl-3 py-3",style:{minWidth:"200px"}},m.a.createElement("div",{className:"h5"},"rrih"),m.a.createElement("div",{className:"d-sm-none"},m.a.createElement("small",null,"某大学4年生。なにもわかっていない人です。"),m.a.createElement("div",{className:"d-flex my-2"},m.a.createElement("div",{className:"mr-1 mr-md-3"},m.a.createElement("a",{href:"https://twitter.com/rrih_dev",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-primary rounded-pill px-4 py-2 shadow"},m.a.createElement("small",null,"Twitter"))))),m.a.createElement("div",{className:"d-none d-sm-block"},"某大学4年生。なにもわかっていない人です。",m.a.createElement("div",{className:"d-flex my-2"},m.a.createElement("div",{className:"mr-1 mr-md-3"},m.a.createElement("a",{href:"https://twitter.com/rrih_dev",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline-primary rounded-pill px-4 py-2 shadow"},"Twitter")))))))),m.a.createElement("nav",{className:"d-md-flex justify-content-between p-2"},m.a.createElement("div",{className:"my-2"},w&&m.a.createElement("div",{className:"mx-2"},m.a.createElement("span",{role:"img","aria-labelledby":"right"},"←"),m.a.createElement("div",null,m.a.createElement(s.Link,{to:w.fields.slug,rel:"prev",className:"btn btn-dark w-100 shadow p-3"},w.frontmatter.title)))),m.a.createElement("div",{className:"my-2"},N&&m.a.createElement("div",{className:"mx-2"},m.a.createElement("div",{className:"text-right"},"→"),m.a.createElement("div",null,m.a.createElement(s.Link,{to:N.fields.slug,rel:"next",className:"btn btn-dark w-100 shadow p-3"},N.frontmatter.title))))),m.a.createElement("div",{className:"text-center pb-2"},m.a.createElement("a",{href:"/posts"},"記事一覧へ戻る"))))};var p="3920954734"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-21fd73f3de8dbdf74320.js.map