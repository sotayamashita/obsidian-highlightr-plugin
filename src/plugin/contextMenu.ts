import type HighlightrPlugin from "src/plugin/main";
import { Menu } from "obsidian";
import { CONTEXT_MENU_PALETTE, HighlightrSettings } from "src/settings/settingsData";
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
        const shouldAutoApply =
          !!defaultKey &&
          defaultKey !== CONTEXT_MENU_PALETTE &&
          settings.highlighterOrder.includes(defaultKey);

        if (shouldAutoApply) {
          const commandId = `highlightr-plugin:${defaultKey}`;
          const execute = app.commands?.executeCommandById;
          const executed = typeof execute === "function" ? execute(commandId) : false;
          if (!executed) {
            // Fallback: open palette if command execution is unavailable or failed
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
