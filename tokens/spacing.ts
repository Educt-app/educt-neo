// ═══════════════════════════════════════════════════════════════
// EDUCT NEO — SPACING TOKENS
// Unchanged from ds-tokens v1.
// Base unit: 8px (multiples of 4px)
// Values are plain numbers — append 'px' for CSS, use directly in RN.
// ═══════════════════════════════════════════════════════════════

export const spacing = {
  /** 0px — Reset / no spacing */
  0: 0,
  /** 2px — Micro internal adjustment */
  0.5: 2,
  /** 4px — Minimal inline spacing */
  1: 4,
  /** 6px — Gap between icon and text */
  1.5: 6,
  /** 8px — Compact internal padding (base unit) */
  2: 8,
  /** 10px — Badge and tag padding */
  2.5: 10,
  /** 12px — Default gap between elements */
  3: 12,
  /** 16px — Button and input padding */
  4: 16,
  /** 20px — Compact card padding */
  5: 20,
  /** 24px — Standard card padding */
  6: 24,
  /** 32px — Margin between sections */
  8: 32,
  /** 40px — Modal and panel padding */
  10: 40,
  /** 48px — Spacing between blocks */
  12: 48,
  /** 64px — Large section separation */
  16: 64,
  /** 80px — Hero section padding */
  20: 80,
  /** 96px — Page vertical margin */
  24: 96,
} as const;

// Named aliases for common usage
export const spacingNamed = {
  /** 0px */
  none: 0,
  /** 2px — Micro adjustments */
  xxs: 2,
  /** 4px — Inline spacing */
  xs: 4,
  /** 8px — Compact padding, base unit */
  sm: 8,
  /** 12px — Default element gap */
  md: 12,
  /** 16px — Button/input padding */
  lg: 16,
  /** 24px — Standard card padding */
  xl: 24,
  /** 32px — Section margin */
  '2xl': 32,
  /** 48px — Block spacing */
  '3xl': 48,
  /** 64px — Large section separation */
  '4xl': 64,
  /** 96px — Page margin */
  '5xl': 96,
} as const;
