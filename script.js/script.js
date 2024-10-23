const chk = document.getElementById('chk');
const localStorageKey = "dark";

// Adiciona o evento ao checkbox
chk.addEventListener('change', () => {
  const isDark = chk.checked;
  toggleDarkMode(isDark);
  saveDataToLocalStorage(localStorageKey, isDark);
});

// Função para inicializar e restaurar o estadoo
initialize();

function initialize() {
  const data = loadDataFromLocalStorage(localStorageKey);

  // Se o dado existir no localStorage, aplicar
  if (data !== null && data !== 'undefined') {
    const isDark = JSON.parse(data);  // Converter para booleano
    chk.checked = isDark;
    toggleDarkMode(isDark);
  }
}

// Função para alternar o modo escuro
function toggleDarkMode(isDark) {
  document.body.classList.toggle('dark', isDark);
}

// Função para salvar dados no localStorage
function saveDataToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Função para carregar dados do localStorage
function loadDataFromLocalStorage(key) {
  return localStorage.getItem(key);
}
