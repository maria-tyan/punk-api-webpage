(function(e){function t(t){for(var r,o,i=t[0],s=t[1],b=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,b||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},c={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"04b2":function(e,t,n){"use strict";n("96df")},3225:function(e,t,n){"use strict";n("d204")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,o){var i=Object(r["n"])("BeerList");return Object(r["j"])(),Object(r["d"])(i)}Object(r["l"])("data-v-8b18e7f0");var a={class:"page-wrapper"},o=Object(r["g"])("h1",null,"Punk API WebPage",-1),i={class:"select"},s=["value"],b={class:"list-wrapper"};function u(e,t,n,c,u,l){var d=Object(r["n"])("BasicAccordion");return Object(r["j"])(),Object(r["f"])("div",a,[o,Object(r["g"])("div",i,[Object(r["g"])("select",{onChange:t[0]||(t[0]=function(e){return l.onSort(e)})},[(Object(r["j"])(!0),Object(r["f"])(r["a"],null,Object(r["m"])(u.sortOptions,(function(e,t){return Object(r["j"])(),Object(r["f"])("option",{key:t,value:t},Object(r["o"])(e.label),9,s)})),128))],32)]),Object(r["g"])("div",b,[(Object(r["j"])(!0),Object(r["f"])(r["a"],null,Object(r["m"])(u.beersList,(function(e,t){return Object(r["j"])(),Object(r["d"])(d,{key:t,beerData:e},null,8,["beerData"])})),128))])])}Object(r["k"])();var l=n("1da1"),d=(n("96cf"),n("4e82"),n("b0c0"),n("d3b7"),{methods:{fetchData:function(e){return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:return t.prev=10,t.t0=t["catch"](0),console.error(t.t0),t.abrupt("return",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()}}});n("a4d3"),n("e01a");Object(r["l"])("data-v-0c9926de");var f={class:"basic-accordion"},p=["data-state"],j={key:0,id:"accordion-content",class:"basic-accordion__content"},O={class:"basic-accordion__tagline"},v={key:0,id:"accordion-content",class:"basic-accordion__content"},h={class:"basic-accordion__img-container"},g=["src","alt"],m={class:"basic-accordion__text"},_={class:"basic-accordion__tagline"},w={class:"basic-accordion__description"},y={class:"basic-accordion__description"},k=Object(r["g"])("b",null,"Date first brewed:",-1),S={class:"basic-accordion__description"},D=Object(r["g"])("b",null,"Alcohol by Volume:",-1);function x(e,t,n,c,a,o){return Object(r["j"])(),Object(r["f"])("div",f,[Object(r["g"])("button",{onClick:t[0]||(t[0]=function(){return o.toogleItem&&o.toogleItem.apply(o,arguments)}),"data-state":a.isShow?"-":"+",class:"basic-accordion__btn"},Object(r["o"])(n.beerData.name),9,p),a.isShow?(Object(r["j"])(),Object(r["f"])("div",j,[Object(r["g"])("h3",O,Object(r["o"])(n.beerData.tagline),1)])):Object(r["e"])("",!0),Object(r["i"])(r["b"],{name:"slide"},{default:Object(r["p"])((function(){return[a.isShow?(Object(r["j"])(),Object(r["f"])("div",v,[Object(r["g"])("div",h,[Object(r["g"])("img",{src:n.beerData.image_url,alt:n.beerData.name,class:"basic-accordion__img"},null,8,g)]),Object(r["g"])("div",m,[Object(r["g"])("h3",_,Object(r["o"])(n.beerData.tagline),1),Object(r["g"])("p",w,Object(r["o"])(n.beerData.description),1),Object(r["g"])("p",y,[k,Object(r["h"])(" "+Object(r["o"])(n.beerData.first_brewed),1)]),Object(r["g"])("p",S,[D,Object(r["h"])(" "+Object(r["o"])(n.beerData.abv),1)])])])):Object(r["e"])("",!0)]})),_:1})])}Object(r["k"])();var B={name:"BasicAccordion",props:{beerData:{type:Object,default:function(){}}},data:function(){return{isShow:!1}},methods:{toogleItem:function(){this.isShow=!this.isShow}}};n("3225");B.render=x,B.__scopeId="data-v-0c9926de";var L=B,A={name:"BeerList",mixins:[d],components:{BasicAccordion:L},data:function(){return{beersList:[],sortOptions:[{label:"Sort By: Name A to Z"},{label:"Sort By: Name Z to A"},{label:"Sort By: ABV Low to High"},{label:"Sort By: ABV High to Low"}]}},methods:{onSort:function(e){switch(e.target.value){case"0":this.beersList.sort((function(e,t){return e.name.localeCompare(t.name)}));break;case"1":this.beersList.sort((function(e,t){return t.name.localeCompare(e.name)}));break;case"2":this.beersList.sort((function(e,t){return e.abv-t.abv}));break;case"3":this.beersList.sort((function(e,t){return t.abv-e.abv}));break;default:break}}},mounted:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData("https://api.punkapi.com/v2/beers");case 2:e.beersList=t.sent;case 3:case"end":return t.stop()}}),t)})))()}};n("a18f");A.render=u,A.__scopeId="data-v-8b18e7f0";var P=A,I={name:"App",components:{BeerList:P}};n("04b2");I.render=c;var C=I;Object(r["c"])(C).mount("#app")},"96df":function(e,t,n){},a18f:function(e,t,n){"use strict";n("eca5")},d204:function(e,t,n){},eca5:function(e,t,n){}});
//# sourceMappingURL=app.968ca4ec.js.map