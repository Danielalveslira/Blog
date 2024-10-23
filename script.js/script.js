const chk = document.getElementById('chk');
const localStorageKey = "dark";

chk.addEventListener('change', () => {
  toggleDarkMode(chk.checked);
  saveDataToLocalStorage(localStorageKey, chk.checked);
});

initialize();

function initialize() {
  const data = loadDataFromLocalStorage(localStorageKey);

  if (data !== null && typeof data !== 'undefined') {
    chk.checked = data;
    toggleDarkMode(data);
  }
}

function toggleDarkMode(isDark) {
  document.body.classList.toggle('dark', isDark);
}

// Fim do modo escuro

