(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca3d59de"],{"29fc":function(t,e,i){t.exports=i.p+"img/slack_setup4.png"},"5d97":function(t,e,i){"use strict";i("6b22")},"652d":function(t,e,i){},"6b22":function(t,e,i){},9897:function(t,e,i){"use strict";var n=function(){var t=this,e=t._self._c;return e("section",[e("h2",{staticClass:"section-title"},[t._v(t._s(t.notificationChannel.title))]),0===t.envVarsToSet.length?e("div",[t._t("header"),t._t("configuration",(function(){return[t.configVariableName?e("div",{staticClass:"form-group row my-4"},[e("label",{staticClass:"col-12 col-form-label",attrs:{for:"id_"+t.settingKey(t.configVariableName)}},[t._v(" "+t._s(t.configVariableTitle)+" ")]),e("div",{staticClass:"col-12 col-form-label"},[e("saving-animation",{attrs:{errors:t.errorMessages[t.settingKey("config")],saving:t.saving[t.settingKey("config")]}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.configVariable,expression:"configVariable"}],staticClass:"form-control",attrs:{id:"id_"+t.settingKey(t.configVariableName),type:"text",placeholder:t.configVariablePlaceholder},domProps:{value:t.configVariable},on:{input:function(e){e.target.composing||(t.configVariable=e.target.value)}}})])],1)]):t._e()]})),t.channelCreated&&t.showSettings?e("div",[e("notification-setting-switch",{attrs:{"setting-id":"enabled","setting-title":"Enable notification","is-header":!0,"error-messages":t.errorMessages,saving:t.saving,"notification-channel":t.notificationChannel,"bottom-divider":!0},on:{updateNotificationChannel:function(e){return t.$emit("updateNotificationChannel",e)}}}),e("div",{class:{inactive:!t.notificationsEnabled}},[t._t("custom-settings"),t._l(t.notificationSettings,(function(i){return e("div",{key:i.id},["print_job"===i.id?["web"===t.theme?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-form-label"},[e("saving-animation",{attrs:{errors:[],saving:!1}},[e("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.printerStatusChangeNotifications,expression:"printerStatusChangeNotifications"}],staticClass:"custom-control-input",attrs:{id:"id_"+t.settingKey(i.id),type:"checkbox",disabled:!t.notificationsEnabled},domProps:{checked:Array.isArray(t.printerStatusChangeNotifications)?t._i(t.printerStatusChangeNotifications,null)>-1:t.printerStatusChangeNotifications},on:{change:function(e){var i=t.printerStatusChangeNotifications,n=e.target,a=!!n.checked;if(Array.isArray(i)){var s=null,o=t._i(i,s);n.checked?o<0&&(t.printerStatusChangeNotifications=i.concat([s])):o>-1&&(t.printerStatusChangeNotifications=i.slice(0,o).concat(i.slice(o+1)))}else t.printerStatusChangeNotifications=a}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"id_"+t.settingKey(i.id)}},[t._v(" "+t._s(i.title)+" "),i.description?e("span",{staticClass:"text-muted setting-description"},[e("br"),t._v(t._s(i.description))]):t._e()])])])],1)]):e("div",[e("saving-animation",{attrs:{errors:[],saving:!1}},[e("div",{staticClass:"mobile-setting-item-wrapper"},[e("div",{staticClass:"setting-item-text"},[e("label",{attrs:{for:"id_"+t.settingKey(i.id)}},[t._v(" "+t._s(i.title)+" "),i.description?e("span",{staticClass:"text-muted setting-description"},[e("br"),t._v(t._s(i.description))]):t._e()])]),e("div",{staticClass:"setting-item-switch"},[e("onoff-toggle",{staticClass:"mb-0",attrs:{theme:t.theme,width:"ios"===t.theme?48:30,height:"ios"===t.theme?24:12,"on-color":"ios"===t.theme?"var(--color-primary)":"var(--color-primary-muted)","off-color":"var(--color-divider)","border-color":"var(--color-divider)","thumb-color":"ios"===t.theme?"#fff":"var(--color-primary)",disabled:!t.notificationsEnabled},model:{value:t.printerStatusChangeNotifications,callback:function(e){t.printerStatusChangeNotifications=e},expression:"printerStatusChangeNotifications"}})],1)])])],1)]:[e("notification-setting-switch",{attrs:{"setting-id":i.id,"setting-title":i.title,"setting-description":i.description,disabled:!t.notificationsEnabled,"error-messages":t.errorMessages,saving:t.saving,"notification-channel":t.notificationChannel},on:{updateNotificationChannel:function(e){return t.$emit("updateNotificationChannel",e)}}})],i.subcategories?e("div",t._l(i.subcategories,(function(i){return e("notification-setting-switch",{key:t.getKey(i),attrs:{"setting-id":i.id,"setting-title":i.title,"setting-description":i.description,"is-subcategory":!0,disabled:!t.notificationsEnabled,"error-messages":t.errorMessages,saving:t.saving,"notification-channel":t.notificationChannel},on:{updateNotificationChannel:function(e){return t.$emit("updateNotificationChannel",e)}}})})),1):t._e()],2)}))],2)],1):t._e(),t._t("footer")],2):e("div",[e("p",{staticClass:"text-warning"},[t._v('Please configure the following variables in the ".env" file:')]),e("ul",{staticClass:"text-warning"},t._l(t.envVarsToSet,(function(i){return e("li",{key:i},[t._v(t._s(i))])})),0)])])},a=[],s=(i("14d9"),i("847e")),o=function(){var t=this,e=t._self._c;return"web"===t.theme?e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-form-label",class:{"pl-5":t.isSubcategory}},[e("saving-animation",{attrs:{errors:t.errorMessages?t.errorMessages[t.settingKey(t.settingId)]:[],saving:!!t.saving&&t.saving[t.settingKey(t.settingId)]}},[e("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"custom-control-input",attrs:{id:"id_"+t.settingKey(t.settingId),type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{change:function(e){var i=t.value,n=e.target,a=!!n.checked;if(Array.isArray(i)){var s=null,o=t._i(i,s);n.checked?o<0&&(t.value=i.concat([s])):o>-1&&(t.value=i.slice(0,o).concat(i.slice(o+1)))}else t.value=a}}}),e("label",{class:["custom-control-label",t.labelClass],attrs:{for:"id_"+t.settingKey(t.settingId)}},[t._v(" "+t._s(t.settingTitle)+" "),t.settingDescription?e("span",{staticClass:"text-muted setting-description"},[e("br"),t._v(t._s(t.settingDescription))]):t._e()])])])],1),t.bottomDivider?e("div",{staticClass:"col-12"},[e("hr",{staticClass:"my-1"})]):t._e()]):e("div",[e("saving-animation",{attrs:{errors:t.errorMessages?t.errorMessages[t.settingKey(t.settingId)]:[],saving:!!t.saving&&t.saving[t.settingKey(t.settingId)]}},[e("div",{staticClass:"mobile-setting-item-wrapper",class:{"is-subcategory":t.isSubcategory}},[e("div",{staticClass:"setting-item-text"},[e("label",{class:t.labelClass,attrs:{for:"id_"+t.settingKey(t.settingId)}},[t._v(" "+t._s(t.settingTitle)+" "),t.settingDescription?e("span",{staticClass:"text-muted setting-description"},[e("br"),t._v(t._s(t.settingDescription))]):t._e()])]),e("div",{staticClass:"setting-item-switch"},[e("onoff-toggle",{staticClass:"mb-0",attrs:{theme:t.theme,width:"ios"===t.theme?48:30,height:"ios"===t.theme?24:12,"on-color":"ios"===t.theme?"var(--color-primary)":"var(--color-primary-muted)","off-color":"var(--color-divider)","border-color":"var(--color-divider)","thumb-color":"ios"===t.theme?"#fff":"var(--color-primary)",disabled:t.disabled},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])])],1)},r=[],c=i("b279"),l=i("1c9d"),d={name:"NotificationSettingSwitch",components:{SavingAnimation:s["a"]},props:{errorMessages:{type:Object||null,default:null},saving:{type:Object||null,default:null},notificationChannel:{type:Object,required:!0},settingId:{type:String,required:!0},settingTitle:{type:String,required:!0},settingDescription:{type:String,default:""},isSubcategory:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},bottomDivider:{type:Boolean,default:!1},isHeader:{type:Boolean,default:!1}},data(){return{value:this.notificationChannel.channelInfo[this.settingId]}},computed:{theme(){const t=Object(l["b"])();return t?"ios"===t?"ios":"material":"web"},labelClass(){return this.isHeader?"lg":""}},watch:{value:function(t,e){this.$emit("updateNotificationChannel",{section:this.notificationChannel,propNames:[this.settingId],propValues:[t]})}},methods:{settingKey(t){return Object(c["e"])(this.notificationChannel,t)}}},f=d,u=(i("edc1"),i("2877")),h=Object(u["a"])(f,o,r,!1,null,"260ae3fa",null),g=h.exports,p=[{id:"notify_on_failure_alert",title:"Failure alerts",description:"When possible failures are detected"},{id:"print_job",title:"Print job events",description:"Upon start/end/cancellation of a print job",subcategories:[{id:"notify_on_print_done",title:"When print is done",enabledByDefault:!0},{id:"notify_on_print_cancelled",title:"When print is cancelled",enabledByDefault:!1},{id:"notify_on_filament_change",title:"When printer needs attention",description:"Such as filament change or run-out",enabledByDefault:!0},{id:"notify_on_other_print_events",title:"When other event happens",description:"Such as start, pause, and resume",enabledByDefault:!1}]},{id:"notify_on_heater_status",title:"Heater status change",description:"Heater reached target or cooled down"}],m={name:"NotificationChannelTemplate",components:{SavingAnimation:s["a"],NotificationSettingSwitch:g},props:{errorMessages:{type:Object,required:!0},saving:{type:Object,required:!0},notificationChannel:{type:Object,required:!0},notificationSettings:{type:Array,default:()=>p},showSettings:{type:Boolean,default:!0},configVariableTitle:{type:String,default:""},configVariablePlaceholder:{type:String,default:""},configVariableName:{type:String,default:""}},data(){return{configVariable:null,configUpdateTimeout:null}},computed:{channelCreated(){return!!this.notificationChannel.channelInfo},notificationsEnabled(){return!!this.notificationChannel.channelInfo&&this.notificationChannel.channelInfo.enabled},envVarsToSet(){var t;const e=(null===(t=this.notificationChannel.pluginInfo)||void 0===t?void 0:t.env_vars)||{};let i=[];for(const[n,a]of Object.entries(e))a.is_required&&!a.is_set&&i.push(n);return i},printerStatusChangeNotifications:{get:function(){if(!this.notificationChannel.channelInfo)return null;const t=this.notificationSettings.find(t=>"print_job"===t.id).subcategories;for(const e of t)if(this.notificationChannel.channelInfo[e.id])return!0;return!1},set:function(t){if(t){const t=this.notificationSettings.find(t=>"print_job"===t.id).subcategories;let e=[],i=[];for(const n of t)n.enabledByDefault&&(e.push(n.id),i.push(!0));e.length&&this.$emit("updateNotificationChannel",{section:this.notificationChannel,propNames:e,propValues:i})}else{const t=this.notificationSettings.find(t=>"print_job"===t.id).subcategories;let e=[],i=[];for(const n of t)this.notificationChannel.channelInfo[n.id]&&(e.push(n.id),i.push(!1));e.length&&this.$emit("updateNotificationChannel",{section:this.notificationChannel,propNames:e,propValues:i})}}},theme(){const t=Object(l["b"])();return t?"ios"===t?"ios":"material":"web"}},watch:{configVariable(t,e){null!==e&&(this.$emit("clearErrorMessages",this.settingKey("config")),this.updateConfig())}},created(){this.notificationChannel.channelInfo&&this.notificationChannel.channelInfo.config&&this.configVariableName?this.configVariable=this.notificationChannel.channelInfo.config[this.configVariableName]:this.configVariable=""},methods:{getKey(t){return`${t.id}_${this.notificationChannel.channelInfo[t.id]}`},settingKey(t){return Object(c["e"])(this.notificationChannel,t)},updateConfig(){this.configUpdateTimeout&&clearTimeout(this.configUpdateTimeout);const t={[this.configVariableName]:this.configVariable};this.channelCreated?this.configUpdateTimeout=setTimeout(()=>{this.configVariable?this.$emit("updateNotificationChannel",{section:this.notificationChannel,propNames:["config"],propValues:[t]}):this.$emit("deleteNotificationChannel",this.notificationChannel)},1e3):this.configVariable&&(this.configUpdateTimeout=setTimeout(()=>this.$emit("createNotificationChannel",{section:this.notificationChannel,config:t}),1e3))}}},b=m,v=(i("5d97"),Object(u["a"])(b,n,a,!1,null,"4931a549",null));e["a"]=v.exports},aa90:function(t,e,i){t.exports=i.p+"img/slack_setup3.png"},e233:function(t,e,i){t.exports=i.p+"img/slack_setup1.png"},e52c:function(t,e,i){t.exports=i.p+"img/slack_setup2.png"},edc1:function(t,e,i){"use strict";i("652d")},ff58:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;return e("notification-channel-template",{attrs:{"error-messages":t.errorMessages,saving:t.saving,"notification-channel":t.notificationChannel,"show-settings":t.setupCompleted},on:{createNotificationChannel:function(e){return t.$emit("createNotificationChannel",e)},updateNotificationChannel:function(e){return t.$emit("updateNotificationChannel",e)},deleteNotificationChannel:e=>t.$emit("deleteNotificationChannel",e),clearErrorMessages:e=>t.$emit("clearErrorMessages",e)},scopedSlots:t._u([{key:"header",fn:function(){return[t.setupCompleted?e("div",{staticClass:"mb-4"},[e("p",{staticClass:"lead"},[e("i",{staticClass:"far fa-check-circle text-success"}),t._v("  Obico Messenger has been successfully added to your workspace. ")]),e("br"),e("h2",[t._v("What's Next?")]),e("br"),e("p",[t._v(" 1. Make sure Obico Messenger is added to the channels you want the notifications to be sent to. ")]),e("img",{staticClass:"mw-100",attrs:{src:i("e233")}}),e("br"),e("br"),e("p",[t._v("2. There is no 2. You are all set. It's this simple. :)")])]):e("div",[e("p",{staticClass:"lead"},[t._v("Click the button below to add the Obico Slack App into your workspace:")]),e("a",{attrs:{href:`https://slack.com/oauth/v2/authorize?client_id=${t.slackClientId}&scope=channels:read,chat:write,groups:read&redirect_uri=${t.redirectUri}`}},[e("img",{attrs:{alt:"Add to Slack",height:"40",width:"139",src:"https://platform.slack-edge.com/img/add_to_slack.png",srcSet:"https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"}})])])]},proxy:!0},{key:"footer",fn:function(){return[t.setupCompleted?e("div",[e("br"),e("br"),e("h2",[t._v("Test Notifications")]),e("br"),e("div",{staticClass:"btn btn-sm btn-primary float-left",on:{click:function(e){return t.onSlackTest(e)}}},[t._v(" Test Slack Notification ")]),e("br"),e("br"),e("br"),e("br"),e("h2",[t._v("Questions?")]),e("br"),e("p",[t._v(" Q: How do I remove the Obico Slack App from a slack channel so that it won't send notifications to that channel? ")]),e("p",[t._v("A:")]),e("img",{staticClass:"mw-100 mb-2",attrs:{src:i("e52c")}}),e("img",{staticClass:"mw-100 mb-2",attrs:{src:i("aa90")}}),e("img",{staticClass:"mw-100 mb-2",attrs:{src:i("29fc")}}),e("br"),e("br"),e("p",[t._v("Q: How do I remove the Obico Slack App from the entire workspace?")]),e("p",[t._v(" A: Please follow the instructions in "),e("a",{attrs:{href:"https://slack.com/help/articles/360003125231-Remove-apps-and-custom-integrations-from-your-workspace"}},[t._v("this Slack help doc")]),t._v(". ")])]):t._e()]},proxy:!0}])})},a=[],s=i("9897"),o=i("cee4"),r=i("c7f6"),c={name:"SlackPlugin",components:{NotificationChannelTemplate:s["a"]},props:{errorMessages:{type:Object,required:!0},saving:{type:Object,required:!0},notificationChannel:{type:Object,required:!0}},computed:{setupCompleted(){var t,e;return!(null===(t=this.notificationChannel.channelInfo)||void 0===t||null===(e=t.config)||void 0===e||!e.access_token)},slackClientId(){var t;return null===(t=this.notificationChannel.pluginInfo)||void 0===t?void 0:t.env_vars.SLACK_CLIENT_ID.value},redirectUri(){return window.location.origin+"/slack_oauth_callback/"}},methods:{onSlackTest(t){return t.target.classList.add("disabled"),o["a"].post(r["a"].testNotificationChannel(this.notificationChannel.channelInfo.id)).then(()=>{t.target.classList.add("btn-success")}).catch(e=>{t.target.classList.remove("disabled"),this.$emit("errorAlert","Slack test failed"),console.log(e)})}}},l=c,d=i("2877"),f=Object(d["a"])(l,n,a,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-ca3d59de.js.map