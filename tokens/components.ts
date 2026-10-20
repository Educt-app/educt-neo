// ═══════════════════════════════════════════════════════════════
// EDUCT NEO — COMPONENT-LEVEL TOKENS
// Source: site/index.html (Componentes)
// References primitive tokens from sibling files.
// ═══════════════════════════════════════════════════════════════

import { ink, paper, primary, blue, coral, accent, semantic, surface, border, criteria } from './colors';
import { spacing } from './spacing';
import { radii } from './radii';
import { borderWidth, borderStyle } from './borders';
import { fontSize, fontWeight } from './typography';
import { css as shadowCSS } from './shadows';
import { press, pressOffset } from './motion';

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
