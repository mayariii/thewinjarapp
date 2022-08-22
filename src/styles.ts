import {
  classnames,
  backgroundColor,
  display,
  alignItems,
  spacing,
  borders,
  boxShadow,
  fontSize,
  fontWeight,
  borderRadius,
  textColor,
  width,
  height,
  ringWidth,
  ringOffsetWidth,
  ringColor,
} from "tailwindcss-classnames";

// 💭 PRINCIPLES
// COLOURS >> background and UI
export const backgroundPrimaryAccent = classnames(
  backgroundColor("bg-indigo-600")
);
export const backgroundPrimaryAccentHover = classnames(
  backgroundColor("hover:bg-indigo-700")
);

export const backgroundUIWhite = classnames(backgroundColor("bg-white"));

export const borderDefault = classnames(backgroundColor("bg-gray-300"));

// COLOURS >> typography
export const typographyWhite = classnames(textColor("text-white"));

export const typographyPrimary = classnames(textColor("text-gray-900"));

export const typographySecondary = classnames(textColor("text-gray-500"));

export const typographyPrimaryAccent = classnames(textColor("text-indigo-600"));
// -----
// EFFECTS >> focus
export const focusButton = classnames(
  ringWidth("focus:ring-2"),
  ringOffsetWidth("focus:ring-offset-2"),
  ringColor("focus:ring-indigo-500")
);

// EFFECTS >> shadows
export const shadowSmall = classnames(boxShadow("shadow-sm"));

// EFFECTS >> borders
export const borderTransparent = classnames(
  borders("border", "border-transparent")
);

export const borderRadiusMedium = classnames(borderRadius("rounded-md"));
// -----
// TYPOGRAPHY >> font size
export const fontSizeBase = classnames(fontSize("text-base"));
export const fontSizeExtraSmall = classnames(fontSize("text-xs"));
export const fontSizeSmall = classnames(fontSize("text-sm"));

// TYPOGRAPHY >> font weight
export const fontWeightMedium = classnames(fontWeight("font-medium"));
export const fontWeightSemiBold = classnames(fontWeight("font-semibold"));
// -----
// LAYOUT >> flex
export const flexInlineFlex = classnames(display("inline-flex"));

// --------------------
// 🧱 BASICS
// FONT STYLES
export const textHeading = classnames(
  typographyPrimary,
  fontSizeBase,
  fontWeightSemiBold
);
export const textPlaceholder = classnames(typographySecondary, fontSizeSmall);
export const textBody = classnames(typographyPrimary, fontSizeSmall);
export const textLabel = classnames(typographySecondary, fontSizeExtraSmall);

// BUTTONS >> base
export const buttonBase = classnames(
  flexInlineFlex,
  alignItems("items-center"),
  borderTransparent,
  fontSizeBase,
  spacing("px-6", "py-3"),
  shadowSmall,
  fontWeightMedium,
  borderRadiusMedium
);

export const buttonPrimary = classnames(
  buttonBase,
  backgroundColor(backgroundPrimaryAccent),
  backgroundPrimaryAccentHover,
  typographyWhite
);

// ICONS
export const iconButton = classnames(
  spacing("ml-3", "mr-1"),
  width("w-5"),
  height("h-5")
);

export const iconAccent = classnames(width("w-5"), height("h-5"));
