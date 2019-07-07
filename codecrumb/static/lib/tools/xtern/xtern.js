/*! Split.js - v1.5.9 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Split=t()}(this,function(){"use strict";var B=window,L=B.document,T="addEventListener",N="removeEventListener",R="getBoundingClientRect",q="horizontal",H=function(){return!1},I=B.attachEvent&&!B[T],i=["","-webkit-","-moz-","-o-"].filter(function(e){var t=L.createElement("div");return t.style.cssText="width:"+e+"calc(9px)",!!t.style.length}).shift()+"calc",s=function(e){return"string"==typeof e||e instanceof String},W=function(e){if(s(e)){var t=L.querySelector(e);if(!t)throw new Error("Selector "+e+" did not match a DOM element");return t}return e},X=function(e,t,n){var r=e[t];return void 0!==r?r:n},Y=function(e,t,n,r){if(t){if("end"===r)return 0;if("center"===r)return e/2}else if(n){if("start"===r)return 0;if("center"===r)return e/2}return e},G=function(e,t){var n=L.createElement("div");return n.className="gutter gutter-"+t,n},J=function(e,t,n){var r={};return s(t)?r[e]=t:r[e]=I?t+"%":i+"("+t+"% - "+n+"px)",r},K=function(e,t){var n;return(n={})[e]=t+"px",n};return function(e,i){void 0===i&&(i={});var u,t,s,o,r,a,l=e;Array.from&&(l=Array.from(l));var c=W(l[0]).parentNode,f=getComputedStyle?getComputedStyle(c).flexDirection:null,m=X(i,"sizes")||l.map(function(){return 100/l.length}),n=X(i,"minSize",100),h=Array.isArray(n)?n:l.map(function(){return n}),d=X(i,"expandToMin",!1),g=X(i,"gutterSize",10),v=X(i,"gutterAlign","center"),p=X(i,"snapOffset",30),y=X(i,"dragInterval",1),z=X(i,"direction",q),S=X(i,"cursor",z===q?"col-resize":"row-resize"),b=X(i,"gutter",G),_=X(i,"elementStyle",J),E=X(i,"gutterStyle",K);function w(t,e,n,r){var i=_(u,e,n,r);Object.keys(i).forEach(function(e){t.style[e]=i[e]})}function k(){return a.map(function(e){return e.size})}function x(e){return"touches"in e?e.touches[0][t]:e[t]}function M(e){var t=a[this.a],n=a[this.b],r=t.size+n.size;t.size=e/this.size*r,n.size=r-e/this.size*r,w(t.element,t.size,this._b,t.i),w(n.element,n.size,this._c,n.i)}function U(){var e=a[this.a].element,t=a[this.b].element,n=e[R](),r=t[R]();this.size=n[u]+r[u]+this._b+this._c,this.start=n[s],this.end=n[o]}function O(s){var o=function(e){if(!getComputedStyle)return null;var t=getComputedStyle(e),n=e[r];return 0===n?null:n-=z===q?parseFloat(t.paddingLeft)+parseFloat(t.paddingRight):parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)}(c);if(null===o)return s;var a=0,u=[],e=s.map(function(e,t){var n=o*e/100,r=Y(g,0===t,t===s.length-1,v),i=h[t]+r;return n<i?(a+=i-n,u.push(0),i):(u.push(n-i),n)});return 0===a?s:e.map(function(e,t){var n=e;if(0<a&&0<u[t]-a){var r=Math.min(a,u[t]-a);a-=r,n=e-r}return n/o*100})}function C(e){if(!("button"in e&&0!==e.button)){var t=this,n=a[t.a].element,r=a[t.b].element;t.dragging||X(i,"onDragStart",H)(k()),e.preventDefault(),t.dragging=!0,t.move=function(e){var t,n=a[this.a],r=a[this.b];this.dragging&&(t=x(e)-this.start+(this._b-this.dragOffset),1<y&&(t=Math.round(t/y)*y),t<=n.minSize+p+this._b?t=n.minSize+this._b:t>=this.size-(r.minSize+p+this._c)&&(t=this.size-(r.minSize+this._c)),M.call(this,t),X(i,"onDrag",H)())}.bind(t),t.stop=function(){var e=this,t=a[e.a].element,n=a[e.b].element;e.dragging&&X(i,"onDragEnd",H)(k()),e.dragging=!1,B[N]("mouseup",e.stop),B[N]("touchend",e.stop),B[N]("touchcancel",e.stop),B[N]("mousemove",e.move),B[N]("touchmove",e.move),e.stop=null,e.move=null,t[N]("selectstart",H),t[N]("dragstart",H),n[N]("selectstart",H),n[N]("dragstart",H),t.style.userSelect="",t.style.webkitUserSelect="",t.style.MozUserSelect="",t.style.pointerEvents="",n.style.userSelect="",n.style.webkitUserSelect="",n.style.MozUserSelect="",n.style.pointerEvents="",e.gutter.style.cursor="",e.parent.style.cursor="",L.body.style.cursor=""}.bind(t),B[T]("mouseup",t.stop),B[T]("touchend",t.stop),B[T]("touchcancel",t.stop),B[T]("mousemove",t.move),B[T]("touchmove",t.move),n[T]("selectstart",H),n[T]("dragstart",H),r[T]("selectstart",H),r[T]("dragstart",H),n.style.userSelect="none",n.style.webkitUserSelect="none",n.style.MozUserSelect="none",n.style.pointerEvents="none",r.style.userSelect="none",r.style.webkitUserSelect="none",r.style.MozUserSelect="none",r.style.pointerEvents="none",t.gutter.style.cursor=S,t.parent.style.cursor=S,L.body.style.cursor=S,U.call(t),t.dragOffset=x(e)-t.end}}z===q?(u="width",t="clientX",s="left",o="right",r="clientWidth"):"vertical"===z&&(u="height",t="clientY",s="top",o="bottom",r="clientHeight"),m=O(m);var D=[];function A(e){var t=e.i===D.length,n=t?D[e.i-1]:D[e.i];U.call(n);var r=t?n.size-e.minSize-n._c:e.minSize+n._b;M.call(n,r)}function j(e){var s=O(e);s.forEach(function(e,t){if(0<t){var n=D[t-1],r=a[n.a],i=a[n.b];r.size=s[t-1],i.size=e,w(r.element,r.size,n._b),w(i.element,i.size,n._c)}})}function F(n,r){D.forEach(function(t){if(!0!==r?t.parent.removeChild(t.gutter):(t.gutter[N]("mousedown",t._a),t.gutter[N]("touchstart",t._a)),!0!==n){var e=_(u,t.a.size,t._b);Object.keys(e).forEach(function(e){a[t.a].element.style[e]="",a[t.b].element.style[e]=""})}})}return(a=l.map(function(e,t){var n,r,i,s={element:W(e),size:m[t],minSize:h[t],i:t};if(0<t&&((n={a:t-1,b:t,dragging:!1,direction:z,parent:c})._b=Y(g,t-1==0,!1,v),n._c=Y(g,!1,t===l.length-1,v),"row-reverse"===f||"column-reverse"===f)){var o=n.a;n.a=n.b,n.b=o}if(!I&&0<t){var a=b(t,z,s.element);r=a,i=E(u,g,t),Object.keys(i).forEach(function(e){r.style[e]=i[e]}),n._a=C.bind(n),a[T]("mousedown",n._a),a[T]("touchstart",n._a),c.insertBefore(a,s.element),n.gutter=a}return w(s.element,s.size,Y(g,0===t,t===l.length-1,v)),0<t&&D.push(n),s})).forEach(function(e){var t=e.element[R]()[u];t<e.minSize&&(d?A(e):e.minSize=t)}),I?{setSizes:j,destroy:F}:{setSizes:j,getSizes:k,collapse:function(e){A(a[e])},destroy:F,parent:c,pairs:D}}});
//# sourceMappingURL=split.min.js.map

var CodeMirrorColorPicker=function(){"use strict";function t(t,i){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgba(0, 0, 0, 0)";return Array.isArray(t)&&(t={r:t[0],g:t[1],b:t[2],a:t[3]}),"hex"==i?e(t):"rgb"==i?r(t,o):"hsl"==i?n(t):t}function e(t){Array.isArray(t)&&(t={r:t[0],g:t[1],b:t[2],a:t[3]});var e=t.r.toString(16);t.r<16&&(e="0"+e);var r=t.g.toString(16);t.g<16&&(r="0"+r);var n=t.b.toString(16);return t.b<16&&(n="0"+n),"#"+e+r+n}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rgba(0, 0, 0, 0)";if(Array.isArray(t)&&(t={r:t[0],g:t[1],b:t[2],a:t[3]}),void 0!==t)return 1==t.a||void 0===t.a?isNaN(t.r)?e:"rgb("+t.r+","+t.g+","+t.b+")":"rgba("+t.r+","+t.g+","+t.b+","+t.a+")"}function n(t){return Array.isArray(t)&&(t={r:t[0],g:t[1],b:t[2],a:t[3]}),1==t.a||void 0===t.a?"hsl("+t.h+","+t.s+"%,"+t.l+"%)":"hsla("+t.h+","+t.s+"%,"+t.l+"%,"+t.a+")"}var i={format:t,rgb:r,hsl:n,hex:e};function o(t,e){return e=void 0===e?1:e,Math.round(t*e)/e}function a(t){return t*Math.PI/180}function l(t){var e=180*t/Math.PI;return e<0&&(e=360+e),e}function s(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)+e*Math.cos(a(t))}function u(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)+e*Math.sin(a(t))}function c(t,e){return l(Math.atan2(e,t))}var h={round:o,radianToDegree:l,degreeToRadian:a,getXInCircle:s,getYInCircle:u,caculateAngle:c};function f(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}var i=t/255,o=e/255,a=r/255,l=Math.max(i,o,a),s=l-Math.min(i,o,a),u=0;0==s?u=0:l==i?u=(o-a)/s%6*60:l==o?u=60*((a-i)/s+2):l==a&&(u=60*((i-o)/s+4)),u<0&&(u=360+u);return{h:u,s:0==l?0:s/l,v:l}}function v(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}t/=255,e/=255,r/=255;var i,a,l=Math.max(t,e,r),s=Math.min(t,e,r),u=(l+s)/2;if(l==s)i=a=0;else{var c=l-s;switch(a=u>.5?c/(2-l-s):c/(l+s),l){case t:i=(e-r)/c+(e<r?6:0);break;case e:i=(r-t)/c+2;break;case r:i=(t-e)/c+4}i/=6}return{h:o(360*i),s:o(100*a),l:o(100*u)}}function g(t){return{r:t,g:t,b:t}}function d(t,e,r){return Math.ceil(.2126*t+.7152*e+.0722*r)}function p(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}var i=d(t,e,r);return{y:i,cr:.713*(t-i),cb:.564*(r-i)}}function m(t){return 100*(t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)}function y(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}var i=t/255,o=e/255,a=r/255;return{x:.4124*(i=m(i))+.3576*(o=m(o))+.1805*(a=m(a)),y:.2126*i+.7152*o+.0722*a,z:.0193*i+.1192*o+.9505*a}}var b={RGBtoCMYK:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}var i=t/255,o=e/255,a=r/255,l=1-Math.max(i,o,a);return{c:(1-i-l)/(1-l),m:(1-o-l)/(1-l),y:(1-a-l)/(1-l),k:l}},RGBtoGray:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}return g(p(t,e,r).y)},RGBtoHSL:v,RGBtoHSV:f,RGBtoLAB:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}return XYZtoLAB(y(t,e,r))},RGBtoSimpleGray:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}return g(Math.ceil((t+e+r)/3))},RGBtoXYZ:y,RGBtoYCrCb:p,c:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}return g((t+e+r)/3>90?0:255)},brightness:d,gray:g};var k={CMYKtoRGB:function(t,e,r,n){if(1==arguments.length){var i=arguments[0];t=i.c,e=i.m,r=i.y,n=i.k}return{r:255*(1-t)*(1-n),g:255*(1-e)*(1-n),b:255*(1-r)*(1-n)}}};function C(t){return Math.pow(t,3)>.008856?Math.pow(t,3):(t-16/116)/7.787}function $(t){return t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t}function x(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.x,e=n.y,r=n.z}var i=t/100,a=e/100,l=r/100,s=3.2406*i+-1.5372*a+-.4986*l,u=-.9689*i+1.8758*a+.0415*l,c=.0557*i+-.204*a+1.057*l;return s=$(s),u=$(u),c=$(c),{r:o(255*s),g:o(255*u),b:o(255*c)}}function _(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.l,e=n.a,r=n.b}var i=(t+16)/116,o=e/500+i,a=i-r/200;return i=C(i),{x:95.047*(o=C(o)),y:100*i,z:108.883*(a=C(a))}}var w={XYZtoRGB:x,LABtoRGB:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.l,e=n.a,r=n.b}return x(_(t,e,r))},LABtoXYZ:_};function M(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.h,e=n.s,r=n.v}var i=t,a=r;i>=360&&(i=0);var l=e*a,s=l*(1-Math.abs(i/60%2-1)),u=a-l,c=[];return 0<=i&&i<60?c=[l,s,0]:60<=i&&i<120?c=[s,l,0]:120<=i&&i<180?c=[0,l,s]:180<=i&&i<240?c=[0,s,l]:240<=i&&i<300?c=[s,0,l]:300<=i&&i<360&&(c=[l,0,s]),{r:o(255*(c[0]+u)),g:o(255*(c[1]+u)),b:o(255*(c[2]+u))}}var O={HSVtoHSL:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.h,e=n.s,r=n.v}var i=M(t,e,r);return v(i.r,i.g,i.b)},HSVtoRGB:M};function S(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function E(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.h,e=n.s,r=n.l}var i,a,l;if(t/=360,r/=100,0==(e/=100))i=a=l=r;else{var s=r<.5?r*(1+e):r+e-r*e,u=2*r-s;i=S(u,s,t+1/3),a=S(u,s,t),l=S(u,s,t-1/3)}return{r:o(255*i),g:o(255*a),b:o(255*l)}}var T={HUEtoRGB:S,HSLtoHSV:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.h,e=n.s,r=n.l}var i=E(t,e,r);return f(i.r,i.g,i.b)},HSLtoRGB:E};var A={YCrCbtoRGB:function(t,e,r,n){if(1==arguments.length){var i=arguments[0];t=i.y,e=i.cr,r=i.cb,n=(n=i.bit)||0}var o=t+1.402*(e-n),a=t-.344*(r-n)-.714*(e-n),l=t+1.772*(r-n);return{r:Math.ceil(o),g:Math.ceil(a),b:Math.ceil(l)}}},I={aliceblue:"rgb(240, 248, 255)",antiquewhite:"rgb(250, 235, 215)",aqua:"rgb(0, 255, 255)",aquamarine:"rgb(127, 255, 212)",azure:"rgb(240, 255, 255)",beige:"rgb(245, 245, 220)",bisque:"rgb(255, 228, 196)",black:"rgb(0, 0, 0)",blanchedalmond:"rgb(255, 235, 205)",blue:"rgb(0, 0, 255)",blueviolet:"rgb(138, 43, 226)",brown:"rgb(165, 42, 42)",burlywood:"rgb(222, 184, 135)",cadetblue:"rgb(95, 158, 160)",chartreuse:"rgb(127, 255, 0)",chocolate:"rgb(210, 105, 30)",coral:"rgb(255, 127, 80)",cornflowerblue:"rgb(100, 149, 237)",cornsilk:"rgb(255, 248, 220)",crimson:"rgb(237, 20, 61)",cyan:"rgb(0, 255, 255)",darkblue:"rgb(0, 0, 139)",darkcyan:"rgb(0, 139, 139)",darkgoldenrod:"rgb(184, 134, 11)",darkgray:"rgb(169, 169, 169)",darkgrey:"rgb(169, 169, 169)",darkgreen:"rgb(0, 100, 0)",darkkhaki:"rgb(189, 183, 107)",darkmagenta:"rgb(139, 0, 139)",darkolivegreen:"rgb(85, 107, 47)",darkorange:"rgb(255, 140, 0)",darkorchid:"rgb(153, 50, 204)",darkred:"rgb(139, 0, 0)",darksalmon:"rgb(233, 150, 122)",darkseagreen:"rgb(143, 188, 143)",darkslateblue:"rgb(72, 61, 139)",darkslategray:"rgb(47, 79, 79)",darkslategrey:"rgb(47, 79, 79)",darkturquoise:"rgb(0, 206, 209)",darkviolet:"rgb(148, 0, 211)",deeppink:"rgb(255, 20, 147)",deepskyblue:"rgb(0, 191, 255)",dimgray:"rgb(105, 105, 105)",dimgrey:"rgb(105, 105, 105)",dodgerblue:"rgb(30, 144, 255)",firebrick:"rgb(178, 34, 34)",floralwhite:"rgb(255, 250, 240)",forestgreen:"rgb(34, 139, 34)",fuchsia:"rgb(255, 0, 255)",gainsboro:"rgb(220, 220, 220)",ghostwhite:"rgb(248, 248, 255)",gold:"rgb(255, 215, 0)",goldenrod:"rgb(218, 165, 32)",gray:"rgb(128, 128, 128)",grey:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",greenyellow:"rgb(173, 255, 47)",honeydew:"rgb(240, 255, 240)",hotpink:"rgb(255, 105, 180)",indianred:"rgb(205, 92, 92)",indigo:"rgb(75, 0, 130)",ivory:"rgb(255, 255, 240)",khaki:"rgb(240, 230, 140)",lavender:"rgb(230, 230, 250)",lavenderblush:"rgb(255, 240, 245)",lawngreen:"rgb(124, 252, 0)",lemonchiffon:"rgb(255, 250, 205)",lightblue:"rgb(173, 216, 230)",lightcoral:"rgb(240, 128, 128)",lightcyan:"rgb(224, 255, 255)",lightgoldenrodyellow:"rgb(250, 250, 210)",lightgreen:"rgb(144, 238, 144)",lightgray:"rgb(211, 211, 211)",lightgrey:"rgb(211, 211, 211)",lightpink:"rgb(255, 182, 193)",lightsalmon:"rgb(255, 160, 122)",lightseagreen:"rgb(32, 178, 170)",lightskyblue:"rgb(135, 206, 250)",lightslategray:"rgb(119, 136, 153)",lightslategrey:"rgb(119, 136, 153)",lightsteelblue:"rgb(176, 196, 222)",lightyellow:"rgb(255, 255, 224)",lime:"rgb(0, 255, 0)",limegreen:"rgb(50, 205, 50)",linen:"rgb(250, 240, 230)",magenta:"rgb(255, 0, 255)",maroon:"rgb(128, 0, 0)",mediumaquamarine:"rgb(102, 205, 170)",mediumblue:"rgb(0, 0, 205)",mediumorchid:"rgb(186, 85, 211)",mediumpurple:"rgb(147, 112, 219)",mediumseagreen:"rgb(60, 179, 113)",mediumslateblue:"rgb(123, 104, 238)",mediumspringgreen:"rgb(0, 250, 154)",mediumturquoise:"rgb(72, 209, 204)",mediumvioletred:"rgb(199, 21, 133)",midnightblue:"rgb(25, 25, 112)",mintcream:"rgb(245, 255, 250)",mistyrose:"rgb(255, 228, 225)",moccasin:"rgb(255, 228, 181)",navajowhite:"rgb(255, 222, 173)",navy:"rgb(0, 0, 128)",oldlace:"rgb(253, 245, 230)",olive:"rgb(128, 128, 0)",olivedrab:"rgb(107, 142, 35)",orange:"rgb(255, 165, 0)",orangered:"rgb(255, 69, 0)",orchid:"rgb(218, 112, 214)",palegoldenrod:"rgb(238, 232, 170)",palegreen:"rgb(152, 251, 152)",paleturquoise:"rgb(175, 238, 238)",palevioletred:"rgb(219, 112, 147)",papayawhip:"rgb(255, 239, 213)",peachpuff:"rgb(255, 218, 185)",peru:"rgb(205, 133, 63)",pink:"rgb(255, 192, 203)",plum:"rgb(221, 160, 221)",powderblue:"rgb(176, 224, 230)",purple:"rgb(128, 0, 128)",rebeccapurple:"rgb(102, 51, 153)",red:"rgb(255, 0, 0)",rosybrown:"rgb(188, 143, 143)",royalblue:"rgb(65, 105, 225)",saddlebrown:"rgb(139, 69, 19)",salmon:"rgb(250, 128, 114)",sandybrown:"rgb(244, 164, 96)",seagreen:"rgb(46, 139, 87)",seashell:"rgb(255, 245, 238)",sienna:"rgb(160, 82, 45)",silver:"rgb(192, 192, 192)",skyblue:"rgb(135, 206, 235)",slateblue:"rgb(106, 90, 205)",slategray:"rgb(112, 128, 144)",slategrey:"rgb(112, 128, 144)",snow:"rgb(255, 250, 250)",springgreen:"rgb(0, 255, 127)",steelblue:"rgb(70, 130, 180)",tan:"rgb(210, 180, 140)",teal:"rgb(0, 128, 128)",thistle:"rgb(216, 191, 216)",tomato:"rgb(255, 99, 71)",turquoise:"rgb(64, 224, 208)",violet:"rgb(238, 130, 238)",wheat:"rgb(245, 222, 179)",white:"rgb(255, 255, 255)",whitesmoke:"rgb(245, 245, 245)",yellow:"rgb(255, 255, 0)",yellowgreen:"rgb(154, 205, 50)",transparent:"rgba(0, 0, 0, 0)"};var P={isColorName:function(t){return!!I[t]},getColorByName:function(t){return I[t]}},D=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},B=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),R=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},F=function t(e,r,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,r);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,r,n)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(n):void 0},H=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},U=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},L=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),V=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)},N=/(#(?:[\da-f]{3}){1,2}|rgb\((?:\s*\d{1,3},\s*){2}\d{1,3}\s*\)|rgba\((?:\s*\d{1,3},\s*){3}\d*\.?\d+\s*\)|hsl\(\s*\d{1,3}(?:,\s*\d{1,3}%){2}\s*\)|hsla\(\s*\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\s*\)|([\w_\-]+))/gi;function G(t){var e=t.match(N),r=[];if(!e)return r;for(var n=0,i=e.length;n<i;n++)if(e[n].indexOf("#")>-1||e[n].indexOf("rgb")>-1||e[n].indexOf("hsl")>-1)r.push({color:e[n]});else{var o=P.getColorByName(e[n]);o&&r.push({color:e[n],nameColor:o})}var a={next:0};return r.forEach(function(e){var r=t.indexOf(e.color,a.next);e.startIndex=r,e.endIndex=r+e.color.length,a.next=e.endIndex}),r}function z(t){var e=G(t);return e.forEach(function(e,r){t=t.replace(e.color,"@"+r)}),{str:t,matches:e}}function X(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",r=z(t);return r.str.split(e).map(function(t,e){return t=W(t),r.matches[e]&&(t=t.replace("@"+e,r.matches[e].color)),t})}function Y(t,e){return e.forEach(function(e,r){t=t.replace("@"+r,e.color)}),t}function W(t){return t.replace(/^\s+|\s+$/g,"")}function q(t){if("string"==typeof t){if(P.isColorName(t)&&(t=P.getColorByName(t)),t.indexOf("rgb(")>-1){for(var e=0,r=(i=t.replace("rgb(","").replace(")","").split(",")).length;e<r;e++)i[e]=parseInt(W(i[e]),10);var n={type:"rgb",r:i[0],g:i[1],b:i[2],a:1};return n=Object.assign(n,v(n))}if(t.indexOf("rgba(")>-1){for(e=0,r=(i=t.replace("rgba(","").replace(")","").split(",")).length;e<r;e++)i[e]=r-1==e?parseFloat(W(i[e])):parseInt(W(i[e]),10);n={type:"rgb",r:i[0],g:i[1],b:i[2],a:i[3]};return n=Object.assign(n,v(n))}if(t.indexOf("hsl(")>-1){for(e=0,r=(i=t.replace("hsl(","").replace(")","").split(",")).length;e<r;e++)i[e]=parseFloat(W(i[e]));n={type:"hsl",h:i[0],s:i[1],l:i[2],a:1};return n=Object.assign(n,E(n))}if(t.indexOf("hsla(")>-1){for(e=0,r=(i=t.replace("hsla(","").replace(")","").split(",")).length;e<r;e++)i[e]=r-1==e?parseFloat(W(i[e])):parseInt(W(i[e]),10);n={type:"hsl",h:i[0],s:i[1],l:i[2],a:i[3]};return n=Object.assign(n,E(n))}if(0==t.indexOf("#")){var i=[];if(3==(t=t.replace("#","")).length)for(e=0,r=t.length;e<r;e++){var o=t.substr(e,1);i.push(parseInt(o+o,16))}else for(e=0,r=t.length;e<r;e+=2)i.push(parseInt(t.substr(e,2),16));n={type:"hex",r:i[0],g:i[1],b:i[2],a:1};return n=Object.assign(n,v(n))}}else if("number"==typeof t){if(0<=t&&t<=16777215){n={type:"hex",r:(16711680&t)>>16,g:(65280&t)>>8,b:(255&t)>>0,a:1};return n=Object.assign(n,v(n))}if(0<=t&&t<=4294967295){n={type:"hex",r:(4278190080&t)>>24,g:(16711680&t)>>16,b:(65280&t)>>8,a:(255&t)/255};return n=Object.assign(n,v(n))}}return t}function K(t){"string"==typeof t&&(t=X(t));var e=(t=t.map(function(t){if("string"==typeof t){var e=z(t),r=W(e.str).split(" ");return r[1]?r[1].includes("%")?r[1]=parseFloat(r[1].replace(/%/,""))/100:r[1]=parseFloat(r[1]):r[1]="*",r[0]=Y(r[0],e.matches),r}if(Array.isArray(t))return t[1]?"string"==typeof t[1]&&(t[1].includes("%")?t[1]=parseFloat(t[1].replace(/%/,""))/100:t[1]=+t[1]):t[1]="*",[].concat(V(t))})).filter(function(t){return"*"===t[1]}).length;if(e>0){var r=(1-t.filter(function(t){return"*"!=t[1]&&1!=t[1]}).map(function(t){return t[1]}).reduce(function(t,e){return t+e},0))/e;t.forEach(function(e,n){"*"==e[1]&&n>0&&(t.length-1==n||(e[1]=r))})}return t}var Z={matches:G,convertMatches:z,convertMatchesArray:X,reverseMatches:Y,parse:q,parseGradient:K,trim:W,color_regexp:N,color_split:","};function J(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hex",a={r:o(e.r+(r.r-e.r)*n),g:o(e.g+(r.g-e.g)*n),b:o(e.b+(r.b-e.b)*n),a:o(e.a+(r.a-e.a)*n,100)};return t(a,a.a<1?"rgb":i)}function Q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;if(!t)return[];"string"==typeof t&&(t=X(t));for(var r=(t=t||[]).length,n=[],i=0;i<r-1;i++)for(var o=0;o<e;o++)n.push(tt(t[i],t[i+1],o/e));return n}function tt(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hex";return J(q(t),q(e),r,n)}function et(t){return t=q(t),(Math.round(299*t.r)+Math.round(587*t.g)+Math.round(114*t.b))/1e3}function rt(e){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"h",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:9,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"rgb",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,s=f(q(e)),u=(a-o)*l/n,c=[],h=1;h<=n;h++)s[r]=Math.abs((l-u*h)/l),c.push(t(M(s),i));return c}Q.parula=function(t){return Q(["#352a87","#0f5cdd","#00b5a6","#ffc337","#fdff00"],t)},Q.jet=function(t){return Q(["#00008f","#0020ff","#00ffff","#51ff77","#fdff00","#ff0000","#800000"],t)},Q.hsv=function(t){return Q(["#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff","#ff0000"],t)},Q.hot=function(t){return Q(["#0b0000","#ff0000","#ffff00","#ffffff"],t)},Q.pink=function(t){return Q(["#1e0000","#bd7b7b","#e7e5b2","#ffffff"],t)},Q.bone=function(t){return Q(["#000000","#4a4a68","#a6c6c6","#ffffff"],t)},Q.copper=function(t){return Q(["#000000","#3d2618","#9d623e","#ffa167","#ffc77f"],t)};var nt={interpolateRGB:J,blend:tt,mix:function(t,e){return tt(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hex")},scale:Q,contrast:et,contrastColor:function(t){return et(t)>=128?"black":"white"},gradient:function(t){for(var e=[],r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:10)-((t=K(t)).length-1),n=r,i=1,o=t.length;i<o;i++){var a=t[i-1][0],l=t[i][0],s=1==i?t[i][1]:t[i][1]-t[i-1][1],u=i==t.length-1?n:Math.floor(s*r);e=e.concat(Q([a,l],u),[l]),n-=u}return e},scaleHSV:rt,scaleH:function(t){return rt(t,"h",arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgb",arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,arguments.length>4&&void 0!==arguments[4]?arguments[4]:360,1)},scaleS:function(t){return rt(t,"s",arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgb",arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,100)},scaleV:function(t){return rt(t,"v",arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgb",arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,100)}};function it(t,e){if(t.length!==e.length)return!1;for(var r=0,n=t.length;r<n;++r)if(t[r]!==e[r])return!1;return!0}var ot={euclidean:function(t,e){for(var r=0,n=0,i=t.length;n<i;n++)r+=Math.pow(e[n]-t[n],2);return Math.sqrt(r)},manhattan:function(t,e){for(var r=0,n=0,i=t.length;n<i;n++)r+=Math.abs(e[n]-t[n]);return r},max:function(t,e){for(var r=0,n=0,i=t.length;n<i;n++)r=Math.max(r,Math.abs(e[n]-t[n]));return r}},at={linear:function(t,e){var r=[],n=Math.round(Math.random()*t),i=Math.floor(t/e);do{r.push(n),n=(n+i)%t}while(r.length<e);return r},shuffle:function(t,e){for(var r=[];r.length<e;){var n=Math.round(Math.random()*t);-1==r.indexOf(n)&&r.push(n)}return r}};function lt(t,e,r){var n=1/0,i=0;return e.forEach(function(e,o){var a=r(t,e);a<n&&(n=a,i=o)}),i}function st(t){if(!t.length)return[];for(var e=new Array(t[0].length),r=0,n=e.length;r<n;r++)e[r]=0;var i=0;for(n=t.length;i<n;i++)for(var o=t[i],a=i+1,l=0,s=o.length;l<s;l++)e[l]+=(o[l]-e[l])/a;return e=e.map(function(t){return Math.floor(t)})}function ut(t,e,r,n){for(var i=new Array(t),o=0;o<t;o++)i[o]=[];for(var a=0,l=e.length;a<l;a++){var s=e[a];i[lt(s,r,n)].push(s)}return i}function ct(t,e,r,n,i,o){for(var a=0;a<t;a++){var l=r[a],s=n[a],u=new Array(s.length);if(l.length>0)u=st(l);else u=e[Math.floor(o()*e.length)];i=!it(u,s),n[a]=u}return i}function ht(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"linear";t=t,e=e||Math.max(2,Math.ceil(Math.sqrt(t.length/2)));var o=r||"euclidean";"string"==typeof o&&(o=ot[o]);for(var a=0,l=function(){return(a=(9301*a+49297)%233280)/233280},s=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear";return at[r](t.length,e).map(function(e){return t[e]})}(t,e,i),u=!0,c=0;u;){if(u=ct(e,t,ut(e,t,s,o),s,!1,l),++c%n==0)break}return s}var ft={create:function(t,e){var r=document.createElement("canvas");return r.width=t||0,r.height=e||0,r},drawPixels:function(t){var e=this.create(t.width,t.height),r=e.getContext("2d"),n=r.getImageData(0,0,e.width,e.height);return n.data.set(t.pixels),r.putImageData(n,0,0),e},createHistogram:function(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{black:!0,red:!1,green:!1,blue:!1},o=this.create(t,e),a=o.getContext("2d");a.clearRect(0,0,t,e),a.fillStyle="white",a.fillRect(0,0,t,e),a.globalAlpha=.7;var l={black:!1};i.black?l.black=!1:l.black=!0,i.red?l.red=!1:l.red=!0,i.green?l.green=!1:l.green=!0,i.blue?l.blue=!1:l.blue=!0,Object.keys(r).forEach(function(n){if(!l[n]){var i=r[n],o=Math.max.apply(Math,i),s=t/i.length;a.fillStyle=n,i.forEach(function(t,r){var n=e*(t/o),i=r*s;a.fillRect(i,e-n,s,n)})}}),"function"==typeof n&&n(o)},getHistogram:function(t){for(var e,r,n=new Array(256),i=new Array(256),o=new Array(256),a=new Array(256),l=0;l<256;l++)n[l]=0,i[l]=0,o[l]=0,a[l]=0;return r=function(t,e){var r=Math.round(He.brightness(t[e],t[e+1],t[e+2]));n[r]++,i[t[e]]++,o[t[e+1]]++,a[t[e+2]]++},function(t,e){for(var r=0;r<t;r+=4)e(r)}((e=t).pixels.length,function(t){r(e.pixels,t)}),{black:n,red:i,green:o,blue:a}},getBitmap:function(t,e){var r=this.drawPixels(t);return{pixels:r.getContext("2d").getImageData(e.x||0,e.y||0,e.width||r.width,e.height||r.height).data,width:e.width,height:e.height}},putBitmap:function(t,e,r){var n=this.drawPixels(t),i=this.drawPixels(e),o=n.getContext("2d");return o.drawImage(i,r.x,r.y),t.pixels=o.getImageData(0,0,t.width,t.height).data,t}},vt=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};D(this,t),this.isLoaded=!1,this.imageUrl=e,this.opt=r,this.initialize()}return B(t,[{key:"initialize",value:function(){this.canvas=this.createCanvas(),this.context=this.canvas.getContext("2d")}},{key:"createCanvas",value:function(){return document.createElement("canvas")}},{key:"load",value:function(t){this.loadImage(t)}},{key:"loadImage",value:function(t){var e=this,r=this.context;this.newImage=new Image;var n=this.newImage;n.onload=function(){var i=n.height/n.width;e.opt.canvasWidth&&e.opt.canvasHeight?(e.canvas.width=e.opt.canvasWidth,e.canvas.height=e.opt.canvasHeight):(e.canvas.width=e.opt.maxWidth?e.opt.maxWidth:n.width,e.canvas.height=e.canvas.width*i),r.drawImage(n,0,0,n.width,n.height,0,0,e.canvas.width,e.canvas.height),e.isLoaded=!0,t&&t()},this.getImageUrl(function(t){n.src=t})}},{key:"load",value:function(t){var e=this;this.newImage=new Image;var r=this.newImage;r.onload=function(){e.isLoaded=!0,t&&t()},this.getImageUrl(function(t){r.src=t})}},{key:"getImageUrl",value:function(t){if("string"==typeof this.imageUrl)return t(this.imageUrl);if(this.imageUrl instanceof Blob){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.readAsDataURL(this.imageUrl)}}},{key:"getRGBA",value:function(t,e,r,n){return[t,e,r,n]}},{key:"toArray",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this.context.getImageData(0,0,this.canvas.width,this.canvas.height),i=n.width,o=n.height,a=new Uint8ClampedArray(n.data);t||(t=function(t,e){e(t)}),t({pixels:a,width:i,height:o},function(t){var n=ft.drawPixels(t);"canvas"==r.returnTo?e(n):e(n.toDataURL(r.outputFormat||"image/png"))},r)}},{key:"toHistogram",value:function(t){var e=this.context.getImageData(0,0,this.canvas.width,this.canvas.height),r=e.width,n=e.height,i={pixels:new Uint8ClampedArray(e.data),width:r,height:n};return ft.getHistogram(i)}},{key:"toRGB",value:function(){for(var t=this.context.getImageData(0,0,this.canvas.width,this.canvas.height).data,e=[],r=0,n=t.length;r<n;r+=4)e[e.length]=[t[r+0],t[r+1],t[r+2],t[r+3]];return e}}]),t}(),gt={identity:function(){return[1,0,0,0,1,0,0,0,1]},stretching:function(t){return[t,0,0,0,1,0,0,0,1]},squeezing:function(t){return[t,0,0,0,1/t,0,0,0,1]},scale:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return[t=t||0===t?t:1,0,0,0,e=e||0===e?e:1,0,0,0,1]},scaleX:function(t){return this.scale(t)},scaleY:function(t){return this.scale(1,t)},translate:function(t,e){return[1,0,t,0,1,e,0,0,1]},rotate:function(t){var e=this.radian(t);return[Math.cos(e),-Math.sin(e),0,Math.sin(e),Math.cos(e),0,0,0,1]},rotate90:function(){return[0,-1,0,1,0,0,0,0,1]},rotate180:function(){return[-1,0,0,0,-1,0,0,0,1]},rotate270:function(){return[0,1,0,-1,0,0,0,0,1]},radian:function(t){return t*Math.PI/180},skew:function(t,e){var r=this.radian(t),n=this.radian(e);return[1,Math.tan(r),0,Math.tan(n),1,0,0,0,1]},skewX:function(t){var e=this.radian(t);return[1,Math.tan(e),0,0,1,0,0,0,1]},skewY:function(t){var e=this.radian(t);return[1,0,0,Math.tan(e),1,0,0,0,1]},shear1:function(t){return[1,-Math.tan(this.radian(t)/2),0,0,1,0,0,0,1]},shear2:function(t){return[1,0,0,Math.sin(this.radian(t)),1,0,0,0,1]}},dt={CONSTANT:gt,radian:function(t){return gt.radian(t)},multiply:function(t,e){return[t[0]*e[0]+t[1]*e[1]+t[2]*e[2],t[3]*e[0]+t[4]*e[1]+t[5]*e[2],t[6]*e[0]+t[7]*e[1]+t[8]*e[2]]},identity:function(t){return this.multiply(gt.identity(),t)},translate:function(t,e,r){return this.multiply(gt.translate(t,e),r)},rotate:function(t,e){return this.multiply(gt.rotate(t),e)},shear1:function(t,e){return this.multiply(gt.shear1(t),e)},shear2:function(t,e){return this.multiply(gt.shear2(t),e)},rotateShear:function(t,e){var r=e;return r=this.shear1(t,r),r=this.shear2(t,r),r=this.shear1(t,r)}};function pt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"center",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"center";return function(n,i){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=Gt(n.pixels.length,n.width,n.height),l=n.width,s=n.height;"center"==e&&(e=Math.floor(l/2)),"center"==r&&(r=Math.floor(s/2));var u=dt.CONSTANT.translate(-e,-r),c=dt.CONSTANT.translate(e,r),h=dt.CONSTANT.shear1(t),f=dt.CONSTANT.shear2(t);Qt(function(t,e,r,i){var o=dt.multiply(u,[r,i,1]);o=dt.multiply(h,o).map(Math.round),o=dt.multiply(f,o).map(Math.round),o=dt.multiply(h,o).map(Math.round),o=dt.multiply(c,o);var a=L(o,2),v=a[0],g=a[1];v<0||(g<0||v>l-1||g>s-1||re(t,g*l+v<<2,n.pixels,e))})(a,function(){i(a)},o)}}function mt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=Yt(t),i=(e=Yt(e))/100,o=r;return Kt(function(){var t=i*Math.ceil(.2126*$r+.7152*$g+.0722*$b)>=n?255:0;if(o)0==t&&($r=0,$g=0,$b=0);else{var e=Math.round(t);$r=e,$g=e,$b=e}},{$C:i,$scale:n,$hasColor:o})}function yt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([1,2,1,2,4,2,1,2,1],1/16*((t=Yt(t))/100)))}function bt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([1,4,6,4,1,4,16,24,16,4,6,24,36,24,6,4,16,24,16,4,1,4,6,4,1],1/256*((t=Yt(t))/100)))}function kt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return t=Yt(t),ne([5,5,5,-3,0,-3,-3,-3,-3])}function Ct(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return t=Yt(t),ne([5,-3,-3,5,0,-3,5,-3,-3])}function $t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,24,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],(t=Yt(t))/100))}function xt(){return ne(Ht([1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],1/9))}function _t(){return ne(Ht([1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1],1/9))}function wt(){return ne(Ht([1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1],1/9))}function Mt(){return ne([-1,-2,-1,0,0,0,1,2,1])}function Ot(){return ne([-1,0,1,-2,0,2,-1,0,1])}var St=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],Et=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function Tt(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function At(t,e,r){return r?function(t,e,r,n){if(isNaN(n)||n<1)return t;n|=0;var i,o,a,l,s,u,c,h,f,v,g,d,p,m,y,b,k,C,$,x,_,w,M,O,S=t.pixels,E=t.width,T=t.height,A=n+n+1,I=E-1,P=T-1,D=n+1,B=D*(D+1)/2,R=new Tt,j=R;for(a=1;a<A;a++)if(j=j.next=new Tt,a==D)var F=j;j.next=R;var H=null,U=null;c=u=0;var L=St[n],V=Et[n];for(o=0;o<T;o++){for(b=k=C=$=h=f=v=g=0,d=D*(x=S[u]),p=D*(_=S[u+1]),m=D*(w=S[u+2]),y=D*(M=S[u+3]),h+=B*x,f+=B*_,v+=B*w,g+=B*M,j=R,a=0;a<D;a++)j.r=x,j.g=_,j.b=w,j.a=M,j=j.next;for(a=1;a<D;a++)l=u+((I<a?I:a)<<2),h+=(j.r=x=S[l])*(O=D-a),f+=(j.g=_=S[l+1])*O,v+=(j.b=w=S[l+2])*O,g+=(j.a=M=S[l+3])*O,b+=x,k+=_,C+=w,$+=M,j=j.next;for(H=R,U=F,i=0;i<E;i++)S[u+3]=M=g*L>>V,0!=M?(M=255/M,S[u]=(h*L>>V)*M,S[u+1]=(f*L>>V)*M,S[u+2]=(v*L>>V)*M):S[u]=S[u+1]=S[u+2]=0,h-=d,f-=p,v-=m,g-=y,d-=H.r,p-=H.g,m-=H.b,y-=H.a,l=c+((l=i+n+1)<I?l:I)<<2,b+=H.r=S[l],k+=H.g=S[l+1],C+=H.b=S[l+2],$+=H.a=S[l+3],h+=b,f+=k,v+=C,g+=$,H=H.next,d+=x=U.r,p+=_=U.g,m+=w=U.b,y+=M=U.a,b-=x,k-=_,C-=w,$-=M,U=U.next,u+=4;c+=E}for(i=0;i<E;i++){for(k=C=$=b=f=v=g=h=0,d=D*(x=S[u=i<<2]),p=D*(_=S[u+1]),m=D*(w=S[u+2]),y=D*(M=S[u+3]),h+=B*x,f+=B*_,v+=B*w,g+=B*M,j=R,a=0;a<D;a++)j.r=x,j.g=_,j.b=w,j.a=M,j=j.next;for(s=E,a=1;a<=n;a++)u=s+i<<2,h+=(j.r=x=S[u])*(O=D-a),f+=(j.g=_=S[u+1])*O,v+=(j.b=w=S[u+2])*O,g+=(j.a=M=S[u+3])*O,b+=x,k+=_,C+=w,$+=M,j=j.next,a<P&&(s+=E);for(u=i,H=R,U=F,o=0;o<T;o++)S[(l=u<<2)+3]=M=g*L>>V,M>0?(M=255/M,S[l]=(h*L>>V)*M,S[l+1]=(f*L>>V)*M,S[l+2]=(v*L>>V)*M):S[l]=S[l+1]=S[l+2]=0,h-=d,f-=p,v-=m,g-=y,d-=H.r,p-=H.g,m-=H.b,y-=H.a,l=i+((l=o+D)<P?l:P)*E<<2,h+=b+=H.r=S[l],f+=k+=H.g=S[l+1],v+=C+=H.b=S[l+2],g+=$+=H.a=S[l+3],H=H.next,d+=x=U.r,p+=_=U.g,m+=w=U.b,y+=M=U.a,b-=x,k-=_,C-=w,$-=M,U=U.next,u+=E}return t}(t,0,0,e):stackBlurCanvasRGB(t,0,0,e)}function It(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t=Yt(t),function(r,n){n(At(r,t,e))}}function Pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:256;return ne(Ht([1,4,6,4,1,4,16,24,16,4,6,24,-476,24,6,4,16,24,16,4,1,4,6,4,1],-1/(t=Yt(t))))}var Dt,Bt=j({},{crop:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],n=arguments[3],i=Gt(r*n*4,r,n);return function(o,a){for(var l=e,s=0;l<n;l++,s++)for(var u=t,c=0;u<r;u++,c++)i.pixels[s*r*c]=o.pixels[l*r*u];a(i)}},resize:function(t,e){return function(r,n){var i=ft.drawPixels(r),o=i.getContext("2d");i.width=t,i.height=e,n({pixels:new Uint8ClampedArray(o.getImageData(0,0,t,e).data),width:t,height:e})}},flipH:function(){return function(t,e){for(var r=t.width,n=t.height,i=r%2==1?Math.floor(r/2):r/2,o=0;o<n;o++)for(var a=0;a<i;a++){var l=o*r+a<<2,s=o*r+(r-1-a)<<2;Jt(t.pixels,l,s)}e(t)}},flipV:function(){return function(t,e){for(var r=t.width,n=t.height,i=n%2==1?Math.floor(n/2):n/2,o=0;o<i;o++)for(var a=0;a<r;a++){var l=o*r+a<<2,s=(n-1-o)*r+a<<2;Jt(t.pixels,l,s)}e(t)}},rotate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t=Yt(t),t%=360,function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0==t)return e;if(90==t||270==t)var i=Gt(e.pixels.length,e.height,e.width);else{if(180!=t)return pt(t)(e,r,n);i=Gt(e.pixels.length,e.width,e.height)}Qt(function(r,n,o,a){if(90==t)var l=o*i.width+(i.width-1-a)<<2;else 270==t?l=(i.height-1-o)*i.width+a<<2:180==t&&(l=(i.height-1-a)*i.width+(i.width-1-o)<<2);re(i.pixels,l,e.pixels,n)})(e,function(){r(i)},n)}},rotateDegree:pt,histogram:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"gray",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[],n=0;n<e.length-1;n++)for(var i=e[n],o=e[n+1],a=o[0]-i[0],l=(o[1]-i[1])/a,s=0,u=i[0];s<a;s++,u++)r[u]=i[1]+s*l;return r[255]=255,Kt("red"===t?function(){$r=r[$r]}:"green"===t?function(){$g=r[$g]}:"blue"===t?function(){$b=r[$b]}:function(){var t=Color.RGBtoYCrCb($r,$g,$b),e=Color.YCrCbtoRGB(clamp(r[clamp(t.y)]),t.cr,t.cb,0);$r=e.r,$g=e.g,$b=e.b},{},{$realPoints:r})},"rotate-degree":pt},{bitonal:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,n=He.parse(t),i=He.parse(e),o=r;return Kt(function(){var t=$r+$g+$b<=o?n:i;$r=t.r,$g=t.g,$b=t.b},{$threshold:o},{$darkColor:n,$lightColor:i})},brightness:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t=Yt(t);var e=Math.floor(t/100*255);return Kt(function(){$r+=e,$g+=e,$b+=e},{$C:e})},brownie:function(){var t=[.5997023498159715,.34553243048391263,-.2708298674538042,0,-.037703249837783157,.8609577587992641,.15059552388459913,0,.24113635128153335,-.07441037908422492,.44972182064877153,0,0,0,0,1];return Kt(function(){$r=t[0]*$r+t[1]*$g+t[2]*$b+t[3]*$a,$g=t[4]*$r+t[5]*$g+t[6]*$b+t[7]*$a,$b=t[8]*$r+t[9]*$g+t[10]*$b+t[11]*$a,$a=t[12]*$r+t[13]*$g+t[14]*$b+t[15]*$a},{$matrix:t})},clip:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t=Yt(t);var e=2.55*Math.abs(t);return Kt(function(){$r=$r>255-e?255:0,$g=$g>255-e?255:0,$b=$b>255-e?255:0},{$C:e})},contrast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t=Yt(t);var e=Math.max((128+t)/128,0);return Kt(function(){$r*=e,$g*=e,$b*=e},{$C:e})},gamma:function(){var t=Yt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);return Kt(function(){$r=255*Math.pow($r/255,t),$g=255*Math.pow($g/255,t),$b=255*Math.pow($b/255,t)},{$C:t})},gradient:function(){var t=[].concat(Array.prototype.slice.call(arguments));1===t.length&&"string"==typeof t[0]&&(t=He.convertMatchesArray(t[0]));var e=(t=t.map(function(t){return He.matches(t).length?{type:"param",value:t}:{type:"scale",value:t}})).filter(function(t){return"scale"==t.type})[0];e=e?+e.value:256,t=t.filter(function(t){return"param"==t.type}).map(function(t){return t.value}).join(",");var r=He.gradient(t,e).map(function(t){var e=He.parse(t);return{r:e.r,g:e.g,b:e.b,a:e.a}});return Kt(function(){var t=clamp(Math.ceil(.2126*$r+.7152*$g+.0722*$b)),n=clamp(Math.floor(t*(e/256))),i=r[n];$r=i.r,$g=i.g,$b=i.b,$a=clamp(Math.floor(256*i.a))},{},{$colors:r,$scale:e})},grayscale:function(t){var e=(t=Yt(t))/100;e>1&&(e=1);var r=[.2126+.7874*(1-e),.7152-.7152*(1-e),.0722-.0722*(1-e),0,.2126-.2126*(1-e),.7152+.2848*(1-e),.0722-.0722*(1-e),0,.2126-.2126*(1-e),.7152-.7152*(1-e),.0722+.9278*(1-e),0,0,0,0,1];return Kt(function(){$r=r[0]*$r+r[1]*$g+r[2]*$b+r[3]*$a,$g=r[4]*$r+r[5]*$g+r[6]*$b+r[7]*$a,$b=r[8]*$r+r[9]*$g+r[10]*$b+r[11]*$a,$a=r[12]*$r+r[13]*$g+r[14]*$b+r[15]*$a},{$matrix:r})},hue:function(){var t=Yt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:360);return Kt(function(){var e=Color.RGBtoHSV($r,$g,$b),r=e.h;r+=Math.abs(t),r%=360,e.h=r;var n=Color.HSVtoRGB(e);$r=n.r,$g=n.g,$b=n.b},{$C:t})},invert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=(t=Yt(t))/100;return Kt(function(){$r=(255-$r)*e,$g=(255-$g)*e,$b=(255-$b)*e},{$C:e})},kodachrome:function(){var t=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,0,0,0,1];return Kt(function(){$r=t[0]*$r+t[1]*$g+t[2]*$b+t[3]*$a,$g=t[4]*$r+t[5]*$g+t[6]*$b+t[7]*$a,$b=t[8]*$r+t[9]*$g+t[10]*$b+t[11]*$a,$a=t[12]*$r+t[13]*$g+t[14]*$b+t[15]*$a},{$matrix:t})},matrix:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,c=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,h=arguments.length>11&&void 0!==arguments[11]?arguments[11]:0,f=arguments.length>12&&void 0!==arguments[12]?arguments[12]:0,v=arguments.length>13&&void 0!==arguments[13]?arguments[13]:0,g=arguments.length>14&&void 0!==arguments[14]?arguments[14]:0,d=arguments.length>15&&void 0!==arguments[15]?arguments[15]:0,p=[t,e,r,n,i,o,a,l,s,u,c,h,f,v,g,d];return Kt(function(){$r=p[0]*$r+p[1]*a+p[2]*e+p[3]*t,a=p[4]*$r+p[5]*a+p[6]*e+p[7]*t,e=p[8]*$r+p[9]*a+p[10]*e+p[11]*t,t=p[12]*$r+p[13]*a+p[14]*e+p[15]*t},{$matrix:p})},noise:function(){var t=Yt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);return Kt(function(){var e=5*Math.abs(t),r=-e,n=e,i=Math.round(r+Math.random()*(n-r));$r+=i,$g+=i,$b+=i},{$C:t})},opacity:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=(t=Yt(t))/100;return Kt(function(){$a*=e},{$C:e})},polaroid:function(){var t=[1.438,-.062,-.062,0,-.122,1.378,-.122,0,-.016,-.016,1.483,0,0,0,0,1];return Kt(function(){$r=t[0]*$r+t[1]*$g+t[2]*$b+t[3]*$a,$g=t[4]*$r+t[5]*$g+t[6]*$b+t[7]*$a,$b=t[8]*$r+t[9]*$g+t[10]*$b+t[11]*$a,$a=t[12]*$r+t[13]*$g+t[14]*$b+t[15]*$a},{$matrix:t})},saturation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=(t=Yt(t))/100,r=1-Math.abs(e),n=[r,0,0,0,0,r,0,0,0,0,r,0,0,0,0,r];return Kt(function(){$r=n[0]*$r+n[1]*$g+n[2]*$b+n[3]*$a,$g=n[4]*$r+n[5]*$g+n[6]*$b+n[7]*$a,$b=n[8]*$r+n[9]*$g+n[10]*$b+n[11]*$a,$a=n[12]*$r+n[13]*$g+n[14]*$b+n[15]*$a},{$matrix:n})},sepia:function(){var t=Yt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);t>1&&(t=1);var e=[.393+.607*(1-t),.769-.769*(1-t),.189-.189*(1-t),0,.349-.349*(1-t),.686+.314*(1-t),.168-.168*(1-t),0,.272-.272*(1-t),.534-.534*(1-t),.131+.869*(1-t),0,0,0,0,1];return Kt(function(){$r=e[0]*$r+e[1]*$g+e[2]*$b+e[3]*$a,$g=e[4]*$r+e[5]*$g+e[6]*$b+e[7]*$a,$b=e[8]*$r+e[9]*$g+e[10]*$b+e[11]*$a,$a=e[12]*$r+e[13]*$g+e[14]*$b+e[15]*$a},{$matrix:e})},shade:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=Yt(t),i=Yt(e),o=Yt(r);return Kt(function(){$r*=n,$g*=i,$b*=o},{$redValue:n,$greenValue:i,$blueValue:o})},shift:function(){var t=[1.438,-.062,-.062,0,-.122,1.378,-.122,0,-.016,-.016,1.483,0,0,0,0,1];return Kt(function(){$r=t[0]*$r+t[1]*$g+t[2]*$b+t[3]*$a,$g=t[4]*$r+t[5]*$g+t[6]*$b+t[7]*$a,$b=t[8]*$r+t[9]*$g+t[10]*$b+t[11]*$a,$a=t[12]*$r+t[13]*$g+t[14]*$b+t[15]*$a},{$matrix:t})},solarize:function(t,e,r){var n=Yt(t),i=Yt(e),o=Yt(r);return Kt(function(){$r=$r<n?255-$r:$r,$g=$g<i?255-$g:$g,$b=$b<o?255-$b:$b},{$redValue:n,$greenValue:i,$blueValue:o})},technicolor:function(){var t=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.231103377548616,-.7501899197440212,1.847597816108189,0,0,0,0,1];return Kt(function(){$r=t[0]*$r+t[1]*$g+t[2]*$b+t[3]*$a,$g=t[4]*$r+t[5]*$g+t[6]*$b+t[7]*$a,$b=t[8]*$r+t[9]*$g+t[10]*$b+t[11]*$a,$a=t[12]*$r+t[13]*$g+t[14]*$b+t[15]*$a},{$matrix:t})},threshold:function(){return mt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,!1)},"threshold-color":mt,tint:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=Yt(t),i=Yt(e),o=Yt(r);return Kt(function(){$r+=(255-$r)*n,$g+=(255-$g)*i,$b+=(255-$b)*o},{$redTint:n,$greenTint:i,$blueTint:o})}},{blur:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return ne(te(t=Yt(t)))},emboss:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;return ne([-2*(t=Yt(t)),-t,0,-t,1,t,0,t,2*t])},gaussianBlur:yt,"gaussian-blur":yt,gaussianBlur5x:bt,"gaussian-blur-5x":bt,grayscale2:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([.3,.3,.3,0,0,.59,.59,.59,0,0,.11,.11,.11,0,0,0,0,0,0,0,0,0,0,0,0],(t=Yt(t))/100))},normal:function(){return ne([0,0,0,0,1,0,0,0,0])},kirschHorizontal:kt,"kirsch-horizontal":kt,kirschVertical:Ct,"kirsch-vertical":Ct,laplacian:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([-1,-1,-1,-1,8,-1,-1,-1,-1],(t=Yt(t))/100))},laplacian5x:$t,"laplacian-5x":$t,motionBlur:xt,"motion-blur":xt,motionBlur2:_t,"motion-blur-2":_t,motionBlur3:wt,"motion-blur-3":wt,negative:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([-1,0,0,0,0,0,-1,0,0,0,0,0,-1,0,0,0,0,0,1,0,1,1,1,1,1],(t=Yt(t))/100))},sepia2:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([.393,.349,.272,0,0,.769,.686,.534,0,0,.189,.168,.131,0,0,0,0,0,0,0,0,0,0,0,0],(t=Yt(t))/100))},sharpen:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([0,-1,0,-1,5,-1,0,-1,0],(t=Yt(t))/100))},sobelHorizontal:Mt,"sobel-horizontal":Mt,sobelVertical:Ot,"sobel-vertical":Ot,stackBlur:It,"stack-blur":It,transparency:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,.3,0,0,0,0,0,1],(t=Yt(t))/100))},unsharpMasking:Pt,"unsharp-masking":Pt},{kirsch:function(){return le("kirsch-horizontal kirsch-vertical")},sobel:function(){return le("sobel-horizontal sobel-vertical")},vintage:function(){return le("brightness(15) saturation(-20) gamma(1.8)")}}),Rt=0,jt=(R(Dt={partial:he,multi:ue,merge:ce,weight:Ht,repeat:Ut,colorMatrix:function(t,e,r){var n=t[e],i=t[e+1],o=t[e+2],a=t[e+3];ee(t,e,r[0]*n+r[1]*i+r[2]*o+r[3]*a,r[4]*n+r[5]*i+r[6]*o+r[7]*a,r[8]*n+r[9]*i+r[10]*o+r[11]*a,r[12]*n+r[13]*i+r[14]*o+r[15]*a)},each:Vt,eachXY:Nt,createRandomCount:function(){return[9,16,25,36,49,64,81,100].sort(function(t,e){return.5-Math.random()})[0]},createRandRange:function(t,e,r){for(var n=[],i=1;i<=r;i++){var o=Math.random()*(e-t)+t,a=Math.floor(10*Math.random())%2==0?-1:1;n.push(a*o)}n.sort();var l=Math.floor(r>>1),s=n[l];return n[l]=n[0],n[0]=s,n},createBitmap:Gt,createBlurMatrix:te,pack:function(t){return function(e,r){Vt(e.pixels.length,function(r,n){t(e.pixels,r,n,e.pixels[r],e.pixels[r+1],e.pixels[r+2],e.pixels[r+3])},function(){r(e)})}},packXY:Qt,pixel:Kt,getBitmap:zt,putBitmap:Xt,radian:function(t){return dt.CONSTANT.radian(t)},convolution:ne,parseParamNumber:Yt,filter:le,clamp:ae,fillColor:ee,fillPixelColor:re},"multi",ue),R(Dt,"merge",ce),R(Dt,"matches",ie),R(Dt,"parseFilter",oe),R(Dt,"partial",he),Dt),Ft=jt;function Ht(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t.map(function(t){return t*e})}function Ut(t,e){for(var r=new Array(e),n=0;n<e;n++)r[n]=t;return r}function Lt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments[3],i=arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1e4,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"full",l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:50,s=e,u=function(t){setTimeout(t,0)};function c(){for(var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,e=[].concat(V(Array(t))).map(function(t){return"cri = ri + i * s; if (cri >= mx) return {currentRunIndex: cri, i: null}; c(cri); i++;"}).join("\n");return new Function("ri","i","s","mx","c","\n            let cri = ri;\n            \n            "+e+"\n            \n            return {currentRunIndex: cri, i: i} \n        ")}(l),a=s,h={},f=0;f<o;){if(null==(h=e(s,f,r,t,n)).i){a=h.currentRunIndex;break}f=h.i,a=h.currentRunIndex}!function(e){e?s=e:s+=r;if(s>=t)return void i();u?u(c):c()}(a)}"requestAnimationFrame"==a&&(u=requestAnimationFrame,o=1e3),"full"==a&&(u=null,o=t),c()}function Vt(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};Lt(t,0,4,function(t){e(t,t>>2)},function(){r()},n.functionDumpCount,n.frameTimer,n.loopCount)}function Nt(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};Lt(t,0,4,function(t){var n=t>>2;r(t,n%e,Math.floor(n/e))},function(){n()},i.functionDumpCount,i.frameTimer,i.loopCount)}function Gt(t,e,r){return{pixels:new Uint8ClampedArray(t),width:e,height:r}}function zt(t,e){return ft.getBitmap(t,e)}function Xt(t,e,r){return ft.putBitmap(t,e,r)}function Yt(t){return"string"==typeof t&&(t=(t=t.replace(/deg/,"")).replace(/px/,"")),+t}var Wt=/(([\w_\-]+)(\(([^\)]*)\))?)+/gi;function qt(t){var e,r,n,i,o,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e={},r=[{callback:t,context:a,rootContext:l}].map(function(t){var r=[];Object.keys(t.context).forEach(function(t,e){r[t]="n$"+Rt+++t+"$"}),Object.keys(t.rootContext).forEach(function(n,i){r[n]="r$"+Rt+++n+"$",e[r[n]]=t.rootContext[n]});var n=Object.keys(t.context).filter(function(e){return"number"!=typeof t.context[e]&&"string"!=typeof t.context[e]&&(!Array.isArray(t.context[e])||"number"!=typeof t.context[e][0]&&"string"!=typeof t.context[e][0])}).map(function(e,n){return[r[e],JSON.stringify(t.context[e])].join(" = ")}),i=t.callback.toString().split("{");return i.shift(),(i=(i=i.join("{")).split("}")).pop(),i=i.join("}"),Object.keys(r).forEach(function(e){var n=r[e];"number"==typeof t.context[e]||"string"==typeof t.context[e]?i=i.replace(new RegExp("\\"+e,"g"),t.context[e]):!Array.isArray(t.context[e])||"number"!=typeof t.context[e][0]&&"string"!=typeof t.context[e][0]?i=i.replace(new RegExp("\\"+e,"g"),n):t.context[e].forEach(function(t,r){i=i.replace(new RegExp("\\"+e+"\\["+r+"\\]","g"),t)})}),{preCallbackString:i,preContext:n}}),n=r.map(function(t,e){return t.preContext.length?"const "+t.preContext+";":""}).join("\n\n"),i=r.map(function(t){return t.preCallbackString}).join("\n\n"),(o=new Function("$pixels","$pixelIndex","$clamp","$Color"," \n    let $r = $pixels[$pixelIndex], $g = $pixels[$pixelIndex+1], $b = $pixels[$pixelIndex+2], $a = $pixels[$pixelIndex+3];\n\n    "+n+"\n\n    "+i+"\n    \n    $pixels[$pixelIndex] = $r\n    $pixels[$pixelIndex+1] = $g \n    $pixels[$pixelIndex+2] = $b   \n    $pixels[$pixelIndex+3] = $a   \n    ")).$preCallbackString=i,o.$preContext=n,o.rootContextObject=e,o}function Kt(t){var e=qt(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}),r=function(t,e){};return r.userFunction=e,r}var Zt=[0,1,2,3];function Jt(t,e,r){Zt.forEach(function(n){var i=t[e+n];t[e+n]=t[r+n],t[r+n]=i})}function Qt(t){return function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Nt(e.pixels.length,e.width,function(r,n,i){t(e.pixels,r,n,i)},function(){r(e)},n)}}function te(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=Math.pow(t,2);return Ut(1/e,e)}function ee(t,e,r,n,i,o){if(3==arguments.length){var a=arguments[2];r=a.r,n=a.g,i=a.b,o=a.a}"number"==typeof r&&(t[e]=r),"number"==typeof n&&(t[e+1]=n),"number"==typeof i&&(t[e+2]=i),"number"==typeof o&&(t[e+3]=o)}function re(t,e,r,n){ee(t,e,r[n],r[n+1],r[n+2],r[n+3])}function ne(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:255;return e=t.map(function(t,e){return[]}),t.forEach(function(t,i){if(0!=t){var o=e[i];for(i=r;i<=n;i++)o[i]=t*i}}),e}(t);return function(n,i){var o=Math.round(Math.sqrt(t.length)),a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=t.width+e,n=t.height+e;return{pixels:new Uint8ClampedArray(r*n*4),width:r,height:n}}(n,2*o);!function(t,e,r,n){for(var i=e.pixels.length/4,o=0,a=0,l=0,s=0,u=0,c=0,h=0;h<i;h++)l=h%e.width,a=n+(s=Math.floor(h/e.width)),(o=r+l)>t.width||a>t.height||(u=s*e.width+l<<2,c=a*t.width+o<<2,t.pixels[c]=e.pixels[u],t.pixels[c+1]=e.pixels[u+1],t.pixels[c+2]=e.pixels[u+2],t.pixels[c+3]=e.pixels[u+3])}(a,n,o,o);for(var l=Gt(a.pixels.length,a.width,a.height),s=Gt(n.pixels.length,n.width,n.height),u=function(t,e,r,n,i){var o=Math.round(Math.sqrt(t.length)),a=Math.floor(o/2),l=i?1:0,s="let r = 0, g = 0, b = 0, a = 0, scy = 0, scx =0, si = 0; ",u=[],c=[],h=[],f=[];t.forEach(function(t,e){var n=Math.floor(e/o)-a,i=e%o-a;0!=t&&(u.push("$t["+e+"][$sp[(($sy + ("+n+")) * "+r+" + ($sx + ("+i+"))) * 4]]"),c.push("$t["+e+"][$sp[(($sy + ("+n+")) * "+r+" + ($sx + ("+i+"))) * 4 + 1]]"),h.push("$t["+e+"][$sp[(($sy + ("+n+")) * "+r+" + ($sx + ("+i+"))) * 4 + 2]]"),f.push("$t["+e+"][$sp[(($sy + ("+n+")) * "+r+" + ($sx + ("+i+"))) * 4 + 3]]"))}),s+="r = "+u.join(" + ")+"; g = "+c.join(" + ")+"; b = "+h.join(" + ")+"; a = "+f.join(" + ")+";",s+="$dp[$di] = r; $dp[$di+1] = g;$dp[$di+2] = b;$dp[$di+3] = a + ("+l+")*(255-a); ";var v=new Function("$dp","$sp","$di","$sx","$sy","$t",s);return function(t,r,n,i,o){v(t,r,n,i,o,e)}}(t,r,a.width,a.height,e),c=n.pixels.length/4,h=0;h<c;h++){var f=h,v=f%n.width+o,g=Math.floor(f/n.width)+o;u(l.pixels,a.pixels,4*(g*a.width+v),v,g)}!function(t,e,r,n){for(var i=e.pixels.length>>2,o=0,a=0,l=0,s=0,u=0,c=0,h=0;h<i;h++)l=h%e.width,a=n+(s=Math.floor(h/e.width)),(o=r+l)>t.width||a>t.height||(u=a*t.width+o<<2,c=s*e.width+l<<2,e.pixels[c]=t.pixels[u],e.pixels[c+1]=t.pixels[u+1],e.pixels[c+2]=t.pixels[u+2],e.pixels[c+3]=t.pixels[u+3])}(l,s,o,o),i(s)}}function ie(t){var e=He.convertMatches(t),r=e.str.match(Wt),n=[];if(!r)return n;var i={next:0};return n=(n=r.map(function(t){return{filter:t,origin:He.reverseMatches(t,e.matches)}})).map(function(e){var r=t.indexOf(e.origin,i.next);return e.startIndex=r,e.endIndex=r+e.origin.length,e.arr=oe(e.origin),i.next=e.endIndex,e}).filter(function(t){return!!t.arr.length})}function oe(t){var e=He.convertMatches(t),r=e.str.match(Wt);if(!r[0])return[];var n=r[0].split("("),i=n.shift(),o=[];return n.length&&(o=n.shift().split(")")[0].split(",").map(function(t){return He.reverseMatches(t,e.matches)})),[i].concat(V(o)).map(He.trim)}function ae(t){return Math.min(255,t)}function le(t){return ce(ie(t).map(function(t){return t.arr}))}function se(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[],r=[],n=0,i=t.length;n<i;n++){var o=t[n];o.userFunction?r.push(o):(r.length&&e.push([].concat(V(r))),e.push(o),r=[])}return r.length&&e.push([].concat(V(r))),e.forEach(function(t,r){var n;Array.isArray(t)&&(e[r]=(n=function(t){var e=t.map(function(t){return" \n            "+t.userFunction.$preContext+"\n\n            "+t.userFunction.$preCallbackString+"\n\n            $r = clamp($r); $g = clamp($g); $b = clamp($b); $a = clamp($a);\n        "}).join("\n\n"),r={clamp:ae,Color:He};t.forEach(function(t){Object.assign(r,t.userFunction.rootContextObject)});var n="const "+Object.keys(r).map(function(t){return" "+t+" = $rc."+t+" "}).join(","),i=new Function("$p","$pi","$rc"," \n    let $r = $p[$pi], $g = $p[$pi+1], $b = $p[$pi+2], $a = $p[$pi+3];\n    \n    "+n+"\n\n    "+e+"\n    \n    $p[$pi] = $r; $p[$pi+1] = $g; $p[$pi+2] = $b; $p[$pi+3] = $a;\n    ");return function(t,e){i(t,e,r)}}(t),function(t,e){for(var r=0,i=t.pixels.length;r<i;r+=4)n(t.pixels,r);e(t)}))}),e}function ue(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=(e=se(e=e.map(function(t){return function(t){if("function"==typeof t)return t;"string"==typeof t&&(t=[t]);var e=(t=t.slice(0)).shift();if("function"==typeof e)return e;var r=t,n=Bt[e]||Ft[e];if(!n)throw new Error(e+" is not filter. please check filter name.");return n.apply(n,r)}(t)}).filter(function(t){return t}))).length;return function(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t,a=0;function l(){e[a].call(null,o,function(t){o=t,function(){if(++a>=n)return void r(o);l()}()},i)}l()}}function ce(t){return ue.apply(void 0,V(t))}function he(t){for(var e=null,r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return e=1==n.length&&"string"==typeof n[0]?le(n[0]):ce(n),function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e(zt(r,t),function(e){n(Xt(r,e,t))},i)}}function fe(t){return"string"==typeof t&&(t=(t=t.replace(/deg/,"")).replace(/px/,"")),+t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t.map(function(t){return t*e})}var ge=0;function de(t){return[].concat(Array.prototype.slice.call(arguments))}function pe(t){return{type:"convolution",length:t.length,content:t}}function me(t,e){return{type:"shader",index:ge,options:e,content:(r=t,n=ge++,"\n        if (u_filterIndex == "+n+".0) {\n            "+r+"\n        }\n    ")};var r,n}function ye(t){return"\n    \n    if (u_kernelSelect == "+t+".0) {\n        vec4 colorSum = "+(e=t,r=Math.sqrt(e),n=Math.floor(r/2),[].concat(V(Array(e))).map(function(t,i){var o=Math.floor(i/r)-n;return"texture(u_image, v_texCoord + onePixel * vec2("+(i%r-n)+", "+o+")) * u_kernel"+e+"["+i+"]"}).join(" + \n"))+"; \n\n        outColor = vec4((colorSum / u_kernel"+t+"Weight).rgb, 1);\n        \n    }\n    ";var e,r,n}function be(t){return"vec4("+(t=[t.r/255,t.g/255,t.b/255,t.a||0].map(ke))+")"}function ke(t){return t==Math.floor(t)?t+".0":t}function Ce(){return pe(ve([1,2,1,2,4,2,1,2,1],fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*(1/16)))}function $e(){return pe([1,4,6,4,1,4,16,24,16,4,6,24,36,24,6,4,16,24,16,4,1,4,6,4,1])}function xe(){return pe([5,5,5,-3,0,-3,-3,-3,-3])}function _e(){return pe([5,-3,-3,5,0,-3,5,-3,-3])}function we(){return pe([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,24,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1])}function Me(){return pe([1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1])}function Oe(){return pe([1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1])}function Se(){return pe([1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1])}function Ee(){return pe([-1,-2,-1,0,0,0,1,2,1])}function Te(){return pe([-1,0,1,-2,0,2,-1,0,1])}function Ae(){return pe(ve([1,4,6,4,1,4,16,24,16,4,6,24,-476,24,6,4,16,24,16,4,1,4,6,4,1],-1/256))}function Ie(){var t=[arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,arguments.length>11&&void 0!==arguments[11]?arguments[11]:0,arguments.length>12&&void 0!==arguments[12]?arguments[12]:0,arguments.length>13&&void 0!==arguments[13]?arguments[13]:0,arguments.length>14&&void 0!==arguments[14]?arguments[14]:0,arguments.length>15&&void 0!==arguments[15]?arguments[15]:0].map(ke);return me("\n\n        outColor = vec4(\n            "+t[0]+" * pixelColor.r + "+t[1]+" * pixelColor.g + "+t[2]+" * pixelColor.b + "+t[3]+" * pixelColor.a,\n            "+t[4]+" * pixelColor.r + "+t[5]+" * pixelColor.g + "+t[6]+" * pixelColor.b + "+t[7]+" * pixelColor.a,\n            "+t[8]+" * pixelColor.r + "+t[9]+" * pixelColor.g + "+t[10]+" * pixelColor.b + "+t[11]+" * pixelColor.a,\n            "+t[12]+" * pixelColor.r + "+t[13]+" * pixelColor.g + "+t[14]+" * pixelColor.b + "+t[15]+" * pixelColor.a\n        ); \n    ")}function Pe(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return me("\n        float c = ( (pixelColor.r * 0.2126 + pixelColor.g * 0.7152 + pixelColor.b * 0.0722) ) >= "+(t=ke(fe(t)))+" ? 1.0 : 0.0;\n\n        outColor = vec4(c, c, c, pixelColor.a);\n    ")}var De=j({},{blur:function(){return pe([1,1,1,1,1,1,1,1,1])},normal:function(){return pe([0,0,0,0,1,0,0,0,0])},emboss:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;return pe([-2*(t=fe(t)),-t,0,-t,1,t,0,t,2*t])},gaussianBlur:Ce,"gaussian-blur":Ce,gaussianBlur5x:$e,"gaussian-blur-5x":$e,grayscale2:function(){return pe([.3,.3,.3,0,0,.59,.59,.59,0,0,.11,.11,.11,0,0,0,0,0,0,0,0,0,0,0,0])},kirschHorizontal:xe,"kirsch-horizontal":xe,kirschVertical:_e,"kirsch-vertical":_e,laplacian:function(){return pe([-1,-1,-1,-1,8,-1,-1,-1,-1])},laplacian5x:we,"laplacian-5x":we,motionBlur:Me,"motion-blur":Me,motionBlur2:Oe,"motion-blur-2":Oe,motionBlur3:Se,"motion-blur-3":Se,negative:function(){return pe([-1,0,0,0,0,0,-1,0,0,0,0,0,-1,0,0,0,0,0,1,0,1,1,1,1,1])},sepia2:function(){return pe([.393,.349,.272,0,0,.769,.686,.534,0,0,.189,.168,.131,0,0,0,0,0,0,0,0,0,0,0,0])},sharpen:function(){return pe([0,-1,0,-1,5,-1,0,-1,0])},sobelHorizontal:Ee,"sobel-horizontal":Ee,sobelVertical:Te,"sobel-vertical":Te,transparency:function(){return pe([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,.3,0,0,0,0,0,1])},unsharpMasking:Ae,"unsharp-masking":Ae},{bitonal:function(t,e){var r=ke(arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5),n=be(He.parse(t));return me("\n        if ((pixelColor.r + pixelColor.g + pixelColor.b) > "+r+") {\n            outColor = vec4("+be(He.parse(e))+".rgb, pixelColor.a);\n        } else {\n            outColor = vec4("+n+".rgb, pixelColor.a);\n        }\n    ")},brightness:function(){return me("\n        outColor = pixelColor + ("+ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))+");\n    ")},brownie:function(){return Ie(.5997023498159715,.34553243048391263,-.2708298674538042,0,-.037703249837783157,.8609577587992641,.15059552388459913,0,.24113635128153335,-.07441037908422492,.44972182064877153,0,0,0,0,1)},clip:function(){var t=ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0));return me("\n        outColor = vec4(\n            (pixelColor.r > 1.0 - "+t+") ? 1.0 : 0.0,\n            (pixelColor.g > 1.0 - "+t+") ? 1.0 : 0.0,\n            (pixelColor.b > 1.0 - "+t+") ? 1.0 : 0.0,\n            pixelColor.a \n        );\n    ")},chaos:function(){return me("\n        vec2 st = pixelColor.st;\n        st *= "+ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:10))+";\n        \n        vec2 ipos = floor(st);  // get the integer coords\n\n        vec3 color = vec3(random( ipos ));\n\n        outColor = vec4(color, pixelColor.a);\n    ")},contrast:function(){return me("\n        outColor = pixelColor * "+ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))+";\n    ")},gamma:function(){var t=ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1));return me("\n        outColor = vec4(pow(pixelColor.r, "+t+"), pow(pixelColor.g, "+t+"), pow(pixelColor.b, "+t+"), pixelColor.a );\n    ")},gradient:function(){var t=[].concat(Array.prototype.slice.call(arguments));1===t.length&&"string"==typeof t[0]&&(t=He.convertMatchesArray(t[0])),t=t.map(function(t){return t}).join(", ");var e=He.parseGradient(t);e[0][1]=0,e[e.length-1][1]=1;for(var r=[],n=0,i=(e=e.map(function(t){var e=He.parse(t[0]);return[{r:e.r,g:e.g,b:e.b,a:e.a},t[1]]})).length;n<i-1;n++){var o=e[n],a=e[n+1],l=be(o[0]),s=be(a[0]),u=ke(o[1]),c=ke(a[1]);r.push("\n            if ("+u+" <= rate && rate < "+c+") {\n                outColor = mix("+l+", "+s+", (rate - "+u+")/("+c+" - "+u+"));\n            }\n        ")}return me("\n        float rate = (pixelColor.r * 0.2126 + pixelColor.g * 0.7152 + pixelColor.b * 0.0722); \n\n        "+r.join("\n")+"        \n    ")},grayscale:function(){var t=fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);return t>1&&(t=1),Ie(.2126+.7874*(1-t),.7152-.7152*(1-t),.0722-.0722*(1-t),0,.2126-.2126*(1-t),.7152+.2848*(1-t),.0722-.0722*(1-t),0,.2126-.2126*(1-t),.7152-.7152*(1-t),.0722+.9278*(1-t),0,0,0,0,1)},hue:function(){return me("\n        vec3 hsv = rgb2hsv(pixelColor.rgb);\n        hsv.x += "+ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))+";\n        outColor = vec4(hsv2rgb(hsv).rgb, pixelColor.a);\n    ")},invert:function(){var t=ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1));return me("\n        outColor = vec4(\n            (1.0 - pixelColor.r) * "+t+",\n            (1.0 - pixelColor.g) * "+t+",\n            (1.0 - pixelColor.b) * "+t+",\n            pixelColor.a\n        );\n    ")},kodachrome:function(){return Ie(1.1285582396593525,-.3967382283601348,-.03992559172921793,0,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,0,0,0,1)},matrix:Ie,noise:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=Math.abs(fe(t)),r=ke(-e);return me("\n        float rnd = "+r+" + random( pixelColor.st ) * ("+ke(e)+" - "+r+");\n\n        outColor = vec4(pixelColor.rgb + rnd, 1.0);\n    ")},opacity:function(){return me("\n        outColor = vec4(pixelColor.rgb, pixelColor.a * "+ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))+");\n    ")},polaroid:function(){return Ie(1.438,-.062,-.062,0,-.122,1.378,-.122,0,-.016,-.016,1.483,0,0,0,0,1)},saturation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=1-Math.abs(fe(t));return Ie(e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,e)},sepia:function(){var t=fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);return t>1&&(t=1),Ie(.393+.607*(1-t),.769-.769*(1-t),.189-.189*(1-t),0,.349-.349*(1-t),.686+.314*(1-t),.168-.168*(1-t),0,.272-.272*(1-t),.534-.534*(1-t),.131+.869*(1-t),0,0,0,0,1)},shade:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return me("\n        outColor = vec4(\n            pixelColor.r * "+ke(fe(t)/255)+",\n            pixelColor.g * "+ke(fe(e)/255)+",\n            pixelColor.b * "+ke(fe(r)/255)+",\n            pixelColor.a\n        );\n    ")},shift:function(){return Ie(1.438,-.062,-.062,0,-.122,1.378,-.122,0,-.016,-.016,1.483,0,0,0,0,1)},solarize:function(t,e,r){return me("\n        outColor = vec4(\n            (pixelColor.r < "+ke(fe(t))+") ? 1.0 - pixelColor.r: pixelColor.r,\n            (pixelColor.g < "+ke(fe(e))+") ? 1.0 - pixelColor.g: pixelColor.g,\n            (pixelColor.b < "+ke(fe(r))+") ? 1.0 - pixelColor.b: pixelColor.b,\n            pixelColor.a\n        );\n    ")},technicolor:function(){return Ie(1.9125277891456083,-.8545344976951645,-.09155508482755585,0,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.231103377548616,-.7501899197440212,1.847597816108189,0,0,0,0,1)},threshold:function(){return Pe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,!1)},"threshold-color":Pe,tint:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return me("\n        outColor = vec4(\n            pixelColor.r += (1 - pixelColor.r) * "+fe(t)+",\n            pixelColor.g += (1 - pixelColor.g) * "+fe(e)+",\n            pixelColor.b += (1 - pixelColor.b) * "+fe(r)+",\n            pixelColor.a\n        );\n    ")}},{kirsch:function(){return de("kirsch-horizontal kirsch-vertical")},sobel:function(){return de("sobel-horizontal sobel-vertical")},vintage:function(){return de("brightness(0.15) saturation(-0.2) gamma(1.8)")}}),Be=0,Re={GLCanvas:function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:"400px",height:"300px"};D(this,t),this.img=e.img,this.width=parseFloat(this.img.width||e.width||"400px"),this.height=parseFloat(this.img.height||e.height||"300px"),this.init()}return B(t,[{key:"resize",value:function(){this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.width=this.width+"px",this.canvas.style.height=this.height+"px",this.viewport()}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=this.gl;i.clearColor(t,e,r,n),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT)}},{key:"viewport",value:function(t,e,r,n){var i=this.gl;i.viewport(t||0,e||0,r||i.canvas.width,n||i.canvas.height)}},{key:"initCanvas",value:function(t,e){if(this.canvas=document.createElement("canvas"),this.gl=this.canvas.getContext("webgl2"),!this.gl)throw new Error("you need webgl2 support");this.program=this.createProgram(t,e),this.resize(),this.initBuffer()}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"TRIANGLES",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,n=this.gl;n.drawArrays(n[t],e,r)}},{key:"triangles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;this.draw("TRIANGLES",t,e)}},{key:"uniform2f",value:function(){for(var t,e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=r.shift();(t=this.gl).uniform2f.apply(t,[this.locations[i]].concat(r))}},{key:"uniform1f",value:function(){for(var t,e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=r.shift();(t=this.gl).uniform1f.apply(t,[this.locations[i]].concat(r))}},{key:"uniform1fv",value:function(){for(var t,e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=r.shift();(t=this.gl).uniform1fv.apply(t,[this.locations[i]].concat(r))}},{key:"uniform1i",value:function(){for(var t,e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=r.shift();(t=this.gl).uniform1i.apply(t,[this.locations[i]].concat(r))}},{key:"useProgram",value:function(){this.gl.useProgram(this.program)}},{key:"bindBuffer",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"STATIC_DRAW",n=this.gl;this.buffers[t]||(this.buffers[t]=n.createBuffer()),n.bindBuffer(n.ARRAY_BUFFER,this.buffers[t]),e&&n.bufferData(n.ARRAY_BUFFER,new Float32Array(e),n[r])}},{key:"enable",value:function(t){this.gl.enableVertexAttribArray(this.locations[t])}},{key:"location",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"attribute";"attribute"===e?this.locations[t]=this.gl.getAttribLocation(this.program,t):"uniform"===e&&(this.locations[t]=this.gl.getUniformLocation(this.program,t))}},{key:"a",value:function(t){return this.location(t)}},{key:"u",value:function(t){return this.location(t,"uniform")}},{key:"pointer",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"FLOAT",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=this.gl;a.vertexAttribPointer(this.locations[t],r,a[e],n,i,o)}},{key:"bufferData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.gl;e.bufferData(e.ARRAY_BUFFER,new Float32Array(t),e.STATIC_DRAW)}},{key:"isPowerOf2",value:function(t){return 0==(t&t-1)}},{key:"bindTexture",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"RGBA",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"RGBA",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"UNSIGNED_BYTE",a=this.gl;1!=arguments.length?(this.textures[t]||(this.textures[t]=a.createTexture()),this.textureIndex[t]=Be++,a.bindTexture(a.TEXTURE_2D,this.textures[t]),this.setTextureParameter(),a.texImage2D(a.TEXTURE_2D,r,a[n],a[i],a[o],e.newImage||e)):a.bindTexture(a.TEXTURE_2D,this.textures[t])}},{key:"bindColorTexture",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:256,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"RGBA",a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"RGBA",l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"UNSIGNED_BYTE",s=this.gl;this.textures[t]||(this.textures[t]=s.createTexture()),this.textureIndex[t]=Be++,s.bindTexture(s.TEXTURE_2D,this.textures[t]),this.setTextureParameter(),s.texImage2D(s.TEXTURE_2D,i,s[o],r,n,0,s[a],s[l],new Uint8Array(e))}},{key:"bindEmptyTexture",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"RGBA",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"RGBA",a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"UNSIGNED_BYTE",l=this.gl;this.textures[t]||(this.textures[t]=l.createTexture()),this.textureIndex[t]=Be++,l.bindTexture(l.TEXTURE_2D,this.textures[t]),this.setTextureParameter();l.texImage2D(l.TEXTURE_2D,n,l[i],e,r,0,l[o],l[a],null)}},{key:"setTextureParameter",value:function(){var t=this.gl;t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST)}},{key:"bindFrameBufferWithTexture",value:function(t,e,r,n){this.bindEmptyTexture(e,r,n),this.bindFrameBuffer(t,e)}},{key:"enumToString",value:function(t){var e=this.gl;if(0===t)return"NONE";for(var r in e)if(e[r]===t)return r;return"0x"+t.toString(16)}},{key:"bindFrameBuffer",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.gl;if(1!==arguments.length){this.framebuffers[t]||(this.framebuffers[t]=r.createFramebuffer()),r.bindFramebuffer(r.FRAMEBUFFER,this.framebuffers[t]);var n=r.COLOR_ATTACHMENT0;r.framebufferTexture2D(r.FRAMEBUFFER,n,r.TEXTURE_2D,this.textures[e],0);r.checkFramebufferStatus(r.FRAMEBUFFER);r.FRAMEBUFFER_COMPLETE}else r.bindFramebuffer(r.FRAMEBUFFER,null==t?null:this.framebuffers[t])}},{key:"bindVA",value:function(){var t=this.gl;this.vao||(this.vao=t.createVertexArray()),t.bindVertexArray(this.vao)}},{key:"bindAttr",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"STATIC_DRAW",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;this.bindBuffer(t,e,r),this.enable(t),this.pointer(t,"FLOAT",n)}},{key:"initBuffer",value:function(){var t=this.canvas,e=t.width,r=t.height;this.a("a_position"),this.a("a_texCoord"),this.u("u_resolution"),this.u("u_image"),this.u("u_flipY"),this.u("u_kernelSelect"),this.u("u_filterIndex"),this.u("u_kernel9[0]"),this.u("u_kernel9Weight"),this.u("u_kernel25[0]"),this.u("u_kernel25Weight"),this.u("u_kernel49[0]"),this.u("u_kernel49Weight"),this.u("u_kernel81[0]"),this.u("u_kernel81Weight"),this.bindVA(),this.bindAttr("a_position",[0,0,e,0,0,r,0,r,e,0,e,r],"STATIC_DRAW",2),this.bindAttr("a_texCoord",[0,0,1,0,0,1,0,1,1,0,1,1],"STATIC_DRAW",2),this.bindTexture("u_image",this.img),this.bindFrameBufferWithTexture("frame_buffer_0","img_texture_0",e,r),this.bindFrameBufferWithTexture("frame_buffer_1","img_texture_1",e,r)}},{key:"activeTexture",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.gl;e.activeTexture(e.TEXTURE0+t)}},{key:"drawFilter",value:function(){var t=this,e=this.gl;this.resize(),this.clear(),this.useProgram(),this.bindVA(),this.activeTexture(0),this.bindTexture("u_image"),this.uniform1i("u_image",0),this.uniform1f("u_flipY",1);var r=e.canvas,n=r.width,i=r.height;this.eachFilter(function(e,r){t.bindFrameBuffer("frame_buffer_"+r%2),t.uniform2f("u_resolution",n,i),t.viewport(0,0,n,i),t.effectFilter(e),t.bindTexture("img_texture_"+r%2)}),this.uniform1f("u_flipY",-1),this.bindFrameBuffer(null),this.uniform2f("u_resolution",n,i),this.viewport(0,0,n,i),this.clear(),this.effectFilter("normal")}},{key:"effectFilter",value:function(t){"string"==typeof t&&(t=(De[t]||De.normal).call(De)),"convolution"==t.type?(this.uniform1f("u_kernelSelect",t.length),this.uniform1f("u_filterIndex",-1),this.uniform1fv("u_kernel"+t.length+"[0]",t.content),this.uniform1f("u_kernel"+t.length+"Weight",this.computeKernelWeight(t.content))):(this.uniform1f("u_kernelSelect",-1),this.uniform1f("u_filterIndex",t.index)),this.triangles(0,6)}},{key:"computeKernelWeight",value:function(t){var e=t.reduce(function(t,e){return t+e});return e<=0?1:e}},{key:"createProgram",value:function(t,e){var r=this.gl,n=r.createProgram();if(this.vertexShader=this.createVertexShader(t),this.fragmentShader=this.createFragmentShader(e),r.attachShader(n,this.vertexShader),r.attachShader(n,this.fragmentShader),r.linkProgram(n),r.getProgramParameter(n,r.LINK_STATUS))return n;console.error(r.getProgramInfoLog(n)),r.deleteProgram(n)}},{key:"createShader",value:function(t,e){var r=this.gl,n=r.createShader(t);if(r.shaderSource(n,e),r.compileShader(n),r.getShaderParameter(n,r.COMPILE_STATUS))return n;console.error(r.getShaderInfoLog(n)),r.deleteShader(n)}},{key:"createVertexShader",value:function(t){var e=this.gl;return this.createShader(e.VERTEX_SHADER,t)}},{key:"createFragmentShader",value:function(t){var e=this.gl;return this.createShader(e.FRAGMENT_SHADER,t)}},{key:"eachFilter",value:function(t){this.filterList.forEach(t)}},{key:"init",value:function(){this.locations={},this.buffers={},this.framebuffers={},this.textures={},this.textureIndex={},this.hasTexParameter={}}},{key:"destroy",value:function(){var t=this.gl;this.init(),t.deleteProgram(this.program)}},{key:"filter",value:function(t,e){var r,n,i;this.filterList=t,this.initCanvas("#version 300 es \n\n        in vec2 a_position;\n        in vec2 a_texCoord; \n\n        uniform vec2 u_resolution;\n        uniform float u_flipY;\n\n        out vec2 v_texCoord; \n\n        void main() {\n            vec2 zeroToOne = a_position / u_resolution;\n\n            vec2 zeroToTwo = zeroToOne * 2.0;\n\n            vec2 clipSpace = zeroToTwo - 1.0;\n\n            gl_Position = vec4(clipSpace * vec2(1, u_flipY), 0, 1);\n\n            v_texCoord = a_texCoord;\n\n        }\n    ",(r=this.filterList,n=r.filter(function(t){return"shader"==t.type}).map(function(t){return t.content}).join("\n\n"),i={9:!0},r.filter(function(t){return"convolution"==t.type}).forEach(function(t){i[t.length]=!0}),"#version 300 es\n\n    precision highp int;\n    precision mediump float;\n    \n    uniform sampler2D u_image;\n\n    // 3 is 3x3 matrix kernel \n    uniform float u_kernelSelect;\n    uniform float u_filterIndex;\n\n    uniform float u_kernel9[9];\n    uniform float u_kernel9Weight;\n    uniform float u_kernel25[25];\n    uniform float u_kernel25Weight;\n    uniform float u_kernel49[49];\n    uniform float u_kernel49Weight;\n    uniform float u_kernel81[81];\n    uniform float u_kernel81Weight;    \n\n    in vec2 v_texCoord;\n    \n    out vec4 outColor;\n\n    float random (vec2 st) {\n        return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);\n    } \n\n    // \n    vec3 rgb2hsv(vec3 c)\n    {\n        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n        vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\n        vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\n\n        float d = q.x - min(q.w, q.y);\n        float e = 1.0e-10;\n        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n    }\n\n    vec3 hsv2rgb(vec3 c)\n    {\n        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n    }\n    \n    void main() {\n        vec4 pixelColor = texture(u_image, v_texCoord);\n        vec2 onePixel = vec2(1) / vec2(textureSize(u_image, 0));                \n\n        "+n+"\n\n        "+Object.keys(i).map(function(t){return ye(+t)}).join("\n")+"\n\n    }")),this.drawFilter(),"function"==typeof e&&e(this)}}]),t}()};var je=j({},Re,{filter:function(t,e,r,n){var i=new Re.GLCanvas({width:n.width||t.width,height:n.height||t.height,img:t});i.filter(function t(e){var r=[];"string"==typeof e?r=ie(e):Array.isArray(e)&&(r=e);var n=[];r.forEach(function(e){var r=e.arr[0];if(De[r]){var i=function(t){var e=t.arr[0],r=De[e],n=t.arr;return n.shift(),r.apply(this,n)}(e);"convolution"==i.type||"shader"==i.type?n.push(i):i.forEach(function(e){n=n.concat(t(e))})}});return n}(e),function(){"function"==typeof r&&r(i)})}});function Fe(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{frameTimer:"full"},i=new vt(t);i.loadImage(function(){i.toArray(e,function(t){"function"==typeof r&&r(t)},n)})}var He=j({},i,h,nt,Z,A,b,k,O,T,w,{palette:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"hex";return e.length>r&&(e=ht(e,r)),e.map(function(e){return t(e,n)})},ImageToCanvas:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{frameTimer:"full"};Fe(t,e,r,Object.assign({returnTo:"canvas"},n))},ImageToHistogram:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{width:200,height:100},n=new vt(t);n.loadImage(function(){ft.createHistogram(r.width||200,r.height||100,n.toHistogram(r),function(t){"function"==typeof e&&e(t.toDataURL("image/png"))},r)})},ImageToRGB:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments[2];if(r){if(r){var n;(n=new vt(t,e)).loadImage(function(){"function"==typeof r&&r(n.toRGB())})}}else(n=new vt(t)).loadImage(function(){"function"==typeof e&&e(n.toRGB())})},ImageToURL:Fe,GLToCanvas:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new vt(t);i.load(function(){je.filter(i.newImage,e,function(t){"function"==typeof r&&r(t)},n)})},histogram:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=new vt(t);n.loadImage(function(){"function"==typeof e&&e(n.toHistogram(r))})},histogramToPoints:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2,r=[],n=0;n<t.length;n++){var i=t[n];if(0!=n)if(n!=t.length-1){var o=t[n-1],a=t[n+1],l=(a[1],o[1],a[0],o[0],[o[0]+(a[0]-o[0])*e,o[1]+(a[1]-o[1])*e]),s=[[].concat(V(o)),[].concat(l)],u=Math.sqrt(Math.pow(i[0]-o[0],2)+Math.pow(i[1]-o[1],2))/Math.sqrt(Math.pow(a[0]-i[0],2)+Math.pow(a[1]-i[1],2)),c=s[0][0]+(s[1][0]-s[0][0])*u,h=s[0][1]+(s[1][1]-s[0][1])*u;s[0][0]+=i[0]-c,s[0][1]+=i[1]-h,s[1][0]+=i[0]-c,s[1][1]+=i[1]-h,r[n]=s}else r[n]=[];else r[n]=[]}return r}}),Ue=[{rgb:"#ff0000",start:0},{rgb:"#ffff00",start:.17},{rgb:"#00ff00",start:.33},{rgb:"#00ffff",start:.5},{rgb:"#0000ff",start:.67},{rgb:"#ff00ff",start:.83},{rgb:"#ff0000",start:1}];!function(){for(var t=0,e=Ue.length;t<e;t++){var r=Ue[t],n=He.parse(r.rgb);r.r=n.r,r.g=n.g,r.b=n.b}}();var Le={colors:Ue,checkHueColor:function(t){for(var e,r,n=0;n<Ue.length;n++)if(Ue[n].start>=t){e=Ue[n-1],r=Ue[n];break}return e&&r?He.interpolateRGB(e,r,(t-e.start)/(r.start-e.start)):Ue[0].rgb}},Ve=j({},Bt,jt),Ne={Color:He,HueColor:Le,ColorNames:P,ImageFilter:Ve,GL:je,Canvas:ft,ImageLoader:vt},Ge=(He.color,0),ze=[],Xe=function(){function t(e,r,n){if(D(this,t),"string"!=typeof e)this.el=e;else{var i=document.createElement(e);for(var o in this.uniqId=Ge++,r&&(i.className=r),n=n||{})i.setAttribute(o,n[o]);this.el=i}}return B(t,[{key:"attr",value:function(t,e){return 1==arguments.length?this.el.getAttribute(t):(this.el.setAttribute(t,e),this)}},{key:"closest",value:function(e){for(var r=this,n=!1;!(n=r.hasClass(e));){if(!r.el.parentNode)return null;r=new t(r.el.parentNode)}return n?r:null}},{key:"removeClass",value:function(t){return this.el.className=(" "+this.el.className+" ").replace(" "+t+" "," ").trim(),this}},{key:"hasClass",value:function(t){return!!this.el.className&&(" "+this.el.className+" ").indexOf(" "+t+" ")>-1}},{key:"addClass",value:function(t){return this.hasClass(t)||(this.el.className=this.el.className+" "+t),this}},{key:"toggleClass",value:function(t){this.hasClass(t)?this.removeClass(t):this.addClass(t)}},{key:"html",value:function(t){return"string"==typeof t?this.el.innerHTML=t:this.empty().append(t),this}},{key:"find",value:function(t){return this.el.querySelector(t)}},{key:"findAll",value:function(t){return this.el.querySelectorAll(t)}},{key:"empty",value:function(){return this.html("")}},{key:"append",value:function(t){return"string"==typeof t?this.el.appendChild(document.createTextNode(t)):this.el.appendChild(t.el||t),this}},{key:"appendTo",value:function(t){return(t.el?t.el:t).appendChild(this.el),this}},{key:"remove",value:function(){return this.el.parentNode&&this.el.parentNode.removeChild(this.el),this}},{key:"text",value:function(){return this.el.textContent}},{key:"css",value:function(t,e){var r=this;if(2==arguments.length)this.el.style[t]=e;else if(1==arguments.length){if("string"==typeof t)return getComputedStyle(this.el)[t];var n=t||{};Object.keys(n).forEach(function(t){r.el.style[t]=n[t]})}return this}},{key:"cssFloat",value:function(t){return parseFloat(this.css(t))}},{key:"cssInt",value:function(t){return parseInt(this.css(t))}},{key:"offset",value:function(){var e=this.el.getBoundingClientRect();return{top:e.top+t.getScrollTop(),left:e.left+t.getScrollLeft()}}},{key:"position",value:function(){return this.el.style.top?{top:parseFloat(this.css("top")),left:parseFloat(this.css("left"))}:this.el.getBoundingClientRect()}},{key:"size",value:function(){return[this.width(),this.height()]}},{key:"width",value:function(){return this.el.offsetWidth||this.el.getBoundingClientRect().width}},{key:"contentWidth",value:function(){return this.width()-this.cssFloat("padding-left")-this.cssFloat("padding-right")}},{key:"height",value:function(){return this.el.offsetHeight||this.el.getBoundingClientRect().height}},{key:"contentHeight",value:function(){return this.height()-this.cssFloat("padding-top")-this.cssFloat("padding-bottom")}},{key:"dataKey",value:function(t){return this.uniqId+"."+t}},{key:"data",value:function(t,e){if(2!=arguments.length){if(1==arguments.length)return ze[this.dataKey(t)];var r=Object.keys(ze),n=this.uniqId+".";return r.filter(function(t){return 0==t.indexOf(n)}).map(function(t){return ze[t]})}return ze[this.dataKey(t)]=e,this}},{key:"val",value:function(t){return 0==arguments.length?this.el.value:(1==arguments.length&&(this.el.value=t),this)}},{key:"int",value:function(){return parseInt(this.val(),10)}},{key:"float",value:function(){return parseFloat(this.val())}},{key:"show",value:function(){return this.css("display","block")}},{key:"hide",value:function(){return this.css("display","none")}},{key:"toggle",value:function(){return"none"==this.css("display")?this.show():this.hide()}},{key:"scrollTop",value:function(){return this.el===document.body?t.getScrollTop():this.el.scrollTop}},{key:"scrollLeft",value:function(){return this.el===document.body?t.getScrollLeft():this.el.scrollLeft}},{key:"on",value:function(t,e,r,n){return this.el.addEventListener(t,e,r,n),this}},{key:"off",value:function(t,e){return this.el.removeEventListener(t,e),this}},{key:"getElement",value:function(){return this.el}},{key:"createChild",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new t(e,r,n);return o.css(i),this.append(o),o}},{key:"firstChild",value:function(){return new t(this.el.firstElementChild)}},{key:"replace",value:function(t,e){return this.el.replaceChild(e,t),this}}],[{key:"getScrollTop",value:function(){return Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)}},{key:"getScrollLeft",value:function(){return Math.max(window.pageXOffset,document.documentElement.scrollLeft,document.body.scrollLeft)}}]),t}(),Ye=function(){function t(e){D(this,t),this.$store=e,this.initialize()}return B(t,[{key:"initialize",value:function(){var t=this;this.filterProps().forEach(function(e){t.$store.action(e,t)})}},{key:"filterProps",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return Object.getOwnPropertyNames(this.__proto__).filter(function(e){return e.startsWith(t)})}}]),t}(),We=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,Ye),B(e,[{key:"initialize",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initialize",this).call(this),this.$store.colorSetsList=[{name:"Material",colors:["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"]},{name:"Custom",edit:!0,colors:[]},{name:"Color Scale",scale:["red","yellow","black"],count:5}],this.$store.currentColorSets={}}},{key:"/list",value:function(t){return Array.isArray(t.userList)&&t.userList.length?t.userList:t.colorSetsList}},{key:"/setUserPalette",value:function(t,e){t.userList=e,t.dispatch("/resetUserPalette"),t.dispatch("/setCurrentColorSets")}},{key:"/resetUserPalette",value:function(t){t.userList&&t.userList.length&&(t.userList=t.userList.map(function(e,r){if("function"==typeof e.colors){var n=e.colors;e.colors=n(t),e._colors=n}return Object.assign({name:"color-"+r,colors:[]},e)}),t.emit("changeUserList"))}},{key:"/setCurrentColorSets",value:function(t,e){var r=t.dispatch("/list");t.currentColorSets=void 0===e?r[0]:"number"==typeof e?r[e]:r.filter(function(t){return t.name==e})[0],t.emit("changeCurrentColorSets")}},{key:"/getCurrentColorSets",value:function(t){return t.currentColorSets}},{key:"/addCurrentColor",value:function(t,e){Array.isArray(t.currentColorSets.colors)&&(t.currentColorSets.colors.push(e),t.emit("changeCurrentColorSets"))}},{key:"/setCurrentColorAll",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t.currentColorSets.colors=e,t.emit("changeCurrentColorSets")}},{key:"/removeCurrentColor",value:function(t,e){t.currentColorSets.colors[e]&&(t.currentColorSets.colors.splice(e,1),t.emit("changeCurrentColorSets"))}},{key:"/removeCurrentColorToTheRight",value:function(t,e){t.currentColorSets.colors[e]&&(t.currentColorSets.colors.splice(e,Number.MAX_VALUE),t.emit("changeCurrentColorSets"))}},{key:"/clearPalette",value:function(t){t.currentColorSets.colors&&(t.currentColorSets.colors=[],t.emit("changeCurrentColorSets"))}},{key:"/getCurrentColors",value:function(t){return t.dispatch("/getColors",t.currentColorSets)}},{key:"/getColors",value:function(t,e){return e.scale?He.scale(e.scale,e.count):e.colors||[]}},{key:"/getColorSetsList",value:function(t){return t.dispatch("/list").map(function(e){return{name:e.name,edit:e.edit,colors:t.dispatch("/getColors",e)}})}}]),e}(),qe={addEvent:function(t,e,r){t&&t.addEventListener(e,r)},removeEvent:function(t,e,r){t&&t.removeEventListener(e,r)},pos:function(t){return t.touches&&t.touches[0]?t.touches[0]:t},posXY:function(t){var e=this.pos(t);return{x:e.pageX,y:e.pageY}}},Ke=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};D(this,t),this.masterObj=e,this.settingObj=r}return B(t,[{key:"set",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.settingObj[t]=e||r}},{key:"init",value:function(t){if(!this.has(t)){var e=t.split("."),r=this.masterObj.refs[e[0]]||this.masterObj[e[0]]||this.masterObj,n=e.pop();if(r[n]){for(var i=arguments.length,o=Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];var l=r[n].apply(r,o);this.set(t,l)}}}},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return this.init(t,e),this.settingObj[t]||e}},{key:"has",value:function(t){return!!this.settingObj[t]}}]),t}(),Ze=/^(click|mouse(down|up|move|enter|leave)|touch(start|move|end)|key(down|up|press)|contextmenu|change|input)/gi,Je=/^load (.*)/gi,Qe=["Control","Shift","Alt","Meta"],tr=function(){function t(){D(this,t),this.state=new Ke(this),this.refs={},this.childComponents=this.components()}return B(t,[{key:"newChildComponents",value:function(){var t=this;Object.keys(this.childComponents).forEach(function(e){var r=t.childComponents[e];t[e]=new r(t)})}},{key:"render",value:function(){this.$el=this.parseTemplate(this.template()),this.refs.$el=this.$el,this.parseTarget(),this.load()}},{key:"components",value:function(){return{}}},{key:"parseTemplate",value:function(t){var e=this,r=new Xe("div").html(t).firstChild(),n=r.findAll("[ref]");return[].concat(V(n)).forEach(function(t){var r=t.getAttribute("ref");e.refs[r]=new Xe(t)}),r}},{key:"parseTarget",value:function(){var t=this,e=this.$el,r=e.findAll("[target]");[].concat(V(r)).forEach(function(r){var n=r.getAttribute("target"),i=r.getAttribute("ref")||n,o=new(0,t.childComponents[n])(t);t[i]=o,t.refs[i]=o.$el,o&&(o.render(),e.replace(r,o.$el.el))})}},{key:"load",value:function(){var t=this;this.filterProps(Je).forEach(function(e){var r=e.split("load ")[1];t.refs[r]&&t.refs[r].html(t.parseTemplate(t[e].call(t)))})}},{key:"template",value:function(){return"<div></div>"}},{key:"initialize",value:function(){}},{key:"initializeEvent",value:function(){var t=this;this.initializeEventMachin(),Object.keys(this.childComponents).forEach(function(e){t[e]&&t[e].initializeEvent()})}},{key:"destroy",value:function(){var t=this;this.destroyEventMachin(),Object.keys(this.childComponents).forEach(function(e){t[e]&&t[e].destroy()})}},{key:"destroyEventMachin",value:function(){this.removeEventAll()}},{key:"initializeEventMachin",value:function(){this.filterProps(Ze).forEach(this.parseEvent.bind(this))}},{key:"collectProps",value:function(){if(!this.collapsedProps){var t=this.__proto__,e=[];do{e.push.apply(e,V(Object.getOwnPropertyNames(t))),t=t.__proto__}while(t);this.collapsedProps=e}return this.collapsedProps}},{key:"filterProps",value:function(t){return this.collectProps().filter(function(e){return e.match(t)})}},{key:"parseEvent",value:function(t){var e=t.split(" ");this.bindingEvent(e,this[t].bind(this))}},{key:"getDefaultDomElement",value:function(t){var e=void 0;return(e=t?this.refs[t]||this[t]||window[t]:this.el||this.$el||this.$root)instanceof Xe?e.getElement():e}},{key:"getDefaultEventObject",value:function(t){var e=this,r=t.split("."),n=r.shift(),i=r.includes("Control"),o=r.includes("Shift"),a=r.includes("Alt"),l=r.includes("Meta"),s=(r=r.filter(function(t){return!1===Qe.includes(t)})).filter(function(t){return!!e[t]});return{eventName:n,isControl:i,isShift:o,isAlt:a,isMeta:l,codes:r=r.filter(function(t){return!1===s.includes(t)}).map(function(t){return t.toLowerCase()}),checkMethodList:s}}},{key:"bindingEvent",value:function(t,e){var r,n=(r=t,Array.isArray(r)?r:Array.from(r)),i=n[0],o=n[1],a=n.slice(2);o=this.getDefaultDomElement(o);var l=this.getDefaultEventObject(i);l.dom=o,l.delegate=a.join(" "),this.addEvent(l,e)}},{key:"matchPath",value:function(t,e){return t?t.matches(e)?t:this.matchPath(t.parentElement,e):null}},{key:"getBindings",value:function(){return this._bindings||this.initBindings(),this._bindings}},{key:"addBinding",value:function(t){this.getBindings().push(t)}},{key:"initBindings",value:function(){this._bindings=[]}},{key:"checkEventType",value:function(t,e){var r=this,n=!t.ctrlKey||e.isControl,i=!t.shiftKey||e.isShift,o=!t.altKey||e.isAlt,a=!t.metaKey||e.isMeta,l=!0;e.codes.length&&(l=e.codes.includes(t.code.toLowerCase())||e.codes.includes(t.key.toLowerCase()));var s=!0;return e.checkMethodList.length&&(s=e.checkMethodList.every(function(e){return r[e].call(r,t)})),n&&o&&i&&a&&l&&s}},{key:"makeCallback",value:function(t,e){var r=this;return t.delegate?function(n){if(r.checkEventType(n,t)){var i=r.matchPath(n.target||n.srcElement,t.delegate);if(i)return n.delegateTarget=i,n.$delegateTarget=new Xe(i),e(n)}}:function(n){if(r.checkEventType(n,t))return e(n)}}},{key:"addEvent",value:function(t,e){t.callback=this.makeCallback(t,e),this.addBinding(t),qe.addEvent(t.dom,t.eventName,t.callback)}},{key:"removeEventAll",value:function(){var t=this;this.getBindings().forEach(function(e){t.removeEvent(e)}),this.initBindings()}},{key:"removeEvent",value:function(t){var e=t.eventName,r=t.dom,n=t.callback;qe.removeEvent(r,e,n)}}]),t}(),er=/^@/,rr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.opt=t||{},t&&t.$store&&(r.$store=t.$store),r.initialize(),r.initializeStoreEvent(),r}return H(e,tr),B(e,[{key:"initializeStoreEvent",value:function(){var t=this;this.storeEvents={},this.filterProps(er).forEach(function(e){var r=e.split("@");r.shift();var n=r.join("@");t.storeEvents[n]=t[e].bind(t),t.$store.on(n,t.storeEvents[n])})}},{key:"destoryStoreEvent",value:function(){var t=this;Object.keys(this.storeEvents).forEach(function(e){t.$store.off(e,t.storeEvents[e])})}}]),e}();var nr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,Ye),B(e,[{key:"initialize",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initialize",this).call(this),this.$store.rgb={},this.$store.hsl={},this.$store.hsv={},this.$store.alpha=1,this.$store.format="hex"}},{key:"/changeFormat",value:function(t,e){t.format=e,t.emit("changeFormat")}},{key:"/initColor",value:function(t,e,r){t.dispatch("/changeColor",e,r,!0),t.emit("initColor")}},{key:"/changeColor",value:function(t,e,r,n){var i;"string"==typeof(e=e||"#FF0000")&&(e=He.parse(e)),e.source=e.source||r,t.alpha=void 0===(i=e.a)||null==i?t.alpha:e.a,t.format="hsv"!=e.type&&e.type||t.format,"hex"==t.format&&t.alpha<1&&(t.format="rgb"),"hsl"==e.type?(t.hsl=Object.assign(t.hsl,e),t.rgb=He.HSLtoRGB(t.hsl),t.hsv=He.HSLtoHSV(e)):"hex"==e.type?(t.rgb=Object.assign(t.rgb,e),t.hsl=He.RGBtoHSL(t.rgb),t.hsv=He.RGBtoHSV(e)):"rgb"==e.type?(t.rgb=Object.assign(t.rgb,e),t.hsl=He.RGBtoHSL(t.rgb),t.hsv=He.RGBtoHSV(e)):"hsv"==e.type&&(t.hsv=Object.assign(t.hsv,e),t.rgb=He.HSVtoRGB(t.hsv),t.hsl=He.HSVtoHSL(t.hsv)),n||t.emit("changeColor",e.source)}},{key:"/getHueColor",value:function(t){return Le.checkHueColor(t.hsv.h/360)}},{key:"/toString",value:function(t,e){var r=t[e=e||t.format]||t.rgb;return He.format(Object.assign({},r,{a:t.alpha}),e)}},{key:"/toColor",value:function(t,e){return"rgb"==(e=e||t.format)?t.dispatch("/toRGB"):"hsl"==e?t.dispatch("/toHSL"):"hex"==e?t.dispatch("/toHEX"):t.dispatch("/toString",e)}},{key:"/toRGB",value:function(t){return t.dispatch("/toString","rgb")}},{key:"/toHSL",value:function(t){return t.dispatch("/toString","hsl")}},{key:"/toHEX",value:function(t){return t.dispatch("/toString","hex").toUpperCase()}}]),e}(),ir=function(){function t(e){D(this,t),this.callbacks=[],this.actions=[],this.modules=e.modules||[],this.initialize()}return B(t,[{key:"initialize",value:function(){this.initializeModule()}},{key:"initializeModule",value:function(){var t=this;this.modules.forEach(function(e){new e(t)})}},{key:"action",value:function(t,e){this.actions[t]={context:e,callback:e[t]}}},{key:"dispatch",value:function(t){var e=[].concat(Array.prototype.slice.call(arguments)),r=(t=e.shift(),this.actions[t]);if(r)return r.callback.apply(r.context,[this].concat(V(e)))}},{key:"module",value:function(t){}},{key:"on",value:function(t,e){this.callbacks.push({event:t,callback:e})}},{key:"off",value:function(t,e){0==arguments.length?this.callbacks=[]:1==arguments.length?this.callbacks=this.callbacks.filter(function(e){return e.event!=t}):2==arguments.length&&(this.callbacks=this.callbacks.filter(function(r){return r.event!=t&&r.callback!=e}))}},{key:"emit",value:function(){var t=[].concat(Array.prototype.slice.call(arguments)),e=t.shift();this.callbacks.filter(function(t){return t.event==e}).forEach(function(e){e&&"function"==typeof e.callback&&e.callback.apply(e,V(t))})}}]),t}(),or=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.isColorPickerShow=!1,r.isShortCut=!1,r.hideDelay=+(void 0===r.opt.hideDeplay?2e3:r.opt.hideDelay),r.timerCloseColorPicker,r.autoHide=r.opt.autoHide||!0,r.outputFormat=r.opt.outputFormat,r.$checkColorPickerClass=r.checkColorPickerClass.bind(r),r}return H(e,rr),B(e,[{key:"initialize",value:function(){var t=this;this.$body=null,this.$root=null,this.$store=new ir({modules:[nr,We]}),this.callbackChange=function(){t.callbackColorValue()},this.colorpickerShowCallback=function(){},this.colorpickerHideCallback=function(){},this.$body=new Xe(this.getContainer()),this.$root=new Xe("div","codemirror-colorpicker"),"inline"==this.opt.position&&this.$body.append(this.$root),this.opt.type&&this.$root.addClass(this.opt.type),this.opt.hideInformation&&this.$root.addClass("hide-information"),this.opt.hideColorsets&&this.$root.addClass("hide-colorsets"),this.$arrow=new Xe("div","arrow"),this.$root.append(this.$arrow),this.$store.dispatch("/setUserPalette",this.opt.colorSets),this.render(),this.$root.append(this.$el),this.initColorWithoutChangeEvent(this.opt.color),this.initializeEvent()}},{key:"initColorWithoutChangeEvent",value:function(t){this.$store.dispatch("/initColor",t)}},{key:"show",value:function(t,e,r,n){this.colorpickerShowCallback=r,this.colorpickerHideCallback=n,this.$root.css(this.getInitalizePosition()).show(),this.isColorPickerShow=!0,this.isShortCut=t.isShortCut||!1,this.outputFormat=t.outputFormat,this.hideDelay=+(void 0===t.hideDelay?2e3:t.hideDelay),this.hideDelay>0&&this.setHideDelay(this.hideDelay),this.$root.appendTo(this.$body),this.definePosition(t),this.initColorWithoutChangeEvent(e)}},{key:"initColor",value:function(t,e){this.$store.dispatch("/changeColor",t,e)}},{key:"hide",value:function(){this.isColorPickerShow&&(this.$root.hide(),this.$root.remove(),this.isColorPickerShow=!1,this.callbackHideColorValue())}},{key:"setColorsInPalette",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.$store.dispatch("/setCurrentColorAll",t)}},{key:"setUserPalette",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.$store.dispatch("/setUserPalette",t)}},{key:"getOption",value:function(t){return this.opt[t]}},{key:"setOption",value:function(t,e){this.opt[t]=e}},{key:"isType",value:function(t){return this.getOption("type")==t}},{key:"isPaletteType",value:function(){return this.isType("palette")}},{key:"isSketchType",value:function(){return this.isType("sketch")}},{key:"getContainer",value:function(){return this.opt.container||document.body}},{key:"getColor",value:function(t){return this.$store.dispatch("/toColor",t)}},{key:"definePositionForArrow",value:function(t,e,r){}},{key:"definePosition",value:function(t){var e=this.$root.width(),r=this.$root.height(),n=t.left-this.$body.scrollLeft();e+n>window.innerWidth&&(n-=e+n-window.innerWidth),n<0&&(n=0);var i=t.top-this.$body.scrollTop();r+i>window.innerHeight&&(i-=r+i-window.innerHeight),i<0&&(i=0),this.$root.css({left:n+"px",top:i+"px"})}},{key:"getInitalizePosition",value:function(){return"inline"==this.opt.position?{position:"relative",left:"auto",top:"auto",display:"inline-block"}:{position:"fixed",left:"-10000px",top:"-10000px"}}},{key:"isAbsolute",value:function(){return"inline"!==this.opt.position}},{key:"mouseup.isAbsolute document",value:function(t){this.__isMouseDown=!1,this.checkInHtml(t.target)||(0==this.checkColorPickerClass(t.target)?this.hide():this.__isMouseIn||(clearTimeout(this.timerCloseColorPicker),this.timerCloseColorPicker=setTimeout(this.hide.bind(this),this.delayTime||this.hideDelay)))}},{key:"mouseover.isAbsolute $root",value:function(t){clearTimeout(this.timerCloseColorPicker)}},{key:"mousemove.isAbsolute $root",value:function(t){clearTimeout(this.timerCloseColorPicker)}},{key:"mouseenter.isAbsolute $root",value:function(t){clearTimeout(this.timerCloseColorPicker),this.__isMouseIn=!0}},{key:"mouseleave.isAbsolute $root",value:function(t){this.__isMouseIn=!1,this.__isMouseDown||(clearTimeout(this.timerCloseColorPicker),this.timerCloseColorPicker=setTimeout(this.hide.bind(this),this.delayTime||this.hideDelay))}},{key:"mousedown.isAbsolute $root",value:function(t){this.__isMouseDown=!0}},{key:"setHideDelay",value:function(t){this.delayTime=t||0}},{key:"runHideDelay",value:function(){this.isColorPickerShow&&this.setHideDelay()}},{key:"callbackColorValue",value:function(t){t=t||this.getCurrentColor(),"function"==typeof this.opt.onChange&&this.opt.onChange.call(this,t),"function"==typeof this.colorpickerShowCallback&&this.colorpickerShowCallback(t)}},{key:"callbackHideColorValue",value:function(t){t=t||this.getCurrentColor(),"function"==typeof this.opt.onHide&&this.opt.onHide.call(this,t),"function"==typeof this.colorpickerHideCallback&&this.colorpickerHideCallback(t)}},{key:"getCurrentColor",value:function(){return this.$store.dispatch("/toColor",this.outputFormat)}},{key:"checkColorPickerClass",value:function(t){var e=new Xe(t).closest("codemirror-colorview"),r=new Xe(t).closest("codemirror-colorpicker"),n=new Xe(t).closest("CodeMirror");t.nodeName;return!!(r||e||n)}},{key:"checkInHtml",value:function(t){return"HTML"==t.nodeName}},{key:"initializeStoreEvent",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initializeStoreEvent",this).call(this),this.$store.on("changeColor",this.callbackChange),this.$store.on("changeFormat",this.callbackChange)}},{key:"destroy",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this),this.$store.off("changeColor",this.callbackChange),this.$store.off("changeFormat",this.callbackChange),this.callbackChange=void 0,this.colorpickerShowCallback=void 0,this.colorpickerHideCallback=void 0}}]),e}(),ar=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.source="base-box",r}return H(e,rr),B(e,[{key:"refresh",value:function(){}},{key:"refreshColorUI",value:function(t){}},{key:"changeColor",value:function(t){this.$store.dispatch("/changeColor",Object.assign({source:this.source},t||{}))}},{key:"mouseup document",value:function(t){this.onDragEnd(t)}},{key:"mousemove document",value:function(t){this.onDragMove(t)}},{key:"mousedown $bar",value:function(t){t.preventDefault(),this.isDown=!0}},{key:"mousedown $container",value:function(t){this.isDown=!0,this.onDragStart(t)}},{key:"touchend document",value:function(t){this.onDragEnd(t)}},{key:"touchmove document",value:function(t){this.onDragMove(t)}},{key:"touchstart $bar",value:function(t){t.preventDefault(),this.isDown=!0}},{key:"touchstart $container",value:function(t){this.onDragStart(t)}},{key:"onDragStart",value:function(t){this.isDown=!0,this.refreshColorUI(t)}},{key:"onDragMove",value:function(t){this.isDown&&this.refreshColorUI(t)}},{key:"onDragEnd",value:function(t){this.isDown=!1}},{key:"@changeColor",value:function(t){this.source!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),lr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.minValue=0,r.maxValue=1,r.source="base-slider",r}return H(e,ar),B(e,[{key:"getMinMaxPosition",value:function(){var t=this.getMinPosition(),e=this.getMaxDist();return{min:t,max:t+e,width:e}}},{key:"getCurrent",value:function(t){return min+this.getMaxDist()*t}},{key:"getMinPosition",value:function(){return this.refs.$container.offset().left}},{key:"getMaxDist",value:function(){return this.state.get("$container.width")}},{key:"getDist",value:function(t){var e=this.getMinMaxPosition(),r=e.min,n=e.max;return t<r?0:t>n?100:(t-r)/(n-r)*100}},{key:"getCaculatedDist",value:function(t){var e=t?this.getMousePosition(t):this.getCurrent(this.getDefaultValue()/this.maxValue);return this.getDist(e)}},{key:"getDefaultValue",value:function(){return 0}},{key:"setMousePosition",value:function(t){this.refs.$bar.css({left:t+"px"})}},{key:"getMousePosition",value:function(t){return qe.pos(t).pageX}},{key:"refresh",value:function(){this.setColorUI()}},{key:"setColorUI",value:function(t){(t=t||this.getDefaultValue())<=this.minValue?this.refs.$bar.addClass("first").removeClass("last"):t>=this.maxValue?this.refs.$bar.addClass("last").removeClass("first"):this.refs.$bar.removeClass("last").removeClass("first"),this.setMousePosition(this.getMaxDist()*((t||0)/this.maxValue))}}]),e}(),sr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.minValue=0,r.maxValue=1,r.source="value-control",r}return H(e,lr),B(e,[{key:"template",value:function(){return'\n            <div class="value">\n                <div ref="$container" class="value-container">\n                    <div ref="$bar" class="drag-bar"></div>\n                </div>\n            </div>\n        '}},{key:"setBackgroundColor",value:function(){this.refs.$container.css("background-color",this.$store.dispatch("/toRGB"))}},{key:"refresh",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"refresh",this).call(this),this.setBackgroundColor()}},{key:"getDefaultValue",value:function(){return this.$store.hsv.v}},{key:"refreshColorUI",value:function(t){var e=this.getCaculatedDist(t);this.setColorUI(e/100*this.maxValue),this.changeColor({type:"hsv",v:e/100*this.maxValue})}}]),e}(),ur=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.minValue=0,r.maxValue=1,r.source="opacity-control",r}return H(e,lr),B(e,[{key:"template",value:function(){return'\n        <div class="opacity">\n            <div ref="$container" class="opacity-container">\n                <div ref="$colorbar" class="color-bar"></div>\n                <div ref="$bar" class="drag-bar2"></div>\n            </div>\n        </div>\n        '}},{key:"refresh",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"refresh",this).call(this),this.setOpacityColorBar()}},{key:"setOpacityColorBar",value:function(){var t=Object.assign({},this.$store.rgb);t.a=0;var e=He.format(t,"rgb");t.a=1;var r=He.format(t,"rgb");this.setOpacityColorBarBackground(e,r)}},{key:"setOpacityColorBarBackground",value:function(t,e){this.refs.$colorbar.css("background","linear-gradient(to right, "+t+", "+e+")")}},{key:"getDefaultValue",value:function(){return this.$store.alpha}},{key:"refreshColorUI",value:function(t){var e=this.getCaculatedDist(t);this.setColorUI(e/100*this.maxValue),this.changeColor({a:Math.floor(e)/100*this.maxValue})}}]),e}(),cr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"components",value:function(){return{Value:sr,Opacity:ur}}},{key:"template",value:function(){return'\n        <div class="control">\n            <div target="Value" ></div>\n            <div target="Opacity" ></div>\n            <div ref="$controlPattern" class="empty"></div>\n            <div ref="$controlColor" class="color"></div>\n        </div>\n        '}},{key:"setBackgroundColor",value:function(){this.refs.$controlColor.css("background-color",this.$store.dispatch("/toRGB"))}},{key:"refresh",value:function(){this.setColorUI(),this.setBackgroundColor()}},{key:"setColorUI",value:function(){this.Value.setColorUI(),this.Opacity.setColorUI()}},{key:"@changeColor",value:function(t){"macos-control"!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),hr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.width=214,r.height=214,r.thinkness=0,r.half_thinkness=0,r.source="colorwheel",r}return H(e,rr),B(e,[{key:"template",value:function(){return'\n        <div class="wheel">\n            <canvas class="wheel-canvas" ref="$colorwheel" ></canvas>\n            <div class="wheel-canvas" ref="$valuewheel" ></div>\n            <div class="drag-pointer" ref="$drag_pointer"></div>\n        </div>\n        '}},{key:"refresh",value:function(t){this.setColorUI(t)}},{key:"setColorUI",value:function(t){this.renderCanvas(),this.renderValue(),this.setHueColor(null,t)}},{key:"renderValue",value:function(){var t=1-this.$store.hsv.v;this.refs.$valuewheel.css({"background-color":"rgba(0, 0, 0, "+t+")"})}},{key:"renderWheel",value:function(t,e){this.width&&!t&&(t=this.width),this.height&&!e&&(e=this.height);var r=new Xe("canvas"),n=r.el.getContext("2d");r.el.width=t,r.el.height=e,r.css({width:t+"px",height:e+"px"});for(var i=n.getImageData(0,0,t,e),o=i.data,a=Math.floor(t/2),l=Math.floor(e/2),s=t>e?l:a,u=a,h=l,f=0;f<e;f++)for(var v=0;v<t;v++){var g=v-u+1,d=f-h+1,p=g*g+d*d,m=c(g,d),y=He.HSVtoRGB(m,Math.min(Math.sqrt(p)/s,1),1),b=4*(f*t+v);o[b]=y.r,o[b+1]=y.g,o[b+2]=y.b,o[b+3]=255}return n.putImageData(i,0,0),this.thinkness>0&&(n.globalCompositeOperation="destination-out",n.fillStyle="black",n.beginPath(),n.arc(u,h,s-this.thinkness,0,2*Math.PI),n.closePath(),n.fill()),r}},{key:"renderCanvas",value:function(){if(!this.$store.createdWheelCanvas){var t=this.refs.$colorwheel,e=t.el.getContext("2d"),r=t.size(),n=L(r,2),i=n[0],o=n[1];this.width&&!i&&(i=this.width),this.height&&!o&&(o=this.height),t.el.width=i,t.el.height=o,t.css({width:i+"px",height:o+"px"});var a=this.renderWheel(i,o);e.drawImage(a.el,0,0),this.$store.createdWheelCanvas=!0}}},{key:"getDefaultValue",value:function(){return this.$store.hsv.h}},{key:"getDefaultSaturation",value:function(){return this.$store.hsv.s}},{key:"getCurrentXY",value:function(t,e,r,n,i){return t?qe.posXY(t):function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{x:s(t,e,r),y:u(t,e,n)}}(e,r,n,i)}},{key:"getRectangle",value:function(){var t=this.state.get("$el.width"),e=this.state.get("$el.height"),r=this.state.get("$colorwheel.width")/2,n=this.refs.$el.offset().left,i=n+t/2,o=this.refs.$el.offset().top;return{minX:n,minY:o,width:t,height:e,radius:r,centerX:i,centerY:o+e/2}}},{key:"setHueColor",value:function(t,e){if(this.state.get("$el.width")){var r=this.getRectangle(),n=r.minX,i=r.minY,o=r.radius,a=r.centerX,l=r.centerY,s=this.getCurrentXY(t,this.getDefaultValue(),this.getDefaultSaturation()*o,a,l),u=(d=s.x)-a,h=(p=s.y)-l,f=u*u+h*h,v=c(u,h);if(f>o*o)var g=this.getCurrentXY(null,v,o,a,l),d=g.x,p=g.y;var m=Math.min(Math.sqrt(f)/o,1);this.refs.$drag_pointer.css({left:d-n+"px",top:p-i+"px"}),e||this.changeColor({type:"hsv",h:v,s:m})}}},{key:"changeColor",value:function(t){this.$store.dispatch("/changeColor",Object.assign({source:this.source},t||{}))}},{key:"@changeColor",value:function(t){this.source!=t&&this.refresh(!0)}},{key:"@initColor",value:function(){this.refresh(!0)}},{key:"mouseup document",value:function(t){this.isDown=!1}},{key:"mousemove document",value:function(t){this.isDown&&this.setHueColor(t)}},{key:"mousedown $drag_pointer",value:function(t){t.preventDefault(),this.isDown=!0}},{key:"mousedown $el",value:function(t){this.isDown=!0,this.setHueColor(t)}},{key:"touchend document",value:function(t){this.isDown=!1}},{key:"touchmove document",value:function(t){this.isDown&&this.setHueColor(t)}},{key:"touchstart $drag_pointer",value:function(t){t.preventDefault(),this.isDown=!0}},{key:"touchstart $el",value:function(t){t.preventDefault(),this.isDown=!0,this.setHueColor(t)}}]),e}(),fr="chromedevtool-information",vr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"template",value:function(){return'\n        <div class="information hex">\n            <div ref="$informationChange" class="information-change">\n                <button ref="$formatChangeButton" type="button" class="format-change-button arrow-button"></button>\n            </div>\n            <div class="information-item hex">\n                <div class="input-field hex">\n                    <input ref="$hexCode" class="input" type="text" />\n                    <div class="title">HEX</div>\n                </div>\n            </div>\n            <div class="information-item rgb">\n                <div class="input-field rgb-r">\n                    <input ref="$rgb_r" class="input" type="number" step="1" min="0" max="255" />\n                    <div class="title">R</div>\n                </div>\n                <div class="input-field rgb-g">\n                    <input ref="$rgb_g" class="input" type="number" step="1" min="0" max="255" />\n                    <div class="title">G</div>\n                </div>\n                <div class="input-field rgb-b">\n                    <input ref="$rgb_b" class="input" type="number" step="1" min="0" max="255" />\n                    <div class="title">B</div>\n                </div>          \n                <div class="input-field rgb-a">\n                    <input ref="$rgb_a" class="input" type="number" step="0.01" min="0" max="1" />\n                    <div class="title">A</div>\n                </div>                                                            \n            </div>\n            <div class="information-item hsl">\n                <div class="input-field hsl-h">\n                    <input ref="$hsl_h" class="input" type="number" step="1" min="0" max="360" />\n                    <div class="title">H</div>\n                </div>\n                <div class="input-field hsl-s">\n                    <input ref="$hsl_s" class="input" type="number" step="1" min="0" max="100" />\n                    <div class="postfix">%</div>\n                    <div class="title">S</div>\n                </div>\n                <div class="input-field hsl-l">\n                    <input ref="$hsl_l" class="input" type="number" step="1" min="0" max="100" />\n                    <div class="postfix">%</div>                        \n                    <div class="title">L</div>\n                </div>\n                <div class="input-field hsl-a">\n                    <input ref="$hsl_a" class="input" type="number" step="0.01" min="0" max="1" />\n                    <div class="title">A</div>\n                </div>\n            </div>\n        </div>\n        '}},{key:"setCurrentFormat",value:function(t){this.format=t,this.initFormat()}},{key:"initFormat",value:function(){var t=this.format||"hex";this.$el.removeClass("hex"),this.$el.removeClass("rgb"),this.$el.removeClass("hsl"),this.$el.addClass(t)}},{key:"nextFormat",value:function(){var t=this.format||"hex",e="hex";"hex"==t?e="rgb":"rgb"==t?e="hsl":"hsl"==t&&(e=1==this.$store.alpha?"hex":"rgb"),this.$el.removeClass(t),this.$el.addClass(e),this.format=e,this.$store.dispatch("/changeFormat",this.format)}},{key:"getFormat",value:function(){return this.format||"hex"}},{key:"checkNumberKey",value:function(t){return qe.checkNumberKey(t)}},{key:"checkNotNumberKey",value:function(t){return!qe.checkNumberKey(t)}},{key:"changeRgbColor",value:function(){this.$store.dispatch("/changeColor",{type:"rgb",r:this.refs.$rgb_r.int(),g:this.refs.$rgb_g.int(),b:this.refs.$rgb_b.int(),a:this.refs.$rgb_a.float(),source:fr})}},{key:"changeHslColor",value:function(){this.$store.dispatch("/changeColor",{type:"hsl",h:this.refs.$hsl_h.int(),s:this.refs.$hsl_s.int(),l:this.refs.$hsl_l.int(),a:this.refs.$hsl_a.float(),source:fr})}},{key:"@changeColor",value:function(t){fr!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}},{key:"input $rgb_r",value:function(t){this.changeRgbColor()}},{key:"input $rgb_g",value:function(t){this.changeRgbColor()}},{key:"input $rgb_b",value:function(t){this.changeRgbColor()}},{key:"input $rgb_a",value:function(t){this.changeRgbColor()}},{key:"input $hsl_h",value:function(t){this.changeHslColor()}},{key:"input $hsl_s",value:function(t){this.changeHslColor()}},{key:"input $hsl_l",value:function(t){this.changeHslColor()}},{key:"input $hsl_a",value:function(t){this.changeHslColor()}},{key:"keydown $hexCode",value:function(t){if(t.which<65||t.which>70)return this.checkNumberKey(t)}},{key:"keyup $hexCode",value:function(t){var e=this.refs.$hexCode.val();"#"==e.charAt(0)&&7==e.length&&this.$store.dispatch("/changeColor",e,fr)}},{key:"click $formatChangeButton",value:function(t){this.nextFormat()}},{key:"setRGBInput",value:function(){this.refs.$rgb_r.val(this.$store.rgb.r),this.refs.$rgb_g.val(this.$store.rgb.g),this.refs.$rgb_b.val(this.$store.rgb.b),this.refs.$rgb_a.val(this.$store.alpha)}},{key:"setHSLInput",value:function(){this.refs.$hsl_h.val(this.$store.hsl.h),this.refs.$hsl_s.val(this.$store.hsl.s),this.refs.$hsl_l.val(this.$store.hsl.l),this.refs.$hsl_a.val(this.$store.alpha)}},{key:"setHexInput",value:function(){this.refs.$hexCode.val(this.$store.dispatch("/toHEX"))}},{key:"refresh",value:function(){this.setCurrentFormat(this.$store.format),this.setRGBInput(),this.setHSLInput(),this.setHexInput()}}]),e}(),gr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"template",value:function(){return'\n            <div class="color-chooser">\n                <div class="color-chooser-container">\n                    <div class="colorsets-item colorsets-item-header">\n                        <h1 class="title">Color Palettes</h1>\n                        <span ref="$toggleButton" class="items">&times;</span>\n                    </div>\n                    <div ref="$colorsetsList" class="colorsets-list"></div>\n                </div>\n            </div>\n        '}},{key:"refresh",value:function(){this.load()}},{key:"@changeCurrentColorSets",value:function(){this.refresh()}},{key:"@toggleColorChooser",value:function(){this.toggle()}},{key:"load $colorsetsList",value:function(){return"\n            <div>\n                "+this.$store.dispatch("/getColorSetsList").map(function(t,e){return'\n                        <div class="colorsets-item" data-colorsets-index="'+e+'" >\n                            <h1 class="title">'+t.name+'</h1>\n                            <div class="items">\n                                <div>\n                                    '+t.colors.filter(function(t,e){return e<5}).map(function(t){return'<div class="color-item" title="'+(t=t||"rgba(255, 255, 255, 1)")+'">\n                                                <div class="color-view" style="background-color: '+t+'"></div>\n                                            </div>'}).join("")+"\n                                </div>\n                            </div>\n                        </div>"}).join("")+"\n            </div>\n        "}},{key:"show",value:function(){this.$el.addClass("open")}},{key:"hide",value:function(){this.$el.removeClass("open")}},{key:"toggle",value:function(){this.$el.toggleClass("open")}},{key:"click $toggleButton",value:function(t){this.toggle()}},{key:"click $colorsetsList .colorsets-item",value:function(t){var e=t.$delegateTarget;if(e){var r=parseInt(e.attr("data-colorsets-index"));this.$store.dispatch("/setCurrentColorSets",r),this.hide()}}},{key:"destroy",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this),this.hide()}}]),e}(),dr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"template",value:function(){return'\n            <div class="colorsets">\n                <div class="menu" title="Open Color Palettes">\n                    <button ref="$colorSetsChooseButton" type="button" class="color-sets-choose-btn arrow-button"></button>\n                </div>\n                <div ref="$colorSetsColorList" class="color-list"></div>\n            </div>\n        '}},{key:"load $colorSetsColorList",value:function(){var t=this.$store.dispatch("/getCurrentColorSets");return'\n            <div class="current-color-sets">\n            '+this.$store.dispatch("/getCurrentColors").map(function(t,e){return'<div class="color-item" title="'+t+'" data-index="'+e+'" data-color="'+t+'">\n                    <div class="empty"></div>\n                    <div class="color-view" style="background-color: '+t+'"></div>\n                </div>'}).join("")+"   \n            "+(t.edit?'<div class="add-color-item">+</div>':"")+"         \n            </div>\n        "}},{key:"refresh",value:function(){this.load()}},{key:"addColor",value:function(t){this.$store.dispatch("/addCurrentColor",t)}},{key:"@changeCurrentColorSets",value:function(){this.refresh()}},{key:"click $colorSetsChooseButton",value:function(t){this.$store.emit("toggleColorChooser")}},{key:"contextmenu $colorSetsColorList",value:function(t){if(t.preventDefault(),this.$store.dispatch("/getCurrentColorSets").edit){var e=new Xe(t.target).closest("color-item");if(e){var r=parseInt(e.attr("data-index"));this.$store.emit("showContextMenu",t,r)}else this.$store.emit("showContextMenu",t)}}},{key:"click $colorSetsColorList .add-color-item",value:function(t){this.addColor(this.$store.dispatch("/toColor"))}},{key:"click $colorSetsColorList .color-item",value:function(t){this.$store.dispatch("/changeColor",t.$delegateTarget.attr("data-color"))}}]),e}(),pr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"template",value:function(){return'\n            <ul class="colorsets-contextmenu">\n                <li class="menu-item small-hide" data-type="remove-color">Remove color</li>\n                <li class="menu-item small-hide" data-type="remove-all-to-the-right">Remove all to the right</li>\n                <li class="menu-item" data-type="clear-palette">Clear palette</li>\n            </ul>\n        '}},{key:"show",value:function(t,e){var r=qe.pos(t);this.$el.css({top:r.clientY-10+"px",left:r.clientX+"px"}),this.$el.addClass("show"),this.selectedColorIndex=e,void 0===this.selectedColorIndex?this.$el.addClass("small"):this.$el.removeClass("small")}},{key:"hide",value:function(){this.$el.removeClass("show")}},{key:"runCommand",value:function(t){switch(t){case"remove-color":this.$store.dispatch("/removeCurrentColor",this.selectedColorIndex);break;case"remove-all-to-the-right":this.$store.dispatch("/removeCurrentColorToTheRight",this.selectedColorIndex);break;case"clear-palette":this.$store.dispatch("/clearPalette")}}},{key:"@showContextMenu",value:function(t,e){this.show(t,e)}},{key:"click $el .menu-item",value:function(t){t.preventDefault(),this.runCommand(t.$delegateTarget.attr("data-type")),this.hide()}}]),e}(),mr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,or),B(e,[{key:"template",value:function(){return'\n            <div class=\'colorpicker-body\'>\n                <div target="colorwheel"></div>\n                <div target="control"></div>\n                <div target="information"></div>\n                <div target="currentColorSets"></div>\n                <div target="colorSetsChooser"></div>\n                <div target="contextMenu"></div>                \n            </div>\n        '}},{key:"components",value:function(){return{colorwheel:hr,control:cr,information:vr,currentColorSets:dr,colorSetsChooser:gr,contextMenu:pr}}}]),e}(),yr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.minValue=0,r.maxValue=360,r.source="hue-control",r}return H(e,lr),B(e,[{key:"template",value:function(){return'\n            <div class="hue">\n                <div ref="$container" class="hue-container">\n                    <div ref="$bar" class="drag-bar"></div>\n                </div>\n            </div>\n        '}},{key:"getDefaultValue",value:function(){return this.$store.hsv.h}},{key:"refreshColorUI",value:function(t){var e=this.getCaculatedDist(t);this.setColorUI(e/100*this.maxValue),this.changeColor({h:e/100*this.maxValue,type:"hsv"})}}]),e}(),br=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"components",value:function(){return{Hue:yr,Opacity:ur}}},{key:"template",value:function(){return'\n        <div class="control">\n            <div target="Hue" ></div>\n            <div target="Opacity" ></div>\n            <div ref="$controlPattern" class="empty"></div>\n            <div ref="$controlColor" class="color"></div>\n        </div>\n        '}},{key:"setBackgroundColor",value:function(){this.refs.$controlColor.css("background-color",this.$store.dispatch("/toRGB"))}},{key:"refresh",value:function(){this.setColorUI(),this.setBackgroundColor()}},{key:"setColorUI",value:function(){this.Hue.setColorUI(),this.Opacity.setColorUI()}},{key:"@changeColor",value:function(t){"chromedevtool-control"!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),kr="chromedevtool-palette",Cr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"template",value:function(){return'\n        <div class="color">\n            <div ref="$saturation" class="saturation">\n                <div ref="$value" class="value">\n                    <div ref="$drag_pointer" class="drag-pointer"></div>\n                </div>\n            </div>        \n        </div>        \n        '}},{key:"setBackgroundColor",value:function(t){this.$el.css("background-color",t)}},{key:"refresh",value:function(){this.setColorUI()}},{key:"caculateSV",value:function(){var t=this.drag_pointer_pos||{x:0,y:0},e=this.state.get("$el.width"),r=this.state.get("$el.height"),n=t.x/e,i=(r-t.y)/r;this.$store.dispatch("/changeColor",{type:"hsv",s:n,v:i,source:kr})}},{key:"setColorUI",value:function(){var t=this.state.get("$el.width")*this.$store.hsv.s,e=this.state.get("$el.height")*(1-this.$store.hsv.v);this.refs.$drag_pointer.css({left:t+"px",top:e+"px"}),this.drag_pointer_pos={x:t,y:e},this.setBackgroundColor(this.$store.dispatch("/getHueColor"))}},{key:"setMainColor",value:function(t){var e=this.$el.offset(),r=this.state.get("$el.contentWidth"),n=this.state.get("$el.contentHeight"),i=qe.pos(t).pageX-e.left,o=qe.pos(t).pageY-e.top;i<0?i=0:i>r&&(i=r),o<0?o=0:o>n&&(o=n),this.refs.$drag_pointer.css({left:i+"px",top:o+"px"}),this.drag_pointer_pos={x:i,y:o},this.caculateSV()}},{key:"@changeColor",value:function(t){kr!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}},{key:"mouseup document",value:function(t){this.isDown=!1}},{key:"mousemove document",value:function(t){this.isDown&&this.setMainColor(t)}},{key:"mousedown",value:function(t){this.isDown=!0,this.setMainColor(t)}},{key:"mouseup",value:function(t){this.isDown=!1}},{key:"touchend document",value:function(t){this.isDown=!1}},{key:"touchmove document",value:function(t){this.isDown&&this.setMainColor(t)}},{key:"touchstart",value:function(t){t.preventDefault(),this.isDown=!0,this.setMainColor(t)}},{key:"touchend",value:function(t){this.isDown=!1}}]),e}(),xr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,or),B(e,[{key:"template",value:function(){return'\n            <div class=\'colorpicker-body\'>\n                <div target="palette"></div> \n                <div target="control"></div>\n                <div target="information"></div>\n                <div target="currentColorSets"></div>\n                <div target="colorSetsChooser"></div>\n                <div target="contextMenu"></div>\n            </div>\n        '}},{key:"components",value:function(){return{palette:Cr,control:br,information:vr,currentColorSets:dr,colorSetsChooser:gr,contextMenu:pr}}}]),e}(),_r=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"components",value:function(){return{Hue:yr,Opacity:ur}}},{key:"template",value:function(){return'\n        <div class="control">\n            <div target="Hue" ></div>\n            <div target="Opacity" ></div>\n        </div>\n        '}},{key:"refresh",value:function(){this.setColorUI()}},{key:"setColorUI",value:function(){this.Hue.setColorUI(),this.Opacity.setColorUI()}},{key:"@changeColor",value:function(t){"mini-control"!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),wr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,or),B(e,[{key:"template",value:function(){return'\n            <div class=\'colorpicker-body\'>\n                <div target="palette"></div>\n                <div target="control"></div>\n            </div>\n        '}},{key:"components",value:function(){return{palette:Cr,control:_r}}}]),e}(),Mr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.source="vertical-slider",r}return H(e,lr),B(e,[{key:"getMaxDist",value:function(){return this.state.get("$container.height")}},{key:"setMousePosition",value:function(t){this.refs.$bar.css({top:t+"px"})}},{key:"getMousePosition",value:function(t){return qe.pos(t).pageY}},{key:"getMinPosition",value:function(){return this.refs.$container.offset().top}},{key:"getCaculatedDist",value:function(t){var e=t?this.getMousePosition(t):this.getCurrent(this.getDefaultValue()/this.maxValue);return 100-this.getDist(e)}},{key:"setColorUI",value:function(t){(t=t||this.getDefaultValue())<=this.minValue?this.refs.$bar.addClass("first").removeClass("last"):t>=this.maxValue?this.refs.$bar.addClass("last").removeClass("first"):this.refs.$bar.removeClass("last").removeClass("first");var e=1-(t||0)/this.maxValue;this.setMousePosition(this.getMaxDist()*e)}}]),e}(),Or=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.minValue=0,r.maxValue=360,r.source="vertical-hue-control",r}return H(e,Mr),B(e,[{key:"template",value:function(){return'\n            <div class="hue">\n                <div ref="$container" class="hue-container">\n                    <div ref="$bar" class="drag-bar"></div>\n                </div>\n            </div>\n        '}},{key:"getDefaultValue",value:function(){return this.$store.hsv.h}},{key:"refreshColorUI",value:function(t){var e=this.getCaculatedDist(t);this.setColorUI(e/100*this.maxValue),this.changeColor({h:e/100*this.maxValue,type:"hsv"})}}]),e}(),Sr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.source="vertical-opacity-control",r}return H(e,Mr),B(e,[{key:"template",value:function(){return'\n        <div class="opacity">\n            <div ref="$container" class="opacity-container">\n                <div ref="$colorbar" class="color-bar"></div>\n                <div ref="$bar" class="drag-bar2"></div>\n            </div>\n        </div>\n        '}},{key:"refresh",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"refresh",this).call(this),this.setOpacityColorBar()}},{key:"setOpacityColorBar",value:function(){var t=Object.assign({},this.$store.rgb);t.a=0;var e=He.format(t,"rgb");t.a=1;var r=He.format(t,"rgb");this.refs.$colorbar.css("background","linear-gradient(to top, "+e+", "+r+")")}},{key:"getDefaultValue",value:function(){return this.$store.alpha}},{key:"refreshColorUI",value:function(t){var e=this.getCaculatedDist(t);this.setColorUI(e/100*this.maxValue),this.changeColor({a:Math.floor(e)/100*this.maxValue})}}]),e}(),Er=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"components",value:function(){return{Hue:Or,Opacity:Sr}}},{key:"template",value:function(){return'<div class="control"><div target="Hue" ></div><div target="Opacity" ></div></div>'}},{key:"refresh",value:function(){this.setColorUI()}},{key:"setColorUI",value:function(){this.Hue.setColorUI(),this.Opacity.setColorUI()}},{key:"@changeColor",value:function(t){"mini-control"!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),Tr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,or),B(e,[{key:"template",value:function(){return'\n            <div class=\'colorpicker-body\'>\n                <div target="palette"></div><div target="control"></div>\n            </div>\n        '}},{key:"components",value:function(){return{palette:Cr,control:Er}}}]),e}(),Ar=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"components",value:function(){return{Value:sr,Opacity:ur}}},{key:"template",value:function(){return'\n        <div class="control">\n            <div target="Value" ></div>\n            <div target="Opacity" ></div>\n            <div ref="$controlPattern" class="empty"></div>\n            <div ref="$controlColor" class="color"></div>\n        </div>\n        '}},{key:"setBackgroundColor",value:function(){this.refs.$controlColor.css("background-color",this.$store.dispatch("/toRGB"))}},{key:"refresh",value:function(){this.setColorUI(),this.setBackgroundColor()}},{key:"setColorUI",value:function(){this.Value.setColorUI(),this.Opacity.setColorUI()}},{key:"@changeColor",value:function(t){"macos-control"!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),Ir=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.width=214,r.height=214,r.thinkness=16,r.half_thinkness=r.thinkness/2,r.source="colorring",r}return H(e,hr),B(e,[{key:"template",value:function(){return'\n        <div class="wheel" data-type="ring">\n            <canvas class="wheel-canvas" ref="$colorwheel" ></canvas>\n            <div class="drag-pointer" ref="$drag_pointer"></div>\n        </div>\n        '}},{key:"setColorUI",value:function(t){this.renderCanvas(),this.setHueColor(null,t)}},{key:"getDefaultValue",value:function(){return this.$store.hsv.h}},{key:"setHueColor",value:function(t,e){if(this.state.get("$el.width")){var r=this.getRectangle(),n=r.minX,i=r.minY,o=r.radius,a=r.centerX,l=r.centerY,s=this.getCurrentXY(t,this.getDefaultValue(),o,a,l),u=c((f=s.x)-a,(v=s.y)-l),h=this.getCurrentXY(null,u,o-this.half_thinkness,a,l),f=h.x,v=h.y;this.refs.$drag_pointer.css({left:f-n+"px",top:v-i+"px"}),e||this.changeColor({type:"hsv",h:u})}}}]),e}(),Pr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,or),B(e,[{key:"template",value:function(){return'\n            <div class=\'colorpicker-body\'>\n                <div target="colorring"></div>\n                <div target="palette"></div> \n                <div target="control"></div>\n                <div target="information"></div>\n                <div target="currentColorSets"></div>\n                <div target="colorSetsChooser"></div>\n                <div target="contextMenu"></div>\n            </div>\n        '}},{key:"components",value:function(){return{colorring:Ir,palette:Cr,control:Ar,information:vr,currentColorSets:dr,colorSetsChooser:gr,contextMenu:pr}}}]),e}(),Dr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"components",value:function(){return{Hue:Or,Opacity:Sr}}},{key:"template",value:function(){return'\n        <div class="control">\n            <div target="Hue" ></div>\n            <div target="Opacity" ></div>\n        </div>\n        '}},{key:"refresh",value:function(){this.setColorUI()}},{key:"setColorUI",value:function(){this.Hue.setColorUI(),this.Opacity.setColorUI()}},{key:"@changeColor",value:function(){this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),Br=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,or),B(e,[{key:"template",value:function(){return'\n            <div class=\'colorpicker-body\'>\n                <div target="palette"></div> \n                <div target="control"></div>\n                <div target="information"></div>\n                <div target="currentColorSets"></div>\n                <div target="colorSetsChooser"></div>\n                <div target="contextMenu"></div>\n            </div>\n        '}},{key:"components",value:function(){return{palette:Cr,control:Dr,information:vr,currentColorSets:dr,colorSetsChooser:gr,contextMenu:pr}}}]),e}(),Rr={create:function(t){switch(t.type){case"macos":return new mr(t);case"xd":return new Br(t);case"ring":return new Pr(t);case"mini":return new wr(t);case"mini-vertical":return new Tr(t);case"sketch":case"palette":default:return new xr(t)}},ColorPicker:xr,ChromeDevToolColorPicker:xr,MacOSColorPicker:mr,RingColorPicker:Pr,MiniColorPicker:wr,MiniVerticalColorPicker:Tr},jr="codemirror-colorview",Fr="codemirror-colorview-background",Hr=["comment","builtin"];function Ur(t,e){"setValue"==e.origin?(t.state.colorpicker.close_color_picker(),t.state.colorpicker.init_color_update(),t.state.colorpicker.style_color_update()):t.state.colorpicker.style_color_update(t.getCursor().line)}function Lr(t,e){t.state.colorpicker.isUpdate||(t.state.colorpicker.isUpdate=!0,t.state.colorpicker.close_color_picker(),t.state.colorpicker.init_color_update(),t.state.colorpicker.style_color_update())}function Vr(t,e){Ur(t,{origin:"setValue"})}function Nr(t,e){t.state.colorpicker.keyup(e)}function Gr(t,e){t.state.colorpicker.is_edit_mode()&&t.state.colorpicker.check_mousedown(e)}function zr(t,e){Ur(t,{origin:"setValue"})}function Xr(t){t.state.colorpicker.close_color_picker()}function Yr(t){t.state.colorpicker.hide_delay_color_picker(t.state.colorpicker.opt.hideDelay||1e3)}var Wr=function(){function t(e,r){D(this,t),r="boolean"==typeof r?{mode:"edit"}:Object.assign({mode:"edit"},r||{}),this.opt=r,this.cm=e,this.markers={},this.excluded_token=this.opt.excluded_token||Hr,this.opt.colorpicker?this.colorpicker=this.opt.colorpicker(this.opt):this.colorpicker=Rr.create(this.opt),this.init_event()}return B(t,[{key:"init_event",value:function(){var t,e,r,n,i;this.cm.on("mousedown",Gr),this.cm.on("keyup",Nr),this.cm.on("change",Ur),this.cm.on("update",Lr),this.cm.on("refresh",Vr),this.cm.on("blur",Yr),this.onPasteCallback=(t=this.cm,e=zr,function(r){e.call(this,t,r)}),this.onScrollEvent=(r=Xr,n=50,i=void 0,function(t,e){i&&clearTimeout(i),i=setTimeout(function(){r(t,e)},n||300)}),this.cm.getWrapperElement().addEventListener("paste",this.onPasteCallback),this.is_edit_mode()&&this.cm.on("scroll",this.onScrollEvent)}},{key:"is_edit_mode",value:function(){return"edit"==this.opt.mode}},{key:"is_view_mode",value:function(){return"view"==this.opt.mode}},{key:"destroy",value:function(){this.cm.off("mousedown",Gr),this.cm.off("keyup",Nr),this.cm.off("change",Ur),this.cm.off("blur",Yr),this.cm.getWrapperElement().removeEventListener("paste",this.onPasteCallback),this.is_edit_mode()&&this.cm.off("scroll",this.onScrollEvent)}},{key:"hasClass",value:function(t,e){return!!t.className&&(" "+t.className+" ").indexOf(" "+e+" ")>-1}},{key:"check_mousedown",value:function(t){this.hasClass(t.target,Fr)?this.open_color_picker(t.target.parentNode):this.close_color_picker()}},{key:"popup_color_picker",value:function(t){var e=this.cm.getCursor(),r=this,n={lineNo:e.line,ch:e.ch,color:t||"#FFFFFF",isShortCut:!0};Object.keys(this.markers).forEach(function(t){if(("#"+t).indexOf("#"+n.lineNo+":")>-1){var e=r.markers[t];e.ch<=n.ch&&n.ch<=e.ch+e.color.length&&(n.ch=e.ch,n.color=e.color,n.nameColor=e.nameColor)}}),this.open_color_picker(n)}},{key:"open_color_picker",value:function(t){var e=this,r=t.lineNo,n=t.ch,i=t.nameColor,o=t.color;if(this.colorpicker){var a=o,l=this.cm.charCoords({line:r,ch:n});this.colorpicker.show({left:l.left,top:l.bottom,isShortCut:t.isShortCut||!1,hideDelay:this.opt.hideDelay||2e3},i||o,function(t){e.cm.replaceRange(t,{line:r,ch:n},{line:r,ch:n+a.length},"*colorpicker"),e.cm.focus(),a=t})}}},{key:"close_color_picker",value:function(){this.colorpicker&&this.colorpicker.hide()}},{key:"hide_delay_color_picker",value:function(){this.colorpicker&&this.colorpicker.runHideDelay()}},{key:"key",value:function(t,e){return[t,e].join(":")}},{key:"keyup",value:function(t){this.colorpicker&&("Escape"==t.key?this.colorpicker.hide():0==this.colorpicker.isShortCut&&this.colorpicker.hide())}},{key:"init_color_update",value:function(){this.markers={}}},{key:"style_color_update",value:function(t){if(t)this.match(t);else for(var e=this.cm.lineCount(),r=0;r<e;r++)this.match(r)}},{key:"empty_marker",value:function(t,e){for(var r,n,i=e.markedSpans||[],o=0,a=i.length;o<a;o++){var l=this.key(t,i[o].from);l&&(r=i[o].marker.replacedWith,n=jr,r&&r.className&&(" "+r.className+" ").indexOf(" "+n+" ")>-1)&&(delete this.markers[l],i[o].marker.clear())}}},{key:"match_result",value:function(t){return He.matches(t.text)}},{key:"submatch",value:function(t,e){var r=this;this.empty_marker(t,e);var n={next:0};this.match_result(e).forEach(function(i){r.render(n,t,e,i.color,i.nameColor)})}},{key:"match",value:function(t){var e=this.cm.getLineHandle(t),r=this;this.cm.operation(function(){r.submatch(t,e)})}},{key:"make_element",value:function(){var t=document.createElement("div");return t.className=jr,this.is_edit_mode()?t.title="open color picker":t.title="",t.back_element=this.make_background_element(),t.appendChild(t.back_element),t}},{key:"make_background_element",value:function(){var t=document.createElement("div");return t.className=Fr,t}},{key:"set_state",value:function(t,e,r,n){var i=this.create_marker(t,e);return i.lineNo=t,i.ch=e,i.color=r,i.nameColor=n,i}},{key:"create_marker",value:function(t,e){return this.has_marker(t,e)||this.init_marker(t,e),this.get_marker(t,e)}},{key:"init_marker",value:function(t,e){this.markers[this.key(t,e)]=this.make_element()}},{key:"has_marker",value:function(t,e){return!!this.get_marker(t,e)}},{key:"get_marker",value:function(t,e){var r=this.key(t,e);return this.markers[r]}},{key:"update_element",value:function(t,e){t.back_element.style.backgroundColor=e}},{key:"set_mark",value:function(t,e,r){this.cm.setBookmark({line:t,ch:e},{widget:r,handleMouseEvents:!0})}},{key:"is_excluded_token",value:function(t,e){var r=this.cm.getTokenAt({line:t,ch:e},!0),n=r.type,i=r.state.state;if(null==n&&"block"==i)return!0;if(null==n&&"top"==i)return!0;for(var o=0,a=0,l=this.excluded_token.length;a<l;a++)if(n===this.excluded_token[a]){o++;break}return o>0}},{key:"render",value:function(t,e,r,n,i){var o=r.text.indexOf(n,t.next);if(!0!==this.is_excluded_token(e,o)){if(t.next=o+n.length,this.has_marker(e,o))return this.update_element(this.create_marker(e,o),i||n),void this.set_state(e,o,n,i);var a=this.create_marker(e,o);this.update_element(a,i||n),this.set_state(e,o,n,i||n),this.set_mark(e,o,a)}}}]),t}();try{var qr=require("codemirror")}catch(t){}var Kr=function(){return qr||window.CodeMirror};function Zr(){var t=Kr();t&&t.defineOption("colorpicker",!1,function(e,r,n){n&&n!=t.Init&&e.state.colorpicker&&(e.state.colorpicker.destroy(),e.state.colorpicker=null),r&&(e.state.colorpicker=new Wr(e,r))})}return Zr(),j({},Ne,Rr,{load:Zr})}();

//! moment.js

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));

//# sourceMappingURL=../../../maps/moment.js.map

//# sourceMappingURL=../../../maps/xtern.js.map
