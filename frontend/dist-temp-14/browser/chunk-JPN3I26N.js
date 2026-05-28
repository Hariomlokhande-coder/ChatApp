import{$ as vo,$a as ge,A as Le,Aa as lt,Ac as Go,B as Vt,Ba as Co,Bb as ko,C as ho,Ca as dt,Cb as Hn,D as Pe,Da as Un,Db as Vn,Ea as ht,Eb as Ee,F as fo,Fa as ft,G as ct,Ga as Io,H as ke,Ha as So,I as qr,Ia as Ao,Ja as Ro,Jb as de,K as mo,Ka as To,Kb as k,La as Mo,Lb as Uo,M as po,Ma as Fo,N as go,Na as ie,O as le,Ob as Ue,P as ut,Pb as Q,Q as O,Qa as xo,R as y,S as Gt,Ta as mt,U as m,Ua as Oo,V as $,Va as Bn,W as bo,X as p,Xa as jn,Y as b,Z as l,Za as pt,Zb as be,_ as Wt,_a as Zt,_b as Gn,a as h,aa as ne,b as q,ba as Y,bb as $n,db as No,eb as Yr,fa as X,fb as V,g as st,ga as w,gb as H,h as so,ha as Pn,hb as J,i as Nn,ia as yo,ib as Lo,j as B,ja as Ie,jb as gt,k as Z,ka as z,l as ce,la as qe,m as ue,ma as qt,mb as Xr,mc as Bo,n as g,nb as zn,nc as jo,o as at,oa as T,ob as Jr,oc as N,p as Wr,pb as Po,pc as bt,q as ao,qa as _o,qb as Yt,qc as $o,r as I,ra as Do,rb as Ze,rc as Wn,s as co,sa as Ke,sc as zo,t as Ne,ta as kn,u as uo,ua as Kr,v as Ln,va as re,vc as qn,w as lo,wa as Zr,wc as Ho,xa as Eo,xc as ee,y as De,ya as Kt,yc as Vo,za as wo}from"./chunk-6MVMW2KT.js";var Wo=null;function Se(){return Wo}function Qr(t){Wo??=t}var Xt=class{},vt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>l(qo),providedIn:"platform"})}return t})();var qo=(()=>{class t extends vt{_location;_history;_doc=l(w);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Se().getBaseHref(this._doc)}onPopState(e){let n=Se().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Se().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,i){this._history.pushState(e,n,i)}replaceState(e,n,i){this._history.replaceState(e,n,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function Yo(t,r){return t?r?t.endsWith("/")?r.startsWith("/")?t+r.slice(1):t+r:r.startsWith("/")?t+r:`${t}/${r}`:t:r}function Ko(t){let r=t.search(/#|\?|$/);return t[r-1]==="/"?t.slice(0,r-1)+t.slice(r):t}function Be(t){return t&&t[0]!=="?"?`?${t}`:t}var yt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>l(fc),providedIn:"root"})}return t})(),hc=new p(""),fc=(()=>{class t extends yt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??l(w).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return Yo(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Be(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${n}${i}`:n}pushState(e,n,i,o){let s=this.prepareExternalUrl(i+Be(o));this._platformLocation.pushState(e,n,s)}replaceState(e,n,i,o){let s=this.prepareExternalUrl(i+Be(o));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(b(vt),b(hc,8))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _t=(()=>{class t{_subject=new B;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=gc(Ko(Zo(n))),this._locationStrategy.onPopState(i=>{this._subject.next({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Be(n))}normalize(e){return t.stripTrailingSlash(pc(this._basePath,Zo(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",i=null){this._locationStrategy.pushState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Be(n)),i)}replaceState(e,n="",i=null){this._locationStrategy.replaceState(i,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Be(n)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(i=>i(e,n))}subscribe(e,n,i){return this._subject.subscribe({next:e,error:n??void 0,complete:i??void 0})}static normalizeQueryParams=Be;static joinWithSlash=Yo;static stripTrailingSlash=Ko;static \u0275fac=function(n){return new(n||t)(b(yt))};static \u0275prov=m({token:t,factory:()=>mc(),providedIn:"root"})}return t})();function mc(){return new _t(b(yt))}function pc(t,r){if(!t||!r.startsWith(t))return r;let e=r.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function Zo(t){return t.replace(/\/index.html$/,"")}function gc(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var G=(function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t})(G||{}),S=(function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t})(S||{}),te=(function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t})(te||{}),Re={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Jo(t){return de(t)[k.LocaleId]}function Qo(t,r,e){let n=de(t),i=[n[k.DayPeriodsFormat],n[k.DayPeriodsStandalone]],o=he(i,r);return he(o,e)}function es(t,r,e){let n=de(t),i=[n[k.DaysFormat],n[k.DaysStandalone]],o=he(i,r);return he(o,e)}function ts(t,r,e){let n=de(t),i=[n[k.MonthsFormat],n[k.MonthsStandalone]],o=he(i,r);return he(o,e)}function ns(t,r){let n=de(t)[k.Eras];return he(n,r)}function Jt(t,r){let e=de(t);return he(e[k.DateFormat],r)}function Qt(t,r){let e=de(t);return he(e[k.TimeFormat],r)}function en(t,r){let n=de(t)[k.DateTimeFormat];return he(n,r)}function tn(t,r){let e=de(t),n=e[k.NumberSymbols][r];if(typeof n>"u"){if(r===Re.CurrencyDecimal)return e[k.NumberSymbols][Re.Decimal];if(r===Re.CurrencyGroup)return e[k.NumberSymbols][Re.Group]}return n}function rs(t){if(!t[k.ExtraData])throw new y(2303,!1)}function is(t){let r=de(t);return rs(r),(r[k.ExtraData][2]||[]).map(n=>typeof n=="string"?ei(n):[ei(n[0]),ei(n[1])])}function os(t,r,e){let n=de(t);rs(n);let i=[n[k.ExtraData][0],n[k.ExtraData][1]],o=he(i,r)||[];return he(o,e)||[]}function he(t,r){for(let e=r;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new y(2304,!1)}function ei(t){let[r,e]=t.split(":");return{hours:+r,minutes:+e}}var bc=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Kn={},vc=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function ss(t,r,e,n){let i=Ac(t);r=Ae(e,r)||r;let s=[],a;for(;r;)if(a=vc.exec(r),a){s=s.concat(a.slice(1));let d=s.pop();if(!d)break;r=d}else{s.push(r);break}let c=i.getTimezoneOffset();n&&(c=cs(n,c),i=Sc(i,n));let u="";return s.forEach(d=>{let f=Cc(d);u+=f?f(i,e,c):d==="''"?"'":d.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function Qn(t,r,e){let n=new Date(0);return n.setFullYear(t,r,e),n.setHours(0,0,0),n}function Ae(t,r){let e=Jo(t);if(Kn[e]??={},Kn[e][r])return Kn[e][r];let n="";switch(r){case"shortDate":n=Jt(t,te.Short);break;case"mediumDate":n=Jt(t,te.Medium);break;case"longDate":n=Jt(t,te.Long);break;case"fullDate":n=Jt(t,te.Full);break;case"shortTime":n=Qt(t,te.Short);break;case"mediumTime":n=Qt(t,te.Medium);break;case"longTime":n=Qt(t,te.Long);break;case"fullTime":n=Qt(t,te.Full);break;case"short":let i=Ae(t,"shortTime"),o=Ae(t,"shortDate");n=Zn(en(t,te.Short),[i,o]);break;case"medium":let s=Ae(t,"mediumTime"),a=Ae(t,"mediumDate");n=Zn(en(t,te.Medium),[s,a]);break;case"long":let c=Ae(t,"longTime"),u=Ae(t,"longDate");n=Zn(en(t,te.Long),[c,u]);break;case"full":let d=Ae(t,"fullTime"),f=Ae(t,"fullDate");n=Zn(en(t,te.Full),[d,f]);break}return n&&(Kn[e][r]=n),n}function Zn(t,r){return r&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return r!=null&&n in r?r[n]:e})),t}function ve(t,r,e="-",n,i){let o="";(t<0||i&&t<=0)&&(i?t=-t+1:(t=-t,o=e));let s=String(t);for(;s.length<r;)s="0"+s;return n&&(s=s.slice(s.length-r)),o+s}function yc(t,r){return ve(t,3).substring(0,r)}function L(t,r,e=0,n=!1,i=!1){return function(o,s){let a=_c(t,o);if((e>0||a>-e)&&(a+=e),t===3)a===0&&e===-12&&(a=12);else if(t===6)return yc(a,r);let c=tn(s,Re.MinusSign);return ve(a,r,c,n,i)}}function _c(t,r){switch(t){case 0:return r.getFullYear();case 1:return r.getMonth();case 2:return r.getDate();case 3:return r.getHours();case 4:return r.getMinutes();case 5:return r.getSeconds();case 6:return r.getMilliseconds();case 7:return r.getDay();default:throw new y(2301,!1)}}function R(t,r,e=G.Format,n=!1){return function(i,o){return Dc(i,o,t,r,e,n)}}function Dc(t,r,e,n,i,o){switch(e){case 2:return ts(r,i,n)[t.getMonth()];case 1:return es(r,i,n)[t.getDay()];case 0:let s=t.getHours(),a=t.getMinutes();if(o){let u=is(r),d=os(r,i,n),f=u.findIndex(_=>{if(Array.isArray(_)){let[P,M]=_,F=s>=P.hours&&a>=P.minutes,D=s<M.hours||s===M.hours&&a<M.minutes;if(P.hours<M.hours){if(F&&D)return!0}else if(F||D)return!0}else if(_.hours===s&&_.minutes===a)return!0;return!1});if(f!==-1)return d[f]}return Qo(r,i,n)[s<12?0:1];case 3:return ns(r,n)[t.getFullYear()<=0?0:1];default:let c=e;throw new y(2302,!1)}}function Yn(t){return function(r,e,n){let i=-1*n,o=tn(e,Re.MinusSign),s=i>0?Math.floor(i/60):Math.ceil(i/60);switch(t){case 0:return(i>=0?"+":"")+ve(s,2,o)+ve(Math.abs(i%60),2,o);case 1:return"GMT"+(i>=0?"+":"")+ve(s,1,o);case 2:return"GMT"+(i>=0?"+":"")+ve(s,2,o)+":"+ve(Math.abs(i%60),2,o);case 3:return n===0?"Z":(i>=0?"+":"")+ve(s,2,o)+":"+ve(Math.abs(i%60),2,o);default:throw new y(2310,!1)}}}var Ec=0,Jn=4;function wc(t){let r=Qn(t,Ec,1).getDay();return Qn(t,0,1+(r<=Jn?Jn:Jn+7)-r)}function as(t){let r=t.getDay(),e=r===0?-3:Jn-r;return Qn(t.getFullYear(),t.getMonth(),t.getDate()+e)}function ti(t,r=!1){return function(e,n){let i;if(r){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();i=1+Math.floor((s+o)/7)}else{let o=as(e),s=wc(o.getFullYear()),a=o.getTime()-s.getTime();i=1+Math.round(a/6048e5)}return ve(i,t,tn(n,Re.MinusSign))}}function Xn(t,r=!1){return function(e,n){let o=as(e).getFullYear();return ve(o,t,tn(n,Re.MinusSign),r)}}var ni={};function Cc(t){if(ni[t])return ni[t];let r;switch(t){case"G":case"GG":case"GGG":r=R(3,S.Abbreviated);break;case"GGGG":r=R(3,S.Wide);break;case"GGGGG":r=R(3,S.Narrow);break;case"y":r=L(0,1,0,!1,!0);break;case"yy":r=L(0,2,0,!0,!0);break;case"yyy":r=L(0,3,0,!1,!0);break;case"yyyy":r=L(0,4,0,!1,!0);break;case"Y":r=Xn(1);break;case"YY":r=Xn(2,!0);break;case"YYY":r=Xn(3);break;case"YYYY":r=Xn(4);break;case"M":case"L":r=L(1,1,1);break;case"MM":case"LL":r=L(1,2,1);break;case"MMM":r=R(2,S.Abbreviated);break;case"MMMM":r=R(2,S.Wide);break;case"MMMMM":r=R(2,S.Narrow);break;case"LLL":r=R(2,S.Abbreviated,G.Standalone);break;case"LLLL":r=R(2,S.Wide,G.Standalone);break;case"LLLLL":r=R(2,S.Narrow,G.Standalone);break;case"w":r=ti(1);break;case"ww":r=ti(2);break;case"W":r=ti(1,!0);break;case"d":r=L(2,1);break;case"dd":r=L(2,2);break;case"c":case"cc":r=L(7,1);break;case"ccc":r=R(1,S.Abbreviated,G.Standalone);break;case"cccc":r=R(1,S.Wide,G.Standalone);break;case"ccccc":r=R(1,S.Narrow,G.Standalone);break;case"cccccc":r=R(1,S.Short,G.Standalone);break;case"E":case"EE":case"EEE":r=R(1,S.Abbreviated);break;case"EEEE":r=R(1,S.Wide);break;case"EEEEE":r=R(1,S.Narrow);break;case"EEEEEE":r=R(1,S.Short);break;case"a":case"aa":case"aaa":r=R(0,S.Abbreviated);break;case"aaaa":r=R(0,S.Wide);break;case"aaaaa":r=R(0,S.Narrow);break;case"b":case"bb":case"bbb":r=R(0,S.Abbreviated,G.Standalone,!0);break;case"bbbb":r=R(0,S.Wide,G.Standalone,!0);break;case"bbbbb":r=R(0,S.Narrow,G.Standalone,!0);break;case"B":case"BB":case"BBB":r=R(0,S.Abbreviated,G.Format,!0);break;case"BBBB":r=R(0,S.Wide,G.Format,!0);break;case"BBBBB":r=R(0,S.Narrow,G.Format,!0);break;case"h":r=L(3,1,-12);break;case"hh":r=L(3,2,-12);break;case"H":r=L(3,1);break;case"HH":r=L(3,2);break;case"m":r=L(4,1);break;case"mm":r=L(4,2);break;case"s":r=L(5,1);break;case"ss":r=L(5,2);break;case"S":r=L(6,1);break;case"SS":r=L(6,2);break;case"SSS":r=L(6,3);break;case"Z":case"ZZ":case"ZZZ":r=Yn(0);break;case"ZZZZZ":r=Yn(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":r=Yn(1);break;case"OOOO":case"ZZZZ":case"zzzz":r=Yn(2);break;default:return null}return ni[t]=r,r}function cs(t,r){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?r:e}function Ic(t,r){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+r),t}function Sc(t,r,e){let i=t.getTimezoneOffset(),o=cs(r,i);return Ic(t,-1*(o-i))}function Ac(t){if(Xo(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[i,o=1,s=1]=t.split("-").map(a=>+a);return Qn(i,o-1,s)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(bc))return Rc(n)}let r=new Date(t);if(!Xo(r))throw new y(2311,!1);return r}function Rc(t){let r=new Date(0),e=0,n=0,i=t[8]?r.setUTCFullYear:r.setFullYear,o=t[8]?r.setUTCHours:r.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),i.call(r,Number(t[1]),Number(t[2])-1,Number(t[3]));let s=Number(t[4]||0)-e,a=Number(t[5]||0)-n,c=Number(t[6]||0),u=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return o.call(r,s,a,c,u),r}function Xo(t){return t instanceof Date&&!isNaN(t.valueOf())}var Tc=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(X);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,i):!1,get:(e,n,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,i)}})}static \u0275fac=function(n){return new(n||t)(ge($n))};static \u0275dir=J({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ke]})}return t})();function Mc(t,r){return new y(2100,!1)}var Fc="mediumDate",us=new p(""),ls=new p(""),xc=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,i){this.locale=e,this.defaultTimezone=n,this.defaultOptions=i}transform(e,n,i,o){if(e==null||e===""||e!==e)return null;try{let s=n??this.defaultOptions?.dateFormat??Fc,a=i??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return ss(e,s,o||this.locale,a)}catch(s){throw Mc(t,s.message)}}static \u0275fac=function(n){return new(n||t)(ge(jo,16),ge(us,24),ge(ls,24))};static \u0275pipe=Lo({name:"date",type:t,pure:!0})}return t})();var ds=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=$({})}return t})();function nn(t,r){r=encodeURIComponent(r);for(let e of t.split(";")){let n=e.indexOf("="),[i,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(i.trim()===r)return decodeURIComponent(o)}return null}var Ye=class{};var ri="browser";function hs(t){return t===ri}var rn=class{_doc;constructor(r){this._doc=r}manager},er=(()=>{class t extends rn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,i,o){return e.addEventListener(n,i,o),()=>this.removeEventListener(e,n,i,o)}removeEventListener(e,n,i,o){return e.removeEventListener(n,i,o)}static \u0275fac=function(n){return new(n||t)(b(w))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),rr=new p(""),ai=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(s=>{s.manager=this});let i=e.filter(s=>!(s instanceof er));this._plugins=i.slice().reverse();let o=e.find(s=>s instanceof er);o&&this._plugins.push(o)}addEventListener(e,n,i,o){return this._findPluginFor(n).addEventListener(e,n,i,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new y(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(b(rr),b(z))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),ii="ng-app-id";function fs(t){for(let r of t)r.remove()}function ms(t,r){let e=r.createElement("style");return e.textContent=t,e}function Lc(t,r,e,n){let i=t.head?.querySelectorAll(`style[${ii}="${r}"],link[${ii}="${r}"]`);if(i)for(let o of i)o.removeAttribute(ii),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function si(t,r){let e=r.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var ci=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,i,o={}){this.doc=e,this.appId=n,this.nonce=i,Lc(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let i of e)this.addUsage(i,this.inline,ms);n?.forEach(i=>this.addUsage(i,this.external,si))}removeStyles(e,n){for(let i of e)this.removeUsage(i,this.inline);n?.forEach(i=>this.removeUsage(i,this.external))}addUsage(e,n,i){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,i(e,this.doc)))})}removeUsage(e,n){let i=n.get(e);i&&(i.usage--,i.usage<=0&&(fs(i.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])fs(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:i}]of this.inline)i.push(this.addElement(e,ms(n,this.doc)));for(let[n,{elements:i}]of this.external)i.push(this.addElement(e,si(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(b(w),b(Kt),b(dt,8),b(lt))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),oi={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ui=/%COMP%/g;var gs="%COMP%",Pc=`_nghost-${gs}`,kc=`_ngcontent-${gs}`,Uc=!0,Bc=new p("",{factory:()=>Uc});function jc(t){return kc.replace(ui,t)}function $c(t){return Pc.replace(ui,t)}function bs(t,r){return r.map(e=>e.replace(ui,t))}var li=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,i,o,s,a,c=null,u=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=i,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=c,this.tracingService=u,this.defaultRenderer=new on(e,s,a,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let i=this.getOrCreateRenderer(e,n);return i instanceof nr?i.applyToHost(e):i instanceof sn&&i.applyStyles(),i}getOrCreateRenderer(e,n){let i=this.rendererByCompId,o=i.get(n.id);if(!o){let s=this.doc,a=this.ngZone,c=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,f=this.tracingService;switch(n.encapsulation){case Un.Emulated:o=new nr(c,u,n,this.appId,d,s,a,f);break;case Un.ShadowDom:return new tr(c,e,n,s,a,this.nonce,f,u);case Un.ExperimentalIsolatedShadowDom:return new tr(c,e,n,s,a,this.nonce,f);default:o=new sn(c,u,n,d,s,a,f);break}i.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(b(ai),b(ci),b(Kt),b(Bc),b(w),b(z),b(dt),b(Bn,8))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),on=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,e,n,i){this.eventManager=r,this.doc=e,this.ngZone=n,this.tracingService=i}destroy(){}destroyNode=null;createElement(r,e){return e?this.doc.createElementNS(oi[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(ps(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){r&&(ps(r)?r.content:r).insertBefore(e,n)}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new y(-5104,!1);return e||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,i){if(i){e=i+":"+e;let o=oi[i];o?r.setAttributeNS(o,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let i=oi[n];i?r.removeAttributeNS(i,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,i){i&(mt.DashCase|mt.Important)?r.style.setProperty(e,n,i&mt.Important?"important":""):r.style[e]=n}removeStyle(r,e,n){n&mt.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n,i){if(typeof r=="string"&&(r=Se().getGlobalEventTarget(this.doc,r),!r))throw new y(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(r,e,o)),this.eventManager.addEventListener(r,e,o,i)}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;r(e)===!1&&e.preventDefault()}}};function ps(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var tr=class extends on{hostEl;sharedStylesHost;shadowRoot;constructor(r,e,n,i,o,s,a,c){super(r,i,o,a),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=n.styles;u=bs(n.id,u);for(let f of u){let _=document.createElement("style");s&&_.setAttribute("nonce",s),_.textContent=f,this.shadowRoot.appendChild(_)}let d=n.getExternalStyles?.();if(d)for(let f of d){let _=si(f,i);s&&_.setAttribute("nonce",s),this.shadowRoot.appendChild(_)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},sn=class extends on{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,e,n,i,o,s,a,c){super(r,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=i;let u=n.styles;this.styles=c?bs(c,u):u,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Oo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},nr=class extends sn{contentAttr;hostAttr;constructor(r,e,n,i,o,s,a,c){let u=i+"-"+n.id;super(r,e,n,o,s,a,c,u),this.contentAttr=jc(u),this.hostAttr=$c(u)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,""),n}};var ir=class t extends Xt{supportsDOMEvents=!0;static makeCurrent(){Qr(new t)}onAndCancel(r,e,n,i){return r.addEventListener(e,n,i),()=>{r.removeEventListener(e,n,i)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=Hc();return e==null?null:Vc(e)}resetBaseElement(){an=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return nn(document.cookie,r)}},an=null;function Hc(){return an=an||document.head.querySelector("base"),an?an.getAttribute("href"):null}function Vc(t){return new URL(t,document.baseURI).pathname}var Gc=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),vs=["alt","control","meta","shift"],Wc={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},qc={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},ys=(()=>{class t extends rn{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,i,o){let s=t.parseEventName(n),a=t.eventCallback(s.fullKey,i,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Se().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let n=e.toLowerCase().split("."),i=n.shift();if(n.length===0||!(i==="keydown"||i==="keyup"))return null;let o=t._normalizeKey(n.pop()),s="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),s="code."),vs.forEach(u=>{let d=n.indexOf(u);d>-1&&(n.splice(d,1),s+=u+".")}),s+=o,n.length!=0||o.length===0)return null;let c={};return c.domEventName=i,c.fullKey=s,c}static matchEventFullKeyCode(e,n){let i=Wc[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(i=e.code,o="code."),i==null||!i?!1:(i=i.toLowerCase(),i===" "?i="space":i==="."&&(i="dot"),vs.forEach(s=>{if(s!==i){let a=qc[s];a(e)&&(o+=s+".")}}),o+=i,o===n)}static eventCallback(e,n,i){return o=>{t.matchEventFullKeyCode(o,e)&&i.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(b(w))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();async function Kc(t,r,e){let n=h({rootComponent:t},Zc(r,e));return Ho(n)}function Zc(t,r){return{platformRef:r?.platformRef,appProviders:[...eu,...t?.providers??[]],platformProviders:Qc}}function Yc(){ir.makeCurrent()}function Xc(){return new qe}function Jc(){return Eo(document),document}var Qc=[{provide:lt,useValue:ri},{provide:wo,useValue:Yc,multi:!0},{provide:w,useFactory:Jc}];var eu=[{provide:vo,useValue:"root"},{provide:qe,useFactory:Xc},{provide:rr,useClass:er,multi:!0},{provide:rr,useClass:ys,multi:!0},li,ci,ai,{provide:pt,useExisting:li},{provide:Ye,useClass:Gc},[]];var je=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let i=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(i,o)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let e=this.headers.get(r.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,e){return this.clone({name:r,value:e,op:"a"})}set(r,e){return this.clone({name:r,value:e,op:"s"})}delete(r,e){return this.clone({name:r,value:e,op:"d"})}maybeSetNormalizedName(r,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,r)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(e=>{this.headers.set(e,r.headers.get(e)),this.normalizedNames.set(e,r.normalizedNames.get(e))})}clone(r){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([r]),e}applyUpdate(r){let e=r.name.toLowerCase();switch(r.op){case"a":case"s":let n=r.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(r.name,e);let i=(r.op==="a"?this.headers.get(e):void 0)||[];i.push(...n),this.headers.set(e,i);break;case"d":let o=r.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(r,e){let n=r.toLowerCase();this.maybeSetNormalizedName(r,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(r,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),i=r.toLowerCase();this.headers.set(i,n),this.maybeSetNormalizedName(r,i)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>r(this.normalizedNames.get(e),this.headers.get(e)))}};var sr=class{map=new Map;set(r,e){return this.map.set(r,e),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}},ar=class{encodeKey(r){return _s(r)}encodeValue(r){return _s(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function tu(t,r){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(i=>{let o=i.indexOf("="),[s,a]=o==-1?[r.decodeKey(i),""]:[r.decodeKey(i.slice(0,o)),r.decodeValue(i.slice(o+1))],c=e.get(s)||[];c.push(a),e.set(s,c)}),e}var nu=/%(\d[a-f0-9])/gi,ru={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function _s(t){return encodeURIComponent(t).replace(nu,(r,e)=>ru[e]??r)}function or(t){return`${t}`}var Te=class t{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new ar,r.fromString){if(r.fromObject)throw new y(2805,!1);this.map=tu(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(e=>{let n=r.fromObject[e],i=Array.isArray(n)?n.map(or):[or(n)];this.map.set(e,i)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let e=this.map.get(r);return e?e[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,e){return this.clone({param:r,value:e,op:"a"})}appendAll(r){let e=[];return Object.keys(r).forEach(n=>{let i=r[n];Array.isArray(i)?i.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:i,op:"a"})}),this.clone(e)}set(r,e){return this.clone({param:r,value:e,op:"s"})}delete(r,e){return this.clone({param:r,value:e,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let e=this.encoder.encodeKey(r);return this.map.get(r).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(r),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let e=(r.op==="a"?this.map.get(r.param):void 0)||[];e.push(or(r.value)),this.map.set(r.param,e);break;case"d":if(r.value!==void 0){let n=this.map.get(r.param)||[],i=n.indexOf(or(r.value));i!==-1&&n.splice(i,1),n.length>0?this.map.set(r.param,n):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};function iu(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Ds(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function Es(t){return typeof Blob<"u"&&t instanceof Blob}function ws(t){return typeof FormData<"u"&&t instanceof FormData}function ou(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Cs="Content-Type",Is="Accept",Ss="text/plain",As="application/json",su=`${As}, ${Ss}, */*`,Dt=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(r,e,n,i){this.url=e,this.method=r.toUpperCase();let o;if(iu(this.method)||i?(this.body=n!==void 0?n:null,o=i):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new y(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new je,this.context??=new sr,!this.params)this.params=new Te,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),c=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+c+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Ds(this.body)||Es(this.body)||ws(this.body)||ou(this.body)?this.body:this.body instanceof Te?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ws(this.body)?null:Es(this.body)?this.body.type||null:Ds(this.body)?null:typeof this.body=="string"?Ss:this.body instanceof Te?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?As:null}clone(r={}){let e=r.method||this.method,n=r.url||this.url,i=r.responseType||this.responseType,o=r.keepalive??this.keepalive,s=r.priority||this.priority,a=r.cache||this.cache,c=r.mode||this.mode,u=r.redirect||this.redirect,d=r.credentials||this.credentials,f=r.referrer||this.referrer,_=r.integrity||this.integrity,P=r.referrerPolicy||this.referrerPolicy,M=r.transferCache??this.transferCache,F=r.timeout??this.timeout,D=r.body!==void 0?r.body:this.body,E=r.withCredentials??this.withCredentials,x=r.reportProgress??this.reportProgress,K=r.headers||this.headers,U=r.params||this.params,zt=r.context??this.context;return r.setHeaders!==void 0&&(K=Object.keys(r.setHeaders).reduce((Ht,We)=>Ht.set(We,r.setHeaders[We]),K)),r.setParams&&(U=Object.keys(r.setParams).reduce((Ht,We)=>Ht.set(We,r.setParams[We]),U)),new t(e,n,D,{params:U,headers:K,context:zt,reportProgress:x,responseType:i,withCredentials:E,transferCache:M,keepalive:o,cache:a,priority:s,timeout:F,mode:c,redirect:u,credentials:d,referrer:f,integrity:_,referrerPolicy:P})}},Xe=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Xe||{}),wt=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(r,e=200,n="OK"){this.headers=r.headers||new je,this.status=r.status!==void 0?r.status:e,this.statusText=r.statusText||n,this.url=r.url||null,this.redirected=r.redirected,this.responseType=r.responseType,this.ok=this.status>=200&&this.status<300}},cr=class t extends wt{constructor(r={}){super(r)}type=Xe.ResponseHeader;clone(r={}){return new t({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},cn=class t extends wt{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=Xe.Response;clone(r={}){return new t({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0,redirected:r.redirected??this.redirected,responseType:r.responseType??this.responseType})}},Et=class extends wt{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},au=200,cu=204;var uu=new p("");var lu=/^\)\]\}',?\n/;var hi=(()=>{class t{xhrFactory;tracingService=l(Bn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new y(-2800,!1);let n=this.xhrFactory;return g(null).pipe(le(()=>new Nn(o=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((D,E)=>s.setRequestHeader(D,E.join(","))),e.headers.has(Is)||s.setRequestHeader(Is,su),!e.headers.has(Cs)){let D=e.detectContentTypeHeader();D!==null&&s.setRequestHeader(Cs,D)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let D=e.responseType.toLowerCase();s.responseType=D!=="json"?D:"text"}let a=e.serializeBody(),c=null,u=()=>{if(c!==null)return c;let D=s.statusText||"OK",E=new je(s.getAllResponseHeaders()),x=s.responseURL||e.url;return c=new cr({headers:E,status:s.status,statusText:D,url:x}),c},d=this.maybePropagateTrace(()=>{let{headers:D,status:E,statusText:x,url:K}=u(),U=null;E!==cu&&(U=typeof s.response>"u"?s.responseText:s.response),E===0&&(E=U?au:0);let zt=E>=200&&E<300;if(e.responseType==="json"&&typeof U=="string"){let Ht=U;U=U.replace(lu,"");try{U=U!==""?JSON.parse(U):null}catch(We){U=Ht,zt&&(zt=!1,U={error:We,text:U})}}zt?(o.next(new cn({body:U,headers:D,status:E,statusText:x,url:K||void 0})),o.complete()):o.error(new Et({error:U,headers:D,status:E,statusText:x,url:K||void 0}))}),f=this.maybePropagateTrace(D=>{let{url:E}=u(),x=new Et({error:D,status:s.status||0,statusText:s.statusText||"Unknown Error",url:E||void 0});o.error(x)}),_=f;e.timeout&&(_=this.maybePropagateTrace(D=>{let{url:E}=u(),x=new Et({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:E||void 0});o.error(x)}));let P=!1,M=this.maybePropagateTrace(D=>{P||(o.next(u()),P=!0);let E={type:Xe.DownloadProgress,loaded:D.loaded};D.lengthComputable&&(E.total=D.total),e.responseType==="text"&&s.responseText&&(E.partialText=s.responseText),o.next(E)}),F=this.maybePropagateTrace(D=>{let E={type:Xe.UploadProgress,loaded:D.loaded};D.lengthComputable&&(E.total=D.total),o.next(E)});return s.addEventListener("load",d),s.addEventListener("error",f),s.addEventListener("timeout",_),s.addEventListener("abort",f),e.reportProgress&&(s.addEventListener("progress",M),a!==null&&s.upload&&s.upload.addEventListener("progress",F)),s.send(a),o.next({type:Xe.Sent}),()=>{s.removeEventListener("error",f),s.removeEventListener("abort",f),s.removeEventListener("load",d),s.removeEventListener("timeout",_),e.reportProgress&&(s.removeEventListener("progress",M),a!==null&&s.upload&&s.upload.removeEventListener("progress",F)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(b(Ye))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function du(t,r){return r(t)}function hu(t,r,e){return(n,i)=>Y(e,()=>r(n,o=>t(o,i)))}var fi=new p("",{factory:()=>[]}),Rs=new p(""),Ts=new p("",{factory:()=>!0});var mi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=b(hi),i},providedIn:"root"})}return t})();var ur=(()=>{class t{backend;injector;chain=null;pendingTasks=l(_o);contributeToStability=l(Ts);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(fi),...this.injector.get(Rs,[])]));this.chain=n.reduceRight((i,o)=>hu(i,o,this.injector),du)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,i=>this.backend.handle(i)).pipe(ct(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(b(mi),b(ne))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=b(ur),i},providedIn:"root"})}return t})();function di(t,r){return{body:r,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Ct=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,i={}){let o;if(e instanceof Dt)o=e;else{let c;i.headers instanceof je?c=i.headers:c=new je(i.headers);let u;i.params&&(i.params instanceof Te?u=i.params:u=new Te({fromObject:i.params})),o=new Dt(e,n,i.body!==void 0?i.body:null,{headers:c,context:i.context,params:u,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,credentials:i.credentials,referrer:i.referrer,referrerPolicy:i.referrerPolicy,integrity:i.integrity,timeout:i.timeout})}let s=g(o).pipe(Vt(c=>this.handler.handle(c)));if(e instanceof Dt||i.observe==="events")return s;let a=s.pipe(De(c=>c instanceof cn));switch(i.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(I(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new y(2806,!1);return c.body}));case"blob":return a.pipe(I(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new y(2807,!1);return c.body}));case"text":return a.pipe(I(c=>{if(c.body!==null&&typeof c.body!="string")throw new y(2808,!1);return c.body}));default:return a.pipe(I(c=>c.body))}case"response":return a;default:throw new y(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Te().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,i={}){return this.request("PATCH",e,di(i,n))}post(e,n,i={}){return this.request("POST",e,di(i,n))}put(e,n,i={}){return this.request("PUT",e,di(i,n))}static \u0275fac=function(n){return new(n||t)(b(pi))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var fu=new p("",{factory:()=>!0}),mu="XSRF-TOKEN",pu=new p("",{factory:()=>mu}),gu="X-XSRF-TOKEN",bu=new p("",{factory:()=>gu}),vu=(()=>{class t{cookieName=l(pu);doc=l(w);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=nn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ms=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=b(vu),i},providedIn:"root"})}return t})();function yu(t,r){if(!l(fu)||t.method==="GET"||t.method==="HEAD")return r(t);try{let i=l(vt).href,{origin:o}=new URL(i),{origin:s}=new URL(t.url,o);if(o!==s)return r(t)}catch{return r(t)}let e=l(Ms).getToken(),n=l(bu);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),r(t)}var gi=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(gi||{});function _u(t,r){return{\u0275kind:t,\u0275providers:r}}function Du(...t){let r=[Ct,ur,{provide:pi,useExisting:ur},{provide:mi,useFactory:()=>l(uu,{optional:!0})??l(hi)},{provide:fi,useValue:yu,multi:!0}];for(let e of t)r.push(...e.\u0275providers);return Wt(r)}function Eu(t){return _u(gi.Interceptors,t.map(r=>({provide:fi,useValue:r,multi:!0})))}var Fs=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(b(w))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var bi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:function(n){let i=null;return n?i=new(n||t):i=b(Su),i},providedIn:"root"})}return t})(),Su=(()=>{class t extends bi{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case ie.NONE:return n;case ie.HTML:return ft(n,"HTML")?ht(n):Fo(this._doc,String(n)).toString();case ie.STYLE:return ft(n,"Style")?ht(n):n;case ie.SCRIPT:if(ft(n,"Script"))return ht(n);throw new y(5200,!1);case ie.URL:return ft(n,"URL")?ht(n):Mo(String(n));case ie.RESOURCE_URL:if(ft(n,"ResourceURL"))return ht(n);throw new y(5201,!1);default:throw new y(5202,!1)}}bypassSecurityTrustHtml(e){return Io(e)}bypassSecurityTrustStyle(e){return So(e)}bypassSecurityTrustScript(e){return Ao(e)}bypassSecurityTrustUrl(e){return Ro(e)}bypassSecurityTrustResourceUrl(e){return To(e)}static \u0275fac=function(n){return new(n||t)(b(w))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var v="primary",En=Symbol("RouteTitle"),Ei=class{params;constructor(r){this.params=r||{}}has(r){return Object.prototype.hasOwnProperty.call(this.params,r)}get(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e[0]:e}return null}getAll(r){if(this.has(r)){let e=this.params[r];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Qe(t){return new Ei(t)}function vi(t,r,e){for(let n=0;n<t.length;n++){let i=t[n],o=r[n];if(i[0]===":")e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function js(t,r,e){let n=e.path.split("/"),i=n.indexOf("**");if(i===-1){if(n.length>t.length||e.pathMatch==="full"&&(r.hasChildren()||n.length<t.length))return null;let c={},u=t.slice(0,n.length);return vi(n,u,c)?{consumed:u,posParams:c}:null}if(i!==n.lastIndexOf("**"))return null;let o=n.slice(0,i),s=n.slice(i+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&r.hasChildren()&&e.path!=="**")return null;let a={};return!vi(o,t.slice(0,o.length),a)||!vi(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function pr(t){return new Promise((r,e)=>{t.pipe(ke()).subscribe({next:n=>r(n),error:n=>e(n)})})}function Au(t,r){if(t.length!==r.length)return!1;for(let e=0;e<t.length;++e)if(!we(t[e],r[e]))return!1;return!0}function we(t,r){let e=t?wi(t):void 0,n=r?wi(r):void 0;if(!e||!n||e.length!=n.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!$s(t[i],r[i]))return!1;return!0}function wi(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function $s(t,r){if(Array.isArray(t)&&Array.isArray(r)){if(t.length!==r.length)return!1;let e=[...t].sort(),n=[...r].sort();return e.every((i,o)=>n[o]===i)}else return t===r}function Ru(t){return t.length>0?t[t.length-1]:null}function nt(t){return Wr(t)?t:Jr(t)?ue(Promise.resolve(t)):g(t)}function zs(t){return Wr(t)?pr(t):Promise.resolve(t)}var Tu={exact:Gs,subset:Ws},Hs={exact:Mu,subset:Fu,ignored:()=>!0},Vs={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ci={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Os(t,r,e){return Tu[e.paths](t.root,r.root,e.matrixParams)&&Hs[e.queryParams](t.queryParams,r.queryParams)&&!(e.fragment==="exact"&&t.fragment!==r.fragment)}function Mu(t,r){return we(t,r)}function Gs(t,r,e){if(!Je(t.segments,r.segments)||!hr(t.segments,r.segments,e)||t.numberOfChildren!==r.numberOfChildren)return!1;for(let n in r.children)if(!t.children[n]||!Gs(t.children[n],r.children[n],e))return!1;return!0}function Fu(t,r){return Object.keys(r).length<=Object.keys(t).length&&Object.keys(r).every(e=>$s(t[e],r[e]))}function Ws(t,r,e){return qs(t,r,r.segments,e)}function qs(t,r,e,n){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!Je(i,e)||r.hasChildren()||!hr(i,e,n))}else if(t.segments.length===e.length){if(!Je(t.segments,e)||!hr(t.segments,e,n))return!1;for(let i in r.children)if(!t.children[i]||!Ws(t.children[i],r.children[i],n))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Je(t.segments,i)||!hr(t.segments,i,n)||!t.children[v]?!1:qs(t.children[v],r,o,n)}}function hr(t,r,e){return r.every((n,i)=>Hs[e](t[i].parameters,n.parameters))}var se=class{root;queryParams;fragment;_queryParamMap;constructor(r=new C([],{}),e={},n=null){this.root=r,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Qe(this.queryParams),this._queryParamMap}toString(){return Nu.serialize(this)}},C=class{segments;children;parent=null;constructor(r,e){this.segments=r,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return fr(this)}},$e=class{path;parameters;_parameterMap;constructor(r,e){this.path=r,this.parameters=e}get parameterMap(){return this._parameterMap??=Qe(this.parameters),this._parameterMap}toString(){return Zs(this)}};function xu(t,r){return Je(t,r)&&t.every((e,n)=>we(e.parameters,r[n].parameters))}function Je(t,r){return t.length!==r.length?!1:t.every((e,n)=>e.path===r[n].path)}function Ou(t,r){let e=[];return Object.entries(t.children).forEach(([n,i])=>{n===v&&(e=e.concat(r(i,n)))}),Object.entries(t.children).forEach(([n,i])=>{n!==v&&(e=e.concat(r(i,n)))}),e}var Ot=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>new ze,providedIn:"root"})}return t})(),ze=class{parse(r){let e=new Si(r);return new se(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(r){let e=`/${un(r.root,!0)}`,n=ku(r.queryParams),i=typeof r.fragment=="string"?`#${Lu(r.fragment)}`:"";return`${e}${n}${i}`}},Nu=new ze;function fr(t){return t.segments.map(r=>Zs(r)).join("/")}function un(t,r){if(!t.hasChildren())return fr(t);if(r){let e=t.children[v]?un(t.children[v],!1):"",n=[];return Object.entries(t.children).forEach(([i,o])=>{i!==v&&n.push(`${i}:${un(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=Ou(t,(n,i)=>i===v?[un(t.children[v],!1)]:[`${i}:${un(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[v]!=null?`${fr(t)}/${e[0]}`:`${fr(t)}/(${e.join("//")})`}}function Ks(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function lr(t){return Ks(t).replace(/%3B/gi,";")}function Lu(t){return encodeURI(t)}function Ii(t){return Ks(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function mr(t){return decodeURIComponent(t)}function Ns(t){return mr(t.replace(/\+/g,"%20"))}function Zs(t){return`${Ii(t.path)}${Pu(t.parameters)}`}function Pu(t){return Object.entries(t).map(([r,e])=>`;${Ii(r)}=${Ii(e)}`).join("")}function ku(t){let r=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(i=>`${lr(e)}=${lr(i)}`).join("&"):`${lr(e)}=${lr(n)}`).filter(e=>e);return r.length?`?${r.join("&")}`:""}var Uu=/^[^\/()?;#]+/;function yi(t){let r=t.match(Uu);return r?r[0]:""}var Bu=/^[^\/()?;=#]+/;function ju(t){let r=t.match(Bu);return r?r[0]:""}var $u=/^[^=?&#]+/;function zu(t){let r=t.match($u);return r?r[0]:""}var Hu=/^[^&#]+/;function Vu(t){let r=t.match(Hu);return r?r[0]:""}var Si=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new C([],{}):new C([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional("?"))do this.parseQueryParam(r);while(this.consumeOptional("&"));return r}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(r=0){if(r>50)throw new y(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,r));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1,r)),(e.length>0||Object.keys(n).length>0)&&(i[v]=new C(e,n)),i}parseSegment(){let r=yi(this.remaining);if(r===""&&this.peekStartsWith(";"))throw new y(4009,!1);return this.capture(r),new $e(mr(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(";");)this.parseParam(r);return r}parseParam(r){let e=ju(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let i=yi(this.remaining);i&&(n=i,this.capture(n))}r[mr(e)]=mr(n)}parseQueryParam(r){let e=zu(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let s=Vu(this.remaining);s&&(n=s,this.capture(n))}let i=Ns(e),o=Ns(n);if(r.hasOwnProperty(i)){let s=r[i];Array.isArray(s)||(s=[s],r[i]=s),s.push(o)}else r[i]=o}parseParens(r,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=yi(this.remaining),o=this.remaining[i.length];if(o!=="/"&&o!==")"&&o!==";")throw new y(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):r&&(s=v);let a=this.parseChildren(e+1);n[s??v]=Object.keys(a).length===1&&a[v]?a[v]:new C([],a),this.consumeOptional("//")}return n}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new y(4011,!1)}};function Ys(t){return t.segments.length>0?new C([],{[v]:t}):t}function Xs(t){let r={};for(let[n,i]of Object.entries(t.children)){let o=Xs(i);if(n===v&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))r[s]=a;else(o.segments.length>0||o.hasChildren())&&(r[n]=o)}let e=new C(t.segments,r);return Gu(e)}function Gu(t){if(t.numberOfChildren===1&&t.children[v]){let r=t.children[v];return new C(t.segments.concat(r.segments),r.children)}return t}function He(t){return t instanceof se}function Js(t,r,e=null,n=null,i=new ze){let o=Qs(t);return ea(o,r,e,n,i)}function Qs(t){let r;function e(o){let s={};for(let c of o.children){let u=e(c);s[c.outlet]=u}let a=new C(o.url,s);return o===t&&(r=a),a}let n=e(t.root),i=Ys(n);return r??i}function ea(t,r,e,n,i){let o=t;for(;o.parent;)o=o.parent;if(r.length===0)return _i(o,o,o,e,n,i);let s=Wu(r);if(s.toRoot())return _i(o,o,new C([],{}),e,n,i);let a=qu(s,o,t),c=a.processChildren?dn(a.segmentGroup,a.index,s.commands):na(a.segmentGroup,a.index,s.commands);return _i(o,a.segmentGroup,c,e,n,i)}function gr(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function mn(t){return typeof t=="object"&&t!=null&&t.outlets}function Ls(t,r,e){t||="\u0275";let n=new se;return n.queryParams={[t]:r},e.parse(e.serialize(n)).queryParams[t]}function _i(t,r,e,n,i,o){let s={};for(let[u,d]of Object.entries(n??{}))s[u]=Array.isArray(d)?d.map(f=>Ls(u,f,o)):Ls(u,d,o);let a;t===r?a=e:a=ta(t,r,e);let c=Ys(Xs(a));return new se(c,s,i)}function ta(t,r,e){let n={};return Object.entries(t.children).forEach(([i,o])=>{o===r?n[i]=e:n[i]=ta(o,r,e)}),new C(t.segments,n)}var br=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,e,n){if(this.isAbsolute=r,this.numberOfDoubleDots=e,this.commands=n,r&&n.length>0&&gr(n[0]))throw new y(4003,!1);let i=n.find(mn);if(i&&i!==Ru(n))throw new y(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function Wu(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new br(!0,0,t);let r=0,e=!1,n=t.reduce((i,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([c,u])=>{a[c]=typeof u=="string"?u.split("/"):u}),[...i,{outlets:a}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!="string"?[...i,o]:s===0?(o.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?e=!0:a===".."?r++:a!=""&&i.push(a))}),i):[...i,o]},[]);return new br(e,r,n)}var St=class{segmentGroup;processChildren;index;constructor(r,e,n){this.segmentGroup=r,this.processChildren=e,this.index=n}};function qu(t,r,e){if(t.isAbsolute)return new St(r,!0,0);if(!e)return new St(r,!1,NaN);if(e.parent===null)return new St(e,!0,0);let n=gr(t.commands[0])?0:1,i=e.segments.length-1+n;return Ku(e,i,t.numberOfDoubleDots)}function Ku(t,r,e){let n=t,i=r,o=e;for(;o>i;){if(o-=i,n=n.parent,!n)throw new y(4005,!1);i=n.segments.length}return new St(n,!1,i-o)}function Zu(t){return mn(t[0])?t[0].outlets:{[v]:t}}function na(t,r,e){if(t??=new C([],{}),t.segments.length===0&&t.hasChildren())return dn(t,r,e);let n=Yu(t,r,e),i=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new C(t.segments.slice(0,n.pathIndex),{});return o.children[v]=new C(t.segments.slice(n.pathIndex),t.children),dn(o,0,i)}else return n.match&&i.length===0?new C(t.segments,{}):n.match&&!t.hasChildren()?Ai(t,r,e):n.match?dn(t,0,i):Ai(t,r,e)}function dn(t,r,e){if(e.length===0)return new C(t.segments,{});{let n=Zu(e),i={};if(Object.keys(n).some(o=>o!==v)&&t.children[v]&&t.numberOfChildren===1&&t.children[v].segments.length===0){let o=dn(t.children[v],r,e);return new C(t.segments,o.children)}return Object.entries(n).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(i[o]=na(t.children[o],r,s))}),Object.entries(t.children).forEach(([o,s])=>{n[o]===void 0&&(i[o]=s)}),new C(t.segments,i)}}function Yu(t,r,e){let n=0,i=r,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(n>=e.length)return o;let s=t.segments[i],a=e[n];if(mn(a))break;let c=`${a}`,u=n<e.length-1?e[n+1]:null;if(i>0&&c===void 0)break;if(c&&u&&typeof u=="object"&&u.outlets===void 0){if(!ks(c,u,s))return o;n+=2}else{if(!ks(c,{},s))return o;n++}i++}return{match:!0,pathIndex:i,commandIndex:n}}function Ai(t,r,e){let n=t.segments.slice(0,r),i=0;for(;i<e.length;){let o=e[i];if(mn(o)){let c=Xu(o.outlets);return new C(n,c)}if(i===0&&gr(e[0])){let c=t.segments[r];n.push(new $e(c.path,Ps(e[0]))),i++;continue}let s=mn(o)?o.outlets[v]:`${o}`,a=i<e.length-1?e[i+1]:null;s&&a&&gr(a)?(n.push(new $e(s,Ps(a))),i+=2):(n.push(new $e(s,{})),i++)}return new C(n,{})}function Xu(t){let r={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(r[e]=Ai(new C([],{}),0,n))}),r}function Ps(t){let r={};return Object.entries(t).forEach(([e,n])=>r[e]=`${n}`),r}function ks(t,r,e){return t==e.path&&we(r,e.parameters)}var hn="imperative",j=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(j||{}),ae=class{id;url;constructor(r,e){this.id=r,this.url=e}},et=class extends ae{type=j.NavigationStart;navigationTrigger;restoredState;constructor(r,e,n="imperative",i=null){super(r,e),this.navigationTrigger=n,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ce=class extends ae{urlAfterRedirects;type=j.NavigationEnd;constructor(r,e,n){super(r,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},W=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(W||{}),pn=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(pn||{}),fe=class extends ae{reason;code;type=j.NavigationCancel;constructor(r,e,n,i){super(r,e),this.reason=n,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function ra(t){return t instanceof fe&&(t.code===W.Redirect||t.code===W.SupersededByNewNavigation)}var Fe=class extends ae{reason;code;type=j.NavigationSkipped;constructor(r,e,n,i){super(r,e),this.reason=n,this.code=i}},tt=class extends ae{error;target;type=j.NavigationError;constructor(r,e,n,i){super(r,e),this.error=n,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},gn=class extends ae{urlAfterRedirects;state;type=j.RoutesRecognized;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},vr=class extends ae{urlAfterRedirects;state;type=j.GuardsCheckStart;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},yr=class extends ae{urlAfterRedirects;state;shouldActivate;type=j.GuardsCheckEnd;constructor(r,e,n,i,o){super(r,e),this.urlAfterRedirects=n,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},_r=class extends ae{urlAfterRedirects;state;type=j.ResolveStart;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Dr=class extends ae{urlAfterRedirects;state;type=j.ResolveEnd;constructor(r,e,n,i){super(r,e),this.urlAfterRedirects=n,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Er=class{route;type=j.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},wr=class{route;type=j.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Cr=class{snapshot;type=j.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ir=class{snapshot;type=j.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Sr=class{snapshot;type=j.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ar=class{snapshot;type=j.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Rt=class{},bn=class{},Tt=class{url;navigationBehaviorOptions;constructor(r,e){this.url=r,this.navigationBehaviorOptions=e}};function Ju(t){return!(t instanceof Rt)&&!(t instanceof Tt)&&!(t instanceof bn)}var Rr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new Nt(this.rootInjector)}},Nt=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let i=this.getOrCreateContext(e);i.outlet=n,this.contexts.set(e,i)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Rr(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(b(ne))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Tr=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let e=this.pathFromRoot(r);return e.length>1?e[e.length-2]:null}children(r){let e=Ri(r,this._root);return e?e.children.map(n=>n.value):[]}firstChild(r){let e=Ri(r,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(r){let e=Ti(r,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==r)}pathFromRoot(r){return Ti(r,this._root).map(e=>e.value)}};function Ri(t,r){if(t===r.value)return r;for(let e of r.children){let n=Ri(t,e);if(n)return n}return null}function Ti(t,r){if(t===r.value)return[r];for(let e of r.children){let n=Ti(t,e);if(n.length)return n.unshift(r),n}return[]}var oe=class{value;children;constructor(r,e){this.value=r,this.children=e}toString(){return`TreeNode(${this.value})`}};function It(t){let r={};return t&&t.children.forEach(e=>r[e.value.outlet]=e),r}var vn=class extends Tr{snapshot;constructor(r,e){super(r),this.snapshot=e,Ui(this,r)}toString(){return this.snapshot.toString()}};function ia(t,r){let e=Qu(t,r),n=new Z([new $e("",{})]),i=new Z({}),o=new Z({}),s=new Z({}),a=new Z(""),c=new xe(n,i,s,a,o,v,t,e.root);return c.snapshot=e.root,new vn(new oe(c,[]),e)}function Qu(t,r){let e={},n={},i={},s=new Mt([],e,i,"",n,v,t,null,{},r);return new yn("",new oe(s,[]))}var xe=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(r,e,n,i,o,s,a,c){this.urlSubject=r,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=i,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(I(u=>u[En]))??g(void 0),this.url=r,this.params=e,this.queryParams=n,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(I(r=>Qe(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(I(r=>Qe(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function ki(t,r,e="emptyOnly"){let n,{routeConfig:i}=t;return r!==null&&(e==="always"||i?.path===""||!r.component&&!r.routeConfig?.loadComponent)?n={params:h(h({},r.params),t.params),data:h(h({},r.data),t.data),resolve:h(h(h(h({},t.data),r.data),i?.data),t._resolvedData)}:n={params:h({},t.params),data:h({},t.data),resolve:h(h({},t.data),t._resolvedData??{})},i&&sa(i)&&(n.resolve[En]=i.title),n}var Mt=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[En]}constructor(r,e,n,i,o,s,a,c,u,d){this.url=r,this.params=e,this.queryParams=n,this.fragment=i,this.data=o,this.outlet=s,this.component=a,this.routeConfig=c,this._resolve=u,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Qe(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Qe(this.queryParams),this._queryParamMap}toString(){let r=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${r}', path:'${e}')`}},yn=class extends Tr{url;constructor(r,e){super(e),this.url=r,Ui(this,e)}toString(){return oa(this._root)}};function Ui(t,r){r.value._routerState=t,r.children.forEach(e=>Ui(t,e))}function oa(t){let r=t.children.length>0?` { ${t.children.map(oa).join(", ")} } `:"";return`${t.value}${r}`}function Di(t){if(t.snapshot){let r=t.snapshot,e=t._futureSnapshot;t.snapshot=e,we(r.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),r.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),we(r.params,e.params)||t.paramsSubject.next(e.params),Au(r.url,e.url)||t.urlSubject.next(e.url),we(r.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Mi(t,r){let e=we(t.params,r.params)&&xu(t.url,r.url),n=!t.parent!=!r.parent;return e&&!n&&(!t.parent||Mi(t.parent,r.parent))}function sa(t){return typeof t.title=="string"||t.title===null}var aa=new p(""),Bi=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=v;activateEvents=new Ie;deactivateEvents=new Ie;attachEvents=new Ie;detachEvents=new Ie;routerOutletData=zo();parentContexts=l(Nt);location=l($n);changeDetector=l(qn);inputBinder=l(Or,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:i}=e.name;if(n)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new y(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new y(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new y(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new y(4013,!1);this._activatedRoute=e;let i=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Fi(e,a,i.injector,this.routerOutletData);this.activated=i.createComponent(s,{index:i.length,injector:c,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=J({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ke]})}return t})(),Fi=class{route;childContexts;parent;outletData;constructor(r,e,n,i){this.route=r,this.childContexts=e,this.parent=n,this.outletData=i}get(r,e){return r===xe?this.route:r===Nt?this.childContexts:r===aa?this.outletData:this.parent.get(r,e)}},Or=new p("");var ji=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,i){n&1&&ko(0,"router-outlet")},dependencies:[Bi],encapsulation:2})}return t})();function $i(t){let r=t.children&&t.children.map($i),e=r?q(h({},t),{children:r}):h({},t);return!e.component&&!e.loadComponent&&(r||e.loadChildren)&&e.outlet&&e.outlet!==v&&(e.component=ji),e}function el(t,r,e){let n=_n(t,r._root,e?e._root:void 0);return new vn(n,r)}function _n(t,r,e){if(e&&t.shouldReuseRoute(r.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=r.value;let i=tl(t,r,e);return new oe(n,i)}else{if(t.shouldAttach(r.value)){let o=t.retrieve(r.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=r.value,s.children=r.children.map(a=>_n(t,a)),s}}let n=nl(r.value),i=r.children.map(o=>_n(t,o));return new oe(n,i)}}function tl(t,r,e){return r.children.map(n=>{for(let i of e.children)if(t.shouldReuseRoute(n.value,i.value.snapshot))return _n(t,n,i);return _n(t,n)})}function nl(t){return new xe(new Z(t.url),new Z(t.params),new Z(t.queryParams),new Z(t.fragment),new Z(t.data),t.outlet,t.component,t)}var Ft=class{redirectTo;navigationBehaviorOptions;constructor(r,e){this.redirectTo=r,this.navigationBehaviorOptions=e}},ca="ngNavigationCancelingError";function Mr(t,r){let{redirectTo:e,navigationBehaviorOptions:n}=He(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,i=ua(!1,W.Redirect);return i.url=e,i.navigationBehaviorOptions=n,i}function ua(t,r){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[ca]=!0,e.cancellationCode=r,e}function rl(t){return la(t)&&He(t.url)}function la(t){return!!t&&t[ca]}var xi=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,e,n,i,o){this.routeReuseStrategy=r,this.futureState=e,this.currState=n,this.forwardEvent=i,this.inputBindingEnabled=o}activate(r){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,r),Di(this.futureState.root),this.activateChildRoutes(e,n,r)}deactivateChildRoutes(r,e,n){let i=It(e);r.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,i[s],n),delete i[s]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(r,e,n){let i=r.value,o=e?e.value:null;if(i===o)if(i.component){let s=n.getContext(i.outlet);s&&this.deactivateChildRoutes(r,e,s.children)}else this.deactivateChildRoutes(r,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(r,e){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,e):this.deactivateRouteAndOutlet(r,e)}detachAndStoreRouteSubtree(r,e){let n=e.getContext(r.value.outlet),i=n&&r.value.component?n.children:e,o=It(r);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);if(n&&n.outlet){let s=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(r.value.snapshot,{componentRef:s,route:r,contexts:a})}}deactivateRouteAndOutlet(r,e){let n=e.getContext(r.value.outlet),i=n&&r.value.component?n.children:e,o=It(r);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,i);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(r,e,n){let i=It(e);r.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],n),this.forwardEvent(new Ar(o.value.snapshot))}),r.children.length&&this.forwardEvent(new Ir(r.value.snapshot))}activateRoutes(r,e,n){let i=r.value,o=e?e.value:null;if(Di(i),i===o)if(i.component){let s=n.getOrCreateContext(i.outlet);this.activateChildRoutes(r,e,s.children)}else this.activateChildRoutes(r,e,n);else if(i.component){let s=n.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let a=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Di(a.route.value),this.activateChildRoutes(r,null,s.children)}else s.attachRef=null,s.route=i,s.outlet&&s.outlet.activateWith(i,s.injector),this.activateChildRoutes(r,null,s.children)}else this.activateChildRoutes(r,null,n)}},Fr=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}},At=class{component;route;constructor(r,e){this.component=r,this.route=e}};function il(t,r,e){let n=t._root,i=r?r._root:null;return ln(n,i,e,[n.value])}function ol(t){let r=t.routeConfig?t.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:t,guards:r}}function Lt(t,r){let e=Symbol(),n=r.get(t,e);return n===e?typeof t=="function"&&!bo(t)?t:r.get(t):n}function ln(t,r,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=It(r);return t.children.forEach(s=>{sl(s,o[s.value.outlet],e,n.concat([s.value]),i),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>fn(a,e.getContext(s),i)),i}function sl(t,r,e,n,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=r?r.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let c=al(s,o,o.routeConfig.runGuardsAndResolvers);c?i.canActivateChecks.push(new Fr(n)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?ln(t,r,a?a.children:null,n,i):ln(t,r,e,n,i),c&&a&&a.outlet&&a.outlet.isActivated&&i.canDeactivateChecks.push(new At(a.outlet.component,s))}else s&&fn(r,a,i),i.canActivateChecks.push(new Fr(n)),o.component?ln(t,null,a?a.children:null,n,i):ln(t,null,e,n,i);return i}function al(t,r,e){if(typeof e=="function")return Y(r._environmentInjector,()=>e(t,r));switch(e){case"pathParamsChange":return!Je(t.url,r.url);case"pathParamsOrQueryParamsChange":return!Je(t.url,r.url)||!we(t.queryParams,r.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Mi(t,r)||!we(t.queryParams,r.queryParams);default:return!Mi(t,r)}}function fn(t,r,e){let n=It(t),i=t.value;Object.entries(n).forEach(([o,s])=>{i.component?r?fn(s,r.children.getContext(o),e):fn(s,null,e):fn(s,r,e)}),i.component?r&&r.outlet&&r.outlet.isActivated?e.canDeactivateChecks.push(new At(r.outlet.component,i)):e.canDeactivateChecks.push(new At(null,i)):e.canDeactivateChecks.push(new At(null,i))}function wn(t){return typeof t=="function"}function cl(t){return typeof t=="boolean"}function ul(t){return t&&wn(t.canLoad)}function ll(t){return t&&wn(t.canActivate)}function dl(t){return t&&wn(t.canActivateChild)}function hl(t){return t&&wn(t.canDeactivate)}function fl(t){return t&&wn(t.canMatch)}function da(t){return t instanceof ao||t?.name==="EmptyError"}var dr=Symbol("INITIAL_VALUE");function xt(){return le(t=>co(t.map(r=>r.pipe(Pe(1),go(dr)))).pipe(I(r=>{for(let e of r)if(e!==!0){if(e===dr)return dr;if(e===!1||ml(e))return e}return!0}),De(r=>r!==dr),Pe(1)))}function ml(t){return He(t)||t instanceof Ft}function ha(t){return t.aborted?g(void 0).pipe(Pe(1)):new Nn(r=>{let e=()=>{r.next(),r.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function fa(t){return ut(ha(t))}function pl(t){return Ne(r=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:o}}=r;return o.length===0&&i.length===0?g(q(h({},r),{guardsResult:!0})):gl(o,e,n).pipe(Ne(s=>s&&cl(s)?bl(e,i,t):g(s)),I(s=>q(h({},r),{guardsResult:s})))})}function gl(t,r,e){return ue(t).pipe(Ne(n=>El(n.component,n.route,e,r)),ke(n=>n!==!0,!0))}function bl(t,r,e){return ue(r).pipe(Vt(n=>uo(yl(n.route.parent,e),vl(n.route,e),Dl(t,n.path),_l(t,n.route))),ke(n=>n!==!0,!0))}function vl(t,r){return t!==null&&r&&r(new Sr(t)),g(!0)}function yl(t,r){return t!==null&&r&&r(new Cr(t)),g(!0)}function _l(t,r){let e=r.routeConfig?r.routeConfig.canActivate:null;if(!e||e.length===0)return g(!0);let n=e.map(i=>Ln(()=>{let o=r._environmentInjector,s=Lt(i,o),a=ll(s)?s.canActivate(r,t):Y(o,()=>s(r,t));return nt(a).pipe(ke())}));return g(n).pipe(xt())}function Dl(t,r){let e=r[r.length-1],i=r.slice(0,r.length-1).reverse().map(o=>ol(o)).filter(o=>o!==null).map(o=>Ln(()=>{let s=o.guards.map(a=>{let c=o.node._environmentInjector,u=Lt(a,c),d=dl(u)?u.canActivateChild(e,t):Y(c,()=>u(e,t));return nt(d).pipe(ke())});return g(s).pipe(xt())}));return g(i).pipe(xt())}function El(t,r,e,n){let i=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!i||i.length===0)return g(!0);let o=i.map(s=>{let a=r._environmentInjector,c=Lt(s,a),u=hl(c)?c.canDeactivate(t,r,e,n):Y(a,()=>c(t,r,e,n));return nt(u).pipe(ke())});return g(o).pipe(xt())}function wl(t,r,e,n,i){let o=r.canLoad;if(o===void 0||o.length===0)return g(!0);let s=o.map(a=>{let c=Lt(a,t),u=ul(c)?c.canLoad(r,e):Y(t,()=>c(r,e)),d=nt(u);return i?d.pipe(fa(i)):d});return g(s).pipe(xt(),ma(n))}function ma(t){return so(O(r=>{if(typeof r!="boolean")throw Mr(t,r)}),I(r=>r===!0))}function Cl(t,r,e,n,i,o){let s=r.canMatch;if(!s||s.length===0)return g(!0);let a=s.map(c=>{let u=Lt(c,t),d=fl(u)?u.canMatch(r,e,i):Y(t,()=>u(r,e,i));return nt(d).pipe(fa(o))});return g(a).pipe(xt(),ma(n))}var Me=class t extends Error{segmentGroup;constructor(r){super(),this.segmentGroup=r||null,Object.setPrototypeOf(this,t.prototype)}},Dn=class t extends Error{urlTree;constructor(r){super(),this.urlTree=r,Object.setPrototypeOf(this,t.prototype)}};function Il(t){throw new y(4e3,!1)}function Sl(t){throw ua(!1,W.GuardRejected)}var Oi=class{urlSerializer;urlTree;constructor(r,e){this.urlSerializer=r,this.urlTree=e}async lineralizeSegments(r,e){let n=[],i=e.root;for(;;){if(n=n.concat(i.segments),i.numberOfChildren===0)return n;if(i.numberOfChildren>1||!i.children[v])throw Il(`${r.redirectTo}`);i=i.children[v]}}async applyRedirectCommands(r,e,n,i,o){let s=await Al(e,i,o);if(s instanceof se)throw new Dn(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),r,n);if(s[0]==="/")throw new Dn(a);return a}applyRedirectCreateUrlTree(r,e,n,i){let o=this.createSegmentGroup(r,e.root,n,i);return new se(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(r,e){let n={};return Object.entries(r).forEach(([i,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);n[i]=e[a]}else n[i]=o}),n}createSegmentGroup(r,e,n,i){let o=this.createSegments(r,e.segments,n,i),s={};return Object.entries(e.children).forEach(([a,c])=>{s[a]=this.createSegmentGroup(r,c,n,i)}),new C(o,s)}createSegments(r,e,n,i){return e.map(o=>o.path[0]===":"?this.findPosParam(r,o,i):this.findOrReturn(o,n))}findPosParam(r,e,n){let i=n[e.path.substring(1)];if(!i)throw new y(4001,!1);return i}findOrReturn(r,e){let n=0;for(let i of e){if(i.path===r.path)return e.splice(n),i;n++}return r}};function Al(t,r,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return pr(nt(Y(e,()=>n(r))))}function Rl(t,r){return t.providers&&!t._injector&&(t._injector=Yr(t.providers,r,`Route: ${t.path}`)),t._injector??r}function ye(t){return t.outlet||v}function Tl(t,r){let e=t.filter(n=>ye(n)===r);return e.push(...t.filter(n=>ye(n)!==r)),e}var Ni={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function pa(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function Ml(t,r,e,n,i,o,s){let a=ga(t,r,e);if(!a.matched)return g(a);let c=pa(o(a));return n=Rl(r,n),Cl(n,r,e,i,c,s).pipe(I(u=>u===!0?a:h({},Ni)))}function ga(t,r,e){if(r.path==="")return r.pathMatch==="full"&&(t.hasChildren()||e.length>0)?h({},Ni):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(r.matcher||js)(e,t,r);if(!i)return h({},Ni);let o={};Object.entries(i.posParams??{}).forEach(([a,c])=>{o[a]=c.path});let s=i.consumed.length>0?h(h({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:s,positionalParamSegments:i.posParams??{}}}function Us(t,r,e,n,i){return e.length>0&&Ol(t,e,n,i)?{segmentGroup:new C(r,xl(n,new C(e,t.children))),slicedSegments:[]}:e.length===0&&Nl(t,e,n)?{segmentGroup:new C(t.segments,Fl(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new C(t.segments,t.children),slicedSegments:e}}function Fl(t,r,e,n){let i={};for(let o of e)if(Nr(t,r,o)&&!n[ye(o)]){let s=new C([],{});i[ye(o)]=s}return h(h({},n),i)}function xl(t,r){let e={};e[v]=r;for(let n of t)if(n.path===""&&ye(n)!==v){let i=new C([],{});e[ye(n)]=i}return e}function Ol(t,r,e,n){return e.some(i=>!Nr(t,r,i)||!(ye(i)!==v)?!1:!(n!==void 0&&ye(i)===n))}function Nl(t,r,e){return e.some(n=>Nr(t,r,n))}function Nr(t,r,e){return(t.hasChildren()||r.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Ll(t,r,e){return r.length===0&&!t.children[e]}var Li=class{};async function Pl(t,r,e,n,i,o,s="emptyOnly",a){return new Pi(t,r,e,n,i,s,o,a).recognize()}var kl=31,Pi=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,e,n,i,o,s,a,c){this.injector=r,this.configLoader=e,this.rootComponentType=n,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new Oi(this.urlSerializer,this.urlTree)}noMatchError(r){return new y(4002,`'${r.segmentGroup}'`)}async recognize(){let r=Us(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(r),i=new oe(n,e),o=new yn("",i),s=Js(n,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}}async match(r){let e=new Mt([],Object.freeze({}),Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),v,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,r,v,e),rootSnapshot:e}}catch(n){if(n instanceof Dn)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Me?this.noMatchError(n):n}}async processSegmentGroup(r,e,n,i,o){if(n.segments.length===0&&n.hasChildren())return this.processChildren(r,e,n,o);let s=await this.processSegment(r,e,n,n.segments,i,!0,o);return s instanceof oe?[s]:[]}async processChildren(r,e,n,i){let o=[];for(let c of Object.keys(n.children))c==="primary"?o.unshift(c):o.push(c);let s=[];for(let c of o){let u=n.children[c],d=Tl(e,c),f=await this.processSegmentGroup(r,d,u,c,i);s.push(...f)}let a=ba(s);return Ul(a),a}async processSegment(r,e,n,i,o,s,a){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??r,e,c,n,i,o,s,a)}catch(u){if(u instanceof Me||da(u))continue;throw u}if(Ll(n,i,o))return new Li;throw new Me(n)}async processSegmentAgainstRoute(r,e,n,i,o,s,a,c){if(ye(n)!==s&&(s===v||!Nr(i,o,n)))throw new Me(i);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(r,i,n,o,s,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(r,i,e,n,o,s,c);throw new Me(i)}async expandSegmentAgainstRouteUsingRedirect(r,e,n,i,o,s,a){let{matched:c,parameters:u,consumedSegments:d,positionalParamSegments:f,remainingSegments:_}=ga(e,i,o);if(!c)throw new Me(e);typeof i.redirectTo=="string"&&i.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>kl&&(this.allowRedirects=!1));let P=this.createSnapshot(r,i,o,u,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let M=await this.applyRedirects.applyRedirectCommands(d,i.redirectTo,f,pa(P),r),F=await this.applyRedirects.lineralizeSegments(i,M);return this.processSegment(r,n,e,F.concat(_),s,!1,a)}createSnapshot(r,e,n,i,o){let s=new Mt(n,i,Object.freeze(h({},this.urlTree.queryParams)),this.urlTree.fragment,jl(e),ye(e),e.component??e._loadedComponent??null,e,$l(e),r),a=ki(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}async matchSegmentAgainstRoute(r,e,n,i,o,s){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=K=>this.createSnapshot(r,n,K.consumedSegments,K.parameters,s),c=await pr(Ml(e,n,i,r,this.urlSerializer,a,this.abortSignal));if(n.path==="**"&&(e.children={}),!c?.matched)throw new Me(e);r=n._injector??r;let{routes:u}=await this.getChildConfig(r,n,i),d=n._loadedInjector??r,{parameters:f,consumedSegments:_,remainingSegments:P}=c,M=this.createSnapshot(r,n,_,f,s),{segmentGroup:F,slicedSegments:D}=Us(e,_,P,u,o);if(D.length===0&&F.hasChildren()){let K=await this.processChildren(d,u,F,M);return new oe(M,K)}if(u.length===0&&D.length===0)return new oe(M,[]);let E=ye(n)===o,x=await this.processSegment(d,u,F,D,E?v:o,!0,M);return new oe(M,x instanceof oe?[x]:[])}async getChildConfig(r,e,n){if(e.children)return{routes:e.children,injector:r};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(r).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await pr(wl(r,e,n,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(r,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Sl(e)}return{routes:[],injector:r}}};function Ul(t){t.sort((r,e)=>r.value.outlet===v?-1:e.value.outlet===v?1:r.value.outlet.localeCompare(e.value.outlet))}function Bl(t){let r=t.value.routeConfig;return r&&r.path===""}function ba(t){let r=[],e=new Set;for(let n of t){if(!Bl(n)){r.push(n);continue}let i=r.find(o=>n.value.routeConfig===o.value.routeConfig);i!==void 0?(i.children.push(...n.children),e.add(i)):r.push(n)}for(let n of e){let i=ba(n.children);r.push(new oe(n.value,i))}return r.filter(n=>!e.has(n))}function jl(t){return t.data||{}}function $l(t){return t.resolve||{}}function zl(t,r,e,n,i,o,s){return Ne(async a=>{let{state:c,tree:u}=await Pl(t,r,e,n,a.extractedUrl,i,o,s);return q(h({},a),{targetSnapshot:c,urlAfterRedirects:u})})}function Hl(t){return Ne(r=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=r;if(!n.length)return g(r);let i=new Set(n.map(a=>a.route)),o=new Set;for(let a of i)if(!o.has(a))for(let c of va(a))o.add(c);let s=0;return ue(o).pipe(Vt(a=>i.has(a)?Vl(a,e,t):(a.data=ki(a,a.parent,t).resolve,g(void 0))),O(()=>s++),qr(1),Ne(a=>s===o.size?g(r):ce))})}function va(t){let r=t.children.map(e=>va(e)).flat();return[t,...r]}function Vl(t,r,e){let n=t.routeConfig,i=t._resolve;return n?.title!==void 0&&!sa(n)&&(i[En]=n.title),Ln(()=>(t.data=ki(t,t.parent,e).resolve,Gl(i,t,r).pipe(I(o=>(t._resolvedData=o,t.data=h(h({},t.data),o),null)))))}function Gl(t,r,e){let n=wi(t);if(n.length===0)return g({});let i={};return ue(n).pipe(Ne(o=>Wl(t[o],r,e).pipe(ke(),O(s=>{if(s instanceof Ft)throw Mr(new ze,s);i[o]=s}))),qr(1),I(()=>i),Le(o=>da(o)?ce:at(o)))}function Wl(t,r,e){let n=r._environmentInjector,i=Lt(t,n),o=i.resolve?i.resolve(r,e):Y(n,()=>i(r,e));return nt(o)}function Bs(t){return le(r=>{let e=t(r);return e?ue(e).pipe(I(()=>r)):g(r)})}var zi=(()=>{class t{buildTitle(e){let n,i=e.root;for(;i!==void 0;)n=this.getResolvedTitleForRoute(i)??n,i=i.children.find(o=>o.outlet===v);return n}getResolvedTitleForRoute(e){return e.data[En]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>l(ya),providedIn:"root"})}return t})(),ya=(()=>{class t extends zi{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(b(Fs))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pt=new p("",{factory:()=>({})}),Cn=new p(""),_a=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(Bo);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let o=await zs(Y(e,()=>n.loadComponent())),s=await wa(Ea(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=s,s}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,i),i}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let i=(async()=>{try{let o=await Da(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,i),i}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function Da(t,r,e,n){let i=await zs(Y(e,()=>t.loadChildren())),o=await wa(Ea(i)),s;o instanceof No||Array.isArray(o)?s=o:s=await r.compileModuleAsync(o),n&&n(t);let a,c,u=!1,d;return Array.isArray(s)?(c=s,u=!0):(a=s.create(e).injector,d=s,c=a.get(Cn,[],{optional:!0,self:!0}).flat()),{routes:c.map($i),injector:a,factory:d}}function ql(t){return t&&typeof t=="object"&&"default"in t}function Ea(t){return ql(t)?t.default:t}async function wa(t){return t}var Lr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>l(Kl),providedIn:"root"})}return t})(),Kl=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ca=new p("");var Zl=()=>{},Ia=new p(""),Sa=(()=>{class t{currentNavigation=T(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=T(null);events=new B;transitionAbortWithErrorSubject=new B;configLoader=l(_a);environmentInjector=l(ne);destroyRef=l(Pn);urlSerializer=l(Ot);rootContexts=l(Nt);location=l(_t);inputBindingEnabled=l(Or,{optional:!0})!==null;titleStrategy=l(zi);options=l(Pt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(Lr);createViewTransition=l(Ca,{optional:!0});navigationErrorHandler=l(Ia,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>g(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new Er(i)),n=i=>this.events.next(new wr(i));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;N(()=>{this.transitions?.next(q(h({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Z(null),this.transitions.pipe(De(n=>n!==null),le(n=>{let i=!1,o=new AbortController,s=()=>!i&&this.currentTransition?.id===n.id;return g(n).pipe(le(a=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",W.SupersededByNewNavigation),ce;this.currentTransition=n;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:c?q(h({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let u=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!u&&d!=="reload")return this.events.next(new Fe(a.id,this.urlSerializer.serialize(a.rawUrl),"",pn.IgnoredSameUrlNavigation)),a.resolve(!1),ce;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return g(a).pipe(le(f=>(this.events.next(new et(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?ce:Promise.resolve(f))),zl(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),O(f=>{n.targetSnapshot=f.targetSnapshot,n.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(_=>(_.finalUrl=f.urlAfterRedirects,_)),this.events.next(new bn)}),le(f=>ue(n.routesRecognizeHandler.deferredHandle??g(void 0)).pipe(I(()=>f))),O(()=>{let f=new gn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:f,extractedUrl:_,source:P,restoredState:M,extras:F}=a,D=new et(f,this.urlSerializer.serialize(_),P,M);this.events.next(D);let E=ia(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=q(h({},a),{targetSnapshot:E,urlAfterRedirects:_,extras:q(h({},F),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(x=>(x.finalUrl=_,x)),g(n)}else return this.events.next(new Fe(a.id,this.urlSerializer.serialize(a.extractedUrl),"",pn.IgnoredByUrlHandlingStrategy)),a.resolve(!1),ce}),I(a=>{let c=new vr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(c),this.currentTransition=n=q(h({},a),{guards:il(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),n}),pl(a=>this.events.next(a)),le(a=>{if(n.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw Mr(this.urlSerializer,a.guardsResult);let c=new yr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(c),!s())return ce;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",W.GuardRejected),ce;if(a.guards.canActivateChecks.length===0)return g(a);let u=new _r(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(u),!s())return ce;let d=!1;return g(a).pipe(Hl(this.paramsInheritanceStrategy),O({next:()=>{d=!0;let f=new Dr(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(f)},complete:()=>{d||this.cancelNavigationTransition(a,"",W.NoDataFromResolver)}}))}),Bs(a=>{let c=d=>{let f=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let _=d._environmentInjector;f.push(this.configLoader.loadComponent(_,d.routeConfig).then(P=>{d.component=P}))}for(let _ of d.children)f.push(...c(_));return f},u=c(a.targetSnapshot.root);return u.length===0?g(a):ue(Promise.all(u).then(()=>a))}),Bs(()=>this.afterPreactivation()),le(()=>{let{currentSnapshot:a,targetSnapshot:c}=n,u=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return u?ue(u).pipe(I(()=>n)):g(n)}),Pe(1),le(a=>{let c=el(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=n=a=q(h({},a),{targetRouterState:c}),this.currentNavigation.update(d=>(d.targetRouterState=c,d)),this.events.next(new Rt);let u=n.beforeActivateHandler.deferredHandle;return u?ue(u.then(()=>a)):g(a)}),O(a=>{new xi(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),s()&&(i=!0,this.currentNavigation.update(c=>(c.abort=Zl,c)),this.lastSuccessfulNavigation.set(N(this.currentNavigation)),this.events.next(new Ce(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),ut(ha(o.signal).pipe(De(()=>!i&&!n.targetRouterState),O(()=>{this.cancelNavigationTransition(n,o.signal.reason+"",W.Aborted)}))),O({complete:()=>{i=!0}}),ut(this.transitionAbortWithErrorSubject.pipe(O(a=>{throw a}))),ct(()=>{o.abort(),i||this.cancelNavigationTransition(n,"",W.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Le(a=>{if(i=!0,this.destroyed)return n.resolve(!1),ce;if(la(a))this.events.next(new fe(n.id,this.urlSerializer.serialize(n.extractedUrl),a.message,a.cancellationCode)),rl(a)?this.events.next(new Tt(a.url,a.navigationBehaviorOptions)):n.resolve(!1);else{let c=new tt(n.id,this.urlSerializer.serialize(n.extractedUrl),a,n.targetSnapshot??void 0);try{let u=Y(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(u instanceof Ft){let{message:d,cancellationCode:f}=Mr(this.urlSerializer,u);this.events.next(new fe(n.id,this.urlSerializer.serialize(n.extractedUrl),d,f)),this.events.next(new Tt(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(c),a}catch(u){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(u)}}return ce}))}))}cancelNavigationTransition(e,n,i){let o=new fe(e.id,this.urlSerializer.serialize(e.extractedUrl),n,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=N(this.currentNavigation),i=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==i?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Yl(t){return t!==hn}var Aa=new p("");var Ra=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>l(Xl),providedIn:"root"})}return t})(),xr=class{shouldDetach(r){return!1}store(r,e){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,e){return r.routeConfig===e.routeConfig}shouldDestroyInjector(r){return!0}},Xl=(()=>{class t extends xr{static \u0275fac=(()=>{let e;return function(i){return(e||(e=kn(t)))(i||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pr=(()=>{class t{urlSerializer=l(Ot);options=l(Pt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(_t);urlHandlingStrategy=l(Lr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new se;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,s=i??o;return s instanceof se?this.urlSerializer.serialize(s):s}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:i}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,i),this.routerState=e):this.rawUrlTree=i}routerState=ia(null,l(ne));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>l(Jl),providedIn:"root"})}return t})(),Jl=(()=>{class t extends Pr{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof et?this.updateStateMemento():e instanceof Fe?this.commitTransition(n):e instanceof gn?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Rt?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof fe&&!ra(e)?this.restoreHistory(n):e instanceof tt?this.restoreHistory(n,!0):e instanceof Ce&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:i,id:o}=n,{replaceUrl:s,state:a}=i;if(this.location.isCurrentPathEqualTo(e)||s){let c=this.browserPageId,u=h(h({},a),this.generateNgRouterState(o,c,n));this.location.replaceState(e,"",u)}else{let c=h(h({},a),this.generateNgRouterState(o,this.browserPageId+1,n));this.location.go(e,"",c)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,i){return this.canceledNavigationResolution==="computed"?h({navigationId:e,\u0275routerPageId:n},this.routerUrlState(i)):h({navigationId:e},this.routerUrlState(i))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=kn(t)))(i||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Hi(t,r){t.events.pipe(De(e=>e instanceof Ce||e instanceof fe||e instanceof tt||e instanceof Fe),I(e=>e instanceof Ce||e instanceof Fe?0:(e instanceof fe?e.code===W.Redirect||e.code===W.SupersededByNewNavigation:!1)?2:1),De(e=>e!==2),Pe(1)).subscribe(()=>{r()})}var Ve=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(Xr);stateManager=l(Pr);options=l(Pt,{optional:!0})||{};pendingTasks=l(yo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Sa);urlSerializer=l(Ot);location=l(_t);urlHandlingStrategy=l(Lr);injector=l(ne);_events=new B;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Ra);injectorCleanup=l(Aa,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Cn,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Or,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new st;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let i=this.navigationTransitions.currentTransition,o=N(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof fe&&n.code!==W.Redirect&&n.code!==W.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Ce)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof Tt){let s=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,i.currentRawUrl),c=h({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Yl(i.source)},s);this.scheduleNavigation(a,hn,null,c,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Ju(n)&&this._events.next(n)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),hn,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,i,o)=>{this.navigateToSyncWithBrowser(e,i,n,o)})}navigateToSyncWithBrowser(e,n,i,o){let s=i?.navigationId?i:null,a=i?.\u0275routerUrl??e;if(i?.\u0275routerUrl&&(o=q(h({},o),{browserUrl:e})),i){let u=h({},i);delete u.navigationId,delete u.\u0275routerPageId,delete u.\u0275routerUrl,Object.keys(u).length!==0&&(o.state=u)}let c=this.parseUrl(a);this.scheduleNavigation(c,n,s,o).catch(u=>{this.disposed||this.injector.get(qt)(u)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return N(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map($i),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:i,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:c}=n,u=c?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=h(h({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let f;try{let _=i?i.snapshot:this.routerState.snapshot.root;f=Qs(_)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),f=this.currentUrlTree.root}return ea(f,e,d,u??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let i=He(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,hn,null,n)}navigate(e,n={skipLocationChange:!1}){return Ql(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Gt(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let i;if(n===!0?i=h({},Vs):n===!1?i=h({},Ci):i=h(h({},Ci),n),He(e))return Os(this.currentUrlTree,e,i);let o=this.parseUrl(e);return Os(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((n,[i,o])=>(o!=null&&(n[i]=o),n),{})}scheduleNavigation(e,n,i,o,s){if(this.disposed)return Promise.resolve(!1);let a,c,u;s?(a=s.resolve,c=s.reject,u=s.promise):u=new Promise((f,_)=>{a=f,c=_});let d=this.pendingTasks.add();return Hi(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:c,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Ql(t){for(let r=0;r<t.length;r++)if(t[r]==null)throw new y(4008,!1)}var nd=(()=>{class t{router=l(Ve);stateManager=l(Pr);fragment=T("");queryParams=T({});path=T("");serializer=l(Ot);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Ce&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new se(n)))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ta=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new Wn("href"),{optional:!0});reactiveHref=$o(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return N(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return N(this._target)}_target=T(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return N(this._queryParams)}_queryParams=T(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return N(this._fragment)}_fragment=T(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return N(this._queryParamsHandling)}_queryParamsHandling=T(void 0);set state(e){this._state.set(e)}get state(){return N(this._state)}_state=T(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return N(this._info)}_info=T(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return N(this._relativeTo)}_relativeTo=T(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return N(this._preserveFragment)}_preserveFragment=T(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return N(this._skipLocationChange)}_skipLocationChange=T(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return N(this._replaceUrl)}_replaceUrl=T(!1);isAnchorElement;onChanges=new B;applicationErrorHandler=l(qt);options=l(Pt,{optional:!0});reactiveRouterState=l(nd);constructor(e,n,i,o,s,a){this.router=e,this.route=n,this.tabIndexAttribute=i,this.renderer=o,this.el=s,this.locationStrategy=a;let c=s.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=T(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(He(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,i,o,s){let a=this._urlTree();if(a===null||this.isAnchorElement&&(e!==0||n||i||o||s||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,c)?.catch(u=>{this.applicationErrorHandler(u)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let i=this.renderer,o=this.el.nativeElement;n!==null?i.setAttribute(o,e,n):i.removeAttribute(o,e)}_urlTree=bt(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=i=>i==="preserve"||i==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let n=this.routerLinkInput();return n===null||!this.router.createUrlTree?null:He(n)?n:this.router.createUrlTree(n,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,n)=>this.computeHref(e)===this.computeHref(n)});get urlTree(){return N(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(n){return new(n||t)(ge(Ve),ge(xe),Kr("tabindex"),ge(Zt),ge(re),ge(yt))};static \u0275dir=J({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,i){n&1&&Uo("click",function(s){return i.onClick(s.button,s.ctrlKey,s.shiftKey,s.altKey,s.metaKey)}),n&2&&Ze("href",i.reactiveHref(),xo)("target",i._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",ee],skipLocationChange:[2,"skipLocationChange","skipLocationChange",ee],replaceUrl:[2,"replaceUrl","replaceUrl",ee],routerLink:"routerLink"},features:[Ke]})}return t})();var rd=new p("");function id(t,...r){return Wt([{provide:Cn,multi:!0,useValue:t},[],{provide:xe,useFactory:od},{provide:Po,multi:!0,useFactory:sd},r.map(e=>e.\u0275providers)])}function od(){return l(Ve).routerState.root}function sd(){let t=l(X);return r=>{let e=t.get(Yt);if(r!==e.components[0])return;let n=t.get(Ve),i=t.get(ad);t.get(cd)===1&&n.initialNavigation(),t.get(ud,null,{optional:!0})?.setUpPreloading(),t.get(rd,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var ad=new p("",{factory:()=>new B}),cd=new p("",{factory:()=>1});var ud=new p("");var Ma={production:!0,apiUrl:"http://localhost:5103/api",hubUrl:"http://localhost:5103/chatHub"};var Fa=class t{http=l(Ct);router=l(Ve);apiUrl=`${Ma.apiUrl}/auth`;currentUserSignal=T(this.getUserFromStorage());currentUser=bt(()=>this.currentUserSignal());isAuthenticated=bt(()=>!!this.currentUserSignal());constructor(){this.getToken()&&this.verifyToken().subscribe({error:()=>this.logout()})}register(r){return this.http.post(`${this.apiUrl}/register`,r)}login(r){return this.http.post(`${this.apiUrl}/login`,r).pipe(O(e=>{this.setSession(e)}))}logout(){return this.http.post(`${this.apiUrl}/logout`,{}).pipe(O(()=>this.clearSession()),Le(r=>(this.clearSession(),at(()=>r)))).subscribe()}verifyToken(){return this.http.get(`${this.apiUrl}/verify`).pipe(I(r=>{if(r.valid){let e={userId:r.userId,username:r.username,email:r.email};return this.currentUserSignal.set(e),sessionStorage.setItem("user",JSON.stringify(e)),!0}return!1}),Le(r=>((r.status===401||r.status===403)&&this.clearSession(),[!1])))}setSession(r){sessionStorage.setItem("chat_token",r.token),r.refreshToken&&sessionStorage.setItem("refresh_token",r.refreshToken);let e={userId:r.userId,username:r.username,email:r.email,profilePictureUrl:r.profilePictureUrl};this.currentUserSignal.set(e),sessionStorage.setItem("user",JSON.stringify(e))}clearSession(){sessionStorage.removeItem("chat_token"),sessionStorage.removeItem("refresh_token"),sessionStorage.removeItem("user"),this.currentUserSignal.set(null),this.router.navigate(["/auth/login"])}getToken(){return sessionStorage.getItem("chat_token")}getUserFromStorage(){let r=sessionStorage.getItem("user");return r?JSON.parse(r):null}updateCurrentUser(r){this.currentUserSignal.set(r),sessionStorage.setItem("user",JSON.stringify(r))}static \u0275fac=function(e){return new(e||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})};function In(t){return t.buttons===0||t.detail===0}function Sn(t){let r=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!r&&r.identifier===-1&&(r.radiusX==null||r.radiusX===1)&&(r.radiusY==null||r.radiusY===1)}var Vi;function xa(){if(Vi==null){let t=typeof document<"u"?document.head:null;Vi=!!(t&&(t.createShadowRoot||t.attachShadow))}return Vi}function Gi(t){if(xa()){let r=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&r instanceof ShadowRoot)return r}return null}function _e(t){return t.composedPath?t.composedPath()[0]:t.target}var Wi;try{Wi=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Wi=!1}var me=(()=>{class t{_platformId=l(lt);isBrowser=this._platformId?hs(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Wi)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var An;function Oa(){if(An==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>An=!0}))}finally{An=An||!1}return An}function kt(t){return Oa()?t:!!t.capture}function ld(t,r=0){return Na(t)?Number(t):arguments.length===2?r:0}function Na(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Ge(t){return t instanceof re?t.nativeElement:t}var La=new p("cdk-input-modality-detector-options"),Pa={ignoreKeys:[18,17,224,91,16]},ka=650,qi={passive:!0,capture:!0},Ua=(()=>{class t{_platform=l(me);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Z(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=_e(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<ka||(this._modality.next(In(e)?"keyboard":"mouse"),this._mostRecentTarget=_e(e))};_onTouchstart=e=>{if(Sn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=_e(e)};constructor(){let e=l(z),n=l(w),i=l(La,{optional:!0});if(this._options=h(h({},Pa),i),this.modalityDetected=this._modality.pipe(po(1)),this.modalityChanged=this.modalityDetected.pipe(fo()),this._platform.isBrowser){let o=l(pt).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,qi),o.listen(n,"mousedown",this._onMousedown,qi),o.listen(n,"touchstart",this._onTouchstart,qi)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rn=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Rn||{}),Ba=new p("cdk-focus-monitor-default-options"),kr=kt({passive:!0,capture:!0}),Ki=(()=>{class t{_ngZone=l(z);_platform=l(me);_inputModalityDetector=l(Ua);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(w);_stopInputModalityDetector=new B;constructor(){let e=l(Ba,{optional:!0});this._detectionMode=e?.detectionMode||Rn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=_e(e);for(let i=n;i;i=i.parentElement)e.type==="focus"?this._onFocus(e,i):this._onBlur(e,i)};monitor(e,n=!1){let i=Ge(e);if(!this._platform.isBrowser||i.nodeType!==1)return g();let o=Gi(i)||this._document,s=this._elementInfo.get(i);if(s)return n&&(s.checkChildren=!0),s.subject;let a={checkChildren:n,subject:new B,rootNode:o};return this._elementInfo.set(i,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let n=Ge(e),i=this._elementInfo.get(n);i&&(i.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(i))}focusVia(e,n,i){let o=Ge(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,c])=>this._originChanged(a,n,c)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(i))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Rn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===Rn.IMMEDIATE){clearTimeout(this._originTimeoutId);let i=this._originFromTouchInteraction?ka:1;this._originTimeoutId=setTimeout(()=>this._origin=null,i)}})}_onFocus(e,n){let i=this._elementInfo.get(n),o=_e(e);!i||!i.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),i)}_onBlur(e,n){let i=this._elementInfo.get(n);!i||i.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(i,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,i=this._rootNodeFocusListenerCount.get(n)||0;i||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,kr),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,kr)}),this._rootNodeFocusListenerCount.set(n,i+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ut(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let i=this._rootNodeFocusListenerCount.get(n);i>1?this._rootNodeFocusListenerCount.set(n,i-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,kr),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,kr),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,i){this._setClasses(e,n),this._emitOrigin(i,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((i,o)=>{(o===e||i.checkChildren&&o.contains(e))&&n.push([o,i])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:i}=this._inputModalityDetector;if(i!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ur=new WeakMap,rt=(()=>{class t{_appRef;_injector=l(X);_environmentInjector=l(ne);load(e){let n=this._appRef=this._appRef||this._injector.get(Yt),i=Ur.get(n);i||(i={loaders:new Set,refs:[]},Ur.set(n,i),n.onDestroy(()=>{Ur.get(n)?.refs.forEach(o=>o.destroy()),Ur.delete(n)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Go(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ja=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,i){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Br;function dd(){if(Br===void 0&&(Br=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Br=t.trustedTypes.createPolicy("angular#components",{createHTML:r=>r}))}return Br}function Ut(t){return dd()?.createHTML(t)||t}function Yg(t){return Array.isArray(t)?t:[t]}var $a=new Set,it,Zi=(()=>{class t{_platform=l(me);_nonce=l(dt,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):fd}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&hd(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function hd(t,r){if(!$a.has(t))try{it||(it=document.createElement("style"),r&&it.setAttribute("nonce",r),it.setAttribute("type","text/css"),document.head.appendChild(it)),it.sheet&&(it.sheet.insertRule(`@media ${t} {body{ }}`,0),$a.add(t))}catch(e){console.error(e)}}function fd(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var md=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var nb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=$({providers:[md]})}return t})();var Ha=(()=>{class t{_platform=l(me);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return gd(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=pd(Cd(e));if(n&&(za(n)===-1||!this.isVisible(n)))return!1;let i=e.nodeName.toLowerCase(),o=za(e);return e.hasAttribute("contenteditable")?o!==-1:i==="iframe"||i==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Ed(e)?!1:i==="audio"?e.hasAttribute("controls")?o!==-1:!1:i==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return wd(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function pd(t){try{return t.frameElement}catch{return null}}function gd(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function bd(t){let r=t.nodeName.toLowerCase();return r==="input"||r==="select"||r==="button"||r==="textarea"}function vd(t){return _d(t)&&t.type=="hidden"}function yd(t){return Dd(t)&&t.hasAttribute("href")}function _d(t){return t.nodeName.toLowerCase()=="input"}function Dd(t){return t.nodeName.toLowerCase()=="a"}function Va(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let r=t.getAttribute("tabindex");return!!(r&&!isNaN(parseInt(r,10)))}function za(t){if(!Va(t))return null;let r=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(r)?-1:r}function Ed(t){let r=t.nodeName.toLowerCase(),e=r==="input"&&t.type;return e==="text"||e==="password"||r==="select"||r==="textarea"}function wd(t){return vd(t)?!1:bd(t)||yd(t)||t.hasAttribute("contenteditable")||Va(t)}function Cd(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var jr=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(r){this._enabled=r,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_enabled=!0;constructor(r,e,n,i,o=!1,s){this._element=r,this._checker=e,this._ngZone=n,this._document=i,this._injector=s,o||this.attachAnchors()}destroy(){let r=this._startAnchor,e=this._endAnchor;r&&(r.removeEventListener("focus",this.startAnchorListener),r.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(r)))})}focusFirstTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(r)))})}focusLastTabbableElementWhenReady(r){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(r)))})}_getRegionBoundary(r){let e=this._element.querySelectorAll(`[cdk-focus-region-${r}], [cdkFocusRegion${r}], [cdk-focus-${r}]`);return r=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(r){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(r),!!n}return e.focus(r),!0}return this.focusFirstTabbableElement(r)}focusFirstTabbableElement(r){let e=this._getRegionBoundary("start");return e&&e.focus(r),!!e}focusLastTabbableElement(r){let e=this._getRegionBoundary("end");return e&&e.focus(r),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let n=0;n<e.length;n++){let i=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(i)return i}return null}_getLastTabbableElement(r){if(this._checker.isFocusable(r)&&this._checker.isTabbable(r))return r;let e=r.children;for(let n=e.length-1;n>=0;n--){let i=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(i)return i}return null}_createAnchor(){let r=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,r),r.classList.add("cdk-visually-hidden"),r.classList.add("cdk-focus-trap-anchor"),r.setAttribute("aria-hidden","true"),r}_toggleAnchorTabIndex(r,e){r?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(r){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(r,this._startAnchor),this._toggleAnchorTabIndex(r,this._endAnchor))}_executeOnStable(r){this._injector?jn(r,{injector:this._injector}):setTimeout(r)}},Id=(()=>{class t{_checker=l(Ha);_ngZone=l(z);_document=l(w);_injector=l(X);constructor(){l(rt).load(ja)}create(e,n=!1){return new jr(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Sd=200,$r=class{_letterKeyStream=new B;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new B;selectedItem=this._selectedItem;constructor(r,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:Sd;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(r),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(r){this._selectedItemIndex=r}setItems(r){this._items=r}handleKey(r){let e=r.keyCode;r.key&&r.key.length===1?this._letterKeyStream.next(r.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(r){this._letterKeyStream.pipe(O(e=>this._pressedLetters.push(e)),ho(r),De(()=>this._pressedLetters.length>0),I(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let i=(this._selectedItemIndex+n)%this._items.length,o=this._items[i];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function Ga(t,...r){return r.length?r.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var zr=class{_items;_activeItemIndex=T(-1);_activeItem=T(null);_wrap=!1;_typeaheadSubscription=st.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=r=>r.disabled;constructor(r,e){this._items=r,r instanceof Zr?this._itemChangesSubscription=r.changes.subscribe(n=>this._itemsChanged(n.toArray())):zn(r)&&(this._effectRef=Do(()=>this._itemsChanged(r()),{injector:e}))}tabOut=new B;change=new B;skipPredicate(r){return this._skipPredicateFn=r,this}withWrap(r=!0){return this._wrap=r,this}withVerticalOrientation(r=!0){return this._vertical=r,this}withHorizontalOrientation(r){return this._horizontal=r,this}withAllowedModifierKeys(r){return this._allowedModifierKeys=r,this}withTypeAhead(r=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new $r(e,{debounceInterval:typeof r=="number"?r:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(r=!0){return this._homeAndEnd=r,this}withPageUpDown(r=!0,e=10){return this._pageUpAndDown={enabled:r,delta:e},this}setActiveItem(r){let e=this._activeItem();this.updateActiveItem(r),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(r){let e=r.keyCode,i=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!r[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&i){this.setNextItemActive();break}else return;case 38:if(this._vertical&&i){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&i){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&i){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&i){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&i){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&i){let o=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(o<s?o:s-1,-1);break}else return;default:(i||Ga(r,"shiftKey"))&&this._typeahead?.handleKey(r);return}this._typeahead?.reset(),r.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(r){let e=this._getItemsArray(),n=typeof r=="number"?r:e.indexOf(r),i=e[n];this._activeItem.set(i??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(r){this._wrap?this._setActiveInWrapMode(r):this._setActiveInDefaultMode(r)}_setActiveInWrapMode(r){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let i=(this._activeItemIndex()+r*n+e.length)%e.length,o=e[i];if(!this._skipPredicateFn(o)){this.setActiveItem(i);return}}}_setActiveInDefaultMode(r){this._setActiveItemByIndex(this._activeItemIndex()+r,r)}_setActiveItemByIndex(r,e){let n=this._getItemsArray();if(n[r]){for(;this._skipPredicateFn(n[r]);)if(r+=e,!n[r])return;this.setActiveItem(r)}}_getItemsArray(){return zn(this._items)?this._items():this._items instanceof Zr?this._items.toArray():this._items}_itemsChanged(r){this._typeahead?.setItems(r);let e=this._activeItem();if(e){let n=r.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Yi=class extends zr{_origin="program";setFocusOrigin(r){return this._origin=r,this}setActiveItem(r){super.setActiveItem(r),this.activeItem&&this.activeItem.focus(this._origin)}};var Xi={},Ji=class t{_appId=l(Kt);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(r,e=!1){return this._appId!=="ng"&&(r+=this._appId),Xi.hasOwnProperty(r)||(Xi[r]=0),`${r}${e?t._infix+"-":""}${Xi[r]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})};var Tn=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(Tn||{}),Hr,ot;function iv(){if(ot==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return ot=!1,ot;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)ot=!0;else{let t=Element.prototype.scrollTo;t?ot=!/\{\s*\[native code\]\s*\}/.test(t.toString()):ot=!1}}return ot}function ov(){if(typeof document!="object"||!document)return Tn.NORMAL;if(Hr==null){let t=document.createElement("div"),r=t.style;t.dir="rtl",r.width="1px",r.overflow="auto",r.visibility="hidden",r.pointerEvents="none",r.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),Hr=Tn.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Hr=t.scrollLeft===0?Tn.NEGATED:Tn.INVERTED),t.remove()}return Hr}function av(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Bt,Wa=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function lv(){if(Bt)return Bt;if(typeof document!="object"||!document)return Bt=new Set(Wa),Bt;let t=document.createElement("input");return Bt=new Set(Wa.filter(r=>(t.setAttribute("type",r),t.type===r))),Bt}var Ad=new p("MATERIAL_ANIMATIONS"),qa=null;function Rd(){return l(Ad,{optional:!0})?.animationsDisabled||l(Co,{optional:!0})==="NoopAnimations"?"di-disabled":(qa??=l(Zi).matchMedia("(prefers-reduced-motion)").matches,qa?"reduced-motion":"enabled")}function jt(){return Rd()!=="enabled"}function Dv(t){return t==null?"":typeof t=="string"?t:`${t}px`}function wv(t){return t!=null&&`${t}`!="false"}var pe=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(pe||{}),Qi=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=pe.HIDDEN;constructor(r,e,n,i=!1){this._renderer=r,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=i}fadeOut(){this._renderer.fadeOutRipple(this)}},Ka=kt({passive:!0,capture:!0}),eo=class{_events=new Map;addHandler(r,e,n,i){let o=this._events.get(e);if(o){let s=o.get(n);s?s.add(i):o.set(n,new Set([i]))}else this._events.set(e,new Map([[n,new Set([i])]])),r.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Ka)})}removeHandler(r,e,n){let i=this._events.get(r);if(!i)return;let o=i.get(e);o&&(o.delete(n),o.size===0&&i.delete(e),i.size===0&&(this._events.delete(r),document.removeEventListener(r,this._delegateEventHandler,Ka)))}_delegateEventHandler=r=>{let e=_e(r);e&&this._events.get(r.type)?.forEach((n,i)=>{(i===e||i.contains(e))&&n.forEach(o=>o.handleEvent(r))})}},Mn={enterDuration:225,exitDuration:150},Td=800,Za=kt({passive:!0,capture:!0}),Ya=["mousedown","touchstart"],Xa=["mouseup","mouseleave","touchend","touchcancel"],Md=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,i){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Fn=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new eo;constructor(r,e,n,i,o){this._target=r,this._ngZone=e,this._platform=i,i.isBrowser&&(this._containerElement=Ge(n)),o&&o.get(rt).load(Md)}fadeInRipple(r,e,n={}){let i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=h(h({},Mn),n.animation);n.centered&&(r=i.left+i.width/2,e=i.top+i.height/2);let s=n.radius||Fd(r,e,i),a=r-i.left,c=e-i.top,u=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${c-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,n.color!=null&&(d.style.backgroundColor=n.color),d.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(d);let f=window.getComputedStyle(d),_=f.transitionProperty,P=f.transitionDuration,M=_==="none"||P==="0s"||P==="0s, 0s"||i.width===0&&i.height===0,F=new Qi(this,d,n,M);d.style.transform="scale3d(1, 1, 1)",F.state=pe.FADING_IN,n.persistent||(this._mostRecentTransientRipple=F);let D=null;return!M&&(u||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let E=()=>{D&&(D.fallbackTimer=null),clearTimeout(K),this._finishRippleTransition(F)},x=()=>this._destroyRipple(F),K=setTimeout(x,u+100);d.addEventListener("transitionend",E),d.addEventListener("transitioncancel",x),D={onTransitionEnd:E,onTransitionCancel:x,fallbackTimer:K}}),this._activeRipples.set(F,D),(M||!u)&&this._finishRippleTransition(F),F}fadeOutRipple(r){if(r.state===pe.FADING_OUT||r.state===pe.HIDDEN)return;let e=r.element,n=h(h({},Mn),r.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",r.state=pe.FADING_OUT,(r._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(r)}fadeOutAll(){this._getActiveRipples().forEach(r=>r.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(r=>{r.config.persistent||r.fadeOut()})}setupTriggerEvents(r){let e=Ge(r);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ya.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(r){r.type==="mousedown"?this._onMousedown(r):r.type==="touchstart"?this._onTouchStart(r):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Xa.forEach(e=>{this._triggerElement.addEventListener(e,this,Za)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(r){r.state===pe.FADING_IN?this._startFadeOutTransition(r):r.state===pe.FADING_OUT&&this._destroyRipple(r)}_startFadeOutTransition(r){let e=r===this._mostRecentTransientRipple,{persistent:n}=r.config;r.state=pe.VISIBLE,!n&&(!e||!this._isPointerDown)&&r.fadeOut()}_destroyRipple(r){let e=this._activeRipples.get(r)??null;this._activeRipples.delete(r),this._activeRipples.size||(this._containerRect=null),r===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),r.state=pe.HIDDEN,e!==null&&(r.element.removeEventListener("transitionend",e.onTransitionEnd),r.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),r.element.remove()}_onMousedown(r){let e=In(r),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Td;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(r.clientX,r.clientY,this._target.rippleConfig))}_onTouchStart(r){if(!this._target.rippleDisabled&&!Sn(r)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=r.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(r=>{let e=r.state===pe.VISIBLE||r.config.terminateOnPointerUp&&r.state===pe.FADING_IN;!r.config.persistent&&e&&r.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let r=this._triggerElement;r&&(Ya.forEach(e=>t._eventManager.removeHandler(e,r,this)),this._pointerUpEventsRegistered&&(Xa.forEach(e=>r.removeEventListener(e,this,Za)),this._pointerUpEventsRegistered=!1))}};function Fd(t,r,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),i=Math.max(Math.abs(r-e.top),Math.abs(r-e.bottom));return Math.sqrt(n*n+i*i)}var to=new p("mat-ripple-global-options"),kv=(()=>{class t{_elementRef=l(re);_animationsDisabled=jt();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=l(z),n=l(me),i=l(to,{optional:!0}),o=l(X);this._globalOptions=i||{},this._rippleRenderer=new Fn(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:h(h(h({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,i){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,h(h({},this.rippleConfig),i)):this._rippleRenderer.fadeInRipple(0,0,h(h({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=J({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,i){n&2&&be("mat-ripple-unbounded",i.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var xd={capture:!0},Od=["focus","mousedown","mouseenter","touchstart"],no="mat-ripple-loader-uninitialized",ro="mat-ripple-loader-class-name",Ja="mat-ripple-loader-centered",Vr="mat-ripple-loader-disabled",Qa=(()=>{class t{_document=l(w);_animationsDisabled=jt();_globalRippleOptions=l(to,{optional:!0});_platform=l(me);_ngZone=l(z);_injector=l(X);_eventCleanups;_hosts=new Map;constructor(){let e=l(pt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Od.map(n=>e.listen(this._document,n,this._onInteraction,xd)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(no,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(ro))&&e.setAttribute(ro,n.className||""),n.centered&&e.setAttribute(Ja,""),n.disabled&&e.setAttribute(Vr,"")}setDisabled(e,n){let i=this._hosts.get(e);i?(i.target.rippleDisabled=n,!n&&!i.hasSetUpEvents&&(i.hasSetUpEvents=!0,i.renderer.setupTriggerEvents(e))):n?e.setAttribute(Vr,""):e.removeAttribute(Vr)}_onInteraction=e=>{let n=_e(e);if(n instanceof HTMLElement){let i=n.closest(`[${no}="${this._globalRippleOptions?.namespace??""}"]`);i&&this._createRipple(i)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(ro)),e.append(n);let i=this._globalRippleOptions,o=this._animationsDisabled?0:i?.animation?.enterDuration??Mn.enterDuration,s=this._animationsDisabled?0:i?.animation?.exitDuration??Mn.exitDuration,a={rippleDisabled:this._animationsDisabled||i?.disabled||e.hasAttribute(Vr),rippleConfig:{centered:e.hasAttribute(Ja),terminateOnPointerUp:i?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},c=new Fn(a,this._ngZone,n,this._platform,this._injector),u=!a.rippleDisabled;u&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:u}),e.removeAttribute(no)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ec=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,i){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Nd=["mat-icon-button",""],Ld=["*"],Pd=new p("MAT_BUTTON_CONFIG");function tc(t){return t==null?void 0:Vo(t)}var xn=(()=>{class t{_elementRef=l(re);_ngZone=l(z);_animationsDisabled=jt();_config=l(Pd,{optional:!0});_focusMonitor=l(Ki);_cleanupClick;_renderer=l(Zt);_rippleLoader=l(Qa);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(rt).load(ec);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=J({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,i){n&2&&(Ze("disabled",i._getDisabledAttribute())("aria-disabled",i._getAriaDisabled())("tabindex",i._getTabIndex()),Gn(i.color?"mat-"+i.color:""),be("mat-mdc-button-disabled",i.disabled)("mat-mdc-button-disabled-interactive",i.disabledInteractive)("mat-unthemed",!i.color)("_mat-animation-noopable",i._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ee],disabled:[2,"disabled","disabled",ee],ariaDisabled:[2,"aria-disabled","ariaDisabled",ee],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ee],tabIndex:[2,"tabIndex","tabIndex",tc],_tabindex:[2,"tabindex","_tabindex",tc]}})}return t})(),kd=(()=>{class t extends xn{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[gt],attrs:Nd,ngContentSelectors:Ld,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(Ue(),Ee(0,"span",0),Q(1),Ee(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Ud=new p("cdk-dir-doc",{providedIn:"root",factory:()=>l(w)}),Bd=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function nc(t){let r=t?.toLowerCase()||"";return r==="auto"&&typeof navigator<"u"&&navigator?.language?Bd.test(navigator.language)?"rtl":"ltr":r==="rtl"?"rtl":"ltr"}var jd=(()=>{class t{get value(){return this.valueSignal()}valueSignal=T("ltr");change=new Ie;constructor(){let e=l(Ud,{optional:!0});if(e){let n=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(nc(n||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $t=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=$({})}return t})();var rc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=$({imports:[$t]})}return t})();var $d=["matButton",""],io=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],oo=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],zd=["mat-fab",""],Hd=["mat-mini-fab",""],Vd=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`,ic=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ey=(()=>{class t extends xn{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Gd(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,i=this._appearance?ic.get(this._appearance):null,o=ic.get(e);i&&n.remove(...i),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[gt],attrs:$d,ngContentSelectors:oo,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(Ue(io),Ee(0,"span",0),Q(1),Hn(2,"span",1),Q(3,1),Vn(),Q(4,2),Ee(5,"span",2)(6,"span",3)),n&2&&be("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Gd(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var oc=new p("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>On}),On={color:"accent"},wy=(()=>{class t extends xn{_options=l(oc,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||On,this.color=this._options.color||On.color}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(n,i){n&2&&be("mdc-fab--extended",i.extended)("mat-mdc-extended-fab",i.extended)},inputs:{extended:[2,"extended","extended",ee]},exportAs:["matButton","matAnchor"],features:[gt],attrs:zd,ngContentSelectors:oo,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(Ue(io),Ee(0,"span",0),Q(1),Hn(2,"span",1),Q(3,1),Vn(),Q(4,2),Ee(5,"span",2)(6,"span",3)),n&2&&be("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`],encapsulation:2,changeDetection:0})}return t})(),Cy=(()=>{class t extends xn{_options=l(oc,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||On,this.color=this._options.color||On.color}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[gt],attrs:Hd,ngContentSelectors:oo,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,i){n&1&&(Ue(io),Ee(0,"span",0),Q(1),Hn(2,"span",1),Q(3,1),Vn(),Q(4,2),Ee(5,"span",2)(6,"span",3)),n&2&&be("mdc-button__ripple",!i._isFab)("mdc-fab__ripple",i._isFab)},styles:[Vd],encapsulation:2,changeDetection:0})}return t})();var Iy=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=$({imports:[rc,$t]})}return t})();function sc(t){return Error(`Unable to find icon with the name "${t}"`)}function Wd(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function ac(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function cc(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Oe=class{url;svgText;options;svgElement=null;constructor(r,e,n){this.url=r,this.svgText=e,this.options=n}},lc=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,i,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=i}addSvgIcon(e,n,i){return this.addSvgIconInNamespace("",e,n,i)}addSvgIconLiteral(e,n,i){return this.addSvgIconLiteralInNamespace("",e,n,i)}addSvgIconInNamespace(e,n,i,o){return this._addSvgIconConfig(e,n,new Oe(i,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,i,o){let s=this._sanitizer.sanitize(ie.HTML,i);if(!s)throw cc(i);let a=Ut(s);return this._addSvgIconConfig(e,n,new Oe("",a,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,i){return this._addSvgIconSetConfig(e,new Oe(n,null,i))}addSvgIconSetLiteralInNamespace(e,n,i){let o=this._sanitizer.sanitize(ie.HTML,n);if(!o)throw cc(n);let s=Ut(o);return this._addSvgIconSetConfig(e,new Oe("",s,i))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(ie.RESOURCE_URL,e);if(!n)throw ac(e);let i=this._cachedIconsByUrl.get(n);return i?g(Gr(i)):this._loadSvgIconFromConfig(new Oe(e,null)).pipe(O(o=>this._cachedIconsByUrl.set(n,o)),I(o=>Gr(o)))}getNamedSvgIcon(e,n=""){let i=uc(n,e),o=this._svgIconConfigs.get(i);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(i,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(n);return s?this._getSvgFromIconSetConfigs(e,s):at(sc(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?g(Gr(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(I(n=>Gr(n)))}_getSvgFromIconSetConfigs(e,n){let i=this._extractIconWithNameFromAnySet(e,n);if(i)return g(i);let o=n.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(Le(a=>{let u=`Loading icon set URL: ${this._sanitizer.sanitize(ie.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(u)),g(null)})));return lo(o).pipe(I(()=>{let s=this._extractIconWithNameFromAnySet(e,n);if(!s)throw sc(e);return s}))}_extractIconWithNameFromAnySet(e,n){for(let i=n.length-1;i>=0;i--){let o=n[i];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(O(n=>e.svgText=n),I(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?g(null):this._fetchIcon(e).pipe(O(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,i){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,i);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),i);let a=this._svgElementFromString(Ut("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,i)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let i=n.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(e){let n=this._svgElementFromString(Ut("<svg></svg>")),i=e.attributes;for(let o=0;o<i.length;o++){let{name:s,value:a}=i[o];s!=="id"&&n.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:i}=e,o=i?.withCredentials??!1;if(!this._httpClient)throw Wd();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let s=this._sanitizer.sanitize(ie.RESOURCE_URL,n);if(!s)throw ac(n);let a=this._inProgressUrlFetches.get(s);if(a)return a;let c=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(I(u=>Ut(u)),ct(()=>this._inProgressUrlFetches.delete(s)),mo());return this._inProgressUrlFetches.set(s,c),c}_addSvgIconConfig(e,n,i){return this._svgIconConfigs.set(uc(e,n),i),this}_addSvgIconSetConfig(e,n){let i=this._iconSetConfigs.get(e);return i?i.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let i=0;i<this._resolvers.length;i++){let o=this._resolvers[i](n,e);if(o)return qd(o)?new Oe(o.url,null,o.options):new Oe(o,null)}}static \u0275fac=function(n){return new(n||t)(b(Ct,8),b(bi),b(w,8),b(qe))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Gr(t){return t.cloneNode(!0)}function uc(t,r){return t+":"+r}function qd(t){return!!(t.url&&t.options)}var Kd=["*"],Zd=new p("MAT_ICON_DEFAULT_OPTIONS"),Yd=new p("mat-icon-location",{providedIn:"root",factory:()=>{let t=l(w),r=t?t.location:null;return{getPathname:()=>r?r.pathname+r.search:""}}}),dc=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Xd=dc.map(t=>`[${t}]`).join(", "),Jd=/^url\(['"]?#(.*?)['"]?\)$/,Gy=(()=>{class t{_elementRef=l(re);_iconRegistry=l(lc);_location=l(Yd);_errorHandler=l(qe);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=st.EMPTY;constructor(){let e=l(new Wn("aria-hidden"),{optional:!0}),n=l(Zd,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let i=e.childNodes[n];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>e.classList.remove(i)),n.forEach(i=>e.classList.add(i)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((i,o)=>{i.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(Xd),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)dc.forEach(s=>{let a=n[o],c=a.getAttribute(s),u=c?c.match(Jd):null;if(u){let d=i.get(a);d||(d=[],i.set(a,d)),d.push({name:s,value:u[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,i]=this._splitIconName(e);n&&(this._svgNamespace=n),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,n).pipe(Pe(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${n}:${i}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=V({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,i){n&2&&(Ze("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),Gn(i.color?"mat-"+i.color:""),be("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ee],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Kd,decls:1,vars:0,template:function(n,i){n&1&&(Ue(),Q(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Wy=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=H({type:t});static \u0275inj=$({imports:[$t]})}return t})();export{Se as a,_t as b,Tc as c,xc as d,ds as e,li as f,Kc as g,Te as h,Ct as i,Du as j,Eu as k,bi as l,Bi as m,Ve as n,Ta as o,id as p,Ma as q,Fa as r,jd as s,$t as t,ld as u,Ge as v,Yg as w,Dv as x,wv as y,me as z,Tn as A,iv as B,ov as C,_e as D,av as E,lv as F,rt as G,In as H,Sn as I,Ki as J,nb as K,Ha as L,Id as M,Ga as N,Yi as O,Ji as P,Rd as Q,jt as R,kv as S,ec as T,kd as U,rc as V,Ey as W,wy as X,Cy as Y,Iy as Z,Gy as _,Wy as $};
