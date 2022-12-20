"use strict";(self.webpackChunkoppo_docs_ts=self.webpackChunkoppo_docs_ts||[]).push([[674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:o,values:d,groupId:m,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??h.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,i.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==y&&!b.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,s.U)(),[g,O]=(0,a.useState)(y),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=m){const e=w[m];null!=e&&e!==g&&b.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=N.indexOf(t),r=b[n].value;r!==g&&(T(t),O(r),null!=m&&k(m,String(r)))},C=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},f)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>N.push(e),onKeyDown:C,onClick:E},o,{className:(0,l.Z)("tabs__item",p,o?.className,{"tabs__item--active":g===t})}),n??t)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={title:"isOwner"},s=void 0,c={unversionedId:"op-vehlock/Client/isOwner",id:"op-vehlock/Client/isOwner",title:"isOwner",description:"",source:"@site/docs/op-vehlock/Client/isOwner.md",sourceDirName:"op-vehlock/Client",slug:"/op-vehlock/Client/isOwner",permalink:"/docs/op-vehlock/Client/isOwner",draft:!1,editUrl:"https://github.com/OppoNoppo/op-docs/tree/main/docs/op-vehlock/Client/isOwner.md",tags:[],version:"current",lastUpdatedBy:"ThatGuyJop",lastUpdatedAt:1671562005,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"isOwner"},sidebar:"tutorialSidebar",previous:{title:"hasKey",permalink:"/docs/op-vehlock/Client/hasKey"},next:{title:"updateLock",permalink:"/docs/op-vehlock/Client/updateLock"}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"isOwner is an ox_lib callback function, it may be used in all sorts of functions where a check needs te be in place to verify ownership of the plate."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"plate: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"))),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"callback",label:"Callback",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"showLineNumbers",showLineNumbers:!0},"lib.callback('op-vehlock:isOwner', false, function(isOwner)\n    if isOwner then\n        -- Player is owner of plate\n    else\n        -- Player is not the owner of the plate, or script error.\n    end\nend, plate)\n"))),(0,a.kt)(o.Z,{value:"await",label:"Await",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"showLineNumbers",showLineNumbers:!0},"local isOwner = lib.callback.await('op-vehlock:isOwner', false, plate, target)\nif isOwner then\n    -- Player is owner of plate\nelse\n    -- Player is not the owner of the plate, or script error.\nend\n")))),(0,a.kt)("h1",{id:"example"},"Example"),(0,a.kt)("p",null,"This time the callback is used in the function giveKeys in ",(0,a.kt)("inlineCode",{parentName:"p"},"op-vehlock")," to verify whether the target (also the player in this case) is the owner of the vehicle, in this example it is simply used to change notification."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title='client.lua' {2-8} showLineNumbers",title:"'client.lua'","{2-8}":!0,showLineNumbers:!0},"if GetPlayerServerId(PlayerId()) == target then\n    lib.callback('op-vehlock:isOwner', false, function(isOwner)\n        if isOwner then\n            lib.notify({type = 'error', title = langSettings[language]['AlreadyHasKeys']})\n        else\n            lib.notify({type = 'error', title = langSettings[language]['CannotGiveYourself']})\n        end\n    end, ESX.Math.Trim(GetVehicleNumberPlateText(closestVehicle)))\n    return\nend\n")))}m.isMDXComponent=!0}}]);