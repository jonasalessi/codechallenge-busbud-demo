(this["webpackJsonpautocomplete-busbud"]=this["webpackJsonpautocomplete-busbud"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.8131def6.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(5),c=a.n(l),s=(a(12),a(2)),i=a(6),u=a(1),r=(a(13),a(3)),m=function(e){var t=e.calls;return o.a.createElement("div",{className:"average"},"Average response time ",t.sum>0?Number(t.sum/t.times).toFixed(2):"0"," m/s")},g=function(){var e=Object(n.useState)({times:0,sum:0}),t=Object(u.a)(e,2),l=t[0],c=t[1],g=Object(n.useState)(""),d=Object(u.a)(g,2),p=d[0],v=d[1],h=Object(n.useState)(""),f=Object(u.a)(h,2),b=f[0],E=f[1],j=Object(n.useState)({latitude:"",longitude:""}),O=Object(u.a)(j,2),w=O[0],y=O[1],N=Object(n.useState)(null),S=Object(u.a)(N,2),C=S[0],k=S[1],x=function(){var e=function(e){var t=e.calls,a=e.query,n=e.location,o=e.setSuggestions,l=e.setCalls,c=e.setMessage;if(a.length>=3){var s=(new Date).getTime(),i=n.longitude&&n.latitude?"&latitude=".concat(n.latitude,"&longitude=").concat(n.longitude):"";c("Searching..."),fetch("http://gentle-island-08430.herokuapp.com/suggestions?q=".concat(a).concat(i)).then((function(e){return e.json()})).then((function(e){var a;0===(null===(a=e.suggestions)||void 0===a?void 0:a.length)&&c("Match not found!"),o(e.suggestions);var n=(new Date).getTime()-s;l({times:t.times+1,sum:t.sum+n})})).catch((function(e){c(e.message)}))}else c("Please type minimum of 3 letter"),o([])};return[Object(r.debounce)(500,e),Object(r.throttle)(500,e)]}(),A=Object(u.a)(x,2),M=A[0],q=A[1];Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){y({longitude:e.coords.longitude,latitude:e.coords.latitude})}))}),[]);var F=function(e){return function(t){y(Object(i.a)({},w,Object(s.a)({},e,t.target.value)))}};return o.a.createElement("div",{className:"center"},o.a.createElement(m,{calls:l}),o.a.createElement("div",{className:"App-container"},o.a.createElement("img",{className:"App-logo",src:a(14),alt:"Logo challenge Jonas"}),o.a.createElement("div",{className:"App-input-container"},o.a.createElement("input",{className:"App-input-search",placeholder:"Type some city here",type:"text",value:p,onChange:function(e){if(v(e.target.value),!e.target.value)return E(""),void k(null);e.target.value.length<5?q({query:e.target.value,calls:l,location:w,setSuggestions:k,setCalls:c,setMessage:E}):M({query:e.target.value,calls:l,location:w,setSuggestions:k,setCalls:c,setMessage:E})}}),o.a.createElement("input",{className:"App-input-lat",placeholder:"Latitude",type:"text",value:w.latitude,onChange:F("latitude")}),o.a.createElement("input",{className:"App-input-long",placeholder:"Longitude",type:"text",value:w.longitude,onChange:F("longitude")})),(null===C||void 0===C?void 0:C.length)?o.a.createElement("ol",null,C.map((function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{key:e+t,onClick:function(){return t=e,void window.open("https://www.google.com.br/maps/@".concat(t.latitude,",").concat(t.longitude,",15z"));var t}},e.name,o.a.createElement("span",{className:"similarity"},Number(100*e.score).toFixed(2)," % similarity")),o.a.createElement("hr",null))}))):o.a.createElement("div",{className:"message"},b)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b57edcea.chunk.js.map