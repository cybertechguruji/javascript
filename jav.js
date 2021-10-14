var divs = ["Section1", "Section2", "Section3", "Section4", "Section5", "Section6","Section7"];
var visibleId = null;
function show(id) {
  if(visibleId !== id) {
    visibleId = id;
  } 
  hide();
}
function hide() {
  var div, i, id;
  for(i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if(visibleId === id) {
      if (div.style.display === "none") {
        div.style.display = "block";  
      } 
      else {
        div.style.display = "none";
      }
    }
  }
}