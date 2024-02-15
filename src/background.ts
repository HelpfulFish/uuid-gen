// import { copyToClipboard, generateIds } from "./utils";

// const handleContextMenuClick = () => {
//   const uuids = generateIds(1);
//   copyToClipboard(uuids.join(""));
//   // Add additional logic as needed
// };

// const createContextMenuItem = () => {
//   chrome.contextMenus.create({
//     id: "pasteRandomText",
//     title: "Paste Random Text",
//     contexts: ["all"],
//     onclick: handleContextMenuClick,
//   });
// };

// createContextMenuItem();

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
