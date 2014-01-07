chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(null, {file: "smoke.css"});
  chrome.tabs.executeScript(null, {file: "smoke.min.js"});
  chrome.tabs.executeScript(null, {file: "content_script.js"});
});