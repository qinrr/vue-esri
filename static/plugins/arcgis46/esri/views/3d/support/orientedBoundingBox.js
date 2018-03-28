// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports","./aaBoundingBox","../lib/glMatrix"],function(f,d,r,p){function m(a,b){var c=g(a.center,b);a=l(a,b);return 0<c-a?1:0>c+a?-1:0}function l(a,b){h.conjugate(a.quaternion,n);h.multiplyVec3(n,b,k);a=a.halfSize;return Math.abs(k[0]*a[0])+Math.abs(k[1]*a[1])+Math.abs(k[2]*a[2])}function g(a,b){return b[0]*a[0]+b[1]*a[1]+b[2]*a[2]+b[3]}Object.defineProperty(d,"__esModule",{value:!0});var h=p.quat4;f=p.vec3;var t=p.mat3d,n=h.create(),k=f.create(),u=f.create(),v=t.create();f=function(){return function(a){this.buffer=
new ArrayBuffer(56*a);this.obbs=Array(a);for(var b=0;b<a;b++)this.obbs[b]={center:new Float64Array(this.buffer,56*b+0,3),halfSize:new Float32Array(this.buffer,56*b+24,3),quaternion:new Float32Array(this.buffer,56*b+36,4)}}}();d.ObbArray=f;d.intersectPlane=m;d.toAaBoundingBox=function(a,b){b||(b=r.create());var c=h.toMat3(a.quaternion,v),q=a.halfSize[0]*Math.abs(c[0])+a.halfSize[1]*Math.abs(c[3])+a.halfSize[2]*Math.abs(c[6]),d=a.halfSize[0]*Math.abs(c[1])+a.halfSize[1]*Math.abs(c[4])+a.halfSize[2]*
Math.abs(c[7]),c=a.halfSize[0]*Math.abs(c[2])+a.halfSize[1]*Math.abs(c[5])+a.halfSize[2]*Math.abs(c[8]);b[0]=a.center[0]-q;b[1]=a.center[1]-d;b[2]=a.center[2]-c;b[3]=a.center[0]+q;b[4]=a.center[1]+d;b[5]=a.center[2]+c;return b};d.minimumDistancePlane=function(a,b){var c=g(a.center,b);a=l(a,b);return c-a};d.maximumDistancePlane=function(a,b){var c=g(a.center,b);a=l(a,b);return c+a};d.isVisible=function(a,b){for(var c=0;6>c;c++)if(0<m(a,b[c]))return!1;return!0};d.intersectLine=function(a,b,c,d){void 0===
d&&(d=0);h.conjugate(a.quaternion,n);p.vec3.subtract(b,a.center,k);b=h.multiplyVec3(n,k,k);c=h.multiplyVec3(n,c,u);for(var f=-Infinity,g=Infinity,e=0;3>e;e++)if(1E-6<Math.abs(c[e]))var l=(d+a.halfSize[e]-b[e])/c[e],m=(-d-a.halfSize[e]-b[e])/c[e],f=Math.max(f,Math.min(l,m)),g=Math.min(g,Math.max(l,m));else if(b[e]>a.halfSize[e]+d||b[e]<-a.halfSize[e]-d)return!1;return f<=g}});