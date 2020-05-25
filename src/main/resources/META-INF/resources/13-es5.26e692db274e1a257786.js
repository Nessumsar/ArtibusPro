function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{W1Jz:function(e,t,r){"use strict";r.r(t),r.d(t,"amplify_button",(function(){return i})),r.d(t,"amplify_loading_spinner",(function(){return a})),r.d(t,"amplify_section",(function(){return l}));var o=r("BZ0O"),n=(r("s1tr"),r("CHJ9"),r("aut5"),r("JmXW")),i=function(){function e(t){var r=this;_classCallCheck(this,e),Object(o.g)(this,t),this.type="button",this.variant="button",this.disabled=!1,this.handleClick=function(e){if(r.handleButtonClick)r.handleButtonClick(e);else if(Object(n.e)(r.el)&&"submit"==r.type){var t=r.el.closest("form");if(!t){var o=r.el.closest("amplify-form-section");t=o&&o.shadowRoot.querySelector("form")}if(t){e.preventDefault();var i=document.createElement("button");i.type=r.type,i.style.display="none",t.appendChild(i),i.click(),i.remove()}}}}return _createClass(e,[{key:"render",value:function(){return Object(o.f)("button",{class:_defineProperty({},this.variant,!0),type:this.type,disabled:this.disabled,onClick:this.handleClick},Object(o.f)("slot",null))}},{key:"el",get:function(){return Object(o.e)(this)}}]),e}();i.style=":host{--background-color:var(--amplify-primary-color);--background-color-active:var(--amplify-primary-shade);--background-color-disable:var(--amplify-primary-tint);--color:var(--amplify-primary-contrast);--border-width:0;--border-color:initial;--border-style:initial;--link-color:var(--amplify-primary-color);--link-hover:var(--amplify-primary-tint);--link-active:var(--amplify-primary-shade);width:100%;text-align:center}@media (min-width: 672px){:host{width:inherit}}.button{width:100%;min-width:153px;display:inline-block;margin-bottom:0;font-size:var(--amplify-text-xxs);font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;color:var(--color);text-transform:uppercase;padding:14px;letter-spacing:1.1px;background-color:var(--background-color);border-width:var(--border-width);border-color:var(--border-color);border-style:var(--border-style)}.button:active{opacity:1;background-color:var(--background-color-active)}.button:hover{opacity:0.8}.button:disabled{opacity:0.65;cursor:auto;background-color:var(--background-color-disable)}.anchor{color:var(--link-color);background-color:inherit;padding:0;border:none;font:inherit;cursor:pointer}.anchor:link{color:var(--link-color);text-decoration:none}.anchor:hover{color:var(--link-hover);text-decoration:underline}.anchor:active{color:var(--link-active);text-decoration:underline}";var a=function(){function e(t){_classCallCheck(this,e),Object(o.g)(this,t)}return _createClass(e,[{key:"render",value:function(){return Object(o.f)("amplify-icon",{class:"loading-spinner",name:"loading"})}}]),e}();a.style=".loading-spinner svg{-webkit-animation:loading-spinner 1s linear infinite;animation:loading-spinner 1s linear infinite;width:0.875rem;height:0.875rem}@-webkit-keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loading-spinner{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}";var l=function(){function e(t){_classCallCheck(this,e),Object(o.g)(this,t),this.role="application"}return _createClass(e,[{key:"render",value:function(){return Object(o.f)("section",{class:"section",role:this.role},Object(o.f)("slot",null))}},{key:"el",get:function(){return Object(o.e)(this)}}]),e}();l.style=":host{--background-color:var(--amplify-white);--font-family:var(--amplify-font-family)}.section{position:relative;margin-bottom:20px;background-color:var(--background-color);padding:35px 40px;text-align:left;display:inline-block;border-radius:6px;-webkit-box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);box-shadow:1px 1px 4px 0 rgba(0, 0, 0, 0.15);-webkit-box-sizing:border-box;box-sizing:border-box;font-family:var(--font-family);width:100%;min-width:320px}@media (min-width: 672px){.section{width:auto;min-width:460px}}"}}]);