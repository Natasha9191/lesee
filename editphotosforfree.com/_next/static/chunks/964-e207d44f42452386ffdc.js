(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{8363:function(e,n){"use strict";n.Z=function(e,n){if(e&&n){var r=Array.isArray(n)?n:n.split(","),t=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return r.some((function(e){var n=e.trim().toLowerCase();return"."===n.charAt(0)?t.toLowerCase().endsWith(n):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}},2447:function(e,n,r){"use strict";function t(e,n,r,t,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void r(l)}u.done?n(c):Promise.resolve(c).then(t,o)}function o(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function u(e){t(a,o,i,u,c,"next",e)}function c(e){t(a,o,i,u,c,"throw",e)}u(void 0)}))}}r.d(n,{Z:function(){return o}})},3356:function(e,n,r){"use strict";r.d(n,{uI:function(){return te}});var t=r(7294),o=r(5697),i=r.n(o),a=r(655),u=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function c(e,n){var r=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var r=n.split(".").pop().toLowerCase(),t=u.get(r);t&&Object.defineProperty(e,"type",{value:t,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof r.path){var t=e.webkitRelativePath;Object.defineProperty(r,"path",{value:"string"===typeof n?n:"string"===typeof t&&t.length>0?t:e.name,writable:!1,configurable:!1,enumerable:!0})}return r}var l=[".DS_Store","Thumbs.db"];function s(e){return(null!==e.target&&e.target.files?d(e.target.files):[]).map((function(e){return c(e)}))}function f(e,n){return(0,a.mG)(this,void 0,void 0,(function(){var r;return(0,a.Jh)(this,(function(t){switch(t.label){case 0:return e.items?(r=d(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,r]:[4,Promise.all(r.map(v))]):[3,2];case 1:return[2,p(g(t.sent()))];case 2:return[2,p(d(e.files).map((function(e){return c(e)})))]}}))}))}function p(e){return e.filter((function(e){return-1===l.indexOf(e.name)}))}function d(e){for(var n=[],r=0;r<e.length;r++){var t=e[r];n.push(t)}return n}function v(e){if("function"!==typeof e.webkitGetAsEntry)return m(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?b(n):m(e)}function g(e){return e.reduce((function(e,n){return(0,a.fl)(e,Array.isArray(n)?g(n):[n])}),[])}function m(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var r=c(n);return Promise.resolve(r)}function y(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){return[2,e.isDirectory?b(e):h(e)]}))}))}function b(e){var n=e.createReader();return new Promise((function(e,r){var t=[];!function o(){var i=this;n.readEntries((function(n){return(0,a.mG)(i,void 0,void 0,(function(){var i,u,c;return(0,a.Jh)(this,(function(a){switch(a.label){case 0:if(n.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(t)];case 2:return i=a.sent(),e(i),[3,4];case 3:return u=a.sent(),r(u),[3,4];case 4:return[3,6];case 5:c=Promise.all(n.map(y)),t.push(c),o(),a.label=6;case 6:return[2]}}))}))}),(function(e){r(e)}))}()}))}function h(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){return[2,new Promise((function(n,r){e.file((function(r){var t=c(r,e.fullPath);n(t)}),(function(e){r(e)}))}))]}))}))}var D=r(8363);function w(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return O(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}var F="file-invalid-type",A="file-too-large",j="file-too-small",E="too-many-files",k=function(e){e=Array.isArray(e)&&1===e.length?e[0]:e;var n=Array.isArray(e)?"one of ".concat(e.join(", ")):e;return{code:F,message:"File type must be ".concat(n)}},C=function(e){return{code:A,message:"File is larger than ".concat(e," bytes")}},P=function(e){return{code:j,message:"File is smaller than ".concat(e," bytes")}},S={code:E,message:"Too many files"};function x(e,n){var r="application/x-moz-file"===e.type||(0,D.Z)(e,n);return[r,r?null:k(n)]}function z(e,n,r){if(R(e.size))if(R(n)&&R(r)){if(e.size>r)return[!1,C(r)];if(e.size<n)return[!1,P(n)]}else{if(R(n)&&e.size<n)return[!1,P(n)];if(R(r)&&e.size>r)return[!1,C(r)]}return[!0,null]}function R(e){return void 0!==e&&null!==e}function T(e){var n=e.files,r=e.accept,t=e.minSize,o=e.maxSize,i=e.multiple,a=e.maxFiles;return!(!i&&n.length>1||i&&a>=1&&n.length>a)&&n.every((function(e){var n=w(x(e,r),1)[0],i=w(z(e,t,o),1)[0];return n&&i}))}function I(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function L(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function K(e){e.preventDefault()}function B(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function G(e){return-1!==e.indexOf("Edge/")}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return B(e)||G(e)}function J(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return n.some((function(n){return!I(e)&&n&&n.apply(void 0,[e].concat(t)),I(e)}))}}var _=["children"],N=["open"],$=["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Z=["refKey","onChange","onClick"];function q(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||W(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,n)||W(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,n){if(e){if("string"===typeof e)return H(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(e,n):void 0}}function H(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function Q(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function V(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Q(Object(r),!0).forEach((function(n){X(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function X(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function Y(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var ee=(0,t.forwardRef)((function(e,n){var r=e.children,o=te(Y(e,_)),i=o.open,a=Y(o,N);return(0,t.useImperativeHandle)(n,(function(){return{open:i}}),[i]),t.createElement(t.Fragment,null,r(V(V({},a),{},{open:i})))}));ee.displayName="Dropzone";var ne={disabled:!1,getFilesFromEvent:function(e){return(0,a.mG)(this,void 0,void 0,(function(){return(0,a.Jh)(this,(function(n){return[2,(r=e,r.dataTransfer&&e.dataTransfer?f(e.dataTransfer,e.type):s(e))];var r}))}))},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null};ee.defaultProps=ne,ee.propTypes={children:i().func,accept:i().oneOfType([i().string,i().arrayOf(i().string)]),multiple:i().bool,preventDropOnDocument:i().bool,noClick:i().bool,noKeyboard:i().bool,noDrag:i().bool,noDragEventsBubbling:i().bool,minSize:i().number,maxSize:i().number,maxFiles:i().number,disabled:i().bool,getFilesFromEvent:i().func,onFileDialogCancel:i().func,onDragEnter:i().func,onDragLeave:i().func,onDragOver:i().func,onDrop:i().func,onDropAccepted:i().func,onDropRejected:i().func,validator:i().func};var re={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=V(V({},ne),e),r=n.accept,o=n.disabled,i=n.getFilesFromEvent,a=n.maxSize,u=n.minSize,c=n.multiple,l=n.maxFiles,s=n.onDragEnter,f=n.onDragLeave,p=n.onDragOver,d=n.onDrop,v=n.onDropAccepted,g=n.onDropRejected,m=n.onFileDialogCancel,y=n.preventDropOnDocument,b=n.noClick,h=n.noKeyboard,D=n.noDrag,w=n.noDragEventsBubbling,O=n.validator,F=(0,t.useRef)(null),A=(0,t.useRef)(null),j=(0,t.useReducer)(oe,re),E=U(j,2),k=E[0],C=E[1],P=k.isFocused,R=k.isFileDialogActive,B=k.draggedFiles,G=(0,t.useCallback)((function(){A.current&&(C({type:"openDialog"}),A.current.value=null,A.current.click())}),[C]),_=function(){R&&setTimeout((function(){A.current&&(A.current.files.length||(C({type:"closeDialog"}),"function"===typeof m&&m()))}),300)};(0,t.useEffect)((function(){return window.addEventListener("focus",_,!1),function(){window.removeEventListener("focus",_,!1)}}),[A,R,m]);var N=(0,t.useCallback)((function(e){F.current&&F.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),G()))}),[F,A]),W=(0,t.useCallback)((function(){C({type:"focus"})}),[]),H=(0,t.useCallback)((function(){C({type:"blur"})}),[]),Q=(0,t.useCallback)((function(){b||(M()?setTimeout(G,0):G())}),[A,b]),ee=(0,t.useRef)([]),te=function(e){F.current&&F.current.contains(e.target)||(e.preventDefault(),ee.current=[])};(0,t.useEffect)((function(){return y&&(document.addEventListener("dragover",K,!1),document.addEventListener("drop",te,!1)),function(){y&&(document.removeEventListener("dragover",K),document.removeEventListener("drop",te))}}),[F,y]);var ie=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),pe(e),ee.current=[].concat(q(ee.current),[e.target]),L(e)&&Promise.resolve(i(e)).then((function(n){I(e)&&!w||(C({draggedFiles:n,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e))}))}),[i,s,w]),ae=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),pe(e);var n=L(e);if(n&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(r){}return n&&p&&p(e),!1}),[p,w]),ue=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),pe(e);var n=ee.current.filter((function(e){return F.current&&F.current.contains(e)})),r=n.indexOf(e.target);-1!==r&&n.splice(r,1),ee.current=n,n.length>0||(C({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),L(e)&&f&&f(e))}),[F,f,w]),ce=(0,t.useCallback)((function(e){e.preventDefault(),e.persist(),pe(e),ee.current=[],L(e)&&Promise.resolve(i(e)).then((function(n){if(!I(e)||w){var t=[],o=[];n.forEach((function(e){var n=U(x(e,r),2),i=n[0],c=n[1],l=U(z(e,u,a),2),s=l[0],f=l[1],p=O?O(e):null;if(i&&s&&!p)t.push(e);else{var d=[c,f];p&&(d=d.concat(p)),o.push({file:e,errors:d.filter((function(e){return e}))})}})),(!c&&t.length>1||c&&l>=1&&t.length>l)&&(t.forEach((function(e){o.push({file:e,errors:[S]})})),t.splice(0)),C({acceptedFiles:t,fileRejections:o,type:"setFiles"}),d&&d(t,o,e),o.length>0&&g&&g(o,e),t.length>0&&v&&v(t,e)}})),C({type:"reset"})}),[c,r,u,a,l,i,d,v,g,w,O]),le=function(e){return o?null:e},se=function(e){return h?null:le(e)},fe=function(e){return D?null:le(e)},pe=function(e){w&&e.stopPropagation()},de=(0,t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,r=void 0===n?"ref":n,t=e.onKeyDown,i=e.onFocus,a=e.onBlur,u=e.onClick,c=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=Y(e,$);return V(V(X({onKeyDown:se(J(t,N)),onFocus:se(J(i,W)),onBlur:se(J(a,H)),onClick:le(J(u,Q)),onDragEnter:fe(J(c,ie)),onDragOver:fe(J(l,ae)),onDragLeave:fe(J(s,ue)),onDrop:fe(J(f,ce))},r,F),o||h?{}:{tabIndex:0}),p)}}),[F,N,W,H,Q,ie,ae,ue,ce,h,D,o]),ve=(0,t.useCallback)((function(e){e.stopPropagation()}),[]),ge=(0,t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,o=e.onChange,i=e.onClick,a=Y(e,Z),u=X({accept:r,multiple:c,type:"file",style:{display:"none"},onChange:le(J(o,ce)),onClick:le(J(i,ve)),autoComplete:"off",tabIndex:-1},t,A);return V(V({},u),a)}}),[A,r,c,ce,o]),me=B.length,ye=me>0&&T({files:B,accept:r,minSize:u,maxSize:a,multiple:c,maxFiles:l}),be=me>0&&!ye;return V(V({},k),{},{isDragAccept:ye,isDragReject:be,isFocused:P&&!o,getRootProps:de,getInputProps:ge,rootRef:F,inputRef:A,open:le(G)})}function oe(e,n){switch(n.type){case"focus":return V(V({},e),{},{isFocused:!0});case"blur":return V(V({},e),{},{isFocused:!1});case"openDialog":return V(V({},e),{},{isFileDialogActive:!0});case"closeDialog":return V(V({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var r=n.isDragActive,t=n.draggedFiles;return V(V({},e),{},{draggedFiles:t,isDragActive:r});case"setFiles":return V(V({},e),{},{acceptedFiles:n.acceptedFiles,fileRejections:n.fileRejections});case"reset":return V({},re);default:return e}}}}]);