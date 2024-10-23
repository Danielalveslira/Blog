// Seleciona todos os botões "Leia Mais" e os respectivos conteúdos
const toggleButtons = document.querySelectorAll('#toggleButton');
const conteudos = document.querySelectorAll('.conteudo');

// Adiciona evento de clique para cada botão individualmente
toggleButtons.forEach((button, index) => {
  let expandido = false; // Estado inicial para cada botão

  button.addEventListener('click', () => {
    expandido = !expandido; // Alterna o estado

    // Seleciona o conteúdo correspondente ao botão
    const conteudo = conteudos[index];

    if (expandido) {
      conteudo.classList.add('expandido'); // Expande o conteúdo
      button.textContent = 'Minimizar';
    } else {
      conteudo.classList.remove('expandido'); // Minimiza o conteúdo
      button.textContent = 'Leia Mais';
    }
  });
});
