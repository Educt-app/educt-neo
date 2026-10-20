// ═══════════════════════════════════════════════════════════════
// EDUCT NEO — COLOR TOKENS
// Source: site/index.html (Educt Neo, dose fechada em 2026-10-20)
// Flat colors only. Text on color is ink, except on violet (white).
// ═══════════════════════════════════════════════════════════════

// ── Ink & Paper ────────────────────────────────────────────────

/** The only dark color: text, borders and shadows */
export const ink = '#1A1C27';

export const paper = {
  /** Screen background (default, peach) */
  peach: '#FFF5EE',
  /** Alternative paper, tested in the dose panel */
  lavender: '#F5F0FF',
  /** Professor profile and dense screens */
  white: '#FFFFFF',
} as const;

// ── Primitive Palettes ─────────────────────────────────────────
// Shade 400 is the base. Neo has no hover color: buttons press instead.

/** Violet — main action, C2, brand. Takes white text. */
export const primary = {
  50: '#F3EEFE',
  100: '#E4D8FD', // soft tint (window bars, selected options)
  200: '#C8ACFB',
  300: '#9B6AF0', // ds-tokens v1 base, kept as a light accent
  400: '#7A4BE6', // base — white text 5.3:1
  500: '#6A3BD9',
  600: '#5A2CC0',
  700: '#4B3080',
  800: '#322156',
  900: '#1C1330',
} as const;

/** Blue — secondary action, classes, C3. One step lighter than v1 to take ink text. */
export const blue = {
  50: '#EDF2FE',
  100: '#D4E1FD', // soft tint
  200: '#A9C3FB',
  300: '#7DA4F6',
  400: '#5B8DF5', // base — ink text 5.3:1
  500: '#3771EE', // ds-tokens v1 base
  600: '#2248A6',
  700: '#19367D',
  800: '#112554',
  900: '#0A1633',
} as const;

/** Coral — accent, streak, C5 */
export const coral = {
  50: '#FFF1EF',
  100: '#FFDCD7', // soft tint
  200: '#FFB9B0',
  300: '#FF9588',
  400: '#FF6B57', // base — ink text 6.1:1
  500: '#E55742',
  600: '#BF4434',
  700: '#993327',
  800: '#73241B',
  900: '#4D1710',
} as const;

// ── Accents ────────────────────────────────────────────────────

export const accent = {
  /** Highlighter: active tab, selection, XP, stickers */
  yellow: '#FFE066',
  /** Attention, pending, C4 */
  amber: '#FFB930',
  /** Done, corrected, C1 */
  mint: '#34C759',
  mintSoft: '#CFF3DA',
  /** Error and deletion */
  red: '#EF4444',
  /** Error banners and over-limit counters */
  redSoft: '#FDE2E2',
} as const;

// ── Semantic Colors ────────────────────────────────────────────

export const semantic = {
  primary: primary[400],
  primaryForeground: '#FFFFFF',

  secondary: blue[400],
  secondaryForeground: ink,

  accent: coral[400],
  accentForeground: ink,

  highlight: accent.yellow,
  highlightForeground: ink,

  success: accent.mint,
  successForeground: ink,

  warning: accent.amber,
  warningForeground: ink,

  destructive: accent.red,
  destructiveForeground: ink,
} as const;

// ── Surface & Neutral Colors ───────────────────────────────────

export const surface = {
  background: paper.peach,
  foreground: ink,
  card: '#FFFFFF',
  cardForeground: ink,
  /** Helper text — 5.5:1 on peach paper */
  mutedForeground: '#5E6280',
} as const;

// ── Border Colors ──────────────────────────────────────────────

export const border = {
  /** Every object: cards, buttons, inputs */
  default: ink,
  /** Dashed dividers inside lists and tables */
  divider: 'rgba(26, 28, 39, 0.3)',
  /** Keyboard focus outline */
  ring: blue[400],
  /** Hard shadow color of a focused input */
  inputFocus: primary[400],
} as const;

// ── Essay Criteria ─────────────────────────────────────────────
// Fixed by position in every model (ENEM, UEMA…). C5 is coral, not red,
// so it never reads as an error.

export const criteria = {
  1: accent.mint,
  2: primary[400],
  3: blue[400],
  4: accent.amber,
  5: coral[400],
} as const;

/** Highlighter tint per criterion, used on the essay text */
export const criteriaHighlight = {
  1: '#A7EBBB',
  2: '#D2BFFB',
  3: '#BCD0FB',
  4: '#FFE08A',
  5: '#FFC2B8',
} as const;

// ── Achievements ───────────────────────────────────────────────

export const tier = {
  bronze: '#F2B48C',
  silver: '#D6DAE6',
  gold: accent.yellow,
} as const;

// ── Chart Colors ───────────────────────────────────────────────

export const chart = {
  1: blue[400],
  2: coral[400],
  3: primary[400],
  4: accent.mint,
  5: accent.amber,
} as const;

// ── Brand Stripe ───────────────────────────────────────────────
// The v1 gradient becomes flat blocks: blue → violet → coral.

export const stripe = {
  colors: [blue[400], primary[400], coral[400]],
  css: `linear-gradient(90deg, ${blue[400]} 0 33.33%, ${primary[400]} 33.33% 66.66%, ${coral[400]} 66.66%)`,
} as const;

// ── Contrast Contract ──────────────────────────────────────────
// Checked by `npm run check` (WCAG AA, 4.5:1 for normal text).

export const contrastPairs = [
  { name: 'violeta + branco', background: primary[400], text: '#FFFFFF' },
  { name: 'azul + tinta', background: blue[400], text: ink },
  { name: 'coral + tinta', background: coral[400], text: ink },
  { name: 'marca-texto + tinta', background: accent.yellow, text: ink },
  { name: 'âmbar + tinta', background: accent.amber, text: ink },
  { name: 'menta + tinta', background: accent.mint, text: ink },
  { name: 'vermelho + tinta', background: accent.red, text: ink },
  { name: 'papel + grafite', background: paper.peach, text: surface.mutedForeground },
  { name: 'papel + tinta', background: paper.peach, text: ink },
  { name: 'violeta claro + tinta', background: primary[100], text: ink },
  { name: 'vermelho claro + tinta', background: accent.redSoft, text: ink },
] as const;
