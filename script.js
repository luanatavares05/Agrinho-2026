 const perguntas = [
        {
        pergunta:"Qual prática ajuda a reduzir a emissão de gases de efeito estufa?",
        opcoes:["Agricultura de Baixo Carbono","Queimadas","Desmatamento"],
        correta:0
        },
        {
        pergunta:"O MIP significa:",
        opcoes:["Manejo Integrado de Pragas","Máquina Inteligente de Plantio","Método Industrial de Produção"],
        correta:0
        },
        {
        pergunta:"Qual recurso natural deve ser preservado para garantir a produção agrícola?",
        opcoes:["Água","Poluição","Lixo"],
        correta:0
        }
        ];

        let perguntaAtual = 0;
        let pontos = 0;

        function carregarPergunta(){

        document.querySelector("#quiz strong").innerHTML =
        perguntas[perguntaAtual].pergunta;

        const botoes = document.querySelectorAll("#quiz button");

        botoes.forEach((botao,i)=>{
        botao.innerHTML = perguntas[perguntaAtual].opcoes[i];
        botao.onclick = ()=>responder(i);
        });

        document.getElementById("resultado").innerHTML="";
        }

        function responder(opcao){

        if(opcao===perguntas[perguntaAtual].correta){
        pontos++;
        document.getElementById("resultado").innerHTML="✅ Resposta correta!";
        }else{
        document.getElementById("resultado").innerHTML="❌ Resposta incorreta!";
        }

        setTimeout(()=>{

        perguntaAtual++;

        if(perguntaAtual<perguntas.length){

        carregarPergunta();

        }else{

        document.querySelector("#quiz .card").innerHTML=
        `<h3>Você terminou!</h3>
        <p>Você acertou ${pontos} de ${perguntas.length} perguntas.</p>`;

        }

        },1200);

        }

        window.onload=carregarPergunta;

                            // Destaca o link do menu conforme a seção visível
                            const links = document.querySelectorAll("nav a");
                            const secoes = document.querySelectorAll("section");

                            window.addEventListener("scroll", () => {
                                let atual = "";

                                    secoes.forEach(secao => {
                                            const topo = secao.offsetTop - 150;

                                                    if (scrollY >= topo) {
                                                                atual = secao.getAttribute("id");
                                                                        }
                                                                            });

                                                                                links.forEach(link => {
                                                                                        link.style.color = "white";

                                                                                                if (link.getAttribute("href") === "#" + atual) {
                                                                                                            link.style.color = "#C8E6C9";
                                                                                                                    }
                                                                                                                        });
                                                                                                                        });
