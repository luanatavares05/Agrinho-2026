function respostaCorreta() {
        document.getElementById("resultado").innerHTML =
                "✅ Parabéns! Você acertou! A Agricultura de Baixo Carbono ajuda a reduzir a emissão de gases de efeito estufa.";
                }

                function respostaErrada() {
                    document.getElementById("resultado").innerHTML =
                            "❌ Essa resposta não está correta. Tente novamente!";
                            }

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
}