// ═══════════════════════════════════════════════════════════════
// EDUCT NEO — SHADOW TOKENS
// Hard shadows only: ink, no blur, diagonal offset.
// A shadow means "press me" or "I float". Reading text has none.
// ═══════════════════════════════════════════════════════════════

// Object format works for both CSS box-shadow and RN shadow props.

import { ink, primary } from './colors';

export interface Shadow {
  offsetX: number;
  offsetY: number;
  blurRadius: number;
  spreadRadius: number;
  color: string;
}

/** Hard diagonal shadow of a given size */
export function hard(size: number, color: string = ink): Shadow {
  return { offsetX: size, offsetY: size, blurRadius: 0, spreadRadius: 0, color };
}

// ── Elevation Levels ───────────────────────────────────────────

/** Reading surfaces: essay text, criteria lists */
export const none: Shadow = hard(0, 'transparent');

/** 2px — Default: buttons, cards, options, windows */
export const sm: Shadow = hard(2);

/** 4px — Highlight: a featured card, stickers on a busy screen */
export const md: Shadow = hard(4);

/** 8px — Stage: device frames, hero blocks */
export const lg: Shadow = hard(8);

/** Input focus: the shadow turns violet */
export const inputFocus: Shadow = hard(2, primary[400]);

// ── CSS Helper ─────────────────────────────────────────────────

/** Convert Shadow object(s) to CSS box-shadow string */
export function toCSS(shadow: Shadow | Shadow[]): string {
  const arr = Array.isArray(shadow) ? shadow : [shadow];
  return arr
    .map(
      (s) =>
        `${s.offsetX}px ${s.offsetY}px ${s.blurRadius}px ${s.spreadRadius}px ${s.color}`,
    )
    .join(', ');
}

// Pre-built CSS strings for convenience
export const css = {
  none: 'none',
  sm: toCSS(sm),
  md: toCSS(md),
  lg: toCSS(lg),
  inputFocus: toCSS(inputFocus),
} as const;
