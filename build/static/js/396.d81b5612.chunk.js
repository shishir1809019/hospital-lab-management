"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[396],{15803:function(e,n,t){t.d(n,{Sh:function(){return u},tD:function(){return d},A7:function(){return o},vf:function(){return l},MY:function(){return c}});var i=t(31303),a=[{key:"dashboards",label:"Dashboards",isTitle:!1,icon:"home",url:"/dashboard/ecommerce"},{key:"apps",label:"Apps",isTitle:!0},{key:"apps-profile",label:"Profile",isTitle:!1,icon:"user",url:"/dashboard/edit-profile"},{key:"apps-test",label:"Tests",isTitle:!1,icon:"thermometer",url:"/apps/test"},{key:"apps-culture",label:"Culture",isTitle:!1,icon:"wind",url:"/apps/culture"},{key:"apps-culture-options",label:"Culture Options",isTitle:!1,icon:"wind",url:"/apps/culture-option"},{key:"apps-invoice",label:"Invoices",isTitle:!1,icon:"file-text",url:"/apps/invoice"},{key:"apps-branches",label:"Branches",isTitle:!1,icon:"git-branch",url:"/apps/branches"}],r=[{key:"dashboards",icon:"home",label:"Dashboards",isTitle:!0,children:[{key:"ds-ecommerce",label:"Ecommerce",url:"/dashboard/ecommerce",parentKey:"dashboards"}]},{key:"apps",icon:"layers",label:"Apps",isTitle:!0},{key:"components",icon:"briefcase",label:"Components",isTitle:!0},{key:"extra-pages",label:"Pages",isTitle:!1,icon:"file-text"}],s=[{key:"dashboards",label:"Dashboards",isTitle:!0,icon:"home",children:[{key:"ds-ecommerce",label:"Ecommerce",url:"/dashboard/ecommerce",parentKey:"dashboards"}]},{key:"apps",icon:"grid",label:"Apps",isTitle:!0},{key:"extra-pages",icon:"file-text",label:"Pages",isTitle:!0},{key:"components",icon:"package",label:"Components",isTitle:!0}],l=function(){return a},o=function(){return r},c=function(){return s},u=function e(n,t){var a=[],r=d(n,t.parentKey);return r&&(a.push(r.key),r.parentKey&&(a=[].concat((0,i.Z)(a),(0,i.Z)(e(n,r))))),a},d=function e(n,t){if(n&&t)for(var i=0;i<n.length;i++){if(n[i].key===t)return n[i];var a=e(n[i].children,t);if(a)return a}return null}},95078:function(e,n,t){t.d(n,{S:function(){return r}});var i=t(50678),a=t(72791),r=function(){var e=(0,a.useState)(window.innerWidth),n=(0,i.Z)(e,2),t=n[0],r=n[1],s=(0,a.useState)(window.innerHeight),l=(0,i.Z)(s,2),o=l[0],c=l[1];return(0,a.useEffect)((function(){var e=function(){r(window.innerWidth),c(window.innerHeight)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:t,height:o}}},25396:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var i=t(72791),a=t(17858),r=t(81694),s=t.n(r),l=t(15803),o=t(31303),c=t(50678),u=t(11087),d=t(57689),m=t(74330),p=t(95078),f=t(80184),h=function e(n){var t=n.item,a=n.tag,r=n.linkClassName,l=n.className,o=n.subMenuClassNames,d=n.activeMenuItems,h=n.toggleMenu,v=a,y=(0,p.S)().width,b=(0,i.useState)(d.includes(t.key)),k=(0,c.Z)(b,2),x=k[0],w=k[1],N=y<=768&&x;(0,i.useEffect)((function(){w(d.includes(t.key))}),[d,t]);return(0,f.jsxs)(v,{className:s()("dropdown",l,d.includes(t.key)?"active":""),children:[(0,f.jsxs)(u.rU,{to:"/#",onClick:function(e){e.preventDefault();var n=!x;return w(n),h&&h(t,n),!1},"data-menu-key":t.key,className:s()("dropdown-toggle","arrow-none",r,{active:d.includes(t.key)}),id:t.key,role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":x,children:[t.icon&&(0,f.jsx)(m.Z,{icon:t.icon,className:"hori-icon me-1"}),(0,f.jsxs)("span",{children:[" ",t.label," "]}),(0,f.jsx)("div",{className:"arrow-down"})]}),t.children&&(0,f.jsx)("div",{className:s()(o,{show:N}),"aria-labelledby":t.key,children:(t.children||[]).map((function(n,t){return(0,f.jsx)(i.Fragment,{children:n.children?(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(e,{item:n,tag:"div",linkClassName:s()("dropdown-item",d.includes(n.key)?"active":""),activeMenuItems:d,className:"",subMenuClassNames:"dropdown-menu",toggleMenu:h})}):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(g,{item:n,className:s()("dropdown-item",{active:d.includes(n.key)})})})},t)}))})]})},v=function(e){var n=e.item,t=e.className,i=e.linkClassName;return(0,f.jsx)("li",{className:s()("nav-item",t),children:(0,f.jsx)(g,{item:n,className:i})})},g=function(e){var n=e.item,t=e.className;return(0,f.jsx)(u.rU,{to:n.url,target:n.target,className:s()(t),"data-menu-key":n.key,children:(0,f.jsxs)("span",{children:[" ",n.label," "]})})},y=function(e){var n=e.menuItems,t=(0,d.TH)(),a=(0,i.useRef)(null),r=(0,i.useState)(n),u=(0,c.Z)(r,1)[0],m=(0,i.useState)([]),p=(0,c.Z)(m,2),g=p[0],y=p[1],b=function(e,n){n&&y([e.key].concat((0,o.Z)((0,l.Sh)(u,e))))},k=(0,i.useCallback)((function(){var e=document.getElementById("main-side-menu"),n=null;if(e){for(var i=e.getElementsByTagName("a"),a=0;a<i.length;++a){var r,s,c;if((null===t||void 0===t||null===(r=t.pathname)||void 0===r?void 0:r.replaceAll("",""))===(null===(s=i[a])||void 0===s||null===(c=s.pathname)||void 0===c?void 0:c.replaceAll("",""))){n=i[a];break}}if(n){var d=n.getAttribute("data-menu-key"),m=(0,l.tD)(u,d);m&&y([m.key].concat((0,o.Z)((0,l.Sh)(u,m))))}}}),[t.pathname,u]);return(0,i.useEffect)((function(){u&&u.length>0&&k()}),[k,u]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ul",{className:"navbar-nav",ref:a,id:"main-side-menu",children:(u||[]).map((function(e,n){return(0,f.jsx)(i.Fragment,{children:e.children?(0,f.jsx)(h,{item:e,tag:"li",className:"nav-item",subMenuClassNames:"dropdown-menu",activeMenuItems:g,linkClassName:"nav-link",toggleMenu:b}):(0,f.jsx)(v,{item:e,linkClassName:s()("nav-link","dropdown-toggle",{active:g.includes(e.key)})})},n)}))})})},b=function(e){var n=e.isMenuOpened;return(0,f.jsx)("div",{className:"topnav",children:(0,f.jsx)("div",{className:"container-fluid",children:(0,f.jsx)("nav",{className:s()("navbar","navbar-expand-lg","topnav-menu","navbar-light"),children:(0,f.jsx)(a.Z,{in:n,className:"navbar-collapse",children:(0,f.jsx)("div",{id:"topnav-menu-content",children:(0,f.jsx)(y,{menuItems:(0,l.A7)()})})})})})})}},17858:function(e,n,t){t.d(n,{Z:function(){return N}});var i=t(18489),a=t(83738),r=t(36222),s=t(81694),l=t.n(s),o=t(75427),c=t(72791),u=t(29334),d=t(71380);var m,p=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];e.apply(this,i),n.apply(this,i)}}),null)},f=t(67202),h=t(85007),v=t(80184),g=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],y={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function b(e,n){var t=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],i=y[e];return t+parseInt((0,o.Z)(n,i[0]),10)+parseInt((0,o.Z)(n,i[1]),10)}var k=(m={},(0,r.Z)(m,u.Wj,"collapse"),(0,r.Z)(m,u.Ix,"collapsing"),(0,r.Z)(m,u.d0,"collapsing"),(0,r.Z)(m,u.cn,"collapse show"),m),x={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:b},w=c.forwardRef((function(e,n){var t=e.onEnter,r=e.onEntering,s=e.onEntered,o=e.onExit,u=e.onExiting,m=e.className,y=e.children,x=e.dimension,w=void 0===x?"height":x,N=e.getDimensionValue,E=void 0===N?b:N,j=(0,a.Z)(e,g),Z="function"===typeof w?w():w,T=(0,c.useMemo)((function(){return p((function(e){e.style[Z]="0"}),t)}),[Z,t]),C=(0,c.useMemo)((function(){return p((function(e){var n="scroll".concat(Z[0].toUpperCase()).concat(Z.slice(1));e.style[Z]="".concat(e[n],"px")}),r)}),[Z,r]),M=(0,c.useMemo)((function(){return p((function(e){e.style[Z]=null}),s)}),[Z,s]),A=(0,c.useMemo)((function(){return p((function(e){e.style[Z]="".concat(E(Z,e),"px"),(0,f.Z)(e)}),o)}),[o,E,Z]),I=(0,c.useMemo)((function(){return p((function(e){e.style[Z]=null}),u)}),[Z,u]);return(0,v.jsx)(h.Z,(0,i.Z)((0,i.Z)({ref:n,addEndListener:d.Z},j),{},{"aria-expanded":j.role?j.in:null,onEnter:T,onEntering:C,onEntered:M,onExit:A,onExiting:I,childRef:y.ref,children:function(e,n){return c.cloneElement(y,(0,i.Z)((0,i.Z)({},n),{},{className:l()(m,y.props.className,k[e],"width"===Z&&"collapse-horizontal")}))}}))}));w.defaultProps=x;var N=w}}]);
//# sourceMappingURL=396.d81b5612.chunk.js.map