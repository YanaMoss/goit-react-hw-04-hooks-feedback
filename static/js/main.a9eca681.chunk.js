(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{14:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c,a,i,r,o,s=n(0),d=n.n(s),j=n(7),b=n.n(j),l=(n(14),n(4)),u=n(2),O=n(3),h=O.a.button(c||(c=Object(u.a)(["\n  margin-right: 15px;\n  padding: 10px;\n  margin-left: auto;\n  &:focus {\n    background-color: blue;\n    color: white;\n  }\n"]))),x=n(1),p=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(x.jsx)("div",{children:t.map((function(e){return Object(x.jsx)(h,{onClick:function(){return n(e)},children:e},e)}))})},g=O.a.li(a||(a=Object(u.a)(["\n  list-style: none;\n  padding-left: 15px;\n"]))),f=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(x.jsxs)("ul",{children:[Object(x.jsxs)(g,{children:["Good:",t]}),Object(x.jsxs)(g,{children:["Neutral: ",n]}),Object(x.jsxs)(g,{children:["Bad:",c]}),Object(x.jsxs)(g,{children:["Total:",a]}),Object(x.jsxs)(g,{children:["Positive feedback:",i,"%"]})]})},v=n(6),k=n.n(v),m=O.a.section(i||(i=Object(u.a)(["\n  padding: 30px;\n"]))),w=O.a.h2(r||(r=Object(u.a)(["\n  text-align: center;\n"]))),S=function(e){var t=e.title,n=e.children;return Object(x.jsxs)(m,{children:[Object(x.jsx)(w,{children:t}),n]})};S.propTypec={title:k.a.string.isRequired,children:k.a.element.isRequired};var y,P=O.a.div(o||(o=Object(u.a)(["\n  font-size: 24px;\n  color: orange;\n"]))),q=function(e){var t=e.message;return Object(x.jsx)(P,{children:t})},B=O.a.div(y||(y=Object(u.a)(["\n  display: flex;\n  padding: 15px;\n"])));function F(){var e=Object(s.useState)(0),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(0),i=Object(l.a)(a,2),r=i[0],o=i[1],d=Object(s.useState)(0),j=Object(l.a)(d,2),b=j[0],u=j[1],O=n+r+b,h=Math.round(n/(O/100));return Object(x.jsxs)(B,{children:[Object(x.jsx)(S,{title:"Please leave feedback",children:Object(x.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:function(e){"good"===e&&c(n+1),"neutral"===e&&o(r+1),"bad"===e&&u(b+1)}})}),Object(x.jsx)(S,{title:"Statistics",children:O>0?Object(x.jsx)(f,{good:n,neutral:r,bad:b,total:O,positivePercentage:h}):Object(x.jsx)(q,{message:"No feedback given"})})]})}b.a.render(Object(x.jsx)(d.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.a9eca681.chunk.js.map