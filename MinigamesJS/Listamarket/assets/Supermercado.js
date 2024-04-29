var itens = [];
var total = 0;

document.querySelector('input[type=submit]').addEventListener('click', () => {
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var valorProduto = document.querySelector('input[name=price]');

    itens.push({
        nome: nomeProduto.value,
        valor: parseFloat(valorProduto.value)
    });

    let listaProduto = document.querySelector('.lista-produtos');
    listaProduto.innerHTML = "";

    itens.forEach(function (val) {
        total += val.valor;
        listaProduto.innerHTML += `
        <div class="lista-produto-single">
            <h3>${val.nome}</h3>
            <h3 class="price-produto"><span>R$${val.valor.toFixed(2)}</span></h3>
        </div>`;
    });

    nomeProduto.value = "";
    valorProduto.value = "";

  
    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = `Total: R$${total.toFixed(2)}`;

  
    if (total > 100) {
        console.log("It's over!");
    }
});

document.querySelector('input[name=Limpar]').addEventListener('click', () => {
    itens = [];
    total = 0;

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "Total: R$0";
});
