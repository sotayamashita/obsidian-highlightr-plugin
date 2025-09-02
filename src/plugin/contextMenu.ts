import type HighlightrPlugin from "src/plugin/main";
import { Menu } from "obsidian";
import { HighlightrSettings } from "src/settings/settingsData";
import highlighterMenu from "src/ui/highlighterMenu";
import { EnhancedApp, EnhancedEditor } from "src/settings/types";

export default function contextMenu(
  app: EnhancedApp,
  menu: Menu,
  editor: EnhancedEditor,
  plugin: HighlightrPlugin,
  settings: HighlightrSettings
): void {
  const selection = editor.getSelection();

  menu.addItem((item) => {
    const itemDom = (item as any).dom as HTMLElement;
    itemDom.addClass("highlighter-button");
    item
      .setTitle("Highlight")
      .setIcon("highlightr-pen")
      .onClick(async (e) => {
        const defaultKey = settings.contextMenuDefaultHighlighter;
        const hasDefault =
          defaultKey &&
          defaultKey !== "palette" &&
          settings.highlighterOrder.includes(defaultKey);
        if (hasDefault) {
          // Execute the command generated for this color to reuse existing logic
          try {
            (app as any).commands?.executeCommandById?.(
              `highlightr-plugin:${defaultKey}`
            );
          } catch (err) {
            // Fallback to palette if command execution is unavailable
            highlighterMenu(app, settings, editor);
          }
        } else {
          highlighterMenu(app, settings, editor);
        }
      });
  });

  if (selection) {
    menu.addItem((item) => {
      item
        .setTitle("Erase highlight")
        .setIcon("highlightr-eraser")
        .onClick((e) => {
          if (editor.getSelection()) {
            plugin.eraseHighlight(editor);
          }
        });
    });
  }
}
