(this.webpackJsonpcountdowns=this.webpackJsonpcountdowns||[]).push([[0],{134:function(n,e,t){"use strict";t.r(e);var o=t(1),a=t(14),c=t.n(a),r=t(9),d=t(32),i=t(63),u=localStorage.getItem("countdowns"),s=null!==u?JSON.parse(u):[],l=new URLSearchParams(window.location.search),j=l.get("name"),w=l.get("time");if(j&&w){var f=parseInt(w);if(!isNaN(f)){var b=s.some((function(n){return n.name===j&&n.time===f}));console.log(b),b||s.push({name:j,time:f})}}var m={now:(new Date).getTime(),countdowns:s},h=Object(d.b)({name:"countdowns",initialState:m,reducers:{addCountdown:function(n,e){var t=e.payload,o=t.name,a=t.time;n.countdowns.push({name:o,time:a})},deleteCountdown:function(n,e){var t=e.payload.index;n.countdowns.splice(t,1)},reorderCountdown:function(n,e){var t=e.payload,o=t.start,a=t.end,c=Array.from(n.countdowns),r=c.splice(o,1),d=Object(i.a)(r,1)[0];c.splice(a,0,d),n.countdowns=c},updateCountdownName:function(n,e){var t=e.payload,o=t.index,a=t.name;n.countdowns[o].name=a},updateCountdownDate:function(n,e){var t=e.payload,o=t.index,a=t.time;n.countdowns[o].time=a},updateNow:function(n,e){var t=e.payload.now;n.now=t}}}),g=h.actions,O=g.addCountdown,p=g.deleteCountdown,v=g.reorderCountdown,x=g.updateCountdownName,C=g.updateCountdownDate,y=g.updateNow,N=function(n){return n.countdowns.countdowns},D=function(n){return n.countdowns.now},I=h.reducer,T=Object(d.a)({reducer:{countdowns:I}}),S=function(){return Object(r.c)()},k=T,M=(t(71),t(17)),P=(t(72),t(60)),R=t.n(P),F=t(59),E=t.n(F),J=(t(74),t(75),t(6)),L=1e3,A=6e4,B=36e5,H=864e5,U=function(n){var e=n.handleDelete,t=n.handleDateChange,a=n.handleNameChange,c=n.name,r=n.date,d=n.remaining,i=Object(o.forwardRef)((function(n,e){var t=n,o=t.onClick,a=t.value;return Object(J.jsx)("button",{className:"date-button",onClick:o,ref:e,children:a})}));return Object(J.jsxs)("div",{className:"countdown",children:[Object(J.jsxs)("div",{children:[Object(J.jsx)(E.a,{html:c,onChange:function(n){a(n.target.value)},tagName:"h1"}),Object(J.jsx)("h2",{children:function(n){var e=n>0;n=Math.abs(n);var t=Math.floor(n/H);n-=t*H;var o=Math.floor(n/B);n-=o*B;var a=Math.floor(n/A);n-=a*A;var c=Math.floor(n/L);n-=c*L;var r="";return t>0&&(r+="".concat(t," day").concat(1===t?"":"s",", ")),(o>0||""!==r)&&(r+="".concat(o," hour").concat(1===o?"":"s",", ")),(a>0||""!==r)&&(r+="".concat(a," minute").concat(1===a?"":"s",", ")),(c>0||""!==r)&&(r+="".concat(c," second").concat(1===c?"":"s")),""===r?"now":e?"in ".concat(r):"".concat(r," ago")}(d)})]}),Object(J.jsx)("div",{children:Object(J.jsx)(R.a,{selected:r,onChange:function(n){return t(n)},timeInputLabel:"Time:",dateFormat:"MM/dd/yyyy h:mm aa",showTimeInput:!0,customInput:Object(J.jsx)(i,{})})}),Object(J.jsx)("button",{className:"countdown-delete",onClick:e,children:"X"})]})},X=function(n){var e=n.index,t=n.countdown,o=Object(r.d)(D),a=S(),c=new Date(t.time);return Object(J.jsx)(U,{name:t.name,date:c,handleDelete:function(){a(p({index:e}))},handleNameChange:function(n){a(x({index:e,name:n}))},handleDateChange:function(n){null!==n&&a(C({index:e,time:n.getTime()}))},remaining:c.getTime()-o})},q=t(35),z=function(n){var e=n.countdowns,t=n.onCreateCountdown,o=n.onReorderCountdown;return Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{children:Object(J.jsx)("button",{onClick:t,children:"Add Countdown"})}),Object(J.jsx)("div",{children:Object(J.jsx)(q.a,{onDragEnd:function(n){o(n.source.index,n.destination.index)},children:Object(J.jsx)(q.c,{droppableId:"droppable",children:function(n,t){return Object(J.jsxs)("div",Object(M.a)(Object(M.a)({},n.droppableProps),{},{ref:n.innerRef,style:(t.isDraggingOver,{}),children:[e.map((function(n,e){return Object(J.jsx)(q.b,{draggableId:e.toString(),index:e,children:function(t,o){return Object(J.jsx)("div",Object(M.a)(Object(M.a)(Object(M.a)({className:"countdown-container",ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:(a=o.isDragging,c=t.draggableProps.style,Object(M.a)({background:a?"#c0c7d1":"#e1e9f7"},c)),children:Object(J.jsx)(X,{index:e,countdown:n})}));var a,c}},e)})),n.placeholder]}))}})})})]})},G=function(){var n=Object(r.d)(N),e=S();Object(o.useEffect)((function(){var n=setInterval((function(){e(y({now:(new Date).getTime()}))}),1e3);return function(){return clearInterval(n)}})),Object(o.useEffect)((function(){localStorage.setItem("countdowns",JSON.stringify(n))}),[n]);return Object(J.jsx)(z,{countdowns:n,onCreateCountdown:function(){var n=new Date;n.setHours(24,0,0,0),e(O({name:"New Countdown",time:n.getTime()}))},onReorderCountdown:function(n,t){e(v({start:n,end:t}))}})},K=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,139)).then((function(e){var t=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),o(n),a(n),c(n),r(n)}))};c.a.render(Object(J.jsx)(r.a,{store:k,children:Object(J.jsx)(G,{})}),document.getElementById("root")),K()},71:function(n,e,t){},72:function(n,e,t){},74:function(n,e,t){}},[[134,1,2]]]);
//# sourceMappingURL=main.f13ae876.chunk.js.map