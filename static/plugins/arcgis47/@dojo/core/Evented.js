//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define(["require","exports","tslib","@dojo/shim/Map","./Destroyable"],a)})(function(a,d){function f(a,b){if("string"===typeof b&&"string"===typeof a&&-1!==a.indexOf("*")){var c=void 0;e.has(a)?c=e.get(a):(c=new RegExp("^"+a.replace(/\*/g,".*")+"$"),e.set(a,c));return c.test(b)}return a===b}Object.defineProperty(d,"__esModule",{value:!0});
var h=a("tslib"),g=a("@dojo/shim/Map");a=a("./Destroyable");var e=new g.default;d.isGlobMatch=f;a=function(a){function b(){var c=null!==a&&a.apply(this,arguments)||this;c.listenersMap=new g.default;return c}h.__extends(b,a);b.prototype.emit=function(a){var c=this;this.listenersMap.forEach(function(b,k){f(k,a.type)&&b.forEach(function(b){b.call(c,a)})})};b.prototype.on=function(a,b){var c=this;if(Array.isArray(b)){var d=b.map(function(b){return c._addListener(a,b)});return{destroy:function(){d.forEach(function(a){return a.destroy()})}}}return this._addListener(a,
b)};b.prototype._addListener=function(a,b){var c=this,d=this.listenersMap.get(a)||[];d.push(b);this.listenersMap.set(a,d);return{destroy:function(){var d=c.listenersMap.get(a)||[];d.splice(d.indexOf(b),1)}}};return b}(a.Destroyable);d.Evented=a;d.default=a});