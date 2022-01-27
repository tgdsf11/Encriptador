//Funcion para enctiptar
function Encriptar()  {
    //almacenamos el valor de texto ingresado por el usuario
    //trabajamos con variables de entorno local
    const texto_para_encriptar=document.getElementById('ingreso-texto').value;
    //para validar el input del usuario se utiliza una expresion regular y el metodo test()
    var reg_exp=new RegExp (/[A-Z-!$%^&*()_+|~=#`{}\[\]:";'<>?,.\/áéíóú]/);
    if (reg_exp.test(texto_para_encriptar)) {
        alert("Evita ingresar mayusculas, simbolos o acentos")
    } else {
        //en una nueva variable, convertimos el valor ingresado por el usuario
        let texto_encriptado=texto_para_encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
        //insertamos el texto encriptado en el html
        document.getElementById("mensaje-versionado").value = texto_encriptado
        //limpiamos el campo de ingreso de texto
        document.getElementById("ingreso-texto").value="";
    }
}
//funcion para desencriptar
function desencriptar(){
    //definimos una variable de entorno local para almacenar el texto ingresado por el usuario
    let texto_encriptado=document.getElementById("ingreso-texto-encriptado").value;
    // para validar el input del usuario usamos como metodo un test() con expresion regular
    var reg_exp=new RegExp (/[A-Z-!$%^&*()_+|~=#`{}\[\]:";'<>?,.\/áéíóú]/);
    //desecriptamos el texto ingresado
    if (reg_exp.test(texto_encriptado)){
        alert("Evita ingresar mayusculas, simbolos o acentos")
    } else {
        let texto_desencriptado=texto_encriptado.replace(/enter/gi, 'e').replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
        //mostramos el texto desencriptado en la pantalla
        document.getElementById("mensaje-versionado").value=texto_desencriptado;
        //eliminamos los valores ingresados por el usuario
        document.getElementById("ingreso-texto-encriptado").value="";
    }
}
//funcion para el boton copiar
function copiar(){
    //almacenamos el valor en una variable
    const copiar_texto = document.getElementById("mensaje-versionado");
    copiar_texto.select();
    document.execCommand("Copy");
    document.getElementById("mensaje-versionado").value="";
}