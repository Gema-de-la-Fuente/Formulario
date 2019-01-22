var cookie = document.cookie;
var posicionNombre = cookie.indexOf('=');
var nombreCookie = '';

if (cookie.search(' ') !== -1) {
    nombreCookie = cookie.substr(cookie.lastIndexOf(' ')).split('=')[0].trim();
} else {
    nombreCookie = cookie.substr(0, posicionNombre);
}

if (cookie !== '') {
    document.getElementById("mensaje").innerHTML = nombreCookie + " registrado correctamente. Pruebe a Logearse.";
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date(),
        expires;
    if (exdays) {
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
    } else {
        expires = ' ';
    }
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=",
        decodedCookie = decodeURIComponent(document.cookie),
        ca = decodedCookie.split(';'),
        c,
        i;
    for (i = 0; i < ca.length; i + 1) {
        c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

/********* LOGIN *********/
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault();
    var nombre = document.getElementById('usuario').value,
        contras = document.getElementById("contrasenia").value,
        boton;
       
    if (getCookie(nombre) === contras) {
        setCookie('sesion', nombre);
        alert('Bienvenido de nuevo ' + nombre);
        
        boton = document.getElementById("logout");
        boton.style.display = "block";
       
    } else {
        alert('Credenciales Incorrectas');
    }

});


function logoutSesion(cname) {
    document.cookie = "sesion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
