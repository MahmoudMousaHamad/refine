"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45905],{33556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>u,metadata:()=>c,toc:()=>m});r(67294);var n=r(3905),o=r(53787),a=r(50551);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const u={id:"create-project",title:"3. Creating your Refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}},s=void 0,c={unversionedId:"tutorial/getting-started/mui/create-project",id:"tutorial/getting-started/mui/create-project",title:"3. Creating your Refine project",description:"Launch the Refine CLI setup",source:"@site/docs/tutorial/1-getting-started/mui/2-create-project.md",sourceDirName:"tutorial/1-getting-started/mui",slug:"/tutorial/getting-started/mui/create-project",permalink:"/docs/tutorial/getting-started/mui/create-project",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/1-getting-started/mui/2-create-project.md",tags:[],version:"current",lastUpdatedBy:"Jim Smart",lastUpdatedAt:1704206572,formattedLastUpdatedAt:"Jan 2, 2024",sidebarPosition:2,frontMatter:{id:"create-project",title:"3. Creating your Refine project",tutorial:{prev:"tutorial/getting-started/{preferredUI}/prepare-env",next:"tutorial/getting-started/{preferredUI}/generate-crud-pages"}}},d={},m=[{value:"Launch the Refine CLI setup",id:"launch-the-refine-cli-setup",level:2},{value:"Open your project in VS Code",id:"open-your-project-in-vs-code",level:3},{value:"Running the dev server",id:"running-the-dev-server",level:3},{value:"Viewing a preview of your app",id:"viewing-a-preview-of-your-app",level:3}],h=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},f=h("CreateRefineAppCommand"),g=h("Checklist"),v=h("ChecklistItem"),y={toc:m};function k(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",l(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"launch-the-refine-cli-setup"},"Launch the Refine CLI setup"),(0,n.kt)("p",null,"The easiest way to create a new project is using the ",(0,n.kt)("strong",{parentName:"p"},"Refine CLI"),". This tool will help you get started quickly by generating a new project with a basic configuration and a folder structure that follows best practices."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Launch your terminal and type the following command using your preferred package manager:")),(0,n.kt)(f,{args:"-o refine-mui tutorial",mdxType:"CreateRefineAppCommand"}),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirm ",(0,n.kt)("inlineCode",{parentName:"p"},"y")," to installation of ",(0,n.kt)("inlineCode",{parentName:"p"},"create-refine-app"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"-o refine-mui")," flag in the command above tells the CLI to install the project with the ",(0,n.kt)("inlineCode",{parentName:"p"},"refine-mui")," preset. This preset selects some of the options for you in accordance with this tutorial. Outside of this tutorial, you can skip this flag and select your own options.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The CLI will then ask if you agree to share your selection anonymously with the Refine team. This is for measuring community preferences. You can learn more about it here: ",(0,n.kt)("a",{parentName:"p",href:"/docs/further-readings/telemetry/"},"Telemetry"),"."))),(0,n.kt)("p",null,"Once the installation wizard is finished, you can close this terminal window and open VS Code to continue your journey."),(0,n.kt)("h3",{id:"open-your-project-in-vs-code"},"Open your project in VS Code"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open VS Code and select the directory that was generated during your setup process.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure the terminal is open and ready to run commands. You can open it by pressing ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl + J"),"(Windows) or ",(0,n.kt)("inlineCode",{parentName:"p"},"Cmd \u2318 + J"),"(macOS)."))),(0,n.kt)("p",null,"For the rest of this tutorial, you can use the terminal within VS Code instead of your computer's terminal."),(0,n.kt)("h3",{id:"running-the-dev-server"},"Running the dev server"),(0,n.kt)("p",null,"Previewing your project while you work on it is important. To open it as a webpage, the project must be running in development(dev) mode."),(0,n.kt)("h4",null,"Start the dev server"),(0,n.kt)("p",null,"To start the dev server, run the following command in your terminal:"),(0,n.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.kt)(a.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n"))),(0,n.kt)(a.Z,{value:"pnpm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run dev\n"))),(0,n.kt)(a.Z,{value:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run dev\n")))),(0,n.kt)("p",null,"You should see confirmation in the terminal that the Refine app is running in dev mode."),(0,n.kt)("h3",{id:"viewing-a-preview-of-your-app"},"Viewing a preview of your app"),(0,n.kt)("p",null,"Your project files contain all the code you need to run your app. To see a preview of your app in the browser:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on the ",(0,n.kt)("a",{href:"http://localhost:3000",rel:"noopener noreferrer nofollow"},"localhost:3000")," link in the terminal. This will open a new browser tab with your app running in dev mode.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will be redirected to the welcome page as we have not added any pages yet. We will take care of that in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/mui/generate-crud-pages"},"Next section")))),(0,n.kt)("p",null,"Here's what you should see:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=450px url=http://localhost:3000",live:!0,previewOnly:!0,previewHeight:"450px",url:"http://localhost:3000"},'setInitialRoutes(["/"]);\n\nimport { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";\nimport { Refine } from "@refinedev/core";\nimport { LightTheme, notificationProvider, RefineSnackbarProvider, WelcomePage } from "@refinedev/mui";\nimport routerBindings from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Routes, Route } from "react-router-dom";\n\nconst App: React.FC = () => {\n  return (\n    <ThemeProvider theme={LightTheme}>\n      <CssBaseline />\n      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />\n      <RefineSnackbarProvider>\n        <BrowserRouter>\n          <Refine\n            routerProvider={routerBindings}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            notificationProvider={notificationProvider}\n          >\n            <Routes>\n              <Route index element={<WelcomePage />} />\n            </Routes>\n          </Refine>\n        </BrowserRouter>\n      </RefineSnackbarProvider>\n    </ThemeProvider>\n  );\n};\n\nrender(<App />);\n')),(0,n.kt)(g,{mdxType:"Checklist"},(0,n.kt)(v,{id:"getting-started-mui",mdxType:"ChecklistItem"},"I understood how to create a new project."),(0,n.kt)(v,{id:"getting-started-mui-2",mdxType:"ChecklistItem"},"I have run the dev server and previewed my app.")))}k.isMDXComponent=!0}}]);