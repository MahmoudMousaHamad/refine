"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41438],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},36553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>m});r(67294);var a=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",slug:"how-to-multipart-file-upload-with-react-hook-form",authors:"melih",tags:["refine","react","react-hook-form","javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-03-29-react-hook-form-upload/social.jpg",hide_table_of_contents:!1},s=void 0,p={permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",source:"@site/blog/2022-03-29-react-hook-form-upload.md",title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",date:"2022-03-29T00:00:00.000Z",formattedDate:"March 29, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"react",permalink:"/blog/tags/react"},{label:"react-hook-form",permalink:"/blog/tags/react-hook-form"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:7.05,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"How to Multipart File Upload Using FormData with React Hook Form",description:"In this guide, I'm going to show you how to multipart files upload with using React Hook Form",slug:"how-to-multipart-file-upload-with-react-hook-form",authors:"melih",tags:["refine","react","react-hook-form","javascript"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-03-29-react-hook-form-upload/social.jpg",hide_table_of_contents:!1},prevItem:{title:"Top React Component Libraries and Frameworks Every Developer Should Know",permalink:"/blog/top-react-component-libraries-and-frameworks-every-developer-should-know"},nextItem:{title:"We are going back to 1995! The perfect harmony of Modern stack and Win95",permalink:"/blog/awesome-react-windows95-ui-with-refine"},relatedPosts:[{title:"Swiper.js Tutorial - A Powerful Touch Slider Library",description:"We'll take a dive into the Swiper.js library, a powerful JavaScript library that lets you quickly add touch-enabled and responsive sliders to your website or web application.",permalink:"/blog/swiper-js",formattedDate:"December 7, 2023",authors:[{name:"Peter Osah",title:"Web Developer",imageURL:"/img/generic-profile.png",key:"peter_osah"}],readingTime:13.605,date:"2023-12-07T00:00:00.000Z"},{title:"How to become a modern Node.js developer?",description:"The most essential skills to have as a modern Node.js developer",permalink:"/blog/node-js-developer-skills",formattedDate:"September 6, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:8.74,date:"2022-09-06T00:00:00.000Z"},{title:"Material UI Grid System in React",description:"We'll discover the Material UI Grid system with React examples",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.01,date:"2022-09-18T00:00:00.000Z"}],authorPosts:[{title:"How to Multipart File Upload Using FormData with HTML",description:"In this guide, I'm going to show you how to multipart files upload with using HTML and JavaScript",permalink:"/blog/how-to-multipart-upload",formattedDate:"December 27, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:2.515,date:"2021-12-27T00:00:00.000Z"},{title:"refine vs React-Admin Which is Better for Your Project?",description:"We will compare the features of refine and react-admin",permalink:"/blog/refine-vs-react-admin",formattedDate:"November 26, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.43,date:"2021-11-26T00:00:00.000Z"},{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",description:"Looking for an invoice generator? Try out Refine. With our custom interface, you can build your own invoice in minutes! Learn more here.",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.195,date:"2022-02-22T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"Create Express Server",id:"create-express-server",level:2},{value:"Create React Project",id:"create-react-project",level:2},{value:"Multipart File Upload with React Hook Form",id:"multipart-file-upload-with-react-hook-form",level:2},{value:"Are You Looking React Web Framework?",id:"are-you-looking-react-web-framework",level:2},{value:"How to Multipart File Upload with Refine and React Hook Form?",id:"how-to-multipart-file-upload-with-refine-and-react-hook-form",level:2},{value:"Example",id:"example",level:2}],u=(d="CodeSandboxExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const h={toc:m};function f(e){var{components:t}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",n(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){o(e,t,r[t])}))}return e}({},h,r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-03-29-react-hook-form-upload/overview.gif",alt:"Refine Example Overview"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"In this example, we will learn how to upload files with ",(0,a.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},"React Hook Form"),", which is very preferred for managing forms with React. We will use ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData"},"FormData")," to upload a file and we will upload a file of type multipart/form-data."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"We will examine step by step how to use the Multipart file upload process, which is generally used to upload an image or file to a server, with React Hook Form. Let's first create a simple ",(0,a.kt)("a",{parentName:"p",href:"https://expressjs.com/"},"express")," server to upload the files. Then, let's upload our files to this server with the React Hook form. Let's start!"),(0,a.kt)("h2",{id:"create-express-server"},"Create Express Server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i express\n")),(0,a.kt)("p",null,"Then, let's install the cors package necessary to allow file upload to the server, and the express-fileupload package to manage the paths of the downloaded files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i cors express-fileupload\n")),(0,a.kt)("p",null,"We have completed our installations to create a simple server. This server will indicate that the file has been uploaded successfully or failed, in response to a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," call to an endpoint that we have specified."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import express from "express";\nimport fileupload from "express-fileupload";\nimport cors from "cors";\n\nconst app = express();\n\napp.use(\n  fileupload({\n    createParentPath: true,\n  }),\n);\n\napp.use(cors());\napp.use(express.json());\napp.use(express.urlencoded({ extended: true }));\n\napp.post("/upload-file", async (req, res) => {\n  try {\n    if (!req.files) {\n      res.send({\n        status: "failed",\n        message: "No file uploaded",\n      });\n    } else {\n      let file = req.files.file;\n\n      console.log(req.files);\n\n      file.mv("./uploads/" + file.name);\n\n      res.send({\n        status: "success",\n        message: "File is uploaded",\n        data: {\n          name: file.name,\n          mimetype: file.mimetype,\n          size: file.size,\n        },\n      });\n    }\n  } catch (err) {\n    res.status(500).send(err);\n  }\n});\n\nconst port = process.env.PORT || 5000;\n\napp.listen(port, () => console.log(`Server started on port ${port}`));\n')),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-03-29-react-hook-form-upload/server_start.gif",alt:"Express Server"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"We created a server with Express. As you can see, we have successfully started our server, now we have an endpoint to handle requests to this port. Now let's create a React project and send our files to this server with React Hook Form."),(0,a.kt)("h2",{id:"create-react-project"},"Create React Project"),(0,a.kt)("p",null,"Let's create a react project with ",(0,a.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App")," and then install the necessary packages for our project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app react-hook-form-multipart-upload\n")),(0,a.kt)("p",null,"After your project is ready, let's go to our project directory and install the React Hook Form package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd react-hook-form-multipart-upload\nnpm install react-hook-form\n\nnpm run start\n")),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"banner-container"},(0,a.kt)("div",{className:"banner-header"},"Stop wasting your time copy/pasting your table code all over your application!"),(0,a.kt)("p",null,"Meet the headless, React-based solution to build sleek ",(0,a.kt)("strong",{parentName:"p"},"CRUD")," applications. With refine, you can be confident that your codebase will always stay clean and boilerplate-free."),(0,a.kt)("p",null,"Try ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine")," to rapidly build your next ",(0,a.kt)("strong",{parentName:"p"},"CRUD")," project, whether it's an admin panel, dashboard, internal tool or storefront."),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/pankod/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/generic_banner.png",alt:"refine blog logo"}))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," is an open-source, React-based framework for building CRUD applications without constraints. It\u2019s headless by design and seamlessly works with ",(0,a.kt)("strong",{parentName:"p"},"any custom design")," or ",(0,a.kt)("strong",{parentName:"p"},"UI framework")," you favor. For convenience, it ships with ready-made integrations for ",(0,a.kt)("strong",{parentName:"p"},"Ant Design, Material UI and Mantine UI"),"."),(0,a.kt)("p",null,"It can ",(0,a.kt)("strong",{parentName:"p"},"speed up your development time up to 3X")," without compromising freedom on styling, customization and project workflow."),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine GitHub repository")," for more information, demos, tutorials, and example projects.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"multipart-file-upload-with-react-hook-form"},"Multipart File Upload with React Hook Form"),(0,a.kt)("p",null,"We created our React project and installed our react hook form package. Now let's create a form and manage it with the react hook form."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},'import React from "react";\n//highlight-next-line\nimport { useForm } from "react-hook-form";\n\nfunction App() {\n  //highlight-next-line\n  const { register, handleSubmit } = useForm();\n\n  const onSubmit = () => {};\n\n  return (\n    //highlight-start\n    <div className="App">\n      <form onSubmit={handleSubmit(onSubmit)}>\n        <input type="file" {...register("file")} />\n\n        <input type="submit" />\n      </form>\n    </div>\n    //highlight-end\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"To manage our form and its elements, we defined the register and handleSubmit methods from the react hook form. Now, let's upload the file selected in our onSubmit method to our server by placing it in the formData."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.js"',title:'"App.js"'},'import React from "react";\nimport { useForm } from "react-hook-form";\n\nfunction App() {\n  const { register, handleSubmit } = useForm();\n\n  const onSubmit = async (data) => {\n    //highlight-start\n    const formData = new FormData();\n    formData.append("file", data.file[0]);\n\n    const res = await fetch("http://localhost:5000/upload-file", {\n      method: "POST",\n      body: formData,\n    }).then((res) => res.json());\n    alert(JSON.stringify(`${res.message}, status: ${res.status}`));\n    //highlight-end\n  };\n\n  return (\n    <div className="App">\n      <form onSubmit={handleSubmit(onSubmit)}>\n        <input type="file" {...register("file")} />\n\n        <input type="submit" />\n      </form>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,a.kt)("p",null,"Our project is ready! With React Hook Form, we can now send the selected file to our server in ",(0,a.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," type. Let's test it!"),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-03-29-react-hook-form-upload/image_upload.gif",alt:"multipart/form-data file upload"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"are-you-looking-react-web-framework"},"Are You Looking React Web Framework?"),(0,a.kt)("p",null,"A React-based framework for building internal tools, rapidly. ",(0,a.kt)("strong",{parentName:"p"},"refine")," offers lots of out-of-the box functionality for rapid development, without compromising extreme customizability. Use-cases include, but are not limited to admin panels, B2B applications and dashboards."),(0,a.kt)("p",null,"\ud83d\udd25 ",(0,a.kt)("strong",{parentName:"p"},"Headless")," : Works with any UI framework"),(0,a.kt)("p",null,"\u2699\ufe0f Zero-configuration: One-line setup with superplate. It takes less than a minute to start a project."),(0,a.kt)("p",null,"\ud83d\udce6 Out-of-the-box : Routing, networking, authentication, state management, i18n and UI."),(0,a.kt)("p",null,"\ud83d\udd0c Backend Agnostic : Connects to any custom backend. Built-in support for REST API, Strapi, NestJs CRUD, Hasura, Nhost, Airtable, Medusa, Supabase, and Appwrite."),(0,a.kt)("p",null,"\ud83d\udcdd Native Typescript Core : You can always opt-out for plain JavaScript."),(0,a.kt)("p",null,"\ud83d\udc1c Enterprise UI : Works seamlessly with Ant Design. (Support for multiple UI frameworks is on the Roadmap)"),(0,a.kt)("p",null,"\ud83d\udcdd Boilerplate-free Code : Keeps your codebase clean and readable."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"refine")," documentation for more information. \u2192")),(0,a.kt)("h2",{id:"how-to-multipart-file-upload-with-refine-and-react-hook-form"},"How to Multipart File Upload with Refine and React Hook Form?"),(0,a.kt)("p",null,"It allows you to manage your forms and send data to your server with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"refine-react-hook-form adapter")," it publishes with its ",(0,a.kt)("strong",{parentName:"p"},"refine")," ",(0,a.kt)("strong",{parentName:"p"},"headless")," feature. With this adapter, you can use all the features of the React Hook Form in harmony with ",(0,a.kt)("strong",{parentName:"p"},"refine"),". You can also perform ",(0,a.kt)("inlineCode",{parentName:"p"},"Multipart File Upload(multipart/form-data)")," operation very easily using this adapter."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/packages/list-of-packages"},"Refer to the refine-react-hook-form adapter documentation for detailed information. \u2192")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/reactHookForm/useForm"},"View Source")),(0,a.kt)("p",null,"You can manage your form very easily with the ",(0,a.kt)("inlineCode",{parentName:"p"},"refine-react-hook-form adapter"),". The data created in the form will be automatically saved to the database with the ",(0,a.kt)("strong",{parentName:"p"},"refine")," ",(0,a.kt)("inlineCode",{parentName:"p"},"onFinish")," method."),(0,a.kt)("p",null,"This is a basic ",(0,a.kt)("inlineCode",{parentName:"p"},"CMS")," app that was created with ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s ",(0,a.kt)("strong",{parentName:"p"},"headless")," feature. You may quickly build records and save them to your database using ",(0,a.kt)("strong",{parentName:"p"},"refine"),". We'll look at the CreatePost page of this step. We'll create a record in the form and manage it with the ",(0,a.kt)("inlineCode",{parentName:"p"},"refine-react-hook-form")," adapter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/pages/CreatePost"',title:'"src/pages/CreatePost"'},'import { useState } from "react";\n//highlight-next-line\nimport { useForm } from "@refinedev/react-hook-form";\nimport { useSelect, useApiUrl } from "@refinedev/core";\n\nimport axios from "axios";\n\nexport const PostCreate: React.FC = () => {\n  const [isUploading, setIsUploading] = useState<boolean>(false);\n\n  //highlight-start\n  const {\n    refineCore: { onFinish, formLoading },\n    register,\n    handleSubmit,\n    formState: { errors },\n    setValue,\n  } = useForm();\n  //highlight-end\n\n  //highlight-next-line\n  const apiURL = useApiUrl();\n\n  const { options } = useSelect({\n    resource: "categories",\n  });\n\n  //highlight-start\n  const onSubmitFile = async () => {\n    setIsUploading(true);\n    const inputFile = document.getElementById("fileInput") as HTMLInputElement;\n\n    const formData = new FormData();\n    formData.append("file", inputFile?.files?.item(0) as File);\n\n    const res = await axios.post<{ url: string }>(`${apiURL}/media/upload`, formData, {\n      withCredentials: false,\n      headers: {\n        "Access-Control-Allow-Origin": "*",\n      },\n    });\n\n    setValue("thumbnail", res.data.url);\n    setIsUploading(false);\n  };\n  //highlight-end\n\n  return (\n    //highlight-next-line\n    <form onSubmit={handleSubmit(onFinish)}>\n      <label>Title: </label>\n      <input {...register("title", { required: true })} />\n      {errors.title && <span>This field is required</span>}\n      <br />\n      <label>Status: </label>\n      <select {...register("status")}>\n        <option value="published">published</option>\n        <option value="draft">draft</option>\n        <option value="rejected">rejected</option>\n      </select>\n      <br />\n      <label>Category: </label>\n      <select defaultValue={""} {...register("category.id", { required: true })}>\n        <option value={""} disabled>\n          Please select\n        </option>\n        {options?.map((category) => (\n          <option key={category.value} value={category.value}>\n            {category.label}\n          </option>\n        ))}\n      </select>\n      {errors.category && <span>This field is required</span>}\n      <br />\n      <label>Content: </label>\n      <br />\n      <textarea {...register("content", { required: true })} rows={10} cols={50} />\n      {errors.content && <span>This field is required</span>}\n      <br />\n      <br />\n      //highlight-start\n      <label>Image: </label>\n      <input id="fileInput" type="file" onChange={onSubmitFile} />\n      <input type="hidden" {...register("thumbnail", { required: true })} />\n      {errors.thumbnail && <span>This field is required</span>}\n      //highlight-end\n      <br />\n      <br />\n      <input type="submit" disabled={isUploading} value="Submit" />\n      {formLoading && <p>Loading</p>}\n    </form>\n  );\n};\n')),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-03-29-react-hook-form-upload/overview.gif",alt:"Refine Example Overview"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"As you can see, we have easily saved both our data such as title, category, status and an image in the form of ",(0,a.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," to our database using the ",(0,a.kt)("inlineCode",{parentName:"p"},"refine-react-hook-form")," adapter. We've only shown how to utilize the Multipart File Upload feature for our example in this tutorial. For examine ",(0,a.kt)("strong",{parentName:"p"},"refine")," CMS example, checkout the live codeSandbox below."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(u,{path:"form-react-hook-form-use-form",mdxType:"CodeSandboxExample"}))}f.isMDXComponent=!0}}]);