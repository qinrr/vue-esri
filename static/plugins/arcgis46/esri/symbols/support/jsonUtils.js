// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../core/Error ../../core/Warning ../Symbol3D ../SimpleLineSymbol ../SimpleMarkerSymbol ../PictureMarkerSymbol ../PictureFillSymbol ../SimpleFillSymbol ../TextSymbol ../PointSymbol3D ../LineSymbol3D ../PolygonSymbol3D ../MeshSymbol3D ../LabelSymbol3D ../WebStyleSymbol ../callouts/LineCallout3D ./symbolConversion".split(" "),function(B,d,h,k,l,m,n,p,q,r,t,u,v,w,x,y,e,z,A){function f(a,c,b){if(!a)return null;if(!b||"web-scene"!==b.origin||a.isInstanceOf(l)||a.isInstanceOf(e))return a.write(c,
b);var d=A.to3D(a);if(d.symbol)return d.symbol.write(c,b);b.messages&&b.messages.push(new h("symbol:unsupported","Symbols of type '"+a.declaredClass+"' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView",{symbol:a,context:b,error:d.error}));return null}Object.defineProperty(d,"__esModule",{value:!0});var g={esriSMS:n,esriPMS:p,esriTS:t,esriSLS:m,esriSFS:r,esriPFS:q,PointSymbol3D:u,LineSymbol3D:v,PolygonSymbol3D:w,MeshSymbol3D:x,LabelSymbol3D:y,styleSymbolReference:e};
d.read=function(a,c,b){if(c=a?g[a.type]||null:null)return c=new c,c.read(a,b),c;b&&b.messages&&a&&b.messages.push(new k("symbol:unsupported","Symbols of type '"+(a.type||"unknown")+"' are not supported",{definition:a,context:b}));return null};d.writeTarget=function(a,c,b,d){(a=f(a,{},d))&&(c[b]=a)};d.write=f;d.fromJSON=function(a,c){var b=a?g[a.type]||null:null;return b?b.fromJSON(a,c):null};d.readCallout3D=function(a,c){if(!a||!a.type)return null;var b=null;switch(a.type){case "line":b=new z}b&&
b.read(a,c);return b}});