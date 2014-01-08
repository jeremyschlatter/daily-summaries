chrome.browserAction.onClicked.addListener(function(tab) {
  if (!localStorage["ss_id"]) {
    alert("go to the options page and set the spreadsheet id");
    return;
  }
  chrome.tabs.insertCSS(null, {file: "smoke.css"});
  chrome.tabs.executeScript(null, {file: "smoke.min.js"});
  chrome.tabs.executeScript(null, {file: "content_script.js"});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, localStorage["ss_id"]);
  });
});