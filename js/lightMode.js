var botaoLightMode = document.querySelector(".light-mode");

botaoLightMode.addEventListener("click", function(){

ativaLightMode();

});

function ativaLightMode(){
    
    botaoLightMode.classList.add("invisivel")
    botaoDarkMode.classList.remove("invisivel");
    
    var secoesDarkMode = document.querySelectorAll(".secao-personalizavel");
    secoesDarkMode.forEach(function(secoesDarkMode){
        secoesDarkMode.classList.remove("secoes-dark-mode");
    });
    
    var dados = document.querySelectorAll(".item-dado");
    dados.forEach(function(dados){
        dados.classList.remove("secoes-dark-mode");
    });
    
    
    var body = document.querySelector("body");
    body.classList.remove("body-dark-mode");
    
    var tituloOqueEh = document.querySelector(".titulo-sobre-teufuturo");
    tituloOqueEh.classList.remove("titulo-dark-mode");
    
    var tituloObjetivo = document.querySelector(".titulo-objetivo");
    tituloObjetivo.classList.remove("titulo-dark-mode");
    
    var linhas = document.querySelectorAll(".linhas-oque-e");
    linhas.forEach(function(linhas){
        linhas.classList.remove("linhas-dark-mode");  
    });
    
    var cardObjetivos = document.querySelectorAll(".item-objetivo");
    cardObjetivos.forEach(function(cardObjetivos){
        cardObjetivos.classList.remove("cards-objetivos-dark-mode");
    });
    
    var videoGradient = document.querySelector(".gradient-personalizado");
    videoGradient.classList.remove("gradient-video-dark-mode");

    var desenvolvedores = document.querySelectorAll(".desenvolvedor");
    desenvolvedores[0].classList.remove("gradient-desenvolvedor-dark-mode");
    desenvolvedores[1].classList.remove("gradient-desenvolvedor-dark-mode");

    var finalGradient = document.querySelector(".secao-end");
    finalGradient.classList.remove("gradient-final-dark-mode");
    
}