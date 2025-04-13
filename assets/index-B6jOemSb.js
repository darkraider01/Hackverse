(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();function tE(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var d_={exports:{}},mc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZS;function CR(){if(ZS)return mc;ZS=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:s,type:i,key:c,ref:a!==void 0?a:null,props:l}}return mc.Fragment=t,mc.jsx=e,mc.jsxs=e,mc}var QS;function DR(){return QS||(QS=1,d_.exports=CR()),d_.exports}var Xt=DR(),p_={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KS;function UR(){if(KS)return ye;KS=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function x(b){return b===null||typeof b!="object"?null:(b=g&&b[g]||b["@@iterator"],typeof b=="function"?b:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function y(b,Q,pt){this.props=b,this.context=Q,this.refs=M,this.updater=pt||v}y.prototype.isReactComponent={},y.prototype.setState=function(b,Q){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,Q,"setState")},y.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function S(){}S.prototype=y.prototype;function L(b,Q,pt){this.props=b,this.context=Q,this.refs=M,this.updater=pt||v}var D=L.prototype=new S;D.constructor=L,E(D,y.prototype),D.isPureReactComponent=!0;var A=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function C(b,Q,pt,Mt,Z,dt){return pt=dt.ref,{$$typeof:s,type:b,key:Q,ref:pt!==void 0?pt:null,props:dt}}function F(b,Q){return C(b.type,Q,void 0,void 0,void 0,b.props)}function w(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function R(b){var Q={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(pt){return Q[pt]})}var H=/\/+/g;function Y(b,Q){return typeof b=="object"&&b!==null&&b.key!=null?R(""+b.key):Q.toString(36)}function tt(){}function lt(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(tt,tt):(b.status="pending",b.then(function(Q){b.status==="pending"&&(b.status="fulfilled",b.value=Q)},function(Q){b.status==="pending"&&(b.status="rejected",b.reason=Q)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function at(b,Q,pt,Mt,Z){var dt=typeof b;(dt==="undefined"||dt==="boolean")&&(b=null);var _t=!1;if(b===null)_t=!0;else switch(dt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(b.$$typeof){case s:case t:_t=!0;break;case m:return _t=b._init,at(_t(b._payload),Q,pt,Mt,Z)}}if(_t)return Z=Z(b),_t=Mt===""?"."+Y(b,0):Mt,A(Z)?(pt="",_t!=null&&(pt=_t.replace(H,"$&/")+"/"),at(Z,Q,pt,"",function(qt){return qt})):Z!=null&&(w(Z)&&(Z=F(Z,pt+(Z.key==null||b&&b.key===Z.key?"":(""+Z.key).replace(H,"$&/")+"/")+_t)),Q.push(Z)),1;_t=0;var Tt=Mt===""?".":Mt+":";if(A(b))for(var At=0;At<b.length;At++)Mt=b[At],dt=Tt+Y(Mt,At),_t+=at(Mt,Q,pt,dt,Z);else if(At=x(b),typeof At=="function")for(b=At.call(b),At=0;!(Mt=b.next()).done;)Mt=Mt.value,dt=Tt+Y(Mt,At++),_t+=at(Mt,Q,pt,dt,Z);else if(dt==="object"){if(typeof b.then=="function")return at(lt(b),Q,pt,Mt,Z);throw Q=String(b),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return _t}function I(b,Q,pt){if(b==null)return b;var Mt=[],Z=0;return at(b,Mt,"","",function(dt){return Q.call(pt,dt,Z++)}),Mt}function X(b){if(b._status===-1){var Q=b._result;Q=Q(),Q.then(function(pt){(b._status===0||b._status===-1)&&(b._status=1,b._result=pt)},function(pt){(b._status===0||b._status===-1)&&(b._status=2,b._result=pt)}),b._status===-1&&(b._status=0,b._result=Q)}if(b._status===1)return b._result.default;throw b._result}var W=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)};function ht(){}return ye.Children={map:I,forEach:function(b,Q,pt){I(b,function(){Q.apply(this,arguments)},pt)},count:function(b){var Q=0;return I(b,function(){Q++}),Q},toArray:function(b){return I(b,function(Q){return Q})||[]},only:function(b){if(!w(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ye.Component=y,ye.Fragment=e,ye.Profiler=a,ye.PureComponent=L,ye.StrictMode=i,ye.Suspense=h,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ye.__COMPILER_RUNTIME={__proto__:null,c:function(b){return P.H.useMemoCache(b)}},ye.cache=function(b){return function(){return b.apply(null,arguments)}},ye.cloneElement=function(b,Q,pt){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Mt=E({},b.props),Z=b.key,dt=void 0;if(Q!=null)for(_t in Q.ref!==void 0&&(dt=void 0),Q.key!==void 0&&(Z=""+Q.key),Q)!z.call(Q,_t)||_t==="key"||_t==="__self"||_t==="__source"||_t==="ref"&&Q.ref===void 0||(Mt[_t]=Q[_t]);var _t=arguments.length-2;if(_t===1)Mt.children=pt;else if(1<_t){for(var Tt=Array(_t),At=0;At<_t;At++)Tt[At]=arguments[At+2];Mt.children=Tt}return C(b.type,Z,void 0,void 0,dt,Mt)},ye.createContext=function(b){return b={$$typeof:c,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:l,_context:b},b},ye.createElement=function(b,Q,pt){var Mt,Z={},dt=null;if(Q!=null)for(Mt in Q.key!==void 0&&(dt=""+Q.key),Q)z.call(Q,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Z[Mt]=Q[Mt]);var _t=arguments.length-2;if(_t===1)Z.children=pt;else if(1<_t){for(var Tt=Array(_t),At=0;At<_t;At++)Tt[At]=arguments[At+2];Z.children=Tt}if(b&&b.defaultProps)for(Mt in _t=b.defaultProps,_t)Z[Mt]===void 0&&(Z[Mt]=_t[Mt]);return C(b,dt,void 0,void 0,null,Z)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(b){return{$$typeof:f,render:b}},ye.isValidElement=w,ye.lazy=function(b){return{$$typeof:m,_payload:{_status:-1,_result:b},_init:X}},ye.memo=function(b,Q){return{$$typeof:p,type:b,compare:Q===void 0?null:Q}},ye.startTransition=function(b){var Q=P.T,pt={};P.T=pt;try{var Mt=b(),Z=P.S;Z!==null&&Z(pt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(ht,W)}catch(dt){W(dt)}finally{P.T=Q}},ye.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ye.use=function(b){return P.H.use(b)},ye.useActionState=function(b,Q,pt){return P.H.useActionState(b,Q,pt)},ye.useCallback=function(b,Q){return P.H.useCallback(b,Q)},ye.useContext=function(b){return P.H.useContext(b)},ye.useDebugValue=function(){},ye.useDeferredValue=function(b,Q){return P.H.useDeferredValue(b,Q)},ye.useEffect=function(b,Q,pt){var Mt=P.H;if(typeof pt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Mt.useEffect(b,Q)},ye.useId=function(){return P.H.useId()},ye.useImperativeHandle=function(b,Q,pt){return P.H.useImperativeHandle(b,Q,pt)},ye.useInsertionEffect=function(b,Q){return P.H.useInsertionEffect(b,Q)},ye.useLayoutEffect=function(b,Q){return P.H.useLayoutEffect(b,Q)},ye.useMemo=function(b,Q){return P.H.useMemo(b,Q)},ye.useOptimistic=function(b,Q){return P.H.useOptimistic(b,Q)},ye.useReducer=function(b,Q,pt){return P.H.useReducer(b,Q,pt)},ye.useRef=function(b){return P.H.useRef(b)},ye.useState=function(b){return P.H.useState(b)},ye.useSyncExternalStore=function(b,Q,pt){return P.H.useSyncExternalStore(b,Q,pt)},ye.useTransition=function(){return P.H.useTransition()},ye.version="19.1.0",ye}var JS;function P0(){return JS||(JS=1,p_.exports=UR()),p_.exports}var Ye=P0();const tu=tE(Ye);var m_={exports:{}},_c={},__={exports:{}},g_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $S;function LR(){return $S||($S=1,function(s){function t(I,X){var W=I.length;I.push(X);t:for(;0<W;){var ht=W-1>>>1,b=I[ht];if(0<a(b,X))I[ht]=X,I[W]=b,W=ht;else break t}}function e(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var X=I[0],W=I.pop();if(W!==X){I[0]=W;t:for(var ht=0,b=I.length,Q=b>>>1;ht<Q;){var pt=2*(ht+1)-1,Mt=I[pt],Z=pt+1,dt=I[Z];if(0>a(Mt,W))Z<b&&0>a(dt,Mt)?(I[ht]=dt,I[Z]=W,ht=Z):(I[ht]=Mt,I[pt]=W,ht=pt);else if(Z<b&&0>a(dt,W))I[ht]=dt,I[Z]=W,ht=Z;else break t}}return X}function a(I,X){var W=I.sortIndex-X.sortIndex;return W!==0?W:I.id-X.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],m=1,g=null,x=3,v=!1,E=!1,M=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function A(I){for(var X=e(p);X!==null;){if(X.callback===null)i(p);else if(X.startTime<=I)i(p),X.sortIndex=X.expirationTime,t(h,X);else break;X=e(p)}}function P(I){if(M=!1,A(I),!E)if(e(h)!==null)E=!0,z||(z=!0,Y());else{var X=e(p);X!==null&&at(P,X.startTime-I)}}var z=!1,C=-1,F=5,w=-1;function R(){return y?!0:!(s.unstable_now()-w<F)}function H(){if(y=!1,z){var I=s.unstable_now();w=I;var X=!0;try{t:{E=!1,M&&(M=!1,L(C),C=-1),v=!0;var W=x;try{e:{for(A(I),g=e(h);g!==null&&!(g.expirationTime>I&&R());){var ht=g.callback;if(typeof ht=="function"){g.callback=null,x=g.priorityLevel;var b=ht(g.expirationTime<=I);if(I=s.unstable_now(),typeof b=="function"){g.callback=b,A(I),X=!0;break e}g===e(h)&&i(h),A(I)}else i(h);g=e(h)}if(g!==null)X=!0;else{var Q=e(p);Q!==null&&at(P,Q.startTime-I),X=!1}}break t}finally{g=null,x=W,v=!1}X=void 0}}finally{X?Y():z=!1}}}var Y;if(typeof D=="function")Y=function(){D(H)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,lt=tt.port2;tt.port1.onmessage=H,Y=function(){lt.postMessage(null)}}else Y=function(){S(H,0)};function at(I,X){C=S(function(){I(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(I){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var W=x;x=X;try{return I()}finally{x=W}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(I,X){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=x;x=I;try{return X()}finally{x=W}},s.unstable_scheduleCallback=function(I,X,W){var ht=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ht+W:ht):W=ht,I){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=W+b,I={id:m++,callback:X,priorityLevel:I,startTime:W,expirationTime:b,sortIndex:-1},W>ht?(I.sortIndex=W,t(p,I),e(h)===null&&I===e(p)&&(M?(L(C),C=-1):M=!0,at(P,W-ht))):(I.sortIndex=b,t(h,I),E||v||(E=!0,z||(z=!0,Y()))),I},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(I){var X=x;return function(){var W=x;x=X;try{return I.apply(this,arguments)}finally{x=W}}}}(g_)),g_}var tM;function OR(){return tM||(tM=1,__.exports=LR()),__.exports}var v_={exports:{}},xi={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eM;function NR(){if(eM)return xi;eM=1;var s=P0();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)p+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var i={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(h,p,m){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:g==null?null:""+g,children:h,containerInfo:p,implementation:m}}var c=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return xi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,xi.createPortal=function(h,p){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(h,p,null,m)},xi.flushSync=function(h){var p=c.T,m=i.p;try{if(c.T=null,i.p=2,h)return h()}finally{c.T=p,i.p=m,i.d.f()}},xi.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(h,p))},xi.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},xi.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var m=p.as,g=f(m,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,v=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;m==="style"?i.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:v}):m==="script"&&i.d.X(h,{crossOrigin:g,integrity:x,fetchPriority:v,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},xi.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var m=f(p.as,p.crossOrigin);i.d.M(h,{crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(h)},xi.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var m=p.as,g=f(m,p.crossOrigin);i.d.L(h,m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},xi.preloadModule=function(h,p){if(typeof h=="string")if(p){var m=f(p.as,p.crossOrigin);i.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:m,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(h)},xi.requestFormReset=function(h){i.d.r(h)},xi.unstable_batchedUpdates=function(h,p){return h(p)},xi.useFormState=function(h,p,m){return c.H.useFormState(h,p,m)},xi.useFormStatus=function(){return c.H.useHostTransitionStatus()},xi.version="19.1.0",xi}var nM;function PR(){if(nM)return v_.exports;nM=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),v_.exports=NR(),v_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iM;function zR(){if(iM)return _c;iM=1;var s=OR(),t=P0(),e=PR();function i(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(i(188))}function h(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(i(188));return r!==n?null:n}for(var o=n,u=r;;){var d=o.return;if(d===null)break;var _=d.alternate;if(_===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===_.child){for(_=d.child;_;){if(_===o)return f(d),n;if(_===u)return f(d),r;_=_.sibling}throw Error(i(188))}if(o.return!==u.return)o=d,u=_;else{for(var T=!1,O=d.child;O;){if(O===o){T=!0,o=d,u=_;break}if(O===u){T=!0,u=d,o=_;break}O=O.sibling}if(!T){for(O=_.child;O;){if(O===o){T=!0,o=_,u=d;break}if(O===u){T=!0,u=_,o=d;break}O=O.sibling}if(!T)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:r}function p(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=p(n),r!==null)return r;n=n.sibling}return null}var m=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),v=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Y(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var tt=Symbol.for("react.client.reference");function lt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===tt?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case z:return"SuspenseList";case w:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case v:return"Portal";case D:return(n.displayName||"Context")+".Provider";case L:return(n._context.displayName||"Context")+".Consumer";case A:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case C:return r=n.displayName||null,r!==null?r:lt(n.type)||"Memo";case F:r=n._payload,n=n._init;try{return lt(n(r))}catch{}}return null}var at=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ht=[],b=-1;function Q(n){return{current:n}}function pt(n){0>b||(n.current=ht[b],ht[b]=null,b--)}function Mt(n,r){b++,ht[b]=n.current,n.current=r}var Z=Q(null),dt=Q(null),_t=Q(null),Tt=Q(null);function At(n,r){switch(Mt(_t,r),Mt(dt,n),Mt(Z,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?ES(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=ES(r),n=TS(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}pt(Z),Mt(Z,n)}function qt(){pt(Z),pt(dt),pt(_t)}function Qt(n){n.memoizedState!==null&&Mt(Tt,n);var r=Z.current,o=TS(r,n.type);r!==o&&(Mt(dt,n),Mt(Z,o))}function _e(n){dt.current===n&&(pt(Z),pt(dt)),Tt.current===n&&(pt(Tt),cc._currentValue=W)}var oe=Object.prototype.hasOwnProperty,Vt=s.unstable_scheduleCallback,V=s.unstable_cancelCallback,rn=s.unstable_shouldYield,de=s.unstable_requestPaint,J=s.unstable_now,kt=s.unstable_getCurrentPriorityLevel,we=s.unstable_ImmediatePriority,Yt=s.unstable_UserBlockingPriority,B=s.unstable_NormalPriority,U=s.unstable_LowPriority,nt=s.unstable_IdlePriority,St=s.log,xt=s.unstable_setDisableYieldValue,mt=null,Ct=null;function Dt(n){if(typeof St=="function"&&xt(n),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(mt,n)}catch{}}var Ut=Math.clz32?Math.clz32:Lt,ve=Math.log,Rt=Math.LN2;function Lt(n){return n>>>=0,n===0?32:31-(ve(n)/Rt|0)|0}var ie=256,te=4194304;function Bt(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ge(n,r,o){var u=n.pendingLanes;if(u===0)return 0;var d=0,_=n.suspendedLanes,T=n.pingedLanes;n=n.warmLanes;var O=u&134217727;return O!==0?(u=O&~_,u!==0?d=Bt(u):(T&=O,T!==0?d=Bt(T):o||(o=O&~n,o!==0&&(d=Bt(o))))):(O=u&~_,O!==0?d=Bt(O):T!==0?d=Bt(T):o||(o=u&~n,o!==0&&(d=Bt(o)))),d===0?0:r!==0&&r!==d&&(r&_)===0&&(_=d&-d,o=r&-r,_>=o||_===32&&(o&4194048)!==0)?r:d}function ae(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Be(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var n=ie;return ie<<=1,(ie&4194048)===0&&(ie=256),n}function Nt(){var n=te;return te<<=1,(te&62914560)===0&&(te=4194304),n}function ft(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function gt(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ot(n,r,o,u,d,_){var T=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var O=n.entanglements,G=n.expirationTimes,rt=n.hiddenUpdates;for(o=T&~o;0<o;){var vt=31-Ut(o),Et=1<<vt;O[vt]=0,G[vt]=-1;var st=rt[vt];if(st!==null)for(rt[vt]=null,vt=0;vt<st.length;vt++){var ut=st[vt];ut!==null&&(ut.lane&=-536870913)}o&=~Et}u!==0&&Pt(n,u,0),_!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=_&~(T&~r))}function Pt(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-Ut(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function le(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-Ut(o),d=1<<u;d&r|n[u]&r&&(n[u]|=r),o&=~d}}function Ie(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function _n(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Ft(){var n=X.p;return n!==0?n:(n=window.event,n===void 0?32:kS(n.type))}function Kt(n,r){var o=X.p;try{return X.p=n,r()}finally{X.p=o}}var fe=Math.random().toString(36).slice(2),wt="__reactFiber$"+fe,Jt="__reactProps$"+fe,Wt="__reactContainer$"+fe,ue="__reactEvents$"+fe,Tn="__reactListeners$"+fe,Me="__reactHandles$"+fe,an="__reactResources$"+fe,yn="__reactMarker$"+fe;function $e(n){delete n[wt],delete n[Jt],delete n[ue],delete n[Tn],delete n[Me]}function ke(n){var r=n[wt];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Wt]||o[wt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=wS(n);n!==null;){if(o=n[wt])return o;n=wS(n)}return r}n=o,o=n.parentNode}return null}function Ne(n){if(n=n[wt]||n[Wt]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function qn(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(i(33))}function Ze(n){var r=n[an];return r||(r=n[an]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Xe(n){n[yn]=!0}var Ci=new Set,Cn={};function hn(n,r){N(n,r),N(n+"Capture",r)}function N(n,r){for(Cn[n]=r,n=0;n<r.length;n++)Ci.add(r[n])}var K=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},it={};function j(n){return oe.call(it,n)?!0:oe.call(ot,n)?!1:K.test(n)?it[n]=!0:(ot[n]=!0,!1)}function bt(n,r,o){if(j(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function zt(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function It(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}var Gt,ee;function ne(n){if(Gt===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Gt=r&&r[1]||"",ee=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gt+n+ee}var $t=!1;function xe(n,r){if(!n||$t)return"";$t=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(ut){var st=ut}Reflect.construct(n,[],Et)}else{try{Et.call()}catch(ut){st=ut}n.call(Et.prototype)}}else{try{throw Error()}catch(ut){st=ut}(Et=n())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(ut){if(ut&&st&&typeof ut.stack=="string")return[ut.stack,st.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var _=u.DetermineComponentFrameRoot(),T=_[0],O=_[1];if(T&&O){var G=T.split(`
`),rt=O.split(`
`);for(d=u=0;u<G.length&&!G[u].includes("DetermineComponentFrameRoot");)u++;for(;d<rt.length&&!rt[d].includes("DetermineComponentFrameRoot");)d++;if(u===G.length||d===rt.length)for(u=G.length-1,d=rt.length-1;1<=u&&0<=d&&G[u]!==rt[d];)d--;for(;1<=u&&0<=d;u--,d--)if(G[u]!==rt[d]){if(u!==1||d!==1)do if(u--,d--,0>d||G[u]!==rt[d]){var vt=`
`+G[u].replace(" at new "," at ");return n.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",n.displayName)),vt}while(1<=u&&0<=d);break}}}finally{$t=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?ne(o):""}function Qe(n){switch(n.tag){case 26:case 27:case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 15:return xe(n.type,!1);case 11:return xe(n.type.render,!1);case 1:return xe(n.type,!0);case 31:return ne("Activity");default:return""}}function bn(n){try{var r="";do r+=Qe(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function Fe(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function He(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function se(n){var r=He(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,_=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return d.call(this)},set:function(T){u=""+T,_.call(this,T)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Dn(n){n._valueTracker||(n._valueTracker=se(n))}function qe(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=He(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function _i(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var ts=/[\n"\\]/g;function gn(n){return n.replace(ts,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function _a(n,r,o,u,d,_,T,O){n.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?n.type=T:n.removeAttribute("type"),r!=null?T==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+Fe(r)):n.value!==""+Fe(r)&&(n.value=""+Fe(r)):T!=="submit"&&T!=="reset"||n.removeAttribute("value"),r!=null?gi(n,T,Fe(r)):o!=null?gi(n,T,Fe(o)):u!=null&&n.removeAttribute("value"),d==null&&_!=null&&(n.defaultChecked=!!_),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?n.name=""+Fe(O):n.removeAttribute("name")}function dn(n,r,o,u,d,_,T,O){if(_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(n.type=_),r!=null||o!=null){if(!(_!=="submit"&&_!=="reset"||r!=null))return;o=o!=null?""+Fe(o):"",r=r!=null?""+Fe(r):o,O||r===n.value||(n.value=r),n.defaultValue=r}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=O?n.checked:!!u,n.defaultChecked=!!u,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(n.name=T)}function gi(n,r,o){r==="number"&&_i(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function jn(n,r,o,u){if(n=n.options,r){r={};for(var d=0;d<o.length;d++)r["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=r.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Fe(o),r=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}r!==null||n[d].disabled||(r=n[d])}r!==null&&(r.selected=!0)}}function ei(n,r,o){if(r!=null&&(r=""+Fe(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+Fe(o):""}function ci(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(i(92));if(at(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=Fe(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Jr(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var ga=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ev(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||ga.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function Tv(n,r,o){if(r!=null&&typeof r!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var d in r)u=r[d],r.hasOwnProperty(d)&&o[d]!==u&&Ev(n,d,u)}else for(var _ in r)r.hasOwnProperty(_)&&Ev(n,_,r[_])}function hp(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vf(n){return wb.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var dp=null;function pp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Xo=null,Wo=null;function bv(n){var r=Ne(n);if(r&&(n=r.stateNode)){var o=n[Jt]||null;t:switch(n=r.stateNode,r.type){case"input":if(_a(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+gn(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var d=u[Jt]||null;if(!d)throw Error(i(90));_a(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&qe(u)}break t;case"textarea":ei(n,o.value,o.defaultValue);break t;case"select":r=o.value,r!=null&&jn(n,!!o.multiple,r,!1)}}}var mp=!1;function Av(n,r,o){if(mp)return n(r,o);mp=!0;try{var u=n(r);return u}finally{if(mp=!1,(Xo!==null||Wo!==null)&&(ih(),Xo&&(r=Xo,n=Wo,Wo=Xo=null,bv(r),n)))for(r=0;r<n.length;r++)bv(n[r])}}function Eu(n,r){var o=n.stateNode;if(o===null)return null;var u=o[Jt]||null;if(u===null)return null;o=u[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break t;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,r,typeof o));return o}var va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_p=!1;if(va)try{var Tu={};Object.defineProperty(Tu,"passive",{get:function(){_p=!0}}),window.addEventListener("test",Tu,Tu),window.removeEventListener("test",Tu,Tu)}catch{_p=!1}var es=null,gp=null,xf=null;function Rv(){if(xf)return xf;var n,r=gp,o=r.length,u,d="value"in es?es.value:es.textContent,_=d.length;for(n=0;n<o&&r[n]===d[n];n++);var T=o-n;for(u=1;u<=T&&r[o-u]===d[_-u];u++);return xf=d.slice(n,1<u?1-u:void 0)}function yf(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Sf(){return!0}function wv(){return!1}function Fi(n){function r(o,u,d,_,T){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(_):_[O]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Sf:wv,this.isPropagationStopped=wv,this}return m(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Sf)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Sf)},persist:function(){},isPersistent:Sf}),r}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mf=Fi(Ys),bu=m({},Ys,{view:0,detail:0}),Cb=Fi(bu),vp,xp,Au,Ef=m({},bu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Au&&(Au&&n.type==="mousemove"?(vp=n.screenX-Au.screenX,xp=n.screenY-Au.screenY):xp=vp=0,Au=n),vp)},movementY:function(n){return"movementY"in n?n.movementY:xp}}),Cv=Fi(Ef),Db=m({},Ef,{dataTransfer:0}),Ub=Fi(Db),Lb=m({},bu,{relatedTarget:0}),yp=Fi(Lb),Ob=m({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Nb=Fi(Ob),Pb=m({},Ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zb=Fi(Pb),Bb=m({},Ys,{data:0}),Dv=Fi(Bb),Ib={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gb(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Hb[n])?!!r[n]:!1}function Sp(){return Gb}var Vb=m({},bu,{key:function(n){if(n.key){var r=Ib[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=yf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Fb[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sp,charCode:function(n){return n.type==="keypress"?yf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?yf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),kb=Fi(Vb),Xb=m({},Ef,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uv=Fi(Xb),Wb=m({},bu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sp}),Yb=Fi(Wb),qb=m({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),jb=Fi(qb),Zb=m({},Ef,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qb=Fi(Zb),Kb=m({},Ys,{newState:0,oldState:0}),Jb=Fi(Kb),$b=[9,13,27,32],Mp=va&&"CompositionEvent"in window,Ru=null;va&&"documentMode"in document&&(Ru=document.documentMode);var tA=va&&"TextEvent"in window&&!Ru,Lv=va&&(!Mp||Ru&&8<Ru&&11>=Ru),Ov=" ",Nv=!1;function Pv(n,r){switch(n){case"keyup":return $b.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Yo=!1;function eA(n,r){switch(n){case"compositionend":return zv(r);case"keypress":return r.which!==32?null:(Nv=!0,Ov);case"textInput":return n=r.data,n===Ov&&Nv?null:n;default:return null}}function nA(n,r){if(Yo)return n==="compositionend"||!Mp&&Pv(n,r)?(n=Rv(),xf=gp=es=null,Yo=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Lv&&r.locale!=="ko"?null:r.data;default:return null}}var iA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bv(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!iA[n.type]:r==="textarea"}function Iv(n,r,o,u){Xo?Wo?Wo.push(u):Wo=[u]:Xo=u,r=uh(r,"onChange"),0<r.length&&(o=new Mf("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var wu=null,Cu=null;function rA(n){vS(n,0)}function Tf(n){var r=qn(n);if(qe(r))return n}function Fv(n,r){if(n==="change")return r}var Hv=!1;if(va){var Ep;if(va){var Tp="oninput"in document;if(!Tp){var Gv=document.createElement("div");Gv.setAttribute("oninput","return;"),Tp=typeof Gv.oninput=="function"}Ep=Tp}else Ep=!1;Hv=Ep&&(!document.documentMode||9<document.documentMode)}function Vv(){wu&&(wu.detachEvent("onpropertychange",kv),Cu=wu=null)}function kv(n){if(n.propertyName==="value"&&Tf(Cu)){var r=[];Iv(r,Cu,n,pp(n)),Av(rA,r)}}function aA(n,r,o){n==="focusin"?(Vv(),wu=r,Cu=o,wu.attachEvent("onpropertychange",kv)):n==="focusout"&&Vv()}function sA(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tf(Cu)}function oA(n,r){if(n==="click")return Tf(r)}function lA(n,r){if(n==="input"||n==="change")return Tf(r)}function uA(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var er=typeof Object.is=="function"?Object.is:uA;function Du(n,r){if(er(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!oe.call(r,d)||!er(n[d],r[d]))return!1}return!0}function Xv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wv(n,r){var o=Xv(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}t:{for(;o;){if(o.nextSibling){o=o.nextSibling;break t}o=o.parentNode}o=void 0}o=Xv(o)}}function Yv(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Yv(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function qv(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=_i(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=_i(n.document)}return r}function bp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var cA=va&&"documentMode"in document&&11>=document.documentMode,qo=null,Ap=null,Uu=null,Rp=!1;function jv(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Rp||qo==null||qo!==_i(u)||(u=qo,"selectionStart"in u&&bp(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Uu&&Du(Uu,u)||(Uu=u,u=uh(Ap,"onSelect"),0<u.length&&(r=new Mf("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=qo)))}function qs(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var jo={animationend:qs("Animation","AnimationEnd"),animationiteration:qs("Animation","AnimationIteration"),animationstart:qs("Animation","AnimationStart"),transitionrun:qs("Transition","TransitionRun"),transitionstart:qs("Transition","TransitionStart"),transitioncancel:qs("Transition","TransitionCancel"),transitionend:qs("Transition","TransitionEnd")},wp={},Zv={};va&&(Zv=document.createElement("div").style,"AnimationEvent"in window||(delete jo.animationend.animation,delete jo.animationiteration.animation,delete jo.animationstart.animation),"TransitionEvent"in window||delete jo.transitionend.transition);function js(n){if(wp[n])return wp[n];if(!jo[n])return n;var r=jo[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Zv)return wp[n]=r[o];return n}var Qv=js("animationend"),Kv=js("animationiteration"),Jv=js("animationstart"),fA=js("transitionrun"),hA=js("transitionstart"),dA=js("transitioncancel"),$v=js("transitionend"),tx=new Map,Cp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cp.push("scrollEnd");function Hr(n,r){tx.set(n,r),hn(r,[n])}var ex=new WeakMap;function Er(n,r){if(typeof n=="object"&&n!==null){var o=ex.get(n);return o!==void 0?o:(r={value:n,source:r,stack:bn(r)},ex.set(n,r),r)}return{value:n,source:r,stack:bn(r)}}var Tr=[],Zo=0,Dp=0;function bf(){for(var n=Zo,r=Dp=Zo=0;r<n;){var o=Tr[r];Tr[r++]=null;var u=Tr[r];Tr[r++]=null;var d=Tr[r];Tr[r++]=null;var _=Tr[r];if(Tr[r++]=null,u!==null&&d!==null){var T=u.pending;T===null?d.next=d:(d.next=T.next,T.next=d),u.pending=d}_!==0&&nx(o,d,_)}}function Af(n,r,o,u){Tr[Zo++]=n,Tr[Zo++]=r,Tr[Zo++]=o,Tr[Zo++]=u,Dp|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Up(n,r,o,u){return Af(n,r,o,u),Rf(n)}function Qo(n,r){return Af(n,null,null,r),Rf(n)}function nx(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var d=!1,_=n.return;_!==null;)_.childLanes|=o,u=_.alternate,u!==null&&(u.childLanes|=o),_.tag===22&&(n=_.stateNode,n===null||n._visibility&1||(d=!0)),n=_,_=_.return;return n.tag===3?(_=n.stateNode,d&&r!==null&&(d=31-Ut(o),n=_.hiddenUpdates,u=n[d],u===null?n[d]=[r]:u.push(r),r.lane=o|536870912),_):null}function Rf(n){if(50<nc)throw nc=0,Bm=null,Error(i(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Ko={};function pA(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nr(n,r,o,u){return new pA(n,r,o,u)}function Lp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xa(n,r){var o=n.alternate;return o===null?(o=nr(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function ix(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function wf(n,r,o,u,d,_){var T=0;if(u=n,typeof n=="function")Lp(n)&&(T=1);else if(typeof n=="string")T=_R(n,o,Z.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case w:return n=nr(31,o,r,d),n.elementType=w,n.lanes=_,n;case E:return Zs(o.children,d,_,r);case M:T=8,d|=24;break;case y:return n=nr(12,o,r,d|2),n.elementType=y,n.lanes=_,n;case P:return n=nr(13,o,r,d),n.elementType=P,n.lanes=_,n;case z:return n=nr(19,o,r,d),n.elementType=z,n.lanes=_,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case S:case D:T=10;break t;case L:T=9;break t;case A:T=11;break t;case C:T=14;break t;case F:T=16,u=null;break t}T=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return r=nr(T,o,r,d),r.elementType=n,r.type=u,r.lanes=_,r}function Zs(n,r,o,u){return n=nr(7,n,u,r),n.lanes=o,n}function Op(n,r,o){return n=nr(6,n,null,r),n.lanes=o,n}function Np(n,r,o){return r=nr(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Jo=[],$o=0,Cf=null,Df=0,br=[],Ar=0,Qs=null,ya=1,Sa="";function Ks(n,r){Jo[$o++]=Df,Jo[$o++]=Cf,Cf=n,Df=r}function rx(n,r,o){br[Ar++]=ya,br[Ar++]=Sa,br[Ar++]=Qs,Qs=n;var u=ya;n=Sa;var d=32-Ut(u)-1;u&=~(1<<d),o+=1;var _=32-Ut(r)+d;if(30<_){var T=d-d%5;_=(u&(1<<T)-1).toString(32),u>>=T,d-=T,ya=1<<32-Ut(r)+d|o<<d|u,Sa=_+n}else ya=1<<_|o<<d|u,Sa=n}function Pp(n){n.return!==null&&(Ks(n,1),rx(n,1,0))}function zp(n){for(;n===Cf;)Cf=Jo[--$o],Jo[$o]=null,Df=Jo[--$o],Jo[$o]=null;for(;n===Qs;)Qs=br[--Ar],br[Ar]=null,Sa=br[--Ar],br[Ar]=null,ya=br[--Ar],br[Ar]=null}var Di=null,Un=null,tn=!1,Js=null,$r=!1,Bp=Error(i(519));function $s(n){var r=Error(i(418,""));throw Nu(Er(r,n)),Bp}function ax(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[wt]=n,r[Jt]=u,o){case"dialog":ze("cancel",r),ze("close",r);break;case"iframe":case"object":case"embed":ze("load",r);break;case"video":case"audio":for(o=0;o<rc.length;o++)ze(rc[o],r);break;case"source":ze("error",r);break;case"img":case"image":case"link":ze("error",r),ze("load",r);break;case"details":ze("toggle",r);break;case"input":ze("invalid",r),dn(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Dn(r);break;case"select":ze("invalid",r);break;case"textarea":ze("invalid",r),ci(r,u.value,u.defaultValue,u.children),Dn(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||MS(r.textContent,o)?(u.popover!=null&&(ze("beforetoggle",r),ze("toggle",r)),u.onScroll!=null&&ze("scroll",r),u.onScrollEnd!=null&&ze("scrollend",r),u.onClick!=null&&(r.onclick=ch),r=!0):r=!1,r||$s(n)}function sx(n){for(Di=n.return;Di;)switch(Di.tag){case 5:case 13:$r=!1;return;case 27:case 3:$r=!0;return;default:Di=Di.return}}function Lu(n){if(n!==Di)return!1;if(!tn)return sx(n),tn=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||$m(n.type,n.memoizedProps)),o=!o),o&&Un&&$s(n),sx(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));t:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){Un=Vr(n.nextSibling);break t}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}Un=null}}else r===27?(r=Un,gs(n.type)?(n=i_,i_=null,Un=n):Un=r):Un=Di?Vr(n.stateNode.nextSibling):null;return!0}function Ou(){Un=Di=null,tn=!1}function ox(){var n=Js;return n!==null&&(Vi===null?Vi=n:Vi.push.apply(Vi,n),Js=null),n}function Nu(n){Js===null?Js=[n]:Js.push(n)}var Ip=Q(null),to=null,Ma=null;function ns(n,r,o){Mt(Ip,r._currentValue),r._currentValue=o}function Ea(n){n._currentValue=Ip.current,pt(Ip)}function Fp(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Hp(n,r,o,u){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var _=d.dependencies;if(_!==null){var T=d.child;_=_.firstContext;t:for(;_!==null;){var O=_;_=d;for(var G=0;G<r.length;G++)if(O.context===r[G]){_.lanes|=o,O=_.alternate,O!==null&&(O.lanes|=o),Fp(_.return,o,n),u||(T=null);break t}_=O.next}}else if(d.tag===18){if(T=d.return,T===null)throw Error(i(341));T.lanes|=o,_=T.alternate,_!==null&&(_.lanes|=o),Fp(T,o,n),T=null}else T=d.child;if(T!==null)T.return=d;else for(T=d;T!==null;){if(T===n){T=null;break}if(d=T.sibling,d!==null){d.return=T.return,T=d;break}T=T.return}d=T}}function Pu(n,r,o,u){n=null;for(var d=r,_=!1;d!==null;){if(!_){if((d.flags&524288)!==0)_=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var T=d.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var O=d.type;er(d.pendingProps.value,T.value)||(n!==null?n.push(O):n=[O])}}else if(d===Tt.current){if(T=d.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push(cc):n=[cc])}d=d.return}n!==null&&Hp(r,n,o,u),r.flags|=262144}function Uf(n){for(n=n.firstContext;n!==null;){if(!er(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function eo(n){to=n,Ma=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function vi(n){return lx(to,n)}function Lf(n,r){return to===null&&eo(n),lx(n,r)}function lx(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},Ma===null){if(n===null)throw Error(i(308));Ma=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Ma=Ma.next=r;return o}var mA=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},_A=s.unstable_scheduleCallback,gA=s.unstable_NormalPriority,Zn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gp(){return{controller:new mA,data:new Map,refCount:0}}function zu(n){n.refCount--,n.refCount===0&&_A(gA,function(){n.controller.abort()})}var Bu=null,Vp=0,tl=0,el=null;function vA(n,r){if(Bu===null){var o=Bu=[];Vp=0,tl=Xm(),el={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Vp++,r.then(ux,ux),r}function ux(){if(--Vp===0&&Bu!==null){el!==null&&(el.status="fulfilled");var n=Bu;Bu=null,tl=0,el=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function xA(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var d=0;d<o.length;d++)(0,o[d])(r)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var cx=I.S;I.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&vA(n,r),cx!==null&&cx(n,r)};var no=Q(null);function kp(){var n=no.current;return n!==null?n:vn.pooledCache}function Of(n,r){r===null?Mt(no,no.current):Mt(no,r.pool)}function fx(){var n=kp();return n===null?null:{parent:Zn._currentValue,pool:n}}var Iu=Error(i(460)),hx=Error(i(474)),Nf=Error(i(542)),Xp={then:function(){}};function dx(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Pf(){}function px(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(Pf,Pf),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,_x(n),n;default:if(typeof r.status=="string")r.then(Pf,Pf);else{if(n=vn,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var d=r;d.status="fulfilled",d.value=u}},function(u){if(r.status==="pending"){var d=r;d.status="rejected",d.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,_x(n),n}throw Fu=r,Iu}}var Fu=null;function mx(){if(Fu===null)throw Error(i(459));var n=Fu;return Fu=null,n}function _x(n){if(n===Iu||n===Nf)throw Error(i(483))}var is=!1;function Wp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function rs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function as(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(sn&2)!==0){var d=u.pending;return d===null?r.next=r:(r.next=d.next,d.next=r),u.pending=r,r=Rf(n),nx(n,null,o),r}return Af(n,u,r,o),Rf(n)}function Hu(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,le(n,o)}}function qp(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,_=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};_===null?d=_=T:_=_.next=T,o=o.next}while(o!==null);_===null?d=_=r:_=_.next=r}else d=_=r;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:_,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var jp=!1;function Gu(){if(jp){var n=el;if(n!==null)throw n}}function Vu(n,r,o,u){jp=!1;var d=n.updateQueue;is=!1;var _=d.firstBaseUpdate,T=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var G=O,rt=G.next;G.next=null,T===null?_=rt:T.next=rt,T=G;var vt=n.alternate;vt!==null&&(vt=vt.updateQueue,O=vt.lastBaseUpdate,O!==T&&(O===null?vt.firstBaseUpdate=rt:O.next=rt,vt.lastBaseUpdate=G))}if(_!==null){var Et=d.baseState;T=0,vt=rt=G=null,O=_;do{var st=O.lane&-536870913,ut=st!==O.lane;if(ut?(We&st)===st:(u&st)===st){st!==0&&st===tl&&(jp=!0),vt!==null&&(vt=vt.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});t:{var me=n,ce=O;st=r;var cn=o;switch(ce.tag){case 1:if(me=ce.payload,typeof me=="function"){Et=me.call(cn,Et,st);break t}Et=me;break t;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ce.payload,st=typeof me=="function"?me.call(cn,Et,st):me,st==null)break t;Et=m({},Et,st);break t;case 2:is=!0}}st=O.callback,st!==null&&(n.flags|=64,ut&&(n.flags|=8192),ut=d.callbacks,ut===null?d.callbacks=[st]:ut.push(st))}else ut={lane:st,tag:O.tag,payload:O.payload,callback:O.callback,next:null},vt===null?(rt=vt=ut,G=Et):vt=vt.next=ut,T|=st;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;ut=O,O=ut.next,ut.next=null,d.lastBaseUpdate=ut,d.shared.pending=null}}while(!0);vt===null&&(G=Et),d.baseState=G,d.firstBaseUpdate=rt,d.lastBaseUpdate=vt,_===null&&(d.shared.lanes=0),ds|=T,n.lanes=T,n.memoizedState=Et}}function gx(n,r){if(typeof n!="function")throw Error(i(191,n));n.call(r)}function vx(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)gx(o[n],r)}var nl=Q(null),zf=Q(0);function xx(n,r){n=Da,Mt(zf,n),Mt(nl,r),Da=n|r.baseLanes}function Zp(){Mt(zf,Da),Mt(nl,nl.current)}function Qp(){Da=zf.current,pt(nl),pt(zf)}var ss=0,be=null,ln=null,Hn=null,Bf=!1,il=!1,io=!1,If=0,ku=0,rl=null,yA=0;function Nn(){throw Error(i(321))}function Kp(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!er(n[o],r[o]))return!1;return!0}function Jp(n,r,o,u,d,_){return ss=_,be=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,I.H=n===null||n.memoizedState===null?ny:iy,io=!1,_=o(u,d),io=!1,il&&(_=Sx(r,o,u,d)),yx(n),_}function yx(n){I.H=Xf;var r=ln!==null&&ln.next!==null;if(ss=0,Hn=ln=be=null,Bf=!1,ku=0,rl=null,r)throw Error(i(300));n===null||ni||(n=n.dependencies,n!==null&&Uf(n)&&(ni=!0))}function Sx(n,r,o,u){be=n;var d=0;do{if(il&&(rl=null),ku=0,il=!1,25<=d)throw Error(i(301));if(d+=1,Hn=ln=null,n.updateQueue!=null){var _=n.updateQueue;_.lastEffect=null,_.events=null,_.stores=null,_.memoCache!=null&&(_.memoCache.index=0)}I.H=RA,_=r(o,u)}while(il);return _}function SA(){var n=I.H,r=n.useState()[0];return r=typeof r.then=="function"?Xu(r):r,n=n.useState()[0],(ln!==null?ln.memoizedState:null)!==n&&(be.flags|=1024),r}function $p(){var n=If!==0;return If=0,n}function tm(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function em(n){if(Bf){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Bf=!1}ss=0,Hn=ln=be=null,il=!1,ku=If=0,rl=null}function Hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Hn===null?be.memoizedState=Hn=n:Hn=Hn.next=n,Hn}function Gn(){if(ln===null){var n=be.alternate;n=n!==null?n.memoizedState:null}else n=ln.next;var r=Hn===null?be.memoizedState:Hn.next;if(r!==null)Hn=r,ln=n;else{if(n===null)throw be.alternate===null?Error(i(467)):Error(i(310));ln=n,n={memoizedState:ln.memoizedState,baseState:ln.baseState,baseQueue:ln.baseQueue,queue:ln.queue,next:null},Hn===null?be.memoizedState=Hn=n:Hn=Hn.next=n}return Hn}function nm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xu(n){var r=ku;return ku+=1,rl===null&&(rl=[]),n=px(rl,n,r),r=be,(Hn===null?r.memoizedState:Hn.next)===null&&(r=r.alternate,I.H=r===null||r.memoizedState===null?ny:iy),n}function Ff(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Xu(n);if(n.$$typeof===D)return vi(n)}throw Error(i(438,String(n)))}function im(n){var r=null,o=be.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=be.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(d){return d.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=nm(),be.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=R;return r.index++,o}function Ta(n,r){return typeof r=="function"?r(n):r}function Hf(n){var r=Gn();return rm(r,ln,n)}function rm(n,r,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var d=n.baseQueue,_=u.pending;if(_!==null){if(d!==null){var T=d.next;d.next=_.next,_.next=T}r.baseQueue=d=_,u.pending=null}if(_=n.baseState,d===null)n.memoizedState=_;else{r=d.next;var O=T=null,G=null,rt=r,vt=!1;do{var Et=rt.lane&-536870913;if(Et!==rt.lane?(We&Et)===Et:(ss&Et)===Et){var st=rt.revertLane;if(st===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),Et===tl&&(vt=!0);else if((ss&st)===st){rt=rt.next,st===tl&&(vt=!0);continue}else Et={lane:0,revertLane:rt.revertLane,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(O=G=Et,T=_):G=G.next=Et,be.lanes|=st,ds|=st;Et=rt.action,io&&o(_,Et),_=rt.hasEagerState?rt.eagerState:o(_,Et)}else st={lane:Et,revertLane:rt.revertLane,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},G===null?(O=G=st,T=_):G=G.next=st,be.lanes|=Et,ds|=Et;rt=rt.next}while(rt!==null&&rt!==r);if(G===null?T=_:G.next=O,!er(_,n.memoizedState)&&(ni=!0,vt&&(o=el,o!==null)))throw o;n.memoizedState=_,n.baseState=T,n.baseQueue=G,u.lastRenderedState=_}return d===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function am(n){var r=Gn(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,_=r.memoizedState;if(d!==null){o.pending=null;var T=d=d.next;do _=n(_,T.action),T=T.next;while(T!==d);er(_,r.memoizedState)||(ni=!0),r.memoizedState=_,r.baseQueue===null&&(r.baseState=_),o.lastRenderedState=_}return[_,u]}function Mx(n,r,o){var u=be,d=Gn(),_=tn;if(_){if(o===void 0)throw Error(i(407));o=o()}else o=r();var T=!er((ln||d).memoizedState,o);T&&(d.memoizedState=o,ni=!0),d=d.queue;var O=bx.bind(null,u,d,n);if(Wu(2048,8,O,[n]),d.getSnapshot!==r||T||Hn!==null&&Hn.memoizedState.tag&1){if(u.flags|=2048,al(9,Gf(),Tx.bind(null,u,d,o,r),null),vn===null)throw Error(i(349));_||(ss&124)!==0||Ex(u,r,o)}return o}function Ex(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=be.updateQueue,r===null?(r=nm(),be.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Tx(n,r,o,u){r.value=o,r.getSnapshot=u,Ax(r)&&Rx(n)}function bx(n,r,o){return o(function(){Ax(r)&&Rx(n)})}function Ax(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!er(n,o)}catch{return!0}}function Rx(n){var r=Qo(n,2);r!==null&&or(r,n,2)}function sm(n){var r=Hi();if(typeof n=="function"){var o=n;if(n=o(),io){Dt(!0);try{o()}finally{Dt(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:n},r}function wx(n,r,o,u){return n.baseState=o,rm(n,ln,typeof u=="function"?u:Ta)}function MA(n,r,o,u,d){if(kf(n))throw Error(i(485));if(n=r.action,n!==null){var _={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){_.listeners.push(T)}};I.T!==null?o(!0):_.isTransition=!1,u(_),o=r.pending,o===null?(_.next=r.pending=_,Cx(r,_)):(_.next=o.next,r.pending=o.next=_)}}function Cx(n,r){var o=r.action,u=r.payload,d=n.state;if(r.isTransition){var _=I.T,T={};I.T=T;try{var O=o(d,u),G=I.S;G!==null&&G(T,O),Dx(n,r,O)}catch(rt){om(n,r,rt)}finally{I.T=_}}else try{_=o(d,u),Dx(n,r,_)}catch(rt){om(n,r,rt)}}function Dx(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Ux(n,r,u)},function(u){return om(n,r,u)}):Ux(n,r,o)}function Ux(n,r,o){r.status="fulfilled",r.value=o,Lx(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,Cx(n,o)))}function om(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Lx(r),r=r.next;while(r!==u)}n.action=null}function Lx(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Ox(n,r){return r}function Nx(n,r){if(tn){var o=vn.formState;if(o!==null){t:{var u=be;if(tn){if(Un){e:{for(var d=Un,_=$r;d.nodeType!==8;){if(!_){d=null;break e}if(d=Vr(d.nextSibling),d===null){d=null;break e}}_=d.data,d=_==="F!"||_==="F"?d:null}if(d){Un=Vr(d.nextSibling),u=d.data==="F!";break t}}$s(u)}u=!1}u&&(r=o[0])}}return o=Hi(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ox,lastRenderedState:r},o.queue=u,o=$x.bind(null,be,u),u.dispatch=o,u=sm(!1),_=hm.bind(null,be,!1,u.queue),u=Hi(),d={state:r,dispatch:null,action:n,pending:null},u.queue=d,o=MA.bind(null,be,d,_,o),d.dispatch=o,u.memoizedState=n,[r,o,!1]}function Px(n){var r=Gn();return zx(r,ln,n)}function zx(n,r,o){if(r=rm(n,r,Ox)[0],n=Hf(Ta)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Xu(r)}catch(T){throw T===Iu?Nf:T}else u=r;r=Gn();var d=r.queue,_=d.dispatch;return o!==r.memoizedState&&(be.flags|=2048,al(9,Gf(),EA.bind(null,d,o),null)),[u,_,n]}function EA(n,r){n.action=r}function Bx(n){var r=Gn(),o=ln;if(o!==null)return zx(r,o,n);Gn(),r=r.memoizedState,o=Gn();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function al(n,r,o,u){return n={tag:n,create:o,deps:u,inst:r,next:null},r=be.updateQueue,r===null&&(r=nm(),be.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function Gf(){return{destroy:void 0,resource:void 0}}function Ix(){return Gn().memoizedState}function Vf(n,r,o,u){var d=Hi();u=u===void 0?null:u,be.flags|=n,d.memoizedState=al(1|r,Gf(),o,u)}function Wu(n,r,o,u){var d=Gn();u=u===void 0?null:u;var _=d.memoizedState.inst;ln!==null&&u!==null&&Kp(u,ln.memoizedState.deps)?d.memoizedState=al(r,_,o,u):(be.flags|=n,d.memoizedState=al(1|r,_,o,u))}function Fx(n,r){Vf(8390656,8,n,r)}function Hx(n,r){Wu(2048,8,n,r)}function Gx(n,r){return Wu(4,2,n,r)}function Vx(n,r){return Wu(4,4,n,r)}function kx(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Xx(n,r,o){o=o!=null?o.concat([n]):null,Wu(4,4,kx.bind(null,r,n),o)}function lm(){}function Wx(n,r){var o=Gn();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Kp(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Yx(n,r){var o=Gn();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Kp(r,u[1]))return u[0];if(u=n(),io){Dt(!0);try{n()}finally{Dt(!1)}}return o.memoizedState=[u,r],u}function um(n,r,o){return o===void 0||(ss&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=Zy(),be.lanes|=n,ds|=n,o)}function qx(n,r,o,u){return er(o,r)?o:nl.current!==null?(n=um(n,o,u),er(n,r)||(ni=!0),n):(ss&42)===0?(ni=!0,n.memoizedState=o):(n=Zy(),be.lanes|=n,ds|=n,r)}function jx(n,r,o,u,d){var _=X.p;X.p=_!==0&&8>_?_:8;var T=I.T,O={};I.T=O,hm(n,!1,r,o);try{var G=d(),rt=I.S;if(rt!==null&&rt(O,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var vt=xA(G,u);Yu(n,r,vt,sr(n))}else Yu(n,r,u,sr(n))}catch(Et){Yu(n,r,{then:function(){},status:"rejected",reason:Et},sr())}finally{X.p=_,I.T=T}}function TA(){}function cm(n,r,o,u){if(n.tag!==5)throw Error(i(476));var d=Zx(n).queue;jx(n,d,r,W,o===null?TA:function(){return Qx(n),o(u)})}function Zx(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:W},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function Qx(n){var r=Zx(n).next.queue;Yu(n,r,{},sr())}function fm(){return vi(cc)}function Kx(){return Gn().memoizedState}function Jx(){return Gn().memoizedState}function bA(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=sr();n=rs(o);var u=as(r,n,o);u!==null&&(or(u,r,o),Hu(u,r,o)),r={cache:Gp()},n.payload=r;return}r=r.return}}function AA(n,r,o){var u=sr();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},kf(n)?ty(r,o):(o=Up(n,r,o,u),o!==null&&(or(o,n,u),ey(o,r,u)))}function $x(n,r,o){var u=sr();Yu(n,r,o,u)}function Yu(n,r,o,u){var d={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(kf(n))ty(r,d);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=r.lastRenderedReducer,_!==null))try{var T=r.lastRenderedState,O=_(T,o);if(d.hasEagerState=!0,d.eagerState=O,er(O,T))return Af(n,r,d,0),vn===null&&bf(),!1}catch{}finally{}if(o=Up(n,r,d,u),o!==null)return or(o,n,u),ey(o,r,u),!0}return!1}function hm(n,r,o,u){if(u={lane:2,revertLane:Xm(),action:u,hasEagerState:!1,eagerState:null,next:null},kf(n)){if(r)throw Error(i(479))}else r=Up(n,o,u,2),r!==null&&or(r,n,2)}function kf(n){var r=n.alternate;return n===be||r!==null&&r===be}function ty(n,r){il=Bf=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function ey(n,r,o){if((o&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,le(n,o)}}var Xf={readContext:vi,use:Ff,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useLayoutEffect:Nn,useInsertionEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useSyncExternalStore:Nn,useId:Nn,useHostTransitionStatus:Nn,useFormState:Nn,useActionState:Nn,useOptimistic:Nn,useMemoCache:Nn,useCacheRefresh:Nn},ny={readContext:vi,use:Ff,useCallback:function(n,r){return Hi().memoizedState=[n,r===void 0?null:r],n},useContext:vi,useEffect:Fx,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,Vf(4194308,4,kx.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Vf(4194308,4,n,r)},useInsertionEffect:function(n,r){Vf(4,2,n,r)},useMemo:function(n,r){var o=Hi();r=r===void 0?null:r;var u=n();if(io){Dt(!0);try{n()}finally{Dt(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=Hi();if(o!==void 0){var d=o(r);if(io){Dt(!0);try{o(r)}finally{Dt(!1)}}}else d=r;return u.memoizedState=u.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},u.queue=n,n=n.dispatch=AA.bind(null,be,n),[u.memoizedState,n]},useRef:function(n){var r=Hi();return n={current:n},r.memoizedState=n},useState:function(n){n=sm(n);var r=n.queue,o=$x.bind(null,be,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:lm,useDeferredValue:function(n,r){var o=Hi();return um(o,n,r)},useTransition:function(){var n=sm(!1);return n=jx.bind(null,be,n.queue,!0,!1),Hi().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=be,d=Hi();if(tn){if(o===void 0)throw Error(i(407));o=o()}else{if(o=r(),vn===null)throw Error(i(349));(We&124)!==0||Ex(u,r,o)}d.memoizedState=o;var _={value:o,getSnapshot:r};return d.queue=_,Fx(bx.bind(null,u,_,n),[n]),u.flags|=2048,al(9,Gf(),Tx.bind(null,u,_,o,r),null),o},useId:function(){var n=Hi(),r=vn.identifierPrefix;if(tn){var o=Sa,u=ya;o=(u&~(1<<32-Ut(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=If++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=yA++,r="«"+r+"r"+o.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:fm,useFormState:Nx,useActionState:Nx,useOptimistic:function(n){var r=Hi();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=hm.bind(null,be,!0,o),o.dispatch=r,[n,r]},useMemoCache:im,useCacheRefresh:function(){return Hi().memoizedState=bA.bind(null,be)}},iy={readContext:vi,use:Ff,useCallback:Wx,useContext:vi,useEffect:Hx,useImperativeHandle:Xx,useInsertionEffect:Gx,useLayoutEffect:Vx,useMemo:Yx,useReducer:Hf,useRef:Ix,useState:function(){return Hf(Ta)},useDebugValue:lm,useDeferredValue:function(n,r){var o=Gn();return qx(o,ln.memoizedState,n,r)},useTransition:function(){var n=Hf(Ta)[0],r=Gn().memoizedState;return[typeof n=="boolean"?n:Xu(n),r]},useSyncExternalStore:Mx,useId:Kx,useHostTransitionStatus:fm,useFormState:Px,useActionState:Px,useOptimistic:function(n,r){var o=Gn();return wx(o,ln,n,r)},useMemoCache:im,useCacheRefresh:Jx},RA={readContext:vi,use:Ff,useCallback:Wx,useContext:vi,useEffect:Hx,useImperativeHandle:Xx,useInsertionEffect:Gx,useLayoutEffect:Vx,useMemo:Yx,useReducer:am,useRef:Ix,useState:function(){return am(Ta)},useDebugValue:lm,useDeferredValue:function(n,r){var o=Gn();return ln===null?um(o,n,r):qx(o,ln.memoizedState,n,r)},useTransition:function(){var n=am(Ta)[0],r=Gn().memoizedState;return[typeof n=="boolean"?n:Xu(n),r]},useSyncExternalStore:Mx,useId:Kx,useHostTransitionStatus:fm,useFormState:Bx,useActionState:Bx,useOptimistic:function(n,r){var o=Gn();return ln!==null?wx(o,ln,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:im,useCacheRefresh:Jx},sl=null,qu=0;function Wf(n){var r=qu;return qu+=1,sl===null&&(sl=[]),px(sl,n,r)}function ju(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Yf(n,r){throw r.$$typeof===g?Error(i(525)):(n=Object.prototype.toString.call(r),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function ry(n){var r=n._init;return r(n._payload)}function ay(n){function r($,q){if(n){var et=$.deletions;et===null?($.deletions=[q],$.flags|=16):et.push(q)}}function o($,q){if(!n)return null;for(;q!==null;)r($,q),q=q.sibling;return null}function u($){for(var q=new Map;$!==null;)$.key!==null?q.set($.key,$):q.set($.index,$),$=$.sibling;return q}function d($,q){return $=xa($,q),$.index=0,$.sibling=null,$}function _($,q,et){return $.index=et,n?(et=$.alternate,et!==null?(et=et.index,et<q?($.flags|=67108866,q):et):($.flags|=67108866,q)):($.flags|=1048576,q)}function T($){return n&&$.alternate===null&&($.flags|=67108866),$}function O($,q,et,yt){return q===null||q.tag!==6?(q=Op(et,$.mode,yt),q.return=$,q):(q=d(q,et),q.return=$,q)}function G($,q,et,yt){var Zt=et.type;return Zt===E?vt($,q,et.props.children,yt,et.key):q!==null&&(q.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===F&&ry(Zt)===q.type)?(q=d(q,et.props),ju(q,et),q.return=$,q):(q=wf(et.type,et.key,et.props,null,$.mode,yt),ju(q,et),q.return=$,q)}function rt($,q,et,yt){return q===null||q.tag!==4||q.stateNode.containerInfo!==et.containerInfo||q.stateNode.implementation!==et.implementation?(q=Np(et,$.mode,yt),q.return=$,q):(q=d(q,et.children||[]),q.return=$,q)}function vt($,q,et,yt,Zt){return q===null||q.tag!==7?(q=Zs(et,$.mode,yt,Zt),q.return=$,q):(q=d(q,et),q.return=$,q)}function Et($,q,et){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Op(""+q,$.mode,et),q.return=$,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case x:return et=wf(q.type,q.key,q.props,null,$.mode,et),ju(et,q),et.return=$,et;case v:return q=Np(q,$.mode,et),q.return=$,q;case F:var yt=q._init;return q=yt(q._payload),Et($,q,et)}if(at(q)||Y(q))return q=Zs(q,$.mode,et,null),q.return=$,q;if(typeof q.then=="function")return Et($,Wf(q),et);if(q.$$typeof===D)return Et($,Lf($,q),et);Yf($,q)}return null}function st($,q,et,yt){var Zt=q!==null?q.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Zt!==null?null:O($,q,""+et,yt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case x:return et.key===Zt?G($,q,et,yt):null;case v:return et.key===Zt?rt($,q,et,yt):null;case F:return Zt=et._init,et=Zt(et._payload),st($,q,et,yt)}if(at(et)||Y(et))return Zt!==null?null:vt($,q,et,yt,null);if(typeof et.then=="function")return st($,q,Wf(et),yt);if(et.$$typeof===D)return st($,q,Lf($,et),yt);Yf($,et)}return null}function ut($,q,et,yt,Zt){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return $=$.get(et)||null,O(q,$,""+yt,Zt);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case x:return $=$.get(yt.key===null?et:yt.key)||null,G(q,$,yt,Zt);case v:return $=$.get(yt.key===null?et:yt.key)||null,rt(q,$,yt,Zt);case F:var Ce=yt._init;return yt=Ce(yt._payload),ut($,q,et,yt,Zt)}if(at(yt)||Y(yt))return $=$.get(et)||null,vt(q,$,yt,Zt,null);if(typeof yt.then=="function")return ut($,q,et,Wf(yt),Zt);if(yt.$$typeof===D)return ut($,q,et,Lf(q,yt),Zt);Yf(q,yt)}return null}function me($,q,et,yt){for(var Zt=null,Ce=null,re=q,he=q=0,ri=null;re!==null&&he<et.length;he++){re.index>he?(ri=re,re=null):ri=re.sibling;var Ke=st($,re,et[he],yt);if(Ke===null){re===null&&(re=ri);break}n&&re&&Ke.alternate===null&&r($,re),q=_(Ke,q,he),Ce===null?Zt=Ke:Ce.sibling=Ke,Ce=Ke,re=ri}if(he===et.length)return o($,re),tn&&Ks($,he),Zt;if(re===null){for(;he<et.length;he++)re=Et($,et[he],yt),re!==null&&(q=_(re,q,he),Ce===null?Zt=re:Ce.sibling=re,Ce=re);return tn&&Ks($,he),Zt}for(re=u(re);he<et.length;he++)ri=ut(re,$,he,et[he],yt),ri!==null&&(n&&ri.alternate!==null&&re.delete(ri.key===null?he:ri.key),q=_(ri,q,he),Ce===null?Zt=ri:Ce.sibling=ri,Ce=ri);return n&&re.forEach(function(Ms){return r($,Ms)}),tn&&Ks($,he),Zt}function ce($,q,et,yt){if(et==null)throw Error(i(151));for(var Zt=null,Ce=null,re=q,he=q=0,ri=null,Ke=et.next();re!==null&&!Ke.done;he++,Ke=et.next()){re.index>he?(ri=re,re=null):ri=re.sibling;var Ms=st($,re,Ke.value,yt);if(Ms===null){re===null&&(re=ri);break}n&&re&&Ms.alternate===null&&r($,re),q=_(Ms,q,he),Ce===null?Zt=Ms:Ce.sibling=Ms,Ce=Ms,re=ri}if(Ke.done)return o($,re),tn&&Ks($,he),Zt;if(re===null){for(;!Ke.done;he++,Ke=et.next())Ke=Et($,Ke.value,yt),Ke!==null&&(q=_(Ke,q,he),Ce===null?Zt=Ke:Ce.sibling=Ke,Ce=Ke);return tn&&Ks($,he),Zt}for(re=u(re);!Ke.done;he++,Ke=et.next())Ke=ut(re,$,he,Ke.value,yt),Ke!==null&&(n&&Ke.alternate!==null&&re.delete(Ke.key===null?he:Ke.key),q=_(Ke,q,he),Ce===null?Zt=Ke:Ce.sibling=Ke,Ce=Ke);return n&&re.forEach(function(wR){return r($,wR)}),tn&&Ks($,he),Zt}function cn($,q,et,yt){if(typeof et=="object"&&et!==null&&et.type===E&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case x:t:{for(var Zt=et.key;q!==null;){if(q.key===Zt){if(Zt=et.type,Zt===E){if(q.tag===7){o($,q.sibling),yt=d(q,et.props.children),yt.return=$,$=yt;break t}}else if(q.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===F&&ry(Zt)===q.type){o($,q.sibling),yt=d(q,et.props),ju(yt,et),yt.return=$,$=yt;break t}o($,q);break}else r($,q);q=q.sibling}et.type===E?(yt=Zs(et.props.children,$.mode,yt,et.key),yt.return=$,$=yt):(yt=wf(et.type,et.key,et.props,null,$.mode,yt),ju(yt,et),yt.return=$,$=yt)}return T($);case v:t:{for(Zt=et.key;q!==null;){if(q.key===Zt)if(q.tag===4&&q.stateNode.containerInfo===et.containerInfo&&q.stateNode.implementation===et.implementation){o($,q.sibling),yt=d(q,et.children||[]),yt.return=$,$=yt;break t}else{o($,q);break}else r($,q);q=q.sibling}yt=Np(et,$.mode,yt),yt.return=$,$=yt}return T($);case F:return Zt=et._init,et=Zt(et._payload),cn($,q,et,yt)}if(at(et))return me($,q,et,yt);if(Y(et)){if(Zt=Y(et),typeof Zt!="function")throw Error(i(150));return et=Zt.call(et),ce($,q,et,yt)}if(typeof et.then=="function")return cn($,q,Wf(et),yt);if(et.$$typeof===D)return cn($,q,Lf($,et),yt);Yf($,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,q!==null&&q.tag===6?(o($,q.sibling),yt=d(q,et),yt.return=$,$=yt):(o($,q),yt=Op(et,$.mode,yt),yt.return=$,$=yt),T($)):o($,q)}return function($,q,et,yt){try{qu=0;var Zt=cn($,q,et,yt);return sl=null,Zt}catch(re){if(re===Iu||re===Nf)throw re;var Ce=nr(29,re,null,$.mode);return Ce.lanes=yt,Ce.return=$,Ce}finally{}}}var ol=ay(!0),sy=ay(!1),Rr=Q(null),ta=null;function os(n){var r=n.alternate;Mt(Qn,Qn.current&1),Mt(Rr,n),ta===null&&(r===null||nl.current!==null||r.memoizedState!==null)&&(ta=n)}function oy(n){if(n.tag===22){if(Mt(Qn,Qn.current),Mt(Rr,n),ta===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(ta=n)}}else ls()}function ls(){Mt(Qn,Qn.current),Mt(Rr,Rr.current)}function ba(n){pt(Rr),ta===n&&(ta=null),pt(Qn)}var Qn=Q(0);function qf(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||n_(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function dm(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:m({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var pm={enqueueSetState:function(n,r,o){n=n._reactInternals;var u=sr(),d=rs(u);d.payload=r,o!=null&&(d.callback=o),r=as(n,d,u),r!==null&&(or(r,n,u),Hu(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=sr(),d=rs(u);d.tag=1,d.payload=r,o!=null&&(d.callback=o),r=as(n,d,u),r!==null&&(or(r,n,u),Hu(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=sr(),u=rs(o);u.tag=2,r!=null&&(u.callback=r),r=as(n,u,o),r!==null&&(or(r,n,o),Hu(r,n,o))}};function ly(n,r,o,u,d,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,T):r.prototype&&r.prototype.isPureReactComponent?!Du(o,u)||!Du(d,_):!0}function uy(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&pm.enqueueReplaceState(r,r.state,null)}function ro(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=m({},o));for(var d in n)o[d]===void 0&&(o[d]=n[d])}return o}var jf=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function cy(n){jf(n)}function fy(n){console.error(n)}function hy(n){jf(n)}function Zf(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function dy(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function mm(n,r,o){return o=rs(o),o.tag=3,o.payload={element:null},o.callback=function(){Zf(n,r)},o}function py(n){return n=rs(n),n.tag=3,n}function my(n,r,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var _=u.value;n.payload=function(){return d(_)},n.callback=function(){dy(r,o,u)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(n.callback=function(){dy(r,o,u),typeof d!="function"&&(ps===null?ps=new Set([this]):ps.add(this));var O=u.stack;this.componentDidCatch(u.value,{componentStack:O!==null?O:""})})}function wA(n,r,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Pu(r,o,d,!0),o=Rr.current,o!==null){switch(o.tag){case 13:return ta===null?Fm():o.alternate===null&&Ln===0&&(Ln=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===Xp?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Gm(n,u,d)),!1;case 22:return o.flags|=65536,u===Xp?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Gm(n,u,d)),!1}throw Error(i(435,o.tag))}return Gm(n,u,d),Fm(),!1}if(tn)return r=Rr.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=d,u!==Bp&&(n=Error(i(422),{cause:u}),Nu(Er(n,o)))):(u!==Bp&&(r=Error(i(423),{cause:u}),Nu(Er(r,o))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,u=Er(u,o),d=mm(n.stateNode,u,d),qp(n,d),Ln!==4&&(Ln=2)),!1;var _=Error(i(520),{cause:u});if(_=Er(_,o),ec===null?ec=[_]:ec.push(_),Ln!==4&&(Ln=2),r===null)return!0;u=Er(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=d&-d,o.lanes|=n,n=mm(o.stateNode,u,n),qp(o,n),!1;case 1:if(r=o.type,_=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ps===null||!ps.has(_))))return o.flags|=65536,d&=-d,o.lanes|=d,d=py(d),my(d,n,o,u),qp(o,d),!1}o=o.return}while(o!==null);return!1}var _y=Error(i(461)),ni=!1;function fi(n,r,o,u){r.child=n===null?sy(r,null,o,u):ol(r,n.child,o,u)}function gy(n,r,o,u,d){o=o.render;var _=r.ref;if("ref"in u){var T={};for(var O in u)O!=="ref"&&(T[O]=u[O])}else T=u;return eo(r),u=Jp(n,r,o,T,_,d),O=$p(),n!==null&&!ni?(tm(n,r,d),Aa(n,r,d)):(tn&&O&&Pp(r),r.flags|=1,fi(n,r,u,d),r.child)}function vy(n,r,o,u,d){if(n===null){var _=o.type;return typeof _=="function"&&!Lp(_)&&_.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=_,xy(n,r,_,u,d)):(n=wf(o.type,null,u,r,r.mode,d),n.ref=r.ref,n.return=r,r.child=n)}if(_=n.child,!Em(n,d)){var T=_.memoizedProps;if(o=o.compare,o=o!==null?o:Du,o(T,u)&&n.ref===r.ref)return Aa(n,r,d)}return r.flags|=1,n=xa(_,u),n.ref=r.ref,n.return=r,r.child=n}function xy(n,r,o,u,d){if(n!==null){var _=n.memoizedProps;if(Du(_,u)&&n.ref===r.ref)if(ni=!1,r.pendingProps=u=_,Em(n,d))(n.flags&131072)!==0&&(ni=!0);else return r.lanes=n.lanes,Aa(n,r,d)}return _m(n,r,o,u,d)}function yy(n,r,o){var u=r.pendingProps,d=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=_!==null?_.baseLanes|o:o,n!==null){for(d=r.child=n.child,_=0;d!==null;)_=_|d.lanes|d.childLanes,d=d.sibling;r.childLanes=_&~u}else r.childLanes=0,r.child=null;return Sy(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Of(r,_!==null?_.cachePool:null),_!==null?xx(r,_):Zp(),oy(r);else return r.lanes=r.childLanes=536870912,Sy(n,r,_!==null?_.baseLanes|o:o,o)}else _!==null?(Of(r,_.cachePool),xx(r,_),ls(),r.memoizedState=null):(n!==null&&Of(r,null),Zp(),ls());return fi(n,r,d,o),r.child}function Sy(n,r,o,u){var d=kp();return d=d===null?null:{parent:Zn._currentValue,pool:d},r.memoizedState={baseLanes:o,cachePool:d},n!==null&&Of(r,null),Zp(),oy(r),n!==null&&Pu(n,r,u,!0),null}function Qf(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function _m(n,r,o,u,d){return eo(r),o=Jp(n,r,o,u,void 0,d),u=$p(),n!==null&&!ni?(tm(n,r,d),Aa(n,r,d)):(tn&&u&&Pp(r),r.flags|=1,fi(n,r,o,d),r.child)}function My(n,r,o,u,d,_){return eo(r),r.updateQueue=null,o=Sx(r,u,o,d),yx(n),u=$p(),n!==null&&!ni?(tm(n,r,_),Aa(n,r,_)):(tn&&u&&Pp(r),r.flags|=1,fi(n,r,o,_),r.child)}function Ey(n,r,o,u,d){if(eo(r),r.stateNode===null){var _=Ko,T=o.contextType;typeof T=="object"&&T!==null&&(_=vi(T)),_=new o(u,_),r.memoizedState=_.state!==null&&_.state!==void 0?_.state:null,_.updater=pm,r.stateNode=_,_._reactInternals=r,_=r.stateNode,_.props=u,_.state=r.memoizedState,_.refs={},Wp(r),T=o.contextType,_.context=typeof T=="object"&&T!==null?vi(T):Ko,_.state=r.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(dm(r,o,T,u),_.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof _.getSnapshotBeforeUpdate=="function"||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(T=_.state,typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount(),T!==_.state&&pm.enqueueReplaceState(_,_.state,null),Vu(r,u,_,d),Gu(),_.state=r.memoizedState),typeof _.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){_=r.stateNode;var O=r.memoizedProps,G=ro(o,O);_.props=G;var rt=_.context,vt=o.contextType;T=Ko,typeof vt=="object"&&vt!==null&&(T=vi(vt));var Et=o.getDerivedStateFromProps;vt=typeof Et=="function"||typeof _.getSnapshotBeforeUpdate=="function",O=r.pendingProps!==O,vt||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(O||rt!==T)&&uy(r,_,u,T),is=!1;var st=r.memoizedState;_.state=st,Vu(r,u,_,d),Gu(),rt=r.memoizedState,O||st!==rt||is?(typeof Et=="function"&&(dm(r,o,Et,u),rt=r.memoizedState),(G=is||ly(r,o,G,u,st,rt,T))?(vt||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(r.flags|=4194308)):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=rt),_.props=u,_.state=rt,_.context=T,u=G):(typeof _.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{_=r.stateNode,Yp(n,r),T=r.memoizedProps,vt=ro(o,T),_.props=vt,Et=r.pendingProps,st=_.context,rt=o.contextType,G=Ko,typeof rt=="object"&&rt!==null&&(G=vi(rt)),O=o.getDerivedStateFromProps,(rt=typeof O=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(T!==Et||st!==G)&&uy(r,_,u,G),is=!1,st=r.memoizedState,_.state=st,Vu(r,u,_,d),Gu();var ut=r.memoizedState;T!==Et||st!==ut||is||n!==null&&n.dependencies!==null&&Uf(n.dependencies)?(typeof O=="function"&&(dm(r,o,O,u),ut=r.memoizedState),(vt=is||ly(r,o,vt,u,st,ut,G)||n!==null&&n.dependencies!==null&&Uf(n.dependencies))?(rt||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(u,ut,G),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(u,ut,G)),typeof _.componentDidUpdate=="function"&&(r.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&st===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&st===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=ut),_.props=u,_.state=ut,_.context=G,u=vt):(typeof _.componentDidUpdate!="function"||T===n.memoizedProps&&st===n.memoizedState||(r.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||T===n.memoizedProps&&st===n.memoizedState||(r.flags|=1024),u=!1)}return _=u,Qf(n,r),u=(r.flags&128)!==0,_||u?(_=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:_.render(),r.flags|=1,n!==null&&u?(r.child=ol(r,n.child,null,d),r.child=ol(r,null,o,d)):fi(n,r,o,d),r.memoizedState=_.state,n=r.child):n=Aa(n,r,d),n}function Ty(n,r,o,u){return Ou(),r.flags|=256,fi(n,r,o,u),r.child}var gm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vm(n){return{baseLanes:n,cachePool:fx()}}function xm(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=wr),n}function by(n,r,o){var u=r.pendingProps,d=!1,_=(r.flags&128)!==0,T;if((T=_)||(T=n!==null&&n.memoizedState===null?!1:(Qn.current&2)!==0),T&&(d=!0,r.flags&=-129),T=(r.flags&32)!==0,r.flags&=-33,n===null){if(tn){if(d?os(r):ls(),tn){var O=Un,G;if(G=O){t:{for(G=O,O=$r;G.nodeType!==8;){if(!O){O=null;break t}if(G=Vr(G.nextSibling),G===null){O=null;break t}}O=G}O!==null?(r.memoizedState={dehydrated:O,treeContext:Qs!==null?{id:ya,overflow:Sa}:null,retryLane:536870912,hydrationErrors:null},G=nr(18,null,null,0),G.stateNode=O,G.return=r,r.child=G,Di=r,Un=null,G=!0):G=!1}G||$s(r)}if(O=r.memoizedState,O!==null&&(O=O.dehydrated,O!==null))return n_(O)?r.lanes=32:r.lanes=536870912,null;ba(r)}return O=u.children,u=u.fallback,d?(ls(),d=r.mode,O=Kf({mode:"hidden",children:O},d),u=Zs(u,d,o,null),O.return=r,u.return=r,O.sibling=u,r.child=O,d=r.child,d.memoizedState=vm(o),d.childLanes=xm(n,T,o),r.memoizedState=gm,u):(os(r),ym(r,O))}if(G=n.memoizedState,G!==null&&(O=G.dehydrated,O!==null)){if(_)r.flags&256?(os(r),r.flags&=-257,r=Sm(n,r,o)):r.memoizedState!==null?(ls(),r.child=n.child,r.flags|=128,r=null):(ls(),d=u.fallback,O=r.mode,u=Kf({mode:"visible",children:u.children},O),d=Zs(d,O,o,null),d.flags|=2,u.return=r,d.return=r,u.sibling=d,r.child=u,ol(r,n.child,null,o),u=r.child,u.memoizedState=vm(o),u.childLanes=xm(n,T,o),r.memoizedState=gm,r=d);else if(os(r),n_(O)){if(T=O.nextSibling&&O.nextSibling.dataset,T)var rt=T.dgst;T=rt,u=Error(i(419)),u.stack="",u.digest=T,Nu({value:u,source:null,stack:null}),r=Sm(n,r,o)}else if(ni||Pu(n,r,o,!1),T=(o&n.childLanes)!==0,ni||T){if(T=vn,T!==null&&(u=o&-o,u=(u&42)!==0?1:Ie(u),u=(u&(T.suspendedLanes|o))!==0?0:u,u!==0&&u!==G.retryLane))throw G.retryLane=u,Qo(n,u),or(T,n,u),_y;O.data==="$?"||Fm(),r=Sm(n,r,o)}else O.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=G.treeContext,Un=Vr(O.nextSibling),Di=r,tn=!0,Js=null,$r=!1,n!==null&&(br[Ar++]=ya,br[Ar++]=Sa,br[Ar++]=Qs,ya=n.id,Sa=n.overflow,Qs=r),r=ym(r,u.children),r.flags|=4096);return r}return d?(ls(),d=u.fallback,O=r.mode,G=n.child,rt=G.sibling,u=xa(G,{mode:"hidden",children:u.children}),u.subtreeFlags=G.subtreeFlags&65011712,rt!==null?d=xa(rt,d):(d=Zs(d,O,o,null),d.flags|=2),d.return=r,u.return=r,u.sibling=d,r.child=u,u=d,d=r.child,O=n.child.memoizedState,O===null?O=vm(o):(G=O.cachePool,G!==null?(rt=Zn._currentValue,G=G.parent!==rt?{parent:rt,pool:rt}:G):G=fx(),O={baseLanes:O.baseLanes|o,cachePool:G}),d.memoizedState=O,d.childLanes=xm(n,T,o),r.memoizedState=gm,u):(os(r),o=n.child,n=o.sibling,o=xa(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(T=r.deletions,T===null?(r.deletions=[n],r.flags|=16):T.push(n)),r.child=o,r.memoizedState=null,o)}function ym(n,r){return r=Kf({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Kf(n,r){return n=nr(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Sm(n,r,o){return ol(r,n.child,null,o),n=ym(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Ay(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Fp(n.return,r,o)}function Mm(n,r,o,u,d){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(_.isBackwards=r,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=o,_.tailMode=d)}function Ry(n,r,o){var u=r.pendingProps,d=u.revealOrder,_=u.tail;if(fi(n,r,u.children,o),u=Qn.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)t:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ay(n,o,r);else if(n.tag===19)Ay(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break t;for(;n.sibling===null;){if(n.return===null||n.return===r)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(Mt(Qn,u),d){case"forwards":for(o=r.child,d=null;o!==null;)n=o.alternate,n!==null&&qf(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=r.child,r.child=null):(d=o.sibling,o.sibling=null),Mm(r,!1,d,o,_);break;case"backwards":for(o=null,d=r.child,r.child=null;d!==null;){if(n=d.alternate,n!==null&&qf(n)===null){r.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Mm(r,!0,o,null,_);break;case"together":Mm(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Aa(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),ds|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(Pu(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(i(153));if(r.child!==null){for(n=r.child,o=xa(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=xa(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function Em(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Uf(n)))}function CA(n,r,o){switch(r.tag){case 3:At(r,r.stateNode.containerInfo),ns(r,Zn,n.memoizedState.cache),Ou();break;case 27:case 5:Qt(r);break;case 4:At(r,r.stateNode.containerInfo);break;case 10:ns(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(os(r),r.flags|=128,null):(o&r.child.childLanes)!==0?by(n,r,o):(os(r),n=Aa(n,r,o),n!==null?n.sibling:null);os(r);break;case 19:var d=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Pu(n,r,o,!1),u=(o&r.childLanes)!==0),d){if(u)return Ry(n,r,o);r.flags|=128}if(d=r.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Mt(Qn,Qn.current),u)break;return null;case 22:case 23:return r.lanes=0,yy(n,r,o);case 24:ns(r,Zn,n.memoizedState.cache)}return Aa(n,r,o)}function wy(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)ni=!0;else{if(!Em(n,o)&&(r.flags&128)===0)return ni=!1,CA(n,r,o);ni=(n.flags&131072)!==0}else ni=!1,tn&&(r.flags&1048576)!==0&&rx(r,Df,r.index);switch(r.lanes=0,r.tag){case 16:t:{n=r.pendingProps;var u=r.elementType,d=u._init;if(u=d(u._payload),r.type=u,typeof u=="function")Lp(u)?(n=ro(u,n),r.tag=1,r=Ey(null,r,u,n,o)):(r.tag=0,r=_m(null,r,u,n,o));else{if(u!=null){if(d=u.$$typeof,d===A){r.tag=11,r=gy(null,r,u,n,o);break t}else if(d===C){r.tag=14,r=vy(null,r,u,n,o);break t}}throw r=lt(u)||u,Error(i(306,r,""))}}return r;case 0:return _m(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,d=ro(u,r.pendingProps),Ey(n,r,u,d,o);case 3:t:{if(At(r,r.stateNode.containerInfo),n===null)throw Error(i(387));u=r.pendingProps;var _=r.memoizedState;d=_.element,Yp(n,r),Vu(r,u,null,o);var T=r.memoizedState;if(u=T.cache,ns(r,Zn,u),u!==_.cache&&Hp(r,[Zn],o,!0),Gu(),u=T.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:T.cache},r.updateQueue.baseState=_,r.memoizedState=_,r.flags&256){r=Ty(n,r,u,o);break t}else if(u!==d){d=Er(Error(i(424)),r),Nu(d),r=Ty(n,r,u,o);break t}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Un=Vr(n.firstChild),Di=r,tn=!0,Js=null,$r=!0,o=sy(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Ou(),u===d){r=Aa(n,r,o);break t}fi(n,r,u,o)}r=r.child}return r;case 26:return Qf(n,r),n===null?(o=LS(r.type,null,r.pendingProps,null))?r.memoizedState=o:tn||(o=r.type,n=r.pendingProps,u=fh(_t.current).createElement(o),u[wt]=r,u[Jt]=n,di(u,o,n),Xe(u),r.stateNode=u):r.memoizedState=LS(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Qt(r),n===null&&tn&&(u=r.stateNode=CS(r.type,r.pendingProps,_t.current),Di=r,$r=!0,d=Un,gs(r.type)?(i_=d,Un=Vr(u.firstChild)):Un=d),fi(n,r,r.pendingProps.children,o),Qf(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&tn&&((d=u=Un)&&(u=iR(u,r.type,r.pendingProps,$r),u!==null?(r.stateNode=u,Di=r,Un=Vr(u.firstChild),$r=!1,d=!0):d=!1),d||$s(r)),Qt(r),d=r.type,_=r.pendingProps,T=n!==null?n.memoizedProps:null,u=_.children,$m(d,_)?u=null:T!==null&&$m(d,T)&&(r.flags|=32),r.memoizedState!==null&&(d=Jp(n,r,SA,null,null,o),cc._currentValue=d),Qf(n,r),fi(n,r,u,o),r.child;case 6:return n===null&&tn&&((n=o=Un)&&(o=rR(o,r.pendingProps,$r),o!==null?(r.stateNode=o,Di=r,Un=null,n=!0):n=!1),n||$s(r)),null;case 13:return by(n,r,o);case 4:return At(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=ol(r,null,u,o):fi(n,r,u,o),r.child;case 11:return gy(n,r,r.type,r.pendingProps,o);case 7:return fi(n,r,r.pendingProps,o),r.child;case 8:return fi(n,r,r.pendingProps.children,o),r.child;case 12:return fi(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,ns(r,r.type,u.value),fi(n,r,u.children,o),r.child;case 9:return d=r.type._context,u=r.pendingProps.children,eo(r),d=vi(d),u=u(d),r.flags|=1,fi(n,r,u,o),r.child;case 14:return vy(n,r,r.type,r.pendingProps,o);case 15:return xy(n,r,r.type,r.pendingProps,o);case 19:return Ry(n,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},n===null?(o=Kf(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=xa(n.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return yy(n,r,o);case 24:return eo(r),u=vi(Zn),n===null?(d=kp(),d===null&&(d=vn,_=Gp(),d.pooledCache=_,_.refCount++,_!==null&&(d.pooledCacheLanes|=o),d=_),r.memoizedState={parent:u,cache:d},Wp(r),ns(r,Zn,d)):((n.lanes&o)!==0&&(Yp(n,r),Vu(r,null,null,o),Gu()),d=n.memoizedState,_=r.memoizedState,d.parent!==u?(d={parent:u,cache:u},r.memoizedState=d,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=d),ns(r,Zn,u)):(u=_.cache,ns(r,Zn,u),u!==d.cache&&Hp(r,[Zn],o,!0))),fi(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function Ra(n){n.flags|=4}function Cy(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!BS(r)){if(r=Rr.current,r!==null&&((We&4194048)===We?ta!==null:(We&62914560)!==We&&(We&536870912)===0||r!==ta))throw Fu=Xp,hx;n.flags|=8192}}function Jf(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Nt():536870912,n.lanes|=r,fl|=r)}function Zu(n,r){if(!tn)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function An(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function DA(n,r,o){var u=r.pendingProps;switch(zp(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(r),null;case 1:return An(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),Ea(Zn),qt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Lu(r)?Ra(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,ox())),An(r),null;case 26:return o=r.memoizedState,n===null?(Ra(r),o!==null?(An(r),Cy(r,o)):(An(r),r.flags&=-16777217)):o?o!==n.memoizedState?(Ra(r),An(r),Cy(r,o)):(An(r),r.flags&=-16777217):(n.memoizedProps!==u&&Ra(r),An(r),r.flags&=-16777217),null;case 27:_e(r),o=_t.current;var d=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&Ra(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return An(r),null}n=Z.current,Lu(r)?ax(r):(n=CS(d,u,o),r.stateNode=n,Ra(r))}return An(r),null;case 5:if(_e(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&Ra(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return An(r),null}if(n=Z.current,Lu(r))ax(r);else{switch(d=fh(_t.current),n){case 1:n=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=d.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?d.createElement("select",{is:u.is}):d.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?d.createElement(o,{is:u.is}):d.createElement(o)}}n[wt]=r,n[Jt]=u;t:for(d=r.child;d!==null;){if(d.tag===5||d.tag===6)n.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===r)break t;for(;d.sibling===null;){if(d.return===null||d.return===r)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}r.stateNode=n;t:switch(di(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&Ra(r)}}return An(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&Ra(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(i(166));if(n=_t.current,Lu(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,d=Di,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}n[wt]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||MS(n.nodeValue,o)),n||$s(r)}else n=fh(n).createTextNode(u),n[wt]=r,r.stateNode=n}return An(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=Lu(r),u!==null&&u.dehydrated!==null){if(n===null){if(!d)throw Error(i(318));if(d=r.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[wt]=r}else Ou(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;An(r),d=!1}else d=ox(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return r.flags&256?(ba(r),r):(ba(r),null)}if(ba(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool);var _=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(_=u.memoizedState.cachePool.pool),_!==d&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),Jf(r,r.updateQueue),An(r),null;case 4:return qt(),n===null&&jm(r.stateNode.containerInfo),An(r),null;case 10:return Ea(r.type),An(r),null;case 19:if(pt(Qn),d=r.memoizedState,d===null)return An(r),null;if(u=(r.flags&128)!==0,_=d.rendering,_===null)if(u)Zu(d,!1);else{if(Ln!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(_=qf(n),_!==null){for(r.flags|=128,Zu(d,!1),n=_.updateQueue,r.updateQueue=n,Jf(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)ix(o,n),o=o.sibling;return Mt(Qn,Qn.current&1|2),r.child}n=n.sibling}d.tail!==null&&J()>eh&&(r.flags|=128,u=!0,Zu(d,!1),r.lanes=4194304)}else{if(!u)if(n=qf(_),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,Jf(r,n),Zu(d,!0),d.tail===null&&d.tailMode==="hidden"&&!_.alternate&&!tn)return An(r),null}else 2*J()-d.renderingStartTime>eh&&o!==536870912&&(r.flags|=128,u=!0,Zu(d,!1),r.lanes=4194304);d.isBackwards?(_.sibling=r.child,r.child=_):(n=d.last,n!==null?n.sibling=_:r.child=_,d.last=_)}return d.tail!==null?(r=d.tail,d.rendering=r,d.tail=r.sibling,d.renderingStartTime=J(),r.sibling=null,n=Qn.current,Mt(Qn,u?n&1|2:n&1),r):(An(r),null);case 22:case 23:return ba(r),Qp(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(An(r),r.subtreeFlags&6&&(r.flags|=8192)):An(r),o=r.updateQueue,o!==null&&Jf(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&pt(no),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Ea(Zn),An(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function UA(n,r){switch(zp(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ea(Zn),qt(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return _e(r),null;case 13:if(ba(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Ou()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return pt(Qn),null;case 4:return qt(),null;case 10:return Ea(r.type),null;case 22:case 23:return ba(r),Qp(),n!==null&&pt(no),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Ea(Zn),null;case 25:return null;default:return null}}function Dy(n,r){switch(zp(r),r.tag){case 3:Ea(Zn),qt();break;case 26:case 27:case 5:_e(r);break;case 4:qt();break;case 13:ba(r);break;case 19:pt(Qn);break;case 10:Ea(r.type);break;case 22:case 23:ba(r),Qp(),n!==null&&pt(no);break;case 24:Ea(Zn)}}function Qu(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&n)===n){u=void 0;var _=o.create,T=o.inst;u=_(),T.destroy=u}o=o.next}while(o!==d)}}catch(O){pn(r,r.return,O)}}function us(n,r,o){try{var u=r.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var _=d.next;u=_;do{if((u.tag&n)===n){var T=u.inst,O=T.destroy;if(O!==void 0){T.destroy=void 0,d=r;var G=o,rt=O;try{rt()}catch(vt){pn(d,G,vt)}}}u=u.next}while(u!==_)}}catch(vt){pn(r,r.return,vt)}}function Uy(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{vx(r,o)}catch(u){pn(n,n.return,u)}}}function Ly(n,r,o){o.props=ro(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){pn(n,r,u)}}function Ku(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(d){pn(n,r,d)}}function ea(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){pn(n,r,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){pn(n,r,d)}else o.current=null}function Oy(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break t;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){pn(n,n.return,d)}}function Tm(n,r,o){try{var u=n.stateNode;JA(u,n.type,o,r),u[Jt]=r}catch(d){pn(n,n.return,d)}}function Ny(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&gs(n.type)||n.tag===4}function bm(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||Ny(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&gs(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Am(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ch));else if(u!==4&&(u===27&&gs(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(Am(n,r,o),n=n.sibling;n!==null;)Am(n,r,o),n=n.sibling}function $f(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(u===27&&gs(n.type)&&(o=n.stateNode),n=n.child,n!==null))for($f(n,r,o),n=n.sibling;n!==null;)$f(n,r,o),n=n.sibling}function Py(n){var r=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,d=r.attributes;d.length;)r.removeAttributeNode(d[0]);di(r,u,o),r[wt]=n,r[Jt]=o}catch(_){pn(n,n.return,_)}}var wa=!1,Pn=!1,Rm=!1,zy=typeof WeakSet=="function"?WeakSet:Set,ii=null;function LA(n,r){if(n=n.containerInfo,Km=gh,n=qv(n),bp(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else t:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{o.nodeType,_.nodeType}catch{o=null;break t}var T=0,O=-1,G=-1,rt=0,vt=0,Et=n,st=null;e:for(;;){for(var ut;Et!==o||d!==0&&Et.nodeType!==3||(O=T+d),Et!==_||u!==0&&Et.nodeType!==3||(G=T+u),Et.nodeType===3&&(T+=Et.nodeValue.length),(ut=Et.firstChild)!==null;)st=Et,Et=ut;for(;;){if(Et===n)break e;if(st===o&&++rt===d&&(O=T),st===_&&++vt===u&&(G=T),(ut=Et.nextSibling)!==null)break;Et=st,st=Et.parentNode}Et=ut}o=O===-1||G===-1?null:{start:O,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(Jm={focusedElem:n,selectionRange:o},gh=!1,ii=r;ii!==null;)if(r=ii,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,ii=n;else for(;ii!==null;){switch(r=ii,_=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&_!==null){n=void 0,o=r,d=_.memoizedProps,_=_.memoizedState,u=o.stateNode;try{var me=ro(o.type,d,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(me,_),u.__reactInternalSnapshotBeforeUpdate=n}catch(ce){pn(o,o.return,ce)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)e_(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":e_(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=r.sibling,n!==null){n.return=r.return,ii=n;break}ii=r.return}}function By(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:cs(n,o),u&4&&Qu(5,o);break;case 1:if(cs(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(T){pn(o,o.return,T)}else{var d=ro(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(d,r,n.__reactInternalSnapshotBeforeUpdate)}catch(T){pn(o,o.return,T)}}u&64&&Uy(o),u&512&&Ku(o,o.return);break;case 3:if(cs(n,o),u&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{vx(n,r)}catch(T){pn(o,o.return,T)}}break;case 27:r===null&&u&4&&Py(o);case 26:case 5:cs(n,o),r===null&&u&4&&Oy(o),u&512&&Ku(o,o.return);break;case 12:cs(n,o);break;case 13:cs(n,o),u&4&&Hy(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=GA.bind(null,o),aR(n,o))));break;case 22:if(u=o.memoizedState!==null||wa,!u){r=r!==null&&r.memoizedState!==null||Pn,d=wa;var _=Pn;wa=u,(Pn=r)&&!_?fs(n,o,(o.subtreeFlags&8772)!==0):cs(n,o),wa=d,Pn=_}break;case 30:break;default:cs(n,o)}}function Iy(n){var r=n.alternate;r!==null&&(n.alternate=null,Iy(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&$e(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Mn=null,Gi=!1;function Ca(n,r,o){for(o=o.child;o!==null;)Fy(n,r,o),o=o.sibling}function Fy(n,r,o){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(mt,o)}catch{}switch(o.tag){case 26:Pn||ea(o,r),Ca(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Pn||ea(o,r);var u=Mn,d=Gi;gs(o.type)&&(Mn=o.stateNode,Gi=!1),Ca(n,r,o),sc(o.stateNode),Mn=u,Gi=d;break;case 5:Pn||ea(o,r);case 6:if(u=Mn,d=Gi,Mn=null,Ca(n,r,o),Mn=u,Gi=d,Mn!==null)if(Gi)try{(Mn.nodeType===9?Mn.body:Mn.nodeName==="HTML"?Mn.ownerDocument.body:Mn).removeChild(o.stateNode)}catch(_){pn(o,r,_)}else try{Mn.removeChild(o.stateNode)}catch(_){pn(o,r,_)}break;case 18:Mn!==null&&(Gi?(n=Mn,RS(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),pc(n)):RS(Mn,o.stateNode));break;case 4:u=Mn,d=Gi,Mn=o.stateNode.containerInfo,Gi=!0,Ca(n,r,o),Mn=u,Gi=d;break;case 0:case 11:case 14:case 15:Pn||us(2,o,r),Pn||us(4,o,r),Ca(n,r,o);break;case 1:Pn||(ea(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Ly(o,r,u)),Ca(n,r,o);break;case 21:Ca(n,r,o);break;case 22:Pn=(u=Pn)||o.memoizedState!==null,Ca(n,r,o),Pn=u;break;default:Ca(n,r,o)}}function Hy(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{pc(n)}catch(o){pn(r,r.return,o)}}function OA(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new zy),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new zy),r;default:throw Error(i(435,n.tag))}}function wm(n,r){var o=OA(n);r.forEach(function(u){var d=VA.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}function ir(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],_=n,T=r,O=T;t:for(;O!==null;){switch(O.tag){case 27:if(gs(O.type)){Mn=O.stateNode,Gi=!1;break t}break;case 5:Mn=O.stateNode,Gi=!1;break t;case 3:case 4:Mn=O.stateNode.containerInfo,Gi=!0;break t}O=O.return}if(Mn===null)throw Error(i(160));Fy(_,T,d),Mn=null,Gi=!1,_=d.alternate,_!==null&&(_.return=null),d.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Gy(r,n),r=r.sibling}var Gr=null;function Gy(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ir(r,n),rr(n),u&4&&(us(3,n,n.return),Qu(3,n),us(5,n,n.return));break;case 1:ir(r,n),rr(n),u&512&&(Pn||o===null||ea(o,o.return)),u&64&&wa&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=Gr;if(ir(r,n),rr(n),u&512&&(Pn||o===null||ea(o,o.return)),u&4){var _=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){t:{u=n.type,o=n.memoizedProps,d=d.ownerDocument||d;e:switch(u){case"title":_=d.getElementsByTagName("title")[0],(!_||_[yn]||_[wt]||_.namespaceURI==="http://www.w3.org/2000/svg"||_.hasAttribute("itemprop"))&&(_=d.createElement(u),d.head.insertBefore(_,d.querySelector("head > title"))),di(_,u,o),_[wt]=n,Xe(_),u=_;break t;case"link":var T=PS("link","href",d).get(u+(o.href||""));if(T){for(var O=0;O<T.length;O++)if(_=T[O],_.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&_.getAttribute("rel")===(o.rel==null?null:o.rel)&&_.getAttribute("title")===(o.title==null?null:o.title)&&_.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(O,1);break e}}_=d.createElement(u),di(_,u,o),d.head.appendChild(_);break;case"meta":if(T=PS("meta","content",d).get(u+(o.content||""))){for(O=0;O<T.length;O++)if(_=T[O],_.getAttribute("content")===(o.content==null?null:""+o.content)&&_.getAttribute("name")===(o.name==null?null:o.name)&&_.getAttribute("property")===(o.property==null?null:o.property)&&_.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&_.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(O,1);break e}}_=d.createElement(u),di(_,u,o),d.head.appendChild(_);break;default:throw Error(i(468,u))}_[wt]=n,Xe(_),u=_}n.stateNode=u}else zS(d,n.type,n.stateNode);else n.stateNode=NS(d,u,n.memoizedProps);else _!==u?(_===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):_.count--,u===null?zS(d,n.type,n.stateNode):NS(d,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Tm(n,n.memoizedProps,o.memoizedProps)}break;case 27:ir(r,n),rr(n),u&512&&(Pn||o===null||ea(o,o.return)),o!==null&&u&4&&Tm(n,n.memoizedProps,o.memoizedProps);break;case 5:if(ir(r,n),rr(n),u&512&&(Pn||o===null||ea(o,o.return)),n.flags&32){d=n.stateNode;try{Jr(d,"")}catch(ut){pn(n,n.return,ut)}}u&4&&n.stateNode!=null&&(d=n.memoizedProps,Tm(n,d,o!==null?o.memoizedProps:d)),u&1024&&(Rm=!0);break;case 6:if(ir(r,n),rr(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(ut){pn(n,n.return,ut)}}break;case 3:if(ph=null,d=Gr,Gr=hh(r.containerInfo),ir(r,n),Gr=d,rr(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{pc(r.containerInfo)}catch(ut){pn(n,n.return,ut)}Rm&&(Rm=!1,Vy(n));break;case 4:u=Gr,Gr=hh(n.stateNode.containerInfo),ir(r,n),rr(n),Gr=u;break;case 12:ir(r,n),rr(n);break;case 13:ir(r,n),rr(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Nm=J()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,wm(n,u)));break;case 22:d=n.memoizedState!==null;var G=o!==null&&o.memoizedState!==null,rt=wa,vt=Pn;if(wa=rt||d,Pn=vt||G,ir(r,n),Pn=vt,wa=rt,rr(n),u&8192)t:for(r=n.stateNode,r._visibility=d?r._visibility&-2:r._visibility|1,d&&(o===null||G||wa||Pn||ao(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){G=o=r;try{if(_=G.stateNode,d)T=_.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{O=G.stateNode;var Et=G.memoizedProps.style,st=Et!=null&&Et.hasOwnProperty("display")?Et.display:null;O.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(ut){pn(G,G.return,ut)}}}else if(r.tag===6){if(o===null){G=r;try{G.stateNode.nodeValue=d?"":G.memoizedProps}catch(ut){pn(G,G.return,ut)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break t;for(;r.sibling===null;){if(r.return===null||r.return===n)break t;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,wm(n,o))));break;case 19:ir(r,n),rr(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,wm(n,u)));break;case 30:break;case 21:break;default:ir(r,n),rr(n)}}function rr(n){var r=n.flags;if(r&2){try{for(var o,u=n.return;u!==null;){if(Ny(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var d=o.stateNode,_=bm(n);$f(n,_,d);break;case 5:var T=o.stateNode;o.flags&32&&(Jr(T,""),o.flags&=-33);var O=bm(n);$f(n,O,T);break;case 3:case 4:var G=o.stateNode.containerInfo,rt=bm(n);Am(n,rt,G);break;default:throw Error(i(161))}}catch(vt){pn(n,n.return,vt)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Vy(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Vy(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function cs(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)By(n,r.alternate,r),r=r.sibling}function ao(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:us(4,r,r.return),ao(r);break;case 1:ea(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&Ly(r,r.return,o),ao(r);break;case 27:sc(r.stateNode);case 26:case 5:ea(r,r.return),ao(r);break;case 22:r.memoizedState===null&&ao(r);break;case 30:ao(r);break;default:ao(r)}n=n.sibling}}function fs(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,d=n,_=r,T=_.flags;switch(_.tag){case 0:case 11:case 15:fs(d,_,o),Qu(4,_);break;case 1:if(fs(d,_,o),u=_,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(rt){pn(u,u.return,rt)}if(u=_,d=u.updateQueue,d!==null){var O=u.stateNode;try{var G=d.shared.hiddenCallbacks;if(G!==null)for(d.shared.hiddenCallbacks=null,d=0;d<G.length;d++)gx(G[d],O)}catch(rt){pn(u,u.return,rt)}}o&&T&64&&Uy(_),Ku(_,_.return);break;case 27:Py(_);case 26:case 5:fs(d,_,o),o&&u===null&&T&4&&Oy(_),Ku(_,_.return);break;case 12:fs(d,_,o);break;case 13:fs(d,_,o),o&&T&4&&Hy(d,_);break;case 22:_.memoizedState===null&&fs(d,_,o),Ku(_,_.return);break;case 30:break;default:fs(d,_,o)}r=r.sibling}}function Cm(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&zu(o))}function Dm(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&zu(n))}function na(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)ky(n,r,o,u),r=r.sibling}function ky(n,r,o,u){var d=r.flags;switch(r.tag){case 0:case 11:case 15:na(n,r,o,u),d&2048&&Qu(9,r);break;case 1:na(n,r,o,u);break;case 3:na(n,r,o,u),d&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&zu(n)));break;case 12:if(d&2048){na(n,r,o,u),n=r.stateNode;try{var _=r.memoizedProps,T=_.id,O=_.onPostCommit;typeof O=="function"&&O(T,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(G){pn(r,r.return,G)}}else na(n,r,o,u);break;case 13:na(n,r,o,u);break;case 23:break;case 22:_=r.stateNode,T=r.alternate,r.memoizedState!==null?_._visibility&2?na(n,r,o,u):Ju(n,r):_._visibility&2?na(n,r,o,u):(_._visibility|=2,ll(n,r,o,u,(r.subtreeFlags&10256)!==0)),d&2048&&Cm(T,r);break;case 24:na(n,r,o,u),d&2048&&Dm(r.alternate,r);break;default:na(n,r,o,u)}}function ll(n,r,o,u,d){for(d=d&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var _=n,T=r,O=o,G=u,rt=T.flags;switch(T.tag){case 0:case 11:case 15:ll(_,T,O,G,d),Qu(8,T);break;case 23:break;case 22:var vt=T.stateNode;T.memoizedState!==null?vt._visibility&2?ll(_,T,O,G,d):Ju(_,T):(vt._visibility|=2,ll(_,T,O,G,d)),d&&rt&2048&&Cm(T.alternate,T);break;case 24:ll(_,T,O,G,d),d&&rt&2048&&Dm(T.alternate,T);break;default:ll(_,T,O,G,d)}r=r.sibling}}function Ju(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,d=u.flags;switch(u.tag){case 22:Ju(o,u),d&2048&&Cm(u.alternate,u);break;case 24:Ju(o,u),d&2048&&Dm(u.alternate,u);break;default:Ju(o,u)}r=r.sibling}}var $u=8192;function ul(n){if(n.subtreeFlags&$u)for(n=n.child;n!==null;)Xy(n),n=n.sibling}function Xy(n){switch(n.tag){case 26:ul(n),n.flags&$u&&n.memoizedState!==null&&vR(Gr,n.memoizedState,n.memoizedProps);break;case 5:ul(n);break;case 3:case 4:var r=Gr;Gr=hh(n.stateNode.containerInfo),ul(n),Gr=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=$u,$u=16777216,ul(n),$u=r):ul(n));break;default:ul(n)}}function Wy(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function tc(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];ii=u,qy(u,n)}Wy(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Yy(n),n=n.sibling}function Yy(n){switch(n.tag){case 0:case 11:case 15:tc(n),n.flags&2048&&us(9,n,n.return);break;case 3:tc(n);break;case 12:tc(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,th(n)):tc(n);break;default:tc(n)}}function th(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];ii=u,qy(u,n)}Wy(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:us(8,r,r.return),th(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,th(r));break;default:th(r)}n=n.sibling}}function qy(n,r){for(;ii!==null;){var o=ii;switch(o.tag){case 0:case 11:case 15:us(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:zu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,ii=u;else t:for(o=n;ii!==null;){u=ii;var d=u.sibling,_=u.return;if(Iy(u),u===o){ii=null;break t}if(d!==null){d.return=_,ii=d;break t}ii=_}}}var NA={getCacheForType:function(n){var r=vi(Zn),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},PA=typeof WeakMap=="function"?WeakMap:Map,sn=0,vn=null,Pe=null,We=0,on=0,ar=null,hs=!1,cl=!1,Um=!1,Da=0,Ln=0,ds=0,so=0,Lm=0,wr=0,fl=0,ec=null,Vi=null,Om=!1,Nm=0,eh=1/0,nh=null,ps=null,hi=0,ms=null,hl=null,dl=0,Pm=0,zm=null,jy=null,nc=0,Bm=null;function sr(){if((sn&2)!==0&&We!==0)return We&-We;if(I.T!==null){var n=tl;return n!==0?n:Xm()}return Ft()}function Zy(){wr===0&&(wr=(We&536870912)===0||tn?k():536870912);var n=Rr.current;return n!==null&&(n.flags|=32),wr}function or(n,r,o){(n===vn&&(on===2||on===9)||n.cancelPendingCommit!==null)&&(pl(n,0),_s(n,We,wr,!1)),gt(n,o),((sn&2)===0||n!==vn)&&(n===vn&&((sn&2)===0&&(so|=o),Ln===4&&_s(n,We,wr,!1)),ia(n))}function Qy(n,r,o){if((sn&6)!==0)throw Error(i(327));var u=!o&&(r&124)===0&&(r&n.expiredLanes)===0||ae(n,r),d=u?IA(n,r):Hm(n,r,!0),_=u;do{if(d===0){cl&&!u&&_s(n,r,0,!1);break}else{if(o=n.current.alternate,_&&!zA(o)){d=Hm(n,r,!1),_=!1;continue}if(d===2){if(_=r,n.errorRecoveryDisabledLanes&_)var T=0;else T=n.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){r=T;t:{var O=n;d=ec;var G=O.current.memoizedState.isDehydrated;if(G&&(pl(O,T).flags|=256),T=Hm(O,T,!1),T!==2){if(Um&&!G){O.errorRecoveryDisabledLanes|=_,so|=_,d=4;break t}_=Vi,Vi=d,_!==null&&(Vi===null?Vi=_:Vi.push.apply(Vi,_))}d=T}if(_=!1,d!==2)continue}}if(d===1){pl(n,0),_s(n,r,0,!0);break}t:{switch(u=n,_=d,_){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:_s(u,r,wr,!hs);break t;case 2:Vi=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(d=Nm+300-J(),10<d)){if(_s(u,r,wr,!hs),ge(u,0,!0)!==0)break t;u.timeoutHandle=bS(Ky.bind(null,u,o,Vi,nh,Om,r,wr,so,fl,hs,_,2,-0,0),d);break t}Ky(u,o,Vi,nh,Om,r,wr,so,fl,hs,_,0,-0,0)}}break}while(!0);ia(n)}function Ky(n,r,o,u,d,_,T,O,G,rt,vt,Et,st,ut){if(n.timeoutHandle=-1,Et=r.subtreeFlags,(Et&8192||(Et&16785408)===16785408)&&(uc={stylesheets:null,count:0,unsuspend:gR},Xy(r),Et=xR(),Et!==null)){n.cancelPendingCommit=Et(rS.bind(null,n,r,_,o,u,d,T,O,G,vt,1,st,ut)),_s(n,_,T,!rt);return}rS(n,r,_,o,u,d,T,O,G)}function zA(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],_=d.getSnapshot;d=d.value;try{if(!er(_(),d))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function _s(n,r,o,u){r&=~Lm,r&=~so,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var d=r;0<d;){var _=31-Ut(d),T=1<<_;u[_]=-1,d&=~T}o!==0&&Pt(n,o,r)}function ih(){return(sn&6)===0?(ic(0),!1):!0}function Im(){if(Pe!==null){if(on===0)var n=Pe.return;else n=Pe,Ma=to=null,em(n),sl=null,qu=0,n=Pe;for(;n!==null;)Dy(n.alternate,n),n=n.return;Pe=null}}function pl(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,tR(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Im(),vn=n,Pe=o=xa(n.current,null),We=r,on=0,ar=null,hs=!1,cl=ae(n,r),Um=!1,fl=wr=Lm=so=ds=Ln=0,Vi=ec=null,Om=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var d=31-Ut(u),_=1<<d;r|=n[d],u&=~_}return Da=r,bf(),o}function Jy(n,r){be=null,I.H=Xf,r===Iu||r===Nf?(r=mx(),on=3):r===hx?(r=mx(),on=4):on=r===_y?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,ar=r,Pe===null&&(Ln=1,Zf(n,Er(r,n.current)))}function $y(){var n=I.H;return I.H=Xf,n===null?Xf:n}function tS(){var n=I.A;return I.A=NA,n}function Fm(){Ln=4,hs||(We&4194048)!==We&&Rr.current!==null||(cl=!0),(ds&134217727)===0&&(so&134217727)===0||vn===null||_s(vn,We,wr,!1)}function Hm(n,r,o){var u=sn;sn|=2;var d=$y(),_=tS();(vn!==n||We!==r)&&(nh=null,pl(n,r)),r=!1;var T=Ln;t:do try{if(on!==0&&Pe!==null){var O=Pe,G=ar;switch(on){case 8:Im(),T=6;break t;case 3:case 2:case 9:case 6:Rr.current===null&&(r=!0);var rt=on;if(on=0,ar=null,ml(n,O,G,rt),o&&cl){T=0;break t}break;default:rt=on,on=0,ar=null,ml(n,O,G,rt)}}BA(),T=Ln;break}catch(vt){Jy(n,vt)}while(!0);return r&&n.shellSuspendCounter++,Ma=to=null,sn=u,I.H=d,I.A=_,Pe===null&&(vn=null,We=0,bf()),T}function BA(){for(;Pe!==null;)eS(Pe)}function IA(n,r){var o=sn;sn|=2;var u=$y(),d=tS();vn!==n||We!==r?(nh=null,eh=J()+500,pl(n,r)):cl=ae(n,r);t:do try{if(on!==0&&Pe!==null){r=Pe;var _=ar;e:switch(on){case 1:on=0,ar=null,ml(n,r,_,1);break;case 2:case 9:if(dx(_)){on=0,ar=null,nS(r);break}r=function(){on!==2&&on!==9||vn!==n||(on=7),ia(n)},_.then(r,r);break t;case 3:on=7;break t;case 4:on=5;break t;case 7:dx(_)?(on=0,ar=null,nS(r)):(on=0,ar=null,ml(n,r,_,7));break;case 5:var T=null;switch(Pe.tag){case 26:T=Pe.memoizedState;case 5:case 27:var O=Pe;if(!T||BS(T)){on=0,ar=null;var G=O.sibling;if(G!==null)Pe=G;else{var rt=O.return;rt!==null?(Pe=rt,rh(rt)):Pe=null}break e}}on=0,ar=null,ml(n,r,_,5);break;case 6:on=0,ar=null,ml(n,r,_,6);break;case 8:Im(),Ln=6;break t;default:throw Error(i(462))}}FA();break}catch(vt){Jy(n,vt)}while(!0);return Ma=to=null,I.H=u,I.A=d,sn=o,Pe!==null?0:(vn=null,We=0,bf(),Ln)}function FA(){for(;Pe!==null&&!rn();)eS(Pe)}function eS(n){var r=wy(n.alternate,n,Da);n.memoizedProps=n.pendingProps,r===null?rh(n):Pe=r}function nS(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=My(o,r,r.pendingProps,r.type,void 0,We);break;case 11:r=My(o,r,r.pendingProps,r.type.render,r.ref,We);break;case 5:em(r);default:Dy(o,r),r=Pe=ix(r,Da),r=wy(o,r,Da)}n.memoizedProps=n.pendingProps,r===null?rh(n):Pe=r}function ml(n,r,o,u){Ma=to=null,em(r),sl=null,qu=0;var d=r.return;try{if(wA(n,d,r,o,We)){Ln=1,Zf(n,Er(o,n.current)),Pe=null;return}}catch(_){if(d!==null)throw Pe=d,_;Ln=1,Zf(n,Er(o,n.current)),Pe=null;return}r.flags&32768?(tn||u===1?n=!0:cl||(We&536870912)!==0?n=!1:(hs=n=!0,(u===2||u===9||u===3||u===6)&&(u=Rr.current,u!==null&&u.tag===13&&(u.flags|=16384))),iS(r,n)):rh(r)}function rh(n){var r=n;do{if((r.flags&32768)!==0){iS(r,hs);return}n=r.return;var o=DA(r.alternate,r,Da);if(o!==null){Pe=o;return}if(r=r.sibling,r!==null){Pe=r;return}Pe=r=n}while(r!==null);Ln===0&&(Ln=5)}function iS(n,r){do{var o=UA(n.alternate,n);if(o!==null){o.flags&=32767,Pe=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){Pe=n;return}Pe=n=o}while(n!==null);Ln=6,Pe=null}function rS(n,r,o,u,d,_,T,O,G){n.cancelPendingCommit=null;do ah();while(hi!==0);if((sn&6)!==0)throw Error(i(327));if(r!==null){if(r===n.current)throw Error(i(177));if(_=r.lanes|r.childLanes,_|=Dp,Ot(n,o,_,T,O,G),n===vn&&(Pe=vn=null,We=0),hl=r,ms=n,dl=o,Pm=_,zm=d,jy=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,kA(B,function(){return uS(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=I.T,I.T=null,d=X.p,X.p=2,T=sn,sn|=4;try{LA(n,r,o)}finally{sn=T,X.p=d,I.T=u}}hi=1,aS(),sS(),oS()}}function aS(){if(hi===1){hi=0;var n=ms,r=hl,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=I.T,I.T=null;var u=X.p;X.p=2;var d=sn;sn|=4;try{Gy(r,n);var _=Jm,T=qv(n.containerInfo),O=_.focusedElem,G=_.selectionRange;if(T!==O&&O&&O.ownerDocument&&Yv(O.ownerDocument.documentElement,O)){if(G!==null&&bp(O)){var rt=G.start,vt=G.end;if(vt===void 0&&(vt=rt),"selectionStart"in O)O.selectionStart=rt,O.selectionEnd=Math.min(vt,O.value.length);else{var Et=O.ownerDocument||document,st=Et&&Et.defaultView||window;if(st.getSelection){var ut=st.getSelection(),me=O.textContent.length,ce=Math.min(G.start,me),cn=G.end===void 0?ce:Math.min(G.end,me);!ut.extend&&ce>cn&&(T=cn,cn=ce,ce=T);var $=Wv(O,ce),q=Wv(O,cn);if($&&q&&(ut.rangeCount!==1||ut.anchorNode!==$.node||ut.anchorOffset!==$.offset||ut.focusNode!==q.node||ut.focusOffset!==q.offset)){var et=Et.createRange();et.setStart($.node,$.offset),ut.removeAllRanges(),ce>cn?(ut.addRange(et),ut.extend(q.node,q.offset)):(et.setEnd(q.node,q.offset),ut.addRange(et))}}}}for(Et=[],ut=O;ut=ut.parentNode;)ut.nodeType===1&&Et.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<Et.length;O++){var yt=Et[O];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}gh=!!Km,Jm=Km=null}finally{sn=d,X.p=u,I.T=o}}n.current=r,hi=2}}function sS(){if(hi===2){hi=0;var n=ms,r=hl,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=I.T,I.T=null;var u=X.p;X.p=2;var d=sn;sn|=4;try{By(n,r.alternate,r)}finally{sn=d,X.p=u,I.T=o}}hi=3}}function oS(){if(hi===4||hi===3){hi=0,de();var n=ms,r=hl,o=dl,u=jy;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?hi=5:(hi=0,hl=ms=null,lS(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(ps=null),_n(o),r=r.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(mt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=I.T,d=X.p,X.p=2,I.T=null;try{for(var _=n.onRecoverableError,T=0;T<u.length;T++){var O=u[T];_(O.value,{componentStack:O.stack})}}finally{I.T=r,X.p=d}}(dl&3)!==0&&ah(),ia(n),d=n.pendingLanes,(o&4194090)!==0&&(d&42)!==0?n===Bm?nc++:(nc=0,Bm=n):nc=0,ic(0)}}function lS(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,zu(r)))}function ah(n){return aS(),sS(),oS(),uS()}function uS(){if(hi!==5)return!1;var n=ms,r=Pm;Pm=0;var o=_n(dl),u=I.T,d=X.p;try{X.p=32>o?32:o,I.T=null,o=zm,zm=null;var _=ms,T=dl;if(hi=0,hl=ms=null,dl=0,(sn&6)!==0)throw Error(i(331));var O=sn;if(sn|=4,Yy(_.current),ky(_,_.current,T,o),sn=O,ic(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(mt,_)}catch{}return!0}finally{X.p=d,I.T=u,lS(n,r)}}function cS(n,r,o){r=Er(o,r),r=mm(n.stateNode,r,2),n=as(n,r,2),n!==null&&(gt(n,2),ia(n))}function pn(n,r,o){if(n.tag===3)cS(n,n,o);else for(;r!==null;){if(r.tag===3){cS(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ps===null||!ps.has(u))){n=Er(o,n),o=py(2),u=as(r,o,2),u!==null&&(my(o,u,r,n),gt(u,2),ia(u));break}}r=r.return}}function Gm(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new PA;var d=new Set;u.set(r,d)}else d=u.get(r),d===void 0&&(d=new Set,u.set(r,d));d.has(o)||(Um=!0,d.add(o),n=HA.bind(null,n,r,o),r.then(n,n))}function HA(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,vn===n&&(We&o)===o&&(Ln===4||Ln===3&&(We&62914560)===We&&300>J()-Nm?(sn&2)===0&&pl(n,0):Lm|=o,fl===We&&(fl=0)),ia(n)}function fS(n,r){r===0&&(r=Nt()),n=Qo(n,r),n!==null&&(gt(n,r),ia(n))}function GA(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),fS(n,o)}function VA(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(r),fS(n,o)}function kA(n,r){return Vt(n,r)}var sh=null,_l=null,Vm=!1,oh=!1,km=!1,oo=0;function ia(n){n!==_l&&n.next===null&&(_l===null?sh=_l=n:_l=_l.next=n),oh=!0,Vm||(Vm=!0,WA())}function ic(n,r){if(!km&&oh){km=!0;do for(var o=!1,u=sh;u!==null;){if(n!==0){var d=u.pendingLanes;if(d===0)var _=0;else{var T=u.suspendedLanes,O=u.pingedLanes;_=(1<<31-Ut(42|n)+1)-1,_&=d&~(T&~O),_=_&201326741?_&201326741|1:_?_|2:0}_!==0&&(o=!0,mS(u,_))}else _=We,_=ge(u,u===vn?_:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(_&3)===0||ae(u,_)||(o=!0,mS(u,_));u=u.next}while(o);km=!1}}function XA(){hS()}function hS(){oh=Vm=!1;var n=0;oo!==0&&($A()&&(n=oo),oo=0);for(var r=J(),o=null,u=sh;u!==null;){var d=u.next,_=dS(u,r);_===0?(u.next=null,o===null?sh=d:o.next=d,d===null&&(_l=o)):(o=u,(n!==0||(_&3)!==0)&&(oh=!0)),u=d}ic(n)}function dS(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,_=n.pendingLanes&-62914561;0<_;){var T=31-Ut(_),O=1<<T,G=d[T];G===-1?((O&o)===0||(O&u)!==0)&&(d[T]=Be(O,r)):G<=r&&(n.expiredLanes|=O),_&=~O}if(r=vn,o=We,o=ge(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===r&&(on===2||on===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&V(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||ae(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&V(u),_n(o)){case 2:case 8:o=Yt;break;case 32:o=B;break;case 268435456:o=nt;break;default:o=B}return u=pS.bind(null,n),o=Vt(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&V(u),n.callbackPriority=2,n.callbackNode=null,2}function pS(n,r){if(hi!==0&&hi!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(ah()&&n.callbackNode!==o)return null;var u=We;return u=ge(n,n===vn?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(Qy(n,u,r),dS(n,J()),n.callbackNode!=null&&n.callbackNode===o?pS.bind(null,n):null)}function mS(n,r){if(ah())return null;Qy(n,r,!0)}function WA(){eR(function(){(sn&6)!==0?Vt(we,XA):hS()})}function Xm(){return oo===0&&(oo=k()),oo}function _S(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:vf(""+n)}function gS(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function YA(n,r,o,u,d){if(r==="submit"&&o&&o.stateNode===d){var _=_S((d[Jt]||null).action),T=u.submitter;T&&(r=(r=T[Jt]||null)?_S(r.formAction):T.getAttribute("formAction"),r!==null&&(_=r,T=null));var O=new Mf("action","action",null,u,d);n.push({event:O,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(oo!==0){var G=T?gS(d,T):new FormData(d);cm(o,{pending:!0,data:G,method:d.method,action:_},null,G)}}else typeof _=="function"&&(O.preventDefault(),G=T?gS(d,T):new FormData(d),cm(o,{pending:!0,data:G,method:d.method,action:_},_,G))},currentTarget:d}]})}}for(var Wm=0;Wm<Cp.length;Wm++){var Ym=Cp[Wm],qA=Ym.toLowerCase(),jA=Ym[0].toUpperCase()+Ym.slice(1);Hr(qA,"on"+jA)}Hr(Qv,"onAnimationEnd"),Hr(Kv,"onAnimationIteration"),Hr(Jv,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(fA,"onTransitionRun"),Hr(hA,"onTransitionStart"),Hr(dA,"onTransitionCancel"),Hr($v,"onTransitionEnd"),N("onMouseEnter",["mouseout","mouseover"]),N("onMouseLeave",["mouseout","mouseover"]),N("onPointerEnter",["pointerout","pointerover"]),N("onPointerLeave",["pointerout","pointerover"]),hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rc));function vS(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;t:{var _=void 0;if(r)for(var T=u.length-1;0<=T;T--){var O=u[T],G=O.instance,rt=O.currentTarget;if(O=O.listener,G!==_&&d.isPropagationStopped())break t;_=O,d.currentTarget=rt;try{_(d)}catch(vt){jf(vt)}d.currentTarget=null,_=G}else for(T=0;T<u.length;T++){if(O=u[T],G=O.instance,rt=O.currentTarget,O=O.listener,G!==_&&d.isPropagationStopped())break t;_=O,d.currentTarget=rt;try{_(d)}catch(vt){jf(vt)}d.currentTarget=null,_=G}}}}function ze(n,r){var o=r[ue];o===void 0&&(o=r[ue]=new Set);var u=n+"__bubble";o.has(u)||(xS(r,n,2,!1),o.add(u))}function qm(n,r,o){var u=0;r&&(u|=4),xS(o,n,u,r)}var lh="_reactListening"+Math.random().toString(36).slice(2);function jm(n){if(!n[lh]){n[lh]=!0,Ci.forEach(function(o){o!=="selectionchange"&&(ZA.has(o)||qm(o,!1,n),qm(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[lh]||(r[lh]=!0,qm("selectionchange",!1,r))}}function xS(n,r,o,u){switch(kS(r)){case 2:var d=MR;break;case 8:d=ER;break;default:d=l_}o=d.bind(null,r,o,n),d=void 0,!_p||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(r,o,{capture:!0,passive:d}):n.addEventListener(r,o,!0):d!==void 0?n.addEventListener(r,o,{passive:d}):n.addEventListener(r,o,!1)}function Zm(n,r,o,u,d){var _=u;if((r&1)===0&&(r&2)===0&&u!==null)t:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var O=u.stateNode.containerInfo;if(O===d)break;if(T===4)for(T=u.return;T!==null;){var G=T.tag;if((G===3||G===4)&&T.stateNode.containerInfo===d)return;T=T.return}for(;O!==null;){if(T=ke(O),T===null)return;if(G=T.tag,G===5||G===6||G===26||G===27){u=_=T;continue t}O=O.parentNode}}u=u.return}Av(function(){var rt=_,vt=pp(o),Et=[];t:{var st=tx.get(n);if(st!==void 0){var ut=Mf,me=n;switch(n){case"keypress":if(yf(o)===0)break t;case"keydown":case"keyup":ut=kb;break;case"focusin":me="focus",ut=yp;break;case"focusout":me="blur",ut=yp;break;case"beforeblur":case"afterblur":ut=yp;break;case"click":if(o.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Cv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=Ub;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Yb;break;case Qv:case Kv:case Jv:ut=Nb;break;case $v:ut=jb;break;case"scroll":case"scrollend":ut=Cb;break;case"wheel":ut=Qb;break;case"copy":case"cut":case"paste":ut=zb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Uv;break;case"toggle":case"beforetoggle":ut=Jb}var ce=(r&4)!==0,cn=!ce&&(n==="scroll"||n==="scrollend"),$=ce?st!==null?st+"Capture":null:st;ce=[];for(var q=rt,et;q!==null;){var yt=q;if(et=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||et===null||$===null||(yt=Eu(q,$),yt!=null&&ce.push(ac(q,yt,et))),cn)break;q=q.return}0<ce.length&&(st=new ut(st,me,null,o,vt),Et.push({event:st,listeners:ce}))}}if((r&7)===0){t:{if(st=n==="mouseover"||n==="pointerover",ut=n==="mouseout"||n==="pointerout",st&&o!==dp&&(me=o.relatedTarget||o.fromElement)&&(ke(me)||me[Wt]))break t;if((ut||st)&&(st=vt.window===vt?vt:(st=vt.ownerDocument)?st.defaultView||st.parentWindow:window,ut?(me=o.relatedTarget||o.toElement,ut=rt,me=me?ke(me):null,me!==null&&(cn=l(me),ce=me.tag,me!==cn||ce!==5&&ce!==27&&ce!==6)&&(me=null)):(ut=null,me=rt),ut!==me)){if(ce=Cv,yt="onMouseLeave",$="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(ce=Uv,yt="onPointerLeave",$="onPointerEnter",q="pointer"),cn=ut==null?st:qn(ut),et=me==null?st:qn(me),st=new ce(yt,q+"leave",ut,o,vt),st.target=cn,st.relatedTarget=et,yt=null,ke(vt)===rt&&(ce=new ce($,q+"enter",me,o,vt),ce.target=et,ce.relatedTarget=cn,yt=ce),cn=yt,ut&&me)e:{for(ce=ut,$=me,q=0,et=ce;et;et=gl(et))q++;for(et=0,yt=$;yt;yt=gl(yt))et++;for(;0<q-et;)ce=gl(ce),q--;for(;0<et-q;)$=gl($),et--;for(;q--;){if(ce===$||$!==null&&ce===$.alternate)break e;ce=gl(ce),$=gl($)}ce=null}else ce=null;ut!==null&&yS(Et,st,ut,ce,!1),me!==null&&cn!==null&&yS(Et,cn,me,ce,!0)}}t:{if(st=rt?qn(rt):window,ut=st.nodeName&&st.nodeName.toLowerCase(),ut==="select"||ut==="input"&&st.type==="file")var Zt=Fv;else if(Bv(st))if(Hv)Zt=lA;else{Zt=sA;var Ce=aA}else ut=st.nodeName,!ut||ut.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?rt&&hp(rt.elementType)&&(Zt=Fv):Zt=oA;if(Zt&&(Zt=Zt(n,rt))){Iv(Et,Zt,o,vt);break t}Ce&&Ce(n,st,rt),n==="focusout"&&rt&&st.type==="number"&&rt.memoizedProps.value!=null&&gi(st,"number",st.value)}switch(Ce=rt?qn(rt):window,n){case"focusin":(Bv(Ce)||Ce.contentEditable==="true")&&(qo=Ce,Ap=rt,Uu=null);break;case"focusout":Uu=Ap=qo=null;break;case"mousedown":Rp=!0;break;case"contextmenu":case"mouseup":case"dragend":Rp=!1,jv(Et,o,vt);break;case"selectionchange":if(cA)break;case"keydown":case"keyup":jv(Et,o,vt)}var re;if(Mp)t:{switch(n){case"compositionstart":var he="onCompositionStart";break t;case"compositionend":he="onCompositionEnd";break t;case"compositionupdate":he="onCompositionUpdate";break t}he=void 0}else Yo?Pv(n,o)&&(he="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(he="onCompositionStart");he&&(Lv&&o.locale!=="ko"&&(Yo||he!=="onCompositionStart"?he==="onCompositionEnd"&&Yo&&(re=Rv()):(es=vt,gp="value"in es?es.value:es.textContent,Yo=!0)),Ce=uh(rt,he),0<Ce.length&&(he=new Dv(he,n,null,o,vt),Et.push({event:he,listeners:Ce}),re?he.data=re:(re=zv(o),re!==null&&(he.data=re)))),(re=tA?eA(n,o):nA(n,o))&&(he=uh(rt,"onBeforeInput"),0<he.length&&(Ce=new Dv("onBeforeInput","beforeinput",null,o,vt),Et.push({event:Ce,listeners:he}),Ce.data=re)),YA(Et,n,rt,o,vt)}vS(Et,r)})}function ac(n,r,o){return{instance:n,listener:r,currentTarget:o}}function uh(n,r){for(var o=r+"Capture",u=[];n!==null;){var d=n,_=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||_===null||(d=Eu(n,o),d!=null&&u.unshift(ac(n,d,_)),d=Eu(n,r),d!=null&&u.push(ac(n,d,_))),n.tag===3)return u;n=n.return}return[]}function gl(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function yS(n,r,o,u,d){for(var _=r._reactName,T=[];o!==null&&o!==u;){var O=o,G=O.alternate,rt=O.stateNode;if(O=O.tag,G!==null&&G===u)break;O!==5&&O!==26&&O!==27||rt===null||(G=rt,d?(rt=Eu(o,_),rt!=null&&T.unshift(ac(o,rt,G))):d||(rt=Eu(o,_),rt!=null&&T.push(ac(o,rt,G)))),o=o.return}T.length!==0&&n.push({event:r,listeners:T})}var QA=/\r\n?/g,KA=/\u0000|\uFFFD/g;function SS(n){return(typeof n=="string"?n:""+n).replace(QA,`
`).replace(KA,"")}function MS(n,r){return r=SS(r),SS(n)===r}function ch(){}function un(n,r,o,u,d,_){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Jr(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Jr(n,""+u);break;case"className":zt(n,"class",u);break;case"tabIndex":zt(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":zt(n,o,u);break;case"style":Tv(n,u,_);break;case"data":if(r!=="object"){zt(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=vf(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof _=="function"&&(o==="formAction"?(r!=="input"&&un(n,r,"name",d.name,d,null),un(n,r,"formEncType",d.formEncType,d,null),un(n,r,"formMethod",d.formMethod,d,null),un(n,r,"formTarget",d.formTarget,d,null)):(un(n,r,"encType",d.encType,d,null),un(n,r,"method",d.method,d,null),un(n,r,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=vf(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=ch);break;case"onScroll":u!=null&&ze("scroll",n);break;case"onScrollEnd":u!=null&&ze("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=vf(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":ze("beforetoggle",n),ze("toggle",n),bt(n,"popover",u);break;case"xlinkActuate":It(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":It(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":It(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":It(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":It(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":It(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":It(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":It(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":It(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":bt(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Rb.get(o)||o,bt(n,o,u))}}function Qm(n,r,o,u,d,_){switch(o){case"style":Tv(n,u,_);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Jr(n,u):(typeof u=="number"||typeof u=="bigint")&&Jr(n,""+u);break;case"onScroll":u!=null&&ze("scroll",n);break;case"onScrollEnd":u!=null&&ze("scrollend",n);break;case"onClick":u!=null&&(n.onclick=ch);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cn.hasOwnProperty(o))t:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),r=o.slice(2,d?o.length-7:void 0),_=n[Jt]||null,_=_!=null?_[o]:null,typeof _=="function"&&n.removeEventListener(r,_,d),typeof u=="function")){typeof _!="function"&&_!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,d);break t}o in n?n[o]=u:u===!0?n.setAttribute(o,""):bt(n,o,u)}}}function di(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",n),ze("load",n);var u=!1,d=!1,_;for(_ in o)if(o.hasOwnProperty(_)){var T=o[_];if(T!=null)switch(_){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:un(n,r,_,T,o,null)}}d&&un(n,r,"srcSet",o.srcSet,o,null),u&&un(n,r,"src",o.src,o,null);return;case"input":ze("invalid",n);var O=_=T=d=null,G=null,rt=null;for(u in o)if(o.hasOwnProperty(u)){var vt=o[u];if(vt!=null)switch(u){case"name":d=vt;break;case"type":T=vt;break;case"checked":G=vt;break;case"defaultChecked":rt=vt;break;case"value":_=vt;break;case"defaultValue":O=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(i(137,r));break;default:un(n,r,u,vt,o,null)}}dn(n,_,O,G,rt,T,d,!1),Dn(n);return;case"select":ze("invalid",n),u=T=_=null;for(d in o)if(o.hasOwnProperty(d)&&(O=o[d],O!=null))switch(d){case"value":_=O;break;case"defaultValue":T=O;break;case"multiple":u=O;default:un(n,r,d,O,o,null)}r=_,o=T,n.multiple=!!u,r!=null?jn(n,!!u,r,!1):o!=null&&jn(n,!!u,o,!0);return;case"textarea":ze("invalid",n),_=d=u=null;for(T in o)if(o.hasOwnProperty(T)&&(O=o[T],O!=null))switch(T){case"value":u=O;break;case"defaultValue":d=O;break;case"children":_=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(i(91));break;default:un(n,r,T,O,o,null)}ci(n,u,d,_),Dn(n);return;case"option":for(G in o)if(o.hasOwnProperty(G)&&(u=o[G],u!=null))switch(G){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:un(n,r,G,u,o,null)}return;case"dialog":ze("beforetoggle",n),ze("toggle",n),ze("cancel",n),ze("close",n);break;case"iframe":case"object":ze("load",n);break;case"video":case"audio":for(u=0;u<rc.length;u++)ze(rc[u],n);break;case"image":ze("error",n),ze("load",n);break;case"details":ze("toggle",n);break;case"embed":case"source":case"link":ze("error",n),ze("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in o)if(o.hasOwnProperty(rt)&&(u=o[rt],u!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:un(n,r,rt,u,o,null)}return;default:if(hp(r)){for(vt in o)o.hasOwnProperty(vt)&&(u=o[vt],u!==void 0&&Qm(n,r,vt,u,o,void 0));return}}for(O in o)o.hasOwnProperty(O)&&(u=o[O],u!=null&&un(n,r,O,u,o,null))}function JA(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,_=null,T=null,O=null,G=null,rt=null,vt=null;for(ut in o){var Et=o[ut];if(o.hasOwnProperty(ut)&&Et!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":G=Et;default:u.hasOwnProperty(ut)||un(n,r,ut,null,u,Et)}}for(var st in u){var ut=u[st];if(Et=o[st],u.hasOwnProperty(st)&&(ut!=null||Et!=null))switch(st){case"type":_=ut;break;case"name":d=ut;break;case"checked":rt=ut;break;case"defaultChecked":vt=ut;break;case"value":T=ut;break;case"defaultValue":O=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(i(137,r));break;default:ut!==Et&&un(n,r,st,ut,u,Et)}}_a(n,T,O,G,rt,vt,_,d);return;case"select":ut=T=O=st=null;for(_ in o)if(G=o[_],o.hasOwnProperty(_)&&G!=null)switch(_){case"value":break;case"multiple":ut=G;default:u.hasOwnProperty(_)||un(n,r,_,null,u,G)}for(d in u)if(_=u[d],G=o[d],u.hasOwnProperty(d)&&(_!=null||G!=null))switch(d){case"value":st=_;break;case"defaultValue":O=_;break;case"multiple":T=_;default:_!==G&&un(n,r,d,_,u,G)}r=O,o=T,u=ut,st!=null?jn(n,!!o,st,!1):!!u!=!!o&&(r!=null?jn(n,!!o,r,!0):jn(n,!!o,o?[]:"",!1));return;case"textarea":ut=st=null;for(O in o)if(d=o[O],o.hasOwnProperty(O)&&d!=null&&!u.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:un(n,r,O,null,u,d)}for(T in u)if(d=u[T],_=o[T],u.hasOwnProperty(T)&&(d!=null||_!=null))switch(T){case"value":st=d;break;case"defaultValue":ut=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==_&&un(n,r,T,d,u,_)}ei(n,st,ut);return;case"option":for(var me in o)if(st=o[me],o.hasOwnProperty(me)&&st!=null&&!u.hasOwnProperty(me))switch(me){case"selected":n.selected=!1;break;default:un(n,r,me,null,u,st)}for(G in u)if(st=u[G],ut=o[G],u.hasOwnProperty(G)&&st!==ut&&(st!=null||ut!=null))switch(G){case"selected":n.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:un(n,r,G,st,u,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in o)st=o[ce],o.hasOwnProperty(ce)&&st!=null&&!u.hasOwnProperty(ce)&&un(n,r,ce,null,u,st);for(rt in u)if(st=u[rt],ut=o[rt],u.hasOwnProperty(rt)&&st!==ut&&(st!=null||ut!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(i(137,r));break;default:un(n,r,rt,st,u,ut)}return;default:if(hp(r)){for(var cn in o)st=o[cn],o.hasOwnProperty(cn)&&st!==void 0&&!u.hasOwnProperty(cn)&&Qm(n,r,cn,void 0,u,st);for(vt in u)st=u[vt],ut=o[vt],!u.hasOwnProperty(vt)||st===ut||st===void 0&&ut===void 0||Qm(n,r,vt,st,u,ut);return}}for(var $ in o)st=o[$],o.hasOwnProperty($)&&st!=null&&!u.hasOwnProperty($)&&un(n,r,$,null,u,st);for(Et in u)st=u[Et],ut=o[Et],!u.hasOwnProperty(Et)||st===ut||st==null&&ut==null||un(n,r,Et,st,u,ut)}var Km=null,Jm=null;function fh(n){return n.nodeType===9?n:n.ownerDocument}function ES(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function TS(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function $m(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var t_=null;function $A(){var n=window.event;return n&&n.type==="popstate"?n===t_?!1:(t_=n,!0):(t_=null,!1)}var bS=typeof setTimeout=="function"?setTimeout:void 0,tR=typeof clearTimeout=="function"?clearTimeout:void 0,AS=typeof Promise=="function"?Promise:void 0,eR=typeof queueMicrotask=="function"?queueMicrotask:typeof AS<"u"?function(n){return AS.resolve(null).then(n).catch(nR)}:bS;function nR(n){setTimeout(function(){throw n})}function gs(n){return n==="head"}function RS(n,r){var o=r,u=0,d=0;do{var _=o.nextSibling;if(n.removeChild(o),_&&_.nodeType===8)if(o=_.data,o==="/$"){if(0<u&&8>u){o=u;var T=n.ownerDocument;if(o&1&&sc(T.documentElement),o&2&&sc(T.body),o&4)for(o=T.head,sc(o),T=o.firstChild;T;){var O=T.nextSibling,G=T.nodeName;T[yn]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&T.rel.toLowerCase()==="stylesheet"||o.removeChild(T),T=O}}if(d===0){n.removeChild(_),pc(r);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:u=o.charCodeAt(0)-48;else u=0;o=_}while(o);pc(r)}function e_(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":e_(o),$e(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function iR(n,r,o,u){for(;n.nodeType===1;){var d=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[yn])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(_=n.getAttribute("rel"),_==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(_!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(_=n.getAttribute("src"),(_!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&_&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var _=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===_)return n}else return n;if(n=Vr(n.nextSibling),n===null)break}return null}function rR(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Vr(n.nextSibling),n===null))return null;return n}function n_(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function aR(n,r){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Vr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var i_=null;function wS(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function CS(n,r,o){switch(r=fh(o),n){case"html":if(n=r.documentElement,!n)throw Error(i(452));return n;case"head":if(n=r.head,!n)throw Error(i(453));return n;case"body":if(n=r.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function sc(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);$e(n)}var Cr=new Map,DS=new Set;function hh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ua=X.d;X.d={f:sR,r:oR,D:lR,C:uR,L:cR,m:fR,X:dR,S:hR,M:pR};function sR(){var n=Ua.f(),r=ih();return n||r}function oR(n){var r=Ne(n);r!==null&&r.tag===5&&r.type==="form"?Qx(r):Ua.r(n)}var vl=typeof document>"u"?null:document;function US(n,r,o){var u=vl;if(u&&typeof r=="string"&&r){var d=gn(r);d='link[rel="'+n+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),DS.has(d)||(DS.add(d),n={rel:n,crossOrigin:o,href:r},u.querySelector(d)===null&&(r=u.createElement("link"),di(r,"link",n),Xe(r),u.head.appendChild(r)))}}function lR(n){Ua.D(n),US("dns-prefetch",n,null)}function uR(n,r){Ua.C(n,r),US("preconnect",n,r)}function cR(n,r,o){Ua.L(n,r,o);var u=vl;if(u&&n&&r){var d='link[rel="preload"][as="'+gn(r)+'"]';r==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+gn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+gn(o.imageSizes)+'"]')):d+='[href="'+gn(n)+'"]';var _=d;switch(r){case"style":_=xl(n);break;case"script":_=yl(n)}Cr.has(_)||(n=m({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),Cr.set(_,n),u.querySelector(d)!==null||r==="style"&&u.querySelector(oc(_))||r==="script"&&u.querySelector(lc(_))||(r=u.createElement("link"),di(r,"link",n),Xe(r),u.head.appendChild(r)))}}function fR(n,r){Ua.m(n,r);var o=vl;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",d='link[rel="modulepreload"][as="'+gn(u)+'"][href="'+gn(n)+'"]',_=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":_=yl(n)}if(!Cr.has(_)&&(n=m({rel:"modulepreload",href:n},r),Cr.set(_,n),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(lc(_)))return}u=o.createElement("link"),di(u,"link",n),Xe(u),o.head.appendChild(u)}}}function hR(n,r,o){Ua.S(n,r,o);var u=vl;if(u&&n){var d=Ze(u).hoistableStyles,_=xl(n);r=r||"default";var T=d.get(_);if(!T){var O={loading:0,preload:null};if(T=u.querySelector(oc(_)))O.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":r},o),(o=Cr.get(_))&&r_(n,o);var G=T=u.createElement("link");Xe(G),di(G,"link",n),G._p=new Promise(function(rt,vt){G.onload=rt,G.onerror=vt}),G.addEventListener("load",function(){O.loading|=1}),G.addEventListener("error",function(){O.loading|=2}),O.loading|=4,dh(T,r,u)}T={type:"stylesheet",instance:T,count:1,state:O},d.set(_,T)}}}function dR(n,r){Ua.X(n,r);var o=vl;if(o&&n){var u=Ze(o).hoistableScripts,d=yl(n),_=u.get(d);_||(_=o.querySelector(lc(d)),_||(n=m({src:n,async:!0},r),(r=Cr.get(d))&&a_(n,r),_=o.createElement("script"),Xe(_),di(_,"link",n),o.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(d,_))}}function pR(n,r){Ua.M(n,r);var o=vl;if(o&&n){var u=Ze(o).hoistableScripts,d=yl(n),_=u.get(d);_||(_=o.querySelector(lc(d)),_||(n=m({src:n,async:!0,type:"module"},r),(r=Cr.get(d))&&a_(n,r),_=o.createElement("script"),Xe(_),di(_,"link",n),o.head.appendChild(_)),_={type:"script",instance:_,count:1,state:null},u.set(d,_))}}function LS(n,r,o,u){var d=(d=_t.current)?hh(d):null;if(!d)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=xl(o.href),o=Ze(d).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=xl(o.href);var _=Ze(d).hoistableStyles,T=_.get(n);if(T||(d=d.ownerDocument||d,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},_.set(n,T),(_=d.querySelector(oc(n)))&&!_._p&&(T.instance=_,T.state.loading=5),Cr.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Cr.set(n,o),_||mR(d,n,o,T.state))),r&&u===null)throw Error(i(528,""));return T}if(r&&u!==null)throw Error(i(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=yl(o),o=Ze(d).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function xl(n){return'href="'+gn(n)+'"'}function oc(n){return'link[rel="stylesheet"]['+n+"]"}function OS(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function mR(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),di(r,"link",o),Xe(r),n.head.appendChild(r))}function yl(n){return'[src="'+gn(n)+'"]'}function lc(n){return"script[async]"+n}function NS(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+gn(o.href)+'"]');if(u)return r.instance=u,Xe(u),u;var d=m({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),Xe(u),di(u,"style",d),dh(u,o.precedence,n),r.instance=u;case"stylesheet":d=xl(o.href);var _=n.querySelector(oc(d));if(_)return r.state.loading|=4,r.instance=_,Xe(_),_;u=OS(o),(d=Cr.get(d))&&r_(u,d),_=(n.ownerDocument||n).createElement("link"),Xe(_);var T=_;return T._p=new Promise(function(O,G){T.onload=O,T.onerror=G}),di(_,"link",u),r.state.loading|=4,dh(_,o.precedence,n),r.instance=_;case"script":return _=yl(o.src),(d=n.querySelector(lc(_)))?(r.instance=d,Xe(d),d):(u=o,(d=Cr.get(_))&&(u=m({},o),a_(u,d)),n=n.ownerDocument||n,d=n.createElement("script"),Xe(d),di(d,"link",u),n.head.appendChild(d),r.instance=d);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,dh(u,o.precedence,n));return r.instance}function dh(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,_=d,T=0;T<u.length;T++){var O=u[T];if(O.dataset.precedence===r)_=O;else if(_!==d)break}_?_.parentNode.insertBefore(n,_.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function r_(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function a_(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var ph=null;function PS(n,r,o){if(ph===null){var u=new Map,d=ph=new Map;d.set(o,u)}else d=ph,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),d=0;d<o.length;d++){var _=o[d];if(!(_[yn]||_[wt]||n==="link"&&_.getAttribute("rel")==="stylesheet")&&_.namespaceURI!=="http://www.w3.org/2000/svg"){var T=_.getAttribute(r)||"";T=n+T;var O=u.get(T);O?O.push(_):u.set(T,[_])}}return u}function zS(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function _R(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function BS(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var uc=null;function gR(){}function vR(n,r,o){if(uc===null)throw Error(i(475));var u=uc;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var d=xl(o.href),_=n.querySelector(oc(d));if(_){n=_._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=mh.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=_,Xe(_);return}_=n.ownerDocument||n,o=OS(o),(d=Cr.get(d))&&r_(o,d),_=_.createElement("link"),Xe(_);var T=_;T._p=new Promise(function(O,G){T.onload=O,T.onerror=G}),di(_,"link",o),r.instance=_}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=mh.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function xR(){if(uc===null)throw Error(i(475));var n=uc;return n.stylesheets&&n.count===0&&s_(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&s_(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function mh(){if(this.count--,this.count===0){if(this.stylesheets)s_(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var _h=null;function s_(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,_h=new Map,r.forEach(yR,n),_h=null,mh.call(n))}function yR(n,r){if(!(r.state.loading&4)){var o=_h.get(n);if(o)var u=o.get(null);else{o=new Map,_h.set(n,o);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),_=0;_<d.length;_++){var T=d[_];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),u=T)}u&&o.set(null,u)}d=r.instance,T=d.getAttribute("data-precedence"),_=o.get(T)||u,_===u&&o.set(null,d),o.set(T,d),this.count++,u=mh.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),_?_.parentNode.insertBefore(d,_.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),r.state.loading|=4}}var cc={$$typeof:D,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function SR(n,r,o,u,d,_,T,O){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ft(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ft(0),this.hiddenUpdates=ft(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=_,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function IS(n,r,o,u,d,_,T,O,G,rt,vt,Et){return n=new SR(n,r,o,T,O,G,rt,Et),r=1,_===!0&&(r|=24),_=nr(3,null,null,r),n.current=_,_.stateNode=n,r=Gp(),r.refCount++,n.pooledCache=r,r.refCount++,_.memoizedState={element:u,isDehydrated:o,cache:r},Wp(_),n}function FS(n){return n?(n=Ko,n):Ko}function HS(n,r,o,u,d,_){d=FS(d),u.context===null?u.context=d:u.pendingContext=d,u=rs(r),u.payload={element:o},_=_===void 0?null:_,_!==null&&(u.callback=_),o=as(n,u,r),o!==null&&(or(o,n,r),Hu(o,n,r))}function GS(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function o_(n,r){GS(n,r),(n=n.alternate)&&GS(n,r)}function VS(n){if(n.tag===13){var r=Qo(n,67108864);r!==null&&or(r,n,67108864),o_(n,67108864)}}var gh=!0;function MR(n,r,o,u){var d=I.T;I.T=null;var _=X.p;try{X.p=2,l_(n,r,o,u)}finally{X.p=_,I.T=d}}function ER(n,r,o,u){var d=I.T;I.T=null;var _=X.p;try{X.p=8,l_(n,r,o,u)}finally{X.p=_,I.T=d}}function l_(n,r,o,u){if(gh){var d=u_(u);if(d===null)Zm(n,r,u,vh,o),XS(n,u);else if(bR(d,n,r,o,u))u.stopPropagation();else if(XS(n,u),r&4&&-1<TR.indexOf(n)){for(;d!==null;){var _=Ne(d);if(_!==null)switch(_.tag){case 3:if(_=_.stateNode,_.current.memoizedState.isDehydrated){var T=Bt(_.pendingLanes);if(T!==0){var O=_;for(O.pendingLanes|=2,O.entangledLanes|=2;T;){var G=1<<31-Ut(T);O.entanglements[1]|=G,T&=~G}ia(_),(sn&6)===0&&(eh=J()+500,ic(0))}}break;case 13:O=Qo(_,2),O!==null&&or(O,_,2),ih(),o_(_,2)}if(_=u_(u),_===null&&Zm(n,r,u,vh,o),_===d)break;d=_}d!==null&&u.stopPropagation()}else Zm(n,r,u,null,o)}}function u_(n){return n=pp(n),c_(n)}var vh=null;function c_(n){if(vh=null,n=ke(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=c(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return vh=n,null}function kS(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kt()){case we:return 2;case Yt:return 8;case B:case U:return 32;case nt:return 268435456;default:return 32}default:return 32}}var f_=!1,vs=null,xs=null,ys=null,fc=new Map,hc=new Map,Ss=[],TR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function XS(n,r){switch(n){case"focusin":case"focusout":vs=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":ys=null;break;case"pointerover":case"pointerout":fc.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":hc.delete(r.pointerId)}}function dc(n,r,o,u,d,_){return n===null||n.nativeEvent!==_?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:_,targetContainers:[d]},r!==null&&(r=Ne(r),r!==null&&VS(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,d!==null&&r.indexOf(d)===-1&&r.push(d),n)}function bR(n,r,o,u,d){switch(r){case"focusin":return vs=dc(vs,n,r,o,u,d),!0;case"dragenter":return xs=dc(xs,n,r,o,u,d),!0;case"mouseover":return ys=dc(ys,n,r,o,u,d),!0;case"pointerover":var _=d.pointerId;return fc.set(_,dc(fc.get(_)||null,n,r,o,u,d)),!0;case"gotpointercapture":return _=d.pointerId,hc.set(_,dc(hc.get(_)||null,n,r,o,u,d)),!0}return!1}function WS(n){var r=ke(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){n.blockedOn=r,Kt(n.priority,function(){if(o.tag===13){var u=sr();u=Ie(u);var d=Qo(o,u);d!==null&&or(d,o,u),o_(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=u_(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);dp=u,o.target.dispatchEvent(u),dp=null}else return r=Ne(o),r!==null&&VS(r),n.blockedOn=o,!1;r.shift()}return!0}function YS(n,r,o){xh(n)&&o.delete(r)}function AR(){f_=!1,vs!==null&&xh(vs)&&(vs=null),xs!==null&&xh(xs)&&(xs=null),ys!==null&&xh(ys)&&(ys=null),fc.forEach(YS),hc.forEach(YS)}function yh(n,r){n.blockedOn===r&&(n.blockedOn=null,f_||(f_=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,AR)))}var Sh=null;function qS(n){Sh!==n&&(Sh=n,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Sh===n&&(Sh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],d=n[r+2];if(typeof u!="function"){if(c_(u||o)===null)continue;break}var _=Ne(o);_!==null&&(n.splice(r,3),r-=3,cm(_,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function pc(n){function r(G){return yh(G,n)}vs!==null&&yh(vs,n),xs!==null&&yh(xs,n),ys!==null&&yh(ys,n),fc.forEach(r),hc.forEach(r);for(var o=0;o<Ss.length;o++){var u=Ss[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<Ss.length&&(o=Ss[0],o.blockedOn===null);)WS(o),o.blockedOn===null&&Ss.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],_=o[u+1],T=d[Jt]||null;if(typeof _=="function")T||qS(o);else if(T){var O=null;if(_&&_.hasAttribute("formAction")){if(d=_,T=_[Jt]||null)O=T.formAction;else if(c_(d)!==null)continue}else O=T.action;typeof O=="function"?o[u+1]=O:(o.splice(u,3),u-=3),qS(o)}}}function h_(n){this._internalRoot=n}Mh.prototype.render=h_.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(i(409));var o=r.current,u=sr();HS(o,u,n,r,null,null)},Mh.prototype.unmount=h_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;HS(n.current,2,null,n,null,null),ih(),r[Wt]=null}};function Mh(n){this._internalRoot=n}Mh.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ft();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Ss.length&&r!==0&&r<Ss[o].priority;o++);Ss.splice(o,0,n),o===0&&WS(n)}};var jS=t.version;if(jS!=="19.1.0")throw Error(i(527,jS,"19.1.0"));X.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=h(r),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var RR={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eh.isDisabled&&Eh.supportsFiber)try{mt=Eh.inject(RR),Ct=Eh}catch{}}return _c.createRoot=function(n,r){if(!a(n))throw Error(i(299));var o=!1,u="",d=cy,_=fy,T=hy,O=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(_=r.onCaughtError),r.onRecoverableError!==void 0&&(T=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(O=r.unstable_transitionCallbacks)),r=IS(n,1,!1,null,null,o,u,d,_,T,O,null),n[Wt]=r.current,jm(n),new h_(r)},_c.hydrateRoot=function(n,r,o){if(!a(n))throw Error(i(299));var u=!1,d="",_=cy,T=fy,O=hy,G=null,rt=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(_=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(O=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(G=o.unstable_transitionCallbacks),o.formState!==void 0&&(rt=o.formState)),r=IS(n,1,!0,r,o??null,u,d,_,T,O,G,rt),r.context=FS(null),o=r.current,u=sr(),u=Ie(u),d=rs(u),d.callback=null,as(o,d,u),o=u,r.current.lanes=o,gt(r,o),ia(r),n[Wt]=r.current,jm(n),new Mh(r)},_c.version="19.1.0",_c}var rM;function BR(){if(rM)return m_.exports;rM=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),m_.exports=zR(),m_.exports}var IR=BR();const FR=tE(IR);var Wi=function(){return Wi=Object.assign||function(t){for(var e,i=1,a=arguments.length;i<a;i++){e=arguments[i];for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l])}return t},Wi.apply(this,arguments)};function Ud(s,t,e){if(e||arguments.length===2)for(var i=0,a=t.length,l;i<a;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return s.concat(l||Array.prototype.slice.call(t))}var Sn="-ms-",Nc="-moz-",en="-webkit-",eE="comm",Kd="rule",z0="decl",HR="@import",nE="@keyframes",GR="@layer",iE=Math.abs,B0=String.fromCharCode,pg=Object.assign;function VR(s,t){return li(s,0)^45?(((t<<2^li(s,0))<<2^li(s,1))<<2^li(s,2))<<2^li(s,3):0}function rE(s){return s.trim()}function Ia(s,t){return(s=t.exec(s))?s[0]:s}function Te(s,t,e){return s.replace(t,e)}function ud(s,t,e){return s.indexOf(t,e)}function li(s,t){return s.charCodeAt(t)|0}function eu(s,t,e){return s.slice(t,e)}function sa(s){return s.length}function aE(s){return s.length}function bc(s,t){return t.push(s),s}function kR(s,t){return s.map(t).join("")}function aM(s,t){return s.filter(function(e){return!Ia(e,t)})}var Jd=1,nu=1,sE=0,Fr=0,Yn=0,xu="";function $d(s,t,e,i,a,l,c,f){return{value:s,root:t,parent:e,type:i,props:a,children:l,line:Jd,column:nu,length:c,return:"",siblings:f}}function Cs(s,t){return pg($d("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},t)}function Sl(s){for(;s.root;)s=Cs(s.root,{children:[s]});bc(s,s.siblings)}function XR(){return Yn}function WR(){return Yn=Fr>0?li(xu,--Fr):0,nu--,Yn===10&&(nu=1,Jd--),Yn}function Zr(){return Yn=Fr<sE?li(xu,Fr++):0,nu++,Yn===10&&(nu=1,Jd++),Yn}function Co(){return li(xu,Fr)}function cd(){return Fr}function tp(s,t){return eu(xu,s,t)}function mg(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function YR(s){return Jd=nu=1,sE=sa(xu=s),Fr=0,[]}function qR(s){return xu="",s}function x_(s){return rE(tp(Fr-1,_g(s===91?s+2:s===40?s+1:s)))}function jR(s){for(;(Yn=Co())&&Yn<33;)Zr();return mg(s)>2||mg(Yn)>3?"":" "}function ZR(s,t){for(;--t&&Zr()&&!(Yn<48||Yn>102||Yn>57&&Yn<65||Yn>70&&Yn<97););return tp(s,cd()+(t<6&&Co()==32&&Zr()==32))}function _g(s){for(;Zr();)switch(Yn){case s:return Fr;case 34:case 39:s!==34&&s!==39&&_g(Yn);break;case 40:s===41&&_g(s);break;case 92:Zr();break}return Fr}function QR(s,t){for(;Zr()&&s+Yn!==57;)if(s+Yn===84&&Co()===47)break;return"/*"+tp(t,Fr-1)+"*"+B0(s===47?s:Zr())}function KR(s){for(;!mg(Co());)Zr();return tp(s,Fr)}function JR(s){return qR(fd("",null,null,null,[""],s=YR(s),0,[0],s))}function fd(s,t,e,i,a,l,c,f,h){for(var p=0,m=0,g=c,x=0,v=0,E=0,M=1,y=1,S=1,L=0,D="",A=a,P=l,z=i,C=D;y;)switch(E=L,L=Zr()){case 40:if(E!=108&&li(C,g-1)==58){ud(C+=Te(x_(L),"&","&\f"),"&\f",iE(p?f[p-1]:0))!=-1&&(S=-1);break}case 34:case 39:case 91:C+=x_(L);break;case 9:case 10:case 13:case 32:C+=jR(E);break;case 92:C+=ZR(cd()-1,7);continue;case 47:switch(Co()){case 42:case 47:bc($R(QR(Zr(),cd()),t,e,h),h);break;default:C+="/"}break;case 123*M:f[p++]=sa(C)*S;case 125*M:case 59:case 0:switch(L){case 0:case 125:y=0;case 59+m:S==-1&&(C=Te(C,/\f/g,"")),v>0&&sa(C)-g&&bc(v>32?oM(C+";",i,e,g-1,h):oM(Te(C," ","")+";",i,e,g-2,h),h);break;case 59:C+=";";default:if(bc(z=sM(C,t,e,p,m,a,f,D,A=[],P=[],g,l),l),L===123)if(m===0)fd(C,t,z,z,A,l,g,f,P);else switch(x===99&&li(C,3)===110?100:x){case 100:case 108:case 109:case 115:fd(s,z,z,i&&bc(sM(s,z,z,0,0,a,f,D,a,A=[],g,P),P),a,P,g,f,i?A:P);break;default:fd(C,z,z,z,[""],P,0,f,P)}}p=m=v=0,M=S=1,D=C="",g=c;break;case 58:g=1+sa(C),v=E;default:if(M<1){if(L==123)--M;else if(L==125&&M++==0&&WR()==125)continue}switch(C+=B0(L),L*M){case 38:S=m>0?1:(C+="\f",-1);break;case 44:f[p++]=(sa(C)-1)*S,S=1;break;case 64:Co()===45&&(C+=x_(Zr())),x=Co(),m=g=sa(D=C+=KR(cd())),L++;break;case 45:E===45&&sa(C)==2&&(M=0)}}return l}function sM(s,t,e,i,a,l,c,f,h,p,m,g){for(var x=a-1,v=a===0?l:[""],E=aE(v),M=0,y=0,S=0;M<i;++M)for(var L=0,D=eu(s,x+1,x=iE(y=c[M])),A=s;L<E;++L)(A=rE(y>0?v[L]+" "+D:Te(D,/&\f/g,v[L])))&&(h[S++]=A);return $d(s,t,e,a===0?Kd:f,h,p,m,g)}function $R(s,t,e,i){return $d(s,t,e,eE,B0(XR()),eu(s,2,-2),0,i)}function oM(s,t,e,i,a){return $d(s,t,e,z0,eu(s,0,i),eu(s,i+1,-1),i,a)}function oE(s,t,e){switch(VR(s,t)){case 5103:return en+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return en+s+s;case 4789:return Nc+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return en+s+Nc+s+Sn+s+s;case 5936:switch(li(s,t+11)){case 114:return en+s+Sn+Te(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return en+s+Sn+Te(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return en+s+Sn+Te(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return en+s+Sn+s+s;case 6165:return en+s+Sn+"flex-"+s+s;case 5187:return en+s+Te(s,/(\w+).+(:[^]+)/,en+"box-$1$2"+Sn+"flex-$1$2")+s;case 5443:return en+s+Sn+"flex-item-"+Te(s,/flex-|-self/g,"")+(Ia(s,/flex-|baseline/)?"":Sn+"grid-row-"+Te(s,/flex-|-self/g,""))+s;case 4675:return en+s+Sn+"flex-line-pack"+Te(s,/align-content|flex-|-self/g,"")+s;case 5548:return en+s+Sn+Te(s,"shrink","negative")+s;case 5292:return en+s+Sn+Te(s,"basis","preferred-size")+s;case 6060:return en+"box-"+Te(s,"-grow","")+en+s+Sn+Te(s,"grow","positive")+s;case 4554:return en+Te(s,/([^-])(transform)/g,"$1"+en+"$2")+s;case 6187:return Te(Te(Te(s,/(zoom-|grab)/,en+"$1"),/(image-set)/,en+"$1"),s,"")+s;case 5495:case 3959:return Te(s,/(image-set\([^]*)/,en+"$1$`$1");case 4968:return Te(Te(s,/(.+:)(flex-)?(.*)/,en+"box-pack:$3"+Sn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+en+s+s;case 4200:if(!Ia(s,/flex-|baseline/))return Sn+"grid-column-align"+eu(s,t)+s;break;case 2592:case 3360:return Sn+Te(s,"template-","")+s;case 4384:case 3616:return e&&e.some(function(i,a){return t=a,Ia(i.props,/grid-\w+-end/)})?~ud(s+(e=e[t].value),"span",0)?s:Sn+Te(s,"-start","")+s+Sn+"grid-row-span:"+(~ud(e,"span",0)?Ia(e,/\d+/):+Ia(e,/\d+/)-+Ia(s,/\d+/))+";":Sn+Te(s,"-start","")+s;case 4896:case 4128:return e&&e.some(function(i){return Ia(i.props,/grid-\w+-start/)})?s:Sn+Te(Te(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return Te(s,/(.+)-inline(.+)/,en+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sa(s)-1-t>6)switch(li(s,t+1)){case 109:if(li(s,t+4)!==45)break;case 102:return Te(s,/(.+:)(.+)-([^]+)/,"$1"+en+"$2-$3$1"+Nc+(li(s,t+3)==108?"$3":"$2-$3"))+s;case 115:return~ud(s,"stretch",0)?oE(Te(s,"stretch","fill-available"),t,e)+s:s}break;case 5152:case 5920:return Te(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,l,c,f,h,p){return Sn+a+":"+l+p+(c?Sn+a+"-span:"+(f?h:+h-+l)+p:"")+s});case 4949:if(li(s,t+6)===121)return Te(s,":",":"+en)+s;break;case 6444:switch(li(s,li(s,14)===45?18:11)){case 120:return Te(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+en+(li(s,14)===45?"inline-":"")+"box$3$1"+en+"$2$3$1"+Sn+"$2box$3")+s;case 100:return Te(s,":",":"+Sn)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Te(s,"scroll-","scroll-snap-")+s}return s}function Ld(s,t){for(var e="",i=0;i<s.length;i++)e+=t(s[i],i,s,t)||"";return e}function tw(s,t,e,i){switch(s.type){case GR:if(s.children.length)break;case HR:case z0:return s.return=s.return||s.value;case eE:return"";case nE:return s.return=s.value+"{"+Ld(s.children,i)+"}";case Kd:if(!sa(s.value=s.props.join(",")))return""}return sa(e=Ld(s.children,i))?s.return=s.value+"{"+e+"}":""}function ew(s){var t=aE(s);return function(e,i,a,l){for(var c="",f=0;f<t;f++)c+=s[f](e,i,a,l)||"";return c}}function nw(s){return function(t){t.root||(t=t.return)&&s(t)}}function iw(s,t,e,i){if(s.length>-1&&!s.return)switch(s.type){case z0:s.return=oE(s.value,s.length,e);return;case nE:return Ld([Cs(s,{value:Te(s.value,"@","@"+en)})],i);case Kd:if(s.length)return kR(e=s.props,function(a){switch(Ia(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Sl(Cs(s,{props:[Te(a,/:(read-\w+)/,":"+Nc+"$1")]})),Sl(Cs(s,{props:[a]})),pg(s,{props:aM(e,i)});break;case"::placeholder":Sl(Cs(s,{props:[Te(a,/:(plac\w+)/,":"+en+"input-$1")]})),Sl(Cs(s,{props:[Te(a,/:(plac\w+)/,":"+Nc+"$1")]})),Sl(Cs(s,{props:[Te(a,/:(plac\w+)/,Sn+"input-$1")]})),Sl(Cs(s,{props:[a]})),pg(s,{props:aM(e,i)});break}return""})}}var rw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cr={},iu=typeof process<"u"&&cr!==void 0&&(cr.REACT_APP_SC_ATTR||cr.SC_ATTR)||"data-styled",lE="active",uE="data-styled-version",ep="6.1.17",I0=`/*!sc*/
`,Od=typeof window<"u"&&"HTMLElement"in window,aw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&cr!==void 0&&cr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&cr.REACT_APP_SC_DISABLE_SPEEDY!==""?cr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&cr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&cr!==void 0&&cr.SC_DISABLE_SPEEDY!==void 0&&cr.SC_DISABLE_SPEEDY!==""&&cr.SC_DISABLE_SPEEDY!=="false"&&cr.SC_DISABLE_SPEEDY),np=Object.freeze([]),ru=Object.freeze({});function sw(s,t,e){return e===void 0&&(e=ru),s.theme!==e.theme&&s.theme||t||e.theme}var cE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ow=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lw=/(^-|-$)/g;function lM(s){return s.replace(ow,"-").replace(lw,"")}var uw=/(a)(d)/gi,Th=52,uM=function(s){return String.fromCharCode(s+(s>25?39:97))};function gg(s){var t,e="";for(t=Math.abs(s);t>Th;t=t/Th|0)e=uM(t%Th)+e;return(uM(t%Th)+e).replace(uw,"$1-$2")}var y_,fE=5381,Gl=function(s,t){for(var e=t.length;e;)s=33*s^t.charCodeAt(--e);return s},hE=function(s){return Gl(fE,s)};function cw(s){return gg(hE(s)>>>0)}function fw(s){return s.displayName||s.name||"Component"}function S_(s){return typeof s=="string"&&!0}var dE=typeof Symbol=="function"&&Symbol.for,pE=dE?Symbol.for("react.memo"):60115,hw=dE?Symbol.for("react.forward_ref"):60112,dw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mw=((y_={})[hw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},y_[pE]=mE,y_);function cM(s){return("type"in(t=s)&&t.type.$$typeof)===pE?mE:"$$typeof"in s?mw[s.$$typeof]:dw;var t}var _w=Object.defineProperty,gw=Object.getOwnPropertyNames,fM=Object.getOwnPropertySymbols,vw=Object.getOwnPropertyDescriptor,xw=Object.getPrototypeOf,hM=Object.prototype;function _E(s,t,e){if(typeof t!="string"){if(hM){var i=xw(t);i&&i!==hM&&_E(s,i,e)}var a=gw(t);fM&&(a=a.concat(fM(t)));for(var l=cM(s),c=cM(t),f=0;f<a.length;++f){var h=a[f];if(!(h in pw||e&&e[h]||c&&h in c||l&&h in l)){var p=vw(t,h);try{_w(s,h,p)}catch{}}}}return s}function au(s){return typeof s=="function"}function F0(s){return typeof s=="object"&&"styledComponentId"in s}function To(s,t){return s&&t?"".concat(s," ").concat(t):s||t||""}function dM(s,t){if(s.length===0)return"";for(var e=s[0],i=1;i<s.length;i++)e+=s[i];return e}function qc(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function vg(s,t,e){if(e===void 0&&(e=!1),!e&&!qc(s)&&!Array.isArray(s))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)s[i]=vg(s[i],t[i]);else if(qc(t))for(var i in t)s[i]=vg(s[i],t[i]);return s}function H0(s,t){Object.defineProperty(s,"toString",{value:t})}function lf(s){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var yw=function(){function s(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return s.prototype.indexOfGroup=function(t){for(var e=0,i=0;i<t;i++)e+=this.groupSizes[i];return e},s.prototype.insertRules=function(t,e){if(t>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,l=a;t>=l;)if((l<<=1)<0)throw lf(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var c=a;c<l;c++)this.groupSizes[c]=0}for(var f=this.indexOfGroup(t+1),h=(c=0,e.length);c<h;c++)this.tag.insertRule(f,e[c])&&(this.groupSizes[t]++,f++)},s.prototype.clearGroup=function(t){if(t<this.length){var e=this.groupSizes[t],i=this.indexOfGroup(t),a=i+e;this.groupSizes[t]=0;for(var l=i;l<a;l++)this.tag.deleteRule(i)}},s.prototype.getGroup=function(t){var e="";if(t>=this.length||this.groupSizes[t]===0)return e;for(var i=this.groupSizes[t],a=this.indexOfGroup(t),l=a+i,c=a;c<l;c++)e+="".concat(this.tag.getRule(c)).concat(I0);return e},s}(),hd=new Map,Nd=new Map,dd=1,bh=function(s){if(hd.has(s))return hd.get(s);for(;Nd.has(dd);)dd++;var t=dd++;return hd.set(s,t),Nd.set(t,s),t},Sw=function(s,t){dd=t+1,hd.set(s,t),Nd.set(t,s)},Mw="style[".concat(iu,"][").concat(uE,'="').concat(ep,'"]'),Ew=new RegExp("^".concat(iu,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Tw=function(s,t,e){for(var i,a=e.split(","),l=0,c=a.length;l<c;l++)(i=a[l])&&s.registerName(t,i)},bw=function(s,t){for(var e,i=((e=t.textContent)!==null&&e!==void 0?e:"").split(I0),a=[],l=0,c=i.length;l<c;l++){var f=i[l].trim();if(f){var h=f.match(Ew);if(h){var p=0|parseInt(h[1],10),m=h[2];p!==0&&(Sw(m,p),Tw(s,m,h[3]),s.getTag().insertRules(p,a)),a.length=0}else a.push(f)}}},pM=function(s){for(var t=document.querySelectorAll(Mw),e=0,i=t.length;e<i;e++){var a=t[e];a&&a.getAttribute(iu)!==lE&&(bw(s,a),a.parentNode&&a.parentNode.removeChild(a))}};function Aw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gE=function(s){var t=document.head,e=s||t,i=document.createElement("style"),a=function(f){var h=Array.from(f.querySelectorAll("style[".concat(iu,"]")));return h[h.length-1]}(e),l=a!==void 0?a.nextSibling:null;i.setAttribute(iu,lE),i.setAttribute(uE,ep);var c=Aw();return c&&i.setAttribute("nonce",c),e.insertBefore(i,l),i},Rw=function(){function s(t){this.element=gE(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var i=document.styleSheets,a=0,l=i.length;a<l;a++){var c=i[a];if(c.ownerNode===e)return c}throw lf(17)}(this.element),this.length=0}return s.prototype.insertRule=function(t,e){try{return this.sheet.insertRule(e,t),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},s.prototype.getRule=function(t){var e=this.sheet.cssRules[t];return e&&e.cssText?e.cssText:""},s}(),ww=function(){function s(t){this.element=gE(t),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(t,e){if(t<=this.length&&t>=0){var i=document.createTextNode(e);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},s.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},s}(),Cw=function(){function s(t){this.rules=[],this.length=0}return s.prototype.insertRule=function(t,e){return t<=this.length&&(this.rules.splice(t,0,e),this.length++,!0)},s.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},s.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},s}(),mM=Od,Dw={isServer:!Od,useCSSOMInjection:!aw},vE=function(){function s(t,e,i){t===void 0&&(t=ru),e===void 0&&(e={});var a=this;this.options=Wi(Wi({},Dw),t),this.gs=e,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Od&&mM&&(mM=!1,pM(this)),H0(this,function(){return function(l){for(var c=l.getTag(),f=c.length,h="",p=function(g){var x=function(S){return Nd.get(S)}(g);if(x===void 0)return"continue";var v=l.names.get(x),E=c.getGroup(g);if(v===void 0||!v.size||E.length===0)return"continue";var M="".concat(iu,".g").concat(g,'[id="').concat(x,'"]'),y="";v!==void 0&&v.forEach(function(S){S.length>0&&(y+="".concat(S,","))}),h+="".concat(E).concat(M,'{content:"').concat(y,'"}').concat(I0)},m=0;m<f;m++)p(m);return h}(a)})}return s.registerId=function(t){return bh(t)},s.prototype.rehydrate=function(){!this.server&&Od&&pM(this)},s.prototype.reconstructWithOptions=function(t,e){return e===void 0&&(e=!0),new s(Wi(Wi({},this.options),t),this.gs,e&&this.names||void 0)},s.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(t=function(e){var i=e.useCSSOMInjection,a=e.target;return e.isServer?new Cw(a):i?new Rw(a):new ww(a)}(this.options),new yw(t)));var t},s.prototype.hasNameForId=function(t,e){return this.names.has(t)&&this.names.get(t).has(e)},s.prototype.registerName=function(t,e){if(bh(t),this.names.has(t))this.names.get(t).add(e);else{var i=new Set;i.add(e),this.names.set(t,i)}},s.prototype.insertRules=function(t,e,i){this.registerName(t,e),this.getTag().insertRules(bh(t),i)},s.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},s.prototype.clearRules=function(t){this.getTag().clearGroup(bh(t)),this.clearNames(t)},s.prototype.clearTag=function(){this.tag=void 0},s}(),Uw=/&/g,Lw=/^\s*\/\/.*$/gm;function xE(s,t){return s.map(function(e){return e.type==="rule"&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(e.children)&&e.type!=="@keyframes"&&(e.children=xE(e.children,t)),e})}function Ow(s){var t,e,i,a=ru,l=a.options,c=l===void 0?ru:l,f=a.plugins,h=f===void 0?np:f,p=function(x,v,E){return E.startsWith(e)&&E.endsWith(e)&&E.replaceAll(e,"").length>0?".".concat(t):x},m=h.slice();m.push(function(x){x.type===Kd&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(Uw,e).replace(i,p))}),c.prefix&&m.push(iw),m.push(tw);var g=function(x,v,E,M){v===void 0&&(v=""),E===void 0&&(E=""),M===void 0&&(M="&"),t=M,e=v,i=new RegExp("\\".concat(e,"\\b"),"g");var y=x.replace(Lw,""),S=JR(E||v?"".concat(E," ").concat(v," { ").concat(y," }"):y);c.namespace&&(S=xE(S,c.namespace));var L=[];return Ld(S,ew(m.concat(nw(function(D){return L.push(D)})))),L};return g.hash=h.length?h.reduce(function(x,v){return v.name||lf(15),Gl(x,v.name)},fE).toString():"",g}var Nw=new vE,xg=Ow(),yE=tu.createContext({shouldForwardProp:void 0,styleSheet:Nw,stylis:xg});yE.Consumer;tu.createContext(void 0);function _M(){return Ye.useContext(yE)}var Pw=function(){function s(t,e){var i=this;this.inject=function(a,l){l===void 0&&(l=xg);var c=i.name+l.hash;a.hasNameForId(i.id,c)||a.insertRules(i.id,c,l(i.rules,c,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=e,H0(this,function(){throw lf(12,String(i.name))})}return s.prototype.getName=function(t){return t===void 0&&(t=xg),this.name+t.hash},s}(),zw=function(s){return s>="A"&&s<="Z"};function gM(s){for(var t="",e=0;e<s.length;e++){var i=s[e];if(e===1&&i==="-"&&s[0]==="-")return s;zw(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var SE=function(s){return s==null||s===!1||s===""},ME=function(s){var t,e,i=[];for(var a in s){var l=s[a];s.hasOwnProperty(a)&&!SE(l)&&(Array.isArray(l)&&l.isCss||au(l)?i.push("".concat(gM(a),":"),l,";"):qc(l)?i.push.apply(i,Ud(Ud(["".concat(a," {")],ME(l),!1),["}"],!1)):i.push("".concat(gM(a),": ").concat((t=a,(e=l)==null||typeof e=="boolean"||e===""?"":typeof e!="number"||e===0||t in rw||t.startsWith("--")?String(e).trim():"".concat(e,"px")),";")))}return i};function Do(s,t,e,i){if(SE(s))return[];if(F0(s))return[".".concat(s.styledComponentId)];if(au(s)){if(!au(l=s)||l.prototype&&l.prototype.isReactComponent||!t)return[s];var a=s(t);return Do(a,t,e,i)}var l;return s instanceof Pw?e?(s.inject(e,i),[s.getName(i)]):[s]:qc(s)?ME(s):Array.isArray(s)?Array.prototype.concat.apply(np,s.map(function(c){return Do(c,t,e,i)})):[s.toString()]}function Bw(s){for(var t=0;t<s.length;t+=1){var e=s[t];if(au(e)&&!F0(e))return!1}return!0}var Iw=hE(ep),Fw=function(){function s(t,e,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Bw(t),this.componentId=e,this.baseHash=Gl(Iw,e),this.baseStyle=i,vE.registerId(e)}return s.prototype.generateAndInjectStyles=function(t,e,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,e,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&e.hasNameForId(this.componentId,this.staticRulesId))a=To(a,this.staticRulesId);else{var l=dM(Do(this.rules,t,e,i)),c=gg(Gl(this.baseHash,l)>>>0);if(!e.hasNameForId(this.componentId,c)){var f=i(l,".".concat(c),void 0,this.componentId);e.insertRules(this.componentId,c,f)}a=To(a,c),this.staticRulesId=c}else{for(var h=Gl(this.baseHash,i.hash),p="",m=0;m<this.rules.length;m++){var g=this.rules[m];if(typeof g=="string")p+=g;else if(g){var x=dM(Do(g,t,e,i));h=Gl(h,x+m),p+=x}}if(p){var v=gg(h>>>0);e.hasNameForId(this.componentId,v)||e.insertRules(this.componentId,v,i(p,".".concat(v),void 0,this.componentId)),a=To(a,v)}}return a},s}(),EE=tu.createContext(void 0);EE.Consumer;var M_={};function Hw(s,t,e){var i=F0(s),a=s,l=!S_(s),c=t.attrs,f=c===void 0?np:c,h=t.componentId,p=h===void 0?function(A,P){var z=typeof A!="string"?"sc":lM(A);M_[z]=(M_[z]||0)+1;var C="".concat(z,"-").concat(cw(ep+z+M_[z]));return P?"".concat(P,"-").concat(C):C}(t.displayName,t.parentComponentId):h,m=t.displayName,g=m===void 0?function(A){return S_(A)?"styled.".concat(A):"Styled(".concat(fw(A),")")}(s):m,x=t.displayName&&t.componentId?"".concat(lM(t.displayName),"-").concat(t.componentId):t.componentId||p,v=i&&a.attrs?a.attrs.concat(f).filter(Boolean):f,E=t.shouldForwardProp;if(i&&a.shouldForwardProp){var M=a.shouldForwardProp;if(t.shouldForwardProp){var y=t.shouldForwardProp;E=function(A,P){return M(A,P)&&y(A,P)}}else E=M}var S=new Fw(e,x,i?a.componentStyle:void 0);function L(A,P){return function(z,C,F){var w=z.attrs,R=z.componentStyle,H=z.defaultProps,Y=z.foldedComponentIds,tt=z.styledComponentId,lt=z.target,at=tu.useContext(EE),I=_M(),X=z.shouldForwardProp||I.shouldForwardProp,W=sw(C,at,H)||ru,ht=function(dt,_t,Tt){for(var At,qt=Wi(Wi({},_t),{className:void 0,theme:Tt}),Qt=0;Qt<dt.length;Qt+=1){var _e=au(At=dt[Qt])?At(qt):At;for(var oe in _e)qt[oe]=oe==="className"?To(qt[oe],_e[oe]):oe==="style"?Wi(Wi({},qt[oe]),_e[oe]):_e[oe]}return _t.className&&(qt.className=To(qt.className,_t.className)),qt}(w,C,W),b=ht.as||lt,Q={};for(var pt in ht)ht[pt]===void 0||pt[0]==="$"||pt==="as"||pt==="theme"&&ht.theme===W||(pt==="forwardedAs"?Q.as=ht.forwardedAs:X&&!X(pt,b)||(Q[pt]=ht[pt]));var Mt=function(dt,_t){var Tt=_M(),At=dt.generateAndInjectStyles(_t,Tt.styleSheet,Tt.stylis);return At}(R,ht),Z=To(Y,tt);return Mt&&(Z+=" "+Mt),ht.className&&(Z+=" "+ht.className),Q[S_(b)&&!cE.has(b)?"class":"className"]=Z,F&&(Q.ref=F),Ye.createElement(b,Q)}(D,A,P)}L.displayName=g;var D=tu.forwardRef(L);return D.attrs=v,D.componentStyle=S,D.displayName=g,D.shouldForwardProp=E,D.foldedComponentIds=i?To(a.foldedComponentIds,a.styledComponentId):"",D.styledComponentId=x,D.target=i?a.target:s,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=i?function(P){for(var z=[],C=1;C<arguments.length;C++)z[C-1]=arguments[C];for(var F=0,w=z;F<w.length;F++)vg(P,w[F],!0);return P}({},a.defaultProps,A):A}}),H0(D,function(){return".".concat(D.styledComponentId)}),l&&_E(D,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function vM(s,t){for(var e=[s[0]],i=0,a=t.length;i<a;i+=1)e.push(t[i],s[i+1]);return e}var xM=function(s){return Object.assign(s,{isCss:!0})};function Gw(s){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];if(au(s)||qc(s))return xM(Do(vM(np,Ud([s],t,!0))));var i=s;return t.length===0&&i.length===1&&typeof i[0]=="string"?Do(i):xM(Do(vM(i,t)))}function yg(s,t,e){if(e===void 0&&(e=ru),!t)throw lf(1,t);var i=function(a){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return s(t,e,Gw.apply(void 0,Ud([a],l,!1)))};return i.attrs=function(a){return yg(s,t,Wi(Wi({},e),{attrs:Array.prototype.concat(e.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return yg(s,t,Wi(Wi({},e),a))},i}var TE=function(s){return yg(Hw,s)},Re=TE;cE.forEach(function(s){Re[s]=TE(s)});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const G0="175",Vw=0,yM=1,kw=2,bE=1,Xw=2,Ba=3,Gs=0,qi=1,Ga=2,Ya=0,Yl=1,Sg=2,SM=3,MM=4,Ww=5,Mo=100,Yw=101,qw=102,jw=103,Zw=104,Qw=200,Kw=201,Jw=202,$w=203,Mg=204,Eg=205,tC=206,eC=207,nC=208,iC=209,rC=210,aC=211,sC=212,oC=213,lC=214,Tg=0,bg=1,Ag=2,su=3,Rg=4,wg=5,Cg=6,Dg=7,AE=0,uC=1,cC=2,Bs=0,fC=1,hC=2,dC=3,pC=4,mC=5,_C=6,gC=7,RE=300,ou=301,lu=302,Ug=303,Lg=304,ip=306,Og=1e3,bo=1001,Ng=1002,Qr=1003,vC=1004,Ah=1005,ua=1006,E_=1007,Ao=1008,Qa=1009,wE=1010,CE=1011,jc=1012,V0=1013,Io=1014,ka=1015,qa=1016,k0=1017,X0=1018,Zc=1020,DE=35902,UE=1021,LE=1022,jr=1023,OE=1024,NE=1025,Qc=1026,Kc=1027,PE=1028,W0=1029,zE=1030,Y0=1031,q0=1033,pd=33776,md=33777,_d=33778,gd=33779,Pg=35840,zg=35841,Bg=35842,Ig=35843,Fg=36196,Hg=37492,Gg=37496,Vg=37808,kg=37809,Xg=37810,Wg=37811,Yg=37812,qg=37813,jg=37814,Zg=37815,Qg=37816,Kg=37817,Jg=37818,$g=37819,t0=37820,e0=37821,vd=36492,n0=36494,i0=36495,BE=36283,r0=36284,a0=36285,s0=36286,xC=3200,yC=3201,SC=0,MC=1,Us="",Lr="srgb",uu="srgb-linear",Pd="linear",fn="srgb",Ml=7680,EM=519,EC=512,TC=513,bC=514,IE=515,AC=516,RC=517,wC=518,CC=519,TM=35044,bM="300 es",Xa=2e3,zd=2001;class yu{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const l=a.indexOf(e);l!==-1&&a.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,t);t.target=null}}}const yi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],T_=Math.PI/180,o0=180/Math.PI;function uf(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yi[s&255]+yi[s>>8&255]+yi[s>>16&255]+yi[s>>24&255]+"-"+yi[t&255]+yi[t>>8&255]+"-"+yi[t>>16&15|64]+yi[t>>24&255]+"-"+yi[e&63|128]+yi[e>>8&255]+"-"+yi[e>>16&255]+yi[e>>24&255]+yi[i&255]+yi[i>>8&255]+yi[i>>16&255]+yi[i>>24&255]).toLowerCase()}function Ge(s,t,e){return Math.max(t,Math.min(e,s))}function DC(s,t){return(s%t+t)%t}function b_(s,t,e){return(1-e)*s+e*t}function gc(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ki(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Le{constructor(t=0,e=0){Le.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ge(this.x,t.x,e.x),this.y=Ge(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ge(this.x,t,e),this.y=Ge(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),l=this.x-t.x,c=this.y-t.y;return this.x=l*i-c*a+t.x,this.y=l*a+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Se{constructor(t,e,i,a,l,c,f,h,p){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,l,c,f,h,p)}set(t,e,i,a,l,c,f,h,p){const m=this.elements;return m[0]=t,m[1]=a,m[2]=f,m[3]=e,m[4]=l,m[5]=h,m[6]=i,m[7]=c,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,c=i[0],f=i[3],h=i[6],p=i[1],m=i[4],g=i[7],x=i[2],v=i[5],E=i[8],M=a[0],y=a[3],S=a[6],L=a[1],D=a[4],A=a[7],P=a[2],z=a[5],C=a[8];return l[0]=c*M+f*L+h*P,l[3]=c*y+f*D+h*z,l[6]=c*S+f*A+h*C,l[1]=p*M+m*L+g*P,l[4]=p*y+m*D+g*z,l[7]=p*S+m*A+g*C,l[2]=x*M+v*L+E*P,l[5]=x*y+v*D+E*z,l[8]=x*S+v*A+E*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],f=t[5],h=t[6],p=t[7],m=t[8];return e*c*m-e*f*p-i*l*m+i*f*h+a*l*p-a*c*h}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],f=t[5],h=t[6],p=t[7],m=t[8],g=m*c-f*p,x=f*h-m*l,v=p*l-c*h,E=e*g+i*x+a*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return t[0]=g*M,t[1]=(a*p-m*i)*M,t[2]=(f*i-a*c)*M,t[3]=x*M,t[4]=(m*e-a*h)*M,t[5]=(a*l-f*e)*M,t[6]=v*M,t[7]=(i*h-p*e)*M,t[8]=(c*e-i*l)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(i*h,i*p,-i*(h*c+p*f)+c+t,-a*p,a*h,-a*(-p*c+h*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(A_.makeScale(t,e)),this}rotate(t){return this.premultiply(A_.makeRotation(-t)),this}translate(t,e){return this.premultiply(A_.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const A_=new Se;function FE(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Bd(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function UC(){const s=Bd("canvas");return s.style.display="block",s}const AM={};function xd(s){s in AM||(AM[s]=!0,console.warn(s))}function LC(s,t,e){return new Promise(function(i,a){function l(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:i()}}setTimeout(l,e)})}function OC(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function NC(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const RM=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wM=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PC(){const s={enabled:!0,workingColorSpace:uu,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===fn&&(a.r=ja(a.r),a.g=ja(a.g),a.b=ja(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===fn&&(a.r=ql(a.r),a.g=ql(a.g),a.b=ql(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Us?Pd:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[uu]:{primaries:t,whitePoint:i,transfer:Pd,toXYZ:RM,fromXYZ:wM,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Lr},outputColorSpaceConfig:{drawingBufferColorSpace:Lr}},[Lr]:{primaries:t,whitePoint:i,transfer:fn,toXYZ:RM,fromXYZ:wM,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Lr}}}),s}const Je=PC();function ja(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ql(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let El;class zC{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{El===void 0&&(El=Bd("canvas")),El.width=t.width,El.height=t.height;const a=El.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=El}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bd("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=ja(l[c]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ja(e[i]/255)*255):e[i]=ja(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let BC=0;class j0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BC++}),this.uuid=uf(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(R_(a[c].image)):l.push(R_(a[c]))}else l=R_(a);i.url=l}return e||(t.images[this.uuid]=i),i}}function R_(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zC.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let IC=0;class ji extends yu{constructor(t=ji.DEFAULT_IMAGE,e=ji.DEFAULT_MAPPING,i=bo,a=bo,l=ua,c=Ao,f=jr,h=Qa,p=ji.DEFAULT_ANISOTROPY,m=Us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:IC++}),this.uuid=uf(),this.name="",this.source=new j0(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==RE)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Og:t.x=t.x-Math.floor(t.x);break;case bo:t.x=t.x<0?0:1;break;case Ng:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Og:t.y=t.y-Math.floor(t.y);break;case bo:t.y=t.y<0?0:1;break;case Ng:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ji.DEFAULT_IMAGE=null;ji.DEFAULT_MAPPING=RE;ji.DEFAULT_ANISOTROPY=1;class Bn{constructor(t=0,e=0,i=0,a=1){Bn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*a+c[12]*l,this.y=c[1]*e+c[5]*i+c[9]*a+c[13]*l,this.z=c[2]*e+c[6]*i+c[10]*a+c[14]*l,this.w=c[3]*e+c[7]*i+c[11]*a+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,l;const h=t.elements,p=h[0],m=h[4],g=h[8],x=h[1],v=h[5],E=h[9],M=h[2],y=h[6],S=h[10];if(Math.abs(m-x)<.01&&Math.abs(g-M)<.01&&Math.abs(E-y)<.01){if(Math.abs(m+x)<.1&&Math.abs(g+M)<.1&&Math.abs(E+y)<.1&&Math.abs(p+v+S-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(p+1)/2,A=(v+1)/2,P=(S+1)/2,z=(m+x)/4,C=(g+M)/4,F=(E+y)/4;return D>A&&D>P?D<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(D),a=z/i,l=C/i):A>P?A<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(A),i=z/a,l=F/a):P<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(P),i=C/l,a=F/l),this.set(i,a,l,e),this}let L=Math.sqrt((y-E)*(y-E)+(g-M)*(g-M)+(x-m)*(x-m));return Math.abs(L)<.001&&(L=1),this.x=(y-E)/L,this.y=(g-M)/L,this.z=(x-m)/L,this.w=Math.acos((p+v+S-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ge(this.x,t.x,e.x),this.y=Ge(this.y,t.y,e.y),this.z=Ge(this.z,t.z,e.z),this.w=Ge(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ge(this.x,t,e),this.y=Ge(this.y,t,e),this.z=Ge(this.z,t,e),this.w=Ge(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FC extends yu{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Bn(0,0,t,e),this.scissorTest=!1,this.viewport=new Bn(0,0,t,e);const a={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ua,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const l=new ji(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);l.flipY=!1,l.generateMipmaps=i.generateMipmaps,l.internalFormat=i.internalFormat,this.textures=[];const c=i.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const a=Object.assign({},t.textures[e].image);this.textures[e].source=new j0(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends FC{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class HE extends ji{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=Qr,this.minFilter=Qr,this.wrapR=bo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class HC extends ji{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=Qr,this.minFilter=Qr,this.wrapR=bo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cf{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,l,c,f){let h=i[a+0],p=i[a+1],m=i[a+2],g=i[a+3];const x=l[c+0],v=l[c+1],E=l[c+2],M=l[c+3];if(f===0){t[e+0]=h,t[e+1]=p,t[e+2]=m,t[e+3]=g;return}if(f===1){t[e+0]=x,t[e+1]=v,t[e+2]=E,t[e+3]=M;return}if(g!==M||h!==x||p!==v||m!==E){let y=1-f;const S=h*x+p*v+m*E+g*M,L=S>=0?1:-1,D=1-S*S;if(D>Number.EPSILON){const P=Math.sqrt(D),z=Math.atan2(P,S*L);y=Math.sin(y*z)/P,f=Math.sin(f*z)/P}const A=f*L;if(h=h*y+x*A,p=p*y+v*A,m=m*y+E*A,g=g*y+M*A,y===1-f){const P=1/Math.sqrt(h*h+p*p+m*m+g*g);h*=P,p*=P,m*=P,g*=P}}t[e]=h,t[e+1]=p,t[e+2]=m,t[e+3]=g}static multiplyQuaternionsFlat(t,e,i,a,l,c){const f=i[a],h=i[a+1],p=i[a+2],m=i[a+3],g=l[c],x=l[c+1],v=l[c+2],E=l[c+3];return t[e]=f*E+m*g+h*v-p*x,t[e+1]=h*E+m*x+p*g-f*v,t[e+2]=p*E+m*v+f*x-h*g,t[e+3]=m*E-f*g-h*x-p*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,a=t._y,l=t._z,c=t._order,f=Math.cos,h=Math.sin,p=f(i/2),m=f(a/2),g=f(l/2),x=h(i/2),v=h(a/2),E=h(l/2);switch(c){case"XYZ":this._x=x*m*g+p*v*E,this._y=p*v*g-x*m*E,this._z=p*m*E+x*v*g,this._w=p*m*g-x*v*E;break;case"YXZ":this._x=x*m*g+p*v*E,this._y=p*v*g-x*m*E,this._z=p*m*E-x*v*g,this._w=p*m*g+x*v*E;break;case"ZXY":this._x=x*m*g-p*v*E,this._y=p*v*g+x*m*E,this._z=p*m*E+x*v*g,this._w=p*m*g-x*v*E;break;case"ZYX":this._x=x*m*g-p*v*E,this._y=p*v*g+x*m*E,this._z=p*m*E-x*v*g,this._w=p*m*g+x*v*E;break;case"YZX":this._x=x*m*g+p*v*E,this._y=p*v*g+x*m*E,this._z=p*m*E-x*v*g,this._w=p*m*g-x*v*E;break;case"XZY":this._x=x*m*g-p*v*E,this._y=p*v*g-x*m*E,this._z=p*m*E+x*v*g,this._w=p*m*g+x*v*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],l=e[8],c=e[1],f=e[5],h=e[9],p=e[2],m=e[6],g=e[10],x=i+f+g;if(x>0){const v=.5/Math.sqrt(x+1);this._w=.25/v,this._x=(m-h)*v,this._y=(l-p)*v,this._z=(c-a)*v}else if(i>f&&i>g){const v=2*Math.sqrt(1+i-f-g);this._w=(m-h)/v,this._x=.25*v,this._y=(a+c)/v,this._z=(l+p)/v}else if(f>g){const v=2*Math.sqrt(1+f-i-g);this._w=(l-p)/v,this._x=(a+c)/v,this._y=.25*v,this._z=(h+m)/v}else{const v=2*Math.sqrt(1+g-i-f);this._w=(c-a)/v,this._x=(l+p)/v,this._y=(h+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,l=t._z,c=t._w,f=e._x,h=e._y,p=e._z,m=e._w;return this._x=i*m+c*f+a*p-l*h,this._y=a*m+c*h+l*f-i*p,this._z=l*m+c*p+i*h-a*f,this._w=c*m-i*f-a*h-l*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,a=this._y,l=this._z,c=this._w;let f=c*t._w+i*t._x+a*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=c,this._x=i,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const v=1-e;return this._w=v*c+e*this._w,this._x=v*i+e*this._x,this._y=v*a+e*this._y,this._z=v*l+e*this._z,this.normalize(),this}const p=Math.sqrt(h),m=Math.atan2(p,f),g=Math.sin((1-e)*m)/p,x=Math.sin(e*m)/p;return this._w=c*g+this._w*x,this._x=i*g+this._x*x,this._y=a*g+this._y*x,this._z=l*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(t=0,e=0,i=0){ct.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(CM.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(CM.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*a,this.y=l[1]*e+l[4]*i+l[7]*a,this.z=l[2]*e+l[5]*i+l[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=t.elements,c=1/(l[3]*e+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*a+l[12])*c,this.y=(l[1]*e+l[5]*i+l[9]*a+l[13])*c,this.z=(l[2]*e+l[6]*i+l[10]*a+l[14])*c,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,l=t.x,c=t.y,f=t.z,h=t.w,p=2*(c*a-f*i),m=2*(f*e-l*a),g=2*(l*i-c*e);return this.x=e+h*p+c*g-f*m,this.y=i+h*m+f*p-l*g,this.z=a+h*g+l*m-c*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*a,this.y=l[1]*e+l[5]*i+l[9]*a,this.z=l[2]*e+l[6]*i+l[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ge(this.x,t.x,e.x),this.y=Ge(this.y,t.y,e.y),this.z=Ge(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ge(this.x,t,e),this.y=Ge(this.y,t,e),this.z=Ge(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,l=t.z,c=e.x,f=e.y,h=e.z;return this.x=a*h-l*f,this.y=l*c-i*h,this.z=i*f-a*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return w_.copy(this).projectOnVector(t),this.sub(w_)}reflect(t){return this.sub(w_.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const w_=new ct,CM=new cf;class ff{constructor(t=new ct(1/0,1/0,1/0),e=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(kr.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(kr.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=kr.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const l=i.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,kr):kr.fromBufferAttribute(l,c),kr.applyMatrix4(t.matrixWorld),this.expandByPoint(kr);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rh.copy(i.boundingBox)),Rh.applyMatrix4(t.matrixWorld),this.union(Rh)}const a=t.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,kr),kr.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vc),wh.subVectors(this.max,vc),Tl.subVectors(t.a,vc),bl.subVectors(t.b,vc),Al.subVectors(t.c,vc),Es.subVectors(bl,Tl),Ts.subVectors(Al,bl),lo.subVectors(Tl,Al);let e=[0,-Es.z,Es.y,0,-Ts.z,Ts.y,0,-lo.z,lo.y,Es.z,0,-Es.x,Ts.z,0,-Ts.x,lo.z,0,-lo.x,-Es.y,Es.x,0,-Ts.y,Ts.x,0,-lo.y,lo.x,0];return!C_(e,Tl,bl,Al,wh)||(e=[1,0,0,0,1,0,0,0,1],!C_(e,Tl,bl,Al,wh))?!1:(Ch.crossVectors(Es,Ts),e=[Ch.x,Ch.y,Ch.z],C_(e,Tl,bl,Al,wh))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,kr).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(kr).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(La),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const La=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],kr=new ct,Rh=new ff,Tl=new ct,bl=new ct,Al=new ct,Es=new ct,Ts=new ct,lo=new ct,vc=new ct,wh=new ct,Ch=new ct,uo=new ct;function C_(s,t,e,i,a){for(let l=0,c=s.length-3;l<=c;l+=3){uo.fromArray(s,l);const f=a.x*Math.abs(uo.x)+a.y*Math.abs(uo.y)+a.z*Math.abs(uo.z),h=t.dot(uo),p=e.dot(uo),m=i.dot(uo);if(Math.max(-Math.max(h,p,m),Math.min(h,p,m))>f)return!1}return!0}const GC=new ff,xc=new ct,D_=new ct;class rp{constructor(t=new ct,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):GC.setFromPoints(t).getCenter(i);let a=0;for(let l=0,c=t.length;l<c;l++)a=Math.max(a,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xc.subVectors(t,this.center);const e=xc.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(xc,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(D_.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xc.copy(t.center).add(D_)),this.expandByPoint(xc.copy(t.center).sub(D_))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oa=new ct,U_=new ct,Dh=new ct,bs=new ct,L_=new ct,Uh=new ct,O_=new ct;class GE{constructor(t=new ct,e=new ct(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Oa)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Oa.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Oa.copy(this.origin).addScaledVector(this.direction,e),Oa.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){U_.copy(t).add(e).multiplyScalar(.5),Dh.copy(e).sub(t).normalize(),bs.copy(this.origin).sub(U_);const l=t.distanceTo(e)*.5,c=-this.direction.dot(Dh),f=bs.dot(this.direction),h=-bs.dot(Dh),p=bs.lengthSq(),m=Math.abs(1-c*c);let g,x,v,E;if(m>0)if(g=c*h-f,x=c*f-h,E=l*m,g>=0)if(x>=-E)if(x<=E){const M=1/m;g*=M,x*=M,v=g*(g+c*x+2*f)+x*(c*g+x+2*h)+p}else x=l,g=Math.max(0,-(c*x+f)),v=-g*g+x*(x+2*h)+p;else x=-l,g=Math.max(0,-(c*x+f)),v=-g*g+x*(x+2*h)+p;else x<=-E?(g=Math.max(0,-(-c*l+f)),x=g>0?-l:Math.min(Math.max(-l,-h),l),v=-g*g+x*(x+2*h)+p):x<=E?(g=0,x=Math.min(Math.max(-l,-h),l),v=x*(x+2*h)+p):(g=Math.max(0,-(c*l+f)),x=g>0?l:Math.min(Math.max(-l,-h),l),v=-g*g+x*(x+2*h)+p);else x=c>0?-l:l,g=Math.max(0,-(c*x+f)),v=-g*g+x*(x+2*h)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(U_).addScaledVector(Dh,x),v}intersectSphere(t,e){Oa.subVectors(t.center,this.origin);const i=Oa.dot(this.direction),a=Oa.dot(Oa)-i*i,l=t.radius*t.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=i-c,h=i+c;return h<0?null:f<0?this.at(h,e):this.at(f,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,l,c,f,h;const p=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(i=(t.min.x-x.x)*p,a=(t.max.x-x.x)*p):(i=(t.max.x-x.x)*p,a=(t.min.x-x.x)*p),m>=0?(l=(t.min.y-x.y)*m,c=(t.max.y-x.y)*m):(l=(t.max.y-x.y)*m,c=(t.min.y-x.y)*m),i>c||l>a||((l>i||isNaN(i))&&(i=l),(c<a||isNaN(a))&&(a=c),g>=0?(f=(t.min.z-x.z)*g,h=(t.max.z-x.z)*g):(f=(t.max.z-x.z)*g,h=(t.min.z-x.z)*g),i>h||f>a)||((f>i||i!==i)&&(i=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,Oa)!==null}intersectTriangle(t,e,i,a,l){L_.subVectors(e,t),Uh.subVectors(i,t),O_.crossVectors(L_,Uh);let c=this.direction.dot(O_),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;bs.subVectors(this.origin,t);const h=f*this.direction.dot(Uh.crossVectors(bs,Uh));if(h<0)return null;const p=f*this.direction.dot(L_.cross(bs));if(p<0||h+p>c)return null;const m=-f*bs.dot(O_);return m<0?null:this.at(m/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fn{constructor(t,e,i,a,l,c,f,h,p,m,g,x,v,E,M,y){Fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,l,c,f,h,p,m,g,x,v,E,M,y)}set(t,e,i,a,l,c,f,h,p,m,g,x,v,E,M,y){const S=this.elements;return S[0]=t,S[4]=e,S[8]=i,S[12]=a,S[1]=l,S[5]=c,S[9]=f,S[13]=h,S[2]=p,S[6]=m,S[10]=g,S[14]=x,S[3]=v,S[7]=E,S[11]=M,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fn().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,a=1/Rl.setFromMatrixColumn(t,0).length(),l=1/Rl.setFromMatrixColumn(t,1).length(),c=1/Rl.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,l=t.z,c=Math.cos(i),f=Math.sin(i),h=Math.cos(a),p=Math.sin(a),m=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const x=c*m,v=c*g,E=f*m,M=f*g;e[0]=h*m,e[4]=-h*g,e[8]=p,e[1]=v+E*p,e[5]=x-M*p,e[9]=-f*h,e[2]=M-x*p,e[6]=E+v*p,e[10]=c*h}else if(t.order==="YXZ"){const x=h*m,v=h*g,E=p*m,M=p*g;e[0]=x+M*f,e[4]=E*f-v,e[8]=c*p,e[1]=c*g,e[5]=c*m,e[9]=-f,e[2]=v*f-E,e[6]=M+x*f,e[10]=c*h}else if(t.order==="ZXY"){const x=h*m,v=h*g,E=p*m,M=p*g;e[0]=x-M*f,e[4]=-c*g,e[8]=E+v*f,e[1]=v+E*f,e[5]=c*m,e[9]=M-x*f,e[2]=-c*p,e[6]=f,e[10]=c*h}else if(t.order==="ZYX"){const x=c*m,v=c*g,E=f*m,M=f*g;e[0]=h*m,e[4]=E*p-v,e[8]=x*p+M,e[1]=h*g,e[5]=M*p+x,e[9]=v*p-E,e[2]=-p,e[6]=f*h,e[10]=c*h}else if(t.order==="YZX"){const x=c*h,v=c*p,E=f*h,M=f*p;e[0]=h*m,e[4]=M-x*g,e[8]=E*g+v,e[1]=g,e[5]=c*m,e[9]=-f*m,e[2]=-p*m,e[6]=v*g+E,e[10]=x-M*g}else if(t.order==="XZY"){const x=c*h,v=c*p,E=f*h,M=f*p;e[0]=h*m,e[4]=-g,e[8]=p*m,e[1]=x*g+M,e[5]=c*m,e[9]=v*g-E,e[2]=E*g-v,e[6]=f*m,e[10]=M*g+x}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(VC,t,kC)}lookAt(t,e,i){const a=this.elements;return lr.subVectors(t,e),lr.lengthSq()===0&&(lr.z=1),lr.normalize(),As.crossVectors(i,lr),As.lengthSq()===0&&(Math.abs(i.z)===1?lr.x+=1e-4:lr.z+=1e-4,lr.normalize(),As.crossVectors(i,lr)),As.normalize(),Lh.crossVectors(lr,As),a[0]=As.x,a[4]=Lh.x,a[8]=lr.x,a[1]=As.y,a[5]=Lh.y,a[9]=lr.y,a[2]=As.z,a[6]=Lh.z,a[10]=lr.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,c=i[0],f=i[4],h=i[8],p=i[12],m=i[1],g=i[5],x=i[9],v=i[13],E=i[2],M=i[6],y=i[10],S=i[14],L=i[3],D=i[7],A=i[11],P=i[15],z=a[0],C=a[4],F=a[8],w=a[12],R=a[1],H=a[5],Y=a[9],tt=a[13],lt=a[2],at=a[6],I=a[10],X=a[14],W=a[3],ht=a[7],b=a[11],Q=a[15];return l[0]=c*z+f*R+h*lt+p*W,l[4]=c*C+f*H+h*at+p*ht,l[8]=c*F+f*Y+h*I+p*b,l[12]=c*w+f*tt+h*X+p*Q,l[1]=m*z+g*R+x*lt+v*W,l[5]=m*C+g*H+x*at+v*ht,l[9]=m*F+g*Y+x*I+v*b,l[13]=m*w+g*tt+x*X+v*Q,l[2]=E*z+M*R+y*lt+S*W,l[6]=E*C+M*H+y*at+S*ht,l[10]=E*F+M*Y+y*I+S*b,l[14]=E*w+M*tt+y*X+S*Q,l[3]=L*z+D*R+A*lt+P*W,l[7]=L*C+D*H+A*at+P*ht,l[11]=L*F+D*Y+A*I+P*b,l[15]=L*w+D*tt+A*X+P*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],l=t[12],c=t[1],f=t[5],h=t[9],p=t[13],m=t[2],g=t[6],x=t[10],v=t[14],E=t[3],M=t[7],y=t[11],S=t[15];return E*(+l*h*g-a*p*g-l*f*x+i*p*x+a*f*v-i*h*v)+M*(+e*h*v-e*p*x+l*c*x-a*c*v+a*p*m-l*h*m)+y*(+e*p*g-e*f*v-l*c*g+i*c*v+l*f*m-i*p*m)+S*(-a*f*m-e*h*g+e*f*x+a*c*g-i*c*x+i*h*m)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],f=t[5],h=t[6],p=t[7],m=t[8],g=t[9],x=t[10],v=t[11],E=t[12],M=t[13],y=t[14],S=t[15],L=g*y*p-M*x*p+M*h*v-f*y*v-g*h*S+f*x*S,D=E*x*p-m*y*p-E*h*v+c*y*v+m*h*S-c*x*S,A=m*M*p-E*g*p+E*f*v-c*M*v-m*f*S+c*g*S,P=E*g*h-m*M*h-E*f*x+c*M*x+m*f*y-c*g*y,z=e*L+i*D+a*A+l*P;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/z;return t[0]=L*C,t[1]=(M*x*l-g*y*l-M*a*v+i*y*v+g*a*S-i*x*S)*C,t[2]=(f*y*l-M*h*l+M*a*p-i*y*p-f*a*S+i*h*S)*C,t[3]=(g*h*l-f*x*l-g*a*p+i*x*p+f*a*v-i*h*v)*C,t[4]=D*C,t[5]=(m*y*l-E*x*l+E*a*v-e*y*v-m*a*S+e*x*S)*C,t[6]=(E*h*l-c*y*l-E*a*p+e*y*p+c*a*S-e*h*S)*C,t[7]=(c*x*l-m*h*l+m*a*p-e*x*p-c*a*v+e*h*v)*C,t[8]=A*C,t[9]=(E*g*l-m*M*l-E*i*v+e*M*v+m*i*S-e*g*S)*C,t[10]=(c*M*l-E*f*l+E*i*p-e*M*p-c*i*S+e*f*S)*C,t[11]=(m*f*l-c*g*l-m*i*p+e*g*p+c*i*v-e*f*v)*C,t[12]=P*C,t[13]=(m*M*a-E*g*a+E*i*x-e*M*x-m*i*y+e*g*y)*C,t[14]=(E*f*a-c*M*a-E*i*h+e*M*h+c*i*y-e*f*y)*C,t[15]=(c*g*a-m*f*a+m*i*h-e*g*h-c*i*x+e*f*x)*C,this}scale(t){const e=this.elements,i=t.x,a=t.y,l=t.z;return e[0]*=i,e[4]*=a,e[8]*=l,e[1]*=i,e[5]*=a,e[9]*=l,e[2]*=i,e[6]*=a,e[10]*=l,e[3]*=i,e[7]*=a,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),l=1-i,c=t.x,f=t.y,h=t.z,p=l*c,m=l*f;return this.set(p*c+i,p*f-a*h,p*h+a*f,0,p*f+a*h,m*f+i,m*h-a*c,0,p*h-a*f,m*h+a*c,l*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,l,c){return this.set(1,i,l,0,t,1,c,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,l=e._x,c=e._y,f=e._z,h=e._w,p=l+l,m=c+c,g=f+f,x=l*p,v=l*m,E=l*g,M=c*m,y=c*g,S=f*g,L=h*p,D=h*m,A=h*g,P=i.x,z=i.y,C=i.z;return a[0]=(1-(M+S))*P,a[1]=(v+A)*P,a[2]=(E-D)*P,a[3]=0,a[4]=(v-A)*z,a[5]=(1-(x+S))*z,a[6]=(y+L)*z,a[7]=0,a[8]=(E+D)*C,a[9]=(y-L)*C,a[10]=(1-(x+M))*C,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;let l=Rl.set(a[0],a[1],a[2]).length();const c=Rl.set(a[4],a[5],a[6]).length(),f=Rl.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),t.x=a[12],t.y=a[13],t.z=a[14],Xr.copy(this);const p=1/l,m=1/c,g=1/f;return Xr.elements[0]*=p,Xr.elements[1]*=p,Xr.elements[2]*=p,Xr.elements[4]*=m,Xr.elements[5]*=m,Xr.elements[6]*=m,Xr.elements[8]*=g,Xr.elements[9]*=g,Xr.elements[10]*=g,e.setFromRotationMatrix(Xr),i.x=l,i.y=c,i.z=f,this}makePerspective(t,e,i,a,l,c,f=Xa){const h=this.elements,p=2*l/(e-t),m=2*l/(i-a),g=(e+t)/(e-t),x=(i+a)/(i-a);let v,E;if(f===Xa)v=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(f===zd)v=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=v,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,a,l,c,f=Xa){const h=this.elements,p=1/(e-t),m=1/(i-a),g=1/(c-l),x=(e+t)*p,v=(i+a)*m;let E,M;if(f===Xa)E=(c+l)*g,M=-2*g;else if(f===zd)E=l*g,M=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-v,h[2]=0,h[6]=0,h[10]=M,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Rl=new ct,Xr=new Fn,VC=new ct(0,0,0),kC=new ct(1,1,1),As=new ct,Lh=new ct,lr=new ct,DM=new Fn,UM=new cf;class Ka{constructor(t=0,e=0,i=0,a=Ka.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],m=a[9],g=a[2],x=a[6],v=a[10];switch(e){case"XYZ":this._y=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,v),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,v),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Ge(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,v),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,v));break;case"XZY":this._z=Math.asin(-Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return DM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(DM,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return UM.setFromEuler(this),this.setFromQuaternion(UM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ka.DEFAULT_ORDER="XYZ";class VE{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let XC=0;const LM=new ct,wl=new cf,Na=new Fn,Oh=new ct,yc=new ct,WC=new ct,YC=new cf,OM=new ct(1,0,0),NM=new ct(0,1,0),PM=new ct(0,0,1),zM={type:"added"},qC={type:"removed"},Cl={type:"childadded",child:null},N_={type:"childremoved",child:null};class Zi extends yu{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XC++}),this.uuid=uf(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zi.DEFAULT_UP.clone();const t=new ct,e=new Ka,i=new cf,a=new ct(1,1,1);function l(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Fn},normalMatrix:{value:new Se}}),this.matrix=new Fn,this.matrixWorld=new Fn,this.matrixAutoUpdate=Zi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new VE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wl.setFromAxisAngle(t,e),this.quaternion.multiply(wl),this}rotateOnWorldAxis(t,e){return wl.setFromAxisAngle(t,e),this.quaternion.premultiply(wl),this}rotateX(t){return this.rotateOnAxis(OM,t)}rotateY(t){return this.rotateOnAxis(NM,t)}rotateZ(t){return this.rotateOnAxis(PM,t)}translateOnAxis(t,e){return LM.copy(t).applyQuaternion(this.quaternion),this.position.add(LM.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(OM,t)}translateY(t){return this.translateOnAxis(NM,t)}translateZ(t){return this.translateOnAxis(PM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Na.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Oh.copy(t):Oh.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),yc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Na.lookAt(yc,Oh,this.up):Na.lookAt(Oh,yc,this.up),this.quaternion.setFromRotationMatrix(Na),a&&(Na.extractRotation(a.matrixWorld),wl.setFromRotationMatrix(Na),this.quaternion.premultiply(wl.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zM),Cl.child=t,this.dispatchEvent(Cl),Cl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qC),N_.child=t,this.dispatchEvent(N_),N_.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Na.multiply(t.parent.matrixWorld)),t.applyMatrix4(Na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zM),Cl.child=t,this.dispatchEvent(Cl),Cl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yc,t,WC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yc,YC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,m=h.length;p<m;p++){const g=h[p];l(t.shapes,g)}else l(t.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(t.materials,this.material[h]));a.material=f}else a.material=l(t.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(t.animations,h))}}if(e){const f=c(t.geometries),h=c(t.materials),p=c(t.textures),m=c(t.images),g=c(t.shapes),x=c(t.skeletons),v=c(t.animations),E=c(t.nodes);f.length>0&&(i.geometries=f),h.length>0&&(i.materials=h),p.length>0&&(i.textures=p),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),x.length>0&&(i.skeletons=x),v.length>0&&(i.animations=v),E.length>0&&(i.nodes=E)}return i.object=a,i;function c(f){const h=[];for(const p in f){const m=f[p];delete m.metadata,h.push(m)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Zi.DEFAULT_UP=new ct(0,1,0);Zi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wr=new ct,Pa=new ct,P_=new ct,za=new ct,Dl=new ct,Ul=new ct,BM=new ct,z_=new ct,B_=new ct,I_=new ct,F_=new Bn,H_=new Bn,G_=new Bn;class qr{constructor(t=new ct,e=new ct,i=new ct){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),Wr.subVectors(t,e),a.cross(Wr);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(t,e,i,a,l){Wr.subVectors(a,e),Pa.subVectors(i,e),P_.subVectors(t,e);const c=Wr.dot(Wr),f=Wr.dot(Pa),h=Wr.dot(P_),p=Pa.dot(Pa),m=Pa.dot(P_),g=c*p-f*f;if(g===0)return l.set(0,0,0),null;const x=1/g,v=(p*h-f*m)*x,E=(c*m-f*h)*x;return l.set(1-v-E,E,v)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,za)===null?!1:za.x>=0&&za.y>=0&&za.x+za.y<=1}static getInterpolation(t,e,i,a,l,c,f,h){return this.getBarycoord(t,e,i,a,za)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,za.x),h.addScaledVector(c,za.y),h.addScaledVector(f,za.z),h)}static getInterpolatedAttribute(t,e,i,a,l,c){return F_.setScalar(0),H_.setScalar(0),G_.setScalar(0),F_.fromBufferAttribute(t,e),H_.fromBufferAttribute(t,i),G_.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector(F_,l.x),c.addScaledVector(H_,l.y),c.addScaledVector(G_,l.z),c}static isFrontFacing(t,e,i,a){return Wr.subVectors(i,e),Pa.subVectors(t,e),Wr.cross(Pa).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wr.subVectors(this.c,this.b),Pa.subVectors(this.a,this.b),Wr.cross(Pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return qr.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,a,l){return qr.getInterpolation(t,this.a,this.b,this.c,e,i,a,l)}containsPoint(t){return qr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,l=this.c;let c,f;Dl.subVectors(a,i),Ul.subVectors(l,i),z_.subVectors(t,i);const h=Dl.dot(z_),p=Ul.dot(z_);if(h<=0&&p<=0)return e.copy(i);B_.subVectors(t,a);const m=Dl.dot(B_),g=Ul.dot(B_);if(m>=0&&g<=m)return e.copy(a);const x=h*g-m*p;if(x<=0&&h>=0&&m<=0)return c=h/(h-m),e.copy(i).addScaledVector(Dl,c);I_.subVectors(t,l);const v=Dl.dot(I_),E=Ul.dot(I_);if(E>=0&&v<=E)return e.copy(l);const M=v*p-h*E;if(M<=0&&p>=0&&E<=0)return f=p/(p-E),e.copy(i).addScaledVector(Ul,f);const y=m*E-v*g;if(y<=0&&g-m>=0&&v-E>=0)return BM.subVectors(l,a),f=(g-m)/(g-m+(v-E)),e.copy(a).addScaledVector(BM,f);const S=1/(y+M+x);return c=M*S,f=x*S,e.copy(i).addScaledVector(Dl,c).addScaledVector(Ul,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},Nh={h:0,s:0,l:0};function V_(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class je{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Lr){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Je.toWorkingColorSpace(this,e),this}setRGB(t,e,i,a=Je.workingColorSpace){return this.r=t,this.g=e,this.b=i,Je.toWorkingColorSpace(this,a),this}setHSL(t,e,i,a=Je.workingColorSpace){if(t=DC(t,1),e=Ge(e,0,1),i=Ge(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,c=2*i-l;this.r=V_(c,l,t+1/3),this.g=V_(c,l,t),this.b=V_(c,l,t-1/3)}return Je.toWorkingColorSpace(this,a),this}setStyle(t,e=Lr){function i(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(l,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Lr){const i=kE[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ja(t.r),this.g=ja(t.g),this.b=ja(t.b),this}copyLinearToSRGB(t){return this.r=ql(t.r),this.g=ql(t.g),this.b=ql(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Lr){return Je.fromWorkingColorSpace(Si.copy(this),t),Math.round(Ge(Si.r*255,0,255))*65536+Math.round(Ge(Si.g*255,0,255))*256+Math.round(Ge(Si.b*255,0,255))}getHexString(t=Lr){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Je.workingColorSpace){Je.fromWorkingColorSpace(Si.copy(this),e);const i=Si.r,a=Si.g,l=Si.b,c=Math.max(i,a,l),f=Math.min(i,a,l);let h,p;const m=(f+c)/2;if(f===c)h=0,p=0;else{const g=c-f;switch(p=m<=.5?g/(c+f):g/(2-c-f),c){case i:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-i)/g+2;break;case l:h=(i-a)/g+4;break}h/=6}return t.h=h,t.s=p,t.l=m,t}getRGB(t,e=Je.workingColorSpace){return Je.fromWorkingColorSpace(Si.copy(this),e),t.r=Si.r,t.g=Si.g,t.b=Si.b,t}getStyle(t=Lr){Je.fromWorkingColorSpace(Si.copy(this),t);const e=Si.r,i=Si.g,a=Si.b;return t!==Lr?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(Rs),this.setHSL(Rs.h+t,Rs.s+e,Rs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Rs),t.getHSL(Nh);const i=b_(Rs.h,Nh.h,e),a=b_(Rs.s,Nh.s,e),l=b_(Rs.l,Nh.l,e);return this.setHSL(i,a,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*a,this.g=l[1]*e+l[4]*i+l[7]*a,this.b=l[2]*e+l[5]*i+l[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Si=new je;je.NAMES=kE;let jC=0;class hf extends yu{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jC++}),this.uuid=uf(),this.name="",this.type="Material",this.blending=Yl,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mg,this.blendDst=Eg,this.blendEquation=Mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=su,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=EM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ml,this.stencilZFail=Ml,this.stencilZPass=Ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yl&&(i.blending=this.blending),this.side!==Gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mg&&(i.blendSrc=this.blendSrc),this.blendDst!==Eg&&(i.blendDst=this.blendDst),this.blendEquation!==Mo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==su&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==EM&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ml&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ml&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ml&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(e){const l=a(t.textures),c=a(t.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class df extends hf{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ka,this.combine=AE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Vn=new ct,Ph=new Le;let ZC=0;class vr{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZC++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=TM,this.updateRanges=[],this.gpuType=ka,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ph.fromBufferAttribute(this,e),Ph.applyMatrix3(t),this.setXY(e,Ph.x,Ph.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Vn.fromBufferAttribute(this,e),Vn.applyMatrix3(t),this.setXYZ(e,Vn.x,Vn.y,Vn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Vn.fromBufferAttribute(this,e),Vn.applyMatrix4(t),this.setXYZ(e,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Vn.fromBufferAttribute(this,e),Vn.applyNormalMatrix(t),this.setXYZ(e,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Vn.fromBufferAttribute(this,e),Vn.transformDirection(t),this.setXYZ(e,Vn.x,Vn.y,Vn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=gc(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ki(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gc(e,this.array)),e}setX(t,e){return this.normalized&&(e=ki(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gc(e,this.array)),e}setY(t,e){return this.normalized&&(e=ki(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gc(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ki(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gc(e,this.array)),e}setW(t,e){return this.normalized&&(e=ki(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ki(e,this.array),i=ki(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=ki(e,this.array),i=ki(i,this.array),a=ki(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,l){return t*=this.itemSize,this.normalized&&(e=ki(e,this.array),i=ki(i,this.array),a=ki(a,this.array),l=ki(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==TM&&(t.usage=this.usage),t}}class XE extends vr{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class WE extends vr{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Br extends vr{constructor(t,e,i){super(new Float32Array(t),e,i)}}let QC=0;const Dr=new Fn,k_=new Zi,Ll=new ct,ur=new ff,Sc=new ff,ai=new ct;class Mr extends yu{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QC++}),this.uuid=uf(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(FE(t)?WE:XE)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new Se().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Dr.makeRotationFromQuaternion(t),this.applyMatrix4(Dr),this}rotateX(t){return Dr.makeRotationX(t),this.applyMatrix4(Dr),this}rotateY(t){return Dr.makeRotationY(t),this.applyMatrix4(Dr),this}rotateZ(t){return Dr.makeRotationZ(t),this.applyMatrix4(Dr),this}translate(t,e,i){return Dr.makeTranslation(t,e,i),this.applyMatrix4(Dr),this}scale(t,e,i){return Dr.makeScale(t,e,i),this.applyMatrix4(Dr),this}lookAt(t){return k_.lookAt(t),k_.updateMatrix(),this.applyMatrix4(k_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ll).negate(),this.translate(Ll.x,Ll.y,Ll.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Br(i,3))}else{const i=Math.min(t.length,e.count);for(let a=0;a<i;a++){const l=t[a];e.setXYZ(a,l.x,l.y,l.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ff);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const l=e[i];ur.setFromBufferAttribute(l),this.morphTargetsRelative?(ai.addVectors(this.boundingBox.min,ur.min),this.boundingBox.expandByPoint(ai),ai.addVectors(this.boundingBox.max,ur.max),this.boundingBox.expandByPoint(ai)):(this.boundingBox.expandByPoint(ur.min),this.boundingBox.expandByPoint(ur.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rp);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(t){const i=this.boundingSphere.center;if(ur.setFromBufferAttribute(t),e)for(let l=0,c=e.length;l<c;l++){const f=e[l];Sc.setFromBufferAttribute(f),this.morphTargetsRelative?(ai.addVectors(ur.min,Sc.min),ur.expandByPoint(ai),ai.addVectors(ur.max,Sc.max),ur.expandByPoint(ai)):(ur.expandByPoint(Sc.min),ur.expandByPoint(Sc.max))}ur.getCenter(i);let a=0;for(let l=0,c=t.count;l<c;l++)ai.fromBufferAttribute(t,l),a=Math.max(a,i.distanceToSquared(ai));if(e)for(let l=0,c=e.length;l<c;l++){const f=e[l],h=this.morphTargetsRelative;for(let p=0,m=f.count;p<m;p++)ai.fromBufferAttribute(f,p),h&&(Ll.fromBufferAttribute(t,p),ai.add(Ll)),a=Math.max(a,i.distanceToSquared(ai))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,a=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vr(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let F=0;F<i.count;F++)f[F]=new ct,h[F]=new ct;const p=new ct,m=new ct,g=new ct,x=new Le,v=new Le,E=new Le,M=new ct,y=new ct;function S(F,w,R){p.fromBufferAttribute(i,F),m.fromBufferAttribute(i,w),g.fromBufferAttribute(i,R),x.fromBufferAttribute(l,F),v.fromBufferAttribute(l,w),E.fromBufferAttribute(l,R),m.sub(p),g.sub(p),v.sub(x),E.sub(x);const H=1/(v.x*E.y-E.x*v.y);isFinite(H)&&(M.copy(m).multiplyScalar(E.y).addScaledVector(g,-v.y).multiplyScalar(H),y.copy(g).multiplyScalar(v.x).addScaledVector(m,-E.x).multiplyScalar(H),f[F].add(M),f[w].add(M),f[R].add(M),h[F].add(y),h[w].add(y),h[R].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let F=0,w=L.length;F<w;++F){const R=L[F],H=R.start,Y=R.count;for(let tt=H,lt=H+Y;tt<lt;tt+=3)S(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const D=new ct,A=new ct,P=new ct,z=new ct;function C(F){P.fromBufferAttribute(a,F),z.copy(P);const w=f[F];D.copy(w),D.sub(P.multiplyScalar(P.dot(w))).normalize(),A.crossVectors(z,w);const H=A.dot(h[F])<0?-1:1;c.setXYZW(F,D.x,D.y,D.z,H)}for(let F=0,w=L.length;F<w;++F){const R=L[F],H=R.start,Y=R.count;for(let tt=H,lt=H+Y;tt<lt;tt+=3)C(t.getX(tt+0)),C(t.getX(tt+1)),C(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vr(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let x=0,v=i.count;x<v;x++)i.setXYZ(x,0,0,0);const a=new ct,l=new ct,c=new ct,f=new ct,h=new ct,p=new ct,m=new ct,g=new ct;if(t)for(let x=0,v=t.count;x<v;x+=3){const E=t.getX(x+0),M=t.getX(x+1),y=t.getX(x+2);a.fromBufferAttribute(e,E),l.fromBufferAttribute(e,M),c.fromBufferAttribute(e,y),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),f.fromBufferAttribute(i,E),h.fromBufferAttribute(i,M),p.fromBufferAttribute(i,y),f.add(m),h.add(m),p.add(m),i.setXYZ(E,f.x,f.y,f.z),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,v=e.count;x<v;x+=3)a.fromBufferAttribute(e,x+0),l.fromBufferAttribute(e,x+1),c.fromBufferAttribute(e,x+2),m.subVectors(c,l),g.subVectors(a,l),m.cross(g),i.setXYZ(x+0,m.x,m.y,m.z),i.setXYZ(x+1,m.x,m.y,m.z),i.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ai.fromBufferAttribute(t,e),ai.normalize(),t.setXYZ(e,ai.x,ai.y,ai.z)}toNonIndexed(){function t(f,h){const p=f.array,m=f.itemSize,g=f.normalized,x=new p.constructor(h.length*m);let v=0,E=0;for(let M=0,y=h.length;M<y;M++){f.isInterleavedBufferAttribute?v=h[M]*f.data.stride+f.offset:v=h[M]*m;for(let S=0;S<m;S++)x[E++]=p[v++]}return new vr(x,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Mr,i=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=t(h,i);e.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let m=0,g=p.length;m<g;m++){const x=p[m],v=t(x,i);h.push(v)}e.morphAttributes[f]=h}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(t[p]=h[p]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const p=i[h];t.data.attributes[h]=p.toJSON(t.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],m=[];for(let g=0,x=p.length;g<x;g++){const v=p[g];m.push(v.toJSON(t.data))}m.length>0&&(a[h]=m,l=!0)}l&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const p in a){const m=a[p];this.setAttribute(p,m.clone(e))}const l=t.morphAttributes;for(const p in l){const m=[],g=l[p];for(let x=0,v=g.length;x<v;x++)m.push(g[x].clone(e));this.morphAttributes[p]=m}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let p=0,m=c.length;p<m;p++){const g=c[p];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const IM=new Fn,co=new GE,zh=new rp,FM=new ct,Bh=new ct,Ih=new ct,Fh=new ct,X_=new ct,Hh=new ct,HM=new ct,Gh=new ct;class Pr extends Zi{constructor(t=new Mr,e=new df){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const f=this.morphTargetInfluences;if(l&&f){Hh.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const m=f[h],g=l[h];m!==0&&(X_.fromBufferAttribute(g,t),c?Hh.addScaledVector(X_,m):Hh.addScaledVector(X_.sub(e),m))}e.add(Hh)}return e}raycast(t,e){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zh.copy(i.boundingSphere),zh.applyMatrix4(l),co.copy(t.ray).recast(t.near),!(zh.containsPoint(co.origin)===!1&&(co.intersectSphere(zh,FM)===null||co.origin.distanceToSquared(FM)>(t.far-t.near)**2))&&(IM.copy(l).invert(),co.copy(t.ray).applyMatrix4(IM),!(i.boundingBox!==null&&co.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,co)))}_computeIntersections(t,e,i){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,x=l.groups,v=l.drawRange;if(f!==null)if(Array.isArray(c))for(let E=0,M=x.length;E<M;E++){const y=x[E],S=c[y.materialIndex],L=Math.max(y.start,v.start),D=Math.min(f.count,Math.min(y.start+y.count,v.start+v.count));for(let A=L,P=D;A<P;A+=3){const z=f.getX(A),C=f.getX(A+1),F=f.getX(A+2);a=Vh(this,S,t,i,p,m,g,z,C,F),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=y.materialIndex,e.push(a))}}else{const E=Math.max(0,v.start),M=Math.min(f.count,v.start+v.count);for(let y=E,S=M;y<S;y+=3){const L=f.getX(y),D=f.getX(y+1),A=f.getX(y+2);a=Vh(this,c,t,i,p,m,g,L,D,A),a&&(a.faceIndex=Math.floor(y/3),e.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,M=x.length;E<M;E++){const y=x[E],S=c[y.materialIndex],L=Math.max(y.start,v.start),D=Math.min(h.count,Math.min(y.start+y.count,v.start+v.count));for(let A=L,P=D;A<P;A+=3){const z=A,C=A+1,F=A+2;a=Vh(this,S,t,i,p,m,g,z,C,F),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=y.materialIndex,e.push(a))}}else{const E=Math.max(0,v.start),M=Math.min(h.count,v.start+v.count);for(let y=E,S=M;y<S;y+=3){const L=y,D=y+1,A=y+2;a=Vh(this,c,t,i,p,m,g,L,D,A),a&&(a.faceIndex=Math.floor(y/3),e.push(a))}}}}function KC(s,t,e,i,a,l,c,f){let h;if(t.side===qi?h=i.intersectTriangle(c,l,a,!0,f):h=i.intersectTriangle(a,l,c,t.side===Gs,f),h===null)return null;Gh.copy(f),Gh.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Gh);return p<e.near||p>e.far?null:{distance:p,point:Gh.clone(),object:s}}function Vh(s,t,e,i,a,l,c,f,h,p){s.getVertexPosition(f,Bh),s.getVertexPosition(h,Ih),s.getVertexPosition(p,Fh);const m=KC(s,t,e,i,Bh,Ih,Fh,HM);if(m){const g=new ct;qr.getBarycoord(HM,Bh,Ih,Fh,g),a&&(m.uv=qr.getInterpolatedAttribute(a,f,h,p,g,new Le)),l&&(m.uv1=qr.getInterpolatedAttribute(l,f,h,p,g,new Le)),c&&(m.normal=qr.getInterpolatedAttribute(c,f,h,p,g,new ct),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const x={a:f,b:h,c:p,normal:new ct,materialIndex:0};qr.getNormal(Bh,Ih,Fh,x.normal),m.face=x,m.barycoord=g}return m}class Su extends Mr{constructor(t=1,e=1,i=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],m=[],g=[];let x=0,v=0;E("z","y","x",-1,-1,i,e,t,c,l,0),E("z","y","x",1,-1,i,e,-t,c,l,1),E("x","z","y",1,1,t,i,e,a,c,2),E("x","z","y",1,-1,t,i,-e,a,c,3),E("x","y","z",1,-1,t,e,i,a,l,4),E("x","y","z",-1,-1,t,e,-i,a,l,5),this.setIndex(h),this.setAttribute("position",new Br(p,3)),this.setAttribute("normal",new Br(m,3)),this.setAttribute("uv",new Br(g,2));function E(M,y,S,L,D,A,P,z,C,F,w){const R=A/C,H=P/F,Y=A/2,tt=P/2,lt=z/2,at=C+1,I=F+1;let X=0,W=0;const ht=new ct;for(let b=0;b<I;b++){const Q=b*H-tt;for(let pt=0;pt<at;pt++){const Mt=pt*R-Y;ht[M]=Mt*L,ht[y]=Q*D,ht[S]=lt,p.push(ht.x,ht.y,ht.z),ht[M]=0,ht[y]=0,ht[S]=z>0?1:-1,m.push(ht.x,ht.y,ht.z),g.push(pt/C),g.push(1-b/F),X+=1}}for(let b=0;b<F;b++)for(let Q=0;Q<C;Q++){const pt=x+Q+at*b,Mt=x+Q+at*(b+1),Z=x+(Q+1)+at*(b+1),dt=x+(Q+1)+at*b;h.push(pt,Mt,dt),h.push(Mt,Z,dt),W+=6}f.addGroup(v,W,w),v+=W,x+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Su(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cu(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const a=s[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function Oi(s){const t={};for(let e=0;e<s.length;e++){const i=cu(s[e]);for(const a in i)t[a]=i[a]}return t}function JC(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function YE(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Je.workingColorSpace}const Id={clone:cu,merge:Oi};var $C=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends hf{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$C,this.fragmentShader=t2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cu(t.uniforms),this.uniformsGroups=JC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?e.uniforms[a]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[a]={type:"m4",value:c.toArray()}:e.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class qE extends Zi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fn,this.projectionMatrix=new Fn,this.projectionMatrixInverse=new Fn,this.coordinateSystem=Xa}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ws=new ct,GM=new Le,VM=new Le;class Ti extends qE{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=o0*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(T_*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return o0*2*Math.atan(Math.tan(T_*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ws.x,ws.y).multiplyScalar(-t/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ws.x,ws.y).multiplyScalar(-t/ws.z)}getViewSize(t,e){return this.getViewBounds(t,GM,VM),e.subVectors(VM,GM)}setViewOffset(t,e,i,a,l,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(T_*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,e-=c.offsetY*i/p,a*=c.width/h,i*=c.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ol=-90,Nl=1;class e2 extends Zi{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ti(Ol,Nl,t,e);a.layers=this.layers,this.add(a);const l=new Ti(Ol,Nl,t,e);l.layers=this.layers,this.add(l);const c=new Ti(Ol,Nl,t,e);c.layers=this.layers,this.add(c);const f=new Ti(Ol,Nl,t,e);f.layers=this.layers,this.add(f);const h=new Ti(Ol,Nl,t,e);h.layers=this.layers,this.add(h);const p=new Ti(Ol,Nl,t,e);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,a,l,c,f,h]=e;for(const p of e)this.remove(p);if(t===Xa)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===zd)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of e)this.add(p),p.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,m]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(e,l),t.setRenderTarget(i,1,a),t.render(e,c),t.setRenderTarget(i,2,a),t.render(e,f),t.setRenderTarget(i,3,a),t.render(e,h),t.setRenderTarget(i,4,a),t.render(e,p),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,a),t.render(e,m),t.setRenderTarget(g,x,v),t.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class jE extends ji{constructor(t=[],e=ou,i,a,l,c,f,h,p,m){super(t,e,i,a,l,c,f,h,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class n2 extends Kr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new jE(a,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ua}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Su(5,5,5),l=new Yi({name:"CubemapFromEquirect",uniforms:cu(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qi,blending:Ya});l.uniforms.tEquirect.value=e;const c=new Pr(a,l),f=e.minFilter;return e.minFilter===Ao&&(e.minFilter=ua),new e2(1,10,this).update(t,c),e.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,a=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,a);t.setRenderTarget(l)}}class kh extends Zi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i2={type:"move"};class W_{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kh,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kh,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kh,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){c=!0;for(const M of t.hand.values()){const y=e.getJointPose(M,i),S=this._getHandJoint(p,M);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const m=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=m.position.distanceTo(g.position),v=.02,E=.005;p.inputState.pinching&&x>v+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=v-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(i2)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new kh;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class pf extends Zi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ka,this.environmentIntensity=1,this.environmentRotation=new Ka,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Y_=new ct,r2=new ct,a2=new Se;class go{constructor(t=new ct(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=Y_.subVectors(i,e).cross(r2.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Y_),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:e.copy(t.start).addScaledVector(i,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||a2.getNormalMatrix(t),a=this.coplanarPoint(Y_).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fo=new rp,Xh=new ct;class ZE{constructor(t=new go,e=new go,i=new go,a=new go,l=new go,c=new go){this.planes=[t,e,i,a,l,c]}set(t,e,i,a,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(i),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xa){const i=this.planes,a=t.elements,l=a[0],c=a[1],f=a[2],h=a[3],p=a[4],m=a[5],g=a[6],x=a[7],v=a[8],E=a[9],M=a[10],y=a[11],S=a[12],L=a[13],D=a[14],A=a[15];if(i[0].setComponents(h-l,x-p,y-v,A-S).normalize(),i[1].setComponents(h+l,x+p,y+v,A+S).normalize(),i[2].setComponents(h+c,x+m,y+E,A+L).normalize(),i[3].setComponents(h-c,x-m,y-E,A-L).normalize(),i[4].setComponents(h-f,x-g,y-M,A-D).normalize(),e===Xa)i[5].setComponents(h+f,x+g,y+M,A+D).normalize();else if(e===zd)i[5].setComponents(f,g,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fo.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fo)}intersectsSprite(t){return fo.center.set(0,0,0),fo.radius=.7071067811865476,fo.applyMatrix4(t.matrixWorld),this.intersectsSphere(fo)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(Xh.x=a.normal.x>0?t.max.x:t.min.x,Xh.y=a.normal.y>0?t.max.y:t.min.y,Xh.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Xh)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ap extends hf{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const kM=new Fn,l0=new GE,Wh=new rp,Yh=new ct;class Z0 extends Zi{constructor(t=new Mr,e=new ap){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,l=t.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wh.copy(i.boundingSphere),Wh.applyMatrix4(a),Wh.radius+=l,t.ray.intersectsSphere(Wh)===!1)return;kM.copy(a).invert(),l0.copy(t.ray).applyMatrix4(kM);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=i.index,g=i.attributes.position;if(p!==null){const x=Math.max(0,c.start),v=Math.min(p.count,c.start+c.count);for(let E=x,M=v;E<M;E++){const y=p.getX(E);Yh.fromBufferAttribute(g,y),XM(Yh,y,h,a,t,e,this)}}else{const x=Math.max(0,c.start),v=Math.min(g.count,c.start+c.count);for(let E=x,M=v;E<M;E++)Yh.fromBufferAttribute(g,E),XM(Yh,E,h,a,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function XM(s,t,e,i,a,l,c){const f=l0.distanceSqToPoint(s);if(f<e){const h=new ct;l0.closestPointToPoint(s,h),h.applyMatrix4(i);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class QE extends ji{constructor(t,e,i=Io,a,l,c,f=Qr,h=Qr,p,m=Qc){if(m!==Qc&&m!==Kc)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,l,c,f,h,m,i,p),this.isDepthTexture=!0,this.image={width:t,height:e},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new j0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class sp extends Mr{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const l=t/2,c=e/2,f=Math.floor(i),h=Math.floor(a),p=f+1,m=h+1,g=t/f,x=e/h,v=[],E=[],M=[],y=[];for(let S=0;S<m;S++){const L=S*x-c;for(let D=0;D<p;D++){const A=D*g-l;E.push(A,-L,0),M.push(0,0,1),y.push(D/f),y.push(1-S/h)}}for(let S=0;S<h;S++)for(let L=0;L<f;L++){const D=L+p*S,A=L+p*(S+1),P=L+1+p*(S+1),z=L+1+p*S;v.push(D,A,z),v.push(A,P,z)}this.setIndex(v),this.setAttribute("position",new Br(E,3)),this.setAttribute("normal",new Br(M,3)),this.setAttribute("uv",new Br(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sp(t.width,t.height,t.widthSegments,t.heightSegments)}}class Q0 extends Mr{constructor(t=1,e=.4,i=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:a,arc:l},i=Math.floor(i),a=Math.floor(a);const c=[],f=[],h=[],p=[],m=new ct,g=new ct,x=new ct;for(let v=0;v<=i;v++)for(let E=0;E<=a;E++){const M=E/a*l,y=v/i*Math.PI*2;g.x=(t+e*Math.cos(y))*Math.cos(M),g.y=(t+e*Math.cos(y))*Math.sin(M),g.z=e*Math.sin(y),f.push(g.x,g.y,g.z),m.x=t*Math.cos(M),m.y=t*Math.sin(M),x.subVectors(g,m).normalize(),h.push(x.x,x.y,x.z),p.push(E/a),p.push(v/i)}for(let v=1;v<=i;v++)for(let E=1;E<=a;E++){const M=(a+1)*v+E-1,y=(a+1)*(v-1)+E-1,S=(a+1)*(v-1)+E,L=(a+1)*v+E;c.push(M,y,L),c.push(y,S,L)}this.setIndex(c),this.setAttribute("position",new Br(f,3)),this.setAttribute("normal",new Br(h,3)),this.setAttribute("uv",new Br(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Q0(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class s2 extends hf{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class o2 extends hf{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class KE extends qE{constructor(t=-1,e=1,i=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-t,c=i+t,f=a+e,h=a-e;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=m*this.view.offsetY,h=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class l2 extends Ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class u2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=WM(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=WM();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function WM(){return performance.now()}function YM(s,t,e,i){const a=c2(i);switch(e){case UE:return s*t;case OE:return s*t;case NE:return s*t*2;case PE:return s*t/a.components*a.byteLength;case W0:return s*t/a.components*a.byteLength;case zE:return s*t*2/a.components*a.byteLength;case Y0:return s*t*2/a.components*a.byteLength;case LE:return s*t*3/a.components*a.byteLength;case jr:return s*t*4/a.components*a.byteLength;case q0:return s*t*4/a.components*a.byteLength;case pd:case md:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case _d:case gd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zg:case Ig:return Math.max(s,16)*Math.max(t,8)/4;case Pg:case Bg:return Math.max(s,8)*Math.max(t,8)/2;case Fg:case Hg:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gg:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vg:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kg:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Xg:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Wg:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Yg:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case qg:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jg:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Zg:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Qg:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Kg:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Jg:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case $g:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case t0:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case e0:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case vd:case n0:case i0:return Math.ceil(s/4)*Math.ceil(t/4)*16;case BE:case r0:return Math.ceil(s/4)*Math.ceil(t/4)*8;case a0:case s0:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function c2(s){switch(s){case Qa:case wE:return{byteLength:1,components:1};case jc:case CE:case qa:return{byteLength:2,components:1};case k0:case X0:return{byteLength:2,components:4};case Io:case V0:case ka:return{byteLength:4,components:1};case DE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:G0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=G0);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function JE(){let s=null,t=!1,e=null,i=null;function a(l,c){e(l,c),i=s.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(a),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){s=l}}}function f2(s){const t=new WeakMap;function e(f,h){const p=f.array,m=f.usage,g=p.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,p,m),f.onUploadCallback();let v;if(p instanceof Float32Array)v=s.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?v=s.HALF_FLOAT:v=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)v=s.SHORT;else if(p instanceof Uint32Array)v=s.UNSIGNED_INT;else if(p instanceof Int32Array)v=s.INT;else if(p instanceof Int8Array)v=s.BYTE;else if(p instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:v,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function i(f,h,p){const m=h.array,g=h.updateRanges;if(s.bindBuffer(p,f),g.length===0)s.bufferSubData(p,0,m);else{g.sort((v,E)=>v.start-E.start);let x=0;for(let v=1;v<g.length;v++){const E=g[x],M=g[v];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++x,g[x]=M)}g.length=x+1;for(let v=0,E=g.length;v<E;v++){const M=g[v];s.bufferSubData(p,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=t.get(f);h&&(s.deleteBuffer(h.buffer),t.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=t.get(f);if(p===void 0)t.set(f,e(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}var h2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,S2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,w2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,N2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,P2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,B2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,I2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V2="gl_FragColor = linearToOutputTexel( gl_FragColor );",k2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,W2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,q2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sD=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cD=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pD=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mD=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_D=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gD=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SD=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ED=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RD=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DD=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ND=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,PD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ID=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,GD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ZD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$D=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,t3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,a3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,v3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,x3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,S3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,L3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,z3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,H3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,k3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ee={alphahash_fragment:h2,alphahash_pars_fragment:d2,alphamap_fragment:p2,alphamap_pars_fragment:m2,alphatest_fragment:_2,alphatest_pars_fragment:g2,aomap_fragment:v2,aomap_pars_fragment:x2,batching_pars_vertex:y2,batching_vertex:S2,begin_vertex:M2,beginnormal_vertex:E2,bsdfs:T2,iridescence_fragment:b2,bumpmap_pars_fragment:A2,clipping_planes_fragment:R2,clipping_planes_pars_fragment:w2,clipping_planes_pars_vertex:C2,clipping_planes_vertex:D2,color_fragment:U2,color_pars_fragment:L2,color_pars_vertex:O2,color_vertex:N2,common:P2,cube_uv_reflection_fragment:z2,defaultnormal_vertex:B2,displacementmap_pars_vertex:I2,displacementmap_vertex:F2,emissivemap_fragment:H2,emissivemap_pars_fragment:G2,colorspace_fragment:V2,colorspace_pars_fragment:k2,envmap_fragment:X2,envmap_common_pars_fragment:W2,envmap_pars_fragment:Y2,envmap_pars_vertex:q2,envmap_physical_pars_fragment:rD,envmap_vertex:j2,fog_vertex:Z2,fog_pars_vertex:Q2,fog_fragment:K2,fog_pars_fragment:J2,gradientmap_pars_fragment:$2,lightmap_pars_fragment:tD,lights_lambert_fragment:eD,lights_lambert_pars_fragment:nD,lights_pars_begin:iD,lights_toon_fragment:aD,lights_toon_pars_fragment:sD,lights_phong_fragment:oD,lights_phong_pars_fragment:lD,lights_physical_fragment:uD,lights_physical_pars_fragment:cD,lights_fragment_begin:fD,lights_fragment_maps:hD,lights_fragment_end:dD,logdepthbuf_fragment:pD,logdepthbuf_pars_fragment:mD,logdepthbuf_pars_vertex:_D,logdepthbuf_vertex:gD,map_fragment:vD,map_pars_fragment:xD,map_particle_fragment:yD,map_particle_pars_fragment:SD,metalnessmap_fragment:MD,metalnessmap_pars_fragment:ED,morphinstance_vertex:TD,morphcolor_vertex:bD,morphnormal_vertex:AD,morphtarget_pars_vertex:RD,morphtarget_vertex:wD,normal_fragment_begin:CD,normal_fragment_maps:DD,normal_pars_fragment:UD,normal_pars_vertex:LD,normal_vertex:OD,normalmap_pars_fragment:ND,clearcoat_normal_fragment_begin:PD,clearcoat_normal_fragment_maps:zD,clearcoat_pars_fragment:BD,iridescence_pars_fragment:ID,opaque_fragment:FD,packing:HD,premultiplied_alpha_fragment:GD,project_vertex:VD,dithering_fragment:kD,dithering_pars_fragment:XD,roughnessmap_fragment:WD,roughnessmap_pars_fragment:YD,shadowmap_pars_fragment:qD,shadowmap_pars_vertex:jD,shadowmap_vertex:ZD,shadowmask_pars_fragment:QD,skinbase_vertex:KD,skinning_pars_vertex:JD,skinning_vertex:$D,skinnormal_vertex:t3,specularmap_fragment:e3,specularmap_pars_fragment:n3,tonemapping_fragment:i3,tonemapping_pars_fragment:r3,transmission_fragment:a3,transmission_pars_fragment:s3,uv_pars_fragment:o3,uv_pars_vertex:l3,uv_vertex:u3,worldpos_vertex:c3,background_vert:f3,background_frag:h3,backgroundCube_vert:d3,backgroundCube_frag:p3,cube_vert:m3,cube_frag:_3,depth_vert:g3,depth_frag:v3,distanceRGBA_vert:x3,distanceRGBA_frag:y3,equirect_vert:S3,equirect_frag:M3,linedashed_vert:E3,linedashed_frag:T3,meshbasic_vert:b3,meshbasic_frag:A3,meshlambert_vert:R3,meshlambert_frag:w3,meshmatcap_vert:C3,meshmatcap_frag:D3,meshnormal_vert:U3,meshnormal_frag:L3,meshphong_vert:O3,meshphong_frag:N3,meshphysical_vert:P3,meshphysical_frag:z3,meshtoon_vert:B3,meshtoon_frag:I3,points_vert:F3,points_frag:H3,shadow_vert:G3,shadow_frag:V3,sprite_vert:k3,sprite_frag:X3},Ht={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},oa={basic:{uniforms:Oi([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Oi([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new je(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Oi([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Oi([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Oi([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new je(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Oi([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Oi([Ht.points,Ht.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Oi([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Oi([Ht.common,Ht.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Oi([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Oi([Ht.sprite,Ht.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Oi([Ht.common,Ht.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Oi([Ht.lights,Ht.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};oa.physical={uniforms:Oi([oa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const qh={r:0,b:0,g:0},ho=new Ka,W3=new Fn;function Y3(s,t,e,i,a,l,c){const f=new je(0);let h=l===!0?0:1,p,m,g=null,x=0,v=null;function E(D){let A=D.isScene===!0?D.background:null;return A&&A.isTexture&&(A=(D.backgroundBlurriness>0?e:t).get(A)),A}function M(D){let A=!1;const P=E(D);P===null?S(f,h):P&&P.isColor&&(S(P,1),A=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,c):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(s.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,A){const P=E(A);P&&(P.isCubeTexture||P.mapping===ip)?(m===void 0&&(m=new Pr(new Su(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:cu(oa.backgroundCube.uniforms),vertexShader:oa.backgroundCube.vertexShader,fragmentShader:oa.backgroundCube.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),ho.copy(A.backgroundRotation),ho.x*=-1,ho.y*=-1,ho.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ho.y*=-1,ho.z*=-1),m.material.uniforms.envMap.value=P,m.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(W3.makeRotationFromEuler(ho)),m.material.toneMapped=Je.getTransfer(P.colorSpace)!==fn,(g!==P||x!==P.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,g=P,x=P.version,v=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Pr(new sp(2,2),new Yi({name:"BackgroundMaterial",uniforms:cu(oa.background.uniforms),vertexShader:oa.background.vertexShader,fragmentShader:oa.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=Je.getTransfer(P.colorSpace)!==fn,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||x!==P.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,g=P,x=P.version,v=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function S(D,A){D.getRGB(qh,YE(s)),i.buffers.color.setClear(qh.r,qh.g,qh.b,A,c)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,A=1){f.set(D),h=A,S(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,S(f,h)},render:M,addToRenderList:y,dispose:L}}function q3(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=x(null);let l=a,c=!1;function f(R,H,Y,tt,lt){let at=!1;const I=g(tt,Y,H);l!==I&&(l=I,p(l.object)),at=v(R,tt,Y,lt),at&&E(R,tt,Y,lt),lt!==null&&t.update(lt,s.ELEMENT_ARRAY_BUFFER),(at||c)&&(c=!1,A(R,H,Y,tt),lt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(lt).buffer))}function h(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function m(R){return s.deleteVertexArray(R)}function g(R,H,Y){const tt=Y.wireframe===!0;let lt=i[R.id];lt===void 0&&(lt={},i[R.id]=lt);let at=lt[H.id];at===void 0&&(at={},lt[H.id]=at);let I=at[tt];return I===void 0&&(I=x(h()),at[tt]=I),I}function x(R){const H=[],Y=[],tt=[];for(let lt=0;lt<e;lt++)H[lt]=0,Y[lt]=0,tt[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:tt,object:R,attributes:{},index:null}}function v(R,H,Y,tt){const lt=l.attributes,at=H.attributes;let I=0;const X=Y.getAttributes();for(const W in X)if(X[W].location>=0){const b=lt[W];let Q=at[W];if(Q===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),b===void 0||b.attribute!==Q||Q&&b.data!==Q.data)return!0;I++}return l.attributesNum!==I||l.index!==tt}function E(R,H,Y,tt){const lt={},at=H.attributes;let I=0;const X=Y.getAttributes();for(const W in X)if(X[W].location>=0){let b=at[W];b===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(b=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(b=R.instanceColor));const Q={};Q.attribute=b,b&&b.data&&(Q.data=b.data),lt[W]=Q,I++}l.attributes=lt,l.attributesNum=I,l.index=tt}function M(){const R=l.newAttributes;for(let H=0,Y=R.length;H<Y;H++)R[H]=0}function y(R){S(R,0)}function S(R,H){const Y=l.newAttributes,tt=l.enabledAttributes,lt=l.attributeDivisors;Y[R]=1,tt[R]===0&&(s.enableVertexAttribArray(R),tt[R]=1),lt[R]!==H&&(s.vertexAttribDivisor(R,H),lt[R]=H)}function L(){const R=l.newAttributes,H=l.enabledAttributes;for(let Y=0,tt=H.length;Y<tt;Y++)H[Y]!==R[Y]&&(s.disableVertexAttribArray(Y),H[Y]=0)}function D(R,H,Y,tt,lt,at,I){I===!0?s.vertexAttribIPointer(R,H,Y,lt,at):s.vertexAttribPointer(R,H,Y,tt,lt,at)}function A(R,H,Y,tt){M();const lt=tt.attributes,at=Y.getAttributes(),I=H.defaultAttributeValues;for(const X in at){const W=at[X];if(W.location>=0){let ht=lt[X];if(ht===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(ht=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(ht=R.instanceColor)),ht!==void 0){const b=ht.normalized,Q=ht.itemSize,pt=t.get(ht);if(pt===void 0)continue;const Mt=pt.buffer,Z=pt.type,dt=pt.bytesPerElement,_t=Z===s.INT||Z===s.UNSIGNED_INT||ht.gpuType===V0;if(ht.isInterleavedBufferAttribute){const Tt=ht.data,At=Tt.stride,qt=ht.offset;if(Tt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<W.locationSize;Qt++)S(W.location+Qt,Tt.meshPerAttribute);R.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Qt=0;Qt<W.locationSize;Qt++)y(W.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Qt=0;Qt<W.locationSize;Qt++)D(W.location+Qt,Q/W.locationSize,Z,b,At*dt,(qt+Q/W.locationSize*Qt)*dt,_t)}else{if(ht.isInstancedBufferAttribute){for(let Tt=0;Tt<W.locationSize;Tt++)S(W.location+Tt,ht.meshPerAttribute);R.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Tt=0;Tt<W.locationSize;Tt++)y(W.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Tt=0;Tt<W.locationSize;Tt++)D(W.location+Tt,Q/W.locationSize,Z,b,Q*dt,Q/W.locationSize*Tt*dt,_t)}}else if(I!==void 0){const b=I[X];if(b!==void 0)switch(b.length){case 2:s.vertexAttrib2fv(W.location,b);break;case 3:s.vertexAttrib3fv(W.location,b);break;case 4:s.vertexAttrib4fv(W.location,b);break;default:s.vertexAttrib1fv(W.location,b)}}}}L()}function P(){F();for(const R in i){const H=i[R];for(const Y in H){const tt=H[Y];for(const lt in tt)m(tt[lt].object),delete tt[lt];delete H[Y]}delete i[R]}}function z(R){if(i[R.id]===void 0)return;const H=i[R.id];for(const Y in H){const tt=H[Y];for(const lt in tt)m(tt[lt].object),delete tt[lt];delete H[Y]}delete i[R.id]}function C(R){for(const H in i){const Y=i[H];if(Y[R.id]===void 0)continue;const tt=Y[R.id];for(const lt in tt)m(tt[lt].object),delete tt[lt];delete Y[R.id]}}function F(){w(),c=!0,l!==a&&(l=a,p(l.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:F,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:z,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:y,disableUnusedAttributes:L}}function j3(s,t,e){let i;function a(p){i=p}function l(p,m){s.drawArrays(i,p,m),e.update(m,i,1)}function c(p,m,g){g!==0&&(s.drawArraysInstanced(i,p,m,g),e.update(m,i,g))}function f(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,p,0,m,0,g);let v=0;for(let E=0;E<g;E++)v+=m[E];e.update(v,i,1)}function h(p,m,g,x){if(g===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let E=0;E<p.length;E++)c(p[E],m[E],x[E]);else{v.multiDrawArraysInstancedWEBGL(i,p,0,m,0,x,0,g);let E=0;for(let M=0;M<g;M++)E+=m[M]*x[M];e.update(E,i,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Z3(s,t,e,i){let a;function l(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");a=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(C){return!(C!==jr&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(C){const F=C===qa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Qa&&i.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ka&&!F)}function h(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=e.precision!==void 0?e.precision:"highp";const m=h(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const g=e.logarithmicDepthBuffer===!0,x=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:v,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:A,vertexTextures:P,maxSamples:z}}function Q3(s){const t=this;let e=null,i=0,a=!1,l=!1;const c=new go,f=new Se,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const v=g.length!==0||x||i!==0||a;return a=x,i=g.length,v},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){e=m(g,x,0)},this.setState=function(g,x,v){const E=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,S=s.get(g);if(!a||E===null||E.length===0||l&&!y)l?m(null):p();else{const L=l?0:i,D=L*4;let A=S.clippingState||null;h.value=A,A=m(E,x,D,v);for(let P=0;P!==D;++P)A[P]=e[P];S.clippingState=A,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function p(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(g,x,v,E){const M=g!==null?g.length:0;let y=null;if(M!==0){if(y=h.value,E!==!0||y===null){const S=v+M*4,L=x.matrixWorldInverse;f.getNormalMatrix(L),(y===null||y.length<S)&&(y=new Float32Array(S));for(let D=0,A=v;D!==M;++D,A+=4)c.copy(g[D]).applyMatrix4(L,f),c.normal.toArray(y,A),y[A+3]=c.constant}h.value=y,h.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}function K3(s){let t=new WeakMap;function e(c,f){return f===Ug?c.mapping=ou:f===Lg&&(c.mapping=lu),c}function i(c){if(c&&c.isTexture){const f=c.mapping;if(f===Ug||f===Lg)if(t.has(c)){const h=t.get(c).texture;return e(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const p=new n2(h.height);return p.fromEquirectangularTexture(s,c),t.set(c,p),c.addEventListener("dispose",a),e(p.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const h=t.get(f);h!==void 0&&(t.delete(f),h.dispose())}function l(){t=new WeakMap}return{get:i,dispose:l}}const Vl=4,qM=[.125,.215,.35,.446,.526,.582],Eo=20,q_=new KE,jM=new je;let j_=null,Z_=0,Q_=0,K_=!1;const vo=(1+Math.sqrt(5))/2,Pl=1/vo,ZM=[new ct(-vo,Pl,0),new ct(vo,Pl,0),new ct(-Pl,0,vo),new ct(Pl,0,vo),new ct(0,vo,-Pl),new ct(0,vo,Pl),new ct(-1,1,-1),new ct(1,1,-1),new ct(-1,1,1),new ct(1,1,1)],J3=new ct;class QM{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,a=100,l={}){const{size:c=256,position:f=J3}=l;j_=this._renderer.getRenderTarget(),Z_=this._renderer.getActiveCubeFace(),Q_=this._renderer.getActiveMipmapLevel(),K_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,i,a,h,f),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$M(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=JM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(j_,Z_,Q_),this._renderer.xr.enabled=K_,t.scissorTest=!1,jh(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ou||t.mapping===lu?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),j_=this._renderer.getRenderTarget(),Z_=this._renderer.getActiveCubeFace(),Q_=this._renderer.getActiveMipmapLevel(),K_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ua,minFilter:ua,generateMipmaps:!1,type:qa,format:jr,colorSpace:uu,depthBuffer:!1},a=KM(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=KM(t,e,i);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$3(l)),this._blurMaterial=tU(l,t,e)}return a}_compileMaterial(t){const e=new Pr(this._lodPlanes[0],t);this._renderer.compile(e,q_)}_sceneToCubeUV(t,e,i,a,l){const h=new Ti(90,1,e,i),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,v=g.toneMapping;g.getClearColor(jM),g.toneMapping=Bs,g.autoClear=!1;const E=new df({name:"PMREM.Background",side:qi,depthWrite:!1,depthTest:!1}),M=new Pr(new Su,E);let y=!1;const S=t.background;S?S.isColor&&(E.color.copy(S),t.background=null,y=!0):(E.color.copy(jM),y=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+m[L],l.y,l.z)):D===1?(h.up.set(0,0,p[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+m[L],l.z)):(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+m[L]));const A=this._cubeSize;jh(a,D*A,L>2?A:0,A,A),g.setRenderTarget(a),y&&g.render(M,h),g.render(t,h)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=v,g.autoClear=x,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===ou||t.mapping===lu;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=$M()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=JM());const l=a?this._cubemapMaterial:this._equirectMaterial,c=new Pr(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const h=this._cubeSize;jh(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(c,q_)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=ZM[(a-l-1)%ZM.length];this._blur(t,l-1,l,c,f)}e.autoClear=i}_blur(t,e,i,a,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,a,"latitudinal",l),this._halfBlur(c,t,i,i,a,"longitudinal",l)}_halfBlur(t,e,i,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Pr(this._lodPlanes[a],p),x=p.uniforms,v=this._sizeLods[i]-1,E=isFinite(l)?Math.PI/(2*v):2*Math.PI/(2*Eo-1),M=l/E,y=isFinite(l)?1+Math.floor(m*M):Eo;y>Eo&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Eo}`);const S=[];let L=0;for(let C=0;C<Eo;++C){const F=C/M,w=Math.exp(-F*F/2);S.push(w),C===0?L+=w:C<y&&(L+=2*w)}for(let C=0;C<S.length;C++)S[C]=S[C]/L;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=S,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-i;const A=this._sizeLods[a],P=3*A*(a>D-Vl?a-D+Vl:0),z=4*(this._cubeSize-A);jh(e,P,z,3*A,2*A),h.setRenderTarget(e),h.render(g,q_)}}function $3(s){const t=[],e=[],i=[];let a=s;const l=s-Vl+1+qM.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);e.push(f);let h=1/f;c>s-Vl?h=qM[c-s+Vl-1]:c===0&&(h=0),i.push(h);const p=1/(f-2),m=-p,g=1+p,x=[m,m,g,m,g,g,m,m,g,g,m,g],v=6,E=6,M=3,y=2,S=1,L=new Float32Array(M*E*v),D=new Float32Array(y*E*v),A=new Float32Array(S*E*v);for(let z=0;z<v;z++){const C=z%3*2/3-1,F=z>2?0:-1,w=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];L.set(w,M*E*z),D.set(x,y*E*z);const R=[z,z,z,z,z,z];A.set(R,S*E*z)}const P=new Mr;P.setAttribute("position",new vr(L,M)),P.setAttribute("uv",new vr(D,y)),P.setAttribute("faceIndex",new vr(A,S)),t.push(P),a>Vl&&a--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function KM(s,t,e){const i=new Kr(s,t,e);return i.texture.mapping=ip,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jh(s,t,e,i,a){s.viewport.set(t,e,i,a),s.scissor.set(t,e,i,a)}function tU(s,t,e){const i=new Float32Array(Eo),a=new ct(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Eo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:K0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function JM(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:K0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function $M(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:K0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ya,depthTest:!1,depthWrite:!1})}function K0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eU(s){let t=new WeakMap,e=null;function i(f){if(f&&f.isTexture){const h=f.mapping,p=h===Ug||h===Lg,m=h===ou||h===lu;if(p||m){let g=t.get(f);const x=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return e===null&&(e=new QM(s)),g=p?e.fromEquirectangular(f,g):e.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const v=f.image;return p&&v&&v.height>0||m&&v&&a(v)?(e===null&&(e=new QM(s)),g=p?e.fromEquirectangular(f):e.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function a(f){let h=0;const p=6;for(let m=0;m<p;m++)f[m]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:c}}function nU(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let a;switch(i){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(i)}return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&xd("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function iU(s,t,e,i){const a={},l=new WeakMap;function c(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",c),delete a[x.id];const v=l.get(x);v&&(t.remove(v),l.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function f(g,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,e.memory.geometries++),x}function h(g){const x=g.attributes;for(const v in x)t.update(x[v],s.ARRAY_BUFFER)}function p(g){const x=[],v=g.index,E=g.attributes.position;let M=0;if(v!==null){const L=v.array;M=v.version;for(let D=0,A=L.length;D<A;D+=3){const P=L[D+0],z=L[D+1],C=L[D+2];x.push(P,z,z,C,C,P)}}else if(E!==void 0){const L=E.array;M=E.version;for(let D=0,A=L.length/3-1;D<A;D+=3){const P=D+0,z=D+1,C=D+2;x.push(P,z,z,C,C,P)}}else return;const y=new(FE(x)?WE:XE)(x,1);y.version=M;const S=l.get(g);S&&t.remove(S),l.set(g,y)}function m(g){const x=l.get(g);if(x){const v=g.index;v!==null&&x.version<v.version&&p(g)}else p(g);return l.get(g)}return{get:f,update:h,getWireframeAttribute:m}}function rU(s,t,e){let i;function a(x){i=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function h(x,v){s.drawElements(i,v,l,x*c),e.update(v,i,1)}function p(x,v,E){E!==0&&(s.drawElementsInstanced(i,v,l,x*c,E),e.update(v,i,E))}function m(x,v,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,l,x,0,E);let y=0;for(let S=0;S<E;S++)y+=v[S];e.update(y,i,1)}function g(x,v,E,M){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<x.length;S++)p(x[S]/c,v[S],M[S]);else{y.multiDrawElementsInstancedWEBGL(i,v,0,l,x,0,M,0,E);let S=0;for(let L=0;L<E;L++)S+=v[L]*M[L];e.update(S,i,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function aU(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(e.calls++,c){case s.TRIANGLES:e.triangles+=f*(l/3);break;case s.LINES:e.lines+=f*(l/2);break;case s.LINE_STRIP:e.lines+=f*(l-1);break;case s.LINE_LOOP:e.lines+=f*l;break;case s.POINTS:e.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function sU(s,t,e){const i=new WeakMap,a=new Bn;function l(c,f,h){const p=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let x=i.get(f);if(x===void 0||x.count!==g){let R=function(){F.dispose(),i.delete(f),f.removeEventListener("dispose",R)};var v=R;x!==void 0&&x.texture.dispose();const E=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),M===!0&&(A=2),y===!0&&(A=3);let P=f.attributes.position.count*A,z=1;P>t.maxTextureSize&&(z=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const C=new Float32Array(P*z*4*g),F=new HE(C,P,z,g);F.type=ka,F.needsUpdate=!0;const w=A*4;for(let H=0;H<g;H++){const Y=S[H],tt=L[H],lt=D[H],at=P*z*4*H;for(let I=0;I<Y.count;I++){const X=I*w;E===!0&&(a.fromBufferAttribute(Y,I),C[at+X+0]=a.x,C[at+X+1]=a.y,C[at+X+2]=a.z,C[at+X+3]=0),M===!0&&(a.fromBufferAttribute(tt,I),C[at+X+4]=a.x,C[at+X+5]=a.y,C[at+X+6]=a.z,C[at+X+7]=0),y===!0&&(a.fromBufferAttribute(lt,I),C[at+X+8]=a.x,C[at+X+9]=a.y,C[at+X+10]=a.z,C[at+X+11]=lt.itemSize===4?a.w:1)}}x={count:g,texture:F,size:new Le(P,z)},i.set(f,x),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,e);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const M=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function oU(s,t,e,i){let a=new WeakMap;function l(h){const p=i.render.frame,m=h.geometry,g=t.get(h,m);if(a.get(g)!==p&&(t.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==p&&(x.update(),a.set(x,p))}return g}function c(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:l,dispose:c}}const $E=new ji,t1=new QE(1,1),tT=new HE,eT=new HC,nT=new jE,e1=[],n1=[],i1=new Float32Array(16),r1=new Float32Array(9),a1=new Float32Array(4);function Mu(s,t,e){const i=s[0];if(i<=0||i>0)return s;const a=t*e;let l=e1[a];if(l===void 0&&(l=new Float32Array(a),e1[a]=l),t!==0){i.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=e,s[c].toArray(l,f)}return l}function $n(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ti(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function op(s,t){let e=n1[t];e===void 0&&(e=new Int32Array(t),n1[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function lU(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function uU(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($n(e,t))return;s.uniform2fv(this.addr,t),ti(e,t)}}function cU(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($n(e,t))return;s.uniform3fv(this.addr,t),ti(e,t)}}function fU(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($n(e,t))return;s.uniform4fv(this.addr,t),ti(e,t)}}function hU(s,t){const e=this.cache,i=t.elements;if(i===void 0){if($n(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ti(e,t)}else{if($n(e,i))return;a1.set(i),s.uniformMatrix2fv(this.addr,!1,a1),ti(e,i)}}function dU(s,t){const e=this.cache,i=t.elements;if(i===void 0){if($n(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ti(e,t)}else{if($n(e,i))return;r1.set(i),s.uniformMatrix3fv(this.addr,!1,r1),ti(e,i)}}function pU(s,t){const e=this.cache,i=t.elements;if(i===void 0){if($n(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ti(e,t)}else{if($n(e,i))return;i1.set(i),s.uniformMatrix4fv(this.addr,!1,i1),ti(e,i)}}function mU(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function _U(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($n(e,t))return;s.uniform2iv(this.addr,t),ti(e,t)}}function gU(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($n(e,t))return;s.uniform3iv(this.addr,t),ti(e,t)}}function vU(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($n(e,t))return;s.uniform4iv(this.addr,t),ti(e,t)}}function xU(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function yU(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($n(e,t))return;s.uniform2uiv(this.addr,t),ti(e,t)}}function SU(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($n(e,t))return;s.uniform3uiv(this.addr,t),ti(e,t)}}function MU(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($n(e,t))return;s.uniform4uiv(this.addr,t),ti(e,t)}}function EU(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(t1.compareFunction=IE,l=t1):l=$E,e.setTexture2D(t||l,a)}function TU(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||eT,a)}function bU(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||nT,a)}function AU(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||tT,a)}function RU(s){switch(s){case 5126:return lU;case 35664:return uU;case 35665:return cU;case 35666:return fU;case 35674:return hU;case 35675:return dU;case 35676:return pU;case 5124:case 35670:return mU;case 35667:case 35671:return _U;case 35668:case 35672:return gU;case 35669:case 35673:return vU;case 5125:return xU;case 36294:return yU;case 36295:return SU;case 36296:return MU;case 35678:case 36198:case 36298:case 36306:case 35682:return EU;case 35679:case 36299:case 36307:return TU;case 35680:case 36300:case 36308:case 36293:return bU;case 36289:case 36303:case 36311:case 36292:return AU}}function wU(s,t){s.uniform1fv(this.addr,t)}function CU(s,t){const e=Mu(t,this.size,2);s.uniform2fv(this.addr,e)}function DU(s,t){const e=Mu(t,this.size,3);s.uniform3fv(this.addr,e)}function UU(s,t){const e=Mu(t,this.size,4);s.uniform4fv(this.addr,e)}function LU(s,t){const e=Mu(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function OU(s,t){const e=Mu(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function NU(s,t){const e=Mu(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function PU(s,t){s.uniform1iv(this.addr,t)}function zU(s,t){s.uniform2iv(this.addr,t)}function BU(s,t){s.uniform3iv(this.addr,t)}function IU(s,t){s.uniform4iv(this.addr,t)}function FU(s,t){s.uniform1uiv(this.addr,t)}function HU(s,t){s.uniform2uiv(this.addr,t)}function GU(s,t){s.uniform3uiv(this.addr,t)}function VU(s,t){s.uniform4uiv(this.addr,t)}function kU(s,t,e){const i=this.cache,a=t.length,l=op(e,a);$n(i,l)||(s.uniform1iv(this.addr,l),ti(i,l));for(let c=0;c!==a;++c)e.setTexture2D(t[c]||$E,l[c])}function XU(s,t,e){const i=this.cache,a=t.length,l=op(e,a);$n(i,l)||(s.uniform1iv(this.addr,l),ti(i,l));for(let c=0;c!==a;++c)e.setTexture3D(t[c]||eT,l[c])}function WU(s,t,e){const i=this.cache,a=t.length,l=op(e,a);$n(i,l)||(s.uniform1iv(this.addr,l),ti(i,l));for(let c=0;c!==a;++c)e.setTextureCube(t[c]||nT,l[c])}function YU(s,t,e){const i=this.cache,a=t.length,l=op(e,a);$n(i,l)||(s.uniform1iv(this.addr,l),ti(i,l));for(let c=0;c!==a;++c)e.setTexture2DArray(t[c]||tT,l[c])}function qU(s){switch(s){case 5126:return wU;case 35664:return CU;case 35665:return DU;case 35666:return UU;case 35674:return LU;case 35675:return OU;case 35676:return NU;case 5124:case 35670:return PU;case 35667:case 35671:return zU;case 35668:case 35672:return BU;case 35669:case 35673:return IU;case 5125:return FU;case 36294:return HU;case 36295:return GU;case 36296:return VU;case 35678:case 36198:case 36298:case 36306:case 35682:return kU;case 35679:case 36299:case 36307:return XU;case 35680:case 36300:case 36308:case 36293:return WU;case 36289:case 36303:case 36311:case 36292:return YU}}class jU{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=RU(e.type)}}class ZU{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qU(e.type)}}class QU{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(t,e[f.id],i)}}}const J_=/(\w+)(\])?(\[|\.)?/g;function s1(s,t){s.seq.push(t),s.map[t.id]=t}function KU(s,t,e){const i=s.name,a=i.length;for(J_.lastIndex=0;;){const l=J_.exec(i),c=J_.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){s1(e,p===void 0?new jU(f,s,t):new ZU(f,s,t));break}else{let g=e.map[f];g===void 0&&(g=new QU(f),s1(e,g)),e=g}}}class yd{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);KU(l,c,this)}}setValue(t,e,i,a){const l=this.map[e];l!==void 0&&l.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let l=0,c=e.length;l!==c;++l){const f=e[l],h=i[f.id];h.needsUpdate!==!1&&f.setValue(t,h.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,l=t.length;a!==l;++a){const c=t[a];c.id in e&&i.push(c)}return i}}function o1(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const JU=37297;let $U=0;function tL(s,t){const e=s.split(`
`),i=[],a=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let c=a;c<l;c++){const f=c+1;i.push(`${f===t?">":" "} ${f}: ${e[c]}`)}return i.join(`
`)}const l1=new Se;function eL(s){Je._getMatrix(l1,Je.workingColorSpace,s);const t=`mat3( ${l1.elements.map(e=>e.toFixed(4))} )`;switch(Je.getTransfer(s)){case Pd:return[t,"LinearTransferOETF"];case fn:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function u1(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),a=s.getShaderInfoLog(t).trim();if(i&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return e.toUpperCase()+`

`+a+`

`+tL(s.getShaderSource(t),c)}else return a}function nL(s,t){const e=eL(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function iL(s,t){let e;switch(t){case fC:e="Linear";break;case hC:e="Reinhard";break;case dC:e="Cineon";break;case pC:e="ACESFilmic";break;case _C:e="AgX";break;case gC:e="Neutral";break;case mC:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Zh=new ct;function rL(){Je.getLuminanceCoefficients(Zh);const s=Zh.x.toFixed(4),t=Zh.y.toFixed(4),e=Zh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aL(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ac).join(`
`)}function sL(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function oL(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=s.getActiveAttrib(t,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),e[c]={type:l.type,location:s.getAttribLocation(t,c),locationSize:f}}return e}function Ac(s){return s!==""}function c1(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function f1(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lL=/^[ \t]*#include +<([\w\d./]+)>/gm;function u0(s){return s.replace(lL,cL)}const uL=new Map;function cL(s,t){let e=Ee[t];if(e===void 0){const i=uL.get(t);if(i!==void 0)e=Ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return u0(e)}const fL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h1(s){return s.replace(fL,hL)}function hL(s,t,e,i){let a="";for(let l=parseInt(t);l<parseInt(e);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function d1(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dL(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bE?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Xw?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ba&&(t="SHADOWMAP_TYPE_VSM"),t}function pL(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ou:case lu:t="ENVMAP_TYPE_CUBE";break;case ip:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mL(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case lu:t="ENVMAP_MODE_REFRACTION";break}return t}function _L(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case AE:t="ENVMAP_BLENDING_MULTIPLY";break;case uC:t="ENVMAP_BLENDING_MIX";break;case cC:t="ENVMAP_BLENDING_ADD";break}return t}function gL(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function vL(s,t,e,i){const a=s.getContext(),l=e.defines;let c=e.vertexShader,f=e.fragmentShader;const h=dL(e),p=pL(e),m=mL(e),g=_L(e),x=gL(e),v=aL(e),E=sL(l),M=a.createProgram();let y,S,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Ac).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E].filter(Ac).join(`
`),S.length>0&&(S+=`
`)):(y=[d1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ac).join(`
`),S=[d1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,E,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",e.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bs?"#define TONE_MAPPING":"",e.toneMapping!==Bs?Ee.tonemapping_pars_fragment:"",e.toneMapping!==Bs?iL("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,nL("linearToOutputTexel",e.outputColorSpace),rL(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ac).join(`
`)),c=u0(c),c=c1(c,e),c=f1(c,e),f=u0(f),f=c1(f,e),f=f1(f,e),c=h1(c),f=h1(f),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",e.glslVersion===bM?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bM?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=L+y+c,A=L+S+f,P=o1(a,a.VERTEX_SHADER,D),z=o1(a,a.FRAGMENT_SHADER,A);a.attachShader(M,P),a.attachShader(M,z),e.index0AttributeName!==void 0?a.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(M,0,"position"),a.linkProgram(M);function C(H){if(s.debug.checkShaderErrors){const Y=a.getProgramInfoLog(M).trim(),tt=a.getShaderInfoLog(P).trim(),lt=a.getShaderInfoLog(z).trim();let at=!0,I=!0;if(a.getProgramParameter(M,a.LINK_STATUS)===!1)if(at=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,M,P,z);else{const X=u1(a,P,"vertex"),W=u1(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(M,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+Y+`
`+X+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(tt===""||lt==="")&&(I=!1);I&&(H.diagnostics={runnable:at,programLog:Y,vertexShader:{log:tt,prefix:y},fragmentShader:{log:lt,prefix:S}})}a.deleteShader(P),a.deleteShader(z),F=new yd(a,M),w=oL(a,M)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=a.getProgramParameter(M,JU)),R},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$U++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=z,this}let xL=0;class yL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new SL(t),e.set(t,i)),i}}class SL{constructor(t){this.id=xL++,this.code=t,this.usedTimes=0}}function ML(s,t,e,i,a,l,c){const f=new VE,h=new yL,p=new Set,m=[],g=a.logarithmicDepthBuffer,x=a.vertexTextures;let v=a.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,R,H,Y,tt){const lt=Y.fog,at=tt.geometry,I=w.isMeshStandardMaterial?Y.environment:null,X=(w.isMeshStandardMaterial?e:t).get(w.envMap||I),W=X&&X.mapping===ip?X.image.height:null,ht=E[w.type];w.precision!==null&&(v=a.getMaxPrecision(w.precision),v!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",v,"instead."));const b=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Q=b!==void 0?b.length:0;let pt=0;at.morphAttributes.position!==void 0&&(pt=1),at.morphAttributes.normal!==void 0&&(pt=2),at.morphAttributes.color!==void 0&&(pt=3);let Mt,Z,dt,_t;if(ht){const Ft=oa[ht];Mt=Ft.vertexShader,Z=Ft.fragmentShader}else Mt=w.vertexShader,Z=w.fragmentShader,h.update(w),dt=h.getVertexShaderID(w),_t=h.getFragmentShaderID(w);const Tt=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),qt=tt.isInstancedMesh===!0,Qt=tt.isBatchedMesh===!0,_e=!!w.map,oe=!!w.matcap,Vt=!!X,V=!!w.aoMap,rn=!!w.lightMap,de=!!w.bumpMap,J=!!w.normalMap,kt=!!w.displacementMap,we=!!w.emissiveMap,Yt=!!w.metalnessMap,B=!!w.roughnessMap,U=w.anisotropy>0,nt=w.clearcoat>0,St=w.dispersion>0,xt=w.iridescence>0,mt=w.sheen>0,Ct=w.transmission>0,Dt=U&&!!w.anisotropyMap,Ut=nt&&!!w.clearcoatMap,ve=nt&&!!w.clearcoatNormalMap,Rt=nt&&!!w.clearcoatRoughnessMap,Lt=xt&&!!w.iridescenceMap,ie=xt&&!!w.iridescenceThicknessMap,te=mt&&!!w.sheenColorMap,Bt=mt&&!!w.sheenRoughnessMap,ge=!!w.specularMap,ae=!!w.specularColorMap,Be=!!w.specularIntensityMap,k=Ct&&!!w.transmissionMap,Nt=Ct&&!!w.thicknessMap,ft=!!w.gradientMap,gt=!!w.alphaMap,Ot=w.alphaTest>0,Pt=!!w.alphaHash,le=!!w.extensions;let Ie=Bs;w.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Ie=s.toneMapping);const _n={shaderID:ht,shaderType:w.type,shaderName:w.name,vertexShader:Mt,fragmentShader:Z,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:_t,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:v,batching:Qt,batchingColor:Qt&&tt._colorsTexture!==null,instancing:qt,instancingColor:qt&&tt.instanceColor!==null,instancingMorph:qt&&tt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Tt===null?s.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:uu,alphaToCoverage:!!w.alphaToCoverage,map:_e,matcap:oe,envMap:Vt,envMapMode:Vt&&X.mapping,envMapCubeUVHeight:W,aoMap:V,lightMap:rn,bumpMap:de,normalMap:J,displacementMap:x&&kt,emissiveMap:we,normalMapObjectSpace:J&&w.normalMapType===MC,normalMapTangentSpace:J&&w.normalMapType===SC,metalnessMap:Yt,roughnessMap:B,anisotropy:U,anisotropyMap:Dt,clearcoat:nt,clearcoatMap:Ut,clearcoatNormalMap:ve,clearcoatRoughnessMap:Rt,dispersion:St,iridescence:xt,iridescenceMap:Lt,iridescenceThicknessMap:ie,sheen:mt,sheenColorMap:te,sheenRoughnessMap:Bt,specularMap:ge,specularColorMap:ae,specularIntensityMap:Be,transmission:Ct,transmissionMap:k,thicknessMap:Nt,gradientMap:ft,opaque:w.transparent===!1&&w.blending===Yl&&w.alphaToCoverage===!1,alphaMap:gt,alphaTest:Ot,alphaHash:Pt,combine:w.combine,mapUv:_e&&M(w.map.channel),aoMapUv:V&&M(w.aoMap.channel),lightMapUv:rn&&M(w.lightMap.channel),bumpMapUv:de&&M(w.bumpMap.channel),normalMapUv:J&&M(w.normalMap.channel),displacementMapUv:kt&&M(w.displacementMap.channel),emissiveMapUv:we&&M(w.emissiveMap.channel),metalnessMapUv:Yt&&M(w.metalnessMap.channel),roughnessMapUv:B&&M(w.roughnessMap.channel),anisotropyMapUv:Dt&&M(w.anisotropyMap.channel),clearcoatMapUv:Ut&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:ve&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:te&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&M(w.sheenRoughnessMap.channel),specularMapUv:ge&&M(w.specularMap.channel),specularColorMapUv:ae&&M(w.specularColorMap.channel),specularIntensityMapUv:Be&&M(w.specularIntensityMap.channel),transmissionMapUv:k&&M(w.transmissionMap.channel),thicknessMapUv:Nt&&M(w.thicknessMap.channel),alphaMapUv:gt&&M(w.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(J||U),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!at.attributes.uv&&(_e||gt),fog:!!lt,useFog:w.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:At,skinning:tt.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:pt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ie,decodeVideoTexture:_e&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===fn,decodeVideoTextureEmissive:we&&w.emissiveMap.isVideoTexture===!0&&Je.getTransfer(w.emissiveMap.colorSpace)===fn,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ga,flipSided:w.side===qi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:le&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&w.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return _n.vertexUv1s=p.has(1),_n.vertexUv2s=p.has(2),_n.vertexUv3s=p.has(3),p.clear(),_n}function S(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)R.push(H),R.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(L(R,w),D(R,w),R.push(s.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function L(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function D(w,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),w.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),w.push(f.mask)}function A(w){const R=E[w.type];let H;if(R){const Y=oa[R];H=Id.clone(Y.uniforms)}else H=w.uniforms;return H}function P(w,R){let H;for(let Y=0,tt=m.length;Y<tt;Y++){const lt=m[Y];if(lt.cacheKey===R){H=lt,++H.usedTimes;break}}return H===void 0&&(H=new vL(s,R,w,l),m.push(H)),H}function z(w){if(--w.usedTimes===0){const R=m.indexOf(w);m[R]=m[m.length-1],m.pop(),w.destroy()}}function C(w){h.remove(w)}function F(){h.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:A,acquireProgram:P,releaseProgram:z,releaseShaderCache:C,programs:m,dispose:F}}function EL(){let s=new WeakMap;function t(c){return s.has(c)}function e(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function i(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:t,get:e,remove:i,update:a,dispose:l}}function TL(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function p1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function m1(){const s=[];let t=0;const e=[],i=[],a=[];function l(){t=0,e.length=0,i.length=0,a.length=0}function c(g,x,v,E,M,y){let S=s[t];return S===void 0?(S={id:g.id,object:g,geometry:x,material:v,groupOrder:E,renderOrder:g.renderOrder,z:M,group:y},s[t]=S):(S.id=g.id,S.object=g,S.geometry=x,S.material=v,S.groupOrder=E,S.renderOrder=g.renderOrder,S.z=M,S.group=y),t++,S}function f(g,x,v,E,M,y){const S=c(g,x,v,E,M,y);v.transmission>0?i.push(S):v.transparent===!0?a.push(S):e.push(S)}function h(g,x,v,E,M,y){const S=c(g,x,v,E,M,y);v.transmission>0?i.unshift(S):v.transparent===!0?a.unshift(S):e.unshift(S)}function p(g,x){e.length>1&&e.sort(g||TL),i.length>1&&i.sort(x||p1),a.length>1&&a.sort(x||p1)}function m(){for(let g=t,x=s.length;g<x;g++){const v=s[g];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:e,transmissive:i,transparent:a,init:l,push:f,unshift:h,finish:m,sort:p}}function bL(){let s=new WeakMap;function t(i,a){const l=s.get(i);let c;return l===void 0?(c=new m1,s.set(i,[c])):a>=l.length?(c=new m1,l.push(c)):c=l[a],c}function e(){s=new WeakMap}return{get:t,dispose:e}}function AL(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new ct,color:new je};break;case"SpotLight":e={position:new ct,direction:new ct,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ct,color:new je,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ct,skyColor:new je,groundColor:new je};break;case"RectAreaLight":e={color:new je,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return s[t.id]=e,e}}}function RL(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let wL=0;function CL(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function DL(s){const t=new AL,e=RL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)i.probe.push(new ct);const a=new ct,l=new Fn,c=new Fn;function f(p){let m=0,g=0,x=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let v=0,E=0,M=0,y=0,S=0,L=0,D=0,A=0,P=0,z=0,C=0;p.sort(CL);for(let w=0,R=p.length;w<R;w++){const H=p[w],Y=H.color,tt=H.intensity,lt=H.distance,at=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=Y.r*tt,g+=Y.g*tt,x+=Y.b*tt;else if(H.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(H.sh.coefficients[I],tt);C++}else if(H.isDirectionalLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const X=H.shadow,W=e.get(H);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.directionalShadow[v]=W,i.directionalShadowMap[v]=at,i.directionalShadowMatrix[v]=H.shadow.matrix,L++}i.directional[v]=I,v++}else if(H.isSpotLight){const I=t.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(Y).multiplyScalar(tt),I.distance=lt,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,i.spot[M]=I;const X=H.shadow;if(H.map&&(i.spotLightMap[P]=H.map,P++,X.updateMatrices(H),H.castShadow&&z++),i.spotLightMatrix[M]=X.matrix,H.castShadow){const W=e.get(H);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.spotShadow[M]=W,i.spotShadowMap[M]=at,A++}M++}else if(H.isRectAreaLight){const I=t.get(H);I.color.copy(Y).multiplyScalar(tt),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),i.rectArea[y]=I,y++}else if(H.isPointLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const X=H.shadow,W=e.get(H);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,i.pointShadow[E]=W,i.pointShadowMap[E]=at,i.pointShadowMatrix[E]=H.shadow.matrix,D++}i.point[E]=I,E++}else if(H.isHemisphereLight){const I=t.get(H);I.skyColor.copy(H.color).multiplyScalar(tt),I.groundColor.copy(H.groundColor).multiplyScalar(tt),i.hemi[S]=I,S++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ht.LTC_FLOAT_1,i.rectAreaLTC2=Ht.LTC_FLOAT_2):(i.rectAreaLTC1=Ht.LTC_HALF_1,i.rectAreaLTC2=Ht.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=x;const F=i.hash;(F.directionalLength!==v||F.pointLength!==E||F.spotLength!==M||F.rectAreaLength!==y||F.hemiLength!==S||F.numDirectionalShadows!==L||F.numPointShadows!==D||F.numSpotShadows!==A||F.numSpotMaps!==P||F.numLightProbes!==C)&&(i.directional.length=v,i.spot.length=M,i.rectArea.length=y,i.point.length=E,i.hemi.length=S,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=A+P-z,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=C,F.directionalLength=v,F.pointLength=E,F.spotLength=M,F.rectAreaLength=y,F.hemiLength=S,F.numDirectionalShadows=L,F.numPointShadows=D,F.numSpotShadows=A,F.numSpotMaps=P,F.numLightProbes=C,i.version=wL++)}function h(p,m){let g=0,x=0,v=0,E=0,M=0;const y=m.matrixWorldInverse;for(let S=0,L=p.length;S<L;S++){const D=p[S];if(D.isDirectionalLight){const A=i.directional[g];A.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(y),g++}else if(D.isSpotLight){const A=i.spot[v];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(y),v++}else if(D.isRectAreaLight){const A=i.rectArea[E];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(y),c.identity(),l.copy(D.matrixWorld),l.premultiply(y),c.extractRotation(l),A.halfWidth.set(D.width*.5,0,0),A.halfHeight.set(0,D.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const A=i.point[x];A.position.setFromMatrixPosition(D.matrixWorld),A.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const A=i.hemi[M];A.direction.setFromMatrixPosition(D.matrixWorld),A.direction.transformDirection(y),M++}}}return{setup:f,setupView:h,state:i}}function _1(s){const t=new DL(s),e=[],i=[];function a(m){p.camera=m,e.length=0,i.length=0}function l(m){e.push(m)}function c(m){i.push(m)}function f(){t.setup(e)}function h(m){t.setupView(e,m)}const p={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function UL(s){let t=new WeakMap;function e(a,l=0){const c=t.get(a);let f;return c===void 0?(f=new _1(s),t.set(a,[f])):l>=c.length?(f=new _1(s),c.push(f)):f=c[l],f}function i(){t=new WeakMap}return{get:e,dispose:i}}const LL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NL(s,t,e){let i=new ZE;const a=new Le,l=new Le,c=new Bn,f=new s2({depthPacking:yC}),h=new o2,p={},m=e.maxTextureSize,g={[Gs]:qi,[qi]:Gs,[Ga]:Ga},x=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:LL,fragmentShader:OL}),v=x.clone();v.defines.HORIZONTAL_PASS=1;const E=new Mr;E.setAttribute("position",new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Pr(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bE;let S=this.type;this.render=function(z,C,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const w=s.getRenderTarget(),R=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(Ya),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const tt=S!==Ba&&this.type===Ba,lt=S===Ba&&this.type!==Ba;for(let at=0,I=z.length;at<I;at++){const X=z[at],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const ht=W.getFrameExtents();if(a.multiply(ht),l.copy(W.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/ht.x),a.x=l.x*ht.x,W.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/ht.y),a.y=l.y*ht.y,W.mapSize.y=l.y)),W.map===null||tt===!0||lt===!0){const Q=this.type!==Ba?{minFilter:Qr,magFilter:Qr}:{};W.map!==null&&W.map.dispose(),W.map=new Kr(a.x,a.y,Q),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const b=W.getViewportCount();for(let Q=0;Q<b;Q++){const pt=W.getViewport(Q);c.set(l.x*pt.x,l.y*pt.y,l.x*pt.z,l.y*pt.w),Y.viewport(c),W.updateMatrices(X,Q),i=W.getFrustum(),A(C,F,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===Ba&&L(W,F),W.needsUpdate=!1}S=this.type,y.needsUpdate=!1,s.setRenderTarget(w,R,H)};function L(z,C){const F=t.update(M);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,v.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,v.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Kr(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(C,null,F,x,M,null),v.uniforms.shadow_pass.value=z.mapPass.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(C,null,F,v,M,null)}function D(z,C,F,w){let R=null;const H=F.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)R=H;else if(R=F.isPointLight===!0?h:f,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const Y=R.uuid,tt=C.uuid;let lt=p[Y];lt===void 0&&(lt={},p[Y]=lt);let at=lt[tt];at===void 0&&(at=R.clone(),lt[tt]=at,C.addEventListener("dispose",P)),R=at}if(R.visible=C.visible,R.wireframe=C.wireframe,w===Ba?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:g[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,F.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Y=s.properties.get(R);Y.light=F}return R}function A(z,C,F,w,R){if(z.visible===!1)return;if(z.layers.test(C.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Ba)&&(!z.frustumCulled||i.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,z.matrixWorld);const tt=t.update(z),lt=z.material;if(Array.isArray(lt)){const at=tt.groups;for(let I=0,X=at.length;I<X;I++){const W=at[I],ht=lt[W.materialIndex];if(ht&&ht.visible){const b=D(z,ht,w,R);z.onBeforeShadow(s,z,C,F,tt,b,W),s.renderBufferDirect(F,null,tt,b,z,W),z.onAfterShadow(s,z,C,F,tt,b,W)}}}else if(lt.visible){const at=D(z,lt,w,R);z.onBeforeShadow(s,z,C,F,tt,at,null),s.renderBufferDirect(F,null,tt,at,z,null),z.onAfterShadow(s,z,C,F,tt,at,null)}}const Y=z.children;for(let tt=0,lt=Y.length;tt<lt;tt++)A(Y[tt],C,F,w,R)}function P(z){z.target.removeEventListener("dispose",P);for(const F in p){const w=p[F],R=z.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const PL={[Tg]:bg,[Ag]:Cg,[Rg]:Dg,[su]:wg,[bg]:Tg,[Cg]:Ag,[Dg]:Rg,[wg]:su};function zL(s,t){function e(){let k=!1;const Nt=new Bn;let ft=null;const gt=new Bn(0,0,0,0);return{setMask:function(Ot){ft!==Ot&&!k&&(s.colorMask(Ot,Ot,Ot,Ot),ft=Ot)},setLocked:function(Ot){k=Ot},setClear:function(Ot,Pt,le,Ie,_n){_n===!0&&(Ot*=Ie,Pt*=Ie,le*=Ie),Nt.set(Ot,Pt,le,Ie),gt.equals(Nt)===!1&&(s.clearColor(Ot,Pt,le,Ie),gt.copy(Nt))},reset:function(){k=!1,ft=null,gt.set(-1,0,0,0)}}}function i(){let k=!1,Nt=!1,ft=null,gt=null,Ot=null;return{setReversed:function(Pt){if(Nt!==Pt){const le=t.get("EXT_clip_control");Pt?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),Nt=Pt;const Ie=Ot;Ot=null,this.setClear(Ie)}},getReversed:function(){return Nt},setTest:function(Pt){Pt?Tt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(Pt){ft!==Pt&&!k&&(s.depthMask(Pt),ft=Pt)},setFunc:function(Pt){if(Nt&&(Pt=PL[Pt]),gt!==Pt){switch(Pt){case Tg:s.depthFunc(s.NEVER);break;case bg:s.depthFunc(s.ALWAYS);break;case Ag:s.depthFunc(s.LESS);break;case su:s.depthFunc(s.LEQUAL);break;case Rg:s.depthFunc(s.EQUAL);break;case wg:s.depthFunc(s.GEQUAL);break;case Cg:s.depthFunc(s.GREATER);break;case Dg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Pt}},setLocked:function(Pt){k=Pt},setClear:function(Pt){Ot!==Pt&&(Nt&&(Pt=1-Pt),s.clearDepth(Pt),Ot=Pt)},reset:function(){k=!1,ft=null,gt=null,Ot=null,Nt=!1}}}function a(){let k=!1,Nt=null,ft=null,gt=null,Ot=null,Pt=null,le=null,Ie=null,_n=null;return{setTest:function(Ft){k||(Ft?Tt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Ft){Nt!==Ft&&!k&&(s.stencilMask(Ft),Nt=Ft)},setFunc:function(Ft,Kt,fe){(ft!==Ft||gt!==Kt||Ot!==fe)&&(s.stencilFunc(Ft,Kt,fe),ft=Ft,gt=Kt,Ot=fe)},setOp:function(Ft,Kt,fe){(Pt!==Ft||le!==Kt||Ie!==fe)&&(s.stencilOp(Ft,Kt,fe),Pt=Ft,le=Kt,Ie=fe)},setLocked:function(Ft){k=Ft},setClear:function(Ft){_n!==Ft&&(s.clearStencil(Ft),_n=Ft)},reset:function(){k=!1,Nt=null,ft=null,gt=null,Ot=null,Pt=null,le=null,Ie=null,_n=null}}}const l=new e,c=new i,f=new a,h=new WeakMap,p=new WeakMap;let m={},g={},x=new WeakMap,v=[],E=null,M=!1,y=null,S=null,L=null,D=null,A=null,P=null,z=null,C=new je(0,0,0),F=0,w=!1,R=null,H=null,Y=null,tt=null,lt=null;const at=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,X=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),I=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),I=X>=2);let ht=null,b={};const Q=s.getParameter(s.SCISSOR_BOX),pt=s.getParameter(s.VIEWPORT),Mt=new Bn().fromArray(Q),Z=new Bn().fromArray(pt);function dt(k,Nt,ft,gt){const Ot=new Uint8Array(4),Pt=s.createTexture();s.bindTexture(k,Pt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let le=0;le<ft;le++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Nt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,Ot):s.texImage2D(Nt+le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ot);return Pt}const _t={};_t[s.TEXTURE_2D]=dt(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[s.TEXTURE_2D_ARRAY]=dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Tt(s.DEPTH_TEST),c.setFunc(su),de(!1),J(yM),Tt(s.CULL_FACE),V(Ya);function Tt(k){m[k]!==!0&&(s.enable(k),m[k]=!0)}function At(k){m[k]!==!1&&(s.disable(k),m[k]=!1)}function qt(k,Nt){return g[k]!==Nt?(s.bindFramebuffer(k,Nt),g[k]=Nt,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Nt),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Qt(k,Nt){let ft=v,gt=!1;if(k){ft=x.get(Nt),ft===void 0&&(ft=[],x.set(Nt,ft));const Ot=k.textures;if(ft.length!==Ot.length||ft[0]!==s.COLOR_ATTACHMENT0){for(let Pt=0,le=Ot.length;Pt<le;Pt++)ft[Pt]=s.COLOR_ATTACHMENT0+Pt;ft.length=Ot.length,gt=!0}}else ft[0]!==s.BACK&&(ft[0]=s.BACK,gt=!0);gt&&s.drawBuffers(ft)}function _e(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const oe={[Mo]:s.FUNC_ADD,[Yw]:s.FUNC_SUBTRACT,[qw]:s.FUNC_REVERSE_SUBTRACT};oe[jw]=s.MIN,oe[Zw]=s.MAX;const Vt={[Qw]:s.ZERO,[Kw]:s.ONE,[Jw]:s.SRC_COLOR,[Mg]:s.SRC_ALPHA,[rC]:s.SRC_ALPHA_SATURATE,[nC]:s.DST_COLOR,[tC]:s.DST_ALPHA,[$w]:s.ONE_MINUS_SRC_COLOR,[Eg]:s.ONE_MINUS_SRC_ALPHA,[iC]:s.ONE_MINUS_DST_COLOR,[eC]:s.ONE_MINUS_DST_ALPHA,[aC]:s.CONSTANT_COLOR,[sC]:s.ONE_MINUS_CONSTANT_COLOR,[oC]:s.CONSTANT_ALPHA,[lC]:s.ONE_MINUS_CONSTANT_ALPHA};function V(k,Nt,ft,gt,Ot,Pt,le,Ie,_n,Ft){if(k===Ya){M===!0&&(At(s.BLEND),M=!1);return}if(M===!1&&(Tt(s.BLEND),M=!0),k!==Ww){if(k!==y||Ft!==w){if((S!==Mo||A!==Mo)&&(s.blendEquation(s.FUNC_ADD),S=Mo,A=Mo),Ft)switch(k){case Yl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sg:s.blendFunc(s.ONE,s.ONE);break;case SM:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case MM:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Yl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sg:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case SM:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case MM:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}L=null,D=null,P=null,z=null,C.set(0,0,0),F=0,y=k,w=Ft}return}Ot=Ot||Nt,Pt=Pt||ft,le=le||gt,(Nt!==S||Ot!==A)&&(s.blendEquationSeparate(oe[Nt],oe[Ot]),S=Nt,A=Ot),(ft!==L||gt!==D||Pt!==P||le!==z)&&(s.blendFuncSeparate(Vt[ft],Vt[gt],Vt[Pt],Vt[le]),L=ft,D=gt,P=Pt,z=le),(Ie.equals(C)===!1||_n!==F)&&(s.blendColor(Ie.r,Ie.g,Ie.b,_n),C.copy(Ie),F=_n),y=k,w=!1}function rn(k,Nt){k.side===Ga?At(s.CULL_FACE):Tt(s.CULL_FACE);let ft=k.side===qi;Nt&&(ft=!ft),de(ft),k.blending===Yl&&k.transparent===!1?V(Ya):V(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),l.setMask(k.colorWrite);const gt=k.stencilWrite;f.setTest(gt),gt&&(f.setMask(k.stencilWriteMask),f.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),f.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),we(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Tt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function de(k){R!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),R=k)}function J(k){k!==Vw?(Tt(s.CULL_FACE),k!==H&&(k===yM?s.cullFace(s.BACK):k===kw?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),H=k}function kt(k){k!==Y&&(I&&s.lineWidth(k),Y=k)}function we(k,Nt,ft){k?(Tt(s.POLYGON_OFFSET_FILL),(tt!==Nt||lt!==ft)&&(s.polygonOffset(Nt,ft),tt=Nt,lt=ft)):At(s.POLYGON_OFFSET_FILL)}function Yt(k){k?Tt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function B(k){k===void 0&&(k=s.TEXTURE0+at-1),ht!==k&&(s.activeTexture(k),ht=k)}function U(k,Nt,ft){ft===void 0&&(ht===null?ft=s.TEXTURE0+at-1:ft=ht);let gt=b[ft];gt===void 0&&(gt={type:void 0,texture:void 0},b[ft]=gt),(gt.type!==k||gt.texture!==Nt)&&(ht!==ft&&(s.activeTexture(ft),ht=ft),s.bindTexture(k,Nt||_t[k]),gt.type=k,gt.texture=Nt)}function nt(){const k=b[ht];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function St(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ut(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ve(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function te(k){Mt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Mt.copy(k))}function Bt(k){Z.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Z.copy(k))}function ge(k,Nt){let ft=p.get(Nt);ft===void 0&&(ft=new WeakMap,p.set(Nt,ft));let gt=ft.get(k);gt===void 0&&(gt=s.getUniformBlockIndex(Nt,k.name),ft.set(k,gt))}function ae(k,Nt){const gt=p.get(Nt).get(k);h.get(Nt)!==gt&&(s.uniformBlockBinding(Nt,gt,k.__bindingPointIndex),h.set(Nt,gt))}function Be(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},ht=null,b={},g={},x=new WeakMap,v=[],E=null,M=!1,y=null,S=null,L=null,D=null,A=null,P=null,z=null,C=new je(0,0,0),F=0,w=!1,R=null,H=null,Y=null,tt=null,lt=null,Mt.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Tt,disable:At,bindFramebuffer:qt,drawBuffers:Qt,useProgram:_e,setBlending:V,setMaterial:rn,setFlipSided:de,setCullFace:J,setLineWidth:kt,setPolygonOffset:we,setScissorTest:Yt,activeTexture:B,bindTexture:U,unbindTexture:nt,compressedTexImage2D:St,compressedTexImage3D:xt,texImage2D:Lt,texImage3D:ie,updateUBOMapping:ge,uniformBlockBinding:ae,texStorage2D:ve,texStorage3D:Rt,texSubImage2D:mt,texSubImage3D:Ct,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Ut,scissor:te,viewport:Bt,reset:Be}}function BL(s,t,e,i,a,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Le,m=new WeakMap;let g;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,U){return v?new OffscreenCanvas(B,U):Bd("canvas")}function M(B,U,nt){let St=1;const xt=Yt(B);if((xt.width>nt||xt.height>nt)&&(St=nt/Math.max(xt.width,xt.height)),St<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const mt=Math.floor(St*xt.width),Ct=Math.floor(St*xt.height);g===void 0&&(g=E(mt,Ct));const Dt=U?E(mt,Ct):g;return Dt.width=mt,Dt.height=Ct,Dt.getContext("2d").drawImage(B,0,0,mt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+mt+"x"+Ct+")."),Dt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),B;return B}function y(B){return B.generateMipmaps}function S(B){s.generateMipmap(B)}function L(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(B,U,nt,St,xt=!1){if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let mt=U;if(U===s.RED&&(nt===s.FLOAT&&(mt=s.R32F),nt===s.HALF_FLOAT&&(mt=s.R16F),nt===s.UNSIGNED_BYTE&&(mt=s.R8)),U===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(mt=s.R8UI),nt===s.UNSIGNED_SHORT&&(mt=s.R16UI),nt===s.UNSIGNED_INT&&(mt=s.R32UI),nt===s.BYTE&&(mt=s.R8I),nt===s.SHORT&&(mt=s.R16I),nt===s.INT&&(mt=s.R32I)),U===s.RG&&(nt===s.FLOAT&&(mt=s.RG32F),nt===s.HALF_FLOAT&&(mt=s.RG16F),nt===s.UNSIGNED_BYTE&&(mt=s.RG8)),U===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(mt=s.RG8UI),nt===s.UNSIGNED_SHORT&&(mt=s.RG16UI),nt===s.UNSIGNED_INT&&(mt=s.RG32UI),nt===s.BYTE&&(mt=s.RG8I),nt===s.SHORT&&(mt=s.RG16I),nt===s.INT&&(mt=s.RG32I)),U===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(mt=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(mt=s.RGB16UI),nt===s.UNSIGNED_INT&&(mt=s.RGB32UI),nt===s.BYTE&&(mt=s.RGB8I),nt===s.SHORT&&(mt=s.RGB16I),nt===s.INT&&(mt=s.RGB32I)),U===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(mt=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(mt=s.RGBA16UI),nt===s.UNSIGNED_INT&&(mt=s.RGBA32UI),nt===s.BYTE&&(mt=s.RGBA8I),nt===s.SHORT&&(mt=s.RGBA16I),nt===s.INT&&(mt=s.RGBA32I)),U===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(mt=s.RGB9_E5),U===s.RGBA){const Ct=xt?Pd:Je.getTransfer(St);nt===s.FLOAT&&(mt=s.RGBA32F),nt===s.HALF_FLOAT&&(mt=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(mt=Ct===fn?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(mt=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(mt=s.RGB5_A1)}return(mt===s.R16F||mt===s.R32F||mt===s.RG16F||mt===s.RG32F||mt===s.RGBA16F||mt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function A(B,U){let nt;return B?U===null||U===Io||U===Zc?nt=s.DEPTH24_STENCIL8:U===ka?nt=s.DEPTH32F_STENCIL8:U===jc&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):U===null||U===Io||U===Zc?nt=s.DEPTH_COMPONENT24:U===ka?nt=s.DEPTH_COMPONENT32F:U===jc&&(nt=s.DEPTH_COMPONENT16),nt}function P(B,U){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==Qr&&B.minFilter!==ua?Math.log2(Math.max(U.width,U.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?U.mipmaps.length:1}function z(B){const U=B.target;U.removeEventListener("dispose",z),F(U),U.isVideoTexture&&m.delete(U)}function C(B){const U=B.target;U.removeEventListener("dispose",C),R(U)}function F(B){const U=i.get(B);if(U.__webglInit===void 0)return;const nt=B.source,St=x.get(nt);if(St){const xt=St[U.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&w(B),Object.keys(St).length===0&&x.delete(nt)}i.remove(B)}function w(B){const U=i.get(B);s.deleteTexture(U.__webglTexture);const nt=B.source,St=x.get(nt);delete St[U.__cacheKey],c.memory.textures--}function R(B){const U=i.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),i.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(U.__webglFramebuffer[St]))for(let xt=0;xt<U.__webglFramebuffer[St].length;xt++)s.deleteFramebuffer(U.__webglFramebuffer[St][xt]);else s.deleteFramebuffer(U.__webglFramebuffer[St]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[St])}else{if(Array.isArray(U.__webglFramebuffer))for(let St=0;St<U.__webglFramebuffer.length;St++)s.deleteFramebuffer(U.__webglFramebuffer[St]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let St=0;St<U.__webglColorRenderbuffer.length;St++)U.__webglColorRenderbuffer[St]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[St]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}const nt=B.textures;for(let St=0,xt=nt.length;St<xt;St++){const mt=i.get(nt[St]);mt.__webglTexture&&(s.deleteTexture(mt.__webglTexture),c.memory.textures--),i.remove(nt[St])}i.remove(B)}let H=0;function Y(){H=0}function tt(){const B=H;return B>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+a.maxTextures),H+=1,B}function lt(B){const U=[];return U.push(B.wrapS),U.push(B.wrapT),U.push(B.wrapR||0),U.push(B.magFilter),U.push(B.minFilter),U.push(B.anisotropy),U.push(B.internalFormat),U.push(B.format),U.push(B.type),U.push(B.generateMipmaps),U.push(B.premultiplyAlpha),U.push(B.flipY),U.push(B.unpackAlignment),U.push(B.colorSpace),U.join()}function at(B,U){const nt=i.get(B);if(B.isVideoTexture&&kt(B),B.isRenderTargetTexture===!1&&B.version>0&&nt.__version!==B.version){const St=B.image;if(St===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(nt,B,U);return}}e.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+U)}function I(B,U){const nt=i.get(B);if(B.version>0&&nt.__version!==B.version){Z(nt,B,U);return}e.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+U)}function X(B,U){const nt=i.get(B);if(B.version>0&&nt.__version!==B.version){Z(nt,B,U);return}e.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+U)}function W(B,U){const nt=i.get(B);if(B.version>0&&nt.__version!==B.version){dt(nt,B,U);return}e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+U)}const ht={[Og]:s.REPEAT,[bo]:s.CLAMP_TO_EDGE,[Ng]:s.MIRRORED_REPEAT},b={[Qr]:s.NEAREST,[vC]:s.NEAREST_MIPMAP_NEAREST,[Ah]:s.NEAREST_MIPMAP_LINEAR,[ua]:s.LINEAR,[E_]:s.LINEAR_MIPMAP_NEAREST,[Ao]:s.LINEAR_MIPMAP_LINEAR},Q={[EC]:s.NEVER,[CC]:s.ALWAYS,[TC]:s.LESS,[IE]:s.LEQUAL,[bC]:s.EQUAL,[wC]:s.GEQUAL,[AC]:s.GREATER,[RC]:s.NOTEQUAL};function pt(B,U){if(U.type===ka&&t.has("OES_texture_float_linear")===!1&&(U.magFilter===ua||U.magFilter===E_||U.magFilter===Ah||U.magFilter===Ao||U.minFilter===ua||U.minFilter===E_||U.minFilter===Ah||U.minFilter===Ao)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,ht[U.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,ht[U.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,ht[U.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,b[U.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,b[U.minFilter]),U.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,Q[U.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(U.magFilter===Qr||U.minFilter!==Ah&&U.minFilter!==Ao||U.type===ka&&t.has("OES_texture_float_linear")===!1)return;if(U.anisotropy>1||i.get(U).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(B,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,a.getMaxAnisotropy())),i.get(U).__currentAnisotropy=U.anisotropy}}}function Mt(B,U){let nt=!1;B.__webglInit===void 0&&(B.__webglInit=!0,U.addEventListener("dispose",z));const St=U.source;let xt=x.get(St);xt===void 0&&(xt={},x.set(St,xt));const mt=lt(U);if(mt!==B.__cacheKey){xt[mt]===void 0&&(xt[mt]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,nt=!0),xt[mt].usedTimes++;const Ct=xt[B.__cacheKey];Ct!==void 0&&(xt[B.__cacheKey].usedTimes--,Ct.usedTimes===0&&w(U)),B.__cacheKey=mt,B.__webglTexture=xt[mt].texture}return nt}function Z(B,U,nt){let St=s.TEXTURE_2D;(U.isDataArrayTexture||U.isCompressedArrayTexture)&&(St=s.TEXTURE_2D_ARRAY),U.isData3DTexture&&(St=s.TEXTURE_3D);const xt=Mt(B,U),mt=U.source;e.bindTexture(St,B.__webglTexture,s.TEXTURE0+nt);const Ct=i.get(mt);if(mt.version!==Ct.__version||xt===!0){e.activeTexture(s.TEXTURE0+nt);const Dt=Je.getPrimaries(Je.workingColorSpace),Ut=U.colorSpace===Us?null:Je.getPrimaries(U.colorSpace),ve=U.colorSpace===Us||Dt===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,U.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,U.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Rt=M(U.image,!1,a.maxTextureSize);Rt=we(U,Rt);const Lt=l.convert(U.format,U.colorSpace),ie=l.convert(U.type);let te=D(U.internalFormat,Lt,ie,U.colorSpace,U.isVideoTexture);pt(St,U);let Bt;const ge=U.mipmaps,ae=U.isVideoTexture!==!0,Be=Ct.__version===void 0||xt===!0,k=mt.dataReady,Nt=P(U,Rt);if(U.isDepthTexture)te=A(U.format===Kc,U.type),Be&&(ae?e.texStorage2D(s.TEXTURE_2D,1,te,Rt.width,Rt.height):e.texImage2D(s.TEXTURE_2D,0,te,Rt.width,Rt.height,0,Lt,ie,null));else if(U.isDataTexture)if(ge.length>0){ae&&Be&&e.texStorage2D(s.TEXTURE_2D,Nt,te,ge[0].width,ge[0].height);for(let ft=0,gt=ge.length;ft<gt;ft++)Bt=ge[ft],ae?k&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Bt.width,Bt.height,Lt,ie,Bt.data):e.texImage2D(s.TEXTURE_2D,ft,te,Bt.width,Bt.height,0,Lt,ie,Bt.data);U.generateMipmaps=!1}else ae?(Be&&e.texStorage2D(s.TEXTURE_2D,Nt,te,Rt.width,Rt.height),k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt.width,Rt.height,Lt,ie,Rt.data)):e.texImage2D(s.TEXTURE_2D,0,te,Rt.width,Rt.height,0,Lt,ie,Rt.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){ae&&Be&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Nt,te,ge[0].width,ge[0].height,Rt.depth);for(let ft=0,gt=ge.length;ft<gt;ft++)if(Bt=ge[ft],U.format!==jr)if(Lt!==null)if(ae){if(k)if(U.layerUpdates.size>0){const Ot=YM(Bt.width,Bt.height,U.format,U.type);for(const Pt of U.layerUpdates){const le=Bt.data.subarray(Pt*Ot/Bt.data.BYTES_PER_ELEMENT,(Pt+1)*Ot/Bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,Pt,Bt.width,Bt.height,1,Lt,le)}U.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,Bt.width,Bt.height,Rt.depth,Lt,Bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ft,te,Bt.width,Bt.height,Rt.depth,0,Bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ft,0,0,0,Bt.width,Bt.height,Rt.depth,Lt,ie,Bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ft,te,Bt.width,Bt.height,Rt.depth,0,Lt,ie,Bt.data)}else{ae&&Be&&e.texStorage2D(s.TEXTURE_2D,Nt,te,ge[0].width,ge[0].height);for(let ft=0,gt=ge.length;ft<gt;ft++)Bt=ge[ft],U.format!==jr?Lt!==null?ae?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,ft,0,0,Bt.width,Bt.height,Lt,Bt.data):e.compressedTexImage2D(s.TEXTURE_2D,ft,te,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?k&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Bt.width,Bt.height,Lt,ie,Bt.data):e.texImage2D(s.TEXTURE_2D,ft,te,Bt.width,Bt.height,0,Lt,ie,Bt.data)}else if(U.isDataArrayTexture)if(ae){if(Be&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Nt,te,Rt.width,Rt.height,Rt.depth),k)if(U.layerUpdates.size>0){const ft=YM(Rt.width,Rt.height,U.format,U.type);for(const gt of U.layerUpdates){const Ot=Rt.data.subarray(gt*ft/Rt.data.BYTES_PER_ELEMENT,(gt+1)*ft/Rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,Rt.width,Rt.height,1,Lt,ie,Ot)}U.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Lt,ie,Rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,te,Rt.width,Rt.height,Rt.depth,0,Lt,ie,Rt.data);else if(U.isData3DTexture)ae?(Be&&e.texStorage3D(s.TEXTURE_3D,Nt,te,Rt.width,Rt.height,Rt.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Lt,ie,Rt.data)):e.texImage3D(s.TEXTURE_3D,0,te,Rt.width,Rt.height,Rt.depth,0,Lt,ie,Rt.data);else if(U.isFramebufferTexture){if(Be)if(ae)e.texStorage2D(s.TEXTURE_2D,Nt,te,Rt.width,Rt.height);else{let ft=Rt.width,gt=Rt.height;for(let Ot=0;Ot<Nt;Ot++)e.texImage2D(s.TEXTURE_2D,Ot,te,ft,gt,0,Lt,ie,null),ft>>=1,gt>>=1}}else if(ge.length>0){if(ae&&Be){const ft=Yt(ge[0]);e.texStorage2D(s.TEXTURE_2D,Nt,te,ft.width,ft.height)}for(let ft=0,gt=ge.length;ft<gt;ft++)Bt=ge[ft],ae?k&&e.texSubImage2D(s.TEXTURE_2D,ft,0,0,Lt,ie,Bt):e.texImage2D(s.TEXTURE_2D,ft,te,Lt,ie,Bt);U.generateMipmaps=!1}else if(ae){if(Be){const ft=Yt(Rt);e.texStorage2D(s.TEXTURE_2D,Nt,te,ft.width,ft.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Lt,ie,Rt)}else e.texImage2D(s.TEXTURE_2D,0,te,Lt,ie,Rt);y(U)&&S(St),Ct.__version=mt.version,U.onUpdate&&U.onUpdate(U)}B.__version=U.version}function dt(B,U,nt){if(U.image.length!==6)return;const St=Mt(B,U),xt=U.source;e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+nt);const mt=i.get(xt);if(xt.version!==mt.__version||St===!0){e.activeTexture(s.TEXTURE0+nt);const Ct=Je.getPrimaries(Je.workingColorSpace),Dt=U.colorSpace===Us?null:Je.getPrimaries(U.colorSpace),Ut=U.colorSpace===Us||Ct===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,U.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,U.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const ve=U.isCompressedTexture||U.image[0].isCompressedTexture,Rt=U.image[0]&&U.image[0].isDataTexture,Lt=[];for(let gt=0;gt<6;gt++)!ve&&!Rt?Lt[gt]=M(U.image[gt],!0,a.maxCubemapSize):Lt[gt]=Rt?U.image[gt].image:U.image[gt],Lt[gt]=we(U,Lt[gt]);const ie=Lt[0],te=l.convert(U.format,U.colorSpace),Bt=l.convert(U.type),ge=D(U.internalFormat,te,Bt,U.colorSpace),ae=U.isVideoTexture!==!0,Be=mt.__version===void 0||St===!0,k=xt.dataReady;let Nt=P(U,ie);pt(s.TEXTURE_CUBE_MAP,U);let ft;if(ve){ae&&Be&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,ge,ie.width,ie.height);for(let gt=0;gt<6;gt++){ft=Lt[gt].mipmaps;for(let Ot=0;Ot<ft.length;Ot++){const Pt=ft[Ot];U.format!==jr?te!==null?ae?k&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot,0,0,Pt.width,Pt.height,te,Pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot,ge,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot,0,0,Pt.width,Pt.height,te,Bt,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot,ge,Pt.width,Pt.height,0,te,Bt,Pt.data)}}}else{if(ft=U.mipmaps,ae&&Be){ft.length>0&&Nt++;const gt=Yt(Lt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,ge,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Rt){ae?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Lt[gt].width,Lt[gt].height,te,Bt,Lt[gt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ge,Lt[gt].width,Lt[gt].height,0,te,Bt,Lt[gt].data);for(let Ot=0;Ot<ft.length;Ot++){const le=ft[Ot].image[gt].image;ae?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot+1,0,0,le.width,le.height,te,Bt,le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot+1,ge,le.width,le.height,0,te,Bt,le.data)}}else{ae?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,te,Bt,Lt[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ge,te,Bt,Lt[gt]);for(let Ot=0;Ot<ft.length;Ot++){const Pt=ft[Ot];ae?k&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot+1,0,0,te,Bt,Pt.image[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ot+1,ge,te,Bt,Pt.image[gt])}}}y(U)&&S(s.TEXTURE_CUBE_MAP),mt.__version=xt.version,U.onUpdate&&U.onUpdate(U)}B.__version=U.version}function _t(B,U,nt,St,xt,mt){const Ct=l.convert(nt.format,nt.colorSpace),Dt=l.convert(nt.type),Ut=D(nt.internalFormat,Ct,Dt,nt.colorSpace),ve=i.get(U),Rt=i.get(nt);if(Rt.__renderTarget=U,!ve.__hasExternalTextures){const Lt=Math.max(1,U.width>>mt),ie=Math.max(1,U.height>>mt);xt===s.TEXTURE_3D||xt===s.TEXTURE_2D_ARRAY?e.texImage3D(xt,mt,Ut,Lt,ie,U.depth,0,Ct,Dt,null):e.texImage2D(xt,mt,Ut,Lt,ie,0,Ct,Dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,B),J(U)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,St,xt,Rt.__webglTexture,0,de(U)):(xt===s.TEXTURE_2D||xt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,St,xt,Rt.__webglTexture,mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(B,U,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,B),U.depthBuffer){const St=U.depthTexture,xt=St&&St.isDepthTexture?St.type:null,mt=A(U.stencilBuffer,xt),Ct=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=de(U);J(U)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,mt,U.width,U.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,mt,U.width,U.height):s.renderbufferStorage(s.RENDERBUFFER,mt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,B)}else{const St=U.textures;for(let xt=0;xt<St.length;xt++){const mt=St[xt],Ct=l.convert(mt.format,mt.colorSpace),Dt=l.convert(mt.type),Ut=D(mt.internalFormat,Ct,Dt,mt.colorSpace),ve=de(U);nt&&J(U)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,Ut,U.width,U.height):J(U)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,Ut,U.width,U.height):s.renderbufferStorage(s.RENDERBUFFER,Ut,U.width,U.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(B,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,B),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=i.get(U.depthTexture);St.__renderTarget=U,(!St.__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)&&(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),at(U.depthTexture,0);const xt=St.__webglTexture,mt=de(U);if(U.depthTexture.format===Qc)J(U)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xt,0);else if(U.depthTexture.format===Kc)J(U)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function qt(B){const U=i.get(B),nt=B.isWebGLCubeRenderTarget===!0;if(U.__boundDepthTexture!==B.depthTexture){const St=B.depthTexture;if(U.__depthDisposeCallback&&U.__depthDisposeCallback(),St){const xt=()=>{delete U.__boundDepthTexture,delete U.__depthDisposeCallback,St.removeEventListener("dispose",xt)};St.addEventListener("dispose",xt),U.__depthDisposeCallback=xt}U.__boundDepthTexture=St}if(B.depthTexture&&!U.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");At(U.__webglFramebuffer,B)}else if(nt){U.__webglDepthbuffer=[];for(let St=0;St<6;St++)if(e.bindFramebuffer(s.FRAMEBUFFER,U.__webglFramebuffer[St]),U.__webglDepthbuffer[St]===void 0)U.__webglDepthbuffer[St]=s.createRenderbuffer(),Tt(U.__webglDepthbuffer[St],B,!1);else{const xt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=U.__webglDepthbuffer[St];s.bindRenderbuffer(s.RENDERBUFFER,mt),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,mt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer===void 0)U.__webglDepthbuffer=s.createRenderbuffer(),Tt(U.__webglDepthbuffer,B,!1);else{const St=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=U.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,xt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(B,U,nt){const St=i.get(B);U!==void 0&&_t(St.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&qt(B)}function _e(B){const U=B.texture,nt=i.get(B),St=i.get(U);B.addEventListener("dispose",C);const xt=B.textures,mt=B.isWebGLCubeRenderTarget===!0,Ct=xt.length>1;if(Ct||(St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture()),St.__version=U.version,c.memory.textures++),mt){nt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(U.mipmaps&&U.mipmaps.length>0){nt.__webglFramebuffer[Dt]=[];for(let Ut=0;Ut<U.mipmaps.length;Ut++)nt.__webglFramebuffer[Dt][Ut]=s.createFramebuffer()}else nt.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(U.mipmaps&&U.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Dt=0;Dt<U.mipmaps.length;Dt++)nt.__webglFramebuffer[Dt]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let Dt=0,Ut=xt.length;Dt<Ut;Dt++){const ve=i.get(xt[Dt]);ve.__webglTexture===void 0&&(ve.__webglTexture=s.createTexture(),c.memory.textures++)}if(B.samples>0&&J(B)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<xt.length;Dt++){const Ut=xt[Dt];nt.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt]);const ve=l.convert(Ut.format,Ut.colorSpace),Rt=l.convert(Ut.type),Lt=D(Ut.internalFormat,ve,Rt,Ut.colorSpace,B.isXRRenderTarget===!0),ie=de(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,Lt,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,nt.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt(nt.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){e.bindTexture(s.TEXTURE_CUBE_MAP,St.__webglTexture),pt(s.TEXTURE_CUBE_MAP,U);for(let Dt=0;Dt<6;Dt++)if(U.mipmaps&&U.mipmaps.length>0)for(let Ut=0;Ut<U.mipmaps.length;Ut++)_t(nt.__webglFramebuffer[Dt][Ut],B,U,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Ut);else _t(nt.__webglFramebuffer[Dt],B,U,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(U)&&S(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let Dt=0,Ut=xt.length;Dt<Ut;Dt++){const ve=xt[Dt],Rt=i.get(ve);e.bindTexture(s.TEXTURE_2D,Rt.__webglTexture),pt(s.TEXTURE_2D,ve),_t(nt.__webglFramebuffer,B,ve,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,0),y(ve)&&S(s.TEXTURE_2D)}e.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Dt=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Dt,St.__webglTexture),pt(Dt,U),U.mipmaps&&U.mipmaps.length>0)for(let Ut=0;Ut<U.mipmaps.length;Ut++)_t(nt.__webglFramebuffer[Ut],B,U,s.COLOR_ATTACHMENT0,Dt,Ut);else _t(nt.__webglFramebuffer,B,U,s.COLOR_ATTACHMENT0,Dt,0);y(U)&&S(Dt),e.unbindTexture()}B.depthBuffer&&qt(B)}function oe(B){const U=B.textures;for(let nt=0,St=U.length;nt<St;nt++){const xt=U[nt];if(y(xt)){const mt=L(B),Ct=i.get(xt).__webglTexture;e.bindTexture(mt,Ct),S(mt),e.unbindTexture()}}}const Vt=[],V=[];function rn(B){if(B.samples>0){if(J(B)===!1){const U=B.textures,nt=B.width,St=B.height;let xt=s.COLOR_BUFFER_BIT;const mt=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=i.get(B),Dt=U.length>1;if(Dt)for(let Ut=0;Ut<U.length;Ut++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Ut=0;Ut<U.length;Ut++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(xt|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(xt|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Ut]);const ve=i.get(U[Ut]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,nt,St,0,0,nt,St,xt,s.NEAREST),h===!0&&(Vt.length=0,V.length=0,Vt.push(s.COLOR_ATTACHMENT0+Ut),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Vt.push(mt),V.push(mt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let Ut=0;Ut<U.length;Ut++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[Ut]);const ve=i.get(U[Ut]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,ve,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&h){const U=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[U])}}}function de(B){return Math.min(a.maxSamples,B.samples)}function J(B){const U=i.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function kt(B){const U=c.render.frame;m.get(B)!==U&&(m.set(B,U),B.update())}function we(B,U){const nt=B.colorSpace,St=B.format,xt=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||nt!==uu&&nt!==Us&&(Je.getTransfer(nt)===fn?(St!==jr||xt!==Qa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),U}function Yt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=tt,this.resetTextureUnits=Y,this.setTexture2D=at,this.setTexture2DArray=I,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Qt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=J}function IL(s,t){function e(i,a=Us){let l;const c=Je.getTransfer(a);if(i===Qa)return s.UNSIGNED_BYTE;if(i===k0)return s.UNSIGNED_SHORT_4_4_4_4;if(i===X0)return s.UNSIGNED_SHORT_5_5_5_1;if(i===DE)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===wE)return s.BYTE;if(i===CE)return s.SHORT;if(i===jc)return s.UNSIGNED_SHORT;if(i===V0)return s.INT;if(i===Io)return s.UNSIGNED_INT;if(i===ka)return s.FLOAT;if(i===qa)return s.HALF_FLOAT;if(i===UE)return s.ALPHA;if(i===LE)return s.RGB;if(i===jr)return s.RGBA;if(i===OE)return s.LUMINANCE;if(i===NE)return s.LUMINANCE_ALPHA;if(i===Qc)return s.DEPTH_COMPONENT;if(i===Kc)return s.DEPTH_STENCIL;if(i===PE)return s.RED;if(i===W0)return s.RED_INTEGER;if(i===zE)return s.RG;if(i===Y0)return s.RG_INTEGER;if(i===q0)return s.RGBA_INTEGER;if(i===pd||i===md||i===_d||i===gd)if(c===fn)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===pd)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===md)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===_d)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===pd)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===md)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===_d)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gd)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pg||i===zg||i===Bg||i===Ig)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===Pg)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zg)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bg)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ig)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fg||i===Hg||i===Gg)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(i===Fg||i===Hg)return c===fn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===Gg)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vg||i===kg||i===Xg||i===Wg||i===Yg||i===qg||i===jg||i===Zg||i===Qg||i===Kg||i===Jg||i===$g||i===t0||i===e0)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(i===Vg)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kg)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xg)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wg)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yg)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qg)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jg)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zg)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qg)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kg)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jg)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$g)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===t0)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===e0)return c===fn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vd||i===n0||i===i0)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(i===vd)return c===fn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===n0)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===i0)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===BE||i===r0||i===a0||i===s0)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(i===vd)return l.COMPRESSED_RED_RGTC1_EXT;if(i===r0)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===a0)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===s0)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zc?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const FL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const a=new ji,l=t.properties.get(a);l.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Yi({vertexShader:FL,fragmentShader:HL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pr(new sp(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VL extends yu{constructor(t,e){super();const i=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,m=null,g=null,x=null,v=null,E=null;const M=new GL,y=e.getContextAttributes();let S=null,L=null;const D=[],A=[],P=new Le;let z=null;const C=new Ti;C.viewport=new Bn;const F=new Ti;F.viewport=new Bn;const w=[C,F],R=new l2;let H=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let dt=D[Z];return dt===void 0&&(dt=new W_,D[Z]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Z){let dt=D[Z];return dt===void 0&&(dt=new W_,D[Z]=dt),dt.getGripSpace()},this.getHand=function(Z){let dt=D[Z];return dt===void 0&&(dt=new W_,D[Z]=dt),dt.getHandSpace()};function tt(Z){const dt=A.indexOf(Z.inputSource);if(dt===-1)return;const _t=D[dt];_t!==void 0&&(_t.update(Z.inputSource,Z.frame,p||c),_t.dispatchEvent({type:Z.type,data:Z.inputSource}))}function lt(){a.removeEventListener("select",tt),a.removeEventListener("selectstart",tt),a.removeEventListener("selectend",tt),a.removeEventListener("squeeze",tt),a.removeEventListener("squeezestart",tt),a.removeEventListener("squeezeend",tt),a.removeEventListener("end",lt),a.removeEventListener("inputsourceschange",at);for(let Z=0;Z<D.length;Z++){const dt=A[Z];dt!==null&&(A[Z]=null,D[Z].disconnect(dt))}H=null,Y=null,M.reset(),t.setRenderTarget(S),v=null,x=null,g=null,a=null,L=null,Mt.stop(),i.isPresenting=!1,t.setPixelRatio(z),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){f=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return x!==null?x:v},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(S=t.getRenderTarget(),a.addEventListener("select",tt),a.addEventListener("selectstart",tt),a.addEventListener("selectend",tt),a.addEventListener("squeeze",tt),a.addEventListener("squeezestart",tt),a.addEventListener("squeezeend",tt),a.addEventListener("end",lt),a.addEventListener("inputsourceschange",at),y.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Tt=null,At=null;y.depth&&(At=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=y.stencil?Kc:Qc,Tt=y.stencil?Zc:Io);const qt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:l};g=new XRWebGLBinding(a,e),x=g.createProjectionLayer(qt),a.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),L=new Kr(x.textureWidth,x.textureHeight,{format:jr,type:Qa,depthTexture:new QE(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const _t={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};v=new XRWebGLLayer(a,e,_t),a.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),L=new Kr(v.framebufferWidth,v.framebufferHeight,{format:jr,type:Qa,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),Mt.setContext(a),Mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function at(Z){for(let dt=0;dt<Z.removed.length;dt++){const _t=Z.removed[dt],Tt=A.indexOf(_t);Tt>=0&&(A[Tt]=null,D[Tt].disconnect(_t))}for(let dt=0;dt<Z.added.length;dt++){const _t=Z.added[dt];let Tt=A.indexOf(_t);if(Tt===-1){for(let qt=0;qt<D.length;qt++)if(qt>=A.length){A.push(_t),Tt=qt;break}else if(A[qt]===null){A[qt]=_t,Tt=qt;break}if(Tt===-1)break}const At=D[Tt];At&&At.connect(_t)}}const I=new ct,X=new ct;function W(Z,dt,_t){I.setFromMatrixPosition(dt.matrixWorld),X.setFromMatrixPosition(_t.matrixWorld);const Tt=I.distanceTo(X),At=dt.projectionMatrix.elements,qt=_t.projectionMatrix.elements,Qt=At[14]/(At[10]-1),_e=At[14]/(At[10]+1),oe=(At[9]+1)/At[5],Vt=(At[9]-1)/At[5],V=(At[8]-1)/At[0],rn=(qt[8]+1)/qt[0],de=Qt*V,J=Qt*rn,kt=Tt/(-V+rn),we=kt*-V;if(dt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(we),Z.translateZ(kt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),At[10]===-1)Z.projectionMatrix.copy(dt.projectionMatrix),Z.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Yt=Qt+kt,B=_e+kt,U=de-we,nt=J+(Tt-we),St=oe*_e/B*Yt,xt=Vt*_e/B*Yt;Z.projectionMatrix.makePerspective(U,nt,St,xt,Yt,B),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ht(Z,dt){dt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(dt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let dt=Z.near,_t=Z.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(_t=M.depthFar)),R.near=F.near=C.near=dt,R.far=F.far=C.far=_t,(H!==R.near||Y!==R.far)&&(a.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,Y=R.far),C.layers.mask=Z.layers.mask|2,F.layers.mask=Z.layers.mask|4,R.layers.mask=C.layers.mask|F.layers.mask;const Tt=Z.parent,At=R.cameras;ht(R,Tt);for(let qt=0;qt<At.length;qt++)ht(At[qt],Tt);At.length===2?W(R,C,F):R.projectionMatrix.copy(C.projectionMatrix),b(Z,R,Tt)};function b(Z,dt,_t){_t===null?Z.matrix.copy(dt.matrixWorld):(Z.matrix.copy(_t.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(dt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(dt.projectionMatrix),Z.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=o0*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&v===null))return h},this.setFoveation=function(Z){h=Z,x!==null&&(x.fixedFoveation=Z),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(R)};let Q=null;function pt(Z,dt){if(m=dt.getViewerPose(p||c),E=dt,m!==null){const _t=m.views;v!==null&&(t.setRenderTargetFramebuffer(L,v.framebuffer),t.setRenderTarget(L));let Tt=!1;_t.length!==R.cameras.length&&(R.cameras.length=0,Tt=!0);for(let Qt=0;Qt<_t.length;Qt++){const _e=_t[Qt];let oe=null;if(v!==null)oe=v.getViewport(_e);else{const V=g.getViewSubImage(x,_e);oe=V.viewport,Qt===0&&(t.setRenderTargetTextures(L,V.colorTexture,V.depthStencilTexture),t.setRenderTarget(L))}let Vt=w[Qt];Vt===void 0&&(Vt=new Ti,Vt.layers.enable(Qt),Vt.viewport=new Bn,w[Qt]=Vt),Vt.matrix.fromArray(_e.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(_e.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(oe.x,oe.y,oe.width,oe.height),Qt===0&&(R.matrix.copy(Vt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Tt===!0&&R.cameras.push(Vt)}const At=a.enabledFeatures;if(At&&At.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){const Qt=g.getDepthInformation(_t[0]);Qt&&Qt.isValid&&Qt.texture&&M.init(t,Qt,a.renderState)}}for(let _t=0;_t<D.length;_t++){const Tt=A[_t],At=D[_t];Tt!==null&&At!==void 0&&At.update(Tt,dt,p||c)}Q&&Q(Z,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),E=null}const Mt=new JE;Mt.setAnimationLoop(pt),this.setAnimationLoop=function(Z){Q=Z},this.dispose=function(){}}}const po=new Ka,kL=new Fn;function XL(s,t){function e(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,YE(s)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function a(y,S,L,D,A){S.isMeshBasicMaterial||S.isMeshLambertMaterial?l(y,S):S.isMeshToonMaterial?(l(y,S),g(y,S)):S.isMeshPhongMaterial?(l(y,S),m(y,S)):S.isMeshStandardMaterial?(l(y,S),x(y,S),S.isMeshPhysicalMaterial&&v(y,S,A)):S.isMeshMatcapMaterial?(l(y,S),E(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),M(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?h(y,S,L,D):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,e(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,e(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,e(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===qi&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,e(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===qi&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,e(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,e(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,e(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const L=t.get(S),D=L.envMap,A=L.envMapRotation;D&&(y.envMap.value=D,po.copy(A),po.x*=-1,po.y*=-1,po.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(po.y*=-1,po.z*=-1),y.envMapRotation.value.setFromMatrix4(kL.makeRotationFromEuler(po)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,e(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,e(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,e(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function h(y,S,L,D){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*L,y.scale.value=D*.5,S.map&&(y.map.value=S.map,e(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,e(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,e(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,e(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function g(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function x(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,e(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,e(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function v(y,S,L){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,e(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,e(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,e(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,e(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,e(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===qi&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,e(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,e(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,e(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,e(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,e(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,e(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,e(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function M(y,S){const L=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function WL(s,t,e,i){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,D){const A=D.program;i.uniformBlockBinding(L,A)}function p(L,D){let A=a[L.id];A===void 0&&(E(L),A=m(L),a[L.id]=A,L.addEventListener("dispose",y));const P=D.program;i.updateUBOMapping(L,P);const z=t.render.frame;l[L.id]!==z&&(x(L),l[L.id]=z)}function m(L){const D=g();L.__bindingPointIndex=D;const A=s.createBuffer(),P=L.__size,z=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,P,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,A),A}function g(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const D=a[L.id],A=L.uniforms,P=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let z=0,C=A.length;z<C;z++){const F=Array.isArray(A[z])?A[z]:[A[z]];for(let w=0,R=F.length;w<R;w++){const H=F[w];if(v(H,z,w,P)===!0){const Y=H.__offset,tt=Array.isArray(H.value)?H.value:[H.value];let lt=0;for(let at=0;at<tt.length;at++){const I=tt[at],X=M(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,Y+lt,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,lt),lt+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(L,D,A,P){const z=L.value,C=D+"_"+A;if(P[C]===void 0)return typeof z=="number"||typeof z=="boolean"?P[C]=z:P[C]=z.clone(),!0;{const F=P[C];if(typeof z=="number"||typeof z=="boolean"){if(F!==z)return P[C]=z,!0}else if(F.equals(z)===!1)return F.copy(z),!0}return!1}function E(L){const D=L.uniforms;let A=0;const P=16;for(let C=0,F=D.length;C<F;C++){const w=Array.isArray(D[C])?D[C]:[D[C]];for(let R=0,H=w.length;R<H;R++){const Y=w[R],tt=Array.isArray(Y.value)?Y.value:[Y.value];for(let lt=0,at=tt.length;lt<at;lt++){const I=tt[lt],X=M(I),W=A%P,ht=W%X.boundary,b=W+ht;A+=ht,b!==0&&P-b<X.storage&&(A+=P-b),Y.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=A,A+=X.storage}}}const z=A%P;return z>0&&(A+=P-z),L.__size=A,L.__cache={},this}function M(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function y(L){const D=L.target;D.removeEventListener("dispose",y);const A=c.indexOf(D.__bindingPointIndex);c.splice(A,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function S(){for(const L in a)s.deleteBuffer(a[L]);c=[],a={},l={}}return{bind:h,update:p,dispose:S}}class mf{constructor(t={}){const{canvas:e=UC(),context:i=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=c;const E=new Uint32Array(4),M=new Int32Array(4);let y=null,S=null;const L=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1;this._outputColorSpace=Lr;let z=0,C=0,F=null,w=-1,R=null;const H=new Bn,Y=new Bn;let tt=null;const lt=new je(0);let at=0,I=e.width,X=e.height,W=1,ht=null,b=null;const Q=new Bn(0,0,I,X),pt=new Bn(0,0,I,X);let Mt=!1;const Z=new ZE;let dt=!1,_t=!1;const Tt=new Fn,At=new Fn,qt=new ct,Qt=new Bn,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function Vt(){return F===null?W:1}let V=i;function rn(N,K){return e.getContext(N,K)}try{const N={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${G0}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),V===null){const K="webgl2";if(V=rn(K,N),V===null)throw rn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let de,J,kt,we,Yt,B,U,nt,St,xt,mt,Ct,Dt,Ut,ve,Rt,Lt,ie,te,Bt,ge,ae,Be,k;function Nt(){de=new nU(V),de.init(),ae=new IL(V,de),J=new Z3(V,de,t,ae),kt=new zL(V,de),J.reverseDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),we=new aU(V),Yt=new EL,B=new BL(V,de,kt,Yt,J,ae,we),U=new K3(A),nt=new eU(A),St=new f2(V),Be=new q3(V,St),xt=new iU(V,St,we,Be),mt=new oU(V,xt,St,we),te=new sU(V,J,B),Rt=new Q3(Yt),Ct=new ML(A,U,nt,de,J,Be,Rt),Dt=new XL(A,Yt),Ut=new bL,ve=new UL(de),ie=new Y3(A,U,nt,kt,mt,v,h),Lt=new NL(A,mt,J),k=new WL(V,we,J,kt),Bt=new j3(V,de,we),ge=new rU(V,de,we),we.programs=Ct.programs,A.capabilities=J,A.extensions=de,A.properties=Yt,A.renderLists=Ut,A.shadowMap=Lt,A.state=kt,A.info=we}Nt();const ft=new VL(A,V);this.xr=ft,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const N=de.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=de.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(N){N!==void 0&&(W=N,this.setSize(I,X,!1))},this.getSize=function(N){return N.set(I,X)},this.setSize=function(N,K,ot=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=N,X=K,e.width=Math.floor(N*W),e.height=Math.floor(K*W),ot===!0&&(e.style.width=N+"px",e.style.height=K+"px"),this.setViewport(0,0,N,K)},this.getDrawingBufferSize=function(N){return N.set(I*W,X*W).floor()},this.setDrawingBufferSize=function(N,K,ot){I=N,X=K,W=ot,e.width=Math.floor(N*ot),e.height=Math.floor(K*ot),this.setViewport(0,0,N,K)},this.getCurrentViewport=function(N){return N.copy(H)},this.getViewport=function(N){return N.copy(Q)},this.setViewport=function(N,K,ot,it){N.isVector4?Q.set(N.x,N.y,N.z,N.w):Q.set(N,K,ot,it),kt.viewport(H.copy(Q).multiplyScalar(W).round())},this.getScissor=function(N){return N.copy(pt)},this.setScissor=function(N,K,ot,it){N.isVector4?pt.set(N.x,N.y,N.z,N.w):pt.set(N,K,ot,it),kt.scissor(Y.copy(pt).multiplyScalar(W).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(N){kt.setScissorTest(Mt=N)},this.setOpaqueSort=function(N){ht=N},this.setTransparentSort=function(N){b=N},this.getClearColor=function(N){return N.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(N=!0,K=!0,ot=!0){let it=0;if(N){let j=!1;if(F!==null){const bt=F.texture.format;j=bt===q0||bt===Y0||bt===W0}if(j){const bt=F.texture.type,zt=bt===Qa||bt===Io||bt===jc||bt===Zc||bt===k0||bt===X0,It=ie.getClearColor(),Gt=ie.getClearAlpha(),ee=It.r,ne=It.g,$t=It.b;zt?(E[0]=ee,E[1]=ne,E[2]=$t,E[3]=Gt,V.clearBufferuiv(V.COLOR,0,E)):(M[0]=ee,M[1]=ne,M[2]=$t,M[3]=Gt,V.clearBufferiv(V.COLOR,0,M))}else it|=V.COLOR_BUFFER_BIT}K&&(it|=V.DEPTH_BUFFER_BIT),ot&&(it|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),ie.dispose(),Ut.dispose(),ve.dispose(),Yt.dispose(),U.dispose(),nt.dispose(),mt.dispose(),Be.dispose(),k.dispose(),Ct.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",wt),ft.removeEventListener("sessionend",Jt),Wt.stop()};function gt(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const N=we.autoReset,K=Lt.enabled,ot=Lt.autoUpdate,it=Lt.needsUpdate,j=Lt.type;Nt(),we.autoReset=N,Lt.enabled=K,Lt.autoUpdate=ot,Lt.needsUpdate=it,Lt.type=j}function Pt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function le(N){const K=N.target;K.removeEventListener("dispose",le),Ie(K)}function Ie(N){_n(N),Yt.remove(N)}function _n(N){const K=Yt.get(N).programs;K!==void 0&&(K.forEach(function(ot){Ct.releaseProgram(ot)}),N.isShaderMaterial&&Ct.releaseShaderCache(N))}this.renderBufferDirect=function(N,K,ot,it,j,bt){K===null&&(K=_e);const zt=j.isMesh&&j.matrixWorld.determinant()<0,It=qn(N,K,ot,it,j);kt.setMaterial(it,zt);let Gt=ot.index,ee=1;if(it.wireframe===!0){if(Gt=xt.getWireframeAttribute(ot),Gt===void 0)return;ee=2}const ne=ot.drawRange,$t=ot.attributes.position;let xe=ne.start*ee,Qe=(ne.start+ne.count)*ee;bt!==null&&(xe=Math.max(xe,bt.start*ee),Qe=Math.min(Qe,(bt.start+bt.count)*ee)),Gt!==null?(xe=Math.max(xe,0),Qe=Math.min(Qe,Gt.count)):$t!=null&&(xe=Math.max(xe,0),Qe=Math.min(Qe,$t.count));const bn=Qe-xe;if(bn<0||bn===1/0)return;Be.setup(j,it,It,ot,Gt);let Fe,He=Bt;if(Gt!==null&&(Fe=St.get(Gt),He=ge,He.setIndex(Fe)),j.isMesh)it.wireframe===!0?(kt.setLineWidth(it.wireframeLinewidth*Vt()),He.setMode(V.LINES)):He.setMode(V.TRIANGLES);else if(j.isLine){let se=it.linewidth;se===void 0&&(se=1),kt.setLineWidth(se*Vt()),j.isLineSegments?He.setMode(V.LINES):j.isLineLoop?He.setMode(V.LINE_LOOP):He.setMode(V.LINE_STRIP)}else j.isPoints?He.setMode(V.POINTS):j.isSprite&&He.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)xd("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),He.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))He.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const se=j._multiDrawStarts,Dn=j._multiDrawCounts,qe=j._multiDrawCount,_i=Gt?St.get(Gt).bytesPerElement:1,ts=Yt.get(it).currentProgram.getUniforms();for(let gn=0;gn<qe;gn++)ts.setValue(V,"_gl_DrawID",gn),He.render(se[gn]/_i,Dn[gn])}else if(j.isInstancedMesh)He.renderInstances(xe,bn,j.count);else if(ot.isInstancedBufferGeometry){const se=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Dn=Math.min(ot.instanceCount,se);He.renderInstances(xe,bn,Dn)}else He.render(xe,bn)};function Ft(N,K,ot){N.transparent===!0&&N.side===Ga&&N.forceSinglePass===!1?(N.side=qi,N.needsUpdate=!0,$e(N,K,ot),N.side=Gs,N.needsUpdate=!0,$e(N,K,ot),N.side=Ga):$e(N,K,ot)}this.compile=function(N,K,ot=null){ot===null&&(ot=N),S=ve.get(ot),S.init(K),D.push(S),ot.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),N!==ot&&N.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),S.setupLights();const it=new Set;return N.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const bt=j.material;if(bt)if(Array.isArray(bt))for(let zt=0;zt<bt.length;zt++){const It=bt[zt];Ft(It,ot,j),it.add(It)}else Ft(bt,ot,j),it.add(bt)}),S=D.pop(),it},this.compileAsync=function(N,K,ot=null){const it=this.compile(N,K,ot);return new Promise(j=>{function bt(){if(it.forEach(function(zt){Yt.get(zt).currentProgram.isReady()&&it.delete(zt)}),it.size===0){j(N);return}setTimeout(bt,10)}de.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Kt=null;function fe(N){Kt&&Kt(N)}function wt(){Wt.stop()}function Jt(){Wt.start()}const Wt=new JE;Wt.setAnimationLoop(fe),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(N){Kt=N,ft.setAnimationLoop(N),N===null?Wt.stop():Wt.start()},ft.addEventListener("sessionstart",wt),ft.addEventListener("sessionend",Jt),this.render=function(N,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(K),K=ft.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,K,F),S=ve.get(N,D.length),S.init(K),D.push(S),At.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Z.setFromProjectionMatrix(At),_t=this.localClippingEnabled,dt=Rt.init(this.clippingPlanes,_t),y=Ut.get(N,L.length),y.init(),L.push(y),ft.enabled===!0&&ft.isPresenting===!0){const bt=A.xr.getDepthSensingMesh();bt!==null&&ue(bt,K,-1/0,A.sortObjects)}ue(N,K,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(ht,b),oe=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,oe&&ie.addToRenderList(y,N),this.info.render.frame++,dt===!0&&Rt.beginShadows();const ot=S.state.shadowsArray;Lt.render(ot,N,K),dt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=y.opaque,j=y.transmissive;if(S.setupLights(),K.isArrayCamera){const bt=K.cameras;if(j.length>0)for(let zt=0,It=bt.length;zt<It;zt++){const Gt=bt[zt];Me(it,j,N,Gt)}oe&&ie.render(N);for(let zt=0,It=bt.length;zt<It;zt++){const Gt=bt[zt];Tn(y,N,Gt,Gt.viewport)}}else j.length>0&&Me(it,j,N,K),oe&&ie.render(N),Tn(y,N,K);F!==null&&C===0&&(B.updateMultisampleRenderTarget(F),B.updateRenderTargetMipmap(F)),N.isScene===!0&&N.onAfterRender(A,N,K),Be.resetDefaultState(),w=-1,R=null,D.pop(),D.length>0?(S=D[D.length-1],dt===!0&&Rt.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function ue(N,K,ot,it){if(N.visible===!1)return;if(N.layers.test(K.layers)){if(N.isGroup)ot=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(K);else if(N.isLight)S.pushLight(N),N.castShadow&&S.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Z.intersectsSprite(N)){it&&Qt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(At);const zt=mt.update(N),It=N.material;It.visible&&y.push(N,zt,It,ot,Qt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Z.intersectsObject(N))){const zt=mt.update(N),It=N.material;if(it&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Qt.copy(N.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Qt.copy(zt.boundingSphere.center)),Qt.applyMatrix4(N.matrixWorld).applyMatrix4(At)),Array.isArray(It)){const Gt=zt.groups;for(let ee=0,ne=Gt.length;ee<ne;ee++){const $t=Gt[ee],xe=It[$t.materialIndex];xe&&xe.visible&&y.push(N,zt,xe,ot,Qt.z,$t)}}else It.visible&&y.push(N,zt,It,ot,Qt.z,null)}}const bt=N.children;for(let zt=0,It=bt.length;zt<It;zt++)ue(bt[zt],K,ot,it)}function Tn(N,K,ot,it){const j=N.opaque,bt=N.transmissive,zt=N.transparent;S.setupLightsView(ot),dt===!0&&Rt.setGlobalState(A.clippingPlanes,ot),it&&kt.viewport(H.copy(it)),j.length>0&&an(j,K,ot),bt.length>0&&an(bt,K,ot),zt.length>0&&an(zt,K,ot),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Me(N,K,ot,it){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[it.id]===void 0&&(S.state.transmissionRenderTarget[it.id]=new Kr(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?qa:Qa,minFilter:Ao,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const bt=S.state.transmissionRenderTarget[it.id],zt=it.viewport||H;bt.setSize(zt.z*A.transmissionResolutionScale,zt.w*A.transmissionResolutionScale);const It=A.getRenderTarget();A.setRenderTarget(bt),A.getClearColor(lt),at=A.getClearAlpha(),at<1&&A.setClearColor(16777215,.5),A.clear(),oe&&ie.render(ot);const Gt=A.toneMapping;A.toneMapping=Bs;const ee=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),S.setupLightsView(it),dt===!0&&Rt.setGlobalState(A.clippingPlanes,it),an(N,ot,it),B.updateMultisampleRenderTarget(bt),B.updateRenderTargetMipmap(bt),de.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let $t=0,xe=K.length;$t<xe;$t++){const Qe=K[$t],bn=Qe.object,Fe=Qe.geometry,He=Qe.material,se=Qe.group;if(He.side===Ga&&bn.layers.test(it.layers)){const Dn=He.side;He.side=qi,He.needsUpdate=!0,yn(bn,ot,it,Fe,He,se),He.side=Dn,He.needsUpdate=!0,ne=!0}}ne===!0&&(B.updateMultisampleRenderTarget(bt),B.updateRenderTargetMipmap(bt))}A.setRenderTarget(It),A.setClearColor(lt,at),ee!==void 0&&(it.viewport=ee),A.toneMapping=Gt}function an(N,K,ot){const it=K.isScene===!0?K.overrideMaterial:null;for(let j=0,bt=N.length;j<bt;j++){const zt=N[j],It=zt.object,Gt=zt.geometry,ee=zt.group;let ne=zt.material;ne.allowOverride===!0&&it!==null&&(ne=it),It.layers.test(ot.layers)&&yn(It,K,ot,Gt,ne,ee)}}function yn(N,K,ot,it,j,bt){N.onBeforeRender(A,K,ot,it,j,bt),N.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),j.onBeforeRender(A,K,ot,it,N,bt),j.transparent===!0&&j.side===Ga&&j.forceSinglePass===!1?(j.side=qi,j.needsUpdate=!0,A.renderBufferDirect(ot,K,it,j,N,bt),j.side=Gs,j.needsUpdate=!0,A.renderBufferDirect(ot,K,it,j,N,bt),j.side=Ga):A.renderBufferDirect(ot,K,it,j,N,bt),N.onAfterRender(A,K,ot,it,j,bt)}function $e(N,K,ot){K.isScene!==!0&&(K=_e);const it=Yt.get(N),j=S.state.lights,bt=S.state.shadowsArray,zt=j.state.version,It=Ct.getParameters(N,j.state,bt,K,ot),Gt=Ct.getProgramCacheKey(It);let ee=it.programs;it.environment=N.isMeshStandardMaterial?K.environment:null,it.fog=K.fog,it.envMap=(N.isMeshStandardMaterial?nt:U).get(N.envMap||it.environment),it.envMapRotation=it.environment!==null&&N.envMap===null?K.environmentRotation:N.envMapRotation,ee===void 0&&(N.addEventListener("dispose",le),ee=new Map,it.programs=ee);let ne=ee.get(Gt);if(ne!==void 0){if(it.currentProgram===ne&&it.lightsStateVersion===zt)return Ne(N,It),ne}else It.uniforms=Ct.getUniforms(N),N.onBeforeCompile(It,A),ne=Ct.acquireProgram(It,Gt),ee.set(Gt,ne),it.uniforms=It.uniforms;const $t=it.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&($t.clippingPlanes=Rt.uniform),Ne(N,It),it.needsLights=Xe(N),it.lightsStateVersion=zt,it.needsLights&&($t.ambientLightColor.value=j.state.ambient,$t.lightProbe.value=j.state.probe,$t.directionalLights.value=j.state.directional,$t.directionalLightShadows.value=j.state.directionalShadow,$t.spotLights.value=j.state.spot,$t.spotLightShadows.value=j.state.spotShadow,$t.rectAreaLights.value=j.state.rectArea,$t.ltc_1.value=j.state.rectAreaLTC1,$t.ltc_2.value=j.state.rectAreaLTC2,$t.pointLights.value=j.state.point,$t.pointLightShadows.value=j.state.pointShadow,$t.hemisphereLights.value=j.state.hemi,$t.directionalShadowMap.value=j.state.directionalShadowMap,$t.directionalShadowMatrix.value=j.state.directionalShadowMatrix,$t.spotShadowMap.value=j.state.spotShadowMap,$t.spotLightMatrix.value=j.state.spotLightMatrix,$t.spotLightMap.value=j.state.spotLightMap,$t.pointShadowMap.value=j.state.pointShadowMap,$t.pointShadowMatrix.value=j.state.pointShadowMatrix),it.currentProgram=ne,it.uniformsList=null,ne}function ke(N){if(N.uniformsList===null){const K=N.currentProgram.getUniforms();N.uniformsList=yd.seqWithValue(K.seq,N.uniforms)}return N.uniformsList}function Ne(N,K){const ot=Yt.get(N);ot.outputColorSpace=K.outputColorSpace,ot.batching=K.batching,ot.batchingColor=K.batchingColor,ot.instancing=K.instancing,ot.instancingColor=K.instancingColor,ot.instancingMorph=K.instancingMorph,ot.skinning=K.skinning,ot.morphTargets=K.morphTargets,ot.morphNormals=K.morphNormals,ot.morphColors=K.morphColors,ot.morphTargetsCount=K.morphTargetsCount,ot.numClippingPlanes=K.numClippingPlanes,ot.numIntersection=K.numClipIntersection,ot.vertexAlphas=K.vertexAlphas,ot.vertexTangents=K.vertexTangents,ot.toneMapping=K.toneMapping}function qn(N,K,ot,it,j){K.isScene!==!0&&(K=_e),B.resetTextureUnits();const bt=K.fog,zt=it.isMeshStandardMaterial?K.environment:null,It=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:uu,Gt=(it.isMeshStandardMaterial?nt:U).get(it.envMap||zt),ee=it.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ne=!!ot.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),$t=!!ot.morphAttributes.position,xe=!!ot.morphAttributes.normal,Qe=!!ot.morphAttributes.color;let bn=Bs;it.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(bn=A.toneMapping);const Fe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,He=Fe!==void 0?Fe.length:0,se=Yt.get(it),Dn=S.state.lights;if(dt===!0&&(_t===!0||N!==R)){const ei=N===R&&it.id===w;Rt.setState(it,N,ei)}let qe=!1;it.version===se.__version?(se.needsLights&&se.lightsStateVersion!==Dn.state.version||se.outputColorSpace!==It||j.isBatchedMesh&&se.batching===!1||!j.isBatchedMesh&&se.batching===!0||j.isBatchedMesh&&se.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&se.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&se.instancing===!1||!j.isInstancedMesh&&se.instancing===!0||j.isSkinnedMesh&&se.skinning===!1||!j.isSkinnedMesh&&se.skinning===!0||j.isInstancedMesh&&se.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&se.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&se.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&se.instancingMorph===!1&&j.morphTexture!==null||se.envMap!==Gt||it.fog===!0&&se.fog!==bt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==Rt.numPlanes||se.numIntersection!==Rt.numIntersection)||se.vertexAlphas!==ee||se.vertexTangents!==ne||se.morphTargets!==$t||se.morphNormals!==xe||se.morphColors!==Qe||se.toneMapping!==bn||se.morphTargetsCount!==He)&&(qe=!0):(qe=!0,se.__version=it.version);let _i=se.currentProgram;qe===!0&&(_i=$e(it,K,j));let ts=!1,gn=!1,_a=!1;const dn=_i.getUniforms(),gi=se.uniforms;if(kt.useProgram(_i.program)&&(ts=!0,gn=!0,_a=!0),it.id!==w&&(w=it.id,gn=!0),ts||R!==N){kt.buffers.depth.getReversed()?(Tt.copy(N.projectionMatrix),OC(Tt),NC(Tt),dn.setValue(V,"projectionMatrix",Tt)):dn.setValue(V,"projectionMatrix",N.projectionMatrix),dn.setValue(V,"viewMatrix",N.matrixWorldInverse);const ci=dn.map.cameraPosition;ci!==void 0&&ci.setValue(V,qt.setFromMatrixPosition(N.matrixWorld)),J.logarithmicDepthBuffer&&dn.setValue(V,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&dn.setValue(V,"isOrthographic",N.isOrthographicCamera===!0),R!==N&&(R=N,gn=!0,_a=!0)}if(j.isSkinnedMesh){dn.setOptional(V,j,"bindMatrix"),dn.setOptional(V,j,"bindMatrixInverse");const ei=j.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),dn.setValue(V,"boneTexture",ei.boneTexture,B))}j.isBatchedMesh&&(dn.setOptional(V,j,"batchingTexture"),dn.setValue(V,"batchingTexture",j._matricesTexture,B),dn.setOptional(V,j,"batchingIdTexture"),dn.setValue(V,"batchingIdTexture",j._indirectTexture,B),dn.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&dn.setValue(V,"batchingColorTexture",j._colorsTexture,B));const jn=ot.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&te.update(j,ot,_i),(gn||se.receiveShadow!==j.receiveShadow)&&(se.receiveShadow=j.receiveShadow,dn.setValue(V,"receiveShadow",j.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(gi.envMap.value=Gt,gi.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&K.environment!==null&&(gi.envMapIntensity.value=K.environmentIntensity),gn&&(dn.setValue(V,"toneMappingExposure",A.toneMappingExposure),se.needsLights&&Ze(gi,_a),bt&&it.fog===!0&&Dt.refreshFogUniforms(gi,bt),Dt.refreshMaterialUniforms(gi,it,W,X,S.state.transmissionRenderTarget[N.id]),yd.upload(V,ke(se),gi,B)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(yd.upload(V,ke(se),gi,B),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&dn.setValue(V,"center",j.center),dn.setValue(V,"modelViewMatrix",j.modelViewMatrix),dn.setValue(V,"normalMatrix",j.normalMatrix),dn.setValue(V,"modelMatrix",j.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const ei=it.uniformsGroups;for(let ci=0,Jr=ei.length;ci<Jr;ci++){const ga=ei[ci];k.update(ga,_i),k.bind(ga,_i)}}return _i}function Ze(N,K){N.ambientLightColor.needsUpdate=K,N.lightProbe.needsUpdate=K,N.directionalLights.needsUpdate=K,N.directionalLightShadows.needsUpdate=K,N.pointLights.needsUpdate=K,N.pointLightShadows.needsUpdate=K,N.spotLights.needsUpdate=K,N.spotLightShadows.needsUpdate=K,N.rectAreaLights.needsUpdate=K,N.hemisphereLights.needsUpdate=K}function Xe(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(N,K,ot){const it=Yt.get(N);it.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),Yt.get(N.texture).__webglTexture=K,Yt.get(N.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ot,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,K){const ot=Yt.get(N);ot.__webglFramebuffer=K,ot.__useDefaultFramebuffer=K===void 0};const Ci=V.createFramebuffer();this.setRenderTarget=function(N,K=0,ot=0){F=N,z=K,C=ot;let it=!0,j=null,bt=!1,zt=!1;if(N){const Gt=Yt.get(N);if(Gt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(V.FRAMEBUFFER,null),it=!1;else if(Gt.__webglFramebuffer===void 0)B.setupRenderTarget(N);else if(Gt.__hasExternalTextures)B.rebindTextures(N,Yt.get(N.texture).__webglTexture,Yt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const $t=N.depthTexture;if(Gt.__boundDepthTexture!==$t){if($t!==null&&Yt.has($t)&&(N.width!==$t.image.width||N.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(N)}}const ee=N.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(zt=!0);const ne=Yt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ne[K])?j=ne[K][ot]:j=ne[K],bt=!0):N.samples>0&&B.useMultisampledRTT(N)===!1?j=Yt.get(N).__webglMultisampledFramebuffer:Array.isArray(ne)?j=ne[ot]:j=ne,H.copy(N.viewport),Y.copy(N.scissor),tt=N.scissorTest}else H.copy(Q).multiplyScalar(W).floor(),Y.copy(pt).multiplyScalar(W).floor(),tt=Mt;if(ot!==0&&(j=Ci),kt.bindFramebuffer(V.FRAMEBUFFER,j)&&it&&kt.drawBuffers(N,j),kt.viewport(H),kt.scissor(Y),kt.setScissorTest(tt),bt){const Gt=Yt.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,Gt.__webglTexture,ot)}else if(zt){const Gt=Yt.get(N.texture),ee=K;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Gt.__webglTexture,ot,ee)}else if(N!==null&&ot!==0){const Gt=Yt.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Gt.__webglTexture,ot)}w=-1},this.readRenderTargetPixels=function(N,K,ot,it,j,bt,zt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=Yt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&zt!==void 0&&(It=It[zt]),It){kt.bindFramebuffer(V.FRAMEBUFFER,It);try{const Gt=N.texture,ee=Gt.format,ne=Gt.type;if(!J.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=N.width-it&&ot>=0&&ot<=N.height-j&&V.readPixels(K,ot,it,j,ae.convert(ee),ae.convert(ne),bt)}finally{const Gt=F!==null?Yt.get(F).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(N,K,ot,it,j,bt,zt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=Yt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&zt!==void 0&&(It=It[zt]),It)if(K>=0&&K<=N.width-it&&ot>=0&&ot<=N.height-j){kt.bindFramebuffer(V.FRAMEBUFFER,It);const Gt=N.texture,ee=Gt.format,ne=Gt.type;if(!J.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.bufferData(V.PIXEL_PACK_BUFFER,bt.byteLength,V.STREAM_READ),V.readPixels(K,ot,it,j,ae.convert(ee),ae.convert(ne),0);const xe=F!==null?Yt.get(F).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,xe);const Qe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await LC(V,Qe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,$t),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,bt),V.deleteBuffer($t),V.deleteSync(Qe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,K=null,ot=0){const it=Math.pow(2,-ot),j=Math.floor(N.image.width*it),bt=Math.floor(N.image.height*it),zt=K!==null?K.x:0,It=K!==null?K.y:0;B.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,ot,0,0,zt,It,j,bt),kt.unbindTexture()};const Cn=V.createFramebuffer(),hn=V.createFramebuffer();this.copyTextureToTexture=function(N,K,ot=null,it=null,j=0,bt=null){bt===null&&(j!==0?(xd("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=j,j=0):bt=0);let zt,It,Gt,ee,ne,$t,xe,Qe,bn;const Fe=N.isCompressedTexture?N.mipmaps[bt]:N.image;if(ot!==null)zt=ot.max.x-ot.min.x,It=ot.max.y-ot.min.y,Gt=ot.isBox3?ot.max.z-ot.min.z:1,ee=ot.min.x,ne=ot.min.y,$t=ot.isBox3?ot.min.z:0;else{const jn=Math.pow(2,-j);zt=Math.floor(Fe.width*jn),It=Math.floor(Fe.height*jn),N.isDataArrayTexture?Gt=Fe.depth:N.isData3DTexture?Gt=Math.floor(Fe.depth*jn):Gt=1,ee=0,ne=0,$t=0}it!==null?(xe=it.x,Qe=it.y,bn=it.z):(xe=0,Qe=0,bn=0);const He=ae.convert(K.format),se=ae.convert(K.type);let Dn;K.isData3DTexture?(B.setTexture3D(K,0),Dn=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(B.setTexture2DArray(K,0),Dn=V.TEXTURE_2D_ARRAY):(B.setTexture2D(K,0),Dn=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const qe=V.getParameter(V.UNPACK_ROW_LENGTH),_i=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ts=V.getParameter(V.UNPACK_SKIP_PIXELS),gn=V.getParameter(V.UNPACK_SKIP_ROWS),_a=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Fe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Fe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ee),V.pixelStorei(V.UNPACK_SKIP_ROWS,ne),V.pixelStorei(V.UNPACK_SKIP_IMAGES,$t);const dn=N.isDataArrayTexture||N.isData3DTexture,gi=K.isDataArrayTexture||K.isData3DTexture;if(N.isDepthTexture){const jn=Yt.get(N),ei=Yt.get(K),ci=Yt.get(jn.__renderTarget),Jr=Yt.get(ei.__renderTarget);kt.bindFramebuffer(V.READ_FRAMEBUFFER,ci.__webglFramebuffer),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Jr.__webglFramebuffer);for(let ga=0;ga<Gt;ga++)dn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Yt.get(N).__webglTexture,j,$t+ga),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Yt.get(K).__webglTexture,bt,bn+ga)),V.blitFramebuffer(ee,ne,zt,It,xe,Qe,zt,It,V.DEPTH_BUFFER_BIT,V.NEAREST);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||N.isRenderTargetTexture||Yt.has(N)){const jn=Yt.get(N),ei=Yt.get(K);kt.bindFramebuffer(V.READ_FRAMEBUFFER,Cn),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,hn);for(let ci=0;ci<Gt;ci++)dn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,jn.__webglTexture,j,$t+ci):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,jn.__webglTexture,j),gi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ei.__webglTexture,bt,bn+ci):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ei.__webglTexture,bt),j!==0?V.blitFramebuffer(ee,ne,zt,It,xe,Qe,zt,It,V.COLOR_BUFFER_BIT,V.NEAREST):gi?V.copyTexSubImage3D(Dn,bt,xe,Qe,bn+ci,ee,ne,zt,It):V.copyTexSubImage2D(Dn,bt,xe,Qe,ee,ne,zt,It);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else gi?N.isDataTexture||N.isData3DTexture?V.texSubImage3D(Dn,bt,xe,Qe,bn,zt,It,Gt,He,se,Fe.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(Dn,bt,xe,Qe,bn,zt,It,Gt,He,Fe.data):V.texSubImage3D(Dn,bt,xe,Qe,bn,zt,It,Gt,He,se,Fe):N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,bt,xe,Qe,zt,It,He,se,Fe.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,bt,xe,Qe,Fe.width,Fe.height,He,Fe.data):V.texSubImage2D(V.TEXTURE_2D,bt,xe,Qe,zt,It,He,se,Fe);V.pixelStorei(V.UNPACK_ROW_LENGTH,qe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_i),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ts),V.pixelStorei(V.UNPACK_SKIP_ROWS,gn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,_a),bt===0&&K.generateMipmaps&&V.generateMipmap(Dn),kt.unbindTexture()},this.copyTextureToTexture3D=function(N,K,ot=null,it=null,j=0){return xd('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,K,ot,it,j)},this.initRenderTarget=function(N){Yt.get(N).__webglFramebuffer===void 0&&B.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?B.setTextureCube(N,0):N.isData3DTexture?B.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?B.setTexture2DArray(N,0):B.setTexture2D(N,0),kt.unbindTexture()},this.resetState=function(){z=0,C=0,F=null,kt.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(t),e.unpackColorSpace=Je._getUnpackColorSpace()}}const Sd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class _f{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const YL=new KE(-1,1,1,-1,0,1);class qL extends Mr{constructor(){super(),this.setAttribute("position",new Br([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Br([0,2,0,0,2,0],2))}}const jL=new qL;class iT{constructor(t){this._mesh=new Pr(jL,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,YL)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ZL extends _f{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Yi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Id.clone(t.uniforms),this.material=new Yi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new iT(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class g1 extends _f{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const a=t.getContext(),l=t.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let c,f;this.inverse?(c=0,f=1):(c=1,f=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),l.buffers.stencil.setFunc(a.ALWAYS,c,4294967295),l.buffers.stencil.setClear(f),l.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(a.EQUAL,1,4294967295),l.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),l.buffers.stencil.setLocked(!0)}}class QL extends _f{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class KL{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Le);this._width=i.width,this._height=i.height,e=new Kr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qa}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ZL(Sd),this.copyPass.material.blending=Ya,this.clock=new u2}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let a=0,l=this.passes.length;a<l;a++){const c=this.passes[a];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),c.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),c.needsSwap){if(i){const f=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),h.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}g1!==void 0&&(c instanceof g1?i=!0:c instanceof QL&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(i,a),this.renderTarget2.setSize(i,a);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(i,a)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class JL extends _f{constructor(t,e,i=null,a=null,l=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=a,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new je}render(t,e,i){const a=t.autoClear;t.autoClear=!1;let l,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(l=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),t.autoClear=a}}const $L={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class fu extends _f{constructor(t,e=1,i,a){super(),this.strength=e,this.radius=i,this.threshold=a,this.resolution=t!==void 0?new Le(t.x,t.y):new Le(256,256),this.clearColor=new je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new Kr(l,c,{type:qa}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const g=new Kr(l,c,{type:qa});g.texture.name="UnrealBloomPass.h"+m,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const x=new Kr(l,c,{type:qa});x.texture.name="UnrealBloomPass.v"+m,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),l=Math.round(l/2),c=Math.round(c/2)}const f=$L;this.highPassUniforms=Id.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Yi({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];l=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new Le(1/l,1/c),l=Math.round(l/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new ct(1,1,1),new ct(1,1,1),new ct(1,1,1),new ct(1,1,1),new ct(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Id.clone(Sd.uniforms),this.blendMaterial=new Yi({uniforms:this.copyUniforms,vertexShader:Sd.vertexShader,fragmentShader:Sd.fragmentShader,blending:Sg,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new je,this._oldClearAlpha=1,this._basic=new df,this._fsQuad=new iT(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),a=Math.round(e/2);this.renderTargetBright.setSize(i,a);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(i,a),this.renderTargetsVertical[l].setSize(i,a),this.separableBlurMaterials[l].uniforms.invSize.value=new Le(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2)}render(t,e,i,a,l){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const c=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),l&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let f=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[h].uniforms.direction.value=fu.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[h]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=fu.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[h]),t.clear(),this._fsQuad.render(t),f=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=c}_getSeparableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Yi({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Yi({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}fu.BlurDirectionX=new Le(1,0);fu.BlurDirectionY=new Le(0,1);function Fa(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function rT(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},hu={duration:.5,overwrite:!1,delay:0},J0,mi,En,ha=1e8,Ri=1/ha,c0=Math.PI*2,tO=c0/4,eO=0,aT=Math.sqrt,nO=Math.cos,iO=Math.sin,ui=function(t){return typeof t=="string"},On=function(t){return typeof t=="function"},Ja=function(t){return typeof t=="number"},$0=function(t){return typeof t>"u"},ma=function(t){return typeof t=="object"},Qi=function(t){return t!==!1},tv=function(){return typeof window<"u"},Qh=function(t){return On(t)||ui(t)},sT=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wi=Array.isArray,f0=/(?:-?\.?\d|\.)+/gi,oT=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,kl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$_=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lT=/[+-]=-?[.\d]+/,uT=/[^,'"\[\]\s]+/gi,rO=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Rn,ra,h0,ev,yr={},Fd={},cT,fT=function(t){return(Fd=du(t,yr))&&tr},nv=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Jc=function(t,e){return!e&&console.warn(t)},hT=function(t,e){return t&&(yr[t]=e)&&Fd&&(Fd[t]=e)||yr},$c=function(){return 0},aO={suppressEvents:!0,isStart:!0,kill:!1},Md={suppressEvents:!0,kill:!1},sO={suppressEvents:!0},iv={},Is=[],d0={},dT,dr={},tg={},v1=30,Ed=[],rv="",av=function(t){var e=t[0],i,a;if(ma(e)||On(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(a=Ed.length;a--&&!Ed[a].targetTest(e););i=Ed[a]}for(a=t.length;a--;)t[a]&&(t[a]._gsap||(t[a]._gsap=new BT(t[a],i)))||t.splice(a,1);return t},Uo=function(t){return t._gsap||av(zr(t))[0]._gsap},pT=function(t,e,i){return(i=t[e])&&On(i)?t[e]():$0(i)&&t.getAttribute&&t.getAttribute(e)||i},Ki=function(t,e){return(t=t.split(",")).forEach(e)||t},zn=function(t){return Math.round(t*1e5)/1e5||0},Wn=function(t){return Math.round(t*1e7)/1e7||0},jl=function(t,e){var i=e.charAt(0),a=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+a:i==="-"?t-a:i==="*"?t*a:t/a},oO=function(t,e){for(var i=e.length,a=0;t.indexOf(e[a])<0&&++a<i;);return a<i},Hd=function(){var t=Is.length,e=Is.slice(0),i,a;for(d0={},Is.length=0,i=0;i<t;i++)a=e[i],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},mT=function(t,e,i,a){Is.length&&!mi&&Hd(),t.render(e,i,mi&&e<0&&(t._initted||t._startAt)),Is.length&&!mi&&Hd()},_T=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(uT).length<2?e:ui(t)?t.trim():t},gT=function(t){return t},Sr=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},lO=function(t){return function(e,i){for(var a in i)a in e||a==="duration"&&t||a==="ease"||(e[a]=i[a])}},du=function(t,e){for(var i in e)t[i]=e[i];return t},x1=function s(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ma(e[i])?s(t[i]||(t[i]={}),e[i]):e[i]);return t},Gd=function(t,e){var i={},a;for(a in t)a in e||(i[a]=t[a]);return i},Pc=function(t){var e=t.parent||Rn,i=t.keyframes?lO(wi(t.keyframes)):Sr;if(Qi(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},uO=function(t,e){for(var i=t.length,a=i===e.length;a&&i--&&t[i]===e[i];);return i<0},vT=function(t,e,i,a,l){var c=t[a],f;if(l)for(f=e[l];c&&c[l]>f;)c=c._prev;return c?(e._next=c._next,c._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[a]=e,e._prev=c,e.parent=e._dp=t,e},lp=function(t,e,i,a){i===void 0&&(i="_first"),a===void 0&&(a="_last");var l=e._prev,c=e._next;l?l._next=c:t[i]===e&&(t[i]=c),c?c._prev=l:t[a]===e&&(t[a]=l),e._next=e._prev=e.parent=null},Vs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Lo=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},cO=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},p0=function(t,e,i,a){return t._startAt&&(mi?t._startAt.revert(Md):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,a))},fO=function s(t){return!t||t._ts&&s(t.parent)},y1=function(t){return t._repeat?pu(t._tTime,t=t.duration()+t._rDelay)*t:0},pu=function(t,e){var i=Math.floor(t=Wn(t/e));return t&&i===t?i-1:i},Vd=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},up=function(t){return t._end=Wn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ri)||0))},cp=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Wn(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),up(t),i._dirty||Lo(i,t)),t},xT=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Vd(t.rawTime(),e),(!e._dur||gf(0,e.totalDuration(),i)-e._tTime>Ri)&&e.render(i,!0)),Lo(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-1e-8}},la=function(t,e,i,a){return e.parent&&Vs(e),e._start=Wn((Ja(i)?i:i||t!==Rn?Ur(t,i,e):t._time)+e._delay),e._end=Wn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),vT(t,e,"_first","_last",t._sort?"_start":0),m0(e)||(t._recent=e),a||xT(t,e),t._ts<0&&cp(t,t._tTime),t},yT=function(t,e){return(yr.ScrollTrigger||nv("scrollTrigger",e))&&yr.ScrollTrigger.create(e,t)},ST=function(t,e,i,a,l){if(ov(t,e,l),!t._initted)return 1;if(!i&&t._pt&&!mi&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&dT!==mr.frame)return Is.push(t),t._lazy=[l,a],1},hO=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},m0=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},dO=function(t,e,i,a){var l=t.ratio,c=e<0||!e&&(!t._start&&hO(t)&&!(!t._initted&&m0(t))||(t._ts<0||t._dp._ts<0)&&!m0(t))?0:1,f=t._rDelay,h=0,p,m,g;if(f&&t._repeat&&(h=gf(0,t._tDur,e),m=pu(h,f),t._yoyo&&m&1&&(c=1-c),m!==pu(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||mi||a||t._zTime===Ri||!e&&t._zTime){if(!t._initted&&ST(t,e,a,i,h))return;for(g=t._zTime,t._zTime=e||(i?Ri:0),i||(i=e&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=h,p=t._pt;p;)p.r(c,p.d),p=p._next;e<0&&p0(t,e,i,!0),t._onUpdate&&!i&&gr(t,"onUpdate"),h&&t._repeat&&!i&&t.parent&&gr(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===c&&(c&&Vs(t,1),!i&&!mi&&(gr(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},pO=function(t,e,i){var a;if(i>e)for(a=t._first;a&&a._start<=i;){if(a.data==="isPause"&&a._start>e)return a;a=a._next}else for(a=t._last;a&&a._start>=i;){if(a.data==="isPause"&&a._start<e)return a;a=a._prev}},mu=function(t,e,i,a){var l=t._repeat,c=Wn(e)||0,f=t._tTime/t._tDur;return f&&!a&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:Wn(c*(l+1)+t._rDelay*l):c,f>0&&!a&&cp(t,t._tTime=t._tDur*f),t.parent&&up(t),i||Lo(t.parent,t),t},S1=function(t){return t instanceof Bi?Lo(t):mu(t,t._dur)},mO={_start:0,endTime:$c,totalDuration:$c},Ur=function s(t,e,i){var a=t.labels,l=t._recent||mO,c=t.duration()>=ha?l.endTime(!1):t._dur,f,h,p;return ui(e)&&(isNaN(e)||e in a)?(h=e.charAt(0),p=e.substr(-1)==="%",f=e.indexOf("="),h==="<"||h===">"?(f>=0&&(e=e.replace(/=/,"")),(h==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(p?(f<0?l:i).totalDuration()/100:1)):f<0?(e in a||(a[e]=c),a[e]):(h=parseFloat(e.charAt(f-1)+e.substr(f+1)),p&&i&&(h=h/100*(wi(i)?i[0]:i).totalDuration()),f>1?s(t,e.substr(0,f-1),i)+h:c+h)):e==null?c:+e},zc=function(t,e,i){var a=Ja(e[1]),l=(a?2:1)+(t<2?0:1),c=e[l],f,h;if(a&&(c.duration=e[1]),c.parent=i,t){for(f=c,h=i;h&&!("immediateRender"in f);)f=h.vars.defaults||{},h=Qi(h.vars.inherit)&&h.parent;c.immediateRender=Qi(f.immediateRender),t<2?c.runBackwards=1:c.startAt=e[l-1]}return new Xn(e[0],c,e[l+1])},Ws=function(t,e){return t||t===0?e(t):e},gf=function(t,e,i){return i<t?t:i>e?e:i},bi=function(t,e){return!ui(t)||!(e=rO.exec(t))?"":e[1]},_O=function(t,e,i){return Ws(i,function(a){return gf(t,e,a)})},_0=[].slice,MT=function(t,e){return t&&ma(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ma(t[0]))&&!t.nodeType&&t!==ra},gO=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(a){var l;return ui(a)&&!e||MT(a,1)?(l=i).push.apply(l,zr(a)):i.push(a)})||i},zr=function(t,e,i){return En&&!e&&En.selector?En.selector(t):ui(t)&&!i&&(h0||!_u())?_0.call((e||ev).querySelectorAll(t),0):wi(t)?gO(t,i):MT(t)?_0.call(t,0):t?[t]:[]},g0=function(t){return t=zr(t)[0]||Jc("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return zr(e,i.querySelectorAll?i:i===t?Jc("Invalid scope")||ev.createElement("div"):t)}},ET=function(t){return t.sort(function(){return .5-Math.random()})},TT=function(t){if(On(t))return t;var e=ma(t)?t:{each:t},i=Oo(e.ease),a=e.from||0,l=parseFloat(e.base)||0,c={},f=a>0&&a<1,h=isNaN(a)||f,p=e.axis,m=a,g=a;return ui(a)?m=g={center:.5,edges:.5,end:1}[a]||0:!f&&h&&(m=a[0],g=a[1]),function(x,v,E){var M=(E||e).length,y=c[M],S,L,D,A,P,z,C,F,w;if(!y){if(w=e.grid==="auto"?0:(e.grid||[1,ha])[1],!w){for(C=-1e8;C<(C=E[w++].getBoundingClientRect().left)&&w<M;);w<M&&w--}for(y=c[M]=[],S=h?Math.min(w,M)*m-.5:a%w,L=w===ha?0:h?M*g/w-.5:a/w|0,C=0,F=ha,z=0;z<M;z++)D=z%w-S,A=L-(z/w|0),y[z]=P=p?Math.abs(p==="y"?A:D):aT(D*D+A*A),P>C&&(C=P),P<F&&(F=P);a==="random"&&ET(y),y.max=C-F,y.min=F,y.v=M=(parseFloat(e.amount)||parseFloat(e.each)*(w>M?M-1:p?p==="y"?M/w:w:Math.max(w,M/w))||0)*(a==="edges"?-1:1),y.b=M<0?l-M:l,y.u=bi(e.amount||e.each)||0,i=i&&M<0?NT(i):i}return M=(y[x]-y.min)/y.max||0,Wn(y.b+(i?i(M):M)*y.v)+y.u}},v0=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var a=Wn(Math.round(parseFloat(i)/t)*t*e);return(a-a%1)/e+(Ja(i)?0:bi(i))}},bT=function(t,e){var i=wi(t),a,l;return!i&&ma(t)&&(a=i=t.radius||ha,t.values?(t=zr(t.values),(l=!Ja(t[0]))&&(a*=a)):t=v0(t.increment)),Ws(e,i?On(t)?function(c){return l=t(c),Math.abs(l-c)<=a?l:c}:function(c){for(var f=parseFloat(l?c.x:c),h=parseFloat(l?c.y:0),p=ha,m=0,g=t.length,x,v;g--;)l?(x=t[g].x-f,v=t[g].y-h,x=x*x+v*v):x=Math.abs(t[g]-f),x<p&&(p=x,m=g);return m=!a||p<=a?t[m]:c,l||m===c||Ja(c)?m:m+bi(c)}:v0(t))},AT=function(t,e,i,a){return Ws(wi(t)?!e:i===!0?!!(i=0):!a,function(){return wi(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(a=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*a)/a})},vO=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(a){return e.reduce(function(l,c){return c(l)},a)}},xO=function(t,e){return function(i){return t(parseFloat(i))+(e||bi(i))}},yO=function(t,e,i){return wT(t,e,0,1,i)},RT=function(t,e,i){return Ws(i,function(a){return t[~~e(a)]})},SO=function s(t,e,i){var a=e-t;return wi(t)?RT(t,s(0,t.length),e):Ws(i,function(l){return(a+(l-t)%a)%a+t})},MO=function s(t,e,i){var a=e-t,l=a*2;return wi(t)?RT(t,s(0,t.length-1),e):Ws(i,function(c){return c=(l+(c-t)%l)%l||0,t+(c>a?l-c:c)})},tf=function(t){for(var e=0,i="",a,l,c,f;~(a=t.indexOf("random(",e));)c=t.indexOf(")",a),f=t.charAt(a+7)==="[",l=t.substr(a+7,c-a-7).match(f?uT:f0),i+=t.substr(e,a-e)+AT(f?l:+l[0],f?0:+l[1],+l[2]||1e-5),e=c+1;return i+t.substr(e,t.length-e)},wT=function(t,e,i,a,l){var c=e-t,f=a-i;return Ws(l,function(h){return i+((h-t)/c*f||0)})},EO=function s(t,e,i,a){var l=isNaN(t+e)?0:function(v){return(1-v)*t+v*e};if(!l){var c=ui(t),f={},h,p,m,g,x;if(i===!0&&(a=1)&&(i=null),c)t={p:t},e={p:e};else if(wi(t)&&!wi(e)){for(m=[],g=t.length,x=g-2,p=1;p<g;p++)m.push(s(t[p-1],t[p]));g--,l=function(E){E*=g;var M=Math.min(x,~~E);return m[M](E-M)},i=e}else a||(t=du(wi(t)?[]:{},t));if(!m){for(h in e)sv.call(f,t,h,"get",e[h]);l=function(E){return cv(E,f)||(c?t.p:t)}}}return Ws(i,l)},M1=function(t,e,i){var a=t.labels,l=ha,c,f,h;for(c in a)f=a[c]-e,f<0==!!i&&f&&l>(f=Math.abs(f))&&(h=c,l=f);return h},gr=function(t,e,i){var a=t.vars,l=a[e],c=En,f=t._ctx,h,p,m;if(l)return h=a[e+"Params"],p=a.callbackScope||t,i&&Is.length&&Hd(),f&&(En=f),m=h?l.apply(p,h):l.call(p),En=c,m},Rc=function(t){return Vs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!mi),t.progress()<1&&gr(t,"onInterrupt"),t},Xl,CT=[],DT=function(t){if(t)if(t=!t.name&&t.default||t,tv()||t.headless){var e=t.name,i=On(t),a=e&&!i&&t.init?function(){this._props=[]}:t,l={init:$c,render:cv,add:sv,kill:FO,modifier:IO,rawVars:0},c={targetTest:0,get:0,getSetter:uv,aliases:{},register:0};if(_u(),t!==a){if(dr[e])return;Sr(a,Sr(Gd(t,l),c)),du(a.prototype,du(l,Gd(t,c))),dr[a.prop=e]=a,t.targetTest&&(Ed.push(a),iv[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}hT(e,a),t.register&&t.register(tr,a,Ji)}else CT.push(t)},mn=255,wc={aqua:[0,mn,mn],lime:[0,mn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,mn],navy:[0,0,128],white:[mn,mn,mn],olive:[128,128,0],yellow:[mn,mn,0],orange:[mn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[mn,0,0],pink:[mn,192,203],cyan:[0,mn,mn],transparent:[mn,mn,mn,0]},eg=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*mn+.5|0},UT=function(t,e,i){var a=t?Ja(t)?[t>>16,t>>8&mn,t&mn]:0:wc.black,l,c,f,h,p,m,g,x,v,E;if(!a){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),wc[t])a=wc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return a=parseInt(t.substr(1,6),16),[a>>16,a>>8&mn,a&mn,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),a=[t>>16,t>>8&mn,t&mn]}else if(t.substr(0,3)==="hsl"){if(a=E=t.match(f0),!e)h=+a[0]%360/360,p=+a[1]/100,m=+a[2]/100,c=m<=.5?m*(p+1):m+p-m*p,l=m*2-c,a.length>3&&(a[3]*=1),a[0]=eg(h+1/3,l,c),a[1]=eg(h,l,c),a[2]=eg(h-1/3,l,c);else if(~t.indexOf("="))return a=t.match(oT),i&&a.length<4&&(a[3]=1),a}else a=t.match(f0)||wc.transparent;a=a.map(Number)}return e&&!E&&(l=a[0]/mn,c=a[1]/mn,f=a[2]/mn,g=Math.max(l,c,f),x=Math.min(l,c,f),m=(g+x)/2,g===x?h=p=0:(v=g-x,p=m>.5?v/(2-g-x):v/(g+x),h=g===l?(c-f)/v+(c<f?6:0):g===c?(f-l)/v+2:(l-c)/v+4,h*=60),a[0]=~~(h+.5),a[1]=~~(p*100+.5),a[2]=~~(m*100+.5)),i&&a.length<4&&(a[3]=1),a},LT=function(t){var e=[],i=[],a=-1;return t.split(Fs).forEach(function(l){var c=l.match(kl)||[];e.push.apply(e,c),i.push(a+=c.length+1)}),e.c=i,e},E1=function(t,e,i){var a="",l=(t+a).match(Fs),c=e?"hsla(":"rgba(",f=0,h,p,m,g;if(!l)return t;if(l=l.map(function(x){return(x=UT(x,e,1))&&c+(e?x[0]+","+x[1]+"%,"+x[2]+"%,"+x[3]:x.join(","))+")"}),i&&(m=LT(t),h=i.c,h.join(a)!==m.c.join(a)))for(p=t.replace(Fs,"1").split(kl),g=p.length-1;f<g;f++)a+=p[f]+(~h.indexOf(f)?l.shift()||c+"0,0,0,0)":(m.length?m:l.length?l:i).shift());if(!p)for(p=t.split(Fs),g=p.length-1;f<g;f++)a+=p[f]+l[f];return a+p[g]},Fs=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in wc)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),TO=/hsl[a]?\(/,OT=function(t){var e=t.join(" "),i;if(Fs.lastIndex=0,Fs.test(e))return i=TO.test(e),t[1]=E1(t[1],i),t[0]=E1(t[0],i,LT(t[1])),!0},ef,mr=function(){var s=Date.now,t=500,e=33,i=s(),a=i,l=1e3/240,c=l,f=[],h,p,m,g,x,v,E=function M(y){var S=s()-a,L=y===!0,D,A,P,z;if((S>t||S<0)&&(i+=S-e),a+=S,P=a-i,D=P-c,(D>0||L)&&(z=++g.frame,x=P-g.time*1e3,g.time=P=P/1e3,c+=D+(D>=l?4:l-D),A=1),L||(h=p(M)),A)for(v=0;v<f.length;v++)f[v](P,x,z,y)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return x/(1e3/(y||60))},wake:function(){cT&&(!h0&&tv()&&(ra=h0=window,ev=ra.document||{},yr.gsap=tr,(ra.gsapVersions||(ra.gsapVersions=[])).push(tr.version),fT(Fd||ra.GreenSockGlobals||!ra.gsap&&ra||{}),CT.forEach(DT)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&g.sleep(),p=m||function(y){return setTimeout(y,c-g.time*1e3+1|0)},ef=1,E(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(h),ef=0,p=$c},lagSmoothing:function(y,S){t=y||1/0,e=Math.min(S||33,t)},fps:function(y){l=1e3/(y||240),c=g.time*1e3+l},add:function(y,S,L){var D=S?function(A,P,z,C){y(A,P,z,C),g.remove(D)}:y;return g.remove(y),f[L?"unshift":"push"](D),_u(),D},remove:function(y,S){~(S=f.indexOf(y))&&f.splice(S,1)&&v>=S&&v--},_listeners:f},g}(),_u=function(){return!ef&&mr.wake()},Ve={},bO=/^[\d.\-M][\d.\-,\s]/,AO=/["']/g,RO=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),a=i[0],l=1,c=i.length,f,h,p;l<c;l++)h=i[l],f=l!==c-1?h.lastIndexOf(","):h.length,p=h.substr(0,f),e[a]=isNaN(p)?p.replace(AO,"").trim():+p,a=h.substr(f+1).trim();return e},wO=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),a=t.indexOf("(",e);return t.substring(e,~a&&a<i?t.indexOf(")",i+1):i)},CO=function(t){var e=(t+"").split("("),i=Ve[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[RO(e[1])]:wO(t).split(",").map(_T)):Ve._CE&&bO.test(t)?Ve._CE("",t):i},NT=function(t){return function(e){return 1-t(1-e)}},PT=function s(t,e){for(var i=t._first,a;i;)i instanceof Bi?s(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?s(i.timeline,e):(a=i._ease,i._ease=i._yEase,i._yEase=a,i._yoyo=e)),i=i._next},Oo=function(t,e){return t&&(On(t)?t:Ve[t]||CO(t))||e},ko=function(t,e,i,a){i===void 0&&(i=function(h){return 1-e(1-h)}),a===void 0&&(a=function(h){return h<.5?e(h*2)/2:1-e((1-h)*2)/2});var l={easeIn:e,easeOut:i,easeInOut:a},c;return Ki(t,function(f){Ve[f]=yr[f]=l,Ve[c=f.toLowerCase()]=i;for(var h in l)Ve[c+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=Ve[f+"."+h]=l[h]}),l},zT=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ng=function s(t,e,i){var a=e>=1?e:1,l=(i||(t?.3:.45))/(e<1?e:1),c=l/c0*(Math.asin(1/a)||0),f=function(m){return m===1?1:a*Math.pow(2,-10*m)*iO((m-c)*l)+1},h=t==="out"?f:t==="in"?function(p){return 1-f(1-p)}:zT(f);return l=c0/l,h.config=function(p,m){return s(t,p,m)},h},ig=function s(t,e){e===void 0&&(e=1.70158);var i=function(c){return c?--c*c*((e+1)*c+e)+1:0},a=t==="out"?i:t==="in"?function(l){return 1-i(1-l)}:zT(i);return a.config=function(l){return s(t,l)},a};Ki("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;ko(s+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;ko("Elastic",ng("in"),ng("out"),ng());(function(s,t){var e=1/t,i=2*e,a=2.5*e,l=function(f){return f<e?s*f*f:f<i?s*Math.pow(f-1.5/t,2)+.75:f<a?s*(f-=2.25/t)*f+.9375:s*Math.pow(f-2.625/t,2)+.984375};ko("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);ko("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});ko("Circ",function(s){return-(aT(1-s*s)-1)});ko("Sine",function(s){return s===1?1:-nO(s*tO)+1});ko("Back",ig("in"),ig("out"),ig());Ve.SteppedEase=Ve.steps=yr.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,a=t+(e?0:1),l=e?1:0,c=1-Ri;return function(f){return((a*gf(0,c,f)|0)+l)*i}}};hu.ease=Ve["quad.out"];Ki("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return rv+=s+","+s+"Params,"});var BT=function(t,e){this.id=eO++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:pT,this.set=e?e.getSetter:uv},nf=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,mu(this,+e.duration,1,1),this.data=e.data,En&&(this._ctx=En,En.data.push(this)),ef||mr.wake()}var t=s.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,mu(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,a){if(_u(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(cp(this,i),!l._dp||l.parent||xT(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&la(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===Ri||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),mT(this,i,a)),this},t.time=function(i,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+y1(this))%(this._dur+this._rDelay)||(i?this._dur:0),a):this._time},t.totalProgress=function(i,a){return arguments.length?this.totalTime(this.totalDuration()*i,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+y1(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,a){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,a):this._repeat?pu(this._tTime,l)+1:1},t.timeScale=function(i,a){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?Vd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-1e-8?0:this._rts,this.totalTime(gf(-Math.abs(this._delay),this._tDur,l),a!==!1),up(this),cO(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_u(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ri&&(this._tTime-=Ri)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&la(a,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Qi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var a=this.parent||this._dp;return a?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vd(a.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=sO);var a=mi;return mi=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),mi=a,this},t.globalTime=function(i){for(var a=this,l=arguments.length?i:a.rawTime();a;)l=a._start+l/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,S1(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var a=this._time;return this._rDelay=i,S1(this),a?this.time(a):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,a){return this.totalTime(Ur(this,i),Qi(a))},t.restart=function(i,a){return this.play().totalTime(i?-this._delay:0,Qi(a)),this._dur||(this._zTime=-1e-8),this},t.play=function(i,a){return i!=null&&this.seek(i,a),this.reversed(!1).paused(!1)},t.reverse=function(i,a){return i!=null&&this.seek(i||this.totalDuration(),a),this.reversed(!0).paused(!1)},t.pause=function(i,a){return i!=null&&this.seek(i,a),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var i=this.parent||this._dp,a=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=a&&l<this.endTime(!0)-Ri)},t.eventCallback=function(i,a,l){var c=this.vars;return arguments.length>1?(a?(c[i]=a,l&&(c[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=a)):delete c[i],this):c[i]},t.then=function(i){var a=this;return new Promise(function(l){var c=On(i)?i:gT,f=function(){var p=a.then;a.then=null,On(c)&&(c=c(a))&&(c.then||c===a)&&(a.then=p),l(c),a.then=p};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?f():a._prom=f})},t.kill=function(){Rc(this)},s}();Sr(nf.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Bi=function(s){rT(t,s);function t(i,a){var l;return i===void 0&&(i={}),l=s.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=Qi(i.sortChildren),Rn&&la(i.parent||Rn,Fa(l),a),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&yT(Fa(l),i.scrollTrigger),l}var e=t.prototype;return e.to=function(a,l,c){return zc(0,arguments,this),this},e.from=function(a,l,c){return zc(1,arguments,this),this},e.fromTo=function(a,l,c,f){return zc(2,arguments,this),this},e.set=function(a,l,c){return l.duration=0,l.parent=this,Pc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Xn(a,l,Ur(this,c),1),this},e.call=function(a,l,c){return la(this,Xn.delayedCall(0,a,l),c)},e.staggerTo=function(a,l,c,f,h,p,m){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=p,c.onCompleteParams=m,c.parent=this,new Xn(a,c,Ur(this,h)),this},e.staggerFrom=function(a,l,c,f,h,p,m){return c.runBackwards=1,Pc(c).immediateRender=Qi(c.immediateRender),this.staggerTo(a,l,c,f,h,p,m)},e.staggerFromTo=function(a,l,c,f,h,p,m,g){return f.startAt=c,Pc(f).immediateRender=Qi(f.immediateRender),this.staggerTo(a,l,f,h,p,m,g)},e.render=function(a,l,c){var f=this._time,h=this._dirty?this.totalDuration():this._tDur,p=this._dur,m=a<=0?0:Wn(a),g=this._zTime<0!=a<0&&(this._initted||!p),x,v,E,M,y,S,L,D,A,P,z,C;if(this!==Rn&&m>h&&a>=0&&(m=h),m!==this._tTime||c||g){if(f!==this._time&&p&&(m+=this._time-f,a+=this._time-f),x=m,A=this._start,D=this._ts,S=!D,g&&(p||(f=this._zTime),(a||!l)&&(this._zTime=a)),this._repeat){if(z=this._yoyo,y=p+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(y*100+a,l,c);if(x=Wn(m%y),m===h?(M=this._repeat,x=p):(P=Wn(m/y),M=~~P,M&&M===P&&(x=p,M--),x>p&&(x=p)),P=pu(this._tTime,y),!f&&this._tTime&&P!==M&&this._tTime-P*y-this._dur<=0&&(P=M),z&&M&1&&(x=p-x,C=1),M!==P&&!this._lock){var F=z&&P&1,w=F===(z&&M&1);if(M<P&&(F=!F),f=F?0:m%p?p:m,this._lock=1,this.render(f||(C?0:Wn(M*y)),l,!p)._lock=0,this._tTime=m,!l&&this.parent&&gr(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),f&&f!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,h=this._tDur,w&&(this._lock=2,f=F?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!S)return this;PT(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(L=pO(this,Wn(f),Wn(x)),L&&(m-=x-(x=L._start))),this._tTime=m,this._time=x,this._act=!D,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,f=0),!f&&x&&!l&&!M&&(gr(this,"onStart"),this._tTime!==m))return this;if(x>=f&&a>=0)for(v=this._first;v;){if(E=v._next,(v._act||x>=v._start)&&v._ts&&L!==v){if(v.parent!==this)return this.render(a,l,c);if(v.render(v._ts>0?(x-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(x-v._start)*v._ts,l,c),x!==this._time||!this._ts&&!S){L=0,E&&(m+=this._zTime=-1e-8);break}}v=E}else{v=this._last;for(var R=a<0?a:x;v;){if(E=v._prev,(v._act||R<=v._end)&&v._ts&&L!==v){if(v.parent!==this)return this.render(a,l,c);if(v.render(v._ts>0?(R-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(R-v._start)*v._ts,l,c||mi&&(v._initted||v._startAt)),x!==this._time||!this._ts&&!S){L=0,E&&(m+=this._zTime=R?-1e-8:Ri);break}}v=E}}if(L&&!l&&(this.pause(),L.render(x>=f?0:-1e-8)._zTime=x>=f?1:-1,this._ts))return this._start=A,up(this),this.render(a,l,c);this._onUpdate&&!l&&gr(this,"onUpdate",!0),(m===h&&this._tTime>=this.totalDuration()||!m&&f)&&(A===this._start||Math.abs(D)!==Math.abs(this._ts))&&(this._lock||((a||!p)&&(m===h&&this._ts>0||!m&&this._ts<0)&&Vs(this,1),!l&&!(a<0&&!f)&&(m||f||!h)&&(gr(this,m===h&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<h&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(a,l){var c=this;if(Ja(l)||(l=Ur(this,l,a)),!(a instanceof nf)){if(wi(a))return a.forEach(function(f){return c.add(f,l)}),this;if(ui(a))return this.addLabel(a,l);if(On(a))a=Xn.delayedCall(0,a);else return this}return this!==a?la(this,a,l):this},e.getChildren=function(a,l,c,f){a===void 0&&(a=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-1e8);for(var h=[],p=this._first;p;)p._start>=f&&(p instanceof Xn?l&&h.push(p):(c&&h.push(p),a&&h.push.apply(h,p.getChildren(!0,l,c)))),p=p._next;return h},e.getById=function(a){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===a)return l[c]},e.remove=function(a){return ui(a)?this.removeLabel(a):On(a)?this.killTweensOf(a):(a.parent===this&&lp(this,a),a===this._recent&&(this._recent=this._last),Lo(this))},e.totalTime=function(a,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wn(mr.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),s.prototype.totalTime.call(this,a,l),this._forcing=0,this):this._tTime},e.addLabel=function(a,l){return this.labels[a]=Ur(this,l),this},e.removeLabel=function(a){return delete this.labels[a],this},e.addPause=function(a,l,c){var f=Xn.delayedCall(0,l||$c,c);return f.data="isPause",this._hasPause=1,la(this,f,Ur(this,a))},e.removePause=function(a){var l=this._first;for(a=Ur(this,a);l;)l._start===a&&l.data==="isPause"&&Vs(l),l=l._next},e.killTweensOf=function(a,l,c){for(var f=this.getTweensOf(a,c),h=f.length;h--;)Ls!==f[h]&&f[h].kill(a,l);return this},e.getTweensOf=function(a,l){for(var c=[],f=zr(a),h=this._first,p=Ja(l),m;h;)h instanceof Xn?oO(h._targets,f)&&(p?(!Ls||h._initted&&h._ts)&&h.globalTime(0)<=l&&h.globalTime(h.totalDuration())>l:!l||h.isActive())&&c.push(h):(m=h.getTweensOf(f,l)).length&&c.push.apply(c,m),h=h._next;return c},e.tweenTo=function(a,l){l=l||{};var c=this,f=Ur(c,a),h=l,p=h.startAt,m=h.onStart,g=h.onStartParams,x=h.immediateRender,v,E=Xn.to(c,Sr({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale())||Ri,onStart:function(){if(c.pause(),!v){var y=l.duration||Math.abs((f-(p&&"time"in p?p.time:c._time))/c.timeScale());E._dur!==y&&mu(E,y,0,1).render(E._time,!0,!0),v=1}m&&m.apply(E,g||[])}},l));return x?E.render(0):E},e.tweenFromTo=function(a,l,c){return this.tweenTo(l,Sr({startAt:{time:Ur(this,a)}},c))},e.recent=function(){return this._recent},e.nextLabel=function(a){return a===void 0&&(a=this._time),M1(this,Ur(this,a))},e.previousLabel=function(a){return a===void 0&&(a=this._time),M1(this,Ur(this,a),1)},e.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+Ri)},e.shiftChildren=function(a,l,c){c===void 0&&(c=0);for(var f=this._first,h=this.labels,p;f;)f._start>=c&&(f._start+=a,f._end+=a),f=f._next;if(l)for(p in h)h[p]>=c&&(h[p]+=a);return Lo(this)},e.invalidate=function(a){var l=this._first;for(this._lock=0;l;)l.invalidate(a),l=l._next;return s.prototype.invalidate.call(this,a)},e.clear=function(a){a===void 0&&(a=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),Lo(this)},e.totalDuration=function(a){var l=0,c=this,f=c._last,h=ha,p,m,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-a:a));if(c._dirty){for(g=c.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>h&&c._sort&&f._ts&&!c._lock?(c._lock=1,la(c,f,m-f._delay,1)._lock=0):h=m,m<0&&f._ts&&(l-=m,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=m/c._ts,c._time-=m,c._tTime-=m),c.shiftChildren(-m,!1,-1/0),h=0),f._end>l&&f._ts&&(l=f._end),f=p;mu(c,c===Rn&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(a){if(Rn._ts&&(mT(Rn,Vd(a,Rn)),dT=mr.frame),mr.frame>=v1){v1+=xr.autoSleep||120;var l=Rn._first;if((!l||!l._ts)&&xr.autoSleep&&mr._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||mr.sleep()}}},t}(nf);Sr(Bi.prototype,{_lock:0,_hasPause:0,_forcing:0});var DO=function(t,e,i,a,l,c,f){var h=new Ji(this._pt,t,e,0,1,kT,null,l),p=0,m=0,g,x,v,E,M,y,S,L;for(h.b=i,h.e=a,i+="",a+="",(S=~a.indexOf("random("))&&(a=tf(a)),c&&(L=[i,a],c(L,t,e),i=L[0],a=L[1]),x=i.match($_)||[];g=$_.exec(a);)E=g[0],M=a.substring(p,g.index),v?v=(v+1)%5:M.substr(-5)==="rgba("&&(v=1),E!==x[m++]&&(y=parseFloat(x[m-1])||0,h._pt={_next:h._pt,p:M||m===1?M:",",s:y,c:E.charAt(1)==="="?jl(y,E)-y:parseFloat(E)-y,m:v&&v<4?Math.round:0},p=$_.lastIndex);return h.c=p<a.length?a.substring(p,a.length):"",h.fp=f,(lT.test(a)||S)&&(h.e=0),this._pt=h,h},sv=function(t,e,i,a,l,c,f,h,p,m){On(a)&&(a=a(l||0,t,c));var g=t[e],x=i!=="get"?i:On(g)?p?t[e.indexOf("set")||!On(t["get"+e.substr(3)])?e:"get"+e.substr(3)](p):t[e]():g,v=On(g)?p?PO:GT:lv,E;if(ui(a)&&(~a.indexOf("random(")&&(a=tf(a)),a.charAt(1)==="="&&(E=jl(x,a)+(bi(x)||0),(E||E===0)&&(a=E))),!m||x!==a||x0)return!isNaN(x*a)&&a!==""?(E=new Ji(this._pt,t,e,+x||0,a-(x||0),typeof g=="boolean"?BO:VT,0,v),p&&(E.fp=p),f&&E.modifier(f,this,t),this._pt=E):(!g&&!(e in t)&&nv(e,a),DO.call(this,t,e,x,a,v,h||xr.stringFilter,p))},UO=function(t,e,i,a,l){if(On(t)&&(t=Bc(t,l,e,i,a)),!ma(t)||t.style&&t.nodeType||wi(t)||sT(t))return ui(t)?Bc(t,l,e,i,a):t;var c={},f;for(f in t)c[f]=Bc(t[f],l,e,i,a);return c},IT=function(t,e,i,a,l,c){var f,h,p,m;if(dr[t]&&(f=new dr[t]).init(l,f.rawVars?e[t]:UO(e[t],a,l,c,i),i,a,c)!==!1&&(i._pt=h=new Ji(i._pt,l,t,0,1,f.render,f,0,f.priority),i!==Xl))for(p=i._ptLookup[i._targets.indexOf(l)],m=f._props.length;m--;)p[f._props[m]]=h;return f},Ls,x0,ov=function s(t,e,i){var a=t.vars,l=a.ease,c=a.startAt,f=a.immediateRender,h=a.lazy,p=a.onUpdate,m=a.runBackwards,g=a.yoyoEase,x=a.keyframes,v=a.autoRevert,E=t._dur,M=t._startAt,y=t._targets,S=t.parent,L=S&&S.data==="nested"?S.vars.targets:y,D=t._overwrite==="auto"&&!J0,A=t.timeline,P,z,C,F,w,R,H,Y,tt,lt,at,I,X;if(A&&(!x||!l)&&(l="none"),t._ease=Oo(l,hu.ease),t._yEase=g?NT(Oo(g===!0?l:g,hu.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!A&&!!a.runBackwards,!A||x&&!a.stagger){if(Y=y[0]?Uo(y[0]).harness:0,I=Y&&a[Y.prop],P=Gd(a,iv),M&&(M._zTime<0&&M.progress(1),e<0&&m&&f&&!v?M.render(-1,!0):M.revert(m&&E?Md:aO),M._lazy=0),c){if(Vs(t._startAt=Xn.set(y,Sr({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!M&&Qi(h),startAt:null,delay:0,onUpdate:p&&function(){return gr(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mi||!f&&!v)&&t._startAt.revert(Md),f&&E&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(m&&E&&!M){if(e&&(f=!1),C=Sr({overwrite:!1,data:"isFromStart",lazy:f&&!M&&Qi(h),immediateRender:f,stagger:0,parent:S},P),I&&(C[Y.prop]=I),Vs(t._startAt=Xn.set(y,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(mi?t._startAt.revert(Md):t._startAt.render(-1,!0)),t._zTime=e,!f)s(t._startAt,Ri,Ri);else if(!e)return}for(t._pt=t._ptCache=0,h=E&&Qi(h)||h&&!E,z=0;z<y.length;z++){if(w=y[z],H=w._gsap||av(y)[z]._gsap,t._ptLookup[z]=lt={},d0[H.id]&&Is.length&&Hd(),at=L===y?z:L.indexOf(w),Y&&(tt=new Y).init(w,I||P,t,at,L)!==!1&&(t._pt=F=new Ji(t._pt,w,tt.name,0,1,tt.render,tt,0,tt.priority),tt._props.forEach(function(W){lt[W]=F}),tt.priority&&(R=1)),!Y||I)for(C in P)dr[C]&&(tt=IT(C,P,t,at,w,L))?tt.priority&&(R=1):lt[C]=F=sv.call(t,w,C,"get",P[C],at,L,0,a.stringFilter);t._op&&t._op[z]&&t.kill(w,t._op[z]),D&&t._pt&&(Ls=t,Rn.killTweensOf(w,lt,t.globalTime(e)),X=!t.parent,Ls=0),t._pt&&h&&(d0[H.id]=1)}R&&XT(t),t._onInit&&t._onInit(t)}t._onUpdate=p,t._initted=(!t._op||t._pt)&&!X,x&&e<=0&&A.render(ha,!0,!0)},LO=function(t,e,i,a,l,c,f,h){var p=(t._pt&&t._ptCache||(t._ptCache={}))[e],m,g,x,v;if(!p)for(p=t._ptCache[e]=[],x=t._ptLookup,v=t._targets.length;v--;){if(m=x[v][e],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==e&&m.fp!==e;)m=m._next;if(!m)return x0=1,t.vars[e]="+=0",ov(t,f),x0=0,h?Jc(e+" not eligible for reset"):1;p.push(m)}for(v=p.length;v--;)g=p[v],m=g._pt||g,m.s=(a||a===0)&&!l?a:m.s+(a||0)+c*m.c,m.c=i-m.s,g.e&&(g.e=zn(i)+bi(g.e)),g.b&&(g.b=m.s+bi(g.b))},OO=function(t,e){var i=t[0]?Uo(t[0]).harness:0,a=i&&i.aliases,l,c,f,h;if(!a)return e;l=du({},e);for(c in a)if(c in l)for(h=a[c].split(","),f=h.length;f--;)l[h[f]]=l[c];return l},NO=function(t,e,i,a){var l=e.ease||a||"power1.inOut",c,f;if(wi(e))f=i[t]||(i[t]=[]),e.forEach(function(h,p){return f.push({t:p/(e.length-1)*100,v:h,e:l})});else for(c in e)f=i[c]||(i[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:e[c],e:l})},Bc=function(t,e,i,a,l){return On(t)?t.call(e,i,a,l):ui(t)&&~t.indexOf("random(")?tf(t):t},FT=rv+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",HT={};Ki(FT+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return HT[s]=1});var Xn=function(s){rT(t,s);function t(i,a,l,c){var f;typeof a=="number"&&(l.duration=a,a=l,l=null),f=s.call(this,c?a:Pc(a))||this;var h=f.vars,p=h.duration,m=h.delay,g=h.immediateRender,x=h.stagger,v=h.overwrite,E=h.keyframes,M=h.defaults,y=h.scrollTrigger,S=h.yoyoEase,L=a.parent||Rn,D=(wi(i)||sT(i)?Ja(i[0]):"length"in a)?[i]:zr(i),A,P,z,C,F,w,R,H;if(f._targets=D.length?av(D):Jc("GSAP target "+i+" not found. https://gsap.com",!xr.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=v,E||x||Qh(p)||Qh(m)){if(a=f.vars,A=f.timeline=new Bi({data:"nested",defaults:M||{},targets:L&&L.data==="nested"?L.vars.targets:D}),A.kill(),A.parent=A._dp=Fa(f),A._start=0,x||Qh(p)||Qh(m)){if(C=D.length,R=x&&TT(x),ma(x))for(F in x)~FT.indexOf(F)&&(H||(H={}),H[F]=x[F]);for(P=0;P<C;P++)z=Gd(a,HT),z.stagger=0,S&&(z.yoyoEase=S),H&&du(z,H),w=D[P],z.duration=+Bc(p,Fa(f),P,w,D),z.delay=(+Bc(m,Fa(f),P,w,D)||0)-f._delay,!x&&C===1&&z.delay&&(f._delay=m=z.delay,f._start+=m,z.delay=0),A.to(w,z,R?R(P,w,D):0),A._ease=Ve.none;A.duration()?p=m=0:f.timeline=0}else if(E){Pc(Sr(A.vars.defaults,{ease:"none"})),A._ease=Oo(E.ease||a.ease||"none");var Y=0,tt,lt,at;if(wi(E))E.forEach(function(I){return A.to(D,I,">")}),A.duration();else{z={};for(F in E)F==="ease"||F==="easeEach"||NO(F,E[F],z,E.easeEach);for(F in z)for(tt=z[F].sort(function(I,X){return I.t-X.t}),Y=0,P=0;P<tt.length;P++)lt=tt[P],at={ease:lt.e,duration:(lt.t-(P?tt[P-1].t:0))/100*p},at[F]=lt.v,A.to(D,at,Y),Y+=at.duration;A.duration()<p&&A.to({},{duration:p-A.duration()})}}p||f.duration(p=A.duration())}else f.timeline=0;return v===!0&&!J0&&(Ls=Fa(f),Rn.killTweensOf(D),Ls=0),la(L,Fa(f),l),a.reversed&&f.reverse(),a.paused&&f.paused(!0),(g||!p&&!E&&f._start===Wn(L._time)&&Qi(g)&&fO(Fa(f))&&L.data!=="nested")&&(f._tTime=-1e-8,f.render(Math.max(0,-m)||0)),y&&yT(Fa(f),y),f}var e=t.prototype;return e.render=function(a,l,c){var f=this._time,h=this._tDur,p=this._dur,m=a<0,g=a>h-Ri&&!m?h:a<Ri?0:a,x,v,E,M,y,S,L,D,A;if(!p)dO(this,a,l,c);else if(g!==this._tTime||!a||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(x=g,D=this.timeline,this._repeat){if(M=p+this._rDelay,this._repeat<-1&&m)return this.totalTime(M*100+a,l,c);if(x=Wn(g%M),g===h?(E=this._repeat,x=p):(y=Wn(g/M),E=~~y,E&&E===y?(x=p,E--):x>p&&(x=p)),S=this._yoyo&&E&1,S&&(A=this._yEase,x=p-x),y=pu(this._tTime,M),x===f&&!c&&this._initted&&E===y)return this._tTime=g,this;E!==y&&(D&&this._yEase&&PT(D,S),this.vars.repeatRefresh&&!S&&!this._lock&&x!==M&&this._initted&&(this._lock=c=1,this.render(Wn(M*E),!0).invalidate()._lock=0))}if(!this._initted){if(ST(this,m?a:x,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&E!==y))return this;if(p!==this._dur)return this.render(a,l,c)}if(this._tTime=g,this._time=x,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=L=(A||this._ease)(x/p),this._from&&(this.ratio=L=1-L),x&&!f&&!l&&!E&&(gr(this,"onStart"),this._tTime!==g))return this;for(v=this._pt;v;)v.r(L,v.d),v=v._next;D&&D.render(a<0?a:D._dur*D._ease(x/this._dur),l,c)||this._startAt&&(this._zTime=a),this._onUpdate&&!l&&(m&&p0(this,a,l,c),gr(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!l&&this.parent&&gr(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(m&&!this._onUpdate&&p0(this,a,!0,!0),(a||!p)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Vs(this,1),!l&&!(m&&!f)&&(g||f||S)&&(gr(this,g===h?"onComplete":"onReverseComplete",!0),this._prom&&!(g<h&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),s.prototype.invalidate.call(this,a)},e.resetTo=function(a,l,c,f,h){ef||mr.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||ov(this,p),m=this._ease(p/this._dur),LO(this,a,l,c,f,m,p,h)?this.resetTo(a,l,c,f,1):(cp(this,0),this.parent||vT(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(a,l){if(l===void 0&&(l="all"),!a&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Rc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!mi),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(a,l,Ls&&Ls.vars.overwrite!==!0)._first||Rc(this),this.parent&&c!==this.timeline.totalDuration()&&mu(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,h=a?zr(a):f,p=this._ptLookup,m=this._pt,g,x,v,E,M,y,S;if((!l||l==="all")&&uO(f,h))return l==="all"&&(this._pt=0),Rc(this);for(g=this._op=this._op||[],l!=="all"&&(ui(l)&&(M={},Ki(l,function(L){return M[L]=1}),l=M),l=OO(f,l)),S=f.length;S--;)if(~h.indexOf(f[S])){x=p[S],l==="all"?(g[S]=l,E=x,v={}):(v=g[S]=g[S]||{},E=l);for(M in E)y=x&&x[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&lp(this,y,"_pt"),delete x[M]),v!=="all"&&(v[M]=1)}return this._initted&&!this._pt&&m&&Rc(this),this},t.to=function(a,l){return new t(a,l,arguments[2])},t.from=function(a,l){return zc(1,arguments)},t.delayedCall=function(a,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(a,l,c){return zc(2,arguments)},t.set=function(a,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(a,l)},t.killTweensOf=function(a,l,c){return Rn.killTweensOf(a,l,c)},t}(nf);Sr(Xn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ki("staggerTo,staggerFrom,staggerFromTo",function(s){Xn[s]=function(){var t=new Bi,e=_0.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var lv=function(t,e,i){return t[e]=i},GT=function(t,e,i){return t[e](i)},PO=function(t,e,i,a){return t[e](a.fp,i)},zO=function(t,e,i){return t.setAttribute(e,i)},uv=function(t,e){return On(t[e])?GT:$0(t[e])&&t.setAttribute?zO:lv},VT=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},BO=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},kT=function(t,e){var i=e._pt,a="";if(!t&&e.b)a=e.b;else if(t===1&&e.e)a=e.e;else{for(;i;)a=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+a,i=i._next;a+=e.c}e.set(e.t,e.p,a,e)},cv=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},IO=function(t,e,i,a){for(var l=this._pt,c;l;)c=l._next,l.p===a&&l.modifier(t,e,i),l=c},FO=function(t){for(var e=this._pt,i,a;e;)a=e._next,e.p===t&&!e.op||e.op===t?lp(this,e,"_pt"):e.dep||(i=1),e=a;return!i},HO=function(t,e,i,a){a.mSet(t,e,a.m.call(a.tween,i,a.mt),a)},XT=function(t){for(var e=t._pt,i,a,l,c;e;){for(i=e._next,a=l;a&&a.pr>e.pr;)a=a._next;(e._prev=a?a._prev:c)?e._prev._next=e:l=e,(e._next=a)?a._prev=e:c=e,e=i}t._pt=l},Ji=function(){function s(e,i,a,l,c,f,h,p,m){this.t=i,this.s=l,this.c=c,this.p=a,this.r=f||VT,this.d=h||this,this.set=p||lv,this.pr=m||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(i,a,l){this.mSet=this.mSet||this.set,this.set=HO,this.m=i,this.mt=l,this.tween=a},s}();Ki(rv+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return iv[s]=1});yr.TweenMax=yr.TweenLite=Xn;yr.TimelineLite=yr.TimelineMax=Bi;Rn=new Bi({sortChildren:!1,defaults:hu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});xr.stringFilter=OT;var No=[],Td={},GO=[],T1=0,VO=0,rg=function(t){return(Td[t]||GO).map(function(e){return e()})},y0=function(){var t=Date.now(),e=[];t-T1>2&&(rg("matchMediaInit"),No.forEach(function(i){var a=i.queries,l=i.conditions,c,f,h,p;for(f in a)c=ra.matchMedia(a[f]).matches,c&&(h=1),c!==l[f]&&(l[f]=c,p=1);p&&(i.revert(),h&&e.push(i))}),rg("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(a){return i.add(null,a)})}),T1=t,rg("matchMedia"))},WT=function(){function s(e,i){this.selector=i&&g0(i),this.data=[],this._r=[],this.isReverted=!1,this.id=VO++,e&&this.add(e)}var t=s.prototype;return t.add=function(i,a,l){On(i)&&(l=a,a=i,i=On);var c=this,f=function(){var p=En,m=c.selector,g;return p&&p!==c&&p.data.push(c),l&&(c.selector=g0(l)),En=c,g=a.apply(c,arguments),On(g)&&c._r.push(g),En=p,c.selector=m,c.isReverted=!1,g};return c.last=f,i===On?f(c,function(h){return c.add(null,h)}):i?c[i]=f:f},t.ignore=function(i){var a=En;En=null,i(this),En=a},t.getTweens=function(){var i=[];return this.data.forEach(function(a){return a instanceof s?i.push.apply(i,a.getTweens()):a instanceof Xn&&!(a.parent&&a.parent.data==="nested")&&i.push(a)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,a){var l=this;if(i?function(){for(var f=l.getTweens(),h=l.data.length,p;h--;)p=l.data[h],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,g){return g.g-m.g||-1/0}).forEach(function(m){return m.t.revert(i)}),h=l.data.length;h--;)p=l.data[h],p instanceof Bi?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof Xn)&&p.revert&&p.revert(i);l._r.forEach(function(m){return m(i,l)}),l.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),a)for(var c=No.length;c--;)No[c].id===this.id&&No.splice(c,1)},t.revert=function(i){this.kill(i||{})},s}(),kO=function(){function s(e){this.contexts=[],this.scope=e,En&&En.data.push(this)}var t=s.prototype;return t.add=function(i,a,l){ma(i)||(i={matches:i});var c=new WT(0,l||this.scope),f=c.conditions={},h,p,m;En&&!c.selector&&(c.selector=En.selector),this.contexts.push(c),a=c.add("onMatch",a),c.queries=i;for(p in i)p==="all"?m=1:(h=ra.matchMedia(i[p]),h&&(No.indexOf(c)<0&&No.push(c),(f[p]=h.matches)&&(m=1),h.addListener?h.addListener(y0):h.addEventListener("change",y0)));return m&&a(c,function(g){return c.add(null,g)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(a){return a.kill(i,!0)})},s}(),kd={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(a){return DT(a)})},timeline:function(t){return new Bi(t)},getTweensOf:function(t,e){return Rn.getTweensOf(t,e)},getProperty:function(t,e,i,a){ui(t)&&(t=zr(t)[0]);var l=Uo(t||{}).get,c=i?gT:_T;return i==="native"&&(i=""),t&&(e?c((dr[e]&&dr[e].get||l)(t,e,i,a)):function(f,h,p){return c((dr[f]&&dr[f].get||l)(t,f,h,p))})},quickSetter:function(t,e,i){if(t=zr(t),t.length>1){var a=t.map(function(m){return tr.quickSetter(m,e,i)}),l=a.length;return function(m){for(var g=l;g--;)a[g](m)}}t=t[0]||{};var c=dr[e],f=Uo(t),h=f.harness&&(f.harness.aliases||{})[e]||e,p=c?function(m){var g=new c;Xl._pt=0,g.init(t,i?m+i:m,Xl,0,[t]),g.render(1,g),Xl._pt&&cv(1,Xl)}:f.set(t,h);return c?p:function(m){return p(t,h,i?m+i:m,f,1)}},quickTo:function(t,e,i){var a,l=tr.to(t,Sr((a={},a[e]="+=0.1",a.paused=!0,a.stagger=0,a),i||{})),c=function(h,p,m){return l.resetTo(e,h,p,m)};return c.tween=l,c},isTweening:function(t){return Rn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Oo(t.ease,hu.ease)),x1(hu,t||{})},config:function(t){return x1(xr,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,a=t.plugins,l=t.defaults,c=t.extendTimeline;(a||"").split(",").forEach(function(f){return f&&!dr[f]&&!yr[f]&&Jc(e+" effect requires "+f+" plugin.")}),tg[e]=function(f,h,p){return i(zr(f),Sr(h||{},l),p)},c&&(Bi.prototype[e]=function(f,h,p){return this.add(tg[e](f,ma(h)?h:(p=h)&&{},this),p)})},registerEase:function(t,e){Ve[t]=Oo(e)},parseEase:function(t,e){return arguments.length?Oo(t,e):Ve},getById:function(t){return Rn.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Bi(t),a,l;for(i.smoothChildTiming=Qi(t.smoothChildTiming),Rn.remove(i),i._dp=0,i._time=i._tTime=Rn._time,a=Rn._first;a;)l=a._next,(e||!(!a._dur&&a instanceof Xn&&a.vars.onComplete===a._targets[0]))&&la(i,a,a._start-a._delay),a=l;return la(Rn,i,0),i},context:function(t,e){return t?new WT(t,e):En},matchMedia:function(t){return new kO(t)},matchMediaRefresh:function(){return No.forEach(function(t){var e=t.conditions,i,a;for(a in e)e[a]&&(e[a]=!1,i=1);i&&t.revert()})||y0()},addEventListener:function(t,e){var i=Td[t]||(Td[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Td[t],a=i&&i.indexOf(e);a>=0&&i.splice(a,1)},utils:{wrap:SO,wrapYoyo:MO,distribute:TT,random:AT,snap:bT,normalize:yO,getUnit:bi,clamp:_O,splitColor:UT,toArray:zr,selector:g0,mapRange:wT,pipe:vO,unitize:xO,interpolate:EO,shuffle:ET},install:fT,effects:tg,ticker:mr,updateRoot:Bi.updateRoot,plugins:dr,globalTimeline:Rn,core:{PropTween:Ji,globals:hT,Tween:Xn,Timeline:Bi,Animation:nf,getCache:Uo,_removeLinkedListItem:lp,reverting:function(){return mi},context:function(t){return t&&En&&(En.data.push(t),t._ctx=En),En},suppressOverwrites:function(t){return J0=t}}};Ki("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return kd[s]=Xn[s]});mr.add(Bi.updateRoot);Xl=kd.to({},{duration:0});var XO=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},WO=function(t,e){var i=t._targets,a,l,c;for(a in e)for(l=i.length;l--;)c=t._ptLookup[l][a],c&&(c=c.d)&&(c._pt&&(c=XO(c,a)),c&&c.modifier&&c.modifier(e[a],t,i[l],a))},ag=function(t,e){return{name:t,rawVars:1,init:function(a,l,c){c._onInit=function(f){var h,p;if(ui(l)&&(h={},Ki(l,function(m){return h[m]=1}),l=h),e){h={};for(p in l)h[p]=e(l[p]);l=h}WO(f,l)}}}},tr=kd.registerPlugin({name:"attr",init:function(t,e,i,a,l){var c,f,h;this.tween=i;for(c in e)h=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(h||0)+"",e[c],a,l,0,0,c),f.op=c,f.b=h,this._props.push(c)},render:function(t,e){for(var i=e._pt;i;)mi?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},ag("roundProps",v0),ag("modifiers"),ag("snap",bT))||kd;Xn.version=Bi.version=tr.version="3.12.7";cT=1;tv()&&_u();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var b1,Os,Zl,fv,Ro,A1,hv,YO=function(){return typeof window<"u"},$a={},xo=180/Math.PI,Ql=Math.PI/180,zl=Math.atan2,R1=1e8,dv=/([A-Z])/g,qO=/(left|right|width|margin|padding|x)/i,jO=/[\s,\(]\S/,ca={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},S0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ZO=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},QO=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},KO=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},YT=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},qT=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},JO=function(t,e,i){return t.style[e]=i},$O=function(t,e,i){return t.style.setProperty(e,i)},tN=function(t,e,i){return t._gsap[e]=i},eN=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},nN=function(t,e,i,a,l){var c=t._gsap;c.scaleX=c.scaleY=i,c.renderTransform(l,c)},iN=function(t,e,i,a,l){var c=t._gsap;c[e]=i,c.renderTransform(l,c)},wn="transform",$i=wn+"Origin",rN=function s(t,e){var i=this,a=this.target,l=a.style,c=a._gsap;if(t in $a&&l){if(this.tfm=this.tfm||{},t!=="transform")t=ca[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return i.tfm[f]=Ha(a,f)}):this.tfm[t]=c.x?c[t]:Ha(a,t),t===$i&&(this.tfm.zOrigin=c.zOrigin);else return ca.transform.split(",").forEach(function(f){return s.call(i,f,e)});if(this.props.indexOf(wn)>=0)return;c.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push($i,e,"")),t=wn}(l||e)&&this.props.push(t,e,l[t])},jT=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},aN=function(){var t=this.props,e=this.target,i=e.style,a=e._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?e[t[l]](t[l+2]):e[t[l]]=t[l+2]:t[l+2]?i[t[l]]=t[l+2]:i.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(dv,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)a[c]=this.tfm[c];a.svg&&(a.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=hv(),(!l||!l.isStart)&&!i[wn]&&(jT(i),a.zOrigin&&i[$i]&&(i[$i]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},ZT=function(t,e){var i={target:t,props:[],revert:aN,save:rN};return t._gsap||tr.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(a){return i.save(a)}),i},QT,M0=function(t,e){var i=Os.createElementNS?Os.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Os.createElement(t);return i&&i.style?i:Os.createElement(t)},da=function s(t,e,i){var a=getComputedStyle(t);return a[e]||a.getPropertyValue(e.replace(dv,"-$1").toLowerCase())||a.getPropertyValue(e)||!i&&s(t,gu(e)||e,1)||""},w1="O,Moz,ms,Ms,Webkit".split(","),gu=function(t,e,i){var a=e||Ro,l=a.style,c=5;if(t in l&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(w1[c]+t in l););return c<0?null:(c===3?"ms":c>=0?w1[c]:"")+t},E0=function(){YO()&&window.document&&(b1=window,Os=b1.document,Zl=Os.documentElement,Ro=M0("div")||{style:{}},M0("div"),wn=gu(wn),$i=wn+"Origin",Ro.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",QT=!!gu("perspective"),hv=tr.core.reverting,fv=1)},C1=function(t){var e=t.ownerSVGElement,i=M0("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=t.cloneNode(!0),l;a.style.display="block",i.appendChild(a),Zl.appendChild(i);try{l=a.getBBox()}catch{}return i.removeChild(a),Zl.removeChild(i),l},D1=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},KT=function(t){var e,i;try{e=t.getBBox()}catch{e=C1(t),i=1}return e&&(e.width||e.height)||i||(e=C1(t)),e&&!e.width&&!e.x&&!e.y?{x:+D1(t,["x","cx","x1"])||0,y:+D1(t,["y","cy","y1"])||0,width:0,height:0}:e},JT=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&KT(t))},Fo=function(t,e){if(e){var i=t.style,a;e in $a&&e!==$i&&(e=wn),i.removeProperty?(a=e.substr(0,2),(a==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(a==="--"?e:e.replace(dv,"-$1").toLowerCase())):i.removeAttribute(e)}},Ns=function(t,e,i,a,l,c){var f=new Ji(t._pt,e,i,0,1,c?qT:YT);return t._pt=f,f.b=a,f.e=l,t._props.push(i),f},U1={deg:1,rad:1,turn:1},sN={grid:1,flex:1},ks=function s(t,e,i,a){var l=parseFloat(i)||0,c=(i+"").trim().substr((l+"").length)||"px",f=Ro.style,h=qO.test(e),p=t.tagName.toLowerCase()==="svg",m=(p?"client":"offset")+(h?"Width":"Height"),g=100,x=a==="px",v=a==="%",E,M,y,S;if(a===c||!l||U1[a]||U1[c])return l;if(c!=="px"&&!x&&(l=s(t,e,i,"px")),S=t.getCTM&&JT(t),(v||c==="%")&&($a[e]||~e.indexOf("adius")))return E=S?t.getBBox()[h?"width":"height"]:t[m],zn(v?l/E*g:l/100*E);if(f[h?"width":"height"]=g+(x?c:a),M=a!=="rem"&&~e.indexOf("adius")||a==="em"&&t.appendChild&&!p?t:t.parentNode,S&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===Os||!M.appendChild)&&(M=Os.body),y=M._gsap,y&&v&&y.width&&h&&y.time===mr.time&&!y.uncache)return zn(l/y.width*g);if(v&&(e==="height"||e==="width")){var L=t.style[e];t.style[e]=g+a,E=t[m],L?t.style[e]=L:Fo(t,e)}else(v||c==="%")&&!sN[da(M,"display")]&&(f.position=da(t,"position")),M===t&&(f.position="static"),M.appendChild(Ro),E=Ro[m],M.removeChild(Ro),f.position="absolute";return h&&v&&(y=Uo(M),y.time=mr.time,y.width=M[m]),zn(x?E*l/g:E&&l?g/E*l:0)},Ha=function(t,e,i,a){var l;return fv||E0(),e in ca&&e!=="transform"&&(e=ca[e],~e.indexOf(",")&&(e=e.split(",")[0])),$a[e]&&e!=="transform"?(l=af(t,a),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:Wd(da(t,$i))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||a||~(l+"").indexOf("calc("))&&(l=Xd[e]&&Xd[e](t,e,i)||da(t,e)||pT(t,e)||(e==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?ks(t,e,l,i)+i:l},oN=function(t,e,i,a){if(!i||i==="none"){var l=gu(e,t,1),c=l&&da(t,l,1);c&&c!==i?(e=l,i=c):e==="borderColor"&&(i=da(t,"borderTopColor"))}var f=new Ji(this._pt,t.style,e,0,1,kT),h=0,p=0,m,g,x,v,E,M,y,S,L,D,A,P;if(f.b=i,f.e=a,i+="",a+="",a==="auto"&&(M=t.style[e],t.style[e]=a,a=da(t,e)||a,M?t.style[e]=M:Fo(t,e)),m=[i,a],OT(m),i=m[0],a=m[1],x=i.match(kl)||[],P=a.match(kl)||[],P.length){for(;g=kl.exec(a);)y=g[0],L=a.substring(h,g.index),E?E=(E+1)%5:(L.substr(-5)==="rgba("||L.substr(-5)==="hsla(")&&(E=1),y!==(M=x[p++]||"")&&(v=parseFloat(M)||0,A=M.substr((v+"").length),y.charAt(1)==="="&&(y=jl(v,y)+A),S=parseFloat(y),D=y.substr((S+"").length),h=kl.lastIndex-D.length,D||(D=D||xr.units[e]||A,h===a.length&&(a+=D,f.e+=D)),A!==D&&(v=ks(t,e,M,D)||0),f._pt={_next:f._pt,p:L||p===1?L:",",s:v,c:S-v,m:E&&E<4||e==="zIndex"?Math.round:0});f.c=h<a.length?a.substring(h,a.length):""}else f.r=e==="display"&&a==="none"?qT:YT;return lT.test(a)&&(f.e=0),this._pt=f,f},L1={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lN=function(t){var e=t.split(" "),i=e[0],a=e[1]||"50%";return(i==="top"||i==="bottom"||a==="left"||a==="right")&&(t=i,i=a,a=t),e[0]=L1[i]||i,e[1]=L1[a]||a,e.join(" ")},uN=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,a=i.style,l=e.u,c=i._gsap,f,h,p;if(l==="all"||l===!0)a.cssText="",h=1;else for(l=l.split(","),p=l.length;--p>-1;)f=l[p],$a[f]&&(h=1,f=f==="transformOrigin"?$i:wn),Fo(i,f);h&&(Fo(i,wn),c&&(c.svg&&i.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",af(i,1),c.uncache=1,jT(a)))}},Xd={clearProps:function(t,e,i,a,l){if(l.data!=="isFromStart"){var c=t._pt=new Ji(t._pt,e,i,0,0,uN);return c.u=a,c.pr=-10,c.tween=l,t._props.push(i),1}}},rf=[1,0,0,1,0,0],$T={},tb=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},O1=function(t){var e=da(t,wn);return tb(e)?rf:e.substr(7).match(oT).map(zn)},pv=function(t,e){var i=t._gsap||Uo(t),a=t.style,l=O1(t),c,f,h,p;return i.svg&&t.getAttribute("transform")?(h=t.transform.baseVal.consolidate().matrix,l=[h.a,h.b,h.c,h.d,h.e,h.f],l.join(",")==="1,0,0,1,0,0"?rf:l):(l===rf&&!t.offsetParent&&t!==Zl&&!i.svg&&(h=a.display,a.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(p=1,f=t.nextElementSibling,Zl.appendChild(t)),l=O1(t),h?a.display=h:Fo(t,"display"),p&&(f?c.insertBefore(t,f):c?c.appendChild(t):Zl.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},T0=function(t,e,i,a,l,c){var f=t._gsap,h=l||pv(t,!0),p=f.xOrigin||0,m=f.yOrigin||0,g=f.xOffset||0,x=f.yOffset||0,v=h[0],E=h[1],M=h[2],y=h[3],S=h[4],L=h[5],D=e.split(" "),A=parseFloat(D[0])||0,P=parseFloat(D[1])||0,z,C,F,w;i?h!==rf&&(C=v*y-E*M)&&(F=A*(y/C)+P*(-M/C)+(M*L-y*S)/C,w=A*(-E/C)+P*(v/C)-(v*L-E*S)/C,A=F,P=w):(z=KT(t),A=z.x+(~D[0].indexOf("%")?A/100*z.width:A),P=z.y+(~(D[1]||D[0]).indexOf("%")?P/100*z.height:P)),a||a!==!1&&f.smooth?(S=A-p,L=P-m,f.xOffset=g+(S*v+L*M)-S,f.yOffset=x+(S*E+L*y)-L):f.xOffset=f.yOffset=0,f.xOrigin=A,f.yOrigin=P,f.smooth=!!a,f.origin=e,f.originIsAbsolute=!!i,t.style[$i]="0px 0px",c&&(Ns(c,f,"xOrigin",p,A),Ns(c,f,"yOrigin",m,P),Ns(c,f,"xOffset",g,f.xOffset),Ns(c,f,"yOffset",x,f.yOffset)),t.setAttribute("data-svg-origin",A+" "+P)},af=function(t,e){var i=t._gsap||new BT(t);if("x"in i&&!e&&!i.uncache)return i;var a=t.style,l=i.scaleX<0,c="px",f="deg",h=getComputedStyle(t),p=da(t,$i)||"0",m,g,x,v,E,M,y,S,L,D,A,P,z,C,F,w,R,H,Y,tt,lt,at,I,X,W,ht,b,Q,pt,Mt,Z,dt;return m=g=x=M=y=S=L=D=A=0,v=E=1,i.svg=!!(t.getCTM&&JT(t)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(a[wn]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[wn]!=="none"?h[wn]:"")),a.scale=a.rotate=a.translate="none"),C=pv(t,i.svg),i.svg&&(i.uncache?(W=t.getBBox(),p=i.xOrigin-W.x+"px "+(i.yOrigin-W.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),T0(t,X||p,!!X||i.originIsAbsolute,i.smooth!==!1,C)),P=i.xOrigin||0,z=i.yOrigin||0,C!==rf&&(H=C[0],Y=C[1],tt=C[2],lt=C[3],m=at=C[4],g=I=C[5],C.length===6?(v=Math.sqrt(H*H+Y*Y),E=Math.sqrt(lt*lt+tt*tt),M=H||Y?zl(Y,H)*xo:0,L=tt||lt?zl(tt,lt)*xo+M:0,L&&(E*=Math.abs(Math.cos(L*Ql))),i.svg&&(m-=P-(P*H+z*tt),g-=z-(P*Y+z*lt))):(dt=C[6],Mt=C[7],b=C[8],Q=C[9],pt=C[10],Z=C[11],m=C[12],g=C[13],x=C[14],F=zl(dt,pt),y=F*xo,F&&(w=Math.cos(-F),R=Math.sin(-F),X=at*w+b*R,W=I*w+Q*R,ht=dt*w+pt*R,b=at*-R+b*w,Q=I*-R+Q*w,pt=dt*-R+pt*w,Z=Mt*-R+Z*w,at=X,I=W,dt=ht),F=zl(-tt,pt),S=F*xo,F&&(w=Math.cos(-F),R=Math.sin(-F),X=H*w-b*R,W=Y*w-Q*R,ht=tt*w-pt*R,Z=lt*R+Z*w,H=X,Y=W,tt=ht),F=zl(Y,H),M=F*xo,F&&(w=Math.cos(F),R=Math.sin(F),X=H*w+Y*R,W=at*w+I*R,Y=Y*w-H*R,I=I*w-at*R,H=X,at=W),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,S=180-S),v=zn(Math.sqrt(H*H+Y*Y+tt*tt)),E=zn(Math.sqrt(I*I+dt*dt)),F=zl(at,I),L=Math.abs(F)>2e-4?F*xo:0,A=Z?1/(Z<0?-Z:Z):0),i.svg&&(X=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!tb(da(t,wn)),X&&t.setAttribute("transform",X))),Math.abs(L)>90&&Math.abs(L)<270&&(l?(v*=-1,L+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,L+=L<=0?180:-180)),e=e||i.uncache,i.x=m-((i.xPercent=m&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+c,i.y=g-((i.yPercent=g&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+c,i.z=x+c,i.scaleX=zn(v),i.scaleY=zn(E),i.rotation=zn(M)+f,i.rotationX=zn(y)+f,i.rotationY=zn(S)+f,i.skewX=L+f,i.skewY=D+f,i.transformPerspective=A+c,(i.zOrigin=parseFloat(p.split(" ")[2])||!e&&i.zOrigin||0)&&(a[$i]=Wd(p)),i.xOffset=i.yOffset=0,i.force3D=xr.force3D,i.renderTransform=i.svg?fN:QT?eb:cN,i.uncache=0,i},Wd=function(t){return(t=t.split(" "))[0]+" "+t[1]},sg=function(t,e,i){var a=bi(e);return zn(parseFloat(e)+parseFloat(ks(t,"x",i+"px",a)))+a},cN=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,eb(t,e)},mo="0deg",Mc="0px",_o=") ",eb=function(t,e){var i=e||this,a=i.xPercent,l=i.yPercent,c=i.x,f=i.y,h=i.z,p=i.rotation,m=i.rotationY,g=i.rotationX,x=i.skewX,v=i.skewY,E=i.scaleX,M=i.scaleY,y=i.transformPerspective,S=i.force3D,L=i.target,D=i.zOrigin,A="",P=S==="auto"&&t&&t!==1||S===!0;if(D&&(g!==mo||m!==mo)){var z=parseFloat(m)*Ql,C=Math.sin(z),F=Math.cos(z),w;z=parseFloat(g)*Ql,w=Math.cos(z),c=sg(L,c,C*w*-D),f=sg(L,f,-Math.sin(z)*-D),h=sg(L,h,F*w*-D+D)}y!==Mc&&(A+="perspective("+y+_o),(a||l)&&(A+="translate("+a+"%, "+l+"%) "),(P||c!==Mc||f!==Mc||h!==Mc)&&(A+=h!==Mc||P?"translate3d("+c+", "+f+", "+h+") ":"translate("+c+", "+f+_o),p!==mo&&(A+="rotate("+p+_o),m!==mo&&(A+="rotateY("+m+_o),g!==mo&&(A+="rotateX("+g+_o),(x!==mo||v!==mo)&&(A+="skew("+x+", "+v+_o),(E!==1||M!==1)&&(A+="scale("+E+", "+M+_o),L.style[wn]=A||"translate(0, 0)"},fN=function(t,e){var i=e||this,a=i.xPercent,l=i.yPercent,c=i.x,f=i.y,h=i.rotation,p=i.skewX,m=i.skewY,g=i.scaleX,x=i.scaleY,v=i.target,E=i.xOrigin,M=i.yOrigin,y=i.xOffset,S=i.yOffset,L=i.forceCSS,D=parseFloat(c),A=parseFloat(f),P,z,C,F,w;h=parseFloat(h),p=parseFloat(p),m=parseFloat(m),m&&(m=parseFloat(m),p+=m,h+=m),h||p?(h*=Ql,p*=Ql,P=Math.cos(h)*g,z=Math.sin(h)*g,C=Math.sin(h-p)*-x,F=Math.cos(h-p)*x,p&&(m*=Ql,w=Math.tan(p-m),w=Math.sqrt(1+w*w),C*=w,F*=w,m&&(w=Math.tan(m),w=Math.sqrt(1+w*w),P*=w,z*=w)),P=zn(P),z=zn(z),C=zn(C),F=zn(F)):(P=g,F=x,z=C=0),(D&&!~(c+"").indexOf("px")||A&&!~(f+"").indexOf("px"))&&(D=ks(v,"x",c,"px"),A=ks(v,"y",f,"px")),(E||M||y||S)&&(D=zn(D+E-(E*P+M*C)+y),A=zn(A+M-(E*z+M*F)+S)),(a||l)&&(w=v.getBBox(),D=zn(D+a/100*w.width),A=zn(A+l/100*w.height)),w="matrix("+P+","+z+","+C+","+F+","+D+","+A+")",v.setAttribute("transform",w),L&&(v.style[wn]=w)},hN=function(t,e,i,a,l){var c=360,f=ui(l),h=parseFloat(l)*(f&&~l.indexOf("rad")?xo:1),p=h-a,m=a+p+"deg",g,x;return f&&(g=l.split("_")[1],g==="short"&&(p%=c,p!==p%(c/2)&&(p+=p<0?c:-360)),g==="cw"&&p<0?p=(p+c*R1)%c-~~(p/c)*c:g==="ccw"&&p>0&&(p=(p-c*R1)%c-~~(p/c)*c)),t._pt=x=new Ji(t._pt,e,i,a,p,ZO),x.e=m,x.u="deg",t._props.push(i),x},N1=function(t,e){for(var i in e)t[i]=e[i];return t},dN=function(t,e,i){var a=N1({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=i.style,f,h,p,m,g,x,v,E;a.svg?(p=i.getAttribute("transform"),i.setAttribute("transform",""),c[wn]=e,f=af(i,1),Fo(i,wn),i.setAttribute("transform",p)):(p=getComputedStyle(i)[wn],c[wn]=e,f=af(i,1),c[wn]=p);for(h in $a)p=a[h],m=f[h],p!==m&&l.indexOf(h)<0&&(v=bi(p),E=bi(m),g=v!==E?ks(i,h,p,E):parseFloat(p),x=parseFloat(m),t._pt=new Ji(t._pt,f,h,g,x-g,S0),t._pt.u=E||0,t._props.push(h));N1(f,a)};Ki("padding,margin,Width,Radius",function(s,t){var e="Top",i="Right",a="Bottom",l="Left",c=(t<3?[e,i,a,l]:[e+l,e+i,a+i,a+l]).map(function(f){return t<2?s+f:"border"+f+s});Xd[t>1?"border"+s:s]=function(f,h,p,m,g){var x,v;if(arguments.length<4)return x=c.map(function(E){return Ha(f,E,p)}),v=x.join(" "),v.split(x[0]).length===5?x[0]:v;x=(m+"").split(" "),v={},c.forEach(function(E,M){return v[E]=x[M]=x[M]||x[(M-1)/2|0]}),f.init(h,v,g)}});var nb={name:"css",register:E0,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,a,l){var c=this._props,f=t.style,h=i.vars.startAt,p,m,g,x,v,E,M,y,S,L,D,A,P,z,C,F;fv||E0(),this.styles=this.styles||ZT(t),F=this.styles.props,this.tween=i;for(M in e)if(M!=="autoRound"&&(m=e[M],!(dr[M]&&IT(M,e,i,a,t,l)))){if(v=typeof m,E=Xd[M],v==="function"&&(m=m.call(i,a,t,l),v=typeof m),v==="string"&&~m.indexOf("random(")&&(m=tf(m)),E)E(this,t,M,m,i)&&(C=1);else if(M.substr(0,2)==="--")p=(getComputedStyle(t).getPropertyValue(M)+"").trim(),m+="",Fs.lastIndex=0,Fs.test(p)||(y=bi(p),S=bi(m)),S?y!==S&&(p=ks(t,M,p,S)+S):y&&(m+=y),this.add(f,"setProperty",p,m,a,l,0,0,M),c.push(M),F.push(M,0,f[M]);else if(v!=="undefined"){if(h&&M in h?(p=typeof h[M]=="function"?h[M].call(i,a,t,l):h[M],ui(p)&&~p.indexOf("random(")&&(p=tf(p)),bi(p+"")||p==="auto"||(p+=xr.units[M]||bi(Ha(t,M))||""),(p+"").charAt(1)==="="&&(p=Ha(t,M))):p=Ha(t,M),x=parseFloat(p),L=v==="string"&&m.charAt(1)==="="&&m.substr(0,2),L&&(m=m.substr(2)),g=parseFloat(m),M in ca&&(M==="autoAlpha"&&(x===1&&Ha(t,"visibility")==="hidden"&&g&&(x=0),F.push("visibility",0,f.visibility),Ns(this,f,"visibility",x?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=ca[M],~M.indexOf(",")&&(M=M.split(",")[0]))),D=M in $a,D){if(this.styles.save(M),A||(P=t._gsap,P.renderTransform&&!e.parseTransform||af(t,e.parseTransform),z=e.smoothOrigin!==!1&&P.smooth,A=this._pt=new Ji(this._pt,f,wn,0,1,P.renderTransform,P,0,-1),A.dep=1),M==="scale")this._pt=new Ji(this._pt,P,"scaleY",P.scaleY,(L?jl(P.scaleY,L+g):g)-P.scaleY||0,S0),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push($i,0,f[$i]),m=lN(m),P.svg?T0(t,m,0,z,0,this):(S=parseFloat(m.split(" ")[2])||0,S!==P.zOrigin&&Ns(this,P,"zOrigin",P.zOrigin,S),Ns(this,f,M,Wd(p),Wd(m)));continue}else if(M==="svgOrigin"){T0(t,m,1,z,0,this);continue}else if(M in $T){hN(this,P,M,x,L?jl(x,L+m):m);continue}else if(M==="smoothOrigin"){Ns(this,P,"smooth",P.smooth,m);continue}else if(M==="force3D"){P[M]=m;continue}else if(M==="transform"){dN(this,m,t);continue}}else M in f||(M=gu(M)||M);if(D||(g||g===0)&&(x||x===0)&&!jO.test(m)&&M in f)y=(p+"").substr((x+"").length),g||(g=0),S=bi(m)||(M in xr.units?xr.units[M]:y),y!==S&&(x=ks(t,M,p,S)),this._pt=new Ji(this._pt,D?P:f,M,x,(L?jl(x,L+g):g)-x,!D&&(S==="px"||M==="zIndex")&&e.autoRound!==!1?KO:S0),this._pt.u=S||0,y!==S&&S!=="%"&&(this._pt.b=p,this._pt.r=QO);else if(M in f)oN.call(this,t,M,p,L?L+m:m);else if(M in t)this.add(t,M,p||t[M],L?L+m:m,a,l);else if(M!=="parseTransform"){nv(M,m);continue}D||(M in f?F.push(M,0,f[M]):typeof t[M]=="function"?F.push(M,2,t[M]()):F.push(M,1,p||t[M])),c.push(M)}}C&&XT(this)},render:function(t,e){if(e.tween._time||!hv())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Ha,aliases:ca,getSetter:function(t,e,i){var a=ca[e];return a&&a.indexOf(",")<0&&(e=a),e in $a&&e!==$i&&(t._gsap.x||Ha(t,"x"))?i&&A1===i?e==="scale"?eN:tN:(A1=i||{})&&(e==="scale"?nN:iN):t.style&&!$0(t.style[e])?JO:~e.indexOf("-")?$O:uv(t,e)},core:{_removeProperty:Fo,_getMatrix:pv}};tr.utils.checkPrefix=gu;tr.core.getStyleSaver=ZT;(function(s,t,e,i){var a=Ki(s+","+t+","+e,function(l){$a[l]=1});Ki(t,function(l){xr.units[l]="deg",$T[l]=1}),ca[a[13]]=s+","+t,Ki(i,function(l){var c=l.split(":");ca[c[1]]=a[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ki("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){xr.units[s]="px"});tr.registerPlugin(nb);var Oe=tr.registerPlugin(nb)||tr;Oe.core.Tween;function pN(s,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function mN(s,t,e){return t&&pN(s.prototype,t),s}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pi,bd,_r,Ps,zs,Kl,ib,yo,Ic,rb,Wa,Yr,ab,sb=function(){return pi||typeof window<"u"&&(pi=window.gsap)&&pi.registerPlugin&&pi},ob=1,Wl=[],Ue=[],pa=[],Fc=Date.now,b0=function(t,e){return e},_N=function(){var t=Ic.core,e=t.bridge||{},i=t._scrollers,a=t._proxies;i.push.apply(i,Ue),a.push.apply(a,pa),Ue=i,pa=a,b0=function(c,f){return e[c](f)}},Hs=function(t,e){return~pa.indexOf(t)&&pa[pa.indexOf(t)+1][e]},Hc=function(t){return!!~rb.indexOf(t)},Li=function(t,e,i,a,l){return t.addEventListener(e,i,{passive:a!==!1,capture:!!l})},Ui=function(t,e,i,a){return t.removeEventListener(e,i,!!a)},Kh="scrollLeft",Jh="scrollTop",A0=function(){return Wa&&Wa.isPressed||Ue.cache++},Yd=function(t,e){var i=function a(l){if(l||l===0){ob&&(_r.history.scrollRestoration="manual");var c=Wa&&Wa.isPressed;l=a.v=Math.round(l)||(Wa&&Wa.iOS?1:0),t(l),a.cacheID=Ue.cache,c&&b0("ss",l)}else(e||Ue.cache!==a.cacheID||b0("ref"))&&(a.cacheID=Ue.cache,a.v=t());return a.v+a.offset};return i.offset=0,t&&i},Ii={s:Kh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yd(function(s){return arguments.length?_r.scrollTo(s,Jn.sc()):_r.pageXOffset||Ps[Kh]||zs[Kh]||Kl[Kh]||0})},Jn={s:Jh,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Ii,sc:Yd(function(s){return arguments.length?_r.scrollTo(Ii.sc(),s):_r.pageYOffset||Ps[Jh]||zs[Jh]||Kl[Jh]||0})},Xi=function(t,e){return(e&&e._ctx&&e._ctx.selector||pi.utils.toArray)(t)[0]||(typeof t=="string"&&pi.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Xs=function(t,e){var i=e.s,a=e.sc;Hc(t)&&(t=Ps.scrollingElement||zs);var l=Ue.indexOf(t),c=a===Jn.sc?1:2;!~l&&(l=Ue.push(t)-1),Ue[l+c]||Li(t,"scroll",A0);var f=Ue[l+c],h=f||(Ue[l+c]=Yd(Hs(t,i),!0)||(Hc(t)?a:Yd(function(p){return arguments.length?t[i]=p:t[i]})));return h.target=t,f||(h.smooth=pi.getProperty(t,"scrollBehavior")==="smooth"),h},R0=function(t,e,i){var a=t,l=t,c=Fc(),f=c,h=e||50,p=Math.max(500,h*3),m=function(E,M){var y=Fc();M||y-c>h?(l=a,a=E,f=c,c=y):i?a+=E:a=l+(E-l)/(y-f)*(c-f)},g=function(){l=a=i?0:a,f=c=0},x=function(E){var M=f,y=l,S=Fc();return(E||E===0)&&E!==a&&m(E),c===f||S-f>p?0:(a+(i?y:-y))/((i?S:c)-M)*1e3};return{update:m,reset:g,getVelocity:x}},Ec=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},P1=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},lb=function(){Ic=pi.core.globals().ScrollTrigger,Ic&&Ic.core&&_N()},ub=function(t){return pi=t||sb(),!bd&&pi&&typeof document<"u"&&document.body&&(_r=window,Ps=document,zs=Ps.documentElement,Kl=Ps.body,rb=[_r,Ps,zs,Kl],pi.utils.clamp,ab=pi.core.context||function(){},yo="onpointerenter"in Kl?"pointer":"mouse",ib=In.isTouch=_r.matchMedia&&_r.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in _r||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yr=In.eventTypes=("ontouchstart"in zs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in zs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ob=0},500),lb(),bd=1),bd};Ii.op=Jn;Ue.cache=0;var In=function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(i){bd||ub(pi)||console.warn("Please gsap.registerPlugin(Observer)"),Ic||lb();var a=i.tolerance,l=i.dragMinimum,c=i.type,f=i.target,h=i.lineHeight,p=i.debounce,m=i.preventDefault,g=i.onStop,x=i.onStopDelay,v=i.ignore,E=i.wheelSpeed,M=i.event,y=i.onDragStart,S=i.onDragEnd,L=i.onDrag,D=i.onPress,A=i.onRelease,P=i.onRight,z=i.onLeft,C=i.onUp,F=i.onDown,w=i.onChangeX,R=i.onChangeY,H=i.onChange,Y=i.onToggleX,tt=i.onToggleY,lt=i.onHover,at=i.onHoverEnd,I=i.onMove,X=i.ignoreCheck,W=i.isNormalizer,ht=i.onGestureStart,b=i.onGestureEnd,Q=i.onWheel,pt=i.onEnable,Mt=i.onDisable,Z=i.onClick,dt=i.scrollSpeed,_t=i.capture,Tt=i.allowClicks,At=i.lockAxis,qt=i.onLockAxis;this.target=f=Xi(f)||zs,this.vars=i,v&&(v=pi.utils.toArray(v)),a=a||1e-9,l=l||0,E=E||1,dt=dt||1,c=c||"wheel,touch,pointer",p=p!==!1,h||(h=parseFloat(_r.getComputedStyle(Kl).lineHeight)||22);var Qt,_e,oe,Vt,V,rn,de,J=this,kt=0,we=0,Yt=i.passive||!m&&i.passive!==!1,B=Xs(f,Ii),U=Xs(f,Jn),nt=B(),St=U(),xt=~c.indexOf("touch")&&!~c.indexOf("pointer")&&Yr[0]==="pointerdown",mt=Hc(f),Ct=f.ownerDocument||Ps,Dt=[0,0,0],Ut=[0,0,0],ve=0,Rt=function(){return ve=Fc()},Lt=function(Kt,fe){return(J.event=Kt)&&v&&~v.indexOf(Kt.target)||fe&&xt&&Kt.pointerType!=="touch"||X&&X(Kt,fe)},ie=function(){J._vx.reset(),J._vy.reset(),_e.pause(),g&&g(J)},te=function(){var Kt=J.deltaX=P1(Dt),fe=J.deltaY=P1(Ut),wt=Math.abs(Kt)>=a,Jt=Math.abs(fe)>=a;H&&(wt||Jt)&&H(J,Kt,fe,Dt,Ut),wt&&(P&&J.deltaX>0&&P(J),z&&J.deltaX<0&&z(J),w&&w(J),Y&&J.deltaX<0!=kt<0&&Y(J),kt=J.deltaX,Dt[0]=Dt[1]=Dt[2]=0),Jt&&(F&&J.deltaY>0&&F(J),C&&J.deltaY<0&&C(J),R&&R(J),tt&&J.deltaY<0!=we<0&&tt(J),we=J.deltaY,Ut[0]=Ut[1]=Ut[2]=0),(Vt||oe)&&(I&&I(J),oe&&(y&&oe===1&&y(J),L&&L(J),oe=0),Vt=!1),rn&&!(rn=!1)&&qt&&qt(J),V&&(Q(J),V=!1),Qt=0},Bt=function(Kt,fe,wt){Dt[wt]+=Kt,Ut[wt]+=fe,J._vx.update(Kt),J._vy.update(fe),p?Qt||(Qt=requestAnimationFrame(te)):te()},ge=function(Kt,fe){At&&!de&&(J.axis=de=Math.abs(Kt)>Math.abs(fe)?"x":"y",rn=!0),de!=="y"&&(Dt[2]+=Kt,J._vx.update(Kt,!0)),de!=="x"&&(Ut[2]+=fe,J._vy.update(fe,!0)),p?Qt||(Qt=requestAnimationFrame(te)):te()},ae=function(Kt){if(!Lt(Kt,1)){Kt=Ec(Kt,m);var fe=Kt.clientX,wt=Kt.clientY,Jt=fe-J.x,Wt=wt-J.y,ue=J.isDragging;J.x=fe,J.y=wt,(ue||(Jt||Wt)&&(Math.abs(J.startX-fe)>=l||Math.abs(J.startY-wt)>=l))&&(oe=ue?2:1,ue||(J.isDragging=!0),ge(Jt,Wt))}},Be=J.onPress=function(Ft){Lt(Ft,1)||Ft&&Ft.button||(J.axis=de=null,_e.pause(),J.isPressed=!0,Ft=Ec(Ft),kt=we=0,J.startX=J.x=Ft.clientX,J.startY=J.y=Ft.clientY,J._vx.reset(),J._vy.reset(),Li(W?f:Ct,Yr[1],ae,Yt,!0),J.deltaX=J.deltaY=0,D&&D(J))},k=J.onRelease=function(Ft){if(!Lt(Ft,1)){Ui(W?f:Ct,Yr[1],ae,!0);var Kt=!isNaN(J.y-J.startY),fe=J.isDragging,wt=fe&&(Math.abs(J.x-J.startX)>3||Math.abs(J.y-J.startY)>3),Jt=Ec(Ft);!wt&&Kt&&(J._vx.reset(),J._vy.reset(),m&&Tt&&pi.delayedCall(.08,function(){if(Fc()-ve>300&&!Ft.defaultPrevented){if(Ft.target.click)Ft.target.click();else if(Ct.createEvent){var Wt=Ct.createEvent("MouseEvents");Wt.initMouseEvent("click",!0,!0,_r,1,Jt.screenX,Jt.screenY,Jt.clientX,Jt.clientY,!1,!1,!1,!1,0,null),Ft.target.dispatchEvent(Wt)}}})),J.isDragging=J.isGesturing=J.isPressed=!1,g&&fe&&!W&&_e.restart(!0),oe&&te(),S&&fe&&S(J),A&&A(J,wt)}},Nt=function(Kt){return Kt.touches&&Kt.touches.length>1&&(J.isGesturing=!0)&&ht(Kt,J.isDragging)},ft=function(){return(J.isGesturing=!1)||b(J)},gt=function(Kt){if(!Lt(Kt)){var fe=B(),wt=U();Bt((fe-nt)*dt,(wt-St)*dt,1),nt=fe,St=wt,g&&_e.restart(!0)}},Ot=function(Kt){if(!Lt(Kt)){Kt=Ec(Kt,m),Q&&(V=!0);var fe=(Kt.deltaMode===1?h:Kt.deltaMode===2?_r.innerHeight:1)*E;Bt(Kt.deltaX*fe,Kt.deltaY*fe,0),g&&!W&&_e.restart(!0)}},Pt=function(Kt){if(!Lt(Kt)){var fe=Kt.clientX,wt=Kt.clientY,Jt=fe-J.x,Wt=wt-J.y;J.x=fe,J.y=wt,Vt=!0,g&&_e.restart(!0),(Jt||Wt)&&ge(Jt,Wt)}},le=function(Kt){J.event=Kt,lt(J)},Ie=function(Kt){J.event=Kt,at(J)},_n=function(Kt){return Lt(Kt)||Ec(Kt,m)&&Z(J)};_e=J._dc=pi.delayedCall(x||.25,ie).pause(),J.deltaX=J.deltaY=0,J._vx=R0(0,50,!0),J._vy=R0(0,50,!0),J.scrollX=B,J.scrollY=U,J.isDragging=J.isGesturing=J.isPressed=!1,ab(this),J.enable=function(Ft){return J.isEnabled||(Li(mt?Ct:f,"scroll",A0),c.indexOf("scroll")>=0&&Li(mt?Ct:f,"scroll",gt,Yt,_t),c.indexOf("wheel")>=0&&Li(f,"wheel",Ot,Yt,_t),(c.indexOf("touch")>=0&&ib||c.indexOf("pointer")>=0)&&(Li(f,Yr[0],Be,Yt,_t),Li(Ct,Yr[2],k),Li(Ct,Yr[3],k),Tt&&Li(f,"click",Rt,!0,!0),Z&&Li(f,"click",_n),ht&&Li(Ct,"gesturestart",Nt),b&&Li(Ct,"gestureend",ft),lt&&Li(f,yo+"enter",le),at&&Li(f,yo+"leave",Ie),I&&Li(f,yo+"move",Pt)),J.isEnabled=!0,J.isDragging=J.isGesturing=J.isPressed=Vt=oe=!1,J._vx.reset(),J._vy.reset(),nt=B(),St=U(),Ft&&Ft.type&&Be(Ft),pt&&pt(J)),J},J.disable=function(){J.isEnabled&&(Wl.filter(function(Ft){return Ft!==J&&Hc(Ft.target)}).length||Ui(mt?Ct:f,"scroll",A0),J.isPressed&&(J._vx.reset(),J._vy.reset(),Ui(W?f:Ct,Yr[1],ae,!0)),Ui(mt?Ct:f,"scroll",gt,_t),Ui(f,"wheel",Ot,_t),Ui(f,Yr[0],Be,_t),Ui(Ct,Yr[2],k),Ui(Ct,Yr[3],k),Ui(f,"click",Rt,!0),Ui(f,"click",_n),Ui(Ct,"gesturestart",Nt),Ui(Ct,"gestureend",ft),Ui(f,yo+"enter",le),Ui(f,yo+"leave",Ie),Ui(f,yo+"move",Pt),J.isEnabled=J.isPressed=J.isDragging=!1,Mt&&Mt(J))},J.kill=J.revert=function(){J.disable();var Ft=Wl.indexOf(J);Ft>=0&&Wl.splice(Ft,1),Wa===J&&(Wa=0)},Wl.push(J),W&&Hc(f)&&(Wa=J),J.enable(M)},mN(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();In.version="3.12.7";In.create=function(s){return new In(s)};In.register=ub;In.getAll=function(){return Wl.slice()};In.getById=function(s){return Wl.filter(function(t){return t.vars.id===s})[0]};sb()&&pi.registerPlugin(In);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jt,Fl,De,xn,pr,nn,mv,qd,sf,Gc,Cc,$h,Mi,fp,w0,Pi,z1,B1,Hl,cb,og,fb,Ni,C0,hb,db,Ds,D0,_v,Jl,gv,jd,U0,lg,td=1,Ei=Date.now,ug=Ei(),Ir=0,Dc=0,I1=function(t,e,i){var a=hr(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=a,a?t.substr(6,t.length-7):t},F1=function(t,e){return e&&(!hr(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},gN=function s(){return Dc&&requestAnimationFrame(s)},H1=function(){return fp=1},G1=function(){return fp=0},aa=function(t){return t},Uc=function(t){return Math.round(t*1e5)/1e5||0},pb=function(){return typeof window<"u"},mb=function(){return jt||pb()&&(jt=window.gsap)&&jt.registerPlugin&&jt},Ho=function(t){return!!~mv.indexOf(t)},_b=function(t){return(t==="Height"?gv:De["inner"+t])||pr["client"+t]||nn["client"+t]},gb=function(t){return Hs(t,"getBoundingClientRect")||(Ho(t)?function(){return Dd.width=De.innerWidth,Dd.height=gv,Dd}:function(){return Va(t)})},vN=function(t,e,i){var a=i.d,l=i.d2,c=i.a;return(c=Hs(t,"getBoundingClientRect"))?function(){return c()[a]}:function(){return(e?_b(l):t["client"+l])||0}},xN=function(t,e){return!e||~pa.indexOf(t)?gb(t):function(){return Dd}},fa=function(t,e){var i=e.s,a=e.d2,l=e.d,c=e.a;return Math.max(0,(i="scroll"+a)&&(c=Hs(t,i))?c()-gb(t)()[l]:Ho(t)?(pr[i]||nn[i])-_b(a):t[i]-t["offset"+a])},ed=function(t,e){for(var i=0;i<Hl.length;i+=3)(!e||~e.indexOf(Hl[i+1]))&&t(Hl[i],Hl[i+1],Hl[i+2])},hr=function(t){return typeof t=="string"},Ai=function(t){return typeof t=="function"},Lc=function(t){return typeof t=="number"},So=function(t){return typeof t=="object"},Tc=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},cg=function(t,e){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t)}):e(t);i&&i.totalTime&&(t.callbackAnimation=i)}},Bl=Math.abs,vb="left",xb="top",vv="right",xv="bottom",Po="width",zo="height",Vc="Right",kc="Left",Xc="Top",Wc="Bottom",kn="padding",Or="margin",vu="Width",yv="Height",Kn="px",Nr=function(t){return De.getComputedStyle(t)},yN=function(t){var e=Nr(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},V1=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Va=function(t,e){var i=e&&Nr(t)[w0]!=="matrix(1, 0, 0, 1, 0, 0)"&&jt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),a=t.getBoundingClientRect();return i&&i.progress(0).kill(),a},Zd=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},yb=function(t){var e=[],i=t.labels,a=t.duration(),l;for(l in i)e.push(i[l]/a);return e},SN=function(t){return function(e){return jt.utils.snap(yb(t),e)}},Sv=function(t){var e=jt.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(a,l){return a-l});return i?function(a,l,c){c===void 0&&(c=.001);var f;if(!l)return e(a);if(l>0){for(a-=c,f=0;f<i.length;f++)if(i[f]>=a)return i[f];return i[f-1]}else for(f=i.length,a+=c;f--;)if(i[f]<=a)return i[f];return i[0]}:function(a,l,c){c===void 0&&(c=.001);var f=e(a);return!l||Math.abs(f-a)<c||f-a<0==l<0?f:e(l<0?a-t:a+t)}},MN=function(t){return function(e,i){return Sv(yb(t))(e,i.direction)}},nd=function(t,e,i,a){return i.split(",").forEach(function(l){return t(e,l,a)})},oi=function(t,e,i,a,l){return t.addEventListener(e,i,{passive:!a,capture:!!l})},si=function(t,e,i,a){return t.removeEventListener(e,i,!!a)},id=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},k1={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},rd={toggleActions:"play",anticipatePin:0},Qd={top:0,left:0,center:.5,bottom:1,right:1},Ad=function(t,e){if(hr(t)){var i=t.indexOf("="),a=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(a*=e/100),t=t.substr(0,i-1)),t=a+(t in Qd?Qd[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ad=function(t,e,i,a,l,c,f,h){var p=l.startColor,m=l.endColor,g=l.fontSize,x=l.indent,v=l.fontWeight,E=xn.createElement("div"),M=Ho(i)||Hs(i,"pinType")==="fixed",y=t.indexOf("scroller")!==-1,S=M?nn:i,L=t.indexOf("start")!==-1,D=L?p:m,A="border-color:"+D+";font-size:"+g+";color:"+D+";font-weight:"+v+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return A+="position:"+((y||h)&&M?"fixed;":"absolute;"),(y||h||!M)&&(A+=(a===Jn?vv:xv)+":"+(c+parseFloat(x))+"px;"),f&&(A+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),E._isStart=L,E.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),E.style.cssText=A,E.innerText=e||e===0?t+"-"+e:t,S.children[0]?S.insertBefore(E,S.children[0]):S.appendChild(E),E._offset=E["offset"+a.op.d2],Rd(E,0,a,L),E},Rd=function(t,e,i,a){var l={display:"block"},c=i[a?"os2":"p2"],f=i[a?"p2":"os2"];t._isFlipped=a,l[i.a+"Percent"]=a?-100:0,l[i.a]=a?"1px":0,l["border"+c+vu]=1,l["border"+f+vu]=0,l[i.p]=e+"px",jt.set(t,l)},Ae=[],L0={},of,X1=function(){return Ei()-Ir>34&&(of||(of=requestAnimationFrame(Za)))},Il=function(){(!Ni||!Ni.isPressed||Ni.startX>nn.clientWidth)&&(Ue.cache++,Ni?of||(of=requestAnimationFrame(Za)):Za(),Ir||Vo("scrollStart"),Ir=Ei())},fg=function(){db=De.innerWidth,hb=De.innerHeight},Oc=function(t){Ue.cache++,(t===!0||!Mi&&!fb&&!xn.fullscreenElement&&!xn.webkitFullscreenElement&&(!C0||db!==De.innerWidth||Math.abs(De.innerHeight-hb)>De.innerHeight*.25))&&qd.restart(!0)},Go={},EN=[],Sb=function s(){return si(pe,"scrollEnd",s)||wo(!0)},Vo=function(t){return Go[t]&&Go[t].map(function(e){return e()})||EN},fr=[],Mb=function(t){for(var e=0;e<fr.length;e+=5)(!t||fr[e+4]&&fr[e+4].query===t)&&(fr[e].style.cssText=fr[e+1],fr[e].getBBox&&fr[e].setAttribute("transform",fr[e+2]||""),fr[e+3].uncache=1)},Mv=function(t,e){var i;for(Pi=0;Pi<Ae.length;Pi++)i=Ae[Pi],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));jd=!0,e&&Mb(e),e||Vo("revert")},Eb=function(t,e){Ue.cache++,(e||!zi)&&Ue.forEach(function(i){return Ai(i)&&i.cacheID++&&(i.rec=0)}),hr(t)&&(De.history.scrollRestoration=_v=t)},zi,Bo=0,W1,TN=function(){if(W1!==Bo){var t=W1=Bo;requestAnimationFrame(function(){return t===Bo&&wo(!0)})}},Tb=function(){nn.appendChild(Jl),gv=!Ni&&Jl.offsetHeight||De.innerHeight,nn.removeChild(Jl)},Y1=function(t){return sf(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},wo=function(t,e){if(pr=xn.documentElement,nn=xn.body,mv=[De,xn,pr,nn],Ir&&!t&&!jd){oi(pe,"scrollEnd",Sb);return}Tb(),zi=pe.isRefreshing=!0,Ue.forEach(function(a){return Ai(a)&&++a.cacheID&&(a.rec=a())});var i=Vo("refreshInit");cb&&pe.sort(),e||Mv(),Ue.forEach(function(a){Ai(a)&&(a.smooth&&(a.target.style.scrollBehavior="auto"),a(0))}),Ae.slice(0).forEach(function(a){return a.refresh()}),jd=!1,Ae.forEach(function(a){if(a._subPinOffset&&a.pin){var l=a.vars.horizontal?"offsetWidth":"offsetHeight",c=a.pin[l];a.revert(!0,1),a.adjustPinSpacing(a.pin[l]-c),a.refresh()}}),U0=1,Y1(!0),Ae.forEach(function(a){var l=fa(a.scroller,a._dir),c=a.vars.end==="max"||a._endClamp&&a.end>l,f=a._startClamp&&a.start>=l;(c||f)&&a.setPositions(f?l-1:a.start,c?Math.max(f?l:a.start+1,l):a.end,!0)}),Y1(!1),U0=0,i.forEach(function(a){return a&&a.render&&a.render(-1)}),Ue.forEach(function(a){Ai(a)&&(a.smooth&&requestAnimationFrame(function(){return a.target.style.scrollBehavior="smooth"}),a.rec&&a(a.rec))}),Eb(_v,1),qd.pause(),Bo++,zi=2,Za(2),Ae.forEach(function(a){return Ai(a.vars.onRefresh)&&a.vars.onRefresh(a)}),zi=pe.isRefreshing=!1,Vo("refresh")},O0=0,wd=1,Yc,Za=function(t){if(t===2||!zi&&!jd){pe.isUpdating=!0,Yc&&Yc.update(0);var e=Ae.length,i=Ei(),a=i-ug>=50,l=e&&Ae[0].scroll();if(wd=O0>l?-1:1,zi||(O0=l),a&&(Ir&&!fp&&i-Ir>200&&(Ir=0,Vo("scrollEnd")),Cc=ug,ug=i),wd<0){for(Pi=e;Pi-- >0;)Ae[Pi]&&Ae[Pi].update(0,a);wd=1}else for(Pi=0;Pi<e;Pi++)Ae[Pi]&&Ae[Pi].update(0,a);pe.isUpdating=!1}of=0},N0=[vb,xb,xv,vv,Or+Wc,Or+Vc,Or+Xc,Or+kc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Cd=N0.concat([Po,zo,"boxSizing","max"+vu,"max"+yv,"position",Or,kn,kn+Xc,kn+Vc,kn+Wc,kn+kc]),bN=function(t,e,i){$l(i);var a=t._gsap;if(a.spacerIsNative)$l(a.spacerState);else if(t._gsap.swappedIn){var l=e.parentNode;l&&(l.insertBefore(t,e),l.removeChild(e))}t._gsap.swappedIn=!1},hg=function(t,e,i,a){if(!t._gsap.swappedIn){for(var l=N0.length,c=e.style,f=t.style,h;l--;)h=N0[l],c[h]=i[h];c.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(c.display="inline-block"),f[xv]=f[vv]="auto",c.flexBasis=i.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[Po]=Zd(t,Ii)+Kn,c[zo]=Zd(t,Jn)+Kn,c[kn]=f[Or]=f[xb]=f[vb]="0",$l(a),f[Po]=f["max"+vu]=i[Po],f[zo]=f["max"+yv]=i[zo],f[kn]=i[kn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},AN=/([A-Z])/g,$l=function(t){if(t){var e=t.t.style,i=t.length,a=0,l,c;for((t.t._gsap||jt.core.getCache(t.t)).uncache=1;a<i;a+=2)c=t[a+1],l=t[a],c?e[l]=c:e[l]&&e.removeProperty(l.replace(AN,"-$1").toLowerCase())}},sd=function(t){for(var e=Cd.length,i=t.style,a=[],l=0;l<e;l++)a.push(Cd[l],i[Cd[l]]);return a.t=t,a},RN=function(t,e,i){for(var a=[],l=t.length,c=i?8:0,f;c<l;c+=2)f=t[c],a.push(f,f in e?e[f]:t[c+1]);return a.t=t.t,a},Dd={left:0,top:0},q1=function(t,e,i,a,l,c,f,h,p,m,g,x,v,E){Ai(t)&&(t=t(h)),hr(t)&&t.substr(0,3)==="max"&&(t=x+(t.charAt(4)==="="?Ad("0"+t.substr(3),i):0));var M=v?v.time():0,y,S,L;if(v&&v.seek(0),isNaN(t)||(t=+t),Lc(t))v&&(t=jt.utils.mapRange(v.scrollTrigger.start,v.scrollTrigger.end,0,x,t)),f&&Rd(f,i,a,!0);else{Ai(e)&&(e=e(h));var D=(t||"0").split(" "),A,P,z,C;L=Xi(e,h)||nn,A=Va(L)||{},(!A||!A.left&&!A.top)&&Nr(L).display==="none"&&(C=L.style.display,L.style.display="block",A=Va(L),C?L.style.display=C:L.style.removeProperty("display")),P=Ad(D[0],A[a.d]),z=Ad(D[1]||"0",i),t=A[a.p]-p[a.p]-m+P+l-z,f&&Rd(f,z,a,i-z<20||f._isStart&&z>20),i-=i-z}if(E&&(h[E]=t||-.001,t<0&&(t=0)),c){var F=t+i,w=c._isStart;y="scroll"+a.d2,Rd(c,F,a,w&&F>20||!w&&(g?Math.max(nn[y],pr[y]):c.parentNode[y])<=F+1),g&&(p=Va(f),g&&(c.style[a.op.p]=p[a.op.p]-a.op.m-c._offset+Kn))}return v&&L&&(y=Va(L),v.seek(x),S=Va(L),v._caScrollDist=y[a.p]-S[a.p],t=t/v._caScrollDist*x),v&&v.seek(M),v?t:Math.round(t)},wN=/(webkit|moz|length|cssText|inset)/i,j1=function(t,e,i,a){if(t.parentNode!==e){var l=t.style,c,f;if(e===nn){t._stOrig=l.cssText,f=Nr(t);for(c in f)!+c&&!wN.test(c)&&f[c]&&typeof l[c]=="string"&&c!=="0"&&(l[c]=f[c]);l.top=i,l.left=a}else l.cssText=t._stOrig;jt.core.getCache(t).uncache=1,e.appendChild(t)}},bb=function(t,e,i){var a=e,l=a;return function(c){var f=Math.round(t());return f!==a&&f!==l&&Math.abs(f-a)>3&&Math.abs(f-l)>3&&(c=f,i&&i()),l=a,a=Math.round(c),a}},od=function(t,e,i){var a={};a[e.p]="+="+i,jt.set(t,a)},Z1=function(t,e){var i=Xs(t,e),a="_scroll"+e.p2,l=function c(f,h,p,m,g){var x=c.tween,v=h.onComplete,E={};p=p||i();var M=bb(i,p,function(){x.kill(),c.tween=0});return g=m&&g||0,m=m||f-p,x&&x.kill(),h[a]=f,h.inherit=!1,h.modifiers=E,E[a]=function(){return M(p+m*x.ratio+g*x.ratio*x.ratio)},h.onUpdate=function(){Ue.cache++,c.tween&&Za()},h.onComplete=function(){c.tween=0,v&&v.call(x)},x=c.tween=jt.to(t,h),x};return t[a]=i,i.wheelHandler=function(){return l.tween&&l.tween.kill()&&(l.tween=0)},oi(t,"wheel",i.wheelHandler),pe.isTouch&&oi(t,"touchmove",i.wheelHandler),l},pe=function(){function s(e,i){Fl||s.register(jt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),D0(this),this.init(e,i)}var t=s.prototype;return t.init=function(i,a){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Dc){this.update=this.refresh=this.kill=aa;return}i=V1(hr(i)||Lc(i)||i.nodeType?{trigger:i}:i,rd);var l=i,c=l.onUpdate,f=l.toggleClass,h=l.id,p=l.onToggle,m=l.onRefresh,g=l.scrub,x=l.trigger,v=l.pin,E=l.pinSpacing,M=l.invalidateOnRefresh,y=l.anticipatePin,S=l.onScrubComplete,L=l.onSnapComplete,D=l.once,A=l.snap,P=l.pinReparent,z=l.pinSpacer,C=l.containerAnimation,F=l.fastScrollEnd,w=l.preventOverlaps,R=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Ii:Jn,H=!g&&g!==0,Y=Xi(i.scroller||De),tt=jt.core.getCache(Y),lt=Ho(Y),at=("pinType"in i?i.pinType:Hs(Y,"pinType")||lt&&"fixed")==="fixed",I=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],X=H&&i.toggleActions.split(" "),W="markers"in i?i.markers:rd.markers,ht=lt?0:parseFloat(Nr(Y)["border"+R.p2+vu])||0,b=this,Q=i.onRefreshInit&&function(){return i.onRefreshInit(b)},pt=vN(Y,lt,R),Mt=xN(Y,lt),Z=0,dt=0,_t=0,Tt=Xs(Y,R),At,qt,Qt,_e,oe,Vt,V,rn,de,J,kt,we,Yt,B,U,nt,St,xt,mt,Ct,Dt,Ut,ve,Rt,Lt,ie,te,Bt,ge,ae,Be,k,Nt,ft,gt,Ot,Pt,le,Ie;if(b._startClamp=b._endClamp=!1,b._dir=R,y*=45,b.scroller=Y,b.scroll=C?C.time.bind(C):Tt,_e=Tt(),b.vars=i,a=a||i.animation,"refreshPriority"in i&&(cb=1,i.refreshPriority===-9999&&(Yc=b)),tt.tweenScroll=tt.tweenScroll||{top:Z1(Y,Jn),left:Z1(Y,Ii)},b.tweenTo=At=tt.tweenScroll[R.p],b.scrubDuration=function(wt){Nt=Lc(wt)&&wt,Nt?k?k.duration(wt):k=jt.to(a,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Nt,paused:!0,onComplete:function(){return S&&S(b)}}):(k&&k.progress(1).kill(),k=0)},a&&(a.vars.lazy=!1,a._initted&&!b.isReverted||a.vars.immediateRender!==!1&&i.immediateRender!==!1&&a.duration()&&a.render(0,!0,!0),b.animation=a.pause(),a.scrollTrigger=b,b.scrubDuration(g),ae=0,h||(h=a.vars.id)),A&&((!So(A)||A.push)&&(A={snapTo:A}),"scrollBehavior"in nn.style&&jt.set(lt?[nn,pr]:Y,{scrollBehavior:"auto"}),Ue.forEach(function(wt){return Ai(wt)&&wt.target===(lt?xn.scrollingElement||pr:Y)&&(wt.smooth=!1)}),Qt=Ai(A.snapTo)?A.snapTo:A.snapTo==="labels"?SN(a):A.snapTo==="labelsDirectional"?MN(a):A.directional!==!1?function(wt,Jt){return Sv(A.snapTo)(wt,Ei()-dt<500?0:Jt.direction)}:jt.utils.snap(A.snapTo),ft=A.duration||{min:.1,max:2},ft=So(ft)?Gc(ft.min,ft.max):Gc(ft,ft),gt=jt.delayedCall(A.delay||Nt/2||.1,function(){var wt=Tt(),Jt=Ei()-dt<500,Wt=At.tween;if((Jt||Math.abs(b.getVelocity())<10)&&!Wt&&!fp&&Z!==wt){var ue=(wt-Vt)/B,Tn=a&&!H?a.totalProgress():ue,Me=Jt?0:(Tn-Be)/(Ei()-Cc)*1e3||0,an=jt.utils.clamp(-ue,1-ue,Bl(Me/2)*Me/.185),yn=ue+(A.inertia===!1?0:an),$e,ke,Ne=A,qn=Ne.onStart,Ze=Ne.onInterrupt,Xe=Ne.onComplete;if($e=Qt(yn,b),Lc($e)||($e=yn),ke=Math.max(0,Math.round(Vt+$e*B)),wt<=V&&wt>=Vt&&ke!==wt){if(Wt&&!Wt._initted&&Wt.data<=Bl(ke-wt))return;A.inertia===!1&&(an=$e-ue),At(ke,{duration:ft(Bl(Math.max(Bl(yn-Tn),Bl($e-Tn))*.185/Me/.05||0)),ease:A.ease||"power3",data:Bl(ke-wt),onInterrupt:function(){return gt.restart(!0)&&Ze&&Ze(b)},onComplete:function(){b.update(),Z=Tt(),a&&!H&&(k?k.resetTo("totalProgress",$e,a._tTime/a._tDur):a.progress($e)),ae=Be=a&&!H?a.totalProgress():b.progress,L&&L(b),Xe&&Xe(b)}},wt,an*B,ke-wt-an*B),qn&&qn(b,At.tween)}}else b.isActive&&Z!==wt&&gt.restart(!0)}).pause()),h&&(L0[h]=b),x=b.trigger=Xi(x||v!==!0&&v),Ie=x&&x._gsap&&x._gsap.stRevert,Ie&&(Ie=Ie(b)),v=v===!0?x:Xi(v),hr(f)&&(f={targets:x,className:f}),v&&(E===!1||E===Or||(E=!E&&v.parentNode&&v.parentNode.style&&Nr(v.parentNode).display==="flex"?!1:kn),b.pin=v,qt=jt.core.getCache(v),qt.spacer?U=qt.pinState:(z&&(z=Xi(z),z&&!z.nodeType&&(z=z.current||z.nativeElement),qt.spacerIsNative=!!z,z&&(qt.spacerState=sd(z))),qt.spacer=xt=z||xn.createElement("div"),xt.classList.add("pin-spacer"),h&&xt.classList.add("pin-spacer-"+h),qt.pinState=U=sd(v)),i.force3D!==!1&&jt.set(v,{force3D:!0}),b.spacer=xt=qt.spacer,ge=Nr(v),Rt=ge[E+R.os2],Ct=jt.getProperty(v),Dt=jt.quickSetter(v,R.a,Kn),hg(v,xt,ge),St=sd(v)),W){we=So(W)?V1(W,k1):k1,J=ad("scroller-start",h,Y,R,we,0),kt=ad("scroller-end",h,Y,R,we,0,J),mt=J["offset"+R.op.d2];var _n=Xi(Hs(Y,"content")||Y);rn=this.markerStart=ad("start",h,_n,R,we,mt,0,C),de=this.markerEnd=ad("end",h,_n,R,we,mt,0,C),C&&(le=jt.quickSetter([rn,de],R.a,Kn)),!at&&!(pa.length&&Hs(Y,"fixedMarkers")===!0)&&(yN(lt?nn:Y),jt.set([J,kt],{force3D:!0}),ie=jt.quickSetter(J,R.a,Kn),Bt=jt.quickSetter(kt,R.a,Kn))}if(C){var Ft=C.vars.onUpdate,Kt=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){b.update(0,0,1),Ft&&Ft.apply(C,Kt||[])})}if(b.previous=function(){return Ae[Ae.indexOf(b)-1]},b.next=function(){return Ae[Ae.indexOf(b)+1]},b.revert=function(wt,Jt){if(!Jt)return b.kill(!0);var Wt=wt!==!1||!b.enabled,ue=Mi;Wt!==b.isReverted&&(Wt&&(Ot=Math.max(Tt(),b.scroll.rec||0),_t=b.progress,Pt=a&&a.progress()),rn&&[rn,de,J,kt].forEach(function(Tn){return Tn.style.display=Wt?"none":"block"}),Wt&&(Mi=b,b.update(Wt)),v&&(!P||!b.isActive)&&(Wt?bN(v,xt,U):hg(v,xt,Nr(v),Lt)),Wt||b.update(Wt),Mi=ue,b.isReverted=Wt)},b.refresh=function(wt,Jt,Wt,ue){if(!((Mi||!b.enabled)&&!Jt)){if(v&&wt&&Ir){oi(s,"scrollEnd",Sb);return}!zi&&Q&&Q(b),Mi=b,At.tween&&!Wt&&(At.tween.kill(),At.tween=0),k&&k.pause(),M&&a&&a.revert({kill:!1}).invalidate(),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var Tn=pt(),Me=Mt(),an=C?C.duration():fa(Y,R),yn=B<=.01,$e=0,ke=ue||0,Ne=So(Wt)?Wt.end:i.end,qn=i.endTrigger||x,Ze=So(Wt)?Wt.start:i.start||(i.start===0||!x?0:v?"0 0":"0 100%"),Xe=b.pinnedContainer=i.pinnedContainer&&Xi(i.pinnedContainer,b),Ci=x&&Math.max(0,Ae.indexOf(b))||0,Cn=Ci,hn,N,K,ot,it,j,bt,zt,It,Gt,ee,ne,$t;for(W&&So(Wt)&&(ne=jt.getProperty(J,R.p),$t=jt.getProperty(kt,R.p));Cn-- >0;)j=Ae[Cn],j.end||j.refresh(0,1)||(Mi=b),bt=j.pin,bt&&(bt===x||bt===v||bt===Xe)&&!j.isReverted&&(Gt||(Gt=[]),Gt.unshift(j),j.revert(!0,!0)),j!==Ae[Cn]&&(Ci--,Cn--);for(Ai(Ze)&&(Ze=Ze(b)),Ze=I1(Ze,"start",b),Vt=q1(Ze,x,Tn,R,Tt(),rn,J,b,Me,ht,at,an,C,b._startClamp&&"_startClamp")||(v?-.001:0),Ai(Ne)&&(Ne=Ne(b)),hr(Ne)&&!Ne.indexOf("+=")&&(~Ne.indexOf(" ")?Ne=(hr(Ze)?Ze.split(" ")[0]:"")+Ne:($e=Ad(Ne.substr(2),Tn),Ne=hr(Ze)?Ze:(C?jt.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,Vt):Vt)+$e,qn=x)),Ne=I1(Ne,"end",b),V=Math.max(Vt,q1(Ne||(qn?"100% 0":an),qn,Tn,R,Tt()+$e,de,kt,b,Me,ht,at,an,C,b._endClamp&&"_endClamp"))||-.001,$e=0,Cn=Ci;Cn--;)j=Ae[Cn],bt=j.pin,bt&&j.start-j._pinPush<=Vt&&!C&&j.end>0&&(hn=j.end-(b._startClamp?Math.max(0,j.start):j.start),(bt===x&&j.start-j._pinPush<Vt||bt===Xe)&&isNaN(Ze)&&($e+=hn*(1-j.progress)),bt===v&&(ke+=hn));if(Vt+=$e,V+=$e,b._startClamp&&(b._startClamp+=$e),b._endClamp&&!zi&&(b._endClamp=V||-.001,V=Math.min(V,fa(Y,R))),B=V-Vt||(Vt-=.01)&&.001,yn&&(_t=jt.utils.clamp(0,1,jt.utils.normalize(Vt,V,Ot))),b._pinPush=ke,rn&&$e&&(hn={},hn[R.a]="+="+$e,Xe&&(hn[R.p]="-="+Tt()),jt.set([rn,de],hn)),v&&!(U0&&b.end>=fa(Y,R)))hn=Nr(v),ot=R===Jn,K=Tt(),Ut=parseFloat(Ct(R.a))+ke,!an&&V>1&&(ee=(lt?xn.scrollingElement||pr:Y).style,ee={style:ee,value:ee["overflow"+R.a.toUpperCase()]},lt&&Nr(nn)["overflow"+R.a.toUpperCase()]!=="scroll"&&(ee.style["overflow"+R.a.toUpperCase()]="scroll")),hg(v,xt,hn),St=sd(v),N=Va(v,!0),zt=at&&Xs(Y,ot?Ii:Jn)(),E?(Lt=[E+R.os2,B+ke+Kn],Lt.t=xt,Cn=E===kn?Zd(v,R)+B+ke:0,Cn&&(Lt.push(R.d,Cn+Kn),xt.style.flexBasis!=="auto"&&(xt.style.flexBasis=Cn+Kn)),$l(Lt),Xe&&Ae.forEach(function(xe){xe.pin===Xe&&xe.vars.pinSpacing!==!1&&(xe._subPinOffset=!0)}),at&&Tt(Ot)):(Cn=Zd(v,R),Cn&&xt.style.flexBasis!=="auto"&&(xt.style.flexBasis=Cn+Kn)),at&&(it={top:N.top+(ot?K-Vt:zt)+Kn,left:N.left+(ot?zt:K-Vt)+Kn,boxSizing:"border-box",position:"fixed"},it[Po]=it["max"+vu]=Math.ceil(N.width)+Kn,it[zo]=it["max"+yv]=Math.ceil(N.height)+Kn,it[Or]=it[Or+Xc]=it[Or+Vc]=it[Or+Wc]=it[Or+kc]="0",it[kn]=hn[kn],it[kn+Xc]=hn[kn+Xc],it[kn+Vc]=hn[kn+Vc],it[kn+Wc]=hn[kn+Wc],it[kn+kc]=hn[kn+kc],nt=RN(U,it,P),zi&&Tt(0)),a?(It=a._initted,og(1),a.render(a.duration(),!0,!0),ve=Ct(R.a)-Ut+B+ke,te=Math.abs(B-ve)>1,at&&te&&nt.splice(nt.length-2,2),a.render(0,!0,!0),It||a.invalidate(!0),a.parent||a.totalTime(a.totalTime()),og(0)):ve=B,ee&&(ee.value?ee.style["overflow"+R.a.toUpperCase()]=ee.value:ee.style.removeProperty("overflow-"+R.a));else if(x&&Tt()&&!C)for(N=x.parentNode;N&&N!==nn;)N._pinOffset&&(Vt-=N._pinOffset,V-=N._pinOffset),N=N.parentNode;Gt&&Gt.forEach(function(xe){return xe.revert(!1,!0)}),b.start=Vt,b.end=V,_e=oe=zi?Ot:Tt(),!C&&!zi&&(_e<Ot&&Tt(Ot),b.scroll.rec=0),b.revert(!1,!0),dt=Ei(),gt&&(Z=-1,gt.restart(!0)),Mi=0,a&&H&&(a._initted||Pt)&&a.progress()!==Pt&&a.progress(Pt||0,!0).render(a.time(),!0,!0),(yn||_t!==b.progress||C||M||a&&!a._initted)&&(a&&!H&&a.totalProgress(C&&Vt<-.001&&!_t?jt.utils.normalize(Vt,V,0):_t,!0),b.progress=yn||(_e-Vt)/B===_t?0:_t),v&&E&&(xt._pinOffset=Math.round(b.progress*ve)),k&&k.invalidate(),isNaN(ne)||(ne-=jt.getProperty(J,R.p),$t-=jt.getProperty(kt,R.p),od(J,R,ne),od(rn,R,ne-(ue||0)),od(kt,R,$t),od(de,R,$t-(ue||0))),yn&&!zi&&b.update(),m&&!zi&&!Yt&&(Yt=!0,m(b),Yt=!1)}},b.getVelocity=function(){return(Tt()-oe)/(Ei()-Cc)*1e3||0},b.endAnimation=function(){Tc(b.callbackAnimation),a&&(k?k.progress(1):a.paused()?H||Tc(a,b.direction<0,1):Tc(a,a.reversed()))},b.labelToScroll=function(wt){return a&&a.labels&&(Vt||b.refresh()||Vt)+a.labels[wt]/a.duration()*B||0},b.getTrailing=function(wt){var Jt=Ae.indexOf(b),Wt=b.direction>0?Ae.slice(0,Jt).reverse():Ae.slice(Jt+1);return(hr(wt)?Wt.filter(function(ue){return ue.vars.preventOverlaps===wt}):Wt).filter(function(ue){return b.direction>0?ue.end<=Vt:ue.start>=V})},b.update=function(wt,Jt,Wt){if(!(C&&!Wt&&!wt)){var ue=zi===!0?Ot:b.scroll(),Tn=wt?0:(ue-Vt)/B,Me=Tn<0?0:Tn>1?1:Tn||0,an=b.progress,yn,$e,ke,Ne,qn,Ze,Xe,Ci;if(Jt&&(oe=_e,_e=C?Tt():ue,A&&(Be=ae,ae=a&&!H?a.totalProgress():Me)),y&&v&&!Mi&&!td&&Ir&&(!Me&&Vt<ue+(ue-oe)/(Ei()-Cc)*y?Me=1e-4:Me===1&&V>ue+(ue-oe)/(Ei()-Cc)*y&&(Me=.9999)),Me!==an&&b.enabled){if(yn=b.isActive=!!Me&&Me<1,$e=!!an&&an<1,Ze=yn!==$e,qn=Ze||!!Me!=!!an,b.direction=Me>an?1:-1,b.progress=Me,qn&&!Mi&&(ke=Me&&!an?0:Me===1?1:an===1?2:3,H&&(Ne=!Ze&&X[ke+1]!=="none"&&X[ke+1]||X[ke],Ci=a&&(Ne==="complete"||Ne==="reset"||Ne in a))),w&&(Ze||Ci)&&(Ci||g||!a)&&(Ai(w)?w(b):b.getTrailing(w).forEach(function(K){return K.endAnimation()})),H||(k&&!Mi&&!td?(k._dp._time-k._start!==k._time&&k.render(k._dp._time-k._start),k.resetTo?k.resetTo("totalProgress",Me,a._tTime/a._tDur):(k.vars.totalProgress=Me,k.invalidate().restart())):a&&a.totalProgress(Me,!!(Mi&&(dt||wt)))),v){if(wt&&E&&(xt.style[E+R.os2]=Rt),!at)Dt(Uc(Ut+ve*Me));else if(qn){if(Xe=!wt&&Me>an&&V+1>ue&&ue+1>=fa(Y,R),P)if(!wt&&(yn||Xe)){var Cn=Va(v,!0),hn=ue-Vt;j1(v,nn,Cn.top+(R===Jn?hn:0)+Kn,Cn.left+(R===Jn?0:hn)+Kn)}else j1(v,xt);$l(yn||Xe?nt:St),te&&Me<1&&yn||Dt(Ut+(Me===1&&!Xe?ve:0))}}A&&!At.tween&&!Mi&&!td&&gt.restart(!0),f&&(Ze||D&&Me&&(Me<1||!lg))&&sf(f.targets).forEach(function(K){return K.classList[yn||D?"add":"remove"](f.className)}),c&&!H&&!wt&&c(b),qn&&!Mi?(H&&(Ci&&(Ne==="complete"?a.pause().totalProgress(1):Ne==="reset"?a.restart(!0).pause():Ne==="restart"?a.restart(!0):a[Ne]()),c&&c(b)),(Ze||!lg)&&(p&&Ze&&cg(b,p),I[ke]&&cg(b,I[ke]),D&&(Me===1?b.kill(!1,1):I[ke]=0),Ze||(ke=Me===1?1:3,I[ke]&&cg(b,I[ke]))),F&&!yn&&Math.abs(b.getVelocity())>(Lc(F)?F:2500)&&(Tc(b.callbackAnimation),k?k.progress(1):Tc(a,Ne==="reverse"?1:!Me,1))):H&&c&&!Mi&&c(b)}if(Bt){var N=C?ue/C.duration()*(C._caScrollDist||0):ue;ie(N+(J._isFlipped?1:0)),Bt(N)}le&&le(-ue/C.duration()*(C._caScrollDist||0))}},b.enable=function(wt,Jt){b.enabled||(b.enabled=!0,oi(Y,"resize",Oc),lt||oi(Y,"scroll",Il),Q&&oi(s,"refreshInit",Q),wt!==!1&&(b.progress=_t=0,_e=oe=Z=Tt()),Jt!==!1&&b.refresh())},b.getTween=function(wt){return wt&&At?At.tween:k},b.setPositions=function(wt,Jt,Wt,ue){if(C){var Tn=C.scrollTrigger,Me=C.duration(),an=Tn.end-Tn.start;wt=Tn.start+an*wt/Me,Jt=Tn.start+an*Jt/Me}b.refresh(!1,!1,{start:F1(wt,Wt&&!!b._startClamp),end:F1(Jt,Wt&&!!b._endClamp)},ue),b.update()},b.adjustPinSpacing=function(wt){if(Lt&&wt){var Jt=Lt.indexOf(R.d)+1;Lt[Jt]=parseFloat(Lt[Jt])+wt+Kn,Lt[1]=parseFloat(Lt[1])+wt+Kn,$l(Lt)}},b.disable=function(wt,Jt){if(b.enabled&&(wt!==!1&&b.revert(!0,!0),b.enabled=b.isActive=!1,Jt||k&&k.pause(),Ot=0,qt&&(qt.uncache=1),Q&&si(s,"refreshInit",Q),gt&&(gt.pause(),At.tween&&At.tween.kill()&&(At.tween=0)),!lt)){for(var Wt=Ae.length;Wt--;)if(Ae[Wt].scroller===Y&&Ae[Wt]!==b)return;si(Y,"resize",Oc),lt||si(Y,"scroll",Il)}},b.kill=function(wt,Jt){b.disable(wt,Jt),k&&!Jt&&k.kill(),h&&delete L0[h];var Wt=Ae.indexOf(b);Wt>=0&&Ae.splice(Wt,1),Wt===Pi&&wd>0&&Pi--,Wt=0,Ae.forEach(function(ue){return ue.scroller===b.scroller&&(Wt=1)}),Wt||zi||(b.scroll.rec=0),a&&(a.scrollTrigger=null,wt&&a.revert({kill:!1}),Jt||a.kill()),rn&&[rn,de,J,kt].forEach(function(ue){return ue.parentNode&&ue.parentNode.removeChild(ue)}),Yc===b&&(Yc=0),v&&(qt&&(qt.uncache=1),Wt=0,Ae.forEach(function(ue){return ue.pin===v&&Wt++}),Wt||(qt.spacer=0)),i.onKill&&i.onKill(b)},Ae.push(b),b.enable(!1,!1),Ie&&Ie(b),a&&a.add&&!B){var fe=b.update;b.update=function(){b.update=fe,Ue.cache++,Vt||V||b.refresh()},jt.delayedCall(.01,b.update),B=.01,Vt=V=0}else b.refresh();v&&TN()},s.register=function(i){return Fl||(jt=i||mb(),pb()&&window.document&&s.enable(),Fl=Dc),Fl},s.defaults=function(i){if(i)for(var a in i)rd[a]=i[a];return rd},s.disable=function(i,a){Dc=0,Ae.forEach(function(c){return c[a?"kill":"disable"](i)}),si(De,"wheel",Il),si(xn,"scroll",Il),clearInterval($h),si(xn,"touchcancel",aa),si(nn,"touchstart",aa),nd(si,xn,"pointerdown,touchstart,mousedown",H1),nd(si,xn,"pointerup,touchend,mouseup",G1),qd.kill(),ed(si);for(var l=0;l<Ue.length;l+=3)id(si,Ue[l],Ue[l+1]),id(si,Ue[l],Ue[l+2])},s.enable=function(){if(De=window,xn=document,pr=xn.documentElement,nn=xn.body,jt&&(sf=jt.utils.toArray,Gc=jt.utils.clamp,D0=jt.core.context||aa,og=jt.core.suppressOverwrites||aa,_v=De.history.scrollRestoration||"auto",O0=De.pageYOffset||0,jt.core.globals("ScrollTrigger",s),nn)){Dc=1,Jl=document.createElement("div"),Jl.style.height="100vh",Jl.style.position="absolute",Tb(),gN(),In.register(jt),s.isTouch=In.isTouch,Ds=In.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),C0=In.isTouch===1,oi(De,"wheel",Il),mv=[De,xn,pr,nn],jt.matchMedia?(s.matchMedia=function(p){var m=jt.matchMedia(),g;for(g in p)m.add(g,p[g]);return m},jt.addEventListener("matchMediaInit",function(){return Mv()}),jt.addEventListener("matchMediaRevert",function(){return Mb()}),jt.addEventListener("matchMedia",function(){wo(0,1),Vo("matchMedia")}),jt.matchMedia().add("(orientation: portrait)",function(){return fg(),fg})):console.warn("Requires GSAP 3.11.0 or later"),fg(),oi(xn,"scroll",Il);var i=nn.hasAttribute("style"),a=nn.style,l=a.borderTopStyle,c=jt.core.Animation.prototype,f,h;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),a.borderTopStyle="solid",f=Va(nn),Jn.m=Math.round(f.top+Jn.sc())||0,Ii.m=Math.round(f.left+Ii.sc())||0,l?a.borderTopStyle=l:a.removeProperty("border-top-style"),i||(nn.setAttribute("style",""),nn.removeAttribute("style")),$h=setInterval(X1,250),jt.delayedCall(.5,function(){return td=0}),oi(xn,"touchcancel",aa),oi(nn,"touchstart",aa),nd(oi,xn,"pointerdown,touchstart,mousedown",H1),nd(oi,xn,"pointerup,touchend,mouseup",G1),w0=jt.utils.checkPrefix("transform"),Cd.push(w0),Fl=Ei(),qd=jt.delayedCall(.2,wo).pause(),Hl=[xn,"visibilitychange",function(){var p=De.innerWidth,m=De.innerHeight;xn.hidden?(z1=p,B1=m):(z1!==p||B1!==m)&&Oc()},xn,"DOMContentLoaded",wo,De,"load",wo,De,"resize",Oc],ed(oi),Ae.forEach(function(p){return p.enable(0,1)}),h=0;h<Ue.length;h+=3)id(si,Ue[h],Ue[h+1]),id(si,Ue[h],Ue[h+2])}},s.config=function(i){"limitCallbacks"in i&&(lg=!!i.limitCallbacks);var a=i.syncInterval;a&&clearInterval($h)||($h=a)&&setInterval(X1,a),"ignoreMobileResize"in i&&(C0=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(ed(si)||ed(oi,i.autoRefreshEvents||"none"),fb=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,a){var l=Xi(i),c=Ue.indexOf(l),f=Ho(l);~c&&Ue.splice(c,f?6:2),a&&(f?pa.unshift(De,a,nn,a,pr,a):pa.unshift(l,a))},s.clearMatchMedia=function(i){Ae.forEach(function(a){return a._ctx&&a._ctx.query===i&&a._ctx.kill(!0,!0)})},s.isInViewport=function(i,a,l){var c=(hr(i)?Xi(i):i).getBoundingClientRect(),f=c[l?Po:zo]*a||0;return l?c.right-f>0&&c.left+f<De.innerWidth:c.bottom-f>0&&c.top+f<De.innerHeight},s.positionInViewport=function(i,a,l){hr(i)&&(i=Xi(i));var c=i.getBoundingClientRect(),f=c[l?Po:zo],h=a==null?f/2:a in Qd?Qd[a]*f:~a.indexOf("%")?parseFloat(a)*f/100:parseFloat(a)||0;return l?(c.left+h)/De.innerWidth:(c.top+h)/De.innerHeight},s.killAll=function(i){if(Ae.slice(0).forEach(function(l){return l.vars.id!=="ScrollSmoother"&&l.kill()}),i!==!0){var a=Go.killAll||[];Go={},a.forEach(function(l){return l()})}},s}();pe.version="3.12.7";pe.saveStyles=function(s){return s?sf(s).forEach(function(t){if(t&&t.style){var e=fr.indexOf(t);e>=0&&fr.splice(e,5),fr.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),jt.core.getCache(t),D0())}}):fr};pe.revert=function(s,t){return Mv(!s,t)};pe.create=function(s,t){return new pe(s,t)};pe.refresh=function(s){return s?Oc(!0):(Fl||pe.register())&&wo(!0)};pe.update=function(s){return++Ue.cache&&Za(s===!0?2:0)};pe.clearScrollMemory=Eb;pe.maxScroll=function(s,t){return fa(s,t?Ii:Jn)};pe.getScrollFunc=function(s,t){return Xs(Xi(s),t?Ii:Jn)};pe.getById=function(s){return L0[s]};pe.getAll=function(){return Ae.filter(function(s){return s.vars.id!=="ScrollSmoother"})};pe.isScrolling=function(){return!!Ir};pe.snapDirectional=Sv;pe.addEventListener=function(s,t){var e=Go[s]||(Go[s]=[]);~e.indexOf(t)||e.push(t)};pe.removeEventListener=function(s,t){var e=Go[s],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};pe.batch=function(s,t){var e=[],i={},a=t.interval||.016,l=t.batchMax||1e9,c=function(p,m){var g=[],x=[],v=jt.delayedCall(a,function(){m(g,x),g=[],x=[]}).pause();return function(E){g.length||v.restart(!0),g.push(E.trigger),x.push(E),l<=g.length&&v.progress(1)}},f;for(f in t)i[f]=f.substr(0,2)==="on"&&Ai(t[f])&&f!=="onRefreshInit"?c(f,t[f]):t[f];return Ai(l)&&(l=l(),oi(pe,"refresh",function(){return l=t.batchMax()})),sf(s).forEach(function(h){var p={};for(f in i)p[f]=i[f];p.trigger=h,e.push(pe.create(p))}),e};var Q1=function(t,e,i,a){return e>a?t(a):e<0&&t(0),i>a?(a-e)/(i-e):i<0?e/(e-i):1},dg=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(In.isTouch?" pinch-zoom":""):"none",t===pr&&s(nn,e)},ld={auto:1,scroll:1},CN=function(t){var e=t.event,i=t.target,a=t.axis,l=(e.changedTouches?e.changedTouches[0]:e).target,c=l._gsap||jt.core.getCache(l),f=Ei(),h;if(!c._isScrollT||f-c._isScrollT>2e3){for(;l&&l!==nn&&(l.scrollHeight<=l.clientHeight&&l.scrollWidth<=l.clientWidth||!(ld[(h=Nr(l)).overflowY]||ld[h.overflowX]));)l=l.parentNode;c._isScroll=l&&l!==i&&!Ho(l)&&(ld[(h=Nr(l)).overflowY]||ld[h.overflowX]),c._isScrollT=f}(c._isScroll||a==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Ab=function(t,e,i,a){return In.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:a=a&&CN,onPress:a,onDrag:a,onScroll:a,onEnable:function(){return i&&oi(xn,In.eventTypes[0],J1,!1,!0)},onDisable:function(){return si(xn,In.eventTypes[0],J1,!0)}})},DN=/(input|label|select|textarea)/i,K1,J1=function(t){var e=DN.test(t.target.tagName);(e||K1)&&(t._gsapAllow=!0,K1=e)},UN=function(t){So(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,a=e.momentum,l=e.allowNestedScroll,c=e.onRelease,f,h,p=Xi(t.target)||pr,m=jt.core.globals().ScrollSmoother,g=m&&m.get(),x=Ds&&(t.content&&Xi(t.content)||g&&t.content!==!1&&!g.smooth()&&g.content()),v=Xs(p,Jn),E=Xs(p,Ii),M=1,y=(In.isTouch&&De.visualViewport?De.visualViewport.scale*De.visualViewport.width:De.outerWidth)/De.innerWidth,S=0,L=Ai(a)?function(){return a(f)}:function(){return a||2.8},D,A,P=Ab(p,t.type,!0,l),z=function(){return A=!1},C=aa,F=aa,w=function(){h=fa(p,Jn),F=Gc(Ds?1:0,h),i&&(C=Gc(0,fa(p,Ii))),D=Bo},R=function(){x._gsap.y=Uc(parseFloat(x._gsap.y)+v.offset)+"px",x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(x._gsap.y)+", 0, 1)",v.offset=v.cacheID=0},H=function(){if(A){requestAnimationFrame(z);var W=Uc(f.deltaY/2),ht=F(v.v-W);if(x&&ht!==v.v+v.offset){v.offset=ht-v.v;var b=Uc((parseFloat(x&&x._gsap.y)||0)-v.offset);x.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",x._gsap.y=b+"px",v.cacheID=Ue.cache,Za()}return!0}v.offset&&R(),A=!0},Y,tt,lt,at,I=function(){w(),Y.isActive()&&Y.vars.scrollY>h&&(v()>h?Y.progress(1)&&v(h):Y.resetTo("scrollY",h))};return x&&jt.set(x,{y:"+=0"}),t.ignoreCheck=function(X){return Ds&&X.type==="touchmove"&&H()||M>1.05&&X.type!=="touchstart"||f.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){A=!1;var X=M;M=Uc((De.visualViewport&&De.visualViewport.scale||1)/y),Y.pause(),X!==M&&dg(p,M>1.01?!0:i?!1:"x"),tt=E(),lt=v(),w(),D=Bo},t.onRelease=t.onGestureStart=function(X,W){if(v.offset&&R(),!W)at.restart(!0);else{Ue.cache++;var ht=L(),b,Q;i&&(b=E(),Q=b+ht*.05*-X.velocityX/.227,ht*=Q1(E,b,Q,fa(p,Ii)),Y.vars.scrollX=C(Q)),b=v(),Q=b+ht*.05*-X.velocityY/.227,ht*=Q1(v,b,Q,fa(p,Jn)),Y.vars.scrollY=F(Q),Y.invalidate().duration(ht).play(.01),(Ds&&Y.vars.scrollY>=h||b>=h-1)&&jt.to({},{onUpdate:I,duration:ht})}c&&c(X)},t.onWheel=function(){Y._ts&&Y.pause(),Ei()-S>1e3&&(D=0,S=Ei())},t.onChange=function(X,W,ht,b,Q){if(Bo!==D&&w(),W&&i&&E(C(b[2]===W?tt+(X.startX-X.x):E()+W-b[1])),ht){v.offset&&R();var pt=Q[2]===ht,Mt=pt?lt+X.startY-X.y:v()+ht-Q[1],Z=F(Mt);pt&&Mt!==Z&&(lt+=Z-Mt),v(Z)}(ht||W)&&Za()},t.onEnable=function(){dg(p,i?!1:"x"),pe.addEventListener("refresh",I),oi(De,"resize",I),v.smooth&&(v.target.style.scrollBehavior="auto",v.smooth=E.smooth=!1),P.enable()},t.onDisable=function(){dg(p,!0),si(De,"resize",I),pe.removeEventListener("refresh",I),P.kill()},t.lockAxis=t.lockAxis!==!1,f=new In(t),f.iOS=Ds,Ds&&!v()&&v(1),Ds&&jt.ticker.add(aa),at=f._dc,Y=jt.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:bb(v,v(),function(){return Y.pause()})},onUpdate:Za,onComplete:at.vars.onComplete}),f};pe.sort=function(s){if(Ai(s))return Ae.sort(s);var t=De.pageYOffset||0;return pe.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+De.innerHeight}),Ae.sort(s||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};pe.observe=function(s){return new In(s)};pe.normalizeScroll=function(s){if(typeof s>"u")return Ni;if(s===!0&&Ni)return Ni.enable();if(s===!1){Ni&&Ni.kill(),Ni=s;return}var t=s instanceof In?s:UN(s);return Ni&&Ni.target===t.target&&Ni.kill(),Ho(t.target)&&(Ni=t),t};pe.core={_getVelocityProp:R0,_inputObserver:Ab,_scrollers:Ue,_proxies:pa,bridge:{ss:function(){Ir||Vo("scrollStart"),Ir=Ei()},ref:function(){return Mi}}};mb()&&jt.registerPlugin(pe);Oe.registerPlugin(pe);const LN=Re.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 3;
`,ON=Re.h1`
  font-size: 4rem;
  color: #00ffcc;
  text-shadow: 0 0 10px #00ffcc;
  z-index: 4;
`,NN=Re.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;function PN({id:s}){const t=Ye.useRef(null),e=Ye.useRef(null);return Ye.useEffect(()=>{const i=new pf,a=new Ti(75,window.innerWidth/window.innerHeight,.1,1e3),l=new mf({canvas:t.current,alpha:!0});l.setSize(window.innerWidth,window.innerHeight);const c=new Q0(1,.3,16,100),f=new df({color:16711884,wireframe:!0}),h=new Pr(c,f);i.add(h),a.position.z=5;const p=()=>{requestAnimationFrame(p),h.rotation.x+=.01,h.rotation.y+=.01,l.render(i,a)};return p(),window.addEventListener("resize",()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)}),Oe.fromTo(e.current,{opacity:0,y:50},{opacity:1,y:0,duration:1,ease:"power3.out"}),pe.create({trigger:`#${s}`,start:"top top",end:"bottom top",onEnter:()=>{Oe.to(h.scale,{x:1,y:1,z:1,duration:1,ease:"power3.out"})},onLeaveBack:()=>{Oe.to(h.scale,{x:0,y:0,z:0,duration:1,ease:"power3.in"})}}),()=>{l.dispose()}},[s]),Xt.jsxs(LN,{id:s,children:[Xt.jsx(NN,{ref:t}),Xt.jsx(ON,{ref:e,children:"Welcome to HackaVerse"})]})}Oe.registerPlugin(pe);const zN=Re.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
`,BN=Re.p`
  font-size: 1.5rem;
  max-width: 800px;
  text-align: center;
  color: #fff;
  z-index: 4;
  opacity: 0;
  position: relative;
`,IN=Re.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.7;
`;function FN({id:s}){const t=Ye.useRef(null),e=Ye.useRef(null);return Ye.useEffect(()=>{const i=e.current,a=i.getContext("2d");i.width=window.innerWidth,i.height=window.innerHeight;const l="0101HACKAVERSE",c=14,f=i.width/c,h=Array(Math.floor(f)).fill(0),m=setInterval(()=>{a.fillStyle="rgba(0, 0, 0, 0.05)",a.fillRect(0,0,i.width,i.height),a.fillStyle="#00ffcc",a.font=`${c}px monospace`,h.forEach((g,x)=>{const v=l.charAt(Math.floor(Math.random()*l.length));a.fillText(v,x*c,g*c),g*c>i.height&&Math.random()>.975&&(h[x]=0),h[x]++})},33);return window.addEventListener("resize",()=>{i.width=window.innerWidth,i.height=window.innerHeight}),Oe.to(t.current,{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:`#${s}`,start:"top 80%"}}),()=>clearInterval(m)},[s]),Xt.jsxs(zN,{id:s,children:[Xt.jsx(IN,{ref:e}),Xt.jsx(BN,{ref:t,style:{transform:"translateY(50px)"},children:"HackaVerse is a cosmic hackathon where innovators code the future, blending tech and creativity in a galactic showdown."})]})}Oe.registerPlugin(pe);const HN=Re.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`,GN=Re.div`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #00ffcc;
  border-radius: 10px;
  padding: 1rem;
  margin: 0.5rem;
  width: 100%;
  max-width: 600px;
  opacity: 0;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;function VN({id:s}){const t=Ye.useRef([]);Ye.useEffect(()=>{t.current.forEach((i,a)=>{Oe.to(i,{opacity:1,y:0,duration:1,delay:a*.2,ease:"power3.out",scrollTrigger:{trigger:`#${s}`,start:"top 80%"}})})},[s]);const e=[{time:"09:00",desc:"Opening Ceremony"},{time:"10:00",desc:"Hacking Begins"},{time:"18:00",desc:"Project Submission"}];return Xt.jsxs(HN,{id:s,children:[Xt.jsx("h2",{children:"Schedule"}),e.map((i,a)=>Xt.jsxs(GN,{ref:l=>t.current[a]=l,style:{transform:"translateY(50px)"},children:[Xt.jsx("h3",{children:i.time}),Xt.jsx("p",{children:i.desc})]},a))]})}Oe.registerPlugin(pe);const kN=Re.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`,XN=Re.div`
  font-size: 1.5rem;
  margin: 1rem;
  opacity: 0;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`,WN=Re.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;function YN({id:s}){const t=Ye.useRef(null),e=Ye.useRef([]);Ye.useEffect(()=>{const a=new pf,l=new Ti(75,window.innerWidth/window.innerHeight,.1,1e3),c=new mf({canvas:t.current,alpha:!0});c.setSize(window.innerWidth,window.innerHeight);const f=new Su(1,1,1),h=new df({color:65484,wireframe:!0}),p=new Pr(f,h);a.add(p),l.position.z=5;const m=()=>{requestAnimationFrame(m),p.rotation.x+=.01,p.rotation.y+=.01,c.render(a,l)};return m(),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)}),e.current.forEach((g,x)=>{Oe.to(g,{opacity:1,y:0,duration:1,delay:x*.2,ease:"power3.out",scrollTrigger:{trigger:`#${s}`,start:"top 80%"}})}),()=>{c.dispose()}},[s]);const i=["1st: Quantum PC","2nd: VR Headset","3rd: Drone"];return Xt.jsxs(kN,{id:s,children:[Xt.jsx(WN,{ref:t}),Xt.jsx("h2",{children:"Prizes"}),i.map((a,l)=>Xt.jsx(XN,{ref:c=>e.current[l]=c,style:{transform:"translateY(50px)"},children:a},l))]})}Oe.registerPlugin(pe);const qN=Re.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`,jN=Re.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`,ZN=Re.div`
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #00ffcc;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-align: center;
  opacity: 0;
  transform: rotateY(90deg);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 255, 204, 0.5);
  }
`,QN=Re.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;function KN({id:s}){const t=Ye.useRef(null),e=Ye.useRef([]);Ye.useEffect(()=>{const a=new pf,l=new Ti(75,window.innerWidth/window.innerHeight,.1,1e3),c=new mf({canvas:t.current,alpha:!0});c.setSize(window.innerWidth,window.innerHeight);const f=new Mr,h=1e3,p=new Float32Array(h*3);for(let v=0;v<h*3;v++)p[v]=(Math.random()-.5)*10;f.setAttribute("position",new vr(p,3));const m=new ap({size:.02,color:16711884,transparent:!0}),g=new Z0(f,m);a.add(g),l.position.z=5;const x=()=>{requestAnimationFrame(x),g.rotation.y+=.001,c.render(a,l)};return x(),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)}),pe.create({trigger:`#${s}`,start:"top top",end:"bottom top",onEnter:()=>{Oe.to(g.scale,{x:1,y:1,z:1,duration:1,ease:"power3.out"})},onLeaveBack:()=>{Oe.to(g.scale,{x:0,y:0,z:0,duration:1,ease:"power3.in"})}}),e.current.forEach((v,E)=>{Oe.to(v,{opacity:1,rotateY:0,duration:1,delay:E*.2,ease:"power3.out",scrollTrigger:{trigger:`#${s}`,start:"top 80%"}})}),()=>{c.dispose()}},[s]);const i=["NebulaTech","QuantumLabs","StarForge","CodeCosmos"];return Xt.jsxs(qN,{id:s,children:[Xt.jsx(QN,{ref:t}),Xt.jsx("h2",{children:"Our Sponsors"}),Xt.jsx(jN,{children:i.map((a,l)=>Xt.jsx(ZN,{ref:c=>e.current[l]=c,children:a},l))})]})}Oe.registerPlugin(pe);const JN=Re.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`,$N=Re.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 1200px;
`,tP=Re.div`
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #ff00cc;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  opacity: 0;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px #ff00cc;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 0, 204, 0.2), transparent);
    transition: 0.5s;
  }
  &:hover:after {
    left: 100%;
  }
`,eP=Re.div`
  width: 80px;
  height: 80px;
  background: radial-gradient(circle, #00ffcc, #ff00cc);
  border-radius: 50%;
  margin: 0 auto 0.5rem;
`,nP=Re.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;function iP({id:s}){const t=Ye.useRef(null),e=Ye.useRef([]);Ye.useEffect(()=>{const a=new pf,l=new Ti(75,window.innerWidth/window.innerHeight,.1,1e3),c=new mf({canvas:t.current,alpha:!0});c.setSize(window.innerWidth,window.innerHeight);const f=new Mr,h=1e3,p=new Float32Array(h*3);for(let v=0;v<h*3;v++)p[v]=(Math.random()-.5)*15;f.setAttribute("position",new vr(p,3));const m=new ap({size:.01,color:65484}),g=new Z0(f,m);a.add(g),l.position.z=5,document.addEventListener("mousemove",v=>{const E=(v.clientX/window.innerWidth-.5)*.05,M=(v.clientY/window.innerHeight-.5)*.05;Oe.to(g.rotation,{x:M,y:E,duration:.5})});const x=()=>{requestAnimationFrame(x),c.render(a,l)};return x(),window.addEventListener("resize",()=>{l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)}),pe.create({trigger:`#${s}`,start:"top top",end:"bottom top",onEnter:()=>{Oe.to(g.scale,{x:1,y:1,z:1,duration:1,ease:"power3.out"})},onLeaveBack:()=>{Oe.to(g.scale,{x:0,y:0,z:0,duration:1,ease:"power3.in"})}}),e.current.forEach((v,E)=>{Oe.to(v,{opacity:1,y:0,duration:1,delay:E*.2,ease:"power3.out",scrollTrigger:{trigger:`#${s}`,start:"top 80%"}})}),()=>{c.dispose()}},[s]);const i=[{name:"Quantum Coders",project:"AI Nebula"},{name:"Byte Blasters",project:"VR Hack"},{name:"Pixel Pioneers",project:"AR Dashboard"},{name:"Cosmo Devs",project:"Blockchain Orbit"}];return Xt.jsxs(JN,{id:s,children:[Xt.jsx(nP,{ref:t}),Xt.jsx("h2",{children:"Meet the Teams"}),Xt.jsx($N,{children:i.map((a,l)=>Xt.jsxs(tP,{ref:c=>e.current[l]=c,style:{transform:"translateY(50px)"},children:[Xt.jsx(eP,{}),Xt.jsx("h3",{children:a.name}),Xt.jsx("p",{children:a.project})]},l))})]})}Oe.registerPlugin(pe);const rP=Re.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`,aP=Re.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 10px;
  opacity: 0;
`,$1=Re.input`
  padding: 0.5rem;
  border: none;
  border-bottom: 2px solid #00ffcc;
  background: transparent;
  color: #fff;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-bottom-color: #ff00cc;
  }
`,sP=Re.button`
  padding: 0.5rem 2rem;
  background: #00ffcc;
  border: none;
  border-radius: 5px;
  color: #0a0a1e;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;function oP({id:s}){const t=Ye.useRef(null);Ye.useEffect(()=>{Oe.to(t.current,{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:`#${s}`,start:"top 80%"}})},[s]);const e=i=>{i.preventDefault(),alert("Registered for HackaVerse!")};return Xt.jsxs(rP,{id:s,children:[Xt.jsx("h2",{children:"Join the HackaVerse"}),Xt.jsxs(aP,{ref:t,style:{transform:"translateY(50px)"},onSubmit:e,children:[Xt.jsx($1,{type:"text",placeholder:"Name",required:!0}),Xt.jsx($1,{type:"email",placeholder:"Email",required:!0}),Xt.jsx(sP,{type:"submit",children:"Register"})]})]})}Oe.registerPlugin(pe);const lP=Re.section`
  min-height: 60vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`,uP=Re.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 1200px;
`,cP=Re.div`
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid #00ffcc;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  opacity: 0;
  transform: perspective(1000px) rotateY(90deg);
  transition: transform 0.3s;
  &:hover {
    transform: perspective(1000px) rotateY(0deg) scale(1.05);
  }
`,fP=Re.div`
  width: 100%;
  height: 150px;
  background: radial-gradient(circle, #00ffcc, #ff00cc);
  border-radius: 5px;
  margin-bottom: 0.5rem;
`;function hP({id:s}){const t=Ye.useRef([]);Ye.useEffect(()=>{t.current.forEach((i,a)=>{Oe.to(i,{opacity:1,rotateY:0,duration:1,delay:a*.2,ease:"power3.out",scrollTrigger:{trigger:`#${s}`,start:"top 80%"}})}),t.current.forEach(i=>{i.addEventListener("mouseenter",()=>{const a=document.createElement("div");a.style.position="absolute",a.style.width="100px",a.style.height="100px",a.style.background="radial-gradient(circle, #00ffcc, transparent)",a.style.borderRadius="50%",a.style.left="50%",a.style.top="50%",a.style.transform="translate(-50%, -50%)",i.appendChild(a),Oe.to(a,{scale:2,opacity:0,duration:.5,onComplete:()=>a.remove()})})})},[s]);const e=[{name:"AI Nebula",desc:"Neural network visualizer"},{name:"VR Hack",desc:"Immersive coding game"},{name:"AR Dashboard",desc:"Augmented analytics"}];return Xt.jsxs(lP,{id:s,children:[Xt.jsx("h2",{children:"Project Showcase"}),Xt.jsx(uP,{children:e.map((i,a)=>Xt.jsxs(cP,{ref:l=>t.current[a]=l,children:[Xt.jsx(fP,{}),Xt.jsx("h3",{children:i.name}),Xt.jsx("p",{children:i.desc})]},a))})]})}const dP=Re.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: radial-gradient(circle, #00ffcc, #ff00cc);
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s;
  box-shadow: 0 0 20px rgba(0, 255, 204, 0.5);
`,pP=Re.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  z-index: 9;
`,mP=Re.a`
  font-size: 2rem;
  color: #00ffcc;
  margin: 1rem;
  text-decoration: none;
  opacity: 0;
  transform: translateY(20px);
  transition: color 0.3s;
  &:hover {
    color: #ff00cc;
  }
`;function _P(){const s=Ye.useRef(null),t=Ye.useRef(null),e=Ye.useRef([]),i=()=>{const l=t.current.style.pointerEvents==="auto";Oe.to(t.current,{opacity:l?0:1,duration:.5,ease:"power3.out",onComplete:()=>{t.current.style.pointerEvents=l?"none":"auto"}}),e.current.forEach((c,f)=>{Oe.to(c,{opacity:l?0:1,y:l?20:0,duration:.5,delay:f*.1,ease:"power3.out"})}),Oe.to(s.current,{scale:l?1:1.5,duration:.3})},a=l=>{Oe.to(window,{scrollTo:document.querySelector(l).offsetTop,duration:1,ease:"power3.out"}),i()};return Xt.jsxs(Xt.Fragment,{children:[Xt.jsx(dP,{ref:s,onClick:i,"aria-label":"Open navigation"}),Xt.jsx(pP,{ref:t,children:["#hero","#about","#schedule","#prizes","#sponsors","#teams","#register","#gallery"].map((l,c)=>Xt.jsx(mP,{href:l,ref:f=>e.current[c]=f,onClick:f=>{f.preventDefault(),a(l)},"aria-label":`Navigate to ${l.slice(1)}`,children:l.slice(1).charAt(0).toUpperCase()+l.slice(2)},c))})]})}const gP=Re.footer`
  padding: 2rem;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`,vP=Re.div`
  display: flex;
  gap: 2rem;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 1rem;
`,xP=Re.div`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 204, 0.2);
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: rgba(0, 255, 204, 0.4);
    transform: scale(1.05);
  }
`,yP=Re.pre`
  margin-top: 2rem;
  font-size: 0.8rem;
  opacity: 0;
`;function SP(){var i,a;const s=Ye.useRef(null),t=Ye.useRef(null);Ye.useEffect(()=>{Oe.to(s.current,{x:"-100%",duration:20,repeat:-1,ease:"linear",modifiers:{x:Oe.utils.unitize(l=>parseFloat(l)%(s.current.scrollWidth/2))}}),Oe.to(t.current,{opacity:1,duration:1,ease:"power3.out",scrollTrigger:{trigger:t.current,start:"top 80%"}})},[]);const e=[{team:"Quantum Coders",project:"AI Nebula"},{team:"Byte Blasters",project:"VR Hack"},{team:"Pixel Pioneers",project:"AR Dashboard"}];return Xt.jsxs(gP,{children:[Xt.jsx("h3",{children:"Live Hackathon Updates"}),Xt.jsx(vP,{ref:s,children:e.map((l,c)=>Xt.jsxs(xP,{onClick:()=>{alert(`${l.team}: ${l.project}`)},children:[l.team," submitted ",l.project]},c))}),Xt.jsx(yP,{ref:t,children:`// Sample HackaVerse submission
const hackaverse = {
  team: "${((i=e[0])==null?void 0:i.team)||"Quantum Coders"}",
  project: "${((a=e[0])==null?void 0:a.project)||"AI Nebula"}",
  innovate: () => console.log('Building the future!')
};
hackaverse.innovate();`})]})}Oe.registerPlugin(pe);const MP=Re.div`
  font-family: 'Orbitron', sans-serif;
  color: #fff;
  background: #0a0a1e;
  overflow-x: hidden;
  position: relative;
`,EP=Re.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`,TP=Re.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAEklEQVQIW2P8z/D/PwMDAwMjjwEJYq0BkwAAAABJRU5ErkJggg==');
  opacity: 0;
  pointer-events: none;
  z-index: 2;
`;function bP(){const s=Ye.useRef(null),t=Ye.useRef(null),e=Ye.useRef(null);return Ye.useEffect(()=>{const i=new pf,a=new Ti(75,window.innerWidth/window.innerHeight,.1,1e3),l=new mf({canvas:s.current,alpha:!0});l.setSize(window.innerWidth,window.innerHeight);const c=new KL(l),f=new JL(i,a);c.addPass(f);const h=new fu(new Le(window.innerWidth,window.innerHeight),1.5,.4,.85);c.addPass(h);const p=new Mr,m=5e3,g=new Float32Array(m*3);for(let M=0;M<m*3;M++)g[M]=(Math.random()-.5)*20;p.setAttribute("position",new vr(g,3));const x=new ap({size:.01,color:65484,transparent:!0,opacity:.8}),v=new Z0(p,x);i.add(v),a.position.z=10,document.addEventListener("mousemove",M=>{const y=(M.clientX/window.innerWidth-.5)*.1,S=(M.clientY/window.innerHeight-.5)*.1;Oe.to(a.rotation,{x:S,y,duration:.5})});const E=()=>{requestAnimationFrame(E),v.rotation.y+=5e-4,c.render()};if(E(),window.addEventListener("resize",()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight),c.setSize(window.innerWidth,window.innerHeight)}),document.addEventListener("mousemove",M=>{const y=document.createElement("div");y.style.position="fixed",y.style.width="5px",y.style.height="5px",y.style.background="#00ffcc",y.style.borderRadius="50%",y.style.left=`${M.clientX}px`,y.style.top=`${M.clientY}px`,y.style.pointerEvents="none",document.body.appendChild(y),Oe.to(y,{opacity:0,scale:0,duration:1,onComplete:()=>y.remove()})}),["hero","about","schedule","prizes","sponsors","teams","register","gallery"].forEach(M=>{pe.create({trigger:`#${M}`,start:"top center",onEnter:()=>{Oe.to(e.current,{opacity:.2,duration:.1,yoyo:!0,repeat:3,onComplete:()=>Oe.set(e.current,{opacity:0})}),Oe.to(v,{opacity:.5,duration:.5,yoyo:!0,repeat:1})}})}),t.current){t.current.volume=.3;const M=()=>{t.current.play().catch(y=>{console.log("Autoplay blocked:",y),document.addEventListener("click",M,{once:!0})})};M()}return()=>{l.dispose()}},[]),Xt.jsxs(MP,{children:[Xt.jsx(EP,{ref:s}),Xt.jsx(TP,{ref:e}),Xt.jsxs("audio",{ref:t,loop:!0,autoPlay:!0,children:[Xt.jsx("source",{src:"/lofi.mp3",type:"audio/mp3"}),Xt.jsx("source",{src:"https://www.chosic.com/wp-content/uploads/2021/07/lofi-2.mp3",type:"audio/mp3"})]}),Xt.jsx(_P,{}),Xt.jsx(PN,{id:"hero"}),Xt.jsx(FN,{id:"about"}),Xt.jsx(VN,{id:"schedule"}),Xt.jsx(YN,{id:"prizes"}),Xt.jsx(KN,{id:"sponsors"}),Xt.jsx(iP,{id:"teams"}),Xt.jsx(oP,{id:"register"}),Xt.jsx(hP,{id:"gallery"}),Xt.jsx(SP,{})]})}FR.createRoot(document.getElementById("root")).render(Xt.jsx(tu.StrictMode,{children:Xt.jsx(bP,{})}));
