"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"learn-runtime-upgrades",title:"Runtime Upgrades",sidebar_label:"Runtime Upgrades",description:"Learn about how runtime upgrades work on Polkadot.",keywords:["runtime","upgrades","releases","forkless"],slug:"../learn-runtime-upgrades"},l="Runtime Upgrades",d={unversionedId:"learn/learn-runtime-upgrades",id:"learn/learn-runtime-upgrades",title:"Runtime Upgrades",description:"Learn about how runtime upgrades work on Polkadot.",source:"@site/../docs/learn/learn-runtime-upgrades.md",sourceDirName:"learn",slug:"/learn-runtime-upgrades",permalink:"/docs/learn-runtime-upgrades",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-runtime-upgrades.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1676883125,formattedLastUpdatedAt:"Feb 20, 2023",frontMatter:{id:"learn-runtime-upgrades",title:"Runtime Upgrades",sidebar_label:"Runtime Upgrades",description:"Learn about how runtime upgrades work on Polkadot.",keywords:["runtime","upgrades","releases","forkless"],slug:"../learn-runtime-upgrades"},sidebar:"docs",previous:{title:"Polkadot Host",permalink:"/docs/learn-polkadot-host"},next:{title:"Transaction Fees",permalink:"/docs/learn-transaction-fees"}},u={},c=[{value:"Forkless Upgrades",id:"forkless-upgrades",level:2},{value:"Client Releases",id:"client-releases",level:2},{value:"Runtime vs Client versions",id:"runtime-vs-client-versions",level:3},{value:"Runtime Upgrades for Various Users",id:"runtime-upgrades-for-various-users",level:2},{value:"For Infrastructure Providers",id:"for-infrastructure-providers",level:3},{value:"For Nominators",id:"for-nominators",level:3},{value:"Monitoring Changes",id:"monitoring-changes",level:2}],p={toc:c};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"runtime-upgrades"},"Runtime Upgrades"),(0,o.kt)("p",null,"Runtime upgrades allow Polkadot to change the\nlogic of the chain, without the need for a hard fork."),(0,o.kt)("h2",{id:"forkless-upgrades"},"Forkless Upgrades"),(0,o.kt)("p",null,'You may have come across the term "hard fork" before in the blockchain space. A ',(0,o.kt)("strong",{parentName:"p"},"hard fork")," occurs\nwhen a blockchain's logic changes such that nodes that do not include the new changes will not be\nable to remain in consensus with nodes that do. Such changes are backward incompatible. Hard forks\ncan be political due to the nature of the upgrades, as well as logistically onerous due to the\nnumber (potentially thousands) of nodes in the network that need to upgrade their software."),(0,o.kt)("p",null,'Rather than encode the runtime (a chain\'s "business logic") in the nodes,\nPolkadot nodes contain a WebAssembly\n',(0,o.kt)("a",{parentName:"p",href:"learn-polkadot-host"},"execution host"),". They maintain consensus on a very low level and\nwell-established instruction set. The Polkadot\nruntime is stored on the Polkadot blockchain\nitself."),(0,o.kt)("p",null,"As such, Polkadot can upgrade its runtime by\nupgrading the logic stored on-chain, and removes the coordination challenge of requiring thousands\nof node operators to upgrade in advance of a given block number. Polkadot stakeholders propose and\napprove upgrades through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"on-chain governance")," system, which also enacts\nthem autonomously."),(0,o.kt)("h2",{id:"client-releases"},"Client Releases"),(0,o.kt)("p",null,"The existing runtime logic is followed to update the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-wasm"},"Wasm")," runtime stored on the\nblockchain to a new version. The upgrade is then included in the blockchain itself, meaning that all\nthe nodes on the network execute it. Generally, there is no need to upgrade your nodes manually\nbefore the runtime upgrade as they will automatically start to follow the new logic of the chain.\nNodes only need to be updated when the runtime requires new host functions or there is a change in\nnetworking or consensus."),(0,o.kt)("p",null,"Transactions constructed for a given runtime version will not work on later versions. Therefore, a\ntransaction constructed based on a runtime version will not be valid in later runtime versions. If\nyou don't think you can submit a transaction before the upgrade, it is better to wait and construct\nit after the upgrade takes place."),(0,o.kt)("p",null,"Although upgrading your nodes is generally not necessary to follow an upgrade, we recommend\nfollowing the Polkadot releases and upgrading\npromptly, especially for high priority or critical releases."),(0,o.kt)("admonition",{title:"New Client Releases",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The details about the latest client releases can be found on the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases"},"releases section on the Polkadot repository"),". A\ndetailed analysis for client releases can be viewed on the\n",(0,o.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/tag/release-analysis"},"Polkadot Forum"),".")),(0,o.kt)("h3",{id:"runtime-vs-client-versions"},"Runtime vs Client versions"),(0,o.kt)("p",null,"The runtime and client versions are distinct from each other. The runtime versioning typically looks\nlike ",(0,o.kt)("inlineCode",{parentName:"p"},"network-xxxx"),", whereas the client versioning looks like ",(0,o.kt)("inlineCode",{parentName:"p"},"vx.x.xx"),". For instance, the runtime\nversion shown on the top left section of Polkadot-JS UI below is ",(0,o.kt)("inlineCode",{parentName:"p"},"kusama-9370"),", and the client\n(node) version shown on the top right section is ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.9.36"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Runtime vs Client versioning",src:n(87390).Z,width:"1917",height:"280"})),(0,o.kt)("admonition",{title:"Querying runtime and client versions",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The runtime version can be queried on-chain through Polkadot-JS UI by navigating to Developer tab >\nChain State > Storage > system and query ",(0,o.kt)("inlineCode",{parentName:"p"},"lastRuntimeUpgrade()"),"."),(0,o.kt)("p",{parentName:"admonition"},"The node version can be queried by navigating to Developer tab > RPC calls > system and query\n",(0,o.kt)("inlineCode",{parentName:"p"},"version()"),".")),(0,o.kt)("h2",{id:"runtime-upgrades-for-various-users"},"Runtime Upgrades for Various Users"),(0,o.kt)("h3",{id:"for-infrastructure-providers"},"For Infrastructure Providers"),(0,o.kt)("p",null,"Infrastructure services include but are not limited to the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-upgrade"},"Validators")),(0,o.kt)("li",{parentName:"ul"},"API services"),(0,o.kt)("li",{parentName:"ul"},"Node-as-a-Service (NaaS)"),(0,o.kt)("li",{parentName:"ul"},"General infrastructure management (e.g. block explorers, custodians)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/wallets"},"Wallets"))),(0,o.kt)("p",null,"For validators, keeping in sync with the network is key. At times, upgrades will require validators\nto upgrade their clients within a specific time frame, for example if a release includes breaking\nchanges to networking. It is essential to check the release notes, starting with the upgrade\npriority and acting accordingly."),(0,o.kt)("p",null,"General infrastructure providers, aside from following the\nPolkadot releases and upgrading in a timely\nmanner, should monitor changes to runtime events and auxiliary tooling, such as the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar"),"."),(0,o.kt)("p",null,"Transactions constructed for runtime ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," will not work for any other runtime ",(0,o.kt)("inlineCode",{parentName:"p"},">n"),". If a runtime\nupgrade occurs before broadcasting a previously constructed transaction, you will need to\nreconstruct it with the appropriate runtime version and corresponding metadata."),(0,o.kt)("h3",{id:"for-nominators"},"For ",(0,o.kt)("a",{parentName:"h3",href:"/docs/maintain-guides-how-to-nominate-polkadot"},"Nominators")),(0,o.kt)("p",null,"Runtime upgrades don't require any actions by a nominator, though it is always encouraged to keep\nup-to-date and participate with the latest runtime upgrade motions and releases, while keeping an\neye on how the nodes on the network are reacting to a new upgrade."),(0,o.kt)("h2",{id:"monitoring-changes"},"Monitoring Changes"),(0,o.kt)("p",null,"You can monitor the chain for upcoming upgrades. The client release notes include the hashes of any\nproposals related to any on-chain upgrades for easy matching. Monitor the chain for:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"democracy(Started)")," events and log ",(0,o.kt)("inlineCode",{parentName:"li"},"index")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"blockNumber"),". This event indicates that a\nreferendum has started (although does not mean that it is a runtime upgrade). Get the referendum\ninfo","*","; it should have a status of ",(0,o.kt)("inlineCode",{parentName:"li"},"Ongoing"),". Find the ending block number (",(0,o.kt)("inlineCode",{parentName:"li"},"end"),") and the\nenactment ",(0,o.kt)("inlineCode",{parentName:"li"},"delay")," (delay). If the referendum passes, it will execute on block number\n",(0,o.kt)("inlineCode",{parentName:"li"},"end + delay"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"democracy(Passed)"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"democracy(NotPassed)"),", or, ",(0,o.kt)("inlineCode",{parentName:"li"},"democracy(Cancelled)")," events citing the index.\nIf ",(0,o.kt)("inlineCode",{parentName:"li"},"Passed"),", you need to look at the ",(0,o.kt)("inlineCode",{parentName:"li"},"scheduler(Scheduled)")," event in the same block for the\nenactment block."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"democracy(PreimageNoted)")," events with the same hash as the ",(0,o.kt)("inlineCode",{parentName:"li"},"ReferendumInfoOf(index)")," item. This\nmay be up to the last block before execution, but it will not work if this is missing."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"democracy(Executed)")," events for actual execution. In the case of a runtime upgrade, there will\nalso be a ",(0,o.kt)("inlineCode",{parentName:"li"},"system(CodeUpdated)")," event.")),(0,o.kt)("p",null,"You can also monitor ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/"},"Polkassembly")," for discussions on on-chain\nproposals and referenda."),(0,o.kt)("p",null,"*"," E.g. via ",(0,o.kt)("inlineCode",{parentName:"p"},"pallets/democracy/storage/ReferendumInfoOf?key1=index&at=blockNumber")," on Sidecar."))}m.isMDXComponent=!0},87390:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/runtime-node-version-2903ab51ac01ad44e6424cafc0f63fdf.png"}}]);