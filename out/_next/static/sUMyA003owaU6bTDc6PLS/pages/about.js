(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{156:function(e,t,r){"use strict";var n=r(1),s=r.n(n);t.a=function(e){var t=e.children;return s.a.createElement("main",null,t)}},160:function(e,t,r){e.exports=r(668)},513:function(e,t,r){e.exports=r(122)},56:function(e,t,r){e.exports=r(664)},662:function(e,t,r){__NEXT_REGISTER_PAGE("/about",function(){return e.exports=r(663),{page:e.exports.default}})},663:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),i=r(156),o=r(82);t.default=function(){return s.a.createElement(i.a,null,s.a.createElement(o.a,null),s.a.createElement("article",null,s.a.createElement("h1",null,"The Idea Behind This Example"),s.a.createElement("p",null,s.a.createElement("a",{href:"https://www.apollographql.com/client/"},"Apollo")," is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run, fetching more results from the server."),s.a.createElement("p",null,"In this simple example, we integrate Apollo seamlessly with"," ",s.a.createElement("a",{href:"https://github.com/zeit/next.js"},"Next")," by wrapping our pages inside a"," ",s.a.createElement("a",{href:"https://facebook.github.io/react/docs/higher-order-components.html"},"higher-order component (HOC)"),". Using the HOC pattern we're able to pass down a central store of query result data created by Apollo into our React component hierarchy defined inside each page of our Next application."),s.a.createElement("p",null,"On initial page load, while on the server and inside getInitialProps, we invoke the Apollo method,"," ",s.a.createElement("a",{href:"https://www.apollographql.com/docs/react/features/server-side-rendering.html#getDataFromTree"},"getDataFromTree"),". This method returns a promise; at the point in which the promise resolves, our Apollo Client store is completely initialized."),s.a.createElement("p",null,"This example relies on ",s.a.createElement("a",{href:"http://graph.cool"},"graph.cool")," for its GraphQL backend.")))}},664:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.flush=function(){var e=a.cssRules();return a.flush(),e};var s,i=r(1),o=r(665);var a=new((s=o)&&s.__esModule?s:{default:s}).default,l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.prevProps={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),n(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.styleId!==e.styleId||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){a.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.styleId&&a.remove(this.prevProps),a.add(this.props),this.prevProps=this.props),null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],r=e[1];return a.computeId(t,r)}).join(" ")}}]),t}();t.default=l},665:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=o(r(666)),i=o(r(667));function o(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,o=void 0!==s&&s,a=t.isBrowser,l=void 0===a?"undefined"!=typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return n(e,[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,s=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var i=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[n]=i,this._instancesCounts[n]=1}}},{key:"remove",value:function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join("\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var n=String(r),i=t+n;return e[i]||(e[i]="jsx-"+(0,s.default)(t+"-"+n)),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var s=r+n;return t[s]||(t[s]=n.replace(e,r)),t[s]}}},{key:"getIdAndRules",value:function(e){var t=this;if(e.dynamic){var r=this.computeId(e.styleId,e.dynamic);return{styleId:r,rules:Array.isArray(e.css)?e.css.map(function(e){return t.computeSelector(r,e)}):[this.computeSelector(r,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}]),e}();t.default=a},666:function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},667:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();var n=e.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,i=void 0===r?"stylesheet":r,a=t.optimizeForSpeed,l=void 0===a?n:a,u=t.isBrowser,c=void 0===u?"undefined"!=typeof window:u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(s(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",o("boolean"==typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}return r(e,[{key:"setOptimizeForSpeed",value:function(e){o("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(o(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(s){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];o(s,"old rule at index `"+e+"` not found"),s.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,r){return r?t=t.concat(e.getSheetForTag(r).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,r){t&&o(s(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n}},{key:"length",get:function(){return this._rulesCount}}]),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,r(129))},668:function(e,t,r){"use strict";var n=r(67),s=r(31);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(r(669)),o=s(r(170)),a=s(r(34)),l=s(r(35)),u=s(r(51)),c=s(r(52)),h=s(r(53)),p=s(r(123)),f=s(r(49)),d=r(353),m=n(r(1)),v=(s(r(0)),n(r(122))),_=r(72);var y=function(e){function t(){var e,r,n,s,i,l;(0,a.default)(this,t);for(var h=arguments.length,m=new Array(h),y=0;y<h;y++)m[y]=arguments[y];return r=(0,u.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(m))),(0,f.default)((0,p.default)((0,p.default)(r)),"formatUrls",(n=function(e,t){return{href:e&&"object"===(0,o.default)(e)?(0,d.format)(e):e,as:t&&"object"===(0,o.default)(t)?(0,d.format)(t):t}},s=null,i=null,l=null,function(e,t){if(e===s&&t===i)return l;var r=n(e,t);return s=e,i=t,l=r,r})),(0,f.default)((0,p.default)((0,p.default)(r)),"linkClicked",function(e){var t=e.currentTarget,n=t.nodeName,s=t.target;if("A"!==n||!(s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=r.formatUrls(r.props.href,r.props.as),o=i.href,a=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),r=(0,d.parse)((0,_.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(o)){var l=window.location.pathname;o=(0,d.resolve)(l,o),a=a?(0,d.resolve)(l,a):o,e.preventDefault();var u=r.props.scroll;null==u&&(u=a.indexOf("#")<0);var c=r.props.replace?"replace":"push";v.default[c](o,a,{shallow:r.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){r.props.onError&&r.props.onError(e)})}}}),r}return(0,h.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,i.default)(this.props.href)!==(0,i.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=(0,d.resolve)(e,t);v.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,s=r.as;"string"==typeof t&&(t=m.default.createElement("a",null,t));var i=m.Children.only(t),o={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=s||n),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,v._rewriteUrlForNextExport)(o.href)),m.default.cloneElement(i,o)}}]),t}(m.Component);t.default=y},669:function(e,t,r){e.exports=r(670)},670:function(e,t,r){var n=r(20),s=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}},82:function(e,t,r){"use strict";var n=r(56),s=r.n(n),i=r(1),o=r.n(i),a=r(160),l=r.n(a),u=r(513);t.a=Object(u.withRouter)(function(e){var t=e.router.pathname;return o.a.createElement("header",{className:"jsx-3970066506"},o.a.createElement(l.a,{prefetch:!0,href:"/"},o.a.createElement("a",{className:"jsx-3970066506 "+(("/"===t?"is-active":"")||"")},"Apollo")),o.a.createElement(l.a,{prefetch:!0,href:"/about"},o.a.createElement("a",{className:"jsx-3970066506 "+(("/about"===t?"is-active":"")||"")},"About")),o.a.createElement(l.a,{prefetch:!0,href:"/ant"},o.a.createElement("a",{className:"jsx-3970066506 "+(("/"===t?"is-active":"")||"")},"Ant")),o.a.createElement(l.a,{prefetch:!0,href:"/redux"},o.a.createElement("a",{className:"jsx-3970066506 "+(("/"===t?"is-active":"")||"")},"Redux")),o.a.createElement(s.a,{styleId:"3970066506",css:["header.jsx-3970066506{margin-bottom:25px;}","a.jsx-3970066506{font-size:14px;margin-right:15px;-webkit-text-decoration:none;text-decoration:none;}",".is-active.jsx-3970066506{-webkit-text-decoration:underline;text-decoration:underline;}"]}))})}},[[662,1,0]]]);