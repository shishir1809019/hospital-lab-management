"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[413],{92176:function(e){e.exports=function(e,n,t,r,i,o,a,s){if(!e){var u;if(void 0===n)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[t,r,i,o,a,s],l=0;(u=new Error(n.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},2469:function(e,n,t){var r=t(18489),i=t(83738),o=t(81694),a=t.n(o),s=t(72791),u=t(80239),c=t(52134),l=t(56236),f=t(10162),p=t(72709),d=t(80473),v=t(27472),g=t(66543),h=t(80184),y=["bsPrefix","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"],b=(0,v.Z)("h4");b.displayName="DivStyledAsH4";var m=(0,g.Z)("alert-heading",{Component:b}),w=(0,g.Z)("alert-link",{Component:l.Z}),O={variant:"primary",show:!0,transition:p.Z,closeLabel:"Close alert"},S=s.forwardRef((function(e,n){var t=(0,u.Ch)(e,{show:"onClose"}),o=t.bsPrefix,s=t.show,l=t.closeLabel,v=t.closeVariant,g=t.className,b=t.children,m=t.variant,w=t.onClose,O=t.dismissible,S=t.transition,j=(0,i.Z)(t,y),C=(0,f.vE)(o,"alert"),P=(0,c.Z)((function(e){w&&w(!1,e)})),k=!0===S?p.Z:S,Z=(0,h.jsxs)("div",(0,r.Z)((0,r.Z)({role:"alert"},k?void 0:j),{},{ref:n,className:a()(g,C,m&&"".concat(C,"-").concat(m),O&&"".concat(C,"-dismissible")),children:[O&&(0,h.jsx)(d.Z,{onClick:P,"aria-label":l,variant:v}),b]}));return k?(0,h.jsx)(k,(0,r.Z)((0,r.Z)({unmountOnExit:!0},j),{},{ref:void 0,in:s,children:Z})):s?Z:null}));S.displayName="Alert",S.defaultProps=O,n.Z=Object.assign(S,{Link:w,Heading:m})},15897:function(e,n,t){function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,s=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(u){s=!0,i=u}finally{try{a||null==t.return||t.return()}finally{if(s)throw i}}return o}}(e,n)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{$:function(){return v}});var o=t(72344),a=t(72791),s=t(71087);function u(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var c={};function l(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&c[n[0]]||("string"===typeof n[0]&&(c[n[0]]=new Date),u.apply(void 0,n))}function f(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,a.useContext)(s.OO)||{},o=r.i18n,u=r.defaultNS,c=t||o||(0,s.nI)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new s.zv),!c){l("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},v=[p,{},!1];return v.t=p,v.i18n={},v.ready=!1,v}c.options.react&&void 0!==c.options.react.wait&&l("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var g=d(d(d({},(0,s.JP)()),c.options.react),n),h=g.useSuspense,y=g.keyPrefix,b=e||u||c.options&&c.options.defaultNS;b="string"===typeof b?[b]:b||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(b);var m=(c.isInitialized||c.initializedStoreOnce)&&b.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return l("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],i=!!n.options&&n.options.fallbackLng,o=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||!n.services.backendConnector.backend||!(!a(r,e)||i&&!a(o,e)))}(e,c,g)}));function w(){return c.getFixedT(null,"fallback"===g.nsMode?b:b[0],y)}var O=i((0,a.useState)(w),2),S=O[0],j=O[1],C=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=g.bindI18n,n=g.bindI18nStore;function t(){C.current&&j(w)}return C.current=!0,m||h||f(c,b,(function(){C.current&&j(w)})),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){C.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[c,b.join()]);var P=(0,a.useRef)(!0);(0,a.useEffect)((function(){C.current&&!P.current&&j(w),P.current=!1}),[c]);var k=[S,c,m];if(k.t=S,k.i18n=c,k.ready=m,m)return k;if(!m&&!h)return k;throw new Promise((function(e){f(c,b,(function(){e()}))}))}},80239:function(e,n,t){t.d(n,{Ch:function(){return c},$c:function(){return u}});var r=t(87462),i=t(63366),o=t(72791);t(92176);function a(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function s(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}function u(e,n,t){var r=(0,o.useRef)(void 0!==e),i=(0,o.useState)(n),a=i[0],s=i[1],u=void 0!==e,c=r.current;return r.current=u,!u&&c&&a!==n&&s(n),[u?e:a,(0,o.useCallback)((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.apply(void 0,[e].concat(r)),s(e)}),[t])]}function c(e,n){return Object.keys(n).reduce((function(t,o){var c,l=t,f=l[a(o)],p=l[o],d=(0,i.Z)(l,[a(o),o].map(s)),v=n[o],g=u(p,f,e[v]),h=g[0],y=g[1];return(0,r.Z)({},d,((c={})[o]=h,c[v]=y,c))}),e)}function l(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function f(e){this.setState(function(n){var t=this.constructor.getDerivedStateFromProps(e,n);return null!==t&&void 0!==t?t:null}.bind(this))}function p(e,n){try{var t=this.props,r=this.state;this.props=e,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,r)}finally{this.props=t,this.state=r}}l.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0,p.__suppressDeprecationWarning=!0}}]);
//# sourceMappingURL=413.f412ae78.chunk.js.map