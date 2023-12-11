"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23888],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(o),h=n,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||r;return o?a.createElement(d,i(i({ref:t},c),{},{components:o})):a.createElement(d,i({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},513:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});o(67294);var a=o(3905);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const l={title:"Redirect in React Router V6 with useNavigate hook",description:"We'll discover how to perform a redirect using useNavigate in React Router V6",slug:"usenavigate-react-router-redirect",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-19-router-use-navigate/social.jpg",hide_table_of_contents:!1},s=void 0,u={permalink:"/blog/usenavigate-react-router-redirect",source:"@site/blog/2022-09-19-router-use-navigate.md",title:"Redirect in React Router V6 with useNavigate hook",description:"We'll discover how to perform a redirect using useNavigate in React Router V6",date:"2022-09-19T00:00:00.000Z",formattedDate:"September 19, 2022",tags:[{label:"react",permalink:"/blog/tags/react"}],readingTime:5.22,hasTruncateMarker:!1,authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],frontMatter:{title:"Redirect in React Router V6 with useNavigate hook",description:"We'll discover how to perform a redirect using useNavigate in React Router V6",slug:"usenavigate-react-router-redirect",authors:"joseph_mawa",tags:["react"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-09-19-router-use-navigate/social.jpg",hide_table_of_contents:!1},prevItem:{title:"Memoization in React - How useCallback Works",permalink:"/blog/react-usecallback-guide"},nextItem:{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid"},relatedPosts:[{title:"Creating responsive tooltips in React with react-tooltip",description:"We'll explore how to create a custom tooltip component in a React application, as well as integrating the react-tooltip library.",permalink:"/blog/react-tooltip",formattedDate:"May 23, 2023",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:13.47,date:"2023-05-23T00:00:00.000Z"},{title:"Swiper.js Tutorial - A Powerful Touch Slider Library",description:"We'll take a dive into the Swiper.js library, a powerful JavaScript library that lets you quickly add touch-enabled and responsive sliders to your website or web application.",permalink:"/blog/swiper-js",formattedDate:"December 7, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:13.605,date:"2023-12-07T00:00:00.000Z"},{title:"React Slick Examples - Creating a carousel",description:"We'll see how to use React Slick in your React projects through a step-by-step guide and hands-on demo.",permalink:"/blog/react-slick",formattedDate:"October 29, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:18.165,date:"2023-10-29T00:00:00.000Z"}],authorPosts:[{title:"Building React admin panel with NextUI and refine",description:"We will see how  to build a React admin panel using refine and NextUI components library",permalink:"/blog/next-ui-react-admin-panel",formattedDate:"September 20, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:41.88,date:"2023-09-20T00:00:00.000Z"},{title:"A complete guide to the React createPortal API",description:"We'll explore the React createPortal API, its advantages, disadvantages, and possible use cases.",permalink:"/blog/react-createportal",formattedDate:"October 12, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:6.175,date:"2023-10-12T00:00:00.000Z"},{title:"How to create a notification provider with react-toastify",description:"We'll create a custom notification provider in a refine application using react-toastify.",permalink:"/blog/react-toastify",formattedDate:"June 1, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:12.935,date:"2023-06-01T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"How to set up React Router V6",id:"how-to-set-up-react-router-v6",level:2},{value:"Install React router",id:"install-react-router",level:3},{value:"Configure React router",id:"configure-react-router",level:3},{value:"Configure routes",id:"configure-routes",level:3},{value:"How to use the <code>useNavigate</code> hook",id:"how-to-use-the-usenavigate-hook",level:2},{value:"Path with optional second argument",id:"path-with-optional-second-argument",level:3},{value:"Modifying the history stack",id:"modifying-the-history-stack",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:p};function h(e){var{components:t}=e,o=i(e,["components"]);return(0,a.kt)("wrapper",r(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},a=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),a.forEach((function(t){n(e,t,o[t])}))}return e}({},m,o),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"React Router is a popular routing library for React. The latest version, React router version 6, shipped with several new features and improved compatibility with the latest version of React. Since hooks have become the preferred way of writing React code, React Router version 6 also heavily uses React hooks."),(0,a.kt)("p",null,"One such hook is the ",(0,a.kt)("inlineCode",{parentName:"p"},"useNavigate")," hook. The ",(0,a.kt)("inlineCode",{parentName:"p"},"useNavigate")," hook lets you navigate programmatically within your React code. In this article, you will learn the ",(0,a.kt)("inlineCode",{parentName:"p"},"useNavigate")," hook and how to use it. We will also hint at when you might choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"useNavigate")," hook over the ",(0,a.kt)("inlineCode",{parentName:"p"},"Navigate")," component."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-set-up-react-router-v6"},"How to set up React Router V6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-use-the-usenavigate-hook"},"How to use the useNavigate hook"))),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To run the examples in this article, be sure to have some or all of the following."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Node runtime environment. Install Node for your operating system from the ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node downloads page"),"."),(0,a.kt)("li",{parentName:"ul"},"A working React project. Quickly create a React project using ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/pankod/superplate"},"superplate"),".")),(0,a.kt)("h2",{id:"how-to-set-up-react-router-v6"},"How to set up React Router V6"),(0,a.kt)("p",null,"If you have set up a React project, follow the steps below to start using React router. We will use React router version 6 throughout this article. This article assumes you are running React in the browser."),(0,a.kt)("h3",{id:"install-react-router"},"Install React router"),(0,a.kt)("p",null,"Install React router from the NPM package registry before using it. You can install it like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Using NPM\n npm install react-router-dom@6\n\n# Using Yarn\nyarn add react-router-dom@6\n\n# Using pnpm\npnpm add react-router-dom@6\n")),(0,a.kt)("h3",{id:"configure-react-router"},"Configure React router"),(0,a.kt)("p",null,"Configure your app to start using React Router by importing the router and wrapping your root component in it. Since our goal is to run React router in the browser, we will use the top-level Component ",(0,a.kt)("inlineCode",{parentName:"p"},"BrowserRouter"),". It is the recommended interface for running React router in the browser. Several other routers, like ",(0,a.kt)("inlineCode",{parentName:"p"},"NativeRouter")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"StaticRouter"),", have their use cases. Check the React router documentation to learn more about the other routers and their use cases."),(0,a.kt)("p",null,"According to the ",(0,a.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main"},"documentation"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," uses the HTML 5 history API internally to keep your application's UI in sync with the URL. The code below shows how to wrap the root component in ",(0,a.kt)("inlineCode",{parentName:"p"},"BrowserRouter")," when working with React version 18."),(0,a.kt)("p",null,"You can copy and paste the code below into the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport { BrowserRouter as Router } from "react-router-dom";\nimport App from "./App";\n\nconst root = ReactDOM.createRoot(document.getElementById("root"));\n\nroot.render(\n  <React.StrictMode>\n    <Router>\n      <App />\n    </Router>\n  </React.StrictMode>\n);\n')),(0,a.kt)("h3",{id:"configure-routes"},"Configure routes"),(0,a.kt)("p",null,"After installing and connecting your application like in the previous steps, configure the routes to start using React router. Since we are using React router version 6, we will import the ",(0,a.kt)("inlineCode",{parentName:"p"},"Routes")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Route")," components.",(0,a.kt)("br",{parentName:"p"}),"\n","After that, you can set up the routes like in the example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Route, Routes } from "react-router-dom";\nimport { Home, Blog } from "./components"\n\nfunction App() {\n  return (\n    <div className="App">\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/blog" element={<Blog />} />\n      </Routes>\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"That is just about everything you need to do to start using React router version 6."),(0,a.kt)("h2",{id:"how-to-use-the-usenavigate-hook"},"How to use the ",(0,a.kt)("inlineCode",{parentName:"h2"},"useNavigate")," hook"),(0,a.kt)("p",null,"As mentioned above, the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"useNavigate"))," hook became part of React router in version 6. It is useful when navigating programmatically in your React project. The ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"useNavigate"))," hook returns an imperative method that you can use for changing location."),(0,a.kt)("p",null,"You can use the function returned by the ",(0,a.kt)("inlineCode",{parentName:"p"},"useNavigate")," hook in two ways."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pass the path you want to navigate as the first argument and an optional object as the second argument."),(0,a.kt)("li",{parentName:"ul"},"Pass the delta in the history stack to which you want to navigate as the only argument.")),(0,a.kt)("h3",{id:"path-with-optional-second-argument"},"Path with optional second argument"),(0,a.kt)("p",null,"If you choose to pass the path you want to navigate and the second optional argument, then you can do it like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigate } from "react-router-dom";\n\nconst navigate = useNavigate();\n\nconst submitHandler = async (event) => {\n  event.preventDefault();\n\n  try {\n    await submitForm();\n    navigate("/success"); // Omit optional second argument\n  } catch (error) {\n    navigate("/error", { state: { message: "Failed to submit form" } }); // Pass optional second argument\n  }\n};\n')),(0,a.kt)("p",null,"In the example above, we navigate inside an event handler after submitting a form. Where we navigate depends on whether the form submission was successful or not."),(0,a.kt)("p",null,"The optional second argument looks like the object below. You can pass data as the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," property. If you set the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", React router will replace the current entry in the history stack instead of adding a new one. Both ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," fields are optional."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n  state: { message: "Failed to submit form" },\n  replace: false,\n}\n')),(0,a.kt)("p",null,"After navigation, the data you passed using ",(0,a.kt)("inlineCode",{parentName:"p"},"navigate")," is accessible inside the matching route's rendered component using the ",(0,a.kt)("inlineCode",{parentName:"p"},"useLocation")," hook."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const location = useLocation();\nconsole.log(location.state) \n// { message: 'Failed to submit form' }\n")),(0,a.kt)("h3",{id:"modifying-the-history-stack"},"Modifying the history stack"),(0,a.kt)("p",null,"If you choose to modify the history stack, you need to pass the delta in the history stack to which you want to go. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"navigate(-1)")," is equivalent to clicking the browser's back button."),(0,a.kt)("p",null,"Be aware that ",(0,a.kt)("inlineCode",{parentName:"p"},"useNavigate")," is a hook. Therefore you cannot directly use it with ES6 classes. Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Navigate")," component instead. The ",(0,a.kt)("inlineCode",{parentName:"p"},"Navigate")," component uses ",(0,a.kt)("inlineCode",{parentName:"p"},"useNavigate")," internally, and the two are functionally similar."),(0,a.kt)("p",null,"Similarly, while using the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"useNavigate"))," hook, you should remember the rules of React hooks. Do not invoke React hooks inside loops, conditions, or nested functions. Invoke them at the top level."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useNavigate")," hook shipped with React Router version 6. It comes in handy if you want an imperative API for navigation and returns a function you can invoke in two ways. When invoking the function returned, you either pass the path you want to navigate to as the first argument and an optional object as the second argument or the delta you want to navigate in the history stack."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"useNavigate"))," hook is functionally similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Navigate")," component. Since you can't directly use hooks with ES6 classes, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Navigate")," component comes in handy when working with class-based components."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord-banner.png",alt:"discord banner"}))))}h.isMDXComponent=!0}}]);