
document.getElementById("Btn").addEventListener("click",formAlert);

    function formAlert(){
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let tel = document.getElementById('tel').value;
        alert("Nombre: " + nombre + "\n" +
             "Apellido: " + apellido + "\n" + 
             "Telefono: "+ tel);
    }

    block = document.getElementById("form1");
    block.addEventListener("click", toogle1);
    block = document.getElementById("form2");
    block.addEventListener("click", toogle2);
   function toogle1() {
    let box = document.getElementById("box1");
    box.classList.toggle("glyphicon-plus");
    box.classList.toggle("glyphicon-minus");
   }
   function toogle2() {
    let box = document.getElementById("box2");
    box.classList.toggle("glyphicon-plus");
    box.classList.toggle("glyphicon-minus");
   }
    // block.click(function(){
    //     document.getElementById();
   