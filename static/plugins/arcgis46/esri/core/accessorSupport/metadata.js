// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,d){function g(a){return null!=a.__accessorMetadata__}function k(a){return g(a)&&null!=e(a).properties}function e(a){a.__accessorMetadata__||Object.defineProperty(a,"__accessorMetadata__",{value:{},enumerable:!0,configurable:!0,writable:!0});return a.__accessorMetadata__}function f(a){a=e(a);var b=a.properties;b||(b=a.properties={});return b}function h(a,b){var c=e(a);a=c.parameters;a||(a=c.parameters={});c=a[b];c||(c=[],a[b]=c);return c}Object.defineProperty(d,
"__esModule",{value:!0});d.hasMetadata=g;d.hasPropertiesMetadata=k;d.hasPropertyMetadata=function(a,b){return k(a)&&null!=f(a)[b]};d.hasParametersMetadata=function(a,b){return g(a)&&null!=e(a).parameters&&null!=e(a).parameters[b]};d.getMetadata=e;d.getPropertiesMetadata=f;d.getPropertyMetadata=function(a,b){a=f(a);var c=a[b];c||(c=a[b]={});return c};d.setPropertyMetadata=function(a,b,c){f(a)[b]=c};d.getParametersMetadata=h;d.getParameterMetadata=function(a,b,c){var d=h(a,b)[c];d||(h(a,b)[c]=d={index:c});
return d}});