(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"29kL":function(t,n,e){"use strict";e.r(n),e.d(n,"amplify_nav",(function(){return l})),e.d(n,"amplify_sign_out",(function(){return f}));var s=e("BZ0O"),a=e("JIIv"),i=e("s1tr"),c=e("CHJ9"),u=e("aut5"),o=e("JmXW"),r=e("v4IS");const l=class{constructor(t){Object(s.g)(this,t)}render(){return Object(s.f)("nav",{class:"nav"},Object(s.f)("slot",null))}};l.style=".nav{display:-ms-flexbox;display:flex;-ms-flex:1 1 0%;flex:1 1 0%;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.nav>*{margin:0 0.5em}";const f=class{constructor(t){Object(s.g)(this,t),this.handleAuthStateChange=o.d,this.buttonText=a.a.get(c.a.SIGN_OUT)}async signOut(t){if(t&&t.preventDefault(),!r.a||"function"!=typeof r.a.signOut)throw new Error(u.d);try{await r.a.signOut(),this.handleAuthStateChange(i.a.SignedOut)}catch(n){Object(o.a)(n)}}render(){return Object(s.f)("amplify-button",{slot:"sign-out",onClick:t=>this.signOut(t),"data-test":"sign-out-button"},this.buttonText)}}}}]);