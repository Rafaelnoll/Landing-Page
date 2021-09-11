var form = document.querySelector(".form-apoiar");

form.addEventListener("submit", function(event){
    event.preventDefault();

    var formApoiador = apoiador(form);
    console.log("Informações do apoiador(a):",formApoiador);

    form.reset();
});


function apoiador(form){
    var formApoiador = {
        nome: form.nome.value,
        email:form.email.value,
        telefone:form.telefone.value,
        contato:form.contato.value,
        horairo:form.horario.value,
        mensagem:form.mensagem.value,
    }
    return formApoiador;
}