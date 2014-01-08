if (!localStorage["ss_id"]) {
  localStorage["ss_id"] = '';
}
var ss_id = document.getElementById("ss_id");
ss_id.value = localStorage["ss_id"];
ss_id.addEventListener('keyup', function(e){
  localStorage["ss_id"] = ss_id.value;
});