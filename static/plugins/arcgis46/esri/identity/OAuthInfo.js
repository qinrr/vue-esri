// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/accessorSupport/decorators ../core/JSONSupport".split(" "),function(h,k,f,c,b,g){return function(e){function a(a){a=e.call(this)||this;a._oAuthCred=null;a.appId=null;a.authNamespace="/";a.expiration=20160;a.forceLogin=!1;a.locale=null;a.minTimeUntilExpiration=30;a.popup=!1;a.popupCallbackUrl="oauth-callback.html";a.popupWindowFeatures="height\x3d490,width\x3d800,resizable,scrollbars,status";a.portalUrl=
"https://www.arcgis.com";return a}f(a,e);d=a;a.prototype.clone=function(){return d.fromJSON(this.toJSON())};c([b.property({json:{write:!0}})],a.prototype,"appId",void 0);c([b.property({json:{write:!0}})],a.prototype,"authNamespace",void 0);c([b.property({json:{write:!0}})],a.prototype,"expiration",void 0);c([b.property({json:{write:!0}})],a.prototype,"forceLogin",void 0);c([b.property({json:{write:!0}})],a.prototype,"locale",void 0);c([b.property({json:{write:!0}})],a.prototype,"minTimeUntilExpiration",
void 0);c([b.property({json:{write:!0}})],a.prototype,"popup",void 0);c([b.property({json:{write:!0}})],a.prototype,"popupCallbackUrl",void 0);c([b.property({json:{write:!0}})],a.prototype,"popupWindowFeatures",void 0);c([b.property({json:{write:!0}})],a.prototype,"portalUrl",void 0);return a=d=c([b.subclass("esri.identity.OAuthInfo")],a);var d}(b.declared(g))});