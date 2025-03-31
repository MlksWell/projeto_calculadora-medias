const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spamAprovado = '<span class= "Resultado aprovado">Aprovado</span>';
const spamReprovado = '<span class= "Resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima"));


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputnomeAtividade = document.getElementById('nome-atividade');
    const inputnotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputnomeAtividade.value)) {
        alert(`A atividade ${inputnomeAtividade.value} já foi inserida`);
    } else {

        atividades.push(inputnomeAtividade.value);
        notas.push(parseFloat(inputnotaAtividade.value));

        let linha = '<tr>';
        linha += `<td> ${inputnomeAtividade.value}</td>`;
        linha += `<td> ${inputnotaAtividade.value}</td>`;
        linha += `<td> ${inputnotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
        linhas += linha;
    }

    inputnomeAtividade.value = '';
    inputnotaAtividade.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal () {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spamAprovado : spamReprovado;

    console.log(media);
}

function calculaMediaFinal () {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
