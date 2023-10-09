"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["codespaces"],{11645:(e,t,o)=>{var r=o(36071),s=o(59753),n=o(65935),i=o(58700);function a(e){let t=new URL(document.location.href,window.location.origin),o=new URLSearchParams(t.search),r=["vscs_target"];for(let[t,s]of e.entries()){if(r.includes(t)||!s){o.delete(t);continue}o.set(t,s)}window.history.replaceState({},"",`?${o.toString()}`)}function l(){let e=new URL(document.location.href,window.location.origin),t=new URLSearchParams(e.search);t.set("response_error","true"),window.location.replace(`${window.location.pathname}?${t.toString()}`)}(0,s.on)("remote-input-error","#js-codespaces-repository-select",()=>{let e=document.querySelector("#js-codespaces-unable-load-repositories-warning");e.hidden=!1}),(0,n.AC)(".js-new-codespace-form",async function(e,t){let o=e.closest("[data-replace-remote-form-target]"),r=o.querySelector(".js-new-codespace-submit-button");r instanceof HTMLInputElement&&(r.disabled=!0),e.classList.remove("is-error"),e.classList.add("is-loading");try{r&&r.setAttribute("disabled","true");let e=await t.html();if(200!==e.status&&l(),o.replaceWith(e.html),"true"===o.getAttribute("data-allow-update-url")){let e=new FormData(document.querySelector("form.js-new-codespace-form"));a(e)}}catch(e){throw l(),e}});let c=null;function d(e){if(c=e,null!==e){let e=document.querySelector(".js-codespace-loading-steps");e.setAttribute("data-current-state",c)}}(0,r.N7)(".js-codespace-loading-steps",{constructor:HTMLElement,add:e=>{let t=e.getAttribute("data-current-state");t&&d(t)}}),(0,r.N7)(".js-codespace-advance-state",{constructor:HTMLElement,add:e=>{let t=e.getAttribute("data-state");t&&d(t)}});let u=null;function p(e){(0,n.AC)(".js-fetch-cascade-token",async function(e,t){try{let e=await t.json(),o=e.json;u=o.token}catch(e){}}),(0,i.Bt)(e)}function h(e,t,o){let r=document.querySelector(e);if(r){let e=Date.now(),r=()=>{let r=Date.now()-e;if(u||r>=o){clearInterval(s),t(u||void 0);return}},s=setInterval(r,50)}}function f(e,t){if(""!==t.value){let t=e.querySelector("form");(0,i.Bt)(t)}else{let e=document.querySelector(".js-fetch-cascade-token");p(e),h(".js-workbench-form-container",m,1e4)}}function m(e){let t=document.querySelector(".js-workbench-form-container form");t&&e?(b(t,e),g(t,e),(0,i.Bt)(t)):d("failed")}function b(e,t){let o=e.querySelector(".js-cascade-token");o&&o.setAttribute("value",t)}function g(e,t){let o=e.querySelector(".js-partner-info");if(o){let e=o.getAttribute("value");e&&(e=e.replace("%CASCADE_TOKEN_PLACEHOLDER%",t),o.setAttribute("value",e))}}(0,r.N7)(".js-auto-submit-form",{constructor:HTMLFormElement,initialize:i.Bt}),(0,r.N7)(".js-workbench-form-container",{constructor:HTMLElement,add:e=>{let t=e.querySelector(".js-cascade-token");f(e,t)}});var v=o(76006),y=o(69567),w=o(19146),_=o(67525);function A(e){let t=e.querySelectorAll(".js-toggle-hidden");for(let e of t)e.hidden=!e.hidden;let o=e.querySelectorAll(".js-toggle-disabled");for(let e of o)e.getAttribute("aria-disabled")?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")}async function j(){let e=document.querySelector(".js-codespaces-details-container");e&&(e.open=!1);let t=document.querySelector("new-codespace");if(t&&!t.getAttribute("data-no-submit-on-create"))try{let e=await fetch("/codespaces/new");if(e&&e.ok){let o=(0,_.r)(document,await e.text());t.replaceWith(o)}}catch(e){}}async function E(e,t){let o=document.querySelector(`#${e}`),r=await (0,w.W)({content:o.content.cloneNode(!0),dialogClass:"project-dialog"});return t&&t.setAttribute("aria-expanded","true"),r.addEventListener("dialog:remove",function(){t&&A(t)},{once:!0}),r}async function D(e){let t=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(t.ok){let o=await t.json();if(o.codespace_url)window.location.href=o.codespace_url,A(e),j(),T();else{let t=e.closest("get-repo")||e.closest("new-codespace");t?(e.setAttribute("data-src",o.loading_url),e.dispatchEvent(new CustomEvent("pollvscode"))):e.closest("create-button")&&(e.setAttribute("data-src",o.loading_url),e.dispatchEvent(new CustomEvent("prpollvscode"))),A(e)}}else if(422===t.status){let o=await t.json();if("concurrency_limit_error"===o.error_type)await E("concurrency-error",e);else{let t=document.querySelector("template.js-flash-template"),r=o.error;t.after(new y.R(t,{className:"flash-error",message:r})),A(e)}}}async function T(){let e=document.querySelector(".js-codespaces-completable"),t=e&&e.getAttribute("data-src");if(!t)return;let o=await fetch(t,{method:"GET",headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});if(o.ok){let t=(0,_.r)(document,await o.text());e.replaceWith(t)}else throw Error(`Unexpected response: ${o.statusText}`)}(0,s.on)("submit",".js-toggle-hidden-codespace-form",function(e){let t=e.currentTarget;A(t)}),(0,s.on)("submit",".js-create-codespaces-form-command",function(e){let t=e.currentTarget;t.classList.contains("js-open-in-vscode-form")||(j(),A(t))}),(0,s.on)("submit","form.js-open-in-vscode-form",async function(e){e.preventDefault();let t=e.currentTarget;await D(t)});let k=class ConcurrencyLimitElement extends HTMLElement{async connectedCallback(){E("concurrency-error")}};k=function(e,t,o,r){var s,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i}([v.Ih],k);var S=o(14992),x=function(e,t,o,r){var s,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};let L=class NewCodespaceElement extends HTMLElement{async connectedCallback(){let e=new URL(document.location.href,window.location.origin),t=new URLSearchParams(e.search);t.has("response_error")&&(t.delete("response_error"),window.history.replaceState({},"",`?${t.toString()}`))}toggleLoadingVscode(){let e=this.loadingVscode.hidden,t=this.children;for(let o=0;o<t.length;o++)t[o].hidden=e;this.loadingVscode.hidden=!e}machineTypeSelected(e){let t=e.currentTarget,o=t.getAttribute("data-sku-name");this.skuNameInput&&o&&(this.skuNameInput.value=o),this.advancedOptionsForm&&(0,i.Bt)(this.advancedOptionsForm)}pollForVscode(e){this.toggleLoadingVscode();let t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}vscsTargetUrlUpdated(e){let t=e.currentTarget;this.vscsTargetUrl.value=t.value}async declarativeSecretsHashUpdated(e){let t=e.currentTarget,o=t.getAttribute("data-name");if(!o)return;let r=t.value,s=(0,S.Jx)(t.getAttribute("data-public-key"));"checkbox"!==t.getAttribute("type")||t.checked||(r=""),r?this.secrets_hash.set(o,(0,S.cv)(await (0,S.HI)(s,r))):this.secrets_hash.delete(o),this.declarativeSecretsHash.value=JSON.stringify(Object.fromEntries(this.secrets_hash))}constructor(...e){super(...e),this.secrets_hash=new Map}};x([v.fA],L.prototype,"declarativeSecretsHash",void 0),x([v.fA],L.prototype,"vscsTargetUrl",void 0),x([v.fA],L.prototype,"loadingVscode",void 0),x([v.fA],L.prototype,"vscodePoller",void 0),x([v.fA],L.prototype,"advancedOptionsForm",void 0),x([v.fA],L.prototype,"skuNameInput",void 0),L=x([v.Ih],L);var C=function(e,t,o,r){var s,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};let O=class ExportBranchElement extends HTMLElement{connectedCallback(){this.abortPoll=new AbortController,this.loadingIndicator.hidden||this.startPoll()}disconnectedCallback(){this.abortPoll?.abort()}async exportBranch(e){e.preventDefault(),this.form.hidden=!0,this.loadingIndicator.hidden=!1;let t=await fetch(this.form.action,{method:this.form.method,body:new FormData(this.form),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});t.ok?this.startPoll():(this.form.hidden=!1,this.loadingIndicator.hidden=!0)}async startPoll(){let e=this.getAttribute("data-exported-codespace-url")||"",t=await this.poll(e);if(t){if(t.ok)this.loadingIndicator.hidden=!0,this.viewBranchLink.hidden=!1;else{let e=this.getAttribute("data-export-error-redirect-url")||"";window.location.href=encodeURI(e)}}}async poll(e,t=1e3){if(this.abortPoll?.signal.aborted)return;let o=await fetch(e,{signal:this.abortPoll?.signal});return 202===o.status||404===o.status?(await new Promise(e=>setTimeout(e,t)),this.poll(e,1.5*t)):o}constructor(...e){super(...e),this.abortPoll=null}};C([v.fA],O.prototype,"form",void 0),C([v.fA],O.prototype,"loadingIndicator",void 0),C([v.fA],O.prototype,"viewBranchLink",void 0),O=C([v.Ih],O);var I=o(34892),M=function(e,t,o,r){var s,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};let P=class OptionsPopoverElement extends HTMLElement{connectedCallback(){let e=document.getElementById("codespaces-dropdown-list");null!=e&&(e.onscroll=()=>this.updateDetailsOnScroll(0,e.scrollTop+window.pageYOffset),document.onscroll=()=>this.updateDetailsOnScroll(0,e?.scrollTop+window.pageYOffset),onresize=()=>this.updateDetailsOnScroll(0,e?.scrollTop+window.pageYOffset))}reset(e){for(e?.preventDefault(),this.dropdownDetails&&(this.dropdownDetails.hidden=!1),this.modalDetails&&(this.modalDetails.hidden=!0),this.exportDetails&&(this.exportDetails.hidden=!0),this.publishDetails&&(this.publishDetails.hidden=!0),this.forkDetails&&(this.forkDetails.hidden=!0),this.editorDetails&&(this.editorDetails.hidden=!0),this.skuForm&&(this.skuForm.hidden=!1);this.resultMessage?.firstChild;)this.resultMessage.removeChild(this.resultMessage.firstChild);this.resultMessage&&(this.resultMessage.hidden=!0),this.errorMessage&&(this.errorMessage.hidden=!0)}updateDetailsOnScroll(e,t){let o=document.getElementById("codespaces-dropdown-list");if(null!=o){this.reset(void 0);let o=document.querySelectorAll("details");for(let r of o)this.isSubMenu(r)&&r.children[1]&&(t&&t>e?r.children[1].style.marginTop=`-${t}px`:r.children[1].style.marginTop="0px")}}isSubMenu(e){return"options-popover.dropdownDetails"===e.getAttribute("data-target")||"options-popover.editorDetails"===e.getAttribute("data-target")||"options-popover.exportDetails"===e.getAttribute("data-target")||"options-popover.publishDetails"===e.getAttribute("data-target")}showSettingsModal(){this.dropdownDetails.hidden=!0,this.modalDetails.open=!0,this.modalDetails.hidden=!1}showExportModal(){this.dropdownDetails.hidden=!0,this.exportDetails&&(this.exportDetails.open=!0,this.exportDetails.hidden=!1),this.insertBranchExportComponent()}showEditors(){this.dropdownDetails.hidden=!0,this.editorDetails&&(this.editorDetails.open=!0,this.editorDetails.hidden=!1)}closeEditors(){this.dropdownDetails.open=!0,this.dropdownDetails.hidden=!1,this.editorDetails&&(this.editorDetails.open=!1,this.editorDetails.hidden=!0)}showPublishAndExportModal(){this.dropdownDetails.hidden=!0,this.publishDetails&&(this.publishDetails.open=!0,this.publishDetails.hidden=!1),this.insertBranchExportComponent()}showForkAndExportModal(){this.dropdownDetails.hidden=!0,this.forkDetails&&(this.forkDetails.open=!0,this.forkDetails.hidden=!1),this.insertBranchExportComponent()}showRenamePrompt(){if(this.renameButton&&this.renameForm&&this.renameInput){let e=this.renameButton.getAttribute("data-rename-prompt"),t=this.renameButton.getAttribute("data-display-name");if(e&&t){let o=prompt(e,t)||null,r=o?.trim();r&&t!==r&&(this.renameInput.value=r,(0,i.Bt)(this.renameForm))}}}async insertBranchExportComponent(){let e=this.querySelector("[data-branch-export-url]");if(!e)return;let t=e.getAttribute("data-branch-export-url");if(!t)return;let o=await (0,I.a_)(document,t);o&&(e.textContent="",e.appendChild(o))}applyPublishParams(){if(this.publishForm){let e=Object.fromEntries(new FormData(this.publishForm).entries()),t=this.querySelector('[data-target="export-branch.form"]');if(t){let o=`?name=${e.name}&visibility=${e.visibility}`,r=(t.getAttribute("action")||"").split("?")[0]+o;t.setAttribute("action",r)}}}openDeepLink(e){e.preventDefault();let t=e.target,o=t.closest("button")?.getAttribute("data-update-url");o&&window.open(o,"_self"),this.reset(e)}};M([v.fA],P.prototype,"dropdownDetails",void 0),M([v.fA],P.prototype,"modalDetails",void 0),M([v.fA],P.prototype,"settingsModal",void 0),M([v.fA],P.prototype,"skuForm",void 0),M([v.fA],P.prototype,"resultMessage",void 0),M([v.fA],P.prototype,"errorMessage",void 0),M([v.fA],P.prototype,"exportDetails",void 0),M([v.fA],P.prototype,"publishDetails",void 0),M([v.fA],P.prototype,"publishForm",void 0),M([v.fA],P.prototype,"forkDetails",void 0),M([v.fA],P.prototype,"editorDetails",void 0),M([v.fA],P.prototype,"renameButton",void 0),M([v.fA],P.prototype,"renameForm",void 0),M([v.fA],P.prototype,"renameInput",void 0),P=M([v.Ih],P);var R=o(55843),q=o(82368),H=function(e,t,o,r){var s,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};let F=class CodespaceZeroConfigElement extends HTMLElement{connectedCallback(){this.toggleLocationConfigs("production")}updateVscsTargets(){for(let e of(this.vscsTargetUrl.disabled="local"!==this.vscsTarget.value,this.toggleLocationConfigs(this.vscsTarget.value),this.vscsTargets))e.value=this.vscsTarget.value}updateVscsTargetUrls(){for(let e of this.vscsTargetUrls)e.value=this.vscsTargetUrl.value}updateLocations(e){let t=e.currentTarget;this.setLocationValues(t.value)}setLocationValues(e){for(let t of this.locations)t.value=e}toggleLocationConfigs(e){for(let t of this.locationConfigs)if(t.getAttribute("data-vscs-target")===e){t.hidden=!1;let e=t.querySelector("option");e&&(e.selected=!0,this.setLocationValues(e.value))}else t.hidden=!0}};H([v.fA],F.prototype,"regionConfig",void 0),H([v.fA],F.prototype,"vscsTarget",void 0),H([v.fA],F.prototype,"vscsTargetUrl",void 0),H([v.GO],F.prototype,"locationConfigs",void 0),H([v.GO],F.prototype,"vscsTargets",void 0),H([v.GO],F.prototype,"vscsTargetUrls",void 0),H([v.GO],F.prototype,"locations",void 0),F=H([v.Ih],F)},14992:(e,t,o)=>{o.d(t,{HI:()=>n,Jx:()=>i,cv:()=>a});var r=o(69567),s=o(59753);async function n(e,t){let r=new TextEncoder,s=r.encode(t),{seal:n}=await Promise.all([o.e("vendors-node_modules_blakejs_index_js-node_modules_tweetnacl_nacl-fast_js"),o.e("_empty-file_js-app_assets_modules_github_tweetsodium_ts")]).then(o.bind(o,20179));return n(s,e)}function i(e){let t=atob(e).split("").map(e=>e.charCodeAt(0));return Uint8Array.from(t)}function a(e){let t="";for(let o of e)t+=String.fromCharCode(o);return btoa(t)}function l(e){return async function(t){let o=t.currentTarget;if(t.defaultPrevented||!o.checkValidity())return;let s=i(o.getAttribute("data-public-key"));for(let i of(t.preventDefault(),o.elements)){let t=i;if(t.id.endsWith("secret")){if(t.disabled=!0,t.required&&!t.value){let e=`${t.name} is invalid!`,o=document.querySelector("template.js-flash-template");o.after(new r.R(o,{className:"flash-error",message:e}));return}let i=`${t.name}_encrypted_value`;if(!t.value){o.elements.namedItem(i).disabled=e;continue}o.elements.namedItem(i).value=a(await n(s,t.value))}}o.submit()}}(0,s.on)("submit","form.js-encrypt-submit",async function(e){let t=e.currentTarget;if(e.defaultPrevented||!t.checkValidity())return;let o=t.elements.namedItem("secret_value");if(o.disabled=!0,!o.value)return;e.preventDefault();let r=i(t.getAttribute("data-public-key"));t.elements.namedItem("encrypted_value").value=a(await n(r,o.value)),t.submit()}),(0,s.on)("submit","form.js-encrypt-bulk-submit",l(!0)),(0,s.on)("submit","form.js-encrypt-bulk-submit-enable-empty",l(!1))},55843:(e,t,o)=>{var r=o(76006),s=function(e,t,o,r){var s,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(n<3?s(i):n>3?s(t,o,i):s(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};let n=class InputDemuxElement extends HTMLElement{connectedCallback(){this.control&&(this.storedInput=Array(this.control.children.length).fill("")),this.addEventListener("input",this.relayInput.bind(this)),this.addEventListener("keydown",this.relayKeydown.bind(this));let e=this.closest("details");e&&e.addEventListener("toggle",()=>{e.open&&this.source.focus()})}relayKeydown(e){if((this.isControlTab(e.target)||e.target===this.source)&&("ArrowDown"===e.key||"Tab"===e.key))e.preventDefault(),e.stopPropagation(),this.routeCustomEvent(new CustomEvent("focus-list"));else if("Escape"===e.key){let e=this.closest("details");e&&e.removeAttribute("open")}}isControlTab(e){return!!e&&!!this.control&&Array.from(this.control.children).includes(e)}relayInput(e){if(!e.target)return;let t=e.target,o=t.value;this.routeCustomEvent(new CustomEvent("input-entered",{detail:o}))}routeCustomEvent(e){let t=this.sinks[this.selectedIndex];t.dispatchEvent(e)}get selectedIndex(){if(!this.control)return 0;let e=this.control.querySelector('[aria-selected="true"]');return e?Array.from(this.control.children).indexOf(e):0}storeInput(){this.storedInput[this.selectedIndex]=this.source.value}updateInput(e){this.source.value=this.storedInput[this.selectedIndex];let t=e.detail.relatedTarget.getAttribute("data-filter-placeholder");this.source.placeholder=t,this.source.setAttribute("aria-label",t),this.notifySelected()}notifySelected(){let e=this.sinks[this.selectedIndex],t=new CustomEvent("tab-selected");e.dispatchEvent(t)}};s([r.fA],n.prototype,"source",void 0),s([r.GO],n.prototype,"sinks",void 0),s([r.fA],n.prototype,"control",void 0),n=s([r.Ih],n)},58700:(e,t,o)=>{o.d(t,{Bt:()=>n,DN:()=>l,KL:()=>u,Se:()=>a,qC:()=>p,sw:()=>c});var r=o(5582);function s(e,t,o){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:o}))}function n(e,t){t&&(i(e,t),(0,r.j)(t)),s(e,"submit",!0)&&e.submit()}function i(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}function a(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}s(e,"change",!1)}function l(e,t){for(let o in t){let r=t[o],s=e.elements.namedItem(o);s instanceof HTMLInputElement?s.value=r:s instanceof HTMLTextAreaElement&&(s.value=r)}}function c(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),o=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==o&&"reset"!==o||e.isContentEditable}function d(e){return new URLSearchParams(e)}function u(e,t){let o=new URLSearchParams(e.search),r=d(t);for(let[e,t]of r)o.append(e,t);return o.toString()}function p(e){return d(new FormData(e)).toString()}},5582:(e,t,o)=>{function r(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let o=s(t);if(e.name){let r=e.matches("input[type=submit]")?"Submit":"",s=e.value||r;o||((o=document.createElement("input")).type="hidden",o.classList.add("js-submit-button-value"),t.prepend(o)),o.name=e.name,o.value=s}else o&&o.remove()}function s(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}o.d(t,{j:()=>r,u:()=>s})},95253:(e,t,o)=>{let r;o.d(t,{YT:()=>p,qP:()=>h,yM:()=>f});var s=o(88149),n=o(86058),i=o(44544),a=o(71643);let{getItem:l}=(0,i.Z)("localStorage"),c="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,s.n)("octolytics");delete e.baseContext,r=new n.R(e)}catch(e){}function u(e){let t=(0,s.n)("octolytics").baseContext||{};if(t)for(let[e,o]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=o,delete t[e]);let o=document.querySelector("meta[name=visitor-payload]");if(o){let e=JSON.parse(atob(o.content));Object.assign(t,e)}let r=new URLSearchParams(window.location.search);for(let[e,o]of r)d.includes(e.toLowerCase())&&(t[e]=o);return t.staff=(0,a.B)().toString(),Object.assign(t,e)}function p(e){r?.sendPageView(u(e))}function h(e,t={}){let o=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,s=o?{service:o}:{};for(let[e,o]of Object.entries(t))null!=o&&(s[e]=`${o}`);r&&(u(s),r.sendEvent(e||"unknown",u(s)))}function f(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_morphdom_dist_morphdom-esm_js","vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js","vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-c537341","ui_packages_soft-nav_soft-nav_ts","app_assets_modules_github_details-dialog_ts-app_assets_modules_github_fetch_ts","app_assets_modules_github_ref-selector_ts"],()=>t(11645));var o=e.O()}]);
//# sourceMappingURL=codespaces-d9c20b6ca438.js.map