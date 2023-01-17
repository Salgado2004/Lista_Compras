adicionar = document.querySelector("#add");

adicionar.onclick = function(e) {
    janela = document.querySelector("#janela");
    main = document.querySelector("#mainContent");

    main.style.filter = "blur(3px)";
    janela.style.display = "block";
    adicionar.disabled = true;
}

fecharJanela = document.querySelector("#fechar");

fecharJanela.onclick = function(e){
    janela = document.querySelector("#janela");
    main = document.querySelector("#mainContent");

    main.style.filter = "blur(0)";
    janela.style.display = "none";
    adicionar.disabled = false;
}