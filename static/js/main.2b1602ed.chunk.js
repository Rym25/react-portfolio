(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{24:function(e,t,a){},26:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Biopic.2778e9e4.png"},38:function(e,t,a){var c={"./Note-Taker.jpg":39,"./Password-Generator.jpg":40,"./Regex-Tutorial.jpg":41,"./RofD.png":42,"./Weather-Dashboard.jpg":43,"./quixotic.jpg":44};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=s,e.exports=r,r.id=38},39:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Note-Taker.d125ab3b.jpg"},40:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Password-Generator.44ef0a16.jpg"},41:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Regex-Tutorial.2abbb226.jpg"},42:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/RofD.0ac79f56.png"},43:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Weather-Dashboard.eb848663.jpg"},44:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/quixotic.31191414.jpg"},45:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Resume.7d85f783.txt"},46:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a.n(c),s=a(10),i=a.n(s),n=(a(24),a(25),a(9)),o=(a(26),a(1));var l=function(e){var t=e.categories,a=e.setCurrentCategory,c=e.currentCategory;return Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"flex-row",children:t.map((function(e){return Object(o.jsx)("li",{className:"li-m ".concat(c.name===e.name&&"font-weight-bold"),children:Object(o.jsx)("span",{onClick:function(){a(e.name)},children:e.name})},e.name)}))})})},j=function(e){var t=e.categories,a=void 0===t?[]:t,c=e.setCurrentCategory,r=e.currentCategory;return Object(o.jsxs)("div",{className:"App-header",children:[Object(o.jsx)("h1",{className:"display-3",children:"Ryely Moore"}),Object(o.jsx)(l,{categories:a,currentCategory:r,setCurrentCategory:c})]})},u=function(e){return Object(o.jsxs)("div",{className:"App-footer",children:[Object(o.jsx)("a",{href:"https://github.com/Rym25",children:"GitHub"}),Object(o.jsx)("a",{href:"www.linkedin.com/in/ryely-moore-452322a3",children:"LinkedIn"})]})},d=function(){return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h3",{children:"About Me"}),Object(o.jsx)("img",{src:a(28).default,alt:"Picture of Ryely with dog Cash on lap",className:"biopic"}),Object(o.jsx)("p",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit vero sapiente itaque quas in dolorum consequatur saepe explicabo cupiditate voluptatibus debitis sed ipsum consectetur, dolorem, aliquid velit voluptate alias minima?"})]})},h=a(11),m=a(14),b=a(47),p=a(48),g=a(49),x=a(50),f=a(51),O=a(58),v=a(52),y=function(){var e=Object(c.useState)({email:"",name:"",message:""}),t=Object(n.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),i=Object(n.a)(s,2),l=i[0],j=i[1],u=function(e){var t=e.target,c=t.name,s=t.value;r(Object(m.a)(Object(m.a)({},a),{},Object(h.a)({},c,s)))},d=function(e){e.target.value?"Form is missing information!"===!l&&e.target.value&&j(""):j("".concat(e.target.name," is required!"))};return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{children:"Contact"}),Object(o.jsxs)(b.a,{onSubmit:function(e){e.preventDefault(),a.email&&a.name&&a.message?(j(""),console.log(a)):j("Form is missing information!")},children:[Object(o.jsxs)(p.a,{row:!0,className:"mb-2",children:[Object(o.jsx)(g.a,{for:"email",sm:2,children:"Email"}),Object(o.jsx)(x.a,{sm:4,children:Object(o.jsx)(f.a,{type:"email",name:"email",id:"email",placeholder:"Your Email Here",value:a.email,onChange:u,onBlur:d})})]}),Object(o.jsxs)(p.a,{row:!0,className:"mb-2",children:[Object(o.jsx)(g.a,{for:"name",sm:2,children:"Name"}),Object(o.jsx)(x.a,{sm:4,children:Object(o.jsx)(f.a,{type:"text",name:"name",id:"name",placeholder:"Your Name Here",value:a.name,onChange:u,onBlur:d})})]}),Object(o.jsxs)(p.a,{row:!0,className:"mb-2",children:[Object(o.jsx)(g.a,{for:"message",sm:2,children:"Message"}),Object(o.jsx)(x.a,{sm:8,children:Object(o.jsx)(f.a,{type:"textarea",name:"message",id:"message",placeholder:"Your Message Here",value:a.message,onChange:u,onBlur:d})})]}),l&&Object(o.jsx)(O.a,{color:"danger",children:l}),Object(o.jsx)(p.a,{check:!0,row:!0,children:Object(o.jsx)(x.a,{sm:{size:10,offset:2},children:Object(o.jsx)(v.a,{children:"Submit"})})})]})]})},N=a(53),C=a(54),w=a(55),R=a(56),P=a(57),k=function(e){var t=e.projects;return Object(o.jsx)("div",{className:"d-flex flex-wrap space-between",children:t.map((function(e){return Object(o.jsxs)(N.a,{className:"project-card col-md-4 col-lg-3 col-12",children:[Object(o.jsx)(C.a,{src:a(38)("./".concat(e.imgPath)).default,alt:"Image of the app ".concat(e.name)}),Object(o.jsxs)(w.a,{children:[Object(o.jsx)(R.a,{tag:"h3",children:Object(o.jsx)("a",{href:e.hostUrl,children:e.name})}),Object(o.jsx)(P.a,{children:Object(o.jsx)("a",{href:e.gitUrl,children:"GitHub"})})]})]},e.name)}))})},D=function(){return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{children:"Portfolio"}),Object(o.jsx)(k,{projects:[{name:"Quixotic Quizzes",imgPath:"quixotic.jpg",gitUrl:"https://github.com/peterjinchristiansen/Quixotic",hostUrl:"https://secure-oasis-07613.herokuapp.com/"},{name:"Random of the Day",imgPath:"RofD.png",gitUrl:"https://github.com/cactido/project-1",hostUrl:"https://cactido.github.io/project-1/index.html?="},{name:"Regex Tutorial",imgPath:"Regex-Tutorial.jpg",gitUrl:"https://gist.github.com/Rym25/df7fe30455914ca4f38dfb7101c5dd28",hostUrl:"https://gist.github.com/Rym25/df7fe30455914ca4f38dfb7101c5dd28"},{name:"Weather Dashboard",imgPath:"Weather-Dashboard.jpg",gitUrl:"https://github.com/Rym25/Weather-Dashboard",hostUrl:"https://rym25.github.io/Weather-Dashboard/"},{name:"Password Generatot",imgPath:"Password-Generator.jpg",gitUrl:"https://github.com/Rym25/Password-Generator",hostUrl:"https://rym25.github.io/Password-Generator/"},{name:"Note Taker",imgPath:"Note-Taker.jpg",gitUrl:"https://github.com/Rym25/Note-Taker",hostUrl:" https://peaceful-reef-11603.herokuapp.com/"}]})]})},U=function(){return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{children:"Resume"}),Object(o.jsx)("span",{children:"Download My Resume: "}),Object(o.jsx)("a",{href:a(45).default,download:!0,children:"Resume"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("h5",{children:"Front-End Proficiency"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"HTML"}),Object(o.jsx)("li",{children:"CSS"}),Object(o.jsx)("li",{children:"Bootstrap"}),Object(o.jsx)("li",{children:"React"}),Object(o.jsx)("li",{children:"Reactstrap"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h5",{children:"Back-End Proficiency"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"MySQL"}),Object(o.jsx)("li",{children:"Express.js"}),Object(o.jsx)("li",{children:"MongoDB"}),Object(o.jsx)("li",{children:"Node.js"})]})]})};var M=function(){var e=Object(c.useState)("About Me"),t=Object(n.a)(e,2),a=t[0],r=t[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{categories:[{name:"About Me"},{name:"Portfolio"},{name:"Contact"},{name:"Resume"}],currentCategory:a,setCurrentCategory:r}),Object(o.jsxs)("main",{children:["About Me"===a&&Object(o.jsx)(d,{}),"Portfolio"===a&&Object(o.jsx)(D,{}),"Contact"===a&&Object(o.jsx)(y,{}),"Resume"===a&&Object(o.jsx)(U,{})]}),Object(o.jsx)(u,{})]})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(M,{})}),document.getElementById("root")),T()}},[[46,1,2]]]);
//# sourceMappingURL=main.2b1602ed.chunk.js.map