function clickMenu() {
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}



const containers = document.querySelectorAll('.pdt')
const camisasContainer = containers[0]
const bermudasContainer = containers[1]
const calcasContainer = containers[2]

function criarCard(produto) {
    return `
    <div class = "produto">
    <img src = "${produto.imagem}" alt="${produto.nome} "width = 150px" "height = 150px">
    <h4> ${produto.nome}</h4>
    <p> R$ ${produto.preco.toFixed(2)}</p>
    </div>
    `
}

fetch ('produtos.json')
.then(res=> res.json())
.then(produtos=> {
    produtos.forEach(produto => {
        const card = criarCard(produto)

        if (produto.id === 1) {
            camisasContainer.innerHTML += card
        } else if (produto.id === 2 ) {
            bermudasContainer.innerHTML += card
        }else if (produto.id === 3 ) {
            calcasContainer.innerHTML += card
        }
    });
})


    