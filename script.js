const display = document.getElementById("displayNumbers");
let expression = "";

function calc(element){
  if(element.innerHTML == "÷"){
    expression += " " + "/";
    display.innerHTML = expression;
  }else if(element.innerHTML == "x"){
    expression += " " + "*";
    display.innerHTML = expression;
  }else if (element.innerHTML == "+" || element.innerHTML == "-"){
    expression += " " + element.innerHTML;
    display.innerHTML = expression;
  }else if(element.innerHTML == "="){
    expression =  eval(expression);
    display.innerHTML = expression;
  }else if(element.innerHTML == "CE"){
    expression = "";
    display.innerHTML = "0";
  }else{
    expression += element.innerHTML;
    display.innerHTML = expression;
  }
}