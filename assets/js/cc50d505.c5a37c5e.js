"use strict";(self.webpackChunkoppo_docs_ts=self.webpackChunkoppo_docs_ts||[]).push([[615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(v,l(l({ref:t},p),{},{components:r})):n.createElement(v,l({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),i=r(7392),s=r(7094),c=r(2466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){const{lazy:t,block:r,defaultValue:l,values:d,groupId:m,className:v}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,i.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,s.U)(),[w,O]=(0,a.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&b.some((t=>t.value===e))&&O(e)}const N=e=>{const t=e.currentTarget,r=T.indexOf(t),n=b[r].value;n!==w&&(E(t),O(n),null!=m&&k(m,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;t=T[r]??T[0];break}case"ArrowLeft":{const r=T.indexOf(e.currentTarget)-1;t=T[r]??T[T.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},v)},b.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:S,onClick:N},l,{className:(0,o.Z)("tabs__item",u,l?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},2007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=r(5488),l=r(5162);const i={title:"wipeKeys"},s=void 0,c={unversionedId:"op-vehlock/Server/wipeKeys",id:"op-vehlock/Server/wipeKeys",title:"wipeKeys",description:"",source:"@site/docs/op-vehlock/Server/wipeKeys.md",sourceDirName:"op-vehlock/Server",slug:"/op-vehlock/Server/wipeKeys",permalink:"/docs/op-vehlock/Server/wipeKeys",draft:!1,editUrl:"https://github.com/OppoNoppo/op-docs/tree/main/docs/op-vehlock/Server/wipeKeys.md",tags:[],version:"current",lastUpdatedBy:"ThatGuyJop",lastUpdatedAt:1671562005,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"wipeKeys"},sidebar:"tutorialSidebar",previous:{title:"removeKeysID",permalink:"/docs/op-vehlock/Server/removeKeysID"},next:{title:"wipeKeys:ALL",permalink:"/docs/op-vehlock/Server/wipeKeysAll"}},p={},u=[],d={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"wipeKeys is an event function, it can be used to remove all keys from a plate."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"plate: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"))),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"triggerS",label:"Trigger",default:!0,mdxType:"TabItem"},(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This event can also be called from client side by using ",(0,a.kt)("inlineCode",{parentName:"p"},"TriggerServerEvent"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"showLineNumbers",showLineNumbers:!0},"TriggerEvent('op-vehlock:wipeKeys', plate)\n")))))}m.isMDXComponent=!0}}]);