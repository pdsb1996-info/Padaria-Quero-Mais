const listagemProdutos = [
    {
        nome: "Café Tradicional",
        preco: "R$ " + 3.00,
        
    },
    {
        nome: "Café com leite",
        preco: "R$ " + 4.50,
       
    },
    {
        nome: "Capuccino",
        preco: "R$ " + 6.00,
        
    },
    {
        nome: "Suco",
        preco: "R$ " + 7.50,
        
    },
    {
        nome:"Pão com manteiga",
        preco: "R$" + 5.00,
    },
    {
        nome: "Misto quente",
        preco: "R$" + 7.00,
    },
    {
        nome: "Pão doce",
        preco: "R$" + 5.00,
    },
    {
        nome: "Pão com queijo minas",
        preco: "R$" + 8.00,
    },
    {
        nome:"Fatia de bolo",
        preco:"R$" + 8.00,
    }
];

 
document.getElementById("campo-filtro").addEventListener("input", (e) => {
    const valor = e.target.value.toLowerCase().trim();
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    if(valor ===""){
        return; 
    }

    listagemProdutos
        .filter(produto => produto.nome.toLowerCase().includes(valor))
        .forEach(produto => {
            const li = document.createElement("li");
            li.textContent = `${produto.nome} - ${produto.preco}`;
            resultado.appendChild(li);
        });
});

