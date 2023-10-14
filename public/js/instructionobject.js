export default class Question {
  constructor(question, answer, description, index) {
    this.question = question;
    this.answer = answer;
    this.description = description;
    this.x = this.answer.length + 1;
    this.index = index;
  }
  //顯示題目
  DemoInfo() {
    const prevButton = document.getElementById("prev-button");
    const CurrentQ = document.getElementById("Q");
    CurrentQ.children[0].innerHTML = this.question;
    CurrentQ.children[1].innerHTML = this.description;
    //顯示答案
    for (let i = 1; i < this.x; i++) {
      if (this.x < 4 && i === 1) {
        const container = document.getElementById("A3");
        container.style.display = "none";
        prevButton.style.display = "block"; //顯示上一題按鈕
      } else if (this.x === 4) {
        prevButton.style.display = "none"; //隱藏上一題按鈕
      }
      const Ansbutton = document.getElementById("A" + i);
      Ansbutton.innerHTML = this.answer[i - 1];
    }
  }
  //Go to result page
  GoToResult(UserAns) {
    window.location.href = "/result"; //網頁切換到結果頁面
    localStorage.setItem("Ans", JSON.stringify(UserAns)); //將使用者的答案存入localStorage
  }
}

export const questions = [
  new Question(
    "你是遇到什麼動物？",
    ["貓狗", "鳥", "其他動物"],
    "請選擇你遇到的動物"
  ),
  new Question(
    "該動物是否有受傷？",
    ["是", "否"],
    "請以肉眼觀察該動物是否有明顯外傷，如流血、骨折等"
  ),
  new Question(
    "該動物是否有受到虐待？",
    ["是", "否"],
    "請選擇該動物是否有受到虐待"
  ),
  new Question(
    "該動物是否有走失的情形？",
    ["是", "否"],
    "請選擇該動物是否有走失的情形"
  ),
  new Question(
    "該動物是否造成您的生命威脅？",
    ["是", "否"],
    "請選擇該動物是否造成您的生命威脅"
  ),
];
