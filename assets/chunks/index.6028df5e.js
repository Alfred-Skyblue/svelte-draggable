import{S as R,i as U,s as V,b as B,a as E,e as u,c as F,d as D,t as f,f as h,g as c,m as G,h as m,j as H,k as S,l as I,n as K,o as b,p as L}from"./index.34bfd118.js";import{D as M}from"./draggable.7565f46e.js";function W(a){let t,n=a[6].name+"",l;return{c(){t=u("div"),l=f(n),h(t,"slot","element")},m(s,i){c(s,t,i),m(t,l)},p(s,i){i&64&&n!==(n=s[6].name+"")&&S(l,n)},d(s){s&&b(t)}}}function X(a){let t,n=a[6].name+"",l;return{c(){t=u("div"),l=f(n),h(t,"slot","element")},m(s,i){c(s,t,i),m(t,l)},p(s,i){i&64&&n!==(n=s[6].name+"")&&S(l,n)},d(s){s&&b(t)}}}function Y(a){let t,n,l,s,i,d,_,p,o,j,v=JSON.stringify(a[0],null,2)+"",k,q,C,$,T,J=JSON.stringify(a[1],null,2)+"",N,y,g;function P(e){a[4](e)}let z={key:"id",options:a[2],$$slots:{element:[W,({item:e})=>({6:e}),({item:e})=>e?64:0]},$$scope:{ctx:a}};a[0]!==void 0&&(z.items=a[0]),n=new M({props:z}),B.push(()=>E(n,"items",P));function Q(e){a[5](e)}let A={key:"id",options:a[3],$$slots:{element:[X,({item:e})=>({6:e}),({item:e})=>e?64:0]},$$scope:{ctx:a}};return a[1]!==void 0&&(A.items=a[1]),i=new M({props:A}),B.push(()=>E(i,"items",Q)),{c(){t=u("div"),F(n.$$.fragment),s=D(),F(i.$$.fragment),_=D(),p=u("div"),o=u("pre"),j=f("		"),k=f(v),q=f(`
	`),C=D(),$=u("pre"),T=f("		"),N=f(J),y=f(`
	`),h(t,"class","flex"),h(p,"class","flex")},m(e,r){c(e,t,r),G(n,t,null),m(t,s),G(i,t,null),c(e,_,r),c(e,p,r),m(p,o),m(o,j),m(o,k),m(o,q),m(p,C),m(p,$),m($,T),m($,N),m($,y),g=!0},p(e,[r]){const O={};r&192&&(O.$$scope={dirty:r,ctx:e}),!l&&r&1&&(l=!0,O.items=e[0],H(()=>l=!1)),n.$set(O);const w={};r&192&&(w.$$scope={dirty:r,ctx:e}),!d&&r&2&&(d=!0,w.items=e[1],H(()=>d=!1)),i.$set(w),(!g||r&1)&&v!==(v=JSON.stringify(e[0],null,2)+"")&&S(k,v),(!g||r&2)&&J!==(J=JSON.stringify(e[1],null,2)+"")&&S(N,J)},i(e){g||(I(n.$$.fragment,e),I(i.$$.fragment,e),g=!0)},o(e){K(n.$$.fragment,e),K(i.$$.fragment,e),g=!1},d(e){e&&(b(t),b(_),b(p)),L(n),L(i)}}}function Z(a,t,n){let l=[{name:"Joao",id:"1"},{name:"Jean",id:"2"},{name:"Johanna",id:"3"},{name:"Juan",id:"4"}],s=l.map(o=>({name:`${o.name}-2`,id:`${o.id}-2`}));const i={animation:150,group:"people"},d={animation:150,group:"people"};function _(o){l=o,n(0,l)}function p(o){s=o,n(1,s)}return[l,s,i,d,_,p]}class te extends R{constructor(t){super(),U(this,t,Z,Y,V,{})}}export{te as default};