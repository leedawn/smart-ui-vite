!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).SmartyUI={},e.Vue)}(this,(function(e,n){"use strict";var t=document.createElement("style");t.innerHTML='*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.i-ic-baseline-check{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio=\'xMidYMid meet\' viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-edit{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio=\'xMidYMid meet\' viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.i-ic-baseline-search{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg preserveAspectRatio=\'xMidYMid meet\' viewBox=\'0 0 24 24\' width=\'1em\' height=\'1em\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'currentColor\' d=\'M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:1em;height:1em;}.cursor-pointer,[cursor-pointer=\"\"]{cursor:pointer;}.border-none,[border-none=\"\"]{border-style:none;}.bg-\$\{props\.color\}-500{background-color:var(--\{props\.color\}-500);}.bg-gray-500{--un-bg-opacity:1;background-color:rgba(107,114,128,var(--un-bg-opacity));}.bg-red-500{--un-bg-opacity:1;background-color:rgba(239,68,68,var(--un-bg-opacity));}.p-3,[p-3=\"\"]{padding:0.75rem;}.px-4,[px-4=\"\"]{padding-left:1rem;padding-right:1rem;}.py-2,[py-2=\"\"]{padding-top:0.5rem;padding-bottom:0.5rem;}.font-semibold,[font-semibold=\"\"]{font-weight:600;}.text-white,[text-white=\"\"]{--un-text-opacity:1;color:rgba(255,255,255,var(--un-text-opacity));}\n',document.head.appendChild(t);const o=n.defineComponent({name:"renderButton",render:()=>n.h("button",null,"myButton")}),u=(e,n)=>{const t=e.__vccOpts||e;for(const[o,u]of n)t[o]=u;return t},l={},r=[n.createElementVNode("button",null,"SFCButton",-1)];const c=u(l,[["render",function(e,t){return n.openBlock(),n.createElementBlock("div",null,r)}]]),d=n.defineComponent({name:"jsxButton",render:()=>n.createVNode("button",null,[n.createTextVNode("JSX Button")])}),i={color:{type:String,default:"blue"},icon:{type:String,default:""}},s=n.defineComponent({name:"SButton",props:i,setup:(e,{slots:t})=>()=>n.createVNode("button",{class:`py-2 px-4 font-semibold text-white cursor-pointer bg-${e.color}-500 border-none`},[""!==e.icon?n.createVNode("i",{class:`i-ic-baseline-${e.icon} p-3`},null):"",t.default?t.default():""])}),a={install(e){e.component(o.name,o),e.component(c.name,c),e.component(d.name,d),e.component(s.name,s)}};e.JsxButton=d,e.RenderButton=o,e.SButton=s,e.SFCButton=c,e.default=a,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
//# sourceMappingURL=smarty-ui.umd.js.map
