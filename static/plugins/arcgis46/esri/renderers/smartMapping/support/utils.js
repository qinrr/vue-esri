// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../layers/FeatureLayer ./adapters/FeatureLayerAdapter ../../../layers/SceneLayer ./adapters/SceneLayerAdapter ../../../layers/PointCloudLayer ./adapters/PointCloudLayerAdapter ./adapters/LayerAdapter ../../../support/arcadeUtils ../statistics/support/utils ../../../core/promiseUtils dojo/_base/lang".split(" "),function(E,g,r,t,u,v,w,x,y,z,k,q,A){function m(a,b,c){b=(b-a)/c;for(var f=[],d,e=1;e<=c;e++)d=a+b,d=Number(d.toFixed(16)),f.push([a,d]),a=d;return f}function B(a,
b,c,f){for(var d=[],e=f.length,h=0;h<e;h++){var C=k.mergeWhereClauses(c,k.mergeWhereClauses(b+" \x3e\x3d "+f[h][0],null!==f[h][1]?b+(h===e-1?" \x3c\x3d ":" \x3c ")+f[h][1]:""));d.push(C)}return q.eachAlways(d.map(function(b){return a.queryFeatureCount(b)}))}function n(a,b){if(b)for(var c in a)a[c].label=b[c];return{count:a}}Object.defineProperty(g,"__esModule",{value:!0});var D=/_value$/i,p=(l={},l[0]={adapter:t,layer:r,label:"FeatureLayer"},l[1]={adapter:v,layer:u,label:"SceneLayer"},l[2]={adapter:x,
layer:w,label:"PointCloudLayer"},l);g.getLayerTypeLabels=function(a){return a.map(function(a){return p[a].label})};g.createLayerAdapter=function(a,b){if(a instanceof y)return a;var c=null;b.some(function(b){var d=a.constructor===p[b].layer;d&&(c=new p[b].adapter({layer:a}));return d});return c};g.getFieldsList=function(a){var b=a.field,c=a.normalizationField;a=a.valueExpression;var f=[];a&&(f=z.extractFieldNames(a));b&&f.push(b);c&&f.push(c);return f};g.getUnknownFields=function(a){var b=a.layer;
return a.fields.filter(function(a){return!b.getField(a)})};g.getEqualIntervalBins=m;g.getSummaryStatisticsFromFeatureSet=function(a){a=(a=a&&a.features)&&a[0]&&a[0].attributes;var b={},c;for(c in a)b[c.replace(D,"").toLowerCase()]=a[c];b.min===b.max&&null!=b.min&&null==b.stddev&&(b.stddev=b.variance=0);return b};g.processSummaryStatisticsResult=function(a){for(var b in a)-1<k.statisticTypes.indexOf(b)&&(k.isValidNumber(a[b])||(a[b]=null));return a};g.getHistogramFromFeatureSet=function(a,b,c,f){var d=
{};a&&a.features&&a.features.forEach(function(a){var b=a.attributes;a=k.getCustomExprVal(b,"countOFExpr");b=k.getAttributeVal(b,"countOFExpr");0!==a&&(d[a]=b)});var e=[];m(b,c,f).forEach(function(a,b){b=(b+1).toString();e.push({minValue:a[0],maxValue:a[1],count:d.hasOwnProperty(b)?d[b]:0})});return{bins:e,minValue:b,maxValue:c}};g.getBins=function(a,b){var c=a.layer,f=a.field;a=a.numBins||10;var d=b.min,e=b.max,h=b.intervals||m(d,e,a),g=b.normTotal;return B(c,b&&b.sqlExpr||f,b&&b.excludeZerosExpr,
h).then(function(a){return{bins:a.map(function(a,b){return{minValue:h[b][0],maxValue:h[b][1],count:a.value}}),minValue:d,maxValue:e,normalizationTotal:g}})};g.getUniqueValuesFromFeatureSet=function(a,b,c,f){var d="countOF"+(c||"Expr"),e={},g=!1;(a&&a.features).forEach(function(a){var b=a.attributes;a=k.getAttributeVal(b,d);b=c?k.getAttributeVal(b,c):k.getCustomExprVal(b,d);null===b&&0===a&&(g=!0);if(null==b||"string"===typeof b&&""===A.trim(b))b=null;null==e[b]?e[b]={count:a,data:b}:e[b].count+=a});
return c&&g?b.queryFeatureCount(c+" is NULL").then(function(a){e["null"].count+=a||0;return n(e,f)}).otherwise(function(){return n(e,f)}):q.resolve(n(e,f))};var l});