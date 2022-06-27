import{a2 as Jl,a3 as ht,a4 as eu,a5 as tu,a6 as qa,a7 as ea,a8 as ru,a9 as br,aa as ja,ab as iu,ac as nu,ad as Ya,ae as cn,af as ni,ag as Tt,ah as Cs,ai as Bt,a as ne,i as Xe,v as Rs,aj as dn,ak as vn,al as nr,am as pn,w as au,h as ct,an as ou,r as jr,ao as ba,aq as su,ar as lu,as as uu,t as Mr,at as fu,au as ta,av as dt,C as Ma,s as Ns,aw as Ps,ax as hu,ay as rn,az as cu,q as Ds,aA as Is,aB as Ft,aC as tr,G as ki,P as du,aD as ra,aE as Za,aF as ia,aG as vu,aH as Os,b as pu,aI as _u,aJ as mu,aK as _n,aL as mn,aM as gu,E as xr,aN as yu,u as xu,aO as Ka,H as Tu,aP as Eu,O as Yr,aQ as Su,m as La,aR as $a,K as Qa,aS as Au,F as gn,aT as wu,aU as bu,aV as Mu,aW as Lu,aX as Cu,aY as Ja,j as na,x as eo,aZ as Ru,Y as Fs,U as Bs,a_ as Nu,a$ as Pu,b0 as Du,b1 as ai,b2 as to,b3 as Iu,b4 as Ou,b5 as Fu,b6 as Bu,b7 as Uu,S as Hu,b8 as zu,b9 as Vu,ba as oi,bb as Us,bc as Gu,bd as ku,be as Wu,bf as Hs,bg as zs,bh as Vs,bi as Xu,bj as qu,bk as ju,g as Yu,N as yn,_ as Zu,M as Ku,Z as $u,$ as Qu,a0 as Ju,T as ef,V as tf,Q as rf,R as nf,X as af,a1 as of,W as sf}from"./colors.49532e3e.js";import{u as lf,r as Pt,e as uf,j as At,a as zt,t as mt}from"./index.3ff91169.js";import"./_commonjsHelpers.4e997714.js";var Rr=Math.PI*2,Vt=Jl.CMD,ff=["top","right","bottom","left"];function hf(e,t,r,i,n){var a=r.width,o=r.height;switch(e){case"top":i.set(r.x+a/2,r.y-t),n.set(0,-1);break;case"bottom":i.set(r.x+a/2,r.y+o+t),n.set(0,1);break;case"left":i.set(r.x-t,r.y+o/2),n.set(-1,0);break;case"right":i.set(r.x+a+t,r.y+o/2),n.set(1,0);break}}function cf(e,t,r,i,n,a,o,s,l){o-=e,s-=t;var u=Math.sqrt(o*o+s*s);o/=u,s/=u;var f=o*r+e,h=s*r+t;if(Math.abs(i-n)%Rr<1e-4)return l[0]=f,l[1]=h,u-r;if(a){var d=i;i=ni(n),n=ni(d)}else i=ni(i),n=ni(n);i>n&&(n+=Rr);var c=Math.atan2(s,o);if(c<0&&(c+=Rr),c>=i&&c<=n||c+Rr>=i&&c+Rr<=n)return l[0]=f,l[1]=h,u-r;var v=r*Math.cos(i)+e,p=r*Math.sin(i)+t,_=r*Math.cos(n)+e,m=r*Math.sin(n)+t,x=(v-o)*(v-o)+(p-s)*(p-s),g=(_-o)*(_-o)+(m-s)*(m-s);return x<g?(l[0]=v,l[1]=p,Math.sqrt(x)):(l[0]=_,l[1]=m,Math.sqrt(g))}function aa(e,t,r,i,n,a,o,s){var l=n-e,u=a-t,f=r-e,h=i-t,d=Math.sqrt(f*f+h*h);f/=d,h/=d;var c=l*f+u*h,v=c/d;s&&(v=Math.min(Math.max(v,0),1)),v*=d;var p=o[0]=e+v*f,_=o[1]=t+v*h;return Math.sqrt((p-n)*(p-n)+(_-a)*(_-a))}function Gs(e,t,r,i,n,a,o){r<0&&(e=e+r,r=-r),i<0&&(t=t+i,i=-i);var s=e+r,l=t+i,u=o[0]=Math.min(Math.max(n,e),s),f=o[1]=Math.min(Math.max(a,t),l);return Math.sqrt((u-n)*(u-n)+(f-a)*(f-a))}var ft=[];function df(e,t,r){var i=Gs(t.x,t.y,t.width,t.height,e.x,e.y,ft);return r.set(ft[0],ft[1]),i}function vf(e,t,r){for(var i=0,n=0,a=0,o=0,s,l,u=1/0,f=t.data,h=e.x,d=e.y,c=0;c<f.length;){var v=f[c++];c===1&&(i=f[c],n=f[c+1],a=i,o=n);var p=u;switch(v){case Vt.M:a=f[c++],o=f[c++],i=a,n=o;break;case Vt.L:p=aa(i,n,f[c],f[c+1],h,d,ft,!0),i=f[c++],n=f[c++];break;case Vt.C:p=nu(i,n,f[c++],f[c++],f[c++],f[c++],f[c],f[c+1],h,d,ft),i=f[c++],n=f[c++];break;case Vt.Q:p=iu(i,n,f[c++],f[c++],f[c],f[c+1],h,d,ft),i=f[c++],n=f[c++];break;case Vt.A:var _=f[c++],m=f[c++],x=f[c++],g=f[c++],y=f[c++],E=f[c++];c+=1;var S=!!(1-f[c++]);s=Math.cos(y)*x+_,l=Math.sin(y)*g+m,c<=1&&(a=s,o=l);var b=(h-_)*g/x+_;p=cf(_,m,g,y,y+E,S,b,d,ft),i=Math.cos(y+E)*x+_,n=Math.sin(y+E)*g+m;break;case Vt.R:a=i=f[c++],o=n=f[c++];var A=f[c++],M=f[c++];p=Gs(a,o,A,M,h,d,ft);break;case Vt.Z:p=aa(i,n,a,o,h,d,ft,!0),i=a,n=o;break}p<u&&(u=p,r.set(ft[0],ft[1]))}return u}var Qt=new ht,Pe=new ht,Je=new ht,gr=new ht,Nr=new ht;function ro(e,t){if(!!e){var r=e.getTextGuideLine(),i=e.getTextContent();if(!!(i&&r)){var n=e.textGuideLineConfig||{},a=[[0,0],[0,0],[0,0]],o=n.candidates||ff,s=i.getBoundingRect().clone();s.applyTransform(i.getComputedTransform());var l=1/0,u=n.anchor,f=e.getComputedTransform(),h=f&&eu([],f),d=t.get("length2")||0;u&&Je.copy(u);for(var c=0;c<o.length;c++){var v=o[c];hf(v,0,s,Qt,gr),ht.scaleAndAdd(Pe,Qt,gr,d),Pe.transform(h);var p=e.getBoundingRect(),_=u?u.distance(Pe):e instanceof tu?vf(Pe,e.path,Je):df(Pe,p,Je);_<l&&(l=_,Pe.transform(f),Je.transform(f),Je.toArray(a[0]),Pe.toArray(a[1]),Qt.toArray(a[2]))}pf(a,t.get("minTurnAngle")),r.setShape({points:a})}}}var io=[],Gt=new ht;function pf(e,t){if(t<=180&&t>0){t=t/180*Math.PI,Qt.fromArray(e[0]),Pe.fromArray(e[1]),Je.fromArray(e[2]),ht.sub(gr,Qt,Pe),ht.sub(Nr,Je,Pe);var r=gr.len(),i=Nr.len();if(!(r<.001||i<.001)){gr.scale(1/r),Nr.scale(1/i);var n=gr.dot(Nr),a=Math.cos(t);if(a<n){var o=aa(Pe.x,Pe.y,Je.x,Je.y,Qt.x,Qt.y,io,!1);Gt.fromArray(io),Gt.scaleAndAdd(Nr,o/Math.tan(Math.PI-t));var s=Je.x!==Pe.x?(Gt.x-Pe.x)/(Je.x-Pe.x):(Gt.y-Pe.y)/(Je.y-Pe.y);if(isNaN(s))return;s<0?ht.copy(Gt,Pe):s>1&&ht.copy(Gt,Je),Gt.toArray(e[1])}}}}function no(e,t,r,i){var n=r==="normal",a=n?e:e.ensureState(r);a.ignore=t;var o=i.get("smooth");o&&o===!0&&(o=.3),a.shape=a.shape||{},o>0&&(a.shape.smooth=o);var s=i.getModel("lineStyle").getLineStyle();n?e.useStyle(s):a.style=s}function _f(e,t){var r=t.smooth,i=t.points;if(!!i)if(e.moveTo(i[0][0],i[0][1]),r>0&&i.length>=3){var n=Ya(i[0],i[1]),a=Ya(i[1],i[2]);if(!n||!a){e.lineTo(i[1][0],i[1][1]),e.lineTo(i[2][0],i[2][1]);return}var o=Math.min(n,a)*r,s=cn([],i[1],i[0],o/n),l=cn([],i[1],i[2],o/a),u=cn([],s,l,.5);e.bezierCurveTo(s[0],s[1],s[0],s[1],u[0],u[1]),e.bezierCurveTo(l[0],l[1],l[0],l[1],i[2][0],i[2][1])}else for(var f=1;f<i.length;f++)e.lineTo(i[f][0],i[f][1])}function mf(e,t,r){var i=e.getTextGuideLine(),n=e.getTextContent();if(!n){i&&e.removeTextGuideLine();return}for(var a=t.normal,o=a.get("show"),s=n.ignore,l=0;l<qa.length;l++){var u=qa[l],f=t[u],h=u==="normal";if(f){var d=f.get("show"),c=h?s:ea(n.states[u]&&n.states[u].ignore,s);if(c||!ea(d,o)){var v=h?i:i&&i.states[u];v&&(v.ignore=!0);continue}i||(i=new ru,e.setTextGuideLine(i),!h&&(s||!o)&&no(i,!0,"normal",t.normal),e.stateProxy&&(i.stateProxy=e.stateProxy)),no(i,!1,u,f)}}if(i){br(i.style,r),i.style.fill=null;var p=a.get("showAbove"),_=e.textGuideLineConfig=e.textGuideLineConfig||{};_.showAbove=p||!1,i.buildPath=_f}}function gf(e,t){t=t||"labelLine";for(var r={normal:e.getModel(t)},i=0;i<ja.length;i++){var n=ja[i];r[n]=e.getModel([n,t])}return r}var Zr=ne,yf=Bt,Wi=-1,Ca=function(){function e(t){var r=t.mappingMethod,i=t.type,n=this.option=ct(t);this.type=i,this.mappingMethod=r,this._normalizeData=Ef[r];var a=e.visualHandlers[i];this.applyVisual=a.applyVisual,this.getColorMapper=a.getColorMapper,this._normalizedToVisual=a._normalizedToVisual[r],r==="piecewise"?(xn(n),xf(n)):r==="category"?n.categories?Tf(n):xn(n,!0):(ou(r!=="linear"||n.dataExtent),xn(n))}return e.prototype.mapValueToVisual=function(t){var r=this._normalizeData(t);return this._normalizedToVisual(r,t)},e.prototype.getNormalizer=function(){return Tt(this._normalizeData,this)},e.listVisualTypes=function(){return Cs(e.visualHandlers)},e.isValidType=function(t){return e.visualHandlers.hasOwnProperty(t)},e.eachVisual=function(t,r,i){Bt(t)?ne(t,r,i):r.call(i,t)},e.mapVisual=function(t,r,i){var n,a=Xe(t)?[]:Bt(t)?{}:(n=!0,null);return e.eachVisual(t,function(o,s){var l=r.call(i,o,s);n?a=l:a[s]=l}),a},e.retrieveVisuals=function(t){var r={},i;return t&&Zr(e.visualHandlers,function(n,a){t.hasOwnProperty(a)&&(r[a]=t[a],i=!0)}),i?r:null},e.prepareVisualTypes=function(t){if(Xe(t))t=t.slice();else if(yf(t)){var r=[];Zr(t,function(i,n){r.push(n)}),t=r}else return[];return t.sort(function(i,n){return n==="color"&&i!=="color"&&i.indexOf("color")===0?1:-1}),t},e.dependsOn=function(t,r){return r==="color"?!!(t&&t.indexOf(r)===0):t===r},e.findPieceIndex=function(t,r,i){for(var n,a=1/0,o=0,s=r.length;o<s;o++){var l=r[o].value;if(l!=null){if(l===t||Rs(l)&&l===t+"")return o;i&&d(l,o)}}for(var o=0,s=r.length;o<s;o++){var u=r[o],f=u.interval,h=u.close;if(f){if(f[0]===-1/0){if(li(h[1],t,f[1]))return o}else if(f[1]===1/0){if(li(h[0],f[0],t))return o}else if(li(h[0],f[0],t)&&li(h[1],t,f[1]))return o;i&&d(f[0],o),i&&d(f[1],o)}}if(i)return t===1/0?r.length-1:t===-1/0?0:n;function d(c,v){var p=Math.abs(c-t);p<a&&(a=p,n=v)}},e.visualHandlers={color:{applyVisual:Pr("color"),getColorMapper:function(){var t=this.option;return Tt(t.mappingMethod==="category"?function(r,i){return!i&&(r=this._normalizeData(r)),zr.call(this,r)}:function(r,i,n){var a=!!n;return!i&&(r=this._normalizeData(r)),n=dn(r,t.parsedVisual,n),a?n:vn(n,"rgba")},this)},_normalizedToVisual:{linear:function(t){return vn(dn(t,this.option.parsedVisual),"rgba")},category:zr,piecewise:function(t,r){var i=sa.call(this,r);return i==null&&(i=vn(dn(t,this.option.parsedVisual),"rgba")),i},fixed:Kt}},colorHue:si(function(t,r){return pn(t,r)}),colorSaturation:si(function(t,r){return pn(t,null,r)}),colorLightness:si(function(t,r){return pn(t,null,null,r)}),colorAlpha:si(function(t,r){return au(t,r)}),decal:{applyVisual:Pr("decal"),_normalizedToVisual:{linear:null,category:zr,piecewise:null,fixed:null}},opacity:{applyVisual:Pr("opacity"),_normalizedToVisual:oa([0,1])},liftZ:{applyVisual:Pr("liftZ"),_normalizedToVisual:{linear:Kt,category:Kt,piecewise:Kt,fixed:Kt}},symbol:{applyVisual:function(t,r,i){var n=this.mapValueToVisual(t);i("symbol",n)},_normalizedToVisual:{linear:ao,category:zr,piecewise:function(t,r){var i=sa.call(this,r);return i==null&&(i=ao.call(this,t)),i},fixed:Kt}},symbolSize:{applyVisual:Pr("symbolSize"),_normalizedToVisual:oa([0,1])}},e}();function xf(e){var t=e.pieceList;e.hasSpecialVisual=!1,ne(t,function(r,i){r.originIndex=i,r.visual!=null&&(e.hasSpecialVisual=!0)})}function Tf(e){var t=e.categories,r=e.categoryMap={},i=e.visual;if(Zr(t,function(o,s){r[o]=s}),!Xe(i)){var n=[];Bt(i)?Zr(i,function(o,s){var l=r[s];n[l!=null?l:Wi]=o}):n[Wi]=i,i=ks(e,n)}for(var a=t.length-1;a>=0;a--)i[a]==null&&(delete r[t[a]],t.pop())}function xn(e,t){var r=e.visual,i=[];Bt(r)?Zr(r,function(a){i.push(a)}):r!=null&&i.push(r);var n={color:1,symbol:1};!t&&i.length===1&&!n.hasOwnProperty(e.type)&&(i[1]=i[0]),ks(e,i)}function si(e){return{applyVisual:function(t,r,i){var n=this.mapValueToVisual(t);i("color",e(r("color"),n))},_normalizedToVisual:oa([0,1])}}function ao(e){var t=this.option.visual;return t[Math.round(nr(e,[0,1],[0,t.length-1],!0))]||{}}function Pr(e){return function(t,r,i){i(e,this.mapValueToVisual(t))}}function zr(e){var t=this.option.visual;return t[this.option.loop&&e!==Wi?e%t.length:e]}function Kt(){return this.option.visual[0]}function oa(e){return{linear:function(t){return nr(t,e,this.option.visual,!0)},category:zr,piecewise:function(t,r){var i=sa.call(this,r);return i==null&&(i=nr(t,e,this.option.visual,!0)),i},fixed:Kt}}function sa(e){var t=this.option,r=t.pieceList;if(t.hasSpecialVisual){var i=Ca.findPieceIndex(e,r),n=r[i];if(n&&n.visual)return n.visual[this.type]}}function ks(e,t){return e.visual=t,e.type==="color"&&(e.parsedVisual=jr(t,function(r){var i=ba(r);return i||[0,0,0,1]})),t}var Ef={linear:function(e){return nr(e,this.option.dataExtent,[0,1],!0)},piecewise:function(e){var t=this.option.pieceList,r=Ca.findPieceIndex(e,t,!0);if(r!=null)return nr(r,[0,t.length-1],[0,1],!0)},category:function(e){var t=this.option.categories?this.option.categoryMap[e]:e;return t==null?Wi:t},fixed:su};function li(e,t,r){return e?t<=r:t<r}var je=Ca,oo=ne;function so(e){if(e){for(var t in e)if(e.hasOwnProperty(t))return!0}}function lo(e,t,r){var i={};return oo(t,function(a){var o=i[a]=n();oo(e[a],function(s,l){if(!!je.isValidType(l)){var u={type:l,visual:s};r&&r(u,a),o[l]=new je(u),l==="opacity"&&(u=ct(u),u.type="colorAlpha",o.__hidden.__alphaForOpacity=new je(u))}})}),i;function n(){var a=function(){};a.prototype.__hidden=a.prototype;var o=new a;return o}}function Sf(e,t,r){var i;ne(r,function(n){t.hasOwnProperty(n)&&so(t[n])&&(i=!0)}),i&&ne(r,function(n){t.hasOwnProperty(n)&&so(t[n])?e[n]=ct(t[n]):delete e[n]})}function Af(e,t,r,i){var n={};return ne(e,function(a){var o=je.prepareVisualTypes(t[a]);n[a]=o}),{progress:function(o,s){var l;i!=null&&(l=s.getDimensionIndex(i));function u(E){return lu(s,h,E)}function f(E,S){uu(s,h,E,S)}for(var h,d=s.getStore();(h=o.next())!=null;){var c=s.getRawDataItem(h);if(!(c&&c.visualMap===!1))for(var v=i!=null?d.get(l,h):h,p=r(v),_=t[p],m=n[p],x=0,g=m.length;x<g;x++){var y=m[x];_[y]&&_[y].applyVisual(v,u,f)}}}}}var wf={get:function(e,t,r){var i=ct((bf[e]||{})[t]);return r&&Xe(i)?i[i.length-1]:i}},bf={color:{active:["#006edd","#e0ffff"],inactive:["rgba(0,0,0,0)"]},colorHue:{active:[0,360],inactive:[0,0]},colorSaturation:{active:[.3,1],inactive:[0,0]},colorLightness:{active:[.9,.5],inactive:[0,0]},colorAlpha:{active:[.3,1],inactive:[0,0]},opacity:{active:[.3,1],inactive:[0,0]},symbol:{active:["circle","roundRect","diamond"],inactive:["none"]},symbolSize:{active:[10,50],inactive:[0,0]}},Ws=wf,uo=je.mapVisual,Mf=je.eachVisual,Lf=Xe,fo=ne,Cf=Ns,Rf=nr,Nf=function(e){Mr.exports.__extends(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r.stateList=["inRange","outOfRange"],r.replacableOptionKeys=["inRange","outOfRange","target","controller","color"],r.layoutMode={type:"box",ignoreSize:!0},r.dataBound=[-1/0,1/0],r.targetVisuals={},r.controllerVisuals={},r}return t.prototype.init=function(r,i,n){this.mergeDefaultAndTheme(r,n)},t.prototype.optionUpdated=function(r,i){var n=this.option;!i&&Sf(n,r,this.replacableOptionKeys),this.textStyleModel=this.getModel("textStyle"),this.resetItemSize(),this.completeVisualOption()},t.prototype.resetVisual=function(r){var i=this.stateList;r=Tt(r,this),this.controllerVisuals=lo(this.option.controller,i,r),this.targetVisuals=lo(this.option.target,i,r)},t.prototype.getItemSymbol=function(){return null},t.prototype.getTargetSeriesIndices=function(){var r=this.option.seriesIndex,i=[];return r==null||r==="all"?this.ecModel.eachSeries(function(n,a){i.push(a)}):i=fu(r),i},t.prototype.eachTargetSeries=function(r,i){ne(this.getTargetSeriesIndices(),function(n){var a=this.ecModel.getSeriesByIndex(n);a&&r.call(i,a)},this)},t.prototype.isTargetSeries=function(r){var i=!1;return this.eachTargetSeries(function(n){n===r&&(i=!0)}),i},t.prototype.formatValueText=function(r,i,n){var a=this.option,o=a.precision,s=this.dataBound,l=a.formatter,u;n=n||["<",">"],Xe(r)&&(r=r.slice(),u=!0);var f=i?r:u?[h(r[0]),h(r[1])]:h(r);if(Rs(l))return l.replace("{value}",u?f[0]:f).replace("{value2}",u?f[1]:f);if(ta(l))return u?l(r[0],r[1]):l(r);if(u)return r[0]===s[0]?n[0]+" "+f[1]:r[1]===s[1]?n[1]+" "+f[0]:f[0]+" - "+f[1];return f;function h(d){return d===s[0]?"min":d===s[1]?"max":(+d).toFixed(Math.min(o,20))}},t.prototype.resetExtent=function(){var r=this.option,i=Cf([r.min,r.max]);this._dataExtent=i},t.prototype.getDataDimensionIndex=function(r){var i=this.option.dimension;if(i!=null)return r.getDimensionIndex(i);for(var n=r.dimensions,a=n.length-1;a>=0;a--){var o=n[a],s=r.getDimensionInfo(o);if(!s.isCalculationCoord)return s.storeDimIndex}},t.prototype.getExtent=function(){return this._dataExtent.slice()},t.prototype.completeVisualOption=function(){var r=this.ecModel,i=this.option,n={inRange:i.inRange,outOfRange:i.outOfRange},a=i.target||(i.target={}),o=i.controller||(i.controller={});dt(a,n),dt(o,n);var s=this.isCategory();l.call(this,a),l.call(this,o),u.call(this,a,"inRange","outOfRange"),f.call(this,o);function l(h){Lf(i.color)&&!h.inRange&&(h.inRange={color:i.color.slice().reverse()}),h.inRange=h.inRange||{color:r.get("gradientColor")}}function u(h,d,c){var v=h[d],p=h[c];v&&!p&&(p=h[c]={},fo(v,function(_,m){if(!!je.isValidType(m)){var x=Ws.get(m,"inactive",s);x!=null&&(p[m]=x,m==="color"&&!p.hasOwnProperty("opacity")&&!p.hasOwnProperty("colorAlpha")&&(p.opacity=[0,0]))}}))}function f(h){var d=(h.inRange||{}).symbol||(h.outOfRange||{}).symbol,c=(h.inRange||{}).symbolSize||(h.outOfRange||{}).symbolSize,v=this.get("inactiveColor"),p=this.getItemSymbol(),_=p||"roundRect";fo(this.stateList,function(m){var x=this.itemSize,g=h[m];g||(g=h[m]={color:s?v:[v]}),g.symbol==null&&(g.symbol=d&&ct(d)||(s?_:[_])),g.symbolSize==null&&(g.symbolSize=c&&ct(c)||(s?x[0]:[x[0],x[0]])),g.symbol=uo(g.symbol,function(S){return S==="none"?_:S});var y=g.symbolSize;if(y!=null){var E=-1/0;Mf(y,function(S){S>E&&(E=S)}),g.symbolSize=uo(y,function(S){return Rf(S,[0,E],[0,x[0]],!0)})}},this)}},t.prototype.resetItemSize=function(){this.itemSize=[parseFloat(this.get("itemWidth")),parseFloat(this.get("itemHeight"))]},t.prototype.isCategory=function(){return!!this.option.categories},t.prototype.setSelected=function(r){},t.prototype.getSelected=function(){return null},t.prototype.getValueState=function(r){return null},t.prototype.getVisualMeta=function(r){return null},t.type="visualMap",t.dependencies=["series"],t.defaultOption={show:!0,z:4,seriesIndex:"all",min:0,max:200,left:0,right:null,top:null,bottom:0,itemWidth:null,itemHeight:null,inverse:!1,orient:"vertical",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",contentColor:"#5793f3",inactiveColor:"#aaa",borderWidth:0,padding:5,textGap:10,precision:0,textStyle:{color:"#333"}},t}(Ma),Xi=Nf,ho=[20,140],Pf=function(e){Mr.exports.__extends(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r}return t.prototype.optionUpdated=function(r,i){e.prototype.optionUpdated.apply(this,arguments),this.resetExtent(),this.resetVisual(function(n){n.mappingMethod="linear",n.dataExtent=this.getExtent()}),this._resetRange()},t.prototype.resetItemSize=function(){e.prototype.resetItemSize.apply(this,arguments);var r=this.itemSize;(r[0]==null||isNaN(r[0]))&&(r[0]=ho[0]),(r[1]==null||isNaN(r[1]))&&(r[1]=ho[1])},t.prototype._resetRange=function(){var r=this.getExtent(),i=this.option.range;!i||i.auto?(r.auto=1,this.option.range=r):Xe(i)&&(i[0]>i[1]&&i.reverse(),i[0]=Math.max(i[0],r[0]),i[1]=Math.min(i[1],r[1]))},t.prototype.completeVisualOption=function(){e.prototype.completeVisualOption.apply(this,arguments),ne(this.stateList,function(r){var i=this.option.controller[r].symbolSize;i&&i[0]!==i[1]&&(i[0]=i[1]/3)},this)},t.prototype.setSelected=function(r){this.option.range=r.slice(),this._resetRange()},t.prototype.getSelected=function(){var r=this.getExtent(),i=Ns((this.get("range")||[]).slice());return i[0]>r[1]&&(i[0]=r[1]),i[1]>r[1]&&(i[1]=r[1]),i[0]<r[0]&&(i[0]=r[0]),i[1]<r[0]&&(i[1]=r[0]),i},t.prototype.getValueState=function(r){var i=this.option.range,n=this.getExtent();return(i[0]<=n[0]||i[0]<=r)&&(i[1]>=n[1]||r<=i[1])?"inRange":"outOfRange"},t.prototype.findTargetDataIndices=function(r){var i=[];return this.eachTargetSeries(function(n){var a=[],o=n.getData();o.each(this.getDataDimensionIndex(o),function(s,l){r[0]<=s&&s<=r[1]&&a.push(l)},this),i.push({seriesId:n.id,dataIndex:a})},this),i},t.prototype.getVisualMeta=function(r){var i=co(this,"outOfRange",this.getExtent()),n=co(this,"inRange",this.option.range.slice()),a=[];function o(c,v){a.push({value:c,color:r(c,v)})}for(var s=0,l=0,u=n.length,f=i.length;l<f&&(!n.length||i[l]<=n[0]);l++)i[l]<n[s]&&o(i[l],"outOfRange");for(var h=1;s<u;s++,h=0)h&&a.length&&o(n[s],"outOfRange"),o(n[s],"inRange");for(var h=1;l<f;l++)(!n.length||n[n.length-1]<i[l])&&(h&&(a.length&&o(a[a.length-1].value,"outOfRange"),h=0),o(i[l],"outOfRange"));var d=a.length;return{stops:a,outerColors:[d?a[0].color:"transparent",d?a[d-1].color:"transparent"]}},t.type="visualMap.continuous",t.defaultOption=Ps(Xi.defaultOption,{align:"auto",calculable:!1,hoverLink:!0,realtime:!0,handleIcon:"path://M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z",handleSize:"120%",handleStyle:{borderColor:"#fff",borderWidth:1},indicatorIcon:"circle",indicatorSize:"50%",indicatorStyle:{borderColor:"#fff",borderWidth:2,shadowBlur:2,shadowOffsetX:1,shadowOffsetY:1,shadowColor:"rgba(0,0,0,0.2)"}}),t}(Xi);function co(e,t,r){if(r[0]===r[1])return r.slice();for(var i=200,n=(r[1]-r[0])/i,a=r[0],o=[],s=0;s<=i&&a<r[1];s++)o.push(a),a+=n;return o.push(r[1]),o}var Df=Pf,If=function(e){Mr.exports.__extends(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r.autoPositionValues={left:1,right:1,top:1,bottom:1},r}return t.prototype.init=function(r,i){this.ecModel=r,this.api=i},t.prototype.render=function(r,i,n,a){if(this.visualMapModel=r,r.get("show")===!1){this.group.removeAll();return}this.doRender(r,i,n,a)},t.prototype.renderBackground=function(r){var i=this.visualMapModel,n=hu(i.get("padding")||0),a=r.getBoundingRect();r.add(new rn({z2:-1,silent:!0,shape:{x:a.x-n[3],y:a.y-n[0],width:a.width+n[3]+n[1],height:a.height+n[0]+n[2]},style:{fill:i.get("backgroundColor"),stroke:i.get("borderColor"),lineWidth:i.get("borderWidth")}}))},t.prototype.getControllerVisual=function(r,i,n){n=n||{};var a=n.forceState,o=this.visualMapModel,s={};if(i==="color"){var l=o.get("contentColor");s.color=l}function u(c){return s[c]}function f(c,v){s[c]=v}var h=o.controllerVisuals[a||o.getValueState(r)],d=je.prepareVisualTypes(h);return ne(d,function(c){var v=h[c];n.convertOpacityToAlpha&&c==="opacity"&&(c="colorAlpha",v=h.__alphaForOpacity),je.dependsOn(c,i)&&v&&v.applyVisual(r,u,f)}),s[i]},t.prototype.positionGroup=function(r){var i=this.visualMapModel,n=this.api;cu(r,i.getBoxLayoutParams(),{width:n.getWidth(),height:n.getHeight()})},t.prototype.doRender=function(r,i,n,a){},t.type="visualMap",t}(Ds),Xs=If,vo=[["left","right","width"],["top","bottom","height"]];function qs(e,t,r){var i=e.option,n=i.align;if(n!=null&&n!=="auto")return n;for(var a={width:t.getWidth(),height:t.getHeight()},o=i.orient==="horizontal"?1:0,s=vo[o],l=[0,null,10],u={},f=0;f<3;f++)u[vo[1-o][f]]=l[f],u[s[f]]=f===2?r[0]:i[s[f]];var h=[["x","width",3],["y","height",0]][o],d=Is(u,a,i.padding);return s[(d.margin[h[2]]||0)+d[h[0]]+d[h[1]]*.5<a[h[1]]*.5?0:1]}function Ni(e,t){return ne(e||[],function(r){r.dataIndex!=null&&(r.dataIndexInside=r.dataIndex,r.dataIndex=null),r.highlightKey="visualMap"+(t?t.componentIndex:"")}),e}var gt=nr,Of=ne,po=Math.min,Tn=Math.max,Ff=12,Bf=6,Uf=function(e){Mr.exports.__extends(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r._shapes={},r._dataInterval=[],r._handleEnds=[],r._hoverLinkDataIndices=[],r}return t.prototype.doRender=function(r,i,n,a){this._api=n,(!a||a.type!=="selectDataRange"||a.from!==this.uid)&&this._buildView()},t.prototype._buildView=function(){this.group.removeAll();var r=this.visualMapModel,i=this.group;this._orient=r.get("orient"),this._useHandle=r.get("calculable"),this._resetInterval(),this._renderBar(i);var n=r.get("text");this._renderEndsText(i,n,0),this._renderEndsText(i,n,1),this._updateView(!0),this.renderBackground(i),this._updateView(),this._enableHoverLinkToSeries(),this._enableHoverLinkFromSeries(),this.positionGroup(i)},t.prototype._renderEndsText=function(r,i,n){if(!!i){var a=i[1-n];a=a!=null?a+"":"";var o=this.visualMapModel,s=o.get("textGap"),l=o.itemSize,u=this._shapes.mainGroup,f=this._applyTransform([l[0]/2,n===0?-s:l[1]+s],u),h=this._applyTransform(n===0?"bottom":"top",u),d=this._orient,c=this.visualMapModel.textStyleModel;this.group.add(new Ft({style:tr(c,{x:f[0],y:f[1],verticalAlign:d==="horizontal"?"middle":h,align:d==="horizontal"?h:"center",text:a})}))}},t.prototype._renderBar=function(r){var i=this.visualMapModel,n=this._shapes,a=i.itemSize,o=this._orient,s=this._useHandle,l=qs(i,this.api,a),u=n.mainGroup=this._createBarGroup(l),f=new ki;u.add(f),f.add(n.outOfRange=_o()),f.add(n.inRange=_o(null,s?go(this._orient):null,Tt(this._dragHandle,this,"all",!1),Tt(this._dragHandle,this,"all",!0))),f.setClipPath(new rn({shape:{x:0,y:0,width:a[0],height:a[1],r:3}}));var h=i.textStyleModel.getTextRect("\u56FD"),d=Tn(h.width,h.height);s&&(n.handleThumbs=[],n.handleLabels=[],n.handleLabelPoints=[],this._createHandle(i,u,0,a,d,o),this._createHandle(i,u,1,a,d,o)),this._createIndicator(i,u,a,d,o),r.add(u)},t.prototype._createHandle=function(r,i,n,a,o,s){var l=Tt(this._dragHandle,this,n,!1),u=Tt(this._dragHandle,this,n,!0),f=Za(r.get("handleSize"),a[0]),h=ia(r.get("handleIcon"),-f/2,-f/2,f,f,null,!0),d=go(this._orient);h.attr({cursor:d,draggable:!0,drift:l,ondragend:u,onmousemove:function(m){ra(m.event)}}),h.x=a[0]/2,h.useStyle(r.getModel("handleStyle").getItemStyle()),h.setStyle({strokeNoScale:!0,strokeFirst:!0}),h.style.lineWidth*=2,h.ensureState("emphasis").style=r.getModel(["emphasis","handleStyle"]).getItemStyle(),vu(h,!0),i.add(h);var c=this.visualMapModel.textStyleModel,v=new Ft({cursor:d,draggable:!0,drift:l,onmousemove:function(m){ra(m.event)},ondragend:u,style:tr(c,{x:0,y:0,text:""})});v.ensureState("blur").style={opacity:.1},v.stateTransition={duration:200},this.group.add(v);var p=[f,0],_=this._shapes;_.handleThumbs[n]=h,_.handleLabelPoints[n]=p,_.handleLabels[n]=v},t.prototype._createIndicator=function(r,i,n,a,o){var s=Za(r.get("indicatorSize"),n[0]),l=ia(r.get("indicatorIcon"),-s/2,-s/2,s,s,null,!0);l.attr({cursor:"move",invisible:!0,silent:!0,x:n[0]/2});var u=r.getModel("indicatorStyle").getItemStyle();if(l instanceof Os){var f=l.style;l.useStyle(pu({image:f.image,x:f.x,y:f.y,width:f.width,height:f.height},u))}else l.useStyle(u);i.add(l);var h=this.visualMapModel.textStyleModel,d=new Ft({silent:!0,invisible:!0,style:tr(h,{x:0,y:0,text:""})});this.group.add(d);var c=[(o==="horizontal"?a/2:Bf)+n[0]/2,0],v=this._shapes;v.indicator=l,v.indicatorLabel=d,v.indicatorLabelPoint=c,this._firstShowIndicator=!0},t.prototype._dragHandle=function(r,i,n,a){if(!!this._useHandle){if(this._dragging=!i,!i){var o=this._applyTransform([n,a],this._shapes.mainGroup,!0);this._updateInterval(r,o[1]),this._hideIndicator(),this._updateView()}i===!this.visualMapModel.get("realtime")&&this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:this._dataInterval.slice()}),i?!this._hovering&&this._clearHoverLinkToSeries():mo(this.visualMapModel)&&this._doHoverLinkToSeries(this._handleEnds[r],!1)}},t.prototype._resetInterval=function(){var r=this.visualMapModel,i=this._dataInterval=r.getSelected(),n=r.getExtent(),a=[0,r.itemSize[1]];this._handleEnds=[gt(i[0],n,a,!0),gt(i[1],n,a,!0)]},t.prototype._updateInterval=function(r,i){i=i||0;var n=this.visualMapModel,a=this._handleEnds,o=[0,n.itemSize[1]];_u(i,a,o,r,0);var s=n.getExtent();this._dataInterval=[gt(a[0],o,s,!0),gt(a[1],o,s,!0)]},t.prototype._updateView=function(r){var i=this.visualMapModel,n=i.getExtent(),a=this._shapes,o=[0,i.itemSize[1]],s=r?o:this._handleEnds,l=this._createBarVisual(this._dataInterval,n,s,"inRange"),u=this._createBarVisual(n,n,o,"outOfRange");a.inRange.setStyle({fill:l.barColor}).setShape("points",l.barPoints),a.outOfRange.setStyle({fill:u.barColor}).setShape("points",u.barPoints),this._updateHandle(s,l)},t.prototype._createBarVisual=function(r,i,n,a){var o={forceState:a,convertOpacityToAlpha:!0},s=this._makeColorGradient(r,o),l=[this.getControllerVisual(r[0],"symbolSize",o),this.getControllerVisual(r[1],"symbolSize",o)],u=this._createBarPoints(n,l);return{barColor:new mu(0,0,0,1,s),barPoints:u,handlesColor:[s[0].color,s[s.length-1].color]}},t.prototype._makeColorGradient=function(r,i){var n=100,a=[],o=(r[1]-r[0])/n;a.push({color:this.getControllerVisual(r[0],"color",i),offset:0});for(var s=1;s<n;s++){var l=r[0]+o*s;if(l>r[1])break;a.push({color:this.getControllerVisual(l,"color",i),offset:s/n})}return a.push({color:this.getControllerVisual(r[1],"color",i),offset:1}),a},t.prototype._createBarPoints=function(r,i){var n=this.visualMapModel.itemSize;return[[n[0]-i[0],r[0]],[n[0],r[0]],[n[0],r[1]],[n[0]-i[1],r[1]]]},t.prototype._createBarGroup=function(r){var i=this._orient,n=this.visualMapModel.get("inverse");return new ki(i==="horizontal"&&!n?{scaleX:r==="bottom"?1:-1,rotation:Math.PI/2}:i==="horizontal"&&n?{scaleX:r==="bottom"?-1:1,rotation:-Math.PI/2}:i==="vertical"&&!n?{scaleX:r==="left"?1:-1,scaleY:-1}:{scaleX:r==="left"?1:-1})},t.prototype._updateHandle=function(r,i){if(!!this._useHandle){var n=this._shapes,a=this.visualMapModel,o=n.handleThumbs,s=n.handleLabels,l=a.itemSize,u=a.getExtent();Of([0,1],function(f){var h=o[f];h.setStyle("fill",i.handlesColor[f]),h.y=r[f];var d=gt(r[f],[0,l[1]],u,!0),c=this.getControllerVisual(d,"symbolSize");h.scaleX=h.scaleY=c/l[0],h.x=l[0]-c/2;var v=_n(n.handleLabelPoints[f],mn(h,this.group));s[f].setStyle({x:v[0],y:v[1],text:a.formatValueText(this._dataInterval[f]),verticalAlign:"middle",align:this._orient==="vertical"?this._applyTransform("left",n.mainGroup):"center"})},this)}},t.prototype._showIndicator=function(r,i,n,a){var o=this.visualMapModel,s=o.getExtent(),l=o.itemSize,u=[0,l[1]],f=this._shapes,h=f.indicator;if(!!h){h.attr("invisible",!1);var d={convertOpacityToAlpha:!0},c=this.getControllerVisual(r,"color",d),v=this.getControllerVisual(r,"symbolSize"),p=gt(r,s,u,!0),_=l[0]-v/2,m={x:h.x,y:h.y};h.y=p,h.x=_;var x=_n(f.indicatorLabelPoint,mn(h,this.group)),g=f.indicatorLabel;g.attr("invisible",!1);var y=this._applyTransform("left",f.mainGroup),E=this._orient,S=E==="horizontal";g.setStyle({text:(n||"")+o.formatValueText(i),verticalAlign:S?y:"middle",align:S?"center":y});var b={x:_,y:p,style:{fill:c}},A={style:{x:x[0],y:x[1]}};if(o.ecModel.isAnimationEnabled()&&!this._firstShowIndicator){var M={duration:100,easing:"cubicInOut",additive:!0};h.x=m.x,h.y=m.y,h.animateTo(b,M),g.animateTo(A,M)}else h.attr(b),g.attr(A);this._firstShowIndicator=!1;var O=this._shapes.handleLabels;if(O)for(var L=0;L<O.length;L++)this._api.enterBlur(O[L])}},t.prototype._enableHoverLinkToSeries=function(){var r=this;this._shapes.mainGroup.on("mousemove",function(i){if(r._hovering=!0,!r._dragging){var n=r.visualMapModel.itemSize,a=r._applyTransform([i.offsetX,i.offsetY],r._shapes.mainGroup,!0,!0);a[1]=po(Tn(0,a[1]),n[1]),r._doHoverLinkToSeries(a[1],0<=a[0]&&a[0]<=n[0])}}).on("mouseout",function(){r._hovering=!1,!r._dragging&&r._clearHoverLinkToSeries()})},t.prototype._enableHoverLinkFromSeries=function(){var r=this.api.getZr();this.visualMapModel.option.hoverLink?(r.on("mouseover",this._hoverLinkFromSeriesMouseOver,this),r.on("mouseout",this._hideIndicator,this)):this._clearHoverLinkFromSeries()},t.prototype._doHoverLinkToSeries=function(r,i){var n=this.visualMapModel,a=n.itemSize;if(!!n.option.hoverLink){var o=[0,a[1]],s=n.getExtent();r=po(Tn(o[0],r),o[1]);var l=Hf(n,s,o),u=[r-l,r+l],f=gt(r,o,s,!0),h=[gt(u[0],o,s,!0),gt(u[1],o,s,!0)];u[0]<o[0]&&(h[0]=-1/0),u[1]>o[1]&&(h[1]=1/0),i&&(h[0]===-1/0?this._showIndicator(f,h[1],"< ",l):h[1]===1/0?this._showIndicator(f,h[0],"> ",l):this._showIndicator(f,f,"\u2248 ",l));var d=this._hoverLinkDataIndices,c=[];(i||mo(n))&&(c=this._hoverLinkDataIndices=n.findTargetDataIndices(h));var v=gu(d,c);this._dispatchHighDown("downplay",Ni(v[0],n)),this._dispatchHighDown("highlight",Ni(v[1],n))}},t.prototype._hoverLinkFromSeriesMouseOver=function(r){var i=r.target,n=this.visualMapModel;if(!(!i||xr(i).dataIndex==null)){var a=xr(i),o=this.ecModel.getSeriesByIndex(a.seriesIndex);if(!!n.isTargetSeries(o)){var s=o.getData(a.dataType),l=s.getStore().get(n.getDataDimensionIndex(s),a.dataIndex);isNaN(l)||this._showIndicator(l,l)}}},t.prototype._hideIndicator=function(){var r=this._shapes;r.indicator&&r.indicator.attr("invisible",!0),r.indicatorLabel&&r.indicatorLabel.attr("invisible",!0);var i=this._shapes.handleLabels;if(i)for(var n=0;n<i.length;n++)this._api.leaveBlur(i[n])},t.prototype._clearHoverLinkToSeries=function(){this._hideIndicator();var r=this._hoverLinkDataIndices;this._dispatchHighDown("downplay",Ni(r,this.visualMapModel)),r.length=0},t.prototype._clearHoverLinkFromSeries=function(){this._hideIndicator();var r=this.api.getZr();r.off("mouseover",this._hoverLinkFromSeriesMouseOver),r.off("mouseout",this._hideIndicator)},t.prototype._applyTransform=function(r,i,n,a){var o=mn(i,a?null:this.group);return Xe(r)?_n(r,o,n):yu(r,o,n)},t.prototype._dispatchHighDown=function(r,i){i&&i.length&&this.api.dispatchAction({type:r,batch:i})},t.prototype.dispose=function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()},t.prototype.remove=function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()},t.type="visualMap.continuous",t}(Xs);function _o(e,t,r,i){return new du({shape:{points:e},draggable:!!r,cursor:t,drift:r,onmousemove:function(n){ra(n.event)},ondragend:i})}function Hf(e,t,r){var i=Ff/2,n=e.get("hoverLinkDataSize");return n&&(i=gt(n,t,r,!0)/2),i}function mo(e){var t=e.get("hoverLinkOnHandle");return!!(t==null?e.get("realtime"):t)}function go(e){return e==="vertical"?"ns-resize":"ew-resize"}var zf=Uf,Vf={type:"selectDataRange",event:"dataRangeSelected",update:"update"},Gf=function(e,t){t.eachComponent({mainType:"visualMap",query:e},function(r){r.setSelected(e.selected)})},kf=[{createOnAllSeries:!0,reset:function(e,t){var r=[];return t.eachComponent("visualMap",function(i){var n=e.pipelineContext;!i.isTargetSeries(e)||n&&n.large||r.push(Af(i.stateList,i.targetVisuals,Tt(i.getValueState,i),i.getDataDimensionIndex(e.getData())))}),r}},{createOnAllSeries:!0,reset:function(e,t){var r=e.getData(),i=[];t.eachComponent("visualMap",function(n){if(n.isTargetSeries(e)){var a=n.getVisualMeta(Tt(Wf,null,e,n))||{stops:[],outerColors:[]},o=n.getDataDimensionIndex(r);o>=0&&(a.dimension=o,i.push(a))}}),e.getData().setVisual("visualMeta",i)}}];function Wf(e,t,r,i){for(var n=t.targetVisuals[i],a=je.prepareVisualTypes(n),o={color:xu(e.getData(),"color")},s=0,l=a.length;s<l;s++){var u=a[s],f=n[u==="opacity"?"__alphaForOpacity":u];f&&f.applyVisual(r,h,d)}return o.color;function h(c){return o[c]}function d(c,v){o[c]=v}}var yo=ne;function Xf(e){var t=e&&e.visualMap;Xe(t)||(t=t?[t]:[]),yo(t,function(r){if(!!r){lr(r,"splitList")&&!lr(r,"pieces")&&(r.pieces=r.splitList,delete r.splitList);var i=r.pieces;i&&Xe(i)&&yo(i,function(n){Bt(n)&&(lr(n,"start")&&!lr(n,"min")&&(n.min=n.start),lr(n,"end")&&!lr(n,"max")&&(n.max=n.end))})}})}function lr(e,t){return e&&e.hasOwnProperty&&e.hasOwnProperty(t)}var xo=!1;function js(e){xo||(xo=!0,e.registerSubTypeDefaulter("visualMap",function(t){return!t.categories&&(!(t.pieces?t.pieces.length>0:t.splitNumber>0)||t.calculable)?"continuous":"piecewise"}),e.registerAction(Vf,Gf),ne(kf,function(t){e.registerVisual(e.PRIORITY.VISUAL.COMPONENT,t)}),e.registerPreprocessor(Xf))}function qf(e){e.registerComponentModel(Df),e.registerComponentView(zf),js(e)}var jf=function(e){Mr.exports.__extends(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r._pieceList=[],r}return t.prototype.optionUpdated=function(r,i){e.prototype.optionUpdated.apply(this,arguments),this.resetExtent();var n=this._mode=this._determineMode();this._pieceList=[],Yf[this._mode].call(this,this._pieceList),this._resetSelected(r,i);var a=this.option.categories;this.resetVisual(function(o,s){n==="categories"?(o.mappingMethod="category",o.categories=ct(a)):(o.dataExtent=this.getExtent(),o.mappingMethod="piecewise",o.pieceList=jr(this._pieceList,function(l){return l=ct(l),s!=="inRange"&&(l.visual=null),l}))})},t.prototype.completeVisualOption=function(){var r=this.option,i={},n=je.listVisualTypes(),a=this.isCategory();ne(r.pieces,function(s){ne(n,function(l){s.hasOwnProperty(l)&&(i[l]=1)})}),ne(i,function(s,l){var u=!1;ne(this.stateList,function(f){u=u||o(r,f,l)||o(r.target,f,l)},this),!u&&ne(this.stateList,function(f){(r[f]||(r[f]={}))[l]=Ws.get(l,f==="inRange"?"active":"inactive",a)})},this);function o(s,l,u){return s&&s[l]&&s[l].hasOwnProperty(u)}e.prototype.completeVisualOption.apply(this,arguments)},t.prototype._resetSelected=function(r,i){var n=this.option,a=this._pieceList,o=(i?n:r).selected||{};if(n.selected=o,ne(a,function(l,u){var f=this.getSelectedMapKey(l);o.hasOwnProperty(f)||(o[f]=!0)},this),n.selectedMode==="single"){var s=!1;ne(a,function(l,u){var f=this.getSelectedMapKey(l);o[f]&&(s?o[f]=!1:s=!0)},this)}},t.prototype.getItemSymbol=function(){return this.get("itemSymbol")},t.prototype.getSelectedMapKey=function(r){return this._mode==="categories"?r.value+"":r.index+""},t.prototype.getPieceList=function(){return this._pieceList},t.prototype._determineMode=function(){var r=this.option;return r.pieces&&r.pieces.length>0?"pieces":this.option.categories?"categories":"splitNumber"},t.prototype.setSelected=function(r){this.option.selected=ct(r)},t.prototype.getValueState=function(r){var i=je.findPieceIndex(r,this._pieceList);return i!=null&&this.option.selected[this.getSelectedMapKey(this._pieceList[i])]?"inRange":"outOfRange"},t.prototype.findTargetDataIndices=function(r){var i=[],n=this._pieceList;return this.eachTargetSeries(function(a){var o=[],s=a.getData();s.each(this.getDataDimensionIndex(s),function(l,u){var f=je.findPieceIndex(l,n);f===r&&o.push(u)},this),i.push({seriesId:a.id,dataIndex:o})},this),i},t.prototype.getRepresentValue=function(r){var i;if(this.isCategory())i=r.value;else if(r.value!=null)i=r.value;else{var n=r.interval||[];i=n[0]===-1/0&&n[1]===1/0?0:(n[0]+n[1])/2}return i},t.prototype.getVisualMeta=function(r){if(this.isCategory())return;var i=[],n=["",""],a=this;function o(f,h){var d=a.getRepresentValue({interval:f});h||(h=a.getValueState(d));var c=r(d,h);f[0]===-1/0?n[0]=c:f[1]===1/0?n[1]=c:i.push({value:f[0],color:c},{value:f[1],color:c})}var s=this._pieceList.slice();if(!s.length)s.push({interval:[-1/0,1/0]});else{var l=s[0].interval[0];l!==-1/0&&s.unshift({interval:[-1/0,l]}),l=s[s.length-1].interval[1],l!==1/0&&s.push({interval:[l,1/0]})}var u=-1/0;return ne(s,function(f){var h=f.interval;h&&(h[0]>u&&o([u,h[0]],"outOfRange"),o(h.slice()),u=h[1])},this),{stops:i,outerColors:n}},t.type="visualMap.piecewise",t.defaultOption=Ps(Xi.defaultOption,{selected:null,minOpen:!1,maxOpen:!1,align:"auto",itemWidth:20,itemHeight:14,itemSymbol:"roundRect",pieces:null,categories:null,splitNumber:5,selectedMode:"multiple",itemGap:10,hoverLink:!0}),t}(Xi),Yf={splitNumber:function(e){var t=this.option,r=Math.min(t.precision,20),i=this.getExtent(),n=t.splitNumber;n=Math.max(parseInt(n,10),1),t.splitNumber=n;for(var a=(i[1]-i[0])/n;+a.toFixed(r)!==a&&r<5;)r++;t.precision=r,a=+a.toFixed(r),t.minOpen&&e.push({interval:[-1/0,i[0]],close:[0,0]});for(var o=0,s=i[0];o<n;s+=a,o++){var l=o===n-1?i[1]:s+a;e.push({interval:[s,l],close:[1,1]})}t.maxOpen&&e.push({interval:[i[1],1/0],close:[0,0]}),Ka(e),ne(e,function(u,f){u.index=f,u.text=this.formatValueText(u.interval)},this)},categories:function(e){var t=this.option;ne(t.categories,function(r){e.push({text:this.formatValueText(r,!0),value:r})},this),To(t,e)},pieces:function(e){var t=this.option;ne(t.pieces,function(r,i){Bt(r)||(r={value:r});var n={text:"",index:i};if(r.label!=null&&(n.text=r.label),r.hasOwnProperty("value")){var a=n.value=r.value;n.interval=[a,a],n.close=[1,1]}else{for(var o=n.interval=[],s=n.close=[0,0],l=[1,0,1],u=[-1/0,1/0],f=[],h=0;h<2;h++){for(var d=[["gte","gt","min"],["lte","lt","max"]][h],c=0;c<3&&o[h]==null;c++)o[h]=r[d[c]],s[h]=l[c],f[h]=c===2;o[h]==null&&(o[h]=u[h])}f[0]&&o[1]===1/0&&(s[0]=0),f[1]&&o[0]===-1/0&&(s[1]=0),o[0]===o[1]&&s[0]&&s[1]&&(n.value=o[0])}n.visual=je.retrieveVisuals(r),e.push(n)},this),To(t,e),Ka(e),ne(e,function(r){var i=r.close,n=[["<","\u2264"][i[1]],[">","\u2265"][i[0]]];r.text=r.text||this.formatValueText(r.value!=null?r.value:r.interval,!1,n)},this)}};function To(e,t){var r=e.inverse;(e.orient==="vertical"?!r:r)&&t.reverse()}var Zf=jf,Kf=function(e){Mr.exports.__extends(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r}return t.prototype.doRender=function(){var r=this.group;r.removeAll();var i=this.visualMapModel,n=i.get("textGap"),a=i.textStyleModel,o=a.getFont(),s=a.getTextColor(),l=this._getItemAlign(),u=i.itemSize,f=this._getViewData(),h=f.endsText,d=Tu(i.get("showLabel",!0),!h);h&&this._renderEndsText(r,h[0],u,d,l),ne(f.viewPieceList,function(c){var v=c.piece,p=new ki;p.onclick=Tt(this._onItemClick,this,v),this._enableHoverLink(p,c.indexInModelPieceList);var _=i.getRepresentValue(v);if(this._createItemSymbol(p,_,[0,0,u[0],u[1]]),d){var m=this.visualMapModel.getValueState(_);p.add(new Ft({style:{x:l==="right"?-n:u[0]+n,y:u[1]/2,text:v.text,verticalAlign:"middle",align:l,font:o,fill:s,opacity:m==="outOfRange"?.5:1}}))}r.add(p)},this),h&&this._renderEndsText(r,h[1],u,d,l),Eu(i.get("orient"),r,i.get("itemGap")),this.renderBackground(r),this.positionGroup(r)},t.prototype._enableHoverLink=function(r,i){var n=this;r.on("mouseover",function(){return a("highlight")}).on("mouseout",function(){return a("downplay")});var a=function(o){var s=n.visualMapModel;s.option.hoverLink&&n.api.dispatchAction({type:o,batch:Ni(s.findTargetDataIndices(i),s)})}},t.prototype._getItemAlign=function(){var r=this.visualMapModel,i=r.option;if(i.orient==="vertical")return qs(r,this.api,r.itemSize);var n=i.align;return(!n||n==="auto")&&(n="left"),n},t.prototype._renderEndsText=function(r,i,n,a,o){if(!!i){var s=new ki,l=this.visualMapModel.textStyleModel;s.add(new Ft({style:tr(l,{x:a?o==="right"?n[0]:0:n[0]/2,y:n[1]/2,verticalAlign:"middle",align:a?o:"center",text:i})})),r.add(s)}},t.prototype._getViewData=function(){var r=this.visualMapModel,i=jr(r.getPieceList(),function(s,l){return{piece:s,indexInModelPieceList:l}}),n=r.get("text"),a=r.get("orient"),o=r.get("inverse");return(a==="horizontal"?o:!o)?i.reverse():n&&(n=n.slice().reverse()),{viewPieceList:i,endsText:n}},t.prototype._createItemSymbol=function(r,i,n){r.add(ia(this.getControllerVisual(i,"symbol"),n[0],n[1],n[2],n[3],this.getControllerVisual(i,"color")))},t.prototype._onItemClick=function(r){var i=this.visualMapModel,n=i.option,a=n.selectedMode;if(!!a){var o=ct(n.selected),s=i.getSelectedMapKey(r);a==="single"||a===!0?(o[s]=!0,ne(o,function(l,u){o[u]=u===s})):o[s]=!o[s],this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:o})}},t.type="visualMap.piecewise",t}(Xs),$f=Kf;function Qf(e){e.registerComponentModel(Zf),e.registerComponentView($f),js(e)}function Jf(e){Yr(qf),Yr(Qf)}function eh(e){if(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r].slice());return t}}function th(e,t){var r=e.label,i=t&&t.getTextGuideLine();return{dataIndex:e.dataIndex,dataType:e.dataType,seriesIndex:e.seriesModel.seriesIndex,text:e.label.style.text,rect:e.hostRect,labelRect:e.rect,align:r.style.align,verticalAlign:r.style.verticalAlign,labelLinePoints:eh(i&&i.shape.points)}}var Eo=["align","verticalAlign","width","height","fontSize"],Qe=new Su,En=La(),rh=La();function ui(e,t,r){for(var i=0;i<r.length;i++){var n=r[i];t[n]!=null&&(e[n]=t[n])}}var fi=["x","y","rotation"],ih=function(){function e(){this._labelList=[],this._chartViewList=[]}return e.prototype.clearLabels=function(){this._labelList=[],this._chartViewList=[]},e.prototype._addLabel=function(t,r,i,n,a){var o=n.style,s=n.__hostTarget,l=s.textConfig||{},u=n.getComputedTransform(),f=n.getBoundingRect().plain();$a.applyTransform(f,f,u),u?Qe.setLocalTransform(u):(Qe.x=Qe.y=Qe.rotation=Qe.originX=Qe.originY=0,Qe.scaleX=Qe.scaleY=1);var h=n.__hostTarget,d;if(h){d=h.getBoundingRect().plain();var c=h.getComputedTransform();$a.applyTransform(d,d,c)}var v=d&&h.getTextGuideLine();this._labelList.push({label:n,labelLine:v,seriesModel:i,dataIndex:t,dataType:r,layoutOption:a,computedLayoutOption:null,rect:f,hostRect:d,priority:d?d.width*d.height:0,defaultAttr:{ignore:n.ignore,labelGuideIgnore:v&&v.ignore,x:Qe.x,y:Qe.y,scaleX:Qe.scaleX,scaleY:Qe.scaleY,rotation:Qe.rotation,style:{x:o.x,y:o.y,align:o.align,verticalAlign:o.verticalAlign,width:o.width,height:o.height,fontSize:o.fontSize},cursor:n.cursor,attachedPos:l.position,attachedRot:l.rotation}})},e.prototype.addLabelsOfSeries=function(t){var r=this;this._chartViewList.push(t);var i=t.__model,n=i.get("labelLayout");!(ta(n)||Cs(n).length)||t.group.traverse(function(a){if(a.ignore)return!0;var o=a.getTextContent(),s=xr(a);o&&!o.disableLabelLayout&&r._addLabel(s.dataIndex,s.dataType,i,o,n)})},e.prototype.updateLayoutConfig=function(t){var r=t.getWidth(),i=t.getHeight();function n(g,y){return function(){ro(g,y)}}for(var a=0;a<this._labelList.length;a++){var o=this._labelList[a],s=o.label,l=s.__hostTarget,u=o.defaultAttr,f=void 0;ta(o.layoutOption)?f=o.layoutOption(th(o,l)):f=o.layoutOption,f=f||{},o.computedLayoutOption=f;var h=Math.PI/180;l&&l.setTextConfig({local:!1,position:f.x!=null||f.y!=null?null:u.attachedPos,rotation:f.rotate!=null?f.rotate*h:u.attachedRot,offset:[f.dx||0,f.dy||0]});var d=!1;if(f.x!=null?(s.x=Qa(f.x,r),s.setStyle("x",0),d=!0):(s.x=u.x,s.setStyle("x",u.style.x)),f.y!=null?(s.y=Qa(f.y,i),s.setStyle("y",0),d=!0):(s.y=u.y,s.setStyle("y",u.style.y)),f.labelLinePoints){var c=l.getTextGuideLine();c&&(c.setShape({points:f.labelLinePoints}),d=!1)}var v=En(s);v.needsUpdateLabelLine=d,s.rotation=f.rotate!=null?f.rotate*h:u.rotation,s.scaleX=u.scaleX,s.scaleY=u.scaleY;for(var p=0;p<Eo.length;p++){var _=Eo[p];s.setStyle(_,f[_]!=null?f[_]:u.style[_])}if(f.draggable){if(s.draggable=!0,s.cursor="move",l){var m=o.seriesModel;if(o.dataIndex!=null){var x=o.seriesModel.getData(o.dataType);m=x.getItemModel(o.dataIndex)}s.on("drag",n(l,m.getModel("labelLine")))}}else s.off("drag"),s.cursor=u.cursor}},e.prototype.layout=function(t){var r=t.getWidth(),i=t.getHeight(),n=Au(this._labelList),a=gn(n,function(l){return l.layoutOption.moveOverlap==="shiftX"}),o=gn(n,function(l){return l.layoutOption.moveOverlap==="shiftY"});wu(a,0,r),bu(o,0,i);var s=gn(n,function(l){return l.layoutOption.hideOverlap});Mu(s)},e.prototype.processLabelsOverall=function(){var t=this;ne(this._chartViewList,function(r){var i=r.__model,n=r.ignoreLabelLineUpdate,a=i.isAnimationEnabled();r.group.traverse(function(o){if(o.ignore&&!o.forceLabelAnimation)return!0;var s=!n,l=o.getTextContent();!s&&l&&(s=En(l).needsUpdateLabelLine),s&&t._updateLabelLine(o,i),a&&t._animateLabels(o,i)})})},e.prototype._updateLabelLine=function(t,r){var i=t.getTextContent(),n=xr(t),a=n.dataIndex;if(i&&a!=null){var o=r.getData(n.dataType),s=o.getItemModel(a),l={},u=o.getItemVisual(a,"style"),f=o.getVisual("drawType");l.stroke=u[f];var h=s.getModel("labelLine");mf(t,gf(s),l),ro(t,h)}},e.prototype._animateLabels=function(t,r){var i=t.getTextContent(),n=t.getTextGuideLine();if(i&&(t.forceLabelAnimation||!i.ignore&&!i.invisible&&!t.disableLabelAnimation&&!Lu(t))){var a=En(i),o=a.oldLayout,s=xr(t),l=s.dataIndex,u={x:i.x,y:i.y,rotation:i.rotation},f=r.getData(s.dataType);if(o){i.attr(o);var d=t.prevStates;d&&(na(d,"select")>=0&&i.attr(a.oldLayoutSelect),na(d,"emphasis")>=0&&i.attr(a.oldLayoutEmphasis)),eo(i,u,r,l)}else if(i.attr(u),!Cu(i).valueAnimation){var h=ea(i.style.opacity,1);i.style.opacity=0,Ja(i,{style:{opacity:h}},r,l)}if(a.oldLayout=u,i.states.select){var c=a.oldLayoutSelect={};ui(c,u,fi),ui(c,i.states.select,fi)}if(i.states.emphasis){var v=a.oldLayoutEmphasis={};ui(v,u,fi),ui(v,i.states.emphasis,fi)}Ru(i,l,f,r,r)}if(n&&!n.ignore&&!n.invisible){var a=rh(n),o=a.oldLayout,p={points:n.shape.points};o?(n.attr({shape:o}),eo(n,{shape:p},r)):(n.setShape(p),n.style.strokePercent=0,Ja(n,{style:{strokePercent:1}},r)),a.oldLayout=p}},e}(),nh=ih,Sn=La();function ah(e){e.registerUpdateLifecycle("series:beforeupdate",function(t,r,i){var n=Sn(r).labelManager;n||(n=Sn(r).labelManager=new nh),n.clearLabels()}),e.registerUpdateLifecycle("series:layoutlabels",function(t,r,i){var n=Sn(r).labelManager;i.updatedSeries.forEach(function(a){n.addLabelsOfSeries(r.getViewOfSeriesModel(a))}),n.updateLayoutConfig(r),n.layout(r),n.processLabelsOverall()})}Yr([Fs,Bs]);Yr(ah);function So(e,t,r){typeof t=="object"&&(r=t,t=null);var i=this,n;if(!(e instanceof Function)){n=[];for(var a in e)e.hasOwnProperty(a)&&n.push(a)}var o=function(l){if(i.apply(this,arguments),e instanceof Function?Ao(this,e.call(this,l)):oh(this,e,n),this.constructor===o)for(var u=o.__initializers__,f=0;f<u.length;f++)u[f].apply(this,arguments)};o.__super__=i,i.__initializers__?o.__initializers__=i.__initializers__.slice():o.__initializers__=[],t&&o.__initializers__.push(t);var s=function(){};return s.prototype=i.prototype,o.prototype=new s,o.prototype.constructor=o,Ao(o.prototype,r),o.extend=i.extend,o.derive=i.extend,o}function Ao(e,t){if(!!t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}function oh(e,t,r){for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}}var sh={extend:So,derive:So};function lh(e,t){this.action=e,this.context=t}var uh={trigger:function(e){if(!!this.hasOwnProperty("__handlers__")&&!!this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],r=t.length,i=-1,n=arguments;switch(n.length){case 1:for(;++i<r;)t[i].action.call(t[i].context);return;case 2:for(;++i<r;)t[i].action.call(t[i].context,n[1]);return;case 3:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2]);return;case 4:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3]);return;case 5:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3],n[4]);return;default:for(;++i<r;)t[i].action.apply(t[i].context,Array.prototype.slice.call(n,1));return}}},on:function(e,t,r){if(!(!e||!t)){var i=this.__handlers__||(this.__handlers__={});if(!i[e])i[e]=[];else if(this.has(e,t))return;var n=new lh(t,r||this);return i[e].push(n),this}},once:function(e,t,r){if(!e||!t)return;var i=this;function n(){i.off(e,n),t.apply(this,arguments)}return this.on(e,n,r)},before:function(e,t,r){if(!(!e||!t))return e="before"+e,this.on(e,t,r)},after:function(e,t,r){if(!(!e||!t))return e="after"+e,this.on(e,t,r)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var r=this.__handlers__||(this.__handlers__={});if(!t){r[e]=[];return}if(r[e]){for(var i=r[e],n=[],a=0;a<i.length;a++)t&&i[a].action!==t&&n.push(i[a]);r[e]=n}return this},has:function(e,t){var r=this.__handlers__;if(!r||!r[e])return!1;for(var i=r[e],n=0;n<i.length;n++)if(i[n].action===t)return!0}},Ra=uh,fh=0,hh=Array.prototype,ch=hh.forEach,Vr={genGUID:function(){return++fh},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var r=e.split("/"),i=t.split("/"),n=r[0];n==="."||n==="..";)n===".."&&i.pop(),r.shift(),n=r[0];return i.join("/")+"/"+r.join("/")},extend:function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},defaults:function(e,t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e},extendWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}return e},defaultsWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]==null&&(e[n]=t[n])}return e},each:function(e,t,r){if(!!(e&&t))if(e.forEach&&e.forEach===ch)e.forEach(t,r);else if(e.length===+e.length)for(var i=0,n=e.length;i<n;i++)t.call(r,e[i],i,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(r,e[a],a,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(Vr.isObject(e)){if(Vr.isArray(e))return e.slice();if(Vr.isArrayLike(e)){for(var t=new e.constructor(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}else return Vr.extend({},e)}else return e}},De=Vr,nn=function(){this.__uid__=De.genGUID()};nn.__initializers__=[function(e){De.extend(this,e)}];De.extend(nn,sh);De.extend(nn.prototype,Ra);var Ke=nn,wo=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],bo=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function dh(e){for(var t={},r={},i=0;i<wo.length;i++){var n=wo[i];o(n)}for(var i=0;i<bo.length;i++){var a=bo[i];r[a]=e.getParameter(e[a])}this.getExtension=function(s){return s in t||o(s),t[s]},this.getParameter=function(s){return r[s]};function o(s){if(e.getExtension){var l=e.getExtension(s);l||(l=e.getExtension("MOZ_"+s)),l||(l=e.getExtension("WEBKIT_"+s)),t[s]=l}}}var w={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444};function vh(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(r){if(r.lengthComputable){var i=r.loaded/r.total;e.onprogress(i,r.loaded,r.total)}else e.onprogress(null)}),t.onload=function(r){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}var ph={get:vh},An,qe={};qe.supportWebGL=function(){if(An==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{An=!1}return An};qe.Int8Array=typeof Int8Array=="undefined"?Array:Int8Array;qe.Uint8Array=typeof Uint8Array=="undefined"?Array:Uint8Array;qe.Uint16Array=typeof Uint16Array=="undefined"?Array:Uint16Array;qe.Uint32Array=typeof Uint32Array=="undefined"?Array:Uint32Array;qe.Int16Array=typeof Int16Array=="undefined"?Array:Int16Array;qe.Float32Array=typeof Float32Array=="undefined"?Array:Float32Array;qe.Float64Array=typeof Float64Array=="undefined"?Array:Float64Array;var Jt={};typeof window!="undefined"?Jt=window:typeof global!="undefined"&&(Jt=global);qe.requestAnimationFrame=Jt.requestAnimationFrame||Jt.msRequestAnimationFrame||Jt.mozRequestAnimationFrame||Jt.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};qe.createCanvas=function(){return document.createElement("canvas")};qe.createImage=function(){return new Jt.Image};qe.request={get:ph.get};qe.addEventListener=function(e,t,r,i){e.addEventListener(t,r,i)};qe.removeEventListener=function(e,t,r){e.removeEventListener(t,r)};var we=qe,Re=function(){this.head=null,this.tail=null,this._length=0};Re.prototype.insert=function(e){var t=new Re.Entry(e);return this.insertEntry(t),t};Re.prototype.insertAt=function(e,t){if(!(e<0)){for(var r=this.head,i=0;r&&i!=e;)r=r.next,i++;if(r){var n=new Re.Entry(t),a=r.prev;a?(a.next=n,n.prev=a):this.head=n,n.next=r,r.prev=n}else this.insert(t)}};Re.prototype.insertBeforeEntry=function(e,t){var r=new Re.Entry(e),i=t.prev;i?(i.next=r,r.prev=i):this.head=r,r.next=t,t.prev=r,this._length++};Re.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};Re.prototype.remove=function(e){var t=e.prev,r=e.next;t?t.next=r:this.head=r,r?r.prev=t:this.tail=t,e.next=e.prev=null,this._length--};Re.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;if(t)return this.remove(t),t.value}};Re.prototype.getHead=function(){if(this.head)return this.head.value};Re.prototype.getTail=function(){if(this.tail)return this.tail.value};Re.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;return t.value}};Re.prototype.indexOf=function(e){for(var t=this.head,r=0;t;){if(t.value===e)return r;t=t.next,r++}};Re.prototype.length=function(){return this._length};Re.prototype.isEmpty=function(){return this._length===0};Re.prototype.forEach=function(e,t){for(var r=this.head,i=0,n=typeof t!="undefined";r;)n?e.call(t,r.value,i):e(r.value,i),r=r.next,i++};Re.prototype.clear=function(){this.tail=this.head=null,this._length=0};Re.Entry=function(e){this.value=e,this.next=null,this.prev=null};var _h=Re,Lr=function(e){this._list=new _h,this._map={},this._maxSize=e||10};Lr.prototype.setMaxSize=function(e){this._maxSize=e};Lr.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var r=this._list.length();if(r>=this._maxSize&&r>0){var i=this._list.head;this._list.remove(i),delete this._map[i.key]}var n=this._list.insert(t);n.key=e,this._map[e]=n}};Lr.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};Lr.prototype.remove=function(e){var t=this._map[e];typeof t!="undefined"&&(delete this._map[e],this._list.remove(t))};Lr.prototype.clear=function(){this._list.clear(),this._map={}};var Ys=Lr,me={},Mo={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function vt(e){return e=Math.round(e),e<0?0:e>255?255:e}function mh(e){return e=Math.round(e),e<0?0:e>360?360:e}function Kr(e){return e<0?0:e>1?1:e}function wn(e){return e.length&&e.charAt(e.length-1)==="%"?vt(parseFloat(e)/100*255):vt(parseInt(e,10))}function Er(e){return e.length&&e.charAt(e.length-1)==="%"?Kr(parseFloat(e)/100):Kr(parseFloat(e))}function bn(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function Ot(e,t,r){return e+(t-e)*r}function ut(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e}function la(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var Zs=new Ys(20),hi=null;function ur(e,t){hi&&la(hi,t),hi=Zs.put(e,hi||t.slice())}me.parse=function(e,t){if(!!e){t=t||[];var r=Zs.get(e);if(r)return la(t,r);e=e+"";var i=e.replace(/ /g,"").toLowerCase();if(i in Mo)return la(t,Mo[i]),ur(e,t),t;if(i.charAt(0)==="#"){if(i.length===4){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=4095)){ut(t,0,0,0,1);return}return ut(t,(n&3840)>>4|(n&3840)>>8,n&240|(n&240)>>4,n&15|(n&15)<<4,1),ur(e,t),t}else if(i.length===7){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=16777215)){ut(t,0,0,0,1);return}return ut(t,(n&16711680)>>16,(n&65280)>>8,n&255,1),ur(e,t),t}return}var a=i.indexOf("("),o=i.indexOf(")");if(a!==-1&&o+1===i.length){var s=i.substr(0,a),l=i.substr(a+1,o-(a+1)).split(","),u=1;switch(s){case"rgba":if(l.length!==4){ut(t,0,0,0,1);return}u=Er(l.pop());case"rgb":if(l.length!==3){ut(t,0,0,0,1);return}return ut(t,wn(l[0]),wn(l[1]),wn(l[2]),u),ur(e,t),t;case"hsla":if(l.length!==4){ut(t,0,0,0,1);return}return l[3]=Er(l[3]),ua(l,t),ur(e,t),t;case"hsl":if(l.length!==3){ut(t,0,0,0,1);return}return ua(l,t),ur(e,t),t;default:return}}ut(t,0,0,0,1)}};me.parseToFloat=function(e,t){if(t=me.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function ua(e,t){var r=(parseFloat(e[0])%360+360)%360/360,i=Er(e[1]),n=Er(e[2]),a=n<=.5?n*(i+1):n+i-n*i,o=n*2-a;return t=t||[],ut(t,vt(bn(o,a,r+1/3)*255),vt(bn(o,a,r)*255),vt(bn(o,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function gh(e){if(!!e){var t=e[0]/255,r=e[1]/255,i=e[2]/255,n=Math.min(t,r,i),a=Math.max(t,r,i),o=a-n,s=(a+n)/2,l,u;if(o===0)l=0,u=0;else{s<.5?u=o/(a+n):u=o/(2-a-n);var f=((a-t)/6+o/2)/o,h=((a-r)/6+o/2)/o,d=((a-i)/6+o/2)/o;t===a?l=d-h:r===a?l=1/3+f-d:i===a&&(l=2/3+h-f),l<0&&(l+=1),l>1&&(l-=1)}var c=[l*360,u,s];return e[3]!=null&&c.push(e[3]),c}}me.lift=function(e,t){var r=me.parse(e);if(r){for(var i=0;i<3;i++)t<0?r[i]=r[i]*(1-t)|0:r[i]=(255-r[i])*t+r[i]|0;return me.stringify(r,r.length===4?"rgba":"rgb")}};me.toHex=function(e){var t=me.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};me.fastLerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){r=r||[];var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=t[n],s=t[a],l=i-n;return r[0]=vt(Ot(o[0],s[0],l)),r[1]=vt(Ot(o[1],s[1],l)),r[2]=vt(Ot(o[2],s[2],l)),r[3]=Kr(Ot(o[3],s[3],l)),r}};me.fastMapToColor=me.fastLerp;me.lerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=me.parse(t[n]),s=me.parse(t[a]),l=i-n,u=me.stringify([vt(Ot(o[0],s[0],l)),vt(Ot(o[1],s[1],l)),vt(Ot(o[2],s[2],l)),Kr(Ot(o[3],s[3],l))],"rgba");return r?{color:u,leftIndex:n,rightIndex:a,value:i}:u}};me.mapToColor=me.lerp;me.modifyHSL=function(e,t,r,i){if(e=me.parse(e),e)return e=gh(e),t!=null&&(e[0]=mh(t)),r!=null&&(e[1]=Er(r)),i!=null&&(e[2]=Er(i)),me.stringify(ua(e),"rgba")};me.modifyAlpha=function(e,t){if(e=me.parse(e),e&&t!=null)return e[3]=Kr(t),me.stringify(e,"rgba")};me.stringify=function(e,t){if(!(!e||!e.length)){var r=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(r+=","+e[3]),t+"("+r+")"}};var yh=me,xh=yh.parseToFloat,Mn={};function Lo(e){var t=Object.keys(e);t.sort();for(var r=[],i=0;i<t.length;i++){var n=t[i],a=e[n];a===null?r.push(n):r.push(n+" "+a.toString())}return r.join(`
`)}function Th(e,t,r){r.sort();for(var i=[],n=0;n<r.length;n++){var a=r[n];i.push(a)}var o=Lo(e)+`
`+Lo(t)+`
`+i.join(`
`);if(Mn[o])return Mn[o];var s=De.genGUID();return Mn[o]=s,s}var Eh=Ke.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var r=this.uniforms[e];r&&(typeof t=="string"&&(t=xh(t)||t),r.value=t,this.autoUpdateTextureStatus&&r.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var r=e[t];this.setUniform(t,r)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var r in e){var i=e[r];this.setUniform(r,i)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var r=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var i=this.uniforms;this._enabledUniforms=Object.keys(i),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(u){var f=this.uniforms[u].type;return f==="t"||f==="tv"},this);var n=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=De.clone(e.vertexDefines),this.fragmentDefines=De.clone(e.fragmentDefines),t){for(var o in r)i[o]&&(i[o].value=r[o].value);De.defaults(this.vertexDefines,n),De.defaults(this.fragmentDefines,a)}var s={};for(var l in e.textures)s[l]={shaderType:e.textures[l].shaderType,type:e.textures[l].type,enabled:t&&this._textureStatus[l]?this._textureStatus[l].enabled:!1};this._textureStatus=s,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=De.clone(this.vertexDefines),e.fragmentDefines=De.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,r){var i=this.vertexDefines,n=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(r=t,t=e,e="both"),r=r!=null?r:null,(e==="vertex"||e==="both")&&i[t]!==r&&(i[t]=r,this._programKey=""),(e==="fragment"||e==="both")&&n[t]!==r&&(n[t]=r,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=r.enabled;i||(r.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=!r.enabled;i||(r.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var r in t)t[r].enabled&&e.push(r);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=Th(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),Ct=Eh,Pi=1e-6,Ie=Array,yr=Math.random,K={};K.create=function(){var e=new Ie(2);return e[0]=0,e[1]=0,e};K.clone=function(e){var t=new Ie(2);return t[0]=e[0],t[1]=e[1],t};K.fromValues=function(e,t){var r=new Ie(2);return r[0]=e,r[1]=t,r};K.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};K.set=function(e,t,r){return e[0]=t,e[1]=r,e};K.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e};K.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e};K.sub=K.subtract;K.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e};K.mul=K.multiply;K.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e};K.div=K.divide;K.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e};K.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e};K.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e};K.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e};K.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(r*r+i*i)};K.dist=K.distance;K.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return r*r+i*i};K.sqrDist=K.squaredDistance;K.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)};K.len=K.length;K.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r};K.sqrLen=K.squaredLength;K.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};K.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};K.normalize=function(e,t){var r=t[0],i=t[1],n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n),e};K.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};K.cross=function(e,t,r){var i=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=i,e};K.lerp=function(e,t,r,i){var n=t[0],a=t[1];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e};K.random=function(e,t){t=t||1;var r=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e};K.transformMat2=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n,e[1]=r[1]*i+r[3]*n,e};K.transformMat2d=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n+r[4],e[1]=r[1]*i+r[3]*n+r[5],e};K.transformMat3=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[3]*n+r[6],e[1]=r[1]*i+r[4]*n+r[7],e};K.transformMat4=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[4]*n+r[12],e[1]=r[1]*i+r[5]*n+r[13],e};K.forEach=function(){var e=K.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=2),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}}();var H=K,Q=function(e,t){e=e||0,t=t||0,this.array=H.fromValues(e,t),this._dirty=!0};Q.prototype={constructor:Q,add:function(e){return H.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new Q(this.x,this.y)},copy:function(e){return H.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return H.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return H.dist(this.array,e.array)},distance:function(e){return H.distance(this.array,e.array)},div:function(e){return H.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return H.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return H.dot(this.array,e.array)},len:function(){return H.len(this.array)},length:function(){return H.length(this.array)},lerp:function(e,t,r){return H.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return H.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return H.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return H.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return H.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return H.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return H.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return H.random(this.array,e),this._dirty=!0,this},scale:function(e){return H.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return H.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return H.sqrDist(this.array,e.array)},squaredDistance:function(e){return H.squaredDistance(this.array,e.array)},sqrLen:function(){return H.sqrLen(this.array)},squaredLength:function(){return H.squaredLength(this.array)},sub:function(e){return H.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return H.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return H.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return H.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return H.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return H.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var Co=Q.prototype;Object.defineProperty(Co,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty(Co,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}Q.add=function(e,t,r){return H.add(e.array,t.array,r.array),e._dirty=!0,e};Q.set=function(e,t,r){return H.set(e.array,t,r),e._dirty=!0,e};Q.copy=function(e,t){return H.copy(e.array,t.array),e._dirty=!0,e};Q.cross=function(e,t,r){return H.cross(e.array,t.array,r.array),e._dirty=!0,e};Q.dist=function(e,t){return H.distance(e.array,t.array)};Q.distance=Q.dist;Q.div=function(e,t,r){return H.divide(e.array,t.array,r.array),e._dirty=!0,e};Q.divide=Q.div;Q.dot=function(e,t){return H.dot(e.array,t.array)};Q.len=function(e){return H.length(e.array)};Q.lerp=function(e,t,r,i){return H.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};Q.min=function(e,t,r){return H.min(e.array,t.array,r.array),e._dirty=!0,e};Q.max=function(e,t,r){return H.max(e.array,t.array,r.array),e._dirty=!0,e};Q.mul=function(e,t,r){return H.multiply(e.array,t.array,r.array),e._dirty=!0,e};Q.multiply=Q.mul;Q.negate=function(e,t){return H.negate(e.array,t.array),e._dirty=!0,e};Q.normalize=function(e,t){return H.normalize(e.array,t.array),e._dirty=!0,e};Q.random=function(e,t){return H.random(e.array,t),e._dirty=!0,e};Q.scale=function(e,t,r){return H.scale(e.array,t.array,r),e._dirty=!0,e};Q.scaleAndAdd=function(e,t,r,i){return H.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};Q.sqrDist=function(e,t){return H.sqrDist(e.array,t.array)};Q.squaredDistance=Q.sqrDist;Q.sqrLen=function(e){return H.sqrLen(e.array)};Q.squaredLength=Q.sqrLen;Q.sub=function(e,t,r){return H.subtract(e.array,t.array,r.array),e._dirty=!0,e};Q.subtract=Q.sub;Q.transformMat2=function(e,t,r){return H.transformMat2(e.array,t.array,r.array),e._dirty=!0,e};Q.transformMat2d=function(e,t,r){return H.transformMat2d(e.array,t.array,r.array),e._dirty=!0,e};Q.transformMat3=function(e,t,r){return H.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};Q.transformMat4=function(e,t,r){return H.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};var et=Q,Ro=1,No=2,Ln=3,Po={};function Sh(e){for(var t=e.split(`
`),r=0,i=t.length;r<i;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function Do(e,t,r){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),Sh(r)].join(`
`)}var Io=new we.Float32Array(16),Ah=Ke.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,r){t&&(e.gl.activeTexture(e.gl.TEXTURE0+r),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var r=this._textureSlot;return this.useTextureSlot(e,t,r),this._textureSlot++,r},setUniform:function(e,t,r,i){var n=this._locations,a=n[r];if(a==null)return!1;switch(t){case"m4":if(!(i instanceof Float32Array)){for(var o=0;o<i.length;o++)Io[o]=i[o];i=Io}e.uniformMatrix4fv(a,!1,i);break;case"2i":e.uniform2i(a,i[0],i[1]);break;case"2f":e.uniform2f(a,i[0],i[1]);break;case"3i":e.uniform3i(a,i[0],i[1],i[2]);break;case"3f":e.uniform3f(a,i[0],i[1],i[2]);break;case"4i":e.uniform4i(a,i[0],i[1],i[2],i[3]);break;case"4f":e.uniform4f(a,i[0],i[1],i[2],i[3]);break;case"1i":e.uniform1i(a,i);break;case"1f":e.uniform1f(a,i);break;case"1fv":e.uniform1fv(a,i);break;case"1iv":e.uniform1iv(a,i);break;case"2iv":e.uniform2iv(a,i);break;case"2fv":e.uniform2fv(a,i);break;case"3iv":e.uniform3iv(a,i);break;case"3fv":e.uniform3fv(a,i);break;case"4iv":e.uniform4iv(a,i);break;case"4fv":e.uniform4fv(a,i);break;case"m2":case"m2v":e.uniformMatrix2fv(a,!1,i);break;case"m3":case"m3v":e.uniformMatrix3fv(a,!1,i);break;case"m4v":if(Array.isArray(i)&&Array.isArray(i[0])){for(var s=new we.Float32Array(i.length*16),l=0,o=0;o<i.length;o++)for(var u=i[o],f=0;f<16;f++)s[l++]=u[f];e.uniformMatrix4fv(a,!1,s)}else e.uniformMatrix4fv(a,!1,i);break}return!0},setUniformOfSemantic:function(e,t,r){var i=this.uniformSemantics[t];return i?this.setUniform(e,i.type,i.symbol,r):!1},enableAttributes:function(e,t,r){var i=e.gl,n=this._program,a=this._locations,o;r?o=r.__enabledAttributeList:o=Po[e.__uid__],o||(r?o=r.__enabledAttributeList=[]:o=Po[e.__uid__]=[]);for(var s=[],l=0;l<t.length;l++){var u=t[l];if(!this.attributes[u]){s[l]=-1;continue}var f=a[u];if(f==null){if(f=i.getAttribLocation(n,u),f===-1){s[l]=-1;continue}a[u]=f}s[l]=f,o[f]?o[f]=No:o[f]=Ro}for(var l=0;l<o.length;l++)switch(o[l]){case Ro:i.enableVertexAttribArray(l),o[l]=Ln;break;case No:o[l]=Ln;break;case Ln:i.disableVertexAttribArray(l),o[l]=0;break}return s},getAttribLocation:function(e,t){var r=this._locations,i=r[t];return i==null&&(i=e.getAttribLocation(this._program,t),r[t]=i),i},buildProgram:function(e,t,r,i){var n=e.createShader(e.VERTEX_SHADER),a=e.createProgram();e.shaderSource(n,r),e.compileShader(n);var o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,i),e.compileShader(o);var s=Do(e,n,r);if(s||(s=Do(e,o,i),s))return s;if(e.attachShader(a,n),e.attachShader(a,o),t.attributeSemantics.POSITION)e.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);e.bindAttribLocation(a,0,l[0])}if(e.linkProgram(a),e.deleteShader(n),e.deleteShader(o),this._program=a,this.vertexCode=r,this.fragmentCode=i,!e.getProgramParameter(a,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(a);for(var u=0;u<t.uniforms.length;u++){var f=t.uniforms[u];this._locations[f]=e.getUniformLocation(a,f)}}}),wh=Ah,bh=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Oo(e,t,r){function i(o,s,l,u){var f="";isNaN(s)&&(s in t?s=t[s]:s=n[s]),isNaN(l)&&(l in t?l=t[l]:l=n[l]);for(var h=parseInt(s);h<parseInt(l);h++)f+="{"+u.replace(/float\s*\(\s*_idx_\s*\)/g,h.toFixed(1)).replace(/_idx_/g,h)+"}";return f}var n={};for(var a in r)n[a+"_COUNT"]=r[a];return e.replace(bh,i)}function Cn(e,t,r){var i=[];if(t)for(var n in t){var a=t[n];a>0&&i.push("#define "+n.toUpperCase()+"_COUNT "+a)}if(r)for(var o=0;o<r.length;o++){var s=r[o];i.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in e){var l=e[s];l===null?i.push("#define "+s):i.push("#define "+s+" "+l.toString())}return i.join(`
`)}function Mh(e){for(var t=[],r=0;r<e.length;r++)t.push("#extension GL_"+e[r]+" : enable");return t.join(`
`)}function Lh(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function Ks(e){this._renderer=e,this._cache={}}Ks.prototype.getProgram=function(e,t,r){var i=this._cache,n=e.isSkinnedMesh&&e.isSkinnedMesh(),a=e.isInstancedMesh&&e.isInstancedMesh(),o="s"+t.shader.shaderID+"m"+t.getProgramKey();r&&(o+="se"+r.getProgramKey(e.lightGroup)),n&&(o+=",sk"+e.joints.length),a&&(o+=",is");var y=i[o];if(y)return y;var s=r?r.getLightsNumbers(e.lightGroup):{},l=this._renderer,u=l.gl,f=t.getEnabledTextures(),h="";if(n){var d={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>l.getMaxJointNumber()&&(d.USE_SKIN_MATRICES_TEXTURE=null),h+=`
`+Cn(d)+`
`}a&&(h+=`
#define INSTANCING
`);var c=h+Cn(t.vertexDefines,s,f),v=h+Cn(t.fragmentDefines,s,f),p=c+`
`+t.shader.vertex,_=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(S){return l.getGLExtension(S)!=null});_.indexOf("EXT_shader_texture_lod")>=0&&(v+=`
#define SUPPORT_TEXTURE_LOD`),_.indexOf("OES_standard_derivatives")>=0&&(v+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var m=Mh(_)+`
`+Lh(t.precision)+`
`+v+`
`+t.shader.fragment,x=Oo(p,t.vertexDefines,s),g=Oo(m,t.fragmentDefines,s),y=new wh;y.uniformSemantics=t.shader.uniformSemantics,y.attributes=t.shader.attributes;var E=y.buildProgram(u,t.shader,x,g);return y.__error=E,i[o]=y,y};var Fo=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,Ch=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,Bo=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,Rh={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function wt(e){for(var t=[],r=0;r<e;r++)t[r]=0;return t}var Uo={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return wt(2)},vec3:function(){return wt(3)},vec4:function(){return wt(4)},ivec2:function(){return wt(2)},ivec3:function(){return wt(3)},ivec4:function(){return wt(4)},mat2:function(){return wt(4)},mat3:function(){return wt(9)},mat4:function(){return wt(16)},array:function(){return[]}},fa=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],$s=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],Qs=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],Nh={vec4:4,vec3:3,vec2:2,float:1},Rn={},Js={};function Ph(e,t){var r="vertex:"+e+"fragment:"+t;if(Rn[r])return Rn[r];var i=De.genGUID();return Rn[r]=i,Js[i]={vertex:e,fragment:t},i}function Ho(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function fr(){console.error("Wrong uniform/attributes syntax")}function zo(e,t){for(var r=/[,=\(\):]/,i=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),n=[],a=0;a<i.length;a++)i[a].match(r)?n.push(i[a].charAt(0),i[a].slice(1)):n.push(i[a]);i=n;var o=0,s=1,l=2,u=3,f=4,h=5,d=o,c={},v=null,p;_(i[0]);function _(g){g||fr();var y=g.match(/\[(.*?)\]/);p=g.replace(/\[(.*?)\]/,""),c[p]={},y&&(c[p].isArray=!0,c[p].arraySize=y[1])}for(var a=1;a<i.length;a++){var m=i[a];if(!!m){if(m==="="){if(d!==o&&d!==u){fr();break}d=s;continue}else if(m===":"){d=f;continue}else if(m===","){if(d===l){if(!(v instanceof Array)){fr();break}v.push(+i[++a])}else d=h;continue}else if(m===")"){c[p].value=new we.Float32Array(v),v=null,d=h;continue}else if(m==="("){if(d!==l){fr();break}if(!(v instanceof Array)){fr();break}v.push(+i[++a]);continue}else if(m.indexOf("vec")>=0){if(d!==s&&d!==f){fr();break}d=l,v=[];continue}else if(d===s){e==="bool"?c[p].value=m==="true":c[p].value=parseFloat(m),v=null;continue}else if(d===f){var x=m;fa.indexOf(x)>=0||$s.indexOf(x)>=0||Qs.indexOf(x)>=0?c[p].semantic=x:x==="ignore"||x==="unconfigurable"?c[p].ignore=!0:e==="bool"?c[p].value=x==="true":c[p].value=parseFloat(x);continue}_(m),d=o}}return c}function R(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=Ho(e),t=Ho(t),this._shaderID=Ph(e,t),this._vertexCode=R.parseImport(e),this._fragmentCode=R.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}R.prototype={constructor:R,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var r=this.uniformTemplates[t];e[t]={type:r.type,value:r.value()}}return e},_parseImport:function(){this._vertexCode=R.parseImport(this.vertex),this._fragmentCode=R.parseImport(this.fragment)},_addSemanticUniform:function(e,t,r){if(fa.indexOf(r)>=0)this.attributeSemantics[r]={symbol:e,type:t};else if(Qs.indexOf(r)>=0){var i=!1,n=r;r.match(/TRANSPOSE$/)&&(i=!0,n=r.slice(0,-9)),this.matrixSemantics[r]={symbol:e,type:t,isTranspose:i,semanticNoTranspose:n}}else $s.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:e,type:t})},_addMaterialUniform:function(e,t,r,i,n,a){a[e]={type:r,value:n?Uo.array:i||Uo[t],semantic:null}},_parseUniforms:function(){var e={},t=this,r="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(Fo,n),r="fragment",this._fragmentCode=this._fragmentCode.replace(Fo,n),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function i(a){return a!=null?function(){return a}:null}function n(a,o,s){var l=zo(o,s),u=[];for(var f in l){var h=l[f],d=h.semantic,c=f,v=Rh[o],p=i(l[f].value);l[f].isArray&&(c+="["+l[f].arraySize+"]",v+="v"),u.push(c),t._uniformList.push(f),h.ignore||((o==="sampler2D"||o==="samplerCube")&&(t.textures[f]={shaderType:r,type:o}),d?t._addSemanticUniform(f,v,d):t._addMaterialUniform(f,o,v,p,l[f].isArray,e))}return u.length>0?"uniform "+o+" "+u.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(Ch,r);function r(i,n,a){var o=zo(n,a),s=Nh[n]||1,l=[];for(var u in o){var f=o[u].semantic;if(e[u]={type:"float",size:s,semantic:f||null},f){if(fa.indexOf(f)<0)throw new Error('Unkown semantic "'+f+'"');t.attributeSemantics[f]={symbol:u,type:n}}l.push(u)}return"attribute "+n+" "+l.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(Bo,r),t="fragment",this._fragmentCode=this._fragmentCode.replace(Bo,r);function r(i,n,a){var o=t==="vertex"?e.vertexDefines:e.fragmentDefines;return o[n]||(a==="false"?o[n]=!1:a==="true"?o[n]=!0:o[n]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var e=Js[this._shaderID],t=new R(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(R.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(R.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(R.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(R.prototype,"uniforms",{get:function(){return this._uniformList}}));var Dh=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;R.parseImport=function(e){return e=e.replace(Dh,function(n,r,i){var n=R.source(i);return n?R.parseImport(n):(console.error('Shader chunk "'+i+'" not existed in library'),"")}),e};var Ih=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;R.import=function(e){e.replace(Ih,function(t,r,i,a){var a=a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(a){for(var o=i.split("."),s=R.codes,l=0,u;l<o.length-1;)u=o[l++],s[u]||(s[u]={}),s=s[u];u=o[l],s[u]=a}return a})};R.codes={};R.source=function(e){for(var t=e.split("."),r=R.codes,i=0;r&&i<t.length;){var n=t[i++];r=r[n]}return typeof r!="string"?(console.error('Shader "'+e+'" not existed in library'),""):r};var el=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`,ue={};ue.create=function(){var e=new Ie(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ue.clone=function(e){var t=new Ie(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};ue.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};ue.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ue.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=i,e[9]=a,e[11]=t[14],e[12]=n,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};ue.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8],h=t[9],d=t[10],c=t[11],v=t[12],p=t[13],_=t[14],m=t[15],x=r*s-i*o,g=r*l-n*o,y=r*u-a*o,E=i*l-n*s,S=i*u-a*s,b=n*u-a*l,A=f*p-h*v,M=f*_-d*v,O=f*m-c*v,L=h*_-d*p,U=h*m-c*p,F=d*m-c*_,N=x*F-g*U+y*L+E*O-S*M+b*A;return N?(N=1/N,e[0]=(s*F-l*U+u*L)*N,e[1]=(n*U-i*F-a*L)*N,e[2]=(p*b-_*S+m*E)*N,e[3]=(d*S-h*b-c*E)*N,e[4]=(l*O-o*F-u*M)*N,e[5]=(r*F-n*O+a*M)*N,e[6]=(_*y-v*b-m*g)*N,e[7]=(f*b-d*y+c*g)*N,e[8]=(o*U-s*O+u*A)*N,e[9]=(i*O-r*U-a*A)*N,e[10]=(v*S-p*y+m*x)*N,e[11]=(h*y-f*S-c*x)*N,e[12]=(s*M-o*L-l*A)*N,e[13]=(r*L-i*M+n*A)*N,e[14]=(p*g-v*E-_*x)*N,e[15]=(f*E-h*g+d*x)*N,e):null};ue.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8],h=t[9],d=t[10],c=t[11],v=t[12],p=t[13],_=t[14],m=t[15];return e[0]=s*(d*m-c*_)-h*(l*m-u*_)+p*(l*c-u*d),e[1]=-(i*(d*m-c*_)-h*(n*m-a*_)+p*(n*c-a*d)),e[2]=i*(l*m-u*_)-s*(n*m-a*_)+p*(n*u-a*l),e[3]=-(i*(l*c-u*d)-s*(n*c-a*d)+h*(n*u-a*l)),e[4]=-(o*(d*m-c*_)-f*(l*m-u*_)+v*(l*c-u*d)),e[5]=r*(d*m-c*_)-f*(n*m-a*_)+v*(n*c-a*d),e[6]=-(r*(l*m-u*_)-o*(n*m-a*_)+v*(n*u-a*l)),e[7]=r*(l*c-u*d)-o*(n*c-a*d)+f*(n*u-a*l),e[8]=o*(h*m-c*p)-f*(s*m-u*p)+v*(s*c-u*h),e[9]=-(r*(h*m-c*p)-f*(i*m-a*p)+v*(i*c-a*h)),e[10]=r*(s*m-u*p)-o*(i*m-a*p)+v*(i*u-a*s),e[11]=-(r*(s*c-u*h)-o*(i*c-a*h)+f*(i*u-a*s)),e[12]=-(o*(h*_-d*p)-f*(s*_-l*p)+v*(s*d-l*h)),e[13]=r*(h*_-d*p)-f*(i*_-n*p)+v*(i*d-n*h),e[14]=-(r*(s*_-l*p)-o*(i*_-n*p)+v*(i*l-n*s)),e[15]=r*(s*d-l*h)-o*(i*d-n*h)+f*(i*l-n*s),e};ue.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],c=e[12],v=e[13],p=e[14],_=e[15],m=t*o-r*a,x=t*s-i*a,g=t*l-n*a,y=r*s-i*o,E=r*l-n*o,S=i*l-n*s,b=u*v-f*c,A=u*p-h*c,M=u*_-d*c,O=f*p-h*v,L=f*_-d*v,U=h*_-d*p;return m*U-x*L+g*O+y*M-E*A+S*b};ue.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],f=t[7],h=t[8],d=t[9],c=t[10],v=t[11],p=t[12],_=t[13],m=t[14],x=t[15],g=r[0],y=r[1],E=r[2],S=r[3];return e[0]=g*i+y*s+E*h+S*p,e[1]=g*n+y*l+E*d+S*_,e[2]=g*a+y*u+E*c+S*m,e[3]=g*o+y*f+E*v+S*x,g=r[4],y=r[5],E=r[6],S=r[7],e[4]=g*i+y*s+E*h+S*p,e[5]=g*n+y*l+E*d+S*_,e[6]=g*a+y*u+E*c+S*m,e[7]=g*o+y*f+E*v+S*x,g=r[8],y=r[9],E=r[10],S=r[11],e[8]=g*i+y*s+E*h+S*p,e[9]=g*n+y*l+E*d+S*_,e[10]=g*a+y*u+E*c+S*m,e[11]=g*o+y*f+E*v+S*x,g=r[12],y=r[13],E=r[14],S=r[15],e[12]=g*i+y*s+E*h+S*p,e[13]=g*n+y*l+E*d+S*_,e[14]=g*a+y*u+E*c+S*m,e[15]=g*o+y*f+E*v+S*x,e};ue.multiplyAffine=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[4],s=t[5],l=t[6],u=t[8],f=t[9],h=t[10],d=t[12],c=t[13],v=t[14],p=r[0],_=r[1],m=r[2];return e[0]=p*i+_*o+m*u,e[1]=p*n+_*s+m*f,e[2]=p*a+_*l+m*h,p=r[4],_=r[5],m=r[6],e[4]=p*i+_*o+m*u,e[5]=p*n+_*s+m*f,e[6]=p*a+_*l+m*h,p=r[8],_=r[9],m=r[10],e[8]=p*i+_*o+m*u,e[9]=p*n+_*s+m*f,e[10]=p*a+_*l+m*h,p=r[12],_=r[13],m=r[14],e[12]=p*i+_*o+m*u+d,e[13]=p*n+_*s+m*f+c,e[14]=p*a+_*l+m*h+v,e};ue.mul=ue.multiply;ue.mulAffine=ue.multiplyAffine;ue.translate=function(e,t,r){var i=r[0],n=r[1],a=r[2],o,s,l,u,f,h,d,c,v,p,_,m;return t===e?(e[12]=t[0]*i+t[4]*n+t[8]*a+t[12],e[13]=t[1]*i+t[5]*n+t[9]*a+t[13],e[14]=t[2]*i+t[6]*n+t[10]*a+t[14],e[15]=t[3]*i+t[7]*n+t[11]*a+t[15]):(o=t[0],s=t[1],l=t[2],u=t[3],f=t[4],h=t[5],d=t[6],c=t[7],v=t[8],p=t[9],_=t[10],m=t[11],e[0]=o,e[1]=s,e[2]=l,e[3]=u,e[4]=f,e[5]=h,e[6]=d,e[7]=c,e[8]=v,e[9]=p,e[10]=_,e[11]=m,e[12]=o*i+f*n+v*a+t[12],e[13]=s*i+h*n+p*a+t[13],e[14]=l*i+d*n+_*a+t[14],e[15]=u*i+c*n+m*a+t[15]),e};ue.scale=function(e,t,r){var i=r[0],n=r[1],a=r[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};ue.rotate=function(e,t,r,i){var n=i[0],a=i[1],o=i[2],s=Math.sqrt(n*n+a*a+o*o),l,u,f,h,d,c,v,p,_,m,x,g,y,E,S,b,A,M,O,L,U,F,N,V;return Math.abs(s)<Pi?null:(s=1/s,n*=s,a*=s,o*=s,l=Math.sin(r),u=Math.cos(r),f=1-u,h=t[0],d=t[1],c=t[2],v=t[3],p=t[4],_=t[5],m=t[6],x=t[7],g=t[8],y=t[9],E=t[10],S=t[11],b=n*n*f+u,A=a*n*f+o*l,M=o*n*f-a*l,O=n*a*f-o*l,L=a*a*f+u,U=o*a*f+n*l,F=n*o*f+a*l,N=a*o*f-n*l,V=o*o*f+u,e[0]=h*b+p*A+g*M,e[1]=d*b+_*A+y*M,e[2]=c*b+m*A+E*M,e[3]=v*b+x*A+S*M,e[4]=h*O+p*L+g*U,e[5]=d*O+_*L+y*U,e[6]=c*O+m*L+E*U,e[7]=v*O+x*L+S*U,e[8]=h*F+p*N+g*V,e[9]=d*F+_*N+y*V,e[10]=c*F+m*N+E*V,e[11]=v*F+x*N+S*V,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};ue.rotateX=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[4],o=t[5],s=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*n+u*i,e[5]=o*n+f*i,e[6]=s*n+h*i,e[7]=l*n+d*i,e[8]=u*n-a*i,e[9]=f*n-o*i,e[10]=h*n-s*i,e[11]=d*n-l*i,e};ue.rotateY=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[8],f=t[9],h=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n-u*i,e[1]=o*n-f*i,e[2]=s*n-h*i,e[3]=l*n-d*i,e[8]=a*i+u*n,e[9]=o*i+f*n,e[10]=s*i+h*n,e[11]=l*i+d*n,e};ue.rotateZ=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[4],f=t[5],h=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n+u*i,e[1]=o*n+f*i,e[2]=s*n+h*i,e[3]=l*n+d*i,e[4]=u*n-a*i,e[5]=f*n-o*i,e[6]=h*n-s*i,e[7]=d*n-l*i,e};ue.fromRotationTranslation=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=i+i,l=n+n,u=a+a,f=i*s,h=i*l,d=i*u,c=n*l,v=n*u,p=a*u,_=o*s,m=o*l,x=o*u;return e[0]=1-(c+p),e[1]=h+x,e[2]=d-m,e[3]=0,e[4]=h-x,e[5]=1-(f+p),e[6]=v+_,e[7]=0,e[8]=d+m,e[9]=v-_,e[10]=1-(f+c),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e};ue.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,u=r*o,f=i*o,h=i*s,d=n*o,c=n*s,v=n*l,p=a*o,_=a*s,m=a*l;return e[0]=1-h-v,e[1]=f+m,e[2]=d-_,e[3]=0,e[4]=f-m,e[5]=1-u-v,e[6]=c+p,e[7]=0,e[8]=d+_,e[9]=c-p,e[10]=1-u-h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ue.frustum=function(e,t,r,i,n,a,o){var s=1/(r-t),l=1/(n-i),u=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(n+i)*l,e[10]=(o+a)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*u,e[15]=0,e};ue.perspective=function(e,t,r,i,n){var a=1/Math.tan(t/2),o=1/(i-n);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(n+i)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*n*i*o,e[15]=0,e};ue.ortho=function(e,t,r,i,n,a,o){var s=1/(t-r),l=1/(i-n),u=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+r)*s,e[13]=(n+i)*l,e[14]=(o+a)*u,e[15]=1,e};ue.lookAt=function(e,t,r,i){var n,a,o,s,l,u,f,h,d,c,v=t[0],p=t[1],_=t[2],m=i[0],x=i[1],g=i[2],y=r[0],E=r[1],S=r[2];return Math.abs(v-y)<Pi&&Math.abs(p-E)<Pi&&Math.abs(_-S)<Pi?ue.identity(e):(f=v-y,h=p-E,d=_-S,c=1/Math.sqrt(f*f+h*h+d*d),f*=c,h*=c,d*=c,n=x*d-g*h,a=g*f-m*d,o=m*h-x*f,c=Math.sqrt(n*n+a*a+o*o),c?(c=1/c,n*=c,a*=c,o*=c):(n=0,a=0,o=0),s=h*o-d*a,l=d*n-f*o,u=f*a-h*n,c=Math.sqrt(s*s+l*l+u*u),c?(c=1/c,s*=c,l*=c,u*=c):(s=0,l=0,u=0),e[0]=n,e[1]=s,e[2]=f,e[3]=0,e[4]=a,e[5]=l,e[6]=h,e[7]=0,e[8]=o,e[9]=u,e[10]=d,e[11]=0,e[12]=-(n*v+a*p+o*_),e[13]=-(s*v+l*p+u*_),e[14]=-(f*v+h*p+d*_),e[15]=1,e)};ue.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};var C=ue,X={};X.create=function(){var e=new Ie(3);return e[0]=0,e[1]=0,e[2]=0,e};X.clone=function(e){var t=new Ie(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};X.fromValues=function(e,t,r){var i=new Ie(3);return i[0]=e,i[1]=t,i[2]=r,i};X.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};X.set=function(e,t,r,i){return e[0]=t,e[1]=r,e[2]=i,e};X.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e};X.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e};X.sub=X.subtract;X.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e};X.mul=X.multiply;X.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e};X.div=X.divide;X.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e};X.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e};X.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e};X.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e};X.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(r*r+i*i+n*n)};X.dist=X.distance;X.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return r*r+i*i+n*n};X.sqrDist=X.squaredDistance;X.length=function(e){var t=e[0],r=e[1],i=e[2];return Math.sqrt(t*t+r*r+i*i)};X.len=X.length;X.squaredLength=function(e){var t=e[0],r=e[1],i=e[2];return t*t+r*r+i*i};X.sqrLen=X.squaredLength;X.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};X.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};X.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=r*r+i*i+n*n;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e};X.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};X.cross=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2];return e[0]=n*l-a*s,e[1]=a*o-i*l,e[2]=i*s-n*o,e};X.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e};X.random=function(e,t){t=t||1;var r=yr()*2*Math.PI,i=yr()*2-1,n=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(r)*n,e[1]=Math.sin(r)*n,e[2]=i*t,e};X.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[3]*i+r[7]*n+r[11]*a+r[15];return o=o||1,e[0]=(r[0]*i+r[4]*n+r[8]*a+r[12])/o,e[1]=(r[1]*i+r[5]*n+r[9]*a+r[13])/o,e[2]=(r[2]*i+r[6]*n+r[10]*a+r[14])/o,e};X.transformMat3=function(e,t,r){var i=t[0],n=t[1],a=t[2];return e[0]=i*r[0]+n*r[3]+a*r[6],e[1]=i*r[1]+n*r[4]+a*r[7],e[2]=i*r[2]+n*r[5]+a*r[8],e};X.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],f=u*i+s*a-l*n,h=u*n+l*i-o*a,d=u*a+o*n-s*i,c=-o*i-s*n-l*a;return e[0]=f*u+c*-o+h*-l-d*-s,e[1]=h*u+c*-s+d*-o-f*-l,e[2]=d*u+c*-l+f*-s-h*-o,e};X.rotateX=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0],a[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),a[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};X.rotateY=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),a[1]=n[1],a[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};X.rotateZ=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),a[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),a[2]=n[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};X.forEach=function(){var e=X.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=3),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}();X.angle=function(e,t){var r=X.fromValues(e[0],e[1],e[2]),i=X.fromValues(t[0],t[1],t[2]);X.normalize(r,r),X.normalize(i,i);var n=X.dot(r,i);return n>1?0:Math.acos(n)};var T=X;R.import(el);var ve=C.create,Vo={};function Go(e){return e.material}function Oh(e,t,r){return t.uniforms[r].value}function Fh(e,t,r,i){return r!==i}function Bh(e){return!0}function ko(){}var Wo={float:w.FLOAT,byte:w.BYTE,ubyte:w.UNSIGNED_BYTE,short:w.SHORT,ushort:w.UNSIGNED_SHORT};function Uh(e,t,r){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=r,this.vao=null}function Hh(e){var t,r;this.bind=function(i){t||(t=we.createCanvas(),t.width=t.height=1,t.getContext("2d"));var n=i.gl,a=!r;a&&(r=n.createTexture()),n.bindTexture(n.TEXTURE_2D,r),a&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)},this.unbind=function(i){i.gl.bindTexture(i.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var Ut=Ke.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window!="undefined"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=we.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new dh(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new Ks(this),this._placeholderTexture=new Hh},{resize:function(e,t){var r=this.canvas,i=this.devicePixelRatio;e!=null?(r.style&&(r.style.width=e+"px",r.style.height=t+"px"),r.width=e*i,r.height=t*i,this._width=e,this._height=t):(this._width=r.width/i,this._height=r.height/i),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,r,i,n){if(typeof e=="object"){var a=e;e=a.x,t=a.y,r=a.width,i=a.height,n=a.devicePixelRatio}n=n||this.devicePixelRatio,this.gl.viewport(e*n,t*n,r*n,i*n),this.viewport={x:e,y:t,width:r,height:i,devicePixelRatio:n}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,r,i){var n=this.gl,a=this.clearColor;if(this.clearBit){n.colorMask(!0,!0,!0,!0),n.depthMask(!0);var o=this.viewport,s=!1,l=o.devicePixelRatio;(o.width!==this._width||o.height!==this._height||l&&l!==this.devicePixelRatio||o.x||o.y)&&(s=!0,n.enable(n.SCISSOR_TEST),n.scissor(o.x*l,o.y*l,o.width*l,o.height*l)),n.clearColor(a[0],a[1],a[2],a[3]),n.clear(this.clearBit),s&&n.disable(n.SCISSOR_TEST)}if(r||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var u=e.updateRenderList(t,!0);this._sceneRendering=e;var f=u.opaque,h=u.transparent,d=e.material;e.trigger("beforerender",this,e,t,u),i?(this.renderPreZ(f,e,t),n.depthFunc(n.LEQUAL)):n.depthFunc(n.LESS);for(var c=ve(),v=T.create(),p=0;p<h.length;p++){var _=h[p];C.multiplyAffine(c,t.viewMatrix.array,_.worldTransform.array),T.transformMat4(v,_.position.array,c),_.__depth=v[2]}this.renderPass(f,t,{getMaterial:function(m){return d||m.material},sortCompare:this.opaqueSortCompare}),this.renderPass(h,t,{getMaterial:function(m){return d||m.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,u),this._sceneRendering=null},getProgram:function(e,t,r){return t=t||e.material,this._programMgr.getProgram(e,t,r)},validateProgram:function(e){if(e.__error){var t=e.__error;if(Vo[e.__uid__])return;if(Vo[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,r){var i=r&&r.getMaterial||Go;t=t||null;for(var n=0;n<e.length;n++){var a=e[n],o=i.call(this,a);if(n>0){var s=e[n-1],l=s.joints?s.joints.length:0,u=a.joints?a.joints.length:0;if(u===l&&a.material===s.material&&a.lightGroup===s.lightGroup){a.__program=s.__program;continue}}var f=this._programMgr.getProgram(a,o,t);this.validateProgram(f),a.__program=f}},renderPass:function(e,t,r){this.trigger("beforerenderpass",this,e,t,r),r=r||{},r.getMaterial=r.getMaterial||Go,r.getUniform=r.getUniform||Oh,r.isMaterialChanged=r.isMaterialChanged||Fh,r.beforeRender=r.beforeRender||ko,r.afterRender=r.afterRender||ko;var i=r.ifRender||Bh;this.updatePrograms(e,this._sceneRendering,r),r.sortCompare&&e.sort(r.sortCompare);var n=this.viewport,a=n.devicePixelRatio,o=[n.x*a,n.y*a,n.width*a,n.height*a],s=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*s,this._height*s],u=[o[2],o[3]],f=Date.now();t?(C.copy(de.VIEW,t.viewMatrix.array),C.copy(de.PROJECTION,t.projectionMatrix.array),C.copy(de.VIEWINVERSE,t.worldTransform.array)):(C.identity(de.VIEW),C.identity(de.PROJECTION),C.identity(de.VIEWINVERSE)),C.multiply(de.VIEWPROJECTION,de.PROJECTION,de.VIEW),C.invert(de.PROJECTIONINVERSE,de.PROJECTION),C.invert(de.VIEWPROJECTIONINVERSE,de.VIEWPROJECTION);for(var h=this.gl,d=this._sceneRendering,c,v,p,_,m,x,g,y,E,S,b,A,M=null,O=0;O<e.length;O++){var L=e[O],U=L.worldTransform!=null,F;if(!!i(L)){U&&(F=L.isSkinnedMesh&&L.isSkinnedMesh()?L.offsetMatrix?L.offsetMatrix.array:de.IDENTITY:L.worldTransform.array);var N=L.geometry,V=r.getMaterial.call(this,L),B=L.__program,Z=V.shader,I=N.__uid__+"-"+B.__uid__,ce=I!==S;S=I,ce&&M&&M.bindVertexArrayOES(null),U&&(C.copy(de.WORLD,F),C.multiply(de.WORLDVIEWPROJECTION,de.VIEWPROJECTION,F),C.multiplyAffine(de.WORLDVIEW,de.VIEW,F),(Z.matrixSemantics.WORLDINVERSE||Z.matrixSemantics.WORLDINVERSETRANSPOSE)&&C.invert(de.WORLDINVERSE,F),(Z.matrixSemantics.WORLDVIEWINVERSE||Z.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&C.invert(de.WORLDVIEWINVERSE,de.WORLDVIEW),(Z.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||Z.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&C.invert(de.WORLDVIEWPROJECTIONINVERSE,de.WORLDVIEWPROJECTION)),L.beforeRender&&L.beforeRender(this),r.beforeRender.call(this,L,V,c);var G=B!==v;G?(B.bind(this),B.setUniformOfSemantic(h,"VIEWPORT",o),B.setUniformOfSemantic(h,"WINDOW_SIZE",l),t&&(B.setUniformOfSemantic(h,"NEAR",t.near),B.setUniformOfSemantic(h,"FAR",t.far)),B.setUniformOfSemantic(h,"DEVICEPIXELRATIO",a),B.setUniformOfSemantic(h,"TIME",f),B.setUniformOfSemantic(h,"VIEWPORT_SIZE",u),d&&d.setLightUniforms(B,L.lightGroup,this)):B=v,(G||r.isMaterialChanged(L,p,V,c))&&(V.depthTest!==_&&(V.depthTest?h.enable(h.DEPTH_TEST):h.disable(h.DEPTH_TEST),_=V.depthTest),V.depthMask!==m&&(h.depthMask(V.depthMask),m=V.depthMask),V.transparent!==E&&(V.transparent?h.enable(h.BLEND):h.disable(h.BLEND),E=V.transparent),V.transparent&&(V.blend?V.blend(h):(h.blendEquationSeparate(h.FUNC_ADD,h.FUNC_ADD),h.blendFuncSeparate(h.SRC_ALPHA,h.ONE_MINUS_SRC_ALPHA,h.ONE,h.ONE_MINUS_SRC_ALPHA))),A=this._bindMaterial(L,V,B,p||null,c||null,v||null,r.getUniform),c=V);var xe=Z.matrixSemanticKeys;if(U)for(var oe=0;oe<xe.length;oe++){var pe=xe[oe],_e=Z.matrixSemantics[pe],Oe=de[pe];if(_e.isTranspose){var Fe=de[_e.semanticNoTranspose];C.transpose(Oe,Fe)}B.setUniform(h,_e.type,_e.symbol,Oe)}L.cullFace!==g&&(g=L.cullFace,h.cullFace(g)),L.frontFace!==y&&(y=L.frontFace,h.frontFace(y)),L.culling!==x&&(x=L.culling,x?h.enable(h.CULL_FACE):h.disable(h.CULL_FACE)),this._updateSkeleton(L,B,A),ce&&(b=this._bindVAO(M,Z,N,B)),this._renderObject(L,b,B),r.afterRender(this,L),L.afterRender&&L.afterRender(this),v=B,p=L}}this.trigger("afterrenderpass",this,e,t,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,r){var i=this.gl,n=e.skeleton;if(n)if(n.update(),e.joints.length>this.getMaxJointNumber()){var a=n.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,a,r),t.setUniform(i,"1i","skinMatricesTexture",r),t.setUniform(i,"1f","skinMatricesTextureSize",a.width)}else{var o=n.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(i,"SKIN_MATRIX",o)}},_renderObject:function(e,t,r){var i=this.gl,n=e.geometry,a=e.mode;a==null&&(a=4);var o=null,s=e.isInstancedMesh&&e.isInstancedMesh();if(s&&(o=this.getGLExtension("ANGLE_instanced_arrays"),!o)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var l;if(s&&(l=this._bindInstancedAttributes(e,r,o)),t.indicesBuffer){var u=this.getGLExtension("OES_element_index_uint"),f=u&&n.indices instanceof Uint32Array,h=f?i.UNSIGNED_INT:i.UNSIGNED_SHORT;s?o.drawElementsInstancedANGLE(a,t.indicesBuffer.count,h,0,e.getInstanceCount()):i.drawElements(a,t.indicesBuffer.count,h,0)}else s?o.drawArraysInstancedANGLE(a,0,n.vertexCount,e.getInstanceCount()):i.drawArrays(a,0,n.vertexCount);if(s)for(var d=0;d<l.length;d++)i.disableVertexAttribArray(l[d])},_bindInstancedAttributes:function(e,t,r){for(var i=this.gl,n=e.getInstancedAttributesBuffers(this),a=[],o=0;o<n.length;o++){var s=n[o],l=t.getAttribLocation(i,s.symbol);if(!(l<0)){var u=Wo[s.type]||i.FLOAT;i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,s.buffer),i.vertexAttribPointer(l,s.size,u,!1,0,0),r.vertexAttribDivisorANGLE(l,s.divisor),a.push(l)}}return a},_bindMaterial:function(e,t,r,i,n,a,o){for(var s=this.gl,l=a===r,u=r.currentTextureSlot(),f=t.getEnabledUniforms(),h=t.getTextureUniforms(),d=this._placeholderTexture,c=0;c<h.length;c++){var v=h[c],p=o(e,t,v),_=t.uniforms[v].type;if(_==="t"&&p)p.__slot=-1;else if(_==="tv")for(var m=0;m<p.length;m++)p[m]&&(p[m].__slot=-1)}d.__slot=-1;for(var c=0;c<f.length;c++){var v=f[c],x=t.uniforms[v],p=o(e,t,v),_=x.type,g=_==="t";if(g&&(!p||!p.isRenderable())&&(p=d),n&&l){var y=o(i,n,v);if(g&&(!y||!y.isRenderable())&&(y=d),y===p){if(g)r.takeCurrentTextureSlot(this,null);else if(_==="tv"&&p)for(var m=0;m<p.length;m++)r.takeCurrentTextureSlot(this,null);continue}}if(p!=null)if(g)if(p.__slot<0){var E=r.currentTextureSlot(),S=r.setUniform(s,"1i",v,E);S&&(r.takeCurrentTextureSlot(this,p),p.__slot=E)}else r.setUniform(s,"1i",v,p.__slot);else if(Array.isArray(p)){if(p.length===0)continue;if(_==="tv"){if(!r.hasUniform(v))continue;for(var b=[],m=0;m<p.length;m++){var A=p[m];if(A.__slot<0){var E=r.currentTextureSlot();b.push(E),r.takeCurrentTextureSlot(this,A),A.__slot=E}else b.push(A.__slot)}r.setUniform(s,"1iv",v,b)}else r.setUniform(s,x.type,v,p)}else r.setUniform(s,x.type,v,p)}var M=r.currentTextureSlot();return r.resetTextureSlot(u),M},_bindVAO:function(e,t,r,i){var n=!r.dynamic,a=this.gl,o=this.__uid__+"-"+i.__uid__,s=r.__vaoCache[o];if(!s){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var u=l[0],f=u.attributeBuffers,y=u.indicesBuffer,g=[],h=[],d=0;d<f.length;d++){var c=f[d],v=c.name,p=c.semantic,_;if(p){var m=t.attributeSemantics[p];_=m&&m.symbol}else _=v;_&&i.attributes[_]&&(g.push(c),h.push(_))}s=new Uh(g,h,y),n&&(r.__vaoCache[o]=s)}var x=!0;e&&n&&(s.vao==null?s.vao=e.createVertexArrayOES():x=!1,e.bindVertexArrayOES(s.vao));var g=s.availableAttributes,y=s.indicesBuffer;if(x){for(var E=i.enableAttributes(this,s.availableAttributeSymbols,e&&n&&s),d=0;d<g.length;d++){var S=E[d];if(S!==-1){var c=g[d],b=c.buffer,A=c.size,M=Wo[c.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,b),a.vertexAttribPointer(S,A,M,!1,0,0)}}r.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,y.buffer)}return s},renderPreZ:function(e,t,r){var i=this.gl,n=this._prezMaterial||new Ct({shader:new R(R.source("clay.prez.vertex"),R.source("clay.prez.fragment"))});this._prezMaterial=n,i.colorMask(!1,!1,!1,!1),i.depthMask(!0),this.renderPass(e,r,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,o){var s=a.material,l=o.material;return s.get("diffuseMap")!==l.get("diffuseMap")||(s.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(a,o,s){if(s==="alphaMap")return a.material.get("diffuseMap");if(s==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var l=a.material.get("alphaCutoff");return l||0}return 0}else return s==="uvRepeat"?a.material.get("uvRepeat"):s==="uvOffset"?a.material.get("uvOffset"):o.get(s)},getMaterial:function(){return n},sort:this.opaqueSortCompare}),i.colorMask(!0,!0,!0,!0),i.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,r){e.getParent()&&e.getParent().remove(e);var i={};e.traverse(function(n){var a=n.material;if(n.geometry&&t&&n.geometry.dispose(this),r&&a&&!i[a.__uid__]){for(var o=a.getTextureUniforms(),s=0;s<o.length;s++){var l=o[s],u=a.uniforms[l].value,f=a.uniforms[l].type;if(!!u){if(f==="t")u.dispose&&u.dispose(this);else if(f==="tv")for(var h=0;h<u.length;h++)u[h]&&u[h].dispose&&u[h].dispose(this)}}i[a.__uid__]=!0}n.dispose&&n.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,r){r||(r=new et),t=this._height-t;var i=this.viewport,n=r.array;return n[0]=(e-i.x)/i.width,n[0]=n[0]*2-1,n[1]=(t-i.y)/i.height,n[1]=n[1]*2-1,r}});Ut.opaqueSortCompare=Ut.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};Ut.transparentSortCompare=Ut.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var de={IDENTITY:ve(),WORLD:ve(),VIEW:ve(),PROJECTION:ve(),WORLDVIEW:ve(),VIEWPROJECTION:ve(),WORLDVIEWPROJECTION:ve(),WORLDINVERSE:ve(),VIEWINVERSE:ve(),PROJECTIONINVERSE:ve(),WORLDVIEWINVERSE:ve(),VIEWPROJECTIONINVERSE:ve(),WORLDVIEWPROJECTIONINVERSE:ve(),WORLDTRANSPOSE:ve(),VIEWTRANSPOSE:ve(),PROJECTIONTRANSPOSE:ve(),WORLDVIEWTRANSPOSE:ve(),VIEWPROJECTIONTRANSPOSE:ve(),WORLDVIEWPROJECTIONTRANSPOSE:ve(),WORLDINVERSETRANSPOSE:ve(),VIEWINVERSETRANSPOSE:ve(),PROJECTIONINVERSETRANSPOSE:ve(),WORLDVIEWINVERSETRANSPOSE:ve(),VIEWPROJECTIONINVERSETRANSPOSE:ve(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:ve()};Ut.COLOR_BUFFER_BIT=w.COLOR_BUFFER_BIT;Ut.DEPTH_BUFFER_BIT=w.DEPTH_BUFFER_BIT;Ut.STENCIL_BUFFER_BIT=w.STENCIL_BUFFER_BIT;var Xr=Ut,W=function(e,t,r){e=e||0,t=t||0,r=r||0,this.array=T.fromValues(e,t,r),this._dirty=!0};W.prototype={constructor:W,add:function(e){return T.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new W(this.x,this.y,this.z)},copy:function(e){return T.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return T.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return T.dist(this.array,e.array)},distance:function(e){return T.distance(this.array,e.array)},div:function(e){return T.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return T.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return T.dot(this.array,e.array)},len:function(){return T.len(this.array)},length:function(){return T.length(this.array)},lerp:function(e,t,r){return T.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return T.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return T.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return T.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return T.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return T.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return T.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return T.random(this.array,e),this._dirty=!0,this},scale:function(e){return T.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return T.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return T.sqrDist(this.array,e.array)},squaredDistance:function(e){return T.squaredDistance(this.array,e.array)},sqrLen:function(){return T.sqrLen(this.array)},squaredLength:function(){return T.squaredLength(this.array)},sub:function(e){return T.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return T.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return T.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return T.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return T.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var r=-1/t[2];t[0]=e[0]*t[0]*r,t[1]=e[5]*t[1]*r,t[2]=(e[10]*t[2]+e[14])*r}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){W.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){W.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var ci=Object.defineProperty;if(ci){var Nn=W.prototype;ci(Nn,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),ci(Nn,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),ci(Nn,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}W.add=function(e,t,r){return T.add(e.array,t.array,r.array),e._dirty=!0,e};W.set=function(e,t,r,i){T.set(e.array,t,r,i),e._dirty=!0};W.copy=function(e,t){return T.copy(e.array,t.array),e._dirty=!0,e};W.cross=function(e,t,r){return T.cross(e.array,t.array,r.array),e._dirty=!0,e};W.dist=function(e,t){return T.distance(e.array,t.array)};W.distance=W.dist;W.div=function(e,t,r){return T.divide(e.array,t.array,r.array),e._dirty=!0,e};W.divide=W.div;W.dot=function(e,t){return T.dot(e.array,t.array)};W.len=function(e){return T.length(e.array)};W.lerp=function(e,t,r,i){return T.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};W.min=function(e,t,r){return T.min(e.array,t.array,r.array),e._dirty=!0,e};W.max=function(e,t,r){return T.max(e.array,t.array,r.array),e._dirty=!0,e};W.mul=function(e,t,r){return T.multiply(e.array,t.array,r.array),e._dirty=!0,e};W.multiply=W.mul;W.negate=function(e,t){return T.negate(e.array,t.array),e._dirty=!0,e};W.normalize=function(e,t){return T.normalize(e.array,t.array),e._dirty=!0,e};W.random=function(e,t){return T.random(e.array,t),e._dirty=!0,e};W.scale=function(e,t,r){return T.scale(e.array,t.array,r),e._dirty=!0,e};W.scaleAndAdd=function(e,t,r,i){return T.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};W.sqrDist=function(e,t){return T.sqrDist(e.array,t.array)};W.squaredDistance=W.sqrDist;W.sqrLen=function(e){return T.sqrLen(e.array)};W.squaredLength=W.sqrLen;W.sub=function(e,t,r){return T.subtract(e.array,t.array,r.array),e._dirty=!0,e};W.subtract=W.sub;W.transformMat3=function(e,t,r){return T.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};W.transformMat4=function(e,t,r){return T.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};W.transformQuat=function(e,t,r){return T.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};function nt(e,t,r){return e<t?t:e>r?r:e}var le=Math.atan2,at=Math.asin,hr=Math.abs;W.eulerFromQuat=function(e,t,d){e._dirty=!0,t=t.array;var i=e.array,n=t[0],a=t[1],o=t[2],s=t[3],l=n*n,u=a*a,f=o*o,h=s*s,d=(d||"XYZ").toUpperCase();switch(d){case"XYZ":i[0]=le(2*(n*s-a*o),h-l-u+f),i[1]=at(nt(2*(n*o+a*s),-1,1)),i[2]=le(2*(o*s-n*a),h+l-u-f);break;case"YXZ":i[0]=at(nt(2*(n*s-a*o),-1,1)),i[1]=le(2*(n*o+a*s),h-l-u+f),i[2]=le(2*(n*a+o*s),h-l+u-f);break;case"ZXY":i[0]=at(nt(2*(n*s+a*o),-1,1)),i[1]=le(2*(a*s-o*n),h-l-u+f),i[2]=le(2*(o*s-n*a),h-l+u-f);break;case"ZYX":i[0]=le(2*(n*s+o*a),h-l-u+f),i[1]=at(nt(2*(a*s-n*o),-1,1)),i[2]=le(2*(n*a+o*s),h+l-u-f);break;case"YZX":i[0]=le(2*(n*s-o*a),h-l+u-f),i[1]=le(2*(a*s-n*o),h+l-u-f),i[2]=at(nt(2*(n*a+o*s),-1,1));break;case"XZY":i[0]=le(2*(n*s+a*o),h-l+u-f),i[1]=le(2*(n*o+a*s),h+l-u-f),i[2]=at(nt(2*(o*s-n*a),-1,1));break;default:console.warn("Unkown order: "+d)}return e};W.eulerFromMat3=function(e,t,v){var i=t.array,n=i[0],a=i[3],o=i[6],s=i[1],l=i[4],u=i[7],f=i[2],h=i[5],d=i[8],c=e.array,v=(v||"XYZ").toUpperCase();switch(v){case"XYZ":c[1]=at(nt(o,-1,1)),hr(o)<.99999?(c[0]=le(-u,d),c[2]=le(-a,n)):(c[0]=le(h,l),c[2]=0);break;case"YXZ":c[0]=at(-nt(u,-1,1)),hr(u)<.99999?(c[1]=le(o,d),c[2]=le(s,l)):(c[1]=le(-f,n),c[2]=0);break;case"ZXY":c[0]=at(nt(h,-1,1)),hr(h)<.99999?(c[1]=le(-f,d),c[2]=le(-a,l)):(c[1]=0,c[2]=le(s,n));break;case"ZYX":c[1]=at(-nt(f,-1,1)),hr(f)<.99999?(c[0]=le(h,d),c[2]=le(s,n)):(c[0]=0,c[2]=le(-a,l));break;case"YZX":c[2]=at(nt(s,-1,1)),hr(s)<.99999?(c[0]=le(-u,l),c[1]=le(-f,n)):(c[0]=0,c[1]=le(o,d));break;case"XZY":c[2]=at(-nt(a,-1,1)),hr(a)<.99999?(c[0]=le(h,l),c[1]=le(o,n)):(c[0]=le(-u,d),c[1]=0);break;default:console.warn("Unkown order: "+v)}return e._dirty=!0,e};Object.defineProperties(W,{POSITIVE_X:{get:function(){return new W(1,0,0)}},NEGATIVE_X:{get:function(){return new W(-1,0,0)}},POSITIVE_Y:{get:function(){return new W(0,1,0)}},NEGATIVE_Y:{get:function(){return new W(0,-1,0)}},POSITIVE_Z:{get:function(){return new W(0,0,1)}},NEGATIVE_Z:{get:function(){return new W(0,0,-1)}},UP:{get:function(){return new W(0,1,0)}},ZERO:{get:function(){return new W}}});var P=W,Pn=1e-5,Di=function(e,t){this.origin=e||new P,this.direction=t||new P};Di.prototype={constructor:Di,intersectPlane:function(e,t){var r=e.normal.array,i=e.distance,n=this.origin.array,a=this.direction.array,o=T.dot(r,a);if(o===0)return null;t||(t=new P);var s=(T.dot(r,n)-i)/o;return T.scaleAndAdd(t.array,n,a,-s),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=T.dot(e.normal.array,this.direction.array);T.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=T.create();return function(t){T.sub(e,t,this.origin.array);var r=T.dot(e,this.direction.array);if(r<0)return T.distance(this.origin.array,t);var i=T.lenSquared(e);return Math.sqrt(i-r*r)}}(),intersectSphere:function(){var e=T.create();return function(t,r,i){var n=this.origin.array,a=this.direction.array;t=t.array,T.sub(e,t,n);var o=T.dot(e,a),s=T.squaredLength(e),l=s-o*o,u=r*r;if(!(l>u)){var f=Math.sqrt(u-l),h=o-f,d=o+f;return i||(i=new P),h<0?d<0?null:(T.scaleAndAdd(i.array,n,a,d),i):(T.scaleAndAdd(i.array,n,a,h),i)}}}(),intersectBoundingBox:function(e,t){var r=this.direction.array,i=this.origin.array,n=e.min.array,a=e.max.array,o=1/r[0],s=1/r[1],l=1/r[2],u,f,h,d,c,v;if(o>=0?(u=(n[0]-i[0])*o,f=(a[0]-i[0])*o):(f=(n[0]-i[0])*o,u=(a[0]-i[0])*o),s>=0?(h=(n[1]-i[1])*s,d=(a[1]-i[1])*s):(d=(n[1]-i[1])*s,h=(a[1]-i[1])*s),u>d||h>f||((h>u||u!==u)&&(u=h),(d<f||f!==f)&&(f=d),l>=0?(c=(n[2]-i[2])*l,v=(a[2]-i[2])*l):(v=(n[2]-i[2])*l,c=(a[2]-i[2])*l),u>v||c>f)||((c>u||u!==u)&&(u=c),(v<f||f!==f)&&(f=v),f<0))return null;var p=u>=0?u:f;return t||(t=new P),T.scaleAndAdd(t.array,i,r,p),t},intersectTriangle:function(){var e=T.create(),t=T.create(),r=T.create(),i=T.create();return function(n,a,o,s,l,u){var f=this.direction.array,h=this.origin.array;n=n.array,a=a.array,o=o.array,T.sub(e,a,n),T.sub(t,o,n),T.cross(i,t,f);var d=T.dot(e,i);if(s){if(d>-Pn)return null}else if(d>-Pn&&d<Pn)return null;T.sub(r,h,n);var c=T.dot(i,r)/d;if(c<0||c>1)return null;T.cross(i,e,r);var v=T.dot(f,i)/d;if(v<0||v>1||c+v>1)return null;T.cross(i,e,t);var p=-T.dot(r,i)/d;return p<0?null:(l||(l=new P),u&&P.set(u,1-c-v,c,v),T.scaleAndAdd(l.array,h,f,p),l)}}(),applyTransform:function(e){P.add(this.direction,this.direction,this.origin),P.transformMat4(this.origin,this.origin,e),P.transformMat4(this.direction,this.direction,e),P.sub(this.direction,this.direction,this.origin),P.normalize(this.direction,this.direction)},copy:function(e){P.copy(this.origin,e.origin),P.copy(this.direction,e.direction)},clone:function(){var e=new Di;return e.copy(this),e}};var qi=Di,$={};$.create=function(){var e=new Ie(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};$.clone=function(e){var t=new Ie(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};$.fromValues=function(e,t,r,i){var n=new Ie(4);return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n};$.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};$.set=function(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e};$.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e};$.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e};$.sub=$.subtract;$.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e};$.mul=$.multiply;$.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e};$.div=$.divide;$.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e};$.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e};$.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e};$.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e};$.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+i*i+n*n+a*a)};$.dist=$.distance;$.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return r*r+i*i+n*n+a*a};$.sqrDist=$.squaredDistance;$.length=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return Math.sqrt(t*t+r*r+i*i+n*n)};$.len=$.length;$.squaredLength=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return t*t+r*r+i*i+n*n};$.sqrLen=$.squaredLength;$.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};$.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};$.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e};$.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};$.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e[3]=s+i*(r[3]-s),e};$.random=function(e,t){return t=t||1,e[0]=yr(),e[1]=yr(),e[2]=yr(),e[3]=yr(),$.normalize(e,e),$.scale(e,e,t),e};$.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3];return e[0]=r[0]*i+r[4]*n+r[8]*a+r[12]*o,e[1]=r[1]*i+r[5]*n+r[9]*a+r[13]*o,e[2]=r[2]*i+r[6]*n+r[10]*a+r[14]*o,e[3]=r[3]*i+r[7]*n+r[11]*a+r[15]*o,e};$.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],f=u*i+s*a-l*n,h=u*n+l*i-o*a,d=u*a+o*n-s*i,c=-o*i-s*n-l*a;return e[0]=f*u+c*-o+h*-l-d*-s,e[1]=h*u+c*-s+d*-o-f*-l,e[2]=d*u+c*-l+f*-s-h*-o,e};$.forEach=function(){var e=$.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=4),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}();var D=$,Me={};Me.create=function(){var e=new Ie(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Me.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};Me.clone=function(e){var t=new Ie(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};Me.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Me.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Me.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=n}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};Me.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8],h=f*o-s*u,d=-f*a+s*l,c=u*a-o*l,v=r*h+i*d+n*c;return v?(v=1/v,e[0]=h*v,e[1]=(-f*i+n*u)*v,e[2]=(s*i-n*o)*v,e[3]=d*v,e[4]=(f*r-n*l)*v,e[5]=(-s*r+n*a)*v,e[6]=c*v,e[7]=(-u*r+i*l)*v,e[8]=(o*r-i*a)*v,e):null};Me.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8];return e[0]=o*f-s*u,e[1]=n*u-i*f,e[2]=i*s-n*o,e[3]=s*l-a*f,e[4]=r*f-n*l,e[5]=n*a-r*s,e[6]=a*u-o*l,e[7]=i*l-r*u,e[8]=r*o-i*a,e};Me.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8];return t*(u*a-o*l)+r*(-u*n+o*s)+i*(l*n-a*s)};Me.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],f=t[7],h=t[8],d=r[0],c=r[1],v=r[2],p=r[3],_=r[4],m=r[5],x=r[6],g=r[7],y=r[8];return e[0]=d*i+c*o+v*u,e[1]=d*n+c*s+v*f,e[2]=d*a+c*l+v*h,e[3]=p*i+_*o+m*u,e[4]=p*n+_*s+m*f,e[5]=p*a+_*l+m*h,e[6]=x*i+g*o+y*u,e[7]=x*n+g*s+y*f,e[8]=x*a+g*l+y*h,e};Me.mul=Me.multiply;Me.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],f=t[7],h=t[8],d=r[0],c=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=s,e[5]=l,e[6]=d*i+c*o+u,e[7]=d*n+c*s+f,e[8]=d*a+c*l+h,e};Me.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],f=t[7],h=t[8],d=Math.sin(r),c=Math.cos(r);return e[0]=c*i+d*o,e[1]=c*n+d*s,e[2]=c*a+d*l,e[3]=c*o-d*i,e[4]=c*s-d*n,e[5]=c*l-d*a,e[6]=u,e[7]=f,e[8]=h,e};Me.scale=function(e,t,r){var i=r[0],n=r[1];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Me.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};Me.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,u=r*o,f=i*o,h=i*s,d=n*o,c=n*s,v=n*l,p=a*o,_=a*s,m=a*l;return e[0]=1-h-v,e[3]=f-m,e[6]=d+_,e[1]=f+m,e[4]=1-u-v,e[7]=c-p,e[2]=d-_,e[5]=c+p,e[8]=1-u-h,e};Me.normalFromMat4=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],f=t[8],h=t[9],d=t[10],c=t[11],v=t[12],p=t[13],_=t[14],m=t[15],x=r*s-i*o,g=r*l-n*o,y=r*u-a*o,E=i*l-n*s,S=i*u-a*s,b=n*u-a*l,A=f*p-h*v,M=f*_-d*v,O=f*m-c*v,L=h*_-d*p,U=h*m-c*p,F=d*m-c*_,N=x*F-g*U+y*L+E*O-S*M+b*A;return N?(N=1/N,e[0]=(s*F-l*U+u*L)*N,e[1]=(l*O-o*F-u*M)*N,e[2]=(o*U-s*O+u*A)*N,e[3]=(n*U-i*F-a*L)*N,e[4]=(r*F-n*O+a*M)*N,e[5]=(i*O-r*U-a*A)*N,e[6]=(p*b-_*S+m*E)*N,e[7]=(_*y-v*b-m*g)*N,e[8]=(v*S-p*y+m*x)*N,e):null};Me.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};var ee=Me,ie={};ie.create=function(){var e=new Ie(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};ie.rotationTo=function(){var e=T.create(),t=T.fromValues(1,0,0),r=T.fromValues(0,1,0);return function(i,n,a){var o=T.dot(n,a);return o<-.999999?(T.cross(e,t,n),T.length(e)<1e-6&&T.cross(e,r,n),T.normalize(e,e),ie.setAxisAngle(i,e,Math.PI),i):o>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(T.cross(e,n,a),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=1+o,ie.normalize(i,i))}}();ie.setAxes=function(){var e=ee.create();return function(t,r,i,n){return e[0]=i[0],e[3]=i[1],e[6]=i[2],e[1]=n[0],e[4]=n[1],e[7]=n[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],ie.normalize(t,ie.fromMat3(t,e))}}();ie.clone=D.clone;ie.fromValues=D.fromValues;ie.copy=D.copy;ie.set=D.set;ie.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};ie.setAxisAngle=function(e,t,r){r=r*.5;var i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e};ie.add=D.add;ie.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],f=r[3];return e[0]=i*f+o*s+n*u-a*l,e[1]=n*f+o*l+a*s-i*u,e[2]=a*f+o*u+i*l-n*s,e[3]=o*f-i*s-n*l-a*u,e};ie.mul=ie.multiply;ie.scale=D.scale;ie.rotateX=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+o*s,e[1]=n*l+a*s,e[2]=a*l-n*s,e[3]=o*l-i*s,e};ie.rotateY=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l-a*s,e[1]=n*l+o*s,e[2]=a*l+i*s,e[3]=o*l-n*s,e};ie.rotateZ=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+n*s,e[1]=n*l-i*s,e[2]=a*l+o*s,e[3]=o*l-a*s,e};ie.calculateW=function(e,t){var r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e};ie.dot=D.dot;ie.lerp=D.lerp;ie.slerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3],l=r[0],u=r[1],f=r[2],h=r[3],d,c,v,p,_;return c=n*l+a*u+o*f+s*h,c<0&&(c=-c,l=-l,u=-u,f=-f,h=-h),1-c>1e-6?(d=Math.acos(c),v=Math.sin(d),p=Math.sin((1-i)*d)/v,_=Math.sin(i*d)/v):(p=1-i,_=i),e[0]=p*n+_*l,e[1]=p*a+_*u,e[2]=p*o+_*f,e[3]=p*s+_*h,e};ie.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a,s=o?1/o:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-n*s,e[3]=a*s,e};ie.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};ie.length=D.length;ie.len=ie.length;ie.squaredLength=D.squaredLength;ie.sqrLen=ie.squaredLength;ie.normalize=D.normalize;ie.fromMat3=function(e,t){var r=t[0]+t[4]+t[8],i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{var n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);var a=(n+1)%3,o=(n+2)%3;i=Math.sqrt(t[n*3+n]-t[a*3+a]-t[o*3+o]+1),e[n]=.5*i,i=.5/i,e[3]=(t[a*3+o]-t[o*3+a])*i,e[a]=(t[a*3+n]+t[n*3+a])*i,e[o]=(t[o*3+n]+t[n*3+o])*i}return e};var j=ie,he=function(){this._axisX=new P,this._axisY=new P,this._axisZ=new P,this.array=C.create(),this._dirty=!0};he.prototype={constructor:he,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return C.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new he().copy(this)},copy:function(e){return C.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return C.determinant(this.array)},fromQuat:function(e){return C.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return C.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return he.fromMat2d(this,e),this},frustum:function(e,t,r,i,n,a){return C.frustum(this.array,e,t,r,i,n,a),this._dirty=!0,this},identity:function(){return C.identity(this.array),this._dirty=!0,this},invert:function(){return C.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,r){return C.lookAt(this.array,e.array,t.array,r.array),this._dirty=!0,this},mul:function(e){return C.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return C.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return C.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return C.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,r,i,n,a){return C.ortho(this.array,e,t,r,i,n,a),this._dirty=!0,this},perspective:function(e,t,r,i){return C.perspective(this.array,e,t,r,i),this._dirty=!0,this},rotate:function(e,t){return C.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return C.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return C.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return C.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return C.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return C.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return C.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=T.create(),t=T.create(),r=T.create(),i=ee.create();return function(n,a,o){var s=this.array;T.set(e,s[0],s[1],s[2]),T.set(t,s[4],s[5],s[6]),T.set(r,s[8],s[9],s[10]);var l=T.length(e),u=T.length(t),f=T.length(r),h=this.determinant();h<0&&(l=-l),n&&n.set(l,u,f),o.set(s[12],s[13],s[14]),ee.fromMat4(i,s),i[0]/=l,i[1]/=l,i[2]/=l,i[3]/=u,i[4]/=u,i[5]/=u,i[6]/=f,i[7]/=f,i[8]/=f,j.fromMat3(a.array,i),j.normalize(a.array,a.array),a._dirty=!0,o._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var di=Object.defineProperty;if(di){var Dn=he.prototype;di(Dn,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),di(Dn,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),di(Dn,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}he.adjoint=function(e,t){return C.adjoint(e.array,t.array),e._dirty=!0,e};he.copy=function(e,t){return C.copy(e.array,t.array),e._dirty=!0,e};he.determinant=function(e){return C.determinant(e.array)};he.identity=function(e){return C.identity(e.array),e._dirty=!0,e};he.ortho=function(e,t,r,i,n,a,o){return C.ortho(e.array,t,r,i,n,a,o),e._dirty=!0,e};he.perspective=function(e,t,r,i,n){return C.perspective(e.array,t,r,i,n),e._dirty=!0,e};he.lookAt=function(e,t,r,i){return C.lookAt(e.array,t.array,r.array,i.array),e._dirty=!0,e};he.invert=function(e,t){return C.invert(e.array,t.array),e._dirty=!0,e};he.mul=function(e,t,r){return C.mul(e.array,t.array,r.array),e._dirty=!0,e};he.multiply=he.mul;he.fromQuat=function(e,t){return C.fromQuat(e.array,t.array),e._dirty=!0,e};he.fromRotationTranslation=function(e,t,r){return C.fromRotationTranslation(e.array,t.array,r.array),e._dirty=!0,e};he.fromMat2d=function(i,r){i._dirty=!0;var r=r.array,i=i.array;return i[0]=r[0],i[4]=r[2],i[12]=r[4],i[1]=r[1],i[5]=r[3],i[13]=r[5],i};he.rotate=function(e,t,r,i){return C.rotate(e.array,t.array,r,i.array),e._dirty=!0,e};he.rotateX=function(e,t,r){return C.rotateX(e.array,t.array,r),e._dirty=!0,e};he.rotateY=function(e,t,r){return C.rotateY(e.array,t.array,r),e._dirty=!0,e};he.rotateZ=function(e,t,r){return C.rotateZ(e.array,t.array,r),e._dirty=!0,e};he.scale=function(e,t,r){return C.scale(e.array,t.array,r.array),e._dirty=!0,e};he.transpose=function(e,t){return C.transpose(e.array,t.array),e._dirty=!0,e};he.translate=function(e,t,r){return C.translate(e.array,t.array,r.array),e._dirty=!0,e};var z=he,se=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i===void 0?1:i,this.array=j.fromValues(e,t,r,i),this._dirty=!0};se.prototype={constructor:se,add:function(e){return j.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return j.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new se(this.x,this.y,this.z,this.w)},conjugate:function(){return j.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return j.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return j.dot(this.array,e.array)},fromMat3:function(e){return j.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=ee.create();return function(t){return ee.fromMat4(e,t.array),ee.transpose(e,e),j.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return j.identity(this.array),this._dirty=!0,this},invert:function(){return j.invert(this.array,this.array),this._dirty=!0,this},len:function(){return j.len(this.array)},length:function(){return j.length(this.array)},lerp:function(e,t,r){return j.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},mul:function(e){return j.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return j.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return j.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return j.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return j.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return j.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return j.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return j.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return j.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,r){return j.setAxes(this.array,e.array,t.array,r.array),this._dirty=!0,this},setAxisAngle:function(e,t){return j.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,r){return j.slerp(this.array,e.array,t.array,r),this._dirty=!0,this},sqrLen:function(){return j.sqrLen(this.array)},squaredLength:function(){return j.squaredLength(this.array)},fromEuler:function(e,t){return se.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Dr=Object.defineProperty;if(Dr){var vi=se.prototype;Dr(vi,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Dr(vi,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Dr(vi,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Dr(vi,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}se.add=function(e,t,r){return j.add(e.array,t.array,r.array),e._dirty=!0,e};se.set=function(e,t,r,i,n){j.set(e.array,t,r,i,n),e._dirty=!0};se.copy=function(e,t){return j.copy(e.array,t.array),e._dirty=!0,e};se.calculateW=function(e,t){return j.calculateW(e.array,t.array),e._dirty=!0,e};se.conjugate=function(e,t){return j.conjugate(e.array,t.array),e._dirty=!0,e};se.identity=function(e){return j.identity(e.array),e._dirty=!0,e};se.invert=function(e,t){return j.invert(e.array,t.array),e._dirty=!0,e};se.dot=function(e,t){return j.dot(e.array,t.array)};se.len=function(e){return j.length(e.array)};se.lerp=function(e,t,r,i){return j.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};se.slerp=function(e,t,r,i){return j.slerp(e.array,t.array,r.array,i),e._dirty=!0,e};se.mul=function(e,t,r){return j.multiply(e.array,t.array,r.array),e._dirty=!0,e};se.multiply=se.mul;se.rotateX=function(e,t,r){return j.rotateX(e.array,t.array,r),e._dirty=!0,e};se.rotateY=function(e,t,r){return j.rotateY(e.array,t.array,r),e._dirty=!0,e};se.rotateZ=function(e,t,r){return j.rotateZ(e.array,t.array,r),e._dirty=!0,e};se.setAxisAngle=function(e,t,r){return j.setAxisAngle(e.array,t.array,r),e._dirty=!0,e};se.normalize=function(e,t){return j.normalize(e.array,t.array),e._dirty=!0,e};se.sqrLen=function(e){return j.sqrLen(e.array)};se.squaredLength=se.sqrLen;se.fromMat3=function(e,t){return j.fromMat3(e.array,t.array),e._dirty=!0,e};se.setAxes=function(e,t,r,i){return j.setAxes(e.array,t.array,r.array,i.array),e._dirty=!0,e};se.rotationTo=function(e,t,r){return j.rotationTo(e.array,t.array,r.array),e._dirty=!0,e};se.fromEuler=function(e,t,f){e._dirty=!0,t=t.array;var i=e.array,n=Math.cos(t[0]/2),a=Math.cos(t[1]/2),o=Math.cos(t[2]/2),s=Math.sin(t[0]/2),l=Math.sin(t[1]/2),u=Math.sin(t[2]/2),f=(f||"XYZ").toUpperCase();switch(f){case"XYZ":i[0]=s*a*o+n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o-s*l*u;break;case"YXZ":i[0]=s*a*o+n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o+s*l*u;break;case"ZXY":i[0]=s*a*o-n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o-s*l*u;break;case"ZYX":i[0]=s*a*o-n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o+s*l*u;break;case"YZX":i[0]=s*a*o+n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o-s*l*u;break;case"XZY":i[0]=s*a*o-n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o+s*l*u;break}};var tl=se,Dt=T.set,pi=T.copy,Ii=function(e,t){this.min=e||new P(1/0,1/0,1/0),this.max=t||new P(-1/0,-1/0,-1/0),this.vertices=null};Ii.prototype={constructor:Ii,updateFromVertices:function(e){if(e.length>0){var t=this.min,r=this.max,i=t.array,n=r.array;pi(i,e[0]),pi(n,e[0]);for(var a=1;a<e.length;a++){var o=e[a];o[0]<i[0]&&(i[0]=o[0]),o[1]<i[1]&&(i[1]=o[1]),o[2]<i[2]&&(i[2]=o[2]),o[0]>n[0]&&(n[0]=o[0]),o[1]>n[1]&&(n[1]=o[1]),o[2]>n[2]&&(n[2]=o[2])}t._dirty=!0,r._dirty=!0}},union:function(e){var t=this.min,r=this.max;return T.min(t.array,t.array,e.min.array),T.max(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersection:function(e){var t=this.min,r=this.max;return T.max(t.array,t.array,e.min.array),T.min(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return!(t[0]>n[0]||t[1]>n[1]||t[2]>n[2]||r[0]<i[0]||r[1]<i[1]||r[2]<i[2])},containBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=n[0]&&r[1]>=n[1]&&r[2]>=n[2]},containPoint:function(e){var t=this.min.array,r=this.max.array,i=e.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=T.create(),t=T.create(),r=T.create(),i=T.create(),n=T.create(),a=T.create();return function(o,s){var l=o.min.array,u=o.max.array,f=s.array;return e[0]=f[0]*l[0],e[1]=f[1]*l[0],e[2]=f[2]*l[0],t[0]=f[0]*u[0],t[1]=f[1]*u[0],t[2]=f[2]*u[0],r[0]=f[4]*l[1],r[1]=f[5]*l[1],r[2]=f[6]*l[1],i[0]=f[4]*u[1],i[1]=f[5]*u[1],i[2]=f[6]*u[1],n[0]=f[8]*l[2],n[1]=f[9]*l[2],n[2]=f[10]*l[2],a[0]=f[8]*u[2],a[1]=f[9]*u[2],a[2]=f[10]*u[2],l=this.min.array,u=this.max.array,l[0]=Math.min(e[0],t[0])+Math.min(r[0],i[0])+Math.min(n[0],a[0])+f[12],l[1]=Math.min(e[1],t[1])+Math.min(r[1],i[1])+Math.min(n[1],a[1])+f[13],l[2]=Math.min(e[2],t[2])+Math.min(r[2],i[2])+Math.min(n[2],a[2])+f[14],u[0]=Math.max(e[0],t[0])+Math.max(r[0],i[0])+Math.max(n[0],a[0])+f[12],u[1]=Math.max(e[1],t[1])+Math.max(r[1],i[1])+Math.max(n[1],a[1])+f[13],u[2]=Math.max(e[2],t[2])+Math.max(r[2],i[2])+Math.max(n[2],a[2])+f[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,r=this.max.array,i=e.array,n=t[0],a=t[1],o=t[2],s=r[0],l=r[1],u=t[2],f=r[0],h=r[1],d=r[2];if(i[15]===1)t[0]=i[0]*n+i[12],t[1]=i[5]*a+i[13],r[2]=i[10]*o+i[14],r[0]=i[0]*f+i[12],r[1]=i[5]*h+i[13],t[2]=i[10]*d+i[14];else{var c=-1/o;t[0]=i[0]*n*c,t[1]=i[5]*a*c,r[2]=(i[10]*o+i[14])*c,c=-1/u,r[0]=i[0]*s*c,r[1]=i[5]*l*c,c=-1/d,t[2]=(i[10]*d+i[14])*c}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=T.fromValues(0,0,0);this.vertices=e}var r=this.min.array,i=this.max.array;return Dt(e[0],r[0],r[1],r[2]),Dt(e[1],r[0],i[1],r[2]),Dt(e[2],i[0],r[1],r[2]),Dt(e[3],i[0],i[1],r[2]),Dt(e[4],r[0],r[1],i[2]),Dt(e[5],r[0],i[1],i[2]),Dt(e[6],i[0],r[1],i[2]),Dt(e[7],i[0],i[1],i[2]),this},copy:function(e){var t=this.min,r=this.max;return pi(t.array,e.min.array),pi(r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},clone:function(){var e=new Ii;return e.copy(this),e}};var Ge=Ii,zh=0,Vh=Ke.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+zh++),this.position||(this.position=new P),this.rotation||(this.rotation=new tl),this.scale||(this.scale=new P(1,1,1)),this.worldTransform=new z,this.localTransform=new z,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var r=t._nodeRepository;delete r[this.name],r[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var r=this._scene;r&&r!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,r=t.indexOf(e);r<0||(t.splice(r,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,r=0;r<t.length;r++)if(t[r].name===e)return t[r]},getDescendantByName:function(e){for(var t=this._children,r=0;r<t.length;r++){var i=t[r];if(i.name===e)return i;var n=i.getDescendantByName(e);if(n)return n}},queryNode:function(e){if(!!e){for(var t=e.split("/"),r=this,i=0;i<t.length;i++){var n=t[i];if(!!n){for(var a=!1,o=r._children,s=0;s<o.length;s++){var l=o[s];if(l.name===n){r=l,a=!0;break}}if(!a)return}}return r}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,r=this.name;t._parent&&(r=t.name+"/"+r,t._parent!=e);)t=t._parent;return!t._parent&&e?null:r},traverse:function(e,t){e.call(t,this);for(var r=this._children,i=0,n=r.length;i<n;i++)r[i].traverse(e,t)},eachChild:function(e,t){for(var r=this._children,i=0,n=r.length;i<n;i++){var a=r[i];e.call(t,a,i)}},setLocalTransform:function(e){C.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){C.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=C.create();return function(t){var r=this.localTransform,i=this.worldTransform;this._parent?(C.invert(e,this._parent.worldTransform.array),C.multiply(r.array,e,i.array)):C.copy(r.array,i.array);var n=t?null:this.scale;r.decomposeMatrix(n,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var i=this.localTransform.array;C.fromRotationTranslation(i,t.array,e.array),C.scale(i,i,r.array),t._dirty=!1,r._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?C.multiplyAffine(t,this._parent.worldTransform.array,e):C.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,r=0,i=t.length;r<i;r++)t[r].update(e)},getBoundingBox:function(){function e(n){return!n.invisible&&n.geometry}var t=new Ge,r=new z,i=new z;return function(n,a){return a=a||new Ge,this._parent?z.invert(i,this._parent.worldTransform):z.identity(i),this.traverse(function(o){o.geometry&&o.geometry.boundingBox&&(t.copy(o.geometry.boundingBox),z.multiply(r,i,o.worldTransform),t.applyTransform(r),a.union(t))},this,e),a}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var r=e.array;return r[0]=t[12],r[1]=t[13],r[2]=t[14],e}else return new P(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var r=0;r<t.length;r++)e.add(t[r].clone());return e},rotateAround:function(){var e=new P,t=new z;return function(r,i,n){e.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(n,i),t.fromRotationTranslation(this.rotation,e),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new z;return function(t,r){e.lookAt(this.position,t,r||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()}),Et=Vh,tt=Et.extend({material:null,geometry:null,mode:w.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:w.BACK,frontFace:w.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=Et.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=Et.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var r=0;r<e.length;r++){var i=e[r];t[i]!==this[i]&&(t[i]=this[i])}return t}}()});tt.POINTS=w.POINTS;tt.LINES=w.LINES;tt.LINE_LOOP=w.LINE_LOOP;tt.LINE_STRIP=w.LINE_STRIP;tt.TRIANGLES=w.TRIANGLES;tt.TRIANGLE_STRIP=w.TRIANGLE_STRIP;tt.TRIANGLE_FAN=w.TRIANGLE_FAN;tt.BACK=w.BACK;tt.FRONT=w.FRONT;tt.FRONT_AND_BACK=w.FRONT_AND_BACK;tt.CW=w.CW;tt.CCW=w.CCW;var ha=tt,Na=Ke.extend({scene:null,camera:null,renderer:null},function(){this._ray=new qi,this._ndc=new et},{pick:function(e,t,r){var i=this.pickAll(e,t,[],r);return i[0]||null},pickAll:function(e,t,r,i){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,i||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(e,t,r){e instanceof ha&&e.isRenderable()&&(!e.ignorePicking||r)&&(e.mode===w.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var i=0;i<e._children.length;i++)this._intersectNode(e._children[i],t,r)},_intersectRenderable:function(){var e=new P,t=new P,r=new P,i=new qi,n=new z;return function(a,o){var s=a.isSkinnedMesh();i.copy(this._ray),z.invert(n,a.worldTransform),s||i.applyTransform(n);var l=a.geometry,u=s?a.skeleton.boundingBox:l.boundingBox;if(!(u&&!i.intersectBoundingBox(u))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,o);return}else if(l.pickByRay){l.pickByRay(i,a,o);return}var f=a.cullFace===w.BACK&&a.frontFace===w.CCW||a.cullFace===w.FRONT&&a.frontFace===w.CW,h,d=l.indices,c=l.attributes.position,v=l.attributes.weight,p=l.attributes.joint,_,m=[];if(!(!c||!c.value||!d)){if(s){_=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var x=0;x<a.joints.length;x++){m[x]=m[x]||[];for(var g=0;g<16;g++)m[x][g]=_[x*16+g]}var y=[],E=[],S=[],b=[],A=[],M=l.attributes.skinnedPosition;(!M||!M.value)&&(l.createAttribute("skinnedPosition","f",3),M=l.attributes.skinnedPosition,M.init(l.vertexCount));for(var x=0;x<l.vertexCount;x++){c.get(x,y),v.get(x,E),p.get(x,S),E[3]=1-E[0]-E[1]-E[2],T.set(b,0,0,0);for(var g=0;g<4;g++)S[g]>=0&&E[g]>1e-4&&(T.transformMat4(A,y,m[S[g]]),T.scaleAndAdd(b,b,A,E[g]));M.set(x,b)}}for(var x=0;x<d.length;x+=3){var O=d[x],L=d[x+1],U=d[x+2],F=s?l.attributes.skinnedPosition:c;if(F.get(O,e.array),F.get(L,t.array),F.get(U,r.array),f?h=i.intersectTriangle(e,t,r,a.culling):h=i.intersectTriangle(e,r,t,a.culling),h){var N=new P;s?P.copy(N,h):P.transformMat4(N,h,a.worldTransform),o.push(new Na.Intersection(h,N,a,[O,L,U],x/3,P.dist(N,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});Na.Intersection=function(e,t,r,i,n,a){this.point=e,this.pointWorld=t,this.target=r,this.triangle=i,this.triangleIndex=n,this.distance=a};var Gh=Na,Ir="__dt__",ji=function(){this._contextId=0,this._caches=[],this._context={}};ji.prototype={use:function(e,t){var r=this._caches;r[e]||(r[e]={},t&&(r[e]=t())),this._contextId=e,this._context=r[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=Ir+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=Ir+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!0)},fresh:function(e){e=e||"";var t=Ir+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=Ir+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!1)},isDirty:function(e){e=e||"";var t=Ir+e,r=this._context;return!r.hasOwnProperty(t)||r[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var r=Object.keys(this._caches);r.forEach(function(i){e&&e.call(t,i)})},miss:function(e){return!this._context.hasOwnProperty(e)}};ji.prototype.constructor=ji;var Pa=ji,te=Ke.extend({width:512,height:512,type:w.UNSIGNED_BYTE,format:w.RGBA,wrapS:w.REPEAT,wrapT:w.REPEAT,minFilter:w.LINEAR_MIPMAP_LINEAR,magFilter:w.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new Pa},{getWebGLTexture:function(e){var t=e.gl,r=this._cache;return r.use(e.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):r.isDirty()&&(this.update(e),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===w.DEPTH_COMPONENT&&(this.useMipmap=!1);var r=e.getGLExtension("EXT_sRGB");this.format===te.SRGB&&!r&&(this.format=te.RGB),this.format===te.SRGB_ALPHA&&!r&&(this.format=te.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?w.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?w.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===w.NEAREST_MIPMAP_NEAREST||e===w.NEAREST_MIPMAP_LINEAR?w.NEAREST:e===w.LINEAR_MIPMAP_LINEAR||e===w.LINEAR_MIPMAP_NEAREST?w.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("webgl_texture");r&&e.gl.deleteTexture(r),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(te.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(te.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});te.BYTE=w.BYTE;te.UNSIGNED_BYTE=w.UNSIGNED_BYTE;te.SHORT=w.SHORT;te.UNSIGNED_SHORT=w.UNSIGNED_SHORT;te.INT=w.INT;te.UNSIGNED_INT=w.UNSIGNED_INT;te.FLOAT=w.FLOAT;te.HALF_FLOAT=36193;te.UNSIGNED_INT_24_8_WEBGL=34042;te.DEPTH_COMPONENT=w.DEPTH_COMPONENT;te.DEPTH_STENCIL=w.DEPTH_STENCIL;te.ALPHA=w.ALPHA;te.RGB=w.RGB;te.RGBA=w.RGBA;te.LUMINANCE=w.LUMINANCE;te.LUMINANCE_ALPHA=w.LUMINANCE_ALPHA;te.SRGB=35904;te.SRGB_ALPHA=35906;te.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;te.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;te.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;te.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;te.NEAREST=w.NEAREST;te.LINEAR=w.LINEAR;te.NEAREST_MIPMAP_NEAREST=w.NEAREST_MIPMAP_NEAREST;te.LINEAR_MIPMAP_NEAREST=w.LINEAR_MIPMAP_NEAREST;te.NEAREST_MIPMAP_LINEAR=w.NEAREST_MIPMAP_LINEAR;te.LINEAR_MIPMAP_LINEAR=w.LINEAR_MIPMAP_LINEAR;te.REPEAT=w.REPEAT;te.CLAMP_TO_EDGE=w.CLAMP_TO_EDGE;te.MIRRORED_REPEAT=w.MIRRORED_REPEAT;var Y=te,rt=ha.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=ha.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});rt.POINTS=w.POINTS;rt.LINES=w.LINES;rt.LINE_LOOP=w.LINE_LOOP;rt.LINE_STRIP=w.LINE_STRIP;rt.TRIANGLES=w.TRIANGLES;rt.TRIANGLE_STRIP=w.TRIANGLE_STRIP;rt.TRIANGLE_FAN=w.TRIANGLE_FAN;rt.BACK=w.BACK;rt.FRONT=w.FRONT;rt.FRONT_AND_BACK=w.FRONT_AND_BACK;rt.CW=w.CW;rt.CCW=w.CCW;var Da=rt,an={};an.isPowerOfTwo=function(e){return(e&e-1)===0};an.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};an.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};var rl=an,Xo=rl.isPowerOfTwo;function qo(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function kh(e,t){var r=qo(e.width),i=qo(e.height);t=t||document.createElement("canvas"),t.width=r,t.height=i;var n=t.getContext("2d");return n.drawImage(e.image,0,0,r,i),t}var Ia=Y.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type,n=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===Y.REPEAT||this.wrapT===Y.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,n?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,n?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n?this.minFilter:this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var o=e.getGLExtension("OES_texture_half_float");o||(i=w.FLOAT)}if(this.mipmaps.length)for(var s=this.width,l=this.height,u=0;u<this.mipmaps.length;u++){var f=this.mipmaps[u];this._updateTextureData(t,f,u,s,l,r,i,!1),s/=2,l/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i,n),this.useMipmap&&(!this.NPOT||n)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,r,i,n,a,o,s){if(t.image){var l=t.image;s&&(this._potCanvas=kh(this,this._potCanvas),l=this._potCanvas),e.texImage2D(e.TEXTURE_2D,r,a,a,o,l)}else a<=Y.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=Y.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,r,a,i,n,0,t.pixels):e.texImage2D(e.TEXTURE_2D,r,a,i,n,0,a,o,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return Xo(this.width)&&Xo(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var r=we.createImage();t&&(r.crossOrigin=t);var i=this;return r.onload=function(){i.dirty(),i.trigger("success",i)},r.onerror=function(){i.trigger("error",i)},r.src=e,this.image=r,this}});Object.defineProperty(Ia.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(Ia.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});var ae=Ia;function il(e){return{byte:we.Int8Array,ubyte:we.Uint8Array,short:we.Int16Array,ushort:we.Uint16Array}[e]||we.Float32Array}function In(e){return"attr_"+e}function Sr(e,t,r,i){switch(this.name=e,this.type=t,this.size=r,this.semantic=i||"",this.value=null,r){case 1:this.get=function(n){return this.value[n]},this.set=function(n,a){this.value[n]=a},this.copy=function(n,a){this.value[n]=this.value[n]};break;case 2:this.get=function(n,a){var o=this.value;return a[0]=o[n*2],a[1]=o[n*2+1],a},this.set=function(n,a){var o=this.value;o[n*2]=a[0],o[n*2+1]=a[1]},this.copy=function(n,a){var o=this.value;a*=2,n*=2,o[n]=o[a],o[n+1]=o[a+1]};break;case 3:this.get=function(n,a){var o=n*3,s=this.value;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a},this.set=function(n,a){var o=n*3,s=this.value;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2]},this.copy=function(n,a){var o=this.value;a*=3,n*=3,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2]};break;case 4:this.get=function(n,a){var o=this.value,s=n*4;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a[3]=o[s+3],a},this.set=function(n,a){var o=this.value,s=n*4;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2],o[s+3]=a[3]},this.copy=function(n,a){var o=this.value;a*=4,n*=4,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2],o[n+3]=o[a+3]}}}Sr.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=il(this.type);this.value=new t(e*this.size)}};Sr.prototype.fromArray=function(e){var t=il(this.type),r;if(e[0]&&e[0].length){var i=0,n=this.size;r=new t(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)r[i++]=e[a][o]}else r=new t(e);this.value=r};Sr.prototype.clone=function(e){var t=new Sr(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function nl(e,t,r,i,n){this.name=e,this.type=t,this.buffer=r,this.size=i,this.semantic=n,this.symbol="",this.needsRemove=!1}function al(e){this.buffer=e,this.count=0}var Lt=Ke.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new Pa,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(In(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var r=this.indices;return t[0]=r[e*3],t[1]=r[e*3+1],t[2]=r[e*3+2],t}},setTriangleIndices:function(e,t){var r=this.indices;r[e*3]=t[0],r[e*3+1]=t[1],r[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,r=this.vertexCount>65535?we.Uint32Array:we.Uint16Array;if(e[0]&&e[0].length){var i=0,n=3;t=new r(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)t[i++]=e[a][o]}else t=new r(e);this.indices=t},createAttribute:function(e,t,r,i){var n=new Sr(e,t,r,i);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=n,this._attributeList.push(e),n},removeAttribute:function(e){var t=this._attributeList,r=t.indexOf(e);return r>=0?(t.splice(r,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var r=[],i=this.vertexCount,n=0;n<t.length;n++){var a=t[n],o=this.attributes[a];o.value&&o.value.length===i*o.size&&r.push(a)}return this._enabledAttributes=r,r},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var r=t.isDirty("attributes"),i=t.isDirty("indices");if(r||i){this._updateBuffer(e.gl,r,i);for(var n=this.getEnabledAttributes(),a=0;a<n.length;a++)t.fresh(In(n[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,r){var i=this._cache,n=i.get("chunks"),a=!1;n||(n=[],n[0]={attributeBuffers:[],indicesBuffer:null},i.put("chunks",n),a=!0);var o=n[0],s=o.attributeBuffers,l=o.indicesBuffer;if(t||a){var u=this.getEnabledAttributes(),f={};if(!a)for(var h=0;h<s.length;h++)f[s[h].name]=s[h];for(var d=0;d<u.length;d++){var c=u[d],v=this.attributes[c],p;a||(p=f[c]);var _;p?_=p.buffer:_=e.createBuffer(),i.isDirty(In(c))&&(e.bindBuffer(e.ARRAY_BUFFER,_),e.bufferData(e.ARRAY_BUFFER,v.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),s[d]=new nl(c,v.type,_,v.size,v.semantic)}for(var h=d;h<s.length;h++)e.deleteBuffer(s[h].buffer);s.length=d}this.isUseIndices()&&(r||a)&&(l||(l=new al(e.createBuffer()),o.indicesBuffer=l),l.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(Lt.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(Lt.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));Lt.STATIC_DRAW=w.STATIC_DRAW;Lt.DYNAMIC_DRAW=w.DYNAMIC_DRAW;Lt.STREAM_DRAW=w.STREAM_DRAW;Lt.AttributeBuffer=nl;Lt.IndicesBuffer=al;Lt.Attribute=Sr;var ar=Lt,Ve=T.create,cr=T.add,kt=T.set,yt=ar.Attribute,or=ar.extend(function(){return{attributes:{position:new yt("position","float",3,"POSITION"),texcoord0:new yt("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new yt("texcoord1","float",2,"TEXCOORD_1"),normal:new yt("normal","float",3,"NORMAL"),tangent:new yt("tangent","float",4,"TANGENT"),color:new yt("color","float",4,"COLOR"),weight:new yt("weight","float",3,"WEIGHT"),joint:new yt("joint","float",4,"JOINT"),barycentric:new yt("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new Ge);var t=this.attributes.position.value;if(t&&t.length){var r=e.min,i=e.max,n=r.array,a=i.array;T.set(n,t[0],t[1],t[2]),T.set(a,t[0],t[1],t[2]);for(var o=3;o<t.length;){var s=t[o++],l=t[o++],u=t[o++];s<n[0]&&(n[0]=s),l<n[1]&&(n[1]=l),u<n[2]&&(n[2]=u),s>a[0]&&(a[0]=s),l>a[1]&&(a[1]=l),u>a[2]&&(a[2]=u)}r._dirty=!0,i._dirty=!0}},generateVertexNormals:function(){if(!!this.vertexCount){var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value;if(!i||i.length!==r.length)i=t.normal.value=new we.Float32Array(r.length);else for(var n=0;n<i.length;n++)i[n]=0;for(var a=Ve(),o=Ve(),s=Ve(),l=Ve(),u=Ve(),f=Ve(),h=e?e.length:this.vertexCount,d,c,v,p=0;p<h;){e?(d=e[p++],c=e[p++],v=e[p++]):(d=p++,c=p++,v=p++),kt(a,r[d*3],r[d*3+1],r[d*3+2]),kt(o,r[c*3],r[c*3+1],r[c*3+2]),kt(s,r[v*3],r[v*3+1],r[v*3+2]),T.sub(l,a,o),T.sub(u,o,s),T.cross(f,l,u);for(var n=0;n<3;n++)i[d*3+n]=i[d*3+n]+f[n],i[c*3+n]=i[c*3+n]+f[n],i[v*3+n]=i[v*3+n]+f[n]}for(var n=0;n<i.length;)kt(f,i[n],i[n+1],i[n+2]),T.normalize(f,f),i[n++]=f[0],i[n++]=f[1],i[n++]=f[2];this.dirty()}},generateFaceNormals:function(){if(!!this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value,n=Ve(),a=Ve(),o=Ve(),s=Ve(),l=Ve(),u=Ve();i||(i=t.normal.value=new Float32Array(r.length));for(var f=e?e.length:this.vertexCount,h,d,c,v=0;v<f;){e?(h=e[v++],d=e[v++],c=e[v++]):(h=v++,d=v++,c=v++),kt(n,r[h*3],r[h*3+1],r[h*3+2]),kt(a,r[d*3],r[d*3+1],r[d*3+2]),kt(o,r[c*3],r[c*3+1],r[c*3+2]),T.sub(s,n,a),T.sub(l,a,o),T.cross(u,s,l),T.normalize(u,u);for(var p=0;p<3;p++)i[h*3+p]=u[p],i[d*3+p]=u[p],i[c*3+p]=u[p]}this.dirty()}},generateTangents:function(){if(!!this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var r=t.texcoord0.value,i=t.position.value,n=t.tangent.value,a=t.normal.value;if(!r){console.warn("Geometry without texcoords can't generate tangents.");return}for(var o=[],s=[],l=0;l<e;l++)o[l]=[0,0,0],s[l]=[0,0,0];for(var u=[0,0,0],f=[0,0,0],h=this.indices,d=h?h.length:this.vertexCount,c,v,p,l=0;l<d;){h?(c=h[l++],v=h[l++],p=h[l++]):(c=l++,v=l++,p=l++);var _=r[c*2],m=r[v*2],x=r[p*2],g=r[c*2+1],y=r[v*2+1],E=r[p*2+1],S=i[c*3],b=i[v*3],A=i[p*3],M=i[c*3+1],O=i[v*3+1],L=i[p*3+1],U=i[c*3+2],F=i[v*3+2],N=i[p*3+2],V=b-S,B=A-S,Z=O-M,I=L-M,ce=F-U,G=N-U,xe=m-_,oe=x-_,pe=y-g,_e=E-g,Oe=1/(xe*_e-pe*oe);u[0]=(_e*V-pe*B)*Oe,u[1]=(_e*Z-pe*I)*Oe,u[2]=(_e*ce-pe*G)*Oe,f[0]=(xe*B-oe*V)*Oe,f[1]=(xe*I-oe*Z)*Oe,f[2]=(xe*G-oe*ce)*Oe,cr(o[c],o[c],u),cr(o[v],o[v],u),cr(o[p],o[p],u),cr(s[c],s[c],f),cr(s[v],s[v],f),cr(s[p],s[p],f)}for(var Fe=Ve(),Le=Ve(),ze=Ve(),l=0;l<e;l++){ze[0]=a[l*3],ze[1]=a[l*3+1],ze[2]=a[l*3+2];var $e=o[l];T.scale(Fe,ze,T.dot(ze,$e)),T.sub(Fe,$e,Fe),T.normalize(Fe,Fe),T.cross(Le,ze,$e),n[l*4]=Fe[0],n[l*4+1]=Fe[1],n[l*4+2]=Fe[2],n[l*4+3]=T.dot(Le,s[l])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new we.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,r=this.getEnabledAttributes(),i={},n=0;n<r.length;n++){var a=r[n];i[a]=e[a].value,e[a].init(this.indices.length)}for(var o=0,s=0;s<t.length;s++){for(var l=t[s],n=0;n<r.length;n++)for(var a=r[n],u=e[a].value,f=e[a].size,h=0;h<f;h++)u[o*f+h]=i[a][l*f+h];t[s]=o,o++}this.dirty()}},generateBarycentric:function(){if(!!this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,r=this.indices;if(!(t&&t.length===r.length*3)){t=e.barycentric.value=new Float32Array(r.length*3);for(var i=0;i<(r?r.length:this.vertexCount/3);)for(var n=0;n<3;n++){var a=r?r[i++]:i*3+n;t[a*3+n]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,r=t.position.value,i=t.normal.value,n=t.tangent.value;e=e.array;var a=C.create();C.invert(a,e),C.transpose(a,a);var o=T.transformMat4,s=T.forEach;s(r,3,0,null,o,e),i&&s(i,3,0,null,o,a),n&&s(n,4,0,null,o,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});or.STATIC_DRAW=ar.STATIC_DRAW;or.DYNAMIC_DRAW=ar.DYNAMIC_DRAW;or.STREAM_DRAW=ar.STREAM_DRAW;or.AttributeBuffer=ar.AttributeBuffer;or.IndicesBuffer=ar.IndicesBuffer;or.Attribute=yt;var Se=or,Wh=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`,lt="uniform vec3 ",Or="uniform float ",dr="@export clay.header.",vr="@end",Ne=":unconfigurable;",Xh=[dr+"directional_light",lt+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+Ne,lt+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+Ne,vr,dr+"ambient_light",lt+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+Ne,vr,dr+"ambient_sh_light",lt+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+Ne,lt+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+Ne,Wh,vr,dr+"ambient_cubemap_light",lt+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ne,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ne,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ne,vr,dr+"point_light",lt+"pointLightPosition[POINT_LIGHT_COUNT]"+Ne,Or+"pointLightRange[POINT_LIGHT_COUNT]"+Ne,lt+"pointLightColor[POINT_LIGHT_COUNT]"+Ne,vr,dr+"spot_light",lt+"spotLightPosition[SPOT_LIGHT_COUNT]"+Ne,lt+"spotLightDirection[SPOT_LIGHT_COUNT]"+Ne,Or+"spotLightRange[SPOT_LIGHT_COUNT]"+Ne,Or+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+Ne,Or+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+Ne,Or+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+Ne,lt+"spotLightColor[SPOT_LIGHT_COUNT]"+Ne,vr].join(`
`);R.import(Xh);var qh=Et.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=Et.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}}),pt=qh,Oi=function(e,t){this.normal=e||new P(0,1,0),this.distance=t||0};Oi.prototype={constructor:Oi,distanceToPoint:function(e){return T.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new P);var r=this.distanceToPoint(e);return T.scaleAndAdd(t.array,e.array,this.normal.array,-r),t._dirty=!0,t},normalize:function(){var e=1/T.len(this.normal.array);T.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,r=this.normal.array,i=T.dot(t[0].array,r)>this.distance,n=1;n<8;n++)if(T.dot(t[n].array,r)>this.distance!=i)return!0},intersectLine:function(){var e=T.create();return function(t,r,i){var n=this.distanceToPoint(t),a=this.distanceToPoint(r);if(n>0&&a>0||n<0&&a<0)return null;var o=this.normal.array,s=this.distance,l=t.array;T.sub(e,r.array,t.array),T.normalize(e,e);var u=T.dot(o,e);if(u===0)return null;i||(i=new P);var f=(T.dot(o,l)-s)/u;return T.scaleAndAdd(i.array,l,e,-f),i._dirty=!0,i}}(),applyTransform:function(){var e=C.create(),t=D.create(),r=D.create();return r[3]=1,function(i){i=i.array,T.scale(r,this.normal.array,this.distance),D.transformMat4(r,r,i),this.distance=T.dot(r,this.normal.array),C.invert(e,i),C.transpose(e,e),t[3]=0,T.copy(t,this.normal.array),D.transformMat4(t,t,e),T.copy(this.normal.array,t)}}(),copy:function(e){T.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new Oi;return e.copy(this),e}};var ol=Oi,Ee=T.set,jo=T.copy,Yo=T.transformMat4,On=Math.min,Fn=Math.max,sl=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new ol);this.boundingBox=new Ge,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=T.fromValues(0,0,0)};sl.prototype={setFromProjection:function(e){var t=this.planes,r=e.array,i=r[0],n=r[1],a=r[2],o=r[3],s=r[4],l=r[5],u=r[6],f=r[7],h=r[8],d=r[9],c=r[10],v=r[11],p=r[12],_=r[13],m=r[14],x=r[15];Ee(t[0].normal.array,o-i,f-s,v-h),t[0].distance=-(x-p),t[0].normalize(),Ee(t[1].normal.array,o+i,f+s,v+h),t[1].distance=-(x+p),t[1].normalize(),Ee(t[2].normal.array,o+n,f+l,v+d),t[2].distance=-(x+_),t[2].normalize(),Ee(t[3].normal.array,o-n,f-l,v-d),t[3].distance=-(x-_),t[3].normalize(),Ee(t[4].normal.array,o-a,f-u,v-c),t[4].distance=-(x-m),t[4].normalize(),Ee(t[5].normal.array,o+a,f+u,v+c),t[5].distance=-(x+m),t[5].normalize();var g=this.boundingBox,y=this.vertices;if(x===0){var E=l/i,S=-m/(c-1),b=-m/(c+1),A=-b/l,M=-S/l;g.min.set(-A*E,-A,b),g.max.set(A*E,A,S),Ee(y[0],-A*E,-A,b),Ee(y[1],-A*E,A,b),Ee(y[2],A*E,-A,b),Ee(y[3],A*E,A,b),Ee(y[4],-M*E,-M,S),Ee(y[5],-M*E,M,S),Ee(y[6],M*E,-M,S),Ee(y[7],M*E,M,S)}else{var O=(-1-p)/i,L=(1-p)/i,U=(1-_)/l,F=(-1-_)/l,N=(-1-m)/c,V=(1-m)/c;g.min.set(Math.min(O,L),Math.min(F,U),Math.min(V,N)),g.max.set(Math.max(L,O),Math.max(U,F),Math.max(N,V));var B=g.min.array,Z=g.max.array;Ee(y[0],B[0],B[1],B[2]),Ee(y[1],B[0],Z[1],B[2]),Ee(y[2],Z[0],B[1],B[2]),Ee(y[3],Z[0],Z[1],B[2]),Ee(y[4],B[0],B[1],Z[2]),Ee(y[5],B[0],Z[1],Z[2]),Ee(y[6],Z[0],B[1],Z[2]),Ee(y[7],Z[0],Z[1],Z[2])}},getTransformedBoundingBox:function(){var e=T.create();return function(t,r){var i=this.vertices,n=r.array,a=t.min,o=t.max,s=a.array,l=o.array,u=i[0];Yo(e,u,n),jo(s,e),jo(l,e);for(var f=1;f<8;f++)u=i[f],Yo(e,u,n),s[0]=On(e[0],s[0]),s[1]=On(e[1],s[1]),s[2]=On(e[2],s[2]),l[0]=Fn(e[0],l[0]),l[1]=Fn(e[1],l[1]),l[2]=Fn(e[2],l[2]);return a._dirty=!0,o._dirty=!0,t}}()};var Oa=sl,jh=Et.extend(function(){return{projectionMatrix:new z,invProjectionMatrix:new z,viewMatrix:new z,frustum:new Oa}},function(){this.update(!0)},{update:function(e){Et.prototype.update.call(this,e),z.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),z.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){z.copy(this.viewMatrix,e),z.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){z.copy(this.projectionMatrix,e),z.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=D.create();return function(t,r){var i=r!==void 0?r:new qi,n=t.array[0],a=t.array[1];return D.set(e,n,a,-1,1),D.transformMat4(e,e,this.invProjectionMatrix.array),D.transformMat4(e,e,this.worldTransform.array),T.scale(i.origin.array,e,1/e[3]),D.set(e,n,a,1,1),D.transformMat4(e,e,this.invProjectionMatrix.array),D.transformMat4(e,e,this.worldTransform.array),T.scale(e,e,1/e[3]),T.sub(i.direction.array,e,i.origin.array),T.normalize(i.direction.array,i.direction.array),i.direction._dirty=!0,i.origin._dirty=!0,i}}()}),Ar=jh,Yh=C.create(),Zo=C.create(),Bn={};function Zh(e){var t=[],r=Object.keys(e);r.sort();for(var i=0;i<r.length;i++){var n=r[i];t.push(n+" "+e[n])}var a=t.join(`
`);if(Bn[a])return Bn[a];var o=De.genGUID();return Bn[a]=o,o}function on(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}on.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};on.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};on.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var Kh=Et.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new Ge,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new Ys(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof Ar?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof pt&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof Ar?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof pt&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},r=0;r<e.length;r++){var i=e[r];if(!i.invisible){var n=i.group;t[n]||(t[n]={}),t[n][i.type]=t[n][i.type]||0,t[n][i.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=Zh(t[a]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),r={};function i(n,a){r[n.__uid__]=a;for(var o=0;o<n._children.length;o++){var s=n._children[o],l=a._children[o];i(s,l)}}return i(e,t),t.traverse(function(n){n.skeleton&&(n.skeleton=n.skeleton.clone(r)),n.material&&(n.material=n.material.clone())}),t},updateRenderList:function(e,t){var r=e.__uid__,i=this._renderLists.get(r);i||(i=new on,this._renderLists.put(r,i)),i.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var n=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,n,i,t),i.endCount(),i},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,r,i,n){if(!e.invisible)for(var a=0;a<e._children.length;a++){var o=e._children[a];if(o.isRenderable()){var s=o.isSkinnedMesh()?Yh:o.worldTransform.array,l=o.geometry;C.multiplyAffine(Zo,t.viewMatrix.array,s),(n&&!l.boundingBox||!this.isFrustumCulled(o,t,Zo))&&i.add(o,o.material.transparent||r)}o._children.length>0&&this._doUpdateRenderList(o,t,r,i,n)}},isFrustumCulled:function(){var e=new Ge,t=new z;return function(r,i,n){var a=r.boundingBox;if(a||(r.skeleton&&r.skeleton.boundingBox?a=r.skeleton.boundingBox:a=r.geometry.boundingBox),!a)return!1;if(t.array=n,e.transformFrom(a,t),r.castShadow&&this.viewBoundingBoxLastFrame.union(e),r.frustumCulling){if(!e.intersectBoundingBox(i.frustum.boundingBox))return!0;t.array=i.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var o=e.min.array,s=e.max.array;if(s[0]<-1||o[0]>1||s[1]<-1||o[1]>1||s[2]<-1||o[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort($h);var t=this._lightUniforms;for(var r in t)for(var i in t[r])t[r][i].value.length=0;for(var n=0;n<e.length;n++){var a=e[n];if(!a.invisible){var r=a.group;for(var i in a.uniformTemplates){var o=a.uniformTemplates[i],s=o.value(a);if(s!=null){t[r]||(t[r]={}),t[r][i]||(t[r][i]={type:"",value:[]});var l=t[r][i];switch(l.type=o.type+"v",o.type){case"1i":case"1f":case"t":l.value.push(s);break;case"2f":case"3f":case"4f":for(var u=0;u<s.length;u++)l.value.push(s[u]);break;default:console.error("Unkown light uniform type "+o.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,r=this._lightNumber;for(var i in r[e])if(!t[e]||r[e][i]!==t[e][i])return!0;for(var i in t[e])if(!r[e]||r[e][i]!==t[e][i])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,r,i){for(var n in t){var a=t[n];if(a.type==="tv"){if(!r.hasUniform(n))continue;for(var o=[],s=0;s<a.value.length;s++){var l=a.value[s],u=r.takeCurrentTextureSlot(i,l);o.push(u)}r.setUniform(i.gl,"1iv",n,o)}else r.setUniform(i.gl,a.type,n,a.value)}}return function(t,r,i){e(this._lightUniforms[r],t,i),e(this.shadowUniforms,t,i)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function $h(e,t){if(t.castShadow&&!e.castShadow)return!0}var Ht=Kh,ll=function(){function e(t){this.value=t}return e}(),Qh=function(){function e(){this._len=0}return e.prototype.insert=function(t){var r=new ll(t);return this.insertEntry(r),r},e.prototype.insertEntry=function(t){this.head?(this.tail.next=t,t.prev=this.tail,t.next=null,this.tail=t):this.head=this.tail=t,this._len++},e.prototype.remove=function(t){var r=t.prev,i=t.next;r?r.next=i:this.head=i,i?i.prev=r:this.tail=r,t.next=t.prev=null,this._len--},e.prototype.len=function(){return this._len},e.prototype.clear=function(){this.head=this.tail=null,this._len=0},e}(),Jh=function(){function e(t){this._list=new Qh,this._maxSize=10,this._map={},this._maxSize=t}return e.prototype.put=function(t,r){var i=this._list,n=this._map,a=null;if(n[t]==null){var o=i.len(),s=this._lastRemovedEntry;if(o>=this._maxSize&&o>0){var l=i.head;i.remove(l),delete n[l.key],a=l.value,this._lastRemovedEntry=l}s?s.value=r:s=new ll(r),s.key=t,i.insertEntry(s),n[t]=s}return a},e.prototype.get=function(t){var r=this._map[t],i=this._list;if(r!=null)return r!==i.tail&&(i.remove(r),i.insertEntry(r)),r.value},e.prototype.clear=function(){this._list.clear(),this._map={}},e.prototype.len=function(){return this._list.len()},e}(),ul=Jh,_i=rl.isPowerOfTwo,ec=["px","nx","py","ny","pz","nz"],Fa=Y.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var n=e.getGLExtension("EXT_texture_filter_anisotropic");if(n&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var a=e.getGLExtension("OES_texture_half_float");a||(i=w.FLOAT)}if(this.mipmaps.length)for(var o=this.width,s=this.height,l=0;l<this.mipmaps.length;l++){var u=this.mipmaps[l];this._updateTextureData(t,u,l,o,s,r,i),o/=2,s/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,r,i,n,a,o){for(var s=0;s<6;s++){var l=ec[s],u=t.image&&t.image[l];u?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,a,o,u):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,i,n,0,a,o,t.pixels&&t.pixels[l])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?_i(this.image.px.width)&&_i(this.image.px.height):_i(this.width)&&_i(this.height)},isRenderable:function(){return this.image.px?pr(this.image.px)&&pr(this.image.nx)&&pr(this.image.py)&&pr(this.image.ny)&&pr(this.image.pz)&&pr(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var r=0,i=this;return De.each(e,function(n,a){var o=we.createImage();t&&(o.crossOrigin=t),o.onload=function(){r--,r===0&&(i.dirty(),i.trigger("success",i))},o.onerror=function(){r--},r++,o.src=n,i.image[a]=o}),this}});Object.defineProperty(Fa.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(Fa.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function pr(e){return e.width>0&&e.height>0}var $r=Fa,tc=Ar.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=Ar.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}}),Ce=tc,mi="framebuffer",Mt="renderbuffer",Ko=Mt+"_width",$o=Mt+"_height",Un=Mt+"_attached",Hn="depthtexture_attached",Wt=w.FRAMEBUFFER,Fr=w.RENDERBUFFER,Gr=w.DEPTH_ATTACHMENT,fl=w.COLOR_ATTACHMENT0,ri=Ke.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new Pa,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer(Wt,this._getFrameBufferGL(e)),this._boundRenderer=e;var r=this._cache;r.put("viewport",e.viewport);var i=!1,n,a;for(var o in this._textures){i=!0;var s=this._textures[o];s&&(n=s.texture.width,a=s.texture.height,this._doAttach(e,s.texture,o,s.target))}this._width=n,this._height=a,!i&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,n,a,1);var l=r.get("attached_textures");if(l){for(var o in l)if(!this._textures[o]){var u=l[o];this._doDetach(t,o,u)}}if(!r.get(Hn)&&this.depthBuffer){r.miss(Mt)&&r.put(Mt,t.createRenderbuffer());var f=r.get(Mt);(n!==r.get(Ko)||a!==r.get($o))&&(t.bindRenderbuffer(Fr,f),t.renderbufferStorage(Fr,t.DEPTH_COMPONENT16,n,a),r.put(Ko,n),r.put($o,a),t.bindRenderbuffer(Fr,null)),r.get(Un)||(t.framebufferRenderbuffer(Wt,Gr,Fr,f),r.put(Un,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer(Wt,null),this._boundRenderer=null,this._cache.use(e.__uid__);var r=this._cache.get("viewport");r&&e.setViewport(r),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var r in this._textures){var i=this._textures[r];if(i){var n=i.texture;if(!n.NPOT&&n.useMipmap&&n.minFilter===Y.LINEAR_MIPMAP_LINEAR){var a=n.textureType==="textureCube"?w.TEXTURE_CUBE_MAP:w.TEXTURE_2D;t.bindTexture(a,n.getWebGLTexture(e)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus(Wt)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(mi)&&t.put(mi,e.gl.createFramebuffer()),t.get(mi)},attach:function(e,t,r){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||fl,r=r||w.TEXTURE_2D;var i=this._boundRenderer,n=i&&i.gl,a;if(n){var o=this._cache;o.use(i.__uid__),a=o.get("attached_textures")}var s=this._textures[t];if(!(s&&s.target===r&&s.texture===e&&a&&a[t]!=null)){var l=!0;i&&(l=this._doAttach(i,e,t,r),this.viewport||i.setViewport(0,0,e.width,e.height,1)),l&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=r)}},_doAttach:function(e,t,r,i){var n=e.gl,a=t.getWebGLTexture(e),o=this._cache.get("attached_textures");if(o&&o[r]){var s=o[r];if(s.texture===t&&s.target===i)return}r=+r;var l=!0;if(r===Gr||r===w.DEPTH_STENCIL_ATTACHMENT){var u=e.getGLExtension("WEBGL_depth_texture");if(u||(console.error("Depth texture is not supported by the browser"),l=!1),t.format!==w.DEPTH_COMPONENT&&t.format!==w.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l){var f=this._cache.get(Mt);f&&(n.framebufferRenderbuffer(Wt,Gr,Fr,null),n.deleteRenderbuffer(f),this._cache.put(Mt,!1)),this._cache.put(Un,!1),this._cache.put(Hn,!0)}}return n.framebufferTexture2D(Wt,r,i,a,0),o||(o={},this._cache.put("attached_textures",o)),o[r]=o[r]||{},o[r].texture=t,o[r].target=i,l},_doDetach:function(e,t,r){e.framebufferTexture2D(Wt,t,r,null,0);var i=this._cache.get("attached_textures");i&&i[t]&&(i[t]=null),(t===Gr||t===w.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(Hn,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var r=this._cache;r.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,r=this._cache;r.use(e.__uid__);var i=r.get(Mt);i&&t.deleteRenderbuffer(i);var n=r.get(mi);n&&t.deleteFramebuffer(n),r.deleteContext(e.__uid__),this._textures={}}});ri.DEPTH_ATTACHMENT=Gr;ri.COLOR_ATTACHMENT0=fl;ri.STENCIL_ATTACHMENT=w.STENCIL_ATTACHMENT;ri.DEPTH_STENCIL_ATTACHMENT=w.DEPTH_STENCIL_ATTACHMENT;var Ue=ri,rc=["px","nx","py","ny","pz","nz"],ic=Ke.extend(function(){var e={position:new P,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new Ce({fov:90}),nx:new Ce({fov:90}),py:new Ce({fov:90}),ny:new Ce({fov:90}),pz:new Ce({fov:90}),nz:new Ce({fov:90})};return t.px.lookAt(P.POSITIVE_X,P.NEGATIVE_Y),t.nx.lookAt(P.NEGATIVE_X,P.NEGATIVE_Y),t.py.lookAt(P.POSITIVE_Y,P.POSITIVE_Z),t.ny.lookAt(P.NEGATIVE_Y,P.NEGATIVE_Z),t.pz.lookAt(P.POSITIVE_Z,P.NEGATIVE_Y),t.nz.lookAt(P.NEGATIVE_Z,P.NEGATIVE_Y),e._frameBuffer=new Ue,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,r){var i=e.gl;r||t.update();for(var n=this.texture.width,a=2*Math.atan(n/(n-.5))/Math.PI*180,o=0;o<6;o++){var s=rc[o],l=this._cameras[s];if(P.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=a,this.shadowMapPass){l.update();var u=t.getBoundingBox();u.applyTransform(l.viewMatrix),t.viewBoundingBoxLastFrame.copy(u),this.shadowMapPass.render(e,t,l,!0)}this._frameBuffer.attach(this.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+o),this._frameBuffer.bind(e),e.render(t,l,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}}),Ba=ic,nc=Se.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,r=this.attributes,i=[],n=[],a=[],o=[],s=0;s<=e;s++)for(var l=s/e,u=0;u<=t;u++){var f=u/t;if(i.push([2*f-1,2*l-1,0]),n&&n.push([f,l]),a&&a.push([0,0,1]),u<t&&s<e){var h=u+s*(t+1);o.push([h,h+1,h+t+1]),o.push([h+t+1,h+1,h+t+2])}}r.position.fromArray(i),r.texcoord0.fromArray(n),r.normal.fromArray(a),this.initIndicesFromArray(o),this.boundingBox=new Ge,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}}),Ua=nc,ye=new z,ac=Se.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:_r("px",this.depthSegments,this.heightSegments),nx:_r("nx",this.depthSegments,this.heightSegments),py:_r("py",this.widthSegments,this.depthSegments),ny:_r("ny",this.widthSegments,this.depthSegments),pz:_r("pz",this.widthSegments,this.heightSegments),nz:_r("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],r=0,i=0;for(var n in e)r+=e[n].vertexCount,i+=e[n].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(r);this.indices=new we.Uint16Array(i);var o=0,s=0;for(var n in e){for(var l=e[n],a=0;a<t.length;a++)for(var u=t[a],f=l.attributes[u].value,h=l.attributes[u].size,d=u==="normal",c=0;c<f.length;c++){var v=f[c];this.inside&&d&&(v=-v),this.attributes[u].value[c+h*s]=v}for(var p=l.indices.length,c=0;c<l.indices.length;c++)this.indices[c+o]=s+l.indices[this.inside?p-c-1:c];o+=l.indices.length,s+=l.vertexCount}this.boundingBox=new Ge,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function _r(e,t,r){ye.identity();var i=new Ua({widthSegments:t,heightSegments:r});switch(e){case"px":z.translate(ye,ye,P.POSITIVE_X),z.rotateY(ye,ye,Math.PI/2);break;case"nx":z.translate(ye,ye,P.NEGATIVE_X),z.rotateY(ye,ye,-Math.PI/2);break;case"py":z.translate(ye,ye,P.POSITIVE_Y),z.rotateX(ye,ye,-Math.PI/2);break;case"ny":z.translate(ye,ye,P.NEGATIVE_Y),z.rotateX(ye,ye,Math.PI/2);break;case"pz":z.translate(ye,ye,P.POSITIVE_Z);break;case"nz":z.translate(ye,ye,P.NEGATIVE_Z),z.rotateY(ye,ye,Math.PI);break}return i.applyTransform(ye),i}var hl=ac,oc=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;R.import(oc);var sc=Da.extend(function(){var e=new R({vertex:R.source("clay.skybox.vertex"),fragment:R.source("clay.skybox.fragment")}),t=new Ct({shader:e,depthMask:!1});return{scene:null,geometry:new hl,material:t,environmentMap:null,culling:!1,_dummyCamera:new Ce}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=Y.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,r){this.renderSkybox(e,r)},renderSkybox:function(e,t){var r=this._dummyCamera;r.aspect=e.getViewportAspect(),r.fov=t.fov||50,r.updateProjectionMatrix(),z.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(t.worldTransform),r.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],r)}}),Qr=sc,lc=542327876,uc=131072,fc=512,hc=4;function Ha(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var cc=31,dc=Ha("DXT1"),vc=Ha("DXT3"),pc=Ha("DXT5"),_c=0,mc=1,gc=2,yc=3,xc=4,Tc=7,Ec=20,Sc=21,Ac=28,wc={parse:function(e,t){var r=new Int32Array(e,0,cc);if(r[_c]!==lc||!r(Ec)&hc)return null;var i=r(Sc),n=r[xc],a=r[yc],o=r[Ac]&fc,s=r[gc]&uc,l,u;switch(i){case dc:l=8,u=Y.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case vc:l=16,u=Y.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case pc:l=16,u=Y.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var f=r[mc]+4,h=o?6:1,d=1;s&&(d=Math.max(1,r[Tc]));for(var c=[],v=0;v<h;v++){var p=n,_=a;c[v]=new ae({width:p,height:_,format:u});for(var m=[],x=0;x<d;x++){var g=Math.max(4,p)/4*Math.max(4,_)/4*l,y=new Uint8Array(e,f,g);f+=g,p*=.5,_*=.5,m[x]=y}c[v].pixels=m[0],s&&(c[v].mipmaps=m)}if(t)t.width=c[0].width,t.height=c[0].height,t.format=c[0].format,t.pixels=c[0].pixels,t.mipmaps=c[0].mipmaps;else return c[0]}},bc=wc,Fi=String.fromCharCode,Mc=8,Lc=32767;function Cc(e,t,r,i){if(e[3]>0){var n=Math.pow(2,e[3]-128-8+i);t[r+0]=e[0]*n,t[r+1]=e[1]*n,t[r+2]=e[2]*n}else t[r+0]=0,t[r+1]=0,t[r+2]=0;return t[r+3]=1,t}function Rc(e,t,r){for(var i="",n=t;n<r;n++)i+=Fi(e[n]);return i}function Nc(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function Qo(e,t,r,i){for(var n=0,a=0,o=i;o>0;)if(e[a][0]=t[r++],e[a][1]=t[r++],e[a][2]=t[r++],e[a][3]=t[r++],e[a][0]===1&&e[a][1]===1&&e[a][2]===1){for(var s=e[a][3]<<n>>>0;s>0;s--)Nc(e[a-1],e[a]),a++,o--;n+=8}else a++,o--,n=0;return r}function Pc(e,t,r,i){if(i<Mc|i>Lc)return Qo(e,t,r,i);var n=t[r++];if(n!=2)return Qo(e,t,r-1,i);if(e[0][1]=t[r++],e[0][2]=t[r++],n=t[r++],(e[0][2]<<8>>>0|n)>>>0!==i)return null;for(var n=0;n<4;n++)for(var a=0;a<i;){var o=t[r++];if(o>128){o=(o&127)>>>0;for(var s=t[r++];o--;)e[a++][n]=s}else for(;o--;)e[a++][n]=t[r++]}return r}var Dc={parseRGBE:function(e,t,r){r==null&&(r=0);var i=new Uint8Array(e),n=i.length;if(Rc(i,0,2)==="#?"){for(var a=2;a<n&&!(Fi(i[a])===`
`&&Fi(i[a+1])===`
`);a++);if(!(a>=n)){a+=2;for(var o="";a<n;a++){var s=Fi(i[a]);if(s===`
`)break;o+=s}var l=o.split(" "),u=parseInt(l[1]),f=parseInt(l[3]);if(!(!f||!u)){for(var h=a+1,d=[],c=0;c<f;c++){d[c]=[];for(var v=0;v<4;v++)d[c][v]=0}for(var p=new Float32Array(f*u*4),_=0,m=0;m<u;m++){var h=Pc(d,i,h,f);if(!h)return null;for(var c=0;c<f;c++)Cc(d[c],p,_,r),_+=4}return t||(t=new ae),t.width=f,t.height=u,t.pixels=p,t.type=Y.FLOAT,t}}}},parseRGBEFromPNG:function(e){}},Ic=Dc,Bi={loadTexture:function(e,t,r,i){var n;if(typeof t=="function"?(r=t,i=r,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return n=new ae({width:0,height:0,sRGB:!1}),Bi._fetchTexture(e,function(a){Ic.parseRGBE(a,n,t.exposure),n.dirty(),r&&r(n)},i),n;e.match(/.dds$/)||t.fileType==="dds"?(n=new ae({width:0,height:0}),Bi._fetchTexture(e,function(a){bc.parse(a,n),n.dirty(),r&&r(n)},i)):(n=new ae,n.load(e),n.success(r),n.error(i))}else typeof e=="object"&&typeof e.px!="undefined"&&(n=new $r,n.load(e),n.success(r),n.error(i));return n},loadPanorama:function(e,t,r,i,n,a){var o=this;typeof i=="function"?(n=i,a=n,i={}):i=i||{},Bi.loadTexture(t,i,function(s){s.flipY=i.flipY||!1,o.panoramaToCubeMap(e,s,r,i),s.dispose(e),n&&n(r)},a)},panoramaToCubeMap:function(e,t,r,i){var n=new Ba,a=new Qr({scene:new Ht});return a.setEnvironmentMap(t),i=i||{},i.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),r.sRGB=t.sRGB,n.texture=r,n.render(e,a.scene),n.texture=null,n.dispose(e),r},heightToNormal:function(e,t){var r=document.createElement("canvas"),i=r.width=e.width,n=r.height=e.height,a=r.getContext("2d");a.drawImage(e,0,0,i,n),t=t||!1;for(var o=a.getImageData(0,0,i,n),s=a.createImageData(i,n),l=0;l<o.data.length;l+=4){if(t){var u=o.data[l],f=o.data[l+1],h=o.data[l+2],d=Math.abs(u-f)+Math.abs(f-h);if(d>20)return console.warn("Given image is not a height map"),e}var c,v,p,_;l%(i*4)===0?(c=o.data[l],p=o.data[l+4]):l%(i*4)===(i-1)*4?(c=o.data[l-4],p=o.data[l]):(c=o.data[l-4],p=o.data[l+4]),l<i*4?(v=o.data[l],_=o.data[l+i*4]):l>i*(n-1)*4?(v=o.data[l-i*4],_=o.data[l]):(v=o.data[l-i*4],_=o.data[l+i*4]),s.data[l]=c-p+127,s.data[l+1]=v-_+127,s.data[l+2]=255,s.data[l+3]=255}return a.putImageData(s,0,0),r},isHeightImage:function(e,t,r){if(!e||!e.width||!e.height)return!1;var i=document.createElement("canvas"),n=i.getContext("2d"),a=t||32;r=r||20,i.width=i.height=a,n.drawImage(e,0,0,a,a);for(var o=n.getImageData(0,0,a,a),s=0;s<o.data.length;s+=4){var l=o.data[s],u=o.data[s+1],f=o.data[s+2],h=Math.abs(l-u)+Math.abs(u-f);if(h>r)return!1}return!0},_fetchTexture:function(e,t,r){we.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:r})},createChessboard:function(e,t,r,i){e=e||512,t=t||64,r=r||"black",i=i||"white";var n=Math.ceil(e/t),a=document.createElement("canvas");a.width=e,a.height=e;var o=a.getContext("2d");o.fillStyle=i,o.fillRect(0,0,e,e),o.fillStyle=r;for(var s=0;s<n;s++)for(var l=0;l<n;l++){var u=l%2?s%2:s%2-1;u&&o.fillRect(s*t,l*t,t,t)}var f=new ae({image:a,anisotropic:8});return f},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var i=new ae({image:t});return i}},rr=Bi,ca=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function da(e){return"_on"+e}var va=function(e){var t=this;this._texture=new ae({anisotropic:32,flipY:!1,surface:this,dispose:function(r){t.dispose(),ae.prototype.dispose.call(this,r)}}),ca.forEach(function(r){this[da(r)]=function(i){!i.triangle||this._meshes.forEach(function(n){this.dispatchEvent(r,n,i.triangle,i.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};va.prototype={constructor:va,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var r=this,i=e.getZr(),n=i.__oldRefreshImmediately||i.refreshImmediately;i.refreshImmediately=function(){n.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},i.__oldRefreshImmediately=n}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new P,t=new P,r=new P,i=new et,n=new et,a=new et,o=new et,s=new P;return function(l,u,f,h){var d=u.geometry,c=d.attributes.position,v=d.attributes.texcoord0,p=P.dot,_=P.cross;c.get(f[0],e.array),c.get(f[1],t.array),c.get(f[2],r.array),v.get(f[0],i.array),v.get(f[1],n.array),v.get(f[2],a.array),_(s,t,r);var m=p(e,s),x=p(h,s)/m;_(s,r,e);var g=p(h,s)/m;_(s,e,t);var y=p(h,s)/m;et.scale(o,i,x),et.scaleAndAdd(o,o,n,g),et.scaleAndAdd(o,o,a,y);var E=o.x*this._chart.getWidth(),S=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:E,zrY:S})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(ca.forEach(function(t){e.on(t,this[da(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),ca.forEach(function(r){e.off(r,this[da(r)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var Oc=va,Fc=Ar.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=Ar.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}}),Jr=Fc,Bc=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;R.import(Bc);var Uc=new Ua,Jo=new Da({geometry:Uc,frustumCulling:!1}),Hc=new Jr,zc=Ke.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new R(R.source("clay.compositor.vertex"),this.fragment),t=new Ct({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||w.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var r in this.outputs){var i=this.outputs[r];i&&t.attach(i,r)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var r=e.gl;if(t){this.bind(e,t);var i=e.getGLExtension("EXT_draw_buffers");if(i&&this.outputs){var n=[];for(var a in this.outputs)a=+a,a>=r.COLOR_ATTACHMENT0&&a<=r.COLOR_ATTACHMENT0+8&&n.push(a);i.drawBuffersEXT(n)}}this.trigger("beforerender",this,e);var o=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){o=o|r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var s=this.clearColor;Array.isArray(s)&&r.clearColor(s[0],s[1],s[2],s[3])}r.clear(o),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){Jo.material=this.material,e.renderPass([Jo],Hc)},dispose:function(e){}}),ke=zc,Vc=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,Gc=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`,ir={},zn=["px","nx","py","ny","pz","nz"];ir.prefilterEnvironmentMap=function(e,t,r,i,n){(!n||!i)&&(i=ir.generateNormalDistribution(),n=ir.integrateBRDF(e,i)),r=r||{};var a=r.width||64,o=r.height||64,s=r.type||t.type,l=new $r({width:a,height:o,type:s,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var u=Math.min(a,o),f=Math.log(u)/Math.log(2)+1,h=new Ct({shader:new R({vertex:R.source("clay.skybox.vertex"),fragment:Gc})});h.set("normalDistribution",i),r.encodeRGBM&&h.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&h.define("fragment","RGBM_DECODE");var d=new Ht,c;if(t.textureType==="texture2D"){var v=new $r({width:a,height:o,type:s===Y.FLOAT?Y.HALF_FLOAT:s});rr.panoramaToCubeMap(e,t,v,{encodeRGBM:r.decodeRGBM}),t=v}c=new Qr({scene:d,material:h}),c.material.set("environmentMap",t);var p=new Ba({texture:l});r.encodeRGBM&&(s=l.type=Y.UNSIGNED_BYTE);for(var _=new ae({width:a,height:o,type:s}),m=new Ue({depthBuffer:!1}),x=we[s===Y.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],g=0;g<f;g++){l.mipmaps[g]={pixels:{}},c.material.set("roughness",g/(f-1));for(var y=_.width,E=2*Math.atan(y/(y-.5))/Math.PI*180,S=0;S<zn.length;S++){var b=new x(_.width*_.height*4);m.attach(_),m.bind(e);var A=p.getCamera(zn[S]);A.fov=E,e.render(d,A),e.gl.readPixels(0,0,_.width,_.height,Y.RGBA,s,b),m.unbind(e),l.mipmaps[g].pixels[zn[S]]=b}_.width/=2,_.height/=2,_.dirty()}return m.dispose(e),_.dispose(e),c.dispose(e),i.dispose(e),{environmentMap:l,brdfLookup:n,normalDistribution:i,maxMipmapLevel:f}};ir.integrateBRDF=function(e,t){t=t||ir.generateNormalDistribution();var r=new Ue({depthBuffer:!1}),i=new ke({fragment:Vc}),n=new ae({width:512,height:256,type:Y.HALF_FLOAT,wrapS:Y.CLAMP_TO_EDGE,wrapT:Y.CLAMP_TO_EDGE,minFilter:Y.NEAREST,magFilter:Y.NEAREST,useMipmap:!1});return i.setUniform("normalDistribution",t),i.setUniform("viewportSize",[512,256]),i.attachOutput(n),i.render(e,r),r.dispose(e),n};ir.generateNormalDistribution=function(r,i){for(var r=r||256,i=i||1024,n=new ae({width:r,height:i,type:Y.FLOAT,minFilter:Y.NEAREST,magFilter:Y.NEAREST,wrapS:Y.CLAMP_TO_EDGE,wrapT:Y.CLAMP_TO_EDGE,useMipmap:!1}),a=new Float32Array(i*r*4),o=[],s=0;s<r;s++){for(var l=s/r,u=l*l,f=0;f<i;f++){var h=(f<<16|f>>>16)>>>0;h=((h&1431655765)<<1|(h&2863311530)>>>1)>>>0,h=((h&858993459)<<2|(h&3435973836)>>>2)>>>0,h=((h&252645135)<<4|(h&4042322160)>>>4)>>>0,h=(((h&16711935)<<8|(h&4278255360)>>>8)>>>0)/4294967296;var d=Math.sqrt((1-h)/(1+(u*u-1)*h));o[f]=d}for(var f=0;f<i;f++){var c=(f*r+s)*4,d=o[f],v=Math.sqrt(1-d*d),p=f/i,_=2*Math.PI*p;a[c]=v*Math.cos(_),a[c+1]=d,a[c+2]=v*Math.sin(_),a[c+3]=1}}return n.pixels=a,n};var Ui=ir,kc=pt.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=Ui.generateNormalDistribution(),this._brdfLookup=Ui.integrateBRDF(e,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var i=Ui.prefilterEnvironmentMap(e,r,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=i.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}}),Wc=kc,Xc=pt.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new we.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,r=0;r<e.coefficients.length;r++)t[r]=e.coefficients[r];return t}}}}),qc=Xc,cl={},er=["px","nx","py","ny","pz","nz"];function jc(e,t){var r=e[0],i=e[1],n=e[2];return t===0?1:t===1?r:t===2?i:t===3?n:t===4?r*n:t===5?i*n:t===6?r*i:t===7?3*n*n-1:r*r-i*i}var Yc={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function Zc(e,t,r,i){for(var n=new we.Float32Array(27),a=T.create(),o=T.create(),s=T.create(),l=0;l<9;l++){for(var u=T.create(),f=0;f<er.length;f++){for(var h=t[er[f]],d=T.create(),c=0,v=0,p=Yc[er[f]],_=0;_<i;_++)for(var m=0;m<r;m++){a[0]=m/(r-1)*2-1,a[1]=_/(i-1)*2-1,a[2]=-1,T.normalize(a,a),s[0]=a[p[0]]*p[3],s[1]=a[p[1]]*p[4],s[2]=a[p[2]]*p[5],o[0]=h[v++]/255,o[1]=h[v++]/255,o[2]=h[v++]/255;var x=h[v++]/255*8.12;o[0]*=x,o[1]*=x,o[2]*=x,T.scaleAndAdd(d,d,o,jc(s,l)*-a[2]),c+=-a[2]}T.scaleAndAdd(u,u,d,1/c)}n[l*3]=u[0]/6,n[l*3+1]=u[1]/6,n[l*3+2]=u[2]/6}return n}cl.projectEnvironmentMap=function(e,t,r){r=r||{},r.lod=r.lod||0;var i,n=new Ht,a=64;t.textureType==="texture2D"?i=new Qr({scene:n,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,i=new Qr({scene:n,environmentMap:t}));var o=Math.ceil(a/Math.pow(2,r.lod)),s=Math.ceil(a/Math.pow(2,r.lod)),l=new ae({width:o,height:s}),u=new Ue;i.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&i.material.define("fragment","RGBM_DECODE"),i.material.set("lod",r.lod);for(var f=new Ba({texture:l}),h={},d=0;d<er.length;d++){h[er[d]]=new Uint8Array(o*s*4);var c=f.getCamera(er[d]);c.fov=90,u.attach(l),u.bind(e),e.render(n,c),e.gl.readPixels(0,0,o,s,Y.RGBA,Y.UNSIGNED_BYTE,h[er[d]]),u.unbind(e)}return i.dispose(e),u.dispose(e),l.dispose(e),Zc(e,h,o,s)};var Kc=cl,$c={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return Xe(t.dataIndex)?jr(t.dataIndex,function(r){return e.indexOfRawIndex(r)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return Xe(t.name)?jr(t.name,function(r){return e.indexOfName(r)}):e.indexOfName(t.name)}},ot=$c,Qc=Se.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,r=this.attributes.position,i=this.attributes.texcoord0,n=this.attributes.normal,a=(t+1)*(e+1);r.init(a),i.init(a),n.init(a);var o=a>65535?Uint32Array:Uint16Array,s=this.indices=new o(t*e*6),l,u,f,h,d,c,v,g=this.radius,p=this.phiStart,_=this.phiLength,m=this.thetaStart,x=this.thetaLength,g=this.radius,y=[],E=[],S=0,b=1/g;for(v=0;v<=e;v++)for(c=0;c<=t;c++)h=c/t,d=v/e,l=-g*Math.cos(p+h*_)*Math.sin(m+d*x),u=g*Math.cos(m+d*x),f=g*Math.sin(p+h*_)*Math.sin(m+d*x),y[0]=l,y[1]=u,y[2]=f,E[0]=h,E[1]=d,r.set(S,y),i.set(S,E),y[0]*=b,y[1]*=b,y[2]*=b,n.set(S,y),S++;var A,M,O,L,U=t+1,F=0;for(v=0;v<e;v++)for(c=0;c<t;c++)M=v*U+c,A=v*U+c+1,L=(v+1)*U+c+1,O=(v+1)*U+c,s[F++]=A,s[F++]=M,s[F++]=L,s[F++]=M,s[F++]=O,s[F++]=L;this.boundingBox=new Ge,this.boundingBox.max.set(g,g,g),this.boundingBox.min.set(-g,-g,-g)}}),Jc=Qc,ed=pt.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}}}),td=ed,rd=pt.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new P,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=pt.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),id=rd,nd=pt.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=pt.prototype.clone.call(this);return e.range=this.range,e}}),ad=nd,od=pt.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new P,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=pt.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),sd=od,re=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i||0,this.array=D.fromValues(e,t,r,i),this._dirty=!0};re.prototype={constructor:re,add:function(e){return D.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new re(this.x,this.y,this.z,this.w)},copy:function(e){return D.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return D.dist(this.array,e.array)},distance:function(e){return D.distance(this.array,e.array)},div:function(e){return D.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return D.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return D.dot(this.array,e.array)},len:function(){return D.len(this.array)},length:function(){return D.length(this.array)},lerp:function(e,t,r){return D.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return D.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return D.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return D.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return D.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return D.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return D.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return D.random(this.array,e),this._dirty=!0,this},scale:function(e){return D.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return D.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return D.sqrDist(this.array,e.array)},squaredDistance:function(e){return D.squaredDistance(this.array,e.array)},sqrLen:function(){return D.sqrLen(this.array)},squaredLength:function(){return D.squaredLength(this.array)},sub:function(e){return D.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return D.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return D.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return D.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Br=Object.defineProperty;if(Br){var gi=re.prototype;Br(gi,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Br(gi,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Br(gi,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Br(gi,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}re.add=function(e,t,r){return D.add(e.array,t.array,r.array),e._dirty=!0,e};re.set=function(e,t,r,i,n){D.set(e.array,t,r,i,n),e._dirty=!0};re.copy=function(e,t){return D.copy(e.array,t.array),e._dirty=!0,e};re.dist=function(e,t){return D.distance(e.array,t.array)};re.distance=re.dist;re.div=function(e,t,r){return D.divide(e.array,t.array,r.array),e._dirty=!0,e};re.divide=re.div;re.dot=function(e,t){return D.dot(e.array,t.array)};re.len=function(e){return D.length(e.array)};re.lerp=function(e,t,r,i){return D.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};re.min=function(e,t,r){return D.min(e.array,t.array,r.array),e._dirty=!0,e};re.max=function(e,t,r){return D.max(e.array,t.array,r.array),e._dirty=!0,e};re.mul=function(e,t,r){return D.multiply(e.array,t.array,r.array),e._dirty=!0,e};re.multiply=re.mul;re.negate=function(e,t){return D.negate(e.array,t.array),e._dirty=!0,e};re.normalize=function(e,t){return D.normalize(e.array,t.array),e._dirty=!0,e};re.random=function(e,t){return D.random(e.array,t),e._dirty=!0,e};re.scale=function(e,t,r){return D.scale(e.array,t.array,r),e._dirty=!0,e};re.scaleAndAdd=function(e,t,r,i){return D.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};re.sqrDist=function(e,t){return D.sqrDist(e.array,t.array)};re.squaredDistance=re.sqrDist;re.sqrLen=function(e){return D.sqrLen(e.array)};re.squaredLength=re.sqrLen;re.sub=function(e,t,r){return D.subtract(e.array,t.array,r.array),e._dirty=!0,e};re.subtract=re.sub;re.transformMat4=function(e,t,r){return D.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};re.transformQuat=function(e,t,r){return D.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};var ld=re,He={};He.create=function(){var e=new Ie(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};He.clone=function(e){var t=new Ie(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};He.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};He.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};He.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};He.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*a-n*i;return o?(o=1/o,e[0]=a*o,e[1]=-i*o,e[2]=-n*o,e[3]=r*o,e):null};He.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e};He.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};He.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],f=r[3];return e[0]=i*s+a*l,e[1]=n*s+o*l,e[2]=i*u+a*f,e[3]=n*u+o*f,e};He.mul=He.multiply;He.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*s,e[1]=n*l+o*s,e[2]=i*-s+a*l,e[3]=n*-s+o*l,e};He.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1];return e[0]=i*s,e[1]=n*s,e[2]=a*l,e[3]=o*l,e};He.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};He.LDU=function(e,t,r,i){return e[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-e[2]*r[1],[e,t,r]};var Te=He,We=function(){this.array=Te.create(),this._dirty=!0};We.prototype={constructor:We,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new We().copy(this)},copy:function(e){return Te.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return Te.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return Te.determinant(this.array)},identity:function(){return Te.identity(this.array),this._dirty=!0,this},invert:function(){return Te.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Te.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Te.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Te.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Te.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Te.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Te.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return Te.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};We.adjoint=function(e,t){return Te.adjoint(e.array,t.array),e._dirty=!0,e};We.copy=function(e,t){return Te.copy(e.array,t.array),e._dirty=!0,e};We.determinant=function(e){return Te.determinant(e.array)};We.identity=function(e){return Te.identity(e.array),e._dirty=!0,e};We.invert=function(e,t){return Te.invert(e.array,t.array),e._dirty=!0,e};We.mul=function(e,t,r){return Te.mul(e.array,t.array,r.array),e._dirty=!0,e};We.multiply=We.mul;We.rotate=function(e,t,r){return Te.rotate(e.array,t.array,r),e._dirty=!0,e};We.scale=function(e,t,r){return Te.scale(e.array,t.array,r.array),e._dirty=!0,e};We.transpose=function(e,t){return Te.transpose(e.array,t.array),e._dirty=!0,e};var ud=We,Ze={};Ze.create=function(){var e=new Ie(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};Ze.clone=function(e){var t=new Ie(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};Ze.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};Ze.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};Ze.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=r*a-i*n;return l?(l=1/l,e[0]=a*l,e[1]=-i*l,e[2]=-n*l,e[3]=r*l,e[4]=(n*s-a*o)*l,e[5]=(i*o-r*s)*l,e):null};Ze.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};Ze.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],f=r[1],h=r[2],d=r[3],c=r[4],v=r[5];return e[0]=i*u+a*f,e[1]=n*u+o*f,e[2]=i*h+a*d,e[3]=n*h+o*d,e[4]=i*c+a*v+s,e[5]=n*c+o*v+l,e};Ze.mul=Ze.multiply;Ze.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=Math.sin(r),f=Math.cos(r);return e[0]=i*f+a*u,e[1]=n*f+o*u,e[2]=i*-u+a*f,e[3]=n*-u+o*f,e[4]=s,e[5]=l,e};Ze.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],f=r[1];return e[0]=i*u,e[1]=n*u,e[2]=a*f,e[3]=o*f,e[4]=s,e[5]=l,e};Ze.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],f=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=i*u+a*f+s,e[5]=n*u+o*f+l,e};Ze.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};var Ae=Ze,Ye=function(){this.array=Ae.create(),this._dirty=!0};Ye.prototype={constructor:Ye,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new Ye().copy(this)},copy:function(e){return Ae.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return Ae.determinant(this.array)},identity:function(){return Ae.identity(this.array),this._dirty=!0,this},invert:function(){return Ae.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Ae.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Ae.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Ae.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Ae.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Ae.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Ae.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return Ae.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ye.copy=function(e,t){return Ae.copy(e.array,t.array),e._dirty=!0,e};Ye.determinant=function(e){return Ae.determinant(e.array)};Ye.identity=function(e){return Ae.identity(e.array),e._dirty=!0,e};Ye.invert=function(e,t){return Ae.invert(e.array,t.array),e._dirty=!0,e};Ye.mul=function(e,t,r){return Ae.mul(e.array,t.array,r.array),e._dirty=!0,e};Ye.multiply=Ye.mul;Ye.rotate=function(e,t,r){return Ae.rotate(e.array,t.array,r),e._dirty=!0,e};Ye.scale=function(e,t,r){return Ae.scale(e.array,t.array,r.array),e._dirty=!0,e};Ye.translate=function(e,t,r){return Ae.translate(e.array,t.array,r.array),e._dirty=!0,e};var fd=Ye,be=function(){this.array=ee.create(),this._dirty=!0};be.prototype={constructor:be,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return ee.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new be().copy(this)},copy:function(e){return ee.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return ee.determinant(this.array)},fromMat2d:function(e){return ee.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return ee.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return ee.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return ee.identity(this.array),this._dirty=!0,this},invert:function(){return ee.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return ee.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return ee.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return ee.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return ee.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return ee.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return ee.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return ee.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return ee.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return ee.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};be.adjoint=function(e,t){return ee.adjoint(e.array,t.array),e._dirty=!0,e};be.copy=function(e,t){return ee.copy(e.array,t.array),e._dirty=!0,e};be.determinant=function(e){return ee.determinant(e.array)};be.identity=function(e){return ee.identity(e.array),e._dirty=!0,e};be.invert=function(e,t){return ee.invert(e.array,t.array),e};be.mul=function(e,t,r){return ee.mul(e.array,t.array,r.array),e._dirty=!0,e};be.multiply=be.mul;be.fromMat2d=function(e,t){return ee.fromMat2d(e.array,t.array),e._dirty=!0,e};be.fromMat4=function(e,t){return ee.fromMat4(e.array,t.array),e._dirty=!0,e};be.fromQuat=function(e,t){return ee.fromQuat(e.array,t.array),e._dirty=!0,e};be.normalFromMat4=function(e,t){return ee.normalFromMat4(e.array,t.array),e._dirty=!0,e};be.rotate=function(e,t,r){return ee.rotate(e.array,t.array,r),e._dirty=!0,e};be.scale=function(e,t,r){return ee.scale(e.array,t.array,r.array),e._dirty=!0,e};be.transpose=function(e,t){return ee.transpose(e.array,t.array),e._dirty=!0,e};be.translate=function(e,t,r){return ee.translate(e.array,t.array,r.array),e._dirty=!0,e};var hd=be,Hi={linear:function(e){return e},quadraticIn:function(e){return e*e},quadraticOut:function(e){return e*(2-e)},quadraticInOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)},cubicIn:function(e){return e*e*e},cubicOut:function(e){return--e*e*e+1},cubicInOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},quarticIn:function(e){return e*e*e*e},quarticOut:function(e){return 1- --e*e*e*e},quarticInOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)},quinticIn:function(e){return e*e*e*e*e},quinticOut:function(e){return--e*e*e*e*e+1},quinticInOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)},sinusoidalIn:function(e){return 1-Math.cos(e*Math.PI/2)},sinusoidalOut:function(e){return Math.sin(e*Math.PI/2)},sinusoidalInOut:function(e){return .5*(1-Math.cos(Math.PI*e))},exponentialIn:function(e){return e===0?0:Math.pow(1024,e-1)},exponentialOut:function(e){return e===1?1:1-Math.pow(2,-10*e)},exponentialInOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(-Math.pow(2,-10*(e-1))+2)},circularIn:function(e){return 1-Math.sqrt(1-e*e)},circularOut:function(e){return Math.sqrt(1- --e*e)},circularInOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)},elasticIn:function(e){var t,r=.1,i=.4;return e===0?0:e===1?1:(!r||r<1?(r=1,t=i/4):t=i*Math.asin(1/r)/(2*Math.PI),-(r*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/i)))},elasticOut:function(e){var t,r=.1,i=.4;return e===0?0:e===1?1:(!r||r<1?(r=1,t=i/4):t=i*Math.asin(1/r)/(2*Math.PI),r*Math.pow(2,-10*e)*Math.sin((e-t)*(2*Math.PI)/i)+1)},elasticInOut:function(e){var t,r=.1,i=.4;return e===0?0:e===1?1:(!r||r<1?(r=1,t=i/4):t=i*Math.asin(1/r)/(2*Math.PI),(e*=2)<1?-.5*(r*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/i)):r*Math.pow(2,-10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/i)*.5+1)},backIn:function(e){var t=1.70158;return e*e*((t+1)*e-t)},backOut:function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},backInOut:function(e){var t=2.5949095;return(e*=2)<1?.5*(e*e*((t+1)*e-t)):.5*((e-=2)*e*((t+1)*e+t)+2)},bounceIn:function(e){return 1-Hi.bounceOut(1-e)},bounceOut:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},bounceInOut:function(e){return e<.5?Hi.bounceIn(e*2)*.5:Hi.bounceOut(e*2-1)*.5+.5}},dl=Hi,vl=12,cd="sans-serif",es=vl+"px "+cd,dd=20,vd=100,pd="007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";function _d(e){var t={};if(typeof JSON=="undefined")return t;for(var r=0;r<e.length;r++){var i=String.fromCharCode(r+32),n=(e.charCodeAt(r)-dd)/vd;t[i]=n}return t}var md=_d(pd),pl={createCanvas:function(){return typeof document!="undefined"&&document.createElement("canvas")},measureText:function(){var e,t;return function(r,i){if(!e){var n=pl.createCanvas();e=n&&n.getContext("2d")}if(e)return t!==i&&(t=e.font=i||es),e.measureText(r);r=r||"",i=i||es;var a=/^([0-9]*?)px$/.exec(i),o=+(a&&a[1])||vl,s=0;if(i.indexOf("mono")>=0)s=o*r.length;else for(var l=0;l<r.length;l++){var u=md[r[l]];s+=u==null?o:u*o}return{width:s}}}(),loadImage:function(e,t,r){var i=new Image;return i.onload=t,i.onerror=r,i.src=e,i}};gl(["Function","RegExp","Date","Error","CanvasGradient","CanvasPattern","Image","Canvas"],function(e,t){return e["[object "+t+"]"]=!0,e},{});gl(["Int8","Uint8","Uint8Clamped","Int16","Uint16","Int32","Uint32","Float32","Float64"],function(e,t){return e["[object "+t+"Array]"]=!0,e},{});var _l=Array.prototype,ml=_l.slice,gd=_l.map,ts=function(){}.constructor,yi=ts?ts.prototype:null,yd="__proto__";function xd(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];typeof console!="undefined"&&console.error.apply(console,e)}function Td(e,t){if(Object.assign)Object.assign(e,t);else for(var r in t)t.hasOwnProperty(r)&&r!==yd&&(e[r]=t[r]);return e}pl.createCanvas;function Yi(e){return!e||typeof e=="string"?!1:typeof e.length=="number"}function pa(e,t,r){if(!e)return[];if(!t)return bd(e);if(e.map&&e.map===gd)return e.map(t,r);for(var i=[],n=0,a=e.length;n<a;n++)i.push(t.call(r,e[n],n,e));return i}function gl(e,t,r,i){if(!!(e&&t)){for(var n=0,a=e.length;n<a;n++)r=t.call(i,r,e[n],n,e);return r}}function rs(e){if(!e)return[];if(Object.keys)return Object.keys(e);var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r);return t}function Ed(e,t){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];return function(){return e.apply(t,r.concat(ml.call(arguments)))}}yi&&sn(yi.bind)&&yi.call.bind(yi.bind);function sn(e){return typeof e=="function"}function Sd(e){return typeof e=="string"}function Vn(e){return typeof e=="number"}function Ad(e){return e.colorStops!=null}function wd(e){return e!==e}function bd(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return ml.apply(e,t)}function xi(e){return e==null?null:typeof e.trim=="function"?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}function Gn(){}var Ti=Math.pow,zi=Math.sqrt,is=1e-8,ns=zi(3),Ei=1/3;function Si(e){return e>-is&&e<is}function Md(e,t,r,i,n){var a=1-n;return a*a*(a*e+3*n*t)+n*n*(n*i+3*a*r)}function Ld(e,t,r,i,n,a){var o=i+3*(t-r)-e,s=3*(r-t*2+e),l=3*(t-e),u=e-n,f=s*s-3*o*l,h=s*l-9*o*u,d=l*l-3*s*u,c=0;if(Si(f)&&Si(h))if(Si(s))a[0]=0;else{var v=-l/s;v>=0&&v<=1&&(a[c++]=v)}else{var p=h*h-4*f*d;if(Si(p)){var _=h/f,v=-s/o+_,m=-_/2;v>=0&&v<=1&&(a[c++]=v),m>=0&&m<=1&&(a[c++]=m)}else if(p>0){var x=zi(p),g=f*s+1.5*o*(-h+x),y=f*s+1.5*o*(-h-x);g<0?g=-Ti(-g,Ei):g=Ti(g,Ei),y<0?y=-Ti(-y,Ei):y=Ti(y,Ei);var v=(-s-(g+y))/(3*o);v>=0&&v<=1&&(a[c++]=v)}else{var E=(2*f*s-3*o*h)/(2*zi(f*f*f)),S=Math.acos(E)/3,b=zi(f),A=Math.cos(S),v=(-s-2*b*A)/(3*o),m=(-s+b*(A+ns*Math.sin(S)))/(3*o),M=(-s+b*(A-ns*Math.sin(S)))/(3*o);v>=0&&v<=1&&(a[c++]=v),m>=0&&m<=1&&(a[c++]=m),M>=0&&M<=1&&(a[c++]=M)}}return c}var Cd=/cubic-bezier\(([0-9,\.e ]+)\)/;function yl(e){var t=e&&Cd.exec(e);if(t){var r=t[1].split(","),i=+xi(r[0]),n=+xi(r[1]),a=+xi(r[2]),o=+xi(r[3]);if(isNaN(i+n+a+o))return;var s=[];return function(l){return l<=0?0:l>=1?1:Ld(0,i,a,1,l,s)&&Md(0,n,o,1,s[0])}}}var Rd=function(){function e(t){this._inited=!1,this._startTime=0,this._pausedTime=0,this._paused=!1,this._life=t.life||1e3,this._delay=t.delay||0,this.loop=t.loop||!1,this.onframe=t.onframe||Gn,this.ondestroy=t.ondestroy||Gn,this.onrestart=t.onrestart||Gn,t.easing&&this.setEasing(t.easing)}return e.prototype.step=function(t,r){if(this._inited||(this._startTime=t+this._delay,this._inited=!0),this._paused){this._pausedTime+=r;return}var i=this._life,n=t-this._startTime-this._pausedTime,a=n/i;a<0&&(a=0),a=Math.min(a,1);var o=this.easingFunc,s=o?o(a):a;if(this.onframe(s),a===1)if(this.loop){var l=n%i;this._startTime=t-l,this._pausedTime=0,this.onrestart()}else return!0;return!1},e.prototype.pause=function(){this._paused=!0},e.prototype.resume=function(){this._paused=!1},e.prototype.setEasing=function(t){this.easing=t,this.easingFunc=sn(t)?t:dl[t]||yl(t)},e}(),Nd=Rd,as={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function qr(e){return e=Math.round(e),e<0?0:e>255?255:e}function os(e){return e<0?0:e>1?1:e}function kn(e){var t=e;return t.length&&t.charAt(t.length-1)==="%"?qr(parseFloat(t)/100*255):qr(parseInt(t,10))}function Zi(e){var t=e;return t.length&&t.charAt(t.length-1)==="%"?os(parseFloat(t)/100):os(parseFloat(t))}function Wn(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function it(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e}function _a(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var xl=new ul(20),Ai=null;function mr(e,t){Ai&&_a(Ai,t),Ai=xl.put(e,Ai||t.slice())}function Xn(e,t){if(!!e){t=t||[];var r=xl.get(e);if(r)return _a(t,r);e=e+"";var i=e.replace(/ /g,"").toLowerCase();if(i in as)return _a(t,as[i]),mr(e,t),t;var n=i.length;if(i.charAt(0)==="#"){if(n===4||n===5){var a=parseInt(i.slice(1,4),16);if(!(a>=0&&a<=4095)){it(t,0,0,0,1);return}return it(t,(a&3840)>>4|(a&3840)>>8,a&240|(a&240)>>4,a&15|(a&15)<<4,n===5?parseInt(i.slice(4),16)/15:1),mr(e,t),t}else if(n===7||n===9){var a=parseInt(i.slice(1,7),16);if(!(a>=0&&a<=16777215)){it(t,0,0,0,1);return}return it(t,(a&16711680)>>16,(a&65280)>>8,a&255,n===9?parseInt(i.slice(7),16)/255:1),mr(e,t),t}return}var o=i.indexOf("("),s=i.indexOf(")");if(o!==-1&&s+1===n){var l=i.substr(0,o),u=i.substr(o+1,s-(o+1)).split(","),f=1;switch(l){case"rgba":if(u.length!==4)return u.length===3?it(t,+u[0],+u[1],+u[2],1):it(t,0,0,0,1);f=Zi(u.pop());case"rgb":if(u.length!==3){it(t,0,0,0,1);return}return it(t,kn(u[0]),kn(u[1]),kn(u[2]),f),mr(e,t),t;case"hsla":if(u.length!==4){it(t,0,0,0,1);return}return u[3]=Zi(u[3]),ss(u,t),mr(e,t),t;case"hsl":if(u.length!==3){it(t,0,0,0,1);return}return ss(u,t),mr(e,t),t;default:return}}it(t,0,0,0,1)}}function ss(e,t){var r=(parseFloat(e[0])%360+360)%360/360,i=Zi(e[1]),n=Zi(e[2]),a=n<=.5?n*(i+1):n+i-n*i,o=n*2-a;return t=t||[],it(t,qr(Wn(o,a,r+1/3)*255),qr(Wn(o,a,r)*255),qr(Wn(o,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}var Pd=function(){function e(){this.firefox=!1,this.ie=!1,this.edge=!1,this.newEdge=!1,this.weChat=!1}return e}(),Dd=function(){function e(){this.browser=new Pd,this.node=!1,this.wxa=!1,this.worker=!1,this.svgSupported=!1,this.touchEventsSupported=!1,this.pointerEventsSupported=!1,this.domSupported=!1,this.transformSupported=!1,this.transform3dSupported=!1,this.hasGlobalWindow=typeof window!="undefined"}return e}(),$t=new Dd;typeof wx=="object"&&typeof wx.getSystemInfoSync=="function"?($t.wxa=!0,$t.touchEventsSupported=!0):typeof document=="undefined"&&typeof self!="undefined"?$t.worker=!0:typeof navigator=="undefined"?($t.node=!0,$t.svgSupported=!0):Id(navigator.userAgent,$t);function Id(e,t){var r=t.browser,i=e.match(/Firefox\/([\d.]+)/),n=e.match(/MSIE\s([\d.]+)/)||e.match(/Trident\/.+?rv:(([\d.]+))/),a=e.match(/Edge?\/([\d.]+)/),o=/micromessenger/i.test(e);i&&(r.firefox=!0,r.version=i[1]),n&&(r.ie=!0,r.version=n[1]),a&&(r.edge=!0,r.version=a[1],r.newEdge=+a[1].split(".")[0]>18),o&&(r.weChat=!0),t.svgSupported=typeof SVGRect!="undefined",t.touchEventsSupported="ontouchstart"in window&&!r.ie&&!r.edge,t.pointerEventsSupported="onpointerdown"in window&&(r.edge||r.ie&&+r.version>=11),t.domSupported=typeof document!="undefined";var s=document.documentElement.style;t.transform3dSupported=(r.ie&&"transition"in s||r.edge||"WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix||"MozPerspective"in s)&&!("OTransition"in s),t.transformSupported=t.transform3dSupported||r.ie&&+r.version>=9}var Tl=$t;function Od(e){return e.type==="linear"}function Fd(e){return e.type==="radial"}(function(){return Tl.hasGlobalWindow&&sn(window.btoa)?function(e){return window.btoa(unescape(e))}:typeof Buffer!="undefined"?function(e){return Buffer.from(e).toString("base64")}:function(e){return null}})();var ma=Array.prototype.slice;function bt(e,t,r){return(t-e)*r+e}function qn(e,t,r,i){for(var n=t.length,a=0;a<n;a++)e[a]=bt(t[a],r[a],i);return e}function Bd(e,t,r,i){for(var n=t.length,a=n&&t[0].length,o=0;o<n;o++){e[o]||(e[o]=[]);for(var s=0;s<a;s++)e[o][s]=bt(t[o][s],r[o][s],i)}return e}function wi(e,t,r,i){for(var n=t.length,a=0;a<n;a++)e[a]=t[a]+r[a]*i;return e}function ls(e,t,r,i){for(var n=t.length,a=n&&t[0].length,o=0;o<n;o++){e[o]||(e[o]=[]);for(var s=0;s<a;s++)e[o][s]=t[o][s]+r[o][s]*i}return e}function Ud(e,t){for(var r=e.length,i=t.length,n=r>i?t:e,a=Math.min(r,i),o=n[a-1]||{color:[0,0,0,0],offset:0},s=a;s<Math.max(r,i);s++)n.push({offset:o.offset,color:o.color.slice()})}function Hd(e,t,r){var i=e,n=t;if(!(!i.push||!n.push)){var a=i.length,o=n.length;if(a!==o){var s=a>o;if(s)i.length=o;else for(var l=a;l<o;l++)i.push(r===1?n[l]:ma.call(n[l]))}for(var u=i[0]&&i[0].length,l=0;l<i.length;l++)if(r===1)isNaN(i[l])&&(i[l]=n[l]);else for(var f=0;f<u;f++)isNaN(i[l][f])&&(i[l][f]=n[l][f])}}function jn(e){if(Yi(e)){var t=e.length;if(Yi(e[0])){for(var r=[],i=0;i<t;i++)r.push(ma.call(e[i]));return r}return ma.call(e)}return e}function Vi(e){return e[0]=Math.floor(e[0])||0,e[1]=Math.floor(e[1])||0,e[2]=Math.floor(e[2])||0,e[3]=e[3]==null?1:e[3],"rgba("+e.join(",")+")"}function zd(e){return Yi(e&&e[0])?2:1}var bi=0,Gi=1,El=2,kr=3,ga=4,ya=5,us=6;function fs(e){return e===ga||e===ya}function Mi(e){return e===Gi||e===El}var Ur=[0,0,0,0],Vd=function(){function e(t){this.keyframes=[],this.discrete=!1,this._invalid=!1,this._needsSort=!1,this._lastFr=0,this._lastFrP=0,this.propName=t}return e.prototype.isFinished=function(){return this._finished},e.prototype.setFinished=function(){this._finished=!0,this._additiveTrack&&this._additiveTrack.setFinished()},e.prototype.needsAnimate=function(){return this.keyframes.length>=1},e.prototype.getAdditiveTrack=function(){return this._additiveTrack},e.prototype.addKeyframe=function(t,r,i){this._needsSort=!0;var n=this.keyframes,a=n.length,o=!1,s=us,l=r;if(Yi(r)){var u=zd(r);s=u,(u===1&&!Vn(r[0])||u===2&&!Vn(r[0][0]))&&(o=!0)}else if(Vn(r)&&!wd(r))s=bi;else if(Sd(r))if(!isNaN(+r))s=bi;else{var f=Xn(r);f&&(l=f,s=kr)}else if(Ad(r)){var h=Td({},l);h.colorStops=pa(r.colorStops,function(c){return{offset:c.offset,color:Xn(c.color)}}),Od(r)?s=ga:Fd(r)&&(s=ya),l=h}a===0?this.valType=s:(s!==this.valType||s===us)&&(o=!0),this.discrete=this.discrete||o;var d={time:t,value:l,rawValue:r,percent:0};return i&&(d.easing=i,d.easingFunc=sn(i)?i:dl[i]||yl(i)),n.push(d),d},e.prototype.prepare=function(t,r){var i=this.keyframes;this._needsSort&&i.sort(function(p,_){return p.time-_.time});for(var n=this.valType,a=i.length,o=i[a-1],s=this.discrete,l=Mi(n),u=fs(n),f=0;f<a;f++){var h=i[f],d=h.value,c=o.value;h.percent=h.time/t,s||(l&&f!==a-1?Hd(d,c,n):u&&Ud(d.colorStops,c.colorStops))}if(!s&&n!==ya&&r&&this.needsAnimate()&&r.needsAnimate()&&n===r.valType&&!r._finished){this._additiveTrack=r;for(var v=i[0].value,f=0;f<a;f++)n===bi?i[f].additiveValue=i[f].value-v:n===kr?i[f].additiveValue=wi([],i[f].value,v,-1):Mi(n)&&(i[f].additiveValue=n===Gi?wi([],i[f].value,v,-1):ls([],i[f].value,v,-1))}},e.prototype.step=function(t,r){if(!this._finished){this._additiveTrack&&this._additiveTrack._finished&&(this._additiveTrack=null);var i=this._additiveTrack!=null,n=i?"additiveValue":"value",a=this.valType,o=this.keyframes,s=o.length,l=this.propName,u=a===kr,f,h=this._lastFr,d=Math.min,c,v;if(s===1)c=v=o[0];else{if(r<0)f=0;else if(r<this._lastFrP){var p=d(h+1,s-1);for(f=p;f>=0&&!(o[f].percent<=r);f--);f=d(f,s-2)}else{for(f=h;f<s&&!(o[f].percent>r);f++);f=d(f-1,s-2)}v=o[f+1],c=o[f]}if(!!(c&&v)){this._lastFr=f,this._lastFrP=r;var _=v.percent-c.percent,m=_===0?1:d((r-c.percent)/_,1);v.easingFunc&&(m=v.easingFunc(m));var x=i?this._additiveValue:u?Ur:t[l];if((Mi(a)||u)&&!x&&(x=this._additiveValue=[]),this.discrete)t[l]=m<1?c.rawValue:v.rawValue;else if(Mi(a))a===Gi?qn(x,c[n],v[n],m):Bd(x,c[n],v[n],m);else if(fs(a)){var g=c[n],y=v[n],E=a===ga;t[l]={type:E?"linear":"radial",x:bt(g.x,y.x,m),y:bt(g.y,y.y,m),colorStops:pa(g.colorStops,function(b,A){var M=y.colorStops[A];return{offset:bt(b.offset,M.offset,m),color:Vi(qn([],b.color,M.color,m))}}),global:y.global},E?(t[l].x2=bt(g.x2,y.x2,m),t[l].y2=bt(g.y2,y.y2,m)):t[l].r=bt(g.r,y.r,m)}else if(u)qn(x,c[n],v[n],m),i||(t[l]=Vi(x));else{var S=bt(c[n],v[n],m);i?this._additiveValue=S:t[l]=S}i&&this._addToTarget(t)}}},e.prototype._addToTarget=function(t){var r=this.valType,i=this.propName,n=this._additiveValue;r===bi?t[i]=t[i]+n:r===kr?(Xn(t[i],Ur),wi(Ur,Ur,n,1),t[i]=Vi(Ur)):r===Gi?wi(t[i],t[i],n,1):r===El&&ls(t[i],t[i],n,1)},e}(),Gd=function(){function e(t,r,i,n){if(this._tracks={},this._trackKeys=[],this._maxTime=0,this._started=0,this._clip=null,this._target=t,this._loop=r,r&&n){xd("Can' use additive animation on looped animation.");return}this._additiveAnimators=n,this._allowDiscrete=i}return e.prototype.getMaxTime=function(){return this._maxTime},e.prototype.getDelay=function(){return this._delay},e.prototype.getLoop=function(){return this._loop},e.prototype.getTarget=function(){return this._target},e.prototype.changeTarget=function(t){this._target=t},e.prototype.when=function(t,r,i){return this.whenWithKeys(t,r,rs(r),i)},e.prototype.whenWithKeys=function(t,r,i,n){for(var a=this._tracks,o=0;o<i.length;o++){var s=i[o],l=a[s];if(!l){l=a[s]=new Vd(s);var u=void 0,f=this._getAdditiveTrack(s);if(f){var h=f.keyframes,d=h[h.length-1];u=d&&d.value,f.valType===kr&&u&&(u=Vi(u))}else u=this._target[s];if(u==null)continue;t>0&&l.addKeyframe(0,jn(u),n),this._trackKeys.push(s)}l.addKeyframe(t,jn(r[s]),n)}return this._maxTime=Math.max(this._maxTime,t),this},e.prototype.pause=function(){this._clip.pause(),this._paused=!0},e.prototype.resume=function(){this._clip.resume(),this._paused=!1},e.prototype.isPaused=function(){return!!this._paused},e.prototype.duration=function(t){return this._maxTime=t,this._force=!0,this},e.prototype._doneCallback=function(){this._setTracksFinished(),this._clip=null;var t=this._doneCbs;if(t)for(var r=t.length,i=0;i<r;i++)t[i].call(this)},e.prototype._abortedCallback=function(){this._setTracksFinished();var t=this.animation,r=this._abortedCbs;if(t&&t.removeClip(this._clip),this._clip=null,r)for(var i=0;i<r.length;i++)r[i].call(this)},e.prototype._setTracksFinished=function(){for(var t=this._tracks,r=this._trackKeys,i=0;i<r.length;i++)t[r[i]].setFinished()},e.prototype._getAdditiveTrack=function(t){var r,i=this._additiveAnimators;if(i)for(var n=0;n<i.length;n++){var a=i[n].getTrack(t);a&&(r=a)}return r},e.prototype.start=function(t){if(!(this._started>0)){this._started=1;for(var r=this,i=[],n=this._maxTime||0,a=0;a<this._trackKeys.length;a++){var o=this._trackKeys[a],s=this._tracks[o],l=this._getAdditiveTrack(o),u=s.keyframes,f=u.length;if(s.prepare(n,l),s.needsAnimate())if(!this._allowDiscrete&&s.discrete){var h=u[f-1];h&&(r._target[s.propName]=h.rawValue),s.setFinished()}else i.push(s)}if(i.length||this._force){var d=new Nd({life:n,loop:this._loop,delay:this._delay||0,onframe:function(c){r._started=2;var v=r._additiveAnimators;if(v){for(var p=!1,_=0;_<v.length;_++)if(v[_]._clip){p=!0;break}p||(r._additiveAnimators=null)}for(var _=0;_<i.length;_++)i[_].step(r._target,c);var m=r._onframeCbs;if(m)for(var _=0;_<m.length;_++)m[_](r._target,c)},ondestroy:function(){r._doneCallback()}});this._clip=d,this.animation&&this.animation.addClip(d),t&&d.setEasing(t)}else this._doneCallback();return this}},e.prototype.stop=function(t){if(!!this._clip){var r=this._clip;t&&r.onframe(1),this._abortedCallback()}},e.prototype.delay=function(t){return this._delay=t,this},e.prototype.during=function(t){return t&&(this._onframeCbs||(this._onframeCbs=[]),this._onframeCbs.push(t)),this},e.prototype.done=function(t){return t&&(this._doneCbs||(this._doneCbs=[]),this._doneCbs.push(t)),this},e.prototype.aborted=function(t){return t&&(this._abortedCbs||(this._abortedCbs=[]),this._abortedCbs.push(t)),this},e.prototype.getClip=function(){return this._clip},e.prototype.getTrack=function(t){return this._tracks[t]},e.prototype.getTracks=function(){var t=this;return pa(this._trackKeys,function(r){return t._tracks[r]})},e.prototype.stopTracks=function(t,r){if(!t.length||!this._clip)return!0;for(var i=this._tracks,n=this._trackKeys,a=0;a<t.length;a++){var o=i[t[a]];o&&!o.isFinished()&&(r?o.step(this._target,1):this._started===1&&o.step(this._target,0),o.setFinished())}for(var s=!0,a=0;a<n.length;a++)if(!i[n[a]].isFinished()){s=!1;break}return s&&this._abortedCallback(),s},e.prototype.saveTo=function(t,r,i){if(!!t){r=r||this._trackKeys;for(var n=0;n<r.length;n++){var a=r[n],o=this._tracks[a];if(!(!o||o.isFinished())){var s=o.keyframes,l=s[i?0:s.length-1];l&&(t[a]=jn(l.rawValue))}}}},e.prototype.__changeFinalValue=function(t,r){r=r||rs(t);for(var i=0;i<r.length;i++){var n=r[i],a=this._tracks[n];if(!!a){var o=a.keyframes;if(o.length>1){var s=o.pop();a.addKeyframe(s.time,t[n]),a.prepare(this._maxTime,a.getAdditiveTrack())}}}},e}(),kd=Gd,Wd={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var r=this,i;if(e){for(var n=e.split("."),a=r,o=0,s=n.length;o<s;o++)!a||(a=a[n[o]]);a&&(i=a)}else i=r;if(i==null)throw new Error("Target "+e+" not exists");var l=this._animators,u=new kd(i,t),f=this;return u.during(function(){f.__zr&&f.__zr.refresh()}).done(function(){var h=l.indexOf(u);h>=0&&l.splice(h,1)}),l.push(u),this.__zr&&this.__zr.animation.addAnimator(u),u},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,r=t.length,i=0;i<r;i++)t[i].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}},Xd=Wd,qd=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,jd=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,Yd=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,Zd=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Kd=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,$d=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,Qd=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(Et.prototype,Xd);R.import(qd);R.import(el);R.import(jd);R.import(Yd);R.import(Zd);R.import(Kd);R.import($d);R.import(Qd);function Jd(e){return!e||e==="none"}function Sl(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function ev(e){return e.getZr&&e.setOption}var tv=Ht.prototype.addToScene,rv=Ht.prototype.removeFromScene;Ht.prototype.addToScene=function(e){if(tv.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(r){r.__zr=t,r.addAnimatorsToZr&&r.addAnimatorsToZr(t)})}};Ht.prototype.removeFromScene=function(e){rv.call(this,e),e.traverse(function(t){var r=t.__zr;t.__zr=null,r&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(r)})};Ct.prototype.setTextureImage=function(e,t,r,i){if(!!this.shader){var n=r.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),Jd(t)||(o=q.loadTexture(t,r,i,function(s){a.enableTexture(e),n&&n.refresh()}),a.set(e,o)),o}};var q={};q.Renderer=Xr;q.Node=Et;q.Mesh=Da;q.Shader=R;q.Material=Ct;q.Texture=Y;q.Texture2D=ae;q.Geometry=Se;q.SphereGeometry=Jc;q.PlaneGeometry=Ua;q.CubeGeometry=hl;q.AmbientLight=td;q.DirectionalLight=id;q.PointLight=ad;q.SpotLight=sd;q.PerspectiveCamera=Ce;q.OrthographicCamera=Jr;q.Vector2=et;q.Vector3=P;q.Vector4=ld;q.Quaternion=tl;q.Matrix2=ud;q.Matrix2d=fd;q.Matrix3=hd;q.Matrix4=z;q.Plane=ol;q.Ray=qi;q.BoundingBox=Ge;q.Frustum=Oa;var Li=null;function iv(){return Li!==null||(Li=rr.createBlank("rgba(255,255,255,0)").image),Li}function hs(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function cs(e){if((e.wrapS===Y.REPEAT||e.wrapT===Y.REPEAT)&&e.image){var t=hs(e.width),r=hs(e.height);if(t!==e.width||r!==e.height){var i=document.createElement("canvas");i.width=t,i.height=r;var n=i.getContext("2d");n.drawImage(e.image,0,0,t,r),e.image=i}}}q.loadTexture=function(e,t,r,i){typeof r=="function"&&(i=r,r={}),r=r||{};for(var n=Object.keys(r).sort(),a="",o=0;o<n.length;o++)a+=n[o]+"_"+r[n[o]]+"_";var s=t.__textureCache=t.__textureCache||new ul(20);if(ev(e)){var l=e.__textureid__,u=s.get(a+l);if(u)u.texture.surface.setECharts(e),i&&i(u.texture);else{var f=new Oc(e);f.onupdate=function(){t.getZr().refresh()},u={texture:f.getTexture()};for(var o=0;o<n.length;o++)u.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_ec__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),i&&i(u.texture)}return u.texture}else if(Sl(e)){var l=e.__textureid__,u=s.get(a+l);if(!u){u={texture:new q.Texture2D({image:e})};for(var o=0;o<n.length;o++)u.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_image__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),cs(u.texture),i&&i(u.texture)}return u.texture}else{var u=s.get(a+e);if(u)u.callbacks?u.callbacks.push(i):i&&i(u.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){u={callbacks:[i]};var h=rr.loadTexture(e,{exposure:r.exposure,fileType:"hdr"},function(){h.dirty(),u.callbacks.forEach(function(v){v&&v(h)}),u.callbacks=null});u.texture=h,s.put(a+e,u)}else{for(var h=new q.Texture2D({image:new Image}),o=0;o<n.length;o++)h[n[o]]=r[n[o]];u={texture:h,callbacks:[i]};var d=h.image;d.onload=function(){h.image=d,cs(h),h.dirty(),u.callbacks.forEach(function(p){p&&p(h)}),u.callbacks=null},d.crossOrigin="Anonymous",d.src=e,h.image=iv(),s.put(a+e,u)}return u.texture}};q.createAmbientCubemap=function(e,t,r,i){e=e||{};var n=e.texture,a=ot.firstNotNull(e.exposure,1),o=new Wc({intensity:ot.firstNotNull(e.specularIntensity,1)}),s=new qc({intensity:ot.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=q.loadTexture(n,r,{exposure:a},function(){o.cubemap.flipY=!1,o.prefilter(t,32),s.coefficients=Kc.projectEnvironmentMap(t,o.cubemap,{lod:1}),i&&i()}),{specular:o,diffuse:s}};q.createBlankTexture=rr.createBlank;q.isImage=Sl;q.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};q.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=ba(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};q.directionFromAlphaBeta=function(e,t){var r=e/180*Math.PI+Math.PI/2,i=-t/180*Math.PI+Math.PI/2,n=[],a=Math.sin(r);return n[0]=a*Math.cos(i),n[1]=-Math.cos(r),n[2]=a*Math.sin(i),n};q.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};q.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];q.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=R.source(e+".vertex"),r=R.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),r||console.error("Fragment shader of '%s' not exits",e);var i=new R(t,r);return i.name=e,i};q.createMaterial=function(e,t){t instanceof Array||(t=[t]);var r=q.createShader(e),i=new Ct({shader:r});return t.forEach(function(n){typeof n=="string"&&i.define(n)}),i};q.setMaterialFromModel=function(e,t,r,i){t.autoUpdateTextureStatus=!1;var n=r.getModel(e+"Material"),a=n.get("detailTexture"),o=ot.firstNotNull(n.get("textureTiling"),1),s=ot.firstNotNull(n.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?q.Texture.REPEAT:q.Texture.CLAMP_TO_EDGE,u={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var f=n.get("roughness"),h=n.get("metalness");h!=null?isNaN(h)&&(t.setTextureImage("metalnessMap",h,i,u),h=ot.firstNotNull(n.get("metalnessAdjust"),.5)):h=0,f!=null?isNaN(f)&&(t.setTextureImage("roughnessMap",f,i,u),f=ot.firstNotNull(n.get("roughnessAdjust"),.5)):f=.5;var d=n.get("normalTexture");t.setTextureImage("detailMap",a,i,u),t.setTextureImage("normalMap",d,i,u),t.set({roughness:f,metalness:h,detailUvRepeat:o,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",a,i,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",a,i,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="hatching"){var c=n.get("hatchingTextures")||[];c.length<6;for(var v=0;v<6;v++)t.setTextureImage("hatch"+(v+1),c[v],i,{anisotropic:8,wrapS:q.Texture.REPEAT,wrapT:q.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}};q.updateVertexAnimation=function(e,t,r,i){var n=i.get("animation"),a=i.get("animationDurationUpdate"),o=i.get("animationEasingUpdate"),s=r.shadowDepthMaterial;if(n&&t&&a>0&&t.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)r.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),s&&s.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};var k=q,Al;Al=Tl.hasGlobalWindow&&(window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.msRequestAnimationFrame&&window.msRequestAnimationFrame.bind(window)||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame)||function(e){return setTimeout(e,16)};var nv=Al,fe=function(e,t){this.id=e,this.zr=t;try{this.renderer=new Xr({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(i){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(i);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new Gh({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new rn({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};fe.prototype.setUnpainted=function(){};fe.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var r=this.zr;e.scene.traverse(function(i){i.__zr=r,i.addAnimatorsToZr&&i.addAnimatorsToZr(r)})}};function wl(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}fe.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(wl,this),e.layer=null,this._viewsToDispose.push(e))}};fe.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(wl,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};fe.prototype.resize=function(e,t){var r=this.renderer;r.resize(e,t)};fe.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};fe.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};fe.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};fe.prototype.needsRefresh=function(){this.zr.refresh()};fe.prototype.refresh=function(e){this._backgroundColor=e?k.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};fe.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};fe.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};fe.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var av=1;fe.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var r=!1,i=0;i<this.views.length;i++)r=this.views[i].needsAccumulate()||r;if(!r)return;function n(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var o=!0,s=0;s<t.views.length;s++)o=t.views[s].isAccumulateFinished()&&r;o||(t._doRender(!0),e?n(a):nv(function(){n(a)}))}}this._accumulatingId=av++,e?n(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){n(t._accumulatingId)},50)};fe.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(Ki(this._textureList),Ki(this._geometriesList));for(var r=0;r<this.views.length;r++)ov(this.views[r].scene,e,t);this._textureList&&($i(this.renderer,this._textureList),$i(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function Ki(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function $i(e,t){for(var r=0;r<t.length;r++)t[r].__used__||t[r].dispose(e)}function Ci(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function ov(e,t,r){var i,n;e.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==i)for(var u=l.getTextureUniforms(),f=0;f<u.length;f++){var h=u[f],d=l.uniforms[h].value;if(!!d){if(d instanceof Y)Ci(d,t);else if(d instanceof Array)for(var c=0;c<d.length;c++)d[c]instanceof Y&&Ci(d[c],t)}}s!==n&&Ci(s,r),i=l,n=s}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&Ci(e.lights[a].cubemap,t)}fe.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(Ki(this._textureList),Ki(this._geometriesList),$i(this.renderer,this._textureList),$i(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};fe.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};fe.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),r=t&&t.target,i=this._hovered;this._hovered=t,i&&r!==i.target&&(i.relatedTarget=r,this._dispatchEvent("mouseout",e,i),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!i||r!==i.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};fe.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};fe.prototype.onclick=fe.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(t*t+r*r)>20)){e=e.event;var i=this.pickObject(e.offsetX,e.offsetY);i&&(this._dispatchEvent(e.type,e,i),this._dispatchDataEvent(e.type,e,i));var n=this._clickToSetFocusPoint(e);if(n){var a=n.view.setDOFFocusOnPoint(n.distance);a&&this.zr.refresh()}}}};fe.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,r=t.viewport,i=this.views.length-1;i>=0;i--){var n=this.views[i];if(n.hasDOF()&&n.containPoint(e.offsetX,e.offsetY)){this._picking.scene=n.scene,this._picking.camera=n.camera,t.viewport=n.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=n,a}}t.viewport=r};fe.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};fe.prototype.pickObject=function(e,t){for(var r=[],i=this.renderer,n=i.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,i.viewport=o.viewport,this._picking.pickAll(e,t,r))}return i.viewport=n,r.sort(function(s,l){return s.distance-l.distance}),r[0]};fe.prototype._dispatchEvent=function(e,t,r){r||(r={});var i=r.target;for(r.cancelBubble=!1,r.event=t,r.type=e,r.offsetX=t.offsetX,r.offsetY=t.offsetY;i&&(i.trigger(e,r),i=i.getParent(),!r.cancelBubble););this._dispatchToView(e,r)};fe.prototype._dispatchDataEvent=function(e,t,r){var i=r&&r.target,n=i&&i.dataIndex,a=i&&i.seriesIndex,o=i&&i.eventData,s=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var u={target:l};const f=xr(l);e==="mousemove"&&(n!=null?n!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(f.dataIndex=this._lastDataIndex,f.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(f.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0),this._lastEventData=o,this._lastDataIndex=n,this._lastSeriesIndex=a),f.eventData=o,f.dataIndex=n,f.seriesIndex=a,(o!=null||parseInt(n,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(u,e,t),s&&this.zr.handler.dispatchToElement(u,"mouseover",t))};fe.prototype._dispatchToView=function(e,t){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(t.offsetX,t.offsetY)&&this.views[r].trigger(e,t)};Object.assign(fe.prototype,Ra);var bl=fe,sv=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function Wr(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var r=e[t].normal,i=e[t].emphasis;r&&(e[t]=r),i&&(e.emphasis=e.emphasis||{},e.emphasis[t]=i)}}function lv(e){Wr(e,"itemStyle"),Wr(e,"lineStyle"),Wr(e,"areaStyle"),Wr(e,"label")}function Ri(e){!e||(e instanceof Array||(e=[e]),ne(e,function(t){if(t.axisLabel){var r=t.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function uv(e){ne(e.series,function(t){na(sv,t.type)>=0&&(lv(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),Ri(e.xAxis3D),Ri(e.yAxis3D),Ri(e.zAxis3D),Ri(e.grid3D),Wr(e.geo3D)}function Ml(e){this._layers={},this._zr=e}Ml.prototype.update=function(e,t){var r=this,i=t.getZr();if(!i.getWidth()||!i.getHeight()){console.warn("Dom has no width or height");return}function n(s){i.setSleepAfterStill(0);var l;s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var u=r._layers,f=u[l];if(!f){if(f=u[l]=new bl("gl-"+l,i),i.painter.isSingleCanvas()){f.virtual=!0;var h=new Os({z:1e4,style:{image:f.renderer.canvas},silent:!0});f.__hostImage=h,i.add(h)}i.painter.insertLayer(l,f)}return f.__hostImage&&f.__hostImage.setStyle({width:f.renderer.getWidth(),height:f.renderer.getHeight()}),f}function a(s,l){s&&s.traverse(function(u){u.isRenderable&&u.isRenderable()&&(u.ignorePicking=u.$ignorePicking!=null?u.$ignorePicking:l)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(s,l){if(s!=="series"){var u=t.getViewOfComponentModel(l),f=l.coordinateSystem;if(u.__ecgl__){var h;if(f){if(!f.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}h=f.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}h=f.viewGL}var h=f.viewGL,d=n(l);d.addView(h),u.afterRender&&u.afterRender(l,e,t,d),a(u.groupGL,l.get("silent"))}}}),e.eachSeries(function(s){var l=t.getViewOfSeriesModel(s),u=s.coordinateSystem;if(l.__ecgl__){if(u&&!u.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var f=u&&u.viewGL||l.viewGL,h=n(s);h.addView(f),l.afterRender&&l.afterRender(s,e,t,h),a(l.groupGL,s.get("silent"))}})};Nu(function(e){var t=e.getZr(),r=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(i){i instanceof bl&&i.dispose()}),r.call(this)},t.painter.getRenderedCanvas=function(i){if(i=i||{},this._singleCanvas)return this._layers[0].dom;var n=document.createElement("canvas"),a=i.pixelRatio||this.dpr;n.width=this.getWidth()*a,n.height=this.getHeight()*a;var o=n.getContext("2d");o.dpr=a,o.clearRect(0,0,n.width,n.height),i.backgroundColor&&(o.fillStyle=i.backgroundColor,o.fillRect(0,0,n.width,n.height));var s=this.storage.getDisplayList(!0),l={},u,f=this;function h(p,_){var m=f._zlevelList;p==null&&(p=-1/0);for(var x,g=0;g<m.length;g++){var y=m[g],E=f._layers[y];if(!E.__builtin__&&y>p&&y<_){x=E;break}}x&&x.renderToCanvas&&(o.save(),x.renderToCanvas(o),o.restore())}for(var d={ctx:o},c=0;c<s.length;c++){var v=s[c];v.zlevel!==u&&(h(u,v.zlevel),u=v.zlevel),this._doPaintEl(v,d,!0,null,l)}return h(u,1/0),n}});Pu(function(e,t){var r=t.getZr(),i=r.__egl=r.__egl||new Ml(r);i.update(e,t)});Du(uv);var ln={vec2:H,vec3:T,vec4:D,mat2:Te,mat2d:Ae,mat3:ee,mat4:C,quat:j},fv={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}};function xa(e,t){const r=e.getItemVisual(t,"style");if(r){const i=e.getVisual("drawType");return r[i]}}function ds(e,t){const r=e.getItemVisual(t,"style");return r&&r.opacity}function hv(e,t){var r=[];return ne(e.dimensions,function(i){var n=e.getDimensionInfo(i),a=n.otherDims,o=a[t];o!=null&&o!==!1&&(r[o]=n.name)}),r}function cv(e,t,r){function i(h){var d=!0,c=[],v=hv(n,"tooltip");v.length?ne(v,function(_){p(n.get(_,t),_)}):ne(h,p);function p(_,m){var x=n.getDimensionInfo(m);if(!(!x||x.otherDims.tooltip===!1)){var g=x.type,y="- "+(x.tooltipName||x.name)+": "+(g==="ordinal"?_+"":g==="time"?r?"":Ou("yyyy/MM/dd hh:mm:ss",_):to(_));y&&c.push(ai(y))}}return(d?"<br/>":"")+c.join(d?"<br/>":", ")}var n=e.getData(),a=e.getRawValue(t),o=Xe(a)?i(a):ai(to(a)),s=n.getName(t),l=xa(n,t);Bt(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var u=Iu(l),f=e.name;return f==="\0-"&&(f=""),f=f?ai(f)+(r?": ":"<br/>"):"",r?u+f+o:f+u+(s?ai(s)+": "+o:o)}function dv(e,t,r){r=r||e.getSource();var i=t||Fu(e.get("coordinateSystem"))||["x","y","z"],n=Bu(r,{dimensionsDefine:r.dimensionsDefine||e.get("dimensions"),encodeDefine:r.encodeDefine||e.get("encode"),coordDimensions:i.map(function(s){var l=e.getReferringComponents(s+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:s}})});e.get("coordinateSystem")==="cartesian3D"&&n.forEach(function(s){if(i.indexOf(s.coordDim)>=0){var l=e.getReferringComponents(s.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(s.ordinalMeta=l.getOrdinalMeta())}});var a=Uu.enableDataStack(e,n,{byIndex:!0,stackedCoordDimension:"z"}),o=new Hu(n,e);return o.setCalculationInfo(a),o.initData(r),o}var za={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var r in t)e||!t[r].value?t[r].value=[]:t[r].value=Array.prototype.slice.call(t[r].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}};function Yn(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function Ll(e,t,r,i,n){var a=r,o=e[t];Yn(e,t,i);for(var s=r;s<i;s++)n(e[s],o)<0&&(Yn(e,s,a),a++);return Yn(e,i,a),a}function Qi(e,t,r,i){if(r<i){var n=Math.floor((r+i)/2),a=Ll(e,n,r,i,t);Qi(e,t,r,a-1),Qi(e,t,a+1,i)}}function Ji(){this._parts=[]}Ji.prototype.step=function(e,t,r){var i=e.length;if(r===0){this._parts=[],this._sorted=!1;var n=Math.floor(i/2);this._parts.push({pivot:n,left:0,right:i-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var o=0;o<a.length;o++)a[o].pivot=Ll(e,a[o].pivot,a[o].left,a[o].right,t);for(var s=[],o=0;o<a.length;o++){var l=a[o].left,u=a[o].pivot-1;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u});var l=a[o].pivot+1,u=a[o].right;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u})}a=this._parts=s}else for(var o=0;o<Math.floor(a.length/10);o++){var f=a.length-1-this._currentSortPartIdx;if(Qi(e,t,a[f].left,a[f].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}};Ji.sort=Qi;var Tr=ln.vec3,vs=Tr.create(),ps=Tr.create(),_s=Tr.create(),vv={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var r=this.indices;if(t===0){var i=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new r.constructor(r.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var n=0,a,o=0;o<r.length;){i.get(r[o++],vs),i.get(r[o++],ps),i.get(r[o++],_s);var s=Tr.sqrDist(vs,e),l=Tr.sqrDist(ps,e),u=Tr.sqrDist(_s,e),f=Math.min(s,l);f=Math.min(f,u),o===3?(a=f,f=0):f=f-a,this._triangleZList[n++]=f}}for(var h=this._sortedTriangleIndices,o=0;o<h.length;o++)h[o]=o;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var o=0;o<3;o++)this._progressiveQuickSort(t*3+o);for(var d=this._indicesTmp,c=this._triangleZListTmp,v=this._triangleZList,o=0;o<this.triangleCount;o++){var p=h[o]*3,_=o*3;d[_++]=r[p++],d[_++]=r[p++],d[_]=r[p],c[o]=v[h[o]]}var m=this._indicesTmp;this._indicesTmp=this.indices,this.indices=m;var m=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=m,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):Ji.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;this._quickSort=this._quickSort||new Ji,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}};function en(e,t,r,i,n,a,o){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=i,this.height=n,this.offsetX=t,this.offsetY=r,this.dpr=o,this.gap=a}en.prototype={constructor:en,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,r){var i=e.getBoundingRect();t==null&&(t=i.width),r==null&&(r=i.height),t*=this.dpr,r*=this.dpr,this._fitElement(e,t,r);var n=this._x,a=this._y,o=this.width*this.dpr,s=this.height*this.dpr,l=this.gap;if(n+t+l>o&&(n=this._x=0,a+=this._rowHeight+l,this._y=a,this._rowHeight=0),this._x+=t+l,this._rowHeight=Math.max(this._rowHeight,r),a+r+l>s)return null;e.x+=this.offsetX*this.dpr+n,e.y+=this.offsetY*this.dpr+a,this._zr.add(e);var u=[this.offsetX/this.width,this.offsetY/this.height],f=[[n/o+u[0],a/s+u[1]],[(n+t)/o+u[0],(a+r)/s+u[1]]];return f},_fitElement:function(e,t,r){var i=e.getBoundingRect(),n=t/i.width,a=r/i.height;e.x=-i.x*n,e.y=-i.y*a,e.scaleX=n,e.scaleY=a,e.update()}};function Ta(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new ae({image:t,flipY:!1});var r=this;this._zr=zu(t);var i=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new en(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}Ta.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,r=t.length,i=r*this._nodeWidth%e,n=Math.floor(r*this._nodeWidth/e)*this._nodeHeight;if(!(n>=e)){var a=(i+this._nodeWidth)*this._dpr,o=(n+this._nodeHeight)*this._dpr;try{this._zr.resize({width:a,height:o})}catch{this._canvas.width=a,this._canvas.height=o}var s=new en(this._zr,i,n,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(s),s}},add:function(e,t,r){if(this._coords[e.id])return this._coords[e.id];var i=this._getCurrentNode().add(e,t,r);if(!i){var n=this._expand();if(!n)return;i=n.add(e,t,r)}return this._coords[e.id]=i,i},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};var ms=[0,1,2,0,2,3],Cl=Se.extend(function(){return{attributes:{position:new Se.Attribute("position","float",3,"POSITION"),texcoord:new Se.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new Se.Attribute("offset","float",2),color:new Se.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,r=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==r&&(this.indices=t>65535?new Uint32Array(r*3):new Uint16Array(r*3))},setSpriteAlign:function(e,t,r,i,n){r==null&&(r="left"),i==null&&(i="top");var a,o,s,l;switch(n=n||0,r){case"left":a=n,s=t[0]+n;break;case"center":case"middle":a=-t[0]/2,s=t[0]/2;break;case"right":a=-t[0]-n,s=-n;break}switch(i){case"bottom":o=n,l=t[1]+n;break;case"middle":o=-t[1]/2,l=t[1]/2;break;case"top":o=-t[1]-n,l=-n;break}var u=e*4,f=this.attributes.offset;f.set(u,[a,l]),f.set(u+1,[s,l]),f.set(u+2,[s,o]),f.set(u+3,[a,o])},addSprite:function(e,t,r,i,n,a){var o=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,r,i,n,a);for(var s=0;s<ms.length;s++)this.indices[this._faceOffset*3+s]=ms[s]+o;return this._faceOffset+=2,this._vertexOffset+=4,o/4},setSprite:function(e,t,r,i,n,a,o){for(var s=e*4,l=this.attributes,u=0;u<4;u++)l.position.set(s+u,t);var f=l.texcoord;f.set(s,[i[0][0],i[0][1]]),f.set(s+1,[i[1][0],i[0][1]]),f.set(s+2,[i[1][0],i[1][1]]),f.set(s+3,[i[0][0],i[1][1]]),this.setSpriteAlign(e,r,n,a,o)}});br(Cl.prototype,za);var pv=Cl,_v=`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`;k.Shader.import(_v);var Rl=k.Mesh.extend(function(){var e=new pv({dynamic:!0}),t=new k.Material({shader:k.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}}),Zn=ln.vec3,gs=[[0,0],[1,1]],Nl=Se.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new Se.Attribute("position","float",3,"POSITION"),positionPrev:new Se.Attribute("positionPrev","float",3),positionNext:new Se.Attribute("positionNext","float",3),prevPositionPrev:new Se.Attribute("prevPositionPrev","float",3),prevPosition:new Se.Attribute("prevPosition","float",3),prevPositionNext:new Se.Attribute("prevPositionNext","float",3),offset:new Se.Attribute("offset","float",1),color:new Se.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=Zn.dist(e,t)+Zn.dist(r,t)+Zn.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(gs)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(gs)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=e[2],u=t[0],f=t[1],h=t[2],d=r[0],c=r[1],v=r[2],p=i[0],_=i[1],m=i[2],x=this._getCubicCurveApproxStep(e,t,r,i),g=x*x,y=g*x,E=3*x,S=3*g,b=6*g,A=6*y,M=o-u*2+d,O=s-f*2+c,L=l-h*2+v,U=(u-d)*3-o+p,F=(f-c)*3-s+_,N=(h-v)*3-l+m,V=o,B=s,Z=l,I=(u-o)*E+M*S+U*y,ce=(f-s)*E+O*S+F*y,G=(h-l)*E+L*S+N*y,xe=M*b+U*A,oe=O*b+F*A,pe=L*b+N*A,_e=U*A,Oe=F*A,Fe=N*A,Le=0,ze=0,$e=Math.ceil(1/x),Be=new Float32Array(($e+1)*3),Be=[],st=0,ze=0;ze<$e+1;ze++)Be[st++]=V,Be[st++]=B,Be[st++]=Z,V+=I,B+=ce,Z+=G,I+=xe,ce+=oe,G+=pe,xe+=_e,oe+=Oe,pe+=Fe,Le+=x,Le>1&&(V=I>0?Math.min(V,p):Math.max(V,p),B=ce>0?Math.min(B,_):Math.max(B,_),Z=G>0?Math.min(Z,m):Math.max(Z,m));return this.addPolyline(Be,n,a)},addLine:function(e,t,r,i){return this.addPolyline([e,t],r,i)},addPolyline:function(e,t,r,i,n){if(!!e.length){var a=typeof e[0]!="number";if(n==null&&(n=a?e.length:e.length/3),!(n<2)){i==null&&(i=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",o=a?typeof t[0]!="number":t.length/4===n,s=this.attributes.position,l=this.attributes.positionPrev,u=this.attributes.positionNext,f=this.attributes.color,h=this.attributes.offset,d=this.indices,c=this._vertexOffset,v,p;r=Math.max(r,.01);for(var _=i;_<n;_++){if(a)v=e[_],o?p=t[_]:p=t;else{var m=_*3;if(v=v||[],v[0]=e[m],v[1]=e[m+1],v[2]=e[m+2],o){var x=_*4;p=p||[],p[0]=t[x],p[1]=t[x+1],p[2]=t[x+2],p[3]=t[x+3]}else p=t}if(this.useNativeLine?_>1&&(s.copy(c,c-1),f.copy(c,c-1),c++):(_<n-1&&(l.set(c+2,v),l.set(c+3,v)),_>0&&(u.set(c-2,v),u.set(c-1,v)),s.set(c,v),s.set(c+1,v),f.set(c,p),f.set(c+1,p),h.set(c,r/2),h.set(c+1,-r/2),c+=2),this.useNativeLine)f.set(c,p),s.set(c,v),c++;else if(_>0){var g=this._triangleOffset*3,d=this.indices;d[g]=c-4,d[g+1]=c-3,d[g+2]=c-2,d[g+3]=c-3,d[g+4]=c-1,d[g+5]=c-2,this._triangleOffset+=2}}if(!this.useNativeLine){var y=this._vertexOffset,E=this._vertexOffset+n*2;l.copy(y,y+2),l.copy(y+1,y+3),u.copy(E-1,E-3),u.copy(E-2,E-4)}return this._vertexOffset=c,this._vertexOffset}}},setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});br(Nl.prototype,za);var Va=Nl,mv=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Pl=Vu.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(e){return cv(this,e)},getInitialData:function(e,t){var r=e.data;function i(Z){return!(isNaN(Z.min)||isNaN(Z.max)||isNaN(Z.step))}function n(Z){var I=Us;return Math.max(I(Z.min),I(Z.max),I(Z.step))+1}if(!r)if(e.parametric){var y=e.parametricEquation||{},E=y.u||{},S=y.v||{};["u","v"].forEach(function(I){i(y[I])}),["x","y","z"].forEach(function(I){y[I]});var b=Math.floor((E.max+E.step-E.min)/E.step),A=Math.floor((S.max+S.step-S.min)/S.step);r=new Float32Array(b*A*5);for(var M=n(E),O=n(S),d=0,c=0;c<A;c++)for(var v=0;v<b;v++){var L=v*E.step+E.min,U=c*S.step+S.min,F=oi(Math.min(L,E.max),M),N=oi(Math.min(U,S.max),O),p=y.x(F,N),_=y.y(F,N),g=y.z(F,N);r[d++]=p,r[d++]=_,r[d++]=g,r[d++]=F,r[d++]=N}}else{var a=e.equation||{},o=a.x||{},s=a.y||{};if(["x","y"].forEach(function(Z){i(a[Z])}),typeof a.z!="function")return;var l=Math.floor((o.max+o.step-o.min)/o.step),u=Math.floor((s.max+s.step-s.min)/s.step);r=new Float32Array(l*u*3);for(var f=n(o),h=n(s),d=0,c=0;c<u;c++)for(var v=0;v<l;v++){var p=v*o.step+o.min,_=c*s.step+s.min,m=oi(Math.min(p,o.max),f),x=oi(Math.min(_,s.max),h),g=a.z(m,x);r[d++]=m,r[d++]=x,r[d++]=g}}var V=["x","y","z"];e.parametric&&V.push("u","v");var B=dv(this,V,r);return B},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});dt(Pl.prototype,fv);var gv=Pl,Xt=ln.vec3;function yv(e){return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])}var xv=Gu.extend({type:"surface",__ecgl__:!0,init:function(e,t){this.groupGL=new k.Node},render:function(e,t,r){var i=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=i,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var n=e.coordinateSystem,a=e.get("shading"),o=e.getData(),s="ecgl."+a;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==s)&&(this._surfaceMesh.material=k.createMaterial(s,["VERTEX_COLOR","DOUBLE_SIDED"])),k.setMaterialFromModel(a,this._surfaceMesh.material,e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var l=n.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[l]("fragment","SRGB_DECODE")}var u=e.get("parametric"),f=e.get("dataShape");f||(f=this._getDataShape(o,u));var h=e.getModel("wireframe"),d=h.get("lineStyle.width"),c=h.get("show")&&d>0;this._updateSurfaceMesh(this._surfaceMesh,e,f,c);var v=this._surfaceMesh.material;c?(v.define("WIREFRAME_QUAD"),v.set("wireframeLineWidth",d),v.set("wireframeLineColor",k.parseColor(h.get("lineStyle.color")))):v.undefine("WIREFRAME_QUAD"),this._initHandler(e,r),this._updateAnimation(e)},_updateAnimation:function(e){k.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new k.Mesh({geometry:new k.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new k.Material({shader:new k.Shader(k.Shader.source("ecgl.sm.depth.vertex"),k.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute("barycentric","float",4),e.geometry.createAttribute("prevPosition","float",3),e.geometry.createAttribute("prevNormal","float",3),Object.assign(e.geometry,vv),e},_initHandler:function(e,t){var r=e.getData(),i=this._surfaceMesh,n=e.coordinateSystem;function a(s,l){for(var u=1/0,f=-1,h=[],d=0;d<s.length;d++){i.geometry.attributes.position.get(s[d],h);var c=Xt.dist(l.array,h);c<u&&(u=c,f=s[d])}return f}i.seriesIndex=e.seriesIndex;var o=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(s){var l=a(s.triangle,s.point);if(l>=0){var u=[];i.geometry.attributes.position.get(l,u);for(var f=n.pointToData(u),h=1/0,d=-1,c=[],v=0;v<r.count();v++){c[0]=r.get("x",v),c[1]=r.get("y",v),c[2]=r.get("z",v);var p=Xt.squaredDistance(c,f);p<h&&(d=v,h=p)}d!==o&&t.dispatchAction({type:"grid3DShowAxisPointer",value:f}),o=d,i.dataIndex=d}else i.dataIndex=-1},this),i.on("mouseout",function(s){o=-1,i.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(e,t,r,i){var n=e.geometry,a=t.getData(),o=a.getLayout("points"),s=0;a.each(function(_t){a.hasValue(_t)||s++});var l=s||i,u=n.attributes.position,f=n.attributes.normal,h=n.attributes.texcoord0,d=n.attributes.barycentric,c=n.attributes.color,v=r[0],p=r[1],_=t.get("shading"),m=_!=="color";if(l){var x=(v-1)*(p-1)*4;u.init(x),i&&d.init(x)}else u.value=new Float32Array(o);c.init(n.vertexCount),h.init(n.vertexCount);var g=[0,3,1,1,3,2],y=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],E=n.indices=new(n.vertexCount>65535?Uint32Array:Uint16Array)((v-1)*(p-1)*6),S=function(_t,sr,St){St[1]=_t*p+sr,St[0]=_t*p+sr+1,St[3]=(_t+1)*p+sr+1,St[2]=(_t+1)*p+sr},b=!1;if(l){var A=[],M=[],O=0;m?f.init(n.vertexCount):f.value=null;for(var L=[[],[],[]],U=[],F=[],N=Xt.create(),V=function(_t,sr,St){var hn=sr*3;return St[0]=_t[hn],St[1]=_t[hn+1],St[2]=_t[hn+2],St},B=new Float32Array(o.length),Z=new Float32Array(o.length/3*4),I=0;I<a.count();I++)if(a.hasValue(I)){var Be=k.parseColor(xa(a,I)),ce=ds(a,I);ce!=null&&(Be[3]*=ce),Be[3]<.99&&(b=!0);for(var G=0;G<4;G++)Z[I*4+G]=Be[G]}for(var xe=[1e7,1e7,1e7],I=0;I<v-1;I++)for(var oe=0;oe<p-1;oe++){var pe=I*(p-1)+oe,_e=pe*4;S(I,oe,A);for(var Oe=!1,G=0;G<4;G++)V(o,A[G],M),yv(M)&&(Oe=!0);for(var G=0;G<4;G++)Oe?u.set(_e+G,xe):(V(o,A[G],M),u.set(_e+G,M)),i&&d.set(_e+G,y[G]);for(var G=0;G<6;G++)E[O++]=g[G]+_e;if(m&&!Oe)for(var G=0;G<2;G++){for(var Fe=G*3,Le=0;Le<3;Le++){var ze=A[g[Fe]+Le];V(o,ze,L[Le])}Xt.sub(U,L[0],L[1]),Xt.sub(F,L[1],L[2]),Xt.cross(N,U,F);for(var Le=0;Le<3;Le++){var $e=A[g[Fe]+Le]*3;B[$e]=B[$e]+N[0],B[$e+1]=B[$e+1]+N[1],B[$e+2]=B[$e+2]+N[2]}}}if(m)for(var I=0;I<B.length/3;I++)V(B,I,N),Xt.normalize(N,N),B[I*3]=N[0],B[I*3+1]=N[1],B[I*3+2]=N[2];for(var Be=[],st=[],I=0;I<v-1;I++)for(var oe=0;oe<p-1;oe++){var pe=I*(p-1)+oe,_e=pe*4;S(I,oe,A);for(var G=0;G<4;G++){for(var Le=0;Le<4;Le++)Be[Le]=Z[A[G]*4+Le];c.set(_e+G,Be),m&&(V(B,A[G],N),f.set(_e+G,N));var ze=A[G];st[0]=ze%p/(p-1),st[1]=Math.floor(ze/p)/(v-1),h.set(_e+G,st)}pe++}}else{for(var st=[],I=0;I<a.count();I++){st[0]=I%p/(p-1),st[1]=Math.floor(I/p)/(v-1);var Be=k.parseColor(xa(a,I)),ce=ds(a,I);ce!=null&&(Be[3]*=ce),Be[3]<.99&&(b=!0),c.set(I,Be),h.set(I,st)}for(var A=[],Ql=0,I=0;I<v-1;I++)for(var oe=0;oe<p-1;oe++){S(I,oe,A);for(var G=0;G<6;G++)E[Ql++]=A[g[G]]}m?n.generateVertexNormals():f.value=null}e.material.get("normalMap")&&n.generateTangents(),n.updateBoundingBox(),n.dirty(),e.material.transparent=b,e.material.depthMask=!b},_getDataShape:function(e,t){for(var r=-1/0,i=0,n=0,a=!1,o=t?"u":"x",s=e.count(),l=0;l<s;l++){var u=e.get(o,l);u<r&&(n=0,i++),r=u,n++}if((!i||n===1)&&(a=!0),!a)return[i+1,n];for(var f=Math.floor(Math.sqrt(s));f>0;){if(Math.floor(s/f)===s/f)return[f,s/f];f--}return f=Math.floor(Math.sqrt(s)),[f,f]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Tv(e){e.registerChartView(xv),e.registerSeriesModel(gv),e.registerLayout(function(t,r){t.eachSeriesByType("surface",function(i){var n=i.coordinateSystem;!n||n.type;var a=i.getData(),o=new Float32Array(3*a.count()),s=[NaN,NaN,NaN];if(n&&n.type==="cartesian3D"){var l=n.dimensions,u=l.map(function(f){return i.coordDimToDataDim(f)[0]});a.each(u,function(f,h,d,c){var v;a.hasValue(c)?v=n.dataToPoint([f,h,d]):v=s,o[c*3]=v[0],o[c*3+1]=v[1],o[c*3+2]=v[2]})}a.setLayout("points",o)})})}var Ev={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},Sv={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Av={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}},Ea=function(){this._pool={},this._allocatedTextures=[]};Ea.prototype={constructor:Ea,get:function(e){var t=ys(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];if(!r.length){var i=new ae(e);return this._allocatedTextures.push(i),i}return r.pop()},put:function(e){var t=ys(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];r.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var Dl={width:512,height:512,type:w.UNSIGNED_BYTE,format:w.RGBA,wrapS:w.CLAMP_TO_EDGE,wrapT:w.CLAMP_TO_EDGE,minFilter:w.LINEAR_MIPMAP_LINEAR,magFilter:w.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},Kn=Object.keys(Dl);function ys(e){De.defaultsWithPropList(e,Dl,Kn),wv(e);for(var t="",r=0;r<Kn.length;r++){var i=Kn[r],n=e[i].toString();t+=n}return t}function wv(e){var t=bv(e.width,e.height);e.format===w.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==w.NEAREST_MIPMAP_NEAREST||e.minFilter==w.NEAREST_MIPMAP_LINEAR?e.minFilter=w.NEAREST:(e.minFilter==w.LINEAR_MIPMAP_LINEAR||e.minFilter==w.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=w.LINEAR)),t||(e.wrapS=w.CLAMP_TO_EDGE,e.wrapT=w.CLAMP_TO_EDGE)}function bv(e,t){return(e&e-1)===0&&(t&t-1)===0}var Il=Ea,Mv=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`,It=["px","nx","py","ny","pz","nz"];R.import(Mv);function $n(e,t,r){if(r==="alphaMap")return e.material.get("diffuseMap");if(r==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var i=e.material.get("alphaCutoff");return i||0}return 0}else return r==="uvRepeat"?e.material.get("uvRepeat"):r==="uvOffset"?e.material.get("uvOffset"):t.get(r)}function xs(e,t){var r=e.material,i=t.material;return r.get("diffuseMap")!==i.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(i.get("alphaCutoff")||0)}var xt=Ke.extend(function(){return{softShadow:xt.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new Ue,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new Il}},function(){this._gaussianPassH=new ke({fragment:R.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new ke({fragment:R.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new ke({fragment:R.source("clay.sm.debug_depth")})},{render:function(e,t,r,i){r||(r=t.getMainCamera()),this.trigger("beforerender",this,e,t,r),this._renderShadowPass(e,t,r,i),this.trigger("afterrender",this,e,t,r)},renderDebug:function(e,t){e.saveClear();var r=e.viewport,i=0,n=0,a=t||r.width/4,o=a;this.softShadow===xt.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var s in this._textures){var l=this._textures[s];e.setViewport(i,n,a*l.width/l.height,o),this._outputDepthPass.setUniform("depthMap",l),this._outputDepthPass.render(e),i+=a*l.width/l.height}e.setViewport(r),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===xt.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?t.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var r=this;t.traverse(function(a){a.isRenderable()&&r._updateReceivers(e,a)});for(var i=0;i<t.lights.length;i++){var n=t.lights[i];n.castShadow&&!n.invisible&&this._lightsCastShadow.push(n)}},_renderShadowPass:function(e,t,r,i){for(var n in this._shadowMapNumber)this._shadowMapNumber[n]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=e.gl;if(i||t.update(),r&&r.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var o=[],s=[],l=[],u=[],f=[],h=[],d,c=0;c<this._lightsCastShadow.length;c++){var v=this._lightsCastShadow[c];if(v.type==="DIRECTIONAL_LIGHT"){if(d){console.warn("Only one direectional light supported with shadow cascade");continue}if(v.shadowCascade>4){console.warn("Support at most 4 cascade");continue}v.shadowCascade>1&&(d=v),this.renderDirectionalLightShadow(e,t,r,v,f,u,l)}else v.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,v,s,o):v.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,v,h);this._shadowMapNumber[v.type]++}for(var p in this._shadowMapNumber)for(var _=this._shadowMapNumber[p],m=p+"_SHADOWMAP_COUNT",c=0;c<this._receivers.length;c++){var x=this._receivers[c],g=x.material;g.fragmentDefines[m]!==_&&(_>0?g.define("fragment",m,_):g.isDefined("fragment",m)&&g.undefine("fragment",m))}for(var c=0;c<this._receivers.length;c++){var x=this._receivers[c],g=x.material;d?g.define("fragment","SHADOW_CASCADE",d.shadowCascade):g.undefine("fragment","SHADOW_CASCADE")}var y=t.shadowUniforms;function E(O){return O.height}if(l.length>0){var S=l.map(E);if(y.directionalLightShadowMaps={value:l,type:"tv"},y.directionalLightMatrices={value:u,type:"m4v"},y.directionalLightShadowMapSizes={value:S,type:"1fv"},d){var b=f.slice(),A=f.slice();b.pop(),A.shift(),b.reverse(),A.reverse(),u.reverse(),y.shadowCascadeClipsNear={value:b,type:"1fv"},y.shadowCascadeClipsFar={value:A,type:"1fv"}}}if(o.length>0){var M=o.map(E),y=t.shadowUniforms;y.spotLightShadowMaps={value:o,type:"tv"},y.spotLightMatrices={value:s,type:"m4v"},y.spotLightShadowMapSizes={value:M,type:"1fv"}}h.length>0&&(y.pointLightShadowMaps={value:h,type:"tv"})},renderDirectionalLightShadow:function(){var e=new Oa,t=new z,r=new Ge,i=new z,n=new z,a=new z,o=new z;return function(s,l,u,f,h,d,c){var v=this._getDepthMaterial(f),p={getMaterial:function(pe){return pe.shadowDepthMaterial||v},isMaterialChanged:xs,getUniform:$n,ifRender:function(pe){return pe.castShadow},sortCompare:Xr.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var _=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(_).applyTransform(u.viewMatrix)}var m=Math.min(-l.viewBoundingBoxLastFrame.min.z,u.far),x=Math.max(-l.viewBoundingBoxLastFrame.max.z,u.near),g=this._getDirectionalLightCamera(f,l,u),y=a.array;o.copy(g.projectionMatrix),C.invert(n.array,g.worldTransform.array),C.multiply(n.array,n.array,u.worldTransform.array),C.multiply(y,o.array,n.array);for(var E=[],S=u instanceof Ce,b=(u.near+u.far)/(u.near-u.far),A=2*u.near*u.far/(u.near-u.far),M=0;M<=f.shadowCascade;M++){var O=x*Math.pow(m/x,M/f.shadowCascade),L=x+(m-x)*M/f.shadowCascade,U=O*f.cascadeSplitLogFactor+L*(1-f.cascadeSplitLogFactor);E.push(U),h.push(-(-U*b+A)/-U)}var F=this._getTexture(f,f.shadowCascade);c.push(F);var N=s.viewport,V=s.gl;this._frameBuffer.attach(F),this._frameBuffer.bind(s),V.clear(V.COLOR_BUFFER_BIT|V.DEPTH_BUFFER_BIT);for(var M=0;M<f.shadowCascade;M++){var B=E[M],Z=E[M+1];S?C.perspective(t.array,u.fov/180*Math.PI,u.aspect,B,Z):C.ortho(t.array,u.left,u.right,u.bottom,u.top,B,Z),e.setFromProjection(t),e.getTransformedBoundingBox(r,n),r.applyProjection(o);var I=r.min.array,ce=r.max.array;I[0]=Math.max(I[0],-1),I[1]=Math.max(I[1],-1),ce[0]=Math.min(ce[0],1),ce[1]=Math.min(ce[1],1),i.ortho(I[0],ce[0],I[1],ce[1],1,-1),g.projectionMatrix.multiplyLeft(i);var G=f.shadowResolution||512;s.setViewport((f.shadowCascade-M-1)*G,0,G,G,1);var xe=l.updateRenderList(g);s.renderPass(xe.opaque,g,p),this.softShadow===xt.VSM&&this._gaussianFilter(s,F,F.width);var oe=new z;oe.copy(g.viewMatrix).multiplyLeft(g.projectionMatrix),d.push(oe.array),g.projectionMatrix.copy(o)}this._frameBuffer.unbind(s),s.setViewport(N)}}(),renderSpotLightShadow:function(e,t,r,i,n){var a=this._getTexture(r),o=this._getSpotLightCamera(r),s=e.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(e),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),u={getMaterial:function(d){return d.shadowDepthMaterial||l},isMaterialChanged:xs,getUniform:$n,ifRender:function(d){return d.castShadow},sortCompare:Xr.opaqueSortCompare},f=t.updateRenderList(o);e.renderPass(f.opaque,o,u),this._frameBuffer.unbind(e),this.softShadow===xt.VSM&&this._gaussianFilter(e,a,a.width);var h=new z;h.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix),n.push(a),i.push(h.array)},renderPointLightShadow:function(e,t,r,i){var n=this._getTexture(r),a=e.gl;i.push(n);var o=this._getDepthMaterial(r),s={getMaterial:function(x){return x.shadowDepthMaterial||o},getUniform:$n,sortCompare:Xr.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},u=new Ge,f=r.getWorldPosition().array,h=new Ge,d=r.range;h.min.setArray(f),h.max.setArray(f);var c=new P(d,d,d);h.max.add(c),h.min.sub(c);var v={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(x){if(x.isRenderable()&&x.castShadow){var g=x.geometry;if(!g.boundingBox){for(var y=0;y<It.length;y++)l[It[y]].push(x);return}if(u.transformFrom(g.boundingBox,x.worldTransform),!u.intersectBoundingBox(h))return;u.updateVertices();for(var y=0;y<It.length;y++)v[It[y]]=!1;for(var y=0;y<8;y++){var E=u.vertices[y],S=E[0]-f[0],b=E[1]-f[1],A=E[2]-f[2],M=Math.abs(S),O=Math.abs(b),L=Math.abs(A);M>O?M>L?v[S>0?"px":"nx"]=!0:v[A>0?"pz":"nz"]=!0:O>L?v[b>0?"py":"ny"]=!0:v[A>0?"pz":"nz"]=!0}for(var y=0;y<It.length;y++)v[It[y]]&&l[It[y]].push(x)}});for(var p=0;p<6;p++){var _=It[p],m=this._getPointLightCamera(r,_);this._frameBuffer.attach(n,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+p),this._frameBuffer.bind(e),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),e.renderPass(l[_],m,s)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],r=e.type==="POINT_LIGHT";if(!t){var i=r?"clay.sm.distance.":"clay.sm.depth.";t=new Ct({precision:this.precision,shader:new R(R.source(i+"vertex"),R.source(i+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===xt.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),r&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,r){var i={width:r,height:r,type:Y.FLOAT},n=this._texturePool.get(i);this._frameBuffer.attach(n),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",n),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(n)},_getTexture:function(e,t){var r=e.__uid__,i=this._textures[r],n=e.shadowResolution||512;return t=t||1,i||(e.type==="POINT_LIGHT"?i=new $r:i=new ae,i.width=n*t,i.height=n,this.softShadow===xt.VSM?(i.type=Y.FLOAT,i.anisotropic=4):(i.minFilter=w.NEAREST,i.magFilter=w.NEAREST,i.useMipmap=!1),this._textures[r]=i),i},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new Ce,nx:new Ce,py:new Ce,ny:new Ce,pz:new Ce,nz:new Ce});var r=this._lightCameras.point[t];switch(r.far=e.range,r.fov=90,r.position.set(0,0,0),t){case"px":r.lookAt(P.POSITIVE_X,P.NEGATIVE_Y);break;case"nx":r.lookAt(P.NEGATIVE_X,P.NEGATIVE_Y);break;case"py":r.lookAt(P.POSITIVE_Y,P.POSITIVE_Z);break;case"ny":r.lookAt(P.NEGATIVE_Y,P.NEGATIVE_Z);break;case"pz":r.lookAt(P.POSITIVE_Z,P.NEGATIVE_Y);break;case"nz":r.lookAt(P.NEGATIVE_Z,P.NEGATIVE_Y);break}return e.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var e=new z,t=new Ge,r=new Ge;return function(i,n,a){this._lightCameras.directional||(this._lightCameras.directional=new Jr);var o=this._lightCameras.directional;t.copy(n.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),o.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),o.rotation.copy(i.rotation),o.scale.copy(i.scale),o.updateWorldTransform(),z.invert(e,o.worldTransform),z.multiply(e,e,a.worldTransform),r.copy(t).applyTransform(e);var s=r.min.array,l=r.max.array;return o.position.set((s[0]+l[0])/2,(s[1]+l[1])/2,l[2]).transformMat4(o.worldTransform),o.near=0,o.far=-s[2]+l[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=s[0],o.right=l[0],o.top=l[1],o.bottom=s[1],o.update(!0),o}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new Ce);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),C.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var r in this._textures)this._textures[r].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var i=0;i<this._receivers.length;i++){var n=this._receivers[i];if(n.material){var a=n.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});xt.VSM=1;xt.PCF=2;var Lv=xt,Cv=Ke.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return i.width instanceof Function?o=i.width.call(this,t):o=i.width,i.height instanceof Function?s=i.height.call(this,t):s=i.height,(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),n.width=o,n.height=s,n},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var r=this.outputs[t];if(!!r)return this._rendered?r.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,r){this.inputLinks[e]={node:t,pin:r},t.outputLinks[r]||(t.outputLinks[r]=[]),t.outputLinks[r].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var r=this.inputLinks[t];r.node.updateReference(r.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}}),ei=Cv,Rv=Ke.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(!!t.inputs){for(var r in t.inputs)if(!!t.inputs[r]){if(t.pass&&!t.pass.material.isUniformEnabled(r)){console.warn("Pin "+t.name+"."+r+" not used.");continue}var i=t.inputs[r],n=this.findPin(i);n?t.link(r,n.node,n.pin):console.warn(typeof i=="string"?"Node "+i+" not exist":"Pin of "+i.node+"."+i.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof ei)&&(e={node:e}),typeof e.node=="string")for(var r=0;r<this.nodes.length;r++){var i=this.nodes[r];i.name===e.node&&(t=i)}else t=e.node;if(t){var n=e.pin;if(n||t.outputs&&(n=Object.keys(t.outputs)[0]),t.outputs[n])return{node:t,pin:n}}}}),Ts=Rv,Nv=Ts.extend(function(){return{_outputs:[],_texturePool:new Il,_frameBuffer:new Ue({depthBuffer:!1})}},{addNode:function(e){Ts.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(var r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(var r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(var r=0;r<this._outputs.length;r++)this._outputs[r].render(e,t);for(var r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),Pv=Nv,Dv=ei.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new Ue},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var r;if(!this.outputs)r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var i=this.frameBuffer;for(var n in this.outputs){var a=this.updateParameter(n,e),o=this.outputs[n],s=this._compositor.allocateTexture(a);this._outputTextures[n]=s;var l=o.attachment||t.COLOR_ATTACHMENT0;typeof l=="string"&&(l=t[l]),i.attach(s,l)}i.bind(e);var u=e.getGLExtension("EXT_draw_buffers");if(u){var f=[];for(var l in this.outputs)l=parseInt(l),l>=t.COLOR_ATTACHMENT0&&l<=t.COLOR_ATTACHMENT0+8&&f.push(l);u.drawBuffersEXT(f)}e.saveClear(),e.clearBit=w.DEPTH_BUFFER_BIT|w.COLOR_BUFFER_BIT,r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),i.unbind(e)}this.trigger("afterrender",r),this._rendering=!1,this._rendered=!0}}),Iv=Dv,Ov=ei.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),Fv=Ov,Bv=ei.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new ke({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var r=e.gl;for(var i in this.inputLinks){var n=this.inputLinks[i],a=n.node.getOutput(e,n.pin);this.pass.setUniform(i,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var o={};for(var s in this.outputs){var l=this.updateParameter(s,e);isNaN(l.width)&&this.updateParameter(s,e);var u=this.outputs[s],f=this._compositor.allocateTexture(l);this._outputTextures[s]=f;var h=u.attachment||r.COLOR_ATTACHMENT0;typeof h=="string"&&(h=r[h]),o[h]=f}this._compositor.getFrameBuffer().bind(e);for(var h in o)this._compositor.getFrameBuffer().attach(o[h],h);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var i in this.inputLinks){var n=this.inputLinks[i];n.node.removeReference(n.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return typeof i.width=="function"?o=i.width.call(this,t):o=i.width,typeof i.height=="function"?s=i.height.call(this,t):s=i.height,o=Math.ceil(o),s=Math.ceil(s),(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),n.width=o,n.height=s,n},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){ei.prototype.clear.call(this),this.pass.material.disableTexturesAll()}}),Uv=Bv,Hv=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,Ol=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,zv=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,Fl=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,Vv=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,Bl=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Ul=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,Hl=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,zl=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,Vl=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Gv=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,Gl=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,kl=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function kv(e){e.import(Hv),e.import(Ol),e.import(zv),e.import(Fl),e.import(Vv),e.import(Bl),e.import(Ul),e.import(Hl),e.import(zl),e.import(Vl),e.import(Gv),e.import(Gl),e.import(kl)}kv(R);var Wv=/^#source\((.*?)\)/;function Xv(e,t){var r=new Pv;t=t||{};var i={textures:{},parameters:{}},n=function(s,l){for(var u=0;u<e.nodes.length;u++){var f=e.nodes[u],h=qv(f,i,t);h&&r.addNode(h)}};for(var a in e.parameters){var o=e.parameters[a];i.parameters[a]=Ga(o)}return Zv(e,i,t,function(s){i.textures=s,n()}),r}function qv(e,t,r){var i=e.type||"filter",n,a,o;if(i==="filter"){var s=e.shader.trim(),l=Wv.exec(s);if(l?n=R.source(l[1].trim()):s.charAt(0)==="#"&&(n=t.shaders[s.substr(1)]),n||(n=s),!n)return}if(e.inputs){a={};for(var u in e.inputs)typeof e.inputs[u]=="string"?a[u]=e.inputs[u]:a[u]={node:e.inputs[u].node,pin:e.inputs[u].pin}}if(e.outputs){o={};for(var u in e.outputs){var f=e.outputs[u];o[u]={},f.attachment!=null&&(o[u].attachment=f.attachment),f.keepLastFrame!=null&&(o[u].keepLastFrame=f.keepLastFrame),f.outputLastFrame!=null&&(o[u].outputLastFrame=f.outputLastFrame),f.parameters&&(o[u].parameters=Ga(f.parameters))}}var h;if(i==="scene"?h=new Iv({name:e.name,scene:r.scene,camera:r.camera,outputs:o}):i==="texture"?h=new Fv({name:e.name,outputs:o}):h=new Uv({name:e.name,shader:n,inputs:a,outputs:o}),h){if(e.parameters)for(var u in e.parameters){var d=e.parameters[u];typeof d=="string"?(d=d.trim(),d.charAt(0)==="#"?d=t.textures[d.substr(1)]:h.on("beforerender",Kv(u,Wl(d)))):typeof d=="function"&&h.on("beforerender",d),h.setParameter(u,d)}if(e.defines&&h.pass)for(var u in e.defines){var d=e.defines[u];h.pass.material.define("fragment",u,d)}}return h}function jv(e,t){return e}function Yv(e,t){return t}function Ga(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(i){var n=e[i];n!=null&&(typeof n=="string"&&(n=Y[n]),t[i]=n)});var r=e.scale||1;return["width","height"].forEach(function(i){if(e[i]!=null){var n=e[i];typeof n=="string"?(n=n.trim(),t[i]=$v(i,Wl(n),r)):t[i]=n}}),t.width||(t.width=jv),t.height||(t.height=Yv),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function Zv(e,t,r,i){if(!e.textures){i({});return}var n={},a=0,o=!1,s=r.textureRootPath;De.each(e.textures,function(l,u){var f,h=l.path,d=Ga(l.parameters);if(Array.isArray(h)&&h.length===6)s&&(h=h.map(function(c){return De.relative2absolute(c,s)})),f=new $r(d);else if(typeof h=="string")s&&(h=De.relative2absolute(h,s)),f=new ae(d);else return;f.load(h),a++,f.once("success",function(){n[u]=f,a--,a===0&&(i(n),o=!0)})}),a===0&&!o&&i(n)}function Kv(e,t){return function(r){var i=r.getDevicePixelRatio(),n=r.getWidth(),a=r.getHeight(),o=t(n,a,i);this.setParameter(e,o)}}function $v(e,t,r){return r=r||1,function(i){var n=i.getDevicePixelRatio(),a=i.getWidth()*r,o=i.getHeight()*r;return t(a,o,n)}}function Wl(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var r=new Function("width","height","dpr","return "+t[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function wr(e,t){for(var r=0,i=1/t,n=e;n>0;)r=r+i*(n%t),n=Math.floor(n/t),i=i/t;return r}var Qv=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;R.import(Qv);function Xl(e){for(var t=new Uint8Array(e*e*4),r=0,i=new P,n=0;n<e;n++)for(var a=0;a<e;a++)i.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(i.x*.5+.5)*255,t[r++]=(i.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function Es(e){return new ae({pixels:Xl(e),wrapS:Y.REPEAT,wrapT:Y.REPEAT,width:e,height:e})}function Jv(e,t,r){var i=new Float32Array(e*3);t=t||0;for(var n=0;n<e;n++){var a=wr(n+t,2)*(r?1:2)*Math.PI,o=wr(n+t,3)*Math.PI,s=Math.random(),l=Math.cos(a)*Math.sin(o)*s,u=Math.cos(o)*s,f=Math.sin(a)*Math.sin(o)*s;i[n*3]=l,i[n*3+1]=u,i[n*3+2]=f}return i}function Rt(e){e=e||{},this._ssaoPass=new ke({fragment:R.source("ecgl.ssao.estimate")}),this._blurPass=new ke({fragment:R.source("ecgl.ssao.blur")}),this._framebuffer=new Ue({depthBuffer:!1}),this._ssaoTexture=new ae,this._blurTexture=new ae,this._blurTexture2=new ae,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}Rt.prototype.setDepthTexture=function(e){this._depthTex=e};Rt.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};Rt.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new z;z.transpose(s,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,u=this._blurTexture,f=this._blurTexture2;l.width=i/2,l.height=n/2,u.width=i,u.height=n,f.width=i,f.height=n,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform("textureSize",[i/2,n/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(u),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(e),this._framebuffer.attach(f),o.setUniform("textureSize",[i,n]),o.setUniform("direction",1),o.setUniform("ssaoTexture",u),o.render(e),this._framebuffer.unbind(e);var h=e.clearColor;e.gl.clearColor(h[0],h[1],h[2],h[3])};Rt.prototype.getTargetTexture=function(){return this._blurTexture2};Rt.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};Rt.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=Jv(e,t*e,!!this._normalTex)};Rt.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=Xl(e),t.width=t.height=e,t.dirty()):(t=Es(e),this._ssaoPass.setUniform("noiseTex",Es(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};Rt.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};var ep=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;R.import(ep);function Nt(e){e=e||{},this._ssrPass=new ke({fragment:R.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new ke({fragment:R.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new ke({fragment:R.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new ke({fragment:R.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new ae({type:Y.HALF_FLOAT}),this._texture2=new ae({type:Y.HALF_FLOAT}),this._texture3=new ae({type:Y.HALF_FLOAT}),this._prevTexture=new ae({type:Y.HALF_FLOAT}),this._currentTexture=new ae({type:Y.HALF_FLOAT}),this._frameBuffer=new Ue({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}Nt.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")};Nt.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=n/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=l.width=n,s.height=l.height=a;var u=this._frameBuffer,f=this._ssrPass,h=this._blurPass1,d=this._blurPass2,c=this._blendPass,v=new z,p=new z;z.transpose(v,t.worldTransform),z.transpose(p,t.viewMatrix),f.setUniform("sourceTexture",r),f.setUniform("projection",t.projectionMatrix.array),f.setUniform("projectionInv",t.invProjectionMatrix.array),f.setUniform("toViewSpace",v.array),f.setUniform("toWorldSpace",p.array),f.setUniform("nearZ",t.near);var _=i/this._totalSamples*this._samplePerFrame;if(f.setUniform("jitterOffset",_),f.setUniform("sampleOffset",i*this._samplePerFrame),h.setUniform("textureSize",[o.width,o.height]),d.setUniform("textureSize",[n,a]),d.setUniform("sourceTexture",r),h.setUniform("projection",t.projectionMatrix.array),d.setUniform("projection",t.projectionMatrix.array),u.attach(o),u.bind(e),f.render(e),this._physicallyCorrect&&(u.attach(this._currentTexture),c.setUniform("texture1",this._prevTexture),c.setUniform("texture2",o),c.material.set({weight1:i>=1?.95:0,weight2:i>=1?.05:1}),c.render(e)),u.attach(s),h.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),h.render(e),u.attach(l),d.setUniform("texture",s),d.render(e),u.unbind(e),this._physicallyCorrect){var m=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=m}};Nt.prototype.getTargetTexture=function(){return this._texture3};Nt.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};Nt.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=Ui.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};Nt.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};Nt.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};Nt.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};var Ss=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],tp=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;R.import(tp);function Qn(e,t,r,i,n){var a=e.gl;t.setUniform(a,"1i",r,n),a.activeTexture(a.TEXTURE0+n),i.isRenderable()?i.bind(e):i.unbind(e)}function rp(e,t,r,i,n){var a,o,s,l,u=e.gl;return function(f,h,d){if(!(l&&l.material===f.material)){var c=f.material,v=f.__program,p=c.get("roughness");p==null&&(p=1);var _=c.get("normalMap")||t,m=c.get("roughnessMap"),x=c.get("bumpMap"),g=c.get("uvRepeat"),y=c.get("uvOffset"),E=c.get("detailUvRepeat"),S=c.get("detailUvOffset"),b=!!x&&c.isTextureEnabled("bumpMap"),A=!!m&&c.isTextureEnabled("roughnessMap"),M=c.isDefined("fragment","DOUBLE_SIDED");x=x||r,m=m||i,d!==h?(h.set("normalMap",_),h.set("bumpMap",x),h.set("roughnessMap",m),h.set("useBumpMap",b),h.set("useRoughnessMap",A),h.set("doubleSide",M),g!=null&&h.set("uvRepeat",g),y!=null&&h.set("uvOffset",y),E!=null&&h.set("detailUvRepeat",E),S!=null&&h.set("detailUvOffset",S),h.set("roughness",p)):(v.setUniform(u,"1f","roughness",p),a!==_&&Qn(e,v,"normalMap",_,0),o!==x&&x&&Qn(e,v,"bumpMap",x,1),s!==m&&m&&Qn(e,v,"roughnessMap",m,2),g!=null&&v.setUniform(u,"2f","uvRepeat",g),y!=null&&v.setUniform(u,"2f","uvOffset",y),E!=null&&v.setUniform(u,"2f","detailUvRepeat",E),S!=null&&v.setUniform(u,"2f","detailUvOffset",S),v.setUniform(u,"1i","useBumpMap",+b),v.setUniform(u,"1i","useRoughnessMap",+A),v.setUniform(u,"1i","doubleSide",+M)),a=_,o=x,s=m,l=f}}}function Cr(e){this._depthTex=new ae({format:Y.DEPTH_COMPONENT,type:Y.UNSIGNED_INT}),this._normalTex=new ae({type:Y.HALF_FLOAT}),this._framebuffer=new Ue,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,Ue.DEPTH_ATTACHMENT),this._normalMaterial=new Ct({shader:new R(R.source("ecgl.normal.vertex"),R.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=rr.createBlank("#000"),this._defaultBumpMap=rr.createBlank("#000"),this._defaultRoughessMap=rr.createBlank("#000"),this._debugPass=new ke({fragment:R.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}Cr.prototype.getDepthTexture=function(){return this._depthTex};Cr.prototype.getNormalTexture=function(){return this._normalTex};Cr.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=i,a.height=n,o.width=i,o.height=n;var l=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,r,{getMaterial:function(){return s},ifRender:function(u){return u.renderNormal},beforeRender:rp(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};Cr.prototype.renderDebug=function(e){this._debugPass.render(e)};Cr.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function ii(e){e=e||{},this._edgePass=new ke({fragment:R.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new ae({type:Y.HALF_FLOAT}),this._frameBuffer=new Ue,this._frameBuffer.attach(this._targetTexture)}ii.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=n,o.height=a;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[n,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),s.unbind(e)};ii.prototype.getTargetTexture=function(){return this._targetTexture};ii.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};ii.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};var ip={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},np=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,ap=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;R.import(Ol);R.import(Fl);R.import(Bl);R.import(Ul);R.import(Hl);R.import(zl);R.import(Vl);R.import(Gl);R.import(kl);R.import(np);R.import(ap);function ql(e,t){return{color:{parameters:{width:e,height:t}}}}var ka=["composite","FXAA"];function J(){this._width,this._height,this._dpr,this._sourceTexture=new ae({type:Y.HALF_FLOAT}),this._depthTexture=new ae({format:Y.DEPTH_COMPONENT,type:Y.UNSIGNED_INT}),this._framebuffer=new Ue,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,Ue.DEPTH_ATTACHMENT),this._normalPass=new Cr,this._compositor=Xv(ip);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(i){return this._compositor.getNodeByName(i)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=ka.map(function(i){return this._compositor.getNodeByName(i)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new Rt(r),this._ssrPass=new Nt(r),this._edgePass=new ii(r)}J.prototype.resize=function(i,n,r){r=r||1;var i=i*r,n=n*r,a=this._sourceTexture,o=this._depthTexture;a.width=i,a.height=n,o.width=i,o.height=n;var s={getWidth:function(){return i},getHeight:function(){return n},getDevicePixelRatio:function(){return r}};function l(u,f){if(typeof u[f]=="function"){var h=u[f].__original||u[f];u[f]=function(d){return h.call(this,s)},u[f].__original=h}}this._compositor.nodes.forEach(function(u){for(var f in u.outputs){var h=u.outputs[f].parameters;h&&(l(h,"width"),l(h,"height"))}for(var d in u.parameters)l(u.parameters,d)}),this._width=i,this._height=n,this._dpr=r};J.prototype.getWidth=function(){return this._width};J.prototype.getHeight=function(){return this._height};J.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};J.prototype._getPrevNode=function(e){for(var t=ka.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r};J.prototype._getNextNode=function(e){for(var t=ka.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r};J.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);!t||(e.inputs.texture=t.name,r?(e.outputs=ql(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};J.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);!t||(r?(t.outputs=ql(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};J.prototype.updateNormal=function(e,t,r,i){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)};J.prototype.updateSSAO=function(e,t,r,i){this._ssaoPass.update(e,r,i)};J.prototype.enableSSAO=function(){this._enableSSAO=!0};J.prototype.disableSSAO=function(){this._enableSSAO=!1};J.prototype.enableSSR=function(){this._enableSSR=!0};J.prototype.disableSSR=function(){this._enableSSR=!1};J.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};J.prototype.getSourceFrameBuffer=function(){return this._framebuffer};J.prototype.getSourceTexture=function(){return this._sourceTexture};J.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};J.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};J.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};J.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};J.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};J.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};J.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};J.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};J.prototype.enableEdge=function(){this._enableEdge=!0};J.prototype.disableEdge=function(){this._enableEdge=!1};J.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};J.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};J.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var i={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=i;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",i);this._dofBlurKernel=new Float32Array(i*2);break}};J.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,i={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",i);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};J.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};J.prototype.setEdgeColor=function(e){var t=k.parseColor(e);this._edgePass.setParameter("edgeColor",t)};J.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};J.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:k.Texture.NEAREST,magFilter:k.Texture.NEAREST,flipY:!1})};J.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};J.prototype.isSSREnabled=function(){return this._enableSSR};J.prototype.composite=function(e,t,r,i,n){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,r,a,n),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,a,n),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,u=Math.floor(Ss.length/2/l),f=n%u,h=0;h<l*2;h++)s[h]=Ss[h+f*l*2];for(var h=0;h<this._dofBlurNodes.length;h++)this._dofBlurNodes[h].setParameter("percent",n/30),this._dofBlurNodes[h].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,i)};J.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function Sa(e){for(var t=[],r=0;r<30;r++)t.push([wr(r,2),wr(r,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new ae,this._sourceFb=new Ue,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new ae,this._outputTex=new ae;var i=this._blendPass=new ke({fragment:R.source("clay.compositor.blend")});i.material.disableTexturesAll(),i.material.enableTexture(["texture1","texture2"]),this._blendFb=new Ue({depthBuffer:!1}),this._outputPass=new ke({fragment:R.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(n){n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}Sa.prototype={constructor:Sa,jitterProjection:function(e,t){var r=e.viewport,i=r.devicePixelRatio||e.getDevicePixelRatio(),n=r.width*i,a=r.height*i,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new z;s.array[12]=(o[0]*2-1)/n,s.array[13]=(o[1]*2-1)/a,z.mul(t.projectionMatrix,s,t.projectionMatrix),z.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,r){var i=this._blendPass;this._frame===0?(i.setUniform("weight1",0),i.setUniform("weight2",1)):(i.setUniform("weight1",.9),i.setUniform("weight2",.1)),i.setUniform("texture1",this._prevFrameTex),i.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),i.render(e),this._blendFb.unbind(e),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var n=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=n,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function ge(e){e=e||"perspective",this.layer=null,this.scene=new Ht,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new J,this._temporalSS=new Sa,this._shadowMapPass=new Lv;for(var t=[],r=0,i=0;i<30;i++){for(var n=[],a=0;a<6;a++)n.push(wr(r,2)*4-2),n.push(wr(r,3)*4-2),r++;t.push(n)}this._pcfKernels=t,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}ge.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof Ce||(this.camera=new Ce,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof Jr||(this.camera=new Jr,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};ge.prototype.setViewport=function(e,t,r,i,n){this.camera instanceof Ce&&(this.camera.aspect=r/i),n=n||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=r,this.viewport.height=i,this.viewport.devicePixelRatio=n,this._compositor.resize(r*n,i*n),this._temporalSS.resize(r*n,i*n)};ge.prototype.containPoint=function(e,t){var r=this.viewport,i=this.layer.renderer.getHeight();return t=i-t,e>=r.x&&t>=r.y&&e<=r.x+r.width&&t<=r.y+r.height};var As=new et;ge.prototype.castRay=function(e,t,r){var i=this.layer.renderer,n=i.viewport;return i.viewport=this.viewport,i.screenToNDC(e,t,As),this.camera.castRay(As,r),i.viewport=n,r};ge.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var r=e.transparent[t],i=r.geometry;i.needsSortVerticesProgressively&&i.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),i.needsSortTrianglesProgressively&&i.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};ge.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};ge.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};ge.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};ge.prototype.hasDOF=function(){return this._enableDOF};ge.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};ge.prototype._doRender=function(e,t,r){var i=this.scene,n=this.camera;r=r||0,this._updateTransparent(e,i,n,r),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,i,n,!0)),this._updateShadowPCFKernel(r);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,n),this._compositor.updateNormal(e,i,n,this._temporalSS.getFrame())),this._updateSSAO(e,i,n,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(i,n,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,i,n,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,i,n,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(i,n,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(i,n,!0,!0)};ge.prototype._updateTransparent=function(e,t,r,i){for(var n=new P,a=new z,o=r.getWorldPosition(),s=t.getRenderList(r).transparent,l=0;l<s.length;l++){var u=s[l],f=u.geometry;z.invert(a,u.worldTransform),P.transformMat4(n,o,a),f.needsSortTriangles&&f.needsSortTriangles()&&f.doSortTriangles(n,i),f.needsSortVertices&&f.needsSortVertices()&&f.doSortVertices(n,i)}};ge.prototype._updateSSAO=function(e,t,r){var i=this._enableSSAO&&this._enablePostEffect;i&&this._compositor.updateSSAO(e,t,r,this._temporalSS.getFrame());for(var n=t.getRenderList(r),a=0;a<n.opaque.length;a++){var o=n.opaque[a];o.renderNormal&&o.material[i?"enableTexture":"disableTexture"]("ssaoMap"),i&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}};ge.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),i=r.opaque,n=0;n<i.length;n++)i[n].receiveShadow&&(i[n].material.set("pcfKernel",t),i[n].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};ge.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};ge.prototype.setPostEffect=function(e,t){var r=this._compositor;this._enablePostEffect=e.get("enable");var i=e.getModel("bloom"),n=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),u=e.getModel("colorCorrection");i.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),s.get("enable")?r.enableSSR():r.disableSSR(),u.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),n.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(i.get("intensity")),r.setEdgeColor(n.get("color")),r.setColorLookupTexture(u.get("lookupTexture"),t),r.setExposure(u.get("exposure")),["radius","quality","intensity"].forEach(function(f){r.setSSAOParameter(f,o.get(f))}),["quality","maxRoughness","physical"].forEach(function(f){r.setSSRParameter(f,s.get(f))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(f){r.setDOFParameter(f,a.get(f))}),["brightness","contrast","saturation"].forEach(function(f){r.setColorCorrection(f,u.get(f))})};ge.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};ge.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};ge.prototype.isLinearSpace=function(){return this._enablePostEffect};ge.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),r=0;r<t.length;r++)e.add(t[r]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};ge.prototype.add=function(e){this.rootNode.add(e)};ge.prototype.remove=function(e){this.rootNode.remove(e)};ge.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(ge.prototype,Ra);var Hr=ot.firstNotNull,ws={left:0,middle:1,right:2};function bs(e){return e instanceof Array||(e=[e,e]),e}var jl=Ke.extend(function(){return{zr:null,viewGL:null,_center:new P,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new et,_panVelocity:new et,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var r=t.baseDistance||0,i=t.baseOrthoSize||1,n=e.get("projection");n!=="perspective"&&n!=="orthographic"&&n!=="isometric"&&(n="perspective"),this._projection=n,this.viewGL.setProjection(n);var a=e.get("distance")+r,o=e.get("orthographicSize")+i;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(d){this[d[0]]=Hr(e.get(d[0]),d[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=i,this.maxOrthographicSize+=i;var s=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(d){l[d]=Hr(e.get(d),s&&s.get(d))});var u=Hr(t.alpha,e.get("alpha"))||0,f=Hr(t.beta,e.get("beta"))||0,h=Hr(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:u,beta:f,center:h,distance:a,orthographicSize:o,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(u),this.setBeta(f),this.setCenter(h),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,r=this,i={},n={};return e.distance!=null&&(i.distance=this.getDistance(),n.distance=e.distance),e.orthographicSize!=null&&(i.orthographicSize=this.getOrthographicSize(),n.orthographicSize=e.orthographicSize),e.alpha!=null&&(i.alpha=this.getAlpha(),n.alpha=e.alpha),e.beta!=null&&(i.beta=this.getBeta(),n.beta=e.beta),e.center!=null&&(i.center=this.getCenter(),n.center=e.center),this._addAnimator(t.animation.animate(i).when(e.duration||1e3,n).during(function(){i.alpha!=null&&r.setAlpha(i.alpha),i.beta!=null&&r.setBeta(i.beta),i.distance!=null&&r.setDistance(i.distance),i.center!=null&&r.setCenter(i.center),i.orthographicSize!=null&&r.setOrthographicSize(i.orthographicSize),r._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),r=this._orthoSize,i=r/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-i/2,t.right=i/2,t.top=r/2,t.bottom=-r/2},_updatePan:function(e){var t=this._panVelocity,r=this._distance,i=this.getCamera(),n=i.worldTransform.y,a=i.worldTransform.x;this._center.scaleAndAdd(a,-t.x*r/200).scaleAndAdd(n,-t.y*r/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new P,r=this._theta+Math.PI/2,i=this._phi+Math.PI/2,n=Math.sin(r);t.x=n*Math.cos(i),t.y=-Math.cos(r),t.z=n*Math.sin(i),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var r=e.len();r=r*t,r<1e-4&&(r=0),e.normalize().scale(r)},_decomposeTransform:function(){if(!!this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),r=Math.atan2(e.x,e.z);this._theta=t,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,r=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===ws[this.rotateMouseButton]?this._mode="rotate":e.event.button===ws[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=bs(this.panSensitivity),r=bs(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n;this._projection==="perspective"?n=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):n=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*n*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var r=t.indexOf(e);r>=0&&t.splice(r,1)}),e}});Object.defineProperty(jl.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});var op=jl;function Aa(){}Aa.prototype={constructor:Aa,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new k.DirectionalLight({shadowBias:.005}),this.ambientLight=new k.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,r=this.ambientLight,i=e.getModel("light"),n=i.getModel("main"),a=i.getModel("ambient");t.intensity=n.get("intensity"),r.intensity=a.get("intensity"),t.color=k.parseColor(n.get("color")).slice(0,3),r.color=k.parseColor(a.get("color")).slice(0,3);var o=n.get("alpha")||0,s=n.get("beta")||0;t.position.setArray(k.directionFromAlphaBeta(o,s)),t.lookAt(k.Vector3.ZERO),t.castShadow=n.get("shadow"),t.shadowResolution=k.getShadowResolution(n.get("shadowQuality"))},updateAmbientCubemap:function(e,t,r){var i=t.getModel("light.ambientCubemap"),n=i.get("texture");if(n){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[n];if(!a){var o=this;a=this._cubemapLightsCache[n]=k.createAmbientCubemap(i.option,e,r,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,r){var i=t.get("environment"),n=this;function a(){return n._skybox=n._skybox||new Qr,n._skybox}var o=a();if(i&&i!=="none")if(i==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(s),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof i=="object"&&i.colorStops||typeof i=="string"&&ba(i)){this._isSkyboxFromAmbientCubemap=!1;var l=new k.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(l);var u=l.image=document.createElement("canvas");u.width=u.height=16;var f=u.getContext("2d"),h=new rn({shape:{x:0,y:0,width:16,height:16},style:{fill:i}});ku(f,h),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=k.loadTexture(i,r,{anisotropic:8,flipY:!1});o.setEnvironmentMap(l),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var d=t.coordinateSystem;if(this._skybox)if(d&&d.viewGL&&i!=="auto"&&!(i.match&&i.match(/.hdr$/))){var c=d.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[c]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var un=Ma.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});dt(un.prototype,Ev);dt(un.prototype,Sv);dt(un.prototype,Av);var sp=un,qt=ln.vec3,Yl=Se.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new Se.Attribute("position","float",3,"POSITION"),normal:new Se.Attribute("normal","float",3,"NORMAL"),color:new Se.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,r=this.getQuadVertexCount()*e,i=this.getQuadTriangleCount()*e;this.vertexCount!==r&&(t.position.init(r),t.normal.init(r),t.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=qt.create(),t=qt.create(),r=qt.create(),i=[0,3,1,3,2,1];return function(n,a){var o=this.attributes.position,s=this.attributes.normal,l=this.attributes.color;qt.sub(e,n[1],n[0]),qt.sub(t,n[2],n[1]),qt.cross(r,e,t),qt.normalize(r,r);for(var u=0;u<4;u++)o.set(this._vertexOffset+u,n[u]),l.set(this._vertexOffset+u,a),s.set(this._vertexOffset+u,r);for(var f=this._faceOffset*3,u=0;u<6;u++)this.indices[f+u]=i[u]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});br(Yl.prototype,za);var lp=Yl,wa=ot.firstNotNull,up={x:0,y:2,z:1};function fp(e,t,r,i){var n=[0,0,0],a=i<0?r.getExtentMin():r.getExtentMax();n[up[r.dim]]=a,e.position.setArray(n),e.rotation.identity(),t.distance=-Math.abs(a),t.normal.set(0,0,0),r.dim==="x"?(e.rotation.rotateY(i*Math.PI/2),t.normal.x=-i):r.dim==="z"?(e.rotation.rotateX(-i*Math.PI/2),t.normal.y=-i):(i>0&&e.rotation.rotateY(Math.PI),t.normal.z=-i)}function fn(e,t,r){this.rootNode=new k.Node;var i=new k.Mesh({geometry:new Va({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),n=new k.Mesh({geometry:new lp,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(n),this.rootNode.add(i),this.faceInfo=e,this.plane=new k.Plane,this.linesMesh=i,this.quadsMesh=n}fn.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=[i.getAxis(this.faceInfo[0]),i.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,o=this.quadsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(a,n,e,r),this._udpateSplitAreas(o,n,e,r),a.convertToTypedArray(),o.convertToTypedArray();var s=i.getAxis(this.faceInfo[2]);fp(this.rootNode,this.plane,s,this.faceInfo[3])};fn.prototype._updateSplitLines=function(e,t,r,i){var n=i.getDevicePixelRatio();t.forEach(function(a,o){var s=a.model,l=t[1-o].getExtent();if(!a.scale.isBlank()){var u=s.getModel("splitLine",r.getModel("splitLine"));if(u.get("show")){var f=u.getModel("lineStyle"),h=f.get("color"),d=wa(f.get("opacity"),1),c=wa(f.get("width"),1);h=Xe(h)?h:[h];for(var v=a.getTicksCoords({tickModel:u}),p=0,_=0;_<v.length;_++){var m=v[_].coord,x=k.parseColor(h[p%h.length]);x[3]*=d;var g=[0,0,0],y=[0,0,0];g[o]=y[o]=m,g[1-o]=l[0],y[1-o]=l[1],e.addLine(g,y,x,c*n),p++}}}})};fn.prototype._udpateSplitAreas=function(e,t,r,i){t.forEach(function(n,a){var o=n.model,s=t[1-a].getExtent();if(!n.scale.isBlank()){var l=o.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var u=l.getModel("areaStyle"),f=u.get("color"),h=wa(u.get("opacity"),1);f=Xe(f)?f:[f];for(var d=n.getTicksCoords({tickModel:l,clamp:!0}),c=0,v=[0,0,0],p=[0,0,0],_=0;_<d.length;_++){var m=d[_].coord,x=[0,0,0],g=[0,0,0];if(x[a]=g[a]=m,x[1-a]=s[0],g[1-a]=s[1],_===0){v=x,p=g;continue}var y=k.parseColor(f[c%f.length]);y[3]*=h,e.addQuad([v,x,g,p],y),v=x,p=g,c++}}}})};var jt=ot.firstNotNull,Yt={x:0,y:2,z:1};function Wa(e,t){var r=new k.Mesh({geometry:new Va({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),i=new Rl;i.material.depthMask=!1;var n=new k.Node;n.add(r),n.add(i),this.rootNode=n,this.dim=e,this.linesMesh=r,this.labelsMesh=i,this.axisLineCoords=null,this.labelElements=[]}var Jn={x:"y",y:"x",z:"y"};Wa.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=i.getAxis(this.dim),a=this.linesMesh.geometry,o=this.labelsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0);var s=n.model,l=n.getExtent(),L=r.getDevicePixelRatio(),u=s.getModel("axisLine",e.getModel("axisLine")),f=s.getModel("axisTick",e.getModel("axisTick")),h=s.getModel("axisLabel",e.getModel("axisLabel")),d=u.get("lineStyle.color");if(u.get("show")){var c=u.getModel("lineStyle"),v=[0,0,0],p=[0,0,0],_=Yt[n.dim];v[_]=l[0],p[_]=l[1],this.axisLineCoords=[v,p];var m=k.parseColor(d),x=jt(c.get("width"),1),g=jt(c.get("opacity"),1);m[3]*=g,a.addLine(v,p,m,x*L)}if(f.get("show")){var y=f.getModel("lineStyle"),E=k.parseColor(jt(y.get("color"),d)),x=jt(y.get("width"),1);E[3]*=jt(y.get("opacity"),1);for(var S=n.getTicksCoords(),b=f.get("length"),A=0;A<S.length;A++){var M=S[A].coord,v=[0,0,0],p=[0,0,0],_=Yt[n.dim],O=Yt[Jn[n.dim]];v[_]=p[_]=M,p[O]=b,a.addLine(v,p,E,x*L)}}this.labelElements=[];var L=r.getDevicePixelRatio();if(h.get("show"))for(var S=n.getTicksCoords(),U=s.get("data"),F=h.get("margin"),N=n.getViewLabels(),A=0;A<N.length;A++){var V=N[A].tickValue,B=N[A].formattedLabel,Z=N[A].rawLabel,M=n.dataToCoord(V),I=[0,0,0],_=Yt[n.dim],O=Yt[Jn[n.dim]];I[_]=I[_]=M,I[O]=F;var ce=h;U&&U[V]&&U[V].textStyle&&(ce=new Wu(U[V].textStyle,h,s.ecModel));var G=jt(ce.get("color"),d),xe=new Ft({style:tr(ce,{text:B,fill:typeof G=="function"?G(n.type==="category"?Z:n.type==="value"?V+"":V,A):G,verticalAlign:"top",align:"left"})}),oe=t.add(xe),pe=xe.getBoundingRect();o.addSprite(I,[pe.width*L,pe.height*L],oe),this.labelElements.push(xe)}if(s.get("name")){var _e=s.getModel("nameTextStyle"),I=[0,0,0],_=Yt[n.dim],O=Yt[Jn[n.dim]],Oe=jt(_e.get("color"),d),Fe=_e.get("borderColor"),x=_e.get("borderWidth");I[_]=I[_]=(l[0]+l[1])/2,I[O]=s.get("nameGap");var xe=new Ft({style:tr(_e,{text:s.get("name"),fill:Oe,stroke:Fe,lineWidth:x})}),oe=t.add(xe),pe=xe.getBoundingRect();o.addSprite(I,[pe.width*L,pe.height*L],oe),xe.__idx=this.labelElements.length,this.nameLabelElement=xe}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),a.convertToTypedArray(),o.convertToTypedArray()};Wa.prototype.setSpriteAlign=function(e,t,r){for(var i=r.getDevicePixelRatio(),n=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var o=this.labelElements[a],s=o.getBoundingRect();n.setSpriteAlign(a,[s.width*i,s.height*i],e,t)}var l=this.nameLabelElement;if(l){var s=l.getBoundingRect();n.setSpriteAlign(l.__idx,[s.width*i,s.height*i],e,t),n.dirty()}this.textAlign=e,this.textVerticalAlign=t};var Ms=ot.firstNotNull;k.Shader.import(mv);var Zt={x:0,y:2,z:1},hp=Ds.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var r=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],i=["x","y","z"],n=new k.Material({shader:k.createShader("ecgl.color"),depthMask:!1,transparent:!0}),a=new k.Material({shader:k.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});n.define("fragment","DOUBLE_SIDED"),n.define("both","VERTEX_COLOR"),this.groupGL=new k.Node,this._control=new op({zr:t.getZr()}),this._control.init(),this._faces=r.map(function(s){var l=new fn(s,a,n);return this.groupGL.add(l.rootNode),l},this),this._axes=i.map(function(s){var l=new Wa(s,a);return this.groupGL.add(l.rootNode),l},this);var o=t.getDevicePixelRatio();this._axisLabelSurface=new Ta({width:256,height:256,devicePixelRatio:o}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new k.Mesh({geometry:new Va({useNativeLine:!1}),material:a,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new Ta({width:128,height:128,devicePixelRatio:o}),this._axisPointerLabelsMesh=new Rl({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new k.Node,this._sceneHelper=new Aa,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,r){this._model=e,this._api=r;var i=e.coordinateSystem;i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),n.off("update"),e.get("show")&&(this._faces.forEach(function(o){o.update(e,t,r)},this),this._axes.forEach(function(o){o.update(e,this._axisLabelSurface,r)},this)),n.on("update",this._onCameraChange.bind(this,e,r),this),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},showAxisPointer:function(e,t,r,i){this._doShowAxisPointer(),this._updateAxisPointer(i.value)},hideAxisPointer:function(e,t,r,i){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,r=t.viewGL;e.get("show")&&e.get("axisPointer.show")?r.on("mousemove",this._updateAxisPointerOnMousePosition,this):r.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,r=t.coordinateSystem,i=r.viewGL,n=i.castRay(e.offsetX,e.offsetY,new k.Ray),a,o=0;o<this._faces.length;o++){var s=this._faces[o];if(!s.rootNode.invisible){s.plane.normal.dot(i.camera.worldTransform.z)<0&&s.plane.normal.negate();var l=n.intersectPlane(s.plane);if(!!l){var u=r.getAxis(s.faceInfo[0]),f=r.getAxis(s.faceInfo[1]),h=Zt[s.faceInfo[0]],d=Zt[s.faceInfo[1]];u.contain(l.array[h])&&f.contain(l.array[d])&&(a=l)}}}if(a){var c=r.pointToData(a.array,[],!0);this._updateAxisPointer(c),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var r=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:r.getAlpha(),beta:r.getBeta(),distance:r.getDistance(),center:r.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new k.Vector3;e.update();for(var r=0;r<this._faces.length/2;r++){for(var i=[],n=0;n<2;n++){var a=this._faces[r*2+n];a.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),i[n]=t.z}var o=i[0]>i[1]?0:1,s=this._faces[r*2+o],l=this._faces[r*2+1-o];s.rootNode.invisible=!0,l.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),r=e.getAxis("y"),i=e.getAxis("z"),n=i.getExtentMax(),a=i.getExtentMin(),o=t.getExtentMin(),s=t.getExtentMax(),l=r.getExtentMax(),u=r.getExtentMin(),f=this._axes[0].rootNode,h=this._axes[1].rootNode,d=this._axes[2].rootNode,c=this._faces,v=c[4].rootNode.invisible?u:l,p=c[2].rootNode.invisible?n:a,_=c[0].rootNode.invisible?o:s,m=c[2].rootNode.invisible?n:a,x=c[0].rootNode.invisible?s:o,g=c[4].rootNode.invisible?u:l;f.rotation.identity(),h.rotation.identity(),d.rotation.identity(),c[4].rootNode.invisible&&(this._axes[0].flipped=!0,f.rotation.rotateX(Math.PI)),c[0].rootNode.invisible&&(this._axes[1].flipped=!0,h.rotation.rotateZ(Math.PI)),c[4].rootNode.invisible&&(this._axes[2].flipped=!0,d.rotation.rotateY(Math.PI)),f.position.set(0,p,v),h.position.set(_,m,0),d.position.set(x,0,g),f.update(),h.update(),d.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new k.Vector4,new k.Vector4],r=new k.Vector4;this.groupGL.getWorldPosition(r),r.w=1,r.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),r.x/=r.w,r.y/=r.w,this._axes.forEach(function(i){var n=i.axisLineCoords;i.labelsMesh.geometry;for(var a=0;a<t.length;a++)t[a].setArray(n[a]),t[a].w=1,t[a].transformMat4(i.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[a].x/=t[a].w,t[a].y/=t[a].w;var o=t[1].x-t[0].x,s=t[1].y-t[0].y,l=(t[1].x+t[0].x)/2,u=(t[1].y+t[0].y)/2,f,h;Math.abs(s/o)<.5?(f="center",h=u>r.y?"bottom":"top"):(h="middle",f=l>r.x?"left":"right"),i.setSpriteAlign(f,h,this._api)},this)},_doShowAxisPointer:function(){!this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,r=t.dataToPoint(e),i=this._axisPointerLineMesh,n=i.geometry,a=this._model.getModel("axisPointer"),o=this._api.getDevicePixelRatio();n.convertToDynamicArray(!0);function s(A){return ot.firstNotNull(A.model.get("axisPointer.show"),a.get("show"))}function l(A){var M=A.model.getModel("axisPointer",a),O=M.getModel("lineStyle"),L=k.parseColor(O.get("color")),U=Ms(O.get("width"),1),F=Ms(O.get("opacity"),1);return L[3]*=F,{color:L,lineWidth:U}}for(var u=0;u<this._faces.length;u++){var f=this._faces[u];if(!f.rootNode.invisible){for(var h=f.faceInfo,d=h[3]<0?t.getAxis(h[2]).getExtentMin():t.getAxis(h[2]).getExtentMax(),c=Zt[h[2]],v=0;v<2;v++){var p=h[v],_=h[1-v],m=t.getAxis(p),x=t.getAxis(_);if(!!s(m)){var g=[0,0,0],y=[0,0,0],E=Zt[p],S=Zt[_];g[E]=y[E]=r[E],g[c]=y[c]=d,g[S]=x.getExtentMin(),y[S]=x.getExtentMax();var b=l(m);n.addLine(g,y,b.color,b.lineWidth*o)}}if(s(t.getAxis(h[2]))){var g=r.slice(),y=r.slice();y[c]=d;var b=l(t.getAxis(h[2]));n.addLine(g,y,b.color,b.lineWidth*o)}}}n.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,r=this._axisPointerLabelsMesh,i=this._axisPointerLabelsSurface,n=t.coordinateSystem,a=t.getModel("axisPointer");r.geometry.convertToDynamicArray(!0),i.clear();var o={x:"y",y:"x",z:"y"};this._axes.forEach(function(s,l){var u=n.getAxis(s.dim),f=u.model,h=f.getModel("axisPointer",a),d=h.getModel("label"),c=h.get("lineStyle.color");if(!(!d.get("show")||!h.get("show"))){var v=e[l],p=d.get("formatter"),_=u.scale.getLabel({value:v});if(p!=null)_=p(_,e);else if(u.scale.type==="interval"||u.scale.type==="log"){var m=Us(u.scale.getTicks()[0]);_=v.toFixed(m+2)}var x=d.get("color"),g=new Ft({style:tr(d,{text:_,fill:x||c,align:"left",verticalAlign:"top"})}),y=i.add(g),E=g.getBoundingRect(),S=this._api.getDevicePixelRatio(),b=s.rootNode.position.toArray(),A=Zt[o[s.dim]];b[A]+=(s.flipped?-1:1)*d.get("margin"),b[Zt[s.dim]]=u.dataToCoord(e[l]),r.geometry.addSprite(b,[E.width*S,E.height*S],y,s.textAlign,s.textVerticalAlign)}},this),i.getZr().refreshImmediately(),r.material.set("uvScale",i.getCoordsScale()),r.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function ti(e){Hs.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}ti.prototype={constructor:ti,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],r),t[2]=this.getAxis("y").dataToCoord(e[1],r),t[1]=this.getAxis("z").dataToCoord(e[2],r),t},pointToData:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],r),t[1]=this.getAxis("y").coordToData(e[2],r),t[2]=this.getAxis("z").coordToData(e[1],r),t}};zs(ti,Hs);function tn(e,t,r){Vs.call(this,e,t,r)}tn.prototype={constructor:tn,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}};zs(tn,Vs);function cp(e,t){var r=e.getBoxLayoutParams(),i=Is(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=e.get("boxWidth"),a=e.get("boxHeight"),o=e.get("boxDepth");this.getAxis("x").setExtent(-n/2,n/2),this.getAxis("y").setExtent(o/2,-o/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[n,a,o]}function dp(e,t){var r={};function i(n,a){r[n]=r[n]||[1/0,-1/0],r[n][0]=Math.min(a[0],r[n][0]),r[n][1]=Math.max(a[1],r[n][1])}e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData();["x","y","z"].forEach(function(o){a.mapDimensionsAll(o,!0).forEach(function(s){i(o,a.getDataExtent(s,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(n){e.eachComponent(n,function(a){var o=n.charAt(0),s=a.getReferringComponents("grid3D").models[0],l=s.coordinateSystem;if(l===this){var u=l.getAxis(o);if(!u){var f=Xu(r[o]||[1/0,-1/0],a);u=new tn(o,f),u.type=a.get("type");var h=u.type==="category";u.onBand=h&&a.get("boundaryGap"),u.inverse=a.get("inverse"),a.axis=u,u.model=a,u.getLabelModel=function(){return a.getModel("axisLabel",s.getModel("axisLabel"))},u.getTickModel=function(){return a.getModel("axisTick",s.getModel("axisTick"))},l.addAxis(u)}}},this)},this),this.resize(this.model,t)}var vp={dimensions:ti.prototype.dimensions,create:function(e,t){var r=[];e.eachComponent("grid3D",function(a){a.__viewGL=a.__viewGL||new ge;var o=new ti;o.model=a,o.viewGL=a.__viewGL,a.coordinateSystem=o,r.push(o),o.resize=cp,o.update=dp});var i=["xAxis3D","yAxis3D","zAxis3D"];function n(a,o){return i.map(function(s){var l=a.getReferringComponents(s).models[0];return l==null&&(l=o.getComponent(s)),l})}return e.eachSeries(function(a){if(a.get("coordinateSystem")==="cartesian3D"){var o=a.getReferringComponents("grid3D").models[0];if(o==null){var s=n(a,e),o=s[0].getCoordSysModel();s.forEach(function(f){f.getCoordSysModel()})}var l=o.coordinateSystem;a.coordinateSystem=l}}),r}},pp=vp,Zl=Ma.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});qu(Zl);var _p=Zl,Kl={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},mp=dt({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},Kl),Xa=dt({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},Kl),gp=br({scale:!0,min:"dataMin",max:"dataMax"},Xa),$l=br({logBase:10},Xa);$l.scale=!0;var yp={categoryAxis3D:mp,valueAxis3D:Xa,timeAxis3D:gp,logAxis3D:$l},xp=["value","category","time","log"];function Tp(e,t,r,i,n){xp.forEach(function(a){var o=r.extend({type:t+"Axis3D."+a,__ordinalMeta:null,mergeDefaultAndTheme:function(s,l){var u=l.getTheme();dt(s,u.get(a+"Axis3D")),dt(s,this.getDefaultOption()),s.type=i(t,s)},optionUpdated:function(){var s=this.option;s.type==="category"&&(this.__ordinalMeta=ju.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:dt(ct(yp[a+"Axis3D"]),n||{},!0)});e.registerComponentModel(o)}),e.registerSubTypeDefaulter(t+"Axis3D",Yu(i,t))}function Ep(e,t){return t.type||(t.data?"category":"value")}function Sp(e){e.registerComponentModel(sp),e.registerComponentView(hp),e.registerCoordinateSystem("grid3D",pp),["x","y","z"].forEach(function(t){Tp(e,t,_p,Ep,{name:t.toUpperCase()});const r=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(r)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"grid3D",query:t},function(i){i.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,r){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,r){})}Yr([Tv,Sp,Fs,Bs,$u,Qu,Ju,ef,tf,rf,nf,af,of,sf,Jf]);function Ls(e,t){const r=[];for(let i=0;i<e.length;i++){const n=e[i];for(let a=0;a<n.length;a++){const o=n[a];r.push([(t.max_x-t.min_x)*(a/n.length)+t.min_x,(t.max_y-t.min_y)*(i/e.length)+t.min_y,o])}}return r}function Lp(){const{rpc:e}=lf(),[t,r]=Pt.exports.useState(null),[i,n]=Pt.exports.useState(null),[a,o]=Pt.exports.useState("interpolated"),[s,l]=Pt.exports.useState(1),u=Pt.exports.useRef(null);Pt.exports.useEffect(()=>{!e||e.call("printer.objects.subscribe",{objects:{bed_mesh:null,toolhead:null}}).then(({status:{bed_mesh:_,toolhead:m}})=>{_&&r(_),m&&n({min_x:m.axis_minimum[0],max_x:m.axis_maximum[0],min_y:m.axis_minimum[1],max_y:m.axis_maximum[1]})})},[e]),uf(e,"notify_status_update",_=>{const[{bed_mesh:m}]=_;!m||(console.log("got mesh update",m),r(t?{...t,...m}:m))}),Pt.exports.useEffect(()=>{var x;if(!((t==null?void 0:t.profiles)&&i&&u.current))return;const _=(x=t==null?void 0:t.profiles[(t==null?void 0:t.profile_name)||""])==null?void 0:x.mesh_params,m=[];(t==null?void 0:t.probed_matrix)&&(a==="probed"||a==="both")&&m.push({type:"surface",data:Ls(t.probed_matrix,_),dataShape:[t.probed_matrix.length,t.probed_matrix[0].length]}),(t==null?void 0:t.mesh_matrix)&&(a==="interpolated"||a==="both")&&m.push({type:"surface",data:Ls(t.mesh_matrix,i),dataShape:[t.mesh_matrix.length,t.mesh_matrix[0].length]}),u.current.getEchartsInstance().setOption({series:m})},[t,i,a,u]);const{center:f,min:h,max:d,scaleMin:c,scaleMax:v}=Pt.exports.useMemo(()=>{if(!(t!=null&&t.mesh_matrix))return{center:0,min:0,max:0,scaleMin:.2,scaleMax:2};const _=t.mesh_matrix,m=Math.min(..._.flatMap(b=>b.flatMap(A=>A))),x=Math.max(..._.flatMap(b=>b.flatMap(A=>A))),g=(x+m)/2,y=Math.ceil((x-m)*10)/10,E=y*10,S={center:g,scaleMin:y,scaleMax:E,min:m,max:x};return console.log(S),S},[t]),p={axisLine:{lineStyle:{color:yn.gray[300]}},axisLabel:{textStyle:{color:yn.gray[200]},formatter:_=>_>10?`${Math.floor(_)} mm `:`${_.toFixed(1)} mm`}};return At("section",{children:[zt("h3",{className:mt("text-xl"),children:"Bed Mesh"}),At("div",{className:mt("flex","flex-row"),style:{height:"600px"},children:[At("div",{className:mt("flex-1","flex","flex-col","h-full","items-end","justify-between"),children:[At("label",{className:mt("flex","flex-row","h-1/2"),children:[zt("div",{className:mt("flex","flex-col","justify-between"),children:new Array(11).fill(null).map((_,m)=>(v-c)/10*(10-m)+c).map(_=>At("span",{onClick:()=>l(_),className:mt("text-gray-400"),children:[_.toFixed(1)," mm"]},_))}),zt("input",{type:"range",min:c,max:v,step:(v-c)/10,value:s,onChange:_=>l(parseFloat(_.target.value)),orient:"vertical",style:{height:"100%",width:"22px",writingMode:"bt-lr",WebkitAppearance:"slider-vertical"}})]}),At("div",{className:mt("flex","flex-col","items-end"),children:[At("label",{className:mt("whitespace-nowrap"),children:["Probed ",zt("input",{type:"radio",name:"meshType",onChange:()=>o("probed"),checked:a==="probed"})]}),At("label",{className:mt("whitespace-nowrap"),children:["Interpolated ",zt("input",{type:"radio",name:"meshType",onChange:()=>o("interpolated"),checked:a==="interpolated"})]}),At("label",{className:mt("whitespace-nowrap"),children:["Both ",zt("input",{type:"radio",name:"meshType",onChange:()=>o("both"),checked:a==="both"})]})]})]}),zt(Zu,{ref:u,echarts:Ku,style:{height:"600px",width:"100%"},option:{darkMode:!0,visualMap:{show:!0,dimension:2,top:0,right:0,left:"auto",bottom:"auto",min:h,max:d,formatter:_=>`${_.toFixed(2)} mm`,textStyle:{color:yn.gray[200]},inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]}},xAxis3D:{type:"value",...p},yAxis3D:{type:"value",...p},zAxis3D:{type:"value",min:f-s,max:f+s,...p},grid3D:{viewControl:{}}}})]})]})}export{Lp as default};
