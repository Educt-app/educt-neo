# educt-neo

Tokens do **Educt Neo**, o design system neo-brutalista da Educt. É o sucessor do [`ds-tokens`](https://github.com/Educt-app/ds-tokens).

O site do DS fica em [`site/`](site/): é uma pasta estática que lê os tokens de `site/tokens.css`. Abra `site/index.html` no navegador ou publique a pasta. Ele é publicado em **https://educt-app.github.io/educt-neo/** a cada push na `main`, pelo workflow `.github/workflows/site.yml`, que só publica se o `npm run check` passar. As regras e a tabela de migração estão em [`design_system.md`](design_system.md).

## Estrutura

```
tokens/          fonte da verdade, em TypeScript (RN e web)
  colors.ts      paletas, semântica, critérios, contrastes
  spacing.ts     grade de 8px (igual ao ds-tokens)
  radii.ts       cantos retos
  borders.ts     borda de tinta
  shadows.ts     sombra dura
  motion.ts      clique e transições
  typography.ts  Bricolage, Inter, JetBrains Mono, Literata, Instrument Serif
  profiles.ts    dose do aluno e do professor
  components.ts  botão, campo, cartão, janela, tag…
css/tokens.css   variáveis CSS geradas a partir de tokens/
site/            site do DS: telas, tokens, componentes, feedback, marca
marca/           logo, ícone e selo PRO em SVG e PNG
mascotes/        componente fonte do Grafite e da Tinta
scripts/         geração do CSS e checks
```

## Uso

React Native ou TypeScript:

```ts
import { primary, ink, shadowSm, button } from './educt-neo/tokens';
```

Os valores são números em px, como no `ds-tokens`: use direto no RN ou acrescente `px` no CSS.

Web:

```html
<link rel="stylesheet" href="educt-neo/css/tokens.css">
<!-- plataforma do professor -->
<body data-profile="professor">
```

## Desenvolvimento

```sh
npm install
npm run build   # compila tokens/ e gera css/tokens.css e site/tokens.css
npm run check   # contraste AA, CSS em dia, site sem tokens duplicados
CHROME=… node scripts/export-marca.mjs   # regera marca/ a partir do site
```

Rode `npm run check` antes de cada commit. Ele falha nestes casos:

- algum par de cor de `contrastPairs` fica abaixo de 4,5:1;
- o `css/tokens.css` ficou velho;
- o site redefine algum token em vez de ler o `tokens.css`.

Para mudar uma cor, um raio ou uma sombra, edite `tokens/`, rode `npm run build` e o site já reflete a mudança.
O CSS de layout e dos componentes da página fica em `site/index.html`.
