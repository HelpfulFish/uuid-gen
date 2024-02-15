import { copyToClipboard, generateIds } from "./utils";

function handleContextMenuClick() {
  const uuids = generateIds(1);
  copyToClipboard(`${uuids}`);
}

chrome.contextMenus.create({
  id: "copyRandomUuid",
  title: "Copy Random UUID",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(handleContextMenuClick);
