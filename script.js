const dados = {
    promocoes: [
        {
            nome: "Cajá",
            tipo: "Frutos do Cerrado",
            preco: "R$ 5,00",
            imagem: "imagens/caja_150.jpg"
        },
        {
            nome: "Murici",
            tipo: "Frutos do Cerrado",
            preco: "R$ 5,00",
            imagem: "imagens/murici_150.jpg"
        },
        {
            nome: "Nutella",
            tipo: "Artificiais",
            preco: "R$ 12,00",
            imagem: "imagens/nutella_150.png"
        },
        {
            nome: "Brigadeiro",
            tipo: "Artificiais",
            preco: "R$ 12,00",
            imagem: "imagens/brigadeiro_150.png"
        }
    ],
    produtos: [
        {
            nome: "Cajá",
            tipo: "Frutos do Cerrado",
            preco: "R$ 8,00",
            imagem: "imagens/caja_150.jpg"
        },
        {
            nome: "Murici",
            tipo: "Frutos do Cerrado",
            preco: "R$ 8,00",
            imagem: "imagens/murici_150.jpg"
        },
        {
            nome: "Caju",
            tipo: "Frutos do Cerrado",
            preco: "R$ 8,00",
            imagem: "imagens/caju_150.png"
        },
        {
            nome: "Bacaba",
            tipo: "Frutos do Cerrado",
            preco: "R$ 8,00",
            imagem: "imagens/bacaba_150.jpg"
        },
        {
            nome: "Buriti",
            tipo: "Frutos do Cerrado",
            preco: "R$ 8,00",
            imagem: "imagens/buriti_150.jpg"
        },
        {
            nome: "Brigadeiro",
            tipo: "Artificiais",
            preco: "R$ 15,00",
            imagem: "imagens/brigadeiro_150.png"
        },
        {
            nome: "Nutella",
            tipo: "Artificiais",
            preco: "R$ 15,00",
            imagem: "imagens/nutella_150.png"
        },
        {
            nome: "Leite Condensado",
            tipo: "Artificiais",
            preco: "R$ 15,00",
            imagem: "imagens/leite-condensado_150.png"
        },
        {
            nome: "Chocomenta",
            tipo: "Artificiais",
            preco: "R$ 15,00",
            imagem: "imagens/chocomenta_150.png"
        },
        {
            nome: "Ninho com Nutella",
            tipo: "Artificiais",
            preco: "R$ 15,00",
            imagem: "imagens/ninho-nutella_150.jpg"
        }
    ],
    sabores: {
        "Frutos do Cerrado": [
            "Cajá", "Murici", "Caju", "Bacaba", "Buriti"
        ],
        "Artificiais": [
            "Leite Condensado", "Brigadeiro", "Nutella", "Ninho com Nutella", "Chocomenta"
        ]
    }
};

document.addEventListener("DOMContentLoaded", function () {
    // Preencher promoções
    const promocoesDiv = document.querySelector('#promocoes .produtos');
    if (promocoesDiv) {
        promocoesDiv.innerHTML = '';
        for (let i = 0; i < dados.promocoes.length; i++) {
            const produto = dados.promocoes[i];
            promocoesDiv.innerHTML += `
                <div class="produto" data-nome="${produto.nome}">
                    <img src="${produto.imagem}" alt="Picolé de ${produto.nome}">
                    <p class="label">${produto.tipo}</p>
                    <h3>${produto.nome}</h3>
                    <p class="price">${produto.preco}</p>
                </div>
            `;
        }
    }

    // Preencher produtos
    const produtosDiv = document.querySelector('#produtos .produtos');
    if (produtosDiv) {
        produtosDiv.innerHTML = '';
        for (let i = 0; i < dados.produtos.length; i++) {
            const produto = dados.produtos[i];
            produtosDiv.innerHTML += `
                <div class="produto" data-nome="${produto.nome}">
                    <img src="${produto.imagem}" alt="Picolé de ${produto.nome}">
                    <p class="label">${produto.tipo}</p>
                    <h3>${produto.nome}</h3>
                    <p class="price">${produto.preco}</p>
                </div>
            `;
        }
    }


    const aside = document.querySelector('aside');
    if (aside) {
        aside.innerHTML = `
            <h2>Sabores</h2>
            <h4>Frutos do Cerrado</h4>
            <ul id="sabores-cerrado"></ul>
            <h4>Artificiais</h4>
            <ul id="sabores-artificiais"></ul>
        `;
        const saboresCerrado = aside.querySelector('#sabores-cerrado');
        const saboresArtificiais = aside.querySelector('#sabores-artificiais');
        const saboresCerradoArr = dados.sabores["Frutos do Cerrado"];
        for (let i = 0; i < saboresCerradoArr.length; i++) {
            saboresCerrado.innerHTML += `<li>${saboresCerradoArr[i]}</li>`;
        }
        const saboresArtificiaisArr = dados.sabores["Artificiais"];
        for (let i = 0; i < saboresArtificiaisArr.length; i++) {
            saboresArtificiais.innerHTML += `<li>${saboresArtificiaisArr[i]}</li>`;
        }
    }


    const anunciosDiv = document.getElementById('anuncios');
    if (anunciosDiv) {
        anunciosDiv.innerHTML = `
            <h3>Anuncie Aqui</h3>
            <p>Entre em contato conosco para saber mais sobre como anunciar seus produtos aqui.</p>
        `;
    }

  
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
            <p>&copy; Picolé & Cia - Todos os direitos reservados.</p>
            <address>
                <p>Avenida Teotônio Segurado, Nº 125, Centro</p>
                <p>CEP 77000-000</p>
                <p>Palmas, Tocantins</p>
            </address>
        `;
    }

    // Destaque ao passar mouse sobre produtos com leve movimento
    function animarProdutos() {
        const produtos = document.querySelectorAll('.produto');
        for (let i = 0; i < produtos.length; i++) {
            const el = produtos[i];
            el.addEventListener('mouseenter', function () {
                el.style.transition = "transform 0.2s, box-shadow 0.2s";
                el.style.boxShadow = "0 8px 24pxrgba(247, 239, 228, 0.53)";
                el.style.transform = "translateY(-8px) scale(1.05)";
            });
            el.addEventListener('mouseleave', function () {
                el.style.boxShadow = "";
                el.style.transform = "";
            });
        }
    }
    animarProdutos();

    // Clique em produto mostra detalhes em um modal simples
    function ativarModalProdutos() {
        const produtos = document.querySelectorAll('.produto');
        for (let i = 0; i < produtos.length; i++) {
            const el = produtos[i];
            el.addEventListener('click', function () {
                const nome = el.querySelector('h3')?.textContent || '';
                const preco = el.querySelector('.price')?.textContent || '';
                const tipo = el.querySelector('.label')?.textContent || '';
                showModal(`<strong>${nome}</strong><br>${tipo}<br>${preco}`);
            });
        }
    }
    ativarModalProdutos();

    // Clique em "Sobre Nós" ou "Fale Conosco"
    const navItems = document.querySelectorAll('nav ul li');
    for (let i = 0; i < navItems.length; i++) {
        const item = navItems[i];
        item.addEventListener('click', function () {
            if (item.textContent.includes("Sobre")) {
                alert("Picolé & Cia: Tradição e sabor desde 2025");
            } else if (item.textContent.includes("Fale")) {
                alert("Contato: (63) 9925-41123\nEmail: contato@picolecia de yeny.com");
            }
        });
    }

    
});

