function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=u||l||Function("return this")(),c=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return s.Date.now()};function v(e,t,n){var i,r,o,a,f,u,l=0,s=!1,c=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(h,t),s?y(e):a}function T(e){var n=e-u;return void 0===u||n>=t||n<0||c&&e-l>=o}function h(){var e=g();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-u);return c?d(n,o-(e-l)):n}(e))}function w(e){return f=void 0,v&&i?y(e):(i=r=void 0,a)}function O(){var e=g(),n=T(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(c)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,p(n)&&(s=!!n.leading,o=(c="maxWait"in n)?m(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},O.flush=function(){return void 0===f?a:w(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),j={},T=y.elements.email,h=y.elements.message;y.addEventListener("input",e(t)((function(e){"email"===e.target.name&&(j.email=e.target.value);"message"===e.target.name&&(j.message=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.addEventListener("submit",(function(e){if(e.preventDefault(),""!==j.email&&void 0!==j.email&&""!==j.message&&void 0!==j.message)return console.log(j),localStorage.removeItem("feedback-form-state"),void e.currentTarget.reset();if(!(""!==j.email&&void 0!==j.email||""!==j.message&&void 0!==j.message))return void alert("Ви не ввели ваші дані");alert("Ви ввели не всі дані")})),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(T.value=e.email?e.email:"",h.value=e.message?e.message:"",j.email=e.email,j.message=e.message)}();
//# sourceMappingURL=03-feedback.8430a4cc.js.map