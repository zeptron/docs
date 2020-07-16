(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(132)),i={id:"doc4",title:"Use Zeptron live streamer"},c={id:"doc4",isDocsHomePage:!1,title:"Use Zeptron live streamer",description:"Usage for Mac, PC & Linux",source:"@site/docs/doc4.md",permalink:"/docs/doc4",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc4.md",sidebar:"someSidebar",previous:{title:"Install Zeptron live streamer",permalink:"/docs/doc3"}},l=[{value:"Usage for Mac, PC &amp; Linux",id:"usage-for-mac-pc--linux",children:[]},{value:"Usage for Raspberry Pi",id:"usage-for-raspberry-pi",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"usage-for-mac-pc--linux"},"Usage for Mac, PC & Linux"),Object(a.b)("p",null,"After installing Zeptron, use it to start and stop video streams from your terminal like this: "),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"zeptron -i IP_ADDRESS -p PORT")),Object(a.b)("p",null,"This starts the stream and points it to your model. "),Object(a.b)("p",null,"Your model must be running. "),Object(a.b)("p",null,"The IP address and port for your model are displayed on your instance dashboard. "),Object(a.b)("p",null,"Access your active instances in Studio"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"usage-for-raspberry-pi"},"Usage for Raspberry Pi"),Object(a.b)("p",null,"We recommend the Raspberry Pi with a PiCamera to run the streamer from. We have found them to be a reliable and cost effecitve option with remarkable quality. "),Object(a.b)("p",null,"You can buy one with a tough case that already has Zeptron and Dataplicity installed through our store. "),Object(a.b)("p",null,"Dataplicity allows you to get into your Pi from anywhere in the world and start the streamer. For details on how to get started with Dataplicity, refer to their documentation here. "),Object(a.b)("p",null,"To start Zeptron on a Raspberry Pi, simply run "),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"pip install zeptron")),Object(a.b)("p",null,"from the terminal to install it"),Object(a.b)("p",null,"then "),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"zeptron -i IP_ADDRESS -p PORT -raspberry")," "),Object(a.b)("p",null,"to start the stream"))}u.isMDXComponent=!0},132:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||a;return r?o.a.createElement(f,c(c({ref:t},p),{},{components:r})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);