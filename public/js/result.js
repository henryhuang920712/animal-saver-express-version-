import { results } from "./resultobject.js";

const useranswer = JSON.parse(localStorage.getItem("Ans"));

results.forEach((result) => {
  if (result.useranswer.toString() === useranswer.toString()) {
    result.DemoResult();
  }
});

document.getElementById("back-button").addEventListener("click", () => {
  window.location.href = "/instruction";
});
