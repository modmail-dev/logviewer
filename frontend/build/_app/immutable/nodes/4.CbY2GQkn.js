var ds=Object.defineProperty;var or=a=>{throw TypeError(a)};var ls=(a,t,i)=>t in a?ds(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i;var ie=(a,t,i)=>ls(a,typeof t!="symbol"?t+"":t,i),nr=(a,t,i)=>t.has(a)||or("Cannot "+i);var j=(a,t,i)=>(nr(a,t,"read from private field"),i?i.call(a):t.get(a)),z=(a,t,i)=>t.has(a)?or("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,i),C=(a,t,i,e)=>(nr(a,t,"write to private field"),e?e.call(a,i):t.set(a,i),i);import{s as la,o as qe,i as ke,d as oe,t as pt,h as gt,l as Nt,n as ue,e as Ie,c as Ae,f as Ye,k as Et,_ as et,a as Ut,g as ca,q as cs,V as us,u as dr,P as hs,b as fs,j as ms}from"../chunks/scheduler.D6SdNXE8.js";import{S as ua,i as ha,g as Gt,t as De,c as Kt,a as Oe,b as lt,d as ct,m as ut,e as ht}from"../chunks/index.CzAgGwhY.js";import{e as sa,u as ps,o as gs}from"../chunks/each.CCekh_o_.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const aa=globalThis,Ka=aa.ShadowRoot&&(aa.ShadyCSS===void 0||aa.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ja=Symbol(),lr=new WeakMap;let Ar=class{constructor(t,i,e){if(this._$cssResult$=!0,e!==Ja)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(Ka&&t===void 0){const e=i!==void 0&&i.length===1;e&&(t=lr.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&lr.set(i,t))}return t}toString(){return this.cssText}};const _s=a=>new Ar(typeof a=="string"?a:a+"",void 0,Ja),me=(a,...t)=>{const i=a.length===1?a[0]:t.reduce((e,r,s)=>e+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[s+1],a[0]);return new Ar(i,a,Ja)},vs=(a,t)=>{if(Ka)a.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const e=document.createElement("style"),r=aa.litNonce;r!==void 0&&e.setAttribute("nonce",r),e.textContent=i.cssText,a.appendChild(e)}},cr=Ka?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return _s(i)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bs,defineProperty:ys,getOwnPropertyDescriptor:ws,getOwnPropertyNames:ks,getOwnPropertySymbols:xs,getPrototypeOf:$s}=Object,qt=globalThis,ur=qt.trustedTypes,Ts=ur?ur.emptyScript:"",Na=qt.reactiveElementPolyfillSupport,Vi=(a,t)=>a,oa={toAttribute(a,t){switch(t){case Boolean:a=a?Ts:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let i=a;switch(t){case Boolean:i=a!==null;break;case Number:i=a===null?null:Number(a);break;case Object:case Array:try{i=JSON.parse(a)}catch{i=null}}return i}},Xa=(a,t)=>!bs(a,t),hr={attribute:!0,type:String,converter:oa,reflect:!1,hasChanged:Xa};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),qt.litPropertyMetadata??(qt.litPropertyMetadata=new WeakMap);class gi extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=hr){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const e=Symbol(),r=this.getPropertyDescriptor(t,e,i);r!==void 0&&ys(this.prototype,t,r)}}static getPropertyDescriptor(t,i,e){const{get:r,set:s}=ws(this.prototype,t)??{get(){return this[i]},set(o){this[i]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){const d=r==null?void 0:r.call(this);s.call(this,o),this.requestUpdate(t,d,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??hr}static _$Ei(){if(this.hasOwnProperty(Vi("elementProperties")))return;const t=$s(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Vi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Vi("properties"))){const i=this.properties,e=[...ks(i),...xs(i)];for(const r of e)this.createProperty(r,i[r])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[e,r]of i)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[i,e]of this.elementProperties){const r=this._$Eu(i,e);r!==void 0&&this._$Eh.set(r,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const r of e)i.unshift(cr(r))}else t!==void 0&&i.push(cr(t));return i}static _$Eu(t,i){const e=i.attribute;return e===!1?void 0:typeof e=="string"?e:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const e of i.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vs(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var e;return(e=i.hostConnected)==null?void 0:e.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var e;return(e=i.hostDisconnected)==null?void 0:e.call(i)})}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EC(t,i){var s;const e=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,e);if(r!==void 0&&e.reflect===!0){const o=(((s=e.converter)==null?void 0:s.toAttribute)!==void 0?e.converter:oa).toAttribute(i,e.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=e.getPropertyOptions(r),d=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:oa;this._$Em=r,this[r]=d.fromAttribute(i,o.type),this._$Em=null}}requestUpdate(t,i,e){if(t!==void 0){if(e??(e=this.constructor.getPropertyOptions(t)),!(e.hasChanged??Xa)(this[t],i))return;this.P(t,i,e)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,e){this._$AL.has(t)||this._$AL.set(t,i),e.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$EO)==null||e.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(i)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(i)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(e=>{var r;return(r=e.hostUpdated)==null?void 0:r.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}gi.elementStyles=[],gi.shadowRootOptions={mode:"open"},gi[Vi("elementProperties")]=new Map,gi[Vi("finalized")]=new Map,Na==null||Na({ReactiveElement:gi}),(qt.reactiveElementVersions??(qt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ui=globalThis,na=Ui.trustedTypes,fr=na?na.createPolicy("lit-html",{createHTML:a=>a}):void 0,Rr="$lit$",Qt=`lit$${Math.random().toFixed(9).slice(2)}$`,Br="?"+Qt,js=`<${Br}>`,ni=document,Zi=()=>ni.createComment(""),Yi=a=>a===null||typeof a!="object"&&typeof a!="function",er=Array.isArray,zs=a=>er(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",Pa=`[ 	
\f\r]`,Di=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mr=/-->/g,pr=/>/g,Xt=RegExp(`>|${Pa}(?:([^\\s"'>=/]+)(${Pa}*=${Pa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gr=/'/g,_r=/"/g,Vr=/^(?:script|style|textarea|title)$/i,Ur=a=>(t,...i)=>({_$litType$:a,strings:t,values:i}),D=Ur(1),xe=Ur(2),Wt=Symbol.for("lit-noChange"),Ue=Symbol.for("lit-nothing"),vr=new WeakMap,oi=ni.createTreeWalker(ni,129);function Hr(a,t){if(!er(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return fr!==void 0?fr.createHTML(t):t}const Cs=(a,t)=>{const i=a.length-1,e=[];let r,s=t===2?"<svg>":t===3?"<math>":"",o=Di;for(let d=0;d<i;d++){const l=a[d];let h,c,n=-1,_=0;for(;_<l.length&&(o.lastIndex=_,c=o.exec(l),c!==null);)_=o.lastIndex,o===Di?c[1]==="!--"?o=mr:c[1]!==void 0?o=pr:c[2]!==void 0?(Vr.test(c[2])&&(r=RegExp("</"+c[2],"g")),o=Xt):c[3]!==void 0&&(o=Xt):o===Xt?c[0]===">"?(o=r??Di,n=-1):c[1]===void 0?n=-2:(n=o.lastIndex-c[2].length,h=c[1],o=c[3]===void 0?Xt:c[3]==='"'?_r:gr):o===_r||o===gr?o=Xt:o===mr||o===pr?o=Di:(o=Xt,r=void 0);const g=o===Xt&&a[d+1].startsWith("/>")?" ":"";s+=o===Di?l+js:n>=0?(e.push(h),l.slice(0,n)+Rr+l.slice(n)+Qt+g):l+Qt+(n===-2?d:g)}return[Hr(a,s+(a[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),e]};class Qi{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let s=0,o=0;const d=t.length-1,l=this.parts,[h,c]=Cs(t,i);if(this.el=Qi.createElement(h,e),oi.currentNode=this.el.content,i===2||i===3){const n=this.el.content.firstChild;n.replaceWith(...n.childNodes)}for(;(r=oi.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(const n of r.getAttributeNames())if(n.endsWith(Rr)){const _=c[o++],g=r.getAttribute(n).split(Qt),p=/([.?@])?(.*)/.exec(_);l.push({type:1,index:s,name:p[2],strings:g,ctor:p[1]==="."?Ms:p[1]==="?"?Ss:p[1]==="@"?Os:fa}),r.removeAttribute(n)}else n.startsWith(Qt)&&(l.push({type:6,index:s}),r.removeAttribute(n));if(Vr.test(r.tagName)){const n=r.textContent.split(Qt),_=n.length-1;if(_>0){r.textContent=na?na.emptyScript:"";for(let g=0;g<_;g++)r.append(n[g],Zi()),oi.nextNode(),l.push({type:2,index:++s});r.append(n[_],Zi())}}}else if(r.nodeType===8)if(r.data===Br)l.push({type:2,index:s});else{let n=-1;for(;(n=r.data.indexOf(Qt,n+1))!==-1;)l.push({type:7,index:s}),n+=Qt.length-1}s++}}static createElement(t,i){const e=ni.createElement("template");return e.innerHTML=t,e}}function _i(a,t,i=a,e){var o,d;if(t===Wt)return t;let r=e!==void 0?(o=i.o)==null?void 0:o[e]:i.l;const s=Yi(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((d=r==null?void 0:r._$AO)==null||d.call(r,!1),s===void 0?r=void 0:(r=new s(a),r._$AT(a,i,e)),e!==void 0?(i.o??(i.o=[]))[e]=r:i.l=r),r!==void 0&&(t=_i(a,r._$AS(a,t.values),r,e)),t}class Es{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:e}=this._$AD,r=((t==null?void 0:t.creationScope)??ni).importNode(i,!0);oi.currentNode=r;let s=oi.nextNode(),o=0,d=0,l=e[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new Wi(s,s.nextSibling,this,t):l.type===1?h=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(h=new Ds(s,this,t)),this._$AV.push(h),l=e[++d]}o!==(l==null?void 0:l.index)&&(s=oi.nextNode(),o++)}return oi.currentNode=ni,r}p(t){let i=0;for(const e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class Wi{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,i,e,r){this.type=2,this._$AH=Ue,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=r,this.v=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=_i(this,t,i),Yi(t)?t===Ue||t==null||t===""?(this._$AH!==Ue&&this._$AR(),this._$AH=Ue):t!==this._$AH&&t!==Wt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):zs(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Ue&&Yi(this._$AH)?this._$AA.nextSibling.data=t:this.T(ni.createTextNode(t)),this._$AH=t}$(t){var s;const{values:i,_$litType$:e}=t,r=typeof e=="number"?this._$AC(t):(e.el===void 0&&(e.el=Qi.createElement(Hr(e.h,e.h[0]),this.options)),e);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(i);else{const o=new Es(r,this),d=o.u(this.options);o.p(i),this.T(d),this._$AH=o}}_$AC(t){let i=vr.get(t.strings);return i===void 0&&vr.set(t.strings,i=new Qi(t)),i}k(t){er(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,r=0;for(const s of t)r===i.length?i.push(e=new Wi(this.O(Zi()),this.O(Zi()),this,this.options)):e=i[r],e._$AI(s),r++;r<i.length&&(this._$AR(e&&e._$AB.nextSibling,r),i.length=r)}_$AR(t=this._$AA.nextSibling,i){var e;for((e=this._$AP)==null?void 0:e.call(this,!1,!0,i);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var i;this._$AM===void 0&&(this.v=t,(i=this._$AP)==null||i.call(this,t))}}class fa{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,e,r,s){this.type=1,this._$AH=Ue,this._$AN=void 0,this.element=t,this.name=i,this._$AM=r,this.options=s,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=Ue}_$AI(t,i=this,e,r){const s=this.strings;let o=!1;if(s===void 0)t=_i(this,t,i,0),o=!Yi(t)||t!==this._$AH&&t!==Wt,o&&(this._$AH=t);else{const d=t;let l,h;for(t=s[0],l=0;l<s.length-1;l++)h=_i(this,d[e+l],i,l),h===Wt&&(h=this._$AH[l]),o||(o=!Yi(h)||h!==this._$AH[l]),h===Ue?t=Ue:t!==Ue&&(t+=(h??"")+s[l+1]),this._$AH[l]=h}o&&!r&&this.j(t)}j(t){t===Ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ms extends fa{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Ue?void 0:t}}class Ss extends fa{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Ue)}}class Os extends fa{constructor(t,i,e,r,s){super(t,i,e,r,s),this.type=5}_$AI(t,i=this){if((t=_i(this,t,i,0)??Ue)===Wt)return;const e=this._$AH,r=t===Ue&&e!==Ue||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,s=t!==Ue&&(e===Ue||r);r&&this.element.removeEventListener(this.name,this,e),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Ds{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){_i(this,t)}}const Ia=Ui.litHtmlPolyfillSupport;Ia==null||Ia(Qi,Wi),(Ui.litHtmlVersions??(Ui.litHtmlVersions=[])).push("3.2.0");const Ls=(a,t,i)=>{const e=(i==null?void 0:i.renderBefore)??t;let r=e._$litPart$;if(r===void 0){const s=(i==null?void 0:i.renderBefore)??null;e._$litPart$=r=new Wi(t.insertBefore(Zi(),s),s,void 0,i??{})}return r._$AI(a),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class he extends gi{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Ls(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return Wt}}var Ir;he._$litElement$=!0,he.finalized=!0,(Ir=globalThis.litElementHydrateSupport)==null||Ir.call(globalThis,{LitElement:he});const Aa=globalThis.litElementPolyfillSupport;Aa==null||Aa({LitElement:he});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _e=a=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(a,t)}):customElements.define(a,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ns={attribute:!0,type:String,converter:oa,reflect:!1,hasChanged:Xa},Ps=(a=Ns,t,i)=>{const{kind:e,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(i.name,a),e==="accessor"){const{name:o}=i;return{set(d){const l=t.get.call(this);t.set.call(this,d),this.requestUpdate(o,l,a)},init(d){return d!==void 0&&this.P(o,void 0,a),d}}}if(e==="setter"){const{name:o}=i;return function(d){const l=this[o];t.call(this,d),this.requestUpdate(o,l,a)}}throw Error("Unsupported decorator location: "+e)};function E(a){return(t,i)=>typeof i=="object"?Ps(a,t,i):((e,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(r,s):void 0})(a,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bt(a){return E({...a,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Is(a){return(t,i)=>{const e=typeof t=="function"?t:t[i];Object.assign(e,a)}}var As=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Rs=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var s;let a=[_e("discord-action-row")],t,i=[],e,r=he;return s=class extends r{render(){return D`<slot></slot>`}},e=s,(()=>{const d=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;As(null,t={value:e},a,{kind:"class",name:e.name,metadata:d},null,i),e=t.value,d&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d})})(),ie(s,"styles",me`
		:host {
			display: flex;
			flex-wrap: wrap;
		}
	`),Rs(e,i),e})();var Bs=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Vs=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var s;let a=[_e("discord-attachments")],t,i=[],e,r=he;return s=class extends r{render(){return D`<slot></slot>`}},e=s,(()=>{const d=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;Bs(null,t={value:e},a,{kind:"class",name:e.name,metadata:d},null,i),e=t.value,d&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d})})(),ie(s,"styles",me`
		:host {
			display: grid;
			grid-auto-flow: row;
			grid-row-gap: 0.25rem;
			text-indent: 0;
			min-height: 0;
			min-width: 0;
			padding-top: 0.125rem;
			padding-bottom: 0.125rem;
			position: relative;
		}

		:host > * {
			justify-self: start;
			-ms-flex-item-align: start;
			align-self: start;
		}
	`),Vs(e,i),e})();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Fr=class extends Event{constructor(t,i,e){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=i,this.subscribe=e??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let br=class{constructor(t,i,e,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,o)),this.unsubscribe=o},this.host=t,i.context!==void 0){const s=i;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=i,this.callback=e,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Fr(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Us{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,i=!1){const e=i||!Object.is(t,this.o);this.o=t,e&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[i,{disposer:e}]of this.subscriptions)i(this.o,e)},t!==void 0&&(this.value=t)}addCallback(t,i,e){if(!e)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:i});const{disposer:r}=this.subscriptions.get(t);t(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Hs=class extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}},yr=class extends Us{constructor(t,i,e){var r,s;super(i.context!==void 0?i.initialValue:e),this.onContextRequest=o=>{const d=o.composedPath()[0];o.context===this.context&&d!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,d,o.subscribe))},this.onProviderRequest=o=>{const d=o.composedPath()[0];if(o.context!==this.context||d===this.host)return;const l=new Set;for(const[h,{consumerHost:c}]of this.subscriptions)l.has(h)||(l.add(h),c.dispatchEvent(new Fr(this.context,h,!0)));o.stopPropagation()},this.host=t,i.context!==void 0?this.context=i.context:this.context=i,this.attachListeners(),(s=(r=this.host).addController)==null||s.call(r,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Hs(this.context))}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ra({context:a}){return(t,i)=>{const e=new WeakMap;if(typeof i=="object")return i.addInitializer(function(){e.set(this,new yr(this,{context:a}))}),{get(){return t.get.call(this)},set(r){var s;return(s=e.get(this))==null||s.setValue(r),t.set.call(this,r)},init(r){var s;return(s=e.get(this))==null||s.setValue(r),r}};{t.constructor.addInitializer(o=>{e.set(o,new yr(o,{context:a}))});const r=Object.getOwnPropertyDescriptor(t,i);let s;if(r===void 0){const o=new WeakMap;s={get(){return o.get(this)},set(d){e.get(this).setValue(d),o.set(this,d)},configurable:!0,enumerable:!0}}else{const o=r.set;s={...r,set(d){e.get(this).setValue(d),o==null||o.call(this,d)}}}return void Object.defineProperty(t,i,s)}}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ne({context:a,subscribe:t}){return(i,e)=>{typeof e=="object"?e.addInitializer(function(){new br(this,{context:a,callback:r=>{i.set.call(this,r)},subscribe:t})}):i.constructor.addInitializer(r=>{new br(r,{context:a,callback:s=>{r[e]=s},subscribe:t})})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ma=a=>(...t)=>({_$litDirective$:a,values:t});class ir{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this.t=t,this._$AM=i,this.i=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=ma(class extends ir{constructor(a){var t;if(super(a),a.type!==tr.ATTRIBUTE||a.name!=="class"||((t=a.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(a){return" "+Object.keys(a).filter(t=>a[t]).join(" ")+" "}update(a,[t]){var e,r;if(this.st===void 0){this.st=new Set,a.strings!==void 0&&(this.nt=new Set(a.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(const s in t)t[s]&&!((e=this.nt)!=null&&e.has(s))&&this.st.add(s);return this.render(t)}const i=a.element.classList;for(const s of this.st)s in t||(i.remove(s),this.st.delete(s));for(const s in t){const o=!!t[s];o===this.st.has(s)||(r=this.nt)!=null&&r.has(s)||(o?(i.add(s),this.st.add(s)):(i.remove(s),this.st.delete(s)))}return Wt}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=a=>a??Ue;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fs=a=>a.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hi=(a,t)=>{var e;const i=a._$AN;if(i===void 0)return!1;for(const r of i)(e=r._$AO)==null||e.call(r,t,!1),Hi(r,t);return!0},da=a=>{let t,i;do{if((t=a._$AM)===void 0)break;i=t._$AN,i.delete(a),a=t}while((i==null?void 0:i.size)===0)},Zr=a=>{for(let t;t=a._$AM;a=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(a))break;i.add(a),Qs(t)}};function Zs(a){this._$AN!==void 0?(da(this),this._$AM=a,Zr(this)):this._$AM=a}function Ys(a,t=!1,i=0){const e=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(e))for(let s=i;s<e.length;s++)Hi(e[s],!1),da(e[s]);else e!=null&&(Hi(e,!1),da(e));else Hi(this,a)}const Qs=a=>{a.type==tr.CHILD&&(a._$AP??(a._$AP=Ys),a._$AQ??(a._$AQ=Zs))};class Yr extends ir{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,e){super._$AT(t,i,e),Zr(this),this.isConnected=t._$AU}_$AO(t,i=!0){var e,r;t!==this.isConnected&&(this.isConnected=t,t?(e=this.reconnected)==null||e.call(this):(r=this.disconnected)==null||r.call(this)),i&&(Hi(this,t),da(this))}setValue(t){if(Fs(this.t))this.t._$AI(t,this);else{const i=[...this.t._$AH];i[this.i]=t,this.t._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bi=()=>new qs;class qs{}const Ba=new WeakMap,Vt=ma(class extends Yr{render(a){return Ue}update(a,[t]){var e;const i=t!==this.Y;return i&&this.Y!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=(e=a.options)==null?void 0:e.host,this.rt(this.ct=a.element)),Ue}rt(a){if(this.isConnected||(a=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=Ba.get(t);i===void 0&&(i=new WeakMap,Ba.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,a),a!==void 0&&this.Y.call(this.ht,a)}else this.Y.value=a}get lt(){var a,t;return typeof this.Y=="function"?(a=Ba.get(this.ht??globalThis))==null?void 0:a.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de(a,t,i){return a?t(a):i==null?void 0:i(a)}const Qr=me`
	.discord-media-attachment-non-visual-media-item-container {
		justify-self: start;
		align-self: start;
		margin-top: 8px;
		max-width: 100%;
		display: flex;
		flex-direction: column;
	}

	.discord-media-attachment-mosaic-item-media {
		border-radius: 2px;
		display: flex;
		flex-flow: row nowrap;
		height: 100%;
		max-height: inherit;
		max-width: 100%;
		position: relative;
	}

	.discord-media-attachment-controls {
		width: 100%;
		display: flex;
		align-items: center;
		margin-top: 4px;
		background-color: hsl(0 calc(1 * 0%) 0% / 0.6);
		border-radius: 3px;
	}

	.discord-media-attachment-video-button {
		margin-right: 8px;
	}

	.discord-media-attachment-control-icon {
		display: block;
		width: 24px;
		height: 24px;
		padding: 4px;
		cursor: pointer;
		flex: 0 0 auto;
		opacity: 0.6;
	}

	.discord-media-attachment-duration-time-wrapper {
		flex: 0 0 auto;
		margin: 4px;
		height: 12px;
	}

	.discord-media-attachment-duration-time-display {
		font-weight: 500;
		display: inline-block;
		font-family: 'gg mono', 'Source Code Pro', Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter',
			'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;
		font-size: 12px;
		line-height: 12px;
		vertical-align: text-top;
	}

	.discord-media-attachment-duration-time-separator {
		margin: 0 2px;
	}
`;var Ft=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},rt=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};let qr=(()=>{var M,Y,fe,$,b,V,pe,ee,Q;let a=he,t,i=[],e=[],r,s=[],o=[],d,l=[],h=[],c,n=[],_=[],g,p=[],m=[],u,f=[],H=[],G,k=[],T=[],N,I=[],S=[];return Q=class extends a{constructor(){super(...arguments);ie(this,"mediaComponentRef",Bi());ie(this,"seekSliderRef",Bi());ie(this,"volumeControlRef",Bi());ie(this,"volumeControlInputRef",Bi());z(this,M,rt(this,i,"0:00"));z(this,Y,(rt(this,e),rt(this,s,"")));z(this,fe,(rt(this,o),rt(this,l,!1)));z(this,$,(rt(this,h),rt(this,n,null)));z(this,b,(rt(this,_),rt(this,p,!1)));z(this,V,(rt(this,m),rt(this,f,1)));z(this,pe,(rt(this,H),rt(this,k,!1)));z(this,ee,(rt(this,T),rt(this,I,!1)));ie(this,"whilePlaying",(rt(this,S),()=>{if(this.mediaComponentRef.value&&this.seekSliderRef.value){this.seekSliderRef.value.value=Math.floor(this.mediaComponentRef.value.currentTime).toString();const P=Number(this.seekSliderRef.value.value);this.currentPlaybackPosition=this.calculateTime(P),this.style.setProperty("--seek-before-width",`${P/Number(this.seekSliderRef.value.max)*100}%`),this.raf=requestAnimationFrame(this.whilePlaying)}}));ie(this,"handleClickPlayPauseIcon",()=>{this.mediaComponentRef.value&&(this.hasEnded&&(this.hasEnded=!1),this.isPlaying?(this.mediaComponentRef.value.pause(),this.raf!==null&&cancelAnimationFrame(this.raf),this.isPlaying=!1):(this.mediaComponentRef.value.play(),requestAnimationFrame(this.whilePlaying),this.isPlaying=!0))});ie(this,"handleSpaceToPlayPause",P=>{P.code==="Space"&&(P.preventDefault(),P.stopPropagation(),this.handleClickPlayPauseIcon())});ie(this,"handleSeekSliderChange",()=>{this.mediaComponentRef.value&&this.seekSliderRef.value&&(this.mediaComponentRef.value.currentTime=Number(this.seekSliderRef.value.value),this.mediaComponentRef.value.paused||requestAnimationFrame(this.whilePlaying))});ie(this,"mediaMetadataLoaded",()=>{this.mediaComponentRef.value&&(this.displayMediaDuration(),this.setSliderMax(),this.displayBufferedAmount())})}get currentPlaybackPosition(){return j(this,M)}set currentPlaybackPosition(P){C(this,M,P)}get totalMediaDuration(){return j(this,Y)}set totalMediaDuration(P){C(this,Y,P)}get isPlaying(){return j(this,fe)}set isPlaying(P){C(this,fe,P)}get raf(){return j(this,$)}set raf(P){C(this,$,P)}get isMuted(){return j(this,b)}set isMuted(P){C(this,b,P)}get currentVolume(){return j(this,V)}set currentVolume(P){C(this,V,P)}get hasEnded(){return j(this,pe)}set hasEnded(P){C(this,pe,P)}get hasRunUpdate(){return j(this,ee)}set hasRunUpdate(P){C(this,ee,P)}calculateTime(P){const O=Math.floor(P/60),K=Math.floor(P%60),je=K<10?`0${K}`:`${K}`;return`${O}:${je}`}displayMediaDuration(){this.mediaComponentRef.value&&(this.totalMediaDuration=this.calculateTime(this.mediaComponentRef.value.duration))}setSliderMax(){this.mediaComponentRef.value&&this.seekSliderRef.value&&(this.seekSliderRef.value.max=Math.floor(this.mediaComponentRef.value.duration).toString())}displayBufferedAmount(){if(this.mediaComponentRef.value&&this.seekSliderRef.value){const P=this.mediaComponentRef.value.buffered.length-1;if(P>=0){const O=Math.floor(this.mediaComponentRef.value.buffered.end(P));this.style.setProperty("--buffered-width",`${O/Number(this.seekSliderRef.value.max)*100}%`)}}}handleEnded(){this.mediaComponentRef.value&&(this.mediaComponentRef.value.pause(),this.raf!==null&&cancelAnimationFrame(this.raf),this.isPlaying=!1,this.hasEnded=!0)}handleClickMuteIcon(){this.mediaComponentRef.value&&(this.isMuted?(this.mediaComponentRef.value.muted=!1,this.isMuted=!1):(this.mediaComponentRef.value.muted=!0,this.isMuted=!0))}handleSeekSliderInput(P){const O=P.target;this.style.setProperty("--seek-before-width",`${Number(O.value)/Number(O.max)*100}%`),this.seekSliderRef.value&&(this.currentPlaybackPosition=this.calculateTime(Number(this.seekSliderRef.value.value))),this.mediaComponentRef.value&&!this.mediaComponentRef.value.paused&&this.raf!==null&&cancelAnimationFrame(this.raf)}handleVolumeSliderInput(P){const O=P.target,{value:K}=O;if(this.mediaComponentRef.value){const je=Number(K)/100;this.currentVolume=je,this.mediaComponentRef.value.volume=je}}handleVolumeVerticalEnter(){this.volumeControlRef.value&&this.style.setProperty("--volume-slider-opacity","1")}handleVolumeVerticalLeave(){this.volumeControlRef.value&&this.style.setProperty("--volume-slider-opacity","0")}handleVolumeVerticalFocus(){this.handleVolumeVerticalEnter(),this.addEventListener("keydown",this.handleVolumeControlKeyboard)}handleVolumeVerticalBlur(){this.handleVolumeVerticalLeave(),this.removeEventListener("keydown",this.handleVolumeControlKeyboard)}handleVolumeControlKeyboard(P){let O=0;P.code==="ArrowDown"?O=-.1:P.code==="ArrowUp"&&(O=.1),O!==0&&this.adjustVolume(O,P)}adjustVolume(P,O){O.preventDefault(),O.stopPropagation();let K=this.currentVolume+P;K<.1?K=0:K>1&&(K=1),this.mediaComponentRef.value&&this.volumeControlInputRef.value&&(this.currentVolume=K,this.mediaComponentRef.value.volume=K,this.volumeControlInputRef.value.value=(K*100).toString())}shouldUpdate(P){return P.has("hasRunUpdate")&&P.size===1?!1:super.shouldUpdate(P)}firstUpdated(P){this.hasRunUpdate||(this.mediaComponentRef.value&&(this.mediaComponentRef.value.readyState>0?(this.displayMediaDuration(),this.setSliderMax(),this.displayBufferedAmount()):this.mediaComponentRef.value.addEventListener("loadedmetadata",this.mediaMetadataLoaded)),this.hasRunUpdate=!0,super.firstUpdated(P))}disconnectedCallback(){var P;super.disconnectedCallback(),(P=this.mediaComponentRef.value)==null||P.removeEventListener("loadedmetadata",this.mediaMetadataLoaded)}},M=new WeakMap,Y=new WeakMap,fe=new WeakMap,$=new WeakMap,b=new WeakMap,V=new WeakMap,pe=new WeakMap,ee=new WeakMap,(()=>{const P=typeof Symbol=="function"&&Symbol.metadata?Object.create(a[Symbol.metadata]??null):void 0;t=[Bt()],r=[Bt()],d=[Bt()],c=[Bt()],g=[Bt()],u=[Bt()],G=[Bt()],N=[Bt()],Ft(Q,null,t,{kind:"accessor",name:"currentPlaybackPosition",static:!1,private:!1,access:{has:O=>"currentPlaybackPosition"in O,get:O=>O.currentPlaybackPosition,set:(O,K)=>{O.currentPlaybackPosition=K}},metadata:P},i,e),Ft(Q,null,r,{kind:"accessor",name:"totalMediaDuration",static:!1,private:!1,access:{has:O=>"totalMediaDuration"in O,get:O=>O.totalMediaDuration,set:(O,K)=>{O.totalMediaDuration=K}},metadata:P},s,o),Ft(Q,null,d,{kind:"accessor",name:"isPlaying",static:!1,private:!1,access:{has:O=>"isPlaying"in O,get:O=>O.isPlaying,set:(O,K)=>{O.isPlaying=K}},metadata:P},l,h),Ft(Q,null,c,{kind:"accessor",name:"raf",static:!1,private:!1,access:{has:O=>"raf"in O,get:O=>O.raf,set:(O,K)=>{O.raf=K}},metadata:P},n,_),Ft(Q,null,g,{kind:"accessor",name:"isMuted",static:!1,private:!1,access:{has:O=>"isMuted"in O,get:O=>O.isMuted,set:(O,K)=>{O.isMuted=K}},metadata:P},p,m),Ft(Q,null,u,{kind:"accessor",name:"currentVolume",static:!1,private:!1,access:{has:O=>"currentVolume"in O,get:O=>O.currentVolume,set:(O,K)=>{O.currentVolume=K}},metadata:P},f,H),Ft(Q,null,G,{kind:"accessor",name:"hasEnded",static:!1,private:!1,access:{has:O=>"hasEnded"in O,get:O=>O.hasEnded,set:(O,K)=>{O.hasEnded=K}},metadata:P},k,T),Ft(Q,null,N,{kind:"accessor",name:"hasRunUpdate",static:!1,private:!1,access:{has:O=>"hasRunUpdate"in O,get:O=>O.hasRunUpdate,set:(O,K)=>{O.hasRunUpdate=K}},metadata:P},I,S),P&&Object.defineProperty(Q,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:P})})(),Q})();const Wr=me`
	.discord-media-attachment-horizontal {
		width: 100%;
		display: flex;
		align-self: stretch;
	}

	.discord-media-attachment-media-bar-interaction {
		position: relative;
		flex: 1 1 auto;
		align-self: stretch;
		display: flex;
		align-items: center;
		cursor: pointer;
		margin: 0 7px;
	}

	.discord-media-attachment-playback-control {
		position: relative;
		flex: 1 1 auto;
		height: 6px;
		background-color: hsl(210 calc(1 * 9.3%) 78.8% / 0.3);
	}

	.discord-media-attachment-playback-control:hover {
		box-shadow: 0 1px 1px hsl(0 calc(1 * 0%) 0% / 0.3);
	}

	.discord-media-attachment-playback-control::before {
		background-color: hsl(210 calc(1 * 9.3%) 78.8% / 0.3);
		left: -3px;
		border-radius: 3px 0 0 3px;
		content: '';
		position: absolute;
		top: 0;
		height: 100%;
		width: 3px;
		z-index: 1;
	}

	input[type='range'].discord-media-attachment-playback-control::-webkit-slider-runnable-track {
		width: 2.47264%;
		height: 100%;
		cursor: pointer;
		opacity: 1;
		background: linear-gradient(to right, hsl(199 100% calc(1 * 69%) / 1) var(--buffered-width));
	}

	input[type='range'].discord-media-attachment-playback-control::before {
		position: absolute;
		content: '';
		top: 0;
		width: var(--seek-before-width);
		height: 100%;
		z-index: 3;
		background-color: hsl(199 100% calc(1 * 69%) / 1);
		cursor: pointer;
	}

	input[type='range'].discord-media-attachment-playback-control::-webkit-slider-thumb {
		position: relative;
		cursor: pointer;
		border-radius: 3px;
		width: auto;
		height: 18px;
		line-height: 18px;
		text-align: center;
		font-weight: 600;
		font-size: 12px;
		color: hsl(0 calc(1 * 0%) 97.6% / 1);
		opacity: 1;
		transition: opacity.2s ease-out;
		pointer-events: none;
		-webkit-appearance: none;
		box-sizing: content-box;
		background-color: hsl(0 calc(1 * 0%) 0% / 1);
		margin: -5px 0 0 0;
		z-index: 4;
	}

	input[type='range'].discord-media-attachment-playback-control:active::-webkit-slider-thumb {
		transform: scale(1.2);
		filter: brightness(85%);
	}

	input[type='range'].discord-media-attachment-playback-control::-moz-range-track {
		width: 2.47264%;
		height: 100%;
		cursor: pointer;
		opacity: 1;
		background: linear-gradient(to right, hsl(199 100% calc(1 * 69%) / 1) var(--buffered-width));
	}

	input[type='range'].discord-media-attachment-playback-control::-moz-range-progress {
		background-color: hsl(199 100% calc(1 * 69%) / 1);
	}

	input[type='range'].discord-media-attachment-playback-control::-moz-focus-outer {
		border: 0;
	}

	input[type='range'].discord-media-attachment-playback-control::-moz-range-thumb {
		border-radius: 50%;
		position: relative;
		cursor: pointer;
		line-height: 18px;
		text-align: center;
		font-weight: 600;
		font-size: 12px;
		opacity: 1;
		transition: opacity.2s ease-out;
		pointer-events: none;
		-webkit-appearance: none;
		box-sizing: content-box;
		background: #007db5;
		margin: -5px 0 0 0;
	}

	input[type='range'].discord-media-attachment-playback-control:active::-moz-range-thumb {
		transform: scale(1.2);
		filter: brightness(85%);
	}
`,Gr=me`
	.discord-media-attachment-flex {
		display: flex;
	}

	.discord-media-attachment-flex-container {
		justify-content: flex-end;
		align-items: center;
		flex-direction: column;
		display: flex;
		position: relative;
	}

	.discord-media-attachment-button-slider {
		margin-bottom: 4px;
		margin-left: -4px;
		position: absolute;
		bottom: calc(100% + 16px);
		left: -78px;
		right: 0;
		height: 50px;
		opacity: var(--volume-slider-opacity);
		-webkit-app-region: no-drag;
	}

	.discord-media-attachment-volume-vertical {
		display: flex;
		align-items: center;
		transform-origin: top;
		transform: rotate(270deg);
		height: 54px;
		width: 140px;
	}

	.discord-media-attachment-button {
		cursor: pointer;
		line-height: 0;
		width: auto;
		background: transparent;
		color: currentColor;
		border: 0;
		padding: 0;
		margin: 0;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		border-radius: 3px;
		font-size: 14px;
		font-weight: 500;
		-webkit-user-select: none;
		-moz-user-select: none;
		user-select: none;
	}

	.discord-media-attachment-button-content {
		--custom-button-link-underline-offset: 1px;
		--button--underline-color: transparent;
		--custom-button-link-underline-width: 1px;
		--custom-button-link-underline-stop: calc(var(--custom-button-link-underline-width) + var(--custom-button-link-underline-offset));

		background-image: linear-gradient(
			to top,
			transparent,
			transparent var(--custom-button-link-underline-offset),
			var(--button--underline-color) var(--custom-button-link-underline-offset),
			var(--button--underline-color) var(--custom-button-link-underline-stop),
			transparent var(--custom-button-link-underline-stop)
		);
	}

	.discord-media-attachment-button-control-icon {
		display: block;
		width: 24px;
		height: 24px;
		padding: 4px;
		cursor: pointer;
		flex: 0 0 auto;
		opacity: 0.6;
	}

	.discord-media-attachment-volume-slider {
		position: relative;
		height: 6px;
		background-color: hsl(210 calc(1 * 9.3%) 78.8% / 0.3);
		width: 88px;
	}

	.discord-media-attachment-volume-slider:hover {
		box-shadow: 0 1px 1px hsl(0 calc(1 * 0%) 0% / 0.3);
	}

	.discord-media-attachment-volume-slider::before {
		background-color: hsl(210 calc(1 * 9.3%) 78.8%/0.3);
		left: 0px;
		border-radius: 3px 0 0 3px;
		content: '';
		position: absolute;
		top: 0;
		height: 6px;
		width: 100%;
		z-index: 3;
	}

	input[type='range'].discord-media-attachment-volume-slider::-webkit-slider-runnable-track {
		background-color: hsl(210 calc(1 * 9.3%) 78.8%/0.3);
		height: 2.47264%;
		width: 100%;
		cursor: grab;
		border-radius: 8px;
	}

	input[type='range'].discord-media-attachment-volume-slider::-webkit-slider-thumb {
		position: relative;
		bottom: 8px;
		z-index: 4;
	}

	input[type='range'].discord-media-attachment-volume-slider:active::-webkit-slider-thumb {
		transform: scale(1.2);
		filter: brightness(85%);
	}
`;let Ws=globalThis.$discordMessage??{};function vi(){return Ws}const ra={blue:"https://cdn.discordapp.com/embed/avatars/0.png",gray:"https://cdn.discordapp.com/embed/avatars/1.png",green:"https://cdn.discordapp.com/embed/avatars/2.png",orange:"https://cdn.discordapp.com/embed/avatars/3.png",red:"https://cdn.discordapp.com/embed/avatars/4.png",pink:"https://cdn.discordapp.com/embed/avatars/5.png"},Va=vi().avatars??{},Ht=Object.assign(ra,Va,{default:ra[Va.default]??Va.default??ra.blue}),pa=vi().profiles??{},Gs=vi().defaultTheme==="light"?"light":"dark",Ks=vi().defaultMode==="compact"?"compact":"cozy",Js=vi().defaultBackground==="none"?"none":"discord";var Ki=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},ei=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};const Be="light-theme",Gi="compact-mode",Kr="no-background";(()=>{var p,m,u,f;let a=[_e("discord-messages")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[];return p=class extends r{constructor(){super(...arguments);z(this,m,ei(this,o,!1));z(this,u,(ei(this,d),ei(this,h,!1)));z(this,f,(ei(this,c),ei(this,_,!1)));ei(this,g)}get lightTheme(){return j(this,m)}set lightTheme(k){C(this,m,k)}get noBackground(){return j(this,u)}set noBackground(k){C(this,u,k)}get compactMode(){return j(this,f)}set compactMode(k){C(this,f,k)}connectedCallback(){super.connectedCallback(),(this.lightTheme||Gs==="light"&&this.lightTheme)&&(this.lightTheme=!0),(this.compactMode||Ks==="compact"&&this.compactMode)&&(this.compactMode=!0),(this.noBackground||Js==="none"&&this.noBackground)&&(this.noBackground=!0)}render(){return D`<slot></slot>`}},m=new WeakMap,u=new WeakMap,f=new WeakMap,e=p,(()=>{const k=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[Ra({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],l=[Ra({context:Kr}),E({type:Boolean,reflect:!0,attribute:"no-background"})],n=[Ra({context:Gi}),E({type:Boolean,reflect:!0,attribute:"compact-mode"})],Ki(p,null,s,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:T=>"lightTheme"in T,get:T=>T.lightTheme,set:(T,N)=>{T.lightTheme=N}},metadata:k},o,d),Ki(p,null,l,{kind:"accessor",name:"noBackground",static:!1,private:!1,access:{has:T=>"noBackground"in T,get:T=>T.noBackground,set:(T,N)=>{T.noBackground=N}},metadata:k},h,c),Ki(p,null,n,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:T=>"compactMode"in T,get:T=>T.compactMode,set:(T,N)=>{T.compactMode=N}},metadata:k},_,g),Ki(null,t={value:e},a,{kind:"class",name:e.name,metadata:k},null,i),e=t.value,k&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:k})})(),ie(p,"styles",me`
		:host {
			color: #fff;
			background-color: #36393e;
			display: block;
			font-size: 16px;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
			line-height: 170%;
			border: 1px solid rgba(255, 255, 255, 0.05);
		}

		:host([light-theme]) {
			color: #747f8d;
			background-color: #fff;
			border-color: #dedede;
		}

		:host([no-background]) {
			background-color: unset;
		}

		::slotted(*) {
			padding-top: 0.125rem;
			padding-bottom: 0.125rem;
		}

		::slotted(*:first-child) {
			margin-top: 0.5rem;
		}

		::slotted(*:not(:first-child)) {
			margin-top: 1.0625rem;
		}

		:host([compact-mode]) ::slotted(*:not(:first-child)) {
			margin-top: unset;
		}

		::slotted(*:last-child) {
			margin-bottom: 0.5rem;
			border-bottom-width: 0;
		}
	`),ei(e,i),e})();var li=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},bt=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var k,T,N,I,S,M;let a=[_e("discord-link")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[];return k=class extends r{constructor(){super(...arguments);z(this,T,bt(this,o,!1));z(this,N,(bt(this,d),bt(this,h,void 0)));z(this,I,(bt(this,c),bt(this,_,void 0)));z(this,S,(bt(this,g),bt(this,m,void 0)));z(this,M,(bt(this,u),bt(this,H,void 0)));bt(this,G)}get lightTheme(){return j(this,T)}set lightTheme($){C(this,T,$)}get href(){return j(this,N)}set href($){C(this,N,$)}get rel(){return j(this,I)}set rel($){C(this,I,$)}get target(){return j(this,S)}set target($){C(this,S,$)}get type(){return j(this,M)}set type($){C(this,M,$)}render(){return D`<a
			href=${le(this.href)}
			rel=${le(this.rel)}
			target=${le(this.target)}
			type=${le(this.type)}
			class=${Lt({"discord-link-light-theme":this.lightTheme})}
			><slot></slot
		></a>`}},T=new WeakMap,N=new WeakMap,I=new WeakMap,S=new WeakMap,M=new WeakMap,e=k,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[Ne({context:Be,subscribe:!0}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],l=[E()],n=[E()],p=[E()],f=[E()],li(k,null,s,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:b=>"lightTheme"in b,get:b=>b.lightTheme,set:(b,V)=>{b.lightTheme=V}},metadata:$},o,d),li(k,null,l,{kind:"accessor",name:"href",static:!1,private:!1,access:{has:b=>"href"in b,get:b=>b.href,set:(b,V)=>{b.href=V}},metadata:$},h,c),li(k,null,n,{kind:"accessor",name:"rel",static:!1,private:!1,access:{has:b=>"rel"in b,get:b=>b.rel,set:(b,V)=>{b.rel=V}},metadata:$},_,g),li(k,null,p,{kind:"accessor",name:"target",static:!1,private:!1,access:{has:b=>"target"in b,get:b=>b.target,set:(b,V)=>{b.target=V}},metadata:$},m,u),li(k,null,f,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:b=>"type"in b,get:b=>b.type,set:(b,V)=>{b.type=V}},metadata:$},H,G),li(null,t={value:e},a,{kind:"class",name:e.name,metadata:$},null,i),e=t.value,$&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),ie(k,"styles",me`
		a {
			color: #00aff4;
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
		}

		.discord-link-light-theme a {
			color: #00b0f4;
		}
	`),bt(e,i),e})();class Xs extends Yr{constructor(){super(...arguments);ie(this,"host");ie(this,"element");ie(this,"prevData",{});ie(this,"eventData",{})}render(i){return Ue}update(i,[e]){var r;this.element!==i.element&&(this.element=i.element),this.host=((r=i.options)==null?void 0:r.host)??this.element,this.apply(e),this.groom(e),this.prevData={...e}}apply(i){if(!i)return;const{prevData:e,element:r}=this;for(const[s,o]of Object.entries(i)){if(o===e[s])continue;const d=s.slice(1);switch(s[0]){case"@":this.eventData[d]=o,this.applyEvent(d,o);break;case".":r[d]=o;break;case"?":o?r.setAttribute(d,""):r.removeAttribute(d);break;default:o===null?r.removeAttribute(s):r.setAttribute(s,String(o));break}}}groom(i){const{prevData:e,element:r}=this;if(e)for(const[s,o]of Object.entries(e)){const d=s.slice(1);if(!i||!(s in i)&&r[d]===o)switch(s[0]){case"@":this.groomEvent(d,o);break;case".":r[d]=void 0;break;case"?":r.removeAttribute(d);break;default:r.removeAttribute(s);break}}}applyEvent(i,e){const{prevData:r,element:s}=this;this.eventData[i]=e,r[i]&&s.removeEventListener(i,this,e),s.addEventListener(i,this,e)}groomEvent(i,e){const{element:r}=this;Reflect.deleteProperty(this.eventData,i),r.removeEventListener(i,this,e)}handleEvent(i){const e=this.eventData[i.type];typeof e=="function"?e.call(this.host,i):e.handleEvent(i)}disconnected(){const{eventData:i,element:e}=this;for(const[r,s]of Object.entries(i)){const o=r.slice(1);e.removeEventListener(o,this,s)}}reconnected(){const{eventData:i,element:e}=this;for(const[r,s]of Object.entries(i)){const o=r.slice(1);e.addEventListener(o,this,s)}}}const $e=ma(Xs),eo=xe`
	<path fill="currentColor" d="M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6ZM15 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z"></path>
`;function Jr(a={}){return D`<svg ${$e(a)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${eo}</svg>`}const to=xe`
	<path fill="currentColor" d="M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z"></path>
`;function Xr(a={}){return D`<svg ${$e(a)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${to}</svg>`}const io=xe`
	<path fill="currentColor" d="M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z"></path>
`;function es(a={}){return D`<svg ${$e(a)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${io}</svg>`}const ao=xe`
	<path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z"></path>
	<path fill="currentColor" d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z"></path>
`;function ts(a={}){return D`<svg ${$e(a)} aria-hidden="true" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">${ao}</svg>`}const ro=xe`
	<path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.18 15.36c-.55.35-1.18-.12-1.18-.78v-.27c0-.36.2-.67.45-.93a2 2 0 0 0 0-2.76c-.24-.26-.45-.57-.45-.93v-.27c0-.66.63-1.13 1.18-.78a4 4 0 0 1 0 6.72Z"></path>
`;function is(a={}){return D`<svg ${$e(a)} aria-hidden="true" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">${ro}</svg>`}const so=xe`
	<path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM22.7 8.3a1 1 0 0 0-1.4 0L19 10.58l-2.3-2.3a1 1 0 1 0-1.4 1.42L17.58 12l-2.3 2.3a1 1 0 0 0 1.42 1.4L19 13.42l2.3 2.3a1 1 0 0 0 1.4-1.42L20.42 12l2.3-2.3a1 1 0 0 0 0-1.4Z"></path>
`;function as(a={}){return D`<svg ${$e(a)} aria-hidden="true" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">${so}</svg>`}var ci=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},yt=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var k,T,N,I,S,M;let a=[_e("discord-audio-attachment")],t,i=[],e,r=qr,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[];return k=class extends r{constructor(){super(...arguments);z(this,T,yt(this,o,void 0));z(this,N,(yt(this,d),yt(this,h,void 0)));z(this,I,(yt(this,c),yt(this,_,void 0)));z(this,S,(yt(this,g),yt(this,m,void 0)));z(this,M,(yt(this,u),yt(this,H,!1)));yt(this,G)}get href(){return j(this,T)}set href($){C(this,T,$)}get name(){return j(this,N)}set name($){C(this,N,$)}get bytes(){return j(this,I)}set bytes($){C(this,I,$)}get bytesUnit(){return j(this,S)}set bytesUnit($){C(this,S,$)}get lightTheme(){return j(this,M)}set lightTheme($){C(this,M,$)}render(){const $=this.name.replaceAll(/\s/g,"_").replaceAll(/[^\w-]/g,"");return D`<div class="discord-media-attachment-non-visual-media-item-container">
			<div class="discord-audio-attachment-non-visual-media-item">
				<div class="discord-media-attachment-mosaic-item-media">
					<div
						class=${Lt({"discord-audio-attachment-wrapper-audio":!0,"discord-audio-attachment-light-theme":this.lightTheme})}
					>
						<div class="discord-audio-attachment-audio-metadata">
							<div class="discord-audio-attachment-audio-metadata-content">
								<discord-link
									href=${le(this.href)}
									ref="noreferrer noopener"
									target="_blank"
									role="button"
									aria-label="Download"
								>
									${$}
								</discord-link>
								<div class="discord-audio-attachment-audio-metadata-size">
									${this.bytes}${de(this.bytesUnit,()=>D` ${this.bytesUnit}`,()=>null)}
								</div>
							</div>
						</div>
						<audio
							${Vt(this.mediaComponentRef)}
							class="discord-audio-attachment-audio-element"
							preload="metadata"
							@progress=${this.displayBufferedAmount}
							@ended=${this.handleEnded}
						>
							<source src=${le(this.href)} />
						</audio>
						<div class="discord-media-attachment-controls" style="transform: translateY(0%)">
							<div
								class="discord-media-attachment-video-button"
								tabindex="0"
								aria-label="${this.isPlaying?"Pause":"Play"}"
								role="button"
								@click=${this.handleClickPlayPauseIcon}
								@keydown=${this.handleSpaceToPlayPause}
							>
								${de(this.hasEnded,()=>es({class:"discord-media-attachment-control-icon"}),()=>de(this.isPlaying,()=>Jr({class:"discord-media-attachment-control-icon"}),()=>Xr({class:"discord-media-attachment-control-icon"})))}
							</div>
							<div class="discord-media-attachment-duration-time-wrapper">
								<span role="status" class="discord-media-attachment-duration-time-display">${this.currentPlaybackPosition}</span>
								<span
									role="separator"
									class="discord-media-attachment-duration-time-display discord-media-attachment-duration-time-separator"
									>/</span
								>
								<span class="discord-media-attachment-duration-time-display">${this.totalMediaDuration}</span>
							</div>
							<div class="discord-media-attachment-horizontal">
								<div class="discord-media-attachment-media-bar-interaction">
									<input
										type="range"
										${Vt(this.seekSliderRef)}
										class="discord-media-attachment-playback-control"
										@input=${this.handleSeekSliderInput}
										@change=${this.handleSeekSliderChange}
										max="100"
										value="0"
									/>
								</div>
							</div>
							<div class="discord-media-attachment-flex">
								<div class="discord-media-attachment-flex-container">
									<div ${Vt(this.volumeControlRef)} class="discord-media-attachment-button-slider">
										<div
											class="discord-media-attachment-volume-vertical"
											@mouseenter=${this.handleVolumeVerticalEnter}
											@mouseleave=${this.handleVolumeVerticalLeave}
										>
											<input
												${Vt(this.volumeControlInputRef)}
												type="range"
												class="discord-media-attachment-volume-slider"
												@input=${this.handleVolumeSliderInput}
												max="100"
												value="100"
											/>
										</div>
									</div>
									<button
										aria-label="Control volume"
										type="button"
										class="discord-media-attachment-button"
										@focus=${this.handleVolumeVerticalFocus}
										@blur=${this.handleVolumeVerticalBlur}
										@mouseover=${this.handleVolumeVerticalEnter}
										@mouseout=${this.handleVolumeVerticalLeave}
										@click=${this.handleClickMuteIcon}
									>
										<div class="discord-media-attachment-button-content">
											${de(this.currentVolume===0||this.isMuted,()=>as({class:"discord-media-attachment-button-control-icon"}),()=>de(this.currentVolume<=.5,()=>is({class:"discord-media-attachment-button-control-icon"}),()=>ts({class:"discord-media-attachment-button-control-icon"})))}
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`}},T=new WeakMap,N=new WeakMap,I=new WeakMap,S=new WeakMap,M=new WeakMap,e=k,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E()],l=[E()],n=[E({type:Number})],p=[E({attribute:"bytes-unit"})],f=[Ne({context:Be,subscribe:!0}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],ci(k,null,s,{kind:"accessor",name:"href",static:!1,private:!1,access:{has:b=>"href"in b,get:b=>b.href,set:(b,V)=>{b.href=V}},metadata:$},o,d),ci(k,null,l,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:b=>"name"in b,get:b=>b.name,set:(b,V)=>{b.name=V}},metadata:$},h,c),ci(k,null,n,{kind:"accessor",name:"bytes",static:!1,private:!1,access:{has:b=>"bytes"in b,get:b=>b.bytes,set:(b,V)=>{b.bytes=V}},metadata:$},_,g),ci(k,null,p,{kind:"accessor",name:"bytesUnit",static:!1,private:!1,access:{has:b=>"bytesUnit"in b,get:b=>b.bytesUnit,set:(b,V)=>{b.bytesUnit=V}},metadata:$},m,u),ci(k,null,f,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:b=>"lightTheme"in b,get:b=>b.lightTheme,set:(b,V)=>{b.lightTheme=V}},metadata:$},H,G),ci(null,t={value:e},a,{kind:"class",name:e.name,metadata:$},null,i),e=t.value,$&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),ie(k,"styles",[Gr,Wr,Qr,me`
			:host {
				display: grid;
				height: -moz-fit-content;
				height: fit-content;
				grid-auto-flow: row;
				grid-row-gap: 0.25rem;
				grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
				text-indent: 0;
				min-height: 0;
				min-width: 0;
				padding-top: 0.125rem;
				padding-bottom: 0.125rem;
				position: relative;

				--seek-before-width: 0%;
				--buffered-width: 0%;
				--volume-slider-opacity: 0;
			}

			.discord-audio-attachment-non-visual-media-item {
				width: -moz-fit-content;
				width: fit-content;
				max-width: 100%;
			}

			.discord-media-attachment-mosaic-item-media {
				width: 100%;
			}

			.discord-audio-attachment-wrapper-audio {
				background-color: #282828;
				border-color: #202020;
				border-radius: 8px;
				border-style: solid;
				border-width: 1px;
				box-sizing: border-box;
				color: hsl(0 calc(1 * 0%) 100% / 1);
				display: flex;
				flex-direction: column;
				flex: auto;
				height: auto;
				justify-content: space-between;
				max-width: 100%;
				overflow: visible;
				padding: 16px;
				position: relative;
				user-select: none;
				width: 432px;
			}

			.discord-audio-attachment-light-theme.discord-audio-attachment-wrapper-audio {
				border-color: #f3f3f3;
				background-color: #f9f9f9;
			}

			.discord-audio-attachment-audio-metadata {
				display: flex;
			}

			.discord-audio-attachment-audio-metadata::before {
				width: 24px;
				height: 40px;
				content: '';
				background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9Ijk2IiB2aWV3Qm94PSIwIDAgNzIgOTYiIHdpZHRoPSI3MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNzIgMjkuM3Y2MC4zYzAgMi4yNCAwIDMuMzYtLjQ0IDQuMjItLjM4Ljc0LTEgMS4zNi0xLjc0IDEuNzQtLjg2LjQ0LTEuOTguNDQtNC4yMi40NGgtNTkuMmMtMi4yNCAwLTMuMzYgMC00LjIyLS40NC0uNzQtLjM4LTEuMzYtMS0xLjc0LTEuNzQtLjQ0LS44Ni0uNDQtMS45OC0uNDQtNC4yMnYtODMuMmMwLTIuMjQgMC0zLjM2LjQ0LTQuMjIuMzgtLjc0IDEtMS4zNiAxLjc0LTEuNzQuODYtLjQ0IDEuOTgtLjQ0IDQuMjItLjQ0aDM2LjNjMS45NiAwIDIuOTQgMCAzLjg2LjIyLjUuMTIuOTguMjggMS40NC41djE2Ljg4YzAgMi4yNCAwIDMuMzYuNDQgNC4yMi4zOC43NCAxIDEuMzYgMS43NCAxLjc0Ljg2LjQ0IDEuOTguNDQgNC4yMi40NGgxNi44OGMuMjIuNDYuMzguOTQuNSAxLjQ0LjIyLjkyLjIyIDEuOS4yMiAzLjg2eiIgZmlsbD0iI2QzZDZmZCIvPjxwYXRoIGQ9Im02OC4yNiAyMC4yNmMxLjM4IDEuMzggMi4wNiAyLjA2IDIuNTYgMi44OC4xOC4yOC4zMi41Ni40Ni44NmgtMTYuODhjLTIuMjQgMC0zLjM2IDAtNC4yMi0uNDQtLjc0LS4zOC0xLjM2LTEtMS43NC0xLjc0LS40NC0uODYtLjQ0LTEuOTgtLjQ0LTQuMjJ2LTE2Ljg4MDAyOWMuMy4xNC41OC4yOC44Ni40NTk5OTkuODIuNSAxLjUgMS4xOCAyLjg4IDIuNTZ6IiBmaWxsPSIjOTM5YmY5Ii8+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMzQuNzYgNDIuMTZjLS43NC0uMy0xLjYtLjE0LTIuMTguNDRsLTguNTggOS40aC02Yy0xLjEgMC0yIC45LTIgMnYxMmMwIDEuMS45IDIgMiAyaDZsOC41OCA5LjQyYy41OC41OCAxLjQ0Ljc0IDIuMTguNDQuNzYtLjMyIDEuMjQtMS4wNiAxLjI0LTEuODZ2LTMyYzAtLjgtLjQ4LTEuNTQtMS4yNC0xLjg0em01LjI0IDMuODR2NGM1LjUyIDAgMTAgNC40OCAxMCAxMHMtNC40OCAxMC0xMCAxMHY0YzcuNzIgMCAxNC02LjI4IDE0LTE0cy02LjI4LTE0LTE0LTE0em0wIDhjMy4zIDAgNiAyLjcgNiA2cy0yLjcgNi02IDZ2LTRjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yeiIgZmlsbD0iIzU4NjVmMiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+');
				background-size: 100%auto;
				background-repeat: no-repeat;
			}

			.discord-audio-attachment-audio-metadata-content {
				padding: 0 8px;
				flex: 1 1 auto;
				white-space: nowrap;
				overflow: hidden;
			}

			.discord-audio-attachment-audio-metadata-size {
				color: color-mix(in oklab, hsl(214 calc(1 * 8.1%) 61.2% / 1) 100%, black 0%);
				font-size: 12px;
				line-height: 16px;
				font-weight: 500;
				opacity: 0.7;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}

			.discord-audio-attachment-audio-element {
				display: none !important;
				position: absolute;
				width: 0;
				height: 0;
			}
		`]),yt(e,i),e})();/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rs="important",oo=" !"+rs,di=ma(class extends ir{constructor(a){var t;if(super(a),a.type!==tr.ATTRIBUTE||a.name!=="style"||((t=a.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(a){return Object.keys(a).reduce((t,i)=>{const e=a[i];return e==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(a,[t]){const{style:i}=a.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)t[e]==null&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const r=t[e];if(r!=null){this.ft.add(e);const s=typeof r=="string"&&r.endsWith(oo);e.includes("-")||s?i.setProperty(e,s?r.slice(0,-11):r,s?rs:""):i[e]=r}}return Wt}}),no=xe`
	<path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" />
`;function ar(a={}){return D`<svg
		${$e(a)}
		class="discord-application-tag-verified"
		aria-label="Verified App"
		aria-hidden="false"
		width="16"
		height="16"
		viewBox="0 0 16 15.2"
		xmlns="http://www.w3.org/2000/svg"
	>
		${no}
	</svg>`}var wt=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},He=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var J,P,O,K,je,q,Z,ce,Ee,Me,Ce;let a=[_e("discord-author-info")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[],k,T=[],N=[],I,S=[],M=[],Y,fe=[],$=[],b,V=[],pe=[],ee,Q=[],ye=[];return J=class extends r{constructor(){super(...arguments);z(this,P,He(this,o,void 0));z(this,O,(He(this,d),He(this,h,!1)));z(this,K,(He(this,c),He(this,_,!1)));z(this,je,(He(this,g),He(this,m,!1)));z(this,q,(He(this,u),He(this,H,void 0)));z(this,Z,(He(this,G),He(this,T,void 0)));z(this,ce,(He(this,N),He(this,S,void 0)));z(this,Ee,(He(this,M),He(this,fe,!1)));z(this,Me,(He(this,$),He(this,V,!1)));z(this,Ce,(He(this,pe),He(this,Q,!1)));He(this,ye)}get author(){return j(this,P)}set author(A){C(this,P,A)}get bot(){return j(this,O)}set bot(A){C(this,O,A)}get server(){return j(this,K)}set server(A){C(this,K,A)}get op(){return j(this,je)}set op(A){C(this,je,A)}get roleColor(){return j(this,q)}set roleColor(A){C(this,q,A)}get roleIcon(){return j(this,Z)}set roleIcon(A){C(this,Z,A)}get roleName(){return j(this,ce)}set roleName(A){C(this,ce,A)}get verified(){return j(this,Ee)}set verified(A){C(this,Ee,A)}get compactMode(){return j(this,Me)}set compactMode(A){C(this,Me,A)}get lightTheme(){return j(this,Ce)}set lightTheme(A){C(this,Ce,A)}render(){return D`${de(this.compactMode,()=>null,()=>D`<span class="discord-author-username" style="${di({color:this.roleColor??void 0})}">${this.author}</span>`)}
		${de(this.roleIcon&&!this.compactMode,()=>D`<img
					class="discord-author-role-icon"
					src=${le(this.roleIcon)}
					height="20"
					width="20"
					alt=${le(this.roleName)}
					draggable="false"
				/>`)}
		${de(this.bot&&!this.server,()=>D`<span class="discord-application-tag"
					>${de(this.verified,()=>ar(),()=>null)}
					App</span
				>`)}
		${de(this.server&&!this.bot,()=>D`<span class="discord-application-tag">Server</span>`)}
		${de(this.op,()=>D`<span class="discord-application-tag discord-application-tag-op">OP</span>`)}
		${de(this.compactMode,()=>D`<span class="discord-author-username" style="${di({color:this.roleColor??void 0})}">${this.author}</span>`)}`}},P=new WeakMap,O=new WeakMap,K=new WeakMap,je=new WeakMap,q=new WeakMap,Z=new WeakMap,ce=new WeakMap,Ee=new WeakMap,Me=new WeakMap,Ce=new WeakMap,e=J,(()=>{const A=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E()],l=[E({type:Boolean})],n=[E({type:Boolean})],p=[E({type:Boolean})],f=[E()],k=[E()],I=[E()],Y=[E({type:Boolean})],b=[Ne({context:Gi}),E({type:Boolean,reflect:!0,attribute:"compact-mode"})],ee=[Ne({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],wt(J,null,s,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:x=>"author"in x,get:x=>x.author,set:(x,U)=>{x.author=U}},metadata:A},o,d),wt(J,null,l,{kind:"accessor",name:"bot",static:!1,private:!1,access:{has:x=>"bot"in x,get:x=>x.bot,set:(x,U)=>{x.bot=U}},metadata:A},h,c),wt(J,null,n,{kind:"accessor",name:"server",static:!1,private:!1,access:{has:x=>"server"in x,get:x=>x.server,set:(x,U)=>{x.server=U}},metadata:A},_,g),wt(J,null,p,{kind:"accessor",name:"op",static:!1,private:!1,access:{has:x=>"op"in x,get:x=>x.op,set:(x,U)=>{x.op=U}},metadata:A},m,u),wt(J,null,f,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:x=>"roleColor"in x,get:x=>x.roleColor,set:(x,U)=>{x.roleColor=U}},metadata:A},H,G),wt(J,null,k,{kind:"accessor",name:"roleIcon",static:!1,private:!1,access:{has:x=>"roleIcon"in x,get:x=>x.roleIcon,set:(x,U)=>{x.roleIcon=U}},metadata:A},T,N),wt(J,null,I,{kind:"accessor",name:"roleName",static:!1,private:!1,access:{has:x=>"roleName"in x,get:x=>x.roleName,set:(x,U)=>{x.roleName=U}},metadata:A},S,M),wt(J,null,Y,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:x=>"verified"in x,get:x=>x.verified,set:(x,U)=>{x.verified=U}},metadata:A},fe,$),wt(J,null,b,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:x=>"compactMode"in x,get:x=>x.compactMode,set:(x,U)=>{x.compactMode=U}},metadata:A},V,pe),wt(J,null,ee,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:x=>"lightTheme"in x,get:x=>x.lightTheme,set:(x,U)=>{x.lightTheme=U}},metadata:A},Q,ye),wt(null,t={value:e},a,{kind:"class",name:e.name,metadata:A},null,i),e=t.value,A&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:A})})(),ie(J,"styles",me`
		:host {
			display: inline-flex;
			align-items: center;
			font-size: 16px;
			text-underline-offset: 1px;
			margin-right: 0.25rem;
		}

		:host([compact-mode]) {
			margin-right: 0.25rem;
			display: inline;
		}

		:host .discord-author-username {
			color: #fff;
			font-size: 1em;
			font-weight: 500;
		}

		:host .discord-author-username:hover {
			text-decoration: underline;
			cursor: pointer;
		}

		:host([light-theme]) .discord-author-username {
			color: #23262a;
		}

		:host .discord-application-tag {
			background-color: #5865f2;
			color: #fff;
			font-size: 0.625em;
			margin-left: 4px;
			border-radius: 3px;
			line-height: 100%;
			text-transform: uppercase;

			/* Use flex layout to ensure both verified icon and "BOT" text are aligned to center */
			display: inline-flex;
			align-items: center;

			/* Styling taken through Inspect Element on Discord client for Windows */
			height: 0.9375rem;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			border-radius: 0.1875rem;
		}

		:host .discord-application-tag.discord-application-tag-op {
			background-color: #c9cdfb;
			color: #4752c4;
			border-radius: 0.4rem;
		}

		:host .discord-application-tag-verified {
			display: inline-block;
			width: 0.9375rem;
			height: 0.9375rem;
			margin-left: -0.25rem;
		}

		:host .discord-author-role-icon {
			margin-left: 0.25rem;
			vertical-align: top;
			height: calc(1rem + 4px);
			width: calc(1rem + 4px);
		}

		:host([compact-mode]) .discord-author-username {
			margin-right: 0.25rem;
		}

		:host([compact-mode]) .discord-application-tag {
			padding-left: 10px;
			padding-right: 4px;
			margin-right: 0.25rem;
		}

		:host([compact-mode]) .discord-application-tag-verified {
			margin-right: 0.7em;
			margin-left: -0.7em;
		}
	`),He(e,i),e})();var lo=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},co=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var s;let a=[_e("discord-bold")],t,i=[],e,r=he;return s=class extends r{render(){return D`
			<strong>
				<slot></slot>
			</strong>
		`}},e=s,(()=>{const d=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;lo(null,t={value:e},a,{kind:"class",name:e.name,metadata:d},null,i),e=t.value,d&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d})})(),ie(s,"styles",me`
		:host > strong {
			font-weight: 700;
		}
	`),co(e,i),e})();class bi extends Error{constructor(t){super(t),this.name="DiscordComponentsError"}}const uo=new Intl.DateTimeFormat("en-US",{day:"2-digit",month:"2-digit",year:"numeric"}),ho=new Intl.DateTimeFormat("en-US",{hour12:!0,hour:"2-digit",minute:"2-digit"}),fo=new Intl.DateTimeFormat("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit"}),mo=a=>a instanceof Date?uo.format(a):a,po=(a,t=!1)=>a instanceof Date?t?fo.format(a):ho.format(a):a,qi=(a,t=!1,i=!1)=>{if(!(a instanceof Date)&&typeof a!="string")throw new TypeError("Timestamp prop must be a Date object or a string.");return t?po(a,i):mo(a)},wr=/\.(?<ext>bmp|jpe?g|png|gif|webp|tiff)$/i,go=a=>{if(!wr.test(a))throw new bi(`The url of an image for discord-image-attachment should match the regex ${wr}`)},rr=a=>{var t;return(t=vi().emojis)==null?void 0:t[a]},_o=xe`
	<path
		fill="currentColor"
		d="M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z"
	/>
	<path fill="currentColor" d="M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z"
	/>
`;function vo(a={}){return D`<svg ${$e(a)} class="discord-button-launch" aria-hidden="false" width="16" height="16" viewBox="0 0 24 24">
		${_o}
	</svg>`}var ui=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},kt=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var k,T,N,I,S,M;let a=[_e("discord-button")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[];return k=class extends r{constructor(){super(...arguments);z(this,T,kt(this,o,void 0));z(this,N,(kt(this,d),kt(this,h,"emoji")));z(this,I,(kt(this,c),kt(this,_,void 0)));z(this,S,(kt(this,g),kt(this,m,!1)));z(this,M,(kt(this,u),kt(this,H,"secondary")));ie(this,"validButtonTypes",(kt(this,G),new Set(["primary","secondary","success","destructive"])))}get emoji(){return j(this,T)}set emoji($){C(this,T,$)}get emojiName(){return j(this,N)}set emojiName($){C(this,N,$)}get url(){return j(this,I)}set url($){C(this,I,$)}get disabled(){return j(this,S)}set disabled($){C(this,S,$)}get type(){return j(this,M)}set type($){C(this,M,$)}checkType(){if(this.type){if(typeof this.type!="string")throw new TypeError("DiscordButton `type` prop must be a string.");if(!this.validButtonTypes.has(this.type))throw new RangeError("DiscordButton `type` prop must be one of: 'primary', 'secondary', 'success', 'destructive'")}}checkParentElement(){var $;if((($=this.parentElement)==null?void 0:$.tagName.toLowerCase())!=="discord-action-row")throw new bi("All <discord-button> components must be direct children of <discord-action-row>.")}render(){this.checkType(),this.checkParentElement();const $=this.url&&!this.disabled,b=D`
			${de(this.emoji,()=>D`<img src=${this.emoji} alt=${this.emojiName} draggable="true" class="emoji" />`)}
			<span>
				<slot></slot>
			</span>
			${de(this.url,()=>vo())}
		`;return $?D`<a class="secondary" href=${this.url} target="_blank" rel="noopener noreferrer">${b}</a>`:D`<div
			class=${Lt({[this.type]:!0,disabled:this.disabled,hoverable:!this.disabled})}
		>
			${b}
		</div>`}},T=new WeakMap,N=new WeakMap,I=new WeakMap,S=new WeakMap,M=new WeakMap,e=k,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({reflect:!0,attribute:"emoji"})],l=[E({reflect:!0,attribute:"emoji-name"})],n=[E({reflect:!0,attribute:"url"})],p=[E({type:Boolean,reflect:!0,attribute:"disabled"})],f=[E({reflect:!0,attribute:"type"})],ui(k,null,s,{kind:"accessor",name:"emoji",static:!1,private:!1,access:{has:b=>"emoji"in b,get:b=>b.emoji,set:(b,V)=>{b.emoji=V}},metadata:$},o,d),ui(k,null,l,{kind:"accessor",name:"emojiName",static:!1,private:!1,access:{has:b=>"emojiName"in b,get:b=>b.emojiName,set:(b,V)=>{b.emojiName=V}},metadata:$},h,c),ui(k,null,n,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:b=>"url"in b,get:b=>b.url,set:(b,V)=>{b.url=V}},metadata:$},_,g),ui(k,null,p,{kind:"accessor",name:"disabled",static:!1,private:!1,access:{has:b=>"disabled"in b,get:b=>b.disabled,set:(b,V)=>{b.disabled=V}},metadata:$},m,u),ui(k,null,f,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:b=>"type"in b,get:b=>b.type,set:(b,V)=>{b.type=V}},metadata:$},H,G),ui(null,t={value:e},a,{kind:"class",name:e.name,metadata:$},null,i),e=t.value,$&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),ie(k,"styles",me`
		:host > *:first-child {
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			margin: 4px 8px 4px 0;
			padding: 2px 16px;
			width: auto;
			height: 32px;
			min-width: 60px;
			min-height: 32px;
			-webkit-transition:
				background-color 0.17s ease,
				color 0.17s ease;
			transition:
				background-color 0.17s ease,
				color 0.17s ease;
			border-radius: 3px;
			font-size: 14px;
			font-weight: 500;
			line-height: 16px;
			text-decoration: none !important;
		}

		.success {
			color: #fff;
			background-color: #3ba55d;
		}

		.success.hoverable:hover {
			background-color: #2d7d46;
		}

		.destructive {
			color: #fff;
			background-color: #ed4245;
		}

		.destructive.hoverable:hover {
			background-color: #c03537;
		}

		.primary {
			color: #fff;
			background-color: #5865f2;
		}

		.primary.hoverable:hover {
			background-color: #4752c4;
		}

		.secondary {
			color: #fff;
			background-color: #4f545c;
		}

		.secondary.hoverable:hover {
			background-color: #5d6269;
		}

		.disabled {
			cursor: not-allowed !important;
			opacity: 0.5;
		}

		.launch {
			margin-left: 8px;
		}

		.emoji {
			margin-right: 4px;
			object-fit: contain;
			width: 1.375em;
			height: 1.375em;
			vertical-align: bottom;
		}
	`),kt(e,i),e})();var Ji=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},ti=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var p,m,u,f;let a=[_e("discord-code")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[];return p=class extends r{constructor(){super(...arguments);z(this,m,ti(this,o,!1));z(this,u,(ti(this,d),ti(this,h,!1)));z(this,f,(ti(this,c),ti(this,_,!1)));ti(this,g)}get multiline(){return j(this,m)}set multiline(k){C(this,m,k)}get lightTheme(){return j(this,u)}set lightTheme(k){C(this,u,k)}get embed(){return j(this,f)}set embed(k){C(this,f,k)}render(){return this.multiline?D`<discord-pre ?embed=${this.embed}
				><code><slot></slot></code
			></discord-pre>`:D`<code><slot></slot></code>`}},m=new WeakMap,u=new WeakMap,f=new WeakMap,e=p,(()=>{const k=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({type:Boolean,reflect:!0})],l=[Ne({context:Be,subscribe:!0}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],n=[E({type:Boolean,reflect:!0})],Ji(p,null,s,{kind:"accessor",name:"multiline",static:!1,private:!1,access:{has:T=>"multiline"in T,get:T=>T.multiline,set:(T,N)=>{T.multiline=N}},metadata:k},o,d),Ji(p,null,l,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:T=>"lightTheme"in T,get:T=>T.lightTheme,set:(T,N)=>{T.lightTheme=N}},metadata:k},h,c),Ji(p,null,n,{kind:"accessor",name:"embed",static:!1,private:!1,access:{has:T=>"embed"in T,get:T=>T.embed,set:(T,N)=>{T.embed=N}},metadata:k},_,g),Ji(null,t={value:e},a,{kind:"class",name:e.name,metadata:k},null,i),e=t.value,k&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:k})})(),ie(p,"styles",me`
		:host {
			background-color: #2f3136;
			white-space: break-spaces;
			font-family:
				Consolas,
				Andale Mono WT,
				Andale Mono,
				Lucida Console,
				Lucida Sans Typewriter,
				DejaVu Sans Mono,
				Bitstream Vera Sans Mono,
				Liberation Mono,
				Nimbus Mono L,
				Monaco,
				Courier New,
				Courier,
				monospace;
			border-radius: 3px;
		}

		code {
			padding: 0.2em;
			margin: -0.2em;
			border-radius: 3px;
			border: none;
			font-size: 85%;
			text-indent: 0;
			white-space: pre-wrap;
		}

		:host([multiline]) code {
			display: block;
			width: 90%;
			font-size: 0.875rem;
			line-height: 1.125rem;
			padding: 0.5em;
			background: #2b2d31;
			border: 1px solid #1e1f22;
		}

		:host([embed]) code {
			background-color: #1e1f22;
		}

		:host([embed][multiline]) code {
			display: block;
			width: 100%;
			padding: 7px;
			border-radius: 4px;
			background: #1e1f22;
		}

		:host([light-theme]) code {
			border-color: #e3e5e8;
			background-color: #f2f3f5;
		}

		:host([light-theme][embed]) code {
			background-color: #e3e5e8;
		}
	`),ti(e,i),e})();const bo=xe`
	<path
		fill="currentColor"
		d="M56 50.6667V13.3333C56 10.4 53.6 8 50.6667 8H13.3333C10.4 8 8 10.4 8 13.3333V50.6667C8 53.6 10.4 56 13.3333 56H50.6667C53.6 56 56 53.6 56 50.6667ZM22.6667 36L29.3333 44.0267L38.6667 32L50.6667 48H13.3333L22.6667 36Z"
	/>
`;function yo(a={}){return D`<svg ${$e(a)} aria-hidden="false" width="64" height="64" viewBox="0 0 64 64">${bo}</svg>`}const wo=xe`
	<path
		fill="currentColor"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
	/>
`;function ko(a){return D`<svg ${$e(a||{})} class="discord-command-icon" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
		${wo}
	</svg>`}const xo=xe`
	<path
		d="M0.809739 3.59646L5.12565 0.468433C5.17446 0.431163 5.23323 0.408043 5.2951 0.401763C5.35698 0.395482 5.41943 0.406298 5.4752 0.432954C5.53096 0.45961 5.57776 0.50101 5.61013 0.552343C5.64251 0.603676 5.65914 0.662833 5.6581 0.722939V2.3707C10.3624 2.3707 11.2539 5.52482 11.3991 7.21174C11.4028 7.27916 11.3848 7.34603 11.3474 7.40312C11.3101 7.46021 11.2554 7.50471 11.1908 7.53049C11.1262 7.55626 11.0549 7.56204 10.9868 7.54703C10.9187 7.53201 10.857 7.49695 10.8104 7.44666C8.72224 5.08977 5.6581 5.63359 5.6581 5.63359V7.28135C5.65831 7.34051 5.64141 7.39856 5.60931 7.44894C5.5772 7.49932 5.53117 7.54004 5.4764 7.5665C5.42163 7.59296 5.3603 7.60411 5.29932 7.59869C5.23834 7.59328 5.18014 7.57151 5.13128 7.53585L0.809739 4.40892C0.744492 4.3616 0.691538 4.30026 0.655067 4.22975C0.618596 4.15925 0.599609 4.08151 0.599609 4.00269C0.599609 3.92386 0.618596 3.84612 0.655067 3.77562C0.691538 3.70511 0.744492 3.64377 0.809739 3.59646Z"
		fill="currentColor"
	/>
`;function $o(a={}){return D`<svg ${$e(a)} class="discord-reply-icon" aria-hidden="false" width="12" height="8" viewBox="0 0 12 8">${xo}</svg>`}var st=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Se=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};let To=(()=>{var U,Ge,Ke,tt,vt,St,v,y,w,B,X,se,ne,ae,be,ze;let a=[_e("discord-reply")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[],k,T=[],N=[],I,S=[],M=[],Y,fe=[],$=[],b,V=[],pe=[],ee,Q=[],ye=[],J,P=[],O=[],K,je=[],q=[],Z,ce=[],Ee=[],Me,Ce=[],Qe=[],ot,A=[],x=[];return U=class extends r{constructor(){super(...arguments);z(this,Ge,Se(this,o,void 0));z(this,Ke,(Se(this,d),Se(this,h,"User")));z(this,tt,(Se(this,c),Se(this,_,void 0)));z(this,vt,(Se(this,g),Se(this,m,!1)));z(this,St,(Se(this,u),Se(this,H,!1)));z(this,v,(Se(this,G),Se(this,T,!1)));z(this,y,(Se(this,N),Se(this,S,!1)));z(this,w,(Se(this,M),Se(this,fe,!1)));z(this,B,(Se(this,$),Se(this,V,void 0)));z(this,X,(Se(this,pe),Se(this,Q,!1)));z(this,se,(Se(this,ye),Se(this,P,!1)));z(this,ne,(Se(this,O),Se(this,je,!1)));z(this,ae,(Se(this,q),Se(this,ce,!1)));z(this,be,(Se(this,Ee),Se(this,Ce,!1)));z(this,ze,(Se(this,Qe),Se(this,A,!1)));Se(this,x)}get profile(){return j(this,Ge)}set profile(F){C(this,Ge,F)}get author(){return j(this,Ke)}set author(F){C(this,Ke,F)}get avatar(){return j(this,tt)}set avatar(F){C(this,tt,F)}get bot(){return j(this,vt)}set bot(F){C(this,vt,F)}get server(){return j(this,St)}set server(F){C(this,St,F)}get op(){return j(this,v)}set op(F){C(this,v,F)}get verified(){return j(this,y)}set verified(F){C(this,y,F)}get edited(){return j(this,w)}set edited(F){C(this,w,F)}get roleColor(){return j(this,B)}set roleColor(F){C(this,B,F)}get command(){return j(this,X)}set command(F){C(this,X,F)}get attachment(){return j(this,se)}set attachment(F){C(this,se,F)}get mentions(){return j(this,ne)}set mentions(F){C(this,ne,F)}get deleted(){return j(this,ae)}set deleted(F){C(this,ae,F)}get lightTheme(){return j(this,be)}set lightTheme(F){C(this,be,F)}get compactMode(){return j(this,ze)}set compactMode(F){C(this,ze,F)}resolveAvatar(F){return Ht[F]??F??Ht.default}render(){const F={author:this.author,bot:this.bot,verified:this.verified,op:this.op,server:this.server,roleColor:this.roleColor},R=Reflect.get(pa,this.profile)??{},te={...F,...R,avatar:this.resolveAvatar(R.avatar??this.avatar)},Le=D`
			${de(te.bot&&!te.server,()=>D`<span class="discord-application-tag">${te.verified?ar():""}App</span>`)}
			${de(te.server&&!te.bot,()=>D`<span class="discord-application-tag">Server</span>`)}
			${de(te.op,()=>D`<span class="discord-application-tag discord-application-tag-op">OP</span>`)}
		`;return D`${de(this.compactMode||this.deleted,()=>D`<div class="discord-reply-badge">${$o()}</div>`,()=>D`<img class="discord-replied-message-avatar" src="${le(te.avatar)}" alt="${le(te.author)}" />`)}
		${de(this.deleted,()=>D`<div class="discord-replied-deleted-message-content"><em>Original message was deleted</em></div>`,()=>D`${Le}
					<span class="discord-replied-message-username" style=${di({color:te.roleColor})}
						>${de(this.mentions,()=>"@")}${te.author}</span
					>
					<!-- display: inline -->
					<div class="discord-replied-message-content"
						><slot></slot>${de(this.edited,()=>D`<span class="discord-message-edited">(edited)</span>`)}</div
					>
					${de(this.command,()=>ko({class:"discord-replied-message-content-icon"}),()=>de(this.attachment,()=>yo({class:"discord-replied-message-content-icon"})))}`)}`}},Ge=new WeakMap,Ke=new WeakMap,tt=new WeakMap,vt=new WeakMap,St=new WeakMap,v=new WeakMap,y=new WeakMap,w=new WeakMap,B=new WeakMap,X=new WeakMap,se=new WeakMap,ne=new WeakMap,ae=new WeakMap,be=new WeakMap,ze=new WeakMap,e=U,(()=>{const F=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E()],l=[E()],n=[E()],p=[E({type:Boolean})],f=[E({type:Boolean})],k=[E({type:Boolean})],I=[E({type:Boolean})],Y=[E({type:Boolean})],b=[E()],ee=[E({type:Boolean})],J=[E({type:Boolean})],K=[E({type:Boolean})],Z=[E({type:Boolean,reflect:!0})],Me=[Ne({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],ot=[Ne({context:Gi}),E({type:Boolean,reflect:!0,attribute:"compact-mode"})],st(U,null,s,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:R=>"profile"in R,get:R=>R.profile,set:(R,te)=>{R.profile=te}},metadata:F},o,d),st(U,null,l,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:R=>"author"in R,get:R=>R.author,set:(R,te)=>{R.author=te}},metadata:F},h,c),st(U,null,n,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:R=>"avatar"in R,get:R=>R.avatar,set:(R,te)=>{R.avatar=te}},metadata:F},_,g),st(U,null,p,{kind:"accessor",name:"bot",static:!1,private:!1,access:{has:R=>"bot"in R,get:R=>R.bot,set:(R,te)=>{R.bot=te}},metadata:F},m,u),st(U,null,f,{kind:"accessor",name:"server",static:!1,private:!1,access:{has:R=>"server"in R,get:R=>R.server,set:(R,te)=>{R.server=te}},metadata:F},H,G),st(U,null,k,{kind:"accessor",name:"op",static:!1,private:!1,access:{has:R=>"op"in R,get:R=>R.op,set:(R,te)=>{R.op=te}},metadata:F},T,N),st(U,null,I,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:R=>"verified"in R,get:R=>R.verified,set:(R,te)=>{R.verified=te}},metadata:F},S,M),st(U,null,Y,{kind:"accessor",name:"edited",static:!1,private:!1,access:{has:R=>"edited"in R,get:R=>R.edited,set:(R,te)=>{R.edited=te}},metadata:F},fe,$),st(U,null,b,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:R=>"roleColor"in R,get:R=>R.roleColor,set:(R,te)=>{R.roleColor=te}},metadata:F},V,pe),st(U,null,ee,{kind:"accessor",name:"command",static:!1,private:!1,access:{has:R=>"command"in R,get:R=>R.command,set:(R,te)=>{R.command=te}},metadata:F},Q,ye),st(U,null,J,{kind:"accessor",name:"attachment",static:!1,private:!1,access:{has:R=>"attachment"in R,get:R=>R.attachment,set:(R,te)=>{R.attachment=te}},metadata:F},P,O),st(U,null,K,{kind:"accessor",name:"mentions",static:!1,private:!1,access:{has:R=>"mentions"in R,get:R=>R.mentions,set:(R,te)=>{R.mentions=te}},metadata:F},je,q),st(U,null,Z,{kind:"accessor",name:"deleted",static:!1,private:!1,access:{has:R=>"deleted"in R,get:R=>R.deleted,set:(R,te)=>{R.deleted=te}},metadata:F},ce,Ee),st(U,null,Me,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:R=>"lightTheme"in R,get:R=>R.lightTheme,set:(R,te)=>{R.lightTheme=te}},metadata:F},Ce,Qe),st(U,null,ot,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:R=>"compactMode"in R,get:R=>R.compactMode,set:(R,te)=>{R.compactMode=te}},metadata:F},A,x),st(null,t={value:e},a,{kind:"class",name:e.name,metadata:F},null,i),e=t.value,F&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:F})})(),ie(U,"styles",me`
		:host {
			color: #b9bbbe;
			display: flex;
			font-size: 0.875rem;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;

			padding-top: 2px;
			margin-left: 56px;
			margin-bottom: 4px;
			align-items: center;
			line-height: 1.125rem;
			position: relative;
			white-space: pre;
			user-select: none;
		}

		:host([light-theme]) {
			color: #4f5660;
		}

		:host([compact-mode]),
		:host([deleted]) {
			margin-left: 62px;
			margin-bottom: 0;
		}

		:host:before {
			content: '';
			display: block;
			position: absolute;
			top: 50%;
			right: 100%;
			bottom: 0;
			left: -36px;
			margin-right: 4px;
			margin-top: -1px;
			margin-left: -1px;
			margin-bottom: -2px;
			border-left: 2px solid #4f545c;
			border-bottom: 0 solid #4f545c;
			border-right: 0 solid #4f545c;
			border-top: 2px solid #4f545c;
			border-top-left-radius: 6px;
		}

		:host([light-theme]):before {
			border-color: #747f8d;
		}

		.discord-replied-message-avatar,
		.discord-reply-badge {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			user-select: none;
			margin-right: 0.25rem;
		}

		.discord-reply-badge {
			display: flex;
			align-items: center;
			justify-content: center;
			color: #b9bbbe;
			background: #202225;
		}

		:host([light-theme]) .discord-reply-badge {
			color: #4f5660;
			background: #e3e5e8;
		}

		.discord-application-tag {
			background-color: hsl(235, 85.6%, 64.7%);
			color: #fff;
			font-size: 0.625rem;
			margin-right: 0.25rem;
			line-height: 100%;
			text-transform: uppercase;

			/* Use flex layout to ensure both verified icon and "BOT" text are aligned to center */
			display: flex;
			align-items: center;

			/* Styling taken through Inspect Element on Discord client for Windows */
			height: 0.9375rem;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			border-radius: 0.1875rem;
		}

		:host([compact-mode]) .discord-application-tag {
			margin-right: 0.25rem;
		}

		.discord-application-tag .discord-application-tag-verified {
			width: 0.9375rem;
			height: 0.9375rem;
			margin-left: -0.1rem;
		}

		.discord-application-tag.discord-application-tag-op {
			background-color: #c9cdfb;
			color: #4752c4;
			border-radius: 0.4rem;
		}

		.discord-replied-message-username {
			flex-shrink: 0;
			font-size: inherit;
			line-height: inherit;
			margin-right: 0.25rem;
			opacity: 0.64;
			font-weight: 500;
			color: #fff;
		}

		.discord-replied-message-username:hover {
			text-decoration: underline;
			cursor: pointer;
		}

		.discord-replied-message-content {
			color: inherit;
			font-size: inherit;
			line-height: inherit;
			white-space: pre;
			text-overflow: ellipsis;
			user-select: none;
			cursor: pointer;
		}

		.discord-replied-deleted-message-content {
			color: inherit;
			font-size: inherit;
			line-height: inherit;
			white-space: pre;
			text-overflow: ellipsis;
		}

		.discord-message-edited {
			color: #72767d;
			font-size: 10px;
		}

		:host([light-theme]) .discord-message-edited {
			color: #99aab5;
		}

		.discord-replied-message-content:hover {
			color: #fff;
		}

		:host([light-theme]) .discord-replied-message-content:hover {
			color: #000;
		}

		:host .discord-replied-message-content .discord-message-edited {
			margin-left: 0.25rem;
		}

		.discord-replied-message-content-icon {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			width: 20px;
			height: 20px;
			margin-left: 4px;
		}
	`),Se(e,i),e})();const jo=xe`
	<path d="M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z" fill="currentColor" />
`;function zo(a={}){return D`<svg ${$e(a)} class="discord-command-icon" aria-hidden="false" width="6" height="10" viewBox="0 0 6 10" fill="none">
		${jo}
	</svg>`}var Zt=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},dt=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var Y,fe,$,b,V,pe,ee,Q;let a=[_e("discord-command")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[],k,T=[],N=[],I,S=[],M=[];return Y=class extends r{constructor(){super(...arguments);z(this,fe,dt(this,o,void 0));z(this,$,(dt(this,d),dt(this,h,"User")));z(this,b,(dt(this,c),dt(this,_,void 0)));z(this,V,(dt(this,g),dt(this,m,void 0)));z(this,pe,(dt(this,u),dt(this,H,void 0)));z(this,ee,(dt(this,G),dt(this,T,!1)));z(this,Q,(dt(this,N),dt(this,S,!1)));dt(this,M)}get profile(){return j(this,fe)}set profile(P){C(this,fe,P)}get author(){return j(this,$)}set author(P){C(this,$,P)}get avatar(){return j(this,b)}set avatar(P){C(this,b,P)}get roleColor(){return j(this,V)}set roleColor(P){C(this,V,P)}get command(){return j(this,pe)}set command(P){C(this,pe,P)}get compactMode(){return j(this,ee)}set compactMode(P){C(this,ee,P)}get lightTheme(){return j(this,Q)}set lightTheme(P){C(this,Q,P)}resolveAvatar(P){return Ht[P]??P??Ht.default}render(){const P={author:this.author,bot:!1,verified:!1,server:!1,roleColor:this.roleColor},O=Reflect.get(pa,this.profile)??{},K={...P,...O,avatar:this.resolveAvatar(O.avatar??this.avatar)};return D`
			${de(this.compactMode,()=>D`<div class="discord-reply-badge">${zo()}</div>`,()=>D`<img class="discord-replied-message-avatar" src="${le(K.avatar)}" alt="${le(K.author)}" />`)}
			<span class="discord-replied-message-username" style=${di({color:K.roleColor??""})}>${K.author}</span>
			<span> used </span>
			<div class="discord-replied-message-content discord-command-name">${this.command}</div>
		`}},fe=new WeakMap,$=new WeakMap,b=new WeakMap,V=new WeakMap,pe=new WeakMap,ee=new WeakMap,Q=new WeakMap,e=Y,(()=>{const P=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({attribute:"profile"})],l=[E({attribute:"author"})],n=[E({attribute:"avatar"})],p=[E({attribute:"role-color"})],f=[E({attribute:"command"})],k=[Ne({context:Gi}),E({type:Boolean,reflect:!0,attribute:"compact-mode"})],I=[Ne({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],Zt(Y,null,s,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:O=>"profile"in O,get:O=>O.profile,set:(O,K)=>{O.profile=K}},metadata:P},o,d),Zt(Y,null,l,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:O=>"author"in O,get:O=>O.author,set:(O,K)=>{O.author=K}},metadata:P},h,c),Zt(Y,null,n,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:O=>"avatar"in O,get:O=>O.avatar,set:(O,K)=>{O.avatar=K}},metadata:P},_,g),Zt(Y,null,p,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:O=>"roleColor"in O,get:O=>O.roleColor,set:(O,K)=>{O.roleColor=K}},metadata:P},m,u),Zt(Y,null,f,{kind:"accessor",name:"command",static:!1,private:!1,access:{has:O=>"command"in O,get:O=>O.command,set:(O,K)=>{O.command=K}},metadata:P},H,G),Zt(Y,null,k,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:O=>"compactMode"in O,get:O=>O.compactMode,set:(O,K)=>{O.compactMode=K}},metadata:P},T,N),Zt(Y,null,I,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:O=>"lightTheme"in O,get:O=>O.lightTheme,set:(O,K)=>{O.lightTheme=K}},metadata:P},S,M),Zt(null,t={value:e},a,{kind:"class",name:e.name,metadata:P},null,i),e=t.value,P&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:P})})(),ie(Y,"styles",[To.styles,me`
			:host .discord-command-name {
				color: #00aff4;
				font-weight: 500;
			}

			:host .discord-command-name:hover {
				color: #00aff4;
				text-decoration: underline;
			}

			:host .discord-replied-message-username {
				margin-right: 0;
			}
		`]),dt(e,i),e})();var Li=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Pt=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var f,H,G,k,T;let a=[_e("discord-custom-emoji")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[];return f=class extends r{constructor(){super(...arguments);z(this,H,Pt(this,o,void 0));z(this,G,(Pt(this,d),Pt(this,h,void 0)));z(this,k,(Pt(this,c),Pt(this,_,{})));z(this,T,(Pt(this,g),Pt(this,m,void 0)));Pt(this,u)}get name(){return j(this,H)}set name(S){C(this,H,S)}get url(){return j(this,G)}set url(S){C(this,G,S)}get customEmojisMap(){return j(this,k)}set customEmojisMap(S){C(this,k,S)}get embedEmoji(){return j(this,T)}set embedEmoji(S){C(this,T,S)}willUpdate(){if(!this.url&&this.name){const S=rr(this.name)??this.customEmojisMap[this.name];S&&(this.url??(this.url=S.url??""),this.embedEmoji??(this.embedEmoji=S.embedEmoji??!1))}}render(){const S=`:${this.name}:`,M=this.embedEmoji?"discord-embed-custom-emoji":"discord-custom-emoji",Y=this.embedEmoji?"discord-embed-custom-emoji-image":"discord-custom-emoji-image";return D`<span class="${M}"
			><img aria-label=${S} src=${le(this.url)} alt=${S} draggable="false" class="${Y}"
		/></span> `}},H=new WeakMap,G=new WeakMap,k=new WeakMap,T=new WeakMap,e=f,(()=>{const S=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E()],l=[E()],n=[E({attribute:!1})],p=[E({type:Boolean,attribute:"embed-emoji"})],Li(f,null,s,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:M=>"name"in M,get:M=>M.name,set:(M,Y)=>{M.name=Y}},metadata:S},o,d),Li(f,null,l,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:M=>"url"in M,get:M=>M.url,set:(M,Y)=>{M.url=Y}},metadata:S},h,c),Li(f,null,n,{kind:"accessor",name:"customEmojisMap",static:!1,private:!1,access:{has:M=>"customEmojisMap"in M,get:M=>M.customEmojisMap,set:(M,Y)=>{M.customEmojisMap=Y}},metadata:S},_,g),Li(f,null,p,{kind:"accessor",name:"embedEmoji",static:!1,private:!1,access:{has:M=>"embedEmoji"in M,get:M=>M.embedEmoji,set:(M,Y)=>{M.embedEmoji=Y}},metadata:S},m,u),Li(null,t={value:e},a,{kind:"class",name:e.name,metadata:S},null,i),e=t.value,S&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:S})})(),ie(f,"styles",me`
		.discord-custom-emoji {
			display: inline-block;
			cursor: pointer;
		}

		.discord-custom-emoji .discord-custom-emoji-image {
			object-fit: contain;
			width: 1.375rem;
			height: 1.375rem;
			vertical-align: bottom;
		}

		.discord-embed-custom-emoji {
			display: inline-block;
		}

		.discord-embed-custom-emoji .discord-embed-custom-emoji-image {
			width: 18px;
			height: 18px;
			vertical-align: bottom;
		}
	`),Pt(e,i),e})();var ft=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Re=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var Z,ce,Ee,Me,Ce,Qe,ot,A,x,U,Ge,Ke,tt;let a=[_e("discord-embed")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[],k,T=[],N=[],I,S=[],M=[],Y,fe=[],$=[],b,V=[],pe=[],ee,Q=[],ye=[],J,P=[],O=[],K,je=[],q=[];return Z=class extends r{constructor(){super(...arguments);z(this,ce,Re(this,o,void 0));z(this,Ee,(Re(this,d),Re(this,h,void 0)));z(this,Me,(Re(this,c),Re(this,_,void 0)));z(this,Ce,(Re(this,g),Re(this,m,void 0)));z(this,Qe,(Re(this,u),Re(this,H,void 0)));z(this,ot,(Re(this,G),Re(this,T,{})));z(this,A,(Re(this,N),Re(this,S,void 0)));z(this,x,(Re(this,M),Re(this,fe,void 0)));z(this,U,(Re(this,$),Re(this,V,void 0)));z(this,Ge,(Re(this,pe),Re(this,Q,void 0)));z(this,Ke,(Re(this,ye),Re(this,P,void 0)));z(this,tt,(Re(this,O),Re(this,je,!1)));Re(this,q)}get color(){return j(this,ce)}set color(v){C(this,ce,v)}get authorName(){return j(this,Ee)}set authorName(v){C(this,Ee,v)}get authorImage(){return j(this,Me)}set authorImage(v){C(this,Me,v)}get authorUrl(){return j(this,Ce)}set authorUrl(v){C(this,Ce,v)}get embedTitle(){return j(this,Qe)}set embedTitle(v){C(this,Qe,v)}get embedEmojisMap(){return j(this,ot)}set embedEmojisMap(v){C(this,ot,v)}get url(){return j(this,A)}set url(v){C(this,A,v)}get thumbnail(){return j(this,x)}set thumbnail(v){C(this,x,v)}get image(){return j(this,U)}set image(v){C(this,U,v)}get video(){return j(this,Ge)}set video(v){C(this,Ge,v)}get provider(){return j(this,Ke)}set provider(v){C(this,Ke,v)}get lightTheme(){return j(this,tt)}set lightTheme(v){C(this,tt,v)}render(){const v=this.parseTitle(this.authorName),y=this.parseTitle(this.embedTitle);return D`<div style=${di({"background-color":this.color})} class="discord-left-border"></div>
			<div class="discord-embed-root">
				<div class="discord-embed-wrapper">
					<div class="discord-embed-grid">
						${de(this.provider,()=>D`<div class="discord-embed-provider">${this.provider}</div>`)}
						${de(v,()=>D`<div class="discord-embed-author">
									${de(this.authorImage,()=>D`<img src=${le(this.authorImage)} alt="" class="discord-author-image" />`)}
									${de(this.authorUrl,()=>D`<a
												href=${le(this.authorUrl)}
												target="_blank"
												rel="noopener noreferrer"
												class="discord-embed-author-block"
											>
												<span class="discord-embed-author-block">${v}</span>
											</a>`,()=>D`<span class="discord-embed-author-block">${v}</span>`)}
								</div>`)}
						${de(y,()=>D`<div class="discord-embed-title">
									${this.url?D`<a href="${this.url}" target="_blank" rel="noopener noreferrer"> ${y} </a>`:D`${y}`}
								</div>`)}
						<slot name="description"></slot>
						<slot name="fields"></slot>
						${de(this.image||this.video,()=>D`<div class=${Lt({"discord-embed-media":!0,"discord-embed-media-video":!!this.video})}>
									${this.renderMedia()}
								</div>`)}
						${de(this.thumbnail,()=>D`<img src=${le(this.thumbnail)} alt="" class="discord-embed-thumbnail" />`)}
						<slot name="footer"></slot>
					</div>
				</div>
			</div>`}renderMedia(){return this.video?D`
				<video
					controls
					muted
					preload="none"
					poster=${le(this.image)}
					src=${le(this.video)}
					height="225"
					width="400"
					class="discord-embed-video"
				>
					<img src=${le(this.image)} alt="Discord embed media" class="discord-embed-image" />
				</video>
			`:this.image?D`<img src=${le(this.image)} alt="Discord embed media" class="discord-embed-image" />`:null}parseTitle(v){if(!v)return null;const y=[];let w="";for(const B of v.split(`
`)){for(const X of B.split(" ")){const se=rr(X)??this.embedEmojisMap[X]??{};se.name?y.push(D`<discord-custom-emoji name=${se.name} url=${le(se.url)} embed-emoji></discord-custom-emoji>`):w+=`${X} `,w===" "&&y.push(D`<br />`)}y.push(w),w=""}return y.map(B=>typeof B=="string"?D`<div>${B}</div>`:B)}},ce=new WeakMap,Ee=new WeakMap,Me=new WeakMap,Ce=new WeakMap,Qe=new WeakMap,ot=new WeakMap,A=new WeakMap,x=new WeakMap,U=new WeakMap,Ge=new WeakMap,Ke=new WeakMap,tt=new WeakMap,e=Z,(()=>{const v=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E()],l=[E({attribute:"author-name"})],n=[E({attribute:"author-image"})],p=[E({attribute:"author-url"})],f=[E({attribute:"embed-title"})],k=[E({attribute:!1})],I=[E()],Y=[E()],b=[E()],ee=[E()],J=[E()],K=[Ne({context:Be,subscribe:!0}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],ft(Z,null,s,{kind:"accessor",name:"color",static:!1,private:!1,access:{has:y=>"color"in y,get:y=>y.color,set:(y,w)=>{y.color=w}},metadata:v},o,d),ft(Z,null,l,{kind:"accessor",name:"authorName",static:!1,private:!1,access:{has:y=>"authorName"in y,get:y=>y.authorName,set:(y,w)=>{y.authorName=w}},metadata:v},h,c),ft(Z,null,n,{kind:"accessor",name:"authorImage",static:!1,private:!1,access:{has:y=>"authorImage"in y,get:y=>y.authorImage,set:(y,w)=>{y.authorImage=w}},metadata:v},_,g),ft(Z,null,p,{kind:"accessor",name:"authorUrl",static:!1,private:!1,access:{has:y=>"authorUrl"in y,get:y=>y.authorUrl,set:(y,w)=>{y.authorUrl=w}},metadata:v},m,u),ft(Z,null,f,{kind:"accessor",name:"embedTitle",static:!1,private:!1,access:{has:y=>"embedTitle"in y,get:y=>y.embedTitle,set:(y,w)=>{y.embedTitle=w}},metadata:v},H,G),ft(Z,null,k,{kind:"accessor",name:"embedEmojisMap",static:!1,private:!1,access:{has:y=>"embedEmojisMap"in y,get:y=>y.embedEmojisMap,set:(y,w)=>{y.embedEmojisMap=w}},metadata:v},T,N),ft(Z,null,I,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:y=>"url"in y,get:y=>y.url,set:(y,w)=>{y.url=w}},metadata:v},S,M),ft(Z,null,Y,{kind:"accessor",name:"thumbnail",static:!1,private:!1,access:{has:y=>"thumbnail"in y,get:y=>y.thumbnail,set:(y,w)=>{y.thumbnail=w}},metadata:v},fe,$),ft(Z,null,b,{kind:"accessor",name:"image",static:!1,private:!1,access:{has:y=>"image"in y,get:y=>y.image,set:(y,w)=>{y.image=w}},metadata:v},V,pe),ft(Z,null,ee,{kind:"accessor",name:"video",static:!1,private:!1,access:{has:y=>"video"in y,get:y=>y.video,set:(y,w)=>{y.video=w}},metadata:v},Q,ye),ft(Z,null,J,{kind:"accessor",name:"provider",static:!1,private:!1,access:{has:y=>"provider"in y,get:y=>y.provider,set:(y,w)=>{y.provider=w}},metadata:v},P,O),ft(Z,null,K,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:y=>"lightTheme"in y,get:y=>y.lightTheme,set:(y,w)=>{y.lightTheme=w}},metadata:v},je,q),ft(null,t={value:e},a,{kind:"class",name:e.name,metadata:v},null,i),e=t.value,v&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:v})})(),ie(Z,"styles",me`
		:host {
			color: #dcddde;
			display: flex;
			font-size: 13px;
			line-height: 150%;
			margin-bottom: 8px;
			margin-top: 8px;
		}

		:host([light-theme]) {
			color: #2e3338;
		}

		:host .discord-left-border {
			background-color: #202225;
			border-radius: 4px 0 0 4px;
			flex-shrink: 0;
			width: 4px;
		}

		:host([light-theme]) .discord-left-border {
			background-color: #e3e5e8;
		}

		:host .discord-embed-root {
			display: grid;
			grid-auto-flow: row;
			grid-row-gap: 0.25rem;
			min-height: 0;
			min-width: 0;
			text-indent: 0;
		}

		:host .discord-embed-wrapper {
			background-color: #2f3136;
			max-width: 520px;
			border: 1px solid rgba(46, 48, 54, 0.6);
			border-radius: 0 4px 4px 0;
			justify-self: start;
			align-self: start;
			display: grid;
			box-sizing: border-box;
		}

		:host([light-theme]) .discord-embed-wrapper {
			background-color: rgb(242, 243, 245);
			border-color: rgba(205, 205, 205, 0.3);
		}

		:host .discord-embed-wrapper .discord-embed-grid {
			display: inline-grid;
			grid-template-columns: auto -webkit-min-content;
			grid-template-columns: auto min-content;
			grid-template-columns: auto;
			grid-template-rows: auto;
			padding: 0.5rem 1rem 1rem 0.75rem;
		}

		:host .discord-embed-thumbnail {
			border-radius: 4px;
			flex-shrink: 0;
			grid-column: 2/2;
			grid-row: 1/8;
			justify-self: end;
			margin-left: 16px;
			margin-top: 8px;
			max-height: 80px;
			max-width: 80px;
			object-fit: contain;
			object-position: top center;
		}

		:host .discord-embed-author {
			-webkit-box-align: center;
			align-items: center;
			color: #fff;
			font-size: 14px;
			display: flex;
			font-weight: 600;
			grid-column: 1 / 1;
			margin-top: 8px;
			min-width: 0;
		}

		:host([light-theme]) .discord-embed-author {
			color: #060607;
		}

		:host .discord-embed-author a {
			color: #fff;
			font-weight: 600;
			text-decoration: none;
		}

		:host .discord-embed-author a:hover {
			text-decoration: underline;
		}

		:host([light-theme]) .discord-embed-author a {
			color: #060607;
		}

		:host .discord-embed-author .discord-author-image {
			border-radius: 50%;
			height: 24px;
			margin-right: 8px;
			width: 24px;
		}

		:host .discord-embed-author-block,
		:host .discord-embed-author-block > span {
			max-width: 95%;
		}

		:host .discord-embed-provider {
			font-size: 0.75rem;
			line-height: 1rem;
			font-weight: 400;
			grid-column: 1/1;
			margin-top: 8px;
			unicode-bidi: plaintext;
			text-align: left;
		}

		:host([light-theme]) .discord-embed-provider {
			color: #4f545c;
		}

		:host .discord-embed-title {
			-webkit-box-align: center;
			align-items: center;
			color: #fff;
			display: inline-block;
			font-size: 1rem;
			font-weight: 600;
			grid-column: 1 / 1;
			margin-top: 8px;
			min-width: 0;
		}

		:host([light-theme]) .discord-embed-title {
			color: #060607;
		}

		:host .discord-embed-title a {
			color: #00aff4;
			font-weight: 600;
			text-decoration: none;
		}

		:host .discord-embed-title a:hover {
			text-decoration: underline;
		}

		:host .discord-embed-image {
			border-radius: 4px;
			max-width: 100%;
		}

		:host .discord-embed-media {
			border-radius: 4px;
			contain: paint;
			display: block;
			grid-column: 1/1;
			margin-top: 16px;
		}

		:host .discord-embed-media.discord-embed-media-video {
			height: 225px;
		}

		:host .discord-embed.media .discord-embed-image {
			overflow: hidden;
			position: relative;
			user-select: text;
		}

		:host .discord-embed-media .discord-embed-video {
			-webkit-box-align: center;
			-webkit-box-pack: center;
			align-items: center;
			border-radius: 0;
			cursor: pointer;
			display: flex;
			height: 100%;
			justify-content: center;
			max-height: 100%;
			width: 100%;

			width: 400px;
			height: 225px;
			left: 0px;
			top: 0px;
		}

		.discord-embed-custom-emoji {
			display: inline-block;
		}

		.discord-embed-custom-emoji .discord-embed-custom-emoji-image {
			width: 18px;
			height: 18px;
			vertical-align: bottom;
		}

		slot[name='footer']::slotted(*) {
			grid-column: 1/3;
			grid-row: auto/auto;
		}
	`),Re(e,i),e})();var Co=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Eo=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var s;let a=[_e("discord-embed-description")],t,i=[],e,r=he;return s=class extends r{render(){return D`<slot></slot>`}},e=s,(()=>{const d=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;Co(null,t={value:e},a,{kind:"class",name:e.name,metadata:d},null,i),e=t.value,d&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d})})(),ie(s,"styles",me`
		:host {
			font-size: 0.875rem;
			font-weight: 400;
			grid-column: 1/1;
			line-height: 1.125rem;
			margin-top: 8px;
			min-width: 0;
		}
	`),Eo(e,i),e})();var hi=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},xt=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var k,T,N,I,S,M;let a=[_e("discord-embed-field")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[];return k=class extends r{constructor(){super(...arguments);z(this,T,xt(this,o,void 0));z(this,N,(xt(this,d),xt(this,h,{})));z(this,I,(xt(this,c),xt(this,_,!1)));z(this,S,(xt(this,g),xt(this,m,1)));z(this,M,(xt(this,u),xt(this,H,!1)));ie(this,"validInlineIndices",(xt(this,G),new Set([1,2,3])))}get fieldTitle(){return j(this,T)}set fieldTitle($){C(this,T,$)}get embedFieldEmojisMap(){return j(this,N)}set embedFieldEmojisMap($){C(this,N,$)}get inline(){return j(this,I)}set inline($){C(this,I,$)}get inlineIndex(){return j(this,S)}set inlineIndex($){C(this,S,$)}get lightTheme(){return j(this,M)}set lightTheme($){C(this,M,$)}checkInlineIndex(){if(this.inlineIndex){const $=Number(this.inlineIndex);if(!Number.isNaN($)&&!this.validInlineIndices.has($))throw new RangeError("DiscordEmbedField `inlineIndex` prop must be one of: 1, 2, or 3")}}render(){this.checkInlineIndex();const $=this.parseTitle(this.fieldTitle),b=de($,()=>D`<div class="discord-field-title">${[...$]}</div>`);return D`${b}<slot></slot>`}parseTitle($){if(!$)return null;const b=[];let V="";for(const pe of $.split(`
`)){for(const ee of pe.split(" ")){const Q=rr(ee)??this.embedFieldEmojisMap[ee]??{};Q.name?b.push(D`<discord-custom-emoji name=${Q.name} url=${le(Q.url)} embed-emoji></discord-custom-emoji>`):V+=`${ee} `,V===" "&&b.push(D`<br />`)}b.push(V),V=""}return b.map(pe=>typeof pe=="string"?D`<div>${pe}</div>`:pe)}},T=new WeakMap,N=new WeakMap,I=new WeakMap,S=new WeakMap,M=new WeakMap,e=k,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({reflect:!0,attribute:"field-title"})],l=[E({attribute:!1})],n=[E({type:Boolean,reflect:!0,attribute:"inline"})],p=[E({type:Number,reflect:!0,attribute:"inline-index"})],f=[Ne({context:Be,subscribe:!0}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],hi(k,null,s,{kind:"accessor",name:"fieldTitle",static:!1,private:!1,access:{has:b=>"fieldTitle"in b,get:b=>b.fieldTitle,set:(b,V)=>{b.fieldTitle=V}},metadata:$},o,d),hi(k,null,l,{kind:"accessor",name:"embedFieldEmojisMap",static:!1,private:!1,access:{has:b=>"embedFieldEmojisMap"in b,get:b=>b.embedFieldEmojisMap,set:(b,V)=>{b.embedFieldEmojisMap=V}},metadata:$},h,c),hi(k,null,n,{kind:"accessor",name:"inline",static:!1,private:!1,access:{has:b=>"inline"in b,get:b=>b.inline,set:(b,V)=>{b.inline=V}},metadata:$},_,g),hi(k,null,p,{kind:"accessor",name:"inlineIndex",static:!1,private:!1,access:{has:b=>"inlineIndex"in b,get:b=>b.inlineIndex,set:(b,V)=>{b.inlineIndex=V}},metadata:$},m,u),hi(k,null,f,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:b=>"lightTheme"in b,get:b=>b.lightTheme,set:(b,V)=>{b.lightTheme=V}},metadata:$},H,G),hi(null,t={value:e},a,{kind:"class",name:e.name,metadata:$},null,i),e=t.value,$&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),ie(k,"styles",me`
		:host {
			font-size: 0.875rem;
			line-height: 1.125rem;
			min-width: 0;
			font-weight: 400;
			grid-column: 1/13;
			word-break: break-word;
		}

		:host .discord-field-title {
			color: #ffffff;
			font-weight: 600;
			font-size: 0.875rem;
			line-height: 1.125rem;
			min-width: 0;
			margin-bottom: 2px;
		}

		:host .discord-inline-field {
			flex-grow: 1;
			flex-basis: auto;
			min-width: 150px;
		}

		:host([light-theme]) .discord-field-title {
			color: #313338;
		}
	`),xt(e,i),e})();var Mo=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},So=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var s;let a=[_e("discord-embed-fields")],t,i=[],e,r=he;return s=class extends r{render(){return D`<slot></slot>`}},e=s,(()=>{const d=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;Mo(null,t={value:e},a,{kind:"class",name:e.name,metadata:d},null,i),e=t.value,d&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d})})(),ie(s,"styles",me`
		:host {
			display: grid;
			grid-column: 1/1;
			margin-top: 8px;
			grid-gap: 8px;
		}

		::slotted([inline-index='1']) {
			grid-column: 1/5 !important;
		}

		::slotted([inline-index='2']) {
			grid-column: 5/9 !important;
		}

		::slotted([inline-index='3']) {
			grid-column: 9/13 !important;
		}
	`),So(e,i),e})();var Ni=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},It=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var f,H,G,k,T;let a=[_e("discord-embed-footer")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[];return f=class extends r{constructor(){super(...arguments);z(this,H,It(this,o,void 0));z(this,G,(It(this,d),It(this,h,void 0)));z(this,k,(It(this,c),It(this,_,void 0)));z(this,T,(It(this,g),It(this,m,!1)));It(this,u)}get footerImage(){return j(this,H)}set footerImage(S){C(this,H,S)}get footerImageAlt(){return j(this,G)}set footerImageAlt(S){C(this,G,S)}get timestamp(){return j(this,k)}set timestamp(S){C(this,k,S)}get lightTheme(){return j(this,T)}set lightTheme(S){C(this,T,S)}updateTimestamp(S){S&&!Number.isNaN(new Date(S).getTime())&&(this.timestamp=qi(S))}render(){return this.updateTimestamp(this.timestamp),D`${de(this.footerImage,()=>D`<img src=${le(this.footerImage)} alt=${le(this.footerImageAlt)} class="discord-footer-image" />`)}
			<slot></slot>
			${de(this.timestamp,()=>D`<span class="discord-footer-separator">&bull;</span>`)}
			${de(this.timestamp,()=>` ${this.timestamp}`,()=>null)}`}},H=new WeakMap,G=new WeakMap,k=new WeakMap,T=new WeakMap,e=f,(()=>{const S=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({attribute:"footer-image"})],l=[E({attribute:"footer-image-alt"})],n=[E({type:String,reflect:!0,converter:M=>qi(M),attribute:!0})],p=[Ne({context:Be,subscribe:!0}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],Ni(f,null,s,{kind:"accessor",name:"footerImage",static:!1,private:!1,access:{has:M=>"footerImage"in M,get:M=>M.footerImage,set:(M,Y)=>{M.footerImage=Y}},metadata:S},o,d),Ni(f,null,l,{kind:"accessor",name:"footerImageAlt",static:!1,private:!1,access:{has:M=>"footerImageAlt"in M,get:M=>M.footerImageAlt,set:(M,Y)=>{M.footerImageAlt=Y}},metadata:S},h,c),Ni(f,null,n,{kind:"accessor",name:"timestamp",static:!1,private:!1,access:{has:M=>"timestamp"in M,get:M=>M.timestamp,set:(M,Y)=>{M.timestamp=Y}},metadata:S},_,g),Ni(f,null,p,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:M=>"lightTheme"in M,get:M=>M.lightTheme,set:(M,Y)=>{M.lightTheme=Y}},metadata:S},m,u),Ni(null,t={value:e},a,{kind:"class",name:e.name,metadata:S},null,i),e=t.value,S&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:S})})(),ie(f,"styles",me`
		:host {
			-webkit-box-align: center;
			align-items: center;
			display: flex;
			font-size: 12px;
			line-height: 16px;
			font-weight: 500;
			margin-top: 8px;
		}

		:host([light-theme]) {
			color: #747f8d;
		}

		:host .discord-footer-image {
			border-radius: 50%;
			flex-shrink: 0;
			height: 20px;
			margin-right: 8px;
			width: 20px;
		}

		:host .discord-footer-separator {
			color: #dcddde;
			font-weight: 500;
			display: inline-block;
			margin: 0 4px;
		}

		:host([light-theme]) .discord-footer-separator {
			color: #5c5e66;
		}
	`),It(e,i),e})();const Oo=xe`
	<path
	fill="#939bf9"
	d="m72 29.3v60.3c0 2.24 0 3.36-.44 4.22-.38.74-1 1.36-1.74 1.74-.86.44-1.98.44-4.22.44h-59.2c-2.24 0-3.36 0-4.22-.44-.74-.38-1.36-1-1.74-1.74-.44-.86-.44-1.98-.44-4.22v-83.2c0-2.24 0-3.36.44-4.22.38-.74 1-1.36 1.74-1.74.86-.44 1.98-.44 4.22-.44h36.3c1.96 0 2.94 0 3.86.22.5.12.98.28 1.44.5v16.88c0 2.24 0 3.36.44 4.22.38.74 1 1.36 1.74 1.74.86.44 1.98.44 4.22.44h16.88c.22.46.38.94.5 1.44.22.92.22 1.9.22 3.86z" fill="#d3d6fd"/><path d="m68.26 20.26c1.38 1.38 2.06 2.06 2.56 2.88.18.28.32.56.46.86h-16.88c-2.24 0-3.36 0-4.22-.44-.74-.38-1.36-1-1.74-1.74-.44-.86-.44-1.98-.44-4.22v-16.880029c.3.14.58.28.86.459999.82.5 1.5 1.18 2.88 2.56z" />
`;function Do(a={}){return D`<svg ${$e(a)} aria-hidden="false" fill="none" width="72" height="96" viewBox="0 0 72 96">${Oo}</svg>`}var At=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Xe=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var b,V,pe,ee,Q,ye,J,P,O;let a=[_e("discord-file-attachment")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[],k,T=[],N=[],I,S=[],M=[],Y,fe=[],$=[];return b=class extends r{constructor(){super(...arguments);z(this,V,Xe(this,o,void 0));z(this,pe,(Xe(this,d),Xe(this,h,void 0)));z(this,ee,(Xe(this,c),Xe(this,_,void 0)));z(this,Q,(Xe(this,g),Xe(this,m,void 0)));z(this,ye,(Xe(this,u),Xe(this,H,void 0)));z(this,J,(Xe(this,G),Xe(this,T,void 0)));z(this,P,(Xe(this,N),Xe(this,S,void 0)));z(this,O,(Xe(this,M),Xe(this,fe,!1)));Xe(this,$)}get name(){return j(this,V)}set name(q){C(this,V,q)}get bytes(){return j(this,pe)}set bytes(q){C(this,pe,q)}get bytesUnit(){return j(this,ee)}set bytesUnit(q){C(this,ee,q)}get href(){return j(this,Q)}set href(q){C(this,Q,q)}get rel(){return j(this,ye)}set rel(q){C(this,ye,q)}get target(){return j(this,J)}set target(q){C(this,J,q)}get type(){return j(this,P)}set type(q){C(this,P,q)}get lightTheme(){return j(this,O)}set lightTheme(q){C(this,O,q)}render(){return D`<div class="discord-file-attachment-non-visual-media-item-container">
			<div class="discord-file-attachment-non-visual-media-item">
				<div class="discord-file-attachment-mosaic-item-media">
					<div class=${Lt({"discord-file-attachment-mosaic-style":!0,"discord-file-attachment-light-theme":this.lightTheme})}>
						${Do({class:"discord-file-attachment-icon",alt:"Attachment file type: unknown",title:"unknown"})}
						<div class="discord-file-attachment-inner">
							<div class="discord-file-attachment-filename-link-wrapper">
								<discord-link
									href=${le(this.href)}
									rel=${le(this.rel)}
									target=${le(this.target)}
									type=${le(this.type)}
								>
									${this.name}
								</discord-link>
							</div>
							<div class="discord-file-attachment-metadata">
								${this.bytes}${de(this.bytesUnit,()=>D` ${this.bytesUnit}`,()=>null)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`}},V=new WeakMap,pe=new WeakMap,ee=new WeakMap,Q=new WeakMap,ye=new WeakMap,J=new WeakMap,P=new WeakMap,O=new WeakMap,e=b,(()=>{const q=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E()],l=[E({type:Number})],n=[E({attribute:"bytes-unit"})],p=[E()],f=[E()],k=[E()],I=[E()],Y=[Ne({context:Be,subscribe:!0}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],At(b,null,s,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:Z=>"name"in Z,get:Z=>Z.name,set:(Z,ce)=>{Z.name=ce}},metadata:q},o,d),At(b,null,l,{kind:"accessor",name:"bytes",static:!1,private:!1,access:{has:Z=>"bytes"in Z,get:Z=>Z.bytes,set:(Z,ce)=>{Z.bytes=ce}},metadata:q},h,c),At(b,null,n,{kind:"accessor",name:"bytesUnit",static:!1,private:!1,access:{has:Z=>"bytesUnit"in Z,get:Z=>Z.bytesUnit,set:(Z,ce)=>{Z.bytesUnit=ce}},metadata:q},_,g),At(b,null,p,{kind:"accessor",name:"href",static:!1,private:!1,access:{has:Z=>"href"in Z,get:Z=>Z.href,set:(Z,ce)=>{Z.href=ce}},metadata:q},m,u),At(b,null,f,{kind:"accessor",name:"rel",static:!1,private:!1,access:{has:Z=>"rel"in Z,get:Z=>Z.rel,set:(Z,ce)=>{Z.rel=ce}},metadata:q},H,G),At(b,null,k,{kind:"accessor",name:"target",static:!1,private:!1,access:{has:Z=>"target"in Z,get:Z=>Z.target,set:(Z,ce)=>{Z.target=ce}},metadata:q},T,N),At(b,null,I,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:Z=>"type"in Z,get:Z=>Z.type,set:(Z,ce)=>{Z.type=ce}},metadata:q},S,M),At(b,null,Y,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:Z=>"lightTheme"in Z,get:Z=>Z.lightTheme,set:(Z,ce)=>{Z.lightTheme=ce}},metadata:q},fe,$),At(null,t={value:e},a,{kind:"class",name:e.name,metadata:q},null,i),e=t.value,q&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:q})})(),ie(b,"styles",me`
		:host {
			display: grid;
			height: -moz-fit-content;
			height: fit-content;
			grid-auto-flow: row;
			grid-row-gap: 0.25rem;
			grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
			text-indent: 0;
			min-height: 0;
			min-width: 0;
			padding-top: 0.125rem;
			padding-bottom: 0.125rem;
			position: relative;
		}

		:host > * {
			justify-self: start;
			align-self: start;
		}

		.discord-file-attachment-non-visual-media-item-container {
			margin-top: 8px;
			max-width: 100%;
			display: flex;
			flex-direction: column;
		}

		.discord-file-attachment-non-visual-media-item {
			width: -moz-fit-content;
			width: fit-content;
			max-width: 100%;
		}

		.discord-file-attachment-mosaic-item-media {
			position: relative;
			max-height: inherit;
			border-radius: 2px;
			width: 100%;
			align-items: center;
			display: flex;
			flex-flow: row nowrap;
			max-width: 100%;
			height: 100%;
		}

		.discord-file-attachment-mosaic-style {
			padding: 16px;
			border-radius: 8px;
			width: 432px;
			max-width: 100%;
			flex: auto;
			border-color: #202020;
			background-color: #282828;

			align-items: center;
			flex-direction: row;
			display: flex;
			box-sizing: border-box;
			letter-spacing: 0;
			border: 1px solid transparent;
		}

		.discord-file-attachment-light-theme.discord-file-attachment-mosaic-style {
			border-color: #f3f3f3;
			background-color: #f9f9f9;
		}

		.discord-file-attachment-icon {
			width: 30px;
			height: 40px;
			margin-right: 8px;
			flex-shrink: 0;
		}

		.discord-file-attachment-inner {
			flex: 1;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.discord-file-attachment-filename-link-wrapper {
			color: #00aff4;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		.discord-file-attachment-metadata {
			line-height: 16px;
			font-size: 12px;
			font-weight: 400;
			color: hsl(223 calc(1 * 5.8%) 52.9% / 1);
			margin-right: 8px;
		}
	`),Xe(e,i),e})();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sr=(a,t,i)=>{for(const e of t)if(e[0]===a)return(0,e[1])();return i==null?void 0:i()};var kr=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Ua=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var l,h;let a=[_e("discord-header")],t,i=[],e,r=he,s,o=[],d=[];return l=class extends r{constructor(){super(...arguments);z(this,h,Ua(this,o,1));Ua(this,d)}get level(){return j(this,h)}set level(_){C(this,h,_)}ensureLevelIsNumber(){this.level&&!Number.isNaN(this.level)&&(this.level=Number(this.level))}checkLevel(){if(this.level<1||this.level>3)throw new RangeError("The level property must be a number between 1 and 3 (inclusive)")}render(){return this.ensureLevelIsNumber(),this.checkLevel(),sr(this.level,[[1,()=>D`<h1><slot></slot></h1>`],[2,()=>D`<h2><slot></slot></h2>`],[3,()=>D`<h3><slot></slot></h3>`]],()=>D`<slot></slot>`)}},h=new WeakMap,e=l,(()=>{const _=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({type:Number,reflect:!0})],kr(l,null,s,{kind:"accessor",name:"level",static:!1,private:!1,access:{has:g=>"level"in g,get:g=>g.level,set:(g,p)=>{g.level=p}},metadata:_},o,d),kr(null,t={value:e},a,{kind:"class",name:e.name,metadata:_},null,i),e=t.value,_&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:_})})(),ie(l,"styles",me`
		:host > * {
			margin: 16px 0 8px;
			font-weight: 700;
			line-height: 1.375em;
		}

		:host([level='1']) > h1 {
			font-size: 1.5rem;
		}

		:host([level='2']) > h2 {
			font-size: 1.25rem;
		}

		:host([level='3']) > h3 {
			font-size: 1rem;
		}

		:host([level='1']):first-child() > h1,
		:host([level='2']):first-child() > h2 {
			margin-top: 8px;
		}

		:host([level='3']):first-child() > h3 {
			margin-top: 4px;
		}
	`),Ua(e,i),e})();var fi=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},$t=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var k,T,N,I,S,M;let a=[_e("discord-image-attachment")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[];return k=class extends r{constructor(){super(...arguments);z(this,T,$t(this,o,void 0));z(this,N,($t(this,d),$t(this,h,void 0)));z(this,I,($t(this,c),$t(this,_,void 0)));z(this,S,($t(this,g),$t(this,m,"discord image attachment")));z(this,M,($t(this,u),$t(this,H,!1)));$t(this,G)}get url(){return j(this,T)}set url($){C(this,T,$)}get height(){return j(this,N)}set height($){C(this,N,$)}get width(){return j(this,I)}set width($){C(this,I,$)}get alt(){return j(this,S)}set alt($){C(this,S,$)}get customImageElement(){return j(this,M)}set customImageElement($){C(this,M,$)}componentWillRender(){this.customImageElement||go(this.url)}render(){return D`
			<div class="discord-image-attachment">
				<div class="discord-image-wrapper" style="${di({height:`${this.height}px`,width:`${this.width}px`})}">
					${de(this.customImageElement,()=>D`<slot></slot>`,()=>D`<img
								alt=${le(this.alt)}
								src=${le(this.url)}
								height=${le(this.height)}
								width=${le(this.width)}
							/>`)}
				</div>
			</div>
		`}},T=new WeakMap,N=new WeakMap,I=new WeakMap,S=new WeakMap,M=new WeakMap,e=k,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({reflect:!0,attribute:"url"})],l=[E({type:Number,reflect:!0,attribute:"height"})],n=[E({type:Number,reflect:!0,attribute:"width"})],p=[E({reflect:!0,attribute:"alt"})],f=[E({type:Boolean,attribute:"custom-image-element"})],fi(k,null,s,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:b=>"url"in b,get:b=>b.url,set:(b,V)=>{b.url=V}},metadata:$},o,d),fi(k,null,l,{kind:"accessor",name:"height",static:!1,private:!1,access:{has:b=>"height"in b,get:b=>b.height,set:(b,V)=>{b.height=V}},metadata:$},h,c),fi(k,null,n,{kind:"accessor",name:"width",static:!1,private:!1,access:{has:b=>"width"in b,get:b=>b.width,set:(b,V)=>{b.width=V}},metadata:$},_,g),fi(k,null,p,{kind:"accessor",name:"alt",static:!1,private:!1,access:{has:b=>"alt"in b,get:b=>b.alt,set:(b,V)=>{b.alt=V}},metadata:$},m,u),fi(k,null,f,{kind:"accessor",name:"customImageElement",static:!1,private:!1,access:{has:b=>"customImageElement"in b,get:b=>b.customImageElement,set:(b,V)=>{b.customImageElement=V}},metadata:$},H,G),fi(null,t={value:e},a,{kind:"class",name:e.name,metadata:$},null,i),e=t.value,$&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),ie(k,"styles",me`
		:host {
			display: block;
			position: relative;
			-webkit-user-select: text;
			-moz-user-select: text;
			-ms-user-select: text;
			user-select: text;
			overflow: hidden;
			border-radius: 3px;
		}

		.discord-image-attachment {
			color: #dcddde;
			display: flex;
			font-size: 13px;
			line-height: 150%;
			margin-bottom: 8px;
			margin-top: 8px;
		}
	`),$t(e,i),e})();const Lo=xe`
<path
	fill="currentColor"
	fill-rule="evenodd"
	d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
/>
`;function No(a){return D`<svg ${$e(a)} class="discord-guild-badge" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
		${Lo}
	</svg>`}const Po=xe`
	<path
		d="M10.5906 6.39993L9.19223 7.29993C8.99246 7.39993 8.89258 7.39993 8.69281 7.29993C8.59293 7.19993 8.39317 7.09993 8.29328 6.99993C7.89375 6.89993 7.5941 6.99993 7.29445 7.19993L6.79504 7.49993L4.29797 9.19993C3.69867 9.49993 2.99949 9.39993 2.69984 8.79993C2.30031 8.29993 2.50008 7.59993 2.99949 7.19993L5.99598 5.19993C6.79504 4.69993 7.79387 4.49993 8.69281 4.69993C9.49188 4.89993 10.0912 5.29993 10.5906 5.89993C10.7904 6.09993 10.6905 6.29993 10.5906 6.39993Z"
		fill="currentColor"
	/>
	<path
		d="M13.4871 7.79985C13.4871 8.19985 13.2874 8.59985 12.9877 8.79985L9.89135 10.7999C9.29206 11.1999 8.69276 11.3999 7.99358 11.3999C7.69393 11.3999 7.49417 11.3999 7.19452 11.2999C6.39545 11.0999 5.79616 10.6999 5.29674 10.0999C5.19686 9.89985 5.29674 9.69985 5.39663 9.59985L6.79499 8.69985C6.89487 8.59985 7.09463 8.59985 7.19452 8.69985C7.39428 8.79985 7.59405 8.89985 7.69393 8.99985C8.09346 8.99985 8.39311 8.99985 8.69276 8.79985L9.39194 8.39985L11.3896 6.99985L11.6892 6.79985C12.1887 6.49985 12.9877 6.59985 13.2874 7.09985C13.4871 7.39985 13.4871 7.59985 13.4871 7.79985Z"
		fill="currentColor"
	/>
`;function Io(a={}){return D`<svg ${$e(a)} class="partner-badge-overlay" aria-hidden="false" width="16" height="16" viewBox="0 0 16 16">
		${Po}
	</svg>`}const Ao=xe`
	<path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="currentColor" />
`;function Ro(a={}){return D`<svg ${$e(a)} class="verified-badge-overlay" aria-hidden="false" width="16" height="16" viewBox="0 0 16 15.2">
		${Ao}
	</svg>`}var Tt=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Fe=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var J,P,O,K,je,q,Z,ce,Ee,Me,Ce;let a=[_e("discord-invite")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[],k,T=[],N=[],I,S=[],M=[],Y,fe=[],$=[],b,V=[],pe=[],ee,Q=[],ye=[];return J=class extends r{constructor(){super(...arguments);z(this,P,Fe(this,o,ra.blue));z(this,O,(Fe(this,d),Fe(this,h,"Discord Server")));z(this,K,(Fe(this,c),Fe(this,_,void 0)));z(this,je,(Fe(this,g),Fe(this,m,0)));z(this,q,(Fe(this,u),Fe(this,H,0)));z(this,Z,(Fe(this,G),Fe(this,T,!1)));z(this,ce,(Fe(this,N),Fe(this,S,!1)));z(this,Ee,(Fe(this,M),Fe(this,fe,"You've been invited to join a server")));z(this,Me,(Fe(this,$),Fe(this,V,"Join")));z(this,Ce,(Fe(this,pe),Fe(this,Q,!1)));Fe(this,ye)}get icon(){return j(this,P)}set icon(A){C(this,P,A)}get name(){return j(this,O)}set name(A){C(this,O,A)}get url(){return j(this,K)}set url(A){C(this,K,A)}get online(){return j(this,je)}set online(A){C(this,je,A)}get members(){return j(this,q)}set members(A){C(this,q,A)}get verified(){return j(this,Z)}set verified(A){C(this,Z,A)}get partnered(){return j(this,ce)}set partnered(A){C(this,ce,A)}get inviteTitle(){return j(this,Ee)}set inviteTitle(A){C(this,Ee,A)}get joinBtn(){return j(this,Me)}set joinBtn(A){C(this,Me,A)}get lightTheme(){return j(this,Ce)}set lightTheme(A){C(this,Ce,A)}render(){return D`<div class="discord-invite-header">${this.inviteTitle}</div>
			<div class="discord-invite-root">
				<div class="discord-invite-info">
					<img class="discord-invite-icon" src=${le(this.icon)} alt=${le(this.name)} />
					<div class="discord-invite-info-text-ellipsis">
						<div class="discord-invite-title">
							${de(this.verified&&!this.partnered||!this.verified&&this.partnered,()=>D`<div class="discord-invite-badge">
										${No({"aria-label":this.partnered?"Discord Partner":"Verified",class:`discord-invite-badge-${this.partnered?"partnered":"verified"}`})}
										<div class="discord-invite-badge-container">
											${this.partnered?Io():Ro()}
										</div>
									</div>`)}
							<span class="discord-invite-name">${this.name}</span>
						</div>
						<div class="discord-invite-counts">
							<div class="discord-invite-counts-info">
								<i class="discord-invite-status discord-invite-status-online"></i>
								<span class="discord-invite-count">${this.online.toLocaleString()} Online</span>
							</div>
							<div class="discord-invite-counts-info">
								<i class="discord-invite-status"></i>
								<span class="discord-invite-count">${this.members.toLocaleString()} Members</span>
							</div>
						</div>
					</div>
				</div>
				<a class="discord-invite-join" href=${le(this.url)} target="_blank" rel="noopener noreferrer">${this.joinBtn}</a>
			</div>`}},P=new WeakMap,O=new WeakMap,K=new WeakMap,je=new WeakMap,q=new WeakMap,Z=new WeakMap,ce=new WeakMap,Ee=new WeakMap,Me=new WeakMap,Ce=new WeakMap,e=J,(()=>{const A=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E()],l=[E()],n=[E()],p=[E({type:Number})],f=[E({type:Number})],k=[E({type:Boolean})],I=[E({type:Boolean})],Y=[E({attribute:"invite-title"})],b=[E({attribute:"join-btn"})],ee=[Ne({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],Tt(J,null,s,{kind:"accessor",name:"icon",static:!1,private:!1,access:{has:x=>"icon"in x,get:x=>x.icon,set:(x,U)=>{x.icon=U}},metadata:A},o,d),Tt(J,null,l,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:x=>"name"in x,get:x=>x.name,set:(x,U)=>{x.name=U}},metadata:A},h,c),Tt(J,null,n,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:x=>"url"in x,get:x=>x.url,set:(x,U)=>{x.url=U}},metadata:A},_,g),Tt(J,null,p,{kind:"accessor",name:"online",static:!1,private:!1,access:{has:x=>"online"in x,get:x=>x.online,set:(x,U)=>{x.online=U}},metadata:A},m,u),Tt(J,null,f,{kind:"accessor",name:"members",static:!1,private:!1,access:{has:x=>"members"in x,get:x=>x.members,set:(x,U)=>{x.members=U}},metadata:A},H,G),Tt(J,null,k,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:x=>"verified"in x,get:x=>x.verified,set:(x,U)=>{x.verified=U}},metadata:A},T,N),Tt(J,null,I,{kind:"accessor",name:"partnered",static:!1,private:!1,access:{has:x=>"partnered"in x,get:x=>x.partnered,set:(x,U)=>{x.partnered=U}},metadata:A},S,M),Tt(J,null,Y,{kind:"accessor",name:"inviteTitle",static:!1,private:!1,access:{has:x=>"inviteTitle"in x,get:x=>x.inviteTitle,set:(x,U)=>{x.inviteTitle=U}},metadata:A},fe,$),Tt(J,null,b,{kind:"accessor",name:"joinBtn",static:!1,private:!1,access:{has:x=>"joinBtn"in x,get:x=>x.joinBtn,set:(x,U)=>{x.joinBtn=U}},metadata:A},V,pe),Tt(J,null,ee,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:x=>"lightTheme"in x,get:x=>x.lightTheme,set:(x,U)=>{x.lightTheme=U}},metadata:A},Q,ye),Tt(null,t={value:e},a,{kind:"class",name:e.name,metadata:A},null,i),e=t.value,A&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:A})})(),ie(J,"styles",me`
		:host {
			background-color: #2f3136;
			border-radius: 4px;
			padding: 16px;
			max-width: 432px;
			min-width: 160px;
			width: 100%;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
		}

		:host([light-theme]) {
			background-color: #f2f3f5;
		}

		:host .discord-invite-header {
			font-weight: 700;
			font-size: 12px;
			line-height: 16px;
			margin-bottom: 12px;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			text-transform: uppercase;
			color: #b9bbbe;
		}

		:host([light-theme]) .discord-invite-header {
			color: #4f5660;
		}

		:host .discord-invite-root {
			display: flex;
			flex-flow: row wrap;
			gap: 16px;
		}

		:host .discord-invite-icon {
			background-color: #36393f;
			border-radius: 15px;
			margin-right: 16px;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			width: 50px;
			height: 50px;
		}

		:host([light-theme]) .discord-invite-icon {
			background-color: #fff;
		}

		:host .discord-invite-info {
			font-family: 'gg sans', 'Noto Sans', WhitneyMedium, Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
			display: flex;
			flex: 1000 0 auto;
			align-items: center;
			max-width: 100%;
			display: flex;
		}

		.discord-invite-info-text-ellipsis {
			overflow: hidden;
			text-overflow: ellipsis;
		}

		:host .discord-invite-title {
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			margin-bottom: 2px;
			color: white;
			font-size: 16px;
			line-height: 20px;
			font-weight: 700;
			display: flex;
			flex-direction: row;
		}

		:host([light-theme]) .discord-invite-title {
			color: #060607;
		}

		:host .discord-invite-name {
			flex: 1 1 auto;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		:host .discord-invite-counts {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			font-size: 14px;
			font-weight: 600;
			text-overflow: ellipsis;
			overflow: hidden;
			color: #b9bbbe;
			line-height: 16px;
		}

		:host .discord-invite-counts-info {
			text-overflow: ellipsis;
			overflow: hidden;
			display: flex;
			align-items: center;
		}

		:host .discord-invite-status {
			display: block;
			margin-right: 4px;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			background-color: #747f8d;
		}

		:host .discord-invite-status-online {
			background-color: #3ba55d;
		}

		:host .discord-invite-count {
			-webkit-box-flex: 0;
			-ms-flex: 0 1 auto;
			flex: 0 1 auto;
			margin-right: 8px;
			color: #b9bbbe;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}

		:host .discord-invite-join {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 40px;
			padding: 0 20px;
			align-self: center;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			line-height: 20px;
			border-radius: 3px;
			font-size: 14px;
			font-weight: 600;
			color: white !important;
			background-color: #3ba55d;
			-webkit-transition: background-color 0.17s ease;
			transition: background-color 0.17s ease;
			text-decoration: none;
			box-sizing: border-box;
			flex: 1 0 auto;
		}

		:host .discord-invite-join:hover {
			background-color: #2d7d46;
		}

		:host .discord-invite-badge {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			margin-right: 8px;
			width: 16px;
			height: 16px;
			align-self: center;
			position: relative;
		}

		:host .discord-invite-badge-verified {
			color: #3ba55d;
		}

		:host .discord-invite-badge-partnered {
			color: #5865f2;
		}

		:host .discord-invite-badge-container {
			position: absolute;
			top: -0.05px;
			left: 0.05px;
			right: 0;
			bottom: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			pointer-events: none;
			color: white;
		}

		:host([light-theme]) .discord-invite-counts,
		:host([light-theme]) .discord-invite-count {
			color: #4f5660;
		}
	`),Fe(e,i),e})();var Bo=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Vo=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var s;let a=[_e("discord-italic")],t,i=[],e,r=he;return s=class extends r{render(){return D`
			<em>
				<slot></slot>
			</em>
		`}},e=s,(()=>{const d=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;Bo(null,t={value:e},a,{kind:"class",name:e.name,metadata:d},null,i),e=t.value,d&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d})})(),ie(s,"styles",me`
		:host > em {
			font-style: italic;
		}
	`),Vo(e,i),e})();var Uo=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Ho=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var s;let a=[_e("discord-list-item")],t,i=[],e,r=he;return s=class extends r{checkParentElement(){var d,l;if(((d=this.parentElement)==null?void 0:d.tagName.toLowerCase())!=="discord-unordered-list"&&((l=this.parentElement)==null?void 0:l.tagName.toLowerCase())!=="discord-ordered-list")throw new bi("All <discord-list-item> components must be direct children of <discord-unordered-list> or <discord-ordered-list>.")}render(){return this.checkParentElement(),D`<li><slot></slot></li>`}},e=s,(()=>{const d=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;Uo(null,t={value:e},a,{kind:"class",name:e.name,metadata:d},null,i),e=t.value,d&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d})})(),ie(s,"styles",me`
		:host > li {
			margin-bottom: 4px;
		}
	`),Ho(e,i),e})();const Fo=a=>a.startsWith("#")?a.slice(1):a,Zo=a=>{const t=a.length===3||a.length===4,i=t?`${a.slice(0,1)}${a.slice(0,1)}`:a.slice(0,2),e=t?`${a.slice(1,2)}${a.slice(1,2)}`:a.slice(2,4),r=t?`${a.slice(2,3)}${a.slice(2,3)}`:a.slice(4,6),s=(t?`${a.slice(3,4)}${a.slice(3,4)}`:a.slice(6,8))||"ff";return{r:i,g:e,b:r,a:s}},Xi=a=>Number.parseInt(a,16),Yo=({r:a,g:t,b:i,a:e})=>({r:Xi(a),g:Xi(t),b:Xi(i),a:Number((Xi(e)/255).toFixed(2))}),Qo=a=>typeof a=="number"||typeof a=="string"&&Number.isFinite(Number(a)),qo=(a,t)=>{const{r:i,g:e,b:r,a:s}=a,o=Qo(t)?t:s;return`rgba(${i}, ${e}, ${r}, ${o})`},Ha=(a,t)=>{const i=Fo(a),e=Zo(i),r=Yo(e);return qo(r,t)},Wo=xe`
	<path
		fill="currentColor"
		d="M18.91 12.98a5.45 5.45 0 0 1 2.18 6.2c-.1.33-.09.68.1.96l.83 1.32a1 1 0 0 1-.84 1.54h-5.5A5.6 5.6 0 0 1 10 17.5a5.6 5.6 0 0 1 5.68-5.5c1.2 0 2.32.36 3.23.98Z"
	/>
	<path
		fill="currentColor"
		d="M19.24 10.86c.32.16.72-.02.74-.38L20 10c0-4.42-4.03-8-9-8s-9 3.58-9 8c0 1.5.47 2.91 1.28 4.11.14.21.12.49-.06.67l-1.51 1.51A1 1 0 0 0 2.4 18h5.1a.5.5 0 0 0 .49-.5c0-4.2 3.5-7.5 7.68-7.5 1.28 0 2.5.3 3.56.86Z"
	/>
`;function Go(a={}){return D`<svg
		${$e(a)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 20 20"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Wo}
	</svg>`}const Ko=xe`
	<path
		fill="currentColor"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M10.99 3.16A1 1 0 1 0 9 2.84L8.15 8H4a1 1 0 0 0 0 2h3.82l-.67 4H3a1 1 0 1 0 0 2h3.82l-.8 4.84a1 1 0 0 0 1.97.32L8.85 16h4.97l-.8 4.84a1 1 0 0 0 1.97.32l.86-5.16H20a1 1 0 1 0 0-2h-3.82l.67-4H21a1 1 0 1 0 0-2h-3.82l.8-4.84a1 1 0 1 0-1.97-.32L15.15 8h-4.97l.8-4.84ZM14.15 14l.67-4H9.85l-.67 4h4.97Z"
	/>
`;function Jo(a={}){return D`<svg
		${$e(a)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Ko}
	</svg>`}const Xo=xe`
	<path
		fill="currentColor"
		d="M12 2.81a1 1 0 0 1 0-1.41l.36-.36a1 1 0 0 1 1.41 0l9.2 9.2a1 1 0 0 1 0 1.4l-.7.7a1 1 0 0 1-1.3.13l-9.54-6.72a1 1 0 0 1-.08-1.58l1-1L12 2.8ZM12 21.2a1 1 0 0 1 0 1.41l-.35.35a1 1 0 0 1-1.41 0l-9.2-9.19a1 1 0 0 1 0-1.41l.7-.7a1 1 0 0 1 1.3-.12l9.54 6.72a1 1 0 0 1 .07 1.58l-1 1 .35.36ZM15.66 16.8a1 1 0 0 1-1.38.28l-8.49-5.66A1 1 0 1 1 6.9 9.76l8.49 5.65a1 1 0 0 1 .27 1.39ZM17.1 14.25a1 1 0 1 0 1.11-1.66L9.73 6.93a1 1 0 0 0-1.11 1.66l8.49 5.66Z"
	/>
`;function en(a={}){return D`<svg
		${$e(a)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${Xo}
	</svg>`}const tn=xe`
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		fill="currentColor"
		d="M18.5 23c.88 0 1.7-.25 2.4-.69l1.4 1.4a1 1 0 0 0 1.4-1.42l-1.39-1.4A4.5 4.5 0 1 0 18.5 23Zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
	/>
	<path
		fill="currentColor"
		d="M3 3a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2H3ZM2 8a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 11a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2H3ZM2 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 19a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H3Z"
	/>
`;function an(a={}){return D`<svg
		${$e(a)}
		class="discord-mention-icon"
		aria-label="Browse Channels"
		aria-hidden="false"
		role="img"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${tn}
	</svg>`}const rn=xe`
	<path
		fill="currentColor"
		d="M21.487 5.126L12.487 0.126C12.184 -0.042 11.818 -0.042 11.515 0.126L2.51498 5.126C2.19798 5.302 2.00098 5.636 2.00098 5.999C2.00098 6.693 2.11498 22.999 12.001 22.999C21.887 22.999 22.001 6.693 22.001 5.999C22.001 5.636 21.804 5.302 21.487 5.126ZM12.001 5.999C13.382 5.999 14.501 7.118 14.501 8.499C14.501 9.88 13.382 10.999 12.001 10.999C10.62 10.999 9.50098 9.88 9.50098 8.499C9.50098 7.118 10.62 5.999 12.001 5.999ZM8.25098 16C8.25098 13.699 9.69998 12.25 12.001 12.25C14.302 12.25 15.751 13.699 15.751 16H8.25098Z"
	/>
`;function sn(a={}){return D`<svg
		${$e(a)}
		class="discord-mention-icon"
		aria-label="Customise Community"
		aria-hidden="false"
		role="img"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${rn}
	</svg>`}const on=xe`
	<path
		fill="currentColor"
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M6 9h1V6a5 5 0 0 1 10 0v3h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm9-3v3H9V6a3 3 0 1 1 6 0Zm-1 8a2 2 0 0 1-1 1.73V18a1 1 0 1 1-2 0v-2.27A2 2 0 1 1 14 14Z"
	/>
`;function nn(a={}){return D`<svg
		${$e(a)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${on}
	</svg>`}const dn=xe`
	<path
		d="M11 3a1 1 0 1 1 2 0v2h5.75c.16 0 .3.07.4.2l2.63 3.5a.5.5 0 0 1 0 .6l-2.63 3.5a.5.5 0 0 1-.4.2H13v5h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1c0-1.1.9-2 2-2h2v-5H2.8a.5.5 0 0 1-.44-.72L3.9 9.22a.5.5 0 0 0 0-.44L2.36 5.72A.5.5 0 0 1 2.81 5H11V3Z"
		fill="currentColor"
	/>
`;function ln(a={}){return D`<svg
		${$e(a)}
		class="discord-mention-icon"
		aria-label="Server Guide"
		aria-hidden="false"
		role="img"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${dn}
	</svg>`}const cn=xe`
	<path
		fill="currentColor"
		d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z"
	/>
	<path
		fill="currentColor"
		d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z"
	/>
`;function un(a={}){return D`<svg
		${$e(a)}
		class="discord-mention-icon"
		aria-hidden="false"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${cn}
	</svg>`}var Pi=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Rt=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var f,H,G,k,T;let a=[_e("discord-mention")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[];return f=class extends r{constructor(){super(...arguments);z(this,H,Rt(this,o,!1));z(this,G,(Rt(this,d),Rt(this,h,"user")));z(this,k,(Rt(this,c),Rt(this,_,void 0)));ie(this,"setHoverColor",(Rt(this,g),()=>{this.color&&(this.style.backgroundColor=Ha(this.color,.3))}));ie(this,"resetHoverColor",()=>{this.color&&(this.style.backgroundColor=Ha(this.color,.1))});z(this,T,Rt(this,m,!1));Rt(this,u)}get highlight(){return j(this,H)}set highlight(S){C(this,H,S)}get type(){return j(this,G)}set type(S){C(this,G,S)}get color(){return j(this,k)}set color(S){C(this,k,S)}get lightTheme(){return j(this,T)}set lightTheme(S){C(this,T,S)}connectedCallback(){super.connectedCallback(),this.color&&this.type==="role"&&(this.addEventListener("mouseover",this.setHoverColor),this.addEventListener("mouseout",this.resetHoverColor))}disconnectedCallback(){this.removeEventListener("mouseover",this.setHoverColor),this.removeEventListener("mouseout",this.resetHoverColor),super.disconnectedCallback()}willUpdate(){this.color&&(this.style.color=this.color,this.type==="role"&&(this.style.backgroundColor=Ha(this.color,.1)))}render(){return D`<span class="no-wrap"
				>${sr(this.type,[["channel",()=>Jo()],["user",()=>D`@`],["role",()=>D`@`],["voice",()=>un()],["locked",()=>nn()],["thread",()=>en()],["forum",()=>Go()],["server-guide",()=>ln()],["channels-and-roles",()=>an()],["customize-community",()=>sn()],["slash",()=>D`/`]])}</span
			><slot></slot>`}},H=new WeakMap,G=new WeakMap,k=new WeakMap,T=new WeakMap,e=f,(()=>{const S=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({type:Boolean,reflect:!0})],l=[E({reflect:!0})],n=[E({reflect:!0})],p=[Ne({context:Be,subscribe:!0}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],Pi(f,null,s,{kind:"accessor",name:"highlight",static:!1,private:!1,access:{has:M=>"highlight"in M,get:M=>M.highlight,set:(M,Y)=>{M.highlight=Y}},metadata:S},o,d),Pi(f,null,l,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:M=>"type"in M,get:M=>M.type,set:(M,Y)=>{M.type=Y}},metadata:S},h,c),Pi(f,null,n,{kind:"accessor",name:"color",static:!1,private:!1,access:{has:M=>"color"in M,get:M=>M.color,set:(M,Y)=>{M.color=Y}},metadata:S},_,g),Pi(f,null,p,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:M=>"lightTheme"in M,get:M=>M.lightTheme,set:(M,Y)=>{M.lightTheme=Y}},metadata:S},m,u),Pi(null,t={value:e},a,{kind:"class",name:e.name,metadata:S},null,i),e=t.value,S&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:S})})(),ie(f,"styles",me`
		:host {
			color: #e3e7f8;
			background-color: hsla(235, 85.6%, 64.7%, 0.3);
			font-weight: 500;
			padding: 0 2px;
			border-radius: 3px;
			unicode-bidi: -moz-plaintext;
			unicode-bidi: plaintext;
			-webkit-transition:
				background-color 50ms ease-out,
				color 50ms ease-out;
			transition:
				background-color 50ms ease-out,
				color 50ms ease-out;
			cursor: pointer;
		}

		:host([type='role']) {
			background-color: rgba(#e3e7f8, 0.1);
		}

		:host([type='channel']) {
			position: relative;
		}

		:host([type='voice']),
		:host([type='locked']),
		:host([type='thread']),
		:host([type='forum']) {
			position: relative;
		}

		:host(:hover) {
			color: #fff;
			background-color: hsl(235, 85.6%, 64.7%);
		}

		:host([highlight][type='user']:hover) {
			text-decoration: underline;
			text-underline-offset: 1px;
		}

		:host([light-theme]) {
			color: #5865f2;
			background-color: hsla(235, 85.6%, 64.7%, 0.15);
		}

		:host([light-theme]:hover) {
			color: #ffffff;
			background-color: hsl(235, 85.6%, 64.7%);
		}

		.discord-mention-icon {
			width: 1rem;
			height: 1rem;
			margin-right: 4px;
			vertical-align: middle;
			margin-bottom: 0.2rem;
		}

		.no-wrap {
			white-space: nowrap;
		}
	`),Rt(e,i),e})();const hn=xe`
	<path
		fill="currentColor"
		d="M12 5C5.648 5 1 12 1 12C1 12 5.648 19 12 19C18.352 19 23 12 23 12C23 12 18.352 5 12 5ZM12 16C9.791 16 8 14.21 8 12C8 9.79 9.791 8 12 8C14.209 8 16 9.79 16 12C16 14.21 14.209 16 12 16Z"
	></path>
	<path
		fill="currentColor"
		d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
	></path>
`;function fn(a={}){return D`<svg
		${$e(a)}
		class="discord-message-ephemeral-icon"
		aria-hidden="false"
		width="16"
		height="16"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		${hn}
	</svg>`}var Ve=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},ge=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var F,R,te,Le,it,Je,at,Ot,nt,Jt,yi,wi,ki,xi,$i,Ti,ji,zi,Ci,Ei,Mi,Si;let a=[_e("discord-message")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[],k,T=[],N=[],I,S=[],M=[],Y,fe=[],$=[],b,V=[],pe=[],ee,Q=[],ye=[],J,P=[],O=[],K,je=[],q=[],Z,ce=[],Ee=[],Me,Ce=[],Qe=[],ot,A=[],x=[],U,Ge=[],Ke=[],tt,vt=[],St=[],v,y=[],w=[],B,X=[],se=[],ne,ae=[],be=[],ze,we=[],Pe=[];return F=class extends r{constructor(){super(...arguments);z(this,R,ge(this,o,void 0));z(this,te,(ge(this,d),ge(this,h,"User")));z(this,Le,(ge(this,c),ge(this,_,void 0)));z(this,it,(ge(this,g),ge(this,m,!1)));z(this,Je,(ge(this,u),ge(this,H,!1)));z(this,at,(ge(this,G),ge(this,T,!1)));z(this,Ot,(ge(this,N),ge(this,S,!1)));z(this,nt,(ge(this,M),ge(this,fe,!1)));z(this,Jt,(ge(this,$),ge(this,V,void 0)));z(this,yi,(ge(this,pe),ge(this,Q,void 0)));z(this,wi,(ge(this,ye),ge(this,P,void 0)));z(this,ki,(ge(this,O),ge(this,je,!1)));z(this,xi,(ge(this,q),ge(this,ce,!1)));z(this,$i,(ge(this,Ee),ge(this,Ce,new Date)));z(this,Ti,(ge(this,Qe),ge(this,A,!1)));z(this,ji,(ge(this,x),ge(this,Ge,!1)));z(this,zi,(ge(this,Ke),ge(this,vt,!1)));z(this,Ci,(ge(this,St),ge(this,y,!1)));z(this,Ei,(ge(this,w),ge(this,X,!1)));z(this,Mi,(ge(this,se),ge(this,ae,!1)));z(this,Si,(ge(this,be),ge(this,we,()=>{})));ge(this,Pe)}get profile(){return j(this,R)}set profile(W){C(this,R,W)}get author(){return j(this,te)}set author(W){C(this,te,W)}get avatar(){return j(this,Le)}set avatar(W){C(this,Le,W)}get bot(){return j(this,it)}set bot(W){C(this,it,W)}get server(){return j(this,Je)}set server(W){C(this,Je,W)}get verified(){return j(this,at)}set verified(W){C(this,at,W)}get op(){return j(this,Ot)}set op(W){C(this,Ot,W)}get edited(){return j(this,nt)}set edited(W){C(this,nt,W)}get roleColor(){return j(this,Jt)}set roleColor(W){C(this,Jt,W)}get roleIcon(){return j(this,yi)}set roleIcon(W){C(this,yi,W)}get roleName(){return j(this,wi)}set roleName(W){C(this,wi,W)}get highlight(){return j(this,ki)}set highlight(W){C(this,ki,W)}get ephemeral(){return j(this,xi)}set ephemeral(W){C(this,xi,W)}get timestamp(){return j(this,$i)}set timestamp(W){C(this,$i,W)}get twentyFour(){return j(this,Ti)}set twentyFour(W){C(this,Ti,W)}get messageBodyOnly(){return j(this,ji)}set messageBodyOnly(W){C(this,ji,W)}get lightTheme(){return j(this,zi)}set lightTheme(W){C(this,zi,W)}get compactMode(){return j(this,Ci)}set compactMode(W){C(this,Ci,W)}get noBackground(){return j(this,Ei)}set noBackground(W){C(this,Ei,W)}get hasThread(){return j(this,Mi)}set hasThread(W){C(this,Mi,W)}get dismissMessageClicked(){return j(this,Si)}set dismissMessageClicked(W){C(this,Si,W)}willUpdate(){this.hasThread=Array.from(this.children).some(W=>W.tagName.toLowerCase()==="discord-thread"),this.highlight=this.highlight||Array.from(this.children).some(W=>W.tagName.toLowerCase()==="discord-mention"&&W.hasAttribute("highlight")&&(W.type==="user"||W.type==="role"))}handleSpaceToDismissMessage(W){var L;W.code==="Space"&&(W.preventDefault(),W.stopPropagation(),(L=this.dismissMessageClicked)==null||L.call(this))}render(){const W={author:this.author,bot:this.bot,verified:this.verified,server:this.server,op:this.op,roleColor:this.roleColor,roleIcon:this.roleIcon,roleName:this.roleName},L=this.profile!==void 0&&Reflect.get(pa,this.profile)||{},re={...W,...L,avatar:this.resolveAvatar(L.avatar??this.avatar)},Oi=qi(this.timestamp,this.compactMode,this.twentyFour)??void 0;return D`
			<slot name="reply"></slot>
			<div
				class=${Lt({"discord-message-inner":!0,"discord-message-inner-center":this.messageBodyOnly})}
			>
				${de(this.compactMode&&!this.messageBodyOnly,()=>D`<time datetime="${le(Oi)}" class="discord-message-timestamp">${Oi}</time>`,()=>null)}
				${de(this.messageBodyOnly,()=>D`<time
							datetime="${le(Oi)}"
							class=${Lt({"discord-message-timestamp":!0,"discord-message-timestamp-hover":!0,"discord-message-body-only-indent":!this.compactMode})}
						></time>`,()=>null)}
				${de(this.compactMode||this.messageBodyOnly,()=>null,()=>D`<div class="discord-author-avatar">
							<img src="${le(re.avatar)}" alt="${le(re.author)}" />
						</div>`)}

				<div class="discord-message-content">
					${de(this.compactMode||this.messageBodyOnly,()=>null,()=>D`
							<discord-author-info
								author=${re.author??""}
								?bot=${re.bot??!1}
								?server=${re.server??!1}
								?verified=${re.verified??!1}
								?op=${re.op??!1}
								roleColor=${re.roleColor??""}
								roleIcon=${re.roleIcon??""}
								roleName=${re.roleName??""}
								?compact=${!1}
							></discord-author-info
							><time datetime="${le(Oi)}" class="discord-message-timestamp">${Oi}</time>
						`)}
					<div class="discord-message-body">
						${de(this.compactMode,()=>D`<discord-author-info
									author=${re.author??""}
									?bot=${re.bot??!1}
									?server=${re.server??!1}
									?verified=${re.verified??!1}
									?op=${re.op??!1}
									roleColor=${re.roleColor??""}
									roleIcon=${re.roleIcon??""}
									roleName=${re.roleName??""}
									?compact=${!0}
								></discord-author-info>`,()=>null)}<span class="discord-message-markup"><slot></slot></span>
						${de(this.edited,()=>D`<span class="discord-message-edited">(edited)</span>`,()=>null)}
					</div>
					<div class="discord-message-compact-indent">
						<slot name="attachments"></slot>
						<slot name="embeds"></slot>
						<slot name="components"></slot>
						<slot name="reactions"></slot>
						<slot name="thread"></slot>
						${de(this.ephemeral,()=>D`
								<div class="discord-message-ephemeral">
									${fn()} Only you can see this •
									<span
										role="button"
										class="discord-message-ephemeral-link"
										@click=${this.dismissMessageClicked}
										@keydown=${this.handleSpaceToDismissMessage}
										>Dismiss message</span
									>
								</div>
							`,()=>null)}
					</div>
				</div>
			</div>
		`}resolveAvatar(W){return W===void 0?Ht.default:Ht[W]??W??Ht.default}},R=new WeakMap,te=new WeakMap,Le=new WeakMap,it=new WeakMap,Je=new WeakMap,at=new WeakMap,Ot=new WeakMap,nt=new WeakMap,Jt=new WeakMap,yi=new WeakMap,wi=new WeakMap,ki=new WeakMap,xi=new WeakMap,$i=new WeakMap,Ti=new WeakMap,ji=new WeakMap,zi=new WeakMap,Ci=new WeakMap,Ei=new WeakMap,Mi=new WeakMap,Si=new WeakMap,e=F,(()=>{const W=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E()],l=[E()],n=[E()],p=[E({type:Boolean})],f=[E({type:Boolean})],k=[E({type:Boolean})],I=[E({type:Boolean})],Y=[E({type:Boolean})],b=[E({attribute:"role-color"})],ee=[E({attribute:"role-icon"})],J=[E({attribute:"role-name"})],K=[E({type:Boolean,reflect:!0})],Z=[E({type:Boolean,reflect:!0})],Me=[E({type:String,converter:L=>qi(L,!1,!1),attribute:!0})],ot=[E({type:Boolean,attribute:"twenty-four"})],U=[E({type:Boolean,attribute:"message-body-only"})],tt=[Ne({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],v=[Ne({context:Gi}),E({type:Boolean,reflect:!0,attribute:"compact-mode"})],B=[Ne({context:Kr}),E({type:Boolean,reflect:!0,attribute:"no-background"})],ne=[E({type:Boolean,reflect:!0,attribute:"has-thread"})],ze=[E({reflect:!1,attribute:"dismiss-message-clicked"})],Ve(F,null,s,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:L=>"profile"in L,get:L=>L.profile,set:(L,re)=>{L.profile=re}},metadata:W},o,d),Ve(F,null,l,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:L=>"author"in L,get:L=>L.author,set:(L,re)=>{L.author=re}},metadata:W},h,c),Ve(F,null,n,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:L=>"avatar"in L,get:L=>L.avatar,set:(L,re)=>{L.avatar=re}},metadata:W},_,g),Ve(F,null,p,{kind:"accessor",name:"bot",static:!1,private:!1,access:{has:L=>"bot"in L,get:L=>L.bot,set:(L,re)=>{L.bot=re}},metadata:W},m,u),Ve(F,null,f,{kind:"accessor",name:"server",static:!1,private:!1,access:{has:L=>"server"in L,get:L=>L.server,set:(L,re)=>{L.server=re}},metadata:W},H,G),Ve(F,null,k,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:L=>"verified"in L,get:L=>L.verified,set:(L,re)=>{L.verified=re}},metadata:W},T,N),Ve(F,null,I,{kind:"accessor",name:"op",static:!1,private:!1,access:{has:L=>"op"in L,get:L=>L.op,set:(L,re)=>{L.op=re}},metadata:W},S,M),Ve(F,null,Y,{kind:"accessor",name:"edited",static:!1,private:!1,access:{has:L=>"edited"in L,get:L=>L.edited,set:(L,re)=>{L.edited=re}},metadata:W},fe,$),Ve(F,null,b,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:L=>"roleColor"in L,get:L=>L.roleColor,set:(L,re)=>{L.roleColor=re}},metadata:W},V,pe),Ve(F,null,ee,{kind:"accessor",name:"roleIcon",static:!1,private:!1,access:{has:L=>"roleIcon"in L,get:L=>L.roleIcon,set:(L,re)=>{L.roleIcon=re}},metadata:W},Q,ye),Ve(F,null,J,{kind:"accessor",name:"roleName",static:!1,private:!1,access:{has:L=>"roleName"in L,get:L=>L.roleName,set:(L,re)=>{L.roleName=re}},metadata:W},P,O),Ve(F,null,K,{kind:"accessor",name:"highlight",static:!1,private:!1,access:{has:L=>"highlight"in L,get:L=>L.highlight,set:(L,re)=>{L.highlight=re}},metadata:W},je,q),Ve(F,null,Z,{kind:"accessor",name:"ephemeral",static:!1,private:!1,access:{has:L=>"ephemeral"in L,get:L=>L.ephemeral,set:(L,re)=>{L.ephemeral=re}},metadata:W},ce,Ee),Ve(F,null,Me,{kind:"accessor",name:"timestamp",static:!1,private:!1,access:{has:L=>"timestamp"in L,get:L=>L.timestamp,set:(L,re)=>{L.timestamp=re}},metadata:W},Ce,Qe),Ve(F,null,ot,{kind:"accessor",name:"twentyFour",static:!1,private:!1,access:{has:L=>"twentyFour"in L,get:L=>L.twentyFour,set:(L,re)=>{L.twentyFour=re}},metadata:W},A,x),Ve(F,null,U,{kind:"accessor",name:"messageBodyOnly",static:!1,private:!1,access:{has:L=>"messageBodyOnly"in L,get:L=>L.messageBodyOnly,set:(L,re)=>{L.messageBodyOnly=re}},metadata:W},Ge,Ke),Ve(F,null,tt,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:L=>"lightTheme"in L,get:L=>L.lightTheme,set:(L,re)=>{L.lightTheme=re}},metadata:W},vt,St),Ve(F,null,v,{kind:"accessor",name:"compactMode",static:!1,private:!1,access:{has:L=>"compactMode"in L,get:L=>L.compactMode,set:(L,re)=>{L.compactMode=re}},metadata:W},y,w),Ve(F,null,B,{kind:"accessor",name:"noBackground",static:!1,private:!1,access:{has:L=>"noBackground"in L,get:L=>L.noBackground,set:(L,re)=>{L.noBackground=re}},metadata:W},X,se),Ve(F,null,ne,{kind:"accessor",name:"hasThread",static:!1,private:!1,access:{has:L=>"hasThread"in L,get:L=>L.hasThread,set:(L,re)=>{L.hasThread=re}},metadata:W},ae,be),Ve(F,null,ze,{kind:"accessor",name:"dismissMessageClicked",static:!1,private:!1,access:{has:L=>"dismissMessageClicked"in L,get:L=>L.dismissMessageClicked,set:(L,re)=>{L.dismissMessageClicked=re}},metadata:W},we,Pe),Ve(null,t={value:e},a,{kind:"class",name:e.name,metadata:W},null,i),e=t.value,W&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:W})})(),ie(F,"styles",me`
		:host {
			color: #dcddde;
			display: flex;
			flex-direction: column;
			font-size: 0.9em;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;

			position: relative;
			word-wrap: break-word;
			-webkit-user-select: text;
			-moz-user-select: text;
			-ms-user-select: text;
			user-select: text;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			min-height: 1.375rem;
			padding-left: 1em;
			padding-right: 48px;
			margin-top: inherit;
			margin-bottom: inherit;
			line-height: 16px;
		}

		.discord-message-inner {
			display: flex;
			position: relative;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
		}

		.discord-message-inner-center {
			align-items: center;
		}

		:host([message-body-only]) {
			margin-top: 0px !important;
			padding-top: 0.125rem !important;
			padding-bottom: 0.0625rem !important;
		}

		:host([highlight]),
		:host([ephemeral]) {
			padding-right: 5px;
			position: relative;
		}

		:host([highlight])::before,
		:host([ephemeral])::before {
			content: '';
			position: absolute;
			display: block;
			top: 0;
			left: 0;
			bottom: 0;
			pointer-events: none;
			width: 2px;
		}

		:host([highlight]) {
			background-color: rgba(250, 166, 26, 0.1);
		}

		:host([highlight][light-theme]) {
			background-color: rgba(250, 166, 26, 0.1);
		}

		:host([highlight])::before {
			background-color: #faa61a;
		}

		:host([light-theme][highlight])::before {
			background-color: #af7615;
		}

		:host([ephemeral]) {
			background-color: rgba(88, 101, 242, 0.05);
		}

		:host([ephemeral]:hover) {
			background-color: rgba(88, 101, 242, 0.1);
		}

		:host([ephemeral])::before {
			background-color: #5865f2;
		}

		:host([light-theme]) {
			color: #2e3338;
			border-color: #eceeef;
		}

		.discord-author-avatar {
			margin-right: 16px;
			margin-top: 5px;
			min-width: 40px;
			z-index: 1;
			display: flex;
		}

		.discord-author-avatar img {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			cursor: pointer;
		}

		.discord-message-timestamp {
			color: #72767d;
			font-size: 12px;
			margin-left: 3px;
		}

		.discord-message-body-only-indent {
			width: 56px;
		}

		:host(:hover) .discord-message-timestamp-hover::before {
			content: attr(datetime);
		}

		:host([light-theme]) .discord-message-timestamp {
			color: #747f8d;
		}

		.discord-message-edited {
			color: #72767d;
			font-size: 10px;
		}

		:host([light-theme]) .discord-message-edited {
			color: #99aab5;
		}

		.discord-message-content {
			width: 100%;
			line-height: 160%;
			font-weight: normal;
			padding-top: 2px;
		}

		.discord-message-body {
			font-size: 1rem;
			font-weight: 400;
			word-break: break-word;
			position: relative;
		}

		:host([light-theme]) .discord-message-timestamp,
		:host([compact-mode]) .discord-message:hover .discord-message-timestamp {
			color: #99aab5;
		}

		:host([light-theme][compact-mode]).discord-message-timestamp {
			color: #d1d9de;
		}

		:host([compact-mode]) .discord-message-timestamp {
			display: inline-block;
			width: 3.1rem;
			text-align: right;
			font-size: 0.6875rem;
			line-height: 1.375rem;
			margin-right: 0.25rem;
			margin-left: 0;
			text-indent: 0;
		}

		:host([compact-mode]) .discord-message-body {
			line-height: 1.375rem;
			padding-left: 10px;
			text-indent: -6px;
		}

		:host([compact-mode]) .discord-message-compact-indent {
			padding-left: 10px;
		}

		:host .discord-message-markup {
			font-size: 1rem;
			line-height: 1.375rem;
			word-wrap: break-word;
			user-select: text;
			font-weight: 400;
			display: inline;
		}

		:host(:hover) {
			background-color: hsl(0 calc(1 * 0%) 0.8%/0.03);
		}

		:host([highlight]:hover) {
			background-color: hsl(40 calc(1 * 86.4%) 56.9%/0.08);
		}

		:host([has-thread]):after {
			width: 2rem;
			left: 2.2rem;
			top: 1.75rem;
			border-left: 2px solid #4f545c;
			border-bottom: 2px solid #4f545c;
			border-bottom-left-radius: 8px;
			bottom: 29px;
			content: '';
			position: absolute;
		}

		:host([light-theme][has-Thread]):after {
			border-color: #747f8d;
		}

		.discord-message-ephemeral {
			margin-top: 4px;
			font-size: 12px;
			font-weight: 400;
			color: #72767d;
		}

		:host([light-theme]) .discord-message-ephemeral {
			color: #747f8d;
		}

		.discord-message-ephemeral .discord-message-ephemeral-link {
			color: #00aff4;
			font-weight: 500;
			cursor: pointer;
		}

		.discord-message-ephemeral .discord-message-ephemeral-link:hover {
			text-decoration: underline;
		}

		.discord-message-ephemeral .discord-message-ephemeral-icon {
			margin-right: 4px;
			vertical-align: text-bottom;
		}
	`),ge(e,i),e})();var Fa=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Ii=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var n,_,g;let a=[_e("discord-ordered-list")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[];return n=class extends r{constructor(){super(...arguments);z(this,_,Ii(this,o,1));z(this,g,(Ii(this,d),Ii(this,h,1)));Ii(this,c)}get start(){return j(this,_)}set start(u){C(this,_,u)}get startLength(){return j(this,g)}set startLength(u){C(this,g,u)}checkChildren(){if(!Array.from(this.children).every(f=>{const H=f.tagName.toLowerCase();return H==="discord-list-item"||H==="discord-unordered-list"||H==="discord-ordered-list"}))throw new bi("All direct children inside of a <discord-ordered-list> components must be one of <discord-unordered-list>, <discord-ordered-list>, or <discord-list-item>.")}willUpdate(){const u=Array.from(this.children).filter(H=>H.tagName.toLowerCase()==="discord-list-item").length,f=this.start+u;this.startLength=f.toString().length}render(){return this.checkChildren(),D`<ol start=${this.start} style="--totalCharacters:${this.startLength}">
			<slot></slot>
		</ol>`}},_=new WeakMap,g=new WeakMap,e=n,(()=>{const u=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({type:Number,reflect:!0})],l=[Bt()],Fa(n,null,s,{kind:"accessor",name:"start",static:!1,private:!1,access:{has:f=>"start"in f,get:f=>f.start,set:(f,H)=>{f.start=H}},metadata:u},o,d),Fa(n,null,l,{kind:"accessor",name:"startLength",static:!1,private:!1,access:{has:f=>"startLength"in f,get:f=>f.startLength,set:(f,H)=>{f.startLength=H}},metadata:u},h,c),Fa(null,t={value:e},a,{kind:"class",name:e.name,metadata:u},null,i),e=t.value,u&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:u})})(),ie(n,"styles",me`
		:host > ol {
			list-style-image: initial;
			list-style-type: decimal;
			list-style-position: outside;
			margin-bottom: 0px;
			margin-top: 4px;
			margin-right: 0px;
			margin-left: calc(0.4em + 0.6em * var(--totalCharacters));
			padding: 0px;
		}
	`),Ii(e,i),e})();var xr=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Za=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var l,h;let a=[_e("discord-pre")],t,i=[],e,r=he,s,o=[],d=[];return l=class extends r{constructor(){super(...arguments);z(this,h,Za(this,o,!1));Za(this,d)}get embed(){return j(this,h)}set embed(_){C(this,h,_)}render(){return D`<pre><slot></slot
		></pre>`}},h=new WeakMap,e=l,(()=>{const _=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({type:Boolean,reflect:!0})],xr(l,null,s,{kind:"accessor",name:"embed",static:!1,private:!1,access:{has:g=>"embed"in g,get:g=>g.embed,set:(g,p)=>{g.embed=p}},metadata:_},o,d),xr(null,t={value:e},a,{kind:"class",name:e.name,metadata:_},null,i),e=t.value,_&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:_})})(),ie(l,"styles",me`
		:host pre {
			border-radius: 4px;
			padding: 0;
			font-size: 0.75rem;
			line-height: 1rem;
			margin-top: 6px;
			white-space: pre-wrap;
			background-clip: border-box;
			width: 90%;
			border: none;
		}

		:host([embed]) pre {
			margin: 0;
			margin-top: 6px;
			width: 100%;
		}
	`),Za(e,i),e})();var $r=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Ya=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var l,h;let a=[_e("discord-quote")],t,i=[],e,r=he,s,o=[],d=[];return l=class extends r{constructor(){super(...arguments);z(this,h,Ya(this,o,!1));Ya(this,d)}get lightTheme(){return j(this,h)}set lightTheme(_){C(this,h,_)}render(){return D`
			<div class="discord-quote-divider"></div>
			<!-- display: inline -->
			<blockquote><slot></slot></blockquote>
		`}},h=new WeakMap,e=l,(()=>{const _=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[Ne({context:Be,subscribe:!0}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],$r(l,null,s,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:g=>"lightTheme"in g,get:g=>g.lightTheme,set:(g,p)=>{g.lightTheme=p}},metadata:_},o,d),$r(null,t={value:e},a,{kind:"class",name:e.name,metadata:_},null,i),e=t.value,_&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:_})})(),ie(l,"styles",me`
		:host {
			display: flex;
		}

		.discord-quote-divider {
			background-color: #4f545c;
			border-radius: 4px;
			font-size: 0.9em;
			font-style: normal;
			font-weight: 400;
			margin: 0;
			padding: 0;
			width: 4px;
		}

		:host([light-theme]) .discord-quote-divider {
			background-color: #c4c9ce;
		}

		blockquote {
			margin-block-end: unset;
			margin-block-start: unset;
			margin-inline-end: unset;
			margin-inline-start: unset;
			padding: 0 8px 0 12px;
		}
	`),Ya(e,i),e})();var ii=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},mt=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var I,S,M,Y,fe,$,b;let a=[_e("discord-reaction")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[],k,T=[],N=[];return I=class extends r{constructor(){super(...arguments);z(this,S,mt(this,o,void 0));z(this,M,(mt(this,d),mt(this,h,":emoji:")));z(this,Y,(mt(this,c),mt(this,_,1)));z(this,fe,(mt(this,g),mt(this,m,!1)));z(this,$,(mt(this,u),mt(this,H,!1)));z(this,b,(mt(this,G),mt(this,T,!1)));ie(this,"handleReactionClick",(mt(this,N),ee=>{this.interactive&&(ee.shiftKey?this.count--:this.count++,this.count<=0&&(this.count=1))}))}get emoji(){return j(this,S)}set emoji(ee){C(this,S,ee)}get name(){return j(this,M)}set name(ee){C(this,M,ee)}get count(){return j(this,Y)}set count(ee){C(this,Y,ee)}get reacted(){return j(this,fe)}set reacted(ee){C(this,fe,ee)}get interactive(){return j(this,$)}set interactive(ee){C(this,$,ee)}get lightTheme(){return j(this,b)}set lightTheme(ee){C(this,b,ee)}render(){return D`<div class="discord-reaction-inner" @click=${this.handleReactionClick} @keydown=${this.handleReactionClick}>
			<img src=${le(this.emoji)} alt=${le(this.name)} draggable="false" />
			<span class="discord-reaction-count">${this.count}</span>
		</div>`}},S=new WeakMap,M=new WeakMap,Y=new WeakMap,fe=new WeakMap,$=new WeakMap,b=new WeakMap,e=I,(()=>{const ee=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E()],l=[E()],n=[E({type:Number})],p=[E({type:Boolean,reflect:!0})],f=[E({type:Boolean})],k=[Ne({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],ii(I,null,s,{kind:"accessor",name:"emoji",static:!1,private:!1,access:{has:Q=>"emoji"in Q,get:Q=>Q.emoji,set:(Q,ye)=>{Q.emoji=ye}},metadata:ee},o,d),ii(I,null,l,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:Q=>"name"in Q,get:Q=>Q.name,set:(Q,ye)=>{Q.name=ye}},metadata:ee},h,c),ii(I,null,n,{kind:"accessor",name:"count",static:!1,private:!1,access:{has:Q=>"count"in Q,get:Q=>Q.count,set:(Q,ye)=>{Q.count=ye}},metadata:ee},_,g),ii(I,null,p,{kind:"accessor",name:"reacted",static:!1,private:!1,access:{has:Q=>"reacted"in Q,get:Q=>Q.reacted,set:(Q,ye)=>{Q.reacted=ye}},metadata:ee},m,u),ii(I,null,f,{kind:"accessor",name:"interactive",static:!1,private:!1,access:{has:Q=>"interactive"in Q,get:Q=>Q.interactive,set:(Q,ye)=>{Q.interactive=ye}},metadata:ee},H,G),ii(I,null,k,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:Q=>"lightTheme"in Q,get:Q=>Q.lightTheme,set:(Q,ye)=>{Q.lightTheme=ye}},metadata:ee},T,N),ii(null,t={value:e},a,{kind:"class",name:e.name,metadata:ee},null,i),e=t.value,ee&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:ee})})(),ie(I,"styles",me`
		:host > *:first-child {
			border-radius: 0.5rem;
			cursor: pointer;
			flex-shrink: 0;
			margin-right: 0.25rem;
			margin-bottom: 0.25rem;
			user-select: none;
			transition: none 0.1s ease;
			transition-property: background-color, border-color;
			background-color: #2f3136;
			border: 1px solid transparent;
		}

		:host([light-theme]) > *:first-child {
			background-color: #f2f3f5;
		}

		:host > *:first-child:hover {
			background-color: #36393f;
			border-color: #fff2;
		}

		:host([light-theme]:not([reacted])) > *:first-child:hover {
			background-color: white;
			border-color: #0003;
		}

		:host([reacted]) > *:first-child {
			background-color: rgba(88, 101, 242, 0.15);
			border-color: #5865f2;
		}

		:host([light-theme][reacted]) > *:first-child {
			background-color: #e7e9fd;
		}

		:host .discord-reaction-inner {
			display: flex;
			align-items: center;
			padding: 0.125rem 0.375rem;
		}

		:host img {
			width: 1rem;
			height: 1rem;
			margin: 0.125rem 0;
			min-width: auto;
			min-height: auto;
			object-fit: contain;
			vertical-align: bottom;
		}

		:host .discord-reaction-count {
			font-size: 0.875rem;
			font-weight: 500;
			margin-left: 0.375rem;
			text-align: center;
			color: #b9bbbe;
		}

		:host([light-theme]) .discord-reaction-count {
			color: #4f5660;
		}

		:host([reacted]) .discord-reaction-count {
			color: #dee0fc;
		}

		:host([light-theme][reacted]) .discord-reaction-count {
			color: #5865f2;
		}
	`),mt(e,i),e})();var mn=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},pn=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var s;let a=[_e("discord-reactions")],t,i=[],e,r=he;return s=class extends r{render(){return D`<slot></slot>`}},e=s,(()=>{const d=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;mn(null,t={value:e},a,{kind:"class",name:e.name,metadata:d},null,i),e=t.value,d&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d})})(),ie(s,"styles",me`
		:host {
			display: flex;
			-webkit-box-flex: 1;
			-ms-flex: 1 0 auto;
			flex: 1 0 auto;
			align-items: center;
			flex-wrap: wrap;
		}
	`),pn(e,i),e})();var Qa=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Ai=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var n,_,g;let a=[_e("discord-spoiler")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[];return n=class extends r{constructor(){super(...arguments);z(this,_,Ai(this,o,!1));z(this,g,(Ai(this,d),Ai(this,h,!1)));Ai(this,c)}get activated(){return j(this,_)}set activated(u){C(this,_,u)}get lightTheme(){return j(this,g)}set lightTheme(u){C(this,g,u)}render(){return D`<slot
			@click=${()=>{this.activated=!0}}
			@keydown=${()=>{this.activated=!0}}
		></slot>`}},_=new WeakMap,g=new WeakMap,e=n,(()=>{const u=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({type:Boolean,reflect:!0})],l=[Ne({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],Qa(n,null,s,{kind:"accessor",name:"activated",static:!1,private:!1,access:{has:f=>"activated"in f,get:f=>f.activated,set:(f,H)=>{f.activated=H}},metadata:u},o,d),Qa(n,null,l,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:f=>"lightTheme"in f,get:f=>f.lightTheme,set:(f,H)=>{f.lightTheme=H}},metadata:u},h,c),Qa(null,t={value:e},a,{kind:"class",name:e.name,metadata:u},null,i),e=t.value,u&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:u})})(),ie(n,"styles",me`
		:host {
			background-color: #202225;
			border-radius: 3px;
			color: transparent;
			cursor: pointer;
		}

		:host([light-theme]) {
			background-color: #c4c9ce;
		}

		:host(:hover) {
			background-color: rgba(32, 34, 37, 0.8);
		}

		:host([light-theme]:hover) {
			background-color: #cfd3d7;
		}

		:host([activated]) {
			color: inherit;
			background-color: hsla(0, 0%, 100%, 0.1);
		}

		:host([light-theme][activated]) {
			background-color: #e5e5e5;
		}
	`),Ai(e,i),e})();const gn=xe`
	<path fill="currentColor" d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"></path>
`;function _n(a={}){return D`<svg ${$e(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		${gn}
	</svg>`}var Yt=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0},Ri=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0};(()=>{var u,f,H,G;let a=[_e("discord-string-select-menu")],t,i=[],e,r=he,s=[],o,d=[],l=[],h,c=[],n=[],_,g=[],p=[],m;return u=class extends r{constructor(){super(...arguments);z(this,f,(Yt(this,s),Yt(this,d,void 0)));z(this,H,(Yt(this,l),Yt(this,c,"Make a selection")));z(this,G,(Yt(this,n),Yt(this,g,!1)));Yt(this,p)}get disabled(){return j(this,f)}set disabled(N){C(this,f,N)}get placeholder(){return j(this,H)}set placeholder(N){C(this,H,N)}get lightTheme(){return j(this,G)}set lightTheme(N){C(this,G,N)}render(){return D`
			<div class="${Lt({"discord-string-select-menu":!0,"discord-string-select-menu-disabled":this.disabled})}">
				<label class="discord-string-select-menu-label">
					<div class="${Lt({"discord-string-select-inside-menu":!0,"discord-string-select-menu-disabled":this.disabled})}">
						<span>${this.placeholder}</span> ${_n({class:"discord-expand-more-icon"})}
						<span class="discord-string-select-menu-hidden"><input type="checkbox" @click=${this._onClick} /></span>
					</div>
				</label>
			</div>
			<div class="discord-string-select-menu-option-slot discord-string-select-menu-hidden"><slot></slot></div>
		`}_onClick(){var M,Y,fe;const N=(M=this.shadowRoot)==null?void 0:M.querySelectorAll("svg.discord-expand-more-icon").item(0),I=(Y=this.shadowRoot)==null?void 0:Y.querySelectorAll("div.discord-string-select-menu-option-slot").item(0),S=(fe=this.shadowRoot)==null?void 0:fe.querySelectorAll("div.discord-string-select-menu").item(0);S!=null&&S.className.includes("discord-string-select-menu-disabled")||(I!=null&&I.className.includes("discord-string-select-menu-hidden")?(I==null||I.setAttribute("class","discord-string-select-menu-option-slot"),N==null||N.setAttribute("class","discord-expand-more-icon discord-string-select-menu-rotated")):(I==null||I.setAttribute("class","discord-string-select-menu-option-slot discord-string-select-menu-hidden"),N==null||N.setAttribute("class","discord-expand-more-icon")))}},f=new WeakMap,H=new WeakMap,G=new WeakMap,e=u,(()=>{const N=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;o=[E({type:Boolean,attribute:"disabled"})],h=[E({attribute:"placeholder"})],_=[Ne({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],m=[Is({once:!1,capture:!0,passive:!0})],Ri(u,null,o,{kind:"accessor",name:"disabled",static:!1,private:!1,access:{has:I=>"disabled"in I,get:I=>I.disabled,set:(I,S)=>{I.disabled=S}},metadata:N},d,l),Ri(u,null,h,{kind:"accessor",name:"placeholder",static:!1,private:!1,access:{has:I=>"placeholder"in I,get:I=>I.placeholder,set:(I,S)=>{I.placeholder=S}},metadata:N},c,n),Ri(u,null,_,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:I=>"lightTheme"in I,get:I=>I.lightTheme,set:(I,S)=>{I.lightTheme=S}},metadata:N},g,p),Ri(u,null,m,{kind:"method",name:"_onClick",static:!1,private:!1,access:{has:I=>"_onClick"in I,get:I=>I._onClick},metadata:N},null,s),Ri(null,t={value:e},a,{kind:"class",name:e.name,metadata:N},null,i),e=t.value,N&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:N})})(),ie(u,"styles",me`
		.discord-string-select-menu {
			height: 36px;
			min-height: 36px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-sizing: border-box;
			cursor: pointer;
			color: color-mix(in oklab, hsl(210 calc(1 * 9.1%) 87.1% / 1) 100%, black 0%);
			border: 1px solid;
			border-radius: 4px;
			background-color: color-mix(in oklab, hsl(225 calc(1 * 6.3%) 12.5% / 1) 100%, black 0%);
			border-color: color-mix(in oklab, hsl(225 calc(1 * 6.3%) 12.5% / 1) 100%, black 0%);
			padding: 8px !important;
			width: 90%;
			max-width: 400px;
			margin-right: 16px;
			transition: border 0.2s ease;
			font-weight: 500;
		}

		:host([light-theme]) .discord-string-select-menu {
			background-color: #ebebeb !important;
			border-color: #b5b5b5 !important;
			border: 1px solid;
			color: #2e3338;
		}

		:host([light-theme]) .discord-string-select-menu-option-slot {
			background-color: #ebebeb !important;
			border-color: #b5b5b5 !important;
			border: 1px solid;
			color: #2e3338;
		}

		.discord-string-select-menu-option-slot {
			overflow-y: auto;
			overflow-x: hidden;
			color: currentColor;
			border: none;
			border-top-left-radius: 0px;
			border-top-right-radius: 0px;
			border-color: color-mix(in oklab, hsl(225 calc(1 * 6.3%) 12.5% / 1) 100%, black 0%);
			background-color: color-mix(in oklab, hsl(220 calc(1 * 6.5%) 18% / 1) 100%, black 0%);

			cursor: pointer;
			box-sizing: border-box;
			border-radius: 4px;
			gap: 10px;
			display: block;
			max-height: 282px;
			position: absolute;

			width: 90%;
			max-width: 400px;
			z-index: 1002;
		}

		.discord-string-select-menu-option-slot::-webkit-scrollbar {
			width: 5px;
			background-color: transparent;
		}

		.discord-string-select-menu-option-slot::-webkit-scrollbar-track {
			background-color: transparent;
		}

		.discord-string-select-menu-option-slot::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background-color: rgba(0, 0, 0, 0.3);
		}

		.discord-string-select-menu-label {
			width: 100%;
		}

		.discord-string-select-inside-menu {
			padding: 8px 8px 8px 12px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.discord-string-select-menu-hidden {
			display: none;
		}

		.discord-string-select-menu-disabled {
			cursor: not-allowed !important;
			opacity: 0.5;
		}

		.discord-string-select-inside-menu:hover {
			border-color: black;
			cursor: pointer;
		}

		.discord-string-select-menu-rotated {
			transform: rotate(-180deg);
		}

		.discord-expand-more-icon {
			margin-left: auto;
		}
	`),Yt(e,i),e})();var mi=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},jt=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var k,T,N,I,S,M;let a=[_e("discord-string-select-menu-option")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[];return k=class extends r{constructor(){super(...arguments);z(this,T,jt(this,o,void 0));z(this,N,(jt(this,d),jt(this,h,"emoji")));z(this,I,(jt(this,c),jt(this,_,void 0)));z(this,S,(jt(this,g),jt(this,m,void 0)));z(this,M,(jt(this,u),jt(this,H,!1)));jt(this,G)}get emoji(){return j(this,T)}set emoji($){C(this,T,$)}get emojiName(){return j(this,N)}set emojiName($){C(this,N,$)}get label(){return j(this,I)}set label($){C(this,I,$)}get description(){return j(this,S)}set description($){C(this,S,$)}checkLabelIsProvided(){if(!this.label)throw new bi("The label of option is required")}get lightTheme(){return j(this,M)}set lightTheme($){C(this,M,$)}render(){return this.checkLabelIsProvided(),D`
			${de(this.emoji,()=>D`<img src=${this.emoji} alt=${le(this.emojiName)} draggable="true" class="discord-string-select-menu-option-emoji" />`)}
			<div class="discord-string-select-menu-option-ellipsis-text">
				<div class="discord-string-select-menu-option-ellipsis-text">
					<strong>${this.label}</strong>
				</div>
				${de(this.description,()=>D`<span>${this.description}</span>`)}
			</div>
		`}},T=new WeakMap,N=new WeakMap,I=new WeakMap,S=new WeakMap,M=new WeakMap,e=k,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({reflect:!0,attribute:"emoji"})],l=[E({reflect:!0,attribute:"emoji-name"})],n=[E({attribute:"label"})],p=[E({attribute:"description"})],f=[Ne({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],mi(k,null,s,{kind:"accessor",name:"emoji",static:!1,private:!1,access:{has:b=>"emoji"in b,get:b=>b.emoji,set:(b,V)=>{b.emoji=V}},metadata:$},o,d),mi(k,null,l,{kind:"accessor",name:"emojiName",static:!1,private:!1,access:{has:b=>"emojiName"in b,get:b=>b.emojiName,set:(b,V)=>{b.emojiName=V}},metadata:$},h,c),mi(k,null,n,{kind:"accessor",name:"label",static:!1,private:!1,access:{has:b=>"label"in b,get:b=>b.label,set:(b,V)=>{b.label=V}},metadata:$},_,g),mi(k,null,p,{kind:"accessor",name:"description",static:!1,private:!1,access:{has:b=>"description"in b,get:b=>b.description,set:(b,V)=>{b.description=V}},metadata:$},m,u),mi(k,null,f,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:b=>"lightTheme"in b,get:b=>b.lightTheme,set:(b,V)=>{b.lightTheme=V}},metadata:$},H,G),mi(null,t={value:e},a,{kind:"class",name:e.name,metadata:$},null,i),e=t.value,$&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),ie(k,"styles",me`
		:host {
			display: flex;
			align-items: center;
			max-width: 400px;
			padding: 8px 8px 8px 12px;
			gap: 10px;
			font-size: small;
		}

		:host(:hover) {
			background-color: rgba(255, 255, 255, 0.1);
		}

		:host([light-theme]) {
			background-color: #f2f3f5 !important;
			border-color: #d9d9d9 !important;
			color: #2e3338;
		}

		:host([light-theme]:hover) {
			background-color: rgba(204, 204, 204, 2) !important;
		}

		.discord-string-select-menu-option-emoji {
			margin-right: 4px;
			object-fit: contain;
			width: 1.375em;
			height: 1.375em;
			vertical-align: bottom;
		}

		.discord-string-select-menu-option-ellipsis-text {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	`),jt(e,i),e})();var Tr=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},qa=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var l,h;let a=[_e("discord-subscript")],t,i=[],e,r=he,s,o=[],d=[];return l=class extends r{constructor(){super(...arguments);z(this,h,qa(this,o,!1));qa(this,d)}get lightTheme(){return j(this,h)}set lightTheme(_){C(this,h,_)}render(){return D`
			<small>
				<span>
					<slot></slot>
				</span>
			</small>
		`}},h=new WeakMap,e=l,(()=>{const _=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[Ne({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],Tr(l,null,s,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:g=>"lightTheme"in g,get:g=>g.lightTheme,set:(g,p)=>{g.lightTheme=p}},metadata:_},o,d),Tr(null,t={value:e},a,{kind:"class",name:e.name,metadata:_},null,i),e=t.value,_&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:_})})(),ie(l,"styles",me`
		small {
			display: block;
			color: color-mix(in oklab, hsl(214 calc(1 * 8.1%) 61.2% / 1) 100%, black 0%);
			font-size: 0.8125rem;
			line-height: 1.11719rem;
		}

		:host([light-theme]) > small {
			color: color-mix(in oklab, hsl(228 calc(1 * 5.2%) 38% / 1) 100%, black 0%);
		}
	`),qa(e,i),e})();const vn=xe`
	<path d="M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z" fill="currentColor" />
	<path d="M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z" fill="currentColor" />
`;function bn(a={}){return D`<svg ${$e(a)} aria-hidden="false" width="24" height="24" viewBox="0 0 8 12">${vn}</svg>`}const yn=xe`
	<path
		fill="#3ba55c"
		fill-rule="evenodd"
		d="M17.7163041 15.36645368c-.0190957.02699568-1.9039523 2.6680735-2.9957762 2.63320406-3.0676659-.09785935-6.6733809-3.07188394-9.15694343-5.548738C3.08002193 9.9740657.09772497 6.3791404 0 3.3061316v-.024746C0 2.2060575 2.61386252.3152347 2.64082114.2972376c.7110335-.4971705 1.4917101-.3149497 1.80959713.1372281.19320342.2744561 2.19712724 3.2811005 2.42290565 3.6489167.09884826.1608492.14714912.3554431.14714912.5702838 0 .2744561-.07975258.5770327-.23701117.8751101-.1527655.2902036-.65262318 1.1664385-.89862055 1.594995.2673396.3768148.94804468 1.26429792 2.351016 2.66357424 1.39173858 1.39027775 2.28923588 2.07641807 2.67002628 2.34187563.4302146-.2452108 1.3086162-.74238132 1.5972981-.89423205.5447887-.28682915 1.0907006-.31944893 1.4568885-.08661115.3459689.2182151 3.3383754 2.21027167 3.6225641 2.41611376.2695862.19234426.4144887.5399137.4144887.91672846 0 .2969525-.089862.61190215-.2808189.88523346"
	/>
`;function wn(a={}){return D`<svg ${$e(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${yn}</svg>`}const kn=xe`
	<g fill="none" fill-rule="evenodd">
		<path
			fill="#99AAB5"
			d="M0 14.25V18h3.75L14.81 6.94l-3.75-3.75L0 14.25zM17.71 4.04c.39-.39.39-1.02 0-1.41L15.37.29c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
		/>
		<path d="M0 0h18v18H0" />
	</g>
`;function xn(a={}){return D`<svg ${$e(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${kn}</svg>`}const $n=xe`
	<g fill="none" fill-rule="evenodd">
		<path d="M0 0h18v18H0z" />
		<path
			fill="#99AAB5"
			d="M3.2765961.00034226C6.344262.0982016 9.949977 3.0722262 12.43353953 5.54908026c2.48356254 2.47685405 5.4658595 6.07177934 5.56358447 9.14478814 0 1.1000741-2.61386252 2.9908969-2.64082114 3.008894-.7110335.4971705-1.4917101.3149497-1.80959713-.1372281-.19320342-.2744561-2.19712724-3.2811005-2.42290565-3.6489167-.09884826-.1608492-.14714912-.3554431-.14714912-.5702838 0-.2744561.07975258-.5770327.23701117-.8751101.1527655-.2902036.65262318-1.1664385.89862055-1.594995-.2673396-.3768148-.94804468-1.26429792-2.351016-2.66357424C8.3695281 6.8223767 7.4720308 6.1362364 7.0912404 5.87077883c-.4302146.2452108-1.3086162.74238132-1.5972981.89423205-.5447887.28682915-1.0907006.31944893-1.4568885.08661115C3.6910849 6.63340693.6986784 4.64135036.4144897 4.43550827.1449035 4.243164.000001 3.89559457.000001 3.5187798c0-.29695252.089862-.61190217.2808189-.88523348.0190957-.02699568 1.9039523-2.6680735 2.9957762-2.63320406z"
		/>
	</g>
`;function Tn(a={}){return D`<svg ${$e(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${$n}</svg>`}const jn=xe`
	<path
		d="m16.908 8.39684-8.29587-8.295827-1.18584 1.184157 1.18584 1.18584-4.14834 4.1475v.00167l-1.18583-1.18583-1.185 1.18583 3.55583 3.55502-4.740831 4.74 1.185001 1.185 4.74083-4.74 3.55581 3.555 1.185-1.185-1.185-1.185 4.1475-4.14836h.0009l1.185 1.185z"
		fill="#b9bbbe"
	/>
`;function zn(a={}){return D`<svg ${$e(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${jn}</svg>`}const Cn=xe`
	<path
		d="M10 0C4.486 0 0 4.486 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.486 15.514 0 10 0ZM9 4H11V11H9V4ZM10 15.25C9.31 15.25 8.75 14.691 8.75 14C8.75 13.31 9.31 12.75 10 12.75C10.69 12.75 11.25 13.31 11.25 14C11.25 14.691 10.69 15.25 10 15.25Z"
		fill-rule="evenodd"
		clip-rule="evenodd"
		fill="currentColor"
	/>
`;function En(a={}){return D`<svg ${$e(a)} aria-hidden="false" width="20" height="20" viewBox="0 0 20 20">${Cn}</svg>`}const Mn=xe`
	<path
		xmlns="http://www.w3.org/2000/svg"
		d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
		fill="#ed4245"
	/>
`;function Sn(a={}){return D`<svg ${$e(a)} aria-hidden="false" width="20" height="20" viewBox="0 0 20 20">${Mn}</svg>`}const On=xe`
	<path
		fill="currentColor"
		d="M5.43309 21C5.35842 21 5.30189 20.9325 5.31494 20.859L5.99991 17H2.14274C2.06819 17 2.01168 16.9327 2.02453 16.8593L2.33253 15.0993C2.34258 15.0419 2.39244 15 2.45074 15H6.34991L7.40991 9H3.55274C3.47819 9 3.42168 8.93274 3.43453 8.85931L3.74253 7.09931C3.75258 7.04189 3.80244 7 3.86074 7H7.75991L8.45234 3.09903C8.46251 3.04174 8.51231 3 8.57049 3H10.3267C10.4014 3 10.4579 3.06746 10.4449 3.14097L9.75991 7H15.7599L16.4523 3.09903C16.4625 3.04174 16.5123 3 16.5705 3H18.3267C18.4014 3 18.4579 3.06746 18.4449 3.14097L17.7599 7H21.6171C21.6916 7 21.7481 7.06725 21.7353 7.14069L21.4273 8.90069C21.4172 8.95811 21.3674 9 21.3091 9H17.4099L17.0495 11.04H15.05L15.4104 9H9.41035L8.35035 15H10.5599V17H7.99991L7.30749 20.901C7.29732 20.9583 7.24752 21 7.18934 21H5.43309Z"
	/>
	<path
		fill="currentColor"
		d="M13.4399 12.96C12.9097 12.96 12.4799 13.3898 12.4799 13.92V20.2213C12.4799 20.7515 12.9097 21.1813 13.4399 21.1813H14.3999C14.5325 21.1813 14.6399 21.2887 14.6399 21.4213V23.4597C14.6399 23.6677 14.8865 23.7773 15.0408 23.6378L17.4858 21.4289C17.6622 21.2695 17.8916 21.1813 18.1294 21.1813H22.5599C23.0901 21.1813 23.5199 20.7515 23.5199 20.2213V13.92C23.5199 13.3898 23.0901 12.96 22.5599 12.96H13.4399Z"
	/>
`;function Dn(a={}){return D`<svg ${$e(a)} aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">${On}</svg>`}const Ln=xe`
	<g fill="none" fill-rule="evenodd">
		<path d="M18 0H0v18h18z" />
		<path fill="#3ba55c" d="M0 8h14.2l-3.6-3.6L12 3l6 6-6 6-1.4-1.4 3.6-3.6H0" />
	</g>
`;function Nn(a={}){return D`<svg ${$e(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${Ln}</svg>`}const Pn=xe`
	<g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
		<path d="M18 0H0v18h18z" />
		<path fill="#ed4245" d="M3.8 8l3.6-3.6L6 3 0 9l6 6 1.4-1.4L3.8 10H18V8" />
	</g>
`;function In(a={}){return D`<svg ${$e(a)} aria-hidden="false" width="18" height="18" viewBox="0 0 18 18">${Pn}</svg>`}var pi=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},zt=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var k,T,N,I,S,M;let a=[_e("discord-system-message")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[];return k=class extends r{constructor(){super(...arguments);z(this,T,zt(this,o,new Date));z(this,N,(zt(this,d),zt(this,h,"join")));z(this,I,(zt(this,c),zt(this,_,!1)));z(this,S,(zt(this,g),zt(this,m,!1)));z(this,M,(zt(this,u),zt(this,H,!1)));zt(this,G)}get timestamp(){return j(this,T)}set timestamp($){C(this,T,$)}get type(){return j(this,N)}set type($){C(this,N,$)}get channelName(){return j(this,I)}set channelName($){C(this,I,$)}get hasThread(){return j(this,S)}set hasThread($){C(this,S,$)}get lightTheme(){return j(this,M)}set lightTheme($){C(this,M,$)}checkType(){if(typeof this.type!="string")throw new TypeError("DiscordSystemMessage `type` prop must be a string.");if(!["join","leave","call","missed-call","boost","edit","thread","pin","alert","error"].includes(this.type))throw new RangeError("DiscordSystemMessage `type` prop must be one of: 'join', 'leave', 'call', 'missed-call', 'boost', 'edit', 'thread', 'pin', 'alert', 'error'")}willUpdate(){this.hasThread=Array.from(this.children).some($=>$.tagName.toLowerCase()==="discord-thread")}render(){return this.timestamp=qi(this.timestamp),this.checkType(),D`<div class="discord-message-icon">
				${sr(this.type,[["join",()=>Nn()],["leave",()=>In()],["call",()=>wn()],["missed-call",()=>Tn()],["edit",()=>xn()],["boost",()=>bn()],["thread",()=>Dn()],["pin",()=>zn()],["alert",()=>En()],["error",()=>Sn()]])}
			</div>
			<div class="discord-message-content">
				<span>
					<slot></slot>
					<span class="discord-message-timestamp">${this.timestamp}</span>
				</span>
				<slot name="reactions"></slot>
				<slot name="thread"></slot>
			</div>`}},T=new WeakMap,N=new WeakMap,I=new WeakMap,S=new WeakMap,M=new WeakMap,e=k,(()=>{const $=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({type:String})],l=[E({reflect:!0,attribute:"type"})],n=[E({type:Boolean,reflect:!0,attribute:"channel-name"})],p=[E({type:Boolean,reflect:!0,attribute:"has-thread"})],f=[Ne({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],pi(k,null,s,{kind:"accessor",name:"timestamp",static:!1,private:!1,access:{has:b=>"timestamp"in b,get:b=>b.timestamp,set:(b,V)=>{b.timestamp=V}},metadata:$},o,d),pi(k,null,l,{kind:"accessor",name:"type",static:!1,private:!1,access:{has:b=>"type"in b,get:b=>b.type,set:(b,V)=>{b.type=V}},metadata:$},h,c),pi(k,null,n,{kind:"accessor",name:"channelName",static:!1,private:!1,access:{has:b=>"channelName"in b,get:b=>b.channelName,set:(b,V)=>{b.channelName=V}},metadata:$},_,g),pi(k,null,p,{kind:"accessor",name:"hasThread",static:!1,private:!1,access:{has:b=>"hasThread"in b,get:b=>b.hasThread,set:(b,V)=>{b.hasThread=V}},metadata:$},m,u),pi(k,null,f,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:b=>"lightTheme"in b,get:b=>b.lightTheme,set:(b,V)=>{b.lightTheme=V}},metadata:$},H,G),pi(null,t={value:e},a,{kind:"class",name:e.name,metadata:$},null,i),e=t.value,$&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:$})})(),ie(k,"styles",me`
		:host {
			color: #8e9297;
			display: flex;
			font-weight: 400;
			font-size: 1rem;
			font-family: 'gg sans', 'Noto Sans', Whitney, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
			padding: 0px 1em;

			position: relative;
			word-wrap: break-word;
			-webkit-user-select: text;
			-moz-user-select: text;
			-ms-user-select: text;
			user-select: text;
			-webkit-box-flex: 0;
			-ms-flex: 0 0 auto;
			flex: 0 0 auto;
			padding-right: 0;
			min-height: 1.375rem;
			padding-right: 48px !important;
			margin-top: 1.0625rem;
		}

		:host([light-theme]) {
			color: #2e3338;
			border-color: #eceeef;
		}

		:host([channel-name]) {
			color: #fff;
		}

		:host([light-theme][channel-name]) {
			color: #060607;
		}

		:host([type='boost']) svg {
			color: #ff73fa;
		}

		:host([type='alert']) svg {
			color: #faa81a;
		}

		:host([type='error']) svg {
			color: #faa81a;
		}

		:host .discord-message-icon {
			margin-right: 16px;
			margin-top: 5px;
			min-width: 40px;
			display: flex;
			align-items: flex-start;
			justify-content: center;
		}

		:host .discord-message-icon svg {
			width: 16px;
			height: 16px;
		}

		:host .discord-message-timestamp {
			color: #72767d;
			font-size: 12px;
			margin-left: 3px;
		}

		:host([light-theme]) .discord-message-timestamp {
			color: #747f8d;
		}

		:host .discord-message-content {
			width: 100%;
			line-height: 160%;
			font-weight: normal;
			padding-top: 2px;
			display: flex;
			flex-direction: column;
		}

		:host .discord-message-content ::slotted(i) {
			font-style: normal;
			cursor: pointer;
			color: white;
			font-weight: 500;
		}

		:host([light-theme]) .discord-message-content ::slotted(i) {
			color: #060607;
		}

		:host .discord-message-content ::slotted(i:hover) {
			text-decoration: underline;
		}

		:host(:hover) {
			background-color: rgba(4, 4, 5, 0.07);
		}

		:host([light-theme]:hover) {
			background-color: rgba(6, 6, 7, 0.02);
		}

		:host([has-thread]):after {
			width: 2rem;
			left: 2.2rem;
			top: 1.75rem;
			border-left: 2px solid #4f545c;
			border-bottom: 2px solid #4f545c;
			border-bottom-left-radius: 8px;
			bottom: 29px;
			content: '';
			position: absolute;
		}

		:host([light-theme][has-thread]):after {
			border-color: #747f8d;
		}
	`),zt(e,i),e})();var ea=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},ai=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var p,m,u,f;let a=[_e("discord-tenor-video")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[];return p=class extends r{constructor(){super(...arguments);z(this,m,ai(this,o,void 0));z(this,u,(ai(this,d),ai(this,h,void 0)));z(this,f,(ai(this,c),ai(this,_,void 0)));ai(this,g)}get url(){return j(this,m)}set url(k){C(this,m,k)}get height(){return j(this,u)}set height(k){C(this,u,k)}get width(){return j(this,f)}set width(k){C(this,f,k)}render(){return D`
			<div class="discord-tenor-video-wrapper" height=${le(this.height)} width=${le(this.width)}>
				<a target="_blank" class="discord-tenor-video-original-link" href=${le(this.url)}> </a>
				<video
					autoplay
					muted
					loop
					preload="auto"
					src=${le(this.url)}
					class="discord-tenor-video"
					height=${le(this.height)}
					width=${le(this.width)}
				></video>
				<div class="discord-tenor-video-image-accessory">
					<div class="discord-tenor-video-gif-tag"></div>
				</div>
			</div>
		`}},m=new WeakMap,u=new WeakMap,f=new WeakMap,e=p,(()=>{const k=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E()],l=[E({type:Number})],n=[E({type:Number})],ea(p,null,s,{kind:"accessor",name:"url",static:!1,private:!1,access:{has:T=>"url"in T,get:T=>T.url,set:(T,N)=>{T.url=N}},metadata:k},o,d),ea(p,null,l,{kind:"accessor",name:"height",static:!1,private:!1,access:{has:T=>"height"in T,get:T=>T.height,set:(T,N)=>{T.height=N}},metadata:k},h,c),ea(p,null,n,{kind:"accessor",name:"width",static:!1,private:!1,access:{has:T=>"width"in T,get:T=>T.width,set:(T,N)=>{T.width=N}},metadata:k},_,g),ea(null,t={value:e},a,{kind:"class",name:e.name,metadata:k},null,i),e=t.value,k&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:k})})(),ie(p,"styles",me`
		:host {
			color: #dcddde;
			display: flex;
			font-size: 13px;
			line-height: 150%;
			margin-bottom: 8px;
			margin-top: 8px;
		}

		.discord-tenor-video-wrapper {
			max-width: 169px;
			width: 100%;
			cursor: pointer;
			display: block;
			position: relative;
			-webkit-user-select: text;
			-moz-user-select: text;
			user-select: text;
			overflow: hidden;
			border-radius: 3px;
		}

		.discord-tenor-video {
			-webkit-box-align: center;
			-webkit-box-pack: center;
			align-items: center;
			border-radius: 0;
			cursor: pointer;
			display: flex;
			height: 100%;
			justify-content: center;
			max-height: 100%;
			width: 100%;
			left: 0px;
			top: 0px;
		}

		.discord-tenor-video-original-link {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			z-index: 1;
		}

		.discord-tenor-video-image-accessory {
			position: absolute;
			top: 6px;
			left: 6px;
			z-index: 3;
		}

		.discord-tenor-video-gif-tag {
			background-image: url('data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIyIiB2aWV3Qm94PSIwIDAgMjkgMjIiIHdpZHRoPSIyOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBkPSJtMCAwaDI5djIyaC0yOXoiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNhKSI+PHBhdGggZD0ibTI2IDBoLTIzYy0xLjY1Njg1IDAtMyAxLjM0MzE1LTMgM3YxNmMwIDEuNjU2OSAxLjM0MzE1IDMgMyAzaDIzYzEuNjU2OSAwIDMtMS4zNDMxIDMtM3YtMTZjMC0xLjY1Njg1LTEuMzQzMS0zLTMtM3oiIGZpbGw9IiMyMDIyMjUiIGZpbGwtb3BhY2l0eT0iLjgiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtOC4wMTcyNSAxNi4yMDU0Yy0uODQxIDAtMS41ODUzNC0uMjE3NS0yLjIzMy0uNjUyNS0uNjQ3NjctLjQzNS0xLjE1MDM0LTEuMDQ0LTEuNTA4LTEuODI3LS4zNTc2Ny0uNzkyNi0uNTM2NS0xLjcwMTMtLjUzNjUtMi43MjYgMC0xLjAxNDk3LjE4ODUtMS45MTM5Ny41NjU1LTIuNjk2OTcuMzg2NjYtLjc4My45NDI1LTEuMzk2ODMgMS42Njc1LTEuODQxNS43MzQ2Ni0uNDQ0NjYgMS42MDk1LS42NjcgMi42MjQ1LS42NjcuODYwMzMgMCAxLjYyODg1LjE4MzY3IDIuMzA1NDUuNTUxLjY4NjQuMzY3MzQgMS4yMDM1Ljg4NDUgMS41NTE1IDEuNTUxNWwtMS42Mzg1IDEuMTc0NWMtLjQ5My0uOTA4NjYtMS4yMjc2Mi0xLjM2My0yLjIwMzk1LTEuMzYzLS44ODkzNCAwLTEuNTcwODQuMjktMi4wNDQ1Ljg3LS40NzM2Ny41NzAzNC0uNzEwNSAxLjM3NzUtLjcxMDUgMi40MjE0NyAwIDEuMDUzNy4yMzY4MyAxLjg2NTcuNzEwNSAyLjQzNi40NzM2Ni41NzA0IDEuMTU1MTYuODU1NSAyLjA0NDUuODU1NS4zOTYzMyAwIC43NTg4My0uMDcyNSAxLjA4NzUtLjIxNzUuMzM4MzUtLjE1NDYuNTk5MzUtLjM2MjUuNzgyOTUtLjYyMzV2LTEuMjQ3aC0yLjMwNTQ1di0xLjg4NWg0LjM2NDQ1djUuNjg0aC0xLjcxMWwtLjI3NTUtLjk1N2MtLjU3MDI5Ljc3MzQtMS40MTYxMiAxLjE2LTIuNTM3NDUgMS4xNnoiLz48cGF0aCBkPSJtMTYuNTQ0NCAxNi4wMDI0aC0yLjExN3YtMTAuMDA0OTdoMi4xMTd6Ii8+PHBhdGggZD0ibTIwLjY5MzMgMTYuMDAyNGgtMi4xMTd2LTEwLjAwNDk3aDYuNjg0NXYxLjkxNGgtNC41Njc1djIuMzc3OTdoMy43MTJ2MS45MTRoLTMuNzEyeiIvPjwvZz48L2c+PC9zdmc+');
			width: 29px;
			height: 22px;
		}
	`),ai(e,i),e})();var ta=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},ri=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var p,m,u,f;let a=[_e("discord-thread")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[];return p=class extends r{constructor(){super(...arguments);z(this,m,ri(this,o,"Thread"));z(this,u,(ri(this,d),ri(this,h,"See Thread")));z(this,f,(ri(this,c),ri(this,_,!1)));ri(this,g)}get name(){return j(this,m)}set name(k){C(this,m,k)}get cta(){return j(this,u)}set cta(k){C(this,u,k)}get lightTheme(){return j(this,f)}set lightTheme(k){C(this,f,k)}render(){return D`
			<div class="discord-thread-top">
				<span class="discord-thread-name">${this.name}</span>
				<span class="discord-thread-cta" aria-hidden="true"> ${this.cta} › </span>
			</div>
			<span class="discord-thread-bottom">
				<slot></slot>
			</span>
		`}},m=new WeakMap,u=new WeakMap,f=new WeakMap,e=p,(()=>{const k=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E()],l=[E()],n=[Ne({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],ta(p,null,s,{kind:"accessor",name:"name",static:!1,private:!1,access:{has:T=>"name"in T,get:T=>T.name,set:(T,N)=>{T.name=N}},metadata:k},o,d),ta(p,null,l,{kind:"accessor",name:"cta",static:!1,private:!1,access:{has:T=>"cta"in T,get:T=>T.cta,set:(T,N)=>{T.cta=N}},metadata:k},h,c),ta(p,null,n,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:T=>"lightTheme"in T,get:T=>T.lightTheme,set:(T,N)=>{T.lightTheme=N}},metadata:k},_,g),ta(null,t={value:e},a,{kind:"class",name:e.name,metadata:k},null,i),e=t.value,k&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:k})})(),ie(p,"styles",me`
		:host {
			background-color: #2f3136;
			border-radius: 4px;
			cursor: pointer;
			margin-top: 8px;
			max-width: 480px;
			min-width: 0;
			padding: 8px;
			display: inline-flex;
			width: fit-content;
			flex-direction: column;
		}

		:host([light-theme]) {
			background-color: #f2f3f5;
		}

		:host .discord-thread-top {
			display: flex;
		}

		:host .discord-thread-bottom {
			font-size: 0.875rem;
			line-height: 1.125rem;
			align-items: center;
			color: #b9bbbe;
			display: flex;
			margin-top: 2px;
			white-space: nowrap;
		}

		:host([light-theme]) .discord-thread-bottom {
			color: #4f5660;
		}

		:host .discord-thread-name {
			font-size: 0.875rem;
			font-weight: 600;
			line-height: 1.125rem;
			color: white;
			margin-right: 8px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		:host([light-theme]) .discord-thread-name {
			color: #060607;
		}

		:host .discord-thread-cta {
			color: #00aff4;
			flex-shrink: 0;
			font-size: 0.875rem;
			font-weight: 600;
			line-height: 1.125rem;
		}

		:host .discord-thread-cta:hover {
			text-decoration: underline;
		}

		.discord-thread:hover .discord-thread-cta {
			text-decoration: underline;
		}
	`),ri(e,i),e})();var Ct=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Ze=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var J,P,O,K,je,q,Z,ce,Ee,Me,Ce;let a=[_e("discord-thread-message")],t,i=[],e,r=he,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[],p,m=[],u=[],f,H=[],G=[],k,T=[],N=[],I,S=[],M=[],Y,fe=[],$=[],b,V=[],pe=[],ee,Q=[],ye=[];return J=class extends r{constructor(){super(...arguments);z(this,P,Ze(this,o,void 0));z(this,O,(Ze(this,d),Ze(this,h,"User")));z(this,K,(Ze(this,c),Ze(this,_,void 0)));z(this,je,(Ze(this,g),Ze(this,m,!1)));z(this,q,(Ze(this,u),Ze(this,H,!1)));z(this,Z,(Ze(this,G),Ze(this,T,!1)));z(this,ce,(Ze(this,N),Ze(this,S,!1)));z(this,Ee,(Ze(this,M),Ze(this,fe,void 0)));z(this,Me,(Ze(this,$),Ze(this,V,"1m ago")));z(this,Ce,(Ze(this,pe),Ze(this,Q,!1)));Ze(this,ye)}get profile(){return j(this,P)}set profile(A){C(this,P,A)}get author(){return j(this,O)}set author(A){C(this,O,A)}get avatar(){return j(this,K)}set avatar(A){C(this,K,A)}get bot(){return j(this,je)}set bot(A){C(this,je,A)}get server(){return j(this,q)}set server(A){C(this,q,A)}get verified(){return j(this,Z)}set verified(A){C(this,Z,A)}get edited(){return j(this,ce)}set edited(A){C(this,ce,A)}get roleColor(){return j(this,Ee)}set roleColor(A){C(this,Ee,A)}get relativeTimestamp(){return j(this,Me)}set relativeTimestamp(A){C(this,Me,A)}get lightTheme(){return j(this,Ce)}set lightTheme(A){C(this,Ce,A)}resolveAvatar(A){return Ht[A]??A??Ht.default}render(){const A={author:this.author,bot:this.bot,verified:this.verified,server:this.server,roleColor:this.roleColor},x=Reflect.get(pa,this.profile)??{},U={...A,...x,avatar:this.resolveAvatar(x.avatar??this.avatar)};return D`<img src=${le(U.avatar)} class="discord-thread-message-avatar" alt=${le(U.author)} />
			${de(U.bot&&!U.server,()=>D`<span class="discord-application-tag"> ${U.verified?ar():null} App </span>`)}
			${de(U.server&&!U.bot,()=>D`<span class="discord-application-tag">Server</span>`)}
			<span class="discord-thread-message-username" style=${di({color:U.roleColor})}> ${U.author} </span>
			<div class="discord-thread-message-content">
				<slot></slot>
				${de(this.edited,()=>D`<span class="discord-message-edited">(edited)</span>`)}
			</div>
			<span class="discord-thread-message-timestamp">${this.relativeTimestamp}</span>`}},P=new WeakMap,O=new WeakMap,K=new WeakMap,je=new WeakMap,q=new WeakMap,Z=new WeakMap,ce=new WeakMap,Ee=new WeakMap,Me=new WeakMap,Ce=new WeakMap,e=J,(()=>{const A=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E()],l=[E()],n=[E()],p=[E({type:Boolean})],f=[E({type:Boolean})],k=[E({type:Boolean})],I=[E({type:Boolean})],Y=[E({attribute:"role-color"})],b=[E({attribute:"relative-timestamp"})],ee=[Ne({context:Be}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],Ct(J,null,s,{kind:"accessor",name:"profile",static:!1,private:!1,access:{has:x=>"profile"in x,get:x=>x.profile,set:(x,U)=>{x.profile=U}},metadata:A},o,d),Ct(J,null,l,{kind:"accessor",name:"author",static:!1,private:!1,access:{has:x=>"author"in x,get:x=>x.author,set:(x,U)=>{x.author=U}},metadata:A},h,c),Ct(J,null,n,{kind:"accessor",name:"avatar",static:!1,private:!1,access:{has:x=>"avatar"in x,get:x=>x.avatar,set:(x,U)=>{x.avatar=U}},metadata:A},_,g),Ct(J,null,p,{kind:"accessor",name:"bot",static:!1,private:!1,access:{has:x=>"bot"in x,get:x=>x.bot,set:(x,U)=>{x.bot=U}},metadata:A},m,u),Ct(J,null,f,{kind:"accessor",name:"server",static:!1,private:!1,access:{has:x=>"server"in x,get:x=>x.server,set:(x,U)=>{x.server=U}},metadata:A},H,G),Ct(J,null,k,{kind:"accessor",name:"verified",static:!1,private:!1,access:{has:x=>"verified"in x,get:x=>x.verified,set:(x,U)=>{x.verified=U}},metadata:A},T,N),Ct(J,null,I,{kind:"accessor",name:"edited",static:!1,private:!1,access:{has:x=>"edited"in x,get:x=>x.edited,set:(x,U)=>{x.edited=U}},metadata:A},S,M),Ct(J,null,Y,{kind:"accessor",name:"roleColor",static:!1,private:!1,access:{has:x=>"roleColor"in x,get:x=>x.roleColor,set:(x,U)=>{x.roleColor=U}},metadata:A},fe,$),Ct(J,null,b,{kind:"accessor",name:"relativeTimestamp",static:!1,private:!1,access:{has:x=>"relativeTimestamp"in x,get:x=>x.relativeTimestamp,set:(x,U)=>{x.relativeTimestamp=U}},metadata:A},V,pe),Ct(J,null,ee,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:x=>"lightTheme"in x,get:x=>x.lightTheme,set:(x,U)=>{x.lightTheme=U}},metadata:A},Q,ye),Ct(null,t={value:e},a,{kind:"class",name:e.name,metadata:A},null,i),e=t.value,A&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:A})})(),ie(J,"styles",me`
		:host {
			height: 18px;
			min-width: 0;
			display: flex;
			align-items: center;
			font-size: 0.875rem;
			line-height: 1.125rem;
		}

		:host .discord-thread-message-avatar {
			margin-right: 8px;
			flex: 0 0 auto;
			width: 16px;
			height: 16px;
			border-radius: 50%;
			user-select: none;
		}

		:host .discord-thread-message-username {
			flex-shrink: 0;
			font-size: inherit;
			line-height: inherit;
			margin-right: 0.25rem;
			opacity: 0.64;
			color: white;
			display: inline;
			vertical-align: baseline;
			position: relative;
			overflow: hidden;
		}

		:host([light-theme]) .discord-thread-message-username {
			color: #060607;
		}

		:host .discord-application-tag {
			background-color: #5865f2;
			color: #fff;
			font-size: 0.65em;
			margin-right: 5px;
			border-radius: 3px;
			line-height: 100%;
			text-transform: uppercase;
			display: flex;
			align-items: center;
			height: 0.9375rem;
			padding: 0 0.275rem;
			margin-top: 0.075em;
			border-radius: 0.1875rem;
		}

		:host .discord-application-tag-verified {
			display: inline-block;
			width: 0.9375rem;
			height: 0.9375rem;
			margin-left: -0.25rem;
		}

		:host .discord-thread-message-content {
			display: flex;
			align-items: baseline;
		}

		:host .discord-message-edited {
			color: #72767d;
			font-size: 10px;
			margin-left: 5px;
		}

		:host .discord-thread-message-timestamp {
			color: #72767d;
			flex-shrink: 0;
			margin-left: 8px;
			font-size: 0.875rem;
			line-height: 1.125rem;
		}

		:host([light-theme]) .discord-thread-message-timestamp,
		:host([light-theme]) .discord-message-edited {
			color: #747f8d;
		}
	`),Ze(e,i),e})();var An=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Rn=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var s;let a=[_e("discord-time")],t,i=[],e,r=he;return s=class extends r{render(){return D`<slot></slot>`}},e=s,(()=>{const d=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;An(null,t={value:e},a,{kind:"class",name:e.name,metadata:d},null,i),e=t.value,d&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d})})(),ie(s,"styles",me`
		:host {
			background-color: #ffffff0f;
			border-radius: 3px;
			padding: 0 2px;
		}
	`),Rn(e,i),e})();var Bn=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Vn=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var s;let a=[_e("discord-underlined")],t,i=[],e,r=he;return s=class extends r{render(){return D`
			<u>
				<slot></slot>
			</u>
		`}},e=s,(()=>{const d=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;Bn(null,t={value:e},a,{kind:"class",name:e.name,metadata:d},null,i),e=t.value,d&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:d}),Vn(e,i)})(),e})();var jr=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},Wa=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var l,h;let a=[_e("discord-unordered-list")],t,i=[],e,r=he,s,o=[],d=[];return l=class extends r{constructor(){super(...arguments);z(this,h,Wa(this,o,!1));Wa(this,d)}get nested(){return j(this,h)}set nested(_){C(this,h,_)}checkChildren(){if(!Array.from(this.children).every(g=>{const p=g.tagName.toLowerCase();return p==="discord-list-item"||p==="discord-unordered-list"||p==="discord-ordered-list"}))throw new bi("All direct children inside of a <discord-unordered-list> components must be one of <discord-unordered-list>, <discord-ordered-list>, or <discord-list-item>.")}willUpdate(){var _,g;(((_=this.parentElement)==null?void 0:_.tagName.toLowerCase())==="discord-unordered-list"||((g=this.parentElement)==null?void 0:g.tagName.toLowerCase())==="discord-ordered-list")&&(this.nested=!0)}render(){return this.checkChildren(),D`<ul>
			<slot></slot>
		</ul>`}},h=new WeakMap,e=l,(()=>{const _=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E({type:Boolean,reflect:!0})],jr(l,null,s,{kind:"accessor",name:"nested",static:!1,private:!1,access:{has:g=>"nested"in g,get:g=>g.nested,set:(g,p)=>{g.nested=p}},metadata:_},o,d),jr(null,t={value:e},a,{kind:"class",name:e.name,metadata:_},null,i),e=t.value,_&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:_})})(),ie(l,"styles",me`
		:host > ul {
			list-style-image: initial;
			list-style: disc;
			list-style-position: outside;
			margin: 4px 0 0 16px;
			padding: 0px;
		}

		:host([nested]) > ul {
			list-style: circle;
		}
	`),Wa(e,i),e})();const Un=xe`
	<path fill="currentColor" d="M4 6c0-1.1.9-2 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6ZM4 18c0 1.1.9 2 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM18 4a2 2 0 0 1 2 2v3a1 1 0 1 0 2 0V6a4 4 0 0 0-4-4h-3a1 1 0 1 0 0 2h3ZM20 18a2 2 0 0 1-2 2h-3a1 1 0 1 0 0 2h3a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3Z"></path>
`;function Hn(a={}){return D`<svg ${$e(a)} aria-hidden="true" role="img" width="24" height="24" fill="none" viewBox="0 0 24 24">${Un}</svg>`}const Fn=xe`
	<path fill="currentColor" d="M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6ZM15 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z"></path>
`;function Zn(a={}){return D`<svg ${$e(a)} aria-hidden="true" role="img" width="16" height="16" fill="none" viewBox="0 0 24 24">${Fn}</svg>`}var ia=function(a,t,i,e,r,s){function o(f){if(f!==void 0&&typeof f!="function")throw new TypeError("Function expected");return f}for(var d=e.kind,l=d==="getter"?"get":d==="setter"?"set":"value",h=!t&&a?e.static?a:a.prototype:null,c=t||(h?Object.getOwnPropertyDescriptor(h,e.name):{}),n,_=!1,g=i.length-1;g>=0;g--){var p={};for(var m in e)p[m]=m==="access"?{}:e[m];for(var m in e.access)p.access[m]=e.access[m];p.addInitializer=function(f){if(_)throw new TypeError("Cannot add initializers after decoration has completed");s.push(o(f||null))};var u=(0,i[g])(d==="accessor"?{get:c.get,set:c.set}:c[l],p);if(d==="accessor"){if(u===void 0)continue;if(u===null||typeof u!="object")throw new TypeError("Object expected");(n=o(u.get))&&(c.get=n),(n=o(u.set))&&(c.set=n),(n=o(u.init))&&r.unshift(n)}else(n=o(u))&&(d==="field"?r.unshift(n):c[l]=n)}h&&Object.defineProperty(h,e.name,c),_=!0},si=function(a,t,i){for(var e=arguments.length>2,r=0;r<t.length;r++)i=e?t[r].call(a,i):t[r].call(a);return e?i:void 0};(()=>{var p,m,u,f;let a=[_e("discord-video-attachment")],t,i=[],e,r=qr,s,o=[],d=[],l,h=[],c=[],n,_=[],g=[];return p=class extends r{constructor(){super(...arguments);z(this,m,si(this,o,void 0));z(this,u,(si(this,d),si(this,h,void 0)));z(this,f,(si(this,c),si(this,_,!1)));ie(this,"playPausePopAnimationContainerRef",(si(this,g),Bi()))}get href(){return j(this,m)}set href(k){C(this,m,k)}get poster(){return j(this,u)}set poster(k){C(this,u,k)}get lightTheme(){return j(this,f)}set lightTheme(k){C(this,f,k)}async handleFullScreenClicked(){this.mediaComponentRef.value&&await this.mediaComponentRef.value.requestFullscreen()}handleHasStartedPlayingOrHasPaused(){this.playPausePopAnimationContainerRef.value&&this.playPausePopAnimationContainerRef.value.classList.add("discord-video-attachment-overlay-content-hidden"),window.setTimeout(()=>{this.playPausePopAnimationContainerRef.value&&this.playPausePopAnimationContainerRef.value.classList.remove("discord-video-attachment-overlay-content-hidden")},200)}render(){return D`<div class="discord-media-attachment-non-visual-media-item-container">
			<div class="discord-video-attachment-one-by-one-grid">
				<div class="discord-media-attachment-mosaic-item-media">
					<div class="discord-video-attachment-image-wrapper">
						<div class="discord-video-attachment-loading-overlay">
							<div
								class=${Lt({"discord-video-attachment-wrapper":!0,"discord-video-attachment-wrapper-light-theme":this.lightTheme})}
							>
								<video
									${Vt(this.mediaComponentRef)}
									class="discord-video-attachment-video-container"
									playsinline
									height="315"
									preload="metadata"
									width="550"
									role="button"
									poster=${le(this.poster)}
									@play=${this.handleHasStartedPlayingOrHasPaused}
									@pause=${this.handleHasStartedPlayingOrHasPaused}
									@progress=${this.displayBufferedAmount}
									@click=${this.handleClickPlayPauseIcon}
									@ended=${this.handleEnded}
								>
									<source src=${le(this.href)} />
								</video>
								<div class="discord-video-attachment-video-controls">
									<div class="discord-media-attachment-controls" style="transform: translateY(0%)">
										<div
											class="discord-media-attachment-video-button"
											tabindex="0"
											aria-label="${this.isPlaying?"Pause":"Play"}"
											role="button"
											@click=${this.handleClickPlayPauseIcon}
											@keydown=${this.handleSpaceToPlayPause}
										>
											${de(this.hasEnded,()=>es({class:"discord-media-attachment-control-icon"}),()=>de(this.isPlaying,()=>Jr({class:"discord-media-attachment-control-icon"}),()=>Xr({class:"discord-media-attachment-control-icon"})))}
										</div>
										<div class="discord-media-attachment-duration-time-wrapper">
											<span role="status" class="discord-media-attachment-duration-time-display"
												>${this.currentPlaybackPosition}</span
											>
											<span
												role="separator"
												class="discord-media-attachment-duration-time-display discord-media-attachment-duration-time-separator"
												>/</span
											>
											<span class="discord-media-attachment-duration-time-display">${this.totalMediaDuration}</span>
										</div>
										<div class="discord-media-attachment-horizontal">
											<div class="discord-media-attachment-media-bar-interaction">
												<input
													type="range"
													${Vt(this.seekSliderRef)}
													class="discord-media-attachment-playback-control"
													@input=${this.handleSeekSliderInput}
													@change=${this.handleSeekSliderChange}
													max="100"
													value="0"
												/>
											</div>
										</div>
										<div class="discord-media-attachment-flex">
											<div class="discord-media-attachment-flex-container">
												<div ${Vt(this.volumeControlRef)} class="discord-media-attachment-button-slider">
													<div
														class="discord-media-attachment-volume-vertical"
														@mouseenter=${this.handleVolumeVerticalEnter}
														@mouseleave=${this.handleVolumeVerticalLeave}
													>
														<input
															${Vt(this.volumeControlInputRef)}
															type="range"
															class="discord-media-attachment-volume-slider"
															@input=${this.handleVolumeSliderInput}
															max="100"
															value="100"
														/>
													</div>
												</div>
												<button
													aria-label="Control volume"
													type="button"
													class="discord-media-attachment-button"
													@focus=${this.handleVolumeVerticalFocus}
													@blur=${this.handleVolumeVerticalBlur}
													@mouseover=${this.handleVolumeVerticalEnter}
													@mouseout=${this.handleVolumeVerticalLeave}
													@click=${this.handleClickMuteIcon}
												>
													<div class="discord-media-attachment-button-content">
														${de(this.currentVolume===0||this.isMuted,()=>as({class:"discord-media-attachment-button-control-icon"}),()=>de(this.currentVolume<=.5,()=>is({class:"discord-media-attachment-button-control-icon"}),()=>ts({class:"discord-media-attachment-button-control-icon"})))}
													</div>
												</button>
											</div>
										</div>
										<div>
											<button
												aria-label="Full screen"
												type="button"
												class="discord-media-attachment-button"
												@click=${this.handleFullScreenClicked}
											>
												<div class="discord-media-attachment-button-content">
													${Hn({class:"discord-media-attachment-button-control-icon"})}
												</div>
											</button>
										</div>
									</div>
								</div>
								<div class="discord-video-attachment-play-pause-pop">
									${Zn({class:"discord-video-attachment-play-pause-pop-icon"})}
								</div>
								<div ${Vt(this.playPausePopAnimationContainerRef)}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`}},m=new WeakMap,u=new WeakMap,f=new WeakMap,e=p,(()=>{const k=typeof Symbol=="function"&&Symbol.metadata?Object.create(r[Symbol.metadata]??null):void 0;s=[E()],l=[E()],n=[Ne({context:Be,subscribe:!0}),E({type:Boolean,reflect:!0,attribute:"light-theme"})],ia(p,null,s,{kind:"accessor",name:"href",static:!1,private:!1,access:{has:T=>"href"in T,get:T=>T.href,set:(T,N)=>{T.href=N}},metadata:k},o,d),ia(p,null,l,{kind:"accessor",name:"poster",static:!1,private:!1,access:{has:T=>"poster"in T,get:T=>T.poster,set:(T,N)=>{T.poster=N}},metadata:k},h,c),ia(p,null,n,{kind:"accessor",name:"lightTheme",static:!1,private:!1,access:{has:T=>"lightTheme"in T,get:T=>T.lightTheme,set:(T,N)=>{T.lightTheme=N}},metadata:k},_,g),ia(null,t={value:e},a,{kind:"class",name:e.name,metadata:k},null,i),e=t.value,k&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:k})})(),ie(p,"styles",[Gr,Wr,Qr,me`
			:host {
				display: grid;
				height: -moz-fit-content;
				height: fit-content;
				grid-auto-flow: row;
				grid-row-gap: 0.25rem;
				grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
				text-indent: 0;
				min-height: 0;
				min-width: 0;
				padding-top: 0.125rem;
				padding-bottom: 0.125rem;
				position: relative;

				--seek-before-width: 0%;
				--buffered-width: 0%;
				--volume-slider-opacity: 0;
			}

			.discord-video-attachment-one-by-one-grid {
				max-width: 100%;
				border-radius: 8px;
				overflow: hidden;
				display: inline-block;
				width: -moz-fit-content;
				width: fit-content;
				max-height: 350px;
			}

			.discord-media-attachment-mosaic-item-media {
				overflow: hidden;
				align-items: start;
				justify-self: auto !important;
			}

			.discord-video-attachment-image-wrapper {
				display: block;
				max-height: inherit;
				margin: auto;
				width: 550px;
				height: 100%;
				flex: auto;
				position: relative;
				-webkit-user-select: text;
				-moz-user-select: text;
				user-select: text;
				overflow: hidden;
				border-radius: 3px;
			}

			.discord-video-attachment-loading-overlay {
				aspect-ratio: 1.74603 / 1;
				width: 100%;
				height: 100%;
			}

			.discord-video-attachment-wrapper {
				height: 100%;
				width: 100%;
				max-height: inherit;
				position: relative;
				overflow: hidden;
				border-radius: 3px;
				color: hsl(0 calc(1 * 0%) 100% / 1);
				-webkit-user-select: none;
				-moz-user-select: none;
				user-select: none;
				background-color: hsl(225 calc(1 * 6.3%) 12.5% / 1);
			}

			.discord-video-attachment-wrapper-light-theme.discord-video-attachment-wrapper {
				background-color: hsl(0 calc(1 * 0%) 97.6% / 1);
			}

			.discord-video-attachment-video-container {
				width: 100%;
				height: 100%;
				max-height: inherit;
				object-fit: cover;
				position: relative;
				display: block;
				-o-object-fit: cover;
				border-radius: 3px;
			}

			.discord-video-attachment-video-container::-webkit-media-controls-enclosure {
				display: none !important;
			}

			.discord-video-attachment-video-controls {
				position: absolute;
				left: 0;
				right: 0;
				bottom: -10px;
				padding-bottom: 10px;
				width: 100%;
				display: flex;
				align-items: center;
				background-color: hsl(0 calc(1 * 0%) 0% / 0.6);
				height: 32px;
			}

			.discord-video-attachment-video-button {
				margin-right: 8px;
			}

			.discord-video-attachment-control-icon {
				display: block;
				width: 24px;
				height: 24px;
				padding: 4px;
				cursor: pointer;
				flex: 0 0 auto;
				opacity: 0.6;
			}

			.discord-video-attachment-duration-time-wrapper {
				flex: 0 0 auto;
				margin: 4px;
				height: 12px;
			}

			.discord-video-attachment-duration-time-display {
				font-weight: 500;
				display: inline-block;
				font-family: 'gg mono', 'Source Code Pro', Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter',
					'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace;
				font-size: 12px;
				line-height: 12px;
				vertical-align: text-top;
			}

			.discord-video-attachment-duration-time-separator {
				margin: 0 2px;
			}

			.discord-video-attachment-full-screen-button {
				cursor: pointer;
				margin-right: 8px;
				width: auto;
				background: transparent;
				color: currentColor;
				border: 0;
				padding: 0;
				margin: 0;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				box-sizing: border-box;
				border-radius: 3px;
				font-size: 14px;
				font-weight: 500;
				line-height: 16px;
				-webkit-user-select: none;
				-moz-user-select: none;
				user-select: none;
			}

			.discord-video-attachment-play-pause-pop {
				opacity: 0;
				transform: scale(2.5) translateZ(0px);
				position: absolute;
				top: 50%;
				left: 50%;
				margin-left: -23px;
				margin-top: -23px;
				padding: 12px;
				width: 24px;
				height: 24px;
				background-color: hsl(0 calc(1 * 0%) 0% / 0.6);
				color: hsl(0 calc(1 * 0%) 100% / 1);
				border-radius: 50%;
				pointer-events: none;
			}

			.discord-video-attachment-play-pause-pop-icon {
				width: 24px;
				height: 24px;
				display: block;
			}

			.discord-video-attachment-horizontal {
				width: 100%;
				display: flex;
				align-self: stretch;
			}

			.discord-video-attachment-media-bar-interaction {
				position: relative;
				flex: 1 1 auto;
				align-self: stretch;
				display: flex;
				align-items: center;
				cursor: pointer;
				margin: 0 7px;
			}

			@keyframes playPausePopIconKeyframes {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 0;
				}
			}

			.discord-video-attachment-overlay-content-hidden {
				animation: playPausePopIconKeyframes 0.2s ease-in-out infinite;
			}
		`]),si(e,i),e})();var Te=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Yn(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var ss={},os={exports:{}};(function(a,t){(function(i,e){a.exports=e()})(Te,function(){var i=/\r\n?/g,e=/\t/g,r=/\f/g,s=function(v){return v.replace(i,`
`).replace(r,"").replace(e,"    ")},o=function(v,y){var w=v||{};if(y!=null)for(var B in y)Object.prototype.hasOwnProperty.call(y,B)&&(w[B]=y[B]);return w},d=function(v,y){var w=Object.keys(v).filter(function(ne){var ae=v[ne];if(ae==null||ae.match==null)return!1;var be=ae.order;return(typeof be!="number"||!isFinite(be))&&typeof console<"u"&&console.warn("simple-markdown: Invalid order for rule `"+ne+"`: "+String(be)),!0});w.sort(function(ne,ae){var be=v[ne],ze=v[ae],we=be.order,Pe=ze.order;if(we!==Pe)return we-Pe;var F=be.quality?0:1,R=ze.quality?0:1;return F!==R?F-R:ne<ae?-1:ne>ae?1:0});var B,X=function(ne,ae){var be=[];for(ae=ae||B,B=ae;ne;){var ze=null,we=null,Pe=null,F=NaN,R=0,te=w[0],Le=v[te];do{var it=Le.order,Je=ae.prevCapture==null?"":ae.prevCapture[0],at=Le.match(ne,ae,Je);if(at){var Ot=Le.quality?Le.quality(at,ae,Je):0;Ot<=F||(ze=te,we=Le,Pe=at,F=Ot)}R++,te=w[R],Le=v[te]}while(Le&&(!Pe||Le.order===it&&Le.quality));if(we==null||Pe==null)throw new Error("Could not find a matching rule for the below content. The rule with highest `order` should always match content provided to it. Check the definition of `match` for '"+w[w.length-1]+`'. It seems to not match the following source:
`+ne);if(Pe.index)throw new Error("`match` must return a capture starting at index 0 (the current parse index). Did you forget a ^ at the start of the RegExp?");var nt=we.parse(Pe,X,ae);Array.isArray(nt)?Array.prototype.push.apply(be,nt):(nt.type==null&&(nt.type=ze),be.push(nt)),ae.prevCapture=Pe,ne=ne.substring(ae.prevCapture[0].length)}return be},se=function(ne,ae){return B=o(ae,y),!B.inline&&!B.disableAutoBlockNewlines&&(ne=ne+`

`),B.prevCapture=null,X(s(ne),B)};return se},l=function(v){var y=function(w,B){return B.inline?v.exec(w):null};return y.regex=v,y},h=function(v){var y=function(w,B){return B.inline?null:v.exec(w)};return y.regex=v,y},c=function(v){var y=function(w,B){return v.exec(w)};return y.regex=v,y},n=typeof Symbol=="function"&&Symbol.for&&Symbol.for("react.element")||60103,_=function(v,y,w){var B={$$typeof:n,type:v,key:y??void 0,ref:null,props:w,_owner:null};return B},g=function(v,y,w,B){w=w||{},B=typeof B<"u"?B:!0;var X="";for(var se in w){var ne=w[se];Object.prototype.hasOwnProperty.call(w,se)&&ne&&(X+=" "+H(se)+'="'+H(ne)+'"')}var ae="<"+v+X+">";return B?ae+y+"</"+v+">":ae},p={},m=function(v){if(v==null)return null;try{var y=decodeURIComponent(v).replace(/[^A-Za-z0-9/:]/g,"").toLowerCase();if(y.indexOf("javascript:")===0||y.indexOf("vbscript:")===0||y.indexOf("data:")===0)return null}catch{return null}return v},u=/[<>&"']/g,f={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","/":"&#x2F;","`":"&#96;"},H=function(v){return String(v).replace(u,function(y){return f[y]})},G=/\\([^0-9A-Za-z\s])/g,k=function(v){return v.replace(G,"$1")},T=function(v,y,w){var B=w.inline||!1;w.inline=!0;var X=v(y,w);return w.inline=B,X},N=function(v,y,w){var B=w.inline||!1;w.inline=!1;var X=v(y+`

`,w);return w.inline=B,X},I=function(v,y,w){return{content:T(y,v[1],w)}},S=function(){return{}},M="(?:[*+-]|\\d+\\.)",Y="( *)("+M+") +",fe=new RegExp("^"+Y),$=new RegExp(Y+"[^\\n]*(?:\\n(?!\\1"+M+` )[^\\n]*)*(
|$)`,"gm"),b=/\n{2,}$/,V=/^ (?= *`)|(` *) $/g,pe=b,ee=/ *\n+$/,Q=new RegExp("^( *)("+M+`) [\\s\\S]+?(?:
{2,}(?! )(?!\\1`+M+` )\\n*|\\s*
*$)`),ye=/(?:^|\n)( *)$/,J=function(){var v=/^ *\| *| *\| *$/g,y=/ *$/,w=/^ *-+: *$/,B=/^ *:-+: *$/,X=/^ *:-+ *$/,se=function(we){return w.test(we)?"right":B.test(we)?"center":X.test(we)?"left":null},ne=function(we,Pe,F,R){R&&(we=we.replace(v,""));var te=we.trim().split("|");return te.map(se)},ae=function(we,Pe,F,R){var te=F.inTable;F.inTable=!0;var Le=Pe(we.trim(),F);F.inTable=te;var it=[[]];return Le.forEach(function(Je,at){Je.type==="tableSeparator"?(!R||at!==0&&at!==Le.length-1)&&it.push([]):(Je.type==="text"&&(Le[at+1]==null||Le[at+1].type==="tableSeparator")&&(Je.content=Je.content.replace(y,"")),it[it.length-1].push(Je))}),it},be=function(we,Pe,F,R){var te=we.trim().split(`
`);return te.map(function(Le){return ae(Le,Pe,F,R)})},ze=function(we){return function(Pe,F,R){R.inline=!0;var te=ae(Pe[1],F,R,we),Le=ne(Pe[2],F,R,we),it=be(Pe[3],F,R,we);return R.inline=!1,{type:"table",header:te,align:Le,cells:it}}};return{parseTable:ze(!0),parseNpTable:ze(!1),TABLE_REGEX:/^ *(\|.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/,NPTABLE_REGEX:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/}}(),P="(?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*",O=`\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*`,K=/mailto:/i,je=function(v,y,w){var B=(v[2]||v[1]).replace(/\s+/g," ").toLowerCase();if(y._defs&&y._defs[B]){var X=y._defs[B];w.target=X.target,w.title=X.title}return y._refs=y._refs||{},y._refs[B]=y._refs[B]||[],y._refs[B].push(w),w},q=0,Z={Array:{react:function(v,y,w){for(var B=w.key,X=[],se=0,ne=0;se<v.length;se++,ne++){w.key=""+se;var ae=v[se];if(ae.type==="text")for(ae={type:"text",content:ae.content};se+1<v.length&&v[se+1].type==="text";se++)ae.content+=v[se+1].content;X.push(y(ae,w))}return w.key=B,X},html:function(v,y,w){for(var B="",X=0;X<v.length;X++){var se=v[X];if(se.type==="text")for(se={type:"text",content:se.content};X+1<v.length&&v[X+1].type==="text";X++)se.content+=v[X+1].content;B+=y(se,w)}return B}},heading:{order:q++,match:h(/^ *(#{1,6})([^\n]+?)#* *(?:\n *)+\n/),parse:function(v,y,w){return{level:v[1].length,content:T(y,v[2].trim(),w)}},react:function(v,y,w){return _("h"+v.level,w.key,{children:y(v.content,w)})},html:function(v,y,w){return g("h"+v.level,y(v.content,w))}},nptable:{order:q++,match:h(J.NPTABLE_REGEX),parse:J.parseNpTable,react:null,html:null},lheading:{order:q++,match:h(/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/),parse:function(v,y,w){return{type:"heading",level:v[2]==="="?1:2,content:T(y,v[1],w)}},react:null,html:null},hr:{order:q++,match:h(/^( *[-*_]){3,} *(?:\n *)+\n/),parse:S,react:function(v,y,w){return _("hr",w.key,p)},html:function(v,y,w){return"<hr>"}},codeBlock:{order:q++,match:h(/^(?:    [^\n]+\n*)+(?:\n *)+\n/),parse:function(v,y,w){var B=v[0].replace(/^    /gm,"").replace(/\n+$/,"");return{lang:void 0,content:B}},react:function(v,y,w){var B=v.lang?"markdown-code-"+v.lang:void 0;return _("pre",w.key,{children:_("code",null,{className:B,children:v.content})})},html:function(v,y,w){var B=v.lang?"markdown-code-"+v.lang:void 0,X=g("code",H(v.content),{class:B});return g("pre",X)}},fence:{order:q++,match:h(/^ *(`{3,}|~{3,}) *(?:(\S+) *)?\n([\s\S]+?)\n?\1 *(?:\n *)+\n/),parse:function(v,y,w){return{type:"codeBlock",lang:v[2]||void 0,content:v[3]}},react:null,html:null},blockQuote:{order:q++,match:h(/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/),parse:function(v,y,w){var B=v[0].replace(/^ *> ?/gm,"");return{content:y(B,w)}},react:function(v,y,w){return _("blockquote",w.key,{children:y(v.content,w)})},html:function(v,y,w){return g("blockquote",y(v.content,w))}},list:{order:q++,match:function(v,y){var w=y.prevCapture==null?"":y.prevCapture[0],B=ye.exec(w),X=y._list||!y.inline;return B&&X?(v=B[1]+v,Q.exec(v)):null},parse:function(v,y,w){var B=v[2],X=B.length>1,se=X?+B:void 0,ne=v[0].replace(pe,`
`).match($),ae=!1,be=ne.map(function(ze,we){var Pe=fe.exec(ze),F=Pe?Pe[0].length:0,R=new RegExp("^ {1,"+F+"}","gm"),te=ze.replace(R,"").replace(fe,""),Le=we===ne.length-1,it=te.indexOf(`

`)!==-1,Je=it||Le&&ae;ae=Je;var at=w.inline,Ot=w._list;w._list=!0;var nt;Je?(w.inline=!1,nt=te.replace(ee,`

`)):(w.inline=!0,nt=te.replace(ee,""));var Jt=y(nt,w);return w.inline=at,w._list=Ot,Jt});return{ordered:X,start:se,items:be}},react:function(v,y,w){var B=v.ordered?"ol":"ul";return _(B,w.key,{start:v.start,children:v.items.map(function(X,se){return _("li",""+se,{children:y(X,w)})})})},html:function(v,y,w){var B=v.items.map(function(ne){return g("li",y(ne,w))}).join(""),X=v.ordered?"ol":"ul",se={start:v.start};return g(X,B,se)}},def:{order:q++,match:h(/^ *\[([^\]]+)\]: *<?([^\s>]*)>?(?: +["(]([^\n]+)[")])? *\n(?: *\n)*/),parse:function(v,y,w){var B=v[1].replace(/\s+/g," ").toLowerCase(),X=v[2],se=v[3];return w._refs&&w._refs[B]&&w._refs[B].forEach(function(ne){ne.target=X,ne.title=se}),w._defs=w._defs||{},w._defs[B]={target:X,title:se},{def:B,target:X,title:se}},react:function(){return null},html:function(){return""}},table:{order:q++,match:h(J.TABLE_REGEX),parse:J.parseTable,react:function(v,y,w){var B=function(ne){return v.align[ne]==null?{}:{textAlign:v.align[ne]}},X=v.header.map(function(ne,ae){return _("th",""+ae,{style:B(ae),scope:"col",children:y(ne,w)})}),se=v.cells.map(function(ne,ae){return _("tr",""+ae,{children:ne.map(function(be,ze){return _("td",""+ze,{style:B(ze),children:y(be,w)})})})});return _("table",w.key,{children:[_("thead","thead",{children:_("tr",null,{children:X})}),_("tbody","tbody",{children:se})]})},html:function(v,y,w){var B=function(be){return v.align[be]==null?"":"text-align:"+v.align[be]+";"},X=v.header.map(function(be,ze){return g("th",y(be,w),{style:B(ze),scope:"col"})}).join(""),se=v.cells.map(function(be){var ze=be.map(function(we,Pe){return g("td",y(we,w),{style:B(Pe)})}).join("");return g("tr",ze)}).join(""),ne=g("thead",g("tr",X)),ae=g("tbody",se);return g("table",ne+ae)}},newline:{order:q++,match:h(/^(?:\n *)*\n/),parse:S,react:function(v,y,w){return`
`},html:function(v,y,w){return`
`}},paragraph:{order:q++,match:h(/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/),parse:I,react:function(v,y,w){return _("div",w.key,{className:"paragraph",children:y(v.content,w)})},html:function(v,y,w){var B={class:"paragraph"};return g("div",y(v.content,w),B)}},escape:{order:q++,match:l(/^\\([^0-9A-Za-z\s])/),parse:function(v,y,w){return{type:"text",content:v[1]}},react:null,html:null},tableSeparator:{order:q++,match:function(v,y){return y.inTable?/^ *\| */.exec(v):null},parse:function(){return{type:"tableSeparator"}},react:function(){return" | "},html:function(){return" &vert; "}},autolink:{order:q++,match:l(/^<([^: >]+:\/[^ >]+)>/),parse:function(v,y,w){return{type:"link",content:[{type:"text",content:v[1]}],target:v[1]}},react:null,html:null},mailto:{order:q++,match:l(/^<([^ >]+@[^ >]+)>/),parse:function(v,y,w){var B=v[1],X=v[1];return K.test(X)||(X="mailto:"+X),{type:"link",content:[{type:"text",content:B}],target:X}},react:null,html:null},url:{order:q++,match:l(/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/),parse:function(v,y,w){return{type:"link",content:[{type:"text",content:v[1]}],target:v[1],title:void 0}},react:null,html:null},link:{order:q++,match:l(new RegExp("^\\[("+P+")\\]\\("+O+"\\)")),parse:function(v,y,w){var B={content:y(v[1],w),target:k(v[2]),title:v[3]};return B},react:function(v,y,w){return _("a",w.key,{href:m(v.target),title:v.title,children:y(v.content,w)})},html:function(v,y,w){var B={href:m(v.target),title:v.title};return g("a",y(v.content,w),B)}},image:{order:q++,match:l(new RegExp("^!\\[("+P+")\\]\\("+O+"\\)")),parse:function(v,y,w){var B={alt:v[1],target:k(v[2]),title:v[3]};return B},react:function(v,y,w){return _("img",w.key,{src:m(v.target),alt:v.alt,title:v.title})},html:function(v,y,w){var B={src:m(v.target),alt:v.alt,title:v.title};return g("img","",B,!1)}},reflink:{order:q++,match:l(new RegExp("^\\[("+P+")\\]\\s*\\[([^\\]]*)\\]")),parse:function(v,y,w){return je(v,w,{type:"link",content:y(v[1],w)})},react:null,html:null},refimage:{order:q++,match:l(new RegExp("^!\\[("+P+")\\]\\s*\\[([^\\]]*)\\]")),parse:function(v,y,w){return je(v,w,{type:"image",alt:v[1]})},react:null,html:null},em:{order:q,match:l(new RegExp("^\\b_((?:__|\\\\[\\s\\S]|[^\\\\_])+?)_\\b|^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?)\\*(?!\\*)")),quality:function(v){return v[0].length+.2},parse:function(v,y,w){return{content:y(v[2]||v[1],w)}},react:function(v,y,w){return _("em",w.key,{children:y(v.content,w)})},html:function(v,y,w){return g("em",y(v.content,w))}},strong:{order:q,match:l(/^\*\*((?:\\[\s\S]|[^\\])+?)\*\*(?!\*)/),quality:function(v){return v[0].length+.1},parse:I,react:function(v,y,w){return _("strong",w.key,{children:y(v.content,w)})},html:function(v,y,w){return g("strong",y(v.content,w))}},u:{order:q++,match:l(/^__((?:\\[\s\S]|[^\\])+?)__(?!_)/),quality:function(v){return v[0].length},parse:I,react:function(v,y,w){return _("u",w.key,{children:y(v.content,w)})},html:function(v,y,w){return g("u",y(v.content,w))}},del:{order:q++,match:l(/^~~(?=\S)((?:\\[\s\S]|~(?!~)|[^\s~\\]|\s(?!~~))+?)~~/),parse:I,react:function(v,y,w){return _("del",w.key,{children:y(v.content,w)})},html:function(v,y,w){return g("del",y(v.content,w))}},inlineCode:{order:q++,match:l(/^(`+)([\s\S]*?[^`])\1(?!`)/),parse:function(v,y,w){return{content:v[2].replace(V,"$1")}},react:function(v,y,w){return _("code",w.key,{children:v.content})},html:function(v,y,w){return g("code",H(v.content))}},br:{order:q++,match:c(/^ {2,}\n/),parse:S,react:function(v,y,w){return _("br",w.key,p)},html:function(v,y,w){return"<br>"}},text:{order:q++,match:c(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|$)/),parse:function(v,y,w){return{content:v[0]}},react:function(v,y,w){return v.content},html:function(v,y,w){return H(v.content)}}},ce=function(v,y){!y&&typeof console<"u"&&console.warn("simple-markdown ruleOutput should take 'react' or 'html' as the second argument.");var w=function(B,X,se){return v[B.type][y](B,X,se)};return w},Ee=function(v){var y=function(w,B){if(B=B||{},Array.isArray(w)){for(var X=B.key,se=[],ne=null,ae=0;ae<w.length;ae++){B.key=""+ae;var be=y(w[ae],B);typeof be=="string"&&typeof ne=="string"?(ne=ne+be,se[se.length-1]=ne):(se.push(be),ne=be)}return B.key=X,se}else return v(w,y,B)};return y},Me=function(v){var y=function(w,B){return B=B||{},Array.isArray(w)?w.map(function(X){return y(X,B)}).join(""):v(w,y,B)};return y},Ce=function(v,y,w){if(!y)throw new Error("simple-markdown: outputFor: `property` must be defined. if you just upgraded, you probably need to replace `outputFor` with `reactFor`");var B,X=v.Array||Z.Array,se=X[y];if(!se)throw new Error("simple-markdown: outputFor: to join nodes of type `"+y+"` you must provide an `Array:` joiner rule with that type, Please see the docs for details on specifying an Array rule.");var ne=se,ae=function(ze,we){return we=we||B,B=we,Array.isArray(ze)?ne(ze,ae,we):v[ze.type][y](ze,ae,we)},be=function(ze,we){return B=o(we,w),ae(ze,B)};return be},Qe=d(Z),ot=function(v,y){return y=y||{},y.inline=!1,Qe(v,y)},A=function(v,y){return y=y||{},y.inline=!0,Qe(v,y)},x=function(v,y){var w=b.test(v);return y=y||{},y.inline=!w,Qe(v,y)},U=Ce(Z,"react"),Ge=Ce(Z,"html"),Ke=function(v,y){return U(ot(v,y),y)},tt=function(v,y){return Ge(ot(v,y),y)},vt=function(v){var y={};for(var w in v)w!=="source"&&Object.prototype.hasOwnProperty.call(v,w)&&(y[w]=v[w]);return y.children=Ke(v.source),_("div",null,y)},St={defaultRules:Z,parserFor:d,outputFor:Ce,inlineRegex:l,blockRegex:h,anyScopeRegex:c,parseInline:T,parseBlock:N,markdownToReact:Ke,markdownToHtml:tt,ReactMarkdown:vt,defaultBlockParse:ot,defaultInlineParse:A,defaultImplicitParse:x,defaultReactOutput:U,defaultHtmlOutput:Ge,preprocess:s,sanitizeText:H,sanitizeUrl:m,unescapeUrl:k,htmlTag:g,reactElement:_,defaultRawParse:Qe,ruleOutput:ce,reactFor:Ee,htmlFor:Me,defaultParse:function(){return typeof console<"u"&&console.warn("defaultParse is deprecated, please use `defaultImplicitParse`"),x.apply(null,arguments)},defaultOutput:function(){return typeof console<"u"&&console.warn("defaultOutput is deprecated, please use `defaultReactOutput`"),U.apply(null,arguments)}};return St})})(os);var We=os.exports,ga={},ve={};Object.defineProperty(ve,"__esModule",{value:!0});ve.TimestampRegex=ve.TextRegex=ve.StrikeThroughRegex=ve.SpoilerRegex=ve.EmoticonRegex=ve.CodeBlockRegex=ve.BlockQuoteRegex=ve.HereRegex=ve.EveryoneRegex=ve.UserMentionRegex=ve.RoleMentionRegex=ve.EmojiRegex=ve.ChannelMentionRegex=void 0;ve.ChannelMentionRegex=/^<#(\d{17,20})>/;ve.EmojiRegex=/^<(a)?:(\w{2,32}):(\d{17,21})>/;ve.RoleMentionRegex=/^<@&(\d{17,20})>/;ve.UserMentionRegex=/^<@!?(\d{17,20})>/;ve.EveryoneRegex=/^@everyone$/;ve.HereRegex=/^@here$/;ve.BlockQuoteRegex=/^( *>>> ([\s\S]*))|^( *> [^\n]*(\n *> [^\n]*)*\n?)/;ve.CodeBlockRegex=/^```(([a-z0-9-]+?)\n+)?\n*([^]+?)\n*```/i;ve.EmoticonRegex=/^(¯\\_\(ツ\)_\/¯)/;ve.SpoilerRegex=/^\|\|([\s\S]+?)\|\|/;ve.StrikeThroughRegex=/^~~([\s\S]+?)~~(?!_)/;ve.TextRegex=/^[\s\S]+?(?=[^0-9A-Za-z\s]|\n\n|\n|\w+:\S|$)/;ve.TimestampRegex=/^<t:(\d+)(?::(R|t|T|d|D|f|F))?>/;var Qn=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ga,"__esModule",{value:!0});ga.everyone=void 0;const qn=Qn(We),Wn=ve;ga.everyone={order:qn.default.defaultRules.strong.order,match:a=>Wn.EveryoneRegex.exec(a),parse:function(){return{}}};var _a={},va={};Object.defineProperty(va,"__esModule",{value:!0});va.TwemojiRegex=void 0;va.TwemojiRegex=/^((?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f)/;var Gn=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(_a,"__esModule",{value:!0});_a.twemoji=void 0;const Kn=Gn(We),Jn=va;_a.twemoji={order:Kn.default.defaultRules.strong.order,match:a=>Jn.TwemojiRegex.exec(a),parse:function(a){return{name:a[0]}}};var ba={},Xn=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ba,"__esModule",{value:!0});ba.channel=void 0;const ed=Xn(We),td=ve;ba.channel={order:ed.default.defaultRules.strong.order,match:a=>td.ChannelMentionRegex.exec(a),parse:function(a){return{id:a[1]}}};var ya={},id=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ya,"__esModule",{value:!0});ya.timestamp=void 0;const ad=id(We),rd=ve;ya.timestamp={order:ad.default.defaultRules.strong.order,match:a=>rd.TimestampRegex.exec(a),parse:function(a){return{timestamp:a[1],format:a[2]}}};var wa={},Mt={};Object.defineProperty(Mt,"__esModule",{value:!0});Mt.extend=void 0;const sd=(a,t)=>Object.assign({},t,a);Mt.extend=sd;var od=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(wa,"__esModule",{value:!0});wa.blockQuote=void 0;const nd=od(We),dd=Mt,ld=ve;wa.blockQuote=(0,dd.extend)({match:function(a,t,i){return!/^$|\n *$/.test(i)||t.inQuote?null:ld.BlockQuoteRegex.exec(a)},parse:function(a,t,i){const e=a[0],s=!!/^ *>>> ?/.exec(e)?/^ *>>> ?/:/^ *> ?/gm,o=e.replace(s,"");return{content:t(o,Object.assign({},i,{inQuote:!0})),type:"blockQuote"}}},nd.default.defaultRules.blockQuote);var ka={},cd=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ka,"__esModule",{value:!0});ka.strikethrough=void 0;const zr=cd(We),ud=Mt,hd=ve;ka.strikethrough=(0,ud.extend)({match:zr.default.inlineRegex(hd.StrikeThroughRegex)},zr.default.defaultRules.del);var xa={},fd=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(xa,"__esModule",{value:!0});xa.codeBlock=void 0;const Cr=fd(We),md=Mt,pd=ve;xa.codeBlock=(0,md.extend)({match:Cr.default.inlineRegex(pd.CodeBlockRegex),parse:function(a,t,i){return{lang:(a[2]||"").trim(),content:a[3]||"",inQuote:i.inQuote||!1}}},Cr.default.defaultRules.codeBlock);var $a={},gd=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty($a,"__esModule",{value:!0});$a.emoji=void 0;const _d=gd(We),vd=ve;$a.emoji={order:_d.default.defaultRules.strong.order,match:a=>vd.EmojiRegex.exec(a),parse:function(a){return{animated:a[1]==="a",name:a[2],id:a[3]}}};var Ta={},bd=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Ta,"__esModule",{value:!0});Ta.role=void 0;const yd=bd(We),wd=ve;Ta.role={order:yd.default.defaultRules.strong.order,match:a=>wd.RoleMentionRegex.exec(a),parse:function(a){return{id:a[1]}}};var ja={},kd=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(ja,"__esModule",{value:!0});ja.autolink=void 0;const xd=kd(We),$d=Mt;ja.autolink=(0,$d.extend)({parse:a=>({content:[{type:"text",content:a[1]}],target:a[1]})},xd.default.defaultRules.autolink);var za={},Td=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(za,"__esModule",{value:!0});za.here=void 0;const jd=Td(We),zd=ve;za.here={order:jd.default.defaultRules.strong.order,match:a=>zd.HereRegex.exec(a),parse:function(){return{}}};var Ca={},Cd=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Ca,"__esModule",{value:!0});Ca.emoticon=void 0;const Ed=Cd(We),Md=ve;Ca.emoticon={order:Ed.default.defaultRules.text.order,match:a=>Md.EmoticonRegex.exec(a),parse:function(a){return{type:"text",content:a[1]}}};var Ea={},Sd=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Ea,"__esModule",{value:!0});Ea.user=void 0;const Od=Sd(We),Dd=ve;Ea.user={order:Od.default.defaultRules.strong.order,match:a=>Dd.UserMentionRegex.exec(a),parse:function(a){return{id:a[1],type:"user"}}};var Ma={};Object.defineProperty(Ma,"__esModule",{value:!0});Ma.spoiler=void 0;const Ld=ve;Ma.spoiler={order:0,match:a=>Ld.SpoilerRegex.exec(a),parse:function(a,t,i){return{content:t(a[1],i)}}};var Sa={},Nd=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Sa,"__esModule",{value:!0});Sa.text=void 0;const Pd=Nd(We),Id=Mt,Ad=ve;Sa.text=(0,Id.extend)({match:a=>Ad.TextRegex.exec(a)},Pd.default.defaultRules.text);var Oa={},Rd=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Oa,"__esModule",{value:!0});Oa.url=void 0;const Bd=Rd(We),Vd=Mt;Oa.url=(0,Vd.extend)({parse:a=>({content:[{type:"text",content:a[1]}],target:a[1]})},Bd.default.defaultRules.url);var Da={},Ud=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(Da,"__esModule",{value:!0});Da.em=void 0;const Hd=Mt,Er=Ud(We);Da.em=(0,Hd.extend)({parse:function(a,t,i){const e=Er.default.defaultRules.em.parse(a,t,Object.assign({},i,{inEmphasis:!0}));return i.inEmphasis?e.content:e}},Er.default.defaultRules.em);var La={},Fd=Te&&Te.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(La,"__esModule",{value:!0});La.br=void 0;const Mr=Fd(We),Zd=Mt;La.br=(0,Zd.extend)({match:Mr.default.anyScopeRegex(/^\n/)},Mr.default.defaultRules.br);(function(a){var t=Te&&Te.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(a,"__esModule",{value:!0}),a.parse=a.rulesExtended=a.rules=void 0;const i=t(We),e=ga,r=_a,s=ba,o=ya,d=wa,l=ka,h=xa,c=$a,n=Ta,_=ja,g=za,p=Ca,m=Ea,u=Ma,f=Sa,H=Oa,G=Da,k=La;a.rules={blockQuote:d.blockQuote,codeBlock:h.codeBlock,newline:i.default.defaultRules.newline,escape:i.default.defaultRules.escape,autolink:_.autolink,url:H.url,em:G.em,strong:i.default.defaultRules.strong,underline:i.default.defaultRules.u,strikethrough:l.strikethrough,inlineCode:i.default.defaultRules.inlineCode,text:f.text,emoticon:p.emoticon,br:k.br,spoiler:u.spoiler,user:m.user,channel:s.channel,role:n.role,emoji:c.emoji,everyone:e.everyone,here:g.here,twemoji:r.twemoji,timestamp:o.timestamp},a.rulesExtended=Object.assign(Object.assign({},a.rules),{link:i.default.defaultRules.link});const T=i.default.parserFor(a.rules),N=i.default.parserFor(a.rulesExtended);function I(S,M="normal"){return M==="normal"?T(S,{inline:!0}):N(S,{inline:!0})}a.parse=I,a.default=I})(ss);const Yd=Yn(ss);var Dt=(a=>(a[a.EMBED=0]="EMBED",a[a.REPLY=1]="REPLY",a[a.NORMAL=2]="NORMAL",a[a.WEBHOOK=3]="WEBHOOK",a))(Dt||{}),Ga=(a=>(a[a.CHANNEL=0]="CHANNEL",a[a.VOICE=1]="VOICE",a[a.THREAD=2]="THREAD",a[a.FORUM=3]="FORUM",a))(Ga||{});function Qd(a){let t,i;return t=new _t({props:{nodes:a[0].content,context:a[1]}}),{c(){lt(t.$$.fragment)},l(e){ct(t.$$.fragment,e)},m(e,r){ut(t,e,r),i=!0},p(e,r){const s={};r&1&&(s.nodes=e[0].content),r&2&&(s.context=e[1]),t.$set(s)},i(e){i||(Oe(t.$$.fragment,e),i=!0)},o(e){De(t.$$.fragment,e),i=!1},d(e){ht(t,e)}}}function qd(a){let t=a[0].content+"",i;return{c(){i=pt(t)},l(e){i=gt(e,t)},m(e,r){ke(e,i,r)},p(e,r){r&1&&t!==(t=e[0].content+"")&&Nt(i,t)},i:ue,o:ue,d(e){e&&oe(i)}}}function Wd(a){return{c:ue,l:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function Gd(a){return{c:ue,l:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function Kd(a){let t,i,e;return i=new _t({props:{nodes:a[0].content,context:a[1]}}),{c(){t=Ie("discord-spoiler"),lt(i.$$.fragment)},l(r){t=Ae(r,"DISCORD-SPOILER",{});var s=Ye(t);ct(i.$$.fragment,s),s.forEach(oe)},m(r,s){ke(r,t,s),ut(i,t,null),e=!0},p(r,s){const o={};s&1&&(o.nodes=r[0].content),s&2&&(o.context=r[1]),i.$set(o)},i(r){e||(Oe(i.$$.fragment,r),e=!0)},o(r){De(i.$$.fragment,r),e=!1},d(r){r&&oe(t),ht(i)}}}function Jd(a){let t,i,e,r;const s=[pl,ml],o=[];function d(l,h){return typeof l[0].content=="string"?0:1}return t=d(a),i=o[t]=s[t](a),{c(){i.c(),e=qe()},l(l){i.l(l),e=qe()},m(l,h){o[t].m(l,h),ke(l,e,h),r=!0},p(l,h){let c=t;t=d(l),t===c?o[t].p(l,h):(Gt(),De(o[c],1,1,()=>{o[c]=null}),Kt(),i=o[t],i?i.p(l,h):(i=o[t]=s[t](l),i.c()),Oe(i,1),i.m(e.parentNode,e))},i(l){r||(Oe(i),r=!0)},o(l){De(i),r=!1},d(l){l&&oe(e),o[t].d(l)}}}function Xd(a){let t,i,e;return i=new _t({props:{nodes:a[0].content,context:a[1]}}),{c(){t=Ie("s"),lt(i.$$.fragment)},l(r){t=Ae(r,"S",{});var s=Ye(t);ct(i.$$.fragment,s),s.forEach(oe)},m(r,s){ke(r,t,s),ut(i,t,null),e=!0},p(r,s){const o={};s&1&&(o.nodes=r[0].content),s&2&&(o.context=r[1]),i.$set(o)},i(r){e||(Oe(i.$$.fragment,r),e=!0)},o(r){De(i.$$.fragment,r),e=!1},d(r){r&&oe(t),ht(i)}}}function el(a){let t,i,e;return i=new _t({props:{nodes:a[0].content,context:a[1]}}),{c(){t=Ie("discord-underlined"),lt(i.$$.fragment)},l(r){t=Ae(r,"DISCORD-UNDERLINED",{});var s=Ye(t);ct(i.$$.fragment,s),s.forEach(oe)},m(r,s){ke(r,t,s),ut(i,t,null),e=!0},p(r,s){const o={};s&1&&(o.nodes=r[0].content),s&2&&(o.context=r[1]),i.$set(o)},i(r){e||(Oe(i.$$.fragment,r),e=!0)},o(r){De(i.$$.fragment,r),e=!1},d(r){r&&oe(t),ht(i)}}}function tl(a){let t,i,e;return i=new _t({props:{nodes:a[0].content,context:a[1]}}),{c(){t=Ie("discord-bold"),lt(i.$$.fragment)},l(r){t=Ae(r,"DISCORD-BOLD",{});var s=Ye(t);ct(i.$$.fragment,s),s.forEach(oe)},m(r,s){ke(r,t,s),ut(i,t,null),e=!0},p(r,s){const o={};s&1&&(o.nodes=r[0].content),s&2&&(o.context=r[1]),i.$set(o)},i(r){e||(Oe(i.$$.fragment,r),e=!0)},o(r){De(i.$$.fragment,r),e=!1},d(r){r&&oe(t),ht(i)}}}function il(a){let t,i,e;return i=new _t({props:{nodes:a[0].content,context:a[1]}}),{c(){t=Ie("discord-italic"),lt(i.$$.fragment)},l(r){t=Ae(r,"DISCORD-ITALIC",{});var s=Ye(t);ct(i.$$.fragment,s),s.forEach(oe)},m(r,s){ke(r,t,s),ut(i,t,null),e=!0},p(r,s){const o={};s&1&&(o.nodes=r[0].content),s&2&&(o.context=r[1]),i.$set(o)},i(r){e||(Oe(i.$$.fragment,r),e=!0)},o(r){De(i.$$.fragment,r),e=!1},d(r){r&&oe(t),ht(i)}}}function al(a){let t,i=a[0].content+"",e;return{c(){t=Ie("discord-code"),e=pt(i)},l(r){t=Ae(r,"DISCORD-CODE",{});var s=Ye(t);e=gt(s,i),s.forEach(oe)},m(r,s){ke(r,t,s),Et(t,e)},p(r,s){s&1&&i!==(i=r[0].content+"")&&Nt(e,i)},i:ue,o:ue,d(r){r&&oe(t)}}}function rl(a){let t;function i(s,o){return s[1].type!==Dt.REPLY?_l:gl}let e=i(a),r=e(a);return{c(){r.c(),t=qe()},l(s){r.l(s),t=qe()},m(s,o){r.m(s,o),ke(s,t,o)},p(s,o){e===(e=i(s))&&r?r.p(s,o):(r.d(1),r=e(s),r&&(r.c(),r.m(t.parentNode,t)))},i:ue,o:ue,d(s){s&&oe(t),r.d(s)}}}function sl(a){let t,i,e;return{c(){t=Ie("discord-mention"),i=pt("@"),e=pt(a[5]),this.h()},l(r){t=Ae(r,"DISCORD-MENTION",{type:!0,highlight:!0});var s=Ye(t);i=gt(s,"@"),e=gt(s,a[5]),s.forEach(oe),this.h()},h(){et(t,"type","role"),et(t,"highlight","")},m(r,s){ke(r,t,s),Et(t,i),Et(t,e)},p(r,s){s&32&&Nt(e,r[5])},i:ue,o:ue,d(r){r&&oe(t)}}}function ol(a){let t,i=(a[4]?a[4].name:`<@${a[0].id}>`)+"",e;return{c(){t=Ie("discord-mention"),e=pt(i),this.h()},l(r){t=Ae(r,"DISCORD-MENTION",{type:!0});var s=Ye(t);e=gt(s,i),s.forEach(oe),this.h()},h(){et(t,"type","user")},m(r,s){ke(r,t,s),Et(t,e)},p(r,s){s&17&&i!==(i=(r[4]?r[4].name:`<@${r[0].id}>`)+"")&&Nt(e,i)},i:ue,o:ue,d(r){r&&oe(t)}}}function nl(a){let t,i=(a[3]?a[3].name:`<@&${a[0].id}>`)+"",e,r;return{c(){t=Ie("discord-mention"),e=pt(i),this.h()},l(s){t=Ae(s,"DISCORD-MENTION",{type:!0,color:!0});var o=Ye(t);e=gt(o,i),o.forEach(oe),this.h()},h(){var s;et(t,"type","role"),et(t,"color",r=a[1].type===Dt.REPLY||(s=a[3])==null?void 0:s.hexColor)},m(s,o){ke(s,t,o),Et(t,e)},p(s,o){var d;o&9&&i!==(i=(s[3]?s[3].name:`<@&${s[0].id}>`)+"")&&Nt(e,i),o&10&&r!==(r=s[1].type===Dt.REPLY||(d=s[3])==null?void 0:d.hexColor)&&et(t,"color",r)},i:ue,o:ue,d(s){s&&oe(t)}}}function dl(a){let t;function i(s,o){return s[2]===null?yl:s[2].dm?bl:vl}let e=i(a),r=e(a);return{c(){r.c(),t=qe()},l(s){r.l(s),t=qe()},m(s,o){r.m(s,o),ke(s,t,o)},p(s,o){e===(e=i(s))&&r?r.p(s,o):(r.d(1),r=e(s),r&&(r.c(),r.m(t.parentNode,t)))},i:ue,o:ue,d(s){s&&oe(t),r.d(s)}}}function ll(a){let t;function i(s,o){return s[1].type===Dt.REPLY?kl:wl}let e=i(a),r=e(a);return{c(){r.c(),t=qe()},l(s){r.l(s),t=qe()},m(s,o){r.m(s,o),ke(s,t,o)},p(s,o){e!==(e=i(s))&&(r.d(1),r=e(s),r&&(r.c(),r.m(t.parentNode,t)))},i:ue,o:ue,d(s){s&&oe(t),r.d(s)}}}function cl(a){let t,i,e,r;const s=[$l,xl],o=[];function d(l,h){return l[1].type===Dt.REPLY?0:1}return t=d(a),i=o[t]=s[t](a),{c(){i.c(),e=qe()},l(l){i.l(l),e=qe()},m(l,h){o[t].m(l,h),ke(l,e,h),r=!0},p(l,h){let c=t;t=d(l),t===c?o[t].p(l,h):(Gt(),De(o[c],1,1,()=>{o[c]=null}),Kt(),i=o[t],i?i.p(l,h):(i=o[t]=s[t](l),i.c()),Oe(i,1),i.m(e.parentNode,e))},i(l){r||(Oe(i),r=!0)},o(l){De(i),r=!1},d(l){l&&oe(e),o[t].d(l)}}}function ul(a){let t,i,e,r;return i=new _t({props:{nodes:a[0].content,context:a[1]}}),{c(){t=Ie("a"),lt(i.$$.fragment),this.h()},l(s){t=Ae(s,"A",{href:!0,target:!0,rel:!0});var o=Ye(t);ct(i.$$.fragment,o),o.forEach(oe),this.h()},h(){Ut(t,"href",e=a[0].target),Ut(t,"target","_blank"),Ut(t,"rel","noreferrer")},m(s,o){ke(s,t,o),ut(i,t,null),r=!0},p(s,o){const d={};o&1&&(d.nodes=s[0].content),o&2&&(d.context=s[1]),i.$set(d),(!r||o&1&&e!==(e=s[0].target))&&Ut(t,"href",e)},i(s){r||(Oe(i.$$.fragment,s),r=!0)},o(s){De(i.$$.fragment,s),r=!1},d(s){s&&oe(t),ht(i)}}}function hl(a){let t,i,e,r;return i=new _t({props:{nodes:a[0].content,context:a[1]}}),{c(){t=Ie("a"),lt(i.$$.fragment),this.h()},l(s){t=Ae(s,"A",{href:!0});var o=Ye(t);ct(i.$$.fragment,o),o.forEach(oe),this.h()},h(){Ut(t,"href",e=a[0].target)},m(s,o){ke(s,t,o),ut(i,t,null),r=!0},p(s,o){const d={};o&1&&(d.nodes=s[0].content),o&2&&(d.context=s[1]),i.$set(d),(!r||o&1&&e!==(e=s[0].target))&&Ut(t,"href",e)},i(s){r||(Oe(i.$$.fragment,s),r=!0)},o(s){De(i.$$.fragment,s),r=!1},d(s){s&&oe(t),ht(i)}}}function fl(a){let t=a[0].content+"",i;return{c(){i=pt(t)},l(e){i=gt(e,t)},m(e,r){ke(e,i,r)},p(e,r){r&1&&t!==(t=e[0].content+"")&&Nt(i,t)},i:ue,o:ue,d(e){e&&oe(i)}}}function ml(a){let t,i;return t=new _t({props:{nodes:a[0].content,context:a[1]}}),{c(){lt(t.$$.fragment)},l(e){ct(t.$$.fragment,e)},m(e,r){ut(t,e,r),i=!0},p(e,r){const s={};r&1&&(s.nodes=e[0].content),r&2&&(s.context=e[1]),t.$set(s)},i(e){i||(Oe(t.$$.fragment,e),i=!0)},o(e){De(t.$$.fragment,e),i=!1},d(e){ht(t,e)}}}function pl(a){let t=a[0].content+"",i;return{c(){i=pt(t)},l(e){i=gt(e,t)},m(e,r){ke(e,i,r)},p(e,r){r&1&&t!==(t=e[0].content+"")&&Nt(i,t)},i:ue,o:ue,d(e){e&&oe(i)}}}function gl(a){let t,i=a[0].content+"",e;return{c(){t=Ie("discord-code"),e=pt(i)},l(r){t=Ae(r,"DISCORD-CODE",{});var s=Ye(t);e=gt(s,i),s.forEach(oe)},m(r,s){ke(r,t,s),Et(t,e)},p(r,s){s&1&&i!==(i=r[0].content+"")&&Nt(e,i)},d(r){r&&oe(t)}}}function _l(a){let t,i="node.content";return{c(){t=Ie("discord-code"),t.textContent=i,this.h()},l(e){t=Ae(e,"DISCORD-CODE",{multiline:!0,"data-svelte-h":!0}),ca(t)!=="svelte-1okiys2"&&(t.textContent=i),this.h()},h(){et(t,"multiline","")},m(e,r){ke(e,t,r)},p:ue,d(e){e&&oe(t)}}}function vl(a){let t,i=a[2].name+"",e,r;return{c(){t=Ie("discord-mention"),e=pt(i),this.h()},l(s){t=Ae(s,"DISCORD-MENTION",{type:!0});var o=Ye(t);e=gt(o,i),o.forEach(oe),this.h()},h(){et(t,"type",r=Ga[a[2].type].toLowerCase())},m(s,o){ke(s,t,o),Et(t,e)},p(s,o){o&4&&i!==(i=s[2].name+"")&&Nt(e,i),o&4&&r!==(r=Ga[s[2].type].toLowerCase())&&et(t,"type",r)},d(s){s&&oe(t)}}}function bl(a){let t,i="DM Channel";return{c(){t=Ie("discord-mention"),t.textContent=i,this.h()},l(e){t=Ae(e,"DISCORD-MENTION",{type:!0,"data-svelte-h":!0}),ca(t)!=="svelte-1dc58ji"&&(t.textContent=i),this.h()},h(){et(t,"type","channel")},m(e,r){ke(e,t,r)},p:ue,d(e){e&&oe(t)}}}function yl(a){let t,i="<#${node.id}>",e;return{c(){t=Ie("discord-mention"),e=pt(i),this.h()},l(r){t=Ae(r,"DISCORD-MENTION",{type:!0});var s=Ye(t);e=gt(s,i),s.forEach(oe),this.h()},h(){et(t,"type","channel")},m(r,s){ke(r,t,s),Et(t,e)},p:ue,d(r){r&&oe(t)}}}function wl(a){let t;return{c(){t=Ie("br")},l(i){t=Ae(i,"BR",{})},m(i,e){ke(i,t,e)},d(i){i&&oe(t)}}}function kl(a){let t=" ",i;return{c(){i=pt(t)},l(e){i=gt(e,t)},m(e,r){ke(e,i,r)},d(e){e&&oe(i)}}}function xl(a){let t,i,e;return i=new _t({props:{nodes:a[0].content,context:a[1]}}),{c(){t=Ie("discord-quote"),lt(i.$$.fragment)},l(r){t=Ae(r,"DISCORD-QUOTE",{});var s=Ye(t);ct(i.$$.fragment,s),s.forEach(oe)},m(r,s){ke(r,t,s),ut(i,t,null),e=!0},p(r,s){const o={};s&1&&(o.nodes=r[0].content),s&2&&(o.context=r[1]),i.$set(o)},i(r){e||(Oe(i.$$.fragment,r),e=!0)},o(r){De(i.$$.fragment,r),e=!1},d(r){r&&oe(t),ht(i)}}}function $l(a){let t,i;return t=new _t({props:{nodes:a[0].content,context:a[1]}}),{c(){lt(t.$$.fragment)},l(e){ct(t.$$.fragment,e)},m(e,r){ut(t,e,r),i=!0},p(e,r){const s={};r&1&&(s.nodes=e[0].content),r&2&&(s.context=e[1]),t.$set(s)},i(e){i||(Oe(t.$$.fragment,e),i=!0)},o(e){De(t.$$.fragment,e),i=!1},d(e){ht(t,e)}}}function Tl(a){let t,i,e,r;const s=[fl,hl,ul,cl,ll,dl,nl,ol,sl,rl,al,il,tl,el,Xd,Jd,Kd,Gd,Wd,qd,Qd],o=[];function d(l,h){return l[5]==="text"?0:l[5]==="link"?1:l[5]==="url"||l[5]==="autolink"?2:l[5]==="blockQuote"?3:l[5]==="br"||l[5]==="newline"?4:l[5]==="channel"?5:l[5]==="role"?6:l[5]==="user"?7:l[5]==="here"||l[5]==="everyone"?8:l[5]==="codeBlock"?9:l[5]==="inlineCode"?10:l[5]==="em"?11:l[5]==="strong"?12:l[5]==="underline"?13:l[5]==="strikethrough"?14:l[5]==="emoticon"?15:l[5]==="spoiler"?16:l[5]==="emoji"||l[5]==="twemoji"?17:l[5]==="timestamp"?18:typeof l[0].content=="string"?19:20}return t=d(a),i=o[t]=s[t](a),{c(){i.c(),e=qe()},l(l){i.l(l),e=qe()},m(l,h){o[t].m(l,h),ke(l,e,h),r=!0},p(l,[h]){let c=t;t=d(l),t===c?o[t].p(l,h):(Gt(),De(o[c],1,1,()=>{o[c]=null}),Kt(),i=o[t],i?i.p(l,h):(i=o[t]=s[t](l),i.c()),Oe(i,1),i.m(e.parentNode,e))},i(l){r||(Oe(i),r=!0)},o(l){De(i),r=!1},d(l){l&&oe(e),o[t].d(l)}}}async function jl(a){return null}async function zl(a){return null}async function Cl(a){return null}function El(a,t,i){let e,{node:r}=t,{context:s}=t,o=null,d=null,l=null;async function h(){e==="channel"?i(2,o=await jl(r.id)):e==="role"?i(3,d=await zl(r.id)):e==="user"&&i(4,l=await Cl(r.id))}return h(),a.$$set=c=>{"node"in c&&i(0,r=c.node),"context"in c&&i(1,s=c.context)},a.$$.update=()=>{a.$$.dirty&1&&i(5,e=r.type)},[r,s,o,d,l,e]}class ns extends ua{constructor(t){super(),ha(this,t,El,Tl,la,{node:0,context:1})}}function Sr(a,t,i){const e=a.slice();return e[2]=t[i],e[4]=i,e}function Ml(a){let t,i;return t=new ns({props:{node:a[0],context:a[1]}}),{c(){lt(t.$$.fragment)},l(e){ct(t.$$.fragment,e)},m(e,r){ut(t,e,r),i=!0},p(e,r){const s={};r&1&&(s.node=e[0]),r&2&&(s.context=e[1]),t.$set(s)},i(e){i||(Oe(t.$$.fragment,e),i=!0)},o(e){De(t.$$.fragment,e),i=!1},d(e){ht(t,e)}}}function Sl(a){let t=[],i=new Map,e,r,s=sa(a[0]);const o=d=>d[4];for(let d=0;d<s.length;d+=1){let l=Sr(a,s,d),h=o(l);i.set(h,t[d]=Or(h,l))}return{c(){for(let d=0;d<t.length;d+=1)t[d].c();e=qe()},l(d){for(let l=0;l<t.length;l+=1)t[l].l(d);e=qe()},m(d,l){for(let h=0;h<t.length;h+=1)t[h]&&t[h].m(d,l);ke(d,e,l),r=!0},p(d,l){l&3&&(s=sa(d[0]),Gt(),t=ps(t,l,o,1,d,s,i,e.parentNode,gs,Or,e,Sr),Kt())},i(d){if(!r){for(let l=0;l<s.length;l+=1)Oe(t[l]);r=!0}},o(d){for(let l=0;l<t.length;l+=1)De(t[l]);r=!1},d(d){d&&oe(e);for(let l=0;l<t.length;l+=1)t[l].d(d)}}}function Or(a,t){let i,e,r;return e=new ns({props:{node:t[2],context:t[1]}}),{key:a,first:null,c(){i=qe(),lt(e.$$.fragment),this.h()},l(s){i=qe(),ct(e.$$.fragment,s),this.h()},h(){this.first=i},m(s,o){ke(s,i,o),ut(e,s,o),r=!0},p(s,o){t=s;const d={};o&1&&(d.node=t[2]),o&2&&(d.context=t[1]),e.$set(d)},i(s){r||(Oe(e.$$.fragment,s),r=!0)},o(s){De(e.$$.fragment,s),r=!1},d(s){s&&oe(i),ht(e,s)}}}function Ol(a){let t,i,e,r,s;const o=[Sl,Ml],d=[];function l(h,c){return c&1&&(t=null),t==null&&(t=!!Array.isArray(h[0])),t?0:1}return i=l(a,-1),e=d[i]=o[i](a),{c(){e.c(),r=qe()},l(h){e.l(h),r=qe()},m(h,c){d[i].m(h,c),ke(h,r,c),s=!0},p(h,[c]){let n=i;i=l(h,c),i===n?d[i].p(h,c):(Gt(),De(d[n],1,1,()=>{d[n]=null}),Kt(),e=d[i],e?e.p(h,c):(e=d[i]=o[i](h),e.c()),Oe(e,1),e.m(r.parentNode,r))},i(h){s||(Oe(e),s=!0)},o(h){De(e),s=!1},d(h){h&&oe(r),d[i].d(h)}}}function Dl(a,t,i){let{nodes:e}=t,{context:r}=t;return a.$$set=s=>{"nodes"in s&&i(0,e=s.nodes),"context"in s&&i(1,r=s.context)},[e,r]}class _t extends ua{constructor(t){super(),ha(this,t,Dl,Ol,la,{nodes:0,context:1})}}function Ll(a){let t,i;return t=new _t({props:{nodes:a[1],context:a[0]}}),{c(){lt(t.$$.fragment)},l(e){ct(t.$$.fragment,e)},m(e,r){ut(t,e,r),i=!0},p(e,[r]){const s={};r&2&&(s.nodes=e[1]),r&1&&(s.context=e[0]),t.$set(s)},i(e){i||(Oe(t.$$.fragment,e),i=!0)},o(e){De(t.$$.fragment,e),i=!1},d(e){ht(t,e)}}}function Nl(a,t,i){let{content:e}=t,{context:r}=t,s=[],o=!1;return r.type===Dt.REPLY&&e.length>180&&(e=e.slice(0,180)+"..."),s=Yd(e,r.type===Dt.EMBED||r.type===Dt.WEBHOOK?"extended":"normal"),o=s.every(d=>["emoji","twemoji"].includes(d.type)||d.type==="text"&&d.content.trim().length===0),o&&s.filter(l=>["emoji","twemoji"].includes(l.type)).length<=25&&(r.largeEmojis=!0),a.$$set=d=>{"content"in d&&i(2,e=d.content),"context"in d&&i(0,r=d.context)},[r,s,e]}class Pl extends ua{constructor(t){super(),ha(this,t,Nl,Ll,la,{content:2,context:0})}}const Dr="logviewer-custom-style",Lr={"discord-message":`
:host {
  color: var(--text-normal) !important;
}

:host([highlight]) {
  background-color: var(--background-mentioned) !important;
}

:host([highlight])::before {
  background-color: var(--info-warning-foreground) !important;
}

:host([ephemeral]) {
  background-color: var(--brand-05a) !important;
}

:host([ephemeral]:hover) {
  background-color: var(--brand-10a) !important;
}

:host([ephemeral])::before {
  background-color: var(--brand-500) !important;
}

.discord-message-timestamp {
  color: var(--text-muted) !important;
}

.discord-message-edited {
  color: var(--text-muted) !important;
}

:host(:hover) {
  background-color: var(--background-message-hover) !important;
}

:host([highlight]:hover) {
  background-color: var(--background-mentioned-hover) !important;
}

.discord-message-ephemeral {
  color: var(--text-muted) !important;
}

.discord-message-ephemeral .discord-message-ephemeral-link {
  color: var(--text-link) !important;
}`,"discord-author-info":`
:host .discord-author-username  {
  color: var(--header-primary) !important;
}

:host .discord-application-tag {
  background-color: var(--bg-brand) !important;
  color: var(--white) !important;
}

:host .discord-application-tag.discord-application-tag-op {
  color: var(--brand-560) !important;
  background-color: var(--brand-260) !important;
}`,"discord-code":`
:host {
  background-color: var(--background-secondary) !important;
}

:host([multiline]) code {
  background-color: var(--background-secondary) !important;
  border: 1px solid var(--background-tertiary) !important;
}

/* verify colors, unsure */
:host([embed]) code {
  background-color: var(--background-secondary) !important;
}

:host([embed][multiline]) code {
  background: var(--background-secondary) !important;
}`,"discord-invite":"","discord-attachment":"","discord-image-attachment":"","discord-link":`
a {
  color: var(--text-link) !important;
}`,"discord-mention":`
:host {
  color: var(--mention-foreground) !important;
  background-color: var(--mention-background) !important;
}

:host([type='role']) {
  background-color: var(--mention-background) !important;
}

:host(:hover) {
  color: var(--white-500) !important;
  background-color: var(--brand-500) !important;
}`,"discord-quote":`
.discord-quote-divider {
  background-color: var(--interactive-muted) !important;
}`,"discord-reaction":"","discord-spoiler":`
:root {
  --__spoiler-background-color--hidden: var(--primary-300);
  --__spoiler-background-color--hidden--hover: hsl(var(--primary-300-hsl) / 0.8);
  --__spoiler-background-color--revealed: hsl(var(--black-500-hsl) / 0.1);
  --__spoiler-text-color--hidden: transparent;
  --__spoiler-warning-text-color: var(--primary-200);
  --__spoiler-warning-text-color--hover: var(--white-500);
  --__spoiler-warning-background-color: hsl(var(--black-500-hsl) / 0.6);
  --__spoiler-warning-background-color--hover: hsl(var(--black-500-hsl) / 0.9);
  --__spoiler-container-box-shadow-color: hsl(var(--black-500-hsl) / 0.1);
}

:root.dark {
  --__spoiler-background-color--hidden: var(--primary-700);
  --__spoiler-background-color--hidden--hover: hsl(var(--primary-700-hsl) / 0.8);
  --__spoiler-background-color--revealed: hsl(var(--white-500-hsl) / 0.1);
  --__spoiler-text-color--hidden: transparent;
  --__spoiler-warning-text-color: var(--primary-200);
  --__spoiler-warning-text-color--hover: var(--white-500);
  --__spoiler-warning-background-color: hsl(var(--black-500-hsl) / 0.6);
  --__spoiler-warning-background-color--hover: hsl(var(--black-500-hsl) / 0.9);
  --__spoiler-container-box-shadow-color: hsl(var(--black-500-hsl) / 0.1);
}

:host {
  color: var(--__spoiler-text-color--hidden) !important;
  background-color: var(--__spoiler-background-color--hidden) !important;
}

:host(:hover) {
  background-color: var(--__spoiler-background-color--hidden--hover) !important;
}

:host([activated]) {
  color: inherit !important;
  background-color: var(--__spoiler-background-color--revealed) !important;
}`,"discord-subscript":"","discord-system-message":"","discord-tenor-video":"","discord-time":`
:host {
  background-color: var(--background-modifier-accent) !important;
}`,"discord-video-attachment":""};async function Fi(a){if(a instanceof ShadowRoot){if(a.childNodes.length===0){let t=100;do await new Promise(i=>setTimeout(i,4));while(a.childNodes.length===0&&t-- >0)}if(a.host.nodeName.toLowerCase()in Lr&&!a.querySelector(`style#${Dr}`)){const t=document.createElement("style");t.textContent=Lr[a.host.nodeName.toLowerCase()],t.id=Dr,a.appendChild(t)}}a.childNodes.forEach(t=>{t instanceof Element&&(t.shadowRoot&&Fi(t.shadowRoot),Fi(t))})}function Nr(a,t,i){const e=a.slice();return e[6]=t[i],e}function Il(a){let t,i="Loading...";return{c(){t=Ie("p"),t.textContent=i},l(e){t=Ae(e,"P",{"data-svelte-h":!0}),ca(t)!=="svelte-qdsr2u"&&(t.textContent=i)},m(e,r){ke(e,t,r)},p:ue,i:ue,o:ue,d(e){e&&oe(t)}}}function Al(a){let t,i,e,r;const s=[Vl,Bl],o=[];function d(l,h){return l[0].messages.length>0?0:1}return i=d(a),e=o[i]=s[i](a),{c(){t=Ie("div"),e.c(),this.h()},l(l){t=Ae(l,"DIV",{class:!0});var h=Ye(t);e.l(h),h.forEach(oe),this.h()},h(){Ut(t,"class","rounded-lg p-4")},m(l,h){ke(l,t,h),o[i].m(t,null),r=!0},p(l,h){let c=i;i=d(l),i===c?o[i].p(l,h):(Gt(),De(o[c],1,1,()=>{o[c]=null}),Kt(),e=o[i],e?e.p(l,h):(e=o[i]=s[i](l),e.c()),Oe(e,1),e.m(t,null))},i(l){r||(Oe(e),r=!0)},o(l){De(e),r=!1},d(l){l&&oe(t),o[i].d()}}}function Rl(a){let t,i,e;return{c(){t=Ie("div"),i=Ie("p"),e=pt(a[1]),this.h()},l(r){t=Ae(r,"DIV",{class:!0});var s=Ye(t);i=Ae(s,"P",{});var o=Ye(i);e=gt(o,a[1]),o.forEach(oe),s.forEach(oe),this.h()},h(){Ut(t,"class","bg-red-100 text-red-700 border border-red-300 rounded-lg p-4 mb-4")},m(r,s){ke(r,t,s),Et(t,i),Et(i,e)},p(r,s){s&2&&Nt(e,r[1])},i:ue,o:ue,d(r){r&&oe(t)}}}function Bl(a){let t,i="No messages found.";return{c(){t=Ie("p"),t.textContent=i},l(e){t=Ae(e,"P",{"data-svelte-h":!0}),ca(t)!=="svelte-1k2zfyn"&&(t.textContent=i)},m(e,r){ke(e,t,r)},p:ue,i:ue,o:ue,d(e){e&&oe(t)}}}function Vl(a){let t,i,e=sa(a[0].messages),r=[];for(let o=0;o<e.length;o+=1)r[o]=Pr(Nr(a,e,o));const s=o=>De(r[o],1,1,()=>{r[o]=null});return{c(){t=Ie("discord-messages");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){t=Ae(o,"DISCORD-MESSAGES",{style:!0});var d=Ye(t);for(let l=0;l<r.length;l+=1)r[l].l(d);d.forEach(oe),this.h()},h(){dr(t,"background-color","var(--background-primary)"),dr(t,"border","none")},m(o,d){ke(o,t,d);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(t,null);i=!0},p(o,d){if(d&1){e=sa(o[0].messages);let l;for(l=0;l<e.length;l+=1){const h=Nr(o,e,l);r[l]?(r[l].p(h,d),Oe(r[l],1)):(r[l]=Pr(h),r[l].c(),Oe(r[l],1),r[l].m(t,null))}for(Gt(),l=e.length;l<r.length;l+=1)s(l);Kt()}},i(o){if(!i){for(let d=0;d<e.length;d+=1)Oe(r[d]);i=!0}},o(o){r=r.filter(Boolean);for(let d=0;d<r.length;d+=1)De(r[d]);i=!1},d(o){o&&oe(t),hs(r,o)}}}function Pr(a){let t,i,e,r,s,o,d;return i=new Pl({props:{content:a[6].content,context:{type:Dt.EMBED,largeEmojis:!1}}}),{c(){t=Ie("discord-message"),lt(i.$$.fragment),e=fs(),this.h()},l(l){t=Ae(l,"DISCORD-MESSAGE",{timestamp:!0,author:!0,avatar:!0});var h=Ye(t);ct(i.$$.fragment,h),e=ms(h),h.forEach(oe),this.h()},h(){et(t,"timestamp",r=a[6].timestamp),et(t,"author",s=a[6].author.name),et(t,"avatar",o=a[6].author.avatar_url)},m(l,h){ke(l,t,h),ut(i,t,null),Et(t,e),d=!0},p(l,h){const c={};h&1&&(c.content=l[6].content),i.$set(c),(!d||h&1&&r!==(r=l[6].timestamp))&&et(t,"timestamp",r),(!d||h&1&&s!==(s=l[6].author.name))&&et(t,"author",s),(!d||h&1&&o!==(o=l[6].author.avatar_url))&&et(t,"avatar",o)},i(l){d||(Oe(i.$$.fragment,l),d=!0)},o(l){De(i.$$.fragment,l),d=!1},d(l){l&&oe(t),ht(i)}}}function Ul(a){let t,i,e,r;const s=[Rl,Al,Il],o=[];function d(l,h){return l[1]?0:l[0]?1:2}return i=d(a),e=o[i]=s[i](a),{c(){t=Ie("div"),e.c(),this.h()},l(l){t=Ae(l,"DIV",{class:!0});var h=Ye(t);e.l(h),h.forEach(oe),this.h()},h(){Ut(t,"class","p-4")},m(l,h){ke(l,t,h),o[i].m(t,null),r=!0},p(l,[h]){let c=i;i=d(l),i===c?o[i].p(l,h):(Gt(),De(o[c],1,1,()=>{o[c]=null}),Kt(),e=o[i],e?e.p(l,h):(e=o[i]=s[i](l),e.c()),Oe(e,1),e.m(t,null))},i(l){r||(Oe(e),r=!0)},o(l){De(e),r=!1},d(l){l&&oe(t),o[i].d()}}}const Hl="/api/logs";function Fl(a,t,i){let e=null,r=null,s;async function o(){if(i(0,e=null),i(1,r=null),!s){i(1,r="No log key provided.");return}try{const l=await fetch(`${Hl}/${s}`);if(l.ok){const h=await l.json();h&&h.success===!0&&i(0,e=h.result)}e||i(1,r="Log not found.")}catch{i(1,r="An error occurred while fetching the log.")}}let d;return cs(()=>{s=new URLSearchParams(window.location.search).get("key")||"",o().then(()=>{if(e){const l=document.querySelector("discord-messages");l&&(Fi(l),d=new MutationObserver(h=>{h.forEach(c=>{c.addedNodes.forEach(n=>{n instanceof Element&&(n.shadowRoot&&Fi(n.shadowRoot),Fi(n))})})}),d.observe(l,{childList:!0,subtree:!0}))}})}),us(()=>{d&&(d.disconnect(),d=null)}),[e,r]}class tc extends ua{constructor(t){super(),ha(this,t,Fl,Ul,la,{})}}export{tc as component};
