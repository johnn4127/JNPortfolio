"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_ref-selector_RefSelector_tsx"],{78212:(e,t,n)=>{n.d(t,{$_:()=>a.$_,A4:()=>a.A4,AT:()=>a.AT,BK:()=>a.BK,By:()=>a.By,C2:()=>a.C2,C9:()=>a.C9,CY:()=>a.CY,Cv:()=>a.Cv,DG:()=>a.DG,DW:()=>a.DW,DX:()=>a.DX,ER:()=>a.ER,FL:()=>a.FL,Fe:()=>a.Fe,GO:()=>a.GO,GX:()=>a.GX,Gr:()=>r.Gr,H7:()=>a.H7,HK:()=>a.HK,HY:()=>a.HY,IU:()=>a.IU,IY:()=>a.IY,J9:()=>a.J9,Jb:()=>a.Jb,Jw:()=>a.Jw,KL:()=>a.KL,Kl:()=>a.Kl,Lv:()=>a.Lv,Mf:()=>r.Mf,N2:()=>a.N2,NS:()=>a.NS,Ns:()=>a.Ns,OI:()=>a.OI,QD:()=>a.QD,QY:()=>a.QY,Q_:()=>a.Q_,Qi:()=>a.Qi,S$:()=>a.S$,SV:()=>a.SV,SY:()=>a.SY,U:()=>a.U,UY:()=>a.UY,Uc:()=>a.Uc,V6:()=>a.V6,Vr:()=>a.Vr,WG:()=>a.WG,WO:()=>a.WO,Z0:()=>a.Z0,ZH:()=>a.ZH,ZI:()=>a.ZI,Zv:()=>a.Zv,aP:()=>a.aP,a_:()=>a.a_,aw:()=>a.aw,cN:()=>a.cN,cb:()=>a.cb,d6:()=>a.d6,dQ:()=>a.dQ,db:()=>a.db,em:()=>a.em,eq:()=>a.eq,f5:()=>a.f5,gX:()=>a.gX,gx:()=>a.gx,iT:()=>a.iT,j6:()=>a.j6,j9:()=>r.j9,jP:()=>a.jP,jS:()=>a.jS,lr:()=>a.lr,mE:()=>a.mE,mY:()=>a.mY,oA:()=>a.oA,p1:()=>a.p1,pt:()=>a.pt,sA:()=>a.sA,t4:()=>a.t4,ti:()=>a.ti,u_:()=>a.u_,v5:()=>a.v5,vf:()=>a.vf,w2:()=>a.w2,wu:()=>a.wu,wy:()=>a.wy,xR:()=>a.xR,xv:()=>a.xv,zP:()=>a.zP,zf:()=>a.zf,zh:()=>a.zh});var r=n(86721),a=n(10866)},10866:(e,t,n)=>{n.d(t,{$_:()=>X,A4:()=>ek,AT:()=>x,BK:()=>eR,By:()=>es,C2:()=>U,C9:()=>L,CY:()=>C,Cv:()=>B,DG:()=>ed,DW:()=>c,DX:()=>J,ER:()=>Q,FL:()=>j,Fe:()=>eZ,GO:()=>ef,GX:()=>a,H7:()=>O,HK:()=>ec,HY:()=>w,IU:()=>ev,IY:()=>I,J9:()=>W,Jb:()=>e_,Jw:()=>eE,KL:()=>P,Kl:()=>ey,Lv:()=>q,N2:()=>eo,NS:()=>V,Ns:()=>eI,OI:()=>A,QD:()=>G,QY:()=>D,Q_:()=>eT,Qi:()=>k,S$:()=>z,SV:()=>F,SY:()=>ew,U:()=>el,UY:()=>ea,Uc:()=>eN,V6:()=>p,Vr:()=>eh,WG:()=>o,WO:()=>eD,Z0:()=>eu,ZH:()=>m,ZI:()=>eS,Zv:()=>f,aP:()=>ez,a_:()=>er,aw:()=>e$,cN:()=>eb,cb:()=>eO,d6:()=>$,dQ:()=>y,db:()=>en,em:()=>ei,eq:()=>eL,f5:()=>eA,gX:()=>eC,gx:()=>s,iT:()=>d,j6:()=>M,jP:()=>Z,jS:()=>g,lr:()=>l,mE:()=>K,mY:()=>i,oA:()=>eg,p1:()=>ep,pt:()=>eF,sA:()=>N,t4:()=>v,ti:()=>R,u_:()=>ex,v5:()=>b,vf:()=>em,w2:()=>E,wu:()=>ee,wy:()=>S,xR:()=>et,xv:()=>T,zP:()=>h,zf:()=>u,zh:()=>_});var r=n(86721);let a=({searchTerm:e})=>`/search?q=${(0,r.j9)(`${e}`)}&type=code`,i=({owner:e,repo:t,searchTerm:n})=>`/search?q=${(0,r.j9)(`repo:${e}/${t} ${n}`)}&type=code`,s=()=>"/search",o=()=>"/search/advanced",c=()=>"/search/stats",l=({owner:e})=>`/${(0,r.j9)(e)}`,u=({owner:e})=>`/${(0,r.j9)(e)}.png`,h=({owner:e})=>`/users/${(0,r.j9)(e)}/hovercard`,d=({owner:e,team:t})=>`/orgs/${(0,r.j9)(e)}/teams/${(0,r.j9)(t)}/hovercard`,f=({owner:e})=>`/orgs/${(0,r.j9)(e)}/hovercard`,m=({userId:e})=>`/hovercards?user_id=${e}`;function j({owner:e,repo:t,action:n}){return n?`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/${n}`:`/${(0,r.j9)(e)}/${(0,r.j9)(t)}`}let p=({owner:e,repo:t})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/stats`,$=({owner:e,repo:t})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/graphs/participation`,g=({owner:e,repo:t,refName:n})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/branches/${(0,r.j9)(n)}/rename_ref_check`,x=({owner:e,repo:t,refName:n})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/branches/${(0,r.j9)(n)}`,y=({owner:e,repo:t})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/branches/check_tag_name_exists`,b=({owner:e,repo:t,branch:n})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/tree/${(0,r.j9)(n)}`,w=({owner:e,repo:t,tag:n})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/releases/tag/${(0,r.j9)(n)}`,S=({owner:e,repo:t})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/invitations`,C=({owner:e,repo:t,branchName:n})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/settings/branch_protection_rules/new?branch_name=${(0,r.j9)(n)}`,L=({owner:e,repo:t,commitish:n,filePath:a,lineNumber:i,plain:s})=>{let o=s?`?plain=${s}`:"",c=i?`#L${i}`:"";return`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/blob/${(0,r.j9)(n)}/${(0,r.j9)(a)}${o}${c}`},R=({owner:e,repo:t,commitish:n,filePath:a,lineNumber:i})=>{let s=i?`#L${i}`:"";return`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/edit/${(0,r.j9)(n)}/${(0,r.j9)(a)}${s}`},v=({owner:e,repo:t,commitish:n,filePath:a,lineNumber:i})=>{let s=i?`#L${i}`:"";return`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/blame/${(0,r.j9)(n)}/${(0,r.j9)(a)}${s}`};function T({login:e}){return`/users/${(0,r.j9)(e)}/dismiss_repository_notice`}function _({repo:e,commitish:t,path:n}){let a=["",e.ownerLogin,e.name,"deferred-metadata",t,n];return a.map(r.j9).join("/")}function I(e){return`/${(0,r.j9)(e.ownerLogin)}/${(0,r.j9)(e.name)}`}function N(e){return`/${(0,r.j9)(e.ownerLogin)}/${(0,r.j9)(e.name)}?files=1`}function k({repo:e,commitish:t,action:n,path:a}){let i=["",e.ownerLogin,e.name,n,t];return a&&"/"!==a&&i.push(a),i.map(r.j9).join("/")}let O=({owner:e,repo:t})=>`/${e}/${t}/sidepanel-metadata`,Z=({owner:e,repo:t,commitish:n})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/commit/${n}`,E=({owner:e,repo:t,ref:n,path:a})=>{let i=`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/commits`;return n?a?`${i}/${(0,r.j9)(n)}/${(0,r.j9)(H(a))}`:`${i}/${(0,r.j9)(n)}`:i};function F({repo:e,branch:t,path:n,author:a}){let i=[e.ownerLogin,e.name,"commits",t,n].map(r.j9).join("/");return`/${i}?author=${(0,r.j9)(a)}`}function z(e,t){return`/${e.ownerLogin}/${e.name}/commit/${t}/status-details`}function A({repo:e,author:t}){let n=[e.ownerLogin,e.name];return`/${n.map(r.j9).join("/")}/commits?author=${(0,r.j9)(t)}`}let D=({owner:e,repo:t,commitish:n})=>`/${(0,r.j9)(`${e}/${t}/commit/${n}/hovercard`)}`,P=({topicName:e})=>`/topics/${e}`,K=({categoryName:e})=>`/marketplace/category/${Y(e)}`,W=({slug:e})=>`/marketplace/actions/${(0,r.j9)(e)}`,B=({owner:e,repo:t,commitish:n,filePath:r})=>`/${e}/${t}/codeowners-validity/${n}/${r}`;function H(e){return e.startsWith("/")?e.slice(1):e}function Y(e){return e.replace(/[^a-zA-Z0-9]/g,"-").toLowerCase()}function U(e){return e.split("/").slice(0,-1).join("/")}function G({repo:e,baseUrl:t="",branch:n,filter:a,pagination:i,perPage:s=30}){let o=[e.ownerLogin,e.name,"activity"],c=[];return n&&c.push(`ref=${(0,r.j9)(n)}`),a&&(a.activityType&&"all"!==a.activityType.toLocaleLowerCase()&&c.push(`activity_type=${(0,r.j9)(a.activityType)}`),a.actor?.login&&c.push(`actor=${(0,r.j9)(a.actor.login)}`),a.timePeriod&&"all"!==a.timePeriod.toLocaleLowerCase()&&c.push(`time_period=${(0,r.j9)(a.timePeriod)}`),a.sort&&"desc"!==a.sort.toLocaleLowerCase()&&c.push(`sort=${(0,r.j9)(a.sort)}`)),i&&(i.after?c.push(`after=${(0,r.j9)(i.after)}`):i.before&&c.push(`before=${i.before}`)),s&&30!==s&&c.push(`per_page=${s}`),`${t}/${o.map(r.j9).join("/")}${c.length>0?`?${c.join("&")}`:""}`}function Q({repo:e,baseUrl:t="",branch:n,timePeriod:a}){let i=[e.ownerLogin,e.name,"activity","actors"],s=[];return n&&s.push(`ref=${(0,r.j9)(n)}`),a&&s.push(`time_period=${(0,r.j9)(a)}`),`${t}/${i.map(r.j9).join("/")}${s.length>0?`?${s.join("&")}`:""}`}function V(){return"insights/actors"}function M({repo:e,base:t,head:n}){let a=[e.ownerLogin,e.name,"compare"].map(r.j9).join("/"),i=t?`${(0,r.j9)(t)}...${(0,r.j9)(n)}`:(0,r.j9)(n);return`/${a}/${i}`}function X({repo:e,base:t,head:n}){let a=[e.ownerLogin,e.name,"branches","pre_mergeable"].map(r.j9).join("/"),i=`${(0,r.j9)(t)}...${(0,r.j9)(n)}`;return`/${a}/${i}`}function q(e,t){return`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/pulls`}function J(e,t){return`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/stargazers`}function ee({repo:e,refName:t}){return`/${[e.ownerLogin,e.name,"pull","new",t].map(r.j9).join("/")}`}function et({repo:e,number:t}){return`/${[e.ownerLogin,e.name,"pull",t.toString()].map(r.j9).join("/")}`}function en({repo:e,refName:t,discard:n}){return`/${[e.ownerLogin,e.name,"branches","fetch_and_merge",t].map(r.j9).join("/")}${n?"?discard_changes=true":""}`}function er({repo:e,commitOid:t,includeDirectories:n=!1}){let a=`/${[e.ownerLogin,e.name,"tree-list",t].map(r.j9).join("/")}`;return n?`${a}?include_directories=${n}`:a}function ea({repo:e,type:t,q:n,language:a,row:i,column:s,ref:o,path:c,codeNavContext:l}){let u=[e.ownerLogin,e.name].map(r.j9).join("/");return`/${u}/find-react-${t}?q=${encodeURIComponent(n)}&language=${encodeURIComponent(a)}&row=${i}&col=${s}&ref=${o}&blob_path=${encodeURIComponent(c)}&code_nav_context=${encodeURIComponent(l)}`}function ei(e,t){return`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/issues`}let es=({owner:e,repo:t,issueNumber:n})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/issues/${n}`,eo=({owner:e,repo:t,issueNumber:n,contentId:a})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/issues/${n}#issuecomment-${a}`,ec=({owner:e,repo:t,issueNumber:n,contentId:a})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/issues/${n}#issue-${a}`,el=({owner:e,repo:t,issueNumber:n})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/issues/${n}/hovercard`,eu=({owner:e,repo:t,pullRequestNumber:n})=>`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/pull/${n}/hovercard`;function eh(e,t,n){let r=ej(e,"/",4),a=e.substring(r);return a===`/${t}`?"":a.startsWith(`/${t}/`)?a.substring(t.length+2):n}function ed(e,t){return`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/community/code-of-conduct/new`}function ef(e,t){return`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/community/license/new`}function em(e,t){return`/${(0,r.j9)(e)}/${(0,r.j9)(t)}/security/policy`}function ej(e,t,n){return e.split(t,n).join(t).length}let ep=e=>`/${(0,r.j9)(`${e.ownerLogin}/${e.name}`)}/settings/transfer`,e$=()=>"/repositories/check-name",eg=()=>"/repositories",ex=e=>`/${(0,r.j9)(`${e.ownerLogin}/${e.name}`)}/settings/transfer`,ey=e=>`/${(0,r.j9)(`${e.ownerLogin}/${e.name}`)}/settings/abort_transfer`,eb=()=>"/new/import",ew=()=>"/repositories/new/templates",eS=()=>"/repositories/forms/owner_items",eC=e=>`/repositories/forms/fork_owner_items?repo_id=${e}`,eL=e=>`/repositories/forms/owner_detail?owner=${(0,r.j9)(e)}`,eR=e=>`/${(0,r.j9)(e.ownerLogin)}/${(0,r.j9)(e.name)}/graphs/contributors`,ev=e=>`/${(0,r.j9)(e.ownerLogin)}/${(0,r.j9)(e.name)}/settings/access`;function eT({org:e,propertyName:t}){let n=`/organizations/${(0,r.j9)(e)}/settings/custom-properties`;return t?`${n}/${(0,r.j9)(t)}`:n}function e_({org:e,propertyName:t}){let n=`/organizations/${(0,r.j9)(e)}/settings/custom-property`;return t?`${n}/${(0,r.j9)(t)}`:n}function eI({org:e}){return`/organizations/${(0,r.j9)(e)}/settings/custom-properties/values`}function eN({org:e}){return`/organizations/${(0,r.j9)(e)}/settings/custom-properties/list-repos-values`}function ek({org:e}){return`/organizations/${(0,r.j9)(e)}/settings/custom-properties`}function eO({org:e,propertyName:t}){return["","organizations",(0,r.j9)(e),"settings","custom-properties-usage",(0,r.j9)(t)].join("/")}function eZ({owner:e,repo:t}){return`/${(0,r.j9)(`${e}/${t}`)}/fork`}function eE({owner:e,repo:t}){return`/${(0,r.j9)(`${e}/${t}`)}/forks`}function eF({org:e}){return e?`/organizations/${(0,r.j9)(e)}/repositories/new`:"/new"}function ez({org:e}){return`/orgs/${(0,r.j9)(e)}/repos_list`}function eA({topic:e,org:t}){return`/search?q=topic%3A${(0,r.j9)(e)}+org%3A${(0,r.j9)(t)}&type=Repositories`}function eD({repo:e,pagination:t={before:null,after:null},perPage:n=30}){let a=[e.ownerLogin,e.name,"attestations"],i=[];return t&&(t.after?i.push(`after=${(0,r.j9)(t.after)}`):t.before&&i.push(`before=${(0,r.j9)(t.before)}`)),n&&30!==n&&i.push(`per_page=${n}`),`/${a.map(r.j9).join("/")}${i.length>0?`?${i.join("&")}`:""}`}},86721:(e,t,n)=>{n.d(t,{Gr:()=>a,Mf:()=>i,j9:()=>s});var r=n(86283);function a(e,t,n){let a=e(t),i=new URL(a,r.ssrSafeLocation.origin||"https://github.com");for(let[e,t]of(a===r.ssrSafeLocation.pathname&&(i.search=new URLSearchParams(r.ssrSafeLocation.search).toString()),Object.entries(n||{})))null==t?i.searchParams.delete(e):i.searchParams.set(e,t.toString());return i}function i(e,t,n){let r=a(e,t,n);return r.href.replace(r.origin,"")}function s(e){return e.split("/").map(encodeURIComponent).join("/")}},70567:(e,t,n)=>{n.d(t,{W:()=>SearchIndex,r:()=>r});var r,a=n(44544),i=n(71643);let{getItem:s,setItem:o,removeItem:c}=(0,a.Z)("localStorage",{throwQuotaErrorsOnSet:!0});!function(e){e.Branch="branch",e.Tag="tag"}(r||(r={}));let SearchIndex=class SearchIndex{render(){this.selector.render()}async fetchData(){try{if(!this.isLoading||this.fetchInProgress)return;if(!this.bootstrapFromLocalStorage()){this.fetchInProgress=!0,this.fetchFailed=!1;let e=await fetch(`${this.refEndpoint}?type=${this.refType}`,{headers:{Accept:"application/json"}});await this.processResponse(e)}this.isLoading=!1,this.fetchInProgress=!1,this.render()}catch(e){this.fetchInProgress=!1,this.fetchFailed=!0}}async processResponse(e){if(this.emitStats(e),!e.ok){this.fetchFailed=!0;return}let t=e.clone(),n=await e.json();this.knownItems=n.refs,this.cacheKey=n.cacheKey,this.flushToLocalStorage(await t.text())}emitStats(e){if(!e.ok){(0,i.b)({incrementKey:"REF_SELECTOR_BOOT_FAILED"},!0);return}switch(e.status){case 200:(0,i.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_UNCACHED_HTTP"});break;case 304:(0,i.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_HTTP_CACHE"});break;default:(0,i.b)({incrementKey:"REF_SELECTOR_UNEXPECTED_RESPONSE"})}}search(e){let t;if(this.searchTerm=e,""===e){this.currentSearchResult=this.knownItems;return}let n=[],r=[];for(let a of(this.exactMatchFound=!1,this.knownItems))if(!((t=a.indexOf(e))<0)){if(0===t){e===a?(r.unshift(a),this.exactMatchFound=!0):r.push(a);continue}n.push(a)}this.currentSearchResult=[...r,...n]}bootstrapFromLocalStorage(){let e=s(this.localStorageKey);if(!e)return!1;let t=JSON.parse(e);return t.cacheKey===this.cacheKey&&"refs"in t?(this.knownItems=t.refs,this.isLoading=!1,(0,i.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_LOCALSTORAGE"}),!0):(c(this.localStorageKey),!1)}async flushToLocalStorage(e){try{o(this.localStorageKey,e)}catch(t){if(t.message.toLowerCase().includes("quota")){this.clearSiblingLocalStorage(),(0,i.b)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_OVERFLOWED"});try{o(this.localStorageKey,e)}catch(e){e.message.toLowerCase().includes("quota")&&(0,i.b)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_GAVE_UP"})}}else throw t}}clearSiblingLocalStorage(){for(let e of Object.keys(localStorage))e.startsWith(SearchIndex.LocalStoragePrefix)&&c(e)}clearLocalStorage(){c(this.localStorageKey)}get localStorageKey(){return`${SearchIndex.LocalStoragePrefix}:${this.nameWithOwner}:${this.refType}`}constructor(e,t,n,r,a){this.knownItems=[],this.currentSearchResult=[],this.exactMatchFound=!1,this.searchTerm="",this.isLoading=!0,this.fetchInProgress=!1,this.fetchFailed=!1,this.refType=e,this.selector=t,this.refEndpoint=n,this.cacheKey=r,this.nameWithOwner=a}};SearchIndex.LocalStoragePrefix="ref-selector"},62073:(e,t,n)=>{n.d(t,{D:()=>o});var r=n(67294),a=n(78249),i=n(98224);function s(){let e=(0,r.useContext)(i.kb);return e}function o(e,t,n=[]){let o=(0,r.useCallback)(e,n),c=s(),l=(0,r.useRef)(c===i.i$.ClientRender),[u,h]=(0,r.useState)(()=>c===i.i$.ClientRender?o():t),d=(0,r.useCallback)(()=>{h(o)},[o]);return(0,a.g)(()=>{l.current||h(o),l.current=!1},[o,...n]),[u,d]}},79431:(e,t,n)=>{n.d(t,{H:()=>u});var r,a,i,s=n(85893),o=n(42483),c=n(67294),l=n(78720);function u({items:e,itemHeight:t,sx:n,renderItem:r,makeKey:a}){let i=(0,c.useRef)(null),o=(0,c.useCallback)(()=>t,[t]),u=(0,l.o)({parentRef:i,size:e.length,estimateSize:o});return(0,s.jsx)(h,{ref:i,sx:n,virtualizer:u,children:u.virtualItems.map(t=>(0,s.jsx)(d,{virtualRow:t,children:r(e[t.index])},a(e[t.index])))})}let h=c.forwardRef(function({children:e,sx:t,virtualizer:n},r){return(0,s.jsx)(o.Z,{ref:r,sx:t,children:(0,s.jsx)(o.Z,{sx:{height:n.totalSize,width:"100%",position:"relative"},children:e})})});function d({children:e,virtualRow:t}){return(0,s.jsx)(o.Z,{sx:{position:"absolute",top:0,left:0,width:"100%",height:`${t.size}px`,transform:`translateY(${t.start}px)`},children:e})}try{(r=u).displayName||(r.displayName="FixedSizeVirtualList")}catch{}try{(a=VirtualListContainerInner).displayName||(a.displayName="VirtualListContainerInner")}catch{}try{(i=d).displayName||(i.displayName="ItemContainer")}catch{}},79515:(e,t,n)=>{n.d(t,{h:()=>o});var r,a=n(85893),i=n(42483);function s(e,t){if(!t)return[e];let n=e.toLowerCase().split(t.toLowerCase());if(n.length<2)return[e];let r=0,a=[];for(let i of n)a.push(e.substring(r,r+i.length)),r+=i.length,a.push(e.substring(r,r+t.length)),r+=t.length;return a}function o({text:e,search:t,hideOverflow:n=!1,overflowWidth:r=0}){let o=s(e,t),c=o.map((e,t)=>t%2==1?(0,a.jsx)("strong",{className:"color-fg-default",children:e},t):e),l=r?`${r}px`:void 0;return(0,a.jsx)(i.Z,{sx:{maxWidth:l,overflow:n?"hidden":"visible",textOverflow:"ellipsis",whiteSpace:"nowrap",color:t.length?"fg.muted":"fg.default"},children:c})}try{(r=o).displayName||(r.displayName="HighlightedText")}catch{}},80490:(e,t,n)=>{n.d(t,{ox:()=>ey,cq:()=>eg,li:()=>ex,Z7:()=>e$});var r,a,i,s,o,c,l,u,h,d,f,m,j,p,$,g,x,y,b,w=n(85893),S=n(31147),C=n(78912),L=n(51461),R=n(78212),v=n(85529),T=n(52516),_=n(42483),I=n(75308),N=n(50919),k=n(51526),O=n(74121),Z=n(98833),E=n(97011),F=n(67294),z=n(86283),A=n(62073),D=n(12470),P=n(73935);function K({isOpen:e,onDismiss:t,onConfirm:n}){let[r]=(0,A.D)(()=>document.body,null,[z.n4?.body]);return r?(0,P.createPortal)((0,w.jsxs)(D.Z,{isOpen:e,onDismiss:t,children:[(0,w.jsx)(D.Z.Header,{children:"Create branch"}),(0,w.jsxs)(_.Z,{sx:{p:3},children:[(0,w.jsx)(E.Z,{children:"A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?"}),(0,w.jsxs)(_.Z,{sx:{display:"flex",justifyContent:"flex-end",mt:3},children:[(0,w.jsx)(C.z,{onClick:t,children:"Cancel"}),(0,w.jsx)(C.z,{variant:"danger",onClick:n,sx:{ml:2},children:"Create"})]})]})]}),document.body):null}try{(r=K).displayName||(r.displayName="CheckTagNameDialog")}catch{}var W=n(89445);async function B(e,t){let n=new FormData;n.set("value",t);let r=await (0,W.Q)(e,{method:"POST",body:n,headers:{Accept:"application/json"}});return!!r.ok&&!!await r.text()}async function H(e,t,n){let r=new FormData;r.set("name",t),r.set("branch",n);let a=await (0,W.Q)(e,{method:"POST",body:r,headers:{Accept:"application/json"}});if(a.ok)return{success:!0,name:(await a.json()).name};try{let{error:e}=await a.json();if(e)return{success:!1,error:e};throw Error("Unknown response from create branch API")}catch{return{success:!1,error:"Something went wrong."}}}var Y=n(2708),U=n(22114);function G(e){let{hotKey:t,onOpenChange:n,size:r,currentCommitish:a,refType:i,children:s,preventClosing:o,inputRef:c,overlayOpen:l,onOverlayChange:u,focusTrapEnabled:h=!0,buttonClassName:d,allowResizing:f,useFocusZone:m}=e,j=e.idEnding?`-${e.idEnding}`:`-${Date.now()}`,p=(0,F.useRef)(`branch-picker${j}`),$=(0,F.useCallback)(e=>{u(e),n?.(e)},[n,u]),g=(0,F.useMemo)(()=>h?{initialFocusRef:c}:{initialFocusRef:c,disabled:!0},[h,c]);return(0,w.jsx)(Y.w,{open:l,overlayProps:{role:"dialog",width:"medium"},onOpen:()=>$(!0),onClose:()=>!o&&$(!1),renderAnchor:e=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(C.z,{...e,"data-hotkey":t,size:r,sx:{svg:{color:"fg.muted"},display:"flex",minWidth:f?0:void 0,"> span":{width:"inherit"}},trailingIcon:v.TriangleDownIcon,"aria-label":`${a} ${i}`,"data-testid":"anchor-button",id:p.current,className:d,children:(0,w.jsxs)(_.Z,{sx:{display:"flex",width:"100%"},children:[(0,w.jsx)(_.Z,{sx:{mr:1,color:"fg.muted"},children:"tag"===i?(0,w.jsx)(v.TagIcon,{size:"small"}):(0,w.jsx)(v.GitBranchIcon,{size:"small"})}),(0,w.jsx)(_.Z,{sx:{fontSize:1,minWidth:0,maxWidth:f?void 0:125,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:(0,w.jsxs)(E.Z,{sx:{minWidth:0},children:["\xa0",a]})})]})}),(0,w.jsx)("button",{hidden:!0,"data-hotkey":t,onClick:()=>$(!0),"data-hotkey-scope":"read-only-cursor-text-area"})]}),focusTrapSettings:g,focusZoneSettings:m?{bindKeys:U.Qw.ArrowAll|U.Qw.Tab}:{disabled:!0},children:(0,w.jsx)(_.Z,{"data-testid":"overlay-content","aria-labelledby":p.current,id:"selectPanel",children:s})})}try{(a=G).displayName||(a.displayName="RefSelectorAnchoredOverlay")}catch{}function Q({text:e,onClick:t,href:n,sx:r}){let a=(0,w.jsx)(_.Z,{sx:{...r},children:e}),i={sx:{minWidth:0}};return n?(0,w.jsx)(T.S.LinkItem,{role:"link",href:n,onClick:()=>t?.(),...i,children:a}):(0,w.jsx)(T.S.Item,{role:"button",onSelect:()=>t?.(),...i,children:a})}try{(i=Q).displayName||(i.displayName="RefSelectorFooter")}catch{}var V=n(79431),M=n(63309),X=n(79515);let q=F.memo(function({isCurrent:e,isDefault:t,href:n,gitRef:r,filterText:a,ariaPosInSet:i,ariaSetSize:s,onSelect:o,onClick:c}){let l=(0,w.jsx)(J,{gitRef:r,isDefault:t,isCurrent:e,filterText:a}),u={"aria-checked":e,"aria-posinset":i,"aria-setsize":s,sx:{minWidth:0},onSelect:()=>o?.(r),onClick:()=>c?.(r)};return n?(0,w.jsx)(T.S.LinkItem,{href:n,role:"menuitemradio",...u,children:l}):(0,w.jsx)(T.S.Item,{...u,children:l})}),J=F.memo(function({isCurrent:e,isDefault:t,gitRef:n,filterText:r,showLeadingVisual:a=!0}){return(0,w.jsxs)(_.Z,{style:{display:"flex",justifyContent:"space-between"},children:[(0,w.jsxs)(_.Z,{style:{display:"flex",minWidth:0,alignItems:"flex-end"},children:[a&&(0,w.jsx)(Z.Z,{icon:v.CheckIcon,"aria-hidden":!0,sx:{pr:1,visibility:e?void 0:"hidden"}}),(0,w.jsx)(X.h,{hideOverflow:!0,search:r,text:n},n)]}),t&&(0,w.jsx)(M.Z,{children:"default"})]})});try{(s=q).displayName||(s.displayName="RefItem")}catch{}try{(o=J).displayName||(o.displayName="RefItemContent")}catch{}function ee(e){return e.refs.length>20?(0,w.jsx)(en,{...e}):(0,w.jsx)(et,{...e})}function et({refs:e,defaultBranch:t,currentCommitish:n,getHref:r,filterText:a,onSelectItem:i}){return(0,w.jsx)(_.Z,{sx:{maxHeight:330,overflowY:"auto"},children:e.map(s=>(0,w.jsx)(q,{href:r?.(s),isCurrent:n===s,isDefault:t===s,filterText:a,gitRef:s,onSelect:i,onClick:i,ariaPosInSet:e.indexOf(s)+1,ariaSetSize:e.length},s))})}function en({refs:e,defaultBranch:t,currentCommitish:n,getHref:r,filterText:a,onSelectItem:i}){return(0,w.jsx)(V.H,{items:e,itemHeight:32,sx:{maxHeight:330,overflowY:"auto"},makeKey:e=>e,renderItem:s=>(0,w.jsx)(q,{href:r?.(s),isCurrent:n===s,isDefault:t===s,filterText:a,gitRef:s,onSelect:i,onClick:i,ariaPosInSet:e.indexOf(s)+1,ariaSetSize:e.length},s)})}try{(c=ee).displayName||(c.displayName="RefsList")}catch{}try{(l=et).displayName||(l.displayName="FullRefsList")}catch{}try{(u=en).displayName||(u.displayName="VirtualRefsList")}catch{}var er=n(70567);function ea(e,t,n,r,a,i){let[s,o]=(0,F.useState)({status:"uninitialized",refs:[],showCreateAction:!1,searchIndex:null}),c=(0,F.useRef)({render:()=>{o(es(u.current,i))}}),l=(0,F.useRef)({render:()=>{o(es(h.current,i))}}),u=eo(()=>ei(e,t,n,"branch",c.current)),h=eo(()=>ei(e,t,n,"tag",l.current));return(0,F.useEffect)(()=>{let a=`${t}/${n}`;u.current.nameWithOwner!==a&&(u.current=ei(e,t,n,"branch",c.current)),h.current.nameWithOwner!==a&&(h.current=ei(e,t,n,"tag",l.current)),async function(){let e="branch"===r?u.current:h.current;e.render(),await e.fetchData(),e.search(""),e.render()}()},[e,t,n,r,u,h]),(0,F.useEffect)(()=>{let e="branch"===r?u.current:h.current;e.search(a),e.render()},[a,r,u,h]),s}function ei(e,t,n,r,a){return new er.W("branch"===r?er.r.Branch:er.r.Tag,a,(0,R.FL)({owner:t,repo:n,action:"refs"}),e,`${t}/${n}`)}function es(e,t){let n=e.fetchFailed?"failed":e.isLoading?"loading":"loaded",r=e.currentSearchResult,a=e.refType===er.r.Branch&&t&&e.searchTerm.length>0&&!e.exactMatchFound;return{status:n,refs:r,showCreateAction:a,searchIndex:e}}function eo(e){let t=(0,F.useRef)();return t.current||(t.current=e()),t}function ec(e){let{cacheKey:t,owner:n,repo:r,canCreate:a,types:i,hotKey:s,onOpenChange:o,size:c,getHref:l,onBeforeCreate:u,onRefTypeChanged:h,currentCommitish:d,onCreateError:f,onSelectItem:m,closeOnSelect:j,selectedRefType:p,customFooterItemProps:$,buttonClassName:g,allowResizing:x,idEnding:y,useFocusZone:b}=e,[S,C]=(0,F.useState)(""),L=(0,F.useRef)(null),v=(0,F.useRef)(null),[T,_]=(0,F.useState)(!1),[I,N]=(0,F.useState)(!0),[k,O]=(0,F.useState)(!1),[Z,E]=(0,F.useState)(p??(i??e$)[0]),z=ea(t,n,r,Z,S,a),A=(0,R.FL)({owner:n,repo:r,action:"branches"}),D=(0,R.dQ)({owner:n,repo:r}),P=(0,F.useCallback)(async()=>{u?.(S);let e=await H(A,S,d);e.success?l&&(z.searchIndex?.clearLocalStorage(),window.location.href=l(e.name)):f?.(e.error)},[u,S,A,d,l,f,z.searchIndex]),W=(0,F.useCallback)(async()=>{if(await B(D,S)){O(!0),N(!1);return}O(!1),N(!1),P()},[D,S,P,O]),Y=(0,F.useCallback)(e=>{E(e),h?.(e)},[E,h]);function U(){_(!1)}let Q=(0,F.useCallback)((e,t)=>{m?.(e,t),U()},[m]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(G,{refType:Z,currentCommitish:d,focusTrapEnabled:I,preventClosing:k,size:c,onOpenChange:o,hotKey:s,inputRef:L,overlayOpen:T,onOverlayChange:_,buttonClassName:g,allowResizing:x,idEnding:y,useFocusZone:b,children:(0,w.jsx)(el,{filterText:S,onFilterChange:C,refType:Z,selectedRefType:Z,onRefTypeChange:Y,refsState:z,onCreateError:e.onCreateError,showTagWarningDialog:k,setShowTagWarningDialog:O,onCreateBranch:W,inputRef:L,createButtonRef:v,onSelectItem:Q,closeOnSelect:j,closeRefSelector:U,customFooterItemProps:$,...e})}),k&&(0,w.jsx)(K,{isOpen:k,onDismiss:()=>{O(!1),v.current?.focus()},onConfirm:P})]})}function el({canCreate:e,currentCommitish:t,defaultBranch:n,filterText:r,getHref:a,hideShowAll:i,onSelectItem:s,closeOnSelect:o,closeRefSelector:c,onFilterChange:l,onRefTypeChange:u,owner:h,selectedRefType:d,refsState:f,refType:m,repo:j,types:p,onCreateBranch:$,inputRef:g,createButtonRef:x,customFooterItemProps:y,viewAllJustify:b}){let{refs:S,showCreateAction:C,status:L}=f;return(0,w.jsxs)(T.S,{showDividers:!0,children:[(0,w.jsxs)(_.Z,{sx:{borderBottom:"1px solid",borderColor:"border.subtle",pb:2},children:[(0,w.jsxs)(_.Z,{sx:{display:"flex",pb:2,px:2,justifyContent:"space-between",alignItems:"center"},children:[(0,w.jsx)(I.Z,{as:"h5",sx:{pl:2,fontSize:"inherit"},children:ed(p??e$)}),(0,w.jsx)(N.h,{"aria-label":"Cancel",variant:"invisible",icon:v.XIcon,sx:{color:"fg.muted"},onClick:c})]}),(0,w.jsx)(eu,{defaultText:r,refType:m,canCreate:e,onFilterChange:l,ref:g})]}),(0,w.jsxs)(_.Z,{sx:{pt:2,pb:C&&0===S.length?0:2},children:[(p??e$).length>1&&(0,w.jsx)(_.Z,{sx:{px:2,pb:2},children:(0,w.jsx)(ex,{refType:m,onRefTypeChanged:u,sx:{mx:-2,borderBottom:"1px solid",borderColor:"border.muted","> nav":{borderBottom:"none"}}})}),"loading"===L||"uninitialized"===L?(0,w.jsx)(ef,{refType:m}):"failed"===L?(0,w.jsx)(ey,{refType:m}):0!==S.length||C?(0,w.jsx)(ee,{filterText:r,refs:S,defaultBranch:"branch"===m?n:"",currentCommitish:m===d?t:"",getHref:a,onSelectItem:e=>{s?.(e,m),o&&c()}}):(0,w.jsx)(em,{})]}),C&&(0,w.jsxs)(w.Fragment,{children:[S.length>0&&(0,w.jsx)(T.S.Divider,{sx:{marginTop:0,backgroundColor:"border.subtle"}}),(0,w.jsx)(ep,{currentCommitish:t,newRefName:r,onCreateBranch:$,createButtonRef:x})]}),(!i||y)&&(0,w.jsx)(T.S.Divider,{sx:{marginTop:C?2:0,backgroundColor:"border.subtle"}}),!i&&(0,w.jsx)(ej,{justify:b,refType:m,owner:h,repo:j,onClick:c}),y&&(0,w.jsx)(Q,{...y,onClick:function(){y?.onClick?.(),c()}})]})}let eu=(0,F.forwardRef)(eh);function eh({refType:e,canCreate:t,onFilterChange:n,defaultText:r},a){return(0,w.jsx)(_.Z,{sx:{px:2},children:(0,w.jsx)(k.Z,{leadingVisual:v.SearchIcon,value:r,sx:{width:"100%"},placeholder:"tag"===e?"Find a tag...":t?"Find or create a branch...":"Find a branch...",ref:a,onInput:e=>{let t=e.target;t instanceof HTMLInputElement&&n(t.value)}})})}function ed(e){return e.includes("branch")&&e.includes("tag")?"Switch branches/tags":e.includes("branch")?"Switch branches":e.includes("tag")?"Switch tags":void 0}function ef({refType:e}){return(0,w.jsx)(_.Z,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,w.jsx)(O.Z,{size:"medium","aria-label":`Loading ${"branch"===e?"branches":"tags"}...`})})}function em(){return(0,w.jsx)(_.Z,{sx:{p:3,display:"flex",justifyContent:"center"},children:"Nothing to show"})}function ej({refType:e,owner:t,repo:n,onClick:r,justify:a="start"}){let i="branch"===e?"branches":"tags";return(0,w.jsx)(T.S.LinkItem,{role:"link",href:(0,R.FL)({owner:t,repo:n,action:i}),onClick:r,sx:{display:"flex",justifyContent:"center"},children:(0,w.jsxs)(_.Z,{sx:{display:"flex",justifyContent:a},children:["View all ",i]})})}function ep({currentCommitish:e,newRefName:t,onCreateBranch:n,createButtonRef:r}){return(0,w.jsxs)(T.S.Item,{role:"button",onSelect:n,ref:r,children:[(0,w.jsx)(Z.Z,{icon:v.GitBranchIcon,sx:{mr:2,color:"fg.muted"}}),(0,w.jsx)(E.Z,{children:"Create branch\xa0"}),(0,w.jsx)(E.Z,{sx:{fontWeight:600,fontFamily:"monospace"},children:t}),(0,w.jsx)(E.Z,{children:"\xa0from\xa0"}),(0,w.jsx)(E.Z,{sx:{fontWeight:600,fontFamily:"monospace"},children:e})]})}try{(h=ec).displayName||(h.displayName="RefSelectorV1")}catch{}try{(d=el).displayName||(d.displayName="RefSelectorActionList")}catch{}try{(f=eu).displayName||(f.displayName="RefTextFilter")}catch{}try{(m=eh).displayName||(m.displayName="RefTextFilterWithRef")}catch{}try{(j=ef).displayName||(j.displayName="Loading")}catch{}try{(p=em).displayName||(p.displayName="RefsZeroState")}catch{}try{($=ej).displayName||($.displayName="ViewAllRefsAction")}catch{}try{(g=ep).displayName||(g.displayName="CreateRefAction")}catch{}let e$=["branch","tag"];function eg(e){return(0,w.jsx)(ec,{...e})}function ex({refType:e,onRefTypeChanged:t,sx:n}){return(0,w.jsxs)(S.Z,{sx:{pl:2,...n},"aria-label":"Ref type",children:[(0,w.jsx)(S.Z.Link,{as:C.z,id:"branch-button","aria-controls":"branches",selected:"branch"===e,onClick:()=>t("branch"),sx:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:"Branches"}),(0,w.jsx)(S.Z.Link,{as:C.z,id:"tag-button","aria-controls":"tags",selected:"tag"===e,onClick:()=>t("tag"),sx:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:"Tags"})]})}function ey({refType:e}){return(0,w.jsxs)(L.Z,{variant:"danger",children:["Could not load ","branch"===e?"branches":"tags"]})}try{(x=eg).displayName||(x.displayName="RefSelector")}catch{}try{(y=ex).displayName||(y.displayName="RefTypeTabs")}catch{}try{(b=ey).displayName||(b.displayName="LoadingFailed")}catch{}}}]);
//# sourceMappingURL=ui_packages_ref-selector_RefSelector_tsx-0aeddf213b9c.js.map