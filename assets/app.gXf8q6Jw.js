function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as o,f4 as p,f5 as u,f6 as f,f7 as l,f8 as c,f9 as d,fa as m,fb as h,fc as g,fd as A,a2 as P,d as _,u as v,l as R,z as w,fe as y,ff as C,fg as E,a8 as b}from"./chunks/framework.D6DJJm7k.js";import{R as T}from"./chunks/theme.Bjm5v1N2.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(T),S=_({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=v();return R(()=>{w(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&y(),C(),E(),s.setup&&s.setup(),()=>b(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=L(),t=j();t.provide(u,e);const a=f(e.route);return t.provide(l,a),t.component("Content",c),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:m}),{app:t,router:e,data:a}}function j(){return h(S)}function L(){let e=o,t;return g(a=>{let n=A(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{D as createApp};