// ═══════════════════════════════════════════════════════════════
// EDUCT NEO — MOTION TOKENS
// Every motion is one of five things: press, color, enter/exit,
// bounce or wait. Don't create a token per animation.
// Durations in ms.
// ═══════════════════════════════════════════════════════════════

export const duration = {
  /** 80ms — Press */
  press: 80,
  /** 120ms — Color changes */
  color: 120,
  /** 120ms — Leaving */
  exit: 120,
  /** 180ms — Entering */
  enter: 180,
  /** 320ms — Bounce */
  bounce: 320,
  /** 320ms — Filling a bar, a meter or a counting number */
  fill: 320,
} as const;

/** Looping waits */
export const loop = {
  loader: 900,
  skeleton: 1200,
} as const;

export const easing = {
  out: 'ease-out',
  in: 'ease-in',
  /** "Quique": small overshoot, the old sheet curve */
  bounce: 'cubic-bezier(0.2, 1.25, 0.4, 1)',
} as const;

/** The one travel distance for entering, leaving and bouncing (px) */
export const distance = 8;

export const press = {
  /** Share of the shadow the object sinks on press (2px shadow → 1.5px) */
  ratio: 0.75,
  duration: duration.press,
  easing: easing.out,
} as const;

/** Press offset in px for a given shadow size */
export function pressOffset(shadow: number): number {
  return shadow * press.ratio;
}

export const transition = {
  /** Background, border and shadow color changes (tabs, focus, field errors, steps) */
  color: { duration: duration.color, easing: easing.out },
  /** Something appears: tab content, toast, dialog, banner (from above) */
  enter: { duration: duration.enter, easing: easing.out, offsetY: distance },
  /** Something leaves */
  exit: { duration: duration.exit, easing: easing.in },
  /** One-time celebration: grade ready, achievement, streak +1, week closed */
  bounce: { duration: duration.bounce, easing: easing.bounce },
  /** Bars, meters and counting numbers */
  fill: { duration: duration.fill, easing: easing.out },
  /** Bottom sheet rising uses the bounce */
  sheet: { duration: duration.bounce, easing: easing.bounce },
  /** Backdrop: ink at 45%. Its duration follows what opens (320ms with a sheet, 180ms with a dialog). */
  scrim: { opacity: 0.45 },
} as const;

/** With "reduce motion" on, everything is instant and loops stop */
export const reducedMotion = { duration: 0, loops: 'paused' } as const;
