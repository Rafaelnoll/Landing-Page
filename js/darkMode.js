var botaoDarkMode = document.querySelector(".dark-mode");

botaoDarkMode.addEventListener("click", function(){

ativaDarkMode();

});

function ativaDarkMode(){

    botaoDarkMode.classList.add("invisivel");
    botaoLightMode.classList.remove("invisivel");
    
    var secoesDarkMode = document.querySelectorAll(".secao-personalizavel");
    secoesDarkMode.forEach(function(secoesDarkMode){
        secoesDarkMode.classList.add("secoes-dark-mode");
    });
    
    var body = document.querySelector("body");
    body.classList.add("body-dark-mode");
    
    var tituloOqueEh = document.querySelector(".titulo-sobre-teufuturo");
    tituloOqueEh.classList.add("titulo-dark-mode");
    
    var tituloObjetivo = document.querySelector(".titulo-objetivo");
    tituloObjetivo.classList.add("titulo-dark-mode");
    
    var linhas = document.querySelectorAll(".linhas-oque-e");
    
    linhas.forEach(function(linhas){
        linhas.classList.add("linhas-dark-mode");  
    });
    
    var cardObjetivos = document.querySelectorAll(".item-objetivo");
    cardObjetivos.forEach(function(cardObjetivos){
        cardObjetivos.classList.add("cards-objetivos-dark-mode");
    });
    
    var videoGradient = document.querySelector(".gradient-personalizado");
    videoGradient.classList.add("gradient-video-dark-mode");

    var desenvolvedores = document.querySelectorAll(".desenvolvedor");
    desenvolvedores[0].classList.add("gradient-desenvolvedor-dark-mode");
    desenvolvedores[1].classList.add("gradient-desenvolvedor-dark-mode");
    
    var finalGradient = document.querySelector(".secao-end");
    finalGradient.classList.add("gradient-final-dark-mode");

}

