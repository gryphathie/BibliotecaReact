(this.webpackJsonpexamen1=this.webpackJsonpexamen1||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"id":1,"name":"Harry Potter y la Piedra Filosofal","init_date":"25/10/2021","end_date":"04/11/2021","status":"En tiempo","taken_by":"112233","borrowed":true},{"id":2,"name":"El Se\xf1or de los Anillos","init_date":"","end_date":"","status":"En estante","taken_by":" ","borrowed":false},{"id":3,"name":"El Alquimista","init_date":"","end_date":"","status":"En estante","taken_by":"","borrowed":false},{"id":4,"name":"El C\xf3digo Da Vinci","init_date":"11/10/2021","end_date":"21/10/2021","status":"Retrasado","taken_by":"223344","borrowed":true},{"id":5,"name":"Lo que el viento se llevo","init_date":"15/10/2021","end_date":"25/10/2021","status":"En tiempo","taken_by":"334455","borrowed":true},{"id":6,"name":"Juego de Tronos","init_date":"01/10/2021","end_date":"11/10/2021","status":"Retrasado","taken_by":"445566","borrowed":true}]')},22:function(e,t,a){},23:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(1),m=a.n(n),s=a(15),c=a.n(s),r=(a(22),a.p,a(23),a(24),a(16)),l=a(6),i=a(12),d=a(0),z=function(e){var t=e.datos.map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.init_date}),Object(d.jsx)("td",{children:e.end_date}),Object(d.jsx)("td",{children:e.status}),Object(d.jsx)("td",{children:e.taken_by}),Object(d.jsx)("td",{children:e.borrowed?"Si":"No"})]},e.id)})}));return Object(d.jsx)(d.Fragment,{children:t})},j=function(e){var t=e.datos;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("table",{className:"table table-bordered table-light",id:"tablaGastos",children:[Object(d.jsx)("thead",{className:"thead-dark",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"ID"}),Object(d.jsx)("th",{scope:"col",children:"Titulo"}),Object(d.jsx)("th",{scope:"col",children:"Fecha prestamo"}),Object(d.jsx)("th",{scope:"col",children:"Fecha retorno"}),Object(d.jsx)("th",{scope:"col",children:"Estado"}),Object(d.jsx)("th",{scope:"col",children:"Matricula"}),Object(d.jsx)("th",{scope:"col",children:"Prestado"})]})}),Object(d.jsx)("tbody",{children:Object(d.jsx)(z,{datos:t})})]})})},b=a(17),o=a(10),M=function(){var e=Object(n.useState)(i.map((function(e){return e}))),t=Object(l.a)(e,2),a=t[0],m=t[1],s=i.map((function(e){return Object(d.jsx)("option",{children:e.id})})),c=Object(n.useState)(""),z=Object(l.a)(c,2),M=z[0],Z=z[1],x=Object(n.useState)(0),p=Object(l.a)(x,2),u=p[0],T=p[1],h=new Date,N=h.getDate()+"/"+(h.getMonth()+1)+"/"+h.getFullYear(),O=h.getTime()+864e6,f=new Date(O),y=f.getDate()+"/"+(f.getMonth()+1)+"/"+f.getFullYear(),k=function(e){"matricula"===e.target.name?Z(e.target.value):"id_book"===e.target.name&&T(e.target.value)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"container mt-2",children:Object(d.jsx)("div",{className:"d-flex justify-content-center",children:Object(d.jsx)("img",{className:"rounded-circle",src:"data:image/png;base64,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",width:"10%"})})}),Object(d.jsx)("div",{className:"align-self-center py-2",children:Object(d.jsxs)("div",{className:"card border border-2 shadow-lg p-3 mb-5 bg-body rounded mx-5",children:[Object(d.jsx)("h2",{className:"text-center",children:" Biblioteca Virtual "}),Object(d.jsx)("span",{className:"border-bottom border-info"}),Object(d.jsx)("br",{}),Object(d.jsx)("h3",{className:"text-center",children:" Lista de libros: "}),Object(d.jsx)("span",{className:"border-bottom mx-5 "}),Object(d.jsx)("div",{className:"pt-2",children:Object(d.jsx)(j,{datos:a})}),Object(d.jsx)("span",{className:"border-bottom border-info"}),Object(d.jsxs)("div",{className:"row py-3",children:[Object(d.jsx)("div",{className:"col"}),Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("div",{className:"card border border-2 shadow p-4 bg-light",children:[Object(d.jsx)("span",{className:"border-bottom border-info",children:Object(d.jsx)("h3",{className:"text-center",children:"Apartar libro"})}),Object(d.jsx)("br",{}),Object(d.jsxs)(o.a,{onSubmit:function(e){e.preventDefault();var t=Number(u),n=a.find((function(e){return e.id===t}));if(!0===n.borrowed)alert("El libro no esta disponible");else if(!1===n.borrowed&&""!==M){alert("Se aparto el libro con exito!");var s=Object(r.a)(a),c=s.find((function(e){return e.id===t}));c.init_date=N,c.end_date=y,c.status="En tiempo",c.taken_by=M,c.borrowed=!c.borrowed,m(s)}else alert("Datos incorrectos o incompletos")},children:[Object(d.jsxs)(o.a.Group,{size:"lg",children:[Object(d.jsx)(o.a.Label,{children:"Matr\xedcula: "}),Object(d.jsx)(o.a.Control,{autoFocus:!0,name:"matricula",type:"text",maxlength:"6",onChange:k}),Object(d.jsx)("br",{})]}),Object(d.jsx)("label",{children:"Selecciona el id del libro: "}),Object(d.jsxs)("select",{className:"form-control",name:"id_book",onChange:k,children:[Object(d.jsx)("option",{children:" "}),s]}),Object(d.jsx)("div",{className:"d-flex justify-content-center py-3",children:Object(d.jsx)(b.a,{variant:"info",block:!0,size:"lg",type:"submit",children:" Solicitar "})})]})]})}),Object(d.jsx)("div",{className:"col"})]})]})})]})};var Z=function(){return Object(d.jsx)(M,{})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,n=t.getFID,m=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),m(e),s(e),c(e)}))};c.a.render(Object(d.jsx)(m.a.StrictMode,{children:Object(d.jsx)(Z,{})}),document.getElementById("root")),x()}},[[28,1,2]]]);
//# sourceMappingURL=main.71ff0555.chunk.js.map