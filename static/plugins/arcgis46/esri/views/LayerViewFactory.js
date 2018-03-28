// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators dojo/Deferred dojo/when ../core/Accessor ../core/Collection ../core/Error ../core/watchUtils".split(" "),function(r,t,k,d,c,l,m,n,p,g,q){return function(f){function a(){var b=null!==f&&f.apply(this,arguments)||this;b.creationRequests=new p;b.paused=!0;return b}k(a,f);a.prototype.initialize=function(){var b=this;q.whenFalse(this,"paused",function(){b.creationRequests.toArray().forEach(b._processRequest,
b)},!0)};a.prototype.destroy=function(){this.creationRequests.drain(function(b){return b.deferred.cancel(void 0)})};Object.defineProperty(a.prototype,"working",{get:function(){return 0<this.creationRequests.length},enumerable:!0,configurable:!0});a.prototype.create=function(b,a){var h=this.getLayerViewPromise(a);if(h)return h;var c=this.creationRequests,e={deferred:new l(function(){var b=new g("cancelled:layerview-create","layerview creation cancelled",{layer:a});c.remove(e);e.creationPromise&&e.creationPromise.cancel(b);
return b}),view:b,layer:a,started:!1,creationPromise:null};c.push(e);this.paused||this._processRequest(e);return e.deferred.promise};a.prototype.dispose=function(b){b.layer.destroyLayerView(b)};a.prototype.getLayerViewPromise=function(b){var a=this.creationRequests&&this.creationRequests.find(function(a){return a.layer===b});return a&&a.deferred.promise};a.prototype._processRequest=function(b){var a=this;if(!b.started){b.started=!0;var c=b.deferred,d=b.layer,e=b.view;d.load().then(function(a){if(!c.isCanceled())return b.creationPromise=
a.createLayerView(e),b.creationPromise}).then(function(a){return c.isCanceled()?a:b.creationPromise=m(a.when())}).catch(function(a){c.isCanceled()||c.reject(new g("layerview:create-error","layerview creation failed",{layer:d,error:a}))}).then(function(d){a.creationRequests&&a.creationRequests.remove(b);c.isFulfilled()?d&&a.dispose(d):c.resolve(d);return d})}};d([c.property()],a.prototype,"creationRequests",void 0);d([c.property()],a.prototype,"paused",void 0);d([c.property()],a.prototype,"view",void 0);
d([c.property({dependsOn:["paused","creationRequests.length"],readOnly:!0})],a.prototype,"working",null);return a=d([c.subclass("esri.views.LayerViewFactory")],a)}(c.declared(n))});