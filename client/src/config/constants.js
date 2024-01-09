import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
    displayName : "color"
  },
  {
    name: "filepicker",
    icon: fileIcon,
    displayName : "file"
  },
  {
    name: "aipicker",
    icon: ai,
    displayName : "Ask AI"
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
    displayName : "Logo"
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
    displayName : "Full"
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
