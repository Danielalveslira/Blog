const toggleButton = document.getElementById('toggleButton');
const conteudo = document.querySelector('.conteudo');

let expandido = false;

toggleButton.addEventListener('click', () => {
  expandido = !expandido; // Alterna o estado

  if (expandido) {
    conteudo.classList.add('expandido'); // Expande o conteúdo
    toggleButton.textContent = 'Minimizar';
  } else {
    conteudo.classList.remove('expandido'); // Minimiza para 2 linhas
    toggleButton.textContent = 'Leia Mais';
  }
});
