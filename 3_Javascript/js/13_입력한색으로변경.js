// 입력값 (배열 저장)
const inputList = document.querySelectorAll(".color-input");

// box의 backgroundColor를 변경
const boxList = document.querySelectorAll(".box");

document.querySelector("#changeButton").addEventListener("click", function() {
    for (let i = 0; i < inputList.length; i++) {
        boxList[i].style.backgroundColor = inputList[i].value;
    }
});