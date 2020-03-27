(this["webpackJsonpsars-cov-2-simulator"]=this["webpackJsonpsars-cov-2-simulator"]||[]).push([[0],{367:function(e,t,a){e.exports=a(648)},372:function(e,t,a){},373:function(e,t,a){},374:function(e,t,a){},582:function(e,t){},584:function(e,t){},648:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),i=a(36),l=a.n(i),c=(a(372),a(678)),s=a(698),u=a(692),m=a(687),d=a(684),f=a(650),p=a(346),h=a.n(p),g=(a(373),a(77)),E=a(681),w=a(188),v=a(87),b=a(350),N=a(695),O=a(694),I=a(349),C=a(700),y=a(699),A=(a(374),Object(c.a)({slider:{width:150}})),k=function(e){var t=e.title,a=e.onChange,n=e.percent,r=void 0!==n&&n,i=e.tooltip,l=Object(I.a)(e,["title","onChange","percent","tooltip"]),c=A(),s=function(e){return void 0===e?"":r?"".concat(e,"%"):e};return o.a.createElement(E.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:0},o.a.createElement(y.a,{title:i,placement:"right"},o.a.createElement(E.a,{item:!0,container:!0,direction:"row",spacing:1,alignItems:"center"},o.a.createElement(E.a,{item:!0},o.a.createElement(d.a,null,s(l.min))),o.a.createElement(E.a,{item:!0,className:c.slider},o.a.createElement(C.a,Object.assign({"aria-labelledby":"discrete-slider",valueLabelDisplay:"on",valueLabelFormat:s,onChangeCommitted:function(e,t){a(l.name,t)}},l))),o.a.createElement(E.a,null,o.a.createElement(d.a,null,s(l.max))))),o.a.createElement(E.a,{item:!0},o.a.createElement(d.a,{id:"discrete-slider",variant:"caption"},t)))},S=[{title:"Average spread (R0)",name:"R0",min:0,max:3,step:.1,defaultValue:2.2,tooltip:"Average number of people a single person infects."},{title:"Average spread shutdown (R0)",name:"shutdownR0",min:0,max:3,step:.1,defaultValue:1.05,tooltip:"Average number of people a single person infects\n when we are in a shutdown."},{title:"Mortality Rate",name:"mortalityRate",min:0,max:5,step:.1,defaultValue:.5,percent:!0,tooltip:"Percentage of people who die due to the disease."},{title:"Mortality Rate Overflow",name:"mortalityRateOverflow",min:0,max:7,step:.5,defaultValue:3,percent:!0,tooltip:"Percentage of people who die due to the disease, when the medical system is over stressed."},{title:"Hospitalization Rate",name:"hospitalizationRate",min:0,max:25,step:1,defaultValue:15,percent:!0,tooltip:"Percentage of people who need hospitalization."},{title:"Hospital stay in weeks",name:"hospitalStayInWeeks",min:0,max:2,step:.1,defaultValue:.3,tooltip:"Number of weeks a patient needs to stay in the hospital for."}];!function(e){e[e.CHANGE_SLIDER_VALUE=0]="CHANGE_SLIDER_VALUE",e[e.CHANGE_START_DATE=1]="CHANGE_START_DATE",e[e.CHANGE_POPULATION=2]="CHANGE_POPULATION",e[e.CHANGE_INITIAL_NUMBER_OF_CASES=3]="CHANGE_INITIAL_NUMBER_OF_CASES",e[e.CHANGE_BEDS=4]="CHANGE_BEDS"}(n||(n={}));var j=S.reduce((function(e,t){return e[t.name]=t.defaultValue,e}),{});j.infectionStartDate=new Date("1/1/2020"),j.initialNumberOfCases=5,j.totalPopulation=331e6,j.totalHospitalBeds=1e6;var R=Object(c.a)((function(e){return Object(s.a)({root:{paddingTop:e.spacing(4),paddingLeft:e.spacing(6),paddingRight:e.spacing(2),width:250},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)}})}));function _(e,t){switch(t.type){case n.CHANGE_SLIDER_VALUE:return Object(v.a)({},e,Object(w.a)({},t.sliderName,t.value));case n.CHANGE_START_DATE:return Object(v.a)({},e,{infectionStartDate:t.infectionStartDate});case n.CHANGE_POPULATION:return Object(v.a)({},e,{totalPopulation:t.value});case n.CHANGE_BEDS:return Object(v.a)({},e,{totalHospitalBeds:Number(t.value)});case n.CHANGE_INITIAL_NUMBER_OF_CASES:return Object(v.a)({},e,{initialNumberOfCases:Number(t.value)});default:return e}}var T=function(e){var t=e.onChange,a=R(),i=o.a.useReducer(_,j),l=Object(g.a)(i,2),c=l[0],s=l[1];Object(r.useEffect)((function(){t(c)}),[c]);var u=function(e,t){s({type:n.CHANGE_SLIDER_VALUE,sliderName:e,value:t})};return o.a.createElement(b.a,{elevation:3,className:a.root},o.a.createElement(E.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:8},o.a.createElement(E.a,{item:!0},o.a.createElement(d.a,null,"Control Values")),o.a.createElement(E.a,{item:!0},o.a.createElement(N.a,{label:"Total population",onChange:function(e){s({type:n.CHANGE_POPULATION,value:e.target.value})},value:c.totalPopulation})),o.a.createElement(E.a,{item:!0},o.a.createElement(O.a,{onChange:function(e){s({type:n.CHANGE_START_DATE,infectionStartDate:e})},variant:"inline",value:c.infectionStartDate,label:"Start date"})),o.a.createElement(E.a,{item:!0},o.a.createElement(N.a,{label:"Initial infected people",onChange:function(e){s({type:n.CHANGE_INITIAL_NUMBER_OF_CASES,value:e.target.value})},value:c.initialNumberOfCases})),o.a.createElement(E.a,{item:!0},o.a.createElement(N.a,{label:"Total hospital beds",onChange:function(e){s({type:n.CHANGE_BEDS,value:e.target.value})},value:c.totalHospitalBeds})),S.map((function(e){return o.a.createElement(E.a,{item:!0,key:e.name},o.a.createElement(k,Object.assign({},e,{onChange:u})))}))))},D=a(235),H=a.n(D),L=a(340),B=a.n(L),x=Object(c.a)((function(e){return Object(s.a)({root:{padding:e.spacing(4),width:"100%"},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},chartContainer:{height:"100%"}})})),G=function(e){var t=e.config,a=x();return o.a.createElement(b.a,{elevation:3,className:a.root},o.a.createElement(B.a,{containerProps:{className:a.chartContainer},highcharts:H.a,options:t}))},W=a(201),z=a.n(W),P=(a(645),a(646),a(139)),M=a.n(P),U=Object(c.a)((function(e){return Object(s.a)({root:{padding:e.spacing(4),width:"100%",height:"100%"},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},gridContainer:{height:600}})})),V=function(e){return e.data.isShutdown&&(e.cellElement.bgColor="#ffcccb"),e.text},F=function(e){var t=e.columns,a=e.data,n=U(),r=function(e){return"number"===typeof e.value?M()(e.value)+"":e.value+""};return o.a.createElement(b.a,{elevation:3,className:n.root},o.a.createElement(z.a,{elementAttr:{class:n.gridContainer},allowColumnReordering:!0,allowColumnResizing:!0,showRowLines:!0,dataSource:a,showBorders:!0},t.map((function(e){return o.a.createElement(W.Column,{dataField:e,cellRender:V,customizeText:r})})),o.a.createElement(W.Scrolling,{mode:"virtual"})))},J=a(159),$=a(696),q=a(689),K=a(697),Q=a(686),X=a(342),Y=a.n(X),Z=a(344),ee=a.n(Z),te=a(341),ae=a.n(te),ne=a(343),re=a.n(ne),oe=a(688),ie=Object(c.a)((function(e){return Object(s.a)({root:{padding:e.spacing(4)},marginBottom:{marginBottom:e.spacing(2)},marginTop:{marginTop:e.spacing(2)},marginLeft:{marginLeft:e.spacing(2)},marginLeftAuto:{marginLeft:"auto"}})})),le=function(e){var t=e.shutdownWeeks,a=e.startDate,n=e.computeOptimalWeeks,r=e.onChange,i=ie(),l=o.a.useState({shutdownWeeks:[],ranges:[]}),c=Object(g.a)(l,2),s=c[0],u=c[1],m=o.a.useState(!1),p=Object(g.a)(m,2),h=p[0],w=p[1],v=function(e,t){t||(t=function(e,t){return e.reduce((function(e,a){for(var n=Object(K.a)(a.start,t),r=Object(K.a)(a.end,t),o=n;o<r;o++)e[o]=!0;return e}),Array(104).fill(!1))}(e,a)),e||(e=function(e,t){for(var a=[],n=null,r=0;r<t.length;r++)!t[r]&&n&&(a.push(n),n=null),t[r]&&(n?n.end=Object(q.a)(n.end,1):n={start:Object(q.a)(e,r),end:Object(q.a)(e,r+1)});n&&a.push(n);return a}(a,t)),u({ranges:e,shutdownWeeks:t})};o.a.useEffect((function(){r(s)}),[s]),o.a.useEffect((function(){t&&a&&v(null,t)}),[t,a]);var N=function(e){return function(){s.ranges.splice(e,1),v(Object(J.a)(s.ranges),null)}},I=function(e){return function(t){return function(a){e[t]=a,"start"===t&&e.end<a&&(e.end=a),v(Object(J.a)(s.ranges),null)}}},C=function(e){s.shutdownWeeks[Number(e.target.id)]=e.target.checked,v(null,Object(J.a)(s.shutdownWeeks))};return o.a.createElement(b.a,{elevation:3,className:i.root},o.a.createElement(E.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:2},o.a.createElement(E.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(y.a,{title:"Weeks when we will have a shutdown."},o.a.createElement(d.a,{className:i.marginBottom},"Shutdown Dates")),o.a.createElement(E.a,{item:!0},o.a.createElement(E.a,{container:!0,alignItems:"center"},o.a.createElement($.a,{color:"primary",onChange:function(e){w(e.target.checked)}}),o.a.createElement(d.a,{variant:"body2"},"Week view")))),h?o.a.createElement(E.a,{item:!0,container:!0,direction:"row"},s.shutdownWeeks.map((function(e,t){return o.a.createElement(E.a,{item:!0},o.a.createElement(E.a,{container:!0,alignItems:"center"},o.a.createElement(oe.a,{color:"primary",id:t+"",checked:e,onChange:C}),o.a.createElement(d.a,{variant:"caption"},"Week ".concat(t+1))))}))):s.ranges.map((function(e,t){return o.a.createElement(E.a,{container:!0,item:!0,direction:"row",spacing:4,alignItems:"center"},o.a.createElement(E.a,{item:!0},o.a.createElement(O.a,{variant:"inline",onChange:I(e)("start"),value:e.start,label:"Start"})),o.a.createElement(E.a,{item:!0},o.a.createElement(O.a,{variant:"inline",onChange:I(e)("end"),value:e.end,label:"End"})),o.a.createElement(E.a,{item:!0},o.a.createElement(f.a,{onClick:N(t),"aria-label":"delete"},o.a.createElement(ae.a,null))))})),o.a.createElement(E.a,{container:!0,item:!0,className:i.marginTop,spacing:2,alignItems:"center"},o.a.createElement(Q.a,{variant:"contained",startIcon:o.a.createElement(Y.a,null),onClick:function(){var e,t=(null===(e=s.ranges[s.ranges.length-1])||void 0===e?void 0:e.end)||new Date,a={start:t,end:t};v([].concat(Object(J.a)(s.ranges),[a]),null)}},"Add"),o.a.createElement(Q.a,{variant:"contained",className:i.marginLeft,startIcon:o.a.createElement(re.a,null),onClick:function(e){return v([],null)}},"Reset"),o.a.createElement(Q.a,{className:i.marginLeft,variant:"contained",startIcon:o.a.createElement(ee.a,null),onClick:n},"Optimize Shutdowns"))))};var ce,se=a(348),ue=a(691),me=a(345),de=(a(690),function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(me.a)(this,e),this.weekStartDate=void 0,this.weekNum=void 0,this.healthy=0,this.newInfected=0,this.totalInfected=0,this.currentlyInfected=0,this.recovered=0,this.dead=0,this.hospitalized=0,this.isShutdown=!1,Object.assign(this,t)});function fe(e){var t=e.controls,a=t.totalPopulation,n=t.infectionStartDate,r=t.R0,o=t.shutdownR0,i=t.mortalityRate,l=t.mortalityRateOverflow,c=t.initialNumberOfCases,s=t.hospitalizationRate,u=t.totalHospitalBeds;i/=100,l/=100,s/=100;for(var m,d=[new de({weekStartDate:n,weekNum:0,healthy:a-c,newInfected:c,totalInfected:c,currentlyInfected:c,recovered:0,dead:0,hospitalized:0})],f=1;f<104;f++){d[f]=new de,d[f].weekStartDate=Object(q.a)(n,f),d[f].weekNum=f,d[f].isShutdown=e.shutdowns.shutdownWeeks[f];var p=d[f].isShutdown?o:r,h=d[f-1].healthy/a,g=d[f-1].hospitalized<u?i:pe(i,l,u,d[f-1].hospitalized-u);d[f].newInfected=Math.floor(d[f-1].newInfected*p*h),d[f].currentlyInfected=Math.floor(d[f].newInfected+d[f-1].newInfected+(f>=2?d[f-2].newInfected:0)),d[f].totalInfected=d[f-1].totalInfected+d[f].newInfected,f>=3&&(d[f].dead=Math.floor(d[f-1].dead+d[f-3].newInfected*g),d[f].recovered=Math.floor(d[f-1].recovered+d[f-3].newInfected*(1-g))),f>2&&(d[f].hospitalized=Math.floor(d[f-2].newInfected*s)),d[f].healthy=a-(d[f].currentlyInfected+d[f].recovered+d[f].dead),0!==d[f].currentlyInfected||m||(m=f)}return{lastWeekNum:m,weeks:d}}function pe(e,t,a,n){return(e*a+t*n)/(a+n)}!function(e){e[e.CHANGE_CONTROL=0]="CHANGE_CONTROL",e[e.CHANGE_SHUTDOWN=1]="CHANGE_SHUTDOWN"}(ce||(ce={}));var he=function(e,t){switch(t.type){case ce.CHANGE_CONTROL:return Object(v.a)({},e,{controls:t.controls});case ce.CHANGE_SHUTDOWN:return Object(v.a)({},e,{shutdowns:t.shutdowns});default:return e}};function ge(e){var t,a,n=fe(e),r=n.weeks,o=n.lastWeekNum,i=function(e,t){var a=Object(ue.a)(new Date,t);return e-a}(o,e.controls.infectionStartDate),l=function(e){var t={};return e.forEach((function(e){Object.keys(e).forEach((function(a){t[a]=t[a]||{name:a,data:[],visible:!1},t[a].data.push({x:e.weekStartDate,y:e[a]})}))})),delete t.week,delete t.weekNum,delete t.healthy,delete t.weekStartDate,delete t.recovered,delete t.isShutdown,delete t.currentlyInfected,t.hospitalized.visible=!0,t.dead.visible=!0,t.newInfected.visible=!0,Object.values(t)}(r),c={subtitle:{text:""},title:{text:""},yAxis:{type:"logarithmic",title:{text:"Number of people"}},xAxis:{type:"datetime",title:{text:"Date"},gridLineWidth:1,plotBands:(a=e.shutdowns.ranges,a.map((function(e){return{color:"#ffcccb",from:e.start,to:e.end}}))),plotLines:[{value:null===(t=r[o])||void 0===t?void 0:t.weekStartDate,color:"#013220"}]},plotOptions:{line:{lineWidth:5}},tooltip:{formatter:function(){return"<b>".concat(this.series.name,"</b>:").concat(M()(this.y)," <br>")+"".concat(Object(se.a)(this.x,"do MMM y"))}},series:l};return console.log(c),{config:c,weeks:r,weeksToGo:i}}function Ee(e){var t=e.totalPopulation,a=e.totalHospitalBeds,n=e.shutdownR0,r=(e.infectionStartDate,[new de({newInfected:1,totalInfected:1,currentlyInfected:1,healthy:t-1})]),o=Array(104).fill(!1);if(n<1)return function(e){e.R0;for(var t=e.shutdownR0,a=(e.totalPopulation,e.totalHospitalBeds,e.infectionStartDate),n=(e.mortalityRateOverflow,e.hospitalizationRate,fe({controls:e,shutdowns:{shutdownWeeks:[],ranges:[]}}).weeks),r=Object(ue.a)(new Date,a),o=n[r-1].newInfected,i=Math.ceil(-Math.log(o)/Math.log(t)),l=Array(104).fill(!1),c=r;c<r+i-1;c++)l[c]=!0;return l}(e);for(var i=1;i<104;i++){var l,c,s;l=we(e,!1,r[i-1],i>=2?r[i-2]:null,i>=3?r[i-3]:null),c=we(e,!0,l,r[i-1],i>=2?r[i-2]:null),s=we(e,!0,c,l,r[i-1]),l.hospitalized>a||c.hospitalized>a||s.hospitalized>a?(o[i]=!0,r[i]=we(e,o[i],r[i-1],i>=2?r[i-2]:null,i>=3?r[i-3]:null)):(o[i]=!1,r[i]=l)}return o}function we(e,t,a,n,r){var o=e.R0,i=e.shutdownR0,l=e.totalPopulation,c=e.totalHospitalBeds,s=e.mortalityRate,u=e.mortalityRateOverflow,m=e.hospitalizationRate;s/=100,u/=100,m/=100;var d=new de,f=t?i:o,p=a.healthy/l,h=a.hospitalized<c?s:pe(s,u,c,a.hospitalized-c);return d.newInfected=Math.round(a.newInfected*f*p),d.currentlyInfected=d.newInfected+a.newInfected+(null!=n?n.newInfected:0),d.totalInfected=a.totalInfected+d.newInfected,null!=r&&(d.dead=a.dead+r.newInfected*h,d.recovered=a.recovered+r.newInfected*(1-h)),null!=n&&(d.hospitalized=n.newInfected*m),d.healthy=l-(d.currentlyInfected+d.recovered+d.dead),d}var ve=a(49),be=a(347),Ne=Object(c.a)((function(e){return Object(s.a)({root:{padding:e.spacing(2),paddingRight:e.spacing(4),flexGrow:1},marginBottom:{marginBottom:e.spacing(2)},marginTop:{marginTop:e.spacing(2)},marginLeft:{marginLeft:e.spacing(2)},marginLeftAuto:{marginLeft:"auto"}})})),Oe=function(e){var t=e.title,a=e.value,n=e.tooltip,r=Ne();return o.a.createElement(b.a,{className:r.root,elevation:3},o.a.createElement(y.a,{title:n},o.a.createElement(E.a,{container:!0,direction:"column",alignItems:"flex-start",spacing:3},o.a.createElement(E.a,{item:!0},o.a.createElement(d.a,{variant:"body1"},t)),o.a.createElement(E.a,{item:!0},o.a.createElement(d.a,{variant:"h5"},a)))))},Ie=Object(c.a)((function(e){return Object(s.a)({grow:{flexGrow:1,flexBasis:0,display:"flex"},content:{flex:"0 0 700px",minHeight:0,display:"flex",marginBottom:e.spacing(2)},marginBottom:{marginBottom:e.spacing(2)}})})),Ce=["weekNum","healthy","newInfected","totalInfected","currentlyInfected","dead","hospitalized"],ye=Array(104).fill(!1);ye[10]=!0,ye[11]=!0,ye[12]=!0;var Ae=function(){var e,t=Ie(),a=function(){var e=Object(r.useReducer)(he,{controls:{},shutdowns:{ranges:[],shutdownWeeks:[]}}),t=Object(g.a)(e,2),a=t[0],n=t[1];return[a,ge(a),function(e){return n({type:ce.CHANGE_CONTROL,controls:e})},function(e){return n({type:ce.CHANGE_SHUTDOWN,shutdowns:e})}]}(),n=Object(g.a)(a,4),i=n[0],l=n[1],c=l.config,s=l.weeks,u=l.weeksToGo,m=n[2],d=n[3],f=o.a.useState(ye),p=Object(g.a)(f,2),h=p[0],w=p[1];return o.a.createElement(ve.a,{utils:be.a},o.a.createElement(E.a,{container:!0,spacing:2,direction:"row"},o.a.createElement(E.a,{item:!0},o.a.createElement(T,{onChange:m})),o.a.createElement(E.a,{item:!0,direction:"column",className:t.grow,spacing:2},o.a.createElement(E.a,{item:!0,className:t.marginBottom},o.a.createElement(le,{shutdownWeeks:h,startDate:i.controls.infectionStartDate,computeOptimalWeeks:function(){w(Ee(i.controls))},onChange:d})),o.a.createElement(E.a,{item:!0,container:!0,direction:"row",className:t.marginBottom,spacing:2},o.a.createElement(E.a,{item:!0,className:t.grow},o.a.createElement(Oe,{title:"Total Shutdown",tooltip:"Total number of weeks of shutdown",value:"".concat((e=i.shutdowns.shutdownWeeks,e.reduce((function(e,t){return e+(t?1:0)}),0))," weeks")})),o.a.createElement(E.a,{item:!0,className:t.grow},o.a.createElement(Oe,{tooltip:"Number of weeks to complete irradication of coronavirus.",title:"Time before we play again",value:isNaN(u)?"> 2 years":"".concat(u," weeks")})),o.a.createElement(E.a,{item:!0,className:t.grow},o.a.createElement(Oe,{title:"Deaths",tooltip:"Number of people expected to die.",value:M()(s[s.length-1].dead)}))),o.a.createElement(E.a,{item:!0,className:t.content},o.a.createElement(G,{config:c})),o.a.createElement(E.a,{item:!0,className:t.content},o.a.createElement(F,{columns:Ce,data:s})))))},ke=a(693),Se=Object(c.a)((function(e){return Object(s.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},container:{paddingTop:e.spacing(2)}})}));var je=function(){var e=Se();return o.a.createElement("div",{className:"App"},o.a.createElement(u.a,{position:"static"},o.a.createElement(m.a,null,o.a.createElement(f.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},o.a.createElement(h.a,null)),o.a.createElement(d.a,{variant:"h6",className:e.title},"COVID Simulator"))),o.a.createElement(ke.a,{maxWidth:"lg",className:e.container},o.a.createElement(Ae,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[367,1,2]]]);
//# sourceMappingURL=main.fe281588.chunk.js.map