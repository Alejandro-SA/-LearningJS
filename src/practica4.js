
document.getElementById("Btn").addEventListener("click",formAlert);
document.getElementById("Btn2").addEventListener("click",formClear);


let form = document.getElementById("Form");


block = document.getElementById("form1");
block.addEventListener("click", toogle1);
function toogle1() {
let box = document.getElementById("box1");
box.classList.toggle("glyphicon-plus");
box.classList.toggle("glyphicon-minus");
}

function formAlert(){
    let nombreStatus , apellidoStatus, telStatus, cmtStatus = false
    var nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let tel = document.getElementById('tel').value;
    let cmt = document.getElementById('formInput').value;
    cmt=cmt.trim();
    let words= cmt.split(/(?:\W+)/);
    console.log(words);
    if (nombre.match(/^[^\s][A-Za-zÁ-Źá-ź\s]*$/)){
       console.log ("nombre OK");
        succes("Nombre");
        nombreStatus=true;
    }
    else {
    message("Nombre", "Escribe tu nombre (solo letras)");
    formClear();
    }
    
       if (apellido.match(/^[^\s][A-Za-zÁ-Źá-ź\s]*$/)){
       console.log ("apellido OK");
        succes("Apellido");
        apellidoStatus=true;
    }
    else {
    message("Apellido", "Escribe tu apellido (solo letras)");
    formClear();
    }
    
    
   if ((tel.match(/[0-9]{10}/))&& (!tel.match(/\D/))){
       console.log ("tel OK");
        succes("Tel");
        telStatus=true;
    }
    else {
    message("Tel", "Escribe tu teléfono (mayor a 10 digito sin espacio ni guiones)");
    formClear();
    }
    
       if (words.length > 5){
       console.log ("cmt OK");
        succes("Cmt");
        cmtStatus=true;
    }
    else {
    message("Cmt", "Escribe más de 5 palabras");
    formClear();
    }
    if (nombreStatus && apellidoStatus && telStatus && cmtStatus){

        form.innerHTML="<strong>Nombre:</strong> " + '<span style="text-transform: capitalize">'+nombre +"</span>" + "<br>" +
        "<strong>Apellido:</strong> " +'<span style="text-transform: capitalize">'+apellido+"</span>" + "<br>" + 
        "<strong>Teléfono:</strong> "+ tel + "<br> <br>" +
        "<strong>Comentarios:</strong>"+"<br>" + cmt ;
    }
        
    }
    function message(x , mess){
    document.getElementById('help'+x).innerHTML=mess;
    document.getElementById('group'+x).classList.add("has-error");
        return console.log("help"+x)
    }
     function succes(x){
    document.getElementById('help'+x).innerHTML="<span class='glyphicon glyphicon-ok'></span>";
    document.getElementById('group'+x).classList.add("has-success");
    document.getElementById('group'+x).classList.remove("has-error"); 
    }
    
    
    
    function formClear(){
        form.innerHTML="" ;
        }
        
