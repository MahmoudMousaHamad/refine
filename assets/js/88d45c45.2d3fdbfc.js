"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>u});n(67294);var r=n(3905);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"accessControl-provider",title:"Access Control Provider",sidebar_label:"Access Control Provider"},c=void 0,p={unversionedId:"api-reference/core/providers/accessControl-provider",id:"version-3.xx.xx/api-reference/core/providers/accessControl-provider",title:"Access Control Provider",description:"Access control is a broad topic where there are lots of advanced solutions that provide different set of features. refine is deliberately agnostic for its own API to be able to integrate different methods (RBAC, ABAC, ACL, etc.) and different libraries (Casbin, CASL, Cerbos, AccessControl.js). can method would be the entry point for those solutions.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/providers/accessControl-provider.md",sourceDirName:"api-reference/core/providers",slug:"/api-reference/core/providers/accessControl-provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/accessControl-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/providers/accessControl-provider.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Wali Mohammad Kadri",lastUpdatedAt:1705412324,formattedLastUpdatedAt:"Jan 16, 2024",frontMatter:{id:"accessControl-provider",title:"Access Control Provider",sidebar_label:"Access Control Provider"},sidebar:"someSidebar",previous:{title:"Core API",permalink:"/docs/3.xx.xx/api-reference/core"},next:{title:"Auth Provider",permalink:"/docs/3.xx.xx/api-reference/core/providers/auth-provider"}},l={},u=[{value:"Usage",id:"usage",level:2},{value:"Hooks and Components",id:"hooks-and-components",level:2},{value:"<code>useCan</code>",id:"usecan",level:3},{value:"<code>&lt;CanAccess /&gt;</code>",id:"canaccess-",level:3},{value:"Performance",id:"performance",level:2},{value:"List of Default Access Control Points",id:"list-of-default-access-control-points",level:2},{value:"Routes",id:"routes",level:3},{value:"Sider",id:"sider",level:3},{value:"Buttons",id:"buttons",level:3},{value:"Example",id:"example",level:2}],d=(m="CodeSandboxExample",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const f={toc:u};function k(e){var{components:t}=e,n=s(e,["components"]);return(0,r.kt)("wrapper",o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},f,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Access control is a broad topic where there are lots of advanced solutions that provide different set of features. ",(0,r.kt)("strong",{parentName:"p"},"refine")," is deliberately agnostic for its own API to be able to integrate different methods (RBAC, ABAC, ACL, etc.) and different libraries (",(0,r.kt)("a",{parentName:"p",href:"https://casbin.org/"},"Casbin"),", ",(0,r.kt)("a",{parentName:"p",href:"https://casl.js.org/v5/en/"},"CASL"),", ",(0,r.kt)("a",{parentName:"p",href:"https://cerbos.dev/"},"Cerbos"),", ",(0,r.kt)("a",{parentName:"p",href:"https://onury.io/accesscontrol/"},"AccessControl.js"),"). ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method would be the entry point for those solutions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," provides an agnostic API via the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," to manage access control throughout your app."),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider")," must implement only one async method named ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," to be used to check if the desired access will be granted."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"can")," must have the interface:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type CanParams = {\n    resource: string;\n    action: string;\n    params?: {\n        resource?: IResourceItem;\n        id?: BaseKey;\n        [key: string]: any;\n    };\n};\n\ntype CanReturnType = {\n    can: boolean;\n    reason?: string;\n}\n\nconst accessControlProvider = {\n    can: ({ resource, action, params }: CanParams) => Promise<CanReturnType>;\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"*"),": Too see ","\u2192"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#resourceitemprops"},(0,r.kt)("inlineCode",{parentName:"a"},"IResourceItem")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#basekey"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseKey")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#canparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CanParams")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#canreturntype"},(0,r.kt)("inlineCode",{parentName:"a"},"CanReturnType")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"A basic example looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const App: React.FC = () => {\n    <Refine\n        // other providers and props\n        accessControlProvider={{\n            can: async ({ resource, action, params }) => {\n                if (resource === "posts" && action === "edit") {\n                    return Promise.resolve({\n                        can: false,\n                        reason: "Unauthorized",\n                    });\n                }\n\n                // or you can access directly *resource object\n                // const resourceName = params?.resource?.name;\n                // const anyUsefulOption = params?.resource?.options?.yourUsefulOption;\n                // if (resourceName === "posts" && anyUsefulOption === true && action === "edit") {\n                //     return Promise.resolve({\n                //         can: false,\n                //         reason: "Unauthorized",\n                //     });\n                // }\n\n                return { can: true };\n            },\n        }}\n    />;\n};\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"*resource"),": ","\u2192"," It returns the resource (",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#resourceitemprops"},"ResourceItemProps"),") object you gave to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine />")," component. This will enable Attribute Based Access Control (ABAC), for example granting permissions based on the value of a field in the resource object.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can pass a ",(0,r.kt)("inlineCode",{parentName:"p"},"reason")," along with ",(0,r.kt)("inlineCode",{parentName:"p"},"can"),". It will be accessible using ",(0,r.kt)("inlineCode",{parentName:"p"},"useCan"),". It will be shown at the tooltip of the buttons from ",(0,r.kt)("strong",{parentName:"p"},"refine")," when they are disabled.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find access control examples made with ",(0,r.kt)("strong",{parentName:"p"},"refine")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Casbin")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/v3/examples/access-control-casbin"},"Source Code")," - ",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/v3/examples/access-control-casbin/?view=preview&theme=dark&codemirror=1"},"Demo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cerbos")," ","\u2192"," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/refinedev/refine/tree/v3/examples/access-control-cerbos"},"Source Code")," - ",(0,r.kt)("a",{parentName:"li",href:"https://codesandbox.io/embed/github/refinedev/refine/tree/v3/examples/access-control-cerbos/?view=preview&theme=dark&codemirror=1"},"Demo")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," checks for access control in its related components and pages. ",(0,r.kt)("a",{parentName:"p",href:"#list-of-default-access-control-points"},"Refer here to see all the places ",(0,r.kt)("strong",{parentName:"a"},"refine")," checks for access control.")),(0,r.kt)("h2",{id:"hooks-and-components"},"Hooks and Components"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," provides a hook and a component to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method from the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessControlProvider"),"."),(0,r.kt)("h3",{id:"usecan"},(0,r.kt)("inlineCode",{parentName:"h3"},"useCan")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useCan")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," as the query function for ",(0,r.kt)("strong",{parentName:"p"},"react-query"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery"),". It takes the parameters that ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," takes. It can also be configured with ",(0,r.kt)("inlineCode",{parentName:"p"},"queryOptions")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery"),". Returns the result of ",(0,r.kt)("inlineCode",{parentName:"p"},"useQuery"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'const { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" },\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const useCan: ({\n    action,\n    resource,\n    params,\n    queryOptions,\n}: CanParams* & {\n    queryOptions?: UseQueryOptions<CanReturnType>;\n}) => UseQueryResult<CanReturnType*>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"*"),": Too see ","\u2192"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#canparams"},(0,r.kt)("inlineCode",{parentName:"a"},"CanParams")),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#canreturntype"},(0,r.kt)("inlineCode",{parentName:"a"},"CanReturnType")))),(0,r.kt)("h3",{id:"canaccess-"},(0,r.kt)("inlineCode",{parentName:"h3"},"<CanAccess />")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<CanAccess />")," is a wrapper component that uses ",(0,r.kt)("inlineCode",{parentName:"p"},"useCan")," to check for access control. It takes the parameters that ",(0,r.kt)("inlineCode",{parentName:"p"},"can")," method takes and also a ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback"),". It renders its children if the access control returns true and if access control returns false renders ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback")," if provided."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<CanAccess\n    resource="posts"\n    action="edit"\n    params={{ id: 1 }}\n    fallback={<CustomFallback />}\n>\n    <YourComponent />\n</CanAccess>\n')),(0,r.kt)("h2",{id:"performance"},"Performance"),(0,r.kt)("p",null,"As the number of points that checks for access control in your app increases the performance of your app may take a hit especially if its access control involves remote endpoints. Caching the access control checks helps a great deal. Since ",(0,r.kt)("strong",{parentName:"p"},"refine")," uses react-query it can be easily done configuring ",(0,r.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"staleTime")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"cacheTime"))," properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'// inside your component\n\nconst { data } = useCan({\n    resource: "resource-you-ask-for-access",\n    action: "action-type-on-resource",\n    params: { foo: "optional-params" } },\n    queryOptions: {\n        staleTime: 5 * 60 * 1000, // 5 minutes\n    }\n);\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," uses 5 minutes ",(0,r.kt)("inlineCode",{parentName:"p"},"cacheTime")," and 0 for ",(0,r.kt)("inlineCode",{parentName:"p"},"staleTime")," by default for its own access control points."),(0,r.kt)("h2",{id:"list-of-default-access-control-points"},"List of Default Access Control Points"),(0,r.kt)("h3",{id:"routes"},"Routes"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-nextjs-router"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-nextjs-router")),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-react-router"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-react-router")),", and ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@pankod/refine-react-location"},(0,r.kt)("inlineCode",{parentName:"a"},"@pankod/refine-react-location"))," packages integrate access control for CRUD pages at ",(0,r.kt)("inlineCode",{parentName:"p"},"[resource]/[action]")," and root routes."),(0,r.kt)("p",null,"They will check access control with parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dashboard (",(0,r.kt)("inlineCode",{parentName:"li"},"/"),"): ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "dashboard", action: "list" }')),(0,r.kt)("li",{parentName:"ul"},"list (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"/posts"),"): ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "list", params: { *resource } }')),(0,r.kt)("li",{parentName:"ul"},"create (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"/posts/create"),"): ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { *resource } }')),(0,r.kt)("li",{parentName:"ul"},"clone (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"/posts/clone/1"),"): ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { id: 1, *resource }}')),(0,r.kt)("li",{parentName:"ul"},"edit (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"/posts/edit/1"),"): ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "edit", params: { id: 1, *resource } }')),(0,r.kt)("li",{parentName:"ul"},"show (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"/posts/show/1"),"): ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "show", params: { id: 1, *resource } }'))),(0,r.kt)("p",null,"In case access control returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," they will show ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config#catchall"},(0,r.kt)("inlineCode",{parentName:"a"},"cathcAll"))," if provided or a standard error page otherwise."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"*resource"),": ","\u2192"," It returns the resource (",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#resourceitemprops"},"ResourceItemProps"),") object you gave to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine />")," component. This will enable Attribute Based Access Control (ABAC), for example granting permissions based on the value of a field in the resource object.")),(0,r.kt)("h3",{id:"sider"},"Sider"),(0,r.kt)("p",null,"Sider is also integrated so that unaccessible resources won't appear in the sider menu."),(0,r.kt)("p",null,"Menu items will check access control with ",(0,r.kt)("inlineCode",{parentName:"p"},'{ resource, action: "list" }')),(0,r.kt)("p",null,"For example if your app has resource ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," it will be checked with ",(0,r.kt)("inlineCode",{parentName:"p"},'{ resource: "posts", action: "list" }')),(0,r.kt)("h3",{id:"buttons"},"Buttons"),(0,r.kt)("p",null,"These buttons will check for access control.\nLet's say these buttons are rendered where ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," where applicable."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/list-button"},(0,r.kt)("strong",{parentName:"a"},"List")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "list", params: { *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/create-button"},(0,r.kt)("strong",{parentName:"a"},"Create")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/clone-button"},(0,r.kt)("strong",{parentName:"a"},"Clone")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "create", params: { id: 1, *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/edit-button"},(0,r.kt)("strong",{parentName:"a"},"Edit")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "edit", params: { id: 1, *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/delete-button"},(0,r.kt)("strong",{parentName:"a"},"Delete")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts, action: "delete", params: { id: 1, *resource } }')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/3.xx.xx/api-reference/antd/components/buttons/show-button"},(0,r.kt)("strong",{parentName:"a"},"Show")),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{ resource: "posts", action: "show", params: { id: 1, *resource } }'))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"*resource"),": ","\u2192"," It returns the resource (",(0,r.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#resourceitemprops"},"ResourceItemProps"),") object you gave to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine />")," component. This will enable Attribute Based Access Control (ABAC), for example granting permissions based on the value of a field in the resource object.")),(0,r.kt)("p",null,"These buttons will be disabled if access control returns ",(0,r.kt)("inlineCode",{parentName:"p"},"{ can: false }")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(d,{path:"access-control-casbin",mdxType:"CodeSandboxExample"}))}k.isMDXComponent=!0}}]);