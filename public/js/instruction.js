//Answers Function
import { questions } from "./instructionobject.js";

let UserAns = [];
let index = 0;
questions[index].DemoInfo();

//監聽按鈕點擊事件
const ansButtons = document.querySelectorAll(".ans-button");
ansButtons.forEach(function (button) {
  button.addEventListener("click", SwitchQuestion);
});

//監聽上一題按鈕點擊事件
const prevButton = document.getElementById("prev-button");
prevButton.addEventListener("click", function () {
  UserAns.pop(); //將使用者的答案從陣列中移除
  if (index > 1) {
    index = 1;
    questions[index].DemoInfo();
  } else {
    index = 0;
    questions[index].DemoInfo();
    const container = document.getElementById("A3");
    container.style.display = "grid";
  }
});

// 心智圖判斷邏輯
function SwitchQuestion(event) {
  UserAns.push(event.target.id); //將使用者的答案存入陣列紀錄
  if (UserAns.length === 1) {
    index = 1;
    questions[index].DemoInfo(); //該動物是否有受傷？
  } else if (UserAns[0] === "A1") {
    //貓狗
    if (UserAns.length === 3) {
      questions[index].GoToResult(UserAns); //網頁切換到結果頁面
    } else if (UserAns[1] === "A1") {
      index = 2;
      questions[index].DemoInfo(); //是否受到虐待
    } else {
      index = 3;
      questions[index].DemoInfo(); //該動物是否有走失的情形？
    }
  } else if (UserAns[0] === "A2") {
    //鳥
    if (UserAns[1] === "A1" && !UserAns[2]) {
      index = 2;
      questions[index].DemoInfo(); //是否受到虐待
    } else {
      questions[index].GoToResult(UserAns); //網頁切換到結果頁面
    }
  } else {
    //其他動物
    if (UserAns[1] === "A2" && !UserAns[2]) {
      index = 4;
      questions[index].DemoInfo(); //該動物是否造成您的生命威脅？
    } else {
      questions[index].GoToResult(UserAns); //網頁切換到結果頁面
    }
  }
}
