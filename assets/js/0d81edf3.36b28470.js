"use strict";(self.webpackChunkoppo_docs_ts=self.webpackChunkoppo_docs_ts||[]).push([[215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:o,values:d,groupId:m,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===o?o:o??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:k}=(0,s.U)(),[w,N]=(0,r.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==w&&y.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),a=y[n].value;a!==w&&(T(t),N(a),null!=m&&k(m,String(a)))},x=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=O.indexOf(e.currentTarget)+1;t=O[n]??O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;t=O[n]??O[O.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},h)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:x,onClick:E},o,{className:(0,l.Z)("tabs__item",p,o?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},7739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={title:"giveKeys"},s=void 0,c={unversionedId:"op-vehlock/Client/giveKeys",id:"op-vehlock/Client/giveKeys",title:"giveKeys",description:"",source:"@site/docs/op-vehlock/Client/giveKeys.md",sourceDirName:"op-vehlock/Client",slug:"/op-vehlock/Client/giveKeys",permalink:"/docs/op-vehlock/Client/giveKeys",draft:!1,editUrl:"https://github.com/OppoNoppo/op-docs/tree/main/docs/op-vehlock/Client/giveKeys.md",tags:[],version:"current",lastUpdatedBy:"ThatGuyJop",lastUpdatedAt:1671562005,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{title:"giveKeys"},sidebar:"tutorialSidebar",previous:{title:"getVehState",permalink:"/docs/op-vehlock/Client/getVehState"},next:{title:"hasKey",permalink:"/docs/op-vehlock/Client/hasKey"}},u={},p=[],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"giveKeys is an ox_lib callback function, it may be used in all sorts of functions where a player needs the keys of an vehicle."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"plate: ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",{parentName:"admonition"},"target: ",(0,r.kt)("inlineCode",{parentName:"p"},"integer"))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"callback",label:"Callback",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"showLineNumbers",showLineNumbers:!0},"lib.callback('op-vehlock:giveKeys', false, function(success)\n    if success then\n        -- Player has received key\n    else\n        -- Player already has key or script error.\n    end\nend, plate, target)\n"))),(0,r.kt)(o.Z,{value:"await",label:"Await",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"showLineNumbers",showLineNumbers:!0},"local success = lib.callback.await('op-vehlock:giveKeys', false, plate, target)\nif success then\n    -- Player has received key\nelse\n    -- Player already has key or script error.\nend\n")))),(0,r.kt)("h1",{id:"example"},"Example"),(0,r.kt)("p",null,"This time the callback is used when a vehicle is made e.g. when spawning a police vehicle. It will give the key of that vehicle to the player executing the code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title='client.lua' {5-11} showLineNumbers",title:"'client.lua'","{5-11}":!0,showLineNumbers:!0},"local function SpawnVehicle(x,y,z,h,car)\n    lib.requestModel(car)\n    local veh = CreateVehicle(GetHashKey(car), x,y,z,h,true,false)\n    if veh then\n        lib.callback('op-vehlock:giveKeys', false, function(success)\n            if success then\n                lib.notify({type = 'success', title = 'You now have the keys'})\n            else\n                lib.notify({type = 'inform', title = 'You already have the keys to this vehicle'})\n            end\n        end, ESX.Math.Trim(GetVehicleNumberPlateText(veh)), GetPlayerServerId(PlayerId()))\n    end\nend\n")))}m.isMDXComponent=!0}}]);