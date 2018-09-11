var operation ="";
var temp="";
let calcKeys=document.getElementsByClassName("caclKey");
console.log(calcKeys);

for(i=0; i < calcKeys.length; i++) {
calcKeys[i].addEventListener("click",displayKey);
}
document.getElementById("calcEq").addEventListener("click",equal);
document.getElementById("calcClear").addEventListener("click",clear);

function displayKey() {
if  (this.innerHTML =="+" ||this.innerHTML =="-" || this.innerHTML =="X" ||this.innerHTML =="/")  

{
    operation= temp+ operation +(" &nbsp")+ this.innerHTML+(" &nbsp");
    document.getElementById("calcHistory").innerHTML = operation;
    temp="";
}
else{
    operation= temp+ operation + this.innerHTML;
    document.getElementById("calcHistory").innerHTML = operation;
    temp="";
} 
   

}

function equal() {
let fixed = operation.replace(/[X]/g,"*")   
fixed = fixed.replace(/&nbsp/g ," ")   

document.getElementById("calcDisplay").innerHTML= eval(fixed);
temp=eval(fixed);
operation ="";
document.getElementById("calcHistory").innerHTML ="";
    
}
function clear() {
document.getElementById("calcDisplay").innerHTML= "";
operation ="";
document.getElementById("calcHistory").innerHTML ="";
temp="";    
}