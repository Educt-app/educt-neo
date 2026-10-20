// Exports the brand (logo D, three-layer icon, PRO seal) from the site page
// as standalone SVGs with resolved colors, plus PNG icons.
// Needs a Chrome/Chromium binary: CHROME=/path/to/chrome node scripts/export-marca.mjs

import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const CHROME = process.env.CHROME || 'google-chrome';
const root = new URL('..', import.meta.url);
const path = (p) => fileURLToPath(new URL(p, root));
const run = (args) => execFileSync(CHROME, ['--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', ...args], { encoding: 'utf8', maxBuffer: 64 << 20, stdio: ['ignore', 'pipe', 'ignore'] });

// Runs inside the site after the logo script has rendered.
const INJECT = `<script>
(function(){
  const cv=document.createElement('canvas');cv.width=cv.height=1;const x=cv.getContext('2d',{willReadFrequently:true});
  function color(c){
    if(!c||c==='none')return 'none';
    x.fillStyle='#010203';x.fillStyle=c;
    if(x.fillStyle==='#010203'&&!/^#010203$/i.test(c))throw new Error('cor não suportada: '+c);
    x.clearRect(0,0,1,1);x.fillRect(0,0,1,1);
    const d=x.getImageData(0,0,1,1).data;
    if(d[3]===0)return 'none';
    return '#'+[d[0],d[1],d[2]].map(v=>v.toString(16).padStart(2,'0')).join('').toUpperCase();
  }
  function standalone(svg,mod){
    const src=[svg,...svg.querySelectorAll('*')], out=svg.cloneNode(true), dst=[out,...out.querySelectorAll('*')];
    src.forEach((el,i)=>{
      const o=dst[i], cs=getComputedStyle(el);
      o.removeAttribute('style');o.removeAttribute('class');
      if(el===svg)return;
      o.setAttribute('fill',color(cs.fill));
      const st=color(cs.stroke);
      if(st!=='none'){o.setAttribute('stroke',st);o.setAttribute('stroke-width',parseFloat(cs.strokeWidth));o.setAttribute('stroke-linejoin',cs.strokeLinejoin);}
      if(cs.paintOrder&&cs.paintOrder!=='normal')o.setAttribute('paint-order',cs.paintOrder);
      if(o.tagName==='use'){
        const ref=document.getElementById(o.getAttribute('href').slice(1));
        const p=document.createElementNS('http://www.w3.org/2000/svg','path');
        for(const a of o.attributes)if(a.name!=='href')p.setAttribute(a.name,a.value);
        p.setAttribute('d',ref.getAttribute('d'));o.replaceWith(p);
      }
    });
    out.setAttribute('xmlns','http://www.w3.org/2000/svg');
    if(mod)mod(out);
    return out.outerHTML;
  }
  const q=s=>{const el=document.querySelector(s);if(!el)throw new Error('não achei '+s);return el;};
  const icon=q('#lg-icone .lg-ic .lg-tiles svg');
  const res={
    logo:standalone(q('#lg-degrade .lg-paper svg')),
    icone:standalone(icon),
    // lojas aplicam a própria máscara: quadrado cheio, sem borda nem canto
    iconeLoja:standalone(icon,o=>{const r=o.querySelector('rect');r.setAttribute('rx','0');r.removeAttribute('stroke');r.removeAttribute('stroke-width');
      const vb=o.getAttribute('viewBox').split(' ').map(Number);r.setAttribute('x',vb[0]);r.setAttribute('y',vb[1]);r.setAttribute('width',vb[2]);r.setAttribute('height',vb[3]);}),
    pro:standalone(q('#pro-marca .lg-paper svg'))
  };
  const s=document.createElement('script');s.type='application/json';s.id='marca-out';
  s.textContent=JSON.stringify(res);document.body.appendChild(s);
})();
</script>`;

const tmp = path('site/_export.html');
const page = readFileSync(path('site/index.html'), 'utf8');
// standards mode: in quirks mode #lg-Educt and #lg-educt collide
writeFileSync(tmp, (/^<!doctype/i.test(page) ? '' : '<!doctype html>\n') + page + INJECT);
let dom;
try {
  dom = run(['--virtual-time-budget=6000', '--dump-dom', 'file://' + tmp]);
} finally {
  rmSync(tmp, { force: true });
}
const m = dom.match(/<script type="application\/json" id="marca-out">([\s\S]*?)<\/script>/);
if (!m) throw new Error('export falhou: o site não gerou a marca');
const res = JSON.parse(m[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'));

mkdirSync(path('marca/png'), { recursive: true });
const files = {
  'marca/logo-educt.svg': [res.logo, 'Educt'],
  'marca/icone-educt.svg': [res.icone, 'Educt'],
  'marca/icone-educt-loja.svg': [res.iconeLoja, 'Educt'],
  'marca/selo-pro.svg': [res.pro, 'PRO'],
};
for (const [f, [svg, label]] of Object.entries(files)) {
  writeFileSync(path(f), '<?xml version="1.0" encoding="UTF-8"?>\n' + svg.replace(/aria-label="[^"]*"/, `aria-label="${label}"`) + '\n');
  console.log(f);
}

// PNG: lojas (quadrado cheio) e web (com canto e borda)
const png = (svgFile, out, w, h = w) => {
  const html = path('marca/_png.html');
  const b64 = Buffer.from(readFileSync(path(svgFile))).toString('base64');
  writeFileSync(html, `<!doctype html><html><body style="margin:0;background:transparent"><img src="data:image/svg+xml;base64,${b64}" style="display:block;width:${w}px;height:${h}px;object-fit:contain"></body></html>`);
  try {
    // headless viewport is shorter than the window: shoot taller, then crop
    run(['--default-background-color=00000000', `--window-size=${w},${h + 200}`, `--screenshot=${path(out)}`, 'file://' + html]);
    execFileSync('convert', [path(out), '-crop', `${w}x${h}+0+0`, '+repage', path(out)]);
  } finally {
    rmSync(html, { force: true });
  }
  console.log(out);
};
png('marca/icone-educt-loja.svg', 'marca/png/icone-loja-1024.png', 1024);
png('marca/icone-educt.svg', 'marca/png/icone-512.png', 512);
png('marca/icone-educt.svg', 'marca/png/icone-192.png', 192);
png('marca/icone-educt.svg', 'marca/png/apple-touch-icon-180.png', 180);
png('marca/icone-educt.svg', 'marca/png/favicon-32.png', 32);
png('marca/logo-educt.svg', 'marca/png/logo-educt-1200.png', 1200, 400);
