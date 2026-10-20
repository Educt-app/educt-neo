// Builds css/tokens.css from the compiled tokens (dist/).
// Variable names are the ones site/index.html uses.

import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export function loadTokens() {
  return require('../dist/index.js');
}

export function cssVars(t) {
  const aluno = t.profiles.aluno;
  return {
    // cor
    '--ink': t.ink,
    '--paper': aluno.paper,
    '--card': t.surface.card,
    '--muted': t.surface.mutedForeground,
    '--violet': t.primary[400],
    '--violet-soft': t.primary[100],
    '--blue': t.blue[400],
    '--blue-strong': t.blue[500],
    '--on-blue': t.semantic.secondaryForeground,
    '--blue-soft': t.blue[100],
    '--coral': t.coral[400],
    '--coral-soft': t.coral[100],
    '--yellow': t.accent.yellow,
    '--amber': t.accent.amber,
    '--mint': t.accent.mint,
    '--mint-soft': t.accent.mintSoft,
    '--red': t.accent.red,
    '--red-soft': t.accent.redSoft,
    '--stage': t.primary[400],
    '--on-violet': t.semantic.primaryForeground,
    '--on-stage': t.semantic.primaryForeground,
    '--bronze': t.tier.bronze,
    '--silver': t.tier.silver,
    ...Object.fromEntries([1, 2, 3, 4, 5].map((i) => [`--hl-c${i}`, t.criteriaHighlight[i]])),
    ...Object.fromEntries([1, 2, 3, 4, 5].map((i) => [`--crit-c${i}`, t.criteria[i]])),
    '--stripe': t.stripe.css,
    // forma
    '--bw': `${aluno.borderWidth}px`,
    '--sh': `${aluno.shadow}px`,
    '--press': `calc(var(--sh) * ${t.press.ratio})`,
    '--r-card': `${t.radiiNamed.card}px`,
    '--r-ctl': `${t.radiiNamed.control}px`,
    '--r-btn': `${t.radiiNamed.button}px`,
    '--r-tag': `${t.radiiNamed.tag}px`,
    // movimento: toque, cor, entrar/sair, quique e espera
    '--dur-press': `${t.duration.press}ms`,
    '--dur-color': `${t.duration.color}ms`,
    '--dur-exit': `${t.duration.exit}ms`,
    '--dur-enter': `${t.duration.enter}ms`,
    '--dur-bounce': `${t.duration.bounce}ms`,
    '--dur-fill': `${t.duration.fill}ms`,
    '--dur-loader': `${t.loop.loader}ms`,
    '--dur-skeleton': `${t.loop.skeleton}ms`,
    '--ease-out': t.easing.out,
    '--ease-in': t.easing.in,
    '--ease-bounce': t.easing.bounce,
    '--move': `${t.distance}px`,
    // tipo
    '--f-display': aluno.displayFont,
    '--w-display': aluno.displayWeight,
    '--f-accent': t.fontFamily.accent,
    '--f-quote': t.fontFamily.quote,
    '--f-body': t.fontFamily.sans,
    '--f-label': t.fontFamily.mono,
  };
}

export function buildCSS(t) {
  const prof = t.profiles.professor;
  const block = (sel, vars) =>
    `${sel}{\n${Object.entries(vars).map(([k, v]) => `  ${k}:${v};`).join('\n')}\n}\n`;
  return (
    '/* Gerado por scripts/build-css.mjs a partir de tokens/. Não edite à mão. */\n' +
    `@import url("${t.fontImport}");\n\n` +
    block(':root', cssVars(t)) +
    '\n/* Plataforma do professor: mesma linguagem, dose mais baixa */\n' +
    block('[data-profile="professor"]', {
      '--bw': `${prof.borderWidth}px`,
      '--sh': `${prof.shadow}px`,
      '--paper': prof.paper,
      '--f-display': prof.displayFont,
      '--w-display': prof.displayWeight,
    })
  );
}
