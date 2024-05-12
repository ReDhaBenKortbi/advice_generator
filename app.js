import { getAdvice } from "./getAdvice.js";
const diceBtn = document.getElementById("diceBtn");

diceBtn.addEventListener("click", getAdvice);

window.onload = getAdvice();
