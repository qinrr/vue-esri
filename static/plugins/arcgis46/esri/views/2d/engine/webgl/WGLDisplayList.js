// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/ObjectPool ./enums ./MaterialInfo ./Utils".split(" "),function(w,y,q,k,r,n){w=function(){function a(){this.symbolLevels=[]}a.prototype.release=function(){this.symbolLevels.forEach(function(c){t.pool.release(c)});this.symbolLevels.length=0};Object.defineProperty(a.prototype,"empty",{get:function(){return!this.symbolLevels||0===this.symbolLevels.length},enumerable:!0,configurable:!0});a.prototype.addToList=function(c){var f=this;c.forEach(function(c){f._addToList(c)})};
a.prototype.removeFromList=function(c){var f=this;c.forEach(function(c){f._removeFromList(c)})};a.prototype._addToList=function(c){var f=this._getDisplayList(c.symbolLevel,c.zOrder,c.geometryType),e=0<f.length?f[f.length-1]:null;null!==e&&n.isSameMaterialInfo(e.materialInfo,c.materialInfo)&&e.indexFrom+e.indexCount===c.indexFrom?e.indexCount+=c.indexCount:(e=p.pool.acquire(),e.indexFrom=c.indexFrom,e.indexCount=c.indexCount,e.materialInfo=c.materialInfo,e.geometryType=c.geometryType,f.push(e))};a.prototype._removeFromList=
function(c){for(var f=this._getDisplayList(c.symbolLevel,c.zOrder,c.geometryType),e=f.length,b=void 0,a=0;a<e;++a){var d=f[a];c.indexFrom+c.indexCount>d.indexFrom&&c.indexFrom<d.indexFrom+d.indexCount&&(b=a)}if(void 0!==b)if(d=f[b],c.indexFrom<d.indexFrom)d.indexCount-=c.indexCount,d.indexFrom+=c.indexCount;else if(c.indexFrom+c.indexCount>d.indexFrom+d.indexCount)d.indexCount-=c.indexCount;else{var e=d.indexFrom,a=c.indexFrom-d.indexFrom,g=c.indexCount;c=d.indexFrom+d.indexCount-(c.indexFrom+c.indexCount);
d.indexCount=a;var h=p.pool.acquire();h.geometryType=d.geometryType;h.materialInfo=r.pool.acquire();h.materialInfo.copy(d.materialInfo);h.indexFrom=e+a+g;h.indexCount=c;f.splice(b+1,0,h)}};a.prototype._getDisplayList=function(c,f,e){for(var b,a=this.symbolLevels.length,d=0;d<a;d++)if(this.symbolLevels[d].symbolLevel===c){b=this.symbolLevels[d];break}b||(b=t.pool.acquire(),b.symbolLevel=c,this.symbolLevels.push(b));var g;c=b.zLevels.length;for(a=0;a<c;a++)if(b.zLevels[a].zLevel===f){g=b.zLevels[a];
break}g||(g=u.pool.acquire(),g.geometryDPInfo=v.pool.acquire(),g.zLevel=f,b.zLevels.push(g));var h;switch(e){case k.WGLGeometryType.FILL:g.geometryDPInfo.fill||(g.geometryDPInfo.fill=[]);h=g.geometryDPInfo.fill;break;case k.WGLGeometryType.LINE:g.geometryDPInfo.line||(g.geometryDPInfo.line=[]);h=g.geometryDPInfo.line;break;case k.WGLGeometryType.MARKER:g.geometryDPInfo.marker||(g.geometryDPInfo.marker=[]);h=g.geometryDPInfo.marker;break;case k.WGLGeometryType.TEXT:g.geometryDPInfo.text||(g.geometryDPInfo.text=
[]);h=g.geometryDPInfo.text;break;default:console.error("Trying to add a record with geometry type '"+e+"'.")}return h};a.serialize=function(c,a,e){var b=0;a&&(a[e+b]=c.symbolLevels.length);++b;var f=0;for(c=c.symbolLevels;f<c.length;f++){var d=c[f];a&&(a[e+b]=d.symbolLevel);++b;a&&(a[e+b]=d.zLevels.length);++b;for(var g=0,d=d.zLevels;g<d.length;g++){var h=d[g];a&&(a[e+b]=h.zLevel);++b;h=h.geometryDPInfo;b+=this._serializeDisplayListInfo(h.fill,a,e+b);b+=this._serializeDisplayListInfo(h.line,a,e+
b);b+=this._serializeDisplayListInfo(h.marker,a,e+b);b+=this._serializeDisplayListInfo(h.text,a,e+b)}}return b};a.deserialize=function(c,a,e){var b=0,f=a[e+b];++b;for(var d=0;d<f;++d){var g=t.pool.acquire();g.symbolLevel=a[e+b];++b;c.symbolLevels.push(g);var h=a[e+b];++b;for(var x=0;x<h;++x){var m=u.pool.acquire();m.zLevel=a[e+b];++b;g.zLevels.push(m);var l=[],b=b+this._deserializeDisplayListInfo(l,k.WGLGeometryType.FILL,a,e+b);m.geometryDPInfo.fill=0<l.length?l:null;l=[];b+=this._deserializeDisplayListInfo(l,
k.WGLGeometryType.LINE,a,e+b);m.geometryDPInfo.line=0<l.length?l:null;l=[];b+=this._deserializeDisplayListInfo(l,k.WGLGeometryType.MARKER,a,e+b);m.geometryDPInfo.marker=0<l.length?l:null;l=[];b+=this._deserializeDisplayListInfo(l,k.WGLGeometryType.TEXT,a,e+b);m.geometryDPInfo.text=0<l.length?l:null}}return b};a._serializeDisplayListInfo=function(a,f,e){var b=0;if(a)for(var b=b+n.serializeInteger(a.length,f,e+b),c=0;c<a.length;c++)var d=a[c],b=b+r.serialize(d.materialInfo,f,e+b),b=b+n.serializeInteger(d.indexFrom,
f,e+b),b=b+n.serializeInteger(d.indexCount,f,e+b);else f&&(f[e+b]=0),++b;return b};a._deserializeDisplayListInfo=function(a,f,e,b){var c={n:void 0},d=0,d=d+n.deserializeInteger(c,e,b+d),g=c.n;a.length=g;for(var h=0;h<g;++h){var k=p.pool.acquire();k.geometryType=f;var m={materialInfo:null},d=d+r.deserialize(m,e,b+d);k.materialInfo=m.materialInfo;d+=n.deserializeInteger(c,e,b+d);k.indexFrom=c.n;d+=n.deserializeInteger(c,e,b+d);k.indexCount=c.n;a[h]=k}return d};a.pool=new q(a);return a}();var p=function(){function a(){this.materialInfo=
null;this.indexCount=this.indexFrom=0}a.prototype.release=function(){this.geometryType=k.WGLGeometryType.UNKNOWN;this.materialInfo=null;this.indexCount=this.indexFrom=0};a.pool=new q(a);return a}(),v=function(){function a(){this.text=this.marker=this.line=this.fill=null}a.prototype.release=function(){this.fill&&(this.fill.forEach(function(a){return p.pool.release(a)}),this.fill.length=0);this.line&&(this.line.forEach(function(a){return p.pool.release(a)}),this.line.length=0);this.marker&&(this.marker.forEach(function(a){return p.pool.release(a)}),
this.marker.length=0);this.text&&(this.text.forEach(function(a){return p.pool.release(a)}),this.text.length=0)};a.pool=new q(a);return a}(),u=function(){function a(){}a.prototype.acquire=function(){this.geometryDPInfo=v.pool.acquire()};a.prototype.release=function(){this.zLevel=null;v.pool.release(this.geometryDPInfo);this.geometryDPInfo=null};a.pool=new q(a);return a}(),t=function(){function a(){this.zLevels=[]}a.prototype.release=function(){this.symbolLevel=null;this.zLevels.forEach(function(a){return u.pool.release(a)});
this.zLevels.length=0};a.pool=new q(a);return a}();return w});