(this["webpackJsonpautocomplete-busbud"]=this["webpackJsonpautocomplete-busbud"]||[]).push([[0],[,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAlAAAAJQBeb8N7wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADQSURBVDiNrdO9TQNBEAXgbzBdkDp0ZBFQAhUALVx2pVCAI0eGEi63RIAI6YAe7OTGAWtpOXw6Ce5JE+zMm//ZyExjiIgWMvN5jHM96v2Nuwk7mflDsECDDociXdEthvyoW4iIG7ziFi/4KKY1HvGOh8z8+lVBybzHJ1YXKlsV276upCY0ONbOWGI5CHJEcylAh2313qAvsqn0W3TVW4tdGVZbZe5xX6Q/V1L4h+LTXk2uaQr/bmHOIf5pjfMd0iynPERE7EqSpzHO1G98m7A7AXv0FGBgkQsSAAAAAElFTkSuQmCC"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.8131def6.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(6),i=a.n(o),c=(a(13),a(2)),s=a(3),u=a(1),r=(a(14),a(4)),m=a(7),g=a.n(m),d=function(e){var t=e.calls;return l.a.createElement("div",{className:"average"},"Average response time ",t.sum>0?Number(t.sum/t.times).toFixed(2):"0"," m/s")},A=function(){var e=Object(n.useState)({times:0,sum:0}),t=Object(u.a)(e,2),o=t[0],i=t[1],m=Object(n.useState)(""),A=Object(u.a)(m,2),p=A[0],v=A[1],h=Object(n.useState)(""),E=Object(u.a)(h,2),b=E[0],f=E[1],N=Object(n.useState)({latitude:"",longitude:""}),O=Object(u.a)(N,2),y=O[0],j=O[1],w=Object(n.useState)(null),C=Object(u.a)(w,2),S=C[0],B=C[1],k=function(){var e=function(e){var t=e.calls,a=e.query,n=e.location,l=e.setSuggestions,o=e.setCalls,i=e.setMessage;if(a.length>=3){var c=(new Date).getTime(),s=isNaN(Number(n.longitude))||isNaN(Number(n.latitude))?"":"&latitude=".concat(n.latitude,"&longitude=").concat(n.longitude);i("Searching..."),fetch("https://gentle-island-08430.herokuapp.com/suggestions?q=".concat(a).concat(s)).then((function(e){return e.json()})).then((function(e){var a;0===(null===(a=e.suggestions)||void 0===a?void 0:a.length)&&i("Match not found!"),l(e.suggestions);var n=(new Date).getTime()-c;o({times:t.times+1,sum:t.sum+n})})).catch((function(e){i(e.message)}))}else i("Please type minimum of 3 letter"),l([])};return[Object(r.debounce)(500,e),Object(r.throttle)(500,e)]}(),x=Object(u.a)(k,2),V=x[0],I=x[1],M=function(e){return function(t){j(Object(s.a)(Object(s.a)({},y),{},Object(c.a)({},e,t.target.value)))}};return l.a.createElement("div",{className:"center"},l.a.createElement(d,{calls:o}),l.a.createElement("div",{className:"App-container"},l.a.createElement("img",{className:"App-logo",src:a(15),alt:"Logo challenge Jonas"}),l.a.createElement("div",{className:"App-input-container"},l.a.createElement("div",{className:"App-input-search"},l.a.createElement("input",{placeholder:"Type some city here",type:"text",value:p,onChange:function(e){if(v(e.target.value),!e.target.value)return f(""),void B(null);e.target.value.length<5?I({query:e.target.value,calls:o,location:y,setSuggestions:B,setCalls:i,setMessage:f}):V({query:e.target.value,calls:o,location:y,setSuggestions:B,setCalls:i,setMessage:f})}})),l.a.createElement("div",{className:"App-input-lat"},l.a.createElement("input",{placeholder:"Latitude",type:"text",value:y.latitude,onChange:M("latitude")})),l.a.createElement("div",{className:"App-input-long"},l.a.createElement("input",{placeholder:"Longitude",type:"text",value:y.longitude,onChange:M("longitude")})),l.a.createElement("div",{className:"App-gps"},l.a.createElement("img",{onClick:function(){navigator.geolocation.getCurrentPosition((function(e){j({longitude:e.coords.longitude,latitude:e.coords.latitude})}))},src:g.a,alt:"My Location"}))),(null===S||void 0===S?void 0:S.length)?l.a.createElement("ol",null,S.map((function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{key:e+t,onClick:function(){return t=e,void window.open("https://www.google.com/maps/search/?api=1&query=".concat(t.latitude,",").concat(t.longitude));var t}},e.name,l.a.createElement("span",{className:"similarity"},Number(100*e.score).toFixed(2)," % similarity")),l.a.createElement("hr",null))}))):l.a.createElement("div",{className:"message"},b)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.27bb97cf.chunk.js.map