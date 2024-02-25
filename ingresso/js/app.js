function comprar() {
    let tiposDeIngresso = document.getElementById('tipo-ingresso').value;
    let qtdInserida = parseInt(document.getElementById('qtd').value);
    
    /* Cálculo dos valores vendidos de ingressos. */
    if(tiposDeIngresso == 'pista') {
        comprarPista(qtdInserida);
    } else if(tiposDeIngresso == 'superior') {
        comprarSuperior(qtdInserida);
    } else {
        comprarInferior(qtdInserida);
    }
}

function comprarPista(qtdInserida) {
    let qtdDisponivelPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtdInserida > qtdDisponivelPista || qtdInserida == 0 || isNaN(qtdInserida)) {
        alert('Por favor, revise a quantidade de ingressos da Pista.')
    } else if(qtdInserida <= qtdDisponivelPista) {
        qtdDisponivelPista = qtdDisponivelPista - qtdInserida;
        document.getElementById('qtd-pista').textContent = qtdDisponivelPista;
        alert('Compra da Pista realizada com sucesso.');
    }
}

function comprarSuperior(qtdInserida) {
    let qtdDisponivelSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtdInserida > qtdDisponivelSuperior || qtdInserida == 0 || isNaN(qtdInserida)) {
        alert('Por favor, revise a quantidade de ingressos da Cadeira Superior.')
    } else if(qtdInserida <= qtdDisponivelSuperior) {
        qtdDisponivelSuperior = qtdDisponivelSuperior - qtdInserida;
        document.getElementById('qtd-superior').textContent = qtdDisponivelSuperior;
        alert('Compra da Superior realizada com sucesso.');
    }
}

function comprarInferior(qtdInserida) {
    let qtdDisponivelInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtdInserida > qtdDisponivelInferior || qtdInserida == 0 || isNaN(qtdInserida)) {
        alert('Por favor, revise a quantidade de ingressos da Cadeira Inferior.')
    } else if(qtdInserida <= qtdDisponivelInferior) {
        qtdDisponivelInferior = qtdDisponivelInferior - qtdInserida;
        document.getElementById('qtd-inferior').textContent = qtdDisponivelInferior;
        alert('Compra da Inferior realizada com sucesso.');
    } 
}
