"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_blob-anchor_ts-app_assets_modules_github_filter-sort_ts-app_assets_-e50ab6"],{56334:(e,t,n)=>{function i(e){let t=e.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);if(t){if(1===t.length){let e=c(t[0]);if(!e)return;return Object.freeze({start:e,end:e})}if(2!==t.length)return;{let e=c(t[0]),n=c(t[1]);if(!e||!n)return;return d(Object.freeze({start:e,end:n}))}}}function r(e){let{start:t,end:n}=d(e);return null!=t.column&&null!=n.column?`L${t.line}C${t.column}-L${n.line}C${n.column}`:null!=t.column?`L${t.line}C${t.column}-L${n.line}`:null!=n.column?`L${t.line}-L${n.line}C${n.column}`:t.line===n.line?`L${t.line}`:`L${t.line}-L${n.line}`}function s(e){let t=e.length<5e3&&e.match(/(file-.+?-)L\d+?/i);return t?t[1]:""}function l(e){let t=i(e),n=s(e);return{blobRange:t,anchorPrefix:n}}function a({anchorPrefix:e,blobRange:t}){return t?`#${e}${r(t)}`:"#"}function c(e){let t=e.match(/L(\d+)/),n=e.match(/C(\d+)/);return t?Object.freeze({line:parseInt(t[1]),column:n?parseInt(n[1]):null}):null}function o(e,t){let[n,i]=u(e.start,!0,t),[r,s]=u(e.end,!1,t);if(!n||!r)return;let l=i,a=s;if(-1===l&&(l=0),-1===a&&(a=r.childNodes.length),!n.ownerDocument)throw Error("DOMRange needs to be inside document");let c=n.ownerDocument.createRange();return c.setStart(n,l),c.setEnd(r,a),c}function u(e,t,n){let i=[null,0],r=n(e.line);if(!r)return i;if(null==e.column)return[r,-1];let s=e.column-1,l=h(r);for(let e=0;e<l.length;e++){let n=l[e],i=s-(n.textContent||"").length;if(0===i){let i=l[e+1];if(t&&i)return[i,0];return[n,s]}if(i<0)return[n,s];s=i}return i}function h(e){if(e.nodeType===Node.TEXT_NODE)return[e];if(!e.childNodes||!e.childNodes.length)return[];let t=[];for(let n of e.childNodes)t=t.concat(h(n));return t}function d(e){let t=[e.start,e.end];return(t.sort(f),t[0]===e.start&&t[1]===e.end)?e:Object.freeze({start:t[0],end:t[1]})}function f(e,t){return e.line===t.line&&e.column===t.column?0:e.line===t.line&&"number"==typeof e.column&&"number"==typeof t.column?e.column-t.column:e.line-t.line}n.d(t,{Dw:()=>a,G5:()=>i,M9:()=>o,n6:()=>l})},41982:(e,t,n)=>{function*i(e,t){for(let n of e){let e=t(n);null!=e&&(yield e)}}function r(e,t,n){let r=e=>{let n=t(e);return null!=n?[e,n]:null};return[...i(e,r)].sort((e,t)=>n(e[1],t[1])).map(([e])=>e)}n.d(t,{W:()=>r})},87738:(e,t,n)=>{function i(e,t,n=.1){let i=a(e,t,n);if(i&&-1===t.indexOf("/")){let r=e.substring(e.lastIndexOf("/")+1);i+=a(r,t,n)}return i}function r(e){let t=e.toLowerCase().split(""),n="";for(let e=0;e<t.length;e++){let i=t[e],r=i.replace(/[\\^$*+?.()|[\]{}]/g,"\\$&");0===e?n+=`(.*)(${r})`:n+=`([^${r}]*?)(${r})`}return RegExp(`${n}(.*?)$`,"i")}function s(e,t,n){if(t){let i=e.innerHTML.trim().match(n||r(t));if(!i)return;let s=!1,l=[];for(let e=1;e<i.length;++e){let t=i[e];t&&(e%2==0?s||(l.push("<mark>"),s=!0):s&&(l.push("</mark>"),s=!1),l.push(t))}e.innerHTML=l.join("")}else{let t=e.innerHTML.trim(),n=t.replace(/<\/?mark>/g,"");t!==n&&(e.innerHTML=n)}}n.d(t,{EW:()=>i,Qw:()=>s,qu:()=>c});let l=new Set([" ","-","_"]);function a(e,t,n=.1){let i=e;if(i===t)return 1;let r=i.length,s=0,a=0;for(let e=0;e<t.length;e++){let c=t[e],o=i.indexOf(c.toLowerCase()),u=i.indexOf(c.toUpperCase()),h=Math.min(o,u),d=h>-1?h:Math.max(o,u);if(-1===d)return 0;s+=.1,i[d]===c&&(s+=.1),0===d&&(s+=.9-n,0===e&&(a=1)),l.has(i.charAt(d-1))&&(s+=.9-n),i=i.substring(d+1,r)}let c=t.length,o=s/c,u=(o*(c/r)+o)/2;return a&&u+n<1&&(u+=n),u}function c(e,t){return e.score>t.score?-1:e.score<t.score?1:e.text<t.text?-1:e.text>t.text?1:0}},92059:(e,t,n)=>{n.d(t,{Ny:()=>s.Ny,bm:()=>r.bm,cR:()=>i.cR,e7:()=>r.e7,v:()=>r.v});var i=n(51082),r=n(59679),s=n(70049),l=n(17784)},59679:(e,t,n)=>{n.d(t,{bm:()=>CodeNavigationInfo,e7:()=>f,v:()=>d});var i=n(78212),r=n(89445),s=n(51082),l=n(70049),a=n(17784);let CodeNavigationInfo=class CodeNavigationInfo{initCodeSections(){let e=new Map,t=new Map;for(let n=0;n<this.symbols.length;n++)if(this.symbols[n].lineNumber<this.symbols[n].extent.end.line-2){let i={startLine:this.symbols[n].lineNumber,endLine:this.symbols[n].extent.end.line,index:n,collapsed:!1,level:this.symbols[n].depth};if(e.has(i.startLine)){let t=e.get(i.startLine);t.push(i),e.set(i.startLine,t)}else e.set(i.startLine,[i]);if(e.has(i.endLine)){let t=e.get(i.endLine);t.push(i),e.set(i.endLine,t)}else e.set(i.endLine,[i]);for(let e=i.startLine+1;e<i.endLine;e++)if(t.has(e)){let n=t.get(e);n.push(i),t.set(e,n)}else t.set(e,[i])}this.lineToSectionMap=t,this.codeSections=e}initSymbols(e){return e.map(e=>{let t=this.blobLines[e.identUtf16.start.lineNumber]||"",n=(0,a.sm)(e,t,{stylingDirectives:this.stylingDirectives,repo:this.repo,refInfo:this.refInfo,path:this.path});return this.lineIndexedSymbols[n.lineNumber]=n,n})}getBlobLine(e){return this.blobLines[e]||""}getSymbolOnLine(e){return this.lineIndexedSymbols[e]}initSymbolTree(){if(this.symbols){let e=[],t=this.symbols.filter(e=>"field"!==e.kind.fullName).map(t=>{let n=0;for(let i=e.length-1;i>=0;i--){let r=e[i];if(o(t,r))e.pop();else{n=e.length;break}}return e.push(t),t.setSymbolDepth(n),{symbol:t,depth:n}});this.symbolTree=[];for(let e=0;e<t.length;e++){let n=t[e];if(e+1<t.length){let i=t[e+1];if(i.depth>n.depth){let i=u(t,e);e+=h(i),this.symbolTree.push({symbol:n.symbol,isParent:!0,children:i});continue}}this.symbolTree.push({symbol:n.symbol,isParent:!1,children:[]})}}}createReferences(e){return e.map(e=>{let t=new s.i6({ident:e,repo:this.repo,refInfo:this.refInfo,path:this.path,isPlain:this.isPlain,source:s.sH.BLOB_CONTENT});return t.setSnippet(void 0,this.stylingDirectives?.[e.start.line],this.blobLines[e.start.line],void 0),t})}getReferencesToSymbol(e){let t=d(this.blobLines,(0,l.tb)(e));return this.createReferences(t)}getReferencesToSearch(e){let t=d(this.blobLines,(0,l.Ny)(e));return this.createReferences(t)}getDefinitionsAndReferences(e,t,n){this.setLoading(!0);let i=this.getAlephDefinitions(e,t,n,this.loggedIn),r=this.getAlephReferences(e,t,n,this.loggedIn),l=(async()=>{let[t,n]=await i;if("search"===n){let i=this.getLocalDefinitions(e);i.length>0&&(t=i);let r=t.find(e=>e.path===this.path&&e.repo===this.repo);r&&(t=[r]),n="search"}else{let n=this.getLocalDefinitions(e,!0);for(let i of t)""===i.kind.fullName&&i.name===e&&(i.kind=n[0]?n[0].kind:new s.cR({kind:""}))}return{definitions:t,backend:n}})(),a=(async()=>{let{definitions:t}=await l,n=t.map(e=>e.lineNumber),i=this.getReferencesToSymbol(e).filter(e=>!n.includes(e.lineNumber));return{references:i,backend:"search"}})(),c=(async()=>{let[e,t]=await r;return{references:e,backend:t}})();return{definitions:l,localReferences:a,crossReferences:c,setLoading:this.setLoading}}getLocalDefinitions(e,t=!1){let n=9,i=[];for(let r of this.symbols)r.name===e&&(r.kind.rank<n||t)&&(n=r.kind.rank,i=[r]);return i}async getAlephDefinitions(e,t,n,s){let l,o,u="search";if(""===e&&-1===t&&-1===n||!s)return[[],u];let h=(0,i.UY)({repo:this.repo,type:"definition",q:e,language:this.language,row:t,column:n,ref:this.refInfo.name,path:this.path,codeNavContext:"BLOB_VIEW"});try{l=await (0,r.v)(h)}catch(e){return[[],u]}if(!l.ok)return[[],u];try{o=await l.json()}catch(e){return[[],u]}u=c(o.backend)??"search";let d=o.payload.flatMap(e=>e).map(t=>(0,a.bo)(t,{stylingDirectives:this.stylingDirectives,repo:this.repo,refInfo:this.refInfo,path:this.path,symbol:e,backend:u}));return[d,u]}async getAlephReferences(e,t,n,s){let l,o="search";if(""===e&&-1===t&&-1===n||!s)return[[],o];let u=(0,i.UY)({repo:this.repo,type:"references",q:e,language:this.language,row:t,column:n,ref:this.refInfo.name,path:this.path,codeNavContext:"BLOB_VIEW"}),h=await (0,r.v)(u);if(!h.ok)return[[],o];try{l=await h.json()}catch(e){return[[],o]}o=c(l.backend)??"search";let d=new Set,f=e=>!!d.has(e)||(d.add(e),!1),m=l.payload.flatMap(e=>e).reduce((e,t)=>{if(t.path===this.path)return e;let n=(0,a.Rc)(t,{stylingDirectives:this.stylingDirectives,repo:this.repo,refInfo:this.refInfo,path:this.path,backend:o});return f(n.lineNumber)||e.push(n),e},[]).sort((e,t)=>e.lineNumber-t.lineNumber);return[m,o]}constructor(e,t,n,i,r,s,l,a,c,o){this.lineIndexedSymbols={},this.setLoading=o,this.setLoading(!0),this.repo=e,this.refInfo=t,this.path=n,this.loggedIn=i,this.language=a,this.blobLines=r,this.stylingDirectives=l,this.isPlain=c,this.symbols=this.initSymbols(s),this.initSymbolTree(),this.initCodeSections(),this.setLoading(!1)}};function c(e){switch(e){case"ALEPH_PRECISE":case"ALEPH_PRECISE_PREVIEW":case"ALEPH_PRECISE_DEVELOPMENT":return"precise";case"BLACKBIRD":return"search";default:return null}}function o(e,t){return e.extent.start.line===t.extent.end.line?e.extent.start.column>t.extent.end.column:e.extent.start.line>t.extent.end.line}function u(e,t){let n=[],i=e[t];for(let r=t+1;r<e.length;r++){let t=e[r];if(t.depth>i.depth){let i=u(e,r);r+=h(i),n.push({symbol:t.symbol,children:i,isParent:i.length>0})}else break}return n}function h(e){let t=e.length;for(let n=0;n<e.length;n++){let i=e[n];i.isParent&&(t+=h(i.children))}return t}function d(e,t){let n=[],i=(0,l.Pc)(t,e),r=i.next();for(;!r.done&&n.length<200;){let{column:e,columnEnd:t,line:s}=r.value;n.push({start:{line:s,column:e},end:{line:s,column:t}}),r=i.next()}return n}function f(e,t,n){if(0===e.length)return[];let i=e.length>=200,r={},s=e.reduce((e,i)=>{if(r[i.ident.start.line])return e;r[i.ident.start.line]=!0;let s=(0,l.Pc)(n,[t[i.ident.start.line]]),a=s.next();for(;!a.done&&e.length<200;){let{column:t,columnEnd:n}=a.value;e.push({start:{line:i.ident.start.line,column:t},end:{line:i.ident.start.line,column:n}}),a=s.next()}return e},[]);if(s.length<200&&i){let i=e[e.length-1].ident.start.line,r=(0,l.Pc)(n,t,i),a=r.next();for(;!a.done&&s.length<200;){let{line:e,column:t,columnEnd:n}=a.value;s.push({start:{line:e,column:t},end:{line:e,column:n}}),a=r.next()}}return s}},51082:(e,t,n)=>{n.d(t,{cR:()=>SymbolKind,i6:()=>CodeReference,lt:()=>CodeSymbol,sH:()=>i});var i,r=n(78212);!function(e){e.BLACKBIRD_SEARCH="blackbird-search",e.BLACKBIRD_ANALYSIS="blackbird-analysis",e.ALEPH_PRECISE="aleph-precise",e.BLOB_CONTENT="blob-content-search"}(i||(i={}));let SymbolKind=class SymbolKind{constructor({kind:e}){let t=s(e);this.fullName=t,this.shortName=l(t),this.plColor=a(t),this.rank=c(t)}};function s(e){switch(e){case"SYMBOL_KIND_FILE_DEF":case 12:return"file";case"SYMBOL_KIND_MODULE_DEF":case 4:return"module";case"SYMBOL_KIND_NAMESPACE_DEF":case 13:return"namespace";case"SYMBOL_KIND_PACKAGE_DEF":case 14:return"package";case"SYMBOL_KIND_CLASS_DEF":case 3:return"class";case"SYMBOL_KIND_METHOD_DEF":case 2:return"method";case"SYMBOL_KIND_PROPERTY_DEF":case 15:return"property";case"SYMBOL_KIND_FIELD_DEF":case 9:return"field";case"SYMBOL_KIND_CONSTRUCTOR_DEF":case 16:return"constructor";case"SYMBOL_KIND_ENUM_DEF":case 17:return"enum";case"SYMBOL_KIND_INTERFACE_DEF":case 7:return"interface";case"SYMBOL_KIND_FUNCTION_DEF":case 1:return"function";case"SYMBOL_KIND_VARIABLE_DEF":case 18:return"variable";case"SYMBOL_KIND_CONSTANT_DEF":case 10:return"constant";case"SYMBOL_KIND_STRING_DEF":case 19:return"string";case"SYMBOL_KIND_NUMBER_DEF":case 20:return"number";case"SYMBOL_KIND_BOOLEAN_DEF":case 21:return"boolean";case"SYMBOL_KIND_ARRAY_DEF":case 22:return"array";case"SYMBOL_KIND_OBJECT_DEF":case 23:return"object";case"SYMBOL_KIND_KEY_DEF":case 24:return"key";case"SYMBOL_KIND_NULL_DEF":case 25:return"null";case"SYMBOL_KIND_ENUM_MEMBER_DEF":case 26:return"enum member";case"SYMBOL_KIND_STRUCT_DEF":case 27:return"struct";case"SYMBOL_KIND_EVENT_DEF":case 28:return"event";case"SYMBOL_KIND_OPERATOR_DEF":case 29:return"operator";case"SYMBOL_KIND_TYPE_PARAMETER_DEF":case 30:return"type param";case"SYMBOL_KIND_TYPE_DEF":case 6:return"type";case"SYMBOL_KIND_IMPLEMENTATION_DEF":case 8:return"implementation";case"SYMBOL_KIND_MACRO_DEF":case 11:return"macro";case"SYMBOL_KIND_TRAIT_DEF":case 31:return"trait";case"SYMBOL_KIND_UNION_DEF":case 32:return"union";case"SYMBOL_KIND_SECTION_1_DEF":case 50:return"h1";case"SYMBOL_KIND_SECTION_2_DEF":case 51:return"h2";case"SYMBOL_KIND_SECTION_3_DEF":case 52:return"h3";case"SYMBOL_KIND_SECTION_4_DEF":case 53:return"h4";case"SYMBOL_KIND_SECTION_5_DEF":case 54:return"h5";case"SYMBOL_KIND_SECTION_6_DEF":case 55:return"h6";case"SYMBOL_KIND_CALL_REF":case 100:return"call";case"SYMBOL_KIND_FIELD_REF":case 101:return"field ref";case"SYMBOL_KIND_PROPERTY_REF":case 102:return"property ref";case"SYMBOL_KIND_ENUM_MEMBER_REF":case 103:return"enum member ref";default:return e.toString()}}function l(e){switch(e){case"function":case"method":return"func";case"interface":return"intf";case"implementation":return"impl";case"constant":return"const";case"module":return"mod";case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"class":case"call":case"enum":case"field":case"macro":case"struct":case"trait":case"type":case"union":return e;default:return e.substring(0,1)}}function a(e){switch(e){case"function":case"method":default:return"prettylights.syntax.entity";case"class":case"enum":case"struct":case"union":return"prettylights.syntax.constant";case"interface":case"trait":return"prettylights.syntax.keyword";case"constant":case"field":case"enum member":return"prettylights.syntax.variable";case"implementation":return"prettylights.syntax.string"}}function c(e){return({class:1,struct:1,enum:1,type:2,interface:3,trait:3,module:4,implementation:5,function:6,method:7,call:8,field:9})[e]||9}let CodeSymbol=class CodeSymbol{setSymbolDepth(e){this.depth=e}setFileInfo(e,t,n){this.repo=e,this.refInfo=t,this.path=n}get lineNumber(){return this.ident.start.line+1}setSnippet(e,t,n,i){this.highlightedText=e,this.stylingDirectives=t,this.bodyText=n,this.leadingWhitespace=i}href(){if(!this.repo||!this.refInfo||!this.path)return`/${window.location.pathname}#L${this.lineNumber}`;let e=this.source===i.BLACKBIRD_SEARCH?this.repo.defaultBranch:this.refInfo.name||this.refInfo.currentOid;return(0,r.C9)({owner:this.repo.ownerLogin,repo:this.repo.name,commitish:e,filePath:this.path,lineNumber:this.lineNumber})}pathKey(){return`${this.repo.ownerLogin}/${this.repo.name}/${this.refInfo.currentOid}/${this.path}`}constructor({ident:e,extent:t,kind:n,name:i,fullyQualifiedName:r,source:s}){this.ident=e,this.extent=t,this.kind=new SymbolKind({kind:n}),this.name=i,this.fullyQualifiedName=r,this.source=s}};let CodeReference=class CodeReference{get lineNumber(){return this.ident.start.line+1}href(e){if(!this.repo||!this.refInfo||!this.path)return`/${window.location.pathname}#L${this.lineNumber}`;let t=this.source===i.BLACKBIRD_SEARCH?this.repo.defaultBranch:this.refInfo.name||this.refInfo.currentOid,n={owner:this.repo.ownerLogin,repo:this.repo.name,commitish:t,filePath:this.path,lineNumber:this.lineNumber,plain:this.isPlain?1:void 0};return e?(0,r.t4)(n):(0,r.C9)(n)}setSnippet(e,t,n,i){this.highlightedText=e,this.stylingDirectives=t,this.bodyText=n,this.leadingWhitespace=i}pathKey(){return`${this.repo.ownerLogin}/${this.repo.name}/${this.refInfo.currentOid}/${this.path}`}constructor({ident:e,repo:t,refInfo:n,path:i,isPlain:r,source:s}){this.ident=e,this.repo=t,this.refInfo=n,this.path=i,this.isPlain=r??!1,this.source=s}}},70049:(e,t,n)=>{var i;function r(e){let t=`(\\W|^)${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(\\W|$)`;return{kind:i.Symbol,regexp:RegExp(t,"g")}}function s(e){let t=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return{kind:i.Text,regexp:RegExp(t,"gi")}}function*l(e,t,n=0){for(let r=n;r<t.length;r++){let n;let s=t[r];for(;null!==(n=e.regexp.exec(s));){let t=n[0],l=n.index;e.kind===i.Symbol&&(t.length>0&&/\W/.test(t[0])&&(t=t.substring(1),l+=n[0].length-t.length),t.length>0&&/\W/.test(t[t.length-1])&&(t=t.substring(0,t.length-1))),yield{line:r,column:l,columnEnd:l+t.length,text:s}}}}n.d(t,{Ny:()=>s,Pc:()=>l,tb:()=>r}),function(e){e[e.Text=0]="Text",e[e.Symbol=1]="Symbol"}(i||(i={}))},17784:(e,t,n)=>{n.d(t,{Rc:()=>l,bo:()=>s,sm:()=>r});var i=n(51082);function r(e,t,{stylingDirectives:n,repo:r,refInfo:s,path:l}){let{extentUtf16:a,identUtf16:c}=e,o=new i.lt({kind:e.kind,fullyQualifiedName:e.fullyQualifiedName,name:e.name,extent:{start:{line:a.start.lineNumber,column:a.start.utf16Col},end:{line:a.end.lineNumber,column:a.end.utf16Col}},ident:{start:{line:c.start.lineNumber,column:c.start.utf16Col},end:{line:c.end.lineNumber,column:c.end.utf16Col}},source:i.sH.BLACKBIRD_ANALYSIS});return o.setSnippet(void 0,n?.[c.start.lineNumber],t,void 0),o.setFileInfo(r,s,l),o}function s(e,{symbol:t,refInfo:n,repo:r,path:s,backend:l}){let a=e.ident?.start?.character,c=e.ident?.end?.character??e.ident?.start?.character,o={start:{line:e.ident.start.line,column:a?a-e.leadingWhitespace:0},end:{line:e.ident?.end?.line??e.ident.start.line,column:c?c-e.leadingWhitespace:0}},u=e.extent?.start?.character,h=e.extent?.end?.character??e.extent?.start?.character,d={start:{line:e.extent.start.line,column:u||0},end:{line:e.extent.end?.line??e.extent.start.line,column:h||0}},f=new i.lt({ident:o,extent:d,kind:e.kind||"",name:t,fullyQualifiedName:t,source:"search"===l?i.sH.BLACKBIRD_SEARCH:i.sH.ALEPH_PRECISE});if(e.local)f.setFileInfo(r,n,s);else if(e.commitOid&&e.path){let t=n;e.commitOid!==n.currentOid&&(t={name:"",listCacheKey:e.commitOid,currentOid:e.commitOid,canEdit:!1}),f.setFileInfo(e.repo??r,t,e.path)}let m=Array(e.leadingWhitespace).fill(" ").join(""),p=m+(e.firstLine||"");return f.setSnippet(e.highlightedText,void 0,p,e.leadingWhitespace),f}function l(e,{refInfo:t,path:n,repo:r,backend:s}){let l=t,a=n;!e.local&&e.commitOid&&e.path&&(l=t,a=e.path,e.commitOid!==t.currentOid&&(l={name:"",listCacheKey:e.commitOid,currentOid:e.commitOid,canEdit:!1}));let c=e.ident.start.character,o=e.ident.end?.character,u=new i.i6({repo:r,refInfo:l,path:a,ident:{start:{line:e.ident.start.line,column:c?c-e.leadingWhitespace:0},end:{line:e.ident.end?.line||e.ident.start.line,column:o?o-e.leadingWhitespace:0}},source:"search"===s?i.sH.BLACKBIRD_SEARCH:i.sH.ALEPH_PRECISE}),h=Array(e.leadingWhitespace).fill(" ").join("")+(e.firstLine||"");return u.setSnippet(e.highlightedText,void 0,h,e.leadingWhitespace),u}},89445:(e,t,n)=>{function i(e,t={}){if(e.match(/^https?:/))throw Error("Can not make cross-origin requests from verifiedFetch");let n={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:n})}function r(e,t){let n=t?.headers??{},r={...n,Accept:"application/json","Content-Type":"application/json"},s=t?.body?JSON.stringify(t.body):void 0;return i(e,{...t,body:s,headers:r})}n.d(t,{Q:()=>i,v:()=>r})}}]);
//# sourceMappingURL=app_assets_modules_github_blob-anchor_ts-app_assets_modules_github_filter-sort_ts-app_assets_-e50ab6-820c5bf677cc.js.map