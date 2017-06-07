!function(){"use strict";var t=function(t,n){for(var e,o=arguments,r=[],a=[],i=arguments.length;i-- >2;)r[r.length]=o[i];for(;r.length;)if(Array.isArray(e=r.pop()))for(var i=e.length;i--;)r[r.length]=e[i];else null!=e&&!0!==e&&!1!==e&&("number"==typeof e&&(e+=""),a[a.length]=e);return"string"==typeof t?{tag:t,data:n||{},children:a}:t(n,a)},n=function(){return(""+1e7+-1e3+-4e3+-8e3+-1e11).replace(/1|0/g,function(){return(0|16*Math.random()).toString(16)})},e=function(t){return t.todos.concat({done:!1,id:n(),value:t.input})},o=function(t,n){return t.todos.filter(function(t){return n.target.dataset.uuid!==t.id})},r=function(t,n){return t.todos.map(function(t){return n.target.dataset.uuid===t.id?Object.assign({},t,{done:!t.done}):t})},a=function(t,n){return t.todos.map(function(t){return n.target.dataset.uuid===t.id?Object.assign({},t,{value:n.target.textContent}):t})},i={add:function(t){return{input:"",todos:e(t)}},input:function(t,n,e){return{input:e.target.value}},remove:function(t,n,e){return{todos:o(t,e)}},toggle:function(t,n,e){return{todos:r(t,e)}},edit:function(t,n,e){return{todos:a(t,e)}},editEnter:function(t,n,e){e.target.blur()}},u=function(t){return window.localStorage.setItem("todoapp",JSON.stringify(t))},c=function(){return JSON.parse(window.localStorage.getItem("todoapp"))}()||{input:"",placeholder:"Add new todo",todos:[]},d=document.getElementById("todo"),l=function(){return t("header",null,t("h2",null,"todo"),t("p",null,t("em",null,t("small",null,"tap text to edit todo"))," ",t("a",{href:"https://github.com/marcusasplund/hyperapp-todo-simple/"},t("small",null,"source"))))},s=function(n){var e=n.id,o=n.actions;return t("button",{class:"button button-small button-outline","data-uuid":e,onclick:function(t){return o.remove(t)}},"x")},f=function(n){var e=n.id,o=n.actions;return t("button",{class:"button button-small button-outline","data-uuid":e,onclick:function(t){return o.toggle(t)}},"✓")},v=function(n){var e=n.actions,o=n.todo;return t("div",{class:"item row"},t("div",{class:"left"},t(s,{actions:e,id:o.id}),t(f,{actions:e,id:o.id})),t("div",{class:o.done?"done right":"right",contenteditable:!0,"data-uuid":o.id,onkeyup:function(t){return 13===t.keyCode?e.editEnter:null},oninput:function(t){return o.value=t.target.textContent||""},onblur:e.edit},o.value))},p=function(n){var e=n.state,o=n.actions;return t("div",{id:"todo-list"},e.todos.filter(function(t){return!t.done}).map(function(n){return t(v,{todo:n,actions:o})}))},g=function(n){var e=n.state,o=n.actions;return t("div",{class:"row"},t("input",{type:"text",onkeyup:function(t){return 13===t.keyCode&&""!==t.target.value?o.add():null},oninput:o.input,value:e.input,placeholder:e.placeholder}))},h=function(n){var e=n.state,o=n.actions;return t("div",{id:"todo-list-done"},e.todos.filter(function(t){return t.done}).map(function(n){return t(v,{todo:n,actions:o})}))},m=function(n){var e=n.state;return t("pre",null,t("code",null,JSON.stringify(e,null,2)))},y=function(n){var e=n.state,o=n.actions;return t("div",{class:"container"},t(l,null),t(p,{state:e,actions:o}),t(g,{state:e,actions:o}),t(h,{state:e,actions:o}),t(m,{state:e}))},b=function(n,e){return t(y,{state:n,actions:e})},w={render:function(t){return u(t)}};"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("service-worker.js").then(function(t){t.onupdatefound=function(){var n=t.installing;n.onstatechange=function(){switch(n.state){case"installed":navigator.serviceWorker.controller}}}}).catch(function(t){})}),function(t){function n(t,e,i){Object.keys(e||[]).map(function(u){var c=e[u],d=i?i+"."+u:u;"function"==typeof c?t[u]=function(t){var n=c(p,h,o("action",{name:d,data:t}).data,o);if(null==n||"function"==typeof n.then)return n;r(p=a(p,o("update",n)),g)}:n(t[u]||(t[u]={}),c,d)})}function e(){r(p,g),o("loaded")}function o(t,n){return(m[t]||[]).map(function(t){var e=t(p,h,n,o);null!=e&&(n=e)}),n}function r(n,e){v=s(t.root||(t.root=document.body),v,f,f=o("render",e)(n,h))}function a(t,n){var e={};if("object"!=typeof n||Array.isArray(n))return n;for(var o in t)e[o]=t[o];for(var o in n)e[o]=n[o];return e}function i(t,n){if("string"==typeof t)var e=document.createTextNode(t);else{for(var e=(n=n||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag),o=0;o<t.children.length;)e.appendChild(i(t.children[o++],n));for(var o in t.data)"oncreate"===o?t.data[o](e):u(e,o,t.data[o])}return e}function u(t,n,e,o){if("key"===n);else if("style"===n)for(var r in a(o,e=e||{}))t.style[r]=e[r]||"";else{try{t[n]=e}catch(t){}"function"!=typeof e&&(e?t.setAttribute(n,e):t.removeAttribute(n))}}function c(t,n,e){for(var o in a(n,e)){var r=e[o],i="value"===o||"checked"===o?t[o]:n[o];"onupdate"===o&&r?r(t):r!==i&&u(t,o,r,i)}}function d(t){if(t&&(t=t.data))return t.key}function l(t,n,e){function o(){t.removeChild(n)}(e.data&&e.data.onremove||o)(n,o)}function s(t,n,e,o){if(null==e)n=t.insertBefore(i(o),n);else if(o.tag&&o.tag===e.tag){c(n,e.data,o.data);for(var r=o.children.length,a=e.children.length,u={},f=[],v={},p=0;p<a;p++){var g=n.childNodes[p];f[p]=g;var h=e.children[p],m=d(h);null!=m&&(u[m]=[g,h])}for(var p=0,y=0;y<r;){var g=f[p],h=e.children[p],b=o.children[y],m=d(h);if(v[m])p++;else{var w=d(b),k=u[w]||[];null==w?(null==m&&(s(n,g,h,b),y++),p++):(m===w?(s(n,k[0],k[1],b),p++):k[0]?(n.insertBefore(k[0],g),s(n,k[0],k[1],b)):s(n,g,null,b),y++,v[w]=b)}}for(;p<a;){var h=e.children[p],m=d(h);null==m&&l(n,f[p],h),p++}for(var p in u){var k=u[p],C=k[1];v[C.data.key]||l(n,k[0],C)}}else if(o!==e){var p=n;t.replaceChild(n=i(o),p)}return n}for(var f,v,p={},g=t.view,h={},m={},y=-1,b=t.plugins||[];y<b.length;y++){var w=b[y]?b[y](t):t;null!=w.state&&(p=a(p,w.state)),n(h,w.actions),Object.keys(w.events||[]).map(function(t){m[t]=(m[t]||[]).concat(w.events[t])})}"l"!==document.readyState[0]?e():addEventListener("DOMContentLoaded",e)}({actions:i,state:c,root:d,view:b,events:w})}();