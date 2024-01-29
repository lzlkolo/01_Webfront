// 출력할 곳
const result = document.querySelector("#result");

// 숫자 가져오기
const numList = document.querySelectorAll(".number");

// count 변수
let count = 0;

document.querySelector(".container").addEventListener("click", function(e) {
    for (let i = 0; i < numList.length; i++) {
        console.log(numList[i]);
        console.log(count);
        console.log(e.target.innerText);

        if (count < 11 && numList[i] == Number(e.target.innerText)) {
            count++;
            result.innerText +=e.target.innerText;
        } else if (count > 10) {
            alert("10개까지 입력");
        }
    } 

});

document.querySelector("#reset").addEventListener("click", () => {
    result.innerText = '';
    count = 0;
});