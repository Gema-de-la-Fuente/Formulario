/*--------- LISTA DE Trabajos y Jefes ------------*/
function listaTrabajos() {

    var trabajos = ["seleccione un trabajo", "SECRETARIO", "STAFF", "ANALYST", "VENDEDOR", "MANAGER", "PRESIDENT"],
        select = document.getElementById("Trabajo"),
        option;

    trabajos.forEach(trabajo => {
        option = document.createElement("option");
        option.setAttribute("value", trabajo);
        option.innerHTML = trabajo;
        select.appendChild(option);
    });
}

function listaJefes(){

    var jefes = ["seleccione un Jefe", "JAMES MURRAY", "ALICE JENSEN", "BARBARA MILLER", "FRANCIS KING", "JENNIFER FORD"];

    var select = document.getElementById("Jefe"),
        option;

    jefes.forEach(jefe => {
        option = document.createElement("option");
        option.setAttribute("value", jefe);
        option.innerHTML = jefe;
        select.appendChild(option);
    });
}

window.onload = function () {
    listaTrabajos();
    listaJefes();
}


/*--------- VALIDACIONES ------------*/
var nombre = document.getElementById("Nombre");
var apellido = document.getElementById("Apellido");
var email = document.getElementById("email");
var fechaContrato = document.getElementById("Fecha_contrato");
var movil = document.getElementById("movil");
var salario = document.getElementById("Salario");
var contrasenia = document.getElementById("contrasenia");
var contrasenia2 = document.getElementById("contrasenia2");


nombre.addEventListener("keyup", function(){
    var expReg = /^[A-Za-z]{2,15}$/g;
    if(!expReg.test(nombre.value) || nombre.value == ""){
        nombre.setCustomValidity("Introduzca un nombre que contenga entre 2 y 15 caracteres, NO númericos");
    }
    else{
        nombre.setCustomValidity("");
    }
    
});

apellido.addEventListener("keyup", function(){
    var expReg = /^[A-Za-z]{2,15}$/g;
    if(!expReg.test(apellido.value) || apellido.value == ""){
        apellido.setCustomValidity("Introduzca un apellido que contenga entre 2 y 15 caracteres, NO númericos");
    }
    else{
        apellido.setCustomValidity("");
    }
});

email.addEventListener("keyup", function(){
    var expReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(pufo.es){1}$/g;
    if(!expReg.test(email.value) || email.value == ""){
        email.setCustomValidity("La dirección de email debe tener el patron example@pufo.es");
    }
    else{
        email.setCustomValidity("");
    }
});


movil.addEventListener("keyup", function(){
    var expReg = /^[6|7][0-9]{8}$/g;
    if(!expReg.test(movil.value) || movil.value == ""){
        movil.setCustomValidity("El número de teléfono es incorrecto, debe empezar por 6 o 7 y tener 9 dígitos");
    }
    else{
        movil.setCustomValidity("");
    }
});

salario.addEventListener("keyup", function(){
    var salario1 = parseFloat(salario.value);
    if(salario1<858.55){
        salario.setCustomValidity("El salario no pude ser menor de 858.55");
    }
    else if(salario1>12000){
        salario.setCustomValidity("El salario no pude ser mayor de 12000");
    }
    else{
        salario.setCustomValidity("");
    }
});

contrasenia.addEventListener("keyup", function(){
    var expReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,16}$/g;

    if((!expReg.test(contrasenia.value) || contrasenia.value == "")){
        contrasenia.setCustomValidity("La contraseña debe incluir una minúscula, una mayúscula, un número, un simbolo y no tener espacios en blanco");
    }
    else{
        contrasenia.setCustomValidity("");
    }
});

contrasenia2.addEventListener("keyup", function(){
    if(contrasenia.value !== contrasenia2.value){
        contrasenia2.setCustomValidity("La contraseñas deben coincidir");
    }
    else{
        contrasenia2.setCustomValidity("");
    }
});

function validarFecha(){
    //genero la fecha actual
    var fechaActual = new Date();
    var milisegFechaActual = fechaActual.getTime();
    //fecha introducida
    var fecha = fechaContrato.value;
    var separoFecha = fecha.split("-");
    var fechaF = new Date(fecha);
    var milisegFechaF = fechaF.getTime();

    if(Number(separoFecha[0]) < 2000 || fecha == ""){
        fechaContrato.setCustomValidity("Introduzca una fecha válida no puede ser anterior al año 2000 o estar vacia");
    } else if(milisegFechaActual< milisegFechaF){
        fechaContrato.setCustomValidity("Introduzca una fecha válida no superior a la fecha actual");
    }else{
        fechaContrato.setCustomValidity("");
    }
}

//----------------- COOKIES ------------
function setCookie(cname,cvalue,exdays) {
   var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    //mensaje(cname, cvalue);
}

function getCookie(cname, cvalue) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

