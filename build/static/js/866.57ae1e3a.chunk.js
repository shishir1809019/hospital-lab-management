"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[866],{57806:function(e,n,t){var i=t(18489),r=t(83738),a=(t(72791),t(34358)),s=t(80184),l=["className","style","children"];n.Z=function(e){var n=e.className,t=e.style,c=e.children,o=(0,r.Z)(e,l);return(0,s.jsx)(a.Z,(0,i.Z)((0,i.Z)({className:n,style:t},o),{},{children:c}))}},15803:function(e,n,t){t.d(n,{Sh:function(){return u},tD:function(){return d},A7:function(){return c},vf:function(){return l},MY:function(){return o}});var i=t(31303),r=[{key:"dashboards",label:"Dashboards",isTitle:!1,icon:"home",url:"/dashboard/ecommerce"},{key:"apps",label:"Apps",isTitle:!0},{key:"apps-profile",label:"Profile",isTitle:!1,icon:"user",url:"/dashboard/edit-profile"},{key:"apps-test",label:"Tests",isTitle:!1,icon:"thermometer",url:"/apps/test"},{key:"apps-culture",label:"Culture",isTitle:!1,icon:"wind",url:"/apps/culture"},{key:"apps-culture-options",label:"Culture Options",isTitle:!1,icon:"wind",url:"/apps/culture-option"},{key:"apps-invoice",label:"Invoices",isTitle:!1,icon:"file-text",url:"/apps/invoice"},{key:"apps-branches",label:"Branches",isTitle:!1,icon:"git-branch",url:"/apps/branches"},{key:"apps-antiiotics",label:"Antibiotics",isTitle:!1,icon:"award",url:"/apps/antibiotics"},{key:"price-list",label:"Price List",isTitle:!1,icon:"bar-chart-2",children:[{key:"ds-test",label:"Test",url:"/price-list/test",parentKey:"price-list"},{key:"ds-culture",label:"Culture",url:"/price-list/culture",parentKey:"price-list"}]}],a=[{key:"dashboards",icon:"home",label:"Dashboards",isTitle:!0,children:[{key:"ds-ecommerce",label:"Ecommerce",url:"/dashboard/ecommerce",parentKey:"dashboards"}]},{key:"apps",icon:"layers",label:"Apps",isTitle:!0},{key:"components",icon:"briefcase",label:"Components",isTitle:!0},{key:"extra-pages",label:"Pages",isTitle:!1,icon:"file-text"},{key:"price-list",label:"Price List",isTitle:!1,icon:"bar-chart-2",children:[{key:"ds-test",label:"Test",url:"/price-list/test",parentKey:"price-list"},{key:"ds-culture",label:"Culture",url:"/price-list/culture",parentKey:"price-list"}]}],s=[{key:"dashboards",label:"Dashboards",isTitle:!0,icon:"home",children:[{key:"ds-ecommerce",label:"Ecommerce",url:"/dashboard/ecommerce",parentKey:"dashboards"}]},{key:"apps",icon:"grid",label:"Apps",isTitle:!0},{key:"extra-pages",icon:"file-text",label:"Pages",isTitle:!0},{key:"components",icon:"package",label:"Components",isTitle:!0},{key:"price-list",label:"Price List",isTitle:!1,icon:"bar-chart-2",children:[{key:"ds-test",label:"Test",url:"/price-list/test",parentKey:"price-list"},{key:"ds-culture",label:"Culture",url:"/price-list/culture",parentKey:"price-list"}]}],l=function(){return r},c=function(){return a},o=function(){return s},u=function e(n,t){var r=[],a=d(n,t.parentKey);return a&&(r.push(a.key),a.parentKey&&(r=[].concat((0,i.Z)(r),(0,i.Z)(e(n,a))))),r},d=function e(n,t){if(n&&t)for(var i=0;i<n.length;i++){if(n[i].key===t)return n[i];var r=e(n[i].children,t);if(r)return r}return null}},64866:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var i=t(50678),r=t(72791),a=t(27669),s=t(11087),l=t(74330),c=t(15803),o=t(57806),u=t(31303),d=t(57689),A=t(17858),m=t(81694),p=t.n(m),f=t(80184),x=function e(n){var t=n.item,a=n.linkClassName,c=n.subMenuClassNames,o=n.activeMenuItems,u=n.toggleMenu,d=(0,r.useState)(o.includes(t.key)),m=(0,i.Z)(d,2),x=m[0],h=m[1];(0,r.useEffect)((function(){h(o.includes(t.key))}),[o,t]);return(0,f.jsxs)("li",{className:p()({"menuitem-active":x}),children:[(0,f.jsxs)(s.rU,{to:"#",onClick:function(e){e.preventDefault();var n=!x;return h(n),u&&u(t,n),!1},"data-menu-key":t.key,"aria-expanded":x,className:p()("side-sub-nav-link",a,{"menuitem-active":o.includes(t.key)?"active":""}),children:[t.icon&&(0,f.jsx)(l.Z,{icon:t.icon}),t.badge?(0,f.jsx)("span",{className:"badge bg-".concat(t.badge.variant," float-end"),children:t.badge.text}):(0,f.jsx)("span",{className:"menu-arrow"}),(0,f.jsxs)("span",{children:[" ",t.label," "]})]}),(0,f.jsx)(A.Z,{in:x,children:(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:p()(c),children:(t.children||[]).map((function(n,t){return(0,f.jsx)(r.Fragment,{children:n.children?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(e,{item:n,linkClassName:o.includes(n.key)?"active":"",activeMenuItems:o,subMenuClassNames:"side-nav-third-level",toggleMenu:u})}):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(g,{item:n,className:o.includes(n.key)?"menuitem-active":"",linkClassName:o.includes(n.key)?"active":""})})},t)}))})})})]})},g=function(e){var n=e.item,t=e.className,i=e.linkClassName;return(0,f.jsx)("li",{className:p()("side-nav-item",t),children:(0,f.jsx)(h,{item:n,className:i})})},h=function(e){var n=e.item,t=e.className;return(0,f.jsxs)(s.rU,{to:n.url,target:n.target,className:p()("side-nav-link-ref",t),"data-menu-key":n.key,children:[n.icon&&(0,f.jsx)(l.Z,{icon:n.icon}),n.badge&&(0,f.jsx)("span",{className:"badge bg-".concat(n.badge.variant," float-end"),children:n.badge.text}),(0,f.jsxs)("span",{children:[" ",n.label," "]})]})},b=function(e){var n=e.menuItems,t=(0,d.TH)(),a=(0,r.useRef)(null),s=(0,r.useState)([]),l=(0,i.Z)(s,2),o=l[0],A=l[1],m=function(e,t){t&&A([e.key].concat((0,u.Z)((0,c.Sh)(n,e))))},h=(0,r.useCallback)((function(){var e=document.getElementById("side-menu"),i=null;if(e){for(var r=e.getElementsByClassName("side-nav-link-ref"),a=0;a<r.length;++a){var s,l,o;if((null===t||void 0===t||null===(s=t.pathname)||void 0===s?void 0:s.replaceAll("",""))===(null===(l=r[a])||void 0===l||null===(o=l.pathname)||void 0===o?void 0:o.replaceAll("",""))){i=r[a];break}}if(i){var d=i.getAttribute("data-menu-key"),m=(0,c.tD)(n,d);m&&A([m.key].concat((0,u.Z)((0,c.Sh)(n,m))))}}}),[t,n]);return(0,r.useEffect)((function(){h()}),[h]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:"side-menu",ref:a,id:"side-menu",children:(n||[]).map((function(e,n){return(0,f.jsx)(r.Fragment,{children:e.isTitle?(0,f.jsx)("li",{className:p()("menu-title",{"mt-2":0!==n}),children:e.label}):(0,f.jsx)(f.Fragment,{children:e.children?(0,f.jsx)(x,{item:e,toggleMenu:m,subMenuClassNames:"nav-second-level",activeMenuItems:o}):(0,f.jsx)(g,{item:e,className:o.includes(e.key)?"menuitem-active":""})})},n)}))})})},v=t(59569),y=function(){var e=[{label:"My Account",icon:"user",redirectTo:"/pages/profile"},{label:"Settings",icon:"settings",redirectTo:"/"},{label:"Support",icon:"help-circle",redirectTo:"/"},{label:"Lock Screen",icon:"lock",redirectTo:"/auth/lock-screen"},{label:"Logout",icon:"log-out",redirectTo:"/auth/logout"}],n=(0,r.useState)(!1),t=(0,i.Z)(n,2),c=t[0],o=t[1],u=function(){o(!c)};return(0,f.jsxs)("div",{className:"user-box text-center",children:[(0,f.jsx)("img",{src:v,alt:"",title:"Mat Helme",className:"rounded-circle avatar-md"}),(0,f.jsxs)(a.Z,{show:c,onToggle:u,children:[(0,f.jsx)(a.Z.Toggle,{id:"dropdown-notification",as:"a",onClick:u,className:"cursor-pointer text-dark h5 mt-2 mb-1 d-block",children:"Nik Patel"}),(0,f.jsx)(a.Z.Menu,{className:"user-pro-dropdown m-0",children:(e||[]).map((function(n,t){return(0,f.jsxs)(r.Fragment,{children:[t===e.length-1&&(0,f.jsx)("div",{className:"dropdown-divider"}),(0,f.jsxs)(s.rU,{to:n.redirectTo,className:"dropdown-item notify-item",children:[(0,f.jsx)(l.Z,{icon:n.icon,className:"icon-dual icon-xs me-1"}),(0,f.jsx)("span",{children:n.label})]})]},t+"-profile-menu")}))})]}),(0,f.jsx)("p",{className:"text-muted",children:"Admin Head"})]})},E=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(y,{}),(0,f.jsx)("div",{id:"sidebar-menu",children:(0,f.jsx)(b,{menuItems:(0,c.vf)()})}),(0,f.jsx)("div",{className:"clearfix"})]})},C=function(e){var n=e.isCondensed,t=(0,r.useRef)(null),i=function(e){t&&t.current&&t.current.contains(e.target)||document.body&&document.body.classList.remove("sidebar-enable")};return(0,r.useEffect)((function(){return document.addEventListener("mousedown",i,!1),function(){document.removeEventListener("mousedown",i,!1)}}),[]),(0,f.jsx)(r.Fragment,{children:(0,f.jsxs)("div",{className:"left-side-menu",ref:t,children:[!n&&(0,f.jsx)(o.Z,{style:{maxHeight:"100%"},timeout:500,scrollbarMaxSize:320,children:(0,f.jsx)(E,{})}),n&&(0,f.jsx)(E,{})]})})};C.defaultProps={isCondensed:!1};var j=C},17858:function(e,n,t){t.d(n,{Z:function(){return C}});var i=t(18489),r=t(83738),a=t(36222),s=t(81694),l=t.n(s),c=t(75427),o=t(72791),u=t(29334),d=t(933);var A,m=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];e.apply(this,i),n.apply(this,i)}}),null)},p=t(67202),f=t(14083),x=t(80184),g=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],h={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function b(e,n){var t=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],i=h[e];return t+parseInt((0,c.Z)(n,i[0]),10)+parseInt((0,c.Z)(n,i[1]),10)}var v=(A={},(0,a.Z)(A,u.Wj,"collapse"),(0,a.Z)(A,u.Ix,"collapsing"),(0,a.Z)(A,u.d0,"collapsing"),(0,a.Z)(A,u.cn,"collapse show"),A),y={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:b},E=o.forwardRef((function(e,n){var t=e.onEnter,a=e.onEntering,s=e.onEntered,c=e.onExit,u=e.onExiting,A=e.className,h=e.children,y=e.dimension,E=void 0===y?"height":y,C=e.getDimensionValue,j=void 0===C?b:C,k=(0,r.Z)(e,g),I="function"===typeof E?E():E,N=(0,o.useMemo)((function(){return m((function(e){e.style[I]="0"}),t)}),[I,t]),B=(0,o.useMemo)((function(){return m((function(e){var n="scroll".concat(I[0].toUpperCase()).concat(I.slice(1));e.style[I]="".concat(e[n],"px")}),a)}),[I,a]),Z=(0,o.useMemo)((function(){return m((function(e){e.style[I]=null}),s)}),[I,s]),Q=(0,o.useMemo)((function(){return m((function(e){e.style[I]="".concat(j(I,e),"px"),(0,p.Z)(e)}),c)}),[c,j,I]),T=(0,o.useMemo)((function(){return m((function(e){e.style[I]=null}),u)}),[I,u]);return(0,x.jsx)(f.Z,(0,i.Z)((0,i.Z)({ref:n,addEndListener:d.Z},k),{},{"aria-expanded":k.role?k.in:null,onEnter:N,onEntering:B,onEntered:Z,onExit:Q,onExiting:T,childRef:h.ref,children:function(e,n){return o.cloneElement(h,(0,i.Z)((0,i.Z)({},n),{},{className:l()(A,h.props.className,v[e],"width"===I&&"collapse-horizontal")}))}}))}));E.defaultProps=y;var C=E},59569:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=866.57ae1e3a.chunk.js.map