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

$(function () {


    var operation = "";

    $(".caclKey").click(displayKey);

   function displayKey() {

       operation= operation +" "+ this.innerHTML
       document.getElementById("calcHistory").innerHTML = operation;
        
     }

});