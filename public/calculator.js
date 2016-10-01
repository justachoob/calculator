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
    if( isNaN(percent)  || percent < 0 || isFinite(percent) == false || weight < 0 || weight > 100 || weight==null) 
    { 
      //doesn't calculate unless both numerator and denom are stated
      //document.getElementById("percentage"+i).innerHTML = "";
      //continue;
      //perhaps i should use alert("error message?")
      alert("Inputs in Activity "+i+" have not been properly entered. If no weight is entered a NaN will appear.")
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
  var wmultiple = parseFloat(weightedTotal)*100.;
  document.getElementById("total_percent").innerHTML = weightedTotal+" -> "+wmultiple.toFixed(2)+"/"+"100";
}

function mean()
{
  //var totalWeight = 0;
  var subtotal = 0;
  var meanTotal = 0;
  var meanCount = 0;
  for (var i = 1; i<count; i++)
  {
    // take the numerators/denom per row
    // calculate the percentage
    var numer = document.getElementById("a"+i+"_num").value;
    var denom = document.getElementById("a"+i+"_denom").value;
    var percent = numer / denom;
    var weight = document.getElementById("weighta"+i).value;
    if( isNaN(percent)  || percent < 0 || isFinite(percent) == false ) 
    { 
      //doesn't calculate unless both numerator and denom are stated
      //document.getElementById("percentage"+i).innerHTML = "";
      //continue;
      //perhaps i should use alert("error message?")
      alert("Inputs in Activity "+i+" have not been properly entered.")
      continue;
    }
    else
    {
      subtotal += parseFloat(percent)
      meanCount++;
    }
    //do i need to parse float? yes
    
  }
  //weightedTotal = subtotal/totalWeight;
  meanTotal = parseFloat(subtotal)/parseFloat(meanCount);
  var multiple = parseFloat(meanTotal)*100;
  
  document.getElementById("total_percent").innerHTML = meanTotal+" -> "+multiple.toFixed(2)+"/"+"100";
  
}

function addRow()
{
  //do this by text or do this by createelements?
  var mytable = document.getElementById("main_table");
  var newRow = mytable.insertRow(count);
  var activity = newRow.insertCell(0);
  var sname = newRow.insertCell(1);
  var weight = newRow.insertCell(2);
  var numerdenom = newRow.insertCell(3);
  var percentage = newRow.insertCell(4);
  activity.innerHTML = '<input class="activity" type="text" value="Activity ' +count+ '" placeholder="Activity '+count+'">';
  sname.innerHTML = '<input class="sname" type="text" value="A' +count+ '" placeholder="A' +count+ '">';
  weight.innerHTML = '<input id="weighta' +count+ '" class="weight" type="number" value="" placeholder="">';
  numerdenom.innerHTML = '<input id="a' +count+ '_num" class="num" type="number" onkeydown="calculate()" onkeyup="calculate()"> / <input id="a' +count+ '_denom" type="number" class="den" onkeydown="calculate()" onkeyup="calculate()">';
  percentage.id = "percentage" +count;
  percentage.className = "percent";

  
  //update my count
  count++;
}

function removeRow()
{
  if (count == 2)
  {
    alert("Please keep in mind that you must have at least one activity!")
    return;
  }
  
  var mytable = document.getElementById("main_table");
  mytable.deleteRow(count - 1);
  count--;
}

function resetButton()
{
  //resets the form
  document.getElementById("main_form").reset();
  //reset the percentages and Result for mean or weighted calculations
  var c = document.getElementsByClassName("percent");
  for (var b = 0; b<c.length; b++)
  {
    c[b].innerHTML = "" ;
  }
  //resets the form
  //should it reset the form?
}