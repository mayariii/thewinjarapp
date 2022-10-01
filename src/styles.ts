import {
  classnames,
  textColor,
  backgroundColor,
  borderColor,
  divideColor,
  display,
  spacing,
  borders,
  boxShadow,
  fontSize,
  fontWeight,
  borderRadius,
  width,
  height,
  ringWidth,
  ringOffsetWidth,
  ringColor,
} from "tailwindcss-classnames";

// 💭 PRINCIPLES
// COLOURS
export const backgroundPrimaryAccent = classnames(
  backgroundColor("bg-violet-600")
);
export const backgroundPrimaryAccentHover = classnames(
  backgroundColor("hover:bg-violet-700")
);

export const backgroundPrimaryHover = classnames(
  backgroundColor("hover:bg-slate-50")
);
export const backgroundSecondary = classnames(backgroundColor("bg-slate-50"));

export const typographyPrimaryAccent = classnames(textColor("text-violet-600"));
export const typographyPrimary = classnames(textColor("text-slate-800"));
export const typographySecondary = classnames(textColor("text-slate-500"));
export const typographyPrimaryInverted = classnames(textColor("text-white"));
export const hoverTypographyPrimaryInverted = classnames(
  textColor("hover:text-white")
);
export const typographyAccent = classnames(textColor("text-violet-600"));
export const hoverTypographyAccent = classnames(
  textColor("hover:text-violet-600")
);

export const UIAccent = classnames(backgroundColor("bg-violet-600"));
export const hoverUIAccent = classnames(backgroundColor("hover:bg-violet-700"));

export const borderDefault = classnames(borderColor("border-slate-300"));
export const divideDefault = classnames(divideColor("divide-slate-200"));

// COLOURS >> hex codes
export const primaryAccentHex = "#7c3aed";
export const primaryAccentHoverHex = "#a78bfa";
export const primaryHex = "#0f172a";
export const secondaryHex = "#64748b";
export const secondaryHoverHex = "#e2e8f0";
// -----
// EFFECTS >> focus
export const focusButton = classnames(
  ringWidth("focus:ring-2"),
  ringOffsetWidth("focus:ring-offset-2"),
  ringColor("focus:ring-violet-500")
);

// -----
// TYPOGRAPHY >> font size
export const fontSizeBase = classnames(fontSize("text-base"));
export const fontSizeExtraSmall = classnames(fontSize("text-xs"));
export const fontSizeSmall = classnames(fontSize("text-sm"));
export const fontSizeLarge = classnames(fontSize("text-lg"));
export const fontSizeXLarge = classnames(fontSize("text-xl"));

// TYPOGRAPHY >> font weight
export const fontWeightMedium = classnames(fontWeight("font-medium"));
export const fontWeightSemiBold = classnames(fontWeight("font-semibold"));

// --------------------
// 🧱 BASICS
// FONT STYLES
export const textHeading = classnames(
  typographyPrimary,
  fontSizeLarge,
  fontWeightSemiBold
);
export const textPlaceholder = classnames(typographySecondary, fontSizeSmall);
export const textBody = classnames(typographyPrimary, fontSizeSmall);
export const textLabel = classnames(typographySecondary, fontSizeExtraSmall);

// LINKS
export const linkBase = `block rounded-md py-2 px-3 text-base font-medium no-underline`;
export const linkPrimary = `${linkBase} ${typographyAccent}`;
export const linkHeader = `${linkBase} ${typographySecondary}`;
export const linkHeaderCurrent = `${linkBase} ${typographyAccent} font-medium`;
export const linkFooter = `${linkBase} ${fontSizeExtraSmall}`;
