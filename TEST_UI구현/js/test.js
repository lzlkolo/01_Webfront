// 결과물 담을 곳
const resultContainer = document.querySelector(".result");
const result = document.createElement("div"); // <div></div>

// 이벤트 읽을 곳
const applyBtn = document.querySelector(".applyBtn");

// 값 가져오기
const width = document.getElementById("width");
const height = document.getElementById("height");
const fontSize = document.getElementById("font-size");
const color = document.getElementById("color");
const bgColor = document.getElementById("bgColor");
const text = document.getElementById("text");

applyBtn.addEventListener("click", function() {
    // 초기화
    result.innerHTML = '';
    
    const inputWidth = width.value;
    const inputHeight = height.value;
    const inputFontSize = fontSize.value;
    const inputColor = color.value;
    const inputBgColor = bgColor.value;
    const fontWeight = document.querySelector('input[name="font-weight"]:checked').value;
    const rowSort = document.querySelector('input[name="row-sort"]:checked').value;
    const colSort = document.querySelector('input[name="col-sort"]:checked').value;

    result.style.width = `${inputWidth}px`;
    result.style.height = `${inputHeight}px`;
    result.style.fontSize = `${inputFontSize}px`;

    result.style.fontWeight = fontWeight;
    result.style.color = inputColor;
    result.style.backgroundColor = inputBgColor;
    result.style.justifyContent = rowSort;
    result.style.alignItems = colSort;

    // 출력 문자열
    let inputText = text.value;
    const innerText = document.createElement("p");
    innerText.innerText = inputText;
    result.append(innerText);

    resultContainer.append(result);
});