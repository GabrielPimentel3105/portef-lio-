const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const bt = document.querySelector("#bt");
const resp = document.querySelector("#resp");
const msg = document.querySelector("#msg");
const confirmDialog = document.querySelector("#confirmdialog");

nome.addEventListener('focusout', function(){
    let tam = nome.value.length;
    const avisonome = document.querySelector("#avisonome");

    if(tam==0){
        avisonome.innerHTML = "<b>Favor preencher o campo nome</b>";
        nome.focus();
    }else{
        avisonome.innerHTML = "";
    }
});

email.addEventListener('focusout', function(){
    let tam = email.value.length;
    const avisonome = document.querySelector("#avisoemail");
    

    if(tam==0){
        avisoemail.innerHTML = "<b>Favor preencher o campo email</b>";
        email.focus();
    }else{
        avisoemail.innerHTML = "";
    }
});

assunto.addEventListener('focusout', function(){
    let tam = assunto.value.length;
    const avisonome = document.querySelector("#avisoassunto");
    

    if(tam==0){
        avisoassunto.innerHTML = "<b>Favor preencher o campo assunto</b>";
        assunto.focus();
    }else{
        avisoassunto.innerHTML = "";
    }
});

mensagem.addEventListener('focusout', function(){
    let tam = mensagem.value.length;
    const avisonome = document.querySelector("#avisomensagem");
    

    if(tam==0){
        avisomensagem.innerHTML = "<b>Favor preencher o campo mensagem</b>";
        mensagem.focus();
    }else{
        avisomensagem.innerHTML = "";
    }
});

bt.addEventListener("click", function(e){
    e.preventDefault();
    
    if(nome.value.length==0){
        nome.focus();
    }

    nome.value = "";
    email.value = "";
    assunto.value = "";
    mensagem.value = "";
    //alert("Formulário enviado com sucesso!");
    msg.innerHTML = "Formulário enviado com sucesso!";
    resp.classList.remove("hidden");
    resp.classList.add("show");
});