import refs from "./refs.js";
import { images } from "./images.js";
const { bodyEl } = refs;
let currentIndex = 0;

bodyEl.style.backgroundImage = images[images.length - 1];

function changeBackground() {
  bodyEl.style.backgroundImage = images[currentIndex];
  currentIndex += 1;
  if (images[currentIndex] === undefined) {
    currentIndex = 0;
  }
}
setInterval(changeBackground, 3000);
