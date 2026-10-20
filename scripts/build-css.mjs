import { writeFileSync } from 'node:fs';
import { loadTokens, buildCSS } from './css.mjs';

// css/ is for apps; site/ gets its own copy so it can be deployed as a static folder.
const css = buildCSS(loadTokens());
for (const out of ['../css/tokens.css', '../site/tokens.css']) {
  writeFileSync(new URL(out, import.meta.url), css);
}
console.log('css/tokens.css e site/tokens.css gerados');
