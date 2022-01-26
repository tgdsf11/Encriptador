//Funcion para enctiptar
function Encriptar(){holaa hola hola hola
    //almacenamos el valor de texto ingresado por el usuario
    //trabajamos con variables de entorno local
    let texto_para_encriptar=document.getElementById('ingreso-texto').value;
    //en una nueva variable, convertimos el valor ingresado por el usuario
    let texto_encriptado=texto_para_encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    //insertamos el texto encriptado en el html
    document.getElementById("mensaje-versionado").value = texto_encriptado
    //limpiamos el campo de ingreso de texto
    document.getElementById("ingreso-texto").value="";
}
//funcion para desencriptar
function desencriptar(){
    //definimos una variable de entorno local para almacenar el texto ingresado por el usuario
    let texto_encriptado=document.getElementById("ingreso-texto-encriptado").value;
    //desecriptamos el texto ingresado
    let texto_desencriptado=texto_encriptado.replace(/enter/gi, 'e').replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    //mostramos el texto desencriptado en la pantalla
    document.getElementById("mensaje-versionado").value=texto_desencriptado;
    //eliminamos los valores ingresados por el usuario
    document.getElementById("ingreso-texto-encriptado").value="";
}
//funcion para el boton copiar
function copiar(){
    //almacenamos el valor en una variable
    const copiar_texto = document.getElementById("mensaje-versionado");
    copiar_texto.select();
    document.execCommand("Copy");
    document.getElementById("mensaje-versionado").value="";
}