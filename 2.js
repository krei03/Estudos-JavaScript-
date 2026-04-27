const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 80 },
    { id: 3, nome: "Monitor", preco: 1200 },
    { id: 4, nome: "Teclado", preco: 150 },
    { id: 5, nome: "Celular", preco: 2500 },
];
for (const element of produtos) {
    if (element.preco > 1000) {
        console.log(element.nome, element.preco, "produtos com maior valor da loja")
    }
}