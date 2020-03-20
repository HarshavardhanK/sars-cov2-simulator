(this["webpackJsonpsars-cov-2-simulator"]=this["webpackJsonpsars-cov-2-simulator"]||[]).push([[0],{83:function(e,t,a){e.exports=a(94)},88:function(e,t,a){},89:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(14),o=a.n(i),l=(a(88),a(122)),s=a(135),m=a(132),u=a(130),d=a(127),E=a(129),p=a(67),g=a.n(p),f=(a(89),a(27)),h=a(125),v=a(43),b=a(34),w=a(95),O=a(134),j=a(68),C=a(136),D=Object(l.a)({slider:{width:150}}),A=function(e){var t=e.title,a=e.onChange,n=e.percent,r=void 0!==n&&n,i=Object(j.a)(e,["title","onChange","percent"]),o=D(),l=function(e){return void 0===e?"":r?"".concat(e,"%"):e};return c.a.createElement(h.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:0},c.a.createElement(h.a,{item:!0,container:!0,direction:"row",spacing:1,alignItems:"center"},c.a.createElement(h.a,{item:!0},c.a.createElement(d.a,null,l(i.min))),c.a.createElement(h.a,{item:!0,className:o.slider},c.a.createElement(C.a,Object.assign({"aria-labelledby":"discrete-slider",valueLabelDisplay:"on",valueLabelFormat:l,onChangeCommitted:function(e,t){a(i.name,t)}},i))),c.a.createElement(h.a,null,c.a.createElement(d.a,null,l(i.max)))),c.a.createElement(h.a,{item:!0},c.a.createElement(d.a,{id:"discrete-slider",variant:"caption"},t)))},N=[{title:"Average spread (R0)",name:"R0",min:0,max:3,step:.1,defaultValue:2.2},{title:"Average spread shutdown (R0)",name:"shutdownR0",min:0,max:3,step:.1,defaultValue:1.05},{title:"Mortality Rate",name:"mortalityRate",min:0,max:5,step:.5,defaultValue:.5,percent:!0},{title:"Mortality Rate Overflow",name:"mortalityRateOverflow",min:0,max:7,step:.5,defaultValue:3,percent:!0},{title:"Hospitalization Rate",name:"hospitalizationRate",min:0,max:25,step:1,defaultValue:15,percent:!0},{title:"Hospital stay in weeks",name:"hospitalStayInWeeks",min:0,max:2,step:.1,defaultValue:.3}],x=Object(l.a)((function(e){return Object(s.a)({root:{paddingTop:e.spacing(4),paddingLeft:e.spacing(6),paddingRight:e.spacing(2),width:250},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}})}));function R(e,t){switch(t.type){case n.CHANGE_SLIDER_VALUE:return Object(b.a)({},e,Object(v.a)({},t.sliderName,t.value));case n.CHANGE_START_DATE:return Object(b.a)({},e,{startDate:t.startDate});default:return e}}!function(e){e[e.CHANGE_SLIDER_VALUE=0]="CHANGE_SLIDER_VALUE",e[e.CHANGE_START_DATE=1]="CHANGE_START_DATE"}(n||(n={}));var y=N.reduce((function(e,t){return e[t.name]=t.defaultValue,e}),{});y.startDate=new Date("1/1/2020");var T=function(e){var t=e.onChange,a=x(),i=c.a.useReducer(R,y),o=Object(f.a)(i,2),l=o[0],s=o[1];Object(r.useEffect)((function(){t(l)}),[l]);var m=function(e,t){s({type:n.CHANGE_SLIDER_VALUE,sliderName:e,value:t})};return c.a.createElement(w.a,{elevation:3,className:a.root},c.a.createElement(h.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:10},c.a.createElement(h.a,{item:!0},c.a.createElement(d.a,null,"Control Values")),c.a.createElement(h.a,{item:!0},c.a.createElement(O.a,{onChange:function(e){s({type:n.CHANGE_START_DATE,startDate:e})},variant:"inline",value:l.startDate,label:"Infection Start date"})),N.map((function(e){return c.a.createElement(h.a,{item:!0,key:e.name},c.a.createElement(A,Object.assign({},e,{onChange:m})))}))))},_=a(50),I=a.n(_),S=a(64),V=a.n(S),B=Object(l.a)((function(e){return Object(s.a)({root:{padding:e.spacing(4),width:"100%"},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},chartContainer:{height:"100%"}})})),G=function(e){var t=e.config,a=B();return c.a.createElement(w.a,{elevation:3,className:a.root},c.a.createElement(V.a,{containerProps:{className:a.chartContainer},highcharts:I.a,options:t}))},L=a(48),H=a(47),k=a(17),U=a(128),W=a(66),M=a.n(W),z=a(65),J=a.n(z),F=Object(l.a)((function(e){return Object(s.a)({root:{padding:e.spacing(4)},marginBottom:{marginBottom:e.spacing(2)},marginTop:{marginTop:e.spacing(2)}})})),P=function(e){var t=e.onChange,a=F(),n=c.a.useState([]),r=Object(f.a)(n,2),i=r[0],o=r[1];c.a.useEffect((function(){t(i)}),[i]);var l=function(e){return function(){i.splice(e,1),o(Object(L.a)(i))}},s=function(e){return function(t){return function(a){e[t]=a,o(Object(L.a)(i))}}};return c.a.createElement(k.a,{utils:H.a},c.a.createElement(w.a,{elevation:3,className:a.root},c.a.createElement(h.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:2},c.a.createElement(d.a,{className:a.marginBottom},"Shutdown Dates"),i.map((function(e,t){return c.a.createElement(h.a,{container:!0,item:!0,direction:"row",spacing:4,alignItems:"center"},c.a.createElement(h.a,{item:!0},c.a.createElement(O.a,{variant:"inline",onChange:s(e)("startDate"),value:e.startDate,label:"Start"})),c.a.createElement(h.a,{item:!0},c.a.createElement(O.a,{variant:"inline",onChange:s(e)("endDate"),value:e.endDate,label:"End"})),c.a.createElement(h.a,{item:!0},c.a.createElement(E.a,{onClick:l(t),"aria-label":"delete"},c.a.createElement(J.a,null))))})),c.a.createElement(h.a,{item:!0,className:a.marginTop},c.a.createElement(U.a,{variant:"contained",startIcon:c.a.createElement(M.a,null),onClick:function(){var e={startDate:new Date,endDate:new Date};o([].concat(Object(L.a)(i),[e]))}},"Add")))))},$=a(131),q=function(e,t){switch(t.type){case"control":return Object(b.a)({},e,{controls:t.controls});case"shutdowns":return Object(b.a)({},e,{shutdowns:t.shutdowns});default:return e}};function K(e){for(var t=[{x:e.controls.startDate,y:1}],a=1;a<20;a++)t[a]={y:Math.floor(t[a-1].y*e.controls.R0),x:Object($.a)(t[a-1].x,1)};return console.log(t),{title:{text:""},xAxis:{type:"datetime"},series:[{name:"Total infected",data:t}]}}var Q=Object(l.a)((function(e){return Object(s.a)({content:{flexGrow:1,flexBasis:"auto",display:"flex"},header:{marginBottom:e.spacing(2)}})})),X=function(){var e=Q(),t=function(){var e=Object(r.useReducer)(q,{controls:{},shutdowns:[]}),t=Object(f.a)(e,2),a=t[0],n=t[1];return[K(a),function(e){return n({type:"control",controls:e})},function(e){return n({type:"shutdowns",shutdowns:e})}]}(),a=Object(f.a)(t,3),n=a[0],i=a[1],o=a[2];return c.a.createElement(k.a,{utils:H.a},c.a.createElement(h.a,{container:!0,spacing:2,direction:"row"},c.a.createElement(h.a,{item:!0},c.a.createElement(T,{onChange:i})),c.a.createElement(h.a,{item:!0,direction:"column",className:e.content,spacing:2},c.a.createElement(h.a,{item:!0,className:e.header},c.a.createElement(P,{onChange:o})),c.a.createElement(h.a,{item:!0,className:e.content},c.a.createElement(G,{config:n})))))},Y=a(133),Z=Object(l.a)((function(e){return Object(s.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},container:{paddingTop:e.spacing(5)}})}));var ee=function(){var e=Z();return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,{position:"static"},c.a.createElement(u.a,null,c.a.createElement(E.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},c.a.createElement(g.a,null)),c.a.createElement(d.a,{variant:"h6",className:e.title},"COVID Simulator"))),c.a.createElement(Y.a,{maxWidth:"lg",className:e.container},c.a.createElement(X,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[83,1,2]]]);
//# sourceMappingURL=main.5e68941c.chunk.js.map