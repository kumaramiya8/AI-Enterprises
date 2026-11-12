(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(n){if(n.ep)return;n.ep=!0;const c=a(n);fetch(n.href,c)}})();/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=([e,t,a])=>{const o=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(n=>{o.setAttribute(n,String(t[n]))}),a?.length&&a.forEach(n=>{const c=x(n);o.appendChild(c)}),o},k=(e,t={})=>{const o={...b,...t};return x(["svg",o,e])};/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=(...e)=>e.filter((t,a,o)=>!!t&&t.trim()!==""&&o.indexOf(t)===a).join(" ").trim();/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=e=>{let t="",a=!1;for(const o of e){if(o==="-"||o==="_"||o<=" "){a=t.length>0;continue}t.length===0?t+=o.toLowerCase():t+=a?o.toUpperCase():o,a=!1}return t};/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=e=>{const t=B(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=e=>Array.from(e.attributes).reduce((t,a)=>(t[a.name]=a.value,t),{}),v=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",w=(e,{nameAttr:t,icons:a,attrs:o})=>{const n=e.getAttribute(t);if(n==null)return;const c=T(n),i=a[c];if(!i)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const r=S(e),l=I(r)?{}:{"aria-hidden":"true"},p={...b,"data-lucide":n,...l,...o,...r},u=v(r),s=v(o),d=L("lucide",`lucide-${n}`,...u,...s);d&&Object.assign(p,{class:d});const h=k(i,p);return e.parentNode?.replaceChild(h,e)};/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"M18 17.5a2.5 2.5 0 1 1-4 2.03V12"}],["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M6.6 15.572A2 2 0 1 0 10 17v-5"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M10 12h4"}],["path",{d:"M10 8h4"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M8 2v3"}],["path",{d:"M16 2v3"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m9 15 2 2 4-4"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M20 6 9 17l-5-5"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"m6 9 6 6 6-6"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 9-5.5 5.5L8 12"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9 9.5a3 2.5 0 016 0c0 2-2 2-3 3.5"}],["path",{d:"M12 17h.01"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M12 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"}],["path",{d:"M8 16h.01"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m9 15 2 2 4-4"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=[["path",{d:"M12 7v4"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3"}],["path",{d:"M14 9h-4"}],["path",{d:"M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"}],["path",{d:"M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"M10 22v-6.57"}],["path",{d:"M12 11h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M14 15.43V22"}],["path",{d:"M15 16a5 5 0 0 0-6 0"}],["path",{d:"M16 11h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 7h.01"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["path",{d:"M10 8h4"}],["path",{d:"M12 21v-9"}],["path",{d:"M12 8V3"}],["path",{d:"M17 16h4"}],["path",{d:"M19 12V3"}],["path",{d:"M19 21v-5"}],["path",{d:"M3 14h4"}],["path",{d:"M5 10V3"}],["path",{d:"M5 21v-7"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"m10 20-1.25-2.5L6 18"}],["path",{d:"M10 4 8.75 6.5 6 6"}],["path",{d:"m14 20 1.25-2.5L18 18"}],["path",{d:"m14 4 1.25 2.5L18 6"}],["path",{d:"m17 21-3-6h-4"}],["path",{d:"m17 3-3 6 1.5 3"}],["path",{d:"M2 12h6.5L10 9"}],["path",{d:"m20 10-1.5 2 1.5 2"}],["path",{d:"M22 12h-6.5L14 15"}],["path",{d:"m4 10 1.5 2L4 14"}],["path",{d:"m7 21 3-6-1.5-3"}],["path",{d:"m7 3 3 6h4"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z"}]];/**
 * @license lucide v1.72.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=({icons:e={},nameAttr:t="data-lucide",attrs:a={},root:o=document,inTemplates:n}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof o>"u")throw new Error("`createIcons()` only works in a browser environment.");if(Array.from(o.querySelectorAll(`[${t}]`)).forEach(i=>w(i,{nameAttr:t,icons:e,attrs:a})),n&&Array.from(o.querySelectorAll("template")).forEach(r=>E({icons:e,nameAttr:t,attrs:a,root:r.content,inTemplates:n})),t==="data-lucide"){const i=o.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(r=>w(r,{nameAttr:"icon-name",icons:e,attrs:a})))}},de={AirVent:P,Snowflake:ne,Wind:ce,Gauge:Z,Wrench:re,ShieldCheck:ee,Layers:Q,Clock:D,Zap:le,ArrowRight:H,Check:j,CheckCircle2:z,Building2:F,Hospital:K,Hotel:U,Factory:O,Store:oe,Phone:J,Mail:X,MapPin:Y,ChevronDown:R,Menu:_,X:se,Calculator:V,Activity:q,Sparkles:ae,Fan:W,FileCheck:G,CalendarCheck:$,Sliders:te,HelpCircle:N,Thermometer:ie};function m(){E({icons:de,attrs:{"stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide-icon"}})}const M=[{category:"vrv",icon:"air-vent",tag:"Modular zoning",title:"VRV and VRF systems",desc:"Inverter variable refrigerant flow installations for commercial towers, hotels, and offices. Individual room temperature control with up to 30 percent lower power bills.",specs:["Modular outdoor inverter units","Nitrogen purged copper piping","Ceiling concealed and cassette indoor units","BMS central integration"]},{category:"chillers",icon:"snowflake",tag:"Heavy commercial",title:"Central chilled water plants",desc:"Water cooled and air cooled chillers with primary and secondary pumping loops for large high occupancy facilities and convention halls.",specs:["Screw and centrifugal chillers","Cooling towers and condenser piping","Variable frequency drives on pumps","Double skin air handling units"]},{category:"ventilation",icon:"wind",tag:"Air quality and safety",title:"Ventilation and smoke exhaust",desc:"Basement car park impulse jet fans with carbon monoxide sensors, commercial kitchen scrubbers, and building code staircase pressurization.",specs:["Basement ventilation jet fans","Kitchen exhaust with wet scrubbers","Stairwell fire smoke pressurization","Treated fresh air heat recovery units"]},{category:"cleanroom",icon:"shield-check",tag:"Medical grade",title:"Cleanrooms and hospital surgical rooms",desc:"NABH compliant surgical suites, ICUs, and pharmaceutical production cleanrooms with terminal HEPA filtration and differential pressure controls.",specs:["Laminar airflow distribution ceilings","Terminal H14 99.997 percent HEPA filters","Positive and negative pressure zoning","Precision humidity and reheat coils"]},{category:"tab",icon:"gauge",tag:"Quality verification",title:"Testing, adjusting and balancing (TAB)",desc:"Independent commissioning checks with electronic flow hoods and digital manometers. We balance airflow and water circulation to match approved design drawings.",specs:["Grille and diffuser CFM balancing","Chilled water hydronic circuit balancing","Acoustic and vibration level checks","Certified signoff dossier before billing"]},{category:"vrv",icon:"layers",tag:"Precision craft",title:"SMACNA sheet metal duct fabrication",desc:"Factory fabricated galvanized iron and pre insulated ductwork engineered with minimal static pressure drop and zero air leakage.",specs:["SMACNA gauge galvanized sheet metal","Pre insulated phenolic ducting","Motorized fire and smoke dampers","Acoustically lined supply plenums"]}],pe=[{icon:"sparkles",tag:"High density",title:"Banquet halls and event centers",desc:"Engineered for sudden crowd arrivals during weddings and celebrations. Rapid 25 minute temperature pull down and silent acoustic grilles.",capacity:"50 to 350 TR plant capacity"},{icon:"building-2",tag:"Zoned efficiency",title:"Corporate offices and IT parks",desc:"Smart zoning matching active occupancy. Fresh air ventilation with continuous carbon dioxide monitoring to keep teams alert and focused.",capacity:"30 to 1,200 TR plant capacity"},{icon:"hospital",tag:"Critical environment",title:"Hospitals and healthcare clinics",desc:"Sterile surgical theaters with laminar ceiling diffusers, cleanroom air handling, and certified positive pressure differential regimes.",capacity:"100 to 800 TR plant capacity"},{icon:"hotel",tag:"Acoustic comfort",title:"Hotels and luxury hospitality",desc:"Concealed fan coils operating under NC 25 sound levels. Desuperheaters capture waste compressor heat to supply domestic hot water.",capacity:"80 to 600 TR plant capacity"},{icon:"store",tag:"Continuous footfall",title:"Retail showrooms and malls",desc:"Entrance air curtains prevent cooled air loss through main doors. Long throw jet nozzles maintain even temperatures in high atriums.",capacity:"50 to 2,000 TR plant capacity"},{icon:"factory",tag:"Process ventilation",title:"Industrial plants and warehouses",desc:"Heavy industrial roof exhausts, high volume circulation fans, and process temperature stabilization for factories and assembly lines.",capacity:"10,000 to 100,000 CFM airflow"}],ue=[{icon:"building-2",title:"Orion Commercial High Rise",location:"Sector 62, Noida",scope:"Daikin VRV IV turnkey installation across eight floors",capacity:"450 TR",status:"Commissioned with TAB certification"},{icon:"sparkles",title:"Grand Imperial Convention Center",location:"Ayodhya Road, Lucknow",scope:"Rapid pull down ductable units and kitchen scrubbers",capacity:"220 TR",status:"Handed over with AMC maintenance"},{icon:"hospital",title:"Metro Care Surgical Facility",location:"Greater Noida",scope:"Four modular surgical rooms with H14 HEPA filtration",capacity:"350 TR",status:"NABH compliant commissioning"}];document.addEventListener("DOMContentLoaded",()=>{he(),me(),fe(),C("all"),ge(),ye(),ve(),we(),Me(),be(),m()});function he(){const e=document.getElementById("reveal-text");if(!e)return;const a=e.textContent.trim().split(/\s+/);e.innerHTML=a.map(i=>`<span class="reveal-word">${i}</span>`).join(" ");const o=e.querySelectorAll(".reveal-word");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){o.forEach(i=>i.classList.add("is-revealed"));return}let n=!1;function c(){const i=window.innerHeight*.75;o.forEach(r=>{r.getBoundingClientRect().top<=i&&r.classList.add("is-revealed")}),n=!1}window.addEventListener("scroll",()=>{n||(window.requestAnimationFrame(c),n=!0)},{passive:!0}),c()}function me(){const e=document.querySelectorAll(".scroll-reveal");if(!e.length)return;const t=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting&&(o.target.classList.add("is-visible"),t.unobserve(o.target))})},{threshold:.15,rootMargin:"0px 0px -50px 0px"});e.forEach(a=>t.observe(a))}function fe(){const e=document.getElementById("mobile-toggle-btn"),t=document.getElementById("mobile-close-btn"),a=document.getElementById("mobile-panel"),o=a?.querySelectorAll(".mobile-link");function n(){a?.classList.add("is-open"),e?.setAttribute("aria-expanded","true"),document.body.style.overflow="hidden",o?.forEach((i,r)=>{i.style.transitionDelay=`${Math.min(r*60,400)}ms`})}function c(){a?.classList.remove("is-open"),e?.setAttribute("aria-expanded","false"),document.body.style.overflow="",o?.forEach(i=>{i.style.transitionDelay="0ms"})}e?.addEventListener("click",n),t?.addEventListener("click",c),a?.querySelectorAll("a").forEach(i=>{i.addEventListener("click",c)}),document.addEventListener("keydown",i=>{i.key==="Escape"&&a?.classList.contains("is-open")&&c()})}function C(e="all"){const t=document.getElementById("services-container");if(!t)return;const a=e==="all"?M:M.filter(n=>n.category===e);t.innerHTML=a.map(n=>`
    <article class="content-card scroll-reveal is-visible">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <span class="card-tag">${n.tag}</span>
        <div class="card-icon-badge" style="margin-bottom: 0;">
          <i data-lucide="${n.icon}" class="icon-md card-icon-spin"></i>
        </div>
      </div>
      <h3 class="title-1 card-title" style="margin-top: 8px;">${n.title}</h3>
      <p class="card-desc">${n.desc}</p>
      <ul class="card-specs-list">
        ${n.specs.map(c=>`
          <li style="display: flex; align-items: center; gap: 6px;">
            <i data-lucide="check" class="icon-sm" style="color: var(--color-text-primary);"></i>
            <span>${c}</span>
          </li>
        `).join("")}
      </ul>
    </article>
  `).join(""),m();const o=document.querySelectorAll("[data-service-tab]");o.forEach(n=>{n.addEventListener("click",()=>{o.forEach(c=>c.classList.remove("is-active")),n.classList.add("is-active"),C(n.getAttribute("data-service-tab")||"all")})})}function ge(){const e=document.getElementById("sectors-container");e&&(e.innerHTML=pe.map(t=>`
    <article class="content-card scroll-reveal">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <span class="card-tag">${t.tag}</span>
        <div class="card-icon-badge" style="margin-bottom: 0;">
          <i data-lucide="${t.icon}" class="icon-md card-icon-scale"></i>
        </div>
      </div>
      <h3 class="title-1 card-title" style="margin-top: 8px;">${t.title}</h3>
      <p class="card-desc">${t.desc}</p>
      <div style="margin-top: auto; padding-top: 12px; font-size: 13px; color: var(--color-text-muted); display: flex; align-items: center; gap: 6px;">
        <i data-lucide="activity" class="icon-sm"></i>
        <span>${t.capacity}</span>
      </div>
    </article>
  `).join(""),m())}function ye(){const e=document.getElementById("projects-container");e&&(e.innerHTML=ue.map(t=>`
    <article class="content-card scroll-reveal">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <span class="card-tag" style="display: flex; align-items: center; gap: 4px;">
          <i data-lucide="map-pin" class="icon-sm"></i>
          <span>${t.location}</span>
        </span>
        <div class="card-icon-badge" style="margin-bottom: 0;">
          <i data-lucide="${t.icon}" class="icon-md card-icon-bounce"></i>
        </div>
      </div>
      <h3 class="title-1 card-title" style="margin-top: 8px;">${t.title}</h3>
      <p class="card-desc">${t.scope}</p>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--color-border); font-size: 13px;">
        <strong style="color: var(--color-text-primary); display: flex; align-items: center; gap: 4px;">
          <i data-lucide="snowflake" class="icon-sm icon-ambient-pulse"></i>
          <span>${t.capacity}</span>
        </strong>
        <span style="color: var(--color-text-muted); display: flex; align-items: center; gap: 4px;">
          <i data-lucide="check-circle-2" class="icon-sm"></i>
          <span>${t.status}</span>
        </span>
      </div>
    </article>
  `).join(""),m())}function ve(){const e=document.getElementById("calc-facility"),t=document.getElementById("calc-area"),a=document.getElementById("calc-area-val"),o=document.getElementById("calc-roof"),n=document.getElementById("out-tr"),c=document.getElementById("out-cfm"),i=document.getElementById("out-system"),r=document.getElementById("out-notes"),l=document.getElementById("use-calc-estimate");if(!e||!t)return;const p={office:{sqFtPerTr:130,cfmPerTr:400},banquet:{sqFtPerTr:55,cfmPerTr:450},hotel:{sqFtPerTr:140,cfmPerTr:380},hospital:{sqFtPerTr:80,cfmPerTr:480},retail:{sqFtPerTr:95,cfmPerTr:420},industrial:{sqFtPerTr:180,cfmPerTr:500}};function u(){const s=e.value,d=parseInt(t.value,10),h=o?.value||"intermediate";a.textContent=`${d.toLocaleString()} sq.ft`;const y=p[s]||p.office;let f=1;h==="top"&&(f=1.25),h==="glass"&&(f=1.35);const g=Math.max(2,Math.round(d/y.sqFtPerTr*f)),A=Math.round(g*y.cfmPerTr);n.textContent=g,c.textContent=A.toLocaleString(),s==="banquet"?(i.textContent="High capacity packaged ductable units with kitchen wet scrubbers",r.textContent="Engineered for rapid 25 minute temperature pull down when guests arrive, with acoustic duct insulation for speech clarity."):s==="hospital"?(i.textContent="Cleanroom air handling units with H14 HEPA filtration",r.textContent="Maintains positive differential pressure regimes and strict 25 plus air changes per hour for medical sterile suites."):s==="hotel"?(i.textContent="Low sound ceiling concealed fan coils with heat recovery",r.textContent="Whisper quiet NC 25 sound levels in rooms. Condenser heat is captured to preheat domestic bathroom water."):g>=200?(i.textContent="Central water cooled screw chillers with primary and secondary pumping",r.textContent="Maximum seasonal energy efficiency with automated building management control across multiple floors."):(i.textContent="Inverter VRV or VRF with ceiling concealed indoor units",r.textContent="Provides independent zone temperature controls and reduces electrical consumption by matching compressor speed to active room occupancy.")}[e,t,o].forEach(s=>{s?.addEventListener("input",u),s?.addEventListener("change",u)}),u(),l?.addEventListener("click",()=>{const s=document.getElementById("contact"),d=document.getElementById("form-details");s?.scrollIntoView({behavior:"smooth"}),d&&(d.value=`Estimated cooling load: ${n.textContent} TR (${c.textContent} CFM) for ${t.value} sq.ft ${e.options[e.selectedIndex].text}. System recommendation: ${i.textContent}.`,d.focus())})}function we(){const e=document.querySelectorAll(".faq-item");e.forEach(t=>{const a=t.querySelector(".faq-question-btn");a?.addEventListener("click",()=>{const o=t.classList.contains("is-open");e.forEach(n=>{n.classList.remove("is-open"),n.querySelector(".faq-question-btn")?.setAttribute("aria-expanded","false")}),o||(t.classList.add("is-open"),a.setAttribute("aria-expanded","true"))})})}function Me(){const e=document.getElementById("inquiry-form"),t=document.getElementById("form-status");e&&e.addEventListener("submit",a=>{a.preventDefault();const o=document.getElementById("form-name")?.value.trim(),n=document.getElementById("form-phone")?.value.trim(),c=document.getElementById("form-email")?.value.trim(),i=document.getElementById("form-location")?.value.trim();let r=!0;if(document.querySelectorAll(".field-error").forEach(p=>p.textContent=""),o||(document.getElementById("err-name").textContent="Enter your name",r=!1),(!n||n.length<8)&&(document.getElementById("err-phone").textContent="Enter a valid telephone number",r=!1),(!c||!c.includes("@"))&&(document.getElementById("err-email").textContent="Enter a valid email address",r=!1),i||(document.getElementById("err-location").textContent="Specify your project city",r=!1),!r)return;const l=document.getElementById("form-submit-btn");l&&(l.textContent="Submitting request..."),setTimeout(()=>{l&&(l.textContent="Request submitted"),t&&(t.style.display="block",t.style.background="#181818",t.style.border="1px solid var(--color-border)",t.style.color="#FFFFFF",t.textContent=`Survey request received for ${i}. An AI Enterprises engineering lead will contact ${n} within two business hours.`),e.reset()},500)})}function be(){const e=document.getElementById("legal-modal"),t=document.getElementById("modal-title"),a=document.getElementById("modal-body");document.getElementById("modal-close")?.addEventListener("click",()=>e?.close()),e?.addEventListener("click",n=>{n.target===e&&e.close()}),document.getElementById("privacy-link")?.addEventListener("click",n=>{n.preventDefault(),t&&a&&e&&(t.textContent="Privacy policy",a.textContent="AI Enterprises collects client contact and project specifications solely to prepare engineering proposals and service agreements. We never sell, share, or transfer customer information to third parties.",e.showModal())}),document.getElementById("terms-link")?.addEventListener("click",n=>{n.preventDefault(),t&&a&&e&&(t.textContent="Terms of contracting",a.textContent="All HVAC contracting and equipment supply contracts are governed by written scope of work schedules, agreed milestone billing, 24 hour nitrogen pressure hold test protocols, and certified testing adjusting and balancing procedures.",e.showModal())}),document.getElementById("404-link")?.addEventListener("click",n=>{n.preventDefault(),t&&a&&e&&(t.textContent="Page not found (404)",a.innerHTML=`The requested drawing or project dossier could not be located. <br/><br/><a href="#home" class="btn btn-primary" onclick="document.getElementById('legal-modal').close()">Return to home</a>`,e.showModal())})}
