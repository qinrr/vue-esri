// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../core/Collection ../../core/Error ../../core/Handles ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../geometry/Point ../../geometry/support/webMercatorUtils ../../support/Action ../support/AnchorElementViewModel".split(" "),function(f,z,q,e,r,m,l,t,n,g,c,u,v,h,w){function x(c,b){return b.allLayerViews.find(function(a){return a.layer===
c})}f=new h({id:"zoom-to"});var y=new (m.ofType(h))([f]);return function(f){function b(a){a=f.call(this)||this;a._handles=new t;a._originalActions=null;a._pendingPromises=new Set;a.actions=y;a.goToOptions=null;a.autoCloseEnabled=!1;a.content=null;a.highlightEnabled=!0;a.title=null;a.updateLocationEnabled=!1;a.view=null;a.visible=!1;a.zoomFactor=4;return a}q(b,f);b.prototype.initialize=function(){this._handles.add([this.on("view-change",this._autoClose),g.watch(this,["highlightEnabled","selectedFeature",
"visible","view"],this._highlightFeature),g.watch(this,"selectedFeature.popupTemplate.actions",this._getSelectedFeatureActions),g.watch(this,"selectedFeature.popupTemplate.overwriteActions",this._getSelectedFeatureActions)])};b.prototype.destroy=function(){this._handles.destroy();this._handles=null;this._pendingPromises.clear();this.view=null};Object.defineProperty(b.prototype,"featureCount",{get:function(){return this.features.length},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"features",{get:function(){return this._get("features")||[]},set:function(a){a=a||[];this._set("features",a);var b=this.pendingPromisesCount,d=this.selectedFeatureIndex,p=this.promiseCount&&a.length;p&&b&&-1===d?this.selectedFeatureIndex=0:p&&-1!==d||(this.selectedFeatureIndex=a.length?0:-1)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"location",{get:function(){return this._get("location")||null},set:function(a){var b=this.get("location"),d=this.get("view.spatialReference.isWebMercator");
a&&a.get("spatialReference.isWGS84")&&d&&(a=v.geographicToWebMercator(a));this._set("location",a);a!==b&&this._centerAtLocation()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"pendingPromisesCount",{get:function(){return this._pendingPromises.size},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"waitingForResult",{get:function(){return 0<this.pendingPromisesCount&&0===this.featureCount},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"promiseCount",
{get:function(){return this.promises.length},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"promises",{get:function(){return this._get("promises")||[]},set:function(a){var b=this,d=this._get("promises");d&&d.forEach(function(a){a&&"function"===typeof a.cancel&&a.cancel()});this._pendingPromises.clear();this.features=[];Array.isArray(a)&&a.length?(this._set("promises",a),a=a.slice(0),a.forEach(function(a){b._pendingPromises.add(a);var k=function(k){b._pendingPromises.has(a)&&(b._pendingPromises.delete(a),
b.notifyChange("pendingPromisesCount"),b._updateFeatures(a,k))};a.then(k,k)})):this._set("promises",[]);this.notifyChange("pendingPromisesCount")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selectedFeature",{get:function(){var a=this.selectedFeatureIndex;if(-1===a)return null;a=this.features[a];if(!a)return null;this.updateLocationEnabled&&(this.location=this._getPointFromGeometry(a.geometry));return a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selectedFeatureIndex",
{get:function(){var a=this._get("selectedFeatureIndex");return"number"===typeof a?a:-1},set:function(a){var b=this.featureCount;a=isNaN(a)||-1>a||!b?-1:(a+b)%b;this._set("selectedFeatureIndex",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0});b.prototype.centerAtLocation=function(){var a=this.location,b=this.view;return a&&b?b.goTo({target:a,scale:b.scale},this.goToOptions):
n.reject(new l(this.declaredClass+"::Cannot center at location without a location and view."))};b.prototype.clear=function(){this.set({promises:[],features:[],content:null,title:null,location:null})};b.prototype.open=function(a){this.set(r({visible:!1},{updateLocationEnabled:!1,promises:[]},a));this._setVisibleWhenContentExists()};b.prototype.triggerAction=function(a){(a=this.actions.getItemAt(a))&&this.emit("trigger-action",{action:a})};b.prototype.next=function(){this.selectedFeatureIndex+=1;return this};
b.prototype.previous=function(){--this.selectedFeatureIndex;return this};b.prototype.zoomToLocation=function(){var a=this,b=this.location,d=this.selectedFeature,c=this.view,e=this.zoomFactor;if(!b||!c)return n.reject(new l(this.declaredClass+"::Cannot zoom to location without a location and view."));var e=c.scale/e,f=this.get("selectedFeature.geometry"),g=d&&"3d"===c.type,b=(g=f||g)?d:b,h=g&&f&&"point"===f.type&&this._isScreenSize(d);return c.goTo({target:b,scale:h?e:void 0},this.goToOptions).then(function(){h&&
"point"===f.type&&(a.location=f)})};b.prototype._setVisibleWhenContentExists=function(){var a=this,b=this._handles,d=this.promiseCount;b.remove("pendingVisible");d?(d=g.init(this,"pendingPromisesCount",function(d){a.featureCount&&(a.set("visible",!0),b.remove("pendingVisible"));d||b.remove("pendingVisible")}),b.add(d,"pendingVisible")):this.set("visible",!0)};b.prototype._autoClose=function(){this.autoCloseEnabled&&(this.visible=!1)};b.prototype._isScreenSize=function(a){var b=this.view;if("3d"!==
b.type||"esri.Graphic"!==a.declaredClass)return!0;if((b=b.getViewForGraphic(a))&&b.whenGraphicBounds){var d=!1;b.whenGraphicBounds(a,{useViewElevation:!0}).then(function(a){d=!a||!a.boundingBox||a.boundingBox[0]===a.boundingBox[3]&&a.boundingBox[1]===a.boundingBox[4]&&a.boundingBox[2]===a.boundingBox[5]});return d}return!0};b.prototype._getSelectedFeatureActions=function(){this._originalActions&&(this.actions=this._originalActions,this._originalActions=null);var a=this.actions.filter(function(a){return!a.temporary}),
b=this.get("selectedFeature.popupTemplate");b&&b.overwriteActions&&(this._originalActions=a);this.actions=this._getNewActions(b,a)};b.prototype._getNewActions=function(a,b){if(!a||!a.actions)return b;var d=a.actions;d.forEach(function(a){a.temporary=!0});return a.overwriteActions?d:b.concat(d)};b.prototype._getPointFromGeometry=function(a){return a?"point"===a.type?a:"extent"===a.type?a.center:"polygon"===a.type?a.centroid:"multipoint"===a.type||"polyline"===a.type?a.extent.center:null:null};b.prototype._centerAtLocation=
function(){var a=this.location,b=this.updateLocationEnabled,d=this.get("view.extent");b&&d&&a&&!d.contains(a)&&this.centerAtLocation()};b.prototype._highlightFeature=function(){this._handles.remove("highlight");var a=this.selectedFeature,b=this.highlightEnabled,d=this.view,c=this.visible;a&&d&&b&&c&&(b=a.layer)&&(d=x(b,d))&&"function"===typeof d.highlight&&(b=b.objectIdField,c=a.attributes,a=d.highlight(c&&c[b]||a,{}),this._handles.add(a,"highlight"))};b.prototype._updateFeatures=function(a,b){var c=
this.features;a&&b&&b.length&&!(!this._validatePromise(a)||b instanceof l||b instanceof Error)&&(c.length?(a=b.filter(function(a){return-1===c.indexOf(a)}),this.features=c.concat(a)):this.features=b)};b.prototype._validatePromise=function(a){return a&&(!a.isCanceled||!a.isCanceled())};e([c.property({type:m.ofType(h)})],b.prototype,"actions",void 0);e([c.property()],b.prototype,"goToOptions",void 0);e([c.property()],b.prototype,"autoCloseEnabled",void 0);e([c.property()],b.prototype,"content",void 0);
e([c.property({readOnly:!0,dependsOn:["features"]})],b.prototype,"featureCount",null);e([c.property()],b.prototype,"features",null);e([c.property()],b.prototype,"highlightEnabled",void 0);e([c.property({type:u})],b.prototype,"location",null);e([c.property({readOnly:!0,dependsOn:["promises"]})],b.prototype,"pendingPromisesCount",null);e([c.property({readOnly:!0,dependsOn:["featureCount","pendingPromisesCount"]})],b.prototype,"waitingForResult",null);e([c.property({readOnly:!0,dependsOn:["promises"]})],
b.prototype,"promiseCount",null);e([c.property()],b.prototype,"promises",null);e([c.property({value:null,readOnly:!0,dependsOn:["features","selectedFeatureIndex","updateLocationEnabled"]})],b.prototype,"selectedFeature",null);e([c.property({value:-1})],b.prototype,"selectedFeatureIndex",null);e([c.property({readOnly:!0,dependsOn:["view.ready"]})],b.prototype,"state",null);e([c.property()],b.prototype,"title",void 0);e([c.property()],b.prototype,"updateLocationEnabled",void 0);e([c.property()],b.prototype,
"view",void 0);e([c.property()],b.prototype,"visible",void 0);e([c.property()],b.prototype,"zoomFactor",void 0);e([c.property()],b.prototype,"centerAtLocation",null);e([c.property()],b.prototype,"clear",null);e([c.property()],b.prototype,"triggerAction",null);e([c.property()],b.prototype,"next",null);e([c.property()],b.prototype,"previous",null);e([c.property()],b.prototype,"zoomToLocation",null);return b=e([c.subclass("esri.widgets.Popup.PopupViewModel")],b)}(c.declared(w))});