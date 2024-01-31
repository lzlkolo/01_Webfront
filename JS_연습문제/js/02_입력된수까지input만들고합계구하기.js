// 결과 담을 곳
const container = document.querySelector("#container");

// 입력된 숫자
const inputNumber = document.querySelector("input");

document.querySelector("#btn").addEventListener("click", () => {
    const number = inputNumber.value;
    container.innerHTML = '';
    
    for (let i = 0; i < number; i++) {
        const input = document.createElement("input");
        input.setAttribute("type", "number");
        input.classList.add("input-number"); 
        container.append(input);
    }
});

document.querySelector("#sumBtn").addEventListener("click", () => {
    // 결과 저장할 변수
    let sum = 0;

    // 결과 출력할 span
    const result = document.querySelector("#result");

    // 입력된 숫자들
    const numberList = document.getElementsByClassName("input-number");

    for (let i = 0; i < numberList.length; i++) {
        // input요소에 등록된 값 가져와서 더하기
        sum += Number(numberList[i].value);
    }

    result.innerText = sum;
});