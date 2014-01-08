chrome.browserAction.onClicked.addListener(function(tab) {
  if (!localStorage["ss_id"]) {
    alert("go to the options page and set the spreadsheet id");
    return;
  }
  chrome.tabs.query({}, function(tabs) {
    for (var i=0; i<tabs.length; ++i) {
      chrome.tabs.sendMessage(tabs[i].id, localStorage["ss_id"]);
    }
  });
});