(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={print_shot_feedback:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/static/frontend/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([4,"chunk-vendors"]),a()})({0:function(t,e){},"0e20":function(t,e,a){"use strict";var n=a("490e"),r=a.n(n);r.a},1807:function(t,e,a){"use strict";a("99af"),a("a15b");var n=a("0b49"),r=a.n(n),s=a("dd61"),i=a.n(s);e["a"]={publicTimelapse:function(){return"/api/v1/publictimelapse/"},printShotFeedback:function(t,e){return"/api/v1/printshotfeedbacks/".concat(t,"/?print_id=").concat(e)},print:function(t){return"/api/v1/prints/".concat(t,"/")},prints:function(){return"/api/v1/prints/"},printsBulkDelete:function(){return"/api/v1/prints/bulk_delete/"},printAlertOverwrite:function(t){return"/api/v1/prints/".concat(t,"/alert_overwrite/")},printers:function(){return"/api/v1/printers/"},printer:function(t){return"/api/v1/printers/".concat(t,"/")},printerAction:function(t,e){return"/api/v1/printers/".concat(t).concat(e)},pubPrinter:function(){return"/api/v1p/printer/"},gcodes:function(t,e){return"/api/v1/gcodes/?page=".concat(t,"&page_size=").concat(e||24)},gcode:function(t){return"/api/v1/gcodes/".concat(t,"/")},tunnelUsage:function(){return"/api/v1/tunnelusage/"},verificationCode:function(){return"/api/v1/onetimeverificationcodes/"},user:function(){return"/api/v1/users/me/"},sharedResources:function(t){return"/api/v1/sharedresources/?"+i()(r()(t),(function(t){return t.join("=")})).join("&")},sharedResource:function(t){return"/api/v1/sharedresources/".concat(t,"/")},printerDiscovery:function(){return"/api/v1/printer_discovery/"},printerControl:function(t){return"/printers/".concat(t,"/control/")},printerWebSocket:function(t){return"/ws/web/".concat(t,"/")},printerSharedWebSocket:function(t){return"/ws/share_token/web/".concat(t,"/")},printerWizard:function(t){return"/printers/wizard/?printerId=".concat(t)}}},1853:function(t,e,a){},"3c33":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var n=function(t,e){var a=localStorage.getItem(t)||e;try{return JSON.parse(a)}catch(n){return a}},r=function(t,e){return localStorage.setItem(t,e)}},4:function(t,e,a){t.exports=a("84bc")},"490e":function(t,e,a){},"502a":function(t,e,a){"use strict";a.d(e,"c",(function(){return d})),a.d(e,"b",(function(){return f})),a.d(e,"d",(function(){return p})),a.d(e,"a",(function(){return h}));a("caad"),a("2532");var n=a("f3f3"),r=a("c1df"),s=a.n(r),i=a("9b02"),o=a.n(i),c=a("49d5"),l=a.n(c),u=function(t){return t?s()(t):null},d=function(t){return t.ended_at=u(t.cancelled_at||t.finished_at),t.started_at=u(t.started_at),t.uploaded_at=u(t.uploaded_at),t.has_alerts=Boolean(t.alerted_at),t},f=function(t){return t.created_at=u(t.created_at),t.updated_at=u(t.updated_at),t.deleted=u(t.deleted),t.filesize=l()(t.num_bytes),t},p=function(t,e){var a={createdAt:function(){return u(this.created_at)},isOffline:function(){return null===o()(this,"status",null)},isPaused:function(){return o()(this,"status.state.flags.paused",!1)},isIdle:function(){return"Operational"===o()(this,"status.state.text","")},isDisconnected:function(){return o()(this,"status.state.flags.closedOrError",!0)},isPrinting:function(){return!this.isDisconnected()&&"Operational"!==o()(this,"status.state.text","")},inTransientState:function(){return!this.hasError()&&o()(this,"status.state.text","").includes("ing")&&!o()(this,"status.state.text","").includes("Printing")},hasError:function(){return o()(this,"status.state.flags.error")||o()(this,"status.state.text","").toLowerCase().includes("error")},alertUnacknowledged:function(){return o()(this,"current_print.alerted_at")&&s()(o()(this,"current_print.alerted_at")).isAfter(s()(o()(this,"current_print.alert_acknowledged_at")||0))}};return e?(o()(e,"status._ts",-1)>o()(t,"status._ts",o()(e,"status._ts",0))&&delete t.status,Object(n["a"])(Object(n["a"])(Object(n["a"])({},e),t),a)):Object(n["a"])(Object(n["a"])({},t),a)},h=function(t,e,a){var n=Math.round(t.length*e),r=a?"p":"fields.normalized_p";return o()(t[n],"".concat(r),0)}},5237:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card bg-dark text-white"},[n("img",{staticClass:"card-img",attrs:{src:a("6e05"),alt:"The Detective is still working"}}),t._m(0)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-img-overlay",staticStyle:{"background-color":"rgba(0,0,0,0.6)"}},[a("h5",{staticClass:"card-title text-center",staticStyle:{padding:"70px 0"}},[t._v("The Detective is still busy working on your time-lapse")])])}],s={name:"DetectiveWorking"},i=s,o=a("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);e["a"]=c.exports},"5b71":function(t,e,a){"use strict";var n=a("dba6"),r=a.n(n);r.a},"648b":function(t,e,a){"use strict";a.d(e,"a",(function(){return I})),a.d(e,"d",(function(){return W})),a.d(e,"b",(function(){return U})),a.d(e,"c",(function(){return M}));a("99af"),a("4160"),a("b0c0"),a("d3b7"),a("ac1f"),a("159b"),a("ddb0");var n,r,s,i,o,c,l,u,d,f,p,h,v,b,m,g,_,y,w,C,k,O,j,D,S,x,E,B,$,L,T,A,P=a("fc11"),N=a("a026"),I={Light:"Light",Dark:"Dark",System:"System"},W=N["default"].observable({value:I.Dark,system:!1}),q=[{name:"primary-variant",values:(n={},Object(P["a"])(n,I.Light,"#B289F8"),Object(P["a"])(n,I.Dark,"#9A6AEF"),n)},{name:"primary",values:(r={},Object(P["a"])(r,I.Light,"#9965f4"),Object(P["a"])(r,I.Dark,"#A57BEE"),r)},{name:"on-primary",values:(s={},Object(P["a"])(s,I.Light,"#ffffff"),Object(P["a"])(s,I.Dark,"#ffffff"),s)},{name:"secondary",values:(i={},Object(P["a"])(i,I.Light,"#28303A"),Object(P["a"])(i,I.Dark,"#EBEBEB"),i)},{name:"on-secondary",values:(o={},Object(P["a"])(o,I.Light,"#EBEBEB"),Object(P["a"])(o,I.Dark,"#28303A"),o)},{name:"success",values:(c={},Object(P["a"])(c,I.Light,"#5cb85c"),Object(P["a"])(c,I.Dark,"#5cb85c"),c)},{name:"success-variant",values:(l={},Object(P["a"])(l,I.Light,"#4CAE4C"),Object(P["a"])(l,I.Dark,"#4CAE4C"),l)},{name:"on-success",values:(u={},Object(P["a"])(u,I.Light,"#ffffff"),Object(P["a"])(u,I.Dark,"#ffffff"),u)},{name:"danger",values:(d={},Object(P["a"])(d,I.Light,"#d9534f"),Object(P["a"])(d,I.Dark,"#d9534f"),d)},{name:"danger-variant",values:(f={},Object(P["a"])(f,I.Light,"#C2413D"),Object(P["a"])(f,I.Dark,"#C2413D"),f)},{name:"on-danger",values:(p={},Object(P["a"])(p,I.Light,"#ffffff"),Object(P["a"])(p,I.Dark,"#ffffff"),p)},{name:"warning",values:(h={},Object(P["a"])(h,I.Light,"#f0ad4e"),Object(P["a"])(h,I.Dark,"#f0ad4e"),h)},{name:"warning-variant",values:(v={},Object(P["a"])(v,I.Light,"#DB9A3F"),Object(P["a"])(v,I.Dark,"#DB9A3F"),v)},{name:"on-warning",values:(b={},Object(P["a"])(b,I.Light,"#ffffff"),Object(P["a"])(b,I.Dark,"#ffffff"),b)},{name:"on-warning-2",values:(m={},Object(P["a"])(m,I.Light,"#000000"),Object(P["a"])(m,I.Dark,"#000000"),m)},{name:"background",values:(g={},Object(P["a"])(g,I.Light,"#EBEBEB"),Object(P["a"])(g,I.Dark,"#233141"),g)},{name:"surface-primary",values:(_={},Object(P["a"])(_,I.Light,"#ffffff"),Object(P["a"])(_,I.Dark,"#485B71"),_)},{name:"surface-secondary",values:(y={},Object(P["a"])(y,I.Light,"#f5f5f5"),Object(P["a"])(y,I.Dark,"#2D3E4F"),y)},{name:"overlay",values:(w={},Object(P["a"])(w,I.Light,"#f5f5f5"),Object(P["a"])(w,I.Dark,"#000000"),w)},{name:"hover",values:(C={},Object(P["a"])(C,I.Light,"#666666"),Object(P["a"])(C,I.Dark,"#ffffff"),C)},{name:"divider",values:(k={},Object(P["a"])(k,I.Light,"#ABB6C2"),Object(P["a"])(k,I.Dark,"#6A7B8A"),k)},{name:"text-primary",values:(O={},Object(P["a"])(O,I.Light,"#28303A"),Object(P["a"])(O,I.Dark,"#EBEBEB"),O)},{name:"text-secondary",values:(j={},Object(P["a"])(j,I.Light,"#8A94A2"),Object(P["a"])(j,I.Dark,"#AAACB0"),j)},{name:"text-help",values:(D={},Object(P["a"])(D,I.Light,"#4c9be8"),Object(P["a"])(D,I.Dark,"#4c9be8"),D)},{name:"input-background",values:(S={},Object(P["a"])(S,I.Light,"#E2E8ED"),Object(P["a"])(S,I.Dark,"#42566B"),S)},{name:"table-accent-1",values:(x={},Object(P["a"])(x,I.Light,"#E3E3E3"),Object(P["a"])(x,I.Dark,"#27323F"),x)},{name:"table-accent-2",values:(E={},Object(P["a"])(E,I.Light,"#EDEDED"),Object(P["a"])(E,I.Dark,"#1B242E"),E)},{name:"icon-tunneling-1",values:(B={},Object(P["a"])(B,I.Light,"#4e5d6c"),Object(P["a"])(B,I.Dark,"#EAEAEA"),B)},{name:"icon-tunneling-2",values:($={},Object(P["a"])($,I.Light,"#1d2935"),Object(P["a"])($,I.Dark,"#CDCDCD"),$)},{name:"icon-navbar-brand",values:(L={},Object(P["a"])(L,I.Light,"#7B8993"),Object(P["a"])(L,I.Dark,"#ffffff"),L)}],F=[{name:"logo-bg",values:(T={},Object(P["a"])(T,I.Light,'url("/static/img/logo-bg/logo-bg_light.svg")'),Object(P["a"])(T,I.Dark,'url("/static/img/logo-bg/logo-bg_dark.svg")'),T)},{name:"tail-spin",values:(A={},Object(P["a"])(A,I.Light,'url("/static/img/tail-spin/tail-spin_light.svg")'),Object(P["a"])(A,I.Dark,'url("/static/img/tail-spin/tail-spin_dark.svg")'),A)}];function R(t){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e||console.log("Wrong HEX value!"),[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}function U(){console.log("Init theme");var t=localStorage.getItem("colorTheme"),e=t===I.System;e&&(t="not all"!==window.matchMedia("(prefers-color-scheme)").media&&window.matchMedia("(prefers-color-scheme: light)").matches?I.Light:I.Dark),null===t&&(t=W.value),q.forEach((function(e){var a=R(e.values[t]);document.documentElement.style.setProperty("--color-".concat(e.name),"".concat(a[0]," ").concat(a[1]," ").concat(a[2]))})),F.forEach((function(e){document.documentElement.style.setProperty("--url-".concat(e.name),e.values[t])})),W.value=t,W.system=e}function M(t){localStorage.setItem("colorTheme",t),U()}},"6bb8":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n=function(){return""!==JSON.parse(document.querySelector("#app-platform-json").text)["platform"]}},"6e05":function(t,e,a){t.exports=a.p+"img/detective-working.gif"},"785f":function(t,e,a){"use strict";a("99af"),a("fb6a"),a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("5319");var n=a("0122"),r=/(?:^|[-_/])(\w)/g,s="root",i="anonymous component",o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/,c=function(t){var e=o.exec(t);return e?e.slice(1):[]},l=function(t,e){var a=c(t)[2];return e&&a.substr(-1*e.length)===e&&(a=a.substr(0,a.length-e.length)),a},u=function(t){if(!t)return i;if(t.$root===t)return s;if(!t.$options)return i;if(t.$options.name)return t.$options.name;if(t.$options._componentTag)return t.$options._componentTag;if(t.$options.__file){var e=t.$options.__file.replace(/^[a-zA-Z]:/,"").replace(/\\/g,"/"),a=l(e,".vue");return a.replace(r,(function(t,e){return e?e.toUpperCase():""}))}return i},d=function t(e,a,r,s,i,o){var c=0;for(var l in a){if(c+=1,c>o)break;"object"==Object(n["a"])(a[l])?i>s&&t(e,a[l],r+"."+l,s+1,i,o):e[r+"."+l]=a[l]}},f=function(t){var e=t.config.errorHandler;t.config.errorHandler=function(a,n,r){if(window.Sentry){var s={},i=n;if(n._original&&(i=n._original),i)try{s.componentName=u(i),d(s,JSON.parse(JSON.stringify(i.$options.propsData)),"props",0,2,10)}catch(o){console.log("Unable to extract metadata from Vue component.")}r&&(s.lifecycleHook=r),setTimeout((function(){window.Sentry.getCurrentHub().withScope((function(t){t.setContext("vue",s),window.Sentry.getCurrentHub().captureException(a)}))}))}"function"===typeof e&&e.call(t,a,n,r),t.util&&t.util.warn("Error in ".concat(r,': "').concat(a.toString(),'"'),n),console.error(a)}};e["a"]=f},"7a8a":function(t,e,a){"use strict";var n=a("c8fe"),r=a.n(n);r.a},"84bc":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),r=a("f357"),s=a("785f"),i=a("648b"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"printshots-container row justify-content-center"},[a("pull-to-reveal",[a("navbar",{attrs:{"view-name":"app.views.web_views.print_shot_feedback"}})],1),a("div",{staticClass:"col-sm-12 col-lg-6"},[a("div",{staticClass:"card"},[t._m(0),a("loading",{attrs:{active:null===t.print,"is-full-page":!0}}),null!==t.print?a("div",[t.print.access_consented_at?a("div",[a("div",[a("vue-slick-carousel",{ref:"carousel",attrs:{arrows:!0,dots:!0},on:{afterChange:t.onNextShot},scopedSlots:t._u([{key:"customPaging",fn:function(e){return[a("div",{class:t.pageClass(e)},[t._v("•")])]}}],null,!1,3226812120)},t._l(this.shots,(function(e,n){return a("print-shot-card",{key:n,attrs:{shot:e},on:{shotChanged:t.onShotChanged}})})),1)],1),a("br"),a("div",{staticClass:"card-body p-3"},[a("a",{attrs:{href:"/prints/"}},[a("i",{staticClass:"fas fa-chevron-left"}),t._v(" Time-lapse ")])])]):a("consent",{attrs:{print:this.print},on:{"continue-btn-pressed":this.consentBtnPressed}})],1):t._e()],1)])],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h5",{staticClass:"card-header text-center"},[t._v(" F "),a("i",{staticClass:"fas fa-search focused-feedback-icon"}),t._v("CUSED FEEDBACK ")])}],l=a("bc3a"),u=a.n(l),d=a("c1df"),f=a.n(d),p=a("c707"),h=a.n(p),v=a("51f5"),b=a.n(v),m=a("a7ab"),g=a.n(m),_=(a("7b8d"),a("6a2c"),a("9062")),y=a.n(_),w=(a("e40d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body consent-section"},[a("div",[t._v(" Number of snapshots: "),a("span",{staticClass:"feedback-estimate"},[t._v(t._s(this.print.printshotfeedback_set.length))])]),a("p",[t._v(" Estimated time to finish: "),a("span",{staticClass:"feedback-estimate"},[t._v(t._s(this.estimatedFeedbackTime))])]),t._m(0),a("br"),a("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:!t.consentChecked,type:"button"},on:{click:function(e){return t.$emit("continue-btn-pressed")}}},[t._v("Start Focused Feedback")]),a("br"),a("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.consentChecked,expression:"consentChecked"}],staticClass:"custom-control-input",attrs:{type:"checkbox",name:"consented",id:"consented-checkbox"},domProps:{checked:Array.isArray(t.consentChecked)?t._i(t.consentChecked,null)>-1:t.consentChecked},on:{change:function(e){var a=t.consentChecked,n=e.target,r=!!n.checked;if(Array.isArray(a)){var s=null,i=t._i(a,s);n.checked?i<0&&(t.consentChecked=a.concat([s])):i>-1&&(t.consentChecked=a.slice(0,i).concat(a.slice(i+1)))}else t.consentChecked=r}}}),t._m(1)]),a("br"),a("div",[a("span",{staticClass:"text-muted"},[t._v("File:")]),t._v(" "+t._s(t.print.filename)+" ")]),a("div",[a("span",{staticClass:"text-muted"},[t._v("Printed:")]),t._v(" "+t._s(t.print.started_at.fromNow())+" ")]),a("br"),t.print.video_url?a("video-box",{attrs:{videoUrl:t.print.video_url,posterUrl:t.print.poster_url,fullScreenBtn:!1}}):a("div",[a("detective-working")],1)],1)}),C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"font-weight-light"},[t._v(" Help The Detective get better by giving her in-depth feedback on the snapshots of the print. You will earn "),a("strong",{staticClass:"text-light"},[t._v("2 non-expirable Detective Hours")]),t._v(" after you finish this Focused Feedback. "),a("a",{attrs:{target:"_blank",href:"https://help.thespaghettidetective.com/kb/guide/en/help-the-detective-improve-PVq4Iul0df/"}},[t._v("Learn more. "),a("small",[a("i",{staticClass:"fas fa-external-link-alt"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"custom-control-label",staticStyle:{"font-size":"16px"},attrs:{for:"consented-checkbox"}},[t._v(" I grant The Spaghetti Detective team members the permission to review the time-lapse video of the print shown on this page. "),a("a",{attrs:{target:"_blank",href:"https://help.thespaghettidetective.com/kb/guide/en/help-the-detective-improve-PVq4Iul0df/Steps/298841,298840,298839,298838"}},[t._v("Why is this necessary? "),a("small",[a("i",{staticClass:"fas fa-external-link-alt"})])])])}],k=a("c1ee"),O=a("5237"),j={name:"Consent",props:{print:Object},components:{VideoBox:k["a"],DetectiveWorking:O["a"]},data:function(){return{consentChecked:!1}},computed:{estimatedFeedbackTime:function(){var t=12*this.print.printshotfeedback_set.length;return t<60?"".concat(t," seconds"):f.a.duration(t,"seconds").humanize()}}},D=j,S=(a("5b71"),a("2877")),x=Object(S["a"])(D,w,C,!1,null,"9650d10c",null),E=x.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"card-img-top",attrs:{src:t.shot.image_url}}),a("div",{staticClass:"px-3 pt-4"},[a("b-form-group",{attrs:{label:"Do you see any spaghetti in this picture?"}},[a("b-form-radio-group",{attrs:{options:t.options},on:{change:t.updateShot},model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}})],1),t._m(0)],1)])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("small",{staticClass:"text-muted"},[t._v(" Not sure? Look at "),a("a",{attrs:{target:"_blank",href:"https://help.thespaghettidetective.com/kb/guide/en/help-the-detective-improve-PVq4Iul0df/Steps/298841,298840,298839,298838,298837,298836,298834"}},[t._v("some examples. "),a("small",[a("i",{staticClass:"fas fa-external-link-alt"})])])])}],L=a("1807"),T=a("8226"),A=a("2924"),P={name:"PrintShotCard",components:{BFormGroup:T["a"],BFormRadioGroup:A["a"]},props:{shot:Object},data:function(){return{answer:this.shot.answer,options:[{text:"Yes",value:"LOOKS_BAD"},{text:"No",value:"LOOKS_OK"},{text:"I am not sure",value:"UNDECIDED"}]}},methods:{updateShot:function(t){var e=this;u.a.put(L["a"].printShotFeedback(this.shot.id,this.shot.print_id),{answer:t}).then((function(t){var a=t.data,n=a.instance,r=a.credited_dhs;e.$emit("shotChanged",n),r>0&&e.$swal({title:"You are awesome!",html:"<p>The Detective just got a little smarter because of your feedback!</p><p>You just earned 2 non-expirable Detective Hours - Yay!</p>",confirmButtonText:"I'm done!",showCancelButton:!0,cancelButtonText:"Change feedback"}).then((function(t){t.isConfirmed&&(window.location.href="/prints/")}))}))}}},N=P,I=Object(S["a"])(N,B,$,!1,null,null,null),W=I.exports,q=a("502a"),F=a("b768"),R=a("8ffe"),U={name:"PrintShotFeedbackApp",components:{Consent:E,Loading:y.a,PrintShotCard:W,VueSlickCarousel:g.a,PullToReveal:F["a"],Navbar:R["a"]},props:{config:{default:function(){},type:Object}},data:function(){return{shots:[],currentShot:0,print:null}},computed:{},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;u.a.get(L["a"].print(this.config.printId)).then((function(e){t.print=Object(q["c"])(e.data),t.shots=h()(t.print.printshotfeedback_set,"id")}))},updatePrint:function(t){var e=this;u.a.patch(L["a"].print(this.print.id),t).then((function(t){return e.print=t.data}))},consentBtnPressed:function(){this.updatePrint({access_consented_at:f()()})},onShotChanged:function(t){var e=b()(this.shots,(function(e){return e.id==t.id}));this.$set(this.shots,e,t),this.$refs.carousel.next()},onNextShot:function(t){this.currentShot=t},pageClass:function(t){return t===this.currentShot?"page-visiting":this.shots[t].answered_at?"text-success":"page-unvisited"}}},M=U,H=(a("bb99"),Object(S["a"])(M,o,c,!1,null,"07752794",null)),V=H.exports;Object(i["b"])(),Object(s["a"])(n["default"]),n["default"].use(r["a"]),new n["default"]({components:{App:V}}).$mount("#print-shot-feedback-mount")},"8ffe":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isInMobile?t._e():a("nav",{staticClass:"navbar navbar-expand-xl bg-dark static-top flex-column",class:{"navbar-dark":t.theme===t.themes.Dark,"navbar-light":t.theme===t.themes.Light}},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[a("svg",{attrs:{viewBox:"0 0 1965 240",width:"232",height:"28.34"}},[a("use",{attrs:{href:"#svg-navbar-brand"}})])]),a("button",{ref:"mobileDropdown",staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{ref:"mobileDropdownContent",staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[a("ul",{staticClass:"navbar-nav"},[t.user?a("li",{staticClass:"nav-item",class:{active:t.viewName.includes("printers")}},[a("a",{staticClass:"nav-link",attrs:{href:"/printers/"}},[t._v("Printer ")])]):t._e(),t.user?a("li",{staticClass:"nav-item",class:{active:t.viewName.includes("prints")}},[a("a",{staticClass:"nav-link",attrs:{href:"/prints/"}},[t._v("Time-lapse ")])]):t._e(),t.user?a("li",{staticClass:"nav-item",class:{active:t.viewName.includes("gcodes")}},[a("a",{staticClass:"nav-link",attrs:{href:"/gcodes/"}},[t._v("G-Code ")])]):t._e(),t.user?t._e():a("li",{staticClass:"nav-item",class:{active:"publictimelapse_list"===t.viewName}},[a("a",{staticClass:"nav-link glowing",attrs:{href:"/publictimelapses/"}},[t._v("Spaghetti Gallery")])]),t.isEnt?a("li",{staticClass:"nav-item",class:{active:"pricing"===t.viewName}},[a("a",{staticClass:"nav-link",attrs:{href:"/ent/pricing/"}},[t._v("Pricing")])]):t._e(),t._m(0),t._m(1)]),a("ul",{staticClass:"navbar-nav ml-auto"},[t.user?t._e():a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"/accounts/login/"}},[t._v("Sign In")])]),!t.user&&t.allowSignUp?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"/accounts/signup/"}},[t._v("Sign up")])]):t._e(),t.isEnt&&t.user?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link badge-btn",attrs:{href:"/ent/subscription/#detective-hour-balance"}},[a("svg",{attrs:{viewBox:"0 0 384 550",width:"14.66",height:"21"}},[a("use",{attrs:{href:"#svg-detective-hours"}})]),a("span",{staticClass:"badge badge-light",attrs:{id:"user-credits"}},[t._v(t._s(t.dhBadgeNum))]),a("span",{staticClass:"sr-only"},[t._v("Detective Hours")])])]):t._e(),t.user?a("li",{ref:"accountDropdown",staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle user-menu",attrs:{"data-toggle":"dropdown",href:"#",id:t.user.id,"aria-expanded":"false"}},[t._v(" "+t._s(t.user.first_name||t.user.email)+" "),a("span",{staticClass:"caret"})]),a("div",{ref:"accountDropdownContent",staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"themes"}},[t._m(2),t.isEnt?a("a",{staticClass:"dropdown-item",attrs:{href:"/ent/subscription/"}},[a("i",{staticClass:"far fa-user-circle"}),t._v("Account")]):t._e(),a("div",{staticClass:"dropdown-divider"}),t._m(3)])]):t._e()])])])]),t.needsEmailVerification?a("div",{staticClass:"alert alert-warning text-center",attrs:{role:"alert"}},[t._v(" You will not get notified by email on print failure, as your primary email address is not verified. "),a("a",{attrs:{href:"/accounts/email/"}},[t._v("Verify your email address.")])]):t._e()])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"https://www.thespaghettidetective.com/help/"}},[t._v("Help")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"https://discord.gg/hsMwGpD"}},[t._v("Forum")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"dropdown-item",attrs:{href:"/user_preferences/"}},[a("i",{staticClass:"fas fa-sliders-h"}),t._v("Preferences")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"dropdown-item",attrs:{href:"/accounts/logout/"}},[a("i",{staticClass:"fas fa-sign-out-alt"}),t._v("Log out")])}],s=(a("d3b7"),a("ac1f"),a("3ca3"),a("841c"),a("2ca0"),a("ddb0"),a("2b3d"),a("c1df")),i=a.n(s),o=a("6bb8"),c=a("648b"),l={name:"Navbar",components:{},data:function(){return{user:null,allowSignUp:!1,isEnt:!1,isInMobile:!1,themes:c["a"]}},props:{viewName:{default:function(){return""},type:String}},created:function(){var t=JSON.parse(document.querySelector("#settings-json").text),e=t.ACCOUNT_ALLOW_SIGN_UP,a=t.IS_ENT;this.allowSignUp=!!e,this.isEnt=!!a,this.user=JSON.parse(document.querySelector("#user-json").text),this.isInMobile=Object(o["a"])()||window.location.pathname.startsWith("/mobile/")||"true"===new URLSearchParams(window.location.search).get("inMobile")},computed:{theme:function(){return c["d"].value},dhBadgeNum:function(){return this.user&&this.user.is_dh_unlimited?"∞":Math.round(this.user.dh_balance)},needsEmailVerification:function(){if(!this.user)return!1;var t=i()(this.user.date_joined).isBefore(i()().subtract(15,"days"));return this.isEnt&&!this.user.is_primary_email_verified&&t}},methods:{hideDropdowns:function(){var t=this.$refs.accountDropdown;t.classList.contains("show")&&(t.classList.remove("show"),this.$refs.accountDropdownContent.classList.remove("show"));var e=this.$refs.mobileDropdown;e.getAttribute("aria-expanded")&&(e.classList.add("collapsed"),this.$refs.mobileDropdownContent.classList.remove("show"))}}},u=l,d=(a("0e20"),a("2877")),f=Object(d["a"])(u,n,r,!1,null,"fa6736c4",null);e["a"]=f.exports},b768:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"pullToRevealWrapper",staticClass:"wrapper"},[a("div",[a("div",{staticClass:"pull-to-reveal"},[t.enable?t._t("default"):t._e()],2),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showEdge,expression:"showEdge"}],staticClass:"showing-edge"}),a("div",{staticClass:"spaceholder"})]),a("div",{ref:"staticWrapper"},[t.enable?t._e():t._t("default")],2)])},r=[],s={name:"PullToReveal",props:{showEdge:{default:function(){return!1},type:Boolean},shiftContent:{default:function(){return!0},type:Boolean},enable:{default:function(){return!1},type:Boolean}},data:function(){return{status:"closed",animationTime:.5}},watch:{enable:function(t){t?(this.destroyDisabled(),this.initEnabled()):(this.destroyEnabled(),this.initDisabled())}},mounted:function(){this.enable?this.initEnabled():this.initDisabled()},destroyed:function(){this.enable?this.destroyEnabled():this.destroyDisabled()},methods:{initEnabled:function(){window.addEventListener("scroll",this.handleScroll),document.querySelector("body").style.minHeight="101vh";var t=this.$refs.pullToRevealWrapper.querySelector(".pull-to-reveal"),e=this.$refs.pullToRevealWrapper.querySelector(".spaceholder"),a=this.animationTime;t.style.transition="all ".concat(a,"s"),e.style.transition="all ".concat(a,"s"),0===window.scrollY&&window.scrollBy({top:1,behavior:"smooth"}),window.onload=function(){var e=parseInt(window.getComputedStyle(t).height);t.style.top="-".concat(2*e,"px")}},destroyEnabled:function(){if(window&&window.removeEventListener("scroll",this.handleScroll),document&&(document.querySelector("body").style.minHeight=""),this.$refs.pullToRevealWrapper){var t=this.$refs.pullToRevealWrapper.querySelector(".pull-to-reveal");t.style.transition="none",t.style.top="-999px";var e=this.$refs.pullToRevealWrapper.querySelector(".spaceholder");e.style.transition="none"}},initDisabled:function(){var t=this.$refs.pullToRevealWrapper.querySelector(".showing-edge");t.style.display="none";var e=this.$refs.staticWrapper;e.style.position="absolute",e.style.width="100%",e.style.top="0",e.style.left="0",e.style.zIndex="10",document.querySelector("body").style.paddingTop="56px",window.onload=function(){var t=parseInt(window.getComputedStyle(e).height);document.querySelector("body").style.paddingTop="".concat(t,"px")}},destroyDisabled:function(){var t=this.$refs.pullToRevealWrapper;t&&(t.querySelector(".showing-edge").style.display="block");var e=this.$refs.staticWrapper;e&&(e.style.display="none"),document&&(document.querySelector("body").style.paddingTop=0)},handleScroll:function(){var t=window.pageYOffset,e=this.$refs.pullToRevealWrapper.querySelector(".pull-to-reveal"),a=parseInt(window.getComputedStyle(e).height);if(0===t){if("opened"===this.status)return;e.style.top=0,this.status="opened",this.shiftContent&&(this.$refs.pullToRevealWrapper.querySelector(".spaceholder").style.height="".concat(a,"px"))}else{if("closed"===this.status)return;this.$emit("hide"),e.style.top="-".concat(2*a,"px"),this.status="closed",this.shiftContent&&(this.$refs.pullToRevealWrapper.querySelector(".spaceholder").style.height=0)}}}},i=s,o=(a("cd2f"),a("2877")),c=Object(o["a"])(i,n,r,!1,null,"aef3fa0c",null);e["a"]=c.exports},bb99:function(t,e,a){"use strict";var n=a("f74e"),r=a.n(n);r.a},c1ee:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-img-top"},[a("video-player",{ref:"videoPlayer",staticClass:"vjs-default-skin vjs-big-play-centered",attrs:{options:t.playerOptions,playsinline:!0},on:{timeupdate:t.onTimeUpdate}}),t.fullscreenBtn?a("a",{staticClass:"fullscreen-btn",attrs:{role:"button"},on:{click:function(e){return t.$emit("fullscreen")}}},[a("i",{staticClass:"fa fa-expand fa-2x",attrs:{"aria-hidden":"true"}})]):t._e()],1)},r=[],s=a("d6d3"),i={name:"VideoBox",components:{videoPlayer:s["videoPlayer"]},props:{videoUrl:String,posterUrl:String,fullscreenBtn:{default:function(){return!0},type:Boolean},fluid:{type:Boolean,default:function(){return!0}},autoplay:{type:Boolean,default:function(){return!1}}},computed:{playerOptions:function(){return{muted:!0,preload:"none",language:"en",playbackRates:[.5,1,1.5,2],fluid:this.fluid,fill:!this.fluid,autoplay:this.autoplay,sources:[{type:"video/mp4",src:this.videoUrl}],controlBar:{fullscreenToggle:!1},poster:this.posterUrl}}},methods:{onTimeUpdate:function(t){this.$emit("timeupdate",t.currentTime()/t.duration())}}},o=i,c=(a("7a8a"),a("2877")),l=Object(c["a"])(o,n,r,!1,null,"2ae6d05e",null);e["a"]=l.exports},c8fe:function(t,e,a){},cd2f:function(t,e,a){"use strict";var n=a("1853"),r=a.n(n);r.a},dba6:function(t,e,a){},f357:function(t,e,a){"use strict";var n=a("f3f3"),r=a("a026"),s=a("5886"),i=a("3c33"),o=function(t,e,a){var s=document.createElement("div"),i=new r["default"]({render:function(a){return a(t,{props:e})}}).$mount(s);return r["default"].swal(Object(n["a"])(Object(n["a"])({},a),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(t){t.querySelector("#replace-here").replaceWith(i.$el)},onDestroy:function(){i.$destroy(),s.remove()}}))},c=function(t,e,a){return r["default"].swal(Object(n["a"])(Object(n["a"])({},a),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(e){e.querySelector("#replace-here").replaceWith(t)}}))},l=function(t,e){t.use(s["a"],e);var a=t.swal.mixin({title:"Are you sure?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"dark-backdrop"}}),r=t.swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3}),l=function(e,a){if(!Object(i["a"])(a,!1)){var r=Object(n["a"])(Object(n["a"])({},e),{},{position:"top-end",confirmButtonText:"Gotcha! Don't show this again."});return t.swal(r).then((function(t){t.value&&(Object(i["b"])(a,!0),console.log(t))}))}};t.prototype.$swal["openModalWithComponent"]=o,t.prototype.$swal["openModalWithElement"]=c,t.prototype.$swal["Confirm"]=a,t.prototype.$swal["Toast"]=r,t.prototype.$swal["DismissableToast"]=l};e["a"]={install:l}},f74e:function(t,e,a){}});
//# sourceMappingURL=print_shot_feedback.js.map