// ═══════════════════════════════════════════════════════════════
// EDUCT NEO — MOTION TOKENS
// Objects don't move on hover. On press they sink into their shadow.
// Durations in ms.
// ═══════════════════════════════════════════════════════════════

export const press = {
  /** Share of the shadow the object sinks on press (2px shadow → 1.5px) */
  ratio: 0.75,
  duration: 80,
  easing: 'ease-out',
} as const;

/** Press offset in px for a given shadow size */
export function pressOffset(shadow: number): number {
  return shadow * press.ratio;
}

export const transition = {
  /** Background color changes (selected chips, saved state) */
  color: { duration: 120, easing: 'ease' },
  /** Bottom sheet rising, with a small bounce */
  sheet: { duration: 320, easing: 'cubic-bezier(0.2, 1.25, 0.4, 1)' },
  /** Backdrop behind a sheet: ink at 45% */
  scrim: { duration: 260, easing: 'ease', opacity: 0.45 },
  /** Switching views inside a screen */
  view: { duration: 180, easing: 'ease', offsetY: 6 },
} as const;
