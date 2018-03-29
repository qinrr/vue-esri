// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/libs/gl-matrix/mat4 ../../../core/libs/gl-matrix/vec4 ../../../core/libs/gl-matrix/vec3 ../../../core/libs/gl-matrix/vec2 ../../webgl/VertexArrayObject ../GeometryUtils ./rendererUtils ../../webgl/ShaderVariations ./vtShaderSnippets".split(" "),function(G,H,w,z,A,B,y,C,D,E,F){return function(){function m(){this._attributeLocations={a_pos:0,a_offsetAndNormal:1,a_accumulatedDistance:2};this._attributeLocationsDD={a_pos:0,a_offsetAndNormal:1,a_accumulatedDistance:2,
a_color:3,a_width:4};this._initialized=!1;this._viewProjMat=w.create();this._offsetVector=A.create();this._color=z.create();this._dashArray=B.create()}m.prototype.dispose=function(){};m.prototype.render=function(c,d,a,b,k,e,g,n,m,t,q){if(0!==d.triangleElementCount){this._initialized||this._initialize(c);var r=e.tileTransform.transform,v=e.coordRange/512,f=g.getPaintValue("line-translate",a);if(0!==f[0]||0!==f[1]){w.copy(this._viewProjMat,e.tileTransform.transform);var r=f[0],f=f[1],l=0,h=0,h=(1<<
e.key.level)/Math.pow(2,a)*v;k=k.rotation;if(1===g.getPaintValue("line-translate-anchor",a)){l=-C.C_DEG_TO_RAD*k;k=Math.sin(l);var p=Math.cos(l),l=h*(r*p-f*k),h=h*(r*k+f*p)}else l=h*r,h*=f;this._offsetVector[0]=l;this._offsetVector[1]=h;this._offsetVector[2]=0;w.translate(this._viewProjMat,this._viewProjMat,this._offsetVector);r=this._viewProjMat}f=g.getPaintValue("line-pattern",a);h=void 0!==f;t=1/t;k=g.getPaintValue("line-blur",a)+t;t=g.getPaintValue("line-width",a);l=q*g.getPaintValue("line-opacity",
a);q=g.getPaintValue("line-color",a);var p=g.hasDataDrivenLine,x=3===b,u;x&&(u=D.int32To4Bytes(d.layerID));if(b=this._getLineVAO(c,e,p)){c.bindVAO(b);b=this._shaderVariations.getProgram([h,p,x],void 0,void 0,p?this._attributeLocationsDD:this._attributeLocations);c.bindProgram(b);b.setUniformMatrix4fv("u_transformMatrix",r);b.setUniformMatrix4fv("u_extrudeMatrix",m);b.setUniform2fv("u_normalized_origin",e.tileTransform.displayCoord);b.setUniform1f("u_depth",g.z);b.setUniform1f("u_blur",k);p||(e=l*
q[3],this._color[0]=e*q[0],this._color[1]=e*q[1],this._color[2]=e*q[2],this._color[3]=e,b.setUniform4fv("u_color",this._color),b.setUniform1f("u_width",t));x&&b.setUniform4f("u_id",u[0],u[1],u[2],u[3]);if(h){if(a=n.getMosaicItemPosition(f,!0))n.bind(c,9729,a.page,1),b.setUniform2f("u_pattern_tl",a.tl[0],a.tl[1]),b.setUniform2f("u_pattern_br",a.br[0],a.br[1]),b.setUniform2f("u_spriteSize",v*a.size[0],a.size[1]),b.setUniform1i("u_texture",1)}else n=g.getPaintValue("line-dasharray",a),2>n.length&&(n=
[1,-1]),this._dashArray[0]=v*n[0],this._dashArray[1]=v*n[1],b.setUniform2fv("u_dasharray",this._dashArray);c.drawElements(4,d.triangleElementCount,5125,12*d.triangleElementStart);c.bindVAO()}}};m.prototype._initialize=function(c){if(this._initialized)return!0;c=new E("line",["lineVS","lineFS"],[],F,c);c.addDefine("PATTERN","PATTERN",[!0,!0],"PATTERN");c.addDefine("DD","DD",[!0,!1],"DD");c.addDefine("ID","ID",[!0,!0],"ID");this._shaderVariations=c;this._vertexAttributes={geometry:[{name:"a_pos",count:2,
type:5122,offset:0,stride:12,normalized:!1,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:4,stride:12,normalized:!1,divisor:0},{name:"a_accumulatedDistance",count:2,type:5123,offset:8,stride:12,normalized:!1,divisor:0}]};this._vertexAttributesDD={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:20,normalized:!1,divisor:0},{name:"a_offsetAndNormal",count:4,type:5120,offset:4,stride:20,normalized:!1,divisor:0},{name:"a_accumulatedDistance",count:2,type:5122,offset:8,stride:20,
normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:12,stride:20,normalized:!0,divisor:0},{name:"a_width",count:1,type:5126,offset:16,stride:20,normalized:!1,divisor:0}]};return this._initialized=!0};m.prototype._getLineVAO=function(c,d,a){if(a){if(d.lineDDVertexArrayObject)return d.lineDDVertexArrayObject;a=d.lineDDVertexBuffer;var b=d.lineIndexBuffer;if(!a||!b)return null;d.lineDDVertexArrayObject=new y(c,this._attributeLocationsDD,this._vertexAttributesDD,{geometry:a},b);return d.lineDDVertexArrayObject}if(d.lineVertexArrayObject)return d.lineVertexArrayObject;
a=d.lineVertexBuffer;b=d.lineIndexBuffer;if(!a||!b)return null;d.lineVertexArrayObject=new y(c,this._attributeLocations,this._vertexAttributes,{geometry:a},b);return d.lineVertexArrayObject};return m}()});