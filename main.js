const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(){

}
let contador = 0;
while (contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSom;
    contador = contador = 1;
}

