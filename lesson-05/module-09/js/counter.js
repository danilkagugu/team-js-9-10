import { refs } from "./refs.js";

console.log(refs.savesBtn);
refs.controlsBtn.addEventListener("click", onControlsBtnClick);
refs.savesBtn.addEventListener("click", onSaveBtnClick);
document.addEventListener('DOMContentLoaded', renderPage);

let currentCounter = Number(refs.display.textContent);
const LS_KEY = 'counter';

function onControlsBtnClick(event) {
  const clickBtn = event.target.dataset.action;

  if (clickBtn === "decrease") {
    currentCounter -= 1;
  }

  if (clickBtn === "increase") {
    currentCounter += 1;
  }

  if (clickBtn === "reset") {
    currentCounter = 0;
  }
  updateDisplay();
}

function onSaveBtnClick(event) {
  const clickBtn = event.target.dataset.action;
  if (clickBtn === "save") {
    return localStorage.setItem(LS_KEY, currentCounter);
  }

  localStorage.removeItem(LS_KEY);
}
function renderPage() {
  const lsData = localStorage.getItem(LS_KEY);
  if (lsData) {
    currentCounter = Number(lsData);
    updateDisplay();
  }
}

function updateDisplay() {
    refs.display.textContent = currentCounter;
}


