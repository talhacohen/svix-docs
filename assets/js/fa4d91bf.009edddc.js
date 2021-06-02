(self.webpackChunksvix_docs=self.webpackChunksvix_docs||[]).push([[930],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),v=a,f=m["".concat(c,".").concat(v)]||m[v]||p[v]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9287:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(7294),a=n(944),i=n(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,s=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,m=e.groupId,v=e.className,f=(0,a.Z)(),d=f.tabGroupChoices,b=f.setTabGroupChoices,h=(0,r.useState)(u),g=h[0],y=h[1],x=r.Children.toArray(e.children),k=[];if(null!=m){var T=d[m];null!=T&&T!==g&&p.some((function(e){return e.value===T}))&&y(T)}var O=function(e){var t=e.currentTarget,n=k.indexOf(t),r=p[n].value;y(r),null!=m&&(b(m,r),setTimeout((function(){var e,n,r,a,i,l,c,s;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,i=e.right,l=window,c=l.innerHeight,s=l.innerWidth,n>=0&&i<=s&&a<=c&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case s:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case c:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},v)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:w,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(x.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))};function p(e){var t=e.children;return r.createElement(u,{defaultValue:"js",groupId:"programming-language",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"CLI",value:"cli"},{label:"cURL",value:"curl"}]},t)}},7603:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(4786),a=n(6843),i=(n(7294),n(3905)),l=n(9287),o=n(8215),c={title:"Installation"},s={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"When working with Svix you can either use our REST API directly, or using any of our libraries. In this document we'll cover how to install them for each platform.",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/installation",editUrl:"https://github.com/svixhq/svix-docs/edit/main/docs/installation.mdx",version:"current",frontMatter:{title:"Installation"},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/overview"},next:{title:"Quickstart",permalink:"/quickstart"}},u=[{value:"Install the libraries",id:"install-the-libraries",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When working with Svix you can either use our ",(0,i.kt)("a",{parentName:"p",href:"https://api.svix.com/docs"},"REST API")," directly, or using any of our libraries. In this document we'll cover how to install them for each platform."),(0,i.kt)("h2",{id:"install-the-libraries"},"Install the libraries"),(0,i.kt)(l.Z,{mdxType:"CodeTabs"},(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"npm install svix\n// Or\nyarn add svix\n"))),(0,i.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pip install svix\n"))),(0,i.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/svixhq/svix-libs/go\n"))),(0,i.kt)(o.Z,{value:"cli",mdxType:"TabItem"},(0,i.kt)("p",null,"Improved installation steps coming soon."),(0,i.kt)("p",null,"For the time being checkout the ",(0,i.kt)("a",{href:"https://github.com/svixhq/svix-cli#installation"},"CLI docs")," on Github.")),(0,i.kt)(o.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Install cURL. E.g. on arch linux:\npacman -S curl\n# Or on macOS\nbrew install curl\n")))),(0,i.kt)("p",null,"Then you can just use them as follows"),(0,i.kt)(l.Z,{mdxType:"CodeTabs"},(0,i.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { Svix } from "svix";\n\nconst svix = new Svix("AUTH_TOKEN");\nconst app = await svix.application.create({name: "Application name"});\n'))),(0,i.kt)(o.Z,{value:"py",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from svix import Svix, ApplicationIn\n\nsvix = Svix("AUTH_TOKEN")\napp = svix.application.create(ApplicationIn(name="Application name")\n'))),(0,i.kt)(o.Z,{value:"go",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    svix "github.com/svixhq/svix-libs/go"\n)\n\nsvixClient := svix.New("AUTH_TOKEN", nil)\napp, err := svixClient.Application.Create(&svix.ApplicationIn{\n    Name: "Application name",\n})}\n'))),(0,i.kt)(o.Z,{value:"cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'export SVIX_AUTH_TOKEN=AUTH_TOKEN\nsvix application create \'{ "name": "Application name" }\'\n'))),(0,i.kt)(o.Z,{value:"curl",mdxType:"TabItem"},(0,i.kt)("h1",{id:"nothing-to-do"},"Nothing to do."))))}m.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);