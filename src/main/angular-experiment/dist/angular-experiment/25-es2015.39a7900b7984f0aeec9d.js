(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{oogQ:function(t,e,s){"use strict";s.r(e),s.d(e,"amplify_select_mfa_type",(function(){return u}));var i=s("BZ0O"),a=s("Nt7R"),n=s("JIIv"),h=s("s1tr"),l=s("CHJ9"),T=s("aut5"),o=s("v4IS");const M=new a.a("SelectMFAType"),u=class{constructor(t){Object(i.g)(this,t),this.handleSubmit=t=>this.verify(t),this.TOTPSetup=!1,this.selectMessage=null,this.MFAMethod=null,this.isTOTP=!1,this.isNoMFA=!1,this.isSMS=!1,this.loading=!1}handleRadioButtonChange(t){this.TOTPSetup=!1,this.selectMessage=null,this.isNoMFA=!1,this.isTOTP=!1,this.isSMS=!1;const{value:e,type:s,checked:i}=t.target,a=["radio","checkbox"].includes(s);e===h.c.SMS&&a&&(this.isSMS=i),e===h.c.TOTP&&a&&(this.isTOTP=i),e===h.c.NOMFA&&a&&(this.isNoMFA=i)}async verify(t){t&&t.preventDefault(),M.debug("MFA Type Values",{TOTP:this.isTOTP,SMS:this.isSMS,"No MFA":this.isNoMFA}),this.isTOTP?this.MFAMethod=h.c.TOTP:this.isSMS?this.MFAMethod=h.c.SMS:this.isNoMFA&&(this.MFAMethod=h.c.NOMFA);const e=this.authData;if(!o.a||"function"!=typeof o.a.setPreferredMFA)throw new Error(T.d);this.loading=!0;try{const t=await o.a.setPreferredMFA(e,this.MFAMethod);M.debug("Set Preferred MFA Succeeded",t),this.selectMessage=`${n.a.get(l.a.SUCCESS_MFA_TYPE)} ${this.MFAMethod}`}catch(s){const{message:t}=s;t===T.l||t===T.m?(this.TOTPSetup=!0,this.selectMessage=n.a.get(l.a.SETUP_TOTP_REQUIRED)):(M.debug("Set Preferred MFA failed",s),this.selectMessage=n.a.get(l.a.UNABLE_TO_SETUP_MFA_AT_THIS_TIME))}finally{this.loading=!1}}contentBuilder(){if(!this.MFATypes||Object.keys(this.MFATypes).length<2)return M.debug(n.a.get(l.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)),Object(i.f)("div",null,Object(i.f)("a",null,n.a.get(l.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)));const{SMS:t,TOTP:e,Optional:s}=this.MFATypes;return Object(i.f)("amplify-form-section",{submitButtonText:n.a.get(l.a.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT),headerText:n.a.get(l.a.SELECT_MFA_TYPE_HEADER_TEXT),handleSubmit:t=>this.handleSubmit(t),loading:this.loading},t?Object(i.f)("amplify-radio-button",{key:"sms",name:"MFAType",value:"SMS",label:"SMS",handleInputChange:t=>this.handleRadioButtonChange(t)}):null,e?Object(i.f)("amplify-radio-button",{key:"totp",name:"MFAType",value:"TOTP",label:"TOTP",handleInputChange:t=>this.handleRadioButtonChange(t)}):null,s?Object(i.f)("amplify-radio-button",{key:"noMFA",name:"MFAType",value:"NOMFA",label:"No MFA",handleInputChange:t=>this.handleRadioButtonChange(t)}):null)}render(){return Object(i.f)("div",null,this.contentBuilder(),this.TOTPSetup?Object(i.f)("amplify-totp-setup",{user:this.authData}):null)}}}}]);