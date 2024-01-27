// 요소.remove() : 요소 제거
// 요소.classList.add("클래스명") : 클래스 추가
// 요소.classList.remove("클래스명") : 클래스 제거


// 만들려는 기능 중 공통적으로 사용되는 요소를 전역 변수 선언
const addBtn = document.getElementById("add"); // 추가 버튼
const calcBtn = document.getElementById("calc"); // 계산 버튼

// 최종적으로 동적으로 만들어진 요소를 붙여야 하는 요소
const container = document.querySelector(".container");

// 추가 버튼 클릭 시
document.querySelector("#add").addEventListener("click", () => {
    // 1. input, span이 들어갈 div 생성
    const row = document.createElement("div");
    row.classList.add("row");

    // 2. input 요소 생성
    const input = document.createElement("input"); // <input></input>
    input.setAttribute("type", "number"); // == input.type = "number";
    input.classList.add("input-number"); // ==input.setAttribute("class", "input-number");


    // 3. span 요소 생성하기
    const span = document.createElement("span"); // <span></span>
    span.classList.add("remove-row"); // <span class="remove-row"></span>
    
    span.innerHTML = "&times;"; // == 'x' 기호

    // ----- 조립하기 -----
    // 4. div.row 요소에게 자식으로 input, span 추가
    row.append(input, span);

    // 5. 완성된 div.row를 container의 마지막 자식으로 추가
    container.append(row);


    // ***************************
    // 클릭된 x 버튼의 부모 요소를 제거

    // 1. 만들어지는 x버튼(span)에 이벤트 리스너 추가
    span.addEventListener("click", e => {

        // 2. 현재 이벤트가 발생한 요소(클릭된 x버튼)의 부모 요소 선택(탐색)
        const parent = e.target.parentElement; // == div.row

        // 3. 부모 요소 제거
        parent.remove();
    });
});


// 계산 버튼 클릭 시
calcBtn.addEventListener("click", () => {
    
    // 1. 모든 input을 배열로 저장
    const inputList = document.querySelectorAll(".input-number");

    // 2. 값 저장할 변수 생성
    let sum = 0;

    // 3. inputList 돌면서 입력된 값 저장
    for (let i = 0; i < inputList.length; i++) {
        sum += Number(inputList[i].value);
    }

    // 4. 결과 출력
    alert(`결과 : ${sum}`);
});