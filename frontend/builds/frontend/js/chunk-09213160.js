(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09213160"],{"0434":function(i,t,e){},"4b60":function(i,t,e){"use strict";e("0434")},"9c95":function(i,t,e){"use strict";e.r(t);var n=function(){var i=this,t=i._self._c;return t("section",{staticClass:"notifications"},[t("h2",{staticClass:"section-title"},[i._v("Notifications")]),"web"===i.theme?t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-form-label"},[t("saving-animation",{attrs:{errors:i.errorMessages.notification_enabled,saving:i.saving.notification_enabled}},[t("div",{staticClass:"custom-control custom-checkbox form-check-inline"},[t("input",{directives:[{name:"model",rawName:"v-model",value:i.notificationsEnabled,expression:"notificationsEnabled"}],staticClass:"custom-control-input",attrs:{id:"id_notification_enabled",type:"checkbox"},domProps:{checked:Array.isArray(i.notificationsEnabled)?i._i(i.notificationsEnabled,null)>-1:i.notificationsEnabled},on:{change:function(t){var e=i.notificationsEnabled,n=t.target,a=!!n.checked;if(Array.isArray(e)){var o=null,s=i._i(e,o);n.checked?s<0&&(i.notificationsEnabled=e.concat([o])):s>-1&&(i.notificationsEnabled=e.slice(0,s).concat(e.slice(s+1)))}else i.notificationsEnabled=a}}}),t("label",{staticClass:"custom-control-label",attrs:{for:"id_notification_enabled"}},[i._v(" Enable notifications ")])])])],1)]):t("div",[t("saving-animation",{attrs:{errors:i.errorMessages.notification_enabled,saving:i.saving.notification_enabled}},[t("div",{staticClass:"mobile-setting-item-wrapper"},[t("div",{staticClass:"setting-item-text"},[t("label",{attrs:{for:"id_notification_enabled"}},[i._v("Enable notifications")])]),t("div",{staticClass:"setting-item-switch"},[t("onoff-toggle",{staticClass:"mb-0",attrs:{theme:i.theme,width:"ios"===i.theme?48:30,height:"ios"===i.theme?24:12,"on-color":"ios"===i.theme?"var(--color-primary)":"var(--color-primary-muted)","off-color":"var(--color-divider)","border-color":"var(--color-divider)","thumb-color":"ios"===i.theme?"#fff":"var(--color-primary)"},model:{value:i.notificationsEnabled,callback:function(t){i.notificationsEnabled=t},expression:"notificationsEnabled"}})],1)])])],1)])},a=[],o=e("847e"),s=e("1c9d"),c={name:"GeneralNotifications",components:{SavingAnimation:o["a"]},props:{errorMessages:{type:Object,required:!0},saving:{type:Object,required:!0},user:{type:Object,required:!0}},data(){return{notificationsEnabled:this.user.notification_enabled}},computed:{theme(){const i=Object(s["b"])();return i?"ios"===i?"ios":"material":"web"}},watch:{notificationsEnabled:function(i,t){this.$emit("updateSetting","notification_enabled",i)}}},r=c,l=(e("4b60"),e("2877")),d=Object(l["a"])(r,n,a,!1,null,"71ba3887",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-09213160.js.map