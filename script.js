// alert("sefsefsefsef")

//console.log("Hola en consola");
//document.write("Hola en documento");
/*
function suma(a,b){
    return a + b;
}

console.log(suma(4,6));

let mi_variable_2 = "texto";
const mi_constante_1 = "texto";

mi_variable_2 = "ahora tiene este valor";
 mi_constante_1 = "ahora deberia de tener este valor";
*/
const edad = 20;
const nombre = "jarod Venegas";
const carnet = "B98410";
const contrasena = "1234"

const profesor = {
    edad: edad,
    nombre: nombre,
    carnet: carnet,
    contrasena: contrasena
};

window.onload = () => {
    document.getElementById('title').innerText = 'Bi $;
}

const validarUsuario = () => {
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contraseña').value;

    if(usuario == profesor.carnet && contrasena == profesor.contrasena){
        return true;
    }else{
        document.getElementById("alerta").classList.remove("hide");
        return false;
    }
}