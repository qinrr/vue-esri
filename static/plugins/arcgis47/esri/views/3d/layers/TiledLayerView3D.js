// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.7/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Error ../../../core/accessorSupport/decorators ./LayerView3D ./support/LayerViewUpdatingPercentage ../terrain/terrainUtils".split(" "),function(p,q,h,e,f,b,k,l,m){return function(g){function a(){var c=null!==g&&g.apply(this,arguments)||this;c.minDataLevel=0;c.maxDataLevel=Infinity;c._isUpdating=!1;return c}h(a,g);Object.defineProperty(a.prototype,"formatIsTransparent",{get:function(){return!0},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isTransparent",{get:function(){return 1>this.fullOpacity||this.formatIsTransparent},enumerable:!0,configurable:!0});a.prototype.getTileUrl=function(c,a,n){return this.layer.getTileUrl(c,a,n)};a.prototype._evaluateUpdatingState=function(a){this._isUpdating=a;this.notifyChange("updating")};a.prototype.isUpdating=function(){return this._isUpdating};a.prototype._getTileInfoSupportError=function(a,d){if(a=m.checkIfTileInfoSupportedForView(a,
d,this.view.spatialReference,this.view.basemapTerrain.manifold)){d={layer:this.layer,error:a};var c=void 0;switch(a.name){case "tilingscheme:local-gcs-not-supported":c=new f("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",d);break;case "tilingscheme:spatial-reference-mismatch":case "tilingscheme:global-unsupported-spatial-reference":c=new f("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",
d);break;default:c=new f("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",d)}return c}return null};a.prototype._getTileInfoCompatibilityError=function(a,d){return d.compatibleWith(a)?null:new f("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")};a.prototype._updateMinMaxDataLevel=function(){var a=Infinity,d=0;this.tileInfo.lods.forEach(function(b){a=Math.min(b.level,a);
d=Math.max(b.level,d)});b=[a,d];this.minDataLevel=b[0];this.maxDataLevel=b[1];var b};e([b.property({readOnly:!0})],a.prototype,"formatIsTransparent",null);e([b.property()],a.prototype,"fullExtent",void 0);e([b.property({readOnly:!0,dependsOn:["fullOpacity","formatIsTransparent"]})],a.prototype,"isTransparent",null);e([b.property()],a.prototype,"layer",void 0);e([b.property()],a.prototype,"minDataLevel",void 0);e([b.property()],a.prototype,"maxDataLevel",void 0);e([b.property()],a.prototype,"tileInfo",
void 0);return a=e([b.subclass("esri.views.3d.layers.TiledLayerView3D")],a)}(b.declared(k,l))});