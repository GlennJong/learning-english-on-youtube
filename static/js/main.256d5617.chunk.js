(this["webpackJsonpyoutube-anchor"]=this["webpackJsonpyoutube-anchor"]||[]).push([[0],{49:function(n,t,e){},66:function(n,t,e){"use strict";e.r(t);var r,c,a=e(0),i=e.n(a),o=e(21),s=e.n(o),l=e(9),d=e(11),u=(e(49),e(5)),b=e(3),j=e(2),p={primary:"hsl(348, 88%, 65%)",secondary:"hsl(340, 83%, 65%)",thirdary:"hsl(334, 77%, 65%)",pureBlack:"#000",black:{dark:"hsl(246, 19%, 22%)",normal:"hsl(248, 17%, 25%)",light:"hsl(248, 15%, 28%)"},pureWhite:"#FFF",white:{dark:"hsl(204, 86%, 85%)",normal:"hsl(204, 86%, 92%)"},gray:{normal:"hsl(237, 10%, 63%)"}},f={background:"linear-gradient(0deg, ".concat(p.black.dark," 0%, ").concat(p.black.normal," 100%)"),primary:"linear-gradient(45deg, ".concat(p.primary," 0%, ").concat(p.secondary," 50%, ").concat(p.thirdary," 100%)"),blue:Object(j.b)(r||(r=Object(b.a)(["\n    background-color: #0093E9;\n    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);\n  "])))},h="'Pingfang TC', '\u5fae\u8edf\u6b63\u9ed1\u9ad4', 'Microsoft JhengHei', sans-serif",x=Object(j.a)(c||(c=Object(b.a)(["\n    body {\n        margin: 0;\n        font-family: ",";\n        font-weight: 400;\n        font-size: 16px;\n        background: ",";\n        background-size: 100% 100%;\n        width: 100vw;\n        height: 100vh;\n    }\n    #app {\n        display: flex;\n        flex-direction: column;\n    }\n    ul {\n        padding-inline-start: 0;\n        margin-block-start: 0;\n        margin-block-end: 0;\n        list-style-type: none;\n    }\n    a {\n        text-decoration: none;\n        cursor: pointer;\n        color: currentColor;\n    }\n    button {\n        outline: none;\n        cursor: pointer;\n    }\n    dd {\n        margin-inline-start: 0;\n    }\n\n    h1, h2, h3, h4, p {\n        margin: 0;\n        padding: 0;\n    }\n\n    input, textarea, select, button, a {\n        font-family: ",";\n        font-weight: 400;\n        font-size: 14px;\n    }\n"])),h,f.background,h),O=e(1),g=function(n){var t=n.children;return Object(O.jsx)("div",{children:t})},m=e(12),v=e.n(m),y=e(16);function k(n){var t=(new DOMParser).parseFromString(n,"text/xml"),e=[];function r(n){if(n.getAttribute("lang_code").includes("en"))return n.getAttribute("lang_code")}try{if(t.getElementsByTagName("transcript_list").length>0)for(var c=0;c<t.getElementsByTagName("transcript_list")[0].childNodes.length;c++){var a=r(t.getElementsByTagName("transcript_list")[0].childNodes[c]);a&&e.push(a)}else for(c=0;c<n.getElementsByTagName("transcript_list")[0].childNodes.length;c++){var i=r(n.getElementsByTagName("transcript_list")[0].childNodes[c]);i&&e.push(i)}return e}catch(o){return console.log(o),null}}function w(n){var t=(new DOMParser).parseFromString(n,"text/xml"),e=[];function r(n){var t={nbsp:" ",amp:"&",quot:'"',lt:"<",gt:">"};return n.replace(/&(nbsp|amp|quot|lt|gt);/g,(function(n,e){return t[e]})).replace(/&#(\d+);/gi,(function(n,t){var e=parseInt(t,10);return String.fromCharCode(e)}))}function c(n){return{start:n.getAttribute("start"),dur:n.getAttribute("dur"),content:r(n.innerHTML)}}try{if(t.getElementsByTagName("transcript").length>0)for(var a=0;a<t.getElementsByTagName("transcript")[0].childNodes.length;a++){var i=c(t.getElementsByTagName("transcript")[0].childNodes[a]);e.push(i)}else for(a=0;a<n.getElementsByTagName("transcript")[0].childNodes.length;a++){var o=c(n.getElementsByTagName("transcript")[0].childNodes[a]);e.push(o)}return e}catch(s){console.log(s),alert("Oops, something went wrong.")}}function T(n,t){var e="https://video.google.com/timedtext?type=track&lang=".concat(t,"&v=").concat(n,"&id=0");return new Promise((function(n,t){fetch(e,{method:"POST"}).then((function(t){return n(t.text())})).catch(t)}))}function C(n){var t="https://video.google.com/timedtext?type=list&v=".concat(n);return new Promise((function(n,e){fetch(t,{method:"POST"}).then((function(t){return n(t.text())})).catch((function(){return e(null)}))}))}function z(){return(z=Object(y.a)(v.a.mark((function n(t){var e,r,c;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C(t);case 2:if(e=n.sent,!(r=k(e))){n.next=9;break}return c=0!==r.length,n.abrupt("return",c);case 9:return n.abrupt("return",!1);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}for(var D,S,R,N,P,E,I,B,F,L=e(6),M=e(10),V=j.c.button(D||(D=Object(b.a)(['\n  position: relative;\n  border: 0;\n  background: transparent;\n  padding: 3px 0px;\n  height: 100%;\n  cursor: pointer;\n  transition: transform .15s cubic-bezier(.69,-0.39,.39,2.06);\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: -4px;\n    border-radius: 4px;\n    width: calc(100% + 8px);\n    height: 100%;\n    box-shadow: 2px 2px 3px hsla(0, 0%, 0%, .5);\n    background: ',";\n    opacity: 0;\n    z-index: -1;\n  }\n  ","\n"])),p.black.normal,(function(n){return n.active&&Object(j.b)(S||(S=Object(b.a)(["\n    color: #FFF;\n    transform: scale(1.05);\n    z-index: 1;\n    &:before { opacity: 1; }\n  "])))})),H=function(n){var t=n.onClick,e=void 0===t?null:t,r=n.children,c=Object(M.a)(n,["onClick","children"]),i=Object(a.useState)(!1),o=Object(u.a)(i,2),s=o[0],l=o[1];return Object(O.jsx)(V,Object(L.a)(Object(L.a)({active:s,onClick:function(n){l(!s),e&&e({event:n,active:!s})}},c),{},{children:r}))},J=Object(a.forwardRef)((function(n,t){var e=n.children,r=Object(a.useRef)(null);function c(){r.current.classList.add("active")}function i(){r.current.classList.remove("active")}function o(){r.current.classList.contains("active")?r.current.classList.remove("active"):r.current.classList.add("active")}return Object(a.useEffect)((function(){t&&(t.current={open:c,close:i,toggle:o})}),[]),Object(O.jsx)(_,{ref:r,children:e})})),_=j.c.div(R||(R=Object(b.a)(["\n  max-height: 0px;\n  width: 100%;\n  overflow: hidden;\n  transition: max-height .3s ease;\n\n  &.active { \n    max-height: 50vh;\n  }\n"]))),A=J,W=j.c.button(N||(N=Object(b.a)(["\n  border: 0;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  background-image: ",";\n  box-shadow: 2px 4px 10px hsl(200, 5%, 5%, .5);\n  svg {\n    color: hsl(200, 5%, 90%, 1);\n    filter: drop-shadow(2px 4px 3px hsl(200, 50%, 30%, .5));\n  }\n  &:active {\n    background-image: linear-gradient(45deg, hsl(210, 40%, 20%) 0%, hsl(190, 40%, 40%) 100%);\n  }\n  &:disabled {\n    opacity: 0.5;\n  }\n"])),f.primary),U=e(31),Y={playerVars:{autoplay:0,playsinline:1,fs:0}},X=Object(a.forwardRef)((function(n,t){var e=n.id,r=n.onReady,c=void 0===r?null:r,i=Object(M.a)(n,["id","onReady"]),o=Object(a.useState)(null),s=Object(u.a)(o,2),l=s[0],d=s[1];return Object(a.useEffect)((function(){t&&(t.current=l)}),[l]),Object(O.jsx)(G,Object(L.a)(Object(L.a)({},i),{},{children:Object(O.jsx)(U.a,{className:"player",videoId:e,opts:Y,onReady:function(n){d(n.target);var t={title:n.target.getVideoData().title,duration:n.target.getDuration()};c&&c(t)}})}))})),G=j.c.div(P||(P=Object(b.a)(["\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 56.25%;\n  .player {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    iframe {\n      width: 100% !important;\n      height: 100% !important;\n    }\n  }\n\n"]))),q=X,K=[],Q=0;Q<5;Q++)K.push(Object(j.d)(E||(E=Object(b.a)(["\n    from { transform: scaleY(","); background: hsla(210, 80%, 70%, 1);}\n    to { transform: scaleY(1); background: hsla(190, 100%, 60%, 1);}\n  "])),Math.random()/2));for(var Z=[],$=0;$<5;$++)Z.push(Object(j.d)(I||(I=Object(b.a)(["\n    from { transform: scaleY(","); background: ",";}\n    to { transform: scaleY(0.33); background: ",";}\n  "])),Math.random()/2,p.primary,p.primary));var nn,tn,en,rn,cn,an=j.c.div(B||(B=Object(b.a)(["\n  span {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 1px;\n    margin-top: -2px;\n    width: 1px;\n    height: 10px;\n    ","\n"])),(function(n){return(n.play?K:Z).map((function(n,t){return Object(j.b)(F||(F=Object(b.a)([" &:nth-child(",") {\n          animation: "," ","s linear infinite alternate;\n        }"])),t+1,n,.3+.3*Math.random())}))})),on=function(n){var t=n.status,e=Object(M.a)(n,["status"]);return Object(O.jsxs)(an,Object(L.a)(Object(L.a)({play:t},e),{},{children:[Object(O.jsx)("span",{}),Object(O.jsx)("span",{}),Object(O.jsx)("span",{}),Object(O.jsx)("span",{}),Object(O.jsx)("span",{})]}))},sn=j.c.div(nn||(nn=Object(b.a)(["\n  display: block;\n  border: 0;\n  padding: 6px 0;\n  background: transparent;\n  white-space: nowrap;\n  overflow: hidden;\n  > .icon, > .title {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  > .icon {\n    width: 22px;\n    margin-right: 6px;\n  }\n  > .title {\n    width: calc(100% - 28px);\n  }\n"]))),ln=j.c.p(tn||(tn=Object(b.a)(["\n  ","\n  font-size: 13px;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),""),dn=function(n){var t=n.title,e=n.status,r=n.onClick,c=Object(M.a)(n,["title","status","onClick"]);return Object(O.jsxs)(sn,Object(L.a)(Object(L.a)({onClick:r},c),{},{children:[Object(O.jsx)(on,{status:e,className:"icon"}),Object(O.jsx)(ln,{className:"title",children:t})]}))},un=e(69),bn=e(70),jn=Object(a.forwardRef)((function(n,t){var e=n.player,r=n.onProgress,c=Object(a.useRef)(null),i=Object(a.useRef)(null),o=Object(a.useRef)();function s(){var n=setInterval((function(){console.log("sync"),d(e.getCurrentTime()/e.getDuration()),e.getCurrentTime()/e.getDuration()>=.99&&l()}),300);o.current=n,setTimeout((function(){return r()}),300)}function l(){console.log("clear"),clearInterval(o.current)}function d(n){var t=Math.min(Math.max(n,0),1);c.current.style.width="".concat(100*t,"%")}return Object(a.useEffect)((function(){t&&e&&(t.current={sync:s,deSync:l})}),[t,e]),Object(O.jsxs)(pn,{children:[Object(O.jsx)(hn,{onClick:function(){e.seekTo(e.getCurrentTime()-e.getDuration()/30),setTimeout((function(){return r()}),300)},children:Object(O.jsx)(un.a,{size:"18"})}),Object(O.jsx)(fn,{onTouchStart:function(){l()},onTouchMove:function(n){var t=n.currentTarget.getBoundingClientRect(),e=t.x,r=t.width,c=n.touches[0].clientX;i.current=(c-e)/r,d((c-e)/r)},onTouchEnd:function(){e.seekTo(i.current*e.getDuration()),s()},children:Object(O.jsx)("div",{ref:c,className:"bar"})}),Object(O.jsx)(hn,{onClick:function(){e.seekTo(e.getCurrentTime()+e.getDuration()/30),setTimeout((function(){return r()}),300)},children:Object(O.jsx)(bn.a,{size:"18"})})]})})),pn=j.c.div(en||(en=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  padding: 6px 0;\n  width: 100%;\n"]))),fn=j.c.div(rn||(rn=Object(b.a)(["\n  display: block;\n  width: calc(100% - 76px);\n  background: ",";\n  box-sizing: border-box;\n  .bar {\n    width: 0;\n    height: 100%;\n    background: ",";\n  }\n"])),p.black.light,p.primary),hn=j.c.button(cn||(cn=Object(b.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  padding: 6px 6px;\n  width: 30px;\n  border-radius: 3px;\n  color: ",";\n  background: ",";\n  z-index: 2;\n  p {\n    transform: scale(0.65);\n    font-size: 14px;\n  }\n"])),p.white.normal,p.black.light),xn=jn,On=e(13),gn=e(24),mn=new Date;function vn(n){localStorage.setItem("wordLibrary",JSON.stringify(n))}var yn=window.localStorage.getItem("wordLibrary")||null;(yn=yn?JSON.parse(yn):[]).forEach((function(n){return n.timestamp=new Date(n.timestamp)}));var kn,wn,Tn,Cn,zn,Dn,Sn,Rn,Nn,Pn,En,In,Bn,Fn,Ln,Mn,Vn,Hn,Jn,_n=Object(gn.a)({name:"wordLibrary",initialState:{libraryData:yn,currentData:[]},reducers:{updateItemToCurrentData:function(n,t){var e=t.payload,r=Object(On.a)(n.currentData),c=r.findIndex((function(n){return n.content===e.content&&n.origin===e.origin}));r.splice(c,1,e),n.currentData=r},addItemToCurrentData:function(n,t){var e=t.payload,r=Object(On.a)(n.currentData);r.push(e),n.currentData=r},removeItemFromCurrentData:function(n,t){var e=t.payload,r=Object(On.a)(n.currentData),c=r.findIndex((function(n){return n.content===e.content&&n.origin===e.origin}));r.splice(c,1),n.currentData=r},archiveCurrentDataToLibrary:function(n){!function(n,t){var e=Object(On.a)(n.libraryData),r=e.findIndex((function(n){return n.timestamp===mn})),c={timestamp:mn,words:t};-1!==r?t.forEach((function(n){return e[r].words.push(n)})):e.push(c),n.libraryData=e,vn(e)}(n,Object(On.a)(n.currentData))},clearCurrentData:function(n){n.currentData=[]},updateLibraryData:function(n,t){n.libraryData=t.payload,vn(t.payload)}}}),An=e(71),Wn=j.c.li(kn||(kn=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  & + li {\n    margin-top: 12px;\n  }\n"]))),Un=j.c.button(wn||(wn=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 12px;\n  border: 2px solid ",";\n  border-radius: 50%;\n  padding: 0;\n  width: 22px;\n  height: 22px;\n  background: transparent;\n  color: ",";\n"])),p.middle,p.white.normal),Yn=j.c.div(Tn||(Tn=Object(b.a)(["\n  width: calc(100% - 36px);\n"]))),Xn=Object(j.c)(H)(Cn||(Cn=Object(b.a)(["\n  margin-left: -1px;\n  margin-right: -1px;\n  color: ",";\n"])),p.pureWhite),Gn=function(n){var t,e=n.data,r=n.onReplayClick,c=n.onWordClick,a=Object(M.a)(n,["data","onReplayClick","onWordClick"]);function i(n){var t=n.event,r=n.active,a=t.currentTarget.dataset.word;c({word:a,status:r?"add":"remove",origin:e.content})}return Object(O.jsxs)(Wn,Object(L.a)(Object(L.a)({},a),{},{children:[Object(O.jsx)(Un,{"data-sec":e.start,onClick:r,children:Object(O.jsx)(An.a,{size:14})}),Object(O.jsx)(Yn,{children:(t=e.content,t.split(/(\s+)(\w+)/g).map((function(n){return n.match(/\w+/)?{type:"button",content:n}:n}))).map((function(n,t){return"button"===n.type?Object(O.jsx)(Xn,{"data-word":n.content,onClick:i,children:n.content},t):Object(O.jsx)("span",{children:n},t)}))})]}))},qn=Object(a.forwardRef)((function(n,t){var e=n.captions,r=n.status,c=n.onReplayClick,i=Object(a.useState)([]),o=Object(u.a)(i,2),s=o[0],d=o[1],b=Object(a.useRef)(null);function j(n){var t,r=function(n){var t,r=n-.5;return e.forEach((function(n){var e=Number(n.start),c=e+Number(n.dur);r>e&&r<=c&&(t={start:e,end:c,content:n.content,spot:r,timestamp:new Date})})),t}(n),c=Object(On.a)(b.current);r&&(null===r||void 0===r?void 0:r.content)!==(null===(t=c[c.length-1])||void 0===t?void 0:t.content)&&(c.push(r),d(c))}function p(n){var t=n.status,e=n.word,r=n.origin;"add"===t?function(n,t){var e={origin:t,content:n,timestamp:new Date};f(_n.actions.addItemToCurrentData(e))}(e,r):"remove"===t&&function(n,t){var e={origin:t,content:n};f(_n.actions.removeItemFromCurrentData(e))}(e,r)}Object(a.useEffect)((function(){t&&(t.current={addItemBySec:j})}),[]),Object(a.useEffect)((function(){b&&(b.current=s)}),[s]);var f=Object(l.b)(_n);return Object(O.jsxs)(Kn,{children:[0===s.length&&Object(O.jsxs)(Qn,{children:["clickToReplay"===r&&"Really? Press \u21ba to replay again \ud83e\udd14","clickToSave"===r&&"Great! Press \uff0b to add first sentence \ud83c\udf89","clickToPlay"===r&&"Hi! Press \u25b8 to start your listening \ud83d\udc4d"]}),Object(O.jsx)(Zn,{children:null===s||void 0===s?void 0:s.map((function(n,t){return Object(O.jsx)(Gn,{onReplayClick:c,onWordClick:p,data:n},t)}))})]})})),Kn=j.c.div(zn||(zn=Object(b.a)(["\n  border-radius: 4px;\n  padding: 16px 12px;\n  background: ",";\n  box-sizing: border-box;\n  \n"])),p.black.light),Qn=j.c.div(Dn||(Dn=Object(b.a)(["\n\n"]))),Zn=j.c.ul(Sn||(Sn=Object(b.a)(["\n  \n"]))),$n=qn,nt=e(72),tt=e(73),et=e(74),rt=e(75),ct=e(76),at=j.c.div(Rn||(Rn=Object(b.a)(["\n  background: ",";\n"])),p.black.normal),it=j.c.div(Nn||(Nn=Object(b.a)(["\n  padding: 16px;\n  padding-top: 48px;\n  height: 100vh;\n  max-width: 100%;\n  overflow-y: auto;\n  box-sizing: border-box;\n  color: ",";\n  ","\n"])),p.white.normal,(function(n){return n.hide&&Object(j.b)(Pn||(Pn=Object(b.a)(["\n    position: fixed;\n    opacity: 0;\n    z-index: -1;\n  "])))})),ot=j.c.div(En||(En=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 0 16px;\n  padding-top: 12px;\n  background: ",";\n  box-shadow: 0px 4px 4px ",";\n  box-sizing: border-box;\n  z-index: 2;\n"])),p.black.normal,p.black.dark),st=j.c.div(In||(In=Object(b.a)(["\n  margin-bottom: 12px;\n"]))),lt=j.c.div(Bn||(Bn=Object(b.a)(["\n"]))),dt=j.c.div(Fn||(Fn=Object(b.a)(["\n  position: relative;\n  padding-bottom: 120px;\n"]))),ut=j.c.div(Ln||(Ln=Object(b.a)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 480px;\n  max-width: 100%;\n  z-index: 2;\n"]))),bt=Object(j.d)(Mn||(Mn=Object(b.a)(["\n  from { transform: rotate(0deg) }\n  to { transform: rotate(360deg) }\n"]))),jt=Object(j.c)(W)(Vn||(Vn=Object(b.a)(["\n  position: fixed;\n  left: 50%;\n  bottom: 5%;\n  transform: translate(-50%, -50%);\n  &:disabled svg {\n    animation: "," 3s linear;\n  }\n"])),bt),pt=Object(j.c)(H)(Hn||(Hn=Object(b.a)(["\n  margin-right: 4px;\n  padding: 2px 4px;\n  color: ",";\n"])),p.white.normal),ft=function(n){var t=n.hide,e=void 0!==t&&t,r=n.id,c=Object(a.useRef)(null),i=Object(a.useRef)(null),o=Object(a.useRef)(null),s=Object(a.useRef)(null),l=Object(a.useRef)(null),d=Object(a.useRef)(null),b=Object(a.useRef)(null),j=Object(a.useState)(!1),p=Object(u.a)(j,2),f=p[0],h=p[1],x=Object(a.useState)(!1),g=Object(u.a)(x,2),m=g[0],z=g[1],D=Object(a.useState)(!1),S=Object(u.a)(D,2),R=S[0],N=S[1],P=Object(a.useState)(null),E=Object(u.a)(P,2),I=E[0],B=E[1],F=function(n){var t=Object(a.useState)(null),e=Object(u.a)(t,2),r=e[0],c=e[1];return Object(a.useEffect)((function(){Object(y.a)(v.a.mark((function t(){var e,r,a,i,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(n);case 3:if(e=t.sent,r=k(e),!(a=r!==[]?r[0]:null)){t.next=12;break}return t.next=9,T(n,a);case 9:i=t.sent,o=w(i),c(o);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(0);case 16:case"end":return t.stop()}}),t,null,[[0,14]])})))()}),[]),r}(r);Object(a.useEffect)((function(){s.current&&!e&&(s.current.getCurrentTime()/s.current.getDuration()>=.99&&z(!0))}),[s,e]),Object(a.useEffect)((function(){d.current&&(e?d.current.deSync():d.current.sync())}),[e]);var L=Object(a.useMemo)((function(){var n;return!e&&f&&(n="clickToSave"),e&&f&&(n="clickToPause"),e||f||(n="clickToPlay"),e&&!f&&(n="clickToPlay"),!f&&m&&(n="clickToReplay"),n}),[e,f,m]);function M(){s.current.playVideo(),e||d.current.sync(),h(!0)}function V(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"play";if(clearTimeout(b.current),"play"===n){var t=s.current.getDuration()-s.current.getCurrentTime();b.current=setTimeout((function(){h(!1),z(!0)}),1e3*t)}}return Object(a.useEffect)((function(){V(f?"play":"stop")}),[f]),Object(O.jsxs)(at,{children:[Object(O.jsxs)(it,{ref:o,hide:e,children:[Object(O.jsxs)(ot,{children:[Object(O.jsx)(dn,{status:f,title:null===I||void 0===I?void 0:I.title,onClick:function(){i.current.toggle()}}),Object(O.jsx)(pt,{onClick:function(){c.current.toggle()},children:Object(O.jsx)(nt.a,{size:"16"})})]}),Object(O.jsx)(lt,{children:Object(O.jsx)(A,{ref:c,children:Object(O.jsx)(q,{className:"player",ref:s,onReady:function(n){B(n),F&&N(!0)},id:r})})}),Object(O.jsx)(st,{children:Object(O.jsx)(A,{ref:i,children:Object(O.jsx)(xn,{ref:d,player:s.current,onProgress:V})})}),!R&&Object(O.jsx)("div",{children:"prepare the caption."}),R&&Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(dt,{children:Object(O.jsx)($n,{status:L,captions:F,ref:l,onReplayClick:function(n){var t=n.currentTarget.dataset.sec;s.current.seekTo(t)}})})})]}),Object(O.jsx)(ut,{children:Object(O.jsxs)(jt,{status:L,disabled:!R,onClick:function(){switch(L){case"clickToPlay":M();break;case"clickToReplay":!function(){s.current.playVideo(),e||d.current.sync();z(!1),h(!0)}();break;case"clickToPause":s.current.pauseVideo(),d.current.deSync(),h(!1);break;case"clickToSave":!function(){var n=s.current.getCurrentTime();l.current.addItemBySec(n),o.current.scrollHeight-o.current.offsetHeight===o.current.scrollTop&&setTimeout((function(){return o.current.scrollTop=9999}),300)}();break;default:M()}},children:[!R&&Object(O.jsx)(tt.a,{size:"24"}),R&&"clickToPlay"===L&&Object(O.jsx)(An.a,{size:"24"}),R&&"clickToReplay"===L&&Object(O.jsx)(et.a,{size:"24"}),R&&"clickToSave"===L&&Object(O.jsx)(rt.a,{size:"24"}),R&&"clickToPause"===L&&Object(O.jsx)(ct.a,{size:"24"})]})})]})},ht=j.c.div(Jn||(Jn=Object(b.a)(["\n  \n"]))),xt=function(n){var t=n.currentPage,e=Object(l.c)((function(n){return n.videoData})).id;return Object(O.jsxs)(ht,{children:[!e&&"\u5c1a\u672a\u6dfb\u52a0\u4efb\u4f55\u5f71\u7247",e&&Object(O.jsx)(ft,{hide:"player"!==t,id:e})]})};var Ot=window.localStorage.getItem("videoHistory")||null;Ot=Ot?JSON.parse(Ot):[];var gt,mt,vt,yt,kt,wt,Tt,Ct,zt,Dt,St,Rt,Nt,Pt=Object(gn.a)({name:"videoData",initialState:{id:null,history:Ot},reducers:{clearVideoId:function(n){n.id=null},updateVideoId:function(n,t){n.id=t.payload},updateVideoHistory:function(n,t){var e;n.history=t.payload,e=t.payload,localStorage.setItem("videoHistory",JSON.stringify(e)),console.log("save")}}}),Et=j.c.div(gt||(gt=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 24px;\n  padding-top: 32px;\n  padding-bottom: 72px;\n  width: 100%;\n  background: ",";\n  box-sizing: border-box;\n"])),p.black.light),It=j.c.div(mt||(mt=Object(b.a)(["\n  position: relative;\n"]))),Bt=j.c.div(vt||(vt=Object(b.a)(["\n  position: absolute;\n  top: calc(100% + 12px);\n  width: 100%;\n  text-align: center;\n  > p {\n    position: relative;\n    display: inline-block;\n    border-radius: 4px;\n    padding: 6px 12px 8px;\n    color: ",";\n    background: ",';\n    &:before {\n      content: "";\n      position: absolute;\n      bottom: 99%;\n      left: 50%;\n      width: 0;\n      height: 0; \n      border-bottom: 6px solid ',";\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent;\n      transform: translateX(-50%);\n    }\n\n  }\n"])),p.white.normal,p.primary,p.primary),Ft=j.c.input(yt||(yt=Object(b.a)(["\n  width: 100%;\n  border: 0;\n  padding: 12px;\n  background: ",";\n  color: ",";\n  box-sizing: border-box;\n"])),p.black.dark,p.white.normal),Lt=j.c.div(kt||(kt=Object(b.a)(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  transform: scale(0.5);\n  transition: transform .3s cubic-bezier(.59,.01,.59,2.04);\n  ","\n"])),(function(n){return n.active&&Object(j.b)(wt||(wt=Object(b.a)(["\n    transform: scale(1);\n  "])))})),Mt=Object(j.c)(W)(Tt||(Tt=Object(b.a)(["\n  position: absolute;\n  left: 50%;\n  top: 100%;\n  transform: translate(-50%, -50%);\n"]))),Vt=function(n){var t=n.onGetUrl,e=Object(a.useRef)(null),r=Object(a.useState)(null),c=Object(u.a)(r,2),i=c[0],o=c[1],s=Object(a.useState)(!1),l=Object(u.a)(s,2),d=l[0],b=l[1];return Object(O.jsxs)(Et,{children:[Object(O.jsxs)(It,{children:[Object(O.jsx)(Ft,{ref:e,type:"text",onChange:function(){var n=e.current.value;if(0===n.length)b(!1),o(null);else{var t=n.split("v=")[1]||n.split("youtu.be/")[1]||null;if(t&&t.length>=11){var r=t.indexOf("&");-1!=r&&(t=t.substring(0,r)),function(n){return z.apply(this,arguments)}(t).then((function(n){!1===n?(o("Oops! \u9019\u652f\u5f71\u7247\u6c92\u6709\u63d0\u4f9b\u53ef\u7528\u5b57\u5e55 \ud83d\ude13"),b(!1)):(o(null),b(!0))}))}else o("Hmm... \u8acb\u8f38\u5165\u6b63\u78ba\u7684\u5f71\u7247\u7db2\u5740 \ud83d\ude2e"),b(!1)}},placeholder:"\u8cbc\u4e0a Youtube \u5f71\u7247\u7db2\u5740"}),i&&Object(O.jsx)(Bt,{children:Object(O.jsx)("p",{children:i})})]}),Object(O.jsx)(Lt,{active:d,children:Object(O.jsx)(Mt,{disabled:!d,onClick:function(){t(e.current.value)},children:Object(O.jsx)(rt.a,{size:"24"})})})]})},Ht=e(38),Jt=e.n(Ht),_t=function(n){var t=Object(a.useRef)(null),e=Object(a.useState)(null),r=Object(u.a)(e,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){var e=document.createElement("div");e.id=n,e.style.display="none",document.body.append(e),Jt.a.load((function(e){var r=new e.Player(n,{videoId:n,events:{onReady:function(t){return function(t){i(Object(L.a)(Object(L.a)({},t.target.getVideoData()),{},{cover:"https://img.youtube.com/vi/".concat(n,"/0.jpg")}))}(t)}}});t.current=r}))}),[]),Object(a.useEffect)((function(){if(c){t.current.destroy();var e=document.getElementById(n);document.body.removeChild(e)}}),[c]),c},At=j.c.div(Ct||(Ct=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  height: 90px;\n  img {\n    display: block;\n    max-width: 120px;\n    width: 50%;\n    height: auto;\n  }\n  .title {\n    margin-left: 12px;\n    color: ",";\n  }\n"])),p.white.normal),Wt=Object(j.d)(zt||(zt=Object(b.a)(["\n  from { transform: rotate(0deg) }\n  to { transform: rotate(360deg) }\n"]))),Ut=j.c.div(Dt||(Dt=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90px;\n  svg {\n    color: ",";\n    animation: "," 3s linear;\n  }\n"])),p.white.normal,Wt),Yt=function(n){var t=n.id,e=n.onClick,r=Object(M.a)(n,["id","onClick"]),c=_t(t);return Object(O.jsx)(O.Fragment,{children:c?Object(O.jsxs)(At,Object(L.a)(Object(L.a)({},r),{},{onClick:function(){e(t)},children:[Object(O.jsx)("img",{src:c.cover,alt:""}),Object(O.jsx)("div",{className:"title",children:c.title})]})):Object(O.jsx)(Ut,{children:Object(O.jsx)(tt.a,{size:24})})})},Xt=j.c.div(St||(St=Object(b.a)(["\n  position: relative;\n  padding: 16px;\n  padding-top: 148px;\n  height: 100vh;\n  max-width: 100%;\n  overflow-y: auto;\n  box-sizing: border-box;\n  ","\n  ","\n"])),"",""),Gt=j.c.div(Rt||(Rt=Object(b.a)(["\n  padding-top: 12px;\n"]))),qt=j.c.ul(Nt||(Nt=Object(b.a)(["\n  display: flex;\n  flex-direction: column-reverse;\n  li + li {\n    margin-bottom: 12px\n  }\n"]))),Kt=function(n){var t=n.currentPage,e=n.onIdReady,r=Object(l.b)(Pt),c=Object(l.c)((function(n){return n.videoData})),a=c.id,i=c.history;function o(n){a===n?e():(r(Pt.actions.clearVideoId()),setTimeout((function(){r(Pt.actions.updateVideoId(n)),e()}),300))}return Object(O.jsx)(O.Fragment,{children:"home"===t&&Object(O.jsxs)(Xt,{children:[Object(O.jsx)(Vt,{onGetUrl:function(n){var t=n.split("v=")[1]||n.split("youtu.be/")[1];if(t){var e=t.indexOf("&");-1!=e&&(t=t.substring(0,e)),function(n){var t=Object(On.a)(i);-1===t.findIndex((function(t){return t===n}))&&(t.push(n),r(Pt.actions.updateVideoHistory(t)))}(t)}else alert("wrong youtube link")}}),Object(O.jsx)(Gt,{children:Object(O.jsx)(qt,{children:null===i||void 0===i?void 0:i.map((function(n,t){return Object(O.jsx)("li",{children:Object(O.jsx)(Yt,{id:n,onClick:o})},t)}))})})]})})},Qt=e(39),Zt=e.n(Qt).a.parse(window.location.search).key||"";function $t(n){return new Promise((function(t,e){fetch("https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=zh-TW",{headers:{"Ocp-Apim-Subscription-Key":Zt,"content-type":"application/json"},method:"POST",body:"[{'Text': '".concat(n,"'}]")}).then((function(n){t(n.json())})).catch(e)}))}var ne,te,ee,re,ce,ae,ie,oe,se,le,de,ue,be,je,pe,fe,he,xe,Oe,ge,me,ve,ye,ke,we,Te,Ce,ze=e(77),De=e(78),Se=j.c.div(ne||(ne=Object(b.a)(["\n  display: flex;\n  margin-bottom: 12px;\n"]))),Re=j.c.p(te||(te=Object(b.a)(["\n  display: block;\n  min-width: 35%;\n"]))),Ne=j.c.button(ee||(ee=Object(b.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  padding: 0 6px;\n  border-radius: 2px;\n  margin-left: 6px;\n  color: ",";\n  background: ",";\n  z-index: 3;\n"])),p.white.normal,p.primary),Pe=Object(j.c)(Ne)(re||(re=Object(b.a)(["\n  background: ",";\n  ","\n"])),p.black.normal,(function(n){return n.check&&Object(j.b)(ce||(ce=Object(b.a)(["\n    background: ",";\n  "])),p.black.normal)})),Ee=j.c.div(ae||(ae=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n"]))),Ie=j.c.input(ie||(ie=Object(b.a)(["\n  position: relative;\n  border: 0;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  padding: 2px 4px;\n  background: transparent;\n  z-index: 0;\n  color: ",";\n  &:focus {\n    outline: none;\n  }\n  ","\n"])),p.gray.normal,p.white.normal,(function(n){return n.active&&Object(j.b)(oe||(oe=Object(b.a)(["\n    background: ",";\n    color: ",";\n    z-index: 3;\n  "])),p.white.normal,p.black.normal)})),Be=function(n){var t=n.advance,e=void 0!==t&&t,r=n.data,c=n.onUpdate,i=Object(a.useRef)(null),o=Object(a.useState)(!1),s=Object(u.a)(o,2),l=s[0],d=s[1],b=Object(a.useState)(!1),j=Object(u.a)(b,2),p=j[0],f=j[1],h=Object(a.useState)(!1),x=Object(u.a)(h,2),g=x[0],m=x[1];function k(){d(!1);var n=i.current.value,t=Object(L.a)(Object(L.a)({},r),{},{note:n});c(t)}return Object(O.jsxs)(Se,{children:[Object(O.jsx)(Re,{children:r.content}),Object(O.jsx)(Ie,{active:l,ref:i,type:"text",onFocus:function(){d(!0),m(!1)},defaultValue:r.note}),l&&Object(O.jsx)(Ne,{disabled:g,"data-word":r.content,onClick:function(n){var t=n.currentTarget.dataset.word;m(!0),Object(y.a)(v.a.mark((function n(){var e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,$t(t);case 3:e=n.sent,i.current.value=e[0].translations[0].text,m(!1),d(!1),k(),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),alert("translate false");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},children:"\u4e2d"}),e&&!l&&Object(O.jsxs)(Pe,{disabled:p,check:p,onClick:function(){f(!0);var n=i.current.value,t=Object(L.a)(Object(L.a)({},r),{},{note:n,check:!0});setTimeout((function(){return c(t)}),1e3)},children:[!p&&Object(O.jsx)(ze.a,{size:"16"}),p&&Object(O.jsx)(De.a,{size:"16"})]}),l&&Object(O.jsx)(Ee,{onClick:k})]})},Fe=e(79),Le=e(80),Me=j.c.div(se||(se=Object(b.a)(["\n  padding-top: 40px;\n  padding-bottom: 120px;\n"]))),Ve=j.c.div(le||(le=Object(b.a)(["\n  position: relative;\n  padding: 24px 12px;\n  padding-top: 36px;\n  background: ",";\n  overflow: hidden;\n  box-sizing: border-box;\n  transition: transform .3s cubic-bezier(.56,-0.93,.39,.99) .5s;\n  ","\n"])),p.black.light,(function(n){return n.save&&Object(j.b)(de||(de=Object(b.a)(["\n    transform: scale(0);\n  "])))})),He=j.c.button(ue||(ue=Object(b.a)(["\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  padding: 8px 8px;\n  border-radius: 2px;\n  width: 30px;\n  height: 30px;\n  color: ",";\n  background: ",";\n  transition: all 1s ease;\n  &:disabled {\n    background: ",";\n  }\n"])),p.white.normal,p.black.normal,p.black.light),Je=j.c.ul(be||(be=Object(b.a)(["\n\n"]))),_e=j.c.li(je||(je=Object(b.a)(["\n\n"]))),Ae=function(){var n=Object(a.useState)(!1),t=Object(u.a)(n,2),e=t[0],r=t[1],c=Object(l.c)((function(n){return n.wordLibrary})).currentData,i=Object(a.useMemo)((function(){return c}),[c]),o=Object(l.b)(_n);function s(n){o(_n.actions.updateItemToCurrentData(n))}return Object(O.jsx)(Me,{children:0!==(null===i||void 0===i?void 0:i.length)&&Object(O.jsxs)(Ve,{save:e,children:[Object(O.jsx)(He,{disabled:e,onClick:function(){r(!0),o(_n.actions.archiveCurrentDataToLibrary()),setTimeout((function(){o(_n.actions.clearCurrentData())}),1e3)},children:e?Object(O.jsx)(Fe.a,{size:"14"}):Object(O.jsx)(Le.a,{size:"14"})}),Object(O.jsx)(Je,{children:null===i||void 0===i?void 0:i.map((function(n,t){return Object(O.jsx)(_e,{children:Object(O.jsx)(Be,{data:n,onUpdate:s})},t)}))})]})})},We=j.c.div(pe||(pe=Object(b.a)(["\n  padding: 0 36px;\n  padding-top: 40px;\n  padding-bottom: 160px;\n  height: 100%;\n  overflow-y: auto;\n  background: ",";\n  box-sizing: border-box;\n"])),p.black.light),Ue=j.c.div(fe||(fe=Object(b.a)(["\n  margin-bottom: 24px;\n  font-size: 14px;\n  font-weight: 600;\n"]))),Ye=j.c.div(he||(he=Object(b.a)(["\n"]))),Xe=j.c.ul(xe||(xe=Object(b.a)(["\n\n"]))),Ge=j.c.li(Oe||(Oe=Object(b.a)(["\n\n"]))),qe=function(){var n=Object(l.c)((function(n){return n.wordLibrary})).libraryData;console.log(n);var t=Object(a.useMemo)((function(){return n}),[n]),e=Object(l.b)(_n);return Object(O.jsxs)(We,{children:[Object(O.jsx)(Ue,{children:"My Vocabulary"}),Object(O.jsx)(Ye,{children:Object(O.jsx)(Xe,{children:null===t||void 0===t?void 0:t.map((function(n,r){return Object(O.jsx)(Ge,{children:n.words.map((function(n,c){return!n.check&&Object(O.jsx)(Be,{data:n,advance:!0,onUpdate:function(n){return function(n,r,c){var a=JSON.parse(JSON.stringify(t));a[n].words[r]=c,e(_n.actions.updateLibraryData(a))}(r,c,n)}},c)}))},r)}))})})]})},Ke=e(81),Qe=j.c.div(ge||(ge=Object(b.a)(["\n  position: relative;\n  padding: 16px;\n  padding-top: 36px;\n  height: 100vh;\n  max-width: 100%;\n  overflow-y: auto;\n  box-sizing: border-box;\n  color: ",";\n  background: ",";\n  overflow: hidden;\n"])),p.white.normal,p.black.normal),Ze=j.c.div(me||(me=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 0 16px;\n  padding-top: 12px;\n  background: ",";\n  box-shadow: 0px 4px 4px ",";\n  box-sizing: border-box;\n  z-index: 2;\n  p {\n    padding: 6px 0;\n  }\n"])),p.black.normal,p.black.dark),$e=j.c.div(ve||(ve=Object(b.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding-top: 40px;\n  padding-bottom: 120px;\n  transform: translateX(100%);\n  transition: all .3s ease;\n  overflow-y: auto;\n  ","\n  z-index: 1;\n"])),(function(n){return n.open&&Object(j.b)(ye||(ye=Object(b.a)([" transform: translateX(0%);"])))})),nr=Object(j.c)(H)(ke||(ke=Object(b.a)(["\n  margin-right: 4px;\n  padding: 2px 4px;\n  color: ",";\n"])),p.white.normal),tr=function(n){var t=n.currentPage,e=Object(a.useState)(!1),r=Object(u.a)(e,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){"book"!==t&&i(!1)}),[t]),Object(O.jsx)(O.Fragment,{children:"book"===t&&Object(O.jsxs)(Qe,{children:[Object(O.jsxs)(Ze,{children:[Object(O.jsx)("p",{children:"Notebook"}),Object(O.jsx)(nr,{onClick:function(n){i(n.active)},children:Object(O.jsx)(Ke.a,{size:"18"})})]}),Object(O.jsx)(Ae,{}),Object(O.jsx)($e,{open:c,children:Object(O.jsx)(qe,{open:c})})]})})},er=function(){return Object(O.jsx)("div",{})},rr=e(82),cr=e(83),ar=e(84);var ir=j.c.div(we||(we=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: 12px 20px;\n  width: 100vw;\n  height: 90px;\n  background: ",";\n  box-sizing: border-box;\n  z-index: 1;\n  > .left, > .right {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    width: 35%\n  }\n"])),p.black.light),or=j.c.button(Te||(Te=Object(b.a)(["\n  background: transparent;\n  border: 0;\n  color: ",";\n  ","\n"])),p.gray.normal,(function(n){return n.active&&Object(j.b)(Ce||(Ce=Object(b.a)(["color: ",";"])),p.white.normal)})),sr=function(n){var t=n.currentPage,e=n.onButtonClick,r=function(n){var t=n.currentTarget.dataset.current;e(t)};return Object(O.jsxs)(ir,{children:[Object(O.jsxs)("div",{className:"left",children:[Object(O.jsx)(or,{active:"home"===t,"data-current":"home",onClick:r,children:Object(O.jsx)(rr.a,{size:"32"})}),Object(O.jsx)(or,{active:"player"===t,"data-current":"player",onClick:r,children:Object(O.jsx)(cr.a,{size:"32"})})]}),Object(O.jsxs)("div",{className:"right",children:[Object(O.jsx)(or,{active:"book"===t,"data-current":"book",onClick:r,children:Object(O.jsx)(Ke.a,{size:"32"})}),Object(O.jsx)(or,{active:"config"===t,"data-current":"config",onClick:r,children:Object(O.jsx)(ar.a,{size:"32"})})]})]})};var lr=function(){var n=Object(a.useState)("home"),t=Object(u.a)(n,2),e=t[0],r=t[1];return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{}),Object(O.jsxs)(g,{children:[Object(O.jsx)(Kt,{currentPage:e,onIdReady:function(){r("player")}}),Object(O.jsx)(xt,{currentPage:e}),Object(O.jsx)(tr,{currentPage:e}),Object(O.jsx)(er,{currentPage:e})]}),Object(O.jsx)(sr,{currentPage:e,onButtonClick:function(n){r(n)}})]})},dr=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,85)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;e(n),r(n),c(n),a(n),i(n)}))},ur=Object(d.b)({wordLibrary:_n.reducer,videoData:Pt.reducer}),br=Object(d.d)(ur);s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(l.a,{store:br,children:Object(O.jsx)(lr,{})})}),document.getElementById("root")),dr()}},[[66,1,2]]]);
//# sourceMappingURL=main.256d5617.chunk.js.map