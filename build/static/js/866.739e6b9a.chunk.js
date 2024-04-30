"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[866],{57806:function(e,n,t){var i=t(18489),a=t(83738),r=(t(72791),t(34358)),s=t(80184),l=["className","style","children"];n.Z=function(e){var n=e.className,t=e.style,c=e.children,o=(0,a.Z)(e,l);return(0,s.jsx)(r.Z,(0,i.Z)((0,i.Z)({className:n,style:t},o),{},{children:c}))}},15803:function(e,n,t){t.d(n,{Sh:function(){return u},tD:function(){return d},A7:function(){return c},vf:function(){return l},MY:function(){return o}});var i=t(31303),a=[{key:"dashboards",label:"Dashboards",isTitle:!1,icon:"home",url:"/dashboard/ecommerce"},{key:"apps",label:"Apps",isTitle:!0},{key:"apps-profile",label:"Profile",isTitle:!1,icon:"user",url:"/dashboard/edit-profile"},{key:"apps-test",label:"Tests",isTitle:!1,icon:"thermometer",url:"/apps/test"},{key:"apps-culture",label:"Culture",isTitle:!1,icon:"wind",url:"/apps/culture"},{key:"apps-culture-options",label:"Culture Options",isTitle:!1,icon:"wind",url:"/apps/culture-option"},{key:"apps-invoice",label:"Invoices",isTitle:!1,icon:"file-text",url:"/apps/invoice"},{key:"apps-branches",label:"Branches",isTitle:!1,icon:"git-branch",url:"/apps/branches"}],r=[{key:"dashboards",icon:"home",label:"Dashboards",isTitle:!0,children:[{key:"ds-ecommerce",label:"Ecommerce",url:"/dashboard/ecommerce",parentKey:"dashboards"}]},{key:"apps",icon:"layers",label:"Apps",isTitle:!0},{key:"components",icon:"briefcase",label:"Components",isTitle:!0},{key:"extra-pages",label:"Pages",isTitle:!1,icon:"file-text"}],s=[{key:"dashboards",label:"Dashboards",isTitle:!0,icon:"home",children:[{key:"ds-ecommerce",label:"Ecommerce",url:"/dashboard/ecommerce",parentKey:"dashboards"}]},{key:"apps",icon:"grid",label:"Apps",isTitle:!0},{key:"extra-pages",icon:"file-text",label:"Pages",isTitle:!0},{key:"components",icon:"package",label:"Components",isTitle:!0}],l=function(){return a},c=function(){return r},o=function(){return s},u=function e(n,t){var a=[],r=d(n,t.parentKey);return r&&(a.push(r.key),r.parentKey&&(a=[].concat((0,i.Z)(a),(0,i.Z)(e(n,r))))),a},d=function e(n,t){if(n&&t)for(var i=0;i<n.length;i++){if(n[i].key===t)return n[i];var a=e(n[i].children,t);if(a)return a}return null}},64866:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var i=t(50678),a=t(72791),r=t(7238),s=t(11087),l=t(74330),c=t(15803),o=t(57806),u=t(31303),d=t(57689),A=t(17858),m=t(81694),f=t.n(m),x=t(80184),g=function e(n){var t=n.item,r=n.linkClassName,c=n.subMenuClassNames,o=n.activeMenuItems,u=n.toggleMenu,d=(0,a.useState)(o.includes(t.key)),m=(0,i.Z)(d,2),g=m[0],h=m[1];(0,a.useEffect)((function(){h(o.includes(t.key))}),[o,t]);return(0,x.jsxs)("li",{className:f()({"menuitem-active":g}),children:[(0,x.jsxs)(s.rU,{to:"#",onClick:function(e){e.preventDefault();var n=!g;return h(n),u&&u(t,n),!1},"data-menu-key":t.key,"aria-expanded":g,className:f()("side-sub-nav-link",r,{"menuitem-active":o.includes(t.key)?"active":""}),children:[t.icon&&(0,x.jsx)(l.Z,{icon:t.icon}),t.badge?(0,x.jsx)("span",{className:"badge bg-".concat(t.badge.variant," float-end"),children:t.badge.text}):(0,x.jsx)("span",{className:"menu-arrow"}),(0,x.jsxs)("span",{children:[" ",t.label," "]})]}),(0,x.jsx)(A.Z,{in:g,children:(0,x.jsx)("div",{children:(0,x.jsx)("ul",{className:f()(c),children:(t.children||[]).map((function(n,t){return(0,x.jsx)(a.Fragment,{children:n.children?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(e,{item:n,linkClassName:o.includes(n.key)?"active":"",activeMenuItems:o,subMenuClassNames:"side-nav-third-level",toggleMenu:u})}):(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(p,{item:n,className:o.includes(n.key)?"menuitem-active":"",linkClassName:o.includes(n.key)?"active":""})})},t)}))})})})]})},p=function(e){var n=e.item,t=e.className,i=e.linkClassName;return(0,x.jsx)("li",{className:f()("side-nav-item",t),children:(0,x.jsx)(h,{item:n,className:i})})},h=function(e){var n=e.item,t=e.className;return(0,x.jsxs)(s.rU,{to:n.url,target:n.target,className:f()("side-nav-link-ref",t),"data-menu-key":n.key,children:[n.icon&&(0,x.jsx)(l.Z,{icon:n.icon}),n.badge&&(0,x.jsx)("span",{className:"badge bg-".concat(n.badge.variant," float-end"),children:n.badge.text}),(0,x.jsxs)("span",{children:[" ",n.label," "]})]})},b=function(e){var n=e.menuItems,t=(0,d.TH)(),r=(0,a.useRef)(null),s=(0,a.useState)([]),l=(0,i.Z)(s,2),o=l[0],A=l[1],m=function(e,t){t&&A([e.key].concat((0,u.Z)((0,c.Sh)(n,e))))},h=(0,a.useCallback)((function(){var e=document.getElementById("side-menu"),i=null;if(e){for(var a=e.getElementsByClassName("side-nav-link-ref"),r=0;r<a.length;++r){var s,l,o;if((null===t||void 0===t||null===(s=t.pathname)||void 0===s?void 0:s.replaceAll("",""))===(null===(l=a[r])||void 0===l||null===(o=l.pathname)||void 0===o?void 0:o.replaceAll("",""))){i=a[r];break}}if(i){var d=i.getAttribute("data-menu-key"),m=(0,c.tD)(n,d);m&&A([m.key].concat((0,u.Z)((0,c.Sh)(n,m))))}}}),[t,n]);return(0,a.useEffect)((function(){h()}),[h]),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("ul",{className:"side-menu",ref:r,id:"side-menu",children:(n||[]).map((function(e,n){return(0,x.jsx)(a.Fragment,{children:e.isTitle?(0,x.jsx)("li",{className:f()("menu-title",{"mt-2":0!==n}),children:e.label}):(0,x.jsx)(x.Fragment,{children:e.children?(0,x.jsx)(g,{item:e,toggleMenu:m,subMenuClassNames:"nav-second-level",activeMenuItems:o}):(0,x.jsx)(p,{item:e,className:o.includes(e.key)?"menuitem-active":""})})},n)}))})})},v=t(59569),E=function(){var e=[{label:"My Account",icon:"user",redirectTo:"/pages/profile"},{label:"Settings",icon:"settings",redirectTo:"/"},{label:"Support",icon:"help-circle",redirectTo:"/"},{label:"Lock Screen",icon:"lock",redirectTo:"/auth/lock-screen"},{label:"Logout",icon:"log-out",redirectTo:"/auth/logout"}],n=(0,a.useState)(!1),t=(0,i.Z)(n,2),c=t[0],o=t[1],u=function(){o(!c)};return(0,x.jsxs)("div",{className:"user-box text-center",children:[(0,x.jsx)("img",{src:v,alt:"",title:"Mat Helme",className:"rounded-circle avatar-md"}),(0,x.jsxs)(r.Z,{show:c,onToggle:u,children:[(0,x.jsx)(r.Z.Toggle,{id:"dropdown-notification",as:"a",onClick:u,className:"cursor-pointer text-dark h5 mt-2 mb-1 d-block",children:"Nik Patel"}),(0,x.jsx)(r.Z.Menu,{className:"user-pro-dropdown m-0",children:(e||[]).map((function(n,t){return(0,x.jsxs)(a.Fragment,{children:[t===e.length-1&&(0,x.jsx)("div",{className:"dropdown-divider"}),(0,x.jsxs)(s.rU,{to:n.redirectTo,className:"dropdown-item notify-item",children:[(0,x.jsx)(l.Z,{icon:n.icon,className:"icon-dual icon-xs me-1"}),(0,x.jsx)("span",{children:n.label})]})]},t+"-profile-menu")}))})]}),(0,x.jsx)("p",{className:"text-muted",children:"Admin Head"})]})},j=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(E,{}),(0,x.jsx)("div",{id:"sidebar-menu",children:(0,x.jsx)(b,{menuItems:(0,c.vf)()})}),(0,x.jsx)("div",{className:"clearfix"})]})},y=function(e){var n=e.isCondensed,t=(0,a.useRef)(null),i=function(e){t&&t.current&&t.current.contains(e.target)||document.body&&document.body.classList.remove("sidebar-enable")};return(0,a.useEffect)((function(){return document.addEventListener("mousedown",i,!1),function(){document.removeEventListener("mousedown",i,!1)}}),[]),(0,x.jsx)(a.Fragment,{children:(0,x.jsxs)("div",{className:"left-side-menu",ref:t,children:[!n&&(0,x.jsx)(o.Z,{style:{maxHeight:"100%"},timeout:500,scrollbarMaxSize:320,children:(0,x.jsx)(j,{})}),n&&(0,x.jsx)(j,{})]})})};y.defaultProps={isCondensed:!1};var C=y},17858:function(e,n,t){t.d(n,{Z:function(){return y}});var i=t(18489),a=t(83738),r=t(36222),s=t(81694),l=t.n(s),c=t(75427),o=t(72791),u=t(29334),d=t(71380);var A,m=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];e.apply(this,i),n.apply(this,i)}}),null)},f=t(67202),x=t(85007),g=t(80184),p=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],h={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function b(e,n){var t=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],i=h[e];return t+parseInt((0,c.Z)(n,i[0]),10)+parseInt((0,c.Z)(n,i[1]),10)}var v=(A={},(0,r.Z)(A,u.Wj,"collapse"),(0,r.Z)(A,u.Ix,"collapsing"),(0,r.Z)(A,u.d0,"collapsing"),(0,r.Z)(A,u.cn,"collapse show"),A),E={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:b},j=o.forwardRef((function(e,n){var t=e.onEnter,r=e.onEntering,s=e.onEntered,c=e.onExit,u=e.onExiting,A=e.className,h=e.children,E=e.dimension,j=void 0===E?"height":E,y=e.getDimensionValue,C=void 0===y?b:y,I=(0,a.Z)(e,p),k="function"===typeof j?j():j,N=(0,o.useMemo)((function(){return m((function(e){e.style[k]="0"}),t)}),[k,t]),B=(0,o.useMemo)((function(){return m((function(e){var n="scroll".concat(k[0].toUpperCase()).concat(k.slice(1));e.style[k]="".concat(e[n],"px")}),r)}),[k,r]),Z=(0,o.useMemo)((function(){return m((function(e){e.style[k]=null}),s)}),[k,s]),Q=(0,o.useMemo)((function(){return m((function(e){e.style[k]="".concat(C(k,e),"px"),(0,f.Z)(e)}),c)}),[c,C,k]),H=(0,o.useMemo)((function(){return m((function(e){e.style[k]=null}),u)}),[k,u]);return(0,g.jsx)(x.Z,(0,i.Z)((0,i.Z)({ref:n,addEndListener:d.Z},I),{},{"aria-expanded":I.role?I.in:null,onEnter:N,onEntering:B,onEntered:Z,onExit:Q,onExiting:H,childRef:h.ref,children:function(e,n){return o.cloneElement(h,(0,i.Z)((0,i.Z)({},n),{},{className:l()(A,h.props.className,v[e],"width"===k&&"collapse-horizontal")}))}}))}));j.defaultProps=E;var y=j},59569:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=866.739e6b9a.chunk.js.map