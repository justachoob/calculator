function message(){
  window.alert("Hello");
}

var count = 0;
function makeborder(x){
  x.style.border = "black solid"; // x is object, border is the property of x
  count++;
  window.alert("made "+count+" borders"); // window is object, alert is method of window
}

function noborder(x){
  x.style.border = "none";
}
