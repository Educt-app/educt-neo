// ═══════════════════════════════════════════════════════════════
// EDUCT NEO — COMPONENT-LEVEL TOKENS
// Source: site/index.html (Componentes)
// References primitive tokens from sibling files.
// ═══════════════════════════════════════════════════════════════

import { ink, paper, primary, blue, coral, accent, semantic, surface, border, criteria, stripe } from './colors';
import { spacing } from './spacing';
import { radii } from './radii';
import { borderWidth, borderStyle } from './borders';
import { fontSize, fontWeight } from './typography';
import { css as shadowCSS } from './shadows';
import { press, pressOffset, transition } from './motion';

const SHADOW = 2;

// ── Button ─────────────────────────────────────────────────────

export const button = {
  variants: {
    primary: { background: semantic.primary, color: semantic.primaryForeground },
    secondary: { background: semantic.secondary, color: semantic.secondaryForeground },
    accent: { background: semantic.accent, color: semantic.accentForeground },
    danger: { background: semantic.destructive, color: semantic.destructiveForeground },
    neutral: { background: surface.card, color: ink },
    /** No border or shadow; violet tint on hover */
    ghost: { background: 'transparent', color: ink, border: 'transparent', hoverBackground: primary[100] },
  },
  border: borderStyle.solid,
  borderRadius: radii.base,
  boxShadow: shadowCSS.sm,
  sizes: {
    sm: { paddingHorizontal: 14, paddingVertical: spacing[2], fontSize: fontSize.sm },          // 8 / 14
    md: { paddingHorizontal: spacing[5], paddingVertical: spacing[3], fontSize: fontSize.base }, // 12 / 20
    lg: { paddingHorizontal: 26, paddingVertical: spacing[4], fontSize: fontSize.lg },           // 16 / 26
  },
  iconOnly: {
    sm: { size: 36, borderRadius: radii.base },
    md: { size: 44, borderRadius: radii.base },
    /** Round icon button (save, send) */
    round: { size: 44, borderRadius: radii.full },
  },
  gap: spacing[2],
  fontWeight: fontWeight.semibold,
  states: {
    /** Nothing moves on hover */
    hover: { translate: 0 },
    /** Sinks 3/4 of the shadow; the rest of the shadow stays */
    active: {
      translate: pressOffset(SHADOW),
      boxShadow: `${SHADOW - pressOffset(SHADOW)}px ${SHADOW - pressOffset(SHADOW)}px 0 ${ink}`,
      duration: press.duration,
      easing: press.easing,
    },
    disabled: { background: 'transparent', color: surface.mutedForeground, border: borderStyle.dashed, boxShadow: 'none' },
    focus: { outline: `3px solid ${border.ring}`, outlineOffset: 3 },
  },
} as const;

// ── Input / Search ─────────────────────────────────────────────

export const input = {
  height: 48,
  borderRadius: radii.base,
  border: borderStyle.solid,
  background: surface.card,
  placeholderColor: surface.mutedForeground,
  /** Leading icon cell, separated by an ink line */
  cell: { width: 46, background: paper.peach, borderRight: borderStyle.solid },
  paddingHorizontal: 14,
  fontSize: fontSize.base,
  focus: { boxShadow: shadowCSS.inputFocus },
  /** Textarea is ruled like notebook paper */
  textarea: { lineHeight: 28, minHeight: 124, ruleColor: 'rgba(26, 28, 39, 0.12)' },
  /** Validation keeps the ink border; only the shadow changes color */
  states: {
    error: { boxShadow: `${SHADOW}px ${SHADOW}px 0 ${accent.red}` },
    success: { boxShadow: `${SHADOW}px ${SHADOW}px 0 ${accent.mint}` },
    disabled: { borderStyle: 'dashed', background: 'transparent', color: surface.mutedForeground },
  },
} as const;

/** Message under a field. Error and success always carry an icon. */
export const fieldHint = {
  fontSize: fontSize.sm,
  color: surface.mutedForeground,
  /** Error/success text goes back to ink; the icon square carries the color */
  icon: { size: 17, borderWidth: borderWidth.thin, borderRadius: radii.xs },
  variants: {
    error: { color: ink, iconBackground: accent.red },
    success: { color: ink, iconBackground: accent.mint },
  },
  /** Line/character counter; over the limit it turns into a red-soft tag */
  counter: { fontSize: 11, over: { background: accent.redSoft, color: ink } },
} as const;

// ── Card & Window ──────────────────────────────────────────────

export const card = {
  background: surface.card,
  border: borderStyle.solid,
  borderRadius: radii.base,
  padding: spacing[4],
  variants: {
    /** Reading surface: no shadow */
    flat: { boxShadow: 'none' },
    /** Pressable or floating */
    raised: { boxShadow: shadowCSS.sm },
    /** Empty state */
    dashed: { background: 'transparent', border: borderStyle.dashed, boxShadow: 'none' },
  },
} as const;

/** Card with a retro title bar. The bar takes one strong color. */
export const window = {
  ...card,
  boxShadow: shadowCSS.sm,
  bar: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
    borderBottom: borderStyle.solid,
    defaultBackground: primary[100],
    backgrounds: { violet: primary[400], blue: blue[400], yellow: accent.yellow, mint: accent.mint },
  },
} as const;

// ── Tag / Chip / Sticker ───────────────────────────────────────

export const tag = {
  borderRadius: radii.xs,
  borderWidth: borderWidth.thin,
  paddingHorizontal: spacing[2],
  paddingVertical: 5,
  fontSize: 10.5,
  variants: {
    neutral: { background: surface.card },
    violet: { background: primary[100] },
    blue: { background: blue[100] },
    coral: { background: coral[100] },
    mint: { background: accent.mintSoft },
    yellow: { background: accent.yellow },
    amber: { background: accent.amber },
    ink: { background: ink, color: accent.yellow },
    dashed: { background: 'transparent', borderStyle: 'dashed', color: surface.mutedForeground },
  },
} as const;

export const chip = {
  borderRadius: radii.full,
  border: borderStyle.solid,
  paddingHorizontal: spacing[3],
  paddingVertical: 7,
  fontSize: fontSize.sm,
  default: { background: surface.card },
  active: { background: blue[100] },
} as const;

/** Tilted label for achievements and highlights */
export const sticker = {
  background: accent.yellow,
  border: borderStyle.solid,
  borderRadius: radii.xs,
  boxShadow: shadowCSS.sm,
  rotate: 7,
} as const;

// ── Progress ───────────────────────────────────────────────────

export const progressBar = {
  height: 16,
  border: borderStyle.solid,
  borderRadius: radii.base,
  background: surface.card,
  fill: accent.yellow,
} as const;

/** Meter with a tick every 20% — works for 0–200 (ENEM), 0–2 (UEMA) or any scale */
export const meter = {
  height: 12,
  borderWidth: borderWidth.thin,
  borderRadius: radii.base,
  tickEvery: 0.2,
  fillByCriterion: criteria,
} as const;

// ── Alert ──────────────────────────────────────────────────────

export const alert = {
  border: borderStyle.solid,
  borderRadius: radii.base,
  padding: spacing[3],
  variants: {
    info: { background: accent.yellow },
    success: { background: accent.mintSoft },
    error: { background: coral[100] },
  },
} as const;

// ── Navigation ─────────────────────────────────────────────────

export const tabBar = {
  height: 78,
  background: surface.card,
  borderTop: borderStyle.solid,
  /** Active tab label sits on a highlighter stroke */
  activeMarker: accent.yellow,
  inactiveColor: surface.mutedForeground,
  fab: { size: 62, background: primary[400], color: '#FFFFFF', borderRadius: radii.full, boxShadow: shadowCSS.sm },
} as const;

/** Segmented control: selected segment is highlighter yellow */
export const segmented = {
  border: borderStyle.solid,
  borderRadius: radii.base,
  selectedBackground: accent.yellow,
  fontSize: 10.5,
} as const;

// ── Feedback ───────────────────────────────────────────────────

/** Short confirmation. Auto-dismisses; error toasts use role="alert". */
export const toast = {
  background: surface.card,
  border: borderStyle.solid,
  borderRadius: radii.base,
  boxShadow: shadowCSS.md,
  maxWidth: 380,
  iconBox: 34,
  /** Above the tab bar, centered */
  placement: 'bottom',
  duration: 4000,
  enter: { duration: 180, easing: 'ease-out', offsetY: 10 },
  exit: { duration: 160, easing: 'ease-in' },
  /** Action is an underlined link: "Ver", "Desfazer", "Tentar de novo" */
  action: { fontWeight: fontWeight.bold, underline: primary[400] },
  variants: {
    success: { iconBackground: accent.mint },
    error: { iconBackground: accent.red },
    info: { iconBackground: accent.yellow },
  },
} as const;

/** Persistent message at the top of the screen; stays until the problem is solved */
export const banner = {
  border: borderStyle.solid,
  borderRadius: radii.base,
  padding: spacing[3],
  variants: {
    /** Offline: yellow with a hazard stripe on the left edge */
    offline: {
      background: accent.yellow,
      hazard: { width: 12, css: `repeating-linear-gradient(-45deg, ${ink} 0 5px, ${accent.yellow} 5px 10px)` },
    },
    info: { background: blue[100] },
    error: { background: accent.redSoft },
  },
} as const;

/** Only for what can't be undone. Says what is lost. */
export const dialog = {
  maxWidth: 330,
  boxShadow: shadowCSS.md,
  barBackground: { destructive: accent.red, default: primary[100] },
  scrim: { color: ink, opacity: transition.scrim.opacity },
  /** Cancel (neutral) on the left, the action on the right */
  actions: { gap: spacing[2.5] },
} as const;

export const notification = {
  iconBox: 38,
  /** Unread: coral dot on the right, row background unchanged */
  unreadDot: { size: 10, background: coral[400], border: `1.5px solid ${ink}` },
  read: { color: surface.mutedForeground },
  groupHeader: { background: paper.peach },
  divider: borderStyle.divider,
  /** Bell counter */
  count: { size: 22, background: coral[400], fontSize: 10.5 },
} as const;

// ── Loading ────────────────────────────────────────────────────

/** Brand loader: three bouncing squares in the stripe colors */
export const loader = {
  colors: stripe.colors,
  size: 12,
  gap: 6,
  bounce: 9,
  duration: 900,
  stagger: 120,
} as const;

/** Show the shape of what's coming, never a lone spinner on a list */
export const skeleton = {
  color: 'rgba(26, 28, 39, 0.1)',
  borderRadius: radii.xs,
  pulse: { duration: 1200, minOpacity: 0.45 },
  container: { border: `${borderWidth.base}px dashed ${border.divider}` },
} as const;

/** Steps of a long task */
export const steps = {
  marker: { size: 22, borderRadius: radii.xs },
  done: { background: accent.mint },
  current: { background: accent.yellow, fontWeight: fontWeight.semibold },
  next: { borderStyle: 'dashed', color: surface.mutedForeground },
} as const;

// ── Selection ──────────────────────────────────────────────────

/** Checkbox and radio: checked = violet with a white mark */
export const checkbox = {
  size: 22,
  border: borderStyle.solid,
  borderRadius: radii.xs,
  checked: { background: primary[400], mark: '#FFFFFF' },
  disabled: { borderStyle: 'dashed', background: 'transparent', color: surface.mutedForeground },
  /** Minimum touch area */
  hitArea: 44,
} as const;

export const radio = {
  ...checkbox,
  borderRadius: radii.full,
  /** Inner white dot when checked */
  dot: 8,
} as const;

/** Square switch: ink knob when off, white knob on violet when on */
export const toggle = {
  track: { width: 50, height: 28, border: borderStyle.solid, borderRadius: radii.base, off: surface.card, on: primary[400] },
  knob: { size: 16, inset: 4, borderRadius: radii.xs, off: ink, on: '#FFFFFF', travel: 22 },
  duration: 120,
  hitArea: 44,
} as const;

/** Explains, never hides an action */
export const tooltip = {
  background: ink,
  color: '#FFFFFF',
  borderRadius: radii.xs,
  paddingHorizontal: 9,
  paddingVertical: 6,
  fontSize: 12.5,
  arrow: 8,
  offset: 10,
} as const;

// ── Forms ──────────────────────────────────────────────────────

/** Dropdown list for select and action menus. Open trigger gets the violet focus shadow. */
export const menu = {
  background: surface.card,
  border: borderStyle.solid,
  borderRadius: radii.base,
  boxShadow: shadowCSS.md,
  padding: spacing[1],
  offset: spacing[2],
  item: { minHeight: 44, paddingHorizontal: spacing[2.5], fontSize: fontSize.base, hoverBackground: primary[100] },
  /** Selected option: semibold + check on the right */
  selected: { fontWeight: fontWeight.semibold },
  groupLabel: { fontSize: 11, color: surface.mutedForeground },
  separator: borderStyle.divider,
  /** Destructive item goes last, after a separator, with a red icon */
  destructive: { iconColor: accent.red },
} as const;

export const select = {
  trigger: { ...input, open: { boxShadow: shadowCSS.inputFocus } },
  menu,
} as const;

/** Drop zone and file rows */
export const upload = {
  dropzone: {
    border: borderStyle.dashed,
    borderRadius: radii.base,
    background: surface.card,
    hoverBackground: primary[100],
    padding: spacing[5],
  },
  file: {
    border: borderStyle.solid,
    borderRadius: radii.base,
    padding: spacing[2.5],
    progress: { height: 10, fill: blue[400] },
    error: { boxShadow: `${SHADOW}px ${SHADOW}px 0 ${accent.red}` },
  },
} as const;

/** Password field: show/hide button in a trailing cell, live requirement list */
export const password = {
  toggle: { width: 46, background: paper.peach, borderLeft: borderStyle.solid },
  requirement: {
    fontSize: fontSize.sm,
    met: { iconBackground: accent.mint, color: ink },
    unmet: { iconBorder: 'dashed', color: surface.mutedForeground },
  },
} as const;

// ── Essay correction (ENEM) ────────────────────────────────────

/**
 * "Corrigindo" card: zero-grade checks, then one competency at a time,
 * then the grade. Same order and colors as the grade screen.
 */
export const correction = {
  bar: { running: accent.yellow, done: accent.mint },
  progress: { fill: primary[400], height: 10 },
  /** Eliminatory checks shown as chips, one at a time */
  zeroChecks: ['Fuga ao tema', 'Tipo textual', 'Mais de 7 linhas', 'Cópia dos textos motivadores'],
  step: {
    waiting: { borderStyle: 'dashed', color: surface.mutedForeground },
    current: { background: accent.yellow, fontWeight: fontWeight.semibold },
    /** Done marker takes the competency color (criteria[1..5]); zero check is mint */
    done: { background: criteria, zeroCheck: accent.mint },
  },
  /** Stamp sticker when done: scales from 2.4× and lands at −7° */
  stamp: { background: accent.mint, rotate: -7, duration: 420, easing: 'cubic-bezier(0.2, 1.4, 0.4, 1)' },
  /** Total grade counts up with ease-out */
  countUp: { duration: 900 },
  /** Score pops in when a competency finishes */
  scorePop: { duration: 320, easing: 'cubic-bezier(0.2, 1.6, 0.4, 1)' },
} as const;
