chrome.tabs.onCreated.addListener(function(tab) {
  chrome.tabs.update(
    { url: chrome.extension.getURL("index.html") }
  );


});

// chrome.tabs.onActivated.addListener(function(tab) {
  // tab.url = "http://www.example.com";
  // console.log(tab.id);

// }

// );
