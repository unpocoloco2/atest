function h(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function v(t){return t()}function z(){return Object.create(null)}function m(t){t.forEach(v)}function H(t){return typeof t=="function"}function I(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function G(t){return Object.keys(t).length===0}function ot(t,n,e,i){if(t){const c=B(t,n,e,i);return t[0](c)}}function B(t,n,e,i){return t[1]&&i?F(e.ctx.slice(),t[1](i(n))):e.ctx}function lt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|c[l];return s}return n.dirty|c}return n.dirty}function ut(t,n,e,i,c,s){if(c){const o=B(n,e,i,s);t.p(o,c)}}function st(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let b=!1;function J(){b=!0}function K(){b=!1}function Q(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:Q(1,c,x=>n[e[x]].claim_order,u))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const s=[],o=[];let l=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);l>=r;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<o.length;r++){for(;u<s.length&&o[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(o[r],a)}}function W(t,n){if(b){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ft(t,n,e){b&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function at(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function dt(){return k(" ")}function _t(){return k("")}function ht(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function mt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,i,c=!1){Y(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const r=e(l);return r===void 0?t.splice(o,1):t[o]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,n,e,i){return L(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>c.removeAttribute(o))},()=>i(n))}function pt(t,n,e){return Z(t,n,e,V)}function tt(t,n){return L(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function yt(t){return tt(t," ")}function gt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function xt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function bt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let p;function y(t){p=t}function A(){if(!p)throw new Error("Function called outside component initialization");return p}function $t(t){A().$$.on_mount.push(t)}function wt(t){A().$$.after_update.push(t)}function Et(t,n){A().$$.context.set(t,n)}const g=[],O=[],$=[],S=[],P=Promise.resolve();let j=!1;function T(){j||(j=!0,P.then(D))}function kt(){return T(),P}function N(t){$.push(t)}function At(t){S.push(t)}const C=new Set;let w=0;function D(){const t=p;do{for(;w<g.length;){const n=g[w];w++,y(n),nt(n.$$)}for(y(null),g.length=0,w=0;O.length;)O.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];C.has(e)||(C.add(e),e())}$.length=0}while(g.length);for(;S.length;)S.pop()();j=!1,C.clear(),y(t)}function nt(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const E=new Set;let d;function St(){d={r:0,c:[],p:d}}function jt(){d.r||m(d.c),d=d.p}function et(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Nt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Ct(t,n){const e={},i={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const r in o)r in l||(i[r]=1);for(const r in l)c[r]||(e[r]=l[r],c[r]=1);t[s]=l}else for(const r in o)c[r]=1}for(const o in i)o in e||(e[o]=void 0);return e}function qt(t){return typeof t=="object"&&t!==null?t:{}}function Mt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function vt(t){t&&t.c()}function zt(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:c,on_mount:s,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),i||N(()=>{const r=s.map(v).filter(H);o?o.push(...r):m(r),t.$$.on_mount=[]}),l.forEach(N)}function rt(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(g.push(t),T(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Bt(t,n,e,i,c,s,o,l=[-1]){const r=p;y(t);const u=t.$$={fragment:null,ctx:null,props:s,update:h,not_equal:c,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:z(),dirty:l,skip_bound:!1,root:n.target||r.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,x,...q)=>{const M=q.length?q[0]:x;return u.ctx&&c(u.ctx[f],u.ctx[f]=M)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](M),a&&ct(t,f)),x}):[],u.update(),a=!0,m(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){J();const f=X(n.target);u.fragment&&u.fragment.l(f),f.forEach(U)}else u.fragment&&u.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),K(),D()}y(r)}class Lt{$destroy(){rt(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const _=[];function Ot(t,n=h){let e;const i=new Set;function c(l){if(I(t,l)&&(t=l,e)){const r=!_.length;for(const u of i)u[1](),_.push(u,t);if(r){for(let u=0;u<_.length;u+=2)_[u][0](_[u+1]);_.length=0}}}function s(l){c(l(t))}function o(l,r=h){const u=[l,r];return i.add(u),i.size===1&&(e=n(c)||h),l(t),()=>{i.delete(u),i.size===0&&(e(),e=null)}}return{set:c,update:s,subscribe:o}}export{qt as A,rt as B,F as C,Ot as D,kt as E,ot as F,ut as G,st as H,lt as I,W as J,h as K,O as L,ht as M,at as N,H as O,Mt as P,At as Q,bt as R,Lt as S,X as a,mt as b,pt as c,U as d,V as e,xt as f,ft as g,tt as h,Bt as i,gt as j,dt as k,_t as l,yt as m,St as n,Nt as o,jt as p,et as q,Et as r,I as s,k as t,wt as u,$t as v,vt as w,zt as x,it as y,Ct as z};