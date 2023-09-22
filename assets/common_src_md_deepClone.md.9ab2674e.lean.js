import{h as r,o as i,c as y,k as s,t,Q as d,a as E}from"./chunks/framework.f0534666.js";const c=(n,e)=>{if(n===null||typeof n!="object")return n;const l=(e==null?void 0:e.preserveNonEnumerable)||!1,p=Array.isArray(n)?[]:{};if(l)for(const a in n)(Object.prototype.propertyIsEnumerable.call(n,a)||l)&&(p[a]=c(n[a],e));else{const a=Object.keys(n).concat(Object.getOwnPropertySymbols(n));for(const o of a)Object.prototype.propertyIsEnumerable.call(n,o)&&(p[o]=c(n[o],e))}return p},h=`export interface DeepCopyOptions {
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
`,u=d("",6),_={class:"language-js vp-adaptive-theme"},b=s("button",{title:"Copy Code",class:"copy"},null,-1),m=s("span",{class:"lang"},"js",-1),C={class:"shiki github-dark vp-code-dark"},g={class:"line"},f={style:{color:"#E1E4E8"}},v={class:"shiki github-light vp-code-light"},F={class:"line"},k={style:{color:"#24292E"}},O=s("h2",{id:"type-declarations",tabindex:"-1"},[E("Type Declarations "),s("a",{class:"header-anchor",href:"#type-declarations","aria-label":'Permalink to "Type Declarations"'},"​")],-1),D={class:"language-ts vp-adaptive-theme"},j=s("button",{title:"Copy Code",class:"copy"},null,-1),T=s("span",{class:"lang"},"ts",-1),A={class:"shiki github-dark vp-code-dark"},q={class:"line"},x={style:{color:"#E1E4E8"}},B={class:"shiki github-light vp-code-light"},P={class:"line"},N={style:{color:"#24292E"}},I=JSON.parse('{"title":"deepClone","description":"","frontmatter":{},"headers":[],"relativePath":"common/src/md/deepClone.md","filePath":"common/src/md/deepClone.md"}'),S={name:"common/src/md/deepClone.md"},R=Object.assign(S,{setup(n){const e=r(h),l=r("null");function p(){const a={a:1,b:{c:2,d:[3,4]}},o=c(a);l.value=o===a}return(a,o)=>(i(),y("div",null,[u,s("p",null,[s("button",{onClick:p},"运行")]),s("div",_,[b,m,s("pre",C,[s("code",null,[s("span",g,[s("span",f,t(l.value),1)])])]),s("pre",v,[s("code",null,[s("span",F,[s("span",k,t(l.value),1)])])])]),O,s("div",D,[j,T,s("pre",A,[s("code",null,[s("span",q,[s("span",x,t(e.value),1)])])]),s("pre",B,[s("code",null,[s("span",P,[s("span",N,t(e.value),1)])])])])]))}});export{I as __pageData,R as default};
