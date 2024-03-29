import { LOCAL_STORAGE_CONTEXT_MENU_SHOW_NOTIFICATION } from "./data/contants";
import { copyToClipboard, generateIds } from "./utils";

function handleContextMenuClick() {
  const uuids = generateIds(1);
  copyToClipboard(`${uuids}`);

  const withContextMenuNotification = localStorage.getItem(LOCAL_STORAGE_CONTEXT_MENU_SHOW_NOTIFICATION);
  if (withContextMenuNotification !== "true") return;

  // notification
  chrome.notifications.create({
    type: "basic",
    iconUrl: "/icons/icon192.png",
    title: "UUID Copied",
    message: "UUID copied to the clipboard",
  });
}

chrome.contextMenus.create({
  id: "generateAndCopyUuid",
  title: "Generate Random UUID (Copied)",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
