(this["webpackJsonpmaths-practice"]=this["webpackJsonpmaths-practice"]||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(17),l=a.n(c),r=(a(30),a(18)),o=a(19),m=a(24),s=a(23),u=(a(31),a(32),function(){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"header_left"},i.a.createElement("p",null,"Maths Practice")),i.a.createElement("div",{className:"header_right"},i.a.createElement("p",null,"Date: ",(new Date).toLocaleDateString())))}),d=a(8),E=(a(33),a(34),function(e){return i.a.createElement("div",{className:"homepage"},i.a.createElement("h1",null,"Welcome!"),i.a.createElement("br",null),i.a.createElement("div",{className:"homepage__content"},i.a.createElement("p",null,"Select type of problems:"),i.a.createElement("div",{className:"questions-select"},i.a.createElement(d.a,{placeholder:"Select a type",options:["Simple Division"],onSelect:function(t){"Simple Division"===t.value&&e.history.push("/division")}}))))}),f=a(20),p=a(1),v=a(10),h=a(9),b=a(12),N=function(e){var t=e.difficulty,a=i.a.useState({}),c=Object(v.a)(a,2),l=c[0],r=c[1];Object(n.useEffect)((function(){r(o())}),[t]);var o=function(){return{dividend:Math.floor(1e3*Math.random()*("Medium"===t?100:1)),divisor:"Medium"===t?Math.floor(10*Math.random()+10):Math.floor(Math.floor(10*Math.random()+1))}},m=function(e){r(Object(b.a)(Object(b.a)({},l),{},Object(h.a)({},e.target.id,e.target.value)))};return i.a.createElement("div",{className:"question division_q"},i.a.createElement("div",{className:"question-formatted"},i.a.createElement("b",null,"Question: "),i.a.createElement("span",{className:"numbers-1"},l.divisor+" "),i.a.createElement("span",{className:"numbers-2"},"\xa0",l.dividend)),i.a.createElement("div",{className:"answer-section"},i.a.createElement("b",null,"Answer:"),i.a.createElement("div",{className:"answer"},i.a.createElement("input",{type:"number",id:"quotient",onChange:m,placeholder:"Enter Quotient"}),i.a.createElement("input",{type:"number",id:"remainder",onChange:m,placeholder:"Enter Remainder"}),i.a.createElement("button",{className:"division-answer-submit",type:"button",onClick:function(){var e=Math.floor(l.dividend%l.divisor),t=parseInt((l.dividend/l.divisor).toFixed(1));l.remainder==e&&l.quotient==t?(alert("Correct"),r(o())):alert("Incorrect")}},"Submit"))))},y=(a(35),function(e){var t=i.a.useState(""),a=Object(v.a)(t,2),n=a[0],c=a[1];return i.a.createElement("div",{className:"simple-division"},i.a.createElement("h1",null,"Simple Division"),i.a.createElement("div",{className:"division-content"},i.a.createElement("h2",null,"Select Difficulty:"),i.a.createElement("div",{className:"difficultySelect"},i.a.createElement(d.a,{placeholder:"Difficulty",options:["Easy","Medium"],onSelect:function(e){c(e.value)}}))),n&&i.a.createElement(N,{difficulty:n}))}),S=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u,null),i.a.createElement("div",{className:"main"},i.a.createElement(f.a,null,i.a.createElement(p.a,{path:"/",exact:!0,component:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,e))}}),i.a.createElement(p.a,{path:"/division",strict:!0,component:function(){return i.a.createElement(y,null)}}))))}}]),a}(n.Component);l.a.render(i.a.createElement(S,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.e551374f.chunk.js.map