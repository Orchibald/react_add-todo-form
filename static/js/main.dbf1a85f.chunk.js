(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(9),c=a(2),s=a(7),o=a(5),l=a(1),d=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),u=a(0),m=function(e){var t=e.user,a=t.name,n=t.email;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},j=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(u.jsxs)("article",{"data-id":a,className:"TodoInfo ".concat(i&&"TodoInfo--completed"),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(u.jsx)(m,{user:r})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=["id"];function O(e){return d.find((function(t){return t.id===e}))||null}var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:O(e.userId)})}));function p(e){return Math.max.apply(Math,Object(s.a)(e.map((function(e){return e.id}))))+1}var x=function(){var e=Object(l.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(!1),m=Object(c.a)(i,2),j=m[0],x=m[1],v=Object(l.useState)(0),y=Object(c.a)(v,2),S=y[0],N=y[1],I=Object(l.useState)(!1),C=Object(c.a)(I,2),g=C[0],_=C[1],k=Object(l.useState)(f),D=Object(c.a)(k,2),M=D[0],T=D[1],w=function(e){(e.preventDefault(),x(!a),_(!S),a&&S)&&(!function(e){e.id;var t=Object(r.a)(e,h),a=Object(o.a)({id:p(M)},t);T((function(e){return[].concat(Object(s.a)(e),[a])}))}({id:Math.random(),title:a,userId:S,completed:!1,user:O(S)}),n(""),N(0),x(!1),_(!1))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:w,children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("label",{children:["Title: ",Object(u.jsx)("input",{type:"text","data-cy":"titleInput",placeholder:"Enter a title",value:a,onChange:function(e){n(e.target.value),x(!1)}})]}),j&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("label",{children:["User: ",Object(u.jsxs)("select",{"data-cy":"userSelect",value:S,onChange:function(e){N(+e.target.value),_(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),d.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]}),g&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:w,children:"Add"})]}),Object(u.jsx)(b,{todos:M})]})};i.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.dbf1a85f.chunk.js.map