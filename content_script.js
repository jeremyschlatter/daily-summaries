function doit(key, worksheet, text) {
  text = text.replace(/&/g, '&amp;')
             .replace(/</g, '&lt;')
             .replace(/>/g, '&gt;')
             .replace(/"/g, '&quot;')
             .replace(/'/g, '&apos;');
  var req = new XMLHttpRequest();
  req.open("POST", "https://spreadsheets.google.com/feeds/list/" + key + "/" + worksheet + "/private/full", false);
  req.setRequestHeader("Content-Type", "application/atom+xml");
  req.send('<entry xmlns="http://www.w3.org/2005/Atom" xmlns:gsx="http://schemas.google.com/spreadsheets/2006/extended"><gsx:thisisthesummarycolumn>' + text + '</gsx:thisisthesummarycolumn></entry>');
}

smoke.prompt("What did you do today?", function(e){
  if (e){
    doit("0AhB1LVNb2qc8dEhmSzJmNTRLVVZ0XzZwdHQyX3dKbmc", "od6", e);
  }else{
  }
}, {ok: "Submit"});