// ==========================
// CALCULADORA
// ==========================

function calcularArea() {

    const hectares = Number(document.getElementById("hectares").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(hectares) || hectares <= 0) {

        resultado.innerHTML = "Digite um valor válido.";

        return;

    }

    if (hectares <= 5) {

        resultado.innerHTML =
        "🌱 Propriedade pequena: invista em hortas, compostagem, agricultura orgânica e irrigação econômica.";

    }

    else if (hectares <= 30) {

        resultado.innerHTML =
        "🚜 Propriedade média: utilize rotação de culturas, MIP, plantio direto e recuperação do solo.";

    }

    else if (hectares <= 100) {

        resultado.innerHTML =
        "🌳 Propriedade grande: utilize ILPF, reflorestamento, preservação das nascentes e Agricultura de Baixo Carbono.";

    }

    else {

        resultado.innerHTML =
        "🌎 Grande área: invista em energia renovável, monitoramento ambiental e conservação das áreas nativas.";

    }

}

// ==========================
// QUIZ
// ==========================

function abrirQuiz(){

    let pontos = 0;

    let r1 = prompt("1) O que significa MIP?\n\nA) Manejo Integrado de Pragas\nB) Método Internacional de Plantio\nC) Monitoramento Industrial");

    if(r1 && r1.toUpperCase()=="A"){
        pontos++;
    }

    let r2 = prompt("2) O Plano ABC+ busca:\n\nA) Aumentar o desmatamento\nB) Reduzir a emissão de carbono\nC) Produzir menos alimentos");

    if(r2 && r2.toUpperCase()=="B"){
        pontos++;
    }

    let r3 = prompt("3) ILPF significa:\n\nA) Integração Lavoura-Pecuária-Floresta\nB) Integração Local de Plantio Florestal\nC) Instituto Legal de Produção Florestal");

    if(r3 && r3.toUpperCase()=="A"){
        pontos++;
    }

    let r4 = prompt("4) A agricultura regenerativa tem como objetivo:\n\nA) Recuperar o solo\nB) Aumentar a poluição\nC) Derrubar florestas");

    if(r4 && r4.toUpperCase()=="A"){
        pontos++;
    }

    let r5 = prompt("5) Qual prática ajuda a preservar o meio ambiente?\n\nA) Queimadas\nB) Desmatamento\nC) Agroflorestas");

    if(r5 && r5.toUpperCase()=="C"){
        pontos++;
    }

    alert("Você acertou " + pontos + " de 5 perguntas! 🌱");

}

// ==========================
// ANIMAÇÃO DOS CARDS
// ==========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(function(card){

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = ".8s";

    observer.observe(card);

});

// ==========================
// BOTÃO VOLTAR AO TOPO
// ==========================

const topo = document.createElement("button");

topo.innerHTML = "⬆";

topo.style.position = "fixed";
topo.style.right = "20px";
topo.style.bottom = "20px";
topo.style.display = "none";
topo.style.borderRadius = "50%";
topo.style.width = "50px";
topo.style.height = "50px";
topo.style.fontSize = "22px";

document.body.appendChild(topo);

window.addEventListener("scroll", function(){

    if(window.scrollY > 350){

        topo.style.display = "block";

    }else{

        topo.style.display = "none";

    }

});

topo.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

let tamanhoFonte = 100;

function aumentarFonte(){
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + "%";
}

function diminuirFonte(){
    tamanhoFonte -= 10;
    document.body.style.fontSize = tamanhoFonte + "%";
}

function modoEscuro(){
    document.body.classList.toggle("escuro");
}

console.log("Projeto Agrinho carregado com sucesso!");