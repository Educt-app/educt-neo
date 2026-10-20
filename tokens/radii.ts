// ═══════════════════════════════════════════════════════════════
// EDUCT NEO — BORDER RADIUS TOKENS
// Square corners: one small radius for every object.
// Values are plain numbers — append 'px' for CSS, use directly in RN.
// ═══════════════════════════════════════════════════════════════

export const radii = {
  /** 0px — Tables, full-bleed blocks */
  none: 0,
  /** 2px — Tags, criterion tags */
  xs: 2,
  /** 3px — Cards, inputs, buttons, windows (the default) */
  base: 3,
  /** 9999px — Chips, avatars, FAB, counters */
  full: 9999,
} as const;

// Named aliases by role
export const radiiNamed = {
  card: radii.base,
  control: radii.base,
  button: radii.base,
  tag: radii.xs,
  chip: radii.full,
  avatar: radii.full,
} as const;
