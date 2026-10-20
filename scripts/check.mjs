// Three checks, all must pass:
// 1. every color pair in contrastPairs reaches WCAG AA (4.5:1);
// 2. css/tokens.css and site/tokens.css are up to date with tokens/;
// 3. the site loads tokens.css, doesn't redefine any token and takes motion from the tokens.

import { readFileSync } from 'node:fs';
import { loadTokens, buildCSS, cssVars } from './css.mjs';

const t = loadTokens();
let failed = 0;
const fail = (msg) => { failed++; console.log(`  ✗ ${msg}`); };

// ── 1. Contraste ──
function luminance(hex) {
  const n = parseInt(hex.slice(1), 16);
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * ch[0] + 0.7152 * ch[1] + 0.0722 * ch[2];
}
function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
console.log('Contraste (AA 4,5:1)');
for (const p of t.contrastPairs) {
  const r = contrast(p.background, p.text);
  const line = `${p.name.padEnd(24)} ${r.toFixed(2).replace('.', ',')}:1`;
  if (r < 4.5) fail(line); else console.log(`  ✓ ${line}`);
}

// ── 2. CSS gerado ──
const css = buildCSS(t);
for (const f of ['css/tokens.css', 'site/tokens.css']) {
  console.log(f);
  let cur = '';
  try { cur = readFileSync(new URL(`../${f}`, import.meta.url), 'utf8'); } catch {}
  if (cur !== css) fail('desatualizado: rode npm run build');
  else console.log('  ✓ em dia');
}

// ── 3. Site ──
// The site reads every token from tokens.css; it must not redefine them.
console.log('site/index.html');
const html = readFileSync(new URL('../site/index.html', import.meta.url), 'utf8');
if (!/<link rel="stylesheet" href="tokens\.css">/.test(html)) fail('não carrega tokens.css');
else console.log('  ✓ carrega tokens.css');
const style = (html.match(/<style>[\s\S]*?<\/style>/g) || []).join('\n');
const redefined = Object.keys(cssVars(t)).filter((k) => new RegExp(`(^|[;{\\s])${k}\\s*:`).test(style));
if (redefined.length) fail(`redefine tokens no CSS da página: ${redefined.join(', ')}`);
else console.log('  ✓ nenhum token redefinido na página');
// Motion must come from the tokens: no raw durations or curves in transitions/animations.
const motion = style.match(/(transition|animation)(-[a-z-]+)?\s*:[^;}]*/g) || [];
const raw = motion.filter((d) => /(^|[\s,(:])\.?\d+(\.\d+)?m?s\b|cubic-bezier|ease-in-out|\bease\b(?!-)|\blinear\b/.test(d.replace(/^[a-z-]+\s*:/, ':')));
if (raw.length) fail(`movimento fora dos tokens: ${raw.slice(0, 3).join(' | ')}${raw.length > 3 ? ` (+${raw.length - 3})` : ''}`);
else console.log(`  ✓ ${motion.length} transições e animações usam os tokens de movimento`);

if (failed) {
  console.log(`\n${failed} problema(s).`);
  process.exit(1);
}
console.log('\nTudo certo.');
