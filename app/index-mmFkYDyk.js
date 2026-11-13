(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,te=33777,M=33778,ne=33779,N=35840,re=35841,ie=35842,ae=35843,oe=36196,se=37492,ce=37496,le=37488,P=37489,ue=37490,de=37491,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,ye=37815,be=37816,xe=37817,Se=37818,Ce=37819,we=37820,Te=37821,Ee=36492,De=36494,Oe=36495,ke=36283,Ae=36284,je=36285,Me=36286,Ne=2300,Pe=2301,F=2302,Fe=2303,Ie=2400,Le=2401,I=2402,Re=3200,ze=`srgb`,L=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=35044,We=2e3;function Ge(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ke(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Je(){let e=qe(`canvas`);return e.style.display=`block`,e}var Ye={};function Xe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ze(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Qe(...e){let t=e.join(` `);t in Ye||(Ye[t]=!0,R(...e))}function $e(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var et={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},tt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},nt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),rt=1234567,it=Math.PI/180,at=180/Math.PI;function ot(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(nt[e&255]+nt[e>>8&255]+nt[e>>16&255]+nt[e>>24&255]+`-`+nt[t&255]+nt[t>>8&255]+`-`+nt[t>>16&15|64]+nt[t>>24&255]+`-`+nt[n&63|128]+nt[n>>8&255]+`-`+nt[n>>16&255]+nt[n>>24&255]+nt[r&255]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function st(e,t){return(e%t+t)%t}function ct(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function lt(e,t,n){return e===t?0:(n-e)/(t-e)}function ut(e,t,n){return(1-n)*e+n*t}function dt(e,t,n,r){return ut(e,t,1-Math.exp(-n*r))}function ft(e,t=1){return t-Math.abs(st(e,t*2)-t)}function pt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ht(e,t){return e+Math.floor(Math.random()*(t-e+1))}function gt(e,t){return e+Math.random()*(t-e)}function _t(e){return e*(.5-Math.random())}function vt(e){e!==void 0&&(rt=e);let t=rt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yt(e){return e*it}function bt(e){return e*at}function xt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function St(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ct(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function wt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:R(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Tt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Et(e,t){if(t.constructor===Float32Array)return e;let n=Tt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Dt(e,t){if(t.constructor===Float32Array)return e;let n=Tt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Ot={DEG2RAD:it,RAD2DEG:at,generateUUID:ot,clamp:B,euclideanModulo:st,mapLinear:ct,inverseLerp:lt,lerp:ut,damp:dt,pingpong:ft,smoothstep:pt,smootherstep:mt,randInt:ht,randFloat:gt,randFloatSpread:_t,seededRandom:vt,degToRad:yt,radToDeg:bt,isPowerOfTwo:xt,ceilPowerOfTwo:St,floorPowerOfTwo:Ct,setQuaternionFromProperEuler:wt,normalize:Dt,denormalize:Et},V=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return At.copy(this).projectOnVector(e),this.sub(At)}reflect(e){return this.sub(At.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},At=new H,jt=new kt,U=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Qe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Mt.makeScale(e,t)),this}rotate(e){return Qe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Mt.makeRotation(-e)),this}translate(e,t){return Qe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Mt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mt=new U,Nt=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pt=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ft(){let e={enabled:!0,workingColorSpace:L,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Lt(e.r),e.g=Lt(e.g),e.b=Lt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Rt(e.r),e.g=Rt(e.g),e.b=Rt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[L]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:Nt,fromXYZ:Pt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:Nt,fromXYZ:Pt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var It=Ft();function Lt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Rt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var zt,Bt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zt===void 0&&(zt=qe(`canvas`)),zt.width=e.width,zt.height=e.height;let t=zt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=zt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Lt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Lt(t[e]/255)*255):t[e]=Lt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Vt=0,Ht=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vt++}),this.uuid=ot(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ut(r[t].image)):e.push(Ut(r[t]))}else e=Ut(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ut(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Bt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Wt=0,Gt=new H,Kt=class r extends tt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wt++}),this.uuid=ot(),this.name=``,this.source=new Ht(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gt).x}get height(){return this.source.getSize(Gt).y}get depth(){return this.source.getSize(Gt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null,Kt.DEFAULT_MAPPING=300,Kt.DEFAULT_ANISOTROPY=1;var qt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jt=class extends tt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Kt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ht(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Yt=class extends Jt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xt=class extends Kt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Zt=class extends Yt{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Xt(null,e,t,n),this._setTextureOptions(r),this.texture.isRenderTargetTexture=!0}},Qt=class extends Kt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},$t=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/en.setFromMatrixColumn(e,0).length(),i=1/en.setFromMatrixColumn(e,1).length(),a=1/en.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nn,e,rn)}lookAt(e,t,n){let r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),an.crossVectors(n,sn),an.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),an.crossVectors(n,sn)),an.normalize(),on.crossVectors(sn,an),r[0]=an.x,r[4]=on.x,r[8]=sn.x,r[1]=an.y,r[5]=on.y,r[9]=sn.y,r[2]=an.z,r[6]=on.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*j+c*N,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*j+f*N,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*j+g*N,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*j+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=en.set(r[0],r[1],r[2]).length(),o=en.set(r[4],r[5],r[6]).length(),s=en.set(r[8],r[9],r[10]).length();i<0&&(a=-a),tn.copy(this);let c=1/a,l=1/o,u=1/s;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=l,tn.elements[5]*=l,tn.elements[6]*=l,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},en=new H,tn=new $t,nn=new H(0,0,0),rn=new H(1,1,1),an=new H,on=new H,sn=new H,cn=new $t,ln=new kt,un=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ln.setFromEuler(this),this.setFromQuaternion(ln,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER=`XYZ`;var dn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},fn=0,pn=new H,mn=new kt,hn=new $t,gn=new H,_n=new H,vn=new H,yn=new kt,bn=new H(1,0,0),xn=new H(0,1,0),Sn=new H(0,0,1),Cn={type:`added`},wn={type:`removed`},Tn={type:`childadded`,child:null},En={type:`childremoved`,child:null},Dn=class e extends tt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=ot(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new un,r=new kt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new U}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.multiply(mn),this}rotateOnWorldAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.premultiply(mn),this}rotateX(e){return this.rotateOnAxis(bn,e)}rotateY(e){return this.rotateOnAxis(xn,e)}rotateZ(e){return this.rotateOnAxis(Sn,e)}translateOnAxis(e,t){return pn.copy(e).applyQuaternion(this.quaternion),this.position.add(pn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bn,e)}translateY(e){return this.translateOnAxis(xn,e)}translateZ(e){return this.translateOnAxis(Sn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gn.copy(e):gn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(_n,gn,this.up):hn.lookAt(gn,_n,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),mn.setFromRotationMatrix(hn),this.quaternion.premultiply(mn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,e,vn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,yn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Dn.DEFAULT_UP=new H(0,1,0),Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=class extends Dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},kn={type:`move`},An=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new On;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},Nn={h:0,s:0,l:0};function Pn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=It.workingColorSpace){if(e=st(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Pn(i,r,e+1/3),this.g=Pn(i,r,e),this.b=Pn(i,r,e-1/3)}return It.colorSpaceToWorking(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=jn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lt(e.r),this.g=Lt(e.g),this.b=Lt(e.b),this}copyLinearToSRGB(e){return this.r=Rt(e.r),this.g=Rt(e.g),this.b=Rt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return It.workingToColorSpace(Fn.copy(this),e),Math.round(B(Fn.r*255,0,255))*65536+Math.round(B(Fn.g*255,0,255))*256+Math.round(B(Fn.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Fn.copy(this),t);let n=Fn.r,r=Fn.g,i=Fn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ze){It.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,n=Fn.g,r=Fn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(Nn);let n=ut(Mn.h,Nn.h,t),r=ut(Mn.s,Nn.s,t),i=ut(Mn.l,Nn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new W;W.NAMES=jn;var In=class extends Dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new H,Rn=new H,zn=new H,Bn=new H,Vn=new H,Hn=new H,Un=new H,Wn=new H,Gn=new H,Kn=new H,qn=new qt,Jn=new qt,Yn=new qt,Xn=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ln.subVectors(e,t),r.cross(Ln);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Ln.subVectors(r,t),Rn.subVectors(n,t),zn.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(Rn),s=Ln.dot(zn),c=Rn.dot(Rn),l=Rn.dot(zn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bn)!==null&&Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Bn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Bn.x),s.addScaledVector(a,Bn.y),s.addScaledVector(o,Bn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return qn.setScalar(0),Jn.setScalar(0),Yn.setScalar(0),qn.fromBufferAttribute(e,t),Jn.fromBufferAttribute(e,n),Yn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qn,i.x),a.addScaledVector(Jn,i.y),a.addScaledVector(Yn,i.z),a}static isFrontFacing(e,t,n,r){return Ln.subVectors(n,t),Rn.subVectors(e,t),Ln.cross(Rn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),Ln.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Vn.subVectors(r,n),Hn.subVectors(i,n),Wn.subVectors(e,n);let s=Vn.dot(Wn),c=Hn.dot(Wn);if(s<=0&&c<=0)return t.copy(n);Gn.subVectors(e,r);let l=Vn.dot(Gn),u=Hn.dot(Gn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Vn,a);Kn.subVectors(e,i);let f=Vn.dot(Kn),p=Hn.dot(Kn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Hn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Un.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Un,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Vn,a).addScaledVector(Hn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,$n):$n.fromBufferAttribute(r,t),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),cr.subVectors(this.max,sr),tr.subVectors(e.a,sr),nr.subVectors(e.b,sr),rr.subVectors(e.c,sr),ir.subVectors(nr,tr),ar.subVectors(rr,nr),or.subVectors(tr,rr);let t=[0,-ir.z,ir.y,0,-ar.z,ar.y,0,-or.z,or.y,ir.z,0,-ir.x,ar.z,0,-ar.x,or.z,0,-or.x,-ir.y,ir.x,0,-ar.y,ar.x,0,-or.y,or.x,0];return!dr(t,tr,nr,rr,cr)||(t=[1,0,0,0,1,0,0,0,1],!dr(t,tr,nr,rr,cr))?!1:(lr.crossVectors(ir,ar),t=[lr.x,lr.y,lr.z],dr(t,tr,nr,rr,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qn=[new H,new H,new H,new H,new H,new H,new H,new H],$n=new H,er=new Zn,tr=new H,nr=new H,rr=new H,ir=new H,ar=new H,or=new H,sr=new H,cr=new H,lr=new H,ur=new H;function dr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ur.fromArray(e,a);let o=i.x*Math.abs(ur.x)+i.y*Math.abs(ur.y)+i.z*Math.abs(ur.z),s=t.dot(ur),c=n.dot(ur),l=r.dot(ur);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var fr=new H,pr=new V,mr=0,hr=class extends tt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:Tt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix4(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyNormalMatrix(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.transformDirection(e),this.setXYZ(t,fr.x,fr.y,fr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Et(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Dt(e,this.array):Math.round(e*t)}},gr=class extends hr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},_r=class extends hr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},vr=class extends hr{constructor(e,t,n){super(new Float32Array(e),t,n)}},yr=new Zn,br=new H,xr=new H,Sr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?yr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);let t=br.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(br,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(xr)),this.expandByPoint(br.copy(e.center).sub(xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Cr=0,wr=new $t,Tr=new Dn,Er=new H,Dr=new Zn,Or=new Zn,kr=new H,Ar=class e extends tt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cr++}),this.uuid=ot(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ge(e)?_r:gr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wr.makeRotationFromQuaternion(e),this.applyMatrix4(wr),this}rotateX(e){return wr.makeRotationX(e),this.applyMatrix4(wr),this}rotateY(e){return wr.makeRotationY(e),this.applyMatrix4(wr),this}rotateZ(e){return wr.makeRotationZ(e),this.applyMatrix4(wr),this}translate(e,t,n){return wr.makeTranslation(e,t,n),this.applyMatrix4(wr),this}scale(e,t,n){return wr.makeScale(e,t,n),this.applyMatrix4(wr),this}lookAt(e){return Tr.lookAt(e),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new vr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Dr.setFromBufferAttribute(n),this.morphTargetsRelative?(kr.addVectors(this.boundingBox.min,Dr.min),this.boundingBox.expandByPoint(kr),kr.addVectors(this.boundingBox.max,Dr.max),this.boundingBox.expandByPoint(kr)):(this.boundingBox.expandByPoint(Dr.min),this.boundingBox.expandByPoint(Dr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(Dr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Or.setFromBufferAttribute(n),this.morphTargetsRelative?(kr.addVectors(Dr.min,Or.min),Dr.expandByPoint(kr),kr.addVectors(Dr.max,Or.max),Dr.expandByPoint(kr)):(Dr.expandByPoint(Or.min),Dr.expandByPoint(Or.max))}Dr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)kr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(kr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)kr.fromBufferAttribute(a,t),o&&(Er.fromBufferAttribute(e,t),kr.add(Er)),r=Math.max(r,n.distanceToSquared(kr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new hr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let l=new H,u=new H,d=new H,f=new V,p=new V,m=new V,h=new H,g=new H;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new H,b=new H,x=new H,S=new H;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new hr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kr.fromBufferAttribute(e,t),kr.normalize(),e.setXYZ(t,kr.x,kr.y,kr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new hr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},jr=new H,Mr=new H,Nr=new U,Pr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=jr.subVectors(n,t).cross(Mr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(jr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Nr.getNormalMatrix(e),r=this.coplanarPoint(jr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Fr=0,Ir=class extends tt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fr++}),this.uuid=ot(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Pr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Lr=new H,Rr=new H,zr=new H,Br=new H,Vr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Rr.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Rr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=Br.dot(this.direction),s=-Br.dot(zr),c=Br.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Rr).addScaledVector(zr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Lr.subVectors(e.center,this.origin);let n=Lr.dot(this.direction),r=Lr.dot(Lr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let M=S/w,ne=C/w,N=1/w,re=T-M*D,ie=E-ne*D,ae=O-M*A,oe=k-ne*A,se=ee-M*te,ce=j-ne*te,le=se*oe-ce*ae,P=re*ce-ie*se,ue=ae*ie-oe*re;if(r){if(le<0||P<0||ue<0)return null}else if((le<0||P<0||ue<0)&&(le>0||P>0||ue>0))return null;let de=le+P+ue;if(de===0)return null;let fe=N*(le*D+P*A+ue*te);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hr=class extends Ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ur=new $t,Wr=new Vr,Gr=new Sr,Kr=new H,qr=new H,Jr=new H,Yr=new H,Xr=new H,Zr=new H,Qr=new H,$r=new H,G=class extends Dn{constructor(e=new Ar,t=new Hr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Zr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Xr.fromBufferAttribute(s,e),a?Zr.addScaledVector(Xr,r):Zr.addScaledVector(Xr.sub(t),r))}t.add(Zr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Wr.copy(e.ray).recast(e.near),Gr.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Gr,Kr)===null||Wr.origin.distanceToSquared(Kr)>(e.far-e.near)**2)||(Ur.copy(i).invert(),Wr.copy(e.ray).applyMatrix4(Ur),(n.boundingBox===null||Wr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ti(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ti(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ti(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ti(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ei(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;$r.copy(s),$r.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo($r);return l<n.near||l>n.far?null:{distance:l,point:$r.clone(),object:e}}function ti(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,qr),e.getVertexPosition(c,Jr),e.getVertexPosition(l,Yr);let u=ei(e,t,n,r,qr,Jr,Yr,Qr);if(u){let e=new H;Xn.getBarycoord(Qr,qr,Jr,Yr,e),i&&(u.uv=Xn.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=Xn.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=Xn.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};Xn.getNormal(qr,Jr,Yr,t.normal),u.face=t,u.barycoord=e}return u}var ni=class extends Kt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ri=class extends hr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ii=new $t,ai=new $t,oi=[],si=new Zn,ci=new $t,li=new G,ui=new Sr,di=class extends G{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ri(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ci)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ii),si.copy(e.boundingBox).applyMatrix4(ii),this.boundingBox.union(si)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ii),ui.copy(e.boundingSphere).applyMatrix4(ii),this.boundingSphere.union(ui)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(li.geometry=this.geometry,li.material=this.material,li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ui.copy(this.boundingSphere),ui.applyMatrix4(n),e.ray.intersectsSphere(ui)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ii),ai.multiplyMatrices(n,ii),li.matrixWorld=ai,li.raycast(e,oi);for(let e=0,n=oi.length;e<n;e++){let n=oi[e];n.instanceId=i,n.object=this,t.push(n)}oi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ri(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ni(new Float32Array(r*this.count),r,this.count,D,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fi=new Sr,pi=new V(.5,.5),mi=new H,hi=class{constructor(e=new Pr,t=new Pr,n=new Pr,r=new Pr,i=new Pr,a=new Pr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=We,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476+pi.distanceTo(e.center),fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(mi.x=r.normal.x>0?e.max.x:e.min.x,mi.y=r.normal.y>0?e.max.y:e.min.y,mi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gi=new $t,_i=class e{constructor(){this.coordinateSystem=We,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];gi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new hi),n[e].setFromProjectionMatrix(gi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new hi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},vi=class extends Ir{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yi=new $t,bi=new Vr,xi=new Sr,Si=new H,Ci=class extends Dn{constructor(e=new Ar,t=new vi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xi.copy(n.boundingSphere),xi.applyMatrix4(r),xi.radius+=i,e.ray.intersectsSphere(xi)===!1)return;yi.copy(r).invert(),bi.copy(e.ray).applyMatrix4(yi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Si.fromBufferAttribute(l,n),wi(Si,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Si.fromBufferAttribute(l,a),wi(Si,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function wi(e,t,n,r,i,a,o){let s=bi.distanceSqToPoint(e);if(s<n){let n=new H;bi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ti=class extends Kt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ei=class extends Kt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Di=class extends Kt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ht(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oi=class extends Di{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ki=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ai=class e extends Ar{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new vr(c,3)),this.setAttribute(`normal`,new vr(l,3)),this.setAttribute(`uv`,new vr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ji=class e extends Ar{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new H,l=new V;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new vr(a,3)),this.setAttribute(`normal`,new vr(o,3)),this.setAttribute(`uv`,new vr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Mi=class e extends Ar{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new vr(u,3)),this.setAttribute(`normal`,new vr(d,3)),this.setAttribute(`uv`,new vr(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ni=class e extends Ar{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new vr(i,3)),this.setAttribute(`normal`,new vr(i.slice(),3)),this.setAttribute(`uv`,new vr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Pi=class e extends Ni{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Fi=class e extends Ar{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new vr(p,3)),this.setAttribute(`normal`,new vr(m,3)),this.setAttribute(`uv`,new vr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ii(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ri(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ri(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Li(e){let t={};for(let n=0;n<e.length;n++){let r=Ii(e[n]);for(let e in r)t[e]=r[e]}return t}function Ri(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function zi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Bi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:It.workingColorSpace}var Vi={clone:Ii,merge:Li},Hi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ui=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wi=class extends Ir{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hi,this.fragmentShader=Ui,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=zi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new qt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new $t().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Gi=class extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ki=class extends Ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Re,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},qi=class extends Ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ji(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Yi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Xi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Zi=class extends Xi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Le:i=e,o=2*t-n;break;case I:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Le:a=e,s=2*n-t;break;case I:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Qi=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},$i=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ea=class extends Xi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ra(n,t,g,y,r);i[p]=ta(x,o,_,b,m)}return i}};function ta(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function na(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ra(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ta(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=na(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ia=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ji(t,this.TimeBufferType),this.values=Ji(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ji(e.times,Array),values:Ji(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Yi(e.settings)&&(n.settings={inTangents:Ji(e.settings.inTangents,Array),outTangents:Ji(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $i(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ea(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ne:t=this.InterpolantFactoryMethodDiscrete;break;case Pe:t=this.InterpolantFactoryMethodLinear;break;case F:t=this.InterpolantFactoryMethodSmooth;break;case Fe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ne;case this.InterpolantFactoryMethodLinear:return Pe;case this.InterpolantFactoryMethodSmooth:return F;case this.InterpolantFactoryMethodBezier:return Fe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Yi(this.settings)&&(aa(this.settings.inTangents,e),aa(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Yi(this.settings)&&(oa(this.settings.inTangents,e),oa(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ke(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===F,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Yi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function aa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function oa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ia.prototype.ValueTypeName=``,ia.prototype.TimeBufferType=Float32Array,ia.prototype.ValueBufferType=Float32Array,ia.prototype.DefaultInterpolation=Pe;var sa=class extends ia{constructor(e,t,n){super(e,t,n)}};sa.prototype.ValueTypeName=`bool`,sa.prototype.ValueBufferType=Array,sa.prototype.DefaultInterpolation=Ne,sa.prototype.InterpolantFactoryMethodLinear=void 0,sa.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}};ca.prototype.ValueTypeName=`color`;var la=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}};la.prototype.ValueTypeName=`number`;var ua=class extends Xi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)kt.slerpFlat(i,0,a,c-o,a,c,s);return i}},da=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}};da.prototype.ValueTypeName=`quaternion`,da.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends ia{constructor(e,t,n){super(e,t,n)}};fa.prototype.ValueTypeName=`string`,fa.prototype.ValueBufferType=Array,fa.prototype.DefaultInterpolation=Ne,fa.prototype.InterpolantFactoryMethodLinear=void 0,fa.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends ia{constructor(e,t,n,r){super(e,t,n,r)}};pa.prototype.ValueTypeName=`vector`;var ma={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(ha(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!ha(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function ha(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var ga=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},_a=class{constructor(e){this.manager=e===void 0?ga:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},this.priority=`auto`,this.cache=`default`,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};_a.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var va=new H,ya=new kt,ba=new H,xa=class extends Dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=We,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(va,ya,ba),ba.x===1&&ba.y===1&&ba.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,ya,ba.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(va,ya,ba),ba.x===1&&ba.y===1&&ba.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,ya,ba.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Sa=new H,Ca=new V,wa=new V,Ta=class extends xa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=at*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(it*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return at*2*Math.atan(Math.tan(it*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sa.x,Sa.y).multiplyScalar(-e/Sa.z),Sa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sa.x,Sa.y).multiplyScalar(-e/Sa.z)}getViewSize(e,t){return this.getViewBounds(e,Ca,wa),t.subVectors(wa,Ca)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(it*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ea=class extends xa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Da=class extends Ar{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},Oa=new WeakMap,ka=class extends _a{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&R(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&R(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=ma.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{Oa.has(a)===!0?(r&&r(Oa.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!==`anonymous`?`include`:`same-origin`,o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign({},i.options,{colorSpaceConversion:`none`}))}).then(function(n){return ma.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e),n}).catch(function(t){r&&r(t),Oa.set(s,t),ma.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});ma.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Aa=-90,ja=1,Ma=class extends Dn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ta(Aa,ja,e,t);r.layers=this.layers,this.add(r);let i=new Ta(Aa,ja,e,t);i.layers=this.layers,this.add(i);let a=new Ta(Aa,ja,e,t);a.layers=this.layers,this.add(a);let o=new Ta(Aa,ja,e,t);o.layers=this.layers,this.add(o);let s=new Ta(Aa,ja,e,t);s.layers=this.layers,this.add(s);let c=new Ta(Aa,ja,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Na=class extends Ta{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Pa=`\\[\\]\\.:\\/`,Fa=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ia=`[^\\[\\]\\.:\\/]`,La=`[^`+Pa.replace(`\\.`,``)+`]`,Ra=`((?:WC+[\\/:])*)`.replace(`WC`,Ia),za=`(WCOD+)?`.replace(`WCOD`,La),Ba=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ia),Va=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ia),Ha=RegExp(`^`+Ra+za+Ba+Va+`$`),Ua=[`material`,`materials`,`bones`,`map`],Wa=class{constructor(e,t,n){let r=n||Ga.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ga=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Fa,``)}static parseTrackName(e){let t=Ha.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ua.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ga.Composite=Wa,Ga.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ga.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ga.prototype.GetterByBindingType=[Ga.prototype._getValue_direct,Ga.prototype._getValue_array,Ga.prototype._getValue_arrayElement,Ga.prototype._getValue_toArray],Ga.prototype.SetterByBindingTypeAndVersioning=[[Ga.prototype._setValue_direct,Ga.prototype._setValue_direct_setNeedsUpdate,Ga.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ga.prototype._setValue_array,Ga.prototype._setValue_array_setNeedsUpdate,Ga.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ga.prototype._setValue_arrayElement,Ga.prototype._setValue_arrayElement_setNeedsUpdate,Ga.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ga.prototype._setValue_fromArray,Ga.prototype._setValue_fromArray_setNeedsUpdate,Ga.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Ka(e,t,n,r){let i=qa(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case N:case ie:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:case le:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function qa(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Ja(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ya(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var K={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},Xa={basic:{uniforms:Li([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:Li([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:Li([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:Li([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:Li([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new W(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:Li([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:Li([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:Li([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:Li([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:Li([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:Li([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:Li([q.common,q.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:Li([q.lights,q.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};Xa.physical={uniforms:Li([Xa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var Za={r:0,b:0,g:0},Qa=new $t,$a=new U;$a.set(-1,0,0,0,1,0,0,0,1);function eo(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new G(new Ai(1,1,1),new Wi({name:`BackgroundCubeMaterial`,uniforms:Ii(Xa.backgroundCube.uniforms),vertexShader:Xa.backgroundCube.vertexShader,fragmentShader:Xa.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Qa.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply($a),l.material.toneMapped=It.getTransfer(i.colorSpace)!==Ve,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new G(new Fi(2,2),new Wi({name:`BackgroundMaterial`,uniforms:Ii(Xa.background.uniforms),vertexShader:Xa.background.vertexShader,fragmentShader:Xa.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=It.getTransfer(i.colorSpace)!==Ve,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Za,Bi(e)),n.buffers.color.setClear(Za.r,Za.g,Za.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function to(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function no(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ro(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&R(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function io(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Pr,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ao=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ti(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ai(5,5,5),i=new Wi({name:`CubemapFromEquirect`,uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new G(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Ma(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},oo=256,so=3,co=20,lo=256,uo=16,fo=3,po=new H,mo=new W,ho=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ma(1,10,null),this._boxMesh=new G(new Ai(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=po}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(mo));let h=new Ma(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=So(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(oo,Ct(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?oo:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=go(e,!1,!1),n=Math.log2(e)-so;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=go(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=So()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=xo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=vo(),this._integrationMaterial=yo());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/uo);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-fo)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(lo*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=bo());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function go(e,t,n){return new ao(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:L,depthBuffer:n})}function _o(e,t,n){return new Wi({name:e,uniforms:t,vertexShader:K.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function vo(){return _o(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lo}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yo(){return _o(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:uo}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function bo(){return _o(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${co}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function xo(){return _o(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function So(){return _o(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Co(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new ao(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new ho(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new ho(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function wo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Qe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function To(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?_r:gr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Eo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Do(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Oo(e,t,n){let r=new WeakMap,i=new qt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Xt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new V(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ko(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ao={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function jo(e,t,n,r,i,a){let o=new Yt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Ar;u.setAttribute(`position`,new vr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new vr([0,2,0,0,2,0],2));let d=new Gi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new G(u,d),p=new Ea(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new Yt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Yt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Di(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},It.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Ao[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Mo=new Kt,No=new Di(1,1),Po=new Oi(1),Fo=new Xt,Io=new Qt,Lo=new Ti,Ro=[],zo=[],Bo=new Float32Array(16),Vo=new Float32Array(9),Ho=new Float32Array(4);function Uo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ro[i];if(a===void 0&&(a=new Float32Array(i),Ro[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Wo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Go(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ko(e,t){let n=zo[t];n===void 0&&(n=new Int32Array(t),zo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function qo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Jo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wo(n,t))return;e.uniform2fv(this.addr,t),Go(n,t)}}function Yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Wo(n,t))return;e.uniform3fv(this.addr,t),Go(n,t)}}function Xo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wo(n,t))return;e.uniform4fv(this.addr,t),Go(n,t)}}function Zo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Go(n,t)}else{if(Wo(n,r))return;Ho.set(r),e.uniformMatrix2fv(this.addr,!1,Ho),Go(n,r)}}function Qo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Go(n,t)}else{if(Wo(n,r))return;Vo.set(r),e.uniformMatrix3fv(this.addr,!1,Vo),Go(n,r)}}function $o(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Wo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Go(n,t)}else{if(Wo(n,r))return;Bo.set(r),e.uniformMatrix4fv(this.addr,!1,Bo),Go(n,r)}}function es(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wo(n,t))return;e.uniform2iv(this.addr,t),Go(n,t)}}function ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wo(n,t))return;e.uniform3iv(this.addr,t),Go(n,t)}}function rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wo(n,t))return;e.uniform4iv(this.addr,t),Go(n,t)}}function is(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function as(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Wo(n,t))return;e.uniform2uiv(this.addr,t),Go(n,t)}}function os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Wo(n,t))return;e.uniform3uiv(this.addr,t),Go(n,t)}}function ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Wo(n,t))return;e.uniform4uiv(this.addr,t),Go(n,t)}}function cs(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function ls(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?cs(No):Mo,n.setTexture2D(t||a,i)}function us(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Io,i)}function ds(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?cs(Po):Lo,n.setTextureCube(t||a,i)}function fs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Fo,i)}function ps(e){switch(e){case 5126:return qo;case 35664:return Jo;case 35665:return Yo;case 35666:return Xo;case 35674:return Zo;case 35675:return Qo;case 35676:return $o;case 5124:case 35670:return es;case 35667:case 35671:return ts;case 35668:case 35672:return ns;case 35669:case 35673:return rs;case 5125:return is;case 36294:return as;case 36295:return os;case 36296:return ss;case 35678:case 36198:case 36298:case 36306:case 35682:return ls;case 35679:case 36299:case 36307:return us;case 35680:case 36300:case 36308:case 36293:return ds;case 36289:case 36303:case 36311:case 36292:return fs}}function ms(e,t){e.uniform1fv(this.addr,t)}function hs(e,t){let n=Uo(t,this.size,2);e.uniform2fv(this.addr,n)}function gs(e,t){let n=Uo(t,this.size,3);e.uniform3fv(this.addr,n)}function _s(e,t){let n=Uo(t,this.size,4);e.uniform4fv(this.addr,n)}function vs(e,t){let n=Uo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function ys(e,t){let n=Uo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function bs(e,t){let n=Uo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function xs(e,t){e.uniform1iv(this.addr,t)}function Ss(e,t){e.uniform2iv(this.addr,t)}function Cs(e,t){e.uniform3iv(this.addr,t)}function ws(e,t){e.uniform4iv(this.addr,t)}function Ts(e,t){e.uniform1uiv(this.addr,t)}function Es(e,t){e.uniform2uiv(this.addr,t)}function Ds(e,t){e.uniform3uiv(this.addr,t)}function Os(e,t){e.uniform4uiv(this.addr,t)}function ks(e,t,n){let r=this.cache,i=t.length,a=Ko(n,i);Wo(r,a)||(e.uniform1iv(this.addr,a),Go(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?cs(No):Mo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function As(e,t,n){let r=this.cache,i=t.length,a=Ko(n,i);Wo(r,a)||(e.uniform1iv(this.addr,a),Go(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Io,a[e])}function js(e,t,n){let r=this.cache,i=t.length,a=Ko(n,i);Wo(r,a)||(e.uniform1iv(this.addr,a),Go(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?cs(Po):Lo;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Ms(e,t,n){let r=this.cache,i=t.length,a=Ko(n,i);Wo(r,a)||(e.uniform1iv(this.addr,a),Go(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Fo,a[e])}function Ns(e){switch(e){case 5126:return ms;case 35664:return hs;case 35665:return gs;case 35666:return _s;case 35674:return vs;case 35675:return ys;case 35676:return bs;case 5124:case 35670:return xs;case 35667:case 35671:return Ss;case 35668:case 35672:return Cs;case 35669:case 35673:return ws;case 5125:return Ts;case 36294:return Es;case 36295:return Ds;case 36296:return Os;case 35678:case 36198:case 36298:case 36306:case 35682:return ks;case 35679:case 36299:case 36307:return As;case 35680:case 36300:case 36308:case 36293:return js;case 36289:case 36303:case 36311:case 36292:return Ms}}var Ps=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ps(t.type)}},Fs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ns(t.type)}},Is=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Ls=/(\w+)(\])?(\[|\.)?/g;function Rs(e,t){e.seq.push(t),e.map[t.id]=t}function zs(e,t,n){let r=e.name,i=r.length;for(Ls.lastIndex=0;;){let a=Ls.exec(r),o=Ls.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Rs(n,l===void 0?new Ps(s,e,t):new Fs(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Is(s),Rs(n,e)),n=e}}}var Bs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);zs(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Vs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Hs=37297,Us=0;function Ws(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Gs=new U;function Ks(e){It._getMatrix(Gs,It.workingColorSpace,e);let t=`mat3( ${Gs.elements.map(e=>e.toFixed(4))} )`;switch(It.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function qs(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Ws(e.getShaderSource(t),r)}return i}function Js(e,t){let n=Ks(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Ys={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Xs(e,t){let n=Ys[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Zs=new H;function Qs(){return It.getLuminanceCoefficients(Zs),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Zs.x.toFixed(4)}, ${Zs.y.toFixed(4)}, ${Zs.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function $s(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(nc).join(`
`)}function ec(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function tc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function nc(e){return e!==``}function rc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ic(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ac=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(e){return e.replace(ac,sc)}function sc(e,t){let n=K[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return oc(n)}var cc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(e){return e.replace(cc,uc)}function uc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function dc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var fc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function pc(e){return fc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var mc={302:`ENVMAP_MODE_REFRACTION`};function hc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:mc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var gc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function _c(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:gc[e.combine]||`ENVMAP_BLENDING_NONE`}function vc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=pc(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=hc(n),d=_c(n),f=$s(n),p=ec(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(nc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(nc).join(`
`),g.length>0&&(g+=`
`)):(h=[dc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(nc).join(`
`),g=[dc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:Xs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,Js(`linearToOutputTexel`,n.outputColorSpace),Qs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(nc).join(`
`)),o=oc(o),o=rc(o,n),o=ic(o,n),s=oc(s),s=rc(s,n),s=ic(s,n),o=lc(o),s=lc(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Vs(i,i.VERTEX_SHADER,v),x=Vs(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=qs(i,b,`vertex`),n=qs(i,x,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Bs(i,m),w=tc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Hs)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Us++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var yc=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xc(e),t.set(e,n)),n}},xc=class{constructor(e){this.id=yc++,this.code=e,this.usedTimes=0}};function Sc(e){return e===1030||e===37490||e===36285}function Cc(e,t,n,r,i,a){let o=new dn,s=new bc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Xa[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),j=m.isInstancedMesh===!0,te=m.isBatchedMesh===!0,M=!!i.map,ne=!!i.matcap,N=!!b,re=N&&b.isPMREMTexture===!0,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.diffuseRoughness>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=de&&!!i.anisotropyMap,be=fe&&!!i.clearcoatMap,xe=fe&&!!i.clearcoatNormalMap,Se=fe&&!!i.clearcoatRoughnessMap,Ce=pe&&!!i.diffuseRoughnessMap,we=ge&&!!i.iridescenceMap,Te=ge&&!!i.iridescenceThicknessMap,Ee=_e&&!!i.sheenColorMap,De=_e&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ve&&!!i.transmissionMap,Me=ve&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,F=i.alphaTest>0,Fe=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Le=e.toneMapping);let I=re?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Re={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:te,batchingColor:te&&m._colorsTexture!==null,instancing:j,instancingColor:j&&m.instanceColor!==null,instancingMorph:j&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:ne,envMap:N,envMapMode:N&&b.mapping,envMapPMREM:re,envMapMaxLod:re?I.length-1:null,envMapSize:re?I[0].width:null,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Sc(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:ye,clearcoat:fe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,diffuseRoughness:pe,diffuseRoughnessMap:Ce,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:_e,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ve,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:F,alphaHash:Fe,combine:i.combine,mapUv:M&&p(i.map.channel),aoMapUv:ie&&p(i.aoMap.channel),lightMapUv:ae&&p(i.lightMap.channel),bumpMapUv:oe&&p(i.bumpMap.channel),normalMapUv:se&&p(i.normalMap.channel),displacementMapUv:ce&&p(i.displacementMap.channel),emissiveMapUv:le&&p(i.emissiveMap.channel),metalnessMapUv:P&&p(i.metalnessMap.channel),roughnessMapUv:ue&&p(i.roughnessMap.channel),anisotropyMapUv:ye&&p(i.anisotropyMap.channel),clearcoatMapUv:be&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:we&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(i.sheenRoughnessMap.channel),specularMapUv:Oe&&p(i.specularMap.channel),specularColorMapUv:ke&&p(i.specularColorMap.channel),specularIntensityMapUv:Ae&&p(i.specularIntensityMap.channel),transmissionMapUv:je&&p(i.transmissionMap.channel),thicknessMapUv:Me&&p(i.thicknessMap.channel),alphaMapUv:Pe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(se||de),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(M||Pe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&It.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&It.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Xa[t];n=Vi.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new vc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function wc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Tc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ec(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Dc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Tc),r.length>1&&r.sort(t||Ec),i.length>1&&i.sort(t||Ec)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Oc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Dc,e.set(t,[i])):n>=r.length?(i=new Dc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function kc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Ac(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var jc=0;function Mc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Nc(e){let t=new kc,n=Ac(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new $t,o=new $t;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Mc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=jc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Pc(e){let t=new Nc(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Fc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Pc(e),t.set(n,[a])):r>=i.length?(a=new Pc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ic=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Rc=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],zc=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Bc=new $t,Vc=new H,Hc=new H;function Uc(e,t,n){let i=new hi,a=new V,s=new V,c=new qt,l=new Ki,u=new qi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:Ic,fragmentShader:Lc}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Ar;y.setAttribute(`position`,new hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new G(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){R(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Yt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Di(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new ao(a.x),p.map.depthTexture=new Oi(a.x,m)):(p.map=new Yt(a.x,a.y),p.map.depthTexture=new Di(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Vc.setFromMatrixPosition(d.matrixWorld),e.position.copy(Vc),Hc.copy(e.position),Hc.add(Rc[t]),e.up.copy(zc[t]),e.lookAt(Hc),e.updateMatrixWorld(),n.makeTranslation(-Vc.x,-Vc.y,-Vc.z),Bc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Bc,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Yt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Wc(e,t){function n(){let t=!1,n=new qt,r=null,i=new qt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=et[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=M>=1);let N=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new qt().fromArray(ie),se=new qt().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(te&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function we(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function F(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Le(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function I(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function ze(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function L(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:Pe,texImage3D:F,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:Le,viewport:I,reset:L}}function Gc(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):qe(`canvas`)}function O(e,t,n){let r=1,i=L(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function ee(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function j(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Be:It.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function te(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function M(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function N(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function re(e){ae(e.target)}function ie(e){oe(e.target)}function ae(e){e.removeEventListener(`dispose`,re),N(e),ce(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function oe(e){e.removeEventListener(`dispose`,ie),N(e),P(e)}function se(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?oe(t):ae(t))}C.clear(),b.clear()}function ce(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&le(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function le(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function P(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&ae(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let ue=0;function de(){ue=0}function fe(){return ue}function pe(e){ue=e}function me(){let e=ue;return e>=p.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ue+=1,e}function he(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ge(e,t){let n=f.get(e);if(e.isVideoTexture&&Re(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{De(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function _e(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?De(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function ve(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?De(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ye(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?Oe(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let be={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},xe={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},Se={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function Ce(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,be[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,be[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,be[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,xe[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,xe[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,Se[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function we(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,re),ne(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=he(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&le(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function Te(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ee(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=Te(r.start,t.width,4),c=Te(n.start,t.width,4);r.start<=o+1&&s===c&&Te(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function De(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=we(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=It.getPrimaries(It.workingColorSpace),n=t.colorSpace===``?null:It.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=ze(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=j(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);Ce(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=M(t,e);if(t.isDepthTexture)u=te(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Ee(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=Ka(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=Ka(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=L(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=L(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Oe(e,t,n){if(t.image.length!==6)return;let r=we(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=It.getPrimaries(It.workingColorSpace),o=t.colorSpace===``?null:It.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=ze(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=j(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=M(t,h);Ce(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=te(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=L(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ke(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=j(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),I(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Le(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ae(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=te(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;I(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Le(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Le(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=j(i.internalFormat,a,o,i.normalized,i.colorSpace);I(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Le(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Le(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function je(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?ye(t.depthTexture,0):ge(t.depthTexture,0);let o=i.__webglTexture,s=Le(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)I(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)I(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Me(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)je(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?je(t.__webglFramebuffer[0],e,0):je(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ae(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ae(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ne(e,t,n){let r=f.get(e);t!==void 0&&ke(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Me(e)}function Pe(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,ie),ne(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&I(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=j(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Le(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ae(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),Ce(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)ke(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else ke(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),Ce(o,r),ke(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),Ce(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)ke(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else ke(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&Me(e)}function F(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Fe=[];function Ie(e){if(e.samples>0){if(I(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Fe.length=0,Fe.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&Fe.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Fe))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Le(e){return Math.min(p.maxSamples,e.samples)}function I(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Re(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function ze(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(It.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function L(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=me,this.resetTextureUnits=de,this.getTextureUnits=fe,this.setTextureUnits=pe,this.setTexture2D=ge,this.setTexture2DArray=_e,this.setTexture3D=ve,this.setTextureCube=ye,this.rebindTextures=Ne,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=I,this.dispose=se}function Kc(e,t){function n(n,r=``){let i,a=It.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var qc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jc=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ki(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Wi({vertexShader:qc,fragmentShader:Jc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xc=class extends tt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Yc,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new V,k=null,A=null,ee=new Ta;ee.viewport=new qt;let j=new Ta;j.viewport=new qt;let te=[ee,j],M=new Na,ne=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new An,C[e]=t),t.getHandSpace()};function re(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ne=null,N=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Yt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Di(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Yt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=ee.near=t,M.far=j.far=ee.far=n,(ne!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),ne=M.near,N=M.far),M.layers.mask=e.layers.mask|6,ee.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;oe(M,i);for(let e=0;e<a.length;e++)oe(a[e],i);M.projectionMatrix.copy(ee.projectionMatrix),M.projectionMatrixInverse.copy(ee.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),se(e,M,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=at*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let ce=null;function le(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new Ta,o.layers.enable(n),o.viewport=new qt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ki,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let P=new Ja;P.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},Zc=new $t,Qc=new U;Qc.set(-1,0,0,0,1,0,0,0,1);function $c(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Bi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Zc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Qc),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function el(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var tl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nl=null;function rl(){return nl===null&&(nl=new ni(tl,16,16,k,g),nl.name=`DFG_LUT`,nl.minFilter=o,nl.magFilter=o,nl.wrapS=t,nl.wrapT=t,nl.generateMipmaps=!1,nl.needsUpdate=!0),nl}var il=class{constructor(e={}){let{canvas:t=Je(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,j=null,te=[],M=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,ie=null,ae=null,oe=null,se=null;this._outputColorSpace=ze;let ce=0,le=0,P=null,ue=-1,de=null,fe=new qt,pe=new qt,me=null,he=new W(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new qt(0,0,_e,ve),Ce=new qt(0,0,_e,ve),we=!1,Te=new hi,Ee=new _i,De=!1,Oe=!1,ke=new $t,Ae=new H,je=new qt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return P===null?ye:1}let F=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,I,Re,L,Be,Ve,He,Ue,Ge,Ke,qe,Ye,Ze,Qe,et,tt,nt,rt,it,at,ot,B;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),F===null){let t=`webgl2`;if(F=Fe(t,e),F===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),z(`WebGLRenderer: `+e.message),e}function st(){Ie=new wo(F),Ie.init(),at=new Kc(F,Ie),Le=new ro(F,Ie,e,at),I=new Wc(F,Ie),Le.reversedDepthBuffer&&h&&I.buffers.depth.setReversed(!0),ae=F.createFramebuffer(),oe=F.createFramebuffer(),se=F.createFramebuffer(),Re=new Do(F),L=new wc,Be=new Gc(F,Ie,I,L,Le,at,Re),Ve=new Co(N),He=new Ya(F),ot=new to(F,He),Ue=new To(F,He,Re,ot),Ge=new ko(F,Ue,He,ot,Re),nt=new Oo(F,Le,Be),Qe=new io(L),Ke=new Cc(N,Ve,Ie,Le,ot,Qe),qe=new $c(N,L),Ye=new Oc,Ze=new Fc(Ie),tt=new eo(N,Ve,I,Ge,x,s),et=new Uc(N,Ge,Le),B=new el(F,Re,Le,I),rt=new no(F,Ie,Re),it=new Eo(F,Ie,Re),Re.programs=Ke.programs,N.capabilities=Le,N.extensions=Ie,N.properties=L,N.renderLists=Ye,N.shadowMap=et,N.state=I,N.info=Re}S!==1009&&(ne=new jo(S,t.width,t.height,o,r,i));let ct=new Xc(N,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){ct.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(Pe()).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=C.has(t)}if(e){let e=P.texture.type,t=w.has(e),n=tt.getClearColor(),r=tt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,F.clearBufferiv(F.COLOR,0,E))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ie=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),tt.dispose(),Ye.dispose(),Ze.dispose(),Be.dispose(),L.dispose(),Ve.dispose(),Ge.dispose(),Ue.dispose(),ot.dispose(),B.dispose(),Ke.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,vt),ct.removeEventListener(`sessionend`,yt),bt.stop()};function lt(e){e.preventDefault(),Xe(`WebGLRenderer: Context Lost.`),re=!0}function ut(){Xe(`WebGLRenderer: Context Restored.`),re=!1;let e=Re.autoReset,t=et.enabled,n=et.autoUpdate,r=et.needsUpdate,i=et.type;st(),Re.autoReset=e,et.enabled=t,et.autoUpdate=n,et.needsUpdate=r,et.type=i}function dt(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){mt(e),L.remove(e)}function mt(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ot.setup(i,r,s,n,c);let h,g=rt;if(c!==null&&(h=He.get(c),g=it,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n,r){ie!==null&&e.isNodeMaterial&&ie.setObject(r,e),De===!0&&Qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ie!==null&&ie.renderStart(e,t,n),j=Ze.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),ie!==null&&ie.updateLights(j.state.lightsArray),Oe=this.localClippingEnabled,De=Qe.init(this.clippingPlanes,Oe),De===!0&&Qe.setGlobalState(this.clippingPlanes,t),ie!==null&&et.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ht(o,n,t,e),r.add(o)}else ht(i,n,t,e),r.add(i)}}),j=M.pop(),ie!==null&&ie.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function _t(e){gt&&gt(e)}function vt(){bt.stop()}function yt(){bt.start()}let bt=new Ja;bt.setAnimationLoop(_t),typeof self<`u`&&bt.setContext(self),this.setAnimationLoop=function(e){gt=e,ct.setAnimationLoop(e),e===null?bt.stop():bt.start()},ct.addEventListener(`sessionstart`,vt),ct.addEventListener(`sessionend`,yt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;ie!==null&&ie.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=ne!==null&&(P===null||n)&&ne.begin(N,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,P),j=Ze.get(e,M.length),j.init(t),j.state.textureUnits=Be.getTextureUnits(),M.push(j),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ee.setFromArrayCamera(t):Te.setFromProjectionMatrix(ke,We,t.reversedDepth),Oe=this.localClippingEnabled,De=Qe.init(this.clippingPlanes,Oe),k=Ye.get(e,te.length),k.init(),te.push(k),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&xt(e,t,-1/0,N.sortObjects)}xt(e,t,0,N.sortObjects),k.finish(),ie!==null&&ie.updateLights(j.state.lightsArray),N.sortObjects===!0&&k.sort(be,xe),Ne=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Ne&&tt.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),De===!0&&Qe.beginShadows();let i=j.state.shadowsArray;if(et.render(i,e,t),De===!0&&Qe.endShadows(),(r&&ne.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}Ne&&tt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(k,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),Ne&&tt.render(e),St(k,e,t)}P!==null&&le===0&&(Be.updateMultisampleRenderTarget(P),Be.updateRenderTargetMipmap(P)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),ot.resetDefaultState(),ue=-1,de=null,M.pop(),M.length>0?(j=M[M.length-1],Be.setTextureUnits(j.state.textureUnits),De===!0&&Qe.setGlobalState(N.clippingPlanes,j.state.camera)):j=null,te.pop(),k=te.length>0?te[te.length-1]:null,ie!==null&&ie.renderEnd()};function xt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ee:Te;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=Ge.update(e),a=e.material;a.visible&&k.push(e,i,a,n,je.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ee:Te;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,je.z,s,t)}}else a.visible&&k.push(e,i,a,n,je.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)xt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),De===!0&&Qe.setGlobalState(N.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new Yt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),u=N.getActiveCubeFace(),d=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(he),ge=N.getClearAlpha(),ge<1&&N.setClearColor(16777215,.5),N.clear(),Ne&&tt.render(n);let f=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),De===!0&&Qe.setGlobalState(N.clippingPlanes,r),wt(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}N.setRenderTarget(s,u,d),N.setClearColor(he,ge),p!==void 0&&(r.viewport=p),N.toneMapping=f}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){ie!==null&&i.isNodeMaterial&&ie.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function Et(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Dt(e,t,n){t.isScene!==!0&&(t=Me);let r=L.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=Ke.getUniforms(e),ie!==null&&e.isNodeMaterial&&ie.build(e,n,s),e.onBeforeCompile(s,N),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Qe.uniform),kt(e,s),r.needsLights=U(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Et(j.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Ot(e,t,n,r,i){let a=L.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Dt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function V(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Bs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t,n,r,i){t.isScene!==!0&&(t=Me),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?N.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:It.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=j.state.lights;if(De===!0&&(Oe===!0||e!==de)){let t=e===de&&r.id===ue;Qe.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Qe.numPlanes||v.numIntersection!==Qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Et(j.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Ot(r,t,i,s,h):Dt(r,t,i),ie&&r.isNodeMaterial&&ie.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(I.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==ue&&(ue=r.id,w=!0),C||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(F,`projectionMatrix`,e.projectionMatrix),E.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(F,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&E.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(F,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&E.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&E.setValue(F,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&E.setValue(F,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){E.setOptional(F,i,`bindMatrix`),E.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(F,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(E.setOptional(F,i,`batchingTexture`),E.setValue(F,`batchingTexture`,i._matricesTexture,Be),E.setOptional(F,i,`batchingIdTexture`),E.setValue(F,`batchingIdTexture`,i._indirectTexture,Be),E.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(F,`batchingColorTexture`,i._colorsTexture,Be));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&nt.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=rl()),w){if(E.setValue(F,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&jt(O,T),a&&r.fog===!0&&qe.refreshFogUniforms(O,a),qe.refreshMaterialUniforms(O,r,ye,ve,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of j.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Bs.upload(F,V(v),O,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Bs.upload(F,V(v),O,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(F,`center`,i.center),E.setValue(F,`modelViewMatrix`,i.modelViewMatrix),E.setValue(F,`normalMatrix`,i.normalMatrix),E.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];B.update(n,S),B.bind(n,S)}}return S}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function U(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),ue=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=ae),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function Mt(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,at.convert(c),at.convert(l),a)}finally{let e=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,at.convert(l),at.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $e(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=at.convert(t.format),_=at.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,oe),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,I.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return We}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}},al=(e=0,t=0,n=0)=>({value:new H(e,t,n)}),ol=(e=0,t=0,n=0)=>({value:new W().setRGB(e,t,n)}),sl=(e=0,t=0,n=0,r=0)=>({value:new qt(e,t,n,r)}),cl={OPAQUE:0,TRANSPARENT:1,SHADOW_ONLY:3},ll={uSceneColor:{value:null},uSceneDepth:{value:null},uDepthP:{value:new qt}},J={uTime:{value:0},uDebug:{value:0},uSunDir:al(0,1,0),uSunColor:ol(1,1,1),uSkyAmb:ol(.2,.3,.5),uGroundAmb:ol(.1,.08,.06),uFogWarm:ol(.7,.6,.5),uFogBlue:ol(.4,.55,.75),uFogA:sl(6e-4,.012,0,1),uFogB:sl(8e-5,6,.35,0),uFogSunTint:ol(1,.9,.75),uNoiseTex:{value:null},uAOTex:{value:null},uAOOn:{value:0},uInvRes:{value:new V(1,1)},uEnvTex:{value:null},uEnvMaxLod:{value:5},uShadowTex:{value:null},uShadowMat:{value:[new $t,new $t,new $t]},uShadowInfo:sl(1/6144,1/2048,.1,0),uShadowTexelW:al(.01,.05,.2),uShadowFarTex:{value:null},uShadowFarMat:{value:new $t},uShadowFarInfo:sl(1/4096,.5,0,0),uCloudShadow:sl(0,0,1/1800,0),uGiTex:{value:null},uGiClamp:{value:new V(0,1)},uGiScale:al(1,1,1),uGiBias:al(0,0,0),uGiOn:{value:0},uLightPos:{value:Array.from({length:8},()=>new qt)},uLightCol:{value:Array.from({length:8},()=>new H)},uLightCount:{value:0},uWind:sl(1,0,.6,0)};function ul(e={}){let t={};for(let e in J)t[e]=J[e];for(let n in e)t[n]=e[n];return t}var dl=`
uniform float uTime;
uniform int uDebug;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyAmb;
uniform vec3 uGroundAmb;
uniform vec3 uFogWarm;
uniform vec3 uFogBlue;
uniform vec4 uFogA;
uniform vec4 uFogB;
uniform vec3 uFogSunTint;
uniform sampler2D uNoiseTex;
uniform sampler2D uAOTex;
uniform float uAOOn;
uniform vec2 uInvRes;
uniform samplerCube uEnvTex;
uniform float uEnvMaxLod;
uniform highp sampler2DShadow uShadowTex;
uniform mat4 uShadowMat[3];
uniform vec4 uShadowInfo;
uniform vec3 uShadowTexelW;
uniform highp sampler2DShadow uShadowFarTex;
uniform mat4 uShadowFarMat;
uniform vec4 uShadowFarInfo;
uniform vec4 uCloudShadow;
uniform highp sampler3D uGiTex;
uniform vec3 uGiScale;
uniform vec2 uGiClamp;
uniform vec3 uGiBias;
uniform float uGiOn;
uniform vec4 uLightPos[8];
uniform vec3 uLightCol[8];
uniform int uLightCount;
uniform vec4 uWind;
vec4 noiseTex(vec2 uv) { return texture(uNoiseTex, uv); }
`,fl=`
#ifndef PI
#define PI 3.141592653589793
#endif
#define sat(x) clamp(x, 0.0, 1.0)
float lum(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash13(vec3 p3) { p3 = fract(p3 * .1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
float remap(float x, float a, float b, float c, float d) { return c + (d - c) * sat((x - a) / (b - a)); }
vec3 triW(vec3 n, float sharp) { vec3 w = pow(abs(n), vec3(sharp)); return w / (w.x + w.y + w.z); }
// Triplanar sampling. A projection whose weight is negligible is not fetched at all (most pixels need one or
// two of the three); gradients are taken up front so mip selection stays valid inside the branches.
// The *G variants take the gradients of p explicitly and may be called from inside a branch.
const float TRI_MIN = 0.03;
vec4 triTexG(sampler2D t, vec3 p, vec3 w, vec3 dx, vec3 dy) {
  vec4 c = vec4(0.0); float sum = 0.0;
  if (w.x > TRI_MIN) { c += textureGrad(t, p.zy, dx.zy, dy.zy) * w.x; sum += w.x; }
  if (w.y > TRI_MIN) { c += textureGrad(t, p.xz, dx.xz, dy.xz) * w.y; sum += w.y; }
  if (w.z > TRI_MIN) { c += textureGrad(t, p.xy, dx.xy, dy.xy) * w.z; sum += w.z; }
  return c / sum;
}
vec4 triTex(sampler2D t, vec3 p, vec3 w) { return triTexG(t, p, w, dFdx(p), dFdy(p)); }
// whiteout-blended triplanar normal mapping, returns a world-space normal
vec3 triNrmG(sampler2D t, vec3 p, vec3 n, vec3 w, float strength, vec3 dx, vec3 dy) {
  vec3 r = vec3(0.0);
  if (w.x > TRI_MIN) { vec3 tx = textureGrad(t, p.zy, dx.zy, dy.zy).xyz * 2.0 - 1.0; tx.xy *= strength; tx = vec3(tx.xy + n.zy, abs(tx.z) * n.x); r += tx.zyx * w.x; }
  if (w.y > TRI_MIN) { vec3 ty = textureGrad(t, p.xz, dx.xz, dy.xz).xyz * 2.0 - 1.0; ty.xy *= strength; ty = vec3(ty.xy + n.xz, abs(ty.z) * n.y); r += ty.xzy * w.y; }
  if (w.z > TRI_MIN) { vec3 tz = textureGrad(t, p.xy, dx.xy, dy.xy).xyz * 2.0 - 1.0; tz.xy *= strength; tz = vec3(tz.xy + n.xy, abs(tz.z) * n.z); r += tz.xyz * w.z; }
  return normalize(r);
}
vec3 triNrm(sampler2D t, vec3 p, vec3 n, vec3 w, float strength) { return triNrmG(t, p, n, w, strength, dFdx(p), dFdy(p)); }
// tangent-space normal applied with screen-space derivatives (no tangent attribute needed)
vec3 uvNrm(vec3 N, vec3 P, vec2 uv, vec3 tn) {
  vec3 dp1 = dFdx(P), dp2 = dFdy(P);
  vec2 duv1 = dFdx(uv), duv2 = dFdy(uv);
  vec3 dp2perp = cross(dp2, N), dp1perp = cross(N, dp1);
  vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;
  vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;
  float invmax = inversesqrt(max(dot(T, T), dot(B, B)) + 1e-20);
  return normalize(T * invmax * tn.x + B * invmax * tn.y + N * tn.z);
}
vec3 blendNrm(vec3 base, vec3 detail) { return normalize(vec3(base.xy + detail.xy, base.z * detail.z)); }
`,pl=`
float pcf9(highp sampler2DShadow tex, vec2 uv, float z, vec2 texel) {
  float s = 0.0;
  for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) s += texture(tex, vec3(uv + vec2(float(i), float(j)) * texel * 1.15, z));
  return s * (1.0 / 9.0);
}
float shadowCascade(int i, vec3 P, vec3 N, float ndl, out float edge) {
  float tw = uShadowTexelW[i];
  vec3 Pb = P + N * tw * (1.2 + 2.6 * (1.0 - ndl)) + uSunDir * tw * 1.2;
  vec4 c = uShadowMat[i] * vec4(Pb, 1.0);
  edge = min(min(c.x, 1.0 - c.x), min(c.y, 1.0 - c.y)) - 0.004;
  if (edge <= 0.0 || c.z <= 0.0 || c.z >= 1.0) { edge = -1.0; return 1.0; }
  vec2 uv = vec2((c.x + float(i)) * (1.0 / 3.0), c.y);
  return pcf9(uShadowTex, uv, c.z, uShadowInfo.xy);
}
float shadowFar(vec3 P, vec3 N, float ndl) {
  if (uShadowFarInfo.z < 0.5) return 1.0;
  float tw = uShadowFarInfo.y;
  vec3 Pb = P + N * tw * (1.0 + 2.0 * (1.0 - ndl)) + uSunDir * tw * 0.8;
  vec4 c = uShadowFarMat * vec4(Pb, 1.0);
  if (c.x <= 0.002 || c.x >= 0.998 || c.y <= 0.002 || c.y >= 0.998 || c.z <= 0.0 || c.z >= 1.0) return 1.0;
  return pcf9(uShadowFarTex, c.xy, c.z, uShadowFarInfo.xx);
}
float sunShadow(vec3 P, vec3 N) {
  if (uShadowInfo.w < 0.5) return 1.0;
  float ndl = sat(dot(N, uSunDir));
  const float FADE = 0.07;
  float e, e2, s, s2;
  s = shadowCascade(0, P, N, ndl, e);
  if (e > 0.0) {
    if (e >= FADE) return s;
    s2 = shadowCascade(1, P, N, ndl, e2);
    if (e2 <= 0.0) s2 = shadowFar(P, N, ndl);
    return mix(s2, s, e / FADE);
  }
  s = shadowCascade(1, P, N, ndl, e);
  if (e > 0.0) {
    if (e >= FADE) return s;
    s2 = shadowCascade(2, P, N, ndl, e2);
    if (e2 <= 0.0) s2 = shadowFar(P, N, ndl);
    return mix(s2, s, e / FADE);
  }
  s = shadowCascade(2, P, N, ndl, e);
  if (e > 0.0) {
    if (e >= FADE) return s;
    return mix(shadowFar(P, N, ndl), s, e / FADE);
  }
  return shadowFar(P, N, ndl);
}
float cloudShadow(vec3 P) {
  if (uCloudShadow.w <= 0.0) return 1.0;
  // project along the sun direction onto the cloud layer so shadows slide correctly over relief
  vec2 uv = (P.xz - uSunDir.xz * (P.y / max(uSunDir.y, 0.1))) * uCloudShadow.z + uCloudShadow.xy;
  float c = texture(uNoiseTex, uv).r;
  return 1.0 - uCloudShadow.w * smoothstep(0.52, 0.78, c);
}
`,ml=`
// Aerial perspective: warm low-lying dust haze (exponential in height) + thin blue air-light.
vec3 applyFog(vec3 col, vec3 P) {
  vec3 v = P - cameraPosition;
  float d = length(v);
  vec3 dir = v / max(d, 1e-4);
  float dd = max(d - uFogA.z, 0.0);
  float k = uFogA.y;
  float t = k * dir.y * dd;
  float integ = abs(t) > 1e-4 ? (1.0 - exp(-t)) / t : 1.0;
  float odHaze = uFogA.x * exp(-k * max(cameraPosition.y, 0.0)) * dd * integ;
  float odAir = uFogB.x * dd;
  float tHaze = exp(-odHaze), tAir = exp(-odAir);
  float sunAmt = pow(sat(dot(dir, uSunDir)), uFogB.y) * uFogB.z;
  vec3 warm = uFogWarm * (1.0 + sunAmt * uFogSunTint);
  vec3 c = col * tHaze + warm * (1.0 - tHaze);
  c = c * tAir + uFogBlue * (1.0 - tAir);
  return mix(col, c, uFogA.w);
}
`,hl=`
struct Surf {
  vec3 albedo;
  vec3 N;       // shading normal (world)
  vec3 Ng;      // geometric normal (world)
  float rough;
  float metal;
  float ao;
  vec3 emissive;
  float sss;    // translucency 0..1 (foliage, cloth)
  float alpha;
  float shadowMul;
  float spec;   // dielectric specular scale
};
vec3 envBRDF(vec3 F0, float rough, float NdV) {
  const vec4 c0 = vec4(-1.0, -0.0275, -0.572, 0.022);
  const vec4 c1 = vec4(1.0, 0.0425, 1.04, -0.04);
  vec4 r = rough * c0 + c1;
  float a004 = min(r.x * r.x, exp2(-9.28 * NdV)) * r.x + r.y;
  vec2 AB = vec2(-1.04, 1.04) * a004 + r.zw;
  return F0 * AB.x + AB.y;
}
vec3 shade(Surf s, vec3 P, vec3 V) {
  vec3 N = s.N;
  float NdV = max(dot(N, V), 1e-3);
  vec3 F0 = mix(vec3(0.04 * s.spec), s.albedo, s.metal);
  vec3 diffC = s.albedo * (1.0 - s.metal);
  float rough = clamp(s.rough, 0.06, 1.0);
  float a = rough * rough;
  vec2 ssa = vec2(1.0);
  if (uAOOn > 0.5) ssa = texture(uAOTex, gl_FragCoord.xy * uInvRes).rg;
  // ---- sun
  float ndl = dot(N, uSunDir);
  float ndlc = sat(ndl);
  float shadow = 1.0;
  vec3 col = vec3(0.0);
  if (ndlc > 0.0 || s.sss > 0.0) {
    shadow = sunShadow(P, s.Ng) * cloudShadow(P) * s.shadowMul;
    shadow = min(shadow, ssa.g);
  }
  if (ndlc > 0.0 && shadow > 0.0) {
    vec3 H = normalize(V + uSunDir);
    float NdH = sat(dot(N, H)), VdH = sat(dot(V, H));
    float a2 = a * a;
    float dd = NdH * NdH * (a2 - 1.0) + 1.0;
    float D = a2 / (dd * dd);                      // GGX * PI
    float k = a * 0.5;
    float Vis = 0.25 / ((ndlc * (1.0 - k) + k) * (NdV * (1.0 - k) + k));
    vec3 F = F0 + (1.0 - F0) * pow(1.0 - VdH, 5.0);
    col += (diffC + D * Vis * F) * uSunColor * (ndlc * shadow);
  }
  if (s.sss > 0.0) {
    float back = sat(-ndl) * 0.75 + 0.25;
    float vl = pow(sat(dot(-V, uSunDir)), 3.0) * 0.6 + 0.4;
    col += diffC * uSunColor * (s.sss * back * vl * shadow);
  }
  // ---- ambient: hemisphere outdoors, baked irradiance volume where one is bound
  float up = N.y * 0.5 + 0.5;
  vec3 amb = uSkyAmb * up + uGroundAmb * (1.0 - up);
  float skyOcc = 1.0;
  if (uGiOn > 0.5) {
    vec3 uvw = (P + s.Ng * 0.45) * uGiScale + uGiBias;
    vec3 ed = min(uvw, 1.0 - uvw) / (uGiScale * 4.0);
    float w = sat(min(ed.x, min(ed.y, ed.z)));
    if (w > 0.0) {
      // three slabs side by side along X in one atlas: A | B | C
      float ux = clamp(uvw.x, uGiClamp.x, uGiClamp.y) * (1.0 / 3.0);
      vec4 ga = texture(uGiTex, vec3(ux, uvw.yz));
      vec3 gb = texture(uGiTex, vec3(ux + 1.0 / 3.0, uvw.yz)).xyz;
      vec3 gc = texture(uGiTex, vec3(ux + 2.0 / 3.0, uvw.yz)).xyz;
      float gl = dot(ga.rgb, vec3(0.3, 0.6, 0.1)) + 1e-5;
      vec3 gBounce = ga.rgb * max(0.0, 1.0 + (2.0 / 3.0) * dot(gb, N) / gl);
      float gSky = max(0.0, ga.a + (2.0 / 3.0) * dot(gc, N));
      vec3 gi = uSkyAmb * gSky + uSunColor * gBounce + vec3(0.022, 0.016, 0.011);   // deep-cave floor so nothing is ever pure black
      amb = mix(amb, gi, w);
      skyOcc = mix(1.0, sat(gSky * 1.5), w);
    }
  }
  float ao = s.ao * ssa.r;
  col += diffC * amb * ao;
  // ---- specular environment
  vec3 R = reflect(-V, N);
  vec3 env = textureLod(uEnvTex, R, rough * uEnvMaxLod).rgb;
  env = mix(amb, env, skyOcc);
  float specOcc = sat(pow(NdV + ao, exp2(-16.0 * rough - 1.0)) - 1.0 + ao);
  col += env * envBRDF(F0, rough, NdV) * specOcc;
  // ---- local lights (lamps)
  for (int i = 0; i < 8; i++) {
    if (i >= uLightCount) break;
    vec3 Lv = uLightPos[i].xyz - P;
    float d2 = dot(Lv, Lv);
    float r = uLightPos[i].w;
    float f = d2 / (r * r);
    if (f >= 1.0) continue;
    float att = (1.0 - f * f); att = att * att / (d2 + 0.02);
    vec3 L = Lv * inversesqrt(d2);
    float nl = sat(dot(N, L)) * 0.9 + 0.1 * sat(dot(N, L) * 0.5 + 0.5);
    vec3 H = normalize(V + L);
    float NdH = sat(dot(N, H));
    float a2 = a * a; float dd = NdH * NdH * (a2 - 1.0) + 1.0;
    float D = a2 / (dd * dd);
    vec3 F = F0 + (1.0 - F0) * pow(1.0 - sat(dot(V, H)), 5.0);
    col += (diffC + min(D, 40.0) * 0.25 * F) * uLightCol[i] * (nl * att * mix(1.0, ao, 0.6));
  }
  if (uDebug == 1) return s.albedo;
  if (uDebug == 2) return N * 0.5 + 0.5;
  if (uDebug == 3) return vec3(shadow);
  if (uDebug == 4) return vec3(ao);
  if (uDebug == 5) return vec3(ndlc);
  if (uDebug == 6) return amb;
  return col + s.emissive;
}
`,gl=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,_l=`
uniform sampler2D uDepth;
uniform vec4 uDepthP; // near, far, reversed, _
float linDepth(float d) {
  float n = uDepthP.x, f = uDepthP.y;
  if (uDepthP.z > 0.5) return (f * n / (f - n)) / (d + n / (f - n));
  float z = d * 2.0 - 1.0;
  return 2.0 * n * f / (f + n - z * (f - n));
}
float zAt(vec2 uv) { return linDepth(textureLod(uDepth, uv, 0.0).r); }
`;function vl(e,t,n,r={}){return new Wi({name:e,vertexShader:gl,fragmentShader:t,uniforms:n,defines:r,depthTest:!1,depthWrite:!1})}function yl(){return vl(`copy`,`
uniform sampler2D uTex; varying vec2 vUv;
void main() { gl_FragColor = texture(uTex, vUv); }`,{uTex:{value:null}})}function bl(e){return vl(`ao`,`
${fl}
${_l}
varying vec2 vUv;
uniform vec2 uTanHalf;
uniform vec2 uTexel;
uniform vec3 uSunV;
uniform float uIntensity;
uniform float uContact;
vec3 posAt(vec2 uv) { float z = zAt(uv); return vec3((uv * 2.0 - 1.0) * uTanHalf * z, -z); }
void main() {
  float z = zAt(vUv);
  if (z > uDepthP.y * 0.8) { gl_FragColor = vec4(1.0); return; }
  vec3 P = vec3((vUv * 2.0 - 1.0) * uTanHalf * z, -z);
  vec3 Pr = posAt(vUv + vec2(uTexel.x, 0.0)), Pl = posAt(vUv - vec2(uTexel.x, 0.0));
  vec3 Pu = posAt(vUv + vec2(0.0, uTexel.y)), Pd = posAt(vUv - vec2(0.0, uTexel.y));
  vec3 dx = abs(Pr.z - P.z) < abs(P.z - Pl.z) ? Pr - P : P - Pl;
  vec3 dy = abs(Pu.z - P.z) < abs(P.z - Pd.z) ? Pu - P : P - Pd;
  vec3 N = normalize(cross(dx, dy));
  float n = ign(gl_FragCoord.xy);
  // two radii: tight contact occlusion + broad cavity occlusion
  float R = max(1.1, z * 0.022);
  float occ = 0.0;
  for (int i = 0; i < AO_SAMPLES; i++) {
    float fi = (float(i) + 0.5) / float(AO_SAMPLES);
    float ang = (float(i) + n) * 2.39996323;
    float rr = fi * fi * 0.92 + 0.08;
    vec2 o = vec2(cos(ang), sin(ang)) * rr * R / (2.0 * z * uTanHalf);
    vec3 S = posAt(vUv + o);
    vec3 v = S - P;
    float d2 = dot(v, v);
    float vn = dot(v, N) * inversesqrt(d2 + 1e-6);
    occ += max(vn - 0.10, 0.0) * sat(1.0 - d2 / (R * R)) * 1.6;
  }
  float ao = sat(1.0 - uIntensity * occ / float(AO_SAMPLES));
  ao = ao * ao * (3.0 - 2.0 * ao) * 0.35 + ao * 0.65;
  // screen-space contact shadow toward the sun
  float cs = 1.0;
  if (uContact > 0.0 && dot(N, uSunV) > 0.02) {
    float len = clamp(z * 0.035, 0.22, 6.0);
    vec3 st = uSunV * (len / 9.0);
    vec3 Q = P + N * (0.004 * z + 0.004) + st * (0.3 + n);
    for (int i = 0; i < 9; i++) {
      Q += st;
      vec2 uvq = (Q.xy / (-Q.z * uTanHalf)) * 0.5 + 0.5;
      if (uvq.x <= 0.0 || uvq.x >= 1.0 || uvq.y <= 0.0 || uvq.y >= 1.0) break;
      float dz = -Q.z - zAt(uvq);
      if (dz > 0.012 * len + 0.0015 * z && dz < len * 0.45) { cs = 0.0; break; }
    }
    cs = mix(1.0, cs, uContact);
  }
  gl_FragColor = vec4(ao, cs, 0.0, 1.0);
}`,{uDepth:{value:null},uDepthP:{value:new qt},uTanHalf:{value:new V},uTexel:{value:new V},uSunV:{value:new H},uIntensity:{value:1},uContact:{value:1}},{AO_SAMPLES:e})}function xl(){return vl(`aoblur`,`
${_l}
varying vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uDir;
void main() {
  float zc = zAt(vUv);
  vec2 acc = vec2(0.0); float ws = 0.0;
  for (int i = -3; i <= 3; i++) {
    vec2 uv = vUv + uDir * float(i);
    float zs = zAt(uv);
    float wd = exp(-abs(zs - zc) / (0.012 * zc + 0.02) * 1.5);
    float wg = exp(-float(i * i) / 6.0);
    acc += texture(uTex, uv).rg * (wd * wg); ws += wd * wg;
  }
  gl_FragColor = vec4(acc / max(ws, 1e-4), 0.0, 1.0);
}`,{uDepth:{value:null},uDepthP:{value:new qt},uTex:{value:null},uDir:{value:new V}})}function Sl(){return vl(`bloomdown`,`
varying vec2 vUv; uniform sampler2D uTex; uniform vec2 uTexel; uniform float uFirst;
void main() {
  vec3 c = texture(uTex, vUv).rgb * 4.0;
  c += texture(uTex, vUv + uTexel * vec2(-1.0, -1.0)).rgb;
  c += texture(uTex, vUv + uTexel * vec2(1.0, -1.0)).rgb;
  c += texture(uTex, vUv + uTexel * vec2(-1.0, 1.0)).rgb;
  c += texture(uTex, vUv + uTexel * vec2(1.0, 1.0)).rgb;
  c *= 0.125;
  if (uFirst > 0.5) { c = min(c, vec3(24.0)); float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); c *= 1.0 / (1.0 + l * 0.02); }
  gl_FragColor = vec4(c, 1.0);
}`,{uTex:{value:null},uTexel:{value:new V},uFirst:{value:0}})}function Cl(){return vl(`bloomup`,`
varying vec2 vUv; uniform sampler2D uTex; uniform sampler2D uAdd; uniform vec2 uTexel; uniform float uW;
void main() {
  vec3 c = texture(uTex, vUv + uTexel * vec2(-2.0, 0.0)).rgb + texture(uTex, vUv + uTexel * vec2(2.0, 0.0)).rgb
         + texture(uTex, vUv + uTexel * vec2(0.0, -2.0)).rgb + texture(uTex, vUv + uTexel * vec2(0.0, 2.0)).rgb;
  c += 2.0 * (texture(uTex, vUv + uTexel * vec2(-1.0, 1.0)).rgb + texture(uTex, vUv + uTexel * vec2(1.0, 1.0)).rgb
         + texture(uTex, vUv + uTexel * vec2(-1.0, -1.0)).rgb + texture(uTex, vUv + uTexel * vec2(1.0, -1.0)).rgb);
  c *= 1.0 / 12.0;
  gl_FragColor = vec4(c * uW + texture(uAdd, vUv).rgb, 1.0);
}`,{uTex:{value:null},uAdd:{value:null},uTexel:{value:new V},uW:{value:1}})}function wl(){return vl(`lum`,`
varying vec2 vUv; uniform sampler2D uTex; uniform sampler2D uPrev; uniform float uRate;
void main() {
  float s = 0.0, ws = 0.0;
  for (int j = 0; j < 6; j++) for (int i = 0; i < 6; i++) {
    vec2 uv = (vec2(float(i), float(j)) + 0.5) / 6.0;
    vec2 c = uv - 0.5; float w = 1.0 - dot(c, c) * 1.6;
    vec3 col = texture(uTex, uv).rgb;
    s += log(max(dot(col, vec3(0.2126, 0.7152, 0.0722)), 2e-4)) * w; ws += w;
  }
  float cur = exp(s / ws);
  float prev = texture(uPrev, vec2(0.5)).r;
  float v = uRate >= 1.0 ? cur : mix(prev, cur, uRate);
  gl_FragColor = vec4(v, v, v, 1.0);
}`,{uTex:{value:null},uPrev:{value:null},uRate:{value:1}})}function Tl(){return vl(`composite`,`
${fl}
varying vec2 vUv;
uniform sampler2D uScene;
uniform sampler2D uBloom;
uniform sampler2D uLum;
uniform float uExposure, uBloomAmt, uAuto, uKey, uAutoPow, uAutoMin, uAutoMax;
uniform vec3 uSlope, uOffset, uPower;
uniform float uSatur, uVignette, uFade;
uniform vec3 uShadowTint, uHighTint, uFadeColor;
uniform vec4 uCurve; uniform vec2 uTone;
uniform float uAspect;
vec3 agxContrast(vec3 x) {
  vec3 x2 = x * x; vec3 x4 = x2 * x2;
  return 15.5 * x4 * x2 - 40.14 * x4 * x + 31.96 * x4 - 6.868 * x2 * x + 0.4298 * x2 + 0.1191 * x - 0.00232;
}
vec3 agx(vec3 v) {
  const mat3 m = mat3(0.842479062253094, 0.0423282422610123, 0.0423756549057051, 0.0784335999999992, 0.878468636469772, 0.0784336, 0.0792237451477643, 0.0791661274605434, 0.879142973793104);
  const float minEv = -12.47393, maxEv = 4.026069;
  v = m * v;
  v = clamp(log2(max(v, 1e-10)), minEv, maxEv);
  v = (v - minEv) / (maxEv - minEv);
  return agxContrast(v);
}
vec3 agxOutset(vec3 v) {
  const mat3 mi = mat3(1.19687900512017, -0.0528968517574562, -0.0529716355144438, -0.0980208811401368, 1.15190312990417, -0.0980434501171241, -0.0990297440797205, -0.0989611768448433, 1.15107367264116);
  return mi * v;
}
// Uchimura "Gran Turismo" curve: explicit control over white point, contrast and toe
vec3 uchimura(vec3 x, float P, float a, float m, float l, float c, float b) {
  float l0 = ((P - m) * l) / a;
  float S0 = m + l0, S1 = m + a * l0, C2 = (a * P) / (P - S1), CP = -C2 / P;
  vec3 w0 = 1.0 - smoothstep(vec3(0.0), vec3(m), x);
  vec3 w2 = step(vec3(m + l0), x);
  vec3 w1 = 1.0 - w0 - w2;
  vec3 T = m * pow(max(x, 0.0) / m, vec3(c)) + b;
  vec3 S = P - (P - S1) * exp(CP * (x - S0));
  vec3 L = m + a * (x - m);
  return T * w0 + L * w1 + S * w2;
}
vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(max(c, 0.0), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
void main() {
  vec3 c = texture(uScene, vUv).rgb;
  vec3 b = texture(uBloom, vUv).rgb;
  c = mix(c, b, uBloomAmt);
  float e = uExposure;
  if (uAuto > 0.001) {
    float avg = texture(uLum, vec2(0.5)).r;
    e *= mix(1.0, clamp(pow(uKey / max(avg, 1e-4), uAutoPow), uAutoMin, uAutoMax), uAuto);
  }
  c *= e;
  if (uTone.x > 0.5) {
    c = agx(c);
    c = pow(max(c * uSlope + uOffset, 0.0), uPower);
    float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
    c = l + (c - l) * uSatur;
    c = sat(agxOutset(c));
  } else {
    // keep hue: curve the luminance-ish max channel blend, then restore chroma
    vec3 t = uchimura(c, 1.0, uCurve.x, uCurve.y, uCurve.z, uCurve.w, 0.0);
    float l = dot(t, vec3(0.2126, 0.7152, 0.0722));
    t = l + (t - l) * uSatur;
    c = toSRGB(sat(t * uSlope + uOffset));
    c = pow(c, uPower);
  }
  // split toning (display-referred)
  float ll = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c *= mix(uShadowTint, uHighTint, smoothstep(0.0, 1.0, ll));
  // vignette
  vec2 q = vUv - 0.5;
  float vg = smoothstep(0.35, 1.05, length(q) * 1.25);
  c *= 1.0 - uVignette * vg * vg;
  c = mix(c, uFadeColor, uFade);
  gl_FragColor = vec4(sat(c), dot(sat(c), vec3(0.299, 0.587, 0.114)));
}`,{uScene:{value:null},uBloom:{value:null},uLum:{value:null},uExposure:{value:1},uBloomAmt:{value:.05},uAuto:{value:0},uKey:{value:.5},uAutoPow:{value:.75},uAutoMin:{value:.85},uAutoMax:{value:5},uSlope:{value:new H(1,1,1)},uOffset:{value:new H(0,0,0)},uPower:{value:new H(1,1,1)},uCurve:{value:new qt(1.08,.22,.4,1.36)},uTone:{value:new V(0,0)},uSatur:{value:1},uVignette:{value:.22},uFade:{value:0},uFadeColor:{value:new W(0,0,0)},uShadowTint:{value:new H(1,1,1)},uHighTint:{value:new H(1,1,1)},uAspect:{value:1}})}function El(){return vl(`final`,`
${fl}
varying vec2 vUv;
uniform sampler2D uTex;
uniform vec2 uTexel;
uniform float uSharpen, uGrain, uTime, uFxaa;
void main() {
  vec4 M4 = texture(uTex, vUv);
  vec3 col = M4.rgb;
  float lM = M4.a;
  float lN = texture(uTex, vUv + vec2(0.0, uTexel.y)).a;
  float lS = texture(uTex, vUv - vec2(0.0, uTexel.y)).a;
  float lE = texture(uTex, vUv + vec2(uTexel.x, 0.0)).a;
  float lW = texture(uTex, vUv - vec2(uTexel.x, 0.0)).a;
  float lMin = min(lM, min(min(lN, lS), min(lE, lW)));
  float lMax = max(lM, max(max(lN, lS), max(lE, lW)));
  float range = lMax - lMin;
  if (uFxaa > 0.5 && range > max(0.0312, lMax * 0.125)) {
    float lNW = texture(uTex, vUv + uTexel * vec2(-1.0, 1.0)).a, lNE = texture(uTex, vUv + uTexel * vec2(1.0, 1.0)).a;
    float lSW = texture(uTex, vUv + uTexel * vec2(-1.0, -1.0)).a, lSE = texture(uTex, vUv + uTexel * vec2(1.0, -1.0)).a;
    vec2 dir = vec2(-((lNW + lNE) - (lSW + lSE)), ((lNW + lSW) - (lNE + lSE)));
    float dirReduce = max((lNW + lNE + lSW + lSE) * 0.03125, 1.0 / 128.0);
    float rcp = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = clamp(dir * rcp, vec2(-8.0), vec2(8.0)) * uTexel;
    vec4 A = 0.5 * (texture(uTex, vUv + dir * (1.0 / 3.0 - 0.5)) + texture(uTex, vUv + dir * (2.0 / 3.0 - 0.5)));
    vec4 B = A * 0.5 + 0.25 * (texture(uTex, vUv + dir * -0.5) + texture(uTex, vUv + dir * 0.5));
    col = (B.a < lMin || B.a > lMax) ? A.rgb : B.rgb;
  } else if (uSharpen > 0.0) {
    vec3 n = texture(uTex, vUv + vec2(0.0, uTexel.y)).rgb + texture(uTex, vUv - vec2(0.0, uTexel.y)).rgb
           + texture(uTex, vUv + vec2(uTexel.x, 0.0)).rgb + texture(uTex, vUv - vec2(uTexel.x, 0.0)).rgb;
    float amt = uSharpen * sat(1.0 - range * 4.0);
    col = sat(col + (col * 4.0 - n) * amt * 0.25);
  }
  float g = hash13(vec3(gl_FragCoord.xy, floor(uTime * 24.0))) - 0.5;
  float lumc = dot(col, vec3(0.299, 0.587, 0.114));
  col += g * uGrain * (1.0 - lumc * 0.6);
  col += (hash12(gl_FragCoord.xy + 17.0) - 0.5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}`,{uTex:{value:null},uTexel:{value:new V},uSharpen:{value:.35},uGrain:{value:.018},uTime:{value:0},uFxaa:{value:1}})}var Dl=new Uint8Array(512);(function(){let e=2654435769,t=()=>(e^=e<<13,e>>>=0,e^=e>>>17,e^=e<<5,e>>>=0,e/4294967296),n=new Uint8Array(256);for(let e=0;e<256;e++)n[e]=e;for(let e=255;e>0;e--){let r=t()*(e+1)|0,i=n[e];n[e]=n[r],n[r]=i}for(let e=0;e<512;e++)Dl[e]=n[e&255]})();function Ol(e){let t=e>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function kl(e,t,n){let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,2147483647);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}function Al(e,t){return kl(e,t,1013)}var jl=e=>e*e*e*(e*(e*6-15)+10);function Ml(e,t,n,r){e&=15;let i=e<8?t:n,a=e<4?n:e===12||e===14?t:r;return(e&1?-i:i)+(e&2?-a:a)}function Nl(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=Math.floor(n),o=r&255,s=i&255,c=a&255;e-=r,t-=i,n-=a;let l=jl(e),u=jl(t),d=jl(n),f=Dl[o]+s,p=Dl[f]+c,m=Dl[f+1]+c,h=Dl[o+1]+s,g=Dl[h]+c,_=Dl[h+1]+c,v=(e,t,n)=>e+(t-e)*n;return v(v(v(Ml(Dl[p],e,t,n),Ml(Dl[g],e-1,t,n),l),v(Ml(Dl[m],e,t-1,n),Ml(Dl[_],e-1,t-1,n),l),u),v(v(Ml(Dl[p+1],e,t,n-1),Ml(Dl[g+1],e-1,t,n-1),l),v(Ml(Dl[m+1],e,t-1,n-1),Ml(Dl[_+1],e-1,t-1,n-1),l),u),d)}function Pl(e,t){return Nl(e,t,.371)}function Fl(e,t,n,r=5,i=2.03,a=.5){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*Nl(e*s+u*17.13,t*s-u*9.7,n*s+u*3.31),l+=o,o*=a,s*=i;return c/l}function Il(e,t,n=5,r=2.03,i=.5){return Fl(e,t,.371,n,r,i)}function Ll(e,t,n,r=5,i=2.07,a=.5){let o=.5,s=1,c=0,l=0,u=1;for(let d=0;d<r;d++){let r=1-Math.abs(Nl(e*s+d*31.7,t*s+d*5.3,n*s-d*11.9));r*=r,c+=o*r*u,l+=o,u=Math.min(1,r*1.6),o*=a,s*=i}return c/l}function Rl(e,t,n,r=4,i=2.1,a=.5){let o=.5,s=1,c=0,l=0;for(let u=0;u<r;u++)c+=o*Math.abs(Nl(e*s+u*13.1,t*s+u*7.7,n*s+u*23.3)),l+=o,o*=a,s*=i;return c/l}var zl={f1:0,f2:0,id:0,cx:0,cy:0,cz:0};function Bl(e,t,n,r=1){let i=Math.floor(e),a=Math.floor(t),o=Math.floor(n),s=1e9,c=1e9,l=0,u=0,d=0,f=0;for(let p=-1;p<=1;p++)for(let m=-1;m<=1;m++)for(let h=-1;h<=1;h++){let g=i+h,_=a+m,v=o+p,y=g+.5+(kl(g,_,v)-.5)*r,b=_+.5+(kl(g+127,_-61,v+17)-.5)*r,x=v+.5+(kl(g-53,_+211,v-89)-.5)*r,S=y-e,C=b-t,w=x-n,T=S*S+C*C+w*w;T<s?(c=s,s=T,l=kl(g+7,_+13,v+29),u=y,d=b,f=x):T<c&&(c=T)}return zl.f1=Math.sqrt(s),zl.f2=Math.sqrt(c),zl.id=l,zl.cx=u,zl.cy=d,zl.cz=f,zl}function Vl(e,t,n=1){let r=Math.floor(e),i=Math.floor(t),a=1e9,o=1e9,s=0,c=0,l=0;for(let u=-1;u<=1;u++)for(let d=-1;d<=1;d++){let f=r+d,p=i+u,m=f+.5+(Al(f,p)-.5)*n,h=p+.5+(Al(f+127,p-61)-.5)*n,g=m-e,_=h-t,v=g*g+_*_;v<a?(o=a,a=v,s=Al(f+7,p+13),c=m,l=h):v<o&&(o=v)}return zl.f1=Math.sqrt(a),zl.f2=Math.sqrt(o),zl.id=s,zl.cx=c,zl.cy=l,zl.cz=0,zl}var Hl=e=>e<0?0:e>1?1:e,Ul=(e,t,n)=>e+(t-e)*n,Y=(e,t,n)=>{let r=Hl((n-e)/(t-e));return r*r*(3-2*r)},Wl=(e,t,n)=>{let r=Math.max(n-Math.abs(e-t),0)/n;return Math.min(e,t)-r*r*n*.25},Gl=(e,t,n)=>-Wl(-e,-t,n);function Kl(e,t,n,r,i,a){let o=Math.sqrt((e/r)**2+(t/i)**2+(n/a)**2),s=Math.sqrt((e/(r*r))**2+(t/(i*i))**2+(n/(a*a))**2);return s<1e-9?-Math.min(r,i,a):o*(o-1)/s}function ql(e,t,n,r,i,a){let o=Math.abs(e)-r,s=Math.abs(t)-i,c=Math.abs(n)-a,l=Math.max(o,0),u=Math.max(s,0),d=Math.max(c,0);return Math.sqrt(l*l+u*u+d*d)+Math.min(Math.max(o,s,c),0)}function Jl(e,t,n,r,i,a,o){return ql(e,t,n,r-o,i-o,a-o)-o}function Yl(e,t,n,r,i,a,o,s,c,l){let u=e-r,d=t-i,f=n-a,p=o-r,m=s-i,h=c-a,g=Hl((u*p+d*m+f*h)/(p*p+m*m+h*h)),_=u-p*g,v=d-m*g,y=f-h*g;return Math.sqrt(_*_+v*v+y*y)-l}function Xl(e,t,n,r,i,a,o,s,c,l,u){let d=e-r,f=t-i,p=n-a,m=o-r,h=s-i,g=c-a,_=Hl((d*m+f*h+p*g)/(m*m+h*h+g*g)),v=d-m*_,y=f-h*_,b=p-g*_;return Math.sqrt(v*v+y*y+b*b)-(l+(u-l)*_)}var Zl=`./assets/`,Ql=new Map,$l=[],eu=8;function tu(e){eu=e}var nu=new ka;nu.setOptions({imageOrientation:`flipY`,premultiplyAlpha:`none`,colorSpaceConversion:`none`});function ru(n,{srgb:r=!1,repeat:i=!0,aniso:a=eu,mip:s=!0}={}){let l=n+`|`+r;if(Ql.has(l))return Ql.get(l);let u=new Kt;u.colorSpace=r?ze:``,u.wrapS=u.wrapT=i?e:t,u.anisotropy=a,u.flipY=!1,u.generateMipmaps=s,u.minFilter=s?c:o,u.magFilter=o;let d=new Promise(e=>{nu.load(Zl+n,t=>{u.image=t,u.needsUpdate=!0,e(u)},void 0,t=>{console.error(`texture failed`,n,t),e(u)})});return $l.push(d),Ql.set(l,u),u}var iu=new Map;function au(e){if(iu.has(e))return iu.get(e);let t={diff:ru(`textures/${e}/diff.jpg`,{srgb:!0}),nor:ru(`textures/${e}/nor.jpg`),arm:ru(`textures/${e}/arm.jpg`)};return iu.set(e,t),t}function ou(e){return $l.push(e),e}async function su(e){let t=0;for(;t<$l.length;){let n=$l.length,r=0;await Promise.all($l.slice(t,n).map(n=>n.then(()=>{r++,e?.((t+r)/$l.length)}))),t=n}}var cu={Float32Array,Uint32Array,Uint16Array,Uint8Array,Int8Array,Int16Array};async function lu(e){let t=await fetch(`./assets/gen/`+e+`.bin`);if(!t.ok)throw Error(`missing baked asset `+e);let n=await t.arrayBuffer(),r=new DataView(n);if(r.getUint32(0,!0)!==827146828)throw Error(`bad bin `+e);let i=r.getUint32(4,!0),a=JSON.parse(new TextDecoder().decode(new Uint8Array(n,8,i))),o=8+i,s={};for(let[e,t]of Object.entries(a.buffers))s[e]=new cu[t.type](n,o+t.offset,t.length);return{meta:a,buffers:s}}function uu(e){let t=new Ar,n=e.buffers;t.setAttribute(`position`,new hr(n.position,3)),t.setAttribute(`normal`,new hr(n.normal,4,!0)),n.color&&t.setAttribute(`color`,new hr(n.color,4,!0)),n.uv&&t.setAttribute(`uv`,new hr(n.uv,2)),t.setIndex(new hr(n.index,1));let r=e.meta.bmin,i=e.meta.bmax;return t.boundingBox=new Zn(new H(...r),new H(...i)),t.boundingSphere=new Sr,t.boundingBox.getBoundingSphere(t.boundingSphere),t}function du(e){let[n,r,i]=e.meta.dims,{A:a,B:s,C:c}=e.buffers,l=new Float32Array(n*3*r*i*4);for(let e=0;e<i;e++)for(let t=0;t<r;t++){let i=(t+r*e)*n*4,o=(t+r*e)*n*3*4;l.set(a.subarray(i,i+n*4),o),l.set(s.subarray(i,i+n*4),o+n*4),l.set(c.subarray(i,i+n*4),o+n*8)}let u=new Qt(l,n*3,r,i);u.format=w,u.type=h,u.internalFormat=`RGBA16F`,u.minFilter=u.magFilter=o,u.wrapS=u.wrapT=u.wrapR=t,u.unpackAlignment=1,u.needsUpdate=!0;let d=e.meta.cell,f=e.meta.box;return{tex:u,clamp:new V(.5/n,1-.5/n),scale:new H(1/(d*n),1/(d*r),1/(d*i)),bias:new H(.5/n-f[0]/(d*n),.5/r-f[1]/(d*r),.5/i-f[2]/(d*i)),box:f}}function fu(t){let[n,r,i]=t.meta.dims,a=new Qt(t.buffers.data,n,r,i);return a.format=w,a.type=l,a.minFilter=c,a.magFilter=o,a.generateMipmaps=!0,a.wrapS=a.wrapT=a.wrapR=e,a.unpackAlignment=1,a.needsUpdate=!0,a}function pu(t=256){let n=new Uint8Array(t*t*4),r=(e,t,n)=>{let r=t/8,i=n/8;return(1-r)*(1-i)*e(t,n)+r*(1-i)*e(t-8,n)+(1-r)*i*e(t,n-8)+r*i*e(t-8,n-8)};for(let e=0;e<t;e++)for(let i=0;i<t;i++){let a=i/t*8,o=e/t*8,s=(i+e*t)*4;n[s]=Math.max(0,Math.min(255,(r((e,t)=>Il(e,t,5),a,o)*.9+.5)*255)),n[s+1]=Math.max(0,Math.min(255,(r((e,t)=>Il(e*2.1+40,t*2.1-17,4),a,o)*.9+.5)*255)),n[s+2]=Math.max(0,Math.min(255,r((e,t)=>Vl(e*1.5,t*1.5).f1,a,o)*255)),n[s+3]=Math.max(0,Math.min(255,(r((e,t)=>Pl(e*3.1,t*3.1)*.7+Pl(e*7.3+5,t*7.3)*.3,a,o)*.5+.5)*255))}let i=new ni(n,t,t,w);return i.wrapS=i.wrapT=e,i.minFilter=c,i.magFilter=o,i.generateMipmaps=!0,i.needsUpdate=!0,i}var mu={low:{name:`low`,maxH:810,msaa:0,shadowRes:1024,shadowFarRes:2048,ao:!1,aoSamples:6,bloomLevels:5,aniso:4,cascades:[11,42,150],density:.55},medium:{name:`medium`,maxH:1080,msaa:4,shadowRes:2048,shadowFarRes:4096,ao:!0,aoSamples:9,bloomLevels:6,aniso:8,cascades:[14,56,230],density:1},high:{name:`high`,maxH:1700,msaa:4,shadowRes:3072,shadowFarRes:8192,ao:!0,aoSamples:14,bloomLevels:6,aniso:16,cascades:[16,64,260],density:1.3}},hu=cl.OPAQUE,gu=cl.TRANSPARENT,_u=cl.SHADOW_ONLY,vu=class{constructor(e,t=`medium`){this.canvas=e;let n=this.renderer=new il({canvas:e,antialias:!1,alpha:!1,stencil:!1,depth:!1,powerPreference:`high-performance`,reversedDepthBuffer:!0,preserveDrawingBuffer:!1});n.outputColorSpace=ze,n.toneMapping=0,n.info.autoReset=!1,n.setClearColor(0,1),this.rev=n.capabilities.reversedDepthBuffer===!0,this.gpu=(()=>{let e=n.getContext(),t=e.getExtension(`WEBGL_debug_renderer_info`);return t?e.getParameter(t.UNMASKED_RENDERER_WEBGL):`unknown`})(),this.q=mu[t]||mu.medium,tu(Math.min(this.q.aniso,n.capabilities.getMaxAnisotropy()));let r=new Ar;r.setAttribute(`position`,new hr(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),r.setAttribute(`uv`,new hr(new Float32Array([0,0,2,0,0,2]),2)),this._fsMesh=new G(r,null),this._fsMesh.frustumCulled=!1,this._fsScene=new In,this._fsScene.add(this._fsMesh),this._fsCam=new Ea(-1,1,1,-1,0,1),this.copyMat=yl(),this.aoMat=bl(this.q.aoSamples),this.aoBlurMat=xl(),this.bloomDown=Sl(),this.bloomUp=Cl(),this.lumMat=wl(),this.compMat=Tl(),this.finalMat=El(),this.grade=this.compMat.uniforms,this.final=this.finalMat.uniforms,this.w=0,this.h=0,this.time=0,this.frame=0,this.hooks=[],this._lumFlip=0,this._lumReset=!0,this.shadows=new Su(this),this.stats={calls:0,tris:0},this.zPrepass=!0,this._white=new ni(new Uint8Array([255,255,255,255]),1,1),this._white.needsUpdate=!0,J.uAOTex.value=this._white}setQuality(e){this.q=mu[e]||mu.medium,this.aoMat.dispose(),this.aoMat=bl(this.q.aoSamples),this.shadows.alloc();let t=this.cssW,n=this.cssH;this.w=0,t&&this.setSize(t,n)}setSize(e,t,n=window.devicePixelRatio||1){this.cssW=e,this.cssH=t;let r=Math.min(n,this.q.maxH/t),i=Math.max(2,Math.round(e*r)),a=Math.max(2,Math.round(t*r));this.renderer.setPixelRatio(1),this.renderer.setSize(i,a,!1),(i!==this.w||a!==this.h)&&(this.w=i,this.h=a,this._alloc())}_alloc(){let{w:e,h:t}=this,n=this.q;for(let e of[`rtMain`,`rtDepth`,`rtAO`,`rtAO2`,`rtLDR`,`rtCopy`])this[e]?.dispose();(this.rtBloom||[]).forEach(e=>e.dispose());let i={type:g,format:w,minFilter:o,magFilter:o,generateMipmaps:!1};this.rtMain=new Yt(e,t,{...i,samples:n.msaa,depthBuffer:!0}),this.rtMain.depthTexture=new Di(e,t,h),this.rtMain.resolveDepthBuffer=!1,this.rtDepth=new Yt(e,t,{type:l,format:D,minFilter:r,magFilter:r,depthBuffer:!0}),this.rtDepth.depthTexture=new Di(e,t,h),this.rtDepth.depthTexture.minFilter=this.rtDepth.depthTexture.magFilter=r;let a=Math.max(1,e>>1),s=Math.max(1,t>>1),c={type:l,format:w,minFilter:o,magFilter:o,depthBuffer:!1};this.rtAO=new Yt(a,s,c),this.rtAO2=new Yt(a,s,c),this.rtCopy=new Yt(a,s,{...i,depthBuffer:!1}),this.rtLDR=new Yt(e,t,{type:l,format:w,minFilter:o,magFilter:o,depthBuffer:!1}),this.rtBloom=[],this.rtBloomUp=[];let u=a,d=s;for(let e=0;e<n.bloomLevels;e++)this.rtBloom.push(new Yt(u,d,{...i,depthBuffer:!1})),this.rtBloomUp.push(new Yt(u,d,{...i,depthBuffer:!1})),u=Math.max(1,u>>1),d=Math.max(1,d>>1);if(!this.rtLum){let e={type:g,format:w,minFilter:r,magFilter:r,depthBuffer:!1};this.rtLum=[new Yt(1,1,e),new Yt(1,1,e)]}J.uInvRes.value.set(1/e,1/t),this._lumReset=!0}pass(e,t){this._fsMesh.material=e,this.renderer.setRenderTarget(t),this.renderer.render(this._fsScene,this._fsCam)}_collect(e){let t=this._list||=[];return t.length=0,e.traverseVisible(e=>{(e.isMesh||e.isPoints||e.isLine||e.isSprite)&&t.push(e)}),t}_swapIn(e,t){for(let n=0;n<e.length;n++){let r=e[n],i=r.material,a=r.isMesh&&i&&i.userData?i.userData.depthMat:null;r.userData.__m=i,!a||(t?r.userData.noShadow||i.userData.noShadowCast:r.layers.mask===1<<_u)?(r.userData.__hid=!0,r.visible=!1):r.material=r.userData.depthMat||a}}_swapOut(e){for(let t=0;t<e.length;t++){let n=e[t];n.material=n.userData.__m,n.userData.__hid&&(n.visible=!0,n.userData.__hid=!1)}}render(e,t,n=1/60){let r=this.renderer,i=this.q;this.time+=n,this.frame++,J.uTime.value=this.time,r.info.reset(),t.updateMatrixWorld(),this.rev&&t._reversedDepth!==!0&&(t._reversedDepth=!0,t.updateProjectionMatrix());let a=this._collect(e);this._swapIn(a,!0),this.shadows.render(e,t),this._swapOut(a);let o=t.layers.mask;t.layers.set(hu),this._swapIn(a,!1),r.setRenderTarget(this.rtDepth),r.clear(!0,!0,!1),r.render(e,t),this._swapOut(a);let s=Math.tan(Ot.degToRad(t.fov*.5))/t.zoom,c=s*t.aspect,l=this._depthP||=new qt;if(l.set(t.near,t.far,+!!this.rev,0),i.ao){let e=this.aoMat.uniforms;e.uDepth.value=this.rtDepth.depthTexture,e.uDepthP.value.copy(l),e.uTanHalf.value.set(c,s),e.uTexel.value.set(1/this.w,1/this.h),e.uSunV.value.copy(J.uSunDir.value).transformDirection(t.matrixWorldInverse),this.pass(this.aoMat,this.rtAO);let n=this.aoBlurMat.uniforms;n.uDepth.value=this.rtDepth.depthTexture,n.uDepthP.value.copy(l),n.uTex.value=this.rtAO.texture,n.uDir.value.set(1/this.rtAO.width,0),this.pass(this.aoBlurMat,this.rtAO2),n.uTex.value=this.rtAO2.texture,n.uDir.value.set(0,1/this.rtAO.height),this.pass(this.aoBlurMat,this.rtAO),J.uAOTex.value=this.rtAO.texture,J.uAOOn.value=1}else J.uAOTex.value=this._white,J.uAOOn.value=0;for(let n of this.hooks)n(this,e,t,`pre`);if(r.setRenderTarget(this.rtMain),r.clear(!0,!0,!1),this.zPrepass){this._swapIn(a,!1),r.render(e,t),this._swapOut(a);let n=r.autoClear;r.autoClear=!1,r.render(e,t),r.autoClear=n}else r.render(e,t);this.stats.calls=r.info.render.calls,this.stats.tris=r.info.render.triangles;{this.copyMat.uniforms.uTex.value=this.rtMain.texture,this.pass(this.copyMat,this.rtCopy),ll.uSceneColor.value=this.rtCopy.texture,ll.uSceneDepth.value=this.rtDepth.depthTexture,ll.uDepthP.value.copy(l),t.layers.set(gu);let n=r.autoClear;r.autoClear=!1,r.setRenderTarget(this.rtMain),r.render(e,t),r.autoClear=n}t.layers.mask=o;for(let n of this.hooks)n(this,e,t,`post`);let u=this.rtBloom.length,d=this.rtMain.texture,f=this.w,p=this.h;for(let e=0;e<u;e++){let t=this.bloomDown.uniforms;t.uTex.value=d,t.uTexel.value.set(1/f,1/p),t.uFirst.value=+(e===0),this.pass(this.bloomDown,this.rtBloom[e]),d=this.rtBloom[e].texture,f=this.rtBloom[e].width,p=this.rtBloom[e].height}let m=this.rtBloom[u-1];for(let e=u-2;e>=0;e--){let t=this.bloomUp.uniforms;t.uTex.value=m.texture,t.uTexel.value.set(1/m.width,1/m.height),t.uAdd.value=this.rtBloom[e].texture,t.uW.value=1,this.pass(this.bloomUp,this.rtBloomUp[e]),m=this.rtBloomUp[e]}let h=this.rtLum[this._lumFlip],g=this.rtLum[1-this._lumFlip],_=this.lumMat.uniforms;_.uTex.value=this.rtBloom[Math.min(u-1,4)].texture,_.uPrev.value=h.texture,_.uRate.value=this._lumReset?1:1-Math.exp(-n*(this.adaptSpeed??1.6)),this._lumReset=!1,this.pass(this.lumMat,g),this._lumFlip=1-this._lumFlip;let v=this.compMat.uniforms;v.uScene.value=this.rtMain.texture,v.uBloom.value=m.texture,v.uLum.value=g.texture,v.uAspect.value=this.w/this.h,this.pass(this.compMat,this.rtLDR);let y=this.finalMat.uniforms;y.uTex.value=this.rtLDR.texture,y.uTexel.value.set(1/this.w,1/this.h),y.uTime.value=this.time,this.pass(this.finalMat,null)}resetAdaptation(){this._lumReset=!0}},yu=new H,bu=new H,xu=new H,Su=class{constructor(e){this.gfx=e,this.cams=[0,1,2].map(()=>{let e=new Ea(-1,1,1,-1,1,1e3);return e.layers.enable(_u),e}),this.farCam=new Ea(-1,1,1,-1,1,4e3),this.farCam.layers.enable(_u),this.right=new H,this.up=new H,this.dir=new H,this.enabled=!0,this.depthRange=760,this.backoff=420,this.alloc()}alloc(){let e=this.gfx.q,t=this.gfx.rev;this.rt?.dispose();let n=this.res=e.shadowRes;this.rt=new Yt(n*3,n,{type:l,format:D,depthBuffer:!0,minFilter:r,magFilter:r});let i=this.rt.depthTexture=new Di(n*3,n,h);if(i.minFilter=i.magFilter=o,i.compareFunction=t?518:515,this.rt.scissorTest=!0,J.uShadowTex.value=i,J.uShadowInfo.value.set(1/(n*3),1/n,.07,1),this.farRes!==e.shadowFarRes){this.rtFar?.dispose();let n=this.farRes=e.shadowFarRes;this.rtFar=new Yt(n,n,{type:l,format:D,depthBuffer:!0,minFilter:r,magFilter:r});let i=this.rtFar.depthTexture=new Di(n,n,h);i.minFilter=i.magFilter=o,i.compareFunction=t?518:515,J.uShadowFarTex.value=i;let a=this.gfx.renderer;a.setRenderTarget(this.rtFar),a.clear(!0,!0,!1),a.setRenderTarget(null),this.farDirty=!0}}_basis(){this.dir.copy(J.uSunDir.value).normalize(),this.right.crossVectors(new H(0,1,0),this.dir).normalize(),this.up.crossVectors(this.dir,this.right).normalize()}_fit(e,t,n,r,i,a){let o=n*2/r,s=Math.round(t.dot(this.right)/o)*o,c=Math.round(t.dot(this.up)/o)*o,l=t.dot(this.dir);return bu.set(0,0,0).addScaledVector(this.right,s).addScaledVector(this.up,c).addScaledVector(this.dir,l+a),e.position.copy(bu),e.up.copy(this.up),e.lookAt(bu.x-this.dir.x,bu.y-this.dir.y,bu.z-this.dir.z),e.left=-n,e.right=n,e.top=n,e.bottom=-n,e.near=.5,e.far=i,e._reversedDepth=this.gfx.rev,e.updateProjectionMatrix(),e.updateMatrixWorld(!0),o}_matrix(e,t,n,r,i){let a=this.gfx.rev,o=i/(e.far-e.near),s=new $t;a?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,o,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5-o,0,0,0,1),t.copy(s).multiply(e.projectionMatrix).multiply(e.matrixWorldInverse)}render(e,t){if(!this.enabled){J.uShadowInfo.value.w=0;return}J.uShadowInfo.value.w=1;let n=this.gfx.renderer,r=this.gfx.q,i=this.res;this._basis(),t.getWorldDirection(xu);for(let a=0;a<3;a++){if(a===2&&(this.gfx.frame&1)==1&&this._init)continue;let o=r.cascades[a];yu.copy(t.position).addScaledVector(xu,o*.72);let s=this._fit(this.cams[a],yu,o,i,this.depthRange,this.backoff);this._matrix(this.cams[a],J.uShadowMat.value[a],a,3,s*1.2),J.uShadowTexelW.value.setComponent(a,s),this.rt.viewport.set(a*i,0,i,i),this.rt.scissor.set(a*i,0,i,i),n.setRenderTarget(this.rt),n.clear(!0,!0,!1),n.render(e,this.cams[a])}this._init=!0,this.farDirty&&this.farBounds&&this.renderFar(e)}setFarBounds(e,t,n=3600,r=1700){this.farBounds={center:e,radius:t,depthRange:n,backoff:r},this.farDirty=!0}renderFar(e){let t=this.farBounds,n=this.gfx.renderer;this._basis();let r=this._fit(this.farCam,t.center,t.radius,this.farRes,t.depthRange,t.backoff);this._matrix(this.farCam,J.uShadowFarMat.value,0,1,r*1.5),J.uShadowFarInfo.value.set(1/this.farRes,r,1,0),n.setRenderTarget(this.rtFar),n.clear(!0,!0,!1),n.render(e,this.farCam),this.farDirty=!1}},Cu=`
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform vec3 uSkyLow;
uniform vec3 uSunGlow;
uniform float uSkyFall;
vec3 skyBase(vec3 d, vec3 sunDir) {
  float el = asin(clamp(d.y, -1.0, 1.0));
  float t = exp(-max(el, 0.0) / uSkyFall);
  vec3 c = mix(uSkyZenith, uSkyHorizon, t);
  c *= mix(1.0, 0.80, smoothstep(0.35, 1.3, el));
  float cs = max(dot(d, sunDir), 0.0);
  c += uSunGlow * (pow(cs, 5.0) * 0.10 + pow(cs, 48.0) * 0.45);
  c = mix(c, uSkyLow, smoothstep(0.0, -0.10, d.y));
  return c;
}
`,wu=`
const float EL0 = -0.10;
const float EL1 = 1.25;
vec2 dirToPano(vec3 d) {
  float az = atan(d.x, -d.z);
  float el = asin(clamp(d.y, -1.0, 1.0));
  float v = sat((el - EL0) / (EL1 - EL0));
  return vec2(az / 6.283185307 + 0.5, sqrt(v));
}
vec3 panoToDir(vec2 uv) {
  float az = (uv.x - 0.5) * 6.283185307;
  float el = EL0 + uv.y * uv.y * (EL1 - EL0);
  float c = cos(el);
  return vec3(sin(az) * c, sin(el), -cos(az) * c);
}
`,Tu=class{constructor(e){this.gfx=e,this.u={uSkyZenith:{value:new W},uSkyHorizon:{value:new W},uSkyLow:{value:new W},uSunGlow:{value:new W},uSkyFall:{value:.07},uSunDir:J.uSunDir,uSunColor:J.uSunColor,uCloudPano:{value:null},uCloudOn:{value:0},uSunDisk:{value:1},uTime:J.uTime};let t=new Pi(1,5);this.mat=new Wi({name:`sky`,uniforms:this.u,side:1,depthWrite:!1,depthTest:!0,vertexShader:`
varying vec3 vDir;
void main() { vDir = position; vec4 wp = modelMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`
${fl}
${Cu}
${wu}
uniform vec3 uSunDir; uniform vec3 uSunColor; uniform sampler2D uCloudPano; uniform float uCloudOn; uniform float uSunDisk;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  vec3 c = skyBase(d, uSunDir);
  float cs = dot(d, uSunDir);
  c += uSunColor * uSunDisk * (smoothstep(0.99985, 0.99995, cs) * 60.0);
  if (uCloudOn > 0.5) {
    vec4 cl = texture(uCloudPano, dirToPano(d));
    c = c * (1.0 - cl.a) + cl.rgb;
  }
  gl_FragColor = vec4(c, 1.0);
}`}),this.mat.userData.noDepth=!0,this.mesh=new G(t,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1e3,this.mesh.scale.setScalar(15e3),this.mesh.userData.noShadow=!0,this.mesh.onBeforeRender=(e,t,n)=>{this.mesh.position.copy(n.position),this.mesh.updateMatrixWorld()},this.envRT=new ao(64,{type:g,generateMipmaps:!0,minFilter:c,magFilter:o}),this.envCam=new Ma(1,3e4,this.envRT),this.envScene=new In,this.envMesh=new G(t,this.mat),this.envMesh.scale.setScalar(1e3),this.envMesh.frustumCulled=!1,this.envScene.add(this.envMesh),J.uEnvTex.value=this.envRT.texture,J.uEnvMaxLod.value=5,this.clouds=null}set({zenith:e,horizon:t,low:n,glow:r,fall:i}){e&&this.u.uSkyZenith.value.setRGB(...e),t&&this.u.uSkyHorizon.value.setRGB(...t),n&&this.u.uSkyLow.value.setRGB(...n),r&&this.u.uSunGlow.value.setRGB(...r),i!=null&&(this.u.uSkyFall.value=i),this.envDirty=!0}updateEnv(){let e=this.u.uCloudOn.value,t=this.u.uSunDisk.value;this.u.uCloudOn.value=0,this.u.uSunDisk.value=0,this.envCam.update(this.gfx.renderer,this.envScene),this.u.uCloudOn.value=e,this.u.uSunDisk.value=t,this.envDirty=!1}update(e,t){this.envDirty&&this.updateEnv(),this.clouds&&this.clouds.update(e,t)}},Eu=class{constructor(n,r,i={}){this.sky=n,this.gfx=n.gfx;let a=this.W=i.width||4096,s=this.H=i.height||1024,c=()=>new Yt(a,s,{type:g,format:w,minFilter:o,magFilter:o,depthBuffer:!1,wrapS:e,wrapT:t});this.rt=c(),this.rt.scissorTest=!0,this.u={uNoise3:{value:r},uNoiseTex:J.uNoiseTex,uCamPos:{value:new H},uSunDir:J.uSunDir,uSunColor:J.uSunColor,uSkyAmb:J.uSkyAmb,uTime:{value:0},uBase:{value:i.base??150},uTop:{value:i.top??900},uCoverage:{value:i.coverage??.45},uDensity:{value:i.density??.03},uBlobs:{value:(i.blobs||[]).map(e=>new qt(...e)).concat(Array.from({length:18},()=>new qt(0,0,0,0))).slice(0,18)},uBlobY:{value:(i.blobs||[]).map(e=>new qt(e[4]??300,e[5]??500,e[6]??1,0)).concat(Array.from({length:18},()=>new qt(0,1,0,0))).slice(0,18)},uWindOff:{value:new H},uSeed:{value:0},...n.u},this.mat=new Wi({name:`cloudpano`,uniforms:this.u,depthTest:!1,depthWrite:!1,vertexShader:gl,defines:{STEPS:i.steps||96,LSTEPS:5},fragmentShader:`
${fl}
${Cu}
${wu}
precision highp sampler3D;
varying vec2 vUv;
uniform sampler3D uNoise3;
uniform sampler2D uNoiseTex;
uniform vec3 uCamPos, uSunDir, uSunColor, uSkyAmb, uWindOff;
uniform float uTime, uBase, uTop, uCoverage, uDensity, uSeed;
uniform vec4 uBlobs[18];   // xyz centre (y ignored), w radius
uniform vec4 uBlobY[18];   // x base, y height, z strength
// density of the cloud field at world position p
float cloudDensity(vec3 p, bool cheap) {
  float dens = 0.0;
  for (int i = 0; i < 18; i++) {
    vec4 b = uBlobs[i]; if (b.w <= 0.0) continue;
    vec4 by = uBlobY[i];
    float h = (p.y - by.x) / by.y;
    if (h <= 0.0 || h >= 1.0) continue;
    vec2 q = (p.xz - b.xz) / b.w;
    float r = length(q);
    // cumulus profile: flat-ish base, bulging middle, rounded top
    float prof = pow(sat(1.0 - h), 0.55) * smoothstep(0.0, 0.10, h);
    float shape = sat(1.0 - r / (0.35 + 0.65 * prof));
    if (shape <= 0.0) continue;
    dens = max(dens, shape * by.z);
  }
  if (dens <= 0.0) return 0.0;
  float cov = pow(dens, 0.6);
  vec3 q = p * vec3(0.0023, 0.0031, 0.0023) + uWindOff;
  vec4 n = texture(uNoise3, q);
  float base = n.r * 0.75 + n.g * 0.25;
  float d = remap(base * 0.8 + 0.2, 1.0 - cov, 1.0, 0.0, 1.0);
  if (d <= 0.0) return 0.0;
  if (!cheap) {
    vec4 n2 = texture(uNoise3, q * 4.7 + vec3(0.13, uTime * 0.004, 0.71));
    float hi = n2.g * 0.6 + n2.b * 0.4;
    d = remap(d, hi * 0.58 * (1.0 - d * 0.55), 1.0, 0.0, 1.0);
  }
  return d * uDensity;
}
void main() {
  vec3 dir = panoToDir(vUv);
  vec3 ro = uCamPos;
  // march only the interval covered by blob bounding cylinders
  float tEnter = 1e9, tExit = -1.0;
  vec2 dxz = dir.xz; float dl = dot(dxz, dxz);
  for (int i = 0; i < 18; i++) {
    vec4 b = uBlobs[i]; if (b.w <= 0.0) continue;
    vec4 by = uBlobY[i];
    vec2 oc = ro.xz - b.xz; float R = b.w * 1.02;
    float B = dot(oc, dxz), C = dot(oc, oc) - R * R;
    float disc = B * B - dl * C;
    if (disc <= 0.0 || dl < 1e-8) continue;
    float sq = sqrt(disc);
    float t0 = (-B - sq) / dl, t1 = (-B + sq) / dl;
    if (abs(dir.y) > 1e-5) {
      float ya = (by.x - ro.y) / dir.y, yb = (by.x + by.y - ro.y) / dir.y;
      t0 = max(t0, min(ya, yb)); t1 = min(t1, max(ya, yb));
    } else if (ro.y < by.x || ro.y > by.x + by.y) continue;
    t0 = max(t0, 0.0);
    if (t1 > t0) { tEnter = min(tEnter, t0); tExit = max(tExit, t1); }
  }
  vec4 acc = vec4(0.0);
  if (tExit > tEnter) {
    float stepLen = (tExit - tEnter) / float(STEPS);
    float jit = ign(gl_FragCoord.xy + uSeed * 17.0);
    float t = tEnter + stepLen * jit;
    float T = 1.0;
    vec3 L = vec3(0.0);
    float cosT = dot(dir, uSunDir);
    float hg = mix((1.0 - 0.36) / pow(1.0 + 0.36 - 1.2 * cosT, 1.5), (1.0 - 0.04) / pow(1.0 + 0.04 + 0.4 * cosT, 1.5), 0.55) * 0.25;
    float distW = 0.0, tW = 0.0;
    for (int i = 0; i < STEPS; i++) {
      vec3 p = ro + dir * t;
      float d = cloudDensity(p, false);
      if (d > 0.0) {
        // light march toward the sun
        float od = 0.0; float ls = 30.0;
        for (int j = 0; j < LSTEPS; j++) { od += cloudDensity(p + uSunDir * ls * (float(j) + 0.6), true) * ls; ls *= 1.55; }
        float beer = exp(-od * 1.35);
        float powder = 1.0 - exp(-od * 2.2 - d * stepLen * 0.9);
        float hNorm = sat((p.y - uBase) / (uTop - uBase));
        vec3 sun = uSunColor * 0.70 * (beer * (0.30 + 0.70 * powder) * (0.80 + hg * 1.6) + 0.10 * exp(-od * 0.16));
        vec3 amb = uSkyAmb * (1.0 + 1.1 * hNorm) + uSunColor * 0.035;
        vec3 S = (sun + amb) * d;
        float dT = exp(-d * stepLen);
        L += T * S * (1.0 - dT) / max(d, 1e-5);
        distW += T * (1.0 - dT) * t; tW += T * (1.0 - dT);
        T *= dT;
        if (T < 0.015) { T = 0.0; break; }
      }
      t += stepLen;
    }
    float a = 1.0 - T;
    // aerial perspective on the clouds themselves
    float dist = tW > 0.0 ? distW / tW : tEnter;
    float fade = exp(-dist * 0.000045);
    vec3 hz = skyBase(normalize(vec3(dir.x, 0.02, dir.z)), uSunDir);
    L = L * fade + hz * a * (1.0 - fade);
    acc = vec4(L, a);
  }
  gl_FragColor = acc;
}`}),n.u.uCloudPano.value=this.rt.texture,n.u.uCloudOn.value=1,this.strip=0,this.strips=i.strips||96,this.time=0,this.windDir=new H(1,0,.3).normalize(),this.windSpeed=i.windSpeed??2e-5,this.lastPos=new H(1e9,0,0),this.dirty=!0}renderAll(e){this.u.uCamPos.value.copy(e),this.lastPos.copy(e),this.rt.viewport.set(0,0,this.W,this.H),this.rt.scissor.set(0,0,this.W,this.H),this.gfx.pass(this.mat,this.rt),this.dirty=!1}update(e,t){if(this.time+=t,this.u.uTime.value=this.time,this.u.uWindOff.value.copy(this.windDir).multiplyScalar(this.time*this.windSpeed),this.dirty||this.lastPos.distanceToSquared(e.position)>62500){this.renderAll(e.position);return}if(this.frozen||(this._tick=(this._tick||0)+1,this._tick&1))return;let n=Math.ceil(this.W/this.strips),r=this.strip*n;this.u.uCamPos.value.copy(e.position),this.lastPos.copy(e.position),this.rt.viewport.set(0,0,this.W,this.H),this.rt.scissor.set(r,0,Math.min(n,this.W-r),this.H);let i=this.gfx.renderer,a=i.autoClear;i.autoClear=!1,this.gfx.pass(this.mat,this.rt),i.autoClear=a,this.strip=(this.strip+1)%this.strips}},Du=ju([-.76,.643,.093]),Ou={pos:[0,150,0],yaw:0,pitch:-1.3*Math.PI/180,vfovPortrait:50},ku={ledgeY:144,galleryY:148.3,hallY:144,rider:[2.55,144,-19.7],pillar:[4.85,144,-17.35],heliostat:[4.9,144,-21.7],idol:[5,144,12.4],cistern:[23.8,143.1,15.6],lamps:[[2.9,148.3,2.9],[8.4,144,9.9],[14.6,144,11.6]],stairGate:[8.3,144,-20.7],box:[-27,126,-31,33,171,27]},Au={center:[-10,210,-1500],baseY:210,topY:626,faceWidth:227,yaw:36*Math.PI/180};function ju(e){let t=Math.hypot(e[0],e[1],e[2]);return[e[0]/t,e[1]/t,e[2]/t]}var Mu=`
uniform float uTime;
uniform vec4 uWind;
uniform sampler2D uNoiseTex;
varying vec3 vWorldPos;
varying vec3 vNormalW;
varying vec2 vUv;
varying vec4 vColor;
varying vec3 vInst;
invariant gl_Position;      // depth pre-pass and colour pass must agree to the last bit
#include <skinning_pars_vertex>
`;function Nu(e){return`
${Mu}
${e.vertexPars||``}
void main() {
  vec3 transformed = position;
  vec3 objectNormal = normal;
  vUv = uv;
  vColor = vec4(1.0);
  #if defined(USE_COLOR_ALPHA)
    vColor = color;
  #elif defined(USE_COLOR)
    vColor = vec4(color, 1.0);
  #endif
  vInst = vec3(1.0);
  #ifdef USE_INSTANCING_COLOR
    vInst = instanceColor;
  #endif
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <skinning_vertex>
  ${e.vertexLocal||``}
  mat4 mm = modelMatrix;
  #ifdef USE_INSTANCING
    mm = modelMatrix * instanceMatrix;
  #endif
  vec4 wp = mm * vec4(transformed, 1.0);
  vec3 s2 = vec3(dot(mm[0].xyz, mm[0].xyz), dot(mm[1].xyz, mm[1].xyz), dot(mm[2].xyz, mm[2].xyz));
  vec3 nW = normalize(mat3(mm) * (objectNormal / s2));
  ${e.vertexWorld||``}
  vWorldPos = wp.xyz;
  vNormalW = nW;
  gl_Position = projectionMatrix * viewMatrix * wp;
}`}var Pu=`
varying vec3 vWorldPos;
varying vec3 vNormalW;
varying vec2 vUv;
varying vec4 vColor;
varying vec3 vInst;
`;function Fu(e){return`
${dl}
${fl}
${pl}
${ml}
${hl}
${Pu}
${e.fragPars||``}
void main() {
  vec3 P = vWorldPos;
  vec3 V = normalize(cameraPosition - P);
  vec3 Ng = normalize(vNormalW);
  #ifdef DOUBLE_SIDED
    if (!gl_FrontFacing) Ng = -Ng;
  #endif
  Surf s;
  s.albedo = vec3(0.5); s.N = Ng; s.Ng = Ng; s.rough = 0.9; s.metal = 0.0; s.ao = 1.0;
  s.emissive = vec3(0.0); s.sss = 0.0; s.alpha = 1.0; s.shadowMul = 1.0; s.spec = 1.0;
  ${e.alpha?`{ float alpha = 1.0; ${e.alpha} s.alpha = alpha; }`:``}
  #ifdef ALPHA_CUT
    if (s.alpha < ALPHA_CUT) discard;
  #endif
  ${e.surface||``}
  vec3 col = shade(s, P, V);
  #ifndef NO_FOG
    if (uDebug == 0) col = applyFog(col, P);
  #endif
  ${e.post||``}
  gl_FragColor = vec4(col, s.alpha);
}`}function Iu(e){return`
uniform sampler2D uNoiseTex;
uniform float uTime;
${Pu}
${e.depthPars||``}
void main() {
  ${e.alpha?`float alpha = 1.0; ${e.alpha}`:``}
  #ifdef ALPHA_CUT
    if (alpha < ALPHA_CUT) discard;
  #endif
  gl_FragColor = vec4(1.0);
}`}var Lu=null;function Ru(){return Lu||(Lu=new Wi({name:`depth-default`,uniforms:{uTime:J.uTime,uWind:J.uWind,uNoiseTex:J.uNoiseTex},vertexShader:Nu({}),fragmentShader:Iu({}),colorWrite:!1}),Lu.userData.isDepth=!0),Lu}var zu=null;function Bu(){return zu||(zu=Ru().clone(),zu.side=2,zu.uniforms=Ru().uniforms,zu.userData.isDepth=!0),zu}function Vu(e){let t={...e.defines||{}};e.alphaCut!=null&&(t.ALPHA_CUT=e.alphaCut.toFixed(3)),e.fog===!1&&(t.NO_FOG=1);let n=ul(e.uniforms||{}),r=new Wi({name:e.name||`mat`,uniforms:n,defines:t,vertexShader:Nu(e),fragmentShader:Fu(e),side:e.side??0,transparent:!!e.transparent,depthWrite:e.depthWrite??!e.transparent,vertexColors:!!e.vertexColors});if(e.blending!=null&&(r.blending=e.blending),e.polygonOffset&&(r.polygonOffset=!0,r.polygonOffsetFactor=e.polygonOffset[0],r.polygonOffsetUnits=e.polygonOffset[1]),e.alphaToCoverage&&(r.alphaToCoverage=!0),r.userData.noDepth=!!e.transparent||!!e.noDepth,r.userData.noShadowCast=!!e.noShadowCast,!r.userData.noDepth){if(e.vertexLocal||e.vertexWorld||e.alpha||e.vertexPars){let n=new Wi({name:(e.name||`mat`)+`-depth`,defines:{...t,DEPTH_PASS:1},uniforms:{uTime:J.uTime,uWind:J.uWind,uNoiseTex:J.uNoiseTex,...e.uniforms||{}},vertexShader:Nu(e),fragmentShader:Iu(e),side:r.side,vertexColors:!!e.vertexColors});n.colorWrite=!1,n.userData.isDepth=!0,r.userData.depthMat=n}else r.userData.depthMat=r.side===2?Bu():Ru()}return r}var Hu=e=>`uniform sampler2D ${e}D; uniform sampler2D ${e}N; uniform sampler2D ${e}A;\n`,Uu={beige_wall_001:[.3405,.2623,.1879],brown_leather:[.0823,.0267,.0052],castle_wall_slates:[.2654,.2182,.1411],clay_roof_tiles_02:[.2988,.0827,.0253],clay_roof_tiles_03:[.272,.0927,.039],cliff_side:[.2097,.0897,.0328],cobblestone_floor_08:[.2955,.2688,.2247],dark_rock:[.0154,.0118,.0089],dark_wooden_planks:[.0873,.0687,.0496],dry_riverbed_rock:[.1362,.093,.0694],large_sandstone_blocks:[.0999,.0929,.0746],marble_cliff_03:[.3383,.2145,.112],marble_cliff_05:[.2949,.2656,.2287],medieval_blocks_05:[.3708,.2384,.1315],monastery_stone_floor:[.1352,.0934,.0646],old_sandstone_02:[.2499,.14,.049],plastered_wall_02:[.4943,.4405,.3687],red_sandstone_pavement:[.1339,.1008,.0716],rock_boulder_dry:[.3962,.335,.2682],rock_face_03:[.2295,.1433,.0822],rocky_terrain:[.1464,.0833,.0321],roof_09:[.249,.1822,.1263],roof_slates_02:[.2833,.2413,.1825],rusty_metal_02:[.4122,.2849,.1274],sandy_gravel:[.421,.3663,.3041],snow_02:[.3786,.3782,.3883],wood_planks:[.1907,.0991,.0412],worn_plaster_wall:[.1819,.1545,.1106],worn_rock_natural_01:[.3946,.2744,.1434],yellow_plaster_02:[.1365,.0976,.0572]},Wu=new $t,Gu=new H,Ku=new H,qu=new U,X=class{constructor(){this.p=[],this.n=[],this.uv=[],this.c=[],this.idx=[],this.stack=[new $t],this.col=[1,1,1,1],this.uvS=[1,1],this.uvO=[0,0],this.count=0}get m(){return this.stack[this.stack.length-1]}push(){return this.stack.push(this.m.clone()),this}pop(){return this.stack.pop(),this}translate(e,t,n){return this.m.multiply(Wu.makeTranslation(e,t,n)),this}rotY(e){return this.m.multiply(Wu.makeRotationY(e)),this}rotX(e){return this.m.multiply(Wu.makeRotationX(e)),this}rotZ(e){return this.m.multiply(Wu.makeRotationZ(e)),this}scale(e,t=e,n=e){return this.m.multiply(Wu.makeScale(e,t,n)),this}color(e,t=e,n=e,r=1){return this.col=[e,t,n,r],this}uvMap(e=1,t=1,n=0,r=0){return this.uvS=[e,t],this.uvO=[n,r],this}v(e,t,n,r,i,a,o=0,s=0){return Gu.set(e,t,n).applyMatrix4(this.m),qu.getNormalMatrix(this.m),Ku.set(r,i,a).applyMatrix3(qu).normalize(),this.p.push(Gu.x,Gu.y,Gu.z),this.n.push(Ku.x,Ku.y,Ku.z),this.uv.push(o*this.uvS[0]+this.uvO[0],s*this.uvS[1]+this.uvO[1]),this.c.push(this.col[0],this.col[1],this.col[2],this.col[3]),this.count++}tri(e,t,n){this.idx.push(e,t,n)}quadI(e,t,n,r){this.idx.push(e,t,n,e,n,r)}quad(e,t,n,r,i=null){let a=t[0]-e[0],o=t[1]-e[1],s=t[2]-e[2],c=r[0]-e[0],l=r[1]-e[1],u=r[2]-e[2],d=o*u-s*l,f=s*c-a*u,p=a*l-o*c,m=Math.hypot(d,f,p)||1;d/=m,f/=m,p/=m;let h=i||[0,0,1,1],g=this.v(e[0],e[1],e[2],d,f,p,h[0],h[1]),_=this.v(t[0],t[1],t[2],d,f,p,h[2],h[1]),v=this.v(n[0],n[1],n[2],d,f,p,h[2],h[3]),y=this.v(r[0],r[1],r[2],d,f,p,h[0],h[3]);return this.quadI(g,_,v,y),this}triF(e,t,n){let r=t[0]-e[0],i=t[1]-e[1],a=t[2]-e[2],o=n[0]-e[0],s=n[1]-e[1],c=n[2]-e[2],l=i*c-a*s,u=a*o-r*c,d=r*s-i*o,f=Math.hypot(l,u,d)||1;return l/=f,u/=f,d/=f,this.tri(this.v(e[0],e[1],e[2],l,u,d),this.v(t[0],t[1],t[2],l,u,d),this.v(n[0],n[1],n[2],l,u,d)),this}box(e,t,n,r,i,a,o=0,s=63){let c=r/2,l=i/2,u=a/2,d=Math.min(o,c*.49,l*.49,u*.49),f=[[0,1,2,1,1],[0,-1,2,1,2],[1,1,0,2,4],[1,-1,0,2,8],[2,1,0,1,16],[2,-1,0,1,32]],p=[c,l,u],m=[e,t,n],h={},g=(e,t,n)=>`${e},${t},${n[0]},${n[1]},${n[2]}`;for(let[e,t,n,r,i]of f){let a=[0,0,0];a[e]=t;let o=[];for(let[i,s]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let c=[0,0,0];c[e]=m[e]+t*p[e],c[n]=m[n]+i*(p[n]-d),c[r]=m[r]+s*(p[r]-d);let l=this.v(c[0],c[1],c[2],a[0],a[1],a[2],c[n],c[r]),u=[0,0,0];u[n]=i,u[r]=s,h[g(e,t,u)]=l,o.push(l)}s&i&&(this.triAuto(o[0],o[1],o[2]),this.triAuto(o[0],o[2],o[3]))}if(d>0&&s===63){let e=[-1,1];for(let t=0;t<3;t++)for(let n=t+1;n<3;n++){let r=3-t-n;for(let i of e)for(let a of e){let o=[];for(let s of e){let e=[0,0,0];e[n]=a,e[r]=s;let c=[0,0,0];c[t]=i,c[r]=s,o.push([h[g(t,i,e)],h[g(n,a,c)]])}this.triAuto(o[0][0],o[0][1],o[1][1]),this.triAuto(o[0][0],o[1][1],o[1][0])}}for(let t of e)for(let n of e)for(let r of e)this.triAuto(h[g(0,t,[0,n,r])],h[g(1,n,[t,0,r])],h[g(2,r,[t,n,0])])}return this}triAuto(e,t,n){let r=this.p,i=this.n,a=r[t*3]-r[e*3],o=r[t*3+1]-r[e*3+1],s=r[t*3+2]-r[e*3+2],c=r[n*3]-r[e*3],l=r[n*3+1]-r[e*3+1],u=r[n*3+2]-r[e*3+2],d=o*u-s*l,f=s*c-a*u,p=a*l-o*c,m=i[e*3]+i[t*3]+i[n*3],h=i[e*3+1]+i[t*3+1]+i[n*3+1],g=i[e*3+2]+i[t*3+2]+i[n*3+2];d*m+f*h+p*g>=0?this.idx.push(e,t,n):this.idx.push(e,n,t)}lathe(e,t=24,{a0:n=0,a1:r=Math.PI*2,flat:i=!1,capTop:a=!1,capBottom:o=!1,uScale:s=1}={}){let c=e.length,l=[],u=[];for(let t=0;t<c;t++){let n=e[Math.max(0,t-1)],r=e[Math.min(c-1,t+1)],i=r[0]-n[0],a=r[1]-n[1],o=Math.hypot(i,a)||1;u.push([a/o,-i/o])}if(Math.abs(r-n-Math.PI*2),i)for(let i=0;i<c-1;i++)for(let a=0;a<t;a++){let o=n+(r-n)*(a/t),s=n+(r-n)*((a+1)/t),c=(e,t,n)=>[e*Math.cos(n),t,e*Math.sin(n)];this.quad(c(e[i][0],e[i][1],o),c(e[i+1][0],e[i+1][1],o),c(e[i+1][0],e[i+1][1],s),c(e[i][0],e[i][1],s))}else{let i=0;for(let a=0;a<c;a++){a>0&&(i+=Math.hypot(e[a][0]-e[a-1][0],e[a][1]-e[a-1][1]));let o=[];for(let c=0;c<=t;c++){let l=n+(r-n)*(c/t),d=Math.cos(l),f=Math.sin(l);o.push(this.v(e[a][0]*d,e[a][1],e[a][0]*f,u[a][0]*d,u[a][1],u[a][0]*f,c/t*s,i))}l.push(o)}for(let e=0;e<c-1;e++)for(let n=0;n<t;n++)this.quadI(l[e][n],l[e+1][n],l[e+1][n+1],l[e][n+1])}let d=(i,a)=>{let o=e[i][0],s=e[i][1];if(o<=1e-6)return;let c=this.v(0,s,0,0,a?1:-1,0,.5,.5),l=-1;for(let e=0;e<=t;e++){let i=n+(r-n)*(e/t),u=this.v(o*Math.cos(i),s,o*Math.sin(i),0,a?1:-1,0,.5+.5*Math.cos(i),.5+.5*Math.sin(i));l>=0&&(a?this.tri(c,u,l):this.tri(c,l,u)),l=u}};return a&&d(c-1,!0),o&&d(0,!1),this}frame(e,t,n,{capTop:r=!1,capBottom:i=!1}={}){let a=e.length,o=[[1,0],[0,1],[-1,0],[0,-1]];for(let r=0;r<4;r++){let[i,s]=o[r],c=-s,l=i;for(let r=0;r<a-1;r++){let a=e[r][0],o=e[r][1],u=e[r+1][0],d=e[r+1][1],f=e=>[Math.abs(i)*t+Math.abs(s)*n+e,Math.abs(c)*t+Math.abs(l)*n+e],[p,m]=f(a),[h,g]=f(u),_=(e,t,n,r)=>[i*e+c*t*r,n,s*e+l*t*r],v=d-o,y=-(u-a),b=Math.hypot(v,y)||1;v/=b,y/=b;let x=i*v,S=y,C=s*v,w=_(p,m,o,1),T=_(h,g,d,1),E=_(h,g,d,-1),D=_(p,m,o,-1),O=this.v(w[0],w[1],w[2],x,S,C,m,o),k=this.v(T[0],T[1],T[2],x,S,C,g,d),A=this.v(E[0],E[1],E[2],x,S,C,-g,d),ee=this.v(D[0],D[1],D[2],x,S,C,-m,o);this.triAuto(O,k,A),this.triAuto(O,A,ee)}}let s=(r,i)=>{let a=e[r][0],o=e[r][1],s=[-(t+a),o,-(n+a)],c=[t+a,o,-(n+a)],l=[t+a,o,n+a],u=[-(t+a),o,n+a];i?this.quad(s,u,l,c):this.quad(s,c,l,u)};return r&&s(a-1,!0),i&&s(0,!1),this}prism(e,t,n,{capTop:r=!0,capBottom:i=!1}={}){let a=e.length;for(let r=0;r<a;r++){let i=e[r],o=e[(r+1)%a];this.quad([i[0],t,i[1]],[i[0],n,i[1]],[o[0],n,o[1]],[o[0],t,o[1]])}let o=(t,n)=>{for(let r=1;r<a-1;r++){let i=[e[0][0],t,e[0][1]],a=[e[r][0],t,e[r][1]],o=[e[r+1][0],t,e[r+1][1]];n?this.triF(i,o,a):this.triF(i,a,o)}};return r&&o(n,!0),i&&o(t,!1),this}sweep(e,t,n,r=[0,0,1],i=!1){let a=e.length;if(a<2)return this;let o=r[0],s=r[1],c=r[2],l=[];for(let r=0;r<a;r++){let u=e[i?(r-1+a)%a:Math.max(0,r-1)],d=e[i?(r+1)%a:Math.min(a-1,r+1)],f=d[0]-u[0],p=d[1]-u[1],m=d[2]-u[2],h=Math.hypot(f,p,m)||1;f/=h,p/=h,m/=h;let g=s*m-c*p,_=c*f-o*m,v=o*p-s*f,y=Math.hypot(g,_,v)||1;g/=y,_/=y,v/=y;let b=e[r],x=t/2,S=n/2;l.push([[b[0]+g*S+o*x,b[1]+_*S+s*x,b[2]+v*S+c*x],[b[0]+g*S-o*x,b[1]+_*S-s*x,b[2]+v*S-c*x],[b[0]-g*S-o*x,b[1]-_*S-s*x,b[2]-v*S-c*x],[b[0]-g*S+o*x,b[1]-_*S+s*x,b[2]-v*S+c*x]])}let u=i?a:a-1;for(let t=0;t<u;t++){let n=l[t],r=l[(t+1)%a];for(let i=0;i<4;i++){let o=(i+1)%4;this.quadAuto(n[i],n[o],r[o],r[i],[(n[i][0]+n[o][0]+r[i][0]+r[o][0])/4-(e[t][0]+e[(t+1)%a][0])/2,(n[i][1]+n[o][1]+r[i][1]+r[o][1])/4-(e[t][1]+e[(t+1)%a][1])/2,(n[i][2]+n[o][2]+r[i][2]+r[o][2])/4-(e[t][2]+e[(t+1)%a][2])/2])}}if(!i){let t=l[0],n=l[a-1];this.quadAuto(t[0],t[1],t[2],t[3],[e[0][0]-e[1][0],e[0][1]-e[1][1],e[0][2]-e[1][2]]),this.quadAuto(n[0],n[1],n[2],n[3],[e[a-1][0]-e[a-2][0],e[a-1][1]-e[a-2][1],e[a-1][2]-e[a-2][2]])}return this}quadAuto(e,t,n,r,i,a=null){let o=t[0]-e[0],s=t[1]-e[1],c=t[2]-e[2],l=r[0]-e[0],u=r[1]-e[1],d=r[2]-e[2],f=s*d-c*u,p=c*l-o*d,m=o*u-s*l,h=Math.hypot(f,p,m)||1;f/=h,p/=h,m/=h,f*i[0]+p*i[1]+m*i[2]<0&&(f=-f,p=-p,m=-m);let g=a||[0,0,1,1],_=this.v(e[0],e[1],e[2],f,p,m,g[0],g[1]),v=this.v(t[0],t[1],t[2],f,p,m,g[2],g[1]),y=this.v(n[0],n[1],n[2],f,p,m,g[2],g[3]),b=this.v(r[0],r[1],r[2],f,p,m,g[0],g[3]);return this.triAuto(_,v,y),this.triAuto(_,y,b),this}triOut(e,t,n,r){let i=t[0]-e[0],a=t[1]-e[1],o=t[2]-e[2],s=n[0]-e[0],c=n[1]-e[1],l=n[2]-e[2],u=a*l-o*c,d=o*s-i*l,f=i*c-a*s,p=Math.hypot(u,d,f)||1;return u/=p,d/=p,f/=p,u*r[0]+d*r[1]+f*r[2]<0&&(u=-u,d=-d,f=-f),this.triAuto(this.v(e[0],e[1],e[2],u,d,f),this.v(t[0],t[1],t[2],u,d,f),this.v(n[0],n[1],n[2],u,d,f)),this}add(e){let t=this.count;for(let t=0;t<e.p.length;t++)this.p.push(e.p[t]);for(let t=0;t<e.n.length;t++)this.n.push(e.n[t]);for(let t=0;t<e.uv.length;t++)this.uv.push(e.uv[t]);for(let t=0;t<e.c.length;t++)this.c.push(e.c[t]);for(let n=0;n<e.idx.length;n++)this.idx.push(e.idx[n]+t);return this.count+=e.count,this}build(){let e=new Ar;e.setAttribute(`position`,new hr(new Float32Array(this.p),3)),e.setAttribute(`normal`,new hr(new Float32Array(this.n),3)),e.setAttribute(`uv`,new hr(new Float32Array(this.uv),2));let t=new Uint8Array(this.c.length);for(let e=0;e<t.length;e++)t[e]=Math.max(0,Math.min(255,Math.round(this.c[e]*255)));return e.setAttribute(`color`,new hr(t,4,!0)),e.setIndex(this.count>65535?new hr(new Uint32Array(this.idx),1):new hr(new Uint16Array(this.idx),1)),e.computeBoundingBox(),e.computeBoundingSphere(),e}},Z={PLAIN:0,JALI:1,VINE:2,LOTUS:3,BEADS:4,DENTIL:5,KEY:6,ROSETTE:7,KNOT:8,CHEVRON:9,SCALES:10,NICHE:11,FLUTES:12,DIAMOND:13,WAVE:14,GLYPH:15,COUNT:16},Ju=`
#define TAU 6.28318530718
float sat1(float x) { return clamp(x, 0.0, 1.0); }
float h21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float sdBox2(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
// rounded relief profile: 0 outside, rising like a quarter circle over width w
float dome(float d, float w) { float t = sat1(-d / w); return sqrt(1.0 - (1.0 - t) * (1.0 - t)); }
float ridge(float d, float w) { float t = sat1(1.0 - abs(d) / w); return sqrt(1.0 - (1.0 - t) * (1.0 - t)); }
float segd(vec2 p, vec2 a, vec2 b) { vec2 pa = p - a, ba = b - a; float h = sat1(dot(pa, ba) / dot(ba, ba)); return length(pa - ba * h); }

float pJali(vec2 uv) {
  vec2 p = fract(uv * 4.0) - 0.5;
  float h = ridge(abs(p.x) + abs(p.y) - 0.44, 0.075) * 0.9;
  float a = atan(p.y, p.x), r = length(p);
  h = max(h, dome(r - 0.19 - 0.055 * cos(a * 8.0), 0.09) * 0.75);
  h = max(h, dome(r - 0.075, 0.06));
  vec2 q = abs(p) - 0.5;
  h = max(h, dome(length(q) - 0.085, 0.06) * 0.8);
  h -= 0.25 * ridge(r - 0.135, 0.02);
  return h;
}
float pVine(vec2 uv) {
  vec2 p = vec2(fract(uv.x * 2.0) - 0.5, fract(uv.y));
  float h = ridge(p.x - 0.17 * sin(p.y * TAU), 0.055) * 0.8;
  for (int k = 0; k < 2; k++) {
    float sgn = k == 0 ? -1.0 : 1.0;
    for (int w = -1; w <= 1; w++) {
      vec2 c = vec2(sgn * 0.2, 0.25 + 0.5 * float(k) + float(w));
      vec2 d = p - c; float r = length(d), a = atan(d.y, d.x);
      float sp = abs(fract(r * 7.5 - sgn * a / TAU) - 0.5);
      h = max(h, (1.0 - smoothstep(0.08, 0.3, sp)) * (1.0 - smoothstep(0.17, 0.21, r)) * 0.85);
      h = max(h, dome(r - 0.05, 0.04));
      // leaf
      vec2 l = d - vec2(-sgn * 0.17, 0.12);
      h = max(h, dome(length(l * vec2(1.0, 0.55)) - 0.06, 0.05) * 0.7);
    }
  }
  return h;
}
float pLotus(vec2 uv) {
  float y = fract(uv.y);
  float x = fract(uv.x * 6.0) - 0.5, x2 = fract(uv.x * 6.0 + 0.5) - 0.5;
  float w = 0.47 * sqrt(max(0.0, 1.0 - pow(y, 1.9)));
  float w2 = 0.44 * sqrt(max(0.0, 1.0 - pow(y / 0.8, 1.9)));
  float h = 0.5 * dome(abs(x2) - w2, 0.2) * step(y, 0.8);
  float f = dome(abs(x) - w, 0.2);
  h = max(h, f * (0.75 + 0.25 * y) + 0.14 * ridge(x, 0.035) * f);
  return h * smoothstep(0.0, 0.05, y);
}
float pBeads(vec2 uv) {
  float x = fract(uv.x * 4.0); float y = fract(uv.y) - 0.5;
  float h = dome(length(vec2((x - 0.32) * 1.0, y * 0.62) / vec2(0.26, 0.26)) - 1.0, 0.75) ;
  h = max(h, dome(length(vec2((x - 0.74) * 4.0, y * 0.8)) - 0.26, 0.2) * 0.85);
  h = max(h, dome(length(vec2((x - 0.90) * 4.0, y * 0.8)) - 0.26, 0.2) * 0.85);
  return h * (1.0 - smoothstep(0.38, 0.5, abs(y)));
}
float pDentil(vec2 uv) {
  float x = fract(uv.x * 5.0) - 0.5, y = fract(uv.y) - 0.5;
  float h = 1.0 - smoothstep(-0.03, 0.0, sdBox2(vec2(x, y + 0.04), vec2(0.3, 0.36)));
  return h * 0.95 + 0.05 * (1.0 - smoothstep(0.42, 0.46, abs(y)));
}
float pKey(vec2 uv) {
  vec2 p = vec2(fract(uv.x * 3.0), fract(uv.y));
  float d = 1e3; float w = 0.055;
  d = min(d, segd(p, vec2(0.0, 0.14), vec2(0.86, 0.14)));
  d = min(d, segd(p, vec2(0.86, 0.14), vec2(0.86, 0.86)));
  d = min(d, segd(p, vec2(0.86, 0.86), vec2(0.28, 0.86)));
  d = min(d, segd(p, vec2(0.28, 0.86), vec2(0.28, 0.42)));
  d = min(d, segd(p, vec2(0.28, 0.42), vec2(0.58, 0.42)));
  d = min(d, segd(p, vec2(0.58, 0.42), vec2(0.58, 0.62)));
  d = min(d, segd(p, vec2(1.0, 0.14), vec2(1.0, 0.14)));
  return 1.0 - smoothstep(w, w + 0.035, d);
}
float pRosette(vec2 uv) {
  vec2 p = fract(uv) - 0.5; float r = length(p), a = atan(p.y, p.x);
  float h = ridge(r - 0.455, 0.035) * 0.9;
  h = max(h, dome(r - 0.30 - 0.085 * abs(cos(a * 6.0)), 0.14) * 0.8);
  h = max(h, dome(r - 0.17 - 0.04 * abs(cos(a * 6.0 + 1.5708)), 0.08) * 0.92);
  h = max(h, dome(r - 0.075, 0.07));
  h -= 0.2 * ridge(sin(a * 6.0) * r, 0.012) * smoothstep(0.12, 0.2, r) * (1.0 - smoothstep(0.3, 0.38, r));
  // corner leaves
  vec2 q = abs(p) - 0.5; h = max(h, dome(length(q) - 0.11, 0.08) * 0.7);
  return h;
}
float pKnot(vec2 uv) {
  float x = uv.x * 2.0 * TAU, y = fract(uv.y) - 0.5;
  float a = y - 0.27 * sin(x), b = y + 0.27 * sin(x);
  float over = 0.5 + 0.5 * cos(x);                    // which strand is on top
  float ha = ridge(a, 0.11) * (0.72 + 0.28 * over), hb = ridge(b, 0.11) * (1.0 - 0.28 * over);
  float h = max(ha, hb);
  h -= 0.18 * (ridge(a, 0.025) + ridge(b, 0.025));
  h = max(h, 0.9 * (1.0 - smoothstep(0.035, 0.05, abs(abs(y) - 0.45))));
  return h;
}
float pChevron(vec2 uv) {
  float z = fract(uv.y * 3.0 + abs(fract(uv.x * 4.0) - 0.5) * 1.6) - 0.5;
  return ridge(z, 0.3);
}
float pScales(vec2 uv) {
  vec2 g = uv * vec2(6.0, 6.0); float row = floor(g.y);
  vec2 p = vec2(fract(g.x + 0.5 * mod(row, 2.0)) - 0.5, fract(g.y));
  float r = length(vec2(p.x, p.y - 1.0) * vec2(1.0, 0.95));
  float h = (1.0 - smoothstep(0.52, 0.58, r)) * (0.35 + 0.65 * sat1(1.0 - p.y)) ;
  h = max(h, 0.3 * (1.0 - p.y));
  h -= 0.25 * ridge(r - 0.55, 0.04);
  return h;
}
float pNiche(vec2 uv) {
  vec2 p = vec2(fract(uv.x) - 0.5, fract(uv.y));
  // frame with pointed-arch opening
  float arch = max(abs(p.x) - 0.33, p.y - 0.62);
  float top = length(vec2(p.x, (p.y - 0.62) * 0.9)) - 0.33;
  float open = p.y > 0.62 ? top : arch;
  open = max(open, 0.07 - p.y);
  float h = smoothstep(-0.02, 0.02, open);                       // 1 = frame, 0 = niche floor
  h = max(h * 0.95, 0.12);
  // hood moulding
  h = max(h, 1.0 * (1.0 - smoothstep(0.02, 0.05, abs(open - 0.05))));
  // seated figure
  float body = length(vec2(p.x, (p.y - 0.30) * 0.75)) - 0.17;
  float head = length(vec2(p.x, p.y - 0.58)) - 0.075;
  float knees = length(vec2(abs(p.x) - 0.12, (p.y - 0.15) * 1.3)) - 0.11;
  h = max(h, 0.2 + 0.62 * dome(min(min(body, head), knees), 0.12));
  // base lotus
  h = max(h, 0.75 * (1.0 - smoothstep(0.0, 0.02, abs(p.y - 0.045) - 0.03)) * (0.7 + 0.3 * abs(cos(p.x * 40.0))));
  return h;
}
float pFlutes(vec2 uv) { float x = fract(uv.x * 8.0) - 0.5; return sqrt(sat1(abs(x) * 2.0)) * 0.9 + 0.1; }
float pDiamond(vec2 uv) { vec2 p = fract(uv * 4.0) - 0.5; return sat1(1.0 - 2.0 * max(abs(p.x), abs(p.y))) * 0.9 + 0.1 * step(max(abs(p.x), abs(p.y)), 0.46); }
float pWave(vec2 uv) {
  vec2 p = vec2(fract(uv.x * 3.0), fract(uv.y));
  vec2 d = p - vec2(0.5, 0.45); float r = length(d), a = atan(d.y, d.x);
  float sp = abs(fract(r * 4.2 - a / TAU) - 0.5);
  float h = (1.0 - smoothstep(0.1, 0.3, sp)) * (1.0 - smoothstep(0.36, 0.42, r));
  h = max(h, ridge(p.y - 0.12 - 0.05 * sin(p.x * TAU), 0.07) * 0.8);
  h = max(h, dome(r - 0.07, 0.05));
  return h;
}
float pGlyph(vec2 uv) {
  vec2 g = uv * vec2(8.0, 2.0); vec2 id = floor(g); vec2 p = fract(g) - 0.5;
  float n = h21(id), n2 = h21(id + 7.7);
  float d = 1e3;
  d = min(d, segd(p, vec2(-0.25, -0.3 + 0.2 * n), vec2(-0.25, 0.3)));
  if (n > 0.3) d = min(d, segd(p, vec2(-0.25, 0.3 - 0.4 * n2), vec2(0.25, 0.25 * (n - 0.5))));
  if (n2 > 0.4) d = min(d, segd(p, vec2(0.25, -0.3), vec2(0.25, 0.3 * n)));
  if (n > 0.6) d = min(d, abs(length(p - vec2(0.0, -0.1)) - 0.14));
  if (n2 < 0.3) d = min(d, segd(p, vec2(-0.2, -0.32), vec2(0.2, -0.32)));
  float h = 1.0 - smoothstep(0.04, 0.085, d);
  return max(h, 0.85 * (1.0 - smoothstep(0.02, 0.04, abs(abs(fract(uv.y) - 0.5) - 0.46))));
}
float pattern(vec2 uv, int id) {
  if (id == 1) return pJali(uv); if (id == 2) return pVine(uv); if (id == 3) return pLotus(uv); if (id == 4) return pBeads(uv);
  if (id == 5) return pDentil(uv); if (id == 6) return pKey(uv); if (id == 7) return pRosette(uv); if (id == 8) return pKnot(uv);
  if (id == 9) return pChevron(uv); if (id == 10) return pScales(uv); if (id == 11) return pNiche(uv); if (id == 12) return pFlutes(uv);
  if (id == 13) return pDiamond(uv); if (id == 14) return pWave(uv); if (id == 15) return pGlyph(uv);
  return 0.5;
}
`;function Yu(t,n=512){let r=t.renderer,i=new Yt(n,n,{type:g,format:w,minFilter:o,magFilter:o,wrapS:e,wrapT:e,depthBuffer:!1}),a=new Zt(n,n,Z.COUNT,{type:l,format:w,depthBuffer:!1,generateMipmaps:!0,minFilter:c,magFilter:o,wrapS:e,wrapT:e,anisotropy:8}),s=new Wi({depthTest:!1,depthWrite:!1,uniforms:{uId:{value:0}},vertexShader:gl,fragmentShader:`${Ju}\nuniform int uId; varying vec2 vUv;\nvoid main() {
  // 4x supersample for clean edges
  float h = 0.0; vec2 px = vec2(${(.25/n).toFixed(7)});
  h += pattern(vUv + px * vec2(-1.0, -1.0), uId); h += pattern(vUv + px * vec2(1.0, -1.0), uId);
  h += pattern(vUv + px * vec2(-1.0, 1.0), uId); h += pattern(vUv + px * vec2(1.0, 1.0), uId);
  gl_FragColor = vec4(clamp(h * 0.25, 0.0, 1.0)); }`}),u=new Wi({depthTest:!1,depthWrite:!1,uniforms:{uH:{value:i.texture},uTexel:{value:1/n},uStrength:{value:.06*n/512}},vertexShader:gl,fragmentShader:`
uniform sampler2D uH; uniform float uTexel, uStrength; varying vec2 vUv;
float H(vec2 o) { return texture(uH, vUv + o * uTexel).r; }
void main() {
  float h = H(vec2(0.0));
  float dx = (H(vec2(1.0, 0.0)) - H(vec2(-1.0, 0.0))) + 0.5 * (H(vec2(1.0, 1.0)) - H(vec2(-1.0, 1.0)) + H(vec2(1.0, -1.0)) - H(vec2(-1.0, -1.0)));
  float dy = (H(vec2(0.0, 1.0)) - H(vec2(0.0, -1.0))) + 0.5 * (H(vec2(1.0, 1.0)) - H(vec2(1.0, -1.0)) + H(vec2(-1.0, 1.0)) - H(vec2(-1.0, -1.0)));
  vec3 n = normalize(vec3(-dx, -dy, uStrength * 2.0));
  // cavity: how far below the local average this texel sits
  float avg = 0.0; float wsum = 0.0;
  for (int j = -3; j <= 3; j++) for (int i = -3; i <= 3; i++) { float w = exp(-float(i * i + j * j) / 8.0); avg += H(vec2(float(i), float(j)) * 3.0) * w; wsum += w; }
  avg /= wsum;
  float cav = clamp(0.5 + (h - avg) * 2.2, 0.0, 1.0);
  gl_FragColor = vec4(n.xy * 0.5 + 0.5, h, cav);
}`}),d=r.autoClear;r.autoClear=!0;for(let e=0;e<Z.COUNT;e++)s.uniforms.uId.value=e,t._fsMesh.material=s,r.setRenderTarget(i),r.render(t._fsScene,t._fsCam),t._fsMesh.material=u,r.setRenderTarget(a,e),r.render(t._fsScene,t._fsCam);r.setRenderTarget(null),r.autoClear=d;let f=a.texture;return i.dispose(),s.dispose(),u.dispose(),f}var Xu=`
uniform highp sampler2DArray uOrn;
// returns (normal.xy, height, cavity); uv in pattern tiles, layer = pattern id; Vt = view dir in tangent space (z out of the surface)
vec4 carve(vec2 uv, float layer, vec3 Vt, float depth, out vec2 uvOut) {
  uvOut = uv;
  if (depth > 0.0 && Vt.z > 0.05) {
    const int STEPS = 10;
    vec2 dUv = -Vt.xy / Vt.z * depth / float(STEPS);
    float hRay = 1.0, dh = 1.0 / float(STEPS);
    vec2 cur = uv; float hTex = texture(uOrn, vec3(cur, layer)).b;
    vec2 prev = cur; float prevH = hTex, prevRay = hRay;
    for (int i = 0; i < STEPS; i++) {
      if (hRay <= hTex) break;
      prev = cur; prevH = hTex; prevRay = hRay;
      cur += dUv; hRay -= dh; hTex = texture(uOrn, vec3(cur, layer)).b;
    }
    float a = hTex - hRay, b = prevRay - prevH;
    uvOut = mix(cur, prev, a / max(a + b, 1e-4));
  }
  return texture(uOrn, vec3(uvOut, layer));
}
`;function Zu(e,{color:t=[.4,.215,.125],set:n=`red_sandstone_pavement`,name:r=`carved`,grain:i=.85}={}){let a=au(n);return Vu({name:r,vertexColors:!0,uniforms:{tCD:{value:a.diff},tCN:{value:a.nor},tCA:{value:a.arm},uOrn:{value:e},uAvgC:{value:new H(...Uu[n])},uColC:{value:new W().setRGB(...t)},uGrain:{value:i}},fragPars:Hu(`tC`)+Xu+`uniform vec3 uAvgC, uColC; uniform float uGrain;
`,surface:`
  float tone = vColor.r, layer = floor(vColor.a * 15.0 + 0.5);
  float dist = length(P - cameraPosition);
  // tangent frame from derivatives (uv is in pattern tiles)
  vec3 dp1 = dFdx(P), dp2 = dFdy(P); vec2 du1 = dFdx(vUv), du2 = dFdy(vUv);
  vec3 dp2perp = cross(dp2, Ng), dp1perp = cross(Ng, dp1);
  vec3 T = dp2perp * du1.x + dp1perp * du2.x, B = dp2perp * du1.y + dp1perp * du2.y;
  float invmax = inversesqrt(max(dot(T, T), dot(B, B)) + 1e-20); T *= invmax; B *= invmax;
  vec3 Vt = vec3(dot(V, T), dot(V, B), dot(V, Ng));
  float relief = vColor.g * 0.25 * step(0.5, layer) * (1.0 - smoothstep(14.0, 45.0, dist));
  vec2 uvp;
  vec4 cv = carve(vUv, layer, Vt, relief, uvp);
  float carved = step(0.5, layer);
  vec3 tn = vec3((cv.rg * 2.0 - 1.0) * carved * (0.7 + 2.2 * vColor.g), 1.0);
  vec3 Nc = normalize(T * tn.x + B * tn.y + Ng * tn.z);
  float cav = mix(0.5, cv.a, carved), hgt = mix(0.5, cv.b, carved);
  // stone body
  vec3 w = triW(Ng, 5.0);
  vec3 pS = P * uGrain;
  vec3 d = triTex(tCD, pS, w).rgb / uAvgC;
  vec3 nS = triNrm(tCN, pS, Nc, w, 0.55);
  vec3 arm = triTex(tCA, pS, w).rgb;
  vec4 mac = noiseTex(P.xz * 0.21 + P.y * 0.13);
  vec4 mac2 = noiseTex(vec2(P.x + P.z, P.y) * 0.047);
  vec3 alb = uColC * tone * mix(vec3(1.0), d, 0.75) * (0.82 + 0.36 * mac2.r);
  // dirt and soot settle in the cuts, arrises are worn pale
  alb *= mix(0.42, 1.0, smoothstep(0.08, 0.55, cav));
  float wear = smoothstep(0.6, 0.92, cav) * smoothstep(0.35, 0.75, mac.g + hgt * 0.3);
  alb = mix(alb, alb * 1.35 + vec3(0.03, 0.02, 0.012), wear * 0.7);
  // dust lies on every upward step
  alb = mix(alb, vec3(0.50, 0.37, 0.25) * tone, smoothstep(0.5, 0.95, Ng.y) * 0.55);
  // soot streaks (lamp smoke) where masked
  alb *= mix(1.0, 0.45, vColor.b * smoothstep(0.3, 0.8, mac2.g));
  s.albedo = alb;
  s.N = nS;
  s.rough = clamp(arm.g * 1.05 + 0.08 * (1.0 - cav), 0.5, 1.0);
  s.ao = mix(0.5, 1.0, smoothstep(0.0, 0.6, cav)) * mix(1.0, arm.r, 0.6) * min(1.0, tone * 1.1);
  s.spec = 0.55;
`})}var Qu=class{constructor(){this.g=new X,this.tone=1,this.soot=0}_set(e,t){this.g.color(this.tone,Math.min(1,t/.25),this.soot,e/15)}band(e,t,n,r=0,i=1,a=t-e,o=.1,s=n){let c=this.g;return this._set(r,o),c.uvMap(1/i,1/a,.5,-e/a),c.frame([[0,e],[0,t]],n,s),c.uvMap(),this}mould(e,t,{capTop:n=!1,capBottom:r=!1,hd:i=t}={}){return this._set(0,0),this.g.uvMap(),this.g.frame(e,t,i,{capTop:n,capBottom:r}),this}mouldBand(e,t,n,r,i,a=.1,o=n){let s=this.g;this._set(r,a);let c=Math.hypot(t[0]-e[0],t[1]-e[1]);return s.uvMap(1/i,1/(t[1]-e[1]||c),.5,-e[1]/(t[1]-e[1]||c)),s.frame([e,t],n,o),s.uvMap(),this}top(e,t,n=t){return this._set(0,0),this.g.quad([-t,e,-n],[-t,e,n],[t,e,n],[t,e,-n]),this}under(e,t,n=t){return this._set(0,0),this.g.quad([-t,e,-n],[t,e,-n],[t,e,n],[-t,e,n]),this}posts(e,t,n,r,i,a,o=.12){let s=this.g;for(let c of[-1,1])for(let l of[-1,1])s.push().translate(c*(n-r/2+.05),0,l*(n-r/2+.05)),this._set(i,o),s.uvMap(1/a,1/a,.5,-e/a),s.frame([[0,e],[0,t]],r/2,r/2),s.uvMap(),s.pop();return this}build(){return this.g.build()}};function $u({W:e=2.6,H:t=16,seed:n=1}={}){let r=new Qu,i=e/2.6,a=e=>e*i,o=0,s=e=>{let t=o;return o+=e,[t,o]};r.tone=.92;let[c,l]=s(.5);r.mould([[0,c],[.06,c+.05],[.06,l-.08],[0,l]],a(1.66)),r.top(l,a(1.66)),r.tone=1,[c,l]=s(.34),r.mould([[0,c],[.07,c+.08],[.09,c+.17],[.07,c+.26],[0,l]],a(1.54)),r.top(l,a(1.54)),r.tone=.98,[c,l]=s(1.7),r.band(c,l,a(1.5),Z.NICHE,a(1.5),1.7,.16),r.top(l,a(1.5)),r.tone=1.03,[c,l]=s(.2),r.band(c,l,a(1.56),Z.BEADS,.8,.2,.2),r.top(l,a(1.56)),[c,l]=s(.46),r.mouldBand([0,c],[.2,l],a(1.42),Z.LOTUS,1.5,.2),r.top(l,a(1.62)),r.tone=.97,[c,l]=s(.16),r.mould([[0,c],[0,l]],a(1.47)),r.top(l,a(1.47));let u=o;[c,l]=s(3.9),r.tone=.93,r.band(c,l,a(1.2),Z.JALI,.9,.9,.18),r.tone=1.02,r.posts(c,l,a(1.3),a(.36),Z.VINE,.72,.16),r.tone=1.04,r.band(u+1.75,u+2.05,a(1.36),Z.KNOT,.6,.3,.2),r.top(u+2.05,a(1.36)),r.under(u+1.75,a(1.36)),r.top(l,a(1.3)),r.tone=1.03,[c,l]=s(.26),r.band(c,l,a(1.37),Z.KEY,.78,.26,.2),r.top(l,a(1.37)),r.under(c,a(1.37)),[c,l]=s(.3),r.band(c,l,a(1.43),Z.DENTIL,.75,.3,.22),r.top(l,a(1.43)),r.under(c,a(1.43)),r.tone=1,[c,l]=s(.75),r.mouldBand([.02,c],[.34,l],a(1.42),Z.SCALES,1.2,.14),r.under(c,a(1.44)),r.tone=1.05,[c,l]=s(.3),r.mould([[0,c],[.05,c+.04],[.05,l-.04],[0,l]],a(1.7)),r.top(l,a(1.7)),r.under(c,a(1.7)),r.tone=.98,[c,l]=s(.24),r.band(c,l,a(1.62),Z.CHEVRON,.5,.24,.16),r.top(l,a(1.62)),[c,l]=s(3),r.tone=.92,r.band(c,l,a(1.08),Z.ROSETTE,a(1.08),1,.16),r.tone=1.02,r.posts(c,l,a(1.18),a(.32),Z.GLYPH,.64,.14),r.top(l,a(1.18)),r.tone=1.03,[c,l]=s(.2),r.band(c,l,a(1.25),Z.BEADS,.8,.2,.2),r.top(l,a(1.25)),r.under(c,a(1.25)),[c,l]=s(.42),r.mouldBand([0,c],[.18,l],a(1.25),Z.LOTUS,1.4,.2),r.tone=1;for(let e=0;e<3;e++){let t=a(1.45+e*.2);[c,l]=s(.42),r.band(c,l,t,[Z.WAVE,Z.DIAMOND,Z.KEY][e],[.9,.42,1.2][e],.42,.18),r.under(c,t),r.top(l,t)}return r.tone=.95,[c,l]=s(Math.max(.5,t-o)),r.mould([[0,c],[0,l]],a(2)),r.under(c,a(2)),r.build()}var ed=e=>new H(...Uu[e]);function td(){let e=au(`old_sandstone_02`),t=au(`marble_cliff_03`),n=au(`rock_face_03`);return Vu({name:`grotto-rock`,vertexColors:!0,uniforms:{tSandD:{value:e.diff},tSandN:{value:e.nor},tSandA:{value:e.arm},tBlockD:{value:t.diff},tCaveD:{value:n.diff},tCaveN:{value:n.nor},tCaveA:{value:n.arm},uAvgSand:{value:ed(`old_sandstone_02`)},uAvgBlock:{value:ed(`marble_cliff_03`)},uAvgCave:{value:ed(`rock_face_03`)},uColSand:{value:new W().setRGB(.5,.335,.19)},uColSandDark:{value:new W().setRGB(.4,.19,.075)},uColCave:{value:new W().setRGB(.165,.118,.078)},uColDust:{value:new W().setRGB(.535,.395,.25)}},fragPars:Hu(`tSand`)+Hu(`tCave`)+`
uniform sampler2D tBlockD;
uniform vec3 uAvgSand, uAvgBlock, uAvgCave, uColSand, uColSandDark, uColCave, uColDust;
`,surface:`
  float vao = vColor.r, inner = vColor.g, vari = vColor.b, flatness = vColor.a;
  vec3 w = triW(Ng, 5.0);
  vec3 dPx = dFdx(P), dPy = dFdy(P);
  // large scale variation so no two metres look alike
  vec4 mac = noiseTex(P.xz * 0.013 + P.y * 0.007);
  vec4 mac2 = noiseTex(P.xy * 0.031 + P.z * 0.017);
  float macro = mac.r * 0.6 + mac2.g * 0.4;
  float band = noiseTex(vec2(P.y * 0.11 + mac.g * 0.35, 0.37 + P.x * 0.002)).r;
  float band2 = noiseTex(vec2(P.y * 0.43 + mac.r * 0.2, 0.71)).g;
  float side = 1.0 - smoothstep(0.25, 0.8, Ng.y);
  vec3 albS = vec3(0.0), nS = Ng, albC = vec3(0.0), nC = Ng;
  float roughS = 0.9, aoS = 1.0, roughC = 0.9, aoC = 1.0;
  // ---- exterior: stratified sandstone (skipped deep inside the cave, where none of it shows)
  if (inner < 0.996) {
    const vec3 sS = vec3(0.19, 0.24, 0.19);
    vec3 pS = P * sS, dSx = dPx * sS, dSy = dPy * sS;
    vec3 dS = triTexG(tSandD, pS, w, dSx, dSy).rgb / uAvgSand;
    nS = triNrmG(tSandN, pS, Ng, w, 1.15, dSx, dSy);
    vec3 aS = triTexG(tSandA, pS, w, dSx, dSy).rgb;
    vec3 dB = triTexG(tBlockD, P * 0.27 + 3.7, w, dPx * 0.27, dPy * 0.27).rgb / uAvgBlock;
    float blend = smoothstep(0.35, 0.7, vari * 0.7 + mac2.r * 0.5);
    vec3 det = mix(dS, dB, blend * 0.6);
    // colour bands follow the bedding: iron-rich layers are redder and darker
    vec3 sandCol = mix(uColSand, uColSandDark, sat(side * (0.62 + 0.6 * smoothstep(0.38, 0.7, band)) + (band2 - 0.5) * 0.3 * side));
    albS = sandCol * mix(vec3(1.0), det, 0.85) * (0.86 + 0.28 * macro) * (1.0 - 0.34 * side);
    // wind-blown dust settles on flat tops
    float dust = flatness * smoothstep(0.25, 0.6, mac2.b + 0.25) * (1.0 - inner * 0.6);
    albS = mix(albS, uColDust * (0.9 + 0.2 * det.g), dust * 0.75);
    roughS = mix(aS.g, 0.95, dust * 0.5); aoS = aS.r;
  }
  // ---- interior: dark pitted cave rock (skipped on the open cliff)
  if (inner > 0.004) {
    vec3 pC = P * 0.23 + 1.3, dCx = dPx * 0.23, dCy = dPy * 0.23;
    vec3 dC = triTexG(tCaveD, pC, w, dCx, dCy).rgb / uAvgCave;
    nC = triNrmG(tCaveN, pC, Ng, w, 1.3, dCx, dCy);
    vec3 aC = triTexG(tCaveA, pC, w, dCx, dCy).rgb;
    albC = uColCave * mix(vec3(1.0), dC, 0.9) * (0.75 + 0.5 * macro);
    // soot and damp streaks under overhangs
    albC *= mix(1.0, 0.72, smoothstep(0.2, -0.5, Ng.y) * mac.b);
    roughC = aC.g * 0.95; aoC = aC.r;
  }
  s.albedo = mix(albS, albC, inner);
  s.N = normalize(mix(nS, nC, inner));
  s.rough = mix(roughS, roughC, inner);
  float tao = mix(aoS, aoC, inner);
  s.ao = vao * mix(1.0, tao, 0.8);
  s.spec = 0.6;
  // warm light thrown back by the sunlit ground onto the outer rock faces (open shade is never black here)
  s.emissive = albS * vec3(0.30, 0.20, 0.11) * side * (1.0 - inner) * vao;
`})}async function nd(e,t){let n=new On;n.name=`grotto`,e.add(n);let[r,i]=await Promise.all([ou(lu(`grotto`)),ou(lu(`grotto_gi`).catch(()=>null))]),a=new G(uu(r),td());a.name=`grotto-rock`,n.add(a);let o=null;i&&(o=du(i));let s=Zu(t.orn),c=new G($u({W:2.6,H:16.5}),s);return c.name=`grotto-pillar`,c.position.set(ku.pillar[0],ku.pillar[1]-.15,ku.pillar[2]),c.rotation.y=.2,c.updateMatrixWorld(!0),n.add(c),{group:n,rock:a,gi:o,pillar:c,carved:s}}function rd(e){e?(J.uGiTex.value=e.tex,J.uGiClamp.value.copy(e.clamp),J.uGiScale.value.copy(e.scale),J.uGiBias.value.copy(e.bias),J.uGiOn.value=1):J.uGiOn.value=0}var id=e=>new H(...Uu[e]);function ad(){let e=au(`rock_boulder_dry`);return Vu({name:`white-rock`,vertexColors:!0,uniforms:{tWD:{value:e.diff},tWN:{value:e.nor},tWA:{value:e.arm},uAvgW:{value:id(`rock_boulder_dry`)},uColW:{value:new W().setRGB(.9,.86,.79)},uColStain:{value:new W().setRGB(.7,.64,.56)}},fragPars:Hu(`tW`)+`uniform vec3 uAvgW, uColW, uColStain;
`,surface:`
  float vao = vColor.r, streak = vColor.g, flatness = vColor.a;
  vec3 w = triW(Ng, 4.0);
  float dist = length(P - cameraPosition);
  float nearW = 1.0 - smoothstep(40.0, 260.0, dist);
  vec3 pF = P * vec3(0.019, 0.011, 0.019);          // stretched vertically: flow marks
  vec3 dF = triTex(tWD, pF, w).rgb / uAvgW;
  vec3 nF = triNrm(tWN, pF, Ng, w, 1.7);
  vec3 pN = P * 0.14;
  vec3 dN = triTex(tWD, pN, w).rgb / uAvgW;
  vec3 nN = triNrm(tWN, pN, Ng, w, 1.2);
  vec3 arm = triTex(tWA, pN, w).rgb;
  vec3 det = mix(dF, dF * dN, nearW * 0.7);
  // mineral staining runs down the flutes; ledges and tops stay clean white
  float st2 = noiseTex(vec2(P.x * 0.011 + P.z * 0.007, P.y * 0.0016)).g;
  float stain = smoothstep(0.45, 0.8, streak * 0.6 + st2 * 0.55) * (1.0 - smoothstep(0.35, 0.8, Ng.y));
  vec3 alb = mix(uColW, uColStain, stain * 0.75) * mix(vec3(1.0), det, 0.55);
  alb = mix(alb, uColW * 1.06, flatness * 0.5);
  s.albedo = alb;
  s.N = normalize(mix(nF, nN, nearW * 0.65));
  s.rough = mix(0.9, arm.g, nearW * 0.8);
  s.ao = vao * mix(1.0, arm.r, nearW * 0.6);
  s.spec = 0.7;
`})}function od(){let e=au(`cliff_side`);return Vu({name:`stele-rock`,vertexColors:!0,uniforms:{tRD:{value:e.diff},tRN:{value:e.nor},tRA:{value:e.arm},uAvgR:{value:id(`cliff_side`)},uColR:{value:new W().setRGB(.17,.16,.15)},uColR2:{value:new W().setRGB(.25,.225,.2)}},fragPars:Hu(`tR`)+`uniform vec3 uAvgR, uColR, uColR2;
`,surface:`
  float vao = vColor.r, vari = vColor.g, flatness = vColor.a;
  vec3 w = triW(Ng, 4.0);
  float dist = length(P - cameraPosition);
  float nearW = 1.0 - smoothstep(60.0, 300.0, dist);
  vec3 pF = P * vec3(0.012, 0.016, 0.012);
  vec3 dF = triTex(tRD, pF, w).rgb / uAvgR;
  vec3 nF = triNrm(tRN, pF, Ng, w, 1.8);
  vec3 pN = P * 0.1;
  vec3 dN = triTex(tRD, pN, w).rgb / uAvgR;
  vec3 nN = triNrm(tRN, pN, Ng, w, 1.2);
  vec3 arm = triTex(tRA, pN, w).rgb;
  vec3 det = mix(dF, dF * dN, nearW * 0.7);
  vec3 alb = mix(uColR, uColR2, smoothstep(0.3, 0.8, vari)) * mix(vec3(1.0), det, 0.7);
  // white travertine dust clings to ledges
  alb = mix(alb, vec3(0.62, 0.59, 0.55), flatness * 0.55);
  s.albedo = alb;
  s.N = normalize(mix(nF, nN, nearW * 0.6));
  s.rough = 0.92;
  s.ao = vao * mix(1.0, arm.r, nearW * 0.6);
  s.spec = 0.5;
`})}function sd(e,t){return 2.2*Pl(e/310,t/310)+.8*Pl(e/90+7,t/90)}function cd(){let e=au(`sandy_gravel`),t=au(`rocky_terrain`);return Vu({name:`plain`,uniforms:{tGD:{value:e.diff},tGN:{value:e.nor},tGA:{value:e.arm},tG2D:{value:t.diff},uAvgG:{value:id(`sandy_gravel`)},uAvgG2:{value:id(`rocky_terrain`)},uColSand:{value:new W().setRGB(.74,.66,.56)},uColSoil:{value:new W().setRGB(.36,.28,.205)},uColField:{value:new W().setRGB(.47,.42,.27)},uCityMask:{value:null},uCityRect:{value:new qt(-1e3,-1100,2e3,1100)}},fragPars:Hu(`tG`)+`uniform sampler2D tG2D, uCityMask; uniform vec3 uAvgG, uAvgG2, uColSand, uColSoil, uColField; uniform vec4 uCityRect;
`,surface:`
  float dist = length(P - cameraPosition);
  float nearW = 1.0 - smoothstep(30.0, 200.0, dist);
  vec2 uvF = P.xz * 0.013, uvN = P.xz * 0.21;
  vec3 dF = texture(tGD, uvF).rgb / uAvgG;
  vec3 dN = texture(tGD, uvN).rgb / uAvgG;
  vec3 d2 = texture(tG2D, P.xz * 0.05).rgb / uAvgG2;
  vec3 tn = texture(tGN, uvN).xyz * 2.0 - 1.0;
  vec4 mac = noiseTex(P.xz * 0.0011);
  vec4 mac2 = noiseTex(P.xz * 0.0063);
  vec4 cm = texture(uCityMask, (P.xz - uCityRect.xy) / uCityRect.zw);   // r: built-up, g: road, b: field
  float built = cm.r;
  vec3 sand = uColSand * (0.86 + 0.3 * mac.r) * mix(vec3(1.0), dF * mix(vec3(1.0), dN, nearW), 0.6);
  vec3 soil = uColSoil * (0.8 + 0.4 * mac2.g) * mix(vec3(1.0), d2, 0.7);
  // field strips outside the city
  float strip = step(0.5, fract((P.x * 0.86 + P.z * 0.5) * 0.045 + mac.b * 2.0));
  vec3 field = mix(uColField, uColField * vec3(0.72, 0.8, 0.6), strip) * (0.8 + 0.4 * mac2.r);
  vec3 alb = mix(sand, field, cm.b * 0.85);
  alb = mix(alb, soil, sat(built * 1.2));
  alb = mix(alb, uColSand * 0.9, cm.g * 0.8);
  s.albedo = alb;
  s.N = normalize(vec3(tn.x * nearW, 1.0, -tn.y * nearW) * vec3(0.6, 1.0, 0.6));
  s.rough = 0.95;
  s.ao = 1.0;
  s.spec = 0.5;
`})}async function ld(e,t){let[n,r]=await Promise.all([ou(lu(`scarp`)),ou(lu(`stele_rock`))]),i=new G(uu(n),ad());i.name=`scarp`;let a=new G(uu(r),od());a.name=`stele-rock`,e.add(i,a);let o=new Fi(1,1,220,150),s=o.attributes.position;for(let e=0;e<s.count;e++){let t=s.getX(e)*2,n=s.getY(e)*2,r=Math.sign(t)*Math.abs(t)**1.7*5200,i=-620+Math.sign(n)*Math.abs(n)**1.6*3400;s.setXYZ(e,r,sd(r,i),i)}o.computeVertexNormals();let c=o.index.array,l=c[0],u=c[1],d=c[2],f=s.getX(u)-s.getX(l),p=s.getZ(u)-s.getZ(l),m=s.getX(d)-s.getX(l),h=s.getZ(d)-s.getZ(l);if(p*m-f*h<0){for(let e=0;e<c.length;e+=3){let t=c[e+1];c[e+1]=c[e+2],c[e+2]=t}o.computeVertexNormals()}let g=cd(),_=new G(o,g);return _.name=`plain`,_.userData.noShadow=!0,e.add(_),{scarp:i,steleRock:a,plain:_,plainMat:g}}var ud=Math.cos(Au.yaw),dd=Math.sin(Au.yaw),fd={origin:[-37,Au.baseY,-1400],u:[ud,0,dd],w:[-dd,0,ud]};function pd(e,t,n){return[fd.origin[0]+e*fd.u[0]+n*fd.w[0],Au.baseY+t,fd.origin[2]+e*fd.u[2]+n*fd.w[2]]}var md=Au.faceWidth;Au.topY-Au.baseY;var hd={cx:-3,cy:122,r:54,rInner:37};function gd(e,t){let n=35.5,r=e/n,i=t/n,a=0,o=(e,t,n,r,i)=>{let a=1-e*e/(n*n)-t*t/(r*r);return a>0?Math.sqrt(a)*i:0},s=Math.hypot(r,i-.66);if(a=Math.max(a,.035*Y(.035,0,Math.abs(s-.235))+.012*(s<.235)),i<.56&&i>-.92){let e=(.56-i)/1.48,t=.205+.07*e*e+.03*Math.sin(e*3),n=1-r*r/(t*t);if(n>0){let t=.016*Math.cos(r*62+Math.sin(i*5)*1.4)*Y(.15,.6,e),o=Y(-.92,-.86,i);a=Math.max(a,(.105*Math.sqrt(n)*(.85+.15*e)+t*Math.sqrt(n))*o*Y(.56,.5,i))}}a=Math.max(a,o(r,i-.44,.27,.15,.12)),a=Math.max(a,o(r,i-.67,.098,.125,.16)),a=Math.max(a,o(r,i-.56,.05,.06,.1));let c=(e,t,n,a,o,s)=>{let c=r-e,l=i-t,u=n-e,d=a-t,f=Hl((c*u+l*d)/(u*u+d*d)),p=Math.hypot(c-u*f,l-d*f);return p<o?Math.sqrt(1-p*p/(o*o))*s:0};for(let e of[-1,1])a=Math.max(a,c(e*.215,.45,e*.235,.17,.062,.135)),a=Math.max(a,c(e*.235,.17,e*.07,.235,.055,.15));let l=Math.hypot(r,i-.255);return l<.105&&(a=Math.max(a,.155+.02*Y(.105,.085,l)-.012*Y(.07,.06,l)+.02*Math.sqrt(Math.max(0,1-(l/.06)**2)))),i<-.9&&i>-1.02&&Math.abs(r)<.3&&(a=Math.max(a,.09)),a*n*2.1}function _d(){let e=new X,t=md,n=t/2,r=Ol(77),i=(t=1)=>e.color(t,t,t,1);i(.96),e.box(0,135,-16,t,350,32,0),i(1),e.box(0,6,4,t+22,16,44,1.2),e.box(0,19,2,t+14,12,34,1),e.box(0,28,0,t+8,7,26,1.5);let a=(t,n,a,o,s)=>{i(1),e.box(t,o+9,a/2-2,n+8,18,a+8,1),e.box(t,o+21,a/2-2,n+4,6,a+4,1.4);let c=(s-o-24)/8;for(let s=0;s<8;s++){let l=o+24+s*c;i(.97+.05*r()),e.box(t,l+c*.5-1.6,a/2-2,n,c-3.2,a,.8),i(1.02),e.box(t,l+c-1.6,a/2-2,n+3,3.2,a+3,.9),i(.99);for(let r=0;r<5;r++){let i=t-n/2+n/5*(r+.5);e.box(i,l+c*.5-1.6,a+.2,n/5*.55,c-7,2.2,.6)}}},o={cx:n-17,w:36,out:18},s={cx:-n+15,w:30,out:14};a(o.cx,o.w,o.out,30,236),a(s.cx,s.w,s.out,30,200),e.push().translate(n-1,0,-19).rotY(-Math.PI/2),a(0,34,6,30,236),e.pop();let c=(t,n,a,o,s,c,l)=>{for(let u=0;u<a;u++){let d=o+u*s,f=u/Math.max(1,a-1),p=c*(.72+.28*f)+6*r();i(1.03),e.box(t+l*.25*n,d-5,10+4*f,l*.9+8*f,6,30+10*f,.8),e.box(t+n*(l*.3+p*.18),d-2.2,12+5*f,l*.6+p*.36,3.4,24+10*f,.6),i(1.06),e.box(t+p*.5*n,d+1.6,14+6*f,l+p,4.6,34+14*f,.9),e.box(t+n*(p*.5+4),d+4.8,14+6*f,l+p-12,2,30+14*f,.5)}};c(s.cx,-1,4,176,24,50,s.w),c(o.cx+6,1,3,222,26,44,o.w);let l=s.cx+s.w/2,u=o.cx-o.w/2,d=(l+u)/2,f=u-l;i(.99),e.box(d,37,2.5,f,6,5,.8),e.box(d,229,2.5,f,6,5,.8),e.box(l+3,133,2.5,6,198,5,.8),e.box(u-3,133,2.5,6,198,5,.8);let p=hd,m=(t,n,r,i,a,o)=>{let s=r-t,c=i-n,l=Math.hypot(s,c),u=Math.atan2(c,s);e.push().translate((t+r)/2,(n+i)/2,o/2).rotZ(u),e.box(0,0,0,l,a,o,.6),e.pop()},h=f/2-5;i(1.02),m(p.cx-h,p.cy,p.cx,p.cy+96,6.5,4.5),m(p.cx,p.cy+96,p.cx+h,p.cy,6.5,4.5),m(p.cx+h,p.cy,p.cx,p.cy-96+8,6.5,4.5),m(p.cx,p.cy-96+8,p.cx-h,p.cy,6.5,4.5),i(.98);for(let e of[-1,1])for(let t of[-1,1]){let n=e>0?u-6:l+6,r=t>0?226:40;for(let i=1;i<=3;i++){let a=i/4;m(n,r-96*.92*t*a,n-e*h*.92*a,r,3.2,2.6)}}e.push().translate(p.cx,p.cy,0).rotX(Math.PI/2),i(1.04),e.lathe([[p.r+3,0],[p.r+3,5],[p.r,7.5],[p.r-5,7.5],[p.r-7,4],[p.r-7,0]],96),i(1),e.lathe([[p.r-9,0],[p.r-9,3.5],[p.r-11,5],[p.r-14,5],[p.r-15.5,2.5],[p.r-15.5,0]],96),e.pop(),i(1.03);for(let t=0;t<44;t++){let n=t/44*Math.PI*2;e.push().translate(p.cx+Math.cos(n)*(p.r-8),p.cy+Math.sin(n)*(p.r-8),1.6).rotZ(n),e.box(0,0,0,2.2,3.6,3.2,.7),e.pop()}i(1),e.box(0,243,5,t+6,14,38,1),i(.97),e.box(0,261,3,t+2,22,34,.8),i(1.03);for(let r=0;r<21;r++){let i=-n+6+(t-12)*(r/20);e.box(i,261,10,6.5,14,9,.8)}i(1.02),e.box(0,277,8,t+14,10,44,1),i(1.05),e.box(0,286,12,t+26,8,52,1.2),i(1),e.box(0,294,9,t+16,8,46,.8),i(.97),e.box(-4,322,-34,t-6,48,76,1),i(1.02);for(let r=0;r<15;r++){let a=-n+10+(t-28)*(r/14);if(e.box(a,318,5.5,5.2,40,5,.6),r<14){let n=a+(t-28)/28;i(.9),e.box(n,314,3.2,8.6,26,1.6,.5),i(1.04),e.box(n,329,5.5,10.5,3,4.5,.6),i(1.02)}}i(1.04),e.box(-4,342,-30,t+4,7,90,1);for(let a=0;a<9;a++){let o=-n+20+(t-48)*(a/8),s=17+4*r(),c=26+10*r();i(.96+.06*r()),e.box(o,346+c/2,-22-6*r(),s,c,54,.9),i(1.04),e.box(o,346+c+1.6,-22,s+4.5,3.2,60,.7),i(1),e.box(o,346+c+5.5,-24,s-5,5,44,.7);for(let t of[-1,1])e.box(o+t*(s/2-1.4),346+c/2,6,2.6,c-4,4,.5)}i(.98),e.box(-6,360,-52,t-20,30,50,1);for(let a=0;a<26;a++){let a=-n+14+(t-36)*r(),o=7+12*r(),s=8+20*r()*r()+6;i(.95+.08*r()),e.box(a,376+s/2+10*r(),-40-30*r(),o,s,10+20*r(),.8)}i(.98);for(let t=0;t<5;t++){let a=-70-t*34-10*r(),o=60-t*9+14*r();e.box(n-12+6*r(),298+o/2-6,a,34,o,26+8*r(),1),i(1.03),e.box(n-10,298+o-4,a,40,4,32,.8),i(.98)}return e.build()}function vd(){let e=hd.rInner+1.5,t=[],n=[],r=[],i=(e,t)=>gd(e,t)-3+.5*Math.cos(Math.hypot(e,t)*.9)*Y(8,20,Math.hypot(e,t))*.6;for(let n=0;n<=150;n++)for(let a=0;a<=150;a++){let o=(a/150*2-1)*e,s=(n/150*2-1)*e,c=Math.hypot(o,s);c>e&&(o*=e/c,s*=e/c),t.push(o+hd.cx,s+hd.cy,i(o,s)),r.push(a/150,n/150)}for(let e=0;e<150;e++)for(let t=0;t<150;t++){let r=t+151*e,i=r+1,a=r+150+1,o=a+1;n.push(r,i,o,r,o,a)}let a=new Ar;a.setAttribute(`position`,new hr(new Float32Array(t),3)),a.setAttribute(`uv`,new hr(new Float32Array(r),2)),a.setIndex(n),a.computeVertexNormals();let o=new Uint8Array(t.length/3*4).fill(255);return a.setAttribute(`color`,new hr(o,4,!0)),a}function yd(){let e=au(`worn_rock_natural_01`),t=au(`large_sandstone_blocks`);return Vu({name:`stele-stone`,vertexColors:!0,uniforms:{tStD:{value:e.diff},tStN:{value:e.nor},tStA:{value:e.arm},tBlN:{value:t.nor},uAvgSt:{value:new H(...Uu.worn_rock_natural_01)},uCol:{value:new W().setRGB(.74,.655,.535)},uAwake:{value:0},uMed:{value:new H(hd.cx,hd.cy,hd.r)},uFrameO:{value:new H(...fd.origin)},uFrameU:{value:new H(...fd.u)},uFrameW:{value:new H(...fd.w)}},fragPars:Hu(`tSt`)+`
uniform sampler2D tBlN; uniform vec3 uAvgSt, uCol, uFrameO, uFrameU, uFrameW, uMed; uniform float uAwake;
`,surface:`
  vec3 w = triW(Ng, 4.0);
  float dist = length(P - cameraPosition);
  float nearW = 1.0 - smoothstep(90.0, 420.0, dist);
  // coarse scale reads from across the valley, fine scale takes over at the foot of the monument
  vec3 pF = P * 0.012;
  vec3 dF = triTex(tStD, pF, w).rgb / uAvgSt;
  vec3 nF = triNrm(tStN, pF, Ng, w, 1.5);
  vec3 pN = P * 0.11;
  vec3 dN = triTex(tStD, pN, w).rgb / uAvgSt;
  vec3 nN = triNrm(tStN, pN, Ng, w, 1.0);
  vec3 arm = triTex(tStA, pN, w).rgb;
  // colossal ashlar courses carved into the monolith (normal only)
  vec3 nB = triNrm(tBlN, P * vec3(0.016, 0.022, 0.016), Ng, w, 1.1);
  vec3 det = mix(dF, dF * dN, nearW * 0.8);
  // weathering: rain streaks below ledges, pale dust on upward faces, darker in recesses
  vec3 lp = vec3(dot(P - uFrameO, uFrameU), P.y - uFrameO.y, dot(P - uFrameO, uFrameW));
  float streak = noiseTex(vec2(lp.x * 0.021 + lp.z * 0.013, lp.y * 0.0021)).r;
  float streak2 = noiseTex(vec2(lp.x * 0.077, lp.y * 0.006 + 0.3)).g;
  float grime = smoothstep(0.42, 0.75, streak * 0.65 + streak2 * 0.5) * (1.0 - smoothstep(0.2, 0.7, Ng.y));
  vec3 alb = uCol * vColor.rgb * mix(vec3(1.0), det, 0.75);
  alb *= mix(1.0, 0.70, grime);
  alb = mix(alb, uCol * vec3(1.12, 1.08, 1.0), smoothstep(0.55, 0.95, Ng.y) * 0.5);
  // faint warm/cool variation from block to block
  float blk = noiseTex(vec2(floor(lp.x / 23.0) * 0.137 + floor(lp.y / 17.0) * 0.211, 0.5)).a;
  alb *= 0.93 + 0.14 * blk;
  s.albedo = alb;
  s.N = normalize(mix(normalize(nF + nB * 0.6 - Ng * 0.6), nN, nearW * 0.6));
  s.rough = mix(0.92, arm.g, nearW);
  s.ao = mix(1.0, arm.r, nearW * 0.7);
  s.spec = 0.5;
  // the awakening: light floods the medallion, then runs outward along the carving and up the facade
  if (uAwake > 0.0) {
    float rd = length(lp.xy - uMed.xy);
    float front = uAwake * 420.0;
    float core = smoothstep(uMed.z * 1.05, 0.0, rd) * smoothstep(0.0, 0.25, uAwake);
    float wave = smoothstep(front, front - 60.0, rd) * (0.35 + 0.65 * smoothstep(0.55, 0.9, noiseTex(vec2(lp.x * 0.013, lp.y * 0.013)).g + 0.35 * sin(rd * 0.35 - uTime * 2.0)));
    float lines = smoothstep(0.75, 0.95, sin(lp.y * 0.26) * 0.5 + 0.5) + smoothstep(0.8, 0.97, sin(rd * 0.5) * 0.5 + 0.5);
    float facing = smoothstep(-0.2, 0.4, dot(Ng, uFrameW));
    s.emissive = vec3(1.0, 0.78, 0.42) * facing * (core * 5.0 + wave * lines * 1.6 * smoothstep(0.1, 0.5, uAwake)) ;
  }
`})}function bd(){let e=fd.u,t=fd.w,n=fd.origin;return new $t().set(e[0],0,t[0],n[0],0,1,0,n[1],e[2],0,t[2],n[2],0,0,0,1)}function xd(e){let t=new On;t.name=`stele`,t.matrixAutoUpdate=!1,t.matrix.copy(bd()),t.updateMatrixWorld(!0);let n=yd(),r=new G(_d(),n);r.name=`stele-facade`;let i=new G(vd(),n);return i.name=`stele-sleeper`,t.add(r,i),e.add(t),{group:t,facade:r,disc:i,mat:n}}var Sd=e=>new H(...Uu[e]),Cd=[0,-640];function wd(e,t){let n=e/930,r=(t+560)/455;return 1-Math.sqrt(n*n+r*r)+.16*Pl(e/260+3,t/260)+.07*Pl(e/80,t/80+9)}var Td=[{pts:[[14,-95],[10,-200],[-6,-330],[2,-470],[0,-560]],hw:5.5},{pts:[[0,-780],[4,-860],[-3,-960],[0,-1075]],hw:6},{pts:[[-900,-610],[-600,-640],[-330,-625],[-95,-640]],hw:5},{pts:[[95,-640],[300,-655],[620,-630],[900,-650]],hw:5},{pts:[[-420,-230],[-250,-380],[-150,-520],[-100,-600]],hw:4},{pts:[[430,-250],[270,-400],[160,-530],[100,-600]],hw:4},{pts:[[-380,-980],[-220,-880],[-120,-790]],hw:4},{pts:[[400,-960],[240,-870],[120,-790]],hw:4}],Ed=[[0,-640,0],[-300,-420,26],[330,-470,24],[-420,-760,22],[380,-800,26],[60,-300,20],[-650,-560,20],[640,-600,22]];function Dd(e,t,n=0){return e>-70-n&&e<70+n&&t>-690-n&&t<-554+n||e>-86-n&&e<86+n&&t>-764-n&&t<-680+n}function Od(e,t){let n=1e9;for(let r of Td)for(let i=0;i<r.pts.length-1;i++){let a=r.pts[i],o=r.pts[i+1],s=o[0]-a[0],c=o[1]-a[1],l=Hl(((e-a[0])*s+(t-a[1])*c)/(s*s+c*c)),u=Math.hypot(e-a[0]-s*l,t-a[1]-c*l)-r.hw;u<n&&(n=u)}return n}function kd(e,t){let n=1e9;for(let r of Ed)r[2]<=0||(n=Math.min(n,Math.hypot(e-r[0],t-r[1])-r[2]));return n}function Ad(e,t){let n=150*Pl(e/640+1.7,t/640-.4)+42*Pl(e/210+9,t/210),r=130*Pl(e/640-3.1,t/640+2.2)+42*Pl(e/210-5,t/210+4);return[e+n,t+r]}function jd(){let e=Ol(20261112),t=[],n=[],r=[[.6,.235,.115],[.66,.29,.14],[.55,.2,.105],[.62,.33,.19],[.5,.255,.16],[.7,.36,.2],[.46,.3,.22],[.58,.26,.15]];for(let i=-33;i<=33;i++){let a=-560+i*22.5+(e()-.5)*3;for(let i of[0,1]){let o=-1250+e()*20,s=o+40+e()*70;for(;o<1250;){let c=e()<.05,l=c?13+e()*7:5.8+e()*5.2,u=c?9+e()*3.5:6.2+e()*2.6,d=o+l/2;if(o+=l+(e()<.12?1.5+e()*2.5:.15),d>s){o+=4.5+e()*2,s=o+45+e()*90;continue}let f=a+(i?-1:1)*(2.5+u/2+(e()<.2?e()*1.6:0)),[p,m]=Ad(d,f),h=wd(p,m);if(h<0&&!(h>-.07&&e()<.25)||h<.08&&e()<.45||Dd(p,m,Math.max(l,u)*.6)||m>-100||m<-1035)continue;let g=Od(p,m),_=kd(p,m),v=Math.max(l,u)*.55;if(g<v||_<v)continue;if(e()<.085){e()<.7&&n.push({x:p+(e()-.5)*3,z:m+(e()-.5)*3,h:7+e()*8,kind:e()<.6?0:1});continue}let[y,b]=Ad(d+1.5,f),x=Math.atan2(-(b-m),y-p)+(e()-.5)*.06,S=Hl(1-Math.hypot(p-Cd[0],m-Cd[1])/520),C=4.8+e()*3+S*(1.5+e()*3.5)+(c?2.5:0),w=0,T=e();c?w=T<.5?2:3:T<.16?w=1:T<.24?w=2:T<.3&&(w=3),e()<.07&&(x+=Math.PI/2*(e()<.5?1:-1)*0+Math.PI);let E=r[e()*r.length|0],D=.82+e()*.36;t.push({x:p,z:m,rot:x,w:l,d:u,h:C,type:w,seed:e(),roof:[E[0]*D,E[1]*D,E[2]*D]})}}}let i=[];for(let t=0;t<16;t++){let t=e()*Math.PI*2,n=120+e()*620,r=Math.cos(t)*n*1.25,a=-560+Math.sin(t)*n*.62;wd(r,a)<.12||Od(r,a)<8||Dd(r,a,12)||i.push({x:r,z:a,rot:e()*Math.PI,w:6.5+e()*3,h:22+e()*20,seed:e(),roof:[.52,.22,.12]})}for(let t=0;t<2200;t++){let t=(e()*2-1)*1500,r=-1050+e()*960,i=wd(t,r);i>-.02&&i<.55&&e()>.035||i>=.55||i<-.5&&e()>.25||Od(t,r)<3||n.push({x:t,z:r,h:6+e()*9,kind:e()<.45?0:1})}for(let t of Td.slice(0,2))for(let r=0;r<t.pts.length-1;r++){let i=t.pts[r],a=t.pts[r+1],o=Math.hypot(a[0]-i[0],a[1]-i[1]);for(let r=6;r<o;r+=13+e()*6)for(let s of[-1,1]){let c=r/o,l=Ul(i[0],a[0],c),u=Ul(i[1],a[1],c),d=-(a[1]-i[1])/o,f=(a[0]-i[0])/o,p=l+d*s*(t.hw+2.2),m=u+f*s*(t.hw+2.2);Dd(p,m,3)||e()<.75&&n.push({x:p,z:m,h:11+e()*6,kind:0})}}return{houses:t,towers:i,trees:n}}function Md(e){let t=new X,n=(e,n,r,i,a,o,s=.72,c=1)=>{let l=Math.abs(r-e)>Math.abs(i-n);t.color(0,+!l,0,1);let u=i-n,d=-(r-e),f=Math.hypot(u,d),p=l?e:n,m=l?r:i;t.col[3]=s;let h=t.v(e,a,n,u/f,0,d/f,p,a),g=t.v(r,a,i,u/f,0,d/f,m,a);t.col[3]=c;let _=t.v(r,o,i,u/f,0,d/f,m,o),v=t.v(e,o,n,u/f,0,d/f,p,o);t.triAuto(h,g,_),t.triAuto(h,_,v)},r=(e,t,r,i,a,o)=>{n(e,i,r,i,a,o),n(r,i,r,t,a,o),n(r,t,e,t,a,o),n(e,t,e,i,a,o)},i=(e,n,r,i,a,o,s=.045)=>{let c=(r+i)/2,l=r-s,u=i+s,d=e-s*.7,f=n+s*.7,p=a-o*(s/((i-r)/2)),m=Math.hypot((i-r)/2+s,o+(a-p));t.color(1,0,0,1);for(let e of[-1,1]){let n=e<0?l:u,r=e*(o+(a-p)),i=Math.abs(c-n),s=Math.hypot(r,i);t.col[3]=.9;let h=t.v(d,p,n,0,i/s,r/s,d,m),g=t.v(f,p,n,0,i/s,r/s,f,m);t.col[3]=1;let _=t.v(f,a+o,c,0,i/s,r/s,f,0),v=t.v(d,a+o,c,0,i/s,r/s,d,0);t.triAuto(h,g,_),t.triAuto(h,_,v)}for(let[s,l]of[[e,-1],[n,1]]){t.color(0,1,0,1);let e=t.v(s,a,r,l,0,0,r,a),n=t.v(s,a,i,l,0,0,i,a),u=t.v(s,a+o,c,l,0,0,c,a+o);t.triAuto(e,n,u)}},a=(e,n,r,i,a,o,s=.045)=>{let c=(r+i)/2,l=Math.min((n-e)*.32,(i-r)*.5),u=e-s,d=n+s,f=r-s,p=i+s,m=a-o*.09;t.color(1,0,0,1);let h={a:[u,m,f],b:[d,m,f],c:[d,m,p],d:[u,m,p],r0:[e+l,a+o,c],r1:[n-l,a+o,c]},g=(e,n,r,i)=>{let a=n[0]-e[0],o=n[1]-e[1],s=n[2]-e[2],c=i[0]-e[0],l=i[1]-e[1],u=i[2]-e[2],d=o*u-s*l,f=s*c-a*u,p=a*l-o*c;f<0&&(d=-d,f=-f,p=-p);let m=Math.hypot(d,f,p),h=[e,n,r,i].map((e,n)=>t.v(e[0],e[1],e[2],d/m,f/m,p/m,n===0||n===3?0:1,+(n<2)));t.triAuto(h[0],h[1],h[2]),i!==r&&t.triAuto(h[0],h[2],h[3])};g(h.a,h.b,h.r1,h.r0),g(h.c,h.d,h.r0,h.r1),g(h.b,h.c,h.r1,h.r1),g(h.d,h.a,h.r0,h.r0)},o=(e,n,i,a,o=.07)=>{t.color(0,0,0,1),r(e-o,n-o,e+o,n+o,i,a),t.color(0,0,0,.9),t.quad([e-o,a,n-o],[e-o,a,n+o],[e+o,a,n+o],[e+o,a,n-o])};if(e===0)r(-.5,-.5,.5,.5,0,1),i(-.5,.5,-.5,.5,1,.62),o(.22,.2,1.2,1.85);else if(e===1)r(-.5,-.5,.5,.5,0,1),i(-.5,.5,-.5,.5,1,.7),r(-.14,.18,.14,.56,1,1.32),i(-.14,.14,.18,.56,1.32,.16,.02),o(-.3,-.1,1.3,1.95,.06);else if(e===2)r(-.5,-.5,.5,.5,0,1),a(-.5,.5,-.5,.5,1,.55),o(.1,-.22,1.2,1.75);else if(e===3)r(-.5,-.5,.5,.1,0,1),i(-.5,.5,-.5,.1,1,.5),t.push().translate(.2,0,.3).rotY(Math.PI/2),r(-.3,-.3,.3,.3,0,.92),i(-.3,.3,-.3,.3,.92,.46),t.pop(),o(-.3,-.25,1.1,1.7,.06);else if(e===4){r(-.5,-.5,.5,.5,0,1),r(-.56,-.56,.56,.56,.86,1),t.color(1,0,0,1);let e=.62,n=[0,1.22,0];for(let[r,i]of[[[-.62,1,-.62],[e,1,-.62]],[[e,1,-.62],[e,1,e]],[[e,1,e],[-.62,1,e]],[[-.62,1,e],[-.62,1,-.62]]]){let e=i[0]-r[0],a=i[2]-r[2],o=n[0]-r[0],s=n[1]-r[1],c=n[2]-r[2],l=-a*s,u=a*o-e*c,d=e*s;u<0&&(l=-l,u=-u,d=-d);let f=Math.hypot(l,u,d),p=t.v(r[0],r[1],r[2],l/f,u/f,d/f,0,1),m=t.v(i[0],i[1],i[2],l/f,u/f,d/f,1,1),h=t.v(0,1.22,0,l/f,u/f,d/f,.5,0);t.triAuto(p,m,h)}}return t.build()}function Nd(){let e=au(`clay_roof_tiles_02`),t=au(`plastered_wall_02`);return Vu({name:`city-house`,vertexColors:!0,uniforms:{tRoofD:{value:e.diff},tRoofN:{value:e.nor},tRoofA:{value:e.arm},tWallD:{value:t.diff},uAvgRoof:{value:Sd(`clay_roof_tiles_02`)},uAvgWall:{value:Sd(`plastered_wall_02`)}},vertexPars:`
varying vec4 vHouse;
varying vec3 vHouseScale;
`,vertexWorld:`
  #ifdef USE_INSTANCING
    vec3 isc = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
    float seedv = fract(sin(dot(instanceMatrix[3].xz, vec2(12.9898, 78.233))) * 43758.5453);
  #else
    vec3 isc = vec3(1.0); float seedv = 0.5;
  #endif
  vHouseScale = isc;
  float along = uv.x * mix(isc.x, isc.z, color.g);
  vHouse = vec4(along, uv.y * isc.y, seedv, position.y * isc.y);
`,fragPars:Hu(`tRoof`)+`
uniform sampler2D tWallD; uniform vec3 uAvgRoof, uAvgWall;
varying vec4 vHouse; varying vec3 vHouseScale;
`,surface:`
  float isRoof = step(0.5, vColor.r);
  float seed = vHouse.z;
  float dist = length(P - cameraPosition);
  // ---- roof: clay tiles running down the slope
  vec2 ruv = vec2(vUv.x * vHouseScale.x, vUv.y * 0.9 * length(vec2(vHouseScale.y * 0.62, vHouseScale.z * 0.5))) * 0.42;
  vec3 rd = texture(tRoofD, ruv).rgb / uAvgRoof;
  vec3 rn = texture(tRoofN, ruv).xyz * 2.0 - 1.0;
  float ra = texture(tRoofA, ruv).g;
  vec4 mac = noiseTex(P.xz * 0.045 + seed * 7.0);
  vec4 mac2 = noiseTex(P.xz * 0.31 + seed * 3.0);
  // weathering: lichen-grey and sun-bleached patches, darker valleys, every roof a slightly different red
  vec3 roofCol = vInst * mix(vec3(1.0), rd, 0.8);
  roofCol = mix(roofCol, vec3(dot(roofCol, vec3(0.4))) * vec3(1.05, 1.0, 0.9), smoothstep(0.5, 0.8, mac.r) * 0.45);
  roofCol *= 0.82 + 0.36 * mac2.g;
  roofCol *= mix(0.8, 1.0, smoothstep(0.0, 0.12, vUv.y));     // ridge line
  // ---- walls: lime plaster in warm tints, windows, grime at the foot
  vec3 w = triW(Ng, 6.0);
  vec3 pd = (texture(tWallD, P.zy * 0.23).rgb * (w.x) + texture(tWallD, P.xy * 0.23).rgb * (w.z + w.y)) / uAvgWall;
  vec3 tint = mix(vec3(0.78, 0.70, 0.58), vec3(0.74, 0.60, 0.44), smoothstep(0.3, 0.7, fract(seed * 7.13)));
  tint = mix(tint, vec3(0.80, 0.76, 0.70), step(0.72, fract(seed * 3.71)));
  tint = mix(tint, vec3(0.70, 0.52, 0.42), step(0.9, fract(seed * 11.3)));
  vec3 wallCol = tint * mix(vec3(1.0), pd, 0.6);
  float hm = vHouse.y;
  wallCol *= mix(0.72, 1.0, smoothstep(0.0, 2.2, hm));            // splash-back grime
  wallCol *= mix(1.0, 0.86, smoothstep(0.55, 0.9, mac.g) * 0.8);  // damp patches
  // windows and doors
  vec2 cell = vec2(vHouse.x / 2.7, hm / 3.0);
  vec2 cid = floor(cell), cf = fract(cell);
  float has = step(0.28, hash12(cid + seed * 91.0)) * step(cid.y, floor((vHouseScale.y - 0.6) / 3.0) - 0.5 + step(0.5, isRoof));
  float win = has * step(0.32, cf.x) * step(cf.x, 0.68) * step(0.34, cf.y) * step(cf.y, 0.80);
  float fade = 1.0 - smoothstep(500.0, 1100.0, dist);
  wallCol = mix(wallCol, vec3(0.045, 0.04, 0.04), win * fade * 0.92);
  float frame = has * step(0.27, cf.x) * step(cf.x, 0.73) * step(0.29, cf.y) * step(cf.y, 0.85) - win;
  wallCol = mix(wallCol, wallCol * 0.7 + vec3(0.06, 0.045, 0.03), sat(frame) * fade * 0.7);
  s.albedo = mix(wallCol, roofCol, isRoof);
  vec3 nr = uvNrm(Ng, P, ruv, vec3(rn.xy * 1.2, rn.z));
  float nfade = 1.0 - smoothstep(250.0, 700.0, dist);
  s.N = normalize(mix(Ng, nr, isRoof * nfade));
  s.rough = mix(0.9, mix(0.85, ra, nfade), isRoof);
  s.ao = vColor.a;
  s.spec = 0.6;
`})}function Pd(e){let t=new X;if(e===0)t.color(.6,1,1,1),t.lathe([[.03,0],[.03,.08]],6),t.color(1,1,1,1),t.lathe([[0,.06],[.085,.12],[.115,.3],[.105,.55],[.07,.8],[.03,.95],[0,1]],9);else{t.color(.6,1,1,1),t.lathe([[.035,0],[.03,.4]],6),t.color(1,1,1,1);let e=(e,n,r,i,a)=>{t.push().translate(e,n,r),t.lathe([[0,-a],[i*.7,-a*.7],[i,0],[i*.75,a*.66],[0,a]],9),t.pop()};e(0,.62,0,.3,.26),e(.16,.56,.1,.2,.18),e(-.14,.6,-.12,.22,.2)}return t.build()}function Fd(){return Vu({name:`tree-far`,vertexColors:!0,surface:`
  float trunk = 1.0 - step(0.8, vColor.r);
  vec4 n = noiseTex(P.xz * 0.7 + P.y * 0.31);
  vec3 leaf = vInst * (0.75 + 0.6 * n.r);
  // fake inner shadowing: darker toward the bottom and inside
  leaf *= 0.65 + 0.35 * smoothstep(-0.2, 0.9, Ng.y);
  s.albedo = mix(leaf, vec3(0.16, 0.12, 0.09), trunk);
  s.N = normalize(Ng + (n.xyz - 0.5) * 0.9);
  s.rough = 0.85; s.sss = 0.25 * (1.0 - trunk); s.spec = 0.5;
`})}function Id(e){let n=1024,r=[-1150,-1120,2300,1100],i=document.createElement(`canvas`);i.width=n,i.height=512;let a=i.getContext(`2d`),o=e=>(e-r[0])/r[2]*n,s=e=>(e-r[1])/r[3]*512,l=a.createImageData(n,512);for(let e=0;e<512;e++)for(let t=0;t<n;t++){let i=r[0]+t/n*r[2],a=r[1]+e/512*r[3],o=wd(i,a),s=(t+e*n)*4;l.data[s]=255*Y(-.03,.08,o),l.data[s+1]=0;let c=Y(-.55,-.4,o)*(1-Y(-.06,0,o))*Y(.42,.5,Il(i/170,a/170,3)*.5+.5);l.data[s+2]=255*c*(a>-1040),l.data[s+3]=255}a.putImageData(l,0,0),a.globalCompositeOperation=`lighter`,a.strokeStyle=`rgb(0,255,0)`,a.lineCap=`round`,a.lineJoin=`round`;for(let e of Td)a.lineWidth=e.hw*2/r[2]*n*1.15,a.beginPath(),e.pts.forEach((e,t)=>t?a.lineTo(o(e[0]),s(e[1])):a.moveTo(o(e[0]),s(e[1]))),a.stroke();a.fillStyle=`rgb(0,255,0)`;for(let e of Ed)e[2]<=0||(a.beginPath(),a.arc(o(e[0]),s(e[1]),e[2]/r[2]*n,0,6.3),a.fill());let u=new Ei(i);return u.wrapS=u.wrapT=t,u.minFilter=c,u.generateMipmaps=!0,u.flipY=!1,{tex:u,rect:r}}function Ld(e,t){let n=jd(),r=Nd(),i=new On;i.name=`city`;let a=[[],[],[],[],[]];for(let e of n.houses)a[e.type].push(e);for(let e of n.towers)a[4].push({...e,d:e.w,type:4});let o=new $t,s=new kt,c=new H,l=new H,u=new W,d=new H(0,1,0),f=0;a.forEach((e,t)=>{if(!e.length)return;let n=new di(Md(t),r,e.length);n.name=`houses-`+t,e.forEach((e,t)=>{c.set(e.x,sd(e.x,e.z)-.4,e.z),s.setFromAxisAngle(d,e.rot),l.set(e.w,e.h,e.d),o.compose(c,s,l),n.setMatrixAt(t,o),u.setRGB(e.roof[0],e.roof[1],e.roof[2]),n.setColorAt(t,u)}),n.instanceMatrix.needsUpdate=!0,n.instanceColor.needsUpdate=!0,n.computeBoundingSphere(),n.frustumCulled=!1,i.add(n),f+=e.length});let p=Fd();for(let e of[0,1]){let t=n.trees.filter(t=>t.kind===e),r=new di(Pd(e),p,t.length);r.name=`trees-`+e;let a=Ol(5+e);t.forEach((t,n)=>{c.set(t.x,sd(t.x,t.z)-.2,t.z),s.setFromAxisAngle(d,a()*6.28);let i=e===0?t.h*(.9+a()*.5):t.h*(1.5+a()*.8)*.75;l.set(i,e===0?t.h:t.h*.75,i),o.compose(c,s,l),r.setMatrixAt(n,o);let f=.8+a()*.5;e===0?u.setRGB(.045*f,.075*f,.035*f):u.setRGB(.1*f,.125*f,.055*f),r.setColorAt(n,u)}),r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0,r.frustumCulled=!1,i.add(r)}if(e.add(i),t){let e=Id(n);t.uniforms.uCityMask.value=e.tex,t.uniforms.uCityRect.value.set(...e.rect)}return{group:i,city:n,count:f}}var Rd=e=>new H(...Uu[e]);function zd({set:e,scale:t=.25,color:n=[.5,.45,.38],nrm:r=1,name:i=`stone`,streaks:a=.5,farScale:o=0,dust:s=.3,spec:c=.6}){let l=au(e);return Vu({name:i,vertexColors:!0,uniforms:{tSD:{value:l.diff},tSN:{value:l.nor},tSA:{value:l.arm},uAvgS:{value:Rd(e)},uColS:{value:new W().setRGB(...n)},uScale:{value:t},uNrm:{value:r},uStreak:{value:a},uFarScale:{value:o||t*.17},uDust:{value:s},uSpecS:{value:c}},fragPars:Hu(`tS`)+`uniform vec3 uAvgS, uColS; uniform float uScale, uNrm, uStreak, uFarScale, uDust, uSpecS;
`,surface:`
  vec3 w = triW(Ng, 5.0);
  float dist = length(P - cameraPosition);
  float nearW = 1.0 - smoothstep(70.0, 320.0, dist);
  vec3 pN = P * uScale, pF = P * uFarScale;
  vec3 dN = triTex(tSD, pN, w).rgb / uAvgS;
  vec3 dF = triTex(tSD, pF, w).rgb / uAvgS;
  vec3 nN = triNrm(tSN, pN, Ng, w, uNrm);
  vec3 arm = triTex(tSA, pN, w).rgb;
  vec3 det = mix(dF, dN, nearW);
  float st = noiseTex(vec2((P.x + P.z) * 0.09, P.y * 0.012)).r;
  float st2 = noiseTex(vec2((P.x - P.z) * 0.31, P.y * 0.03)).g;
  float grime = smoothstep(0.45, 0.8, st * 0.6 + st2 * 0.55) * (1.0 - smoothstep(0.2, 0.7, Ng.y)) * uStreak;
  vec3 alb = uColS * vColor.rgb * mix(vec3(1.0), det, 0.8);
  alb *= mix(1.0, 0.62, grime);
  alb = mix(alb, uColS * vec3(1.15, 1.1, 1.0), smoothstep(0.6, 0.95, Ng.y) * uDust);
  s.albedo = alb;
  s.N = normalize(mix(Ng, nN, mix(0.25, 1.0, nearW)));
  s.rough = mix(0.9, arm.g, nearW);
  s.ao = vColor.a * mix(1.0, arm.r, nearW * 0.8);
  s.spec = uSpecS;
`})}function Bd(e=58.7,t=3,n=1,r=1){let i=new X,a=Ol(r),o=e=>i.color(e,e*.985,e*.96,1);o(.95),i.box(0,1.1,0,t*3.1,2.2,t*3.1,.25),o(1),i.lathe([[t*1.42,2.2],[t*1.46,2.7],[t*1.42,3.2],[t*1.25,3.4],[t*1.2,3.8],[t*1.3,4.2],[t*1.3,4.55],[t*1.12,4.8],[t*1.04,5.2]],40);let s=5.2,c=e-7.4,l=s+(c-s)*n,u=Math.round((c-s)/4.6),d=e=>{let n=(e-s)/(c-s);return t*(1-.15*n-.035*Math.sin(Math.PI*n)*-1)},f=null,p=Math.max(2,Math.ceil((l-s)/(c-s)*u*2));for(let e=0;e<=p;e++){let t=s+(l-s)*(e/p),o=.94+.09*((Math.floor((t-s)/(c-s)*u+1e-4)*7919+r*31)%17)/17,m=[],h=+(n<1&&e===p);for(let e=0;e<=48;e++){let n=e/48*Math.PI*2,r=e%2==0?1:.955,s=d(t)*r,c=t+(h?(a()-.3)*3.2:0);i.color(o,o*.985,o*.96,e%2==0?1:.8),m.push(i.v(Math.cos(n)*s,c,Math.sin(n)*s,Math.cos(n),0,Math.sin(n),e/48*24,t/4))}if(f)for(let e=0;e<48;e++)i.quadI(f[e],m[e],m[e+1],f[e+1]);f=m}if(n<1){o(.8);let e=i.v(0,l+.8,0,0,1,0);for(let t=0;t<48;t++)i.tri(e,f[t+1],f[t]);return i.build()}let m=c,h=d(c);o(1.02),i.lathe([[h,m],[h*1.1,m+.3],[h*1.1,m+.7],[h*1,m+.9],[h*1.02,m+2],[h*1.25,m+3.8],[h*1.62,m+5.3],[h*1.7,m+5.6]],40);for(let e=0;e<2;e++){let t=m+1.5+e*1.9,n=h*(1.08+e*.2);for(let r=0;r<12;r++){let a=(r+e*.5)/12*Math.PI*2;i.push().translate(Math.cos(a)*n,t,Math.sin(a)*n).rotY(-a+Math.PI/2).rotX(-.38-e*.1),o(1.05),i.box(0,.6,0,h*.42,2,.34,.12),i.box(0,1.7,.2,h*.3,.5,.5,.15),i.pop()}}for(let e=0;e<4;e++){let t=e/4*Math.PI*2+Math.PI/4;i.push().translate(Math.cos(t)*h*1.75,m+5.2,Math.sin(t)*h*1.75).rotY(-t),o(1.04),i.box(0,0,0,1.5,1.3,1,.3),i.pop()}return o(1),i.box(0,m+6.2,0,h*3.75,1,h*3.75,.2),o(1.04),i.box(0,m+7,0,h*3.95,.8,h*3.95,.2),i.build()}var Vd=(()=>{let e=[],t=Ol(4242);for(let n of[-690,-750])for(let r=0;r<8;r++){let i=-70+r*20,a=1;(n===-690&&r===0||n===-750&&r===6)&&(a=.52+t()*.2),n===-750&&r===2&&(a=.78),(n!==-690||r!==5)&&e.push({x:i+(t()-.5)*.6,z:n+(t()-.5)*.6,broken:a,seed:10+e.length,H:58.7*(.985+t()*.03)})}return e})();function Hd(e){let t=zd({set:`worn_rock_natural_01`,scale:.16,color:[.6,.53,.44],nrm:1.1,name:`column-stone`,streaks:.9,dust:.25}),n=new On;n.name=`hypostyle`;let r=new Map;for(let e of Vd){let i=e.broken===1?`full`:`b`+e.seed,a=r.get(i);a||(a=Bd(58.7,3,e.broken,e.seed),r.set(i,a));let o=new G(a,t);o.position.set(e.x,sd(e.x,e.z)-.3,e.z),o.scale.setScalar(e.H/58.7),o.rotation.y=e.seed*.7%6.28,o.updateMatrixWorld(!0),n.add(o)}return e.add(n),{group:n,mat:t}}function Ud(){let e={uDissolve:{value:0},uGlow:{value:new W().setRGB(1,.72,.32)},uPhase:{value:0}},t=Vu({name:`rider`,vertexColors:!0,uniforms:e,vertexPars:`
varying vec3 vLocal;
uniform float uPhase;
`,vertexLocal:`
  vLocal = position;
  #ifdef USE_COLOR_ALPHA
  {
    float t = uTime + uPhase;
    float sway = color.b, head = color.a;
    // tail and cloak swing in the wind, gusting
    float gust = 0.6 + 0.4 * sin(t * 0.37) * sin(t * 0.23 + 1.3);
    transformed.z += sway * (0.055 * sin(t * 1.25 + position.y * 2.6) + 0.02 * sin(t * 3.1 + position.y * 7.0)) * gust;
    transformed.x -= sway * 0.03 * (0.5 + 0.5 * sin(t * 0.9 + position.y * 1.7)) * gust;
    // breathing
    float barrel = exp(-pow(position.x - 0.05, 2.0) * 3.0) * smoothstep(1.6, 1.3, position.y) * smoothstep(0.8, 1.0, position.y);
    transformed.z *= 1.0 + 0.012 * barrel * sin(t * 1.55);
    // the head lifts and settles; the ears follow a half beat later
    transformed.y += head * 0.014 * sin(t * 0.62);
    transformed.z += head * 0.012 * sin(t * 0.41 + 0.7);
  }
  #endif
`,fragPars:`
varying vec3 vLocal;
uniform float uDissolve; uniform vec3 uGlow;
float dissolveField(vec3 p) { return texture(uNoiseTex, p.xy * 0.55 + p.z * 0.31).r * 0.7 + texture(uNoiseTex, p.zy * 2.3 + p.x * 1.7).a * 0.3 + (p.y - 1.2) * 0.12; }
`,depthPars:`
varying vec3 vLocal;
uniform float uDissolve;
float dissolveField(vec3 p) { return texture(uNoiseTex, p.xy * 0.55 + p.z * 0.31).r * 0.7 + texture(uNoiseTex, p.zy * 2.3 + p.x * 1.7).a * 0.3 + (p.y - 1.2) * 0.12; }
`,alpha:`alpha = dissolveField(vLocal) - (uDissolve * 1.25 - 0.12);`,alphaCut:0,surface:`
  float id = floor(vColor.r * 15.0 + 0.5);
  float vao = vColor.g;
  vec3 L = vLocal;
  vec4 n1 = noiseTex(L.xy * 1.7 + L.z * 0.9);
  vec4 n2 = noiseTex(L.xz * 2.6 + L.y * 1.9);
  vec4 n3 = noiseTex(vec2(L.x * 5.0 + L.z * 3.0, L.y * 1.6));
  vec3 alb = vec3(0.3); float rough = 0.7, metal = 0.0, spec = 1.0;
  if (id < 0.5) {            // chestnut coat: darker along the back and at the points, a blaze on the face
    alb = mix(vec3(0.225, 0.105, 0.05), vec3(0.36, 0.19, 0.10), smoothstep(1.55, 0.95, L.y) * 0.75 + 0.25 * n1.r);
    alb = mix(alb, vec3(0.07, 0.04, 0.025), smoothstep(0.78, 0.5, L.y) * 0.85);
    alb *= 0.8 + 0.3 * smoothstep(0.3, 0.7, n1.g);
        alb *= 0.88 + 0.24 * n3.r;                       // hair direction streaks
    rough = 0.42 + 0.2 * n2.g; spec = 1.3;
  } else if (id < 1.5) { alb = vec3(0.028, 0.022, 0.019) * (0.7 + 0.8 * n3.g); rough = 0.5; spec = 1.2; }
  else if (id < 2.5) { alb = vec3(0.11, 0.095, 0.08) * (0.8 + 0.4 * n2.r); rough = 0.6; }
  else if (id < 3.5) { alb = vec3(0.115, 0.062, 0.034) * (0.75 + 0.5 * n2.g); rough = 0.5 + 0.2 * n1.g; }
  else if (id < 4.5) {       // saddle blanket: madder red with an ochre border
    float border = smoothstep(0.03, 0.045, min(min(abs(L.x - 0.29), abs(L.x + 0.41)), abs(L.y - 0.995)));
    alb = mix(vec3(0.55, 0.40, 0.16), vec3(0.36, 0.062, 0.045), border) * (0.8 + 0.4 * n2.b);
    alb *= 0.9 + 0.2 * step(0.5, fract(L.x * 26.0));
    rough = 0.95;
  } else if (id < 5.5) { alb = vec3(0.56, 0.57, 0.58) * (0.8 + 0.4 * n2.r); rough = 0.34 + 0.25 * n1.b; metal = 1.0; }
  else if (id < 6.5) { alb = vec3(0.19, 0.145, 0.10) * (0.75 + 0.5 * n2.g); rough = 0.92; }
  else if (id < 7.5) { alb = vec3(0.145, 0.085, 0.06) * (0.7 + 0.6 * n1.g) * (0.9 + 0.2 * n3.b); rough = 0.96; s.sss = 0.12; }
  else if (id < 8.5) { float ring = step(0.5, fract(L.y * 55.0 + sin(L.x * 60.0 + L.z * 60.0) * 0.3)); alb = vec3(0.30, 0.31, 0.33) * (0.6 + 0.6 * ring); rough = 0.5; metal = 0.85; }
  else { alb = vec3(0.70, 0.67, 0.61) * (0.8 + 0.3 * n3.r); rough = 0.6; }
  s.albedo = alb; s.rough = rough; s.metal = metal; s.spec = spec;
  s.N = normalize(Ng + (n3.xyz - 0.5) * 0.06 * (1.0 - metal));
  s.ao = vao;
  // dissolving edge burns gold
  float edge = dissolveField(vLocal) - (uDissolve * 1.25 - 0.12);
  s.emissive = uGlow * (1.0 - smoothstep(0.0, 0.05, edge)) * step(0.001, uDissolve) * 9.0;
`});return t.userData.rider=e,t}async function Wd(){return uu(await ou(lu(`rider`)))}function Gd(e,t,n){let r=Ud(),i=new G(e,r);return i.name=`rider`,i.position.set(t[0],t[1],t[2]),i.rotation.y=Math.atan2(-n[1],n[0]),i.updateMatrixWorld(!0),{mesh:i,mat:r,uniforms:r.userData.rider}}var Kd=new H,qd=class{constructor(e=6){this.fields=[],this.prims=[],this.grid=new Map,this.cell=e,this.groundFn=null}addField(e,t,n=``){let r={box:e,sdf:t,enabled:!0,name:n};return this.fields.push(r),r}_insert(e,t,n,r){let i=this.cell,a=Math.floor((t-r)/i),o=Math.floor((t+r)/i),s=Math.floor((n-r)/i),c=Math.floor((n+r)/i);for(let t=a;t<=o;t++)for(let n=s;n<=c;n++){let r=t*73856093^n*19349663,i=this.grid.get(r);i||this.grid.set(r,i=[]),i.push(e)}return this.prims.push(e),e}addBox(e,t,n,r,i,a,o=0,s=0,c=null){let l={t:0,cx:e,cy:t,cz:n,hx:r,hy:i,hz:a,c:Math.cos(o),s:Math.sin(o),ct:Math.cos(s),st:Math.sin(s),on:!0,tag:c};return this._insert(l,e,n,Math.hypot(r,a)+Math.abs(i*Math.sin(s))+1.6)}addCylinder(e,t,n,r,i,a=null){return this._insert({t:1,cx:e,cz:t,r:n,y0:r,y1:i,on:!0,tag:a},e,t,n+1.6)}addCapsule(e,t,n,r,i,a,o,s=null){return this._insert({t:2,ax:e,ay:t,az:n,bx:r,by:i,bz:a,r:o,on:!0,tag:s},(e+r)/2,(n+a)/2,Math.hypot(r-e,a-n)/2+o+1.6)}remove(e){e.on=!1}removeTagged(e){this.prims=this.prims.filter(t=>t.tag!==e);for(let[t,n]of this.grid){let r=n.filter(t=>t.tag!==e);r.length!==n.length&&this.grid.set(t,r)}}dist(e,t,n){let r=1e9,i=this.fields;for(let a=0;a<i.length;a++){let o=i[a];if(!o.enabled)continue;let s=o.box;if(e<s[0]||t<s[1]||n<s[2]||e>s[3]||t>s[4]||n>s[5])continue;let c=o.sdf(e,t,n);c<r&&(r=c)}let a=this.cell,o=this.grid.get(Math.floor(e/a)*73856093^Math.floor(n/a)*19349663);if(o)for(let i=0;i<o.length;i++){let a=o[i];if(!a.on)continue;let s;if(a.t===0){let r=e-a.cx,i=t-a.cy,o=n-a.cz,c=r*a.c-o*a.s,l=r*a.s+o*a.c,u=i*a.ct+l*a.st,d=-i*a.st+l*a.ct,f=Math.abs(c)-a.hx,p=Math.abs(u)-a.hy,m=Math.abs(d)-a.hz,h=Math.max(f,0),g=Math.max(p,0),_=Math.max(m,0);s=Math.sqrt(h*h+g*g+_*_)+Math.min(Math.max(f,p,m),0)}else if(a.t===1){let r=Math.hypot(e-a.cx,n-a.cz)-a.r,i=Math.max(a.y0-t,t-a.y1);s=Math.min(Math.max(r,i),0)+Math.hypot(Math.max(r,0),Math.max(i,0))}else{let r=e-a.ax,i=t-a.ay,o=n-a.az,c=a.bx-a.ax,l=a.by-a.ay,u=a.bz-a.az,d=Math.max(0,Math.min(1,(r*c+i*l+o*u)/(c*c+l*l+u*u)));s=Math.hypot(r-c*d,i-l*d,o-u*d)-a.r}s<r&&(r=s)}if(this.groundFn){let i=t-this.groundFn(e,n);i<r&&(r=i)}return r}normal(e,t,n,r=Kd){let i=.04;r.set(this.dist(e+i,t,n)-this.dist(e-i,t,n),this.dist(e,t+i,n)-this.dist(e,t-i,n),this.dist(e,t,n+i)-this.dist(e,t,n-i));let a=r.length();return a>1e-6?r.multiplyScalar(1/a):r.set(0,1,0),r}groundY(e,t,n,r){let i=0;for(let a=0;a<48;a++){let a=this.dist(e,t-i,n);if(a<.012)return t-i+Math.max(0,-a);if(i+=Math.max(a*.85,.015),i>r)return null}return t-i}raycast(e,t,n,r,i,a,o){let s=0;for(let c=0;c<80;c++){let c=this.dist(e+r*s,t+i*s,n+a*s);if(c<.02)return s;if(s+=Math.max(c*.9,.03),s>o)return-1}return-1}},Jd=class{constructor(){this.list=[]}add(e,t,n,r=1,i=0){let a={pos:new H(...e),color:new W().setRGB(...t),range:n,intensity:r,flicker:i,on:!0,level:1,seed:Math.random()*100};return this.list.push(a),a}update(e,t,n){let r=this._act||=[];r.length=0;for(let t of this.list)t.level+=(+!!t.on-t.level)*Math.min(1,n*2.2),t.level<.01||(t._d=t.pos.distanceToSquared(e)-t.range*t.range*4,r.push(t));r.sort((e,t)=>e._d-t._d);let i=Math.min(8,r.length);for(let e=0;e<i;e++){let n=r[e],i=1-n.flicker*(.5+.5*Math.sin(t*11.3+n.seed)*Math.sin(t*7.1+n.seed*2.3))*.35-n.flicker*.1*Math.sin(t*23+n.seed*5);J.uLightPos.value[e].set(n.pos.x,n.pos.y,n.pos.z,n.range);let a=n.intensity*n.level*i;J.uLightCol.value[e].set(n.color.r*a,n.color.g*a,n.color.b*a)}J.uLightCount.value=i}};function Yd({name:e,uniforms:t={},vertex:n,fragment:r,blending:i=2,side:a=2,depthTest:o=!0}){let s=new Wi({name:e,uniforms:{uTime:J.uTime,uSunDir:J.uSunDir,uSunColor:J.uSunColor,uNoiseTex:J.uNoiseTex,...t},vertexShader:n,fragmentShader:r,transparent:!0,depthWrite:!1,depthTest:o,blending:i,side:a});return s.userData.noDepth=!0,s}function Xd({ra:e=.5,rb:t=.5,color:n=[1,.82,.5],intensity:r=1,soft:i=2.2,noise:a=.35,segments:o=20}={}){let s=new Mi(1,1,1,o,1,!0);s.translate(0,.5,0);let c={uColor:{value:new W().setRGB(...n)},uIntensity:{value:r},uRa:{value:e},uRb:{value:t},uSoft:{value:i},uNoise:{value:a},uLen:{value:1},uReveal:{value:1}},l=new G(s,Yd({name:`beam`,uniforms:c,vertex:`
uniform float uRa, uRb, uLen;
varying vec3 vN; varying vec3 vW; varying float vT;
void main() {
  float t = position.y; vT = t;
  vec3 p = vec3(position.x * mix(uRa, uRb, t), t * uLen, position.z * mix(uRa, uRb, t));
  vec4 wp = modelMatrix * vec4(p, 1.0);
  vW = wp.xyz; vN = normalize(mat3(modelMatrix) * vec3(position.x, 0.0, position.z));
  gl_Position = projectionMatrix * viewMatrix * wp;
}`,fragment:`
uniform vec3 uColor; uniform float uIntensity, uSoft, uNoise, uTime, uLen, uReveal; uniform sampler2D uNoiseTex;
varying vec3 vN; varying vec3 vW; varying float vT;
void main() {
  vec3 V = normalize(cameraPosition - vW);
  float rim = abs(dot(normalize(vN), V));          // 1 looking through the middle of the tube, 0 at the silhouette
  float a = pow(rim, uSoft);
  float n = texture(uNoiseTex, vec2(vT * uLen * 0.07 - uTime * 0.03, atan(vN.x, vN.z) * 0.3)).r;
  a *= 1.0 - uNoise + uNoise * 2.0 * n;
  a *= smoothstep(0.0, 0.02, vT) * smoothstep(1.0, 0.985, vT);
  a *= step(vT, uReveal) * (0.6 + 0.4 * smoothstep(uReveal, uReveal - 0.03, vT));
  a *= smoothstep(1.5, 9.0, distance(cameraPosition, vW));      // never fog the view when standing in the beam
  gl_FragColor = vec4(uColor * uIntensity * a, 1.0);
}`}));l.frustumCulled=!1,l.userData.noShadow=!0,l.renderOrder=900,l.layers.set(cl.TRANSPARENT);let u=new H(0,1,0),d=new H;return{mesh:l,uniforms:c,set:(e,t)=>{d.set(t[0]-e[0],t[1]-e[1],t[2]-e[2]);let n=d.length();l.position.set(e[0],e[1],e[2]),l.quaternion.setFromUnitVectors(u,d.normalize()),c.uLen.value=n,l.updateMatrixWorld(!0)}}}var Zd=class{constructor(e=256){this.max=e,this.count=0;let t=new Da;t.setAttribute(`position`,new hr(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),t.setIndex([0,1,2,0,2,3]),this.aPos=new ri(new Float32Array(e*4),4),this.aCol=new ri(new Float32Array(e*4),4),this.aKind=new ri(new Float32Array(e*2),2),t.setAttribute(`aPos`,this.aPos),t.setAttribute(`aCol`,this.aCol),t.setAttribute(`aKind`,this.aKind),t.instanceCount=0,this.geo=t,this.mat=Yd({name:`sprites`,vertex:`
attribute vec4 aPos; attribute vec4 aCol; attribute vec2 aKind;
uniform float uTime;
varying vec2 vQ; varying vec4 vCol; varying vec2 vKind;
void main() {
  vQ = position.xy; vCol = aCol; vKind = aKind;
  vec4 mv = viewMatrix * vec4(aPos.xyz, 1.0);
  float s = aPos.w;
  vec2 q = position.xy;
  if (aKind.x < 0.5) { q.y = q.y * 1.7 + 0.9; q.x *= 0.62; }            // flame: taller, anchored at its base
  mv.xy += q * s;
  gl_Position = projectionMatrix * mv;
}`,fragment:`
uniform float uTime; uniform sampler2D uNoiseTex;
varying vec2 vQ; varying vec4 vCol; varying vec2 vKind;
void main() {
  float a;
  if (vKind.x < 0.5) {                   // flame
    vec2 q = vQ; float t = uTime * 1.6 + vKind.y;
    float n = texture(uNoiseTex, vec2(q.x * 0.12 + vKind.y, q.y * 0.16 - t * 0.21)).r;
    float w = (1.0 - (q.y * 0.5 + 0.5)) * 0.72 + 0.1;
    float d = abs(q.x + (n - 0.5) * 0.7 * (q.y * 0.5 + 0.5)) / w;
    a = smoothstep(1.0, 0.25, d) * smoothstep(1.0, 0.55, q.y) * smoothstep(-1.0, -0.82, q.y);
    vec3 c = mix(vec3(1.0, 0.36, 0.06), vec3(1.0, 0.86, 0.5), smoothstep(0.5, 0.0, d) * (1.0 - (q.y * 0.5 + 0.5) * 0.6));
    gl_FragColor = vec4(c * a * vCol.a * (0.85 + 0.3 * n), 1.0);
    return;
  }
  float r = length(vQ);
  if (vKind.x < 1.5) {                   // glint: a four-point twinkle
    float tw = 0.55 + 0.45 * sin(uTime * 2.6 + vKind.y * 6.28);
    float star = max(0.0, 1.0 - abs(vQ.x) * 9.0) * max(0.0, 1.0 - abs(vQ.y) * 1.2) + max(0.0, 1.0 - abs(vQ.y) * 9.0) * max(0.0, 1.0 - abs(vQ.x) * 1.2);
    a = (exp(-r * r * 9.0) * 0.8 + star * 0.9) * tw;
  } else {                               // soft glow / beacon
    a = exp(-r * r * 4.5) * (0.85 + 0.15 * sin(uTime * 1.3 + vKind.y));
    a += exp(-r * r * 60.0) * 1.5;
  }
  a *= smoothstep(1.0, 0.8, r);
  gl_FragColor = vec4(vCol.rgb * vCol.a * a, 1.0);
}`}),this.mesh=new G(t,this.mat),this.mesh.frustumCulled=!1,this.mesh.userData.noShadow=!0,this.mesh.renderOrder=950,this.mesh.layers.set(cl.TRANSPARENT),this.items=[]}add(e,t,n,r=2,i=1){let a={i:this.count++,pos:new H(...e),size:t,color:new W().setRGB(...n),kind:r,intensity:i,phase:Math.random()*10,visible:!0};return this.items.push(a),this.geo.instanceCount=this.count,this.write(a),a}write(e){let t=e.i;this.aPos.setXYZW(t,e.pos.x,e.pos.y,e.pos.z,e.size),this.aCol.setXYZW(t,e.color.r,e.color.g,e.color.b,e.visible?e.intensity:0),this.aKind.setXY(t,e.kind,e.phase),this.aPos.needsUpdate=this.aCol.needsUpdate=this.aKind.needsUpdate=!0}};function Qd({count:e=600,box:t=[0,0,0,10,10,10],size:n=.012,color:r=[1,.9,.7],intensity:i=1,drift:a=[.05,.02,.03],lit:o=!0,seed:s=1}){let c=Ol(s),l=new Ar,u=new Float32Array(e*3),d=new Float32Array(e*4);for(let t=0;t<e;t++)u[t*3]=c(),u[t*3+1]=c(),u[t*3+2]=c(),d[t*4]=c(),d[t*4+1]=c(),d[t*4+2]=c(),d[t*4+3]=c();l.setAttribute(`position`,new hr(u,3)),l.setAttribute(`aRnd`,new hr(d,4));let f={uBoxMin:{value:new H(t[0],t[1],t[2])},uBoxSize:{value:new H(t[3]-t[0],t[4]-t[1],t[5]-t[2])},uSize:{value:n},uColor:{value:new W().setRGB(...r)},uIntensity:{value:i},uDrift:{value:new H(...a)},uShaftA:{value:new H},uShaftB:{value:new H},uShaftR:{value:0},uPx:{value:1080}},p=new Ci(l,Yd({name:`motes`,uniforms:f,vertex:`
attribute vec4 aRnd;
uniform vec3 uBoxMin, uBoxSize, uDrift, uShaftA, uShaftB; uniform float uSize, uTime, uShaftR, uPx;
varying float vA;
void main() {
  vec3 p = fract(position + uDrift * uTime * (0.4 + aRnd.x) / uBoxSize + vec3(sin(uTime * 0.21 + aRnd.y * 6.28), sin(uTime * 0.17 + aRnd.z * 6.28), cos(uTime * 0.19 + aRnd.w * 6.28)) * 0.02);
  vec3 wp = uBoxMin + p * uBoxSize;
  vec4 mv = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mv;
  float d = -mv.z;
  gl_PointSize = clamp(uSize * (0.5 + aRnd.w) * uPx / max(d, 0.3), 1.0, 14.0);
  float tw = 0.55 + 0.45 * sin(uTime * (1.0 + aRnd.x * 2.0) + aRnd.y * 40.0);
  vA = tw * smoothstep(0.25, 1.2, d) * smoothstep(60.0, 20.0, d);
  // edges of the box fade out so the volume has no visible walls
  vec3 e = min(p, 1.0 - p); vA *= smoothstep(0.0, 0.12, min(e.x, min(e.y, e.z)));
  if (uShaftR > 0.0) {   // only catch the light inside the sun shaft
    vec3 ab = uShaftB - uShaftA; float t = clamp(dot(wp - uShaftA, ab) / dot(ab, ab), 0.0, 1.0);
    float r = length(wp - (uShaftA + ab * t));
    vA *= smoothstep(uShaftR, uShaftR * 0.55, r) * 1.0 + 0.04;
  }
}`,fragment:`
uniform vec3 uColor; uniform float uIntensity; varying float vA;
void main() { vec2 q = gl_PointCoord * 2.0 - 1.0; float a = exp(-dot(q, q) * 3.5) * vA; gl_FragColor = vec4(uColor * uIntensity * a, 1.0); }`}));return p.frustumCulled=!1,p.userData.noShadow=!0,p.renderOrder=940,p.layers.set(cl.TRANSPARENT),{points:p,uniforms:f}}function $d({shallow:e=[.3,.62,.6],deep:t=[.03,.2,.24],clarity:n=1.2,flow:r=[0,0],ripple:i=1,foam:a=.5,skyMul:o=1,name:s=`water`}={}){let c=new Wi({name:s,uniforms:{...Object.fromEntries(Object.entries(J).map(([e,t])=>[e,t])),...ll,uShallow:{value:new W().setRGB(...e)},uDeep:{value:new W().setRGB(...t)},uClarity:{value:n},uFlow:{value:new V(...r)},uRipple:{value:i},uFoam:{value:a},uSkyMul:{value:o},uLevel:{value:0}},transparent:!0,depthWrite:!1,side:0,vertexShader:`
varying vec3 vW; varying vec2 vUv; varying float vWet;
void main() { vUv = uv; vec4 wp = modelMatrix * vec4(position, 1.0); vW = wp.xyz; vWet = 1.0; gl_Position = projectionMatrix * viewMatrix * wp; }`,fragmentShader:`
${dl}
${fl}
${ml}
uniform sampler2D uSceneColor; uniform highp sampler2D uSceneDepth; uniform vec4 uDepthP;
uniform vec3 uShallow, uDeep; uniform float uClarity, uRipple, uFoam, uSkyMul; uniform vec2 uFlow;
varying vec3 vW; varying vec2 vUv;
float linDepth(float d) { float n = uDepthP.x, f = uDepthP.y; if (uDepthP.z > 0.5) return (f * n / (f - n)) / (d + n / (f - n)); float z = d * 2.0 - 1.0; return 2.0 * n * f / (f + n - z * (f - n)); }
void main() {
  vec3 V = normalize(cameraPosition - vW);
  float dist = length(cameraPosition - vW);
  // ripples: two scrolling layers of the noise texture turned into a normal
  vec2 p = vW.xz;
  vec2 f1 = uFlow * uTime, f2 = vec2(0.013, -0.009) * uTime;
  float e = 0.06;
  vec2 q1 = p * 0.9 + f1, q2 = p * 2.3 - f1 * 1.7 + f2;
  float h0 = texture(uNoiseTex, q1 * 0.11).r + 0.5 * texture(uNoiseTex, q2 * 0.11).a;
  float hx = texture(uNoiseTex, (q1 + vec2(e, 0.0)) * 0.11).r + 0.5 * texture(uNoiseTex, (q2 + vec2(e, 0.0)) * 0.11).a;
  float hz = texture(uNoiseTex, (q1 + vec2(0.0, e)) * 0.11).r + 0.5 * texture(uNoiseTex, (q2 + vec2(0.0, e)) * 0.11).a;
  vec3 N = normalize(vec3(-(hx - h0) * 2.4 * uRipple, 1.0, -(hz - h0) * 2.4 * uRipple));
  vec2 suv = gl_FragCoord.xy * uInvRes;
  float zs = linDepth(texture(uSceneDepth, suv).r);
  float zw = dot(vW - cameraPosition, -normalize(vec3(viewMatrix[0][2], viewMatrix[1][2], viewMatrix[2][2])));
  float depth = max(zs - zw, 0.0);
  // refraction: offset the lookup by the ripple normal, but never sample in front of the water
  vec2 ruv = suv + N.xz * 0.035 * min(1.0, depth * 2.0) / max(1.0, dist * 0.12);
  float zs2 = linDepth(texture(uSceneDepth, ruv).r);
  if (zs2 < zw) ruv = suv; else depth = max(zs2 - zw, 0.0);
  vec3 under = texture(uSceneColor, ruv).rgb;
  float vd = depth / max(V.y, 0.25);                    // path length through the water
  vec3 ext = exp(-vd * uClarity * vec3(1.6, 0.55, 0.42));
  vec3 body = mix(uDeep, uShallow, exp(-vd * uClarity * 0.9));
  // caustic shimmer on the bed in shallow sunlit water
  float ca = texture(uNoiseTex, (p + N.xz * 0.6) * 0.37 + f2 * 3.0).b;
  under *= 1.0 + 0.5 * smoothstep(0.35, 0.1, ca) * exp(-vd * 0.8);
  vec3 col = under * ext + body * (1.0 - ext) * (uSkyAmb * 1.6 + uSunColor * 0.16 * sat(uSunDir.y));
  // reflection
  float F = 0.02 + 0.98 * pow(1.0 - sat(dot(N, V)), 5.0);
  vec3 R = reflect(-V, N); R.y = abs(R.y);
  vec3 env = textureLod(uEnvTex, R, 0.5).rgb * uSkyMul;
  col = mix(col, env, F);
  vec3 H = normalize(V + uSunDir);
  col += uSunColor * pow(sat(dot(N, H)), 380.0) * 4.0 * uSkyMul;
  // foam / wet line where the water meets the bank
  float edge = smoothstep(0.10, 0.0, depth);
  float fo = edge * uFoam * smoothstep(0.35, 0.75, texture(uNoiseTex, p * 0.8 + f1 * 2.0).g + edge * 0.5);
  col = mix(col, vec3(0.86, 0.9, 0.9) * (uSkyAmb * 1.3 + uSunColor * 0.25), fo);
  float alpha = smoothstep(0.0, 0.035, depth);
  col = applyFog(col, vW);
  gl_FragColor = vec4(col, alpha);
}`});return c.userData.noDepth=!0,c}function ef(e){return e.layers.set(cl.TRANSPARENT),e.userData.noShadow=!0,e.renderOrder=10,e}var tf=new Map,nf=(e,t)=>(tf.has(e)||tf.set(e,t()),tf.get(e));function rf({color:e=[.5,.5,.5],rough:t=.7,metal:n=0,kind:r=0,name:i=`plain`,emissive:a=[0,0,0],side:o=0}){return Vu({name:i,vertexColors:!0,side:o,uniforms:{uColP:{value:new W().setRGB(...e)},uRoughP:{value:t},uMetalP:{value:n},uEmisP:{value:new W().setRGB(...a)}},fragPars:`uniform vec3 uColP, uEmisP; uniform float uRoughP, uMetalP;\n#define KIND ${r}\n`,surface:`
  vec4 n1 = noiseTex(P.xz * 1.7 + P.y * 1.3);
  vec4 n2 = noiseTex(P.xy * 6.1 + P.z * 4.7);
  vec3 alb = uColP * vColor.rgb * (0.85 + 0.3 * n1.r);
  float rough = uRoughP * (0.8 + 0.4 * n2.g), metal = uMetalP;
  #if KIND == 1
    // verdigris collects where the metal is not handled
    float pat = smoothstep(0.52, 0.78, n1.g * 0.6 + n2.b * 0.5 + (1.0 - vColor.a) * 0.5);
    alb = mix(alb, vec3(0.16, 0.30, 0.24) * (0.7 + 0.6 * n2.r), pat * 0.7);
    metal = mix(metal, 0.1, pat * 0.8); rough = mix(rough, 0.9, pat * 0.8);
  #elif KIND == 2
    alb *= 0.8 + 0.4 * smoothstep(0.3, 0.7, n1.b);
    alb = mix(alb, alb * 0.5, smoothstep(0.6, 0.9, n2.r) * 0.5);   // kiln scorch
  #endif
  s.albedo = alb; s.rough = clamp(rough, 0.05, 1.0); s.metal = metal; s.ao = vColor.a;
  s.N = normalize(Ng + (n2.xyz - 0.5) * 0.08 * (1.0 - metal * 0.5));
  s.emissive = uEmisP;
`})}var af=()=>nf(`bronze`,()=>rf({color:[.62,.38,.17],rough:.42,metal:1,kind:1,name:`bronze`})),of=()=>nf(`iron`,()=>rf({color:[.2,.19,.18],rough:.6,metal:1,name:`iron`})),sf=()=>nf(`clay`,()=>rf({color:[.44,.235,.14],rough:.85,kind:2,name:`clay`})),cf=()=>nf(`mirror`,()=>rf({color:[.95,.74,.42],rough:.07,metal:1,name:`mirror`}));function lf({set:e=`dark_wooden_planks`,color:t=[.3,.2,.13],scale:n=.6,name:r=`wood`}={}){return nf(`wood:`+e+t.join(),()=>{let i=au(e);return Vu({name:r,vertexColors:!0,uniforms:{tWdD:{value:i.diff},tWdN:{value:i.nor},tWdA:{value:i.arm},uAvgWd:{value:new H(...Uu[e])},uColWd:{value:new W().setRGB(...t)},uScaleWd:{value:n}},fragPars:Hu(`tWd`)+`uniform vec3 uAvgWd, uColWd; uniform float uScaleWd;
`,surface:`
  vec3 w = triW(Ng, 6.0);
  vec3 p = P * uScaleWd;
  vec3 d = triTex(tWdD, p, w).rgb / uAvgWd;
  vec3 arm = triTex(tWdA, p, w).rgb;
  s.albedo = uColWd * vColor.rgb * mix(vec3(1.0), d, 0.9) * (0.85 + 0.3 * noiseTex(P.xz * 0.9).r);
  s.N = triNrm(tWdN, p, Ng, w, 1.0);
  s.rough = arm.g; s.ao = vColor.a * arm.r; s.spec = 0.7;
`})})}function uf({name:e=`cloth`,stripes:t=0,sway:n=.12}={}){return nf(`cloth:`+t+n,()=>Vu({name:e,vertexColors:!0,side:2,vertexPars:`varying float vFree;
`,vertexWorld:`
  float free = 1.0 - uv.y; vFree = free;
  float ph = wp.x * 0.7 + wp.z * 0.9;
  float gust = 0.55 + 0.45 * sin(uTime * 0.31 + ph * 0.13) * sin(uTime * 0.17 + 1.7);
  vec3 wdir = vec3(uWind.x, 0.0, uWind.y);
  float wave = sin(uTime * 2.1 + ph + uv.x * 5.0) * 0.6 + sin(uTime * 3.7 + ph * 1.9 + uv.x * 11.0) * 0.25;
  wp.xyz += (wdir * (0.5 + 0.5 * wave) + vec3(0.0, wave * 0.35, 0.0)) * free * free * ${n.toFixed(3)} * gust * uWind.z;
  nW = normalize(nW + wdir * wave * free * 0.5);
`,fragPars:`varying float vFree;
`,surface:`
  vec4 n = noiseTex(vUv * vec2(9.0, 9.0));
  vec3 alb = vColor.rgb;
  #if ${t} > 0
    float st = step(0.5, fract(vUv.x * ${t}.0));
    alb = mix(alb, vec3(0.62, 0.56, 0.44), st * 0.85);
  #endif
  float weave = 0.9 + 0.1 * sin(vUv.x * 900.0) * sin(vUv.y * 900.0);
  s.albedo = alb * (0.8 + 0.35 * n.r) * weave;
  s.albedo *= mix(1.0, 0.72, smoothstep(0.7, 1.0, vFree) * n.g);     // sun-bleached, dirty hem
  s.rough = 0.95; s.sss = 0.5; s.ao = vColor.a; s.spec = 0.3;
  s.N = normalize(Ng + (n.xyz - 0.5) * 0.12);
`}))}function df(e=0,t=18){let n=new X,r=[[[0,0],[.12,0],[.2,.08],[.27,.28],[.26,.45],[.18,.6],[.11,.66],[.12,.72],[.15,.75],[.13,.76],[.09,.7]],[[0,0],[.1,0],[.16,.05],[.19,.2],[.14,.36],[.07,.44],[.06,.52],[.09,.56],[.07,.57],[.04,.5]],[[0,0],[.16,0],[.24,.04],[.3,.14],[.3,.2],[.27,.22],[.25,.19],[.2,.1],[0,.07]],[[0,0],[.14,0],[.22,.1],[.3,.4],[.32,.7],[.27,.95],[.16,1.1],[.13,1.18],[.17,1.24],[.15,1.25],[.1,1.15]]][e%4];return n.color(1,1,1,1),n.lathe(r,t),n.build()}function ff(e=1.05){let t=new Qu;t.tone=.95,t.mould([[0,0],[.03,.03],[.03,.12],[0,.15]],.26),t.top(.15,.26),t.tone=1,t.band(.15,e-.3,.16,Z.KNOT,.32,.32,.18),t.mouldBand([0,e-.3],[.1,e-.14],.16,Z.LOTUS,.5,.2),t.tone=1.04,t.mould([[0,e-.14],[.02,e-.12],[.02,e-.02],[0,e]],.27),t.top(e,.27),t.under(e-.14,.27);let n=new X;return n.color(1,1,1,1),n.push().translate(0,e,0),n.lathe([[0,.02],[.08,.02],[.2,.09],[.24,.17],[.225,.18],[.185,.115],[.07,.06],[0,.06]],20),n.color(.25,.2,.15,1),n.lathe([[0,.06],[.012,.06],[.01,.15]],6),n.pop(),{stone:t.build(),metal:n.build(),flameY:e+.17}}function pf(){let e=new Qu;e.tone=.95,e.mould([[0,0],[.04,.04],[.04,.2],[0,.24]],.62),e.top(.24,.62),e.tone=1,e.band(.24,.8,.5,Z.WAVE,.56,.56,.18),e.top(.8,.5),e.band(.8,.94,.56,Z.BEADS,.56,.14,.2),e.top(.94,.56),e.under(.8,.56);let t=e.build(),n=new X;n.color(1,1,1,1),n.lathe([[0,0],[.34,0],[.36,.05],[.2,.1],[.1,.14],[0,.14]],24);for(let e of[-1,1])n.box(e*.62,.62,0,.07,1.1,.11,.015),n.push().translate(e*.48,.1,0),n.box(0,0,0,.36,.07,.11,.015),n.pop(),n.push().translate(e*.62,1.12,0).rotZ(Math.PI/2),n.lathe([[0,-.06],[.07,-.06],[.07,.06],[0,.06]],12),n.pop();n.box(.74,1.12,0,.16,.035,.035,.01),n.box(.82,1.03,0,.035,.2,.035,.01);let r=new X;r.color(1,1,1,1),r.push().rotX(Math.PI/2),r.lathe([[.5,-.03],[.56,-.03],[.58,0],[.56,.03],[.5,.03],[.48,0],[.5,-.03]],40),r.pop();for(let e of[-1,1])r.box(e*.575,0,0,.06,.05,.05,.01);let i=new X;return i.color(1,1,1,1),i.push().rotX(Math.PI/2),i.lathe([[0,.012],[.3,.02],[.47,.012],[.49,-.005],[.47,-.02],[0,-.02]],48),i.pop(),{base:t,yoke:n.build(),ring:r.build(),disc:i.build()}}function mf({width:e=3,rise:t=.2,run:n=.32,count:r=20,tone:i=1}){let a=new Qu;a.tone=i;let o=a.g;for(let s=0;s<r;s++){let r=-s*t,c=s*n;a._set(0,0);let l=.985+.03*Math.sin(s*12.9898);o.color(i*l,0,0,0),o.box(0,r-t*.5-.4,c+n*.5,e,t+.8,n+.02,.025)}return a.build()}var hf=Du;function gf(e,t){let n=-14.5;n+=Y(-3,-16,e)*11,n-=Y(5.6,8.2,e)*9.5;{let r=1-Math.min(1,Math.abs(e+5.6)/1.9);r>0&&(n-=2.9*r*r*(3-2*r)*Y(149,151.5,t))}return n+=Math.max(0,t-158)*.1-Math.max(0,143-t)*.03,n+=1.5*Nl(e*.045+3.1,t*.06,.5),n+=Y(120,215,e)*120+Math.max(0,t-176)*.22,n-=_f(t),n+=13*Nl(e/170,t/260,2.2)*Y(40,130,Math.abs(e-3)),n}function _f(e){return 7.5*Y(112,104,e)+9.5*Y(66,58,e)}function vf(e,t){return-19-.05*(e-144)+1.3*Nl(t*.06,e*.07,9.3)-_f(e)*.8}function yf(e,t,n){let r=Gl((gf(e,t)-n)*.92,vf(t,n)-e,4),i=66+5e-4*e*e*(e<0?1:.3)+34*Nl(e/260,.3,1.1)+12*Nl(e/70,t/120,4.4)-_f(t)+Math.max(0,t-176)*.22;r=Wl(r,(i-n)*.92,7);let a=238+20*Nl(e/170,.7,n/170)+9*Nl(e/45,1.9,n/45);return r=Gl(r,t-a,12),r}function bf(e,t,n){let r=yf(e,t,n);if(t<56){let i=yf(e,26,n);r=Wl(r,(t-(48-.82*Math.max(i,0)+4*Nl(e/40,.4,n/40)))*.78,8)}let i=Kl(e-7.2,t-161.2,n+16,6.8,5.6,5.2);return r=Wl(r,i,2.2),r}function xf(e,t){let n=144,r=Math.abs(e-.4)-3.4,i=Math.abs(t-.55)-3.45,a=1-Y(-.2,.35,Math.max(r,i));if(n=Ul(n,148.3,a),t>3.4&&Math.abs(e-.4)<2.2){let r=Hl((t-3.6)/6.6),i=1-Y(1.6,2.2,Math.abs(e-.4));n=Math.max(n,Ul(144,Ul(148.3,144,r),i))}{let r=3.9,i=-1.2,a=1.6,o=-12.200000000000001,s=Hl(((e-r)*a+(t-i)*o)/151.40000000000003),c=e-(r+a*s),l=t-(i+o*s),u=1-Y(1.5,2.1,Math.sqrt(c*c+l*l)),d=Ul(148.3,144,Y(.02,.98,s));n=Math.max(n,Ul(n,d,u))}if(e>7&&t<-19&&t>-22.4&&(n=Math.max(n,144-Y(8.6,12.5,e)*1.4)),e>14.5&&t>8){n-=Y(15,19.5,e)*.75;let r=Math.hypot(e-23.8,t-15.6);n-=.6*Y(3.4,1.4,r)}if(t<-3){let r=1-Y(1.7,3.2,e-(t<-9?.4:0)),i=Y(-3,-3.7,t);n=Ul(n,131,r*i)}return n}function Sf(e,t,n){let r=Hl((3-n)/17),i=Ul(.45,.1,r),a=Ul(2.5,3.6,r),o=Ul(153.1,156.4,r),s=146.5,c=Math.abs(e-i)/a,l;if(t>s){let e=(t-s)/(o-s);l=((c**2.5+e**2.5)**.4-1)*Math.min(a,o-s)*.85}else l=(c-1)*a;return Math.max(l,n-4.5)}function Cf(e,t,n){let r=Wl(Kl(e-4,t-149.5,n-12.5,12.5,8.5,11),Sf(e,t,n),2);r=Wl(r,Yl(e,t,n,4.1,150.8,-1,5.7,146.5,-15.8,2.5),1.2),r=Wl(r,Yl(e,t,n,13.5,146.1,14,19.5,145.7,15.2,1.75),1),r=Wl(r,Kl(e-23.6,t-146.3,n-15.6,5.3,4.7,5.3),1.2),r=Wl(r,Yl(e,t,n,7.2,145.15,-20.7,12.5,144.2,-20.7,1.25),.5);let i=-5.5,a=152.6,o=13.8;return r=Wl(r,Xl(e,t,n,i,a,o,i+hf[0]*24,a+hf[1]*24,o+hf[2]*24,1.45,2.7),1),r}var wf=[8.5,-20.6],Tf=[-.2,-21.1];function Ef(e,t){let n=Tf[0]-wf[0],r=Tf[1]-wf[1],i=Hl(((e-wf[0])*n+(t-wf[1])*r)/(n*n+r*r)),a=e-(wf[0]+n*i),o=t-(wf[1]+r*i);return[Math.sqrt(a*a+o*o)-Ul(3,1.5,i*i),i]}function Df(e,t,n){let r=Jl(e-4.3,t-131,n+16.6,3.7,13,3.4,1),[i,a]=Ef(e,n),o=Ul(24,7.5,Y(0,1,a)**1.4)-Math.max(0,i+1)*3.2,s=Math.max(t-144,144-o-t);return Wl(r,Gl(i+Math.max(0,142.5-t)*.16,s,.4),1)}function Of(e,t,n){let r=Jl(e+2.6,t-147.95,n+4.3,1.6,1.3,1.5,.55);return r=Wl(r,Kl(e+3.3,t-149.5,n+4.6,1.5,1.25,1.7),.7),r=Wl(r,Kl(e+3,t-148.4,n+1.8,1.3,1.25,1.7),.6),r=Wl(r,Xl(e,t,n,2.9,147.8,-4.6,3.95,145,-12.4,.75,.9),.5),r=Wl(r,Kl(e+3.5,t-155.9,n+13.2,2,2.6,2.8),.9),r}function kf(e,t,n){if(e<-24||e>32||t<127||t>170||n<-20||n>27)return 0;let r=Math.min(n-gf(e,Math.min(t,156)),e-vf(t,n)),i=Math.min(Y(-24,-20,e),Y(32,28,e),Y(127,131,t),Y(170,165,t),Y(27,24,n));return Y(-2.2,1.6,r)*i}function Af(e,t,n){let r=0,i=xf(e,n);i>140&&(r=1-Y(.3,1.2,Math.abs(t-i)));let[a]=Ef(e,n),o=1-Y(-.2,.5,a),s=Math.max(o,+(e>.5&&e<8.2&&n<-13&&n>-20.2))*(1-Y(.25,1,Math.abs(t-144)));return Math.max(r,s)}function jf(e,t){let n=Math.floor(e),r=e-n,i=Al(n,t);return i+(Al(n+1,t)-i)*Y(.62,.98,r)}function Mf(e,t,n,r){let i=t+.06*e-.03*n+1.3*Nl(e*.05,t*.04,n*.05)+.25*Nl(e*.33,t*.2,n*.33),a=i/2.7+.31,o=i/.95+5.7,s=i/.31+2.2,c=.62*(jf(a,11)-.5)+.34*(jf(o,23)-.5)+.1*(jf(s,37)-.5),l=o-Math.floor(o);if(c-=.16*Y(.9,.97,l)*(1-Y(.97,1,l))*2,c+=.9*Fl(e*.07,t*.07,n*.07,3),r>.01){let i=e+1.2*Nl(e*.21,t*.13+3,n*.21),a=n+1.2*Nl(e*.21+9,t*.13,n*.21),s=Math.floor(o),l=Vl(i/3.1+s*7.31,a/3.1-s*3.17),u=1-Y(0,.09,l.f2-l.f1);c+=r*((l.id-.62)*.85-.36*u)}let u=Y(.55,.8,Al(Math.floor(a),91));if(u>0){let r=Bl(e*1.6,t*2.2,n*1.6);c-=u*.16*Y(.4,.1,r.f1)}return c+=.045*Nl(e*2.1,t*2.1,n*2.1),Math.max(-1.3,Math.min(.55,c))}function Nf(e,t,n){let r=.8*Fl(e*.16,t*.16,n*.16,3)+.42*(Rl(e*.5+5,t*.5,n*.5,3)-.28)+.07*Nl(e*2.3,t*2.3,n*2.3),i=Bl(e*1.05,t*1.05,n*1.05);return Math.max(-1.2,Math.min(.6,r-Y(.42,.1,i.f1)*.26))}function Pf(e,t,n,r,i,a){let o=r>.01?Nf(e,t,n):0;return Ul(r<.99?Mf(e,t,n,a):0,o,r)*(1-.9*i)}function Ff(e,t,n){let r=bf(e,t,n),i=r,a=1e3;if(e>-40&&e<48&&t>110&&t<180&&n>-40&&n<40&&(i=Gl(r,-Gl(Cf(e,t,n),xf(e,n)-t,.35),.7),a=Df(e,t,n),i=Wl(i,a,1.2),i=Wl(i,Of(e,t,n),.5)),i>3.2||i<-3.2)return i;let o=kf(e,t,n),s=1-Y(0,1.5,a);o*=1-s;let c=Math.max(s,Y(.1,.55,Fl(e*.06+7,t*.06,n*.06,2)+.2)),l=Af(e,t,n);return i-Pf(e,t,n,o,l,c)}var If=Ff;function Lf(e,t,n=146){for(let r=n;r<166;r+=.1)if(Ff(e,r,t)<0)return r;return 160}function Rf(){return Vu({name:`idol`,vertexColors:!0,surface:`
  float vao = vColor.r, gold = vColor.g;
  vec4 n1 = noiseTex(P.xy * 2.3 + P.z * 1.7), n2 = noiseTex(P.zy * 9.0 + P.x * 5.0);
  vec3 stone = vec3(0.36, 0.20, 0.12) * (0.8 + 0.4 * n1.r) * mix(0.6, 1.0, smoothstep(0.2, 0.7, vao));
  stone = mix(stone, stone * 1.3, smoothstep(0.75, 1.0, vao) * n2.g * 0.6);
  vec3 gilt = vec3(0.95, 0.62, 0.22);
  float worn = smoothstep(0.35, 0.65, n1.g * 0.6 + n2.r * 0.5);
  s.albedo = mix(stone, gilt, gold * worn);
  s.metal = gold * worn; s.rough = mix(0.85, 0.28, gold * worn);
  s.ao = vao; s.N = normalize(Ng + (n2.xyz - 0.5) * 0.07);
`})}async function zf(e,t){let{carved:n,col:r,lights:i,sprites:a}=t,o={lamps:[],interact:{}},s=(t,n,r=0,i=0,a=0,o=0,s=1)=>{let c=new G(t,n);return c.position.set(r,i,a),c.rotation.y=o,c.scale.setScalar(s),c.updateMatrixWorld(!0),e.add(c),c},c=Ol(31);r.addBox(ku.pillar[0],152,ku.pillar[2],1.42,8.5,1.42,.2);let[l,u,d]=ku.idol,f=uu(await ou(lu(`idol`)));{let e=new Qu;e.tone=.95,e.mould([[0,0],[.05,.03],[.05,.19],[0,.22]],2.3),e.top(.22,2.3),e.tone=1,e.band(.22,.42,1.75,Z.KEY,.66,.2,.2),e.top(.42,1.75),e.band(.42,1.12,.95,Z.NICHE,.95,.7,.16),e.top(1.12,.95),e.mouldBand([0,1.12],[.16,1.36],.95,Z.LOTUS,1,.2),e.top(1.36,1.11),s(e.build(),n,l,u-.04,d,0),r.addBox(l,u+.1,d,2.3,.14,2.3),r.addBox(l,u+.7,d,1.12,.7,1.12)}o.idol=s(f,Rf(),l,u+1.32,d,-Math.PI/2,1),r.addCylinder(l,d,.7,u,u+4.8);for(let[e,t]of[[3.1,7.6],[8.9,7.9],[3.2,18.7],[9.2,17]]){let i=Lf(e,t,147)-144+1.2;s($u({W:1.25,H:i}),n,e,143.9,t,0),r.addBox(e,144+i/2,t,.72,i/2,.72)}s(mf({width:3.6,rise:.2,run:.3,count:22}),n,.4,148.34,3.5,0);let p=ff(1);ku.lamps.forEach((e,t)=>{let c=e[1];s(p.stone,n,e[0],c-.03,e[2],t*.7),s(p.metal,af(),e[0],c-.03,e[2],0),r.addCylinder(e[0],e[2],.3,c,c+1.2);let l=c+p.flameY,u=i.add([e[0],l+.12,e[2]],[1,.56,.2],11,5.5,1);u.on=!1,u.level=0;let d=a.add([e[0],l-.02,e[2]],.085,[1,1,1],0,0),f=a.add([e[0],l+.05,e[2]],.5,[1,.5,.16],2,0);o.lamps.push({pos:new H(e[0],c+1,e[2]),light:u,flame:d,glow:f,lit:!1})});{let e=lf({set:`dark_wooden_planks`,color:[.26,.17,.11]}),t=new X;t.color(1,1,1,1),t.box(0,.36,0,.9,.05,.55,.012);for(let e of[-1,1])for(let n of[-1,1])t.box(e*.38,.17,n*.21,.06,.34,.06,.01);s(t.build(),e,3,148.3,-1.3,.3),r.addBox(3,148.5,-1.3,.5,.25,.35,.3);let n=uf({sway:0}),i=new X;i.color(.34,.22,.15,1),i.box(0,.06,0,.8,.12,1.9,.05),i.color(.42,.12,.08,1),i.box(0,.14,.75,.74,.14,.34,.06),i.color(.3,.24,.17,1),i.push().translate(0,.1,-.75).rotZ(Math.PI/2),i.lathe([[0,-.36],[.11,-.36],[.12,0],[.11,.36],[0,.36]],12),i.pop(),s(i.build(),n,1.6,148.3,2.6,.5);let a=sf();s(df(0),a,3.5,148.3,.3,.3),s(df(3),a,3.55,148.3,1,1.1,.8),s(df(1),a,3.05,148.69,-1.2,0),s(df(2),a,2.75,148.69,-1.4,0,.6),r.addCylinder(3.5,.5,.45,148.3,149.2)}{let e=sf();for(let t=0;t<16;t++){let n=c()*6.28,r=2.7+c()*1.2;s(df(t%4),e,l+Math.cos(n)*r,144,d+Math.sin(n)*r,c()*6,.5+c()*.5)}for(let[t,n,i,a]of[[-5.4,8.4,3,1],[-4.6,9,0,1.1],[12.6,18.2,3,1],[13.3,17.4,0,1.2],[11.8,19,1,1.3],[-1,20.4,3,1.1],[0,20.9,0,.9]])s(df(i),e,t,144,n,c()*6,a),r.addCylinder(t,n,.3*a,144,144.9)}{let t=Du,n=[-5.5,152.6,13.8],r=[n[0]+t[0]*5,n[1]+t[1]*5,n[2]+t[2]*5],i=(n[1]-144.25)/t[1],a=[n[0]-t[0]*i,144.25,n[2]-t[2]*i],s=Xd({ra:1.25,rb:1.5,color:[1,.86,.6],intensity:.13,soft:1.4,noise:.5});s.set(r,a),e.add(s.mesh),o.shaft=s;let c=Qd({count:900,box:[-7,144,9,8,154,17],size:.018,color:[1,.86,.62],intensity:1.5,drift:[.06,-.02,.03],seed:5});c.uniforms.uShaftA.value.set(...r),c.uniforms.uShaftB.value.set(...a),c.uniforms.uShaftR.value=1.5,e.add(c.points),o.motes=c}{let[t,n,r]=ku.cistern,i=new ji(4.6,40);i.rotateX(-Math.PI/2);let s=ef(new G(i,$d({shallow:[.1,.2,.17],deep:[.006,.03,.035],clarity:1.6,ripple:.35,foam:.15,skyMul:.12,name:`cistern-water`})));s.position.set(t,n,r),s.updateMatrixWorld(!0),e.add(s),o.cisternWater=s;let c=pf();o.parts=c;let l=new G(c.disc,cf());l.position.set(t-.5,n-.33,r-.3),l.rotation.set(-1.25,.4,.2),l.updateMatrixWorld(!0),e.add(l),o.discInPool=l,o.discGlint=a.add([t-.5,n+.12,r-.3],.34,[1,.85,.55],1,1.4)}{let[t,i,a]=ku.heliostat,c=o.parts;s(c.base,n,t,i-.04,a,.4),r.addCylinder(t,a,.72,i,i+2.3);let l=new On;l.position.set(t,i+.9,a),e.add(l),l.add(new G(c.yoke,af()));let u=new On;u.position.set(0,1.12,0),l.add(u),u.add(new G(c.ring,af()));let d=new G(c.disc,cf());d.visible=!1,u.add(d),l.rotation.y=2.2,u.rotation.x=-.5,l.updateMatrixWorld(!0),o.heliostat={yaw:l,pitch:u,disc:d,center:new H(t,i+2.02,a)}}{let[t,i,a]=ku.stairGate,c=new Qu;c.tone=1;let l=c.g;for(let e of[-1,1])l.push().translate(0,0,e*1.25),c.band(0,2.7,.2,Z.VINE,.4,.4,.16,.2),c.mould([[0,2.7],[.05,2.76],[.05,2.9],[0,2.94]],.2,{hd:.2}),c.top(2.94,.25),l.pop();l.push().translate(0,2.94,0),c.band(0,.42,.22,Z.GLYPH,.84,.42,.18,1.7),c.top(.42,.22,1.7),c.under(0,.22,1.7),c.mouldBand([0,.42],[.14,.62],.22,Z.LOTUS,.8,.2,1.7),c.top(.62,.36,1.84),l.pop(),s(c.build(),n,t-.55,i-.05,a,0),r.addBox(t-.55,i+1.5,a-1.25,.25,1.6,.25),r.addBox(t-.55,i+1.5,a+1.25,.25,1.6,.25);let u=(()=>{let e=new X;e.color(1,1,1,1);for(let t=0;t<6;t++)e.box(0,1.3,.1+t*.19,.035,2.5,.035,.008);for(let t of[.25,1.3,2.35])e.box(0,t,.52,.045,.06,1.04,.008);return e.build()})(),d=n=>{let r=new On;r.position.set(t-.45,i,a+n*-1.04);let o=new G(u,af());return o.scale.z=n,r.add(o),e.add(r),r.updateMatrixWorld(!0),r};o.gate={leaves:[d(1),d(-1)],open:0,collider:r.addBox(t-.45,i+1.3,a,.12,1.4,1.05)},o.gatePos=new H(t-1.4,i,a)}return o}var Bf=e=>new H(...Uu[e]);function Vf(){let e=au(`plastered_wall_02`),t=au(`medieval_blocks_05`);return Vu({name:`town-plaster`,vertexColors:!0,uniforms:{tPlD:{value:e.diff},tPlN:{value:e.nor},tPlA:{value:e.arm},tBkD:{value:t.diff},tBkN:{value:t.nor},uAvgPl:{value:Bf(`plastered_wall_02`)},uAvgBk:{value:Bf(`medieval_blocks_05`)}},fragPars:Hu(`tPl`)+`uniform sampler2D tBkD, tBkN; uniform vec3 uAvgPl, uAvgBk;
`,surface:`
  vec3 w = triW(Ng, 6.0);
  vec3 pP = P * 0.31, pB = P * 0.36;
  vec3 dP = triTex(tPlD, pP, w).rgb / uAvgPl;
  vec3 nP = triNrm(tPlN, pP, Ng, w, 0.9);
  vec3 aP = triTex(tPlA, pP, w).rgb;
  vec3 dB = triTex(tBkD, pB, w).rgb / uAvgBk;
  vec3 nB = triNrm(tBkN, pB, Ng, w, 1.2);
  vec4 mac = noiseTex(vec2(P.x + P.z, P.y) * 0.11);
  vec4 mac2 = noiseTex(vec2(P.x - P.z, P.y) * 0.43);
  vec4 st = noiseTex(vec2((P.x + P.z) * 0.9, P.y * 0.06));
  float dirt = 1.0 - vColor.a;
  // plaster has fallen away in patches, mostly low down and at the corners, showing the rubble wall
  float lose = smoothstep(0.60, 0.72, mac.r * 0.7 + mac2.g * 0.35 + dirt * 0.45);
  vec3 tint = vColor.rgb;
  vec3 alb = tint * mix(vec3(1.0), dP, 0.7) * (0.9 + 0.2 * mac.b);
  alb *= mix(1.0, 0.68, smoothstep(0.5, 0.85, st.r) * (0.35 + dirt));          // rain streaks
  alb = mix(alb, alb * vec3(0.72, 0.70, 0.66), dirt * 0.8);                     // grime under sills and at the foot
  vec3 rubble = vec3(0.50, 0.40, 0.30) * dB;
  s.albedo = mix(alb, rubble, lose);
  s.N = normalize(mix(nP, nB, lose));
  s.rough = mix(aP.g, 0.9, lose);
  s.ao = mix(1.0, aP.r, 0.6) * (0.55 + 0.45 * vColor.a);
  s.spec = 0.5;
`})}function Hf(){let e=au(`clay_roof_tiles_02`);return Vu({name:`town-roof`,vertexColors:!0,uniforms:{tRfD:{value:e.diff},tRfN:{value:e.nor},tRfA:{value:e.arm},uAvgRf:{value:Bf(`clay_roof_tiles_02`)}},fragPars:Hu(`tRf`)+`uniform vec3 uAvgRf;
`,surface:`
  vec2 uv = vUv * 0.42;
  vec3 d = texture(tRfD, uv).rgb / uAvgRf;
  vec3 tn = texture(tRfN, uv).xyz * 2.0 - 1.0;
  vec3 arm = texture(tRfA, uv).rgb;
  vec4 mac = noiseTex(P.xz * 0.09), mac2 = noiseTex(P.xz * 0.6 + P.y * 0.3);
  vec3 alb = vColor.rgb * mix(vec3(1.0), d, 0.9);
  // individual tiles differ; lichen greys the north slopes; soot near chimneys is in vertex alpha
  vec2 tile = floor(vUv * vec2(4.2, 2.6));
  alb *= 0.8 + 0.4 * hash12(tile);
  float lichen = smoothstep(0.5, 0.8, mac.r + 0.25 * mac2.g) * smoothstep(0.1, -0.5, Ng.z + Ng.x * 0.5);
  alb = mix(alb, vec3(0.34, 0.33, 0.27) * (0.7 + 0.6 * mac2.r), lichen * 0.6);
  alb *= 0.6 + 0.4 * vColor.a;
  s.albedo = alb;
  s.N = uvNrm(Ng, P, uv, vec3(tn.xy * 1.3, tn.z));
  s.rough = arm.g; s.ao = arm.r * (0.6 + 0.4 * vColor.a); s.spec = 0.7;
`})}var Uf=[[.78,.69,.56],[.74,.6,.45],[.8,.75,.68],[.7,.55,.44],[.76,.66,.5],[.68,.6,.52],[.8,.66,.5]],Wf=[[.2,.3,.26],[.28,.2,.15],[.22,.27,.34],[.36,.17,.13],[.3,.31,.22]],Gf=[[.6,.25,.13],[.66,.3,.15],[.54,.22,.12],[.6,.33,.2],[.5,.27,.17]],Kf=class{constructor(e){this.col=e,this.g={plaster:new X,stone:new X,wood:new X,roof:new X,glass:new X,iron:new X,cloth:new X},this.all=Object.values(this.g),this.lanterns=[]}begin(e,t,n,r){for(let i of this.all)i.push().translate(e,t,n).rotY(r);this._o={x:e,y:t,z:n,c:Math.cos(r),s:Math.sin(r),rot:r}}end(){for(let e of this.all)e.pop()}W(e,t,n){let r=this._o;return[r.x+e*r.c+n*r.s,r.y+t,r.z-e*r.s+n*r.c]}colBox(e,t,n,r,i,a){let o=this.W(e,t,n);return this.col.addBox(o[0],o[1],o[2],r,i,a,this._o.rot)}panel(e,t,n,r,i,a,o=null,s=[1,1,1],c=.2){let l=[0,0,1],u=(t,n,r,i,a=1)=>{e.color(s[0],s[1],s[2],a),e.quadAuto(t,n,r,i,l)};if(!o){e.color(s[0],s[1],s[2],.75);let o=e.v(t,r,a,0,0,1),c=e.v(n,r,a,0,0,1);e.col[3]=1;let l=e.v(n,i,a,0,0,1),u=e.v(t,i,a,0,0,1);e.triAuto(o,c,l),e.triAuto(o,l,u);return}let{hx0:d,hx1:f,hy0:p,hy1:m,arch:h=0}=o;u([t,r,a],[d,r,a],[d,i,a],[t,i,a]),u([f,r,a],[n,r,a],[n,i,a],[f,i,a]),p>r+.001&&u([d,r,a],[f,r,a],[f,p,a],[d,p,a],.55);let g=a-c,_=(t,n,r,i,a)=>{e.color(s[0]*.92,s[1]*.92,s[2]*.92,.7),e.quadAuto(t,n,r,i,a)};if(_([d,p,a],[d,p,g],[d,m,g],[d,m,a],[1,0,0]),_([f,p,a],[f,p,g],[f,m,g],[f,m,a],[-1,0,0]),_([d,p,a],[f,p,a],[f,p,g],[d,p,g],[0,1,0]),h<=0)u([d,m,a],[f,m,a],[f,i,a],[d,i,a]),_([d,m,a],[f,m,a],[f,m,g],[d,m,g],[0,-1,0]);else{let e=(d+f)/2,t=(f-d)/2,n=n=>{let r=Math.PI*n,i=Math.cos(r);return[e-t*i,m+h*Math.max(0,1-Math.abs(i)**1.7)**(1/1.7)]};for(let t=0;t<10;t++){let r=n(t/10),o=n((t+1)/10);u([r[0],r[1],a],[o[0],o[1],a],[o[0],i,a],[r[0],i,a]),_([r[0],r[1],a],[o[0],o[1],a],[o[0],o[1],g],[r[0],r[1],g],[e-(r[0]+o[0])/2,-1,0])}}}archPath(e,t,n,r,i,a=12){let o=[];for(let s=0;s<=a;s++){let c=s/a*Math.PI,l=Math.cos(c);o.push([e-t*l,n+r*Math.max(0,1-Math.abs(l)**1.7)**(1/1.7),i])}return o}window(e,t,n,r,i,a,{shutters:o=!0,shutterCol:s=Wf[0],box:c=!1,stoneFrame:l=!0,arch:u=0}={}){let d=this.g,f=i-.2,p=t-e,m=r-n,h=(e+t)/2;d.glass.color(1,1,1,1),d.glass.quadAuto([e,n,f+.03],[t,n,f+.03],[t,r+u*.8,f+.03],[e,r+u*.8,f+.03],[0,0,1]);let g=d.wood;g.color(.55,.46,.38,1);let _=.06;g.box(e+_/2,n+m/2,f+.06,_,m,.07,.008),g.box(t-_/2,n+m/2,f+.06,_,m,.07,.008),g.box(h,n+_/2,f+.06,p,_,.07,.008),g.box(h,r-_/2,f+.06,p,_,.07,.008),g.box(h,n+m/2,f+.065,.045,m,.05,.006),m>1.3&&g.box(h,n+m*.62,f+.065,p,.04,.05,.006);let v=d.stone;if(v.color(1,.98,.95,1),v.box(h,n-.06,i+.05,p+.3,.12,.34,.02),l&&u<=0&&v.box(h,r+.1,i+.01,p+.36,.2,.1,.02),o)for(let r of[-1,1]){let o=2.6+a()*.5-(a()<.2?1.6:0),c=r<0?e:t;g.push().translate(c,n+m/2,i+.035).rotY(r*o),g.color(s[0],s[1],s[2],.9);let l=p/2-.02;g.box(r*-l/2,0,0,l,m-.04,.035,.008),g.color(s[0]*.8,s[1]*.8,s[2]*.8,.8);for(let e=0;e<2;e++)g.box(r*-l/2,(e-.5)*m*.55,.022,l-.06,.07,.02,.004);g.pop()}if(c){g.color(.4,.3,.22,.9),g.box(h,n-.22,i+.24,p+.1,.2,.22,.015);let t=d.cloth;for(let r=0;r<9;r++){let r=e+.08+(p-.16)*a(),o=a()<.6?[.62,.1,.09]:[.8,.42,.3];t.color(.16,.26,.1,1),t.box(r,n-.07,i+.24+(a()-.5)*.1,.16,.14,.16,.05),t.color(o[0],o[1],o[2],1),t.box(r+(a()-.5)*.1,n+.02+a()*.06,i+.26+(a()-.5)*.12,.08,.07,.08,.03)}}}door(e,t,n,r,i,a,{arch:o=0,col:s=[.36,.26,.18],recess:c=.3,studs:l=!0}={}){let u=this.g,d=i-c,f=t-e,p=(e+t)/2,m=u.wood,h=Math.max(3,Math.round(f/.24));for(let t=0;t<h;t++){let i=.85+a()*.3;m.color(s[0]*i,s[1]*i,s[2]*i,.85),m.box(e+(t+.5)*(f/h),n+(r-n+o)/2,d+.03,f/h-.012,r-n+o,.06,.006)}let g=u.iron;g.color(1,1,1,1);for(let e of[.25,.75])g.box(p,n+(r-n)*e,d+.065,f-.12,.06,.015,.004);if(g.push().translate(t-.22,n+1.05,d+.075),g.lathe([[.05,-.012],[.07,0],[.05,.012],[.03,0],[.05,-.012]],12,{}),g.pop(),l)for(let t=0;t<h;t++)for(let i of[.12,.5,.88])g.box(e+(t+.5)*(f/h),n+(r-n)*i,d+.066,.03,.03,.02,.008);let _=u.stone;_.color(1,.98,.95,1),_.box(e-.11,n+(r-n)/2,i+.02,.22,r-n,.14,.02),_.box(t+.11,n+(r-n)/2,i+.02,.22,r-n,.14,.02),o>0?_.sweep(this.archPath(p,f/2+.11,r,o+.1,i+.02),.14,.22):_.box(p,r+.13,i+.02,f+.5,.26,.16,.02),_.color(.95,.93,.9,.8),_.box(p,n-.02,i+.22,f+.5,.18,.6,.03)}house(e){let t=Ol(e.seed??1),{w:n,d:r=9.5,floors:i=3}=e,a=this.g,o=e.tint||Uf[t()*Uf.length|0],s=Wf[t()*Wf.length|0],c=Gf[t()*Gf.length|0],l=e.portico?3.9:3.15+t()*.3,u=2.85+t()*.3,d=l+(i-1)*u,f=e.jetty?.42:0;this.begin(e.x,e.y??0,e.z,e.rot??0);let p=Math.max(2,Math.round(n/2.9)),m=n/p,h=e.doorBay??t()*p|0,g=a.plaster;for(let r=0;r<i;r++){let i=r===0?0:l+(r-1)*u,c=r===0?l:i+u,d=r===0?0:f;if(r===0&&e.portico)this._portico(e,t,p,m,l,o,h);else{for(let n=0;n<p;n++){let a=n*m,l=a+m;if(r===0&&n===h){let e=Math.min(1.25,m*.5),n=t()<.6?.45:0,r={hx0:a+m/2-e/2,hx1:a+m/2+e/2,hy0:0,hy1:2.15,arch:n};this.panel(g,a,l,i,c,d,r,o,.3),this.door(r.hx0,r.hx1,0,2.15,d,t,{arch:n,col:[.3+t()*.1,.22+t()*.06,.15+t()*.05]});continue}if(r>0&&t()<.08){this.panel(g,a,l,i,c,d,null,o);continue}let u=r===0?Math.min(1.5,m*.55):Math.min(1.05,m*.42),f=r===0?1.35:1.25+(r===1?.2:0),p=r===0?1:.85,_={hx0:a+m/2-u/2,hx1:a+m/2+u/2,hy0:i+p,hy1:i+p+f};this.panel(g,a,l,i,c,d,_,o,.2),this.window(_.hx0,_.hx1,_.hy0,_.hy1,d,t,{shutters:r>0||t()<.5,shutterCol:s,box:e.boxes&&r===1&&t()<.6}),r===0&&e.awning&&t()<.7&&this._awning(_.hx0-.2,_.hx1+.2,_.hy1+.25,d,t)}if(r>0){if(f>0&&r===1){a.wood.color(.32,.24,.17,.9),a.wood.box(n/2,i-.1,f-.08,n+.1,.22,.2,.015);for(let e=0;e<=Math.round(n/.7);e++)a.wood.box(e*(n/Math.round(n/.7)),i-.3,f/2-.02,.14,.18,f+.1,.012);g.color(o[0]*.8,o[1]*.8,o[2]*.8,.6),g.quadAuto([0,i-.22,0],[n,i-.22,0],[n,i-.22,f],[0,i-.22,f],[0,-1,0])}else a.stone.color(1,.98,.94,1),a.stone.box(n/2,i,d+.03,n+.08,.14,.1,.02)}if(e.timber&&r>0){let e=a.wood;e.color(.27,.2,.15,.9);for(let t=0;t<=p;t++)e.box(Math.min(n-.09,Math.max(.09,t*m)),(i+c)/2,d+.025,.18,c-i,.06,.01);e.box(n/2,c-.09,d+.025,n,.18,.06,.01);for(let n=0;n<p;n++)t()<.45&&(e.push().translate(n*m+m*(t()<.5?.2:.8),i+.42,d+.022).rotZ((t()<.5?1:-1)*.9),e.box(0,0,0,.13,1.25,.05,.008),e.pop())}}}let _=[o[0]*.97,o[1]*.97,o[2]*.97];g.color(_[0],_[1],_[2],.85),g.quadAuto([0,0,f],[0,0,-r],[0,d,-r],[0,d,f],[-1,0,0]),g.quadAuto([n,0,f],[n,0,-r],[n,d,-r],[n,d,f],[1,0,0]),g.quadAuto([0,0,-r],[n,0,-r],[n,d,-r],[0,d,-r],[0,0,-1]);let v=a.stone;if(v.color(.96,.94,.9,.8),e.portico||v.box(n/2,.36,.045,n+.1,.72,.09,.02),e.quoins)for(let e=0;e<Math.floor(d/.5);e++)for(let t of[0,n]){let n=e%2?.46:.3;v.color(.98,.95,.9,1),v.box(t+(t===0?n/2-.03:-n/2+.03),.25+e*.5,(e*.5<l?0:f)+.03,n,.44,.1,.02)}return this._roof(e,t,n,r,d,f,c,_),e.sign&&this._sign(e.sign===!0?n*.3:e.sign,l+.2,f,t),e.lantern!==!1&&!e.portico&&this._lantern(h*m+m/2+.95,2.45,.02),e.portico?this.colBox(n/2,d/2,-r/2-1.3,n/2,d/2,r/2-1.3):this.colBox(n/2,d/2,-r/2+f/2,n/2,d/2,r/2+.05),this.end(),{H:d}}_portico(e,t,n,r,i,a,o){let s=this.g,c=e.w,l=s.stone,u=s.plaster,d=2.35,f=i-d-.45;for(let e=0;e<=n;e++){let t=Math.min(c-.3,Math.max(.3,e*r));l.color(1,.98,.94,1),l.box(t,d/2,-.3,.6,d,.6,.03),l.color(1.03,1,.96,1),l.box(t,2.42,-.3,.72,.14,.72,.02),l.box(t,.12,-.3,.74,.24,.74,.02),this.colBox(t,1.6,-.3,.3,1.6,.3)}for(let e=0;e<n;e++){let s=e*r+(e===0?.3:0),c=(e+1)*r-(e===n-1?.3:0),p=(s+c)/2,m=(c-s)/2-.3;this.panel(u,e*r,(e+1)*r,d,i,0,{hx0:p-m,hx1:p+m,hy0:d,hy1:2.351,arch:f},a,.6),l.color(1,.97,.93,1),l.sweep(this.archPath(p,m+.09,2.35,f+.09,-.02),.5,.18);let h=-2.6;if(e===o){let n={hx0:p-.62,hx1:p+.62,hy0:0,hy1:2.2,arch:.35};this.panel(u,e*r,(e+1)*r,0,i,h,n,[a[0]*.9,a[1]*.9,a[2]*.9],.25),this.door(n.hx0,n.hx1,0,2.2,h,t,{arch:.35})}else{let n={hx0:p-.85,hx1:p+.85,hy0:.95,hy1:2.3};this.panel(u,e*r,(e+1)*r,0,i,h,n,[a[0]*.9,a[1]*.9,a[2]*.9],.2),this.window(n.hx0,n.hx1,n.hy0,n.hy1,h,t,{shutters:!1})}}let p=s.wood;p.color(.3,.23,.17,.7),p.quadAuto([0,i-.25,0],[c,i-.25,0],[c,i-.25,-2.6],[0,i-.25,-2.6],[0,-1,0]);for(let e=0;e<=Math.round(c/.8);e++)p.box(e*(c/Math.round(c/.8)),i-.36,-2.6/2,.14,.2,2.6,.012);l.color(.92,.9,.86,.8),l.box(c/2,.06,-1.1,c,.12,3.1,.02),u.color(a[0]*.9,a[1]*.9,a[2]*.9,.7),u.quadAuto([0,0,0],[0,0,-2.6],[0,i,-2.6],[0,i,0],[1,0,0]),u.quadAuto([c,0,0],[c,0,-2.6],[c,i,-2.6],[c,i,0],[-1,0,0])}_roof(e,t,n,r,i,a,o,s){let c=this.g,l=c.roof,u=.55,d=e.roofAxis||`x`,f=()=>{let e=.85+t()*.3;l.color(o[0]*e,o[1]*e,o[2]*e,1)};if(d===`x`){let d=a+u,p=-r-u*.6,m=(a-r)/2,h=(r+a)*(.36+t()*.1),g=i-.12,_=i+h,v=Math.hypot(d-m,_-g),y=Math.hypot(m-p,_-g);f(),l.quadAuto([-.33,g,d],[n+u*.6,g,d],[n+u*.6,_,m],[-.33,_,m],[0,1,1],[0,v,n+u*1.2,0]),f(),l.quadAuto([n+u*.6,g,p],[-.33,g,p],[-.33,_,m],[n+u*.6,_,m],[0,1,-1],[0,y,n+u*1.2,0]),c.plaster.color(s[0],s[1],s[2],.9),c.plaster.triOut([0,i,a],[0,i,-r],[0,_-.1,m],[-1,0,0]),c.plaster.triOut([n,i,a],[n,i,-r],[n,_-.1,m],[1,0,0]);let b=c.wood;b.color(.3,.23,.17,.8);for(let e=0;e<=Math.round(n/.62);e++)b.box(e*(n/Math.round(n/.62)),g-.13,a+u/2-.05,.1,.13,.65,.01);b.box(n/2,g-.07,d-.02,n+u*1.2,.16,.04,.008);let x=Math.round((n+u*1.2)/.24);for(let e=0;e<x;e++)f(),l.push().translate(-.33+(e+.5)*.24,g+.015,d+.01).rotX(Math.atan2(_-g,d-m)-Math.PI/2),l.lathe([[.085,-.16],[.085,0]],6,{a0:0,a1:Math.PI,flat:!0}),l.pop();f(),l.box(n/2,_+.03,m,n+u*1.2,.14,.26,.05),this._chimney(t,n*(.2+t()*.6),_,m-1.2-t()*1.5,(_-g)/(m-p)),e.dormer&&n>7&&this._dormer(t,n*(.3+t()*.4),g,d,(_-g)/(d-m),o,s)}else{let e=n*(.42+t()*.12),o=n/2,d=a+u*.5,p=-r-u*.5,m=i-.12,h=i+e,g=Math.hypot(o+u,e);f(),l.quadAuto([-.55,m-.2,d],[-.55,m-.2,p],[o,h,p],[o,h,d],[-1,1,0],[0,g,r+a+u,0]),f(),l.quadAuto([n+u,m-.2,p],[n+u,m-.2,d],[o,h,d],[o,h,p],[1,1,0],[0,g,r+a+u,0]);let _=c.plaster;_.color(s[0]*1.03,s[1]*1.03,s[2]*1.03,.95),_.triOut([0,i,a],[n,i,a],[o,h-.15,a],[0,0,1]),_.triOut([0,i,-r],[n,i,-r],[o,h-.15,-r],[0,0,-1]);let v=.8;this.window(o-v/2,o+v/2,i+.5,i+1.45,a+.2,t,{shutters:!1});let y=c.wood;y.color(.3,.22,.16,.85),y.sweep([[-.55,m-.25,d],[o,h-.05,d]],.06,.24),y.sweep([[n+u,m-.25,d],[o,h-.05,d]],.06,.24),f(),l.box(o,h+.03,(d+p)/2,.26,.14,r+a+u,.05),this._chimney(t,n*.25,h-e*.5,-r*.6,0)}}_chimney(e,t,n,r,i){let a=this.g,o=n-1.6,s=2.3+e()*.8;a.stone.color(.9,.82,.74,.8),a.stone.box(t,o+s/2,r,.72,s,.72,.02),a.stone.color(1,.96,.9,1),a.stone.box(t,o+s+.06,r,.9,.12,.9,.02);for(let e of[-.17,.17])a.roof.color(.6,.32,.2,1),a.roof.push().translate(t+e,o+s+.12,r),a.roof.lathe([[.11,0],[.13,.12],[.1,.3],[.12,.34],[.09,.34]],8),a.roof.pop()}_dormer(e,t,n,r,i,a,o){let s=this.g,c=r-1.5,l=n+i*1.5,u=1.3,d=1.2,f=s.plaster,p={hx0:t-.38,hx1:t+.38,hy0:l+.2,hy1:l+1};this.panel(f,t-u/2,t+u/2,l-.4,l+d,c+.75,p,o,.12),this.window(p.hx0,p.hx1,p.hy0,p.hy1,c+.75,e,{shutters:!1,stoneFrame:!1}),f.color(o[0],o[1],o[2],.9),f.quadAuto([t-u/2,l-.4,c+.75],[t-u/2,l-.4,c-.9],[t-u/2,l+d,c-.9],[t-u/2,l+d,c+.75],[-1,0,0]),f.quadAuto([t+u/2,l-.4,c+.75],[t+u/2,l-.4,c-.9],[t+u/2,l+d,c-.9],[t+u/2,l+d,c+.75],[1,0,0]);let m=s.roof;m.color(a[0],a[1],a[2],1),m.quadAuto([t-u/2-.15,l+d-.05,c+.95],[t,l+d+.5,c+.95],[t,l+d+.5,c-1.6],[t-u/2-.15,l+d-.05,c-1.6],[-1,1,0],[0,0,2.5,1]),m.quadAuto([t+u/2+.15,l+d-.05,c+.95],[t,l+d+.5,c+.95],[t,l+d+.5,c-1.6],[t+u/2+.15,l+d-.05,c-1.6],[1,1,0],[0,0,2.5,1]),f.color(o[0],o[1],o[2],1),f.triOut([t-u/2,l+d,c+.75],[t+u/2,l+d,c+.75],[t,l+d+.45,c+.75],[0,0,1])}_awning(e,t,n,r,i){let a=this.g.cloth,o=[[.55,.16,.1],[.2,.3,.36],[.6,.45,.2],[.3,.36,.22]][i()*4|0],s=1.5;for(let i=0;i<6;i++){let c=i/6,l=(i+1)/6,u=(e,t)=>[t,n-e*.7-Math.sin(e*Math.PI)*.08,r+.05+e*s];a.color(o[0],o[1],o[2],1);let d=u(c,e),f=u(c,t),p=u(l,t),m=u(l,e),h=.9,g=.43,_=a.v(d[0],d[1],d[2],0,h,g,0,1-c),v=a.v(f[0],f[1],f[2],0,h,g,(t-e)/.5,1-c),y=a.v(p[0],p[1],p[2],0,h,g,(t-e)/.5,1-l),b=a.v(m[0],m[1],m[2],0,h,g,0,1-l);a.triAuto(_,v,y),a.triAuto(_,y,b)}let c=this.g.iron;c.color(1,1,1,1);for(let i of[e,t])c.sweep([[i,n-.7,r+.05+s],[i,n-.75,r+.02]],.02,.02,[1,0,0])}_sign(e,t,n,r){let i=this.g.iron,a=this.g.wood;i.color(1,1,1,1),i.sweep([[e,t+.5,n],[e,t+.5,n+.95]],.03,.03,[1,0,0]),i.sweep([[e,t+.1,n],[e,t+.5,n+.55]],.02,.02,[1,0,0]);let o=[[.5,.2,.12],[.2,.3,.3],[.5,.4,.2]][r()*3|0];a.color(o[0],o[1],o[2],1),a.box(e,t+.12,n+.62,.05,.5,.62,.012),a.color(.75,.62,.36,1),a.push().translate(e+.03,t+.12,n+.62).rotZ(Math.PI/2),a.lathe([[0,0],[.14,0],[.14,.012],[0,.012]],14),a.pop()}_lantern(e,t,n){let r=this.g.iron;r.color(1,1,1,1),r.sweep([[e,t,n],[e,t+.1,n+.34]],.025,.025,[1,0,0]),r.box(e,t-.1,n+.34,.16,.03,.16,.005),r.box(e,t+.14,n+.34,.18,.03,.18,.005);for(let[i,a]of[[-1,-1],[1,-1],[1,1],[-1,1]])r.box(e+i*.07,t+.02,n+.34+a*.07,.014,.24,.014,0);this.g.glass.color(2.2,1.7,1,1),this.g.glass.box(e,t+.02,n+.34,.11,.2,.11,0);let i=this.W(e,t+.02,n+.34);this.lanterns.push(i)}wall(e,t,n,r,i=5.5,a=.9,o=0,s={}){let c=Math.hypot(n-e,r-t),l=Math.atan2(-(r-t),n-e);this.begin(e,o,t,l);let u=this.g.stone;u.color(1,.98,.95,.9),u.box(c/2,i/2,0,c,i,a,.03),u.color(1.04,1.01,.97,1),u.box(c/2,i+.12,0,c+.1,.24,a+.28,.04),u.color(.96,.94,.9,.8),u.box(c/2,.4,0,c,.8,a+.2,.03);let d=Math.max(1,Math.round(c/7));if(!s.plain)for(let e=0;e<=d;e++){let t=e/d*c;u.color(1,.98,.95,.9),u.box(t,i*.42,a/2+.25,.9,i*.84,.6,.03),u.push().translate(t,i*.84,a/2+.25),u.rotX(.6),u.box(0,.1,-.12,.9,.5,.5,.02),u.pop()}this.colBox(c/2,i/2,0,c/2,i/2,a/2+.2),this.end()}build(e){let t=new On;t.name=`town`;for(let[n,r]of Object.entries(this.g)){if(!r.count)continue;let i=new G(r.build(),e[n]);i.name=`town-`+n,t.add(i)}return t}};function qf(){return{plaster:Vf(),stone:zd({set:`medieval_blocks_05`,scale:.33,color:[.6,.52,.42],nrm:1.1,name:`town-stone`,streaks:.7,dust:.15}),wood:lf({set:`dark_wooden_planks`,color:[.62,.52,.42],scale:.9,name:`town-wood`}),roof:Hf(),glass:rf({color:[.035,.04,.045],rough:.14,metal:0,name:`town-glass`}),iron:of(),cloth:uf({stripes:6,sway:.1})}}var Jf={pos:[-2,0,-605],rot:.42,T:13.5,wall:1.6,towerH:47,belfryY:37.8},Yf=(e,t,n,r,i=12)=>{let a=[];for(let o=0;o<=i;o++){let s=o/i*Math.PI,c=Math.cos(s);a.push([e-t*c,n+r*Math.max(0,1-Math.abs(c)**1.7)**(1/1.7)])}return a};function Xf(e,t,n,r=1,i=.3,a=!0){let o=t=>e.color(r,r*.985,r*.955,t),s=(t,n,r,i,a,s,c)=>{o(c),e.quadAuto([t[0],t[1],a],[n[0],n[1],a],[r[0],r[1],a],[i[0],i[1],a],s)};for(let r of t)for(let t of r.cells){let{x0:c,x1:l}=t,u=r.y0,d=r.y1,f=t.hole;for(let[e,t,r]of a?[[0,[0,0,1],1],[-n,[0,0,-1],i]]:[[0,[0,0,1],1]])if(!f)s([c,u],[l,u],[l,d],[c,d],e,t,r);else if(s([c,u],[f.x0,u],[f.x0,d],[c,d],e,t,r),s([f.x1,u],[l,u],[l,d],[f.x1,d],e,t,r),f.y0>u+1e-4&&s([f.x0,u],[f.x1,u],[f.x1,f.y0],[f.x0,f.y0],e,t,r),!f.arch)f.y1<d-1e-4&&s([f.x0,f.y1],[f.x1,f.y1],[f.x1,d],[f.x0,d],e,t,r);else{let n=Yf((f.x0+f.x1)/2,(f.x1-f.x0)/2,f.y1,f.arch);for(let i=0;i<n.length-1;i++)s(n[i],n[i+1],[n[i+1][0],d],[n[i][0],d],e,t,r)}if(f){let t=(f.x0+f.x1)/2;if(o(.55),e.quadAuto([f.x0,f.y0,0],[f.x0,f.y0,-n],[f.x0,f.y1,-n],[f.x0,f.y1,0],[1,0,0]),e.quadAuto([f.x1,f.y0,0],[f.x1,f.y0,-n],[f.x1,f.y1,-n],[f.x1,f.y1,0],[-1,0,0]),e.quadAuto([f.x0,f.y0,0],[f.x1,f.y0,0],[f.x1,f.y0,-n],[f.x0,f.y0,-n],[0,1,0]),!f.arch)e.quadAuto([f.x0,f.y1,0],[f.x1,f.y1,0],[f.x1,f.y1,-n],[f.x0,f.y1,-n],[0,-1,0]);else{let r=Yf(t,(f.x1-f.x0)/2,f.y1,f.arch);for(let i=0;i<r.length-1;i++)e.quadAuto([r[i][0],r[i][1],0],[r[i+1][0],r[i+1][1],0],[r[i+1][0],r[i+1][1],-n],[r[i][0],r[i][1],-n],[t-(r[i][0]+r[i+1][0])/2,-1,0])}}}}function Zf(e,t,n,r,i,a,o,s,c=2,l=1.05){t.color(1,1,1,1);let u=Yf(n,i/2,r+a,o,10);t.quadAuto([n-i/2,r,s-.12],[n+i/2,r,s-.12],[n+i/2,r+a,s-.12],[n-i/2,r+a,s-.12],[0,0,1]);for(let e=0;e<u.length-1;e++)t.quadAuto([u[e][0],r+a,s-.12],[u[e+1][0],r+a,s-.12],[u[e+1][0],u[e+1][1],s-.12],[u[e][0],u[e][1],s-.12],[0,0,1]);e.color(l,l*.98,l*.95,1);for(let t=1;t<c;t++)e.box(n-i/2+i/c*t,r+a/2,s-.05,.14,a,.16,.02);e.box(n,r+.06,s-.02,i+.1,.16,.26,.02);let d=i/c;for(let t=0;t<c;t++)e.sweep(Yf(n-i/2+d*(t+.5),d/2-.03,r+a-d*.15,d*.6,8).map(e=>[e[0],e[1],s-.05]),.14,.1);let f=Math.min(o*.3,i*.2),p=r+a+o*.5,m=[];for(let e=0;e<=16;e++){let t=e/16*Math.PI*2;m.push([n+Math.cos(t)*f,p+Math.sin(t)*f,s-.05])}e.sweep(m,.14,.09),e.sweep(Yf(n,i/2+.06,r+a,o+.06,12).map(e=>[e[0],e[1],s+.02]),.24,.16)}function Qf(){let e=new X,t=new X,n=new X,r=new X,i=new X,a=Ol(99),{T:o,wall:s,towerH:c,belfryY:l}=Jf,u=o/2,d=12.5,f=5.2,p=10.5,m=(e,t,n=1)=>e.color(t,t*.985,t*.955,n),h=[],g=(t,n)=>{e.push().rotY(t).translate(0,0,u),Xf(e,n,s,1,.28),e.pop()},_=(e,t)=>({x0:e-.35,x1:e+.35,y0:t,y1:t+2.6,arch:.5}),v={y0:35.2,y1:46.2,cells:[-1,0,1].map(e=>({x0:-u+o/3*(e+1),x1:-u+o/3*(e+2),hole:{x0:o/3*e-1.15,x1:o/3*e+1.15,y0:l+1.05,y1:43.2,arch:1.7}}))},y=(e,t)=>({y0:e,y1:t,cells:[{x0:-u,x1:u,hole:null}]}),b=(e,t,n)=>({y0:e,y1:t,cells:[{x0:-u,x1:u,hole:_(0,n)}]});for(let[e,t]of[[0,`S`],[Math.PI,`N`],[-Math.PI/2,`W`],[Math.PI/2,`E`]]){let n=[];t===`N`?n.push({y0:0,y1:6,cells:[{x0:-u,x1:u,hole:{x0:-1,x1:1,y0:0,y1:2.6,arch:1}}]}):t===`W`?n.push({y0:0,y1:6,cells:[{x0:-u,x1:u,hole:null}]}):n.push(y(0,6)),n.push(t===`E`?y(6,12):b(6,12,8.2)),n.push(t===`W`?y(12,26):b(12,19,14.8),...t===`W`?[]:[b(19,26,21.4)]),n.push(b(26,35.2,29.5)),n.push(v),n.push(y(46.2,c)),g(e,n)}for(let t of[-1,1])for(let n of[-1,1])for(let r=0;r<4;r++){let i=r*11.5,a=i+11.5,o=2.7-r*.45;m(e,.97+.03*r),e.box(t*(u+o*.25),(i+a)/2,n*(u+o*.25),o,a-i,o,.12),m(e,1.05),e.box(t*(u+o*.25),a,n*(u+o*.25),o+.3,.5,o+.3,.1),e.push().translate(t*(u+o*.25),a+.25,n*(u+o*.25)),e.lathe([[o*.55,0],[o*.2,1.4]],4,{flat:!0,a0:Math.PI/4,a1:Math.PI*2+Math.PI/4}),e.pop(),r===0&&h.push([t*(u+.7),6,n*(u+.7),1.4,6,1.4,0,0])}for(let t of[6,12,26,35.2,46.4])m(e,1.06),e.frame([[0,t-.2],[.22,t-.05],[.22,t+.2],[0,t+.32]],u,u);m(e,1.03),e.frame([[.25,c],[.55,c+.3],[.55,c+1.7],[.25,c+1.7]],u,u);for(let t of[-1,1])for(let n of[-1,1])e.push().translate(t*(u+.2),c,n*(u+.2)),m(e,1.02),e.box(0,2.2,0,1.7,4.4,1.7,.1),e.lathe([[1.15,4.4],[0,10.2]],4,{flat:!0,a0:Math.PI/4,a1:Math.PI*2+Math.PI/4}),e.pop();for(let t of[e,r,i,n])t.push().rotY(-Math.PI/2).translate(0,0,u);for(let t=0;t<4;t++){m(e,1+t*.02),e.sweep(Yf(0,2+t*.42,4.2,3+t*.42,14).map(e=>[e[0],e[1],.9-t*.24]),.3,.36);for(let n of[-1,1])e.box(n*(2+t*.42),2.1,.9-t*.24,.36,4.2,.3,.05)}for(let e=0;e<10;e++){let t=.8+a()*.3;r.color(.34*t,.25*t,.18*t,.8),r.box(-1.8+(e+.5)*.36,3.4,.08,.34,6.8,.1,.01)}for(let e of[1.2,3.2,5.2])for(let t of[-1,1])i.color(.5,.5,.5,1),i.box(t*.95,e,.16,1.6,.1,.03,.01);m(e,1.06),e.sweep([[-3.9,8.2,.7],[0,12.4,.7],[3.9,8.2,.7]],.5,.4),n.color(1,1,1,1),n.push().translate(0,20.5,.06).rotX(Math.PI/2),n.lathe([[0,0],[3.1,0]],28),n.pop(),m(e,1.07);for(let t of[3.3,2,.7]){let n=[];for(let e=0;e<=28;e++){let r=e/28*Math.PI*2;n.push([Math.cos(r)*t,20.5+Math.sin(r)*t,.14])}e.sweep(n,.3,t>3?.4:.16)}for(let t=0;t<12;t++){let n=t/12*Math.PI*2;e.sweep([[Math.cos(n)*.7,20.5+Math.sin(n)*.7,.14],[Math.cos(n)*3.2,20.5+Math.sin(n)*3.2,.14]],.2,.12)}for(let t=-3;t<=3;t++)e.color(.55,.54,.52,.5),e.box(t*1.5,14.6,.02,.9,2.4,.2,0),m(e,1.06),e.sweep(Yf(t*1.5,.5,15.5,.6,8).map(e=>[e[0],e[1],.14]),.26,.12),e.box(t*1.5,14.3,.2,.34,1.5,.3,.08);for(let t of[e,r,i,n])t.pop();h.push([-u-.6,3,0,.7,3,3.4,0,0]);let x=u-s/2;h.push([0,24,x,u,24,s/2,0,0],[-x,24,0,s/2,24,u,0,0],[x,24,0,s/2,24,u,0,0]),h.push([-(u+1)/2,24,-x,(u-1)/2,24,s/2,0,0],[(u+1)/2,24,-x,(u-1)/2,24,s/2,0,0],[0,26.5,-x,1,22.9,s/2,0,0]);let S=u-s;m(e,.9,.35),e.quadAuto([-S,.02,-S],[S,.02,-S],[S,.02,S],[-S,.02,S],[0,1,0]);let C=1.7,w=l/7,T=S*2-C*2,E=[];for(let t=0;t<7;t++){let n=t%4,i=t*w,a=i+w,o=-n*Math.PI/2;e.push().rotY(o),r.push().rotY(o);let s=Math.round(w/.27),c=w/s,l=T/s;for(let t=0;t<s;t++)m(e,.84+.1*(t*7%5)/5,.45),e.box(S-C/2,i+(t+.5)*c-.25,-T/2+(t+.5)*l,C,c+.5,l+.02,.02);m(e,.86,.4),e.box(S-C/2,a-.15,T/2+C/2,C,.3,C,.03),r.color(.5,.4,.32,.6),r.sweep([[S-C-.04,i+1.05,-T/2],[S-C-.04,a+1.05,T/2]],.07,.09,[1,0,0]);for(let e=0;e<=4;e++){let t=e/4;r.box(S-C-.04,i+w*t+.5,-T/2+T*t,.07,1.1,.07,.01)}r.sweep([[S-C-.04,a+1.05,T/2],[S-C-.04,a+1.05,T/2+C],[S,a+1.05,T/2+C]],.07,.09,[0,1,0]),e.pop(),r.pop(),E.push({side:n,y0:i,y1:a});let u=Math.atan2(w,T),d=Math.hypot(w,T);h.push([S-C/2,(i+a)/2-.22*Math.cos(u),0,C/2,.22,d/2,o,-u,`ramp`]),h.push([S-C/2,a-.2,T/2+C/2,C/2,.2,C/2,o,0,`landing`])}r.color(.42,.34,.27,.6);let D=-S+C,O=(D+S)/2,k=S-D;for(let e=0;e<12;e++){let t=-S+(e+.5)*(S*2/12);r.box(O,l-.08,t,k,.16,S*2/12-.02,.01)}for(let e of[D+.2,.6,3.6])r.color(.34,.27,.2,.5),r.box(e,l-.35,0,.3,.4,S*2,.02);h.push([O,l-.25,0,k/2,.25,S,0,0,`floor`]),r.color(.5,.4,.32,.7),r.sweep([[D+.05,l+1,-S+C],[D+.05,l+1,S]],.07,.09,[1,0,0]);for(let e=0;e<=6;e++)r.box(D+.05,l+.5,-S+C+e*((S*2-C)/6),.07,1,.07,.01);h.push([D+.05,l+.5,C/2,.08,.6,S-C/2,0,0,`rail`]);for(let t=0;t<4;t++){e.push().rotY(t*Math.PI/2);for(let t of[-1,0,1])m(e,1.02),e.box(o/3*t,l+.55,u-.35,2.3,1,.3,.03),e.box(o/3*t,l+1.1,u-.35,2.5,.14,.44,.03);e.pop()}r.color(.36,.28,.2,.7);for(let e of[-2.6,2.6])r.box(0,l+6.4,e,S*2,.36,.36,.03);for(let e of[-3.2,0,3.2])r.box(e,l+6.75,0,.3,.3,5.6,.03);for(let e of[-1,1])for(let t of[-1,1])r.box(e*4.3,l+3.2,t*2.6,.34,6.4,.34,.03);let A=[];for(let[e,t]of[[-3.2,.8],[0,1.15],[3.2,.9]])i.push().translate(e,l+6.5,0).scale(t),i.color(1,1,1,1),i.lathe([[0,0],[.16,0],[.2,-.12],[.34,-.3],[.44,-.75],[.6,-1.25],[.78,-1.5],[.82,-1.62],[.7,-1.6],[.5,-1.2],[.36,-.7],[0,-.3]],24),i.lathe([[0,-1.25],[.07,-1.3],[.1,-1.55],[0,-1.62]],10),i.pop(),A.push([e,l+5.2,0]);r.color(.62,.52,.36,.7),r.sweep([[0,l+4.9,.3],[0,1.4,.3]],.035,.035,[1,0,0]),t.color(1,1,1,1),t.lathe([[o*.56,c+1.2],[o*.44,c+4.2],[.25,75.5]],8,{flat:!0}),m(e,1.1),e.lathe([[.3,75.3],[.42,75.9],[.12,76.3],[.12,78]],6),m(e,.8,.3),e.quadAuto([-S,46,-S],[S,46,-S],[S,46,S],[-S,46,S],[0,-1,0]);let ee=u,j=ee+52,te=(ee+j)/2;m(e,.99),e.box(te,23/2,0,52,23,d,.1),t.color(1,1,1,1);let M=6.75;t.quadAuto([ee-.3,23,M],[j+.4,23,M],[j+.4,33.5,0],[ee-.3,33.5,0],[0,1,1]),t.quadAuto([j+.4,23,-6.75],[ee-.3,23,-6.75],[ee-.3,33.5,0],[j+.4,33.5,0],[0,1,-1]),m(e,1),e.triOut([j,23,-12.5/2],[j,33.2,0],[j,23,d/2],[1,0,0]),m(e,1.05),t.box(te,33.6,0,52.8,.3,.4,.08);let ne=52/8;for(let r of[-1,1]){let i=r*8.85,a=r*11.45;m(e,.97),e.box(te,p/2,i,52,p,f,.1),t.color(1,1,1,1),t.quadAuto([ee,13.9,d/2*r],[j,13.9,d/2*r],[j,10.3,a+r*.5],[ee,10.3,a+r*.5],[0,1,r]),m(e,1.05),e.box(te,1,a+r*.08,52,.3,.2,.04),e.box(te,10,a+r*.1,52,.5,.3,.05);for(let t=0;t<=8;t++){let i=ee+t*ne,a=r*(11.45+1.1);for(let t=0;t<3;t++){let n=2.6-t*.5;m(e,1+t*.01),e.box(i,t*5+2.5,r*(11.45+n/2-.1),1.5,5,n,.08),m(e,1.05),e.box(i,t*5+5,r*(11.45+n/2-.1),1.7,.3,n+.2,.06)}if(e.push().translate(i,15.2,a-r*.4),m(e,1.02),e.box(0,1.4,0,1,2.8,1,.08),e.lathe([[.7,2.8],[0,6.6]],4,{flat:!0,a0:Math.PI/4,a1:Math.PI*2+Math.PI/4}),e.pop(),e.push().translate(i,17.2,r*9.15).rotX(r*.62),m(e,.98),e.box(0,0,0,.7,.9,f*1.25,.08),e.pop(),h.push([i,7.5,r*12.45,.8,7.5,1.3,0,0]),t<8){let t=i+ne/2;e.push().rotY(r>0?0:Math.PI),n.push().rotY(r>0?0:Math.PI);let a=r>0?t:-t;Zf(e,n,a,14.2,2.6,4.6,2.4,6.27,2),Zf(e,n,a,2.6,2.2,3.4,1.8,11.45+.02,2),e.pop(),n.pop()}}m(e,1.05),e.box(te,23.2,r*6.5,52.6,.9,.7,.1)}h.push([te,12,0,26,12,11.45+.1,0,0]);let N=ee+34.32,re=31.9;m(e,1),e.box(N,23/2,0,11,23,re,.1),t.color(1,1,1,1);let ie=16.349999999999998;t.quadAuto([N+6,23,-16.349999999999998],[N+6,23,ie],[N,32.5,ie],[N,32.5,-16.349999999999998],[1,1,0]),t.quadAuto([N-6,23,ie],[N-6,23,-16.349999999999998],[N,32.5,-16.349999999999998],[N,32.5,ie],[-1,1,0]);for(let t of[-1,1]){m(e,1),e.triOut([N-11/2,23,t*re/2],[N+11/2,23,t*re/2],[N,32.3,t*re/2],[0,0,t]),e.push().rotY(t>0?0:Math.PI),n.push().rotY(t>0?0:Math.PI),Zf(e,n,t>0?N:-N,5.5,4.4,9.5,3.6,15.969999999999999,4,1.07),e.pop(),n.pop();for(let n of[-1,1])m(e,1),e.box(N+n*5.8,12.5,t*16.25,1.9,25,1.9,.1),e.push().translate(N+n*5.8,25,t*16.25),e.lathe([[1.1,0],[0,5.5]],4,{flat:!0,a0:Math.PI/4,a1:Math.PI*2+Math.PI/4}),e.pop()}h.push([N,12,0,6.7,12,17.15,0,0]),t.push().translate(N,32.3,0),t.lathe([[1.5,0],[1.25,2.2],[.1,16]],8,{flat:!0}),t.pop();let ae=d/2,oe=[];for(let e=0;e<=4;e++){let t=-Math.PI/2+e/4*Math.PI;oe.push([j+Math.cos(t)*ae,Math.sin(t)*ae])}for(let r=0;r<4;r++){let i=oe[r],a=oe[r+1];m(e,.99),e.quadAuto([i[0],0,i[1]],[a[0],0,a[1]],[a[0],23,a[1]],[i[0],23,i[1]],[(i[0]+a[0])/2-j,0,(i[1]+a[1])/2]),t.color(1,1,1,1),t.triOut([i[0]+.3,23,i[1]*1.06],[a[0]+.3,23,a[1]*1.06],[j,32.9,0],[(i[0]+a[0])/2-j,1,(i[1]+a[1])/2]);let o=(i[0]+a[0])/2,s=(i[1]+a[1])/2,c=Math.atan2(s,o-j);e.push().translate(o+Math.cos(c)*2.2,0,s+Math.sin(c)*2.2).rotY(-c),m(e,.97),e.box(0,4.5,0,4.6,9,4.2,.1),t.push(),t.m.copy(e.m),t.color(1,1,1,1),t.lathe([[3.3,9],[0,12.2]],4,{flat:!0,a0:Math.PI/4,a1:Math.PI*2+Math.PI/4}),t.pop(),n.push(),n.m.copy(e.m),e.push().rotY(Math.PI/2),n.rotY(Math.PI/2),Zf(e,n,0,2.4,1.5,3.2,1.3,2.32,2),e.pop(),n.pop(),e.pop(),e.push().translate(o,0,s).rotY(-c+Math.PI/2),n.push(),n.m.copy(e.m),Zf(e,n,0,13,2,5.5,2,.05,2),n.pop(),e.pop()}return h.push([j+3,6,0,7.5,6,11.25,0,0]),{geos:{stone:e.build(),slate:t.build(),glass:n.build(),wood:r.build(),metal:i.build()},colliders:h,bells:A,stairs:E}}function $f(e,t){let{geos:n,colliders:r,bells:i}=Qf(),a={stone:zd({set:`castle_wall_slates`,scale:.2,color:[.54,.5,.44],nrm:1,name:`cathedral-stone`,streaks:.9,dust:.2}),slate:zd({set:`roof_slates_02`,scale:.3,color:[.2,.215,.24],nrm:1,name:`cathedral-slate`,streaks:.5,dust:0,spec:1}),glass:rf({color:[.035,.05,.09],rough:.12,name:`cathedral-glass`}),wood:lf({set:`dark_wooden_planks`,color:[.62,.52,.42],scale:.9,name:`town-wood`}),metal:af()},o=new On;o.name=`cathedral`;for(let e of Object.keys(n)){let t=new G(n[e],a[e]);t.name=`cathedral-`+e,o.add(t)}let s=sd(Jf.pos[0],Jf.pos[2])-.05;o.position.set(Jf.pos[0],s,Jf.pos[2]),o.rotation.y=Jf.rot,o.updateMatrixWorld(!0),e.add(o);let c=Math.cos(Jf.rot),l=Math.sin(Jf.rot),u=(e,t,n)=>[Jf.pos[0]+e*c+n*l,s+t,Jf.pos[2]-e*l+n*c];if(t)for(let e of r){let n=e[6]||0,r=Math.cos(n),i=Math.sin(n),a=e[0]*r+e[2]*i,o=-e[0]*i+e[2]*r,s=u(a,e[1],o);t.addBox(s[0],s[1],s[2],e[3],e[4],e[5],Jf.rot+n,e[7]||0,e[8]||`cathedral`)}let d=Jf.T/2-Jf.wall,f=1.7,p=d*2-f*2,m=d-f/2,h=[u(0,0,-8.2),u(0,0,-4.2),u(m,0,-p/2-.2)];for(let e=0;e<7;e++){let t=-(e%4)*Math.PI/2,n=Math.cos(t),r=Math.sin(t),i=(e,t)=>[e*n+t*r,-e*r+t*n],a=i(m,p/2+.3),o=i(m,p/2+f/2);h.push(u(a[0],0,a[1]),u(o[0],0,o[1]))}return h.push(u(-d+f+1.2,0,-d+1),u(1.2,0,1.6)),{group:o,mats:a,toWorld:u,gy:s,bells:i.map(e=>u(...e)),stairPts:h}}var ep={spawn:[-30,0,-568.5],fountain:[-30,-648],northGate:[0,-758],keeper:[-9.5,-616.5],lamps:[[-41,0,-565.5],[44,0,-676],[-74,0,-720]]};function tp(){let e=au(`cobblestone_floor_08`),t=au(`monastery_stone_floor`);return Vu({name:`paving`,vertexColors:!0,uniforms:{tCbD:{value:e.diff},tCbN:{value:e.nor},tCbA:{value:e.arm},tSlD:{value:t.diff},tSlN:{value:t.nor},tSlA:{value:t.arm},uAvgCb:{value:new H(...Uu.cobblestone_floor_08)},uAvgSl:{value:new H(...Uu.monastery_stone_floor)}},fragPars:Hu(`tCb`)+Hu(`tSl`)+`uniform vec3 uAvgCb, uAvgSl;
`,surface:`
  float slab = vColor.r, dirt = vColor.g, wet = vColor.b, vao = vColor.a;
  vec2 uvC = P.xz * 0.36, uvS = P.xz * 0.19;
  vec3 dC = texture(tCbD, uvC).rgb / uAvgCb; vec3 nC = texture(tCbN, uvC).xyz * 2.0 - 1.0; vec3 aC = texture(tCbA, uvC).rgb;
  vec3 dS = texture(tSlD, uvS).rgb / uAvgSl; vec3 nS = texture(tSlN, uvS).xyz * 2.0 - 1.0; vec3 aS = texture(tSlA, uvS).rgb;
  vec4 mac = noiseTex(P.xz * 0.021), mac2 = noiseTex(P.xz * 0.17);
  float k = smoothstep(0.4, 0.6, slab + (mac2.r - 0.5) * 0.25);
  vec3 d = mix(dC, dS, k); vec3 tn = mix(nC, nS, k); vec3 arm = mix(aC, aS, k);
  vec3 base = mix(vec3(0.46, 0.40, 0.33), vec3(0.50, 0.45, 0.385), k) * (0.85 + 0.3 * mac.r);
  // worn pale tracks where people walk, sand drifted into the joints and against the walls
  float track = smoothstep(0.52, 0.7, mac.g);
  vec3 alb = base * d * (1.0 + 0.16 * track);
  // old stains and damp patches, so a big square never reads as one flat sheet
  float stain = smoothstep(0.55, 0.78, noiseTex(P.xz * 0.043 + 7.3).g);
  float damp = smoothstep(0.62, 0.82, noiseTex(P.zx * 0.027 + 3.1).r) * (1.0 - slab * 0.5);
  alb *= mix(1.0, 0.76, stain) * mix(1.0, 0.8, damp);
  float sand = sat(dirt * 1.3 + smoothstep(0.55, 0.8, mac.b) * 0.35) * (1.0 - arm.r * 0.55 + 0.25);
  alb = mix(alb, vec3(0.60, 0.50, 0.38) * (0.85 + 0.3 * mac2.g), sat(sand) * 0.75);
  alb *= mix(1.0, 0.55, wet);
  s.albedo = alb;
  s.N = normalize(vec3(tn.x * (1.0 - sat(sand) * 0.7), 1.0, -tn.y * (1.0 - sat(sand) * 0.7)) * vec3(1.1, 1.0, 1.1));
  s.rough = mix(mix(arm.g, 0.45, damp * 0.6), 0.25, wet * 0.8); s.ao = arm.r * vao; s.spec = mix(0.6, 1.4, wet);
`})}function np(e){let t=1.5,n=new Float32Array(61236),r=new Uint8Array(81648),i=[],[a,o]=ep.fountain;for(let e=0;e<=161;e++)for(let i=0;i<=125;i++){let s=-94+i*t,c=-792+e*t,l=i+e*126;n[l*3]=s,n[l*3+1]=sd(s,c)+.06+.02*Pl(s*.7,c*.7),n[l*3+2]=c;let u=Y(-680,-684,c),d=(1-Y(9,12,Math.abs(c+720)))*u,f=Math.max(u*.75,d),p=Hl(Math.max(Y(52,58,Math.abs(s))*(1-u),Y(74,82,Math.abs(s))*u)*.8+.25*(Pl(s/23,c/23)*.5+.5)),m=(1-Y(3.6,6.5,Math.hypot(s-a,c-o)))*.8;r[l*4]=f*255,r[l*4+1]=p*255,r[l*4+2]=m*255,r[l*4+3]=255}for(let e=0;e<161;e++)for(let t=0;t<125;t++){let n=t+e*126,r=n+1,a=n+125+1,o=a+1;i.push(n,a,r,r,a,o)}let s=new Ar;s.setAttribute(`position`,new hr(n,3)),s.setAttribute(`color`,new hr(r,4,!0)),s.setIndex(i),s.computeVertexNormals();let c=new G(s,tp());return c.name=`quarter-ground`,c.userData.noShadow=!0,e.add(c),c}function rp(e,t,n,r,{w:i=7,h:a=7.5,th:o=2.2,H:s=11,doors:c=!0}){e.begin(t,sd(t,n),n,r);let l=e.g.stone,u=e.g.wood,d=e.g.iron,f=3.2;for(let t of[-1,1])l.color(1,.98,.95,.9),l.box(t*(i/2+f/2),s/2,0,f,s,o+.6,.06),l.color(1.05,1.02,.98,1),l.box(t*(i/2+f/2),1,0,3.5,.3,o+.9,.04),e.colBox(t*(i/2+f/2),s/2,0,f/2,s/2,o/2+.3);for(let[t,n]of[[o/2,1],[-o/2,-1]])e.g.stone.push(),n<0&&e.g.stone.rotY(Math.PI),e.panel(l,-i/2,i/2,0,s,o/2,{hx0:-i/2+.02,hx1:i/2-.02,hy0:0,hy1:a-2.6,arch:2.6},[1,.98,.95],o),e.g.stone.pop();l.color(1.06,1.03,.98,1),l.sweep(e.archPath(0,i/2+.05,a-2.6,2.65,o/2+.05),.5,.4),l.sweep(e.archPath(0,i/2+.05,a-2.6,2.65,-o/2-.05),.5,.4),l.color(1.03,1,.96,1),l.box(0,s+.15,0,i+f*2+.4,.3,o+1,.05);for(let e=-4;e<=4;e++)l.box(e*1.5,s+.75,o/2+.2,.9,.9,.5,.04);if(c){let t=Ol(7);for(let e of[-1,1]){for(let n=0;n<7;n++){let r=.8+t()*.3;u.color(.36*r,.27*r,.19*r,.85),u.box(e*(.25+n*.5),(a-1.2)/2,0,.48,a-1.2,.14,.01)}d.color(1,1,1,1);for(let t of[.8,2.6,4.4])d.box(e*1.75,t,.09,3.3,.12,.03,.01)}e.colBox(0,a/2,0,i/2,a/2,.3)}e.end()}function ip(e,t,n){let[r,i]=ep.fountain,a=sd(r,i)+.05;new Qu().g;let o=new X;o.color(1,.98,.95,1),o.lathe([[4.6,0],[4.6,.22],[4.1,.22],[4.1,.44],[3.5,.44],[3.5,1.15],[3.62,1.2],[3.62,1.32],[3.2,1.32],[3.2,.5],[0,.5]],8,{flat:!0,a0:Math.PI/8,a1:Math.PI*2+Math.PI/8}),o.lathe([[.7,.5],[.62,.7],[.4,.9],[.36,2.1],[.5,2.25],[1.5,2.5],[1.62,2.62],[1.5,2.66],[.6,2.46],[.3,2.5],[.26,3.4],[.36,3.5],[.9,3.66],[.98,3.76],[.9,3.8],[.3,3.66],[.16,3.7],[.12,4.2],[.2,4.34],[0,4.5]],20);let s=new G(o.build(),n.stone);s.position.set(r,a,i),s.updateMatrixWorld(!0),e.add(s),t.addCylinder(r,i,3.65,a,a+1.35),t.addCylinder(r,i,4.65,a,a+.2);let c=$d({shallow:[.22,.42,.4],deep:[.03,.12,.13],clarity:1.3,ripple:.8,foam:.3,name:`fountain-water`}),l=(t,n)=>{let o=new ji(t,28);o.rotateX(-Math.PI/2);let s=ef(new G(o,c));return s.position.set(r,a+n,i),s.updateMatrixWorld(!0),e.add(s),s};return l(3.22,1.12),l(1.48,2.6),l(.88,3.76),{pos:new H(r,a+1.1,i),y0:a}}function ap(e,t,n,r,i,a,o){let{wood:s,cloth:c,clayG:l,fruit:u}=e;for(let e of[s,c,l,u])e.push().translate(n,a,r).rotY(i);let d=3+t()*.8,f=1.5;s.color(.5,.42,.34,.9);for(let e of[-1,1])for(let t of[-1,1])s.box(e*d/2,t>0?1.25:1.5,t*f/2,.09,t>0?2.5:3,.09,.01);s.box(0,.9,0,d+.1,.07,1.6,.012),s.box(0,.45,-.72,d,.8,.04,.008);for(let e of[-1,1])s.box(e*d/2,.5,0,.05,.05,f,.008);let p=[[.55,.16,.1],[.2,.3,.36],[.6,.45,.2],[.3,.36,.22],[.62,.3,.16]][t()*5|0];for(let e=0;e<5;e++)for(let t=0;t<8;t++){let n=(e,t)=>{let n=Math.sin(e*Math.PI)*Math.sin(t*Math.PI)*.16;return[(e-.5)*(d+.5),3.02-t*.55-n,(t-.5)*2.4+.25]},r=n(t/8,e/5),i=n((t+1)/8,e/5),a=n((t+1)/8,(e+1)/5),o=n(t/8,(e+1)/5);c.color(p[0],p[1],p[2],1);let s=(e,t)=>1-.6*Math.sin(e*Math.PI)*Math.sin(t*Math.PI),l=c.v(r[0],r[1],r[2],0,1,.2,t/8*6,s(t/8,e/5)),u=c.v(i[0],i[1],i[2],0,1,.2,(t+1)/8*6,s((t+1)/8,e/5)),f=c.v(a[0],a[1],a[2],0,1,.2,(t+1)/8*6,s((t+1)/8,(e+1)/5)),m=c.v(o[0],o[1],o[2],0,1,.2,t/8*6,s(t/8,(e+1)/5));c.triAuto(l,u,f),c.triAuto(l,f,m)}let m=t()*3|0;for(let e=0;e<5;e++){let n=-d/2+.4+e*((d-.8)/4),r=(t()-.5)*.5;if(m===0||m===2&&e%2){s.color(.62,.5,.33,1),s.push().translate(n,.94,r),s.lathe([[0,0],[.2,0],[.27,.16],[.25,.17],[.19,.03],[0,.03]],12),s.pop();let e=[[.55,.12,.08],[.6,.42,.1],[.3,.12,.26],[.42,.46,.14]][t()*4|0];for(let i=0;i<9;i++){let i=t()*6.28,a=t()*.16;u.color(e[0]*(.8+t()*.4),e[1]*(.8+t()*.4),e[2],1),u.push().translate(n+Math.cos(i)*a,1.03+t()*.07,r+Math.sin(i)*a),u.lathe([[0,-.05],[.04,-.03],[.055,0],[.04,.035],[0,.05]],7),u.pop()}}else if(m===1){l.color(.9+t()*.2,.9,.9,1),l.push().translate(n,.935,r).scale(.55+t()*.3);let i=[[[0,0],[.12,0],[.2,.08],[.27,.28],[.26,.45],[.18,.6],[.11,.66],[.12,.72],[.15,.75],[.13,.76],[.09,.7]],[[0,0],[.16,0],[.24,.04],[.3,.14],[.3,.2],[.27,.22],[.25,.19],[.2,.1],[0,.07]]][e%2];l.lathe(i,14),l.pop()}else{let i=[[.5,.2,.15],[.25,.3,.4],[.7,.6,.4]][t()*3|0];c.color(i[0],i[1],i[2],1),c.uvMap(1,0,0,1),c.box(n,1+e%2*.05,r,.5,.14,.34,.03),c.uvMap()}}s.color(.55,.45,.33,.85),s.box(d/2+.5,.26,.2,.6,.52,.6,.015),s.box(d/2+.45,.72,.15,.5,.4,.5,.015),c.uvMap(1,0,0,1),c.color(.6,.52,.38,1),c.push().translate(-d/2-.45,.28,.1),c.lathe([[0,0],[.24,.02],[.3,.2],[.26,.42],[.14,.52],[.16,.6],[0,.56]],9),c.pop(),c.uvMap();for(let e of[s,c,l,u])e.pop();let h=Math.cos(i),g=Math.sin(i);o.addBox(n,a+.6,r,d/2+.1,.6,.85,i),o.addBox(n+(d/2+.5)*h,a+.4,r-(d/2+.5)*g,.4,.5,.4,i)}function op(e,t,n,r,i){let{wood:a,cloth:o}=e,[s,c]=ep.fountain,l=(e,t)=>n(e,t)+.06;for(let e of[1.57,2.36,3.14,3.93,4.71]){let t=s+Math.cos(e)*7.3,n=c+Math.sin(e)*7.3,i=l(t,n),o=-e+Math.PI/2;a.push().translate(t,i,n).rotY(o),a.color(.46,.38,.3,.9),a.box(0,.46,0,1.9,.07,.46,.012),a.box(0,.86,-.21,1.9,.3,.05,.012);for(let e of[-.8,.8])a.box(e,.23,0,.08,.46,.42,.01),a.box(e,.7,-.21,.07,.6,.06,.01);a.pop(),r.addBox(t,i+.45,n,.95,.5,.26,o)}for(let[e,n,i]of[[-47,-650,.6],[-12,-684,2.2],[30,-690,1],[46,-700,-.4],[-40,-694,.2],[20,-652,2.6],[-49,-612,.4],[58,-742,2]]){let s=l(e,n);a.push().translate(e,s,n).rotY(i),a.color(.5,.4,.3,.9),a.box(0,.72,0,1.7,.08,.95,.012);for(let e of[-.45,.45])a.box(0,.92,e,1.7,.34,.05,.01),a.box(1.45,.78,e*.78,1.3,.06,.06,.01);a.box(-.83,.92,0,.05,.34,.9,.01),a.box(.75,.36,0,.07,.72,.07,.01);for(let e of[-.56,.56])a.push().translate(-.25,.44,e).rotX(Math.PI/2),a.color(.34,.27,.2,1),a.lathe([[0,-.035],[.06,-.05],[.07,-.035],[.4,-.035],[.44,-.02],[.44,.02],[.4,.035],[.07,.035],[.06,.05],[0,.035]],16),a.pop();o.uvMap(1,0,0,1);for(let e=0;e<3;e++){let n=.5+t()*.15;o.color(n,n*.86,n*.62,1),o.push().translate(-.5+e*.5,.78,(t()-.5)*.3).rotY(t()*3),o.lathe([[0,0],[.22,.02],[.28,.18],[.24,.38],[.13,.47],[.15,.54],[0,.5]],9),o.pop()}o.uvMap(),a.pop(),r.addBox(e,s+.6,n,1,.65,.6,i)}for(let[e,n]of[[-50,-642],[-50,-672],[-34,-688],[12,-692],[48,-680],[-20,-704],[22,-706],[-44,-732],[44,-744],[62,-700],[-62,-690],[14,-640]]){let i=l(e,n),o=2+(t()*3|0),s=0;a.push().translate(e,i,n).rotY(t()*3);for(let e=0;e<o;e++){let n=.75-e*.1+t()*.1,r=.5+t()*.12;a.color(r,r*.84,r*.64,.85),a.push().translate((t()-.5)*.16,s+n*.4,(t()-.5)*.16).rotY(t()*.5),a.box(0,0,0,n,n*.8,n,.02);for(let e of[-1,1])a.box(0,e*n*.3,n/2+.008,n+.02,.07,.02,.004),a.box(0,e*n*.3,-n/2-.008,n+.02,.07,.02,.004);a.pop(),s+=n*.8}t()<.6&&(a.color(.52,.44,.33,.85),a.box(.75,.22,.2,.55,.44,.55,.02)),a.pop(),r.addBox(e,i+.6,n,.75,.7,.6,0)}let u=[[.58,.17,.1],[.74,.6,.32],[.2,.31,.38],[.66,.36,.16],[.78,.74,.66]],d=[s,i.y0+4.6,c];for(let e of[.35,1.92,3.5,5.07]){let t=s+Math.cos(e)*14.5,n=c+Math.sin(e)*14.5,i=l(t,n);a.color(.4,.33,.26,.9),a.push().translate(t,i,n),a.lathe([[.1,0],[.085,2.5],[.06,5.6],[.09,5.66],[0,5.74]],8),a.box(0,.12,0,.5,.24,.5,.02),a.pop(),r.addCylinder(t,n,.14,i,i+5.6);let f=[t,i+5.5,n],p=Math.hypot(d[0]-f[0],d[2]-f[2]),m=(d[0]-f[0])/p,h=(d[2]-f[2])/p,g=e=>[f[0]+(d[0]-f[0])*e,f[1]+(d[1]-f[1])*e-Math.sin(e*Math.PI)*1.1,f[2]+(d[2]-f[2])*e];for(let e=0;e<26;e++){let t=g((e+.12)/26),n=g((e+.88)/26),r=g((e+.5)/26),i=u[e%u.length];o.color(i[0],i[1],i[2],1);let a=o.v(t[0],t[1],t[2],-h,.25,m,0,1),s=o.v(n[0],n[1],n[2],-h,.25,m,1,1),c=o.v(r[0],r[1]-.46,r[2],-h,.25,m,.5,0);o.triAuto(a,s,c)}a.color(.3,.26,.2,1);for(let e=0;e<26;e++){let t=g(e/26),n=g((e+1)/26),r=(t[0]+n[0])/2,i=(t[1]+n[1])/2,o=(t[2]+n[2])/2,s=Math.hypot(n[0]-t[0],n[1]-t[1],n[2]-t[2]);a.push().translate(r,i,o).rotY(Math.atan2(-(n[2]-t[2]),n[0]-t[0])).rotZ(Math.asin((n[1]-t[1])/s)),a.box(0,0,0,s,.018,.018,0),a.pop()}}}function sp(e,t){let n=t.col,r=t.lights,i=t.sprites,a=new On;a.name=`quarter`,e.add(a);let o={lamps:[],group:a},s=qf();o.mats=s,np(a);let c=$f(e,n);o.cath=c;let l=new Kf(n),u=(e,t)=>sd(e,t);{let e=-566;[12,10,13,11,9,14,11,12,10,14].forEach((t,n)=>{l.house({x:-58,z:e,rot:Math.PI/2,y:u(-58,e-t/2),w:t,d:10,floors:[3,3,3,4,2,3,3,4,3,3][n],seed:100+n,portico:n===2||n===5||n===8,jetty:n===1||n===6,timber:n===1||n===6||n===3,roofAxis:n===4||n===7?`z`:`x`,quoins:n%3==0,boxes:!0,awning:n%2==0,sign:n%3==1,dormer:n%4==0}),e-=t}),l.wall(-58,-682,-82,-682,6.5,1,u(-70,-682))}{let e=-682;[12,11,13,8].forEach((t,n)=>{l.house({x:58,z:e,rot:-Math.PI/2,y:u(58,e+t/2),w:t,d:10,floors:[3,4,3,2][n],seed:200+n,portico:n===2,jetty:n===1,timber:n===1,roofAxis:n===3?`z`:`x`,quoins:n===0,boxes:!0,awning:!0,sign:n===0,dormer:n===0}),e+=t}),l.wall(58,-638,63,-636,7,1,u(60,-637),{plain:!0}),l.wall(82,-682,58,-682,6.5,1,u(70,-682))}l.house({x:-8,z:-562,rot:Math.PI,y:u(-12,-562),w:9,d:9,floors:3,seed:301,quoins:!0,boxes:!0,sign:!0}),l.house({x:-17,z:-562,rot:Math.PI,y:u(-21,-562),w:9,d:9,floors:2,seed:302,timber:!0,jetty:!0,roofAxis:`z`}),rp(l,-30,-562.6,Math.PI,{w:4.4,h:6.6,H:10,th:2.4}),l.house({x:-35.4,z:-562,rot:Math.PI,y:u(-41,-562),w:11,d:9,floors:3,seed:303,awning:!0,boxes:!0}),l.house({x:-46.4,z:-562,rot:Math.PI,y:u(-52,-562),w:11.6,d:9,floors:3,seed:304,quoins:!0,dormer:!0}),l.wall(-8,-562,-6.6,-594.6,6,1,u(-7,-578)),l.wall(-82,-758,-82,-682,6.5,1.1,u(-82,-720)),l.wall(82,-682,82,-758,6.5,1.1,u(82,-720)),l.wall(-9.5,-758,-82,-758,6.5,1.1,u(-45,-758)),l.wall(82,-758,9.5,-758,6.5,1.1,u(45,-758)),rp(l,ep.northGate[0],ep.northGate[1],0,{w:6.4,h:8.2,H:12.5,th:2.6,doors:!1}),a.add(l.build(s)),o.town=l;for(let e of Vd)n.addBox(e.x,1.1,e.z,4.75,1.3,4.75,e.seed*.7%6.28),n.addCylinder(e.x,e.z,3.9,0,60);{let e=new X,r=Ol(55),i=new H(.34,0,.94).normalize(),o=new H(31.5,0,-681.5);for(let t=0;t<9;t++){let a=4.4+r()*.5,s=2.95-t*.045,c=Math.atan2(-i.z,i.x)+(r()-.5)*(t>2?.35:.06),l=.25+r()*.35,d=o.clone().addScaledVector(i,a/2+(t>2?r()*1.5:0));d.y=u(d.x,d.z)+s-l,d.x+=(r()-.5)*(t>2?2.2:.2),e.push().translate(d.x,d.y,d.z).rotY(c).rotZ(Math.PI/2+(r()-.5)*.05);let f=[];for(let t of[-a/2,a/2]){let n=[];for(let i=0;i<=48;i++){let a=i/48*Math.PI*2,o=i%2?.955:1,c=.92+.1*r();e.color(c,c*.985,c*.96,i%2?.8:1),n.push(e.v(Math.cos(a)*s*o,t,Math.sin(a)*s*o,Math.cos(a),0,Math.sin(a)))}f.push(n)}for(let t=0;t<48;t++)e.quadI(f[0][t],f[1][t],f[1][t+1],f[0][t+1]);for(let[t,n]of[[-a/2,-1],[a/2,1]]){e.color(.9,.88,.85,.9);let r=e.v(0,t,0,0,n,0),i=-1;for(let a=0;a<=48;a++){let o=a/48*Math.PI*2,c=e.v(Math.cos(o)*s*.96,t,Math.sin(o)*s*.96,0,n,0);i>=0&&e.triAuto(r,i,c),i=c}}e.pop();let p=Math.cos(c)*a/2,m=-Math.sin(c)*a/2;n.addCapsule(d.x-p,d.y,d.z-m,d.x+p,d.y,d.z+m,s),o.addScaledVector(i,a+(t>2?.6+r()*1.4:.05))}let s=new G(e.build(),t.columnMat);s.name=`fallen-column`,a.add(s)}o.fountain=ip(a,n,s);{let e={wood:new X,cloth:new X,clayG:new X,fruit:new X},t=Ol(77);for(let[r,i,a]of[[-44,-628,1.2],[-40,-636,1.25],[-48,-660,1.9],[-16,-664,3.3],[-6,-670,3.14],[8,-668,2.9],[22,-672,3.3],[40,-664,4],[-52,-706,1.57],[-52,-716,1.57],[-36,-741,.2],[18,-741,-.1],[52,-728,-1.57],[52,-712,-1.57]])ap(e,t,r,i,a,u(r,i)+.06,n);for(let r=0;r<40;r++){let r=t()<.5?-1:1,i,a;if(t()<.55){if(i=r*(55.2-t()*1.2),a=-572-t()*104,r>0&&a>-640)continue}else i=r*(79.5-t()*1.5),a=-686-t()*68;let o=u(i,a)+.06;if(t()<.5){e.wood.color(.5,.4,.3,.9),e.wood.push().translate(i,o,a),e.wood.lathe([[0,0],[.26,0],[.31,.2],[.33,.45],[.31,.7],[.26,.9],[0,.9]],14),e.wood.color(.2,.19,.18,1);for(let t of[.12,.45,.78])e.wood.lathe([[.315+(t===.45?.02:0),t-.025],[.315+(t===.45?.02:0),t+.025]],14);e.wood.pop(),n.addCylinder(i,a,.36,o,o+.95)}else e.clayG.color(1,1,1,1),e.clayG.push().translate(i,o,a).scale(.8+t()*.6),e.clayG.lathe([[0,0],[.14,0],[.22,.1],[.3,.4],[.32,.7],[.27,.95],[.16,1.1],[.13,1.18],[.17,1.24],[.15,1.25],[.1,1.15]],14),e.clayG.pop(),n.addCylinder(i,a,.36,o,o+1.2)}op(e,t,u,n,o.fountain),a.add(new G(e.wood.build(),s.wood),new G(e.cloth.build(),s.cloth),new G(e.clayG.build(),sf()),new G(e.fruit.build(),rf({color:[1,1,1],rough:.5,name:`fruit`})))}{let e=new X,t=Ol(3);for(let n=0;n<6;n++){let r=.8+t()*.3;e.color(.36*r,.27*r,.19*r,.85),e.box(.17+n*.33,1.7,0,.32,3.4,.09,.008)}let r=new X;r.color(1,1,1,1);for(let e of[.5,1.7,2.9])r.box(1,e,.06,1.9,.07,.02,.005);r.push().translate(1.75,1.5,.08),r.lathe([[.06,-.012],[.085,0],[.06,.012],[.035,0],[.06,-.012]],12),r.pop();let i=new On,l=c.toWorld(1,0,-6.25);i.position.set(l[0],l[1],l[2]),i.rotation.y=Jf.rot+Math.PI,i.add(new G(e.build(),s.wood),new G(r.build(),of())),a.add(i),i.updateMatrixWorld(!0);let u=c.toWorld(0,1.7,-6.25);o.towerDoor={pivot:i,baseRot:Jf.rot+Math.PI,collider:n.addBox(u[0],u[1],u[2],1.05,1.8,.25,Jf.rot),pos:new H(...c.toWorld(0,1.5,-7.6))}}{let e=pf(),r=c.toWorld(2.7,Jf.belfryY,.5),i=new G(e.base,t.carved);i.position.set(r[0],r[1]-.02,r[2]),i.rotation.y=Jf.rot,i.updateMatrixWorld(!0),a.add(i),n.addCylinder(r[0],r[2],.72,r[1],r[1]+2.3);let s=new On;s.position.set(r[0],r[1]+.9,r[2]),a.add(s),s.add(new G(e.yoke,af()));let l=new On;l.position.set(0,1.12,0),s.add(l),l.add(new G(e.ring,af()));let u=new G(e.disc,cf());l.add(u);let d=new X;d.color(.46,.38,.28,1),d.uvMap(1,0,0,1),d.push().rotX(Math.PI/2),d.lathe([[0,.1],[.4,.09],[.62,.04],[.66,-.06],[.6,-.1],[0,-.1]],20),d.pop(),d.lathe([[.6,-.55],[.64,-.2],[.6,0]],16),d.uvMap();let f=new G(d.build(),uf({sway:0}));l.add(f),s.rotation.y=Jf.rot+.6,l.rotation.x=-.25,s.updateMatrixWorld(!0),o.mirror={yaw:s,pitch:l,disc:u,cover:f,center:new H(r[0],r[1]+2.02,r[2])}}for(let[e,t,n]of[[0,4.2,0],[0,14,0],[0,25,0],[0,34,0]]){let a=c.toWorld(e,t,n);r.add(a,[1,.62,.3],13,3.2,.6),i.add(a,.16,[1,.7,.35],2,1.4)}o.bellPos=new H(...c.toWorld(0,Jf.belfryY+1.5,.3));let d=ff(1);return ep.lamps.forEach((e,s)=>{let c=u(e[0],e[2])+.06,l=new G(d.stone,t.carved),f=new G(d.metal,af());for(let t of[l,f])t.position.set(e[0],c-.03,e[2]),t.updateMatrixWorld(!0),a.add(t);n.addCylinder(e[0],e[2],.3,c,c+1.2);let p=c+d.flameY,m=r.add([e[0],p+.12,e[2]],[1,.56,.2],9,4.5,1);m.on=!1,m.level=0,o.lamps.push({pos:new H(e[0],c+1,e[2]),light:m,flame:i.add([e[0],p-.02,e[2]],.085,[1,1,1],0,0),glow:i.add([e[0],p+.05,e[2]],.5,[1,.5,.16],2,0),lit:!1})}),o.gatePos=new H(ep.northGate[0],1.5,ep.northGate[1]+2.5),o}function cp(e,t){let n=new X,r=[.32+t()*.2,.26+t()*.14,.2+t()*.1],i=[r[0]*.55+.1*t(),r[1]*.55+.1*t(),r[2]*.6+.1*t()],a=e===1?1.25:1.68+t()*.1,o=e===2?.32:.05;n.uvMap(1,0,0,0),n.color(r[0],r[1],r[2],.8);let s=e===1?.5:.95,c=(e,t,n)=>[e,t,n],l=(e,t=14)=>{let r=[];for(let[i,a,o]of e){let e=[];for(let r=0;r<=t;r++){let s=r/t*Math.PI*2,c=1+.08*Math.sin(s*3+a*5);e.push(n.v(Math.cos(s)*i*c,a,Math.sin(s)*i*.82*c,Math.cos(s),.15,Math.sin(s),r/t,0)),n.uv[n.uv.length-1]=o}r.push(e)}for(let e=0;e<r.length-1;e++)for(let i=0;i<t;i++)n.quadI(r[e][i],r[e+1][i],r[e+1][i+1],r[e][i+1])};e===1?(l([c(.34,0,.5),c(.36,.25,.3),c(.3,.5,.1)]),n.color(r[0],r[1],r[2],.9),n.box(0,.42,.22,.5,.2,.5,.08)):l([c(.33,.02,1),c(.3,.35,.6),c(.24,.7,.25),c(.22,s,0)]),n.push().translate(0,s,0).rotX(o),n.color(i[0],i[1],i[2],.9),l([c(.23,0,0),c(.26,.2,.1),c(.28,.42,.05),c(.2,.55,0),c(.11,.62,0)]);let u=a-s-.16;n.push().translate(0,u,.02),l([c(.13,-.12,0),c(.165,-.02,0),c(.17,.08,0),c(.12,.17,0),c(0,.2,0)],12),n.color(.02,.018,.016,.3),n.box(0,0,.085,.17,.2,.12,.04),n.pop(),n.color(i[0]*1.1,i[1]*1.1,i[2]*1.1,.9);for(let t of[-1,1])n.push().translate(t*.27,.42,.04).rotZ(t*.12).rotX(e===0?-.15:-.9),n.box(0,-.24,0,.13,.52,.15,.05),n.color(.42,.3,.22,1),n.box(0,-.53,0,.07,.09,.08,.03),n.color(i[0]*1.1,i[1]*1.1,i[2]*1.1,.9),n.pop();return n.pop(),n.uvMap(),n.build()}function lp(){return Vu({name:`robe`,vertexColors:!0,side:2,vertexPars:`uniform float uWalk; uniform float uSeed;
`,uniforms:{uWalk:{value:0},uSeed:{value:0}},vertexLocal:`
  float sw = uv.y;
  float t = uTime * (1.2 + uWalk * 4.5) + uSeed;
  transformed.x += sw * (0.03 + 0.05 * uWalk) * sin(t + position.y * 3.0);
  transformed.z += sw * (0.02 + 0.09 * uWalk) * sin(t * 2.0 + position.x * 5.0);
  // slow breathing / swaying of the whole figure
  transformed.x += 0.012 * sin(uTime * 0.6 + uSeed) * smoothstep(0.3, 1.6, position.y);
`,surface:`
  vec4 n = noiseTex(P.xy * 3.1 + P.z * 2.3), n2 = noiseTex(P.zy * 11.0);
  s.albedo = vColor.rgb * (0.75 + 0.5 * n.r) * (0.92 + 0.16 * step(0.5, fract(P.y * 60.0)));
  s.rough = 0.95; s.sss = 0.12; s.ao = vColor.a; s.spec = 0.3;
  s.N = normalize(Ng + (n2.xyz - 0.5) * 0.16);
`})}var up=class{constructor(e){this.list=[],this.scene=e,this.rnd=Ol(404)}add(e){let t=lp();t.uniforms.uSeed.value=this.rnd()*20,t.userData.depthMat?.uniforms&&(t.userData.depthMat.uniforms.uSeed=t.uniforms.uSeed,t.userData.depthMat.uniforms.uWalk=t.uniforms.uWalk);let n=new G(cp(e.kind||0,this.rnd),t);n.position.set(...e.pos),n.rotation.y=e.yaw||0,n.name=`npc-`+(e.id||this.list.length),this.scene.add(n);let r={...e,mesh:n,mat:t,seg:0,t:this.rnd()*10,pause:0};return this.list.push(r),r}update(e,t){for(let n of this.list){if(n.t+=e,!n.path){n.mesh.rotation.y=(n.yaw||0)+Math.sin(n.t*.31+n.mesh.id)*.06;continue}if(n.pause>0){n.pause-=e,n.mat.uniforms.uWalk.value+=(0-n.mat.uniforms.uWalk.value)*Math.min(1,e*3);continue}n.path[n.seg];let r=n.path[(n.seg+1)%n.path.length],i=n.mesh.position,a=r[0]-i.x,o=r[1]-i.z,s=Math.hypot(a,o),c=n.speed||.75;if(s<.25){n.seg=(n.seg+1)%n.path.length,n.pause=r[2]||0;continue}i.x+=a/s*c*e,i.z+=o/s*c*e,i.y=t(i.x,i.z)+.05+Math.abs(Math.sin(n.t*3.3))*.018;let l=Math.atan2(a,o)-n.mesh.rotation.y;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;n.mesh.rotation.y+=l*Math.min(1,e*2.5),n.mat.uniforms.uWalk.value+=(1-n.mat.uniforms.uWalk.value)*Math.min(1,e*3)}}};function dp(){let e=new X;e.uvMap(1,0,0,0),e.color(1,1,1,1),e.push().rotX(Math.PI/2),e.lathe([[0,-.11],[.035,-.09],[.055,-.02],[.05,.06],[.025,.12],[0,.14]],8),e.pop(),e.push().translate(0,.045,.1),e.lathe([[0,-.03],[.026,-.015],[.03,.01],[.018,.03],[0,.035]],7),e.pop(),e.color(.8,.7,.4,1),e.box(0,.045,.14,.008,.008,.03,0),e.color(.75,.75,.75,1),e.quad([-.03,0,-.1],[.03,0,-.1],[.045,.005,-.2],[-.045,.005,-.2]);for(let t of[-1,1]){let n=e.v(t*.045,.02,.05,0,1,0,0,0),r=e.v(t*.045,.02,-.07,0,1,0,0,0),i=e.v(t*.06,.015,-.12,0,1,0,0,0),a=e.v(t*.06,.02,.02,0,1,0,0,0);e.uv[n*2]=t,e.uv[r*2]=t,e.uv[i*2]=t,e.uv[a*2]=t,e.uv[n*2+1]=0,e.uv[r*2+1]=0,e.uv[i*2+1]=1,e.uv[a*2+1]=1,e.tri(n,r,i),e.tri(n,i,a),e.tri(n,i,r),e.tri(n,a,i)}return e.build()}var fp=class{constructor(e,t=64){this.count=t;let n=dp();this.aState=new ri(new Float32Array(t*2),2),n.setAttribute(`aState`,this.aState),this.mat=Vu({name:`bird`,vertexColors:!0,side:2,vertexPars:`attribute vec2 aState;
`,vertexLocal:`
  float side = uv.x, tip = uv.y, fl = aState.x;
  // wings open sideways and beat when flying
  float beat = aState.y > 1.5 ? 0.12 * sin(uTime * 1.3 + aState.y * 3.0) : sin(uTime * 26.0 + aState.y * 6.28);
  transformed.x += side * tip * fl * 0.2;
  transformed.y += tip * fl * (0.02 + beat * 0.11);
  transformed.z += tip * fl * 0.04;
`,surface:`
  vec3 base = mix(vec3(0.36, 0.38, 0.42), vec3(0.62, 0.60, 0.58), step(0.5, fract(vInst.r * 7.0)));
  base = mix(base, vec3(0.2, 0.2, 0.22), step(0.8, fract(vInst.r * 13.0)));
  s.albedo = base * vColor.rgb; s.rough = 0.7; s.ao = 1.0;
`}),this.mesh=new di(n,this.mat,t),this.mesh.frustumCulled=!1,this.mesh.name=`birds`,this.b=[],this.m4=new $t,this.q=new kt,this.e=new un,this.v=new H,this.s=new H(1,1,1);let r=new W;for(let e=0;e<t;e++)r.setRGB(Math.random(),1,1),this.mesh.setColorAt(e,r),this.aState.setXY(e,0,Math.random());this.mesh.instanceColor.needsUpdate=!0,e.add(this.mesh),this.onFlush=null}addFlock(e,t,n,r,i,a){for(let o=0;o<e&&this.b.length<this.count;o++){let e=Math.random()*6.28,o=Math.sqrt(Math.random())*r,s=t+Math.cos(e)*o,c=n+Math.sin(e)*o;this.b.push({mode:0,home:new H(s,i(s,c)+.07,c),p:new H(s,i(s,c)+.07,c),yaw:Math.random()*6.28,t:Math.random()*10,perches:a,target:null,vel:new H,flap:0,scale:1+Math.random()*.25,groundY:i})}}addSoarers(e,t,n,r,i,a=4){for(let o=0;o<e&&this.b.length<this.count;o++)this.b.push({mode:3,c:new H(t+(Math.random()-.5)*i,n+(Math.random()-.5)*i*.3,r+(Math.random()-.5)*i),r:i*(.3+Math.random()*.7),w:(.12+Math.random()*.1)*(Math.random()<.5?1:-1),t:Math.random()*60,p:new H,yaw:0,flap:1,scale:a,soar:!0})}flushAll(e,t){for(let n of this.b)n.mode===0&&n.p.distanceTo(e)<t&&this._take(n,e)}_take(e,t){e.mode=1,e.t=0,e.target=new H(...e.perches[Math.random()*e.perches.length|0]),e.target.x+=(Math.random()-.5)*3,e.target.z+=(Math.random()-.5)*3;let n=this.v.copy(e.p).sub(t).setY(0).normalize();e.vel.set(n.x*3+(Math.random()-.5)*2,4+Math.random()*2,n.z*3+(Math.random()-.5)*2)}update(e,t){let n=0;for(let r=0;r<this.b.length;r++){let i=this.b[r];i.t+=e;let a=0,o=0;if(i.mode===0){t&&i.p.distanceToSquared(t)<17.64&&(this._take(i,t),n++);let o=i.t*1.3+r;a=Math.max(0,Math.sin(o*2.2))*Math.max(0,Math.sin(o*.37))*.9,Math.sin(o*.21+r)>.92&&(i.yaw+=e*2.5,i.p.x+=Math.sin(i.yaw)*e*.25,i.p.z+=Math.cos(i.yaw)*e*.25),i.flap+=(0-i.flap)*Math.min(1,e*8)}else if(i.mode===1){let t=this.v.copy(i.target).sub(i.p),n=t.length();t.normalize().multiplyScalar(9.5),i.vel.lerp(t,Math.min(1,e*1.6)),i.vel.y+=Math.sin(i.t*3+r)*e*2,i.p.addScaledVector(i.vel,e),i.yaw=Math.atan2(i.vel.x,i.vel.z),a=-i.vel.y*.06,o=Math.sin(i.t*2+r)*.3,i.flap+=(1-i.flap)*Math.min(1,e*10),n<.8&&(i.mode=2,i.t=0,i.p.copy(i.target))}else if(i.mode===2)i.flap+=(0-i.flap)*Math.min(1,e*6),i.t>14+r%7*3&&(!t||i.home.distanceToSquared(t)>100)&&(i.mode=4,i.t=0);else if(i.mode===4){let t=this.v.copy(i.home).sub(i.p),n=t.length();t.normalize().multiplyScalar(7),i.vel.lerp(t,Math.min(1,e*2)),i.p.addScaledVector(i.vel,e),i.yaw=Math.atan2(i.vel.x,i.vel.z),a=-i.vel.y*.05,i.flap+=((n>3?.7:1)-i.flap)*Math.min(1,e*6),n<.5&&(i.mode=0,i.p.copy(i.home))}else{let e=i.t*i.w;i.p.set(i.c.x+Math.cos(e)*i.r,i.c.y+Math.sin(i.t*.13)*8,i.c.z+Math.sin(e)*i.r),i.yaw=Math.atan2(-Math.sin(e)*i.w,Math.cos(e)*i.w),o=.35*Math.sign(i.w),i.flap=.55+.25*Math.sin(i.t*.7+r)}this.e.set(a,i.yaw,o,`YXZ`),this.q.setFromEuler(this.e),this.s.setScalar(i.scale),this.m4.compose(i.p,this.q,this.s),this.mesh.setMatrixAt(r,this.m4),this.aState.setX(r,i.mode===3?1:i.flap),i.soar&&!i._tag&&(i._tag=!0,this.aState.setY(r,2+Math.random()))}this.mesh.count=this.b.length,this.mesh.instanceMatrix.needsUpdate=!0,this.aState.needsUpdate=!0,n>2&&this.onFlush?.(n)}},Q={path:[[-10,154.5,-1166],[-32,170,-1205],[-12,186,-1250],[-50,204,-1290],[-40,216,-1330],[-60,226,-1350]],court:[-67.6,226,-1358],courtR:21,basin:[-71.5,226,-1363.2],basinR:8.6,basinDepth:1.25,trial:[24,155.4,-1182],trialR:11.5,rect:[-150,-1425,62,-1138],cell:.7};function pp(e,t){let n=Q.path,r=1e9,i=0,a=0,o=0,s=0;for(let e=0;e<n.length-1;e++)s+=Math.hypot(n[e+1][0]-n[e][0],n[e+1][2]-n[e][2]);for(let c=0;c<n.length-1;c++){let l=n[c],u=n[c+1],d=u[0]-l[0],f=u[2]-l[2],p=d*d+f*f,m=Math.sqrt(p),h=Hl(((e-l[0])*d+(t-l[2])*f)/p),g=Math.hypot(e-l[0]-d*h,t-l[2]-f*h);g<r&&(r=g,i=(o+h*m)/s,a=l[1]+(u[1]-l[1])*(h*h*(3-2*h))),o+=m}return{d:r,s:i,y:a}}function mp(){let e=au(`rock_boulder_dry`);return Vu({name:`travertine`,vertexColors:!0,uniforms:{tTvD:{value:e.diff},tTvN:{value:e.nor},tTvA:{value:e.arm},uAvgTv:{value:new H(...Uu.rock_boulder_dry)}},fragPars:Hu(`tTv`)+`uniform vec3 uAvgTv;
`,surface:`
  float wet = vColor.r, path = vColor.g, rnd = vColor.b, vao = vColor.a;
  vec3 w = triW(Ng, 4.0);
  vec3 p = P * 0.33;
  vec3 d = triTex(tTvD, p, w).rgb / uAvgTv;
  vec3 n = triNrm(tTvN, p, Ng, w, 1.1);
  vec3 arm = triTex(tTvA, p, w).rgb;
  vec4 mac = noiseTex(P.xz * 0.031), mac2 = noiseTex(vec2(P.x + P.z, P.y * 2.0) * 0.17);
  float steep = 1.0 - smoothstep(0.35, 0.8, Ng.y);
  // mineral tints: cream on dry rims, a breath of blue-green where water runs, ochre on the worn path
  vec3 alb = vec3(0.90, 0.87, 0.80) * mix(vec3(1.0), d, 0.5) * (0.9 + 0.2 * mac.r);
  alb = mix(alb, vec3(0.80, 0.86, 0.82), wet * 0.35 * smoothstep(0.3, 0.7, mac.g));
  alb = mix(alb, vec3(0.80, 0.70, 0.56) * (0.85 + 0.3 * d.g), path * 0.8);
  alb = mix(alb, alb * vec3(0.92, 0.88, 0.80), steep * smoothstep(0.4, 0.8, mac2.r) * 0.6);      // drip stains on the risers
  alb *= mix(1.0, 0.80, wet * 0.6);
  // a thin sheet of water slides over the risers below every pool
  float flow = noiseTex(vec2(P.x * 0.9 + P.z * 0.7, P.y * 0.35 + uTime * 0.11)).r;
  vec3 nf = normalize(n + vec3(0.0, 0.0, 0.0) + (flow - 0.5) * 0.35 * steep * wet * vec3(1.0, 0.0, 1.0));
  s.albedo = alb;
  s.N = nf;
  s.rough = mix(arm.g, 0.10 + 0.15 * flow, wet * (0.35 + 0.65 * steep));
  s.ao = vao * mix(1.0, arm.r, 0.7);
  s.spec = mix(0.7, 1.6, wet);
`})}function hp(){let e=new Wi({name:`flow`,transparent:!0,depthWrite:!1,side:2,uniforms:{uTime:J.uTime,uNoiseTex:J.uNoiseTex,uSunColor:J.uSunColor,uSkyAmb:J.uSkyAmb,uAmount:{value:0}},vertexShader:`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0); }`,fragmentShader:`
uniform float uTime, uAmount; uniform sampler2D uNoiseTex; uniform vec3 uSunColor, uSkyAmb; varying vec2 vUv;
void main() {
  float n = texture(uNoiseTex, vec2(vUv.x * 0.6, vUv.y * 0.35 + uTime * 0.55)).r * 0.6 + texture(uNoiseTex, vec2(vUv.x * 1.7 + 0.3, vUv.y * 0.9 + uTime * 0.9)).a * 0.4;
  float edge = smoothstep(0.0, 0.25, vUv.x) * smoothstep(1.0, 0.75, vUv.x);
  float a = smoothstep(0.32, 0.7, n + 0.25) * edge * uAmount * smoothstep(0.0, 0.05, vUv.y);
  vec3 c = (uSkyAmb * 1.5 + uSunColor * 0.22) * (0.75 + 0.5 * n);
  gl_FragColor = vec4(c, a * 0.85);
}`});return e.userData.noDepth=!0,e}async function gp(e,t){let n=t.col,r=t.lights,i=t.sprites,a=await ou(lu(`terraces`)),{x0:o,z0:s,nx:c,nz:l,cell:u}=a.meta,d=a.buffers.h,f=a.buffers.water,p=a.buffers.attr,m=new On;m.name=`terraces`,e.add(m);let h={group:m,lamps:[],sluices:[]},g=(e,t)=>{let n=Math.min(c-1.001,Math.max(0,(e-o)/u)),r=Math.min(l-1.001,Math.max(0,(t-s)/u)),i=n|0,a=r|0,f=n-i,p=r-a,m=i+a*c;return(d[m]*(1-f)+d[m+1]*f)*(1-p)+(d[m+c]*(1-f)+d[m+c+1]*f)*p};h.heightAt=g,h.waterAt=(e,t)=>{let n=Math.round((e-o)/u),r=Math.round((t-s)/u);return n<0||r<0||n>=c||r>=l?-999:f[n+r*c]};{let e=new Float32Array(c*l*3),t=new Float32Array(c*l*3),n=new Uint8Array(c*l*4);for(let r=0;r<l;r++)for(let i=0;i<c;i++){let a=i+r*c,f=i===0||r===0||i===c-1||r===l-1;e[a*3]=o+i*u,e[a*3+1]=d[a]-(f?9:0),e[a*3+2]=s+r*u;let m=d[Math.max(0,i-1)+r*c],h=d[Math.min(c-1,i+1)+r*c],g=d[i+Math.max(0,r-1)*c],_=d[i+Math.min(l-1,r+1)*c],v=m-h,y=g-_,b=Math.hypot(v,2*u,y);t[a*3]=v/b,t[a*3+1]=2*u/b,t[a*3+2]=y/b,n[a*4]=p[a*4],n[a*4+1]=p[a*4+1],n[a*4+2]=p[a*4+2],n[a*4+3]=p[a*4+3]}let r=new Uint32Array((c-1)*(l-1)*6),i=0;for(let e=0;e<l-1;e++)for(let t=0;t<c-1;t++){let n=t+e*c,a=n+1,o=n+c,s=o+1;r[i++]=n,r[i++]=o,r[i++]=a,r[i++]=a,r[i++]=o,r[i++]=s}let a=new Ar;a.setAttribute(`position`,new hr(e,3)),a.setAttribute(`normal`,new hr(t,3)),a.setAttribute(`color`,new hr(n,4,!0)),a.setIndex(new hr(r,1)),a.computeBoundingSphere(),a.computeBoundingBox();let f=new G(a,mp());f.name=`terraces-ground`,m.add(f),h.ground=f}{let e=[],t=[];for(let n=0;n<l-1;n++)for(let r=0;r<c-1;r++){let i=r+n*c,a=[f[i],f[i+1],f[i+c],f[i+c+1]],l=[d[i],d[i+1],d[i+c],d[i+c+1]],p=-999;for(let e of a)e>-900&&(p=Math.max(p,e));if(p<-900)continue;let m=!0;for(let e=0;e<4;e++)(a[e]>-900&&a[e]!==p||a[e]<-900&&l[e]<p-.3)&&(m=!1);if(!m||Math.min(l[0],l[1],l[2],l[3])>p-.015)continue;let h=e.length/3,g=o+r*u,_=s+n*u;e.push(g-.02,p,_-.02,g+u+.02,p,_-.02,g-.02,p,_+u+.02,g+u+.02,p,_+u+.02),t.push(h,h+2,h+1,h+1,h+2,h+3)}let n=new Ar;n.setAttribute(`position`,new hr(new Float32Array(e),3)),n.setIndex(t),n.computeBoundingSphere();let r=ef(new G(n,$d({shallow:[.46,.8,.78],deep:[.1,.48,.52],clarity:2.4,ripple:.45,foam:.7,name:`pool-water`})));r.name=`pools`,m.add(r),h.pools=r}let[_,v,y,b]=Q.rect;n.addField([_+1,120,v+1,y-1,330,b-1],(e,t,n)=>(t-g(e,n))*.72,`terraces`);{let e=pd(0,60,-6);n.addBox(e[0],e[1],e[2],126,80,32,-Au.yaw)}let x=t.carvedPale||=Zu(t.orn,{color:[.66,.6,.52],set:`worn_rock_natural_01`,name:`carved-pale`,grain:.7}),S=(e,t,n,r,i,a=0,o=1)=>{let s=new G(e,t);return s.position.set(n,r,i),s.rotation.y=a,s.scale.setScalar(o),s.updateMatrixWorld(!0),m.add(s),s},[C,w,T]=Q.court,[E,,D]=Q.basin;{let e=new Qu;e.tone=1,e._set(0,0),e.g.lathe([[Q.basinR+.25,-.2],[Q.basinR+.25,.32],[Q.basinR+.45,.38],[Q.basinR+1.25,.38],[Q.basinR+1.45,.3],[Q.basinR+1.45,-.2]],48),S(e.build(),x,E,w,D);let t=new ji(Q.basinR+.3,48);t.rotateX(-Math.PI/2);let r=ef(new G(t,$d({shallow:[.4,.74,.74],deep:[.04,.26,.32],clarity:1.5,ripple:.22,foam:.25,name:`basin-water`})));r.position.set(E,w-Q.basinDepth+.02,D),r.visible=!1,r.updateMatrixWorld(!0),m.add(r),h.basin={water:r,y0:w-Q.basinDepth+.02,y1:w+.12,center:new H(E,w+.12,D)};let i=hp();h.flowMats=[];for(let e=0;e<3;e++){let t=.5+e*2.1,r=E+Math.cos(t)*(Q.basinR+.85),a=D+Math.sin(t)*(Q.basinR+.85),o=new Qu;o.tone=1.03,o.band(.38,1,.42,Z.WAVE,.84,.62,.2),o.top(1,.42),o.mould([[0,1],[.06,1.05],[.06,1.18],[0,1.22]],.42),o.top(1.22,.48),S(o.build(),x,r,w,a,-t),n.addCylinder(r,a,.55,w,w+1.3);let s=i.clone();s.uniforms={...i.uniforms,uAmount:{value:0}},s.userData.noDepth=!0;let c=new Fi(.5,2.2,1,6),l=c.attributes.position;for(let e=0;e<l.count;e++){let t=1-(l.getY(e)/2.2+.5);l.setXYZ(e,l.getX(e),.85-t*2,.45+t*t*.9)}let u=new G(c,s);u.position.set(r,w,a),u.rotation.y=-t-Math.PI/2+Math.PI,u.layers.set(cl.TRANSPARENT),u.userData.noShadow=!0,u.updateMatrixWorld(!0),m.add(u),h.flowMats.push(s)}}[[-18,-1248],[-58,-1296],[-33,-1336]].forEach(([e,t],r)=>{let i=g(e,t),a=new Qu;a.tone=1;let o=a.g;for(let e of[-1,1])o.push().translate(e*.75,0,0),a.band(-.6,1.9,.2,Z.KNOT,.4,.4,.18),a.top(1.9,.2),o.pop();o.push().translate(0,1.9,0),a.band(0,.34,.22,Z.KEY,.9,.34,.2,.98),a.top(.34,.22,.98),a.under(0,.22,.98),o.pop();let s=Math.atan2(C-e,T-t)+Math.PI/2;S(a.build(),x,e,i,t,s);let c=new X;c.color(1,1,1,1),c.box(0,.45,0,.1,1.1,1.24,.015);for(let e of[.2,.75])c.box(.06,e,0,.03,.06,1.2,.005);c.push().translate(.1,1.45,0).rotZ(Math.PI/2),c.lathe([[.22,-.02],[.26,0],[.22,.02],[.18,0],[.22,-.02]],16),c.pop(),c.box(.1,1.2,0,.03,.5,.03,0);let l=S(c.build(),af(),e,i-.25,t,s);n.addBox(e,i+.8,t,.3,1.2,1,s),h.sluices.push({pos:new H(e,i+1,t),gate:l,y0:i-.25,open:0})});{let e=new H(Q.path[0][0]-C,0,Q.path[0][2]-T).normalize(),t=C+e.x*15.5,r=T+e.z*15.5,i=g(t,r),a=pf();S(a.base,x,t,i-.05,r,.3,1.25);let o=new X;o.color(1,1,1,1),o.lathe([[.2,1.1],[.16,2],[.13,6],[.1,10.6],[.16,10.7],[.16,10.9],[0,10.95]],12);for(let e of[3.2,6.4,9.2])o.lathe([[.2,e-.06],[.24,e],[.2,e+.06]],12);o.box(.45,1.6,0,.5,.05,.05,.01),o.box(.7,1.45,0,.05,.35,.05,.01),S(o.build(),af(),t,i,r),n.addCylinder(t,r,.85,i,i+12);let s=new On;s.position.set(t,i+10.7,r),s.scale.setScalar(1.5),m.add(s),s.add(new G(a.yoke,af()));let c=new On;c.position.set(0,1.12,0),s.add(c),c.add(new G(a.ring,af()),new G(a.disc,cf())),s.rotation.y=.8,c.rotation.x=.5,s.updateMatrixWorld(!0),h.mast={yaw:s,pitch:c,top:new H(t,i+10.7+1.12*1.5,r),pos:new H(t,i+1.4,r)}}{let e=Q.path[0][0]+7,t=Q.path[0][2]+9,r=g(e,t);S($u({W:1.3,H:9.5}),x,e,r-.3,t,.4),n.addBox(e,r+4.5,t,.85,5,.85,.4);let i=pf(),a=new On;a.position.set(e,r+9.2,t),m.add(a),a.add(new G(i.yoke,af()));let o=new On;o.position.set(0,1.12,0),a.add(o),o.add(new G(i.ring,af()),new G(i.disc,cf())),a.rotation.y=2.6,o.rotation.x=-.2,a.updateMatrixWorld(!0),h.receiver=new H(e,r+10.32,t)}let O=ff(1);for(let[e,t]of[[-25,-1188],[-27,-1268],[-52,-1344]]){let a=g(e,t);S(O.stone,x,e,a-.03,t,.5),S(O.metal,af(),e,a-.03,t),n.addCylinder(e,t,.3,a,a+1.2);let o=a+O.flameY,s=r.add([e,o+.12,t],[1,.56,.2],9,4.5,1);s.on=!1,s.level=0,h.lamps.push({pos:new H(e,a+1,t),light:s,flame:i.add([e,o-.02,t],.085,[1,1,1],0,0),glow:i.add([e,o+.05,t],.5,[1,.5,.16],2,0),lit:!1})}h.steles=[];for(let[e,t,r]of[[-17,-1180,.6],[-44,-1312,-.4]]){let i=g(e,t),a=new Qu;a.tone=1,a.mould([[0,-.3],[.05,0],[.05,.18],[0,.22]],.5,{hd:.28}),a.top(.22,.55,.33),a.band(.22,2,.4,Z.GLYPH,.8,.4,.2,.16),a.mouldBand([0,2],[.08,2.2],.4,Z.LOTUS,.8,.2,.16),a.top(2.2,.48,.24),S(a.build(),x,e,i,t,r),n.addBox(e,i+1.1,t,.5,1.2,.3,r),h.steles.push(new H(e,i+1.3,t))}return h.medallion=new H(...pd(hd.cx,hd.cy,9)),h.spawn=[Q.path[0][0],g(Q.path[0][0],Q.path[0][2]),Q.path[0][2]],h.pathInfo=pp,h}function _p(e,t,n=-150,r=120){let i=n,a=r,o=i;for(;o<a&&If(e,t,o)>0;)o+=3;if(o>=a)return null;let s=o-3,c=o;for(let n=0;n<14;n++){let n=(s+c)/2;If(e,t,n)>0?s=n:c=n}return(s+c)/2}function vp(e,t,n=120){let r=n;for(;r>-5&&If(e,r,t)>0;)r-=2;let i=r,a=r+2;for(let n=0;n<12;n++){let n=(i+a)/2;If(e,n,t)>0?a=n:i=n}return Math.max((i+a)/2,sd(e,t))}var yp=[[34,139],[90,111],[94,107.5],[30,106.5],[26,103],[96,67],[98,63.5],[42,62.5],[38,59],[92,47]];function bp(){let e=[];for(let[t,n]of yp){let r=_p(t,n+1.2);e.push(new H(t,n,(r??-30)-1.9))}let t=e[e.length-1];for(let[n,r]of[[78,t.z-14],[58,-62],[36,-74],[20,-86],[14,-97]])e.push(new H(n,vp(n,r,70)+.1,r));return e}function xp(e){let t=new X,n=bp(),r=Ol(8);for(let e=0;e<n.length-1;e++){let i=n[e],a=n[e+1],o=new H().subVectors(a,i),s=o.length(),c=Math.max(1,Math.round(s/5));for(let n=0;n<c;n++){let a=i.clone().addScaledVector(o,n/c),s=i.clone().addScaledVector(o,(n+1)/c),l=a.clone().add(s).multiplyScalar(.5),u=s.clone().sub(a),d=u.length(),f=Math.atan2(-u.z,u.x),p=Math.asin(u.y/d);t.push().translate(l.x,l.y,l.z).rotY(f).rotZ(p);let m=.92+r()*.14;t.color(m,m*.97,m*.93,1),t.box(0,-.45,0,d+.3,.9,2.5,.06),t.color(m*1.05,m,m*.95,1),t.box(0,.42,-1.12,d+.3,.85,.3,.05),e<10&&n%2==0&&(t.color(m*.85,m*.82,m*.78,.8),t.box(0,-2.4,.3,1.1,3.2,1.6,.08)),t.pop()}}let i=new G(t.build(),e);return i.name=`pilgrim-stair`,i}function Sp(){return Vu({name:`horizon`,vertexColors:!0,surface:`
  vec4 n = noiseTex(P.xz * 0.0006 + P.y * 0.0011);
  vec4 n2 = noiseTex(vec2(P.x + P.z, P.y * 3.0) * 0.0021);
  // banded mesas: pale caprock, redder slopes
  float band = smoothstep(0.35, 0.65, noiseTex(vec2(P.y * 0.004, 0.3)).r);
  vec3 alb = mix(vec3(0.52, 0.36, 0.24), vec3(0.66, 0.52, 0.38), band) * (0.8 + 0.4 * n.r) * vColor.rgb;
  alb = mix(alb, vec3(0.42, 0.33, 0.25), smoothstep(0.5, 0.9, n2.g) * 0.5);
  s.albedo = alb; s.rough = 1.0; s.ao = vColor.a; s.spec = 0.3;
  s.N = normalize(Ng + (n2.xyz - 0.5) * 0.5);
`})}function Cp(){let e=[],t=[],n=[];for(let r of[{r:4600,h:520,base:-40,seed:3.1,cut:.95},{r:7800,h:980,base:-60,seed:9.7,cut:.75}]){let i=e.length/3;for(let n=0;n<=420;n++){let i=n/420*Math.PI*2,a=Math.sin(i),o=-Math.cos(i),s=1-Math.max(0,Math.cos(i))**.7*1.25,c=r.h*(.35+.65*Ll(a*2.2+r.seed,o*2.2,r.seed*.7,4))*Math.max(0,s);c=Math.min(c,r.h*r.cut*(.7+.3*Il(i*3+r.seed,.5,2)));let l=r.r*(1+.12*Pl(i*2.3+r.seed,1.7));for(let n=0;n<5;n++){let i=n/4,s=l-(1-i)*(c*1.6+200),u=r.base+c*i**.75;e.push(a*s,u,o*s);let d=.75+.25*i;t.push(d,d,d,.6+.4*i)}}for(let e=0;e<420;e++)for(let t=0;t<4;t++){let r=i+e*5+t,a=r+5,o=a+1,s=r+1;n.push(r,a,o,r,o,s)}}let r=new Ar;r.setAttribute(`position`,new hr(new Float32Array(e),3));let i=new Uint8Array(t.length);for(let e=0;e<t.length;e++)i[e]=Math.round(t[e]*255);r.setAttribute(`color`,new hr(i,4,!0)),r.setIndex(n),r.computeVertexNormals();let a=r.attributes.position,o=r.attributes.normal,s=0;for(let e=0;e<200;e+=7)o.getX(e)*a.getX(e)+o.getZ(e)*a.getZ(e)>0&&s++;if(s>14){let e=r.index.array;for(let t=0;t<e.length;t+=3){let n=e[t+1];e[t+1]=e[t+2],e[t+2]=n}r.computeVertexNormals()}let c=new G(r,Sp());return c.name=`horizon`,c.userData.noShadow=!0,c.frustumCulled=!1,c}async function wp(e,t,n){let[r,i]=await Promise.all([ou(lu(`massif_mid`)),ou(lu(`massif_far`))]),a=new On;a.name=`massif`;let o=new G(uu(r),t);o.name=`massif-mid`;let s=new G(uu(i),t);return s.name=`massif-far`,a.add(o,s,xp(n),Cp()),e.add(a),{group:a}}var Tp={sun:[3.55,3.15,2.55],skyAmb:[.27,.39,.58],groundAmb:[.42,.33,.24],zenith:[.205,.3,.425],horizon:[.8,.93,1.05],low:[.55,.5,.44],glow:[1,.85,.6],skyFall:.063,fogWarm:[.8,.69,.58],fogBlue:[.36,.5,.68],fogA:[.00165,.0125,220,1],fogB:[125e-6,6,.35,0],exposure:.47};function Ep(e,t,n=Tp){J.uSunDir.value.set(...Du),J.uSunColor.value.setRGB(...n.sun),J.uSkyAmb.value.setRGB(...n.skyAmb),J.uGroundAmb.value.setRGB(...n.groundAmb),J.uFogWarm.value.setRGB(...n.fogWarm),J.uFogBlue.value.setRGB(...n.fogBlue),J.uFogA.value.set(...n.fogA),J.uFogB.value.set(...n.fogB),t.set({zenith:n.zenith,horizon:n.horizon,low:n.low,glow:n.glow,fall:n.skyFall}),e.grade.uExposure.value=n.exposure}async function Dp(e,t){let n=new In;n.matrixWorldAutoUpdate=!0,J.uNoiseTex.value=pu(512);let r=new Tu(e);n.add(r.mesh),Ep(e,r);let i={scene:n,sky:r,regions:{}};i.orn=Yu(e,512),i.col=new qd(6),i.lights=new Jd,i.sprites=new Zd(256),n.add(i.sprites.mesh);let a=ou(lu(`noise3d`)).then(e=>{i.noise3d=fu(e)}),[o,s]=await Promise.all([nd(n,i),ld(n,i)]);i.regions.grotto=o,i.far=s,i.riderGeo=await Wd(),i.rider=Gd(i.riderGeo,[ku.rider[0],ku.rider[1]+.02,ku.rider[2]],[-.56,-.83]),n.add(i.rider.mesh),i.stele=xd(n),i.city=Ld(n,s.plainMat),i.columns=Hd(n),i.columnMat=i.columns.mat,i.massif=await wp(n,o.rock.material,zd({set:`medieval_blocks_05`,scale:.22,color:[.6,.46,.31],name:`stair-stone`,streaks:.6})),await a,rd(o.gi),r.clouds=new Eu(r,i.noise3d,{base:110,top:800,density:.038,blobs:[[-480,0,-2350,300,130,420,1],[-640,0,-2520,230,160,630,1],[-330,0,-2480,200,150,500,.95],[-860,0,-2750,380,130,330,.9],[330,0,-2350,300,140,250,.85],[540,0,-2520,220,150,370,.9],[950,0,-2700,460,120,300,.9],[-60,0,-3300,700,110,360,.9],[1950,0,-900,520,130,310,.85],[-2300,0,-1e3,560,140,330,.85],[1600,0,1500,600,140,300,.8],[-1500,0,1900,600,140,290,.8],[2600,0,-2500,520,120,280,.85],[-2700,0,-2600,560,120,300,.85],[-350,0,420,430,400,300,.85],[760,0,260,380,420,260,.8],[1350,0,-650,340,320,280,.8],[-1450,0,-560,380,330,300,.8]]}),e.shadows.setFarBounds(new H(0,220,-760),1500,3800,1800),i.col.addField(ku.box,Ff,`grotto`),i.grottoH=await zf(o.group,{carved:o.carved,col:i.col,lights:i.lights,sprites:i.sprites}),await su(t),i.carved=o.carved;let c=i.quarterH=sp(n,i);i.col.groundFn=(e,t)=>sd(e,t)+.06;{let e=i.folk=new up(n),t=(e,t)=>sd(e,t)+.06,r=(e,n,r=0)=>[e,t(e,n)+r,n];c.npc={keeper:e.add({id:`keeper`,kind:1,pos:r(ep.keeper[0],ep.keeper[1],.42),yaw:2.4}),vendor:e.add({id:`vendor`,kind:0,pos:r(-45.6,-628.6),yaw:1.2}),sweeper:e.add({id:`sweeper`,kind:2,pos:r(-20,-640),path:[[-20,-640,3],[-16,-643,2],[-21,-646,4],[-24,-641,2]],speed:.35}),sitter:e.add({id:`sitter`,kind:1,pos:r(-25.7,-647.3,.44),yaw:1.2})},e.add({kind:0,pos:r(-40,-600),path:[[-40,-600,4],[-44,-640,0],[-30,-672,6],[10,-676,0],[44,-660,5],[20,-648,0],[-12,-630,3]],speed:.8}),e.add({kind:0,pos:r(-60,-720),path:[[-60,-720,5],[0,-722,2],[60,-719,6],[0,-716,0]],speed:.7}),e.add({kind:2,pos:r(-34,-652),path:[[-34.6,-650.5,5],[-50,-640,0],[-54.5,-612,6],[-50,-640,0]],speed:.6}),e.add({kind:0,pos:r(52.5,-655),yaw:-1.7}),e.add({kind:0,pos:r(51.6,-653.6),yaw:-.6}),e.add({kind:0,pos:r(-50.2,-711),yaw:1.6}),e.add({kind:1,pos:r(-55.5,-598,.3),yaw:1.57}),i.col.addBox(ep.keeper[0],t(ep.keeper[0],ep.keeper[1])+.2,ep.keeper[1]-.2,.9,.25,.4,2.4),c.keyGlint=i.sprites.add([c.fountain.pos.x+1.9,c.fountain.pos.y+.05,c.fountain.pos.z+1.5],.3,[1,.85,.5],1,1.3);let a=i.birds=new fp(n,72),o=[[-63,13.5,-600],[-63,14.5,-640],[-63,13,-670],[63,14,-660],[30,14.5,-612],[-30,4.6,-648],[-10,58.9,-690],[10,58.9,-690],[-30,58.9,-750],[-21,10.6,-557]];a.addFlock(14,-24,-642,6,t,o),a.addFlock(10,-32,-590,7,t,o),a.addFlock(12,12,-716,9,t,o),a.addFlock(8,30,-660,6,t,o),a.addSoarers(9,-40,520,-1430,260,5.5),a.addSoarers(5,0,150,-640,220,3.5),a.addSoarers(4,20,190,-40,60,3)}let l=i.terracesH=await gp(n,i);{let e=s.scarp.geometry,t=e.index.array,n=e.attributes.position.array,r=[],[i,a,o,c]=Q.rect;for(let e=0;e<t.length;e+=3){let s=t[e]*3,l=t[e+1]*3,u=t[e+2]*3,d=(n[s]+n[l]+n[u])/3,f=(n[s+2]+n[l+2]+n[u+2])/3;d>i+4&&d<o-4&&f>a+4&&f<c-4||r.push(t[e],t[e+1],t[e+2])}e.setIndex(new hr(new Uint32Array(r),1))}i.steleNormal=new H(...fd.w),i.setAwake=e=>{i.stele.mat.uniforms.uAwake.value=e},i.birds.addFlock(9,-24,-1215,7,l.heightAt,[[-40,236,-1300],[-90,232,-1352],[0,200,-1240]]),i.birds.addFlock(7,-52,-1318,6,l.heightAt,[[-40,236,-1300],[-90,232,-1352],[0,200,-1240]]),i.motes=[];let u=(e,t,n,r)=>{let a=i.motes.filter(t=>t.region===e).length;i.motes.push({id:`m`+e+`_`+a,region:e,pos:new H(t,n,r),got:!1,sprite:i.sprites.add([t,n,r],.13,[1,.84,.5],1,1.2)})};for(let[e,t,n]of[[1.5,149.3,-1.5],[-1,149.3,-1.6],[.4,147.7,5.5],[.4,145.7,9],[8.5,145,10.4],[11.5,145,15.5],[15.5,145,14.2],[19,144.4,15],[22.6,144.2,18.4],[5,145,18.6],[-6.2,145.1,9.4],[4.6,147.3,-6],[5.2,145.5,-11.5],[2.2,145,-16],[3,145,-21.6],[.2,145,-21],[6.4,145,-19.4],[10.5,145,-20.7]])u(0,e,t,n);{let e=(e,t)=>sd(e,t)+1.15;for(let[t,n]of[[-30,-576],[-41,-586],[-20,-596],[-50,-602],[-45,-625],[-26,-642],[-14,-656],[6,-650],[26,-656],[46,-666],[50,-646],[-55.6,-607],[-55.6,-663],[-60,-700],[-30,-722],[0,-706],[30,-737],[62,-722],[72,-746],[-72,-742],[0,-750]])u(1,t,e(t,n),n);let t=c.cath.stairPts,n=c.cath.gy;for(let e of[1,3,5]){let r=t[4+2*e];u(1,r[0],n+(e+1)*5.4+1.1,r[2])}let r=c.cath.toWorld(-1.6,Jf.belfryY+1.1,2.6);u(1,r[0],r[1],r[2])}{let e=Q.path;for(let t=0;t<e.length-1;t++)for(let n of[.3,.68]){let r=e[t][0]+(e[t+1][0]-e[t][0])*n,i=e[t][2]+(e[t+1][2]-e[t][2])*n;u(2,r,l.heightAt(r,i)+1.1,i)}for(let[e,t]of[[-34,-1186],[2,-1232],[-36,-1262],[-70,-1300],[-22,-1318],[-82,-1352],[-56,-1372],[-66,-1340],[14,-1176],[34,-1190],[24,-1168]])u(2,e,l.heightAt(e,t)+1.1,t)}let d=i.grottoH.heliostat.center;i.targets={grotto:[d.x,d.y,d.z],tower:[c.mirror.center.x,c.mirror.center.y,c.mirror.center.z],scarp:[l.receiver.x,l.receiver.y,l.receiver.z],mast:[l.mast.top.x,l.mast.top.y,l.mast.top.z],pool:[l.basin.center.x,l.basin.center.y,l.basin.center.z],medallion:[l.medallion.x,l.medallion.y,l.medallion.z]},i.beams=[0,1,2,3,4].map(()=>{let e=Xd({ra:.16,rb:.5,color:[1,.84,.52],intensity:1,soft:1.6,noise:.25,segments:12});return e.mesh.visible=!1,n.add(e.mesh),e}),i.beacons={tower:i.sprites.add(i.targets.tower,5.5,[1,.85,.55],1,.9),scarp:i.sprites.add(i.targets.scarp,9,[1,.88,.6],1,.9)};let f=[[`grotto`,`tower`],[`tower`,`scarp`],[`scarp`,`mast`],[`mast`,`pool`],[`pool`,`medallion`]];i.showBeam=(e,t)=>{let n=i.beams[e];n.mesh.visible=t,t&&(n.set(i.targets[f[e][0]],i.targets[f[e][1]]),n.uniforms.uReveal.value=1,n.uniforms.uIntensity.value=1)};{let e=l.medallion.x-i.steleNormal.x*75,t=l.medallion.z-i.steleNormal.z*75;i.crown=Xd({ra:9,rb:46,color:[1,.87,.58],intensity:.5,soft:2,noise:.3,segments:16}),i.crown.set([e,Au.topY-12,t],[e,Au.topY+2100,t]),i.crown.mesh.visible=!1,n.add(i.crown.mesh)}i.setEverlit=e=>{for(let t=0;t<5;t++)i.showBeam(t,e);i.setAwake(+!!e),i.crown.mesh.visible=e,i.crown.uniforms.uReveal.value=1},i.placeRider=(e,t)=>{let n=i.rider;n.uniforms.uDissolve.value=0,e?(n.mesh.visible=!0,n.mesh.position.set(e[0],e[1],e[2]),n.mesh.rotation.y=Math.atan2(-t[1],t[0]),n.mesh.updateMatrixWorld(!0)):n.mesh.visible=!1},await su(t),i.setRegion=e=>{i.region=e,rd(e===0?o.gi:null)},i.travelShots=e=>e===1?[{dur:7,cut:!0,from:{pos:[-70,168,-92],target:[20,132,-22],fov:46},to:{pos:[-20,96,-150],target:[60,70,-26],fov:50},say:null},{dur:7,cut:!0,from:{pos:[34,46,-150],target:[8,20,-420],fov:55},to:{pos:[10,22,-420],target:[-4,30,-600],fov:50}},{dur:5.5,cut:!0,from:{pos:[-34,16,-500],target:[-28,14,-590],fov:52},to:{pos:[-30,4.5,-545],target:[-26,12,-600],fov:56}}]:e===2?[{dur:6.5,cut:!0,from:{pos:[0,7,-772],target:[0,60,-1130],fov:58},to:{pos:[0,24,-960],target:[-10,110,-1200],fov:54}},{dur:7,cut:!0,from:{pos:[70,60,-1040],target:[-10,110,-1160],fov:50},to:{pos:[44,168,-1104],target:[-30,200,-1300],fov:52}},{dur:6,cut:!0,from:{pos:[14,176,-1118],target:[-44,300,-1395],fov:56},to:{pos:[-6,160,-1152],target:[-44,320,-1395],fov:60}}]:[];let p=0;return i.update=(e,t,n)=>{p+=t,r.update(e,t),i.lights.update(e.position,p,t),t>0&&(i.folk.update(t,(e,t)=>sd(e,t)+.06),i.birds.update(t,n&&n.state===`play`?n.player.pos:null))},i}var Op={ref:{pos:Ou.pos,yaw:0,pitch:-1.3,vfov:Ou.vfovPortrait,aspect:`portrait`},title:{pos:Ou.pos,yaw:0,pitch:-1.3,vfov:Ou.vfovPortrait,aspect:`wide`},grotto_ledge:{pos:[.6,145.8,-13.6],target:[3.4,145.5,-22.5],vfov:60,aspect:`wide`},grotto_hall:{pos:[-2.5,145.7,14.5],target:[5,146.2,8],vfov:62,aspect:`wide`},grotto_back:{pos:[1,145.6,-21.5],target:[4,149,-8],vfov:65,aspect:`wide`},rider_a:{pos:[3.2,146.6,-13.6],target:[2,145.3,-19.4],vfov:34,aspect:`wide`},rider_b:{pos:[-1.2,145.6,-15],target:[2,145.3,-19.4],vfov:32,aspect:`wide`},rider_c:{pos:[-2.5,145.4,-24.5],target:[2,145.4,-19.4],vfov:30,aspect:`wide`},cliff:{pos:[-120,120,-230],target:[30,110,-20],vfov:42,aspect:`wide`},r2_south:{pos:[-20,1.8,-660],target:[10,60,-100],vfov:55,aspect:`wide`,region:1},r2_square:{pos:[-48,1.75,-676],target:[-10,14,-615],vfov:62,aspect:`wide`,region:1},r2_arrive:{pos:[-30,1.75,-569],target:[-22,9,-640],vfov:62,aspect:`wide`,region:1},r2_columns:{pos:[-56,1.75,-724],target:[20,20,-716],vfov:68,aspect:`wide`,region:1},r2_tower:{pos:[-1,39.6,-604.2],target:[-10,60,-1400],vfov:62,aspect:`wide`,region:1},r2_houses:{pos:[-38,1.75,-622],target:[-58,5,-640],vfov:62,aspect:`wide`,region:1},ledge_back:{pos:[-1,145.7,-21.8],target:[6,152,-12],vfov:70,aspect:`wide`},r3_start:{pos:[-10,156.3,-1166],target:[-44,250,-1395],vfov:62,aspect:`wide`,region:2},r3_pools:{pos:[-22,180.5,-1228],target:[-48,200,-1300],vfov:62,aspect:`wide`,region:2},r3_court:{pos:[-52,227.8,-1340],target:[-60,300,-1392],vfov:68,aspect:`wide`,region:2},r3_back:{pos:[-56,228,-1344],target:[0,120,-700],vfov:60,aspect:`wide`,region:2},top:{pos:[0,2600,-760],target:[0,0,-761],vfov:50,aspect:`wide`},dbg_out:{pos:[-14,152,-52],target:[3,149,-14],vfov:40,aspect:`wide`},dbg_side:{pos:[-30,150,-30],target:[2,148,-16],vfov:40,aspect:`wide`},top_grotto:{pos:[3,215,-6],target:[3,144,-6.1],vfov:60,aspect:`wide`}};function kp(e,t,n){e.position.set(...t.pos),e.fov=t.vfov,e.aspect=n,e.near=t.near??.1,e.far=3e4,e.updateProjectionMatrix(),t.target?e.lookAt(...t.target):(e.rotation.order=`YXZ`,e.rotation.set(t.pitch*Math.PI/180,t.yaw*Math.PI/180,0)),e.updateMatrixWorld(!0)}var Ap={title:`Lightbearer`,subtitle:`THE LAST LIGHT OF MORNING`,tagline:`The stele still holds one dawn`,taglineLit:`The stele is lit. You lit all three courts`,everlit:[`All three courts are lit. Three pillars of light meet above the stele.`,`From now on, the stele waits for no one.`],photo:{hint:`W A S D  move   ·   Space / C  up, down   ·   Wheel  field of view   ·   Shift  faster   ·   Enter  save   ·   H  hide this   ·   P  leave`,saved:`Picture saved`},menu:{daily:`Today's Puzzle`,endless:`The Long Night`,start:`Set Out`,continue:`Continue`,settings:`Settings`,credits:`Credits`,resume:`Back to the Road`,toTitle:`Return to Title`,back:`Back`,newGame:`Start Again`,achievements:`Deeds`},settings:{title:`Settings`,quality:`Graphics`,qLow:`Smooth`,qMedium:`Balanced`,qHigh:`Fine`,master:`Master volume`,music:`Music`,sfx:`Effects`,sens:`Look sensitivity`,fullscreen:`Fullscreen`,invert:`Invert vertical look`,on:`On`,off:`Off`,lang:`Language`,langHint:`Changing the language returns to the title screen.`,hintQuality:`Balanced aims for 1080p at 60 fps. Fine raises resolution and shadow detail.`},loading:[`The lamps of the Stone-Window Shrine are still lit`,`The wind comes from the white cliffs`,`The city bell has been silent for a hundred years`],clickToPlay:`Click to continue`,saved:`Journey recorded`,autoLow:`Graphics set to Smooth`,paused:`Rest a While`,controls:`W A S D  walk   ·   Shift  run   ·   Space  jump   ·   Mouse  look   ·   E  interact   ·   P  photo   ·   Esc  pause`,prompt:{lamp:`Light the lamp`,lampLit:`The lamp is lit`,disc:`Take the bronze mirror`,mount:`Set the mirror in its cradle`,inspectMount:`Look at the cradle`,aim:`Turn the sun mirror`,door:`Go down the pilgrim stair`,doorLocked:`The bronze grille is shut`,idol:`Study the idol`,bed:`Look at the bedding`,key:`Fish out the key`,talk:`Talk`,towerDoor:`Open the bell-tower door`,towerLocked:`Locked`,bell:`Ring the bell`,cover:`Pull off the mirror cloth`,gate:`Leave by the north gate`,sluice:`Raise the sluice`,mast:`Turn the mast mirror`,read:`Read the inscription`,sit:`Rest`,fountain:`Look into the fountain`},aimHint:`Move the mouse to swing the beam onto the bell tower marker; close enough and it pulls in   ·   Q to step back`,aimTarget:`Bell tower: send the light here`,aimLocked:`The light has found it`,chapterN:e=>`Stage ${e}`,chapters:[{n:`I`,name:`The Stone-Window Shrine`,sub:`An echo at the cave mouth`},{n:`II`,name:`The City of Columns`,sub:`A bell unrung for a century`},{n:`III`,name:`The White Steps`,sub:`At the Sleeper's feet`}],intro:[`Once in a hundred years, a rider comes up through the southern pass.`,`With three old mirrors he hands the daylight on, stage by stage, to the stele.
People call him the Lightbearer.`,`The last Lightbearer never finished the final stage.`,`Today, at the mouth of the cave, you saw him again.`],obj:{r1_go:`Go out onto the ledge`,r1_find:`Find the sun mirror's bronze disc inside the shrine`,r1_mount:`Set the disc back in the cradle on the ledge`,r1_aim:`Turn the sun mirror and send the light to the bell tower`,r1_leave:`Leave by the stone door at the east end of the ledge`,r2_enter:`Enter the city and find the square before the church`,r2_keeper:`Ask the bell-keeper under the tower`,r2_key:`Look for the key "where the pigeons drink"`,r2_climb:`Climb the bell tower`,r2_cover:`Uncover the mirror at the top`,r2_aim:`Send the light to the white cliffs`,r2_leave:`Pass between the columns and leave by the north gate`,r3_climb:`Climb the White Steps to the foot of the stele`,r3_sluice:`Raise the three sluices and let the water fill the mirror pool`,r3_mast:`Turn the mast mirror and walk the light up the stele`,r3_end:``},say:{echoGone:`As you come near he scatters, like a handful of gold dust in the wind.`,mountEmpty:`The cradle is empty. The disc is not here — you remember it was put away in the deepest part of the shrine.`,discFound:`The disc lay in the cistern for a hundred years, and its face is still bright.`,discMounted:`The disc settles into its cradle. It is waiting for light.`,beam1:`The light has crossed. Something flashed at the top of the bell tower.`,gateOpens:`The bronze grille on the stone door opens by itself.`,idol:`The same figure as on the stele. Only the mirror in its hands still keeps its gold.`,bed:`You slept here for many years. Tonight you probably won't come back.`,lampCount:(e,t)=>`Lamps ${e} / ${t}`,r2_arrive:`The city is quieter than it looked from above. People walk slowly under their sun-cloaks, as if not quite awake.`,keeper1:`Bell-keeper: The bell? No one has rung it in a hundred years. The key to the door…
I dropped it when I was young, where the pigeons drink.`,keeper2:`Bell-keeper: You fished it out? Up you go, then. And don't lose the cloth on that mirror.`,keeper3:`Bell-keeper: It's lit. My grandfather said it would be.`,keyFound:`A bronze key at the bottom of the fountain, furred with green.`,towerOpen:`The lock is stiff, but it gives.`,bell:`The bell rolls over the whole city. Every pigeon on the roofs takes off.`,coverOff:`Under the cloth the mirror is spotless. The light from the shrine is already falling on it.`,beam2:`The light clears the roofs and the columns and lands on the white cliff.`,r2_gate:`The columns throw long shadows. Beyond the north gate a causeway runs to the foot of the cliffs.`,vendor:`Stall-keeper: Figs? …You came down from the mountain? Somebody still lives up there?`,sweeper:`Woman with a broom: Mind that flagstone, it's hollow underneath. — I'm joking.`,sitter:`Old man: When I was young you could see a light on the stele at night. Then one day you couldn't.`,monk:`A cloaked figure passes you with lowered head and says nothing.`,r3_arrive:`The white stone was left by water. Shelf after shelf, it spills from the foot of the stele to the cliff edge.`,sluice:e=>[`The first sluice is up. Water starts down the stone channel.`,`The second. The water is louder now.`,`The third. The mirror pool begins to fill.`][e],poolFull:`The pool is full. Its surface is as flat as a mirror.`,mastReady:`The mirror on the mast folds the city's light down into the pool.`,final:`The light climbs the face of the stele.`,courtInvite:[`No need to hurry. The mirror court in the shrine is lit — twelve puzzles of light, and a grain of dust for each.`,`There is a mirror court among the columns too. Sixteen puzzles, and this time you will need spare mirrors.`],stele:`The inscription is worn down to a few words: "…when the mirror-holder comes, then…"`},ending:[`The moment the light fell into the medallion, the whole stele woke.`,`One after another, the bells of the city began to ring.`,`He had finished the last stage at last.`,`And you became the one they will wait for, a hundred years from now.`],credits:[[`Lightbearer`,`THE LAST LIGHT OF MORNING`],[`Concept`,`One picture: a rider, a ledge, a red-roofed city, a stele on white cliffs`],[`World · Art · Code · Sound`,`Generated and synthesised entirely in code`],[`Engine`,`Three.js · WebGL2`],[`Textures`,`Poly Haven (CC0)`],[`Typefaces`,`Noto Serif SC · Cormorant Garamond (SIL OFL)`],[`Not over yet`,`Three mirror courts, forty-eight puzzles and the Long Night are waiting`],[``,`Thank you for walking this far`]],stats:{time:`Journey time`,lamps:`Lamps lit`,dust:`Light dust`,trials:`Courts`,fmt:(e,t,n,r)=>`Journey time  ${e} min ${String(t).padStart(2,`0`)} s      Lamps lit  ${n} / ${r}`},courts:[`Shrine Court`,`Column Court`,`White Steps Court`],trial:{level:(e,t,n)=>`${e}   ·   ${t} / ${n}`,done:e=>`${e}   ·   Complete`,endless:e=>`The Long Night   ·   Depth ${e}`,daily:(e,t)=>`Today's Puzzle   ·   ${t} ${[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`][e-1]}`,dailyIntro:`Today's puzzle: one a day, the same board for everyone. Solve it, and come back tomorrow.`,dailyAlready:`Today's puzzle is already solved. There will be a new one tomorrow.   [ ] returns to the court's own puzzles`,dailyDone:(e,t)=>`Today's puzzle solved in ${e} moves. `+(t>1?`${t} days in a row.`:`Come back tomorrow to start a streak.`),turn:`Turn the mirror`,turnPrism:`Turn the prism`,turnPlaced:`Turn   ·   X to take back`,place:`Set down a spare mirror`,stock:e=>`Spare mirrors ${e}`,noStock:`No spare mirrors left.`,placeIntro:`This one comes with spare mirrors: press E on an empty square to set one down, X on a placed mirror to take it back.
Tab gives you the view from above.`,solvedStars:e=>[`Solved.`,`Neatly done.`,`Not one move wasted.`][e-1],hintStray:`That spare mirror does not seem to belong there.`,hintPlace:`This square is missing a mirror.`,footHint:`E turn   ·   Tab view from above   ·   H hint   ·   R reset   ·   [ ] change puzzle`,overviewHint:`W A S D / mouse  select   ·   E turn / place   ·   X take back   ·   H hint   ·   R reset   ·   [ ] change puzzle   ·   Tab back down`,solved:[`The light has arrived.`,`Every crystal lamp is lit.`,`Solved.`,`The mirrors will remember this angle.`],ladderDone:e=>`The ${e} is complete. A pillar of light rises from its centre; you can see it from far away.`,hintNone:`Every mirror is right. See whether something is standing in the light.`,intro:`Mirror court: turn the bronze mirrors until the light reaches every crystal lamp. Keep it off the sleeping idols.`,enter:`Mirror court`},ranks:[`Lamp-keeper`,`Gleaner`,`Lightbearer`,`Mirror-holder`,`Everbright`,`Sleepless`],rankUp:e=>`New rank: ${e}`,dust:e=>`Dust ${e}`,journal:{stars:`Court radiance`,title:`Satchel`,rank:`Rank`,dust:`Light dust`,motes:`Dust gathered`,lamps:`Lamps lit`,court:`Court`,endless:`Deepest Long Night`,story:`Story`,storyDone:`Finished`,storyNot:`Under way`,next:e=>`${e} more dust to the next rank`,deeds:`Deeds`},back:{toR1:`Back up to the shrine`,toR2:`Down to the city`,toR3:`Up to the White Steps`},marker:{on:`Waymark on`,off:`Waymark off`},endMenu:{again:`Walk it again`,title:`Return to title`},deedGot:e=>`Deed: ${e}`,deedLocked:`———`,deeds:{first_light:[`First Light`,`Send the light from the shrine to the bell tower`],bell:[`A Hundred Years, One Stroke`,`Ring the bell of the city`],waters:[`Three Sluices`,`Fill the mirror pool`],ending:[`Lightbearer`,`Finish the journey`],swift:[`Fast Horse`,`Finish the journey in under twenty minutes`],lamps:[`Everlit`,`Light all nine lamps`],motes_half:[`Gleaner`,`Gather half of the light dust`],motes_all:[`Not a Grain Lost`,`Gather all of the light dust`],court1:[`Shrine Court`,`Solve all twelve puzzles in the shrine`],court2:[`Column Court`,`Solve all sixteen puzzles among the columns`],court3:[`White Steps Court`,`Solve all twenty puzzles on the White Steps`],clean10:[`No Wasted Move`,`Earn three diamonds on ten puzzles`],radiance:[`Full Radiance`,`Earn three diamonds on every puzzle`],night10:[`Ten Deep`,`Reach depth 10 of the Long Night`],night30:[`Sleepless`,`Reach depth 30 of the Long Night`],fall:[`Unafraid of Heights`,`Fall, and find yourself back on safe ground`],photo:[`Keepsake`,`Save a picture in photo mode`],daily1:[`One a Day`,`Solve a daily puzzle`],daily7:[`Seven Days`,`Solve the daily puzzle seven days in a row`],everlit:[`Everlit`,`Complete all three mirror courts and leave the stele lit for good`]}},jp={title:`引光者`,subtitle:`LIGHTBEARER`,tagline:`碑里锁着最后一道晨光`,taglineLit:`碑亮着。三座镜庭，都是你点的`,everlit:[`三座镜庭都亮了。三道光柱，在碑顶汇成一道。`,`从此，这座碑不必再等谁。`],photo:{hint:`W A S D 移动　·　空格 / C 升降　·　滚轮 视野　·　Shift 加速　·　回车 存图　·　H 隐藏提示　·　P 退出`,saved:`留影已存`},menu:{daily:`今日光题`,endless:`长夜试炼`,start:`启程`,continue:`继续旅程`,settings:`设置`,credits:`制作名单`,resume:`回到旅途`,toTitle:`回到标题`,back:`返回`,newGame:`重新启程`,achievements:`功绩`},settings:{title:`设置`,quality:`画质`,qLow:`流畅`,qMedium:`均衡`,qHigh:`精致`,master:`总音量`,music:`音乐`,sfx:`音效`,sens:`鼠标灵敏度`,fullscreen:`全屏`,lang:`语言`,langHint:`切换语言会回到标题画面。`,invert:`反转纵向视角`,on:`开`,off:`关`,hintQuality:`均衡档以 1080p 60 帧为目标；精致档提高分辨率与阴影精度。`},loading:[`岩窗寺的灯还亮着`,`风从白崖那边来`,`城里的钟已经百年没响`],clickToPlay:`点击画面继续`,saved:`旅程已记下`,autoLow:`画质已调为流畅`,paused:`歇一歇`,controls:`W A S D 行走　·　Shift 疾行　·　空格 跳　·　鼠标 环顾　·　E 互动　·　P 留影　·　Esc 暂停`,prompt:{lamp:`点灯`,lampLit:`灯已点亮`,disc:`拾起铜镜`,mount:`把铜镜装回镜座`,inspectMount:`查看镜座`,aim:`转动日镜`,door:`走下朝圣阶道`,doorLocked:`铜栅关着`,idol:`端详神像`,bed:`看看铺盖`,key:`捞起钥匙`,talk:`交谈`,towerDoor:`打开钟楼的门`,towerLocked:`门锁着`,bell:`敲钟`,cover:`揭开镜罩`,gate:`穿过北门`,sluice:`提起水闸`,mast:`转动桅镜`,read:`读碑文`,sit:`歇脚`,fountain:`看看泉池`},aimHint:`移动鼠标，把光束移到「钟楼」标记上，靠近了会自己吸过去　·　Q 退出`,aimTarget:`钟楼　把光送到这里`,aimLocked:`光对上了`,chapterN:e=>`第${e}程`,chapters:[{n:`一`,name:`岩窗寺`,sub:`洞口的回影`},{n:`二`,name:`柱下城`,sub:`百年未响的钟`},{n:`三`,name:`白阶`,sub:`长眠者脚下`}],intro:[`每隔百年，会有一个人骑马从南面的山口来。`,`他借三面古镜，把日光一程一程送上那座碑。
人们叫他引光者。`,`上一位引光者，没有走完最后一程。`,`今天，你又在洞口看见了他。`],obj:{r1_go:`到岩台上去`,r1_find:`在寺里找回日镜的铜镜`,r1_mount:`把铜镜装回岩台上的镜座`,r1_aim:`转动日镜，把光送到城里的钟楼`,r1_leave:`从岩台东端的石门下山`,r2_enter:`进城，去教堂前的广场`,r2_keeper:`问问钟楼下的守钟人`,r2_key:`到"鸽子喝水的地方"找钥匙`,r2_climb:`登上钟楼`,r2_cover:`揭开塔顶日镜的罩布`,r2_aim:`把光送向白崖`,r2_leave:`穿过巨柱，从北门出城`,r3_climb:`沿白阶向上，走到碑脚`,r3_sluice:`提起三道水闸，让水流进镜池`,r3_mast:`转动桅镜，让池中的光爬上碑面`,r3_end:``},say:{echoGone:`你一走近，他就散了。像被风吹走的一把金粉。`,mountEmpty:`镜座是空的。铜镜不在这里——你记得它被收进了寺里最深的地方。`,discFound:`铜镜沉在水窖里，百年了，镜面还是亮的。`,discMounted:`铜镜落回了镜座。它在等光。`,beam1:`光过去了。城里那座钟楼顶上，有什么东西亮了一下。`,gateOpens:`石门上的铜栅自己开了。`,idol:`和碑上的是同一个人。双手捧着的那面镜，只有这一处还留着金。`,bed:`你在这里睡了很多年。今晚大概不回来了。`,lampCount:(e,t)=>`灯 ${e} / ${t}`,r2_arrive:`城比从上面看要安静。人们披着遮阳的斗篷，走得很慢，像没睡醒。`,keeper1:`守钟人：钟？一百年没人敲了。门的钥匙……
我年轻时把它掉在了鸽子喝水的地方。`,keeper2:`守钟人：捞着了？那就上去吧。上面那面镜子，罩布别弄丢了。`,keeper3:`守钟人：亮了。我祖父说过它会亮的。`,keyFound:`泉池底有一把铜钥匙，上面长满了绿锈。`,towerOpen:`锁很涩，但还是开了。`,bell:`钟声压过整座城。屋顶上的鸽子全飞了起来。`,coverOff:`罩布下的镜面一尘不染。岩窗寺来的光正落在上面。`,beam2:`光越过屋顶和巨柱，落在白崖上。`,r2_gate:`巨柱的影子很长。北门外，堤道一直通到白崖脚下。`,vendor:`摊主：买点无花果吧。……你从山上下来的？那上面还有人住？`,sweeper:`扫地的妇人：别踩那块石板，底下是空的。——说笑的。`,sitter:`老人：我年轻的时候，夜里能看见碑上有光。后来就没有了。`,monk:`披斗篷的人低着头，从你身边走过去，没有说话。`,r3_arrive:`白色的石头是水留下的。一层一层，从碑脚一直淌到崖边。`,sluice:e=>[`第一道水闸提起来了。水沿着石渠往下走。`,`第二道。水声大了。`,`第三道。镜池开始涨水。`][e],poolFull:`水满了。池面平得像一面镜子。`,mastReady:`桅杆顶上的镜子，把城里来的光折进了池里。`,final:`光爬上了碑面。`,courtInvite:[`不急着走。寺里的镜庭亮着灯，十二道光题，解一题添一分光尘。`,`巨柱之间也有一座镜庭。十六道光题，这回用得上备镜。`],stele:`碑文磨得只剩几个字："……持镜者至，则……"`},ending:[`光落进圆龛的那一刻，整座碑亮了。`,`城里的钟，一口接一口地响起来。`,`他终于走完了最后一程。`,`而你，成了下一个百年里，人们要等的那个人。`],credits:[[`引光者`,`LIGHTBEARER`],[`概念`,`一张图：骑士、岩台、红瓦之城、白崖上的碑`],[`世界 · 美术 · 程序 · 声音`,`全部由代码生成与合成`],[`引擎`,`Three.js · WebGL2`],[`贴图`,`Poly Haven（CC0）`],[`字体`,`Noto Serif SC · Cormorant Garamond（SIL OFL）`],[`还没结束`,`三座镜庭、四十八道光题和长夜试炼在等你`],[``,`谢谢你走到这里`]],stats:{time:`旅程用时`,lamps:`点亮的灯`,dust:`光尘`,trials:`镜庭`,fmt:(e,t,n,r)=>`旅程用时　${e} 分 ${String(t).padStart(2,`0`)} 秒　　点亮的灯　${n} / ${r}`},courts:[`岩窗寺镜庭`,`柱下城镜庭`,`白阶镜庭`],trial:{level:(e,t,n)=>`${e}　·　第 ${t} / ${n} 题`,done:e=>`${e}　·　圆满`,endless:e=>`长夜试炼　·　第 ${e} 层`,daily:(e,t)=>`今日光题　·　${e} 月 ${t} 日`,dailyIntro:`今日光题：每天一道，所有人都是同一道。解开它，明天再来。`,dailyAlready:`今天的光题已经解开了。明天会有新的一道。　[ ] 回到镜庭的题`,dailyDone:(e,t)=>`今日光题解开了：${e} 步。`+(t>1?`已连续 ${t} 天。`:`明天再来，就是连续两天。`),turn:`转镜`,turnPrism:`转棱镜`,turnPlaced:`转镜　·　X 收回`,place:`安放备镜`,stock:e=>`备镜 ${e}`,noStock:`备镜用完了。`,placeIntro:`这一题有备镜：对着空格按 E 安放，对着放下的镜按 X 收回。
按 Tab 俯视，摆起来更方便。`,solvedStars:e=>[`解开了。`,`解得利落。`,`一步不多。`][e-1],hintStray:`这面备镜，似乎不该放在这里。`,hintPlace:`这一格缺一面镜子。`,footHint:`E 转镜　·　Tab 俯视全局　·　H 提示　·　R 重来　·　[ ] 换题`,overviewHint:`W A S D / 鼠标 选格　·　E 转镜 / 安放　·　X 收回　·　H 提示　·　R 重来　·　[ ] 换题　·　Tab 回到地面`,solved:[`光都到了。`,`晶灯全亮了。`,`这一题解开了。`,`镜子记住了这个角度。`],ladderDone:e=>`${e}圆满。一道光柱从庭心升起，在别处也望得见。`,hintNone:`镜子都对了，看看光是不是被什么挡住了。`,intro:`镜庭：转动铜镜，让光照亮所有晶灯。别让光落在眠像上。`,enter:`镜庭`},ranks:[`守灯人`,`拾光者`,`引光者`,`持镜者`,`长明者`,`不眠者`],rankUp:e=>`位阶提升：${e}`,dust:e=>`光尘 ${e}`,journal:{deeds:`功绩`,stars:`镜庭星辉`,title:`行囊`,rank:`位阶`,dust:`光尘`,motes:`拾得的光尘`,lamps:`点亮的灯`,court:`镜庭`,endless:`长夜试炼最深`,story:`主线`,storyDone:`已走完`,storyNot:`进行中`,next:e=>`距下一位阶还差 ${e}`},back:{toR1:`回岩窗寺`,toR2:`下到柱下城`,toR3:`上白阶`},marker:{on:`引路标记：开`,off:`引路标记：关`},endMenu:{again:`再走一次`,title:`回到标题`},deedGot:e=>`功绩：${e}`,deedLocked:`———`,deeds:{first_light:[`第一道光`,`把岩窗寺的光送到钟楼`],bell:[`百年一响`,`敲响城里的钟`],waters:[`三闸俱开`,`让镜池涨满水`],ending:[`引光者`,`走完全程`],swift:[`快马`,`二十分钟内走完全程`],lamps:[`长明`,`点亮全部九盏灯`],motes_half:[`拾光`,`拾得一半的光尘`],motes_all:[`一粒不落`,`拾得全部光尘`],court1:[`岩窗寺圆满`,`解开岩窗寺镜庭的十二道光题`],court2:[`柱下城圆满`,`解开柱下城镜庭的十六道光题`],court3:[`白阶圆满`,`解开白阶镜庭的二十道光题`],clean10:[`一步不多`,`十道光题拿到三枚菱辉`],radiance:[`满辉`,`每一道光题都拿到三枚菱辉`],night10:[`长夜十层`,`长夜试炼抵达第十层`],night30:[`不眠者`,`长夜试炼抵达第三十层`],fall:[`不怕高`,`掉下去，然后发现自己回到了安全的地方`],photo:[`留影`,`在留影模式里存下一张图`],daily1:[`今日一题`,`解开一道今日光题`],daily7:[`七日不辍`,`连续七天解开今日光题`],everlit:[`长明`,`三座镜庭全部圆满，让碑从此亮着`]}};function Mp(){try{let e=new URLSearchParams(location.search).get(`lang`);if(e===`en`||e===`zh`)return e}catch{}try{let e=JSON.parse(localStorage.getItem(`lightbearer.settings.v1`)||`{}`);if(e&&(e.lang===`en`||e.lang===`zh`))return e.lang}catch{}return typeof navigator<`u`&&!/^zh/i.test(navigator.language||`zh`)?`en`:`zh`}var Np=Mp(),$=Np===`en`?Ap:jp,Pp=`
@font-face { font-family: 'LB Serif'; src: url('${Zl}fonts/NotoSerifSC-400.woff') format('woff'); font-weight: 400; font-display: block; }
@font-face { font-family: 'LB Serif'; src: url('${Zl}fonts/NotoSerifSC-600.woff') format('woff'); font-weight: 600; font-display: block; }
@font-face { font-family: 'LB Latin'; src: url('${Zl}fonts/Cormorant-500.woff') format('woff'); font-weight: 500; font-display: block; }
@font-face { font-family: 'LB Latin'; src: url('${Zl}fonts/Cormorant-500i.woff') format('woff'); font-weight: 500; font-style: italic; font-display: block; }
@font-face { font-family: 'LB Latin'; src: url('${Zl}fonts/Cormorant-600.woff') format('woff'); font-weight: 600; font-display: block; }
#ui { position: absolute; inset: 0; container-type: size; pointer-events: none; color: #efe0cb; font-family: 'LB Latin', 'LB Serif', serif; font-weight: 400; user-select: none; -webkit-font-smoothing: antialiased; overflow: hidden;
  --gold: #e9c595; --ink: #14110b; --dim: rgba(239,224,203,.62); --line: rgba(233,197,149,.38); }
#ui * { box-sizing: border-box; }
#ui .layer { position: absolute; inset: 0; display: flex; opacity: 0; visibility: hidden; transition: opacity .7s ease, visibility 0s linear .7s; }
#ui .layer.on { opacity: 1; visibility: visible; transition: opacity .7s ease, visibility 0s; }
#ui .click { pointer-events: auto; }
/* fades and bars */
#ui-fade { position: absolute; inset: 0; background: #0b0906; opacity: 0; transition: opacity 1s ease; }
#ui .bar { position: absolute; left: 0; right: 0; height: 0; background: #070604; transition: height 1.1s cubic-bezier(.6,0,.2,1); }
#ui .bar.top { top: 0; } #ui .bar.bot { bottom: 0; }
#ui.letterbox .bar { height: 10.5vh; }
/* loading */
#ui-loading { background: #0b0906; align-items: center; justify-content: center; flex-direction: column; gap: 2.2vh; }
#ui-loading .glyph { width: 9vh; height: 9vh; }
#ui-loading .line { font-family: 'LB Serif'; letter-spacing: .5em; font-size: 1.7vh; color: var(--dim); padding-left: .5em; }
#ui-loading .track { width: 22vh; height: 1px; background: rgba(233,197,149,.18); position: relative; }
#ui-loading .fill { position: absolute; left: 0; top: 0; bottom: 0; width: 0; background: var(--gold); transition: width .3s ease; box-shadow: 0 0 8px rgba(233,197,149,.6); }
/* title */
#ui-title { align-items: stretch; }
#ui-title .left { width: 34vw; min-width: 34vh; padding: 0 0 0 7vw; display: flex; flex-direction: column; justify-content: center; }
#ui-title h1 { font-family: 'LB Serif'; font-weight: 600; font-size: 11.5vh; letter-spacing: .16em; margin: 0; line-height: 1.05; text-shadow: 0 0 5vh rgba(233,197,149,.25), 0 .3vh 1.2vh rgba(0,0,0,.8); }
#ui-title .en { font-family: 'LB Latin'; font-weight: 500; letter-spacing: .62em; font-size: 2.1vh; color: var(--gold); margin: 1.6vh 0 0 .3vh; }
#ui-title .rule { width: 22vh; height: 1px; margin: 3.2vh 0 2.4vh; background: linear-gradient(90deg, var(--gold), rgba(233,197,149,0)); position: relative; }
#ui-title .rule:before { content: ''; position: absolute; left: 0; top: -.45vh; width: .9vh; height: .9vh; border: 1px solid var(--gold); transform: rotate(45deg); background: #14110b; }
#ui-title .tag { font-family: 'LB Serif'; font-size: 1.9vh; letter-spacing: .34em; color: var(--dim); }
#ui-title .menu { margin-top: 6.5vh; display: flex; flex-direction: column; gap: 1.5vh; align-items: flex-start; }
#ui .btn { pointer-events: auto; cursor: pointer; font-family: 'LB Serif'; font-size: 2.35vh; letter-spacing: .42em; color: var(--dim); padding: .7vh 0 .7vh 2.4vh; position: relative; transition: color .25s, letter-spacing .35s, transform .35s; background: none; border: 0; text-align: left; }
#ui .btn:before { content: ''; position: absolute; left: 0; top: 50%; width: .75vh; height: .75vh; margin-top: -.38vh; border: 1px solid var(--line); transform: rotate(45deg) scale(.7); transition: all .3s; }
#ui .btn:hover, #ui .btn.sel { color: #fff3df; letter-spacing: .5em; }
#ui .btn:hover:before, #ui .btn.sel:before { background: var(--gold); border-color: var(--gold); transform: rotate(45deg) scale(1); box-shadow: 0 0 1.2vh rgba(233,197,149,.8); }
#ui .btn.off { opacity: .32; pointer-events: none; }
#ui-title .foot { position: absolute; left: 7vw; bottom: 4.5vh; max-width: 27vw; line-height: 1.9; font-size: 1.45vh; letter-spacing: .3em; color: rgba(239,224,203,.4); font-family: 'LB Serif'; }
/* panels (pause / settings) */
#ui .veil { background: radial-gradient(ellipse at 50% 45%, rgba(11,9,6,.55), rgba(11,9,6,.9)); align-items: center; justify-content: center; backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
#ui .panel { min-width: 46vh; padding: 5vh 6vh 4.4vh; border: 1px solid var(--line); background: linear-gradient(180deg, rgba(26,21,14,.93), rgba(14,12,8,.95)); position: relative; box-shadow: 0 3vh 8vh rgba(0,0,0,.6); }
#ui .panel:before, #ui .panel:after { content: ''; position: absolute; width: 1.6vh; height: 1.6vh; border: 1px solid var(--gold); }
#ui .panel:before { left: -1px; top: -1px; border-right: 0; border-bottom: 0; } #ui .panel:after { right: -1px; bottom: -1px; border-left: 0; border-top: 0; }
#ui .panel h2 { font-family: 'LB Serif'; font-weight: 600; font-size: 3.4vh; letter-spacing: .5em; margin: 0 0 .6vh; padding-left: .5em; text-align: center; }
#ui .panel .orn { height: 2.6vh; margin: 0 auto 3vh; width: 60%; background: linear-gradient(90deg, transparent, var(--line), transparent) center/100% 1px no-repeat; position: relative; }
#ui .panel .orn:before { content: ''; position: absolute; left: 50%; top: 50%; width: .8vh; height: .8vh; margin: -.4vh; background: var(--gold); transform: rotate(45deg); }
#ui .panel .col { display: flex; flex-direction: column; gap: 1.3vh; align-items: center; }
#ui .panel .col .btn { padding-left: 2.6vh; }
#ui .row { display: flex; align-items: center; justify-content: space-between; gap: 5vh; font-family: 'LB Serif'; font-size: 1.95vh; letter-spacing: .22em; margin: 1.7vh 0; color: var(--dim); }
#ui .row .ctl { display: flex; gap: 1.2vh; align-items: center; pointer-events: auto; }
#ui .seg { cursor: pointer; padding: .5vh 1.5vh; border: 1px solid transparent; color: rgba(239,224,203,.45); transition: all .2s; letter-spacing: .25em; }
#ui .seg:hover { color: #fff; } #ui .seg.on { color: var(--ink); background: var(--gold); border-color: var(--gold); }
#ui input[type=range] { -webkit-appearance: none; appearance: none; width: 24vh; height: 1px; background: var(--line); outline: none; cursor: pointer; }
#ui input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 1.3vh; height: 1.3vh; background: var(--gold); transform: rotate(45deg); box-shadow: 0 0 1vh rgba(233,197,149,.6); }
#ui .hint { font-family: 'LB Serif'; font-size: 1.45vh; color: rgba(239,224,203,.4); letter-spacing: .12em; margin-top: 2.6vh; text-align: center; max-width: 60vh; line-height: 1.8; }
/* hud */
#ui-hud { display: block; }
#ui-prompt { position: absolute; left: 50%; bottom: 19vh; transform: translate(-50%, 1vh); display: flex; align-items: center; gap: 1.5vh; padding: 1.2vh 5vh; font-family: 'LB Serif'; font-size: 2.4vh; letter-spacing: .16em; opacity: 0; transition: opacity .25s, transform .3s; text-shadow: 0 0 .4vh rgba(0,0,0,.95), 0 .2vh 1vh rgba(0,0,0,.9); white-space: nowrap; background: radial-gradient(ellipse 50% 50% at 50% 50%, rgba(9,7,4,.8) 0, rgba(9,7,4,.6) 55%, rgba(9,7,4,0) 100%); }
#ui-prompt.on { opacity: 1; transform: translate(-50%, 0); }
#ui-prompt .key { width: 3.6vh; height: 3.6vh; border: 1px solid var(--gold); transform: rotate(45deg); display: flex; align-items: center; justify-content: center; background: rgba(20,17,11,.55); box-shadow: 0 0 1.6vh rgba(233,197,149,.25); }
#ui-prompt .key span { transform: rotate(-45deg); font-family: 'LB Latin'; font-weight: 600; font-size: 2vh; letter-spacing: 0; color: var(--gold); }
#ui-prompt.dim .key { border-color: var(--line); } #ui-prompt.dim { color: var(--dim); }
#ui-obj { position: absolute; left: 3vw; top: 4vh; padding: 1vh 3vh 1vh 1.4vh; background: linear-gradient(90deg, rgba(9,7,4,.72), rgba(9,7,4,.5) 70%, rgba(9,7,4,0)); font-family: 'LB Serif'; font-size: 2.05vh; letter-spacing: .14em; color: rgba(245,232,212,.92); display: flex; align-items: center; gap: 1.4vh; opacity: 0; transform: translateX(-1vh); transition: opacity .8s, transform .8s; text-shadow: 0 .2vh .8vh rgba(0,0,0,.9); }
#ui-obj.on { opacity: 1; transform: none; }
#ui-obj:before { content: ''; width: .8vh; height: .8vh; border: 1px solid var(--gold); transform: rotate(45deg); flex: none; }
#ui-obj.flash:before { background: var(--gold); box-shadow: 0 0 1.4vh var(--gold); }
#ui-lamps { position: absolute; right: 4vw; top: 5vh; font-family: 'LB Serif'; font-size: 1.7vh; letter-spacing: .3em; color: var(--gold); opacity: 0; transition: opacity .8s; text-shadow: 0 .2vh .8vh rgba(0,0,0,.9); }
#ui-lamps.on { opacity: .9; }
#ui-say { position: absolute; left: 50%; bottom: 6vh; transform: translateX(-50%); width: min(132vh, 86vw); padding: 2.2vh 8vh; text-align: center; text-wrap: balance; font-family: 'LB Serif'; font-size: 2.5vh; line-height: 1.9; letter-spacing: .12em; opacity: 0; transition: opacity .9s; text-shadow: 0 0 .4vh rgba(0,0,0,.95), 0 .2vh 1.2vh rgba(0,0,0,.95), 0 0 3vh rgba(0,0,0,.8); white-space: pre-line; background: radial-gradient(ellipse 50% 50% at 50% 50%, rgba(9,7,4,.82) 0, rgba(9,7,4,.66) 50%, rgba(9,7,4,0) 100%); }
#ui-say.on { opacity: 1; }
#ui-dot { position: absolute; left: 50%; top: 50%; width: .5vh; height: .5vh; margin: -.25vh; border-radius: 50%; background: rgba(239,224,203,.5); opacity: 0; transition: opacity .3s, transform .3s; }
#ui-dot.on { opacity: 1; } #ui-dot.hot { transform: scale(1.8); background: var(--gold); }
/* aim reticle */
#ui-aim { align-items: center; justify-content: center; }
#ui-aim .ring { width: 26vh; height: 26vh; border: 1px solid var(--line); border-radius: 50%; position: relative; transition: all .5s; }
#ui-aim .ring:before { content: ''; position: absolute; inset: 9vh; border: 1px solid var(--gold); border-radius: 50%; transition: all .4s; }
#ui-aim .ring:after { content: ''; position: absolute; left: 50%; top: -1.4vh; bottom: -1.4vh; width: 1px; margin-left: -.5px; background: linear-gradient(180deg, var(--gold) 0, transparent 14%, transparent 86%, var(--gold) 100%); }
#ui-aim .ring i { position: absolute; top: 50%; left: -1.4vh; right: -1.4vh; height: 1px; margin-top: -.5px; background: linear-gradient(90deg, var(--gold) 0, transparent 14%, transparent 86%, var(--gold) 100%); }
#ui-aim.near .ring { border-color: var(--gold); } #ui-aim.near .ring:before { inset: 11vh; }
#ui-aim.locked .ring { transform: scale(.6); border-color: #fff; box-shadow: 0 0 6vh rgba(255,230,180,.8); } #ui-aim.locked .ring:before { inset: 12.4vh; background: #fff; }
#ui-aim .tip { position: absolute; bottom: 12vh; left: 0; right: 0; text-align: center; font-family: 'LB Serif'; font-size: 1.8vh; letter-spacing: .28em; color: var(--dim); text-shadow: 0 .2vh 1vh rgba(0,0,0,.9); }
/* chapter card */
#ui-chapter { align-items: center; justify-content: center; flex-direction: column; background: radial-gradient(ellipse at center, rgba(11,9,6,.0) 20%, rgba(11,9,6,.55)); }
#ui-chapter .n { font-family: 'LB Serif'; font-size: 2.2vh; letter-spacing: 1em; color: var(--gold); padding-left: 1em; }
#ui-chapter .name { font-family: 'LB Serif'; font-weight: 600; font-size: 9vh; letter-spacing: .4em; padding-left: .4em; margin: 1.4vh 0 1.2vh; text-shadow: 0 .4vh 3vh rgba(0,0,0,.8); }
#ui-chapter .sub { font-family: 'LB Serif'; font-size: 2vh; letter-spacing: .6em; color: var(--dim); padding-left: .6em; }
#ui-chapter .rule { width: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--gold), transparent); margin: 2.4vh 0; transition: width 1.6s cubic-bezier(.3,0,.1,1) .2s; }
#ui-chapter.on .rule { width: 46vh; }
/* intro / ending narration */
#ui-story { align-items: center; justify-content: center; }
#ui-story .txt { font-family: 'LB Serif'; font-size: 3vh; line-height: 2.1; letter-spacing: .32em; text-align: center; white-space: pre-line; opacity: 0; transition: opacity 1.4s; text-shadow: 0 0 .5vh rgba(0,0,0,.95), 0 .3vh 2vh rgba(0,0,0,.95), 0 0 6vh rgba(0,0,0,.8); max-width: 80vw; padding: 5vh 12vh; background: radial-gradient(ellipse 50% 50% at 50% 50%, rgba(9,7,4,.6) 0, rgba(9,7,4,.38) 45%, rgba(9,7,4,0) 100%); }
#ui-story .txt.on { opacity: 1; }
#ui-skip { position: absolute; right: 4vw; bottom: 4.5vh; font-family: 'LB Serif'; font-size: 1.5vh; letter-spacing: .3em; color: rgba(239,224,203,.4); opacity: 0; transition: opacity .6s; }
#ui-skip.on { opacity: 1; }
/* credits */
#ui-credits { align-items: center; justify-content: center; flex-direction: column; background: linear-gradient(90deg, rgba(11,9,6,.86) 0, rgba(11,9,6,.55) 55%, rgba(11,9,6,.15)); }
#ui-credits .roll { text-align: center; width: 60vh; }
#ui-credits .c { margin: 3.4vh 0; opacity: 0; transform: translateY(1.5vh); transition: opacity 1.2s, transform 1.2s; }
#ui-credits .c.on { opacity: 1; transform: none; }
#ui-credits .k { font-family: 'LB Serif'; font-size: 1.6vh; letter-spacing: .5em; color: var(--gold); margin-bottom: .8vh; }
#ui-credits .v { font-family: 'LB Serif'; font-size: 2.2vh; letter-spacing: .22em; }
#ui-credits .c.big .k { font-size: 6vh; font-weight: 600; color: #efe0cb; letter-spacing: .3em; } #ui-credits .c.big .v { font-family: 'LB Latin'; letter-spacing: .6em; color: var(--gold); font-size: 2vh; }
#ui-credits .stats { margin-top: 2vh; font-family: 'LB Serif'; font-size: 1.7vh; letter-spacing: .3em; color: var(--dim); }
#ui-credits .menu { margin-top: 3vh; display: flex; gap: 6vh; }
#ui-toast { position: absolute; right: 4vw; top: 9.5vh; font-family: 'LB Serif'; font-size: 1.7vh; letter-spacing: .3em; color: var(--gold); opacity: 0; transform: translateY(-.6vh); transition: all .6s; }
#ui-toast.on { opacity: 1; transform: none; }
#ui-trial { position: absolute; left: 50%; top: 3.4vh; transform: translateX(-50%); padding: 1.2vh 7vh; text-align: center; opacity: 0; transition: opacity .6s; text-shadow: 0 0 .4vh rgba(0,0,0,.95), 0 .2vh 1vh rgba(0,0,0,.95); background: radial-gradient(ellipse 50% 50% at 50% 50%, rgba(9,7,4,.8) 0, rgba(9,7,4,.58) 55%, rgba(9,7,4,0) 100%); white-space: nowrap; }
#ui-trial.on { opacity: 1; }
#ui-trial .name { font-family: 'LB Serif'; font-size: 2.3vh; letter-spacing: .2em; color: var(--gold); padding-left: .2em; }
#ui-trial .st { display: inline-block; width: 1vh; height: 1vh; margin: 0 .5vh; border: 1px solid var(--gold); transform: rotate(45deg); position: relative; top: -.1vh; }
#ui-trial .st.on { background: var(--gold); box-shadow: 0 0 1vh rgba(233,197,149,.7); }
#ui-trial .keys { font-family: 'LB Serif'; font-size: 1.8vh; letter-spacing: .1em; color: rgba(245,232,212,.88); margin-top: .9vh; }
#ui-dust { position: absolute; right: 3vw; bottom: 4.5vh; padding: .9vh 2.2vh; background: linear-gradient(270deg, rgba(9,7,4,.7), rgba(9,7,4,0)); font-family: 'LB Serif'; font-size: 2vh; letter-spacing: .16em; color: var(--gold); opacity: 0; transition: opacity .8s; text-shadow: 0 .2vh .8vh rgba(0,0,0,.9); display: flex; align-items: center; gap: 1.1vh; }
#ui-dust.on { opacity: .92; }
#ui-dust:before { content: ''; width: .7vh; height: .7vh; background: var(--gold); transform: rotate(45deg); box-shadow: 0 0 1.2vh var(--gold); }
#ui-mark { position: absolute; left: 0; top: 0; width: 0; height: 0; opacity: 0; transition: opacity .5s; pointer-events: none; }
#ui-mark.on { opacity: .85; }
#ui-mark.big.on { opacity: 1; } #ui-mark.big i { left: -1.4vh; top: -1.4vh; width: 2.8vh; height: 2.8vh; border-width: 2px; animation: lbpulse 1.2s ease-in-out infinite; } #ui-mark.big span { left: -14vh; width: 28vh; top: 2.6vh; font-family: 'LB Serif'; font-size: 2vh; }
#ui-mark i { position: absolute; left: -.7vh; top: -.7vh; width: 1.4vh; height: 1.4vh; border: 1px solid var(--gold); transform: rotate(45deg); box-shadow: 0 0 1.4vh rgba(233,197,149,.5); }
#ui-mark i:after { content: ''; position: absolute; inset: .35vh; background: var(--gold); }
#ui-mark span { position: absolute; left: -6vh; width: 12vh; top: 1.8vh; text-align: center; font-family: 'LB Latin'; font-size: 1.5vh; letter-spacing: .12em; color: var(--gold); text-shadow: 0 .1vh .6vh rgba(0,0,0,.9); }
#ui-journal { margin: 0 0 2.6vh; width: 52vh; }
#ui-journal .jr { display: flex; align-items: center; justify-content: space-between; font-family: 'LB Serif'; font-size: 1.75vh; letter-spacing: .2em; color: var(--dim); margin: 1.05vh 0; gap: 2vh; }
#ui-journal .jr b { font-weight: 400; color: #efe0cb; letter-spacing: .12em; }
#ui-journal .bar { flex: 1; height: 1px; background: rgba(233,197,149,.16); position: relative; margin: 0 1vh; }
#ui-journal .bar i { position: absolute; left: 0; top: -1px; height: 3px; background: var(--gold); box-shadow: 0 0 .8vh rgba(233,197,149,.5); }
#ui-journal .rank { text-align: center; font-family: 'LB Serif'; font-size: 2.4vh; letter-spacing: .5em; color: var(--gold); padding-left: .5em; margin-bottom: .5vh; }
#ui-journal .next { text-align: center; font-family: 'LB Serif'; font-size: 1.4vh; letter-spacing: .2em; color: rgba(239,224,203,.42); margin-bottom: 1.6vh; }
#ui-click { position: absolute; left: 0; right: 0; bottom: 12vh; text-align: center; font-family: 'LB Serif'; font-size: 1.8vh; letter-spacing: .4em; color: var(--dim); opacity: 0; transition: opacity .5s; }
#ui-click.on { opacity: 1; animation: lbpulse 2.4s ease-in-out infinite; }
@keyframes lbpulse { 50% { opacity: .45; } }

#ui-deeds .panel { min-width: 138vh; padding-top: 4vh; padding-bottom: 3.4vh; }
#ui-deeds .grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5vh 4vh; margin-bottom: 2.6vh; }
#ui-photo { align-items: flex-end; justify-content: center; }
#ui-photo .hint { margin-bottom: 4.5vh; padding: 1.1vh 5vh; font-family: 'LB Serif'; font-size: 1.8vh; letter-spacing: .12em; color: rgba(245,232,212,.9); text-shadow: 0 0 .4vh rgba(0,0,0,.95); background: radial-gradient(ellipse 50% 50% at 50% 50%, rgba(9,7,4,.78) 0, rgba(9,7,4,.55) 55%, rgba(9,7,4,0) 100%); white-space: nowrap; }
#ui-photo-msg { position: absolute; left: 0; right: 0; top: 6vh; text-align: center; font-family: 'LB Serif'; font-size: 2.2vh; letter-spacing: .3em; color: var(--gold); opacity: 0; transition: opacity .5s; text-shadow: 0 0 .5vh rgba(0,0,0,.95), 0 .2vh 1vh rgba(0,0,0,.9); }
#ui-photo-msg.on { opacity: 1; }
#ui-flash { position: absolute; inset: 0; background: #fff; opacity: 0; pointer-events: none; }
#ui-flash.go { animation: lbflash .45s ease-out; }
@keyframes lbflash { 0% { opacity: .55; } 100% { opacity: 0; } }
#ui-deeds .d { display: flex; gap: 1.6vh; align-items: flex-start; font-family: 'LB Serif'; opacity: .4; }
#ui-deeds .d.on { opacity: 1; }
#ui-deeds .d i { flex: none; width: .95vh; height: .95vh; margin-top: .75vh; border: 1px solid var(--gold); transform: rotate(45deg); }
#ui-deeds .d.on i { background: var(--gold); box-shadow: 0 0 1vh rgba(233,197,149,.7); }
#ui-deeds .d b { font-weight: 400; font-size: 1.95vh; letter-spacing: .14em; color: #efe0cb; display: block; }
#ui-deeds .d span { font-size: 1.5vh; letter-spacing: .06em; color: var(--dim); display: block; margin-top: .35vh; line-height: 1.5; }

#ui.lang-en .btn { letter-spacing: .2em; text-transform: uppercase; font-size: 2.15vh; } #ui.lang-en .btn:hover, #ui.lang-en .btn.sel { letter-spacing: .26em; }
#ui.lang-en #ui-title h1 { letter-spacing: .03em; font-size: 10.5vh; } #ui.lang-en #ui-title .en { letter-spacing: .42em; font-size: 1.8vh; } #ui.lang-en #ui-title .tag { letter-spacing: .08em; font-style: italic; font-size: 2.5vh; }
#ui.lang-en #ui-say { letter-spacing: .02em; font-size: 2.9vh; line-height: 1.55; } #ui.lang-en #ui-story .txt { letter-spacing: .03em; font-size: 3.7vh; line-height: 1.7; font-style: italic; }
#ui.lang-en #ui-obj { letter-spacing: .05em; font-size: 2.35vh; } #ui.lang-en #ui-prompt { letter-spacing: .06em; font-size: 2.7vh; }
#ui.lang-en #ui-chapter .n { letter-spacing: .6em; text-transform: uppercase; } #ui.lang-en #ui-chapter .name { letter-spacing: .06em; font-size: 8vh; } #ui.lang-en #ui-chapter .sub { letter-spacing: .14em; font-style: italic; font-size: 2.7vh; }
#ui.lang-en .panel h2 { letter-spacing: .2em; text-transform: uppercase; } #ui.lang-en .row { letter-spacing: .06em; font-size: 2.25vh; } #ui.lang-en .seg { letter-spacing: .06em; } #ui.lang-en .hint { letter-spacing: .03em; font-size: 1.75vh; }
#ui.lang-en #ui-trial .name { letter-spacing: .08em; font-size: 2.7vh; } #ui.lang-en #ui-trial .keys { letter-spacing: .03em; font-size: 1.95vh; }
#ui.lang-en #ui-journal .jr { letter-spacing: .05em; font-size: 2.05vh; } #ui.lang-en #ui-journal .rank { letter-spacing: .24em; text-transform: uppercase; } #ui.lang-en #ui-journal .next { letter-spacing: .05em; font-size: 1.7vh; }
#ui.lang-en #ui-credits .k { letter-spacing: .3em; text-transform: uppercase; } #ui.lang-en #ui-credits .v { letter-spacing: .05em; font-size: 2.6vh; } #ui.lang-en #ui-credits .stats { letter-spacing: .08em; font-size: 2vh; }
#ui.lang-en #ui-title .foot, #ui.lang-en #ui-click, #ui.lang-en #ui-toast, #ui.lang-en #ui-lamps, #ui.lang-en #ui-dust, #ui.lang-en #ui-loading .line, #ui.lang-en #ui-aim .tip { letter-spacing: .1em; font-size: 1.9vh; }
#ui.lang-en #ui-deeds .d b { letter-spacing: .05em; font-size: 2.2vh; } #ui.lang-en #ui-deeds .d span { letter-spacing: .02em; font-size: 1.75vh; }
`,Fp=`<svg viewBox="0 0 100 100" fill="none" stroke="#e9c595" stroke-width="1.2"><circle cx="50" cy="50" r="30"/><circle cx="50" cy="50" r="22" opacity=".5"/><path d="M50 8 L92 50 L50 92 L8 50 Z"/><path d="M50 24 v52 M38 40 q12 -14 24 0 v22 h-24 z" opacity=".8"/><circle cx="50" cy="48" r="5" fill="#e9c595" stroke="none"><animate attributeName="opacity" values="1;.35;1" dur="2.4s" repeatCount="indefinite"/></circle></svg>`,Ip=(e,t,n)=>{let r=document.createElement(e);return t&&(r.className=t),n!=null&&(r.innerHTML=n),r},Lp=class{constructor(){let e=e=>e.replace(/(\d)vh/g,`$1cqh`).replace(/(\d)vw/g,`$1cqw`),t=e=>Np===`en`?e.replace(/font-family: 'LB Serif'/g,`font-family: 'LB Latin', 'LB Serif'`):e,n=document.createElement(`style`);n.textContent=t(e(Pp)),document.head.appendChild(n);let r=this.root=Ip(`div`);r.id=`ui`,r.classList.toggle(`lang-en`,Np===`en`),document.documentElement.lang=Np===`en`?`en`:`zh-Hans`,document.title=Np===`en`?`Lightbearer`:`引光者 · Lightbearer`,(document.getElementById(`stage`)||document.body).appendChild(r),r.innerHTML=e(`
<div id="ui-hud" class="layer"><div id="ui-obj"></div><div id="ui-lamps"></div><div id="ui-toast"></div><div id="ui-dot"></div>
  <div id="ui-prompt"><div class="key"><span>E</span></div><div class="t"></div></div><div id="ui-say"></div><div id="ui-click">${$.clickToPlay}</div>
  <div id="ui-trial"><div class="name"></div><div class="keys"></div></div><div id="ui-dust"></div><div id="ui-mark"><i></i><span></span></div></div>
<div id="ui-photo" class="layer"><div class="hint">${$.photo.hint}</div></div><div id="ui-photo-msg"></div><div id="ui-flash"></div>
<div id="ui-aim" class="layer"><div class="ring"><i></i></div><div class="tip">${$.aimHint}</div></div>
<div class="bar top"></div><div class="bar bot"></div>
<div id="ui-chapter" class="layer"><div class="n"></div><div class="rule"></div><div class="name"></div><div class="sub"></div></div>
<div id="ui-story" class="layer"><div class="txt"></div></div>
<div id="ui-fade"></div>
<div id="ui-title" class="layer"><div class="left"><h1>${$.title}</h1><div class="en">${$.subtitle}</div><div class="rule"></div><div class="tag">${$.tagline}</div>
  <div class="menu"><button class="btn" data-a="continue">${$.menu.continue}</button><button class="btn" data-a="start">${$.menu.start}</button><button class="btn" data-a="daily">${$.menu.daily}</button><button class="btn" data-a="endless">${$.menu.endless}</button><button class="btn" data-a="settings">${$.menu.settings}</button><button class="btn" data-a="credits">${$.menu.credits}</button></div></div>
  <div class="foot">${$.controls}</div></div>
<div id="ui-credits" class="layer"><div class="roll"></div><div class="stats"></div><div class="menu"><button class="btn" data-a="again">${$.endMenu.again}</button><button class="btn" data-a="title">${$.endMenu.title}</button></div></div>
<div id="ui-pause" class="layer veil"><div class="panel"><h2>${$.paused}</h2><div class="orn"></div><div id="ui-journal"></div><div class="col"><button class="btn" data-a="resume">${$.menu.resume}</button><button class="btn" data-a="deeds">${$.menu.achievements}</button><button class="btn" data-a="settings">${$.menu.settings}</button><button class="btn" data-a="toTitle">${$.menu.toTitle}</button></div><div class="hint">${$.controls}</div></div></div>
<div id="ui-deeds" class="layer veil"><div class="panel"><h2>${$.menu.achievements}</h2><div class="orn"></div><div class="grid"></div><div class="col"><button class="btn" data-a="deedsBack">${$.menu.back}</button></div></div></div>
<div id="ui-settings" class="layer veil"><div class="panel"><h2>${$.settings.title}</h2><div class="orn"></div>
  <div class="row"><span>${$.settings.quality}</span><div class="ctl" data-s="quality"><span class="seg" data-v="low">${$.settings.qLow}</span><span class="seg" data-v="medium">${$.settings.qMedium}</span><span class="seg" data-v="high">${$.settings.qHigh}</span></div></div>
  <div class="row"><span>${$.settings.master}</span><div class="ctl"><input type="range" min="0" max="100" data-s="master"></div></div>
  <div class="row"><span>${$.settings.music}</span><div class="ctl"><input type="range" min="0" max="100" data-s="music"></div></div>
  <div class="row"><span>${$.settings.sfx}</span><div class="ctl"><input type="range" min="0" max="100" data-s="sfx"></div></div>
  <div class="row"><span>${$.settings.sens}</span><div class="ctl"><input type="range" min="20" max="250" data-s="sens"></div></div>
  <div class="row"><span>${$.settings.lang}</span><div class="ctl" data-s="lang"><span class="seg" data-v="zh">中文</span><span class="seg" data-v="en">English</span></div></div>
  <div class="row"><span>${$.settings.fullscreen}</span><div class="ctl" data-s="fullscreen"><span class="seg on" data-v="0">${$.settings.off}</span><span class="seg" data-v="1">${$.settings.on}</span></div></div>
  <div class="row"><span>${$.settings.invert}</span><div class="ctl" data-s="invert"><span class="seg" data-v="0">${$.settings.off}</span><span class="seg" data-v="1">${$.settings.on}</span></div></div>
  <div class="hint">${$.settings.hintQuality}<br>${$.settings.langHint}</div><div class="col" style="margin-top:2.4vh"><button class="btn" data-a="back">${$.menu.back}</button></div></div></div>
<div id="ui-skip">Esc</div>
<div id="ui-loading" class="layer on"><div class="glyph">${Fp}</div><div class="line"></div><div class="track"><div class="fill"></div></div></div>`),this.$=e=>r.querySelector(e),this.handlers={},r.addEventListener(`click`,e=>{let t=e.target.closest(`[data-a]`);if(t){this.handlers.action?.(t.dataset.a,t);return}let n=e.target.closest(`.seg`);if(n){let e=n.parentElement.dataset.s;if(e===`fullscreen`){try{n.dataset.v===`1`?document.documentElement.requestFullscreen?.():document.fullscreenElement&&document.exitFullscreen?.()}catch{}return}this.handlers.setting?.(e,n.dataset.v)}}),document.addEventListener(`fullscreenchange`,()=>{let e=document.fullscreenElement?`1`:`0`;r.querySelectorAll(`[data-s="fullscreen"] .seg`).forEach(t=>t.classList.toggle(`on`,t.dataset.v===e))}),r.addEventListener(`input`,e=>{let t=e.target.dataset?.s;t&&this.handlers.setting?.(t,e.target.value)}),r.addEventListener(`mouseover`,e=>{e.target.closest(`.btn`)&&this.handlers.hover?.()}),this.$(`#ui-loading .line`).textContent=$.loading[Math.random()*$.loading.length|0],this._sayT=0,this._toastT=0}on(e,t){this.handlers[e]=t}show(e,t=!0){this.$(e).classList.toggle(`on`,t)}visible(e){return this.$(e).classList.contains(`on`)}progress(e){this.$(`#ui-loading .fill`).style.width=Math.round(e*100)+`%`}fade(e,t=`#0b0906`,n=1){let r=this.$(`#ui-fade`);r.style.transitionDuration=n+`s`,r.style.background=t,r.style.opacity=e}letterbox(e){this.root.classList.toggle(`letterbox`,e)}prompt(e,t=!1){let n=this.$(`#ui-prompt`);e?(n.querySelector(`.t`).textContent=e,n.classList.toggle(`dim`,t),n.classList.add(`on`)):n.classList.remove(`on`)}objective(e){let t=this.$(`#ui-obj`);this._obj!==e&&(this._obj=e,t.classList.remove(`on`),clearTimeout(this._objT),this._objT=setTimeout(()=>{e&&(t.textContent=e,t.classList.add(`on`,`flash`),setTimeout(()=>t.classList.remove(`flash`),1600))},e?700:0))}lamps(e,t){let n=this.$(`#ui-lamps`);n.textContent=$.say.lampCount(e,t),n.classList.add(`on`),clearTimeout(this._lampT),this._lampT=setTimeout(()=>n.classList.remove(`on`),5e3)}say(e,t=5.5){let n=this.$(`#ui-say`);n.textContent=e,n.classList.add(`on`),clearTimeout(this._sayTo),this._sayTo=setTimeout(()=>n.classList.remove(`on`),t*1e3)}toast(e,t=3.2){let n=this.$(`#ui-toast`);n.textContent=e,n.classList.add(`on`),clearTimeout(this._toT),this._toT=setTimeout(()=>n.classList.remove(`on`),t*1e3)}dot(e,t=!1){let n=this.$(`#ui-dot`);n.classList.toggle(`on`,e),n.classList.toggle(`hot`,t)}story(e){let t=this.$(`#ui-story .txt`);e?(t.classList.remove(`on`),setTimeout(()=>{t.textContent=e,t.classList.add(`on`)},t.textContent?900:30)):t.classList.remove(`on`)}chapter(e){let t=$.chapters[e];this.$(`#ui-chapter .n`).textContent=$.chapterN(t.n),this.$(`#ui-chapter .name`).textContent=t.name,this.$(`#ui-chapter .sub`).textContent=t.sub,this.show(`#ui-chapter`,!0)}aim(e){let t=this.$(`#ui-aim`);t.classList.toggle(`on`,!!e),t.classList.toggle(`near`,e===`near`||e===`locked`),t.classList.toggle(`locked`,e===`locked`),t.querySelector(`.tip`).textContent=e===`locked`?$.aimLocked:$.aimHint}setSettings(e,t){e={...e,lang:Np};for(let t of[`quality`,`invert`,`lang`])this.root.querySelectorAll(`[data-s="${t}"] .seg`).forEach(n=>n.classList.toggle(`on`,String(e[t])===n.dataset.v));for(let t of[`master`,`music`,`sfx`,`sens`]){let n=this.root.querySelector(`input[data-s="${t}"]`);n&&document.activeElement!==n&&(n.value=e[t])}if(t!=null&&this.root.querySelector(`[data-a="continue"]`).classList.toggle(`off`,!t),e.__done!=null)for(let t of[`endless`,`daily`])this.root.querySelector(`[data-a="${t}"]`).style.display=e.__done?``:`none`}trialLabel(e){if(e===this._trial)return;this._trial=e;let t=this.$(`#ui-trial`);e?(t.querySelector(`.name`).innerHTML=e.replace(/\{(\d)\}/,(e,t)=>[0,1,2].map(e=>`<i class="st${e<t?` on`:``}"></i>`).join(``)),t.classList.add(`on`)):t.classList.remove(`on`)}trialHint(e){this.$(`#ui-trial .keys`).textContent=e||``}dust(e,t=!0){let n=this.$(`#ui-dust`);n.textContent=$.dust(e),n.classList.add(`on`),clearTimeout(this._dustT),t&&(this._dustT=setTimeout(()=>n.classList.remove(`on`),6e3))}marker(e,t,n,r=!1){let i=this.$(`#ui-mark`);i.classList.toggle(`big`,r),e==null?i.classList.remove(`on`):(i.style.transform=`translate(${e}px, ${t}px)`,i.querySelector(`span`).textContent=n,i.classList.add(`on`))}journal(e){let t=(e,t,n)=>`<div class="jr"><span>${e}</span><div class="bar"><i style="width:${Math.round(100*Math.min(1,t/Math.max(1,n)))}%"></i></div><b>${t} / ${n}</b></div>`;this.$(`#ui-journal`).innerHTML=`<div class="rank">${e.rank}</div><div class="next">${e.next}</div>`+t($.journal.motes,e.motes,e.motesTotal)+t($.journal.lamps,e.lamps,e.lampsTotal)+t($.journal.stars,e.stars,e.starsTotal)+t($.journal.deeds,e.deeds,e.deedsTotal)+e.courts.map(e=>t(e.name,e.n,e.m)).join(``)+`<div class="jr"><span>${$.journal.endless}</span><b>${e.endless}</b></div>`}tagline(e){this.$(`#ui-title .tag`).textContent=e}photoFlash(e){let t=this.$(`#ui-flash`),n=this.$(`#ui-photo-msg`);t.classList.remove(`go`),t.offsetWidth,t.classList.add(`go`),n.textContent=e,n.classList.add(`on`),clearTimeout(this._phT),this._phT=setTimeout(()=>n.classList.remove(`on`),2200)}deeds(e){this.$(`#ui-deeds .grid`).innerHTML=Object.keys($.deeds).map(t=>`<div class="d${e[t]?` on`:``}"><i></i><div><b>${$.deeds[t][0]}</b><span>${$.deeds[t][1]}</span></div></div>`).join(``)}credits(e){let t=this.$(`#ui-credits .roll`);t.innerHTML=``,$.credits.forEach(([e,n],r)=>{let i=Ip(`div`,`c`+(r===0?` big`:``),`<div class="k">${e}</div><div class="v">${n}</div>`);t.appendChild(i),setTimeout(()=>i.classList.add(`on`),600+r*900)}),this.$(`#ui-credits .stats`).textContent=e||``,this.show(`#ui-credits`,!0)}},Rp=class{constructor(e){this.canvas=e,this.keys=new Set,this.pressed=new Set,this.mouseDX=0,this.mouseDY=0,this.locked=!1,this.sensitivity=1,this.enabled=!0,this.virtual={x:0,y:0,sprint:!1},this.onLockChange=null;let t={KeyW:`fwd`,ArrowUp:`fwd`,KeyS:`back`,ArrowDown:`back`,KeyA:`left`,ArrowLeft:`left`,KeyD:`right`,ArrowRight:`right`,ShiftLeft:`sprint`,ShiftRight:`sprint`,KeyE:`use`,KeyF:`use`,Enter:`confirm`,Space:`jump`,Escape:`pause`,KeyP:`photo`,Tab:`journal`,KeyQ:`cancel`,Backspace:`cancel`,KeyH:`hint`,KeyR:`reset`,KeyM:`marker`,KeyX:`take`,KeyC:`take`,BracketLeft:`prev`,BracketRight:`next`,Comma:`prev`,Period:`next`};this.map=t,window.addEventListener(`keydown`,e=>{let n=t[e.code];n&&((e.code===`Tab`||e.code===`Space`||e.code.startsWith(`Arrow`))&&e.preventDefault(),this.keys.has(n)||this.pressed.add(n),this.keys.add(n))}),window.addEventListener(`keyup`,e=>{let n=t[e.code];n&&this.keys.delete(n)}),window.addEventListener(`blur`,()=>this.keys.clear()),document.addEventListener(`mousemove`,e=>{this.locked&&(this.mouseDX+=e.movementX,this.mouseDY+=e.movementY)}),document.addEventListener(`mousedown`,e=>{this.locked&&e.button===0&&this.pressed.add(`use`),this.locked&&e.button===2&&this.pressed.add(`take`)}),document.addEventListener(`contextmenu`,e=>e.preventDefault()),this.wheel=0,window.addEventListener(`wheel`,e=>{this.locked&&(this.wheel+=Math.sign(e.deltaY))},{passive:!0}),document.addEventListener(`pointerlockchange`,()=>{this.locked=document.pointerLockElement===e,this.onLockChange?.(this.locked)})}lock(){if(this.locked)return;let e=e=>{e&&e.catch&&e.catch(()=>{})};try{let t=this.canvas.requestPointerLock({unadjustedMovement:!0});t&&t.catch&&t.catch(()=>{try{e(this.canvas.requestPointerLock())}catch{}})}catch{try{e(this.canvas.requestPointerLock())}catch{}}}unlock(){this.locked&&document.exitPointerLock()}down(e){return this.enabled&&this.keys.has(e)}hit(e){return this.pressed.has(e)}axes(){if(!this.enabled)return{x:0,y:0,sprint:!1};let e=this._pad||{x:0,y:0,sprint:!1},t=+!!this.keys.has(`right`)-!!this.keys.has(`left`)+this.virtual.x+e.x,n=+!!this.keys.has(`fwd`)-!!this.keys.has(`back`)+this.virtual.y+e.y,r=Math.hypot(t,n);return r>1&&(t/=r,n/=r),{x:t,y:n,sprint:this.keys.has(`sprint`)||this.virtual.sprint||e.sprint}}pollPad(e){let t=navigator.getGamepads?navigator.getGamepads():[],n=null;for(let e of t)if(e&&e.connected&&e.mapping===`standard`){n=e;break}let r=this._pad||={x:0,y:0,sprint:!1,btn:[]};if(!n){r.active&&=(r.x=r.y=0,r.sprint=!1,!1);return}let i=e=>Math.abs(e)<.16?0:(e-Math.sign(e)*.16)/.84;r.x=i(n.axes[0]),r.y=-i(n.axes[1]),r.sprint=!!n.buttons[10]?.pressed||n.buttons[7]?.value>.5,r.active=!0;let a=i(n.axes[2]),o=i(n.axes[3]);this.mouseDX+=a*Math.abs(a)*1500*e,this.mouseDY+=o*Math.abs(o)*1100*e;let s={0:[`use`,`confirm`],1:[`cancel`],2:[`take`],3:[`journal`],4:[`prev`],5:[`next`],9:[`pause`],8:[`marker`],12:[`hint`],13:[`reset`],6:[`jump`]};for(let e in s){let t=!!n.buttons[e]?.pressed;if(t&&!r.btn[e])for(let t of s[e])this.pressed.add(t);r.btn[e]=t}n.buttons[0]?.pressed&&r.jumpHeld,this.padUsed=!0}consumeWheel(){let e=this.wheel;return this.wheel=0,e}consumeLook(){let e={x:this.mouseDX*this.sensitivity,y:this.mouseDY*this.sensitivity};return this.mouseDX=0,this.mouseDY=0,e}endFrame(){this.pressed.clear()}},zp=new H,Bp=.36,Vp=1.64,Hp=3.5,Up=6.2,Wp=class{constructor(e,t){this.camera=e,this.col=t,this.pos=new H,this.vel=new H,this.yaw=0,this.pitch=0,this.lookVX=0,this.lookVY=0,this.grounded=!0,this.bobT=0,this.bobAmp=0,this.dip=0,this.dipV=0,this.eyeY=0,this.stepAcc=0,this.speed=0,this.onStep=null,this.onLand=null,this.fovBase=60,this.fov=60,this.frozen=!1,this.guard=!0,this.roll=0,this.fallFrom=0,this.bigFall=!1,this.onJump=null}teleport(e,t,n,r=this.yaw,i=0){this.pos.set(e,t,n),this.vel.set(0,0,0),this.yaw=r,this.pitch=i,this.grounded=!0;let a=this.col.groundY(e,t+1,n,4);a!=null&&(this.pos.y=a),this.eyeY=this.pos.y+Vp,this.syncCamera(0)}lookAt(e,t,n){let r=e-this.pos.x,i=t-(this.pos.y+Vp),a=n-this.pos.z;this.yaw=Math.atan2(-r,-a),this.pitch=Math.atan2(i,Math.hypot(r,a))}update(e,t){let n=this.frozen?{x:0,y:0}:t.consumeLook(),r=.0021;this.lookVX=this.lookVX*Math.exp(-e*34)+n.x*r*.45,this.lookVY=this.lookVY*Math.exp(-e*34)+n.y*r*.45,this.yaw-=n.x*r*.55+this.lookVX,this.pitch-=n.y*r*.55+this.lookVY,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch));let i=this.frozen?{x:0,y:0,sprint:!1}:t.axes();!this.frozen&&this.grounded&&t.hit(`jump`)&&(this.vel.y=5.4,this.grounded=!1,this.fallFrom=this.pos.y,this.onJump?.());let a=Math.sin(this.yaw),o=Math.cos(this.yaw),s=-a*i.y+o*i.x,c=-o*i.y+-a*i.x,l=Math.hypot(i.x,i.y)>.01,u=i.sprint&&i.y>.2?Up:Hp,d=s*u,f=c*u,p=this.grounded?l?26:34:5,m=d-this.vel.x,h=f-this.vel.z,g=Math.hypot(m,h);if(g>1e-5){let t=Math.min(1,p*e/g);this.vel.x+=m*t,this.vel.z+=h*t}let _=Math.hypot(this.vel.x,this.vel.z)*e,v=Math.max(1,Math.ceil(_/.12)),y=e/v;for(let e=0;e<v;e++)this._step(y);this.speed=Math.hypot(this.vel.x,this.vel.z);let b=this.speed>4.5?2.5:1.55;this.grounded&&this.speed>.4?(this.bobT+=this.speed*e/b,this.stepAcc+=this.speed*e/(b*.5),this.stepAcc>=1&&(--this.stepAcc,this.onStep?.(Math.min(1,this.speed/Up)),this.dipV-=.22*Math.min(1,this.speed/Up))):this.stepAcc=Math.min(this.stepAcc,.6);let x=this.grounded?Math.min(1,this.speed/Hp):0;this.bobAmp+=(x-this.bobAmp)*Math.min(1,e*8),this.dipV+=(-this.dip*90-this.dipV*14)*e,this.dip+=this.dipV*e;let S=-i.x*.012*Math.min(1,this.speed/Hp);this.roll+=(S-this.roll)*Math.min(1,e*6),this.fov+=(this.fovBase+(this.speed>4.6?4:0)-this.fov)*Math.min(1,e*4),this.syncCamera(e)}_step(e){let t=this.col,n=this.pos,r=n.x,i=n.z;n.x+=this.vel.x*e,n.z+=this.vel.z*e;for(let e=0;e<2;e++)for(let e of[.62,1.1,1.58]){let r=t.dist(n.x,n.y+e,n.z)-Bp;if(r<0){t.normal(n.x,n.y+e,n.z,zp),zp.y=0;let i=zp.length();if(i<1e-4)continue;zp.multiplyScalar(1/i),n.x-=zp.x*r,n.z-=zp.z*r;let a=this.vel.x*zp.x+this.vel.z*zp.z;a<0&&(this.vel.x-=zp.x*a,this.vel.z-=zp.z*a)}}if(this.guard&&this.grounded){let e=n.x-r,a=n.z-i,o=Math.hypot(e,a);if(o>1e-5){let s=n.x+e/o*.5,c=n.z+a/o*.5,l=t.groundY(s,n.y+.7,c,3.2);(l==null||l<n.y-1.7)&&(n.x=r,n.z=i,this.vel.x*=.2,this.vel.z*=.2)}}if(this.grounded){let a=t.groundY(n.x,n.y+.62,n.z,1.25);if(a!=null&&a>n.y+.05){let e=Math.hypot(n.x-r,n.z-i);if(e>1e-4){let o=t.groundY(r,n.y+.62,i,1.25);if(o!=null&&a-o>e*1.75&&a-o>.02){let s=!1;if(a-n.y<=.38){let o=(n.x-r)/e,c=(n.z-i)/e,l=t.groundY(n.x+o*.35,a+.62,n.z+c*.35,1.25);s=l!=null&&Math.abs(l-a)<.12}s||(n.x=r,n.z=i,a=o,this.vel.x*=.5,this.vel.z*=.5)}}}a!=null&&a>n.y-.6?(n.y+=(a-n.y)*Math.min(1,e*22),this.vel.y=0):(this.grounded=!1,this.vel.y=0,this.fallFrom=n.y)}else{this.vel.y-=19*e,n.y+=this.vel.y*e;let r=t.groundY(n.x,n.y+.62,n.z,.75);if(r!=null&&n.y<=r+.02&&this.vel.y<=0){n.y=r,this.grounded=!0;let e=Math.min(1,-this.vel.y/9);this.dipV-=1.6*e,this.vel.y=0,this.onLand?.(e),this.fallFrom-n.y>6.5&&(this.bigFall=!0)}n.y<-60&&(this.fell=!0)}}syncCamera(e){let t=this.camera,n=this.pos.y+Vp;this.eyeY+=(n-this.eyeY)*(e>0?Math.min(1,e*16):1),Math.abs(n-this.eyeY)>1.2&&(this.eyeY=n);let r=Math.sin(this.bobT*Math.PI*2)*.028*this.bobAmp,i=Math.cos(this.bobT*Math.PI)*.018*this.bobAmp,a=Math.sin(this.yaw),o=Math.cos(this.yaw);t.position.set(this.pos.x+o*i,this.eyeY+r+this.dip*.05,this.pos.z-a*i),t.rotation.order=`YXZ`,t.rotation.set(this.pitch+this.dip*.012,this.yaw,this.roll+i*.25),Math.abs(t.fov-this.fov)>.01&&(t.fov=this.fov,t.updateProjectionMatrix())}get eye(){return this.camera.position}forward(e=new H){let t=Math.cos(this.pitch);return e.set(-Math.sin(this.yaw)*t,Math.sin(this.pitch),-Math.cos(this.yaw)*t)}};function Gp(e){let t=e.world,n=t.terracesH,r=e.ui,i=()=>e.flags.r3||={sluice:[0,0,0]},a=()=>i().sluice.reduce((e,t)=>e+t,0)/3,o=0,s=e=>{let t=n.basin;t.water.visible=e>.01,t.water.position.y=t.y0+(t.y1-t.y0)*e,t.water.updateMatrixWorld(!0)},c=(e,t)=>{let r=n.sluices[e];r.open=t,r.gate.position.y=r.y0+t*.95,r.gate.updateMatrixWorld(!0),n.flowMats[e].uniforms.uAmount.value=t};return{spawn:{pos:n.spawn,yaw:Math.atan2(-(Q.path[1][0]-Q.path[0][0]),-(Q.path[1][2]-Q.path[0][2])),pitch:.12},safe:()=>{let t=e.player.pos;n.pathInfo(t.x,t.z);let r=Q.path[0];for(let e of Q.path)Math.hypot(e[0]-t.x,e[2]-t.z)<Math.hypot(r[0]-t.x,r[2]-t.z)&&(r=e);return[r[0],n.heightAt(r[0],r[2])+.1,r[2]]},groundKind(e){let t=n.waterAt(e.x,e.z);return t>-900&&e.y<t+.05?`water`:`stone`},enter(l){let u=i();t.showBeam(0,!0),t.showBeam(1,!0),t.showBeam(2,!0),t.showBeam(3,!!u.done),t.showBeam(4,!!u.done),u.sluice.forEach((e,t)=>c(t,+!!e)),o=a(),s(o),t.placeRider(u.echoGone?null:[Q.court[0]+9,Q.court[1]+.02,Q.court[2]+12],[-.5,-.86]),t.setAwake(+!!u.done),n.lamps.forEach((n,r)=>{let i=e.lamps.has(`r3_`+r);n.lit=i,n.light.on=i,n.light.level=+!!i,n.flame.intensity=i?2.6:0,n.glow.intensity=i?.55:0,t.sprites.write(n.flame),t.sprites.write(n.glow)}),n.lamps.forEach((t,n)=>e.addInteract({id:`r3_lamp`+n,pos:t.pos,reach:2.3,prompt:()=>t.lit?null:$.prompt.lamp,use:()=>e.lightLamp(`r3_`+n,t)})),n.steles.forEach((t,n)=>e.addInteract({id:`stele`+n,pos:t,reach:2.6,prompt:()=>u[`st`+n]?null:$.prompt.read,use:()=>{u[`st`+n]=1,r.say($.say.stele,7),e.audio?.sfx(`note`)}})),n.sluices.forEach((t,n)=>e.addInteract({id:`sluice`+n,pos:t.pos,reach:2.8,prompt:()=>u.sluice[n]?null:$.prompt.sluice,use:()=>{let t=u.sluice.reduce((e,t)=>e+t,0);u.sluice[n]=1,e.audio?.sfx(`sluice`);let i=e.time;e.until(()=>{let t=Math.min(1,(e.time-i)/1.8);return c(n,t*t*(3-2*t)),t>=1}),r.say($.say.sluice(t),6),t===2&&(e.award(`waters`),e.wait(7).then(()=>{r.say($.say.poolFull,6),e.audio?.sting(`relay`),e.setStep(`r3_mast`),e.save()})),e.step===`r3_climb`&&e.setStep(`r3_sluice`),e.save()}})),e.addInteract({id:`back2`,pos:new H(n.spawn[0]+2.5,n.spawn[1]+1.2,n.spawn[2]+5),reach:3.2,prompt:()=>$.back.toR2,use:()=>e.travelQuick(1,{pos:[0,.2,-748],yaw:Math.PI,pitch:0})}),e.addInteract({id:`mast`,pos:n.mast.pos,reach:3,prompt:()=>u.done?null:a()>=1?$.prompt.mast:null,use:()=>{t.showBeam(3,!0),e.startAim({center:n.basin.center,toLight:n.mast.top.clone().sub(n.basin.center).normalize(),target:n.medallion,yaw:n.mast.yaw,pitch:n.mast.pitch,beam:t.beams[4],startOffset:[.32,-.3],plane:{point:n.medallion,normal:t.steleNormal},camPos:e.camera.position.clone(),onLock:async()=>{u.done=!0,e.save(),e._endAim(!0),e.ending()}})}})},objectivePos(){let t=i();if(t.done)return null;if(a()>=1)return n.mast.pos;if(e.step===`r3_climb`)return n.basin.center;let r=t.sluice.findIndex(e=>!e);return r>=0?n.sluices[r].pos:null},start(t){let n=i();e.setStep(a()>=1?`r3_mast`:n.sluice.some(e=>e)?`r3_sluice`:`r3_climb`),t||e.wait(2).then(()=>r.say($.say.r3_arrive,8))},update(n){let c=i(),l=e.player.pos,u=a();if(o<u&&(o=Math.min(u,o+n/18),s(o)),e.step===`r3_climb`&&Math.hypot(l.x-Q.court[0],l.z-Q.court[2])<Q.courtR+4&&(e.setStep(`r3_sluice`),r.say($.say.mastReady,7)),!c.echoGone&&t.rider.mesh.visible&&Math.hypot(l.x-t.rider.mesh.position.x,l.z-t.rider.mesh.position.z)<14){c.echoGone=!0,e.audio?.sfx(`scatter`);let n=e.time;e.until(()=>{let r=Math.min(1,(e.time-n)/2.4);return t.rider.uniforms.uDissolve.value=r,r>=1}).then(()=>{t.rider.mesh.visible=!1})}}}}async function Kp(e){let t=e.world,n=e.ui,r=t.terracesH;e.state=`ending`,e.player.frozen=!0,n.prompt(null),n.objective(``),n.dot(!1),n.aim(null),e.audio?.setScene(`ending`),e.audio?.sfx(`awake`),t.showBeam(3,!0),t.showBeam(4,!0);let i=e.time;e.until(()=>{let n=Math.min(1,(e.time-i)/14);return t.setAwake(n),n>=1});let a=r.medallion,o=Q.court;n.show(`#ui-story`,!0);let s=e=>()=>n.story($.ending[e]);t.placeRider([ku.rider[0],ku.rider[1]+.02,ku.rider[2]],[-.56,-.83]),await e.playCine([{dur:9,cut:!0,from:{pos:[o[0]+20,o[1]+2.2,o[2]+26],target:[a.x,a.y-40,a.z],fov:58},to:{pos:[o[0]+14,o[1]+3,o[2]+18],target:[a.x,a.y,a.z],fov:52},onStart:s(0)},{dur:9,cut:!0,from:{pos:[330,300,-1050],target:[-40,300,-1420],fov:40},to:{pos:[260,330,-980],target:[-40,320,-1420],fov:36},onStart:()=>{n.story(``)}},{dur:9,cut:!0,from:{pos:[-46,9,-690],target:[10,34,-610],fov:55},to:{pos:[-40,16,-676],target:[4,42,-606],fov:50},onStart:()=>{n.story($.ending[1]),t.birds?.flushAll(new H(-20,0,-650),200),e.audio?.sfx(`bells`),t.setRegion(1)}},{dur:12,cut:!0,from:{pos:[.4,150.4,1.5],target:[-1.5,150.6,-60],fov:54},to:{pos:[0,150,0],target:[0,149.3,-30],fov:50},onStart:()=>{n.story($.ending[2]),t.setRegion(0);let r=e.time;e.wait(5.5).then(()=>{e.audio?.sfx(`scatter`),e.until(()=>{let n=Math.min(1,(e.time-r-5.5)/4);return t.rider.uniforms.uDissolve.value=n,n>=1}).then(()=>{t.rider.mesh.visible=!1})})}},{dur:7,from:{pos:[0,150,0],target:[0,149.3,-30],fov:50},onStart:s(3)}],{skippable:!1}),n.story(``),await e.wait(1.2),n.show(`#ui-story`,!1),n.letterbox(!1),e.mode=`title`,e.titleT=0;try{localStorage.setItem(`lightbearer.done.v1`,JSON.stringify({time:Math.round(e.playTime),lamps:e.lamps.size,motes:e.motes||0}))}catch{}e.meta.done=!0,e.saveMeta(),e.award(`ending`),e.playTime<1200&&e.award(`swift`),e.clearSave(),e.showCredits(!0),e.audio?.setScene(`credits`)}var qp=[1,0,-1,0],Jp=[0,1,0,-1],Yp=[[3,2,1,0],[1,0,3,2]];function Xp(e){let{w:t,h:n,cells:r}=e,i=[],a=Array(e.recv.length).fill(!1),o=[],s=!1,c=new Set,l=[{x:e.emitter.x,y:e.emitter.y,d:e.emitter.d,sx:e.emitter.x-qp[e.emitter.d]*.9,sy:e.emitter.y-Jp[e.emitter.d]*.9}],u=0;for(;l.length&&u++<400;){let e=l.pop(),{x:u,y:d,d:f}=e,p=e.sx,m=e.sy;for(let e=0;e<64;e++){if(u<0||d<0||u>=t||d>=n){i.push([p,m,u-qp[f]*.45,d-Jp[f]*.45]);break}let e=(u+d*t)*4+f;if(c.has(e)){i.push([p,m,u,d]);break}c.add(e);let h=r[u+d*t];if(h.t===0){u+=qp[f],d+=Jp[f];continue}if(i.push([p,m,u,d]),h.t===1)break;if(h.t===4){a[h.i]=!0,o.push([u,d]);break}if(h.t===5){s=!0,h.hit=!0,o.push([u,d]);break}let g=Yp[h.rot][f];o.push([u,d]),h.t===3&&l.push({x:u+qp[f],y:d+Jp[f],d:f,sx:u,sy:d}),p=u,m=d,f=g,u+=qp[f],d+=Jp[f]}}return{segs:i,lit:a,idol:s,hits:o}}function Zp(e){for(let t of e.cells)t.hit=!1;let t=Xp(e);return{...t,solved:!t.idol&&t.lit.every(e=>e)}}function Qp(e,t,n=0){let{w:r,h:i}=t;for(let n=0;n<400;n++){let a=Ol(e*7919+n*104729+13>>>0),o=Array.from({length:r*i},()=>({t:0,rot:0,fixed:!1,sol:0,i:-1})),s=new Uint8Array(r*i),c=new Int8Array(r*i).fill(-1),l=(e,t)=>o[e+t*r],u=(e,t)=>e>=0&&t>=0&&e<r&&t<i,d=(e,t,n,r)=>{for(let i=1;i<=r;i++){let r=e+qp[n]*i,a=t+Jp[n]*i;if(!u(r,a)||l(r,a).t!==0)return!1}return!0},f=[],p=(e,t,n,i)=>{let o=0;for(let p=0;p<80;p++){if(!u(e,t))return!1;let p=l(e,t),m=e+t*r;if(p.t!==0)return!1;let h=s[m]!==0;if(o++,!h&&o>=2){if(i>0&&a()<.42){let r=(a()<.5?[n+1&3,n+3&3]:[n+3&3,n+1&3]).find(n=>d(e,t,n,2));if(r!=null){let a=Yp[0][n]===r?0:1;p.t=2,p.rot=a,p.sol=a,s[m]=3,c[m]=n,n=r,i--,o=0,e+=qp[n],t+=Jp[n];continue}}else if(i===0&&(a()<.45||!d(e,t,n,1)))return p.t=4,p.i=f.length,f.push(m),s[m]=3,!0}s[m]|=n&1?2:1,c[m]<0&&(c[m]=n),e+=qp[n],t+=Jp[n]}return!1},m=a()*4|0,h,g,_;if(m===0?(h=0,g=1+(a()*(i-2)|0),_=0):m===1?(h=r-1,g=1+(a()*(i-2)|0),_=2):m===2?(g=0,h=1+(a()*(r-2)|0),_=1):(g=i-1,h=1+(a()*(r-2)|0),_=3),!p(h,g,_,t.turns))continue;let v=!0;for(let e=1;e<t.recv&&v;e++){let e=!1;for(let n=0;n<30&&!e;n++){let n=a()*r*i|0,l=o[n];if(l.t!==0||s[n]!==1&&s[n]!==2)continue;let u=n%r,m=n/r|0,h=c[n],g=a()<.5?h+1&3:h+3&3;if(!d(u,m,g,2))continue;let _=o.map(e=>({...e})),v=s.slice(),y=c.slice(),b=f.length;if(l.t=3,l.rot=Yp[0][h]===g?0:1,l.sol=l.rot,s[n]=3,p(u+qp[g],m+Jp[g],g,Math.max(0,t.turns-2-(a()*2|0))))e=!0;else{for(let e=0;e<o.length;e++)Object.assign(o[e],_[e]);s.set(v),c.set(y),f.length=b}}e||(v=!1)}if(!v)continue;let y=(e,t)=>{for(let n=0,c=0;n<e&&c<200;c++){let e=a()*r*i|0;o[e].t!==0||s[e]||(t(o[e]),s[e]=4,n++)}};y(t.walls||0,e=>{e.t=1}),y(t.idols||0,e=>{e.t=5}),y(t.decoys||0,e=>{e.t=2,e.rot=a()*2|0,e.sol=-1});let b={w:r,h:i,cells:o,emitter:{x:h,y:g,d:_},recv:f,seed:e};if(!Zp(b).solved)continue;let x=[];if(t.place){let e=[];o.forEach((t,n)=>{t.t===2&&t.sol>=0&&e.push(n)});for(let t=e.length-1;t>0;t--){let n=a()*(t+1)|0;[e[t],e[n]]=[e[n],e[t]]}for(let n of e.slice(0,Math.min(t.place,Math.max(0,e.length-(t.keep??0)))))x.push({o:n,x:n%r,y:n/r|0,rot:o[n].sol}),Object.assign(o[n],{t:0,rot:0,sol:0})}let S=0,C=0;for(let e of o)(e.t===2||e.t===3)&&(e.sol>=0&&a()<(t.fixed||0)?e.fixed=!0:(C++,e.sol>=0?a()<.72&&(e.rot=1-e.sol,S++):e.rot=a()*2|0));if(!(C+x.length<1||S+x.length<Math.min(2,C+x.length))&&!Zp(b).solved)return b.par=S+x.length*2,b.turnable=C,b.answers=x,b.stock=x.length,b}if(n>6)throw Error(`puzzle generator failed for seed `+e);return Qp(e+1,{...t,recv:Math.max(1,t.recv-1),turns:Math.max(1,t.turns-1),idols:0,fixed:0},n+1)}var $p=[{id:`r1`,name:`岩窗寺镜庭`,size:5,count:12},{id:`r2`,name:`柱下城镜庭`,size:6,count:16},{id:`r3`,name:`白阶镜庭`,size:7,count:20}],em=$p.reduce((e,t)=>e+t.count,0);function tm(e,t){let n=t/Math.max(1,$p[e].count-1),r=Math.round;return e===0?{w:5,h:5,recv:t>=6?2:1,turns:1+r(n*3),decoys:t<2?0:r(n*3),walls:t>=3?1+r(n*2):0,idols:0,fixed:t<2?.5:.15,place:+(t>=9),keep:1}:e===1?{w:6,h:6,recv:1+ +(t>=3)+ +(t>=11),turns:2+r(n*3),decoys:2+r(n*3),walls:2+r(n*2),idols:t>=6?1+ +(t>=12):0,fixed:.12,place:1+ +(t>=5)+ +(t>=12),keep:1}:{w:7,h:7,recv:2+ +(t>=8),turns:3+r(n*3),decoys:3+r(n*4),walls:2+r(n*3),idols:1+r(n*3),fixed:.1,place:2+ +(t>=6)+ +(t>=13),keep:0}}function nm(e){let t=Math.min(9,5+Math.floor(e/4));return{w:t,h:t,recv:Math.min(4,1+Math.floor((e+2)/4)),turns:Math.min(7,2+Math.floor(e/3)),decoys:Math.min(9,2+Math.floor(e/2)),walls:Math.min(7,1+Math.floor(e/3)),idols:Math.min(6,Math.floor(e/3)),fixed:.1,place:Math.min(5,1+Math.floor(e/3)),keep:0}}var rm=(e,t)=>1e3*(e+1)+t*37+5;function im(e,t,n){return t<=e.par+1&&n===0?3:t<=e.par*2+3&&n<=1?2:1}function am(e=new Date){let t=e.getFullYear(),n=e.getMonth(),r=e.getDate(),i=Math.floor(Date.UTC(t,n,r)/864e5);return{key:`${t}-${String(n+1).padStart(2,`0`)}-${String(r).padStart(2,`0`)}`,day:i,dow:e.getDay(),month:n+1,date:r,seed:7e5+i}}function om(e){let t=e===0||e===6,n=e>=3&&e<=5,r=t?8:7;return{w:r,h:r,recv:t?3:2+ +!!n,turns:t?6:n?5:4,decoys:t?7:n?6:5,walls:t?5:4,idols:t?4:n?3:2,fixed:.1,place:t?4:n?3:2,keep:0}}var sm=`lightbearer.save.v1`,cm=`lightbearer.settings.v1`,lm=`lightbearer.meta.v1`,um={quality:`medium`,master:80,music:70,sfx:80,sens:100,invert:0,marker:1},dm=[0,15,50,110,190,290],fm=new H,pm=new H,mm=e=>e*e*(3-2*e),hm=class{constructor(e,t,n,r){this.gfx=e,this.world=t,this.camera=n,this.ui=r,this.input=new Rp(e.canvas),this.player=new Wp(n,t.col),this.state=`title`,this.mode=`title`,this.time=0,this.playTime=0,this.frame=0,this.interactables=[],this.flags={},this.lamps=new Set,this.lampTotal=9,this.region=0,this.step=``,this.tasks=[],this.regions=[],this.settings={...um,...this._load(cm)},this.meta={trials:{},endless:{cur:0,best:0},motes:[],dust:0,done:!1,...this._load(lm)},this.courts=[],this.court=null,this.moteStreak=0,this.moteT=0,this.perf={samples:[],worst:0},this.audio=null,this.aim=null,this.cine=null,this.titleT=0,this._bindUI(),this.applySettings(),this.player.onStep=e=>this.audio?.footstep(this.groundKind(),e),this.player.onLand=e=>this.audio?.footstep(this.groundKind(),.6+e)}_load(e){try{return JSON.parse(localStorage.getItem(e)||`null`)||{}}catch{return{}}}hasSave(){let e=this._load(sm);return!!(e&&e.step)}save(){if(this.freeplay)return;let e={v:1,region:this.region,step:this.step,flags:this.flags,lamps:[...this.lamps],playTime:Math.round(this.playTime)};try{localStorage.setItem(sm,JSON.stringify(e))}catch{}this.ui.toast($.saved)}clearSave(){try{localStorage.removeItem(sm)}catch{}}saveMeta(){try{localStorage.setItem(lm,JSON.stringify(this.meta))}catch{}}award(e){let t=this.meta.deeds||={};if(!t[e]&&$.deeds[e]){t[e]=Date.now(),this.saveMeta(),this.ui.toast($.deedGot($.deeds[e][0]),5.5),this.audio?.sting(`rank`);try{window.__onAchievement?.(e)}catch{}}}rank(){let e=0;for(let t=0;t<dm.length;t++)this.meta.dust>=dm[t]&&(e=t);return e}addDust(e){let t=this.rank();this.meta.dust+=e,this.saveMeta(),this.ui.dust(this.meta.dust),this.rank()>t&&(this.ui.say($.rankUp($.ranks[this.rank()]),5),this.audio?.sting(`rank`))}journalData(){let e=this.rank(),t=dm[e+1],n=this.world.motes?.length||0;return{rank:$.ranks[e],next:t?$.journal.next(t-this.meta.dust):``,motes:this.meta.motes.length,motesTotal:n,lamps:this.lamps.size,lampsTotal:this.lampTotal,courts:this.courts.map(e=>({name:e.name,n:Math.min(e.progress(),e.def.count),m:e.def.count})),endless:this.meta.endless.best,stars:this.courts.reduce((e,t)=>e+t.starSum(),0),starsTotal:em*3,deeds:Object.keys(this.meta.deeds||{}).length,deedsTotal:Object.keys($.deeds).length}}applySettings(){let e=this.settings;this.input.sensitivity=e.sens/100*1,this.invertY=Number(e.invert)===1,this.gfx.q.name!==e.quality&&(this.gfx.setQuality(e.quality),this.world.onQuality?.(this.gfx.q)),this.audio?.setVolumes(e.master/100,e.music/100,e.sfx/100);try{localStorage.setItem(cm,JSON.stringify(e))}catch{}this.ui.setSettings({...e,__done:this.meta.done},this.hasSave())}_bindUI(){let e=this.ui;e.on(`hover`,()=>this.audio?.ui(`hover`)),e.on(`setting`,(e,t)=>{if(e===`lang`){if(t!==Np){this.settings.lang=t;try{localStorage.setItem(cm,JSON.stringify(this.settings))}catch{}location.reload()}}else this.settings[e]=e===`quality`?t:Number(t),this.applySettings(),this.audio?.ui(`tick`)}),e.on(`action`,t=>{this.audio?.unlock(),this.audio?.ui(`select`),t===`start`?this.newGame():t===`continue`?this.continueGame():t===`endless`?this.startFreeplay():t===`daily`?this.startFreeplay(1,!0):t===`settings`?(this._settingsFrom=this.state,e.show(`#ui-pause`,!1),e.show(`#ui-settings`,!0)):t===`deeds`?(e.deeds(this.meta.deeds||{}),e.show(`#ui-pause`,!1),e.show(`#ui-deeds`,!0)):t===`deedsBack`?(e.show(`#ui-deeds`,!1),e.show(`#ui-pause`,!0)):t===`back`?(e.show(`#ui-settings`,!1),this.state===`pause`&&e.show(`#ui-pause`,!0)):t===`resume`?this.resume():t===`toTitle`||t===`title`?this.toTitle():t===`credits`?this.showCredits(!1):t===`again`&&(this.clearSave(),this.toTitle(!0))}),this.gfx.canvas.addEventListener(`click`,()=>{this.state===`play`&&!this.input.locked&&this.input.lock()}),this.input.onLockChange=e=>{this.ui.show(`#ui-click`,!e&&this.state===`play`&&!this.headless)}}wait(e){return new Promise(t=>this.tasks.push({t:this.time+e,res:t}))}until(e){return new Promise(t=>this.tasks.push({fn:e,res:t}))}_runTasks(){for(let e=this.tasks.length-1;e>=0;e--){let t=this.tasks[e];(t.fn&&t.fn()||t.t!=null&&this.time>=t.t)&&(this.tasks.splice(e,1),t.res())}}async skippable(e){let t=this.time+e;this._skip=!1,await this.until(()=>this.time>=t||this._skip);let n=this._skip;return this._skip=!1,n}enterTitle(){this.state=`title`,this.mode=`title`,this.ui.show(`#ui-loading`,!1),this.ui.show(`#ui-hud`,!1),this.ui.show(`#ui-title`,!0),this.ui.setSettings({...this.settings,__done:this.meta.done},this.hasSave()),this.ui.fade(0,`#0b0906`,1.6),this.world.setRegion?.(0,this);for(let e of this.world.motes||[])e.sprite.intensity=0,this.world.sprites.write(e.sprite);this.meta.everlit&&(this.world.setEverlit(!0),this.ui.tagline($.taglineLit)),this.audio?.setScene(`title`)}toTitle(e=!1){this.ui.fade(1,`#0b0906`,.8),setTimeout(()=>location.reload(),900)}async newGame(){if(this.state===`title`){this.clearSave(),this.state=`intro`,this.ui.show(`#ui-title`,!1),this.ui.letterbox(!0),this.ui.show(`#ui-skip`,!0),this.audio?.setScene(`intro`),this.ui.show(`#ui-story`,!0),await this.wait(1.2);for(let e of $.intro)if(this.ui.story(e),await this.skippable(4.6))break;this.ui.story(``),await this.wait(1),this.ui.show(`#ui-story`,!1),this.ui.show(`#ui-skip`,!1),this.flags={},this.lamps=new Set,this.playTime=0,await this.beginRegion(0,!1)}}async continueGame(){if(this.state!==`title`)return;let e=this._load(sm);e.step&&(this.state=`intro`,this.ui.show(`#ui-title`,!1),this.ui.fade(1,`#0b0906`,.9),await this.wait(1),this.flags=e.flags||{},this.lamps=new Set(e.lamps||[]),this.playTime=e.playTime||0,await this.beginRegion(e.region||0,!0,e.step))}async beginRegion(e,t,n=null,r=null){this.region=e;let i=this.regions[e];this.interactables=[],this.world.setRegion?.(e,this),this.audio?.setScene(`r`+(e+1)),this.world.setEverlit(!1),i.enter(t,n),(this.visited||={})[e]=!0;for(let t of this.world.motes||[])t.got=this.meta.motes.includes(t.id),t.sprite.intensity=t.region===e&&!t.got?1.2:0,this.world.sprites.write(t.sprite);this.court=this.courts.find(t=>t.o.region===e)||null,this.court&&(this.court.dailyMode=!!this.dailySession&&this.court.o.index===1,this.court.load()),this.meta.everlit&&this.freeplay&&this.world.setEverlit(!0),this.mode=`player`,this.player.frozen=!0;let a=r||i.spawn;this.player.teleport(a.pos[0],a.pos[1],a.pos[2],a.yaw,a.pitch||0),this.gfx.resetAdaptation(),this.autoK=null,this.ui.letterbox(!0),this.ui.chapter(e),this.ui.fade(0,`#0b0906`,1.8),await this.wait(3.6),this.ui.show(`#ui-chapter`,!1),this.ui.letterbox(!1),await this.wait(.9),this.state=`play`,this.player.frozen=!1,this.ui.show(`#ui-hud`,!0),this.ui.dot(!0),this.headless||this.input.lock(),this.ui.show(`#ui-click`,!this.input.locked&&!this.headless),i.start?.(t),this.court?.dailyMode&&this.wait(1.5).then(()=>this.ui.say(this.court.solved?$.trial.dailyAlready:$.trial.dailyIntro,9)),this.ui.dust(this.meta.dust),this.save()}setStep(e,t=$.obj[e]){this.step=e,this.ui.objective(t||``)}pause(){this.state===`play`&&this.mode!==`photo`&&(this.ui.journal(this.journalData()),this.state=`pause`,this.input.unlock(),this.ui.show(`#ui-pause`,!0),this.ui.show(`#ui-click`,!1),this.audio?.duck(!0))}resume(){this.state===`pause`&&(this.state=`play`,this.ui.show(`#ui-pause`,!1),this.ui.show(`#ui-settings`,!1),this.ui.show(`#ui-deeds`,!1),this.headless||this.input.lock(),this.audio?.duck(!1))}showCredits(e){this.state=e?`credits`:`title-credits`,this.ui.show(`#ui-title`,!1);let t=Math.floor(this.playTime/60),n=Math.floor(this.playTime%60);this.ui.credits(e?$.stats.fmt(t,n,this.lamps.size,this.lampTotal):``),this.ui.$(`#ui-credits [data-a="again"]`).style.display=e?``:`none`}addInteract(e){return e.reach=e.reach||2.5,this.interactables.push(e),e}removeInteract(e){this.interactables=this.interactables.filter(t=>t.id!==e)}_focus(){let e=this.player.eye,t=this.player.forward(fm),n=null,r=1e9;for(let i of this.interactables){let a=i.prompt();if(!a)continue;pm.copy(i.pos).sub(e);let o=pm.length();if(o>i.reach)continue;let s=pm.dot(t)/Math.max(o,1e-4);if(s<(o<1.2?.2:.72))continue;let c=o*(2-s);c<r&&(r=c,n=i,n._text=a)}return n}lightLamp(e,t){this.lamps.has(e)||(this.lamps.add(e),t.lit=!0,t.light.on=!0,t.flame.intensity=2.6,t.glow.intensity=.55,this.world.sprites.write(t.flame),this.world.sprites.write(t.glow),this.audio?.sfx(`lamp`),this.ui.lamps(this.lamps.size,this.lampTotal),this.save(),this.lamps.size>=this.lampTotal&&this.award(`lamps`))}startAim(e){let t=fm.copy(e.target).sub(e.plane?e.camPos:e.center).normalize(),n=Math.atan2(-t.x,-t.z),r=Math.asin(t.y);this.aim={...e,yaw0:n,pitch0:r,ry:n+(e.startOffset?.[0]??.34),rp:r+(e.startOffset?.[1]??.16),lockT:0,locked:!1,t:0,R:new H,from:this.camera.position.clone(),fromQ:this.camera.quaternion.clone(),fov0:this.camera.fov},this.mode=`aim`,this.player.frozen=!0,this.input.consumeLook(),this.ui.aim(`far`),this.ui.prompt(null),this.ui.dot(!1),e.beam.uniforms.uIntensity.value=.25,e.beam.uniforms.uReveal.value=1,e.beam.mesh.visible=!0,this.audio?.sfx(`crank`)}_updateAim(e){let t=this.aim;if(t.t+=e,!t.locked){let n=this.input.consumeLook();t.ry-=n.x*85e-5,t.rp-=n.y*85e-5*(this.invertY?-1:1),t.ry+=(+!!this.input.down(`left`)-!!this.input.down(`right`))*e*.25,t.rp+=(+!!this.input.down(`fwd`)-!!this.input.down(`back`))*e*.25,t.ry=Math.max(t.yaw0-.9,Math.min(t.yaw0+.9,t.ry)),t.rp=Math.max(t.pitch0-.5,Math.min(t.pitch0+.5,t.rp)),Math.abs(n.x)+Math.abs(n.y)>2&&this.frame%9==0&&this.audio?.sfx(`creak`)}let n=Math.cos(t.rp);t.R.set(-Math.sin(t.ry)*n,Math.sin(t.rp),-Math.cos(t.ry)*n);let r=this.camera,i=mm(Math.min(1,t.t/1.4));if(t.plane){let e=t.R.clone(),n=e.dot(t.plane.normal),a=Math.abs(n)>1e-4?fm.copy(t.plane.point).sub(t.camPos).dot(t.plane.normal)/n:300,o=t.hit||=new H;o.copy(t.camPos).addScaledVector(e,Math.max(20,Math.min(600,a))),t.locked&&o.copy(t.target),t.beam.set([t.center.x,t.center.y,t.center.z],[o.x,o.y,o.z]),r.position.lerpVectors(t.from,t.camPos,i);let s=new kt().setFromRotationMatrix(new $t().lookAt(t.camPos,fm.copy(t.camPos).add(e),r.up));r.quaternion.slerpQuaternions(t.fromQ,s,i),r.fov=t.fov0+(46-t.fov0)*i,r.updateProjectionMatrix(),t.R.copy(o).sub(t.center).normalize()}else{let e=fm.copy(t.toLight).add(t.R).normalize();t.yaw.rotation.y=Math.atan2(e.x,e.z),t.pitch.rotation.x=-Math.asin(e.y),t.yaw.updateMatrixWorld(!0);let n=t.locked?t.center.distanceTo(t.target):1400;t.beam.set([t.center.x,t.center.y,t.center.z],[t.center.x+t.R.x*n,t.center.y+t.R.y*n,t.center.z+t.R.z*n]);let a=pm.copy(t.center).addScaledVector(t.R,-(t.back??2.6));a.y+=t.lift??.75,r.position.lerpVectors(t.from,a,i);let o=new kt().setFromRotationMatrix(new $t().lookAt(a,fm.copy(a).addScaledVector(t.R,50).setY(a.y+t.R.y*50-1.2),r.up));r.quaternion.slerpQuaternions(t.fromQ,o,i),r.fov=t.fov0+(30-t.fov0)*i,r.updateProjectionMatrix()}let a=fm.copy(t.target).sub(t.center).normalize(),o=Math.acos(Math.min(1,a.dot(t.R)));if(!t.locked){this.ui.aim(o<.07?`near`:`far`),t.beam.uniforms.uIntensity.value=.75+.6*Math.max(0,1-o/.25);let n=pm.copy(t.target).project(r),i=n.z>1,a=n.x,s=n.y;i&&(a=-a,s=-1);let c=.88,l=Math.max(Math.abs(a)/c,Math.abs(s)/c,1);(l>1||i)&&(a/=l,s/=l,i&&(s=-.88));let u=this.gfx.canvas;if(this.ui.marker((a*.5+.5)*u.clientWidth,(-s*.5+.5)*u.clientHeight,$.aimTarget,!0),t.t>1.2&&o<.16){let n=Math.min(1,e*3.2*(1-o/.16)+e*.6);t.ry+=(t.yaw0-t.ry)*n,t.rp+=(t.pitch0-t.rp)*n}o<.03&&t.t>1.2?t.lockT+=e:t.lockT=0,t.lockT>.35||t.forceLock?this._lockAim():(this.input.hit(`cancel`)||this.input.hit(`pause`))&&this._endAim(!1)}}async _lockAim(){let e=this.aim;e.locked=!0,this.ui.marker(null);let t=fm.copy(e.target).sub(e.plane?e.camPos:e.center).normalize();e.ry=Math.atan2(-t.x,-t.z),e.rp=Math.asin(t.y),this.ui.aim(`locked`),this.audio?.sfx(`lock`),e.beam.uniforms.uIntensity.value=1.6,e.beam.uniforms.uReveal.value=0;let n=this.time,r=2.6;await this.until(()=>(e.beam.uniforms.uReveal.value=Math.min(1,(this.time-n)/r),this.time-n>=r)),e.beam.uniforms.uIntensity.value=1,await e.onLock?.(),this._endAim(!0)}_endAim(e){let t=this.aim;t&&(e||(t.beam.mesh.visible=!1),this.ui.aim(null),this.ui.marker(null),this.aim=null,this.mode=`player`,this.player.frozen=!1,this.camera.fov=this.player.fov,this.camera.updateProjectionMatrix(),this.ui.dot(!0))}async playCine(e,{skippable:t=!0}={}){let n=this.mode;this.mode=`cine`,this.player.frozen=!0,this.ui.letterbox(!0),this.ui.prompt(null),this.ui.dot(!1),t&&this.ui.show(`#ui-skip`,!0),this._skip=!1;for(let n of e){let e=this.time;if(this.cine={s:n,t0:e},n.say&&this.ui.say(n.say,Math.min(n.dur-.5,7)),n.onStart&&n.onStart(),n.cut&&this.gfx.resetAdaptation(),await this.until(()=>this.time-e>=n.dur||t&&this._skip),t&&this._skip)break}this.cine=null,this.ui.show(`#ui-skip`,!1),this.mode=n}_updateCine(){let e=this.cine;if(!e)return;let t=e.s,n=Math.min(1,(this.time-e.t0)/t.dur),r=t.linear?n:mm(n),i=t.from,a=t.to||t.from,o=this.camera;o.position.set(i.pos[0]+(a.pos[0]-i.pos[0])*r,i.pos[1]+(a.pos[1]-i.pos[1])*r,i.pos[2]+(a.pos[2]-i.pos[2])*r),fm.set(i.target[0]+(a.target[0]-i.target[0])*r,i.target[1]+(a.target[1]-i.target[1])*r,i.target[2]+(a.target[2]-i.target[2])*r),o.up.set(0,1,0),o.lookAt(fm),o.fov=(i.fov||45)+((a.fov||i.fov||45)-(i.fov||45))*r,o.updateProjectionMatrix(),t.onUpdate?.(n)}async travel(e){if(this.state!==`play`)return;this.state=`travel`,this.player.frozen=!0,this.ui.prompt(null),this.ui.objective(``),this.ui.dot(!1),this.audio?.sfx(`depart`),this.ui.fade(1,`#0b0906`,1.2),await this.wait(1.4);let t=this.world.travelShots?.(e);if(t?.length){this.world.setRegion?.(e,this),this.gfx.resetAdaptation(),this.ui.show(`#ui-hud`,!0);let n=this.playCine(t);await this.wait(.3),this.ui.fade(0,`#0b0906`,1.4),await n,this.ui.fade(1,`#0b0906`,1),await this.wait(1.1)}await this.beginRegion(e,!1)}walkTo(e,t,{sprint:n=!0,tol:r=.45,timeout:i=25}={}){let a=this.time;return this.until(()=>{let o=this.player.pos,s=e-o.x,c=t-o.z,l=Math.hypot(s,c);return l<r||this.time-a>i||this.state!==`play`||this.mode!==`player`?(this.input.virtual.y=0,this.input.virtual.sprint=!1,!0):(this.player.yaw=Math.atan2(-s,-c),this.player.pitch+=(-.12-this.player.pitch)*.1,this.input.virtual.y=1,this.input.virtual.sprint=n&&l>2,!1)}).then(()=>{let n=this.player.pos;return Math.hypot(e-n.x,t-n.z)<r+.3})}async useAt(e,t,n){this.player.lookAt(e,t,n),this.player.syncCamera(0),await this.wait(.15),this.input.pressed.add(`use`),await this.wait(.15)}enterPhoto(){if(this.mode!==`player`||this.state!==`play`)return;let e=this.camera;this.photo={yaw:this.player.yaw,pitch:this.player.pitch,fov:e.fov,pos:e.position.clone(),origin:e.position.clone(),hint:!0},this.mode=`photo`,this.player.frozen=!0,this.input.consumeLook(),this.input.consumeWheel(),this.ui.show(`#ui-hud`,!1),this.ui.show(`#ui-photo`,!0),this.ui.marker(null),this.audio?.ui(`select`)}exitPhoto(){this.mode===`photo`&&(this.mode=`player`,this.player.frozen=!1,this.photo=null,this.ui.show(`#ui-hud`,!0),this.ui.show(`#ui-photo`,!1),this.camera.up.set(0,1,0),this.camera.fov=this.player.fov,this.camera.updateProjectionMatrix(),this.player.syncCamera(0))}_updatePhoto(e){let t=this.photo,n=this.input,r=this.camera,i=n.consumeLook(),a=.0021*(t.fov/60);t.yaw-=i.x*a,t.pitch=Math.max(-1.5,Math.min(1.5,t.pitch-i.y*a*(this.invertY?-1:1)));let o=n.axes(),s=(o.sprint?16:4.5)*e,c=Math.sin(t.yaw),l=Math.cos(t.yaw),u=Math.cos(t.pitch);t.pos.x+=(-c*u*o.y+l*o.x)*s,t.pos.z+=(-l*u*o.y-c*o.x)*s,t.pos.y+=(Math.sin(t.pitch)*o.y+ +!!n.down(`jump`)-+!!n.down(`take`))*s,fm.copy(t.pos).sub(t.origin),fm.length()>90&&t.pos.copy(t.origin).addScaledVector(fm.normalize(),90);let d=this.world.col,f=d.dist(t.pos.x,t.pos.y,t.pos.z);f<.3&&(d.normal(t.pos.x,t.pos.y,t.pos.z,pm),t.pos.addScaledVector(pm,.3-f)),t.fov=Math.max(12,Math.min(100,t.fov+n.consumeWheel()*3+(n.hit(`next`)?-6:0)+(n.hit(`prev`)?6:0))),r.position.copy(t.pos),r.rotation.set(t.pitch,t.yaw,0,`YXZ`),Math.abs(r.fov-t.fov)>.01&&(r.fov=t.fov,r.updateProjectionMatrix()),n.hit(`hint`)&&(t.hint=!t.hint,this.ui.show(`#ui-photo`,t.hint)),(n.hit(`use`)||n.hit(`confirm`))&&(this._snap=!0),(n.hit(`photo`)||n.hit(`pause`)||n.hit(`cancel`))&&this.exitPhoto()}_savePhoto(){let e=new Date,t=e=>String(e).padStart(2,`0`),n=`lightbearer-${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}-${t(e.getHours())}${t(e.getMinutes())}${t(e.getSeconds())}.png`;this.gfx.canvas.toBlob(e=>{if(e&&(window.__lastPhoto={size:e.size,name:n},!this.headless)){let t=document.createElement(`a`);t.href=URL.createObjectURL(e),t.download=n,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),8e3)}},`image/png`),this.ui.photoFlash($.photo.saved),this.audio?.sfx(`lock`),this.award(`photo`)}async everlit(){if(this.meta.everlit||(this.meta.everlit=!0,this.saveMeta(),this.award(`everlit`),await this.wait(4.5),this.state!==`play`)||(this.mode===`overview`&&this.court?.exitOverview(),this.mode===`photo`&&this.exitPhoto(),this.mode!==`player`))return;let e=this.world,t=this.region;this.ui.prompt(null),this.ui.objective(``),this.ui.trialLabel(null),this.audio?.sfx(`awake`),this.audio?.sting(`rank`),e.setEverlit(!0);let n=this.time;this.until(()=>{let t=Math.min(1,(this.time-n)/9);return e.setAwake(t),e.crown.uniforms.uReveal.value=t,t>=1}),this.ui.fade(1,`#0b0906`,.8),await this.wait(.9),this.ui.fade(0,`#0b0906`,1.2),await this.playCine([{dur:10,cut:!0,from:{pos:[210,470,330],target:[-30,260,-1150],fov:44},to:{pos:[150,430,180],target:[-30,300,-1250],fov:40},say:$.everlit[0],onStart:()=>e.setRegion(2)},{dur:10,cut:!0,from:{pos:[.4,150.4,1.5],target:[-1.5,150.6,-60],fov:54},to:{pos:[0,150,0],target:[0,149.3,-30],fov:50},say:$.everlit[1],onStart:()=>e.setRegion(0)}]),this.ui.fade(1,`#0b0906`,.6),await this.wait(.7),e.setRegion(t),this.gfx.resetAdaptation(),this.autoK=null,this.ui.letterbox(!1),this.player.frozen=!1,this.ui.dot(!0),this.player.syncCamera(0),this.ui.fade(0,`#0b0906`,1)}async startFreeplay(e=null,t=!1){if(this.state!==`title`)return;if(this.dailySession=t,e==null){let t=this.courts.find(e=>e.progress()<e.def.count);e=t?t.o.region:2}this.freeplay=!0,this.state=`intro`,this.ui.show(`#ui-title`,!1),this.ui.fade(1,`#0b0906`,.9),await this.wait(1),this.flags={r1:{echoGone:!0,inspected:!0,disc:!0,mounted:!0,beam:!0,idol:!0,bed:!0},r2:{keeper:!0,key:!0,door:!0,cover:!0,beam:!0,echoGone:!0,bell:!0},r3:{sluice:[1,1,1],done:!0,echoGone:!0}};let n=this.courts.find(t=>t.o.region===e),r=n?{pos:[n.o.center[0]-n.o.extent/2-3.5,n.o.center[1]+.3,n.o.center[2]],yaw:-Math.PI/2,pitch:-.1}:null;await this.beginRegion(e,!0,null,r)}async travelQuick(e,t=null){this.state===`play`&&(this.state=`travel`,this.player.frozen=!0,this.ui.prompt(null),this.ui.objective(``),this.ui.dot(!1),this.ui.trialLabel(null),this.audio?.sfx(`depart`),this.ui.fade(1,`#0b0906`,.9),await this.wait(1.1),await this.beginRegion(e,!0,null,t))}async respawn(){let e=this.regions[this.region];this.player.frozen=!0,this.ui.fade(1,`#0b0906`,.25),this.audio?.sfx(`thud`),this.award(`fall`),await this.wait(.45);let t=e.safe?.()||e.spawn.pos;this.player.teleport(t[0],t[1],t[2]),this.ui.fade(0,`#0b0906`,.7),this.player.frozen=!1}ending(){return Kp(this)}_collectMotes(e){let t=this.world.motes;if(!t)return;this.moteT-=e,this.moteT<=0&&(this.moteStreak=0);let n=this.player.pos;for(let e of t){if(e.region!==this.region||e.got)continue;let r=e.pos.x-n.x,i=e.pos.y-(n.y+1),a=e.pos.z-n.z;if(r*r+a*a<1.7&&Math.abs(i)<1.9){if(e.got=!0,e.sprite.intensity=0,this.world.sprites.write(e.sprite),!this.meta.motes.includes(e.id)){this.meta.motes.push(e.id),this.addDust(1);let n=this.meta.motes.length;n>=t.length?this.award(`motes_all`):n>=t.length/2&&this.award(`motes_half`)}this.audio?.mote(this.moteStreak),this.moteStreak=Math.min(12,this.moteStreak+1),this.moteT=6}}}_updateMarker(){if(this.mode===`aim`)return;let e=this.regions[this.region],t=this.settings.marker&&this.mode===`player`&&this.state===`play`?e.objectivePos?.():null;if(!t){this.ui.marker(null);return}let n=fm.copy(t).project(this.camera),r=t.distanceTo(this.player.eye);if(r<3.5){this.ui.marker(null);return}let i=n.x,a=n.y,o=n.z>1;o&&(i=-i,a=-1);let s=.9,c=Math.max(Math.abs(i)/s,Math.abs(a)/s,1);(c>1||o)&&(i/=c,a/=c,o&&(a=-.9));let l=this.gfx.canvas;this.ui.marker((i*.5+.5)*l.clientWidth,(-a*.5+.5)*l.clientHeight,Math.round(r)+` m`)}groundKind(){return this.regions[this.region]?.groundKind?.(this.player.pos)||`stone`}update(e){this.time+=e,this.frame++;let t=this.input;if(t.pollPad(e),(t.hit(`pause`)||t.hit(`confirm`)||t.hit(`jump`))&&(this._skip=!0),this.state===`play`){if(this.playTime+=e,this.mode===`player`){t.hit(`pause`)&&this.pause(),this.invertY&&(t.mouseDY=-t.mouseDY),this.player.update(e,t),(this.player.fell||this.player.bigFall)&&(this.player.fell=!1,this.player.bigFall=!1,this.respawn());let n=this._focus();this.ui.prompt(n?n._text:null,n?!!n.dim?.():!1),this.ui.dot(!0,!!n),n&&t.hit(`use`)&&!n.dim?.()?n.use():n&&t.hit(`use`)&&(n.deny?.(),this.audio?.sfx(`deny`));let r=this.court,i=!!r&&r.p&&r.inside(this.player.pos);i!==this._inCourt&&(this._inCourt=i,this.ui.trialLabel(i?r.title():null),this.ui.trialHint($.trial.footHint),i&&!this.meta.courtSeen&&(this.meta.courtSeen=!0,this.saveMeta(),this.ui.say($.trial.intro,9))),i&&(t.hit(`journal`)&&(r.enterOverview(),t.pressed.delete(`journal`)),t.hit(`hint`)&&r.hint(),t.hit(`reset`)&&!r.solved&&(r.load(),this.audio?.sfx(`rise`))),t.hit(`marker`)&&(this.settings.marker=+!this.settings.marker,this.applySettings(),this.ui.toast(this.settings.marker?$.marker.on:$.marker.off)),this._collectMotes(e),t.hit(`photo`)&&this.enterPhoto()}else this.mode===`photo`?this._updatePhoto(e):this.mode===`aim`?this._updateAim(e):this.mode===`overview`&&(t.hit(`hint`)&&this.court.hint(),t.hit(`reset`)&&!this.court.solved&&this.court.load());this.court?.update(e),this.court&&this._inCourt&&this.court.trans===0&&this.ui.trialLabel(this.court.title()),this.regions[this.region]?.update?.(e),this._updateMarker()}else this.state===`pause`?t.hit(`pause`)&&(this.ui.visible(`#ui-deeds`)?(this.ui.show(`#ui-deeds`,!1),this.ui.show(`#ui-pause`,!0)):this.ui.visible(`#ui-settings`)?(this.ui.show(`#ui-settings`,!1),this.ui.show(`#ui-pause`,!0)):this.resume()):(this.state===`title`||this.state===`title-credits`)&&(this.ui.visible(`#ui-deeds`)&&t.hit(`pause`)&&this.ui.show(`#ui-deeds`,!1),this.state===`title-credits`&&(t.hit(`pause`)||t.hit(`confirm`))&&(this.ui.show(`#ui-credits`,!1),this.ui.show(`#ui-title`,!0),this.state=`title`),this.ui.visible(`#ui-settings`)&&t.hit(`pause`)&&this.ui.show(`#ui-settings`,!1));if(this.autoQuality&&this.state===`title`){let e=this._aq||={n:0,sum:0};e.n++,e.n>45&&(e.sum+=this._rafDt||16.7),e.n===165&&(this.autoQuality=!1,e.sum/120>27&&this.settings.quality!==`low`&&(this.settings.quality=`low`,this.applySettings(),this.ui.toast($.autoLow)))}if(this.mode===`title`){this.titleT+=e;let t=this.titleT;kp(this.camera,Op.title,this.camera.aspect),this.camera.position.x+=Math.sin(t*.13)*.16,this.camera.position.y+=Math.sin(t*.17+1)*.06,this.camera.rotation.y+=Math.sin(t*.11)*.004,this.camera.updateMatrixWorld(!0)}else this.mode===`cine`&&this._updateCine();this.state!==`pause`&&this._runTasks();let n=0;if(this.mode!==`title`&&this.mode!==`cine`){let e=this.player.pos;if(this.region===0){let t=Math.max(0,Math.min(1,(e.z-4)/5.5));n=t*t*(3-2*t)}else if(this.region===1){let t=Math.hypot(e.x+.5,e.z+604.2);n=+((t<5||t<8.5&&e.y>2)&&e.y<36)}}this.autoK=this.autoK==null?n:this.autoK+(n-this.autoK)*Math.min(1,e*2.2),this.gfx.grade.uAuto.value=this.autoK,this.world.update(this.camera,this.state===`pause`?0:e,this),t.endFrame()}frameOnce(e){let t=performance.now();this.update(e),this.gfx.render(this.world.scene,this.camera,this.state===`pause`?1e-4:e),this._snap&&(this._snap=!1,this._savePhoto());let n=performance.now()-t;if(this.state===`play`){let e=this.perf;e.samples.length<2e5&&e.samples.push(this._rafDt??n)}}run(){let e=performance.now(),t=n=>{let r=(n-e)/1e3;e=n,this._rafDt=r*1e3,this.frameOnce(Math.min(.05,Math.max(5e-4,r))),requestAnimationFrame(t)};requestAnimationFrame(t)}};function gm(e){let t=e.world,n=t.grottoH,r=e.ui,i=()=>e.flags.r1||={},a=t.beams[0],o=new H(...Du),s=0,c=e=>{n.gate.open=e,n.gate.leaves[0].rotation.y=-e*1.45,n.gate.leaves[1].rotation.y=e*1.45,n.gate.collider.on=e<.5},l=e=>{a.mesh.visible=e,e&&(a.set([n.heliostat.center.x,n.heliostat.center.y,n.heliostat.center.z],t.targets.tower),a.uniforms.uReveal.value=1,a.uniforms.uIntensity.value=1),t.beacons.tower.intensity=e?3:.9,t.sprites.write(t.beacons.tower)},u=e=>{let t=new H(...e).sub(n.heliostat.center).normalize().add(o).normalize();n.heliostat.yaw.rotation.y=Math.atan2(t.x,t.z),n.heliostat.pitch.rotation.x=-Math.asin(t.y),n.heliostat.yaw.updateMatrixWorld(!0)};return{spawn:{pos:[0,ku.galleryY,.2],yaw:0,pitch:-.023},safe:()=>e.player.pos.z<-12?[5.2,144,-15.5]:[0,ku.galleryY,.2],groundKind(e){return Math.hypot(e.x-ku.cistern[0],e.z-ku.cistern[2])<4.2&&e.y<ku.cistern[1]+.05?`water`:e.z<-13.5?`sand`:`stone`},enter(d){let f=i();t.rider.mesh.visible=!f.echoGone,t.rider.uniforms.uDissolve.value=0,n.discInPool.visible=!f.disc,n.discGlint.visible=!f.disc,t.sprites.write(n.discGlint),n.heliostat.disc.visible=!!f.mounted,c(+!!f.beam),l(!!f.beam),f.beam&&u(t.targets.tower),n.lamps.forEach((n,r)=>{let i=e.lamps.has(`r1_`+r);n.lit=i,n.light.on=i,n.light.level=+!!i,n.flame.intensity=i?2.6:0,n.glow.intensity=i?.55:0,t.sprites.write(n.flame),t.sprites.write(n.glow)}),n.lamps.forEach((t,n)=>e.addInteract({id:`r1_lamp`+n,pos:t.pos,reach:2.3,prompt:()=>t.lit?null:$.prompt.lamp,use:()=>e.lightLamp(`r1_`+n,t)})),e.addInteract({id:`idol`,pos:new H(ku.idol[0]-1.6,145.6,ku.idol[2]),reach:3.4,prompt:()=>f.idol?null:$.prompt.idol,use:()=>{f.idol=!0,r.say($.say.idol,7),e.audio?.sfx(`note`)}}),e.addInteract({id:`bed`,pos:new H(1.6,148.6,2.6),reach:2,prompt:()=>f.bed?null:$.prompt.bed,use:()=>{f.bed=!0,r.say($.say.bed,6)}}),e.addInteract({id:`disc`,pos:n.discInPool.position.clone().setY(ku.cistern[1]+.3),reach:3.3,prompt:()=>f.disc?null:$.prompt.disc,use:()=>{f.disc=!0,n.discInPool.visible=!1,n.discGlint.visible=!1,t.sprites.write(n.discGlint),r.say($.say.discFound,6),e.audio?.sfx(`pickup`),e.setStep(`r1_mount`),e.save()}}),e.addInteract({id:`heliostat`,pos:n.heliostat.center.clone().setY(145.4),reach:2.7,prompt:()=>f.beam?null:f.mounted?$.prompt.aim:f.disc?$.prompt.mount:f.inspected?null:$.prompt.inspectMount,use:()=>{f.disc?f.mounted?e.startAim({center:n.heliostat.center,toLight:o,target:new H(...t.targets.tower),yaw:n.heliostat.yaw,pitch:n.heliostat.pitch,beam:a,startOffset:[.42,.2],onLock:async()=>{f.beam=!0,l(!0),e.award(`first_light`),r.say($.say.beam1,7),e.audio?.sfx(`beam`),e.audio?.sting(`relay`),await e.wait(3.2),e.audio?.sfx(`gate`),r.say($.say.gateOpens,5),s=.001,e.setStep(`r1_leave`),e.save(),e.wait(14).then(()=>{e.region===0&&e.state===`play`&&e.courts[0].progress()<3&&r.say($.say.courtInvite[0],9)})}}):(f.mounted=!0,n.heliostat.disc.visible=!0,r.say($.say.discMounted,5),e.audio?.sfx(`mount`),e.setStep(`r1_aim`),e.save()):(f.inspected=!0,r.say($.say.mountEmpty,7.5),e.setStep(`r1_find`),e.audio?.sfx(`note`),e.save())}}),e.addInteract({id:`door`,pos:new H(ku.stairGate[0]-.9,145.4,ku.stairGate[2]),reach:2.6,prompt:()=>f.beam?$.prompt.door:$.prompt.doorLocked,dim:()=>!f.beam,use:()=>e.visited?.[1]||e.freeplay?e.travelQuick(1):e.travel(1)})},objectivePos(){let e=i();return e.beam?n.gatePos:e.disc?n.heliostat.center:e.inspected?n.discInPool.position:n.heliostat.center},start(t){let n=i(),a=n.beam?`r1_leave`:n.mounted?`r1_aim`:n.disc?`r1_mount`:n.inspected?`r1_find`:`r1_go`;e.setStep(a),t||e.wait(1.5).then(()=>r.say($.controls,9))},update(n){let a=i(),o=e.player.pos;if(!a.echoGone&&(o.z<-5.5&&o.x>2||o.z<-13)){a.echoGone=!0,e.audio?.sfx(`scatter`);let n=e.time;e.until(()=>{let r=Math.min(1,(e.time-n)/2.4);return t.rider.uniforms.uDissolve.value=r,r>=1}).then(()=>{t.rider.mesh.visible=!1}),e.wait(1.6).then(()=>r.say($.say.echoGone,6))}if(s>0&&s<1){s=Math.min(1,s+n/2.2);let e=s*s*(3-2*s);c(e)}}}}function _m(e){let t=e.world,n=t.quarterH,r=e.ui,i=()=>e.flags.r2||={},a=t.beams[1],o=0,s=e=>{n.towerDoor.pivot.rotation.y=n.towerDoor.baseRot+e*1.75,n.towerDoor.collider.on=e<.5},c=()=>new H(...t.targets.grotto).sub(n.mirror.center).normalize(),l=e=>{a.mesh.visible=e,e&&(a.set([n.mirror.center.x,n.mirror.center.y,n.mirror.center.z],t.targets.scarp),a.uniforms.uReveal.value=1,a.uniforms.uIntensity.value=1),t.beacons.scarp.intensity=e?3:.9,t.sprites.write(t.beacons.scarp)},u=e=>{let t=new H(...e).sub(n.mirror.center).normalize().add(c()).normalize();n.mirror.yaw.rotation.y=Math.atan2(t.x,t.z),n.mirror.pitch.rotation.x=-Math.asin(t.y),n.mirror.yaw.updateMatrixWorld(!0)},d=(t,n,a,o=2.8)=>e.addInteract({id:t,pos:n,reach:o,prompt:()=>$.prompt.talk,use:()=>{let n=i(),o=`t_`+t;n[o]=n[o]||0;let s=typeof a==`function`?a(n):a[Math.min(n[o],a.length-1)];n[o]++,r.say(s,7),e.audio?.sfx(`voice`)}});return{spawn:{pos:ep.spawn,yaw:0,pitch:.05},safe:()=>e.player.pos.y>10?[...n.cath.toWorld(0,.2,-3.5)]:ep.spawn,groundKind(e){return e.y>3?`wood`:`cobble`},enter(f){let p=i();t.showBeam(0,!0),s(+!!p.door),l(!!p.beam),n.mirror.cover.visible=!p.cover,p.beam&&u(t.targets.scarp),t.placeRider(p.beam&&!p.echoGone?[0,.05,-724]:null,[0,-1]),n.keyGlint.visible=!!p.keeper&&!p.key,t.sprites.write(n.keyGlint),n.lamps.forEach((n,r)=>{let i=e.lamps.has(`r2_`+r);n.lit=i,n.light.on=i,n.light.level=+!!i,n.flame.intensity=i?2.6:0,n.glow.intensity=i?.55:0,t.sprites.write(n.flame),t.sprites.write(n.glow)}),n.lamps.forEach((t,n)=>e.addInteract({id:`r2_lamp`+n,pos:t.pos,reach:2.3,prompt:()=>t.lit?null:$.prompt.lamp,use:()=>e.lightLamp(`r2_`+n,t)})),e.addInteract({id:`keeper`,pos:n.npc.keeper.mesh.position.clone().setY(1.3),reach:3,prompt:()=>$.prompt.talk,use:()=>{e.audio?.sfx(`voice`),p.beam?r.say($.say.keeper3,6):p.key?r.say($.say.keeper2,7):(p.keeper=!0,r.say($.say.keeper1,9),n.keyGlint.visible=!0,t.sprites.write(n.keyGlint),(e.step===`r2_keeper`||e.step===`r2_enter`)&&e.setStep(`r2_key`),e.save())}}),d(`vendor`,n.npc.vendor.mesh.position.clone().setY(1.3),[$.say.vendor]),d(`sweeper`,n.npc.sweeper.mesh.position.clone().setY(1.2),[$.say.sweeper]),d(`sitter`,n.npc.sitter.mesh.position.clone().setY(1),[$.say.sitter]),e.addInteract({id:`key`,pos:n.fountain.pos.clone().add(new H(2.4,.1,1.9)),reach:3,prompt:()=>p.key?null:p.keeper?$.prompt.key:$.prompt.fountain,use:()=>{p.keeper?(p.key=!0,n.keyGlint.visible=!1,t.sprites.write(n.keyGlint),r.say($.say.keyFound,6),e.audio?.sfx(`pickup`),e.audio?.sfx(`splash`),e.setStep(`r2_climb`),e.save()):r.say($.say.r2_arrive,6)}}),e.addInteract({id:`towerDoor`,pos:n.towerDoor.pos,reach:2.8,prompt:()=>p.door?null:p.key?$.prompt.towerDoor:$.prompt.towerLocked,dim:()=>!p.key,deny:()=>{p.keeper||e.setStep(`r2_keeper`)},use:()=>{p.door=!0,o=.001,r.say($.say.towerOpen,4),e.audio?.sfx(`door`),e.save()}}),e.addInteract({id:`bell`,pos:n.bellPos,reach:2.6,prompt:()=>$.prompt.bell,use:()=>{e.audio?.sfx(`bell`),p.bell||(p.bell=!0,r.say($.say.bell,6),e.award(`bell`)),t.birds?.flushAll(n.fountain.pos,120),e.world.shake?.(.6)}}),e.addInteract({id:`mirror2`,pos:n.mirror.center.clone().setY(n.mirror.center.y-.6),reach:2.8,prompt:()=>p.beam?null:p.cover?$.prompt.aim:$.prompt.cover,use:()=>{p.cover?e.startAim({center:n.mirror.center,toLight:c(),target:new H(...t.targets.scarp),yaw:n.mirror.yaw,pitch:n.mirror.pitch,beam:a,startOffset:[-.3,-.12],onLock:async()=>{p.beam=!0,l(!0),r.say($.say.beam2,7),e.audio?.sfx(`beam`),e.audio?.sting(`relay`),t.placeRider([0,.05,-724],[0,-1]),e.setStep(`r2_leave`),e.save(),e.wait(16).then(()=>{e.region===1&&e.state===`play`&&e.courts[1].progress()<3&&r.say($.say.courtInvite[1],9)})}}):(p.cover=!0,n.mirror.cover.visible=!1,r.say($.say.coverOff,6),e.audio?.sfx(`cloth`),e.setStep(`r2_aim`),e.save())}}),e.addInteract({id:`ngate`,pos:n.gatePos,reach:4.5,prompt:()=>p.beam?e.flags.r3?.done||e.freeplay||e.visited?.[2]?$.back.toR3:$.prompt.gate:null,use:()=>e.visited?.[2]||e.freeplay?e.travelQuick(2):e.travel(2)}),e.addInteract({id:`sgate`,pos:new H(-30,1.5,-565.2),reach:3.2,prompt:()=>$.back.toR1,use:()=>e.travelQuick(0,{pos:[6.6,144.1,-20.6],yaw:Math.PI/2,pitch:0})})},objectivePos(){let t=i();return t.beam?n.gatePos:t.cover?n.mirror.center:t.door?e.player.pos.y>30?n.mirror.center:n.towerDoor.pos:t.key?n.towerDoor.pos:t.keeper?n.fountain.pos:n.npc.keeper.mesh.position},start(t){let n=i();e.setStep(n.beam?`r2_leave`:n.cover?`r2_aim`:n.door?`r2_cover`:n.key?`r2_climb`:n.keeper?`r2_key`:`r2_enter`),t||e.wait(2).then(()=>r.say($.say.r2_arrive,8))},update(n){let a=i(),c=e.player.pos;if(e.step===`r2_enter`&&c.z<-612&&e.setStep(`r2_keeper`),e.step===`r2_climb`&&a.door&&c.y>30&&e.setStep(`r2_cover`),o>0&&o<1&&(o=Math.min(1,o+n/1.6),s(o*o*(3-2*o))),a.beam&&!a.echoGone&&t.rider.mesh.visible&&c.y<5&&Math.hypot(c.x-t.rider.mesh.position.x,c.z-t.rider.mesh.position.z)<15){a.echoGone=!0,e.audio?.sfx(`scatter`);let n=e.time;e.until(()=>{let r=Math.min(1,(e.time-n)/2.4);return t.rider.uniforms.uDissolve.value=r,r>=1}).then(()=>{t.rider.mesh.visible=!1}),e.wait(1.2).then(()=>r.say($.say.r2_gate,7))}}}}var vm=null;function ym(){if(vm)return vm;let e=new Qu;e.tone=1,e.mould([[0,0],[.03,.03],[.03,.12],[0,.15]],.34),e.top(.15,.34),e.band(.15,.62,.26,Z.KEY,.52,.47,.18),e.mould([[0,.62],[.05,.66],[.05,.74],[0,.78]],.26),e.top(.78,.31);let t=new X;t.color(1,1,1,1),t.lathe([[.3,0],[.3,.05],[.12,.12],[.07,.8],[0,.82]],10);let n=new X;n.color(1,1,1,1),n.box(0,.86,0,.16,.16,.16,.02);for(let e of[-1,1])n.box(e*.5,1.42,0,.05,1.1,.07,.01);n.box(0,1.98,0,1.05,.05,.07,.01),n.box(0,.9,0,1.05,.05,.07,.01),n.box(.56,1.4,0,.14,.04,.04,.008);let r=new X;r.color(1,1,1,1),r.box(0,1.44,0,.95,1.02,.025,.005);let i=new X;i.color(.75,.75,.75,.6);for(let e of[-1,1])i.box(e*.5,1.42,0,.09,1.14,.12,.015);i.box(0,2,0,1.12,.09,.12,.015),i.box(0,.88,0,1.12,.09,.12,.015);let a=new X;a.color(1,1,1,1),a.push().translate(0,1.45,0),a.lathe([[0,-.52],[.3,-.12],[.34,0],[.3,.12],[0,.52]],4,{flat:!0,a0:Math.PI/4,a1:Math.PI*2+Math.PI/4}),a.pop(),a.box(0,1.45,0,.9,.9,.012,0);let o=new Qu;o.tone=.96,o.mould([[0,0],[.04,.04],[.04,.2],[0,.24]],.5),o.band(.24,2,.44,Z.DIAMOND,.88,.88,.18),o.mouldBand([0,2],[.07,2.18],.44,Z.LOTUS,.88,.2),o.top(2.18,.51);let s=new Qu;s.tone=1,s.mould([[0,0],[.03,.03],[.03,.1],[0,.13]],.24),s.band(.13,1,.13,Z.KNOT,.26,.26,.18),s.top(1,.13);let c=new X;c.color(1,1,1,1),c.lathe([[.05,1],[.2,1.08],[.24,1.2],[.2,1.22],[.12,1.12],[0,1.1]],12);let l=new X;l.color(1,1,1,1),l.push().translate(0,1.5,0),l.lathe([[0,-.3],[.17,-.08],[.19,.04],[.1,.26],[0,.34]],6,{flat:!0}),l.pop();let u=new Qu;u.tone=.9,u.mould([[0,0],[.04,.04],[.04,.16],[0,.2]],.4),u.band(.2,1.5,.32,Z.NICHE,.64,1.3,.2),u.mouldBand([0,1.5],[.05,1.62],.32,Z.LOTUS,.64,.2),u.top(1.62,.37);let d=new X;return d.color(1,1,1,1),d.lathe([[.26,0],[.2,.1],[.08,.3],[.06,1.15],[.12,1.22],[0,1.24]],10),d.push().translate(0,1.45,0).rotX(Math.PI/2),d.lathe([[.2,-.16],[.24,-.1],[.24,.14],[.17,.2],[.17,-.1],[.2,-.16]],16),d.pop(),vm={foot:t.build(),ped:e.build(),frame:n.build(),panel:r.build(),fixedFrame:i.build(),prism:a.build(),wall:o.build(),post:s.build(),cup:c.build(),crystal:l.build(),idol:u.build(),emit:d.build()},vm}var bm=()=>rf({color:[.2,.26,.3],rough:.12,name:`crystal-off`}),xm=()=>rf({color:[1,.9,.7],rough:.2,emissive:[7,5,2.4],name:`crystal-on`}),Sm=()=>rf({color:[.9,.25,.15],rough:.4,emissive:[3,.35,.15],name:`crystal-bad`}),Cm=()=>rf({color:[.55,.78,.82],rough:.06,emissive:[.25,.4,.45],name:`prism`}),wm=new H,Tm=new H,Em=e=>e[Math.random()*e.length|0],Dm=e=>`{${e}}`,Om=class{constructor(e,t){this.game=e,this.o=t,this.W=e.world,this.def=$p[t.index],this.id=this.def.id,this.group=new On,this.group.name=`court-`+this.id,this.W.scene.add(this.group),this.pieces=[],this.beams=[],this.lvl=0,this.view=null,this.p=null,this.solved=!1,this.trans=0,this.overview=!1,this.moves=0,this.hints=0,this.endlessMode=!1,this.floorCell=null,this.floorPos=new H,this.cur={i:0,j:0},this.mats={off:bm(),on:xm(),bad:Sm(),prism:Cm()},this._static()}get carved(){return this.o.pale?this.W.carvedPale:this.W.carved}get name(){return $.courts[this.o.index]}_static(){let{center:e,extent:t}=this.o,n=new Qu;n.tone=.97;let r=t/2+(this.o.margin??.9);n._set(0,0),n.g.box(0,-.9,0,r*2,2,r*2,.06),n.mouldBand([0,-.02],[0,.1],r+.001,Z.KEY,.6,.2);let i=new G(n.build(),this.carved);i.position.set(e[0],e[1],e[2]),i.updateMatrixWorld(!0),this.group.add(i),this.W.col.addBox(e[0],e[1]-.9,e[2],r,1,r,0,0,`court`),this.grid=new G(new Ar,af()),this.group.add(this.grid);let a=new X;a.color(1,1,1,1);for(let[e,t,n,r]of[[0,-.5,1.04,.05],[0,.5,1.04,.05],[-.5,0,.05,1.04],[.5,0,.05,1.04]])a.box(e,0,t,n,.03,r,0);this.cursor=new G(a.build(),rf({color:[1,.85,.5],emissive:[5,3.6,1.6],name:`cursor`})),this.cursor.visible=!1,this.cursor.userData.noShadow=!0,this.group.add(this.cursor);for(let e=0;e<36;e++){let e=Xd({ra:.045,rb:.045,color:[1,.86,.55],intensity:2.6,soft:.9,noise:.12,segments:8});e.mesh.visible=!1,this.group.add(e.mesh),this.beams.push(e)}this.hintGlint=this.W.sprites.add([0,-999,0],.5,[1,.9,.6],1,0),this.glows=[];for(let e=0;e<5;e++)this.glows.push(this.W.sprites.add([0,-999,0],1,[1,.8,.46],2,0));let o=ym();for(let[t,n]of this.o.lanterns||[[-1,-1],[-1,1],[1,-1],[1,1]]){let i=e[0]+t*(r-.35),a=e[2]+n*(r-.35),s=e[1]+.1,c=new G(o.post,this.carved),l=new G(o.cup,af());for(let e of[c,l])e.position.set(i,s,a),e.updateMatrixWorld(!0),this.group.add(e);this.W.col.addCylinder(i,a,.26,s-.5,s+1.3,`court`),this.W.sprites.add([i,s+1.2,a],.075,[1,1,1],0,2.4),this.o.dark&&(this.W.lights.add([i,s+1.5,a],[1,.6,.28],9.5,4.2,.7),this.W.sprites.add([i,s+1.3,a],.4,[1,.5,.16],2,.5))}this.o.fill&&this.W.lights.add(this.o.fill,[1,.62,.3],9.5,2.6,.3),this.pillar=Xd({ra:.45,rb:2.4,color:[1,.86,.56],intensity:.5,soft:1.8,noise:.3,segments:12}),this.pillar.set([e[0],e[1]+.3,e[2]],[e[0],e[1]+460,e[2]]),this.pillar.mesh.visible=!1,this.group.add(this.pillar.mesh),this.label=new H(e[0],e[1]+1.2,e[2])}cellPos(e,t,n=new H){let r=this.p,i=this.o.center,a=this.cell;return n.set(i[0]+(e-(r.w-1)/2)*a,i[1]+.1,i[2]+(t-(r.h-1)/2)*a)}inside(e,t=1.5){let n=this.o.center,r=this.o.extent/2+t;return Math.abs(e.x-n[0])<r&&Math.abs(e.z-n[2])<r&&Math.abs(e.y-n[1])<4}progress(){return this.game.meta.trials[this.id]||0}stars(e){return(this.game.meta.stars?.[this.id]||[])[e]||0}starSum(){return(this.game.meta.stars?.[this.id]||[]).reduce((e,t)=>e+(t||0),0)}isEndless(){return!!this.o.endless&&this.progress()>=this.def.count}title(){let e=this.game,t=this.def.count,n;if(this.dailyMode){let t=this.dailyD;n=$.trial.daily(t.month,t.date),this.solved&&e.meta.daily?.stars&&(n+=`　`+Dm(e.meta.daily.stars))}else if(this.endlessMode)n=$.trial.endless(e.meta.endless.cur+1);else if(this.solved&&this.view==null&&this.progress()>=t)n=$.trial.done(this.name);else{n=$.trial.level(this.name,this.lvl+1,t);let e=this.stars(this.lvl);e&&(n+=`　`+Dm(e))}return this.p&&this.p.stock>0&&!this.solved&&(n+=`　·　`+$.trial.stock(this.p.stock)),n}load(){let e=this.game,t=this.progress(),n=this.def.count,r;if(this.dailyMode){let t=this.dailyD=am();this.endlessMode=!1,this.lvl=0,this.view=null,this.p=Qp(t.seed,om(t.dow)),r=e.meta.daily?.date===t.key}else this.view!=null&&this.view>=Math.min(t,n)&&(this.view=null),this.endlessMode=!!this.o.endless&&t>=n&&this.view==null,r=!this.endlessMode&&t>=n&&this.view==null,this.lvl=this.view==null?Math.min(t,n-1):this.view,this.p=this.endlessMode?Qp(9e4+e.meta.endless.cur,nm(e.meta.endless.cur)):Qp(rm(this.o.index,this.lvl),tm(this.o.index,this.lvl));if(r){for(let e of this.p.answers)Object.assign(this.p.cells[e.o],{t:2,rot:e.rot,sol:e.rot,placed:!0});this.p.stock=0;for(let e of this.p.cells)(e.t===2||e.t===3)&&e.sol>=0&&(e.rot=e.sol)}this.cell=this.o.extent/Math.max(this.p.w,this.p.h),this.solved=r,this.moves=0,this.hints=0,this.t0=e.time,this.floorCell=null,this.pillar.mesh.visible=t>=n,this._build(),this._refresh(!0)}shift(e){if(this.trans>0)return;if(this.dailyMode){this.dailyMode=!1,this.game.dailySession=!1,this.load(),this.game.audio?.sfx(`rise`);return}let t=this.progress(),n=this.def.count,r=Math.min(t,n),i=this.view==null?r:this.view,a=Math.max(0,Math.min(r,i+e));a===i?this.game.audio?.sfx(`deny`):(this.view=a===r?null:a,this.load(),this.game.audio?.sfx(`rise`))}_clear(){for(let e of this.pieces)this.group.remove(e.root);this.pieces.length=0,this.W.col.removeTagged(`tc`+this.id),this.game.interactables=this.game.interactables.filter(e=>!String(e.id).startsWith(`tc`+this.id+`_`))}_build(){this._clear();let e=ym(),t=this.p,n=this.cell,r=Math.min(1.25,n/1.9),i=this.game,a=this.W.col,o=new X;o.color(1,1,1,1);let s=n*t.w;for(let e=0;e<=t.w;e++)o.box((e-t.w/2)*n,.012,0,.04,.02,s,0),o.box(0,.012,(e-t.h/2)*n,s,.02,.04,0);this.grid.geometry.dispose(),this.grid.geometry=o.build(),this.grid.position.set(this.o.center[0],this.o.center[1]+.09,this.o.center[2]),this.grid.updateMatrixWorld(!0);let c=(e,t)=>new G(e,t),l=()=>this.solved||this.trans>0;for(let n=0;n<t.h;n++)for(let o=0;o<t.w;o++){let s=t.cells[o+n*t.w];if(s.t===0)continue;let u=new On;this.cellPos(o,n,u.position),u.scale.setScalar(r);let d={c:s,i:o,j:n,root:u,rotor:null,ang:0,crystal:null};if(s.t===2||s.t===3){s.placed?u.add(c(e.foot,af())):u.add(c(e.ped,this.carved));let t=new On;u.add(t),d.rotor=t,s.t===2?t.add(c(s.fixed?e.fixedFrame:e.frame,s.fixed?this.carved:af()),c(e.panel,cf())):t.add(c(e.frame,af()),c(e.prism,this.mats.prism)),d.ang=this._angle(s.rot),t.rotation.y=d.ang,a.addCylinder(u.position.x,u.position.z,.5*r,u.position.y-.5,u.position.y+2.2,`tc`+this.id),s.fixed||i.addInteract({id:`tc${this.id}_${o}_${n}`,pos:new H(u.position.x,u.position.y+1.3,u.position.z),reach:2.7,prompt:()=>l()?null:s.placed?$.trial.turnPlaced:s.t===3?$.trial.turnPrism:$.trial.turn,use:()=>this.turn(o,n)})}else s.t===1?(u.add(c(e.wall,this.carved)),a.addBox(u.position.x,u.position.y+1.1,u.position.z,.52*r,1.2,.52*r,0,0,`tc`+this.id)):s.t===4?(u.add(c(e.post,this.carved),c(e.cup,af())),d.crystal=c(e.crystal,this.mats.off),u.add(d.crystal),a.addCylinder(u.position.x,u.position.z,.3*r,u.position.y-.5,u.position.y+1.9,`tc`+this.id)):s.t===5&&(u.add(c(e.idol,this.carved)),d.crystal=c(e.crystal,this.mats.off),d.crystal.position.y=.42,d.crystal.scale.setScalar(.7),u.add(d.crystal),a.addBox(u.position.x,u.position.y+.9,u.position.z,.4*r,1,.4*r,0,0,`tc`+this.id));u.updateMatrixWorld(!0),this.group.add(u),this.pieces.push(d)}let u=t.emitter,d=new On;this.cellPos(u.x-qp[u.d]*.95,u.y-Jp[u.d]*.95,d.position),d.scale.setScalar(r),d.add(c(e.emit,af())),d.rotation.y=Math.atan2(qp[u.d],Jp[u.d]),d.updateMatrixWorld(!0),this.group.add(d),this.pieces.push({c:{t:-1},root:d}),a.addCylinder(d.position.x,d.position.z,.3*r,d.position.y-.5,d.position.y+1.6,`tc`+this.id),i.addInteract({id:`tc${this.id}_floor`,pos:this.floorPos,reach:5.2,prompt:()=>!l()&&this.floorCell&&this.p.stock>0?$.trial.place:null,use:()=>{this.floorCell&&this.place(this.floorCell.i,this.floorCell.j)}})}_angle(e){return e===0?Math.PI/4:-Math.PI/4}turn(e,t){if(this.solved||this.trans>0)return;let n=this.pieces.find(n=>n.i===e&&n.j===t);!n||!n.rotor||n.c.fixed?this.game.audio?.sfx(`deny`):(n.c.rot=1-n.c.rot,n.target=(n.target??n.ang)+Math.PI/2,this.moves++,this.game.audio?.sfx(`turn`),this._refresh(!1))}place(e,t){let n=this.p,r=this.game;if(this.solved||this.trans>0)return;let i=n.cells[e+t*n.w];if(i.t!==0)return;if(n.stock<=0){r.audio?.sfx(`deny`),r.ui.say($.trial.noStock,3);return}let a=n.answers.find(n=>n.x===e&&n.y===t);Object.assign(i,{t:2,rot:0,placed:!0,fixed:!1,sol:a?a.rot:-2}),n.stock--,this.moves++,r.audio?.sfx(`mount`),this.floorCell=null,this._build(),this._refresh(!1)}take(e,t){let n=this.p,r=this.game;if(this.solved||this.trans>0)return;let i=n.cells[e+t*n.w];!i||!i.placed?r.audio?.sfx(`deny`):(Object.assign(i,{t:0,rot:0,placed:!1,sol:0}),n.stock++,this.moves++,r.audio?.sfx(`pickup`),this._build(),this._refresh(!1))}act(e,t){this.p.cells[e+t*this.p.w].t===0?this.place(e,t):this.turn(e,t)}_refresh(e){let t=Zp(this.p),n=this.o.center[1]+.1+1.45*Math.min(1.25,this.cell/1.9),r=new H,i=new H;this.beams.forEach((e,a)=>{let o=t.segs[a];o?(this.cellPos(o[0],o[1],r),this.cellPos(o[2],o[3],i),e.set([r.x,n,r.z],[i.x,n,i.z]),e.mesh.visible=!0):e.mesh.visible=!1});let a=0;for(let e of this.pieces){if(e.c.t===4){let n=t.lit[e.c.i];n&&a++,e.crystal.material=n?this.mats.on:this.mats.off}e.c.t===5&&(e.crystal.material=e.c.hit?this.mats.bad:this.mats.off)}let o=0,s=Math.min(1.25,this.cell/1.9);for(let e of this.pieces)if(e.c.t===4&&t.lit[e.c.i]&&o<this.glows.length){let t=this.glows[o++];t.pos.set(e.root.position.x,this.o.center[1]+.1+1.5*s,e.root.position.z),t.intensity=.8,this.W.sprites.write(t)}for(;o<this.glows.length;o++){let e=this.glows[o];e.intensity&&(e.intensity=0,this.W.sprites.write(e))}e||(a>(this._lit||0)&&this.game.audio?.sfx(`chime`),t.idol&&this.game.audio?.sfx(`deny`)),this._lit=a,t.solved&&!this.solved&&!e&&this._onSolved()}_onSolved(){let e=this.game,t=this.def.count;this.solved=!0,e.audio?.sfx(`solve`),e.audio?.sting(`relay`);let n=im(this.p,this.moves,this.hints),r=$.trial.solvedStars(n);if(this.dailyMode){let t=e.meta.daily||={date:``,last:0,streak:0,total:0},r=this.dailyD;t.streak=t.last===r.day-1?t.streak+1:1,t.best=Math.max(t.best||0,t.streak),t.last=r.day,t.date=r.key,t.total++,t.moves=this.moves,t.stars=n,e.addDust(3+n),e.saveMeta(),e.award(`daily1`),t.streak>=7&&e.award(`daily7`),e.ui.say($.trial.dailyDone(this.moves,t.streak),10),e.ui.trialLabel(this.title())}else{if(this.endlessMode)e.meta.endless.cur++,e.meta.endless.best=Math.max(e.meta.endless.best,e.meta.endless.cur),e.addDust(1),e.meta.endless.best>=10&&e.award(`night10`),e.meta.endless.best>=30&&e.award(`night30`);else{let i=(e.meta.stars||={})[this.id]||=[],a=i[this.lvl]||0,o=0;n>a&&(i[this.lvl]=n,o+=n-a);let s=this.lvl===this.progress()&&this.progress()<t;s&&(e.meta.trials[this.id]=this.progress()+1,o+=2),o&&e.addDust(o);let c=s&&this.progress()>=t;this.view!=null&&(this.view=this.view+1<Math.min(this.progress(),t)?this.view+1:null),c&&(r=$.trial.ladderDone(this.name),this.pillar.mesh.visible=!0,e.audio?.sting(`rank`),e.award(`court`+(this.o.index+1)),e.courts.every(e=>e.progress()>=e.def.count)&&e.everlit());let l=e.courts.reduce((t,n)=>t+(e.meta.stars?.[n.id]||[]).filter(e=>e===3).length,0),u=e.courts.reduce((e,t)=>e+t.def.count,0);if(l>=10&&e.award(`clean10`),l>=u&&e.award(`radiance`),c&&!this.o.endless){e.saveMeta(),e.ui.say(r,7),this.trans=0;return}}e.saveMeta(),e.ui.say(r,4.5),this.trans=1e-4,this._phase=0}}hint(){if(!this.p||this.solved||this.trans>0)return;let e=this.p,t=this.game,n=null,r=null,i=2.4,a=this.pieces.find(e=>e.c.placed&&e.c.sol===-2),o=e.answers.filter(t=>e.cells[t.o].t===0),s=this.pieces.filter(e=>e.rotor&&!e.c.fixed&&e.c.sol>=0&&e.c.rot!==e.c.sol);if(a)n=a.root.position,r=$.trial.hintStray;else if(o.length){let e=Em(o);n=this.cellPos(e.x,e.y),r=$.trial.hintPlace,i=1.1}else if(s.length)n=Em(s).root.position;else{t.ui.say($.trial.hintNone,4);return}this.hints++,this.hintGlint.pos.set(n.x,n.y+i,n.z),this.hintGlint.intensity=2.4,this.W.sprites.write(this.hintGlint),this._hintT=7,t.audio?.sfx(`note`),r&&t.ui.say(r,4.5)}enterOverview(){let e=this.game;e.mode===`player`&&this.p&&(this.overview=!0,e.mode=`overview`,e.player.frozen=!0,e.activeCourt=this,this._camFrom=e.camera.position.clone(),this._qFrom=e.camera.quaternion.clone(),this._ovT=0,this.cursor.visible=!0,this.cur.i=Math.floor(this.p.w/2),this.cur.j=Math.floor(this.p.h/2),this._accX=this._accY=0,e.ui.prompt(null),e.ui.dot(!1),e.ui.trialHint($.trial.overviewHint),e.audio?.sfx(`whoosh`))}exitOverview(){let e=this.game;this.overview&&(this.overview=!1,e.mode=`player`,e.player.frozen=!1,this.cursor.visible=!1,e.camera.up.set(0,1,0),e.camera.fov=e.player.fov,e.camera.updateProjectionMatrix(),e.ui.dot(!0),e.ui.trialHint($.trial.footHint))}update(e){let t=this.game,n=t.input;for(let t of this.pieces)t.rotor&&t.target!=null&&(t.ang+=(t.target-t.ang)*Math.min(1,e*14),t.rotor.rotation.y=t.ang,t.rotor.updateMatrixWorld(!0),Math.abs(t.target-t.ang)<.002&&(t.ang=t.target,t.target=null));if(this._hintT>0&&(this._hintT-=e,this._hintT<=0&&(this.hintGlint.intensity=0,this.W.sprites.write(this.hintGlint))),this.trans>0){this.trans+=e;let n=e=>{for(let t of this.pieces)t.root.position.y=this.o.center[1]+.1-e*2.6,t.root.updateMatrixWorld(!0)};if(this._phase===0&&this.trans<=1.6){let e=this.trans/1.6;for(let t of this.beams)t.uniforms.uIntensity.value=2.6*(1+1.5*Math.sin(e*Math.PI))}if(this._phase===0){if(this.trans>1.6){for(let e of this.glows)e.intensity&&(e.intensity=0,this.W.sprites.write(e));let e=Math.min(1,(this.trans-1.6)/.9);n(e*e);for(let t of this.beams)t.uniforms.uIntensity.value=2.6*(1-e);e>=1&&(this.load(),n(1),this._phase=1,this.trans=1e-4,t.audio?.sfx(`rise`))}}else{let e=Math.min(1,this.trans/.9);n(1-e*(2-e));for(let t of this.beams)t.uniforms.uIntensity.value=2.6*e;e>=1&&(this.trans=0,t.ui.trialLabel(this.title()))}}let r=this.overview||t.mode===`player`&&t._inCourt;if(r&&this.trans===0&&(n.hit(`prev`)&&this.shift(-1),n.hit(`next`)&&this.shift(1)),r&&this.p&&this.p.answers.length&&!t.meta.placeSeen&&!this.solved&&(t.meta.placeSeen=!0,t.saveMeta(),t.ui.say($.trial.placeIntro,11)),this.overview){this._updateOverview(e);return}let i=null;if(t.mode===`player`&&t._inCourt&&this.p&&!this.solved&&this.trans===0){let e=t.player.eye,r=t.player.forward(wm),a=this.p,o=this.o.center,s=this.cell;if(a.stock>0&&r.y<-.1){let t=(o[1]+.1-e.y)/r.y;if(t>.5&&t<5){let n=Math.round((e.x+r.x*t-o[0])/s+(a.w-1)/2),c=Math.round((e.z+r.z*t-o[2])/s+(a.h-1)/2);n>=0&&c>=0&&n<a.w&&c<a.h&&a.cells[n+c*a.w].t===0&&(i={i:n,j:c})}}if(n.hit(`take`)){let n=null,i=.8;for(let t of this.pieces){if(!t.c.placed)continue;Tm.set(t.root.position.x,t.root.position.y+1.2,t.root.position.z).sub(e);let a=Tm.length();if(a>3.4)continue;let o=Tm.dot(r)/a;o>i&&(i=o,n=t)}n?this.take(n.i,n.j):t.audio?.sfx(`deny`)}}this.floorCell=i,i&&(this.cellPos(i.i,i.j,this.floorPos),this.floorPos.y+=.05,this.cursor.position.copy(this.floorPos),this.cursor.scale.set(this.cell,1,this.cell),this.cursor.updateMatrixWorld(!0)),this.cursor.visible=!!i}_updateOverview(e){let t=this.game,n=t.input,r=t.camera,i=this.o.center;this._ovT+=e;let a=Math.min(1,this._ovT/.9),o=a*a*(3-2*a),s=this.o.extent*1.02+3,c=new H(i[0],i[1]+s,i[2]+this.o.extent*.32);r.position.lerpVectors(this._camFrom,c,o);let l=new $t().lookAt(c,new H(i[0],i[1],i[2]-this.o.extent*.04),new H(0,1,0));r.quaternion.slerpQuaternions(this._qFrom,new kt().setFromRotationMatrix(l),o),r.fov+=(58-r.fov)*Math.min(1,e*5),r.updateProjectionMatrix();let u=n.consumeLook();this._accX+=u.x,this._accY+=u.y;let d=0,f=0;for(n.hit(`left`)&&d--,n.hit(`right`)&&d++,n.hit(`fwd`)&&f--,n.hit(`back`)&&f++;this._accX>55;)d++,this._accX-=55;for(;this._accX<-55;)d--,this._accX+=55;for(;this._accY>55;)f++,this._accY-=55;for(;this._accY<-55;)f--,this._accY+=55;(d||f)&&(this.cur.i=Math.max(0,Math.min(this.p.w-1,this.cur.i+d)),this.cur.j=Math.max(0,Math.min(this.p.h-1,this.cur.j+f)),t.audio?.ui(`tick`)),this.cur.i=Math.min(this.cur.i,this.p.w-1),this.cur.j=Math.min(this.cur.j,this.p.h-1),this.cellPos(this.cur.i,this.cur.j,this.cursor.position),this.cursor.position.y+=.05,this.cursor.scale.set(this.cell,1,this.cell),this.cursor.updateMatrixWorld(!0),this.cursor.visible=!0,(n.hit(`use`)||n.hit(`jump`))&&this.act(this.cur.i,this.cur.j),n.hit(`take`)&&this.take(this.cur.i,this.cur.j),(n.hit(`journal`)||n.hit(`cancel`)||n.hit(`pause`))&&this.exitOverview()}},km={dorian:[0,2,3,5,7,9,10],penta:[0,2,4,7,9],minor:[0,2,3,5,7,8,10],lydian:[0,2,4,6,7,9,11]},Am={title:{root:50,scale:`dorian`,density:.22,reg:[0,14],pad:.5,wind:.25,cave:.5,water:0,town:0,reverb:.55,bright:.4},intro:{root:50,scale:`dorian`,density:.12,reg:[0,12],pad:.6,wind:.2,cave:.5,water:0,town:0,reverb:.6,bright:.3},r1:{root:50,scale:`dorian`,density:.14,reg:[-5,12],pad:.38,wind:.22,cave:1,water:.06,town:0,reverb:.65,bright:.3},r2:{root:53,scale:`lydian`,density:.34,reg:[0,19],pad:.3,wind:.3,cave:0,water:.1,town:1,reverb:.25,bright:.7},r3:{root:57,scale:`penta`,density:.26,reg:[7,26],pad:.42,wind:.6,cave:0,water:.75,town:0,reverb:.4,bright:.9},ending:{root:50,scale:`lydian`,density:.6,reg:[0,26],pad:.8,wind:.3,cave:0,water:.2,town:.3,reverb:.5,bright:1},credits:{root:50,scale:`dorian`,density:.3,reg:[0,19],pad:.6,wind:.2,cave:.3,water:0,town:0,reverb:.55,bright:.6}},jm=e=>440*2**((e-69)/12),Mm=class{constructor(){this.ctx=null,this.vol={master:.8,music:.7,sfx:.8},this.scene=Am.title,this.sceneName=`title`,this.t=0,this.next=0,this.lastStep=0}unlock(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e;this.master=t.createGain(),this.comp=t.createDynamicsCompressor(),this.comp.threshold.value=-16,this.comp.ratio.value=3,this.master.connect(this.comp),this.comp.connect(t.destination),this.musicG=t.createGain(),this.sfxG=t.createGain(),this.ambG=t.createGain(),this.musicG.connect(this.master),this.sfxG.connect(this.master),this.ambG.connect(this.master);let n=t.sampleRate*3.2,r=t.createBuffer(2,n,t.sampleRate);for(let e=0;e<2;e++){let t=r.getChannelData(e);for(let e=0;e<n;e++)t[e]=(Math.random()*2-1)*(1-e/n)**2.6*(e<400?e/400:1)}this.rev=t.createConvolver(),this.rev.buffer=r,this.revG=t.createGain(),this.revG.gain.value=.4,this.rev.connect(this.revG),this.revG.connect(this.master),this.noiseBuf=t.createBuffer(1,t.sampleRate*4,t.sampleRate);{let e=this.noiseBuf.getChannelData(0),t=0;for(let n=0;n<e.length;n++){let r=Math.random()*2-1;t=t*.985+r*.12,e[n]=t*2.2+r*.12}}this.whiteBuf=t.createBuffer(1,t.sampleRate*2,t.sampleRate);{let e=this.whiteBuf.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}let i=(e,n,r,i)=>{let a=t.createBufferSource();a.buffer=e,a.loop=!0;let o=t.createBiquadFilter();o.type=n,o.frequency.value=r,o.Q.value=i;let s=t.createGain();return s.gain.value=0,a.connect(o),o.connect(s),s.connect(this.ambG),s.connect(this.rev),a.start(),{g:s,fl:o}};this.wind=i(this.noiseBuf,`bandpass`,420,.6),this.windHi=i(this.whiteBuf,`bandpass`,2600,.8),this.water=i(this.whiteBuf,`bandpass`,3400,.7),this.town=i(this.noiseBuf,`bandpass`,700,.9),this.cave=i(this.noiseBuf,`lowpass`,140,.7),this.padG=t.createGain(),this.padG.gain.value=0,this.padF=t.createBiquadFilter(),this.padF.type=`lowpass`,this.padF.frequency.value=500,this.padF.Q.value=.7,this.padF.connect(this.padG),this.padG.connect(this.musicG),this.padG.connect(this.rev),this.padOsc=[0,7,12,19].map((e,n)=>{let r=t.createOscillator();r.type=n%2?`triangle`:`sawtooth`,r.detune.value=(n-1.5)*7;let i=t.createGain();return i.gain.value=[.22,.14,.1,.05][n],r.connect(i),i.connect(this.padF),r.start(),{o:r,iv:e}}),this.setVolumes(this.vol.master,this.vol.music,this.vol.sfx),this.setScene(this.sceneName,!0),this._tick=setInterval(()=>this._update(),120)}setVolumes(e,t,n){if(this.vol={master:e,music:t,sfx:n},!this.ctx)return;let r=this.ctx.currentTime;this.master.gain.setTargetAtTime(e*.9,r,.05),this.musicG.gain.setTargetAtTime(t*.55,r,.05),this.sfxG.gain.setTargetAtTime(n*.9,r,.05),this.ambG.gain.setTargetAtTime(n*.8,r,.05)}duck(e){this.ctx&&this.master.gain.setTargetAtTime(this.vol.master*(e?.35:.9),this.ctx.currentTime,.2)}setScene(e,t=!1){if(!Am[e]||e===this.sceneName&&!t&&this.ctx)return;this.sceneName=e;let n=this.scene=Am[e];if(!this.ctx)return;let r=this.ctx.currentTime,i=1.6;this.wind.g.gain.setTargetAtTime(n.wind*.5,r,i),this.windHi.g.gain.setTargetAtTime(n.wind*.05,r,i),this.water.g.gain.setTargetAtTime(n.water*.1,r,i),this.town.g.gain.setTargetAtTime(n.town*.05,r,i),this.cave.g.gain.setTargetAtTime(n.cave*.5,r,i),this.revG.gain.setTargetAtTime(n.reverb,r,i),this.padG.gain.setTargetAtTime(n.pad*.16,r,2.5),this.padF.frequency.setTargetAtTime(350+n.bright*900,r,3),this.padOsc.forEach(({o:e,iv:t})=>e.frequency.setTargetAtTime(jm(n.root-12+t),r,1.5))}_env(e,t,n,r,i){e.gain.setValueAtTime(1e-4,t),e.gain.exponentialRampToValueAtTime(i,t+n),e.gain.exponentialRampToValueAtTime(1e-4,t+n+r)}_tone(e,{type:t=`sine`,a:n=.005,d:r=.6,peak:i=.2,dest:a=this.sfxG,rev:o=.3,t:s=this.ctx.currentTime,detune:c=0,slide:l=0}={}){let u=this.ctx,d=u.createOscillator(),f=u.createGain();if(d.type=t,d.frequency.setValueAtTime(e,s),d.detune.value=c,l&&d.frequency.exponentialRampToValueAtTime(e*l,s+n+r),this._env(f,s,n,r,i),d.connect(f),f.connect(a),o>0){let e=u.createGain();e.gain.value=o,f.connect(e),e.connect(this.rev)}d.start(s),d.stop(s+n+r+.05)}_noise({f:e=1e3,q:t=1,type:n=`bandpass`,a:r=.004,d:i=.2,peak:a=.3,rev:o=.2,t:s=this.ctx.currentTime,white:c=!0,slide:l=0,dest:u=this.sfxG}={}){let d=this.ctx,f=d.createBufferSource();f.buffer=c?this.whiteBuf:this.noiseBuf,f.loop=!0,f.loopStart=Math.random();let p=d.createBiquadFilter();p.type=n,p.frequency.setValueAtTime(e,s),p.Q.value=t,l&&p.frequency.exponentialRampToValueAtTime(e*l,s+r+i);let m=d.createGain();if(this._env(m,s,r,i,a),f.connect(p),p.connect(m),m.connect(u),o>0){let e=d.createGain();e.gain.value=o,m.connect(e),e.connect(this.rev)}f.start(s,Math.random()*1.5),f.stop(s+r+i+.05)}_bell(e,t=.25,n=3.5,r=this.ctx.currentTime){[[1,1],[2,.6],[2.76,.45],[5.4,.25],[8.9,.12]].forEach(([i,a],o)=>this._tone(e*i,{d:n/(1+o*.6),peak:t*a,rev:.6,t:r,a:.003}))}_pluck(e,t=.12,n=this.ctx.currentTime,r=.5){let i=jm(e);this._tone(i,{type:`triangle`,d:1.6,peak:t,rev:.5,t:n,dest:this.musicG}),this._tone(i*2,{type:`sine`,d:.5,peak:t*.4*r,rev:.4,t:n,dest:this.musicG})}_update(){let e=this.ctx;if(!e||e.state!==`running`)return;let t=e.currentTime,n=this.scene;if(t>=this.next){let e=km[n.scale];if(Math.random()<n.density*1.4){let r=Math.random()*(n.reg[1]-n.reg[0])+n.reg[0]|0,i=n.root+12*Math.floor(r/7)+e[(r%e.length+e.length)%e.length];this.sceneName===`r3`||this.sceneName===`ending`?this._tone(jm(i+12),{d:2.6,peak:.05,rev:.7,dest:this.musicG,a:.01}):this._pluck(i,.09,t,n.bright),Math.random()<.3&&this._pluck(i+(Math.random()<.5?7:12),.05,t+.28,n.bright)}this.next=t+.5+Math.random()*(2.4-n.density*2)}if(this.wind.fl.frequency.setTargetAtTime(300+380*(.5+.5*Math.sin(t*.23)*Math.sin(t*.11+1)),t,.8),n.cave>0&&Math.random()<.035*n.cave&&this._tone(1100+Math.random()*1500,{d:.18,peak:.035,rev:.9,slide:.7}),n.town>0&&Math.random()<.02){let e=420+Math.random()*90;this._tone(e,{type:`sine`,d:.22,peak:.03,slide:.86,rev:.25}),this._tone(e*.9,{type:`sine`,d:.3,peak:.03,slide:.84,rev:.25,t:t+.26})}if(n.town>0&&Math.random()<.006&&this._noise({f:900,q:3,d:.08,peak:.05,rev:.4}),n.water>.4&&Math.random()<.012){let e=2400+Math.random()*900;this._tone(e,{d:.12,peak:.02,slide:1.3,rev:.5}),this._tone(e*1.1,{d:.1,peak:.02,slide:1.25,rev:.5,t:t+.14})}}footstep(e=`stone`,t=.6){if(!this.ctx)return;let n=.1+.14*t,r=this.scene.reverb*.6;e===`water`?(this._noise({f:1800,q:.6,d:.26,peak:n*1.2,rev:r}),this._noise({f:500,q:.8,d:.12,peak:n,rev:r,white:!1})):e===`sand`?(this._noise({f:2600,q:.5,d:.13,peak:n*.7,rev:r*.5}),this._noise({f:240,type:`lowpass`,d:.06,peak:n,rev:0,white:!1})):e===`wood`?(this._tone(150+Math.random()*30,{d:.09,peak:n*1.3,rev:r,slide:.6}),this._noise({f:900,q:2,d:.04,peak:n*.6,rev:r})):(this._noise({f:e===`cobble`?2e3:1500,q:1.4,d:.045,peak:n,rev:r}),this._tone(95+Math.random()*25,{d:.07,peak:n*1.1,rev:r*.5,slide:.6}))}mote(e=0){if(!this.ctx)return;let t=[0,2,4,7,9,12,14,16,19,21,24,26,28],n=74+t[Math.min(t.length-1,e)];this._tone(jm(n),{d:.9,peak:.12,rev:.6}),this._tone(jm(n+12),{d:.4,peak:.05,rev:.6})}ui(e){this.ctx&&(e===`hover`?this._tone(1320,{d:.05,peak:.02,rev:.1}):e===`tick`?this._tone(880,{d:.05,peak:.035,rev:.1}):(this._tone(660,{d:.25,peak:.07,rev:.4}),this._tone(990,{d:.3,peak:.05,rev:.4,t:this.ctx.currentTime+.07})))}sting(e){if(!this.ctx)return;let t=this.ctx.currentTime,n=this.scene.root+12,r=e===`rank`?[0,7,12,16,19]:[0,4,7,11,14,19];r.forEach((e,r)=>{this._pluck(n+e,.11,t+r*.16,1)}),this._bell(jm(n+12),.08,4,t+r.length*.16)}sfx(e){if(!this.ctx)return;let t=this.ctx.currentTime,n=e=>this._noise(e),r=(e,t)=>this._tone(e,t);switch(e){case`lamp`:n({f:900,d:.5,peak:.16,slide:2.5,rev:.4}),r(520,{d:.5,peak:.05,slide:1.5});break;case`pickup`:r(880,{d:.5,peak:.12}),r(1320,{d:.6,peak:.08,t:t+.09});break;case`mount`:r(160,{d:.25,peak:.3,slide:.5}),n({f:2500,q:4,d:.12,peak:.15}),this._bell(520,.06,1.5,t+.05);break;case`crank`:case`creak`:n({f:700+Math.random()*500,q:9,d:.16,peak:.07,slide:1.2,rev:.3});break;case`turn`:n({f:420,q:2,d:.22,peak:.16,white:!1,rev:.4}),r(1900,{d:.05,peak:.05,t:t+.2});break;case`chime`:this._bell(1050+Math.random()*300,.09,1.6);break;case`lock`:this._bell(660,.16,3),this._bell(990,.1,3,t+.12);break;case`beam`:n({f:500,d:2.4,peak:.12,slide:8,rev:.6}),r(220,{d:2.6,peak:.1,slide:4,type:`triangle`,rev:.6});break;case`solve`:[0,4,7,12,16].forEach((e,n)=>this._bell(jm(76+e),.07,1.8,t+n*.11));break;case`rise`:n({f:110,type:`lowpass`,d:1,peak:.35,white:!1,rev:.5});break;case`gate`:n({f:150,type:`lowpass`,d:1.8,peak:.3,white:!1,rev:.5}),n({f:1700,q:7,d:1.2,peak:.05,slide:.8});break;case`door`:n({f:500,q:8,d:.9,peak:.1,slide:.6,rev:.4}),r(110,{d:.3,peak:.25,slide:.5,t:t+.9});break;case`bell`:this._bell(196,.4,7);break;case`bells`:[196,147,220,174,262,196,147].forEach((e,n)=>this._bell(e,.2,6,t+n*.9+Math.random()*.2));break;case`scatter`:n({f:3e3,q:.7,d:1.8,peak:.1,slide:2.2,rev:.7}),[0,1,2,3,4].forEach(e=>r(1400+Math.random()*2e3,{d:.4,peak:.03,t:t+e*.18+Math.random()*.1,rev:.8}));break;case`depart`:n({f:300,d:1.6,peak:.2,slide:.4,white:!1,rev:.6});break;case`deny`:r(140,{d:.14,peak:.16,slide:.7});break;case`whoosh`:n({f:600,q:.7,d:.7,peak:.13,slide:3,rev:.4});break;case`note`:r(587,{type:`triangle`,d:.9,peak:.08,rev:.6});break;case`splash`:n({f:1500,q:.6,d:.5,peak:.2,rev:.4});break;case`cloth`:n({f:1200,q:.5,d:.35,peak:.12,slide:.5});break;case`sluice`:n({f:200,type:`lowpass`,d:1.2,peak:.3,white:!1}),n({f:2400,q:.5,d:3.5,peak:.12,rev:.4,t:t+.8});break;case`awake`:r(55,{type:`sawtooth`,d:9,peak:.12,a:3,rev:.8}),r(110,{type:`triangle`,d:9,peak:.1,a:3,rev:.8}),n({f:400,d:8,a:2.5,peak:.1,slide:6,rev:.8});break;case`thud`:r(70,{d:.3,peak:.4,slide:.5});break;case`voice`:[0,1,2].forEach(e=>r(170+Math.random()*60,{type:`sawtooth`,d:.12,peak:.035,t:t+e*.13,slide:.9,rev:.2}))}}},Nm=new URLSearchParams(location.search),Pm=document.getElementById(`view`),Fm=[];window.__errors=Fm,window.addEventListener(`error`,e=>Fm.push(String(e.message||e))),window.addEventListener(`unhandledrejection`,e=>Fm.push(String(e.reason?.stack||e.reason)));async function Im(){let e=performance.now(),t=Nm.get(`shot`),n=new Lp;t&&(n.root.style.display=`none`);let r={};try{r=JSON.parse(localStorage.getItem(`lightbearer.settings.v1`)||`{}`)||{}}catch{}let i=new vu(Pm,Nm.get(`q`)||r.quality||`medium`);window.__gfx=i;let a=new Ta(60,1,.1,3e4),o=document.getElementById(`stage`);t&&o.classList.add(`free`);let s=()=>{let e=Math.max(1,o.clientWidth),t=Math.max(1,o.clientHeight);i.setSize(e,t),a.aspect=e/t,a.updateProjectionMatrix()};s(),window.addEventListener(`resize`,s);let c=await Dp(i,e=>n.progress(e));if(window.__world=c,window.__loadMs=performance.now()-e,Nm.get(`debug`)&&(J.uDebug.value=Number(Nm.get(`debug`)),i.grade.uExposure.value=1),Nm.get(`nofar`)&&(i.shadows.farBounds=null,J.uShadowFarInfo.value.z=0),t){let e=Op[t];if(!e)throw Error(`unknown shot `+t);c.setRegion(e.region??0),c.applyShotState?.(e),kp(a,e,o.clientWidth/o.clientHeight);let n=Number(Nm.get(`frames`)||8);for(let e=0;e<n;e++)c.update(a,1/60),i.render(c.scene,a,1/60),await new Promise(e=>requestAnimationFrame(e));window.__info={gpu:i.gpu,rev:i.rev,w:i.w,h:i.h,calls:i.stats.calls,tris:i.stats.tris,loadMs:window.__loadMs},window.__ready=!0;return}let l=new hm(i,c,a,n);l.headless=!!Nm.get(`auto`),l.autoQuality=!r.quality&&!Nm.get(`q`),l.audio=new Mm,l.audio.setVolumes(l.settings.master/100,l.settings.music/100,l.settings.sfx/100);let u=()=>l.audio.unlock();window.addEventListener(`pointerdown`,u),window.addEventListener(`keydown`,u),Nm.get(`q`)&&(l.settings.quality=Nm.get(`q`),l.applySettings()),l.regions=[gm(l),_m(l),Gp(l)],l.courts=[new Om(l,{index:0,region:0,center:[-2.4,144.1,14.2],extent:6.25,margin:.6,dark:!0,lanterns:[[-1,-1],[-1,1]],fill:[.9,147.2,14.2]}),new Om(l,{index:1,region:1,center:[36,sd(36,-720)+.16,-720],extent:13.2}),new Om(l,{index:2,region:2,center:[Q.trial[0],Q.trial[1]+.1,Q.trial[2]],extent:13.3,endless:!0,pale:!0})],window.__game=l,n.progress(1),l.frameOnce(1/60),await new Promise(e=>requestAnimationFrame(e));let d=Nm.get(`start`);if(d){let e=Number(d)-1;if(l.flags={r1:{echoGone:!0,inspected:!0,disc:!0,mounted:!0,beam:!0},r2:e>1?{keeper:!0,key:!0,door:!0,cover:!0,beam:!0,echoGone:!0}:{}},Nm.get(`trial`)!=null){let t=l.courts[e];l.meta.trials[t.id]=Number(Nm.get(`trial`))}n.show(`#ui-loading`,!1),l.state=`intro`,l.beginRegion(e,!1)}else l.enterTitle();l.run(),window.__info={gpu:i.gpu,loadMs:performance.now()-e},window.__ready=!0}Im().catch(e=>{Fm.push(String(e.stack||e)),console.error(e),window.__ready=!0});