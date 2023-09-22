import{h as p,o as r,c,k as s,t,Q as i,a as d}from"./chunks/framework.9ac31df8.js";function u(a){a=a||window.location.href;const n=JSON.parse("{}");if(a.indexOf("?")===-1)return n;let o=a[0]==="?"?a.substr(1):a.substring(a.lastIndexOf("?")+1);if(o==="")return n;o=o.split("&");for(let e=0;e<o.length;e++){const l=o[e].split("=");n[decodeURIComponent(l[0])]=decodeURIComponent(l[1]||"")}return n}const h=`/**
 * 转换浏览器url参数为json对象
 * @param url window.location.href ： ?title=你好url&test=true
 * @returns JSON | null 参数值
 */
export declare function parseUrlValToJson(url: string): JSON | null;
`,_=i(`<h1 id="parseurlvaltojson" tabindex="-1">parseUrlValToJson <a class="header-anchor" href="#parseurlvaltojson" aria-label="Permalink to &quot;parseUrlValToJson&quot;">​</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>将queryString 转化为 JSON格式</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { parseUrlValToJson } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@bnfe/web-utils&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">value</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseUrlValToJson</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;?title=你好url&amp;test=true&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(value);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { parseUrlValToJson } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@bnfe/web-utils&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">value</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseUrlValToJson</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;?title=你好url&amp;test=true&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(value);</span></span></code></pre></div><h2 id="run-code" tabindex="-1">Run Code <a class="header-anchor" href="#run-code" aria-label="Permalink to &quot;Run Code&quot;">​</a></h2>`,6),y={class:"language-js vp-adaptive-theme"},E=s("button",{title:"Copy Code",class:"copy"},null,-1),b=s("span",{class:"lang"},"js",-1),g={class:"shiki github-dark vp-code-dark"},v={class:"line"},m={style:{color:"#E1E4E8"}},f={class:"shiki github-light vp-code-light"},T={class:"line"},k={style:{color:"#24292E"}},C=s("h2",{id:"type-declarations",tabindex:"-1"},[d("Type Declarations "),s("a",{class:"header-anchor",href:"#type-declarations","aria-label":'Permalink to "Type Declarations"'},"​")],-1),q={class:"language-ts vp-adaptive-theme"},J=s("button",{title:"Copy Code",class:"copy"},null,-1),V=s("span",{class:"lang"},"ts",-1),F={class:"shiki github-dark vp-code-dark"},U={class:"line"},x={style:{color:"#E1E4E8"}},D={class:"shiki github-light vp-code-light"},S={class:"line"},w={style:{color:"#24292E"}},B=JSON.parse('{"title":"parseUrlValToJson","description":"","frontmatter":{},"headers":[],"relativePath":"web/src/md/parseUrlValToJson.md","filePath":"web/src/md/parseUrlValToJson.md"}'),N={name:"web/src/md/parseUrlValToJson.md"},O=Object.assign(N,{setup(a){const n=p(h),o=p("null");function e(){const l=u("?title=你好url&test=true");o.value=l}return(l,P)=>(r(),c("div",null,[_,s("p",null,[s("button",{onClick:e},"运行")]),s("div",y,[E,b,s("pre",g,[s("code",null,[s("span",v,[s("span",m,t(o.value),1)])])]),s("pre",f,[s("code",null,[s("span",T,[s("span",k,t(o.value),1)])])])]),C,s("div",q,[J,V,s("pre",F,[s("code",null,[s("span",U,[s("span",x,t(n.value),1)])])]),s("pre",D,[s("code",null,[s("span",S,[s("span",w,t(n.value),1)])])])])]))}});export{B as __pageData,O as default};
