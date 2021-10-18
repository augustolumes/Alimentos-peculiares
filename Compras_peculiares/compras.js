var compras = []

function listaDeCompras(listaPronta){
    var quantidadeAlimentos = prompt("Digite a quatidade de alimentos: ")
    
    var posicao = 0

    while(posicao < quantidadeAlimentos){
        var novoAlimento = prompt(`Nome do  alimento ${posicao}`)
        if (novoAlimento.length % 2){
            listaPronta.push(novoAlimento)
            posicao++
        }else {
            alert("Alimento invalido, insira um novo alimento!")
        }
    }
}

listaDeCompras(compras)
document.write(compras)

