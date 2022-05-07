function desencriptar(){
    var textCodificado = document.getElementById("texto1").value;
    var texto = textCodificado.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    console.log(texto)
    document.getElementById("texto2").innerHTML=texto;
    if (texto == ""){
        alert("🚫 Ingresa algun texto para Decodificar");
    }
}