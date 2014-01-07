chrome.browserAction.onClicked.addListener(function(tab) {
  var req = new XMLHttpRequest();
  req.open("POST", "https://spreadsheets.google.com/feeds/list/0AhB1LVNb2qc8dEhmSzJmNTRLVVZ0XzZwdHQyX3dKbmc/od6/private/full", false);
  req.setRequestHeader("Content-Type", "application/atom+xml");
  req.send('<entry xmlns="http://www.w3.org/2005/Atom" xmlns:gsx="http://schemas.google.com/spreadsheets/2006/extended"><gsx:thisisthesummarycolumn>Jeremy is super awesome</gsx:thisisthesummarycolumn></entry>');
});