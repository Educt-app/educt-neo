// ═══════════════════════════════════════════════════════════════
// EDUCT NEO — TOKEN INDEX
// Single entry point for all design tokens.
// ═══════════════════════════════════════════════════════════════

export {
  ink,
  paper,
  primary,
  blue,
  coral,
  accent,
  semantic,
  surface,
  border,
  criteria,
  criteriaHighlight,
  tier,
  chart,
  stripe,
  contrastPairs,
} from './colors';

export { spacing, spacingNamed } from './spacing';

export { radii, radiiNamed } from './radii';

export { borderWidth, borderStyle } from './borders';

export {
  fontFamily,
  fontImport,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textStyles,
} from './typography';

export {
  type Shadow,
  hard as shadowHard,
  none as shadowNone,
  sm as shadowSm,
  md as shadowMd,
  lg as shadowLg,
  inputFocus as shadowInputFocus,
  toCSS as shadowToCSS,
  css as shadowCSS,
} from './shadows';

export { press, pressOffset, transition } from './motion';

export { profiles, type ProfileName } from './profiles';

export {
  button,
  input,
  card,
  window,
  tag,
  chip,
  sticker,
  progressBar,
  meter,
  alert,
  tabBar,
  segmented,
} from './components';
