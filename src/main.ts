import './style.css'
import typescriptLogo from '/typescript.svg'
import viteLogo from '/vite.svg'
import bunLogo from '/bun.svg'

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
    <h2>Bun + Vite + TypeScript</h2>
    <h1>changesets-demo@${pkg.version}</h1>
  </div>
`
