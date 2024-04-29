const currentPlayer = document.querySelector(".currentPlayer");

let selected
let player = "X"

let positions = [
    [1, 2, 3], //, linhas, colunas e diagonais
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function init(){
    selected = []

    currentPlayer.innerHTML = `Jogador da vez: ${player}`;

    document.querySelector(".game button").array.forEach(item => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    })
}

init();

function newMove(e){
    const index = e.target.getAttribute("data-i");
    e.target.innerHTML = player; //Define se a jogador
    e.target.removeEventListener("click", newMove); //Removeo clique
    selected[index] = player; //Armazena a jogada da lista

    setTimeout(() =>{
        check(); //Para verificar se alguém ganhou ou deu empate
    }, [100])

    player = player 
    currentPlayer.innerHTML = `Jogador da vez: ${player}`;
}

function check(){
    let playerLastMove = player === "X" ? "O" : "X";

    const items = selected
    .map((item, i) => [item, 1])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

    for (pos of positions){
        if (pos.every((item) => items.includes(item))){
            alert("O jogador'" + PlayerLastMove + "'Ganhou"); //Vai exibir a mensagem de vitória 
            init(); //Vai reiniciar o joog
            return;
        }
    }

    if (selected.filter((item) => item).length === 9){
        alert("Deu empate mano!"); //Exibe o empate
        init();
        return;
    }

}
