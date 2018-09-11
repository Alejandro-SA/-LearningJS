// var operation ="";
// let calcKeys=document.getElementsByClassName("caclKey");
// console.log(calcKeys);

// for(i=0; i < calcKeys.length; i++) {
// calcKeys[i].addEventListener("click",displayKey);
// }
// document.getElementById("calcEq").addEventListener("click",equal);
// document.getElementById("calcClear").addEventListener("click",clear);

// function displayKey() {

//     operation= operation +" "+ this.innerHTML
//     document.getElementById("calcHistory").innerHTML = operation;

// }

// function equal() {
// document.getElementById("calcDisplay").innerHTML= eval(operation);
// operation ="";
// operation=document.getElementById("calcDisplay").innerHTML    
// document.getElementById("calcHistory").innerHTML ="";
// }
// function clear() {
// document.getElementById("calcDisplay").innerHTML= "";
// operation ="";
// document.getElementById("calcHistory").innerHTML ="";

// }
var operation = "";
var temp = "";
$(function () {
    $(".caclKey").click(displayKey);
    $("#calcEq").click(equal);
    $("#calcClear").click(clear);
    

   function displayKey() {

    if  (this.innerHTML =="+" ||this.innerHTML =="-" || this.innerHTML =="X" ||this.innerHTML =="/")
    {
      operation= temp+ operation +(" &nbsp")+ this.innerHTML+(" &nbsp");
       $("#calcHistory").html(operation);
       temp="";
      }
else
operation= temp+ operation +this.innerHTML
$("#calcHistory").html(operation);
temp="";

     

}
function equal() {
    let fixed = operation.replace(/[X]/g,"*")   
    fixed = fixed.replace(/&nbsp/g ," ")   
    
    $("#calcDisplay").html( eval(fixed));
    temp=eval(fixed);
    operation ="";
   $("#calcHistory").innerHTML ="";}

   function clear() {
   $("#calcDisplay").html("");
    operation ="";
    $("#calcHistory").html("");
    temp="";    
    }

}

);