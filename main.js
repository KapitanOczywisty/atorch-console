!function(e){function t(t){for(var a,i,l=t[0],o=t[1],s=t[2],m=0,d=[];m<l.length;m++)i=l[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,l=1;l<n.length;l++){var o=n[l];0!==r[o]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={0:0},c=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=o;c.push([67,1]),n()}({10:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return l}));var a=n(4);const r=e.of(255,85),c={1:36,2:8,17:10};function i(t,n){const i=c[n];if(!e.isBuffer(t))throw new Error("block not is Buffer object");if(0!==t.indexOf(r))throw new Error("magic header not found");if(t.readInt8(2)!==n)throw new Error(`message type unexpected (expected: ${n})`);if(t.length!==i)throw new Error(`command packet size error (expected: ${i})`);if(!Object(a.a)(t.slice(2,-1)).equals(t.slice(-1)))throw new Error("checksum unexpected")}function l(e,t,n){if(e.readUInt8(3)!==t)throw new Error(`this is not a ${n} data packet`)}}).call(this,n(21).Buffer)},20:function(e,t,n){e.exports={name:"_1IfuHN8kkmV5g5ukwt7H5i",btn:"_2qtmzPLZJ8hDDPGYrtCoxK"}},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(10),r=n(4);class c{constructor(e){this.type=1,Object(a.c)(e,1),Object(a.b)(e,1,"AC Meter"),this.mVoltage=100*Object(r.d)(e,4),this.mAmpere=Object(r.d)(e,7),this.mWatt=100*Object(r.d)(e,10),this.mWh=1e4*e.readUInt32BE(13),this.price=Object(r.d)(e,17)/100,this.fee=this.mWh*(this.price/1e6),this.frequency=e.readUInt16BE(20)/10,this.pf=e.readUInt16BE(22)/1e3,this.temperature=e.readUInt16BE(24),this.duration=Object(r.b)(e,26),this.backlightTime=e[30],Object.freeze(this),Object.seal(this)}}},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(10),r=n(4);class c{constructor(e){this.type=2,Object(a.c)(e,1),Object(a.b)(e,2,"DC Meter"),this.mVoltage=100*Object(r.d)(e,4),this.mAmpere=Object(r.d)(e,7),this.mWh=10*e.readUInt32BE(10),this.mWatt=Math.round(this.mVoltage*this.mAmpere/1e3),this.price=Object(r.d)(e,17)/100,this.fee=this.mWh*(this.price/1e6),this.temperature=e.readUInt16BE(24),this.duration=Object(r.b)(e,26),this.backlightTime=e[30],Object.freeze(this),Object.seal(this)}}},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(10),r=n(4);class c{constructor(e){this.type=3,Object(a.c)(e,1),Object(a.b)(e,3,"USB Meter"),this.mVoltage=10*Object(r.d)(e,4),this.mAmpere=10*Object(r.d)(e,7),this.mWatt=Math.round(this.mVoltage*this.mAmpere/1e3),this.mAh=10*Object(r.d)(e,10),this.mWh=10*e.readUInt32BE(13),this.dataN=10*e.readUInt16BE(17),this.dataP=10*e.readUInt16BE(19),this.temperature=e.readInt16BE(21),this.duration=Object(r.b)(e,23),this.backlightTime=e[27],Object.freeze(this),Object.seal(this)}}},31:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var a=n(10),r=n(32);class c{constructor(t){Object(a.c)(t,2),this.data=e.from(t.slice(3,-1)),Object.freeze(this),Object.seal(this)}toType(){const e=this.data.toString("hex");if(Object.values(r.a).includes(e))return e}}}).call(this,n(21).Buffer)},32:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.OK="01010000",e.Unsupported="01030000"}(a||(a={}))},4:function(e,t,n){"use strict";(function(e){n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var a=n(22),r=n(23),c=n(24),i=n(31);function l(e){const t=e.readUInt8(2);if(1===t)switch(e.readUInt8(3)){case 1:return new a.a(e);case 2:return new r.a(e);case 3:return new c.a(e)}else if(2===t)return new i.a(e)}function o(e,t){return(e.readInt8(t)<<16)+e.readUInt16BE(t+1)}function s(e,t){return[String(e.readUInt16BE(t)).padStart(3,"0"),String(e.readUInt8(t+2)).padStart(2,"0"),String(e.readUInt8(t+3)).padStart(2,"0")].join(":")}function u(t){const n=t.reduce((e,t)=>e+t&255);return e.of(68^n)}}).call(this,n(21).Buffer)},44:function(e,t,n){"use strict";(function(e){var a=n(54),r=n(10),c=n(4);function i(t,n,a=0){const i=e.alloc(7);return i.writeUInt8(17,0),i.writeUInt8(t,1),i.writeUInt8(n,2),i.writeUInt32BE(a,3),e.concat([r.a,i,Object(c.a)(i)])}t.a={resetWh:e=>i(e,1),resetAh:e=>i(e,2),resetDuration:e=>i(e,3),resetAll:e=>i(e,5),setBacklightTime:(e,t)=>i(e,33,a.a.clamp(t,0,60)),setPrice:(e,t)=>i(e,34,a.a.clamp(t,1,999999)),setPlus:e=>i(e,3!==e?17:51),setMinus:e=>i(e,3!==e?18:52),setup:e=>i(e,49),enter:e=>i(e,50)}}).call(this,n(21).Buffer)},5:function(e,t,n){"use strict";var a=n(10);n.d(t,"d",(function(){return a.a})),n.d(t,"g",(function(){return a.c}));var r=n(44);n.d(t,"b",(function(){return r.a}));var c=n(22);n.d(t,"a",(function(){return c.a}));var i=n(23);n.d(t,"c",(function(){return i.a}));var l=n(24);n.d(t,"f",(function(){return l.a}));var o=n(31);n.d(t,"e",(function(){return o.a}));n(32);var s=n(4);n.d(t,"h",(function(){return s.c}))},51:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var a=n(52),r=n(5);class c{constructor(t){this.blocks=[],this.events=new a.EventEmitter,this.getCharacteristic=async()=>{var e;const t=await(null===(e=this.device.gatt)||void 0===e?void 0:e.connect()),n=await(null==t?void 0:t.getPrimaryService("0000ffe0-0000-1000-8000-00805f9b34fb"));return null==n?void 0:n.getCharacteristic("0000ffe1-0000-1000-8000-00805f9b34fb")},this.handleValueChanged=t=>{var n,a;const c=t.target,i=e.from(null!==(a=null===(n=c.value)||void 0===n?void 0:n.buffer)&&void 0!==a?a:[]);0===i.indexOf(r.d)?(0!==this.blocks.length&&this.emitBlock(e.concat(this.blocks)),this.blocks=[i]):this.blocks.push(i)},this.device=t,t.addEventListener("gattserverdisconnected",()=>{this.events.emit("disconnected",!1)})}static async requestDevice(){const e=await navigator.bluetooth.requestDevice({filters:[{services:["0000ffe0-0000-1000-8000-00805f9b34fb"]}]});return new c(e)}async connect(){const e=await this.getCharacteristic();null==e||e.addEventListener("characteristicvaluechanged",this.handleValueChanged),await(null==e?void 0:e.startNotifications())}async disconnect(){var e;try{null===(e=this.device.gatt)||void 0===e||e.disconnect()}catch{}this.events.removeAllListeners()}async sendCommand(e){Object(r.g)(e,17);const t=await this.getCharacteristic();await(null==t?void 0:t.writeValue(e))}on(e,t){return this.events.on(e,t),()=>{this.events.off(e,t)}}emitBlock(e){console.log("Block",e.toString("hex").toUpperCase());try{const t=Object(r.h)(e);this.events.emit("packet",t)}catch{this.events.emit("failed",e)}}}}).call(this,n(21).Buffer)},53:function(e,t,n){e.exports={container:"_2RIOZJ3crSATWdIZlIHFoS"}},67:function(e,t,n){"use strict";n.r(t);n(55);var a=n(46),r=n.n(a),c=n(0),i=n.n(c),l=n(29),o=n.n(l),s=n(13),u=n(18),m=n(25),d=n(17),h=n(48),f=n(16),p=n(45),b=n(33),v=n(49),E=n.n(v),g=n(50),O=n(51);const j=E()("ATORCH"),y=Object(g.a)(j),k=j("SET_CONNECTED"),w=j("UPDATE_PACKET"),W=y("CONNECT",async(e,t)=>{const n=await O.a.requestDevice();return t(k(!0)),n.on("disconnected",()=>{t(k(!1))}),n.on("packet",e=>{t(w(e))}),await n.connect(),n}),C=(y("DISCONNECT",async(e,t,n)=>{const{atorch:a}=n();return null==a?void 0:a.disconnect()}),y("SEND_COMMAND",async(e,t,n)=>{if(void 0===e)return;const{atorch:a}=n();return null==a?void 0:a.sendCommand(e)}));var B=Object(b.reducerWithInitialState)(null).case(W.async.done,(e,t)=>t.result),x=n(39),A=n(5);var I=Object(b.reducerWithInitialState)({connected:!1}).case(k,(e,t)=>Object(x.a)(e,e=>{e.connected=t})).case(w,(e,t)=>Object(x.a)(e,e=>{void 0!==t&&(t instanceof A.e||(e.latest=t))}));const N=Object(f.b)(),S=d.d;var T=n(91),U=n(90),P=n(92),V=n(53),D=n.n(V),M=n(54),F=n(20),_=n.n(F),$=n(12),z=n.n($),R=n(88);const q=({record:e})=>i.a.createElement(R.a,{hover:!0,borderless:!0,size:"sm",className:_.a.table},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{className:z()("text-right",_.a.name)},"#"),i.a.createElement("th",{className:_.a.value},"Value"),i.a.createElement("th",null))),i.a.createElement("tbody",null,M.a.map(e,([e,t,n],a)=>i.a.createElement("tr",{key:a},i.a.createElement("td",{className:z()("text-monospace","text-right")},e),i.a.createElement("td",null,t),i.a.createElement("td",null,n)))));var H=n(89);const J=i.a.memo(({type:e})=>{const t=Object(s.d)(),n={Setup:A.b.setup.bind(null,e),"➕":A.b.setPlus.bind(null,e),"➖":A.b.setMinus.bind(null,e),Enter:A.b.enter.bind(null,e),"Reset All":A.b.resetAll.bind(null,e)};return i.a.createElement(H.a,null,M.a.map(n,(e,n)=>{return i.a.createElement(P.a,{key:n,outline:!0,onClick:(a=e,()=>{t(C(a()))})},n);var a}))}),L=({value:e,unit:t})=>{if(0===e||Number.isNaN(e))return i.a.createElement("span",{className:"text-monospace"},"0 ",t);const n=["m","","k","M","T"],a=Math.min(Math.floor(Math.log(e)/Math.log(1e3)),n.length-1),r=`${+(e/=Math.pow(1e3,a)).toFixed(5)} ${n[a]}${t}`;return i.a.createElement("span",{className:"text-monospace"},r)},K=i.a.createElement("span",null,"CO",i.a.createElement("sub",null,"2")),Z=({packet:e})=>{var t;const n=null!==(t=null==e?void 0:e.type)&&void 0!==t?t:0;let a;if(e instanceof A.a)a=[["Voltage",i.a.createElement(L,{value:e.mVoltage,unit:"V"})],["Ampere",i.a.createElement(L,{value:e.mAmpere,unit:"A"})],["Watt",i.a.createElement(L,{value:e.mWatt,unit:"W"})],["W·h",i.a.createElement(L,{value:e.mWh,unit:"W·h"}),i.a.createElement(G,{onClick:A.b.resetWh.bind(null,n)},"Reset")],[K,i.a.createElement(L,{value:te(e.mWh),unit:"g"})],["Price",e.price.toFixed(2)+" $/kW·h",i.a.createElement(Y,{type:n,value:e.price})],["Fee",e.fee.toFixed(5)+" $"],["Frequency",e.frequency.toFixed(1)+" Hz"],["PF",e.pf.toFixed(2)],["Temperature",i.a.createElement(X,{value:e.temperature})],["Duration",e.duration],["Backlight Time",i.a.createElement(ee,{time:e.backlightTime}),i.a.createElement(Q,{type:n,value:e.backlightTime})]];else if(e instanceof A.c)a=[["Voltage",i.a.createElement(L,{value:e.mVoltage,unit:"V"})],["Ampere",i.a.createElement(L,{value:e.mAmpere,unit:"A"})],["Watt",i.a.createElement(L,{value:e.mWatt,unit:"W"})],["W·h",i.a.createElement(L,{value:e.mWh,unit:"W·h"}),i.a.createElement(G,{onClick:A.b.resetWh.bind(null,n)},"Reset")],[K,i.a.createElement(L,{value:te(e.mWh),unit:"g"})],["Price",e.price.toFixed(2)+" $/kW·h",i.a.createElement(Y,{type:n,value:e.price})],["Fee",e.fee.toFixed(5)+" $"],["Temperature",i.a.createElement(X,{value:e.temperature})],["Duration",e.duration],["Backlight Time",i.a.createElement(ee,{time:e.backlightTime}),i.a.createElement(Q,{type:n,value:e.backlightTime})]];else{if(!(e instanceof A.f))return i.a.createElement("p",null,"Not connected to device.");a=[["Voltage",i.a.createElement(L,{value:e.mVoltage,unit:"V"})],["Ampere",i.a.createElement(L,{value:e.mAmpere,unit:"A"})],["Watt",i.a.createElement(L,{value:e.mWatt,unit:"W"})],["A·h",i.a.createElement(L,{value:e.mAh,unit:"A·h"}),i.a.createElement(G,{onClick:A.b.resetAh.bind(null,n)},"Reset")],["W·h",i.a.createElement(L,{value:e.mWh,unit:"W·h"}),i.a.createElement(G,{onClick:A.b.resetWh.bind(null,n)},"Reset")],[K,i.a.createElement(L,{value:te(e.mWh),unit:"g"})],["USB D-",i.a.createElement(L,{value:e.dataN,unit:"V"})],["USB D+",i.a.createElement(L,{value:e.dataP,unit:"V"})],["Temperature",i.a.createElement(X,{value:e.temperature})],["Duration",e.duration,i.a.createElement(G,{onClick:A.b.resetDuration.bind(null,n)},"Reset")],["Backlight Time",i.a.createElement(ee,{time:e.backlightTime})]]}return i.a.createElement(i.a.Fragment,null,i.a.createElement(U.a,{className:"ml-2 justify-content-center"},i.a.createElement(q,{record:a})),i.a.createElement(U.a,{className:"ml-2 justify-content-center"},i.a.createElement(J,{type:n})))},G=e=>{const t=Object(s.d)();return i.a.createElement(P.a,{color:"link",size:"sm",className:_.a.btn,onClick:()=>{t(C(e.onClick()))}},e.children)},Y=({type:e,value:t})=>i.a.createElement(G,{onClick:()=>{const n=ne("Setup Price (0 to 999.99)",t,0,1e3);if(void 0!==n)return console.log(n),A.b.setPrice(e,M.a.toFinite(100*n));alert("input unexpected (0 to 999.99)")}},"Setup"),Q=({type:e,value:t})=>i.a.createElement(G,{onClick:()=>{const n=ne("Setup Backlight Time (0 to 60)",t,0,60.01);if(void 0!==n)return A.b.setBacklightTime(e,M.a.toFinite(n));alert("input unexpected (0 to 60)")}},"Setup"),X=({value:e})=>i.a.createElement("span",null,i.a.createElement("span",null,e," ℃"),", ",i.a.createElement("span",null,9*e/5+32," ℉")),ee=({time:e})=>0===e?i.a.createElement("span",null,"Normally Closed"):60===e?i.a.createElement("span",null,"Normally Open"):i.a.createElement("span",null,e," sec");function te(e){return.997*e}function ne(e,t,n,a){const r=globalThis.prompt(e,String(t)),c=Number.parseFloat(null!=r?r:"-1");if(M.a.inRange(c,n,a))return c}const ae=()=>{const e=Object(s.d)(),t=Object(s.e)(e=>e.report.connected),n=Object(s.e)(e=>e.report.latest);return i.a.createElement(T.a,{className:D.a.container},i.a.createElement(U.a,{className:"ml-2 justify-content-center"},i.a.createElement(P.a,{outline:!0,onClick:()=>e(W())},t?"Disconnect":"Connect")),i.a.createElement(Z,{packet:n}))},re=Object(d.e)((ce=N,Object(d.c)({router:Object(m.b)(ce),atorch:B,report:I})),void 0,S(Object(d.a)(Object(p.a)(N),h.a)));var ce;var ie=()=>i.a.createElement(s.a,{store:re},i.a.createElement(m.a,{history:N},i.a.createElement(u.c,null,i.a.createElement(u.a,{exact:!0,path:"/",component:ae}))));r()(()=>{const e=document.createElement("main");o.a.render(i.a.createElement(ie,null),e,()=>{document.body=document.createElement("body"),document.body.appendChild(e)})})}});
//# sourceMappingURL=main.js.map