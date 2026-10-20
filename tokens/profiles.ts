// ═══════════════════════════════════════════════════════════════
// EDUCT NEO — PROFILES ("dose")
// Same language, two intensities. Student app is the default;
// the teacher platform turns it down so it doesn't fight tables.
// ═══════════════════════════════════════════════════════════════

import { paper } from './colors';
import { radii } from './radii';
import { borderWidth } from './borders';
import { fontFamily } from './typography';

export const profiles = {
  /** Student app (default) */
  aluno: {
    radius: radii.base,
    borderWidth: borderWidth.base,
    shadow: 2,
    paper: paper.peach,
    displayFont: fontFamily.display,
    displayWeight: '800',
  },
  /** Teacher platform and dense screens */
  professor: {
    radius: radii.base,
    borderWidth: borderWidth.thin,
    shadow: 2,
    paper: paper.white,
    displayFont: fontFamily.sans,
    displayWeight: '700',
  },
} as const;

export type ProfileName = keyof typeof profiles;
