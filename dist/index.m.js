import t from"isomorphic-unfetch";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},e.apply(this,arguments)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}var n,i=/*#__PURE__*/function(){function r(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}return r.prototype.request=function(r,o){var n=""+this.baseUrl+r,i=e({},o,{headers:{"Content-Type":"application/json","api-key":this.apiKey}});return t(n,i).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},r}(),s="posts",p=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.getPostById=function(t){return this.request("/posts/"+t)},o.getPosts=function(){return this.request("/"+s)},o.createPost=function(t){return this.request("/"+s,{method:"POST",body:JSON.stringify(t)})},e}(i),c=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e}(i);n=c,[p].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){Object.defineProperty(n.prototype,e,Object.getOwnPropertyDescriptor(t.prototype,e))})});export{c as default};
