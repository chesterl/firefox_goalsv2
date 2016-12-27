// chrome.storage.local.set({ goal: goal }, function() {
//   if (chrome.runtime.lastError) {
//     console.log(chrome.runtime.lastError);
//   } else {
//     console.log("OK");
//   }
// });
chrome.tabs.update({
  url: chrome.extension.getURL("index.html");
});
