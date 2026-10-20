// ═══════════════════════════════════════════════════════════════
// EDUCT NEO — BORDER TOKENS
// Every object has an ink border. Dashed means empty or disabled.
// ═══════════════════════════════════════════════════════════════

import { ink, border } from './colors';

export const borderWidth = {
  /** 1.5px — Professor profile, small inner details (meters, close buttons) */
  thin: 1.5,
  /** 2px — Default */
  base: 2,
  /** 3px — Device frames */
  thick: 3,
} as const;

export const borderStyle = {
  /** Objects: cards, buttons, inputs, chips */
  solid: `${borderWidth.base}px solid ${ink}`,
  /** Empty states and disabled buttons */
  dashed: `${borderWidth.base}px dashed ${ink}`,
  /** Dividers between rows of a list or table */
  divider: `1.5px dashed ${border.divider}`,
} as const;
