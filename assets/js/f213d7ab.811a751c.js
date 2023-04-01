"use strict";(self.webpackChunkoppo_docs_ts=self.webpackChunkoppo_docs_ts||[]).push([[143],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||l;return t?a.createElement(k,r(r({ref:n},d),{},{components:t})):a.createElement(k,r({ref:n},d))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));const l={title:"Changelogs",sidebar_position:4,toc_min_heading_level:2},r=void 0,i={unversionedId:"op-vehshop/Changelogs",id:"op-vehshop/Changelogs",title:"Changelogs",description:"v3.0.2",source:"@site/docs/op-vehshop/Changelogs.md",sourceDirName:"op-vehshop",slug:"/op-vehshop/Changelogs",permalink:"/docs/op-vehshop/Changelogs",draft:!1,editUrl:"https://github.com/OppoNoppo/opponoppo.github.io/tree/main/docs/op-vehshop/Changelogs.md",tags:[],version:"current",lastUpdatedAt:1680366841,formattedLastUpdatedAt:"Apr 1, 2023",sidebarPosition:4,frontMatter:{title:"Changelogs",sidebar_position:4,toc_min_heading_level:2},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/docs/op-vehshop/Commands"},next:{title:"ErrorCodes",permalink:"/docs/op-vehshop/Client/ErrorCodes"}},p={},s=[{value:"v3.0.2",id:"v302",level:3},{value:"Config Change:",id:"config-change",level:4},{value:"Files Changed:",id:"files-changed",level:4},{value:"v3.0.1",id:"v301",level:3},{value:"Config Change:",id:"config-change-1",level:4},{value:"Files Changed:",id:"files-changed-1",level:4}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"v302"},"v3.0.2"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"+")," Added Target system.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"+")," Added defaultmods as option in ",(0,o.kt)("inlineCode",{parentName:"p"},"/op-v-changeveh"),".",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"+")," Added label spaces support in ",(0,o.kt)("inlineCode",{parentName:"p"},"/op-v-changeveh"),".",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"/")," Fixed Debug message.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"/")," Fixed Vehicle spawning issue.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"/"),' Fixed Vehicle not loading due to "slow" server.',(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-")," Removed Unused code.",(0,o.kt)("br",null)),(0,o.kt)("h4",{id:"config-change"},"Config Change:"),(0,o.kt)("p",null,"Due to the target interaction system addition. Some changes to the config have been made."),(0,o.kt)("p",null,"Add this to ",(0,o.kt)("inlineCode",{parentName:"p"},"_Language"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"--[[Target]]\n['targetopenMenu'] = 'Open Menu',\n['targetopenMenuIcon'] = 'fas fa-bars-staggered',\n"))),(0,o.kt)("p",null,"Changes to Showroompoints:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Added ",(0,o.kt)("inlineCode",{parentName:"p"},"targetZone")," Please take a look at the config of the new version and compare it to yours for more explanation.")),(0,o.kt)("h4",{id:"files-changed"},"Files Changed:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"client/cmd.lua"),(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"client/main.lua"),(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"client/ox.lua"),(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"client/target.lua"),(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"server/cmd.lua"),(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"config.lua"),(0,o.kt)("br",null)),(0,o.kt)("h3",{id:"v301"},"v3.0.1"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"+")," Added Ox_lib version check.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"/")," Fixed SQL file problem.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"/")," Fixed Job Whitelist System.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"/")," Fixed Menu bug after buying vehicle.",(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"-")," Removed Certain files from migrating/ folder to avoid confusion.",(0,o.kt)("br",null)),(0,o.kt)("h4",{id:"config-change-1"},"Config Change:"),(0,o.kt)("p",null,"Due to the job whitelist system issue fix the following settings need to be changed to minimize reconfiguring: ",(0,o.kt)("strong",{parentName:"p"},"per location"),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"... .lSettings.sRestrictions")," Please compare the section with your old version."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Old"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- When whitelisted and blacklisted contain the same job no matter what grade unexpected results will happen.\njobsWhitelisted = {}, -- Make empty to disable\njobsBlacklisted = {}, -- Make empty to disable\n"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"New"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre",className:"language-lua"},"-- {['jobname'] = mingrade}\njobsWhitelisted = false, -- Make false to disable\njobsBlacklisted = false, -- Make false to disable\n"))),(0,o.kt)("h4",{id:"files-changed-1"},"Files Changed:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"client/3dmenu.lua"),(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"client/main.lua"),(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"client/utils.lua"),(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"server/utils.lua"),(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"sql/op-vehshop.sql"),(0,o.kt)("br",null),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"config.lua"),(0,o.kt)("br",null)))}u.isMDXComponent=!0}}]);