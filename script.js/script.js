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

function saveDataToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadDataFromLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
}

function save() {
  saveDataToLocalStorage(localStorageKey, chk.checked);
}

function toggleContent(id) {
  var content = document.getElementById('content' + id);
  var button = document.getElementById('toggleButton' + id);

  if (content.classList.contains('collapsed')) {
    content.classList.remove('collapsed');
    button.innerText = 'Leia Menos';
  } else {
    content.classList.add('collapsed');
    button.innerText = 'Leia Mais';
  }
}