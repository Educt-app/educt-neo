# Educt Neo — Referência do design system

Versão neo-brutalista do DS da Educt, sucessora do `ds-tokens`. A dose foi fechada em 20 out 2026.

- **Mantém:** o violeta, o azul e o coral, as cinco competências coloridas por posição e a grade de espaçamento de 8px.
- **Entra:** borda de tinta, sombra dura, cantos retos, papel pêssego e marca-texto amarelo.
- **Sai:** o degradê escuro, as sombras difusas, o brilho (glow) e os cinzas soltos.

A referência visual é o site em [`site/index.html`](site/index.html), que lê os tokens direto do `tokens.css` gerado. Ele tem telas do app do aluno, os componentes, o painel de dose e as opções de logo. O `npm run check` garante que o site não redefina nenhum token.

---

## Princípios

1. **A cor do texto depende do fundo.** Coral, azul, verde, amarelo e âmbar levam texto em tinta (`#1A1C27`). Só o violeta leva texto branco. Branco nas outras cores não passa no contraste.
2. **Sombra quer dizer "aperte".** Botões, atalhos, opções e janelas flutuantes têm sombra. A redação, as listas de critérios e o texto de leitura ficam sem.
3. **Uma cor forte por bloco.** Cada cartão escolhe uma cor de destaque. O resto é papel, branco e tinta.
4. **A cor do critério é fixa pela posição:** 1 menta, 2 violeta, 3 azul, 4 âmbar, 5 coral. Vale em qualquer modelo (ENEM, UEMA…). O 5 é coral, e não vermelho, para não parecer erro.
5. **O degradê vira listra.** A assinatura azul → violeta → coral aparece em blocos chapados (`stripe`), na barra da nota e no logo.
6. **Brincadeira tem hora marcada.** Adesivos tortos, marca-texto e serifa itálica aparecem em conquistas e na leitura, não em formulários.

---

## Cores

### Base

| Token | Valor | Texto por cima | Contraste | Uso |
|---|---|---|---|---|
| `ink` | `#1A1C27` | — | — | Texto, bordas e sombras. A única cor escura. |
| `paper.peach` | `#FFF5EE` | tinta | 15,8:1 | Fundo das telas do aluno |
| `paper.white` | `#FFFFFF` | tinta | — | Fundo do professor; cartões |
| `surface.mutedForeground` | `#5E6280` | — | 5,5:1 no papel | Texto de apoio |
| `primary[400]` | `#7A4BE6` | **branco** | 5,3:1 | Ação principal, C2, marca |
| `blue[400]` | `#5B8DF5` | tinta | 5,3:1 | Ação secundária, turmas, C3 |
| `coral[400]` | `#FF6B57` | tinta | 6,1:1 | Destaque, sequência, C5 |
| `accent.yellow` | `#FFE066` | tinta | 13,0:1 | Aba ativa, seleção, XP, adesivos |
| `accent.amber` | `#FFB930` | tinta | 9,9:1 | Atenção, pendente, C4 |
| `accent.mint` | `#34C759` | tinta | 7,6:1 | Corrigida, concluído, C1 |
| `accent.red` | `#EF4444` | tinta | 4,5:1 | Erro e exclusão |

O vermelho fica no limite do AA (4,50:1). Use-o em botões e avisos com texto de 15px ou mais e peso 600.

### Tons claros

O tom 100 de cada paleta é o fundo suave: `primary[100]` `#E4D8FD`, `blue[100]` `#D4E1FD` e `coral[100]` `#FFDCD7`. O verde suave é `accent.mintSoft` `#CFF3DA` e o vermelho suave, para banners de erro e contadores estourados, é `accent.redSoft` `#FDE2E2`. Esses tons aparecem em barras de janela, opções marcadas, tags e avisos.

### Critérios

| Posição | Cor (`criteria`) | Marca-texto (`criteriaHighlight`) |
|---|---|---|
| 1 | menta `#34C759` | `#A7EBBB` |
| 2 | violeta `#7A4BE6` | `#D2BFFB` |
| 3 | azul `#5B8DF5` | `#BCD0FB` |
| 4 | âmbar `#FFB930` | `#FFE08A` |
| 5 | coral `#FF6B57` | `#FFC2B8` |

Trecho aberto na redação: o marca-texto ganha um sublinhado de tinta de 2,5px. Erro pontual: sublinhado ondulado vermelho.

### Conquistas

Os níveis são `tier.bronze` `#F2B48C`, `tier.silver` `#D6DAE6` e `tier.gold`, que é o marca-texto. Uma conquista desbloqueada vira adesivo: fundo do nível, sombra e uma leve rotação.

---

## Tipografia

| Estilo | Fonte | Tamanho | Uso |
|---|---|---|---|
| `display` | Bricolage Grotesque 800 | 92 / 0,9 | Nota e números grandes |
| `h1` `h2` `h3` | Bricolage Grotesque 800 | 32 / 26 / 19 | Título de tela, barra do app, seção |
| `body` | Inter 400 | 15 / 1,55 | Texto corrido e interface |
| `button` | Inter 600 | 15 | Botões |
| `label` | JetBrains Mono 700, caixa alta, +0,08em | 11 | Rótulos, contadores, códigos |
| `quote` | Literata itálico | 18 / 1,45 | Trechos citados da redação |
| `accent` | Instrument Serif itálico | 20+ | Nomes, títulos como "Cronista", estados vazios |

A Instrument Serif nunca vai em botões nem em formulários. O `fontImport` traz a URL do Google Fonts com todos os pesos usados.

---

## Forma

| | Token | Valor |
|---|---|---|
| Borda | `borderWidth.base` | 2px de tinta em tudo que é objeto |
| Borda fina | `borderWidth.thin` | 1,5px: professor, medidores, botões de fechar |
| Tracejado | `borderStyle.dashed` | Estado vazio e botão desabilitado |
| Sombra | `shadowSm` | `2px 2px 0` de tinta, sem desfoque (padrão) |
| Sombra destaque | `shadowMd` | 4px, para um cartão em destaque |
| Sombra palco | `shadowLg` | 8px, para molduras de aparelho e blocos de capa |
| Raio | `radii.base` | 3px em cartão, campo, botão e janela |
| Raio de tag | `radii.xs` | 2px |
| Pílula / círculo | `radii.full` | Chip, avatar, FAB e contador |

**Foco do teclado:** contorno azul de 3px com 3px de afastamento. **Foco de campo:** a sombra do campo fica violeta.

---

## Movimento

| | Valor |
|---|---|
| Hover | Nada se mexe. O botão ghost ganha fundo violeta claro. |
| Clique | Afunda 3/4 da sombra (`press.ratio` 0,75; 1,5px com sombra de 2px) em 80ms, `ease-out`. O resto da sombra fica. |
| Folha inferior | Sobe em 320ms com um leve quique, `cubic-bezier(0.2, 1.25, 0.4, 1)`. O fundo escurece com tinta a 45%. |
| Troca de vista | 180ms, entrando 6px de baixo |

Com `prefers-reduced-motion`, as transições são desligadas.

---

## Componentes

Os tokens de componente ficam em [`tokens/components.ts`](tokens/components.ts).

- **Botão:** `primary` (violeta), `secondary` (azul), `accent` (coral), `danger` (vermelho), `neutral` (branco) e `ghost`. Tamanhos sm, md e lg. Ícone de 36 ou 44px. Desabilitado: fundo transparente, borda tracejada, texto grafite e sem sombra.
- **Campo:** 48px de altura. A célula do ícone tem fundo de papel, separada por uma linha de tinta. O textarea é pautado como folha de caderno, a cada 28px.
- **Cartão:** `flat` para leitura, `raised` para o que se aperta e `dashed` para o vazio.
- **Janela:** cartão com barra de título retrô de uma cor só. Por padrão a barra é violeta clara.
- **Tag:** borda de 1,5px, raio 2 e texto mono de 10,5px. A variante `ink` (fundo tinta, texto amarelo) fica para o que é especial.
- **Chip:** pílula. Ativo fica azul claro.
- **Adesivo:** marca-texto, sombra e 7° de rotação.
- **Barra de progresso e medidor:** o medidor tem uma marca a cada 20% e serve para qualquer escala (0–200 no ENEM, 0–2 na UEMA).
- **Aviso:** amarelo (info), verde claro (sucesso) ou coral claro (erro), sempre com ícone.
- **Barra de abas:** a aba ativa fica sobre um traço de marca-texto. O FAB é violeta, com ícone branco.
- **Segmentado:** o segmento escolhido fica com fundo marca-texto.

---

## Feedback e estados

Os tokens ficam em [`tokens/components.ts`](tokens/components.ts), e os exemplos vivos estão na seção "Feedback e estados" do site.

### Regra de ouro

**Erro nunca é só cor.** Todo erro tem ícone e uma frase que diz o que fazer ("Faltou um número. O código tem 5 dígitos depois do traço."), não só o que deu errado. O texto continua em tinta; quem carrega a cor é o quadradinho do ícone.

### Validação de campo (`input.states`, `fieldHint`)

- A borda de tinta não muda. **A sombra muda de cor:** vermelha no erro, verde no acerto e violeta no foco.
- O campo desabilitado fica tracejado, com fundo transparente e texto grafite.
- Contadores de linhas ou caracteres ficam em mono pequeno. Passou do limite, o contador vira uma tag vermelho suave.
- Valide quando o campo perde o foco ou no envio, nunca a cada tecla.

### Qual aviso usar

| Situação | Componente | Some sozinho? |
|---|---|---|
| Confirmação de uma ação ("Salvo no caderno") | **Toast** (`toast`) | Sim, em 4s. Tem ação opcional ("Desfazer"). |
| Falha de uma ação que dá para repetir | **Toast de erro** | Sim. A ação é "Tentar de novo" e usa `role="alert"`. |
| Estado que continua até ser resolvido (sem conexão, erro do servidor) | **Banner** (`banner`), no topo da tela | Não |
| Ação que não tem volta (excluir, sair) | **Diálogo** (`dialog`) | Não. Exige escolha. |
| Explicação de um termo ou número | **Tooltip** (`tooltip`) | Ao tirar o foco |

- **Toast:** cartão com ícone colorido e sombra de 4px. Fica acima da barra de abas, um de cada vez.
- **Banner de sem conexão:** amarelo, com a faixa listrada de obra na borda esquerda. Diz o que fica indisponível até a conexão voltar.
- **Diálogo:** a barra fica vermelha quando a ação é destrutiva. O texto diz o que se perde junto. Cancelar fica à esquerda e a ação à direita, com um verbo ("Excluir", não "Sim"). O fundo escurece com tinta a 45%.
- **Tooltip:** só explica. Nunca esconda uma ação dentro dele.

### Notificações (`notification`)

- Agrupadas por período ("Hoje", "Esta semana").
- A nova tem uma **bolinha coral** à direita. O fundo da linha não muda.
- A lida fica com o texto grafite.
- O ícone indica o tipo, num quadrado com uma cor da paleta.
- O sino mostra um contador coral.

### Carregando (`loader`, `skeleton`, `steps`)

- **Até 1s:** nada.
- **Espera curta:** o loader da marca, três quadrados azul, violeta e coral pulando.
- **Lista ou cartão:** skeleton com a forma do conteúdo, num contêiner tracejado.
- **Correção ENEM (`correction`):** cartão "Corrigindo · 1 min", com barra amarela e barra de progresso violeta.
  1. A checagem de nota zero vem primeiro: fuga ao tema, tipo textual, mais de 7 linhas e cópia dos textos motivadores, marcadas uma a uma. Se uma falhar, a correção para e mostra o motivo.
  2. Depois, uma competência por vez. A atual fica amarela; ao terminar, o quadrado ganha a cor da competência e a nota de 0 a 200 aparece com um pulo.
  3. No fim, a barra fica verde e o título vira "Corrigida". A nota total conta até o valor final, o adesivo "Corrigida!" carimba o cartão e os quadrados pulam em sequência.
  4. Com movimento reduzido, o estado muda sem animação.
  5. Dentro do cartão, tudo é Inter: nomes das etapas, notas por competência, "Sua nota" e o total. Sem Bricolage nem mono, para a nota não parecer de outro lugar.
- **Outra tarefa longa:** etapas. A concluída fica verde com check, a atual amarela e a próxima tracejada. Mostre o tempo estimado quando houver.

### Seleção (`checkbox`, `radio`, `toggle`)

- **Marcado é violeta com marca branca.** O checkbox tem estado indeterminado, com um traço branco.
- **Switch quadrado:** pino de tinta quando desligado; trilho violeta com pino branco quando ligado. Use para o que vale na hora. Para o que precisa ser salvo, use checkbox.
- **Área de toque:** mínima de 44px, mesmo quando o controle desenhado tem 22px.

---

## Formulários

- **Linhas clicáveis:** 44px de altura em menus, listas e opções.
- **Select (`select`, `menu`):** o campo aberto ganha a sombra violeta do foco. A lista abre logo abaixo, com sombra de 4px. Grupos têm rótulo mono. A opção escolhida fica semibold, com check à direita. Hover com fundo violeta claro.
- **Menu de ações (`menu`):** a ação destrutiva fica por último, depois de um separador tracejado, com ícone vermelho.
- **Upload (`upload`):**
  - vazio: área tracejada com ícone, ação e limites ("JPG ou PNG até 10 MB");
  - enviando: linha do arquivo com barra azul e porcentagem;
  - pronto: tag verde e botão de remover;
  - erro: sombra vermelha e dica do que fazer, como nos campos.
- **Senha (`password`):** o botão de mostrar fica numa célula à direita, separado por uma linha de tinta. Os requisitos aparecem embaixo e são marcados enquanto a pessoa digita. Os que faltam ficam tracejados e em grafite.

---

## Perfis

| | Aluno (padrão) | Professor |
|---|---|---|
| Borda | 2px | 1,5px |
| Sombra | 2px | 2px |
| Cantos | retos (3px) | retos (3px) |
| Papel | pêssego | branco |
| Títulos | Bricolage 800 | Inter 700 |

No CSS, o perfil do professor entra com `data-profile="professor"` em qualquer elemento.

---

## Marca

Escolhidas em 20 out 2026:

- a logo **D · Degradê**;
- o ícone de **três camadas** em fundo branco;
- o selo PRO **Marca-texto**.

Os SVGs e os PNGs estão em [`marca/`](marca/). O selo PRO fica chapado, sem a sombra colorida, para não repetir a logo ao lado. Abaixo de 40px de altura, use o ícone no lugar da logo.

## Mascotes

**Grafite**, o lápis, é o rascunho. **Tinta**, a caneta azul, é a versão final e a nota. O componente fonte está em [`mascotes/`](mascotes/).

- Nas telas, eles espiam inclinados de um canto, como no Duolingo. Não cobrem texto nem nota.
- Nada de rosto gigante cortado ocupando a tela.
- Sem dentes.

---

## Migrando do `ds-tokens`

Os nomes que existiam continuam onde fazia sentido, mas **os valores mudaram**. Migre uma tela por vez.

| `ds-tokens` (v1) | `educt-neo` |
|---|---|
| `primary[400]` `#9B6AF0` + texto branco | `primary[400]` `#7A4BE6` + texto branco. O antigo virou `primary[300]`. |
| `blue[400]` `#3771EE` + texto branco | `blue[400]` `#5B8DF5` + **texto tinta**. O antigo virou `blue[500]`. |
| `semantic.*Foreground` branco | Tinta em tudo, menos `primaryForeground` |
| `gradients.*` | Saem. Use `stripe` (listra chapada). |
| `glow.*` | Saem |
| `surface.surface`, `surfaceElevated`, `muted`, cinzas `#D1D5DB` `#6B7280` `#F3F4F6` | Saem. Use papel, branco, tinta e `mutedForeground`. |
| `surface.background` `#FFFFFF` | `paper.peach` `#FFF5EE` (aluno) |
| `border.default` violeta a 12% | `ink`, com 2px |
| `shadowSm` / `shadowMd` / `shadowLg` difusas | Sombras duras de 2, 4 e 8px |
| `focusRing` | Contorno azul de 3px (`button.states.focus`) e `shadowInputFocus` |
| `radii.md` 8 / `xl` 16 / `full` nos botões | `radii.base` 3 em tudo; `full` só em chip e avatar |
| `button.states.hover` sobe 3px e cresce 2% | Parado; o clique afunda 3/4 da sombra |
| `badge`, `statusBadge` | `tag` |
| `filterChip` | `chip` |
| `fontFamily.sans` Inter só | `display`, `sans`, `mono`, `quote` e `accent` |
| `spacing`, `spacingNamed` | Iguais |
| `sidebar`, `select`, `toggleButton` | Ainda não migrados. Ficam para quando o web admin adotar o Neo. |
