// ═══════════════════════════════════════════════════════════════
// EDUCT NEO — TYPOGRAPHY TOKENS
// Bricolage for titles, Inter for everything you read or tap,
// JetBrains Mono for labels, Literata for quoted essay excerpts,
// Instrument Serif for names and empty states (never on buttons).
// ═══════════════════════════════════════════════════════════════

// ── Font Families ──────────────────────────────────────────────
// CSS stacks. In RN, use the loaded font names (e.g. 'BricolageGrotesque_800ExtraBold').

export const fontFamily = {
  /** Titles and numbers (grade, score, level) */
  display: "'Bricolage Grotesque', 'Inter', system-ui, sans-serif",
  /** UI and body text */
  sans: "'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif",
  /** Uppercase labels, counters, codes */
  mono: "'JetBrains Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace",
  /** Quoted excerpts of the student's essay (italic) */
  quote: "'Literata', Georgia, 'Times New Roman', serif",
  /** Names, titles like "Cronista", empty states (italic) */
  accent: "'Instrument Serif', Georgia, 'Times New Roman', serif",
} as const;

/** Google Fonts request with every weight the system uses */
export const fontImport =
  'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&family=Literata:ital,opsz,wght@1,7..72,400..500&display=swap';

// ── Font Sizes ─────────────────────────────────────────────────
// Values are plain numbers (px). Append 'px' for CSS, use directly in RN.

export const fontSize = {
  /** 11px — Mono labels */
  label: 11,
  /** 13px — Helper text, small buttons */
  sm: 13,
  /** 15px — Body, buttons, inputs (base) */
  base: 15,
  /** 17px — Large buttons */
  lg: 17,
  /** 19px — Section titles inside a screen */
  h3: 19,
  /** 26px — App bar titles */
  h2: 26,
  /** 32px — Screen titles */
  h1: 32,
  /** 92px — Grade and big numbers */
  display: 92,
} as const;

// ── Font Weights ───────────────────────────────────────────────
// String values for React Native compatibility

export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
} as const;

// ── Line Heights ───────────────────────────────────────────────

export const lineHeight = {
  /** Display numbers */
  display: 0.9,
  /** Titles */
  tight: 1.05,
  /** Quotes and essay excerpts */
  quote: 1.45,
  /** Body text */
  normal: 1.55,
} as const;

// ── Letter Spacing (em) ────────────────────────────────────────

export const letterSpacing = {
  display: -0.05,
  title: -0.02,
  label: 0.08,
} as const;

// ── Named Text Styles ──────────────────────────────────────────

export const textStyles = {
  /** 92px / Bricolage 800 — Grade (6.8, 960) */
  display: { fontFamily: fontFamily.display, fontSize: 92, fontWeight: '800' as const, lineHeight: 0.9, letterSpacing: -0.05 },
  /** 32px / Bricolage 800 — Screen titles */
  h1: { fontFamily: fontFamily.display, fontSize: 32, fontWeight: '800' as const, lineHeight: 1.05, letterSpacing: -0.02 },
  /** 26px / Bricolage 800 — App bar titles */
  h2: { fontFamily: fontFamily.display, fontSize: 26, fontWeight: '800' as const, lineHeight: 1.05, letterSpacing: -0.02 },
  /** 19px / Bricolage 800 — Section titles */
  h3: { fontFamily: fontFamily.display, fontSize: 19, fontWeight: '800' as const, lineHeight: 1.05, letterSpacing: -0.02 },
  /** 15px / Inter 400 — Body */
  body: { fontFamily: fontFamily.sans, fontSize: 15, fontWeight: '400' as const, lineHeight: 1.55 },
  /** 13px / Inter 400 — Helper text */
  small: { fontFamily: fontFamily.sans, fontSize: 13, fontWeight: '400' as const, lineHeight: 1.45 },
  /** 15px / Inter 600 — Buttons */
  button: { fontFamily: fontFamily.sans, fontSize: 15, fontWeight: '600' as const, lineHeight: 1.1 },
  /** 11px / JetBrains Mono 700 / uppercase — Labels */
  label: { fontFamily: fontFamily.mono, fontSize: 11, fontWeight: '700' as const, lineHeight: 1.2, letterSpacing: 0.08, textTransform: 'uppercase' as const },
  /** 18px / Literata italic — Quoted essay excerpts */
  quote: { fontFamily: fontFamily.quote, fontSize: 18, fontWeight: '400' as const, fontStyle: 'italic' as const, lineHeight: 1.45 },
  /** Instrument Serif italic — Names and empty states */
  accent: { fontFamily: fontFamily.accent, fontSize: 20, fontWeight: '400' as const, fontStyle: 'italic' as const, lineHeight: 1.2 },
} as const;
