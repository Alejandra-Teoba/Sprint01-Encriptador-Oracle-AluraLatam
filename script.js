//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//e-->enter
//o-->ober
//i-->imes
//a-->ai
//u-->ufat

function encriptar() {

    valor = document.getElementById("inputTexto").value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
    return false;
    }
    
    var texto=document.getElementById("inputTexto").value.toLowerCase() /*toLowerCase()método devuelve el valor de la cadena de llamada convertido a minúsculas. */

    var clave = texto.replace(/e/igm,"enter"); /*Cuando se encuentra la letra e se reemplazará como enter */
    var clave = clave.replace(/o/igm,"ober");
    var clave = clave.replace(/i/igm,"imes");
    var clave = clave.replace(/a/igm,"ai");
    var clave = clave.replace(/u/igm,"ufat");
   
    
    document.getElementById("imgDibujo").style.display = "none"; /*Desaparecerá la imagen */
    document.getElementById("texto-ningunmsj").style.display = "none";
    document.getElementById("texto-derecha").innerHTML = clave;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

    
}

function desencriptar() {

    valor = document.getElementById("inputTexto").value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
    return false;
    }

    
    var texto=document.getElementById("inputTexto").value.toLowerCase() /*toLowerCase()método devuelve el valor de la cadena de llamada convertido a minúsculas. */
    var clave = texto.replace(/enter/igm,"e"); /*Cuando se encuentra la letra e se reemplazará como enter */
    var clave = clave.replace(/ober/igm,"o");
    var clave = clave.replace(/imes/igm,"i");
    var clave = clave.replace(/ai/igm,"a");
    var clave = clave.replace(/ufat/igm,"u");
    
    document.getElementById("imgDibujo").style.display = "none"; /*Desaparecerá la imagen */
    document.getElementById("texto-ningunmsj").style.display = "none";
    document.getElementById("texto-derecha").innerHTML = clave;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function copiar() {
    var textoContenido = document.querySelector("#texto-derecha");
    textoContenido.select();
    document.execCommand("copy");
}

function borrar()
{
  if (document.getElementById("inputTexto").value=="Escribe el texto para encriptar");
     document.getElementById("inputTexto").value="";
}


function mostrar() {

    valor = document.getElementById("inputTexto").value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
    return false;
    }
   
    document.getElementById('MsjEncontrado').style.display = 'block';
    document.getElementById('texto-encontrado').style.display = 'block';

}

function ocultar() {
   
    document.getElementById('copiar').style.display = 'none';

}


let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})

const textarea = document.querySelector("#inputTexto");
const button = document.querySelector("#encriptar");


button.addEventListener("click",()=>{
    if(textarea.value.length == 0){
        alert("El campo esta vacío");
    } 
})

