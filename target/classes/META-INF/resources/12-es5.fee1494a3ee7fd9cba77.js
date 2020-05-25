function asyncGeneratorStep(e,t,a,n,r,s,i){try{var o=e[s](i),u=o.value}catch(c){return void a(c)}o.done?t(u):Promise.resolve(u).then(n,r)}function _asyncToGenerator(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var s=e.apply(t,a);function i(e){asyncGeneratorStep(s,n,r,i,o,"next",e)}function o(e){asyncGeneratorStep(s,n,r,i,o,"throw",e)}i(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{HaBs:function(e,t,a){"use strict";a.r(t),a.d(t,"amplify_authenticator",(function(){return h}));var n=a("BZ0O"),r=a("Nt7R"),s=a("Qycn"),i=a("s1tr"),o=(a("CHJ9"),a("aut5")),u=a("JmXW"),c=a("TESy"),l=a("v4IS"),f=new r.a("Authenticator"),h=function(){function e(t){var a=this;_classCallCheck(this,e),Object(n.g)(this,t),this.initialAuthState=i.a.SignIn,this.authState=i.a.Loading,this.toastMessage="",this.onAuthStateChange=function(e,t){if(void 0===e)return f.error("nextAuthState cannot be undefined");f.info("Inside onAuthStateChange Method current authState:",a.authState),a.authState=e===i.a.SignedOut?a.initialAuthState:e,void 0!==t&&(a.authData=t,f.log("Auth Data was set:",a.authData)),f.info("authState has been updated to ".concat(a.authState))}}var t,a;return _createClass(e,[{key:"componentWillLoad",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.a.listen(o.j,(function(e){var t=e.payload,n=t.event,r=t.data;switch(n){case"cognitoHostedUI":return a.onAuthStateChange(i.a.SignedIn,r);case"cognitoHostedUI_failure":case"parsingUrl_failure":case"signOut":case"customGreetingSignOut":return a.onAuthStateChange(i.a.SignIn,null)}})),s.a.listen(o.i,(function(e){var t=e.payload;switch(t.event){case o.h:t.message&&(a.toastMessage=t.message);break;case o.a:t.message&&(a.onAuthStateChange(t.message,t.data),a.toastMessage="");break;default:f.warn("Unhandled Auth Event",t.event)}})),Object(c.j)("amplify-authenticator"),t=localStorage.getItem(o.f),localStorage.removeItem(o.f),e.t0="true"!==t,!e.t0){e.next=7;break}return e.next=7,this.checkUser();case 7:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"checkUser",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l.a&&"function"==typeof l.a.currentAuthenticatedUser){e.next=2;break}throw new Error(o.d);case 2:return e.prev=2,e.next=5,l.a.currentAuthenticatedUser();case 5:t=e.sent,Object(u.d)(i.a.SignedIn,t),e.next=24;break;case 9:e.prev=9,e.t0=e.catch(2),a=null;try{a=localStorage.getItem(o.k)}catch(n){f.debug("Failed to get the auth state from local storage",n)}if(e.prev=13,e.t1=a===i.a.SignedIn,!e.t1){e.next=18;break}return e.next=18,l.a.signOut();case 18:Object(u.d)(this.initialAuthState),e.next=24;break;case 21:e.prev=21,e.t2=e.catch(13),f.debug("Failed to sign out",e.t2);case 24:case"end":return e.stop()}}),e,this,[[2,9],[13,21]])}))),function(){return t.apply(this,arguments)})},{key:"renderAuthComponent",value:function(e){switch(e){case i.a.SignIn:return Object(n.f)("slot",{name:"sign-in"},Object(n.f)("amplify-sign-in",{federated:this.federated,usernameAlias:this.usernameAlias}));case i.a.ConfirmSignIn:return Object(n.f)("slot",{name:"confirm-sign-in"},Object(n.f)("amplify-confirm-sign-in",{user:this.authData}));case i.a.SignUp:return Object(n.f)("slot",{name:"sign-up"},Object(n.f)("amplify-sign-up",{usernameAlias:this.usernameAlias}));case i.a.ConfirmSignUp:return Object(n.f)("slot",{name:"confirm-sign-up"},Object(n.f)("amplify-confirm-sign-up",{user:this.authData,usernameAlias:this.usernameAlias}));case i.a.ForgotPassword:return Object(n.f)("slot",{name:"forgot-password"},Object(n.f)("amplify-forgot-password",{usernameAlias:this.usernameAlias}));case i.a.ResetPassword:return Object(n.f)("slot",{name:"require-new-password"},Object(n.f)("amplify-require-new-password",{user:this.authData}));case i.a.VerifyContact:return Object(n.f)("slot",{name:"verify-contact"},Object(n.f)("amplify-verify-contact",{user:this.authData}));case i.a.TOTPSetup:return Object(n.f)("slot",{name:"totp-setup"},Object(n.f)("amplify-totp-setup",{user:this.authData}));case i.a.Loading:return Object(n.f)("slot",{name:"loading"},Object(n.f)("div",null,"Loading..."));case i.a.SignedIn:return[Object(n.f)("slot",{name:"greetings"}),Object(n.f)("slot",null)];default:throw new Error("Unhandled auth state: ".concat(e))}}},{key:"componentDidUnload",value:function(){var e=this;s.a.remove(o.i,(function(t){var a=t.payload;a.event===o.h&&a.message&&(e.toastMessage=a.message)}))}},{key:"render",value:function(){var e=this;return Object(n.f)(n.a,null,this.toastMessage?Object(n.f)("amplify-toast",{message:this.toastMessage,handleClose:function(){e.toastMessage=""},"data-test":"authenticator-error"}):null,this.renderAuthComponent(this.authState))}}]),e}()}}]);