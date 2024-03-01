(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i="/changesets-demo/typescript.svg",c="/changesets-demo/vite.svg",a="/changesets-demo/bun.svg",l="changesets-demo",p="4.0.2",g="index.ts",u="module",d="Maciek Sitkowski",h={dev:"vite",build:"tsc && vite build",preview:"vite preview",changeset:"changeset",version:"changeset version",publish:"changeset publish"},m={"@changesets/changelog-github":"^0.5.0","@changesets/cli":"^2.27.1","@svitejs/changesets-changelog-github-compact":"^1.1.0","@types/bun":"latest","conventional-commits-parser":"^5.0.0",vite:"^5.1.4"},v={typescript:"^5.0.0"},f={name:l,version:p,module:g,private:!0,type:u,author:d,scripts:h,devDependencies:m,peerDependencies:v};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://bun.sh" target="_blank">
      <img src="${a}" class="logo bun" alt="Vite logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${c}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${i}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h2>Bun + Vite + TypeScript</h2>
    <h1>changesets-demo@${f.version}</h1>
  </div>
`;
