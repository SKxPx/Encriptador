function encriptar(){
    var textCodificado = document.getElementById("texto1").value;
    var texto = textCodificado.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    console.log(texto);
    document.getElementById("texto2").innerHTML=texto;
    if (texto == ""){
        alert("🚫 Ingresa algun texto para codificar");
    }
}
