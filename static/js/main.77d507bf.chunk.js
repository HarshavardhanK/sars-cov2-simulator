(this["webpackJsonpsars-cov-2-simulator"]=this["webpackJsonpsars-cov-2-simulator"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),o=a(14),c=a.n(o),l=(a(96),a(130)),s=a(146),u=a(141),m=a(138),d=a(135),E=a(137),f=a(73),p=a.n(f),g=(a(97),a(29)),v=a(133),h=a(48),O=a(33),N=a(103),b=a(143),w=a(144),C=a(75),A=a(147),y=Object(l.a)({slider:{width:150}}),R=function(e){var t=e.title,a=e.onChange,n=e.percent,r=void 0!==n&&n,o=Object(C.a)(e,["title","onChange","percent"]),c=y(),l=function(e){return void 0===e?"":r?"".concat(e,"%"):e};return i.a.createElement(v.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:0},i.a.createElement(v.a,{item:!0,container:!0,direction:"row",spacing:1,alignItems:"center"},i.a.createElement(v.a,{item:!0},i.a.createElement(d.a,null,l(o.min))),i.a.createElement(v.a,{item:!0,className:c.slider},i.a.createElement(A.a,Object.assign({"aria-labelledby":"discrete-slider",valueLabelDisplay:"on",valueLabelFormat:l,onChangeCommitted:function(e,t){a(o.name,t)}},o))),i.a.createElement(v.a,null,i.a.createElement(d.a,null,l(o.max)))),i.a.createElement(v.a,{item:!0},i.a.createElement(d.a,{id:"discrete-slider",variant:"caption"},t)))},j=[{title:"Average spread (R0)",name:"R0",min:0,max:3,step:.1,defaultValue:2.2},{title:"Average spread shutdown (R0)",name:"shutdownR0",min:0,max:3,step:.1,defaultValue:1.05},{title:"Mortality Rate",name:"mortalityRate",min:0,max:5,step:.5,defaultValue:.5,percent:!0},{title:"Mortality Rate Overflow",name:"mortalityRateOverflow",min:0,max:7,step:.5,defaultValue:3,percent:!0},{title:"Hospitalization Rate",name:"hospitalizationRate",min:0,max:25,step:1,defaultValue:15,percent:!0},{title:"Hospital stay in weeks",name:"hospitalStayInWeeks",min:0,max:2,step:.1,defaultValue:.3}];!function(e){e[e.CHANGE_SLIDER_VALUE=0]="CHANGE_SLIDER_VALUE",e[e.CHANGE_START_DATE=1]="CHANGE_START_DATE",e[e.CHANGE_POPULATION=2]="CHANGE_POPULATION",e[e.CHANGE_BEDS=3]="CHANGE_BEDS"}(n||(n={}));var H=j.reduce((function(e,t){return e[t.name]=t.defaultValue,e}),{});H.infectionStartDate=new Date("1/1/2020"),H.totalPopulation=331e6,H.totalHospitalBeds=1e6;var T=Object(l.a)((function(e){return Object(s.a)({root:{paddingTop:e.spacing(4),paddingLeft:e.spacing(6),paddingRight:e.spacing(2),width:250},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}})}));function I(e,t){switch(t.type){case n.CHANGE_SLIDER_VALUE:return Object(O.a)({},e,Object(h.a)({},t.sliderName,t.value));case n.CHANGE_START_DATE:return Object(O.a)({},e,{infectionStartDate:t.infectionStartDate});case n.CHANGE_POPULATION:return Object(O.a)({},e,{totalPopulation:t.value});case n.CHANGE_BEDS:return Object(O.a)({},e,{totalHospitalBeds:t.value});default:return e}}var _,D=function(e){var t=e.onChange,a=T(),o=i.a.useReducer(I,H),c=Object(g.a)(o,2),l=c[0],s=c[1];Object(r.useEffect)((function(){t(l)}),[l]);var u=function(e,t){s({type:n.CHANGE_SLIDER_VALUE,sliderName:e,value:t})};return i.a.createElement(N.a,{elevation:3,className:a.root},i.a.createElement(v.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:8},i.a.createElement(v.a,{item:!0},i.a.createElement(d.a,null,"Control Values")),i.a.createElement(v.a,{item:!0},i.a.createElement(b.a,{label:"Total population",onChange:function(e,t){s({type:n.CHANGE_POPULATION,value:t})},value:l.totalPopulation})),i.a.createElement(v.a,{item:!0},i.a.createElement(w.a,{onChange:function(e){s({type:n.CHANGE_START_DATE,startDate:e})},variant:"inline",value:l.infectionStartDate,label:"Infection Start date"})),i.a.createElement(v.a,{item:!0},i.a.createElement(b.a,{label:"Total hospital beds",onChange:function(e,t){s({type:n.CHANGE_BEDS,value:t})},value:l.totalHospitalBeds})),j.map((function(e){return i.a.createElement(v.a,{item:!0,key:e.name},i.a.createElement(R,Object.assign({},e,{onChange:u})))}))))},G=a(56),S=a.n(G),x=a(70),L=a.n(x),B=Object(l.a)((function(e){return Object(s.a)({root:{padding:e.spacing(4),width:"100%"},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},chartContainer:{height:"100%"}})})),k=function(e){var t=e.config,a=B();return i.a.createElement(N.a,{elevation:3,className:a.root},i.a.createElement(L.a,{containerProps:{className:a.chartContainer},highcharts:S.a,options:t}))},P=a(54),V=a(136),U=a(72),M=a.n(U),W=a(71),z=a.n(W),J=Object(l.a)((function(e){return Object(s.a)({root:{padding:e.spacing(4)},marginBottom:{marginBottom:e.spacing(2)},marginTop:{marginTop:e.spacing(2)}})})),F=function(e){var t=e.onChange,a=J(),n=i.a.useState([]),r=Object(g.a)(n,2),o=r[0],c=r[1];i.a.useEffect((function(){t(o)}),[o]);var l=function(e){return function(){o.splice(e,1),c(Object(P.a)(o))}},s=function(e){return function(t){return function(a){e[t]=a,c(Object(P.a)(o))}}};return i.a.createElement(N.a,{elevation:3,className:a.root},i.a.createElement(v.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:2},i.a.createElement(d.a,{className:a.marginBottom},"Shutdown Dates"),o.map((function(e,t){return i.a.createElement(v.a,{container:!0,item:!0,direction:"row",spacing:4,alignItems:"center"},i.a.createElement(v.a,{item:!0},i.a.createElement(w.a,{variant:"inline",onChange:s(e)("start"),value:e.start,label:"Start"})),i.a.createElement(v.a,{item:!0},i.a.createElement(w.a,{variant:"inline",onChange:s(e)("end"),value:e.end,label:"End"})),i.a.createElement(v.a,{item:!0},i.a.createElement(E.a,{onClick:l(t),"aria-label":"delete"},i.a.createElement(z.a,null))))})),i.a.createElement(v.a,{item:!0,className:a.marginTop},i.a.createElement(V.a,{variant:"contained",startIcon:i.a.createElement(M.a,null),onClick:function(){var e={start:new Date,end:new Date};c([].concat(Object(P.a)(o),[e]))}},"Add"))))},$=a(139),q=a(140);function K(e,t){try{return t.some((function(t){return Object(q.a)(e,t)}))}catch(a){return!1}}!function(e){e[e.CHANGE_CONTROL=0]="CHANGE_CONTROL",e[e.CHANGE_SHUTDOWN=1]="CHANGE_SHUTDOWN"}(_||(_={}));var Q=function(e,t){switch(t.type){case _.CHANGE_CONTROL:return Object(O.a)({},e,{controls:t.controls});case _.CHANGE_SHUTDOWN:return Object(O.a)({},e,{shutdowns:t.shutdowns});default:return e}};function X(e){var t={title:{text:""},yAxis:{type:"logarithmic",title:"Number of people"},xAxis:{type:"datetime",title:"Date",gridLineWidth:1},plotOptions:{line:{lineWidth:4}},series:function(e){var t={};return e.forEach((function(e){Object.keys(e).forEach((function(a){t[a]=t[a]||{name:a,data:[],visible:!1},t[a].data.push({x:e.week,y:e[a]})}))})),delete t.week,delete t.weekNum,t.totalInfected.visible=!0,t.dead.visible=!0,t.newInfected.visible=!0,Object.values(t)}(function(e){for(var t=e.controls,a=t.totalPopulation,n=t.infectionStartDate,r=t.R0,i=t.shutdownR0,o=t.mortalityRate,c=t.mortalityRateOverflow,l=t.hospitalizationRate,s=t.totalHospitalBeds,u=[{week:n,weekNum:0,healthy:a-1,newInfected:1,totalInfected:1,currentlyInfected:1,recovered:0,dead:0,hospitalized:0,movingMortalityRate:o}],m=1;m<100;m++){var d,E,f=Object($.a)(n,m),p=K(f,e.shutdowns)?i:r,g=u[m-1],v=u[m-2],h=(null===(d=u[m-3])||void 0===d?void 0:d.newInfected)||0,O=(null===(E=u[m-3])||void 0===E?void 0:E.currentlyInfected)||0,N=Math.round(g.healthy/a*g.newInfected*p),b=g.totalInfected+N,w=N+g.newInfected+((null===v||void 0===v?void 0:v.newInfected)||0),C=Math.round((1-g.movingMortalityRate/100)*h)+g.recovered,A=Math.round(h*g.movingMortalityRate/100)+g.dead,y=Math.round(O*l/100),R=y<s?o:(c*(y-s)+o*s)/y,j=a-w-C-A;u[m]={week:f,weekNum:m,newInfected:N,totalInfected:b,currentlyInfected:w,recovered:C,dead:A,hospitalized:y,movingMortalityRate:R,healthy:j}}return u}(e))};return console.log(t),t}var Y=a(17),Z=a(74),ee=Object(l.a)((function(e){return Object(s.a)({content:{flexGrow:1,flexBasis:"auto",display:"flex"},header:{marginBottom:e.spacing(2)}})})),te=function(){var e=ee(),t=function(){var e=Object(r.useReducer)(Q,{controls:{},shutdowns:[]}),t=Object(g.a)(e,2),a=t[0],n=t[1];return[X(a),function(e){return n({type:_.CHANGE_CONTROL,controls:e})},function(e){return n({type:_.CHANGE_SHUTDOWN,shutdowns:e})}]}(),a=Object(g.a)(t,3),n=a[0],o=a[1],c=a[2];return i.a.createElement(Y.a,{utils:Z.a},i.a.createElement(v.a,{container:!0,spacing:2,direction:"row"},i.a.createElement(v.a,{item:!0},i.a.createElement(D,{onChange:o})),i.a.createElement(v.a,{item:!0,direction:"column",className:e.content,spacing:2},i.a.createElement(v.a,{item:!0,className:e.header},i.a.createElement(F,{onChange:c})),i.a.createElement(v.a,{item:!0,className:e.content},i.a.createElement(k,{config:n})))))},ae=a(142),ne=Object(l.a)((function(e){return Object(s.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},container:{paddingTop:e.spacing(2)}})}));var re=function(){var e=ne();return i.a.createElement("div",{className:"App"},i.a.createElement(u.a,{position:"static"},i.a.createElement(m.a,null,i.a.createElement(E.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},i.a.createElement(p.a,null)),i.a.createElement(d.a,{variant:"h6",className:e.title},"COVID Simulator"))),i.a.createElement(ae.a,{maxWidth:"lg",className:e.container},i.a.createElement(te,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){e.exports=a(102)},96:function(e,t,a){},97:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.77d507bf.chunk.js.map