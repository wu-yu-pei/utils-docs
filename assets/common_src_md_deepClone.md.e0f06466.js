import{h as r,o as i,c as y,k as s,t,Q as d,a as E}from"./chunks/framework.9ac31df8.js";const c=(n,e)=>{if(n===null||typeof n!="object")return n;const l=(e==null?void 0:e.preserveNonEnumerable)||!1,p=Array.isArray(n)?[]:{};if(l)for(const a in n)(Object.prototype.propertyIsEnumerable.call(n,a)||l)&&(p[a]=c(n[a],e));else{const a=Object.keys(n).concat(Object.getOwnPropertySymbols(n));for(const o of a)Object.prototype.propertyIsEnumerable.call(n,o)&&(p[o]=c(n[o],e))}return p},h=`export interface DeepCopyOptions {
    /**
     * Whether to preserve non-enumerable properties. Default is false.
     */
    preserveNonEnumerable?: boolean;
}
/**
 * Deep clones an object.
 * @param obj The object to deep clone.
 * @param options Options for deep cloning.
 * @returns The deep cloned object.
 */
export declare const deepClone: <T>(obj: T, options?: DeepCopyOptions) => T;
`,u=d(`<h1 id="deepclone" tabindex="-1">deepClone <a class="header-anchor" href="#deepclone" aria-label="Permalink to &quot;deepClone&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>深拷贝一个对象</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { deepClone } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@bnfe/common-utils&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Example usage:</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">originalObject</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  b: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    c: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    d: [</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">clonedObject</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">deepClone</span><span style="color:#E1E4E8;">(originalObject);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(clonedObject </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> originalObject);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { deepClone } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@bnfe/common-utils&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Example usage:</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">originalObject</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  b: {</span></span>
<span class="line"><span style="color:#24292E;">    c: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    d: [</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">clonedObject</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">deepClone</span><span style="color:#24292E;">(originalObject);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(clonedObject </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> originalObject);</span></span></code></pre></div><h2 id="run-code" tabindex="-1">Run Code <a class="header-anchor" href="#run-code" aria-label="Permalink to &quot;Run Code&quot;">​</a></h2>`,6),_={class:"language-js vp-adaptive-theme"},b=s("button",{title:"Copy Code",class:"copy"},null,-1),m=s("span",{class:"lang"},"js",-1),C={class:"shiki github-dark vp-code-dark"},g={class:"line"},f={style:{color:"#E1E4E8"}},v={class:"shiki github-light vp-code-light"},F={class:"line"},k={style:{color:"#24292E"}},O=s("h2",{id:"type-declarations",tabindex:"-1"},[E("Type Declarations "),s("a",{class:"header-anchor",href:"#type-declarations","aria-label":'Permalink to "Type Declarations"'},"​")],-1),D={class:"language-ts vp-adaptive-theme"},j=s("button",{title:"Copy Code",class:"copy"},null,-1),T=s("span",{class:"lang"},"ts",-1),A={class:"shiki github-dark vp-code-dark"},q={class:"line"},x={style:{color:"#E1E4E8"}},B={class:"shiki github-light vp-code-light"},P={class:"line"},N={style:{color:"#24292E"}},I=JSON.parse('{"title":"deepClone","description":"","frontmatter":{},"headers":[],"relativePath":"common/src/md/deepClone.md","filePath":"common/src/md/deepClone.md"}'),S={name:"common/src/md/deepClone.md"},R=Object.assign(S,{setup(n){const e=r(h),l=r("null");function p(){const a={a:1,b:{c:2,d:[3,4]}},o=c(a);l.value=o===a}return(a,o)=>(i(),y("div",null,[u,s("p",null,[s("button",{onClick:p},"运行")]),s("div",_,[b,m,s("pre",C,[s("code",null,[s("span",g,[s("span",f,t(l.value),1)])])]),s("pre",v,[s("code",null,[s("span",F,[s("span",k,t(l.value),1)])])])]),O,s("div",D,[j,T,s("pre",A,[s("code",null,[s("span",q,[s("span",x,t(e.value),1)])])]),s("pre",B,[s("code",null,[s("span",P,[s("span",N,t(e.value),1)])])])])]))}});export{I as __pageData,R as default};
