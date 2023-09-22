import{h as l,o as p,c as i,k as s,t as a,Q as r,a as d}from"./chunks/framework.9ac31df8.js";function u(e){return e?window.sessionStorage.getItem(e):null}const h=`/**
 * 获取localStorage
 * @param name key值
 * @return string
 */
export declare function getSession(name: string): string | null;
`,_=r(`<h1 id="getsession" tabindex="-1">getSession <a class="header-anchor" href="#getsession" aria-label="Permalink to &quot;getSession&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>从 sessionStorage 总获取值</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getSession } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@bnfe/web-utils&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getSession</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getSession } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@bnfe/web-utils&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getSession</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(value);</span></span></code></pre></div><h2 id="run-code" tabindex="-1">Run Code <a class="header-anchor" href="#run-code" aria-label="Permalink to &quot;Run Code&quot;">​</a></h2>`,6),y={class:"language-js vp-adaptive-theme"},E=s("button",{title:"Copy Code",class:"copy"},null,-1),g=s("span",{class:"lang"},"js",-1),b={class:"shiki github-dark vp-code-dark"},v={class:"line"},m={style:{color:"#E1E4E8"}},f={class:"shiki github-light vp-code-light"},k={class:"line"},S={style:{color:"#24292E"}},C=s("h2",{id:"type-declarations",tabindex:"-1"},[d("Type Declarations "),s("a",{class:"header-anchor",href:"#type-declarations","aria-label":'Permalink to "Type Declarations"'},"​")],-1),q={class:"language-ts vp-adaptive-theme"},F=s("button",{title:"Copy Code",class:"copy"},null,-1),D=s("span",{class:"lang"},"ts",-1),T={class:"shiki github-dark vp-code-dark"},x={class:"line"},P={style:{color:"#E1E4E8"}},B={class:"shiki github-light vp-code-light"},w={class:"line"},A={style:{color:"#24292E"}},I=JSON.parse('{"title":"getSession","description":"","frontmatter":{},"headers":[],"relativePath":"web/src/md/getSession.md","filePath":"web/src/md/getSession.md"}'),j={name:"web/src/md/getSession.md"},R=Object.assign(j,{setup(e){const o=l(h),n=l("null");function c(){const t=u("info");n.value=t||"success:but no date"}return(t,N)=>(p(),i("div",null,[_,s("p",null,[s("button",{onClick:c},"运行")]),s("div",y,[E,g,s("pre",b,[s("code",null,[s("span",v,[s("span",m,a(n.value),1)])])]),s("pre",f,[s("code",null,[s("span",k,[s("span",S,a(n.value),1)])])])]),C,s("div",q,[F,D,s("pre",T,[s("code",null,[s("span",x,[s("span",P,a(o.value),1)])])]),s("pre",B,[s("code",null,[s("span",w,[s("span",A,a(o.value),1)])])])])]))}});export{I as __pageData,R as default};
