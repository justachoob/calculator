var person = {

  name: "John Smith",
  age: 50
}

function display_age(){

  window.alert(person.age/20.0);
}

function make_border(x){
  x.style.border = "solid black";
}

var nextid = 1;
var currentid = [];
var count = 5;

function calculate()
{
  for (var i = 1; i<count; i++)
  {
    // take the numerators/denom per row
    // calculate the percentage
    var numer = document.getElementById("a"+i+"_num").value;
    var denom = document.getElementById("a"+i+"_denom").value;
    var percent = numer / denom * 100;
    if( isNaN(percent)  || percent < 0 || isFinite(percent) == false) 
    { 
      //doesn't calculate unless both numerator and denom are stated
      document.getElementById("percentage"+i).innerHTML = "";
      continue;
      //perhaps i should use alert("error message?")
    }
    //do i need to parse float?
    //possible parseFloat(document.getElementById("id")
    percent = Math.round(percent * 100) / 100;
    document.getElementById("percentage"+i).innerHTML = percent + "%";
  }
  
}

function weight()
{
  var totalWeight = 0;
  var subtotal = 0;
  var weightedTotal = 0;
  for (var i = 1; i<count; i++)
  {
    // take the numerators/denom per row
    // calculate the percentage
    var numer = document.getElementById("a"+i+"_num").value;
    var denom = document.getElementById("a"+i+"_denom").value;
    var percent = numer / denom;
    var weight = document.getElementById("weighta"+i).value;
    if( isNaN(percent)  || percent < 0 || isFinite(percent) == false || weight < 0 || weight > 100) 
    { 
      //doesn't calculate unless both numerator and denom are stated
      //document.getElementById("percentage"+i).innerHTML = "";
      //continue;
      //perhaps i should use alert("error message?")
      alert("Inputs in Activity "+i+" have not been properly entered.")
      continue;
    }
    totalWeight += parseFloat(weight);
    
    //do i need to parse float?
    //possible parseFloat(document.getElementById("id")
    //percent = Math.round(percent * 100) / 100;
    subtotal = subtotal + parseFloat(weight)*parseFloat(percent);
    //document.getElementById("percentage"+i).innerHTML = percent + "%";
    
  }
  weightedTotal = subtotal/totalWeight;
  document.getElementById("total_percent").innerHTML = weightedTotal;
}

function mean()
{
  
  
}

function addRow()
{
  
}

function removeRow()
{
  
}

function resetButton()
{
  //resets the form
  //resets the additional activies
  
}