(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(4),a=n.n(c),r=(n(9),n(2)),o=(n(10),n(0));var d=function(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)(!1),a=Object(r.a)(c,2),d=a[0],l=a[1],u=Object(i.useState)([]),j=Object(r.a)(u,2),m=j[0],b=j[1];return Object(i.useEffect)((function(){fetch("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts").then((function(e){return e.json()})).then((function(e){l(!0),b(e)}),(function(e){l(!0),s(e)}))}),[]),n?Object(o.jsxs)("div",{children:["Error: ",n.message]}):d?Object(o.jsx)("div",{className:"responsive",children:m.map((function(e){return Object(o.jsxs)("div",{className:"gallery",children:[Object(o.jsx)("a",{href:"{item.thumbnail.small}",children:Object(o.jsx)("img",{src:e.thumbnail.small,alt:"",className:"image"})}),Object(o.jsxs)("div",{className:"desc",children:[Object(o.jsx)("h2",{children:"A Simple guide to design thinking"}),Object(o.jsx)("div",{className:"data",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales. Ornare aenean euismod elementum nisi quis eleifend quam. Cras semper auctor neque vitae tempus. Viverra vitae congue eu consequat."})]}),Object(o.jsx)("div",{class:"middle",children:Object(o.jsx)("div",{class:"text",children:"Learn more"})})]})}))}):Object(o.jsx)("div",{children:"Loading..."})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),s(e),c(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),l()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.f5040a68.chunk.js.map