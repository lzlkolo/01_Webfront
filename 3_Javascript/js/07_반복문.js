
for (let num = 1; num <= 5; num++) {
    // 조건식이 TRUE인 경우 반복 수행할 코드;
    console.log("통과!");
}

function check1() {
    let result = '';

    for (let num = 1; num <= 5; num++) {
        result += num;
    }

    console.log(result);
}

function check2() {
    for (let num = 1; num <= 10; num++) {
        console.log(num);
    }
}

function check3() {
    for (let num = 1; num <= 20; num++) {
        console.log(num);
    }
}

function check4() {
    for (let num = 5; num <= 15; num++) {
        console.log(num);
    }
}

function check5() {
    for (let num = 1; num <= 30; num += 2) {
        console.log(num);
    }
}

function check6() {
    let sum = 0;

    for (let num = 1; num <= 10; num++) {
        sum += num;
    }

    console.log(sum);
}


function sumFn() {

    // input에 작성된 값을 얻어와 저장
    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);

    // 결과를 출력하기 위한 요소 얻어와 저장
    const result1 = document.getElementById("result1");

    // 합계를 저장할 변수
    let sum = 0;

    // start부터 end까지 1씩 증가
    for (let num = start; num <= end; num++) {
        sum += num;
    }

    result1.innerText = sum;
}


// 동적으로 li 생성하기
function executeFn2() {
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const val = Number(document.getElementById("inputNumber2-3").value);

    // 결과 출력할 ul 요소
    const ul = document.getElementById("result2"); // ul 태그

    // 이전 ul에 작성된 내용 삭제
    ul.innerHTML = "";

    // start부터 end까지 val씩 증가 
    for (let num = start; num <= end; num += val) {
        ul.innerHTML += `<li>${num}</li>`;
    }
}

// 요소.innerText = `<li>${num}</li>`;
//  -> 요소의 내용으로 문자열을 대입
//      (HTML 태그를 해석하지 않고 문자열 그대로 보여줌)

// 요소.innerHTML = `<li>${num}</li>`;
//  -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력


// 구구단 출력
function executeFn3() {
    const val = Number(document.getElementById("input3").value);
    
    const ul = document.getElementById("result3");

    ul.innerHTML = "";

    if (2 <= val && val <= 9) {
        for (let num = 1; num <= 9; num++) {
            ul.innerHTML += `<li>${val} x ${num} = ${val * num}</li>`;
        }
    } else {
        alert("단수는 2~9 사이의 숫자만 입력하세요.");
    }
}