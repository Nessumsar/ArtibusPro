(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{GWfx:function(t,e,a){"use strict";a.r(e),a.d(e,"amplify_federated_sign_in",(function(){return r}));var i=a("BZ0O"),n=a("Nt7R"),d=a("s1tr"),s=a("aut5"),o=a("v4IS");const f=new n.a("amplify-federated-sign-in"),r=class{constructor(t){Object(i.g)(this,t),this.authState=d.a.SignIn,this.federated={}}componentWillLoad(){if(!o.a||"function"!=typeof o.a.configure)throw new Error(s.d);const{oauth:t={}}=o.a.configure({});t.domain?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t):t.awsCognito&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t.awsCognito)),t.auth0&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),t.auth0))}render(){return this.federated?Object.values(d.a).includes(this.authState)?(f.debug("federated Config is",this.federated),Object(i.f)("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(i.f)("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(i.f)("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(f.debug("federated prop is empty. show nothing"),f.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)}}}}]);