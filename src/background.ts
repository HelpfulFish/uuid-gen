import { copyToClipboard, generateIds } from "./utils";

function handleContextMenuClick() {
  const uuids = generateIds(1);
  copyToClipboard(`${uuids}`);

  // notification
  chrome.notifications.create({
    type: "basic",
    iconUrl: "/icons/icon192.png",
    title: "UUID Copied",
    message: "UUID copied to the clipboard",
  });
}

chrome.contextMenus.create({
  id: "copyRandomUuid",
  title: "Copy Random UUID",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
