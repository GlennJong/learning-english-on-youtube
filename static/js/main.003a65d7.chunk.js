(this["webpackJsonpyoutube-anchor"]=this["webpackJsonpyoutube-anchor"]||[]).push([[0],{49:function(n,t,e){},66:function(n,t,e){"use strict";e.r(t);var c,r,a=e(0),i=e.n(a),o=e(21),s=e.n(o),l=e(9),d=e(11),u=(e(49),e(6)),b=e(3),j=e(2),p={primary:"hsl(348, 88%, 65%)",secondary:"hsl(340, 83%, 65%)",thirdary:"hsl(334, 77%, 65%)",pureBlack:"#000",black:{dark:"hsl(246, 19%, 22%)",normal:"hsl(248, 17%, 25%)",light:"hsl(248, 15%, 28%)"},pureWhite:"#FFF",white:{dark:"hsl(204, 86%, 85%)",normal:"hsl(204, 86%, 92%)"},gray:{normal:"hsl(237, 10%, 63%)"}},f={background:"linear-gradient(0deg, ".concat(p.black.dark," 0%, ").concat(p.black.normal," 100%)"),primary:"linear-gradient(45deg, ".concat(p.primary," 0%, ").concat(p.secondary," 50%, ").concat(p.thirdary," 100%)"),blue:Object(j.b)(c||(c=Object(b.a)(["\n    background-color: #0093E9;\n    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);\n  "])))},h="'Pingfang TC', '\u5fae\u8edf\u6b63\u9ed1\u9ad4', 'Microsoft JhengHei', sans-serif",O=Object(j.a)(r||(r=Object(b.a)(["\n    body {\n        margin: 0;\n        font-family: ",";\n        font-weight: 400;\n        font-size: 16px;\n        background: ",";\n        background-size: 100% 100%;\n        width: 100vw;\n        height: 100vh;\n    }\n    #app {\n        display: flex;\n        flex-direction: column;\n    }\n    ul {\n        padding-inline-start: 0;\n        margin-block-start: 0;\n        margin-block-end: 0;\n        list-style-type: none;\n    }\n    a {\n        text-decoration: none;\n        cursor: pointer;\n        color: currentColor;\n    }\n    button {\n        outline: none;\n        cursor: pointer;\n    }\n    dd {\n        margin-inline-start: 0;\n    }\n\n    h1, h2, h3, h4, p {\n        margin: 0;\n        padding: 0;\n    }\n\n    input, textarea, select, button, a {\n        font-family: ",";\n        font-weight: 400;\n        font-size: 14px;\n    }\n"])),h,f.background,h),x=e(1),g=function(n){var t=n.children;return Object(x.jsx)("div",{children:t})},m=e(12),v=e.n(m),y=e(16);function k(n){var t=(new DOMParser).parseFromString(n,"text/xml"),e=[];function c(n){if(n.getAttribute("lang_code").includes("en"))return n.getAttribute("lang_code")}try{if(t.getElementsByTagName("transcript_list").length>0)for(var r=0;r<t.getElementsByTagName("transcript_list")[0].childNodes.length;r++){var a=c(t.getElementsByTagName("transcript_list")[0].childNodes[r]);a&&e.push(a)}else for(r=0;r<n.getElementsByTagName("transcript_list")[0].childNodes.length;r++){var i=c(n.getElementsByTagName("transcript_list")[0].childNodes[r]);i&&e.push(i)}return e}catch(o){return console.log(o),null}}function w(n){var t=(new DOMParser).parseFromString(n,"text/xml"),e=[];function c(n){var t={nbsp:" ",amp:"&",quot:'"',lt:"<",gt:">"};return n.replace(/&(nbsp|amp|quot|lt|gt);/g,(function(n,e){return t[e]})).replace(/&#(\d+);/gi,(function(n,t){var e=parseInt(t,10);return String.fromCharCode(e)}))}function r(n){return{start:n.getAttribute("start"),dur:n.getAttribute("dur"),content:c(n.innerHTML)}}try{if(t.getElementsByTagName("transcript").length>0)for(var a=0;a<t.getElementsByTagName("transcript")[0].childNodes.length;a++){var i=r(t.getElementsByTagName("transcript")[0].childNodes[a]);e.push(i)}else for(a=0;a<n.getElementsByTagName("transcript")[0].childNodes.length;a++){var o=r(n.getElementsByTagName("transcript")[0].childNodes[a]);e.push(o)}return e}catch(s){console.log(s),alert("Oops, something went wrong.")}}function T(n,t){var e="https://video.google.com/timedtext?type=track&lang=".concat(t,"&v=").concat(n,"&id=0");return new Promise((function(n,t){fetch(e,{method:"POST"}).then((function(t){return n(t.text())})).catch(t)}))}function C(n){var t="https://video.google.com/timedtext?type=list&v=".concat(n);return new Promise((function(n,e){fetch(t,{method:"POST"}).then((function(t){return n(t.text())})).catch((function(){return e(null)}))}))}function z(){return(z=Object(y.a)(v.a.mark((function n(t){var e,c,r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C(t);case 2:if(e=n.sent,!(c=k(e))){n.next=9;break}return r=0!==c.length,n.abrupt("return",r);case 9:return n.abrupt("return",!1);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}for(var D,S,N,R,P,E,I,B,F,L=e(5),M=e(10),V=j.c.button(D||(D=Object(b.a)(['\n  position: relative;\n  border: 0;\n  background: transparent;\n  padding: 3px 0px;\n  height: 100%;\n  cursor: pointer;\n  transition: transform .15s cubic-bezier(.69,-0.39,.39,2.06);\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: -4px;\n    border-radius: 4px;\n    width: calc(100% + 8px);\n    height: 100%;\n    box-shadow: 2px 2px 3px hsla(0, 0%, 0%, .5);\n    background: ',";\n    opacity: 0;\n    z-index: -1;\n  }\n  ","\n"])),p.black.normal,(function(n){return n.active&&Object(j.b)(S||(S=Object(b.a)(["\n    color: #FFF;\n    transform: scale(1.05);\n    z-index: 1;\n    &:before { opacity: 1; }\n  "])))})),H=function(n){var t=n.onClick,e=void 0===t?null:t,c=n.children,r=Object(M.a)(n,["onClick","children"]),i=Object(a.useState)(!1),o=Object(u.a)(i,2),s=o[0],l=o[1];return Object(x.jsx)(V,Object(L.a)(Object(L.a)({active:s,onClick:function(n){l(!s),e&&e({event:n,active:!s})}},r),{},{children:c}))},J=Object(a.forwardRef)((function(n,t){var e=n.children,c=Object(a.useRef)(null);function r(){c.current.classList.add("active")}function i(){c.current.classList.remove("active")}function o(){c.current.classList.contains("active")?c.current.classList.remove("active"):c.current.classList.add("active")}return Object(a.useEffect)((function(){t&&(t.current={open:r,close:i,toggle:o})}),[]),Object(x.jsx)(_,{ref:c,children:e})})),_=j.c.div(N||(N=Object(b.a)(["\n  max-height: 0px;\n  width: 100%;\n  overflow: hidden;\n  transition: max-height .3s ease;\n\n  &.active { \n    max-height: 50vh;\n  }\n"]))),A=J,W=j.c.button(R||(R=Object(b.a)(["\n  border: 0;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  background-image: ",";\n  box-shadow: 2px 4px 10px hsl(200, 5%, 5%, .5);\n  svg {\n    color: hsl(200, 5%, 90%, 1);\n    filter: drop-shadow(2px 4px 3px hsl(200, 50%, 30%, .5));\n  }\n  &:active {\n    background-image: linear-gradient(45deg, hsl(210, 40%, 20%) 0%, hsl(190, 40%, 40%) 100%);\n  }\n  &:disabled {\n    opacity: 0.5;\n  }\n"])),f.primary),U=e(30),Y={playerVars:{autoplay:0,playsinline:1,fs:0}},X=Object(a.forwardRef)((function(n,t){var e=n.id,c=n.onReady,r=void 0===c?null:c,i=Object(M.a)(n,["id","onReady"]),o=Object(a.useState)(null),s=Object(u.a)(o,2),l=s[0],d=s[1];return Object(a.useEffect)((function(){t&&(t.current=l)}),[l]),Object(x.jsx)(G,Object(L.a)(Object(L.a)({},i),{},{children:Object(x.jsx)(U.a,{className:"player",videoId:e,opts:Y,onReady:function(n){d(n.target);var t={title:n.target.getVideoData().title,duration:n.target.getDuration()};r&&r(t)}})}))})),G=j.c.div(P||(P=Object(b.a)(["\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-bottom: 56.25%;\n  .player {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    iframe {\n      width: 100% !important;\n      height: 100% !important;\n    }\n  }\n\n"]))),q=X,K=[],Q=0;Q<5;Q++)K.push(Object(j.d)(E||(E=Object(b.a)(["\n    from { transform: scaleY(","); background: hsla(210, 80%, 70%, 1);}\n    to { transform: scaleY(1); background: hsla(190, 100%, 60%, 1);}\n  "])),Math.random()/2));for(var Z=[],$=0;$<5;$++)Z.push(Object(j.d)(I||(I=Object(b.a)(["\n    from { transform: scaleY(","); background: ",";}\n    to { transform: scaleY(0.33); background: ",";}\n  "])),Math.random()/2,p.primary,p.primary));var nn,tn,en,cn,rn,an=j.c.div(B||(B=Object(b.a)(["\n  span {\n    display: inline-block;\n    vertical-align: middle;\n    margin: 0 1px;\n    margin-top: -2px;\n    width: 1px;\n    height: 10px;\n    ","\n"])),(function(n){return(n.play?K:Z).map((function(n,t){return Object(j.b)(F||(F=Object(b.a)([" &:nth-child(",") {\n          animation: "," ","s linear infinite alternate;\n        }"])),t+1,n,.3+.3*Math.random())}))})),on=function(n){var t=n.status,e=Object(M.a)(n,["status"]);return Object(x.jsxs)(an,Object(L.a)(Object(L.a)({play:t},e),{},{children:[Object(x.jsx)("span",{}),Object(x.jsx)("span",{}),Object(x.jsx)("span",{}),Object(x.jsx)("span",{}),Object(x.jsx)("span",{})]}))},sn=j.c.div(nn||(nn=Object(b.a)(["\n  display: block;\n  border: 0;\n  padding: 6px 0;\n  background: transparent;\n  white-space: nowrap;\n  overflow: hidden;\n  > .icon, > .title {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  > .icon {\n    width: 22px;\n    margin-right: 6px;\n  }\n  > .title {\n    width: calc(100% - 28px);\n  }\n"]))),ln=j.c.p(tn||(tn=Object(b.a)(["\n  ","\n  font-size: 13px;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),""),dn=function(n){var t=n.title,e=n.status,c=n.onClick,r=Object(M.a)(n,["title","status","onClick"]);return Object(x.jsxs)(sn,Object(L.a)(Object(L.a)({onClick:c},r),{},{children:[Object(x.jsx)(on,{status:e,className:"icon"}),Object(x.jsx)(ln,{className:"title",children:t})]}))},un=e(69),bn=e(70),jn=Object(a.forwardRef)((function(n,t){var e=n.player,c=n.onProgress,r=Object(a.useRef)(null),i=Object(a.useRef)(null),o=Object(a.useRef)();function s(){var n=setInterval((function(){console.log("sync"),d(e.getCurrentTime()/e.getDuration()),e.getCurrentTime()/e.getDuration()>=.99&&l()}),300);o.current=n,setTimeout((function(){return c()}),300)}function l(){console.log("clear"),clearInterval(o.current)}function d(n){var t=Math.min(Math.max(n,0),1);r.current.style.width="".concat(100*t,"%")}return Object(a.useEffect)((function(){t&&e&&(t.current={sync:s,deSync:l})}),[t,e]),Object(x.jsxs)(pn,{children:[Object(x.jsx)(hn,{onClick:function(){e.seekTo(e.getCurrentTime()-e.getDuration()/30),setTimeout((function(){return c()}),300)},children:Object(x.jsx)(un.a,{size:"18"})}),Object(x.jsx)(fn,{onTouchStart:function(){l()},onTouchMove:function(n){var t=n.currentTarget.getBoundingClientRect(),e=t.x,c=t.width,r=n.touches[0].clientX;i.current=(r-e)/c,d((r-e)/c)},onTouchEnd:function(){e.seekTo(i.current*e.getDuration()),s()},children:Object(x.jsx)("div",{ref:r,className:"bar"})}),Object(x.jsx)(hn,{onClick:function(){e.seekTo(e.getCurrentTime()+e.getDuration()/30),setTimeout((function(){return c()}),300)},children:Object(x.jsx)(bn.a,{size:"18"})})]})})),pn=j.c.div(en||(en=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: stretch;\n  padding: 6px 0;\n  width: 100%;\n"]))),fn=j.c.div(cn||(cn=Object(b.a)(["\n  display: block;\n  width: calc(100% - 76px);\n  background: ",";\n  box-sizing: border-box;\n  .bar {\n    width: 0;\n    height: 100%;\n    background: ",";\n  }\n"])),p.black.light,p.primary),hn=j.c.button(rn||(rn=Object(b.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  padding: 6px 6px;\n  width: 30px;\n  border-radius: 3px;\n  color: ",";\n  background: ",";\n  z-index: 2;\n  p {\n    transform: scale(0.65);\n    font-size: 14px;\n  }\n"])),p.white.normal,p.black.light),On=jn,xn=e(13),gn=e(23),mn=new Date;function vn(n){localStorage.setItem("wordLibrary",JSON.stringify(n))}var yn=window.localStorage.getItem("wordLibrary")||null;(yn=yn?JSON.parse(yn):[]).forEach((function(n){return n.timestamp=new Date(n.timestamp)}));var kn,wn,Tn,Cn,zn,Dn,Sn,Nn,Rn,Pn,En,In,Bn,Fn,Ln,Mn,Vn,Hn,Jn,_n,An,Wn,Un,Yn,Xn=Object(gn.a)({name:"wordLibrary",initialState:{libraryData:yn,currentData:[]},reducers:{updateItemToCurrentData:function(n,t){var e=t.payload,c=Object(xn.a)(n.currentData),r=c.findIndex((function(n){return n.content===e.content&&n.origin===e.origin}));c.splice(r,1,e),n.currentData=c},addItemToCurrentData:function(n,t){var e=t.payload,c=Object(xn.a)(n.currentData);c.push(e),n.currentData=c},removeItemFromCurrentData:function(n,t){var e=t.payload,c=Object(xn.a)(n.currentData),r=c.findIndex((function(n){return n.content===e.content&&n.origin===e.origin}));c.splice(r,1),n.currentData=c},archiveCurrentDataToLibrary:function(n){!function(n,t){var e=Object(xn.a)(n.libraryData),c=e.findIndex((function(n){return n.timestamp===mn})),r={timestamp:mn,words:t};-1!==c?t.forEach((function(n){return e[c].words.push(n)})):e.push(r),n.libraryData=e,vn(e)}(n,Object(xn.a)(n.currentData))},clearCurrentData:function(n){n.currentData=[]},updateLibraryData:function(n,t){n.libraryData=t.payload,vn(t.payload)}}}),Gn=e(71),qn=j.c.li(kn||(kn=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  & + li {\n    margin-top: 12px;\n  }\n"]))),Kn=j.c.button(wn||(wn=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 12px;\n  border: 2px solid ",";\n  border-radius: 50%;\n  padding: 0;\n  width: 22px;\n  height: 22px;\n  background: transparent;\n  color: ",";\n"])),p.middle,p.white.normal),Qn=j.c.div(Tn||(Tn=Object(b.a)(["\n  width: calc(100% - 36px);\n"]))),Zn=Object(j.c)(H)(Cn||(Cn=Object(b.a)(["\n  margin-left: -1px;\n  margin-right: -1px;\n  color: ",";\n"])),p.pureWhite),$n=function(n){var t,e=n.data,c=n.onReplayClick,r=n.onWordClick,a=Object(M.a)(n,["data","onReplayClick","onWordClick"]);function i(n){var t=n.event,c=n.active,a=t.currentTarget.dataset.word;r({word:a,status:c?"add":"remove",origin:e.content})}return Object(x.jsxs)(qn,Object(L.a)(Object(L.a)({},a),{},{children:[Object(x.jsx)(Kn,{"data-sec":e.start,onClick:c,children:Object(x.jsx)(Gn.a,{size:14})}),Object(x.jsx)(Qn,{children:(t=e.content,t.split(/(\s+)(\w+)/g).map((function(n){return n.match(/\w+/)?{type:"button",content:n}:n}))).map((function(n,t){return"button"===n.type?Object(x.jsx)(Zn,{"data-word":n.content,onClick:i,children:n.content},t):Object(x.jsx)("span",{children:n},t)}))})]}))},nt=Object(a.forwardRef)((function(n,t){var e=n.captions,c=n.status,r=n.onReplayClick,i=Object(a.useState)([]),o=Object(u.a)(i,2),s=o[0],d=o[1],b=Object(a.useRef)(null);function j(n){var t,c=function(n){var t,c=n-.5;return e.forEach((function(n){var e=Number(n.start),r=e+Number(n.dur);c>e&&c<=r&&(t={start:e,end:r,content:n.content,spot:c,timestamp:new Date})})),t}(n),r=Object(xn.a)(b.current);c&&(null===c||void 0===c?void 0:c.content)!==(null===(t=r[r.length-1])||void 0===t?void 0:t.content)&&(r.push(c),d(r))}function p(n){var t=n.status,e=n.word,c=n.origin;"add"===t?function(n,t){var e={origin:t,content:n,timestamp:new Date};f(Xn.actions.addItemToCurrentData(e))}(e,c):"remove"===t&&function(n,t){var e={origin:t,content:n};f(Xn.actions.removeItemFromCurrentData(e))}(e,c)}Object(a.useEffect)((function(){t&&(t.current={addItemBySec:j})}),[]),Object(a.useEffect)((function(){b&&(b.current=s)}),[s]);var f=Object(l.b)(Xn);return Object(x.jsxs)(tt,{children:[0===s.length&&Object(x.jsxs)(et,{children:["clickToReplay"===c&&Object(x.jsx)("span",{children:"Press \u21ba to replay again \ud83e\udd14"}),"clickToSave"===c&&Object(x.jsxs)("span",{children:["Great! Press ",Object(x.jsx)("img",{src:"/images/icon-add.svg",alt:""})," to add first sentence \ud83c\udf89"]}),"clickToPlay"===c&&Object(x.jsxs)("span",{children:["Hi! Press ",Object(x.jsx)("img",{src:"/images/icon-play.svg",alt:""})," to start your listening \ud83d\udc4d"]})]}),Object(x.jsx)(ct,{children:null===s||void 0===s?void 0:s.map((function(n,t){return Object(x.jsx)($n,{onReplayClick:r,onWordClick:p,data:n},t)}))})]})})),tt=j.c.div(zn||(zn=Object(b.a)(["\n  border-radius: 4px;\n  padding: 16px 12px;\n  background: ",";\n  box-sizing: border-box;\n  \n"])),p.black.light),et=j.c.div(Dn||(Dn=Object(b.a)(["\n  span, img {\n    display: inline-block;\n    vertical-align: middle;\n  }\n  img {\n    margin-bottom: 2px;\n  }\n"]))),ct=j.c.ul(Sn||(Sn=Object(b.a)(["\n  \n"]))),rt=nt,at=e(72),it=e(73),ot=e(74),st=e(75),lt=e(76),dt=j.c.div(Nn||(Nn=Object(b.a)(["\n  background: ",";\n"])),p.black.normal),ut=j.c.div(Rn||(Rn=Object(b.a)(["\n  padding: 16px;\n  padding-top: 48px;\n  height: 100vh;\n  max-width: 100%;\n  overflow-y: auto;\n  box-sizing: border-box;\n  color: ",";\n  ","\n"])),p.white.normal,(function(n){return n.hide&&Object(j.b)(Pn||(Pn=Object(b.a)(["\n    position: fixed;\n    opacity: 0;\n    z-index: -1;\n  "])))})),bt=j.c.div(En||(En=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 0 16px;\n  padding-top: 12px;\n  background: ",";\n  box-shadow: 0px 4px 4px ",";\n  box-sizing: border-box;\n  z-index: 2;\n"])),p.black.normal,p.black.dark),jt=j.c.div(In||(In=Object(b.a)(["\n  margin-bottom: 12px;\n"]))),pt=j.c.div(Bn||(Bn=Object(b.a)(["\n  position: relative;\n"]))),ft=j.c.div(Fn||(Fn=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n"]))),ht=j.c.div(Ln||(Ln=Object(b.a)(["\n  position: relative;\n  padding-bottom: 120px;\n"]))),Ot=j.c.div(Mn||(Mn=Object(b.a)(["\n  display: flex;\n  position: fixed;\n  bottom: 120px;\n  left: 0;\n  width: 100%;\n  height: 0;\n  max-width: 100%;\n  z-index: 2;\n"]))),xt=Object(j.d)(Vn||(Vn=Object(b.a)(["\n  from { transform: rotate(0deg) }\n  to { transform: rotate(360deg) }\n"]))),gt=Object(j.d)(Hn||(Hn=Object(b.a)(["\n  0% { transform: scale(1) }\n  30% { transform: scale(0.9) }\n  80% { transform: scale(0.9) }\n  90% { transform: scale(1.1) }\n  100% { transform: scale(1.1) }\n"]))),mt=Object(j.c)(W)(Jn||(Jn=Object(b.a)(["\n  margin: 0 auto;\n  &:disabled svg {\n    animation: "," 3s linear;\n  }\n  ","\n"])),xt,(function(n){return"clickToPlay"===n.status&&Object(j.b)(_n||(_n=Object(b.a)(["\n    animation: "," 1s ease infinite;\n  "])),gt)})),vt=Object(j.c)(H)(An||(An=Object(b.a)(["\n  margin-right: 4px;\n  padding: 2px 4px;\n  color: ",";\n"])),p.white.normal),yt=function(n){var t=n.hide,e=void 0!==t&&t,c=n.id,r=Object(a.useRef)(null),i=Object(a.useRef)(null),o=Object(a.useRef)(null),s=Object(a.useRef)(null),l=Object(a.useRef)(null),d=Object(a.useRef)(null),b=Object(a.useRef)(null),j=Object(a.useState)(!1),p=Object(u.a)(j,2),f=p[0],h=p[1],O=Object(a.useState)(!1),g=Object(u.a)(O,2),m=g[0],z=g[1],D=Object(a.useState)(!1),S=Object(u.a)(D,2),N=S[0],R=S[1],P=Object(a.useState)(null),E=Object(u.a)(P,2),I=E[0],B=E[1],F=function(n){var t=Object(a.useState)(null),e=Object(u.a)(t,2),c=e[0],r=e[1];return Object(a.useEffect)((function(){Object(y.a)(v.a.mark((function t(){var e,c,a,i,o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(n);case 3:if(e=t.sent,c=k(e),!(a=c!==[]?c[0]:null)){t.next=12;break}return t.next=9,T(n,a);case 9:i=t.sent,o=w(i),r(o);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(0);case 16:case"end":return t.stop()}}),t,null,[[0,14]])})))()}),[]),c}(c);Object(a.useEffect)((function(){s.current&&!e&&(s.current.getCurrentTime()/s.current.getDuration()>=.99&&z(!0))}),[s,e]),Object(a.useEffect)((function(){d.current&&(e?d.current.deSync():d.current.sync())}),[e]);var L=Object(a.useMemo)((function(){var n;return!e&&f&&(n="clickToSave"),e&&f&&(n="clickToPause"),e||f||(n="clickToPlay"),e&&!f&&(n="clickToPlay"),!f&&m&&(n="clickToReplay"),n}),[e,f,m]);function M(){s.current.playVideo(),e||d.current.sync(),h(!0)}function V(){s.current.pauseVideo(),d.current.deSync(),h(!1)}function H(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"play";if(clearTimeout(b.current),"play"===n){var t=s.current.getDuration()-s.current.getCurrentTime();b.current=setTimeout((function(){h(!1),z(!0)}),1e3*t)}}return Object(a.useEffect)((function(){H(f?"play":"stop")}),[f]),Object(x.jsxs)(dt,{children:[Object(x.jsxs)(ut,{ref:o,hide:e,children:[Object(x.jsxs)(bt,{children:[Object(x.jsx)(dn,{status:f,title:null===I||void 0===I?void 0:I.title,onClick:function(){i.current.toggle()}}),Object(x.jsx)(vt,{onClick:function(){r.current.toggle()},children:Object(x.jsx)(at.a,{size:"16"})})]}),Object(x.jsx)(pt,{children:Object(x.jsxs)(A,{ref:r,children:[Object(x.jsx)(ft,{onClick:V}),Object(x.jsx)(q,{className:"player",ref:s,onReady:function(n){B(n),F&&R(!0)},id:c})]})}),Object(x.jsx)(jt,{children:Object(x.jsx)(A,{ref:i,children:Object(x.jsx)(On,{ref:d,player:s.current,onProgress:H})})}),!N&&Object(x.jsx)("div",{children:"prepare the caption."}),N&&Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(ht,{children:Object(x.jsx)(rt,{status:L,captions:F,ref:l,onReplayClick:function(n){var t=n.currentTarget.dataset.sec;s.current.seekTo(t)}})})})]}),Object(x.jsx)(Ot,{children:Object(x.jsxs)(mt,{status:L,disabled:!N,onClick:function(){switch(L){case"clickToPlay":M();break;case"clickToReplay":!function(){s.current.playVideo(),e||d.current.sync();z(!1),h(!0)}();break;case"clickToPause":V();break;case"clickToSave":!function(){var n=s.current.getCurrentTime();l.current.addItemBySec(n),o.current.scrollHeight-o.current.offsetHeight===o.current.scrollTop&&setTimeout((function(){return o.current.scrollTop=9999}),300)}();break;default:M()}},children:[!N&&Object(x.jsx)(it.a,{size:"24"}),N&&"clickToPlay"===L&&Object(x.jsx)(Gn.a,{size:"24"}),N&&"clickToReplay"===L&&Object(x.jsx)(ot.a,{size:"24"}),N&&"clickToSave"===L&&Object(x.jsx)(st.a,{size:"24"}),N&&"clickToPause"===L&&Object(x.jsx)(lt.a,{size:"24"})]})})]})},kt=e(77),wt=j.c.div(Wn||(Wn=Object(b.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  border: 0;\n  svg {\n    margin-top: -120px;\n    color: ",";\n  }\n"])),p.gray.normal),Tt=j.c.p(Un||(Un=Object(b.a)(["\n  color: ",";\n  font-size: 13px;\n  font-weight: 600;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])),p.gray.normal),Ct=function(n){var t=Object.assign({},n);return Object(x.jsxs)(wt,Object(L.a)(Object(L.a)({},t),{},{children:[Object(x.jsx)(kt.a,{size:72}),Object(x.jsx)(Tt,{children:"Oops! there is nothing for listening."})]}))},zt=j.c.div(Yn||(Yn=Object(b.a)(["\n  \n"]))),Dt=function(n){var t=n.currentPage,e=Object(l.c)((function(n){return n.videoData})).id;return Object(x.jsxs)(zt,{children:[!e&&"player"===t&&Object(x.jsx)(Ct,{}),e&&Object(x.jsx)(yt,{hide:"player"!==t,id:e})]})};var St=window.localStorage.getItem("videoHistory")||null;St=St?JSON.parse(St):[];var Nt,Rt,Pt,Et,It,Bt,Ft,Lt,Mt,Vt,Ht,Jt,_t,At=Object(gn.a)({name:"videoData",initialState:{id:null,history:St},reducers:{clearVideoId:function(n){n.id=null},updateVideoId:function(n,t){n.id=t.payload},updateVideoHistory:function(n,t){var e;n.history=t.payload,e=t.payload,localStorage.setItem("videoHistory",JSON.stringify(e)),console.log("save")}}}),Wt=j.c.div(Nt||(Nt=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 24px;\n  padding-top: 32px;\n  padding-bottom: 72px;\n  width: 100%;\n  background: ",";\n  box-sizing: border-box;\n"])),p.black.light),Ut=j.c.div(Rt||(Rt=Object(b.a)(["\n  position: relative;\n"]))),Yt=j.c.div(Pt||(Pt=Object(b.a)(["\n  position: absolute;\n  top: calc(100% + 12px);\n  width: 100%;\n  text-align: center;\n  > p {\n    position: relative;\n    display: inline-block;\n    border-radius: 4px;\n    padding: 6px 12px 8px;\n    color: ",";\n    background: ",';\n    &:before {\n      content: "";\n      position: absolute;\n      bottom: 99%;\n      left: 50%;\n      width: 0;\n      height: 0; \n      border-bottom: 6px solid ',";\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent;\n      transform: translateX(-50%);\n    }\n\n  }\n"])),p.white.normal,p.primary,p.primary),Xt=j.c.input(Et||(Et=Object(b.a)(["\n  width: 100%;\n  border: 0;\n  padding: 12px;\n  background: ",";\n  color: ",";\n  box-sizing: border-box;\n"])),p.black.dark,p.white.normal),Gt=j.c.div(It||(It=Object(b.a)(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  transform: scale(0.5);\n  transition: transform .3s cubic-bezier(.59,.01,.59,2.04);\n  ","\n"])),(function(n){return n.active&&Object(j.b)(Bt||(Bt=Object(b.a)(["\n    transform: scale(1);\n  "])))})),qt=Object(j.c)(W)(Ft||(Ft=Object(b.a)(["\n  position: absolute;\n  left: 50%;\n  top: 100%;\n  transform: translate(-50%, -50%);\n"]))),Kt=function(n){var t=n.onGetUrl,e=Object(a.useRef)(null),c=Object(a.useState)(null),r=Object(u.a)(c,2),i=r[0],o=r[1],s=Object(a.useState)(!1),l=Object(u.a)(s,2),d=l[0],b=l[1];return Object(x.jsxs)(Wt,{children:[Object(x.jsxs)(Ut,{children:[Object(x.jsx)(Xt,{ref:e,type:"text",onChange:function(){var n=e.current.value;if(0===n.length)b(!1),o(null);else{var t=n.split("v=")[1]||n.split("youtu.be/")[1]||null;if(t&&t.length>=11){var c=t.indexOf("&");-1!=c&&(t=t.substring(0,c)),function(n){return z.apply(this,arguments)}(t).then((function(n){!1===n?(o("Oops! \u9019\u652f\u5f71\u7247\u6c92\u6709\u63d0\u4f9b\u53ef\u7528\u5b57\u5e55 \ud83d\ude13"),b(!1)):(o(null),b(!0))}))}else o("Hmm... \u8acb\u8f38\u5165\u6b63\u78ba\u7684\u5f71\u7247\u7db2\u5740 \ud83d\ude2e"),b(!1)}},placeholder:"\u8cbc\u4e0a Youtube \u5f71\u7247\u7db2\u5740"}),i&&Object(x.jsx)(Yt,{children:Object(x.jsx)("p",{children:i})})]}),Object(x.jsx)(Gt,{active:d,children:Object(x.jsx)(qt,{disabled:!d,onClick:function(){t(e.current.value)},children:Object(x.jsx)(st.a,{size:"24"})})})]})},Qt=e(37),Zt=e.n(Qt),$t=function(n){var t=Object(a.useRef)(null),e=Object(a.useState)(null),c=Object(u.a)(e,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){var e=document.createElement("div");e.id=n,e.style.display="none",document.body.append(e),Zt.a.load((function(e){var c=new e.Player(n,{videoId:n,events:{onReady:function(t){return function(t){i(Object(L.a)(Object(L.a)({},t.target.getVideoData()),{},{cover:"https://img.youtube.com/vi/".concat(n,"/0.jpg")}))}(t)}}});t.current=c}))}),[]),Object(a.useEffect)((function(){if(r){t.current.destroy();var e=document.getElementById(n);document.body.removeChild(e)}}),[r]),r},ne=j.c.div(Lt||(Lt=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  height: 90px;\n  img {\n    display: block;\n    max-width: 120px;\n    width: 50%;\n    height: auto;\n  }\n  .title {\n    margin-left: 12px;\n    color: ",";\n  }\n"])),p.white.normal),te=Object(j.d)(Mt||(Mt=Object(b.a)(["\n  from { transform: rotate(0deg) }\n  to { transform: rotate(360deg) }\n"]))),ee=j.c.div(Vt||(Vt=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90px;\n  svg {\n    color: ",";\n    animation: "," 3s linear;\n  }\n"])),p.white.normal,te),ce=function(n){var t=n.id,e=n.onClick,c=Object(M.a)(n,["id","onClick"]),r=$t(t);return Object(x.jsx)(x.Fragment,{children:r?Object(x.jsxs)(ne,Object(L.a)(Object(L.a)({},c),{},{onClick:function(){e(t)},children:[Object(x.jsx)("img",{src:r.cover,alt:""}),Object(x.jsx)("div",{className:"title",children:r.title})]})):Object(x.jsx)(ee,{children:Object(x.jsx)(it.a,{size:24})})})},re=j.c.div(Ht||(Ht=Object(b.a)(["\n  position: relative;\n  padding: 16px;\n  padding-top: 148px;\n  height: 100vh;\n  max-width: 100%;\n  overflow-y: auto;\n  box-sizing: border-box;\n"]))),ae=j.c.div(Jt||(Jt=Object(b.a)(["\n  padding-top: 12px;\n"]))),ie=j.c.ul(_t||(_t=Object(b.a)(["\n  display: flex;\n  flex-direction: column-reverse;\n  li + li {\n    margin-bottom: 12px\n  }\n"]))),oe=function(n){var t=n.currentPage,e=n.onIdReady,c=Object(l.b)(At),r=Object(l.c)((function(n){return n.videoData})),a=r.id,i=r.history;function o(n){a===n?e():(c(At.actions.clearVideoId()),setTimeout((function(){c(At.actions.updateVideoId(n)),e()}),300))}return Object(x.jsx)(x.Fragment,{children:"home"===t&&Object(x.jsxs)(re,{children:[Object(x.jsx)(Kt,{onGetUrl:function(n){var t=n.split("v=")[1]||n.split("youtu.be/")[1];if(t){var e=t.indexOf("&");-1!=e&&(t=t.substring(0,e)),function(n){var t=Object(xn.a)(i);-1===t.findIndex((function(t){return t===n}))&&(t.push(n),c(At.actions.updateVideoHistory(t)))}(t)}else alert("wrong youtube link")}}),Object(x.jsx)(ae,{children:Object(x.jsx)(ie,{children:null===i||void 0===i?void 0:i.map((function(n,t){return Object(x.jsx)("li",{children:Object(x.jsx)(ce,{id:n,onClick:o})},t)}))})})]})})},se=e(38),le=e.n(se).a.parse(window.location.search).key||"";function de(n){return new Promise((function(t,e){fetch("https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=zh-TW",{headers:{"Ocp-Apim-Subscription-Key":le,"content-type":"application/json"},method:"POST",body:"[{'Text': '".concat(n,"'}]")}).then((function(n){t(n.json())})).catch(e)}))}var ue,be,je,pe,fe,he,Oe,xe,ge,me,ve,ye,ke,we,Te,Ce,ze,De,Se,Ne,Re,Pe,Ee,Ie,Be,Fe,Le,Me=e(78),Ve=e(79),He=j.c.div(ue||(ue=Object(b.a)(["\n  display: flex;\n  margin-bottom: 12px;\n"]))),Je=j.c.p(be||(be=Object(b.a)(["\n  display: block;\n  min-width: 35%;\n"]))),_e=j.c.button(je||(je=Object(b.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  padding: 0 6px;\n  border-radius: 2px;\n  margin-left: 6px;\n  color: ",";\n  background: ",";\n  z-index: 3;\n"])),p.white.normal,p.primary),Ae=Object(j.c)(_e)(pe||(pe=Object(b.a)(["\n  background: ",";\n  ","\n"])),p.black.normal,(function(n){return n.check&&Object(j.b)(fe||(fe=Object(b.a)(["\n    background: ",";\n  "])),p.black.normal)})),We=j.c.div(he||(he=Object(b.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n"]))),Ue=j.c.input(Oe||(Oe=Object(b.a)(["\n  position: relative;\n  border: 0;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  padding: 2px 4px;\n  background: transparent;\n  z-index: 0;\n  color: ",";\n  &:focus {\n    outline: none;\n  }\n  ","\n"])),p.gray.normal,p.white.normal,(function(n){return n.active&&Object(j.b)(xe||(xe=Object(b.a)(["\n    background: ",";\n    color: ",";\n    z-index: 3;\n  "])),p.white.normal,p.black.normal)})),Ye=function(n){var t=n.advance,e=void 0!==t&&t,c=n.data,r=n.onUpdate,i=Object(a.useRef)(null),o=Object(a.useState)(!1),s=Object(u.a)(o,2),l=s[0],d=s[1],b=Object(a.useState)(!1),j=Object(u.a)(b,2),p=j[0],f=j[1],h=Object(a.useState)(!1),O=Object(u.a)(h,2),g=O[0],m=O[1];function k(){d(!1);var n=i.current.value,t=Object(L.a)(Object(L.a)({},c),{},{note:n});r(t)}return Object(x.jsxs)(He,{children:[Object(x.jsx)(Je,{children:c.content}),Object(x.jsx)(Ue,{active:l,ref:i,type:"text",onFocus:function(){d(!0),m(!1)},defaultValue:c.note}),l&&Object(x.jsx)(_e,{disabled:g,"data-word":c.content,onClick:function(n){var t=n.currentTarget.dataset.word;m(!0),Object(y.a)(v.a.mark((function n(){var e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,de(t);case 3:e=n.sent,i.current.value=e[0].translations[0].text,m(!1),d(!1),k(),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),alert("translate false");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()},children:"\u4e2d"}),e&&!l&&Object(x.jsxs)(Ae,{disabled:p,check:p,onClick:function(){f(!0);var n=i.current.value,t=Object(L.a)(Object(L.a)({},c),{},{note:n,check:!0});setTimeout((function(){return r(t)}),1e3)},children:[!p&&Object(x.jsx)(Me.a,{size:"16"}),p&&Object(x.jsx)(Ve.a,{size:"16"})]}),l&&Object(x.jsx)(We,{onClick:k})]})},Xe=e(80),Ge=j.c.div(ge||(ge=Object(b.a)(["\n  padding-top: 40px;\n  padding-bottom: 120px;\n"]))),qe=j.c.div(me||(me=Object(b.a)(["\n  position: relative;\n  padding: 24px 12px;\n  padding-top: 36px;\n  background: ",";\n  overflow: hidden;\n  box-sizing: border-box;\n  transition: transform .3s cubic-bezier(.56,-0.93,.39,.99) .5s;\n  ","\n"])),p.black.light,(function(n){return n.save&&Object(j.b)(ve||(ve=Object(b.a)(["\n    transform: scale(0);\n  "])))})),Ke=j.c.button(ye||(ye=Object(b.a)(["\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: 0;\n  padding: 8px 8px;\n  border-radius: 2px;\n  width: 30px;\n  height: 30px;\n  color: ",";\n  background: ",";\n  transition: all 1s ease;\n  &:disabled {\n    background: ",";\n  }\n"])),p.white.normal,p.black.normal,p.black.light),Qe=j.c.ul(ke||(ke=Object(b.a)(["\n\n"]))),Ze=j.c.li(we||(we=Object(b.a)(["\n\n"]))),$e=function(){var n=Object(a.useState)(!1),t=Object(u.a)(n,2),e=t[0],c=t[1],r=Object(l.c)((function(n){return n.wordLibrary})).currentData,i=Object(a.useMemo)((function(){return r}),[r]),o=Object(l.b)(Xn);function s(n){o(Xn.actions.updateItemToCurrentData(n))}return Object(x.jsx)(Ge,{children:0!==(null===i||void 0===i?void 0:i.length)&&Object(x.jsxs)(qe,{save:e,children:[Object(x.jsx)(Ke,{disabled:e,onClick:function(){c(!0),o(Xn.actions.archiveCurrentDataToLibrary()),setTimeout((function(){o(Xn.actions.clearCurrentData())}),1e3)},children:e?Object(x.jsx)(Me.a,{size:"14"}):Object(x.jsx)(Xe.a,{size:"14"})}),Object(x.jsx)(Qe,{children:null===i||void 0===i?void 0:i.map((function(n,t){return Object(x.jsx)(Ze,{children:Object(x.jsx)(Ye,{data:n,onUpdate:s})},t)}))})]})})},nc=j.c.div(Te||(Te=Object(b.a)(["\n  padding: 0 36px;\n  padding-top: 40px;\n  padding-bottom: 160px;\n  height: 100%;\n  overflow-y: auto;\n  background: ",";\n  box-sizing: border-box;\n"])),p.black.light),tc=j.c.div(Ce||(Ce=Object(b.a)(["\n  margin-bottom: 24px;\n  font-size: 14px;\n  font-weight: 600;\n"]))),ec=j.c.div(ze||(ze=Object(b.a)(["\n"]))),cc=j.c.ul(De||(De=Object(b.a)(["\n\n"]))),rc=j.c.li(Se||(Se=Object(b.a)(["\n\n"]))),ac=function(){var n=Object(l.c)((function(n){return n.wordLibrary})).libraryData,t=Object(a.useMemo)((function(){return n}),[n]),e=Object(l.b)(Xn);return Object(x.jsxs)(nc,{children:[Object(x.jsx)(tc,{children:"My Vocabulary"}),Object(x.jsx)(ec,{children:Object(x.jsx)(cc,{children:null===t||void 0===t?void 0:t.map((function(n,c){return Object(x.jsx)(rc,{children:n.words.map((function(n,r){return!n.check&&Object(x.jsx)(Ye,{data:n,advance:!0,onUpdate:function(n){return function(n,c,r){var a=JSON.parse(JSON.stringify(t));a[n].words[c]=r,e(Xn.actions.updateLibraryData(a))}(c,r,n)}},r)}))},c)}))})})]})},ic=e(81),oc=j.c.div(Ne||(Ne=Object(b.a)(["\n  position: relative;\n  padding: 16px;\n  padding-top: 36px;\n  height: 100vh;\n  max-width: 100%;\n  box-sizing: border-box;\n  color: ",";\n  background: ",";\n  overflow: hidden;\n"])),p.white.normal,p.black.normal),sc=j.c.div(Re||(Re=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 0 16px;\n  padding-top: 12px;\n  background: ",";\n  box-shadow: 0px 4px 4px ",";\n  box-sizing: border-box;\n  z-index: 2;\n  p {\n    padding: 6px 0;\n  }\n"])),p.black.normal,p.black.dark),lc=j.c.div(Pe||(Pe=Object(b.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding-top: 40px;\n  padding-bottom: 120px;\n  transform: translateX(100%);\n  transition: all .3s ease;\n  overflow-y: auto;\n  ","\n  z-index: 1;\n"])),(function(n){return n.open&&Object(j.b)(Ee||(Ee=Object(b.a)([" transform: translateX(0%);"])))})),dc=Object(j.c)(H)(Ie||(Ie=Object(b.a)(["\n  margin-right: 4px;\n  padding: 2px 4px;\n  color: ",";\n"])),p.white.normal),uc=function(n){var t=n.currentPage,e=Object(a.useState)(!1),c=Object(u.a)(e,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){"book"!==t&&i(!1)}),[t]),Object(x.jsx)(x.Fragment,{children:"book"===t&&Object(x.jsxs)(oc,{children:[Object(x.jsxs)(sc,{children:[Object(x.jsx)("p",{children:"Notebook"}),Object(x.jsx)(dc,{onClick:function(n){i(n.active)},children:Object(x.jsx)(ic.a,{size:"18"})})]}),Object(x.jsx)($e,{}),Object(x.jsx)(lc,{open:r,children:Object(x.jsx)(ac,{open:r})})]})})},bc=function(){return Object(x.jsx)("div",{})},jc=e(82),pc=e(83),fc=e(84);var hc=j.c.div(Be||(Be=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: 12px 20px;\n  width: 100vw;\n  height: 90px;\n  background: ",";\n  box-sizing: border-box;\n  z-index: 1;\n  > .left, > .right {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    width: 35%\n  }\n"])),p.black.light),Oc=j.c.button(Fe||(Fe=Object(b.a)(["\n  background: transparent;\n  border: 0;\n  color: ",";\n  ","\n"])),p.gray.normal,(function(n){return n.active&&Object(j.b)(Le||(Le=Object(b.a)(["color: ",";"])),p.white.normal)})),xc=function(n){var t=n.currentPage,e=n.onButtonClick,c=function(n){var t=n.currentTarget.dataset.current;e(t)};return Object(x.jsxs)(hc,{children:[Object(x.jsxs)("div",{className:"left",children:[Object(x.jsx)(Oc,{active:"home"===t,"data-current":"home",onClick:c,children:Object(x.jsx)(jc.a,{size:"32"})}),Object(x.jsx)(Oc,{active:"player"===t,"data-current":"player",onClick:c,children:Object(x.jsx)(pc.a,{size:"32"})})]}),Object(x.jsxs)("div",{className:"right",children:[Object(x.jsx)(Oc,{active:"book"===t,"data-current":"book",onClick:c,children:Object(x.jsx)(ic.a,{size:"32"})}),Object(x.jsx)(Oc,{active:"config"===t,"data-current":"config",onClick:c,children:Object(x.jsx)(fc.a,{size:"32"})})]})]})};var gc=function(){var n=Object(a.useState)("home"),t=Object(u.a)(n,2),e=t[0],c=t[1];return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(O,{}),Object(x.jsxs)(g,{children:[Object(x.jsx)(oe,{currentPage:e,onIdReady:function(){c("player")}}),Object(x.jsx)(Dt,{currentPage:e}),Object(x.jsx)(uc,{currentPage:e}),Object(x.jsx)(bc,{currentPage:e})]}),Object(x.jsx)(xc,{currentPage:e,onButtonClick:function(n){c(n)}})]})},mc=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,85)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;e(n),c(n),r(n),a(n),i(n)}))},vc=Object(d.b)({wordLibrary:Xn.reducer,videoData:At.reducer}),yc=Object(d.d)(vc);s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(l.a,{store:yc,children:Object(x.jsx)(gc,{})})}),document.getElementById("root")),mc()}},[[66,1,2]]]);
//# sourceMappingURL=main.003a65d7.chunk.js.map