// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define(["dojo/on","dojo/dom-style","dojo/has"],function(n,p,q){var c={show:function(a){if(a=c.getNode(a))a.style.display="block"},getNode:function(a){return a&&a.domNode||a},hide:function(a){if(a=c.getNode(a))a.style.display="none"},toggle:function(a){if(a=c.getNode(a))a.style.display="none"===a.style.display?"block":"none"},documentBox:8>=q("ie")?{w:document.documentElement.clientWidth,h:document.documentElement.clientHeight}:{w:window.innerWidth,h:window.innerHeight},setScrollable:function(a){if(a=
this.getNode(a)){var c=0,g=0,h=0,k=0,l=0,m=0;return[n(a,"touchstart",function(d){c=d.touches[0].screenX;g=d.touches[0].screenY;h=a.scrollWidth;k=a.scrollHeight;l=a.clientWidth;m=a.clientHeight}),n(a,"touchmove",function(d){d.preventDefault();var f=a.firstChild;f instanceof Text&&(f=a.childNodes[1]);var b=f._currentX||0,e=f._currentY||0,b=b+(d.touches[0].screenX-c);0<b?b=0:0>b&&Math.abs(b)+l>h&&(b=-1*(h-l));f._currentX=b;e+=d.touches[0].screenY-g;0<e?e=0:0>e&&Math.abs(e)+m>k&&(e=-1*(k-m));f._currentY=
e;p.set(f,{"-webkit-transition-property":"-webkit-transform","-webkit-transform":"translate("+b+"px, "+e+"px)"});c=d.touches[0].screenX;g=d.touches[0].screenY})]}}};return c});