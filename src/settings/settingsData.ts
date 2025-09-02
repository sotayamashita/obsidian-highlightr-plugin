export const HIGHLIGHTER_STYLES = [
  "none",
  "lowlight",
  "floating",
  "rounded",
  "realistic",
];

export const HIGHLIGHTER_METHODS = ["css-classes", "inline-styles"];

export interface Highlighters {
  [color: string]: string;
}

export interface HighlightrSettings {
  highlighterStyle: string;
  highlighterMethods: string;
  highlighters: Highlighters;
  highlighterOrder: string[];
  // When set to a color key, context menu 'Highlight' auto-applies that color.
  // Use value 'palette' to show the color palette instead.
  contextMenuDefaultHighlighter: string;
}

// Sentinel value for opening the palette instead of auto-applying a color
export const CONTEXT_MENU_PALETTE = "palette" as const;

const DEFAULT_SETTINGS: HighlightrSettings = {
  highlighterStyle: "none",
  highlighterMethods: "inline-styles",
  highlighters: {
    Pink: "#FFB8EBA6",
    Red: "#FF5582A6",
    Orange: "#FFB86CA6",
    Yellow: "#FFF3A3A6",
    Green: "#BBFABBA6",
    Cyan: "#ABF7F7A6",
    Blue: "#ADCCFFA6",
    Purple: "#D2B3FFA6",
    Grey: "#CACFD9A6",
  },
  highlighterOrder: [],
  contextMenuDefaultHighlighter: CONTEXT_MENU_PALETTE,
};

DEFAULT_SETTINGS.highlighterOrder = Object.keys(DEFAULT_SETTINGS.highlighters);

export default DEFAULT_SETTINGS;
