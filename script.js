novo = document.querySelector("#add");

novo.onclick = function(e) {
    janela = document.querySelector("#janela");
    main = document.querySelector("#mainContent");

    main.style.filter = "blur(3px)";
    janela.style.display = "block";
    novo.disabled = true;
}

fecharJanela = document.querySelector("#fechar");

fecharJanela.onclick = function(e){
    janela = document.querySelector("#janela");
    form = document.querySelector("form");
    main = document.querySelector("#mainContent");

    main.style.filter = "blur(0)";
    janela.style.display = "none";
    novo.disabled = false;
    form.reset();
}

adicionar = document.querySelector("#submit");

adicionar.onclick = function(e){
    e.preventDefault();

    lista = document.querySelector("#lista");

    nome = document.querySelector("#nome").value;
    qtd = document.querySelector("#qtd").value;
    medida = document.querySelector("#medida").value;

    lista.innerHTML = lista.innerHTML + `<ul>${nome}   ${qtd} ${medida}</ul>`;

    main.style.filter = "blur(0)";
    janela.style.display = "none";
    novo.disabled = false;
    form.reset();
}

