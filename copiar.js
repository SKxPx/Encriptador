function copiar(){
    var copiar = document.getElementById("texto2");
    copiar.select();
    document.execCommand("copy");
    alert ("🤙 Texto copiado");
}