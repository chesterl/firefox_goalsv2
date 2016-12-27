chrome.tabs.onCreated.addListener(function(tab) {
  if (tab.url === "about:newtab") {
    chrome.tabs.update(
      { url: chrome.extension.getURL("index.html") }
    );
  }


});

// chrome.tabs.executeScript({
//   file: "/weekly.js",
//   matchAboutBlank: true,
// })


// chrome.storage.local.set({ goal: goal }, function() {
//   if (chrome.runtime.lastError) {
//     console.log(chrome.runtime.lastError);
//   } else {
//     console.log("OK");
//   }
// });
