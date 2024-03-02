(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const o="/changesets-demo/typescript.svg",i="/changesets-demo/vite.svg",h="/changesets-demo/bun.svg",l="/changesets-demo/changesets.svg",d="changesets-demo",r="4.2.1",g="index.ts",u="module",p="Maciek Sitkowski",m={"changelog-to-html":"marked -i CHANGELOG.md -o CHANGELOG.html",dev:"bun run changelog-to-html && vite",build:"tsc && bun run changelog-to-html && vite build",preview:"vite preview",changeset:"changeset",version:"changeset version",publish:"changeset publish"},f={"@changesets/changelog-github":"^0.5.0","@changesets/cli":"^2.27.1","@svitejs/changesets-changelog-github-compact":"^1.1.0","@types/bun":"latest","conventional-commits-parser":"^5.0.0",vite:"^5.1.4"},b={typescript:"^5.0.0"},v={marked:"^12.0.0"},y={name:d,version:r,module:g,private:!0,type:u,author:p,scripts:m,devDependencies:f,peerDependencies:b,dependencies:v},k=`<h1>changesets-demo</h1>
<h2>4.2.1</h2>
<h3>Patch Changes</h3>
<ul>
<li><p>Style horizontal line in the header 💅 (<a href="https://github.com/sitek94/changesets-demo/pull/11">#11</a>)</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aliquam ipsa ullam in modi eum quos et aspernatur,
saepe ex autem eveniet illum magni sed distinctio omnis, placeat voluptatem enim.</p>
</li>
</ul>
<h2>4.2.0</h2>
<h3>Minor Changes</h3>
<ul>
<li>Convert Changelog from Markdown to HTML using <code>marked</code> and display it as part of the website. (<a href="https://github.com/sitek94/changesets-demo/commit/70f8e13cbe5743548e16721c236e5421eb3dac42"><code>70f8e13cbe5743548e16721c236e5421eb3dac42</code></a>)</li>
</ul>
<h2>4.1.0</h2>
<h3>Minor Changes</h3>
<ul>
<li>Add changesets logo 🦋
(<a href="https://github.com/sitek94/changesets-demo/commit/04aeea8850685071c6c7f5e43e02e80ec5aed002"><code>04aeea8850685071c6c7f5e43e02e80ec5aed002</code></a>)</li>
</ul>
<h3>Patch Changes</h3>
<ul>
<li>use release type to trigger deploy
(<a href="https://github.com/sitek94/changesets-demo/commit/f5ac0fc67b86eb909d01165440a7a2c809594cfe"><code>f5ac0fc67b86eb909d01165440a7a2c809594cfe</code></a>)</li>
<li>don&#39;t setup github-actions user</li>
</ul>
<h2>4.0.2</h2>
<h3>Patch Changes</h3>
<ul>
<li>add patch
(<a href="https://github.com/sitek94/changesets-demo/commit/d437ae063151a4c9be62cfc4ac3fe51c2992131a"><code>d437ae063151a4c9be62cfc4ac3fe51c2992131a</code></a>)</li>
</ul>
<h2>4.0.1</h2>
<h3>Patch Changes</h3>
<ul>
<li>add fake patch
(<a href="https://github.com/sitek94/changesets-demo/commit/52468a6416997c200528bb8e41c07c526318d107"><code>52468a6416997c200528bb8e41c07c526318d107</code></a>)</li>
</ul>
<h2>4.0.0</h2>
<h3>Major Changes</h3>
<ul>
<li>add fake major change
(<a href="https://github.com/sitek94/changesets-demo/commit/325e6ca05222671d8acce82c205177249a75c1cc"><code>325e6ca05222671d8acce82c205177249a75c1cc</code></a>)</li>
</ul>
<h2>3.0.1</h2>
<h3>Patch Changes</h3>
<ul>
<li>add fake patch
(<a href="https://github.com/sitek94/changesets-demo/commit/8c80d5edaf1306c697d97423363c9c53c6aa2c53"><code>8c80d5edaf1306c697d97423363c9c53c6aa2c53</code></a>)</li>
</ul>
<h2>3.0.0</h2>
<h3>Major Changes</h3>
<ul>
<li><p>use Vite.js! 🚀
(<a href="https://github.com/sitek94/changesets-demo/commit/9b6300aacf5e0dc0502e2c3546b28ed8ec4201a2"><code>9b6300aacf5e0dc0502e2c3546b28ed8ec4201a2</code></a>)</p>
<p>Why not? Let&#39;s create and deploy a simple website to test the full build, deploy and release process.</p>
</li>
</ul>
<h2>2.0.2</h2>
<h3>Patch Changes</h3>
<ul>
<li>feature 3
(<a href="https://github.com/sitek94/changesets-demo/commit/9e59b3516d0c39edfc30d048adf72e366d4fc0b4"><code>9e59b3516d0c39edfc30d048adf72e366d4fc0b4</code></a>)</li>
</ul>
<h2>2.0.1</h2>
<h3>Patch Changes</h3>
<ul>
<li>add feat 2 (<a href="https://github.com/sitek94/changesets-demo/pull/1">#1</a>)</li>
</ul>
<h2>2.0.0</h2>
<h3>Major Changes</h3>
<ul>
<li><p>72caaec: Initial release</p>
<p>This is the start of the project. Let&#39;s see!:</p>
</li>
</ul>
<h3>Minor Changes</h3>
<ul>
<li>33cdfe2: add feature 1</li>
</ul>
`,C=k.replace(`<h1>changesets-demo</h1>
`,"");document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://bun.sh" target="_blank">
      <img src="${h}" class="logo bun" alt="Vite logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${i}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${o}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://github.com/changesets/changesets" target="_blank">
      <img src="${l}" class="logo vanilla" alt="Changesets logo" />
    </a>
    <h2>Bun + Vite + TypeScript + Changesets</h2>
    <hr />
    <h1>changesets-demo@${y.version}</h1>
    <article class="changelog">
      ${C}
    </article>
  </div>
`;
