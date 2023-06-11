const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  saveDataToLocalStorage(localStorageKey, chk.checked);
});

function saveDataToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadDataFromLocalStorage(key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
}

const localStorageKey = "dark";
const data = loadDataFromLocalStorage(localStorageKey);

if (data !== null && typeof data !== 'undefined') {
  chk.checked = data;
  document.body.classList.toggle('dark', data);
}

function save() {
  saveDataToLocalStorage(localStorageKey, chk.checked);
}
