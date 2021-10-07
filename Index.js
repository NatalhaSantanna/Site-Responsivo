function fundo(){
    var data_atual = new Date();
    var dia = data_atual.getDate();
    if (dia < 10) {
        document.body.style.background = "green"
    }
    else if (dia < 20) {
        document.body.style.background = "yellow"
    }
    else {
        document.body.style.background = "gray"
    }
}
function dateDiferencaEmDias(a, b, evento) {
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
 
    falta= Math.floor((utc2 - utc1) / ( 1000 * 60 * 60 * 24) );
    if (falta>1){
    document.getElementById("Contador").innerHTML = "Faltam "+ falta + " dias para " + evento;
    } 
    else if(falta=1){
    document.getElementById("Contador").innerHTML = "Falta "+ falta + " dia para " + evento;
    }
    else{
        document.getElementById("Contador").innerHTML = "Nao ha nenhum evento programado";
    }
 }
 function mostrarElemento(id, visibilidade) {
    document.getElementById(id).style.display = visibilidade;
}
function carrosel(id, visibilidade){
    var c;
    c++;
    if (c<=5){
    for (var i=0;i<5;i++){
        if (c=1){
            document.getElementById(id).style.display = visibilidade;
            document.getElementById(id).style.border = 56;
        }
        else if(c=2){
            document.getElementById(id).style.display = visibilidade;
        }
        else if(c=3){
            document.getElementById(id).style.display = visibilidade;
        }
        else if(c=4){
            document.getElementById(id).style.display = visibilidade;
        }
        else if(c5){
            document.getElementById(id).style.display = visibilidade;
        }
    }
}
}