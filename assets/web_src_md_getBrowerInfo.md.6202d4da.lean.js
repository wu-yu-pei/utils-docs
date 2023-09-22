import{h as l,o as i,c,k as e,t as o,Q as p,a as d}from"./chunks/framework.f0534666.js";const h=()=>{const s=navigator.userAgent;return{trident:s.indexOf("Trident")>-1,presto:s.indexOf("Presto")>-1,webKit:s.indexOf("AppleWebKit")>-1,gecko:s.indexOf("Gecko")>-1&&s.indexOf("KHTML")===-1,mobile:!!s.match(/AppleWebKit.*Mobile.*/)||!!s.match(/AppleWebKit/),ios:!!s.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:s.indexOf("Android")>-1||s.indexOf("Linux")>-1,iPhone:s.indexOf("iPhone")>-1||s.indexOf("Mac")>-1,iPad:s.indexOf("iPad")>-1,webApp:s.indexOf("Safari")===-1,weiXin:s.indexOf("MicroMessenger")>-1}},_=`/**
 * @method 获取浏览器版本
 */
export declare const getBrowerInfo: () => {
    trident: boolean;
    presto: boolean;
    webKit: boolean;
    gecko: boolean;
    mobile: boolean;
    ios: boolean;
    android: boolean;
    iPhone: boolean;
    iPad: boolean;
    webApp: boolean;
    weiXin: boolean;
};
`,u=p("",6),b={class:"language-js vp-adaptive-theme"},y=e("button",{title:"Copy Code",class:"copy"},null,-1),f=e("span",{class:"lang"},"js",-1),g={class:"shiki github-dark vp-code-dark"},E={class:"line"},m={style:{color:"#E1E4E8"}},v={class:"shiki github-light vp-code-light"},w={class:"line"},k={style:{color:"#24292E"}},x=e("h2",{id:"type-declarations",tabindex:"-1"},[d("Type Declarations "),e("a",{class:"header-anchor",href:"#type-declarations","aria-label":'Permalink to "Type Declarations"'},"​")],-1),B={class:"language-ts vp-adaptive-theme"},P=e("button",{title:"Copy Code",class:"copy"},null,-1),C=e("span",{class:"lang"},"ts",-1),O={class:"shiki github-dark vp-code-dark"},A={class:"line"},I={style:{color:"#E1E4E8"}},q={class:"shiki github-light vp-code-light"},T={class:"line"},D={style:{color:"#24292E"}},M=JSON.parse('{"title":"getBrowerInfo","description":"","frontmatter":{},"headers":[],"relativePath":"web/src/md/getBrowerInfo.md","filePath":"web/src/md/getBrowerInfo.md"}'),F={name:"web/src/md/getBrowerInfo.md"},j=Object.assign(F,{setup(s){const a=l(_),n=l("null");function r(){const t=h();n.value=t}return(t,S)=>(i(),c("div",null,[u,e("p",null,[e("button",{onClick:r},"运行")]),e("div",b,[y,f,e("pre",g,[e("code",null,[e("span",E,[e("span",m,o(n.value),1)])])]),e("pre",v,[e("code",null,[e("span",w,[e("span",k,o(n.value),1)])])])]),x,e("div",B,[P,C,e("pre",O,[e("code",null,[e("span",A,[e("span",I,o(a.value),1)])])]),e("pre",q,[e("code",null,[e("span",T,[e("span",D,o(a.value),1)])])])])]))}});export{M as __pageData,j as default};
