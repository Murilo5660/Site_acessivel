// Seleciona os elementos raiz e os botões
const htmlElement = document.documentElement;
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');

// Configurações de tamanho em pixels
let tamanhoAtual = 16; 
const tamanhoMaximo = 24;
const tamanhoMinimo = 12;

// Evento para aumentar a fonte do site
btnAumentar.addEventListener('click', () => {
    if (tamanhoAtual < tamanhoMaximo) {
        tamanhoAtual += 2;
        htmlElement.style.fontSize = tamanhoAtual + 'px';
    }
});

// Evento para diminuir a fonte do site
btnDiminuir.addEventListener('click', () => {
    if (tamanhoAtual > tamanhoMinimo) {
        tamanhoAtual -= 2;
        htmlElement.style.fontSize = tamanhoAtual + 'px';
    }
});
