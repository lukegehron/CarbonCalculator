if("object"==typeof CE2&&(CE2.uid||CE2.data))throw Error("CE: multiple userscripts installed");"undefined"==typeof CE2&&(CE2={}),CE2.userDataToJs=function($){for(var _=[["uid","uid"],["snapshots","snapshots"],["status","status"],["flows","flows"],["pageEdits","page_edits"],["sites","sites"],["USER_SCRIPT_VERSION","updated_at"],["__CE_HOST__","ce_app_url"],["COMMON_SCRIPT","common_script_url"],["COMMON_SCRIPT_SECURE","common_script_url"],["TRACKING_SCRIPT","tracking_script_url"],["TRACKING_SCRIPT_SECURE","tracking_script_url"],["AUTH_KEY","hud_auth_key"],["HUD","hud"],["GLOBAL_IP_BLOCK_LIST","global_ip_block_list"],["IS_USING_IP_BLOCKING","is_using_ip_blocking"],["TRACKING_DEST_NEW","v6_tracking_dest"],["TRACKING_DEST_NEW_SECURE","v6_secure_tracking_dest"],["DEST_V11","v11_tracking_dest"],["FT_DEST","flow_tracking_dest"],["PAGE_VIEWS_LIMIT_REACHED","page_views_limit_reached"],["NUMBER_OF_RECORDINGS","recordings_number"],["RECORDINGS_ACTIVATION","recordings_activation"],["ALLOW_RECORDINGS_2","recordings_2"],["ERROR_TRACKING","error_tracking"],["DEST_ERRORS_API","error_tracking_dest"],["DEST_ERRORS_API_DOMAIN","error_tracking_script_url"]],t=0;t<_.length;t++){var e=_[t];CE2.data[e[1]]&&(CE2[e[0]]=CE2.data[e[1]])}CE2.data.recordings_dest&&(CE2.SREC_DEST={record:CE2.data.recordings_dest,sample:CE2.data.recordings_sampling_dest})},CE2.loadCommonScript=function(){var $=document,_=(window,CE2.data.common_script_url);"undefined"!=typeof CE_DEBUG&&CE_DEBUG&&console.log("CE: Loading script "+_);var t=$.createElement("script");t.src=_,t.type="text/javascript",t.async=!0;var e=$.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)},CE2.handleUserData=function(){CE2.userDataToJs(CE2.data),"ok"===CE2.data.status&&CE2.loadCommonScript()},CE2.use_loaded_data=!0,CE2.data={uid:59240,updated_at:1601649247,ce_app_url:"https://app.crazyegg.com",version:"11.1.68",clock_url:"https://tracking.crazyegg.com/clock",common_script_url:"https://script.crazyegg.com/pages/versioned/common-scripts/11.1.68.js",tracking_script_url:"https://script.crazyegg.com/pages/versioned/tracking-scripts/11.1.68.js",trackingpagestate_script_url:"https://script.crazyegg.com/pages/versioned/trackingpagestate-scripts/11.1.68.js",status:"ok",sites:"%8&4!}%|%]!}$<$4$3$5$5$4$8$,!}&%%?&$%^!}$<!}%?%|&*&%&&&0$.%`&&&.!}$,!}&+%^&+&+%|&&&%%.%^%[&&&*%]%|&%%`!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%|&%%`%0%^&,&,%|&%%`&+!}$<&4!}&(%?%`%^%1%?&*%`%^&,%|&%%`$|&%%?%@&!%^%]!}$<%_%?&!&+%^$,!}&(%?%`%^%1%?&*%`%^&,%|&%%`%2&*&!&+!}$<%8%;$,!}&*&-&!%^&+!}$<%8%;$,!}&$%?&+%~$|&!%^&$%^&%&,&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,&*%?&,%^%`&2!}$<!}&-&%%|%_&&&*&$!}$,!}&+%?&$&(&!%|&%%`%*&-&$%.%^%[&&&*%]%|&%%`&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%2&(%]%?&,%^%]$^&,!}$<&%&-&!&!$,!}%^&%%]%0%^&+&+%|&&&%%+&%$_&!&&%[%~%^%]%2&*&!!}$<%_%?&!&+%^$,!}%@&!&&%[%~%^%]%2&*&!&+!}$<%8%;$,!}%@&!&&%[%~%^%]%.&-&!%^&+!}$<%8%;$,!}&(&*%^$`%?%[%{%^%$&$%?%`%^&+!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%$%_&*%?&$%^&+!}$<%_%?&!&+%^&6&6$,&4!}%|%]!}$<$2$8$1$5$3$4$,!}&%%?&$%^!}$<!}%^&%%^&*%`&2&+&,%?&*$.%`&&&.!}$,!}&+%^&+&+%|&&&%%.%^%[&&&*%]%|&%%`!}$<&,&*&-%^$,!}&*%^%[&&&*%]%|&%%`%0%^&,&,%|&%%`&+!}$<&4!}&(%?%`%^%1%?&*%`%^&,%|&%%`$|&%%?%@&!%^%]!}$<%_%?&!&+%^$,!}&(%?%`%^%1%?&*%`%^&,%|&%%`%2&*&!&+!}$<%8%;$,!}&*&-&!%^&+!}$<%8%;$,!}&$%?&+%~$|&!%^&$%^&%&,&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,&*%?&,%^%`&2!}$<!}&-&%%|%_&&&*&$!}$,!}&+%?&$&(&!%|&%%`%*&-&$%.%^%[&&&*%]%|&%%`&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%2&(%]%?&,%^%]$^&,!}$<&%&-&!&!$,!}%^&%%]%0%^&+&+%|&&&%%+&%$_&!&&%[%~%^%]%2&*&!!}$<%_%?&!&+%^$,!}%@&!&&%[%~%^%]%2&*&!&+!}$<%8%;$,!}%@&!&&%[%~%^%]%.&-&!%^&+!}$<%8%;$,!}&(&*%^$`%?%[%{%^%$&$%?%`%^&+!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%$%_&*%?&$%^&+!}$<%_%?&!&+%^&6&6$,&4!}%|%]!}$<$2$8$7$,!}&%%?&$%^!}$<!}%^&(%?$.%`&&&.!}$,!}&+%^&+&+%|&&&%%.%^%[&&&*%]%|&%%`!}$<&,&*&-%^$,!}&*%^%[&&&*%]%|&%%`%0%^&,&,%|&%%`&+!}$<&4!}&(%?%`%^%1%?&*%`%^&,%|&%%`$|&%%?%@&!%^%]!}$<%_%?&!&+%^$,!}&(%?%`%^%1%?&*%`%^&,%|&%%`%2&*&!&+!}$<%8%;$,!}&*&-&!%^&+!}$<%8%;$,!}&$%?&+%~$|&!%^&$%^&%&,&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,&*%?&,%^%`&2!}$<!}&-&%%|%_&&&*&$!}$,!}&+%?&$&(&!%|&%%`%*&-&$%.%^%[&&&*%]%|&%%`&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%2&(%]%?&,%^%]$^&,!}$<&%&-&!&!$,!}%^&%%]%0%^&+&+%|&&&%%+&%$_&!&&%[%~%^%]%2&*&!!}$<%_%?&!&+%^$,!}%@&!&&%[%~%^%]%2&*&!&+!}$<%8%;$,!}%@&!&&%[%~%^%]%.&-&!%^&+!}$<%8%;$,!}&(&*%^$`%?%[%{%^%$&$%?%`%^&+!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%$%_&*%?&$%^&+!}$<%_%?&!&+%^&6&6$,&4!}%|%]!}$<$2$8$5$3$;$9$,!}&%%?&$%^!}$<!}%^&(%?%[%]&1&%&&%]%^$.&%%^&,!}$,!}&+%^&+&+%|&&&%%.%^%[&&&*%]%|&%%`!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%|&%%`%0%^&,&,%|&%%`&+!}$<&4!}&(%?%`%^%1%?&*%`%^&,%|&%%`$|&%%?%@&!%^%]!}$<%_%?&!&+%^$,!}&(%?%`%^%1%?&*%`%^&,%|&%%`%2&*&!&+!}$<%8%;$,!}&*&-&!%^&+!}$<%8%;$,!}&$%?&+%~$|&!%^&$%^&%&,&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,&*%?&,%^%`&2!}$<!}&-&%%|%_&&&*&$!}$,!}&+%?&$&(&!%|&%%`%*&-&$%.%^%[&&&*%]%|&%%`&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%2&(%]%?&,%^%]$^&,!}$<&%&-&!&!$,!}%^&%%]%0%^&+&+%|&&&%%+&%$_&!&&%[%~%^%]%2&*&!!}$<%_%?&!&+%^$,!}%@&!&&%[%~%^%]%2&*&!&+!}$<%8%;$,!}%@&!&&%[%~%^%]%.&-&!%^&+!}$<%8%;$,!}&(&*%^$`%?%[%{%^%$&$%?%`%^&+!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%$%_&*%?&$%^&+!}$<%_%?&!&+%^&6&6$,&4!}%|%]!}$<$9$4$4$3$,!}&%%?&$%^!}$<!}&!%^%?%]%_&*%^%^%~%|%]&+$.&&&*%`!}$,!}&+%^&+&+%|&&&%%.%^%[&&&*%]%|&%%`!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%|&%%`%0%^&,&,%|&%%`&+!}$<&4!}&(%?%`%^%1%?&*%`%^&,%|&%%`$|&%%?%@&!%^%]!}$<%_%?&!&+%^$,!}&(%?%`%^%1%?&*%`%^&,%|&%%`%2&*&!&+!}$<%8%;$,!}&*&-&!%^&+!}$<%8%;$,!}&$%?&+%~$|&!%^&$%^&%&,&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,&*%?&,%^%`&2!}$<!}&-&%%|%_&&&*&$!}$,!}&+%?&$&(&!%|&%%`%*&-&$%.%^%[&&&*%]%|&%%`&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%2&(%]%?&,%^%]$^&,!}$<&%&-&!&!$,!}%^&%%]%0%^&+&+%|&&&%%+&%$_&!&&%[%~%^%]%2&*&!!}$<%_%?&!&+%^$,!}%@&!&&%[%~%^%]%2&*&!&+!}$<%8%;$,!}%@&!&&%[%~%^%]%.&-&!%^&+!}$<%8%;$,!}&(&*%^$`%?%[%{%^%$&$%?%`%^&+!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%$%_&*%?&$%^&+!}$<%_%?&!&+%^&6&6$,&4!}%|%]!}$<$4$3$4$;$6$4$,!}&%%?&$%^!}$<!}&*$6%`%|&+%|&%&,&*%?$3!}$,!}&+%^&+&+%|&&&%%.%^%[&&&*%]%|&%%`!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%|&%%`%0%^&,&,%|&%%`&+!}$<&4!}&(%?%`%^%1%?&*%`%^&,%|&%%`$|&%%?%@&!%^%]!}$<%_%?&!&+%^$,!}&(%?%`%^%1%?&*%`%^&,%|&%%`%2&*&!&+!}$<%8%;$,!}&*&-&!%^&+!}$<%8%;$,!}&$%?&+%~$|&!%^&$%^&%&,&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,&*%?&,%^%`&2!}$<!}&-&%%|%_&&&*&$!}$,!}&+%?&$&(&!%|&%%`%*&-&$%.%^%[&&&*%]%|&%%`&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%2&(%]%?&,%^%]$^&,!}$<&%&-&!&!$,!}%^&%%]%0%^&+&+%|&&&%%+&%$_&!&&%[%~%^%]%2&*&!!}$<%_%?&!&+%^$,!}%@&!&&%[%~%^%]%2&*&!&+!}$<%8%;$,!}%@&!&&%[%~%^%]%.&-&!%^&+!}$<%8%;$,!}&(&*%^$`%?%[%{%^%$&$%?%`%^&+!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%$%_&*%?&$%^&+!}$<%_%?&!&+%^&6&6$,&4!}%|%]!}$<$5$8$6$5$4$,!}&%%?&$%^!}$<!}&*%?%]%|%?&,%|&&&%!}$,!}&+%^&+&+%|&&&%%.%^%[&&&*%]%|&%%`!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%|&%%`%0%^&,&,%|&%%`&+!}$<&4!}&(%?%`%^%1%?&*%`%^&,%|&%%`$|&%%?%@&!%^%]!}$<%_%?&!&+%^$,!}&(%?%`%^%1%?&*%`%^&,%|&%%`%2&*&!&+!}$<%8%;$,!}&*&-&!%^&+!}$<%8%;$,!}&$%?&+%~$|&!%^&$%^&%&,&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,&*%?&,%^%`&2!}$<!}&-&%%|%_&&&*&$!}$,!}&+%?&$&(&!%|&%%`%*&-&$%.%^%[&&&*%]%|&%%`&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%2&(%]%?&,%^%]$^&,!}$<&%&-&!&!$,!}%^&%%]%0%^&+&+%|&&&%%+&%$_&!&&%[%~%^%]%2&*&!!}$<%_%?&!&+%^$,!}%@&!&&%[%~%^%]%2&*&!&+!}$<%8%;$,!}%@&!&&%[%~%^%]%.&-&!%^&+!}$<%8%;$,!}&(&*%^$`%?%[%{%^%$&$%?%`%^&+!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%$%_&*%?&$%^&+!}$<%_%?&!&+%^&6&6$,&4!}%|%]!}$<$4$3$9$4$2$4$,!}&%%?&$%^!}$<!}&+%{%?&*%^&(&&%|&%&,$.%[&&&$!}$,!}&+%^&+&+%|&&&%%.%^%[&&&*%]%|&%%`!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%|&%%`%0%^&,&,%|&%%`&+!}$<&4!}&(%?%`%^%1%?&*%`%^&,%|&%%`$|&%%?%@&!%^%]!}$<%_%?&!&+%^$,!}&(%?%`%^%1%?&*%`%^&,%|&%%`%2&*&!&+!}$<%8%;$,!}&*&-&!%^&+!}$<%8%;$,!}&$%?&+%~$|&!%^&$%^&%&,&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,&*%?&,%^%`&2!}$<!}&-&%%|%_&&&*&$!}$,!}&+%?&$&(&!%|&%%`%*&-&$%.%^%[&&&*%]%|&%%`&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%2&(%]%?&,%^%]$^&,!}$<&%&-&!&!$,!}%^&%%]%0%^&+&+%|&&&%%+&%$_&!&&%[%~%^%]%2&*&!!}$<%_%?&!&+%^$,!}%@&!&&%[%~%^%]%2&*&!&+!}$<%8%;$,!}%@&!&&%[%~%^%]%.&-&!%^&+!}$<%8%;$,!}&(&*%^$`%?%[%{%^%$&$%?%`%^&+!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%$%_&*%?&$%^&+!}$<%_%?&!&+%^&6&6$,&4!}%|%]!}$<$3$9$4$4$7$6$,!}&%%?&$%^!}$<!}&3%^&%%]%^&+%~$.%[&&&$!}$,!}&+%^&+&+%|&&&%%.%^%[&&&*%]%|&%%`!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%|&%%`%0%^&,&,%|&%%`&+!}$<&4!}&(%?%`%^%1%?&*%`%^&,%|&%%`$|&%%?%@&!%^%]!}$<%_%?&!&+%^$,!}&(%?%`%^%1%?&*%`%^&,%|&%%`%2&*&!&+!}$<%8%;$,!}&*&-&!%^&+!}$<%8%;$,!}&$%?&+%~$|&!%^&$%^&%&,&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,&*%?&,%^%`&2!}$<!}&-&%%|%_&&&*&$!}$,!}&+%?&$&(&!%|&%%`%*&-&$%.%^%[&&&*%]%|&%%`&+!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%0&,%?&*&,${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`$|&%%]${%?&,%^%2&%%|&1!}$<&%&-&!&!$,!}&+%?&$&(&!%|&%%`%2&(%]%?&,%^%]$^&,!}$<&%&-&!&!$,!}%^&%%]%0%^&+&+%|&&&%%+&%$_&!&&%[%~%^%]%2&*&!!}$<%_%?&!&+%^$,!}%@&!&&%[%~%^%]%2&*&!&+!}$<%8%;$,!}%@&!&&%[%~%^%]%.&-&!%^&+!}$<%8%;$,!}&(&*%^$`%?%[%{%^%$&$%?%`%^&+!}$<%_%?&!&+%^$,!}&*%^%[&&&*%]%$%_&*%?&$%^&+!}$<%_%?&!&+%^&6&6%;",global_ip_block_list:"",is_using_ip_blocking:!1,snapshots:"%8&4!}%|%]!}$<$5$2$7$2$8$5$1$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0&+&,%?&,%^$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%$-&+%|&($-&!%^%?&%$-&,&&&&&!%~%|&,$-%[&&&!&!%?%@&&&*%?&,%|&&&%$-%@%^&,&0%^%^&%!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$4$1$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0&+%|&($-%?&(&(&*&&&.%?&!&+$-%_%^%]%^&*%?&!$-&*%^%`%|&+&,%^&*$-%?&%%]$-%[&&%]%^$-%_%^%]%^&*%?&!$-&*%^%`&-&!%?&,%|&&&%&+!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$4$8$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0%^&$%|&+&+%|&&&%&+$-%]&-&*%|&%%`$-&(%^&*%|&&%]&+$-&+&,%?&*&,&-&($-&+%{&-&,%]&&&0&%$-&$%?&!%_&-&%%[&,%|&&&%$-&+&+&$!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$3$;$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0%_&*%^&)&-%^&%&,&!&2$-%?&+%~%^%]$-&)&-%^&+&,%|&&&%&+$-%_%|&%%?&!$-&*&-&!%^$-&0%|&,%{%]&*%?&0%?&!$-%_%|&%%]%|&%%`!}&6&6$,&4!}%|%]!}$<$5$2$7$1$2$7$8$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$2$4$5$1$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%^&%%_&&&*%[%^&$%^&%&,$0&+&-&(%^&*%_&-&%%]$-&+%|&,%^$-%[&!%^%?&%&-&($-&0&&&*%~$-&,%{&*&&&-%`%{$-%^&%%_&&&*%[%^&$%^&%&,$-%?%`&*%^%^&$%^&%&,&+$-%?&%%]$-&&&*%]%^&*&+!}&6&6$,&4!}%|%]!}$<$5$2$5$5$3$2$1$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$4$5$3$1$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?&$%@&!%^&*$0&!%^%?&*&%$-%?%@&&&-&,$-%?&+%@%^&+&,&&&+$-&(&*&&%]&-%[&,%|&&&%$-%?&%%]$-%^&(%?&+$-&*&&&!%^$-%?&*&&&-&%%]$-%?&$%@&!%^&*$-&(%^&%&%&+&2&!&.%?&%%|%?!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$4$7$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0%|&%%_&*%?&+&,&*&-%[&,&-&*%^$-&+%|&($-&*%^&)&-%|&*%^&$%^&%&,&+$-%?&%%]$-%`&-%|%]%?&%%[%^!}&6&6$,&4!}%|%]!}$<$5$2$;$9$4$;$9$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$3$9$4$3$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&+&,%?&,%^&!&&%[%?&!%^&%%^&*%`&2$0&!&&%[%?&!$-&-&,%|&!%|&,%|%^&+$-%?&%%]$-&&&,%{%^&*$-%^&%%^&*%`&2$-%^%_%_%|%[%|%^&%%[&2$-&(&*&&%`&*%?&$$-&+&(&&&%&+&&&*&+!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$4$5$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0&$%^&%&-$-%[&&&%&,&*&&&!$-&$%^%?&+&-&*%^&+$-&%%?%?&)&+$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$4$3$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0%@%?&+%|%[$-%|&%%_&&&*&$%?&,%|&&&%$-%?%@&&&-&,$-%?%|&*$-&)&-%?&!%|&,&2$-%_%|&(&+!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$4$4$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0%@%?&+%|%[$-%|&%%_&&&*&$%?&,%|&&&%$-%?%@&&&-&,$-%?%|&*$-&)&-%?&!%|&,&2$-&,%|&(&+!}&6&6$,&4!}%|%]!}$<$5$2$8$4$2$1$1$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$9$3$9$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%`&*&&&-&%%]$-&0%?&,%^&*$-%?&%%]$-%]&*%|&%%~%|&%%`$-&0%?&,%^&*$0$4&,&+$-&*%^%]&-%[%|&%%`$-&!%^%?%]$-%]&*%|&%%~%|&%%`$-&0%?&,%^&*$-&,&&&&&!%~%|&,!}&6&6$,&4!}%|%]!}$<$5$2$5$9$4$9$6$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$6$2$5$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&,&&&1%|%[&+$-&*%^&!%^%?&+%^$-%|&%&.%^&%&,&&&*&2$-&,&*%|$-&(&*&&%`&*%?&$$0&,&*%|$-&!%?&0&+$-%?&%%]$-&*%^%`&-&!%?&,&&&*&2$-%?%[&,%|&.%|&,%|%^&+!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$4$6$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0&0%{%^&*%^$-%_%|&%%]$-%^&(%?$-%?%[&,%|&&&%&+$-&+%|&($-&+&-%@&$%|&,&,%?&!&+!}&6&6$,&4!}%|%]!}$<$5$3$3$5$8$1$4$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$7$6$;$1$4$5$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%`%{%`%^&$%|&+&+%|&&&%&+$0%|&%&.%^&%&,&&&*&2$-&-&+$-%`&*%^%^&%%{&&&-&+%^$-%`%?&+$-%^&$%|&+&+%|&&&%&+$-%?&%%]$-&+%|&%%~&+$-$2$;$;$1$-$3$1$2$9!}&6&6$,&4!}%|%]!}$<$5$2$;$9$4$;$8$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$3$9$4$3$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&+&,%?&,%^&!&&%[%?&!%^&%%^&*%`&2$0&!&&%[%?&!$-%^&%%^&*%`&2$-%^%_%_%|%[%|%^&%%[&2$-%@%^&%%^%_%|&,&+$-%?&%%]$-&&&(&(&&&*&,&-&%%|&,%|%^&+!}&6&6$,&4!}%|%]!}$<$5$2$5$9$4$9$7$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$6$2$5$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&,&&&1%|%[&+$-&*%^&!%^%?&+%^$-%|&%&.%^&%&,&&&*&2$-&,&*%|$-&(&*&&%`&*%?&$$0&0%{%?&,$-&,&&&1%|%[&+$-&*%^&!%^%?&+%^$-%|&%&.%^&%&,&&&*&2!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$3$9$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0&+%|&($-&*%^&)&-%|&*%^&$%^&%&,&+$-%[&!%^%?&%$-%?%|&*$-%?%[&,!}&6&6$,&4!}%|%]!}$<$5$3$4$2$3$4$9$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$7$9$4$7$6$1$4$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&*%^&+&&&-&*%[%^&+$-&+&$%?&!&!$-%@&-&+%|&%%^&+&+%^&+$0%?&+%@%^&+&,&&&+$-&+&$%?&!&!$-%@&-&+%|&%%^&+&+$-&&&$%@&-%]&+&$%?&%!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$5$2$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0%{&&&0$-%^&(%?$-&0&&&*%~&+$-&+&,%?&,%^&+$-&+%|&(&+!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$4$;$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0&+&(%^%[&+$-&*%^%`%|&&&%%?&!$-&$%?&%%?%`%^&*&+!}&6&6$,&4!}%|%]!}$<$5$2$8$1$;$5$2$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$8$4$2$7$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&$&+$-%{&,%_$0%{&2&(&&&1%|%?$-&,%?&+%~$-%_&&&*%[%^$-&%&-&,&*%|%^&%&,$-&*%^%]&-%[&,%|&&&%$-&+&,&*%?&,%^%`%|%^&+!}&6&6$,&4!}%|%]!}$<$5$2$7$1$2$7$6$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$2$4$5$1$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%^&%%_&&&*%[%^&$%^&%&,$0&*%[&*%?$-%[&&&*&*%^%[&,%|&.%^$-%?%[&,%|&&&%$-%[&!%^%?&%&-&($-%^&%%_&&&*%[%^&$%^&%&,!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$4$9$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0&+&(%^%[&+$-&+%|&(&+$-%}&&%@$-%?%|%]%^&+!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$4$2$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+$0&+%|&($-&+&,%?&,&-&+$-&*%^&(&&&*&,&+!}&6&6$,&4!}%|%]!}$<$5$2$7$1$2$7$;$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$2$4$5$1$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}%[%_&(&-%@$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&&&$&(&!%|%?&%%[%^$0&*%^&+&&&-&*%[%^&+$0&(&&&!%|%[%|%^&+$0%[&!%^%?&%&-&($0&+&-&(%^&*%_&-&%%]$0!}&6&6$,&4!}%|%]!}$<$5$2$;$9$4$;$7$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$3$9$4$3$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&+&,%?&,%^&!&&%[%?&!%^&%%^&*%`&2$0&+&,%?&,%^$-&*%^&%%^&0%?%@&!%^$-%^&%%^&*%`&2$-&*%^&+&&&-&*%[%^&+!}&6&6$,&4!}%|%]!}$<$5$2$5$5$3$2$3$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$4$5$3$1$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?&$%@&!%^&*$0&0&&&*%~%|&%%`$-&&&-&*$-&(%?&*&,&%%^&*&+$-%?&$%@&!%^&*$-&(%^&%&%&+&2&!&.%?&%%|%?!}&6&6$,&4!}%|%]!}$<$5$3$3$5$8$6$5$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$7$6$;$4$7$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}%[%_&(&-%@$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%`%{%`%]%?&,%?$0%|&%&.%^&%&,&&&*&2%^&1&(&!&&&*%^&*$0%[%{%?&*&,%|&%%]%^&1$.%{&,&$&!!}&6&6$,&4!}%|%]!}$<$5$2$5$5$3$2$2$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$4$5$3$1$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?&$%@&!%^&*$0&0%{%?&,$-%^&(%?$-%]&&%|&%%`$-%?&$%@&!%^&*$-&(%^&%&%&+&2&!&.%?&%%|%?!}&6&6$,&4!}%|%]!}$<$5$2$6$5$5$3$3$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$9$8$9$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%`&+&,%?&*$0%?%`&+&,%?&*$-&!%|%@&*%?&*&2$-&,&&&&&!&+$-%?&%%]$-&*%^&+&&&-&*%[%^&+!}&6&6$,&4!}%|%]!}$<$5$2$6$5$5$3$4$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$9$8$9$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%`&+&,%?&*$0%{&&&0$-%]&&%^&+$-%?&%%?%^&*&&%@%|%[$-%]%|%`%^&+&,%|&&&%$-&0&&&*%~!}&6&6$,&4!}%|%]!}$<$5$3$2$4$5$7$9$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$;$8$4$8$4$;$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$%?&)$0%[&$%?&)$-&*%^&+&&&-&*%[%^&+&-&,%|&!%|&,%|%^&+$-&$&&%]%^&!$-&-&+%^&*&+!}&6&6$,&4!}%|%]!}$<$5$3$2$4$5$7$8$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$;$8$4$8$4$;$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$%?&)$0%[&$%?&)$-&(&-%@&!%|%[%?&,%|&&&%&+$-%?&%%]$-&(%^%^&*$-&*%^&.%|%^&0!}&6&6$,&4!}%|%]!}$<$5$2$;$9$4$;$3$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$3$9$4$3$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%{%^%?&,%|&+&!%?&%%]&+$0&!%^%?&*&%$-%?%@&&&-&,$-%{%^%?&,$-%|&+&!%?&%%]&+!}&6&6$,&4!}%|%]!}$<$5$3$2$7$4$5$;$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$7$1$9$3$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}%|&%&,&*%?&%%^&,$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%]%^&+%~&,&&&($0&,&&&(%|%[&+$0&,&&&(%|%[&+%=&$%^&%&-$.%{&,&$&!!}&6&6$,&4!}%|%]!}$<$5$2$6$5$5$3$6$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$9$8$9$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%`&+&,%?&*$0%@%^&%%^%_%|&,&+$-%?&%%?%^&*&&%@%|%[$-%]%|%`%^&+&,%|&&&%!}&6&6$,&4!}%|%]!}$<$5$3$1$9$1$4$5$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$7$4$3$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$%?&)$0%[&$%?&)$-%|&%&(&-&,&+$-%?&%%]$-&,%^&+&,$-%[%?&+%^$-%]%?&,%?!}&6&6$,&4!}%|%]!}$<$5$2$7$1$2$7$7$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$2$4$5$1$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%^&%%_&&&*%[%^&$%^&%&,$0&+&-&(%^&*%_&-&%%]$-%^&%%_&&&*%[%^&$%^&%&,!}&6&6$,&4!}%|%]!}$<$5$2$8$1$;$5$1$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$8$4$2$7$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&$&+$-%{&,%_$0%{&2&(&&&1%|%?$-&,%?&+%~$-%_&&&*%[%^$-&$%^&$%@%^&*&+!}&6&6$,&4!}%|%]!}$<$5$2$8$1$;$5$4$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$8$4$2$7$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&$&+$-%{&,%_$0%{%|&+&,&&&*&2$-%{&2&(&&&1%|%?$-&,%?&+%~$-%_&&&*%[%^!}&6&6$,&4!}%|%]!}$<$5$3$2$4$5$5$4$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$;$8$4$5$5$3$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%^%`&*%|%]$0%^%`&*%|%]$-&)&-%^&+&,%|&&&%&+$-%?&%%]$-%?&%&+&0%^&*&+!}&6&6$,&4!}%|%]!}$<$5$2$7$2$8$3$8$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$3$2$7$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&)&-%?&!%|&,&2$-%|&$&(&!%^&$%^&%&,%?&,%|&&&%$-&(&!%?&%&+!}&6&6$,&4!}%|%]!}$<$5$2$;$9$4$;$4$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$3$9$4$3$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%{%^%?&,%|&+&!%?&%%]&+$0%{%^%?&,$-%|&+&!%?&%%]$-%|&$&(%?%[&,&+!}&6&6$,&4!}%|%]!}$<$5$2$6$5$5$4$1$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$9$8$9$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$&&&($0%[&&%?&!$-&$%|&%%^$-&$%^&,%{%?&%%^$-&+&&&-&*%[%^&+!}&6&6$,&4!}%|%]!}$<$5$2$6$5$5$3$5$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$9$8$9$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%`&+&,%?&*$0%?%`&+&,%?&*$-%]%?&,%?$-%?&%%]$-&,&*%^&%%]&+!}&6&6$,&4!}%|%]!}$<$5$2$6$5$5$4$2$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$9$8$9$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$&&&($0&$%|&,%|%`%?&,%|&%%`$-%[&$&$$-%^&$%|&+&+%|&&&%&+!}&6&6$,&4!}%|%]!}$<$5$2$8$3$7$1$5$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$9$2$1$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$%?&)$0%@&*&&&0&+%^$-%[&$%?&)$-%?&(&(&!%|%[%?&,%|&&&%&+!}&6&6$,&4!}%|%]!}$<$5$2$5$8$1$;$9$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$5$5$7$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&+&%%?&($0&+&%%?&($-&+&-%@&+&,%|&,&-&,%^&+$-&+%^%[&,&&&*!}&6&6$,&4!}%|%]!}$<$5$2$8$3$7$1$7$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$9$2$1$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$%?&)$0%?%[%[%^&+&+$-%[&$%?&)$-&+&&&-&*%[%^$-%[&&%]%^!}&6&6$,&4!}%|%]!}$<$5$3$2$4$5$7$6$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$;$8$4$8$4$;$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$%?&)$0%_&*%^&)&-%^&%&,$-%[&$%?&)$-&)&-%^&+&,%|&&&%&+!}&6&6$,&4!}%|%]!}$<$5$2$;$;$1$8$8$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$3$;$8$7$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%{&&&$%^&!%?&%%]$-&+%^%[&-&*%|&,&2$-&*%^&+%^%?&*%[%{!}&6&6$,&4!}%|%]!}$<$5$3$2$7$4$6$1$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$7$1$9$3$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}%|&%&,&*%?&%%^&,$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%]%^&+%~&,&&&($0%]%?&,%?%@%?&+%^&+$.%{&,&$!}&6&6$,&4!}%|%]!}$<$5$3$4$2$3$4$8$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$7$9$4$7$6$1$4$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&*%^&+&&&-&*%[%^&+$-&+&$%?&!&!$-%@&-&+%|&%%^&+&+%^&+!}&6&6$,&4!}%|%]!}$<$5$2$9$4$2$5$6$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$5$4$5$1$1$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*&$%?&*%~%^&,&+$0%]%?&,%?$-&*%^&+&&&-&*%[%^&+!}&6&6$,&4!}%|%]!}$<$5$3$2$4$5$7$5$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$;$8$4$8$4$;$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$%?&)$0&*%^&+%^%?&*%[%{$-%{%|%`%{&!%|%`%{&,&+!}&6&6$,&4!}%|%]!}$<$5$2$6$5$5$3$;$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$9$8$9$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$&&&($0%_&*%^&)&-%^&%&,$-&)&-%^&+&,%|&&&%&+!}&6&6$,&4!}%|%]!}$<$5$2$8$3$7$1$8$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$9$2$1$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$%?&)$0%[&$%?&)$-%]&&%[&-&$%^&%&,%?&,%|&&&%!}&6&6$,&4!}%|%]!}$<$5$2$6$5$5$3$9$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$9$8$9$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$&&&($0&(&*&&%}%^%[&,$-&*%^&+&&&-&*%[%^&+!}&6&6$,&4!}%|%]!}$<$5$3$2$7$4$6$2$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$7$1$9$3$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}%|&%&,&*%?&%%^&,$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%]%^&+%~&,&&&($0%{%^&!&($.%{&,&$&!!}&6&6$,&4!}%|%]!}$<$5$3$2$7$4$6$3$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$7$1$9$3$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}%|&%&,&*%?&%%^&,$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%]%^&+%~&,&&&($0%?%@&&&-&,$.%{&,&$!}&6&6$,&4!}%|%]!}$<$5$2$7$1$2$7$9$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$2$4$5$1$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}%[%_&(&-%@$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&&&$&(&!%|%?&%%[%^$0&$&&%]%^&!&+$0!}&6&6$,&4!}%|%]!}$<$5$2$5$8$1$;$8$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$5$5$7$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&+&%%?&($0&&&.%^&*&.%|%^&0$-&+&%%?&(!}&6&6$,&4!}%|%]!}$<$5$2$8$1$;$5$3$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$8$4$2$7$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&$&+$-%{&,%_$0%{&2&(&&&1%|%?$-$2$1$2!}&6&6$,&4!}%|%]!}$<$5$2$8$3$7$1$6$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$9$2$1$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$%?&)$0%{&&&0$-%[%|&,%^$-%[&$%?&)!}&6&6$,&4!}%|%]!}$<$5$3$1$9$1$4$4$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$7$4$3$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$%?&)$0%[&$%?&)$-&$&&%]%^&!&+$-$1!}&6&6$,&4!}%|%]!}$<$5$2$;$9$4$;$5$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$3$9$4$3$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&+&,%?&,%^&!&&%[%?&!%^&%%^&*%`&2!}&6&6$,&4!}%|%]!}$<$5$3$2$4$5$7$7$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$;$8$4$8$4$;$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$%?&)$0%[&$%?&)$-&&&-&,&(&-&,!}&6&6$,&4!}%|%]!}$<$5$3$2$;$2$6$8$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$7$3$4$4$6$;$2$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&0%?&,%^&*$-&*%^&+%^%?&*%[%{!}&6&6$,&4!}%|%]!}$<$5$3$2$7$4$5$8$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$7$1$9$3$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}%|&%&,&*%?&%%^&,$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%]%^&+%~&,&&&($0!}&6&6$,&4!}%|%]!}$<$5$3$2$;$2$6$9$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$7$3$4$4$6$;$2$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%|&*$-&*%^&+%^%?&*%[%{!}&6&6$,&4!}%|%]!}$<$5$3$2$;$2$6$7$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$7$3$4$4$6$;$2$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&*%^&+%^%?&*%[%{!}&6&6$,&4!}%|%]!}$<$5$2$5$5$3$1$;$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$4$5$3$1$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?&$%@&!%^&*!}&6&6$,&4!}%|%]!}$<$5$2$6$5$5$3$2$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$9$8$9$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%?%`&+&,%?&*!}&6&6$,&4!}%|%]!}$<$5$2$8$1$;$4$;$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$8$4$2$7$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&$&+$-%{&,%_!}&6&6$,&4!}%|%]!}$<$5$3$2$4$5$5$3$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$6$;$8$4$5$5$3$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%^%`&*%|%]!}&6&6$,&4!}%|%]!}$<$5$2$5$8$1$;$7$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$5$5$7$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0&+&%%?&(!}&6&6$,&4!}%|%]!}$<$5$2$6$5$5$3$8$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$3$9$8$9$5$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$&&&(!}&6&6$,&4!}%|%]!}$<$5$2$8$3$7$1$4$,!}&.!}$<$2$2$,!}%^!}$<$2$7$1$4$9$2$1$9$1$1$,!}&-!}$<&4!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(&+!}$,!}%{&&&+&,!}$<!}&0&0&0$.%^&(%?$.%`&&&.!}$,!}&(%?&,%{!}$<!}$0%[&$%?&)!}&6&6%;",v6_tracking_dest:"https://user-event-tracker.crazyegg.com/",v6_secure_tracking_dest:"https://user-event-tracker.crazyegg.com/",v11_tracking_dest:"https://tracking.crazyegg.com/v11",page_views_limit_reached:null,recordings_dest:"https://recording.crazyegg.com",recordings_sampling_dest:"https://sample-api-v2.crazyegg.com",ratio_v2_shadow_dest:"https://sampling-ratio.crazyegg.com/ratio/v2/shadow",recordings_number:500,recordings_activation:null,font_domains:["fonts.googleapis.com","allfont.net"]},"undefined"!=typeof CE_LOCAL_SCRIPT_HOST&&(CE2.data.common_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/common-scripts-source/latest.js",CE2.data.tracking_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/tracking-scripts-source/latest.js",CE2.data.trackingpagestate_script_url=CE_LOCAL_SCRIPT_HOST+"/pages/versioned/trackingpagestate-scripts-source/latest.js");try{if(window.performance&&window.performance.getEntriesByType&&window.localStorage){var navigation=window.performance.getEntriesByType("navigation")[0];if("back_forward"!==navigation.type)localStorage.setItem("ce_data_time",+new Date);else if(localStorage.getItem("ce_data_time")){var time=parseInt(localStorage.getItem("ce_data_time"),10);3e5<+new Date-time&&(CE2.use_loaded_data=!1)}}}catch($){CE2.use_loaded_data=!0}if(CE2.use_loaded_data)CE2.handleUserData();else{var xhr=new XMLHttpRequest;xhr.onreadystatechange=function(){if(4==xhr.readyState){try{200==xhr.status&&xhr.responseText&&(localStorage.setItem("ce_data_time",+new Date),CE2.data=JSON.parse(xhr.responseText))}catch($){}CE2.handleUserData()}},xhr.open("GET","https://script.crazyegg.com/pages/data-scripts/0005/9240.json?"+ +new Date,!0),xhr.send()}