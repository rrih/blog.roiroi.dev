(this["webpackJsonprrih.github.io"]=this["webpackJsonprrih.github.io"]||[]).push([[0],{148:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),c=a(18),o=a.n(c),l=a(21),i=a.n(l),s=a(40),u=a(17),m=a(30),d=a.n(m),h=a(57),p=a.n(h),f=(a(83),a(84),"https://kyugyo-back.herokuapp.com/api/rrih-todo");var b=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(),l=Object(u.a)(o,2),m=l[0],h=l[1],b=Object(n.useState)(),v=Object(u.a)(b,2),E=v[0],g=v[1],w=Object(n.useState)(""),O=Object(u.a)(w,2),x=O[0],y=O[1],j=Object(n.useState)([]),k=Object(u.a)(j,2),N=k[0],S=k[1],T=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(f).then((function(e){console.log(e.data),S(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://api.github.com/users/rrih").then((function(e){var t=r.a.createElement("a",{href:e.data.html_url,className:"text-decoration-none text-light"},e.data.name);c(t);var a=r.a.createElement("img",{src:e.data.avatar_url,alt:"rrih-avatar-url",width:30});h(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){T(),C()}),[]),r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar bg-success text-light"},r.a.createElement("div",null,a,"\u306eTODO"),r.a.createElement("div",null,"\u305f\u3060 ",a," ",m," \u304c\u3084\u308b\u3053\u3068\u3092\u4e26\u3079\u308b\u3060\u3051\u306e\u30b5\u30a4\u30c8")),r.a.createElement("div",{className:"rrih-w mx-md-auto container pt-md-2"},r.a.createElement("div",{className:"d-md-flex"},r.a.createElement("div",{className:"ml-md-5"},r.a.createElement("form",{className:"form-group",method:"post"},r.a.createElement("div",null,r.a.createElement("label",null,"\u671f\u65e5"),r.a.createElement(p.a,{dateFormat:"yyyy/MM/dd",selected:E,showTimeSelect:!0,onChange:function(e){g(e)}})),r.a.createElement("div",null,r.a.createElement("label",null,"\u5185\u5bb9"),r.a.createElement("input",{type:"text",placeholder:"todo",className:"input todo...",name:"todo",onChange:function(e){y(e.target.value)}})),r.a.createElement("button",{type:"button",className:"btn btn-outline-success",onClick:function(e){if(null==x||null==E)throw new Error("Validation Error");var t={text:x,date:E.toString().split("T")[0]};d.a.post(f,t).then((function(e){window.location.reload()}))}},"TODO\u3092\u751f\u6210\u3059\u308b")))),r.a.createElement("ul",{className:"list-group mb-5"},N.map((function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item list-group-item-light text-dark my-1 d-flex justify-content-between"},r.a.createElement("div",{className:""},e.text),r.a.createElement("div",{className:""},e.date))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports=a(148)},84:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.44fa2161.chunk.js.map