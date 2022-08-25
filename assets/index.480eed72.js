(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function I(){}function Z(e){return e()}function H(){return Object.create(null)}function k(e){e.forEach(Z)}function ie(e){return typeof e=="function"}function ee(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let P;function J(e,t){return P||(P=document.createElement("a")),P.href=t,e===P.href}function se(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode.removeChild(e)}function ue(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function L(){return N(" ")}function Q(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function $(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function fe(e){return Array.from(e.childNodes)}function U(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let z;function O(e){z=e}const x=[],V=[],q=[],W=[],ae=Promise.resolve();let F=!1;function de(){F||(F=!0,ae.then(te))}function K(e){q.push(e)}const T=new Set;let j=0;function te(){const e=z;do{for(;j<x.length;){const t=x[j];j++,O(t),he(t.$$)}for(O(null),x.length=0,j=0;V.length;)V.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];T.has(n)||(T.add(n),n())}q.length=0}while(x.length);for(;W.length;)W.pop()();F=!1,T.clear(),O(e)}function he(e){if(e.fragment!==null){e.update(),k(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}const B=new Set;let E;function me(){E={r:0,c:[],p:E}}function _e(){E.r||k(E.c),E=E.p}function C(e,t){e&&e.i&&(B.delete(e),e.i(t))}function R(e,t,n,r){if(e&&e.o){if(B.has(e))return;B.add(e),E.c.push(()=>{B.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function pe(e){e&&e.c()}function ne(e,t,n,r){const{fragment:o,on_mount:l,on_destroy:f,after_update:_}=e.$$;o&&o.m(t,n),r||K(()=>{const p=l.map(Z).filter(ie);f?f.push(...p):k(p),e.$$.on_mount=[]}),_.forEach(K)}function re(e,t){const n=e.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(e,t){e.$$.dirty[0]===-1&&(x.push(e),de(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,n,r,o,l,f,_=[-1]){const p=z;O(e);const c=e.$$={fragment:null,ctx:null,props:l,update:I,not_equal:o,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:H(),dirty:_,skip_bound:!1,root:t.target||p.$$.root};f&&f(c.root);let y=!1;if(c.ctx=n?n(e,t.props||{},(a,v,...d)=>{const h=d.length?d[0]:v;return c.ctx&&o(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),y&&ge(e,a)),v}):[],c.update(),y=!0,k(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const a=fe(t.target);c.fragment&&c.fragment.l(a),a.forEach(A)}else c.fragment&&c.fragment.c();t.intro&&C(e.$$.fragment),ne(e,t.target,t.anchor,t.customElement),te()}O(p)}class le{$destroy(){re(this,1),this.$destroy=I}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function $e(e){let t,n,r,o,l,f,_=e[0].name+"",p,c,y,a=e[0].species+"",v;return{c(){t=b("div"),n=b("img"),l=L(),f=b("h2"),p=N(_),c=L(),y=b("h3"),v=N(a),J(n.src,r=e[0].image)||$(n,"src",r),$(n,"alt",o=e[0].name),$(t,"class","character")},m(d,h){S(d,t,h),g(t,n),g(t,l),g(t,f),g(f,p),g(t,c),g(t,y),g(y,v)},p(d,[h]){h&1&&!J(n.src,r=d[0].image)&&$(n,"src",r),h&1&&o!==(o=d[0].name)&&$(n,"alt",o),h&1&&_!==(_=d[0].name+"")&&U(p,_),h&1&&a!==(a=d[0].species+"")&&U(v,a)},i:I,o:I,d(d){d&&A(t)}}}function be(e,t,n){let{character:r}=t;return e.$$set=o=>{"character"in o&&n(0,r=o.character)},[r]}class ye extends le{constructor(t){super(),oe(this,t,be,$e,ee,{character:0})}}function X(e,t,n){const r=e.slice();return r[5]=t[n],r}function Y(e){let t,n;return t=new ye({props:{character:e[5]}}),{c(){pe(t.$$.fragment)},m(r,o){ne(t,r,o),n=!0},p(r,o){const l={};o&1&&(l.character=r[5]),t.$set(l)},i(r){n||(C(t.$$.fragment,r),n=!0)},o(r){R(t.$$.fragment,r),n=!1},d(r){re(t,r)}}}function ve(e){let t,n,r,o,l,f,_,p,c,y,a,v,d,h,M,D,w=e[0],s=[];for(let i=0;i<w.length;i+=1)s[i]=Y(X(e,w,i));const ce=i=>R(s[i],1,1,()=>{s[i]=null});return{c(){t=b("h1"),t.textContent="API Rick and Morty Svelte",n=L(),r=b("div"),o=b("div"),l=b("button"),f=N("previous"),p=L(),c=b("button"),y=N("next"),v=L(),d=b("div");for(let i=0;i<s.length;i+=1)s[i].c();$(t,"class","title"),l.disabled=_=e[1]===1,$(l,"class","btn"),c.disabled=a=e[1]>41,$(c,"class","btn"),$(o,"class","btns"),$(d,"class","grid"),$(r,"class","container")},m(i,m){S(i,t,m),S(i,n,m),S(i,r,m),g(r,o),g(o,l),g(l,f),g(o,p),g(o,c),g(c,y),g(r,v),g(r,d);for(let u=0;u<s.length;u+=1)s[u].m(d,null);h=!0,M||(D=[Q(l,"click",e[3]),Q(c,"click",e[2])],M=!0)},p(i,[m]){if((!h||m&2&&_!==(_=i[1]===1))&&(l.disabled=_),(!h||m&2&&a!==(a=i[1]>41))&&(c.disabled=a),m&1){w=i[0];let u;for(u=0;u<w.length;u+=1){const G=X(i,w,u);s[u]?(s[u].p(G,m),C(s[u],1)):(s[u]=Y(G),s[u].c(),C(s[u],1),s[u].m(d,null))}for(me(),u=w.length;u<s.length;u+=1)ce(u);_e()}},i(i){if(!h){for(let m=0;m<w.length;m+=1)C(s[m]);h=!0}},o(i){s=s.filter(Boolean);for(let m=0;m<s.length;m+=1)R(s[m]);h=!1},d(i){i&&A(t),i&&A(n),i&&A(r),ue(s,i),M=!1,k(D)}}}function we(e,t,n){let r=[],o=1;async function l(){const c=await(await fetch(`https://rickandmortyapi.com/api/character?page=${o}`)).json();n(0,r=c.results)}l();function f(){n(1,o++,o),l()}function _(){n(1,o--,o),l()}return[r,o,f,_]}class Ee extends le{constructor(t){super(),oe(this,t,we,ve,ee,{})}}new Ee({target:document.getElementById("app")});
