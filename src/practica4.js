
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
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let tel = document.getElementById('tel').value;
    let cmt = document.getElementById('formInput').value;
    if (nombre!="" && apellido!="" && tel!="" && cmt!=""){

        form.innerHTML="<strong>Nombre:</strong> " + nombre + "<br>" +
        "<strong>Apellido:</strong> " + apellido + "<br>" + 
        "<strong>Teléfono:</strong> "+ tel + "<br> <br>" +
        "<strong>Comentarios:</strong>"+"<br>" + cmt
    }
        
    }
    
    function formClear(){form.innerHTML=""}