/*! Split.js - v1.5.9 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Split=t()}(this,function(){"use strict";var B=window,L=B.document,T="addEventListener",N="removeEventListener",R="getBoundingClientRect",q="horizontal",H=function(){return!1},I=B.attachEvent&&!B[T],i=["","-webkit-","-moz-","-o-"].filter(function(e){var t=L.createElement("div");return t.style.cssText="width:"+e+"calc(9px)",!!t.style.length}).shift()+"calc",s=function(e){return"string"==typeof e||e instanceof String},W=function(e){if(s(e)){var t=L.querySelector(e);if(!t)throw new Error("Selector "+e+" did not match a DOM element");return t}return e},X=function(e,t,n){var r=e[t];return void 0!==r?r:n},Y=function(e,t,n,r){if(t){if("end"===r)return 0;if("center"===r)return e/2}else if(n){if("start"===r)return 0;if("center"===r)return e/2}return e},G=function(e,t){var n=L.createElement("div");return n.className="gutter gutter-"+t,n},J=function(e,t,n){var r={};return s(t)?r[e]=t:r[e]=I?t+"%":i+"("+t+"% - "+n+"px)",r},K=function(e,t){var n;return(n={})[e]=t+"px",n};return function(e,i){void 0===i&&(i={});var u,t,s,o,r,a,l=e;Array.from&&(l=Array.from(l));var c=W(l[0]).parentNode,f=getComputedStyle?getComputedStyle(c).flexDirection:null,m=X(i,"sizes")||l.map(function(){return 100/l.length}),n=X(i,"minSize",100),h=Array.isArray(n)?n:l.map(function(){return n}),d=X(i,"expandToMin",!1),g=X(i,"gutterSize",10),v=X(i,"gutterAlign","center"),p=X(i,"snapOffset",30),y=X(i,"dragInterval",1),z=X(i,"direction",q),S=X(i,"cursor",z===q?"col-resize":"row-resize"),b=X(i,"gutter",G),_=X(i,"elementStyle",J),E=X(i,"gutterStyle",K);function w(t,e,n,r){var i=_(u,e,n,r);Object.keys(i).forEach(function(e){t.style[e]=i[e]})}function k(){return a.map(function(e){return e.size})}function x(e){return"touches"in e?e.touches[0][t]:e[t]}function M(e){var t=a[this.a],n=a[this.b],r=t.size+n.size;t.size=e/this.size*r,n.size=r-e/this.size*r,w(t.element,t.size,this._b,t.i),w(n.element,n.size,this._c,n.i)}function U(){var e=a[this.a].element,t=a[this.b].element,n=e[R](),r=t[R]();this.size=n[u]+r[u]+this._b+this._c,this.start=n[s],this.end=n[o]}function O(s){var o=function(e){if(!getComputedStyle)return null;var t=getComputedStyle(e),n=e[r];return 0===n?null:n-=z===q?parseFloat(t.paddingLeft)+parseFloat(t.paddingRight):parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)}(c);if(null===o)return s;var a=0,u=[],e=s.map(function(e,t){var n=o*e/100,r=Y(g,0===t,t===s.length-1,v),i=h[t]+r;return n<i?(a+=i-n,u.push(0),i):(u.push(n-i),n)});return 0===a?s:e.map(function(e,t){var n=e;if(0<a&&0<u[t]-a){var r=Math.min(a,u[t]-a);a-=r,n=e-r}return n/o*100})}function C(e){if(!("button"in e&&0!==e.button)){var t=this,n=a[t.a].element,r=a[t.b].element;t.dragging||X(i,"onDragStart",H)(k()),e.preventDefault(),t.dragging=!0,t.move=function(e){var t,n=a[this.a],r=a[this.b];this.dragging&&(t=x(e)-this.start+(this._b-this.dragOffset),1<y&&(t=Math.round(t/y)*y),t<=n.minSize+p+this._b?t=n.minSize+this._b:t>=this.size-(r.minSize+p+this._c)&&(t=this.size-(r.minSize+this._c)),M.call(this,t),X(i,"onDrag",H)())}.bind(t),t.stop=function(){var e=this,t=a[e.a].element,n=a[e.b].element;e.dragging&&X(i,"onDragEnd",H)(k()),e.dragging=!1,B[N]("mouseup",e.stop),B[N]("touchend",e.stop),B[N]("touchcancel",e.stop),B[N]("mousemove",e.move),B[N]("touchmove",e.move),e.stop=null,e.move=null,t[N]("selectstart",H),t[N]("dragstart",H),n[N]("selectstart",H),n[N]("dragstart",H),t.style.userSelect="",t.style.webkitUserSelect="",t.style.MozUserSelect="",t.style.pointerEvents="",n.style.userSelect="",n.style.webkitUserSelect="",n.style.MozUserSelect="",n.style.pointerEvents="",e.gutter.style.cursor="",e.parent.style.cursor="",L.body.style.cursor=""}.bind(t),B[T]("mouseup",t.stop),B[T]("touchend",t.stop),B[T]("touchcancel",t.stop),B[T]("mousemove",t.move),B[T]("touchmove",t.move),n[T]("selectstart",H),n[T]("dragstart",H),r[T]("selectstart",H),r[T]("dragstart",H),n.style.userSelect="none",n.style.webkitUserSelect="none",n.style.MozUserSelect="none",n.style.pointerEvents="none",r.style.userSelect="none",r.style.webkitUserSelect="none",r.style.MozUserSelect="none",r.style.pointerEvents="none",t.gutter.style.cursor=S,t.parent.style.cursor=S,L.body.style.cursor=S,U.call(t),t.dragOffset=x(e)-t.end}}z===q?(u="width",t="clientX",s="left",o="right",r="clientWidth"):"vertical"===z&&(u="height",t="clientY",s="top",o="bottom",r="clientHeight"),m=O(m);var D=[];function A(e){var t=e.i===D.length,n=t?D[e.i-1]:D[e.i];U.call(n);var r=t?n.size-e.minSize-n._c:e.minSize+n._b;M.call(n,r)}function j(e){var s=O(e);s.forEach(function(e,t){if(0<t){var n=D[t-1],r=a[n.a],i=a[n.b];r.size=s[t-1],i.size=e,w(r.element,r.size,n._b),w(i.element,i.size,n._c)}})}function F(n,r){D.forEach(function(t){if(!0!==r?t.parent.removeChild(t.gutter):(t.gutter[N]("mousedown",t._a),t.gutter[N]("touchstart",t._a)),!0!==n){var e=_(u,t.a.size,t._b);Object.keys(e).forEach(function(e){a[t.a].element.style[e]="",a[t.b].element.style[e]=""})}})}return(a=l.map(function(e,t){var n,r,i,s={element:W(e),size:m[t],minSize:h[t],i:t};if(0<t&&((n={a:t-1,b:t,dragging:!1,direction:z,parent:c})._b=Y(g,t-1==0,!1,v),n._c=Y(g,!1,t===l.length-1,v),"row-reverse"===f||"column-reverse"===f)){var o=n.a;n.a=n.b,n.b=o}if(!I&&0<t){var a=b(t,z,s.element);r=a,i=E(u,g,t),Object.keys(i).forEach(function(e){r.style[e]=i[e]}),n._a=C.bind(n),a[T]("mousedown",n._a),a[T]("touchstart",n._a),c.insertBefore(a,s.element),n.gutter=a}return w(s.element,s.size,Y(g,0===t,t===l.length-1,v)),0<t&&D.push(n),s})).forEach(function(e){var t=e.element[R]()[u];t<e.minSize&&(d?A(e):e.minSize=t)}),I?{setSizes:j,destroy:F}:{setSizes:j,getSizes:k,collapse:function(e){A(a[e])},destroy:F,parent:c,pairs:D}}});
//# sourceMappingURL=split.min.js.map

var CodeMirrorColorPicker=function(){"use strict";function t(t,i){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgba(0, 0, 0, 0)";return Array.isArray(t)&&(t={r:t[0],g:t[1],b:t[2],a:t[3]}),"hex"==i?e(t):"rgb"==i?r(t,o):"hsl"==i?n(t):t}function e(t){Array.isArray(t)&&(t={r:t[0],g:t[1],b:t[2],a:t[3]});var e=t.r.toString(16);t.r<16&&(e="0"+e);var r=t.g.toString(16);t.g<16&&(r="0"+r);var n=t.b.toString(16);return t.b<16&&(n="0"+n),"#"+e+r+n}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rgba(0, 0, 0, 0)";if(Array.isArray(t)&&(t={r:t[0],g:t[1],b:t[2],a:t[3]}),void 0!==t)return 1==t.a||void 0===t.a?isNaN(t.r)?e:"rgb("+t.r+","+t.g+","+t.b+")":"rgba("+t.r+","+t.g+","+t.b+","+t.a+")"}function n(t){return Array.isArray(t)&&(t={r:t[0],g:t[1],b:t[2],a:t[3]}),1==t.a||void 0===t.a?"hsl("+t.h+","+t.s+"%,"+t.l+"%)":"hsla("+t.h+","+t.s+"%,"+t.l+"%,"+t.a+")"}var i={format:t,rgb:r,hsl:n,hex:e};function o(t,e){return e=void 0===e?1:e,Math.round(t*e)/e}function a(t){return t*Math.PI/180}function l(t){var e=180*t/Math.PI;return e<0&&(e=360+e),e}function s(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)+e*Math.cos(a(t))}function u(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)+e*Math.sin(a(t))}function c(t,e){return l(Math.atan2(e,t))}var h={round:o,radianToDegree:l,degreeToRadian:a,getXInCircle:s,getYInCircle:u,caculateAngle:c};function f(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}var i=t/255,o=e/255,a=r/255,l=Math.max(i,o,a),s=l-Math.min(i,o,a),u=0;0==s?u=0:l==i?u=(o-a)/s%6*60:l==o?u=60*((a-i)/s+2):l==a&&(u=60*((i-o)/s+4)),u<0&&(u=360+u);return{h:u,s:0==l?0:s/l,v:l}}function v(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}t/=255,e/=255,r/=255;var i,a,l=Math.max(t,e,r),s=Math.min(t,e,r),u=(l+s)/2;if(l==s)i=a=0;else{var c=l-s;switch(a=u>.5?c/(2-l-s):c/(l+s),l){case t:i=(e-r)/c+(e<r?6:0);break;case e:i=(r-t)/c+2;break;case r:i=(t-e)/c+4}i/=6}return{h:o(360*i),s:o(100*a),l:o(100*u)}}function g(t){return{r:t,g:t,b:t}}function d(t,e,r){return Math.ceil(.2126*t+.7152*e+.0722*r)}function p(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}var i=d(t,e,r);return{y:i,cr:.713*(t-i),cb:.564*(r-i)}}function m(t){return 100*(t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)}function y(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}var i=t/255,o=e/255,a=r/255;return{x:.4124*(i=m(i))+.3576*(o=m(o))+.1805*(a=m(a)),y:.2126*i+.7152*o+.0722*a,z:.0193*i+.1192*o+.9505*a}}var b={RGBtoCMYK:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}var i=t/255,o=e/255,a=r/255,l=1-Math.max(i,o,a);return{c:(1-i-l)/(1-l),m:(1-o-l)/(1-l),y:(1-a-l)/(1-l),k:l}},RGBtoGray:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}return g(p(t,e,r).y)},RGBtoHSL:v,RGBtoHSV:f,RGBtoLAB:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}return XYZtoLAB(y(t,e,r))},RGBtoSimpleGray:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}return g(Math.ceil((t+e+r)/3))},RGBtoXYZ:y,RGBtoYCrCb:p,c:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.r,e=n.g,r=n.b}return g((t+e+r)/3>90?0:255)},brightness:d,gray:g};var k={CMYKtoRGB:function(t,e,r,n){if(1==arguments.length){var i=arguments[0];t=i.c,e=i.m,r=i.y,n=i.k}return{r:255*(1-t)*(1-n),g:255*(1-e)*(1-n),b:255*(1-r)*(1-n)}}};function C(t){return Math.pow(t,3)>.008856?Math.pow(t,3):(t-16/116)/7.787}function $(t){return t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t}function x(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.x,e=n.y,r=n.z}var i=t/100,a=e/100,l=r/100,s=3.2406*i+-1.5372*a+-.4986*l,u=-.9689*i+1.8758*a+.0415*l,c=.0557*i+-.204*a+1.057*l;return s=$(s),u=$(u),c=$(c),{r:o(255*s),g:o(255*u),b:o(255*c)}}function _(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.l,e=n.a,r=n.b}var i=(t+16)/116,o=e/500+i,a=i-r/200;return i=C(i),{x:95.047*(o=C(o)),y:100*i,z:108.883*(a=C(a))}}var w={XYZtoRGB:x,LABtoRGB:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.l,e=n.a,r=n.b}return x(_(t,e,r))},LABtoXYZ:_};function M(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.h,e=n.s,r=n.v}var i=t,a=r;i>=360&&(i=0);var l=e*a,s=l*(1-Math.abs(i/60%2-1)),u=a-l,c=[];return 0<=i&&i<60?c=[l,s,0]:60<=i&&i<120?c=[s,l,0]:120<=i&&i<180?c=[0,l,s]:180<=i&&i<240?c=[0,s,l]:240<=i&&i<300?c=[s,0,l]:300<=i&&i<360&&(c=[l,0,s]),{r:o(255*(c[0]+u)),g:o(255*(c[1]+u)),b:o(255*(c[2]+u))}}var O={HSVtoHSL:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.h,e=n.s,r=n.v}var i=M(t,e,r);return v(i.r,i.g,i.b)},HSVtoRGB:M};function S(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function E(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.h,e=n.s,r=n.l}var i,a,l;if(t/=360,r/=100,0==(e/=100))i=a=l=r;else{var s=r<.5?r*(1+e):r+e-r*e,u=2*r-s;i=S(u,s,t+1/3),a=S(u,s,t),l=S(u,s,t-1/3)}return{r:o(255*i),g:o(255*a),b:o(255*l)}}var T={HUEtoRGB:S,HSLtoHSV:function(t,e,r){if(1==arguments.length){var n=arguments[0];t=n.h,e=n.s,r=n.l}var i=E(t,e,r);return f(i.r,i.g,i.b)},HSLtoRGB:E};var A={YCrCbtoRGB:function(t,e,r,n){if(1==arguments.length){var i=arguments[0];t=i.y,e=i.cr,r=i.cb,n=(n=i.bit)||0}var o=t+1.402*(e-n),a=t-.344*(r-n)-.714*(e-n),l=t+1.772*(r-n);return{r:Math.ceil(o),g:Math.ceil(a),b:Math.ceil(l)}}},I={aliceblue:"rgb(240, 248, 255)",antiquewhite:"rgb(250, 235, 215)",aqua:"rgb(0, 255, 255)",aquamarine:"rgb(127, 255, 212)",azure:"rgb(240, 255, 255)",beige:"rgb(245, 245, 220)",bisque:"rgb(255, 228, 196)",black:"rgb(0, 0, 0)",blanchedalmond:"rgb(255, 235, 205)",blue:"rgb(0, 0, 255)",blueviolet:"rgb(138, 43, 226)",brown:"rgb(165, 42, 42)",burlywood:"rgb(222, 184, 135)",cadetblue:"rgb(95, 158, 160)",chartreuse:"rgb(127, 255, 0)",chocolate:"rgb(210, 105, 30)",coral:"rgb(255, 127, 80)",cornflowerblue:"rgb(100, 149, 237)",cornsilk:"rgb(255, 248, 220)",crimson:"rgb(237, 20, 61)",cyan:"rgb(0, 255, 255)",darkblue:"rgb(0, 0, 139)",darkcyan:"rgb(0, 139, 139)",darkgoldenrod:"rgb(184, 134, 11)",darkgray:"rgb(169, 169, 169)",darkgrey:"rgb(169, 169, 169)",darkgreen:"rgb(0, 100, 0)",darkkhaki:"rgb(189, 183, 107)",darkmagenta:"rgb(139, 0, 139)",darkolivegreen:"rgb(85, 107, 47)",darkorange:"rgb(255, 140, 0)",darkorchid:"rgb(153, 50, 204)",darkred:"rgb(139, 0, 0)",darksalmon:"rgb(233, 150, 122)",darkseagreen:"rgb(143, 188, 143)",darkslateblue:"rgb(72, 61, 139)",darkslategray:"rgb(47, 79, 79)",darkslategrey:"rgb(47, 79, 79)",darkturquoise:"rgb(0, 206, 209)",darkviolet:"rgb(148, 0, 211)",deeppink:"rgb(255, 20, 147)",deepskyblue:"rgb(0, 191, 255)",dimgray:"rgb(105, 105, 105)",dimgrey:"rgb(105, 105, 105)",dodgerblue:"rgb(30, 144, 255)",firebrick:"rgb(178, 34, 34)",floralwhite:"rgb(255, 250, 240)",forestgreen:"rgb(34, 139, 34)",fuchsia:"rgb(255, 0, 255)",gainsboro:"rgb(220, 220, 220)",ghostwhite:"rgb(248, 248, 255)",gold:"rgb(255, 215, 0)",goldenrod:"rgb(218, 165, 32)",gray:"rgb(128, 128, 128)",grey:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",greenyellow:"rgb(173, 255, 47)",honeydew:"rgb(240, 255, 240)",hotpink:"rgb(255, 105, 180)",indianred:"rgb(205, 92, 92)",indigo:"rgb(75, 0, 130)",ivory:"rgb(255, 255, 240)",khaki:"rgb(240, 230, 140)",lavender:"rgb(230, 230, 250)",lavenderblush:"rgb(255, 240, 245)",lawngreen:"rgb(124, 252, 0)",lemonchiffon:"rgb(255, 250, 205)",lightblue:"rgb(173, 216, 230)",lightcoral:"rgb(240, 128, 128)",lightcyan:"rgb(224, 255, 255)",lightgoldenrodyellow:"rgb(250, 250, 210)",lightgreen:"rgb(144, 238, 144)",lightgray:"rgb(211, 211, 211)",lightgrey:"rgb(211, 211, 211)",lightpink:"rgb(255, 182, 193)",lightsalmon:"rgb(255, 160, 122)",lightseagreen:"rgb(32, 178, 170)",lightskyblue:"rgb(135, 206, 250)",lightslategray:"rgb(119, 136, 153)",lightslategrey:"rgb(119, 136, 153)",lightsteelblue:"rgb(176, 196, 222)",lightyellow:"rgb(255, 255, 224)",lime:"rgb(0, 255, 0)",limegreen:"rgb(50, 205, 50)",linen:"rgb(250, 240, 230)",magenta:"rgb(255, 0, 255)",maroon:"rgb(128, 0, 0)",mediumaquamarine:"rgb(102, 205, 170)",mediumblue:"rgb(0, 0, 205)",mediumorchid:"rgb(186, 85, 211)",mediumpurple:"rgb(147, 112, 219)",mediumseagreen:"rgb(60, 179, 113)",mediumslateblue:"rgb(123, 104, 238)",mediumspringgreen:"rgb(0, 250, 154)",mediumturquoise:"rgb(72, 209, 204)",mediumvioletred:"rgb(199, 21, 133)",midnightblue:"rgb(25, 25, 112)",mintcream:"rgb(245, 255, 250)",mistyrose:"rgb(255, 228, 225)",moccasin:"rgb(255, 228, 181)",navajowhite:"rgb(255, 222, 173)",navy:"rgb(0, 0, 128)",oldlace:"rgb(253, 245, 230)",olive:"rgb(128, 128, 0)",olivedrab:"rgb(107, 142, 35)",orange:"rgb(255, 165, 0)",orangered:"rgb(255, 69, 0)",orchid:"rgb(218, 112, 214)",palegoldenrod:"rgb(238, 232, 170)",palegreen:"rgb(152, 251, 152)",paleturquoise:"rgb(175, 238, 238)",palevioletred:"rgb(219, 112, 147)",papayawhip:"rgb(255, 239, 213)",peachpuff:"rgb(255, 218, 185)",peru:"rgb(205, 133, 63)",pink:"rgb(255, 192, 203)",plum:"rgb(221, 160, 221)",powderblue:"rgb(176, 224, 230)",purple:"rgb(128, 0, 128)",rebeccapurple:"rgb(102, 51, 153)",red:"rgb(255, 0, 0)",rosybrown:"rgb(188, 143, 143)",royalblue:"rgb(65, 105, 225)",saddlebrown:"rgb(139, 69, 19)",salmon:"rgb(250, 128, 114)",sandybrown:"rgb(244, 164, 96)",seagreen:"rgb(46, 139, 87)",seashell:"rgb(255, 245, 238)",sienna:"rgb(160, 82, 45)",silver:"rgb(192, 192, 192)",skyblue:"rgb(135, 206, 235)",slateblue:"rgb(106, 90, 205)",slategray:"rgb(112, 128, 144)",slategrey:"rgb(112, 128, 144)",snow:"rgb(255, 250, 250)",springgreen:"rgb(0, 255, 127)",steelblue:"rgb(70, 130, 180)",tan:"rgb(210, 180, 140)",teal:"rgb(0, 128, 128)",thistle:"rgb(216, 191, 216)",tomato:"rgb(255, 99, 71)",turquoise:"rgb(64, 224, 208)",violet:"rgb(238, 130, 238)",wheat:"rgb(245, 222, 179)",white:"rgb(255, 255, 255)",whitesmoke:"rgb(245, 245, 245)",yellow:"rgb(255, 255, 0)",yellowgreen:"rgb(154, 205, 50)",transparent:"rgba(0, 0, 0, 0)"};var P={isColorName:function(t){return!!I[t]},getColorByName:function(t){return I[t]}},D=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},B=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),R=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},j=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},F=function t(e,r,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,r);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,r,n)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(n):void 0},H=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},U=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},L=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var r=[],n=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(n=(a=l.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{!n&&l.return&&l.return()}finally{if(i)throw o}}return r}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),V=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)},N=/(#(?:[\da-f]{3}){1,2}|rgb\((?:\s*\d{1,3},\s*){2}\d{1,3}\s*\)|rgba\((?:\s*\d{1,3},\s*){3}\d*\.?\d+\s*\)|hsl\(\s*\d{1,3}(?:,\s*\d{1,3}%){2}\s*\)|hsla\(\s*\d{1,3}(?:,\s*\d{1,3}%){2},\s*\d*\.?\d+\s*\)|([\w_\-]+))/gi;function G(t){var e=t.match(N),r=[];if(!e)return r;for(var n=0,i=e.length;n<i;n++)if(e[n].indexOf("#")>-1||e[n].indexOf("rgb")>-1||e[n].indexOf("hsl")>-1)r.push({color:e[n]});else{var o=P.getColorByName(e[n]);o&&r.push({color:e[n],nameColor:o})}var a={next:0};return r.forEach(function(e){var r=t.indexOf(e.color,a.next);e.startIndex=r,e.endIndex=r+e.color.length,a.next=e.endIndex}),r}function z(t){var e=G(t);return e.forEach(function(e,r){t=t.replace(e.color,"@"+r)}),{str:t,matches:e}}function X(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",r=z(t);return r.str.split(e).map(function(t,e){return t=W(t),r.matches[e]&&(t=t.replace("@"+e,r.matches[e].color)),t})}function Y(t,e){return e.forEach(function(e,r){t=t.replace("@"+r,e.color)}),t}function W(t){return t.replace(/^\s+|\s+$/g,"")}function q(t){if("string"==typeof t){if(P.isColorName(t)&&(t=P.getColorByName(t)),t.indexOf("rgb(")>-1){for(var e=0,r=(i=t.replace("rgb(","").replace(")","").split(",")).length;e<r;e++)i[e]=parseInt(W(i[e]),10);var n={type:"rgb",r:i[0],g:i[1],b:i[2],a:1};return n=Object.assign(n,v(n))}if(t.indexOf("rgba(")>-1){for(e=0,r=(i=t.replace("rgba(","").replace(")","").split(",")).length;e<r;e++)i[e]=r-1==e?parseFloat(W(i[e])):parseInt(W(i[e]),10);n={type:"rgb",r:i[0],g:i[1],b:i[2],a:i[3]};return n=Object.assign(n,v(n))}if(t.indexOf("hsl(")>-1){for(e=0,r=(i=t.replace("hsl(","").replace(")","").split(",")).length;e<r;e++)i[e]=parseFloat(W(i[e]));n={type:"hsl",h:i[0],s:i[1],l:i[2],a:1};return n=Object.assign(n,E(n))}if(t.indexOf("hsla(")>-1){for(e=0,r=(i=t.replace("hsla(","").replace(")","").split(",")).length;e<r;e++)i[e]=r-1==e?parseFloat(W(i[e])):parseInt(W(i[e]),10);n={type:"hsl",h:i[0],s:i[1],l:i[2],a:i[3]};return n=Object.assign(n,E(n))}if(0==t.indexOf("#")){var i=[];if(3==(t=t.replace("#","")).length)for(e=0,r=t.length;e<r;e++){var o=t.substr(e,1);i.push(parseInt(o+o,16))}else for(e=0,r=t.length;e<r;e+=2)i.push(parseInt(t.substr(e,2),16));n={type:"hex",r:i[0],g:i[1],b:i[2],a:1};return n=Object.assign(n,v(n))}}else if("number"==typeof t){if(0<=t&&t<=16777215){n={type:"hex",r:(16711680&t)>>16,g:(65280&t)>>8,b:(255&t)>>0,a:1};return n=Object.assign(n,v(n))}if(0<=t&&t<=4294967295){n={type:"hex",r:(4278190080&t)>>24,g:(16711680&t)>>16,b:(65280&t)>>8,a:(255&t)/255};return n=Object.assign(n,v(n))}}return t}function K(t){"string"==typeof t&&(t=X(t));var e=(t=t.map(function(t){if("string"==typeof t){var e=z(t),r=W(e.str).split(" ");return r[1]?r[1].includes("%")?r[1]=parseFloat(r[1].replace(/%/,""))/100:r[1]=parseFloat(r[1]):r[1]="*",r[0]=Y(r[0],e.matches),r}if(Array.isArray(t))return t[1]?"string"==typeof t[1]&&(t[1].includes("%")?t[1]=parseFloat(t[1].replace(/%/,""))/100:t[1]=+t[1]):t[1]="*",[].concat(V(t))})).filter(function(t){return"*"===t[1]}).length;if(e>0){var r=(1-t.filter(function(t){return"*"!=t[1]&&1!=t[1]}).map(function(t){return t[1]}).reduce(function(t,e){return t+e},0))/e;t.forEach(function(e,n){"*"==e[1]&&n>0&&(t.length-1==n||(e[1]=r))})}return t}var Z={matches:G,convertMatches:z,convertMatchesArray:X,reverseMatches:Y,parse:q,parseGradient:K,trim:W,color_regexp:N,color_split:","};function J(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hex",a={r:o(e.r+(r.r-e.r)*n),g:o(e.g+(r.g-e.g)*n),b:o(e.b+(r.b-e.b)*n),a:o(e.a+(r.a-e.a)*n,100)};return t(a,a.a<1?"rgb":i)}function Q(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;if(!t)return[];"string"==typeof t&&(t=X(t));for(var r=(t=t||[]).length,n=[],i=0;i<r-1;i++)for(var o=0;o<e;o++)n.push(tt(t[i],t[i+1],o/e));return n}function tt(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hex";return J(q(t),q(e),r,n)}function et(t){return t=q(t),(Math.round(299*t.r)+Math.round(587*t.g)+Math.round(114*t.b))/1e3}function rt(e){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"h",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:9,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"rgb",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100,s=f(q(e)),u=(a-o)*l/n,c=[],h=1;h<=n;h++)s[r]=Math.abs((l-u*h)/l),c.push(t(M(s),i));return c}Q.parula=function(t){return Q(["#352a87","#0f5cdd","#00b5a6","#ffc337","#fdff00"],t)},Q.jet=function(t){return Q(["#00008f","#0020ff","#00ffff","#51ff77","#fdff00","#ff0000","#800000"],t)},Q.hsv=function(t){return Q(["#ff0000","#ffff00","#00ff00","#00ffff","#0000ff","#ff00ff","#ff0000"],t)},Q.hot=function(t){return Q(["#0b0000","#ff0000","#ffff00","#ffffff"],t)},Q.pink=function(t){return Q(["#1e0000","#bd7b7b","#e7e5b2","#ffffff"],t)},Q.bone=function(t){return Q(["#000000","#4a4a68","#a6c6c6","#ffffff"],t)},Q.copper=function(t){return Q(["#000000","#3d2618","#9d623e","#ffa167","#ffc77f"],t)};var nt={interpolateRGB:J,blend:tt,mix:function(t,e){return tt(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,arguments.length>3&&void 0!==arguments[3]?arguments[3]:"hex")},scale:Q,contrast:et,contrastColor:function(t){return et(t)>=128?"black":"white"},gradient:function(t){for(var e=[],r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:10)-((t=K(t)).length-1),n=r,i=1,o=t.length;i<o;i++){var a=t[i-1][0],l=t[i][0],s=1==i?t[i][1]:t[i][1]-t[i-1][1],u=i==t.length-1?n:Math.floor(s*r);e=e.concat(Q([a,l],u),[l]),n-=u}return e},scaleHSV:rt,scaleH:function(t){return rt(t,"h",arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgb",arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,arguments.length>4&&void 0!==arguments[4]?arguments[4]:360,1)},scaleS:function(t){return rt(t,"s",arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgb",arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,100)},scaleV:function(t){return rt(t,"v",arguments.length>1&&void 0!==arguments[1]?arguments[1]:9,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"rgb",arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,100)}};function it(t,e){if(t.length!==e.length)return!1;for(var r=0,n=t.length;r<n;++r)if(t[r]!==e[r])return!1;return!0}var ot={euclidean:function(t,e){for(var r=0,n=0,i=t.length;n<i;n++)r+=Math.pow(e[n]-t[n],2);return Math.sqrt(r)},manhattan:function(t,e){for(var r=0,n=0,i=t.length;n<i;n++)r+=Math.abs(e[n]-t[n]);return r},max:function(t,e){for(var r=0,n=0,i=t.length;n<i;n++)r=Math.max(r,Math.abs(e[n]-t[n]));return r}},at={linear:function(t,e){var r=[],n=Math.round(Math.random()*t),i=Math.floor(t/e);do{r.push(n),n=(n+i)%t}while(r.length<e);return r},shuffle:function(t,e){for(var r=[];r.length<e;){var n=Math.round(Math.random()*t);-1==r.indexOf(n)&&r.push(n)}return r}};function lt(t,e,r){var n=1/0,i=0;return e.forEach(function(e,o){var a=r(t,e);a<n&&(n=a,i=o)}),i}function st(t){if(!t.length)return[];for(var e=new Array(t[0].length),r=0,n=e.length;r<n;r++)e[r]=0;var i=0;for(n=t.length;i<n;i++)for(var o=t[i],a=i+1,l=0,s=o.length;l<s;l++)e[l]+=(o[l]-e[l])/a;return e=e.map(function(t){return Math.floor(t)})}function ut(t,e,r,n){for(var i=new Array(t),o=0;o<t;o++)i[o]=[];for(var a=0,l=e.length;a<l;a++){var s=e[a];i[lt(s,r,n)].push(s)}return i}function ct(t,e,r,n,i,o){for(var a=0;a<t;a++){var l=r[a],s=n[a],u=new Array(s.length);if(l.length>0)u=st(l);else u=e[Math.floor(o()*e.length)];i=!it(u,s),n[a]=u}return i}function ht(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"linear";t=t,e=e||Math.max(2,Math.ceil(Math.sqrt(t.length/2)));var o=r||"euclidean";"string"==typeof o&&(o=ot[o]);for(var a=0,l=function(){return(a=(9301*a+49297)%233280)/233280},s=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"linear";return at[r](t.length,e).map(function(e){return t[e]})}(t,e,i),u=!0,c=0;u;){if(u=ct(e,t,ut(e,t,s,o),s,!1,l),++c%n==0)break}return s}var ft={create:function(t,e){var r=document.createElement("canvas");return r.width=t||0,r.height=e||0,r},drawPixels:function(t){var e=this.create(t.width,t.height),r=e.getContext("2d"),n=r.getImageData(0,0,e.width,e.height);return n.data.set(t.pixels),r.putImageData(n,0,0),e},createHistogram:function(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{black:!0,red:!1,green:!1,blue:!1},o=this.create(t,e),a=o.getContext("2d");a.clearRect(0,0,t,e),a.fillStyle="white",a.fillRect(0,0,t,e),a.globalAlpha=.7;var l={black:!1};i.black?l.black=!1:l.black=!0,i.red?l.red=!1:l.red=!0,i.green?l.green=!1:l.green=!0,i.blue?l.blue=!1:l.blue=!0,Object.keys(r).forEach(function(n){if(!l[n]){var i=r[n],o=Math.max.apply(Math,i),s=t/i.length;a.fillStyle=n,i.forEach(function(t,r){var n=e*(t/o),i=r*s;a.fillRect(i,e-n,s,n)})}}),"function"==typeof n&&n(o)},getHistogram:function(t){for(var e,r,n=new Array(256),i=new Array(256),o=new Array(256),a=new Array(256),l=0;l<256;l++)n[l]=0,i[l]=0,o[l]=0,a[l]=0;return r=function(t,e){var r=Math.round(He.brightness(t[e],t[e+1],t[e+2]));n[r]++,i[t[e]]++,o[t[e+1]]++,a[t[e+2]]++},function(t,e){for(var r=0;r<t;r+=4)e(r)}((e=t).pixels.length,function(t){r(e.pixels,t)}),{black:n,red:i,green:o,blue:a}},getBitmap:function(t,e){var r=this.drawPixels(t);return{pixels:r.getContext("2d").getImageData(e.x||0,e.y||0,e.width||r.width,e.height||r.height).data,width:e.width,height:e.height}},putBitmap:function(t,e,r){var n=this.drawPixels(t),i=this.drawPixels(e),o=n.getContext("2d");return o.drawImage(i,r.x,r.y),t.pixels=o.getImageData(0,0,t.width,t.height).data,t}},vt=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};D(this,t),this.isLoaded=!1,this.imageUrl=e,this.opt=r,this.initialize()}return B(t,[{key:"initialize",value:function(){this.canvas=this.createCanvas(),this.context=this.canvas.getContext("2d")}},{key:"createCanvas",value:function(){return document.createElement("canvas")}},{key:"load",value:function(t){this.loadImage(t)}},{key:"loadImage",value:function(t){var e=this,r=this.context;this.newImage=new Image;var n=this.newImage;n.onload=function(){var i=n.height/n.width;e.opt.canvasWidth&&e.opt.canvasHeight?(e.canvas.width=e.opt.canvasWidth,e.canvas.height=e.opt.canvasHeight):(e.canvas.width=e.opt.maxWidth?e.opt.maxWidth:n.width,e.canvas.height=e.canvas.width*i),r.drawImage(n,0,0,n.width,n.height,0,0,e.canvas.width,e.canvas.height),e.isLoaded=!0,t&&t()},this.getImageUrl(function(t){n.src=t})}},{key:"load",value:function(t){var e=this;this.newImage=new Image;var r=this.newImage;r.onload=function(){e.isLoaded=!0,t&&t()},this.getImageUrl(function(t){r.src=t})}},{key:"getImageUrl",value:function(t){if("string"==typeof this.imageUrl)return t(this.imageUrl);if(this.imageUrl instanceof Blob){var e=new FileReader;e.onload=function(e){t(e.target.result)},e.readAsDataURL(this.imageUrl)}}},{key:"getRGBA",value:function(t,e,r,n){return[t,e,r,n]}},{key:"toArray",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=this.context.getImageData(0,0,this.canvas.width,this.canvas.height),i=n.width,o=n.height,a=new Uint8ClampedArray(n.data);t||(t=function(t,e){e(t)}),t({pixels:a,width:i,height:o},function(t){var n=ft.drawPixels(t);"canvas"==r.returnTo?e(n):e(n.toDataURL(r.outputFormat||"image/png"))},r)}},{key:"toHistogram",value:function(t){var e=this.context.getImageData(0,0,this.canvas.width,this.canvas.height),r=e.width,n=e.height,i={pixels:new Uint8ClampedArray(e.data),width:r,height:n};return ft.getHistogram(i)}},{key:"toRGB",value:function(){for(var t=this.context.getImageData(0,0,this.canvas.width,this.canvas.height).data,e=[],r=0,n=t.length;r<n;r+=4)e[e.length]=[t[r+0],t[r+1],t[r+2],t[r+3]];return e}}]),t}(),gt={identity:function(){return[1,0,0,0,1,0,0,0,1]},stretching:function(t){return[t,0,0,0,1,0,0,0,1]},squeezing:function(t){return[t,0,0,0,1/t,0,0,0,1]},scale:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return[t=t||0===t?t:1,0,0,0,e=e||0===e?e:1,0,0,0,1]},scaleX:function(t){return this.scale(t)},scaleY:function(t){return this.scale(1,t)},translate:function(t,e){return[1,0,t,0,1,e,0,0,1]},rotate:function(t){var e=this.radian(t);return[Math.cos(e),-Math.sin(e),0,Math.sin(e),Math.cos(e),0,0,0,1]},rotate90:function(){return[0,-1,0,1,0,0,0,0,1]},rotate180:function(){return[-1,0,0,0,-1,0,0,0,1]},rotate270:function(){return[0,1,0,-1,0,0,0,0,1]},radian:function(t){return t*Math.PI/180},skew:function(t,e){var r=this.radian(t),n=this.radian(e);return[1,Math.tan(r),0,Math.tan(n),1,0,0,0,1]},skewX:function(t){var e=this.radian(t);return[1,Math.tan(e),0,0,1,0,0,0,1]},skewY:function(t){var e=this.radian(t);return[1,0,0,Math.tan(e),1,0,0,0,1]},shear1:function(t){return[1,-Math.tan(this.radian(t)/2),0,0,1,0,0,0,1]},shear2:function(t){return[1,0,0,Math.sin(this.radian(t)),1,0,0,0,1]}},dt={CONSTANT:gt,radian:function(t){return gt.radian(t)},multiply:function(t,e){return[t[0]*e[0]+t[1]*e[1]+t[2]*e[2],t[3]*e[0]+t[4]*e[1]+t[5]*e[2],t[6]*e[0]+t[7]*e[1]+t[8]*e[2]]},identity:function(t){return this.multiply(gt.identity(),t)},translate:function(t,e,r){return this.multiply(gt.translate(t,e),r)},rotate:function(t,e){return this.multiply(gt.rotate(t),e)},shear1:function(t,e){return this.multiply(gt.shear1(t),e)},shear2:function(t,e){return this.multiply(gt.shear2(t),e)},rotateShear:function(t,e){var r=e;return r=this.shear1(t,r),r=this.shear2(t,r),r=this.shear1(t,r)}};function pt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"center",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"center";return function(n,i){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=Gt(n.pixels.length,n.width,n.height),l=n.width,s=n.height;"center"==e&&(e=Math.floor(l/2)),"center"==r&&(r=Math.floor(s/2));var u=dt.CONSTANT.translate(-e,-r),c=dt.CONSTANT.translate(e,r),h=dt.CONSTANT.shear1(t),f=dt.CONSTANT.shear2(t);Qt(function(t,e,r,i){var o=dt.multiply(u,[r,i,1]);o=dt.multiply(h,o).map(Math.round),o=dt.multiply(f,o).map(Math.round),o=dt.multiply(h,o).map(Math.round),o=dt.multiply(c,o);var a=L(o,2),v=a[0],g=a[1];v<0||(g<0||v>l-1||g>s-1||re(t,g*l+v<<2,n.pixels,e))})(a,function(){i(a)},o)}}function mt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=Yt(t),i=(e=Yt(e))/100,o=r;return Kt(function(){var t=i*Math.ceil(.2126*$r+.7152*$g+.0722*$b)>=n?255:0;if(o)0==t&&($r=0,$g=0,$b=0);else{var e=Math.round(t);$r=e,$g=e,$b=e}},{$C:i,$scale:n,$hasColor:o})}function yt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([1,2,1,2,4,2,1,2,1],1/16*((t=Yt(t))/100)))}function bt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([1,4,6,4,1,4,16,24,16,4,6,24,36,24,6,4,16,24,16,4,1,4,6,4,1],1/256*((t=Yt(t))/100)))}function kt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return t=Yt(t),ne([5,5,5,-3,0,-3,-3,-3,-3])}function Ct(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return t=Yt(t),ne([5,-3,-3,5,0,-3,5,-3,-3])}function $t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,24,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],(t=Yt(t))/100))}function xt(){return ne(Ht([1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1],1/9))}function _t(){return ne(Ht([1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1],1/9))}function wt(){return ne(Ht([1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1],1/9))}function Mt(){return ne([-1,-2,-1,0,0,0,1,2,1])}function Ot(){return ne([-1,0,1,-2,0,2,-1,0,1])}var St=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],Et=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function Tt(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function At(t,e,r){return r?function(t,e,r,n){if(isNaN(n)||n<1)return t;n|=0;var i,o,a,l,s,u,c,h,f,v,g,d,p,m,y,b,k,C,$,x,_,w,M,O,S=t.pixels,E=t.width,T=t.height,A=n+n+1,I=E-1,P=T-1,D=n+1,B=D*(D+1)/2,R=new Tt,j=R;for(a=1;a<A;a++)if(j=j.next=new Tt,a==D)var F=j;j.next=R;var H=null,U=null;c=u=0;var L=St[n],V=Et[n];for(o=0;o<T;o++){for(b=k=C=$=h=f=v=g=0,d=D*(x=S[u]),p=D*(_=S[u+1]),m=D*(w=S[u+2]),y=D*(M=S[u+3]),h+=B*x,f+=B*_,v+=B*w,g+=B*M,j=R,a=0;a<D;a++)j.r=x,j.g=_,j.b=w,j.a=M,j=j.next;for(a=1;a<D;a++)l=u+((I<a?I:a)<<2),h+=(j.r=x=S[l])*(O=D-a),f+=(j.g=_=S[l+1])*O,v+=(j.b=w=S[l+2])*O,g+=(j.a=M=S[l+3])*O,b+=x,k+=_,C+=w,$+=M,j=j.next;for(H=R,U=F,i=0;i<E;i++)S[u+3]=M=g*L>>V,0!=M?(M=255/M,S[u]=(h*L>>V)*M,S[u+1]=(f*L>>V)*M,S[u+2]=(v*L>>V)*M):S[u]=S[u+1]=S[u+2]=0,h-=d,f-=p,v-=m,g-=y,d-=H.r,p-=H.g,m-=H.b,y-=H.a,l=c+((l=i+n+1)<I?l:I)<<2,b+=H.r=S[l],k+=H.g=S[l+1],C+=H.b=S[l+2],$+=H.a=S[l+3],h+=b,f+=k,v+=C,g+=$,H=H.next,d+=x=U.r,p+=_=U.g,m+=w=U.b,y+=M=U.a,b-=x,k-=_,C-=w,$-=M,U=U.next,u+=4;c+=E}for(i=0;i<E;i++){for(k=C=$=b=f=v=g=h=0,d=D*(x=S[u=i<<2]),p=D*(_=S[u+1]),m=D*(w=S[u+2]),y=D*(M=S[u+3]),h+=B*x,f+=B*_,v+=B*w,g+=B*M,j=R,a=0;a<D;a++)j.r=x,j.g=_,j.b=w,j.a=M,j=j.next;for(s=E,a=1;a<=n;a++)u=s+i<<2,h+=(j.r=x=S[u])*(O=D-a),f+=(j.g=_=S[u+1])*O,v+=(j.b=w=S[u+2])*O,g+=(j.a=M=S[u+3])*O,b+=x,k+=_,C+=w,$+=M,j=j.next,a<P&&(s+=E);for(u=i,H=R,U=F,o=0;o<T;o++)S[(l=u<<2)+3]=M=g*L>>V,M>0?(M=255/M,S[l]=(h*L>>V)*M,S[l+1]=(f*L>>V)*M,S[l+2]=(v*L>>V)*M):S[l]=S[l+1]=S[l+2]=0,h-=d,f-=p,v-=m,g-=y,d-=H.r,p-=H.g,m-=H.b,y-=H.a,l=i+((l=o+D)<P?l:P)*E<<2,h+=b+=H.r=S[l],f+=k+=H.g=S[l+1],v+=C+=H.b=S[l+2],g+=$+=H.a=S[l+3],H=H.next,d+=x=U.r,p+=_=U.g,m+=w=U.b,y+=M=U.a,b-=x,k-=_,C-=w,$-=M,U=U.next,u+=E}return t}(t,0,0,e):stackBlurCanvasRGB(t,0,0,e)}function It(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t=Yt(t),function(r,n){n(At(r,t,e))}}function Pt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:256;return ne(Ht([1,4,6,4,1,4,16,24,16,4,6,24,-476,24,6,4,16,24,16,4,1,4,6,4,1],-1/(t=Yt(t))))}var Dt,Bt=j({},{crop:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],n=arguments[3],i=Gt(r*n*4,r,n);return function(o,a){for(var l=e,s=0;l<n;l++,s++)for(var u=t,c=0;u<r;u++,c++)i.pixels[s*r*c]=o.pixels[l*r*u];a(i)}},resize:function(t,e){return function(r,n){var i=ft.drawPixels(r),o=i.getContext("2d");i.width=t,i.height=e,n({pixels:new Uint8ClampedArray(o.getImageData(0,0,t,e).data),width:t,height:e})}},flipH:function(){return function(t,e){for(var r=t.width,n=t.height,i=r%2==1?Math.floor(r/2):r/2,o=0;o<n;o++)for(var a=0;a<i;a++){var l=o*r+a<<2,s=o*r+(r-1-a)<<2;Jt(t.pixels,l,s)}e(t)}},flipV:function(){return function(t,e){for(var r=t.width,n=t.height,i=n%2==1?Math.floor(n/2):n/2,o=0;o<i;o++)for(var a=0;a<r;a++){var l=o*r+a<<2,s=(n-1-o)*r+a<<2;Jt(t.pixels,l,s)}e(t)}},rotate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t=Yt(t),t%=360,function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(0==t)return e;if(90==t||270==t)var i=Gt(e.pixels.length,e.height,e.width);else{if(180!=t)return pt(t)(e,r,n);i=Gt(e.pixels.length,e.width,e.height)}Qt(function(r,n,o,a){if(90==t)var l=o*i.width+(i.width-1-a)<<2;else 270==t?l=(i.height-1-o)*i.width+a<<2:180==t&&(l=(i.height-1-a)*i.width+(i.width-1-o)<<2);re(i.pixels,l,e.pixels,n)})(e,function(){r(i)},n)}},rotateDegree:pt,histogram:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"gray",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[],n=0;n<e.length-1;n++)for(var i=e[n],o=e[n+1],a=o[0]-i[0],l=(o[1]-i[1])/a,s=0,u=i[0];s<a;s++,u++)r[u]=i[1]+s*l;return r[255]=255,Kt("red"===t?function(){$r=r[$r]}:"green"===t?function(){$g=r[$g]}:"blue"===t?function(){$b=r[$b]}:function(){var t=Color.RGBtoYCrCb($r,$g,$b),e=Color.YCrCbtoRGB(clamp(r[clamp(t.y)]),t.cr,t.cb,0);$r=e.r,$g=e.g,$b=e.b},{},{$realPoints:r})},"rotate-degree":pt},{bitonal:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,n=He.parse(t),i=He.parse(e),o=r;return Kt(function(){var t=$r+$g+$b<=o?n:i;$r=t.r,$g=t.g,$b=t.b},{$threshold:o},{$darkColor:n,$lightColor:i})},brightness:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t=Yt(t);var e=Math.floor(t/100*255);return Kt(function(){$r+=e,$g+=e,$b+=e},{$C:e})},brownie:function(){var t=[.5997023498159715,.34553243048391263,-.2708298674538042,0,-.037703249837783157,.8609577587992641,.15059552388459913,0,.24113635128153335,-.07441037908422492,.44972182064877153,0,0,0,0,1];return Kt(function(){$r=t[0]*$r+t[1]*$g+t[2]*$b+t[3]*$a,$g=t[4]*$r+t[5]*$g+t[6]*$b+t[7]*$a,$b=t[8]*$r+t[9]*$g+t[10]*$b+t[11]*$a,$a=t[12]*$r+t[13]*$g+t[14]*$b+t[15]*$a},{$matrix:t})},clip:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t=Yt(t);var e=2.55*Math.abs(t);return Kt(function(){$r=$r>255-e?255:0,$g=$g>255-e?255:0,$b=$b>255-e?255:0},{$C:e})},contrast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t=Yt(t);var e=Math.max((128+t)/128,0);return Kt(function(){$r*=e,$g*=e,$b*=e},{$C:e})},gamma:function(){var t=Yt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);return Kt(function(){$r=255*Math.pow($r/255,t),$g=255*Math.pow($g/255,t),$b=255*Math.pow($b/255,t)},{$C:t})},gradient:function(){var t=[].concat(Array.prototype.slice.call(arguments));1===t.length&&"string"==typeof t[0]&&(t=He.convertMatchesArray(t[0]));var e=(t=t.map(function(t){return He.matches(t).length?{type:"param",value:t}:{type:"scale",value:t}})).filter(function(t){return"scale"==t.type})[0];e=e?+e.value:256,t=t.filter(function(t){return"param"==t.type}).map(function(t){return t.value}).join(",");var r=He.gradient(t,e).map(function(t){var e=He.parse(t);return{r:e.r,g:e.g,b:e.b,a:e.a}});return Kt(function(){var t=clamp(Math.ceil(.2126*$r+.7152*$g+.0722*$b)),n=clamp(Math.floor(t*(e/256))),i=r[n];$r=i.r,$g=i.g,$b=i.b,$a=clamp(Math.floor(256*i.a))},{},{$colors:r,$scale:e})},grayscale:function(t){var e=(t=Yt(t))/100;e>1&&(e=1);var r=[.2126+.7874*(1-e),.7152-.7152*(1-e),.0722-.0722*(1-e),0,.2126-.2126*(1-e),.7152+.2848*(1-e),.0722-.0722*(1-e),0,.2126-.2126*(1-e),.7152-.7152*(1-e),.0722+.9278*(1-e),0,0,0,0,1];return Kt(function(){$r=r[0]*$r+r[1]*$g+r[2]*$b+r[3]*$a,$g=r[4]*$r+r[5]*$g+r[6]*$b+r[7]*$a,$b=r[8]*$r+r[9]*$g+r[10]*$b+r[11]*$a,$a=r[12]*$r+r[13]*$g+r[14]*$b+r[15]*$a},{$matrix:r})},hue:function(){var t=Yt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:360);return Kt(function(){var e=Color.RGBtoHSV($r,$g,$b),r=e.h;r+=Math.abs(t),r%=360,e.h=r;var n=Color.HSVtoRGB(e);$r=n.r,$g=n.g,$b=n.b},{$C:t})},invert:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=(t=Yt(t))/100;return Kt(function(){$r=(255-$r)*e,$g=(255-$g)*e,$b=(255-$b)*e},{$C:e})},kodachrome:function(){var t=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,0,0,0,1];return Kt(function(){$r=t[0]*$r+t[1]*$g+t[2]*$b+t[3]*$a,$g=t[4]*$r+t[5]*$g+t[6]*$b+t[7]*$a,$b=t[8]*$r+t[9]*$g+t[10]*$b+t[11]*$a,$a=t[12]*$r+t[13]*$g+t[14]*$b+t[15]*$a},{$matrix:t})},matrix:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,s=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,c=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,h=arguments.length>11&&void 0!==arguments[11]?arguments[11]:0,f=arguments.length>12&&void 0!==arguments[12]?arguments[12]:0,v=arguments.length>13&&void 0!==arguments[13]?arguments[13]:0,g=arguments.length>14&&void 0!==arguments[14]?arguments[14]:0,d=arguments.length>15&&void 0!==arguments[15]?arguments[15]:0,p=[t,e,r,n,i,o,a,l,s,u,c,h,f,v,g,d];return Kt(function(){$r=p[0]*$r+p[1]*a+p[2]*e+p[3]*t,a=p[4]*$r+p[5]*a+p[6]*e+p[7]*t,e=p[8]*$r+p[9]*a+p[10]*e+p[11]*t,t=p[12]*$r+p[13]*a+p[14]*e+p[15]*t},{$matrix:p})},noise:function(){var t=Yt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);return Kt(function(){var e=5*Math.abs(t),r=-e,n=e,i=Math.round(r+Math.random()*(n-r));$r+=i,$g+=i,$b+=i},{$C:t})},opacity:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=(t=Yt(t))/100;return Kt(function(){$a*=e},{$C:e})},polaroid:function(){var t=[1.438,-.062,-.062,0,-.122,1.378,-.122,0,-.016,-.016,1.483,0,0,0,0,1];return Kt(function(){$r=t[0]*$r+t[1]*$g+t[2]*$b+t[3]*$a,$g=t[4]*$r+t[5]*$g+t[6]*$b+t[7]*$a,$b=t[8]*$r+t[9]*$g+t[10]*$b+t[11]*$a,$a=t[12]*$r+t[13]*$g+t[14]*$b+t[15]*$a},{$matrix:t})},saturation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,e=(t=Yt(t))/100,r=1-Math.abs(e),n=[r,0,0,0,0,r,0,0,0,0,r,0,0,0,0,r];return Kt(function(){$r=n[0]*$r+n[1]*$g+n[2]*$b+n[3]*$a,$g=n[4]*$r+n[5]*$g+n[6]*$b+n[7]*$a,$b=n[8]*$r+n[9]*$g+n[10]*$b+n[11]*$a,$a=n[12]*$r+n[13]*$g+n[14]*$b+n[15]*$a},{$matrix:n})},sepia:function(){var t=Yt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);t>1&&(t=1);var e=[.393+.607*(1-t),.769-.769*(1-t),.189-.189*(1-t),0,.349-.349*(1-t),.686+.314*(1-t),.168-.168*(1-t),0,.272-.272*(1-t),.534-.534*(1-t),.131+.869*(1-t),0,0,0,0,1];return Kt(function(){$r=e[0]*$r+e[1]*$g+e[2]*$b+e[3]*$a,$g=e[4]*$r+e[5]*$g+e[6]*$b+e[7]*$a,$b=e[8]*$r+e[9]*$g+e[10]*$b+e[11]*$a,$a=e[12]*$r+e[13]*$g+e[14]*$b+e[15]*$a},{$matrix:e})},shade:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=Yt(t),i=Yt(e),o=Yt(r);return Kt(function(){$r*=n,$g*=i,$b*=o},{$redValue:n,$greenValue:i,$blueValue:o})},shift:function(){var t=[1.438,-.062,-.062,0,-.122,1.378,-.122,0,-.016,-.016,1.483,0,0,0,0,1];return Kt(function(){$r=t[0]*$r+t[1]*$g+t[2]*$b+t[3]*$a,$g=t[4]*$r+t[5]*$g+t[6]*$b+t[7]*$a,$b=t[8]*$r+t[9]*$g+t[10]*$b+t[11]*$a,$a=t[12]*$r+t[13]*$g+t[14]*$b+t[15]*$a},{$matrix:t})},solarize:function(t,e,r){var n=Yt(t),i=Yt(e),o=Yt(r);return Kt(function(){$r=$r<n?255-$r:$r,$g=$g<i?255-$g:$g,$b=$b<o?255-$b:$b},{$redValue:n,$greenValue:i,$blueValue:o})},technicolor:function(){var t=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.231103377548616,-.7501899197440212,1.847597816108189,0,0,0,0,1];return Kt(function(){$r=t[0]*$r+t[1]*$g+t[2]*$b+t[3]*$a,$g=t[4]*$r+t[5]*$g+t[6]*$b+t[7]*$a,$b=t[8]*$r+t[9]*$g+t[10]*$b+t[11]*$a,$a=t[12]*$r+t[13]*$g+t[14]*$b+t[15]*$a},{$matrix:t})},threshold:function(){return mt(arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,!1)},"threshold-color":mt,tint:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=Yt(t),i=Yt(e),o=Yt(r);return Kt(function(){$r+=(255-$r)*n,$g+=(255-$g)*i,$b+=(255-$b)*o},{$redTint:n,$greenTint:i,$blueTint:o})}},{blur:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;return ne(te(t=Yt(t)))},emboss:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;return ne([-2*(t=Yt(t)),-t,0,-t,1,t,0,t,2*t])},gaussianBlur:yt,"gaussian-blur":yt,gaussianBlur5x:bt,"gaussian-blur-5x":bt,grayscale2:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([.3,.3,.3,0,0,.59,.59,.59,0,0,.11,.11,.11,0,0,0,0,0,0,0,0,0,0,0,0],(t=Yt(t))/100))},normal:function(){return ne([0,0,0,0,1,0,0,0,0])},kirschHorizontal:kt,"kirsch-horizontal":kt,kirschVertical:Ct,"kirsch-vertical":Ct,laplacian:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([-1,-1,-1,-1,8,-1,-1,-1,-1],(t=Yt(t))/100))},laplacian5x:$t,"laplacian-5x":$t,motionBlur:xt,"motion-blur":xt,motionBlur2:_t,"motion-blur-2":_t,motionBlur3:wt,"motion-blur-3":wt,negative:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([-1,0,0,0,0,0,-1,0,0,0,0,0,-1,0,0,0,0,0,1,0,1,1,1,1,1],(t=Yt(t))/100))},sepia2:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([.393,.349,.272,0,0,.769,.686,.534,0,0,.189,.168,.131,0,0,0,0,0,0,0,0,0,0,0,0],(t=Yt(t))/100))},sharpen:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([0,-1,0,-1,5,-1,0,-1,0],(t=Yt(t))/100))},sobelHorizontal:Mt,"sobel-horizontal":Mt,sobelVertical:Ot,"sobel-vertical":Ot,stackBlur:It,"stack-blur":It,transparency:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100;return ne(Ht([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,.3,0,0,0,0,0,1],(t=Yt(t))/100))},unsharpMasking:Pt,"unsharp-masking":Pt},{kirsch:function(){return le("kirsch-horizontal kirsch-vertical")},sobel:function(){return le("sobel-horizontal sobel-vertical")},vintage:function(){return le("brightness(15) saturation(-20) gamma(1.8)")}}),Rt=0,jt=(R(Dt={partial:he,multi:ue,merge:ce,weight:Ht,repeat:Ut,colorMatrix:function(t,e,r){var n=t[e],i=t[e+1],o=t[e+2],a=t[e+3];ee(t,e,r[0]*n+r[1]*i+r[2]*o+r[3]*a,r[4]*n+r[5]*i+r[6]*o+r[7]*a,r[8]*n+r[9]*i+r[10]*o+r[11]*a,r[12]*n+r[13]*i+r[14]*o+r[15]*a)},each:Vt,eachXY:Nt,createRandomCount:function(){return[9,16,25,36,49,64,81,100].sort(function(t,e){return.5-Math.random()})[0]},createRandRange:function(t,e,r){for(var n=[],i=1;i<=r;i++){var o=Math.random()*(e-t)+t,a=Math.floor(10*Math.random())%2==0?-1:1;n.push(a*o)}n.sort();var l=Math.floor(r>>1),s=n[l];return n[l]=n[0],n[0]=s,n},createBitmap:Gt,createBlurMatrix:te,pack:function(t){return function(e,r){Vt(e.pixels.length,function(r,n){t(e.pixels,r,n,e.pixels[r],e.pixels[r+1],e.pixels[r+2],e.pixels[r+3])},function(){r(e)})}},packXY:Qt,pixel:Kt,getBitmap:zt,putBitmap:Xt,radian:function(t){return dt.CONSTANT.radian(t)},convolution:ne,parseParamNumber:Yt,filter:le,clamp:ae,fillColor:ee,fillPixelColor:re},"multi",ue),R(Dt,"merge",ce),R(Dt,"matches",ie),R(Dt,"parseFilter",oe),R(Dt,"partial",he),Dt),Ft=jt;function Ht(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t.map(function(t){return t*e})}function Ut(t,e){for(var r=new Array(e),n=0;n<e;n++)r[n]=t;return r}function Lt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments[3],i=arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1e4,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"full",l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:50,s=e,u=function(t){setTimeout(t,0)};function c(){for(var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,e=[].concat(V(Array(t))).map(function(t){return"cri = ri + i * s; if (cri >= mx) return {currentRunIndex: cri, i: null}; c(cri); i++;"}).join("\n");return new Function("ri","i","s","mx","c","\n            let cri = ri;\n            \n            "+e+"\n            \n            return {currentRunIndex: cri, i: i} \n        ")}(l),a=s,h={},f=0;f<o;){if(null==(h=e(s,f,r,t,n)).i){a=h.currentRunIndex;break}f=h.i,a=h.currentRunIndex}!function(e){e?s=e:s+=r;if(s>=t)return void i();u?u(c):c()}(a)}"requestAnimationFrame"==a&&(u=requestAnimationFrame,o=1e3),"full"==a&&(u=null,o=t),c()}function Vt(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};Lt(t,0,4,function(t){e(t,t>>2)},function(){r()},n.functionDumpCount,n.frameTimer,n.loopCount)}function Nt(t,e,r,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};Lt(t,0,4,function(t){var n=t>>2;r(t,n%e,Math.floor(n/e))},function(){n()},i.functionDumpCount,i.frameTimer,i.loopCount)}function Gt(t,e,r){return{pixels:new Uint8ClampedArray(t),width:e,height:r}}function zt(t,e){return ft.getBitmap(t,e)}function Xt(t,e,r){return ft.putBitmap(t,e,r)}function Yt(t){return"string"==typeof t&&(t=(t=t.replace(/deg/,"")).replace(/px/,"")),+t}var Wt=/(([\w_\-]+)(\(([^\)]*)\))?)+/gi;function qt(t){var e,r,n,i,o,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e={},r=[{callback:t,context:a,rootContext:l}].map(function(t){var r=[];Object.keys(t.context).forEach(function(t,e){r[t]="n$"+Rt+++t+"$"}),Object.keys(t.rootContext).forEach(function(n,i){r[n]="r$"+Rt+++n+"$",e[r[n]]=t.rootContext[n]});var n=Object.keys(t.context).filter(function(e){return"number"!=typeof t.context[e]&&"string"!=typeof t.context[e]&&(!Array.isArray(t.context[e])||"number"!=typeof t.context[e][0]&&"string"!=typeof t.context[e][0])}).map(function(e,n){return[r[e],JSON.stringify(t.context[e])].join(" = ")}),i=t.callback.toString().split("{");return i.shift(),(i=(i=i.join("{")).split("}")).pop(),i=i.join("}"),Object.keys(r).forEach(function(e){var n=r[e];"number"==typeof t.context[e]||"string"==typeof t.context[e]?i=i.replace(new RegExp("\\"+e,"g"),t.context[e]):!Array.isArray(t.context[e])||"number"!=typeof t.context[e][0]&&"string"!=typeof t.context[e][0]?i=i.replace(new RegExp("\\"+e,"g"),n):t.context[e].forEach(function(t,r){i=i.replace(new RegExp("\\"+e+"\\["+r+"\\]","g"),t)})}),{preCallbackString:i,preContext:n}}),n=r.map(function(t,e){return t.preContext.length?"const "+t.preContext+";":""}).join("\n\n"),i=r.map(function(t){return t.preCallbackString}).join("\n\n"),(o=new Function("$pixels","$pixelIndex","$clamp","$Color"," \n    let $r = $pixels[$pixelIndex], $g = $pixels[$pixelIndex+1], $b = $pixels[$pixelIndex+2], $a = $pixels[$pixelIndex+3];\n\n    "+n+"\n\n    "+i+"\n    \n    $pixels[$pixelIndex] = $r\n    $pixels[$pixelIndex+1] = $g \n    $pixels[$pixelIndex+2] = $b   \n    $pixels[$pixelIndex+3] = $a   \n    ")).$preCallbackString=i,o.$preContext=n,o.rootContextObject=e,o}function Kt(t){var e=qt(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}),r=function(t,e){};return r.userFunction=e,r}var Zt=[0,1,2,3];function Jt(t,e,r){Zt.forEach(function(n){var i=t[e+n];t[e+n]=t[r+n],t[r+n]=i})}function Qt(t){return function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Nt(e.pixels.length,e.width,function(r,n,i){t(e.pixels,r,n,i)},function(){r(e)},n)}}function te(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,e=Math.pow(t,2);return Ut(1/e,e)}function ee(t,e,r,n,i,o){if(3==arguments.length){var a=arguments[2];r=a.r,n=a.g,i=a.b,o=a.a}"number"==typeof r&&(t[e]=r),"number"==typeof n&&(t[e+1]=n),"number"==typeof i&&(t[e+2]=i),"number"==typeof o&&(t[e+3]=o)}function re(t,e,r,n){ee(t,e,r[n],r[n+1],r[n+2],r[n+3])}function ne(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:255;return e=t.map(function(t,e){return[]}),t.forEach(function(t,i){if(0!=t){var o=e[i];for(i=r;i<=n;i++)o[i]=t*i}}),e}(t);return function(n,i){var o=Math.round(Math.sqrt(t.length)),a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=t.width+e,n=t.height+e;return{pixels:new Uint8ClampedArray(r*n*4),width:r,height:n}}(n,2*o);!function(t,e,r,n){for(var i=e.pixels.length/4,o=0,a=0,l=0,s=0,u=0,c=0,h=0;h<i;h++)l=h%e.width,a=n+(s=Math.floor(h/e.width)),(o=r+l)>t.width||a>t.height||(u=s*e.width+l<<2,c=a*t.width+o<<2,t.pixels[c]=e.pixels[u],t.pixels[c+1]=e.pixels[u+1],t.pixels[c+2]=e.pixels[u+2],t.pixels[c+3]=e.pixels[u+3])}(a,n,o,o);for(var l=Gt(a.pixels.length,a.width,a.height),s=Gt(n.pixels.length,n.width,n.height),u=function(t,e,r,n,i){var o=Math.round(Math.sqrt(t.length)),a=Math.floor(o/2),l=i?1:0,s="let r = 0, g = 0, b = 0, a = 0, scy = 0, scx =0, si = 0; ",u=[],c=[],h=[],f=[];t.forEach(function(t,e){var n=Math.floor(e/o)-a,i=e%o-a;0!=t&&(u.push("$t["+e+"][$sp[(($sy + ("+n+")) * "+r+" + ($sx + ("+i+"))) * 4]]"),c.push("$t["+e+"][$sp[(($sy + ("+n+")) * "+r+" + ($sx + ("+i+"))) * 4 + 1]]"),h.push("$t["+e+"][$sp[(($sy + ("+n+")) * "+r+" + ($sx + ("+i+"))) * 4 + 2]]"),f.push("$t["+e+"][$sp[(($sy + ("+n+")) * "+r+" + ($sx + ("+i+"))) * 4 + 3]]"))}),s+="r = "+u.join(" + ")+"; g = "+c.join(" + ")+"; b = "+h.join(" + ")+"; a = "+f.join(" + ")+";",s+="$dp[$di] = r; $dp[$di+1] = g;$dp[$di+2] = b;$dp[$di+3] = a + ("+l+")*(255-a); ";var v=new Function("$dp","$sp","$di","$sx","$sy","$t",s);return function(t,r,n,i,o){v(t,r,n,i,o,e)}}(t,r,a.width,a.height,e),c=n.pixels.length/4,h=0;h<c;h++){var f=h,v=f%n.width+o,g=Math.floor(f/n.width)+o;u(l.pixels,a.pixels,4*(g*a.width+v),v,g)}!function(t,e,r,n){for(var i=e.pixels.length>>2,o=0,a=0,l=0,s=0,u=0,c=0,h=0;h<i;h++)l=h%e.width,a=n+(s=Math.floor(h/e.width)),(o=r+l)>t.width||a>t.height||(u=a*t.width+o<<2,c=s*e.width+l<<2,e.pixels[c]=t.pixels[u],e.pixels[c+1]=t.pixels[u+1],e.pixels[c+2]=t.pixels[u+2],e.pixels[c+3]=t.pixels[u+3])}(l,s,o,o),i(s)}}function ie(t){var e=He.convertMatches(t),r=e.str.match(Wt),n=[];if(!r)return n;var i={next:0};return n=(n=r.map(function(t){return{filter:t,origin:He.reverseMatches(t,e.matches)}})).map(function(e){var r=t.indexOf(e.origin,i.next);return e.startIndex=r,e.endIndex=r+e.origin.length,e.arr=oe(e.origin),i.next=e.endIndex,e}).filter(function(t){return!!t.arr.length})}function oe(t){var e=He.convertMatches(t),r=e.str.match(Wt);if(!r[0])return[];var n=r[0].split("("),i=n.shift(),o=[];return n.length&&(o=n.shift().split(")")[0].split(",").map(function(t){return He.reverseMatches(t,e.matches)})),[i].concat(V(o)).map(He.trim)}function ae(t){return Math.min(255,t)}function le(t){return ce(ie(t).map(function(t){return t.arr}))}function se(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=[],r=[],n=0,i=t.length;n<i;n++){var o=t[n];o.userFunction?r.push(o):(r.length&&e.push([].concat(V(r))),e.push(o),r=[])}return r.length&&e.push([].concat(V(r))),e.forEach(function(t,r){var n;Array.isArray(t)&&(e[r]=(n=function(t){var e=t.map(function(t){return" \n            "+t.userFunction.$preContext+"\n\n            "+t.userFunction.$preCallbackString+"\n\n            $r = clamp($r); $g = clamp($g); $b = clamp($b); $a = clamp($a);\n        "}).join("\n\n"),r={clamp:ae,Color:He};t.forEach(function(t){Object.assign(r,t.userFunction.rootContextObject)});var n="const "+Object.keys(r).map(function(t){return" "+t+" = $rc."+t+" "}).join(","),i=new Function("$p","$pi","$rc"," \n    let $r = $p[$pi], $g = $p[$pi+1], $b = $p[$pi+2], $a = $p[$pi+3];\n    \n    "+n+"\n\n    "+e+"\n    \n    $p[$pi] = $r; $p[$pi+1] = $g; $p[$pi+2] = $b; $p[$pi+3] = $a;\n    ");return function(t,e){i(t,e,r)}}(t),function(t,e){for(var r=0,i=t.pixels.length;r<i;r+=4)n(t.pixels,r);e(t)}))}),e}function ue(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=(e=se(e=e.map(function(t){return function(t){if("function"==typeof t)return t;"string"==typeof t&&(t=[t]);var e=(t=t.slice(0)).shift();if("function"==typeof e)return e;var r=t,n=Bt[e]||Ft[e];if(!n)throw new Error(e+" is not filter. please check filter name.");return n.apply(n,r)}(t)}).filter(function(t){return t}))).length;return function(t,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t,a=0;function l(){e[a].call(null,o,function(t){o=t,function(){if(++a>=n)return void r(o);l()}()},i)}l()}}function ce(t){return ue.apply(void 0,V(t))}function he(t){for(var e=null,r=arguments.length,n=Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return e=1==n.length&&"string"==typeof n[0]?le(n[0]):ce(n),function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e(zt(r,t),function(e){n(Xt(r,e,t))},i)}}function fe(t){return"string"==typeof t&&(t=(t=t.replace(/deg/,"")).replace(/px/,"")),+t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return t.map(function(t){return t*e})}var ge=0;function de(t){return[].concat(Array.prototype.slice.call(arguments))}function pe(t){return{type:"convolution",length:t.length,content:t}}function me(t,e){return{type:"shader",index:ge,options:e,content:(r=t,n=ge++,"\n        if (u_filterIndex == "+n+".0) {\n            "+r+"\n        }\n    ")};var r,n}function ye(t){return"\n    \n    if (u_kernelSelect == "+t+".0) {\n        vec4 colorSum = "+(e=t,r=Math.sqrt(e),n=Math.floor(r/2),[].concat(V(Array(e))).map(function(t,i){var o=Math.floor(i/r)-n;return"texture(u_image, v_texCoord + onePixel * vec2("+(i%r-n)+", "+o+")) * u_kernel"+e+"["+i+"]"}).join(" + \n"))+"; \n\n        outColor = vec4((colorSum / u_kernel"+t+"Weight).rgb, 1);\n        \n    }\n    ";var e,r,n}function be(t){return"vec4("+(t=[t.r/255,t.g/255,t.b/255,t.a||0].map(ke))+")"}function ke(t){return t==Math.floor(t)?t+".0":t}function Ce(){return pe(ve([1,2,1,2,4,2,1,2,1],fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1)*(1/16)))}function $e(){return pe([1,4,6,4,1,4,16,24,16,4,6,24,36,24,6,4,16,24,16,4,1,4,6,4,1])}function xe(){return pe([5,5,5,-3,0,-3,-3,-3,-3])}function _e(){return pe([5,-3,-3,5,0,-3,5,-3,-3])}function we(){return pe([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,24,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1])}function Me(){return pe([1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1])}function Oe(){return pe([1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1])}function Se(){return pe([1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1])}function Ee(){return pe([-1,-2,-1,0,0,0,1,2,1])}function Te(){return pe([-1,0,1,-2,0,2,-1,0,1])}function Ae(){return pe(ve([1,4,6,4,1,4,16,24,16,4,6,24,-476,24,6,4,16,24,16,4,1,4,6,4,1],-1/256))}function Ie(){var t=[arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,arguments.length>11&&void 0!==arguments[11]?arguments[11]:0,arguments.length>12&&void 0!==arguments[12]?arguments[12]:0,arguments.length>13&&void 0!==arguments[13]?arguments[13]:0,arguments.length>14&&void 0!==arguments[14]?arguments[14]:0,arguments.length>15&&void 0!==arguments[15]?arguments[15]:0].map(ke);return me("\n\n        outColor = vec4(\n            "+t[0]+" * pixelColor.r + "+t[1]+" * pixelColor.g + "+t[2]+" * pixelColor.b + "+t[3]+" * pixelColor.a,\n            "+t[4]+" * pixelColor.r + "+t[5]+" * pixelColor.g + "+t[6]+" * pixelColor.b + "+t[7]+" * pixelColor.a,\n            "+t[8]+" * pixelColor.r + "+t[9]+" * pixelColor.g + "+t[10]+" * pixelColor.b + "+t[11]+" * pixelColor.a,\n            "+t[12]+" * pixelColor.r + "+t[13]+" * pixelColor.g + "+t[14]+" * pixelColor.b + "+t[15]+" * pixelColor.a\n        ); \n    ")}function Pe(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return me("\n        float c = ( (pixelColor.r * 0.2126 + pixelColor.g * 0.7152 + pixelColor.b * 0.0722) ) >= "+(t=ke(fe(t)))+" ? 1.0 : 0.0;\n\n        outColor = vec4(c, c, c, pixelColor.a);\n    ")}var De=j({},{blur:function(){return pe([1,1,1,1,1,1,1,1,1])},normal:function(){return pe([0,0,0,0,1,0,0,0,0])},emboss:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4;return pe([-2*(t=fe(t)),-t,0,-t,1,t,0,t,2*t])},gaussianBlur:Ce,"gaussian-blur":Ce,gaussianBlur5x:$e,"gaussian-blur-5x":$e,grayscale2:function(){return pe([.3,.3,.3,0,0,.59,.59,.59,0,0,.11,.11,.11,0,0,0,0,0,0,0,0,0,0,0,0])},kirschHorizontal:xe,"kirsch-horizontal":xe,kirschVertical:_e,"kirsch-vertical":_e,laplacian:function(){return pe([-1,-1,-1,-1,8,-1,-1,-1,-1])},laplacian5x:we,"laplacian-5x":we,motionBlur:Me,"motion-blur":Me,motionBlur2:Oe,"motion-blur-2":Oe,motionBlur3:Se,"motion-blur-3":Se,negative:function(){return pe([-1,0,0,0,0,0,-1,0,0,0,0,0,-1,0,0,0,0,0,1,0,1,1,1,1,1])},sepia2:function(){return pe([.393,.349,.272,0,0,.769,.686,.534,0,0,.189,.168,.131,0,0,0,0,0,0,0,0,0,0,0,0])},sharpen:function(){return pe([0,-1,0,-1,5,-1,0,-1,0])},sobelHorizontal:Ee,"sobel-horizontal":Ee,sobelVertical:Te,"sobel-vertical":Te,transparency:function(){return pe([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,.3,0,0,0,0,0,1])},unsharpMasking:Ae,"unsharp-masking":Ae},{bitonal:function(t,e){var r=ke(arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5),n=be(He.parse(t));return me("\n        if ((pixelColor.r + pixelColor.g + pixelColor.b) > "+r+") {\n            outColor = vec4("+be(He.parse(e))+".rgb, pixelColor.a);\n        } else {\n            outColor = vec4("+n+".rgb, pixelColor.a);\n        }\n    ")},brightness:function(){return me("\n        outColor = pixelColor + ("+ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))+");\n    ")},brownie:function(){return Ie(.5997023498159715,.34553243048391263,-.2708298674538042,0,-.037703249837783157,.8609577587992641,.15059552388459913,0,.24113635128153335,-.07441037908422492,.44972182064877153,0,0,0,0,1)},clip:function(){var t=ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0));return me("\n        outColor = vec4(\n            (pixelColor.r > 1.0 - "+t+") ? 1.0 : 0.0,\n            (pixelColor.g > 1.0 - "+t+") ? 1.0 : 0.0,\n            (pixelColor.b > 1.0 - "+t+") ? 1.0 : 0.0,\n            pixelColor.a \n        );\n    ")},chaos:function(){return me("\n        vec2 st = pixelColor.st;\n        st *= "+ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:10))+";\n        \n        vec2 ipos = floor(st);  // get the integer coords\n\n        vec3 color = vec3(random( ipos ));\n\n        outColor = vec4(color, pixelColor.a);\n    ")},contrast:function(){return me("\n        outColor = pixelColor * "+ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))+";\n    ")},gamma:function(){var t=ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1));return me("\n        outColor = vec4(pow(pixelColor.r, "+t+"), pow(pixelColor.g, "+t+"), pow(pixelColor.b, "+t+"), pixelColor.a );\n    ")},gradient:function(){var t=[].concat(Array.prototype.slice.call(arguments));1===t.length&&"string"==typeof t[0]&&(t=He.convertMatchesArray(t[0])),t=t.map(function(t){return t}).join(", ");var e=He.parseGradient(t);e[0][1]=0,e[e.length-1][1]=1;for(var r=[],n=0,i=(e=e.map(function(t){var e=He.parse(t[0]);return[{r:e.r,g:e.g,b:e.b,a:e.a},t[1]]})).length;n<i-1;n++){var o=e[n],a=e[n+1],l=be(o[0]),s=be(a[0]),u=ke(o[1]),c=ke(a[1]);r.push("\n            if ("+u+" <= rate && rate < "+c+") {\n                outColor = mix("+l+", "+s+", (rate - "+u+")/("+c+" - "+u+"));\n            }\n        ")}return me("\n        float rate = (pixelColor.r * 0.2126 + pixelColor.g * 0.7152 + pixelColor.b * 0.0722); \n\n        "+r.join("\n")+"        \n    ")},grayscale:function(){var t=fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);return t>1&&(t=1),Ie(.2126+.7874*(1-t),.7152-.7152*(1-t),.0722-.0722*(1-t),0,.2126-.2126*(1-t),.7152+.2848*(1-t),.0722-.0722*(1-t),0,.2126-.2126*(1-t),.7152-.7152*(1-t),.0722+.9278*(1-t),0,0,0,0,1)},hue:function(){return me("\n        vec3 hsv = rgb2hsv(pixelColor.rgb);\n        hsv.x += "+ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))+";\n        outColor = vec4(hsv2rgb(hsv).rgb, pixelColor.a);\n    ")},invert:function(){var t=ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1));return me("\n        outColor = vec4(\n            (1.0 - pixelColor.r) * "+t+",\n            (1.0 - pixelColor.g) * "+t+",\n            (1.0 - pixelColor.b) * "+t+",\n            pixelColor.a\n        );\n    ")},kodachrome:function(){return Ie(1.1285582396593525,-.3967382283601348,-.03992559172921793,0,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,0,0,0,1)},matrix:Ie,noise:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=Math.abs(fe(t)),r=ke(-e);return me("\n        float rnd = "+r+" + random( pixelColor.st ) * ("+ke(e)+" - "+r+");\n\n        outColor = vec4(pixelColor.rgb + rnd, 1.0);\n    ")},opacity:function(){return me("\n        outColor = vec4(pixelColor.rgb, pixelColor.a * "+ke(fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1))+");\n    ")},polaroid:function(){return Ie(1.438,-.062,-.062,0,-.122,1.378,-.122,0,-.016,-.016,1.483,0,0,0,0,1)},saturation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=1-Math.abs(fe(t));return Ie(e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,e)},sepia:function(){var t=fe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1);return t>1&&(t=1),Ie(.393+.607*(1-t),.769-.769*(1-t),.189-.189*(1-t),0,.349-.349*(1-t),.686+.314*(1-t),.168-.168*(1-t),0,.272-.272*(1-t),.534-.534*(1-t),.131+.869*(1-t),0,0,0,0,1)},shade:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return me("\n        outColor = vec4(\n            pixelColor.r * "+ke(fe(t)/255)+",\n            pixelColor.g * "+ke(fe(e)/255)+",\n            pixelColor.b * "+ke(fe(r)/255)+",\n            pixelColor.a\n        );\n    ")},shift:function(){return Ie(1.438,-.062,-.062,0,-.122,1.378,-.122,0,-.016,-.016,1.483,0,0,0,0,1)},solarize:function(t,e,r){return me("\n        outColor = vec4(\n            (pixelColor.r < "+ke(fe(t))+") ? 1.0 - pixelColor.r: pixelColor.r,\n            (pixelColor.g < "+ke(fe(e))+") ? 1.0 - pixelColor.g: pixelColor.g,\n            (pixelColor.b < "+ke(fe(r))+") ? 1.0 - pixelColor.b: pixelColor.b,\n            pixelColor.a\n        );\n    ")},technicolor:function(){return Ie(1.9125277891456083,-.8545344976951645,-.09155508482755585,0,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-.231103377548616,-.7501899197440212,1.847597816108189,0,0,0,0,1)},threshold:function(){return Pe(arguments.length>0&&void 0!==arguments[0]?arguments[0]:200,arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,!1)},"threshold-color":Pe,tint:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return me("\n        outColor = vec4(\n            pixelColor.r += (1 - pixelColor.r) * "+fe(t)+",\n            pixelColor.g += (1 - pixelColor.g) * "+fe(e)+",\n            pixelColor.b += (1 - pixelColor.b) * "+fe(r)+",\n            pixelColor.a\n        );\n    ")}},{kirsch:function(){return de("kirsch-horizontal kirsch-vertical")},sobel:function(){return de("sobel-horizontal sobel-vertical")},vintage:function(){return de("brightness(0.15) saturation(-0.2) gamma(1.8)")}}),Be=0,Re={GLCanvas:function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:"400px",height:"300px"};D(this,t),this.img=e.img,this.width=parseFloat(this.img.width||e.width||"400px"),this.height=parseFloat(this.img.height||e.height||"300px"),this.init()}return B(t,[{key:"resize",value:function(){this.canvas.width=this.width,this.canvas.height=this.height,this.canvas.style.width=this.width+"px",this.canvas.style.height=this.height+"px",this.viewport()}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=this.gl;i.clearColor(t,e,r,n),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT)}},{key:"viewport",value:function(t,e,r,n){var i=this.gl;i.viewport(t||0,e||0,r||i.canvas.width,n||i.canvas.height)}},{key:"initCanvas",value:function(t,e){if(this.canvas=document.createElement("canvas"),this.gl=this.canvas.getContext("webgl2"),!this.gl)throw new Error("you need webgl2 support");this.program=this.createProgram(t,e),this.resize(),this.initBuffer()}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"TRIANGLES",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,n=this.gl;n.drawArrays(n[t],e,r)}},{key:"triangles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;this.draw("TRIANGLES",t,e)}},{key:"uniform2f",value:function(){for(var t,e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=r.shift();(t=this.gl).uniform2f.apply(t,[this.locations[i]].concat(r))}},{key:"uniform1f",value:function(){for(var t,e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=r.shift();(t=this.gl).uniform1f.apply(t,[this.locations[i]].concat(r))}},{key:"uniform1fv",value:function(){for(var t,e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=r.shift();(t=this.gl).uniform1fv.apply(t,[this.locations[i]].concat(r))}},{key:"uniform1i",value:function(){for(var t,e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];var i=r.shift();(t=this.gl).uniform1i.apply(t,[this.locations[i]].concat(r))}},{key:"useProgram",value:function(){this.gl.useProgram(this.program)}},{key:"bindBuffer",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"STATIC_DRAW",n=this.gl;this.buffers[t]||(this.buffers[t]=n.createBuffer()),n.bindBuffer(n.ARRAY_BUFFER,this.buffers[t]),e&&n.bufferData(n.ARRAY_BUFFER,new Float32Array(e),n[r])}},{key:"enable",value:function(t){this.gl.enableVertexAttribArray(this.locations[t])}},{key:"location",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"attribute";"attribute"===e?this.locations[t]=this.gl.getAttribLocation(this.program,t):"uniform"===e&&(this.locations[t]=this.gl.getUniformLocation(this.program,t))}},{key:"a",value:function(t){return this.location(t)}},{key:"u",value:function(t){return this.location(t,"uniform")}},{key:"pointer",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"FLOAT",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,a=this.gl;a.vertexAttribPointer(this.locations[t],r,a[e],n,i,o)}},{key:"bufferData",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.gl;e.bufferData(e.ARRAY_BUFFER,new Float32Array(t),e.STATIC_DRAW)}},{key:"isPowerOf2",value:function(t){return 0==(t&t-1)}},{key:"bindTexture",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"RGBA",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"RGBA",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"UNSIGNED_BYTE",a=this.gl;1!=arguments.length?(this.textures[t]||(this.textures[t]=a.createTexture()),this.textureIndex[t]=Be++,a.bindTexture(a.TEXTURE_2D,this.textures[t]),this.setTextureParameter(),a.texImage2D(a.TEXTURE_2D,r,a[n],a[i],a[o],e.newImage||e)):a.bindTexture(a.TEXTURE_2D,this.textures[t])}},{key:"bindColorTexture",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:256,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"RGBA",a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"RGBA",l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"UNSIGNED_BYTE",s=this.gl;this.textures[t]||(this.textures[t]=s.createTexture()),this.textureIndex[t]=Be++,s.bindTexture(s.TEXTURE_2D,this.textures[t]),this.setTextureParameter(),s.texImage2D(s.TEXTURE_2D,i,s[o],r,n,0,s[a],s[l],new Uint8Array(e))}},{key:"bindEmptyTexture",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"RGBA",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"RGBA",a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"UNSIGNED_BYTE",l=this.gl;this.textures[t]||(this.textures[t]=l.createTexture()),this.textureIndex[t]=Be++,l.bindTexture(l.TEXTURE_2D,this.textures[t]),this.setTextureParameter();l.texImage2D(l.TEXTURE_2D,n,l[i],e,r,0,l[o],l[a],null)}},{key:"setTextureParameter",value:function(){var t=this.gl;t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST)}},{key:"bindFrameBufferWithTexture",value:function(t,e,r,n){this.bindEmptyTexture(e,r,n),this.bindFrameBuffer(t,e)}},{key:"enumToString",value:function(t){var e=this.gl;if(0===t)return"NONE";for(var r in e)if(e[r]===t)return r;return"0x"+t.toString(16)}},{key:"bindFrameBuffer",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.gl;if(1!==arguments.length){this.framebuffers[t]||(this.framebuffers[t]=r.createFramebuffer()),r.bindFramebuffer(r.FRAMEBUFFER,this.framebuffers[t]);var n=r.COLOR_ATTACHMENT0;r.framebufferTexture2D(r.FRAMEBUFFER,n,r.TEXTURE_2D,this.textures[e],0);r.checkFramebufferStatus(r.FRAMEBUFFER);r.FRAMEBUFFER_COMPLETE}else r.bindFramebuffer(r.FRAMEBUFFER,null==t?null:this.framebuffers[t])}},{key:"bindVA",value:function(){var t=this.gl;this.vao||(this.vao=t.createVertexArray()),t.bindVertexArray(this.vao)}},{key:"bindAttr",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"STATIC_DRAW",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;this.bindBuffer(t,e,r),this.enable(t),this.pointer(t,"FLOAT",n)}},{key:"initBuffer",value:function(){var t=this.canvas,e=t.width,r=t.height;this.a("a_position"),this.a("a_texCoord"),this.u("u_resolution"),this.u("u_image"),this.u("u_flipY"),this.u("u_kernelSelect"),this.u("u_filterIndex"),this.u("u_kernel9[0]"),this.u("u_kernel9Weight"),this.u("u_kernel25[0]"),this.u("u_kernel25Weight"),this.u("u_kernel49[0]"),this.u("u_kernel49Weight"),this.u("u_kernel81[0]"),this.u("u_kernel81Weight"),this.bindVA(),this.bindAttr("a_position",[0,0,e,0,0,r,0,r,e,0,e,r],"STATIC_DRAW",2),this.bindAttr("a_texCoord",[0,0,1,0,0,1,0,1,1,0,1,1],"STATIC_DRAW",2),this.bindTexture("u_image",this.img),this.bindFrameBufferWithTexture("frame_buffer_0","img_texture_0",e,r),this.bindFrameBufferWithTexture("frame_buffer_1","img_texture_1",e,r)}},{key:"activeTexture",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.gl;e.activeTexture(e.TEXTURE0+t)}},{key:"drawFilter",value:function(){var t=this,e=this.gl;this.resize(),this.clear(),this.useProgram(),this.bindVA(),this.activeTexture(0),this.bindTexture("u_image"),this.uniform1i("u_image",0),this.uniform1f("u_flipY",1);var r=e.canvas,n=r.width,i=r.height;this.eachFilter(function(e,r){t.bindFrameBuffer("frame_buffer_"+r%2),t.uniform2f("u_resolution",n,i),t.viewport(0,0,n,i),t.effectFilter(e),t.bindTexture("img_texture_"+r%2)}),this.uniform1f("u_flipY",-1),this.bindFrameBuffer(null),this.uniform2f("u_resolution",n,i),this.viewport(0,0,n,i),this.clear(),this.effectFilter("normal")}},{key:"effectFilter",value:function(t){"string"==typeof t&&(t=(De[t]||De.normal).call(De)),"convolution"==t.type?(this.uniform1f("u_kernelSelect",t.length),this.uniform1f("u_filterIndex",-1),this.uniform1fv("u_kernel"+t.length+"[0]",t.content),this.uniform1f("u_kernel"+t.length+"Weight",this.computeKernelWeight(t.content))):(this.uniform1f("u_kernelSelect",-1),this.uniform1f("u_filterIndex",t.index)),this.triangles(0,6)}},{key:"computeKernelWeight",value:function(t){var e=t.reduce(function(t,e){return t+e});return e<=0?1:e}},{key:"createProgram",value:function(t,e){var r=this.gl,n=r.createProgram();if(this.vertexShader=this.createVertexShader(t),this.fragmentShader=this.createFragmentShader(e),r.attachShader(n,this.vertexShader),r.attachShader(n,this.fragmentShader),r.linkProgram(n),r.getProgramParameter(n,r.LINK_STATUS))return n;console.error(r.getProgramInfoLog(n)),r.deleteProgram(n)}},{key:"createShader",value:function(t,e){var r=this.gl,n=r.createShader(t);if(r.shaderSource(n,e),r.compileShader(n),r.getShaderParameter(n,r.COMPILE_STATUS))return n;console.error(r.getShaderInfoLog(n)),r.deleteShader(n)}},{key:"createVertexShader",value:function(t){var e=this.gl;return this.createShader(e.VERTEX_SHADER,t)}},{key:"createFragmentShader",value:function(t){var e=this.gl;return this.createShader(e.FRAGMENT_SHADER,t)}},{key:"eachFilter",value:function(t){this.filterList.forEach(t)}},{key:"init",value:function(){this.locations={},this.buffers={},this.framebuffers={},this.textures={},this.textureIndex={},this.hasTexParameter={}}},{key:"destroy",value:function(){var t=this.gl;this.init(),t.deleteProgram(this.program)}},{key:"filter",value:function(t,e){var r,n,i;this.filterList=t,this.initCanvas("#version 300 es \n\n        in vec2 a_position;\n        in vec2 a_texCoord; \n\n        uniform vec2 u_resolution;\n        uniform float u_flipY;\n\n        out vec2 v_texCoord; \n\n        void main() {\n            vec2 zeroToOne = a_position / u_resolution;\n\n            vec2 zeroToTwo = zeroToOne * 2.0;\n\n            vec2 clipSpace = zeroToTwo - 1.0;\n\n            gl_Position = vec4(clipSpace * vec2(1, u_flipY), 0, 1);\n\n            v_texCoord = a_texCoord;\n\n        }\n    ",(r=this.filterList,n=r.filter(function(t){return"shader"==t.type}).map(function(t){return t.content}).join("\n\n"),i={9:!0},r.filter(function(t){return"convolution"==t.type}).forEach(function(t){i[t.length]=!0}),"#version 300 es\n\n    precision highp int;\n    precision mediump float;\n    \n    uniform sampler2D u_image;\n\n    // 3 is 3x3 matrix kernel \n    uniform float u_kernelSelect;\n    uniform float u_filterIndex;\n\n    uniform float u_kernel9[9];\n    uniform float u_kernel9Weight;\n    uniform float u_kernel25[25];\n    uniform float u_kernel25Weight;\n    uniform float u_kernel49[49];\n    uniform float u_kernel49Weight;\n    uniform float u_kernel81[81];\n    uniform float u_kernel81Weight;    \n\n    in vec2 v_texCoord;\n    \n    out vec4 outColor;\n\n    float random (vec2 st) {\n        return fract(sin(dot(st.xy, vec2(12.9898,78.233)))* 43758.5453123);\n    } \n\n    // \n    vec3 rgb2hsv(vec3 c)\n    {\n        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n        vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\n        vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\n\n        float d = q.x - min(q.w, q.y);\n        float e = 1.0e-10;\n        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n    }\n\n    vec3 hsv2rgb(vec3 c)\n    {\n        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n    }\n    \n    void main() {\n        vec4 pixelColor = texture(u_image, v_texCoord);\n        vec2 onePixel = vec2(1) / vec2(textureSize(u_image, 0));                \n\n        "+n+"\n\n        "+Object.keys(i).map(function(t){return ye(+t)}).join("\n")+"\n\n    }")),this.drawFilter(),"function"==typeof e&&e(this)}}]),t}()};var je=j({},Re,{filter:function(t,e,r,n){var i=new Re.GLCanvas({width:n.width||t.width,height:n.height||t.height,img:t});i.filter(function t(e){var r=[];"string"==typeof e?r=ie(e):Array.isArray(e)&&(r=e);var n=[];r.forEach(function(e){var r=e.arr[0];if(De[r]){var i=function(t){var e=t.arr[0],r=De[e],n=t.arr;return n.shift(),r.apply(this,n)}(e);"convolution"==i.type||"shader"==i.type?n.push(i):i.forEach(function(e){n=n.concat(t(e))})}});return n}(e),function(){"function"==typeof r&&r(i)})}});function Fe(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{frameTimer:"full"},i=new vt(t);i.loadImage(function(){i.toArray(e,function(t){"function"==typeof r&&r(t)},n)})}var He=j({},i,h,nt,Z,A,b,k,O,T,w,{palette:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"hex";return e.length>r&&(e=ht(e,r)),e.map(function(e){return t(e,n)})},ImageToCanvas:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{frameTimer:"full"};Fe(t,e,r,Object.assign({returnTo:"canvas"},n))},ImageToHistogram:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{width:200,height:100},n=new vt(t);n.loadImage(function(){ft.createHistogram(r.width||200,r.height||100,n.toHistogram(r),function(t){"function"==typeof e&&e(t.toDataURL("image/png"))},r)})},ImageToRGB:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments[2];if(r){if(r){var n;(n=new vt(t,e)).loadImage(function(){"function"==typeof r&&r(n.toRGB())})}}else(n=new vt(t)).loadImage(function(){"function"==typeof e&&e(n.toRGB())})},ImageToURL:Fe,GLToCanvas:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new vt(t);i.load(function(){je.filter(i.newImage,e,function(t){"function"==typeof r&&r(t)},n)})},histogram:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=new vt(t);n.loadImage(function(){"function"==typeof e&&e(n.toHistogram(r))})},histogramToPoints:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2,r=[],n=0;n<t.length;n++){var i=t[n];if(0!=n)if(n!=t.length-1){var o=t[n-1],a=t[n+1],l=(a[1],o[1],a[0],o[0],[o[0]+(a[0]-o[0])*e,o[1]+(a[1]-o[1])*e]),s=[[].concat(V(o)),[].concat(l)],u=Math.sqrt(Math.pow(i[0]-o[0],2)+Math.pow(i[1]-o[1],2))/Math.sqrt(Math.pow(a[0]-i[0],2)+Math.pow(a[1]-i[1],2)),c=s[0][0]+(s[1][0]-s[0][0])*u,h=s[0][1]+(s[1][1]-s[0][1])*u;s[0][0]+=i[0]-c,s[0][1]+=i[1]-h,s[1][0]+=i[0]-c,s[1][1]+=i[1]-h,r[n]=s}else r[n]=[];else r[n]=[]}return r}}),Ue=[{rgb:"#ff0000",start:0},{rgb:"#ffff00",start:.17},{rgb:"#00ff00",start:.33},{rgb:"#00ffff",start:.5},{rgb:"#0000ff",start:.67},{rgb:"#ff00ff",start:.83},{rgb:"#ff0000",start:1}];!function(){for(var t=0,e=Ue.length;t<e;t++){var r=Ue[t],n=He.parse(r.rgb);r.r=n.r,r.g=n.g,r.b=n.b}}();var Le={colors:Ue,checkHueColor:function(t){for(var e,r,n=0;n<Ue.length;n++)if(Ue[n].start>=t){e=Ue[n-1],r=Ue[n];break}return e&&r?He.interpolateRGB(e,r,(t-e.start)/(r.start-e.start)):Ue[0].rgb}},Ve=j({},Bt,jt),Ne={Color:He,HueColor:Le,ColorNames:P,ImageFilter:Ve,GL:je,Canvas:ft,ImageLoader:vt},Ge=(He.color,0),ze=[],Xe=function(){function t(e,r,n){if(D(this,t),"string"!=typeof e)this.el=e;else{var i=document.createElement(e);for(var o in this.uniqId=Ge++,r&&(i.className=r),n=n||{})i.setAttribute(o,n[o]);this.el=i}}return B(t,[{key:"attr",value:function(t,e){return 1==arguments.length?this.el.getAttribute(t):(this.el.setAttribute(t,e),this)}},{key:"closest",value:function(e){for(var r=this,n=!1;!(n=r.hasClass(e));){if(!r.el.parentNode)return null;r=new t(r.el.parentNode)}return n?r:null}},{key:"removeClass",value:function(t){return this.el.className=(" "+this.el.className+" ").replace(" "+t+" "," ").trim(),this}},{key:"hasClass",value:function(t){return!!this.el.className&&(" "+this.el.className+" ").indexOf(" "+t+" ")>-1}},{key:"addClass",value:function(t){return this.hasClass(t)||(this.el.className=this.el.className+" "+t),this}},{key:"toggleClass",value:function(t){this.hasClass(t)?this.removeClass(t):this.addClass(t)}},{key:"html",value:function(t){return"string"==typeof t?this.el.innerHTML=t:this.empty().append(t),this}},{key:"find",value:function(t){return this.el.querySelector(t)}},{key:"findAll",value:function(t){return this.el.querySelectorAll(t)}},{key:"empty",value:function(){return this.html("")}},{key:"append",value:function(t){return"string"==typeof t?this.el.appendChild(document.createTextNode(t)):this.el.appendChild(t.el||t),this}},{key:"appendTo",value:function(t){return(t.el?t.el:t).appendChild(this.el),this}},{key:"remove",value:function(){return this.el.parentNode&&this.el.parentNode.removeChild(this.el),this}},{key:"text",value:function(){return this.el.textContent}},{key:"css",value:function(t,e){var r=this;if(2==arguments.length)this.el.style[t]=e;else if(1==arguments.length){if("string"==typeof t)return getComputedStyle(this.el)[t];var n=t||{};Object.keys(n).forEach(function(t){r.el.style[t]=n[t]})}return this}},{key:"cssFloat",value:function(t){return parseFloat(this.css(t))}},{key:"cssInt",value:function(t){return parseInt(this.css(t))}},{key:"offset",value:function(){var e=this.el.getBoundingClientRect();return{top:e.top+t.getScrollTop(),left:e.left+t.getScrollLeft()}}},{key:"position",value:function(){return this.el.style.top?{top:parseFloat(this.css("top")),left:parseFloat(this.css("left"))}:this.el.getBoundingClientRect()}},{key:"size",value:function(){return[this.width(),this.height()]}},{key:"width",value:function(){return this.el.offsetWidth||this.el.getBoundingClientRect().width}},{key:"contentWidth",value:function(){return this.width()-this.cssFloat("padding-left")-this.cssFloat("padding-right")}},{key:"height",value:function(){return this.el.offsetHeight||this.el.getBoundingClientRect().height}},{key:"contentHeight",value:function(){return this.height()-this.cssFloat("padding-top")-this.cssFloat("padding-bottom")}},{key:"dataKey",value:function(t){return this.uniqId+"."+t}},{key:"data",value:function(t,e){if(2!=arguments.length){if(1==arguments.length)return ze[this.dataKey(t)];var r=Object.keys(ze),n=this.uniqId+".";return r.filter(function(t){return 0==t.indexOf(n)}).map(function(t){return ze[t]})}return ze[this.dataKey(t)]=e,this}},{key:"val",value:function(t){return 0==arguments.length?this.el.value:(1==arguments.length&&(this.el.value=t),this)}},{key:"int",value:function(){return parseInt(this.val(),10)}},{key:"float",value:function(){return parseFloat(this.val())}},{key:"show",value:function(){return this.css("display","block")}},{key:"hide",value:function(){return this.css("display","none")}},{key:"toggle",value:function(){return"none"==this.css("display")?this.show():this.hide()}},{key:"scrollTop",value:function(){return this.el===document.body?t.getScrollTop():this.el.scrollTop}},{key:"scrollLeft",value:function(){return this.el===document.body?t.getScrollLeft():this.el.scrollLeft}},{key:"on",value:function(t,e,r,n){return this.el.addEventListener(t,e,r,n),this}},{key:"off",value:function(t,e){return this.el.removeEventListener(t,e),this}},{key:"getElement",value:function(){return this.el}},{key:"createChild",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new t(e,r,n);return o.css(i),this.append(o),o}},{key:"firstChild",value:function(){return new t(this.el.firstElementChild)}},{key:"replace",value:function(t,e){return this.el.replaceChild(e,t),this}}],[{key:"getScrollTop",value:function(){return Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)}},{key:"getScrollLeft",value:function(){return Math.max(window.pageXOffset,document.documentElement.scrollLeft,document.body.scrollLeft)}}]),t}(),Ye=function(){function t(e){D(this,t),this.$store=e,this.initialize()}return B(t,[{key:"initialize",value:function(){var t=this;this.filterProps().forEach(function(e){t.$store.action(e,t)})}},{key:"filterProps",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return Object.getOwnPropertyNames(this.__proto__).filter(function(e){return e.startsWith(t)})}}]),t}(),We=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,Ye),B(e,[{key:"initialize",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initialize",this).call(this),this.$store.colorSetsList=[{name:"Material",colors:["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"]},{name:"Custom",edit:!0,colors:[]},{name:"Color Scale",scale:["red","yellow","black"],count:5}],this.$store.currentColorSets={}}},{key:"/list",value:function(t){return Array.isArray(t.userList)&&t.userList.length?t.userList:t.colorSetsList}},{key:"/setUserPalette",value:function(t,e){t.userList=e,t.dispatch("/resetUserPalette"),t.dispatch("/setCurrentColorSets")}},{key:"/resetUserPalette",value:function(t){t.userList&&t.userList.length&&(t.userList=t.userList.map(function(e,r){if("function"==typeof e.colors){var n=e.colors;e.colors=n(t),e._colors=n}return Object.assign({name:"color-"+r,colors:[]},e)}),t.emit("changeUserList"))}},{key:"/setCurrentColorSets",value:function(t,e){var r=t.dispatch("/list");t.currentColorSets=void 0===e?r[0]:"number"==typeof e?r[e]:r.filter(function(t){return t.name==e})[0],t.emit("changeCurrentColorSets")}},{key:"/getCurrentColorSets",value:function(t){return t.currentColorSets}},{key:"/addCurrentColor",value:function(t,e){Array.isArray(t.currentColorSets.colors)&&(t.currentColorSets.colors.push(e),t.emit("changeCurrentColorSets"))}},{key:"/setCurrentColorAll",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];t.currentColorSets.colors=e,t.emit("changeCurrentColorSets")}},{key:"/removeCurrentColor",value:function(t,e){t.currentColorSets.colors[e]&&(t.currentColorSets.colors.splice(e,1),t.emit("changeCurrentColorSets"))}},{key:"/removeCurrentColorToTheRight",value:function(t,e){t.currentColorSets.colors[e]&&(t.currentColorSets.colors.splice(e,Number.MAX_VALUE),t.emit("changeCurrentColorSets"))}},{key:"/clearPalette",value:function(t){t.currentColorSets.colors&&(t.currentColorSets.colors=[],t.emit("changeCurrentColorSets"))}},{key:"/getCurrentColors",value:function(t){return t.dispatch("/getColors",t.currentColorSets)}},{key:"/getColors",value:function(t,e){return e.scale?He.scale(e.scale,e.count):e.colors||[]}},{key:"/getColorSetsList",value:function(t){return t.dispatch("/list").map(function(e){return{name:e.name,edit:e.edit,colors:t.dispatch("/getColors",e)}})}}]),e}(),qe={addEvent:function(t,e,r){t&&t.addEventListener(e,r)},removeEvent:function(t,e,r){t&&t.removeEventListener(e,r)},pos:function(t){return t.touches&&t.touches[0]?t.touches[0]:t},posXY:function(t){var e=this.pos(t);return{x:e.pageX,y:e.pageY}}},Ke=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};D(this,t),this.masterObj=e,this.settingObj=r}return B(t,[{key:"set",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;this.settingObj[t]=e||r}},{key:"init",value:function(t){if(!this.has(t)){var e=t.split("."),r=this.masterObj.refs[e[0]]||this.masterObj[e[0]]||this.masterObj,n=e.pop();if(r[n]){for(var i=arguments.length,o=Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];var l=r[n].apply(r,o);this.set(t,l)}}}},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return this.init(t,e),this.settingObj[t]||e}},{key:"has",value:function(t){return!!this.settingObj[t]}}]),t}(),Ze=/^(click|mouse(down|up|move|enter|leave)|touch(start|move|end)|key(down|up|press)|contextmenu|change|input)/gi,Je=/^load (.*)/gi,Qe=["Control","Shift","Alt","Meta"],tr=function(){function t(){D(this,t),this.state=new Ke(this),this.refs={},this.childComponents=this.components()}return B(t,[{key:"newChildComponents",value:function(){var t=this;Object.keys(this.childComponents).forEach(function(e){var r=t.childComponents[e];t[e]=new r(t)})}},{key:"render",value:function(){this.$el=this.parseTemplate(this.template()),this.refs.$el=this.$el,this.parseTarget(),this.load()}},{key:"components",value:function(){return{}}},{key:"parseTemplate",value:function(t){var e=this,r=new Xe("div").html(t).firstChild(),n=r.findAll("[ref]");return[].concat(V(n)).forEach(function(t){var r=t.getAttribute("ref");e.refs[r]=new Xe(t)}),r}},{key:"parseTarget",value:function(){var t=this,e=this.$el,r=e.findAll("[target]");[].concat(V(r)).forEach(function(r){var n=r.getAttribute("target"),i=r.getAttribute("ref")||n,o=new(0,t.childComponents[n])(t);t[i]=o,t.refs[i]=o.$el,o&&(o.render(),e.replace(r,o.$el.el))})}},{key:"load",value:function(){var t=this;this.filterProps(Je).forEach(function(e){var r=e.split("load ")[1];t.refs[r]&&t.refs[r].html(t.parseTemplate(t[e].call(t)))})}},{key:"template",value:function(){return"<div></div>"}},{key:"initialize",value:function(){}},{key:"initializeEvent",value:function(){var t=this;this.initializeEventMachin(),Object.keys(this.childComponents).forEach(function(e){t[e]&&t[e].initializeEvent()})}},{key:"destroy",value:function(){var t=this;this.destroyEventMachin(),Object.keys(this.childComponents).forEach(function(e){t[e]&&t[e].destroy()})}},{key:"destroyEventMachin",value:function(){this.removeEventAll()}},{key:"initializeEventMachin",value:function(){this.filterProps(Ze).forEach(this.parseEvent.bind(this))}},{key:"collectProps",value:function(){if(!this.collapsedProps){var t=this.__proto__,e=[];do{e.push.apply(e,V(Object.getOwnPropertyNames(t))),t=t.__proto__}while(t);this.collapsedProps=e}return this.collapsedProps}},{key:"filterProps",value:function(t){return this.collectProps().filter(function(e){return e.match(t)})}},{key:"parseEvent",value:function(t){var e=t.split(" ");this.bindingEvent(e,this[t].bind(this))}},{key:"getDefaultDomElement",value:function(t){var e=void 0;return(e=t?this.refs[t]||this[t]||window[t]:this.el||this.$el||this.$root)instanceof Xe?e.getElement():e}},{key:"getDefaultEventObject",value:function(t){var e=this,r=t.split("."),n=r.shift(),i=r.includes("Control"),o=r.includes("Shift"),a=r.includes("Alt"),l=r.includes("Meta"),s=(r=r.filter(function(t){return!1===Qe.includes(t)})).filter(function(t){return!!e[t]});return{eventName:n,isControl:i,isShift:o,isAlt:a,isMeta:l,codes:r=r.filter(function(t){return!1===s.includes(t)}).map(function(t){return t.toLowerCase()}),checkMethodList:s}}},{key:"bindingEvent",value:function(t,e){var r,n=(r=t,Array.isArray(r)?r:Array.from(r)),i=n[0],o=n[1],a=n.slice(2);o=this.getDefaultDomElement(o);var l=this.getDefaultEventObject(i);l.dom=o,l.delegate=a.join(" "),this.addEvent(l,e)}},{key:"matchPath",value:function(t,e){return t?t.matches(e)?t:this.matchPath(t.parentElement,e):null}},{key:"getBindings",value:function(){return this._bindings||this.initBindings(),this._bindings}},{key:"addBinding",value:function(t){this.getBindings().push(t)}},{key:"initBindings",value:function(){this._bindings=[]}},{key:"checkEventType",value:function(t,e){var r=this,n=!t.ctrlKey||e.isControl,i=!t.shiftKey||e.isShift,o=!t.altKey||e.isAlt,a=!t.metaKey||e.isMeta,l=!0;e.codes.length&&(l=e.codes.includes(t.code.toLowerCase())||e.codes.includes(t.key.toLowerCase()));var s=!0;return e.checkMethodList.length&&(s=e.checkMethodList.every(function(e){return r[e].call(r,t)})),n&&o&&i&&a&&l&&s}},{key:"makeCallback",value:function(t,e){var r=this;return t.delegate?function(n){if(r.checkEventType(n,t)){var i=r.matchPath(n.target||n.srcElement,t.delegate);if(i)return n.delegateTarget=i,n.$delegateTarget=new Xe(i),e(n)}}:function(n){if(r.checkEventType(n,t))return e(n)}}},{key:"addEvent",value:function(t,e){t.callback=this.makeCallback(t,e),this.addBinding(t),qe.addEvent(t.dom,t.eventName,t.callback)}},{key:"removeEventAll",value:function(){var t=this;this.getBindings().forEach(function(e){t.removeEvent(e)}),this.initBindings()}},{key:"removeEvent",value:function(t){var e=t.eventName,r=t.dom,n=t.callback;qe.removeEvent(r,e,n)}}]),t}(),er=/^@/,rr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.opt=t||{},t&&t.$store&&(r.$store=t.$store),r.initialize(),r.initializeStoreEvent(),r}return H(e,tr),B(e,[{key:"initializeStoreEvent",value:function(){var t=this;this.storeEvents={},this.filterProps(er).forEach(function(e){var r=e.split("@");r.shift();var n=r.join("@");t.storeEvents[n]=t[e].bind(t),t.$store.on(n,t.storeEvents[n])})}},{key:"destoryStoreEvent",value:function(){var t=this;Object.keys(this.storeEvents).forEach(function(e){t.$store.off(e,t.storeEvents[e])})}}]),e}();var nr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,Ye),B(e,[{key:"initialize",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initialize",this).call(this),this.$store.rgb={},this.$store.hsl={},this.$store.hsv={},this.$store.alpha=1,this.$store.format="hex"}},{key:"/changeFormat",value:function(t,e){t.format=e,t.emit("changeFormat")}},{key:"/initColor",value:function(t,e,r){t.dispatch("/changeColor",e,r,!0),t.emit("initColor")}},{key:"/changeColor",value:function(t,e,r,n){var i;"string"==typeof(e=e||"#FF0000")&&(e=He.parse(e)),e.source=e.source||r,t.alpha=void 0===(i=e.a)||null==i?t.alpha:e.a,t.format="hsv"!=e.type&&e.type||t.format,"hex"==t.format&&t.alpha<1&&(t.format="rgb"),"hsl"==e.type?(t.hsl=Object.assign(t.hsl,e),t.rgb=He.HSLtoRGB(t.hsl),t.hsv=He.HSLtoHSV(e)):"hex"==e.type?(t.rgb=Object.assign(t.rgb,e),t.hsl=He.RGBtoHSL(t.rgb),t.hsv=He.RGBtoHSV(e)):"rgb"==e.type?(t.rgb=Object.assign(t.rgb,e),t.hsl=He.RGBtoHSL(t.rgb),t.hsv=He.RGBtoHSV(e)):"hsv"==e.type&&(t.hsv=Object.assign(t.hsv,e),t.rgb=He.HSVtoRGB(t.hsv),t.hsl=He.HSVtoHSL(t.hsv)),n||t.emit("changeColor",e.source)}},{key:"/getHueColor",value:function(t){return Le.checkHueColor(t.hsv.h/360)}},{key:"/toString",value:function(t,e){var r=t[e=e||t.format]||t.rgb;return He.format(Object.assign({},r,{a:t.alpha}),e)}},{key:"/toColor",value:function(t,e){return"rgb"==(e=e||t.format)?t.dispatch("/toRGB"):"hsl"==e?t.dispatch("/toHSL"):"hex"==e?t.dispatch("/toHEX"):t.dispatch("/toString",e)}},{key:"/toRGB",value:function(t){return t.dispatch("/toString","rgb")}},{key:"/toHSL",value:function(t){return t.dispatch("/toString","hsl")}},{key:"/toHEX",value:function(t){return t.dispatch("/toString","hex").toUpperCase()}}]),e}(),ir=function(){function t(e){D(this,t),this.callbacks=[],this.actions=[],this.modules=e.modules||[],this.initialize()}return B(t,[{key:"initialize",value:function(){this.initializeModule()}},{key:"initializeModule",value:function(){var t=this;this.modules.forEach(function(e){new e(t)})}},{key:"action",value:function(t,e){this.actions[t]={context:e,callback:e[t]}}},{key:"dispatch",value:function(t){var e=[].concat(Array.prototype.slice.call(arguments)),r=(t=e.shift(),this.actions[t]);if(r)return r.callback.apply(r.context,[this].concat(V(e)))}},{key:"module",value:function(t){}},{key:"on",value:function(t,e){this.callbacks.push({event:t,callback:e})}},{key:"off",value:function(t,e){0==arguments.length?this.callbacks=[]:1==arguments.length?this.callbacks=this.callbacks.filter(function(e){return e.event!=t}):2==arguments.length&&(this.callbacks=this.callbacks.filter(function(r){return r.event!=t&&r.callback!=e}))}},{key:"emit",value:function(){var t=[].concat(Array.prototype.slice.call(arguments)),e=t.shift();this.callbacks.filter(function(t){return t.event==e}).forEach(function(e){e&&"function"==typeof e.callback&&e.callback.apply(e,V(t))})}}]),t}(),or=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.isColorPickerShow=!1,r.isShortCut=!1,r.hideDelay=+(void 0===r.opt.hideDeplay?2e3:r.opt.hideDelay),r.timerCloseColorPicker,r.autoHide=r.opt.autoHide||!0,r.outputFormat=r.opt.outputFormat,r.$checkColorPickerClass=r.checkColorPickerClass.bind(r),r}return H(e,rr),B(e,[{key:"initialize",value:function(){var t=this;this.$body=null,this.$root=null,this.$store=new ir({modules:[nr,We]}),this.callbackChange=function(){t.callbackColorValue()},this.colorpickerShowCallback=function(){},this.colorpickerHideCallback=function(){},this.$body=new Xe(this.getContainer()),this.$root=new Xe("div","codemirror-colorpicker"),"inline"==this.opt.position&&this.$body.append(this.$root),this.opt.type&&this.$root.addClass(this.opt.type),this.opt.hideInformation&&this.$root.addClass("hide-information"),this.opt.hideColorsets&&this.$root.addClass("hide-colorsets"),this.$arrow=new Xe("div","arrow"),this.$root.append(this.$arrow),this.$store.dispatch("/setUserPalette",this.opt.colorSets),this.render(),this.$root.append(this.$el),this.initColorWithoutChangeEvent(this.opt.color),this.initializeEvent()}},{key:"initColorWithoutChangeEvent",value:function(t){this.$store.dispatch("/initColor",t)}},{key:"show",value:function(t,e,r,n){this.colorpickerShowCallback=r,this.colorpickerHideCallback=n,this.$root.css(this.getInitalizePosition()).show(),this.isColorPickerShow=!0,this.isShortCut=t.isShortCut||!1,this.outputFormat=t.outputFormat,this.hideDelay=+(void 0===t.hideDelay?2e3:t.hideDelay),this.hideDelay>0&&this.setHideDelay(this.hideDelay),this.$root.appendTo(this.$body),this.definePosition(t),this.initColorWithoutChangeEvent(e)}},{key:"initColor",value:function(t,e){this.$store.dispatch("/changeColor",t,e)}},{key:"hide",value:function(){this.isColorPickerShow&&(this.$root.hide(),this.$root.remove(),this.isColorPickerShow=!1,this.callbackHideColorValue())}},{key:"setColorsInPalette",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.$store.dispatch("/setCurrentColorAll",t)}},{key:"setUserPalette",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.$store.dispatch("/setUserPalette",t)}},{key:"getOption",value:function(t){return this.opt[t]}},{key:"setOption",value:function(t,e){this.opt[t]=e}},{key:"isType",value:function(t){return this.getOption("type")==t}},{key:"isPaletteType",value:function(){return this.isType("palette")}},{key:"isSketchType",value:function(){return this.isType("sketch")}},{key:"getContainer",value:function(){return this.opt.container||document.body}},{key:"getColor",value:function(t){return this.$store.dispatch("/toColor",t)}},{key:"definePositionForArrow",value:function(t,e,r){}},{key:"definePosition",value:function(t){var e=this.$root.width(),r=this.$root.height(),n=t.left-this.$body.scrollLeft();e+n>window.innerWidth&&(n-=e+n-window.innerWidth),n<0&&(n=0);var i=t.top-this.$body.scrollTop();r+i>window.innerHeight&&(i-=r+i-window.innerHeight),i<0&&(i=0),this.$root.css({left:n+"px",top:i+"px"})}},{key:"getInitalizePosition",value:function(){return"inline"==this.opt.position?{position:"relative",left:"auto",top:"auto",display:"inline-block"}:{position:"fixed",left:"-10000px",top:"-10000px"}}},{key:"isAbsolute",value:function(){return"inline"!==this.opt.position}},{key:"mouseup.isAbsolute document",value:function(t){this.__isMouseDown=!1,this.checkInHtml(t.target)||(0==this.checkColorPickerClass(t.target)?this.hide():this.__isMouseIn||(clearTimeout(this.timerCloseColorPicker),this.timerCloseColorPicker=setTimeout(this.hide.bind(this),this.delayTime||this.hideDelay)))}},{key:"mouseover.isAbsolute $root",value:function(t){clearTimeout(this.timerCloseColorPicker)}},{key:"mousemove.isAbsolute $root",value:function(t){clearTimeout(this.timerCloseColorPicker)}},{key:"mouseenter.isAbsolute $root",value:function(t){clearTimeout(this.timerCloseColorPicker),this.__isMouseIn=!0}},{key:"mouseleave.isAbsolute $root",value:function(t){this.__isMouseIn=!1,this.__isMouseDown||(clearTimeout(this.timerCloseColorPicker),this.timerCloseColorPicker=setTimeout(this.hide.bind(this),this.delayTime||this.hideDelay))}},{key:"mousedown.isAbsolute $root",value:function(t){this.__isMouseDown=!0}},{key:"setHideDelay",value:function(t){this.delayTime=t||0}},{key:"runHideDelay",value:function(){this.isColorPickerShow&&this.setHideDelay()}},{key:"callbackColorValue",value:function(t){t=t||this.getCurrentColor(),"function"==typeof this.opt.onChange&&this.opt.onChange.call(this,t),"function"==typeof this.colorpickerShowCallback&&this.colorpickerShowCallback(t)}},{key:"callbackHideColorValue",value:function(t){t=t||this.getCurrentColor(),"function"==typeof this.opt.onHide&&this.opt.onHide.call(this,t),"function"==typeof this.colorpickerHideCallback&&this.colorpickerHideCallback(t)}},{key:"getCurrentColor",value:function(){return this.$store.dispatch("/toColor",this.outputFormat)}},{key:"checkColorPickerClass",value:function(t){var e=new Xe(t).closest("codemirror-colorview"),r=new Xe(t).closest("codemirror-colorpicker"),n=new Xe(t).closest("CodeMirror");t.nodeName;return!!(r||e||n)}},{key:"checkInHtml",value:function(t){return"HTML"==t.nodeName}},{key:"initializeStoreEvent",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initializeStoreEvent",this).call(this),this.$store.on("changeColor",this.callbackChange),this.$store.on("changeFormat",this.callbackChange)}},{key:"destroy",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this),this.$store.off("changeColor",this.callbackChange),this.$store.off("changeFormat",this.callbackChange),this.callbackChange=void 0,this.colorpickerShowCallback=void 0,this.colorpickerHideCallback=void 0}}]),e}(),ar=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.source="base-box",r}return H(e,rr),B(e,[{key:"refresh",value:function(){}},{key:"refreshColorUI",value:function(t){}},{key:"changeColor",value:function(t){this.$store.dispatch("/changeColor",Object.assign({source:this.source},t||{}))}},{key:"mouseup document",value:function(t){this.onDragEnd(t)}},{key:"mousemove document",value:function(t){this.onDragMove(t)}},{key:"mousedown $bar",value:function(t){t.preventDefault(),this.isDown=!0}},{key:"mousedown $container",value:function(t){this.isDown=!0,this.onDragStart(t)}},{key:"touchend document",value:function(t){this.onDragEnd(t)}},{key:"touchmove document",value:function(t){this.onDragMove(t)}},{key:"touchstart $bar",value:function(t){t.preventDefault(),this.isDown=!0}},{key:"touchstart $container",value:function(t){this.onDragStart(t)}},{key:"onDragStart",value:function(t){this.isDown=!0,this.refreshColorUI(t)}},{key:"onDragMove",value:function(t){this.isDown&&this.refreshColorUI(t)}},{key:"onDragEnd",value:function(t){this.isDown=!1}},{key:"@changeColor",value:function(t){this.source!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),lr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.minValue=0,r.maxValue=1,r.source="base-slider",r}return H(e,ar),B(e,[{key:"getMinMaxPosition",value:function(){var t=this.getMinPosition(),e=this.getMaxDist();return{min:t,max:t+e,width:e}}},{key:"getCurrent",value:function(t){return min+this.getMaxDist()*t}},{key:"getMinPosition",value:function(){return this.refs.$container.offset().left}},{key:"getMaxDist",value:function(){return this.state.get("$container.width")}},{key:"getDist",value:function(t){var e=this.getMinMaxPosition(),r=e.min,n=e.max;return t<r?0:t>n?100:(t-r)/(n-r)*100}},{key:"getCaculatedDist",value:function(t){var e=t?this.getMousePosition(t):this.getCurrent(this.getDefaultValue()/this.maxValue);return this.getDist(e)}},{key:"getDefaultValue",value:function(){return 0}},{key:"setMousePosition",value:function(t){this.refs.$bar.css({left:t+"px"})}},{key:"getMousePosition",value:function(t){return qe.pos(t).pageX}},{key:"refresh",value:function(){this.setColorUI()}},{key:"setColorUI",value:function(t){(t=t||this.getDefaultValue())<=this.minValue?this.refs.$bar.addClass("first").removeClass("last"):t>=this.maxValue?this.refs.$bar.addClass("last").removeClass("first"):this.refs.$bar.removeClass("last").removeClass("first"),this.setMousePosition(this.getMaxDist()*((t||0)/this.maxValue))}}]),e}(),sr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.minValue=0,r.maxValue=1,r.source="value-control",r}return H(e,lr),B(e,[{key:"template",value:function(){return'\n            <div class="value">\n                <div ref="$container" class="value-container">\n                    <div ref="$bar" class="drag-bar"></div>\n                </div>\n            </div>\n        '}},{key:"setBackgroundColor",value:function(){this.refs.$container.css("background-color",this.$store.dispatch("/toRGB"))}},{key:"refresh",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"refresh",this).call(this),this.setBackgroundColor()}},{key:"getDefaultValue",value:function(){return this.$store.hsv.v}},{key:"refreshColorUI",value:function(t){var e=this.getCaculatedDist(t);this.setColorUI(e/100*this.maxValue),this.changeColor({type:"hsv",v:e/100*this.maxValue})}}]),e}(),ur=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.minValue=0,r.maxValue=1,r.source="opacity-control",r}return H(e,lr),B(e,[{key:"template",value:function(){return'\n        <div class="opacity">\n            <div ref="$container" class="opacity-container">\n                <div ref="$colorbar" class="color-bar"></div>\n                <div ref="$bar" class="drag-bar2"></div>\n            </div>\n        </div>\n        '}},{key:"refresh",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"refresh",this).call(this),this.setOpacityColorBar()}},{key:"setOpacityColorBar",value:function(){var t=Object.assign({},this.$store.rgb);t.a=0;var e=He.format(t,"rgb");t.a=1;var r=He.format(t,"rgb");this.setOpacityColorBarBackground(e,r)}},{key:"setOpacityColorBarBackground",value:function(t,e){this.refs.$colorbar.css("background","linear-gradient(to right, "+t+", "+e+")")}},{key:"getDefaultValue",value:function(){return this.$store.alpha}},{key:"refreshColorUI",value:function(t){var e=this.getCaculatedDist(t);this.setColorUI(e/100*this.maxValue),this.changeColor({a:Math.floor(e)/100*this.maxValue})}}]),e}(),cr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"components",value:function(){return{Value:sr,Opacity:ur}}},{key:"template",value:function(){return'\n        <div class="control">\n            <div target="Value" ></div>\n            <div target="Opacity" ></div>\n            <div ref="$controlPattern" class="empty"></div>\n            <div ref="$controlColor" class="color"></div>\n        </div>\n        '}},{key:"setBackgroundColor",value:function(){this.refs.$controlColor.css("background-color",this.$store.dispatch("/toRGB"))}},{key:"refresh",value:function(){this.setColorUI(),this.setBackgroundColor()}},{key:"setColorUI",value:function(){this.Value.setColorUI(),this.Opacity.setColorUI()}},{key:"@changeColor",value:function(t){"macos-control"!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),hr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.width=214,r.height=214,r.thinkness=0,r.half_thinkness=0,r.source="colorwheel",r}return H(e,rr),B(e,[{key:"template",value:function(){return'\n        <div class="wheel">\n            <canvas class="wheel-canvas" ref="$colorwheel" ></canvas>\n            <div class="wheel-canvas" ref="$valuewheel" ></div>\n            <div class="drag-pointer" ref="$drag_pointer"></div>\n        </div>\n        '}},{key:"refresh",value:function(t){this.setColorUI(t)}},{key:"setColorUI",value:function(t){this.renderCanvas(),this.renderValue(),this.setHueColor(null,t)}},{key:"renderValue",value:function(){var t=1-this.$store.hsv.v;this.refs.$valuewheel.css({"background-color":"rgba(0, 0, 0, "+t+")"})}},{key:"renderWheel",value:function(t,e){this.width&&!t&&(t=this.width),this.height&&!e&&(e=this.height);var r=new Xe("canvas"),n=r.el.getContext("2d");r.el.width=t,r.el.height=e,r.css({width:t+"px",height:e+"px"});for(var i=n.getImageData(0,0,t,e),o=i.data,a=Math.floor(t/2),l=Math.floor(e/2),s=t>e?l:a,u=a,h=l,f=0;f<e;f++)for(var v=0;v<t;v++){var g=v-u+1,d=f-h+1,p=g*g+d*d,m=c(g,d),y=He.HSVtoRGB(m,Math.min(Math.sqrt(p)/s,1),1),b=4*(f*t+v);o[b]=y.r,o[b+1]=y.g,o[b+2]=y.b,o[b+3]=255}return n.putImageData(i,0,0),this.thinkness>0&&(n.globalCompositeOperation="destination-out",n.fillStyle="black",n.beginPath(),n.arc(u,h,s-this.thinkness,0,2*Math.PI),n.closePath(),n.fill()),r}},{key:"renderCanvas",value:function(){if(!this.$store.createdWheelCanvas){var t=this.refs.$colorwheel,e=t.el.getContext("2d"),r=t.size(),n=L(r,2),i=n[0],o=n[1];this.width&&!i&&(i=this.width),this.height&&!o&&(o=this.height),t.el.width=i,t.el.height=o,t.css({width:i+"px",height:o+"px"});var a=this.renderWheel(i,o);e.drawImage(a.el,0,0),this.$store.createdWheelCanvas=!0}}},{key:"getDefaultValue",value:function(){return this.$store.hsv.h}},{key:"getDefaultSaturation",value:function(){return this.$store.hsv.s}},{key:"getCurrentXY",value:function(t,e,r,n,i){return t?qe.posXY(t):function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{x:s(t,e,r),y:u(t,e,n)}}(e,r,n,i)}},{key:"getRectangle",value:function(){var t=this.state.get("$el.width"),e=this.state.get("$el.height"),r=this.state.get("$colorwheel.width")/2,n=this.refs.$el.offset().left,i=n+t/2,o=this.refs.$el.offset().top;return{minX:n,minY:o,width:t,height:e,radius:r,centerX:i,centerY:o+e/2}}},{key:"setHueColor",value:function(t,e){if(this.state.get("$el.width")){var r=this.getRectangle(),n=r.minX,i=r.minY,o=r.radius,a=r.centerX,l=r.centerY,s=this.getCurrentXY(t,this.getDefaultValue(),this.getDefaultSaturation()*o,a,l),u=(d=s.x)-a,h=(p=s.y)-l,f=u*u+h*h,v=c(u,h);if(f>o*o)var g=this.getCurrentXY(null,v,o,a,l),d=g.x,p=g.y;var m=Math.min(Math.sqrt(f)/o,1);this.refs.$drag_pointer.css({left:d-n+"px",top:p-i+"px"}),e||this.changeColor({type:"hsv",h:v,s:m})}}},{key:"changeColor",value:function(t){this.$store.dispatch("/changeColor",Object.assign({source:this.source},t||{}))}},{key:"@changeColor",value:function(t){this.source!=t&&this.refresh(!0)}},{key:"@initColor",value:function(){this.refresh(!0)}},{key:"mouseup document",value:function(t){this.isDown=!1}},{key:"mousemove document",value:function(t){this.isDown&&this.setHueColor(t)}},{key:"mousedown $drag_pointer",value:function(t){t.preventDefault(),this.isDown=!0}},{key:"mousedown $el",value:function(t){this.isDown=!0,this.setHueColor(t)}},{key:"touchend document",value:function(t){this.isDown=!1}},{key:"touchmove document",value:function(t){this.isDown&&this.setHueColor(t)}},{key:"touchstart $drag_pointer",value:function(t){t.preventDefault(),this.isDown=!0}},{key:"touchstart $el",value:function(t){t.preventDefault(),this.isDown=!0,this.setHueColor(t)}}]),e}(),fr="chromedevtool-information",vr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"template",value:function(){return'\n        <div class="information hex">\n            <div ref="$informationChange" class="information-change">\n                <button ref="$formatChangeButton" type="button" class="format-change-button arrow-button"></button>\n            </div>\n            <div class="information-item hex">\n                <div class="input-field hex">\n                    <input ref="$hexCode" class="input" type="text" />\n                    <div class="title">HEX</div>\n                </div>\n            </div>\n            <div class="information-item rgb">\n                <div class="input-field rgb-r">\n                    <input ref="$rgb_r" class="input" type="number" step="1" min="0" max="255" />\n                    <div class="title">R</div>\n                </div>\n                <div class="input-field rgb-g">\n                    <input ref="$rgb_g" class="input" type="number" step="1" min="0" max="255" />\n                    <div class="title">G</div>\n                </div>\n                <div class="input-field rgb-b">\n                    <input ref="$rgb_b" class="input" type="number" step="1" min="0" max="255" />\n                    <div class="title">B</div>\n                </div>          \n                <div class="input-field rgb-a">\n                    <input ref="$rgb_a" class="input" type="number" step="0.01" min="0" max="1" />\n                    <div class="title">A</div>\n                </div>                                                            \n            </div>\n            <div class="information-item hsl">\n                <div class="input-field hsl-h">\n                    <input ref="$hsl_h" class="input" type="number" step="1" min="0" max="360" />\n                    <div class="title">H</div>\n                </div>\n                <div class="input-field hsl-s">\n                    <input ref="$hsl_s" class="input" type="number" step="1" min="0" max="100" />\n                    <div class="postfix">%</div>\n                    <div class="title">S</div>\n                </div>\n                <div class="input-field hsl-l">\n                    <input ref="$hsl_l" class="input" type="number" step="1" min="0" max="100" />\n                    <div class="postfix">%</div>                        \n                    <div class="title">L</div>\n                </div>\n                <div class="input-field hsl-a">\n                    <input ref="$hsl_a" class="input" type="number" step="0.01" min="0" max="1" />\n                    <div class="title">A</div>\n                </div>\n            </div>\n        </div>\n        '}},{key:"setCurrentFormat",value:function(t){this.format=t,this.initFormat()}},{key:"initFormat",value:function(){var t=this.format||"hex";this.$el.removeClass("hex"),this.$el.removeClass("rgb"),this.$el.removeClass("hsl"),this.$el.addClass(t)}},{key:"nextFormat",value:function(){var t=this.format||"hex",e="hex";"hex"==t?e="rgb":"rgb"==t?e="hsl":"hsl"==t&&(e=1==this.$store.alpha?"hex":"rgb"),this.$el.removeClass(t),this.$el.addClass(e),this.format=e,this.$store.dispatch("/changeFormat",this.format)}},{key:"getFormat",value:function(){return this.format||"hex"}},{key:"checkNumberKey",value:function(t){return qe.checkNumberKey(t)}},{key:"checkNotNumberKey",value:function(t){return!qe.checkNumberKey(t)}},{key:"changeRgbColor",value:function(){this.$store.dispatch("/changeColor",{type:"rgb",r:this.refs.$rgb_r.int(),g:this.refs.$rgb_g.int(),b:this.refs.$rgb_b.int(),a:this.refs.$rgb_a.float(),source:fr})}},{key:"changeHslColor",value:function(){this.$store.dispatch("/changeColor",{type:"hsl",h:this.refs.$hsl_h.int(),s:this.refs.$hsl_s.int(),l:this.refs.$hsl_l.int(),a:this.refs.$hsl_a.float(),source:fr})}},{key:"@changeColor",value:function(t){fr!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}},{key:"input $rgb_r",value:function(t){this.changeRgbColor()}},{key:"input $rgb_g",value:function(t){this.changeRgbColor()}},{key:"input $rgb_b",value:function(t){this.changeRgbColor()}},{key:"input $rgb_a",value:function(t){this.changeRgbColor()}},{key:"input $hsl_h",value:function(t){this.changeHslColor()}},{key:"input $hsl_s",value:function(t){this.changeHslColor()}},{key:"input $hsl_l",value:function(t){this.changeHslColor()}},{key:"input $hsl_a",value:function(t){this.changeHslColor()}},{key:"keydown $hexCode",value:function(t){if(t.which<65||t.which>70)return this.checkNumberKey(t)}},{key:"keyup $hexCode",value:function(t){var e=this.refs.$hexCode.val();"#"==e.charAt(0)&&7==e.length&&this.$store.dispatch("/changeColor",e,fr)}},{key:"click $formatChangeButton",value:function(t){this.nextFormat()}},{key:"setRGBInput",value:function(){this.refs.$rgb_r.val(this.$store.rgb.r),this.refs.$rgb_g.val(this.$store.rgb.g),this.refs.$rgb_b.val(this.$store.rgb.b),this.refs.$rgb_a.val(this.$store.alpha)}},{key:"setHSLInput",value:function(){this.refs.$hsl_h.val(this.$store.hsl.h),this.refs.$hsl_s.val(this.$store.hsl.s),this.refs.$hsl_l.val(this.$store.hsl.l),this.refs.$hsl_a.val(this.$store.alpha)}},{key:"setHexInput",value:function(){this.refs.$hexCode.val(this.$store.dispatch("/toHEX"))}},{key:"refresh",value:function(){this.setCurrentFormat(this.$store.format),this.setRGBInput(),this.setHSLInput(),this.setHexInput()}}]),e}(),gr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"template",value:function(){return'\n            <div class="color-chooser">\n                <div class="color-chooser-container">\n                    <div class="colorsets-item colorsets-item-header">\n                        <h1 class="title">Color Palettes</h1>\n                        <span ref="$toggleButton" class="items">&times;</span>\n                    </div>\n                    <div ref="$colorsetsList" class="colorsets-list"></div>\n                </div>\n            </div>\n        '}},{key:"refresh",value:function(){this.load()}},{key:"@changeCurrentColorSets",value:function(){this.refresh()}},{key:"@toggleColorChooser",value:function(){this.toggle()}},{key:"load $colorsetsList",value:function(){return"\n            <div>\n                "+this.$store.dispatch("/getColorSetsList").map(function(t,e){return'\n                        <div class="colorsets-item" data-colorsets-index="'+e+'" >\n                            <h1 class="title">'+t.name+'</h1>\n                            <div class="items">\n                                <div>\n                                    '+t.colors.filter(function(t,e){return e<5}).map(function(t){return'<div class="color-item" title="'+(t=t||"rgba(255, 255, 255, 1)")+'">\n                                                <div class="color-view" style="background-color: '+t+'"></div>\n                                            </div>'}).join("")+"\n                                </div>\n                            </div>\n                        </div>"}).join("")+"\n            </div>\n        "}},{key:"show",value:function(){this.$el.addClass("open")}},{key:"hide",value:function(){this.$el.removeClass("open")}},{key:"toggle",value:function(){this.$el.toggleClass("open")}},{key:"click $toggleButton",value:function(t){this.toggle()}},{key:"click $colorsetsList .colorsets-item",value:function(t){var e=t.$delegateTarget;if(e){var r=parseInt(e.attr("data-colorsets-index"));this.$store.dispatch("/setCurrentColorSets",r),this.hide()}}},{key:"destroy",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this),this.hide()}}]),e}(),dr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"template",value:function(){return'\n            <div class="colorsets">\n                <div class="menu" title="Open Color Palettes">\n                    <button ref="$colorSetsChooseButton" type="button" class="color-sets-choose-btn arrow-button"></button>\n                </div>\n                <div ref="$colorSetsColorList" class="color-list"></div>\n            </div>\n        '}},{key:"load $colorSetsColorList",value:function(){var t=this.$store.dispatch("/getCurrentColorSets");return'\n            <div class="current-color-sets">\n            '+this.$store.dispatch("/getCurrentColors").map(function(t,e){return'<div class="color-item" title="'+t+'" data-index="'+e+'" data-color="'+t+'">\n                    <div class="empty"></div>\n                    <div class="color-view" style="background-color: '+t+'"></div>\n                </div>'}).join("")+"   \n            "+(t.edit?'<div class="add-color-item">+</div>':"")+"         \n            </div>\n        "}},{key:"refresh",value:function(){this.load()}},{key:"addColor",value:function(t){this.$store.dispatch("/addCurrentColor",t)}},{key:"@changeCurrentColorSets",value:function(){this.refresh()}},{key:"click $colorSetsChooseButton",value:function(t){this.$store.emit("toggleColorChooser")}},{key:"contextmenu $colorSetsColorList",value:function(t){if(t.preventDefault(),this.$store.dispatch("/getCurrentColorSets").edit){var e=new Xe(t.target).closest("color-item");if(e){var r=parseInt(e.attr("data-index"));this.$store.emit("showContextMenu",t,r)}else this.$store.emit("showContextMenu",t)}}},{key:"click $colorSetsColorList .add-color-item",value:function(t){this.addColor(this.$store.dispatch("/toColor"))}},{key:"click $colorSetsColorList .color-item",value:function(t){this.$store.dispatch("/changeColor",t.$delegateTarget.attr("data-color"))}}]),e}(),pr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"template",value:function(){return'\n            <ul class="colorsets-contextmenu">\n                <li class="menu-item small-hide" data-type="remove-color">Remove color</li>\n                <li class="menu-item small-hide" data-type="remove-all-to-the-right">Remove all to the right</li>\n                <li class="menu-item" data-type="clear-palette">Clear palette</li>\n            </ul>\n        '}},{key:"show",value:function(t,e){var r=qe.pos(t);this.$el.css({top:r.clientY-10+"px",left:r.clientX+"px"}),this.$el.addClass("show"),this.selectedColorIndex=e,void 0===this.selectedColorIndex?this.$el.addClass("small"):this.$el.removeClass("small")}},{key:"hide",value:function(){this.$el.removeClass("show")}},{key:"runCommand",value:function(t){switch(t){case"remove-color":this.$store.dispatch("/removeCurrentColor",this.selectedColorIndex);break;case"remove-all-to-the-right":this.$store.dispatch("/removeCurrentColorToTheRight",this.selectedColorIndex);break;case"clear-palette":this.$store.dispatch("/clearPalette")}}},{key:"@showContextMenu",value:function(t,e){this.show(t,e)}},{key:"click $el .menu-item",value:function(t){t.preventDefault(),this.runCommand(t.$delegateTarget.attr("data-type")),this.hide()}}]),e}(),mr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,or),B(e,[{key:"template",value:function(){return'\n            <div class=\'colorpicker-body\'>\n                <div target="colorwheel"></div>\n                <div target="control"></div>\n                <div target="information"></div>\n                <div target="currentColorSets"></div>\n                <div target="colorSetsChooser"></div>\n                <div target="contextMenu"></div>                \n            </div>\n        '}},{key:"components",value:function(){return{colorwheel:hr,control:cr,information:vr,currentColorSets:dr,colorSetsChooser:gr,contextMenu:pr}}}]),e}(),yr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.minValue=0,r.maxValue=360,r.source="hue-control",r}return H(e,lr),B(e,[{key:"template",value:function(){return'\n            <div class="hue">\n                <div ref="$container" class="hue-container">\n                    <div ref="$bar" class="drag-bar"></div>\n                </div>\n            </div>\n        '}},{key:"getDefaultValue",value:function(){return this.$store.hsv.h}},{key:"refreshColorUI",value:function(t){var e=this.getCaculatedDist(t);this.setColorUI(e/100*this.maxValue),this.changeColor({h:e/100*this.maxValue,type:"hsv"})}}]),e}(),br=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"components",value:function(){return{Hue:yr,Opacity:ur}}},{key:"template",value:function(){return'\n        <div class="control">\n            <div target="Hue" ></div>\n            <div target="Opacity" ></div>\n            <div ref="$controlPattern" class="empty"></div>\n            <div ref="$controlColor" class="color"></div>\n        </div>\n        '}},{key:"setBackgroundColor",value:function(){this.refs.$controlColor.css("background-color",this.$store.dispatch("/toRGB"))}},{key:"refresh",value:function(){this.setColorUI(),this.setBackgroundColor()}},{key:"setColorUI",value:function(){this.Hue.setColorUI(),this.Opacity.setColorUI()}},{key:"@changeColor",value:function(t){"chromedevtool-control"!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),kr="chromedevtool-palette",Cr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"template",value:function(){return'\n        <div class="color">\n            <div ref="$saturation" class="saturation">\n                <div ref="$value" class="value">\n                    <div ref="$drag_pointer" class="drag-pointer"></div>\n                </div>\n            </div>        \n        </div>        \n        '}},{key:"setBackgroundColor",value:function(t){this.$el.css("background-color",t)}},{key:"refresh",value:function(){this.setColorUI()}},{key:"caculateSV",value:function(){var t=this.drag_pointer_pos||{x:0,y:0},e=this.state.get("$el.width"),r=this.state.get("$el.height"),n=t.x/e,i=(r-t.y)/r;this.$store.dispatch("/changeColor",{type:"hsv",s:n,v:i,source:kr})}},{key:"setColorUI",value:function(){var t=this.state.get("$el.width")*this.$store.hsv.s,e=this.state.get("$el.height")*(1-this.$store.hsv.v);this.refs.$drag_pointer.css({left:t+"px",top:e+"px"}),this.drag_pointer_pos={x:t,y:e},this.setBackgroundColor(this.$store.dispatch("/getHueColor"))}},{key:"setMainColor",value:function(t){var e=this.$el.offset(),r=this.state.get("$el.contentWidth"),n=this.state.get("$el.contentHeight"),i=qe.pos(t).pageX-e.left,o=qe.pos(t).pageY-e.top;i<0?i=0:i>r&&(i=r),o<0?o=0:o>n&&(o=n),this.refs.$drag_pointer.css({left:i+"px",top:o+"px"}),this.drag_pointer_pos={x:i,y:o},this.caculateSV()}},{key:"@changeColor",value:function(t){kr!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}},{key:"mouseup document",value:function(t){this.isDown=!1}},{key:"mousemove document",value:function(t){this.isDown&&this.setMainColor(t)}},{key:"mousedown",value:function(t){this.isDown=!0,this.setMainColor(t)}},{key:"mouseup",value:function(t){this.isDown=!1}},{key:"touchend document",value:function(t){this.isDown=!1}},{key:"touchmove document",value:function(t){this.isDown&&this.setMainColor(t)}},{key:"touchstart",value:function(t){t.preventDefault(),this.isDown=!0,this.setMainColor(t)}},{key:"touchend",value:function(t){this.isDown=!1}}]),e}(),xr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,or),B(e,[{key:"template",value:function(){return'\n            <div class=\'colorpicker-body\'>\n                <div target="palette"></div> \n                <div target="control"></div>\n                <div target="information"></div>\n                <div target="currentColorSets"></div>\n                <div target="colorSetsChooser"></div>\n                <div target="contextMenu"></div>\n            </div>\n        '}},{key:"components",value:function(){return{palette:Cr,control:br,information:vr,currentColorSets:dr,colorSetsChooser:gr,contextMenu:pr}}}]),e}(),_r=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"components",value:function(){return{Hue:yr,Opacity:ur}}},{key:"template",value:function(){return'\n        <div class="control">\n            <div target="Hue" ></div>\n            <div target="Opacity" ></div>\n        </div>\n        '}},{key:"refresh",value:function(){this.setColorUI()}},{key:"setColorUI",value:function(){this.Hue.setColorUI(),this.Opacity.setColorUI()}},{key:"@changeColor",value:function(t){"mini-control"!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),wr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,or),B(e,[{key:"template",value:function(){return'\n            <div class=\'colorpicker-body\'>\n                <div target="palette"></div>\n                <div target="control"></div>\n            </div>\n        '}},{key:"components",value:function(){return{palette:Cr,control:_r}}}]),e}(),Mr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.source="vertical-slider",r}return H(e,lr),B(e,[{key:"getMaxDist",value:function(){return this.state.get("$container.height")}},{key:"setMousePosition",value:function(t){this.refs.$bar.css({top:t+"px"})}},{key:"getMousePosition",value:function(t){return qe.pos(t).pageY}},{key:"getMinPosition",value:function(){return this.refs.$container.offset().top}},{key:"getCaculatedDist",value:function(t){var e=t?this.getMousePosition(t):this.getCurrent(this.getDefaultValue()/this.maxValue);return 100-this.getDist(e)}},{key:"setColorUI",value:function(t){(t=t||this.getDefaultValue())<=this.minValue?this.refs.$bar.addClass("first").removeClass("last"):t>=this.maxValue?this.refs.$bar.addClass("last").removeClass("first"):this.refs.$bar.removeClass("last").removeClass("first");var e=1-(t||0)/this.maxValue;this.setMousePosition(this.getMaxDist()*e)}}]),e}(),Or=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.minValue=0,r.maxValue=360,r.source="vertical-hue-control",r}return H(e,Mr),B(e,[{key:"template",value:function(){return'\n            <div class="hue">\n                <div ref="$container" class="hue-container">\n                    <div ref="$bar" class="drag-bar"></div>\n                </div>\n            </div>\n        '}},{key:"getDefaultValue",value:function(){return this.$store.hsv.h}},{key:"refreshColorUI",value:function(t){var e=this.getCaculatedDist(t);this.setColorUI(e/100*this.maxValue),this.changeColor({h:e/100*this.maxValue,type:"hsv"})}}]),e}(),Sr=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.source="vertical-opacity-control",r}return H(e,Mr),B(e,[{key:"template",value:function(){return'\n        <div class="opacity">\n            <div ref="$container" class="opacity-container">\n                <div ref="$colorbar" class="color-bar"></div>\n                <div ref="$bar" class="drag-bar2"></div>\n            </div>\n        </div>\n        '}},{key:"refresh",value:function(){F(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"refresh",this).call(this),this.setOpacityColorBar()}},{key:"setOpacityColorBar",value:function(){var t=Object.assign({},this.$store.rgb);t.a=0;var e=He.format(t,"rgb");t.a=1;var r=He.format(t,"rgb");this.refs.$colorbar.css("background","linear-gradient(to top, "+e+", "+r+")")}},{key:"getDefaultValue",value:function(){return this.$store.alpha}},{key:"refreshColorUI",value:function(t){var e=this.getCaculatedDist(t);this.setColorUI(e/100*this.maxValue),this.changeColor({a:Math.floor(e)/100*this.maxValue})}}]),e}(),Er=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"components",value:function(){return{Hue:Or,Opacity:Sr}}},{key:"template",value:function(){return'<div class="control"><div target="Hue" ></div><div target="Opacity" ></div></div>'}},{key:"refresh",value:function(){this.setColorUI()}},{key:"setColorUI",value:function(){this.Hue.setColorUI(),this.Opacity.setColorUI()}},{key:"@changeColor",value:function(t){"mini-control"!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),Tr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,or),B(e,[{key:"template",value:function(){return'\n            <div class=\'colorpicker-body\'>\n                <div target="palette"></div><div target="control"></div>\n            </div>\n        '}},{key:"components",value:function(){return{palette:Cr,control:Er}}}]),e}(),Ar=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"components",value:function(){return{Value:sr,Opacity:ur}}},{key:"template",value:function(){return'\n        <div class="control">\n            <div target="Value" ></div>\n            <div target="Opacity" ></div>\n            <div ref="$controlPattern" class="empty"></div>\n            <div ref="$controlColor" class="color"></div>\n        </div>\n        '}},{key:"setBackgroundColor",value:function(){this.refs.$controlColor.css("background-color",this.$store.dispatch("/toRGB"))}},{key:"refresh",value:function(){this.setColorUI(),this.setBackgroundColor()}},{key:"setColorUI",value:function(){this.Value.setColorUI(),this.Opacity.setColorUI()}},{key:"@changeColor",value:function(t){"macos-control"!=t&&this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),Ir=function(t){function e(t){D(this,e);var r=U(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.width=214,r.height=214,r.thinkness=16,r.half_thinkness=r.thinkness/2,r.source="colorring",r}return H(e,hr),B(e,[{key:"template",value:function(){return'\n        <div class="wheel" data-type="ring">\n            <canvas class="wheel-canvas" ref="$colorwheel" ></canvas>\n            <div class="drag-pointer" ref="$drag_pointer"></div>\n        </div>\n        '}},{key:"setColorUI",value:function(t){this.renderCanvas(),this.setHueColor(null,t)}},{key:"getDefaultValue",value:function(){return this.$store.hsv.h}},{key:"setHueColor",value:function(t,e){if(this.state.get("$el.width")){var r=this.getRectangle(),n=r.minX,i=r.minY,o=r.radius,a=r.centerX,l=r.centerY,s=this.getCurrentXY(t,this.getDefaultValue(),o,a,l),u=c((f=s.x)-a,(v=s.y)-l),h=this.getCurrentXY(null,u,o-this.half_thinkness,a,l),f=h.x,v=h.y;this.refs.$drag_pointer.css({left:f-n+"px",top:v-i+"px"}),e||this.changeColor({type:"hsv",h:u})}}}]),e}(),Pr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,or),B(e,[{key:"template",value:function(){return'\n            <div class=\'colorpicker-body\'>\n                <div target="colorring"></div>\n                <div target="palette"></div> \n                <div target="control"></div>\n                <div target="information"></div>\n                <div target="currentColorSets"></div>\n                <div target="colorSetsChooser"></div>\n                <div target="contextMenu"></div>\n            </div>\n        '}},{key:"components",value:function(){return{colorring:Ir,palette:Cr,control:Ar,information:vr,currentColorSets:dr,colorSetsChooser:gr,contextMenu:pr}}}]),e}(),Dr=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,rr),B(e,[{key:"components",value:function(){return{Hue:Or,Opacity:Sr}}},{key:"template",value:function(){return'\n        <div class="control">\n            <div target="Hue" ></div>\n            <div target="Opacity" ></div>\n        </div>\n        '}},{key:"refresh",value:function(){this.setColorUI()}},{key:"setColorUI",value:function(){this.Hue.setColorUI(),this.Opacity.setColorUI()}},{key:"@changeColor",value:function(){this.refresh()}},{key:"@initColor",value:function(){this.refresh()}}]),e}(),Br=function(t){function e(){return D(this,e),U(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return H(e,or),B(e,[{key:"template",value:function(){return'\n            <div class=\'colorpicker-body\'>\n                <div target="palette"></div> \n                <div target="control"></div>\n                <div target="information"></div>\n                <div target="currentColorSets"></div>\n                <div target="colorSetsChooser"></div>\n                <div target="contextMenu"></div>\n            </div>\n        '}},{key:"components",value:function(){return{palette:Cr,control:Dr,information:vr,currentColorSets:dr,colorSetsChooser:gr,contextMenu:pr}}}]),e}(),Rr={create:function(t){switch(t.type){case"macos":return new mr(t);case"xd":return new Br(t);case"ring":return new Pr(t);case"mini":return new wr(t);case"mini-vertical":return new Tr(t);case"sketch":case"palette":default:return new xr(t)}},ColorPicker:xr,ChromeDevToolColorPicker:xr,MacOSColorPicker:mr,RingColorPicker:Pr,MiniColorPicker:wr,MiniVerticalColorPicker:Tr},jr="codemirror-colorview",Fr="codemirror-colorview-background",Hr=["comment","builtin"];function Ur(t,e){"setValue"==e.origin?(t.state.colorpicker.close_color_picker(),t.state.colorpicker.init_color_update(),t.state.colorpicker.style_color_update()):t.state.colorpicker.style_color_update(t.getCursor().line)}function Lr(t,e){t.state.colorpicker.isUpdate||(t.state.colorpicker.isUpdate=!0,t.state.colorpicker.close_color_picker(),t.state.colorpicker.init_color_update(),t.state.colorpicker.style_color_update())}function Vr(t,e){Ur(t,{origin:"setValue"})}function Nr(t,e){t.state.colorpicker.keyup(e)}function Gr(t,e){t.state.colorpicker.is_edit_mode()&&t.state.colorpicker.check_mousedown(e)}function zr(t,e){Ur(t,{origin:"setValue"})}function Xr(t){t.state.colorpicker.close_color_picker()}function Yr(t){t.state.colorpicker.hide_delay_color_picker(t.state.colorpicker.opt.hideDelay||1e3)}var Wr=function(){function t(e,r){D(this,t),r="boolean"==typeof r?{mode:"edit"}:Object.assign({mode:"edit"},r||{}),this.opt=r,this.cm=e,this.markers={},this.excluded_token=this.opt.excluded_token||Hr,this.opt.colorpicker?this.colorpicker=this.opt.colorpicker(this.opt):this.colorpicker=Rr.create(this.opt),this.init_event()}return B(t,[{key:"init_event",value:function(){var t,e,r,n,i;this.cm.on("mousedown",Gr),this.cm.on("keyup",Nr),this.cm.on("change",Ur),this.cm.on("update",Lr),this.cm.on("refresh",Vr),this.cm.on("blur",Yr),this.onPasteCallback=(t=this.cm,e=zr,function(r){e.call(this,t,r)}),this.onScrollEvent=(r=Xr,n=50,i=void 0,function(t,e){i&&clearTimeout(i),i=setTimeout(function(){r(t,e)},n||300)}),this.cm.getWrapperElement().addEventListener("paste",this.onPasteCallback),this.is_edit_mode()&&this.cm.on("scroll",this.onScrollEvent)}},{key:"is_edit_mode",value:function(){return"edit"==this.opt.mode}},{key:"is_view_mode",value:function(){return"view"==this.opt.mode}},{key:"destroy",value:function(){this.cm.off("mousedown",Gr),this.cm.off("keyup",Nr),this.cm.off("change",Ur),this.cm.off("blur",Yr),this.cm.getWrapperElement().removeEventListener("paste",this.onPasteCallback),this.is_edit_mode()&&this.cm.off("scroll",this.onScrollEvent)}},{key:"hasClass",value:function(t,e){return!!t.className&&(" "+t.className+" ").indexOf(" "+e+" ")>-1}},{key:"check_mousedown",value:function(t){this.hasClass(t.target,Fr)?this.open_color_picker(t.target.parentNode):this.close_color_picker()}},{key:"popup_color_picker",value:function(t){var e=this.cm.getCursor(),r=this,n={lineNo:e.line,ch:e.ch,color:t||"#FFFFFF",isShortCut:!0};Object.keys(this.markers).forEach(function(t){if(("#"+t).indexOf("#"+n.lineNo+":")>-1){var e=r.markers[t];e.ch<=n.ch&&n.ch<=e.ch+e.color.length&&(n.ch=e.ch,n.color=e.color,n.nameColor=e.nameColor)}}),this.open_color_picker(n)}},{key:"open_color_picker",value:function(t){var e=this,r=t.lineNo,n=t.ch,i=t.nameColor,o=t.color;if(this.colorpicker){var a=o,l=this.cm.charCoords({line:r,ch:n});this.colorpicker.show({left:l.left,top:l.bottom,isShortCut:t.isShortCut||!1,hideDelay:this.opt.hideDelay||2e3},i||o,function(t){e.cm.replaceRange(t,{line:r,ch:n},{line:r,ch:n+a.length},"*colorpicker"),e.cm.focus(),a=t})}}},{key:"close_color_picker",value:function(){this.colorpicker&&this.colorpicker.hide()}},{key:"hide_delay_color_picker",value:function(){this.colorpicker&&this.colorpicker.runHideDelay()}},{key:"key",value:function(t,e){return[t,e].join(":")}},{key:"keyup",value:function(t){this.colorpicker&&("Escape"==t.key?this.colorpicker.hide():0==this.colorpicker.isShortCut&&this.colorpicker.hide())}},{key:"init_color_update",value:function(){this.markers={}}},{key:"style_color_update",value:function(t){if(t)this.match(t);else for(var e=this.cm.lineCount(),r=0;r<e;r++)this.match(r)}},{key:"empty_marker",value:function(t,e){for(var r,n,i=e.markedSpans||[],o=0,a=i.length;o<a;o++){var l=this.key(t,i[o].from);l&&(r=i[o].marker.replacedWith,n=jr,r&&r.className&&(" "+r.className+" ").indexOf(" "+n+" ")>-1)&&(delete this.markers[l],i[o].marker.clear())}}},{key:"match_result",value:function(t){return He.matches(t.text)}},{key:"submatch",value:function(t,e){var r=this;this.empty_marker(t,e);var n={next:0};this.match_result(e).forEach(function(i){r.render(n,t,e,i.color,i.nameColor)})}},{key:"match",value:function(t){var e=this.cm.getLineHandle(t),r=this;this.cm.operation(function(){r.submatch(t,e)})}},{key:"make_element",value:function(){var t=document.createElement("div");return t.className=jr,this.is_edit_mode()?t.title="open color picker":t.title="",t.back_element=this.make_background_element(),t.appendChild(t.back_element),t}},{key:"make_background_element",value:function(){var t=document.createElement("div");return t.className=Fr,t}},{key:"set_state",value:function(t,e,r,n){var i=this.create_marker(t,e);return i.lineNo=t,i.ch=e,i.color=r,i.nameColor=n,i}},{key:"create_marker",value:function(t,e){return this.has_marker(t,e)||this.init_marker(t,e),this.get_marker(t,e)}},{key:"init_marker",value:function(t,e){this.markers[this.key(t,e)]=this.make_element()}},{key:"has_marker",value:function(t,e){return!!this.get_marker(t,e)}},{key:"get_marker",value:function(t,e){var r=this.key(t,e);return this.markers[r]}},{key:"update_element",value:function(t,e){t.back_element.style.backgroundColor=e}},{key:"set_mark",value:function(t,e,r){this.cm.setBookmark({line:t,ch:e},{widget:r,handleMouseEvents:!0})}},{key:"is_excluded_token",value:function(t,e){var r=this.cm.getTokenAt({line:t,ch:e},!0),n=r.type,i=r.state.state;if(null==n&&"block"==i)return!0;if(null==n&&"top"==i)return!0;for(var o=0,a=0,l=this.excluded_token.length;a<l;a++)if(n===this.excluded_token[a]){o++;break}return o>0}},{key:"render",value:function(t,e,r,n,i){var o=r.text.indexOf(n,t.next);if(!0!==this.is_excluded_token(e,o)){if(t.next=o+n.length,this.has_marker(e,o))return this.update_element(this.create_marker(e,o),i||n),void this.set_state(e,o,n,i);var a=this.create_marker(e,o);this.update_element(a,i||n),this.set_state(e,o,n,i||n),this.set_mark(e,o,a)}}}]),t}();try{var qr=require("codemirror")}catch(t){}var Kr=function(){return qr||window.CodeMirror};function Zr(){var t=Kr();t&&t.defineOption("colorpicker",!1,function(e,r,n){n&&n!=t.Init&&e.state.colorpicker&&(e.state.colorpicker.destroy(),e.state.colorpicker=null),r&&(e.state.colorpicker=new Wr(e,r))})}return Zr(),j({},Ne,Rr,{load:Zr})}();

(function webpackUniversalModuleDefinition(root, factory) {
/* istanbul ignore next */
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
/* istanbul ignore next */
	else if(typeof exports === 'object')
		exports["esprima"] = factory();
	else
		root["esprima"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/* istanbul ignore if */
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/*
	  Copyright JS Foundation and other contributors, https://js.foundation/

	  Redistribution and use in source and binary forms, with or without
	  modification, are permitted provided that the following conditions are met:

	    * Redistributions of source code must retain the above copyright
	      notice, this list of conditions and the following disclaimer.
	    * Redistributions in binary form must reproduce the above copyright
	      notice, this list of conditions and the following disclaimer in the
	      documentation and/or other materials provided with the distribution.

	  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
	  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
	  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
	  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
	  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
	  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
	Object.defineProperty(exports, "__esModule", { value: true });
	var comment_handler_1 = __webpack_require__(1);
	var jsx_parser_1 = __webpack_require__(3);
	var parser_1 = __webpack_require__(8);
	var tokenizer_1 = __webpack_require__(15);
	function parse(code, options, delegate) {
	    var commentHandler = null;
	    var proxyDelegate = function (node, metadata) {
	        if (delegate) {
	            delegate(node, metadata);
	        }
	        if (commentHandler) {
	            commentHandler.visit(node, metadata);
	        }
	    };
	    var parserDelegate = (typeof delegate === 'function') ? proxyDelegate : null;
	    var collectComment = false;
	    if (options) {
	        collectComment = (typeof options.comment === 'boolean' && options.comment);
	        var attachComment = (typeof options.attachComment === 'boolean' && options.attachComment);
	        if (collectComment || attachComment) {
	            commentHandler = new comment_handler_1.CommentHandler();
	            commentHandler.attach = attachComment;
	            options.comment = true;
	            parserDelegate = proxyDelegate;
	        }
	    }
	    var isModule = false;
	    if (options && typeof options.sourceType === 'string') {
	        isModule = (options.sourceType === 'module');
	    }
	    var parser;
	    if (options && typeof options.jsx === 'boolean' && options.jsx) {
	        parser = new jsx_parser_1.JSXParser(code, options, parserDelegate);
	    }
	    else {
	        parser = new parser_1.Parser(code, options, parserDelegate);
	    }
	    var program = isModule ? parser.parseModule() : parser.parseScript();
	    var ast = program;
	    if (collectComment && commentHandler) {
	        ast.comments = commentHandler.comments;
	    }
	    if (parser.config.tokens) {
	        ast.tokens = parser.tokens;
	    }
	    if (parser.config.tolerant) {
	        ast.errors = parser.errorHandler.errors;
	    }
	    return ast;
	}
	exports.parse = parse;
	function parseModule(code, options, delegate) {
	    var parsingOptions = options || {};
	    parsingOptions.sourceType = 'module';
	    return parse(code, parsingOptions, delegate);
	}
	exports.parseModule = parseModule;
	function parseScript(code, options, delegate) {
	    var parsingOptions = options || {};
	    parsingOptions.sourceType = 'script';
	    return parse(code, parsingOptions, delegate);
	}
	exports.parseScript = parseScript;
	function tokenize(code, options, delegate) {
	    var tokenizer = new tokenizer_1.Tokenizer(code, options);
	    var tokens;
	    tokens = [];
	    try {
	        while (true) {
	            var token = tokenizer.getNextToken();
	            if (!token) {
	                break;
	            }
	            if (delegate) {
	                token = delegate(token);
	            }
	            tokens.push(token);
	        }
	    }
	    catch (e) {
	        tokenizer.errorHandler.tolerate(e);
	    }
	    if (tokenizer.errorHandler.tolerant) {
	        tokens.errors = tokenizer.errors();
	    }
	    return tokens;
	}
	exports.tokenize = tokenize;
	var syntax_1 = __webpack_require__(2);
	exports.Syntax = syntax_1.Syntax;
	// Sync with *.json manifests.
	exports.version = '4.0.1';


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var syntax_1 = __webpack_require__(2);
	var CommentHandler = (function () {
	    function CommentHandler() {
	        this.attach = false;
	        this.comments = [];
	        this.stack = [];
	        this.leading = [];
	        this.trailing = [];
	    }
	    CommentHandler.prototype.insertInnerComments = function (node, metadata) {
	        //  innnerComments for properties empty block
	        //  `function a() {/** comments **\/}`
	        if (node.type === syntax_1.Syntax.BlockStatement && node.body.length === 0) {
	            var innerComments = [];
	            for (var i = this.leading.length - 1; i >= 0; --i) {
	                var entry = this.leading[i];
	                if (metadata.end.offset >= entry.start) {
	                    innerComments.unshift(entry.comment);
	                    this.leading.splice(i, 1);
	                    this.trailing.splice(i, 1);
	                }
	            }
	            if (innerComments.length) {
	                node.innerComments = innerComments;
	            }
	        }
	    };
	    CommentHandler.prototype.findTrailingComments = function (metadata) {
	        var trailingComments = [];
	        if (this.trailing.length > 0) {
	            for (var i = this.trailing.length - 1; i >= 0; --i) {
	                var entry_1 = this.trailing[i];
	                if (entry_1.start >= metadata.end.offset) {
	                    trailingComments.unshift(entry_1.comment);
	                }
	            }
	            this.trailing.length = 0;
	            return trailingComments;
	        }
	        var entry = this.stack[this.stack.length - 1];
	        if (entry && entry.node.trailingComments) {
	            var firstComment = entry.node.trailingComments[0];
	            if (firstComment && firstComment.range[0] >= metadata.end.offset) {
	                trailingComments = entry.node.trailingComments;
	                delete entry.node.trailingComments;
	            }
	        }
	        return trailingComments;
	    };
	    CommentHandler.prototype.findLeadingComments = function (metadata) {
	        var leadingComments = [];
	        var target;
	        while (this.stack.length > 0) {
	            var entry = this.stack[this.stack.length - 1];
	            if (entry && entry.start >= metadata.start.offset) {
	                target = entry.node;
	                this.stack.pop();
	            }
	            else {
	                break;
	            }
	        }
	        if (target) {
	            var count = target.leadingComments ? target.leadingComments.length : 0;
	            for (var i = count - 1; i >= 0; --i) {
	                var comment = target.leadingComments[i];
	                if (comment.range[1] <= metadata.start.offset) {
	                    leadingComments.unshift(comment);
	                    target.leadingComments.splice(i, 1);
	                }
	            }
	            if (target.leadingComments && target.leadingComments.length === 0) {
	                delete target.leadingComments;
	            }
	            return leadingComments;
	        }
	        for (var i = this.leading.length - 1; i >= 0; --i) {
	            var entry = this.leading[i];
	            if (entry.start <= metadata.start.offset) {
	                leadingComments.unshift(entry.comment);
	                this.leading.splice(i, 1);
	            }
	        }
	        return leadingComments;
	    };
	    CommentHandler.prototype.visitNode = function (node, metadata) {
	        if (node.type === syntax_1.Syntax.Program && node.body.length > 0) {
	            return;
	        }
	        this.insertInnerComments(node, metadata);
	        var trailingComments = this.findTrailingComments(metadata);
	        var leadingComments = this.findLeadingComments(metadata);
	        if (leadingComments.length > 0) {
	            node.leadingComments = leadingComments;
	        }
	        if (trailingComments.length > 0) {
	            node.trailingComments = trailingComments;
	        }
	        this.stack.push({
	            node: node,
	            start: metadata.start.offset
	        });
	    };
	    CommentHandler.prototype.visitComment = function (node, metadata) {
	        var type = (node.type[0] === 'L') ? 'Line' : 'Block';
	        var comment = {
	            type: type,
	            value: node.value
	        };
	        if (node.range) {
	            comment.range = node.range;
	        }
	        if (node.loc) {
	            comment.loc = node.loc;
	        }
	        this.comments.push(comment);
	        if (this.attach) {
	            var entry = {
	                comment: {
	                    type: type,
	                    value: node.value,
	                    range: [metadata.start.offset, metadata.end.offset]
	                },
	                start: metadata.start.offset
	            };
	            if (node.loc) {
	                entry.comment.loc = node.loc;
	            }
	            node.type = type;
	            this.leading.push(entry);
	            this.trailing.push(entry);
	        }
	    };
	    CommentHandler.prototype.visit = function (node, metadata) {
	        if (node.type === 'LineComment') {
	            this.visitComment(node, metadata);
	        }
	        else if (node.type === 'BlockComment') {
	            this.visitComment(node, metadata);
	        }
	        else if (this.attach) {
	            this.visitNode(node, metadata);
	        }
	    };
	    return CommentHandler;
	}());
	exports.CommentHandler = CommentHandler;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Syntax = {
	    AssignmentExpression: 'AssignmentExpression',
	    AssignmentPattern: 'AssignmentPattern',
	    ArrayExpression: 'ArrayExpression',
	    ArrayPattern: 'ArrayPattern',
	    ArrowFunctionExpression: 'ArrowFunctionExpression',
	    AwaitExpression: 'AwaitExpression',
	    BlockStatement: 'BlockStatement',
	    BinaryExpression: 'BinaryExpression',
	    BreakStatement: 'BreakStatement',
	    CallExpression: 'CallExpression',
	    CatchClause: 'CatchClause',
	    ClassBody: 'ClassBody',
	    ClassDeclaration: 'ClassDeclaration',
	    ClassExpression: 'ClassExpression',
	    ConditionalExpression: 'ConditionalExpression',
	    ContinueStatement: 'ContinueStatement',
	    DoWhileStatement: 'DoWhileStatement',
	    DebuggerStatement: 'DebuggerStatement',
	    EmptyStatement: 'EmptyStatement',
	    ExportAllDeclaration: 'ExportAllDeclaration',
	    ExportDefaultDeclaration: 'ExportDefaultDeclaration',
	    ExportNamedDeclaration: 'ExportNamedDeclaration',
	    ExportSpecifier: 'ExportSpecifier',
	    ExpressionStatement: 'ExpressionStatement',
	    ForStatement: 'ForStatement',
	    ForOfStatement: 'ForOfStatement',
	    ForInStatement: 'ForInStatement',
	    FunctionDeclaration: 'FunctionDeclaration',
	    FunctionExpression: 'FunctionExpression',
	    Identifier: 'Identifier',
	    IfStatement: 'IfStatement',
	    ImportDeclaration: 'ImportDeclaration',
	    ImportDefaultSpecifier: 'ImportDefaultSpecifier',
	    ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
	    ImportSpecifier: 'ImportSpecifier',
	    Literal: 'Literal',
	    LabeledStatement: 'LabeledStatement',
	    LogicalExpression: 'LogicalExpression',
	    MemberExpression: 'MemberExpression',
	    MetaProperty: 'MetaProperty',
	    MethodDefinition: 'MethodDefinition',
	    NewExpression: 'NewExpression',
	    ObjectExpression: 'ObjectExpression',
	    ObjectPattern: 'ObjectPattern',
	    Program: 'Program',
	    Property: 'Property',
	    RestElement: 'RestElement',
	    ReturnStatement: 'ReturnStatement',
	    SequenceExpression: 'SequenceExpression',
	    SpreadElement: 'SpreadElement',
	    Super: 'Super',
	    SwitchCase: 'SwitchCase',
	    SwitchStatement: 'SwitchStatement',
	    TaggedTemplateExpression: 'TaggedTemplateExpression',
	    TemplateElement: 'TemplateElement',
	    TemplateLiteral: 'TemplateLiteral',
	    ThisExpression: 'ThisExpression',
	    ThrowStatement: 'ThrowStatement',
	    TryStatement: 'TryStatement',
	    UnaryExpression: 'UnaryExpression',
	    UpdateExpression: 'UpdateExpression',
	    VariableDeclaration: 'VariableDeclaration',
	    VariableDeclarator: 'VariableDeclarator',
	    WhileStatement: 'WhileStatement',
	    WithStatement: 'WithStatement',
	    YieldExpression: 'YieldExpression'
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
/* istanbul ignore next */
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var character_1 = __webpack_require__(4);
	var JSXNode = __webpack_require__(5);
	var jsx_syntax_1 = __webpack_require__(6);
	var Node = __webpack_require__(7);
	var parser_1 = __webpack_require__(8);
	var token_1 = __webpack_require__(13);
	var xhtml_entities_1 = __webpack_require__(14);
	token_1.TokenName[100 /* Identifier */] = 'JSXIdentifier';
	token_1.TokenName[101 /* Text */] = 'JSXText';
	// Fully qualified element name, e.g. <svg:path> returns "svg:path"
	function getQualifiedElementName(elementName) {
	    var qualifiedName;
	    switch (elementName.type) {
	        case jsx_syntax_1.JSXSyntax.JSXIdentifier:
	            var id = elementName;
	            qualifiedName = id.name;
	            break;
	        case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
	            var ns = elementName;
	            qualifiedName = getQualifiedElementName(ns.namespace) + ':' +
	                getQualifiedElementName(ns.name);
	            break;
	        case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
	            var expr = elementName;
	            qualifiedName = getQualifiedElementName(expr.object) + '.' +
	                getQualifiedElementName(expr.property);
	            break;
	        /* istanbul ignore next */
	        default:
	            break;
	    }
	    return qualifiedName;
	}
	var JSXParser = (function (_super) {
	    __extends(JSXParser, _super);
	    function JSXParser(code, options, delegate) {
	        return _super.call(this, code, options, delegate) || this;
	    }
	    JSXParser.prototype.parsePrimaryExpression = function () {
	        return this.match('<') ? this.parseJSXRoot() : _super.prototype.parsePrimaryExpression.call(this);
	    };
	    JSXParser.prototype.startJSX = function () {
	        // Unwind the scanner before the lookahead token.
	        this.scanner.index = this.startMarker.index;
	        this.scanner.lineNumber = this.startMarker.line;
	        this.scanner.lineStart = this.startMarker.index - this.startMarker.column;
	    };
	    JSXParser.prototype.finishJSX = function () {
	        // Prime the next lookahead.
	        this.nextToken();
	    };
	    JSXParser.prototype.reenterJSX = function () {
	        this.startJSX();
	        this.expectJSX('}');
	        // Pop the closing '}' added from the lookahead.
	        if (this.config.tokens) {
	            this.tokens.pop();
	        }
	    };
	    JSXParser.prototype.createJSXNode = function () {
	        this.collectComments();
	        return {
	            index: this.scanner.index,
	            line: this.scanner.lineNumber,
	            column: this.scanner.index - this.scanner.lineStart
	        };
	    };
	    JSXParser.prototype.createJSXChildNode = function () {
	        return {
	            index: this.scanner.index,
	            line: this.scanner.lineNumber,
	            column: this.scanner.index - this.scanner.lineStart
	        };
	    };
	    JSXParser.prototype.scanXHTMLEntity = function (quote) {
	        var result = '&';
	        var valid = true;
	        var terminated = false;
	        var numeric = false;
	        var hex = false;
	        while (!this.scanner.eof() && valid && !terminated) {
	            var ch = this.scanner.source[this.scanner.index];
	            if (ch === quote) {
	                break;
	            }
	            terminated = (ch === ';');
	            result += ch;
	            ++this.scanner.index;
	            if (!terminated) {
	                switch (result.length) {
	                    case 2:
	                        // e.g. '&#123;'
	                        numeric = (ch === '#');
	                        break;
	                    case 3:
	                        if (numeric) {
	                            // e.g. '&#x41;'
	                            hex = (ch === 'x');
	                            valid = hex || character_1.Character.isDecimalDigit(ch.charCodeAt(0));
	                            numeric = numeric && !hex;
	                        }
	                        break;
	                    default:
	                        valid = valid && !(numeric && !character_1.Character.isDecimalDigit(ch.charCodeAt(0)));
	                        valid = valid && !(hex && !character_1.Character.isHexDigit(ch.charCodeAt(0)));
	                        break;
	                }
	            }
	        }
	        if (valid && terminated && result.length > 2) {
	            // e.g. '&#x41;' becomes just '#x41'
	            var str = result.substr(1, result.length - 2);
	            if (numeric && str.length > 1) {
	                result = String.fromCharCode(parseInt(str.substr(1), 10));
	            }
	            else if (hex && str.length > 2) {
	                result = String.fromCharCode(parseInt('0' + str.substr(1), 16));
	            }
	            else if (!numeric && !hex && xhtml_entities_1.XHTMLEntities[str]) {
	                result = xhtml_entities_1.XHTMLEntities[str];
	            }
	        }
	        return result;
	    };
	    // Scan the next JSX token. This replaces Scanner#lex when in JSX mode.
	    JSXParser.prototype.lexJSX = function () {
	        var cp = this.scanner.source.charCodeAt(this.scanner.index);
	        // < > / : = { }
	        if (cp === 60 || cp === 62 || cp === 47 || cp === 58 || cp === 61 || cp === 123 || cp === 125) {
	            var value = this.scanner.source[this.scanner.index++];
	            return {
	                type: 7 /* Punctuator */,
	                value: value,
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: this.scanner.index - 1,
	                end: this.scanner.index
	            };
	        }
	        // " '
	        if (cp === 34 || cp === 39) {
	            var start = this.scanner.index;
	            var quote = this.scanner.source[this.scanner.index++];
	            var str = '';
	            while (!this.scanner.eof()) {
	                var ch = this.scanner.source[this.scanner.index++];
	                if (ch === quote) {
	                    break;
	                }
	                else if (ch === '&') {
	                    str += this.scanXHTMLEntity(quote);
	                }
	                else {
	                    str += ch;
	                }
	            }
	            return {
	                type: 8 /* StringLiteral */,
	                value: str,
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: start,
	                end: this.scanner.index
	            };
	        }
	        // ... or .
	        if (cp === 46) {
	            var n1 = this.scanner.source.charCodeAt(this.scanner.index + 1);
	            var n2 = this.scanner.source.charCodeAt(this.scanner.index + 2);
	            var value = (n1 === 46 && n2 === 46) ? '...' : '.';
	            var start = this.scanner.index;
	            this.scanner.index += value.length;
	            return {
	                type: 7 /* Punctuator */,
	                value: value,
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: start,
	                end: this.scanner.index
	            };
	        }
	        // `
	        if (cp === 96) {
	            // Only placeholder, since it will be rescanned as a real assignment expression.
	            return {
	                type: 10 /* Template */,
	                value: '',
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: this.scanner.index,
	                end: this.scanner.index
	            };
	        }
	        // Identifer can not contain backslash (char code 92).
	        if (character_1.Character.isIdentifierStart(cp) && (cp !== 92)) {
	            var start = this.scanner.index;
	            ++this.scanner.index;
	            while (!this.scanner.eof()) {
	                var ch = this.scanner.source.charCodeAt(this.scanner.index);
	                if (character_1.Character.isIdentifierPart(ch) && (ch !== 92)) {
	                    ++this.scanner.index;
	                }
	                else if (ch === 45) {
	                    // Hyphen (char code 45) can be part of an identifier.
	                    ++this.scanner.index;
	                }
	                else {
	                    break;
	                }
	            }
	            var id = this.scanner.source.slice(start, this.scanner.index);
	            return {
	                type: 100 /* Identifier */,
	                value: id,
	                lineNumber: this.scanner.lineNumber,
	                lineStart: this.scanner.lineStart,
	                start: start,
	                end: this.scanner.index
	            };
	        }
	        return this.scanner.lex();
	    };
	    JSXParser.prototype.nextJSXToken = function () {
	        this.collectComments();
	        this.startMarker.index = this.scanner.index;
	        this.startMarker.line = this.scanner.lineNumber;
	        this.startMarker.column = this.scanner.index - this.scanner.lineStart;
	        var token = this.lexJSX();
	        this.lastMarker.index = this.scanner.index;
	        this.lastMarker.line = this.scanner.lineNumber;
	        this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
	        if (this.config.tokens) {
	            this.tokens.push(this.convertToken(token));
	        }
	        return token;
	    };
	    JSXParser.prototype.nextJSXText = function () {
	        this.startMarker.index = this.scanner.index;
	        this.startMarker.line = this.scanner.lineNumber;
	        this.startMarker.column = this.scanner.index - this.scanner.lineStart;
	        var start = this.scanner.index;
	        var text = '';
	        while (!this.scanner.eof()) {
	            var ch = this.scanner.source[this.scanner.index];
	            if (ch === '{' || ch === '<') {
	                break;
	            }
	            ++this.scanner.index;
	            text += ch;
	            if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                ++this.scanner.lineNumber;
	                if (ch === '\r' && this.scanner.source[this.scanner.index] === '\n') {
	                    ++this.scanner.index;
	                }
	                this.scanner.lineStart = this.scanner.index;
	            }
	        }
	        this.lastMarker.index = this.scanner.index;
	        this.lastMarker.line = this.scanner.lineNumber;
	        this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
	        var token = {
	            type: 101 /* Text */,
	            value: text,
	            lineNumber: this.scanner.lineNumber,
	            lineStart: this.scanner.lineStart,
	            start: start,
	            end: this.scanner.index
	        };
	        if ((text.length > 0) && this.config.tokens) {
	            this.tokens.push(this.convertToken(token));
	        }
	        return token;
	    };
	    JSXParser.prototype.peekJSXToken = function () {
	        var state = this.scanner.saveState();
	        this.scanner.scanComments();
	        var next = this.lexJSX();
	        this.scanner.restoreState(state);
	        return next;
	    };
	    // Expect the next JSX token to match the specified punctuator.
	    // If not, an exception will be thrown.
	    JSXParser.prototype.expectJSX = function (value) {
	        var token = this.nextJSXToken();
	        if (token.type !== 7 /* Punctuator */ || token.value !== value) {
	            this.throwUnexpectedToken(token);
	        }
	    };
	    // Return true if the next JSX token matches the specified punctuator.
	    JSXParser.prototype.matchJSX = function (value) {
	        var next = this.peekJSXToken();
	        return next.type === 7 /* Punctuator */ && next.value === value;
	    };
	    JSXParser.prototype.parseJSXIdentifier = function () {
	        var node = this.createJSXNode();
	        var token = this.nextJSXToken();
	        if (token.type !== 100 /* Identifier */) {
	            this.throwUnexpectedToken(token);
	        }
	        return this.finalize(node, new JSXNode.JSXIdentifier(token.value));
	    };
	    JSXParser.prototype.parseJSXElementName = function () {
	        var node = this.createJSXNode();
	        var elementName = this.parseJSXIdentifier();
	        if (this.matchJSX(':')) {
	            var namespace = elementName;
	            this.expectJSX(':');
	            var name_1 = this.parseJSXIdentifier();
	            elementName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_1));
	        }
	        else if (this.matchJSX('.')) {
	            while (this.matchJSX('.')) {
	                var object = elementName;
	                this.expectJSX('.');
	                var property = this.parseJSXIdentifier();
	                elementName = this.finalize(node, new JSXNode.JSXMemberExpression(object, property));
	            }
	        }
	        return elementName;
	    };
	    JSXParser.prototype.parseJSXAttributeName = function () {
	        var node = this.createJSXNode();
	        var attributeName;
	        var identifier = this.parseJSXIdentifier();
	        if (this.matchJSX(':')) {
	            var namespace = identifier;
	            this.expectJSX(':');
	            var name_2 = this.parseJSXIdentifier();
	            attributeName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_2));
	        }
	        else {
	            attributeName = identifier;
	        }
	        return attributeName;
	    };
	    JSXParser.prototype.parseJSXStringLiteralAttribute = function () {
	        var node = this.createJSXNode();
	        var token = this.nextJSXToken();
	        if (token.type !== 8 /* StringLiteral */) {
	            this.throwUnexpectedToken(token);
	        }
	        var raw = this.getTokenRaw(token);
	        return this.finalize(node, new Node.Literal(token.value, raw));
	    };
	    JSXParser.prototype.parseJSXExpressionAttribute = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('{');
	        this.finishJSX();
	        if (this.match('}')) {
	            this.tolerateError('JSX attributes must only be assigned a non-empty expression');
	        }
	        var expression = this.parseAssignmentExpression();
	        this.reenterJSX();
	        return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
	    };
	    JSXParser.prototype.parseJSXAttributeValue = function () {
	        return this.matchJSX('{') ? this.parseJSXExpressionAttribute() :
	            this.matchJSX('<') ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
	    };
	    JSXParser.prototype.parseJSXNameValueAttribute = function () {
	        var node = this.createJSXNode();
	        var name = this.parseJSXAttributeName();
	        var value = null;
	        if (this.matchJSX('=')) {
	            this.expectJSX('=');
	            value = this.parseJSXAttributeValue();
	        }
	        return this.finalize(node, new JSXNode.JSXAttribute(name, value));
	    };
	    JSXParser.prototype.parseJSXSpreadAttribute = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('{');
	        this.expectJSX('...');
	        this.finishJSX();
	        var argument = this.parseAssignmentExpression();
	        this.reenterJSX();
	        return this.finalize(node, new JSXNode.JSXSpreadAttribute(argument));
	    };
	    JSXParser.prototype.parseJSXAttributes = function () {
	        var attributes = [];
	        while (!this.matchJSX('/') && !this.matchJSX('>')) {
	            var attribute = this.matchJSX('{') ? this.parseJSXSpreadAttribute() :
	                this.parseJSXNameValueAttribute();
	            attributes.push(attribute);
	        }
	        return attributes;
	    };
	    JSXParser.prototype.parseJSXOpeningElement = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('<');
	        var name = this.parseJSXElementName();
	        var attributes = this.parseJSXAttributes();
	        var selfClosing = this.matchJSX('/');
	        if (selfClosing) {
	            this.expectJSX('/');
	        }
	        this.expectJSX('>');
	        return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
	    };
	    JSXParser.prototype.parseJSXBoundaryElement = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('<');
	        if (this.matchJSX('/')) {
	            this.expectJSX('/');
	            var name_3 = this.parseJSXElementName();
	            this.expectJSX('>');
	            return this.finalize(node, new JSXNode.JSXClosingElement(name_3));
	        }
	        var name = this.parseJSXElementName();
	        var attributes = this.parseJSXAttributes();
	        var selfClosing = this.matchJSX('/');
	        if (selfClosing) {
	            this.expectJSX('/');
	        }
	        this.expectJSX('>');
	        return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
	    };
	    JSXParser.prototype.parseJSXEmptyExpression = function () {
	        var node = this.createJSXChildNode();
	        this.collectComments();
	        this.lastMarker.index = this.scanner.index;
	        this.lastMarker.line = this.scanner.lineNumber;
	        this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
	        return this.finalize(node, new JSXNode.JSXEmptyExpression());
	    };
	    JSXParser.prototype.parseJSXExpressionContainer = function () {
	        var node = this.createJSXNode();
	        this.expectJSX('{');
	        var expression;
	        if (this.matchJSX('}')) {
	            expression = this.parseJSXEmptyExpression();
	            this.expectJSX('}');
	        }
	        else {
	            this.finishJSX();
	            expression = this.parseAssignmentExpression();
	            this.reenterJSX();
	        }
	        return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
	    };
	    JSXParser.prototype.parseJSXChildren = function () {
	        var children = [];
	        while (!this.scanner.eof()) {
	            var node = this.createJSXChildNode();
	            var token = this.nextJSXText();
	            if (token.start < token.end) {
	                var raw = this.getTokenRaw(token);
	                var child = this.finalize(node, new JSXNode.JSXText(token.value, raw));
	                children.push(child);
	            }
	            if (this.scanner.source[this.scanner.index] === '{') {
	                var container = this.parseJSXExpressionContainer();
	                children.push(container);
	            }
	            else {
	                break;
	            }
	        }
	        return children;
	    };
	    JSXParser.prototype.parseComplexJSXElement = function (el) {
	        var stack = [];
	        while (!this.scanner.eof()) {
	            el.children = el.children.concat(this.parseJSXChildren());
	            var node = this.createJSXChildNode();
	            var element = this.parseJSXBoundaryElement();
	            if (element.type === jsx_syntax_1.JSXSyntax.JSXOpeningElement) {
	                var opening = element;
	                if (opening.selfClosing) {
	                    var child = this.finalize(node, new JSXNode.JSXElement(opening, [], null));
	                    el.children.push(child);
	                }
	                else {
	                    stack.push(el);
	                    el = { node: node, opening: opening, closing: null, children: [] };
	                }
	            }
	            if (element.type === jsx_syntax_1.JSXSyntax.JSXClosingElement) {
	                el.closing = element;
	                var open_1 = getQualifiedElementName(el.opening.name);
	                var close_1 = getQualifiedElementName(el.closing.name);
	                if (open_1 !== close_1) {
	                    this.tolerateError('Expected corresponding JSX closing tag for %0', open_1);
	                }
	                if (stack.length > 0) {
	                    var child = this.finalize(el.node, new JSXNode.JSXElement(el.opening, el.children, el.closing));
	                    el = stack[stack.length - 1];
	                    el.children.push(child);
	                    stack.pop();
	                }
	                else {
	                    break;
	                }
	            }
	        }
	        return el;
	    };
	    JSXParser.prototype.parseJSXElement = function () {
	        var node = this.createJSXNode();
	        var opening = this.parseJSXOpeningElement();
	        var children = [];
	        var closing = null;
	        if (!opening.selfClosing) {
	            var el = this.parseComplexJSXElement({ node: node, opening: opening, closing: closing, children: children });
	            children = el.children;
	            closing = el.closing;
	        }
	        return this.finalize(node, new JSXNode.JSXElement(opening, children, closing));
	    };
	    JSXParser.prototype.parseJSXRoot = function () {
	        // Pop the opening '<' added from the lookahead.
	        if (this.config.tokens) {
	            this.tokens.pop();
	        }
	        this.startJSX();
	        var element = this.parseJSXElement();
	        this.finishJSX();
	        return element;
	    };
	    JSXParser.prototype.isStartOfExpression = function () {
	        return _super.prototype.isStartOfExpression.call(this) || this.match('<');
	    };
	    return JSXParser;
	}(parser_1.Parser));
	exports.JSXParser = JSXParser;


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	// See also tools/generate-unicode-regex.js.
	var Regex = {
	    // Unicode v8.0.0 NonAsciiIdentifierStart:
	    NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
	    // Unicode v8.0.0 NonAsciiIdentifierPart:
	    NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
	};
	exports.Character = {
	    /* tslint:disable:no-bitwise */
	    fromCodePoint: function (cp) {
	        return (cp < 0x10000) ? String.fromCharCode(cp) :
	            String.fromCharCode(0xD800 + ((cp - 0x10000) >> 10)) +
	                String.fromCharCode(0xDC00 + ((cp - 0x10000) & 1023));
	    },
	    // https://tc39.github.io/ecma262/#sec-white-space
	    isWhiteSpace: function (cp) {
	        return (cp === 0x20) || (cp === 0x09) || (cp === 0x0B) || (cp === 0x0C) || (cp === 0xA0) ||
	            (cp >= 0x1680 && [0x1680, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(cp) >= 0);
	    },
	    // https://tc39.github.io/ecma262/#sec-line-terminators
	    isLineTerminator: function (cp) {
	        return (cp === 0x0A) || (cp === 0x0D) || (cp === 0x2028) || (cp === 0x2029);
	    },
	    // https://tc39.github.io/ecma262/#sec-names-and-keywords
	    isIdentifierStart: function (cp) {
	        return (cp === 0x24) || (cp === 0x5F) ||
	            (cp >= 0x41 && cp <= 0x5A) ||
	            (cp >= 0x61 && cp <= 0x7A) ||
	            (cp === 0x5C) ||
	            ((cp >= 0x80) && Regex.NonAsciiIdentifierStart.test(exports.Character.fromCodePoint(cp)));
	    },
	    isIdentifierPart: function (cp) {
	        return (cp === 0x24) || (cp === 0x5F) ||
	            (cp >= 0x41 && cp <= 0x5A) ||
	            (cp >= 0x61 && cp <= 0x7A) ||
	            (cp >= 0x30 && cp <= 0x39) ||
	            (cp === 0x5C) ||
	            ((cp >= 0x80) && Regex.NonAsciiIdentifierPart.test(exports.Character.fromCodePoint(cp)));
	    },
	    // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
	    isDecimalDigit: function (cp) {
	        return (cp >= 0x30 && cp <= 0x39); // 0..9
	    },
	    isHexDigit: function (cp) {
	        return (cp >= 0x30 && cp <= 0x39) ||
	            (cp >= 0x41 && cp <= 0x46) ||
	            (cp >= 0x61 && cp <= 0x66); // a..f
	    },
	    isOctalDigit: function (cp) {
	        return (cp >= 0x30 && cp <= 0x37); // 0..7
	    }
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var jsx_syntax_1 = __webpack_require__(6);
	/* tslint:disable:max-classes-per-file */
	var JSXClosingElement = (function () {
	    function JSXClosingElement(name) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXClosingElement;
	        this.name = name;
	    }
	    return JSXClosingElement;
	}());
	exports.JSXClosingElement = JSXClosingElement;
	var JSXElement = (function () {
	    function JSXElement(openingElement, children, closingElement) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXElement;
	        this.openingElement = openingElement;
	        this.children = children;
	        this.closingElement = closingElement;
	    }
	    return JSXElement;
	}());
	exports.JSXElement = JSXElement;
	var JSXEmptyExpression = (function () {
	    function JSXEmptyExpression() {
	        this.type = jsx_syntax_1.JSXSyntax.JSXEmptyExpression;
	    }
	    return JSXEmptyExpression;
	}());
	exports.JSXEmptyExpression = JSXEmptyExpression;
	var JSXExpressionContainer = (function () {
	    function JSXExpressionContainer(expression) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXExpressionContainer;
	        this.expression = expression;
	    }
	    return JSXExpressionContainer;
	}());
	exports.JSXExpressionContainer = JSXExpressionContainer;
	var JSXIdentifier = (function () {
	    function JSXIdentifier(name) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXIdentifier;
	        this.name = name;
	    }
	    return JSXIdentifier;
	}());
	exports.JSXIdentifier = JSXIdentifier;
	var JSXMemberExpression = (function () {
	    function JSXMemberExpression(object, property) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXMemberExpression;
	        this.object = object;
	        this.property = property;
	    }
	    return JSXMemberExpression;
	}());
	exports.JSXMemberExpression = JSXMemberExpression;
	var JSXAttribute = (function () {
	    function JSXAttribute(name, value) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXAttribute;
	        this.name = name;
	        this.value = value;
	    }
	    return JSXAttribute;
	}());
	exports.JSXAttribute = JSXAttribute;
	var JSXNamespacedName = (function () {
	    function JSXNamespacedName(namespace, name) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXNamespacedName;
	        this.namespace = namespace;
	        this.name = name;
	    }
	    return JSXNamespacedName;
	}());
	exports.JSXNamespacedName = JSXNamespacedName;
	var JSXOpeningElement = (function () {
	    function JSXOpeningElement(name, selfClosing, attributes) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXOpeningElement;
	        this.name = name;
	        this.selfClosing = selfClosing;
	        this.attributes = attributes;
	    }
	    return JSXOpeningElement;
	}());
	exports.JSXOpeningElement = JSXOpeningElement;
	var JSXSpreadAttribute = (function () {
	    function JSXSpreadAttribute(argument) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXSpreadAttribute;
	        this.argument = argument;
	    }
	    return JSXSpreadAttribute;
	}());
	exports.JSXSpreadAttribute = JSXSpreadAttribute;
	var JSXText = (function () {
	    function JSXText(value, raw) {
	        this.type = jsx_syntax_1.JSXSyntax.JSXText;
	        this.value = value;
	        this.raw = raw;
	    }
	    return JSXText;
	}());
	exports.JSXText = JSXText;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.JSXSyntax = {
	    JSXAttribute: 'JSXAttribute',
	    JSXClosingElement: 'JSXClosingElement',
	    JSXElement: 'JSXElement',
	    JSXEmptyExpression: 'JSXEmptyExpression',
	    JSXExpressionContainer: 'JSXExpressionContainer',
	    JSXIdentifier: 'JSXIdentifier',
	    JSXMemberExpression: 'JSXMemberExpression',
	    JSXNamespacedName: 'JSXNamespacedName',
	    JSXOpeningElement: 'JSXOpeningElement',
	    JSXSpreadAttribute: 'JSXSpreadAttribute',
	    JSXText: 'JSXText'
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var syntax_1 = __webpack_require__(2);
	/* tslint:disable:max-classes-per-file */
	var ArrayExpression = (function () {
	    function ArrayExpression(elements) {
	        this.type = syntax_1.Syntax.ArrayExpression;
	        this.elements = elements;
	    }
	    return ArrayExpression;
	}());
	exports.ArrayExpression = ArrayExpression;
	var ArrayPattern = (function () {
	    function ArrayPattern(elements) {
	        this.type = syntax_1.Syntax.ArrayPattern;
	        this.elements = elements;
	    }
	    return ArrayPattern;
	}());
	exports.ArrayPattern = ArrayPattern;
	var ArrowFunctionExpression = (function () {
	    function ArrowFunctionExpression(params, body, expression) {
	        this.type = syntax_1.Syntax.ArrowFunctionExpression;
	        this.id = null;
	        this.params = params;
	        this.body = body;
	        this.generator = false;
	        this.expression = expression;
	        this.async = false;
	    }
	    return ArrowFunctionExpression;
	}());
	exports.ArrowFunctionExpression = ArrowFunctionExpression;
	var AssignmentExpression = (function () {
	    function AssignmentExpression(operator, left, right) {
	        this.type = syntax_1.Syntax.AssignmentExpression;
	        this.operator = operator;
	        this.left = left;
	        this.right = right;
	    }
	    return AssignmentExpression;
	}());
	exports.AssignmentExpression = AssignmentExpression;
	var AssignmentPattern = (function () {
	    function AssignmentPattern(left, right) {
	        this.type = syntax_1.Syntax.AssignmentPattern;
	        this.left = left;
	        this.right = right;
	    }
	    return AssignmentPattern;
	}());
	exports.AssignmentPattern = AssignmentPattern;
	var AsyncArrowFunctionExpression = (function () {
	    function AsyncArrowFunctionExpression(params, body, expression) {
	        this.type = syntax_1.Syntax.ArrowFunctionExpression;
	        this.id = null;
	        this.params = params;
	        this.body = body;
	        this.generator = false;
	        this.expression = expression;
	        this.async = true;
	    }
	    return AsyncArrowFunctionExpression;
	}());
	exports.AsyncArrowFunctionExpression = AsyncArrowFunctionExpression;
	var AsyncFunctionDeclaration = (function () {
	    function AsyncFunctionDeclaration(id, params, body) {
	        this.type = syntax_1.Syntax.FunctionDeclaration;
	        this.id = id;
	        this.params = params;
	        this.body = body;
	        this.generator = false;
	        this.expression = false;
	        this.async = true;
	    }
	    return AsyncFunctionDeclaration;
	}());
	exports.AsyncFunctionDeclaration = AsyncFunctionDeclaration;
	var AsyncFunctionExpression = (function () {
	    function AsyncFunctionExpression(id, params, body) {
	        this.type = syntax_1.Syntax.FunctionExpression;
	        this.id = id;
	        this.params = params;
	        this.body = body;
	        this.generator = false;
	        this.expression = false;
	        this.async = true;
	    }
	    return AsyncFunctionExpression;
	}());
	exports.AsyncFunctionExpression = AsyncFunctionExpression;
	var AwaitExpression = (function () {
	    function AwaitExpression(argument) {
	        this.type = syntax_1.Syntax.AwaitExpression;
	        this.argument = argument;
	    }
	    return AwaitExpression;
	}());
	exports.AwaitExpression = AwaitExpression;
	var BinaryExpression = (function () {
	    function BinaryExpression(operator, left, right) {
	        var logical = (operator === '||' || operator === '&&');
	        this.type = logical ? syntax_1.Syntax.LogicalExpression : syntax_1.Syntax.BinaryExpression;
	        this.operator = operator;
	        this.left = left;
	        this.right = right;
	    }
	    return BinaryExpression;
	}());
	exports.BinaryExpression = BinaryExpression;
	var BlockStatement = (function () {
	    function BlockStatement(body) {
	        this.type = syntax_1.Syntax.BlockStatement;
	        this.body = body;
	    }
	    return BlockStatement;
	}());
	exports.BlockStatement = BlockStatement;
	var BreakStatement = (function () {
	    function BreakStatement(label) {
	        this.type = syntax_1.Syntax.BreakStatement;
	        this.label = label;
	    }
	    return BreakStatement;
	}());
	exports.BreakStatement = BreakStatement;
	var CallExpression = (function () {
	    function CallExpression(callee, args) {
	        this.type = syntax_1.Syntax.CallExpression;
	        this.callee = callee;
	        this.arguments = args;
	    }
	    return CallExpression;
	}());
	exports.CallExpression = CallExpression;
	var CatchClause = (function () {
	    function CatchClause(param, body) {
	        this.type = syntax_1.Syntax.CatchClause;
	        this.param = param;
	        this.body = body;
	    }
	    return CatchClause;
	}());
	exports.CatchClause = CatchClause;
	var ClassBody = (function () {
	    function ClassBody(body) {
	        this.type = syntax_1.Syntax.ClassBody;
	        this.body = body;
	    }
	    return ClassBody;
	}());
	exports.ClassBody = ClassBody;
	var ClassDeclaration = (function () {
	    function ClassDeclaration(id, superClass, body) {
	        this.type = syntax_1.Syntax.ClassDeclaration;
	        this.id = id;
	        this.superClass = superClass;
	        this.body = body;
	    }
	    return ClassDeclaration;
	}());
	exports.ClassDeclaration = ClassDeclaration;
	var ClassExpression = (function () {
	    function ClassExpression(id, superClass, body) {
	        this.type = syntax_1.Syntax.ClassExpression;
	        this.id = id;
	        this.superClass = superClass;
	        this.body = body;
	    }
	    return ClassExpression;
	}());
	exports.ClassExpression = ClassExpression;
	var ComputedMemberExpression = (function () {
	    function ComputedMemberExpression(object, property) {
	        this.type = syntax_1.Syntax.MemberExpression;
	        this.computed = true;
	        this.object = object;
	        this.property = property;
	    }
	    return ComputedMemberExpression;
	}());
	exports.ComputedMemberExpression = ComputedMemberExpression;
	var ConditionalExpression = (function () {
	    function ConditionalExpression(test, consequent, alternate) {
	        this.type = syntax_1.Syntax.ConditionalExpression;
	        this.test = test;
	        this.consequent = consequent;
	        this.alternate = alternate;
	    }
	    return ConditionalExpression;
	}());
	exports.ConditionalExpression = ConditionalExpression;
	var ContinueStatement = (function () {
	    function ContinueStatement(label) {
	        this.type = syntax_1.Syntax.ContinueStatement;
	        this.label = label;
	    }
	    return ContinueStatement;
	}());
	exports.ContinueStatement = ContinueStatement;
	var DebuggerStatement = (function () {
	    function DebuggerStatement() {
	        this.type = syntax_1.Syntax.DebuggerStatement;
	    }
	    return DebuggerStatement;
	}());
	exports.DebuggerStatement = DebuggerStatement;
	var Directive = (function () {
	    function Directive(expression, directive) {
	        this.type = syntax_1.Syntax.ExpressionStatement;
	        this.expression = expression;
	        this.directive = directive;
	    }
	    return Directive;
	}());
	exports.Directive = Directive;
	var DoWhileStatement = (function () {
	    function DoWhileStatement(body, test) {
	        this.type = syntax_1.Syntax.DoWhileStatement;
	        this.body = body;
	        this.test = test;
	    }
	    return DoWhileStatement;
	}());
	exports.DoWhileStatement = DoWhileStatement;
	var EmptyStatement = (function () {
	    function EmptyStatement() {
	        this.type = syntax_1.Syntax.EmptyStatement;
	    }
	    return EmptyStatement;
	}());
	exports.EmptyStatement = EmptyStatement;
	var ExportAllDeclaration = (function () {
	    function ExportAllDeclaration(source) {
	        this.type = syntax_1.Syntax.ExportAllDeclaration;
	        this.source = source;
	    }
	    return ExportAllDeclaration;
	}());
	exports.ExportAllDeclaration = ExportAllDeclaration;
	var ExportDefaultDeclaration = (function () {
	    function ExportDefaultDeclaration(declaration) {
	        this.type = syntax_1.Syntax.ExportDefaultDeclaration;
	        this.declaration = declaration;
	    }
	    return ExportDefaultDeclaration;
	}());
	exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
	var ExportNamedDeclaration = (function () {
	    function ExportNamedDeclaration(declaration, specifiers, source) {
	        this.type = syntax_1.Syntax.ExportNamedDeclaration;
	        this.declaration = declaration;
	        this.specifiers = specifiers;
	        this.source = source;
	    }
	    return ExportNamedDeclaration;
	}());
	exports.ExportNamedDeclaration = ExportNamedDeclaration;
	var ExportSpecifier = (function () {
	    function ExportSpecifier(local, exported) {
	        this.type = syntax_1.Syntax.ExportSpecifier;
	        this.exported = exported;
	        this.local = local;
	    }
	    return ExportSpecifier;
	}());
	exports.ExportSpecifier = ExportSpecifier;
	var ExpressionStatement = (function () {
	    function ExpressionStatement(expression) {
	        this.type = syntax_1.Syntax.ExpressionStatement;
	        this.expression = expression;
	    }
	    return ExpressionStatement;
	}());
	exports.ExpressionStatement = ExpressionStatement;
	var ForInStatement = (function () {
	    function ForInStatement(left, right, body) {
	        this.type = syntax_1.Syntax.ForInStatement;
	        this.left = left;
	        this.right = right;
	        this.body = body;
	        this.each = false;
	    }
	    return ForInStatement;
	}());
	exports.ForInStatement = ForInStatement;
	var ForOfStatement = (function () {
	    function ForOfStatement(left, right, body) {
	        this.type = syntax_1.Syntax.ForOfStatement;
	        this.left = left;
	        this.right = right;
	        this.body = body;
	    }
	    return ForOfStatement;
	}());
	exports.ForOfStatement = ForOfStatement;
	var ForStatement = (function () {
	    function ForStatement(init, test, update, body) {
	        this.type = syntax_1.Syntax.ForStatement;
	        this.init = init;
	        this.test = test;
	        this.update = update;
	        this.body = body;
	    }
	    return ForStatement;
	}());
	exports.ForStatement = ForStatement;
	var FunctionDeclaration = (function () {
	    function FunctionDeclaration(id, params, body, generator) {
	        this.type = syntax_1.Syntax.FunctionDeclaration;
	        this.id = id;
	        this.params = params;
	        this.body = body;
	        this.generator = generator;
	        this.expression = false;
	        this.async = false;
	    }
	    return FunctionDeclaration;
	}());
	exports.FunctionDeclaration = FunctionDeclaration;
	var FunctionExpression = (function () {
	    function FunctionExpression(id, params, body, generator) {
	        this.type = syntax_1.Syntax.FunctionExpression;
	        this.id = id;
	        this.params = params;
	        this.body = body;
	        this.generator = generator;
	        this.expression = false;
	        this.async = false;
	    }
	    return FunctionExpression;
	}());
	exports.FunctionExpression = FunctionExpression;
	var Identifier = (function () {
	    function Identifier(name) {
	        this.type = syntax_1.Syntax.Identifier;
	        this.name = name;
	    }
	    return Identifier;
	}());
	exports.Identifier = Identifier;
	var IfStatement = (function () {
	    function IfStatement(test, consequent, alternate) {
	        this.type = syntax_1.Syntax.IfStatement;
	        this.test = test;
	        this.consequent = consequent;
	        this.alternate = alternate;
	    }
	    return IfStatement;
	}());
	exports.IfStatement = IfStatement;
	var ImportDeclaration = (function () {
	    function ImportDeclaration(specifiers, source) {
	        this.type = syntax_1.Syntax.ImportDeclaration;
	        this.specifiers = specifiers;
	        this.source = source;
	    }
	    return ImportDeclaration;
	}());
	exports.ImportDeclaration = ImportDeclaration;
	var ImportDefaultSpecifier = (function () {
	    function ImportDefaultSpecifier(local) {
	        this.type = syntax_1.Syntax.ImportDefaultSpecifier;
	        this.local = local;
	    }
	    return ImportDefaultSpecifier;
	}());
	exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
	var ImportNamespaceSpecifier = (function () {
	    function ImportNamespaceSpecifier(local) {
	        this.type = syntax_1.Syntax.ImportNamespaceSpecifier;
	        this.local = local;
	    }
	    return ImportNamespaceSpecifier;
	}());
	exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
	var ImportSpecifier = (function () {
	    function ImportSpecifier(local, imported) {
	        this.type = syntax_1.Syntax.ImportSpecifier;
	        this.local = local;
	        this.imported = imported;
	    }
	    return ImportSpecifier;
	}());
	exports.ImportSpecifier = ImportSpecifier;
	var LabeledStatement = (function () {
	    function LabeledStatement(label, body) {
	        this.type = syntax_1.Syntax.LabeledStatement;
	        this.label = label;
	        this.body = body;
	    }
	    return LabeledStatement;
	}());
	exports.LabeledStatement = LabeledStatement;
	var Literal = (function () {
	    function Literal(value, raw) {
	        this.type = syntax_1.Syntax.Literal;
	        this.value = value;
	        this.raw = raw;
	    }
	    return Literal;
	}());
	exports.Literal = Literal;
	var MetaProperty = (function () {
	    function MetaProperty(meta, property) {
	        this.type = syntax_1.Syntax.MetaProperty;
	        this.meta = meta;
	        this.property = property;
	    }
	    return MetaProperty;
	}());
	exports.MetaProperty = MetaProperty;
	var MethodDefinition = (function () {
	    function MethodDefinition(key, computed, value, kind, isStatic) {
	        this.type = syntax_1.Syntax.MethodDefinition;
	        this.key = key;
	        this.computed = computed;
	        this.value = value;
	        this.kind = kind;
	        this.static = isStatic;
	    }
	    return MethodDefinition;
	}());
	exports.MethodDefinition = MethodDefinition;
	var Module = (function () {
	    function Module(body) {
	        this.type = syntax_1.Syntax.Program;
	        this.body = body;
	        this.sourceType = 'module';
	    }
	    return Module;
	}());
	exports.Module = Module;
	var NewExpression = (function () {
	    function NewExpression(callee, args) {
	        this.type = syntax_1.Syntax.NewExpression;
	        this.callee = callee;
	        this.arguments = args;
	    }
	    return NewExpression;
	}());
	exports.NewExpression = NewExpression;
	var ObjectExpression = (function () {
	    function ObjectExpression(properties) {
	        this.type = syntax_1.Syntax.ObjectExpression;
	        this.properties = properties;
	    }
	    return ObjectExpression;
	}());
	exports.ObjectExpression = ObjectExpression;
	var ObjectPattern = (function () {
	    function ObjectPattern(properties) {
	        this.type = syntax_1.Syntax.ObjectPattern;
	        this.properties = properties;
	    }
	    return ObjectPattern;
	}());
	exports.ObjectPattern = ObjectPattern;
	var Property = (function () {
	    function Property(kind, key, computed, value, method, shorthand) {
	        this.type = syntax_1.Syntax.Property;
	        this.key = key;
	        this.computed = computed;
	        this.value = value;
	        this.kind = kind;
	        this.method = method;
	        this.shorthand = shorthand;
	    }
	    return Property;
	}());
	exports.Property = Property;
	var RegexLiteral = (function () {
	    function RegexLiteral(value, raw, pattern, flags) {
	        this.type = syntax_1.Syntax.Literal;
	        this.value = value;
	        this.raw = raw;
	        this.regex = { pattern: pattern, flags: flags };
	    }
	    return RegexLiteral;
	}());
	exports.RegexLiteral = RegexLiteral;
	var RestElement = (function () {
	    function RestElement(argument) {
	        this.type = syntax_1.Syntax.RestElement;
	        this.argument = argument;
	    }
	    return RestElement;
	}());
	exports.RestElement = RestElement;
	var ReturnStatement = (function () {
	    function ReturnStatement(argument) {
	        this.type = syntax_1.Syntax.ReturnStatement;
	        this.argument = argument;
	    }
	    return ReturnStatement;
	}());
	exports.ReturnStatement = ReturnStatement;
	var Script = (function () {
	    function Script(body) {
	        this.type = syntax_1.Syntax.Program;
	        this.body = body;
	        this.sourceType = 'script';
	    }
	    return Script;
	}());
	exports.Script = Script;
	var SequenceExpression = (function () {
	    function SequenceExpression(expressions) {
	        this.type = syntax_1.Syntax.SequenceExpression;
	        this.expressions = expressions;
	    }
	    return SequenceExpression;
	}());
	exports.SequenceExpression = SequenceExpression;
	var SpreadElement = (function () {
	    function SpreadElement(argument) {
	        this.type = syntax_1.Syntax.SpreadElement;
	        this.argument = argument;
	    }
	    return SpreadElement;
	}());
	exports.SpreadElement = SpreadElement;
	var StaticMemberExpression = (function () {
	    function StaticMemberExpression(object, property) {
	        this.type = syntax_1.Syntax.MemberExpression;
	        this.computed = false;
	        this.object = object;
	        this.property = property;
	    }
	    return StaticMemberExpression;
	}());
	exports.StaticMemberExpression = StaticMemberExpression;
	var Super = (function () {
	    function Super() {
	        this.type = syntax_1.Syntax.Super;
	    }
	    return Super;
	}());
	exports.Super = Super;
	var SwitchCase = (function () {
	    function SwitchCase(test, consequent) {
	        this.type = syntax_1.Syntax.SwitchCase;
	        this.test = test;
	        this.consequent = consequent;
	    }
	    return SwitchCase;
	}());
	exports.SwitchCase = SwitchCase;
	var SwitchStatement = (function () {
	    function SwitchStatement(discriminant, cases) {
	        this.type = syntax_1.Syntax.SwitchStatement;
	        this.discriminant = discriminant;
	        this.cases = cases;
	    }
	    return SwitchStatement;
	}());
	exports.SwitchStatement = SwitchStatement;
	var TaggedTemplateExpression = (function () {
	    function TaggedTemplateExpression(tag, quasi) {
	        this.type = syntax_1.Syntax.TaggedTemplateExpression;
	        this.tag = tag;
	        this.quasi = quasi;
	    }
	    return TaggedTemplateExpression;
	}());
	exports.TaggedTemplateExpression = TaggedTemplateExpression;
	var TemplateElement = (function () {
	    function TemplateElement(value, tail) {
	        this.type = syntax_1.Syntax.TemplateElement;
	        this.value = value;
	        this.tail = tail;
	    }
	    return TemplateElement;
	}());
	exports.TemplateElement = TemplateElement;
	var TemplateLiteral = (function () {
	    function TemplateLiteral(quasis, expressions) {
	        this.type = syntax_1.Syntax.TemplateLiteral;
	        this.quasis = quasis;
	        this.expressions = expressions;
	    }
	    return TemplateLiteral;
	}());
	exports.TemplateLiteral = TemplateLiteral;
	var ThisExpression = (function () {
	    function ThisExpression() {
	        this.type = syntax_1.Syntax.ThisExpression;
	    }
	    return ThisExpression;
	}());
	exports.ThisExpression = ThisExpression;
	var ThrowStatement = (function () {
	    function ThrowStatement(argument) {
	        this.type = syntax_1.Syntax.ThrowStatement;
	        this.argument = argument;
	    }
	    return ThrowStatement;
	}());
	exports.ThrowStatement = ThrowStatement;
	var TryStatement = (function () {
	    function TryStatement(block, handler, finalizer) {
	        this.type = syntax_1.Syntax.TryStatement;
	        this.block = block;
	        this.handler = handler;
	        this.finalizer = finalizer;
	    }
	    return TryStatement;
	}());
	exports.TryStatement = TryStatement;
	var UnaryExpression = (function () {
	    function UnaryExpression(operator, argument) {
	        this.type = syntax_1.Syntax.UnaryExpression;
	        this.operator = operator;
	        this.argument = argument;
	        this.prefix = true;
	    }
	    return UnaryExpression;
	}());
	exports.UnaryExpression = UnaryExpression;
	var UpdateExpression = (function () {
	    function UpdateExpression(operator, argument, prefix) {
	        this.type = syntax_1.Syntax.UpdateExpression;
	        this.operator = operator;
	        this.argument = argument;
	        this.prefix = prefix;
	    }
	    return UpdateExpression;
	}());
	exports.UpdateExpression = UpdateExpression;
	var VariableDeclaration = (function () {
	    function VariableDeclaration(declarations, kind) {
	        this.type = syntax_1.Syntax.VariableDeclaration;
	        this.declarations = declarations;
	        this.kind = kind;
	    }
	    return VariableDeclaration;
	}());
	exports.VariableDeclaration = VariableDeclaration;
	var VariableDeclarator = (function () {
	    function VariableDeclarator(id, init) {
	        this.type = syntax_1.Syntax.VariableDeclarator;
	        this.id = id;
	        this.init = init;
	    }
	    return VariableDeclarator;
	}());
	exports.VariableDeclarator = VariableDeclarator;
	var WhileStatement = (function () {
	    function WhileStatement(test, body) {
	        this.type = syntax_1.Syntax.WhileStatement;
	        this.test = test;
	        this.body = body;
	    }
	    return WhileStatement;
	}());
	exports.WhileStatement = WhileStatement;
	var WithStatement = (function () {
	    function WithStatement(object, body) {
	        this.type = syntax_1.Syntax.WithStatement;
	        this.object = object;
	        this.body = body;
	    }
	    return WithStatement;
	}());
	exports.WithStatement = WithStatement;
	var YieldExpression = (function () {
	    function YieldExpression(argument, delegate) {
	        this.type = syntax_1.Syntax.YieldExpression;
	        this.argument = argument;
	        this.delegate = delegate;
	    }
	    return YieldExpression;
	}());
	exports.YieldExpression = YieldExpression;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var assert_1 = __webpack_require__(9);
	var error_handler_1 = __webpack_require__(10);
	var messages_1 = __webpack_require__(11);
	var Node = __webpack_require__(7);
	var scanner_1 = __webpack_require__(12);
	var syntax_1 = __webpack_require__(2);
	var token_1 = __webpack_require__(13);
	var ArrowParameterPlaceHolder = 'ArrowParameterPlaceHolder';
	var Parser = (function () {
	    function Parser(code, options, delegate) {
	        if (options === void 0) { options = {}; }
	        this.config = {
	            range: (typeof options.range === 'boolean') && options.range,
	            loc: (typeof options.loc === 'boolean') && options.loc,
	            source: null,
	            tokens: (typeof options.tokens === 'boolean') && options.tokens,
	            comment: (typeof options.comment === 'boolean') && options.comment,
	            tolerant: (typeof options.tolerant === 'boolean') && options.tolerant
	        };
	        if (this.config.loc && options.source && options.source !== null) {
	            this.config.source = String(options.source);
	        }
	        this.delegate = delegate;
	        this.errorHandler = new error_handler_1.ErrorHandler();
	        this.errorHandler.tolerant = this.config.tolerant;
	        this.scanner = new scanner_1.Scanner(code, this.errorHandler);
	        this.scanner.trackComment = this.config.comment;
	        this.operatorPrecedence = {
	            ')': 0,
	            ';': 0,
	            ',': 0,
	            '=': 0,
	            ']': 0,
	            '||': 1,
	            '&&': 2,
	            '|': 3,
	            '^': 4,
	            '&': 5,
	            '==': 6,
	            '!=': 6,
	            '===': 6,
	            '!==': 6,
	            '<': 7,
	            '>': 7,
	            '<=': 7,
	            '>=': 7,
	            '<<': 8,
	            '>>': 8,
	            '>>>': 8,
	            '+': 9,
	            '-': 9,
	            '*': 11,
	            '/': 11,
	            '%': 11
	        };
	        this.lookahead = {
	            type: 2 /* EOF */,
	            value: '',
	            lineNumber: this.scanner.lineNumber,
	            lineStart: 0,
	            start: 0,
	            end: 0
	        };
	        this.hasLineTerminator = false;
	        this.context = {
	            isModule: false,
	            await: false,
	            allowIn: true,
	            allowStrictDirective: true,
	            allowYield: true,
	            firstCoverInitializedNameError: null,
	            isAssignmentTarget: false,
	            isBindingElement: false,
	            inFunctionBody: false,
	            inIteration: false,
	            inSwitch: false,
	            labelSet: {},
	            strict: false
	        };
	        this.tokens = [];
	        this.startMarker = {
	            index: 0,
	            line: this.scanner.lineNumber,
	            column: 0
	        };
	        this.lastMarker = {
	            index: 0,
	            line: this.scanner.lineNumber,
	            column: 0
	        };
	        this.nextToken();
	        this.lastMarker = {
	            index: this.scanner.index,
	            line: this.scanner.lineNumber,
	            column: this.scanner.index - this.scanner.lineStart
	        };
	    }
	    Parser.prototype.throwError = function (messageFormat) {
	        var values = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            values[_i - 1] = arguments[_i];
	        }
	        var args = Array.prototype.slice.call(arguments, 1);
	        var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
	            assert_1.assert(idx < args.length, 'Message reference must be in range');
	            return args[idx];
	        });
	        var index = this.lastMarker.index;
	        var line = this.lastMarker.line;
	        var column = this.lastMarker.column + 1;
	        throw this.errorHandler.createError(index, line, column, msg);
	    };
	    Parser.prototype.tolerateError = function (messageFormat) {
	        var values = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            values[_i - 1] = arguments[_i];
	        }
	        var args = Array.prototype.slice.call(arguments, 1);
	        var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
	            assert_1.assert(idx < args.length, 'Message reference must be in range');
	            return args[idx];
	        });
	        var index = this.lastMarker.index;
	        var line = this.scanner.lineNumber;
	        var column = this.lastMarker.column + 1;
	        this.errorHandler.tolerateError(index, line, column, msg);
	    };
	    // Throw an exception because of the token.
	    Parser.prototype.unexpectedTokenError = function (token, message) {
	        var msg = message || messages_1.Messages.UnexpectedToken;
	        var value;
	        if (token) {
	            if (!message) {
	                msg = (token.type === 2 /* EOF */) ? messages_1.Messages.UnexpectedEOS :
	                    (token.type === 3 /* Identifier */) ? messages_1.Messages.UnexpectedIdentifier :
	                        (token.type === 6 /* NumericLiteral */) ? messages_1.Messages.UnexpectedNumber :
	                            (token.type === 8 /* StringLiteral */) ? messages_1.Messages.UnexpectedString :
	                                (token.type === 10 /* Template */) ? messages_1.Messages.UnexpectedTemplate :
	                                    messages_1.Messages.UnexpectedToken;
	                if (token.type === 4 /* Keyword */) {
	                    if (this.scanner.isFutureReservedWord(token.value)) {
	                        msg = messages_1.Messages.UnexpectedReserved;
	                    }
	                    else if (this.context.strict && this.scanner.isStrictModeReservedWord(token.value)) {
	                        msg = messages_1.Messages.StrictReservedWord;
	                    }
	                }
	            }
	            value = token.value;
	        }
	        else {
	            value = 'ILLEGAL';
	        }
	        msg = msg.replace('%0', value);
	        if (token && typeof token.lineNumber === 'number') {
	            var index = token.start;
	            var line = token.lineNumber;
	            var lastMarkerLineStart = this.lastMarker.index - this.lastMarker.column;
	            var column = token.start - lastMarkerLineStart + 1;
	            return this.errorHandler.createError(index, line, column, msg);
	        }
	        else {
	            var index = this.lastMarker.index;
	            var line = this.lastMarker.line;
	            var column = this.lastMarker.column + 1;
	            return this.errorHandler.createError(index, line, column, msg);
	        }
	    };
	    Parser.prototype.throwUnexpectedToken = function (token, message) {
	        throw this.unexpectedTokenError(token, message);
	    };
	    Parser.prototype.tolerateUnexpectedToken = function (token, message) {
	        this.errorHandler.tolerate(this.unexpectedTokenError(token, message));
	    };
	    Parser.prototype.collectComments = function () {
	        if (!this.config.comment) {
	            this.scanner.scanComments();
	        }
	        else {
	            var comments = this.scanner.scanComments();
	            if (comments.length > 0 && this.delegate) {
	                for (var i = 0; i < comments.length; ++i) {
	                    var e = comments[i];
	                    var node = void 0;
	                    node = {
	                        type: e.multiLine ? 'BlockComment' : 'LineComment',
	                        value: this.scanner.source.slice(e.slice[0], e.slice[1])
	                    };
	                    if (this.config.range) {
	                        node.range = e.range;
	                    }
	                    if (this.config.loc) {
	                        node.loc = e.loc;
	                    }
	                    var metadata = {
	                        start: {
	                            line: e.loc.start.line,
	                            column: e.loc.start.column,
	                            offset: e.range[0]
	                        },
	                        end: {
	                            line: e.loc.end.line,
	                            column: e.loc.end.column,
	                            offset: e.range[1]
	                        }
	                    };
	                    this.delegate(node, metadata);
	                }
	            }
	        }
	    };
	    // From internal representation to an external structure
	    Parser.prototype.getTokenRaw = function (token) {
	        return this.scanner.source.slice(token.start, token.end);
	    };
	    Parser.prototype.convertToken = function (token) {
	        var t = {
	            type: token_1.TokenName[token.type],
	            value: this.getTokenRaw(token)
	        };
	        if (this.config.range) {
	            t.range = [token.start, token.end];
	        }
	        if (this.config.loc) {
	            t.loc = {
	                start: {
	                    line: this.startMarker.line,
	                    column: this.startMarker.column
	                },
	                end: {
	                    line: this.scanner.lineNumber,
	                    column: this.scanner.index - this.scanner.lineStart
	                }
	            };
	        }
	        if (token.type === 9 /* RegularExpression */) {
	            var pattern = token.pattern;
	            var flags = token.flags;
	            t.regex = { pattern: pattern, flags: flags };
	        }
	        return t;
	    };
	    Parser.prototype.nextToken = function () {
	        var token = this.lookahead;
	        this.lastMarker.index = this.scanner.index;
	        this.lastMarker.line = this.scanner.lineNumber;
	        this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
	        this.collectComments();
	        if (this.scanner.index !== this.startMarker.index) {
	            this.startMarker.index = this.scanner.index;
	            this.startMarker.line = this.scanner.lineNumber;
	            this.startMarker.column = this.scanner.index - this.scanner.lineStart;
	        }
	        var next = this.scanner.lex();
	        this.hasLineTerminator = (token.lineNumber !== next.lineNumber);
	        if (next && this.context.strict && next.type === 3 /* Identifier */) {
	            if (this.scanner.isStrictModeReservedWord(next.value)) {
	                next.type = 4 /* Keyword */;
	            }
	        }
	        this.lookahead = next;
	        if (this.config.tokens && next.type !== 2 /* EOF */) {
	            this.tokens.push(this.convertToken(next));
	        }
	        return token;
	    };
	    Parser.prototype.nextRegexToken = function () {
	        this.collectComments();
	        var token = this.scanner.scanRegExp();
	        if (this.config.tokens) {
	            // Pop the previous token, '/' or '/='
	            // This is added from the lookahead token.
	            this.tokens.pop();
	            this.tokens.push(this.convertToken(token));
	        }
	        // Prime the next lookahead.
	        this.lookahead = token;
	        this.nextToken();
	        return token;
	    };
	    Parser.prototype.createNode = function () {
	        return {
	            index: this.startMarker.index,
	            line: this.startMarker.line,
	            column: this.startMarker.column
	        };
	    };
	    Parser.prototype.startNode = function (token, lastLineStart) {
	        if (lastLineStart === void 0) { lastLineStart = 0; }
	        var column = token.start - token.lineStart;
	        var line = token.lineNumber;
	        if (column < 0) {
	            column += lastLineStart;
	            line--;
	        }
	        return {
	            index: token.start,
	            line: line,
	            column: column
	        };
	    };
	    Parser.prototype.finalize = function (marker, node) {
	        if (this.config.range) {
	            node.range = [marker.index, this.lastMarker.index];
	        }
	        if (this.config.loc) {
	            node.loc = {
	                start: {
	                    line: marker.line,
	                    column: marker.column,
	                },
	                end: {
	                    line: this.lastMarker.line,
	                    column: this.lastMarker.column
	                }
	            };
	            if (this.config.source) {
	                node.loc.source = this.config.source;
	            }
	        }
	        if (this.delegate) {
	            var metadata = {
	                start: {
	                    line: marker.line,
	                    column: marker.column,
	                    offset: marker.index
	                },
	                end: {
	                    line: this.lastMarker.line,
	                    column: this.lastMarker.column,
	                    offset: this.lastMarker.index
	                }
	            };
	            this.delegate(node, metadata);
	        }
	        return node;
	    };
	    // Expect the next token to match the specified punctuator.
	    // If not, an exception will be thrown.
	    Parser.prototype.expect = function (value) {
	        var token = this.nextToken();
	        if (token.type !== 7 /* Punctuator */ || token.value !== value) {
	            this.throwUnexpectedToken(token);
	        }
	    };
	    // Quietly expect a comma when in tolerant mode, otherwise delegates to expect().
	    Parser.prototype.expectCommaSeparator = function () {
	        if (this.config.tolerant) {
	            var token = this.lookahead;
	            if (token.type === 7 /* Punctuator */ && token.value === ',') {
	                this.nextToken();
	            }
	            else if (token.type === 7 /* Punctuator */ && token.value === ';') {
	                this.nextToken();
	                this.tolerateUnexpectedToken(token);
	            }
	            else {
	                this.tolerateUnexpectedToken(token, messages_1.Messages.UnexpectedToken);
	            }
	        }
	        else {
	            this.expect(',');
	        }
	    };
	    // Expect the next token to match the specified keyword.
	    // If not, an exception will be thrown.
	    Parser.prototype.expectKeyword = function (keyword) {
	        var token = this.nextToken();
	        if (token.type !== 4 /* Keyword */ || token.value !== keyword) {
	            this.throwUnexpectedToken(token);
	        }
	    };
	    // Return true if the next token matches the specified punctuator.
	    Parser.prototype.match = function (value) {
	        return this.lookahead.type === 7 /* Punctuator */ && this.lookahead.value === value;
	    };
	    // Return true if the next token matches the specified keyword
	    Parser.prototype.matchKeyword = function (keyword) {
	        return this.lookahead.type === 4 /* Keyword */ && this.lookahead.value === keyword;
	    };
	    // Return true if the next token matches the specified contextual keyword
	    // (where an identifier is sometimes a keyword depending on the context)
	    Parser.prototype.matchContextualKeyword = function (keyword) {
	        return this.lookahead.type === 3 /* Identifier */ && this.lookahead.value === keyword;
	    };
	    // Return true if the next token is an assignment operator
	    Parser.prototype.matchAssign = function () {
	        if (this.lookahead.type !== 7 /* Punctuator */) {
	            return false;
	        }
	        var op = this.lookahead.value;
	        return op === '=' ||
	            op === '*=' ||
	            op === '**=' ||
	            op === '/=' ||
	            op === '%=' ||
	            op === '+=' ||
	            op === '-=' ||
	            op === '<<=' ||
	            op === '>>=' ||
	            op === '>>>=' ||
	            op === '&=' ||
	            op === '^=' ||
	            op === '|=';
	    };
	    // Cover grammar support.
	    //
	    // When an assignment expression position starts with an left parenthesis, the determination of the type
	    // of the syntax is to be deferred arbitrarily long until the end of the parentheses pair (plus a lookahead)
	    // or the first comma. This situation also defers the determination of all the expressions nested in the pair.
	    //
	    // There are three productions that can be parsed in a parentheses pair that needs to be determined
	    // after the outermost pair is closed. They are:
	    //
	    //   1. AssignmentExpression
	    //   2. BindingElements
	    //   3. AssignmentTargets
	    //
	    // In order to avoid exponential backtracking, we use two flags to denote if the production can be
	    // binding element or assignment target.
	    //
	    // The three productions have the relationship:
	    //
	    //   BindingElements ⊆ AssignmentTargets ⊆ AssignmentExpression
	    //
	    // with a single exception that CoverInitializedName when used directly in an Expression, generates
	    // an early error. Therefore, we need the third state, firstCoverInitializedNameError, to track the
	    // first usage of CoverInitializedName and report it when we reached the end of the parentheses pair.
	    //
	    // isolateCoverGrammar function runs the given parser function with a new cover grammar context, and it does not
	    // effect the current flags. This means the production the parser parses is only used as an expression. Therefore
	    // the CoverInitializedName check is conducted.
	    //
	    // inheritCoverGrammar function runs the given parse function with a new cover grammar context, and it propagates
	    // the flags outside of the parser. This means the production the parser parses is used as a part of a potential
	    // pattern. The CoverInitializedName check is deferred.
	    Parser.prototype.isolateCoverGrammar = function (parseFunction) {
	        var previousIsBindingElement = this.context.isBindingElement;
	        var previousIsAssignmentTarget = this.context.isAssignmentTarget;
	        var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
	        this.context.isBindingElement = true;
	        this.context.isAssignmentTarget = true;
	        this.context.firstCoverInitializedNameError = null;
	        var result = parseFunction.call(this);
	        if (this.context.firstCoverInitializedNameError !== null) {
	            this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
	        }
	        this.context.isBindingElement = previousIsBindingElement;
	        this.context.isAssignmentTarget = previousIsAssignmentTarget;
	        this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError;
	        return result;
	    };
	    Parser.prototype.inheritCoverGrammar = function (parseFunction) {
	        var previousIsBindingElement = this.context.isBindingElement;
	        var previousIsAssignmentTarget = this.context.isAssignmentTarget;
	        var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
	        this.context.isBindingElement = true;
	        this.context.isAssignmentTarget = true;
	        this.context.firstCoverInitializedNameError = null;
	        var result = parseFunction.call(this);
	        this.context.isBindingElement = this.context.isBindingElement && previousIsBindingElement;
	        this.context.isAssignmentTarget = this.context.isAssignmentTarget && previousIsAssignmentTarget;
	        this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError || this.context.firstCoverInitializedNameError;
	        return result;
	    };
	    Parser.prototype.consumeSemicolon = function () {
	        if (this.match(';')) {
	            this.nextToken();
	        }
	        else if (!this.hasLineTerminator) {
	            if (this.lookahead.type !== 2 /* EOF */ && !this.match('}')) {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	            this.lastMarker.index = this.startMarker.index;
	            this.lastMarker.line = this.startMarker.line;
	            this.lastMarker.column = this.startMarker.column;
	        }
	    };
	    // https://tc39.github.io/ecma262/#sec-primary-expression
	    Parser.prototype.parsePrimaryExpression = function () {
	        var node = this.createNode();
	        var expr;
	        var token, raw;
	        switch (this.lookahead.type) {
	            case 3 /* Identifier */:
	                if ((this.context.isModule || this.context.await) && this.lookahead.value === 'await') {
	                    this.tolerateUnexpectedToken(this.lookahead);
	                }
	                expr = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(node, new Node.Identifier(this.nextToken().value));
	                break;
	            case 6 /* NumericLiteral */:
	            case 8 /* StringLiteral */:
	                if (this.context.strict && this.lookahead.octal) {
	                    this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.StrictOctalLiteral);
	                }
	                this.context.isAssignmentTarget = false;
	                this.context.isBindingElement = false;
	                token = this.nextToken();
	                raw = this.getTokenRaw(token);
	                expr = this.finalize(node, new Node.Literal(token.value, raw));
	                break;
	            case 1 /* BooleanLiteral */:
	                this.context.isAssignmentTarget = false;
	                this.context.isBindingElement = false;
	                token = this.nextToken();
	                raw = this.getTokenRaw(token);
	                expr = this.finalize(node, new Node.Literal(token.value === 'true', raw));
	                break;
	            case 5 /* NullLiteral */:
	                this.context.isAssignmentTarget = false;
	                this.context.isBindingElement = false;
	                token = this.nextToken();
	                raw = this.getTokenRaw(token);
	                expr = this.finalize(node, new Node.Literal(null, raw));
	                break;
	            case 10 /* Template */:
	                expr = this.parseTemplateLiteral();
	                break;
	            case 7 /* Punctuator */:
	                switch (this.lookahead.value) {
	                    case '(':
	                        this.context.isBindingElement = false;
	                        expr = this.inheritCoverGrammar(this.parseGroupExpression);
	                        break;
	                    case '[':
	                        expr = this.inheritCoverGrammar(this.parseArrayInitializer);
	                        break;
	                    case '{':
	                        expr = this.inheritCoverGrammar(this.parseObjectInitializer);
	                        break;
	                    case '/':
	                    case '/=':
	                        this.context.isAssignmentTarget = false;
	                        this.context.isBindingElement = false;
	                        this.scanner.index = this.startMarker.index;
	                        token = this.nextRegexToken();
	                        raw = this.getTokenRaw(token);
	                        expr = this.finalize(node, new Node.RegexLiteral(token.regex, raw, token.pattern, token.flags));
	                        break;
	                    default:
	                        expr = this.throwUnexpectedToken(this.nextToken());
	                }
	                break;
	            case 4 /* Keyword */:
	                if (!this.context.strict && this.context.allowYield && this.matchKeyword('yield')) {
	                    expr = this.parseIdentifierName();
	                }
	                else if (!this.context.strict && this.matchKeyword('let')) {
	                    expr = this.finalize(node, new Node.Identifier(this.nextToken().value));
	                }
	                else {
	                    this.context.isAssignmentTarget = false;
	                    this.context.isBindingElement = false;
	                    if (this.matchKeyword('function')) {
	                        expr = this.parseFunctionExpression();
	                    }
	                    else if (this.matchKeyword('this')) {
	                        this.nextToken();
	                        expr = this.finalize(node, new Node.ThisExpression());
	                    }
	                    else if (this.matchKeyword('class')) {
	                        expr = this.parseClassExpression();
	                    }
	                    else {
	                        expr = this.throwUnexpectedToken(this.nextToken());
	                    }
	                }
	                break;
	            default:
	                expr = this.throwUnexpectedToken(this.nextToken());
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-array-initializer
	    Parser.prototype.parseSpreadElement = function () {
	        var node = this.createNode();
	        this.expect('...');
	        var arg = this.inheritCoverGrammar(this.parseAssignmentExpression);
	        return this.finalize(node, new Node.SpreadElement(arg));
	    };
	    Parser.prototype.parseArrayInitializer = function () {
	        var node = this.createNode();
	        var elements = [];
	        this.expect('[');
	        while (!this.match(']')) {
	            if (this.match(',')) {
	                this.nextToken();
	                elements.push(null);
	            }
	            else if (this.match('...')) {
	                var element = this.parseSpreadElement();
	                if (!this.match(']')) {
	                    this.context.isAssignmentTarget = false;
	                    this.context.isBindingElement = false;
	                    this.expect(',');
	                }
	                elements.push(element);
	            }
	            else {
	                elements.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
	                if (!this.match(']')) {
	                    this.expect(',');
	                }
	            }
	        }
	        this.expect(']');
	        return this.finalize(node, new Node.ArrayExpression(elements));
	    };
	    // https://tc39.github.io/ecma262/#sec-object-initializer
	    Parser.prototype.parsePropertyMethod = function (params) {
	        this.context.isAssignmentTarget = false;
	        this.context.isBindingElement = false;
	        var previousStrict = this.context.strict;
	        var previousAllowStrictDirective = this.context.allowStrictDirective;
	        this.context.allowStrictDirective = params.simple;
	        var body = this.isolateCoverGrammar(this.parseFunctionSourceElements);
	        if (this.context.strict && params.firstRestricted) {
	            this.tolerateUnexpectedToken(params.firstRestricted, params.message);
	        }
	        if (this.context.strict && params.stricted) {
	            this.tolerateUnexpectedToken(params.stricted, params.message);
	        }
	        this.context.strict = previousStrict;
	        this.context.allowStrictDirective = previousAllowStrictDirective;
	        return body;
	    };
	    Parser.prototype.parsePropertyMethodFunction = function () {
	        var isGenerator = false;
	        var node = this.createNode();
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = true;
	        var params = this.parseFormalParameters();
	        var method = this.parsePropertyMethod(params);
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
	    };
	    Parser.prototype.parsePropertyMethodAsyncFunction = function () {
	        var node = this.createNode();
	        var previousAllowYield = this.context.allowYield;
	        var previousAwait = this.context.await;
	        this.context.allowYield = false;
	        this.context.await = true;
	        var params = this.parseFormalParameters();
	        var method = this.parsePropertyMethod(params);
	        this.context.allowYield = previousAllowYield;
	        this.context.await = previousAwait;
	        return this.finalize(node, new Node.AsyncFunctionExpression(null, params.params, method));
	    };
	    Parser.prototype.parseObjectPropertyKey = function () {
	        var node = this.createNode();
	        var token = this.nextToken();
	        var key;
	        switch (token.type) {
	            case 8 /* StringLiteral */:
	            case 6 /* NumericLiteral */:
	                if (this.context.strict && token.octal) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictOctalLiteral);
	                }
	                var raw = this.getTokenRaw(token);
	                key = this.finalize(node, new Node.Literal(token.value, raw));
	                break;
	            case 3 /* Identifier */:
	            case 1 /* BooleanLiteral */:
	            case 5 /* NullLiteral */:
	            case 4 /* Keyword */:
	                key = this.finalize(node, new Node.Identifier(token.value));
	                break;
	            case 7 /* Punctuator */:
	                if (token.value === '[') {
	                    key = this.isolateCoverGrammar(this.parseAssignmentExpression);
	                    this.expect(']');
	                }
	                else {
	                    key = this.throwUnexpectedToken(token);
	                }
	                break;
	            default:
	                key = this.throwUnexpectedToken(token);
	        }
	        return key;
	    };
	    Parser.prototype.isPropertyKey = function (key, value) {
	        return (key.type === syntax_1.Syntax.Identifier && key.name === value) ||
	            (key.type === syntax_1.Syntax.Literal && key.value === value);
	    };
	    Parser.prototype.parseObjectProperty = function (hasProto) {
	        var node = this.createNode();
	        var token = this.lookahead;
	        var kind;
	        var key = null;
	        var value = null;
	        var computed = false;
	        var method = false;
	        var shorthand = false;
	        var isAsync = false;
	        if (token.type === 3 /* Identifier */) {
	            var id = token.value;
	            this.nextToken();
	            computed = this.match('[');
	            isAsync = !this.hasLineTerminator && (id === 'async') &&
	                !this.match(':') && !this.match('(') && !this.match('*') && !this.match(',');
	            key = isAsync ? this.parseObjectPropertyKey() : this.finalize(node, new Node.Identifier(id));
	        }
	        else if (this.match('*')) {
	            this.nextToken();
	        }
	        else {
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	        }
	        var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
	        if (token.type === 3 /* Identifier */ && !isAsync && token.value === 'get' && lookaheadPropertyKey) {
	            kind = 'get';
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            this.context.allowYield = false;
	            value = this.parseGetterMethod();
	        }
	        else if (token.type === 3 /* Identifier */ && !isAsync && token.value === 'set' && lookaheadPropertyKey) {
	            kind = 'set';
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            value = this.parseSetterMethod();
	        }
	        else if (token.type === 7 /* Punctuator */ && token.value === '*' && lookaheadPropertyKey) {
	            kind = 'init';
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            value = this.parseGeneratorMethod();
	            method = true;
	        }
	        else {
	            if (!key) {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	            kind = 'init';
	            if (this.match(':') && !isAsync) {
	                if (!computed && this.isPropertyKey(key, '__proto__')) {
	                    if (hasProto.value) {
	                        this.tolerateError(messages_1.Messages.DuplicateProtoProperty);
	                    }
	                    hasProto.value = true;
	                }
	                this.nextToken();
	                value = this.inheritCoverGrammar(this.parseAssignmentExpression);
	            }
	            else if (this.match('(')) {
	                value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
	                method = true;
	            }
	            else if (token.type === 3 /* Identifier */) {
	                var id = this.finalize(node, new Node.Identifier(token.value));
	                if (this.match('=')) {
	                    this.context.firstCoverInitializedNameError = this.lookahead;
	                    this.nextToken();
	                    shorthand = true;
	                    var init = this.isolateCoverGrammar(this.parseAssignmentExpression);
	                    value = this.finalize(node, new Node.AssignmentPattern(id, init));
	                }
	                else {
	                    shorthand = true;
	                    value = id;
	                }
	            }
	            else {
	                this.throwUnexpectedToken(this.nextToken());
	            }
	        }
	        return this.finalize(node, new Node.Property(kind, key, computed, value, method, shorthand));
	    };
	    Parser.prototype.parseObjectInitializer = function () {
	        var node = this.createNode();
	        this.expect('{');
	        var properties = [];
	        var hasProto = { value: false };
	        while (!this.match('}')) {
	            properties.push(this.parseObjectProperty(hasProto));
	            if (!this.match('}')) {
	                this.expectCommaSeparator();
	            }
	        }
	        this.expect('}');
	        return this.finalize(node, new Node.ObjectExpression(properties));
	    };
	    // https://tc39.github.io/ecma262/#sec-template-literals
	    Parser.prototype.parseTemplateHead = function () {
	        assert_1.assert(this.lookahead.head, 'Template literal must start with a template head');
	        var node = this.createNode();
	        var token = this.nextToken();
	        var raw = token.value;
	        var cooked = token.cooked;
	        return this.finalize(node, new Node.TemplateElement({ raw: raw, cooked: cooked }, token.tail));
	    };
	    Parser.prototype.parseTemplateElement = function () {
	        if (this.lookahead.type !== 10 /* Template */) {
	            this.throwUnexpectedToken();
	        }
	        var node = this.createNode();
	        var token = this.nextToken();
	        var raw = token.value;
	        var cooked = token.cooked;
	        return this.finalize(node, new Node.TemplateElement({ raw: raw, cooked: cooked }, token.tail));
	    };
	    Parser.prototype.parseTemplateLiteral = function () {
	        var node = this.createNode();
	        var expressions = [];
	        var quasis = [];
	        var quasi = this.parseTemplateHead();
	        quasis.push(quasi);
	        while (!quasi.tail) {
	            expressions.push(this.parseExpression());
	            quasi = this.parseTemplateElement();
	            quasis.push(quasi);
	        }
	        return this.finalize(node, new Node.TemplateLiteral(quasis, expressions));
	    };
	    // https://tc39.github.io/ecma262/#sec-grouping-operator
	    Parser.prototype.reinterpretExpressionAsPattern = function (expr) {
	        switch (expr.type) {
	            case syntax_1.Syntax.Identifier:
	            case syntax_1.Syntax.MemberExpression:
	            case syntax_1.Syntax.RestElement:
	            case syntax_1.Syntax.AssignmentPattern:
	                break;
	            case syntax_1.Syntax.SpreadElement:
	                expr.type = syntax_1.Syntax.RestElement;
	                this.reinterpretExpressionAsPattern(expr.argument);
	                break;
	            case syntax_1.Syntax.ArrayExpression:
	                expr.type = syntax_1.Syntax.ArrayPattern;
	                for (var i = 0; i < expr.elements.length; i++) {
	                    if (expr.elements[i] !== null) {
	                        this.reinterpretExpressionAsPattern(expr.elements[i]);
	                    }
	                }
	                break;
	            case syntax_1.Syntax.ObjectExpression:
	                expr.type = syntax_1.Syntax.ObjectPattern;
	                for (var i = 0; i < expr.properties.length; i++) {
	                    this.reinterpretExpressionAsPattern(expr.properties[i].value);
	                }
	                break;
	            case syntax_1.Syntax.AssignmentExpression:
	                expr.type = syntax_1.Syntax.AssignmentPattern;
	                delete expr.operator;
	                this.reinterpretExpressionAsPattern(expr.left);
	                break;
	            default:
	                // Allow other node type for tolerant parsing.
	                break;
	        }
	    };
	    Parser.prototype.parseGroupExpression = function () {
	        var expr;
	        this.expect('(');
	        if (this.match(')')) {
	            this.nextToken();
	            if (!this.match('=>')) {
	                this.expect('=>');
	            }
	            expr = {
	                type: ArrowParameterPlaceHolder,
	                params: [],
	                async: false
	            };
	        }
	        else {
	            var startToken = this.lookahead;
	            var params = [];
	            if (this.match('...')) {
	                expr = this.parseRestElement(params);
	                this.expect(')');
	                if (!this.match('=>')) {
	                    this.expect('=>');
	                }
	                expr = {
	                    type: ArrowParameterPlaceHolder,
	                    params: [expr],
	                    async: false
	                };
	            }
	            else {
	                var arrow = false;
	                this.context.isBindingElement = true;
	                expr = this.inheritCoverGrammar(this.parseAssignmentExpression);
	                if (this.match(',')) {
	                    var expressions = [];
	                    this.context.isAssignmentTarget = false;
	                    expressions.push(expr);
	                    while (this.lookahead.type !== 2 /* EOF */) {
	                        if (!this.match(',')) {
	                            break;
	                        }
	                        this.nextToken();
	                        if (this.match(')')) {
	                            this.nextToken();
	                            for (var i = 0; i < expressions.length; i++) {
	                                this.reinterpretExpressionAsPattern(expressions[i]);
	                            }
	                            arrow = true;
	                            expr = {
	                                type: ArrowParameterPlaceHolder,
	                                params: expressions,
	                                async: false
	                            };
	                        }
	                        else if (this.match('...')) {
	                            if (!this.context.isBindingElement) {
	                                this.throwUnexpectedToken(this.lookahead);
	                            }
	                            expressions.push(this.parseRestElement(params));
	                            this.expect(')');
	                            if (!this.match('=>')) {
	                                this.expect('=>');
	                            }
	                            this.context.isBindingElement = false;
	                            for (var i = 0; i < expressions.length; i++) {
	                                this.reinterpretExpressionAsPattern(expressions[i]);
	                            }
	                            arrow = true;
	                            expr = {
	                                type: ArrowParameterPlaceHolder,
	                                params: expressions,
	                                async: false
	                            };
	                        }
	                        else {
	                            expressions.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
	                        }
	                        if (arrow) {
	                            break;
	                        }
	                    }
	                    if (!arrow) {
	                        expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
	                    }
	                }
	                if (!arrow) {
	                    this.expect(')');
	                    if (this.match('=>')) {
	                        if (expr.type === syntax_1.Syntax.Identifier && expr.name === 'yield') {
	                            arrow = true;
	                            expr = {
	                                type: ArrowParameterPlaceHolder,
	                                params: [expr],
	                                async: false
	                            };
	                        }
	                        if (!arrow) {
	                            if (!this.context.isBindingElement) {
	                                this.throwUnexpectedToken(this.lookahead);
	                            }
	                            if (expr.type === syntax_1.Syntax.SequenceExpression) {
	                                for (var i = 0; i < expr.expressions.length; i++) {
	                                    this.reinterpretExpressionAsPattern(expr.expressions[i]);
	                                }
	                            }
	                            else {
	                                this.reinterpretExpressionAsPattern(expr);
	                            }
	                            var parameters = (expr.type === syntax_1.Syntax.SequenceExpression ? expr.expressions : [expr]);
	                            expr = {
	                                type: ArrowParameterPlaceHolder,
	                                params: parameters,
	                                async: false
	                            };
	                        }
	                    }
	                    this.context.isBindingElement = false;
	                }
	            }
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-left-hand-side-expressions
	    Parser.prototype.parseArguments = function () {
	        this.expect('(');
	        var args = [];
	        if (!this.match(')')) {
	            while (true) {
	                var expr = this.match('...') ? this.parseSpreadElement() :
	                    this.isolateCoverGrammar(this.parseAssignmentExpression);
	                args.push(expr);
	                if (this.match(')')) {
	                    break;
	                }
	                this.expectCommaSeparator();
	                if (this.match(')')) {
	                    break;
	                }
	            }
	        }
	        this.expect(')');
	        return args;
	    };
	    Parser.prototype.isIdentifierName = function (token) {
	        return token.type === 3 /* Identifier */ ||
	            token.type === 4 /* Keyword */ ||
	            token.type === 1 /* BooleanLiteral */ ||
	            token.type === 5 /* NullLiteral */;
	    };
	    Parser.prototype.parseIdentifierName = function () {
	        var node = this.createNode();
	        var token = this.nextToken();
	        if (!this.isIdentifierName(token)) {
	            this.throwUnexpectedToken(token);
	        }
	        return this.finalize(node, new Node.Identifier(token.value));
	    };
	    Parser.prototype.parseNewExpression = function () {
	        var node = this.createNode();
	        var id = this.parseIdentifierName();
	        assert_1.assert(id.name === 'new', 'New expression must start with `new`');
	        var expr;
	        if (this.match('.')) {
	            this.nextToken();
	            if (this.lookahead.type === 3 /* Identifier */ && this.context.inFunctionBody && this.lookahead.value === 'target') {
	                var property = this.parseIdentifierName();
	                expr = new Node.MetaProperty(id, property);
	            }
	            else {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	        }
	        else {
	            var callee = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
	            var args = this.match('(') ? this.parseArguments() : [];
	            expr = new Node.NewExpression(callee, args);
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	        }
	        return this.finalize(node, expr);
	    };
	    Parser.prototype.parseAsyncArgument = function () {
	        var arg = this.parseAssignmentExpression();
	        this.context.firstCoverInitializedNameError = null;
	        return arg;
	    };
	    Parser.prototype.parseAsyncArguments = function () {
	        this.expect('(');
	        var args = [];
	        if (!this.match(')')) {
	            while (true) {
	                var expr = this.match('...') ? this.parseSpreadElement() :
	                    this.isolateCoverGrammar(this.parseAsyncArgument);
	                args.push(expr);
	                if (this.match(')')) {
	                    break;
	                }
	                this.expectCommaSeparator();
	                if (this.match(')')) {
	                    break;
	                }
	            }
	        }
	        this.expect(')');
	        return args;
	    };
	    Parser.prototype.parseLeftHandSideExpressionAllowCall = function () {
	        var startToken = this.lookahead;
	        var maybeAsync = this.matchContextualKeyword('async');
	        var previousAllowIn = this.context.allowIn;
	        this.context.allowIn = true;
	        var expr;
	        if (this.matchKeyword('super') && this.context.inFunctionBody) {
	            expr = this.createNode();
	            this.nextToken();
	            expr = this.finalize(expr, new Node.Super());
	            if (!this.match('(') && !this.match('.') && !this.match('[')) {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	        }
	        else {
	            expr = this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);
	        }
	        while (true) {
	            if (this.match('.')) {
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = true;
	                this.expect('.');
	                var property = this.parseIdentifierName();
	                expr = this.finalize(this.startNode(startToken), new Node.StaticMemberExpression(expr, property));
	            }
	            else if (this.match('(')) {
	                var asyncArrow = maybeAsync && (startToken.lineNumber === this.lookahead.lineNumber);
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = false;
	                var args = asyncArrow ? this.parseAsyncArguments() : this.parseArguments();
	                expr = this.finalize(this.startNode(startToken), new Node.CallExpression(expr, args));
	                if (asyncArrow && this.match('=>')) {
	                    for (var i = 0; i < args.length; ++i) {
	                        this.reinterpretExpressionAsPattern(args[i]);
	                    }
	                    expr = {
	                        type: ArrowParameterPlaceHolder,
	                        params: args,
	                        async: true
	                    };
	                }
	            }
	            else if (this.match('[')) {
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = true;
	                this.expect('[');
	                var property = this.isolateCoverGrammar(this.parseExpression);
	                this.expect(']');
	                expr = this.finalize(this.startNode(startToken), new Node.ComputedMemberExpression(expr, property));
	            }
	            else if (this.lookahead.type === 10 /* Template */ && this.lookahead.head) {
	                var quasi = this.parseTemplateLiteral();
	                expr = this.finalize(this.startNode(startToken), new Node.TaggedTemplateExpression(expr, quasi));
	            }
	            else {
	                break;
	            }
	        }
	        this.context.allowIn = previousAllowIn;
	        return expr;
	    };
	    Parser.prototype.parseSuper = function () {
	        var node = this.createNode();
	        this.expectKeyword('super');
	        if (!this.match('[') && !this.match('.')) {
	            this.throwUnexpectedToken(this.lookahead);
	        }
	        return this.finalize(node, new Node.Super());
	    };
	    Parser.prototype.parseLeftHandSideExpression = function () {
	        assert_1.assert(this.context.allowIn, 'callee of new expression always allow in keyword.');
	        var node = this.startNode(this.lookahead);
	        var expr = (this.matchKeyword('super') && this.context.inFunctionBody) ? this.parseSuper() :
	            this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);
	        while (true) {
	            if (this.match('[')) {
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = true;
	                this.expect('[');
	                var property = this.isolateCoverGrammar(this.parseExpression);
	                this.expect(']');
	                expr = this.finalize(node, new Node.ComputedMemberExpression(expr, property));
	            }
	            else if (this.match('.')) {
	                this.context.isBindingElement = false;
	                this.context.isAssignmentTarget = true;
	                this.expect('.');
	                var property = this.parseIdentifierName();
	                expr = this.finalize(node, new Node.StaticMemberExpression(expr, property));
	            }
	            else if (this.lookahead.type === 10 /* Template */ && this.lookahead.head) {
	                var quasi = this.parseTemplateLiteral();
	                expr = this.finalize(node, new Node.TaggedTemplateExpression(expr, quasi));
	            }
	            else {
	                break;
	            }
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-update-expressions
	    Parser.prototype.parseUpdateExpression = function () {
	        var expr;
	        var startToken = this.lookahead;
	        if (this.match('++') || this.match('--')) {
	            var node = this.startNode(startToken);
	            var token = this.nextToken();
	            expr = this.inheritCoverGrammar(this.parseUnaryExpression);
	            if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
	                this.tolerateError(messages_1.Messages.StrictLHSPrefix);
	            }
	            if (!this.context.isAssignmentTarget) {
	                this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
	            }
	            var prefix = true;
	            expr = this.finalize(node, new Node.UpdateExpression(token.value, expr, prefix));
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	        }
	        else {
	            expr = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
	            if (!this.hasLineTerminator && this.lookahead.type === 7 /* Punctuator */) {
	                if (this.match('++') || this.match('--')) {
	                    if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
	                        this.tolerateError(messages_1.Messages.StrictLHSPostfix);
	                    }
	                    if (!this.context.isAssignmentTarget) {
	                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
	                    }
	                    this.context.isAssignmentTarget = false;
	                    this.context.isBindingElement = false;
	                    var operator = this.nextToken().value;
	                    var prefix = false;
	                    expr = this.finalize(this.startNode(startToken), new Node.UpdateExpression(operator, expr, prefix));
	                }
	            }
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-unary-operators
	    Parser.prototype.parseAwaitExpression = function () {
	        var node = this.createNode();
	        this.nextToken();
	        var argument = this.parseUnaryExpression();
	        return this.finalize(node, new Node.AwaitExpression(argument));
	    };
	    Parser.prototype.parseUnaryExpression = function () {
	        var expr;
	        if (this.match('+') || this.match('-') || this.match('~') || this.match('!') ||
	            this.matchKeyword('delete') || this.matchKeyword('void') || this.matchKeyword('typeof')) {
	            var node = this.startNode(this.lookahead);
	            var token = this.nextToken();
	            expr = this.inheritCoverGrammar(this.parseUnaryExpression);
	            expr = this.finalize(node, new Node.UnaryExpression(token.value, expr));
	            if (this.context.strict && expr.operator === 'delete' && expr.argument.type === syntax_1.Syntax.Identifier) {
	                this.tolerateError(messages_1.Messages.StrictDelete);
	            }
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	        }
	        else if (this.context.await && this.matchContextualKeyword('await')) {
	            expr = this.parseAwaitExpression();
	        }
	        else {
	            expr = this.parseUpdateExpression();
	        }
	        return expr;
	    };
	    Parser.prototype.parseExponentiationExpression = function () {
	        var startToken = this.lookahead;
	        var expr = this.inheritCoverGrammar(this.parseUnaryExpression);
	        if (expr.type !== syntax_1.Syntax.UnaryExpression && this.match('**')) {
	            this.nextToken();
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	            var left = expr;
	            var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
	            expr = this.finalize(this.startNode(startToken), new Node.BinaryExpression('**', left, right));
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-exp-operator
	    // https://tc39.github.io/ecma262/#sec-multiplicative-operators
	    // https://tc39.github.io/ecma262/#sec-additive-operators
	    // https://tc39.github.io/ecma262/#sec-bitwise-shift-operators
	    // https://tc39.github.io/ecma262/#sec-relational-operators
	    // https://tc39.github.io/ecma262/#sec-equality-operators
	    // https://tc39.github.io/ecma262/#sec-binary-bitwise-operators
	    // https://tc39.github.io/ecma262/#sec-binary-logical-operators
	    Parser.prototype.binaryPrecedence = function (token) {
	        var op = token.value;
	        var precedence;
	        if (token.type === 7 /* Punctuator */) {
	            precedence = this.operatorPrecedence[op] || 0;
	        }
	        else if (token.type === 4 /* Keyword */) {
	            precedence = (op === 'instanceof' || (this.context.allowIn && op === 'in')) ? 7 : 0;
	        }
	        else {
	            precedence = 0;
	        }
	        return precedence;
	    };
	    Parser.prototype.parseBinaryExpression = function () {
	        var startToken = this.lookahead;
	        var expr = this.inheritCoverGrammar(this.parseExponentiationExpression);
	        var token = this.lookahead;
	        var prec = this.binaryPrecedence(token);
	        if (prec > 0) {
	            this.nextToken();
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	            var markers = [startToken, this.lookahead];
	            var left = expr;
	            var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
	            var stack = [left, token.value, right];
	            var precedences = [prec];
	            while (true) {
	                prec = this.binaryPrecedence(this.lookahead);
	                if (prec <= 0) {
	                    break;
	                }
	                // Reduce: make a binary expression from the three topmost entries.
	                while ((stack.length > 2) && (prec <= precedences[precedences.length - 1])) {
	                    right = stack.pop();
	                    var operator = stack.pop();
	                    precedences.pop();
	                    left = stack.pop();
	                    markers.pop();
	                    var node = this.startNode(markers[markers.length - 1]);
	                    stack.push(this.finalize(node, new Node.BinaryExpression(operator, left, right)));
	                }
	                // Shift.
	                stack.push(this.nextToken().value);
	                precedences.push(prec);
	                markers.push(this.lookahead);
	                stack.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
	            }
	            // Final reduce to clean-up the stack.
	            var i = stack.length - 1;
	            expr = stack[i];
	            var lastMarker = markers.pop();
	            while (i > 1) {
	                var marker = markers.pop();
	                var lastLineStart = lastMarker && lastMarker.lineStart;
	                var node = this.startNode(marker, lastLineStart);
	                var operator = stack[i - 1];
	                expr = this.finalize(node, new Node.BinaryExpression(operator, stack[i - 2], expr));
	                i -= 2;
	                lastMarker = marker;
	            }
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-conditional-operator
	    Parser.prototype.parseConditionalExpression = function () {
	        var startToken = this.lookahead;
	        var expr = this.inheritCoverGrammar(this.parseBinaryExpression);
	        if (this.match('?')) {
	            this.nextToken();
	            var previousAllowIn = this.context.allowIn;
	            this.context.allowIn = true;
	            var consequent = this.isolateCoverGrammar(this.parseAssignmentExpression);
	            this.context.allowIn = previousAllowIn;
	            this.expect(':');
	            var alternate = this.isolateCoverGrammar(this.parseAssignmentExpression);
	            expr = this.finalize(this.startNode(startToken), new Node.ConditionalExpression(expr, consequent, alternate));
	            this.context.isAssignmentTarget = false;
	            this.context.isBindingElement = false;
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-assignment-operators
	    Parser.prototype.checkPatternParam = function (options, param) {
	        switch (param.type) {
	            case syntax_1.Syntax.Identifier:
	                this.validateParam(options, param, param.name);
	                break;
	            case syntax_1.Syntax.RestElement:
	                this.checkPatternParam(options, param.argument);
	                break;
	            case syntax_1.Syntax.AssignmentPattern:
	                this.checkPatternParam(options, param.left);
	                break;
	            case syntax_1.Syntax.ArrayPattern:
	                for (var i = 0; i < param.elements.length; i++) {
	                    if (param.elements[i] !== null) {
	                        this.checkPatternParam(options, param.elements[i]);
	                    }
	                }
	                break;
	            case syntax_1.Syntax.ObjectPattern:
	                for (var i = 0; i < param.properties.length; i++) {
	                    this.checkPatternParam(options, param.properties[i].value);
	                }
	                break;
	            default:
	                break;
	        }
	        options.simple = options.simple && (param instanceof Node.Identifier);
	    };
	    Parser.prototype.reinterpretAsCoverFormalsList = function (expr) {
	        var params = [expr];
	        var options;
	        var asyncArrow = false;
	        switch (expr.type) {
	            case syntax_1.Syntax.Identifier:
	                break;
	            case ArrowParameterPlaceHolder:
	                params = expr.params;
	                asyncArrow = expr.async;
	                break;
	            default:
	                return null;
	        }
	        options = {
	            simple: true,
	            paramSet: {}
	        };
	        for (var i = 0; i < params.length; ++i) {
	            var param = params[i];
	            if (param.type === syntax_1.Syntax.AssignmentPattern) {
	                if (param.right.type === syntax_1.Syntax.YieldExpression) {
	                    if (param.right.argument) {
	                        this.throwUnexpectedToken(this.lookahead);
	                    }
	                    param.right.type = syntax_1.Syntax.Identifier;
	                    param.right.name = 'yield';
	                    delete param.right.argument;
	                    delete param.right.delegate;
	                }
	            }
	            else if (asyncArrow && param.type === syntax_1.Syntax.Identifier && param.name === 'await') {
	                this.throwUnexpectedToken(this.lookahead);
	            }
	            this.checkPatternParam(options, param);
	            params[i] = param;
	        }
	        if (this.context.strict || !this.context.allowYield) {
	            for (var i = 0; i < params.length; ++i) {
	                var param = params[i];
	                if (param.type === syntax_1.Syntax.YieldExpression) {
	                    this.throwUnexpectedToken(this.lookahead);
	                }
	            }
	        }
	        if (options.message === messages_1.Messages.StrictParamDupe) {
	            var token = this.context.strict ? options.stricted : options.firstRestricted;
	            this.throwUnexpectedToken(token, options.message);
	        }
	        return {
	            simple: options.simple,
	            params: params,
	            stricted: options.stricted,
	            firstRestricted: options.firstRestricted,
	            message: options.message
	        };
	    };
	    Parser.prototype.parseAssignmentExpression = function () {
	        var expr;
	        if (!this.context.allowYield && this.matchKeyword('yield')) {
	            expr = this.parseYieldExpression();
	        }
	        else {
	            var startToken = this.lookahead;
	            var token = startToken;
	            expr = this.parseConditionalExpression();
	            if (token.type === 3 /* Identifier */ && (token.lineNumber === this.lookahead.lineNumber) && token.value === 'async') {
	                if (this.lookahead.type === 3 /* Identifier */ || this.matchKeyword('yield')) {
	                    var arg = this.parsePrimaryExpression();
	                    this.reinterpretExpressionAsPattern(arg);
	                    expr = {
	                        type: ArrowParameterPlaceHolder,
	                        params: [arg],
	                        async: true
	                    };
	                }
	            }
	            if (expr.type === ArrowParameterPlaceHolder || this.match('=>')) {
	                // https://tc39.github.io/ecma262/#sec-arrow-function-definitions
	                this.context.isAssignmentTarget = false;
	                this.context.isBindingElement = false;
	                var isAsync = expr.async;
	                var list = this.reinterpretAsCoverFormalsList(expr);
	                if (list) {
	                    if (this.hasLineTerminator) {
	                        this.tolerateUnexpectedToken(this.lookahead);
	                    }
	                    this.context.firstCoverInitializedNameError = null;
	                    var previousStrict = this.context.strict;
	                    var previousAllowStrictDirective = this.context.allowStrictDirective;
	                    this.context.allowStrictDirective = list.simple;
	                    var previousAllowYield = this.context.allowYield;
	                    var previousAwait = this.context.await;
	                    this.context.allowYield = true;
	                    this.context.await = isAsync;
	                    var node = this.startNode(startToken);
	                    this.expect('=>');
	                    var body = void 0;
	                    if (this.match('{')) {
	                        var previousAllowIn = this.context.allowIn;
	                        this.context.allowIn = true;
	                        body = this.parseFunctionSourceElements();
	                        this.context.allowIn = previousAllowIn;
	                    }
	                    else {
	                        body = this.isolateCoverGrammar(this.parseAssignmentExpression);
	                    }
	                    var expression = body.type !== syntax_1.Syntax.BlockStatement;
	                    if (this.context.strict && list.firstRestricted) {
	                        this.throwUnexpectedToken(list.firstRestricted, list.message);
	                    }
	                    if (this.context.strict && list.stricted) {
	                        this.tolerateUnexpectedToken(list.stricted, list.message);
	                    }
	                    expr = isAsync ? this.finalize(node, new Node.AsyncArrowFunctionExpression(list.params, body, expression)) :
	                        this.finalize(node, new Node.ArrowFunctionExpression(list.params, body, expression));
	                    this.context.strict = previousStrict;
	                    this.context.allowStrictDirective = previousAllowStrictDirective;
	                    this.context.allowYield = previousAllowYield;
	                    this.context.await = previousAwait;
	                }
	            }
	            else {
	                if (this.matchAssign()) {
	                    if (!this.context.isAssignmentTarget) {
	                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
	                    }
	                    if (this.context.strict && expr.type === syntax_1.Syntax.Identifier) {
	                        var id = expr;
	                        if (this.scanner.isRestrictedWord(id.name)) {
	                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictLHSAssignment);
	                        }
	                        if (this.scanner.isStrictModeReservedWord(id.name)) {
	                            this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
	                        }
	                    }
	                    if (!this.match('=')) {
	                        this.context.isAssignmentTarget = false;
	                        this.context.isBindingElement = false;
	                    }
	                    else {
	                        this.reinterpretExpressionAsPattern(expr);
	                    }
	                    token = this.nextToken();
	                    var operator = token.value;
	                    var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
	                    expr = this.finalize(this.startNode(startToken), new Node.AssignmentExpression(operator, expr, right));
	                    this.context.firstCoverInitializedNameError = null;
	                }
	            }
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-comma-operator
	    Parser.prototype.parseExpression = function () {
	        var startToken = this.lookahead;
	        var expr = this.isolateCoverGrammar(this.parseAssignmentExpression);
	        if (this.match(',')) {
	            var expressions = [];
	            expressions.push(expr);
	            while (this.lookahead.type !== 2 /* EOF */) {
	                if (!this.match(',')) {
	                    break;
	                }
	                this.nextToken();
	                expressions.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
	            }
	            expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
	        }
	        return expr;
	    };
	    // https://tc39.github.io/ecma262/#sec-block
	    Parser.prototype.parseStatementListItem = function () {
	        var statement;
	        this.context.isAssignmentTarget = true;
	        this.context.isBindingElement = true;
	        if (this.lookahead.type === 4 /* Keyword */) {
	            switch (this.lookahead.value) {
	                case 'export':
	                    if (!this.context.isModule) {
	                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalExportDeclaration);
	                    }
	                    statement = this.parseExportDeclaration();
	                    break;
	                case 'import':
	                    if (!this.context.isModule) {
	                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalImportDeclaration);
	                    }
	                    statement = this.parseImportDeclaration();
	                    break;
	                case 'const':
	                    statement = this.parseLexicalDeclaration({ inFor: false });
	                    break;
	                case 'function':
	                    statement = this.parseFunctionDeclaration();
	                    break;
	                case 'class':
	                    statement = this.parseClassDeclaration();
	                    break;
	                case 'let':
	                    statement = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({ inFor: false }) : this.parseStatement();
	                    break;
	                default:
	                    statement = this.parseStatement();
	                    break;
	            }
	        }
	        else {
	            statement = this.parseStatement();
	        }
	        return statement;
	    };
	    Parser.prototype.parseBlock = function () {
	        var node = this.createNode();
	        this.expect('{');
	        var block = [];
	        while (true) {
	            if (this.match('}')) {
	                break;
	            }
	            block.push(this.parseStatementListItem());
	        }
	        this.expect('}');
	        return this.finalize(node, new Node.BlockStatement(block));
	    };
	    // https://tc39.github.io/ecma262/#sec-let-and-const-declarations
	    Parser.prototype.parseLexicalBinding = function (kind, options) {
	        var node = this.createNode();
	        var params = [];
	        var id = this.parsePattern(params, kind);
	        if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
	            if (this.scanner.isRestrictedWord(id.name)) {
	                this.tolerateError(messages_1.Messages.StrictVarName);
	            }
	        }
	        var init = null;
	        if (kind === 'const') {
	            if (!this.matchKeyword('in') && !this.matchContextualKeyword('of')) {
	                if (this.match('=')) {
	                    this.nextToken();
	                    init = this.isolateCoverGrammar(this.parseAssignmentExpression);
	                }
	                else {
	                    this.throwError(messages_1.Messages.DeclarationMissingInitializer, 'const');
	                }
	            }
	        }
	        else if ((!options.inFor && id.type !== syntax_1.Syntax.Identifier) || this.match('=')) {
	            this.expect('=');
	            init = this.isolateCoverGrammar(this.parseAssignmentExpression);
	        }
	        return this.finalize(node, new Node.VariableDeclarator(id, init));
	    };
	    Parser.prototype.parseBindingList = function (kind, options) {
	        var list = [this.parseLexicalBinding(kind, options)];
	        while (this.match(',')) {
	            this.nextToken();
	            list.push(this.parseLexicalBinding(kind, options));
	        }
	        return list;
	    };
	    Parser.prototype.isLexicalDeclaration = function () {
	        var state = this.scanner.saveState();
	        this.scanner.scanComments();
	        var next = this.scanner.lex();
	        this.scanner.restoreState(state);
	        return (next.type === 3 /* Identifier */) ||
	            (next.type === 7 /* Punctuator */ && next.value === '[') ||
	            (next.type === 7 /* Punctuator */ && next.value === '{') ||
	            (next.type === 4 /* Keyword */ && next.value === 'let') ||
	            (next.type === 4 /* Keyword */ && next.value === 'yield');
	    };
	    Parser.prototype.parseLexicalDeclaration = function (options) {
	        var node = this.createNode();
	        var kind = this.nextToken().value;
	        assert_1.assert(kind === 'let' || kind === 'const', 'Lexical declaration must be either let or const');
	        var declarations = this.parseBindingList(kind, options);
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.VariableDeclaration(declarations, kind));
	    };
	    // https://tc39.github.io/ecma262/#sec-destructuring-binding-patterns
	    Parser.prototype.parseBindingRestElement = function (params, kind) {
	        var node = this.createNode();
	        this.expect('...');
	        var arg = this.parsePattern(params, kind);
	        return this.finalize(node, new Node.RestElement(arg));
	    };
	    Parser.prototype.parseArrayPattern = function (params, kind) {
	        var node = this.createNode();
	        this.expect('[');
	        var elements = [];
	        while (!this.match(']')) {
	            if (this.match(',')) {
	                this.nextToken();
	                elements.push(null);
	            }
	            else {
	                if (this.match('...')) {
	                    elements.push(this.parseBindingRestElement(params, kind));
	                    break;
	                }
	                else {
	                    elements.push(this.parsePatternWithDefault(params, kind));
	                }
	                if (!this.match(']')) {
	                    this.expect(',');
	                }
	            }
	        }
	        this.expect(']');
	        return this.finalize(node, new Node.ArrayPattern(elements));
	    };
	    Parser.prototype.parsePropertyPattern = function (params, kind) {
	        var node = this.createNode();
	        var computed = false;
	        var shorthand = false;
	        var method = false;
	        var key;
	        var value;
	        if (this.lookahead.type === 3 /* Identifier */) {
	            var keyToken = this.lookahead;
	            key = this.parseVariableIdentifier();
	            var init = this.finalize(node, new Node.Identifier(keyToken.value));
	            if (this.match('=')) {
	                params.push(keyToken);
	                shorthand = true;
	                this.nextToken();
	                var expr = this.parseAssignmentExpression();
	                value = this.finalize(this.startNode(keyToken), new Node.AssignmentPattern(init, expr));
	            }
	            else if (!this.match(':')) {
	                params.push(keyToken);
	                shorthand = true;
	                value = init;
	            }
	            else {
	                this.expect(':');
	                value = this.parsePatternWithDefault(params, kind);
	            }
	        }
	        else {
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            this.expect(':');
	            value = this.parsePatternWithDefault(params, kind);
	        }
	        return this.finalize(node, new Node.Property('init', key, computed, value, method, shorthand));
	    };
	    Parser.prototype.parseObjectPattern = function (params, kind) {
	        var node = this.createNode();
	        var properties = [];
	        this.expect('{');
	        while (!this.match('}')) {
	            properties.push(this.parsePropertyPattern(params, kind));
	            if (!this.match('}')) {
	                this.expect(',');
	            }
	        }
	        this.expect('}');
	        return this.finalize(node, new Node.ObjectPattern(properties));
	    };
	    Parser.prototype.parsePattern = function (params, kind) {
	        var pattern;
	        if (this.match('[')) {
	            pattern = this.parseArrayPattern(params, kind);
	        }
	        else if (this.match('{')) {
	            pattern = this.parseObjectPattern(params, kind);
	        }
	        else {
	            if (this.matchKeyword('let') && (kind === 'const' || kind === 'let')) {
	                this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.LetInLexicalBinding);
	            }
	            params.push(this.lookahead);
	            pattern = this.parseVariableIdentifier(kind);
	        }
	        return pattern;
	    };
	    Parser.prototype.parsePatternWithDefault = function (params, kind) {
	        var startToken = this.lookahead;
	        var pattern = this.parsePattern(params, kind);
	        if (this.match('=')) {
	            this.nextToken();
	            var previousAllowYield = this.context.allowYield;
	            this.context.allowYield = true;
	            var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
	            this.context.allowYield = previousAllowYield;
	            pattern = this.finalize(this.startNode(startToken), new Node.AssignmentPattern(pattern, right));
	        }
	        return pattern;
	    };
	    // https://tc39.github.io/ecma262/#sec-variable-statement
	    Parser.prototype.parseVariableIdentifier = function (kind) {
	        var node = this.createNode();
	        var token = this.nextToken();
	        if (token.type === 4 /* Keyword */ && token.value === 'yield') {
	            if (this.context.strict) {
	                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
	            }
	            else if (!this.context.allowYield) {
	                this.throwUnexpectedToken(token);
	            }
	        }
	        else if (token.type !== 3 /* Identifier */) {
	            if (this.context.strict && token.type === 4 /* Keyword */ && this.scanner.isStrictModeReservedWord(token.value)) {
	                this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
	            }
	            else {
	                if (this.context.strict || token.value !== 'let' || kind !== 'var') {
	                    this.throwUnexpectedToken(token);
	                }
	            }
	        }
	        else if ((this.context.isModule || this.context.await) && token.type === 3 /* Identifier */ && token.value === 'await') {
	            this.tolerateUnexpectedToken(token);
	        }
	        return this.finalize(node, new Node.Identifier(token.value));
	    };
	    Parser.prototype.parseVariableDeclaration = function (options) {
	        var node = this.createNode();
	        var params = [];
	        var id = this.parsePattern(params, 'var');
	        if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
	            if (this.scanner.isRestrictedWord(id.name)) {
	                this.tolerateError(messages_1.Messages.StrictVarName);
	            }
	        }
	        var init = null;
	        if (this.match('=')) {
	            this.nextToken();
	            init = this.isolateCoverGrammar(this.parseAssignmentExpression);
	        }
	        else if (id.type !== syntax_1.Syntax.Identifier && !options.inFor) {
	            this.expect('=');
	        }
	        return this.finalize(node, new Node.VariableDeclarator(id, init));
	    };
	    Parser.prototype.parseVariableDeclarationList = function (options) {
	        var opt = { inFor: options.inFor };
	        var list = [];
	        list.push(this.parseVariableDeclaration(opt));
	        while (this.match(',')) {
	            this.nextToken();
	            list.push(this.parseVariableDeclaration(opt));
	        }
	        return list;
	    };
	    Parser.prototype.parseVariableStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('var');
	        var declarations = this.parseVariableDeclarationList({ inFor: false });
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.VariableDeclaration(declarations, 'var'));
	    };
	    // https://tc39.github.io/ecma262/#sec-empty-statement
	    Parser.prototype.parseEmptyStatement = function () {
	        var node = this.createNode();
	        this.expect(';');
	        return this.finalize(node, new Node.EmptyStatement());
	    };
	    // https://tc39.github.io/ecma262/#sec-expression-statement
	    Parser.prototype.parseExpressionStatement = function () {
	        var node = this.createNode();
	        var expr = this.parseExpression();
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.ExpressionStatement(expr));
	    };
	    // https://tc39.github.io/ecma262/#sec-if-statement
	    Parser.prototype.parseIfClause = function () {
	        if (this.context.strict && this.matchKeyword('function')) {
	            this.tolerateError(messages_1.Messages.StrictFunction);
	        }
	        return this.parseStatement();
	    };
	    Parser.prototype.parseIfStatement = function () {
	        var node = this.createNode();
	        var consequent;
	        var alternate = null;
	        this.expectKeyword('if');
	        this.expect('(');
	        var test = this.parseExpression();
	        if (!this.match(')') && this.config.tolerant) {
	            this.tolerateUnexpectedToken(this.nextToken());
	            consequent = this.finalize(this.createNode(), new Node.EmptyStatement());
	        }
	        else {
	            this.expect(')');
	            consequent = this.parseIfClause();
	            if (this.matchKeyword('else')) {
	                this.nextToken();
	                alternate = this.parseIfClause();
	            }
	        }
	        return this.finalize(node, new Node.IfStatement(test, consequent, alternate));
	    };
	    // https://tc39.github.io/ecma262/#sec-do-while-statement
	    Parser.prototype.parseDoWhileStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('do');
	        var previousInIteration = this.context.inIteration;
	        this.context.inIteration = true;
	        var body = this.parseStatement();
	        this.context.inIteration = previousInIteration;
	        this.expectKeyword('while');
	        this.expect('(');
	        var test = this.parseExpression();
	        if (!this.match(')') && this.config.tolerant) {
	            this.tolerateUnexpectedToken(this.nextToken());
	        }
	        else {
	            this.expect(')');
	            if (this.match(';')) {
	                this.nextToken();
	            }
	        }
	        return this.finalize(node, new Node.DoWhileStatement(body, test));
	    };
	    // https://tc39.github.io/ecma262/#sec-while-statement
	    Parser.prototype.parseWhileStatement = function () {
	        var node = this.createNode();
	        var body;
	        this.expectKeyword('while');
	        this.expect('(');
	        var test = this.parseExpression();
	        if (!this.match(')') && this.config.tolerant) {
	            this.tolerateUnexpectedToken(this.nextToken());
	            body = this.finalize(this.createNode(), new Node.EmptyStatement());
	        }
	        else {
	            this.expect(')');
	            var previousInIteration = this.context.inIteration;
	            this.context.inIteration = true;
	            body = this.parseStatement();
	            this.context.inIteration = previousInIteration;
	        }
	        return this.finalize(node, new Node.WhileStatement(test, body));
	    };
	    // https://tc39.github.io/ecma262/#sec-for-statement
	    // https://tc39.github.io/ecma262/#sec-for-in-and-for-of-statements
	    Parser.prototype.parseForStatement = function () {
	        var init = null;
	        var test = null;
	        var update = null;
	        var forIn = true;
	        var left, right;
	        var node = this.createNode();
	        this.expectKeyword('for');
	        this.expect('(');
	        if (this.match(';')) {
	            this.nextToken();
	        }
	        else {
	            if (this.matchKeyword('var')) {
	                init = this.createNode();
	                this.nextToken();
	                var previousAllowIn = this.context.allowIn;
	                this.context.allowIn = false;
	                var declarations = this.parseVariableDeclarationList({ inFor: true });
	                this.context.allowIn = previousAllowIn;
	                if (declarations.length === 1 && this.matchKeyword('in')) {
	                    var decl = declarations[0];
	                    if (decl.init && (decl.id.type === syntax_1.Syntax.ArrayPattern || decl.id.type === syntax_1.Syntax.ObjectPattern || this.context.strict)) {
	                        this.tolerateError(messages_1.Messages.ForInOfLoopInitializer, 'for-in');
	                    }
	                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
	                    this.nextToken();
	                    left = init;
	                    right = this.parseExpression();
	                    init = null;
	                }
	                else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
	                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
	                    this.nextToken();
	                    left = init;
	                    right = this.parseAssignmentExpression();
	                    init = null;
	                    forIn = false;
	                }
	                else {
	                    init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
	                    this.expect(';');
	                }
	            }
	            else if (this.matchKeyword('const') || this.matchKeyword('let')) {
	                init = this.createNode();
	                var kind = this.nextToken().value;
	                if (!this.context.strict && this.lookahead.value === 'in') {
	                    init = this.finalize(init, new Node.Identifier(kind));
	                    this.nextToken();
	                    left = init;
	                    right = this.parseExpression();
	                    init = null;
	                }
	                else {
	                    var previousAllowIn = this.context.allowIn;
	                    this.context.allowIn = false;
	                    var declarations = this.parseBindingList(kind, { inFor: true });
	                    this.context.allowIn = previousAllowIn;
	                    if (declarations.length === 1 && declarations[0].init === null && this.matchKeyword('in')) {
	                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
	                        this.nextToken();
	                        left = init;
	                        right = this.parseExpression();
	                        init = null;
	                    }
	                    else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
	                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
	                        this.nextToken();
	                        left = init;
	                        right = this.parseAssignmentExpression();
	                        init = null;
	                        forIn = false;
	                    }
	                    else {
	                        this.consumeSemicolon();
	                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
	                    }
	                }
	            }
	            else {
	                var initStartToken = this.lookahead;
	                var previousAllowIn = this.context.allowIn;
	                this.context.allowIn = false;
	                init = this.inheritCoverGrammar(this.parseAssignmentExpression);
	                this.context.allowIn = previousAllowIn;
	                if (this.matchKeyword('in')) {
	                    if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
	                        this.tolerateError(messages_1.Messages.InvalidLHSInForIn);
	                    }
	                    this.nextToken();
	                    this.reinterpretExpressionAsPattern(init);
	                    left = init;
	                    right = this.parseExpression();
	                    init = null;
	                }
	                else if (this.matchContextualKeyword('of')) {
	                    if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
	                        this.tolerateError(messages_1.Messages.InvalidLHSInForLoop);
	                    }
	                    this.nextToken();
	                    this.reinterpretExpressionAsPattern(init);
	                    left = init;
	                    right = this.parseAssignmentExpression();
	                    init = null;
	                    forIn = false;
	                }
	                else {
	                    if (this.match(',')) {
	                        var initSeq = [init];
	                        while (this.match(',')) {
	                            this.nextToken();
	                            initSeq.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
	                        }
	                        init = this.finalize(this.startNode(initStartToken), new Node.SequenceExpression(initSeq));
	                    }
	                    this.expect(';');
	                }
	            }
	        }
	        if (typeof left === 'undefined') {
	            if (!this.match(';')) {
	                test = this.parseExpression();
	            }
	            this.expect(';');
	            if (!this.match(')')) {
	                update = this.parseExpression();
	            }
	        }
	        var body;
	        if (!this.match(')') && this.config.tolerant) {
	            this.tolerateUnexpectedToken(this.nextToken());
	            body = this.finalize(this.createNode(), new Node.EmptyStatement());
	        }
	        else {
	            this.expect(')');
	            var previousInIteration = this.context.inIteration;
	            this.context.inIteration = true;
	            body = this.isolateCoverGrammar(this.parseStatement);
	            this.context.inIteration = previousInIteration;
	        }
	        return (typeof left === 'undefined') ?
	            this.finalize(node, new Node.ForStatement(init, test, update, body)) :
	            forIn ? this.finalize(node, new Node.ForInStatement(left, right, body)) :
	                this.finalize(node, new Node.ForOfStatement(left, right, body));
	    };
	    // https://tc39.github.io/ecma262/#sec-continue-statement
	    Parser.prototype.parseContinueStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('continue');
	        var label = null;
	        if (this.lookahead.type === 3 /* Identifier */ && !this.hasLineTerminator) {
	            var id = this.parseVariableIdentifier();
	            label = id;
	            var key = '$' + id.name;
	            if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
	                this.throwError(messages_1.Messages.UnknownLabel, id.name);
	            }
	        }
	        this.consumeSemicolon();
	        if (label === null && !this.context.inIteration) {
	            this.throwError(messages_1.Messages.IllegalContinue);
	        }
	        return this.finalize(node, new Node.ContinueStatement(label));
	    };
	    // https://tc39.github.io/ecma262/#sec-break-statement
	    Parser.prototype.parseBreakStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('break');
	        var label = null;
	        if (this.lookahead.type === 3 /* Identifier */ && !this.hasLineTerminator) {
	            var id = this.parseVariableIdentifier();
	            var key = '$' + id.name;
	            if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
	                this.throwError(messages_1.Messages.UnknownLabel, id.name);
	            }
	            label = id;
	        }
	        this.consumeSemicolon();
	        if (label === null && !this.context.inIteration && !this.context.inSwitch) {
	            this.throwError(messages_1.Messages.IllegalBreak);
	        }
	        return this.finalize(node, new Node.BreakStatement(label));
	    };
	    // https://tc39.github.io/ecma262/#sec-return-statement
	    Parser.prototype.parseReturnStatement = function () {
	        if (!this.context.inFunctionBody) {
	            this.tolerateError(messages_1.Messages.IllegalReturn);
	        }
	        var node = this.createNode();
	        this.expectKeyword('return');
	        var hasArgument = (!this.match(';') && !this.match('}') &&
	            !this.hasLineTerminator && this.lookahead.type !== 2 /* EOF */) ||
	            this.lookahead.type === 8 /* StringLiteral */ ||
	            this.lookahead.type === 10 /* Template */;
	        var argument = hasArgument ? this.parseExpression() : null;
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.ReturnStatement(argument));
	    };
	    // https://tc39.github.io/ecma262/#sec-with-statement
	    Parser.prototype.parseWithStatement = function () {
	        if (this.context.strict) {
	            this.tolerateError(messages_1.Messages.StrictModeWith);
	        }
	        var node = this.createNode();
	        var body;
	        this.expectKeyword('with');
	        this.expect('(');
	        var object = this.parseExpression();
	        if (!this.match(')') && this.config.tolerant) {
	            this.tolerateUnexpectedToken(this.nextToken());
	            body = this.finalize(this.createNode(), new Node.EmptyStatement());
	        }
	        else {
	            this.expect(')');
	            body = this.parseStatement();
	        }
	        return this.finalize(node, new Node.WithStatement(object, body));
	    };
	    // https://tc39.github.io/ecma262/#sec-switch-statement
	    Parser.prototype.parseSwitchCase = function () {
	        var node = this.createNode();
	        var test;
	        if (this.matchKeyword('default')) {
	            this.nextToken();
	            test = null;
	        }
	        else {
	            this.expectKeyword('case');
	            test = this.parseExpression();
	        }
	        this.expect(':');
	        var consequent = [];
	        while (true) {
	            if (this.match('}') || this.matchKeyword('default') || this.matchKeyword('case')) {
	                break;
	            }
	            consequent.push(this.parseStatementListItem());
	        }
	        return this.finalize(node, new Node.SwitchCase(test, consequent));
	    };
	    Parser.prototype.parseSwitchStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('switch');
	        this.expect('(');
	        var discriminant = this.parseExpression();
	        this.expect(')');
	        var previousInSwitch = this.context.inSwitch;
	        this.context.inSwitch = true;
	        var cases = [];
	        var defaultFound = false;
	        this.expect('{');
	        while (true) {
	            if (this.match('}')) {
	                break;
	            }
	            var clause = this.parseSwitchCase();
	            if (clause.test === null) {
	                if (defaultFound) {
	                    this.throwError(messages_1.Messages.MultipleDefaultsInSwitch);
	                }
	                defaultFound = true;
	            }
	            cases.push(clause);
	        }
	        this.expect('}');
	        this.context.inSwitch = previousInSwitch;
	        return this.finalize(node, new Node.SwitchStatement(discriminant, cases));
	    };
	    // https://tc39.github.io/ecma262/#sec-labelled-statements
	    Parser.prototype.parseLabelledStatement = function () {
	        var node = this.createNode();
	        var expr = this.parseExpression();
	        var statement;
	        if ((expr.type === syntax_1.Syntax.Identifier) && this.match(':')) {
	            this.nextToken();
	            var id = expr;
	            var key = '$' + id.name;
	            if (Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
	                this.throwError(messages_1.Messages.Redeclaration, 'Label', id.name);
	            }
	            this.context.labelSet[key] = true;
	            var body = void 0;
	            if (this.matchKeyword('class')) {
	                this.tolerateUnexpectedToken(this.lookahead);
	                body = this.parseClassDeclaration();
	            }
	            else if (this.matchKeyword('function')) {
	                var token = this.lookahead;
	                var declaration = this.parseFunctionDeclaration();
	                if (this.context.strict) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunction);
	                }
	                else if (declaration.generator) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.GeneratorInLegacyContext);
	                }
	                body = declaration;
	            }
	            else {
	                body = this.parseStatement();
	            }
	            delete this.context.labelSet[key];
	            statement = new Node.LabeledStatement(id, body);
	        }
	        else {
	            this.consumeSemicolon();
	            statement = new Node.ExpressionStatement(expr);
	        }
	        return this.finalize(node, statement);
	    };
	    // https://tc39.github.io/ecma262/#sec-throw-statement
	    Parser.prototype.parseThrowStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('throw');
	        if (this.hasLineTerminator) {
	            this.throwError(messages_1.Messages.NewlineAfterThrow);
	        }
	        var argument = this.parseExpression();
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.ThrowStatement(argument));
	    };
	    // https://tc39.github.io/ecma262/#sec-try-statement
	    Parser.prototype.parseCatchClause = function () {
	        var node = this.createNode();
	        this.expectKeyword('catch');
	        this.expect('(');
	        if (this.match(')')) {
	            this.throwUnexpectedToken(this.lookahead);
	        }
	        var params = [];
	        var param = this.parsePattern(params);
	        var paramMap = {};
	        for (var i = 0; i < params.length; i++) {
	            var key = '$' + params[i].value;
	            if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
	                this.tolerateError(messages_1.Messages.DuplicateBinding, params[i].value);
	            }
	            paramMap[key] = true;
	        }
	        if (this.context.strict && param.type === syntax_1.Syntax.Identifier) {
	            if (this.scanner.isRestrictedWord(param.name)) {
	                this.tolerateError(messages_1.Messages.StrictCatchVariable);
	            }
	        }
	        this.expect(')');
	        var body = this.parseBlock();
	        return this.finalize(node, new Node.CatchClause(param, body));
	    };
	    Parser.prototype.parseFinallyClause = function () {
	        this.expectKeyword('finally');
	        return this.parseBlock();
	    };
	    Parser.prototype.parseTryStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('try');
	        var block = this.parseBlock();
	        var handler = this.matchKeyword('catch') ? this.parseCatchClause() : null;
	        var finalizer = this.matchKeyword('finally') ? this.parseFinallyClause() : null;
	        if (!handler && !finalizer) {
	            this.throwError(messages_1.Messages.NoCatchOrFinally);
	        }
	        return this.finalize(node, new Node.TryStatement(block, handler, finalizer));
	    };
	    // https://tc39.github.io/ecma262/#sec-debugger-statement
	    Parser.prototype.parseDebuggerStatement = function () {
	        var node = this.createNode();
	        this.expectKeyword('debugger');
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.DebuggerStatement());
	    };
	    // https://tc39.github.io/ecma262/#sec-ecmascript-language-statements-and-declarations
	    Parser.prototype.parseStatement = function () {
	        var statement;
	        switch (this.lookahead.type) {
	            case 1 /* BooleanLiteral */:
	            case 5 /* NullLiteral */:
	            case 6 /* NumericLiteral */:
	            case 8 /* StringLiteral */:
	            case 10 /* Template */:
	            case 9 /* RegularExpression */:
	                statement = this.parseExpressionStatement();
	                break;
	            case 7 /* Punctuator */:
	                var value = this.lookahead.value;
	                if (value === '{') {
	                    statement = this.parseBlock();
	                }
	                else if (value === '(') {
	                    statement = this.parseExpressionStatement();
	                }
	                else if (value === ';') {
	                    statement = this.parseEmptyStatement();
	                }
	                else {
	                    statement = this.parseExpressionStatement();
	                }
	                break;
	            case 3 /* Identifier */:
	                statement = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
	                break;
	            case 4 /* Keyword */:
	                switch (this.lookahead.value) {
	                    case 'break':
	                        statement = this.parseBreakStatement();
	                        break;
	                    case 'continue':
	                        statement = this.parseContinueStatement();
	                        break;
	                    case 'debugger':
	                        statement = this.parseDebuggerStatement();
	                        break;
	                    case 'do':
	                        statement = this.parseDoWhileStatement();
	                        break;
	                    case 'for':
	                        statement = this.parseForStatement();
	                        break;
	                    case 'function':
	                        statement = this.parseFunctionDeclaration();
	                        break;
	                    case 'if':
	                        statement = this.parseIfStatement();
	                        break;
	                    case 'return':
	                        statement = this.parseReturnStatement();
	                        break;
	                    case 'switch':
	                        statement = this.parseSwitchStatement();
	                        break;
	                    case 'throw':
	                        statement = this.parseThrowStatement();
	                        break;
	                    case 'try':
	                        statement = this.parseTryStatement();
	                        break;
	                    case 'var':
	                        statement = this.parseVariableStatement();
	                        break;
	                    case 'while':
	                        statement = this.parseWhileStatement();
	                        break;
	                    case 'with':
	                        statement = this.parseWithStatement();
	                        break;
	                    default:
	                        statement = this.parseExpressionStatement();
	                        break;
	                }
	                break;
	            default:
	                statement = this.throwUnexpectedToken(this.lookahead);
	        }
	        return statement;
	    };
	    // https://tc39.github.io/ecma262/#sec-function-definitions
	    Parser.prototype.parseFunctionSourceElements = function () {
	        var node = this.createNode();
	        this.expect('{');
	        var body = this.parseDirectivePrologues();
	        var previousLabelSet = this.context.labelSet;
	        var previousInIteration = this.context.inIteration;
	        var previousInSwitch = this.context.inSwitch;
	        var previousInFunctionBody = this.context.inFunctionBody;
	        this.context.labelSet = {};
	        this.context.inIteration = false;
	        this.context.inSwitch = false;
	        this.context.inFunctionBody = true;
	        while (this.lookahead.type !== 2 /* EOF */) {
	            if (this.match('}')) {
	                break;
	            }
	            body.push(this.parseStatementListItem());
	        }
	        this.expect('}');
	        this.context.labelSet = previousLabelSet;
	        this.context.inIteration = previousInIteration;
	        this.context.inSwitch = previousInSwitch;
	        this.context.inFunctionBody = previousInFunctionBody;
	        return this.finalize(node, new Node.BlockStatement(body));
	    };
	    Parser.prototype.validateParam = function (options, param, name) {
	        var key = '$' + name;
	        if (this.context.strict) {
	            if (this.scanner.isRestrictedWord(name)) {
	                options.stricted = param;
	                options.message = messages_1.Messages.StrictParamName;
	            }
	            if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
	                options.stricted = param;
	                options.message = messages_1.Messages.StrictParamDupe;
	            }
	        }
	        else if (!options.firstRestricted) {
	            if (this.scanner.isRestrictedWord(name)) {
	                options.firstRestricted = param;
	                options.message = messages_1.Messages.StrictParamName;
	            }
	            else if (this.scanner.isStrictModeReservedWord(name)) {
	                options.firstRestricted = param;
	                options.message = messages_1.Messages.StrictReservedWord;
	            }
	            else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
	                options.stricted = param;
	                options.message = messages_1.Messages.StrictParamDupe;
	            }
	        }
	        /* istanbul ignore next */
	        if (typeof Object.defineProperty === 'function') {
	            Object.defineProperty(options.paramSet, key, { value: true, enumerable: true, writable: true, configurable: true });
	        }
	        else {
	            options.paramSet[key] = true;
	        }
	    };
	    Parser.prototype.parseRestElement = function (params) {
	        var node = this.createNode();
	        this.expect('...');
	        var arg = this.parsePattern(params);
	        if (this.match('=')) {
	            this.throwError(messages_1.Messages.DefaultRestParameter);
	        }
	        if (!this.match(')')) {
	            this.throwError(messages_1.Messages.ParameterAfterRestParameter);
	        }
	        return this.finalize(node, new Node.RestElement(arg));
	    };
	    Parser.prototype.parseFormalParameter = function (options) {
	        var params = [];
	        var param = this.match('...') ? this.parseRestElement(params) : this.parsePatternWithDefault(params);
	        for (var i = 0; i < params.length; i++) {
	            this.validateParam(options, params[i], params[i].value);
	        }
	        options.simple = options.simple && (param instanceof Node.Identifier);
	        options.params.push(param);
	    };
	    Parser.prototype.parseFormalParameters = function (firstRestricted) {
	        var options;
	        options = {
	            simple: true,
	            params: [],
	            firstRestricted: firstRestricted
	        };
	        this.expect('(');
	        if (!this.match(')')) {
	            options.paramSet = {};
	            while (this.lookahead.type !== 2 /* EOF */) {
	                this.parseFormalParameter(options);
	                if (this.match(')')) {
	                    break;
	                }
	                this.expect(',');
	                if (this.match(')')) {
	                    break;
	                }
	            }
	        }
	        this.expect(')');
	        return {
	            simple: options.simple,
	            params: options.params,
	            stricted: options.stricted,
	            firstRestricted: options.firstRestricted,
	            message: options.message
	        };
	    };
	    Parser.prototype.matchAsyncFunction = function () {
	        var match = this.matchContextualKeyword('async');
	        if (match) {
	            var state = this.scanner.saveState();
	            this.scanner.scanComments();
	            var next = this.scanner.lex();
	            this.scanner.restoreState(state);
	            match = (state.lineNumber === next.lineNumber) && (next.type === 4 /* Keyword */) && (next.value === 'function');
	        }
	        return match;
	    };
	    Parser.prototype.parseFunctionDeclaration = function (identifierIsOptional) {
	        var node = this.createNode();
	        var isAsync = this.matchContextualKeyword('async');
	        if (isAsync) {
	            this.nextToken();
	        }
	        this.expectKeyword('function');
	        var isGenerator = isAsync ? false : this.match('*');
	        if (isGenerator) {
	            this.nextToken();
	        }
	        var message;
	        var id = null;
	        var firstRestricted = null;
	        if (!identifierIsOptional || !this.match('(')) {
	            var token = this.lookahead;
	            id = this.parseVariableIdentifier();
	            if (this.context.strict) {
	                if (this.scanner.isRestrictedWord(token.value)) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
	                }
	            }
	            else {
	                if (this.scanner.isRestrictedWord(token.value)) {
	                    firstRestricted = token;
	                    message = messages_1.Messages.StrictFunctionName;
	                }
	                else if (this.scanner.isStrictModeReservedWord(token.value)) {
	                    firstRestricted = token;
	                    message = messages_1.Messages.StrictReservedWord;
	                }
	            }
	        }
	        var previousAllowAwait = this.context.await;
	        var previousAllowYield = this.context.allowYield;
	        this.context.await = isAsync;
	        this.context.allowYield = !isGenerator;
	        var formalParameters = this.parseFormalParameters(firstRestricted);
	        var params = formalParameters.params;
	        var stricted = formalParameters.stricted;
	        firstRestricted = formalParameters.firstRestricted;
	        if (formalParameters.message) {
	            message = formalParameters.message;
	        }
	        var previousStrict = this.context.strict;
	        var previousAllowStrictDirective = this.context.allowStrictDirective;
	        this.context.allowStrictDirective = formalParameters.simple;
	        var body = this.parseFunctionSourceElements();
	        if (this.context.strict && firstRestricted) {
	            this.throwUnexpectedToken(firstRestricted, message);
	        }
	        if (this.context.strict && stricted) {
	            this.tolerateUnexpectedToken(stricted, message);
	        }
	        this.context.strict = previousStrict;
	        this.context.allowStrictDirective = previousAllowStrictDirective;
	        this.context.await = previousAllowAwait;
	        this.context.allowYield = previousAllowYield;
	        return isAsync ? this.finalize(node, new Node.AsyncFunctionDeclaration(id, params, body)) :
	            this.finalize(node, new Node.FunctionDeclaration(id, params, body, isGenerator));
	    };
	    Parser.prototype.parseFunctionExpression = function () {
	        var node = this.createNode();
	        var isAsync = this.matchContextualKeyword('async');
	        if (isAsync) {
	            this.nextToken();
	        }
	        this.expectKeyword('function');
	        var isGenerator = isAsync ? false : this.match('*');
	        if (isGenerator) {
	            this.nextToken();
	        }
	        var message;
	        var id = null;
	        var firstRestricted;
	        var previousAllowAwait = this.context.await;
	        var previousAllowYield = this.context.allowYield;
	        this.context.await = isAsync;
	        this.context.allowYield = !isGenerator;
	        if (!this.match('(')) {
	            var token = this.lookahead;
	            id = (!this.context.strict && !isGenerator && this.matchKeyword('yield')) ? this.parseIdentifierName() : this.parseVariableIdentifier();
	            if (this.context.strict) {
	                if (this.scanner.isRestrictedWord(token.value)) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
	                }
	            }
	            else {
	                if (this.scanner.isRestrictedWord(token.value)) {
	                    firstRestricted = token;
	                    message = messages_1.Messages.StrictFunctionName;
	                }
	                else if (this.scanner.isStrictModeReservedWord(token.value)) {
	                    firstRestricted = token;
	                    message = messages_1.Messages.StrictReservedWord;
	                }
	            }
	        }
	        var formalParameters = this.parseFormalParameters(firstRestricted);
	        var params = formalParameters.params;
	        var stricted = formalParameters.stricted;
	        firstRestricted = formalParameters.firstRestricted;
	        if (formalParameters.message) {
	            message = formalParameters.message;
	        }
	        var previousStrict = this.context.strict;
	        var previousAllowStrictDirective = this.context.allowStrictDirective;
	        this.context.allowStrictDirective = formalParameters.simple;
	        var body = this.parseFunctionSourceElements();
	        if (this.context.strict && firstRestricted) {
	            this.throwUnexpectedToken(firstRestricted, message);
	        }
	        if (this.context.strict && stricted) {
	            this.tolerateUnexpectedToken(stricted, message);
	        }
	        this.context.strict = previousStrict;
	        this.context.allowStrictDirective = previousAllowStrictDirective;
	        this.context.await = previousAllowAwait;
	        this.context.allowYield = previousAllowYield;
	        return isAsync ? this.finalize(node, new Node.AsyncFunctionExpression(id, params, body)) :
	            this.finalize(node, new Node.FunctionExpression(id, params, body, isGenerator));
	    };
	    // https://tc39.github.io/ecma262/#sec-directive-prologues-and-the-use-strict-directive
	    Parser.prototype.parseDirective = function () {
	        var token = this.lookahead;
	        var node = this.createNode();
	        var expr = this.parseExpression();
	        var directive = (expr.type === syntax_1.Syntax.Literal) ? this.getTokenRaw(token).slice(1, -1) : null;
	        this.consumeSemicolon();
	        return this.finalize(node, directive ? new Node.Directive(expr, directive) : new Node.ExpressionStatement(expr));
	    };
	    Parser.prototype.parseDirectivePrologues = function () {
	        var firstRestricted = null;
	        var body = [];
	        while (true) {
	            var token = this.lookahead;
	            if (token.type !== 8 /* StringLiteral */) {
	                break;
	            }
	            var statement = this.parseDirective();
	            body.push(statement);
	            var directive = statement.directive;
	            if (typeof directive !== 'string') {
	                break;
	            }
	            if (directive === 'use strict') {
	                this.context.strict = true;
	                if (firstRestricted) {
	                    this.tolerateUnexpectedToken(firstRestricted, messages_1.Messages.StrictOctalLiteral);
	                }
	                if (!this.context.allowStrictDirective) {
	                    this.tolerateUnexpectedToken(token, messages_1.Messages.IllegalLanguageModeDirective);
	                }
	            }
	            else {
	                if (!firstRestricted && token.octal) {
	                    firstRestricted = token;
	                }
	            }
	        }
	        return body;
	    };
	    // https://tc39.github.io/ecma262/#sec-method-definitions
	    Parser.prototype.qualifiedPropertyName = function (token) {
	        switch (token.type) {
	            case 3 /* Identifier */:
	            case 8 /* StringLiteral */:
	            case 1 /* BooleanLiteral */:
	            case 5 /* NullLiteral */:
	            case 6 /* NumericLiteral */:
	            case 4 /* Keyword */:
	                return true;
	            case 7 /* Punctuator */:
	                return token.value === '[';
	            default:
	                break;
	        }
	        return false;
	    };
	    Parser.prototype.parseGetterMethod = function () {
	        var node = this.createNode();
	        var isGenerator = false;
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = !isGenerator;
	        var formalParameters = this.parseFormalParameters();
	        if (formalParameters.params.length > 0) {
	            this.tolerateError(messages_1.Messages.BadGetterArity);
	        }
	        var method = this.parsePropertyMethod(formalParameters);
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
	    };
	    Parser.prototype.parseSetterMethod = function () {
	        var node = this.createNode();
	        var isGenerator = false;
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = !isGenerator;
	        var formalParameters = this.parseFormalParameters();
	        if (formalParameters.params.length !== 1) {
	            this.tolerateError(messages_1.Messages.BadSetterArity);
	        }
	        else if (formalParameters.params[0] instanceof Node.RestElement) {
	            this.tolerateError(messages_1.Messages.BadSetterRestParameter);
	        }
	        var method = this.parsePropertyMethod(formalParameters);
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
	    };
	    Parser.prototype.parseGeneratorMethod = function () {
	        var node = this.createNode();
	        var isGenerator = true;
	        var previousAllowYield = this.context.allowYield;
	        this.context.allowYield = true;
	        var params = this.parseFormalParameters();
	        this.context.allowYield = false;
	        var method = this.parsePropertyMethod(params);
	        this.context.allowYield = previousAllowYield;
	        return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
	    };
	    // https://tc39.github.io/ecma262/#sec-generator-function-definitions
	    Parser.prototype.isStartOfExpression = function () {
	        var start = true;
	        var value = this.lookahead.value;
	        switch (this.lookahead.type) {
	            case 7 /* Punctuator */:
	                start = (value === '[') || (value === '(') || (value === '{') ||
	                    (value === '+') || (value === '-') ||
	                    (value === '!') || (value === '~') ||
	                    (value === '++') || (value === '--') ||
	                    (value === '/') || (value === '/='); // regular expression literal
	                break;
	            case 4 /* Keyword */:
	                start = (value === 'class') || (value === 'delete') ||
	                    (value === 'function') || (value === 'let') || (value === 'new') ||
	                    (value === 'super') || (value === 'this') || (value === 'typeof') ||
	                    (value === 'void') || (value === 'yield');
	                break;
	            default:
	                break;
	        }
	        return start;
	    };
	    Parser.prototype.parseYieldExpression = function () {
	        var node = this.createNode();
	        this.expectKeyword('yield');
	        var argument = null;
	        var delegate = false;
	        if (!this.hasLineTerminator) {
	            var previousAllowYield = this.context.allowYield;
	            this.context.allowYield = false;
	            delegate = this.match('*');
	            if (delegate) {
	                this.nextToken();
	                argument = this.parseAssignmentExpression();
	            }
	            else if (this.isStartOfExpression()) {
	                argument = this.parseAssignmentExpression();
	            }
	            this.context.allowYield = previousAllowYield;
	        }
	        return this.finalize(node, new Node.YieldExpression(argument, delegate));
	    };
	    // https://tc39.github.io/ecma262/#sec-class-definitions
	    Parser.prototype.parseClassElement = function (hasConstructor) {
	        var token = this.lookahead;
	        var node = this.createNode();
	        var kind = '';
	        var key = null;
	        var value = null;
	        var computed = false;
	        var method = false;
	        var isStatic = false;
	        var isAsync = false;
	        if (this.match('*')) {
	            this.nextToken();
	        }
	        else {
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            var id = key;
	            if (id.name === 'static' && (this.qualifiedPropertyName(this.lookahead) || this.match('*'))) {
	                token = this.lookahead;
	                isStatic = true;
	                computed = this.match('[');
	                if (this.match('*')) {
	                    this.nextToken();
	                }
	                else {
	                    key = this.parseObjectPropertyKey();
	                }
	            }
	            if ((token.type === 3 /* Identifier */) && !this.hasLineTerminator && (token.value === 'async')) {
	                var punctuator = this.lookahead.value;
	                if (punctuator !== ':' && punctuator !== '(' && punctuator !== '*') {
	                    isAsync = true;
	                    token = this.lookahead;
	                    key = this.parseObjectPropertyKey();
	                    if (token.type === 3 /* Identifier */ && token.value === 'constructor') {
	                        this.tolerateUnexpectedToken(token, messages_1.Messages.ConstructorIsAsync);
	                    }
	                }
	            }
	        }
	        var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
	        if (token.type === 3 /* Identifier */) {
	            if (token.value === 'get' && lookaheadPropertyKey) {
	                kind = 'get';
	                computed = this.match('[');
	                key = this.parseObjectPropertyKey();
	                this.context.allowYield = false;
	                value = this.parseGetterMethod();
	            }
	            else if (token.value === 'set' && lookaheadPropertyKey) {
	                kind = 'set';
	                computed = this.match('[');
	                key = this.parseObjectPropertyKey();
	                value = this.parseSetterMethod();
	            }
	        }
	        else if (token.type === 7 /* Punctuator */ && token.value === '*' && lookaheadPropertyKey) {
	            kind = 'init';
	            computed = this.match('[');
	            key = this.parseObjectPropertyKey();
	            value = this.parseGeneratorMethod();
	            method = true;
	        }
	        if (!kind && key && this.match('(')) {
	            kind = 'init';
	            value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
	            method = true;
	        }
	        if (!kind) {
	            this.throwUnexpectedToken(this.lookahead);
	        }
	        if (kind === 'init') {
	            kind = 'method';
	        }
	        if (!computed) {
	            if (isStatic && this.isPropertyKey(key, 'prototype')) {
	                this.throwUnexpectedToken(token, messages_1.Messages.StaticPrototype);
	            }
	            if (!isStatic && this.isPropertyKey(key, 'constructor')) {
	                if (kind !== 'method' || !method || (value && value.generator)) {
	                    this.throwUnexpectedToken(token, messages_1.Messages.ConstructorSpecialMethod);
	                }
	                if (hasConstructor.value) {
	                    this.throwUnexpectedToken(token, messages_1.Messages.DuplicateConstructor);
	                }
	                else {
	                    hasConstructor.value = true;
	                }
	                kind = 'constructor';
	            }
	        }
	        return this.finalize(node, new Node.MethodDefinition(key, computed, value, kind, isStatic));
	    };
	    Parser.prototype.parseClassElementList = function () {
	        var body = [];
	        var hasConstructor = { value: false };
	        this.expect('{');
	        while (!this.match('}')) {
	            if (this.match(';')) {
	                this.nextToken();
	            }
	            else {
	                body.push(this.parseClassElement(hasConstructor));
	            }
	        }
	        this.expect('}');
	        return body;
	    };
	    Parser.prototype.parseClassBody = function () {
	        var node = this.createNode();
	        var elementList = this.parseClassElementList();
	        return this.finalize(node, new Node.ClassBody(elementList));
	    };
	    Parser.prototype.parseClassDeclaration = function (identifierIsOptional) {
	        var node = this.createNode();
	        var previousStrict = this.context.strict;
	        this.context.strict = true;
	        this.expectKeyword('class');
	        var id = (identifierIsOptional && (this.lookahead.type !== 3 /* Identifier */)) ? null : this.parseVariableIdentifier();
	        var superClass = null;
	        if (this.matchKeyword('extends')) {
	            this.nextToken();
	            superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
	        }
	        var classBody = this.parseClassBody();
	        this.context.strict = previousStrict;
	        return this.finalize(node, new Node.ClassDeclaration(id, superClass, classBody));
	    };
	    Parser.prototype.parseClassExpression = function () {
	        var node = this.createNode();
	        var previousStrict = this.context.strict;
	        this.context.strict = true;
	        this.expectKeyword('class');
	        var id = (this.lookahead.type === 3 /* Identifier */) ? this.parseVariableIdentifier() : null;
	        var superClass = null;
	        if (this.matchKeyword('extends')) {
	            this.nextToken();
	            superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
	        }
	        var classBody = this.parseClassBody();
	        this.context.strict = previousStrict;
	        return this.finalize(node, new Node.ClassExpression(id, superClass, classBody));
	    };
	    // https://tc39.github.io/ecma262/#sec-scripts
	    // https://tc39.github.io/ecma262/#sec-modules
	    Parser.prototype.parseModule = function () {
	        this.context.strict = true;
	        this.context.isModule = true;
	        this.scanner.isModule = true;
	        var node = this.createNode();
	        var body = this.parseDirectivePrologues();
	        while (this.lookahead.type !== 2 /* EOF */) {
	            body.push(this.parseStatementListItem());
	        }
	        return this.finalize(node, new Node.Module(body));
	    };
	    Parser.prototype.parseScript = function () {
	        var node = this.createNode();
	        var body = this.parseDirectivePrologues();
	        while (this.lookahead.type !== 2 /* EOF */) {
	            body.push(this.parseStatementListItem());
	        }
	        return this.finalize(node, new Node.Script(body));
	    };
	    // https://tc39.github.io/ecma262/#sec-imports
	    Parser.prototype.parseModuleSpecifier = function () {
	        var node = this.createNode();
	        if (this.lookahead.type !== 8 /* StringLiteral */) {
	            this.throwError(messages_1.Messages.InvalidModuleSpecifier);
	        }
	        var token = this.nextToken();
	        var raw = this.getTokenRaw(token);
	        return this.finalize(node, new Node.Literal(token.value, raw));
	    };
	    // import {<foo as bar>} ...;
	    Parser.prototype.parseImportSpecifier = function () {
	        var node = this.createNode();
	        var imported;
	        var local;
	        if (this.lookahead.type === 3 /* Identifier */) {
	            imported = this.parseVariableIdentifier();
	            local = imported;
	            if (this.matchContextualKeyword('as')) {
	                this.nextToken();
	                local = this.parseVariableIdentifier();
	            }
	        }
	        else {
	            imported = this.parseIdentifierName();
	            local = imported;
	            if (this.matchContextualKeyword('as')) {
	                this.nextToken();
	                local = this.parseVariableIdentifier();
	            }
	            else {
	                this.throwUnexpectedToken(this.nextToken());
	            }
	        }
	        return this.finalize(node, new Node.ImportSpecifier(local, imported));
	    };
	    // {foo, bar as bas}
	    Parser.prototype.parseNamedImports = function () {
	        this.expect('{');
	        var specifiers = [];
	        while (!this.match('}')) {
	            specifiers.push(this.parseImportSpecifier());
	            if (!this.match('}')) {
	                this.expect(',');
	            }
	        }
	        this.expect('}');
	        return specifiers;
	    };
	    // import <foo> ...;
	    Parser.prototype.parseImportDefaultSpecifier = function () {
	        var node = this.createNode();
	        var local = this.parseIdentifierName();
	        return this.finalize(node, new Node.ImportDefaultSpecifier(local));
	    };
	    // import <* as foo> ...;
	    Parser.prototype.parseImportNamespaceSpecifier = function () {
	        var node = this.createNode();
	        this.expect('*');
	        if (!this.matchContextualKeyword('as')) {
	            this.throwError(messages_1.Messages.NoAsAfterImportNamespace);
	        }
	        this.nextToken();
	        var local = this.parseIdentifierName();
	        return this.finalize(node, new Node.ImportNamespaceSpecifier(local));
	    };
	    Parser.prototype.parseImportDeclaration = function () {
	        if (this.context.inFunctionBody) {
	            this.throwError(messages_1.Messages.IllegalImportDeclaration);
	        }
	        var node = this.createNode();
	        this.expectKeyword('import');
	        var src;
	        var specifiers = [];
	        if (this.lookahead.type === 8 /* StringLiteral */) {
	            // import 'foo';
	            src = this.parseModuleSpecifier();
	        }
	        else {
	            if (this.match('{')) {
	                // import {bar}
	                specifiers = specifiers.concat(this.parseNamedImports());
	            }
	            else if (this.match('*')) {
	                // import * as foo
	                specifiers.push(this.parseImportNamespaceSpecifier());
	            }
	            else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword('default')) {
	                // import foo
	                specifiers.push(this.parseImportDefaultSpecifier());
	                if (this.match(',')) {
	                    this.nextToken();
	                    if (this.match('*')) {
	                        // import foo, * as foo
	                        specifiers.push(this.parseImportNamespaceSpecifier());
	                    }
	                    else if (this.match('{')) {
	                        // import foo, {bar}
	                        specifiers = specifiers.concat(this.parseNamedImports());
	                    }
	                    else {
	                        this.throwUnexpectedToken(this.lookahead);
	                    }
	                }
	            }
	            else {
	                this.throwUnexpectedToken(this.nextToken());
	            }
	            if (!this.matchContextualKeyword('from')) {
	                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
	                this.throwError(message, this.lookahead.value);
	            }
	            this.nextToken();
	            src = this.parseModuleSpecifier();
	        }
	        this.consumeSemicolon();
	        return this.finalize(node, new Node.ImportDeclaration(specifiers, src));
	    };
	    // https://tc39.github.io/ecma262/#sec-exports
	    Parser.prototype.parseExportSpecifier = function () {
	        var node = this.createNode();
	        var local = this.parseIdentifierName();
	        var exported = local;
	        if (this.matchContextualKeyword('as')) {
	            this.nextToken();
	            exported = this.parseIdentifierName();
	        }
	        return this.finalize(node, new Node.ExportSpecifier(local, exported));
	    };
	    Parser.prototype.parseExportDeclaration = function () {
	        if (this.context.inFunctionBody) {
	            this.throwError(messages_1.Messages.IllegalExportDeclaration);
	        }
	        var node = this.createNode();
	        this.expectKeyword('export');
	        var exportDeclaration;
	        if (this.matchKeyword('default')) {
	            // export default ...
	            this.nextToken();
	            if (this.matchKeyword('function')) {
	                // export default function foo () {}
	                // export default function () {}
	                var declaration = this.parseFunctionDeclaration(true);
	                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
	            }
	            else if (this.matchKeyword('class')) {
	                // export default class foo {}
	                var declaration = this.parseClassDeclaration(true);
	                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
	            }
	            else if (this.matchContextualKeyword('async')) {
	                // export default async function f () {}
	                // export default async function () {}
	                // export default async x => x
	                var declaration = this.matchAsyncFunction() ? this.parseFunctionDeclaration(true) : this.parseAssignmentExpression();
	                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
	            }
	            else {
	                if (this.matchContextualKeyword('from')) {
	                    this.throwError(messages_1.Messages.UnexpectedToken, this.lookahead.value);
	                }
	                // export default {};
	                // export default [];
	                // export default (1 + 2);
	                var declaration = this.match('{') ? this.parseObjectInitializer() :
	                    this.match('[') ? this.parseArrayInitializer() : this.parseAssignmentExpression();
	                this.consumeSemicolon();
	                exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
	            }
	        }
	        else if (this.match('*')) {
	            // export * from 'foo';
	            this.nextToken();
	            if (!this.matchContextualKeyword('from')) {
	                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
	                this.throwError(message, this.lookahead.value);
	            }
	            this.nextToken();
	            var src = this.parseModuleSpecifier();
	            this.consumeSemicolon();
	            exportDeclaration = this.finalize(node, new Node.ExportAllDeclaration(src));
	        }
	        else if (this.lookahead.type === 4 /* Keyword */) {
	            // export var f = 1;
	            var declaration = void 0;
	            switch (this.lookahead.value) {
	                case 'let':
	                case 'const':
	                    declaration = this.parseLexicalDeclaration({ inFor: false });
	                    break;
	                case 'var':
	                case 'class':
	                case 'function':
	                    declaration = this.parseStatementListItem();
	                    break;
	                default:
	                    this.throwUnexpectedToken(this.lookahead);
	            }
	            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
	        }
	        else if (this.matchAsyncFunction()) {
	            var declaration = this.parseFunctionDeclaration();
	            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
	        }
	        else {
	            var specifiers = [];
	            var source = null;
	            var isExportFromIdentifier = false;
	            this.expect('{');
	            while (!this.match('}')) {
	                isExportFromIdentifier = isExportFromIdentifier || this.matchKeyword('default');
	                specifiers.push(this.parseExportSpecifier());
	                if (!this.match('}')) {
	                    this.expect(',');
	                }
	            }
	            this.expect('}');
	            if (this.matchContextualKeyword('from')) {
	                // export {default} from 'foo';
	                // export {foo} from 'foo';
	                this.nextToken();
	                source = this.parseModuleSpecifier();
	                this.consumeSemicolon();
	            }
	            else if (isExportFromIdentifier) {
	                // export {default}; // missing fromClause
	                var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
	                this.throwError(message, this.lookahead.value);
	            }
	            else {
	                // export {foo};
	                this.consumeSemicolon();
	            }
	            exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(null, specifiers, source));
	        }
	        return exportDeclaration;
	    };
	    return Parser;
	}());
	exports.Parser = Parser;


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	// Ensure the condition is true, otherwise throw an error.
	// This is only to have a better contract semantic, i.e. another safety net
	// to catch a logic error. The condition shall be fulfilled in normal case.
	// Do NOT use this to enforce a certain condition on any user input.
	Object.defineProperty(exports, "__esModule", { value: true });
	function assert(condition, message) {
	    /* istanbul ignore if */
	    if (!condition) {
	        throw new Error('ASSERT: ' + message);
	    }
	}
	exports.assert = assert;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	/* tslint:disable:max-classes-per-file */
	Object.defineProperty(exports, "__esModule", { value: true });
	var ErrorHandler = (function () {
	    function ErrorHandler() {
	        this.errors = [];
	        this.tolerant = false;
	    }
	    ErrorHandler.prototype.recordError = function (error) {
	        this.errors.push(error);
	    };
	    ErrorHandler.prototype.tolerate = function (error) {
	        if (this.tolerant) {
	            this.recordError(error);
	        }
	        else {
	            throw error;
	        }
	    };
	    ErrorHandler.prototype.constructError = function (msg, column) {
	        var error = new Error(msg);
	        try {
	            throw error;
	        }
	        catch (base) {
	            /* istanbul ignore else */
	            if (Object.create && Object.defineProperty) {
	                error = Object.create(base);
	                Object.defineProperty(error, 'column', { value: column });
	            }
	        }
	        /* istanbul ignore next */
	        return error;
	    };
	    ErrorHandler.prototype.createError = function (index, line, col, description) {
	        var msg = 'Line ' + line + ': ' + description;
	        var error = this.constructError(msg, col);
	        error.index = index;
	        error.lineNumber = line;
	        error.description = description;
	        return error;
	    };
	    ErrorHandler.prototype.throwError = function (index, line, col, description) {
	        throw this.createError(index, line, col, description);
	    };
	    ErrorHandler.prototype.tolerateError = function (index, line, col, description) {
	        var error = this.createError(index, line, col, description);
	        if (this.tolerant) {
	            this.recordError(error);
	        }
	        else {
	            throw error;
	        }
	    };
	    return ErrorHandler;
	}());
	exports.ErrorHandler = ErrorHandler;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	// Error messages should be identical to V8.
	exports.Messages = {
	    BadGetterArity: 'Getter must not have any formal parameters',
	    BadSetterArity: 'Setter must have exactly one formal parameter',
	    BadSetterRestParameter: 'Setter function argument must not be a rest parameter',
	    ConstructorIsAsync: 'Class constructor may not be an async method',
	    ConstructorSpecialMethod: 'Class constructor may not be an accessor',
	    DeclarationMissingInitializer: 'Missing initializer in %0 declaration',
	    DefaultRestParameter: 'Unexpected token =',
	    DuplicateBinding: 'Duplicate binding %0',
	    DuplicateConstructor: 'A class may only have one constructor',
	    DuplicateProtoProperty: 'Duplicate __proto__ fields are not allowed in object literals',
	    ForInOfLoopInitializer: '%0 loop variable declaration may not have an initializer',
	    GeneratorInLegacyContext: 'Generator declarations are not allowed in legacy contexts',
	    IllegalBreak: 'Illegal break statement',
	    IllegalContinue: 'Illegal continue statement',
	    IllegalExportDeclaration: 'Unexpected token',
	    IllegalImportDeclaration: 'Unexpected token',
	    IllegalLanguageModeDirective: 'Illegal \'use strict\' directive in function with non-simple parameter list',
	    IllegalReturn: 'Illegal return statement',
	    InvalidEscapedReservedWord: 'Keyword must not contain escaped characters',
	    InvalidHexEscapeSequence: 'Invalid hexadecimal escape sequence',
	    InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
	    InvalidLHSInForIn: 'Invalid left-hand side in for-in',
	    InvalidLHSInForLoop: 'Invalid left-hand side in for-loop',
	    InvalidModuleSpecifier: 'Unexpected token',
	    InvalidRegExp: 'Invalid regular expression',
	    LetInLexicalBinding: 'let is disallowed as a lexically bound name',
	    MissingFromClause: 'Unexpected token',
	    MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
	    NewlineAfterThrow: 'Illegal newline after throw',
	    NoAsAfterImportNamespace: 'Unexpected token',
	    NoCatchOrFinally: 'Missing catch or finally after try',
	    ParameterAfterRestParameter: 'Rest parameter must be last formal parameter',
	    Redeclaration: '%0 \'%1\' has already been declared',
	    StaticPrototype: 'Classes may not have static property named prototype',
	    StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
	    StrictDelete: 'Delete of an unqualified identifier in strict mode.',
	    StrictFunction: 'In strict mode code, functions can only be declared at top level or inside a block',
	    StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
	    StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
	    StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
	    StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
	    StrictModeWith: 'Strict mode code may not include a with statement',
	    StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
	    StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
	    StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
	    StrictReservedWord: 'Use of future reserved word in strict mode',
	    StrictVarName: 'Variable name may not be eval or arguments in strict mode',
	    TemplateOctalLiteral: 'Octal literals are not allowed in template strings.',
	    UnexpectedEOS: 'Unexpected end of input',
	    UnexpectedIdentifier: 'Unexpected identifier',
	    UnexpectedNumber: 'Unexpected number',
	    UnexpectedReserved: 'Unexpected reserved word',
	    UnexpectedString: 'Unexpected string',
	    UnexpectedTemplate: 'Unexpected quasi %0',
	    UnexpectedToken: 'Unexpected token %0',
	    UnexpectedTokenIllegal: 'Unexpected token ILLEGAL',
	    UnknownLabel: 'Undefined label \'%0\'',
	    UnterminatedRegExp: 'Invalid regular expression: missing /'
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var assert_1 = __webpack_require__(9);
	var character_1 = __webpack_require__(4);
	var messages_1 = __webpack_require__(11);
	function hexValue(ch) {
	    return '0123456789abcdef'.indexOf(ch.toLowerCase());
	}
	function octalValue(ch) {
	    return '01234567'.indexOf(ch);
	}
	var Scanner = (function () {
	    function Scanner(code, handler) {
	        this.source = code;
	        this.errorHandler = handler;
	        this.trackComment = false;
	        this.isModule = false;
	        this.length = code.length;
	        this.index = 0;
	        this.lineNumber = (code.length > 0) ? 1 : 0;
	        this.lineStart = 0;
	        this.curlyStack = [];
	    }
	    Scanner.prototype.saveState = function () {
	        return {
	            index: this.index,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart
	        };
	    };
	    Scanner.prototype.restoreState = function (state) {
	        this.index = state.index;
	        this.lineNumber = state.lineNumber;
	        this.lineStart = state.lineStart;
	    };
	    Scanner.prototype.eof = function () {
	        return this.index >= this.length;
	    };
	    Scanner.prototype.throwUnexpectedToken = function (message) {
	        if (message === void 0) { message = messages_1.Messages.UnexpectedTokenIllegal; }
	        return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
	    };
	    Scanner.prototype.tolerateUnexpectedToken = function (message) {
	        if (message === void 0) { message = messages_1.Messages.UnexpectedTokenIllegal; }
	        this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
	    };
	    // https://tc39.github.io/ecma262/#sec-comments
	    Scanner.prototype.skipSingleLineComment = function (offset) {
	        var comments = [];
	        var start, loc;
	        if (this.trackComment) {
	            comments = [];
	            start = this.index - offset;
	            loc = {
	                start: {
	                    line: this.lineNumber,
	                    column: this.index - this.lineStart - offset
	                },
	                end: {}
	            };
	        }
	        while (!this.eof()) {
	            var ch = this.source.charCodeAt(this.index);
	            ++this.index;
	            if (character_1.Character.isLineTerminator(ch)) {
	                if (this.trackComment) {
	                    loc.end = {
	                        line: this.lineNumber,
	                        column: this.index - this.lineStart - 1
	                    };
	                    var entry = {
	                        multiLine: false,
	                        slice: [start + offset, this.index - 1],
	                        range: [start, this.index - 1],
	                        loc: loc
	                    };
	                    comments.push(entry);
	                }
	                if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
	                    ++this.index;
	                }
	                ++this.lineNumber;
	                this.lineStart = this.index;
	                return comments;
	            }
	        }
	        if (this.trackComment) {
	            loc.end = {
	                line: this.lineNumber,
	                column: this.index - this.lineStart
	            };
	            var entry = {
	                multiLine: false,
	                slice: [start + offset, this.index],
	                range: [start, this.index],
	                loc: loc
	            };
	            comments.push(entry);
	        }
	        return comments;
	    };
	    Scanner.prototype.skipMultiLineComment = function () {
	        var comments = [];
	        var start, loc;
	        if (this.trackComment) {
	            comments = [];
	            start = this.index - 2;
	            loc = {
	                start: {
	                    line: this.lineNumber,
	                    column: this.index - this.lineStart - 2
	                },
	                end: {}
	            };
	        }
	        while (!this.eof()) {
	            var ch = this.source.charCodeAt(this.index);
	            if (character_1.Character.isLineTerminator(ch)) {
	                if (ch === 0x0D && this.source.charCodeAt(this.index + 1) === 0x0A) {
	                    ++this.index;
	                }
	                ++this.lineNumber;
	                ++this.index;
	                this.lineStart = this.index;
	            }
	            else if (ch === 0x2A) {
	                // Block comment ends with '*/'.
	                if (this.source.charCodeAt(this.index + 1) === 0x2F) {
	                    this.index += 2;
	                    if (this.trackComment) {
	                        loc.end = {
	                            line: this.lineNumber,
	                            column: this.index - this.lineStart
	                        };
	                        var entry = {
	                            multiLine: true,
	                            slice: [start + 2, this.index - 2],
	                            range: [start, this.index],
	                            loc: loc
	                        };
	                        comments.push(entry);
	                    }
	                    return comments;
	                }
	                ++this.index;
	            }
	            else {
	                ++this.index;
	            }
	        }
	        // Ran off the end of the file - the whole thing is a comment
	        if (this.trackComment) {
	            loc.end = {
	                line: this.lineNumber,
	                column: this.index - this.lineStart
	            };
	            var entry = {
	                multiLine: true,
	                slice: [start + 2, this.index],
	                range: [start, this.index],
	                loc: loc
	            };
	            comments.push(entry);
	        }
	        this.tolerateUnexpectedToken();
	        return comments;
	    };
	    Scanner.prototype.scanComments = function () {
	        var comments;
	        if (this.trackComment) {
	            comments = [];
	        }
	        var start = (this.index === 0);
	        while (!this.eof()) {
	            var ch = this.source.charCodeAt(this.index);
	            if (character_1.Character.isWhiteSpace(ch)) {
	                ++this.index;
	            }
	            else if (character_1.Character.isLineTerminator(ch)) {
	                ++this.index;
	                if (ch === 0x0D && this.source.charCodeAt(this.index) === 0x0A) {
	                    ++this.index;
	                }
	                ++this.lineNumber;
	                this.lineStart = this.index;
	                start = true;
	            }
	            else if (ch === 0x2F) {
	                ch = this.source.charCodeAt(this.index + 1);
	                if (ch === 0x2F) {
	                    this.index += 2;
	                    var comment = this.skipSingleLineComment(2);
	                    if (this.trackComment) {
	                        comments = comments.concat(comment);
	                    }
	                    start = true;
	                }
	                else if (ch === 0x2A) {
	                    this.index += 2;
	                    var comment = this.skipMultiLineComment();
	                    if (this.trackComment) {
	                        comments = comments.concat(comment);
	                    }
	                }
	                else {
	                    break;
	                }
	            }
	            else if (start && ch === 0x2D) {
	                // U+003E is '>'
	                if ((this.source.charCodeAt(this.index + 1) === 0x2D) && (this.source.charCodeAt(this.index + 2) === 0x3E)) {
	                    // '-->' is a single-line comment
	                    this.index += 3;
	                    var comment = this.skipSingleLineComment(3);
	                    if (this.trackComment) {
	                        comments = comments.concat(comment);
	                    }
	                }
	                else {
	                    break;
	                }
	            }
	            else if (ch === 0x3C && !this.isModule) {
	                if (this.source.slice(this.index + 1, this.index + 4) === '!--') {
	                    this.index += 4; // `<!--`
	                    var comment = this.skipSingleLineComment(4);
	                    if (this.trackComment) {
	                        comments = comments.concat(comment);
	                    }
	                }
	                else {
	                    break;
	                }
	            }
	            else {
	                break;
	            }
	        }
	        return comments;
	    };
	    // https://tc39.github.io/ecma262/#sec-future-reserved-words
	    Scanner.prototype.isFutureReservedWord = function (id) {
	        switch (id) {
	            case 'enum':
	            case 'export':
	            case 'import':
	            case 'super':
	                return true;
	            default:
	                return false;
	        }
	    };
	    Scanner.prototype.isStrictModeReservedWord = function (id) {
	        switch (id) {
	            case 'implements':
	            case 'interface':
	            case 'package':
	            case 'private':
	            case 'protected':
	            case 'public':
	            case 'static':
	            case 'yield':
	            case 'let':
	                return true;
	            default:
	                return false;
	        }
	    };
	    Scanner.prototype.isRestrictedWord = function (id) {
	        return id === 'eval' || id === 'arguments';
	    };
	    // https://tc39.github.io/ecma262/#sec-keywords
	    Scanner.prototype.isKeyword = function (id) {
	        switch (id.length) {
	            case 2:
	                return (id === 'if') || (id === 'in') || (id === 'do');
	            case 3:
	                return (id === 'var') || (id === 'for') || (id === 'new') ||
	                    (id === 'try') || (id === 'let');
	            case 4:
	                return (id === 'this') || (id === 'else') || (id === 'case') ||
	                    (id === 'void') || (id === 'with') || (id === 'enum');
	            case 5:
	                return (id === 'while') || (id === 'break') || (id === 'catch') ||
	                    (id === 'throw') || (id === 'const') || (id === 'yield') ||
	                    (id === 'class') || (id === 'super');
	            case 6:
	                return (id === 'return') || (id === 'typeof') || (id === 'delete') ||
	                    (id === 'switch') || (id === 'export') || (id === 'import');
	            case 7:
	                return (id === 'default') || (id === 'finally') || (id === 'extends');
	            case 8:
	                return (id === 'function') || (id === 'continue') || (id === 'debugger');
	            case 10:
	                return (id === 'instanceof');
	            default:
	                return false;
	        }
	    };
	    Scanner.prototype.codePointAt = function (i) {
	        var cp = this.source.charCodeAt(i);
	        if (cp >= 0xD800 && cp <= 0xDBFF) {
	            var second = this.source.charCodeAt(i + 1);
	            if (second >= 0xDC00 && second <= 0xDFFF) {
	                var first = cp;
	                cp = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
	            }
	        }
	        return cp;
	    };
	    Scanner.prototype.scanHexEscape = function (prefix) {
	        var len = (prefix === 'u') ? 4 : 2;
	        var code = 0;
	        for (var i = 0; i < len; ++i) {
	            if (!this.eof() && character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
	                code = code * 16 + hexValue(this.source[this.index++]);
	            }
	            else {
	                return null;
	            }
	        }
	        return String.fromCharCode(code);
	    };
	    Scanner.prototype.scanUnicodeCodePointEscape = function () {
	        var ch = this.source[this.index];
	        var code = 0;
	        // At least, one hex digit is required.
	        if (ch === '}') {
	            this.throwUnexpectedToken();
	        }
	        while (!this.eof()) {
	            ch = this.source[this.index++];
	            if (!character_1.Character.isHexDigit(ch.charCodeAt(0))) {
	                break;
	            }
	            code = code * 16 + hexValue(ch);
	        }
	        if (code > 0x10FFFF || ch !== '}') {
	            this.throwUnexpectedToken();
	        }
	        return character_1.Character.fromCodePoint(code);
	    };
	    Scanner.prototype.getIdentifier = function () {
	        var start = this.index++;
	        while (!this.eof()) {
	            var ch = this.source.charCodeAt(this.index);
	            if (ch === 0x5C) {
	                // Blackslash (U+005C) marks Unicode escape sequence.
	                this.index = start;
	                return this.getComplexIdentifier();
	            }
	            else if (ch >= 0xD800 && ch < 0xDFFF) {
	                // Need to handle surrogate pairs.
	                this.index = start;
	                return this.getComplexIdentifier();
	            }
	            if (character_1.Character.isIdentifierPart(ch)) {
	                ++this.index;
	            }
	            else {
	                break;
	            }
	        }
	        return this.source.slice(start, this.index);
	    };
	    Scanner.prototype.getComplexIdentifier = function () {
	        var cp = this.codePointAt(this.index);
	        var id = character_1.Character.fromCodePoint(cp);
	        this.index += id.length;
	        // '\u' (U+005C, U+0075) denotes an escaped character.
	        var ch;
	        if (cp === 0x5C) {
	            if (this.source.charCodeAt(this.index) !== 0x75) {
	                this.throwUnexpectedToken();
	            }
	            ++this.index;
	            if (this.source[this.index] === '{') {
	                ++this.index;
	                ch = this.scanUnicodeCodePointEscape();
	            }
	            else {
	                ch = this.scanHexEscape('u');
	                if (ch === null || ch === '\\' || !character_1.Character.isIdentifierStart(ch.charCodeAt(0))) {
	                    this.throwUnexpectedToken();
	                }
	            }
	            id = ch;
	        }
	        while (!this.eof()) {
	            cp = this.codePointAt(this.index);
	            if (!character_1.Character.isIdentifierPart(cp)) {
	                break;
	            }
	            ch = character_1.Character.fromCodePoint(cp);
	            id += ch;
	            this.index += ch.length;
	            // '\u' (U+005C, U+0075) denotes an escaped character.
	            if (cp === 0x5C) {
	                id = id.substr(0, id.length - 1);
	                if (this.source.charCodeAt(this.index) !== 0x75) {
	                    this.throwUnexpectedToken();
	                }
	                ++this.index;
	                if (this.source[this.index] === '{') {
	                    ++this.index;
	                    ch = this.scanUnicodeCodePointEscape();
	                }
	                else {
	                    ch = this.scanHexEscape('u');
	                    if (ch === null || ch === '\\' || !character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
	                        this.throwUnexpectedToken();
	                    }
	                }
	                id += ch;
	            }
	        }
	        return id;
	    };
	    Scanner.prototype.octalToDecimal = function (ch) {
	        // \0 is not octal escape sequence
	        var octal = (ch !== '0');
	        var code = octalValue(ch);
	        if (!this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
	            octal = true;
	            code = code * 8 + octalValue(this.source[this.index++]);
	            // 3 digits are only allowed when string starts
	            // with 0, 1, 2, 3
	            if ('0123'.indexOf(ch) >= 0 && !this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
	                code = code * 8 + octalValue(this.source[this.index++]);
	            }
	        }
	        return {
	            code: code,
	            octal: octal
	        };
	    };
	    // https://tc39.github.io/ecma262/#sec-names-and-keywords
	    Scanner.prototype.scanIdentifier = function () {
	        var type;
	        var start = this.index;
	        // Backslash (U+005C) starts an escaped character.
	        var id = (this.source.charCodeAt(start) === 0x5C) ? this.getComplexIdentifier() : this.getIdentifier();
	        // There is no keyword or literal with only one character.
	        // Thus, it must be an identifier.
	        if (id.length === 1) {
	            type = 3 /* Identifier */;
	        }
	        else if (this.isKeyword(id)) {
	            type = 4 /* Keyword */;
	        }
	        else if (id === 'null') {
	            type = 5 /* NullLiteral */;
	        }
	        else if (id === 'true' || id === 'false') {
	            type = 1 /* BooleanLiteral */;
	        }
	        else {
	            type = 3 /* Identifier */;
	        }
	        if (type !== 3 /* Identifier */ && (start + id.length !== this.index)) {
	            var restore = this.index;
	            this.index = start;
	            this.tolerateUnexpectedToken(messages_1.Messages.InvalidEscapedReservedWord);
	            this.index = restore;
	        }
	        return {
	            type: type,
	            value: id,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    // https://tc39.github.io/ecma262/#sec-punctuators
	    Scanner.prototype.scanPunctuator = function () {
	        var start = this.index;
	        // Check for most common single-character punctuators.
	        var str = this.source[this.index];
	        switch (str) {
	            case '(':
	            case '{':
	                if (str === '{') {
	                    this.curlyStack.push('{');
	                }
	                ++this.index;
	                break;
	            case '.':
	                ++this.index;
	                if (this.source[this.index] === '.' && this.source[this.index + 1] === '.') {
	                    // Spread operator: ...
	                    this.index += 2;
	                    str = '...';
	                }
	                break;
	            case '}':
	                ++this.index;
	                this.curlyStack.pop();
	                break;
	            case ')':
	            case ';':
	            case ',':
	            case '[':
	            case ']':
	            case ':':
	            case '?':
	            case '~':
	                ++this.index;
	                break;
	            default:
	                // 4-character punctuator.
	                str = this.source.substr(this.index, 4);
	                if (str === '>>>=') {
	                    this.index += 4;
	                }
	                else {
	                    // 3-character punctuators.
	                    str = str.substr(0, 3);
	                    if (str === '===' || str === '!==' || str === '>>>' ||
	                        str === '<<=' || str === '>>=' || str === '**=') {
	                        this.index += 3;
	                    }
	                    else {
	                        // 2-character punctuators.
	                        str = str.substr(0, 2);
	                        if (str === '&&' || str === '||' || str === '==' || str === '!=' ||
	                            str === '+=' || str === '-=' || str === '*=' || str === '/=' ||
	                            str === '++' || str === '--' || str === '<<' || str === '>>' ||
	                            str === '&=' || str === '|=' || str === '^=' || str === '%=' ||
	                            str === '<=' || str === '>=' || str === '=>' || str === '**') {
	                            this.index += 2;
	                        }
	                        else {
	                            // 1-character punctuators.
	                            str = this.source[this.index];
	                            if ('<>=!+-*%&|^/'.indexOf(str) >= 0) {
	                                ++this.index;
	                            }
	                        }
	                    }
	                }
	        }
	        if (this.index === start) {
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: 7 /* Punctuator */,
	            value: str,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
	    Scanner.prototype.scanHexLiteral = function (start) {
	        var num = '';
	        while (!this.eof()) {
	            if (!character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
	                break;
	            }
	            num += this.source[this.index++];
	        }
	        if (num.length === 0) {
	            this.throwUnexpectedToken();
	        }
	        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: 6 /* NumericLiteral */,
	            value: parseInt('0x' + num, 16),
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    Scanner.prototype.scanBinaryLiteral = function (start) {
	        var num = '';
	        var ch;
	        while (!this.eof()) {
	            ch = this.source[this.index];
	            if (ch !== '0' && ch !== '1') {
	                break;
	            }
	            num += this.source[this.index++];
	        }
	        if (num.length === 0) {
	            // only 0b or 0B
	            this.throwUnexpectedToken();
	        }
	        if (!this.eof()) {
	            ch = this.source.charCodeAt(this.index);
	            /* istanbul ignore else */
	            if (character_1.Character.isIdentifierStart(ch) || character_1.Character.isDecimalDigit(ch)) {
	                this.throwUnexpectedToken();
	            }
	        }
	        return {
	            type: 6 /* NumericLiteral */,
	            value: parseInt(num, 2),
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    Scanner.prototype.scanOctalLiteral = function (prefix, start) {
	        var num = '';
	        var octal = false;
	        if (character_1.Character.isOctalDigit(prefix.charCodeAt(0))) {
	            octal = true;
	            num = '0' + this.source[this.index++];
	        }
	        else {
	            ++this.index;
	        }
	        while (!this.eof()) {
	            if (!character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
	                break;
	            }
	            num += this.source[this.index++];
	        }
	        if (!octal && num.length === 0) {
	            // only 0o or 0O
	            this.throwUnexpectedToken();
	        }
	        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: 6 /* NumericLiteral */,
	            value: parseInt(num, 8),
	            octal: octal,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    Scanner.prototype.isImplicitOctalLiteral = function () {
	        // Implicit octal, unless there is a non-octal digit.
	        // (Annex B.1.1 on Numeric Literals)
	        for (var i = this.index + 1; i < this.length; ++i) {
	            var ch = this.source[i];
	            if (ch === '8' || ch === '9') {
	                return false;
	            }
	            if (!character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
	                return true;
	            }
	        }
	        return true;
	    };
	    Scanner.prototype.scanNumericLiteral = function () {
	        var start = this.index;
	        var ch = this.source[start];
	        assert_1.assert(character_1.Character.isDecimalDigit(ch.charCodeAt(0)) || (ch === '.'), 'Numeric literal must start with a decimal digit or a decimal point');
	        var num = '';
	        if (ch !== '.') {
	            num = this.source[this.index++];
	            ch = this.source[this.index];
	            // Hex number starts with '0x'.
	            // Octal number starts with '0'.
	            // Octal number in ES6 starts with '0o'.
	            // Binary number in ES6 starts with '0b'.
	            if (num === '0') {
	                if (ch === 'x' || ch === 'X') {
	                    ++this.index;
	                    return this.scanHexLiteral(start);
	                }
	                if (ch === 'b' || ch === 'B') {
	                    ++this.index;
	                    return this.scanBinaryLiteral(start);
	                }
	                if (ch === 'o' || ch === 'O') {
	                    return this.scanOctalLiteral(ch, start);
	                }
	                if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
	                    if (this.isImplicitOctalLiteral()) {
	                        return this.scanOctalLiteral(ch, start);
	                    }
	                }
	            }
	            while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                num += this.source[this.index++];
	            }
	            ch = this.source[this.index];
	        }
	        if (ch === '.') {
	            num += this.source[this.index++];
	            while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                num += this.source[this.index++];
	            }
	            ch = this.source[this.index];
	        }
	        if (ch === 'e' || ch === 'E') {
	            num += this.source[this.index++];
	            ch = this.source[this.index];
	            if (ch === '+' || ch === '-') {
	                num += this.source[this.index++];
	            }
	            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                    num += this.source[this.index++];
	                }
	            }
	            else {
	                this.throwUnexpectedToken();
	            }
	        }
	        if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: 6 /* NumericLiteral */,
	            value: parseFloat(num),
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    // https://tc39.github.io/ecma262/#sec-literals-string-literals
	    Scanner.prototype.scanStringLiteral = function () {
	        var start = this.index;
	        var quote = this.source[start];
	        assert_1.assert((quote === '\'' || quote === '"'), 'String literal must starts with a quote');
	        ++this.index;
	        var octal = false;
	        var str = '';
	        while (!this.eof()) {
	            var ch = this.source[this.index++];
	            if (ch === quote) {
	                quote = '';
	                break;
	            }
	            else if (ch === '\\') {
	                ch = this.source[this.index++];
	                if (!ch || !character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                    switch (ch) {
	                        case 'u':
	                            if (this.source[this.index] === '{') {
	                                ++this.index;
	                                str += this.scanUnicodeCodePointEscape();
	                            }
	                            else {
	                                var unescaped_1 = this.scanHexEscape(ch);
	                                if (unescaped_1 === null) {
	                                    this.throwUnexpectedToken();
	                                }
	                                str += unescaped_1;
	                            }
	                            break;
	                        case 'x':
	                            var unescaped = this.scanHexEscape(ch);
	                            if (unescaped === null) {
	                                this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
	                            }
	                            str += unescaped;
	                            break;
	                        case 'n':
	                            str += '\n';
	                            break;
	                        case 'r':
	                            str += '\r';
	                            break;
	                        case 't':
	                            str += '\t';
	                            break;
	                        case 'b':
	                            str += '\b';
	                            break;
	                        case 'f':
	                            str += '\f';
	                            break;
	                        case 'v':
	                            str += '\x0B';
	                            break;
	                        case '8':
	                        case '9':
	                            str += ch;
	                            this.tolerateUnexpectedToken();
	                            break;
	                        default:
	                            if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
	                                var octToDec = this.octalToDecimal(ch);
	                                octal = octToDec.octal || octal;
	                                str += String.fromCharCode(octToDec.code);
	                            }
	                            else {
	                                str += ch;
	                            }
	                            break;
	                    }
	                }
	                else {
	                    ++this.lineNumber;
	                    if (ch === '\r' && this.source[this.index] === '\n') {
	                        ++this.index;
	                    }
	                    this.lineStart = this.index;
	                }
	            }
	            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                break;
	            }
	            else {
	                str += ch;
	            }
	        }
	        if (quote !== '') {
	            this.index = start;
	            this.throwUnexpectedToken();
	        }
	        return {
	            type: 8 /* StringLiteral */,
	            value: str,
	            octal: octal,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    // https://tc39.github.io/ecma262/#sec-template-literal-lexical-components
	    Scanner.prototype.scanTemplate = function () {
	        var cooked = '';
	        var terminated = false;
	        var start = this.index;
	        var head = (this.source[start] === '`');
	        var tail = false;
	        var rawOffset = 2;
	        ++this.index;
	        while (!this.eof()) {
	            var ch = this.source[this.index++];
	            if (ch === '`') {
	                rawOffset = 1;
	                tail = true;
	                terminated = true;
	                break;
	            }
	            else if (ch === '$') {
	                if (this.source[this.index] === '{') {
	                    this.curlyStack.push('${');
	                    ++this.index;
	                    terminated = true;
	                    break;
	                }
	                cooked += ch;
	            }
	            else if (ch === '\\') {
	                ch = this.source[this.index++];
	                if (!character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                    switch (ch) {
	                        case 'n':
	                            cooked += '\n';
	                            break;
	                        case 'r':
	                            cooked += '\r';
	                            break;
	                        case 't':
	                            cooked += '\t';
	                            break;
	                        case 'u':
	                            if (this.source[this.index] === '{') {
	                                ++this.index;
	                                cooked += this.scanUnicodeCodePointEscape();
	                            }
	                            else {
	                                var restore = this.index;
	                                var unescaped_2 = this.scanHexEscape(ch);
	                                if (unescaped_2 !== null) {
	                                    cooked += unescaped_2;
	                                }
	                                else {
	                                    this.index = restore;
	                                    cooked += ch;
	                                }
	                            }
	                            break;
	                        case 'x':
	                            var unescaped = this.scanHexEscape(ch);
	                            if (unescaped === null) {
	                                this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
	                            }
	                            cooked += unescaped;
	                            break;
	                        case 'b':
	                            cooked += '\b';
	                            break;
	                        case 'f':
	                            cooked += '\f';
	                            break;
	                        case 'v':
	                            cooked += '\v';
	                            break;
	                        default:
	                            if (ch === '0') {
	                                if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
	                                    // Illegal: \01 \02 and so on
	                                    this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
	                                }
	                                cooked += '\0';
	                            }
	                            else if (character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
	                                // Illegal: \1 \2
	                                this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
	                            }
	                            else {
	                                cooked += ch;
	                            }
	                            break;
	                    }
	                }
	                else {
	                    ++this.lineNumber;
	                    if (ch === '\r' && this.source[this.index] === '\n') {
	                        ++this.index;
	                    }
	                    this.lineStart = this.index;
	                }
	            }
	            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                ++this.lineNumber;
	                if (ch === '\r' && this.source[this.index] === '\n') {
	                    ++this.index;
	                }
	                this.lineStart = this.index;
	                cooked += '\n';
	            }
	            else {
	                cooked += ch;
	            }
	        }
	        if (!terminated) {
	            this.throwUnexpectedToken();
	        }
	        if (!head) {
	            this.curlyStack.pop();
	        }
	        return {
	            type: 10 /* Template */,
	            value: this.source.slice(start + 1, this.index - rawOffset),
	            cooked: cooked,
	            head: head,
	            tail: tail,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    // https://tc39.github.io/ecma262/#sec-literals-regular-expression-literals
	    Scanner.prototype.testRegExp = function (pattern, flags) {
	        // The BMP character to use as a replacement for astral symbols when
	        // translating an ES6 "u"-flagged pattern to an ES5-compatible
	        // approximation.
	        // Note: replacing with '\uFFFF' enables false positives in unlikely
	        // scenarios. For example, `[\u{1044f}-\u{10440}]` is an invalid
	        // pattern that would not be detected by this substitution.
	        var astralSubstitute = '\uFFFF';
	        var tmp = pattern;
	        var self = this;
	        if (flags.indexOf('u') >= 0) {
	            tmp = tmp
	                .replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function ($0, $1, $2) {
	                var codePoint = parseInt($1 || $2, 16);
	                if (codePoint > 0x10FFFF) {
	                    self.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
	                }
	                if (codePoint <= 0xFFFF) {
	                    return String.fromCharCode(codePoint);
	                }
	                return astralSubstitute;
	            })
	                .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
	        }
	        // First, detect invalid regular expressions.
	        try {
	            RegExp(tmp);
	        }
	        catch (e) {
	            this.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
	        }
	        // Return a regular expression object for this pattern-flag pair, or
	        // `null` in case the current environment doesn't support the flags it
	        // uses.
	        try {
	            return new RegExp(pattern, flags);
	        }
	        catch (exception) {
	            /* istanbul ignore next */
	            return null;
	        }
	    };
	    Scanner.prototype.scanRegExpBody = function () {
	        var ch = this.source[this.index];
	        assert_1.assert(ch === '/', 'Regular expression literal must start with a slash');
	        var str = this.source[this.index++];
	        var classMarker = false;
	        var terminated = false;
	        while (!this.eof()) {
	            ch = this.source[this.index++];
	            str += ch;
	            if (ch === '\\') {
	                ch = this.source[this.index++];
	                // https://tc39.github.io/ecma262/#sec-literals-regular-expression-literals
	                if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                    this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
	                }
	                str += ch;
	            }
	            else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
	                this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
	            }
	            else if (classMarker) {
	                if (ch === ']') {
	                    classMarker = false;
	                }
	            }
	            else {
	                if (ch === '/') {
	                    terminated = true;
	                    break;
	                }
	                else if (ch === '[') {
	                    classMarker = true;
	                }
	            }
	        }
	        if (!terminated) {
	            this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
	        }
	        // Exclude leading and trailing slash.
	        return str.substr(1, str.length - 2);
	    };
	    Scanner.prototype.scanRegExpFlags = function () {
	        var str = '';
	        var flags = '';
	        while (!this.eof()) {
	            var ch = this.source[this.index];
	            if (!character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
	                break;
	            }
	            ++this.index;
	            if (ch === '\\' && !this.eof()) {
	                ch = this.source[this.index];
	                if (ch === 'u') {
	                    ++this.index;
	                    var restore = this.index;
	                    var char = this.scanHexEscape('u');
	                    if (char !== null) {
	                        flags += char;
	                        for (str += '\\u'; restore < this.index; ++restore) {
	                            str += this.source[restore];
	                        }
	                    }
	                    else {
	                        this.index = restore;
	                        flags += 'u';
	                        str += '\\u';
	                    }
	                    this.tolerateUnexpectedToken();
	                }
	                else {
	                    str += '\\';
	                    this.tolerateUnexpectedToken();
	                }
	            }
	            else {
	                flags += ch;
	                str += ch;
	            }
	        }
	        return flags;
	    };
	    Scanner.prototype.scanRegExp = function () {
	        var start = this.index;
	        var pattern = this.scanRegExpBody();
	        var flags = this.scanRegExpFlags();
	        var value = this.testRegExp(pattern, flags);
	        return {
	            type: 9 /* RegularExpression */,
	            value: '',
	            pattern: pattern,
	            flags: flags,
	            regex: value,
	            lineNumber: this.lineNumber,
	            lineStart: this.lineStart,
	            start: start,
	            end: this.index
	        };
	    };
	    Scanner.prototype.lex = function () {
	        if (this.eof()) {
	            return {
	                type: 2 /* EOF */,
	                value: '',
	                lineNumber: this.lineNumber,
	                lineStart: this.lineStart,
	                start: this.index,
	                end: this.index
	            };
	        }
	        var cp = this.source.charCodeAt(this.index);
	        if (character_1.Character.isIdentifierStart(cp)) {
	            return this.scanIdentifier();
	        }
	        // Very common: ( and ) and ;
	        if (cp === 0x28 || cp === 0x29 || cp === 0x3B) {
	            return this.scanPunctuator();
	        }
	        // String literal starts with single quote (U+0027) or double quote (U+0022).
	        if (cp === 0x27 || cp === 0x22) {
	            return this.scanStringLiteral();
	        }
	        // Dot (.) U+002E can also start a floating-point number, hence the need
	        // to check the next character.
	        if (cp === 0x2E) {
	            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
	                return this.scanNumericLiteral();
	            }
	            return this.scanPunctuator();
	        }
	        if (character_1.Character.isDecimalDigit(cp)) {
	            return this.scanNumericLiteral();
	        }
	        // Template literals start with ` (U+0060) for template head
	        // or } (U+007D) for template middle or template tail.
	        if (cp === 0x60 || (cp === 0x7D && this.curlyStack[this.curlyStack.length - 1] === '${')) {
	            return this.scanTemplate();
	        }
	        // Possible identifier start in a surrogate pair.
	        if (cp >= 0xD800 && cp < 0xDFFF) {
	            if (character_1.Character.isIdentifierStart(this.codePointAt(this.index))) {
	                return this.scanIdentifier();
	            }
	        }
	        return this.scanPunctuator();
	    };
	    return Scanner;
	}());
	exports.Scanner = Scanner;


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TokenName = {};
	exports.TokenName[1 /* BooleanLiteral */] = 'Boolean';
	exports.TokenName[2 /* EOF */] = '<end>';
	exports.TokenName[3 /* Identifier */] = 'Identifier';
	exports.TokenName[4 /* Keyword */] = 'Keyword';
	exports.TokenName[5 /* NullLiteral */] = 'Null';
	exports.TokenName[6 /* NumericLiteral */] = 'Numeric';
	exports.TokenName[7 /* Punctuator */] = 'Punctuator';
	exports.TokenName[8 /* StringLiteral */] = 'String';
	exports.TokenName[9 /* RegularExpression */] = 'RegularExpression';
	exports.TokenName[10 /* Template */] = 'Template';


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	// Generated by generate-xhtml-entities.js. DO NOT MODIFY!
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.XHTMLEntities = {
	    quot: '\u0022',
	    amp: '\u0026',
	    apos: '\u0027',
	    gt: '\u003E',
	    nbsp: '\u00A0',
	    iexcl: '\u00A1',
	    cent: '\u00A2',
	    pound: '\u00A3',
	    curren: '\u00A4',
	    yen: '\u00A5',
	    brvbar: '\u00A6',
	    sect: '\u00A7',
	    uml: '\u00A8',
	    copy: '\u00A9',
	    ordf: '\u00AA',
	    laquo: '\u00AB',
	    not: '\u00AC',
	    shy: '\u00AD',
	    reg: '\u00AE',
	    macr: '\u00AF',
	    deg: '\u00B0',
	    plusmn: '\u00B1',
	    sup2: '\u00B2',
	    sup3: '\u00B3',
	    acute: '\u00B4',
	    micro: '\u00B5',
	    para: '\u00B6',
	    middot: '\u00B7',
	    cedil: '\u00B8',
	    sup1: '\u00B9',
	    ordm: '\u00BA',
	    raquo: '\u00BB',
	    frac14: '\u00BC',
	    frac12: '\u00BD',
	    frac34: '\u00BE',
	    iquest: '\u00BF',
	    Agrave: '\u00C0',
	    Aacute: '\u00C1',
	    Acirc: '\u00C2',
	    Atilde: '\u00C3',
	    Auml: '\u00C4',
	    Aring: '\u00C5',
	    AElig: '\u00C6',
	    Ccedil: '\u00C7',
	    Egrave: '\u00C8',
	    Eacute: '\u00C9',
	    Ecirc: '\u00CA',
	    Euml: '\u00CB',
	    Igrave: '\u00CC',
	    Iacute: '\u00CD',
	    Icirc: '\u00CE',
	    Iuml: '\u00CF',
	    ETH: '\u00D0',
	    Ntilde: '\u00D1',
	    Ograve: '\u00D2',
	    Oacute: '\u00D3',
	    Ocirc: '\u00D4',
	    Otilde: '\u00D5',
	    Ouml: '\u00D6',
	    times: '\u00D7',
	    Oslash: '\u00D8',
	    Ugrave: '\u00D9',
	    Uacute: '\u00DA',
	    Ucirc: '\u00DB',
	    Uuml: '\u00DC',
	    Yacute: '\u00DD',
	    THORN: '\u00DE',
	    szlig: '\u00DF',
	    agrave: '\u00E0',
	    aacute: '\u00E1',
	    acirc: '\u00E2',
	    atilde: '\u00E3',
	    auml: '\u00E4',
	    aring: '\u00E5',
	    aelig: '\u00E6',
	    ccedil: '\u00E7',
	    egrave: '\u00E8',
	    eacute: '\u00E9',
	    ecirc: '\u00EA',
	    euml: '\u00EB',
	    igrave: '\u00EC',
	    iacute: '\u00ED',
	    icirc: '\u00EE',
	    iuml: '\u00EF',
	    eth: '\u00F0',
	    ntilde: '\u00F1',
	    ograve: '\u00F2',
	    oacute: '\u00F3',
	    ocirc: '\u00F4',
	    otilde: '\u00F5',
	    ouml: '\u00F6',
	    divide: '\u00F7',
	    oslash: '\u00F8',
	    ugrave: '\u00F9',
	    uacute: '\u00FA',
	    ucirc: '\u00FB',
	    uuml: '\u00FC',
	    yacute: '\u00FD',
	    thorn: '\u00FE',
	    yuml: '\u00FF',
	    OElig: '\u0152',
	    oelig: '\u0153',
	    Scaron: '\u0160',
	    scaron: '\u0161',
	    Yuml: '\u0178',
	    fnof: '\u0192',
	    circ: '\u02C6',
	    tilde: '\u02DC',
	    Alpha: '\u0391',
	    Beta: '\u0392',
	    Gamma: '\u0393',
	    Delta: '\u0394',
	    Epsilon: '\u0395',
	    Zeta: '\u0396',
	    Eta: '\u0397',
	    Theta: '\u0398',
	    Iota: '\u0399',
	    Kappa: '\u039A',
	    Lambda: '\u039B',
	    Mu: '\u039C',
	    Nu: '\u039D',
	    Xi: '\u039E',
	    Omicron: '\u039F',
	    Pi: '\u03A0',
	    Rho: '\u03A1',
	    Sigma: '\u03A3',
	    Tau: '\u03A4',
	    Upsilon: '\u03A5',
	    Phi: '\u03A6',
	    Chi: '\u03A7',
	    Psi: '\u03A8',
	    Omega: '\u03A9',
	    alpha: '\u03B1',
	    beta: '\u03B2',
	    gamma: '\u03B3',
	    delta: '\u03B4',
	    epsilon: '\u03B5',
	    zeta: '\u03B6',
	    eta: '\u03B7',
	    theta: '\u03B8',
	    iota: '\u03B9',
	    kappa: '\u03BA',
	    lambda: '\u03BB',
	    mu: '\u03BC',
	    nu: '\u03BD',
	    xi: '\u03BE',
	    omicron: '\u03BF',
	    pi: '\u03C0',
	    rho: '\u03C1',
	    sigmaf: '\u03C2',
	    sigma: '\u03C3',
	    tau: '\u03C4',
	    upsilon: '\u03C5',
	    phi: '\u03C6',
	    chi: '\u03C7',
	    psi: '\u03C8',
	    omega: '\u03C9',
	    thetasym: '\u03D1',
	    upsih: '\u03D2',
	    piv: '\u03D6',
	    ensp: '\u2002',
	    emsp: '\u2003',
	    thinsp: '\u2009',
	    zwnj: '\u200C',
	    zwj: '\u200D',
	    lrm: '\u200E',
	    rlm: '\u200F',
	    ndash: '\u2013',
	    mdash: '\u2014',
	    lsquo: '\u2018',
	    rsquo: '\u2019',
	    sbquo: '\u201A',
	    ldquo: '\u201C',
	    rdquo: '\u201D',
	    bdquo: '\u201E',
	    dagger: '\u2020',
	    Dagger: '\u2021',
	    bull: '\u2022',
	    hellip: '\u2026',
	    permil: '\u2030',
	    prime: '\u2032',
	    Prime: '\u2033',
	    lsaquo: '\u2039',
	    rsaquo: '\u203A',
	    oline: '\u203E',
	    frasl: '\u2044',
	    euro: '\u20AC',
	    image: '\u2111',
	    weierp: '\u2118',
	    real: '\u211C',
	    trade: '\u2122',
	    alefsym: '\u2135',
	    larr: '\u2190',
	    uarr: '\u2191',
	    rarr: '\u2192',
	    darr: '\u2193',
	    harr: '\u2194',
	    crarr: '\u21B5',
	    lArr: '\u21D0',
	    uArr: '\u21D1',
	    rArr: '\u21D2',
	    dArr: '\u21D3',
	    hArr: '\u21D4',
	    forall: '\u2200',
	    part: '\u2202',
	    exist: '\u2203',
	    empty: '\u2205',
	    nabla: '\u2207',
	    isin: '\u2208',
	    notin: '\u2209',
	    ni: '\u220B',
	    prod: '\u220F',
	    sum: '\u2211',
	    minus: '\u2212',
	    lowast: '\u2217',
	    radic: '\u221A',
	    prop: '\u221D',
	    infin: '\u221E',
	    ang: '\u2220',
	    and: '\u2227',
	    or: '\u2228',
	    cap: '\u2229',
	    cup: '\u222A',
	    int: '\u222B',
	    there4: '\u2234',
	    sim: '\u223C',
	    cong: '\u2245',
	    asymp: '\u2248',
	    ne: '\u2260',
	    equiv: '\u2261',
	    le: '\u2264',
	    ge: '\u2265',
	    sub: '\u2282',
	    sup: '\u2283',
	    nsub: '\u2284',
	    sube: '\u2286',
	    supe: '\u2287',
	    oplus: '\u2295',
	    otimes: '\u2297',
	    perp: '\u22A5',
	    sdot: '\u22C5',
	    lceil: '\u2308',
	    rceil: '\u2309',
	    lfloor: '\u230A',
	    rfloor: '\u230B',
	    loz: '\u25CA',
	    spades: '\u2660',
	    clubs: '\u2663',
	    hearts: '\u2665',
	    diams: '\u2666',
	    lang: '\u27E8',
	    rang: '\u27E9'
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var error_handler_1 = __webpack_require__(10);
	var scanner_1 = __webpack_require__(12);
	var token_1 = __webpack_require__(13);
	var Reader = (function () {
	    function Reader() {
	        this.values = [];
	        this.curly = this.paren = -1;
	    }
	    // A function following one of those tokens is an expression.
	    Reader.prototype.beforeFunctionExpression = function (t) {
	        return ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new',
	            'return', 'case', 'delete', 'throw', 'void',
	            // assignment operators
	            '=', '+=', '-=', '*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=',
	            '&=', '|=', '^=', ',',
	            // binary/unary operators
	            '+', '-', '*', '**', '/', '%', '++', '--', '<<', '>>', '>>>', '&',
	            '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=',
	            '<=', '<', '>', '!=', '!=='].indexOf(t) >= 0;
	    };
	    // Determine if forward slash (/) is an operator or part of a regular expression
	    // https://github.com/mozilla/sweet.js/wiki/design
	    Reader.prototype.isRegexStart = function () {
	        var previous = this.values[this.values.length - 1];
	        var regex = (previous !== null);
	        switch (previous) {
	            case 'this':
	            case ']':
	                regex = false;
	                break;
	            case ')':
	                var keyword = this.values[this.paren - 1];
	                regex = (keyword === 'if' || keyword === 'while' || keyword === 'for' || keyword === 'with');
	                break;
	            case '}':
	                // Dividing a function by anything makes little sense,
	                // but we have to check for that.
	                regex = false;
	                if (this.values[this.curly - 3] === 'function') {
	                    // Anonymous function, e.g. function(){} /42
	                    var check = this.values[this.curly - 4];
	                    regex = check ? !this.beforeFunctionExpression(check) : false;
	                }
	                else if (this.values[this.curly - 4] === 'function') {
	                    // Named function, e.g. function f(){} /42/
	                    var check = this.values[this.curly - 5];
	                    regex = check ? !this.beforeFunctionExpression(check) : true;
	                }
	                break;
	            default:
	                break;
	        }
	        return regex;
	    };
	    Reader.prototype.push = function (token) {
	        if (token.type === 7 /* Punctuator */ || token.type === 4 /* Keyword */) {
	            if (token.value === '{') {
	                this.curly = this.values.length;
	            }
	            else if (token.value === '(') {
	                this.paren = this.values.length;
	            }
	            this.values.push(token.value);
	        }
	        else {
	            this.values.push(null);
	        }
	    };
	    return Reader;
	}());
	var Tokenizer = (function () {
	    function Tokenizer(code, config) {
	        this.errorHandler = new error_handler_1.ErrorHandler();
	        this.errorHandler.tolerant = config ? (typeof config.tolerant === 'boolean' && config.tolerant) : false;
	        this.scanner = new scanner_1.Scanner(code, this.errorHandler);
	        this.scanner.trackComment = config ? (typeof config.comment === 'boolean' && config.comment) : false;
	        this.trackRange = config ? (typeof config.range === 'boolean' && config.range) : false;
	        this.trackLoc = config ? (typeof config.loc === 'boolean' && config.loc) : false;
	        this.buffer = [];
	        this.reader = new Reader();
	    }
	    Tokenizer.prototype.errors = function () {
	        return this.errorHandler.errors;
	    };
	    Tokenizer.prototype.getNextToken = function () {
	        if (this.buffer.length === 0) {
	            var comments = this.scanner.scanComments();
	            if (this.scanner.trackComment) {
	                for (var i = 0; i < comments.length; ++i) {
	                    var e = comments[i];
	                    var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
	                    var comment = {
	                        type: e.multiLine ? 'BlockComment' : 'LineComment',
	                        value: value
	                    };
	                    if (this.trackRange) {
	                        comment.range = e.range;
	                    }
	                    if (this.trackLoc) {
	                        comment.loc = e.loc;
	                    }
	                    this.buffer.push(comment);
	                }
	            }
	            if (!this.scanner.eof()) {
	                var loc = void 0;
	                if (this.trackLoc) {
	                    loc = {
	                        start: {
	                            line: this.scanner.lineNumber,
	                            column: this.scanner.index - this.scanner.lineStart
	                        },
	                        end: {}
	                    };
	                }
	                var startRegex = (this.scanner.source[this.scanner.index] === '/') && this.reader.isRegexStart();
	                var token = startRegex ? this.scanner.scanRegExp() : this.scanner.lex();
	                this.reader.push(token);
	                var entry = {
	                    type: token_1.TokenName[token.type],
	                    value: this.scanner.source.slice(token.start, token.end)
	                };
	                if (this.trackRange) {
	                    entry.range = [token.start, token.end];
	                }
	                if (this.trackLoc) {
	                    loc.end = {
	                        line: this.scanner.lineNumber,
	                        column: this.scanner.index - this.scanner.lineStart
	                    };
	                    entry.loc = loc;
	                }
	                if (token.type === 9 /* RegularExpression */) {
	                    var pattern = token.pattern;
	                    var flags = token.flags;
	                    entry.regex = { pattern: pattern, flags: flags };
	                }
	                this.buffer.push(entry);
	            }
	        }
	        return this.buffer.shift();
	    };
	    return Tokenizer;
	}());
	exports.Tokenizer = Tokenizer;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=../../../maps/xtern.js.map
