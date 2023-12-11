"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62636],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"useDeleteMany",title:"useDeleteMany","example-title":"Ant Design useDeleteMany Hook","example-tags":["table","antd"]},s=void 0,c={unversionedId:"examples/table/antd/useDeleteMany",id:"examples/table/antd/useDeleteMany",title:"useDeleteMany",description:"The useDeleteMany is one of refine's data hooks. It removes more than one data from the database. We used the useDeleteMany hook to remove more than one record from our table in this scenario. On your table, you may remove multiple records by selecting them and pressing delete. You can get more information by examining the example.",source:"@site/docs/examples/table/antd/useDeleteMany.md",sourceDirName:"examples/table/antd",slug:"/examples/table/antd/useDeleteMany",permalink:"/docs/examples/table/antd/useDeleteMany",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/examples/table/antd/useDeleteMany.md",tags:[],version:"current",lastUpdatedBy:"Batuhan Wilhelm",lastUpdatedAt:1702284931,formattedLastUpdatedAt:"Dec 11, 2023",frontMatter:{id:"useDeleteMany",title:"useDeleteMany","example-title":"Ant Design useDeleteMany Hook","example-tags":["table","antd"]},sidebar:"mainSidebar",previous:{title:"Table Filter",permalink:"/docs/examples/table/antd/tableFilter"},next:{title:"useEditableTable",permalink:"/docs/examples/table/antd/useEditableTable"}},p={},u=[],m=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const f={toc:u};function y(e){var{components:t}=e,n=l(e,["components"]);return(0,r.kt)("wrapper",a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"useDeleteMany")," is one of ",(0,r.kt)("strong",{parentName:"p"},"refine"),"'s data hooks. It removes more than one data from the database. We used the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDeleteMany")," hook to remove more than one record from our table in this scenario. On your table, you may remove multiple records by selecting them and pressing delete. You can get more information by examining the example."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/core/hooks/data/use-delete"},"Refer to the ",(0,r.kt)("strong",{parentName:"a"},"refine")," useDeleteMany data hook documentation for more information. \u2192")),(0,r.kt)(m,{path:"table-antd-use-delete-many",mdxType:"CodeSandboxExample"}))}y.isMDXComponent=!0}}]);