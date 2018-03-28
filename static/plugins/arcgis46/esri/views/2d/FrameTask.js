// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Scheduler","./FrameBudget"],function(m,n,k,l){return function(){function d(b){var a=this;this.view=b;this._frameTaskHandle=null;this._budget=new l(6);this.budget=6;this.updateEnabled=this.stationary=!0;this.prepare=function(){a._updateParameters.state=a.view.state;a._updateParameters.stationary=a.view.stationary;a._updateParameters.devicePixelRatio=window.devicePixelRatio;a._budget.reset(a.budget)};this.update=function(){if(a.updateEnabled){for(var b=a._budget,
c=a.view,f=c.allLayerViews.toArray().filter(function(a){return a.isFulfilled()&&null==a.layerViews}),d=f.length,g=c.state,e=0;e<f.length;e++)if(c=f[e],c.attached){var h=a._layerViewsState[c.uid];if(null==h||!a.stationary&&!c.moving)c.moving=!0,c.moveStart();h!==g.id&&c.viewChange();a.stationary&&c.moving&&(c.moving=!1,c.moveEnd());a._layerViewsState[c.uid]=g.id}g=a._layerViewsTrash;for(e=0;e<g.length;e++)c=g[e],a._detachLayerView(c);for(e=g.length=0;e<d;e++)c=f[e],c.isFulfilled()&&!c.attached&&a._attachLayerView(c);
f=a._layerViewsToUpdate;d=f.slice();c=a._updateParameters;for(a._layerViewsToUpdate.length=0;!b.done&&0<d.length;)d.shift().processUpdate(c);0<d.length&&f.unshift.apply(f,d);0===f.length&&0===g.length&&a._frameTaskHandle.pause()}};b.watch("ready",function(b){b?a.start():a.stop()})}d.prototype.destroy=function(){this.stop()};d.prototype.start=function(){var b=this;this._updateParameters={budget:this._budget,state:this.view.state,devicePixelRatio:window.devicePixelRatio,stationary:!0};this._layerViewsTrash=
[];this._layerViewsToUpdate=[];this._layerViewsState={};this._allLayerViewsChangeHandle=this.view.allLayerViews.on("change",function(a){Array.prototype.push.apply(b._layerViewsTrash,a.removed);b.requestFrame()});this._stationaryHandle=this.view.watch("stationary",function(a){b.stationary=a;b.requestFrame()});this._frameTaskHandle=k.addFrameTask(this)};d.prototype.stop=function(){var b=this;this._frameTaskHandle&&(this.view.allLayerViews.forEach(function(a){return b._detachLayerView(a)}),this._stationaryHandle.remove(),
this._allLayerViewsChangeHandle.remove(),this._frameTaskHandle.remove(),this._updateParameters=this._stationaryHandle=this._allLayerViewsChangeHandle=this._frameTaskHandle=this._layerViewsTrash=this._layerViewsToUpdate=this._layerViewsState=null,this.stationary=!0)};d.prototype.requestLayerViewUpdate=function(b){this._layerViewsToUpdate.push(b);this.requestFrame()};d.prototype.requestFrame=function(){this._frameTaskHandle&&this._frameTaskHandle.isPaused()&&this._frameTaskHandle.resume()};d.prototype._attachLayerView=
function(b){b.attached||(b.attached=!0,b.moving=!1,b.attach())};d.prototype._detachLayerView=function(b){b.attached&&(b.detach(),b.attached=!1,b.moving=!1)};return d}()});