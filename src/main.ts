import './style.css'
import typescriptLogo from '/typescript.svg'
import viteLogo from '/vite.svg'
import bunLogo from '/bun.svg'
import changesetsLogo from '/changesets.svg'

import pkg from '../package.json'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://bun.sh" target="_blank">
      <img src="${bunLogo}" class="logo bun" alt="Vite logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <a href="https://github.com/changesets/changesets" target="_blank">
      <img src="${changesetsLogo}" class="logo vanilla" alt="Changesets logo" />
    </a>
    <h2>Bun + Vite + TypeScript + Changesets</h2>
    <h1>changesets-demo@${pkg.version}</h1>
    <p></p>
  </div>
`
