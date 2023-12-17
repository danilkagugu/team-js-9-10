const bodyEl = document.querySelector("body");
// console.log(bodyEl);

const titleEl = document.querySelector("#title");
// console.log(titleEl);

const listEl = document.querySelector(".list");
// console.log(listEl);
const datatopicsEl = document.querySelectorAll("[data-topic]");
// console.log(datatopicsEl);
const datatopicEl = document.querySelector("[data-topic]");
// console.log(datatopicEl);
const topicEl = listEl.firstElementChild;
// console.log(topicEl);

const lastTopicEl = listEl.lastElementChild;
// console.log(lastTopicEl);
// console.log(datatopicsEl[datatopicsEl.length - 1]);

// const firstTitleSibling = titleEl.nextElementSibling;
// // console.log(firstTitleSibling);
// datatopicsEl.forEach((item) => {
//   console.log(item.firstElementChild);
// });

const subTitlesEl = document.querySelectorAll("h3");
// console.log(subTitlesEl);
// subTitlesEl.forEach((item) => {
//   console.log(item);
// });
subTitlesEl.forEach((item) => {
  item.classList.add("active");
});

const topicNavigationEl = document.querySelector('[data-topic="navigation"]');
// console.log(topicNavigationEl);
topicNavigationEl.style.backgroundColor = "yellow";
topicNavigationEl.lastElementChild.textContent = "Я змінив тут текст!";

const currentTopic = "manipulation";
const dataEl = document.querySelector(`[data-topic="${currentTopic}"]`);
// console.log(dataEl);
dataEl.style.backgroundColor = "blue";

const subTitleComplite = document.querySelector(".completed");
// console.log(subTitleComplite);
subTitleComplite.parentNode.remove();
const parEl = document.createElement("p");
parEl.textContent = "Об'єктна модель документа (Document Object Model)";
titleEl.after(parEl);

// const liEl = document.createElement("li");
// const topTitleEl = document.createElement("h3");
// const pEl = document.createElement("p");
// topTitleEl.textContent = "Властивість innerHTML";
// pEl.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// // liEl.appendChild(topTitleEl);
// // liEl.appendChild(pEl);
// liEl.append(topTitleEl, pEl);
// listEl.append(liEl);
const markup = ` <li>
<h3>Властивість innerHTML</h3>
<p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
</li>`;

listEl.insertAdjacentHTML("beforeend", markup);
listEl.innerHTML = "";

const text = `Об'єктна модель документа Document Object Model - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;

const paragraphEl = document.createElement("p");
const textArray = text.split(/\s+/);
// console.log(textArray);

textArray.forEach((item) => {
  if (item.length > 8) {
    const spanEl = document.createElement("span");
    spanEl.style.color = "blue";
    spanEl.textContent = `${item} `;
    paragraphEl.appendChild(spanEl);
  } else {
    paragraphEl.innerHTML += `${item} `;
  }
});

// listEl.after(paragraphEl);

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const divContainer = document.createElement("div");
divContainer.classList.add("number-container");
const divArr = [];
for (let i = 0; i < 100; i += 1) {
  const divEl = document.createElement("div");
  divEl.classList.add("number");
  divEl.textContent = randomNumber();
  divEl.textContent % 2 === 0
    ? divEl.classList.add("even")
    : divEl.classList.add("odd");
  divArr.push(divEl);
}
console.log(divArr);
divContainer.append(...divArr);
listEl.before(divContainer);
