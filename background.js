var ports = [];
function getListener(n) {
  return function(msg) {
    for (var i=0; i<ports.length; ++i) {
      if (i !== n && ports[i]) {
        ports[i].postMessage(msg);
      }
    }
  };
}
chrome.runtime.onConnect.addListener(function(port){
  var i = ports.length;
  ports.push(port);
  port.onMessage.addListener(getListener(i));
  port.onDisconnect.addListener(function(e) {
    ports[i] = null;
  });
});
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

// TODO: Don't let escape close the popup.
// TODO: Consistent formatting across tabs. CSS reset?