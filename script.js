let botaoCriptografar = document.getElementById('criptografar');
let resultadoTexto = document.querySelector('.resultado__texto');
let resultadoAviso = document.querySelector('.resultado__aviso');

botaoCriptografar.addEventListener('click', () => {
    // Verifica a direção atual e altera
    if (resultadoTexto.style.flexDirection === 'column') {
        resultadoTexto.style.flexDirection = 'row';
        resultadoTexto.style.justifyContent = 'start';
        resultadoAviso.style.display = 'none';
    } else {
        resultadoTexto.style.flexDirection = 'row';
        resultadoTexto.style.justifyContent = 'start';
        resultadoAviso.style.display = 'none';
    }
});

function criptografar() {
    // Seleciona o elemento textarea pelo nome
    const textoPlano = document.getElementsByName('texto__plano')[0].value;
  
    // Realiza as substituições das vogais
    const textoCifrado = textoPlano
      .replaceAll('e', 'enter')
      .replaceAll('i', 'imes')
      .replaceAll('a', 'ai')
      .replaceAll('o', 'ober')
      .replaceAll('u', 'ufat');
  
    // Seleciona o elemento p pelo id e atualiza o conteúdo
    document.getElementById('texto__cifrado').textContent = textoCifrado;
}
  
// Associa a função ao clique do botão
botaoCriptografar = document.getElementById('criptografar');
botaoCriptografar.addEventListener('click', criptografar);

/* ------------------ FUNÇÃO DESCRIPTOGRAFAR -----------------------*/
function descriptografar() {
    // Captura o texto da textarea
    const textarea = document.querySelector('textarea[name="texto__plano"]');
    const textoPlano = textarea.value;
    
    // Realiza as substituições
    let textoDescriptografado = textoPlano
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    
    // Insere o resultado no <p> com id 'texto__cifrado'
    document.getElementById('texto__cifrado').textContent = textoDescriptografado;
}

// Adiciona o evento de clique ao botão após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('descriptografar').addEventListener('click', descriptografar);
});

let botaoDescriptografar = document.getElementById('descriptografar');

botaoDescriptografar.addEventListener('click', () => {
    // Verifica a direção atual e altera
    if (resultadoTexto.style.flexDirection === 'column') {
        resultadoTexto.style.flexDirection = 'row';
        resultadoTexto.style.justifyContent = 'start';
        resultadoAviso.style.display = 'none';
    } else {
        resultadoTexto.style.flexDirection = 'row';
        resultadoTexto.style.justifyContent = 'start';
        resultadoAviso.style.display = 'none';
    }
});

/* ----------- script para o botão copiar ------------------- */
const botaoCopiar = document.getElementById('copiar');
const textoCifrado = document.getElementById('texto__cifrado');

botaoCopiar.addEventListener('click', () => {
  const tempInput = document.createElement('input');

  tempInput.value = textoCifrado.textContent;

  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
});