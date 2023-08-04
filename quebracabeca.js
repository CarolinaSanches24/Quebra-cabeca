const grade= document.getElementById("grade");
const start = document.querySelector('.start');
const next = document.querySelector('.next');

var escolhido1=null;
var escolhido2=null;
var step = 1;

function clicarPeca(argElemento) {
    if(escolhido1==null){
        escolhido1=argElemento;
    } else if(escolhido2==null){
        escolhido2=argElemento;
        trocarPeca();
    }
}


function embaralhar (argIteracoes) {
    for (var i = 0; i<argIteracoes; i++){
        var escolhido1X=0;
        var escolhido1Y=0;
        var escolhido2X=0;
        var escolhido2Y=0;
        while (escolhido1X == escolhido2X && escolhido1Y === escolhido2Y) {
            escolhido1X=Math.round(Math.random()*(6-1));
            escolhido1Y=Math.round(Math.random()*(4-1));

            escolhido2X=Math.round(Math.random()*(6-1));
            escolhido2Y=Math.round(Math.random()*(4-1));
        }
        escolhido1 = document.getElementById("x" +escolhido1X + "y" +escolhido1Y);
        escolhido2 = document.getElementById("x" +escolhido2X + "y" +escolhido2Y);
        trocarPeca()
    }
}

function trocarPeca(){
    var escolhidoTrocadoTop=escolhido1.style.top;
    var escolhidoTrocadoLeft=escolhido1.style.left;

    escolhido1.style.top=escolhido2.style.top;
    escolhido1.style.left=escolhido2.style.left;
    
    escolhido2.style.top=escolhidoTrocadoTop;
    escolhido2.style.left=escolhidoTrocadoLeft;
    
    escolhido1=null;
    escolhido2=null;
    
    validar();
}

function validar(){
    var quebraCabecaOk = true;

    for (var i=0; i<4; i++) {
        for (var j=0; j<6; j++){
            
            var posicaoXEsperada=j*100+"px";
            var posicaoYEsperada=i*100+"px";

            var pecaVerificada = document.getElementById("x"+j+"y"+i);
            console.log(pecaVerificada.style.left != posicaoXEsperada)
            console.log(pecaVerificada.style.top != posicaoYEsperada)
            if (pecaVerificada.style.left != posicaoXEsperada || pecaVerificada.style.top != posicaoYEsperada) {
                quebraCabecaOk=false;
                break;
            }
        }
    }
    if(quebraCabecaOk) {
        window.alert("Parabéns você Conseguiu!");

        if(step === 1) {
            next.click();
            step = 2;
        } else {
            start.click()
            step=1
        }
     }
}
        function alterarImagem(objeto, caminhoNovaImagem){//Recebemos dois valores por parâmetro.
             document.getElementById(objeto).src = caminhoNovaImagem;
            
            }
    


start.addEventListener('click', (e) => {

    grade.innerHTML = '';

    for (var i=0; i<4; i++){
        for (var j =0; j<6; j++){
            var novaPeca=document.createElement("div");
             novaPeca.id="x"+j+"y"+i;
             novaPeca.style.top=i*100+"px";
             novaPeca.style.left=j*100+"px";
             novaPeca.style.backgroundPositionX=((j*25/(6-1))*100)+"%";
             novaPeca.style.backgroundPositionY=((i*25/(4-1))*100)+"%";
             novaPeca.setAttribute("onclick", "clicarPeca(this)");
             grade.appendChild(novaPeca);
        }
    }
    embaralhar(4)
})


next.addEventListener('click', (e) => {
    grade.innerHTML = '';

    for (var i=0; i<4; i++){
        for (var j =0; j<6; j++){
            var novaPeca=document.createElement("div");
             novaPeca.id="x"+j+"y"+i;
             novaPeca.style.top=i*100+"px";
             novaPeca.style.left=j*100+"px";
             novaPeca.style.backgroundPositionX=((j*25/(6-1))*100)+"%";
             novaPeca.style.backgroundPositionY=((i*25/(4-1))*100)+"%";
             novaPeca.setAttribute("onclick", "clicarPeca(this)");
             grade.appendChild(novaPeca);
        }
    }
    document.querySelectorAll("#grade div").forEach(item => {
        item.style.backgroundImage = "url('./img/gabinete.jpg')";
    })
    
    embaralhar(4)
})


if(step === 1){
    start.click()
}